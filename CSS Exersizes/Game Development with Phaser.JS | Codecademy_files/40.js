(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"+KsJ":function(e,t,i){"use strict";i.d(t,"b",function(){return a}),i.d(t,"d",function(){return shouldHideFileOrFolder}),i.d(t,"c",function(){return shouldDisableFile}),i.d(t,"a",function(){return n});var s={includePatterns:[/^\.babelrc$/],excludePatterns:[/^\./,/^\/test/,/^\/spec/],disablePatterns:[/\.sqlite$/]};function patternMatch(e,t){return e.some(function(e){return t.match(e)})}var a=function extname(e){if(e)return(e.split(".").slice(-1)[0]||"").toLowerCase()};function shouldHideFileOrFolder(e){return!patternMatch(s.includePatterns,e)&&!!patternMatch(s.excludePatterns,e)}function shouldDisableFile(e){return!!patternMatch(s.disablePatterns,e)}var n=function contentEncoding(e){switch(e.toLowerCase()||""){case"jpg":case"jpeg":case"png":case"gif":return"base64";default:return"text"}}},"4Nqy":function(e,t,i){"use strict";var s=i("hhPA"),a=i.n(s),n=i("BzM2");t.a=a.a.createStore({mixins:[n.StateMixin.store],getInitialState:function getInitialState(){return{lessonId:null,exerciseSlug:null}},setCursor:function setCursor(e){this.setState(e)},tokenize:function tokenize(){var e=this.state,t=e.lessonId,i=e.exerciseSlug;return t?"".concat(t,":").concat(i):""}})},"8/ig":function(e,t,i){"use strict";var s=i("3WF5"),a=i.n(s),n=i("uM7l"),r=i.n(n),l=i("hhPA"),o=i.n(l),c=i("BzM2"),h=i("+KsJ"),u=i("JoHf"),f=i("eHmS"),d=i("AiEq"),F=i("CgMK"),p=i("Nd0X"),v=i("Yr7M"),S=o.a.createStore({mixins:[c.StateMixin.store],init:function init(){this.listenTo(f.a.openFile,this.openFile),this.listenTo(f.a.updateFile,this.updateFile),this.listenTo(f.a.closeFile,this.closeFile),this.listenTo(f.a.setCurrentOpenFile,this.setActive),this.listenTo(d.a,this.setCurrentFiles),this.listenTo(u.a.deleteFile,this.deleteFile),this.listenTo(u.a.rename.completed,this.renameFile),this.listenTo(u.a.reset.completed,this.refreshFiles),this.listenTo(u.a.restore.completed,this.refreshFiles),this.listenTo(u.a.solution.completed,this.refreshFiles),this.listenTo(u.a.saveFilesAndCheckWork,this.saveFilesAndCheckWork),this.listenTo(u.a.autoSaveFiles,this.autoSaveFiles),this.listenTo(u.a.checkWork,this.checkWork)},getInitialState:function getInitialState(){return{files:[],hasReceivedCurrentFiles:!1,active:0}},openFile:function openFile(e){var t=this,i=r()(this.state.files);if(this.isOpen(e.path)){var s=a()(i,"path").indexOf(e.path);this.setState({active:s,files:i})}else{var n=h.a(h.b(e.path));u.a.getFile(e.path,n).then(function(e){var s=i.push(e)-1;t.setState({active:s,files:i})})}},closeFile:function closeFile(e){var t=r()(this.state.files),i=this.state.active;t.splice(e,1),this.state.active>=e&&(i=Math.max(this.state.active-1,0)),this.setState({active:i,files:t})},closeFileByName:function closeFileByName(e){if(this.isOpen(e)){var t=a()(this.state.files,"fileName").indexOf(e),i=this.active===t;this.closeFile(t,i)}},getFiles:function getFiles(){return this.state.files},setCurrentFiles:function setCurrentFiles(e){this.setState({files:e,hasReceivedCurrentFiles:!0,active:0})},setActive:function setActive(e){this.setState({active:e})},isOpen:function isOpen(e){return this.state.files.some(function(t){return t.path===e})},updateFile:function updateFile(e,t){var i=r()(this.state.files),s=!0,a=!1,n=void 0;try{for(var l,o=i[Symbol.iterator]();!(s=(l=o.next()).done);s=!0){var c=l.value;e.path===c.path&&(c.content=t)}}catch(e){a=!0,n=e}finally{try{s||null==o.return||o.return()}finally{if(a)throw n}}this.setState({files:i})},renameFile:function renameFile(e){var t=e.prevPath,i=e.newFile,s=r()(this.state.files),a=!0,n=!1,l=void 0;try{for(var o,c=s[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var h=o.value;h.path===t&&(h.path=i.path,h.name=i.name)}}catch(e){n=!0,l=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw l}}this.setState({files:s})},deleteFile:function deleteFile(e){for(var t=r()(this.state.files),i=0;i<t.length;i+=1)t[i].path===e&&t.splice(i,1);this.setState({files:t})},reloadFile:function reloadFile(e){var t=this.state.files.findIndex(function(t){return t.path===e.path});if(t>-1){var i=r()(this.state.files);i[t].content=e.content,this.setState({files:i})}},refreshFiles:function refreshFiles(){var e=this,t=this.state.files.map(function(e){return e.path});u.a.getFiles(t).then(function(t){e.setState({files:t})})},updateEditorWorkspace:function updateEditorWorkspace(){var e=u.a.saveFilesAndCheckWork,t=e.completed,i=e.failed;u.a.updateFiles(this.state.files).then(t,i)},saveFilesAndCheckWork:function saveFilesAndCheckWork(){var e=u.a.saveFilesAndCheckWork,t=e.completed,i=e.failed;u.a.updateFiles(this.state.files).then(F.a.evaluateCode).then(u.a.persist).then(v.a.refresh).then(p.a.run).then(t,i)},autoSaveFiles:function autoSaveFiles(){var e=u.a.autoSaveFiles,t=e.completed,i=e.failed;u.a.updateFiles(this.state.files).then(u.a.persist).then(t,i)},checkWork:function checkWork(){var e=u.a.checkWork,t=e.completed,i=e.failed;p.a.run().then(v.a.refresh).then(t,i)}});t.a=S},AiEq:function(e,t,i){"use strict";var s=i("hhPA"),a=i.n(s),n=i("JoHf"),r=i("HOuw"),l=i("4Nqy"),o=i("FCEL"),c=i("DsPH"),h=a.a.createStore({init:function init(){var e=this;this.files=[],this.pendingFiles=[],this.workspaceSlug=null,o.a.publishFilenames.listen(this.setDefaultFiles),this.listenTo(o.a.loadFiles,function(){e.getDefaultFiles(r.a.state)}),this.listenTo(r.a,this.getDefaultFiles)},setDefaultFiles:function setDefaultFiles(e){this.files=e},getDefaultFiles:function getDefaultFiles(e){var t=this;if(!e.workspaceUnpersistedChanges){var i=e.workspaceObject&&e.workspaceSlug!==this.workspaceSlug,s=!this.fetchedFiles||this.fetchedFiles.join(",")!==this.files.join(","),a=l.a.tokenize()!==this.lastExerciseFetchedFor||i||s;e.workspaceObject&&a&&e.workspaceReady&&(this.workspaceSlug=e.workspaceSlug,this.fetchedFiles=this.files,this.lastExerciseFetchedFor=l.a.tokenize(),n.a.getFiles(this.files).then(function(i){var s=i.map(function(e){return e&&e.path}),a=!0,n=!1,r=void 0;try{for(var l,o=t.files[Symbol.iterator]();!(a=(l=o.next()).done);a=!0){var h=l.value;-1===s.indexOf(h)&&Object(c.a)("warn","Failed to get file '".concat(h,"' from workspace '").concat(e.workspaceSlug,"'"))}}catch(e){n=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}t.trigger(i)}))}}});t.a=h},CgMK:function(e,t,i){"use strict";var s=i("hhPA"),a=i.n(s),n=i("BzM2"),r=i("HOuw"),l=i("8/ig"),o=i("MQDS"),c=i("EZBs");t.a=a.a.createStore({mixins:[n.StateMixin.store],getInitialState:function getInitialState(){return{evaluatingCode:!1}},evaluateCodeCb:function evaluateCodeCb(e){e.schema?o.a.setState(e):(e.stdout||e.stderr)&&(c.a.stdout(e.stdout),c.a.stderr(e.stderr))},codexCb:function codexCb(){},evaluateCode:function evaluateCode(){var e=l.a.state.files[l.a.state.active];return r.a.interface.isWorkspaceCodex()?r.a.interface.codexRun(e.content).then(this.codexCb,this.codexCb):"server"===e.evaluatedOn?r.a.interface.run(e,r.a.state.workspaceType).then(this.evaluateCodeCb,this.evaluateCodeCb):null}})},FCEL:function(e,t,i){"use strict";var s=i("hhPA"),a=i.n(s),n=a.a.createActions([]);n.publishFilenames=a.a.createAction(),n.loadFiles=a.a.createAction({asyncResult:!0}),t.a=n},MQDS:function(e,t,i){"use strict";var s=i("hhPA"),a=i.n(s),n=i("BzM2"),r=a.a.createStore({mixins:[n.StateMixin.store],getInitialState:function getInitialState(){return{result:"",schema:[],error:""}}});t.a=r},eHmS:function(e,t,i){"use strict";var s=i("hhPA"),a=i.n(s),n=a.a.createActions([]);n.closeFile=a.a.createAction(),n.openFile=a.a.createAction(),n.setCurrentOpenFile=a.a.createAction(),n.updateFile=a.a.createAction(),n.saveFiles=a.a.createAction({asyncResult:!0}),n.saveFilesWithoutCheckpointRun=a.a.createAction({asyncResult:!0}),n.reloadFile=a.a.createAction({asyncResult:!0}),t.a=n}}]);
//# sourceMappingURL=40.936e281f2038b3492573.chunk.js.map
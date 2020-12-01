(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{102:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},103:function(e,t,n){"use strict";var a=n(0),o=n(102);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return O})),n.d(t,"metadata",(function(){return j})),n.d(t,"rightToc",(function(){return f})),n.d(t,"default",(function(){return y}));var a=n(2),o=n(6),r=n(0),s=n.n(r),l=n(96),i=n(103),c=n(98),b=n(92),p=n.n(b),u=37,m=39;var h=function(e){var t=e.block,n=e.children,a=e.defaultValue,o=e.values,l=e.groupId,b=Object(i.a)(),h=b.tabGroupChoices,d=b.setTabGroupChoices,O=Object(r.useState)(a),j=O[0],f=O[1],g=Object(r.useState)(!1),y=g[0],w=g[1];if(null!=l){var v=h[l];null!=v&&v!==j&&o.some((function(e){return e.value===v}))&&f(v)}var N=function(e){f(e),null!=l&&d(l,e)},x=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},$=function(){w(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",T),window.addEventListener("mousedown",$)}),[]),s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},o.map((function(e){var t=e.value,n=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",p.a.tabItem,{"tabs__item--active":j===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case m:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),T(e)},onFocus:function(){return N(t)},onClick:function(){N(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))};var d=function(e){return s.a.createElement("div",null,e.children)},O={id:"installation",title:"Installation",sidebar_label:"Installation"},j={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"1. Setup your terminal",source:"@site/docs/installation.mdx",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/installation.mdx",version:"current",sidebar_label:"Installation",sidebar:"docs",previous:{title:"Upgrading",permalink:"/docs/upgrading"},next:{title:"Configuration",permalink:"/docs/configure"}},f=[{value:"1. Setup your terminal",id:"1-setup-your-terminal",children:[]},{value:"2. Download the latest binary",id:"2-download-the-latest-binary",children:[]},{value:"3. Download the themes",id:"3-download-the-themes",children:[]},{value:"4. Replace your existing prompt",id:"4-replace-your-existing-prompt",children:[]},{value:"5. Next steps",id:"5-next-steps",children:[]}],g={rightToc:f};function y(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"1-setup-your-terminal"},"1. Setup your terminal"),Object(l.b)(h,{groupId:"operating-systems",defaultValue:"windows",values:[{label:"windows",value:"windows"},{label:"macos",value:"macos"},{label:"unix",value:"unix"}],mdxType:"Tabs"},Object(l.b)(d,{value:"windows",mdxType:"TabItem"},Object(l.b)("h4",{id:"terminal"},"Terminal"),Object(l.b)("p",null,"While Oh my Posh works on the standard terminal, we advise using the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/terminal"}),"Windows Terminal"),".")),Object(l.b)(d,{value:"macos",mdxType:"TabItem"},Object(l.b)("h4",{id:"terminal-1"},"Terminal"),Object(l.b)("p",null,"As the standard terminal has issues displaying the ANSI characters correctly, we advise using\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.iterm2.com/"}),"iTerm2")," or any other modern day MacOS terminal that supports ANSI characters.")),Object(l.b)(d,{value:"unix",mdxType:"TabItem"},Object(l.b)("h4",{id:"terminal-2"},"Terminal"),Object(l.b)("p",null,"Oh my Posh uses ANSI color codes under the hood, these should work in every terminal,\nbut you may have to set the environment variable ",Object(l.b)("inlineCode",{parentName:"p"},"$TERM")," to ",Object(l.b)("inlineCode",{parentName:"p"},"xterm-256color")," for it to work."))),Object(l.b)("h4",{id:"font"},"Font"),Object(l.b)("p",null,"To see the icons displayed in Oh my Posh, ",Object(l.b)("strong",{parentName:"p"},"install")," and ",Object(l.b)("strong",{parentName:"p"},"configure")," your terminal to use a powerline enabled font.\nThe fonts we use are patched by ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.nerdfonts.com/"}),"Nerd Fonts"),", which offer a maximum of icons you can use."),Object(l.b)("p",null,"Oh my Posh was designed using ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/Meslo.zip"}),"Meslo LGM NF"),", but any Nerd Font should be compatible with the standard ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/tree/main/themes"}),"themes"),"."),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Windows fonts")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Make sure to install fonts system wide to avoid seeing rectangles in your terminal. See this ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/issues/145#issuecomment-730162622"}),"thread")," for more context."))),Object(l.b)("h3",{id:"2-download-the-latest-binary"},"2. Download the latest binary"),Object(l.b)(h,{groupId:"operating-systems",defaultValue:"windows",values:[{label:"windows",value:"windows"},{label:"macos",value:"macos"},{label:"unix",value:"unix"}],mdxType:"Tabs"},Object(l.b)(d,{value:"windows",mdxType:"TabItem"},Object(l.b)("h4",{id:"scoop"},"Scoop"),Object(l.b)("p",null,"A ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/scoop"}),"Scoop")," package is available to assist installs on Windows."),Object(l.b)("h4",{id:"manual"},"Manual"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"mkdir C:\\tools\nInvoke-Webrequest https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest/download/posh-windows-amd64.exe -OutFile C:\\tools\\oh-my-posh.exe\n"))),Object(l.b)(d,{value:"macos",mdxType:"TabItem"},Object(l.b)("h4",{id:"homebrew"},"Homebrew"),Object(l.b)("p",null,"A ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/homebrew"}),"Homebrew")," package is available to assist installs on MacOS."),Object(l.b)("h4",{id:"manual-1"},"Manual"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest/download/posh-darwin-amd64 -O /usr/local/bin/oh-my-posh\nchmod +x /usr/local/bin/oh-my-posh\n"))),Object(l.b)(d,{value:"unix",mdxType:"TabItem"},Object(l.b)("h4",{id:"manual-2"},"Manual"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest/download/posh-linux-amd64 -O /usr/local/bin/oh-my-posh\nchmod +x /usr/local/bin/oh-my-posh\n")))),Object(l.b)("h3",{id:"3-download-the-themes"},"3. Download the themes"),Object(l.b)(h,{groupId:"operating-systems",defaultValue:"windows",values:[{label:"windows",value:"windows"},{label:"macos",value:"macos"},{label:"unix",value:"unix"}],mdxType:"Tabs"},Object(l.b)(d,{value:"windows",mdxType:"TabItem"},Object(l.b)("h4",{id:"scoop-1"},"Scoop"),Object(l.b)("p",null,"When using ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/scoop"}),"Scoop"),", all themes are downloaded as well."),Object(l.b)("h4",{id:"manual-3"},"Manual"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"mkdir ~\\.poshthemes\nInvoke-Webrequest https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest/download/themes.zip -OutFile ~\\.poshthemes\\themes.zip\nExpand-Archive ~\\.poshthemes\\themes.zip -DestinationPath ~\\.poshthemes -Force\nRemove-Item ~\\.poshthemes\\themes.zip\n"))),Object(l.b)(d,{value:"macos",mdxType:"TabItem"},Object(l.b)("h4",{id:"homebrew-1"},"Homebrew"),Object(l.b)("p",null,"When using ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/homebrew"}),"Homebrew"),", all themes are downloaded as well."),Object(l.b)("h4",{id:"manual-4"},"Manual"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mkdir ~/.poshthemes\nwget https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest/download/themes.zip -O ~/.poshthemes/themes.zip\nunzip ~/.poshthemes/themes.zip -d ~/.poshthemes\nchmod u+rw ~/.poshthemes/*.json\nrm ~/.poshthemes/themes.zip\n"))),Object(l.b)(d,{value:"unix",mdxType:"TabItem"},Object(l.b)("h4",{id:"manual-5"},"Manual"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mkdir ~/.poshthemes\nwget https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest/download/themes.zip -O ~/.poshthemes/themes.zip\nunzip ~/.poshthemes/themes.zip -d ~/.poshthemes\nchmod u+rw ~/.poshthemes/*.json\nrm ~/.poshthemes/themes.zip\n")))),Object(l.b)("h3",{id:"4-replace-your-existing-prompt"},"4. Replace your existing prompt"),Object(l.b)("p",null,"If you have no idea which shell you're currently using, Oh my Posh has a utility switch that will you tell you."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"oh-my-posh --print-shell\n")),Object(l.b)(h,{defaultValue:"zsh",values:[{label:"zsh",value:"zsh"},{label:"powershell",value:"powershell"},{label:"bash",value:"bash"},{label:"nix",value:"nix"},{label:"fish",value:"fish"},{label:"nu",value:"nu"}],mdxType:"Tabs"},Object(l.b)(d,{value:"powershell",mdxType:"TabItem"},Object(l.b)("p",null,"Edit ",Object(l.b)("inlineCode",{parentName:"p"},"$PROFILE")," in your preferred PowerShell version and add the following lines."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),'[ScriptBlock]$Prompt = {\n    $lastCommandSuccess = $?\n    $realLASTEXITCODE = $global:LASTEXITCODE\n    $errorCode = 0\n    if ($lastCommandSuccess -eq $false) {\n        #native app exit code\n        if ($realLASTEXITCODE -is [int]) {\n            $errorCode = $realLASTEXITCODE\n        }\n        else {\n            $errorCode = 1\n        }\n    }\n    $startInfo = New-Object System.Diagnostics.ProcessStartInfo\n    $startInfo.FileName = "C:\\tools\\oh-my-posh.exe"\n    $cleanPWD = $PWD.ProviderPath.TrimEnd("\\")\n    $startInfo.Arguments = "-config=""$env:USERPROFILE\\.poshthemes\\jandedobbeleer.omp.json"" -error=$errorCode -pwd=""$cleanPWD"""\n    $startInfo.Environment["TERM"] = "xterm-256color"\n    $startInfo.CreateNoWindow = $true\n    $startInfo.StandardOutputEncoding = [System.Text.Encoding]::UTF8\n    $startInfo.RedirectStandardOutput = $true\n    $startInfo.UseShellExecute = $false\n    if ($PWD.Provider.Name -eq \'FileSystem\') {\n      $startInfo.WorkingDirectory = $PWD.ProviderPath\n    }\n    $process = New-Object System.Diagnostics.Process\n    $process.StartInfo = $startInfo\n    $process.Start() | Out-Null\n    $standardOut = $process.StandardOutput.ReadToEnd()\n    $process.WaitForExit()\n    $standardOut\n    $global:LASTEXITCODE = $realLASTEXITCODE\n    #remove temp variables\n    Remove-Variable realLASTEXITCODE -Confirm:$false\n    Remove-Variable lastCommandSuccess -Confirm:$false\n}\nSet-Item -Path Function:prompt -Value $Prompt -Force\n')),Object(l.b)("p",null,"Once added, reload your profile for the changes to take effect."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),". $profile\n"))),Object(l.b)(d,{value:"zsh",mdxType:"TabItem"},Object(l.b)("p",null,"Add the following to ",Object(l.b)("inlineCode",{parentName:"p"},"~/.zshrc"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'function powerline_precmd() {\n    PS1="$(oh-my-posh -config ~/.poshthemes/jandedobbeleer.omp.json --error $?)"\n}\n\nfunction install_powerline_precmd() {\n  for s in "${precmd_functions[@]}"; do\n    if [ "$s" = "powerline_precmd" ]; then\n      return\n    fi\n  done\n  precmd_functions+=(powerline_precmd)\n}\n\nif [ "$TERM" != "linux" ]; then\n    install_powerline_precmd\nfi\n')),Object(l.b)("p",null,"Once added, reload your profile for the changes to take effect."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"source ~/.zshrc\n"))),Object(l.b)(d,{value:"bash",mdxType:"TabItem"},Object(l.b)("p",null,"Add the following to ",Object(l.b)("inlineCode",{parentName:"p"},"~/.bashrc")," (or ",Object(l.b)("inlineCode",{parentName:"p"},"~/.profile")," on MacOS):"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'function _update_ps1() {\n    PS1="$(oh-my-posh -config ~/.poshthemes/jandedobbeleer.omp.json -error $?)"\n}\n\nif [ "$TERM" != "linux" ] && [ -x "$(command -v oh-my-posh)" ]; then\n    PROMPT_COMMAND="_update_ps1; $PROMPT_COMMAND"\nfi\n')),Object(l.b)("p",null,"Once added, reload your profile for the changes to take effect."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),". ~/.bashrc\n")),Object(l.b)("p",null,"Or, when using ",Object(l.b)("inlineCode",{parentName:"p"},"~/.profile"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),". ~/.profile\n"))),Object(l.b)(d,{value:"nix",mdxType:"TabItem"},Object(l.b)("p",null,"When using ",Object(l.b)("inlineCode",{parentName:"p"},"nix-shell --pure"),", ",Object(l.b)("inlineCode",{parentName:"p"},"oh-my-posh")," will not be accessible, and\nyour prompt will not appear."),Object(l.b)("p",null,"As a workaround you can add this snippet to ",Object(l.b)("inlineCode",{parentName:"p"},"~/.bashrc"),",\nwhich should re-enable the prompt in most cases:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# Workaround for nix-shell --pure\nif [ "$IN_NIX_SHELL" == "pure" ]; then\n    if [ -x oh-my-posh ]; then\n        alias powerline-go="oh-my-posh -config ~/.poshthemes/jandedobbeleer.omp.json"\n    fi\nfi\n')),Object(l.b)("p",null,"Once added, reload your profile for the changes to take effect."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),". ~/.bashrc\n"))),Object(l.b)(d,{value:"fish",mdxType:"TabItem"},Object(l.b)("p",null,"Redefine ",Object(l.b)("inlineCode",{parentName:"p"},"fish_prompt")," in ",Object(l.b)("inlineCode",{parentName:"p"},"~/.config/fish/config.fish"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"function fish_prompt\n    eval oh-my-posh -config ~/.poshthemes/jandedobbeleer.omp.json -error $status\nend\n")),Object(l.b)("p",null,"Once added, reload your config for the changes to take effect."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),". ~/.config/fish/config.fish\n"))),Object(l.b)(d,{value:"nu",mdxType:"TabItem"},Object(l.b)("p",null,"Set the prompt and restart nu shell:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'config set prompt  "= `{{$(oh-my-posh -config ~/.poshthemes/jandedobbeleer.omp.json | str collect)}}`"\n')),Object(l.b)("p",null,"Restart nu shell for the changes to take effect."))),Object(l.b)("h3",{id:"5-next-steps"},"5. Next steps"),Object(l.b)("p",null,"At this point you're good to go. The ",Object(l.b)("inlineCode",{parentName:"p"},"jandedobbeleer.omp.json")," theme displays most common use-cases\nin your prompt so 9/10 you'll be more than happy with it. However, if you want to explore additional\nfunctionality, going through the additional steps below will help you get started."),Object(l.b)("h4",{id:"change-the-theme"},"Change the theme"),Object(l.b)("p",null,"We downloaded all the themes and set ",Object(l.b)("inlineCode",{parentName:"p"},"jandedobbeleer.omp.json")," as the one to use.\nHowever, there are a lot more to be discovered and maybe there are some you like better."),Object(l.b)("p",null,"Adjust your configuration to use any other theme from the folder we created (",Object(l.b)("inlineCode",{parentName:"p"},"~/.poshthemes"),")."),Object(l.b)("h4",{id:"override-the-theme-settings"},"Override the theme settings"),Object(l.b)("p",null,"Maybe there's a theme you like, but you don't fancy the colors. Or, maybe there's a segment you\nwant to tweak/add, or replace some of the icons with a different one. Whatever the case, read through all\navailable options first, by starting with the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configure"}),"configuration guide"),"."),Object(l.b)("p",null,"Afterwards, the easiest way to go about this is to print the current config and store it elsewhere first (for example ",Object(l.b)("inlineCode",{parentName:"p"},"~/.mytheme.omp.json"),")."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"oh-my-posh --print-config\n")),Object(l.b)("p",null,"This will write the current configuration in your shell, allowing you to copy paste it in a new file\nand store it somehwere. Once adjusted to your liking, ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/installation#4-replace-your-existing-prompt"}),"change the prompt setting")," to use the newly created file."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"oh-my-posh -config ~/.mytheme.omp.json\n")),Object(l.b)("h4",{id:"json-schema"},"JSON Schema"),Object(l.b)("p",null,"There's an easy to use ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh3/main/themes/schema.json"}),"JSON schema")," available to validate your theme and have auto completion when editing.\nWhen using ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code"),", you can extend your settings file (F1 -> Preferences: Open Settings (JSON))\nby adding the following lines:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"json.schemas": [\n  {\n    "fileMatch": ["*.omp.json"],\n    "url": "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh3/main/themes/schema.json"\n  }\n]\n')),Object(l.b)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89"))}y.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?o.a.createElement(h,l(l({ref:t},c),{},{components:n})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}}}]);
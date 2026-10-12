from pathlib import Path
import re,hashlib,json
scope=Path(__file__).parent
src=Path('research/frontier-44-special-representation-examples-28-owner-step3-cellular-branching-bindings-round1/kleshchev-final2-parent-handoff/after/lem-type-a-modular-root-interval-essential-subset-basis-and-count.md')
raw=src.read_text();assert hashlib.sha256(src.read_bytes()).hexdigest()=='66660788cee2101e7d53f2b5cb3abce6ebdfd82eb7d5dafd6abeb29144cef9a5'
prefix,body=raw.split('**Proof technique:** direct.\n\n',1)
proof,remarks=body.split('\n## Remarks',1)
rows={int(m.group(1)):m.group(2).strip() for m in re.finditer(r'^(\d+)\.1 (.*?)(?=\n\n\d+\.1 |\Z)',proof,flags=re.S|re.M)}
assert len(rows)==105
# Concatenate only adjacent related steps, keeping every original clause.
groups=[(i,i) for i in range(1,34)]+[(34,37),(38,40),(41,41),(42,46),(47,49),(50,51),(52,52),(53,53),(54,54),(55,58),(59,61),(62,63),(64,64),(65,67),(68,68),(69,69),(70,70),(71,74),(75,77),(78,79),(80,84),(85,85),(86,88),(89,93),(94,99),(100,104),(105,105)]
assert [i for a,b in groups for i in range(a,b+1)]==list(range(1,106))
oldnew={f'{i}.1':f'{n}.1' for n,(a,b) in enumerate(groups,1) for i in range(a,b+1)}
greek={'α':'alpha','β':'beta','γ':'gamma','δ':'delta','ε':'varepsilon','ζ':'zeta','λ':'lambda','μ':'mu','ν':'nu','π':'pi','σ':'sigma','ω':'omega','Δ':'Delta','Λ':'Lambda','Ξ':'Xi','ℓ':'ell'}
ops={'∅':r'\varnothing','∈':r'\in','∉':r'\notin','⊂':r'\subset','⊆':r'\subseteq','≤':r'\le','≥':r'\ge','≠':r'\ne','→':r'\to','∪':r'\cup','∩':r'\cap','⋃':r'\bigcup','⊔':r'\sqcup','Σ':r'\sum','Π':r'\prod','⊕':r'\bigoplus','⊗':r'\otimes','≪':r'\ll','±':r'\pm','−':'-','…':r'\cdots','′':"'",'·':r'\cdot'}

def tex(s):
 s=s.strip().replace('\\',r'\setminus ')
 s=s.replace('Jhat',r'\widehat{J}').replace('Mhat',r'\widehat{M}')
 s=s.replace('uk','u_k').replace('ik','i_k').replace('mh','m_h').replace('J0','J_0').replace('R0','R_0').replace('j1','j_1').replace('e_sT','e_s T').replace('δ_bcE','δ_bc E').replace('δ_daE','δ_da E').replace('^sB','^s B').replace('e_rf','e_r f').replace('a_iv','a_i v').replace('f_rv','f_r v').replace('e_rf_rv','e_r f_r v').replace('a_rv','a_r v').replace('c_UY','c_U Y').replace('e_iT','e_i T').replace('e_bT','e_b T').replace('Kv','K v').replace('GL_N',r'\operatorname{GL}_N').replace('detg',r'\det(g)')
 s=re.sub(r'binom\s*\(([^,()]+),([^()]+)\)',r'\\binom{\1}{\2}',s)
 s=re.sub(r'\b(min|max)\s*([A-Z(])',r'\\\1 \2',s)
 s=re.sub(r'\^\(([^()]*)\)',r'^{\1}',s)
 s=re.sub(r'([uqiambcβγΔλμ])([0-9]+|[Hfq])(?=[^A-Za-z]|$)',r'\1_{\2}',s)
 s=re.sub(r'([μλΔ])([aklH])(?=[^A-Za-z]|$)',r'\1_{\2}',s)
 for ch,cmd in greek.items():s=s.replace(ch,'\\'+cmd+' ')
 for ch,cmd in ops.items():s=s.replace(ch,cmd+' ' if cmd.startswith('\\') else cmd)
 s=re.sub(r'_([A-Za-z0-9]+)',r'_{\1}',s)
 s=s.replace('increasing',r'\mathrm{increasing}')
 # Original braces are sets unless introduced by a subscript, exponent or TeX command.
 chars=[];stack=[]
 for idx,ch in enumerate(s):
  if ch=='{':
   prev=s[idx-1] if idx else ''
   command=re.search(r'\\[A-Za-z]+$',s[:idx])
   group=prev in '_^' or command is not None
   stack.append(group);chars.append('{' if group else r'\{')
  elif ch=='}':
   group=stack.pop() if stack else False;chars.append('}' if group else r'\}')
  else:chars.append(ch)
 s=''.join(chars)
 s=s.replace('a is normal in',r'a\text{ is normal in }').replace(' is regular in',r'\text{ is regular in }').replace(' and C',r'\text{ and }C')
 s=re.sub(r'([μλΔ])([aklH])(?=[^A-Za-z]|$)',r'\1_{\2}',s)
 s=re.sub(r'\bhat\b',r'\\widehat{J}',s)
 s=s.replace('#essential subsets',r'\#\{\text{essential subsets}\}')
 s=re.sub(r'\b([a-zA-Z])\s+is\s+normal\s+in\s+',r'\1\\text{ is normal in }',s)
 return re.sub(r'\s+',' ',s).strip()

# Split accidental glued prose/symbols without changing words or assertions.
fixes={'Atq':'At q','inputb':'input b','outputa':'output a','entry1':'entry 1','and0':'and 0','value1':'value 1','is1':'is 1','is0':'is 0','coefficient1':'coefficient 1','firstk':'first k','ofv':'of v','ofx':'of x','allGL_N':'all GL_N','spansL':'spans L','containsv':'contains v','onx':'on x','weightγ':'weight γ','raisesx':'raises x','multiple ofv':'multiple of v','0or1':'0 or 1','greater than1':'greater than 1','for|':'for |','toF':'to F','inF':'in F','byC':'by C','ofr':'of r','ofU':'of U','modulop':'modulo p','minM':'min M','cutm':'cut m','cuti':'cut i','nonemptyE':'nonempty E','smallestm':'smallest m','fromT':'from T','asY':'as Y','toj':'to j','Atj':'At j','otherM':'other M','ofM':'of M','largerM':'larger M','onM':'on M','theT':'the T','theY':'the Y','somea':'some a','generalJ':'general J','groupY':'group Y','isB':'is B','gives(E)':'gives (E)','in(T)':'in (T)','same(T)':'same (T)','proves(P)':'proves (P)','proves(U)':'proves (U)','hence(M)':'hence (M)','allJ':'all J','nonessentialT':'nonessential T','essentialT':'essential T','thanJ':'than J','ofI':'of I','ofJ':'of J','linkedI':'linked I','linkedJ':'linked J','toJ':'to J','everyΔ':'every Δ','targets≤':'targets ≤','IfH':'If H','sinceI':'since I','useh':'use h','canonicalQ':'canonical Q','theβ':'the β','is(−1)':'is (−1)','if(b':'if (b','exactlyΞ':'exactly Ξ','ofΞ':'of Ξ','exactlyΔ':'exactly Δ','contribute1':'contribute 1','definition ofQ':'definition of Q','ApplyQ':'Apply Q','pointr':'point r','endpointc':'endpoint c','fromJhat':'from Jhat','ofJhat':'of Jhat','abovei':'above i','itsI':'its I','ifi':'if i','inJhat':'in Jhat','aJhat':'a Jhat','aJ ':'a J ','forJhat':'for Jhat','theΞ':'the Ξ','startingati':'starting at i','ofi':'of i','andh':'and h','essentialJ':'essential J','distinctJhat':'distinct Jhat','samehat':'same hat','theΔ':'the Δ','consecutivehat':'consecutive hat','containingt':'containing t','whereu':'where u','andu':'and u','Botht':'Both t','outsideK':'outside K','inK':'in K','ofu':'of u','chooseM':'choose M','whoseJhat':'whose Jhat','smallerhat':'smaller hat','largerhat':'larger hat','coefficientzero':'coefficient zero','ofhats':'of hats','theM':'the M','coefficienth':'coefficient h','thea_i':'the a_i','overF':'over F','every1':'every 1','Definition1.12':'Definition 1.12','in(r':'in (r','into[t':'into [t','are>':'are >','in[t':'in [t','into(v':'into (v','height1':'height 1','since−1':'since -1','through y−2':'through y−2','for every j':'for every j','parent\'s':'parent\'s','source5.6':'source 5.6','indices1':'indices 1','of∅':'of ∅','then{r}':'then {r}','are0':'are 0','and1':'and 1','everyΔa':'every Δa','into[r':'into [r','regularmatchingD':'regular matching D'}

def spacing(s):
 for a,b in sorted(fixes.items(),key=lambda x:-len(x[0])):s=re.sub(r'(?<![A-Za-z])'+re.escape(a),lambda m:b,s)
 s=re.sub(r'\b(min|max)([A-Z])',r'\1 \2',s)
 s=re.sub(r'([A-Za-z]{2,})([α-ωΑ-Ω])',r'\1 \2',s)
 s=re.sub(r'([A-Za-z])([ΣΠ])',r'\1 \2',s)
 s=re.sub(r'([A-Za-z]{2,})([≤≥<>≪±−])',r'\1 \2',s)
 s=re.sub(r'([A-Za-z]{2,})([\[(])(?=[A-Za-zα-ωΑ-Ω])',r'\1 \2',s)
 for a,b in {'indexb':'index b','matchingD':'matching D','targetr':'target r','Matchr':'Match r','targeta':'target a','onv':'on v','toY':'to Y','onj':'on j','ForH':'For H','minus2':'minus 2','bothF':'both F','by1':'by 1','as1':'as 1','into[':'into [','in[':'in ['}.items():s=re.sub(r'(?<![A-Za-z])'+re.escape(a),lambda m:b,s)
 return s

# A lexical formatter. Balanced formula strings already in backticks are handled first;
# prose outside formulas is copied, except the explicit spacing corrections above.
vars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzαβγδεζλμνπσωΔΛΞℓ'
operatorchars='∅=+−-<>≤≥≠∈∉⊂⊆∪∩⋃⊔→ΣΠ⊕⊗≪±·…′/:|'
allowed=set(vars+'0123456789'+operatorchars+'_{}[](),^\\')
knownwords={'min','max','binom','detg','GL','GL_N','Jhat','Mhat','Kv','a_iv','gv','gx','dv','hat','increasing','qf','mh','bH','cH','b1','b2','c1','u1','uk','λl','μk','ik','uk','mq'}

def token(s,pos):
 if pos>=len(s):return None
 c=s[pos]
 if c.isspace():return ('space',c,pos+1)
 if c in operatorchars or c in '{}[](),^\\':
  if c in 'ΣΠ⋃⊕' and pos+1<len(s) and s[pos+1]=='_':
   end=pos+2
   if end<len(s) and s[end]=='{':
    bal=1;end+=1
    while end<len(s) and bal:bal+=(s[end]=='{')-(s[end]=='}');end+=1
   else:
    m=re.match(r'[A-Za-zα-ωΑ-Ω0-9]+',s[end:])
    if m:end+=len(m.group())
   return ('math',s[pos:end],end)
  return ('punct',c,pos+1)
 m=re.match(r'[A-Za-zα-ωΑ-Ωℓ]+(?:hat)?',s[pos:])
 if m:
  word=m.group()
  if len(word)==1 or word in knownwords or re.match(r'^[α-ωΑ-Ω][a-zA-Z0-9]$',word):
   end=pos+len(word)
   # consume decorated indices/exponents as opaque balanced formula syntax
   while end<len(s) and s[end] in "_'′":
    if s[end] in "'′":end+=1;continue
    end+=1
    if end<len(s) and s[end]=='{':
     bal=1;end+=1
     while end<len(s) and bal:
      bal+= (s[end]=='{')-(s[end]=='}');end+=1
    else:
     z=re.match(r'[A-Za-zα-ωΑ-Ω0-9]+',s[end:])
     if z:end+=len(z.group())
   return ('math',s[pos:end],end)
  return None
 m=re.match(r'[0-9]+',s[pos:])
 if m:return ('math',m.group(),pos+len(m.group()))
 return None

def format_plain(s):
 s=spacing(s).replace('^sB','^s B')
 # Fix grammar-bearing backticks by keeping their words outside the math.
 s=s.replace('`M∩(r,v−2] is regular in(r,v−2]`','`M∩(r,v−2]` is regular in `(r,v−2]`')
 s=s.replace('`N(r,s)={a∈[r,s]: a is normal in [a,s] and C(r,a)=0}`','`N(r,s)={a∈[r,s]: a\\text{ is normal in }[a,s]\\text{ and }C(r,a)=0}`')
 chunks=re.split(r'(`[^`]*`)',s);out=[]
 for chunk in chunks:
  if chunk.startswith('`'):
   t=chunk[1:-1]
   # preserve intentionally inserted TeX text commands through translator
   t=t.replace('\\text', 'TEXTCOMMAND')
   q=tex(t).replace('TEXTCOMMAND',r'\text');out.append('$'+q+'$');continue
  i=0;pieces=[]
  while i<len(chunk):
   tt=token(chunk,i)
   # do not reclassify letters inside prose words
   startok=tt is not None and tt[0]!='space' and (i==0 or not chunk[i-1].isalpha())
   if tt and tt[1]=='a' and not re.match(r'a(?:_|[=<>≤≥≠∈∉+−-]|\s*[=<>≤≥≠∈∉+−-])',chunk[i:]):startok=False
   if tt and tt[1]=='increasing':startok=False
   if tt and tt[1]=='A' and re.match(r'A\s+[a-z]{2,}',chunk[i:]):startok=False
   if tt and tt[0]=='punct' and tt[1] not in '([{' and tt[1] not in 'ΣΠ⊕Ξ∅≤≥≠≪±−|…':startok=False
   if tt and tt[1].isdigit() and not re.match(r'\d+[≤≥=<>≠+−-]',chunk[i:]):startok=False
   if not startok:pieces.append(chunk[i]);i+=1;continue
   j=i;parts=[];depth=0
   while j<len(chunk):
    t=token(chunk,j)
    if not t:break
    kind,value,end=t
    if kind=='space':
     nxt=token(chunk,end)
     if not nxt:break
     # ordinary article "a" after a formula is prose
     if nxt[1]=='a' and not re.match(r'a(?:_|\s*[=<>≤≥≠∈∉+−-])',chunk[end:]):break
    if value in '([{':depth+=1
    if value in ')]}':
     if depth==0:break
     depth-=1
    if value==',' and depth==0:
     following=chunk[end:].lstrip();nxt=token(following,0)
     if not nxt or nxt[0]=='space':break
    parts.append(value);j=end
   expr=''.join(parts).rstrip()
   # strip sentence commas and unpaired opening punctuation from minimal expressions
   expr=expr.rstrip(',')
   if not expr or expr in '([{':pieces.append(chunk[i]);i+=1;continue
   consumed=len(''.join(parts).rstrip())
   if ''.join(parts).rstrip().endswith(','):consumed-=1
   pieces.append('$'+tex(expr)+'$');i=i+consumed
  out.append(''.join(pieces))
 return ''.join(out)

output=[];preservation=[]
for n,(a,b) in enumerate(groups,1):
 pieces=[]
 for old in range(a,b+1):
  text=re.sub(r'\s*\[(?:step |F1,)[^\n]*\]\s*(?:∎)?\s*$','',rows[old]).strip()
  pieces.append(text)
 joined=' '.join(pieces)
 formatted=format_plain(joined)
 # original main source uses one continuous chain; group internal tags discharged by concatenation
 tags='F1, F2, construct' if n==1 else f'step {n-1}.1, construct'
 output.append(f'{n}.1 {formatted} [{tags}]'+(' ∎' if b==105 else ''))
 preservation.append({'new_step':f'{n}.1','old_steps':[f'{i}.1' for i in range(a,b+1)],'original_untagged_joined':joined,'formatting_operations':'adjacent paragraph grouping; math delimiting/LaTeX notation; explicit word-symbol spacing; unchanged argument sequence'})

def polish(s):
 s=s.replace(r'\binom{h}\{a\}',r'\binom{h}{a}')
 s=s.replace('jth letter','$j$th letter')
 s=s.replace('exponent0or1','exponent $0$ or $1$').replace('singletonE','singleton $E$').replace('cutj','cut $j$').replace('aroundi','around $i$').replace('leadingY','leading $Y$').replace('common factorC $(r,j)$','common factor $C(r,j)$').replace('imageD','image $D$').replace('killsT $(J)v$','kills $T(J)v$').replace('makesK','makes $K$').replace('tou=$','to $u=').replace('in1995Definition2.9','in 1995 Definition 2.9').replace('or1','or 1')
 s=s.replace('output a.','output $a$.').replace('some a;','some $a$;').replace('An index a is','An index $a$ is').replace('position a has','position $a$ has').replace('Thus a is','Thus $a$ is').replace('normality of a','normality of $a$').replace('based at a','based at $a$').replace('unused target a with','unused target $a$ with')
 s=s.replace('parent\'$s$','parent\'s').replace('interval\'$s$','interval\'s').replace(r"$\beta 's$",r"$\beta$'s")
 s=s.replace('$p-$restricted','$p$-restricted').replace('$p-$small','$p$-small').replace(r'$\operatorname{GL}_{N}-$module',r'$\operatorname{GL}_N$-module').replace(r'$\delta -$target',r'$\delta$-target').replace(r'$\delta -$image',r'$\delta$-image').replace(r'$\sigma -$cut',r'$\sigma$-cut')
 s=s.replace(r'$P\cdot$det=0',r'$P\det=0$').replace(r'$P\cdot$det',r'$P\det$')
 s=s.replace(r'$\mu _{1}+\cdots +\mu k$',r'$\mu_1+\cdots+\mu_k$').replace(r'\lambda l',r'\lambda_l').replace(r'\Delta a',r'\Delta_a')
 s=s.replace(r'induct on|$M|$',r'induct on $|M|$')
 s=s.replace(r'${r}',r'$\{r\}').replace(r'${t}',r'$\{t\}').replace(r'${v}',r'$\{v\}').replace(r'${i}',r'$\{i\}').replace(r'${x}',r'$\{x\}')
 s=s.replace(r'$\varepsilon _{a}(r,s)=$#essential subsets',r'$\varepsilon_a(r,s)=\#\{\text{essential subsets}\}$')
 s=s.replace(r'$Z[x$,remaining a]',r'$\mathbb{Z}[x,\text{remaining }a]$')
 s=s.replace(r'sign($-1$)^${H+\sum _{a}(c_{a}-b_{a})}$',r'sign $(-1)^{H+\sum_a(c_a-b_a)}$')
 s=s.replace(r'$N(r,s)=\{a\in [r,s]: a\text\{ is normal in \}[a,s]\text\{ and \}C(r,a)=0\}$',r'$N(r,s)=\{a\in[r,s]:a\text{ is normal in }[a,s]\text{ and }C(r,a)=0\}$')
 s=s.replace(r'$\Xi _{r,s}(J)$ ≡ $\prod _{a\in [r,s]\setminus D}B(r,a) ($modp)',r'$\Xi_{r,s}(J)\equiv\prod_{a\in[r,s]\setminus D}B(r,a)\pmod p$')
 s=s.replace(r'$m=\min J ($and',r'$m=\min J$ (and').replace(r'$\sigma (r,v-2)=1 ($or',r'$\sigma(r,v-2)=1$ (or')
 s=s.replace(r'components a,$\cdots ,q$',r'components $a,\ldots,q$')
 s=s.replace('Let A be','Let $A$ be').replace('Since A is','Since $A$ is').replace(r'$E=N+$AE',r'$E=N+AE$').replace(r'indices 1,$\cdots ,s$',r'indices $1,\ldots,s$')
 # The source's compressed a0,...,at are the same indexed chain throughout.
 s=s.replace(r'$x=a_{0}<a_{1}<\cdots <$at',r'$x=a_0<a_1<\cdots<a_t$').replace(r"$\nu '($at,$y-1$)>0",r"$\nu'(a_t,y-1)>0$").replace('The last root at is','The last root $a_t$ is').replace(r'a0,$\cdots$,at',r'$a_0,\ldots,a_t$')
 s=s.replace(r'unless $I\ll J, h(I,J)=',r'unless $I\ll J$, and $h(I,J)=')
 s=s.replace(r'$k+1, (X)$',r'$k+1$, $(X)$')
 s=s.replace(r'are >$r$',r'are $>r$').replace(r'respectively <$u$',r'respectively $<u$')
 s=s.replace('since -1 is always nonzero','since $-1$ is always nonzero')
 s=s.replace("the parent's exact first-level count formula",'the first-level count formula').replace('the sibling construction','the first-level construction')
 s=s.replace(r'For a matrix $g, g^',r'For a matrix $g$, $g^')
 s=s.replace(r'block of $J: b_{a}=',r'block of $J$: $b_{a}=')
 s=s.replace(r'For a fixed $r, B(z,m)=',r'For a fixed $r$, $B(z,m)=')
 s=s.replace(r"For $y=x+1, \nu '(x,x)=0$ means",r"For $y=x+1$, $\nu'(x,x)=0$ means")
 if s.startswith('38.1 '):s=s.replace('$(T)$ In particular','$(R)$ In particular')
 if s.startswith('59.1 '):s=s.replace('(T)','(R)')
 # Keep prose punctuation outside an otherwise complete scalar formula.
 s=re.sub(r'\$([^$]+)([:])\$',r'$\1$\2',s)
 return s
output=[polish(x) for x in output]
result=prefix+'**Proof technique:** direct.\n\n'+'\n\n'.join(output)+'\n\n## Remarks'+remarks
(scope/'lem-type-a-modular-root-interval-essential-subset-basis-and-count.md').write_text(result)
(scope/'argument-preservation-map.json').write_text(json.dumps({'old_to_new':oldnew,'groups':preservation},indent=2,ensure_ascii=False)+'\n')
print('Grouped',len(rows),'original steps into',len(groups),'steps; Statement/deps prefix copied exactly.')

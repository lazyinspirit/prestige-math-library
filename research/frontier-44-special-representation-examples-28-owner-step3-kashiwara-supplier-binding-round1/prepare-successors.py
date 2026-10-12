import pathlib,json,hashlib,re,datetime,yaml
RUN='frontier-44-special-representation-examples-28'
D=pathlib.Path('research/'+RUN+'-owner-step3-kashiwara-supplier-binding-round1')
records=[]
def edit(i,fn,interface=False):
 p=pathlib.Path('items/'+i+'.md');before=p.read_text();after=fn(before)
 after=after.replace(r'e_i\prime\prime',"e_i''").replace(r'e_i\prime',"e_i'").replace(r'w\prime',"w'").replace("\\'","'")
 if before==after:raise ValueError('No change '+i)
 c=D/'successors'/(i+'.md');c.write_text(after)
 records.append({'id':i,'canonical_path':str(p),'before_raw_sha256':hashlib.sha256(before.encode()).hexdigest(),'candidate_path':str(c),'candidate_raw_sha256':hashlib.sha256(after.encode()).hexdigest(),'interface_changed':interface,'edits':[{'before':before,'after':after}],'live_application_authorized':False})
def rep(t,a,b):
 assert t.count(a)==1,(a,t.count(a));return t.replace(a,b)
def para(t,start,new):
 parts=t.split('\n\n');matches=[n for n,p in enumerate(parts) if p.startswith(start)];assert len(matches)==1,(start,matches);parts[matches[0]]=new;return '\n\n'.join(parts)
def dep(t,i):
 m=re.search(r'^deps: \[(.*)\]$',t,re.M);assert m
 ds=[x.strip() for x in m.group(1).split(',')];
 if i not in ds:ds.append(i)
 return t[:m.start()]+ 'deps: ['+', '.join(ds)+']'+t[m.end():]
edit('thm-unique-kashiwara-i-string-decomposition',lambda t:rep(t,r'+\Theta_{i,a}F_i^{(a-1)}E_i^bu',r'+F_i^{(a-1)}\Theta_{i,a}E_i^bu'))
old='The negative-half counterpart of these operators, where the infinite string has no bottom and only the lower-string relation survives, is the skew-derivation pair of [[def-kashiwara-skew-derivations-on-the-negative-quantum-half]]; it is not used here.'
new=r'The analogous Kashiwara operators on the negative half $U_q^-$ are the shifts of its unique $e_i\prime$-string decomposition ([[thm-the-i-string-decomposition-of-the-negative-half]]), constructed using the skew derivation of [[def-kashiwara-skew-derivations-on-the-negative-quantum-half]]. Their strings have no bottom: $\tilde e_i\tilde f_i=\mathrm{id}$ and $\tilde f_i\tilde e_i=\mathrm{id}-P_i$, where $P_i$ projects onto $\ker e_i\prime$; the second identity follows by subtracting the position-zero coefficient $u_0=P_iu$ from the string expansion. These string-shift operators are distinct from the skew derivations $e_i\prime,e_i\prime\prime$. No negative-half operator is used in the module verification below.'
edit('def-kashiwara-crystal-operators',lambda t:dep(rep(t,old,new),'thm-the-i-string-decomposition-of-the-negative-half'),True)
def skew(t):
 a=t.split('1.1 For each word',1)[1].split('\n\n',1)[0]
 b=a[:a.index('Each is a finite')]+r'Each is a finite $\mathbb Q(q)$-linear combination of words. If $w$ has degree $-\nu$, every nonzero term of $Q_w,R_w$ has degree $-\nu+\alpha_i$: inductively a nonzero $Q_{w\prime},R_{w\prime}$ has degree $\deg w\prime+\alpha_i$, multiplication by $F_{j_1}$ gives $\deg w+\alpha_i$, and the term $\delta_{ij_1}w\prime$ has that degree when $j_1=i$. [given, F1, F2, construct]'
 t=rep(t,'1.1 For each word'+a,'1.1 For each word'+b)
 t=para(t,'6.1 For the grading',r'6.1 Grading and nilpotence. The degree computation of step 1.1 shows that for a word $w$ of degree $-\nu$, every nonzero term of $Q_w,R_w$ has degree $-\nu+\alpha_i$. These are negative words, so both coefficients vanish if $\nu-\alpha_i\notin Q_+$; otherwise they belong to $U_q^-[-(\nu-\alpha_i)]$. By linearity the same holds on every homogeneous component. Thus $e_i\prime,e_i\prime\prime$ raise actual degree by $\alpha_i$ and lower positive height by one, and their $k$-th powers vanish on degree $-\nu$ for $k>\operatorname{ht}(\nu)$. Every vector has finite homogeneous support, so both maps are locally nilpotent. [step 1.1, step 5.1, F5, algebra]')
 return t
edit('def-kashiwara-skew-derivations-on-the-negative-quantum-half',skew)
def integral(t):
 t=para(t,'1.1 The deletion rule:',r'1.1 The deletion rule. From $e_i\prime F_i=q_i^{-2}F_ie_i\prime+1$ and $e_i\prime(1)=0$, induction on $r\ge1$ gives $e_i\prime(F_i^r)=(\sum_{s=0}^{r-1}q_i^{-2s})F_i^{r-1}=q_i^{-(r-1)}[r]_iF_i^{r-1}$. Dividing by the nonzero $[r]_i!$ yields $e_i\prime(F_i^{(r)})=q_i^{-(r-1)}F_i^{(r-1)}$. For $j\ne i$, the relation $e_i\prime F_j=q_i^{-a_{ij}}F_je_i\prime$ and $e_i\prime(1)=0$ give $e_i\prime(F_j^r)=0$, hence $e_i\prime(F_j^{(r)})=0$. [given, F1, F4, algebra]')
 old=t.split('If also $x=\\sum_nF_i^{(n)}y_n$',1)[1].split(' [step 2.2',1)[0]
 new=r' with $e_i\prime y_n=0$, subtract the two finite expansions and put $z_n:=x_n-y_n$. If some $z_n$ is nonzero, let $N$ be its largest index. Applying $(e_i\prime)^N$ to $0=\sum_nF_i^{(n)}z_n$ gives $0=q_i^{-N(N-1)/2}z_N$ by step 2.2, a contradiction. Thus every $z_n=0$, proving uniqueness.'
 t=rep(t,old,new)
 return rep(t,r'$F_iy=\sum_{n\ge1}F_i^{(n)}y_{n-1}$',r'$F_iy=\sum_{n\ge1}[n]_iF_i^{(n)}y_{n-1}$')
edit('lem-divided-power-half-has-integral-skew-string-coefficients',integral)
edit('lem-cartan-projection-constructs-the-quantum-verma-contravariant-form',lambda t:para(rep(rep(rep(t,r'q_i^{m-r(r+1)+r}',r'q_i^{rm-r^2}'),r'q_i^rF_i^{(r)}K_i^{-r}',r'q_i^{r^2}F_i^{(r)}K_i^{-r}'),r'q_i^{-r}K_i^rE_i^{(r)}',r'q_i^{-r^2}K_i^rE_i^{(r)}'),'6.1 Ordinary simplicity.',r'6.1 Ordinary simplicity. Let $V$ be the quotient of the statement and $0\ne W\subseteq V$ an ordinary submodule. Choose $0\ne x\in W$ and write $x=\sum_jx_j$ with nonzero homogeneous components of distinct labels $\mu_j\in\lambda-Q_+$. Choose a minimal label $\mu_j$ in this finite support. Homogeneity and nondegeneracy give a homogeneous $b\in U_q^-[-(\lambda-\mu_j)]$ with $B(x_j,b\bar v_\lambda)\ne0$. The vector $y:=\sigma(b)x$ belongs to $W$. For $k\ne j$, $\sigma(b)x_k$ would have label $\lambda+\mu_k-\mu_j$, which cannot lie in $\lambda-Q_+$: membership would imply $\mu_k<\mu_j$, contradicting minimality. Thus $y=\sigma(b)x_j\in V_\lambda=\mathbb Q(q)\bar v_\lambda$, and $B(y,\bar v_\lambda)=B(x_j,b\bar v_\lambda)\ne0$. Hence $W$ contains $\bar v_\lambda$ and equals its cyclic module $V$. This proves ordinary simplicity without taking homogeneous components inside $W$. [step 4.1, step 5.1, F1, F2, algebra]'))
def toral(t):
 t=rep(t,r'(units $[r]_i!$ and $(q_i-q_i^{-1})$)',r'(units $[r]_i!$ and $q_i^{\pm1}$)')
 a='No step divides by $q_i^s-q_i^{-s}$ after specializing; the only divisions were by $[r]_i!$ and by $(q_i-q_i^{-1})$, which are units in the DVR used by the rational-local theorem.'
 b=r'No step divides by $q_i^s-q_i^{-s}$ after specializing. The factors $[r]_i!$ and $q_i^{\pm1}$ are units in the local DVR; quantum-integer and binomial ratios are evaluated through their Laurent-polynomial identities, not by treating the vanishing $q_i-q_i^{-1}$ as a unit.'
 return rep(t,a,b)
edit('lem-q-one-toral-specialization-identifies-the-classical-cartan-generators',toral,True)
edit('ex-kashiwara-strings-in-the-three-dimensional-sl-two-module',lambda t:para(t,'[F1]',r'[F1] In $V=L_1(2)$ use descending weight labels $v_2$ (highest), $v_1:=F_1v_2$ and $v_0:=F_1^{(2)}v_2$. Then $K_1v_2=q^2v_2$, $K_1v_1=v_1$, $K_1v_0=q^{-2}v_0$; $F_1v_2=v_1$, $F_1v_1=[2]_1v_0$, $F_1v_0=0$; and $E_1v_2=0$, $E_1v_1=[2]_1v_2$, $E_1v_0=v_1$. These are the supplier\'s divided-string formulas with its position index $t$ replaced by $2-t$ ([[thm-quantized-sl-two-string-formulas]], part (iii)).'))
edit('ex-crystal-graph-of-b-two-lambda-one',lambda t:rep(t,r'\frac{5}{1}',r'\frac{3}{1}'))
for i in ['thm-grand-loop-existence-of-highest-weight-crystal-bases','lem-crystal-lattice-polarizations-are-perfect-at-q-zero']:
 edit(i,lambda t:rep(t,'integral on the divided lattice',r'$A$-valued on the word lattice, with the exact $A_{\mathrm{loc}}$ denominator bound on the divided lattice'))
edit('lem-negative-half-reversal-preserves-integral-and-crystal-lattices',lambda t:rep(t,r'B(P,U_q^-)\subseteq A_0',r'B(P,\mathcal L(\infty))\subseteq A_0'))
edit('lem-string-ideal-decomposition-of-the-integral-lattices',lambda t:dep(rep(t,'[F2] Unique string decomposition ([[thm-unique-kashiwara-i-string-decomposition]])','[F2] Unique string decomposition ([[thm-the-i-string-decomposition-of-the-negative-half]])'),'thm-the-i-string-decomposition-of-the-negative-half'))
edit('lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree',lambda t:rep(t,r'$B_K(F_iP,Q)=(1-q_i^2)^{-1}B_K(P,e_i\prime Q)$',r'$B_K(F_iP,Q)=B_K(P,e_i\prime Q)$') if r'$B_K(F_iP,Q)=(1-q_i^2)^{-1}B_K(P,e_i\prime Q)$' in t else rep(t,"$B_K(F_iP,Q)=(1-q_i^2)^{-1}B_K(P,e_i'Q)$","$B_K(F_iP,Q)=B_K(P,e_i'Q)$"))
edit('thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique',lambda t:dep(rep(t,"$e_i'(xy)=e_i'(x)y+xe_i''(y)$",r'$e_i\prime(xy)=e_i\prime(x)y+q_i^{\langle\operatorname{wt}(x),h_i\rangle}xe_i\prime(y)$ for homogeneous $x$, with the opposite twist for $e_i\prime\prime$'),'def-kashiwara-skew-derivations-on-the-negative-quantum-half'))
def balanced(t):
 a='in a fixed root degree $\\alpha$ the kernel of $\\pi_\\lambda$ is exactly the image of $U_q^-F_k$ for the colors $k$ with $\\lambda(h_k)=0$, every other singular generator contributing only higher root degrees'
 b=r'the field kernel is $\sum_k U_q^-F_k^{(\lambda(h_k)+1)}$. In a fixed degree $\alpha$, if $\lambda(h_k)=0$ for one selected color $k$ and every other coordinate satisfies $\lambda(h_j)+1>\alpha_j$, its kernel component is exactly $(U_q^-F_k)[-\alpha]$, since the other singular generators have degrees exceeding $\alpha$'
 return rep(t,a,b)
edit('thm-the-highest-weight-crystal-triple-is-balanced',balanced)
edit('thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis',lambda t:rep(t,'$\\psi$ acts on the residue $(M_A\\cap L)/(M_A\\cap qL)$ by $q\\mapsto q^{-1}$ while fixing each crystal class $\\mathcal B$ modulo $q$.',r'$\psi$ transports the zero-chart residue map to the infinity-chart residue map; the bar-fixed global lifts and their corresponding residue labels are supplied by [F1], not by an action of $q\mapsto q^{-1}$ on the zero-chart quotient.'))
# Propose exact scaffold changes only for actual changed claim/dependency mirrors.
mirror=[]
for p in pathlib.Path('research').glob(RUN+'-batch-*.pages.json'):
 before=p.read_text();data=json.loads(before);changed=[]
 for page in data:
  for item in page.get('items',[]):
   rec=next((x for x in records if x['id']==item['id']),None)
   if not rec:continue
   cand=pathlib.Path(rec['candidate_path']).read_text();fm=yaml.safe_load(cand.split('---',2)[1]);adds=[x for x in fm['deps'] if x not in item['deps']]
   if adds:item['deps']+=adds;changed.append({'id':item['id'],'added_deps':adds})
   if item['id']=='def-kashiwara-crystal-operators':
    item['statement']+=' Negative-half counterpart: the distinct tilde operators shift the e_i prime strings supplied by thm-the-i-string-decomposition-of-the-negative-half; their infinite strings satisfy tilde e_i tilde f_i=id and tilde f_i tilde e_i=id-P_i, P_i the ker e_i prime projection.';changed.append({'id':item['id'],'statement_mirror':'added exact clarified negative-half counterpart'})
 if changed:
  q=D/'successors'/p.name;q.write_text(json.dumps(data,indent=2)+'\n');mirror.append({'canonical_path':str(p),'before_raw_sha256':hashlib.sha256(before.encode()).hexdigest(),'candidate_path':str(q),'candidate_raw_sha256':hashlib.sha256(q.read_bytes()).hexdigest(),'changes':changed})
packet={'version':1,'run':RUN,'round':1,'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'reviewer':'/root/repair_step3_kashiwara_supplier_binding','same_first_pass':True,'candidates':records,'manifest_mirrors':mirror,'changed_interfaces':['def-kashiwara-crystal-operators','lem-q-one-toral-specialization-identifies-the-classical-cartan-generators'],'root_integration_only':True,'native5_live':True,'final_after_binding_sufficiency':False,'native_edits':[]}
(D/'guarded-successor-packet.json').write_text(json.dumps(packet,indent=2)+'\n');print(len(records),'item candidates',len(mirror),'manifest candidates')

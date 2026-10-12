from pathlib import Path
import re,hashlib,json
source=Path('research/frontier-44-special-representation-examples-28-owner-step3-cellular-branching-bindings-round1/kleshchev-final2-parent-handoff/after/thm-kleshchev-first-level-branching-multiplicity.md')
out=Path('research/frontier-44-special-representation-examples-28-owner-step3-cellular-branching-bindings-round1/kleshchev-final2-formatting-successor/target')
s=source.read_text()
assert hashlib.sha256(source.read_bytes()).hexdigest()=='0a1d2644daaf1a7f0f63d4de2a3aa23561bb2dd35387bfa8b8aef7fed2006e3d'
# Literal replacements preserve the Statement and frontmatter; Facts F1 receives only a q=1 delimiter pair.
start=s.index('## Proof\n');prefix=s[:start];body=s[start:]
f1=re.search(r'(?m)^\[F1\].*$',prefix).group()
assert f1.count('q=1')==1 and '$q=1$' not in f1
prefix=prefix.replace(f1,f1.replace('q=1','$q=1$'))
# Shield converted math so subsequent literal replacements cannot alter it.
replacements=[];tokens={}
def change(old,new):
 global body
 if old not in body:return
 token='ZZMATHPLACEHOLDER'+str(len(tokens))+'ZZ'
 count=body.count(old);body=body.replace(old,token);tokens[token]=new
 replacements.append({'before':old,'after':new,'occurrences':count})
pairs=[
('dim L_N(μ)_(μ−α(r,s))=ε_a(r,s),   a_j=μ_j−μ_(j+1)',r'$\dim L_N(\mu)_{\mu-\alpha(r,s)}=\varepsilon_a(r,s)$, $a_j=\mu_j-\mu_{j+1}$'),
("ε_a(r,s)=ν_a(r,s)+sum_(u=r+1)^s ε'_a(r,u−1)ν_a(u,s)",r"$\varepsilon_a(r,s)=\nu_a(r,s)+\sum_{u=r+1}^s\varepsilon'_a(r,u-1)\nu_a(u,s)$"),
("ε'_a(r,t)=ε_(a+ω_t)(r,t)",r"$\varepsilon'_a(r,t)=\varepsilon_{a+\omega_t}(r,t)$"),
('highest(e e\' f f\' v)=highest(e f v) highest(e\' f\' v)',r"$\operatorname{highest}(ee'ff'v)=\operatorname{highest}(efv)\operatorname{highest}(e'f'v)$"),
('e_a f_c v=δ_ac v, e\'_b f\'_d v=δ_bd v',r"$e_af_cv=\delta_{ac}v$, $e'_bf'_dv=\delta_{bd}v$"),
('P_δ=sum_a f_a e_a',r'$P_\delta=\sum_a f_ae_a$'),
('P_δ x=x',r'$P_\delta x=x$'),
('ν_i=(μ_1,…,μ_(N−1))−ε_i',r'$\nu_i=(\mu_1,\ldots,\mu_{N-1})-\epsilon_i$'),
('b_u=[M:L_(N−1)(ν_u)]',r'$b_u=[M:L_{N-1}(\nu_u)]$'),
('d_i=dim L_N(μ)_(μ−β_i)',r'$d_i=\dim L_N(\mu)_{\mu-\beta_i}$'),
('d_i=b_i+sum_(u>i) b_u a_iu,  a_iu=dim L_(N−1)(ν_u)_(ν_i)',r'$d_i=b_i+\sum_{u>i}b_ua_{iu}$, $a_{iu}=\dim L_{N-1}(\nu_u)_{\nu_i}$'),
('ν_u−ν_i=ε_i−ε_u=α_i+…+α_(u−1)',r'$\nu_u-\nu_i=\epsilon_i-\epsilon_u=\alpha_i+\cdots+\alpha_{u-1}$'),
('a_i,…,a_(u−2),a_(u−1)+1',r'$a_i,\ldots,a_{u-2},a_{u-1}+1$'),
("d_i=ε_a(i,l),   a_iu=ε'_a(i,u−1)",r"$d_i=\varepsilon_a(i,l)$, $a_{iu}=\varepsilon'_a(i,u-1)$"),
("ε_a(i,l)=b_i+sum_(u>i)b_u ε'_a(i,u−1)",r"$\varepsilon_a(i,l)=b_i+\sum_{u>i}b_u\varepsilon'_a(i,u-1)$"),
("ε_a(i,l)=ν_a(i,l)+sum_(u>i)ν_a(u,l) ε'_a(i,u−1)",r"$\varepsilon_a(i,l)=\nu_a(i,l)+\sum_{u>i}\nu_a(u,l)\varepsilon'_a(i,u-1)$"),
('C(i,u)=u−i+sum_(t=i)^(u−1)a_t=u−λ_j+j−k',r'$C(i,u)=u-i+\sum_{t=i}^{u-1}a_t=u-\lambda_j+j-k$'),
('B(i,u)=u−i+sum_(t=i)^u a_t=u−λ_j+j−k+1',r'$B(i,u)=u-i+\sum_{t=i}^{u}a_t=u-\lambda_j+j-k+1$'),
('ν_a(i,l)=0 ifA is not normal,  ν_a(i,l)=1+#(normal removable nodes strictly aboveA of A\'s residue) ifA is normal',r"$\nu_a(i,l)=0$ if $A$ is not normal, and $\nu_a(i,l)=1+\#\{\text{normal removable nodes strictly above }A\text{ of }A\text{'s residue}\}$ if $A$ is normal"),
('H(F,1,S_m)=FS_m',r'$H(F,1,S_m)=FS_m$'),
('End_H(H)=H via rho_h(x)=hx',r'$\operatorname{End}_H(H)=H$ via $\rho_h(x)=hx$'),
('phi_ST is supported from type(T) to type(S)',r'$\varphi_{ST}$ is supported from $\operatorname{type}(T)$ to $\operatorname{type}(S)$'),
('phi_st↦m_st',r'$\varphi_{st}\mapsto m_{st}$'),
('phi_st rho_h into m_st h',r'$\varphi_{st}\rho_h$ into $m_{st}h$'),
('W^xi e≅C_M(xi) by w_t↦c_t',r'$W^\xi e\cong C_{\mathrm M}(\xi)$ by $w_t\mapsto c_t$'),
('phi_as phi_tb≡B_xi(w_s,w_t)phi_ab',r'$\varphi_{as}\varphi_{tb}\equiv B_\xi(w_s,w_t)\varphi_{ab}$'),
('m_as m_tb≡B_xi(w_s,w_t)m_ab',r'$m_{as}m_{tb}\equiv B_\xi(w_s,w_t)m_{ab}$'),
('B_xi(w_s,w_t)=G_M,xi(c_s,c_t)',r'$B_\xi(w_s,w_t)=G_{\mathrm M,\xi}(c_s,c_t)$'),
('B_xi(xe,y(1−e))=B_xi(x,y(1−e)e)=0',r'$B_\xi(xe,y(1-e))=B_\xi(x,y(1-e)e)=0$'),
('W^xi=W^xi e⊕W^xi(1−e)',r'$W^\xi=W^\xi e\oplus W^\xi(1-e)$'),
('rad_form(W^xi e)=rad_form(W^xi)e',r'$\operatorname{rad}_{\mathrm{form}}(W^\xi e)=\operatorname{rad}_{\mathrm{form}}(W^\xi)e$'),
('L^xi=W^xi/rad_form',r'$L^\xi=W^\xi/\operatorname{rad}_{\mathrm{form}}$'),
('L^xi e≅D_M(xi)',r'$L^\xi e\cong D_{\mathrm M}(\xi)$'),
("D_M(xi)≅D^{xi'} tensor sign",r"$D_{\mathrm M}(\xi)\cong D^{\xi'}\otimes\operatorname{sgn}$"),
('kappa(E_A)=E_diag(A,1)',r'$\kappa(E_A)=E_{\operatorname{diag}(A,1)}$'),
('kappa(1)=p',r'$\kappa(1)=p$'),
('S(N−1,m−1)',r'$S(N-1,m-1)$'),
('pS(N,m)p',r'$pS(N,m)p$'),
('L_N(mu)p',r'$L_N(\mu)p$'),
('g^(tensor(m−1))',r'$g^{\otimes(m-1)}$'),
('diag(g,1)',r'$\operatorname{diag}(g,1)$'),
('E_(A^t)',r'$E_{A^{\mathsf t}}$'),
("e' be the lower regular-type projection (1^(N−1))",r"$e'$ be the lower regular-type projection $(1^{N-1})$"),
("kappa(e')=e",r"$\kappa(e')=e$"),
('type (1^N)',r'type $(1^N)$'),
('m_nuT_d↦(row of entry j in t^nu d)_j',r'$m_\nu T_d\mapsto(\text{row of entry }j\text{ in }t^\nu d)_j$'),
('j d^(-1)',r'$jd^{-1}$'),
('rho_h:d↦hd',r'$\rho_h:d\mapsto hd$'),
('h^(-1)',r'$h^{-1}$'),
('(hd)^(-1)=d^(-1)h^(-1)',r'$(hd)^{-1}=d^{-1}h^{-1}$'),
("rho'_h",r"$\rho'_h$"),
('kappa(rho\'_h)=rho_h',r"$\kappa(\rho'_h)=\rho_h$"),
("(Xp)e'=Xe as FS_(N−1)-modules",r"$(Xp)e'=Xe$ as $FS_{N-1}$-modules"),
('L_(N−1)(eta)',r'$L_{N-1}(\eta)$'),
('D_M(eta)',r'$D_{\mathrm M}(\eta)$'),
('L_N(mu)e≅D^lambda tensor sign',r'$L_N(\mu)e\cong D^\lambda\otimes\operatorname{sgn}$'),
("nu_i=(lambda\\A)'",r"$\nu_i=(\lambda\setminus A)'$"),
('D^(lambda\\A) tensor sign',r'$D^{\lambda\setminus A}\otimes\operatorname{sgn}$'),
('S_(n−1)',r'$S_{n-1}$'),
('S_n',r'$S_n$'),
('g·x=xg^(-1)',r'$g\cdot x=xg^{-1}$'),
('x↦(y↦beta(x,y))',r'$x\mapsto(y\mapsto\beta(x,y))$'),
('beta(gx,y)=beta(x,g^(-1)y)',r'$\beta(gx,y)=\beta(x,g^{-1}y)$'),
('gamma(A)=1_(A normal)',r'$\gamma(A)=\mathbf1_{A\text{ normal}}$'),
('a_j=μ_j−μ_(j+1)',r'$a_j=\mu_j-\mu_{j+1}$'),
('a_u=μ_u−μ_(u+1)',r'$a_u=\mu_u-\mu_{u+1}$'),
('Γ=μ−(η,1)',r'$\Gamma=\mu-(\eta,1)$'),
('Γ_j=0 forj<i, Γ_j∈{0,1} fori≤j<l, and Γ_l=1',r'$\Gamma_j=0$ for $j<i$, $\Gamma_j\in\{0,1\}$ for $i\le j<l$, and $\Gamma_l=1$'),
('β_i−Γ',r'$\beta_i-\Gamma$'),
('Γ=β_u for someu≥i',r'$\Gamma=\beta_u$ for some $u\ge i$'),
('η=ν_u',r'$\eta=\nu_u$'),
('β_i=α_i+…+α_l',r'$\beta_i=\alpha_i+\cdots+\alpha_l$'),
('Γ=δ+ζ',r'$\Gamma=\delta+\zeta$'),
('each simple-root coefficient0or1',r'each simple-root coefficient $0$ or $1$'),
('coefficients are0or1',r'coefficients are $0$ or $1$'),
('M0⊂M1',r'$M_0\subset M_1$'),
('x∈M1',r'$x\in M_1$'),
('x intoM0',r'$x$ into $M_0$'),
('x into M0',r'$x$ into $M_0$'),
('e_a x∈M0',r'$e_ax\in M_0$'),
('f_a preserveM0',r'$f_a$ preserve $M_0$'),
('N−1',r'$N-1$'),
('μ_N=0',r'$\mu_N=0$'),
('l=N−1',r'$l=N-1$'),
('μ dominant polynomial',r'$\mu$ dominant polynomial'),
('L_N(μ)',r'$L_N(\mu)$'),
('L_N(mu)',r'$L_N(\mu)$'),
('norm1',r'norm $1$'),
('a_u>0',r'$a_u>0$'),
('a_u=0',r'$a_u=0$'),
('b_u=0',r'$b_u=0$'),
('ν_a(u,l)=0',r'$\nu_a(u,l)=0$'),
('b_i=ν_a(i,l)',r'$b_i=\nu_a(i,l)$'),
('i=l',r'$i=l$'),
('K=F(t)',r'$K=F(t)$'),
('N=n',r'$N=n$'),
('μ=λ\'',r"$\mu=\lambda'$"),
('λ≠(n)',r'$\lambda\ne(n)$'),
('i=λ_j',r'$i=\lambda_j$'),
('j=μ_i',r'$j=\mu_i$'),
('a_u<p',r'$a_u<p$'),
('u=i+1,…,l',r'$u=i+1,\ldots,l$'),
('a_u=0',r'$a_u=0$'),
('B=C=0',r'$B=C=0$'),
('C(i,u)=0',r'$C(i,u)=0$'),
('B(i,u)=0',r'$B(i,u)=0$'),
('0<a_u<p',r'$0<a_u<p$'),
('B=C+a_u',r'$B=C+a_u$'),
('j−1,…,1',r'$j-1,\ldots,1$'),
('λ_1+1',r'$\lambda_1+1$'),
('`−+`',r'$-+$'),
('`−`',r'$-$'),
('`+`',r'$+$'),
('`+−`',r'$+-$'),
('σ(i,l)',r'$\sigma(i,l)$'),
('N(i,l)',r'$N(i,l)$'),
('T_i²=1',r'$T_i^2=1$'),
('T_w',r'$T_w$'),
('e phi_ST e',r'$e\varphi_{ST}e$'),
('w_T',r'$w_T$'),
('omega=(1^m)',r'$\omega=(1^m)$'),
('omega',r'$\omega$'),
('q=1',r'$q=1$'),
('e*=e',r'$e^*=e$'),
('M^xi',r'$M^\xi$'),
('xi\' is regular',r"$\xi'$ is regular"),
('N=m=n',r'$N=m=n$'),
('(F^{N−1})^{⊗(m−1)}',r'$(F^{N-1})^{\otimes(m-1)}$'),
('E_A',r'$E_A$'),
('Xp',r'$Xp$'),
('Xe',r'$Xe$'),
('eta is restricted',r'$\eta$ is restricted'),
("lambda'",r"$\lambda'$"),
('lambda_j',r'$\lambda_j$'),
('lambda=(5,3,1)',r'$\lambda=(5,3,1)$'),
('p=2',r'$p=2$'),
('A=(3,1)',r'$A=(3,1)$'),
('λ=(n)',r'$\lambda=(n)$'),
('μ=(1^n)',r'$\mu=(1^n)$'),
('n=1',r'$n=1$'),
('n=0',r'$n=0$'),
('S0',r'$S_0$'),
]
for a,b in pairs:change(a,b)
# Convert remaining literal named variables and compact prose spacing outside math tokens.
more=[('atΓ',r'at $\Gamma$'),('atδ andζ',r'at $\delta$ and $\zeta$'),('atδ',r'at $\delta$'),('atζ',r'at $\zeta$'),('weightδ',r'weight $\delta$'),('weightΓ',r'weight $\Gamma$'),('deficitΓ',r'deficit $\Gamma$'),('componentδ',r'component $\delta$'),('Γ had',r'$\Gamma$ had'),('ofΓ',r'of $\Gamma$'),('δ-word',r'$\delta$-word'),('ζ-word',r'$\zeta$-word'),('f_a v and f\'_b v',r"$f_av$ and $f'_bv$"),('f_a f\'_b v',r"$f_af'_bv$"),('e_a e\'_b',r"$e_ae'_b$"),('f_c f\'_b v',r"$f_cf'_bv$"),('f_c f\'_b',r"$f_cf'_b$"),('e_a is',r'$e_a$ is'),('f_a is',r'$f_a$ is'),('e,e\' and',r"$e,e'$ and"),('f,f\'',r"$f,f'$"),('f\'f v',r"$f'fv$"),('ν_i weight',r'$\nu_i$ weight'),('η dominatingν_i',r'$\eta$ dominating $\nu_i$'),('Liftη',r'Lift $\eta$'),('Sinceη',r'Since $\eta$'),('sinceη dominatesν_i',r'since $\eta$ dominates $\nu_i$'),('ν_u is dominant',r'$\nu_u$ is dominant'),('ν_u must',r'$\nu_u$ must'),('of ν_u',r'of $\nu_u$'),('a legitimate dominant ν_u',r'a legitimate dominant $\nu_u$'),('dominant ν_u',r'dominant $\nu_u$'),('invalid ν_u',r'invalid $\nu_u$'),('coordinates ofν_u',r'coordinates of $\nu_u$'),('coordinate atu',r'coordinate at $u$'),('for all i',r'for all $i$'),('overK',r'over $K$'),('overF',r'over $F$'),('entries inF',r'entries in $F$'),('notj, and notp',r'not $j$, and not $p$'),('partu inλ',r'part $u$ in $\lambda$'),('A is',r'$A$ is'),('A survives',r'$A$ survives'),('aboveA',r'above $A$'),("A's residue",r"$A$'s residue"),('following A\'',r"following $A'$"),('afterA\'',r"after $A'$"),('whether A\'',r"whether $A'$"),('includes A',r'includes $A$'),('ofA ',r'of $A$ '),('forA ',r'for $A$ '),('forA and',r'for $A$ and'),('for type(T)',r'for $\operatorname{type}(T)$'),('type(T)',r'$\operatorname{type}(T)$'),('evaluated at1',r'evaluated at $1$'),('evaluation at1',r'evaluation at $1$'),('Evaluate every map at1',r'Evaluate every map at $1$'),('scalar is exactly1',r'scalar is exactly $1$'),('canonical norm1',r'canonical norm $1$'),('lift ye by xe',r'lift $ye$ by $xe$'),('exactly X rho_h',r'exactly $X\rho_h$'),('on1,…,N−1',r'on $1,\ldots,N-1$'),('at(i,l)',r'at $(i,l)$'),('and f_a',r'and $f_a$'),('send x ',r'send $x$ '),('for x.',r'for $x$.'),('λ and',r'$\lambda$ and'),('λ be',r'$\lambda$ be'),('p-regularλ',r'$p$-regular $\lambda$'),('characteristicp',r'characteristic $p$'),('e\' to',r"$e'$ to"),('lower projection e\'',r"lower projection $e'$"),('no extra inversion',r'no extra inversion'),('labelN',r'label $N$'),('of N.',r'of $N$.'),('one N ',r'one $N$ '),('one N this',r'one $N$ this'),('position1',r'position $1$'),('last coordinate1',r'last coordinate $1$'),('coordinate is1',r'coordinate is $1$'),('diagonal coordinate is1',r'diagonal coordinate is $1$'),('final entry1',r'final entry $1$'),('degree|μ|−1',r'degree $|\mu|-1$'),('GL_(N−1)',r'$\mathrm{GL}_{N-1}$'),('on Xp',r'on $Xp$'),('of Xp',r'of $Xp$'),('RHS',r'RHS')]
for a,b in more:change(a,b)
for token,new in tokens.items():body=body.replace(token,new)
# Resolve larger notation whose components were already converted, then format residual prose notation.
fixes=[
('l=$N-1$',r'$l=N-1$'),('GL_($N-1$)',r'$\mathrm{GL}_{N-1}$'),
('L_($N-1$)(ν_i)',r'$L_{N-1}(\nu_i)$'),
('(F^{$N-1$})^{⊗(m−1)}',r'$(F^{N-1})^{\otimes(m-1)}$'),
('(hd)^(-1)=d^(-1)$h^{-1}$',r'$(hd)^{-1}=d^{-1}h^{-1}$'),
('kappa($\rho\'_h$)=rho_h',r"$\kappa(\rho'_h)=\rho_h$"),
('Since0<$a_u<p$',r'Since $0<a_u<p$'),
('A=(j,λ_j)',r'$A=(j,\lambda_j)$'),
(r'$\operatorname{type}(T)$=$\omega$',r'$\operatorname{type}(T)=\omega$'),
('N−1',r'$N-1$'),('n−1',r'$n-1$'),
('for all i',r'for all $i$'),
('q1',r'$q=1$'),
]
for old,new in fixes:
 count=body.count(old)
 if count:
  body=body.replace(old,new);replacements.append({'before':old,'after':new,'occurrences':count,'stage':'residual-formatting'})
chunks=re.split(r'(\$[^$]*\$)',body)
plain=[]
for k,c in enumerate(chunks):
 if k%2:
  plain.append(c);continue
 local=[('ν_u',r'$\nu_u$'),('ν_i',r'$\nu_i$'),('b_i',r'$b_i$'),('rho_h',r'$\rho_h$'),('mu',r'$\mu$'),('eta',r'$\eta$'),('xi',r'$\xi$'),('kappa',r'$\kappa$'),('Γ',r'$\Gamma$'),('δ',r'$\delta$'),('ζ',r'$\zeta$'),('μ',r'$\mu$'),('λ_1',r'$\lambda_1$'),('λ_j',r'$\lambda_j$'),('λ',r'$\lambda$'),("e'_b",r"$e'_b$"),('e_a',r'$e_a$')]
 for old,new in local:
  pattern=r'(?<![A-Za-z0-9_\\])'+re.escape(old)+r'(?![A-Za-z0-9_])'
  c,num=re.subn(pattern,lambda m:new,c)
  if num:replacements.append({'before':old,'after':new,'occurrences':num,'stage':'residual-prose-notation'})
 # Compact source runs such as forA, widthu, etc. Every replacement is spelling/spacing only.
 for old,new in [('widthi','width $i$'),('widthu','width $u$'),('coordinatesu','coordinates $u$'),('positiveu','positive $u$'),('sameu','same $u$'),('columnu+1','column $u+1$'),('belowA','below $A$'),('by1','by $1$'),('dimension1','dimension $1$'),('multiplicity1','multiplicity $1$'),('type xi','type $\\xi$'),('shape xi','shape $\\xi$'),('at1','at $1$'),('norm1','norm $1$'),('on1,…,','on $1,\\ldots,$ '),('S(N,m)','$S(N,m)$'),('weight μ','weight $\\mu$'),('highest vector v','highest vector $v$'),('for every dominant a and','for every dominant $a$ and'),('For any i','For any $i$'),('first level M','first level $M$'),('row k','row $k$'),('basis w','basis $w$'),('Let e be','Let $e$ be'),('right H action','right $H$ action'),('by e is','by $e$ is'),('by e)','by $e$)'),('a,s,t,b','$a,s,t,b$'),('Let p be','Let $p$ be'),('unchanged N position','unchanged $N$ position'),('to X=','to $X=$'),('ordinary D in','ordinary $D$ in'),('above A','above $A$'),('since A itself','since $A$ itself'),('modulo p','modulo $p$'),('characteristic p','characteristic $p$'),('B,C zero tests','$B,C$ zero tests'),('the B event','the $B$ event')]:
  if old in c:
   num=c.count(old);c=c.replace(old,new);replacements.append({'before':old,'after':new,'occurrences':num,'stage':'residual-prose-spacing'})
 plain.append(c)
body=''.join(plain)
# Add missing prose/mathematics boundary spaces, without changing any mathematical expression.
chunks=re.split(r'(\$[^$]*\$)',body)
for k in range(0,len(chunks),2):
 if k and chunks[k] and re.match(r'[A-Za-z0-9]',chunks[k]):chunks[k]=' '+chunks[k]
 if k+1<len(chunks) and chunks[k] and re.search(r'[A-Za-z0-9]$',chunks[k]):chunks[k]+=' '
body=''.join(chunks)
polish=[
('gradeΓ',r'grade $\Gamma$'),('based ati',r'based at $i$'),('widthλ_1',r'width $\lambda_1$'),
(r"$\kappa$($\rho'_h$)=$\rho_h$",r"$\kappa(\rho'_h)=\rho_h$"),
(r'on $1,\ldots,$ $N-1$',r'on $1,\ldots,N-1$'),
(r'$X=$$L_N(\mu)$',r'$X=L_N(\mu)$'),
(r"$\mu$=$\lambda'$",r"$\mu=\lambda'$"),
('p-regular',r'$p$-regular'),('p-restricted',r'$p$-restricted'),
]
for old,new in polish:
 count=body.count(old)
 if count:
  body=body.replace(old,new);replacements.append({'before':old,'after':new,'occurrences':count,'stage':'final-delimiter-polish'})
old = r"$\kappa$($\rho'_h$)=$\rho_h$"
new = r"$\kappa(\rho'_h)=\rho_h$"
if old in body:
 count=body.count(old);body=body.replace(old,new);replacements.append({'before':old,'after':new,'occurrences':count,'stage':'final-single-expression'})
# Collapse repeated spaces introduced by source display-like plaintext runs.
body=re.sub(r' {2,}',' ',body)
text=prefix+body
(out/'thm-kleshchev-first-level-branching-multiplicity.md').write_text(text)
(out/'literal-formatting-replacements.json').write_text(json.dumps(replacements,indent=2)+'\n')
print(hashlib.sha256(source.read_bytes()).hexdigest())

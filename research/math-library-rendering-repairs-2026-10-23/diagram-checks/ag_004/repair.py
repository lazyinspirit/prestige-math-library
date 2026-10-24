from pathlib import Path
import re,hashlib,json
p=Path('items/lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction.md')
s=p.read_text()
assert hashlib.sha256(p.read_bytes()).hexdigest()=='21bb7af7890525b6b44ded2192a28e4dc0359e2ab242976556d9e21ba20a48fa'
# Explicitly selected raw formula spans, bounded to the named construction lines.
spans={
113:['B|D','σ*','e(B_R)','c1(B)=e(B_R)'],115:['G R = c1(B): k_M→k_M[2].'],
121:['P^d','P=(P^d)^dual','M=X×P'],123:['B = pr_X* A ⊗ pr_P* O_P(1)'],125:['D={(x,H):x∈H}','n+d−1','B|D'],127:['c1(B)=pr_X*η + pr_P*h,'],129:['η=c1(A)','h=c1(O_P(1))'],131:['D_a⊂X','f*L'],135:['F=f×id_P:M→Y×P','g=F i'],137:['A_0=RF_*k_M[n+d]=p*Rf_*k_X[n][d],  C_0=Rg_*k_D[n+d−1].'],139:['R:A_0→C_0[1]','G:C_0→A_0[1]','q=r−1≥0'],141:['A_0 → C_0[1] → C_0[2r−1] → A_0[2r],'],143:['(i*pr_X*η)^(r−1)','G[2r−1]'],145:['(pr_X*η)^(r−1) (pr_X*η+pr_P*h)'],147:['A_0'],149:['pr_P*h','Y×P','T:Id→[2]','k→k[2]','pH^jK→pH^(j+2)K','pτ≤jK→K','(pτ≤jK)[2]','pH^j','pH^(j+2)(pτ≤jK)=0','pH^j(pτ≤jK)→pH^jK'],151:['p*(η^r)[d]','r=1',"η'+h"],155:['c1=e'],
165:['g:D→Y×P','Y×P'],167:['q_T:T→P','dq_T','Y×{a}','a*[-dimP]'],169:['a*C[-dimP]','Rf_a*k_(X_a)[n−1]','a*p*P_b[dimP]=P_b','r>0'],173:['S⊂Y','I_S⊂S×P','I_S→P','T_yS∩T_yH','dimS+dimP−1','dimS−1'],175:['X^1','n−1'],177:['2i+(dimY_i−1)−(n−1)=2i+dimY_i−n.'],181:['K^1=i*K[-1]','i*P_b[-1]'],185:['i:Y_1→Y','j:U→Y','P_1=i*P[-1]','j!j*P→P→i_*P_1[1]','H_c^q(U,j*P)=0','q<0'],187:['H^ell(Y,P)→H^(ell+1)(Y_1,P_1)'],189:['ell<−1','ell=−1'],191:['H^(ell−1)(Y_1,P_1)→H^ell(Y,P)'],193:['ell>1','ell=1'],
205:['K=Rf_*Q_X[n]','C=g_*Q_univ[n+d−1]','d=dim|eta|','p:Y×P^d→Y','r(g)<r(f)','r(f)>0'],209:['p^*pH^b(K)[d]','pH^(b+1)(C)','b<-1','b=-1','pH^0(C)'],211:["G eta'^(r−1) R",'p^*(eta^r)[d]',"eta'=i^*p'^*eta",'eta_bundle⊠O(1)','c1(eta_bundle)+h_parameter'],215:["eta'","eta'+h_parameter",'O(1,1)','X×P^d','K→K[2]','pH^b(K)→pH^(b+2)(K)','pτ≤bK','pH^(b+2)'],219:['A=p^*pH^(-1)(K)[d]','B=p^*pH^1(K)[d]','A→C_0=pH^0(C)','C_0→B','p^*eta[d]','T⊂A','C_0','T⊂ker(C_0→B)⊂C_0','C_0=T⊕R_0⊕S','S→B','C_0→T⊕S','p^*[d]','eta:pH^(-1)K→pH^1K'],221:['r≥2',"eta'^(r−1)",'eta^r:pH^(-r)K→pH^rK','r=0'],225:['p^*pH^bK[d], b<0','p^*[d]','pH^bK','pH^0K'],229:['r(f)=0','H^(n+q)(f^−1(y))','n+q>2i','dimension(Y_i)≤n−2i','dimension≤−q'],
243:['f:X→Y','L=f^*A'],245:['X_k','f_k','pH^(b−k)K→pH^bK_k','b<0','b=0','pH^bK_k→pH^(b+k)K','b>0','eta^k','r(f_k)≤r(f)−k','1≤k≤r(f)','[−r(f),r(f)]','K∈pD≤r(f)'],247:['X^j','f^j','i^*K[−j]=K^j','P_1=i^*P[−1]','R:H^ell(Y,P)→H^(ell+1)(Y_1,P_1)','ell<−1','ell=−1','G:H^(ell−1)(Y_1,P_1)→H^ell(Y,P)','ell>1','ell=1','L^j'],253:['b=−k<0','H_b^m(X)','H_0^m(X_k)','X_k','dimX_k=n−k=n+b','L^j:H_b^(n+b−j)→H_b^(n+b+j)','b=k>0','2k','n−k+2k=n+b','b≠0'],255:['ker(L:H^(n−1)→H^(n+1))','F_0H^(n−1)','b>0','n−1','n+b'],259:['X^1','n−1','j≥2','H_0^(n−j)(X)→H_0^(n−j)(X^1)','H_0^(n+j−2)(X^1)→H_0^(n+j)(X)','L^(j−1)','L^j'],263:['alpha∈H_0^(n−1)(X)','L alpha=0','alpha=Σ_(t≥0)eta^t alpha_t','alpha_t','−2t','n−1−2t','L alpha_t=0','t>0','n−2t','alpha_t=0'],265:['kerL⊂F_0','a∈kerL⊂H^(n−1)','kerL','(1,1)','F_0','H_0^(n−1)'],267:['H_0^(n−1)(X^1)'],269:['∫_(X^1) a|_(X^1)∧bar a|_(X^1)=∫_X L a∧bar a=0,'],271:['n−1','n+1'],279:['P_(−i)^(−j)','i≥1,j≥0','n−i−j','X_i'],281:['eta^(i+1)u=0','X_i','L^(j+1)u=0','(0,j)','f_i'],283:['∫_(X_i) L^j u|_(X_i)∧v|_(X_i)=∫_X eta^i L^j u∧v.'],289:['j≥1','n−j','H_0^(n−j)(X^j)','f^j','L^(j+1)u=0','∫_X L^j u∧v','m=dim f(X)','m−j<0','m=0'],
301:['H_b^m','F_bH^m','L^j:H_b^{n+b-j}→H_b^{n+b+j}'],303:['W_aH^m = F_(m−n+a)H^m'],305:['b=m−n+j'],311:['(j,j)'],313:['a≤0','Gr_a^W H^(n−2)=H_(a−2)^(n−2)','Gr_a^W H^n=H_a^n','a−2','eta^(2−a)'],317:['S(u,v)=(-1)^floor(m/2) ∫_X u∧v','u∈H^m,v∈H^(2n−m)','S(v,u)=(-1)^n S(u,v)','m=2k','(-1)^(n−2k)','+1','m=2k+1','(-1)^(n−2k−1)','−1','(-1)^n','m→m+2','S(Lu,v)+S(u,Lv)=0','W_a^⊥=W_(−a−1)','W_a×W_b','a+b<0'],319:['q_i'],321:['i≥0','m_i=n−2−2i, A=i+2','Gr_i^W H^(m_i)=H_(−A)^(m_i)'],323:['H_(−A)^(m_i)= ⊕_(r≥0) eta^r U_r,'],325:['U_r','H_(−A−2r)^(m_i−2r)','K_i','L^(i+1)','⊕ eta^r V_r','V_r=ker L^(i+1)'],327:['U_r','n−A−2r','m_i−2r','V_r','A+2r=i+2+2r'],329:['u∈W_i H^(m_i−2r)','v∈W_i H^(m_i−2s)','q_i'],331:['q_i(eta^r u,eta^s v)=∫_X eta^(A+r+s) L^i u∧v.'],333:['W_(i−1)','L^i','W_(−i−1)','W_i','r>s','A+r+s≥A+2s+1','eta^(A+2s+1)v','s>r','q_i'],335:['r=s','∫ eta^(A+2r)L^i u∧v','(i+2+2r,i)','V_r','K_i'],339:['D=ker(L:H^n→H^(n+2))','ker(L:Gr_0^W H^n→Gr_(−2)^W H^(n+2))','R=D∩W_(−1)H^n','x∈W_0H^n','Lx','W_(−3)H^(n+2)','L:W_(−1)H^n→W_(−3)H^(n+2)','weight≤−3','weight≤−1','D/R'],341:['eta:Gr_0^W H^n→Gr_0^W H^(n+2)','x∈D','eta x','W_(−1)H^(n+2)','z∈ker(L:H^(n−2)→H^n)','W_0'],343:['∫_X x∧eta z = ∫_X eta x∧z =0'],345:['D/R','M=eta ker L'],
411:['Z=f^−1(y)','T_yS'],413:['x∈Z','f:R→S','df_x','T_xR','T_xX','X_s','n−s'],415:['Y_s','T_yS'],417:['Y_i','dimY_i−s','dimX_s=n−s','m−s<m','f_s:X_s→Y_s','X_s','n−s'],421:['K_s=i_s*K[−s]','i_s:Y_s→Y','P_{s,0}=i_s*P_0[−s]','i_s!P_0=i_s*P_0[−2s]','a:{y}→Y_s','b:{y}→S'],423:['a!i_s!P_0=b!i_S!P_0.'],425:['i_S!P_0','b!=b*[−2s]','[−2s]'],427:['a!i_s*P_0=b*i_S!P_0.'],429:['a*i_s*P_0=b*i_S*P_0','[−s]','P_{s,0}','i_S!P_0','i_S*P_0'],431:['f_s','P_0'],435:['pH^0i!P','pH^0i*P','i_*pH^0i!P','j!*j*P'],437:['P_0'],441:['n−m'],443:['H^−m(P_0)|_S = R^(n−m)f_*Q.']}
# Verify each numbered carrier line against disk before any replacement.
spans={n+5 if n>=411 else n:fs for n,fs in spans.items()}
lines=s.splitlines()
for n,fs in spans.items():
 for f in fs:
  assert f in lines[n-1],(n,f,lines[n-1])
def tex(f):
 f=f.replace('(-1)^floor(m/2)',r'(-1)^{\lfloor m/2\rfloor}')
 f=f.replace('pτ≤jK',r'{}^p\tau_{\le j}K').replace('pτ≤bK',r'{}^p\tau_{\le b}K')
 f=f.replace('pD≤r(f)',r'{}^pD^{\le r(f)}')
 f=f.replace('eta_bundle',r'\eta_{\mathrm{bundle}}').replace('h_parameter',r'h_{\mathrm{parameter}}')
 f=f.replace('pH',r'{}^pH')
 f=f.replace('c1',r'c_1').replace('j!*',r'j_{!*}').replace('j!j*',r'j_!j^*')
 # Functor marks: postfix star/exclamation on the displayed maps, with arbitrary subscripts.
 f=re.sub(r'\b(i(?:_[sS])?|a|b|f|p|σ|pr_[XP])\*',r'\1^*',f)
 f=re.sub(r'\b(i(?:_[sS])?|a|b)!',r'\1^!',f)
 # Rf_a* denotes direct image, unlike the separate ordinary a*.
 f=f.replace('Rf_a*',r'Rf_{a*}')
 f=re.sub(r'([_^])\(([^()]*)\)',lambda m:m[1]+'{'+m[2]+'}',f)
 # Parenthesized limits such as Σ_(t≥0) were handled above; plain script words stay single tokens.
 f=re.sub(r'_([A-Za-z]+)',lambda m:'_{'+(r'\mathrm{'+m[1]+'}' if m[1] in ['univ'] else m[1])+'}',f)
 f=re.sub(r'\^−([0-9a-z])',r'^{-\1}',f)
 f=f.replace('^ell',r'^{\ell}').replace('^dual',r'^{\mathrm{dual}}')
 for a,b in [('eta',r'\eta'),('alpha',r'\alpha'),('ell',r'\ell'),('ker',r'\ker '),('dim',r'\dim '),('dimension',r'\operatorname{dimension}'),('weight',r'\text{weight}'),('Gr',r'\operatorname{Gr}'),('Id',r'\mathrm{Id}')]:
  f=re.sub(r'(?<![A-Za-z\\])'+a+r'(?![A-Za-z])',lambda m:b,f)
 f=f.replace('bar a',r'\bar a')
 for a,b in [('η',r'\eta '),('σ',r'\sigma '),('→',r'\to '),('×',r'\times '),('⊗',r'\otimes '),('⊠',r'\boxtimes '),('∈',r'\in '),('⊂',r'\subset '),('∩',r'\cap '),('∧',r'\wedge '),('∫',r'\int '),('Σ',r'\sum '),('⊕',r'\bigoplus '),('≤',r'\le '),('≥',r'\ge '),('≠',r'\ne '),('⊥',r'\perp '),('−','-')]:f=f.replace(a,b)
 # Set braces are mathematical braces, not grouping.
 f=f.replace('D={(x,H):',r'D=\{(x,H):').replace('x\\in H}',r'x\in H\}')
 f=f.replace('a:{y}',r'a:\{y\}').replace('b:{y}',r'b:\{y\}').replace('Y\\times {a}',r'Y\times\{a\}')
 return f
changes=[]
for n,fs in spans.items():
 old=lines[n-1]
 # Longest-first, one simultaneous substitution avoids nested delimiter replacements.
 pat=re.compile('|'.join(re.escape(f) for f in sorted(set(fs),key=len,reverse=True)))
 display=old in fs
 def repl(m):return ('$$' if display else '$')+tex(m[0])+('$$' if display else '$')
 new=pat.sub(repl,old)
 changes.append({'line':n,'before':old,'after':new})
 lines[n-1]=new
# Byte guard immediately before mutation, after construction/verification of all replacements.
assert hashlib.sha256(p.read_bytes()).hexdigest()=='21bb7af7890525b6b44ded2192a28e4dc0359e2ab242976556d9e21ba20a48fa'
p.write_text('\n'.join(lines)+'\n')
Path('research/math-library-rendering-repairs-2026-10-23/diagram-checks/ag_004/formula-edits.json').write_text(json.dumps(changes,indent=2)+'\n')
print('Changed',len(changes),'explicit formula-bearing lines')

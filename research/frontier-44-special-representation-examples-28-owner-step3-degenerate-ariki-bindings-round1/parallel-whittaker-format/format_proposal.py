from pathlib import Path
import re,json,hashlib,datetime
BASE=Path('research/frontier-44-special-representation-examples-28-owner-step3-degenerate-ariki-bindings-round1')
OUT=BASE/'parallel-whittaker-format'
ID='def-the-whittaker-functor-from-the-relevant-parabolic-o-summand'
src=BASE/'sealed-independent-chunks'/f'{ID}.continuous-dual-successor.md'
text=src.read_text()
assert hashlib.sha256(src.read_bytes()).hexdigest()=='4bc91ec4bcd988a6048a368657c98d8d872ce8a0f934d9f8752be7f53d476bb8'
head,body=text.split('## Proof\n',1); proof,tail=body.split('## Remarks\n',1)
# These are presentation substitutions only. Placeholders prevent recursive math markup.
replacements={
'U=U(m), I=I_chi':r'U=U(\mathfrak m),\ I=I_\chi',
'y=x−chi(x)':r'y=x-\chi(x)',
'weight≥n':r'\text{weight}\ge n',
'I^w':r'I^w',
'R=⊕_(n≥0) I^n t^n':r'R=\bigoplus_{n\ge0}I^nt^n',
'y_i t^r, 0≤r≤w_i':r'y_it^r,\ 0\le r\le w_i',
'w_k≥w_i+w_j':r'w_k\ge w_i+w_j',
'r+s≤w_k':r'r+s\le w_k',
'J⊂U':r'J\subset U',
'⊕(J∩I^n)t^n':r'\bigoplus_{n\ge0}(J\cap I^n)t^n',
'J∩I^n⊂I^k J':r'J\cap I^n\subset I^kJ',
'E_chi=∪_(n≥0)(U/I^n)^*':r'E_\chi=\bigcup_{n\ge0}(U/I^n)^*',
'(x f)(r)=f(r x)':r'(xf)(r)=f(rx)',
'phi:J→E_chi':r'\phi\colon J\to E_\chi',
'lambda(j)=phi(j)(1)':r'\lambda(j)=\phi(j)(1)',
'I^k J':r'I^kJ',
'J/(J∩I^n)':r'J/(J\cap I^n)',
'U/I^n':r'U/I^n',
'a∈E_chi':r'a\in E_\chi',
'U→E_chi, u↦u a':r'U\to E_\chi,\ u\mapsto ua',
'a(rj)=phi(rj)(1)=phi(j)(r)':r'a(rj)=\phi(rj)(1)=\phi(j)(r)',
'U(m)':r'U(\mathfrak m)',
'g-module':r'\mathfrak g\text{-module}',
'Hom_m(X,E_chi)':r'\operatorname{Hom}_{\mathfrak m}(X,E_\chi)',
'lambda:X→C':r'\lambda\colon X\to\mathbb C',
'I^n X':r'I^nX',
'F_lambda(v)(r)=lambda(rv)':r'F_\lambda(v)(r)=\lambda(rv)',
'U(g)':r'U(\mathfrak g)',
'(lambda·u)(v)=lambda(uv)':r'(\lambda\cdot u)(v)=\lambda(uv)',
'(F·u)(v)(r)=lambda(u r v)':r'(F\cdot u)(v)(r)=\lambda(urv)',
'non-m-linear':r'\text{non-}\mathfrak m\text{-linear}',
'F(uv)(r)=lambda(r u v)':r'F(uv)(r)=\lambda(ruv)',
'u∈U(g)':r'u\in U(\mathfrak g)',
'ad m':r'\operatorname{ad}\mathfrak m',
'u I^(n+C)⊂I^n U(g)':r'uI^{n+C}\subset I^nU(\mathfrak g)',
'C=C(u)':r'C=C(u)',
'lambda u':r'\lambda u',
'I^(n+C)X':r'I^{n+C}X',
'm-action':r'\mathfrak m\text{-action}',
'Hom_m(−,E_chi)':r'\operatorname{Hom}_{\mathfrak m}(-,E_\chi)',
'Hom_m(X,C_chi)':r'\operatorname{Hom}_{\mathfrak m}(X,\mathbb C_\chi)',
'a=span{Σ_(row(j)=r)E_jj}':r'\mathfrak a=\operatorname{span}\{\sum_{\operatorname{row}(j)=r}E_{jj}\}',
'a-weight0':r'\mathfrak a\text{-weight }0',
'a-weight':r'\mathfrak a\text{-weight}',
'm-linear':r'\mathfrak m\text{-linear}',
'C_chi':r'\mathbb C_\chi',
'lambda(uv)=chi(u)lambda(v)':r'\lambda(uv)=\chi(u)\lambda(v)',
'chi(u)=0':r'\chi(u)=0',
'U(m)-free':r'U(\mathfrak m)\text{-free}',
'parabolic O':r'\text{parabolic }\mathcal O',
'X=U(g)⊗_(U(p))X_0':r'X=U(\mathfrak g)\otimes_{U(\mathfrak p)}X_0',
'X_0^*':r'X_0^*',
'eta_head(E_jj)=E_jj+n−Σ_(k≤col(j))q_k':r'\eta_{\mathrm{head}}(E_{jj})=E_{jj}+n-\sum_{k\le\operatorname{col}(j)}q_k',
'eta_tail(E_jj)=E_jj+n−Σ_(k≥col(j))q_k':r'\eta_{\mathrm{tail}}(E_{jj})=E_{jj}+n-\sum_{k\ge\operatorname{col}(j)}q_k',
'−tr_m(ad E_jj)':r'-\operatorname{tr}_{\mathfrak m}(\operatorname{ad}E_{jj})',
"P_ij;x":r'P_{ij;x}',
"P'_ji;x":r'P^{\prime}_{ji;x}',
'{u:[eta_head(u),m]⊂I_chi U(g)}':r'\{u:[\eta_{\mathrm{head}}(u),\mathfrak m]\subset I_\chi U(\mathfrak g)\}',
'eta_head−eta_tail=−tr_m ad':r'\eta_{\mathrm{head}}-\eta_{\mathrm{tail}}=-\operatorname{tr}_{\mathfrak m}\operatorname{ad}',
'c_j−c_k integral':r'c_j-c_k\text{ integral}',
'c_j=c_k':r'c_j=c_k',
'n−q+1,…,n':r'n-q+1,\ldots,n',
'a_1,…,a_q':r'a_1,\ldots,a_q',
'nu_s=a_s+n−q+s−1':r'\nu_s=a_s+n-q+s-1',
'lambda_i=a_i+i−1':r'\lambda_i=a_i+i-1',
'eta_head':r'\eta_{\mathrm{head}}',
'n−q_1−…−q_col':r'n-q_1-\cdots-q_{\operatorname{col}}',
'i=q_before+(global_row−n+q)':r'i=q_{\mathrm{before}}+(\mathrm{global\_row}-n+q)',
'lambda_i+eta_head=a_i+global_row−1':r'\lambda_i+\eta_{\mathrm{head}}=a_i+\mathrm{global\_row}-1',
'z_(n−q+1),…,z_n':r'z_{n-q+1},\ldots,z_n',
'ch L(nu)=det(z_r^(nu_s+q−s))/det(z_r^(q−s)) =(Π_(r=n−q+1)^n z_r^(n−1)) det(z_r^(a_s))/det(z_r^(q−s))':r'\operatorname{ch}L(\nu)=\frac{\det(z_r^{\nu_s+q-s})}{\det(z_r^{q-s})}=\left(\prod_{r=n-q+1}^n z_r^{n-1}\right)\frac{\det(z_r^{a_s})}{\det(z_r^{q-s})}',
'a_s+n−1':r'a_s+n-1',
'V(N(A))':r'V(N(A))',
'y_(r,a)=z_r^a':r'y_{r,a}=z_r^a',
'a_s=c+1−(n−q+s)':r'a_s=c+1-(n-q+s)',
'Π z_r^c':r'\prod z_r^c',
'y_(r,a)':r'y_{r,a}',
'C^n⊗U':r'\mathbb C^n\otimes U',
'GL(U)':r'\operatorname{GL}(U)',
'Sym(C^n⊗U)':r'\operatorname{Sym}(\mathbb C^n\otimes U)',
'(p_1,…,p_n)':r'(p_1,\ldots,p_n)',
'S_N':r'S_N',
'(C^n)^tensor N⊗U^tensor N':r'(\mathbb C^n)^{\otimes N}\otimes U^{\otimes N}',
'B(v,w)=sum v_T w_T':r'B(v,w)=\sum_T v_Tw_T',
'B(v,conjugate(v))':r'B(v,\overline v)',
'(p_n,…,p_1)':r'(p_n,\ldots,p_1)',
'Lambda=Σ_j omega_(q_j)':r'\Lambda=\sum_j\omega_{q_j}',
'pi L_A':r'\pi L_A',
'a↦a−c_kappa+n−n_kappa':r'a\mapsto a-c_\kappa+n-n_\kappa',
'inf I_kappa=1−n_kappa':r'\inf I_\kappa=1-n_\kappa',
'[L_O(A)]':r'[L_{\mathcal O}(A)]',
'L_A':r'L_A',
'parameter1':r'\text{parameter }1',
'V(L_O(A))=0':r'V(L_{\mathcal O}(A))=0',
'V(L_O(A))':r'V(L_{\mathcal O}(A))',
'e/f':r'e/f',
'V e=e V':r'Ve=eV',
'V f=f Wh':r'Vf=f\mathrm{Wh}',
'C_c':r'\mathbb C_c',
'P_c⊗V^tensor d':r'P_c\otimes V^{\otimes d}',
'Hd':r'H_d',
'Omega=(C_total−C_source−C_V)/2':r'\Omega=(C_{\mathrm{total}}-C_{\mathrm{source}}-C_V)/2',
'c_j+q_j−n':r'c_j+q_j-n',
'Π_j(x_1−(c_j+q_j−n))':r'\prod_j(x_1-(c_j+q_j-n))',
'M=V_c^tensor d':r'M=V_c^{\otimes d}',
'End_W(M)^op=B':r'\operatorname{End}_W(M)^{\mathrm{op}}=B',
'End_g(T)^op=B':r'\operatorname{End}_{\mathfrak g}(T)^{\mathrm{op}}=B',
'T=P_c⊗V^tensor d':r'T=P_c\otimes V^{\otimes d}',
'finite p flag':r'\text{finite }\mathfrak p\text{ flag}',
'genuine O summand':r'\text{genuine }\mathcal O\text{ summand}',
'order on C':r'\text{order on }\mathbb C',
'End_g(T)^op':r'\operatorname{End}_{\mathfrak g}(T)^{\mathrm{op}}',
'B=eAe':r'B=eAe',
'e(−)':r'e(-)',
'Ae⊗_B−':r'Ae\otimes_B-',
'e(Ae⊗X)=X':r'e(Ae\otimes X)=X',
'Ae⊗eN→N':r'Ae\otimes eN\to N',
'M⊗_B−':r'M\otimes_B-',
'eL_O(A)':r'eL_{\mathcal O}(A)',
'P→M':r'P\to M',
'K⊂P rad B':r'K\subset P\operatorname{rad}B',
'K→P':r'K\to P',
'B/rad B':r'B/\operatorname{rad}B',
'K/K rad B':r'K/K\operatorname{rad}B',
'P/P rad B':r'P/P\operatorname{rad}B',
'K=0':r'K=0',
'M_B':r'M_B',
'Wd=End_B(M)':r'W_d=\operatorname{End}_B(M)',
'Wd-mod≃B-mod':r'W_d\text{-mod}\simeq B\text{-mod}',
'B-simples':r'B\text{-simples}',
'Wd-simples':r'W_d\text{-simples}',
}
# Replace long formula spans first, then individual unambiguous mathematical symbols.
standalone={'U':'U','I':'I','w_i':'w_i','y_k':'y_k','J':'J','R':'R','E_chi':r'E_\chi','phi':r'\phi','lambda':r'\lambda','chi':r'\chi','X':'X','F':'F','V':'V','W':'W','Q':'Q','N(A)':'N(A)','L_O(A)':r'L_{\mathcal O}(A)','L_W(A)':'L_W(A)','P_c':'P_c','T':'T','M':'M','B':'B','K':'K','P':'P','V(A)':'V(A)','I^n':'I^n','I^k':'I^k','C^n':r'\mathbb C^n','pi':r'\pi'}
steps={}; original={}
for mat in re.finditer(r'^(\d+\.\d+) (.*)$',proof,re.M):
    no,line=mat.groups(); original[no]=line
    # Protect existing math, which only occurs in final step.
    vals=[]
    def hold(expr):
        vals.append(expr);return f'§{len(vals)-1}§'
    line=re.sub(r'\$[^$]+\$',lambda m:hold(m.group()),line)
    for old,new in sorted(replacements.items(),key=lambda x:-len(x[0])):
        line=line.replace(old,hold('$'+new+'$')) if old in line else line
    for old,new in sorted(standalone.items(),key=lambda x:-len(x[0])):
        line=re.sub(r'(?<![\w§])'+re.escape(old)+r'(?![\w§])',lambda m:hold('$'+new+'$'),line)
    # Target small mathematical parameters using their prose contexts, preserving articles.
    for pattern in [r'(?<=Replace )x\b',r'(?<=weight )w\b',r'(?<=weight )w_i\b',r'(?<=reordering )n\b',r'(?<=length )w\b',r'(?<=Choose )n\b',r'(?<=on )u\b',r'(?<=Moving )u\b',r'(?<=shifted )m\b',r'(?<=off-standard )A\b',r'(?<=as )A\b',r'(?<=its )j(?=th)',r'(?<=fixed )k\b',r'(?<=choosing )n\b',r'(?<=than )k\b',r'(?<=at )r\b',r'(?<=on )j\b',r'(?<=some )n\b',r'(?<=common )n\b',r'(?<=least )n\b',r'(?<=fixed )u\b',r'(?<=containing its )basis\b(?!)',r'(?<=column-origin vector )c\b',r'(?<=Every )e\b',r'(?<=height )q\b',r'(?<=entry space )U\b',r'(?<=degree-)N\b',r'(?<=killed by )e\b',r'(?<=and hence by )Wh\b',r'(?<=projector onto )T\b',r'(?<=is )e\b',r'(?<=through )e\b']:
        line=re.sub(pattern,lambda m:hold('$'+m.group()+'$'),line)
    line=line.replace('E-valued','$E$-valued').replace('$Wh$',r'$\mathrm{Wh}$')
    line=line.replace('at1','at $1$').replace('Lemma8.20','Lemma 8.20')
    line=re.sub(r'§(\d+)§',lambda m:vals[int(m[1])],line)
    for old,new in {
        r'$\text{finite }\mathfrak p\text{ flag}$':'finite $\\mathfrak p$ flag',
        r'$\text{genuine }\mathcal O\text{ summand}$':'genuine $\\mathcal O$ summand',
        r'$\text{order on }\mathbb C$':'order on $\\mathbb C$',
        r'$\text{parabolic }\mathcal O$':'parabolic $\\mathcal O$',
        r'$\mathfrak g\text{-module}$':'$\\mathfrak g$-module',
        r'$\text{non-}\mathfrak m\text{-linear}$':'non-$\\mathfrak m$-linear',
        r'$\mathfrak m\text{-linear}$':'$\\mathfrak m$-linear',
        r'$\mathfrak m\text{-action}$':'$\\mathfrak m$-action',
        r'$\mathfrak a\text{-weight }0$':'$\\mathfrak a$-weight $0$',
        r'$\mathfrak a\text{-weight}$':'$\\mathfrak a$-weight',
        r'$U(\mathfrak m)\text{-free}$':'$U(\\mathfrak m)$-free',
        r'$\text{parameter }1$':'parameter $1$',
        r'$c_j-c_k\text{ integral}$':'$c_j-c_k$ integral',
        r'$\text{weight}\ge n$':'weight $\\ge n$',
    }.items():
        line=line.replace(old,new)
    steps[no]=line
# Small fragments are grouped with their adjacent complete argument, using one tag group.
groups=[['1.1'],['1.2'],['1.3'],['1.4','1.5','1.6'],['1.7'],['1.8'],['1.9'],['1.10'],['1.11'],['1.12','1.13','1.14']]+[[f'1.{i}'] for i in range(15,27)]+[['2.1']]
newlines=[]; stepmap={}
for ix,group in enumerate(groups):
    newno='2.1' if group==['2.1'] else f'1.{ix+1}'
    parts=[]
    for oldno in group:
        stepmap[oldno]=newno
        content=steps[oldno]
        if oldno!=group[-1]: content=re.sub(r' \[[^\]]+\](?: ∎)?$','',content)
        parts.append(content)
    newlines.append(newno+' '+' '.join(parts))
prefix=proof[:proof.index('1.1 ')]
after=head+'## Proof\n'+prefix+'\n\n'.join(newlines)+'\n\n## Remarks\n'+tail
out=OUT/f'{ID}.md';out.write_text(after)
sha=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
packet=json.loads((BASE/'sealed-independent-chunks/whittaker-continuous-dual-definition-guarded-complete-chunk.json').read_text())
manifest=Path(packet['native_home']['manifest']); natives=json.loads(manifest.read_text())
selected=[item for page in natives for item in page['items'] if item['id']==ID]
assert len(selected)==1
# Use the sealed complete-chunk strategy. This proposal does not install native metadata.
strategy=packet['native_mirror_after']['strategy'].replace('All these arguments are written locally, not imported by citation.', 'The proof supplies the continuous-dual and factorization computations while retaining its explicit actual-supplier interfaces, companion finite-W generator and typed-coset comparisons, and actual16 Fock inputs. Mathematical acceptance remains held on those suppliers and is owned by the original reviewer.')
selected_after=dict(selected[0]);selected_after['strategy']=strategy
proposal={'version':1,'kind':'selected-native17-strategy-format-proposal','run':packet['run'],'id':ID,'target_manifest':str(manifest),'target_manifest_before_raw_sha256':sha(manifest),'selected_entry_before':selected[0],'selected_entry_before_sha256':hashlib.sha256(json.dumps(selected[0],ensure_ascii=False,sort_keys=True,separators=(',',':')).encode()).hexdigest(),'selected_entry_after':selected_after,'selected_entry_after_sha256':hashlib.sha256(json.dumps(selected_after,ensure_ascii=False,sort_keys=True,separators=(',',':')).encode()).hexdigest(),'selected_strategy_after':strategy,'basis':'Complete-chunk native_mirror_after strategy retained with its last blanket local-completeness sentence replaced by the explicit supplier hold; grouped-step references are recorded separately. No claim of actual-supplier closure.','installed':False}
(OUT/'native17-selected-strategy-proposal.json').write_text(json.dumps(proposal,indent=2,ensure_ascii=False)+'\n')
record={'version':1,'run':packet['run'],'reviewer':'/root/repair_klr_global_basis','constructor':'/root/construct_whittaker_format','kind':'FORMAT_ONLY_COMPLETE_WHITTAKER_AUTHOR_RESTORATION','source':str(src),'before_raw_sha256':sha(src),'proposal':str(out),'after_raw_sha256':sha(out),'sealed_packet':str(BASE/'sealed-independent-chunks/whittaker-continuous-dual-definition-guarded-complete-chunk.json'),'sealed_packet_sha256':sha(BASE/'sealed-independent-chunks/whittaker-continuous-dual-definition-guarded-complete-chunk.json'),'old_to_new_step_map':stepmap,'grouped_steps':{'1.4':['1.4','1.5','1.6'],'1.10':['1.12','1.13','1.14']},'definition_frontmatter_facts_remarks_preserved':head==after.split('## Proof\n',1)[0] and tail==after.split('## Remarks\n',1)[1],'proof_arguments_preserved':'All original sentences retained, with formula markup, at1/parameter1 spacing, and two fragment-only adjacent groups. No mathematics repaired or accepted.','mathematical_status':'HELD_ON_ACTUAL_SUPPLIERS_ORIGINAL_REVIEWER_OWNS_ACCEPTANCE_AND_CONSUMERS','native_strategy_proposal':str(OUT/'native17-selected-strategy-proposal.json'),'current_author_restoration_round':packet['current_author_restoration_round'],'additional_repair_cycle':False,'native_writes':False,'compaction':{'limit':500000,'scope':'total','existing_config_verified':True},'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat()}
(OUT/'format-checkpoint.json').write_text(json.dumps(record,indent=2,ensure_ascii=False)+'\n')
print(json.dumps({'proposal':str(out),'before':record['before_raw_sha256'],'after':record['after_raw_sha256'],'steps':len(groups)}))

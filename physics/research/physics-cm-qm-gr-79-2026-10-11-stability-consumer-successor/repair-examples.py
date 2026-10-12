from pathlib import Path
import json
f=Path('research/physics-cm-qm-gr-79-2026-10-11-stability-consumer-successor/changed-items.json');changed=json.loads(f.read_text())
def fix(id,pairs):
 p=Path('items',id+'.md');s=p.read_text()
 for a,b in pairs:
  assert a in s,(id,a);s=s.replace(a,b)
 p.write_text(s)
 if id not in changed:changed.append(id)
fix('def-cm09-coupled-quadratic-model',[
 ('The small-oscillation model at a strict minimum of a scalar\npotential $U$ is the harmonic model with spring constant $U\'\'(x_{*})$, the\nquadratic approximation used by [[post-cm04-harmonic-model]];', 'At a scalar strict minimum the small-oscillation stiffness is $U\'\'(x_*)\\ge0$; it is the harmonic model of [[post-cm04-harmonic-model]] when $U\'\'(x_*)>0$, and the free zero-stiffness model when $U\'\'(x_*)=0$. An isolated strict minimum can have zero Hessian (for example $U(x)=x^4$);')])
fix('ex-cm09-double-pendulum-linear-modes',[
 ('u_{s}=w_{s}/\\sqrt{2ml^{2}\\gamma_{s}}','u_{s}=w_{s}/\\sqrt{2ml^{2}\\gamma_{f}}'),
 ('u_{f}=w_{f}/\\sqrt{2ml^{2}\\gamma_{f}}','u_{f}=w_{f}/\\sqrt{2ml^{2}\\gamma_{s}}'),
 ('w_{s}^{\\mathsf T}Mw_{s}=2ml^{2}\\gamma_{s}','w_{s}^{\\mathsf T}Mw_{s}=2ml^{2}\\gamma_{f}'),
 ('w_{f}^{\\mathsf T}Mw_{f}=2ml^{2}\\gamma_{f}','w_{f}^{\\mathsf T}Mw_{f}=2ml^{2}\\gamma_{s}'),
 ('ml^{2}(2-1-2)=0','ml^{2}(2-2)=0')])
fix('ex-cm09-triatomic-translation-zero-mode',[
 ('masses $m,m,M>0$','masses $m,M,m>0$'),
 ('Ku_{2}=k(1,0,-1)=','Ku_{2}=k(1,0,-1)/\\sqrt{2m}='),
 ('Ku_{3}=k\\Bigl(1+\\frac{2m}{M}\\Bigr)(1,-2,1)=','Ku_{3}=k\\Bigl(1+\\frac{2m}{M}\\Bigr)(1,-2,1)/\\sqrt{2m(1+2m/M)}='),
 ('Mu_{3}=m(1,-2,1)','Mu_{3}=m(1,-2,1)/\\sqrt{2m(1+2m/M)}'),
 ('the antisymmetric sector (outer labels opposite, no middle motion) has effective outer stiffness $k$ and coupling $2c$ with $c=k$ in the two-label reduction $x_{1}=-x_{3}$, $x_{2}=0$: the frequency $\\sqrt{k/m}$ of $u_{2}$ matches [F3].','on the antisymmetric sector $x_1=-x_3$, $x_2=0$, the displayed equations give $m x_1\'\'=-k x_1$ and $m x_3\'\'=-k x_3$, with the middle equation identically zero. Thus the frequency is $\\sqrt{k/m}$. Equivalently, this is the two-label model of [F3] with outer stiffness $k$ and zero coupling, whose two equal frequencies are $\\sqrt{k/m}$; no spurious coupling term is used.')])
fix('ex-cm09-forced-resonant-mode-check',[
 ('the relative coordinate stays at its initial value.', 'the prescribed particular response has zero relative coordinate. An arbitrary motion can additionally contain the bounded homogeneous relative oscillation of the free model.')])
fix('pthm-cm11-principal-rotations',[
 ('Within its eigenspace choose the unit vector $e_j=\\omega_0/\\|\\omega_0\\|_2$ and complete it to an orthonormal basis of that eigenspace; retain orthonormal bases of the other eigenspaces. The spectral theorem underlying [L1] gives the orthogonal eigenspace decomposition, and finite Gram–Schmidt completion supplies such a principal basis.', 'Within its eigenspace choose the unit vector $e_j=\\omega_0/\\|\\omega_0\\|_2$. Starting with the original principal vectors in that eigenspace, subtract their projection onto $e_j$, and normalize a nonzero remainder if the eigenspace has dimension greater than one; subtract the projections onto both selected vectors and normalize a nonzero remainder if its dimension is three. Such remainders exist because the original vectors span the eigenspace; linear combinations remain eigenvectors for the same eigenvalue, and the projection subtractions give orthonormality by [L5]. Retain the original orthonormal vectors in the other eigenspaces. This supplies an adapted orthonormal principal basis directly in dimension three.')])
f.write_text(json.dumps(changed,indent=2)+'\n');print(len(changed))

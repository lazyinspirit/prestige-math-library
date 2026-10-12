from pathlib import Path
import json
pchanges=Path('research/physics-cm-qm-gr-79-2026-10-11-stability-consumer-successor/changed-items.json');changed=json.loads(pchanges.read_text())
def fix(id,pairs):
 p=Path('items',id+'.md');s=p.read_text()
 for a,b in pairs:
  assert a in s,(id,a);s=s.replace(a,b)
 p.write_text(s)
 if id not in changed:changed.append(id)
fix('pthm-cm09-free-modes-and-degeneracy',[
 ('determined by the datum through $a_{i}=z_{i}(0)$','determined by the datum of the unique maximal extension through $a_{i}=z_{i}(0)$'),
 ('for $\\lambda<0$ of\n$q(t)=\\cosh(\\kappa t)q_{0}+\\kappa^{-1}\\sinh(\\kappa t)q_{1}$ with\n$\\kappa=\\sqrt{-\\lambda}$.','for $\\lambda<0$ of\n$q(t)=\\cosh(\\kappa t)q_{0}+\\kappa^{-1}\\sinh(\\kappa t)q_{1}$ with\n$\\kappa=\\sqrt{-\\lambda}$. These formulas on a local interval are restrictions of their unique maximal extensions; $q_0,q_1$ are the position and velocity of that extension at time $0$, even if the local interval omits $0$.'),
 ('the pair $(a,b)$ ranges over $\\mathbb R^{2}$ bijectively, with\n$a=z_{i}(0)$','the pair $(a,b)$ ranges over $\\mathbb R^{2}$ bijectively, with\n$a=z_{i}(0)$ evaluated on the unique global extension'),
 ('Consequently the initial value problem has a unique\nsolution on every interval, and that solution is the maximal one','Consequently every local solution is a restriction of the unique global solution, and the global solution is the maximal one'),
 ('with unique coefficients determined by $z_{i}(0)$ and $z_{i}\'(0)$','with unique coefficients determined by the global extension\'s values $z_{i}(0)$ and $z_{i}\'(0)$'),
 ('is uniquely determined by $q(0),q\'(0)\\in N_{\\lambda}$','has a unique maximal extension and is uniquely determined by that extension\'s $q(0),q\'(0)\\in N_{\\lambda}$'),
 ('Since $q(0)=q_{0}$, $q\'(0)=q_{1}$ and $\\lVert\\cdot\\rVert_{2}$ makes the finite-dimensional subspace complete, two such curves with equal data agree;', 'The displayed curves take the given data at $0$ and solve the same constant-coefficient phase system, so uniqueness in [F3] makes every local curve with those extension data their restriction;'),
 ('(an\nisolated minimum would give a positive definite stiffness)', '(an isolated strict minimum can still have zero stiffness, for example the scalar potential $U(q)=q^4$ at $0$)')])
fix('rem-cm09-zero-modes-degeneracy-and-scope',[
 ('semidefinite with $\\ker K$ possibly nontrivial only if the minimum is not\nisolated along those directions, and the Lyapunov stability of', 'semidefinite and $\\ker K$ can be nontrivial even at an isolated strict minimum, as $U(q)=q^4$ at $0$ shows; the Lyapunov stability of'),
 ('exactly when the modal force vanishes in no direction of $N_{\\lambda}$', 'when $\\Omega^2=\\lambda$ and the modal force has a nonzero component in the corresponding modal eigenspace (equivalently, the mass-metric projection of $M^{-1}J_0$ onto $N_\\lambda$ is nonzero)'),
 ('which grows exponentially whenever it is not\nidentically zero,', 'which has an exponentially growing component as $t\\to+\\infty$ when $a+b\\ne0$; a nonzero family with $a=-b$ decays at $+\\infty$, although growing families exist in this direction,')])
fix('ex-cm09-unstable-quadratic-mode',[
 ('for the datum $a=0$, $b\\ne0$ the motion is $(b/\\kappa)', 'for the datum $\\xi(0)=0$, $\\xi\'(0)=b\\ne0$ the hyperbolic coefficients are $a=0$ and $b/\\kappa$, so the motion is $(b/\\kappa)'),
 ('choose $\\lvert b\\rvert$ so small that $\\lVert(0,b)\\rVert_{2}<\\delta$, and the motion $(b/\\kappa)\\sinh(\\kappa t)$ reaches norm $1=\\varepsilon_{0}$ for $t=\\kappa^{-1}\\operatorname{arsinh}(\\kappa/\\lvert b\\rvert)>0$', 'choose $0<\\lvert b\\rvert<\\min(\\delta,1)$. The motion $(b/\\kappa)\\sinh(\\kappa t)$ has initial phase norm $|b|<1$ and at $T=\\kappa^{-1}\\operatorname{arsinh}(\\kappa/\\lvert b\\rvert)>0$ its position has absolute value $1$, so its phase norm is at least $1$. By continuity that phase norm reaches $1=\\varepsilon_0$ at some $t\\in(0,T]$'),
 ('$E=\\tfrac12ml^{2}\\theta\'^{2}+mgl\\cos\\theta$ has a strict local maximum at the\nupward equilibrium;', '$E=\\tfrac12ml^{2}\\theta\'^{2}+mgl\\cos\\theta$ has a saddle at the upward equilibrium: its potential part has a strict local maximum while its velocity part is positive quadratic;')])
fix('ex-cm04-damped-regimes-check',[
 ('$\\lambda=-\\tfrac12\\cdot2/2=-1$', '$\\lambda=-2/(2\\cdot1)=-1$'),
 ('+(5+\\sqrt{21})(\\sqrt{21}-5)', '-(5+\\sqrt{21})(\\sqrt{21}-5)'),
 ('and $(\\sqrt{21})^{2}-25=21-25=-4$, adding to $0$', 'and the negative of $(\\sqrt{21})^{2}-25=21-25=-4$ is $4$, adding to $0$'),
 ('in the third at every $t\\ge0$', 'in the third at every $t>0$; at $t=0$ all three have $x\'(0)=0$')])
fix('post-cm04-harmonic-model',[
 ('approximation of a potential $U$ near a strict local minimum $x_{*}$, where', 'approximation of a potential $U$ near a strict local minimum $x_{*}$ with $U\'\'(x_*)>0$, where')])
fix('rem-cm04-linear-model-scope',[
 ('near\n  a strict minimum and the linearized equation', 'near\n  a strict minimum with positive second derivative and the linearized equation'),
 ('no conclusion is\n  drawn at degenerate critical points, at maxima, or for the undamped driven\n  model.', 'the strict-minimum stability conclusion also covers degenerate strict minima, while no conclusion is drawn at other degenerate critical points, at maxima, or for the undamped driven model.')])
pchanges.write_text(json.dumps(changed,indent=2)+'\n');print(len(changed))

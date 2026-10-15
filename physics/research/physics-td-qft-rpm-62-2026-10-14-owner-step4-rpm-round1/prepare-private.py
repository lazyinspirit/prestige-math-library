from pathlib import Path
import re,json,difflib
R=Path('research/physics-td-qft-rpm-62-2026-10-14-owner-step4-rpm-round1')
changes={}
cache={}
def get(i):
 return cache.get(i,(R/'baseline'/(i+'.md')).read_text())
def put(i,s,note):
 cache[i]=s
 old=(R/'baseline'/(i+'.md')).read_text()
 (R/'proposed'/(i+'.md')).write_text(s)
 (R/'patches'/(i+'.patch')).write_text(''.join(difflib.unified_diff(old.splitlines(True),s.splitlines(True),fromfile='items/'+i+'.md',tofile='items/'+i+'.md')))
 changes[i]=note
def sub(i,a,b,note="Exact local supplier restatement corrected."):
 s=get(i)
 if a not in s: raise ValueError((i,a))
 put(i,s.replace(a,b),note)
def dep(s,i,role='mathematical-premise'):
 head=s.split('\n---',1)[0]
 if re.search(r'^deps:.*\b'+re.escape(i)+r'\b',head,re.M) or re.search(r'^  - '+re.escape(i)+r'$',head,re.M): return s
 m=re.search(r'^deps: \[(.*)\]$',s,re.M)
 if m: s=s[:m.start()]+m.group(0)[:-1]+', '+i+']'+s[m.end():]
 else: s=s.replace('deps:\n','deps:\n  - '+i+'\n',1)
 m=re.search(r'^dependency_roles: (\{.*\})$',s,re.M)
 if m:
  o=json.loads(m.group(1));o[i]=role
  s=s[:m.start()]+'dependency_roles: '+json.dumps(o,ensure_ascii=False)+s[m.end():]
 else:s=s.replace('dependency_roles:\n','dependency_roles:\n  '+i+': '+role+'\n',1)
 return s
i='def-rpm-spacetime-observer-and-worldline'
sub(i,'these are affine curves into $A$','these are $C^2$ curves into the affine space $A$','Correct ambient affine space versus affine-map ambiguity; accelerated and straight C2 curves both retained.')
i='def-rpm-mechanical-momentum-and-observer-energy'
sub(i,'where $U$ is its future unit tangent with $g(U,U)=-c^2$','where, for its adopted $C^2$ future timelike curve $x(s)$ with $T=dx/ds$, $U:=cT/\\sqrt{-g(T,T)}=dx/d\\tau$ is the proper-time tangent and satisfies $g(U,U)=-c^2$','Make existing proper-time tangent normalization explicit; no extra dynamics.')
i='def-rpm-h-background-and-model-quantities'
sub(i,'no particle action, force law','no particle stationary-action principle, force law','Clarify quantity/unit functional naming versus adoption of a variational motion law.')
i='post-rpm-h-free-test-particle-action'
sub(i,'The integrand is the proper-time length density,','The physical free trajectory is required to satisfy $\\left.\\frac{d}{d\\epsilon}S_{m,[a,b]}[x_\\epsilon]\\right|_{\\epsilon=0}=0$ for every such admissible variation and every compact segment $[a,b]\\subset I$ with $a<b$. The integrand is the proper-time length density,','Explicit universal vanishing-first-variation formulation of already named stationary model.')
i='def-rpm-h-regular-constraint-system';s=get(i)
s=dep(s,'def-poisson-bracket-on-a-symplectic-manifold')
s=s.replace('The regular-level theorem [[thm-a-regular-level-set-is-an-embedded-submanifold]] then gives $C$ its embedded-submanifold structure and $T_zC=\\bigcap_a\\ker d\\chi_a(z)$.','When $C\\ne\\varnothing$, the regular-level theorem [[thm-a-regular-level-set-is-an-embedded-submanifold]] gives $C$ its embedded-submanifold structure and $T_zC=\\bigcap_a\\ker d\\chi_a(z)$. When $C=\\varnothing$, use the empty embedded submanifold, with no tangent-space condition to check.')
s=s.replace('Given a smooth canonical Hamiltonian','For smooth functions on any such symplectic $M$, define $\\iota_{X_F}\\omega=dF$ and $\\{F,G\\}:=\\omega(X_F,X_G)=X_G(F)$, as in [[def-poisson-bracket-on-a-symplectic-manifold]]. This agrees with the cotangent convention on canonical phase spaces; no cotangent presentation of $M$ is required.\n\nGiven a smooth canonical Hamiltonian')
put(i,s,'Retain empty constraint surfaces and general symplectic manifolds; bind exact intrinsic bracket.')
i='def-rpm-h-first-class-constraint-family';s=dep(get(i),'def-poisson-bracket-on-a-symplectic-manifold')
s=s.replace('The Poisson bracket convention is that of [[thm-rpm-h-canonical-poisson-and-flow]].','For arbitrary $(P,\\omega)$ use $\\iota_{X_F}\\omega=dF$ and $\\{F,G\\}=\\omega(X_F,X_G)=X_G(F)$ from [[def-poisson-bracket-on-a-symplectic-manifold]], agreeing with [[thm-rpm-h-canonical-poisson-and-flow]] on cotangent spaces.')
put(i,s,'Use exact general symplectic bracket, retaining full scope.')
i='thm-rpm-h-first-class-local-reduction';s=dep(get(i),'def-poisson-bracket-on-a-symplectic-manifold')
s=s.replace('[F7] [[thm-rpm-h-canonical-poisson-and-flow]]: the convention is','[F7] [[def-poisson-bracket-on-a-symplectic-manifold]]: on every symplectic $P$, the convention is')
put(i,s,'Exact general symplectic supplier in F7; Statement and proof conclusions unchanged.')
i='thm-rpm-h-second-class-dirac-bracket'
sub(i,'$C_{ab}=\\{\\chi_a,\\chi_b\\}$ uses the canonical action-unit bracket convention; regularity is a separate hypothesis.','regular constraints have independent differentials on their common zero surface; empty surfaces are allowed. Here $C_{ab}=\\{\\chi_a,\\chi_b\\}$ uses the intrinsic symplectic bracket of [F2], with no physical units assigned on an arbitrary symplectic manifold.','Remove unsupported action-unit attribution; retain intrinsic bracket and exact regularity interface.')
i='lem-rpm-shell-tangent-force-ivp';s=dep(get(i),'def-countable-choice')
s=s.replace('**Given:** The prescribed background','[A2] The time-oriented background uses $\\mathrm{AC}_\\omega$ for its canonical tangent-bundle smooth structure, inherited from [[def-gr-smooth-lorentzian-objects]] clause (c) through [[def-rpm-spacetime-observer-and-worldline]]; this is [[def-countable-choice]], and supplies the exact choice premise of the metric-connection theorem.\n\n**Given:** The prescribed background')
s=dep(s,'def-gr-smooth-lorentzian-objects')
s=s.replace('[given, F1, F6, algebra]','[given, A2, F1, F6, algebra]')
put(i,s,'Expose existing inherited ACω convention in Facts; no new Statement hypothesis.')
extension=r'''For $C^1$ fields $V$ along a $C^1$ curve, use $(D_sV)^a:=dV^a/ds+\Gamma^a{}_{bc}(x)(dx^b/ds)V^c$. This extends the smooth pullback definition: under a smooth frame change with matrix $C(s)$, $v=Cw$ and $B_{\rm new}=C^{-1}BC+C^{-1}C'$ give $v'+Bv=C(w'+B_{\rm new}w)$, so the formula is intrinsic and uses only first derivatives. The calculation in [[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]] Proof 2.1 therefore applies at this regularity. The component metric-compatibility calculation of [[lem-gr-parallel-transport-and-geodesic-speed]] Proof 1.1–2.1 gives $d\,g(V,W)/ds=g(D_sV,W)+g(V,D_sW)$ for $C^1$ fields and curves, with one-sided derivatives at included endpoints. For a $C^2$ variation, these formulas in each parameter direction and commuting mixed partials define the derivatives used below.'''
for i,k in [('lem-rpm-length-action-first-variation','F10'),('lem-rpm-einbein-variation-and-equivalence','F11')]:
 s=get(i)
 for d in ['prop-local-frame-formula-for-covariant-differentiation-along-a-curve','lem-gr-parallel-transport-and-geodesic-speed']:s=dep(s,d)
 a='['+k+'] The covariant derivative along a curve is the pullback connection $D_sV=(x^*\\nabla)_{\\partial_s}V$ ([[def-covariant-derivative-along-a-curve]]).'
 s=s.replace(a,'['+k+'] On smooth curves the covariant derivative is the pullback connection ([[def-covariant-derivative-along-a-curve]]). '+extension)
 put(i,s,'Intrinsic first-derivative frame-change calculation defines C1 along-curve derivative and proves pairing; retain C2 curves/variations.')
i='pthm-rpm-mass-shell-and-force-work'
a='[F5] Along a curve, $\\frac{d}{d\\tau}g(V,W)=g(D_\\tau V,W)+g(V,D_\\tau W)$ ([[lem-gr-parallel-transport-and-geodesic-speed]]).'
b='[F5] For $C^1$ fields along a $C^1$ curve, use $(D_\\tau V)^a=\\dot V^a+\\Gamma^a{}_{bc}\\dot x^bV^c$. The coordinate product rule and metric compatibility give $\\frac{d}{d\\tau}g(V,W)=g(D_\\tau V,W)+g(V,D_\\tau W)$ at this regularity, exactly as in [[lem-gr-parallel-transport-and-geodesic-speed]] Proof 1.1–2.1. Thus the variable-mass clause needs no smoothness beyond its stated $C^1$ hypotheses.'
sub(i,a,b,'Bind exact C1 pairing extension already proved in supplier.')
i='lem-rpm-external-charge-local-ivp';s=dep(get(i),'thm-ck-euclidean-maps-closed-under-algebra-and-composition')
s=s.replace('[F5] [[thm-algebra-of-derivatives]]: finite sums and products of differentiable coordinate functions are differentiable, with the stated sum and product rules.','[F5] [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]] at $k=1$: finite componentwise sums, products, scalar multiples and composites of $C^1$ maps on open Euclidean domains are $C^1$. The one-variable rules of [[thm-algebra-of-derivatives]] are used only on coordinate lines.')
put(i,s,'Exact multivariable C1 closure supplier instead of one-variable overstatement.')
i='lem-rpm-curved-charge-action-variation'
sub(i,'[F12] [[thm-monotonicity-of-the-integral]]: for integrable $f\\ge d>0$','[F12] [[thm-monotonicity-of-the-integral]]: an integrable nonnegative real function has nonnegative integral; for integrable $f\\ge d>0$','State supplier nonnegativity clause actually used on outer subintervals.')
i='ex-rpm-incomplete'
sub(i,'For $L,\\ell>0$,','Use SI length coordinates: $\\theta,x^i,L,\\ell$ and the affine parameter $s$ have units metres; $c$ has units m/s and $d\\tau=ds/c$ on the displayed norm-$-1$ curves. Their tangents are dimensionless unit timelike vectors; their proper-time tangents are $c\\,\\partial_\\theta$. For $L,\\ell>0$,','Explicit units for flat cylinder/slab and affine/proper-time tangents.')
i='ex-rpm-clock-reunion'
sub(i,'Choose an inertial frame','Take $(M,g)$ to be the affine Minkowski model $A$ with constant metric $\\eta$ and its selected future cone, so $g=\\eta$ in an inertial chart. Choose an inertial frame','Explicitly identify flat affine paths and Lorentz background metric.')
i='pthm-rpm-h-action-mechanical-momentum'
sub(i,'[F5] [[thm-rpm-h-first-order-action-and-geodesics]]: on the massive branch the canonical covector from the first-order model equals the square-root fibre derivative.','[F5] [[thm-rpm-h-first-order-action-and-geodesics]]: on stationary massive first-order triples, elimination of the momentum and multiplier identifies their canonical covector with the square-root fibre derivative. This is a conditional stationary-model agreement, not an assertion for arbitrary first-order data.')
sub(i,'It agrees with the canonical covector in [F5].','If a stationary massive first-order triple represents this curve, [F5] identifies its canonical covector with this same fibre derivative.','Separate pointwise fibre derivative identity from conditional stationary first-order agreement.')
i='ex-rpm-h-shifted-chart-negative-energy'
sub(i,'It is flat under','Choose the time orientation for which increasing inertial $X^0$ is future; thus $n=\\partial_0-2\\partial_1=\\partial_{X^0}$ is future unit timelike. It is flat under','Fix time orientation licensing future root and positive observer energy.')
i='ex-rpm-h-two-shell-consistency-obstruction'
sub(i,'title: "Two scalar shell potentials fail first-class closure generically"','title: "A two-shell scalar potential obstructs first-class closure"','Title describes explicit counterexample without undefined genericity.')
i='pthm-rpm-h-coordinate-versus-observer-energy'
sub(i,'title: "Coordinate Hamiltonian and normal-observer energy differ by shift"','title: "Coordinate Hamiltonian and normal-observer energy: lapse and shift"','Title includes lapse factor already proved in Statement.')
i='pthm-rpm-hidden-momentum'
sub(i,'In the TD branch $n=p/\\mu$, $\\mu=\\sqrt{-g(p,p)}$,','In the TD branch $n=p/\\mu$, $\\mu=\\sqrt{-g(p,p)}$, put $m:=-g(p,U)/c^2>0$ as well;','Define TD branch scalar m with same observer contraction convention.')
i='thm-rpm-h-killing-shell-first-integral'
s=get(i)
s=dep(s,'prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor')
s=s.replace('[F1] [[thm-gr-killing-and-on-shell-matter-identities]]: clause (a) states that a vector field is Killing exactly when $\\mathcal L_\\xi g=0$; only this clause is used, and no countable-choice premise from its distinct clause (d) is imported.','[F1] Here Killing means $\\mathcal L_\\xi g=0$ on the given Lorentzian manifold, independently of dimension and orientation. In every chart $(\\mathcal L_\\xi g)_{ab}=\\xi^c\\partial_cg_{ab}+g_{cb}\\partial_a\\xi^c+g_{ac}\\partial_b\\xi^c$ by [[prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor]]. The argument below uses this tensor definition directly, without applying the four-dimensional oriented matter-current theorem.')
put(i,s,'Use orientation/dimension independent Lie derivative definition directly; arbitrary Lorentzian manifold preserved.')
i='thm-rpm-h-local-hamilton-jacobi'
sub(i,'when $t,q,p,H$ use SI time, length, momentum, and energy units.','when $t,q,p,H$ use SI time, length, momentum, and energy units and the initial function $S_0$ is assigned action units $\\mathrm{J\\,s}$.','SI interpretation includes initial action units; abstract arbitrary real initial functions retained.')
i='pthm-rpm-h-classical-orbit-evolution'
sub(i,'[L1] [[thm-rpm-h-positive-spin-orbit]]: the current assigned A draft identifies the m,s>0 orbit and computes its dimension and invariants conditionally on H10 and KKS. It exists as a batch-26 draft, but is not independently approved.','[L1] [[thm-rpm-h-positive-spin-orbit]]: for $m,s>0$ its mathematical KKS construction identifies the orbit and computes its dimension and invariants. The optional physical adoption is [A1], not a premise of this mathematical supplier.','Remove false H10 premise attribution; preserve mathematical versus physical adoption distinction.')
i='thm-rpm-h-complete-integral-coordinates'
sub(i,'In a temporal spacetime chart satisfying H9, the covariant','For the separate relativistic specialization, take $n=3$ and $H$ to be exactly the future-shell reduced Hamiltonian $H=-cp_0$ supplied by [[thm-rpm-h-temporal-shell-reduction]], with its temporal spacetime chart and domain hypotheses. Then the covariant','Keep arbitrary-H complete integrals; make additional relativistic specialization conditional on actual shell Hamiltonian.')
sub(i,'1.2 In the temporal chart,','1.2 In the separate relativistic specialization stipulated in the Statement, use exactly the reduced $H$ of [L2]. In its temporal chart,','Explicit specialization proof premise.')
i='pthm-rpm-constant-electric-orbit'
sub(i,'[F8] [[cor-zero-derivative-implies-constant]]: a differentiable scalar function on an interval with zero derivative is constant there.','[F8] [[cor-zero-derivative-implies-constant]]: a scalar function continuous on an interval and differentiable on its interior, with zero derivative there, is constant throughout the interval. The compared solutions here are $C^1$, including at any included endpoints.','Restore supplier continuity clause.')
i='def-rpm-relativistic-coulomb-phase-system'
sub(i,'maximality is in the sense of [[def-first-order-ode-initial-value-problem-and-solution]].','a solution is maximal when it has no extension as a $C^1$ solution in the stated phase domain to a strictly larger connected interval containing its initial time. The IVP and interval-solution convention is [[def-first-order-ode-initial-value-problem-and-solution]].','Define maximal extension locally without overattributing IVP definition.')
i='lem-rpm-schwarzschild-null-geodesic-reduction'
sub(i,'and choose the orientation so that','choose the affine-parameter orientation so that $E>0$, and independently choose the sense of the azimuthal coordinate (replacing $\\varphi$ by $-\\varphi$ if needed) so that','Independent time and angle orientation includes counter-rotating rays while retaining nonnegative impact convention.')
# previous replacement needs note argument and is below corrected
i='lem-rpm-finite-time-ode-comparison'
sub(i,'so [L1] applies on every $[0,t]$.','so [L1] applies on $[0,t]$ for every $0<t\\le T$. At $t=0$ the claimed estimate is equality; no fundamental-theorem application on a degenerate interval is needed.','Separate t=0 equality while retaining every T≥0.')
i='pthm-rpm-static-clock-redshift'
sub(i,'[A1] Ideal massive test bodies follow the adopted free-fall rule and ideal clocks record proper time; treating the observer-energy ratio as a frequency ratio is the geometric-optics convention','[A1] The Schwarzschild background is adopted, and the ideal-clock clause records proper time along the specified static timelike worldlines. These observers are constrained and accelerated; the freely falling test-body clause is not applied to them. Treating the observer-energy ratio of the specified null ray as a frequency ratio is the geometric-optics convention','Exact clock and geometric-optics branches; free-fall not attributed to accelerated static observers.')
i='ex-rpm-schwarzschild-null-critical-impact'
sub(i,'Let $s>0$.','Use SI units: the Schwarzschild scale $s$, radius $r$, and impact parameters $b,b_c$ are lengths in metres; the factors $1-s/r$ and $b^2H(r)$ are dimensionless. Let $s>0$.','Assign physical scale and impact/radius units explicitly.')
i='ex-rpm-bmt-fw-and-g-two'
sub(i,'[A1] The BMT transport law and translational Lorentz-force equation are adopted model equations. [[post-rpm-bmt-dipole-model]]','[A1] The spin transport law is adopted by [[post-rpm-bmt-dipole-model]]. Translation is the stationary local charged-action branch stipulated in the Example, whose Lorentz-force equation is deduced under [A3] by [F3], not directly postulated by the BMT spin supplier.','Exact BMT spin premise versus action-equivalence translation.')
i='lem-rpm-charge-multipole-remainder';s=dep(get(i),'thm-monotonicity-of-the-integral')
s=s.replace('The bound follows from $\\int_0^1(1-t)\\,dt=\\tfrac12$ and the integral triangle inequality [F2].','For $A:=M_k|y-z|^2$, the continuous Riemann integrand obeys $-A(1-t)\\le(1-t)\\phi\\prime\\prime(t)\\le A(1-t)$. Riemann monotonicity [F6] and $\\int_0^1(1-t)\\,dt=\\tfrac12$ therefore bound its integral between $-A/2$ and $A/2$. The Lebesgue inequality [F2] is reserved for the outer density integral in step 2.1.')
s=s.replace('## Proof','[F6] [[thm-monotonicity-of-the-integral]]: Riemann integrable real functions on a nondegenerate compact interval preserve pointwise order under their integrals.\n\n## Proof',1)
s=s.replace('[given, A1, F2, F3, F4, F5, algebra]','[given, A1, F3, F4, F5, F6, algebra]')
put(i,s,'Derive inner Riemann remainder by exact monotonicity; outer Lebesgue triangle retained.')
i='thm-rpm-h-canonical-poisson-and-flow'
sub(i,'If $H_t$ is smooth on an open time-dependent domain $D\\subset\\mathbb R\\times T^*Q$, each solution of $\\dot z=X_{H_t}(z)$ has local uniqueness and smooth dependence on initial data and parameters;','If $H_t$ is smooth on an open time-dependent domain $D\\subset\\mathbb R\\times T^*Q$, each solution of $\\dot z=X_{H_t}(z)$ has local uniqueness and smooth dependence on initial data. For the parameter clause, let $\\Lambda\\subset\\mathbb R^k$ be open (including $k=0$) and let $H(t,z,\\alpha)$ be jointly smooth on an open $D_\\Lambda\\subset\\mathbb R\\times T^*Q\\times\\Lambda$; then its Hamilton solutions depend jointly smoothly on time, initial data and $\\alpha$ on the actual local solution domain;','Declare arbitrary finite-dimensional smooth parameter families; preserve parameter conclusion.')
sub(i,'a smooth time-dependent Hamiltonian $H_t$.','a smooth time-dependent Hamiltonian $H_t$ and, for parameter dependence, the jointly smooth family $H(t,z,\\alpha)$ on $D_\\Lambda$ with $\\alpha\\in\\Lambda$.')
sub(i,'Smoothness of $H_t$ makes its coordinate Hamiltonian vector field smooth.','Smoothness of $H_t$, or joint smoothness of the declared $H(t,z,\\alpha)$ family, makes its coordinate Hamiltonian vector field smooth in all those variables.')
# Event-local massive legs have exactly the shell datum; an auxiliary affine history licenses any worldline formula without assuming collision dynamics.
event=r'''For an event-local massive leg $P=mU$ of [[def-rpm-collision-objects]], $\eta(U,U)=-c^2$ and $U$ is future. In the named inertial frame write $U=(U^0,\mathbf U)$ with $U^0>0$, and define its velocity $\mathbf v:=c\mathbf U/U^0$. The normalization gives $(U^0)^2-|\mathbf U|^2=c^2$, hence $|\mathbf v|<c$, $U^0=c(1-|\mathbf v|^2/c^2)^{-1/2}$, $E=cP^0=\gamma mc^2$, and $\mathbf p=\gamma m\mathbf v$, equivalently $\mathbf v=c^2\mathbf p/E$. These are pointwise identities. The auxiliary affine history $x(\tau)=p+\tau U$ is $C^\infty$ future timelike on an open interval, and in coordinate time realizes this same velocity; thus the kinematic formulas of [[pthm-rpm-inverse-momentum-and-work]] also apply to this realization. No actual collision history or interaction is inferred.'''
i='texp-rpm-ideal-fusion-mass'
sub(i,'[F2] [[pthm-rpm-inverse-momentum-and-work]]: a massive leg with velocity $\\mathbf v$ has $E=\\gamma mc^2$ and $\\mathbf p=\\gamma m\\mathbf v$.','[F2] '+event,'Derive massive-leg formulas pointwise, and explicitly realize exact worldline supplier.')
i='texp-rpm-one-null-decay-recoil'
sub(i,'[F3] [[pthm-rpm-inverse-momentum-and-work]]: for a massive daughter, $|\\mathbf v|=c^2|\\mathbf p|/E$ and its energy and momentum obey the mass shell.','[F3] '+event,'Derive pointwise recoil velocity from normalized event momentum without new worldline premise.')
i='pthm-rpm-fixed-target-threshold'
sub(i,'[F2] [[pthm-rpm-inverse-momentum-and-work]]: for a massive particle, $E^2=m^2c^4+c^2|\\mathbf p|^2$ and $E>0$.','[F2] The massive event leg of [[def-rpm-collision-objects]] is $P=mU$ with $\\eta(U,U)=-c^2$ and future $U$. Its inertial components therefore have $P^0>0$ and $-(P^0)^2+|\\mathbf p|^2=-m^2c^2$. With $E=cP^0$, this is $E>0$ and $E^2=m^2c^4+c^2|\\mathbf p|^2$, without a worldline premise. These agree with [[pthm-rpm-inverse-momentum-and-work]] on any affine realization $x(\\tau)=p+\\tau U$.','Event-local shell and positivity derived from actual collision Definition.')
i='ex-rpm-low-speed-energy-bound'
sub(i,'[L1] In the constant-mass flat inertial model,','[L1] Realize the stipulated state locally by the auxiliary $C^\\infty$ curve with inertial coordinates $x(t)=(ct,\\mathbf x_0+t\\mathbf v)$ on an open interval. Its tangent $(c,\\mathbf v)$ is future timelike since $|\\mathbf v|\\le c/10<c$, and $d\\mathbf x/dt=\\mathbf v$. Under the adopted constant-mass convention, this meets the precise worldline hypotheses of [[pthm-rpm-inverse-momentum-and-work]]. Thus in the constant-mass flat inertial model,','Provide smooth local kinematic state realization meeting exact supplier domain.')
i='ex-rpm-spinless-td';s=dep(get(i),'lem-rpm-td-local-closure')
s=s.replace('[F1] The TD closure preserves the constraint and invariants on its local admissible domain; at $S=0$ it gives $p=(\\mu/c)U$, $D_\\tau p=0$, and $D_\\tau U=0$. [[pthm-rpm-td-invariants]]','[F1] [[lem-rpm-td-local-closure]] supplies the local TD algebraic closure with $U=cK^{-1}p/\\sqrt{-g(K^{-1}p,K^{-1}p)}$; its Proof 3.1 proves preservation from initial $S^{ab}p_b=0$ by a homogeneous linear ODE. Once this condition holds along the solution, [[pthm-rpm-td-invariants]] supplies the invariant norms and zero-initial-spin clause, giving $S=0$, $p=(\\mu/c)U$, $D_\\tau p=0$ and $D_\\tau U=0$.')
s=s.replace('By [A2], [F1] and the zero initial tensor, the spinless branch of the TD closure has $S=0$ throughout the local solution.','The zero initial spin in [A2] gives $S^{ab}p_b=0$ initially. The initial-state preservation part of [F1] makes this TD condition hold along the local closed solution. The invariant theorem in [F1] now applies under its full along-solution TD premise and makes $S=0$ throughout the local solution.')
put(i,s,'Bind initial-TD propagation to closure lemma before applying invariant theorem; Statement preserved.')
i='pthm-rpm-schwarzschild-circular-stability'
sub(i,'in the Euclidean phase space $(r,w)$','in the Euclidean phase space with dimensionless coordinates $(R,V):=(r/s,w/c)$','Specify fixed positive length/speed scales for Lyapunov topology, preserving all regimes.')
s=get(i)
s=s.replace('Fix any phase-space radius $\\varepsilon>0$','Measure phase-space distance by $d(z,z_c):=\\sqrt{((r-r_c)/s)^2+(w/c)^2}$. These fixed positive scales give the same Euclidean topology as any fixed numerical-unit chart; $H_\\ell$ has units speed squared. Fix any dimensionless phase-space radius $\\varepsilon>0$')
s=s.replace('$0<\\eta<\\varepsilon/2$','$0<\\eta<s\\varepsilon/2$')
s=s.replace('$H_\\ell-W_\\ell(r_c)/2<\\varepsilon^2/8$','$H_\\ell-W_\\ell(r_c)/2<c^2\\varepsilon^2/8$')
s=s.replace('$w^2/2=H_\\ell-W_\\ell(r)/2<\\varepsilon^2/8$ and $|w|<\\varepsilon/2$','$w^2/2=H_\\ell-W_\\ell(r)/2<c^2\\varepsilon^2/8$ and $|w|<c\\varepsilon/2$')
s=s.replace('With $|r-r_c|<\\eta<\\varepsilon/2$ and $|w|<\\varepsilon/2$','With $|r-r_c|/s<\\eta/s<\\varepsilon/2$ and $|w|/c<\\varepsilon/2$')
s=s.replace('choose $0<\\delta\\le\\varepsilon$','choose $0<\\delta\\le\\varepsilon$ in this dimensionless distance')
s=s.replace('\\min\\{\\eta/2,\\delta/2\\}','\\min\\{\\eta/2,s\\delta/2\\}')
s=s.replace('fixed neighborhood of radius $\\eta$','fixed dimensionless neighborhood of radius $\\eta/s$')
put(i,s,'Use dimensionless distance and c² energy comparison; retain exact stable/unstable radius cases.')
(R/'proposals-index.json').write_text(json.dumps({'private_only':True,'subjects':[{'id':i,'repair':n} for i,n in changes.items()]},indent=2)+'\n')
print(len(changes),'private proposals')
i='thm-rpm-h-killing-shell-first-integral'
sub(i,'**Given:** The smooth metric, canonical bracket [L2], shell function and multiplier equations [L1].','**Given:** The smooth metric, canonical bracket [L2], shell function and the stipulated constrained Hamiltonian evolution generated by $eC_m$.','Derive general-dimensional shell conservation directly; no four-manifold H7 prerequisite.')
sub(i,"3.1 Along the H7 constrained equation, $\\frac d{d\\lambda}F_\\xi=e\\{F_\\xi,C_m\\}$ because $F_\\xi$ has no explicit parameter dependence. This vanishes by step 2.1 throughout the solution's actual interval. [L1, L2, A1, step 2.1]","3.1 The canonical Hamiltonian derivative rule [L2] applied to the stipulated generator $eC_m$ gives $dF_\\xi/d\\lambda=\\{F_\\xi,eC_m\\}=e\\{F_\\xi,C_m\\}+C_m\\{F_\\xi,e\\}$. Here the last term is zero on the constrained surface $C_m=0$ (and is identically absent if $e$ depends only on the parameter); $F_\\xi$ has no explicit parameter dependence. Step 2.1 makes the other term zero throughout the actual solution interval. Thus the conservation calculation works on the arbitrary Lorentzian manifold of the Statement, without using [L1]'s four-dimensional variational hypotheses. [L2, A1, step 2.1, given, algebra]")
i='lem-rpm-schwarzschild-null-geodesic-reduction'
s=get(i)
a='2.1 At $\\vartheta=\\pi/2$'
b='1.2 The nonzero null tangent has nonzero time component: if $dx^0/d\\lambda=0$, the positive spatial block of the exterior metric and the null condition would force every tangent component to vanish. Hence the conserved $E$ of step 1.1 is nonzero, and reversing the affine parameter if necessary makes it positive. This reversal also changes the sign of $L$; independently replace the azimuthal coordinate by $-\\varphi$ if that resulting constant $L$ is negative. This angular reflection leaves the displayed metric, equatorial plane and radial equation invariant and sends $L$ to $-L$ while leaving $E$ fixed. Thus the two stated sign choices are available for every such ray; when $L=0$ no angular reflection is needed. [given, F1, step 1.1, algebra]\n\n2.1 At $\\vartheta=\\pi/2$'
s=s.replace(a,b)
put(i,s,'Prove independent time and axial sign choices rather than wrongly using parameter reversal for both.')
# Actual scientific partial release details; metadata, stamps, engine controls and canonical writes remain root-only.
(R/'proposals-index.json').write_text(json.dumps({'private_only':True,'subjects':[{'id':i,'repair':n} for i,n in changes.items()]},indent=2)+'\n')
print('final private candidates',len(changes))

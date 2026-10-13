---
id: pthm-cm16-separatrix-splitting-and-horseshoe
kind: physics-theorem
title: "A smooth periodically forced one-label Cartesian model with a transverse
  homoclinic horseshoe: the physical stroboscopic map has a compact invariant
  set conjugate to the shift, chaotic in the stated sense"
status: published
origin: session
domain: physics
dependency_level: 13
deps:
  - thm-smooth-fixed-mass-mechanical-horseshoe
  - lem-rescaled-pulse-map-is-c-one-close-to-kick
  - def-smooth-periodic-oscillator-pulse-model
  - def-cm16-stroboscopic-and-poincare-maps
  - def-cm16-stability-and-hyperbolicity-concepts
  - def-cm16-chaos-list-for-model-maps
  - post-cm02-force-superposition
  - def-cm02-newtonian-flow
  - def-cm01-units
  - def-bilateral-symbol-and-bounded-sequence-space
  - def-cm-topologically-mixing-dense-periodic-and-sensitive-maps
  - def-stable-unstable-cones-and-line-slopes
  - def-countable-choice
  - def-dependent-choice
  - def-ck-euclidean-maps-and-diffeomorphisms
  - thm-explicit-perturbed-horseshoe-and-transversality
  - lem-close-map-first-component-has-uniform-inverse
dependency_roles:
  thm-smooth-fixed-mass-mechanical-horseshoe: mathematical-premise
  lem-rescaled-pulse-map-is-c-one-close-to-kick: mathematical-premise
  def-smooth-periodic-oscillator-pulse-model: mathematical-premise
  def-cm16-stroboscopic-and-poincare-maps: formulation-prerequisite
  def-cm16-stability-and-hyperbolicity-concepts: formulation-prerequisite
  def-cm16-chaos-list-for-model-maps: formulation-prerequisite
  post-cm02-force-superposition: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-bilateral-symbol-and-bounded-sequence-space: mathematical-premise
  def-cm-topologically-mixing-dense-periodic-and-sensitive-maps: mathematical-premise
  def-stable-unstable-cones-and-line-slopes: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-explicit-perturbed-horseshoe-and-transversality: mathematical-premise
  lem-close-map-first-component-has-uniform-inverse: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The conditional chaos theorem for one declared smooth
  mechanical model: a single label on full Cartesian configuration space R^3
  with fixed positive mass, a pulsed polynomial force in one coordinate and
  inverted harmonic forces in the other two. The axis with zero transverse
  coordinates and velocities is preserved while solutions exist, and its pulse dynamics is the
  one-coordinate pulsed oscillator of the mathematical supplier. For every pulse
  width below a threshold depending only on the dimensionless amplitude a>=100
  and the bump, the physical stroboscopic map has a compact invariant set on
  that axis conjugate to the two-sign shift and chaotic in the stated sense; its
  two fixed points are hyperbolic for the full six-dimensional map, and its
  nonconstant finite-deviation codes give transverse homoclinic points in the
  full phase space. The coded states satisfy |Q|<=(sqrt(a)+3) l0 and |Pi|<=m l0
  w0 (sqrt(a)+3). The transverse force terms are adopted model assumptions, not
  an observed drive or apparatus; no measurements, empirical chaos claim or
  claim about other driven or nearly integrable models are made."
sources:
  references:
    - title: "P. Cvitanovic, R. Artuso, R. Mainieri, G. Tanner, G. Vattay, Chaos:
        Classical and Quantum (ChaosBook.org, edition 17.6.8), Chapter 14
        Section 14.6 and Chapter 15 Sections 15.1-15.3: symbolic dynamics, the
        Henon horseshoe and homoclinic tangles as concrete constructions rather
        than pictures"
      url: "https://chaosbook.org/chapters/ChaosBook.pdf"
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Henon mapping,
        Communications in Mathematical Physics 67 (1979) 137-146: the shift
        structure of a quadratic horseshoe and the stable/unstable sectors"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics\
        /volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/11\
        03905161.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of
        Classical Mechanics, 2nd ed., §4.3: the tangle narrative and the
        explicit warning that a pictured crossing does not prove chaos"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9\
        579/sicm_edition_2.zip"
---

## Statement

Grant the Axioms of Countable and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]), inherited from the
supplier theorem below.

**(i) The model.** Fix a length scale $\ell_0>0$, a mass $m>0$, a frequency
scale $\omega_0>0$, a dimensionless amplitude $a\ge100$, and a pulse width
$\delta>0$. Let $w$ be the normalized smooth bump and $\beta_\delta$ the
smooth $P$-periodic pulse of [[def-smooth-periodic-oscillator-pulse-model]]
with $P:=\pi/2+\delta$, $\beta_\delta=0$ on $[0,\pi/2]$ and
$\beta_\delta(t)=\delta^{-1}w((t-\pi/2)/\delta)$ on $[\pi/2,P]$. Use full
Cartesian position $\mathbf r=(Q,Y,Z)\in Q_{\mathrm{conf}}:=\mathbb R^3$
and velocity $\mathbf v=\dot{\mathbf r}\in\mathbb R^3$ for one label of mass
$m$. The adopted force map on
$\mathbb R\times Q_{\mathrm{conf}}\times\mathbb R^3$ is
$$\mathbf F(T,\mathbf r,\mathbf v):=-m\omega_0^2\Bigl(Q+\ell_0\beta_\delta(\omega_0T)\Bigl(a-\frac{Q^2}{\ell_0^2}\Bigr),\ -Y,\ -Z\Bigr),\qquad T_p:=\frac{P}{\omega_0}.$$
It is smooth, defined on the full product domain and $T_p$-periodic, so it is
a force model of [[post-cm02-force-superposition]] with fixed mass $m$; its
motions are the $C^2$ curves of [[def-cm02-newtonian-flow]]. The stroboscopic
map and Euclidean phase chart below use the Newtonian state coordinates
$(\mathbf r,\mathbf v)$ of that definition. The phase plane
$$\mathcal P:=\{(\mathbf r,\mathbf v):Y=Z=v_Y=v_Z=0\}$$
is preserved for as long as each solution exists: zero transverse position and velocity remain zero by uniqueness of their homogeneous transverse equations. This does not assert completeness of every axial solution. Define canonical momenta $\boldsymbol\Pi:=m\mathbf v=
(\Pi_Q,\Pi_Y,\Pi_Z)$, with axial component $\Pi:=\Pi_Q$. The restricted equation is
$$m\ddot Q=-m\omega_0^2\Bigl[Q+\ell_0\beta_\delta(\omega_0T)\Bigl(a-\frac{Q^2}{\ell_0^2}\Bigr)\Bigr].$$
With $q=Q/\ell_0$, $s=\omega_0T$ and $p=\dot Q/(\ell_0\omega_0)$ this is
exactly the dimensionless equation of the mathematical supplier. On the axis
$\Pi=m\dot Q$. In the full dimensionless position-velocity chart write
$\widetilde{\mathbf r}:=\mathbf r/\ell_0$ and
$\widetilde{\mathbf v}:=\mathbf v/(\ell_0\omega_0)$; the state scaling
$(\widetilde{\mathbf r},\widetilde{\mathbf v})\mapsto
(\ell_0\widetilde{\mathbf r},\ell_0\omega_0\widetilde{\mathbf v})$
identifies this chart with the physical Newtonian state chart, and
$\iota_\delta$ is its restriction to the invariant axis. The full stroboscopic
map at period $T_p$ is $\Psi_\delta$ of
[[def-cm16-stroboscopic-and-poincare-maps]] clause (i).

**(ii) The horseshoe.** There is $\delta_0>0$, depending only on $a$ and the
bump $w$, such that for every $0<\delta<\delta_0$ there is a homeomorphism
$H_\delta$ of the two-sign shift space $(X_\pm,D_\pm)$ of
[[def-bilateral-symbol-and-bounded-sequence-space]] onto a compact subset
$\Lambda_\delta^{\mathrm{phys}}\subset\mathcal P$ such that
$$\Psi_\delta\circ H_\delta=H_\delta\circ S_\pm.$$
Thus $\Lambda_\delta^{\mathrm{phys}}$ is compact and $\Psi_\delta$-invariant,
and the restriction $\Psi_\delta|_{\Lambda_\delta^{\mathrm{phys}}}$ is
conjugate to the shift; with the Euclidean metric inherited from the full
phase chart it is chaotic in the stated sense of
[[def-cm16-chaos-list-for-model-maps]]: continuous, topologically mixing, with
dense periodic points and sensitive dependence with a positive constant.

For each such $\delta$, the full stroboscopic map has open neighborhoods
$\mathcal U_\delta,\mathcal V_\delta\subseteq\mathbb R^6$ with
$\Lambda_\delta^{\mathrm{phys}}\subseteq\mathcal U_\delta\cap\mathcal V_\delta$
such that $\Psi_\delta|_{\mathcal U_\delta}:\mathcal U_\delta\to\mathcal V_\delta$
is a $C^1$ diffeomorphism. Use this branch and its inverse in clause (iii).

**(iii) Hyperbolic points and transverse homoclinic points.** The two constant
codes give hyperbolic fixed points of the full map $\Psi_\delta$, one of each
sign, with hyperbolicity as defined in
[[def-cm16-stability-and-hyperbolicity-concepts]] clause (v); write
$z_{\bar u}:=H_\delta(\bar u)$ for the fixed point coded by the constant
sequence $\bar u$. Define the
stable and unstable sets for the stated branch by
$$W^s(z_*):=\{z\in\mathcal U_\delta:\Psi_\delta^n(z)\in\mathcal U_\delta\text{ for every }n\ge0\text{ and }\Psi_\delta^n(z)\to z_*\},$$
$$W^u(z_*):=\{z\in\mathcal V_\delta:\Psi_\delta^{-n}(z)\in\mathcal V_\delta\text{ for every }n\ge0\text{ and }\Psi_\delta^{-n}(z)\to z_*\},$$
where forward powers are recursively defined using the restriction
$\Psi_\delta|_{\mathcal U_\delta}$, backward powers use its inverse
$\Psi_\delta^{-1}:\mathcal V_\delta\to\mathcal U_\delta$, and convergence
uses the Euclidean metric of the phase chart. ODE uniqueness ensures that
inverse values from overlapping local flow neighborhoods agree. A transverse
homoclinic point here means a point $z_*\ne z_{\bar u}$ in both sets for which
there are injective $C^1$ maps of open neighborhoods of $0$ in $\mathbb R^3$
into $W^s(z_{\bar u})$ and $W^u(z_{\bar u})$, respectively, each with
rank-$3$ differential and a continuous inverse on its image. Their images
pass through $z_*$, and their three-dimensional tangent spaces sum to
$\mathbb R^6$. The planar stable and unstable curves used in this
product construction are supplied by
[[def-stable-unstable-cones-and-line-slopes]].

For every nonconstant code $\sigma\in X_\pm$ for which there are a sign $u$
and $N\ge0$ with $\sigma_n=u$ whenever $|n|\ge N$, the point
$H_\delta(\sigma)$ is a transverse homoclinic point of the corresponding
fixed point for the full map; distinct such codes give distinct points.

**(iv) Explicit bounds.** Write $R:=\sqrt a+3$. Every state in
$\Lambda_\delta^{\mathrm{phys}}$ has $\mathbf r=(Q,0,0)$ and
$\boldsymbol\Pi=(\Pi,0,0)$, with
$$\lvert Q\rvert\le R\,\ell_0,\qquad \lvert\Pi\rvert\le m\ell_0\omega_0R.$$
Every coded trajectory exists for all times and remains in these bounds at
the stroboscopic times. For $a=100$ the bounds are $\lvert Q\rvert\le13\,\ell_0$
and $\lvert\Pi\rvert\le13\,m\ell_0\omega_0$.

**(v) Scope.** The pulsed axial and transverse inverted-oscillator forces are
adopted model assumptions, not a reported drive or apparatus; no measurement,
calibration or uncertainty is involved. The result is about this one full
three-dimensional model: it does not assert chaos for every driven pendulum,
for separatrix splitting in gravitational or vortex models, for Hénon-Heiles
energies, or for any numerical portrait, and it does not validate a first-order
Melnikov calculation by analogy
([[def-cm16-chaos-list-for-model-maps]] clause (d)).

## Facts & Assumptions

**Given:** the scales $\ell_0,m,\omega_0$, the parameters $a\ge100$ and $\delta>0$, the bump $w$ and pulse $\beta_\delta$ of [[def-smooth-periodic-oscillator-pulse-model]], and the full one-label force model $m\ddot{\mathbf r}=\mathbf F(T,\mathbf r,\mathbf v)$ of the Statement.

[L1] The dimensionless horseshoe ([[thm-smooth-fixed-mass-mechanical-horseshoe]]): grant $\mathrm{AC}_\omega$ and $\mathrm{DC}$; for $a\ge100$ and the stroboscopic map $G_\delta$ of the dimensionless model of [[def-smooth-periodic-oscillator-pulse-model]] there is $\delta_0>0$ depending only on $a,w$ such that for every $0<\delta<\delta_0$ there is a homeomorphism $h_\delta:X_\pm\to\mathbb R^2$ onto a compact $G_\delta$-invariant set $\Lambda_\delta$ with $G_\delta\circ h_\delta=h_\delta\circ S_\pm$; $G_\delta|_{\Lambda_\delta}$ is chaotic in the stated sense; the constant codes give two hyperbolic fixed points; and every nonconstant code $s$ with $s_n=u$ for $|n|\ge N$ gives a transverse homoclinic point to the fixed point of sign $u$, by the two $C^1$ stable and unstable curves whose tangent lines are distinct. The local construction also supplies a $C^\infty$ stroboscopic diffeomorphism branch on a neighborhood of the coded compact set, since every coded point lies inside the supplier's smooth map domain.

[L2] The dimensionless model and its perturbed coding bound ([[def-smooth-periodic-oscillator-pulse-model]], [[thm-smooth-fixed-mass-mechanical-horseshoe]]): the dimensionless model is $q''=-q+\beta_\delta(t)(q^2-a)$ with fixed mass $1$. The construction uses the perturbed recurrence of [[thm-explicit-perturbed-horseshoe-and-transversality]]: its phase points have the form $(q_n,V(q_n,q_{n+1}))$, with $|q_n|\le R-\tfrac34$ for $R=\sqrt a+3$. The actual inverse branch of [[lem-close-map-first-component-has-uniform-inverse]] satisfies $|V(q_n,q_{n+1})-q_{n+1}|\le\varepsilon\le\tfrac16$. Consequently $|q|\le R-\tfrac34<R$ and $|p|\le R-\tfrac34+\tfrac16=R-\tfrac7{12}<R$ for every coded state of $G_\delta$. These are perturbed phase coordinates, rather than consecutive coordinates of the unperturbed square-root sequence.

[L3] Transport of the topological properties under a homeomorphism ([[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]]): continuity, topological mixing, density of periodic points and sensitive dependence are invariant under conjugation by a homeomorphism, the sensitivity constant changing with the uniform continuity moduli on the compact set.

[L4] Transverse dynamics of the full model: the transverse equations are $\ddot Y=\omega_0^2Y$ and $\ddot Z=\omega_0^2Z$. In the Newtonian state coordinates $(Y,\dot Y)$ or $(Z,\dot Z)$, each period map is
$$L_P=\begin{pmatrix}\cosh P&\omega_0^{-1}\sinh P\\\omega_0\sinh P&\cosh P\end{pmatrix},$$
with eigenvalues $e^P,e^{-P}$; the transverse stable and unstable eigenspaces $E_s,E_u$ each have dimension $2$ in the combined four-dimensional transverse state space and satisfy $E_s\oplus E_u=\mathbb R^4$. The full stroboscopic map in the declared position-velocity chart is the product of its axial map and these two linear transverse maps. Canonical momenta are the constant linear re-scaling $\boldsymbol\Pi=m\mathbf v$ and do not change the eigenvalues.

[L5] A common open axial branch ([[lem-rescaled-pulse-map-is-c-one-close-to-kick]]): the dimensionless axial period map is a $C^\infty$ diffeomorphism from an open neighborhood of $S=[-R-1,R+1]^2$ onto its image, and that image contains $S$ because the reverse-conjugated inverse map is defined on a neighborhood of $S$. Its product with the two invertible transverse period maps, transported by the full state scaling stated in clause (i), gives the full $C^\infty$ diffeomorphism branch $\Psi_\delta|_{\mathcal U_\delta}:\mathcal U_\delta\to\mathcal V_\delta$ used in the Statement, with $\mathcal U_\delta$ and $\mathcal V_\delta$ both containing the physical image of $S\times\mathbb R^4$.

## Proof

**Proof technique:** direct; embed the dimensionless pulse dynamics as an invariant line of a full framework force model, transfer its coded set, and use the decoupled transverse hyperbolic modes for full phase-space hyperbolicity and transversality.

1.1 The full force map has domain $\mathbb R\times\mathbb R^3\times\mathbb R^3$ and is $C^\infty$, since $w$ and its periodic pulse $\beta_\delta$ are smooth; it is therefore continuous and state-locally-Lipschitz as required by [[post-cm02-force-superposition]] clause (iii). Its period is $T_p=P/\omega_0$, since $\beta_\delta(\omega_0(T+T_p))=\beta_\delta(\omega_0T+P)=\beta_\delta(\omega_0T)$. The equations are $\ddot Q=-\omega_0^2\Bigl[Q+\ell_0\beta_\delta(\omega_0T)\Bigl(a-\frac{Q^2}{\ell_0^2}\Bigr)\Bigr],\qquad \ddot Y=\omega_0^2Y,\qquad \ddot Z=\omega_0^2Z.$ Thus $\mathcal P$ is invariant. With $Q=\ell_0q$, $s=\omega_0T$, one has $\ddot Q=\ell_0\omega_0^2q''$, so the restricted axial equation becomes $q''=-q+\beta_\delta(s)(q^2-a)$, exactly the dimensionless supplier equation. The axis restriction of the state scaling is $\iota_\delta(q,p):=(\ell_0q,0,0,\ell_0\omega_0p,0,0)$; it conjugates $G_\delta$ to the restriction of the full physical stroboscopic map to $\mathcal P$ in position-velocity coordinates. The full map also factors as this axial map times the two transverse linear period maps of [L4]. [given, L4, algebra]

1.2 For $a\ge100$, let $\delta_0$ be the threshold of [L1]. For $0<\delta<\delta_0$, that supplier gives $h_\delta$ and $\Lambda_\delta$ with the shift conjugacy, chaos list, two hyperbolic fixed points, and transverse homoclinic curves for every nonconstant code that is constant with the same sign on both tails. [given, L1]

2.1 Open diffeomorphism branch: [L5] supplies a dimensionless axial diffeomorphism domain containing $S$ whose image also contains $S$. The product with the transverse linear period maps, followed by the invertible physical phase scaling, gives open sets $\mathcal U_\delta,\mathcal V_\delta$ in the full phase chart containing the physical copy of $S\times\mathbb R^4$, with $\Psi_\delta|_{\mathcal U_\delta}:\mathcal U_\delta\to\mathcal V_\delta$ a $C^\infty$ diffeomorphism. Since every coded state lies in that copy of $S\times\mathbb R^4$, the branch neighborhoods contain $\Lambda_\delta^{\mathrm{phys}}$. [step 1.1, L5, algebra]

2.2 Define $H_\delta:=\iota_\delta\circ h_\delta$ and $\Lambda_\delta^{\mathrm{phys}}:=H_\delta(X_\pm)$. By step 1.1, $\Psi_\delta\circ H_\delta=H_\delta\circ S_\pm.$ The map $\iota_\delta$ is a linear embedding and $h_\delta$ is a homeomorphism onto the compact set $\Lambda_\delta$; hence $H_\delta$ is a homeomorphism onto the compact subset $\Lambda_\delta^{\mathrm{phys}}\subset\mathcal P$, which is invariant under the full map. [step 1.1, step 1.2, L1, algebra]

2.3 Full hyperbolicity: at a coded fixed point, the derivative of $\Psi_\delta$ splits into the axial derivative and the four-dimensional transverse block $L_P\oplus L_P$. By [L1] the axial fixed point has no multiplier of modulus $1$, and by [L4] the transverse multipliers are $e^P,e^{-P}$, also off the unit circle. Hence each full fixed point is hyperbolic. [step 1.1, step 1.2, L1, L4, algebra]

3.1 Clause (ii): continuity, mixing and density of periodic points transfer by conjugacy. Sensitivity transfers with a positive constant because $H_\delta$ and its inverse on the compact image are uniformly continuous; this is [L3]. The Euclidean metric inherited from the full phase chart restricts on $\mathcal P$ to the Euclidean metric of the axis phase plane. Thus all four clauses hold on $\Lambda_\delta^{\mathrm{phys}}$. [step 2.2, L1, L3]

3.2 Full transversality: let $s$ be a nonconstant code with $s_n=u$ for $|n|\ge N$, and write $p_*:=H_\delta(\bar u)$ and $z_*:=H_\delta(s)$. By [L1], the axial stable and unstable sets of $p_*$ contain $C^1$ curves $\gamma_s,\gamma_u$ through $z_*$ with linearly independent tangent vectors. Let $E_s,E_u\subset\mathbb R^4$ be the transverse stable and unstable eigenspaces from [L4]. Choose sufficiently small open parameter intervals $J_s,J_u$ about $0$ for those curves and open balls $B_s\subset E_s$, $B_u\subset E_u$ about $0$. In the product splitting $\mathbb R^6=\mathcal P\oplus\mathbb R^4$, set $\Gamma_s:=\{(\gamma_s(t),\xi):t\in J_s,\xi\in B_s\}$ and $\Gamma_u:=\{(\gamma_u(t),\eta):t\in J_u,\eta\in B_u\}$. Each product map is injective, has rank-$3$ differential and a continuous inverse on its image: its planar curve has a nonzero tangent and is a graph over one coordinate, while its transverse parameter is the identity on a two-dimensional ball. Thus the images are the embeddings specified in clause (iii). The root and half-tail constructions keep every axial iterate of the stable piece in $S$ in forward time, and every axial iterate of the unstable piece in $S$ in backward time; the transverse coordinates are unrestricted in the product domains $\mathcal U_\delta,\mathcal V_\delta$. Therefore the first piece lies in $W^s(p_*)$ because its axial curve converges to $p_*$ and $L_P^n\xi\to0$, and the second lies in $W^u(p_*)$ because its axial curve converges under backward iterates and $L_P^{-n}\eta\to0$. Their tangent spaces sum to $\mathbb R^6$: the two axial tangent lines span $\mathcal P$, and $E_s\oplus E_u=\mathbb R^4$. Thus $z_*$ is transverse in the full phase space as defined in clause (iii). Distinct codes give distinct points because $H_\delta$ is injective. [step 2.2, L1, L4, L5, algebra]

3.3 Coded bounds at the stroboscopic times: [L2] gives $|q|,|p|\le R=\sqrt a+3$ for every code; under $H_\delta$, $Q=\ell_0q$, $\Pi=m\ell_0\omega_0p$, and the transverse coordinates vanish. Therefore $|Q|\le R\ell_0$ and $|\Pi|\le m\ell_0\omega_0R$; if $a=100$, then $R=13$. [step 2.2, L2, algebra]

4.1 Complete coded trajectories: for a fixed code $s$, the states $H_\delta(S_\pm^ks)$ belong to $\Lambda_\delta^{\mathrm{phys}}$ for every $k\in\mathbb Z$, and the conjugacy gives a one-period orbit segment from each such state to the next. Translate that segment by $kT_p$; the force and restriction domain are $T_p$-periodic, so each translated segment solves the same equation. Adjacent endpoints agree, and uniqueness glues the segments into one motion on all of $\mathbb R$. Its stroboscopic states obey the bounds of step 3.3. [step 2.2, step 3.3, given, algebra] ∎

## Remarks

- **Why this is a chaos proof and not a picture.** The conjugacy to the shift, the mixing, the density of periodic points, the sensitivity and the axial homoclinic curves come from the supplier theorem's explicit constructions (a contraction on a complete sequence space, invariant cones with expansion, and weighted graph-transform curves), not from a plotted tangle. The full result then uses the explicit invariant-axis embedding and the product of the two transverse hyperbolic modes. See [[def-cm16-chaos-list-for-model-maps]] clause (d).

- **Choice assumptions.** The countable and dependent choice assumptions are inherited from the supplier's compactness and homeomorphism clauses and are declared in the Statement; no other choice is used, since all constructions are explicit.

- **Units.** $[F]=\mu\ell\tau^{-2}=$ N, $[\Pi]=\mu\ell\tau^{-1}$, $[\ell_0]=[R\ell_0]=\ell$ and $[m\ell_0\omega_0R]=\mu\ell\tau^{-1}$ ([[def-cm01-units]]); the pulse duration is $\delta/\omega_0$ and the forcing period $T_p=P/\omega_0$, both times.

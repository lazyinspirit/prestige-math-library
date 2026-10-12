---
id: thm-cm-liouville-arnold-action-angle-repaired
kind: theorem
title: "Action-angle coordinates on a saturated proper submersion neighbourhood of a compact connected regular fibre, with the two-form primitive supplied locally"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-phase-domain-and-standard-symplectic-two-form, lem-cm-closed-two-form-radial-primitive, def-countable-choice, def-completely-integrable-hamiltonian-system, def-first-integral-and-poisson-commuting-functions, def-symplectic-form-and-symplectic-manifold, def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds, def-hamiltonian-vector-field-and-hamiltonian-function, thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions, prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action, lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice, thm-compact-connected-regular-fibres-are-tori, cor-every-smooth-vector-field-on-a-compact-manifold-is-complete, thm-cartans-magic-formula, thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow, cor-local-normal-form-for-submersions, thm-smooth-inverse-function-theorem-on-manifolds, thm-euclidean-inverse-function-theorem, thm-poincare-lemma-for-star-shaped-domains, def-star-shaped-open-subset-of-rn, def-action-and-angle-coordinates, def-local-and-global-flow, def-smooth-differential-k-form, def-c-r-and-smooth-maps-between-smooth-manifolds, def-metric-topology, cor-bolzano-weierstrass-in-rn, thm-fundamental-theorem-on-flows]
dependency_roles:
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  lem-cm-closed-two-form-radial-primitive: mathematical-premise
  def-countable-choice: mathematical-premise
  def-completely-integrable-hamiltonian-system: mathematical-premise
  def-first-integral-and-poisson-commuting-functions: mathematical-premise
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
  def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds: mathematical-premise
  def-hamiltonian-vector-field-and-hamiltonian-function: mathematical-premise
  thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions: mathematical-premise
  prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action: mathematical-premise
  lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice: mathematical-premise
  thm-compact-connected-regular-fibres-are-tori: mathematical-premise
  cor-every-smooth-vector-field-on-a-compact-manifold-is-complete: mathematical-premise
  thm-cartans-magic-formula: mathematical-premise
  thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow: mathematical-premise
  cor-local-normal-form-for-submersions: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-poincare-lemma-for-star-shaped-domains: mathematical-premise
  def-star-shaped-open-subset-of-rn: mathematical-premise
  def-action-and-angle-coordinates: mathematical-premise
  def-local-and-global-flow: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-metric-topology: mathematical-premise
  cor-bolzano-weierstrass-in-rn: mathematical-premise
  thm-fundamental-theorem-on-flows: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Ana Cannas da Silva, Lectures on Symplectic Geometry, revised January 2006, Lecture 18, Definition 18.10, Lemma 18.11 and Theorem 18.12 (Arnold-Liouville), pp. 110-111"
      url: "https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf"
    - title: "Eckhard Meinrenken, Symplectic Geometry, Chapter 6, sections 6.1-6.3, Theorem 6.21 (action-angle coordinates), pp. 66-75"
      url: "https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.5 'Action-Angle Variables' (integrable systems and the construction of action-angle variables), printed pages 105-112"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$, the Axiom of Countable Choice ([[def-countable-choice]]). Let $(M,\omega)$
be a symplectic manifold of dimension $2n$, let $F=(F_1,\dots,F_n)$ be a completely integrable
system on $M$ ([[def-completely-integrable-hamiltonian-system]]) and let $N=F^{-1}(b_0)$ be a
nonempty compact connected regular fibre. Assume that, after restricting to a saturated
neighbourhood $U$ of $N$ and a ball $B\subseteq\mathbb R^n$ of regular values with $F(U)=B$, the map
$\pi:=F|_U:U\to B$ is a proper submersion with connected fibres. Then there are an open neighbourhood $B_0\subseteq B$ of $b_0$, an open action-coordinate ball $A\subseteq\mathbb R^n$, and, on the shrunk saturated neighbourhood $U_0:=\pi^{-1}(B_0)$, action-angle coordinates
$(I,\theta):U_0\to A\times T^n$ in the sense of [[def-action-and-angle-coordinates]] (period-one
angles) with

$$\omega=\sum_{i=1}^n d\theta_i\wedge dI_i ,$$

and every $C^\infty$ function on $U_0$ that is constant on the fibres of $\pi$ (in particular each
$F_i|_{U_0}$) is a function of $I$ alone. The base neighbourhood $B_0$ is in the original integral-value coordinates, whereas $A=I(B_0)$ is in the action coordinates; they need not be the same set or both Euclidean balls.

## Facts & Assumptions

**Given:** The symplectic manifold $(M,\omega)$, the completely integrable system $F$, the compact connected regular fibre $N=F^{-1}(b_0)$, the saturated neighbourhood $U$ of $N$ over the ball $B$ with $\pi=F|_U$ a proper submersion with connected fibres, and $\mathrm{AC}_\omega$.

[F1] Complete integrability ([[def-completely-integrable-hamiltonian-system]], [[def-first-integral-and-poisson-commuting-functions]]): the $F_i$ are pairwise in involution, $\{F_i,F_j\}=0$, and $dF_1,\dots,dF_n$ are linearly independent on the regular locus; on the regular locus the fields $X_{F_i}$ are defined by $\iota_{X_{F_i}}\omega=dF_i$ ([[def-hamiltonian-vector-field-and-hamiltonian-function]], [[thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions]]).

[F2] Regular fibres ([[def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds]], regular-level structure): every regular common level is an $n$-dimensional Lagrangian embedded submanifold, hence equals its own symplectic orthogonal, and on $\pi^{-1}(b)$ the fields $X_{F_1},\dots,X_{F_n}$ are tangent, independent and span the tangent space at every point.

[F3] Commuting flows and completeness ([[prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action]], [[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]]): pairwise involution makes the local flows of the $X_{F_i}$ commute and combine into a local $\mathbb R^n$-action; on a compact invariant fibre each restricted field is complete, so the action is global there.

[F4] Torus structure ([[lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice]], [[thm-compact-connected-regular-fibres-are-tori]]): on a compact connected regular fibre the action is transitive, its stabilizer is a discrete full lattice $\Gamma$, and the fibre is diffeomorphic to $\mathbb R^n/\Gamma\cong T^n=\mathbb R^n/\mathbb Z^n$.

[F5] Cartan formula and flow differentiation on manifolds ([[thm-cartans-magic-formula]], [[thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow]], [[def-local-and-global-flow]]): for the flow $\Phi^t_Y$ of a vector field $Y$ and a closed form $\tau$, $\frac{d}{dt}(\Phi^t_Y)^*\tau=(\Phi^t_Y)^*\mathcal L_Y\tau=(\Phi^t_Y)^*d(\iota_Y\tau)$.

[F6] Submersions and inverse functions ([[cor-local-normal-form-for-submersions]], [[thm-smooth-inverse-function-theorem-on-manifolds]], [[thm-euclidean-inverse-function-theorem]]): a submersion is locally a projection, submersions admit local sections, and a smooth map with invertible differential is a local diffeomorphism.

[F7] Closed forms on balls ([[thm-poincare-lemma-for-star-shaped-domains]], [[def-star-shaped-open-subset-of-rn]], [[lem-cm-closed-two-form-radial-primitive]]): on a ball, every closed smooth one-form is exact, and every closed smooth two-form has a smooth primitive, namely the radial one of [[lem-cm-closed-two-form-radial-primitive]].

[F8] Nondegeneracy and the coordinate model ([[def-symplectic-form-and-symplectic-manifold]], [[def-cm-phase-domain-and-standard-symplectic-two-form]]): $\omega$ is closed and pointwise nondegenerate, and on a coordinate chart with coordinates $(\theta,I)$ the form $\sum_i d\theta_i\wedge dI_i$ is the standard two-form of [[def-cm-phase-domain-and-standard-symplectic-two-form]].

## Proof

**Proof technique:** direct; construct the vertical fields and the action map, generate the period lattice, use the one- and two-form Poincare lemmas on the base ball, make the section Lagrangian, and compare the two two-forms on a basis of vertical and horizontal vectors.

1.1 Vertical fields and the fibrewise action: for $\alpha\in\Omega^1(B)$ define the smooth field $X_\alpha$ on $U$ by $\iota_{X_\alpha}\omega=\pi^*\alpha$, which exists uniquely by [F8]; writing $\alpha=\sum_i\alpha_i\,dF_i$ with $C^\infty$ coefficients $\alpha_i$ (the $F_i$ are the coordinate functions of the ball $B$), the uniqueness in [F1] gives $X_\alpha=\sum_i\alpha_iX_{F_i}$; by [F2] the fields $X_{F_i}$ are tangent to every fibre, and for $m\in\pi^{-1}(b)$ the evaluation map $T_b^*B\to T_m\pi^{-1}(b)$, $\alpha_b\mapsto X_{\alpha_b}(m)$, is a linear isomorphism: it is injective because $\pi^*\alpha_b=0$ at $m$ forces $\alpha_b=0$ ($d\pi_m$ is surjective, $\pi$ being a submersion), and both spaces have dimension $n$. By [F3] the restricted fields are complete on every compact fibre, so their commuting flows combine into a global $\mathbb R^n$-action on each fibre, and by [F4] and [F2] each fibre $\pi^{-1}(b)$ is a single transitive orbit with stabilizer a full lattice. [F1, F2, F3, F4, F8, algebra]

2.1 The action map: shrink $B$ if necessary so that there is a smooth section $\sigma:B\to U$ through a point of $N$ ([F6]; a local section exists by the local projection form and can be restricted to a smaller ball). Define $a:T^*B\to U$, $a(\alpha_b):=\Phi^1_{\alpha_b}(\sigma(b))$, the time-one flow of the vertical field $X_{\alpha_b}$ starting at $\sigma(b)$; it is defined because the flow preserves the compact fibre $\pi^{-1}(b)$ (step 1.1) and the restricted field is complete there. In the base coordinates $F_i$, writing $\alpha_b=\sum_i c_i\,dF_i|_b$, this map is the composite $\Phi_{X_{F_n}}^{c_n}\circ\cdots\circ\Phi_{X_{F_1}}^{c_1}(\sigma(b))$. Each smooth field has a smooth flow on its open domain by [[thm-fundamental-theorem-on-flows]], and each indicated finite time is admissible by fibrewise completeness; thus near every $(b,c)$ the displayed composite is smooth, proving smoothness of $a$. Then $Da(\alpha_b)$ is invertible for every $\alpha_b$: the base component of $Da$ is the identity because $\pi\circ a=\pi$ pointwise, and the vertical component at $\alpha_b$ is the derivative in $s$ at $s=0$ of $\Phi^1_{\alpha_b+s\beta_b}(\sigma(b))$, which by commutativity of the flows equals $X_{\beta_b}(a(\alpha_b))$; the map $T_b^*B\to T_{a(\alpha_b)}\pi^{-1}(b)$, $\beta_b\mapsto X_{\beta_b}(a(\alpha_b))$, is the isomorphism of step 1.1, so the vertical component is an isomorphism and hence by [F6] $a$ is a local diffeomorphism. [F6, step 1.1, algebra]

3.1 The period structure: put $\Lambda:=a^{-1}(\sigma(B))$; near each of its points $\Lambda$ is an $n$-dimensional smooth submanifold of $T^*B$ because $a$ is a local diffeomorphism there and $\sigma(B)$ is a smooth submanifold ([F6]); moreover, since $\pi\circ a=\pi$, the projection $\pi|_\Lambda$ has invertible differential, so $\Lambda$ is locally the graph of a smooth section of $T^*B\to B$. The fibre $\Lambda_{b_0}$ is the stabilizer of the point $\sigma(b_0)$ of the $\mathbb R^n$-action of step 1.1, hence by [F4] a full lattice in the fibre $T^*_{b_0}B$; choose a $\mathbb Z$-basis $\lambda_1,\dots,\lambda_n$ of it, extend each to a smooth local sheet $\beta_i$ of $\Lambda$ near $b_0$, and shrink $B$ so that all $\beta_i:B\to T^*B$ are defined, are sections of $\Lambda$, and their values stay linearly independent. [F4, step 1.1, step 2.1, construct]

3.2 A Lagrangian section: the pullback $\tau:=\sigma^*\omega$ is a smooth closed two-form on $B$ (closed because $d\tau=\sigma^*d\omega=0$); shrink $B$ to a metric ball, which is star-shaped, and by [F7] applied to the two-form $\tau$ choose a smooth one-form $\alpha$ on this ball with $d\alpha=\tau$. Define the translated section $\sigma':=\Phi^1_{-\alpha}\circ\sigma$. Then by [F5], $(\Phi^1_{-\alpha})^*\omega=\omega+\pi^*d(-\alpha)=\omega-\pi^*d\alpha$, so $(\sigma')^*\omega=\sigma^*(\Phi^1_{-\alpha})^*\omega=\tau-d(\sigma^*\pi^*\alpha)=\tau-d\alpha=0$, where $\sigma^*\pi^*\alpha=\alpha$; hence $\sigma'$ is a Lagrangian section. In the cotangent-bundle trivialization define $T_{-\alpha}(\eta_b)=\eta_b-\alpha(b)$, a smooth diffeomorphism with inverse $T_{\alpha}$. By commutativity of the fibre action the map based on the new section is $a'(\eta_b):=\Phi^1_{\eta_b}(\sigma'(b))=a(\eta_b-\alpha(b))=a\circ T_{-\alpha}(\eta_b)$. Consequently $a'$ is smooth and is a local diffeomorphism everywhere, by step 2.1. The stabilizer of a transitive abelian fibre action is independent of the basepoint, so the period lattices computed using $\sigma$ and $\sigma'$ agree. [F5, F7, step 2.1, algebra]

4.1 Full local generation: after shrinking $B$, for every $b\in B$ the periods satisfy $\Lambda_b=\sum_i\mathbb Z\beta_i(b)$. If no such neighbourhood exists, Countable Choice selects $b_r\to b_0$ and a period outside the generated sublattice. Subtract an integer combination of the $\beta_i(b_r)$ so the remaining nonzero period is $\gamma_r=\sum_i c_{ri}\beta_i(b_r)$ with $c_{ri}\in[-1/2,1/2]$. Work in the fixed trivialization $T^*B=B\times(\mathbb R^n)^*$, and choose a closed base ball about $b_0$ contained in the domain of all smooth sheets. Eventually every $b_r$ lies in this ball. The vectors $(b_r,c_r)$ lie in one fixed bounded subset of $\mathbb R^{2n}$; by [[cor-bolzano-weierstrass-in-rn]] pass to a subsequence with $c_r\to c_0$. The map $(b,c)\mapsto\sum_i c_i\beta_i(b)$ is continuous on the compact base ball times $[-1/2,1/2]^n$, so $\gamma_r\to\gamma_0\in T^*_{b_0}B$ in this same trivialization. Continuity of $a$ and $a(\gamma_r)=\sigma(b_r)$ give $a(\gamma_0)=\sigma(b_0)$, hence $\gamma_0\in\Lambda_{b_0}$. Write $\gamma_0=\sum_i m_i\beta_i(b_0)$ with integers $m_i$, and put $\delta_r=\gamma_r-\sum_i m_i\beta_i(b_r)$. Then $\delta_r$ remains a nonzero period and tends to $0_{b_0}$, while $a(\delta_r)=\sigma(b_r)=a(0_{b_r})$. Both arguments eventually lie in one neighbourhood of $0_{b_0}$ on which $a$ is injective, by step 2.1, contradiction. [F4, step 2.1, step 3.1, algebra]

5.1 The sheets are closed: for each $i$, the time-one flow $\Phi^1_{\beta_i}$ of $X_{\beta_i}$ acts as the identity on every fibre, because $\beta_i(b)\in\Lambda_b$ is in the stabilizer of every point of the transitive abelian action on $\pi^{-1}(b)$ (step 4.1); hence $(\Phi^1_{\beta_i})^*\omega=\omega$; on the other hand, by [F5] and $\iota_{X_{\beta_i}}\omega=\pi^*\beta_i$, one has $\frac{d}{dt}(\Phi^t_{\beta_i})^*\omega=(\Phi^t_{\beta_i})^*d\pi^*\beta_i=\pi^*d\beta_i$, so $\omega=(\Phi^1_{\beta_i})^*\omega=\omega+\pi^*d\beta_i$ and $\pi^*d\beta_i=0$; since $\pi$ is a submersion, $\pi^*$ is injective on forms and $d\beta_i=0$. [F5, step 4.1, algebra]

6.1 Action coordinates: by [F7], applied on the ball $B$, each closed one-form $\beta_i$ has a smooth primitive $I_i$ with $dI_i=\beta_i$; since $\beta_1(b),\dots,\beta_n(b)$ are a basis of $T_b^*B$ for every $b\in B$ (step 3.1), the differential of $I=(I_1,\dots,I_n):B\to\mathbb R^n$ is invertible everywhere, so by [F6] $I$ is a local diffeomorphism; restrict first to one inverse-function neighbourhood of $b_0$, choose an open ball $A$ about $I(b_0)$ in its image, and set $B_0:=I^{-1}(A)$. Then $I:B_0\to A$ is a diffeomorphism. Restrict all subsequent constructions to $B_0$ and its saturated preimage $U_0$; the primitives have already been constructed on the original ball, so no star-shapedness of $B_0$ is required. [F6, F7, step 5.1]

7.1 Angle coordinates and the diffeomorphism: for $b\in B_0$ and $p\in\pi^{-1}(b)$ there is a unique $\theta(p)\in T^n=(\mathbb R/\mathbb Z)^n$ such that $p$ is obtained from $\sigma'(b)$ by the action of a vector $s\in\mathbb R^n$ with $\theta_j(p)\equiv s_j\pmod 1$ through the covector $\sum_j s_j\beta_j(b)$: existence is transitivity of the fibre action (step 1.1 and [F4]), and uniqueness modulo $\mathbb Z^n$ is exactly the stabilizer statement $\Lambda_b=\sum_i\mathbb Z\beta_i(b)$ of step 4.1 read in the coefficient basis $\beta_j(b)$. This defines a smooth map $(I,\theta):U_0\to A\times T^n$ which is bijective and, by the local diffeomorphism property of the shifted map $a'=a\circ T_{-\alpha}$ proved in step 3.2, composed with the smooth fibrewise basis map $(b,s)\mapsto\sum_j s_j\beta_j(b)$, a diffeomorphism onto $A\times T^n$; in particular $\partial_{\theta_j}$ corresponds to the generator $X_{dI_j}$ of the action. [F4, step 2.1, step 3.2, step 4.1, step 6.1, construct]

8.1 The symplectic form in action-angle coordinates: let $\omega'':=\sum_id\theta_i\wedge dI_i$ be evaluated in the coordinate chart $(I,\theta)$ of step 7.1, which is the standard two-form of [F8]. In the coordinate basis $(\partial_{I_1},\dots,\partial_{I_n},\partial_{\theta_1},\dots,\partial_{\theta_n})$ the two forms vanish on pairs of vertical vectors, because $\partial_{\theta_j}$ corresponds to $X_{dI_j}$ (step 7.1), the fields $X_{dI_1},\dots,X_{dI_n}$ span the tangent spaces of the Lagrangian fibres ([F2]), and the two-form $\omega''$ has the factor $dI_i$, which annihilates vertical vectors; they agree on vertical-horizontal pairs, because $\omega(X_{dI_j},\partial_{I_k})=\iota_{X_{dI_j}}\omega(\partial_{I_k})=\pi^*dI_j(\partial_{I_k})=\delta_{jk}$ while $\omega''(\partial_{\theta_j},\partial_{I_k})=dI_k(\partial_{I_j})=\delta_{jk}$; and they both vanish on horizontal pairs: $\omega''$ because $d\theta_m(\partial_{I_j})=0$, and $\omega$ because on the slice $\theta=0$, which is the Lagrangian section $\sigma'(B_0)$ of step 3.2, the horizontal vectors $\partial_{I_j}$ span the tangent space of $\sigma'$ where $(\sigma')^*\omega=0$, while for general $\theta$ the fibrewise translation by $\theta$ is a composition of flows of the fields $X_{dI_j}$ and each of those flows preserves $\omega$ by the computation of step 5.1 (with $d(dI_j)=0$) and maps the slice $\theta=0$ onto the slice $\theta=\text{const}$, hence carries horizontal vectors to horizontal vectors. Since these three families of pairs span all pairs of tangent vectors, $\omega=\omega''=\sum_id\theta_i\wedge dI_i$. [F2, F5, F8, step 3.2, step 5.1, step 7.1, algebra]

9.1 The functions $F_i$ and every smooth function on $U_0$ that is constant on the fibres of $\pi$ depend only on $I$: such a function equals $G\circ\pi$ for a smooth $G$ on $B_0$, and $\pi=I^{-1}\circ(I\circ\pi)$ with $I:B_0\to A$ the diffeomorphism of step 6.1, so it is a function of $I$; in particular $F_i$ is. Together with steps 7.1 and 8.1 this exhibits the action-angle coordinates asserted in the statement, and the proof is complete. [step 6.1, step 7.1, step 8.1] ∎

## Remarks

- This is the Liouville-Arnold conclusion with a complete local proof: the published [[thm-liouville-arnold-action-angle-theorem]] states the same result, but its step 5.2 invokes the one-form lemma [[thm-poincare-lemma-for-star-shaped-domains]] for the closed two-form $\sigma^*\omega$; step 3.2 above replaces that direct supplier use by the two-form primitive of [[lem-cm-closed-two-form-radial-primitive]]. The published item is neither consumed as a premise here nor edited by this page.
- The hypotheses are exactly those of the published theorem: complete integrability (involution and independence), a compact connected regular fibre, and a saturated neighbourhood on which the integral map is a proper submersion with connected fibres. Compactness, connectedness and properness are all used; so is $\mathrm{AC}_\omega$ in step 4.1 (the counterexample sequence of periods), while the choices of a section, a lattice basis and local primitives are finite or local.
- The angles are period-one: with $\theta^{\mathrm{rad}}_i=2\pi\theta_i$ and $I^{\mathrm{rad}}_i=I_i/(2\pi)$ one has $\omega=\sum_id\theta^{\mathrm{rad}}_i\wedge dI^{\mathrm{rad}}_i$, as recorded in [[cor-cm-action-angle-radian-scaling]].

---
id: thm-gr-dust-subsidiary-and-residual-vanishing
kind: theorem
title: "Subsidiary system of the dust reduction: Cartan identities, closed
  homogeneous residual system and vanishing of the residuals"
status: draft
origin: session
domain: mathematics
dependency_level: 21
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-dust-torsion-and-curvature-residuals
  - def-gr-dust-reduction-variables-and-gauge
  - def-gr-dust-electric-magnetic-weyl-variables-and-schouten
  - lem-gr-dust-reduced-evolution-equations
  - lem-gr-dust-weyl-reconstruction-from-electric-magnetic
  - lem-gr-dust-symmetric-hyperbolic-reduction
  - lem-gr-positive-definite-symmetric-matrix-bounds
  - thm-extreme-value-metric
  - def-gr-spacelike-hypersurfaces-and-cauchy-sets
  - def-gr-metric-selected-connection
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-gr-local-geodesics-and-exponential-map
  - thm-smooth-inverse-function-theorem-on-manifolds
  - thm-divergence-theorem-for-bounded-piecewise-c-one-domains
  - thm-gronwall-integral-inequality
  - def-ck-and-multi-index-notation-in-several-variables
  - def-countable-choice
  - def-dependent-choice
  - thm-gr-auxiliary-complete-riemannian-metric
  - lem-gr-basic-limit-curve
dependency_roles:
  def-gr-dust-torsion-and-curvature-residuals: mathematical-premise
  def-gr-dust-reduction-variables-and-gauge: mathematical-premise
  def-gr-dust-electric-magnetic-weyl-variables-and-schouten: mathematical-premise
  lem-gr-dust-reduced-evolution-equations: mathematical-premise
  lem-gr-dust-weyl-reconstruction-from-electric-magnetic: mathematical-premise
  lem-gr-dust-symmetric-hyperbolic-reduction: mathematical-premise
  lem-gr-positive-definite-symmetric-matrix-bounds: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  lem-gr-basic-limit-curve: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein
        Equations, Living Reviews in Relativity 3 (2000), article 1
        (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the
        hyperbolic reduction of the Einstein-Euler system, the positivity
        conditions on specific enthalpy and speed of sound (4.38), the frame
        variables and their reduced equations, and the pressure-free (dust)
        subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and
        (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein
        Equations, Living Reviews in Relativity 3 (2000), article 1
        (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the
        definition of a quasilinear symmetric hyperbolic system, the
        finite-dimensional mollifier approximation (3.1) solved by ODE theory,
        the energy and Moser product/composition estimates, the higher-order
        energy inequality, uniqueness, the Rellich/Ascoli compactness step and
        the passage to a classical solution, with Remarks 1-6 on smooth
        persistence, the continuation criterion, Cauchy stability and the
        non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) and Dependent Choice ([[def-dependent-choice]]), carrying the analytic uniqueness and causal-curve supplier hypotheses.

Let $(M,g,N)$ be the smooth time-oriented Lorentzian spacetime of [[def-gr-dust-reduction-variables-and-gauge]], with $\gamma=-g$, and let $\Omega\subseteq M$ be an open solution region. Let a smooth reduced dust solution on $\Omega$ have a nondegenerate tentative orthonormal frame for $\gamma$ of signature $(+---)$, a metric-compatible tentative connection, reconstructed algebraic Weyl tensor $C$, prescribed curvature $\overline R$, and dust Schouten tensor $S$ as in [[def-gr-dust-reduction-variables-and-gauge]] and [[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]]. Let $\Sigma\subseteq\Omega$ be a smooth spacelike embedded hypersurface for $g$, with future unit normal $\mathfrak n$. Interpret the metric domain relative to $\Omega$: $D_\Omega^+(\Sigma)$ consists of points in $\Omega$ such that every past-inextendible causal curve in $\Omega$ through the point meets $\Sigma$, and $D_\Omega^-(\Sigma)$ is defined with future-inextendible curves ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (d), with $\Omega$ as ambient region). Allow $r\geq0$, with a smooth unit timelike $U$ prescribed also where $r=0$. Assume the parallel-comoving gauge and precisely the reduced equations
$$e_0=U,\quad\Gamma_0{}^i{}_j=0,\quad T^i{}_{0a}=0,\quad\Delta^i{}_{j0a}=0,\quad P_{ab}=Q_{ab}=0,\quad q=U(r)+r\chi=0.$$
Here $a,b=1,2,3$, the first torsion index is the output index, and $P_{ab},Q_{ab}$ are the symmetric tracefree evolution projections of [[lem-gr-dust-reduced-evolution-equations]]. No spatial torsion or spatial curvature residual is assumed zero. Define $F_{jkl}=\nabla^i(C_{ijkl}-\gamma_{i[k}S_{l]j})$, $P_a=F_{0a0}$, and $Q_a=-\epsilon_a{}^{bc}F_{0bc}/2$. Then the spatial components of $(T,\Delta)$ and the vectors $(P,Q)$ satisfy the explicit closed linear homogeneous system constructed in the proof. Its principal part is transport along $U$ for $T,\Delta$ and the curl pair
$$e_0(P_a)+\tfrac12\epsilon_a{}^{bc}e_b(Q_c),\qquad e_0(Q_a)-\tfrac12\epsilon_a{}^{bc}e_b(P_c).$$
It is symmetric hyperbolic on every spacelike initial hypersurface, including one tilted relative to $U$. If all residuals vanish initially, they vanish on the metric domain of determination of that surface relative to $\Omega$, namely $D_\Omega^+(\Sigma)\cup D_\Omega^-(\Sigma)$ as in [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]], with causal curves taken inside the open solution region $\Omega$. Consequently the tentative connection is Levi--Civita, its actual curvature equals $\overline R$, and the resulting metric satisfies the full Einstein-dust equation. The conclusion uses neither division by $r$ nor hypersurface orthogonality of $U$.

## Facts & Assumptions

**Given:** Countable and Dependent Choice, the open solution region $\Omega$, the smooth reduced solution and smooth spacelike hypersurface $\Sigma\subseteq\Omega$, the metric-compatible tentative connection, actual Cartan torsion and curvature, algebraic Weyl reconstruction, and the reduced equations in the statement; for the propagation conclusion, all residuals vanish on $\Sigma$.

[F1] The curvature residual is defined using the actual frame bracket: $\Theta^i=d\theta^i+\omega^i{}_j\wedge\theta^j$, $\Omega^i{}_j=d\omega^i{}_j+\omega^i{}_k\wedge\omega^k{}_j$, and $\Delta=\Omega-\overline R^{\mathrm{form}}$, where $\overline R^{\mathrm{form}\,i}{}_j=\overline R^i{}_{jkl}\theta^k\wedge\theta^l/2$ ([[def-gr-dust-torsion-and-curvature-residuals]]).

[F2] The reconstruction gives all algebraic Weyl symmetries, $\overline R_{ijkl}=C_{ijkl}+\gamma_{i[k}S_{l]j}-\gamma_{j[k}S_{l]i}$, and the prescribed Einstein Ricci tensor. The cosmological contribution to $S$ is a constant multiple of $\gamma$ ([[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]], [[lem-gr-dust-weyl-reconstruction-from-electric-magnetic]]).

[F3] A continuous pointwise positive-definite symmetric matrix family has a uniform positive lower bound on a compact parameter set, and continuous matrix entries and their derivatives are bounded there ([[lem-gr-positive-definite-symmetric-matrix-bounds]], [[thm-extreme-value-metric]]). The divergence theorem applies to bounded piecewise $C^1$ coordinate cones, and Gronwall forces a continuous nonnegative cone energy with zero initial value to vanish ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], [[thm-gronwall-integral-inequality]]).

## Proof

**Proof technique:** direct.

1.1 The gauge gives $\nabla_UU=0$; therefore the full conservation vector $q_j:=\nabla^i(rU_iU_j)=qU_j+r(\nabla_UU)_j$ vanishes, including at $r=0$. Since $S=\kappa r(UU-\gamma/3)$ plus a parallel constant metric multiple, $\nabla^jS_{lj}=-\kappa\nabla_lr/3=\nabla_l\operatorname{tr}_\gamma S$. The Weyl cyclic and trace identities now decompose $F$, with the reduced evolution projections zero, into the linear map $A$ defined by $$A(P,Q)_{jkl}:=2U_jP_{[k}U_{l]}+h_{j[k}P_{l]}+Q_i(U_j\epsilon^i{}_{kl}-\epsilon^i{}_{j[k}U_{l]}),\qquad F=A(P,Q).$$ Indeed the unreduced decomposition has the additional terms $-2P_{j[k}U_{l]}-Q_{ji}\epsilon^i{}_{kl}-\kappa h_{j[k}q_{l]}/2-\kappa qh_{j[k}U_{l]}/3$; the symmetric tracefree parts are $P_{ab},Q_{ab}$, its traces are the conservation quantities, and the remaining antisymmetric parts are fixed by the cyclic identity. All these additional terms vanish by the reduced equations and gauge. Thus every Bianchi residual is represented by the two constraint vectors. [given, F2, algebra]

1.2 Cartan differentiation gives $D_\omega\Theta=\Omega\wedge\theta$ and $D_\omega\Omega=0$ by $d^2=0$. Algebraic cyclic symmetry gives $\overline R^{\mathrm{form}}\wedge\theta=0$, hence $D_\omega\Theta=\Delta\wedge\theta$. The reduced equations mean exactly $\iota_U\Theta=\iota_U\Delta=0$, while the gauge gives $\iota_U\omega=0$. Contracting yields the exact torsion transport equation $$\mathcal L_U\Theta^i=\Delta^i{}_0.$$ The right side has endomorphism input index $0$, not a time form index. Its principal derivative is $e_0(T^i{}_{ab})$; converting the Lie derivative to frame components adds only coefficient times $T$, since $[U,e_a]=-\Gamma_a{}^k{}_0e_k$. In particular $T^0{}_{ab}$ need not vanish. [given, F1, F2, algebra]

2.1 For a covariant tensor $B$ define the curvature action $$(K_{R,ab}B)_{i_1\cdots i_n}:=-\sum_{v=1}^nR^p{}_{i_vab}B_{i_1\cdots i_{v-1}p i_{v+1}\cdots i_n}.$$ The antisymmetrized second covariant derivative, which also differentiates its lower derivative slot, is $[\nabla_a,\nabla_b]B=K_{\Omega,ab}B-T^p{}_{ab}\nabla_pB$. Expanding the derivative-slot connection terms gives $[e_a,e_b]-(\Gamma_a{}^p{}_b-\Gamma_b{}^p{}_a)e_p=-T^p{}_{ab}e_p$, proving this identity. Antisymmetry of $C$ in its first pair gives $\nabla^j\nabla^iC_{ijkl}=[\nabla^j,\nabla^i]C_{ijkl}/2$. Move $\nabla^j$ past $\nabla_{[k}$ in the Schouten term and use step 1.1; the remaining scalar commutator is $\kappa\nabla_{[k}\nabla_{l]}r/3=-\kappa T^p{}_{kl}\nabla_pr/6$. Therefore $\nabla^jF_{jkl}=H_{kl}(T,\Delta)$, where the explicitly coefficient-linear map is $$H_{kl}:=\tfrac12\gamma^{ja}\gamma^{ib}(K_{\Delta,ab}C)_{ijkl}-\gamma^{ja}(K_{\Delta,a[k}S)_{l]j}-\tfrac12\gamma^{ja}\gamma^{ib}T^p{}_{ab}\nabla_pC_{ijkl}+\gamma^{ja}T^p{}_{a[k}\nabla_pS_{l]j}-\tfrac\kappa6T^p{}_{kl}\nabla_pr.$$ To see why no residual-free curvature term remains, substitute $\Omega=\overline R+\Delta$ into the commutators: pair interchange, trace-freeness and cyclic symmetry give $$\tfrac12\gamma^{ja}\gamma^{ib}(K_{\overline R,ab}C)_{ijkl}-\gamma^{ja}(K_{\overline R,a[k}S)_{l]j}=0.$$ Expansion of $K$ gives four Weyl-slot terms and two Schouten-slot terms. The contracted first-pair Weyl-slot terms are Ricci contractions; the last-pair terms cancel the $C S$ contributions from the Schouten commutator using pair interchange and the cyclic identity. The remaining $S S$ terms are antisymmetric parts of the symmetric tensor $S^2$ and metric multiples of $\operatorname{tr}S$, hence zero. Every displayed term in $H$ consequently contains an undifferentiated $T$ or $\Delta$. [step 1.1, F1, F2, algebra]

2.2 Put $\overline B^i{}_{mjkl}:=\sum_{\mathrm{cyc}(jkl)}\nabla_j\overline R^i{}_{mkl}$. The algebraic dual identity, using conservation from step 1.1, is $$\overline B^i{}_{mjkl}=\tfrac12\epsilon_{jkl}{}^pF_{prs}\epsilon_m{}^{irs}.$$ For completeness split $\overline R=C+E+G$, where $E$ is its tracefree-Schouten part and $G$ its scalar-curvature part. Left and right Hodge duals agree on $C,G$ and have opposite sign on $E$, as follows by inserting $\gamma_{i[k}S_{l]j}-\gamma_{j[k}S_{l]i}$ and contracting the two volume tensors. Apply these identities to $\nabla\overline R$ and contract the derivative with the right dual. The Weyl and Schouten derivative terms give $F$; the remaining trace terms are $\nabla^jS_{lj}-\nabla_l\operatorname{tr}S=\kappa q_l=0$. This proves the displayed identity without assuming vanishing torsion. Exterior differentiation has the separate torsion correction $$(D_\omega\overline R^{\mathrm{form}})^i{}_m(e_j,e_k,e_l)=\overline B^i{}_{mjkl}+\sum_{\mathrm{cyc}(jkl)}T^n{}_{jk}\overline R^i{}_{mnl}.$$ Thus $D_\omega\Delta=-D_\omega\overline R^{\mathrm{form}}$, contracted with $U$, gives the exact curvature transport equation $$\mathcal L_U\Delta^i{}_m=-\iota_U(D_\omega\overline R^{\mathrm{form}})^i{}_m.$$ Its right side is explicitly specified by the preceding formulas and $F=A(P,Q)$, and is linear in $T,P,Q$. The principal derivative is $e_0(\Delta^i{}_{mab})$; all frame conversion terms are algebraic in $\Delta$. [step 1.1, step 1.2, F1, F2, algebra]

3.1 Define the following linear lower-order maps of $v=(P,Q)$ by exact subtraction: $$L(v)_a:=\nabla^jA(v)_{ja0}-e_0(P_a)-\tfrac12\epsilon_a{}^{bc}e_b(Q_c),$$ $$M(v)_a:=-\tfrac12\epsilon_a{}^{bc}\nabla^jA(v)_{jbc}-e_0(Q_a)+\tfrac12\epsilon_a{}^{bc}e_b(P_c).$$ Inserting $A$ shows that all derivatives of $P,Q$ cancel in these definitions; $L,M$ depend only linearly on $v$, with coefficients from $\Gamma$. Indeed its rest-frame families are $A_{0a0}=P_a$, $A_{0ab}=Q_i\epsilon^i{}_{ab}$, $A_{ba0}=-Q_i\epsilon^i{}_{ba}/2$, and $A_{bac}=h_{b[a}P_{c]}$. Contracting step 2.1 now gives the exact curl equations $$e_0(P_a)+\tfrac12\epsilon_a{}^{bc}e_b(Q_c)=H_{a0}-L(v)_a,$$ $$e_0(Q_a)-\tfrac12\epsilon_a{}^{bc}e_b(P_c)=-\tfrac12\epsilon_a{}^{bc}H_{bc}-M(v)_a.$$ Together with steps 1.2--2.2 these constitute a closed linear homogeneous system in spatial $T$, spatial $\Delta$, $P,Q$. Its coefficient functions are smooth functions of the fixed reduced solution and its first derivatives; no derivative of a residual occurs on a right side. [step 2.1, step 1.2, step 2.2, algebra]

4.1 (Local cone energy.) Let $Z$ collect the independent spatial components of $(T,\Delta,P,Q)$ in the homogeneous residual system of step 3.1. Fix a point $p$ on a spacelike slice where $Z$ vanishes on an open disk in that slice. Parametrize that slice locally by $i(x)$ and define $\Phi(t,x)=\exp_{i(x)}(t\mathfrak n_{i(x)})$. The derivative of $\Phi$ at $(0,x(p))$ maps the time direction to the unit normal and the spatial directions to $T_p\Sigma$, hence is invertible. The inverse function theorem gives a chart after shrinking. Its $t$-curves are unit timelike geodesics, and the coordinate fields commute. Metric compatibility and torsion-freeness of the independently defined Levi--Civita connection of $g$, rather than of the tentative reduction connection, therefore give $\partial_tg(\partial_t,\partial_i)=g(\partial_t,\nabla_{\partial_i}\partial_t)=\frac12\partial_i g(\partial_t,\partial_t)=0$; the cross terms vanish initially, so $g=-dt^2+\sigma_{ij}dx^idx^j$ with $\sigma$ positive definite. ([[thm-gr-local-geodesics-and-exponential-map]], [[thm-smooth-inverse-function-theorem-on-manifolds]], [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]). [given, step 3.1, algebra, step 1.2]
In this chart the residual equations from steps 1.2--3.1 are a linear homogeneous first-order system $A^0\partial_tZ+A^i\partial_iZ+CZ=0$ with smooth coefficients. In the frame co-basis, for any covector $\zeta$ write $z=\zeta(U)$ and $w_a=\zeta(e_a)$. Its principal symbol on the transport variables is $zI$, and on $(P,Q)$ it is
$$
zI+\tfrac12\begin{pmatrix}0&X(w)\\-X(w)&0\end{pmatrix},\qquad X(w)_{ac}=\epsilon_{abc}w^b.
$$
The matrix $X(w)$ is skew-adjoint, so the displayed block and the full symbol are symmetric in the stated positive fibre product. This covector formula is tensorial in the principal part: evaluating it at $dt$ and each $dx^i$ gives the coordinate matrices $A^0,A^i$, so all those matrices are symmetric even though the Gaussian time vector need not equal the comoving vector $U$. The $(P,Q)$ block is bounded below by $z-|w|/2$ because $\|w\times\cdot\|\le|w|$, while each transport block is $z$. Since $dt$ is future timelike in the Gaussian chart, $z=dt(U)>|w|$; thus $A^0$ is positive definite. On a compact coordinate cylinder choose $a>0$ and $b<\infty$ with $A^0\ge aI$, $\|A^i\|\le b$, and bound the coefficient derivatives and $C$. Choose $\lambda>\sqrt3 b/a$, giving $\lambda A^0+\nu_iA^i\ge0$ for every unit spatial conormal $\nu$. Shrink $\tau>0$ so the cone based on a disk within the zero slice, with radius $\lambda\tau$, lies in the cylinder. Put $j^0=Z^{\mathsf T}A^0Z$, $j^i=Z^{\mathsf T}A^iZ$. Direct differentiation gives $\partial_tj^0+\partial_i j^i=Z^{\mathsf T}(\partial_tA^0+\partial_iA^i-C-C^{\mathsf T})Z\le C_0j^0$. On the shrinking balls $B_s=\{x:|x-x(p)|\le\lambda(\tau-s)\}$, the lateral flux is proportional to $Z^{\mathsf T}(\lambda A^0+\nu_iA^i)Z\ge0$. The divergence theorem [F3] yields $E(s):=\int_{B_s}j^0dx\le E(0)+C_0\int_0^sE(r)dr$. The base data give $E(0)=0$, so Gronwall [F3] and positivity of $A^0$ give $Z=0$ on the forward cone. Applying the same argument after reversing time gives zero on the backward cone. Their union contains an open double-cone neighborhood of $p$. [step 3.1, F3, given, algebra]

5.1 (Metric-timelike short cones for the whole residual system.) The principal symbol of the full system established in step 3.1 is the direct sum of $zI$ on every torsion and curvature transport component and $zI+J(w)/2$ on $(P,Q)$, with $\|J(w)\|\le|w|$. All couplings between these blocks are zeroth order. Thus the symbol is nonnegative for every future-positive metric-causal conormal, since $z\ge|w|$, and its only propagation speeds in the comoving rest frame have magnitude at most $1/2$. This is the full residual system, not the reduced electric/magnetic evolution block. At any point choose local coordinates whose coordinate frame there is $(U,e_1,e_2,e_3)$. Put $\lambda=3/4$. At that point $\lambda A^0+\nu_iA^i$ is positive definite for every $|\nu|=1$, with lower bound at least $1/4$, and each vector $\partial_t+v^i\partial_i$ with $|v|\le\lambda$ is future metric-timelike. Compactness of the unit sphere and continuity preserve both strict inequalities on a smaller relatively compact chart. The energy-current calculation of step 4.1 therefore applies on every sufficiently small straight truncated cone of speed $\lambda$ in this chart. Its lateral flux is nonnegative, and each straight segment from its base to its vertex is metric-timelike. [step 3.1, step 4.1, F3, algebra]

6.1 (A support predecessor on each close past slice.) Let $S$ be the closure in $\Omega$ of the set where the full residual vector is nonzero; this zero/nonzero condition is independent of the chosen frame components. Step 4.1 gives a zero neighborhood of each point of $\Sigma$, hence $S\cap\Sigma=\varnothing$. If $p\in S$, choose a chart of step 5.1 centered at $p$. For every sufficiently small $d>0$, the past base disk $t=t(p)-d$, $|x-x(p)|\le\lambda d$ meets $S$. Otherwise its compactness and closedness of $S$ give a slightly enlarged zero disk still inside the chart. The cone-energy argument based on that enlarged disk gives a zero neighborhood of the vertex $p$, contradicting $p\in S$. Thus there is a predecessor $p_-$ in that disk and in $S$, joined to $p$ by the straight future timelike coordinate segment. On a smaller chart the allowed $d$ and upper/lower comparisons between that segment's auxiliary Riemannian length and $d$ can be chosen uniformly for vertices in a compact subchart. [step 4.1, step 5.1, F3, algebra]

7.1 (A past-inextendible causal curve in the closed support.) Apply [[thm-gr-auxiliary-complete-riemannian-metric]] to the open spacetime $\Omega$ and fix its complete proper auxiliary metric $h'$ on the component of $p$. For each integer $k\ge1$ construct a backward polygonal timelike curve from $p$ with vertices in $S$ and every segment of $h'$-length at most $1/k$, using step 6.1 and Dependent Choice. Here is the non-arrest argument. In each closed $h'$-ball of integer radius about $p$, the intersection with $S$ is compact. Cover it by finitely many compact subcharts of step 6.1; on these, choose positive step durations small enough to have segment length at most $1/k$, and take the minimum of their positive lower length bounds. Until the accumulated length reaches that integer radius, the current vertices remain in that compact ball, and every step can therefore have length at least this minimum. Finitely many steps reach the next integer length level; then use the finite cover of the next ball. The resulting curve has infinite past $h'$-length and can be parametrized on $(-\infty,0]$ by that length, with endpoint $p$. Every point of the polygonal curve is within $1/k$ of $S$ because its segment endpoint belongs to $S$. The time-reversed half-line statement of [[lem-gr-basic-limit-curve]] applies: a subsequence converges uniformly on compact parameter intervals to a past-inextendible metric-causal curve in $\Omega$ through $p$. Closedness of $S$ and the distance bound put its entire image in $S$. The same construction reversed in time gives a future-inextendible causal support curve when needed. This uses the already assumed Countable and Dependent Choice; it assumes neither strong causality of $\Omega$ nor compactness of the complete support. [step 6.1, given, construct]

8.1 (Propagation on the relative metric domain.) If a point $q\in D_\Omega^+(\Sigma)$ had a nonzero residual, then $q\in S$, and step 7.1 would give a past-inextendible causal curve in $\Omega$ through $q$ whose image stays in $S$ and so misses $\Sigma$. This contradicts the definition of $D_\Omega^+(\Sigma)$. The time-reversed argument applies on $D_\Omega^-(\Sigma)$. Thus all residuals vanish on their union. Vanishing torsion identifies the metric-compatible tentative connection with Levi--Civita, and vanishing $\Delta$ identifies actual and prescribed curvature; the prescribed Ricci tensor is the Einstein-dust Ricci. Step 1.1 gives $F=0$, and the full Einstein-dust equation follows. No division by $r$ is used.   [step 7.1, given, F2, algebra] ∎


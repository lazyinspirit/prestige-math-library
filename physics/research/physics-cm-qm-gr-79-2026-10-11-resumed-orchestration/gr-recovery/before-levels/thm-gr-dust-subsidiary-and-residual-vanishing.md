---
id: thm-gr-dust-subsidiary-and-residual-vanishing
kind: theorem
title: "Subsidiary system of the dust reduction: Cartan identities, closed homogeneous residual system and vanishing of the residuals"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-dust-torsion-and-curvature-residuals, def-gr-dust-reduction-variables-and-gauge, def-gr-dust-electric-magnetic-weyl-variables-and-schouten, lem-gr-dust-reduced-evolution-equations, lem-gr-dust-weyl-reconstruction-from-electric-magnetic, thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability, lem-gr-dust-symmetric-hyperbolic-reduction, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice, def-dependent-choice]
dependency_roles:
  def-gr-dust-torsion-and-curvature-residuals: mathematical-premise
  def-gr-dust-reduction-variables-and-gauge: mathematical-premise
  def-gr-dust-electric-magnetic-weyl-variables-and-schouten: mathematical-premise
  lem-gr-dust-reduced-evolution-equations: mathematical-premise
  lem-gr-dust-weyl-reconstruction-from-electric-magnetic: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  lem-gr-dust-symmetric-hyperbolic-reduction: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) and Dependent Choice ([[def-dependent-choice]]), carrying the analytic uniqueness and causal-curve supplier hypotheses.

Let a smooth reduced dust solution have a nondegenerate tentative orthonormal frame for $\gamma$ of signature $(+---)$, a metric-compatible tentative connection, reconstructed algebraic Weyl tensor $C$, prescribed curvature $\overline R$, and dust Schouten tensor $S$ as in [[def-gr-dust-reduction-variables-and-gauge]] and [[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]]. Allow $r\geq0$, with a smooth unit timelike $U$ prescribed also where $r=0$. Assume the parallel-comoving gauge and precisely the reduced equations
$$e_0=U,\quad\Gamma_0{}^i{}_j=0,\quad T^i{}_{0a}=0,\quad\Delta^i{}_{j0a}=0,\quad P_{ab}=Q_{ab}=0,\quad q=U(r)+r\chi=0.$$
Here $a,b=1,2,3$, the first torsion index is the output index, and $P_{ab},Q_{ab}$ are the symmetric tracefree evolution projections of [[lem-gr-dust-reduced-evolution-equations]]. No spatial torsion or spatial curvature residual is assumed zero. Define $F_{jkl}=\nabla^i(C_{ijkl}-\gamma_{i[k}S_{l]j})$, $P_a=F_{0a0}$, and $Q_a=-\epsilon_a{}^{bc}F_{0bc}/2$. Then the spatial components of $(T,\Delta)$ and the vectors $(P,Q)$ satisfy the explicit closed linear homogeneous system constructed in the proof. Its principal part is transport along $U$ for $T,\Delta$ and the curl pair
$$e_0(P_a)+\tfrac12\epsilon_a{}^{bc}e_b(Q_c),\qquad e_0(Q_a)-\tfrac12\epsilon_a{}^{bc}e_b(P_c).$$
It is symmetric hyperbolic on every spacelike initial hypersurface, including one tilted relative to $U$. If all residuals vanish initially, they vanish on its metric domain of determination. Consequently the tentative connection is Levi--Civita, its actual curvature equals $\overline R$, and the resulting metric satisfies the full Einstein-dust equation. The conclusion uses neither division by $r$ nor hypersurface orthogonality of $U$.

## Facts & Assumptions

**Given:** Countable and Dependent Choice and the smooth reduced solution, metric-compatible tentative connection, actual Cartan torsion and curvature, algebraic Weyl reconstruction, and the reduced equations in the statement.

[F1] The curvature residual is defined using the actual frame bracket: $\Theta^i=d\theta^i+\omega^i{}_j\wedge\theta^j$, $\Omega^i{}_j=d\omega^i{}_j+\omega^i{}_k\wedge\omega^k{}_j$, and $\Delta=\Omega-\overline R^{\mathrm{form}}$, where $\overline R^{\mathrm{form}\,i}{}_j=\overline R^i{}_{jkl}\theta^k\wedge\theta^l/2$ ([[def-gr-dust-torsion-and-curvature-residuals]]).

[F2] The reconstruction gives all algebraic Weyl symmetries, $\overline R_{ijkl}=C_{ijkl}+\gamma_{i[k}S_{l]j}-\gamma_{j[k}S_{l]i}$, and the prescribed Einstein Ricci tensor. The cosmological contribution to $S$ is a constant multiple of $\gamma$ ([[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]], [[lem-gr-dust-weyl-reconstruction-from-electric-magnetic]]).

[F3] A linear symmetric hyperbolic system with smooth coefficients has a unique zero solution from zero data in its domain of determination ([[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]]).

## Proof

**Proof technique:** direct.

1.1 The gauge gives $\nabla_UU=0$; therefore the full conservation vector $q_j:=\nabla^i(rU_iU_j)=qU_j+r(\nabla_UU)_j$ vanishes, including at $r=0$. Since $S=\kappa r(UU-\gamma/3)$ plus a parallel constant metric multiple, $\nabla^jS_{lj}=-\kappa\nabla_lr/3=\nabla_l\operatorname{tr}_\gamma S$. The Weyl cyclic and trace identities now decompose $F$, with the reduced evolution projections zero, into the linear map $A$ defined by $$A(P,Q)_{jkl}:=2U_jP_{[k}U_{l]}+h_{j[k}P_{l]}+Q_i(U_j\epsilon^i{}_{kl}-\epsilon^i{}_{j[k}U_{l]}),\qquad F=A(P,Q).$$ Indeed the unreduced decomposition has the additional terms $-2P_{j[k}U_{l]}-Q_{ji}\epsilon^i{}_{kl}-\kappa h_{j[k}q_{l]}/2-\kappa qh_{j[k}U_{l]}/3$; the symmetric tracefree parts are $P_{ab},Q_{ab}$, its traces are the conservation quantities, and the remaining antisymmetric parts are fixed by the cyclic identity. All these additional terms vanish by the reduced equations and gauge. Thus every Bianchi residual is represented by the two constraint vectors. [given, F2, algebra]

1.2 Cartan differentiation gives $D_\omega\Theta=\Omega\wedge\theta$ and $D_\omega\Omega=0$ by $d^2=0$. Algebraic cyclic symmetry gives $\overline R^{\mathrm{form}}\wedge\theta=0$, hence $D_\omega\Theta=\Delta\wedge\theta$. The reduced equations mean exactly $\iota_U\Theta=\iota_U\Delta=0$, while the gauge gives $\iota_U\omega=0$. Contracting yields the exact torsion transport equation $$\mathcal L_U\Theta^i=\Delta^i{}_0.$$ The right side has endomorphism input index $0$, not a time form index. Its principal derivative is $e_0(T^i{}_{ab})$; converting the Lie derivative to frame components adds only coefficient times $T$, since $[U,e_a]=-\Gamma_a{}^k{}_0e_k$. In particular $T^0{}_{ab}$ need not vanish. [given, F1, F2, algebra]

2.1 For a covariant tensor $B$ define the curvature action $$(K_{R,ab}B)_{i_1\cdots i_n}:=-\sum_{v=1}^nR^p{}_{i_vab}B_{i_1\cdots i_{v-1}p i_{v+1}\cdots i_n}.$$ The antisymmetrized second covariant derivative, which also differentiates its lower derivative slot, is $[\nabla_a,\nabla_b]B=K_{\Omega,ab}B-T^p{}_{ab}\nabla_pB$. Expanding the derivative-slot connection terms gives $[e_a,e_b]-(\Gamma_a{}^p{}_b-\Gamma_b{}^p{}_a)e_p=-T^p{}_{ab}e_p$, proving this identity. Antisymmetry of $C$ in its first pair gives $\nabla^j\nabla^iC_{ijkl}=[\nabla^j,\nabla^i]C_{ijkl}/2$. Move $\nabla^j$ past $\nabla_{[k}$ in the Schouten term and use step 1.1; the remaining scalar commutator is $\kappa\nabla_{[k}\nabla_{l]}r/3=-\kappa T^p{}_{kl}\nabla_pr/6$. Therefore $\nabla^jF_{jkl}=H_{kl}(T,\Delta)$, where the explicitly coefficient-linear map is $$H_{kl}:=\tfrac12\gamma^{ja}\gamma^{ib}(K_{\Delta,ab}C)_{ijkl}-\gamma^{ja}(K_{\Delta,a[k}S)_{l]j}-\tfrac12\gamma^{ja}\gamma^{ib}T^p{}_{ab}\nabla_pC_{ijkl}+\gamma^{ja}T^p{}_{a[k}\nabla_pS_{l]j}-\tfrac\kappa6T^p{}_{kl}\nabla_pr.$$ To see why no residual-free curvature term remains, substitute $\Omega=\overline R+\Delta$ into the commutators: pair interchange, trace-freeness and cyclic symmetry give $$\tfrac12\gamma^{ja}\gamma^{ib}(K_{\overline R,ab}C)_{ijkl}-\gamma^{ja}(K_{\overline R,a[k}S)_{l]j}=0.$$ Expansion of $K$ gives four Weyl-slot terms and two Schouten-slot terms. The contracted first-pair Weyl-slot terms are Ricci contractions; the last-pair terms cancel the $C S$ contributions from the Schouten commutator using pair interchange and the cyclic identity. The remaining $S S$ terms are antisymmetric parts of the symmetric tensor $S^2$ and metric multiples of $\operatorname{tr}S$, hence zero. Every displayed term in $H$ consequently contains an undifferentiated $T$ or $\Delta$. [step 1.1, F1, F2, algebra]

2.2 Put $\overline B^i{}_{mjkl}:=\sum_{\mathrm{cyc}(jkl)}\nabla_j\overline R^i{}_{mkl}$. The algebraic dual identity, using conservation from step 1.1, is $$\overline B^i{}_{mjkl}=\tfrac12\epsilon_{jkl}{}^pF_{prs}\epsilon_m{}^{irs}.$$ For completeness split $\overline R=C+E+G$, where $E$ is its tracefree-Schouten part and $G$ its scalar-curvature part. Left and right Hodge duals agree on $C,G$ and have opposite sign on $E$, as follows by inserting $\gamma_{i[k}S_{l]j}-\gamma_{j[k}S_{l]i}$ and contracting the two volume tensors. Apply these identities to $\nabla\overline R$ and contract the derivative with the right dual. The Weyl and Schouten derivative terms give $F$; the remaining trace terms are $\nabla^jS_{lj}-\nabla_l\operatorname{tr}S=\kappa q_l=0$. This proves the displayed identity without assuming vanishing torsion. Exterior differentiation has the separate torsion correction $$(D_\omega\overline R^{\mathrm{form}})^i{}_m(e_j,e_k,e_l)=\overline B^i{}_{mjkl}+\sum_{\mathrm{cyc}(jkl)}T^n{}_{jk}\overline R^i{}_{mnl}.$$ Thus $D_\omega\Delta=-D_\omega\overline R^{\mathrm{form}}$, contracted with $U$, gives the exact curvature transport equation $$\mathcal L_U\Delta^i{}_m=-\iota_U(D_\omega\overline R^{\mathrm{form}})^i{}_m.$$ Its right side is explicitly specified by the preceding formulas and $F=A(P,Q)$, and is linear in $T,P,Q$. The principal derivative is $e_0(\Delta^i{}_{mab})$; all frame conversion terms are algebraic in $\Delta$. [step 1.1, step 1.2, F1, F2, algebra]

3.1 Define the following linear lower-order maps of $v=(P,Q)$ by exact subtraction: $$L(v)_a:=\nabla^jA(v)_{ja0}-e_0(P_a)-\tfrac12\epsilon_a{}^{bc}e_b(Q_c),$$ $$M(v)_a:=-\tfrac12\epsilon_a{}^{bc}\nabla^jA(v)_{jbc}-e_0(Q_a)+\tfrac12\epsilon_a{}^{bc}e_b(P_c).$$ Inserting $A$ shows that all derivatives of $P,Q$ cancel in these definitions; $L,M$ depend only linearly on $v$, with coefficients from $\Gamma$. Indeed its rest-frame families are $A_{0a0}=P_a$, $A_{0ab}=Q_i\epsilon^i{}_{ab}$, $A_{ba0}=-Q_i\epsilon^i{}_{ba}/2$, and $A_{bac}=h_{b[a}P_{c]}$. Contracting step 2.1 now gives the exact curl equations $$e_0(P_a)+\tfrac12\epsilon_a{}^{bc}e_b(Q_c)=H_{a0}-L(v)_a,$$ $$e_0(Q_a)-\tfrac12\epsilon_a{}^{bc}e_b(P_c)=-\tfrac12\epsilon_a{}^{bc}H_{bc}-M(v)_a.$$ Together with steps 1.2--2.2 these constitute a closed linear homogeneous system in spatial $T$, spatial $\Delta$, $P,Q$. Its coefficient functions are smooth functions of the fixed reduced solution and its first derivatives; no derivative of a residual occurs on a right side. [step 2.1, step 1.2, step 2.2, algebra]

4.1 With the positive Euclidean spatial product, the curl symbol $X(w)v=w\times v$ is skew-adjoint and has norm at most $|w|$. At a future-positive timelike conormal $\zeta$, put $z=\zeta(U)$ and $w_a=\zeta(e_a)$. The curl-pair symbol is the symmetric block $\left(\begin{smallmatrix}zI&X(w)/2\\-X(w)/2&zI\end{smallmatrix}\right)$, bounded below by $z-|w|/2$; the transport blocks are $zI$. Since a spacelike hypersurface has $z>|w|$, its full time matrix is positive even when tilted. The characteristic speeds relative to $U$ are at most $1/2$ and $0$. Energy uniqueness therefore gives zero residuals from zero initial data on the metric domain of determination. Vanishing torsion identifies the metric-compatible tentative connection with Levi--Civita; vanishing $\Delta$ identifies actual and prescribed curvature, whose Ricci is the Einstein-dust Ricci; step 1.1 gives $F=0$. This proves the full conclusion, with no division by $r$. [step 3.1, F2, F3, algebra] ∎

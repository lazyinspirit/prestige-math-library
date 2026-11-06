---
id: pthm-cmp-flat-t6-type-ii-supercharge-count
kind: physics-theorem
title: Type II supercharge count on periodic flat T6
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 13
domain: physics
library: physics
physical_scope: "Conditional two-derivative massless-supergravity result on four-dimensional Minkowski space times a rectangular flat T6 with periodic internal spin structure, vanishing fields and no projections. It counts global Killing-spinor parameters only; it proves no moduli stabilization or full string vacuum."
deps:
  - def-cmp-rectangular-torus-compactification-data
  - def-cmp-four-dimensional-supersymmetry-count
  - def-supergravity-conventions-and-normalizations
  - post-ten-dimensional-ns-ns-supergravity-action
  - post-type-iia-two-derivative-supergravity-action
  - pthm-type-iia-bosonic-field-equations
  - def-type-iia-supergravity-killing-spinor-equations
  - post-type-iib-two-derivative-supergravity-pseudoaction
  - post-type-iib-fiveform-self-duality-constraint
  - pthm-type-iib-field-equations-with-self-duality
  - def-type-iib-supergravity-killing-spinor-equations
  - def-type-iib-spinor-bundle-data
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
dependency_roles:
  def-cmp-rectangular-torus-compactification-data: formulation-prerequisite
  def-cmp-four-dimensional-supersymmetry-count: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-ten-dimensional-ns-ns-supergravity-action: physical-assumption
  post-type-iia-two-derivative-supergravity-action: physical-assumption
  pthm-type-iia-bosonic-field-equations: physical-result
  def-type-iia-supergravity-killing-spinor-equations: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
  post-type-iib-fiveform-self-duality-constraint: physical-assumption
  pthm-type-iib-field-equations-with-self-duality: physical-result
  def-type-iib-supergravity-killing-spinor-equations: formulation-prerequisite
  def-type-iib-spinor-bundle-data: mathematical-premise
  def-given-spin-and-spinc-structures-and-associated-spinor-bundles: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mariana Graña and Hagen Triendl, String Theory Compactifications (Springer, 2017)"
      url: https://djvu.online/file/qufswWArYbwIP
      locator: "Lecture 3 opening, printed p. 21: toroidal compactification preserves 32 real supercharges, recorded as four-dimensional N=8."
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: https://arxiv.org/pdf/1607.00327v3
      locator: "§§3.2–3.6, §6.2 Theorem 6.8, and §7.2 Theorem 7.9: spinor representations and the Type-II Killing-spinor equations."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $M_4=\mathbb R^4$ have global coordinates $x^0,x^1,x^2,x^3$, Minkowski metric $\eta_4=-(dx^0)^2+\sum_{j=1}^3(dx^j)^2$, standard orientation, and time orientation $\partial_{x^0}$. Let $T^6_R=\prod_{i=1}^6\mathbb R/(2\pi R_i\mathbb Z)$ be a rectangular flat torus with $R_i>0$, angular coordinates $\theta^i$ of period $2\pi$, and metric $\sum_i R_i^2(d\theta^i)^2$. On $M_4\times T^6_R$ take the product string-frame metric $G_s=\eta_4\oplus\sum_iR_i^2(d\theta^i)^2$ and the source-free massless two-derivative Type IIA or Type IIB model in the adopted Hamilton convention. Set all NS and RR potentials and field strengths to zero, take the dilaton $\Phi=\Phi_0$ constant, and choose the periodic internal spin structure with no orbifold, orientifold, Wilson-line, or other supersymmetry projection. Then the background is an on-shell bosonic solution and the globally defined Killing-spinor parameter space has 32 real dimensions. Under the four-dimensional supersymmetry counting convention, the four-dimensional theory has $N=8$ supersymmetry, for both IIA and IIB. No statement is made about stabilization or the full massive string spectrum.

## Statement references

[[def-cmp-four-dimensional-supersymmetry-count]]

## Facts & Assumptions

**Given:** The product geometry, periodic spin structure, zero-field configuration, and the exact current or planned physical interfaces below. A planned statement is used conditionally and is not treated as proved by its label.

[F1] [[def-cmp-rectangular-torus-compactification-data]]: $T^n_R=\prod_i\mathbb R/(2\pi R_i\mathbb Z)$ has metric $\sum_iR_i^2(d\theta^i)^2$, and for the minimally coupled scalar equation the characters $e^{i\mathbf n\cdot\theta}$ have masses $m_{\mathbf n}^2=m_0^2+\sum_i n_i^2/R_i^2$. Its scalar proof is complete, and the free-circle supplier now has a ready current record. The rectangular-torus carrier itself is escalated because its KK-ansatz dependency has a stale escalated readiness record; this theorem uses only its exact flat geometry clause and remains conditional on that current readiness state.

[F2] [[def-cmp-four-dimensional-supersymmetry-count]]: $N$ counts copies of the specified real $\operatorname{Spin}^+(1,3)$-module $S_4^{\mathrm M}$; a parameter space is counted as $N$-extended when it is the direct sum of $N$ such modules, of total real dimension $4N$.

[F3] [[def-supergravity-conventions-and-normalizations]]: each ten-dimensional Majorana–Weyl parameter has 16 real components; Type IIA uses two opposite-chirality parameters and Type IIB two same-chirality parameters. The signature is $(-,+,\ldots,+)$ and Clifford multiplication follows the declared Hamilton convention. The current Step-1 record is ready.

[F4] [[def-type-iia-supergravity-killing-spinor-equations]]: on a supplied local Spin$(1,9)$ lift, the real rank-32 Majorana spinor $\epsilon$ defines a local supersymmetric bosonic solution exactly when the source-free IIA field equations hold and both the Hamilton gravitino and dilatino equations in the current Definition hold. This carrier and its direct IIA field-equation input currently have ready Step-1 records.

[F5] [[def-type-iib-supergravity-killing-spinor-equations]]: the current Definition assumes a source-free bosonic solution of the actual IIB pseudoaction, separate five-form constraint, and current field-equation item, together with spinor bundle data in [[def-type-iib-spinor-bundle-data]]. It uses a smooth doublet $\epsilon\in\Gamma(S_+\oplus S_+)$, with Hamilton's string-frame matrices $\lambda_1=\sigma_1$, $\lambda_2=i\sigma_2$, $\lambda_3=\sigma_3$, and form-valued matrices $\widetilde\Omega=\frac18e^\Phi(G_1\lambda_2-\widetilde G_3\lambda_1+\frac12\widetilde G_5\lambda_2)$ and $\Omega=e^\Phi(\frac12\widetilde G_3\lambda_1-G_1\lambda_2)$. The current equations are $\nabla^S_X\epsilon+\frac14(i_XH_3)\lambda_3\cdot\epsilon+\widetilde\Omega\cdot(X^\flat\cdot\epsilon)=0$ and $(d\Phi+\frac12H_3\lambda_3+\Omega)\cdot\epsilon=0$. The spinor-bundle interface supplies the full Clifford bundle and its chiral subbundles; the zero-flux use below retains these supplied data.

[F6] [[post-ten-dimensional-ns-ns-supergravity-action]]: the current adopted local action is $S_{\rm NS}=(2\kappa_0^2)^{-1}\int\sqrt{-G^{(s)}}e^{-2\Phi}(R_s+4|d\Phi|^2-\frac1{12}H_{MNP}H^{MNP})\,d^{10}x$, with $H_3=dB_2$; its current Step-1 record is ready.

[F7] [[post-type-iia-two-derivative-supergravity-action]]: the current IIA postulate is $S_{\rm IIA}=S_{\rm NS}-\frac1{4\kappa_0^2}\int\sqrt{-g_s}(|G_2|_s^2+|\widetilde G_4|_s^2)-\frac1{4\kappa_0^2}\int B_2\wedge G_4\wedge G_4$, with $F_0=0$, $H_3=dB_2$, $G_2=dC_1$, $G_4=dC_3$, and $\widetilde G_4=G_4-C_1\wedge H_3$. Its current Step-1 record is ready.

[F8] [[post-type-iib-two-derivative-supergravity-pseudoaction]]: the current Statement adopts the massless source-free two-derivative string-frame pseudoaction with the exact definitions $H_3=dB_2$, $G_1=dC_0$, $G_3=dC_2$, $G_5=dC_4$, $\widetilde G_3=G_3-C_0H_3$, $\widetilde G_5=G_5-\frac12H_3\wedge C_2+\frac12G_3\wedge B_2$, the RR kinetic bracket $|G_1|^2+|\widetilde G_3|^2+\frac12|\widetilde G_5|^2$, and Chern–Simons term $C_4\wedge H_3\wedge G_3$. It requires variation before the separate five-form constraint. Its current Step-1 record is escalated.

[F9] [[post-type-iib-fiveform-self-duality-constraint]]: after varying the current IIB pseudoaction, separately impose $*_{g_s}\widetilde G_5=\widetilde G_5$ on the gauge-invariant real five-form. At [A2] this constraint is $*0=0$. Its current Step-1 record is escalated.

[F10] [[pthm-type-iia-bosonic-field-equations]]: the current IIA Theorem gives the metric and dilaton equations and form equations $d(*G_2)=H_3\wedge(*\widetilde G_4)$, $d(*\widetilde G_4)=-H_3\wedge\widetilde G_4$, $d(e^{-2\Phi}*H_3)=\frac12\widetilde G_4\wedge\widetilde G_4-G_2\wedge(*\widetilde G_4)$, and Bianchi identities $dH_3=0$, $dG_2=0$, $d\widetilde G_4=-H_3\wedge G_2$. At [A2], every displayed term is zero. Its current Step-1 record is ready.

[F11] [[pthm-type-iib-field-equations-with-self-duality]]: the current Statement gives the IIB string-frame metric and dilaton equations, RR/NS form equations, Bianchi identities $dH_3=0$, $dG_1=0$, $d\widetilde G_3=H_3\wedge G_1$, $d\widetilde G_5=H_3\wedge\widetilde G_3$, and $*\widetilde G_5=\widetilde G_5$. At [A2], every displayed term is zero. Its current proof and direct inputs were inspected; its current Step-1 record is escalated.

[F12] [[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]: a spin structure is a principal Spin lift of the oriented frame bundle, and the associated spinor bundle is built from the specified real Clifford representation.

[A1] The internal spin structure is the periodic one: in the global orthonormal frame, spinor components are unchanged by each generator $\theta^i\mapsto\theta^i+2\pi$. The global frame and this lift trivialize the spinor bundle.

[A2] All potentials are zero, $\Phi=\Phi_0$ is constant, and the metric is the flat product. Hence $R_{MN}=0$, all field strengths vanish, and all potential Bianchi identities hold.

[A3] The following are auxiliary finite-dimensional constructions for the proof, not extra compatibility assumptions on the Killing-spinor modules. Take $\Delta_4=S_4^{\mathbb C}$ from [F2], with its Clifford generators $\gamma_\mu$, and set $\Gamma_4=i\gamma_0\gamma_1\gamma_2\gamma_3$. Let $V=\mathbb C^3$ have standard orthonormal complex basis $u_1,u_2,u_3$ and Hermitian form linear in the first slot. Identify its oriented real basis $(u_1,iu_1,u_2,iu_2,u_3,iu_3)$ with the six ordered internal orthonormal frame vectors. Put $S_6=\Lambda^\bullet V$ and, for $x\in V$ viewed as a real vector, define $c(x)=x\wedge-\iota_{\bar x}$, where
$$\iota_{\bar x}(v_1\wedge\cdots\wedge v_k)=\sum_{j=1}^k(-1)^{j-1}\langle v_j,x\rangle v_1\wedge\cdots\wedge\widehat{v_j}\wedge\cdots\wedge v_k.$$
For the displayed real basis $e_1,\ldots,e_6$, set $\rho_a=ic(e_a)$ and $\Gamma_6=i\rho_1\cdots\rho_6$. The candidate product action on $F:=\Delta_4\otimes S_6$ is $\widehat\Gamma_\mu=\gamma_\mu\otimes\Gamma_6$ for $0\leq\mu\leq3$ and $\widehat\Gamma_{3+a}=I\otimes\rho_a$ for $1\leq a\leq6$. The actual Clifford and real intertwiners to the pinned ten-dimensional module and both Killing-spinor systems are constructed in steps 1.3, 2.1, and 3.1, rather than assumed.

## Proof

**Given:** [F1]–[F12], [A1]–[A3], the flat product background and periodic spin structure in the Statement, and the two-derivative source-free equations and KSE interfaces listed above. The IIB action, constraint, field-equation, and KSE records are currently escalated; the rectangular-torus supplier is also escalated on a stale KK readiness row.


1.1 At [A2], $R_{MN}=0$, $R=0$, $d\Phi=0$, and every NS/RR field strength is zero. In [F6] the Einstein variation is proportional to the Einstein tensor plus derivatives of $e^{-2\Phi}$, both zero; the dilaton variation is proportional to $R$, $d\Phi$, and $H_3$, all zero; the two-form variation is proportional to $H_3$. The additional IIA and IIB kinetic terms in [F7] and [F8] are quadratic in field strengths, so their first variations vanish at zero fields. Each displayed Chern–Simons term and its first variation also vanishes because every potential and field strength is zero. Thus all bulk Euler–Lagrange equations in [F10] and [F11] vanish under compactly supported variations. The potential Bianchi identities hold by [A2], and the IIB self-duality equation [F9] is $*0=0$. Therefore the background is an on-shell source-free bosonic solution in both models, conditionally on the current supplier interfaces. [A2, F6, F7, F8, F9, F10, F11, given, algebra]

1.2 Write $w_j=u_j\wedge$ and $q_j=\iota_{\bar u_j}$ on $S_6$. Their defining exterior formulas give $w_jw_k+w_kw_j=q_jq_k+q_kq_j=0$ and $q_jw_k+w_kq_j=\delta_{jk}I$. Thus $\rho_{2j-1}=i(w_j-q_j)$ and $\rho_{2j}=-(w_j+q_j)$ have square $I$ and distinct generators anticommute. If $n_j=w_jq_j$, then $n_j$ is the occupation projection for $u_j$ and $\rho_{2j-1}\rho_{2j}=i(I-2n_j)$. Hence $\Gamma_6=i\prod_{j=1}^3i(I-2n_j)=(-1)^{\text{exterior degree}}$. Its even and odd eigenspaces each have complex dimension $4$, since their exterior bases have respectively $1+3$ and $3+1$ elements. The four-dimensional operator $\Gamma_4$ squares to $I$, and an invertible $\gamma_\mu$ exchanges its two eigenspaces, each therefore of dimension $2$. The product generators in [A3] satisfy $\{\widehat\Gamma_A,\widehat\Gamma_B\}=2\eta_{AB}I$: mixed terms vanish because $\Gamma_6$ anticommutes with each $\rho_a$. Thus $F$ is a $32$-complex-dimensional representation of the same ordered physical Clifford relations as the pinned module in [F3]. This establishes a candidate representation, not yet its identification with the physical modules. [A3, F2, F3, algebra]

1.3 Here is a finite construction that applies to any $32$-complex-dimensional representation $M$ of those ordered ten-generator relations. Put $D_0=i\Gamma_0$ and $D_a=\Gamma_a$ for $1\leq a\leq9$, so $\{D_r,D_s\}=2\delta_{rs}I$. For $1\leq j\leq5$ define $a_j=(D_{2j-2}+iD_{2j-1})/2$ and $b_j=(D_{2j-2}-iD_{2j-1})/2$. Expansion gives $\{a_j,a_k\}=\{b_j,b_k\}=0$ and $\{a_j,b_k\}=\delta_{jk}I$. In particular $N_j=b_ja_j$ is idempotent, and the five $N_j$ commute. For $\epsilon\in\{0,1\}^5$ set $P_\epsilon=\prod_jN_j^{\epsilon_j}(I-N_j)^{1-\epsilon_j}$. These are mutually annihilating idempotents with sum $I$, so $M=\bigoplus_\epsilon M_\epsilon$, where $M_\epsilon=P_\epsilon M$. No Hermitian-adjoint convention or Clifford-classification theorem is used. [A3, F3, algebra, construct]

2.1 If $\epsilon_j=1$, then $a_j:M_\epsilon\to M_{\epsilon-e_j}$ has inverse $b_j$; indeed $b_ja_j=N_j=I$ on the first space and $a_jb_j=I-N_j=I$ on the second. Both operators commute with each $N_k$ for $k\ne j$. Thus all $32$ joint spaces have the same dimension, and their direct sum has dimension $32$, so each has dimension $1$. Choose $0\ne v\in M_0$ and set $v_\epsilon=b_1^{\epsilon_1}\cdots b_5^{\epsilon_5}v$. These vectors are nonzero and form a basis, because they lie in the distinct one-dimensional joint spaces. On this basis $a_j$ kills a vector with $\epsilon_j=0$ and otherwise lowers that bit with sign $(-1)^{\sum_{k<j}\epsilon_k}$; $b_j$ raises a zero bit with the same sign and kills a one bit. These formulas follow by commuting $a_j$ or $b_j$ past the earlier $b_k$ and using $a_jv=0$ and $a_jb_jv=v$. Matching such bases for two representations gives an explicit complex-linear intertwiner of every $a_j,b_j$, hence of every $D_r$ and $\Gamma_A$. An operator commuting with all $\Gamma_A$ preserves $M_0$ and is scalar there; commuting with the $b_j$ makes it the same scalar on the entire basis. This also proves the scalar-commutant assertion needed below, without invoking Schur's lemma as an additional input. [step 1.3, algebra, choose, construct]

3.1 Apply step 2.1 first to the pinned complex module $S_0=(\mathbb C^2)^{\otimes5}$ in [F3] and to $F$ in step 1.2, obtaining an intertwiner $T:S_0\to F$. The pinned involution $J_0v=b_1^{(0)}b_2^{(0)}b_3^{(0)}b_4^{(0)}\bar v$ is the actual matrix involution of [F3]; the superscript distinguishes those pinned Pauli matrices from the creation operators in step 1.3. The supplier proves $J_0^2=I$ and $J_0\Gamma_A=\Gamma_AJ_0$. Put $R=TJ_0T^{-1}$ on $F$. For either real rank-$32$ Clifford module supplied by [F4] or the full bundle in [F5], complexify its real representation and denote its conjugation by $C$. Its complex dimension is $32$, and $C$ is an antilinear involution commuting with every real generator. Step 2.1 gives a complex Clifford intertwiner $U$ from that complexification to $S_0$. Then $C':=UCU^{-1}$ and $J_0$ commute with every generator, so the complex-linear map $C'J_0$ is scalar by step 2.1, say $C'J_0=\lambda I$. Thus $C'=\lambda J_0$, and $C'^2=I$ gives $\lambda\bar\lambda=1$. Choose a unit complex number $z$ with $z^2=\lambda^{-1}$. Replacing $U$ by $zU$ gives $(zU)C(zU)^{-1}=(z/\bar z)\lambda J_0=J_0$. Consequently $TU$ after this replacement intertwines the actual Clifford representations and their Majorana real structures. These are constant finite-dimensional maps. They intertwine every even Clifford product, hence the external and internal Spin actions, and intertwine the exact ordered chirality products. There is no assumed representation compatibility and no identification based on dimension equality alone. [F3, F4, F5, step 1.2, step 2.1, construct, algebra]

4.1 In the product orientation fixed above, the ordered ten-dimensional chirality is exactly
$$\widehat\Gamma_0\cdots\widehat\Gamma_9=(\gamma_0\gamma_1\gamma_2\gamma_3)\otimes(\rho_1\cdots\rho_6)=-\Gamma_4\otimes\Gamma_6.$$
Thus the positive eigenspace is $(\Delta_4^+\otimes S_6^-)\oplus(\Delta_4^-\otimes S_6^+)$, and the negative one is $(\Delta_4^+\otimes S_6^+)\oplus(\Delta_4^-\otimes S_6^-)$. Each summand has complex dimension $8$. The external Spin action on either space is the action on $\Delta_4$ with internal multiplicity $4$, since $\widehat\Gamma_\mu\widehat\Gamma_\nu=\gamma_\mu\gamma_\nu\otimes I$. The induced internal action agrees with the six-dimensional Clifford convention: its positive-square rotation generator is $\rho_a\rho_b/2=-c(e_a)c(e_b)/2$, the negative-square generator with the same orthogonal infinitesimal action. The Majorana involution $R$ in step 3.1 commutes with this external Spin action and with the real chirality product. Its restrictions therefore give the actual sixteen-real-dimensional Majorana–Weyl modules under the proven intertwiners. Reversing the total orientation interchanges the two ten-dimensional labels and does not change either multiplicity. [A3, F2, F3, step 1.2, step 3.1, algebra]

4.2 The product metric is the exact rectangular geometry in [F1]. In the global product orthonormal frame its coefficients are constant and the Levi-Civita connection coefficients vanish. The periodic lift [A1], using [F12] and the IIB bundle data in [F5], gives trivial associated spinor bundles with zero spin connections. The constant intertwiners of step 3.1 commute with the identity deck actions of this lift, so they define global parallel bundle identifications. Pulling any Killing spinor to the connected universal cover $\mathbb R^4\times\mathbb R^6$, the equations $\partial_M\epsilon=0$ make it constant; conversely each constant fiber spinor descends by periodicity. Thus no additional global solutions or holonomy constraints enter the count. Substitution of [A2] into the actual IIA system [F4] and IIB system [F5] reduces both gravitino equations to $\partial_M\epsilon=0$ and both dilatino equations to $0=0$. Every constant spinor is periodic, and there are no projections, so every fiber spinor gives a global Killing-spinor parameter. [A1, A2, F1, F4, F5, F12, step 1.1, step 3.1, algebra]

5.1 Write $H=\operatorname{Spin}^+(1,3)$ and let $W=S_4^+$ be its complex two-dimensional Weyl module. In Weyl coordinates $H=SL_2(\mathbb C)$ acts on $W$ by $g$ and on the opposite Weyl module by $(g^\dagger)^{-1}$. With $\varepsilon=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, the identity $\varepsilon\bar g\varepsilon^{-1}=(g^\dagger)^{-1}$ identifies the latter module with $\bar W$. These coordinates follow equivalently by the action $X\mapsto gXg^\dagger$ on Hermitian two-by-two matrices, whose determinant is the Lorentz quadratic form, and its induced Weyl actions. There is no nonzero $H$-equivariant antilinear map $W\to W$. Indeed, such a map is $z\mapsto C\bar z$, and equivariance for $g=\operatorname{diag}(t,t^{-1})$ gives $C\operatorname{diag}(\bar t,\bar t^{-1})=\operatorname{diag}(t,t^{-1})C$. Taking $t=2$ kills the off-diagonal entries of $C$, and taking $t=i$ kills its diagonal entries. The same argument applies to $\bar W$ and, entry by entry, to arbitrary finite multiplicities. Consequently every equivariant antilinear involution on $W^{\oplus m}\oplus\bar W^{\oplus m}$ exchanges the two summands. Let $R$ be any such involution and put $U=W^{\oplus m}$. The map
$$U_{\mathbb R}\longrightarrow\operatorname{Fix}(R),\qquad u\longmapsto u+Ru$$
is real-linear and $H$-equivariant, with inverse the projection to $U$: if $u+v$ is fixed, then $v=Ru$, and conversely $R(u+Ru)=u+Ru$. Choose these Weyl coordinates also on the supplied complex Dirac module in [F2], fixing a complex equivariant identification of its positive-Weyl summand with $W$. This choice is legitimate for any supplied irreducible Dirac module: the Pauli block matrices $\gamma_0=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$ and $\gamma_j=\begin{pmatrix}0&\sigma_j\\\sigma_j&0\end{pmatrix}$ obey the stated Clifford relations. To verify the generated algebra, write $\gamma_I$ for the ordered monomial indexed by $I\subseteq\{0,1,2,3\}$. Every nonempty monomial has trace zero: if $|I|$ is even, conjugation by a generator indexed in $I$ negates it; if $|I|$ is odd, conjugation by one outside $I$ negates it. For $I\ne J$, $\gamma_I^{-1}\gamma_J$ is a nonzero scalar multiple of the monomial indexed by $I\mathbin{\triangle}J$, so $\operatorname{tr}(\gamma_I^{-1}\gamma_J)=0$, whereas $\operatorname{tr}(\gamma_I^{-1}\gamma_I)=4$. The sixteen monomials are therefore linearly independent. The Clifford relations reduce every word to their span, so the complex Clifford algebra is $M_4(\mathbb C)$ in this representation. In any nonzero irreducible four-dimensional module $M$, the matrix units decompose $M=\bigoplus_{i=1}^4 E_{ii}M$; the maps $E_{i1}$ and $E_{1i}$ identify each summand with $E_{11}M$, so each has dimension one. Choosing $0\ne v\in E_{11}M$ gives the defining-module basis $E_{i1}v$. This transports the even Spin action and the orientation-fixed Weyl summands. Here $\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, and $\sigma_3=\operatorname{diag}(1,-1)$. Apply the same argument to the independently supplied involution $J$ in [F2] in these coordinates. The restriction $\pi_+:S_4^{\mathrm M}\to W_{\mathbb R}$ is an equivariant real isomorphism, inverse $z\mapsto z+Jz$. Choose a complex basis $e_1,\ldots,e_m$ of the internal multiplicity space, on which $H$ acts trivially. An explicit identification with the specified module, without equating $R$ with $J$, is
$$\operatorname{Fix}(R)\longrightarrow(S_4^{\mathrm M})^{\oplus m},\qquad u+Ru\longmapsto(z_1+Jz_1,\ldots,z_m+Jz_m),\quad u=\sum_{j=1}^m z_j\otimes e_j.$$
Its inverse sends the tuple to $u+Ru$ with $z_j=\pi_+(s_j)$. This construction allows $R$ to mix internal multiplicities. On either ten-dimensional chirality in step 4.1, take $R$ to be the Majorana involution constructed from the actual modules in step 3.1 and $m=4$. It is $H$-equivariant by the Majorana convention, so one Majorana–Weyl parameter is equivariantly isomorphic to four copies of the particular $S_4^{\mathrm M}$ in [F2]. On an $R$-invariant pair with one internal invariant line per chirality, the identical construction has $m=1$. [A3, F2, F3, step 1.2, step 3.1, step 4.1, construct, algebra]

6.1 Type IIA has two opposite-chirality ten-dimensional Majorana–Weyl parameters and Type IIB has two same-chirality parameters; in either case each parameter contributes four four-dimensional Majorana parameters by steps 3.1, 4.1, and 5.1. Thus each reduction has $4+4=8$ independent four-dimensional Majorana parameters, and [F2] identifies the result as $N=8$. This proves the stated supersymmetry count, conditional on the two-derivative KSE interfaces. [F2, F3, F5, step 1.2, step 3.1, step 4.1, step 5.1, step 4.2, algebra] ∎
## Remarks

The IIA Killing-spinor definition and its bosonic-field-equation input currently return ready. The IIB pseudoaction, five-form constraint, field-equation, and Killing-spinor records are current escalations. The rectangular-torus supplier's own readiness row remains escalated and hash-stale on its KK-ansatz input. The zero-background substitution and representation count above are complete conditional arguments; this flat-only theorem remains escalated until those exact upstream readiness states are refreshed. The adjacent B example separately derives the exact-$SU(3)$ Calabi–Yau comparison using the new A-page mathematical lemma. The Graña–Triendl lecture notes independently report the flat-$T^6$ $N=8$ result. A Guarino thesis source entry was dropped after the author and university-hosted PDF URLs exhausted fetch attempts; the complete local proof and independent lecture notes preserve coverage. No moduli stabilization or full-string spectrum is claimed.

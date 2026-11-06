---
id: ex-cmp-chsw-four-generation-quintic-quotient
kind: example
title: The Candelas–Horowitz–Strominger–Witten four-generation quotient
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
domain: physics
library: physics
category: string-theory
deps:
  - lem-finite-etale-algebra-module-presentation-and-rank
  - lem-differentials-diagonal-ideal-square
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
  - def-axiom-of-choice
  - def-chern-classes-of-a-vector-bundle
  - def-chern-classes-from-the-projective-bundle-relation
  - def-intersection-with-a-cartier-divisor-and-first-chern-class
  - def-cmp-heterotic-cy3-bundle-compactification
  - prop-first-chern-class-of-tensor-dual-and-conjugate-lines
  - thm-naturality-normalization-and-whitney-sum-for-chern-classes
  - lem-chow-groups-of-projective-space
  - lem-flat-pullback-chow-groups
  - lem-chow-ring-naturality-and-projection-formula
  - lem-operational-chern-classes-and-whitney-formula
  - cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic
  - thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - lem-cmp-chsw-quintic-free-quotient-euler
  - lem-cmp-ricci-flat-kahler-tangent-is-hym
  - lem-cmp-su3-fixed-chiral-spinor-lines
  - thm-gts-spin-structure-and-parallel-spinors-from-calabiyau-data
  - lem-cmp-su3-holonomy-tangent-cohomology-vanishing
  - post-cmp-heterotic-cohomology-spectrum-dictionary
  - post-heterotic-green-schwarz-bianchi-and-anomaly-cancellation
  - post-heterotic-type-i-ten-dimensional-n1-supergravity-action
  - pthm-cmp-heterotic-cy3-chiral-index
  - cor-gts-ricci-flat-metric-in-every-kahler-class-when-c1-0
dependency_roles:
  lem-finite-etale-algebra-module-presentation-and-rank: mathematical-premise
  lem-differentials-diagonal-ideal-square: mathematical-premise
  thm-chinese-remainder-theorem-for-comaximal-ideals: mathematical-premise
  cor-weak-nullstellensatz-algebraically-closed-coordinate-form: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-chern-classes-of-a-vector-bundle: mathematical-premise
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
  def-intersection-with-a-cartier-divisor-and-first-chern-class: mathematical-premise
  def-cmp-heterotic-cy3-bundle-compactification: formulation-prerequisite
  prop-first-chern-class-of-tensor-dual-and-conjugate-lines: mathematical-premise
  thm-naturality-normalization-and-whitney-sum-for-chern-classes: mathematical-premise
  lem-chow-groups-of-projective-space: mathematical-premise
  lem-flat-pullback-chow-groups: mathematical-premise
  lem-chow-ring-naturality-and-projection-formula: mathematical-premise
  lem-operational-chern-classes-and-whitney-formula: mathematical-premise
  cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic: mathematical-premise
  thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle: mathematical-premise
  thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations: mathematical-premise
  lem-cmp-chsw-quintic-free-quotient-euler: mathematical-premise
  lem-cmp-ricci-flat-kahler-tangent-is-hym: mathematical-premise
  lem-cmp-su3-fixed-chiral-spinor-lines: mathematical-premise
  thm-gts-spin-structure-and-parallel-spinors-from-calabiyau-data: mathematical-premise
  lem-cmp-su3-holonomy-tangent-cohomology-vanishing: mathematical-premise
  post-cmp-heterotic-cohomology-spectrum-dictionary: physical-assumption
  post-heterotic-green-schwarz-bianchi-and-anomaly-cancellation: physical-assumption
  post-heterotic-type-i-ten-dimensional-n1-supergravity-action: physical-assumption
  pthm-cmp-heterotic-cy3-chiral-index: physical-result
  cor-gts-ricci-flat-metric-in-every-kahler-class-when-c1-0: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Philip S. Candelas, Gary T. Horowitz, Andrew D. Strominger, and Edward Witten, Vacuum Configurations for Superstrings"
      url: "https://ooguri.caltech.edu/documents/31340/Candelas_Horowitz_Strominger_Witten.pdf"
      locator: "§4, journal pp. 62–65 (PDF pp. 17–20): free Z5×Z5 quintic quotient, standard embedding, and four-generation E6 model; local freeness and index calculation are reconstructed here."
    - title: "Angel M. Uranga, String Theory: A Graduate Course, Lecture 9: Calabi–Yau compactification and Heterotic String phenomenology"
      url: "https://members.ift.uam-csic.es/auranga/lect13.pdf"
      locator: "PDF pp. 16–23: HYM equations, standard embedding, E8→E6×SU3 branching, and index sign convention."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Conditional perturbative E6 grand-unified example, only in the joint fixed-shape weak-coupling and large-radius limits g_str to zero and alpha-prime/L^2 to zero, at leading tree-level two-derivative linearized massless-mode order; no finite-parameter error estimate or persistence after corrections is asserted. The four is a net chiral index, not a full spectrum or Standard Model claim. A Ricci-flat metric, exact tangent holonomy, the volume-form-induced canonical Spin lift, and matching trace normalization are explicit prerequisites. Exact tangent holonomy and trace matching remain separate hypotheses; the chosen canonical lift has the corresponding full lifted holonomy."
---

## Example

Let $Y_0=\{\sum_{i=1}^5z_i^5=0\}\subset\mathbb P^4_{\mathbb C}$ be the connected Fermat quintic, and let $G\cong\mathbb Z_5\times\mathbb Z_5$ be generated by $A(z_1,z_2,z_3,z_4,z_5)=(z_5,z_1,z_2,z_3,z_4)$ and $B(z_1,z_2,z_3,z_4,z_5)=(\zeta z_1,\zeta^2z_2,\zeta^3z_3,\zeta^4z_4,z_5)$ for a primitive fifth root $\zeta$. Its free quotient $Y=Y_0/G$ is the CHSW geometry, with $\chi(Y)=-8$. In the selected perturbative $E_8\times E_8$ standard embedding, fix the $SU(3)$ subgroup embedding whose complexified adjoint representation decomposes, as a module for $\mathfrak{su}_3\oplus\mathfrak e_6$, as $\mathfrak e_8^{\mathbb C}\cong(\mathbf8,\mathbf1)\oplus(\mathbf1,\mathbf{78})\oplus(\mathbf3,\mathbf{27})\oplus(\overline{\mathbf3},\overline{\mathbf{27}})$; the $E_6$ factor centralizes the embedded $SU(3)$, and the tangent connection is mapped by this embedding. Conditional on a supplied Ricci-flat Kähler metric, exact tangent $SU(3)$ holonomy, the canonical Spin lift induced by the descended holomorphic volume form, the source-free Bianchi trace matching, and the adopted bundle-cohomology dictionary, and only in the dictionary's joint formal regime $g_{\mathrm{str}}=e^{\Phi_0}\to0$ and $\alpha'/L^2\to0$ with $g_L=L^2g_0$ at fixed smooth Ricci-flat shape $g_0$, complex structure and holomorphic bundle, the associated tangent-bundle sector has signed index $+4$ in the convention below, hence absolute net generation number $4$ at leading tree-level, two-derivative, linearized massless-mode order. No finite-parameter error estimate or persistence of unprotected states after corrections is asserted. This is an $E_6$ grand-unified model, not a Standard Model vacuum, a complete massless-spectrum count, or an all-orders nonperturbative existence result.

## Example references

[[lem-cmp-chsw-quintic-free-quotient-euler]]

[[def-cmp-heterotic-cy3-bundle-compactification]]

[[post-cmp-heterotic-cohomology-spectrum-dictionary]]

[[pthm-cmp-heterotic-cy3-chiral-index]]

[[cor-gts-ricci-flat-metric-in-every-kahler-class-when-c1-0]]

[[thm-gts-spin-structure-and-parallel-spinors-from-calabiyau-data]]

## Facts & Assumptions

**Given:** The connected Fermat quintic, the specified $G$-action and projective quotient, an $E_8\times E_8$ standard embedding, a fixed $27$-representation convention, the physical postulates, and the following explicit conditional inputs.

[F1] [[lem-cmp-chsw-quintic-free-quotient-euler]] proves that the displayed action is free, $Y$ is smooth connected projective with $K_Y$ trivial, and $\chi(Y)=-8$. Its Statement additionally supplies a finite surjective quotient map $\pi:Y_0\to Y$, an affine cover $\operatorname{Spec}B$ with invariant affine inverse images $\operatorname{Spec}A$ and $B=A^G$, and closed-point fibers equal to $G$-orbits. These are the exact quotient properties used in step 1.2; algebraic finite étaleness and degree are reconstructed there.

[F7] [[def-chern-classes-from-the-projective-bundle-relation]] defines topological Chern classes, so $c_1^{\mathrm{top}}(T_Y)=c_1^{\mathrm{top}}(\det T_Y)$. Since $\det T_Y=K_Y^\vee$, [[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]] gives $c_1^{\mathrm{top}}(\det T_Y)=-c_1^{\mathrm{top}}(K_Y)=0$.

[F8] [[cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic]] gives $\langle e(TY_{\mathbb R}),[Y]\rangle=\chi(Y)$. The compact connected smooth $Y$ admits a finite triangulation by [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], hence is a path-connected CW complex; its tangent bundle is numerable using a finite trivializing cover and a subordinate smooth partition of unity. Therefore [[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]] gives $c_3^{\mathrm{top}}(T_Y)=e(TY_{\mathbb R})$, so $\langle c_3^{\mathrm{top}}(T_Y),[Y]\rangle=\chi(Y)$ in the complex orientation.

[F9] [[lem-cmp-su3-fixed-chiral-spinor-lines]]: with a supplied spin structure and exact lifted holonomy $SU(3)$, each six-dimensional chiral spinor bundle has one complex line of parallel sections, and either ten-dimensional heterotic Majorana–Weyl chirality has one four-real-dimensional four-dimensional Majorana module in its holonomy-fixed subspace.

[F10] [[thm-gts-spin-structure-and-parallel-spinors-from-calabiyau-data]] constructs the canonical $\operatorname{Spin}^c(6)$ lift of the unitary frame bundle, with determinant $K_Y^{-1}$, and reduces it by the unit parallel section proportional to $\Omega^{-1}$ to a Spin lift. Its complex spinor bundle is $\Lambda^{0,*}T_Y^*$ and the degree-zero vacuum is a nonzero parallel spinor. Its group lift restricted to determinant-one frames is the standard $SU(3)$ lift, acting trivially on that vacuum.

[F2] [[lem-cmp-ricci-flat-kahler-tangent-is-hym]] proves that, for a supplied Ricci-flat Kähler metric with fundamental form $\omega$, the tangent Chern connection satisfies $F^{0,2}=0$ and $\omega^2\wedge F=0$.

[F3] [[lem-cmp-su3-holonomy-tangent-cohomology-vanishing]] gives $H^0(Y,T_Y)=H^3(Y,T_Y)=0$ when the metric has exact $SU(3)$ holonomy.

[F4] [[pthm-cmp-heterotic-cy3-chiral-index]] gives $N_R-N_{\overline R}=-\tfrac12\deg_Y(c_3^{\mathrm{CH}}(T_Y))$ for the declared cohomological chirality convention, provided its endpoint, topological Chern, Chow Chern, AC, actual adjoint-sector and joint-limit leading-order hypotheses hold. Its integral is the degree of an algebraic Chow zero-cycle, not evaluation of a topological class.

[F5] [[def-cmp-heterotic-cy3-bundle-compactification]] requires an actual HYM connection, a source configuration satisfying the chosen local Bianchi identity, and the declared perturbative, trace, and warping assumptions. [[post-heterotic-type-i-ten-dimensional-n1-supergravity-action]] selects the heterotic branch; [[post-heterotic-green-schwarz-bianchi-and-anomaly-cancellation]] supplies only the local source-free Bianchi formula in its own trace convention.

[F6] [[post-cmp-heterotic-cohomology-spectrum-dictionary]] adopts the cohomology-to-massless-matter assignment for actual paired adjoint sectors in its joint weak-coupling, fixed-shape large-radius limit, at leading tree-level, two-derivative, linearized massless-mode order, with no finite-parameter error estimate or persistence claim. The branching in [A4] supplies precisely the pair $(\mathbf3,\mathbf{27})$ and its conjugate; the bundle representation $\mathbf3$ and the gauge representation $\mathbf{27}$ are distinct. This physical dictionary is not a mathematical theorem.

[A1] A Ricci-flat Kähler metric in the chosen class is supplied by [[cor-gts-ricci-flat-metric-in-every-kahler-class-when-c1-0]] using the locally proved Calabi theorem. The example still fixes such a metric as background data; metric existence does not establish its exact tangent holonomy or physical trace normalization. The canonical Spin lift is chosen using the descended volume form in [F1] and [F10].

[A2] Assume exact tangent $SU(3)$ holonomy for [F3]. Fix the nowhere-zero descended holomorphic volume form $\Omega$ supplied by [F1], and choose exactly the $\Omega^{-1}$-induced canonical Spin lift of [F10], rather than an arbitrary spin structure. Full lifted holonomy means all spin parallel transports around piecewise-smooth loops at one base point. Verification step 3.2 proves that this chosen lift has full lifted holonomy equal to the standard $SU(3)$ subgroup of $\operatorname{Spin}(6)$ required by [F9]. The quotient calculation does not prove exact tangent holonomy, and that hypothesis is not inferred merely from $K_Y\cong\mathcal O_Y$.

[A3] The standard embedding uses the tangent connection with $H_3=0$. The heterotic gauge trace is normalized so that the embedded curvature form and the tangent term in the adopted Bianchi identity agree. The current Bianchi/action carriers deliberately do not prove a trace conversion, so this matching remains an explicit physical convention needed to instantiate the source-free branch.

[A4] Fix a homomorphism $\iota:SU(3)\to E_8$ whose differential is the selected standard maximal $\mathfrak{su}_3\subset\mathfrak e_8$ with centralizer $\mathfrak e_6$ and adjoint branching as stated in the Example. The gauge connection is the image under $\iota$ of the tangent connection; the associated $27$ sector is assigned to $T_Y$ for the sign convention, and the conjugate sector to $T_Y^*$. Replacing it by $T_Y^*$ exchanges $27$ and $\overline{27}$ and reverses the sign.

[A5] Adopt only the joint-limit approximation of [F6]: $g_{\mathrm{str}}=e^{\Phi_0}\to0$ and $\alpha'/L^2\to0$ for string-frame $g_L=L^2g_0$ at fixed smooth Ricci-flat shape, complex structure and holomorphic tangent bundle. Here $\Phi_0$ and $g_{\mathrm{str}}$ are dimensionless, $L$ has length dimension and $\alpha'$ has length-squared dimension. Constant positive metric rescaling preserves the Levi-Civita connection, its holonomy and Ricci-flatness; it multiplies $\omega^2\wedge F$ by a positive scalar, so the HYM condition remains valid. The index interpretation below is only the leading-order one and makes no corrected finite-parameter spectrum claim.

[F11] [[def-chern-classes-of-a-vector-bundle]] defines algebraic Chern classes in $A^*(X)$ and [[lem-operational-chern-classes-and-whitney-formula]] supplies their exact-sequence Whitney formula and injective splitting principle.

[F12] [[lem-chow-groups-of-projective-space]] gives $\deg_{\mathbb P^4}(h^4\cap[\mathbb P^4])=1$ for $h=c_1^{\mathrm{CH}}(\mathcal O_{\mathbb P^4}(1))$. [[def-intersection-with-a-cartier-divisor-and-first-chern-class]] identifies a hypersurface cut by a section of $\mathcal O(5)$ with its first-Chern divisor class, and [[lem-flat-pullback-chow-groups]] defines flat pullback on Chow groups and its generic-length multiplicities.

[F13] [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]] identifies maximal ideals of a complex polynomial ring with complex points; hence a proper ideal in a finitely generated complex algebra has a complex zero. [[thm-chinese-remainder-theorem-for-comaximal-ideals]] gives simultaneous residues for pairwise comaximal ideals. [[lem-differentials-diagonal-ideal-square]] identifies relative differentials with the diagonal ideal modulo its square. Under AC, [[lem-finite-etale-algebra-module-presentation-and-rank]] says that a module-finite algebra is finite étale precisely when its underlying module is finitely presented and flat and its relative differentials vanish. Step 1.2 applies these local proved tools to the invariant affine quotient charts constructed in [F1], and reconstructs finite étaleness and degree $25$ without importing a free-action torsor theorem.

[F14] [[lem-chow-ring-naturality-and-projection-formula]] gives naturality of algebraic Chern classes under pullback and $\pi_*(\pi^*\alpha\cdot\beta)=\alpha\cdot\pi_*\beta$ for a proper map of smooth projective varieties.

## Verification

**Given:** [F1]–[F6], AC, the chosen metric and conditional holonomy/trace inputs [A1]–[A4], and the definitions of the standard embedding and the net index.

1.1 The local quotient lemma [F1] gives a smooth projective threefold $Y$ with a descended nowhere-zero holomorphic volume form and $\chi(Y)=-8$. Thus the topological class $c_1^{\mathrm{top}}(T_Y)$ vanishes by [F7]. This establishes the broad Calabi–Yau geometry required by the bundle datum but does not infer exact $SU(3)$ holonomy from canonical-bundle triviality. [given, F1, F7]

1.2 Work on an invariant affine chart $\operatorname{Spec}A\subset Y_0$ over $\operatorname{Spec}B\subset Y$, with $B=A^G$, as constructed in [F1]. That construction already proves the map finite and surjective and identifies its closed-point fibres with $G$-orbits. Use the induced action on the ring $A$. For $g\in G$, let $J_g$ be the kernel of the surjection $A\otimes_{\mathbb C}A\to A$, $a\otimes b\mapsto a\,g(b)$. The ideals $J_g$ are pairwise comaximal: otherwise a maximal ideal containing $J_g+J_h$ gives, by the complex-point assertion in [F13], a point on both corresponding graphs, hence a fixed point of the nonidentity element $h^{-1}g$, contradicting freeness in [F1]. The Chinese remainder theorem [F13] therefore gives a finite tensor $\sum_i x_i\otimes y_i$ such that $\sum_i x_i g(y_i)=\delta_{g,1}$ for every $g$. Write $\operatorname{Tr}(a)=\sum_{g\in G}g(a)\in B$. For every $a\in A$ one has $\sum_i x_i\operatorname{Tr}(y_i a)=a$. Thus the maps $A\to B^m$, $a\mapsto(\operatorname{Tr}(y_i a))_i$, and $B^m\to A$, $(b_i)\mapsto\sum_i x_i b_i$, exhibit $A$ as a direct summand of a finite free $B$-module, so it is finitely presented and flat. The map $\theta:A\otimes_B A\to\prod_{g\in G}A$, $a\otimes b\mapsto(a\,g(b))_g$, is surjective by the same simultaneous residues, which factor through $A\otimes_B A$. It is injective as well: if $z=\sum_j a_j\otimes b_j$ has every component zero, the dual-basis identity gives $z=\sum_i(\sum_j a_j\operatorname{Tr}(y_i b_j))\otimes x_i$, and each coefficient equals $\sum_g g(y_i)\sum_j a_jg(b_j)=0$. Under this isomorphism multiplication $A\otimes_B A\to A$ is projection onto the identity factor. Its kernel is an idempotent ideal, so [F13] gives $\Omega_{A/B}=0$ and then finite étaleness. For any geometric point of $\operatorname{Spec}B$, let $r>0$ be the dimension of its fibre algebra; positivity follows from surjectivity. Base change of $\theta$ gives $r^2=|G|r$, whence $r=|G|=25$. These chartwise arguments agree on overlaps, proving that $\pi:Y_0\to Y$ is finite étale of degree $25$. [given, F1, F13, construct, algebra]

2.1 Let $h=c_1^{\mathrm{CH}}(\mathcal O_{\mathbb P^4}(1))$ and $H=h|_{Y_0}$. The algebraic Euler sequence is $0\to\mathcal O_{\mathbb P^4}\to\mathcal O_{\mathbb P^4}(1)^{\oplus5}\to T_{\mathbb P^4}\to0$: at a line $\ell\subset\mathbb C^5$ its middle-to-last map is $\operatorname{Hom}(\ell,\mathbb C^5)\to\operatorname{Hom}(\ell,\mathbb C^5/\ell)$, with kernel $\operatorname{Hom}(\ell,\ell)\cong\mathbb C$; the graph charts of projective space identify the quotient algebraically with $T_{\mathbb P^4}$. The smooth hypersurface normal sequence is $0\to T_{Y_0}\to T_{\mathbb P^4}|_{Y_0}\to\mathcal O_{Y_0}(5)\to0$, since the differential of $f=\sum z_i^5$ is nonzero along $Y_0$. By [F11] and the line-class normalization, $c^{\mathrm{CH}}(T_{Y_0})=(1+H)^5/(1+5H)=1+10H^2-40H^3$, truncated in codimension at most three; in particular $c_1^{\mathrm{CH}}(T_{Y_0})=0$. The divisor of the regular section $f$ of $\mathcal O(5)$ has class $[Y_0]=c_1^{\mathrm{CH}}(\mathcal O(5))=5h$; [F12] therefore gives $\deg_{Y_0}(H^3)=\deg_{\mathbb P^4}(h^3\cap[Y_0])=5\deg_{\mathbb P^4}(h^4\cap[\mathbb P^4])=5$. Hence $\deg_{Y_0}(c_3^{\mathrm{CH}}(T_{Y_0}))=-200$. The quotient map $\pi:Y_0\to Y$ is finite étale of degree $25$ by step 1.2, so its differential identifies $\pi^*T_Y$ with $T_{Y_0}$. Chern naturality and the projection formula [F14] give $\pi^*c_1^{\mathrm{CH}}(T_Y)=c_1^{\mathrm{CH}}(T_{Y_0})=0$ and $25c_1^{\mathrm{CH}}(T_Y)=\pi_*\pi^*c_1^{\mathrm{CH}}(T_Y)=0$, because $\pi_*[Y_0]=25[Y]$. Thus $c_1^{\mathrm{CH}}(T_Y)=0$ with rational coefficients. Likewise the finite étale fiber over each closed point consists of $25$ distinct $\mathbb C$-points, so flat pullback [F12] gives $\deg_{Y_0}(\pi^*c_3^{\mathrm{CH}}(T_Y))=25\deg_Y(c_3^{\mathrm{CH}}(T_Y))$. Therefore $\deg_Y(c_3^{\mathrm{CH}}(T_Y))=-200/25=-8$. [given, F1, F11, F12, F14, step 1.2, algebra]

2.2 Use the metric supplied in [A1]; [F2] then verifies that the tangent Chern connection, embedded in the gauge group by [A4], satisfies both HYM equations. As the Chern connection, its $(0,1)$ part is the given holomorphic tangent structure, so the embedding also satisfies the holomorphic-compatibility requirement in [F5]. With $H_3=0$, the torsionful tangent connection $R_+$ equals the Levi-Civita curvature. By the trace-matching assumption [A3], the two source-normalized curvature-square terms in the local Bianchi relation [F5] cancel, so $dH_3=0$ on the stated source-free patch. This verifies the specified local bundle datum only; it does not prove the exact-holonomy or trace-matching assumptions. [given, F2, F5, A1, A3, A4, step 1.1]

3.1 Under exact tangent holonomy [A2], [F3] supplies the endpoint vanishings for $V_R=T_Y$. The topological first-Chern vanishing is [F7], and the separate Chow-class vanishing and degree are proved in step 2.1, so [F4] applies and gives $N_{27}-N_{\overline{27}}=-\tfrac12(-8)=4$ in the declared convention. Separately, the topological equality [F8] gives $\langle c_3^{\mathrm{top}}(T_Y),[Y]\rangle=\chi(Y)=-8$; this independent Euler-number identity is not substituted into the Grothendieck–Riemann–Roch degree. Hence the absolute net chiral multiplicity is four; exchanging the associated bundle and conjugate representation reverses the sign. [given, F1, F3, F4, F7, F8, A2, A4, step 1.1, step 2.1]

3.2 Use the descended volume form $\Omega$ from [F1], the Ricci-flat Kähler metric in [A1], and [F10] to construct and choose the canonical Spin lift in [A2]. Its degree-zero vacuum $v\ne0$ is parallel, so every element of its full spin holonomy $\widetilde H$ fixes $v$. Projection of spin parallel transport to oriented tangent frames gives the tangent parallel transport along the same loop; hence $\widetilde H$ projects onto the exact tangent group $SU(3)$ assumed in [A2]. Let $\tau:SU(3)\to\operatorname{Spin}(6)$ be the standard lift obtained by restricting the determinant-one part of the group lift in [F10]; it projects to the standard tangent action and fixes $v$. If $h\in\widetilde H$ projects to $g\in SU(3)$, the double-cover kernel is $\{1,-1\}$, so $h=\pm\tau(g)$. The central element $-1$ acts as $-I$ in the Clifford spin module, while $\tau(g)v=v$; since $hv=v\ne0$, the minus choice is excluded. Thus $\widetilde H\subseteq\tau(SU(3))$, and surjectivity of its projection gives equality. This proves the full lifted-holonomy hypothesis of [F9] for the chosen lift without assuming a parallel spinor as independent data or claiming the same for every spin structure. Now [F9] gives a one-dimensional parallel internal spinor line in each six-dimensional chirality and one four-real-dimensional invariant Majorana module for the selected ten-dimensional chirality. The conditional quotient therefore carries the covariantly constant spinor required by the standard-embedding interpretation. Exact tangent holonomy remains a hypothesis, not a consequence of the quintic quotient calculation. [given, F1, F9, F10, A1, A2, A4, step 1.1, step 2.2]

4.1 The $E_8$ standard embedding is, by [A4], the chosen $SU(3)$ subgroup embedding whose commutant is $E_6$, so the representation in step 3.1 is an $E_6$ charged sector. Under the adopted bundle-cohomology dictionary [F6], step 3.1 is a massless-matter net index; it fixes neither vector-like pairs nor the full spectrum. The result is conditional on [A1]–[A5] and the adopted physical postulates, not an experimental deduction or proof of an all-orders string vacuum. [F4, F6, A1, A4, A5, step 3.1, step 3.2] ∎

## Remarks

Uranga's notes use the opposite sign convention for the net representation count, writing the standard-embedding index as $\chi(Y)/2=h^{1,1}-h^{2,1}$. The absolute count agrees; the signed identification depends on which of $T_Y$ and $T_Y^*$ is assigned to the $27$. The example still assumes exact tangent holonomy and trace matching in [A2]–[A3]. The canonical Spin lift is explicitly chosen from the descended volume form, and its full lifted holonomy is proved in Verification step 3.2; no claim is made for an arbitrary spin structure.

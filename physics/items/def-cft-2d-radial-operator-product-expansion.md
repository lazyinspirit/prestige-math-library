---
id: def-cft-2d-radial-operator-product-expansion
kind: definition
title: Radially ordered operator product expansion
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
deps:
  - def-cft-2d-primary-field
  - def-cft-2d-radial-quantization
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-2d-primary-field: mathematical-premise
  def-cft-2d-radial-quantization: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988)
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: "§2.2, printed pp. 15–20; §2.3, printed pp. 21–24: radially ordered products and free-field OPE conventions."
    - title: Duccio Pappadopulo, Slava Rychkov, Johnny Espin, Riccardo Rattazzi, OPE Convergence in Conformal Field Theory, arXiv:1208.6449v3
      url: https://arxiv.org/pdf/1208.6449v3
      locator: "§1, equations (1.1)–(1.8), PDF pp. 3–6; §2, PDF pp. 7–8: channel OPE and the separated-insertion domain."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix a selected mathematical radial model on an open coordinate patch $U\subseteq\mathbb C^\times$, with dimensionless coordinates and $d^2z=dx\,dy$. Write $\mathcal D(U)=C_c^\infty(U;\mathbb C)$ with the compact-support test-function topology, and let $\mathscr D$ be the common complex field domain, with algebraic dual $\mathscr D^*$. A weak field is a linear map $A:\mathcal D(U)\to\operatorname{Hom}_{\mathbb C}(\mathscr D,\mathscr D^*)$ whose coefficients $(A(\varphi)u)(v)$ are continuous in $\varphi$ for every $u,v\in\mathscr D$; this is the supplied primary-field convention, without requiring that $A$ be primary. Such fields have neither point evaluations nor composable operator products by definition.

Set $Q_>=\{(z,w)\in U^2:|z|>|w|\}$ and $Q_<=\{(z,w)\in U^2:|w|>|z|\}$. Work in a specified open simply connected region $Q\subseteq Q_>$ on which the chosen coefficient branches exist. In a weak realization the model additionally supplies a two-insertion product
$$P_{AB}:\mathcal D(Q)\longrightarrow\operatorname{Hom}_{\mathbb C}(\mathscr D,\mathscr D^*),$$
linear with continuous scalar coefficients, and separately the reversed product on a specified region in $Q_<$. The notation $A(z)B(w)$ on $Q$ denotes this product distribution, not composition of weak fields. Numerical weak coefficients may be used only where the model supplies smooth functions $p_{u,v}$ representing it, meaning $(P_{AB}(\chi)u)(v)=\int_Q\chi(z,w)p_{u,v}(z,w)\,d^2z\,d^2w$. Alternatively a purely formal realization supplies fields as coefficient arrays with endomorphisms of a common complex vector space $V$, and a specified iterated generalized-power series space in which the products and re-expansions used are well defined coefficientwise. Formal products mean coefficientwise composition on $V$, not evaluation at points; every coefficient sum must be finite or have a separately specified convergence meaning. A formal realization alone asserts no weak realization. If both are used, their scalar coefficient compatibility must be supplied. Larger-radius factors stand on the left; the ungraded reversed order is $B(w)A(z)$, while a graded model must specify its interchange sign. Equal radii have no order unless the model declares one.

Choose a label space $\mathcal F=\bigoplus_{\lambda\in\Lambda}\mathcal F_\lambda$, a specified indexed spanning family $(a_{\lambda i})_{i\in I_\lambda}$ in each summand, and an associated field $A_{\lambda i}$ for each label. The full index set is $J=\{(\lambda,i):\lambda\in\Lambda,\ i\in I_\lambda\}$, including descendant and multiplicity labels; it is not the set of all vectors in $\mathcal F$. Coefficients $C_{AB,\lambda i}$, normalizations and branches are supplied data, without an assertion of unique coefficients for a redundant spanning family. In a Hilbert realization, also specify a closed channel sector $H_*$ and vectors $s_{\lambda i}\in H_*$ assigned to the labels. The family is **complete for this channel** when $\overline{\operatorname{span}}\{s_{\lambda i}:(\lambda,i)\in J\}=H_*$. Neither existence of such a family nor a state assignment is inferred from weak fields alone.

The schematic OPE is
$$A(z)B(w)\sim\sum_{(\lambda,i)\in J}C_{AB,\lambda i}(z,w)A_{\lambda i}(w).$$
In a weak realization require $C_{AB,\lambda i}\in C^\infty(Q)$ on the chosen branch. Each individual term is the well-defined distribution
$$T_{\lambda i}(\chi):=A_{\lambda i}(g_{\lambda i,\chi}),\qquad g_{\lambda i,\chi}(w):=\int_U C_{AB,\lambda i}(z,w)\chi(z,w)\,d^2z.$$
Here the smooth product $C_{AB,\lambda i}\chi$, for $\chi\in\mathcal D(Q)$, is extended by zero to $U^2$ before integration; thus $g_{\lambda i,\chi}\in\mathcal D(U)$ and the map $\chi\mapsto g_{\lambda i,\chi}$ is continuous. No multiplication of two distributions is involved. Let $S_F=\sum_{j\in F}T_j$ for finite $F\subseteq J$ in this realization, or the corresponding formal partial sum. Finite subsets are directed by inclusion. The notation $\sim$ alone selects no meaning for the sum; the model declares the following meaning or meanings separately.

1. **Formal OPE:** equality coefficient by coefficient in the specified iterated generalized-power series space on the declared branch or line bundle (ordinary Laurent distributions are the integer-power special case). The sum over $J$ must be defined coefficientwise in that space; no numerical convergence is implied.

2. **Asymptotic OPE:** the model supplies a directed family of finite partial sums, a normed or seminormed target, and representatives $R_F(z,w)$ of the product minus the partial sum in that target, together with real orders $q_F\to+\infty$. For each fixed $F$, require $p(R_F(z,w))=o(|z-w|^{q_F})$ as $z\to w$ in a declared approach region within $Q$. This pointwise version requires the stated representatives. A distributional version instead specifies test functions $\chi_\varepsilon\in\mathcal D(Q)$ approaching the diagonal, their normalization and support scaling, and requires $p((P_{AB}-S_F)(\chi_\varepsilon))=o(\varepsilon^{q_F})$ as $\varepsilon\downarrow0$ for each $F$; the seminorm $p$ is on the declared space of smeared outputs.

3. **Hilbert-convergent OPE:** the model supplies a fused-pair vector $\Phi_{AB}(z,w)\in H_*$ and coefficient-weighted term vectors $t_j(z,w)\in H_*$ at every allowed pair, or after an explicitly specified smearing. For every such fixed configuration the net $\sum_{j\in F}t_j$ converges in Hilbert norm to $\Phi_{AB}$. These vector assignments, their relation to the field labels and coefficients, and their insertion domains are additional data, not point evaluation of weak fields.

4. **Weakly convergent correlator OPE:** in a weak realization require $(S_F(\chi)u)(v)\to(P_{AB}(\chi)u)(v)$ for each declared $\chi,u,v$. In a Hilbert correlator realization, specify a set of finite-norm complementary states $\Psi$, an overlap order, and scalar compatibility: the correlator equals $\ell_\Psi(\Phi_{AB})$ and its $j$th OPE term equals $\ell_\Psi(t_j)$. Require $\sum_{j\in F}\ell_\Psi(t_j)\to\ell_\Psi(\Phi_{AB})$ for each such state and fixed allowed configuration. With the supplied first-argument-linear inner product, either $\ell_\Psi(v)=\langle v,\Psi\rangle$ or $\ell_\Psi(v)=\langle\Psi,v\rangle$ may be declared; the latter conjugates scalar coefficients in $t_j$. Unsmeared scalar assertions require the separately supplied scalar or vector representatives just described.

When coefficient functions contain complex powers, their branch or line-bundle data are part of the selected model and are fixed on the simply connected radial configuration region being used. For a two-dimensional global-conformal decomposition, a block is the subseries obtained by grouping all descendants assigned to one intermediate global-conformal primary label $\lambda$; these blocks are the global-conformal (quasi-primary-family) blocks and are not full Virasoro blocks unless that stronger grouping is separately supplied. This definition distinguishes formal, asymptotic, Hilbert, and scalar-correlator convergence; it asserts none of them for a particular theory.

## Definition references

[[def-cft-2d-primary-field]]

[[def-cft-2d-radial-quantization]]

## Remarks

A source may provide a formal OPE or a source-reported convergence result without proving its hypotheses in the selected model. A local theorem that uses the Hilbert or weak-correlator meaning must state the finite-norm, completeness, coefficient/state, and insertion-separation hypotheses explicitly.


---
id: post-f4-global-gauge-group-from-mordell-weil-torsion
kind: postulate
title: "Global gauge group from Mordell–Weil data"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: physics
library: physics
category: string-theory
deps:
  - def-f4-elliptic-fibration-with-section
  - post-f4-sevenbrane-monodromy-and-codimension-one-gauge
  - def-f4-shioda-map-and-torsional-coweight-data
dependency_roles:
  def-f4-elliptic-fibration-with-section: formulation-prerequisite
  post-f4-sevenbrane-monodromy-and-codimension-one-gauge: formulation-prerequisite
  def-f4-shioda-map-and-torsional-coweight-data: mathematical-premise
physical_scope: "Adopted global-form dictionary for a specified resolved elliptic F-theory model with computed Mordell–Weil group, Shioda data, codimension-one gauge algebra, and realized matter-weight lattice. It does not infer a global group from the Lie algebra alone, assert a global compact vacuum, or assume a direct product with free U(1) factors."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Christoph Mayrhofer, David R. Morrison, Oskar Till, and Timo Weigand, Mordell-Weil Torsion and the Global Structure of Gauge Groups in F-theory, arXiv:1405.3656v2"
      url: "https://arxiv.org/pdf/1405.3656v2"
      locator: "Abstract, §1, pp. 1–3, and §3.3, pp. 8–10; torsional Shioda classes, coweight integrality, matter weights, and quotient in the stated resolved models."
    - title: "David R. Morrison and Daniel S. Park, F-Theory and the Mordell-Weil Group of Elliptically-Fibered Calabi-Yau Threefolds, arXiv:1208.2695v2"
      url: "https://arxiv.org/pdf/1208.2695v2"
      locator: "§1 and §3.1, printed pp. 1–3 and 6–8; rational-section Mordell–Weil group, rank, and Shioda map for the six-dimensional CY3 setting only."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§§7.1–7.7, printed pp. 59–78; Shioda map, torsion, quotient subtleties, and possible mixing with U(1) factors."
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, Digital Second Edition, 2023"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV, §5, Theorem 4.36 and Corollary 4.47, printed pp. 255–259 (PDF pp. 272–276): conjugacy into a maximal torus and containment of the center in every maximal torus. The root-space and lattice calculation is supplied locally here."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-10-27
    scope: Checked the source-stated resolved-model hypotheses, Shioda/coweight construction, matter-weight integrality, quotient action, and the U(1)-mixing qualification.
    by: batch-72 beta author; not independent approval
---

## Postulate

**Group-theoretic definitions and convention.** The codimension-one supplier gives the model's complex semisimple gauge algebra and explicitly does not determine its global group form; denote this algebra by $\mathfrak g_{\mathbb C}$. Here semisimple means a finite direct sum of simple Lie algebras, and simple means nonabelian with no nonzero proper ideals. Let $\mathfrak g_c$ be the compact real form selected by the model, meaning a real Lie algebra whose complexification is $\mathfrak g_{\mathbb C}$ and whose Killing form is negative definite. The **simply connected cover** $\widetilde G$ is the connected compact Lie group with Lie algebra $\mathfrak g_c$ in which every loop is contractible. Fix a maximal torus $T\subset\widetilde G$, meaning a maximal connected compact abelian subgroup. The full semisimple algebra has a finite, possibly reducible root system with simple roots $\alpha_1,\ldots,\alpha_n$, simple coroots $\alpha_1^\vee,\ldots,\alpha_n^\vee$, and Cartan pairings $A_{ij}=\langle\alpha_i,\alpha_j^\vee\rangle$. Write $\mathfrak t=\operatorname{Lie}(T)$ and choose the root-datum identification inside the complexified Cartan $\mathfrak t\otimes_{\mathbb R}\mathbb C$: the real span $\mathfrak h_{\mathbb R}$ of the simple coroots satisfies $\mathfrak t=i\mathfrak h_{\mathbb R}$. Thus $2\pi i\lambda\in\mathfrak t$ for $\lambda\in\mathfrak h_{\mathbb R}$, and each $\langle\alpha_i,\cdot\rangle$ is the corresponding real linear form on $\mathfrak h_{\mathbb R}$. Define $\operatorname{Exp}_T(\lambda)=\exp_{\widetilde G}(2\pi i\lambda)$. In this simply connected normalization, $\operatorname{Exp}_T:\mathfrak h_{\mathbb R}\to T$ is surjective and has kernel $Q^\vee_{\mathfrak g}=\sum_i\mathbb Z\alpha_i^\vee$; equivalently, $\ker(\exp_{\widetilde G}|_{\mathfrak t})=2\pi iQ^\vee_{\mathfrak g}$. Set $P^\vee_{\mathfrak g}=\{\lambda\in\mathfrak h_{\mathbb R}:\langle\alpha_i,\lambda\rangle\in\mathbb Z\text{ for all }i\}$. For a finite root system $Q^\vee_{\mathfrak g}$ has finite index in $P^\vee_{\mathfrak g}$, so $P^\vee_{\mathfrak g}/Q^\vee_{\mathfrak g}$ is finite. The center is $Z(\widetilde G)=\{z\in\widetilde G:zg=gz\text{ for every }g\in\widetilde G\}$. The map
$$
\chi_{\mathfrak g}:P^\vee_{\mathfrak g}/Q^\vee_{\mathfrak g}\longrightarrow Z(\widetilde G),\qquad [\lambda]\longmapsto\exp_{\widetilde G}(2\pi i\lambda)
$$
is the map induced on the quotient by the additive Cartan exponential, a homomorphism because the Cartan is abelian. For each root $\alpha$, the adjoint action of $\operatorname{Exp}_T(\lambda)$ on its root space is multiplication by $e^{2\pi i\langle\alpha,\lambda\rangle}$. Every root is an integer linear combination of simple roots, so for $\lambda\in P^\vee_{\mathfrak g}$ the exponential acts trivially on the Cartan and every root space; its adjoint action is therefore the identity. Since $\widetilde G$ is connected, exponentials generate it, so an element with trivial adjoint action is central. Conversely, every central element of a compact connected Lie group lies in every maximal torus by Knapp, Chapter IV, §5, Corollary 4.47; hence it lies in $T$. The torus exponential is surjective, and a central element has trivial root characters, so any Cartan lift has integer pairing with every simple root and belongs to $P^\vee_{\mathfrak g}$. The kernel of $\operatorname{Exp}_T$ is $Q^\vee_{\mathfrak g}$ by the stated simply connected normalization. Hence the induced map is a well-defined isomorphism.

Let $B$ be the base and $K(B)$ its function field; let $E/K(B)$ be the pointed generic elliptic fiber with zero point $O$. The **Mordell–Weil group** is $MW:=E(K(B))$, the abelian group of rational points on this pointed curve, equivalently rational sections with $O$ as identity. For each application, assume $MW$ is finitely generated and compute its torsion subgroup $MW_{\mathrm{tors}}=\{x\in MW:nx=0\text{ for some integer }n\ge1\}$ and free rank $r=\operatorname{rank}_{\mathbb Z}(MW/MW_{\mathrm{tors}})$; finite generation is a model input, not a consequence of the elliptic-fibration definition. The circle group is $U(1)=\{z\in\mathbb C:|z|=1\}$ with multiplication; the adopted physical dictionary identifies the free rank with the number of abelian gauge-algebra factors, while the global group may involve an additional quotient. The Shioda coweight supplier fixes its own finite-type simply-laced lattices $Q^\vee_{\mathrm{Sh}}=\sum_i\mathbb Z\alpha_i^\vee$ and $P^\vee_{\mathrm{Sh}}=\{\lambda:\langle\alpha_i,\lambda\rangle\in\mathbb Z\text{ for all }i\}$. Under its stated intersection hypotheses, for a finite-order section $T_0$ it defines $\delta_j(T_0)=([T_0]-[O])\cdot C_j$ and $\lambda_{T_0}=\sum_{i,j}(A^{-1})_{ij}\delta_j(T_0)\alpha_i^\vee$, proves $\lambda_{T_0}\in P^\vee_{\mathrm{Sh}}$, and supplies $[\lambda_{T_0}]_{\mathrm{Sh}}\in P^\vee_{\mathrm{Sh}}/Q^\vee_{\mathrm{Sh}}$. The source-backed model dictionary must specify, for each selected torsion section, the corresponding full root-data class $\gamma_{T_0}\in P^\vee_{\mathfrak g}/Q^\vee_{\mathfrak g}$; when the Shioda data are supported only on specified simple summands, it supplies the embedding with zero components on spectator summands. Let $\Gamma\le P^\vee_{\mathfrak g}/Q^\vee_{\mathfrak g}$ be the subgroup generated by those full classes and set $Z:=\chi_{\mathfrak g}(\Gamma)$. This identification and support data are model-specific source input (Mayrhofer–Morrison–Till–Weigand §3.3); the mathematical Shioda definition alone proves neither the full-root-data identification nor a group homomorphism from $MW_{\mathrm{tors}}$.

A realized matter representation $R$ means a specified smooth group homomorphism $\rho_R:\widetilde G\to\operatorname{GL}(V_R)$, where $V_R$ is a finite-dimensional complex vector space and $\operatorname{GL}(V_R)$ is its group of invertible complex-linear maps. A **character** of $T$ means a smooth group homomorphism $\mu:T\to U(1)$. Its **weight space** in $R$ is
$$
V_\mu=\{v\in V_R:\rho_R(t)v=\mu(t)v\text{ for every }t\in T\}.
$$
The **realized weights** of $R$ are exactly the characters with $V_\mu\ne0$. There are finitely many, and $V_R=\bigoplus_{\mu\text{ realized}}V_\mu$. Indeed, compactness bounds all positive and negative powers of each $\rho_R(t)$, excluding nontrivial Jordan blocks and eigenvalues off the unit circle. The commuting diagonalizable matrices $\rho_R(t)$ can then be simultaneously diagonalized by successive refinement of eigenspaces, which terminates in finite dimension. Each common eigenvalue function is a smooth character, as follows by evaluating the smooth homomorphism $\rho_R$ on a fixed nonzero common eigenvector.

The character differential at the identity is the real-linear map $(d\mu)_1:\mathfrak t\to i\mathbb R$, using $\operatorname{Lie}(U(1))=i\mathbb R$. Define its **normalized differential pairing** by
$$
\langle\mu,\lambda\rangle=\frac{1}{2\pi i}(d\mu)_1(2\pi i\lambda)\in\mathbb R,\qquad\lambda\in\mathfrak h_{\mathbb R}.
$$
For the real parameter $s$, the homomorphism $s\mapsto\mu(\operatorname{Exp}_T(s\lambda))$ has derivative $2\pi i\langle\mu,\lambda\rangle$ at zero and value $1$ there. Differentiating its homomorphism identity gives the scalar differential equation with solution $\mu(\operatorname{Exp}_T(s\lambda))=e^{2\pi is\langle\mu,\lambda\rangle}$. Consequently $\operatorname{Exp}_T(\lambda)$ acts on $V_\mu$ by $e^{2\pi i\langle\mu,\lambda\rangle}$.

The subgroup $Z$ **acts trivially** on $R$ exactly when $\rho_R(z)=I_{V_R}$ for every $z\in Z$, with $I_{V_R}$ the identity map. Since $Z$ is central, the quotient $\widetilde G/Z$ is the group of cosets $gZ$ with product $(gZ)(hZ)=(gh)Z$; the trivial-action condition is equivalent to $\rho_R$ factoring through the quotient homomorphism $\widetilde G\to\widetilde G/Z$. Choose a representative $\widehat\lambda_{T_0}\in P^\vee_{\mathfrak g}$ of each selected full class $\gamma_{T_0}$. By the weight-space decomposition, trivial $Z$-action is equivalent to $\langle\mu,\widehat\lambda_{T_0}\rangle\in\mathbb Z$ for every realized weight $\mu$ and every selected class: these exponentials generate $Z$. This criterion is independent of the representatives, since $q\in Q^\vee_{\mathfrak g}$ gives $\operatorname{Exp}_T(q)=1$ and therefore $\langle\mu,q\rangle\in\mathbb Z$. These explicit character conventions implement the weight-eigenvalue and exponentiation criterion of Mayrhofer–Morrison–Till–Weigand §3.3, equations (3.15)–(3.17).

Adopt the following model-dependent global-form dictionary. In resolved elliptic F-theory models satisfying the cited Shioda-map and matter-lattice hypotheses, the free Mordell–Weil rank gives abelian gauge factors and Mordell–Weil torsion defines a fractional coweight that restricts allowed weights and quotients the simply connected non-abelian cover by the corresponding central subgroup. The global gauge group is therefore not determined by the codimension-one Lie algebra alone.

The cited elliptic-fibration and Shioda items supply the exact group, intersection, and coweight interfaces just stated. In each application, the source-backed model dictionary must specify the selected torsional coweight classes and check $\rho_R(z)=I_{V_R}$ for every geometrically realized matter representation $R$ and every $z\in Z$; if any check fails, this postulate does not license the proposed quotient $\widetilde G/Z$. The codimension-one algebra itself is used only under [[post-f4-sevenbrane-monodromy-and-codimension-one-gauge]] and its exact conditional local-slice hypotheses.

When free Mordell–Weil sections are also present, the full gauge group can involve a quotient that mixes the semisimple center with the abelian $U(1)$ factors. Accordingly this postulate states the quotient of the non-abelian cover selected by torsion, but does not assert that the complete group is a direct product of that quotient with $U(1)^r$. It also does not infer a global vacuum, discrete gauge sector, or matter lattice from the Lie algebra or Mordell–Weil rank alone.

## Postulate references

[[def-f4-elliptic-fibration-with-section]]

[[post-f4-sevenbrane-monodromy-and-codimension-one-gauge]]

[[def-f4-shioda-map-and-torsional-coweight-data]]

[Mayrhofer–Morrison–Till–Weigand, §3.3](https://arxiv.org/pdf/1405.3656v2)

[Morrison–Park, §§1 and 3.1](https://arxiv.org/pdf/1208.2695v2)

[Weigand, §§7.1–7.7](https://arxiv.org/pdf/1806.01854v1)

[Knapp, Chapter IV, §5](https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf)

## Facts & Assumptions

**Given:** A specified resolved sectioned elliptic fibration, its actual free and torsion Mordell–Weil subgroup, a codimension-one Lie algebra supported in the exact scope of the adopted 7-brane dictionary, and the realized matter weights.

[A1] In the specified model the Mordell–Weil group is assumed finitely generated, and its free rank and torsion subgroup are computed. The model must also compute its Shioda data, supply the identification of selected Shioda classes with full root-data classes $\gamma_T$, and determine every relevant matter representation and weight. The definition of $\chi_{\mathfrak g}$ places the selected subgroup $Z$ in $Z(\widetilde G)$; the model-specific quotient condition is the separate check $\rho_R(z)=I_{V_R}$ for every realized representation $R$ and every $z\in Z$. Finite generation and the identification of the selected classes with the F-theory quotient are model hypotheses, not consequences of the Lie-algebra label.

[F1] [[def-f4-elliptic-fibration-with-section]]: “The **Mordell–Weil group** is the abelian group $E(K(B))$, equivalently the group of rational sections with these operations performed on the generic fiber.” The supplier's full AC convention is inherited and its current readiness is escalated for a missing/stale group-law readiness input.

[F2] [[post-f4-sevenbrane-monodromy-and-codimension-one-gauge]]: “This is a physical dictionary layered on a conditional mathematical fiber classification. It identifies a Lie algebra, not the global form of the gauge group; it does not imply a particular matter spectrum or a compact global vacuum.” Its local Kodaira clause remains conditional on the exact projective transverse-slice and supplied-minimal-model hypotheses.

[F3] [[def-f4-shioda-map-and-torsional-coweight-data]]: Under its stated finite-type simply-laced Cartan and intersection hypotheses, a finite-order section $T$ gives $\lambda_T\in P^\vee_{\mathrm{Sh}}$ and the Shioda coweight class $[\lambda_T]_{\mathrm{Sh}}\in P^\vee_{\mathrm{Sh}}/Q^\vee_{\mathrm{Sh}}$. The helper proves the matrix pairing identities but neither supplies the model-specific embedding into the full gauge root datum nor asserts that the section-to-class assignment is a group homomorphism or makes a physical quotient claim.

[A2] Knapp, Chapter IV, §5, Theorem 4.36 states that every element of a compact connected Lie group is conjugate to an element of a maximal torus; Corollary 4.47 deduces that every central element lies in every maximal torus. These are the only external compact-Lie-group facts needed to identify the full center in the preceding root-space argument.

## Status

Mayrhofer–Morrison–Till–Weigand §3.3 argue in specified resolved models that torsional Shioda data give a fractional Cartan coweight, integral pairings with realized matter weights, and, by exponentiation, a central subgroup whose trivial action licenses a quotient of the simply connected cover; their discussion also separates spectator gauge factors. This is an adopted source-backed F-theory dictionary, not a deduction from the codimension-one Lie algebra alone. Morrison–Park's detailed source model is a six-dimensional elliptically fibered Calabi–Yau threefold; that example is not generalized into a universal six- or four-dimensional spectrum theorem. Weigand §7.7 treats the purely non-abelian case first and explains that free $U(1)$ factors can mix into the full quotient, so no direct-product assertion is made. Current elliptic-fibration and codimension-one supplier readiness remains open for this consumer.

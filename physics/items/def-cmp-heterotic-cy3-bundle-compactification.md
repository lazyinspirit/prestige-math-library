---
id: def-cmp-heterotic-cy3-bundle-compactification
kind: definition
title: Perturbative heterotic Calabi–Yau bundle compactification data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 8
deps:
  - def-cmp-calabi-yau-threefold-compactification-data
  - def-gts-kahler-class-canonical-bundle-and-ricci-form
  - def-cmp-heterotic-associated-vector-bundle
  - def-cmp-heterotic-slope
  - post-heterotic-green-schwarz-bianchi-and-anomaly-cancellation
  - post-heterotic-type-i-ten-dimensional-n1-supergravity-action
dependency_roles:
  def-cmp-calabi-yau-threefold-compactification-data: formulation-prerequisite
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
  def-cmp-heterotic-associated-vector-bundle: mathematical-premise
  def-cmp-heterotic-slope: mathematical-premise
  post-heterotic-green-schwarz-bianchi-and-anomaly-cancellation: physical-assumption
  post-heterotic-type-i-ten-dimensional-n1-supergravity-action: physical-assumption
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Philip S. Candelas, Gary T. Horowitz, Andrew Strominger, and Edward Witten, Vacuum Configurations for Superstrings"
      url: "https://ooguri.caltech.edu/documents/31340/Candelas_Horowitz_Strominger_Witten.pdf"
      locator: "Introduction and §4, journal pp. 47–49 and 62–65 (PDF pp. 2 and 17–20): large-radius bundle compactification and standard embedding."
    - title: "Angel M. Uranga, String Theory: A Graduate Course, Lecture 9: Calabi–Yau compactification and Heterotic String phenomenology"
      url: "https://members.ift.uam-csic.es/auranga/lect13.pdf"
      locator: "PDF pp. 16–23: bundle connections, HYM equations, standard embedding, E8 branching, and the index convention."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Conditional weakly coupled, large-radius heterotic supergravity data on a smooth compact Kähler threefold. This is not an HYM existence theorem, a full backreacted solution, or an all-orders string vacuum."
---

## Definition

Let $X$ be a smooth, connected, compact complex threefold (complex dimension three) with complex structure $J$, specified Kähler form $\omega$, nowhere-zero holomorphic three-form $\Omega\in H^0(X,K_X)$, complex orientation, and integral-cohomology convention. Let $G_{\mathrm{het}}$ be one chosen heterotic gauge group, either $E_8\times E_8$ or $\operatorname{Spin}(32)/\mathbb Z_2$. Fix a compact Lie group $H$, meaning a compact finite-dimensional smooth manifold with smooth group multiplication and inversion, and write $\mathfrak h$ for its real Lie algebra. Choose a complex Lie group $H_{\mathbb C}$ as defined in `def-cmp-heterotic-associated-vector-bundle`, with Lie algebra $\mathfrak h\otimes_{\mathbb R}\mathbb C$, and an injective smooth homomorphism $j_H:H\to H_{\mathbb C}$ with closed image such that $d j_H(\mathfrak h)$ is a real Lie subalgebra whose complexification is $\mathfrak h\otimes_{\mathbb R}\mathbb C$. Let $G_{\mathrm{het},\mathbb C}$ be a chosen complex Lie group, with an injective smooth homomorphism $j_G:G_{\mathrm{het}}\to G_{\mathrm{het},\mathbb C}$ having closed image whose Lie algebra complexifies to that of $G_{\mathrm{het},\mathbb C}$. Fix injective homomorphisms $\iota:H\to G_{\mathrm{het}}$ and $\iota_{\mathbb C}:H_{\mathbb C}\to G_{\mathrm{het},\mathbb C}$, with $\iota_{\mathbb C}$ holomorphic and $\iota_{\mathbb C}\circ j_H=j_G\circ\iota$. A holomorphic principal $H_{\mathbb C}$-bundle $P\to X$ is specified by an open cover $(U_i)_{i\in I}$ and holomorphic transition maps $g_{ij}:U_i\cap U_j\to H_{\mathbb C}$ satisfying $g_{ii}=e$ and $g_{ij}g_{jk}=g_{ik}$; these maps glue the local products $U_i\times H_{\mathbb C}$ using the right group action. A **compact $H$ reduction** is a principal $H$-subbundle $P_H\subset P$ whose extension of structure group to $H_{\mathbb C}$ is $P$. For each selected finite-dimensional holomorphic representation $\rho_R:H_{\mathbb C}\to\mathrm{GL}_{\mathbb C}(W_R)$, define $V_R$ by the associated-bundle construction in `def-cmp-heterotic-associated-vector-bundle`. A **perturbative heterotic Calabi–Yau bundle compactification datum** consists of $(X,J,\omega,\Omega,P)$, the representation and gauge-group embedding, and an explicitly supplied smooth principal connection $A$ on $P_H$. Require compatibility with the specified holomorphic bundle $P$: if $A_{\mathbb C}$ is the extended connection on $P$, its local connection form in every supplied holomorphic trivialization has $(0,1)$ part zero. Equivalently its induced $(0,1)$ covariant derivative is the given holomorphic structure; in every selected representation this requires $\bar\partial_{A_R}=\bar\partial_{V_R}$, where $A_R$ is the induced connection on $V_R$. In the declared matrix representation its local connection form has curvature $F_A=dA+A\wedge A$; via $\iota$ regard $A$ and $F_A$ as fields in the chosen heterotic gauge algebra, and evaluate the gauge trace in its declared representation. The connection satisfies the Hermitian–Yang–Mills equations $F_A^{0,2}=0$ and $\omega^2\wedge F_A=0$ entrywise in the declared normalization. A supplied smooth internal three-form $H_3\in\Omega^3(X)$ defines the tangent connection
$$\nabla^+_M V^N=\nabla^{\mathrm{LC}}_M V^N+\tfrac12(H_3)_M{}^N{}_P V^P,$$
whose curvature is denoted $R_+$. These data satisfy the local source-free Green–Schwarz relation
$$dH_3=\frac{\alpha'}4\left(\operatorname{Tr}_H(F_A\wedge F_A)-\operatorname{tr}_H(R_+\wedge R_+)\right).$$
The traces, field basis, perturbative order in $\alpha'$, weak-coupling and large-radius regime, dilaton and frame, warping ansatz, and localized-source data are declared inputs; the displayed Bianchi identity is source-free on the stated patch. In the natural-unit convention with length-valued coordinates, $[\alpha']=\mathrm{length}^2$, the connection components have dimension $\mathrm{length}^{-1}$, the curvature components have dimension $\mathrm{length}^{-2}$, and $H_3$ components have dimension $\mathrm{length}^{-1}$, so each term in $dH_3$ has component dimension $\mathrm{length}^{-2}$. For a rank-$r>0$ holomorphic bundle $E$, use $\mu_\omega(E)=r^{-1}\deg_\omega(E)$ with the slope convention of `def-cmp-heterotic-slope`. Stability is not substituted for an HYM connection, and this local source-free Bianchi identity does not supply global anomaly cancellation. The heterotic branch is distinct from the Type-I branch; this definition does not infer S-duality.

## Definition references

[[def-cmp-calabi-yau-threefold-compactification-data]]

[[def-gts-kahler-class-canonical-bundle-and-ricci-form]]

[[def-cmp-heterotic-associated-vector-bundle]]

[[def-cmp-heterotic-slope]]

[[post-heterotic-green-schwarz-bianchi-and-anomaly-cancellation]]

[[post-heterotic-type-i-ten-dimensional-n1-supergravity-action]]

## Facts & Assumptions

**Given:** The geometric datum of [[def-cmp-calabi-yau-threefold-compactification-data]], a holomorphic principal bundle and its fixed gauge-group embedding, a specified representation connection, and a chosen perturbative regime.

[F1] [[def-cmp-calabi-yau-threefold-compactification-data]] supplies a smooth connected compact complex threefold $X$, a Kähler class $[J]$, a chosen canonical trivialization, orientation, and declared integral conventions. This Definition additionally supplies a particular Kähler representative $\omega$ of that class. Here $J$ denotes the complex structure and $\omega$ the form, following [[def-gts-kahler-class-canonical-bundle-and-ricci-form]]. The broad Calabi–Yau datum alone does not select this representative or imply exact $SU(3)$ holonomy.

[F2] [[def-cmp-heterotic-associated-vector-bundle]] constructs $V_R$ from the principal-bundle cocycle and the chosen representation.

[F3] [[def-cmp-heterotic-slope]] fixes the $\omega$-slope $\mu_\omega(E)=r^{-1}\deg_\omega(E)$; no stability implication is used here.

[F4] [[post-heterotic-type-i-ten-dimensional-n1-supergravity-action]] adopts separate heterotic and Type-I branches and assigns the heterotic tree-level gauge and closed-sector terms the multiplier $e^{-2\Phi_H}$. It does not provide every component coefficient or trace conversion.

[F5] [[post-heterotic-green-schwarz-bianchi-and-anomaly-cancellation]] adopts the local source-free heterotic relation $dH_3=(\alpha'/4)(\operatorname{Tr}_H F\wedge F-\operatorname{tr}_H R_H\wedge R_H)$ in its declared trace convention; it makes no global or sourced assertion.

[A1] The connection, trace conversion, order in $\alpha'$, fluxes, sources and control regime are model data. Neither the existence of an HYM connection nor a solution of all ten-dimensional field equations follows from the topological bundle alone.

## Proof

**Given:** The geometric, bundle, connection, source, trace, and regime data specified in the Definition, together with [F1]–[F5] and [A1].

1.1 By [F1] and [F2], the geometric base and each representation bundle are defined, while [F3] fixes the slope convention without imposing stability. Compatibility makes the induced $(0,1)$ covariant derivative equal to the holomorphic structure used to glue each $V_R$. Requiring an actual supplied compatible connection satisfying both displayed HYM equations is strictly data about that connection; no existence claim is needed to formulate the datum. [given, F1, F2, F3, A1]

2.1 The displayed equation on $X$ is an independently imposed condition on the internal datum, in the coefficient and trace convention motivated by the heterotic branch [F4]–[F5]. The ten-dimensional postulate [F5] alone does not derive this internal equation: a derivation by restriction would additionally require a specified embedding into its ten-dimensional domain, compatible field pullbacks, and identification of the tangent connection and traces. No such restriction or solution of ten-dimensional field equations is asserted here. The source-free internal equation and the declared perturbative order, warping, source and regime data are required inputs under [A1]; neither a trace conversion nor global anomaly cancellation follows from them. [given, F4, F5, A1, step 1.1] ∎

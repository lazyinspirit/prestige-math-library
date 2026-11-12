---
id: rem-adjudicate-d41ca2ed9e5e-euler-comparison-status
kind: remark
title: Euler-group comparison and the article's expectation
status: published
domain: mathematics
deps:
  - def-euler-class-group-presentation
  - def-smooth-point-filtration
  - lem-affine-perfect-k-zero-bridge
  - math:def-axiom-of-choice
  - def-levine-weibel-zero-cycles
  - rem-levine-weibel-cycle-image
  - lem-author-3a003d7b5208-affine-bundle-split-group
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  def-euler-class-group-presentation: mathematical-premise
  def-smooth-point-filtration: mathematical-premise
  lem-affine-perfect-k-zero-bridge: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-levine-weibel-zero-cycles: mathematical-premise
  rem-levine-weibel-cycle-image: mathematical-premise
  lem-author-3a003d7b5208-affine-bundle-split-group: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds,
        arXiv:2610.22679v1
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF pp. 2–3, Theorem C and following Euler-group expectation
      statement: The article expects a further appropriate Euler-group identification
        and an Euler-class interpretation of its rank-three splitting criterion,
        referring to Krishna and Schlichting.
      hypotheses: The article normal affine threefold setting over an algebraically
        closed field.
      reading_limits: Read the supplied article text on PDF pp. 2–3, including Theorem
        C, the following expectation, and the finite-type affine convention.
        This records historical context only; no present-status claim about
        determinant-twisted Schlichting groups or their obstruction maps is
        made.
    - title: Krishna, Murthy’s conjecture on 0-cycles, arXiv:1511.04221v3, 18 March
        2019
      url: https://arxiv.org/html/1511.04221v3
      locator: Section 1.1, height-d smooth maximal ideals and classical K_0; Section
        2.1, opening component convention, quotient (2.1) and cycle map (2.2);
        Section 7 opening field convention; Definition 7.1; Corollary 7.6;
        Theorem 7.7 and its proof (PDF p. 34).
      statement: Section 2.1 defines the source-convention zero-cycle quotient and its
        residue-class cycle map. Definition 7.1 defines E(A). Corollary 7.6
        identifies the quotient with the height-d smooth-point subgroup of
        classical K_0(A), and Theorem 7.7 canonically identifies E(A) with that
        quotient.
      hypotheses: "For both comparison isomorphisms: a reduced finitely generated
        commutative algebra A of dimension d >= 2 over an algebraically closed
        field of any characteristic. Section 2.1 uses the smooth loci of the
        d-dimensional components, not additional smooth points of smaller
        components. Its general cycle construction assumes a reduced
        quasi-projective scheme over a perfect field."
      reading_limits: Read the actual versioned HTML Section 1.1 point-subgroup
        convention; Section 2 opening and Section 2.1 through (2.2); Section 7
        opening, Definition 7.1, Lemmas 7.3–7.4 and the statements and displayed
        proofs of Corollary 7.6 and Theorem 7.7. Only the definition and
        comparison interfaces are imported here. Their cited Bertini,
        cancellation, torsion and moving results are not reconstructed or
        independently audited. No current-status review of other Euler theories
        is claimed.
dependency_level: 26
formulation_deps:
  - def-euler-class-group-presentation
  - def-smooth-point-filtration
  - lem-affine-perfect-k-zero-bridge
  - math:def-axiom-of-choice
  - def-levine-weibel-zero-cycles
  - lem-author-3a003d7b5208-affine-bundle-split-group
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - def-euler-class-group-presentation
  - def-smooth-point-filtration
  - lem-affine-perfect-k-zero-bridge
  - math:def-axiom-of-choice
  - def-levine-weibel-zero-cycles
  - rem-levine-weibel-cycle-image
  - lem-author-3a003d7b5208-affine-bundle-split-group
  - math:def-grothendieck-universe-closure-convention
proof_strategy: direct
---

## Remark
Assume AC and the fixed compatible universe conventions. The article's expectation of an appropriate Euler-group description and an interpretation of rank-three splitting is retained as historical mathematical context. Its concrete candidate, the oriented-ideal group $E(A)$, is already covered by Krishna's established comparison: for a reduced finite-type algebra $A$ of dimension $d\geq2$ over an algebraically closed field,
$$E(A)\cong\operatorname{CH}^{d}_{\mathrm{LW}}(A)\xrightarrow{\sim}F^{d}_{\mathrm{sm,ht}}K_0^{\mathrm{proj}}(A).$$
Here $K_0^{\mathrm{proj}}(A)$ is the group on isomorphism classes of finite projective modules with relations $[P\oplus Q]=[P]+[Q]$, and the last subgroup is generated by the classical classes of $A/\mathfrak m$ for smooth maximal ideals of height $d$. The middle group uses Krishna's precise top-dimensional convention from §2.1, recorded below, and the second arrow is his actual cycle map (2.2). Thus this specific group-comparison candidate must not be labelled an unresolved problem.

For a pure-dimensional normal affine threefold $X=\operatorname{Spec}A$, the middle group identifies with the local intrinsic-smooth-locus group $\operatorname{CH}^{LW}_0(X)$. The canonical affine comparison identifies the last subgroup with the completed smooth-point subgroup $F^3_{\mathrm{sm}}K_0(X)$, with each point sent to its actual perfect residue-sheaf class. If components have different dimensions, retain the source height-three convention rather than adding smooth points of smaller components.

The original request to specify an Euler group, the actual comparison, its hypotheses and its compatibility with the rank-three splitting obstruction is preserved here. The cited group isomorphisms supply the comparison part for the explicit candidate. This remark neither verifies a determinant-twisted Schlichting comparison nor asserts a new unresolved formulation or a new proof of obstruction compatibility.

## Remark references
[[def-euler-class-group-presentation]]

[[def-levine-weibel-zero-cycles]]

[[def-smooth-point-filtration]]

[[lem-author-3a003d7b5208-affine-bundle-split-group]]

[[lem-affine-perfect-k-zero-bridge]]

[[rem-levine-weibel-cycle-image]]

[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

## Facts & Assumptions
**Given:** The algebra and field hypotheses in the Remark; AC and compatible universes. The completed threefold application additionally assumes normality and pure dimension three.

[A1] The assumed Axiom of Choice is inherited from the Euler presentation, smooth-point support and filtration, and affine perfect-category constructions. It is used in the supplied interfaces in both steps below; no intrinsic necessity of Choice for Krishna's group comparison is asserted. Suitable universes have the closure convention of [[math:def-grothendieck-universe-closure-convention]]; their existence with the required containment is assumed separately from [[math:def-axiom-of-choice]].

[F1] [[def-euler-class-group-presentation]] supplies $E(A)$ with the same orientations and globally lifted relations as Krishna's Definition 7.1. [[lem-author-3a003d7b5208-affine-bundle-split-group]] supplies the finite-projective split-group presentation and its canonical associated-sheaf isomorphism to the vector-bundle group. [[lem-affine-perfect-k-zero-bridge]] then identifies that group with perfect $K_0(X)$ and sends a bounded projective complex's Euler class to its perfect-complex class under the inverse comparison.

[F2] [[def-levine-weibel-zero-cycles]] supplies the intrinsic-smooth-locus Cartier-curve quotient on pure-dimensional schemes. In the normal affine threefold setting, [[rem-levine-weibel-cycle-image]] identifies it with the source quotient and supplies the residue-class cycle map, relation-vanishing and actual point normalization $[x]\mapsto[i_*\kappa(x)]=\varphi_x(1)$. Its component convention also handles lower-dimensional clopen components. [[def-smooth-point-filtration]] defines $F^3_{\mathrm{sm}}K_0(X)$ using precisely these point classes. The cycle-image supplier verifies the normal, finite-type and perfect-field hypotheses needed for this application.

[F3] The imported inputs are Krishna's source-convention quotient and cycle map in §2.1, and his Corollary 7.6 and Theorem 7.7, with exactly the hypotheses and reading limits in the second source reference. They assert both isomorphisms in the first display; they do not identify a rank-three splitting obstruction in the completed theory.

## External input
For general reduced $A$, the notation $\operatorname{CH}^{d}_{\mathrm{LW}}(A)$ in this remark means Krishna's $\operatorname{CH}^{d}(\operatorname{Spec}A)$ of §2.1, equation (2.1). His regular-point convention takes the disjoint union of the smooth loci of the $d$-dimensional irreducible components. Put $Y=X_{\mathrm{sing}}$ in that convention. Start with finite integer cycles outside $Y$ and quotient by sums of component principal divisors of functions invertible near $C\cap Y$ and the generic points of $C$. Here $C$ ranges over reduced, purely one-dimensional closed curves with no component in $Y$, locally cut out by a regular sequence at $C\cap Y$. These are the source's Cartier-curve relations. The cycle map (2.2) sends each allowed point to its classical residue-module class. The existence and descent of that map are imported, not proved here for general singular schemes.

Corollary 7.6 and Theorem 7.7 give the two comparison isomorphisms for reduced finite-type algebras of dimension at least two over algebraically closed fields. The local Euler presentation is Definition 7.1. In the normal pure-dimensional threefold application, the source quotient is the local quotient and the source point class transports to the completed perfect residue class by [F1] and [F2]. No identification of coherent G-theory with perfect K-theory is used. The following argument is only this local composition of supplied interfaces; Krishna's substantial comparison proofs remain imported.

## Justification
1.1 Under the reduced finite-type, algebraically closed and $d\geq2$ hypotheses, [F1] identifies the locally defined Euler group with the input of [F3]. Use exactly the source quotient and cycle-map convention in [F3], without replacing its point locus by the smooth points of smaller components. Theorem 7.7 followed by Corollary 7.6 therefore gives the displayed canonical comparison, whose second arrow is (2.2). This is an application of the two imported isomorphisms, not a reconstruction of their proofs. [A1, F1, F3, given]

2.1 In the normal pure-dimensional threefold case, [F2] identifies the source quotient with the local Levine–Weibel group and supplies its perfect cycle map with the same residue-class generators. Compose the associated-sheaf isomorphism and inverse perfect bridge in [F1] to obtain an isomorphism from $K_0^{\mathrm{proj}}(A)$ to $K_0(X)$. By the actual point-class compatibility in [F2], this composite sends each classical $[A/\mathfrak m]$ to $[i_*\kappa(x)]$. Its restriction to the subgroup generated by these classes is injective, and its image is exactly the subgroup generated by their perfect residue classes, namely $F^3_{\mathrm{sm}}K_0(X)$ by [F2]. This proves the completed identification and its compatibility with the cycle map in step 1.1. In the normal nonpure case, [F2] retains only the three-dimensional clopen part for the height-three convention, as asserted. [A1, F1, F2, step 1.1] ∎

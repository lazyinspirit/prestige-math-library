---
id: thm-number-field-global-class-formation
kind: theorem
title: "The idèle classes of a number field define a global class formation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - def-class-formation
  - def-absolute-galois-group-of-a-global-field
  - def-global-idele-class-module-for-galois-group
  - lem-number-field-discrete-idele-cohomology-and-local-invariants
  - lem-number-field-absolute-multiplicative-galois-h3-vanishes
  - thm-global-brauer-hasse-noether-exact-sequence-number-field
  - lem-finite-galois-obstruction-brauer-cohomology-comparison
  - thm-fundamental-theorem-of-finite-galois-theory
  - thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: >-
  The original AC, Countable Choice and DC hypotheses are retained for actual
  restricted-product, finite Shapiro, embedding and ordinary/continuous
  cohomology constructions. The number-field idelic H2 row and absolute
  multiplicative H3 vanishings are supplied, including real dyadic terms.
  No finite noncyclic H3 vanishing or stronger unqualified Brauer comparison
  is inferred.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VII §§2, 5–6, global idèle-class cohomology and the second inequality; printed pp.202–215."
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Chapter I §1, Example 1.6(c), and the global field class-formation framework."
    - title: "Romyar Sharifi, Algebraic Number Theory, Chapter 10, Global class field theory via idèles"
      url: "https://math.ucla.edu/~sharifi/notes/algnum-ch10.html"
      locator: "§§10.6–10.9: idèle cohomology, first and second inequalities, and global invariants."
verification:
  precheck: n/a
---

## Statement

Assume the Axiom of Choice, the Axiom of Countable Choice, and the Axiom of Dependent Choice. Let $F$ be a number field, let $F_s$ be a separable closure, and put $G_F=\operatorname{Gal}(F_s/F)$. Let $C_F^{\mathrm{disc}}$ be the direct-limit idèle-class module: it is $\varinjlim_{E/F\subset F_s} C_E$, where $C_E=\mathbb A_E^\times/E^\times$ and transitions come from the local embeddings for finite field extensions; $G_F$ acts by transporting a representative at $E$ to its image at $gE$. For each open subgroup $U\le G_F$, the class-formation invariant is normalized by the sum of the normalized local Brauer invariants. Then $(G_F,C_F^{\mathrm{disc}})$ is a class formation: $H^1_{\mathrm{cont}}(U,C_F^{\mathrm{disc}})=0$, each invariant $H^2_{\mathrm{cont}}(U,C_F^{\mathrm{disc}})\to\mathbb Q/\mathbb Z$ is an isomorphism, and restriction between open subgroups scales the invariant by the subgroup index.

## Statement references

[[def-class-formation]]

[[def-global-idele-class-module-for-galois-group]]

[[lem-number-field-discrete-idele-cohomology-and-local-invariants]]

[[lem-number-field-absolute-multiplicative-galois-h3-vanishes]]

[[thm-global-brauer-hasse-noether-exact-sequence-number-field]]

[Milne, Class Field Theory, ChapterVII2](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** Exactly AC, Countable Choice and DC, the number field, separable closure, discrete direct-limit module and normalization in the original Statement.

[F1] A class formation requires zero $H^1$ on every open subgroup, invariant isomorphisms on $H^2$ to $\mathbb Q/\mathbb Z$, and restriction scaling by the open-subgroup index. [[def-class-formation]]

[F2] The actual coefficient sequence is $1\to F_s^\times\to J\to C_F^{\mathrm{disc}}\to1$ with discrete continuous action. For every finite $E/F$, $H^1(G_E,J)=0$ and $H^2(G_E,J)$ is the direct sum of actual local Brauer groups: finite coordinates $\mathbb Q/\mathbb Z$, real coordinates $\frac12\mathbb Z/\mathbb Z$, complex coordinates zero. Its global map is actual Brauer localization and restriction scales each coordinate by local degree. [[def-global-idele-class-module-for-galois-group]] [[lem-number-field-discrete-idele-cohomology-and-local-invariants]]

[F3] For every finite $E/F$ in the closure, $H^3(G_E,F_s^\times)=0$ under the public choice hypotheses. Its proof treats primary cyclotomic towers and the real dyadic signature module, and makes no finite noncyclic $H^3$ vanishing claim. [[lem-number-field-absolute-multiplicative-galois-h3-vanishes]]

[F4] The completed BHN sequence identifies the kernel of the sum of local invariants with the global Brauer image, and its sum is onto $\mathbb Q/\mathbb Z$. The actual absolute comparison is supplied under the same AC/DC hypotheses; no unqualified comparison is needed. [[thm-global-brauer-hasse-noether-exact-sequence-number-field]] [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F5] Finite Galois correspondence gives fixed fields and subgroup indices, and under AC the restriction of the absolute Galois group to a finite Galois subextension is onto. The absolute topology uses these finite kernels. [[thm-fundamental-theorem-of-finite-galois-theory]] [[thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective]] [[def-absolute-galois-group-of-a-global-field]]

[A1] AC, Countable Choice and DC are exactly the original public hypotheses. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Let $U$ be any open subgroup of $G_F$. Choose a finite Galois $T/F$ with $G_T\subseteq U$, use the quotient $\operatorname{Gal}(T/F)$, and put $E=T^{U/G_T}$. By [F5], $U=G_E$. For open $V\subseteq U$, a common finite Galois level likewise gives $V=G_{E'}$ with $E\subseteq E'$ and $[U:V]=[E':E]$, even if $E'/E$ is not normal. These are finite-quotient calculations, not inclusions of finite quotients into absolute groups. [A1, F5, given, construct, algebra]

2.1 Apply continuous cohomology to the actual coefficient sequence in [F2]. Its cochains are termwise onto under a quotient: a continuous normalized cochain on the compact group has finite image, so choose one lift for each nonzero image value and the zero lift at zero, constant on its clopen fibres. This gives the actual coefficient long exact sequence. For $U=G_E$, its relevant segment is
$$0\longrightarrow H^1(U,C_F^{\mathrm{disc}})\longrightarrow H^2(U,F_s^\times)
\longrightarrow H^2(U,J)\longrightarrow H^2(U,C_F^{\mathrm{disc}})\longrightarrow0.$$
Its initial zero is [F2], its terminal zero is the proved absolute multiplicative vanishing [F3]. By [F2]–[F4] the middle arrow is precisely injective Brauer localization. Hence $H^1(U,C_F^{\mathrm{disc}})=0$ and $H^2(U,C_F^{\mathrm{disc}})$ is its actual cokernel. [A1, F2, F3, F4, step 1.1, construct, algebra]

3.1 By [F4], the sum of normalized local invariants identifies this cokernel with $\mathbb Q/\mathbb Z$. Define $\operatorname{inv}_U$ by the induced map. It is well defined and bijective: changing an idelic lift changes it by a global Brauer localization with sum zero, and step 2.1 supplies an idelic lift for every class. This constructs exactly the invariant normalization in the original Statement, rather than choosing an unrelated abstract isomorphism. [F2, F4, step 2.1, construct, algebra]

4.1 For $V=G_{E'}\subseteq G_E=U$, use any finite-support idelic lift from step 2.1. By [F2], restriction sends a local invariant $a_v$ to $[E'_w:E_v]a_v$ at each $w\mid v$. The relative tensor degree identity, including real/complex factors, gives $\sum_{w\mid v}[E'_w:E_v]=[E':E]$. Summing its finite support yields
$$\operatorname{inv}_V\operatorname{Res}_{V,U}=[E':E]\operatorname{inv}_U=[U:V]\operatorname{inv}_U.$$
This is independent of the chosen lift by the zero-sum global Brauer row at both fields. Together with steps 2.1–3.1 it verifies every class-formation clause in [F1], with all original hypotheses and real-place conventions retained. [F1, F2, F4, step 1.1, step 2.1, step 3.1, algebra] ∎

## Completion scope

The two previously missing constructions are now explicit suppliers: the actual number-field discrete-idelic degree-two row and restriction naturality, and absolute multiplicative degree-three vanishing with the dyadic real-signature contribution. Their proofs use the completed finite local/BHN inputs and primary cyclotomic towers; no full global class-formation theorem was assumed as an input. The original Statement is unchanged.

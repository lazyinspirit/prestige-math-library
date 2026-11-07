---
id: thm-function-field-global-class-formation-finite-constants
kind: theorem
title: The idèle classes of a function field over a finite field define a class formation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
- def-global-field
- def-absolute-galois-group-of-a-global-field
- def-idele-class-group-of-a-global-field
- def-global-idele-class-module-for-galois-group
- def-class-formation
- def-jacobian-of-smooth-proper-curve
- thm-picard-zero-represented-by-jacobian
- thm-lang-vanishing-for-smooth-connected-group-over-finite-field
- thm-global-function-field-brauer-hasse-sequence
- lem-function-field-discrete-idele-cohomology-and-local-invariants
- lem-function-field-absolute-multiplicative-galois-h3-vanishes
- lem-finite-galois-obstruction-brauer-cohomology-comparison
- thm-curves-function-fields-equivalence
- thm-fundamental-theorem-of-finite-galois-theory
- thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective
- lem-regular-local-domain-induction
- thm-regular-equals-smooth-over-perfect-field
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
proof_strategy: direct
axiom_use: The original Statement choice assumptions are retained. AC implies DC and Countable
  Choice when an invoked supplier states them; ordinary/complete-resolution data are used exactly
  in the untensored Tate–Nakayama application.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, second edition
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
    locator: AppendixA.7–A.11, printed131–135, full relevant passages read. Source assertions
      of cd2/global comparison are replaced by the explicit local reconstruction and the bound
      suppliers.
  - title: J. S. Milne, Class Field Theory, version4.03
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: ChapterVII2 Propositions2.2–2.6, printed203–207, full actual finite-idelic/norm
      proofs read; ChapterII3 untensored Tate–Nakayama is used through its separately proved
      scoped library corollary. No global CFT theorem imported.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. Let $k=\mathbb F_q$, let $C/k$ be a smooth proper geometrically connected curve, and let $F=k(C)$, so that $k$ is the exact constant field of $F$. Let $F_s$ be a separable closure and $G_F=\operatorname{Gal}(F_s/F)$. Let $C_F^{\mathrm{disc}}$ be the direct-limit idèle-class module: it is $\varinjlim_{E/F\subset F_s}C_E$, where $C_E=\mathbb A_E^\times/E^\times$ and transitions come from the local embeddings for finite field extensions; $G_F$ acts by transporting a representative at $E$ to its image at $gE$. For each open subgroup $U\le G_F$, the class-formation invariant is normalized by the sum of the normalized local Brauer invariants. Then $(G_F,C_F^{\mathrm{disc}})$ is a class formation: $H^1_{\mathrm{cont}}(U,C_F^{\mathrm{disc}})=0$, each invariant $H^2_{\mathrm{cont}}(U,C_F^{\mathrm{disc}})\to\mathbb Q/\mathbb Z$ is an isomorphism, and restriction between open subgroups scales the invariant by the subgroup index.

## Statement references

[[def-global-field]]

[[def-absolute-galois-group-of-a-global-field]]

[[def-idele-class-group-of-a-global-field]]

[[def-global-idele-class-module-for-galois-group]]

[[def-class-formation]]

[[def-jacobian-of-smooth-proper-curve]]

[[thm-picard-zero-represented-by-jacobian]]

[[thm-lang-vanishing-for-smooth-connected-group-over-finite-field]]

[[thm-global-function-field-brauer-hasse-sequence]]

[Milne, Arithmetic Duality Theorems, Appendix A.7–A.9](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Milne, Class Field Theory, Chapter II §3](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** Exactly the field, curve, separable closure, module and AC, Countable Choice and DC in the original Statement.

[F1] A class formation requires open-subgroup $H^1$ vanishing, invariant isomorphisms to $\mathbb Q/\mathbb Z$ and restriction scaling by the open-subgroup index. [[def-class-formation]]

[F2] The actual discrete idelic exact sequence has injective finite stage maps. For every finite $E/F$ in $F_s$, its idelic module $J$ has $H^1(G_E,J)=0$, $H^2(G_E,J)=\bigoplus_v\mathbb Q/\mathbb Z$, the global map is actual Brauer localization and restriction multiplies each local coordinate by $[E'_w:E_v]$. Fixed class modules are $C_E$.
[[def-global-idele-class-module-for-galois-group]]
[[lem-function-field-discrete-idele-cohomology-and-local-invariants]]

[F3] For every such $E$, the absolute group $H^3(G_E,F_s^\times)$ is zero. This is not finite noncyclic $H^3$ vanishing.
[[lem-function-field-absolute-multiplicative-galois-h3-vanishes]]

[F4] For every global function field with finite exact constants and its smooth proper geometrically integral model, the actual Brauer localization sequence is exact, with cokernel the sum of normalized local invariants in $\mathbb Q/\mathbb Z$. Standard Brauer comparison is natural.
[[thm-global-function-field-brauer-hasse-sequence]]
[[lem-finite-galois-obstruction-brauer-cohomology-comparison]]
[[thm-curves-function-fields-equivalence]]

[F5] Finite Galois correspondence and the AC surjectivity of the absolute finite restriction map identify finite fixed fields and their indices. The absolute topology has finite Galois kernels as a neighborhood basis.
[[thm-fundamental-theorem-of-finite-galois-theory]]
[[thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective]]
[[def-absolute-galois-group-of-a-global-field]]

[F6] Under AC, a finite-type smooth scheme over a perfect field is regular; a regular local ring is a domain. [[lem-regular-local-domain-induction]]
[[thm-regular-equals-smooth-over-perfect-field]]

[A1] AC, Countable Choice and DC are retained literally. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** actual absolute idelic cohomology sequence and the Brauer sum row, uniformly over finite fixed fields.

**Given:** The data above. Denote the Statement's discrete class module by $C$.

1.1 The given smooth geometrically connected curve is geometrically integral. Over an algebraic closure its local rings are regular, hence domains by [F6]; it is reduced, its finitely many irreducible components cannot meet, and those components are therefore open and closed. Connectedness forces exactly one. Thus the curve and exact finite constants have the hypotheses of [F2–F4]. Each finite intermediate $E$ likewise has finite exact constants and its own smooth proper geometrically integral model, as proved in [F3]. [A1, F2, F3, F4, F6, given, algebra]

1.2 Let $U$ be any open subgroup of $G_F$. Choose a finite Galois $T/F$ with $G_T\subset U$. In the finite quotient put $H=U/G_T$ and $E=T^H$. Finite correspondence and the onto restriction map in [F5] give $U=G_E$. If $V\subset U$ is open, a common finite Galois level gives $V=G_{E'}$ with $E\subset E'$ and $[U:V]=[E':E]$, even if $E'/E$ is not normal. These assertions follow in the finite quotient, rather than treating a finite quotient as an absolute subgroup. [A1, F5, construct, algebra]

2.1 Apply continuous cohomology to $1\to F_s^\times\to J\to C\to1$. Compactness under AC gives termwise onto cochain lifts for a quotient module: its continuous cochains have finite image, so choose finitely many lifts on their clopen fibres. Thus the actual coefficient long exact sequence applies. For $U=G_E$, the relevant segment is $0\to H^1(U,C)\to H^2(U,F_s^\times)\to H^2(U,J)\to H^2(U,C)\to H^3(U,F_s^\times)$. Its initial zero is [F2], and its final group is zero by [F3]. Under actual comparison [F4] the middle arrow is precisely the injective Brauer localization row, by [F2]. Consequently $H^1(U,C)=0$ and $H^2(U,C)$ is its cokernel. [A1, F2, F3, F4, step 1.1, step 1.2, algebra]

3.1 The exact row [F4] identifies that cokernel with $\mathbb Q/\mathbb Z$ by the local sum. Define $\operatorname{inv}_U$ as this induced map. It is well defined and bijective; surjectivity of $H^2(U,J)\to H^2(U,C)$ in step 2.1 ensures its value is characterized on every class by an idelic lift. This is the stated normalized invariant, not a chosen abstract isomorphism. [F2, F4, step 2.1, construct, algebra]

4.1 For $V=G_{E'}\subset G_E=U$, naturality of the actual coefficient sequence and [F2]'s local restriction formula give, on any idelic lift, $\sum_{w\mid v}[E'_w:E_v]a_v=[E':E]a_v$. Sum over its finite support. This proves $\operatorname{inv}_V\operatorname{Res}_{V,U}=[E':E]\operatorname{inv}_U=[U:V]\operatorname{inv}_U$. It is independent of the lift because global Brauer localization has sum zero at both levels. Together with steps 2.1–3.1 this verifies every axiom [F1]. No finite noncyclic degree-three term has been discarded. [F1, F2, F4, step 1.2, step 2.1, step 3.1, algebra] ∎

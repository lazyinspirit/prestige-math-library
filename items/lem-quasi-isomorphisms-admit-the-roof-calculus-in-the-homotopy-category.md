---
id: "lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category"
kind: "lemma"
title: "Quasi isomorphisms admit the roof calculus in the homotopy category"
deps: ["def-multiplicative-system-in-a-category", "prop-quasi-isomorphisms-contain-identities-and-are-closed-under-composition", "thm-two-out-of-three-for-quasi-isomorphisms", "thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism", "thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic", "thm-the-homotopy-category-of-an-abelian-category-is-triangulated", "thm-long-exact-hom-sequences-of-a-distinguished-triangle", "thm-homology-is-a-homological-functor-on-the-homotopy-category"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05RR"
      title: "13.11.1–13.11.6"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In the cochain homotopy category $K(\mathcal A)$ of an abelian category, quasi-isomorphisms form a two-sided multiplicative system. The same assertion holds in $K^-,K^+,K^b$. These are fraction axioms; local smallness of the localization requires the separate standing size data.

## Facts & Assumptions

**Given:** In the cochain homotopy category $K(\mathcal A)$ of an abelian category, quasi-isomorphisms form a two-sided multiplicative system. The same assertion holds in $K^-,K^+,K^b$. These are fraction axioms; local smallness of the localization requires the separate standing size data.

[F1] Quasi-isomorphisms contain identities and are closed under composition ([[prop-quasi-isomorphisms-contain-identities-and-are-closed-under-composition]]).

[F2] Every chain homotopy equivalence is a quasi-isomorphism ([[thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism]]).

[F3] Homology on the homotopy category is homological; in cochain indexing this gives the long cohomology sequence ([[thm-homology-is-a-homological-functor-on-the-homotopy-category]]).

[F4] The homotopy category of an abelian category is triangulated ([[thm-the-homotopy-category-of-an-abelian-category-is-triangulated]]).

[F5] A complex map is a quasi-isomorphism exactly when its cone is acyclic ([[thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic]]).

[F6] Applying either representable Hom functor to a distinguished triangle gives an exact sequence ([[thm-long-exact-hom-sequences-of-a-distinguished-triangle]]).

[F7] A two-sided multiplicative system satisfies identities/composition, both Ore conditions, and both cancellation directions ([[def-multiplicative-system-in-a-category]]).

## Proof

1.1 Cohomology is defined on homotopy classes. Identities, composites, and shifts preserve quasi-isomorphisms, and homotopy equivalences are quasi-isomorphisms. These assertions include the zero complex. [F1, F2, F3]

1.2 For $s:X\to X'$ a quasi-isomorphism and $f:X\to Y$, take the triangle $X\xrightarrow fY\to C\xrightarrow hX[1]$. Complete $s[1]h:C\to X'[1]$ to a triangle $X'\xrightarrow {f'}Y'\to C\xrightarrow {s[1]h}X'[1]$. Rotated TR3 gives $t:Y\to Y'$ with $tf=f's$ and a morphism of triangles whose other components are $s,1_C$. The two long cohomology sequences show $H^n(t)$ invertible: exactness identifies its kernel and cokernel with zero by the adjacent isomorphisms. Thus $t$ is a quasi-isomorphism, giving the outgoing Ore square. Reversing arrows and rotating gives the incoming Ore square. [F3, F4]

1.3 If $a=f-g:X\to Y$ satisfies $at=0$ for a quasi-isomorphism $t:Z\to X$, the triangle $Z\xrightarrow tX\xrightarrow dC\to Z[1]$ has acyclic $C$. Hom exactness gives $a=i\circ d$ for some $i:C\to Y$. Complete $i$ to $C\xrightarrow iY\xrightarrow jW\to C[1]$. Cohomology exactness makes $j$ a quasi-isomorphism and $ja=ji d=0$. Reversing arrows gives the converse cancellation direction. [F3, F4, F5, F6]

2.1 All constructions used only finitely many shifts, sums and cones. These preserve each of termwise upper, lower, and two-sided boundedness (with possibly changed finite bounds). Thus both Ore and cancellation constructions stay in each bounded homotopy category and establish exactly the multiplicative-system axioms there. [F4, F7, step 1.1, step 1.2, step 1.3] ∎

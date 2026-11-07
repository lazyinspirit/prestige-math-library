---
id: thm-rational-torelli-for-genus-at-least-two-curves
kind: theorem
title: Rational Torelli for curves of genus at least two over a number field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
- def-number-field
- cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
- def-algebraic-curve-over-field
- def-genus-euler-characteristic-curve
- def-jacobian-of-smooth-proper-curve
- thm-jacobian-has-canonical-principal-polarization
- lem-filtered-colimit-fp-scheme-stage
- def-axiom-of-choice
- def-dependent-choice
- thm-geometric-strong-torelli-for-canonical-jacobians
- lem-nonaffine-fppf-descent-of-scheme-morphisms
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §4, Theorem 4.2
      and its proof, printed pp. 144–145
    url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    locator: ChapterIII §§12–13, Theorem12.1, Corollary12.2 and full geometric proof,
      printed120–125; ChapterIV§4 Theorem4.2, printed144–145.
  - title: G. Faltings, G. Wüstholz et al., Rational Points, 2nd ed. (1986), Chapter
      V §4.1, Theorem 4.2, printed pp. 185–186
    url: https://yhzhumath.github.io/Mordell2024/RP.pdf
verification:
  precheck: n/a
axiom_use: The written proof assumes AC and DC through the actual geometric and descent
  suppliers. The original unqualified Statement is retained and its stronger choice-scope
  obligation remains held.
---

## Statement

Let $K$ be a number field, and let $C,C'/K$ be smooth, proper, geometrically
connected curves of the same genus $g\ge2$. Write $(J_C,\lambda_C)$ and
$(J_{C'},\lambda_{C'})$ for their Jacobians with their canonical principal
polarizations. If there is a $K$-isomorphism $\phi:J_C\to J_{C'}$ satisfying
$\phi^\vee\circ\lambda_{C'}\circ\phi=\lambda_C$, then $C$ and $C'$ are
$K$-isomorphic.

## Statement references

[[thm-geometric-strong-torelli-for-canonical-jacobians]]

[Milne, Chapter III §§12–13, Theorem 12.1 and Corollary 12.2](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Conditional proof scope

The original Statement above is unqualified and unchanged. The complete local argument below assumes AC and DC, as required by its actual geometric/Picard and faithfully flat descent suppliers. It proves the full number-field and genus range at that conditional scope. Removing or justifying the additional choice premise remains an original-scope obligation; no unqualified theorem acceptance is asserted.

## Facts & Assumptions

**Given:** AC, DC and the original number-field, genus, curve and polarized-Jacobian data.

[A1] AC and DC are explicit additional proof hypotheses, not conclusions from the original Statement. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Over an algebraically closed characteristic-zero field, a polarized Jacobian isomorphism is induced up to sign and translation by a curve isomorphism. In the nonhyperelliptic case the sign and map are unique; in the hyperelliptic case either sign can be prescribed and its curve map is unique. The resulting selected curve map is independent of geometric basepoints. [[thm-geometric-strong-torelli-for-canonical-jacobians]]

[F2] Number fields have characteristic zero and are perfect. [[def-number-field]] [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]

[F3] Morphisms descend uniquely along a faithfully flat quasi-compact finitely presented cover when their two overlap pullbacks agree. [[lem-nonaffine-fppf-descent-of-scheme-morphisms]]

[F4] Morphisms between finitely presented scheme data over a filtered field union descend to a finite stage, and equality descends after enlarging that stage. [[lem-filtered-colimit-fp-scheme-stage]]

## Proof

**Proof technique:** apply geometric strong Torelli with its precise sign convention, then descend its uniquely selected curve map.

**Given:** The data above under [A1].

1.1 Work over an algebraic closure $\overline K$, which is characteristic zero by [F2], and choose geometric basepoints on both curves. Apply [F1] to the base change of $\phi$. If the geometric curves are nonhyperelliptic, select its unique sign and curve map $\alpha$; if hyperelliptic, prescribe the plus sign and select its unique curve map. In both cases the selected $\alpha$ is independent of the chosen geometric basepoints, by the actual uniqueness assertion in [F1]. Thus no rational point on either original curve is required. [A1, F1, F2, given, choose]

2.1 For $\sigma\in\operatorname{Gal}(\overline K/K)$, $\sigma\phi=\phi$. Applying $\sigma$ to the Abel-map relation only conjugates the geometric basepoints and its translation constant; its sign is unchanged because $1,-1$ are defined over $K$. In the nonhyperelliptic case the sign is already uniquely determined, and in the hyperelliptic case the prescribed plus sign remains plus. Basepoint independence and uniqueness from [F1] therefore imply $\sigma\alpha=\alpha$ for every $\sigma$. The same holds for its inverse. [F1, step 1.1, algebra]

3.1 The morphism $\alpha$ and its inverse are defined over a finite extension of $K$, by [F4], since morphisms between these finite-type schemes involve finitely many algebraic coefficients; enlarge it to a finite Galois extension $L/K$. Its two pullbacks over $L\otimes_KL$ agree: this tensor algebra is the product indexed by the Galois group, and each component equality is step 2.1. Apply [F3] to descend $\alpha$ and its inverse to $K$. Their composites are identities after the faithfully flat extension, hence are identities already. This gives a $K$-isomorphism $C\cong C'$ and proves the complete AC/DC-conditional conclusion. [F3, F4, step 2.1, construct, algebra] ∎

## Proof status

The full geometric sign/uniqueness and rational descent argument is supplied under the explicit AC/DC hypotheses above. The original unqualified Statement is retained and held at its stronger choice scope. Relative Picard representability over a DVR, arithmetic polarization-orbit finiteness and the Faltings supplier chain are separate obligations and are not proved or imported by this item.

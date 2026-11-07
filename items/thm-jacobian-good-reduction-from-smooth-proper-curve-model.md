---
id: thm-jacobian-good-reduction-from-smooth-proper-curve-model
kind: theorem
title: Good reduction of a curve gives good reduction of its Jacobian
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-good-reduction-of-smooth-proper-curve-at-a-finite-place
  - def-algebraic-curve-over-field
  - def-genus-euler-characteristic-curve
  - def-jacobian-of-smooth-proper-curve
  - thm-picard-zero-represented-by-jacobian
  - def-abelian-scheme
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-dependent-choice
  - cor-ring-of-integers-is-a-dedekind-domain
  - lem-dedekind-localisation-at-nonzero-prime-is-dvr
  - thm-relative-picard-identity-component-and-rigidified-universal-line-bundle-over-dvr
justified_by: []
proof_strategy: direct
axiom_use: "The written proof assumes AC and DC through the relative Picard supplier and AC through Dedekindness of the ring of integers. The original unqualified Statement remains held."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §4, Proposition 4.1 and its proof, printed p. 144"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
verification:
  precheck: pass
---

## Statement

Let $K$ be a number field, let $\mathfrak p$ be a nonzero prime ideal of its
ring of integers, and put $R=\mathcal O_{K,\mathfrak p}$. Let $C/K$ be a
smooth, proper, geometrically connected curve of genus $g$, with Jacobian
$J_C=\operatorname{Pic}^0_{C/K}$. If $C$ has a smooth proper curve model over
$R$, then $J_C$ extends to an abelian scheme over $R$ with generic fibre
$J_C$. In particular, $J_C$ has good reduction at $\mathfrak p$.

## Statement references

[[def-good-reduction-of-smooth-proper-curve-at-a-finite-place]]

[[def-algebraic-curve-over-field]]

[[def-genus-euler-characteristic-curve]]

[[def-jacobian-of-smooth-proper-curve]]

[[thm-picard-zero-represented-by-jacobian]]

[Milne, Proposition 4.1 and its proof](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Conditional proof scope

The original Statement is unchanged. The argument below proves its conclusion
under AC and DC using the existing relative Picard theorem. Removing these
additional proof hypotheses remains an original-scope obligation.

## Facts & Assumptions

**Given:** AC, DC, and the number field, nonzero prime, curve and smooth proper
curve model in the Statement.

[A1] AC and DC are additional proof hypotheses. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Under AC the ring of integers of a number field is Dedekind. Its localization at a nonzero prime is a DVR. [[cor-ring-of-integers-is-a-dedekind-domain]] [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]

[F2] A smooth proper curve model at the prime has geometrically connected curve fibres and its generic fibre is identified with the given curve over the fraction field $K$ of $R$. [[def-good-reduction-of-smooth-proper-curve-at-a-finite-place]]

[F3] Under AC and DC, for a smooth proper geometrically connected curve over any DVR, the degree-zero relative Picard scheme is an abelian scheme. Its generic fibre is canonically the Jacobian of the generic curve. No section, henselian property, completeness or residue-characteristic restriction is required; the assertion includes every genus. [[thm-relative-picard-identity-component-and-rigidified-universal-line-bundle-over-dvr]]

## Proof

**Given:** The Statement data under [A1].

1.1 By [F1], $R=\mathcal O_{K,\mathfrak p}$ is a DVR. The supplied model $\mathcal C/R$ is a smooth proper curve with geometrically connected fibres by [F2]. Thus it satisfies the hypotheses of [F3], including when the genus is zero or one, without choosing a point or a section of $\mathcal C/R$. [A1, F1, F2, given]

2.1 Apply [F3] to $\mathcal C/R$. Its degree-zero relative Picard scheme is an abelian scheme $\mathcal J/R$, and the generic-fibre comparison gives $\mathcal J_K\cong\operatorname{Pic}^0_{C/K}=J_C$, using the specified generic-fibre identification in [F2]. Consequently $\mathcal J$ is the required abelian-scheme extension, which is exactly good reduction of $J_C$ at $\mathfrak p$. This proves the conclusion under AC and DC. [A1, F2, F3, step 1.1, construct] ∎

## Proof status

The relative-family construction is supplied by the existing local relative
Picard theorem, and the implication above is proved under its AC/DC scope.
The original unqualified Statement remains held; no readiness or proof
acceptance is inferred.

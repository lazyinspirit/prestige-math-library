---
id: ex-lebesgue-measure-as-haar-measure-on-rn
kind: example
title: Lebesgue measure as Haar measure on rn
deps: [def-left-haar-integral-and-left-haar-measure, thm-uniqueness-of-left-haar-measure-up-to-scale, thm-lebesgue-measure-is-a-radon-measure-on-rn, def-axiom-of-choice, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13
      url: https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf
proof_strategy: direct
---

## Example

Assume AC and $n\ge1$. Lebesgue measure restricted to the Borel sets of $(\mathbb R^n,+)$ is a left and right Haar measure. All its Haar measures are positive multiples of Lebesgue measure, and the normalization $\mu([0,1]^n)=1$ singles out Lebesgue measure.

## Facts & Assumptions

**Given:** $n\ge1$ and AC.

[F1] The Haar requirements are invariance, nonzeroness, compact finiteness and Radon regularity. ([[def-left-haar-integral-and-left-haar-measure]])

[F2] Haar measures are positive scalar multiples. ([[thm-uniqueness-of-left-haar-measure-up-to-scale]])

[F3] Lebesgue measure is Radon under countable choice. ([[thm-lebesgue-measure-is-a-radon-measure-on-rn]])

[F4] AC supplies countable choice and the uniqueness construction. ([[def-axiom-of-choice]])

[F5] Lebesgue measure is translation invariant on measurable sets. ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

## Verification

**Proof technique:** direct.

1.1 Euclidean addition and negation are continuous; closed bounded cubes give compact neighbourhoods and the Euclidean metric is Hausdorff. By [F3], AC makes the Borel restriction of Lebesgue measure Radon. For a box $B=\prod_{j=1}^n[a_j,b_j]$, its defining volume is $\lambda_n(B)=\prod_j(b_j-a_j)$; in particular $\lambda_n([0,1]^n)=1$, so the measure is nonzero. [F1, F3, F4]

2.1 [F5] gives $\lambda_n(E+h)=\lambda_n(E)$ for every Borel $E$ and every $h$. Addition is commutative, so this is both left and right invariance. Thus [F1] identifies it as Haar, and [F2] gives $\mu=c\lambda_n$ for any Haar measure. On the unit cube $\mu([0,1]^n)=c$, forcing $c=1$ under the specified normalization. As an explicit translation calculation, $\lambda_n(h+[0,2]^n)=\lambda_n([0,2]^n)=2^n$. [F1, F2, F4, F5, step 1.1] ∎

## Sources

Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13. Local argument and conventions as displayed above.

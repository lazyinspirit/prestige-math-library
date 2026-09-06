---
id: lem-countable-product-cylinder-premeasure-is-countably-additive
kind: lemma
title: "The countable-product cylinder premeasure is countably additive"
status: published
origin: pipeline
deps: [lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, def-product-measure-on-sigma-finite-spaces, prop-sigma-finite-section-measure-functions-are-measurable, thm-continuity-from-above-for-measures, def-countable-choice, thm-countable-union-of-countable, def-dependent-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kajino, Probability Theory, proof of Theorem 3.65"
      url: "https://www.kurims.kyoto-u.ac.jp/~nkajino/lectures/2011/Prob2011/Prob2011.pdf"
---

## Statement

Assume countable choice and dependent choice. For a countable sequence of
probability spaces and its finite-product cylinder law $\mu_0$, $\mu_0$ is a
premeasure on the cylinder algebra.

## Facts & Assumptions

**Given:** Countable choice, dependent choice, a countable sequence of probability spaces, its cylinder algebra, and the finitely additive law $\mu_0$.

[F1] The finite-coordinate product law is a probability measure and has the rectangle formula. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

[F2] For product-measurable $A$ in two sigma-finite factors, each section is
measurable, its section-measure function is measurable, and the product mass is
the integral of that function. ([[prop-sigma-finite-section-measure-functions-are-measurable]],
[[def-product-measure-on-sigma-finite-spaces]])

[F3] A decreasing sequence of measurable sets with finite first measure has
measure converging to that of its intersection.
([[thm-continuity-from-above-for-measures]])

[F4] Countable choice supplies a point of the product of the nonempty coordinate
spaces. ([[def-countable-choice]])

[F5] Under countable choice, a countable union of finite coordinate supports is
countable. ([[thm-countable-union-of-countable]])

[F6] Dependent choice licenses a recursively constructed sequence when the
admissible next coordinate depends on the prefix already chosen.
([[def-dependent-choice]])

## Proof

1.1 Every coordinate space is nonempty because it carries a probability measure. By [F4], the coordinate product is therefore nonempty, so the finitely additive cylinder law is well-defined. Let $C_n\downarrow\varnothing$ be cylinders and suppose that $\mu_0(C_n)\ge\eta>0$ for every $n$. By [F5], enumerate the countable union of their finite supports. After enlarging supports, take $C_n$ to be determined by the first $k_n$ active coordinates, with $(k_n)$ nondecreasing. Recursively regarding each finite product as a two-factor product, [F2] expresses each cylinder mass as the integral of its measurable next-coordinate section-mass function. [F1, F2, F4, F5]

2.1 The finite-stage section argument recursively maintains the following invariant after $m$ coordinates have been chosen: every remaining $C_n$-section has tail-cylinder mass at least $\eta/2^m$. For a prefix with this invariant, let $D_n$ be the measurable set of possible next coordinates whose further section has mass at least $\eta/2^{m+1}$. The $D_n$ decrease with $n$. The section formula and the bound by $1$ give the next-coordinate measure of $D_n$ at least $\eta/2^{m+1}$; [F3] therefore makes $\bigcap_nD_n$ nonempty. Every choice from this intersection extends the prefix and preserves the invariant. [F2, F3, step 1.1]

3.1 By [F6], make the recursively compatible selections from step 2.1. For each $n$, once the first $k_n$ active coordinates have been selected, they lie in the finite base of $C_n$ because its remaining section has positive mass. Fill any inactive coordinates with the product point supplied by [F4]. The resulting point lies in every $C_n$, contradicting $\bigcap_nC_n=\varnothing$. Thus $\mu_0(C_n)\downarrow0$. [F4, F6, step 2.1]

4.1 Finite additivity plus continuity at the empty set gives countable additivity whenever a disjoint union remains a cylinder: apply it to the decreasing remainders. Hence $\mu_0$ is a premeasure. [step 3.1] ∎

---
id: "thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line"
kind: "theorem"
title: "One-dimensional Hausdorff measure on the line is Lebesgue outer measure"
deps: ["lem-euclidean-cube-bounds-for-hausdorff-measure", "def-lebesgue-outer-measure", "def-hausdorff-measure"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Falconer §1.4 p.12, immediately before Theorem 1.11
      url: https://www.ma.ic.ac.uk/~jswlamb/M345PA46/F85%20chap%201.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. For every $A\subseteq\mathbb R$,

$$\mathcal H^1(A)=\lambda_1^*(A).$$

Consequently their Carathéodory measurable domains and completed measures agree.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, for every subset of the line, $\lambda_1^*(A)\le\mathcal H^1(A)$. [[lem-euclidean-cube-bounds-for-hausdorff-measure]]

[F2] Lebesgue outer measure is the infimum of total elementary volumes of countable elementary-set covers. [[def-lebesgue-outer-measure]]

[F3] Hausdorff measure is the supremum of scale covering costs. [[def-hausdorff-measure]]

## Proof

1.1 Only the reverse inequality needs proof. If $\lambda_1^*(A)=\infty$, the lower inequality already gives equality. Otherwise choose an elementary-set cover of total volume less than $\lambda_1^*(A)+\varepsilon$. Each finite-volume elementary set is a finite disjoint union of bounded half-open intervals; zero-volume empty pieces can be discarded. This is the elementary algebra and its volume appearing in the defining infimum. [F1, F2]

2.1 Fix $\delta>0$. Subdivide each such interval into finitely many half-open intervals of lengths at most $\delta$, without changing the sum of lengths. Flatten the resulting countable family. It is an admissible Hausdorff cover of cost at most $\lambda_1^*(A)+\varepsilon$. Hence $\mathcal H^1_\delta(A)\le\lambda_1^*(A)$ after letting $\varepsilon$ decrease to zero. Taking the supremum over $\delta$ proves equality. For empty $A$ use the empty cover. [F2, F3, step 1.1]

3.1 For every test set $T$ the two outer values in the Carathéodory splitting identity are identical. Thus a set satisfies that identity for one outer measure if and only if it does for the other, and the restricted values agree. Both restrictions are their complete Carathéodory measures. [step 2.1] ∎

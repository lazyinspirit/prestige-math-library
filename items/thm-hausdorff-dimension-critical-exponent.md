---
id: "thm-hausdorff-dimension-critical-exponent"
kind: "theorem"
title: "Hausdorff dimension is the unique critical exponent"
deps: ["def-hausdorff-dimension", "lem-hausdorff-exponent-comparison"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres Proposition 1.2.6; Fremlin 264Yk
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
landmark: true
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Write $d=\dim_H A$. For finite exponents $s\ge0$,

$$s<d\implies\mathcal H^s(A)=\infty,\qquad s>d\implies\mathcal H^s(A)=0.$$

Moreover

$$d=\inf\{s\ge0:\mathcal H^s(A)<\infty\}=\sup\{s\ge0:\mathcal H^s(A)=\infty\},$$

where all tested exponents are finite, $\inf\varnothing=\infty$ and the supremum is in $[0,\infty]$, so $\sup\varnothing=0$. If $0<\mathcal H^s(A)<\infty$, then $d=s$. The ray assertions impose no value at a finite critical exponent itself.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Dimension is the infimum of the zero-measure exponents with empty infimum infinity. [[def-hausdorff-dimension]]

[F2] Finite measure at an exponent forces zero measure at every larger finite exponent. [[lem-hausdorff-exponent-comparison]]

## Proof

1.1 If $s<d$ and $\mathcal H^s(A)$ were finite, choose a finite $t$ strictly between $s$ and $d$ (also possible for $d=\infty$). Then $\mathcal H^t(A)=0$, contrary to $d$ being the infimum of the zero exponents. Hence $\mathcal H^s(A)=\infty$. [F1, F2]

1.2 If $d<s<\infty$, the zero-exponent set is nonempty and contains $u<s$ by its infimum property. Exponent comparison gives $\mathcal H^s(A)=0$. Thus when $d=0$ all positive exponents vanish, and when $d=\infty$ every finite exponent has infinite measure. [F1, F2]

2.1 The first two steps place every finite-measure exponent at least $d$, and every exponent strictly greater than finite $d$ among the finite-measure exponents. Their infimum is $d$, also when the set is empty. Similarly the infinite-measure exponents lie at most $d$ and contain every nonnegative exponent strictly below $d$. Their supremum is $d$; for $d=0$ it is zero whether that set is empty or consists of zero. Finite positive measure at $s$ excludes $s<d$ and $s>d$, hence forces equality. Empty $A$ has $d=0$ and no infinite-measure exponent. [step 1.1, step 1.2, F1] ∎

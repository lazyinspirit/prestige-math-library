---
id: fs-zero-product-property-modulo-n
kind: false-statement
title: "False: $[a]_n[b]_n=[0]_n$ always implies $[a]_n=[0]_n$ or $[b]_n=[0]_n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-zero-divisors-modulo-composites, def-addition-and-multiplication-modulo-n, def-integers-modulo-n, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
    - title: "University of Colorado, proof practice on zero divisors"
      url: "https://math.colorado.edu/~kstange/teaching-resources/crypto/proofs-practice-2.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every natural modulus $n$,

$$[a]_n[b]_n=[0]_n\quad\Longrightarrow\quad[a]_n=[0]_n\ \text{or}\ [b]_n=[0]_n.$$

## Facts & Assumptions

**Given:** The quotient $\mathbb Z/6$ and the classes $[2]_6,[3]_6$.

[L1] Products in $\mathbb Z/n$ are computed by multiplying representatives ([[def-addition-and-multiplication-modulo-n]]).

[L2] Composite moduli admit nonzero classes with zero product; moreover $[a]_n=[b]_n$ exactly when $a\equiv b\pmod n$, which means $n\mid(a-b)$ ([[ex-zero-divisors-modulo-composites]], [[def-integers-modulo-n]], [[def-congruence-modulo-an-integer]]).

## Refutation

**Proof technique:** direct.

1.1 In $\mathbb Z/6$, $[2]_6[3]_6=[6]_6=[0]_6$ by [L1]. [L1]

1.2 Neither $6\mid2$ nor $6\mid3$, so $[2]_6\ne[0]_6$ and $[3]_6\ne[0]_6$. [L2]

2.1 Thus the antecedent of the claimed implication holds while both alternatives in its conclusion fail, so the claim is false. [step 1.1, step 1.2] ∎

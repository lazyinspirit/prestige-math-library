---
id: thm-hadamard-product-of-rational-series-is-rational
kind: theorem
title: "The Hadamard product of two rational formal power series over a field is rational"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-linear-recurrence-iff-rational-generating-function, cor-independent-set-is-no-larger-than-a-finite-spanning-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Proposition 4.2.5"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field. If $F=\sum_{n\ge0}a_nx^n$ and $G=\sum_{n\ge0}b_nx^n$ are rational formal power series over $K$, then their **Hadamard product**

$$F*G:=\sum_{n\ge0}a_nb_nx^n$$

is rational.

## Facts & Assumptions

**Given:** Rational series $F=\sum a_nx^n$ and $G=\sum b_nx^n$ over a field $K$.

[L1] A coefficient sequence has a rational generating function exactly when it is eventually linearly recurrent ([[thm-linear-recurrence-iff-rational-generating-function]]).

[L2] A linearly independent subset of a vector space spanned by $m$ vectors has at most $m$ elements ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], after deleting finite prefixes the sequences $a$ and $b$ satisfy recurrences of orders $d$ and $e$. Hence all shifts of the first tail lie in the span of its first $d$ shifts, and all shifts of the second tail lie in the span of its first $e$ shifts. [given, L1]

2.1 If $d=0$ or $e=0$, one tail and hence the product tail is zero, so [L1] already proves rationality. It remains to take $d,e\ge1$. [step 1.1, L1]

3.1 Let $W$ be the span, inside the vector space of $K$-valued sequences, of the $de$ coefficientwise products $(S^ia)(S^jb)$ with $0\le i<d$ and $0\le j<e$. Every simultaneous shift $S^k(a_nb_n)=(S^ka)(S^kb)$ belongs to $W$ by bilinear expansion. [step 1.1, step 2.1, algebra]

4.1 By [L2], among any $de+1$ simultaneous shifts of the product tail there is a nontrivial linear dependence. Remove initial and terminal zero coefficients from such a relation and normalise its last coefficient to $1$; the remaining first coefficient is nonzero and the relation is an eventual constant-coefficient recurrence for $(a_nb_n)$. [step 3.1, L2, algebra]

5.1 Applying [L1] to the product sequence in step 4.1 proves that $F*G$ is rational in the positive-order case. Together with step 2.1, this covers all rational inputs, and finite prefixes discarded in step 1.1 do not affect eventual recurrence. [step 1.1, step 2.1, step 4.1, L1] ∎

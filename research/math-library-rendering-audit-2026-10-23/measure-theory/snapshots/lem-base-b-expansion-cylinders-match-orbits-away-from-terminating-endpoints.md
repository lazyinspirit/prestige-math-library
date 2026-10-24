---
id: lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints
kind: lemma
title: Base-b digit cylinders are orbit cylinders
status: published
verification:
  audited: 2026-09-14
origin: pipeline
deps: [def-canonical-base-b-expansion-and-normality, def-integer-base-map-on-the-circle, thm-countable-union-of-countable, prop-countable-subsets-of-rn-are-lebesgue-null, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§11.2, printed pp. 99–101"
proof_strategy: direct
---

## Statement

Assume the Axiom of Countable Choice.  Fix $b\geq2$ and a word
$w=(w_1,\ldots,w_\ell)$, and put

$$m=\sum_{r=1}^{\ell}w_rb^{\ell-r}.$$

Away from

$$E_b=\{k/b^q:q\geq0,\ 0\leq k<b^q\}\subseteq[0,1),$$

for every $x\in[0,1)\setminus E_b$ and $j\geq1$, the word $w$ begins at
digit $j$ of $x$ if and only if

$$D_b^{j-1}x\in[m/b^\ell,(m+1)/b^\ell).$$

The canonical convention selects a single expansion at every point of $E_b$,
and $E_b$ is countable and Lebesgue null.

## Facts & Assumptions

**Given:** Countable choice, an integer $b\geq2$, a length $\ell\geq1$, the word $w$, and $j\geq1$.

[F1] The canonical digits satisfy $D_b^rx=bD_b^{r-1}x-d_r^{(b)}(x)$ and use the terminating expansion at $b$-adic points ([[def-canonical-base-b-expansion-and-normality]]).

[F2] The level-$\ell$ intervals $[h/b^\ell,(h+1)/b^\ell)$ partition $[0,1)$, and $D_b^\ell$ is affine on each such interval ([[def-integer-base-map-on-the-circle]]).

[F3] A countable union of countable sets is countable under countable choice ([[thm-countable-union-of-countable]]), and a countable subset of $\mathbb R$ is Lebesgue null ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

## Proof

**Proof technique:** direct digit calculation.

1.1 Put $y=D_b^{j-1}x$.  Iterating the recurrence in [F1] for $\ell$ places gives $$y=\sum_{r=1}^{\ell}d_{j+r-1}^{(b)}(x)b^{-r}+b^{-\ell}D_b^{j+\ell-1}x.$$ [F1]

2.1 Since the last iterate lies in $[0,1)$, the first sum equals $h/b^\ell$, where $h=\sum_{r=1}^{\ell}d_{j+r-1}^{(b)}(x)b^{\ell-r}$, and $$h/b^\ell\leq y<(h+1)/b^\ell.$$ [step 1.1, algebra]

3.1 By the disjoint half-open partition in [F2], $y$ belongs to the interval $[m/b^\ell,(m+1)/b^\ell)$ exactly when $h=m$.  Uniqueness of positional representation for the integers $0\leq h,m<b^\ell$ says this is equivalent to $(d_j^{(b)}(x),\ldots,d_{j+\ell-1}^{(b)}(x))=w$.  This in fact holds also at the endpoints under the canonical half-open convention, and therefore implies the claimed equivalence away from $E_b$. [F1, F2, step 2.1]

4.1 For each $q$, the set $\{k/b^q:0\leq k<b^q\}$ is finite.  Hence $E_b$ is a countable union of finite sets, so [F3] makes it countable and Lebesgue null.  At each of its points [F1] chooses the terminating string and excludes the eventually-$(b-1)$ string.  Countable choice is used precisely through the two published countability/nullity suppliers in [F3], not in the digit calculation. [F1, F3, step 3.1] ∎

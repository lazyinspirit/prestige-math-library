---
id: thm-tao-logarithmically-averaged-two-point-chowla
kind: theorem
title: "Tao logarithmically averaged two-point Chowla theorem"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-logarithmic-liouville-correlation-average
  - def-liouville-function
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - lem-finite-logarithmic-affine-invariance
  - lem-finite-entropy-chain-and-conditioning-inequalities
  - lem-entropy-deficit-controls-small-exceptional-sets
  - lem-entropy-decrement-scale-selection
  - lem-crt-bounded-sum-concentration
  - lem-finite-prime-weighted-circle-large-spectrum-bound
  - lem-logarithmic-block-entropy-decrement-interface
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Terence Tao, The logarithmically averaged Chowla and Elliott conjectures for two-point correlations, Theorem 1.2"
      url: "https://arxiv.org/pdf/1509.05422v4"
---

## Statement

Let $a_1,a_2$ be positive integers and $b_1,b_2$ integers with
$a_1b_2-a_2b_1\ne0$. Let $\omega(X)$ be any real-valued function satisfying
$1\le\omega(X)\le X$ and $\omega(X)\to\infty$ as $X\to\infty$. For all
sufficiently large $X$, sum over positive integers $n$ satisfying
$X/\omega(X)<n\le X$ and $a_i n+b_i\ge1$ for $i=1,2$. Then
$$
\sum_{\substack{n\in\mathbb Z_{>0}\\ X/\omega(X)<n\le X\\ a_1n+b_1\ge1,\ a_2n+b_2\ge1}}\frac{\lambda(a_1n+b_1)\lambda(a_2n+b_2)}{n}=o\bigl(\log\omega(X)\bigr)\qquad(X\to\infty).
$$
Here $o(\log\omega(X))$ means that the displayed sum divided by
$\log\omega(X)$ tends to $0$. Omitting the fixed finite set of initial
indices where an affine argument is not positive changes the sum by at most a
constant depending on the fixed forms, which is $o(\log\omega(X))$.

## Statement references

[[def-liouville-function|Liouville function on positive integers]]

[[def-logarithmic-liouville-correlation-average|logarithmic window and normalization]]

[[def-natural-logarithm|natural logarithm]]

[[thm-natural-logarithm-laws|positivity of log omega for omega greater than 1]]

[Tao, Theorem 1.2, PDF p. 2](https://arxiv.org/pdf/1509.05422v4)

## Facts & Assumptions

**Given:** The fixed affine forms and the function $\omega(X)$ with the bounds and limit in the Statement.

[F1] [[def-liouville-function]]: $\lambda$ is defined on positive integers by the parity of the prime-factor count.

[F2] [[def-logarithmic-liouville-correlation-average]]: the logarithmic average uses weight $1/n$ on the interval $X/\omega(X)<n\le X$ and normalization $\log\omega(X)$.

[F3] [[def-natural-logarithm]]: for $x>0$, $\log x$ is the unique real $y$ with $\exp(y)=x$.

[F4] [[thm-natural-logarithm-laws]]: the natural logarithm is strictly increasing on the positive reals.

[F5] [[thm-natural-logarithm-laws]]: $\log 1=0$.

## Local proof blocks and remaining obligation

The finite logarithmic affine-invariance estimate, finite entropy inequalities, entropy decrement, entropy-deficit exceptional-set bound, CRT concentration and finite circle bound are proved locally. The logarithmic-block interface now proves approximate conditional subadditivity with an explicit finite-alphabet total-variation error, while the entropy selection lemma proves the scale decrement. The chosen scales remain fixed before the long logarithmic-window limit; these results assert no arithmetic independence. The analytic closure requires the precise MRT modulated short-sum bound in Proposition 2.4 and the prime large-spectrum cardinality bound in Lemma 3.7 (via a restriction estimate or its prime-fourth-moment upper-bound sieve). The finite circle lemma retains its large-spectrum term and does not assert that this spectrum is small. The affine Liouville multiplicativity reduction and graph lower bound must then be combined at the selected scale. These missing analytic inputs and that full assembly remain local proof obligations. The normalization is log omega(X), not log X, and omega may grow arbitrarily slowly; no natural-average conclusion follows from these blocks.

[[lem-finite-logarithmic-affine-invariance]]

[[lem-finite-entropy-chain-and-conditioning-inequalities]]

[[lem-entropy-deficit-controls-small-exceptional-sets]]

[[lem-entropy-decrement-scale-selection]]

[[lem-crt-bounded-sum-concentration]]

[[lem-finite-prime-weighted-circle-large-spectrum-bound]]

[[lem-logarithmic-block-entropy-decrement-interface]]

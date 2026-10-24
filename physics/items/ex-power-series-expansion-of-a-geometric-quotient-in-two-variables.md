---
id: ex-power-series-expansion-of-a-geometric-quotient-in-two-variables
kind: example
title: "The power series of $z_0/(1-z_1)$ and the shape of its domain of convergence"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-multivariable-power-series, thm-power-series-define-holomorphic-functions-in-several-variables, prop-algebra-of-holomorphic-functions-in-several-variables, thm-geometric-series, thm-absolute-convergence-of-complex-series, lem-complex-conjugation-and-modulus-laws, lem-geometric-sequence-null, thm-complex-numbers-form-a-field, def-complex-integer-powers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Example

On the region $\{(z_0,z_1)\in\mathbb C^2:|z_1|<1\}$ one has

$$\frac{z_0}{1-z_1}=\sum_{j=0}^{\infty} z_0 z_1^j.$$

Equivalently, in multi-index notation,

$$\frac{z_0}{1-z_1}=\sum_{\alpha\in\mathbb N^2} c_\alpha z^\alpha,$$

where $c_{(1,j)}=1$ for every $j\in\mathbb N$ and $c_\alpha=0$ otherwise. When
$z_0\ne0$, the series converges absolutely exactly when $|z_1|<1$; when
$z_0=0$, every term vanishes and the series converges absolutely for every
$z_1$. Thus its absolute-convergence set is
$(\mathbb C\times D(0,1))\cup(\{0\}\times\mathbb C)$, an unbounded set and not
a bounded polydisc.

## Facts & Assumptions

**Given:** The function $f(z)=z_0/(1-z_1)$ on the region $|z_1|<1$.

[L1] For complex $w$, the geometric series $\sum_{j\ge0}w^j$ converges absolutely exactly when $|w|<1$: if $|w|<1$, then $\sum_{j\ge0}|w|^j$ converges by [[thm-geometric-series]], so [[thm-absolute-convergence-of-complex-series]] applies, and the finite identity $(1-w)\sum_{j<n}w^j=1-w^n$ together with $|w^n|=|w|^n\to0$ gives the sum $1/(1-w)$ ([[lem-complex-conjugation-and-modulus-laws]], [[lem-geometric-sequence-null]], [[thm-complex-numbers-form-a-field]]). If $|w|\ge1$, then the same real geometric-series criterion shows that $\sum_{j\ge0}|w|^j$ diverges, so for every nonzero complex constant $c$ the series $\sum_{j\ge0} c\,w^j$ cannot be absolutely convergent.

## Verification

**Proof technique:** direct.

1.1 If $|z_1|<1$, then [L1] gives $(1-z_1)^{-1}=\sum_{j\ge0} z_1^j$, so multiplying by $z_0$ yields $z_0/(1-z_1)=\sum_{j\ge0} z_0 z_1^j$. [given, L1]

2.1 In multi-index form this is the stated coefficient rule: the only monomials that appear are $z_0 z_1^j$, so $c_{(1,j)}=1$ and every other coefficient is $0$. [step 1.1]

2.2 The absolute-value series is $\sum_{j\ge0}|z_0||z_1|^j$. If $z_0\ne0$, division by the positive constant $|z_0|$ and [L1] show that it converges exactly when $|z_1|<1$. If $z_0=0$, every term is $0$, so it converges for every $z_1$. Hence the absolute-convergence set is $(\mathbb C\times D(0,1))\cup(\{0\}\times\mathbb C)$. [step 1.1, L1]

3.1 At points $(0,z_1)$ with $|z_1|\ge1$, every term of the series is $0$, so the series still converges there to $0$, although the quotient is undefined when $z_1=1$ and this exceptional convergence set is not open. [step 2.2] ∎

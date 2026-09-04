---
id: lem-noether-normalisation-finite-field-exponent-substitution
kind: lemma
title: "Rapidly increasing power substitutions isolate one highest x_n-term"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: []
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Lemma 8.3"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $k$ be a field, let $n\ge 1$, and let
$f\in k[x_1,\ldots,x_n]$ be nonzero. Then there exists an integer $N>1$ such
that, after the substitution
$$ x_i\longmapsto x_i+x_n^{N^i}\qquad(1\le i<n), $$
the transformed polynomial becomes a nonzero polynomial in $x_n$ over
$k[x_1,\ldots,x_{n-1}]$ whose highest power of $x_n$ occurs in exactly one
monomial term. Consequently, after multiplying by a nonzero scalar, the
transformed polynomial is monic in $x_n$.

## Facts & Assumptions

**Given:** A field $k$, an integer $n\ge 1$, and a nonzero polynomial $f\in k[x_1,\ldots,x_n]$.

[A1] A polynomial has only finitely many monomials with nonzero coefficients.

## Proof

**Proof technique:** direct.

1.1 Write $$ f=\sum_{\alpha=(\alpha_1,\ldots,\alpha_n)} c_\alpha x_1^{\alpha_1}\cdots x_n^{\alpha_n} $$ with only finitely many nonzero coefficients. Choose $N$ larger than every exponent $\alpha_i$ occurring with $c_\alpha\ne 0$. [A1, given, choose]

2.1 For each exponent vector $\alpha$, define the weight $$ w(\alpha)=\alpha_n+\alpha_1N+\alpha_2N^2+\cdots+\alpha_{n-1}N^{n-1}. $$ Because every $\alpha_i<N$, base-$N$ expansion is unique, so distinct exponent vectors have distinct weights. [step 1.1, algebra]

3.1 After substituting $x_i+x_n^{N^i}$ for $x_i$, the monomial $x_1^{\alpha_1}\cdots x_n^{\alpha_n}$ contributes the term $c_\alpha x_n^{w(\alpha)}$ to the highest $x_n$-power coming from that monomial; all other terms from its binomial expansion have smaller $x_n$-power. Let $\alpha^\ast$ be the exponent vector with maximal weight among those with $c_\alpha\ne 0$. By step 2.1 this $\alpha^\ast$ is unique, so $c_{\alpha^\ast}x_n^{w(\alpha^\ast)}$ is the unique highest $x_n$-term of the transformed polynomial. [step 2.1, choose, algebra]

4.1 The transformed polynomial is therefore nonzero and has a unique highest $x_n$-term with nonzero coefficient. Multiplying by the inverse of that coefficient makes it monic in $x_n$. [step 3.1, algebra] ∎

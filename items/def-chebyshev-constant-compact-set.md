---
id: def-chebyshev-constant-compact-set
kind: definition
title: "Chebyshev constant of a compact planar set"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-polynomial-degree-and-monic
  - thm-complex-polynomials-and-rational-functions-are-holomorphic
  - lem-complex-conjugation-and-modulus-laws
  - thm-extreme-value-metric
  - thm-infimum-property
  - thm-nth-roots-exist
  - def-infimum
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, the polynomial extremal problem, printed pp. 175–176"
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

All polynomials below are complex formal polynomials with the evaluation and
monic conventions of [[def-complex-polynomial-degree-and-monic]], and
$\mathbb C$ is identified with $\mathbb R^2$.

Let $K\subseteq\mathbb C$ be **nonempty and compact**. For a polynomial $p$ put

$$\|p\|_K:=\sup_{z\in K}|p(z)|\in[0,\infty).$$

The supremum is finite and is a maximum: $z\mapsto p(z)$ is entire
([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]), hence
continuous, and $|{\cdot}|$ satisfies the modulus laws of
[[lem-complex-conjugation-and-modulus-laws]]; a continuous real-valued function
on the nonempty compact space $K$ is bounded and attains its bounds
([[thm-extreme-value-metric]]). No choice principle is used: the only selection
is that of an extremal point of a continuous function on a compact set, which
the cited extreme-value theorem supplies.

For every integer $n\ge1$ define

$$t_n(K):=\inf\bigl\{\|p\|_K:\ p \text{ is a monic complex polynomial of degree } n\bigr\}.$$

This infimum is a real number: the set is nonempty because $p(Z)=Z^n$ is monic of
degree $n$, it consists of nonnegative numbers by the modulus laws, and every
nonempty subset of $\mathbb R$ bounded below has a greatest lower bound, the
infimum ([[thm-infimum-property]], [[def-infimum]]). Thus
$0\le t_n(K)<\infty$ for every $n\ge1$.

The **Chebyshev constant** of $K$ is

$$\operatorname{cheb}(K):=\inf_{n\ge1} t_n(K)^{1/n},$$

where $t_n(K)^{1/n}$ is the unique nonnegative $n$-th root of $t_n(K)$
([[thm-nth-roots-exist]]). This infimum exists by the same argument: the index
set $\{n\in\mathbb N:n\ge1\}$ is nonempty, each $t_n(K)^{1/n}\ge0$, so the set is
nonempty and bounded below by $0$ ([[thm-infimum-property]]). For the empty set
one uses the separate convention

$$\operatorname{cheb}(\varnothing):=0.$$

## Remarks

**No extremal polynomial is claimed.** The quantity $t_n(K)$ is an infimum over
polynomials of a fixed degree and is not defined as the norm of a polynomial that
attains it. Existence of a best monic polynomial is not asserted, and the
definition does not choose one.

**Dependence on $K$ only through the sup norms.** Every ingredient of the
definition is a function of the compact set $K$; for $K=\{a\}$ one has
$\|p\|_K=|p(a)|$ and $t_n(\{a\})=0$ for all $n\ge1$ because
$(Z-a)^n$ is a monic degree-$n$ polynomial vanishing at $a$, so
$\operatorname{cheb}(\{a\})=0$.

**The root limit is proved later.** That the infimum defining $\operatorname{cheb}(K)$
is also the limit of the sequence $t_n(K)^{1/n}$ is the content of
[[lem-chebyshev-constant-is-submultiplicative-root-limit]] and is not assumed
here.

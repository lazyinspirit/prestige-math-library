---
id: "ex-classical-affine-line-coordinate-local-and-function-field-dictionary"
kind: "example"
title: "The affine-line coordinate, local, and function-field dictionary"
status: "draft"
origin: "pipeline"
deps: ["thm-classical-affine-nullstellensatz-correspondence", "def-classical-affine-coordinate-ring", "thm-classical-principal-open-coordinate-ring-localization", "thm-classical-affine-morphisms-coordinate-ring-antiequivalence", "thm-classical-affine-local-ring-is-localization", "thm-classical-principal-open-is-affine-variety", "def-classical-variety-function-field", "thm-classical-function-field-independent-of-affine-open", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, 3.17 pp. 63–64, Proposition 3.32 p. 71 and Proposition 3.26 p. 67"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Example

Assume the Axiom of Choice, inherited from the Nullstellensatz route. Let $k$ be algebraically closed and $X=\mathbf A^1_k$ with coordinate $t$. Then $k[X]=k[t]$, $\mathcal O_{X,a}=k[t]_{(t-a)}$ with residue field k, and $k(X)=k(t)$. The principal open $D(t)=k\setminus\{0\}$ has coordinate ring $k[t,t^{-1}]$ and the same function field. The morphism $\phi:\mathbf A^1\to\mathbf A^1$, $t\mapsto t^2$, pulls back the target coordinate u to $t^2$. These calculations hold in every characteristic.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, the affine line $X=\mathbf A^1_k$ with coordinate $t$, and a point $a\in k$. Consider also its principal open $D(t)$ and the polynomial map $t\mapsto t^2$.

[F1] For the zero ideal in k[t], the vanishing ideal of its locus is its radical ([[thm-classical-affine-nullstellensatz-correspondence]]).

[F2] Coordinate rings are quotients by vanishing ideals ([[def-classical-affine-coordinate-ring]]).

[F3] The local ring at a point is localization at its evaluation ideal ([[thm-classical-affine-local-ring-is-localization]]).

[F4] The function field is the fraction field ([[def-classical-variety-function-field]]).

[F5] Principal-open sections identify with principal localization ([[thm-classical-principal-open-coordinate-ring-localization]]).

[F6] Nonempty principal opens are affine ([[thm-classical-principal-open-is-affine-variety]]).

[F7] Coordinate substitution describes pullback of affine morphisms ([[thm-classical-affine-morphisms-coordinate-ring-antiequivalence]]).

[F8] Nonempty affine opens have the same function field ([[thm-classical-function-field-independent-of-affine-open]]).

## Verification

**Proof technique:** direct.

1.1 The polynomial ring k[t] is a domain: for two nonzero polynomials the product of their nonzero leading coefficients is the nonzero leading coefficient of their product. Thus its zero ideal is radical. F1 gives $I(\mathbf A^1)=\sqrt{(0)}=(0)$, so F2 gives $k[X]=k[t]/(0)=k[t]$. F4 gives $k(X)=\operatorname{Frac}(k[t])=k(t)$. [F1, F2, F4, given, algebra]

2.1 Evaluation at $a\in k$ has kernel $(t-a)$: for $p(t)=\sum_{j=0}^r c_jt^j$, the identity $p(t)-p(a)=(t-a)\sum_{j=1}^r c_j\sum_{i=0}^{j-1}t^{j-1-i}a^i$ proves divisibility when $p(a)=0$, and the converse follows by evaluation. F3 therefore identifies the local ring with fractions $p/q$ where $q(a)\ne0$. Its maximal ideal consists of fractions with $p(a)=0$ and its residue map is $p/q\mapsto p(a)/q(a)$. Constants make this map onto k. [F3, step 1.1, algebra]

2.2 For f=t, $D(t)=k\setminus\{0\}$ contains 1. F5 and F6 give its coordinate ring as $k[t]_t=\{p(t)/t^r:r\ge0\}=k[t,t^{-1}]$. The graph realization is $(t,z)$ with $tz=1$, the inverse of projection being $t\mapsto(t,t^{-1})$. F8 identifies its fraction field with k(t). For f=0 the open is empty and its function algebra zero; for f=1 the ring is k[t]. [F5, F6, F8, step 1.1, algebra]

3.1 The polynomial map $\phi(t)=t^2$ is the morphism associated by F7 to $k[u]\to k[t]$, $u\mapsto t^2$. Explicitly $(\sum_j c_j u^j)^*=\sum_j c_j t^{2j}$; in particular $u^*=t^2$, $(u-a)^*=t^2-a$, $0^*=0$ and $1^*=1$. No division by 2 occurs, so this verification includes characteristic 2. [F7, step 1.1, algebra] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, 3.17 pp. 63–64, Proposition 3.32 p. 71 and Proposition 3.26 p. 67. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.

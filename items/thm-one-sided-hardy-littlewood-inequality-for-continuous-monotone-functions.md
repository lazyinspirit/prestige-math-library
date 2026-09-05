---
id: thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions
kind: theorem
title: "One-sided Hardy-Littlewood inequalities for the Dini derivatives of a continuous monotone function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-four-dini-derivatives-at-a-point, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-monotone-function, thm-riesz-rising-sun-lemma]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Lemma 1.6.26"
      url: "https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Frigyes Riesz, Sur l’existence de la dérivée des fonctions monotones et sur quelques problèmes qui s’y rattachent, Section 3"
      url: "https://real.mtak.hu/214055/1/math_005_208-221.pdf"
---

## Statement

Let $F : [a,b] \to \mathbb{R}$ be continuous and nondecreasing
([[def-monotone-function]]). Let $[u,v] \subseteq [a,b]$ with $u < v$.

1. For every $R > 0$, if
   $$E^{+}_{R}(u,v) := \{x \in [u,v) : D^{+}F(x) > R\},$$
   then
   $$R\,\lambda(E^{+}_{R}(u,v)) \le F(v) - F(u).$$
2. For every $0 < r < R$, if
   $$E^{-}_{r,R}(u,v) := \{x \in (u,v] : D_{-}F(x) < r\},$$
   then
   $$(R-r)\,\lambda(E^{-}_{r,R}(u,v)) \le R(v-u) - F(v) + F(u).$$

Here $\lambda$ is Lebesgue measure from
[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]].

## Facts & Assumptions

**Given:** The continuous nondecreasing function $F : [a,b] \to \mathbb{R}$ and the subinterval $[u,v] \subseteq [a,b]$.

[A1] The symbols are those of the statement.

## Proof

**Proof technique:** direct.

1.1 Fix $R > 0$ and put $G(x) := F(x) - Rx$ on $[u,v]$. If $x \in E^{+}_{R}(u,v)$, then some $y \in (x,v]$ satisfies $\frac{F(y)-F(x)}{y-x} > R$, hence $G(y) > G(x)$. Therefore $E^{+}_{R}(u,v)$ is contained in the rising-sun set of $G$ on $[u,v]$. By [[thm-riesz-rising-sun-lemma]], the components of that set are intervals $I_n$ whose left and right endpoints we call $c_n,d_n$, with each $I_n$ either $[u,d_n)$ or $(c_n,d_n)$, and with $G(c_n) \le G(d_n)$ for every $n$. Thus $R(d_n-c_n) \le F(d_n)-F(c_n)$ for every $n$. Summing over finitely many components and using that the disjoint ordered intervals $I_n$ lie in $[u,v]$ gives $R \sum_{n \le N}(d_n-c_n) \le \sum_{n \le N}\bigl(F(d_n)-F(c_n)\bigr) \le F(v)-F(u)$, so $R\,\lambda(E^{+}_{R}(u,v)) \le F(v)-F(u)$. [given, algebra]

2.1 Fix $0 < r < R$ and put $H(x) := Rx - F(x)$ on $[u,v]$. If $x \in E^{-}_{r,R}(u,v)$, then for some $y \in [u,x)$ one has $\frac{F(x)-F(y)}{x-y} < r$, hence $H(x)-H(y) > (R-r)(x-y) > 0$. Reflecting $H$ across the midpoint of $[u,v]$ turns this into the right-hand rising-sun situation on a continuous function, so the same argument as in step 1.1 yields a disjoint family of intervals whose total length bounds $\lambda(E^{-}_{r,R}(u,v))$ and on each such interval $H(d)-H(c) \ge (R-r)(d-c)$. Summing gives $(R-r)\,\lambda(E^{-}_{r,R}(u,v)) \le H(v)-H(u) = R(v-u)-F(v)+F(u)$. [step 1.1, algebra]

3.1 Steps 1.1 and 2.1 are the two asserted inequalities. [step 1.1, step 2.1] ∎

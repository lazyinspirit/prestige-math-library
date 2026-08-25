---
id: lem-dyadic-cube-values-are-forced-by-translation-invariance-and-normalisation
kind: lemma
title: "A translation-invariant Borel measure giving the unit cube measure one gives each generation-$k$ dyadic cube measure $2^{-kn}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-dyadic-cube-in-rn, lem-dyadic-cubes-of-one-generation-partition-rn, def-measure, def-translation-of-a-set-in-rn, def-integer-power, lem-power-laws, def-finite-sum, lem-finite-sum-laws, def-borel-sigma-algebra, lem-half-open-boxes-generate-the-borel-sigma-algebra-on-rn, def-half-open-box, thm-induction-principle, def-integers, thm-int-ordered-ring, lem-nat-embeds-int, lem-nat-discrete]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.2.23"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Theorem 2.3"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and let $\mu$ be a measure on
$\big(\mathbb{R}^n,\mathcal{B}(\mathbb{R}^n)\big)$ ([[def-measure]],
[[def-borel-sigma-algebra]]) such that

$$\mu(E+h) = \mu(E) \quad \text{for every Borel } E \text{ and every }h\in\mathbb R^n, \qquad \mu\big((0,1]^n\big) = 1 .$$

Then $\mu(Q) = 2^{-kn}$ for every dyadic cube $Q$ of generation $k$
([[def-dyadic-cube-in-rn]]).

Only translates of half-open boxes are used, and those are Borel
([[lem-half-open-boxes-generate-the-borel-sigma-algebra-on-rn]]), so the
invariance hypothesis is applied only where it is unambiguously meaningful.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, a natural number $k$, and a measure $\mu$ on the Borel sets of $\mathbb{R}^n$ that is translation invariant and gives the unit cube measure $1$.

[L1] $Q_{k,m} = \{\, x \in \mathbb{R}^n : m_i 2^{-k} < x_i \le (m_i+1)2^{-k} \text{ for every } i<n \,\}$, and $Q_{0,\mathbf{0}} = (0,1]^n$ ([[def-dyadic-cube-in-rn]], [[def-half-open-box]], [[def-integer-power]]).

[L2] Every $x \in \mathbb{R}^n$ lies in exactly one dyadic cube of generation $k$ ([[lem-dyadic-cubes-of-one-generation-partition-rn]]).

[L3] Every half-open box is a Borel set ([[lem-half-open-boxes-generate-the-borel-sigma-algebra-on-rn]]).

[F1] A **measure** on $(X,\mathcal A)$ is a function $\mu:\mathcal A\to[0,+\infty]$ with $\mu(\varnothing)=0$ that is countably additive on pairwise disjoint sequences ([[def-measure]]); padding a finite disjoint list with empty sets makes it finitely additive.

[F2] The **translate** of $E\subseteq\mathbb R^n$ by $a$ is $E+a:=\{x+a:x\in E\}$ ([[def-translation-of-a-set-in-rn]]).

[F3] $\sum_{k<n}\lambda = n\lambda$, where $n$ denotes the canonical natural of $\mathbb{R}$ ([[lem-finite-sum-laws]], claim 2; [[def-finite-sum]]).

[F4] For $a \ne 0$ and $m,n \in \mathbb{Z}$, $a^{m+n} = a^m a^n$ and $(a^m)^n = a^{mn}$ ([[lem-power-laws]], claims 1 and 3; [[def-integer-power]]).

[F5] Let $S \subseteq \mathbb{N}$; if $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$ ([[thm-induction-principle]]).

[F6] The order on $\mathbb{Z}$ is total and compatible with addition ([[thm-int-ordered-ring]]); the canonical embedding of $\mathbb{N}$ into $\mathbb{Z}$ has as image exactly the nonnegative integers ([[lem-nat-embeds-int]], [[def-integers]]); and $m<n$ in $\mathbb{N}$ exactly when $\sigma(m)\le n$ ([[lem-nat-discrete]]).

## Proof

**Proof technique:** direct.

1.1 A generation-$k$ dyadic cube is contained in $(0,1]^n$ exactly when $0 \le m_i$ and $m_i+1 \le 2^k$ for every $i<n$, and every point of $(0,1]^n$ lies in such a cube: if $x \in (0,1]^n$ and $m$ is the index of the generation-$k$ cube containing $x$, then $m_i < 2^kx_i \le 2^k$ and $m_i+1 \ge 2^kx_i > 0$, so $0 \le m_i$ and $m_i+1 \le 2^k$ by discreteness of $\mathbb{Z}$; conversely such a cube lies in $(0,1]^n$ because $m_i2^{-k}\ge0$ and $(m_i+1)2^{-k}\le1$. [L1, L2, F4, F6]

1.2 Every generation-$k$ dyadic cube is a translate of $Q_{k,\mathbf{0}} = (0,2^{-k}]^n$, namely $Q_{k,m} = Q_{k,\mathbf{0}} + m2^{-k}$, and it is a half-open box, hence Borel; so all generation-$k$ cubes receive the same value under $\mu$. [L1, L3, F2]

2.1 The indices admitted in step 1.1 are exactly the functions from $n$ to the set $\{\,j\in\mathbb{N} : j < 2^k\,\}$, and there are $2^{kn}$ of them: by induction on $n$, at $n=0$ there is exactly one such function and $2^{0}=1$, while each function on $n+1$ coordinates is a function on $n$ coordinates together with one of $2^k$ values in the new coordinate, so the count is multiplied by $2^k$ and $(2^k)^{n}\cdot 2^k = (2^k)^{n+1} = 2^{k(n+1)}$. [F4, F5, F6]

3.1 By steps 1.1 and 2.1 the cube $(0,1]^n$ is the union of a list of $2^{kn}$ pairwise disjoint generation-$k$ dyadic cubes, so finite additivity and step 1.2 give $1 = \mu\big((0,1]^n\big) = \sum_{r<2^{kn}}\mu\big(Q_{k,\mathbf{0}}\big)$; no term can be $+\infty$, since then the sum would be $+\infty$ rather than $1$, so the common value is a real and the sum is $2^{kn}\mu\big(Q_{k,\mathbf{0}}\big)$. [step 1.1, step 1.2, step 2.1, L2, F1, F3]

4.1 Dividing by the strictly positive real $2^{kn}$ gives $\mu\big(Q_{k,\mathbf{0}}\big) = 2^{-kn}$, and step 1.2 transfers the value to every generation-$k$ dyadic cube. [step 1.2, step 3.1, F4] ∎

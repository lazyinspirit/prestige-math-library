---
id: def-tagged-partition-and-riemann-sum
kind: definition
title: "Tagged partitions of $[a,b]$, with a tag $\\xi_i$ in each subinterval, and the Riemann sum $S(f,P,\\xi) = \\sum_i f(\\xi_i)\\,\\Delta_i$"
status: draft
origin: session
deps: [def-partition-and-refinement, def-finite-sum, lem-finite-sum-laws, def-interval, def-complete-ordered-field, def-ordered-field, def-sequence, def-darboux-sums, def-bounded-set]
justified_by: []
aliases: [def-riemann-sum]
landmark: true
short: "tagged partition, Riemann sum"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Riemann sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_sum"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

## Definition

Let $a < b$ be reals and let $P = (n,t)$ be a partition of $[a,b]$, with
subintervals $I_i = [t_i,t_{i+1}]$ and lengths $\Delta_i = t_{i+1} - t_i$ for
$i < n$ ([[def-partition-and-refinement]]).

A **tagging** of $P$ is a sequence $\xi : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]) with

$$\xi_i \;\in\; I_i \qquad \text{for every } i < n, \qquad \xi_k := b \ \text{ for } k \ge n ,$$

the second clause being the same bookkeeping tail convention that
[[def-partition-and-refinement]] uses, so that $\xi$ is a genuine sequence and no
index above $n$ is ever read. The pair $(P,\xi)$ is a **tagged partition** of
$[a,b]$, and $\xi_i$ is the **tag** of the $i$-th subinterval. The **mesh** of a
tagged partition is the mesh $\|P\|$ of its underlying partition.

**Taggings exist, and no choice is involved in producing one.** Setting
$\xi_i := t_i$ for $i < n$ and $\xi_k := b$ for $k \ge n$ defines a tagging,
since $t_i \in [t_i,t_{i+1}] = I_i$ ([[def-interval]]). So every partition
carries at least one tagging, exhibited by a formula. What *is* a selection is
choosing a tag in each subinterval subject to a condition, as
[[thm-darboux-equals-riemann]] does; there the family of choices is finite and
the selection is a theorem of ZF.

For $f : [a,b] \to \mathbb{R}$ and a tagged partition $(P,\xi)$ the **Riemann
sum** of $f$ is

$$S(f,P,\xi) \;:=\; \sum_{i<n} f(\xi_i)\,\Delta_i ,$$

the finite sum of [[def-finite-sum]], indexed by $i \in \mathbb{N}$ with $i < n$.
It is a real number, being a finite sum of reals, and it is defined for **every**
$f$, bounded or not: no supremum or infimum of $f$ occurs in it.

### A Riemann sum lies between the Darboux sums of the same partition

Suppose in addition that $f$ is bounded ([[def-bounded-set]]), so that the
Darboux sums of [[def-darboux-sums]] are defined. Then for every tagging $\xi$
of $P$,

$$L(f,P) \;\le\; S(f,P,\xi) \;\le\; U(f,P) .$$

Indeed $\xi_i \in I_i$ gives $m_i \le f(\xi_i) \le M_i$ ([[def-darboux-sums]]),
and multiplying by $\Delta_i > 0$ and summing over $i < n$ preserves the two
inequalities, by monotonicity of finite sums, clause 4 of
[[lem-finite-sum-laws]], and the order axioms ([[def-ordered-field]],
[[def-complete-ordered-field]]).

This one line is the whole of the easy half of
[[thm-darboux-equals-riemann]]: whatever the tags, a Riemann sum is trapped
between the two Darboux sums, so control of $U(f,P) - L(f,P)$ is control of
every Riemann sum over $P$ at once.

## Remarks

- **The tags are unconstrained beyond membership.** In particular a tag may be an
  endpoint, two adjacent subintervals may share their tag at the common endpoint,
  and the tags need not be increasing. The three standard specialisations — left
  endpoints $\xi_i = t_i$, right endpoints $\xi_i = t_{i+1}$, midpoints
  $\xi_i = (t_i + t_{i+1})\cdot 2^{-1}$ — are all taggings, and each is given by a
  formula in $P$.

- **Convergence of Riemann sums is a mesh condition, not a sequence condition.**
  [[thm-darboux-equals-riemann]] quantifies over **all** tagged partitions of
  mesh below $\delta$. Weakening that to a single sequence of tagged partitions
  whose meshes tend to $0$ gives a strictly weaker condition, and the weakening
  is not harmless: the companion page of this pair
  exhibits a non-integrable function whose Riemann sums are constant along such a
  sequence.

- **Why Riemann sums and Darboux sums are both kept.** The Darboux sums are
  canonical functions of $f$ and $P$ and make suprema and infima available
  ([[def-darboux-integral]]); the Riemann sums are defined without any
  completeness of $\mathbb{R}$ and are what a numerical approximation actually
  computes. The theorem that the two routes give the same integral is
  [[thm-darboux-equals-riemann]].

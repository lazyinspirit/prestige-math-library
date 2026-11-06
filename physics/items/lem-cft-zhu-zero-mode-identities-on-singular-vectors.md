---
id: lem-cft-zhu-zero-mode-identities-on-singular-vectors
kind: lemma
title: Zhu zero-mode identities on singular vectors of an arbitrary module
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - lem-cft-locality-to-jacobi-residue-calculus
  - def-cft-zhu-algebra
  - def-vertex-algebra-module
dependency_roles:
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
  def-cft-zhu-algebra: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Dong, Li and Mason, Vertex operator algebras and associative algebras, Theorem 3.2 and its n=0 coefficient calculation"
      url: https://arxiv.org/pdf/q-alg/9612010
dependency_level: 1
---

## Statement

For a conformal vertex algebra V of CFT type and an arbitrary left V-module M define
$$\Omega(M)=\{v\in M:a^M_{(n)}v=0\text{ for every homogeneous }a\in V\text{ and every integer }n\geq\mathrm{wt}(a)\}.$$
For homogeneous a put $o_M(a)=a^M_{(\mathrm{wt}(a)-1)}$, and extend linearly to V. Every $o_M(a)$ preserves $\Omega(M)$, and, for the circle and star operations and O(V) defined in the Zhu quotient construction,
$$o_M(O(V))\Omega(M)=0,\qquad o_M(a*b)v=o_M(a)o_M(b)v\quad(v\in\Omega(M)),\qquad o_M(\mathbf1)=\mathrm{id}_M.$$
No finite-dimensionality, admissible grading, semisimplicity or diagonalizable L(0) is assumed for M.

## Statement references

[[lem-cft-locality-to-jacobi-residue-calculus]]

[[def-cft-zhu-algebra]]

[[def-vertex-algebra-module]]

## Facts & Assumptions

**Given:** The module and the explicitly defined subspace $\Omega(M)$. All equalities below are applied to a fixed vector v in that subspace.

[F1] [[lem-cft-locality-to-jacobi-residue-calculus]] gives the commutator and iterate mode identities from module Jacobi, including generalized binomial coefficients for negative integer upper indices.

[F2] [[def-cft-zhu-algebra]] gives $a\circ b=\sum_{j=0}^r\binom rj a_{(j-2)}b$ and $a*b=\sum_{j=0}^r\binom rj a_{(j-1)}b$ for $a\in V_r$; each nonzero summand has its actual conformal weight supplied by F1.

[F3] [[def-vertex-algebra-module]] supplies vacuum and lower truncation. No grading condition on M is used.

## Proof

1.1 Let $a\in V_r$, $c\in V_s$ and $n\geq s$. By F1, $c^M_{(n)}o_M(a)v=o_M(a)c^M_{(n)}v+\sum_{i\geq0}\binom ni(c_{(i)}a)^M_{(n+r-1-i)}v$. The first term is zero by the definition of $\Omega(M)$. A nonzero state $c_{(i)}a$ has weight $s+r-i-1$, and its mode index is at least that weight because $n\geq s$; thus every term in the sum is zero too. The commutator sum is finite by state truncation. This proves invariance of $\Omega(M)$ under every zero mode. [given, F1, F3, algebra]

1.2 For an integer t with $0\leq t<r$ and either $d=1$ or $d=2$, the polynomial $P_t(j)=\binom{j-d}{t}$ has degree t. Consequently $\sum_{j=0}^r(-1)^j\binom rj\binom{j-d}{t}=0$. To verify this cancellation directly, put $\Delta P(j)=P(j+1)-P(j)$. Iterating the elementary binomial recursion gives $\Delta^rP(0)=\sum_{j=0}^r(-1)^{r-j}\binom rjP(j)$. A difference reduces polynomial degree by at least one, so it is zero after r differences when $t<r$. The generalized binomial $\binom{j-d}{t}=(j-d)(j-d-1)\cdots(j-d-t+1)/t!$ is a polynomial also at $j=0,1$; no positive-index restriction is imposed. [algebra]

2.1 Take homogeneous $a\in V_r,b\in V_s$. For the jth circle summand, set $m=j-2$ and $n=r+s-j$, the zero-mode index of $a_{(j-2)}b$. F1 gives first-product terms $(-1)^t\binom{j-2}{t}a^M_{(j-2-t)}b^M_{(r+s-j+t)}v$, all zero because $r+s-j+t\geq s$. Its second-product term has the fixed b-index $n+m-t=r+s-2-t$ and coefficient $-(-1)^{t+j}\binom{j-2}{t}$. Terms t≥r are zero since $a^M_{(t)}v=0$. Summing the remaining terms over $0\leq j\leq r$ with coefficients $\binom rj$ gives zero by step 1.2 with $d=2$. Thus $o_M(a\circ b)v=0$. All rearrangements are finite: j has finite range, and the surviving second terms have $0\leq t<r$. Bilinearity proves the O(V) assertion. [F1, F2, step 1.2, algebra]

3.1 For the jth star summand instead set $m=j-1$ and $n=r+s-j-1$. The first-product b-index is $r+s-j-1+t$, which is at least s except when $j=r$ and $t=0$. This unique surviving term has coefficient one and is $a^M_{(r-1)}b^M_{(s-1)}v$. The second-product b-index is again $r+s-2-t$ and its coefficient after summing j is $-(-1)^t\sum_{j=0}^r(-1)^{j-1}\binom rj\binom{j-1}{t}$. It vanishes for $t<r$ by step 1.2 with $d=1$, while t≥r vanishes by the defining annihilation of v. Hence $o_M(a*b)v=o_M(a)o_M(b)v$. If $r=0$, the $t<r$ sums are empty and the same first-product argument still has exactly the one surviving term; thus no exceptional weight-zero case is omitted. Finally $\mathbf1^M_{(-1)}=\mathrm{id}_M$ by vacuum. Together with step 1.1 these prove all the asserted identities. [F1, F2, F3, step 1.1, step 1.2, step 2.1, algebra] ∎

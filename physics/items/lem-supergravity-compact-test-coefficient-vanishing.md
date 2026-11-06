---
id: lem-supergravity-compact-test-coefficient-vanishing
kind: lemma
title: Compactly Supported Tests Determine Continuous Local Coefficients
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - def-multidimensional-darboux-integral
  - def-multidimensional-darboux-sums
  - def-multidimensional-grid-partition
  - def-multidimensional-rectangle-and-volume
dependency_roles:
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  def-multidimensional-darboux-sums: mathematical-premise
  def-multidimensional-grid-partition: mathematical-premise
  def-multidimensional-rectangle-and-volume: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§6.1, Theorem 6.2 proof; compactly supported variations determine the local metric Euler coefficient."
    - title: "David Tong, General Relativity, University of Cambridge Part III lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "§4.1.1, printed pp. 141–145, PDF pp. 148–152; local compactly supported variations and coefficient extraction."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $n,m\ge1$, let $U\subseteq\mathbb R^n$ be open, let $w:U\to(0,\infty)$ be continuous, and let $A_i:U\to\mathbb R$, $i=1,\ldots,m$, be continuous. For a smooth compactly supported test $\psi=(\psi^1,\ldots,\psi^m):U\to\mathbb R^m$, define the chart integral of $\sum_i A_i\psi^i w$ by extending its compactly supported continuous integrand by zero to a containing rectangle. If

$$
\int_U\sum_{i=1}^m A_i(x)\psi^i(x)w(x)\,d^nx=0
$$

for every such $\psi$, then $A_i(x)=0$ for every $i$ and $x$. The lemma assumes no metric, field equation, or choice principle.

## Facts & Assumptions

**Given:** The integers $n,m\ge1$, open $U\subseteq\mathbb R^n$, positive continuous $w$, continuous $A_i$, and the stated vanishing pairing for all smooth compactly supported tests.

[F1] For $0<r<R$, there is a smooth $\rho:\mathbb R^n\to[0,1]$ equal to $1$ on $\overline B_r(0)$ and supported in $B_R(0)$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F2] Every continuous real function on a closed nondegenerate rectangle in $\mathbb R^n$ is Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]).

[F3] The lower Darboux integral is the supremum of the lower sums, and each lower sum is $\sum_j(\inf_{Q_j}f)\operatorname{vol}(Q_j)$ ([[def-multidimensional-darboux-integral]], [[def-multidimensional-darboux-sums]]).

[F4] For a nondegenerate rectangle its volume is the product of its positive side lengths; in particular it is positive ([[def-multidimensional-rectangle-and-volume]]).

[F5] A finite grid is obtained by partitioning each coordinate interval; inserting the endpoints of a closed subrectangle makes it a cell of a grid ([[def-multidimensional-grid-partition]]).

## Proof

**Proof technique:** contradiction; isolate one nonzero component with a nonnegative smooth bump and obtain a strictly positive lower Darboux sum.

1.1 Suppose $A_j(p)\ne0$ for some $j$ and $p\in U$. Choose $\varepsilon\in\{-1,1\}$ so that $\varepsilon A_j(p)w(p)>0$. By continuity of $x\mapsto\varepsilon A_j(x)w(x)$ and openness of $U$, there are $R>0$ and $c>0$ such that $\overline B_R(p)\subset U$ and $\varepsilon A_j(x)w(x)>c$ throughout $\overline B_R(p)$. [given, assume-contra]

2.1 Choose $0<r<R$ with $\overline B_r(p)$ containing a nondegenerate closed coordinate cube $Q$ centered at $p$. By [F1], after translation there is $0\le\rho\le1$ with $\rho=1$ on $\overline B_r(p)$ and support in $B_R(p)$. Set $\psi^j=\varepsilon\rho$ and $\psi^i=0$ for $i\ne j$; this is a smooth compactly supported test in $U$. Its pairing integrand $F=\varepsilon\rho A_jw$ is nonnegative everywhere, is continuous and compactly supported, and satisfies $F>c$ on $Q$. [step 1.1, F1, construct]

3.1 Extend $F$ by zero to a closed rectangle containing its support. It is continuous there and Riemann integrable by [F2]. By [F5], choose a grid that includes the faces of $Q$, so $Q$ is one cell. [step 2.1, F2, F5]

4.1 On every other grid cell $F\ge0$, while on $Q$, $\inf_QF\ge c$; [F3] and [F4] therefore give a lower sum at least $c\operatorname{vol}(Q)>0$. The integral, being the lower Darboux integral, is positive. [step 1.1, step 2.1, step 3.1, F3, F4]

5.1 Step 4.1 makes the pairing for the admissible $\psi$ strictly positive, contrary to its assumed value zero. Thus no component $A_j$ is nonzero at any point, as required. [step 4.1, given, discharge-contradiction] ∎

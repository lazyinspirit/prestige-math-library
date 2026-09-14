---
id: lem-dvoretzky-rogers-finite-block-estimate
kind: lemma
title: "The Dvoretzky--Rogers finite-block estimate"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-dimensional-auerbach-basis]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: extremal
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "A. Dvoretzky and C. A. Rogers, Absolute and Unconditional Convergence in Normed Linear Spaces"
      url: "https://eclass.uoa.gr/modules/document/file.php/MATH195/4.%20%CE%86%CF%81%CE%B8%CF%81%CE%B1%20%CE%95%CF%80%CE%B9%CF%83%CE%BA%CF%8C%CF%80%CE%B7%CF%83%CE%B7%CF%82/8-Dvoretzky_Rogers.pdf"
      locator: "Lemmas 1-2 and complete proofs, PNAS 36 (1950), pp.193-195"
pipeline_run: phase-2-next-18
---

## Statement

Let $r\ge2$, let $V$ be a real or complex normed space of scalar dimension at
least $r(r-1)$, and let $d_1,\ldots,d_r>0$. There are $x_1,\ldots,x_r\in V$
such that $\|x_i\|^2=d_i$ and, for every
$A\subseteq\{1,\ldots,r\}$,

$$\left\|\sum_{i\in A}x_i\right\|^2\le3\sum_{i\in A}d_i.$$

## Facts & Assumptions

[L1] Every nonzero finite-dimensional normed space admits a normalized
biorthogonal Auerbach basis ([[lem-finite-dimensional-auerbach-basis]]).

## Proof

**Proof technique:** extremal.

**Given:** The objects and hypotheses in the Statement.

1.1 The case $r=2$ is direct: choose any unit $u$ and put [given, L1] $x_i=\sqrt{d_i}u$. The only nontrivial subset satisfies $\|x_1+x_2\|^2\le2(d_1+d_2)<3(d_1+d_2)$. [L1, algebra]

2.1 Suppose $r\ge3$ and put $n=r(r-1)$. Choose an $n$-dimensional real [given, L1, step 1.1] subspace $W$ of $V$ (in the complex case, use the underlying real space). In Auerbach coordinates from [L1], compactness bounds the family of centered ellipsoids contained in the unit ball of $W$, so their determinants attain a maximum. After a linear change of coordinates, take that ellipsoid to be the Euclidean unit ball. [L1, algebra]

3.1 Dvoretzky--Rogers' contact-point induction gives boundary points $A_p=(a_{p1},\ldots,a_{pp},0,\ldots,0)$, $1\le p\le r$, satisfying [given, step 2.1]

$$\sum_{j<p}a_{pj}^2\le\frac{p-1}{n},\qquad \sum_{j\le p}a_{pj}^2=1.$$

For the induction step $p$, consider the ellipsoid

$$ (1+\varepsilon)^{n-p+1}\sum_{j<p}u_j^2 +(1+\varepsilon+\varepsilon^2)^{-(p-1)}\sum_{j\ge p}u_j^2\le1. $$

Its volume divided by that of the unit ball is

$$ \left(\frac{1+\varepsilon+\varepsilon^2}{1+\varepsilon}\right)^{(p-1)(n-p+1)/2}>1. $$

Maximality therefore says that this ellipsoid is not contained in the norm
unit ball. A ray to a point witnessing noncontainment meets the norm-unit
boundary at a point $A(\varepsilon)$ in the interior of the ellipsoid. Since
the Euclidean unit ball is contained in the norm unit ball,
$|A(\varepsilon)|_2\ge1$. Letting $\varepsilon\downarrow0$ through a compact
subsequence gives a common contact point $A_p$ and, after subtracting
$|A(\varepsilon)|_2^2\ge1$ from the ellipsoid inequality and dividing by
$\varepsilon$,

$$ (n-p+1)\sum_{j<p}a_{pj}^2-(p-1)\sum_{j\ge p}a_{pj}^2\le0. $$

An orthogonal rotation of the last $n-p+1$ coordinates makes all but the
$p$-th of them zero without moving the earlier contact points. Since
$|A_p|_2=1$, the last inequality is exactly
$n\sum_{j<p}a_{pj}^2\le p-1$. [step 2.1, maximality, compact subsequence]

4.1 The triangular form and scalar Cauchy--Schwarz now give, for real $\lambda_1,\ldots,\lambda_r$, [given, step 3.1]

$$\left|\sum_{p=1}^r\lambda_pA_p\right|_2^2 \le\left(2+\frac{r(r-1)}n\right) \sum_{p=1}^r\lambda_p^2 =3\sum_{p=1}^r\lambda_p^2.$$

Because the maximal Euclidean ball lies in the norm unit ball, the same upper
bound holds for the squared norm in $W$. [step 3.1, finite triangular sum]

5.1 Put $x_i=\sqrt{d_i}A_i$ and in step 4.1 take [given, step 4.1] $\lambda_i=\sqrt{d_i}$ for $i\in A$ and $0$ otherwise. Each $A_i$ lies on the norm-unit boundary, so $\|x_i\|^2=d_i$, and the required subset inequality follows. The empty subset gives zero. [step 2.1, 4.1] ∎
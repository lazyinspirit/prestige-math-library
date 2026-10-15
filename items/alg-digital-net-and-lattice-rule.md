---
id: alg-digital-net-and-lattice-rule
kind: algorithm
title: "Digital point-set and rank-one lattice cube quadrature"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-star-discrepancy-and-digital-net
  - lem-integer-part
  - def-common-divisor-and-gcd
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 15 §15.7 and Chapter 16 §16.1"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Harald Niederreiter, Random Number Generation and Quasi-Monte Carlo Methods, Chapter 4 §4.1 and Chapter 5 §5.3"
      url: "https://www.ricam.oeaw.ac.at/files/people/siambook_nied.pdf"
---

## Definition

**Inputs:** a dimension $d\ge1$, a function $f:[0,1]^d\to\mathbb R$ that is finite at each generated node, and exactly one of the following point-set specifications:

1. **Digital branch:** a prime $p$, an integer $m\ge1$, and matrices $C_1,\ldots,C_d\in\mathbb F_p^{m\times m}$. Optionally supply an integer $t$ with $0\le t\le m$ when the caller also wants the exact $(t,m,d)$-net property checked.
2. **General lattice-rule branch:** a full-rank discrete additive subgroup $L\subset\mathbb R^d$ containing $\mathbb Z^d$, with finite quotient $L/\mathbb Z^d$, and a supplied complete list $P$ of the distinct coset representatives in $[0,1)^d$.
3. **Rank-one lattice branch:** an integer $N\ge1$ and $z=(z_1,\ldots,z_d)\in\mathbb Z^d$ with $\gcd(z_1,N)=1$, where $\gcd$ has the convention of [[def-common-divisor-and-gcd]].

**Outputs:** The ordered point list $P$, the finite node average $A_P(f)$, and, when $t$ is supplied in the digital branch, the net-count check result.

A lattice rule means the equal-weight rule on the representatives of an integration lattice $L$ as in branch 2; its node count is $N=|L/\mathbb Z^d|$. Branch 3 specifies the rank-one fractional-part construction.

**Instructions:**

1. In the digital branch, for each $n=0,\ldots,p^m-1$, write $n=\sum_{r=1}^m n_{r-1}p^{r-1}$, form $v(n)=(n_0,\ldots,n_{m-1})^T\in\mathbb F_p^m$, and compute $y^{(j)}=C_jv(n)$ in $\mathbb F_p^m$. Replace each coordinate $y^{(j)}_r$ by its representative in $\{0,\ldots,p-1\}$ and set $x_{n,j}=\sum_{r=1}^m y^{(j)}_r p^{-r}$. The output point list is $P=(x_0,\ldots,x_{p^m-1})$. If $t$ was supplied, enumerate every integer tuple $k_1,\ldots,k_d\ge0$ with $\sum_jk_j=m-t$ and every tuple $a_j\in\{0,\ldots,p^{k_j}-1\}$; count the output nodes in each corresponding elementary interval. Return “net check passed” exactly when every count equals $p^t$, and otherwise return “not a $(t,m,d)$-net.”
2. In the general lattice-rule branch, take the supplied complete list $P$ of representatives; do not add further points or repeat any coset representative.
3. In the rank-one lattice branch, for each $n=0,\ldots,N-1$, set $x_{n,j}=\{nz_j/N\}$ for $j=1,\ldots,d$, where $\{a\}:=a-\lfloor a\rfloor\in[0,1)$ and $\lfloor a\rfloor$ is the integer part from [[lem-integer-part]]. The output point list is $P=(x_0,\ldots,x_{N-1})$.
4. In each branch, let $N$ be the output list length and return the finite node average $A_P(f):=N^{-1}\sum_{n=0}^{N-1}f(x_n)$ together with $P$. In the digital branch $N=p^m$; in the general lattice branch $N=|L/\mathbb Z^d|$. When $f$ is bounded and Riemann integrable, $A_P(f)=Q_P(f)$ and its target is the cube integral $I_d(f)$ of [[def-star-discrepancy-and-digital-net]]. For other admissible inputs the finite average is still defined, but no cube-integral target is asserted. The algorithm does not estimate a discrepancy, a variation, or a sampling variance, and a generated digital point set has no claimed net quality unless the optional count check passes.

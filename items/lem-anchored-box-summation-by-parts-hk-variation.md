---
id: lem-anchored-box-summation-by-parts-hk-variation
kind: lemma
title: "Anchored-box summation by parts for finite Hardy–Krause variation"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-star-discrepancy-and-digital-net
  - def-hardykrause-variation
  - def-multidimensional-grid-partition
  - def-multidimensional-rectangle-and-volume
  - def-multidimensional-tagged-partition-and-riemann-sum
  - lem-finite-hardykrause-variation-implies-riemann-integrability
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 15 §15.4 and end notes"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Harald Niederreiter, Random Number Generation and Quasi-Monte Carlo Methods, Chapter 2 §2.2"
      url: "https://www.ricam.oeaw.ac.at/files/people/siambook_nied.pdf"
    - title: "Lukas Einkemmer, Quasi-Monte Carlo Methods, §2.3"
      url: "https://www.einkemmer.net/files/qmm.pdf"
---

## Statement

Let $N\ge1$, let $P=(x_0,\ldots,x_{N-1})$ be a point multiset in $[0,1)^d$, and let $f:[0,1]^d\to\mathbb R$ have finite upper-anchor Hardy–Krause variation. This finiteness implies that $f$ is bounded and Riemann integrable by [[lem-finite-hardykrause-variation-implies-riemann-integrability]], so $Q_P(f)$ is defined. Let $G$ be a finite coordinate grid containing every coordinate of every point of $P$, with knots $0=t_{j,0}<\cdots<t_{j,m_j}=1$. Its lower-corner Riemann sum is
$$C_k:=\prod_{j=1}^d[t_{j,k_j},t_{j,k_j+1}],\qquad S_G(f):=\sum_{0\le k_j<m_j} f(t_{1,k_1},\ldots,t_{d,k_d})\operatorname{vol}(C_k),$$
where the cells and volume convention are those of [[def-multidimensional-grid-partition]] and [[def-multidimensional-rectangle-and-volume]], and $S_G$ is the lower-corner tagged Riemann sum of [[def-multidimensional-tagged-partition-and-riemann-sum]].
Then $\left|Q_P(f)-S_G(f)\right|\le D_N^*(P)V_{HK,1}(f)$, with the quadrature and star discrepancy of [[def-star-discrepancy-and-digital-net]] and the variation of [[def-hardykrause-variation]].

## Facts & Assumptions
**Given:** A finite nonempty point multiset $P\subset[0,1)^d$ and a real-valued $f$ with $V_{HK,1}(f)<\infty$.

[F1] $D_N^*(P)$ is the supremum of the absolute empirical-minus-volume error on boxes $\prod_j[0,u_j)$, and $Q_P(f)$ is the average of $f$ at the listed nodes. ([[def-star-discrepancy-and-digital-net]])

[F2] $V_{HK,1}(f)$ is the sum over nonempty coordinate subsets of the Vitali variations of the restrictions with all complementary coordinates fixed at $1$. ([[def-hardykrause-variation]])

[F3] A coordinatewise grid is a finite product of one-dimensional partitions; adding finitely many coordinate knots refines the grid and does not increase its mesh. ([[def-multidimensional-grid-partition]])

[F4] The volume of a closed rectangle is the product of its side lengths. ([[def-multidimensional-rectangle-and-volume]])

[F5] A Riemann sum assigns one tag to each grid cell; lower corners are canonical tags and the sum is the sum of tag values times cell volumes. ([[def-multidimensional-tagged-partition-and-riemann-sum]])

[F6] Finite upper-anchor Hardy–Krause variation implies bounded Riemann integrability, the domain required for $Q_P(f)$. ([[lem-finite-hardykrause-variation-implies-riemann-integrability]], [[def-star-discrepancy-and-digital-net]])

## Proof

1.1 Write the grid knots in coordinate $j$ as $0=t_{j,0}<\cdots<t_{j,m_j}=1$, and assign each point of $P$ to its unique half-open cell $C_k=\prod_j[t_{j,k_j},t_{j,k_j+1})$. Define $c_\ell=f(t_{1,\ell_1},\ldots,t_{d,\ell_d})$ for every vertex index with $0\le\ell_j\le m_j$; cell tags use the lower indices $k_j<m_j$. Put $F(k)=N^{-1}\#\{i:x_i\in\prod_j[0,t_{j,k_j})\}-\prod_jt_{j,k_j}$. Inclusion–exclusion in the $d$ coordinates gives $N^{-1}\#\{i:x_i\in C_k\}-\prod_j(t_{j,k_j+1}-t_{j,k_j})=\Delta_1\cdots\Delta_dF(k)$, with $\Delta_jF(k)=F(k+e_j)-F(k)$. Also $F(k)=0$ if any $k_j=0$, while $F(m_1,\ldots,m_d)=0$ because all points lie in $[0,1)^d$ and the full cube has volume $1$. The grid contains every node coordinate, so the point's assigned cell has it as lower corner. Summing the cell identities weighted by $c_k$ gives $Q_P(f)-S_G(f)=\sum_kc_k\Delta_1\cdots\Delta_dF(k)$. [F1, F3, F4, F5, F6, given]

2.1 For one coordinate, the finite summation-by-parts identity is $\sum_{k=0}^{m-1}a_k(b_{k+1}-b_k)=a_mb_m-a_0b_0-\sum_{k=1}^m b_k(a_k-a_{k-1}).$ In each application here, the sequence $b$ has $b_0=0$: initially it is $F$ with that coordinate index zero, and at each successive application it is a finite difference in other coordinates of such values of $F$. Step 1.1 gives $F=0$ whenever any coordinate index is zero, so these lower-boundary terms vanish throughout the iteration and the shortened identity with no $a_0b_0$ term is valid. Applying it successively in all $d$ coordinates gives a sum over subsets $u\subseteq\{1,\ldots,d\}$: the empty subset contributes $c_{m_1,\ldots,m_d}F(m_1,\ldots,m_d)=0$; for each nonempty $u$, the terms are $(-1)^{|u|}F(k_u,m_{-u})\Delta_uc(k_u,m_{-u})$, summed over $1\le k_j\le m_j$ for $j\in u$. Here $\Delta_uc(k_u,m_{-u})$ is the alternating sum of the $2^{|u|}$ vertex values with coordinate index $k_j-1+\epsilon_j$ for $j\in u$ and index $m_j$ for $j\notin u$, weighted by $(-1)^{|u|-|\epsilon|}$. The identity follows by induction on the number of coordinates: the one-coordinate formula is the base case, and applying it in the next finite sum adds that coordinate to the subsets in the difference terms while giving the stated upper-boundary term. Each $F(k_u,m_{-u})$ is the discrepancy of the anchored box $\prod_{j\in u}[0,t_{j,k_j})\times\prod_{j\notin u}[0,1)$, so its absolute value is at most $D_N^*(P)$ by [F1]. Each $\Delta_uc$ is exactly the alternating increment on a cell of the face with complementary coordinates fixed at $1$; hence its absolute-value sum over that face grid is at most $V_V(f_u)$. Summing over nonempty $u$ and using [F2] gives $\left|Q_P(f)-S_G(f)\right|\le D_N^*(P)V_{HK,1}(f)$. [F1, F2, F6, step 1.1, algebra] ∎

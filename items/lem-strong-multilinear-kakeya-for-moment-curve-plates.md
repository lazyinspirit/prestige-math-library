---
dependency_level: 4
id: lem-strong-multilinear-kakeya-for-moment-curve-plates
kind: lemma
title: Strong multilinear Kakeya moment bound for moment-curve plates
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-countable-choice
- prop-uniform-moment-curve-brascamp-lieb-constant
- def-moment-curve-plates-and-osculating-subspaces
- thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Bourgain–Demeter–Guth, Proof of the main conjecture in Vinogradov’s mean
      value theorem
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
  - title: Larry Guth, A short proof of the multilinear Kakeya inequality, full seven-page
      note; local proof extends the finite-scale argument explicitly to all k
    url: https://math.mit.edu/~lguth/decouplingseminar/shortmultkak.pdf
---

## Statement

Assume Countable Choice. Let $n\ge2$, $1\le k<n$, $M=n!$, $K\ge2M$, and let $I_1,\ldots,I_M$ have length $K^{-1}$ and pairwise distances at least $K^{-1}$. In a ball $B$ of radius $4R$, $R\ge1$, take arbitrary finite weighted families of plates of short length $R^{1/2}$, long length $R$, and normal spaces $V_k(t_P)$ with $t_P\in I_j$. Put $F_j=\sum_{P\in\mathcal P_j}c_P\mathbf1_P$, $c_P\ge0$. For every $\varepsilon>0$,
$$ \operatorname{av}_B\prod_{j=1}^MF_j^{n/(kM)}\le C_{n,k,K,\varepsilon}R^\varepsilon\prod_{j=1}^M(\operatorname{av}_BF_j)^{n/(kM)}. $$
All plates are contained in $B$ and the constant is independent of their number, multiplicities, coefficients and $R$.

## Statement references

[Source proof development](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[F1] The geometric BL bounds are uniform on separated moment-curve tuples ([[prop-uniform-moment-curve-brascamp-lieb-constant]]). The plate conventions and Holder are [[def-moment-curve-plates-and-osculating-subspaces]] and [[thm-holder-inequality-for-integrals]]. The remaining explicit interfaces are [[def-countable-choice]].

## Proof

1.1 For each affine long-axis plane $L_{j,b}$ and thickness $W>0$, define $F_{j,W}(x)=\sum_b c_{j,b}\mathbf1_{\{\operatorname{dist}(x,L_{j,b})\le W\}}$. Set $a=n/(kM)\le1$. For fixed normal spaces with BL bound $C_0$, infinite affine slabs of thickness $W$ about their orthogonal complements satisfy $$ \int_{\mathbb R^n}\prod_j(\sum_bc_{j,b}\mathbf1_{\{\operatorname{dist}(x,L_{j,b})\le W\}})^a\,dx\le C W^n\prod_j(\sum_bc_{j,b})^a. $$ Indeed each slab is a pullback of a $k$-ball of radius $W$. Write each affine plane as $L_{j,b}=\{x:\pi_jx=v_{j,b}\}$ and put $Q_{j,b}=B_{V_j}(v_{j,b},W)$ and $g_j=(\sum_bc_{j,b}\mathbf1_{Q_{j,b}})^{1/2}$. Then $g_j\circ\pi_j=F_{j,W}^{1/2}$. Apply the $L^2$-input BL inequality to these $g_j$ and raise it to power $2n/k$. Each squared $L^2$ norm equals $|B_{V_j}(0,W)|\sum_bc_{j,b}\le C_kW^k\sum_bc_{j,b}$, and the total exponent on $W$ is $kMa=n$. This is the exactly parallel estimate, valid directly for real weights. [given, F1, construct, algebra]

1.2 Suppose now every normal space in family $j$ is within operator-norm distance $\theta$ of a fixed reference normal space. On a cube $q$ of side between $\theta^{-1}W/(20n)$ and $\theta^{-1}W/(10n)$, each $W$-slab meeting $q$ is contained there in a parallel reference slab of thickness $C_nW$. To verify this, choose an intersection point and compare projections at another point of $q$; their difference is bounded by $\theta\operatorname{diam}q$, and the original distance costs $W$. Let $N_j(q)$ be the sum of coefficients of original slabs meeting $q$. The preceding parallel estimate gives $\int_q\prod_jF_{j,W}^a\le C W^n\prod_jN_j(q)^a$. Every slab meeting $q$ has its $\theta^{-1}W$ enlargement equal to one everywhere on $q$, provided $\theta$ is a sufficiently small dimensional constant. Since $|q|\asymp_n\theta^{-n}W^n$, this implies $$ \int_q\prod_jF_{j,W}^a\le C\theta^n\int_q\prod_jF_{j,\theta^{-1}W}^a. $$ This is the required comparison on $q$. [given, F1, construct, algebra]

1.3 Choose the auxiliary loss $0<\epsilon<n$; any prescribed final loss follows by using a smaller auxiliary loss. For a cube $Q$ of side $S\ge\theta^{-1}W$, partition it into equal subcubes with those side-length bounds, allowing a harmless dimensional adjustment by choosing the number of divisions as the least integer above $10n\theta S/W$. Summing the last inequality gives the same recurrence on $Q$. Iterate while $\theta^{-m}W\le C_nS$. At termination bound each enlarged sum by its total coefficient. The resulting bound is $C(\theta)C^mW^n\prod_j(\sum_bc_{j,b})^a$, with $m\le C_n+\log(S/W)/\log\theta^{-1}$. Choose $\theta$ so $\log C/\log\theta^{-1}$ is smaller than any prescribed positive loss. This proves $C_{\epsilon}S^\epsilon W^{n-\epsilon}\prod_j(\sum c)^a$. If $S<\theta^{-1}W$, the trivial $S^n$ bound has the same conclusion after increasing the constant. The recurrence constant depends on $n,k,C_0$, not on $\theta$; the parallel majorant thickness was $C_nW$. [given, F1, construct, algebra]

1.4 The map $t\mapsto V_k(t)$ is uniformly continuous on $[0,1]$ by its full-rank derivative frame. Partition each $I_j$ into finitely many pieces so the variation of its normal projection is at most $\theta$. Choose one reference parameter in each nonempty piece. Any reference tuple remains separated by $K^{-1}$, so [F1] supplies one common $C_0$. Expand the product over the finite directional pieces using $(\sum_lu_l)^a\le\sum_lu_l^a$ for $0<a\le1$. Apply the preceding near-reference estimate to every reference tuple and sum the finitely many resulting bounds. The number of tuples depends only on $n,k,K,\epsilon$. Each final coefficient sum is at most the original family sum, so it is absorbed in that constant. [given, F1, construct, algebra]

2.1 A finite plate is contained in the infinite slab about its long-axis affine plane of thickness $C_nR^{1/2}$. Put $W=C_nR^{1/2}$ and enclose $B$ in a cube of side $C_nR$; for bounded $R$ use the trivial estimate separately. The preceding result gives $\int_B\prod_jF_j^a\le C_\varepsilon R^{n/2+\varepsilon}\prod_j(\sum_Pc_P)^a$, after making its input loss smaller if necessary. Each plate has volume $R^{n-k/2}$ and is contained in $B$, so $\operatorname{av}_BF_j=C_nR^{-k/2}\sum_Pc_P$. Division by $|B|\asymp R^n$ gives exactly the stated bound, since $kMa/2=n/2$. Every estimate was for arbitrary $k$, without mapping the reference tuple to coordinate-line directions. [given, F1, construct, algebra] ∎

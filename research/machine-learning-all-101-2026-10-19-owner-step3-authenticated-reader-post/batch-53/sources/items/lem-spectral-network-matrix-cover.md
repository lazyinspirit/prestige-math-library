---
id: lem-spectral-network-matrix-cover
kind: lemma
title: "A proper matrix-product cover from the mixed (2,1) norm"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-spectral-network-complexity
  - def-sample-covering-number
  - def-frobenius-matrix-norm
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - cor-triangle-inequality-for-inner-product-norm
  - thm-heine-borel-rn
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-extreme-value-metric
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Peter L. Bartlett, Dylan J. Foster, and Matus Telgarsky, Spectrally-normalized margin bounds for neural networks, Lemma 3.2 and Appendix A.4"
      url: "https://arxiv.org/pdf/1706.08498"
---

## Statement

Let $X\in\mathbb R^{n\times d}$, $M\in\mathbb R^{d\times m}$ with $n,d,m\ge1$, and let $a,s\ge0$. Suppose
$$C:=\{A\in\mathbb R^{d\times m}:\lVert A-M\rVert_{2,1}\le a,\ \lVert A\rVert_\sigma\le s\}$$
is nonempty. Put $U:=\{XA:A\in C\}$. For every $\epsilon>0$,
$$\log N_F(U,\epsilon)\le5\,\frac{a^2\lVert X\rVert_F^2}{\epsilon^2}\log(2dm).$$
If $a\lVert X\rVert_F=0$ or $\epsilon\ge2a\lVert X\rVert_F$, then $N_F(U,\epsilon)=1$. Here $\lVert A-M\rVert_{2,1}$ is the sum of the Euclidean norms of the columns of $A-M$; when applying this lemma to a network layer, take $A=A_i^\top$ and $M=M_i^\top$, as in the spectral-network-complexity definition. The number $N_F$ is the proper Frobenius covering number.

## Statement references

[[def-spectral-network-complexity]]: defines the column-sum mixed norm and the induced Euclidean operator norm.

[[def-sample-covering-number]]: defines the proper cover whose centers must lie in $U$.

[[def-frobenius-matrix-norm]]: defines the Euclidean matrix-entry norm used to measure cover error.

[Bartlett, Foster, and Telgarsky, Lemma 3.2 and Appendix A.4](https://arxiv.org/pdf/1706.08498): gives the Maurey sparsification route to this matrix-product cover.

## Facts & Assumptions

**Given:** Matrices $X,M$, dimensions and constants as in the Statement, and the nonempty feasible set $C$.

[F1] $\lVert Z\rVert_F^2$ is the sum of the squared absolute values of all entries of $Z$. [[def-frobenius-matrix-norm]]

[F2] $|\langle u,v\rangle|\le\lVert u\rVert\lVert v\rVert$ in a real or complex inner-product space. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

[F3] The Euclidean inner-product norm is homogeneous and satisfies the triangle inequality. [[cor-triangle-inequality-for-inner-product-norm]]

[F4] $N_F(U,\epsilon)$ is the least size of a finite proper Frobenius cover of $U$. [[def-sample-covering-number]]

[F5] Closed bounded subsets of finite-dimensional real Euclidean space are compact. [[thm-heine-borel-rn]]

[F6] $\log$ is strictly increasing on positive reals and satisfies $\log(xy)=\log x+\log y$. [[def-natural-logarithm]] [[thm-natural-logarithm-laws]]

[F7] The mixed norm is the sum of the Euclidean column norms, and $\lVert A\rVert_\sigma$ is the induced Euclidean operator norm. [[def-spectral-network-complexity]]

[F8] A continuous map from a compact metric space has compact image. [[thm-continuous-image-of-a-compact-space-is-compact]]

[F9] A continuous real-valued function on a nonempty compact metric space attains its minimum. [[thm-extreme-value-metric]]

## Proof
1.1 For any $B\in\mathbb R^{d\times m}$, write its columns as $b_j$ and the columns of $X$ as $x_r$. By [F2], $\lVert Xb_j\rVert_2^2=\sum_i|\sum_rX_{ir}(b_j)_r|^2\le\lVert X\rVert_F^2\lVert b_j\rVert_2^2$. Summing over $j$ gives $\lVert XB\rVert_F\le\lVert X\rVert_F(\sum_j\lVert b_j\rVert_2^2)^{1/2}\le\lVert X\rVert_F\sum_j\lVert b_j\rVert_2=\lVert X\rVert_F\lVert B\rVert_{2,1}$; the middle inequality follows by squaring, since all column norms are nonnegative. Thus $\lVert A-A'\rVert_{2,1}\le2a$ for $A,A'\in C$, and the diameter of $U$ is at most $2a\lVert X\rVert_F$. If $a\lVert X\rVert_F=0$, $U$ is a singleton; if $\epsilon\ge2a\lVert X\rVert_F$, any one point of nonempty $U$ covers it. [F1, F2, F7, given, algebra]

1.2 Assume $a\lVert X\rVert_F>0$ and $0<\epsilon<2a\lVert X\rVert_F$. For each nonzero column $x_r$, each output coordinate $j$, and each sign $\eta\in\{-1,+1\}$, form the rank-one atom $V_{rj\eta}=\eta(x_r/\lVert x_r\rVert_2)e_j^\top$, where $e_j$ is the $j$th standard basis vector in $\mathbb R^m$. There are at most $2dm$ atoms and each has Frobenius norm $1$. For $B=A-M$, the expansion $XB=\sum_{r,j}(B)_{rj}x_re_j^\top$ has coefficient mass $\beta:=\sum_{r,j}|B_{rj}|\lVert x_r\rVert_2\le\lVert B\rVert_{2,1}\lVert X\rVert_F\le a\lVert X\rVert_F=:c$, by [F2] column by column. Hence $XB/c$ lies in the convex hull of these signed atoms: if $\beta<c$, fill the remaining weight with $0$, which is the midpoint of an atom and its negative. If $\beta=0$, the product is $0$. [F1, F2, F7, given, construct, algebra]

2.1 For an integer $k\ge1$, sample $k$ atoms independently from the finite convex representation of $XB/c$ constructed in step 1.2. If $V_1,\ldots,V_k$ are these atoms and $\mathbb E V_1=XB/c$, expansion of the squared Frobenius norm and independence give $\mathbb E\lVert c k^{-1}\sum_{t=1}^kV_t-XB\rVert_F^2=(c^2/k)(\mathbb E\lVert V_1\rVert_F^2-\lVert\mathbb EV_1\rVert_F^2)\le c^2/k$. Therefore some ordered $k$-tuple gives a center within $c/\sqrt k$, and all such centers number at most $(2dm)^k$. Taking $k=\lceil c^2/\epsilon^2\rceil$ yields an external $\epsilon$-cover of the translated relaxed product set $XM+\{XB:\lVert B\rVert_{2,1}\le a\}$. [F1, step 1.2, given, algebra, construct]

3.1 The mixed-norm constraint set is convex: for $A,A'\in C$ and $0\le t\le1$, the column triangle inequality [F3] gives $\lVert t(A-M)+(1-t)(A'-M)\rVert_{2,1}\le ta+(1-t)a=a$. The operator-norm constraint is convex because for each unit vector $v$, $\lVert(tA+(1-t)A')v\rVert_2\le t\lVert Av\rVert_2+(1-t)\lVert A'v\rVert_2\le s$, and taking the supremum over $v$ preserves the bound. The mixed norm is continuous as a finite sum of continuous column norms. From [F7] and the Euclidean triangle inequality, $|\lVert A\rVert_\sigma-\lVert A'\rVert_\sigma|\le\lVert A-A'\rVert_\sigma\le\lVert A-A'\rVert_F$, where the last inequality follows from the rowwise Cauchy estimate in step 1.1; hence the operator norm is continuous and $C$ is closed. Also $\lVert A-M\rVert_F\le\lVert A-M\rVert_{2,1}\le a$, so $C$ is bounded. Identify the real matrix space with $\mathbb R^{dm}$ by its entries; its Euclidean norm is the Frobenius norm, so [F5] makes $C$ compact. The map $T(A)=XA$ is continuous because step 1.1 and [F2] give $\lVert T(A)-T(A')\rVert_F\le\lVert X\rVert_F\lVert A-A'\rVert_{2,1}\le\sqrt m\lVert X\rVert_F\lVert A-A'\rVert_F$. Hence [F8] makes $U=T(C)$ compact; it is convex because $C$ is convex and $T$ is linear. For each of the finitely many external centers $z$ from step 2.1, the function $u\mapsto\lVert z-u\rVert_F$ is continuous on the nonempty compact metric space $U$, since the reverse triangle inequality bounds its change by $\lVert u-u'\rVert_F$. Thus [F9] gives a nearest point $p\in U$ for each center; enumerate the finite center set and choose these minimizers successively. For any $u\in U$, convexity gives $p+t(u-p)\in U$ for $0\le t\le1$. Put $\langle P,Q\rangle_F:=\sum_{i,j}P_{ij}Q_{ij}$. Minimality implies $0\le\lVert z-p-t(u-p)\rVert_F^2-\lVert z-p\rVert_F^2=-2t\langle z-p,u-p\rangle_F+t^2\lVert u-p\rVert_F^2$ for $0<t\le1$; division by $t$ and passage to $t\downarrow0$ give $\langle z-p,u-p\rangle_F\le0$. Expanding $\lVert z-u\rVert_F^2$ then gives $\lVert p-u\rVert_F^2\le\lVert z-u\rVert_F^2$. Thus projection does not increase distance to any point of $U$, and the cover becomes proper without increasing its size. [F1, F2, F3, F5, F7, F8, F9, step 1.1, step 2.1, given, algebra, construct]

4.1 Put $q=a^2\lVert X\rVert_F^2/\epsilon^2>1/4$. Then $k=\lceil q\rceil\le q+1\le5q$, so step 2.1 and [F6] imply $\log N_F(U,\epsilon)\le k\log(2dm)\le5q\log(2dm)$. Together with step 1.1 this proves both cases of the Statement. [F4, F6, step 1.1, step 3.1, step 2.1, algebra] ∎
---
id: prop-khovanov-seidel-decategorification-is-the-unreduced-burau-action
kind: proposition
title: "Decategorification is the unreduced Burau action"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps:
  - thm-khovanov-seidel-complexes-give-a-weak-derived-braid-action
  - lem-graded-grothendieck-group-of-a-m-is-free-on-the-shifted-vertex-projectives
  - def-graded-grothendieck-group-of-a-m-perfect-complexes
  - def-khovanov-seidel-positive-and-negative-twist-complexes
  - thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations
  - def-unreduced-burau-matrices
  - def-triangulated-k-zero-of-khovanov-seidel-projectives
  - lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero
  - lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Section 2e.1"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Section 2e.1 and Proposition 2.8, printed pp. 14-15"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, Section 4.2"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, author manuscript pp. 46-47 (the unreduced Burau matrix convention)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Each $X\in C_m$ has a class $[X]\in G(A_m)$
([[def-graded-grothendieck-group-of-a-m-perfect-complexes]]), and the class
$[R_\sigma\otimes_{A_m}-]$ depends only on $\sigma\in B_{m+1}$ by
[[thm-khovanov-seidel-complexes-give-a-weak-derived-braid-action]], so the
braid action induces a representation of $B_{m+1}$ by
$\mathbb Z[q,q^{-1}]$-linear maps on $G(A_m)$. On the basis
$[P_0],\dots,[P_m]$ of
[[lem-graded-grothendieck-group-of-a-m-is-free-on-the-shifted-vertex-projectives]]
the generators act by
$$[R_i][P_i]=-q[P_i],\qquad [R_i][P_{i+1}]=[P_{i+1}]-[P_i],\qquad [R_i][P_{i-1}]=[P_{i-1}]-q[P_i],\qquad [R_i][P_j]=[P_j]\quad(|i-j|>1),$$
with the terms $[P_{i+1}]$, respectively $[P_{i-1}]$, omitted when the index
leaves $\{0,\dots,m\}$. Moreover, let $C$ be the $(m+1)\times(m+1)$ matrix over
$\mathbb Z[q,q^{-1}]$ with
$$C_{r,r}=C_{r,r+1}=(-q)^{m-r}\quad(0\le r\le m-1),\qquad C_{m,m}=1,$$
all other entries zero. Then $C$ is invertible and
$$C\,[R_i]\,C^{-1}=B_i\big|_{t=q}\qquad(1\le i\le m),$$
where $B_1,\dots,B_m$ are the unreduced Burau matrices of
[[def-unreduced-burau-matrices]] in their column-vector convention with
parameter $t$. Consequently, after the explicit change of basis $C$ and the
parameter identification $q=t$, the decategorified action is exactly the
unreduced Burau representation of $B_{m+1}$; no identification is left
implicit, and the comparison uses the same generator indexing and word order as
the Burau matrices.

## Facts & Assumptions
**Given:** An integer $m\ge1$, the free $\mathbb Z[q,q^{-1}]$-module $G(A_m)$ with basis $[P_0],\dots,[P_m]$, the twist complexes $R_i$, the functors $U_i$, and the unreduced Burau matrices $B_i$ with parameter $t$.

[L1] $[R_i]=[A_m]-[U_i]$: the twist complex is the cone of $\beta_i:U_i\to A_m$ between complexes concentrated in degree $0$, its class in $K_0$ is $[A_m]-[U_i]$ by the triangle relation $[A_m]=[U_i]+[R_i]$, and $[A_m]=[P_0]+\cdots+[P_m]$ ([[def-khovanov-seidel-positive-and-negative-twist-complexes]], [[def-triangulated-k-zero-of-khovanov-seidel-projectives]], [[lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero]]).

[L2] $U_i\otimes_{A_m}P_j\cong P_i\otimes_{\mathbb Z}e_iA_me_j$ with the corner bases $e_iA_me_i=\mathbb Ze_i\oplus\mathbb Z(i|i-1|i)$ in degrees $0,1$, $e_iA_me_{i+1}=\mathbb Z(i|i+1)$ in degree $0$, $e_iA_me_{i-1}=\mathbb Z(i|i-1)$ in degree $1$, and $e_iA_me_j=0$ for $|i-j|>1$ ([[thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations]], [[lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis]]).

[L3] $G(A_m)$ is free over $\mathbb Z[q,q^{-1}]$ with basis $[P_0],\dots,[P_m]$, and the class map is additive over direct sums with $[X\{r\}]=q^r[X]$ ([[lem-graded-grothendieck-group-of-a-m-is-free-on-the-shifted-vertex-projectives]], [[lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero]]).

[L4] The unreduced Burau matrices act on column vectors by the identity except for the block $B_i=\begin{pmatrix}1-t&t\\1&0\end{pmatrix}$ at rows and columns $i-1,i$, and satisfy the Artin relations ([[def-unreduced-burau-matrices]]).



## Proof

**Proof technique:** direct.

1.1 *The class of the twist.* By [L1] the operator $[R_i]$ on $G(A_m)$ is $\operatorname{Id}-[U_i]$, where $[U_i]$ is induced by the exact functor $U_i$, and the class of $[U_i]$ is computed on the basis by [L2]: $[U_i][P_i]=[P_i]+q[P_i]$, $[U_i][P_{i+1}]=[P_i]$, $[U_i][P_{i-1}]=q[P_i]$ and $[U_i][P_j]=0$ for $|i-j|>1$, where the degrees of the corner generators turn the tensor shifts into the powers of $q$ by [L3]. [L1, L2, L3]

1.2 *The matrix $C$ is invertible.* $C$ is upper triangular, with diagonal entries $(-q)^{m},(-q)^{m-1},\dots,(-q),1$, all units of $\mathbb Z[q,q^{-1}]$; hence $\det C=(-q)^{m+(m-1)+\cdots+1}$ is a unit and $C\in\mathrm{GL}_{m+1}(\mathbb Z[q,q^{-1}])$. [L3]

2.1 *The displayed action.* Subtracting the four formulas of step 1.1 from $[P_j]$ gives the four displayed rules: $[R_i][P_i]=[P_i]-[P_i]-q[P_i]=-q[P_i]$, $[R_i][P_{i+1}]=[P_{i+1}]-[P_i]$, $[R_i][P_{i-1}]=[P_{i-1}]-q[P_i]$, and $[R_i][P_j]=[P_j]$ for $|i-j|>1$; indices outside $\{0,\dots,m\}$ do not occur. Hence the representation is well defined on the whole basis. [step 1.1, L3]

2.2 *The intertwining identity.* Write $A_i$ for the matrix of $[R_i]$ and $U$ for the matrix of $[U_i]$ in the basis $[P_0],\dots,[P_m]$, so that $A_i=I-U$ by step 1.1; the columns of $U$ are $Ue_i=(1+q)e_i$, $Ue_{i+1}=e_i$, $Ue_{i-1}=qe_i$ and $Ue_j=0$ otherwise. Decompose $C=D(I+N)$, where $D$ is the diagonal matrix with entries $d_r=(-q)^{m-r}$ for $r<m$ and $d_m=1$, and $N$ is the matrix with ones on the superdiagonal and zeros elsewhere, so that $Ne_j=e_{j-1}$; then $(I+N)^{-1}=I-N+N^2-\cdots+(-1)^mN^m$ and the $j$-th column of $(I+N)^{-1}$ is $\sum_{k\ge0}(-1)^ke_{j-k}$. Compute $(I+N)U(I+N)^{-1}$ column by column. In column $i$ the alternating sum of the $U$-images is $(1+q)e_i-qe_i=e_i$, and applying $(I+N)$ gives $e_i+e_{i-1}$. In column $i-1$ only $Ue_{i-1}=qe_i$ survives, and applying $(I+N)$ gives $q(e_i+e_{i-1})$. In every other column the finitely many nonzero contributions $Ue_{i+1},Ue_i,Ue_{i-1}$ occur with consecutive alternating signs and cancel to $0$. Hence $(I+N)U(I+N)^{-1}$ has columns $e_i+e_{i-1}$ at $i$, $q(e_i+e_{i-1})$ at $i-1$ and $0$ elsewhere. Conjugating by the diagonal $D$ multiplies each entry $(r,j)$ by $d_rd_j^{-1}$, so $CUC^{-1}$ has entries $1$ at $(i,i)$, $-q$ at $(i-1,i)$, $-1$ at $(i,i-1)$ and $q$ at $(i-1,i-1)$, and $0$ elsewhere; that is, $CUC^{-1}=I-B_i$ with $B_i$ the unreduced Burau matrix at $t=q$, whose block at rows and columns $i-1,i$ is $\begin{pmatrix}1-q&q\\1&0\end{pmatrix}$ [L4]. Hence $CA_iC^{-1}=I-CUC^{-1}=B_i$. [step 1.2, L2, L4]

3.1 *Conclusion.* The decategorified action of the generators is the displayed four-case action, and the single invertible matrix $C$, independent of $i$, conjugates every generator to the unreduced Burau matrix at $t=q$; since both sides are representations of the presented group $B_{m+1}$ [L4], the change of basis $C$ and the parameter identification $q=t$ identify the whole representation with the unreduced Burau representation, with the same indexing and word order. The action on the reduced quotient is not claimed here. No choice principle is used beyond the inputs already recorded. [step 2.1, step 2.2] ∎ 
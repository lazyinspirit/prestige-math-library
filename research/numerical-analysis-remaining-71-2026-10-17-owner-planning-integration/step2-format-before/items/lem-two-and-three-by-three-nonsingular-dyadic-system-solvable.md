---
id: lem-two-and-three-by-three-nonsingular-dyadic-system-solvable
kind: lemma
title: A nonzero 2-by-2 or 3-by-3 dyadic determinant gives a unique real solution
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 1
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-certified-geometric-predicate-determinants, def-complete-ordered-real-field]
sources:
  references:
    - title: "Jonathan R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, §4.2"
      url: "https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 2nd ed., §1.2"
      url: "https://cimec.org.ar/twiki/pub/Cimec/GeometriaComputacional/DeBerg_-_Computational_Geometry_-_Algorithms_and_Applications_2e.pdf"
---

## Statement

Let $d\in\{2,3\}$, let $A=(A_{ij})_{1\le i,j\le d}$ have entries in
$\mathbb D$, use the determinant defined by
[[def-certified-geometric-predicate-determinants]], and assume $\det A\ne0$.
For every $b=(b_i)_{1\le i\le d}\in\mathbb R^d$, there is a unique
$x=(x_j)_{1\le j\le d}\in\mathbb R^d$ satisfying
$(Ax)_i=\sum_{j=1}^d A_{ij}x_j=b_i$ for all $i$. Matrix products use
$(AB)_{ij}=\sum_{k=1}^d A_{ik}B_{kj}$, and $I_d$ is the matrix with ones on
the diagonal and zeros elsewhere. The transpose is defined by $(A^T)_{ij}=A_{ji}$.

## Facts & Assumptions

**Given:** $d\in\{2,3\}$, a dyadic matrix $A$ of size $d$ with nonzero Leibniz determinant, and a real vector $b$ of size $d$.

[F1] [[def-certified-geometric-predicate-determinants]]: determinants are the finite signed Leibniz sums, with permutation sign $(-1)^{\operatorname{inv}(\pi)}$.

[F2] [[def-complete-ordered-real-field]]: $\mathbb R$ is an ordered field; every nonzero real scalar has an inverse, and field operations preserve the order.

## Proof

1.1 If $d=2$, write $A=\begin{pmatrix}a&b_0\\c&d_0\end{pmatrix}$ and $\Delta=ad_0-b_0c=\det A$ by [F1]. For $B=\begin{pmatrix}d_0&-b_0\\-c&a\end{pmatrix}$, entrywise multiplication gives $AB=\begin{pmatrix}ad_0-b_0c&-ab_0+ab_0\\cd_0-d_0c&-cb_0+d_0a\end{pmatrix}=\Delta I_2$ and $BA=\begin{pmatrix}d_0a-b_0c&d_0b_0-b_0d_0\\-ca+ac&-cb_0+ad_0\end{pmatrix}=\Delta I_2$. Since $\Delta\ne0$, [F2] gives $\Delta^{-1}$, and $\Delta^{-1}B$ is a two-sided inverse of $A$. [given, F1, F2, algebra]

1.2 If $d=3$, write $A=\begin{pmatrix}a&b_0&c\\d_0&e&f\\g&h&i\end{pmatrix}$ and $\Delta=aei+b_0fg+cd_0h-ceg-b_0d_0i-afh=\det A$ by [F1]. Set $B=\begin{pmatrix}ei-fh&ch-b_0i&b_0f-ce\\fg-d_0i&ai-cg&cd_0-af\\d_0h-eg&b_0g-ah&ae-b_0d_0\end{pmatrix}$. Direct multiplication gives diagonal entries of $AB$ equal respectively to $aei-afh+b_0fg-b_0d_0i+cd_0h-ceg$, $cd_0h-b_0d_0i+aei-ceg+b_0fg-afh$, and $b_0fg-ceg+cd_0h-afh+aei-b_0d_0i$, each $\Delta$. Its off-diagonal entries, in row order, are $ach-ab_0i+ab_0i-b_0cg+b_0cg-ach=0$, $ab_0f-ace+cb_0d_0-ab_0f+ace-cb_0d_0=0$, $d_0ei-d_0fh+efg-d_0ei+d_0fh-efg=0$, $d_0b_0f-d_0ce+ecd_0-eaf+fae-fb_0d_0=0$, $gei-gfh+hfg-hd_0i+id_0h-ieg=0$, and $gch-gb_0i+hai-hcg+ib_0g-iah=0$. Thus the displayed cofactor formula, denoted $B(C)$ when applied to any $3\times3$ matrix $C$, satisfies $CB(C)=\det(C)I_3$ by the same entrywise calculation. Substitution of $A^T$ into that formula gives
$$B(A^T)=\begin{pmatrix}ei-hf&gf-d_0i&d_0h-ge\\hc-b_0i&ai-gc&gb_0-ah\\b_0f-ec&d_0c-af&ae-d_0b_0\end{pmatrix}=B^T,$$
where the equality uses commutativity of the real field. In the Leibniz sum, reindexing $\pi$ by $\sigma=\pi^{-1}$ gives $\det(A^T)=\det A$: the product $\prod_i A_{\pi(i),i}$ becomes $\prod_i A_{i,\sigma(i)}$, and $\operatorname{sgn}(\pi)=\operatorname{sgn}(\sigma)$ because the inversion map $(i,j)\mapsto(\pi(j),\pi(i))$ bijects inversions of $\pi$ with inversions of $\pi^{-1}$. Therefore applying the displayed cofactor identity to $A^T$ yields $A^TB^T=\det(A^T)I_3=\Delta I_3$. Transposing this equality reverses the factors by the finite matrix-product formula, so $BA=\Delta I_3$. Since $\Delta\ne0$, $\Delta^{-1}B$ is a two-sided inverse of $A$ by [F2]. [given, F1, F2, algebra]

2.1 In either dimension, let $C$ be the two-sided inverse obtained in [step 1.1] or [step 1.2]. Then $x=Cb$ satisfies $Ax=(AC)b=I_db=b$. If $Ax=Ay$, multiplying by $C$ gives $x=(CA)x=(CA)y=y$. Hence the solution exists and is unique. [given, step 1.1, step 1.2, algebra] ∎


---
id: thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms
kind: theorem
title: "Finite affine indefinite trichotomy for indecomposable gcms"
status: published
origin: pipeline
deps: ["def-generalized-cartan-matrix", "def-symmetrizable-generalized-cartan-matrix", "lem-strict-linear-alternative-for-gcm-trichotomy"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Definition 4.1.1, Lemmas 4.1.6–4.1.7, Theorem 4.1.12, Lemma 4.1.13, Lemma 4.2.2 and Theorem 4.2.3, pp.50–60; direct quadratic expansion replaces spectral theory"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

For an indecomposable GCM $A$, exactly one of the following clauses holds and defines its type (inequalities are coordinatewise over $\mathbb R$):

- **Finite:** $\det A\ne0$, some $u>0$ has $Au>0$, and $Ax\ge0$ implies $x>0$ or $x=0$.
- **Affine:** $\operatorname{corank}A=1$, some $u>0$ has $Au=0$, and $Ax\ge0$ implies $Ax=0$. Equivalently $K_A=\{x:Ax\ge0\}=\ker A=\mathbb Ru$; its positive null ray is unique.
- **Indefinite:** some $u>0$ has $Au<0$, and $x\ge0$, $Ax\ge0$ imply $x=0$.

Each type is equivalently characterized by its displayed positive-vector condition alone. The matrices $A$ and $A^t$ have the same type. Finite and affine GCMs are symmetrizable. If $B=DA$ is a symmetric positive-diagonal symmetrization, finite type is equivalent to $B$ being positive definite, affine type to $B$ being positive semidefinite of corank one, and indefinite type to $B$ taking both positive and negative quadratic values. For a decomposable matrix, “finite type” means every indecomposable block is finite type.

## Facts & Assumptions

**Given:** An indecomposable GCM of size n≥1.

[F1] Off-diagonal entries are nonpositive integers with a symmetric zero pattern, and indecomposability forbids a block partition. ([[def-generalized-cartan-matrix]]).

[F2] The symmetrizer convention is DA symmetric. ([[def-symmetrizable-generalized-cartan-matrix]]).

[F3] If a real matrix $C$ satisfies $u\ge0$ and $C^tu\ge0\Rightarrow u=0$, then the strict matrix alternative provides $v>0$ with $Cv<0$. ([[lem-strict-linear-alternative-for-gcm-trichotomy]]).

## Proof

1.1 The graph joining $i,j$ when $a_{ij}<0$ is connected: its connected components give a forbidden block partition otherwise, and a block partition disconnects it. If $x\ge0$ and $Ax\ge0$, then at a zero coordinate $i$, $(Ax)_i=\sum_{j\ne i}a_{ij}x_j\le0$. Equality forces every neighbor to have zero coordinate. Propagating along finite paths proves $x=0$ or $x>0$. [F1, given]

2.1 Suppose $K_A$ contains a nonzero nonnegative vector $u$, so $u>0$ by step 1.1. If $K_A$ is not contained in $\{0\}\cup\{x>0\}$, take $v\in K_A$ with some negative coordinate (a nonnegative exception is excluded by step 1.1). Along the segment from $v$ to $u$ there is a point $z=tu+(1-t)v\ge0$ with at least one zero coordinate and $0<t<1$. Step 1.1 gives $z=0$, whence $v$ is a negative multiple of $u$ and $0=tAu+(1-t)Av$ forces $Au=Av=0$. For any $w\in K_A$, if $w$ has a negative coordinate repeat with $u,w$; if $w>0$ repeat with $w,v$. In either case $w\in\mathbb Ru$. Thus $K_A=\ker A=\mathbb Ru$. Otherwise $K_A\subset\{0\}\cup\{x>0\}$; then a nonzero kernel vector would put both it and its negative in this cone, impossible. So $A$ is invertible, and $A^{-1}\mathbf1\in K_A\setminus\{0\}$ is strictly positive with image $\mathbf1>0$. These are precisely the affine and finite clauses. [F1, step 1.1]

3.1 If $A$ has either clause of step 2.1, no $v>0$ can have $Av<0$: otherwise $-v\in K_A$ has negative coordinates and a nonzero image, contradicting either description of $K_A$. Contraposition of F3 with $C=A$ gives a nonzero $u\ge0$ with $A^tu\ge0$. Apply step 2.1 to $A^t$. Its rank equals that of $A$ by Gaussian elimination, so its clause is finite when $A$ is invertible and affine when $A$ has corank one. Repeating with the transpose proves both transpose implications. If $K_A\cap\{x\ge0\}=\{0\}$, the transpose has the same property: otherwise step 2.1 and the just-proved transpose implication contradict it. F3 with $C=A$ now supplies $v>0$, $Av<0$. This gives the indefinite clause and its transpose invariance. [F3, step 2.1]

4.1 The three clauses are disjoint by their cone and rank conditions and exhaustive by steps 2.1–3.1. A positive vector with strictly positive image excludes affine and indefinite by their cone conditions. A positive null vector excludes finite by invertibility and indefinite by its cone condition. A positive vector with negative image puts its negative in $K_A$ with strictly positive image, excluding both finite and affine. Thus the three positive-vector conditions are each sufficient as well as necessary. The affine null ray and corank follow from step 2.1. [step 2.1, step 3.1]

5.1 For later use, every connected proper principal submatrix of an affine $A$ is finite type: restrict a positive null vector $u$ to a connected index subset $J$. Then $A_Ju_J=-A_{J,J^c}u_{J^c}\ge0$ and is nonzero, since connectivity of the full graph gives an edge across the partition. Step 4.1 excludes indefinite type for $A_J$, and its affine cone condition excludes a nonzero nonnegative image, so it is finite. For finite $A$, restricting a positive vector with positive image gives $A_Ju_J>0$, since the omitted off-diagonal contribution is nonpositive. Hence each connected principal submatrix is finite in that case too. [F1, step 1.1, step 4.1]

6.1 Assume $A$ is finite or affine. If its graph has a cycle, take a shortest simple cycle of length $k\ge3$. It has no chord. Its principal matrix $C$ has diagonal 2 and paired edges $-r_i,-s_i$ around the cycle with positive integers $r_i,s_i$. It is finite or affine by step 5.1, or by the assumption if it is the whole graph. Choose $w>0$ with $Cw\ge0$ by step 4.1. In $M=\operatorname{diag}(w_i^{-1})C\operatorname{diag}(w_i)$ each row sum is nonnegative. Its paired edge magnitudes $r_i^\prime,s_i^\prime$ have product $r_i s_i\ge1$. Since $(\sqrt{r_i^\prime}-\sqrt{s_i^\prime})^2\ge0$, their sum is at least 2. Summing all row sums gives $0\le2k-\sum_i(r_i^\prime+s_i^\prime)\le0$. Equality forces every $r_i s_i=1$, hence $r_i=s_i=1$. This cycle matrix has null vector $\mathbf1>0$, so is affine by step 4.1; step 5.1 forbids it being a proper principal submatrix. Thus $A=C$ is symmetric. [F1, step 4.1, step 5.1]

7.1 If the connected graph has no simple cycle, it is a tree: two different simple paths would produce a simple cycle. Fix its least vertex with $d=1$ and propagate $d_j=d_i a_{ij}/a_{ji}>0$ along its unique paths. Every edge then satisfies $d_i a_{ij}=d_j a_{ji}$; nonedges have both sides zero, and diagonal equalities are automatic. Thus $DA$ is symmetric by F2. Together with step 6.1 this proves finite/affine symmetrizability, including the singleton tree. [F1, F2, step 1.1, step 6.1]

8.1 For any symmetric $B=DA$ and any $u>0$, expansion gives $x^tDAx=\sum_i d_i(Au)_i x_i^2/u_i+\sum_{i<j}(-d_i a_{ij})u_i u_j(x_i/u_i-x_j/u_j)^2$. Indeed the second sum has cross coefficient $2d_i a_{ij}x_ix_j$ and diagonal coefficient $\sum_{j\ne i}(-d_i a_{ij})u_j/u_i$; adding the first sum leaves diagonal $2d_i$. In finite type choose $Au>0$, so the first sum is strictly positive for $x\ne0$. In affine type choose $Au=0$; the second sum is nonnegative and vanishes exactly when all ratios $x_i/u_i$ agree along edges, hence everywhere by connectivity. Its kernel is exactly $\mathbb Ru$. In indefinite type a positive $u$ with $Au<0$ gives $u^tDAu<0$, whereas every coordinate vector has value $2d_i>0$. The mutually exclusive quadratic behaviors and the already-exhaustive trichotomy prove all reverse implications as well. [F1, F2, step 1.1, step 4.1, step 7.1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Definition 4.1.1, Lemmas 4.1.6–4.1.7, Theorem 4.1.12, Lemma 4.1.13, Lemma 4.2.2 and Theorem 4.2.3, pp.50–60; direct quadratic expansion replaces spectral theory.

---
id: lem-a-descended-galois-orbit-idempotent-is-primitive
kind: lemma
title: Descended orbit idempotents are primitive and their blocks have one simple type
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Weizhe Zheng, Lectures on Algebra (10 January 2025)
      url: https://server.mcm.ac.cn/~zheng/algebra.pdf
      locator: §3.2 Theorem 3.2.1, Remark 3.2.3; §3.3 Lemma 3.3.2 and Warning 3.3.3(1), pp.117–118; §3.8 Theorem
        3.8.1
status: draft
origin: pipeline
proof_strategy: direct
verification:
  precheck: pass
deps: ["lem-galois-orbit-sums-of-split-central-idempotents-descend", "thm-wedderburn-artin-theorem", "thm-simple-modules-over-semisimple-rings", "thm-uniqueness-of-wedderburn-artin-data", "thm-dimension-of-a-linear-subspace", "lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension"]
---

## Statement

Let $A$ be a finite-dimensional semisimple unital $F$-algebra and suppose
$E/F$ is finite Galois with $E\otimes_F A$ split semisimple. The elements
$e_O$ obtained by descending Galois orbit sums are precisely the primitive
central idempotents of $A$. Each $Ae_O$ is a simple Artinian ring with unit
$e_O$ and has exactly one simple left-module class. For $A=0$ there are no
such blocks.
More precisely, if $Ae_O\cong M_n(D)$ and $S=D^n$ is its column simple,
then $D\cong\operatorname{End}_A(S)^{\mathrm{op}}$.

## Facts & Assumptions

[F1] Orbit sums descend uniquely to nonzero orthogonal central idempotents whose sum is $1$, and central idempotents upstairs are unique subset sums of split factors: [[lem-galois-orbit-sums-of-split-central-idempotents-descend]].

[F2] Every nonzero semisimple ring is a finite product of full matrix rings over division rings: [[thm-wedderburn-artin-theorem]].

[F3] Such a product has exactly one simple left-module class for each factor, its column module: [[thm-simple-modules-over-semisimple-rings]].

[F4] The matrix sizes and division rings in the decomposition are unique up to permutation and isomorphism: [[thm-uniqueness-of-wedderburn-artin-data]].

[F5] A proper subspace of a finite-dimensional space has strictly smaller dimension: [[thm-dimension-of-a-linear-subspace]].

[F6] The canonical map $A\to E\otimes_F A$, $a\mapsto1\otimes a$, is injective: [[lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension]].

## Proof

**Given:** $A,E/F$, and the descended idempotents $e_O$ as stated.

1.1 Suppose $e_O=f+g$ with nonzero orthogonal central idempotents $f,g\in A$. Their scalar extensions are nonzero: F6 makes the canonical scalar-extension map injective. Since $fe_O=f$ and $ge_O=g$, the subset description in F1 writes $1\otimes f$ and $1\otimes g$ as disjoint nonempty subsets partitioning $O$. Each subset is $\Gamma$-stable because its sum is a tensor $1\otimes a$ and the subset representation is unique. But a nonempty invariant subset of one orbit equals the entire orbit: for any of its points, every point of the orbit is a translate. Two such disjoint subsets cannot exist. Thus $e_O$ is primitive. [F1, F6, algebra]

2.1 For any primitive central idempotent $e$ of $A$, the products $ee_O$ are central orthogonal idempotents summing to $e$. At least one is nonzero since $e\ne0$; exactly one is nonzero by primitivity of $e$. For that orbit, $e=ee_O$. Now $e_O=e+(e_O-e)$ is a sum of orthogonal central idempotents: $(e_O-e)^2=e_O-e$ and $e(e_O-e)=0$. Primitivity from step 1.1 forces $e_O-e=0$. Thus every primitive central idempotent is exactly one $e_O$. [F1, step 1.1, algebra]

3.1 For $A\ne0$, choose $A\cong\prod_j M_{n_j}(D_j)$ by F2. A matrix commuting with all $E_{kk}$ has zero off-diagonal entries, and commuting with all $E_{kl}$ makes its diagonal entries equal. Commuting also with matrices having any $d\in D_j$ in position $(1,1)$ forces that common entry into $Z(D_j)$. Conversely such scalar matrices commute with everything. Since a division ring has no idempotents except $0,1$, the primitive central idempotents in this product are exactly its factor identities. By step 2.1, each $Ae_O$ is therefore one factor $M_n(D)$. [F2, step 2.1, algebra]

4.1 A nonzero two-sided ideal $J\subset M_n(D)$ contains a matrix $X$ with entry $x_{pq}\ne0$. For any $a,b$, $E_{ap}XE_{qb}=x_{pq}E_{ab}\in J$. Left multiplying by the diagonal matrix having $x_{pq}^{-1}$ in position $(a,a)$ gives $E_{ab}\in J$. Hence $I=\sum_aE_{aa}\in J$ and $J=M_n(D)$. Also every left or right ideal is an $F$-subspace of the finite-dimensional algebra $Ae_O$; a strict descending chain strictly decreases dimension and so terminates. Thus this ring is simple and Artinian, without asserting that its regular left module is simple when $n>1$. [F5, step 3.1, algebra]

5.1 F3 gives its unique simple left-module class $S=D^n$. A commuting endomorphism of this column module preserves the first coordinate line, and its value there determines all other coordinates by the matrix units; commuting with left multiplication by $D$ forces it to be right multiplication by a fixed $d\in D$. Composition reverses the order of these right multiplications, so $\operatorname{End}_A(S)\cong D^{\mathrm{op}}$, or $D\cong\operatorname{End}_A(S)^{\mathrm{op}}$. F4 ensures that using another product description does not change the factor data up to the stated equivalences. For $A=0$, F1 supplies empty families and there is no primitive idempotent or simple module; for $n=1$ the same calculations give the division ring itself. [F1, F3, F4, step 3.1, step 4.1, algebra] QED

## Remarks

Zheng, Theorem 3.2.1 and Remark 3.2.3, pp.117–118, supply the semisimple
decomposition; §3.3, especially Lemma 3.3.2 and Warning 3.3.3(1), explains the
simple-ring versus simple-module distinction. The matrix-ideal computation
above proves that distinction's needed positive assertion locally.

---
id: lem-author-b02e51f9da03-matrix-completion
kind: lemma
title: Matrix completion detects the actual nontrivial bundle
status: published
domain: mathematics
deps:
  - lem-author-b02e51f9da03-matrix-kernel
  - lem-affine-bundle-module-interface
  - math:def-axiom-of-choice
  - math:thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules
  - math:def-commutative-ring
  - math:def-free-module-on-a-set-and-standard-basis
  - math:def-direct-sum-of-a-family-of-modules
  - math:def-module-homomorphism-kernel-image-and-cokernel
  - math:def-affine-scheme-spectrum
dependency_roles:
  lem-author-b02e51f9da03-matrix-kernel: mathematical-premise
  lem-affine-bundle-module-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules: mathematical-premise
  math:def-commutative-ring: mathematical-premise
  math:def-free-module-on-a-set-and-standard-basis: mathematical-premise
  math:def-direct-sum-of-a-family-of-modules: mathematical-premise
  math:def-module-homomorphism-kernel-image-and-cokernel: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement
Assume the Axiom of Choice (AC). Let $A$ be a commutative unital ring, let $r,N\geq0$ be integers, and let $q:A^{r+N}\to A^N$ and $j:A^N\to A^{r+N}$ be $A$-linear maps with $qj=\operatorname{id}_{A^N}$. Put $X=\operatorname{Spec}A$, $P=\ker q$ and $E=\widetilde P$, the associated rank-$r$ vector bundle on $X$. Here $A^m$ has its standard coordinate basis, $A^0=0$, and $\operatorname{pr}_2:A^r\oplus A^N\to A^N$ is $(v,w)\mapsto w$, using the standard identification $A^{r+N}=A^r\oplus A^N$. Say that $q$ is **completable** if its standard matrix is the last $N$ rows of an invertible $(r+N)\times(r+N)$ matrix $B$, equivalently $q=\operatorname{pr}_2 B$; invertible means having a two-sided matrix inverse. Then $E$ is trivial, meaning $E\cong\mathcal O_X^r$, if and only if $q$ is completable. Thus failure of completion is a precise obstruction to trivializing this bundle, even though its displayed free stabilization $E\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$ is trivial.

## Facts & Assumptions

**Given:** The ring, integers, maps and AC in the statement. AC is inherited from the affine bundle-module equivalence and the matrix-kernel supplier in [F1] and [F2].

**Goal:** Prove the equivalence between completion and actual triviality, retaining the explicit free stabilization.

[F1] For the split map $q$ in the statement, $P=\ker q$ is finite projective of rank $r$. The isomorphism $P\oplus A^N\to A^{r+N}$ sends $(p,w)$ to $p+j(w)$ and induces $E\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$. [[lem-author-b02e51f9da03-matrix-kernel]]

[F2] Under AC, associated sheaf and global sections give quasi-inverse equivalences between finite projective modules and finite locally free sheaves on $X$, preserving rank, finite direct sums and isomorphisms. In particular $A^r$ corresponds to $\mathcal O_X^r$, and $E\cong\mathcal O_X^r$ if and only if $P\cong A^r$. A vector bundle here means a finite locally free sheaf. [[lem-affine-bundle-module-interface]], [[math:def-axiom-of-choice]]

[F3] Over a commutative ring, matrices in standard bases correspond bijectively to linear maps between finite coordinate free modules, compatibly with identities and composition. In particular, mutually inverse such maps correspond to mutually inverse square matrices. Only this fully faithful part of the matrix functor is used, not a simultaneous choice of bases for all free modules. [[math:thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules]]

[F4] A commutative unital ring has commutative multiplication and an identity. [[math:def-commutative-ring]]

[F5] Elements of $A^m$ are coordinate tuples with standard vectors $e_i$ and unique coordinate expansions; the empty coordinate module $A^0$ is zero. Direct sums have componentwise operations and coordinate inclusions. [[math:def-free-module-on-a-set-and-standard-basis]], [[math:def-direct-sum-of-a-family-of-modules]]

[F6] A module homomorphism preserves addition and scalar multiplication; an isomorphism is a bijective homomorphism, and $\ker q=\{z:q(z)=0\}$. The right-inverse condition in this item is exactly the displayed identity $qj=\operatorname{id}_{A^N}$. [[math:def-module-homomorphism-kernel-image-and-cokernel]]

[F7] The underlying space of $X=\operatorname{Spec}A$ has proper prime ideals as points and distinguished opens $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$; its affine structure sheaf and associated bundles are those used in [F2]. [[math:def-affine-scheme-spectrum]], [[lem-affine-bundle-module-interface]]

## Proof

1.1 Suppose $q=\operatorname{pr}_2 B$ for an invertible matrix $B$. By [F3], $B$ and its inverse act as mutually inverse $A$-linear maps. Restricting $B$ gives an isomorphism $P\to A^r\oplus0$: if $z\in P$, then $\operatorname{pr}_2 Bz=qz=0$; conversely, $B^{-1}(v,0)\in P$ for every $v\in A^r$. These restrictions are inverse to each other. Identifying $A^r\oplus0$ with $A^r$ and applying [F2] gives $E\cong\mathcal O_X^r$. The free stabilization is already supplied by [F1]. [F1, F2, F3, F4, F5, F6, F7, given]

2.1 Conversely suppose $E\cong\mathcal O_X^r$. By [F2], there is an $A$-module isomorphism $u:A^r\to P$. Using the splitting in [F1], define $T:A^r\oplus A^N\to A^{r+N}$ by $T(v,w)=u(v)+j(w)$. Explicitly its inverse is $z\mapsto(u^{-1}(z-jq(z)),q(z))$: the first argument lies in $P$ since $q(z-jq(z))=q(z)-qj(q(z))=0$, and both composites are identities. All maps are linear by [F5] and [F6]. Moreover $qT(v,w)=w$, so $qT=\operatorname{pr}_2$. Under the standard coordinate identification in the statement, [F3] represents $T^{-1}$ by an invertible square matrix $B$, with inverse represented by $T$. Compatibility with composition yields $q=\operatorname{pr}_2 B$, so the last $N$ rows of $B$ are the matrix of $q$. This supplies the completion. Together with step 1.1 this proves the criterion and its obstruction interpretation. The formulas also apply when $r=0$, $N=0$ or $A$ is the zero ring; no nonempty-spectrum or positive-rank assumption was used. [F1, F2, F3, F4, F5, F6, step 1.1, construct, algebra] ∎

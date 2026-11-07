---
dependency_level: 2
id: lem-kernel-of-relative-boundary-is-image-of-ring-k1
kind: lemma
title: Stable torsion identifies the kernel of the relative forgetful map
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-algebraic-k0-and-k1-of-a-ring
- def-relative-algebraic-k0-group
- def-projective-module
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Weibel, The K-book, relative triple presentation and relative localization
    url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf
verification:
  precheck: pass
---

## Statement

For a unital ring homomorphism $f:A\to B$, the boundary homomorphism $\partial:K_1(B)\to K_0(A,B)$ sends $[g]$ to $[A^n,g,A^n]$. Its kernel is the image of $K_1(A)$. In fact, writing $C=\operatorname{coker}(K_1(A)\to K_1(B))$, this boundary induces an isomorphism $C\cong\ker(K_0(A,B)\to K_0(A))$.

## Statement references

[Weibel, The K-book, relative triple presentation and relative localization](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf)



## Facts & Assumptions

[F1] [[def-relative-algebraic-k0-group]] gives the exact-sequence and composition relations on triples.

[F2] [[def-algebraic-k0-and-k1-of-a-ring]] gives the group-completion and stable-abelianization definitions.



**Given:** Write $BP=B\otimes_AP$ for an $A$-module $P$. The stable-general-linear and relative-triple presentations in the definitions, for a unital ring homomorphism $f:A\to B$.



**Given:** Write $BP=B\otimes_AP$. The stable-general-linear and relative-triple presentations in the definitions, for a unital ring homomorphism $f:A\to B$.

## Proof

1.1 An automorphism $a$ of a finite projective $B$-module $M$ has a well-defined class $\langle a\rangle\in K_1(B)$: split a finite free cover of $M$ by projectivity and take its kernel $N$, giving $M\oplus N\cong B^n$, and take the class of $a\oplus1_N$. It is independent of the free basis by conjugation invariance in an abelianization. To compare complements $N,N'$, use the free module $(M\oplus N)\oplus(M\oplus N')$. Acting by $a$ on its first or second $M$ summand gives conjugate automorphisms, by the permutation interchanging those two actual summands. Stabilization therefore identifies the classes computed with either complement. The same argument proves invariance under a projective-module isomorphism, multiplicativity for composable automorphisms, and additivity under direct sums. An automorphism $\left(\begin{smallmatrix}1&u\\0&1\end{smallmatrix}\right)$ of $M\oplus N$ has zero class: add projective complements to make $M$ and $N$ separately free, extend $u$ by zero, and factor the resulting rectangular upper-right block into elementary matrices. An elementary matrix is a commutator after one stabilization, since $[1+xE_{ik},1+E_{kj}]=1+xE_{ij}$ for three distinct indices. Thus it is zero in $K_1(B)$. [given, construct, algebra]

2.1 For the interchange $s$ of two copies of $M$, one has $\langle s\rangle=\langle-1_M\rangle$. Indeed block multiplication gives $E_{12}(1)E_{21}(-1)E_{12}(1)=s\operatorname{diag}(-1,1)$ on $M\oplus M$, and each block elementary automorphism is zero by step 1.1. Thus a cyclic permutation of three copies of $M$, the product of two interchanges, has class $2\langle-1_M\rangle=\langle(-1_M)^2\rangle=0$. These computations work for arbitrary finite projective $M$. If $M=B\otimes_AP$ and an automorphism is obtained by scalar extension from $P$, its class is in the image of $K_1(A)$: extend an $A$-projective complement of $P$ to carry out its free stabilization over both rings. [step 1.1, algebra]

3.1 Let $F$ be the free abelian group on isomorphism classes of triples. A word $w\in F$ is represented, for calculation, by a direct sum of its triples, replacing a negative summand $(P,\alpha,Q)$ by $(Q,\alpha^{-1},P)$. Write the resulting single generic isomorphism as $a:B\otimes_AP\to B\otimes_AQ$. Suppose the image $[P]-[Q]$ is zero in $K_0(A)$. By the definition of group completion there is a finite projective $T$ and an $A$-isomorphism $s:P\oplus T\to Q\oplus T$. The endomorphism $s_B^{-1}(a\oplus1_{B\otimes T})$ of $B\otimes(P\oplus T)$ has a class by step 1.1. Define $d(w)$ to be this class in $C$. Changing $s$ changes the class by an $A$-automorphism and hence by zero in $C$. Changing $T$ or its stabilizing complements gives the same result: add both proposed stabilizers to compare them, use additivity with identities, and compare the two resulting $A$-isomorphisms on a common stabilization; their quotient is again an $A$-automorphism. Reordering summands changes the calculation by scalar extensions of the actual $A$-module permutation isomorphisms and conjugations, so does not change its class in $C$. [step 1.1, step 2.1, construct, algebra]

4.1 The calculation in step 3.1 is unchanged by inserting a triple and its formal negative. To check this, insert both generic maps $\alpha,\alpha^{-1}$, and use the interchange $P\oplus Q\to Q\oplus P$ as the balancing $A$-isomorphism. The resulting generic endomorphism is $\left(\begin{smallmatrix}0&\alpha^{-1}\\\alpha&0\end{smallmatrix}\right)$ on $BP\oplus BQ$. Conjugating by $\operatorname{diag}(1,\alpha):BP\oplus BP\to BP\oplus BQ$ identifies it with an interchange of two copies of $BP$, whose class is $\langle-1_{BP}\rangle$ by step 2.1. This is the scalar extension of $-1_P$ and hence zero in $C$. Thus the calculation defines $d$ on the kernel of the homomorphism $F\to K_0(A)$, rather than on a chosen signed list. Stacking two balanced calculations and rearranging their $A$-module summands proves $d(w+w')=d(w)+d(w')$. [step 1.1, step 2.1, step 3.1, algebra]

5.1 We verify that $d$ kills the defining relators of the triple group, all of which lie in this kernel. An isomorphism of triples changes $a$ by its two $A$-isomorphisms; these are absorbed into the balancing map, so the calculation is unchanged. For a composition relator $(P,\alpha,Q)+(Q,\beta,T)-(P,\beta\alpha,T)$, the total source is $P\oplus Q\oplus T$, total target is $Q\oplus T\oplus P$, and the balancing map is the cyclic reordering of these actual $A$-modules. The generic endomorphism is $L=\begin{pmatrix}0&0&(\beta\alpha)^{-1}\\\alpha&0&0\\0&\beta&0\end{pmatrix}$ on $BP\oplus BQ\oplus BT$. Conjugation by $\operatorname{diag}(1,\alpha,\beta\alpha):BP^{\oplus3}\to BP\oplus BQ\oplus BT$ turns it into the cyclic permutation of three copies of $BP$. Its class is zero by step 2.1. Thus every composition relator is killed. [step 1.1, step 2.1, step 3.1, step 4.1, algebra]

6.1 For an exact-sequence relator, split its two sequences of $A$-projectives, writing $P=P'\oplus P''$, $Q=Q'\oplus Q''$ and $a=\left(\begin{smallmatrix}\alpha'&u\\0&\alpha''\end{smallmatrix}\right)$. Subtracting the two end triples produces a balanced total generic map from $BP\oplus BQ'\oplus BQ''$ to $BQ\oplus BP'\oplus BP''$, with blocks $a,\alpha'^{-1},\alpha''^{-1}$. Balance by the $A$-isomorphism obtained from the two splittings and reordering the same four actual modules. First factor $a=\operatorname{diag}(\alpha',\alpha'')\left(\begin{smallmatrix}1&\alpha'^{-1}u\\0&1\end{smallmatrix}\right)$. The second factor contributes zero by step 1.1. For the first factor, group the $P',Q'$ and $P'',Q''$ pairs. The resulting generic endomorphisms are the two interchanges twisted by $\alpha'$ and $\alpha''$, exactly as in step 4.1. Their classes are $\langle-1_{BP'}\rangle$ and $\langle-1_{BP''}\rangle$, both coming from $A$, so their sum is zero in $C$. Therefore $d$ kills every exact-sequence relator. [step 1.1, step 2.1, step 4.1, step 5.1, algebra]

7.1 Consequently $d$ descends to a homomorphism $\overline d:\ker\rho\to C$. The boundary $\partial$ is a homomorphism on $K_1(B)$: composition of free triples gives multiplicativity, adjoining an identity summand does not change its class, and the target is abelian. It kills $K_1(A)$ because $[A^n,f(g),A^n]$ is isomorphic to the identity triple when $g$ is an $A$-automorphism. Thus it induces $\overline\partial:C\to\ker\rho$. For a free triple, choose its identity balancing map to see $\overline d\,\overline\partial=\operatorname{id}_C$. For a balanced triple word use the map $s$ of step 3.1. The relative class of $s_B^{-1}(a\oplus1_T)$ equals that of $a$: the $s$ triple is zero because $s$ is an $A$-isomorphism, identity summands contribute zero, and the composition relation applies. Hence $\overline\partial\,\overline d=\operatorname{id}_{\ker\rho}$. This proves the claim, including the reverse kernel inclusion. [step 3.1, step 4.1, step 5.1, step 6.1, construct, algebra] ∎

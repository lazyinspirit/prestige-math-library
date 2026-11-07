---
id: lem-compact-open-averaging-and-spherical-hecke-modules
kind: lemma
title: Compact-open averaging and spherical Hecke modules
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln
- cor-normalized-haar-probability-on-a-compact-group
- def-axiom-of-choice
sources:
  references:
  - title: Masao Oi, Introduction to the Local Langlands Correspondence, §8.2, §11.1
    url: https://masaooi.github.io/LLC.pdf
  - title: W. Casselman, Introduction to the Theory of Admissible Representations of p-adic Reductive Groups (1995 draft), §§2.1–2.2
    url: https://www.math.ubc.ca/~cass/research/pdf/p-adic-book.pdf
proof_strategy: direct
---
## Statement

Assume the Axiom of Choice and the local data of the spherical Hecke definition. For every compact open subgroup $J\subseteq G$, averaging over $J$ is an idempotent on every smooth complex representation, and taking $J$-fixed vectors is an exact functor. Put
$$
P=\{f\in C_c^\infty(G): f(gk)=f(g)\text{ for all }g\in G,\ k\in K\},
$$
the compactly supported locally constant right-$K$-invariant functions, with left $G$-translation and right $H$-convolution. The map $V\mapsto V^K$ gives a bijection between isomorphism classes of irreducible smooth $G$-representations with nonzero $K$-fixed vectors and isomorphism classes of simple unital left $H$-modules. For a simple unital left $H$-module $M$, the inverse is the unique irreducible quotient with nonzero $K$-fixed vectors of the algebraic tensor product $P\otimes_H M$. This correspondence asserts no general admissibility for irreducible smooth representations.

## Statement references

[[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]]

[[cor-normalized-haar-probability-on-a-compact-group]]

[[def-axiom-of-choice]]

[Masao Oi, *Introduction to the Local Langlands Correspondence*, §8.2](https://masaooi.github.io/LLC.pdf)

[W. Casselman, *Introduction to the Theory of Admissible Representations of p-adic Reductive Groups*, §§2.1–2.2](https://www.math.ubc.ca/~cass/research/pdf/p-adic-book.pdf)

## Facts & Assumptions

**Given:** Smooth complex representations of $G$, the compact open subgroup $K$, the spherical Hecke algebra $H$, and AC.

[A1] AC supplies the Haar-existence and normalized compact-Haar context used by [F2]; the finite averaging and module arguments below use no further arbitrary choice. [[def-axiom-of-choice]]

[F1] Smooth representations, convolution, $K$, and $H$ have the meanings fixed in [[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]].

[F2] A compact Hausdorff group has a normalized Haar probability measure invariant on both sides. [[cor-normalized-haar-probability-on-a-compact-group]]

## Proof

**Given:** A smooth complex representation of $G$ and a compact open subgroup $J\subseteq G$. All tensor products are algebraic.

1.1 For $v\in V$, its stabilizer intersects $J$ in an open subgroup of finite index, since the open cosets cover compact $J$. Intersect its finitely many conjugates to obtain a normal open subgroup $J_0\trianglelefteq J$ still fixing $v$. The normalized average $e_Jv=\int_J\pi(j)v\,dj$ is the finite average over $J/J_0$; it is independent of the chosen smaller normal subgroup because each coset splits into equally many smaller cosets. Left invariance of Haar probability makes $e_Jv$ fixed by $J$, and it fixes $V^J$ pointwise, so it is an idempotent with image $V^J$. In a surjection of smooth representations, lift any $J$-fixed vector and average its lift; this proves surjectivity on fixed vectors. Kernels and injectivity are immediate, hence fixed vectors are exact. [A1, F2, construct, algebra]

2.1 Let $R=C_c^\infty(G)$ be the convolution algebra of compactly supported locally constant functions. For $m\ge1$, set $K(m)=\ker(\mathrm{GL}_n(\mathcal O)\to\mathrm{GL}_n(\mathcal O/\varpi^m\mathcal O))$; these compact open subgroups form a neighborhood basis at the identity. Each function in $R$ has compact-open support: local constancy makes its nonzero set and its zero set open, and compact support makes the nonzero set compact. Cover the supports of a finite family by finitely many left and right cosets of congruence subgroups on which all functions are constant, and refine to one sufficiently small common subgroup $J$; the supports are finite unions of these cosets, so every function is bi-$J$-invariant. Then $e_J=1_J/\operatorname{vol}(J)$ is a two-sided identity for the family. The $R$-action on a smooth representation is by integration and has such local identities on every finite set of vectors, by taking a compact open subgroup inside the intersection of their open stabilizers. An $R$-submodule of a smooth $G$-representation is $G$-invariant: for $v=e_Jv$ in it, $\pi(g)v=(L_ge_J)v$, where $(L_ge_J)(x)=e_J(g^{-1}x)\in R$. Conversely a $G$-invariant subspace is stable under $R$ because each integral is a finite sum on a smooth vector. Finally $e_KRe_K=H$, since convolution by $e_K=1_K$ projects onto the bi-$K$-invariant functions. [F1, step 1.1, construct, algebra]

3.1 The space $P=Re_K$ is the span of the indicators $1_{gK}$: right-$K$-invariant compact support meets only finitely many open right cosets, and each indicator is a left translate of $e_K$. It is a smooth left $R$-module and a right $H=e_KRe_K$-module. Each tensor in $P\otimes_H M$ is a finite sum, so its finitely many functions have a common open stabilizer and the resulting left $G$-module is smooth. If $V$ is irreducible and $e_KV\ne0$, then $e_KV$ is a simple $H$-module: for a nonzero $H$-submodule $M_0\subseteq e_KV$, irreducibility gives $RM_0=V$, and therefore $e_KV=e_KRM_0=e_KRe_KM_0=HM_0=M_0$. [F1, step 2.1, algebra]

4.1 For a simple unital $H$-module $M$, put $Q=P\otimes_H M$. Left multiplication by $e_K$ is an idempotent right-$H$-linear map on $P$, so its image splits as a direct summand before tensoring; hence $e_KQ=(e_KP)\otimes_HM=H\otimes_HM\cong M$. Also $e_KQ$ generates $Q$ under $R$. Let $N$ be the sum of all $R$-submodules of $Q$ killed by $e_K$. Each element of a sum lies in a finite subsum, so $e_KN=0$ and $N\ne Q$. Since $e_KQ\cap N=0$ (a vector in the intersection is fixed by $e_K$ and killed by it), the fixed space of $L=Q/N$ is $e_KL\cong M$. Every nonzero submodule $W\subseteq L$ has $e_KW\ne0$: if $e_KW=0$, then for each $q$ in its preimage $\widetilde W\subseteq Q$, $e_Kq\in N$; but $e_Kq$ is fixed by $e_K$ and $e_KN=0$, so $e_Kq=0$. Thus $\widetilde W$ is killed by $e_K$, lies in $N$, and $W=0$, a contradiction. Simplicity of $M$ gives $e_KW=e_KL$, which generates $L$, so $W=L$. Thus $L$ is an irreducible quotient with nonzero $K$-fixed vectors. [F1, step 2.1, step 3.1, construct, algebra]

5.1 If $V$ is irreducible smooth with $e_KV\cong M$, the map $P\otimes_HM\to V$ sending $re_K\otimes m$ to $rm$ is a well-defined surjective $R$-map. Its restriction to $e_KQ\cong M$ is an isomorphism, so its kernel is killed by $e_K$. Conversely every submodule killed by $e_K$ maps to a $G$-invariant subspace of $V$ with zero $K$-fixed space; irreducibility and $e_KV\ne0$ force that image to be zero. Thus the kernel is exactly $N$ from step 4.1, so $V\cong Q/N$. This proves uniqueness and both directions of the claimed bijection. [F1, step 3.1, step 4.1, algebra] ∎

## Notes

The correspondence is local to the compact open subgroup $K$ and does not imply admissibility. The averaging step uses only finite-index subgroups of compact $J$; AC is carried through the stated Haar suppliers.

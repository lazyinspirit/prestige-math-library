---
id: lem-invariant-tensors-descend-through-comparison-isomorphisms
kind: lemma
title: "Invariant tensors descend through comparison isomorphisms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne, Hodge Cycles on Abelian Varieties, notes by J. S. Milne"
      url: "https://www.jmilne.org/math/Documents/Deligne82.pdf"
      locator: "Section 3, Theorem 3.8 and Lemma 3.9 and their complete proofs, printed pages 26–27 (PDF pages 26–27), read. The finite-dimensional descent and Hodge-type calculations below are supplied explicitly; existence of geometric comparison isomorphisms is not asserted."
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $(V_i)_{1\le i\le m}$ and $(W_i)_{1\le i\le m}$ be finite families of finite-dimensional $k$-vector spaces, and let $t_j$ and $u_j$ be corresponding tensors obtained from them using finite direct sums, tensor products and duals. For every commutative $k$-algebra $B$ let $G_V(B)$ be the group of families of $B$-linear automorphisms of $V_i\otimes_k B$ fixing every $t_j\otimes1$. Suppose a nonzero commutative $k$-algebra $R$ is given together with isomorphisms $p_i:V_i\otimes_k R\to W_i\otimes_k R$ carrying every $t_j\otimes1$ to $u_j\otimes1$.

For every tensor $z$ on the $V_i$ fixed by $G_V(B)$ for every commutative $k$-algebra $B$, the image $p(z\otimes1)$ is the scalar extension of a unique tensor $z_W$ on the $W_i$. It is independent of the supplied comparison isomorphisms and is fixed by the corresponding tensor stabilizer $G_W$ after every scalar extension. These assignments commute with tensor products, direct sums, duals and contractions.

In particular, if $k=\mathbb Q$, each $W_i$ has a rational Hodge structure, all $u_j$ have bidegree $(0,0)$ in their tensor constructions, and $z_W$ lies in a weight-zero tensor construction, then $z_W$ has Hodge bidegree $(0,0)$. The assertion is conditional on the actual comparison isomorphisms $p_i$; it does not assert that geometric de Rham, Betti or étale comparison isomorphisms exist.

## Facts & Assumptions

**Given:** The data of the Statement, including a specific nonzero comparison algebra and isomorphisms.

[A1] The Axiom of Choice supplies a basis extending a specified nonzero vector in a vector space. [[def-axiom-of-choice]]

## Proof

**Proof technique:** compare two base changes of the isomorphism and descend fixed tensors by an explicit linear retraction.

1.1 Let $T(V)$ and $T(W)$ be the corresponding tensor constructions containing $z$ and its image. The two base changes $p_1,p_2$ of the given family $p$ to $R\otimes_k R$ both carry the specified tensors to the same target tensors. Hence $p_2^{-1}p_1\in G_V(R\otimes_k R)$. Since $z$ is fixed after every scalar extension, $p_1(z\otimes1)=p_2(z\otimes1)$ in $T(W)\otimes_k R\otimes_k R$. [given, algebra]

2.1 Since $R$ is a nonzero algebra over the field $k$, its unit map is injective. Choose, using [A1], a $k$-linear retraction $\ell:R\to k$ with $\ell(1)=1$. Set $y=p(z\otimes1)\in T(W)\otimes_k R$. Step 1.1 says that $y\otimes1$ and the image obtained by placing its $R$-coefficient in the other tensor factor agree. Applying $1\otimes\ell\otimes1$ shows $y=z_W\otimes1$ for $z_W=(1\otimes\ell)y\in T(W)$. Injectivity of $T(W)\to T(W)\otimes_k R$ gives uniqueness. The same argument in $R\otimes_k R'$ compares any other nonzero comparison algebra and isomorphisms, proving independence. [A1, given, step 1.1, choose, construct, algebra]

3.1 Let $B$ be a commutative $k$-algebra and $g\in G_W(B)$. After extending scalars to $B\otimes_k R$, the conjugate $p^{-1}gp$ belongs to $G_V(B\otimes_k R)$, so it fixes $z$. Thus $g$ fixes $z_W$ after extension to $B\otimes_k R$. The $k$-linear retraction $\ell$ induces a retraction $B\otimes_k R\to B$, so scalar extension from $B$ is injective and $g z_W=z_W$ already over $B$. Tensor operations and contractions commute with $p$ and with this unique descent, giving the final functoriality. [given, step 2.1, algebra]

4.1 For the Hodge assertion, the bigrading gives two commuting multiplicative-group actions on the complexified tensor constructions: one acts with exponent $p$ on bidegree $(p,q)$ and the other with exponent $q$. Every $u_j$ has bidegree $(0,0)$, so both actions fix all $u_j$ and lie in $G_W(\mathbb C)$. Step 3.1 makes $z_W$ fixed by both actions. The direct sum decomposition into their integer weight spaces then forces all components except bidegree $(0,0)$ to vanish. No statement about constructing the comparison algebra or geometric cohomology is used. [given, step 3.1, algebra] ∎

## Source-reading boundary

Deligne's Theorem 3.8 and its torsor Lemma 3.9 at the cited pages were read. The argument above proves only the formal tensor descent and Hodge-type part under explicitly supplied isomorphisms; the geometric comparison, deformation and absolute-Hodge conclusions remain separate obligations.

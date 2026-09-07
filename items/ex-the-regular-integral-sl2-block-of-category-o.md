---
id: "ex-the-regular-integral-sl2-block-of-category-o"
kind: "example"
title: "The regular integral sl2 block"
deps: ["thm-central-character-summands-split-into-linkage-blocks", "prop-restricted-duality-is-an-exact-involution-on-category-o", "prop-costandard-objects-have-simple-socles", "prop-simple-reflection-embedding-of-verma-modules", "thm-verma-module-has-a-unique-simple-quotient", "cor-verma-irreducibility-criterion-from-shapovalov-determinants", "prop-weights-of-a-verma-module-lie-below-lambda", "lem-simple-highest-weight-modules-are-restricted-self-dual", "def-standard-and-costandard-objects-in-category-o"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Chen, Lecture 8 §3 Example 3.17, p.6"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
    - title: "Chen, Lecture 2 §2 Example 2.16 and Exercise 2.17, p.4"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: "draft"
origin: "pipeline"
proof_strategy: "Verify using the sl2 PBW action, weight dimensions and duality; indecomposability proves nonsplitting"
---

## Example

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

For $\mathfrak g=\mathfrak{sl}_2$ identify a highest weight with its value on $h$, so $\rho=1$ and $s\cdot\lambda=-\lambda-2$. For every integer $n\geq0$, the regular integral block has simple labels $n$ and $-n-2$. Its standards are $M(n)$ and $M(-n-2)=L(-n-2)$, and

$$0\longrightarrow L(-n-2)\longrightarrow M(n)\longrightarrow L(n)\longrightarrow0$$

is nonsplit. Its costandards are $\nabla(n)$ and $\nabla(-n-2)=L(-n-2)$, with the nonsplit sequence $0\to L(n)\to\nabla(n)\to L(-n-2)\to0$. The linkage order is $-n-2<n$.

## Facts & Assumptions

**Given:** The setting above and the hypotheses in the example.

[F1] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. For a linkage class $C=W_\lambda\cdot\lambda$, let $\mathcal O_C$ be the full subcategory of objects all of whose simple composition factors have labels in $C$. Then $\mathcal O=\bigoplus_C\mathcal O_C$, and each nonzero $\mathcal O_C$ is indecomposable as a categorical direct summand. These are precisely the blocks. Each $\mathcal O_C$ lies in $\mathcal O_{\chi_\lambda}$; a central-character summand can contain several blocks. Independently, grouping weights by cosets of the root lattice $Q$ gives a canonical coarser decomposition by weight cosets. ([[thm-central-character-summands-split-into-linkage-blocks]])

[F2] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Restricted Chevalley duality is an exact contravariant equivalence $D:\mathcal O\to\mathcal O^{\mathrm{op}}$, with a natural isomorphism $D^2\cong\operatorname{id}$. It preserves each weight-space dimension, the formal character, and every simple composition multiplicity. ([[prop-restricted-duality-is-an-exact-involution-on-category-o]])

[F3] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. The costandard object $\nabla(\lambda)$ has a unique simple submodule, isomorphic to $L(\lambda)$. Its socle, the sum of all simple submodules, is that submodule. ([[prop-costandard-objects-have-simple-socles]])

[F4] If $\langle\lambda+\rho,\alpha_i^\vee\rangle\in\mathbb Z_{>0}$, there is an embedding $M(s_i\mathbin\cdot\lambda)\hookrightarrow M(\lambda)$. ([[prop-simple-reflection-embedding-of-verma-modules]])

[F5] The proper submodule $J(\lambda)$ which is the sum of all proper submodules is the unique maximal submodule of $M(\lambda)$. The quotient $L(\lambda):=M(\lambda)/J(\lambda)$ is simple and is its unique simple quotient. ([[thm-verma-module-has-a-unique-simple-quotient]])

[F6] $M(\lambda)$ is simple if and only if $\langle\lambda+\rho,\alpha^\vee\rangle\notin\mathbb Z_{>0}$ for every $\alpha\in\Phi^+$. ([[cor-verma-irreducibility-criterion-from-shapovalov-determinants]])

[F7] The weights of $M(\lambda)$ are exactly $\lambda-\beta$ for $\beta\in Q^+$; every weight space is finite dimensional, and $M(\lambda)_\lambda=\mathbb Cv_\lambda$. ([[prop-weights-of-a-verma-module-lie-below-lambda]])

[F8] For every highest weight $\eta$, $D(L(\eta))\cong L(\eta)$ as $\mathfrak g$-modules. ([[lem-simple-highest-weight-modules-are-restricted-self-dual]])

[F9] The standard and costandard objects are $\Delta(\eta)=M(\eta)$ and $\nabla(\eta)=D(M(\eta))$. ([[def-standard-and-costandard-objects-in-category-o]])

## Verification

1.1 The integral pairing is $n+1>0$, and the two distinct dot-orbit labels are $n$ and $-n-2$. The integral Weyl group is the full order-two Weyl group, so these labels form one block. At $-n-2$ the shifted pairing is $-n-1<0$, and the irreducibility criterion makes its Verma simple. [F1, F6]

2.1 Write $v_k=f^kv_n$ in $M(n)$. The relations $[h,f]=-2f$ and $[e,f]=h$ give $hv_k=(n-2k)v_k$ and $ev_k=k(n-k+1)v_{k-1}$ for $k\geq1$, by commuting $e$ past the $k$ copies of $f$; $ev_0=0$. The negative nilpotent algebra is one dimensional, so its PBW monomials give one-dimensional Verma weight spaces. The singular vector $v_{n+1}$ generates the embedded $M(-n-2)$, which is also the embedding supplied by F4. [F4, F7, algebra, step 1.1]

3.1 The quotient has basis $v_0,\ldots,v_n$. A nonzero submodule contains a weight vector, and applying $e$ repeatedly reaches $v_0$, since $k(n-k+1)\ne0$ for $1\leq k\leq n$. Applying $f$ then generates the whole quotient. It is simple, hence is $L(n)$. A split sequence would make $M(n)$ a sum of two proper submodules, contrary to its unique maximal submodule. For $n=0$ the quotient consists just of $v_0$ and the same argument holds. [F5, algebra, step 2.1]

4.1 By F8, exact duality fixes both simples; it reverses the sequence, and F9 identifies the middle term as $\nabla(n)$, giving the displayed costandard sequence. If it split, its dual would split the original. The costandard socle is $L(n)$ by F3. Since $M(-n-2)=L(-n-2)$, F8 and F9 also give $\nabla(-n-2)=L(-n-2)$. [F2, F3, F8, F9, step 3.1] ∎

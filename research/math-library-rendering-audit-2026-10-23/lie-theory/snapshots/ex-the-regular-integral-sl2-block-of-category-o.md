---
id: "ex-the-regular-integral-sl2-block-of-category-o"
kind: "example"
title: "The regular integral sl2 block"
deps: ["def-axiom-of-choice", "def-special-linear-lie-algebra-sl-two", "def-verma-module", "thm-pbw-model-of-a-verma-module", "thm-category-o-decomposes-by-generalized-central-character", "cor-central-characters-are-dot-weyl-orbits", "thm-every-category-o-object-has-finite-length", "thm-simple-objects-of-category-o-are-highest-weight-modules", "prop-restricted-duality-is-an-exact-involution-on-category-o", "prop-costandard-objects-have-simple-socles", "prop-simple-reflection-embedding-of-verma-modules", "thm-verma-module-has-a-unique-simple-quotient", "prop-weights-of-a-verma-module-lie-below-lambda", "lem-simple-highest-weight-modules-are-restricted-self-dual", "def-standard-and-costandard-objects-in-category-o"]
sources:
  references:
    - title: "Chen, Lecture 8 §3 Example 3.17, p.6"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
    - title: "Chen, Lecture 2 §2 Example 2.16 and Exercise 2.17, p.4"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: published
origin: "pipeline"
proof_strategy: "Verify using the sl2 PBW action, weight dimensions and duality; indecomposability proves nonsplitting"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (ex-the-regular-integral-sl2-block-of-category-o). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Example

Assume the Axiom of Choice.

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

For $\mathfrak g=\mathfrak{sl}_2$ identify a highest weight with its value on $h$, so $\rho=1$ and $s\cdot\lambda=-\lambda-2$. For every integer $n\geq0$, the regular integral block has simple labels $n$ and $-n-2$. Its standards are $M(n)$ and $M(-n-2)=L(-n-2)$, and

$$0\longrightarrow L(-n-2)\longrightarrow M(n)\longrightarrow L(n)\longrightarrow0$$

is nonsplit. Its costandards are $\nabla(n)$ and $\nabla(-n-2)=L(-n-2)$, with the nonsplit sequence $0\to L(n)\to\nabla(n)\to L(-n-2)\to0$. The linkage order is $-n-2<n$.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), the setting above and the hypotheses in the example.

[F1] The category $\mathcal O$ is the categorical direct sum of its generalized central-character subcategories, and each object has only finitely many nonzero character components ([[thm-category-o-decomposes-by-generalized-central-character]]).

[F10] Under the Axiom of Choice, $\chi_\lambda=\chi_\mu$ if and only if $\mu\in W\cdot\lambda$ ([[cor-central-characters-are-dot-weyl-orbits]]).

[F11] Under the Axiom of Choice, every object of $\mathcal O$ has finite length ([[thm-every-category-o-object-has-finite-length]]), and its simple objects are exactly the distinct $L(\eta)$ ([[thm-simple-objects-of-category-o-are-highest-weight-modules]]).

[F2] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Restricted Chevalley duality is an exact contravariant equivalence $D:\mathcal O\to\mathcal O^{\mathrm{op}}$, with a natural isomorphism $D^2\cong\operatorname{id}$. It preserves each weight-space dimension, the formal character, and every simple composition multiplicity. ([[prop-restricted-duality-is-an-exact-involution-on-category-o]])

[F3] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. The costandard object $\nabla(\lambda)$ has a unique simple submodule, isomorphic to $L(\lambda)$. Its socle, the sum of all simple submodules, is that submodule. ([[prop-costandard-objects-have-simple-socles]])

[F4] If $\langle\lambda+\rho,\alpha_i^\vee\rangle\in\mathbb Z_{>0}$, there is an embedding $M(s_i\mathbin\cdot\lambda)\hookrightarrow M(\lambda)$. ([[prop-simple-reflection-embedding-of-verma-modules]])

[F5] The proper submodule $J(\lambda)$ which is the sum of all proper submodules is the unique maximal submodule of $M(\lambda)$. The quotient $L(\lambda):=M(\lambda)/J(\lambda)$ is simple and is its unique simple quotient. ([[thm-verma-module-has-a-unique-simple-quotient]])

[F6] The standard $\mathfrak{sl}_2$ generators satisfy $[e,f]=h$ and $[h,f]=-2f$ ([[def-special-linear-lie-algebra-sl-two]]). The induced Verma highest vector satisfies $ev_\eta=0$ and $hv_\eta=\eta v_\eta$ ([[def-verma-module]]), and PBW makes $v_k=f^kv_\eta$ ($k\ge0$) a basis ([[thm-pbw-model-of-a-verma-module]]).

[F7] The weights of $M(\lambda)$ are exactly $\lambda-\beta$ for $\beta\in Q^+$; every weight space is finite dimensional, and $M(\lambda)_\lambda=\mathbb Cv_\lambda$. ([[prop-weights-of-a-verma-module-lie-below-lambda]])

[F8] For every highest weight $\eta$, $D(L(\eta))\cong L(\eta)$ as $\mathfrak g$-modules. ([[lem-simple-highest-weight-modules-are-restricted-self-dual]])

[F9] The standard and costandard objects are $\Delta(\eta)=M(\eta)$ and $\nabla(\eta)=D(M(\eta))$. ([[def-standard-and-costandard-objects-in-category-o]])

## Verification

1.1 For any highest weight $\eta$, the PBW basis in [F6] and $[h,f]=-2f$ give $hv_k=(\eta-2k)v_k$. Also $ev_0=0$, and $[e,f]=h$ gives the induction step $ev_{k+1}=f(ev_k)+hv_k$. If $ev_k=k(\eta-k+1)v_{k-1}$, this step yields $ev_{k+1}=[k(\eta-k+1)+\eta-2k]v_k=(k+1)(\eta-k)v_k$. Therefore $ev_k=k(\eta-k+1)v_{k-1}$ for all $k\ge1$. [F6, induction, algebra]

2.1 The integral pairing is $n+1>0$, and the two distinct dot-orbit labels are $n$ and $-n-2$. Under Choice, [F10] says that $L(n)$ and $L(-n-2)$ are exactly the simple labels in the central-character summand $\mathcal O_{\chi_n}$: by [F11] every simple is a highest-weight $L(\eta)$ and hence has the scalar character $\chi_\eta$. For $\eta=-n-2$, every coefficient $k(\eta-k+1)=-k(n+k+1)$ from step 1.1 is nonzero when $k\ge1$. A nonzero submodule of $M(\eta)$ contains a nonzero weight vector, hence some basis vector $v_k$; repeated application of $e$ reaches $v_0$, which generates the entire Verma module. Thus $M(-n-2)=L(-n-2)$ directly. [F6, F10, F11, step 1.1]

3.1 Write $v_k=f^kv_n$ in $M(n)$. The action derived in step 1.1 gives $hv_k=(n-2k)v_k$ and $ev_k=k(n-k+1)v_{k-1}$ for $k\geq1$, with $ev_0=0$. The weight spaces are one dimensional. The singular vector $v_{n+1}$ generates the embedded $M(-n-2)$, which is also the embedding supplied by F4. [F4, F6, F7, step 1.1, step 2.1]

4.1 The quotient has basis $v_0,\ldots,v_n$. A nonzero submodule contains a weight vector, and applying $e$ repeatedly reaches $v_0$, since $k(n-k+1)\ne0$ for $1\leq k\leq n$ by step 1.1. Applying $f$ then generates the whole quotient. It is simple, hence is $L(n)$. A split sequence would make $M(n)$ a sum of two proper submodules, contrary to its unique maximal submodule. For $n=0$ the quotient consists just of $v_0$ and the same argument holds. [F5, algebra, step 1.1, step 3.1]

5.1 By F8, exact duality fixes both simples; it reverses the sequence, and F9 identifies the middle term as $\nabla(n)$, giving the displayed costandard sequence. If it split, its dual would split the original. The costandard socle is $L(n)$ by F3. Since $M(-n-2)=L(-n-2)$, F8 and F9 also give $\nabla(-n-2)=L(-n-2)$. [F2, F3, F8, F9, step 2.1, step 4.1]

6.1 By [F1], $\mathcal O_{\chi_n}$ is a categorical direct summand. It has exactly the two simple labels from step 2.1. If this summand decomposed into two nonzero categorical summands, finite length [F11] would place a simple in each; the two labels would therefore lie in different summands. Then $M(n)$, which has both as factors by steps 3.1 and 4.1, would split as a direct sum of two nonzero submodules, contradicting the unique-maximal-submodule property [F5]. Hence $\mathcal O_{\chi_n}$ is indecomposable and is the asserted regular integral block. The integral Weyl group is the full order-two Weyl group, giving the stated linkage order $-n-2<n$. [F1, F5, F11, step 2.1, step 4.1] ∎

---
id: lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension
kind: lemma
title: Galois fixed points recover finite-dimensional scalar extensions
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Weizhe Zheng, Lectures on Algebra (10 January 2025)
      url: https://server.mcm.ac.cn/~zheng/algebra.pdf
      locator: Theorem 3.8.1 and complete proof, pp.132–133
status: published
origin: pipeline
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
deps: ["def-semilinear-galois-action-on-a-scalar-extended-algebra", "thm-finite-galois-extension-characterizations", "thm-trace-form-is-nondegenerate-iff-separable", "thm-field-norm-and-trace-by-embeddings", "thm-dedekind-linear-independence-of-characters", "thm-tensor-product-basis-from-bases"]
---

## Statement

Let $E/F$ be finite Galois with group $\Gamma$, and let $W$ be a
finite-dimensional semilinear $\Gamma$-space. Then
$$\mu:E\otimes_F W^\Gamma\longrightarrow W,\qquad e\otimes w\longmapsto ew$$
is an $E$-linear isomorphism. If $W$ is an $E$-algebra and the action is by
semilinear algebra automorphisms, this is an algebra isomorphism. For a
finite-dimensional $F$-space $V$ with the canonical action on $E\otimes_F V$,
$$(E\otimes_F V)^\Gamma=1\otimes V.$$
Here $v\mapsto1\otimes v$ is injective, so $1\otimes V$ is a copy of $V$.
Consequently $E\otimes_F(E\otimes_F V)^\Gamma\cong E\otimes_F V$, respecting
algebra multiplication and units when $V$ is an $F$-algebra.

## Facts & Assumptions

[F1] Semilinear actions and canonical tensor actions have the formulas in [[def-semilinear-galois-action-on-a-scalar-extended-algebra]].

[F2] Finite Galois implies $|\Gamma|=[E:F]$ and $E^\Gamma=F$: [[thm-finite-galois-extension-characterizations]].

[F3] The trace pairing of a finite separable extension is nondegenerate: [[thm-trace-form-is-nondegenerate-iff-separable]].

[F4] For a separable extension, trace is the sum of the distinct embeddings: [[thm-field-norm-and-trace-by-embeddings]]. Here normality makes those embeddings precisely $\Gamma$.

[F5] Distinct multiplicative characters of a group are linearly independent over the target field: [[thm-dedekind-linear-independence-of-characters]].

[F6] Tensor products of free modules have the product basis, including empty bases: [[thm-tensor-product-basis-from-bases]].

## Proof

**Given:** $E/F$, $\Gamma$, and $W$ as stated. All bases and sums used below are finite.

1.1 Put $n=[E:F]=|\Gamma|\ge1$, choose an $F$-basis $a_1,\ldots,a_n$ of $E$, and form its trace Gram matrix $H_{ij}=\operatorname{Tr}(a_i a_j)$. Separability and nondegeneracy make $H$ invertible. Set $b_j=\sum_k(H^{-1})_{kj}a_k$. Then $\operatorname{Tr}(a_i b_j)=\delta_{ij}$. The invertible coefficient matrix also shows that $(b_j)$ is a basis. [F2, F3, algebra]

1.2 Any finite $F$-independent list $v_1,\ldots,v_r$ in $W^\Gamma$ is $E$-independent. Indeed, if a relation exists, select one with the least positive number of nonzero coefficients and normalize one of those coefficients to $1$. Applying $T_\sigma$ and subtracting produces a relation with that coefficient zero; minimality forces every other coefficient to be fixed by every $\sigma$. They all lie in $F$, contradicting $F$-independence. A one-term relation is already impossible since a nonzero scalar cannot annihilate a nonzero vector. [F1, F2, algebra]

1.3 For the canonical action, choose a finite $F$-basis $(v_j)$ of $V$. Each tensor has a unique expression $\sum_j e_j\otimes v_j$: the product $F$-basis in F6, regrouped by the $v_j$, proves existence and uniqueness of its coefficients in $E$. Such a tensor is fixed exactly when $\sigma(e_j)=e_j$ for every $\sigma,j$, equivalently each $e_j\in F$. It then equals $1\otimes\sum_j e_jv_j$. Conversely every $1\otimes v$ is fixed. This also proves that $v\mapsto1\otimes v$ is injective, including the empty-basis case. [F1, F2, F6, algebra]

2.1 Let $X_{\sigma i}=\sigma(a_i)$ and $Y_{\sigma j}=\sigma(b_j)$. A relation among the rows of $X$ vanishes on the $a_i$, hence by $F$-linearity on every $x\in E$; restricting to $E^\times$ and using independence of the distinct automorphisms as multiplicative characters makes every coefficient zero. Thus $X$ is invertible. The trace formula gives $X^{\mathsf T}Y=I$, so $XY^{\mathsf T}=I$. Its row at $1\in\Gamma$ yields $\sum_i a_i\sigma(b_i)=\delta_{1,\sigma}$. [F4, F5, step 1.1, algebra]

2.2 Any tensor in the kernel is a finite sum $\sum_j e_j\otimes w_j$. By eliminating dependent members of the finite list $(w_j)$, rewrite it as $\sum_{k=1}^r f_k\otimes v_k$ with the $v_k$ $F$-independent and invariant. Its image is $\sum_k f_kv_k=0$, so step 1.2 forces every $f_k=0$. Hence the tensor is zero and $\mu$ is injective. For $W=0$ the domain and codomain are zero and the same argument uses the empty list. [step 1.2, algebra]

3.1 For $w\in W$ define $P_i(w)=\sum_{\sigma\in\Gamma}\sigma(b_i)T_\sigma(w)$. For $\tau\in\Gamma$, semilinearity gives $T_\tau(P_i(w))=\sum_\sigma(\tau\sigma)(b_i)T_{\tau\sigma}(w)=P_i(w)$, since $\sigma\mapsto\tau\sigma$ permutes the finite group. Moreover $\sum_i a_iP_i(w)=\sum_\sigma\delta_{1,\sigma}T_\sigma(w)=w$. Thus $P_i(w)\in W^\Gamma$, and $\mu$ is onto. The formula $\mu(e\otimes w)=ew$ is $F$-balanced and $E$-linear. [F1, step 2.1, algebra]

4.1 If $W$ is an algebra, its fixed space is an $F$-subalgebra containing $1$. For invariant $u,v$ and $e,f\in E$, $\mu((e\otimes u)(f\otimes v))=efuv=(eu)(fv)$ and $\mu(1\otimes1)=1$. Distributing over finite sums proves multiplicativity on all tensors. Together with bijectivity, this proves both algebra assertions. If $E=F$, $\Gamma=\{1\}$ and the map is the usual multiplication $F\otimes_F W\cong W$; the proof divides by no group order in any characteristic. [F1, step 3.1, step 2.2, step 1.3, algebra] QED

## Remarks

The local trace-dual formula refines the evaluation-matrix proof in Zheng,
Theorem 3.8.1, pp.132–133. Its injectivity argument uses finite lists, so no
choice of an infinite invariant basis is needed.

---
id: cex-a-deligne-kernel-need-not-be-one-external-tensor-factor
kind: counterexample
title: "A Deligne kernel need not be one external tensor factor"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-algebra-over-a-commutative-ring, def-algebraic-dual-and-linear-functional, def-bimodule, def-dimension, def-generated-cyclic-finitely-generated-and-free-modules, def-left-and-right-modules, def-linear-map, def-simple-module, def-vector-space, lem-opposite-deligne-product-identifies-with-finite-bimodules, thm-universal-property-of-module-tensor-products]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, author final version, §1.11 (Definition 1.11.1 and Proposition 1.11.2 with its coalgebra-realization sketch), printed pp.15–16"
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1 and (2.1)), §2.3 ((2.6)–(2.9)), §2.4 (Proposition 2.8, Corollary 2.9 and (2.18)–(2.31)), §§3.1–3.2 (Definition 3.1, Theorem 3.2, Lemma 3.3, Proposition 3.4 and Corollaries 3.5–3.7), §3.5 (Definition 3.14, Lemmas 3.15–3.16 and (3.56)–(3.58))"
      url: https://arxiv.org/pdf/1612.04561v3
dependency_level: 6
---

## Statement refuted

Under the identification $\mathcal A^{\mathrm{op}}\boxtimes\mathcal B\simeq(\mathcal B,\mathcal A)\text{-}\mathrm{bimod}$ of [[lem-opposite-deligne-product-identifies-with-finite-bimodules]], not every object is one external tensor factor $\bar a\boxtimes b$. Witness: for the upper triangular $k$-algebra $A_0$ with basis $e_1,e_2,u$, unit $1=e_1+e_2$, $e_1^{2}=e_1$, $e_2^{2}=e_2$, $e_1u=u=ue_2$ and all other basis products zero ([[def-algebra-over-a-commutative-ring]], [[def-vector-space]], [[def-dimension]]), the regular bimodule $A_0$ has dimension $3$, and it is not isomorphic to $b\otimes_ka^{*}$ for any finite-dimensional left $A_0$-modules $a,b$: if it were, one of $\dim_kb,\dim_ka$ would be $1$, and a one-dimensional left or right $A_0$-module has $u$ acting as zero ([[def-simple-module]]), forcing the left (if $\dim_kb=1$) or right (if $\dim_ka=1$) multiplication by $u$ on $b\otimes_ka^{*}$ to vanish; on the regular bimodule left multiplication by $u$ sends $e_2$ to $u\ne0$ and right multiplication by $u$ sends $e_1$ to $u\ne0$ ([[def-bimodule]], [[def-left-and-right-modules]], [[def-linear-map]]), a contradiction in either case.

## Facts & Assumptions

**Given:** A field $k$ and the $k$-algebra $A_0$ with $k$-basis $e_1,e_2,u$, unit $1=e_1+e_2$, $e_1^{2}=e_1$, $e_2^{2}=e_2$, $e_1u=u=ue_2$ and all remaining products of basis elements zero; the regular bimodule ${}_{A_0}(A_0)_{A_0}$; and finite-dimensional left $A_0$-modules $a,b$.

[F1] A left $A_0$-module is an abelian group with a scalar action satisfying $r(m+n)=rm+rn$, $(r+s)m=rm+sm$, $(rs)m=r(sm)$ and $1m=m$, and dually on the right ([[def-left-and-right-modules]]); on a one-dimensional module the action is a $k$-linear map into scalars, so all products and sums of actions are computed by the corresponding relations in $A_0$ ([[def-linear-map]], [[def-vector-space]]); a one-dimensional module has no nonzero proper submodule, hence is simple ([[def-simple-module]]).

[F2] For finite-dimensional $k$-vector spaces the dimension is the cardinality of a basis, and the products $x_i\otimes\lambda_j$ of bases $(x_i)$ of $b$ and $(\lambda_j)$ of $a^*$ form a basis of $b\otimes_ka^*$ by the universal property of the tensor product; hence $\dim_k(b\otimes_ka^*)=\dim_kb\cdot\dim_ka^*$, and $\dim_ka^*=\dim_ka$ for $a^*=\operatorname{Hom}_k(a,k)$ ([[def-dimension]], [[def-generated-cyclic-finitely-generated-and-free-modules]], [[thm-universal-property-of-module-tensor-products]], [[def-algebraic-dual-and-linear-functional]]).

[F3] An isomorphism of $(A_0,A_0)$-bimodules is a bijection that is linear over $k$ and intertwines both actions, so it preserves $k$-dimensions and the vanishing of the two multiplications ([[def-bimodule]]); the external objects $\bar a\boxtimes b$ in the identified category correspond to the bimodules $b\otimes_ka^*$ ([[lem-opposite-deligne-product-identifies-with-finite-bimodules]]).

## Counterexample

1.1 The specified algebra is the upper triangular $2\times2$ matrix algebra under $e_1\mapsto E_{11}$, $e_2\mapsto E_{22}$, $u\mapsto E_{12}$, so the products are associative and define a unital algebra. In $A_0$ the relations $e_1+e_2=1$, $e_1e_2=e_2e_1=0$ and $e_1u=u=ue_2$ hold with $e_1,e_2,u$ a $k$-basis of the regular bimodule, so left multiplication by $u$ sends $e_2$ to $ue_2=u\ne0$ and right multiplication by $u$ sends $e_1$ to $e_1u=u\ne0$, while $A_0$ has $k$-dimension $3$ [F1, F2]. [given, F1, F2]

2.1 On a one-dimensional left or right module, the action of $u$ is multiplication by a scalar $c\in k$. Since $u^2=0$, the module law gives $c^2=0$, hence $c=0$ because $k$ is a field. Thus $u$ acts as zero on every one-dimensional module on either side. [step 1.1, F1]


3.1 Suppose the regular bimodule $A_0$ were isomorphic to $b\otimes_ka^*$. By [F3] the two sides have the same $k$-dimension and the same vanishing pattern of the two multiplications, and by [F2] $3=\dim_kA_0=\dim_kb\cdot\dim_ka^*=\dim_kb\cdot\dim_ka$, so one of the two factors is one-dimensional. If $\dim_kb=1$, then left multiplication by $u$ is zero on $b$ by step 2.1, hence zero on $b\otimes_ka^*$ because $u\cdot(x\otimes\lambda)=(ux)\otimes\lambda=0$, contradicting step 1.1, where left multiplication by $u$ sends $e_2$ to $u\ne0$. If $\dim_ka=1$, then $u$ acts as zero on $a$, so $(\lambda\cdot u)(x)=\lambda(ux)=0$ for every $\lambda\in a^*$, and right multiplication by $u$ is zero on $b\otimes_ka^*$ because $(y\otimes\lambda)\cdot u=y\otimes(\lambda\cdot u)=0$, contradicting step 1.1, where right multiplication by $u$ sends $e_1$ to $u\ne0$. Both alternatives contradict the assumed bimodule isomorphism, so the regular bimodule $A_0$ is not isomorphic to any external tensor factor $b\otimes_ka^*$. [step 2.1, F2, F3] ∎

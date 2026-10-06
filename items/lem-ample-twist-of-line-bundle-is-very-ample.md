---
id: lem-ample-twist-of-line-bundle-is-very-ample
kind: lemma
title: "Large ample twists of a line bundle are very ample"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-closed-immersion-schemes
  - def-globally-generated-sheaf
  - def-invertible-sheaf
  - def-locally-noetherian-and-noetherian-scheme
  - def-projective-morphism-pre-proj
  - def-separated-morphism-schemes
  - def-sheaf-tensor-product
  - def-very-ample-invertible-sheaf-relative
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-graph-as-pullback-diagonal
  - lem-very-ample-implies-ample
  - thm-ample-powers-very-ample-proper-base
  - thm-line-bundle-sections-define-projective-map
  - thm-projective-morphism-proper
  - thm-projective-space-proper-over-base
  - thm-segre-line-bundle-external-tensor
  - thm-serre-criterion-ampleness
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$X$ be an integral smooth projective surface over $k$, let $L$ be an ample
invertible $\mathcal O_X$-module and let $M$ be an invertible
$\mathcal O_X$-module ([[def-ample-invertible-sheaf]],
[[def-invertible-sheaf]]). Then there is an integer $n_0$ such that for every
$n\ge n_0$ the twist
$$M\otimes_{\mathcal O_X}L^{\otimes n}$$
is closed H-very ample relative to $\operatorname{Spec}k$
([[def-very-ample-invertible-sheaf-relative]]); in particular
$M\otimes L^{\otimes n}$ is H-very ample, hence very ample, relative to
$\operatorname{Spec}k$ for all $n\ge n_0$. No hypothesis is imposed on $M$.

## Facts & Assumptions

**Given:** a field $k$, an integral smooth projective surface $X$ over $k$, an ample invertible sheaf $L$ and an invertible sheaf $M$ on $X$.

[F1] Serre's global-generation criterion: on the Noetherian scheme $X$ the invertible sheaf $L$ is ample if and only if for every coherent $\mathcal O_X$-module $F$ the twist $F\otimes L^{\otimes n}$ is globally generated for all sufficiently large $n$ ([[thm-serre-criterion-ampleness]], [[def-locally-noetherian-and-noetherian-scheme]]). The invertible sheaf $M$ is coherent on the locally Noetherian scheme $X$, and $X$ is quasi-compact, so global generation of an invertible sheaf is witnessed by finitely many global sections ([[def-globally-generated-sheaf]], [[def-invertible-sheaf]]).

[F2] Ample powers embed: $\operatorname{Spec}k$ is Noetherian, $X\to\operatorname{Spec}k$ is proper of finite type, and $L$ is ample, so there is an integer $d_0\ge1$ such that $L^{\otimes d}$ is closed H-very ample relative to $\operatorname{Spec}k$ for every $d\ge d_0$ ([[thm-ample-powers-very-ample-proper-base]], [[def-projective-morphism-pre-proj]]). Concretely this means that for each such $d$ there is a closed immersion $i_d:X\hookrightarrow\mathbb P^{N_d}_k$ with $i_d^*\mathcal O(1)\cong L^{\otimes d}$ ([[def-very-ample-invertible-sheaf-relative]]).

[F3] Generating sections define a morphism: if $s_0,\dots,s_p$ are global sections generating an invertible sheaf $G$, there is a unique $k$-morphism $\varphi:X\to\mathbb P^p_k$ with $\varphi^*\mathcal O(1)\cong G$ and $\varphi^*(x_i)=s_i$ ([[thm-line-bundle-sections-define-projective-map]]).

[F4] Graphs and immersions: for a $k$-morphism $u:X\to Y$ with $Y$ separated over $k$ the graph $\Gamma_u:X\to X\times_kY$ is a closed immersion, because the defining square is a base change of the diagonal $\Delta_{Y/k}$ ([[lem-graph-as-pullback-diagonal]], [[def-separated-morphism-schemes]]) and base changes of closed immersions are closed immersions ([[lem-closed-immersion-affine-quotient-and-base-change]]); the projective space $\mathbb P^p_k$ is proper over $k$, hence separated ([[thm-projective-space-proper-over-base]], [[def-separated-morphism-schemes]]), and a composite of closed immersions is a closed immersion, since the composite of homeomorphisms onto closed subsets is again one and a composite of surjective sheaf maps is surjective ([[def-closed-immersion-schemes]]). The canonical swap $X\times_k\mathbb P^p_k\to\mathbb P^p_k\times_kX$ is an isomorphism, so it preserves closed immersions.

[F5] The Segre embedding: with $p,q\ge0$ and $P=\mathbb P^p_k\times_k\mathbb P^q_k$ with projections $\mathrm{pr}_1,\mathrm{pr}_2$, there is a closed immersion $\sigma:P\hookrightarrow\mathbb P^{(p+1)(q+1)-1}_k$ with $\sigma^*\mathcal O(1)\cong\mathrm{pr}_1^*\mathcal O(1)\otimes\mathrm{pr}_2^*\mathcal O(1)$ ([[thm-segre-line-bundle-external-tensor]]).

[F6] The Axiom of Choice is inherited from the Proj, ample-embedding and Segre suppliers of [F2], [F4] and [F5]; the finitely many generating sections chosen in step 3.1 are a finite family, and no infinite selection occurs.



## Proof
**Proof technique:** direct: generate one factor by global sections, embed the other by an ample power, and combine the two morphisms through the graph immersion and the Segre embedding.

1.1 The two thresholds. By [F1] applied to the coherent module $M$ there is an integer $n_1$ with $G:=M\otimes L^{\otimes n_1}$ globally generated. By [F2] there is $d_0\ge1$ with $L^{\otimes d}$ closed H-very ample for every $d\ge d_0$. Put $n_0:=n_1+d_0$. [F1, F2]

2.1 The splitting of the twist. Let $n\ge n_0$ and put $V:=L^{\otimes(n-n_1)}$, so that $n-n_1\ge d_0$ and $V$ is closed H-very ample by step 1.1; tensoring the identity $M\otimes L^{\otimes n}=(M\otimes L^{\otimes n_1})\otimes L^{\otimes(n-n_1)}$ and using associativity and commutativity of the tensor product of invertible sheaves gives $M\otimes L^{\otimes n}\cong G\otimes V$, a tensor product of the globally generated invertible sheaf $G$ and the closed H-very ample invertible sheaf $V$. [F1, F2, step 1.1]

3.1 The two morphisms. By [F3] the finite generating family of $G$ (which exists by [F1]) defines a $k$-morphism $\varphi:X\to\mathbb P^p_k$ with $\varphi^*\mathcal O(1)\cong G$. By [F2] applied to $d=n-n_1$ the sheaf $V$ is closed H-very ample, so there is a closed immersion $\psi:X\hookrightarrow\mathbb P^q_k$ with $\psi^*\mathcal O(1)\cong V$. [F1, F2, F3, step 2.1]

4.1 The product morphism is a closed immersion. Consider $(\varphi,\psi):X\to\mathbb P^p_k\times_k\mathbb P^q_k$. The graph $\Gamma_\varphi:X\to X\times_k\mathbb P^p_k$ is a closed immersion by [F4]; composing with the swap isomorphism gives the closed immersion $\gamma:X\hookrightarrow\mathbb P^p_k\times_kX$, $x\mapsto(\varphi(x),x)$. The morphism $\mathrm{id}\times\psi:\mathbb P^p_k\times_kX\to\mathbb P^p_k\times_k\mathbb P^q_k$ is the base change of the closed immersion $\psi$ along the first projection, hence a closed immersion by [F4], and its composite with $\gamma$ is $(\varphi,\psi)$. A composite of closed immersions is a closed immersion by [F4], so $(\varphi,\psi)$ is a closed immersion. [F4, step 3.1]

5.1 The Segre composite. Let $\sigma$ be the Segre closed immersion of [F5]. The composite $\theta:=\sigma\circ(\varphi,\psi):X\hookrightarrow\mathbb P^N_k$, $N=(p+1)(q+1)-1$, is a composite of closed immersions, hence a closed immersion, and $$\theta^*\mathcal O(1)\cong(\varphi,\psi)^*\sigma^*\mathcal O(1)\cong(\varphi,\psi)^*\bigl(\mathrm{pr}_1^*\mathcal O(1)\otimes\mathrm{pr}_2^*\mathcal O(1)\bigr)\cong\varphi^*\mathcal O(1)\otimes\psi^*\mathcal O(1)\cong G\otimes V\cong M\otimes L^{\otimes n}.$$ [F5, step 2.1, step 3.1, step 4.1]

6.1 Conclusion. The closed immersion $\theta$ exhibits $M\otimes L^{\otimes n}\cong\theta^*\mathcal O(1)$ as closed H-very ample relative to $\operatorname{Spec}k$ for every $n\ge n_0$, hence H-very ample. The Axiom of Choice is inherited from the suppliers recorded in [F6]; the construction selects only the finite generating family of $G$ and the fixed integer parameters. [F6, step 5.1] ∎ 
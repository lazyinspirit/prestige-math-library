---
id: cor-kernel-composition-and-transformations-use-balanced-tensor-products
kind: corollary
title: "Composition of Deligne kernels is balanced tensor product"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-abelian-category, def-bimodule, def-k-linear-category-and-k-linear-functor, def-left-exact-and-right-exact-functor, def-morita-bicategory-of-rings-and-bimodules, def-natural-transformation, lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence, lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps, thm-associativity-of-balanced-tensor-products, thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories, thm-natural-transformations-of-tensor-functors-are-bimodule-maps, thm-unit-isomorphisms-for-module-tensor-products]
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
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, author final version, §1.11 (Definition 1.11.1 and Proposition 1.11.2 with its coalgebra-realization sketch), printed pp.15–16"
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1 and (2.1)), §2.3 ((2.6)–(2.9)), §2.4 (Proposition 2.8, Corollary 2.9 and (2.18)–(2.31)), §§3.1–3.2 (Definition 3.1, Theorem 3.2, Lemma 3.3, Proposition 3.4 and Corollaries 3.5–3.7), §3.5 (Definition 3.14, Lemmas 3.15–3.16 and (3.56)–(3.58))"
      url: https://arxiv.org/pdf/1612.04561v3
dependency_level: 8
---

## Statement

Let $\mathcal A,\mathcal B,\mathcal C$ be finite $k$-linear abelian categories and let $F:\mathcal A\to\mathcal B$, $G:\mathcal B\to\mathcal C$ be $k$-linear right exact functors, with Deligne kernels $M\in\mathcal A^{\mathrm{op}}\boxtimes\mathcal B$ and $N\in\mathcal B^{\mathrm{op}}\boxtimes\mathcal C$ (the objects corresponding to $F,G$ under [[thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories]], computed by [[lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps]]). Then the Deligne kernel of the composite $G\circ F$ is the balanced tensor product $N\otimes_{\mathcal B}M$; natural transformations between composites correspond to maps of these composite bimodules ([[thm-natural-transformations-of-tensor-functors-are-bimodule-maps]]), and the operation is associative and unital up to the coherent canonical isomorphisms of the Morita bicategory of rings and bimodules ([[def-morita-bicategory-of-rings-and-bimodules]], [[lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence]], [[thm-associativity-of-balanced-tensor-products]], [[thm-unit-isomorphisms-for-module-tensor-products]]). In particular Deligne-kernel composition is the balanced tensor product over the middle category, not the external Deligne product of the two kernels. The kernels and module equivalences are supplied; balanced tensor products are computed over their model algebras. The Deligne products use the cited existence theorem's AC convention, and composition requires no additional choice.

## Facts & Assumptions

**Given:** Finite $k$-linear abelian categories $\mathcal A,\mathcal B,\mathcal C$ and $k$-linear right exact functors $F:\mathcal A\to\mathcal B$, $G:\mathcal B\to\mathcal C$ with Deligne kernels $M,N$.

[F1] The categorical Eilenberg–Watts functors $\Phi^{l}$ and $\Phi^{r}$ are equivalences of categories, so a $k$-linear right exact functor out of $\mathcal A$ is naturally isomorphic to $M\otimes_{\mathcal A}-$ for its kernel $M$, and the kernel is determined up to canonical isomorphism ([[thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories]]); the inverse constructions $\Psi^{l},\Psi^{r}$ are the explicit (co)end kernels and satisfy $\Psi^{r}\Phi^{r}\cong1$ ([[lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps]]).

[F2] For bimodules $M,M'$ over unital rings the assignment $f\mapsto(f\otimes1_X)_X$ is a bijection $\operatorname{Hom}_{B\text{-}A}(M,M')\to\operatorname{Nat}(T_M,T_{M'})$ compatible with addition, identities and vertical composition ([[thm-natural-transformations-of-tensor-functors-are-bimodule-maps]]).

[F3] The balanced tensor product is associative: there is a canonical isomorphism $\alpha_{M,N,P}:(M\otimes_RN)\otimes_SP\to M\otimes_R(N\otimes_SP)$ with $\alpha((m\otimes n)\otimes p)=m\otimes(n\otimes p)$, natural in all three variables and respecting outer actions ([[thm-associativity-of-balanced-tensor-products]]), and for a $(C,B)$-bimodule $N$, the unit isomorphisms are $N\otimes_BB\cong N$ and $C\otimes_CN\cong N$, and for a $(B,A)$-bimodule $M$ they are $B\otimes_BM\cong M$ and $M\otimes_AA\cong M$, all compatible with the actions ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F4] Composition of bimodules is the balanced tensor product over the middle ring and the associator and unitors of [F3] satisfy the pentagon and triangle coherence identities, making the Morita data a bicategory; no commutativity is assumed ([[def-morita-bicategory-of-rings-and-bimodules]], [[lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the functor $F$ is naturally isomorphic to $M\otimes_{\mathcal A}-$ and $G$ to $N\otimes_{\mathcal B}-$, where $M$ is a finite $(\mathcal B,\mathcal A)$-bimodule and $N$ a finite $(\mathcal C,\mathcal B)$-bimodule ([[def-bimodule]], [[def-k-linear-category-and-k-linear-functor]], [[def-left-exact-and-right-exact-functor]], [[def-abelian-category]]). [given, F1]

2.1 Composing, $G\circ F$ is naturally isomorphic to $N\otimes_{\mathcal B}(M\otimes_{\mathcal A}-)$, and the associativity isomorphism of [F3] gives a natural isomorphism $(N\otimes_{\mathcal B}M)\otimes_{\mathcal A}X\cong N\otimes_{\mathcal B}(M\otimes_{\mathcal A}X)$ for every $X$ ([[def-natural-transformation]]). Hence $G\circ F\cong T_{N\otimes_{\mathcal B}M}$, and since the Eilenberg–Watts classification of [F1] is an equivalence, the Deligne kernel of $G\circ F$ is $N\otimes_{\mathcal B}M$ up to the canonical isomorphism, not the external tensor product of $M$ and $N$. Likewise a natural transformation between composites corresponds under the composite isomorphism to a natural transformation $T_{N\otimes_{\mathcal B}M}\Rightarrow T_{N'\otimes_{\mathcal B}M'}$, hence by [F2] to a bimodule map $N\otimes_{\mathcal B}M\to N'\otimes_{\mathcal B}M'$. [step 1.1, F1, F2, F3]

3.1 For three composable functors with kernels $M,N,P$ the two bracketings of the composite have kernels $(P\otimes_{\mathcal C}N)\otimes_{\mathcal B}M$ and $P\otimes_{\mathcal C}(N\otimes_{\mathcal B}M)$, identified by the natural associativity isomorphism $\alpha$ of [F3]; the pentagon and triangle identities, together with the unit isomorphisms for the identity functor whose kernel is the regular bimodule, are exactly the bicategory coherence verified in [F4]. Therefore Deligne-kernel composition is the balanced tensor product over the middle category, associative and unital up to the coherent canonical isomorphisms, and the statement transports from the module model to arbitrary finite categories along the equivalence of [F1]; no commutativity and no choice are used. [step 2.1, F3, F4] ∎

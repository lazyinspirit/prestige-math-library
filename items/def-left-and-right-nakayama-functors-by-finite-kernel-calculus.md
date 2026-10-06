---
id: def-left-and-right-nakayama-functors-by-finite-kernel-calculus
kind: definition
title: "Left and right Nakayama functors by finite kernel calculus"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-abelian-category, def-finite-k-linear-abelian-category, def-functor-and-contravariant-functor, def-k-linear-category-and-k-linear-functor, def-left-exact-and-right-exact-functor, def-natural-transformation, lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps, thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories]
justified_by: [lem-nakayama-kernels-give-well-defined-adjoint-functors]
provenance:
  statement: literature-derived
  proof: not-applicable
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

Let $\mathcal A$ be a finite $k$-linear abelian category ([[def-finite-k-linear-abelian-category]], [[def-abelian-category]], [[def-k-linear-category-and-k-linear-functor]]) and let $\Phi^{l},\Phi^{r},\Psi^{l},\Psi^{r}$ be the equivalences of the categorical Eilenberg–Watts triangle ([[thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories]], [[lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps]]). Define
$$\Gamma^{rl}=\Phi^{r}\Psi^{l}:\operatorname{Lex}(\mathcal A,\mathcal A)\longrightarrow\operatorname{Rex}(\mathcal A,\mathcal A),\qquad \Gamma^{lr}=\Phi^{l}\Psi^{r}:\operatorname{Rex}(\mathcal A,\mathcal A)\longrightarrow\operatorname{Lex}(\mathcal A,\mathcal A)$$
(using the notation of [[def-left-exact-and-right-exact-functor]] and [[def-natural-transformation]]). The **Nakayama functor** of $\mathcal A$ is $N^{r}_{\mathcal A}=\Gamma^{rl}(1_{\mathcal A})$, the image of the identity functor regarded as a left exact endofunctor, and its left exact analogue is $N^{l}_{\mathcal A}=\Gamma^{lr}(1_{\mathcal A})$, the identity regarded as a right exact endofunctor ([[def-functor-and-contravariant-functor]]). In a module model $\mathcal A\simeq A\text{-}\mathrm{mod}$ these are the endofunctors $N^{r}\cong A^{*}\otimes_A-$ and $N^{l}\cong\operatorname{Hom}_A(A^{*},-)$. The definition asserts no further properties, selects no object and makes no choice; well-definedness, independence of the module model, the intrinsic (co)end formulas and the adjunction $N^{r}\dashv N^{l}$ are proved in [[lem-nakayama-kernels-give-well-defined-adjoint-functors]].

## Definition

Let $\mathcal A$ be a finite $k$-linear abelian category ([[def-finite-k-linear-abelian-category]], [[def-abelian-category]], [[def-k-linear-category-and-k-linear-functor]]) and let $\Phi^{l},\Phi^{r},\Psi^{l},\Psi^{r}$ be the equivalences of the categorical Eilenberg–Watts triangle ([[thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories]], [[lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps]]). Define
$$\Gamma^{rl}=\Phi^{r}\Psi^{l}:\operatorname{Lex}(\mathcal A,\mathcal A)\longrightarrow\operatorname{Rex}(\mathcal A,\mathcal A),\qquad \Gamma^{lr}=\Phi^{l}\Psi^{r}:\operatorname{Rex}(\mathcal A,\mathcal A)\longrightarrow\operatorname{Lex}(\mathcal A,\mathcal A)$$
(using the notation of [[def-left-exact-and-right-exact-functor]] and [[def-natural-transformation]]). The **Nakayama functor** of $\mathcal A$ is $N^{r}_{\mathcal A}=\Gamma^{rl}(1_{\mathcal A})$, the image of the identity functor regarded as a left exact endofunctor, and its left exact analogue is $N^{l}_{\mathcal A}=\Gamma^{lr}(1_{\mathcal A})$, the identity regarded as a right exact endofunctor ([[def-functor-and-contravariant-functor]]). In a module model $\mathcal A\simeq A\text{-}\mathrm{mod}$ these are the endofunctors $N^{r}\cong A^{*}\otimes_A-$ and $N^{l}\cong\operatorname{Hom}_A(A^{*},-)$. The definition asserts no further properties, selects no object and makes no choice; well-definedness, independence of the module model, the intrinsic (co)end formulas and the adjunction $N^{r}\dashv N^{l}$ are proved in [[lem-nakayama-kernels-give-well-defined-adjoint-functors]].

## Remarks

- **Why the composites are legitimate.** $\Psi^{l}$ is defined on $\operatorname{Lex}(\mathcal A,\mathcal A)$ with values in $\mathcal A^{\mathrm{op}}\boxtimes\mathcal A$ and $\Phi^{r}$ is defined on $\mathcal A^{\mathrm{op}}\boxtimes\mathcal A$ with values in $\operatorname{Rex}(\mathcal A,\mathcal A)$, so the composite $\Gamma^{rl}$ is a functor on the functor category of left exact endofunctors with all natural transformations; dually $\Gamma^{lr}$ is defined on $\operatorname{Rex}(\mathcal A,\mathcal A)$. The identity functor is both left exact and right exact, so both evaluations $N^{r}_{\mathcal A}=\Gamma^{rl}(1_{\mathcal A})$ and $N^{l}_{\mathcal A}=\Gamma^{lr}(1_{\mathcal A})$ are legitimate and use the same object $1_{\mathcal A}$ in the two different functor categories.

- **What the definition does not assert.** No formula, adjunction, self-injectivity, symmetry or coincidence of $N^{r}$ and $N^{l}$ is asserted here: the displayed module-model formulas $N^{r}\cong A^{*}\otimes_A-$ and $N^{l}\cong\operatorname{Hom}_A(A^{*},-)$ are theorems of the `justified_by` supplier [[lem-nakayama-kernels-give-well-defined-adjoint-functors]], together with the behaviour under a change of module model. In particular the definition does not choose a module model, a presentation or a basis, and it does not identify $\Gamma^{rl}$ or $\Gamma^{lr}$ with the identity.

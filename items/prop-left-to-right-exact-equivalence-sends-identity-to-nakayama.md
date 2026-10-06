---
id: prop-left-to-right-exact-equivalence-sends-identity-to-nakayama
kind: proposition
title: "The left-to-right exact equivalence sends the identity to the Nakayama functor"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-abelian-category, def-functor-and-contravariant-functor, def-k-linear-category-and-k-linear-functor, def-left-and-right-nakayama-functors-by-finite-kernel-calculus, def-left-exact-and-right-exact-functor, def-natural-isomorphism, def-natural-transformation, lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps, lem-nakayama-kernels-give-well-defined-adjoint-functors, thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories]
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
dependency_level: 10
---

## Statement

Let $\mathcal A$ be a finite $k$-linear abelian category with module model $\mathcal A\simeq A\text{-}\mathrm{mod}$ ([[def-k-linear-category-and-k-linear-functor]]). The equivalence $\Gamma^{rl}=\Phi^{r}\Psi^{l}:\operatorname{Lex}(\mathcal A,\mathcal A)\to\operatorname{Rex}(\mathcal A,\mathcal A)$ of the categorical Eilenberg–Watts triangle is quasi-inverse to $\Gamma^{lr}=\Phi^{l}\Psi^{r}$ ([[thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories]], [[lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps]]), and it sends the identity functor, regarded as a left exact endofunctor, to the Nakayama functor $N^{r}_{\mathcal A}\cong A^{*}\otimes_A-$; dually $\Gamma^{lr}$ sends the identity, regarded as right exact, to $N^{l}_{\mathcal A}\cong\operatorname{Hom}_A(A^{*},-)$ ([[def-left-and-right-nakayama-functors-by-finite-kernel-calculus]], [[lem-nakayama-kernels-give-well-defined-adjoint-functors]]). Consequently the restriction of $\Gamma^{rl}$ to the full category of exact endofunctors fails to be naturally isomorphic to their inclusion into $\operatorname{Rex}(\mathcal A,\mathcal A)$ whenever $N^{r}_{\mathcal A}$ is not naturally isomorphic to the identity; in particular the equivalence between left exact and right exact endofunctors is not the identity-on-objects inclusion of exact functors in general (the companion examples page exhibits such a category). The equivalence and module data are supplied under the existence theorem's AC convention; this comparison uses no additional choice.

## Facts & Assumptions

**Given:** A finite $k$-linear abelian category $\mathcal A$ with a chosen module model $\mathcal A\simeq A\text{-}\mathrm{mod}$ for a finite-dimensional unital $k$-algebra $A$ ([[def-abelian-category]], [[def-k-linear-category-and-k-linear-functor]]), and the functors $\Phi^{l},\Phi^{r},\Psi^{l},\Psi^{r}$ of the categorical Eilenberg–Watts triangle together with the composites $\Gamma^{rl}=\Phi^{r}\Psi^{l}$ and $\Gamma^{lr}=\Phi^{l}\Psi^{r}$ ([[def-left-and-right-nakayama-functors-by-finite-kernel-calculus]], [[def-natural-transformation]]).

[F1] The functors $\Phi^{l}(M)=\operatorname{Hom}_{\mathcal A}(M^{*},-)$ and $\Phi^{r}(M)=M\otimes_{\mathcal A}-$ are equivalences of categories onto $\operatorname{Lex}(\mathcal A,\mathcal A)$ and $\operatorname{Rex}(\mathcal A,\mathcal A)$ with quasi-inverses $\Psi^{l}$ and $\Psi^{r}$, so $\Psi^{l}\Phi^{l}\cong1$, $\Phi^{l}\Psi^{l}\cong1$, $\Psi^{r}\Phi^{r}\cong1$ and $\Phi^{r}\Psi^{r}\cong1$; in particular $\Gamma^{rl}$ is a functor $\operatorname{Lex}(\mathcal A,\mathcal A)\to\operatorname{Rex}(\mathcal A,\mathcal A)$ and $\Gamma^{lr}$ is a functor $\operatorname{Rex}(\mathcal A,\mathcal A)\to\operatorname{Lex}(\mathcal A,\mathcal A)$ ([[thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories]], [[lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps]], [[def-natural-isomorphism]]).

[F2] The Nakayama functors are defined by $N^{r}_{\mathcal A}=\Gamma^{rl}(1_{\mathcal A})$, the identity functor regarded as a left exact endofunctor, and $N^{l}_{\mathcal A}=\Gamma^{lr}(1_{\mathcal A})$, the identity functor regarded as a right exact endofunctor; the identity functor of $\mathcal A$ preserves every limit and every colimit that exists in $\mathcal A$, hence is both left exact and right exact ([[def-left-and-right-nakayama-functors-by-finite-kernel-calculus]], [[def-left-exact-and-right-exact-functor]], [[def-functor-and-contravariant-functor]]).

[F3] In the model $N^{r}_{\mathcal A}\cong A^{*}\otimes_A-$ and $N^{l}_{\mathcal A}\cong\operatorname{Hom}_A(A^{*},-)$, and these functors are well defined and independent of the module model up to canonical natural isomorphism ([[lem-nakayama-kernels-give-well-defined-adjoint-functors]]).

[F4] If $F\cong G$ is a natural isomorphism of functors then every component $F(X)\to G(X)$ is an isomorphism; conjugation of a natural isomorphism by functors on either side is again a natural isomorphism, and composition of natural isomorphisms is a natural isomorphism ([[def-natural-isomorphism]], [[def-natural-transformation]], [[def-functor-and-contravariant-functor]]).

## Proof

**Proof technique:** direct.

1.1 The composites $\Gamma^{lr}\Gamma^{rl}=\Phi^{l}\Psi^{r}\Phi^{r}\Psi^{l}$ and $\Gamma^{rl}\Gamma^{lr}=\Phi^{r}\Psi^{l}\Phi^{l}\Psi^{r}$ are computed by substituting the quasi-inverse isomorphisms of [F1]: conjugating $\Psi^{r}\Phi^{r}\cong1$ by $\Phi^{l}$ and $\Psi^{l}$ gives $\Phi^{l}\Psi^{r}\Phi^{r}\Psi^{l}\cong\Phi^{l}1\Psi^{l}=\Phi^{l}\Psi^{l}\cong1$, and conjugating $\Psi^{l}\Phi^{l}\cong1$ by $\Phi^{r}$ and $\Psi^{r}$ gives $\Phi^{r}\Psi^{l}\Phi^{l}\Psi^{r}\cong\Phi^{r}1\Psi^{r}=\Phi^{r}\Psi^{r}\cong1$, all by [F4]. Hence $\Gamma^{lr}\Gamma^{rl}\cong1$ and $\Gamma^{rl}\Gamma^{lr}\cong1$, so $\Gamma^{rl}$ and $\Gamma^{lr}$ are quasi-inverse to each other. [given, F1, F4]

2.1 By definition [F2] one has $\Gamma^{rl}(1_{\mathcal A})=N^{r}_{\mathcal A}$ and $\Gamma^{lr}(1_{\mathcal A})=N^{l}_{\mathcal A}$, so $\Gamma^{rl}$ sends the identity functor, regarded as a left exact endofunctor, to the Nakayama functor $N^{r}_{\mathcal A}$, and dually $\Gamma^{lr}$ sends the identity, regarded as right exact, to $N^{l}_{\mathcal A}$. By [F3] these are computed in the model as $N^{r}_{\mathcal A}\cong A^{*}\otimes_A-$ and $N^{l}_{\mathcal A}\cong\operatorname{Hom}_A(A^{*},-)$. [step 1.1, F2, F3]

3.1 Since $1_{\mathcal A}$ is exact by [F2], it is a common object of $\operatorname{Lex}(\mathcal A,\mathcal A)$ and $\operatorname{Rex}(\mathcal A,\mathcal A)$, and the natural candidate for the equivalence to agree with the identity-on-objects inclusion of the exact endofunctors is the family of isomorphisms $\Gamma^{rl}(F)\cong F$ for the endofunctors $F$ that are both left and right exact. If such a family existed, its member at $F=1_{\mathcal A}$ together with $\Gamma^{rl}(1_{\mathcal A})=N^{r}_{\mathcal A}$ would give a natural isomorphism $N^{r}_{\mathcal A}\cong1_{\mathcal A}$ by [F4], contradicting the hypothesis that $N^{r}_{\mathcal A}$ is not naturally isomorphic to the identity. Hence this restriction of $\Gamma^{rl}$ fails to be naturally isomorphic to the inclusion of exact endofunctors into $\operatorname{Rex}(\mathcal A,\mathcal A)$ whenever $N^{r}_{\mathcal A}$ is not naturally isomorphic to the identity, and in particular the equivalence between left exact and right exact endofunctors is not the identity-on-objects inclusion of the exact endofunctors in general; the companion examples page exhibits a category where the hypothesis holds. Only the finite model, the identity functor and the finitely many (co)end data defining the triangle enter, so no commutativity of $A$ and no choice are used. [step 2.1, F2, F4] ∎

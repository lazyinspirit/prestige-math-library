---
id: thm-neural-operator-compact-uniform-universality
kind: theorem
title: "Neural operators approximate continuous maps uniformly on compacta"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-neural-operator
  - def-neural-operator-activation-classes
  - lem-neural-operator-ba-class-is-empty-as-defined
  - thm-neural-operator-input-output-spaces-have-ap
  - thm-single-hidden-layer-universal-approximation
  - lem-neural-operator-compact-union-under-uniform-convergence
provenance:
  statement: literature-derived
  proof: incomplete
proof_strategy: direct
verification:
  precheck: blocked
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: "https://arxiv.org/pdf/2108.08481"
      locator: "Assumptions 9–10, Theorems 11–12, Lemma 22, Lemmas 27–34, Appendix F, PDF pp. 50–52 and 71–95"
---

## Statement

Let $D\subset\mathbb R^d$ and $D'\subset\mathbb R^{d'}$ be bounded Lipschitz domains. Assume that $A$ is one of $L^{p_1}(D)$ with $1\le p_1<\infty$, $W^{m_1,p_1}(D)$ with $m_1\in\mathbb N$ and $1\le p_1<\infty$, or $C(\bar D)$. Assume that $U$ is one of $L^{p_2}(D')$ with $1\le p_2<\infty$ and $m_2=0$, $W^{m_2,p_2}(D')$ with $m_2\in\mathbb N$ and $1\le p_2<\infty$, or $C^{m_2}(\bar D')$ with $m_2\in\mathbb N_0$. Let $G^\dagger:A\to U$ be continuous, let $K\subset A$ be compact, and let $0<\varepsilon\le1$. If $\sigma_1\in\mathcal A_0^L$, $\sigma_2\in\mathcal A_0$, and $\sigma_3\in\mathcal A_{m_2}$, then there are an integer $N$ and an $N$-layer operator $G$ in the specified neural-operator universality subclass such that
$$\sup_{a\in K}\|G^\dagger(a)-G(a)\|_U\le\varepsilon.$$
No width, parameter, data, or discretization rate is asserted. The separate additional source clause states that, if $U$ is Hilbert, $\sigma_1\in\mathrm{BA}$, and $\|G^\dagger(a)\|_U\le M$ for all $a\in A$, then the approximant can be selected with $\|G(a)\|_U\le4M$ for all $a\in A$; here $\mathrm{BA}$ is the diameter-bounded class in the activation-class definition. The theorem does not include $C^{m_1}(\bar D)$ inputs; that is the separate derivative-channel theorem. It makes no universality assertion for Fourier neural operators.

## Statement references
[Kovachki et al., Theorem 11 and Assumptions 9–10: compact-uniform universality](https://arxiv.org/pdf/2108.08481)

[Kovachki et al., Theorem 12: separate derivative-channel theorem for $C^{m_1}$ inputs](https://arxiv.org/pdf/2108.08481)

## Facts & Assumptions

**Given:** The domains, input and output spaces, compact set, continuous target, activation-class hypotheses, and neural-operator universality subclass in the Statement.

[F1] The listed spaces are claimed to have AP, which is needed to reduce the nonlinear compact-set approximation to finite-dimensional data ([[thm-neural-operator-input-output-spaces-have-ap]]).

[F2] The finite-dimensional middle map uses a multilayer perceptron approximation on a compact subset; the current batch-31 supplier proves only its stated C0, essential-supremum, and Lp regimes ([[thm-single-hidden-layer-universal-approximation]]).

[F3] The global output-bound clause uses the source's class $\mathrm{BA}$, whose printed diameter-based definition is empty ([[lem-neural-operator-ba-class-is-empty-as-defined]]).

[F4] If continuous maps $F_n$ converge uniformly on compact $K$ to continuous $F$, then $F[K]\cup\bigcup_nF_n[K]$ is compact, by the local open-cover proof ([[lem-neural-operator-compact-union-under-uniform-convergence]]).

## Proof

**Proof strategy:** compact finite-dimensional factorization followed by input-functional, middle-map, and output-kernel approximations.

1.1 The source reduces the compact-uniform approximation to finite-dimensional data using AP of both $A$ and $U$, which is the role of [F1]. The AP supplier's complete local proof remains unresolved, so this reduction is not yet available as a proved input. Later in the source route, [F4] supplies compactness of the union of images once the continuous approximants have been constructed and shown to converge uniformly; it does not supply those approximants or the finite-dimensional factorization. [given, F1, F4]

1.2 After finite-dimensionalization, the middle map must be approximated by a fixed-depth MLP using the appropriate $\mathcal A_m$ hypothesis; the existing batch-31 theorem [F2] proves only its stated C0, essential-supremum, and Lp regimes. It does not establish the $C^{m_2}$ output-kernel approximation. [given, F2]

2.1 For the additional global-output-bound clause, [F3] shows that the printed BA premise is empty, so this branch is vacuous as written and does not repair the unresolved core approximation proof. [F3]

## Unresolved proof obligation

The finite-dimensional factorization (source Lemma 22), smooth-kernel approximation of all input functionals (source Lemmas 27–33), and the output-layer construction (source Lemma 34) have not been re-proved locally. The finite-dimensional middle-network step must also match the source's fixed-depth $\mathcal A_m$ hypothesis; batch-31's C0 theorem cannot establish the $C^{m_2}$ output-density clause. The source's BA branch is vacuous as printed, since [F3] proves the class empty. The exact core theorem statement is retained, but the full proof is incomplete and the item is escalated.

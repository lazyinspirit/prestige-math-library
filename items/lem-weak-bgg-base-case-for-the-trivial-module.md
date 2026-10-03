---
id: lem-weak-bgg-base-case-for-the-trivial-module
kind: lemma
title: Weak BGG resolution of the trivial module
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-standard-induced-resolution-of-the-trivial-module, thm-standard-induced-resolution-is-exact, lem-induced-modules-from-finite-dimensional-b-modules-have-type-the-weights, lem-central-character-cuts-of-a-typed-module-are-typed, lem-weight-subsets-with-equal-root-sums-are-unique, cor-central-characters-are-dot-weyl-orbits, def-generalized-central-character-subcategory-of-o, thm-category-o-decomposes-by-generalized-central-character, lem-generalized-central-character-submodules-are-direct-summands, def-axiom-of-choice, lem-positive-root-pairings-of-a-dominant-integral-weight]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 5.2, pp. 33-34"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "J. van Ekeren, Topics in representation theory (IMPA 2024), Sec. 29, pp. 123-124"
      url: "https://w3.impa.br/~jethro/2024-0/georep.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $B_k$ be the standard induced complex of [[def-standard-induced-resolution-of-the-trivial-module]] and let $B_k^{\chi_0}$ denote its generalised central-character component at the central character $\chi_0$ of $M(0)$. Then $0\to B_{|\Phi^+|}^{\chi_0}\to\cdots\to B_1^{\chi_0}\to B_0^{\chi_0}\to\mathbb C\to0$ is a resolution of the trivial module by objects of $\mathcal O$, and $\operatorname{Typ}B_k^{\chi_0}=\{w\circ0:\ell(w)=k\}$, each weight occurring once.

## Facts & Assumptions

**Given:** The Axiom of Choice, the standard induced complex $(B_\bullet,d_\bullet)$ with augmentation $B_0\to\mathbb C$ of [[def-standard-induced-resolution-of-the-trivial-module]], and the central character $\chi_0$ of $M(0)$.

[F1] $(B_\bullet,d_\bullet)$ is a complex of objects of $\mathcal O$ with $B_k\cong U(\mathfrak n^-)\otimes\Lambda^k(\mathfrak n^-)$, and $0\to B_{|\Phi^+|}\to\cdots\to B_0\to\mathbb C\to0$ is exact ([[def-standard-induced-resolution-of-the-trivial-module]], [[thm-standard-induced-resolution-is-exact]]).

[F2] The induced module $U(\mathfrak g)\otimes_{U(\mathfrak b)}N$ for a finite-dimensional $\mathfrak h$-semisimple $\mathfrak b$-module $N$ is Verma-filtered with type $\operatorname{Wt}N$ ([[lem-induced-modules-from-finite-dimensional-b-modules-have-type-the-weights]]). Since $\mathfrak g/\mathfrak b\cong\mathfrak n^-$ has weights $\Phi^-=-\Phi^+$, the exterior power $\Lambda^k(\mathfrak g/\mathfrak b)$ has weight multiset $\operatorname{Wt}\Lambda^k(\mathfrak g/\mathfrak b)=\{-\sum_{\alpha\in S}\alpha:S\subseteq\Phi^+,\ |S|=k\}$, so $\operatorname{Typ}B_k=\{-\sum_{\alpha\in S}\alpha:|S|=k\}$.

[F3] The central-character projection $(-)_{\chi_0}$ is an exact functor on $\mathcal O$ and sends a Verma-filtered module $M$ to a Verma-filtered module with $\operatorname{Typ}M_{\chi_0}=\{\psi\in\operatorname{Typ}M:\chi_\psi=\chi_0\}$ ([[thm-category-o-decomposes-by-generalized-central-character]], [[lem-generalized-central-character-submodules-are-direct-summands]], [[lem-central-character-cuts-of-a-typed-module-are-typed]]).

[F4] $\chi_\psi=\chi_0$ if and only if $\psi=w\circ0$ for some $w\in W$; the weights $w\circ0$ are pairwise distinct and $w\circ0=-\sum_{\alpha\in\Pi_w}\alpha$ with $\Pi_w=\{\alpha\in\Phi^+:w^{-1}\alpha\in\Phi^-\}$, $\#\Pi_w=\ell(w)$; if $S\subseteq\Phi^+$ has $\sum_{\alpha\in S}\alpha=\sum_{\alpha\in\Pi_w}\alpha$ then $S=\Pi_w$ ([[cor-central-characters-are-dot-weyl-orbits]], [[lem-weight-subsets-with-equal-root-sums-are-unique]], [[lem-positive-root-pairings-of-a-dominant-integral-weight]]).

[F5] The trivial module $\mathbb C$ has central character $\chi_0$, so $\mathbb C_{\chi_0}=\mathbb C$ ([[def-generalized-central-character-subcategory-of-o]], [[lem-central-character-cuts-of-a-typed-module-are-typed]]).

## Proof

1.1 The projection functor is exact by [F3], so applying it to the exact complex of [F1] and to its augmentation gives an exact complex $0\to B_{|\Phi^+|}^{\chi_0}\to\cdots\to B_1^{\chi_0}\to B_0^{\chi_0}\to\mathbb C_{\chi_0}\to0$; by [F5] this is a resolution of $\mathbb C$ by the objects $B_k^{\chi_0}$ of $\mathcal O$. [F1, F3, F5]

1.2 By [F2] the type of $B_k$ is the multiset $\{-\sum_{\alpha\in S}\alpha:S\subseteq\Phi^+,\ |S|=k\}$. Cutting by $\chi_0$ and using [F3], the type of $B_k^{\chi_0}$ consists of those sums $-\sum_{\alpha\in S}\alpha$ with $\chi_{-\sum_S\alpha}=\chi_0$; by [F4] this is equivalent to $-\sum_{\alpha\in S}\alpha=w\circ0$ for some $w\in W$. [F2, F3, F4]

2.1 For every $w\in W$ of length $k$ the subset $\Pi_w$ has $k$ elements and $w\circ0=-\sum_{\alpha\in\Pi_w}\alpha$ by [F4], so $w\circ0$ occurs in $\operatorname{Typ}B_k^{\chi_0}$. Conversely, if $S\subseteq\Phi^+$ has $k$ elements and $-\sum_{\alpha\in S}\alpha=w\circ0=-\sum_{\alpha\in\Pi_w}\alpha$, then $\sum_S\alpha=\sum_{\Pi_w}\alpha$ and the uniqueness statement of [F4] gives $S=\Pi_w$, so the sum is the one attached to $w$; in particular $k=|S|=\#\Pi_w=\ell(w)$. Distinct $w$ give distinct weights $w\circ0$ and distinct subsets $\Pi_w$ by [F4], so the correspondence $w\leftrightarrow\Pi_w$ is a bijection between the elements of length $k$ and the surviving $k$-element subsets. Hence $\operatorname{Typ}B_k^{\chi_0}=\{w\circ0:\ell(w)=k\}$ with each weight occurring once. [F4, step 1.2]

3.1 Steps 1.1 and 2.1 together give the asserted resolution and its type. [step 1.1, step 2.1] ∎

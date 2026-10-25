---
id: lem-normalized-coefficient-approximation-for-irreducible-weak-containment
kind: lemma
title: Normalized coefficient approximation for irreducible weak containment
deps:
  - lem-irreducible-weak-containment-in-a-family-selects-one-coefficient
  - def-weak-containment-of-unitary-representations
  - def-continuous-function-of-positive-type
  - def-matrix-coefficient-of-a-unitary-representation
  - def-strongly-continuous-unitary-representation
  - def-hilbert-direct-sum-of-unitary-representations
  - def-axiom-of-choice
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the family-selection lemma; the singleton specialization itself is choice-free."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.1: Proposition F.1.4 and its complete proof"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.C: Propositions 1.C.6-1.C.8"
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group, let $\pi$ be an
irreducible strongly continuous unitary representation of $G$ and let $\rho$
be a strongly continuous unitary representation with $\pi\prec\rho$
([[def-weak-containment-of-unitary-representations]],
[[def-strongly-continuous-unitary-representation]]). Then $\rho$ is nonzero,
and for every normalized function of positive type $\phi$ associated to $\pi$
(that is, $\phi(g)=\langle\pi(g)\xi,\xi\rangle$ with $\|\xi\|=1$,
[[def-continuous-function-of-positive-type]],
[[def-matrix-coefficient-of-a-unitary-representation]]), every compact
$Q\subseteq G$ and every $\epsilon>0$ there is a unit vector $\eta\in H_\rho$
with
$$\sup_{g\in Q}\bigl|\phi(g)-\langle\rho(g)\eta,\eta\rangle\bigr|<\epsilon.$$
Thus a normalized coefficient of $\pi$ is a compact-uniform limit of single
normalized coefficients of $\rho$, not merely of finite sums of them.

## Facts & Assumptions

**Given:** AC; an LCH group $G$; an irreducible unitary representation $\pi$; a unitary representation $\rho$ with $\pi\prec\rho$; a normalized function of positive type $\phi$ associated to $\pi$.

[F1] Every diagonal coefficient has $\varphi(e)=\|\xi\|^2$ and $|\varphi(g)|\le\|\xi\|^2$, so a normalized one satisfies $\phi(e)=1$; weak containment $\pi\prec\rho$ requires every function of positive type associated to $\pi$ to be approximated uniformly on compacta by finite sums of functions of positive type associated to $\rho$ ([[def-weak-containment-of-unitary-representations]], [[def-continuous-function-of-positive-type]], [[def-matrix-coefficient-of-a-unitary-representation]]).

[F2] Family selection: if $(\rho_s)_{s\in S}$ is a set-indexed family of nonzero unitary representations and $\pi\prec\widehat\bigoplus_{s\in S}\rho_s$ for an irreducible $\pi$, then for every unit $\xi\in H_\pi$, compact $Q$ and $\epsilon>0$ there are $s\in S$ and a unit vector $\eta\in H_{\rho_s}$ with $\sup_Q|\langle\pi(g)\xi,\xi\rangle-\langle\rho_s(g)\eta,\eta\rangle|<\epsilon$ ([[lem-irreducible-weak-containment-in-a-family-selects-one-coefficient]], [[def-hilbert-direct-sum-of-unitary-representations]]).

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$, an irreducible unitary representation $\pi$, a unitary representation $\rho$ with $\pi\prec\rho$, and a normalized positive-type function $\phi$ associated to $\pi$.

1.1 $\rho$ is nonzero. If $H_\rho=\{0\}$, then the only function of positive type associated to $\rho$ is $0$, so no finite sum of such functions can be within $1/2$ of $\phi$ on the compact set $\{e\}$, where $\phi(e)=1$ by [F1]; this contradicts $\pi\prec\rho$. [F1]

2.1 The approximation holds. Apply [F2] to the singleton family $S=\{0\}$ with $\rho_0:=\rho$, whose direct sum is $\rho$ itself: since $\pi\prec\rho$ and $\rho$ is nonzero by step 1.1, for the unit vector $\xi$ with $\phi=\langle\pi(\cdot)\xi,\xi\rangle$, the compact set $Q$ and the given $\epsilon$, there are $s\in S$ and a unit vector $\eta\in H_{\rho_s}=H_\rho$ with $\sup_Q|\phi(g)-\langle\rho(g)\eta,\eta\rangle|<\epsilon$, which is the assertion. [F2, step 1.1]

3.1 The Axiom of Choice is inherited from the family-selection lemma; the singleton specialization, the positivity of $\phi$ and the normalization at $e$ use no further choice ([[def-axiom-of-choice]]). [given, F1] ∎ 
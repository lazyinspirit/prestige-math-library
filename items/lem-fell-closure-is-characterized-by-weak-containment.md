---
id: lem-fell-closure-is-characterized-by-weak-containment
kind: lemma
title: Fell closure is characterized by weak containment
deps:
  - def-fell-topology-on-the-unitary-dual
  - def-unitary-dual-of-a-locally-compact-group
  - def-primitive-ideal-space-of-a-group-c-star-algebra
  - def-weak-containment-of-unitary-representations
  - def-hilbert-direct-sum-of-unitary-representations
  - thm-the-kernel-map-is-a-homeomorphism-onto-the-primitive-ideal-space
  - thm-weak-containment-is-equivalent-to-kernel-inclusion
  - def-axiom-of-choice
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the kernel-map theorem and the weak-containment suppliers; the translation of the closure identity into coefficients adds no further choice."
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Propositions 8.B.3-8.B.4 and Remark 8.B.6"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: Theorem F.4.4 and the closure description of the Fell topology"
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group, let
$S\subseteq\widehat G$ and let $\pi\in\widehat G$
([[def-unitary-dual-of-a-locally-compact-group]]). Then $\pi$ lies in the Fell
closure of $S$ ([[def-fell-topology-on-the-unitary-dual]]) if and only if
$$\pi\prec\widehat\bigoplus_{\sigma\in S}\sigma$$
([[def-weak-containment-of-unitary-representations]],
[[def-hilbert-direct-sum-of-unitary-representations]]). Equivalently, the Fell
closure of $S$ is the set of all $\pi\in\widehat G$ whose $C^*$-kernel contains
the intersection of the kernels of the classes in $S$:
$$\overline S=\Bigl\{\pi\in\widehat G:\ \bigcap_{\sigma\in S}C^*\!\ker\sigma\subseteq C^*\!\ker\pi\Bigr\}$$
([[def-primitive-ideal-space-of-a-group-c-star-algebra]]).

## Facts & Assumptions

**Given:** AC; an LCH group $G$; a subset $S\subseteq\widehat G$; a class $\pi\in\widehat G$; the kernel map $\kappa$.

[F1] The proof of [[thm-the-kernel-map-is-a-homeomorphism-onto-the-primitive-ideal-space]] establishes, before using any homeomorphism statement, the closure identity $\overline S=\kappa^{-1}\bigl(\overline{\kappa(S)}^{\mathrm{Jac}}\bigr)$ for every $S\subseteq\widehat G$, the Jacobson closure being taken in the sense of [[def-primitive-ideal-space-of-a-group-c-star-algebra]]; explicitly $\overline S=\{\pi\in\widehat G:\bigcap_{\sigma\in S}C^*\!\ker\sigma\subseteq C^*\!\ker\pi\}$, with $\bigcap_{\varnothing}C^*\!\ker\sigma=C^*(G)$ so that $\overline\varnothing=\varnothing$.

[F2] For unitary representations of $G$, $\pi\prec\rho$ if and only if $\ker_{C^*(G)}\rho\subseteq\ker_{C^*(G)}\pi$; moreover the kernel of a Hilbert direct sum is the intersection of the kernels of its summands ([[thm-weak-containment-is-equivalent-to-kernel-inclusion]], [[def-hilbert-direct-sum-of-unitary-representations]]).

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$, a subset $S\subseteq\widehat G$ and a class $\pi\in\widehat G$.

1.1 By [F1] the Fell closure of $S$ is $\{\pi\in\widehat G:\bigcap_{\sigma\in S}C^*\!\ker\sigma\subseteq C^*\!\ker\pi\}$. [F1]

1.2 For $\pi\in\widehat G$, the weak containment $\pi\prec\widehat\bigoplus_{\sigma\in S}\sigma$ holds if and only if $\ker(\widehat\bigoplus_{\sigma\in S}\sigma)\subseteq C^*\!\ker\pi$, by [F2]; and $\ker(\widehat\bigoplus_{\sigma\in S}\sigma)=\bigcap_{\sigma\in S}C^*\!\ker\sigma$ by the direct-sum computation of [F2] (for $S=\varnothing$ the direct sum is the zero representation with kernel $C^*(G)$, and no $\pi\in\widehat G$ is contained in it, matching the empty intersection convention). [F2]

2.1 Comparing steps 1.1 and 1.2, $\pi\in\overline S$ is equivalent to $\pi\prec\widehat\bigoplus_{\sigma\in S}\sigma$, which is the first claim, and the displayed description of $\overline S$ is exactly step 1.1. [step 1.1, step 1.2]

3.1 The Axiom of Choice is inherited from the kernel-map theorem and the weak-containment suppliers; the comparison of the closure identity with the direct-sum kernel uses no further choice ([[def-axiom-of-choice]]). [given, F1] ∎ 
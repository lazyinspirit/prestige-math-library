---
id: cor-bgg-euler-character-identity
kind: corollary
title: The Euler-character identity for a finite-dimensional simple module
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-bgg-resolution-of-a-finite-dimensional-simple-module, def-grothendieck-group-and-character-of-category-o, prop-the-grothendieck-group-of-o-has-simple-and-standard-bases, prop-formal-character-of-a-verma-module, thm-central-character-summands-split-into-linkage-blocks, def-axiom-of-choice, def-bgg-bruhat-verma-sum-in-degree-k, prop-tensoring-with-a-finite-dimensional-module-preserves-category-o]
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
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 3.3, pp. 11-13"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "P. Etingof, Lie Groups and Lie Algebras II (18.755), Sec. 26.1 and Sec. 26.3 (Weyl character formula, Theorem 26.4), pp. 139-142"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda\in\Lambda^+$. In the Grothendieck group of the linkage block of $\lambda$ ([[def-grothendieck-group-and-character-of-category-o]], [[prop-the-grothendieck-group-of-o-has-simple-and-standard-bases]]) the finite alternating sum of Verma classes equals the class of the simple module:

$$[L(\lambda)]=\sum_{w\in W}(-1)^{\ell(w)}[M(w\circ\lambda)].$$

Equivalently, applying the character homomorphism and the Verma character $\operatorname{ch}M(\mu)=e^{\mu}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}$ ([[prop-formal-character-of-a-verma-module]]),

$$\operatorname{ch}L(\lambda)=\sum_{w\in W}(-1)^{\ell(w)}e^{w\circ\lambda}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1},$$

the Weyl numerator identity in the form needed by the Weyl character formula. Proof: an exact finite complex has vanishing alternating sum of classes.

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight $\lambda\in\Lambda^+$, the BGG resolution of $L(\lambda)$, and the Grothendieck group of the linkage block of $\lambda$ with its character homomorphism.

[F1] $0\to C_{|\Phi^+|}(\lambda)\to\cdots\to C_1(\lambda)\to C_0(\lambda)\to L(\lambda)\to0$ is an exact sequence in $\mathcal O$, and $C_i(\lambda)=\bigoplus_{\ell(w)=i}M(w\circ\lambda)$ ([[thm-bgg-resolution-of-a-finite-dimensional-simple-module]], [[def-bgg-bruhat-verma-sum-in-degree-k]]).

[F2] The Grothendieck group $K(\mathcal O)$ is the abelian group with generators the classes of objects and relations $[B]=[A]+[C]$ for every short exact sequence $0\to A\to B\to C\to0$; consequently an exact sequence $0\to A_n\to\cdots\to A_0\to B\to0$ gives $[B]=\sum_{i=0}^n(-1)^i[A_i]$, and $[A\oplus B]=[A]+[B]$. The classes of the simple modules $[L(\mu)]$ and of the Verma modules $[M(\mu)]$ each form a basis of $K(\mathcal O)$ ([[def-grothendieck-group-and-character-of-category-o]], [[prop-the-grothendieck-group-of-o-has-simple-and-standard-bases]]).

[F3] The formal character $\operatorname{ch}$ is additive on exact sequences and hence defines a homomorphism from $K(\mathcal O)$ to the group of formal characters; $\operatorname{ch}M(\mu)=e^{\mu}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}$ ([[prop-formal-character-of-a-verma-module]], [[def-grothendieck-group-and-character-of-category-o]]).

[F4] All $M(w\circ\lambda)$ and $L(\lambda)$ lie in the linkage block of $\lambda$; the block decomposition splits $\mathcal O$ into a direct sum of subcategories, and the corresponding projection of Grothendieck groups is additive on classes. Hence an identity between classes of objects of the block that holds in $K(\mathcal O)$ holds in the Grothendieck group of the block ([[thm-central-character-summands-split-into-linkage-blocks]], [[def-grothendieck-group-and-character-of-category-o]]).

## Proof

1.1 The resolution of [F1] is a finite exact sequence $0\to C_{|\Phi^+|}(\lambda)\to\cdots\to C_0(\lambda)\to L(\lambda)\to0$. By the additivity of [F2] applied successively to its short exact sequences, $[L(\lambda)]=\sum_{i=0}^{|\Phi^+|}(-1)^i[C_i(\lambda)]$; by the direct-sum rule and [F1], $[C_i(\lambda)]=\sum_{\ell(w)=i}[M(w\circ\lambda)]$. Substituting gives $[L(\lambda)]=\sum_{w\in W}(-1)^{\ell(w)}[M(w\circ\lambda)]$. All the modules involved lie in the linkage block of $\lambda$, so by [F4] this identity holds in the Grothendieck group of that block. [F1, F2, F4]

2.1 Applying the character homomorphism of [F3] to the identity of step 1.1 and using the Verma character gives $\operatorname{ch}L(\lambda)=\sum_{w\in W}(-1)^{\ell(w)}\operatorname{ch}M(w\circ\lambda)=\sum_{w\in W}(-1)^{\ell(w)}e^{w\circ\lambda}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}$, the common factor $\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}$ being independent of $w$. [F3, step 1.1]

3.1 Steps 1.1 and 2.1 are exactly the two asserted identities: the alternating sum of Verma classes in the Grothendieck group of the linkage block, and the Weyl numerator form of the character identity. [step 1.1, step 2.1] ∎

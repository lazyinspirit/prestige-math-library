---
id: thm-local-criterion-for-zero-modules-and-maps
kind: theorem
title: "Assuming the Axiom of Choice, local criteria for zero modules and for injective, surjective, and bijective maps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-localisation-commutes-with-kernels-images-and-cokernels, thm-proper-ideal-contained-in-maximal-ideal, cor-maximal-ideals-are-prime, def-annihilator-and-torsion-of-a-module, lem-zero-in-a-localised-module, def-module-homomorphism-kernel-image-and-cokernel]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition 13.43"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 5.15 and Proposition 5.16"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $M$ be a left $R$-module.

1. $M=0$ if and only if $M_{\mathfrak p}=0$ for every prime ideal $\mathfrak p$, and this is equivalent to $M_{\mathfrak m}=0$ for every maximal ideal $\mathfrak m$.
2. For an $R$-module homomorphism $f:M \to N$, the map $f$ is injective, surjective, or bijective if and only if every prime localisation $f_{\mathfrak p}$ has the same property, and this is equivalent to checking every maximal localisation.

## Facts & Assumptions

**Given:** A commutative ring $R$, left $R$-modules $M,N$, and an $R$-module homomorphism $f:M \to N$.

[L1] Localisation identifies kernels and cokernels: $S^{-1}(\ker f)\cong\ker(S^{-1}f)$ and $S^{-1}(\operatorname{coker}f)\cong\operatorname{coker}(S^{-1}f)$ ([[cor-localisation-commutes-with-kernels-images-and-cokernels]]).

[L2] Every proper ideal of a nonzero commutative ring is contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]).

[L3] Every maximal ideal of a commutative ring is prime ([[cor-maximal-ideals-are-prime]]).

[L4] The annihilator of $m \in M$ is $\operatorname{Ann}_R(m)=\{r \in R:rm=0\}$ ([[def-annihilator-and-torsion-of-a-module]]).

[L5] A localised fraction is zero exactly when one denominator kills its numerator ([[lem-zero-in-a-localised-module]]).

[L6] Kernels and cokernels are the standard constructions attached to a module homomorphism ([[def-module-homomorphism-kernel-image-and-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 If $M=0$, then every localisation of $M$ is $0$. [given]

1.2 Suppose $M_{\mathfrak m}=0$ for every maximal ideal $\mathfrak m$ and $m \in M$ is nonzero. Then $\operatorname{Ann}_R(m)$ is a proper ideal by [L4], so [L2] gives a maximal ideal $\mathfrak m$ containing it. If $m/1=0$ in $M_{\mathfrak m}$, [L5] gives $t \notin \mathfrak m$ with $tm=0$, so $t \in \operatorname{Ann}_R(m) \subseteq \mathfrak m$, a contradiction. Hence $M_{\mathfrak m} \neq 0$, contradicting the hypothesis. Therefore $M=0$ iff all maximal localisations vanish. [L2, L4, L5, choose]

2.1 If all prime localisations vanish then all maximal localisations vanish by [L3], so step 1.2 gives $M=0$. Conversely, suppose $M_{\mathfrak p} \neq 0$ for some prime ideal $\mathfrak p$ and choose $m/s \neq 0$ in $M_{\mathfrak p}$. Then no element outside $\mathfrak p$ annihilates $m$, or else [L5] would give $m/s=0$; hence $\operatorname{Ann}_R(m) \subseteq \mathfrak p$. By [L2] choose a maximal ideal $\mathfrak m$ containing $\operatorname{Ann}_R(m)$. The same zero-criterion argument as in step 1.2 gives $m/1 \neq 0$ in $M_{\mathfrak m}$, so maximal-local vanishing would fail. Thus prime-local vanishing and maximal-local vanishing are equivalent. [L2, L3, L4, L5, step 1.2, choose]

3.1 The map $f$ is injective iff $\ker f=0$. By [L1], this is equivalent to $\ker(f_{\mathfrak p})=0$ for every prime $\mathfrak p$, and then by step 2.1 to $\ker(f_{\mathfrak m})=0$ for every maximal $\mathfrak m$. So $f$ is injective iff all prime localisations, equivalently all maximal localisations, are injective. [L1, L6, step 2.1]

3.2 The map $f$ is surjective iff $\operatorname{coker}f=0$. By [L1], this is equivalent to $\operatorname{coker}(f_{\mathfrak p})=0$ for every prime $\mathfrak p$, and then by step 2.1 to $\operatorname{coker}(f_{\mathfrak m})=0$ for every maximal $\mathfrak m$. So $f$ is surjective iff all prime localisations, equivalently all maximal localisations, are surjective. [L1, L6, step 2.1]

4.1 A map is bijective exactly when it is both injective and surjective, so step 3.1 and step 3.2 give the bijective criterion. [step 3.1, step 3.2]

5.1 Steps 1.2, 2.1, 3.1, 3.2, and 4.1 prove both claims. [step 1.2, step 2.1, step 3.1, step 3.2, step 4.1] ∎

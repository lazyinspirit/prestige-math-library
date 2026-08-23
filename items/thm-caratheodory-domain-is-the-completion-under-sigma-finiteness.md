---
id: thm-caratheodory-domain-is-the-completion-under-sigma-finiteness
kind: theorem
title: "Assuming countable choice, the Carathéodory domain is the completion of the sigma-finite extension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-sigma-finite-caratheodory-sets-have-generated-measurable-hulls, thm-premeasure-induced-outer-measure-is-regular, thm-caratheodory-extension-theorem, thm-caratheodory-outer-measure-theorem, def-completion-of-a-measure-space, thm-completion-of-a-measure-space, def-countable-choice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Exercise 22(a) in Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice and let $\mu_0$ be a sigma-finite premeasure. The Carathéodory sigma-algebra of its induced outer measure is exactly the completion of $\sigma(\mathcal A_0)$ under the extended measure, and the Carathéodory restriction equals the completed measure there.

## Facts & Assumptions

**Given:** Countable choice, a sigma-finite premeasure, its induced outer measure $\mu^*$, its generated extension $\mu$, and the completion of that extension.

[L1] If the premeasure is sigma-finite and $E$ is Carathéodory measurable, there is $H\in\sigma(\mathcal A_0)$ with $E\subseteq H$ and $\mu^*(H\setminus E)=0$. ([[lem-sigma-finite-caratheodory-sets-have-generated-measurable-hulls]])

[L2] Assuming countable choice, an outer measure induced by a premeasure is regular, and every set has a measurable hull in $\sigma(\mathcal A_0)$. ([[thm-premeasure-induced-outer-measure-is-regular]])

[L3] The Carathéodory measurable subsets form a sigma-algebra, and the restriction of the outer measure to it is a complete measure. ([[thm-caratheodory-outer-measure-theorem]])

[L4] Assume the Axiom of Countable Choice. Let $(X,\mathcal A,\mu)$ be a measure space, and let $(X,\overline{\mathcal A},\overline\mu)$ be its completion construction. Then $\overline\mu$ is a complete measure on $\overline{\mathcal A}$ extending $\mu$. It is the unique complete measure on $\overline{\mathcal A}$ that extends $\mu$. ([[thm-completion-of-a-measure-space]])

[L5] Assuming countable choice, the induced outer measure of a premeasure satisfies $\mathcal A_0\subseteq\mathcal M_{\mu^*}$ and $\mu^*|_{\mathcal A_0}=\mu_0$, so its restriction to $\sigma(\mathcal A_0)$ is a measure extending $\mu_0$. ([[thm-caratheodory-extension-theorem]])

## Proof

**Proof technique:** direct.

1.1 By [L3] the Carathéodory restriction is a complete measure, and by [L5] its sigma-algebra contains $\sigma(\mathcal A_0)$ with the restriction there equal to $\mu$; so it is a complete measure extending $\mu$. Therefore its sigma-algebra contains every set $A\cup N$ with $A,Z\in\sigma(\mathcal A_0)$, $N\subseteq Z$, and $\mu(Z)=0$, so it contains the completion domain of [L4]. [L3, L4, L5]

1.2 Conversely, let $E$ be Carathéodory measurable. By [L1] choose $H\in\sigma(\mathcal A_0)$ with $E\subseteq H$ and $\mu^*(H\setminus E)=0$; by [L2] choose a generated measurable hull $Z\in\sigma(\mathcal A_0)$ of $H\setminus E$, so $H\setminus E\subseteq Z$ and $\mu^*(Z)=0$. [L1, L2, choose]

2.1 Since $E=(H\setminus Z)\cup(E\cap Z)$, with $H\setminus Z,Z\in\sigma(\mathcal A_0)$ and $E\cap Z\subseteq Z$ null, $E$ belongs to the completion domain. Thus the domains coincide, and [L4] identifies the two complete extensions of $\mu$ on that domain. [step 1.1, step 1.2, L4, algebra] ∎

---
id: prop-caratheodory-extension-compares-with-other-extensions
kind: proposition
title: "Assuming countable choice, the Carathéodory extension dominates every other extension and agrees with it on finite-measure sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-caratheodory-extension-theorem, def-measure, thm-continuity-from-below-for-measures, prop-measure-of-a-set-difference, thm-finite-and-countable-subadditivity-of-measures, def-countable-choice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Theorem 1.14"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $\mu=\mu^*|_{\sigma(\mathcal A_0)}$ be the Carathéodory extension of a premeasure $\mu_0$, and let $\nu$ be any measure on $\sigma(\mathcal A_0)$ extending $\mu_0$. Then $\nu(E)\le\mu(E)$ for every $E\in\sigma(\mathcal A_0)$, with equality whenever $\mu(E)<+\infty$.

## Facts & Assumptions

**Given:** Countable choice, the premeasure, its induced extension $\mu$, a competing extension $\nu$, and a generated measurable set $E$.

[L0] Assuming countable choice, the restriction of the induced outer measure to $\sigma(\mathcal A_0)$ is a measure extending $\mu_0$. ([[thm-caratheodory-extension-theorem]])

[L1] If $(E_n)$ is an increasing sequence of measurable sets for a measure $\mu$, then $\mu(\bigcup_nE_n)=\sup_n\mu(E_n)$, with no finiteness hypothesis. ([[thm-continuity-from-below-for-measures]])

[L2] If $A\subseteq B$ are measurable and $\mu(A)<+\infty$, then $\mu(B)=\mu(A)+\mu(B\setminus A)$; if also $\mu(B)<+\infty$, finite subtraction gives $\mu(B\setminus A)=\mu(B)-\mu(A)$. ([[prop-measure-of-a-set-difference]])

[L3] For every measure $\lambda$ and every sequence $(E_k)$ of measurable sets, $\lambda(\bigcup_kE_k)\le\sum_k\lambda(E_k)$. ([[thm-finite-and-countable-subadditivity-of-measures]])
## Proof

**Proof technique:** direct.

1.1 If $(A_k)$ is any algebra cover of $E$, monotonicity and [L3] give $\nu(E)\le\nu(\bigcup_kA_k)\le\sum_k\nu(A_k)=\sum_k\mu_0(A_k)$. Taking the infimum and using the given identity $\mu=\mu^*|_{\sigma(\mathcal A_0)}$ gives $\nu(E)\le\mu^*(E)=\mu(E)$. [L3, given, algebra]

2.1 Countable choice makes $\mu$ a measure on $\sigma(\mathcal A_0)$ extending $\mu_0$ by [L0]. Suppose $\mu(E)<+\infty$ and choose an algebra cover $(A_k)$ of $E$ with finite total cost. For $H=\bigcup_kA_k$ and $H_n=\bigcup_{k<n}A_k$, both extensions agree on every $H_n\in\mathcal A_0$, so [L1] gives $\mu(H)=\nu(H)$; the finite covering cost makes this common value finite. [step 1.1, L0, L1, choose]

3.1 Apply [L2] to $E\subseteq H$ for each measure. Step 1.1 applied to $H\setminus E$ gives $\nu(H\setminus E)\le\mu(H\setminus E)$, so finite subtraction from the common value in step 2.1 gives $\mu(E)\le\nu(E)$; combined with step 1.1, this proves equality. [step 1.1, step 2.1, L2, algebra] ∎

---
id: thm-completion-of-a-measure-space
kind: theorem
title: "Assuming countable choice, every measure space has a unique complete extension to its completion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-completion-of-a-measure-space, lem-completion-domain-is-a-sigma-algebra, lem-completed-measure-is-well-defined, prop-null-sets-form-a-sigma-ideal-in-a-complete-space, def-measure, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Theorem 1.9"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.26"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $(X,\mathcal A,\mu)$ be a measure space, and let $(X,\overline{\mathcal A},\overline\mu)$ be its completion construction. Then $\overline\mu$ is a complete measure on $\overline{\mathcal A}$ extending $\mu$. It is the unique complete measure on $\overline{\mathcal A}$ that extends $\mu$.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$ and the Axiom of Countable Choice.

[L1] The completion domain is a sigma-algebra containing $\mathcal A$ ([[lem-completion-domain-is-a-sigma-algebra]]).

[L2] The value $\overline\mu(E)=\mu(A)$ is independent of the measurable core in a completed representation ([[lem-completed-measure-is-well-defined]]).

[L3] Countable unions of measurable null sets are null, and completeness makes all their subsets measurable and null ([[prop-null-sets-form-a-sigma-ideal-in-a-complete-space]]).

[L4] A measure vanishes at the empty set and is countably additive on disjoint measurable sequences ([[def-measure]]).

[L5] Countable choice selects witnesses from each nonempty natural-number-indexed family ([[def-countable-choice]]).

[L6] Every member of the completion domain has a representation $E=A\cup N$ with $A$ measurable and $N$ contained in a measurable null set, and the proposed completed value is $\mu(A)$ ([[def-completion-of-a-measure-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $\overline\mu$ is a function on the sigma-algebra $\overline{\mathcal A}$, and $\overline\mu(A)=\mu(A)$ for $A\in\mathcal A$ by the representation $A=A\cup\varnothing$; in particular $\overline\mu(\varnothing)=0$. [given, L1, L2, L4]

1.2 Let $(E_k)$ be disjoint in $\overline{\mathcal A}$. By [L6] each family of completed representations is nonempty, so [L5] chooses $E_k=A_k\cup N_k$ with measurable $A_k\subseteq E_k$ and $N_k$ contained in a measurable null set $Z_k$. Then the $A_k$ are disjoint, $\bigcup_kE_k=(\bigcup_kA_k)\cup N$ with $N\subseteq\bigcup_kZ_k$, and $\bigcup_kZ_k$ is null by [L3]. [given, L3, L5, L6, choose]

1.3 If $E\in\overline{\mathcal A}$ and $\overline\mu(E)=0$, choose a representation $E=A\cup N$ from [L6] with $N\subseteq Z$ null. Then $A\cup Z$ is measurable and null, and every $S\subseteq E$ is represented by the empty measurable core plus the sub-null set $S\subseteq A\cup Z$. [given, L2, L3, L6]

1.4 Let $\lambda$ be any complete measure on $\overline{\mathcal A}$ extending $\mu$. For a representation $E=A\cup N$ from [L6], with $N\subseteq Z$ and $\mu(Z)=0$, one has $\lambda(Z)=0$ and completeness gives $\lambda(N)=0$. Replacing $N$ by $N\setminus A$ makes the union disjoint without changing $E$, so finite additivity gives $\lambda(E)=\lambda(A)=\mu(A)=\overline\mu(E)$. [given, L2, L3, L4, L6]

2.1 Countable additivity of $\mu$ applied to the measurable cores in step 1.2 gives $\overline\mu(\bigcup_kE_k)=\mu(\bigcup_kA_k)=\sum_k\mu(A_k)=\sum_k\overline\mu(E_k)$; with step 1.1, this proves that $\overline\mu$ is a measure. [step 1.1, step 1.2, L2, L4]

2.2 Step 1.3 shows that every subset of every $\overline\mu$-null set belongs to $\overline{\mathcal A}$ and has value $0$, so the completed measure space is complete. [step 1.3, L2, L3]

3.1 Steps 2.1, 2.2 and 1.4 prove respectively that $\overline\mu$ is an extending measure, is complete, and is the unique complete extension on $\overline{\mathcal A}$. [step 2.1, step 2.2, step 1.4] ∎

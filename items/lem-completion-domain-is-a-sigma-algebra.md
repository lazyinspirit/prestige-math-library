---
id: lem-completion-domain-is-a-sigma-algebra
kind: lemma
title: "Assuming countable choice, the completion domain is a sigma-algebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-completion-of-a-measure-space, def-sigma-algebra, def-countable-choice, prop-null-sets-form-a-sigma-ideal-in-a-complete-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Theorem 1.9"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. For every measure space $(X,\mathcal A,\mu)$, the completion domain $\overline{\mathcal A}$ of [[def-completion-of-a-measure-space]] is a sigma-algebra on $X$ containing $\mathcal A$.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$ and the Axiom of Countable Choice.

[L1] The completion domain consists of the sets $A\cup N$ with $A,Z\in\mathcal A$, $N\subseteq Z$, and $\mu(Z)=0$ ([[def-completion-of-a-measure-space]]).

[L2] A sigma-algebra contains the empty set, is closed under relative complements, and is closed under countable unions ([[def-sigma-algebra]]).

[L3] A countable union of measurable null sets is measurable and null ([[prop-null-sets-form-a-sigma-ideal-in-a-complete-space]]).

[L4] Countable choice selects one member from every nonempty natural-number-indexed family ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Every $A\in\mathcal A$ belongs to $\overline{\mathcal A}$ by taking $N=Z=\varnothing$; in particular $\varnothing,X\in\overline{\mathcal A}$. [given, L1, L2]

1.2 If $E=A\cup N$ with $N\subseteq Z$, $\mu(Z)=0$, replace $N$ by $N\setminus A$ without changing $E$. Then $A$ and $N$ are disjoint, and $E^c=(A^c\setminus Z)\cup((A^c\cap Z)\setminus N)$, whose first part is measurable and whose second lies in the measurable null set $Z$; hence $E^c\in\overline{\mathcal A}$. [given, L1, L2]

1.3 Let $(E_k)$ be a sequence in $\overline{\mathcal A}$. For each $k$, the family of triples $(A,N,Z)$ witnessing [L1] is nonempty, so [L4] selects $E_k=A_k\cup N_k$ with $N_k\subseteq Z_k$ and $\mu(Z_k)=0$. [given, L1, L4, choose]

2.1 Put $A=\bigcup_kA_k$ and $Z=\bigcup_kZ_k$. Then $A,Z\in\mathcal A$, $\mu(Z)=0$ by [L3], and $(\bigcup_kE_k)\setminus A\subseteq Z$, so $\bigcup_kE_k\in\overline{\mathcal A}$. [step 1.3, L2, L3]

3.1 Step 1.1 gives the empty set and containment of $\mathcal A$, step 1.2 gives complements, and step 2.1 gives countable unions; therefore $\overline{\mathcal A}$ is a sigma-algebra. [step 1.1, step 1.2, step 2.1, L2] ∎

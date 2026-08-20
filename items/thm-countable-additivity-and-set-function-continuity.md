---
id: thm-countable-additivity-and-set-function-continuity
kind: theorem
title: "Countable additivity and continuity of finitely additive set functions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finitely-additive-set-function, def-measure, def-nonnegative-extended-series]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3, Exercise 11"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Let $\phi:\mathcal A\to[0,+\infty]$ be a finitely additive nonnegative set function on a sigma-algebra. The following are equivalent:

1. $\phi$ is countably additive, and hence is a measure;
2. whenever $E_n\uparrow E$, one has $\phi(E)=\sup_n\phi(E_n)$.

If in addition $\phi(X)<+\infty$, these conditions are also equivalent to:

3. whenever $E_n\downarrow\varnothing$, one has $\inf_n\phi(E_n)=0$.

## Facts & Assumptions

**Given:** A finitely additive nonnegative set function $\phi$ on a sigma-algebra $\mathcal A$ over $X$.

[L1] Finite additivity means $\phi(\varnothing)=0$ and $\phi(A\cup B)=\phi(A)+\phi(B)$ for disjoint measurable $A,B$ ([[def-finitely-additive-set-function]]).

[L2] Countable additivity together with the empty-set condition is exactly the definition of a measure ([[def-measure]]).

[L3] A nonnegative extended series is the supremum of its finite partial sums ([[def-nonnegative-extended-series]]).

## Proof

**Proof technique:** direct.

1.1 For the implication from countable additivity to continuity from below, let $E_n\uparrow E$ and define $D_0=E_0$, $D_{n+1}=E_{n+1}\setminus E_n$; the $D_n$ are disjoint, their union is $E$, and their first $n+1$ terms have union $E_n$. [given]

1.2 For the implication from continuity from below to countable additivity, let $(A_n)$ be disjoint and put $B_n=\bigcup_{k<n}A_k$; then $B_n\uparrow\bigcup_kA_k$ and finite additivity gives $\phi(B_n)=\sum_{k<n}\phi(A_k)$. [given, L1]

1.3 For the finite-total-mass implications, assume $\phi(X)<+\infty$; then every value of $\phi$ is finite by finite additivity and nonnegativity. [given, L1]

2.1 Under countable additivity, [L2] and the decomposition in step 1.1 give $\phi(E)=\sum_n\phi(D_n)=\sup_n\phi(E_n)$, proving condition 1 implies condition 2. [step 1.1, L2, L3]

2.2 Under condition 2, step 1.2 and [L3] give $\phi(\bigcup_nA_n)=\sup_n\phi(B_n)=\sum_n\phi(A_n)$, proving condition 2 implies condition 1. [step 1.2, L3]

2.3 For condition 2 implies condition 3 under finite total mass, if $E_n\downarrow\varnothing$ then $X\setminus E_n\uparrow X$; finite additivity and condition 2 give $\phi(X)-\inf_n\phi(E_n)=\sup_n\phi(X\setminus E_n)=\phi(X)$, hence the infimum is $0$. [step 1.3, L1, algebra]

2.4 For condition 3 implies condition 2 under finite total mass, if $E_n\uparrow E$ then $E\setminus E_n\downarrow\varnothing$; finite additivity and condition 3 give $\phi(E)-\sup_n\phi(E_n)=\inf_n\phi(E\setminus E_n)=0$. [step 1.3, L1, algebra]

3.1 Steps 2.1 and 2.2 prove the first equivalence, while steps 2.3 and 2.4 separately prove both directions involving condition 3 under the stated finite-total-mass hypothesis. [step 2.1, step 2.2, step 2.3, step 2.4] ∎


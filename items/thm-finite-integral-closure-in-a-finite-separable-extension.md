---
id: thm-finite-integral-closure-in-a-finite-separable-extension
kind: theorem
title: "Finite separable integral closures over normal Noetherian domains are module-finite"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-of-fractions, def-integral-closure-and-integrally-closed-domain, lem-trace-pairing-for-a-finite-separable-extension]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "The Stacks Project, Lemma 15.22.11"
      url: "https://stacks.math.columbia.edu/tag/0AUW"
pipeline_run: null
---
## Statement

Let $R$ be a Noetherian integrally closed domain with fraction field $F=\operatorname{Frac}(R)$, let $L/F$ be a finite separable field extension, and let $A$ be the integral closure of $R$ in $L$. Then $A$ is a finite $R$-module.

## Facts & Assumptions

**Given:** A Noetherian integrally closed domain $R$ with fraction field $F$, a finite separable extension $L/F$, and the integral closure $A$ of $R$ in $L$.

[F1] The fraction field is obtained by inverting the nonzero elements of the domain $R$ ([[def-field-of-fractions]]).

[F2] Being integrally closed means that every element of $F$ integral over $R$ already lies in $R$ ([[def-integral-closure-and-integrally-closed-domain]]).

[L1] The trace pairing $(x,y)\mapsto\operatorname{Tr}_{L/F}(xy)$ is nondegenerate for a finite separable extension ([[lem-trace-pairing-for-a-finite-separable-extension]]).

## Proof

**Proof technique:** direct.

1.1 Choose an $F$-basis $e_1,\ldots,e_n$ of $L$. For each $i$, choose a monic polynomial for $e_i$ over $F$ and one nonzero denominator $d_i\in R$ clearing all of its coefficients. Then $(d_ie_i)^m+d_ic_{m-1}(d_ie_i)^{m-1}+\cdots+d_i^mc_0=0$ for suitable $c_j\in F$, so $d_ie_i$ is integral over $R$ and therefore lies in $A$. Replacing each $e_i$ by $d_ie_i$ preserves the $F$-basis, so we may assume from the start that $e_1,\ldots,e_n\in A$. By [L1], there is a trace-dual basis $e_1^*,\ldots,e_n^*$ with $\operatorname{Tr}_{L/F}(e_ie_j^*)=\delta_{ij}$. Clearing denominators in the coordinates of the $e_j^*$ relative to the basis $e_i$, choose $0\neq c\in R$ such that $ce_j^*\in\sum_i Re_i\subseteq A$ for every $j$. [F1, L1, given, choose]

2.1 Let $x\in A$, and write $x=\sum_i a_ie_i$ with $a_i\in F$. The dual-basis relation gives $a_j=\operatorname{Tr}_{L/F}(xe_j^*)$ and therefore $ca_j=\operatorname{Tr}_{L/F}(x\,ce_j^*)$. Because $x$ and $ce_j^*$ lie in $A$, their product is integral over $R$. The field trace of an integral element is a finite sum of its conjugates, hence is integral over $R$, and it lies in $F$; therefore [F2] forces $ca_j\in R$. Hence every coefficient $a_j$ lies in $c^{-1}R$. [F2, step 1.1, algebra]

3.1 Step 2.1 shows that $A\subseteq c^{-1}(Re_1+\cdots+Re_n)$. Multiplication by $c$ identifies this containing module with the finitely generated module $Re_1+\cdots+Re_n$, so it is finite over $R$. Since $A$ is an $R$-submodule of a finite module and $R$ is Noetherian, $A$ is finite over $R$. [step 1.1, step 2.1, given] ∎

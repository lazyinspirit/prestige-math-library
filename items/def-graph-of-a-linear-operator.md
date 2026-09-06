---
id: def-graph-of-a-linear-operator
kind: definition
title: "The graph of a linear operator with a linear domain"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-subspace, def-product-norms-on-finitely-many-normed-spaces]
sources: {references: [{title: "Buhler--Salamon, Functional Analysis, Section 2.2.2", url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"}]}
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Definition
For normed spaces $X,Y$, a linear subspace $D\subseteq X$ ([[def-linear-subspace]]) and a linear map $A:D\to Y$, its **graph** is $G(A)=\{(x,Ax):x\in D\}\subseteq X\times Y$. Equip $X\times Y$ with the maximum product norm $\|(x,y)\|_{\max}=\max\{\|x\|,\|y\|\}$ from [[def-product-norms-on-finitely-many-normed-spaces]]. The operator is **closed** when $G(A)$ is closed in this norm.

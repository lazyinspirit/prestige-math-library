---
id: "def-extension-of-an-irreducible-normal-subgroup-representation"
kind: "definition"
title: "An extension of a normal subgroup representation"
status: "draft"
origin: "pipeline"
deps: ["def-finite-dimensional-representation-of-a-group-over-a-field", "def-sign-representation-and-restriction-of-a-representation", "prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Theorem 1.3 p.2; tom Dieck Remark 4.2.5 p.57"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
---

## Definition

Let $G$ be finite, $N\trianglelefteq G$, $N\le H\le G$, and $\rho:N\to\operatorname{GL}(S)$ an irreducible complex representation. An **extension** of $S$ to $H$ is a representation $\widetilde\rho:H\to\operatorname{GL}(S)$ on the same space with $\widetilde\rho|_N=\rho$ ([[def-finite-dimensional-representation-of-a-group-over-a-field]], [[def-sign-representation-and-restriction-of-a-representation]]). At character level an extension of $\theta=\chi_S$ is a character $\widetilde\theta$ with $\operatorname{Res}_N^H\widetilde\theta=\theta$.

Every extension is irreducible: any $H$-stable subspace is $N$-stable, so is zero or all of $S$. Its existence implies invariance under $H$, since $\widetilde\rho(h)$ intertwines the conjugate action with the original one. Extension existence is an additional hypothesis in the correspondence below.

For a representation $M$ of $H/N$, its **inflation** to $H$ is the composite with $H\to H/N$. Conversely an $H$-representation on which $N$ acts trivially descends uniquely to $H/N$, and irreducibility is preserved in both directions, by [[prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient]]. Inflation and extension are different constructions: an extension retains the given, possibly nontrivial, $N$-action.

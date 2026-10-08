---
id: def-tempered-unitary-representation
kind: definition
title: Tempered unitary representations
status: draft
origin: pipeline
deps:
  - def-weak-containment-of-unitary-representations
  - def-left-and-right-regular-unitary-representations
  - def-strongly-continuous-unitary-representation
  - thm-regular-representations-are-unitary-and-strongly-continuous
  - def-fell-topology-on-the-unitary-dual
  - def-unitary-dual-of-a-locally-compact-group
  - def-axiom-of-choice
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_audit: "AC is inherited through the Haar-based regular representation and the set/Fell constructions of the unitary dual; weak containment itself adds no choice."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary representations of groups, duals, and characters"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.C, Definition 1.C.1: compact-uniform approximation of positive-type functions"
    - title: "A spectral gap absorption principle, Mathematische Annalen"
      url: "https://doi.org/10.1007/s00208-026-03471-z"
      locator: "§2.1, Definitions 2.1–2.3 and 2.5: weak containment, Fell topology, support, and the tempered dual"
---
## Definition

Assume the Axiom of Choice. Let $G$ be a locally compact, $\sigma$-compact group with a fixed left Haar measure, and let $\lambda_G$ be its left regular representation on $L^2(G)$ ([[def-left-and-right-regular-unitary-representations]], [[thm-regular-representations-are-unitary-and-strongly-continuous]]). A strongly continuous unitary representation $\pi$ of $G$ is **tempered** if it is weakly contained in $\lambda_G$ ([[def-strongly-continuous-unitary-representation]], [[def-weak-containment-of-unitary-representations]]); explicitly, each continuous positive-type coefficient $g\mapsto\langle\pi(g)\xi,\xi\rangle$ is approximable uniformly on compact subsets of $G$ by finite sums of positive-type coefficients of $\lambda_G$.

The **reduced (tempered) dual** is
$$\widehat G_{\mathrm{red}}:=\{[\sigma]\in\widehat G:\sigma\prec\lambda_G\},$$
the Fell support of the regular representation ([[def-fell-topology-on-the-unitary-dual]], [[def-unitary-dual-of-a-locally-compact-group]]). Thus an irreducible unitary representation is tempered exactly when its equivalence class is a point of $\widehat G_{\mathrm{red}}$. A reducible representation may be tempered by the same weak-containment condition, but it is not itself a point of the irreducible unitary dual.

**Choice.** AC is inherited through the Haar-based regular representation and the set and Fell constructions of the unitary dual; the weak-containment criterion itself uses no additional choice ([[def-axiom-of-choice]]).

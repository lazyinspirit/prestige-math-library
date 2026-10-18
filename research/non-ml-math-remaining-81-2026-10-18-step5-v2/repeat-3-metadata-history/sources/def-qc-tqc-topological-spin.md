---
id: def-qc-tqc-topological-spin
kind: definition
title: Topological spin
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-qc-tqc-ribbon-modular-data, def-fusion-and-multifusion-category, def-absolutely-simple-object]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, author final text"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.10, Definition 8.10.1, printed p. 217: twist components in a ribbon category."
    - title: "Chetan Nayak et al., Non-Abelian Anyons and Topological Quantum Computation"
      url: "https://arxiv.org/pdf/0707.1889"
      locator: "§II.A, PDF pp. 5–6: topological spin of a simple charge."
---

## Definition

For a simple charge $a$ in a unitary ribbon fusion category, the twist
component is an endomorphism $\theta_a\in\operatorname{End}(a)$. Since
$\operatorname{End}(a)=\mathbb C\operatorname{id}_a$, there is a unique scalar
$\vartheta_a\in\mathbb C$ such that

$$\theta_a=\vartheta_a\operatorname{id}_a.$$

The scalar $\vartheta_a$ is the **topological spin** of $a$. Unitarity of the
twist gives
$|\vartheta_a|^2\operatorname{id}_a=\theta_a^\dagger\theta_a=\operatorname{id}_a$;
since $\operatorname{id}_a\ne0$, $|\vartheta_a|=1$.


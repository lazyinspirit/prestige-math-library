---
id: def-regular-root-hyperplanes
kind: definition
title: Regular root hyperplanes
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-root-and-root-space-relative-to-a-cartan-subalgebra, thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §3 (regular elements of a Cartan subalgebra)"
landmark: false
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\mathfrak h$ be a Cartan subalgebra of a finite-dimensional complex
semisimple Lie algebra $\mathfrak g$ with finite root set $\Phi$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]],
[[thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system]]).
For each root $\alpha$ the **root hyperplane** is
$\ker\alpha=\{H\in\mathfrak h:\alpha(H)=0\}$, a proper subspace of
$\mathfrak h$ because $\alpha\ne0$. The **regular set** of $\mathfrak h$ is
the complement

$$\mathfrak h_{\mathrm{reg}}=\{H\in\mathfrak h:\alpha(H)\ne0\text{ for every }\alpha\in\Phi\}=\mathfrak h\setminus\bigcup_{\alpha\in\Phi}\ker\alpha .$$

It is the complement in $\mathfrak h$ of a finite union of hyperplanes.
Elements of $\mathfrak h_{\mathrm{reg}}$ are called **regular elements of
$\mathfrak h$**.

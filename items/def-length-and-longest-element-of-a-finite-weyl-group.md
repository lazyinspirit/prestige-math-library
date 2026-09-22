---
id: def-length-and-longest-element-of-a-finite-weyl-group
kind: definition
title: Length and longest Weyl-group element
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-weyl-group-of-a-root-system, def-positive-system-and-base-of-simple-roots]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §6, the length function, printed pp. 168-169"
landmark: false
---

## Definition

Let $\Phi\subseteq E$ be a reduced crystallographic root system with positive
system $\Phi^{+}$ and simple roots $\Delta$
([[def-positive-system-and-base-of-simple-roots]]), and let $W=W(\Phi)$ be its
Weyl group ([[def-weyl-group-of-a-root-system]]). For $w\in W$ define the
**inversion set**
$$N(w)=\{\alpha\in\Phi^{+}:w(\alpha)\in\Phi^{-}\}$$
and the **length** $\ell(w)=|N(w)|$, the number of positive roots sent by $w$
to negative roots.

A **longest element** of $W$ is an element $w_0\in W$ with
$\ell(w_0)\ge\ell(w)$ for all $w\in W$. The next proposition identifies
$\ell(w)$ with the minimum length of an expression of $w$ as a product of
simple reflections $s_{\alpha_i}$, and proves that a longest element exists,
is unique, and is characterized by $w_0(\Phi^{+})=\Phi^{-}$; its length is
$|\Phi^{+}|$. The length depends on the chosen positive system, hence on the
chamber; replacing $\Phi^{+}$ by $-\Phi^{+}$ replaces the length function by
$\ell\circ(\cdot)^{-1}$ with respect to the new positive system.

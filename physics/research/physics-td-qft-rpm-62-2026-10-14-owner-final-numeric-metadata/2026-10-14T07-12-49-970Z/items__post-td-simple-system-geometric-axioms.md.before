---
id: post-td-simple-system-geometric-axioms
kind: postulate
title: Simple-system geometric axioms
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Adopted convexity, irreversibility, support regularity and boundary-connectivity conditions on the forward sectors of simple thermodynamic state domains and admitted joins.
deps: [def-td-adiabatic-accessibility, def-td-scaled-products-and-comparison, post-td-accessibility-a1-a6]
dependency_roles:
  def-td-adiabatic-accessibility: formulation-prerequisite
  def-td-scaled-products-and-comparison: formulation-prerequisite
  post-td-accessibility-a1-a6: operational-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§III.A–III.B
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: "André Thess, The Lieb–Yngvason Machine: A didactical tool for the definition of entropy in classical thermodynamics, §2"
      url: https://www.dlr.de/de/tt/downloads/dokumente/institut/institutsleitung/Entropie.pdf/@@download/file
    - title: Goddard, The second law of thermodynamics as variation on a theme of Carathéodory, §3
      url: https://escholarship.org/content/qt27k6m59q/qt27k6m59q.pdf
verification:
  precheck: n/a
---

## Postulate

For each simple-system chart $\Gamma_i\subset\mathbb R^{n_i+1}$, $n_i\ge1$, let $x=(u,v)$, with one energy coordinate $u$ and $n_i$ work coordinates $v$. The chart is a nonempty open convex domain. It is written in fixed numerical coordinates; in a physical chart the energy coordinate is measured in joules and each work coordinate retains its declared unit. Adopt these assumptions for every state $x$ and for every thermal join treated as a simple system:

**A7 (convex-combination accessibility).** For $0<t<1$, the separated scaled pair $(t x,(1-t)y)$ is accessible to the chart state $t x+(1-t)y$, whenever these states are in the declared domains.

For each $x$, define its forward sector $A_x=\{y\in\Gamma_i:x\prec y\}$. Adopt:

**S1 (strict successor).** Some $y\in\Gamma_i$ satisfies $x\prec\prec y$.

**S2 (unique finite-slope support).** At $x=(u_x,v_x)$, $A_x$ has exactly one supporting hyperplane through $x$, and it can be written
$$
u-u_x+P_i(x)\cdot(v-v_x)=0
$$
with finite $P_i(x)\in\mathbb R^{n_i}$. The map $P_i:\Gamma_i\to\mathbb R^{n_i}$ is locally Lipschitz: every point has a neighborhood on which one finite Lipschitz constant bounds $\|P_i(x)-P_i(y)\|/\|x-y\|$. A supporting hyperplane means $A_x$ lies in one of its closed half-spaces and meets it at $x$.

**S3 (connected relative boundary).** The boundary $\partial_{\Gamma_i}A_x$, taken in the topology relative to $\Gamma_i$, is arcwise connected.

These are explicit adopted conditions. The slope $P_i$ is a geometric support parameter here; no equation identifying it with measured pressure is asserted. In particular, S1–S3 and A7 do not assert comparison hypothesis for products.

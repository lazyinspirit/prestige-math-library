---
id: post-td-simple-system-geometric-axioms
kind: postulate
title: Simple-system geometric axioms
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Adopted convexity, irreversibility, support regularity and boundary-connectivity conditions on the forward sectors of simple thermodynamic state domains and admitted joins.
deps: [def-td-thermal-join, def-td-adiabatic-accessibility, def-td-scaled-products-and-comparison, post-td-accessibility-a1-a6]
dependency_roles:
  def-td-thermal-join: formulation-prerequisite
  def-td-adiabatic-accessibility: formulation-prerequisite
  def-td-scaled-products-and-comparison: formulation-prerequisite
  post-td-accessibility-a1-a6: operational-prerequisite
aliases: []
provenance:
  statement: ai-altered
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
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
  precheck: n/a
dependency_level: 7
---

## Postulate

For each simple-system chart $\Gamma_i\subset\mathbb R^{n_i+1}$, $n_i\ge1$, let $x=(u,v)$, with one energy coordinate $u$ and $n_i$ work coordinates $v$. The chart is a nonempty open convex domain. The simple-compressible physical case is the fixed-composition slice and embedding of [[def-td-thermal-join]], with $n_i=1$, $u=U/(1\,\mathrm J)$ and $v=V/(1\,\mathrm{m^3})$. A declared multi-work chart or joined chart instead supplies its own equilibrium endpoint domain and diagonal unit map: $U=u(1\,\mathrm J)$ and $W_a=v_a w_a$ for fixed positive work-coordinate units $w_a$. The numerical domain is identified with these physical endpoints by that supplied map, and accessibility is pulled back from the admitted endpoint relation. These identifications preserve the internal-energy meaning and fixed composition; extra work coordinates do not follow from the simple-compressible state definition. Adopt these assumptions for every state $x$ and for every thermal join treated as a simple system:

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

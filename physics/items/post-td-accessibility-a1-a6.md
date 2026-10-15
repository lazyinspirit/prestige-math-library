---
id: post-td-accessibility-a1-a6
kind: postulate
title: Accessibility axioms A1–A6
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Adopted order assumptions for adiabatic accessibility on equal-formal-mass finite compounds in the declared family, including cross-type comparisons only when a channel network later admits them; they do not establish that an actual material family satisfies them.
deps: [def-td-adiabatic-accessibility, def-td-scaled-products-and-comparison, post-td-bulk-additivity]
dependency_roles:
  def-td-adiabatic-accessibility: formulation-prerequisite
  def-td-scaled-products-and-comparison: formulation-prerequisite
  post-td-bulk-additivity: operational-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §II.C
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: "André Thess, The Lieb–Yngvason Machine: A didactical tool for the definition of entropy in classical thermodynamics, Appendix A-1–A-6"
      url: https://www.dlr.de/de/tt/downloads/dokumente/institut/institutsleitung/Entropie.pdf/@@download/file
    - title: Goddard, The second law of thermodynamics as variation on a theme of Carathéodory, §3
      url: https://escholarship.org/content/qt27k6m59q/qt27k6m59q.pdf
verification:
  precheck: n/a
dependency_level: 6
---

## Postulate

Use the fully scalable model family of [[def-td-scaled-products-and-comparison]]: every positive scale map is defined on the full state domain, finite separated state spaces are full products, and nested scaling has the declared reversible preparation transport. These additional existence and transport assumptions are not supplied by the general partial-domain bulk postulate. Adopt the following axioms for $\prec$ on every declared pair of finite compounds with equal formal mass in [[def-td-scaled-products-and-comparison]]. Initially this covers equal-composition adiabatic accessibility. If a later channel model admits comparisons between distinct composition types, the same axioms apply to those comparisons and all their finite scaled products; no cross-type transition is admitted by this postulate alone. They are assumptions of the operational model, not consequences of the process definition or of energy additivity.

**A1 (reflexivity).** $A\prec A$ for every state $A$.

**A2 (transitivity).** If $A\prec B$ and $B\prec C$, then $A\prec C$.

**A3 (consistency).** If $A\prec B$, then $A+C\prec B+C$ for every finite spectator compound $C$ for which both endpoint compounds are admitted and the resulting formal masses agree.

**A4 (scaling).** If $A\prec B$, then $\lambda A\prec\lambda B$ for every $\lambda>0$, using the full-domain tagged scaling maps expressly adopted in [[def-td-scaled-products-and-comparison]].

**A5 (splitting).** For each state $x$, positive $s<t$, and tagged scaled copies of its material, the state $t x$ is accessible in both directions to the separated pair $(s x,(t-s)x)$. This states reversible splitting of an equilibrium preparation into scaled copies, not additivity of arbitrary state functions.

**A6 (stability).** Let $A,B$ have equal formal mass. Let $Z_0,Z_1$ be fixed positive spectator compounds of equal formal mass, and let $\epsilon_n>0$ decrease to zero. If $A+\epsilon_n Z_0\prec B+\epsilon_n Z_1$ for every $n$, then $A\prec B$.

Equality of formal masses in A6 is required so each comparison is defined; equality of composition vectors is not required when a declared model includes cross-type transitions. A6 is a limiting closure assumption on the relation; it does not assert continuity of any physical process or the existence of a limiting apparatus.

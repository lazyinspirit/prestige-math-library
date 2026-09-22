---
id: rem-fredholm-maps-have-countable-proper-local-restrictions
kind: remark
title: Fredholm maps have countable proper local restrictions externally
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
proved_here: false
deps: [def-axiom-of-choice, def-countable-base-banach-manifold-and-smooth-map, lem-local-finite-dimensional-reduction-for-a-fredholm-map]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: n/a
sources:
  references:
    - title: "Stephen Smale, An Infinite Dimensional Version of Sard's Theorem — Theorem (1.6) and proof of Theorem (1.3), pp. 862–863"
      url: "https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf"
external_dependency:
  source_url: "https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf"
  exact_statement: "Assume AC. Let f:M->N be a C^h map, h>=1, between Hausdorff second-countable real Banach manifolds, and suppose every Df(x) has closed range and finite-dimensional kernel and cokernel. There are closed subsets C_j of M whose interiors cover M such that each C_j lies in a Fredholm normal-form neighborhood W_j, f|C_j:C_j->N is proper, and f(W_j) lies in a target chart. In the normal form, f(u,v)=(u,g(u,v)), with v in a finite-dimensional kernel space K, g valued in a finite-dimensional obstruction space Q, and u in a Banach range space R."
  local_proof_attempt: "The authored draft Fredholm normal-form lemma was read in full. A compact ball in the finite-dimensional kernel coordinate controls subsequences while convergence of the image fixes the range coordinate. The closed subordinate-neighborhood, global target-chart localization, and countable-cover details have not been authored and certified as local library lemmas; this source-backed package is explicitly assumed under the owner's inclusion instruction."
  necessity: "Supplies the countable proper closed restrictions that cover all critical points in the repaired Sard–Smale proof."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f:M\to N$ be a
$C^h$ map, $h\geq1$, between Hausdorff second-countable real Banach manifolds
([[def-countable-base-banach-manifold-and-smooth-map]]), and suppose every
$Df(x)$ has closed range and finite-dimensional kernel and cokernel. There is
a finite or countable family of closed subsets $(C_j)_{j\in J}$ of $M$,
indexed by $J\subseteq\mathbb N$, whose interiors cover $M$ such that, for
every $j\in J$:

- $C_j$ is contained in a Fredholm normal-form neighbourhood $W_j$;
- $f|_{C_j}:C_j\to N$ is proper, meaning inverse images of compact sets are
  compact; and
- $f(W_j)$ lies in a target chart.

Here a Fredholm normal-form neighbourhood means source and target coordinates
in which
$$
f(u,v)=(u,g(u,v)),
$$
with $u$ in a Banach range space, $v$ in a finite-dimensional kernel space,
and $g$ valued in a finite-dimensional obstruction space, as in
[[lem-local-finite-dimensional-reduction-for-a-fredholm-map]]. The chart may
be shrunk before choosing the subordinate closed proper restriction. No closed
ball in an infinite-dimensional Banach space is asserted compact.
If $M$ is empty, take $J=\varnothing$; no normal-form neighbourhood or target
chart then needs to be chosen.

## Remarks

This countable localization and local-properness package is recorded from
Smale and is not proved locally here.

---
id: rem-critical-images-of-proper-local-fredholm-restrictions-are-nowhere-dense
kind: remark
title: Critical images of proper local Fredholm restrictions are nowhere dense externally
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
proved_here: false
deps: [def-axiom-of-choice, def-countable-base-banach-manifold-and-smooth-map, lem-local-finite-dimensional-reduction-for-a-fredholm-map, def-nowhere-dense-meagre-and-residual-subsets]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  sources_checked:
    date: 2026-09-22
    scope: citations
    by: owner-audit
  precheck: n/a
sources:
  references:
    - title: "Stephen Smale, An Infinite Dimensional Version of Sard's Theorem — localized proof of Theorem (1.3), pp. 862–863"
      url: "https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf"
external_dependency:
  source_url: "https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf"
  exact_statement: "Assume AC. Let f:M->N be a C^h map of fixed Fredholm index m between Hausdorff second-countable real Banach manifolds, where h is a positive integer or infinity and h>max(m,0). Suppose W is a source open set mapped into a target chart and f has normal form (u,v)->(u,g(u,v)) there, with v in a finite-dimensional space K, g valued in a finite-dimensional space Q, and dim K-dim Q=m. If C is closed in M, C is contained in W, and f|C is proper, then f(C intersect Crit(f)) is closed and nowhere dense in N."
  local_proof_attempt: "In normal form the derivative is onto exactly when D_v g is onto. On each fixed-u slice finite-dimensional Sard excludes an open set of critical values; when the obstruction space is zero there are no critical points in the chart. Properness and closedness of the critical set give a closed image. These chart-localization details have not been authored and certified as a local category lemma, so the localized Smale consequence is explicitly recorded as external."
  necessity: "Turns every proper local restriction's critical image into a closed nowhere-dense set, enabling the countable residual-values argument."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f:M\to N$ be a
$C^h$ map of fixed Fredholm index $m$ between Hausdorff second-countable real
Banach manifolds ([[def-countable-base-banach-manifold-and-smooth-map]]), where
$h$ is a positive integer or $\infty$ and $h>\max\{m,0\}$. Suppose $W\subseteq
M$ is open, $f(W)$ lies in a target chart, and on $W$ the map has Fredholm
normal form
$$
(u,v)\longmapsto(u,g(u,v)),
$$
where the kernel variable lies in a finite-dimensional space $K$, the
obstruction component lies in a finite-dimensional space $Q$, and
$\dim K-\dim Q=m$
([[lem-local-finite-dimensional-reduction-for-a-fredholm-map]]).

If $C\subseteq W$ is closed in $M$ and $f|_C:C\to N$ is proper, then
$$
f(C\cap\operatorname{Crit}(f))
$$
is closed and nowhere dense in $N$, where
$\operatorname{Crit}(f)=\{x\in M:Df(x)\text{ is not surjective}\}$ and
nowhere dense has the meaning in
[[def-nowhere-dense-meagre-and-residual-subsets]].

## Remarks

This is the localized category consequence used in Smale's proof, not a
separately numbered theorem there and not a local proof in this library.

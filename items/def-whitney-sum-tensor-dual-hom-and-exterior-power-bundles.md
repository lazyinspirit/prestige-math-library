---
id: def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles
kind: definition
title: Whitney sum, tensor, dual, Hom, and exterior-power bundles
status: draft
origin: pipeline
deps: [thm-vector-bundles-glued-from-transition-cocycles, prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §1.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Direct sums, tensor products, and related constructions, printed pp.8–11"
    - title: "Milnor and Stasheff, Characteristic Classes, §3"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Vector-bundle operations, printed pp.20–27"
---

## Definition

Let $E$ and $F$ be finite-rank $\mathbb F$-vector bundles over $X$, with
transition matrices $g_{ji}$ and $h_{ji}$ on a common refinement. Apply
[[thm-vector-bundles-glued-from-transition-cocycles]] to the following
transition maps:

- $E\oplus F$: $\operatorname{diag}(g_{ji},h_{ji})$;
- $E\otimes F$: $g_{ji}\otimes h_{ji}$;
- $E^*$: $\lambda\mapsto\lambda g_{ji}^{-1}$;
- $\operatorname{Hom}(E,F)=E^*\otimes F$:
  $T\mapsto h_{ji}Tg_{ji}^{-1}$;
- $\Lambda^kE$: $\Lambda^kg_{ji}$.

These define the **Whitney sum**, **tensor product**, **dual**, **Hom**, and
**exterior-power** bundles. Their fibers are respectively
$E_x\oplus F_x$, $E_x\otimes F_x$, $E_x^*$,
$\operatorname{Hom}(E_x,F_x)$, and $\Lambda^kE_x$.
The cocycle theorem also shows that changes of frame give canonically
isomorphic bundles.

For a complex bundle, conjugating every transition matrix defines
$\overline E$, and regarding those matrices as real-linear defines the
underlying real bundle $E_{\mathbb R}$. We set
$\Lambda^0E=X\times\mathbb F$ and $\Lambda^kE=0$ when
$k>\operatorname{rank}E$. Applying the same matrices after precomposition
with a base map shows, under the canonical comparisons of
[[prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism]],
that every construction commutes with pullback.

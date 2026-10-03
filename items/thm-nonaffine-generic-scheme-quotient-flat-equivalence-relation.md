---
id: thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation
kind: theorem
title: "A flat finite-type equivalence relation has a generic scheme quotient"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, lem-nonaffine-generic-quasisection-flat-groupoid, thm-nonaffine-groupoid-quotient-from-quasisection]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "SGA3, Expose V, Sections 7-8"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp5-13oct24.pdf
---

## Statement

Assume the Axiom of Choice. Let $R\rightrightarrows X$ be a flat finite-type equivalence-relation groupoid on a separated finite-type $k$-scheme. There is a dense saturated open $W\subset X$ whose fppf quotient is a finite-type scheme $Y$. The quotient $q:W\to Y$ is faithfully flat of finite presentation and $R_W\cong W\times_YW$.

## Facts & Assumptions

[F1] Generic saturated quasi-sections with affine-contained finite subsets exist. ([[lem-nonaffine-generic-quasisection-flat-groupoid]])

[F2] A quasi-section whose arrow map is finite locally free and whose finite-relation orbits lie in affine opens gives a scheme fppf quotient, a faithfully flat finite-presentation projection, and the prescribed kernel pair. ([[thm-nonaffine-groupoid-quotient-from-quasisection]])

## Proof

**Given:** The schemes, maps, and hypotheses in the statement, and AC.

1.1 Apply [F1] and write its dense open as the finite disjoint union of saturated opens $W_i$, with quasi-sections $U_i$. The induced relation has finite locally free projections, so every orbit is finite; [F1] puts it in an affine open of $U_i$. Thus every hypothesis of [F2] holds on each $W_i$, and it supplies a finite-type scheme $Y_i$ representing $W_i/R_{W_i}$, with the asserted projection and kernel pair. [F1, F2, given, construct]

2.1 Set $Y=\coprod_iY_i$. Since the $W_i$ are disjoint and saturated there are no relation arrows between different pieces, so this disjoint union represents the fppf quotient of $W=\coprod_iW_i$. Flatness, finite presentation, surjectivity and the kernel-pair identity hold piecewise and hence globally. AC is inherited from [F1]–[F2]. [F1, F2, step 1.1, construct] ∎


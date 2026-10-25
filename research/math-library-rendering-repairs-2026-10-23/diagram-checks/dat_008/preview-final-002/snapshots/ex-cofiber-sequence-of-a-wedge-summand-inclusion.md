---
id: ex-cofiber-sequence-of-a-wedge-summand-inclusion
kind: example
title: Cofiber sequence of a wedge summand inclusion
deps: ["def-reduced-cone-suspension-and-cofiber-sequence", "lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient", "lem-pushouts-and-products-preserve-the-cofibrations-used-here", "def-wedge-of-pointed-spaces"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 8 §4 p.60 quotient lemma, wedge specialization
status: published
verification:
  audited: 2026-09-10
origin: pipeline
proof_strategy: direct
---

## Example

For well-pointed based CGWH spaces U,V, the summand inclusion $U\hookrightarrow U\vee V$ is a cofibration with quotient V. Its Puppe connecting map $V\to\Sigma U$ is based nullhomotopic. For example, the inclusion of the first circle in $S^1\vee S^1$ has cofiber equivalent to the second circle and zero connecting map.

## Facts & Assumptions

[F1] The wedge identifies the two basepoints and no other points. [[def-wedge-of-pointed-spaces]]

[F2] Pushouts preserve cofibrations. [[lem-pushouts-and-products-preserve-the-cofibrations-used-here]]

[F3] The cofiber is formed by attaching the reduced cone. [[def-reduced-cone-suspension-and-cofiber-sequence]]

[F4] For a based cofibration collapsing its cone yields the quotient homotopy equivalence. [[lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient]]


## Verification

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 The inclusion U→U∨V is the pushout of the basepoint inclusion {* }→V along {* }→U. That inclusion is an unbased cofibration by well-pointedness, so F2 proves the claim. Collapsing U identifies the remaining V only at its existing basepoint, and compatible quotient maps in both directions give $(U\vee V)/U\cong V$. F4 consequently identifies its cofiber with V up to based homotopy. [F1, F2, F4]

2.1 More explicitly that cofiber is $CU\vee V$: the original U is the base of the attached cone. On CU use $[u,s]\mapsto[u,s+t-st]$ and keep V fixed. At t=0 this is the identity, at t=1 all of CU is the tip, and the basepoint track is fixed. The quotient-times-I construction in F2 makes this a continuous based deformation onto V. The cofiber projection to ΣU collapses all of V, so its composite with the inclusion V→CU∨V is identically the basepoint. Under this explicit inverse of the equivalence, the connecting map is therefore constant. For U=V=S1 this gives the stated two-circle instance. [F1, F2, F3, F4, step 1.1] ∎

## Remarks

The first three arrows below are the cofiber sequence in its explicit cone model. Here $a$ includes the wedge in its cofiber, $q$ collapses that wedge, $j$ includes the remaining summand, and $r$ collapses $CU$.

```tikzcd
U \arrow[r, hook, "i"] & U\vee V \arrow[r, "a"] & C_i=CU\vee V \arrow[r, "q"] \arrow[d, bend left=22, "r"] & \Sigma U \\
& & V \arrow[u, bend left=22, "j"] &
```

The map $r$ is the cone-collapse equivalence $C_i\to (U\vee V)/U\cong V$ of step 1.1: the quotient identification with $V$ is a based homeomorphism, whereas $C_i\simeq V$ is a based homotopy equivalence. Step 2.1 gives $rj=\operatorname{id}_V$, $jr\simeq\operatorname{id}_{C_i}$ through based maps, and $qj=*$ exactly. Thus the connecting map represented on $V$ by $qj$ is constant. The diagram illustrates these constructions; the verification above proves them independently.

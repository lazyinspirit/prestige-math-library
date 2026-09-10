---
id: def-mapping-cylinder-and-mapping-cone
kind: definition
title: Mapping cylinder and mapping cone
deps: ["thm-quotient-universal-property", "def-homotopy-relative-and-path-homotopy"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 6 §3 p.45; Chapter 8 §4 p.59
status: published
origin: pipeline
---

## Definition

For a continuous $f:X\to Y$, the **unreduced mapping cylinder** is
$$M_f=(Y\amalg(X\times I))/((x,0)\sim f(x)).$$
Write $j:X\to M_f$, $j(x)=[x,1]$, and $r:M_f\to Y$, $r(y)=y$, $r([x,s])=f(x)$. The formula for r descends continuously by [[thm-quotient-universal-property]]. The **unreduced mapping cone** is $C_f=M_f/j(X)$, collapsing the entire free end to a point when it is nonempty. If X is empty this quotient is Y, with no extra cone point adjoined. These constructions do not collapse a basepoint track. Reduced cones and suspensions are defined separately below. Deformations always use the homotopy convention in [[def-homotopy-relative-and-path-homotopy]].

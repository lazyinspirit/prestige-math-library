---
id: def-negative-degree-complex-k-groups
kind: definition
title: Negative-degree complex K-groups
status: published
origin: pipeline
deps: [def-reduced-complex-k-theory, def-reduced-cone-suspension-and-cofiber-sequence, def-compactly-generated-based-space-and-well-pointed-object]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §2.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Negative groups by suspension, printed pp.56–57"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §2"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Graded reduced KU groups, printed pp.205–208"
---

## Definition

For a compact Hausdorff space $X$, let $X_+=X\sqcup\{*\}$ with the added
point as basepoint. For $n\geq0$, define

$$K^{-n}(X)=\widetilde K^0(\Sigma^nX_+).$$

For a well-pointed based compact Hausdorff CGWH space $X$, define

$$\widetilde K^{-n}(X)=\widetilde K^0(\Sigma^nX),$$

and for a compact Hausdorff CGWH based pair $(X,A)$ whose quotient $X/A$ is
well-pointed define

$$K^{-n}(X,A)=\widetilde K^0(\Sigma^n(X/A)).$$

Suspensions and quotients use
[[def-reduced-cone-suspension-and-cofiber-sequence]] and the based CGWH
conventions of
[[def-compactly-generated-based-space-and-well-pointed-object]]. At $n=0$,
restriction to the added point splits
$K^0(X_+)\cong K^0(X)\oplus K^0(*)$; its kernel is canonically $K^0(X)$.
Thus $K^0(X)$ in this grading agrees with the original unreduced group. This
also covers $X=\varnothing$, since $X_+=*$ and both groups are zero.

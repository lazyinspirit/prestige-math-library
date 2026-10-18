---
id: def-reduced-relative-ko-and-ko-compact-support
kind: definition
title: Reduced and relative real K-theory and compact support
status: draft
origin: pipeline
page: real-clifford-modules-ko-and-abs-orientations
deps:
- def-real-ko-and-ksp-grothendieck-groups
- def-disk-sphere-and-thom-space-of-a-metric-vector-bundle
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
  - title: M. F. Atiyah, K-Theory, §§1.3–1.4 and 2.4 (complex source; real arguments
      supplied locally)
    url: https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
---

## Definition

For a based compact Hausdorff space $(Y,*)$, set $\widetilde {KO}^0(Y)=\ker(KO^0(Y)\to KO^0(*))$. For a compact pair with closed subspace $A\subset X$, set $KO^0(X,A)=\widetilde {KO}^0(X/A)$, where all of $A$ is collapsed to one basepoint. If $A=\varnothing$, use $X_+=X\amalg\{*\}$ instead. Set $KO^{-j}(X,A)=\widetilde {KO}^0(S^j\wedge(X/A))$ for $j\geq0$, and $KO^{-j}(X)=KO^{-j}(X,\varnothing)$. The same conventions define reduced, relative and negative-degree $KSp$.

For a finite-rank metric real bundle $V\to X$ over compact $X$, write $\operatorname{Th}(V)=D(V)/S(V)$ and $KO_c^{-j}(V)=\widetilde {KO}^0(S^j\wedge\operatorname{Th}(V))$. At rank zero use $\operatorname{Th}(0)=X_+$. These definitions do not assert any periodicity or an isomorphism between successive degrees.

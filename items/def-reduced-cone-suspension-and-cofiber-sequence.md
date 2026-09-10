---
id: def-reduced-cone-suspension-and-cofiber-sequence
kind: definition
title: Reduced cone suspension and cofiber sequence
deps: ["def-compactly-generated-conventions-for-based-homotopy", "def-cofibration-and-homotopy-extension-property", "def-mapping-cylinder-and-mapping-cone", "thm-quotient-universal-property"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 8 §§2–4 pp.57–60
status: draft
origin: pipeline
---

## Definition

For a well-pointed CGWH based space $(X,x_0)$ set
$$CX=(X\times I)/(X\times\{1\}\cup\{x_0\}\times I),\qquad \Sigma X=CX/(X\times\{0\}).$$
The common collapsed set is the basepoint; the copy of X at height zero is the cone base. All products and mapping conventions are those of [[def-compactly-generated-conventions-for-based-homotopy]], and well-pointedness means [[def-cofibration-and-homotopy-extension-property]].

For a based $f:X\to Y$ put $C_f=Y\cup_f CX$, the **reduced homotopy cofiber**, with $i:Y\to C_f$ the inclusion and $q:C_f\to\Sigma X$ collapsing Y. This reduced notation is used in this item and its based consumers; it differs from the unreduced cone of [[def-mapping-cylinder-and-mapping-cone]]. A reduced cylinder also collapses the basepoint track. Maps on all these quotients are defined by [[thm-quotient-universal-property]].

Write $\rho_X([x,t])=[x,1-t]$ and $-\Sigma f=\rho_Y\Sigma f$. The cofiber sequence convention is
$$X\xrightarrow{f}Y\xrightarrow{i}C_f\xrightarrow{q}\Sigma X\xrightarrow{-\Sigma f}\Sigma Y\xrightarrow{-\Sigma i}\Sigma C_f\xrightarrow{-\Sigma q}\Sigma^2X\xrightarrow{\Sigma^2 f}\Sigma^2Y\longrightarrow\cdots.$$
The homotopy equivalences and mapping-set exactness behind this notation are proved below; this definition does not assert a covariant exact sequence of homotopy groups.

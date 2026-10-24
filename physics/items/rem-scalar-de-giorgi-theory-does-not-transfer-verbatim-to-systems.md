---
id: rem-scalar-de-giorgi-theory-does-not-transfer-verbatim-to-systems
kind: remark
title: "Scalar De Giorgi theory does not transfer verbatim to systems"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 11
deps: [thm-de-giorgi-nash-interior-holder-regularity]
justified_by: []
forward_refs: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bozhidar Velichkov, Elliptic PDEs: Teorema di De Giorgi (Universita di Pisa; complete 7-page note, in Italian)"
      url: "https://people.dm.unipi.it/velichkov/PDE-capitolo-3-parte-3-teorema-di-De-Giorgi-v3.pdf"
      locator: "Section 1, scalar weak formulation and Theorem 1, printed p. 1; inspected in the complete 7-page note"
---

## Statement

The De Giorgi--Nash--Moser estimates on this page concern a single real-valued unknown. In [[thm-de-giorgi-nash-interior-holder-regularity]], $u\in H^1(\Omega;\mathbb R)$ solves the scalar equation $-\operatorname{div}(A\nabla u)=0$, where $A$ is a measurable symmetric uniformly elliptic spatial matrix. These are the hypotheses in [V] §1, Theorem 1. A component of a coupled elliptic system need not satisfy this scalar equation, so the theorem cannot be applied to that component merely because the system has an ellipticity condition. In particular, a system condition such as Legendre--Hadamard ellipticity does not by itself check the scalar hypotheses of this page. Any application to components must separately verify those hypotheses, as one can for a decoupled collection of scalar equations. Regularity theory for coupled systems is outside this page's scope.

## Sources

Velichkov, *Elliptic PDEs: Teorema di De Giorgi*, Section 1 and Theorem 1 (printed p. 1 of the complete 7-page note, read in full), states and proves the interior regularity theorem for a scalar real-valued solution $u$ of $-\operatorname{div}(A\nabla u)=0$ with a symmetric uniformly elliptic matrix $A$; the statement has no vector-valued or system analogue. This item records only the resulting limitation of [[thm-de-giorgi-nash-interior-holder-regularity]] and asserts no system counterexample and no system regularity theorem.

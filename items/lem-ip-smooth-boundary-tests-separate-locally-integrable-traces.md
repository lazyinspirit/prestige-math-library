---
id: lem-ip-smooth-boundary-tests-separate-locally-integrable-traces
kind: lemma
title: Smooth boundary tests separate locally integrable traces
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
axiom_base: Countable Choice
deps:
  - def-countable-choice
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-second-countable-implies-lindelof
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Medet Nursultanov and Lauri Oksanen, Introduction to inverse problems for hyperbolic PDEs (full lecture notes, arXiv:2311.06020v2)"
      url: "https://arxiv.org/pdf/2311.06020v2"
      locator: "§§2.4 and 3.3, PDF pp. 9 and 17–18: smooth tests in the Riemannian boundary pairing."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (full author lecture notes, arXiv:2312.08123v1)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "§3.1, PDF pp. 23–24: smooth boundary test pairings with the induced Riemannian boundary density."
proof_strategy: coordinate localization
---

## Statement

Assume Countable Choice. Let $(M,g)$ be a compact smooth Riemannian manifold with smooth boundary, let $T>0$, and let $\Sigma=(0,T)\times\partial M$. Write $dS_g$ for the Riemannian volume density of the metric restricted to $T\partial M$, and give $\Sigma$ the product density $dt\,dS_g$. If a measurable function $f$ is locally integrable in every smooth product chart of $\Sigma$ and
$$\int_\Sigma f\psi\,dS_gdt=0\qquad\text{for every }\psi\in C_c^\infty(\Sigma),$$
then $f=0$ almost everywhere on $\Sigma$.

## Statement references

[[def-countable-choice]]

[[def-riemannian-metric-and-riemannian-manifold]]

[[def-riemannian-volume-density]]

[[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]]

[[thm-locally-integrable-functions-embed-in-distributions]]

[[thm-second-countable-implies-lindelof]]

## Facts & Assumptions

**Given:** Countable Choice, the product boundary manifold $\Sigma$ with its smooth positive Riemannian density $dS_gdt$, and a locally integrable $f$ whose pairing with every smooth compactly supported test is zero.

[A1] Countable Choice allows passage from the second-countable product chart basis to a countable atlas and union of its chart-null exceptional sets. ([[def-countable-choice]], [[thm-second-countable-implies-lindelof]])

[F1] In a boundary chart $y=(y^1,\ldots,y^{n-1})$, the restricted metric has smooth positive-definite matrix $G_{\partial,ab}=g(\partial_{y^a},\partial_{y^b})$. By the Riemannian volume-density formula, $dS_g=\sqrt{\det G_\partial}\,|dy^1\cdots dy^{n-1}|$; this coefficient is smooth and strictly positive, and multiplying by $dt$ gives the product chart density. ([[def-riemannian-metric-and-riemannian-manifold]], [[def-riemannian-volume-density]])

[F2] A locally integrable function on a Euclidean open set whose regular distribution is zero vanishes almost everywhere, under Countable Choice. ([[thm-locally-integrable-functions-embed-in-distributions]])

## Proof

1.1 Fix a product coordinate chart $V\subset\Sigma$ with coordinates $(t,y)$ and write $dS_gdt=m(t,y)\,dt\,dy$, where $m$ is smooth and strictly positive by [F1]. For every $\varphi\in C_c^\infty(V)$, extending it by zero gives a global test $\psi\in C_c^\infty(\Sigma)$. The assumed pairing then says $$\int_V(f\circ\kappa^{-1})(t,y)m(t,y)\varphi(t,y)\,dt\,dy=0.$$ The function $(f\circ\kappa^{-1})m$ is locally integrable; its regular distribution is therefore zero, so [F2] gives $(f\circ\kappa^{-1})m=0$ almost everywhere on $V$. Positivity of $m$ implies $f=0$ almost everywhere on $V$. [F1, F2, given, construct]

2.1 Second countability and [A1] provide an at-most-countable cover of $\Sigma$ by such product coordinate charts. Each chart-null exceptional set is null for the induced product measure because the chart density is smooth and positive. The countable union remains null under Countable Choice, and step 1.1 shows $f=0$ outside it. Hence $f=0$ almost everywhere on all of $\Sigma$. [A1, F1, step 1.1, given] ∎

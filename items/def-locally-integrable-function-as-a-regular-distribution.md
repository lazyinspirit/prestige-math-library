---
id: def-locally-integrable-function-as-a-regular-distribution
kind: definition
title: Locally integrable functions as regular distributions
status: published
origin: pipeline
deps: [def-regular-distribution-from-a-locally-integrable-function, thm-locally-integrable-functions-embed-in-distributions, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapter 1 §1.1
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
    - title: Semyon Dyatlov, Lecture notes for 18.155 (2022), regular distributions
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
---

## Definition

Assume Countable Choice for the published injection theorem. Let
$\Omega\subseteq\mathbb R^n$ be open, with $n\ge1$. For
$u\in L^1_{\mathrm{loc}}(\Omega)$, its **regular distribution** is
$$T_u(\varphi):=\int_\Omega u(x)\varphi(x)\,dx, \qquad \varphi\in C_c^\infty(\Omega).$$
The integral is finite because $\varphi$ is bounded and has compact support.
The pairing is complex bilinear: there is no conjugation. It depends only on
the almost-everywhere class of $u$, and the induced map
$$L^1_{\mathrm{loc}}(\Omega)/\!\sim_{\mathrm{a.e.}} \longrightarrow\mathcal D'(\Omega),\qquad [u]\longmapsto T_u$$
is complex-linear and injective. The pairing is the regular functional of
[[def-regular-distribution-from-a-locally-integrable-function]], and the
injection is [[thm-locally-integrable-functions-embed-in-distributions]] under
[[def-countable-choice]]. Countable Choice is used only for that published
injectivity theorem; defining the pairing and its linearity require no choice.
If $\Omega=\varnothing$, both spaces contain only zero and the map is the
unique injection.

**Well-definedness.** If $u=\widetilde u$ almost everywhere, then for each
test function the integrands agree almost everywhere, so their integrals
agree. The published continuity estimate makes every such regular functional
a distribution; the published embedding theorem supplies the converse
implication $T_u=T_{\widetilde u}\Rightarrow
u=\widetilde u$ almost everywhere under Countable Choice.

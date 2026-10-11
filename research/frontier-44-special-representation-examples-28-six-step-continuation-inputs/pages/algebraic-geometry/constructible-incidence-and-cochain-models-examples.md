---
page: constructible-incidence-and-cochain-models-examples
title: "Constructible Incidence And Cochain Models Examples"
status: draft
items: []
examples: [ex-incidence-model-of-a-closed-interval]
requires:
  - constructible-incidence-and-cochain-models
---

**Objective.** This companion page works the smallest non-trivial incidence
computation of its A page. The closed interval is stratified by its two
endpoints and its open edge, and a finite constructible sheaf is recorded by
three vector spaces $V_0,V_1,V_e$ with generization maps $u_0:V_0\to V_e$ and
$u_1:V_1\to V_e$. The incidence cochains of the face poset reduce, after an
invertible change of coordinates that strips off a contractible summand, to the
two-term complex
$$[V_0\oplus V_1\xrightarrow{u_0-u_1}V_e]$$
in degrees zero and one, so the actual derived global sections are not merely
modelled but computed. The two boundary computations are then read off: the
constant sheaf has cohomology $k$ in degree zero and nothing above, while the
extension by zero of $k$ on the open edge has one copy of $k$ in degree one and
vanishes in degree zero. The example depends only on the incidence lemma of
[[constructible-incidence-and-cochain-models]] and finite linear algebra.

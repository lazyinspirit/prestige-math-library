---
id: def-holomorphic-germ-ring-and-its-maximal-ideal
kind: definition
title: "The ring of holomorphic germs at $0$ and its maximal ideal"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-holomorphic-function-in-several-complex-variables, def-local-ring]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-28
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 6.1"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Section 4.5"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Definition

Fix $m\ge1$. Two holomorphic functions on neighbourhoods of
$0\in\mathbb C^m$ ([[def-holomorphic-function-in-several-complex-variables]])
are **equivalent at $0$** when they agree on some smaller neighbourhood of $0$.
An equivalence class is a **holomorphic germ at $0$**, and the set of all such
germs is denoted $\mathcal O_{m,0}$.

For the $m=1$ boundary case used later, also set
$$\mathcal O_{0,0}:=\mathbb C,\qquad \mathfrak m_{0,0}:=\{0\}.$$
This is the ring of constant germs at the unique point of $\mathbb C^0$.

If $[f]$ and $[g]$ are germs, choose representatives defined on a common
neighbourhood of $0$ and set

$$[f]+[g]:=[f+g],\qquad [f][g]:=[fg].$$

These are well defined because agreement on a smaller neighbourhood is
preserved by pointwise addition and multiplication. Thus $\mathcal O_{m,0}$ is a
commutative ring with identity $[1]$.

Its distinguished ideal is

$$\mathfrak m_{m,0}:=\{[f]\in\mathcal O_{m,0}:f(0)=0\}.$$

This is well defined because equivalent representatives have the same value at
$0$. The local-ring terminology used later is that of [[def-local-ring]].

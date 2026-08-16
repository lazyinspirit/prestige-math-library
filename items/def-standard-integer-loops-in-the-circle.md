---
id: def-standard-integer-loops-in-the-circle
kind: definition
title: "The standard circle loops $\\omega_n(t)=[nt]$ for $n\\in\\mathbb Z$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-circle-as-real-line-mod-integers, def-based-loops-and-fundamental-group, thm-algebra-of-continuous-functions, lem-continuity-is-local-and-pastes]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Ch. 1, Section 1.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 1, Section 5"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Definition

Let $I=[0,1]$. For every integer $n$, define $\widetilde\omega_n(t)=nt$ and $\omega_n=p\circ\widetilde\omega_n$.

The function $t\mapsto nt$ is continuous by
[[thm-algebra-of-continuous-functions]], and $p$ is continuous because it is the
quotient projection of [[def-circle-as-real-line-mod-integers]]. Hence
$\omega_n$ is continuous by [[lem-continuity-is-local-and-pastes]]. Moreover,

$$\omega_n(0)=[0],\qquad \omega_n(1)=[n]=[0].$$

Thus $\omega_n$ is a based loop at $[0]$ in the sense of
[[def-based-loops-and-fundamental-group]]. This definition includes $n=0$, when
the loop is constant, and all negative integers.

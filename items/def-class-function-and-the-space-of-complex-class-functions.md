---
id: def-class-function-and-the-space-of-complex-class-functions
kind: definition
title: "Class functions and the complex vector space $\\mathrm{cf}(G)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-conjugacy-class-and-centralizer, def-vector-space]
justified_by: []
aliases: []
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 3.2"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.5"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Definition

Let $G$ be a finite group. A function $f:G\to\mathbb C$ is a **class function**
when it is constant on every conjugacy class
([[def-conjugacy-class-and-centralizer]]):

$$f(gxg^{-1})=f(x)\qquad\text{for all }g,x\in G.$$

The set of all class functions is written

$$\mathrm{cf}(G):=\bigl\{\,f:G\to\mathbb C\;:\;f(gxg^{-1})=f(x)\text{ for all }g,x\in G\,\bigr\}.$$

With pointwise addition $(f+h)(g):=f(g)+h(g)$ and pointwise scalar
multiplication $(\lambda f)(g):=\lambda f(g)$, the set $\mathrm{cf}(G)$ is a
complex vector space ([[def-vector-space]]): the axioms (V1)–(V5) are inherited
from the field $\mathbb C$ at every argument $g\in G$. Because $G$ is finite,
the evaluation functions $f\mapsto f(x)$ are complex-linear, and a class
function is determined by its values on one representative of each conjugacy
class.

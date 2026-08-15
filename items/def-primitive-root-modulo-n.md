---
id: def-primitive-root-modulo-n
kind: definition
title: "Primitive roots modulo $n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-unit-group-modulo-n-and-euler-totient, def-order-in-a-group]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, Chapter C"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "William Stein, Elementary Number Theory, §2.5"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Definition

Let $n\ge 1$. A unit $g\in(\mathbb Z/n)^\times$ is a **primitive root modulo $n$** when

$$\operatorname{ord}(g)=\varphi(n),$$

where the unit group and Euler totient are those of [[def-unit-group-modulo-n-and-euler-totient]] and the order is that of [[def-order-in-a-group]]. Thus the unique class modulo $1$ is a primitive root under this definition, since both its order and $\varphi(1)$ are $1$.

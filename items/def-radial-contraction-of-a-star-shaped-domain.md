---
id: "def-radial-contraction-of-a-star-shaped-domain"
kind: "definition"
title: "Radial contraction of a star shaped domain"
deps: ["def-star-shaped-open-subset-of-rn"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
---

## Definition

For an open $U\subseteq\mathbb R^n$ star-shaped about a specified $c\in U$, the **radial contraction** is $F:U\times[0,1]\to U$, $F(x,t)=c+t(x-c)$.

[[def-star-shaped-open-subset-of-rn]] says exactly that each displayed value lies in $U$. The coordinate expression is polynomial, so its restriction is smooth up to both endpoints; $F(x,0)=c$ and $F(x,1)=x$. The centre is part of the data, so $U$ is nonempty. For $n=0$ the unique nonempty domain is a point and the formula is constant.

## Source locator

Lee, Theorem 17.14, p.447.

---
id: def-balanced-and-bilinear-maps
kind: definition
title: "Balanced maps from a right module and a left module, and bilinear maps over a commutative ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-and-right-modules, def-group, def-commutative-ring]
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
    - title: "Stacks Project, Section 10.12: Tensor products"
      url: "https://stacks.math.columbia.edu/tag/00CV"
    - title: "C. Dennis, Week 1 recap on tensor products"
      url: "https://math.uchicago.edu/~may/PEOPLE/DENNIS/week1a.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a unital ring, let $M$ be a right $R$-module, let $N$ be a left $R$-module, and let $A$ be an abelian group, written additively ([[def-left-and-right-modules]], [[def-group]]). A map $b:M\times N\to A$ is **$R$-balanced** if, for all $m,m'\in M$, $n,n'\in N$, and $r\in R$,

$$b(m+m',n)=b(m,n)+b(m',n),\qquad b(m,n+n')=b(m,n)+b(m,n'),$$

and

$$b(mr,n)=b(m,rn).$$

Thus a balanced map is additive in each variable and identifies the two ways in which a scalar may cross the pair. Additivity implies $b(0,n)=0=b(m,0)$.

If $R$ is commutative ([[def-commutative-ring]]) and $M,N,P$ are $R$-modules, a map $b:M\times N\to P$ is **$R$-bilinear** if it is $R$-linear in each variable. Equivalently, it is additive in each variable and satisfies

$$b(rm,n)=r\,b(m,n)=b(m,rn)$$

for all $r,m,n$. After a commutative-ring module is regarded as a right module by $mr:=rm$, every bilinear map is balanced.

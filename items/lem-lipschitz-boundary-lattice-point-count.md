---
id: lem-lipschitz-boundary-lattice-point-count
kind: lemma
title: Lattice points in a homothetically expanding Lipschitz domain
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-full-euclidean-lattice-and-covolume
  - def-jordan-inner-and-outer-content
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen H. Schanuel, Heights in number fields, Bulletin de la Société Mathématique de France 107 (1979), Theorem 2, printed p. 438"
      url: "https://www.numdam.org/item/BSMF_1979__107__433_0.pdf"
    - title: "Joseph H. Silverman, An Introduction to Height Functions, expanded version of lectures presented at MSRI, January 2006"
      url: "https://legacy.slmath.org/attachments/workshops/301/HtSurveyMSRIJan06.pdf"
      locator: "Full 69-page PDF; projective height definitions, printed pp. 2–3; rational projective-line count, p. 5; Schanuel theorem and constant, p. 6."
verification: {}
proof_strategy: direct
---

## Statement

Let $k\ge1$, let $\Lambda\subset\mathbb R^k$ be a full lattice, and let $D\subset\mathbb R^k$ be bounded and Jordan measurable, meaning its bounded inner and outer Jordan contents agree; write $\operatorname{Vol}(D)$ for their common value. Assume the boundary $\partial D=\overline D\setminus\operatorname{int}(D)$ is contained in a finite union of images of Lipschitz maps $[0,1]^{k-1}\to\mathbb R^k$, where Lipschitz means that each map $\phi$ has a constant $L$ with $\|\phi(u)-\phi(v)\|_2\le L\|u-v\|_2$ for all $u,v$. Then, as $t\to\infty$ through positive real values,
$$
\#(\Lambda\cap tD)=\frac{\operatorname{Vol}(D)}{\operatorname{covol}(\Lambda)}t^k+O_{D,\Lambda}(t^{k-1}),\qquad tD:=\{tx:x\in D\},
$$
where the implied constant depends only on the fixed domain, lattice, and finite Lipschitz charts.

## Statement references

[[def-full-euclidean-lattice-and-covolume]]

[[def-jordan-inner-and-outer-content]]

## Facts & Assumptions

**Given:** An integer $k\ge1$, a full lattice $\Lambda\subset\mathbb R^k$, and a bounded Jordan-measurable set $D$ whose boundary has the finite Lipschitz-chart cover in the Statement.

[F1] A full lattice has the form $\Lambda=B\mathbb Z^k$ for an invertible real matrix $B$, its half-open fundamental parallelepiped $P=B[0,1)^k$ tiles $\mathbb R^k$ by disjoint $\Lambda$-translates, and $\operatorname{covol}(\Lambda)=|\det B|=\operatorname{Vol}(P)$. ([[def-full-euclidean-lattice-and-covolume]])

[F2] Jordan measurability means the bounded Jordan inner and outer contents agree, and the common value is the Jordan volume. Scaling each rectangle in a finite cover by $t>0$ multiplies its volume by $t^k$. ([[def-jordan-inner-and-outer-content]])

## Proof

1.1 Write $\Lambda=B\mathbb Z^k$ as in [F1] and let $P=B[0,1)^k$. A bounded set meets $\Lambda$ in finitely many points: $B^{-1}(tD)$ is bounded, and a bounded subset of $\mathbb R^k$ contains only finitely many integer vectors. For $t\ge1$, form the finite union $U_t:=\bigcup_{\lambda\in\Lambda\cap tD}(\lambda+P)$. Its cells are disjoint, so [F1] gives $\operatorname{Vol}(U_t)=\#(\Lambda\cap tD)\operatorname{covol}(\Lambda)$. [F1, given, construct]

2.1 If $x\in U_t\triangle tD$, the unique cell $\lambda+P$ containing $x$ has one of $x,\lambda$ in $tD$ and the other outside $tD$; the segment from $x$ to $\lambda$ therefore meets $\partial(tD)$. Thus $x$ lies within $\delta:=\operatorname{diam}(P)$ of $\partial(tD)$. [step 1.1, algebra]

3.1 Fix one $L$-Lipschitz boundary chart $\phi:[0,1]^{k-1}\to\partial D$. For $t\ge1$, divide its parameter cube into $q^{k-1}$ cubes with $q=\lceil t\rceil$. Each image under $t\phi$ has diameter at most $tL\sqrt{k-1}/q\le L\sqrt{k-1}$; when $k=1$ the chart domain is a singleton and there is one image point. Hence the $\delta$-neighbourhood of $\partial(tD)$ is covered by $O_{D,\Lambda}(t^{k-1})$ balls of a fixed radius. Every such ball meets only boundedly many lattice cells: all cells meeting it lie in its fixed enlargement, their interiors are disjoint, and each has the same positive volume $\operatorname{covol}(\Lambda)$. Therefore only $O_{D,\Lambda}(t^{k-1})$ cells meet $U_t\triangle tD$. [given, F1, step 2.1, construct]

4.1 The symmetric difference is contained in those boundary cells, so its volume is $O_{D,\Lambda}(t^{k-1})$. By [F2], $\operatorname{Vol}(tD)=t^k\operatorname{Vol}(D)$; hence $\left|\#(\Lambda\cap tD)\operatorname{covol}(\Lambda)-t^k\operatorname{Vol}(D)\right|=O_{D,\Lambda}(t^{k-1})$. Dividing by the positive $\operatorname{covol}(\Lambda)$ proves the estimate. [F1, F2, step 1.1, step 3.1] ∎


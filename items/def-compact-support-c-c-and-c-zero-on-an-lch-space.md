---
id: def-compact-support-c-c-and-c-zero-on-an-lch-space
kind: definition
title: "Compact support, $C_c(X)$, and $C_0(X)$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-locally-compact-space, def-hausdorff-space, def-compact-space]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., §7.1"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Definition

Let $X$ be locally compact Hausdorff and let $f:X\to\mathbb F$ be continuous,
where $\mathbb F$ is $\mathbb R$ or $\mathbb C$. Its support is
$\operatorname{supp}f:=\overline{\{x:f(x)\ne0\}}$. Put
$C_c(X;\mathbb F)=\{f\in C(X;\mathbb F):\operatorname{supp}f\text{ is compact}\}$.
Also $C_0(X;\mathbb F)$ consists of those $f$ for which, for every $\epsilon>0$,
$\{x:|f(x)|\ge\epsilon\}$ is compact. We write $C_c(X)$ for the real space
until the bounded complex $C_0$ theorem is invoked; $C_0(X)$ later means the
complex space when its scalar field matters.

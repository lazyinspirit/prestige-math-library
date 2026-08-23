---
id: ex-volume-of-a-solid-of-revolution-by-cylindrical-shells
kind: example
title: 'The shell and washer methods both give $8\pi/3$ for a rotated parabolic cap'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cylindrical-shell-formula-for-solids-of-revolution, cor-washer-method-for-solids-of-revolution, cor-jordan-content-finite-additivity, thm-graph-of-continuous-function-on-a-compact-set-has-content-zero, thm-jordan-boundary-criterion, thm-substitution, thm-ftc-second-part, thm-linearity-of-the-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Sigurd Angenent, Math 221 lecture notes, Chapter 8 §§4.1 and 5.1"
      url: "https://people.math.wisc.edu/~angenent/Free-Lecture-Notes/free221.pdf"
pipeline_run: null
---

## Example

Revolve the region $0\le x\le2$, $(x-1)^2\le y\le1$ about the $y$-axis. Both cylindrical shells and horizontal washers give volume $8\pi/3$.

## Facts & Assumptions

**Given:** The parabolic-cap region in the Example.

[F1] A solid formed by revolving a nonnegative profile $f$ about the $y$-axis has volume $2\pi\int_a^bxf(x)\,dx$ ([[thm-cylindrical-shell-formula-for-solids-of-revolution]]).

[F2] A washer solid has volume $\pi\int(f^2-g^2)$ ([[cor-washer-method-for-solids-of-revolution]]).

[F3] If two bounded Jordan sets meet in a content-zero set, the content of their union is the sum of their contents ([[cor-jordan-content-finite-additivity]]).

[F4] The graph of a continuous real function on a compact subset of $\mathbb R^m$ has content zero in $\mathbb R^{m+1}$ ([[thm-graph-of-continuous-function-on-a-compact-set-has-content-zero]]).

[F5] A bounded set is Jordan measurable if and only if its boundary has content zero ([[thm-jordan-boundary-criterion]]).

## Verification

**Proof technique:** direct.

1.1 Put $f_1(x)=1$ and $f_2(x)=(x-1)^2$ on $[0,2]$; both are continuous and nonnegative and $f_2\le f_1$ there. By [F1] the solids $S_1$ and $S_2$ obtained by revolving $0\le y\le f_i(x)$ about the $y$-axis are compact and Jordan measurable with contents $2\pi\int_0^2x\,dx=4\pi$ and $2\pi\int_0^2x(x-1)^2\,dx=4\pi/3$. [F1, algebra]

1.2 At height $0\le y\le1$, the washer radii are $1+\sqrt y$ and $1-\sqrt y$. By [F2], its area is $4\pi\sqrt y$, and $\int_0^14\pi\sqrt y\,dy=8\pi/3$. [F2, algebra]

2.1 In cylindrical terms, writing $\rho$ for the distance to the $y$-axis, the solid $S$ of the Example is $\{f_2(\rho)\le y\le f_1(\rho),\ \rho\le2\}$, while $S_i=\{0\le y\le f_i(\rho),\ \rho\le2\}$. Hence $S\cup S_2=S_1$, and $S\cap S_2$ is the set $\{y=f_2(\rho)\}$, the graph of a continuous function on the closed disc of radius $2$, which has content zero by [F4]. The boundary of the bounded set $S$ lies in the union of the boundaries of $S_1$ and $S_2$, which have content zero by [F5] and step 1.1, so [F5] makes $S$ Jordan measurable. [step 1.1, F4, F5, algebra]

3.1 By [F3] applied to $S$ and $S_2$, $\operatorname{cont}(S_1)=\operatorname{cont}(S)+\operatorname{cont}(S_2)$, so step 1.1 gives $\operatorname{cont}(S)=4\pi-4\pi/3=8\pi/3$; this is the shell value $2\pi\int_0^2x\bigl(1-(x-1)^2\bigr)\,dx$, the shell height being the difference of the two profiles. [step 1.1, step 2.1, F3, algebra]

4.1 The two independent descriptions therefore give the same volume $8\pi/3$. [step 1.2, step 3.1] ∎

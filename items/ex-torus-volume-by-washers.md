---
id: ex-torus-volume-by-washers
kind: example
title: 'A torus with major radius $R$ and minor radius $r$ has volume $2\pi^2Rr^2$'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-washer-method-for-solids-of-revolution, prop-riemann-graph-area-equals-jordan-content, cor-disc-jordan-content-is-pi-r-squared]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Sigurd Angenent, Math 221 lecture notes, Chapter 8 §4"
      url: "https://people.math.wisc.edu/~angenent/Free-Lecture-Notes/free221.pdf"
pipeline_run: null
---

## Example

Let $R>r>0$. Rotating the disc $(x-R)^2+y^2\le r^2$ about the $y$-axis produces a ring torus of volume $2\pi^2Rr^2$.

## Facts & Assumptions

**Given:** Reals $R>r>0$ and the stated generating disc.

[F1] A washer solid with outer radius $f$ and inner radius $g$ has volume $\pi\int(f^2-g^2)$ ([[cor-washer-method-for-solids-of-revolution]]).

[F2] A closed disc of radius $r\ge0$ has Jordan content $\pi r^2$ ([[cor-disc-jordan-content-is-pi-r-squared]]).

## Verification

**Proof technique:** direct.

1.1 At height $y\in[-r,r]$, put $q(y)=\sqrt{r^2-y^2}$. The outer and inner radii are $R+q(y)$ and $R-q(y)$; both are nonnegative because $R>r\ge q(y)$. [given, algebra]

2.1 By [F1], the washer area is $\pi((R+q)^2-(R-q)^2)=4\pi Rq$, so the torus volume is $4\pi R\int_{-r}^{r}\sqrt{r^2-y^2}\,dy$. [step 1.1, F1, algebra]

3.1 The integral in step 2.1 is the area under the upper semicircle of radius $r$, hence half the disc content [F2], namely $\pi r^2/2$. Thus the volume is $2\pi^2Rr^2$. [step 2.1, F2, algebra] ∎

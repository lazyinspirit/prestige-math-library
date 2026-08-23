---
id: ex-lateral-area-of-a-right-circular-cone
kind: example
title: 'The lateral area of a right circular cone is $\pi R\sqrt{R^2+H^2}$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-surface-area-of-revolution-formula, thm-algebra-of-derivatives, thm-ftc-second-part]
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
    - title: 'S. Cañez, Northwestern Math 320-3 lecture notes, cone example'
      url: 'https://www.math.northwestern.edu/~scanez/courses/320/notes/lecture-notes-320-3.pdf'
    - title: 'University of Toronto MAT237 notes, Section 5.3'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
pipeline_run: null
---

## Example

For $R,H>0$, the lateral surface area of a right circular cone with base radius $R$ and height $H$ is
$$\pi R\sqrt{R^2+H^2}.$$

## Facts & Assumptions

**Given:** The radius profile $r(s)=Rs/H$ on $0\le s\le H$.

[L1] The surface-of-revolution area is $2\pi\int_0^Hr(s)\sqrt{1+r'(s)^2}\,ds$ when the radius is positive in the open interval and may vanish at an endpoint ([[cor-surface-area-of-revolution-formula]]).

[L2] Derivative algebra gives $r'(s)=R/H$, and the fundamental theorem evaluates the remaining linear integral ([[thm-algebra-of-derivatives]], [[thm-ftc-second-part]]).

## Verification

**Proof technique:** direct.

1.1 The profile is positive for $0<s\le H$ and vanishes only at the apex endpoint $s=0$, so [L1] applies. [given, algebra]

2.1 By [L1] and [L2], the area is $2\pi(R/H)\sqrt{1+R^2/H^2}\int_0^Hs\,ds=\pi RH\sqrt{1+R^2/H^2}$. [step 1.1, L1, L2, algebra]

3.1 Since $H>0$, this equals $\pi R\sqrt{R^2+H^2}$. The apex is a parameter-boundary point and contributes no separate term. [step 2.1, algebra] ∎

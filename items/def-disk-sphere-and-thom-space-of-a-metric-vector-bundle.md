---
id: def-disk-sphere-and-thom-space-of-a-metric-vector-bundle
kind: definition
title: Disk, sphere, and Thom spaces of a metric vector bundle
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-real-and-complex-topological-vector-bundle]
proof_strategy: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Thom spaces, printed pp.194–196"
---

## Definition

Let $\xi=(E\xrightarrow\pi B,h)$ be a rank-$n$ real vector bundle equipped
with a continuous fiber metric.  Define
$$D_h(\xi)=\{v\in E:\|v\|_h\leq1\},\quad S_h(\xi)=\{v\in E:\|v\|_h=1\},$$
and define the Thom space by the based quotient
$$\operatorname{Th}_h(\xi)=D_h(\xi)/S_h(\xi).$$
Here $X/\varnothing$ means $X_+$, so the rank-zero convention is already
included.

For two supplied metrics $h$ and $k$, the canonical radial homeomorphism of
pairs is
$$r_{h,k}(0_b)=0_b,$$
$$r_{h,k}(v)=\frac{\|v\|_h}{\|v\|_k}v\quad(v\ne0).$$
It preserves the base and normalized radius, has inverse $r_{k,h}$, and
descends to the quotient.  Continuity at the zero section follows in a bundle
chart because the ratio of the two norms on the unit sphere is locally
bounded above and below.  The positive-definite interpolation
$h_t=(1-t)h+tk$ gives the canonical radial isotopy $r_{h,h_t}$.

This definition is choice-free once the metric is supplied.  For the empty
base all three spaces are empty except for the quotient basepoint; for rank
zero, $D_h(\xi)=B$, $S_h(\xi)=\varnothing$, and
$\operatorname{Th}_h(\xi)=B_+$.  The zero vector is fixed, sphere and disk
endpoints are preserved, and the formulas for $h=k$ are the identity.

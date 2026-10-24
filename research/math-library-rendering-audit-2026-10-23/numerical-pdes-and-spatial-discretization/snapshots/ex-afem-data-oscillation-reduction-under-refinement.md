---
id: "ex-afem-data-oscillation-reduction-under-refinement"
kind: "example"
title: "Projected data oscillation on a reference triangle"
status: published
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 3
deps:
  - "def-afem-p1-residual-estimator-and-data-oscillation"
  - "alg-dorfler-marking-and-conforming-nvb-refinement"
  - "lem-afem-nvb-shape-regularity-and-three-generation-properties"
  - "lem-afem-data-oscillation-reduction-under-marked-refinement"
  - "def-countable-choice"
proof_strategy: direct
provenance:
  statement: "ai-generated"
  proof: "ai-altered"
generation:
  role: example
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 2"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture2.pdf"
      locator: "§2.1, residual representation, reliability, and bubble lower bound,
        PDF pp. 1–5."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods
        (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and
        cumulative closure complexity."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Example

Assume Countable Choice for the cited Sobolev/L2 interface.

Let $K=\{(x,y):x\ge0,\ y\ge0,\ x+y\le1\}$, let $f=\mathbf1_{\{x+y\le1/2\}}$, and mark this single cell with $\theta_O=1$. Use the uniform three-generation refinement, any estimator marking fraction, and a per-call budget sufficient for completion.

## Facts & Assumptions

[A1] Countable Choice is the background assumption in the cited Sobolev and $L^2$ suppliers ([[def-countable-choice]]).

**Given:** Countable Choice, The P0 cell oscillation and the three-generation refinement rule.

[F1] Cell oscillation is $h_K^2\|f-\Pi_K^0f\|_2^2$ ([[def-afem-p1-residual-estimator-and-data-oscillation]]).

[F2] The marked triangle's edge midpoints and the midpoint on its median occur in the three-generation NVB refinement ([[lem-afem-nvb-shape-regularity-and-three-generation-properties]]).

[F3] The Dörfler-marked three-generation refinement reduces oscillation by at least the factor $\gamma_O=1-\frac34\theta_O$ ([[lem-afem-data-oscillation-reduction-under-marked-refinement]]).

## Verification

1.1 The triangle has area $1/2$, while the subtriangle where $f=1$ has area $1/8$, so $\Pi_K^0f=1/4$. Therefore $\|f-\Pi_K^0f\|_2^2=(1/2)(1/4)(3/4)=3/32$. Since $\operatorname{diam}K=\sqrt2$, the initial oscillation square is $3/16$. [A1, F1, given, algebra]

2.1 The region $x+y\le1/2$ is the corner triangle whose other two vertices are the midpoints of the coordinate-axis edges. By [F2] its boundary is a union of refined edges; each refined leaf lies wholly in this region or its complement. Thus $f$ is constant on every child, every child P0 projection is exact, and the refined oscillation is zero. This verifies the strict reduction and agrees with [F3], which gives $\gamma_O=1/4$ at $\theta_O=1$. [F2, F3, step 1.1, algebra] ∎

## Finite check

The parent mean is $1/4$ and its variance integral is $3/32$; the child partition aligns with the indicator boundary, so each child variance is zero.

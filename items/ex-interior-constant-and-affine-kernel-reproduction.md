---
id: ex-interior-constant-and-affine-kernel-reproduction
kind: example
title: "Interior constant and affine reproduction by a symmetric kernel"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-scaled-symmetric-compact-kernel-family, lem-symmetric-kernel-moment-cancellation, lem-scaled-kernel-moments-and-derivative-bounds]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
axiom_use: "No choice principle is used."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Volker Springel, Smoothed Particle Hydrodynamics in Astrophysics, Annual Review of Astronomy and Astrophysics 48 (2010), author full text"
      url: "https://arxiv.org/html/1109.2219"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Numerical Methods for Partial Differential Equations, Lecture 25: Particle Methods (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/ff7d4237c8f958e646cca0702e4dd17b_MIT18_336S09_lec25.pdf"
generation:
  role: example
---

## Example

Let f(y)=a+b·y be affine on R^d. Full-space smoothing by an admissible symmetric kernel reproduces f exactly: S_εf(x)=f(x) for every ε>0 and x∈R^d.

## Facts & Assumptions

**Given:** An admissible kernel W, ε>0, a∈R, and b∈R^d.

[F1] [[def-scaled-symmetric-compact-kernel-family]]: S_εf(x)=∫f(x−z)W_ε(z)dz.

[F2] [[lem-scaled-kernel-moments-and-derivative-bounds]]: ∫W_ε=1.

[F3] [[lem-symmetric-kernel-moment-cancellation]]: ∫zW_ε(z)dz=0.

## Verification

1.1 Expand the affine function at x: f(x−z)=a+b·(x−z)=f(x)−b·z. [given, algebra]

2.1 Substitute this expansion into [F1]. The constant term integrates to f(x) by [F2], and the linear term vanishes by [F3]. Thus S_εf(x)=f(x). [F1, F2, F3, step 1.1] ∎

---
id: cex-fixed-neighbor-irregular-derivative-not-consistent
kind: counterexample
title: "A disordered fixed-neighbor stencil can fail derivative consistency"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-scaled-symmetric-compact-kernel-family, def-meshfree-cell-quadrature-and-fill-radius, thm-first-derivative-meshfree-convolution-bias, thm-continuous-functions-on-compact-jordan-sets-are-integrable, thm-additivity-over-subintervals]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
axiom_use: "No choice principle is used."
verification:
  precheck: pending
sources:
  references:
    - title: "Volker Springel, Smoothed Particle Hydrodynamics in Astrophysics, Annual Review of Astronomy and Astrophysics 48 (2010), author full text"
      url: "https://arxiv.org/html/1109.2219"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Numerical Methods for Partial Differential Equations, Lecture 25: Particle Methods (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/ff7d4237c8f958e646cca0702e4dd17b_MIT18_336S09_lec25.pdf"
generation:
  role: counterexample
---

## Statement refuted

Keeping the same finite neighbor pattern in units of ε while refining ε alone guarantees consistency of a meshfree particle derivative. The following explicit periodic family refutes this claim for an affine field.

## Facts & Assumptions

**Given:** In one dimension use W(s)=(35/32)(1−s²)³ for |s|≤1 and zero otherwise, W_ε(s)=ε^(−1)W(s/ε), and the periodic node set P_ε={ε(4k+r): k∈Z, r∈{0,3/5,2,7/2}} with its nearest-node intervals, bounded by midpoints of consecutive nodes (the Voronoi cells), and cell volumes V_j. The rule is used on Ω=R with periodic node pattern.

[F1] [[def-scaled-symmetric-compact-kernel-family]]: W_ε is supported on [−ε,ε] and the particle kernel derivative is ∂_xW_ε(x−y).

[F2] [[def-meshfree-cell-quadrature-and-fill-radius]]: the particle sum is Q_hg=Σ_jV_jg(x_j), and an integration-compatible rule satisfies ∫_Ωg=Σ_{j:C_j∩supp(g)≠∅}∫_{C_j}g for each compactly supported continuous g.

[F3] [[thm-first-derivative-meshfree-convolution-bias]]: if f∈C³ has bounded third derivative, then the continuous kernel-gradient target D_εf differs from f′ by at most (m₃/6)ε²||f‴||∞.

[F4] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: a continuous real function on a compact Jordan-measurable set is Riemann integrable there.

[F5] [[thm-additivity-over-subintervals]]: the Riemann integral over a closed interval is the sum of its integrals over any finite partition into adjacent closed subintervals.

## Counterexample

1.1 The adjacent gaps in one period are 3ε/5, 7ε/5, 3ε/2, and ε/2, so the fill radius is h=3ε/4. The four Voronoi-cell lengths per period are 11ε/20, ε, 29ε/20, and ε; hence every volume is at most 2h. If a cell meets B(x,r), its node lies in B(x,r+h). Nodes are separated by at least ε/2, so at most 1+4(r+h)/ε such nodes can lie in that interval. Each cell volume is at most 29ε/20, and r+h≥3ε/4; therefore the total active volume is at most (29/20)ε+(29/5)(r+h)≤(116/15)(r+h)≤8(r+h). The local-volume bound holds with C_L=8. In particular, the cells at −ε/2 and 3ε/5 are [−5ε/4,−ε/4] and [3ε/10,13ε/10], each of volume ε. [given, F2, algebra]

2.1 The nearest-node intervals tile R, repeat with period 4ε, and have gaps between their endpoints only at shared cell boundaries. Every compact support meets finitely many intervals. For any compactly supported continuous g, choose a finite consecutive block of cells containing supp(g); [F4] makes g integrable on its compact union, and repeated [F5] splits that integral into the cell integrals. Cells outside the block have zero integral because they do not meet supp(g). Thus the integration-compatibility identity in [F2] holds for every compactly supported continuous g. [F2, F4, F5, step 1.1, choose]

3.1 On |s|<1, W′(s)=−(105/16)s(1−s²)². For f(y)=y at x=0, set g(y)=y\,\partial_xW_\varepsilon(x-y)|_{x=0}. By [F1], g vanishes outside [−ε,ε], and [F2] defines its particle sum as Q_hg=Σ_jV_jg(x_j). The node at 0 contributes zero; only y=−ε/2 and y=3ε/5 contribute, with values −W′(1/2)/2=945/1024 and −(3/5)W′(3/5)=3024/3125. Thus Q_hg=945/1024+3024/3125, independent of ε. [F1, F2, step 2.1, algebra]

4.1 Here f′(0)=1 and f‴=0, so [F3] gives D_εf(0)=1 exactly. Since each summand in the value from step 3.1 exceeds 1/2, that value is greater than 1 for every ε. The derivative error therefore does not tend to zero although h/ε=3/4 remains fixed. [F3, step 3.1, algebra] ∎

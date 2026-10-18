---
id: cor-na-diagonal-diffusion-scheme-converges-under-comparison
kind: corollary
title: Conditional convergence of the diagonal-diffusion scheme under comparison
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [thm-na-diagonal-diffusion-scheme-half-relaxed-limits, def-half-relaxed-limits, def-na-periodic-diagonal-controlled-diffusion-hjb-problem, def-na-second-order-parabolic-viscosity-solution, thm-heine-borel-rn]
justified_by: []
aliases: []
dependency_level: 6
proof_strategy: direct
axiom_base: The conditional argument uses no choice beyond what is already declared in the half-relaxed-limit theorem.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Guy Barles and Panagiotis E. Souganidis, Convergence of approximation schemes for fully nonlinear second order equations"
      url: https://benjaminmoll.com/wp-content/uploads/2021/04/barles-souganidis.pdf
      locator: "§2, Theorem 2.1 and proof: comparison squeezes upper/lower relaxed limits to a continuous limit, printed pp. 274–276."
    - title: "Michael G. Crandall, Hitoshi Ishii, and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations"
      url: https://arxiv.org/pdf/math/9207212
      locator: "§6, stability and comparison route for half-relaxed limits, printed pp. 34–35."
verification:
  precheck: pass
---

## Statement

For a sequence of diagonal-diffusion grid schemes satisfying the hypotheses
of [[thm-na-diagonal-diffusion-scheme-half-relaxed-limits]], suppose in
addition that the exact periodic Cauchy problem
[[def-na-periodic-diagonal-controlled-diffusion-hjb-problem]] has a comparison
principle for bounded upper semicontinuous subsolutions and bounded lower
semicontinuous supersolutions with ordered relaxed initial traces. Then the
upper and lower half-relaxed limits coincide, define the unique bounded
continuous viscosity solution, and the spatially interpolated numerical
solutions converge locally uniformly on $\mathbb T^d\times[0,T)$ to it.
This corollary is conditional on the stated second-order comparison property;
it does not supply or assert that property.

## Facts & Assumptions

**Given:** The half-relaxed stability statement and the comparison hypothesis
in the corollary.

[F1] The upper limit is a bounded USC subsolution and the lower limit is a
bounded LSC supersolution with the same initial data, and
$\underline U\le\overline U$
([[thm-na-diagonal-diffusion-scheme-half-relaxed-limits]]).

[A1] The stated comparison principle applies to this periodic coefficient
class for the bounded semicontinuous sub- and supersolutions in [F1], with
their relaxed initial ordering. This is an explicit conditional hypothesis,
not a result proved on this page
([[def-na-periodic-diagonal-controlled-diffusion-hjb-problem]],
[[def-na-second-order-parabolic-viscosity-solution]]).

[F2] The set definitions of the relaxed limits imply that if both envelopes
equal a continuous function on a compact set, then a finite subcover of
nearby upper and lower bounds proves uniform convergence there
([[def-half-relaxed-limits]], [[thm-heine-borel-rn]]).

## Proof

1.1 Apply [A1] to the upper subsolution and lower supersolution supplied by [F1]. Their common initial trace gives the required ordering, hence $\overline U\le\underline U$. Together with the reverse inequality in [F1], this proves equality. [A1, F1, algebra]

2.1 The common function is both upper and lower semicontinuous by [F1], hence continuous. It is both a viscosity subsolution and supersolution, so is a viscosity solution with the prescribed initial data. Comparison in [A1] implies uniqueness. [A1, F1, step 1.1]

3.1 Fix $T'<T$ and let $K=[0,1]^d\times[0,T']$ in the periodic lift; this box is compact by Heine--Borel. Write $u$ for the common limit from step 2.1 and fix $\varepsilon>0$. For $z\in K$ and rational $q>0$, include $B(z,q/2)$ in a family when for every integer $k$ with $1/k<q$ and every $y$ with $|y-z|<q$, $|V_k(y)-u(z)|<\varepsilon/3$, and continuity gives $|u(y)-u(z)|<\varepsilon/3$. The set definitions in [F2] guarantee that these balls cover $K$: each point has a positive real radius, and a smaller rational radius works. The family consists of all qualifying pairs, so no radius is selected point by point. By [F2], a finite subcover exists; take the least of its finitely many rational radii. The triangle inequality then gives $|V_k(y)-u(y)|<2\varepsilon/3<\varepsilon$ uniformly on $K$ for all sufficiently large $k$. This proves uniform convergence on the fundamental box through $T'$, hence on the torus and every compact subset of $\mathbb T^d\times[0,T)$. Thus the extensions converge locally uniformly. [F1, F2, step 1.1, step 2.1] ∎
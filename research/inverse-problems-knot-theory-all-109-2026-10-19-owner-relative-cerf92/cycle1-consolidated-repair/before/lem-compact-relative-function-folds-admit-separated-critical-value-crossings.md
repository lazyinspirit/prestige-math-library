---
id: lem-compact-relative-function-folds-admit-separated-critical-value-crossings
kind: lemma
title: "Compact relative function folds admit separated critical-value crossings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-compact-relative-function-paths-have-finitely-many-simple-births
  - thm-parametric-transversality
  - prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Sections4.5–4.6, printed106–112, finite-dimensional parameter transversality and multijet value constraints; finite critical-curve value perturbation proved locally here"
    - title: "Andras Juhasz, Defining and classifying TQFTs via surgery"
      url: "https://arxiv.org/pdf/1408.0668"
      locator: "Theorem2.24, printed23–24, list of elementary function events; neither its Cerf citation nor its global handle-data conclusion is used as a proof here"
---

## Statement

Assume Countable Choice. In the compact relative simple-birth setting, suppose the two endpoint Morse functions have distinct critical values. There is an arbitrarily small further perturbation of the path, fixed near the relative set and the parameter endpoints, with the same spatial critical locus and the same simple folds, for which the only exceptional parameters are finitely many simple births/deaths and finitely many transverse crossings of exactly two Morse critical values. No two events share a parameter, no birth value equals any other critical value, and all other slices have distinct critical values.

In particular two excellent Morse functions on a compact manifold which agree near a prescribed closed set with a common noncritical function admit a relative path having exactly this finite function-event list. This is under Countable Choice and does not import a full-Axiom-of-Choice function-path statement. It supplies no global genericity of descending-field trajectories or marked-diagram move-generation theorem.

## Statement references

[[lem-compact-relative-function-paths-have-finitely-many-simple-births]]

## Facts & Assumptions

**Given:** A compact relative path with its compact smooth critical curve, finitely many nondegenerate folds at distinct interior parameters, and excellent stationary endpoint functions.

[F1] [[lem-compact-relative-function-paths-have-finitely-many-simple-births]] constructs this path under Countable Choice and proves that the two nearby fold branches have distinct critical values.

[F2] Finite-dimensional parameter transversality makes bad slice parameters null; the complement of a null set meets every parameter ball under Countable Choice ([[thm-parametric-transversality]], [[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]).

[F3] Compact-set smooth bumps and smooth parameter-dependent implicit inverses exist ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]], [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]).

## Proof

1.1 Write the given path as $f_t$ and its critical curve as $C$. Choose disjoint small parameter intervals around the finitely many fold times. In each choose a compact smaller fold chart containing both local critical branches and no other critical point, on which their critical values are distinct whenever both branches exist. Such a choice is possible by the local description in [F1] and compact isolation from all other critical points at that parameter. Outside the smaller fold charts, $C$ is compact and its parameter projection is regular. Cover it by finitely many ordinary branch tubes, on each of which the critical locus is the single smooth graph $x=p(t)$; the tube misses every other critical point at each of its parameters. This follows from [F3], and the tube can shrink near its time ends. Use nested fold charts: ordinary-tube supports miss a still smaller closed fold chart, while the common fold tube covers a larger one. The stationary excellent endpoint intervals need no perturbation, so omit smaller such intervals from the cover. Add a fold tube for each fold chart, containing the two local branches together, with no other critical point. Take the time support of every ordinary or fold tube inside the interior parameter interval and the spatial support away from the fixed relative set. [F1, F3, given, construct]

2.1 In an ordinary tube choose a smooth function $\phi_j(x,t)$ which, near its critical branch, equals a scalar time bump $\eta_j(t)$, and which vanishes near every other critical branch. Construct it by multiplying that time bump by a spatial cutoff equal to one on a smaller branch neighborhood; the compact branch segment and [F3] give a uniform smaller tube and cutoff, with all transitions away from $C$. Choose the finitely many smaller supports to cover the ordinary portion of $C$. In a fold tube do the same with a cutoff equal to one near both fold branches together, using one common time bump. It vanishes near all other critical branches. Where its time bump is zero it and all its spatial derivatives vanish. Thus every $\phi_j$ has spatial differential and all higher spatial derivatives zero on a neighborhood of every critical point. The finite family $$f_{t,a}=f_t+\sum_j a_j\phi_j(x,t)$$ has exactly the same spatial critical locus, Hessians and fold derivatives for all sufficiently small coefficients. Indeed on a fixed neighborhood of $C$ these spatial derivatives are unchanged, while on the compact union of the cutoff transition regions $d_xf_t$ has a positive lower bound, so small coefficients create no new critical point. The two fold branches receive exactly the same value shift throughout the smallest fold chart, so their mutual critical-value difference there remains nonzero. On the compact annular part of the larger fold tube outside that smallest chart, their old value gap has a positive minimum whenever both branches exist. Restrict the coefficient ball further to preserve that gap there as well. Thus these two branches never acquire equal values anywhere in their fold tube. At any fixed parameter the value variations of distinct ordinary critical points are independently prescribed by coefficients from their local tubes. The same is true for the fold cluster as one block, independently of all other points; only its two close branches share a shift. [F1, F3, step 1.1, construct]

3.1 On the space of ordered tuples of $r$ distinct nondegenerate critical points at a common parameter, for $r=2,3,4$, the parameter projection is locally a diffeomorphism, so this configuration space is a smooth one-manifold, possibly noncompact. Consider respectively the value conditions $$v_1-v_2=0;\qquad (v_1-v_2,v_1-v_3)=(0,0);\qquad (v_1-v_2,v_3-v_4)=(0,0).$$ The first has codimension one and the others codimension two. The total evaluation maps with coefficient parameter $a$ are transverse to these zero sets. Where all participating critical points are ordinary, their value variations in step2.1 are independent. If a tuple contains one fold branch, its cluster shift and the ordinary shifts are still independent. If it contains both branches, their values are unequal, so the first equation or the triple-equality equations involving both have no solution. In the four-point pair equations, the only remaining case puts the two fold branches in different pairs; the other two points then have independent ordinary shifts, giving the two independent equation derivatives. At most one fold cluster can occur at any parameter by the disjoint fold time intervals. Outside these intervals every point is ordinary. On the stationary excellent endpoint neighborhoods the zero sets are empty. Thus [F2] applies to these three configuration maps. For a good coefficient vector, the pair-equality set is transverse and zero-dimensional, whereas triple equalities and two disjoint simultaneous pair equalities are absent by their codimension being larger than the source dimension one. [F2, step 1.1, step 2.1, construct, algebra]

4.1 At each fold time there are finitely many spatial critical points: all except the single fold point are nondegenerate and locally isolated, and [F1] isolates the fold point, so compactness makes their total finite. Exclude equality of any two of their critical values at this fixed time. Each such equality is a nontrivial affine equation in the coefficients, because the fold cluster and all other critical points have independent value shifts at that parameter. Also exclude equality of any two ordinary critical values at a fold time. These finitely many hyperplanes are null. Choose one arbitrarily small coefficient vector outside their union and the null bad parameter sets from step3.1, using [F2]. Thus no value crossing occurs at a birth parameter and no birth value coincides with another critical value. At a transverse pair-equality point, eliminate the critical-point positions by the parameter implicit theorem: transversality is precisely nonzero derivative of the difference of their two critical-value functions. Hence every crossing is transverse. The two codimension-two exclusions say that exactly one pair crosses at any crossing parameter. [F2, F3, step 2.1, step 3.1, construct, algebra]

5.1 It remains to prove finiteness of crossings; discreteness alone on the noncompact pair configuration space would not suffice. Suppose there were infinitely many. Compactness of the parameter/manifold square gives a convergent subsequence $(t_j,p_j,q_j)\to(t,p,q)$. If $p\ne q$, both are critical with equal values. Neither is a fold point, by step4.1. They therefore have unique smooth ordinary branches near $t$, and transverse value equality is locally isolated by step3.1, contradicting accumulation. If $p=q$ is Morse, [F3] gives only one nearby critical branch, so two distinct points cannot converge to it. If $p=q$ is the fold point, [F1] gives exactly its two nearby branches, and step2.1 preserves their unequal critical values throughout the smaller fold chart. This also contradicts accumulation. Stationary excellent endpoint neighborhoods exclude endpoint accumulation. There are therefore finitely many crossings. Together with the already finite fold list and step4.1 this proves the full event list. Starting with the endpoint interpolation and applying [F1] proves the final existence assertion. All choices of covers, tubes and coefficients are finite; Countable Choice is used only in the stated suppliers, without a residual-set or dependent sequence selection. [F1, F2, F3, step 1.1, step 2.1, step 3.1, step 4.1, construct] ∎

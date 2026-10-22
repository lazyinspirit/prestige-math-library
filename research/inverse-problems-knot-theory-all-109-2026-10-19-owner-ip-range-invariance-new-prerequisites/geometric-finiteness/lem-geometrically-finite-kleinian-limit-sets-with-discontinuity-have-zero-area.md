---
id: lem-geometrically-finite-kleinian-limit-sets-with-discontinuity-have-zero-area
kind: lemma
title: Geometrically finite Kleinian limit sets with nonempty discontinuity domain have zero area
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-lebesgue-density-theorem
  - lem-analytic-quasiconformality-implies-modulus-distortion
  - thm-finite-convex-neighborhood-volume-implies-conical-bounded-parabolic-limit-set
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Brian H. Bowditch, Geometrical finiteness for hyperbolic groups
      url: https://bhbowditch.com/papers/bhb-gf-hyperbolic.pdf
      locator: Complete Sections 3.1–3.4 and Chapter 4 read; the density argument required for the zero-area consequence is supplied locally below
---

## Statement

Assume AC. Let $\Gamma\le\mathrm{PSL}_2(\mathbb C)$ be a discrete torsion-free nonelementary geometrically finite Kleinian group, with limit set $\Lambda$ and nonempty discontinuity domain $\Omega=\widehat{\mathbb C}\setminus\Lambda$. Then $\Lambda$ has spherical area zero. More precisely, no conical limit point is a Lebesgue density-one point of $\Lambda$ in a finite smooth coordinate about it. The parabolic fixed-point set is countable, and these two facts give the zero-area conclusion by the actual Lebesgue density theorem. No Hausdorff-dimension estimate or ergodicity theorem is assumed.

## Facts & Assumptions

**Given:** AC, the discrete torsion-free nonelementary geometrically finite group and the nonempty open discontinuity domain.

[A1] AC and its countable-choice consequence are [[def-axiom-of-choice]] and [[thm-choice-implies-dependent-implies-countable-choice]].

[F1] For a measurable Euclidean set, almost every point of that set has density one, under countable choice. [[thm-lebesgue-density-theorem]]

[F2] The finite convex-neighborhood-volume criterion gives that every limit point is conical or bounded parabolic. [[thm-finite-convex-neighborhood-volume-implies-conical-bounded-parabolic-limit-set]]

[F3] Bounded-displacement model isometries have compact closure, because the frame fiber is compact; their Möbius extensions and the upper half-space distance formula hold. Discrete subgroups are closed and meet compact matrix sets in finite sets. [[lem-local-thin-components-of-torsion-free-kleinian-quotients]], [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]]

[F4] Conformal Möbius charts satisfy the area formula, with smooth positive Jacobian away from their poles, and carry null sets to null sets locally. [[lem-analytic-quasiconformality-implies-modulus-distortion]]

## Proof

1.1 A discrete subgroup of the second-countable matrix group is at most countable: choose for each element a basic open neighborhood containing no other subgroup element, and take its first index in a countable base. Those indices are distinct. Every parabolic point is the unique fixed point of some nonidentity parabolic element, so the set of parabolic points is at most countable and has area zero. The limit set is closed and hence measurable. In finite coordinates spherical area has smooth positive density relative to Euclidean area, so nullity is equivalent in the two area conventions on compact coordinate patches. [A1, F3, F4, given, construct, algebra]

1.2 Fix a conical point and make a Möbius coordinate taking it to infinity. Its conical orbit sequence has distinct elements $\gamma_n$ and points $(b,Y_n)$ on a vertical ray, with $Y_n\to\infty$ and $d(\gamma_no,(b,Y_n))\le B$. Put $a_n(w)=(w-b)/Y_n$. By [F3], pass to a subsequence for which $A_n=a_n\gamma_n$ converges in the model isometry group to a Möbius transformation $A$. Choose a small closed round disc $V$ of positive radius contained in $\Omega$, so that $A(V)$ is finite and avoids zero; this is possible because $\Omega$ is nonempty open and only two points are forbidden by $A$. Shrink it if necessary. Local convergence of the Möbius maps and their inverses supplies constants $0<m<M<\infty$ and a fixed positive-radius Euclidean disc $W\subset A(V)$ such that $A_n(V)\subset\{m<|z|<M\}$ and $W\subset A_n(V)$ for all large $n$. For the latter inclusion choose $W$ with closure in $A(\operatorname{int}V)$; uniform inverse convergence then gives $A_n^{-1}(W)\subset\operatorname{int}V$. [A1, F3, given, construct, algebra]

2.1 The open disc interiors in step 1.2 give holes of definite relative area near the conical point. Since $\gamma_n(V)=b+Y_n A_n(V)\subset\Omega$, apply inversion $J(z)=1/z$ and put $U_n=J\gamma_n(\operatorname{int}V)$. These are subsets of $J(\Omega)$. The annulus bound gives $U_n\subset B(0,C/Y_n)$ for one constant $C$ and all large $n$, since $|b+Y_nz|\ge Y_nm-|b|$. On the fixed disc $W$ the map $z\mapsto1/(b+Y_nz)$ has derivative of absolute value $Y_n/|b+Y_nz|^2\ge c/Y_n$ for one fixed $c>0$, by the upper annulus bound. The conformal area formula [F4] therefore gives $\operatorname{area}(U_n)\ge c^2\operatorname{area}(W)/Y_n^2$. Thus inside the shrinking balls of radius $C/Y_n$ about zero, the complement of $J(\Lambda)$ has area proportion at least $c^2\operatorname{area}(W)/(\pi C^2)>0$. The point zero is not a density-one point of $J(\Lambda)$. This conclusion uses actual shrinking holes; it does not infer null area merely from empty interior. [F4, step 1.2, algebra]

3.1 Density one is invariant under a smooth conformal coordinate change with nonzero derivative at the point. Indeed on sufficiently small neighborhoods both that coordinate map and its inverse are Lipschitz, with Jacobians bounded above and below by positive constants. The image of the complement in a target radius-$r$ ball has area at most a constant times the source complement area in a radius-$Cr$ ball, by [F4]. If the latter is $o(r^2)$, the former is $o(r^2)$ as well; the inverse proves the converse. Therefore step 2.1 shows that the original conical point is not a density-one point of $\Lambda$ in any finite smooth coordinate about it. In each of two sphere coordinate charts [F1] says almost every point of the measurable limit set is a density-one point. By [F2], every nonparabolic limit point is conical, whereas step 1.1 makes the parabolic set null. Thus the limit set in that chart is null. Two charts cover the sphere, and [F4] identifies their area-null convention with spherical area. This proves the assertion in full. [F1, F2, F4, step 1.1, step 2.1, algebra] ∎

## Actual reading and scope

The actual four-step Lebesgue density theorem and the complete three-step almost-everywhere Lebesgue-point supplier were read, including their countable-choice hypotheses. The full local reverse geometric-finiteness criterion and model suppliers were read during their development. The proof above supplies the conical rescaling and the quantitative area holes explicitly. It requires nonempty discontinuity domain; the empty-domain geometrically finite case is a finite-volume lattice case, not a zero-area assertion.

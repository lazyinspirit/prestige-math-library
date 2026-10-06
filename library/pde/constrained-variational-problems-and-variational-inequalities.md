---
page: constrained-variational-problems-and-variational-inequalities
title: "Constrained Variational Problems and Variational Inequalities"
status: published
items: ["thm-direct-method-on-a-weakly-closed-constraint-set", "lem-strong-ltwo-compactness-preserves-unit-normalisation", "thm-banach-implicit-function-theorem-for-a-split-surjective-derivative", "lem-regular-banach-constraint-directions-are-realised-by-level-set-curves", "lem-tangent-space-to-a-regular-level-set-is-the-kernel-of-the-constraint-derivative", "lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum", "lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family", "thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint", "thm-finite-regular-constraint-lagrange-multiplier-rule", "lem-lagrange-multiplier-is-unique-when-constraint-gradients-are-independent", "lem-hilbert-projection-characterisation-by-a-variational-inequality", "lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive", "thm-stampacchia-variational-inequality", "lem-one-dimensional-trace-truncation-compatibility", "def-closed-convex-obstacle-set-and-variational-inequality", "lem-the-obstacle-admissible-set-is-closed-convex-and-weakly-closed", "thm-existence-and-uniqueness-for-the-obstacle-problem", "thm-lipschitz-stability-of-strongly-monotone-variational-inequalities", "lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions", "cor-obstacle-complementarity-in-distribution-form", "cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity", "thm-lewy-stampacchia-bounds-in-the-sourced-obstacle-regularity-class", "lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation", "thm-first-dirichlet-eigenfunction-by-constrained-minimisation", "thm-higher-eigenvalues-by-orthogonality-constrained-minimisation", "rem-pointwise-and-integral-constraints-have-different-regularity-tests"]
examples: []
---

This page develops variational problems whose admissible set is constrained in
one of the two ways that dominate the calculus of variations: by a closed
convex set, which produces a variational inequality, or by a regular level set of a differentiable map, which produces
Lagrange multipliers. It then carries both mechanisms through the obstacle
problem and closes with the variational characterisation of the Dirichlet
eigenvalues.

The convex-constraint half begins with the geometry of Hilbert space. The
characterisation of the metric projection by its variational inequality and
the nonexpansiveness of the projection feed the Lions--Stampacchia argument:
for a bounded coercive bilinear form on a real Hilbert space and a nonempty
closed convex admissible set there is exactly one solution of the variational
inequality, obtained as the fixed point of a contraction built from the
projection. The solution depends Lipschitz continuously on the data, with
constant governed by the coercivity constant. On the Banach-space side the
direct method is set up on weakly sequentially closed constraint sets, the
strong $L^2$ compactness inherited from Rellich's theorem keeps unit
normalisation in the limit, and convex norm-closed sets are recognised as
weakly closed.

The regular-constraint half proves the finite-dimensional duality lemma on
independent functionals, a Banach implicit function theorem for a derivative
that is surjective with a complemented kernel, the realisation of every
kernel direction by a differentiable level-set curve, and the identification
of the tangent space with the kernel of the constraint derivative. The
differential of the constrained functional annihilates that kernel, and the
multiplier rules for finitely many constraints and for one regular constraint
in Hilbert space turn this into $DI(u)=\sum_i\lambda_iDG_i(u)$. The
multipliers are unique exactly when the constraint gradients are independent;
a proportional-constraint counterexample shows how badly this fails otherwise.

The obstacle problem is the model inequality-constrained problem. The
admissible set $\{v\in H^1_0(\Omega):v\ge\psi\}$, with the stated trace
compatibility $T\psi\le0$, is nonempty, convex, closed
and weakly closed; the symmetric energy has a unique minimiser, which is the
unique solution of the obstacle variational inequality; the reaction is a
nonnegative distribution that vanishes on the open noncontact set when $u$
and $\psi$ have continuous representatives, is supported on the contact set
when those representatives are continuous and it is represented by a
nonnegative Radon measure, and obeys the Lewy--Stampacchia bound $0\le\Lambda_u\le(L\psi-f)^+$
in the stated $L^2$ regularity class. The one-dimensional example computes
the solution, the contact set and the reaction explicitly, and the companion
counterexamples delimit the trace, regularity and product hypotheses.

The page closes with the spectral application: the first Dirichlet
eigenfunction minimises the Dirichlet energy on the $L^2$-unit sphere, every
minimiser is a weak eigenpair, some minimiser is nonnegative, and the higher
eigenvalues are obtained by minimising over the unit sphere intersected with
the orthogonal complement of the preceding eigenfunctions. Conventions and
choice principles are declared per item: the weak-compactness and direct-method
statements assume the ultrafilter lemma, DC and HB; the multiplier, truncation,
Hilbert-Sobolev and absolute-value interfaces use the Axiom of Choice; the
projection and measure-theoretic sign lemmas use Countable Choice, while
Rellich compactness assumes the Axiom of Choice; and the
implicit-function, trace and integration-by-parts suppliers declare their own
choice footprints.

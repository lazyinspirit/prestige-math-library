---
id: rem-complex-bishop-phelps-for-general-convex-sets
kind: remark
title: Complex Bishop--Phelps for general convex sets
status: draft
origin: pipeline
proved_here: false
deps: [thm-bishop-phelps]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Victor Lomonosov, A Counterexample to the Bishop-Phelps Theorem in Complex Spaces"
      url: "https://carmamaths.org/resources/jon/Preprints/Papers/Published-InPress/Cone-closure/lomonosov1.pdf"
      locator: "Theorem 1, pp. 3--4, and Theorem 2, pp. 4--5, of the five-page paper"
external_dependency:
  source_url: "https://carmamaths.org/resources/jon/Preprints/Papers/Published-InPress/Cone-closure/lomonosov1.pdf"
  exact_statement: "There is a complex Banach space X1 and a closed bounded convex subset S1 for which only the zero functional attains its maximum modulus; hence S1 has no support points."
  local_proof_attempt: "The source uses the predual of H-infinity, maximum-modulus powers, a norm-preserving extension and Riesz representation on the maximal ideal space, followed by a quotient by point evaluation. Those analytic prerequisites are not developed locally here."
  necessity: "The design requires the sharp warning that the real general closed-bounded-convex Bishop--Phelps theorem does not extend unrestrictedly to complex spaces. This remark is non-load-bearing."
---

## Statement

Lomonosov constructed a complex Banach space $X_1$ and a closed bounded convex
set $S_1\subseteq X_1$ having no support points.  Here a support point is a
point $x\in S_1$ at which some nonzero complex-linear functional attains
$$
 \sup_{y\in S_1}|f(y)|.
$$
Equivalently in his construction, the zero functional is the only functional
whose modulus attains its supremum on $S_1$.

Consequently the real general-convex-set conclusion in
[[thm-bishop-phelps]] has no unrestricted complex analogue.  There is no
conflict with that local theorem: under its declared DC and relative
Hahn--Banach assumptions it proves the complex result only for the closed unit
ball, not for every closed bounded convex set.

## Remarks

**Externally proved; not proved here.**  Lomonosov first takes the closed convex
hull of the point evaluations inside a predual of $H^\infty$.  Lemmas 1--2 and
Theorem 1 use powers, the maximum-modulus principle, a norm-preserving extension
to $C(M)$ on the maximal ideal space, and Riesz representation to show that its
support functionals form only the line spanned by the identity function.  He
then quotients the predual by the line spanned by evaluation at zero.  The dual
of the quotient is the annihilator of that evaluation, whose intersection with
the preceding support-functional line is zero; Theorem 2 concludes that the
quotient image $S_1$ has no support points.

This item records only that source boundary.  It is not a dependency of any
other item in this pair, and neither a citation nor the summary above is treated
as a local proof of Lomonosov's analytic construction.

---
id: thm-cohomological-brauer-classes-spread-out-over-finite-set-of-places
kind: theorem
title: "Cohomological Brauer classes spread out over S-integers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-global-field
  - def-cohomological-brauer-group-of-a-variety
  - lem-etale-multiplicative-cohomology-over-s-integer-limits
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the actual étale-cohomology limit supplier."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Étale cohomology and limits"
      url: "https://stacks.math.columbia.edu/tag/09YU"
      locator: "Finite-limit cohomology context; the finite-place torsion spreadout is reconstructed here."
verification: {}
---

## Statement

Assume AC. Let $K$ be a global field, let $X$ be a quasi-compact quasi-separated finite-type $K$-scheme, and let $\alpha_1,\dots,\alpha_m\in\operatorname{Br}(X)=H^2_{\mathrm{et}}(X,\mathbb G_m)_{\mathrm{tors}}$. There are a finite set $S$ of places containing the archimedean ones, a quasi-compact quasi-separated finite-type $\mathcal O_{K,S}$-model $\mathcal X$ of $X$, and classes $\widetilde\alpha_i\in\operatorname{Br}(\mathcal X)$ restricting to $\alpha_i$. This includes characteristic-primary torsion in the function-field case.

## Facts & Assumptions

**Given:** The global field, finite-type scheme and finite family of cohomological Brauer classes in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Global fields and their $S$-integer rings use the stated finite-place localization convention. [[def-global-field]]

[F2] The cohomological Brauer group is the torsion subgroup of étale $H^2$ of $\mathbb G_m$. [[def-cohomological-brauer-group-of-a-variety]]

[F3] Actual étale $\mathbb G_m$ cohomology over finite-type qcqs $S$-integer models commutes with the filtered localization limit, without excluding characteristic-primary torsion. [[lem-etale-multiplicative-cohomology-over-s-integer-limits]]

## Proof

**Proof technique:** descend the classes and then descend their torsion equations.

1.1 Choose an initial finite set $S_0$ containing the archimedean places and at least one place in the function-field case. A finite affine cover of $X$, finitely many algebra presentations and overlap maps, and the finitely many gluing identities have coefficients in $K$. After enlarging $S_0$, these data define a qcqs finite-type $\mathcal O_{K,S_0}$-model $\mathcal X_0$. Its base changes to larger $S$ form the affine-transition system with generic fibre $X$. [A1, F1, given, choose, construct, algebra]

2.1 By [F3], each $\alpha_i$ is the restriction of some class in $H^2(\mathcal X_S,\mathbb G_m)$ at a finite stage. There are finitely many classes, so one enlarged $S$ works for all of them. Choose positive integers $n_i$ with $n_i\alpha_i=0$. The stage classes need not yet be torsion, but [F3] also says that an equality at the limit is witnessed at a later stage. Enlarging $S$ once more makes each $n_i$ times its descended class vanish on the common model. [A1, F2, F3, step 1.1, choose, construct, algebra]

3.1 The resulting classes are torsion and restrict to the original $\alpha_i$, so [F2] identifies them as elements of $\operatorname{Br}(\mathcal X)$. No inverse of any $n_i$ was required, and hence characteristic-primary torsion is included. The empty family requires no cohomology choices. [F2, step 2.1, algebra] ∎

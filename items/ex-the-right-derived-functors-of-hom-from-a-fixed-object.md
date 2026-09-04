---
id: ex-the-right-derived-functors-of-hom-from-a-fixed-object
kind: example
title: "The right derived functors of Hom from a fixed object"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor, prop-positive-right-derived-functors-vanish-on-injective-objects, thm-hom-is-left-exact-in-each-variable]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to Homological Algebra, 2nd ed."
      url: "https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html"
pipeline_run: frontier-29
---
## Example

Assume the Axiom of Dependent Choice. Fix an object $X$ in an abelian category $\mathcal A$, and consider the
covariant functor $\mathcal A(X,-):\mathcal A\to\mathbf{Ab}$. For supplied
injective resolution data $I$ on a class $\mathcal D$,
$$R_I^0\mathcal A(X,-)\cong\mathcal A(X,-),$$
and if $J\in\mathcal D$ is injective then
$$R_I^n\mathcal A(X,-)(J)=0\qquad(n>0).$$
This is the basic right-derived pattern that later becomes Ext.
## Facts & Assumptions

**Given:** The Axiom of Dependent Choice, an object $X$, supplied injective
resolution data $I$, and an injective object $J\in\mathcal D$.

[L1] Hom is left exact in each variable, so $\mathcal A(X,-)$ is left exact ([[thm-hom-is-left-exact-in-each-variable]]).

[L2] The zero-th right derived functor of a left exact functor recovers the functor ([[thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor]]).

[L3] Positive right derived functors vanish on injective objects ([[prop-positive-right-derived-functors-vanish-on-injective-objects]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the functor $\mathcal A(X,-)$ satisfies the hypothesis of [L2], so $R_I^0\mathcal A(X,-)\cong\mathcal A(X,-)$. [L1, L2, given]

2.1 If $J$ is injective, then [L3] gives $R_I^n\mathcal A(X,-)(J)=0$ for every $n>0$. This is exactly the displayed example. [L3, step 1.1] ∎

---
id: cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor
kind: counterexample
title: "L_0 of a non-right-exact functor need not recover the functor"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
deps: [fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself, thm-hom-is-left-exact-in-each-variable, thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor, def-left-derived-object-relative-to-projective-resolution-data]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to Homological Algebra, 2nd ed."
      url: "https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html"
pipeline_run: frontier-29
---
## Statement refuted

For an additive functor, the zeroth left derived object always agrees with the
original functor value.
## Facts & Assumptions

**Given:** The functor
$F(M)=\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2\mathbb Z,M)$, and supplied
projective resolution data $P$ on a class containing $\mathbb Z/2\mathbb Z$
that assigns it the standard projective resolution below.

[L1] The companion false statement is false
([[fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself]]).

[L2] Hom is left exact in each variable
([[thm-hom-is-left-exact-in-each-variable]]).

[L3] Right exactness is sufficient for the natural recovery of $F$ from $L_0$
([[thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor]]).

[L4] Left derived objects are computed from the homology of an applied deleted
projective resolution
([[def-left-derived-object-relative-to-projective-resolution-data]]).

## Counterexample

**Proof technique:** direct.

1.1 The functor $F$ is additive and, by [L2], left exact. On the standard resolution $0\to\mathbb Z\xrightarrow{\times2}\mathbb Z\to\mathbb Z/2\to0$ assigned by $P$, both groups $\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,\mathbb Z)$ vanish. Therefore [L4] gives $$L_0^PF(\mathbb Z/2)=H_0(0\to0)=0.$$ [L2, L4, given, algebra]

2.1 On the other hand, $F(\mathbb Z/2)=\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,\mathbb Z/2)\neq0$. So $L_0^PF(\mathbb Z/2)\neq F(\mathbb Z/2)$. This concrete computation realises the failure announced by [L1] and shows that the right-exactness hypothesis in the recovery theorem [L3] cannot simply be omitted. [L1, L3, step 1.1] ∎

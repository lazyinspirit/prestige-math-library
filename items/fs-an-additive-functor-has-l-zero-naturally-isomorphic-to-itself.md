---
id: fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself
kind: false-statement
title: "FALSE: every additive functor has L_0 naturally isomorphic to itself"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor, def-left-derived-object-relative-to-projective-resolution-data, def-additive-functor]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to Homological Algebra, 2nd ed."
      url: "https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html"
pipeline_run: frontier-29
---
## Statement

Every additive functor $F$ has $L_0F$ naturally isomorphic to $F$.
## Facts & Assumptions

**Given:** The additive functor
$F(M)=\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2\mathbb Z,M)$ on abelian
groups, and supplied projective resolution data $P$ on a class containing
$\mathbb Z/2\mathbb Z$ that assigns it the standard resolution below.

[L1] If $F$ is right exact, the zero-th left derived functor recovers $F$
naturally
([[thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor]]).

[L2] Left derived objects are computed from the homology of an applied deleted
projective resolution
([[def-left-derived-object-relative-to-projective-resolution-data]]).

[L3] Additivity means preservation of sums on hom-groups
([[def-additive-functor]]).

## Refutation

**Proof technique:** direct.

1.1 The functor $F$ is additive by [L3], but it is enough to compute its value on the standard projective resolution $$0\to\mathbb Z\xrightarrow{\times2}\mathbb Z\to\mathbb Z/2\mathbb Z\to0.$$ Applying $F$ to the deleted resolution gives $$0\to\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,\mathbb Z)\xrightarrow{\times2} \operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,\mathbb Z)\to0,$$ and both displayed Hom groups are $0$. [L2, L3, given, algebra]

2.1 Therefore $L_0^PF(\mathbb Z/2)=0$, while $F(\mathbb Z/2)=\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,\mathbb Z/2)\neq0$. So $L_0^PF$ is not naturally isomorphic to $F$ for this supplied datum and additive functor. Thus additivity alone does not guarantee recovery; [L1] records right exactness as a sufficient hypothesis, and the displayed claim is false. [L1, step 1.1] ∎

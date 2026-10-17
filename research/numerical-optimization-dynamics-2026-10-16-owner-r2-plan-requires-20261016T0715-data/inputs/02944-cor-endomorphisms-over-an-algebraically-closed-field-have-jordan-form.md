---
id: cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form
kind: corollary
title: "Every finite-dimensional endomorphism over an algebraically closed field has Jordan form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-jordan-form-exists-iff-the-characteristic-polynomial-splits, def-algebraically-closed-field, cor-factor-theorem-over-a-commutative-ring]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Section 8C"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Every endomorphism of a finite-dimensional vector space over an algebraically closed field has a Jordan canonical form over that field, including the endomorphism of the zero space.

## Facts & Assumptions

**Given:** A finite-dimensional vector space over an algebraically closed field $F$ and an endomorphism $T$.

[L1] Every nonconstant polynomial over an algebraically closed field has a root in that field ([[def-algebraically-closed-field]]).

[L2] If $a$ is a root of $p\in F[x]$, then $p=(x-a)q$ for some $q\in F[x]$ ([[cor-factor-theorem-over-a-commutative-ring]]).

[L3] An endomorphism has Jordan form over $F$ exactly when its characteristic polynomial splits over $F$ ([[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]]).

## Proof

**Proof technique:** induction on $\deg\chi_T$.

1.1 If $\deg\chi_T=0$, then $\chi_T=1$ and [L3] gives the empty Jordan form. [base, L3]

1.2 The induction is on the degree of an arbitrary nonzero polynomial over $F$, not only of a characteristic polynomial, since the factor produced below need not itself be one. If the degree is positive, [L1] supplies a root $a\in F$ and [L2] writes $\chi_T=(x-a)q$ with $\deg q$ smaller; the induction hypothesis applies to $q$ in that strengthened form and factors it into linear factors, so $\chi_T$ splits. [L1, L2, ih]

2.1 Fact [L3] now gives a Jordan canonical form for $T$, completing the induction. [step 1.1, step 1.2, L3, discharge-induction] ∎

---
id: thm-dedekind-pid-class-group-characterisation
kind: theorem
title: "A Dedekind domain is a PID exactly when its class group is trivial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-principal-ideal-domain, def-ideal-class-group-of-a-domain, thm-unique-factorisation-of-ideals-in-dedekind-domains, lem-ideal-class-group-well-defined]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a Dedekind domain. Then $R$ is a principal ideal domain if and only
if its ideal class group $\operatorname{Cl}(R)$ is trivial.

## Facts & Assumptions

**Given:** The Axiom of Choice and a Dedekind domain $R$.

[F1] A principal ideal domain is a domain in which every ideal is principal ([[def-principal-ideal-domain]]).

[F2] The class group is the quotient of nonzero fractional ideals by principal fractional ideals ([[def-ideal-class-group-of-a-domain]]).

[L1] Nonzero ideals factor uniquely into prime powers in a Dedekind domain ([[thm-unique-factorisation-of-ideals-in-dedekind-domains]]).

[L2] Multiplication descends to the class-group quotient ([[lem-ideal-class-group-well-defined]]).

## Proof

**Proof technique:** direct.

1.1 If $R$ is a PID, then every nonzero fractional ideal is principal, so the quotient in [F2] has exactly one class. Thus $\operatorname{Cl}(R)$ is trivial. [F1, F2, given]

1.2 Conversely, assume $\operatorname{Cl}(R)$ is trivial. Then every nonzero prime ideal has trivial class and is therefore principal. By [L1], every nonzero integral ideal is a finite product of principal prime ideals, hence principal. Therefore [F1] makes $R$ a PID. [F1, F2, L1, L2, given]

2.1 This proves the equivalence. [step 1.1, step 1.2] ∎

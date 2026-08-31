---
id: ex-pid-as-dedekind-domain
kind: example
title: "Every nonfield PID is a Dedekind domain with trivial class group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-ideal-domain, cor-principal-ideal-domains-are-noetherian, thm-local-characterisation-of-dedekind-domains, thm-dedekind-pid-class-group-characterisation]
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

## Example

Assume the Axiom of Choice. Every principal ideal domain that is not a field is a Dedekind domain, and its
ideal class group is trivial.

## Facts & Assumptions

**Given:** A principal ideal domain $R$ that is not a field.

[F1] In a principal ideal domain every ideal is principal ([[def-principal-ideal-domain]]).

[L1] Every principal ideal domain is Noetherian ([[cor-principal-ideal-domains-are-noetherian]]).

[L2] A nonfield Noetherian domain is Dedekind exactly when every nonzero proper ideal is locally principal ([[thm-local-characterisation-of-dedekind-domains]]).

[L3] A Dedekind domain is a PID exactly when its class group is trivial ([[thm-dedekind-pid-class-group-characterisation]]).

## Verification

**Proof technique:** direct.

1.1 By [F1], every nonzero proper ideal of $R$ is principal, hence remains principal after localising at any maximal ideal. The ring is Noetherian by [L1], so [L2] makes $R$ a Dedekind domain. [F1, L1, L2]

2.1 Now [L3] applies to the Dedekind domain $R$ and gives that its class group is trivial. [L3, step 1.1] ∎

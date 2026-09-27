---
id: rem-riemann-integral-choice-ledger
kind: remark
title: "Choice ledger for the Riemann integral: the page results are proved in ZF"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [thm-lebesgue-criterion, lem-countable-union-of-compact-content-zero-sets-is-null-in-zf, thm-riemann-criterion, thm-darboux-equals-riemann, thm-heine-cantor-r, lem-finite-choice]
justified_by: []
aliases: []
landmark: false
short: "choice ledger for the Riemann integral"
sources:
  scraped: []
  references:
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
verification:
  precheck: n/a
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-outside-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

The results on this page are proved in ZF. Their proofs use finite witness
selection, explicit formulas, completeness of the real numbers, and finite
subcovers. The only countable union in the proof of the Lebesgue criterion is a
union of compact content-zero sets; its interval covers are chosen by least
natural-number codes, so no countable-choice premise is spent.

## The ledger, item by item

| item | choice used | where the apparent choice is resolved |
|---|---|---|
| [[def-partition-and-refinement]] | none | finite lists and recursion |
| [[def-darboux-sums]] | none | canonical suprema and infima |
| [[lem-refinement-inequalities]] | none | finite induction |
| [[def-darboux-integral]] | none | supremum and infimum over the set of partitions |
| [[lem-integral-elementary-bounds]] | none | ordered-field bounds |
| [[thm-riemann-criterion]] | none | finitely many existential instantiations |
| [[def-tagged-partition-and-riemann-sum]] | none | tags exhibited by formulas |
| [[thm-darboux-equals-riemann]] | none | finite listed choice |
| [[thm-continuous-implies-integrable]] | none | current [[thm-heine-cantor-r]] proof uses a finite subcover |
| [[thm-monotone-implies-integrable]] | none | partition formula in $N$ |
| [[thm-finitely-many-discontinuities-integrable]] | none | choice-free Heine–Cantor supplier |
| [[lem-countable-union-of-compact-content-zero-sets-is-null-in-zf]] | none | least-coded rational finite covers |
| [[thm-lebesgue-criterion]] | none | compact content-zero superlevel sets and the preceding lemma |
| [[cor-countably-many-discontinuities-integrable]] | none | direct countable-set null cover |
| [[fs-bounded-implies-riemann-integrable]] | none | explicit Dirichlet witness |
| [[fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set]] | none | explicit fat-Cantor witness |
| [[fs-nonnegative-integrable-with-zero-integral-vanishes]] | none | explicit Thomae witness |
| [[fs-pointwise-limit-of-riemann-integrable-is-integrable]] | none | explicit pointwise-limit witness |

## The three potentially misleading steps

**Finite tags.** In [[thm-darboux-equals-riemann]], a fixed partition has
finitely many subintervals. The required list of tags exists by finite
induction ([[lem-finite-choice]]); it is not an instance of countable choice.

**Partitions for each tolerance.** [[thm-riemann-criterion]] asserts that for
each positive tolerance a suitable partition exists. Its proof never assembles
these partitions into a sequence. The later Lebesgue-criterion proof likewise
uses one partition for each fixed tolerance and oscillation threshold; it does
not choose all such partitions simultaneously.

**The discontinuity set.** In the forward half of
[[thm-lebesgue-criterion]], each oscillation superlevel set is compact and has
content zero. The set of discontinuities is their countable union. The
choice-free lemma [[lem-countable-union-of-compact-content-zero-sets-is-null-in-zf]]
encodes finite rational covers by naturals, takes the least valid code for each
superlevel set, and combines those finite covers with a fixed pairing map.
The converse implication uses the finite-cover and Cousin partition argument.

## Scope of this accounting

The general union of an arbitrary sequence of null sets is a separate claim
whose standard proof selects one cover for each set. This page uses the more
specific compact content-zero lemma, so it makes no assertion here about the
choice strength or independence of the general claim. The ledger records the
premises of the proofs now on disk, rather than an optimality theorem for every
possible proof.

---
id: ex-record-level-versus-client-level-adjacency
kind: example
title: Record-level versus client-level adjacency
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-differential-privacy-and-adjacency
  - rem-differential-privacy-scope-and-limitations
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Example

Model a database as a finite-support count function $D:U\to\mathbb N_0$, where $U$ is the record universe, and call two databases neighbors when one is obtained from the other by adding or removing one record occurrence. Suppose one client contributes 100 identified record occurrences to a database. Removing or adding any one of those occurrences is one neighboring step, while changing the database by the client’s entire 100-record contribution is not one neighboring step. A client-level guarantee therefore requires a client-level adjacency relation that treats that full contribution as one change and a proof using that relation.

## Example references

[[def-differential-privacy-and-adjacency|The add/remove-one-occurrence database relation]]

[[rem-differential-privacy-scope-and-limitations|Record-level privacy is distinct from client-level privacy]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, §§2.1 and 2.3, printed pp. 11–25.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §§1.6 and 9.2, PDF pp. 9–10 and 93–94.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** A finite-support count database $D_0$ and 100 identified record occurrences contributed by one client.

[F1] [[def-differential-privacy-and-adjacency|Database]] is a finite-support record-count function, and two databases are neighbors exactly when one is obtained from the other by adding or removing one record occurrence.

[F2] [[rem-differential-privacy-scope-and-limitations|Scope distinction]]: the page definition is central record-level add/remove privacy and does not itself define client-level privacy.

## Verification

1.1 List the client’s 100 occurrences as $u_1,\ldots,u_{100}$, with repetitions allowed. For $j=0,\ldots,100$, let $D_j=D_0+\sum_{\ell=1}^{j}\mathbf1_{\{u_\ell\}}$. Then $D_{j-1}$ and $D_j$ differ by adding one occurrence, so [F1] makes each consecutive pair neighbors. [F1, given, construct]

2.1 The count-function difference between $D_0$ and $D_{100}$ has total absolute count $\sum_{u\in U}|D_{100}(u)-D_0(u)|=100$, counting repeated contributions with multiplicity. A single add/remove neighbor pair has this total equal to $1$ by [F1]. Hence the full contribution is not a record-level neighboring step. Treating it as one step changes the adjacency relation, and [F2] says that any claimed client-level guarantee needs that relation and a proof under it. [F1, F2, step 1.1, algebra] ∎

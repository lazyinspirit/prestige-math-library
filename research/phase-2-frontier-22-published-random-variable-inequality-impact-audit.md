# Frontier-22 published random-variable inequality impact audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit reads the complete published random-variable Hölder and
Cauchy--Schwarz corollaries and the exact clauses they import from expectation,
integral Hölder and the `L^2` Cauchy--Schwarz corollary. It checks the finite
product-integrability and equality clauses used by the active martingale work;
it is not a full transitive audit of every inequality consumer.

Before classification, the whole canonical ledger and index were searched by
both exact IDs, title spellings, aliases, the expectation/Hölder/equality
mechanisms and all declared supplier IDs. Both targets were previously
unclassified. Their three affected suppliers already have unique A-P rows and
are not duplicated. No published item or workflow state was edited.

## Audited downstream impacts pending the common repair

| Item | SHA-256 | Exact path and disposition |
|---|---|---|
| `cor-holder-inequality-for-random-variables` | `8644f3cd4f2a6f68ab84299e4feb1534ff195dc6267c9044cb7b2bc885aa49ae` | Its probability-space specialization and expectation rewrite are correct, but it directly uses A-P `def-expectation-of-a-nonnegative-or-integrable-random-variable` and `thm-holder-inequality-for-integrals`. Apply the common simple/nonnegative-integral, MCT and `L^1` repair upstream, then retain this one-line specialization. New A-P impact. |
| `cor-cauchy-schwarz-for-random-variables` | `701e69533bbc13b6efda1ca593c9174d5066fd6e88f1f38f52c596422c3b3846` | The bound is the correct `p=q=2` specialization and the equality statement exactly specializes the affected `cor-cauchy-schwarz-inequality-for-l-two`; it also cites the affected random-variable Hölder corollary above. Complete the common integral repair and revalidate both direct suppliers. New A-P impact. |

## Frontier impact and limits

The active martingale uses need only finite-valued product integrability for
square-integrable or conjugate-moment random variables. Those clauses are
mathematically correct and are covered by the already identified common
integral repair, so this audit adds no distinct current-frontier blocker,
supplier or theorem pair.

No external source retrieval was needed because the two arguments are direct
specializations of the fully read local statements. This receipt does not
certify every downstream random-variable inequality consumer.

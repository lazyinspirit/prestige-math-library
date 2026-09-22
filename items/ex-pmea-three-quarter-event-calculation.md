---
id: ex-pmea-three-quarter-event-calculation
kind: example
title: "The three-quarter event calculation in the PMEA proof"
status: published
origin: pipeline
deps: [lem-pmea-three-quarter-separation-estimate, def-product-measure-extension-axioms-pmea-and-pmea-sigma]
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Real-valued-measurable cardinals"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/rvmc.pdf"
      locator: "Lemma 8E and its proof, printed p. 70"
verification:
  audited: 2026-09-22
---

## Example

Let $\nu$ be a full extension of a fair-coin product measure on $2^I$
([[def-product-measure-extension-axioms-pmea-and-pmea-sigma]]) and let
$E, F, D \subseteq 2^I$ be sets with $\nu(E) > 3/4$, $\nu(F) > 3/4$ and
$\nu(D) = 1/2$, where $D = \{z : z(i) \ne z(j)\}$ is the difference event of
two distinct coordinates $i \ne j$. The example computes that
$\nu(E \cap F) > 1/2$ and $\nu(E \cap F \cap D) > 0$. This is only the
measure-theoretic calculation consumed by the separation lemma; the lemma's
additional definitions relate its good events to disjoint neighbourhoods.

## Facts & Assumptions

**Given:** A probability $\nu$ on the full power set of $2^I$, sets $E,F$ with $\nu(E), \nu(F) > 3/4$, and a set $D$ with $\nu(D) = 1/2$.

[F1] Probability and complement: $\nu(A^c) = 1 - \nu(A)$ for every $A$, and $\nu(2^I) = 1$ ([[def-product-measure-extension-axioms-pmea-and-pmea-sigma]]).

[L1] Subadditivity for two or three sets: $\nu(A \cup B) \le \nu(A) + \nu(B)$, hence for three sets as well ([[def-product-measure-extension-axioms-pmea-and-pmea-sigma]]).

[L2] For distinct coordinates $i \ne j$ the difference event has $\nu(\{z : z(i) \ne z(j)\}) = 1/2$ ([[def-product-measure-extension-axioms-pmea-and-pmea-sigma]]).

## Verification

**Proof technique:** direct.

1.1 $\nu(E \cap F) > 1/2$: by [F1] and [L1], $1 = \nu(E \cup F) + \nu((E \cup F)^c) \le \nu(E) + \nu(F) + \nu(E^c \cap F^c)$; hence $\nu(E \cap F) = 1 - \nu(E^c \cup F^c) \ge 1 - (\nu(E^c) + \nu(F^c)) > 1 - (1/4 + 1/4) = 1/2$, since $\nu(E^c) < 1/4$ and $\nu(F^c) < 1/4$ by [F1]. [given, F1, L1]

2.1 $\nu(E \cap F \cap D) > 0$: the complement of the triple intersection is contained in $E^c \cup F^c \cup D^c$, which has measure at most $\nu(E^c) + \nu(F^c) + \nu(D^c) < 1/4 + 1/4 + 1/2 = 1$ by [L1] and [F1] (using $\nu(D^c) = 1/2$). Hence the triple intersection has positive measure and is nonempty. [step 1.1, F1, L1, L2]

3.1 Hence there exists $z \in E \cap F \cap D$; every such $z$ lies in both $E$ and $F$ and satisfies $z(i) \ne z(j)$ by the definition of $D$. This example proves no topological conclusion from the abstract sets $E$ and $F$: in [[lem-pmea-three-quarter-separation-estimate]] the separately defined good events and separating open sets give that conclusion. [step 2.1, L2] ∎

## Remarks

- **Strictness matters.** Both good events have measure *strictly* above $3/4$, so the complement of the triple intersection has measure strictly below $1$; with $\ge 3/4$ the conclusion $\nu(E \cap F \cap D) > 0$ could fail.

- **Only two coordinates are used**, through $\nu(D) = 1/2$.

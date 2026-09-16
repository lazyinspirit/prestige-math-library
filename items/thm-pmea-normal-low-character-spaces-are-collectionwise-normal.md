---
id: thm-pmea-normal-low-character-spaces-are-collectionwise-normal
kind: theorem
title: "PMEA makes normal low-character spaces collectionwise normal"
status: draft
origin: pipeline
deps: [lem-pmea-three-quarter-separation-estimate, def-normalized-families-and-collectionwise-normality, def-first-countable-top, def-normal-and-t4-spaces, def-discrete-family-and-sigma-bases, def-neighbourhood-top, def-product-measure-extension-axioms-pmea-and-pmea-sigma]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Real-valued-measurable cardinals"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/rvmc.pdf"
      locator: "Theorem 8F and its proof, printed p. 70"
    - title: "Dennis K. Burke, The Normal Moore Space Problem"
      url: "https://dmitripavlov.org/scans/ttu15.pdf"
      locator: "Theorem 5.3 and proof, printed pp. 10-11"
---

## Statement

Under PMEA every normal space of character below $\mathfrak c$ is collectionwise
normal; under PMEA-$\sigma$ every first countable normal space is collectionwise
normal ([[def-product-measure-extension-axioms-pmea-and-pmea-sigma]],
[[def-normalized-families-and-collectionwise-normality]],
[[def-first-countable-top]]).

## Facts & Assumptions

**Given:** A normal space $X$; under PMEA a neighbourhood base $\mathcal U_x$ at each $x$ of cardinality $\chi(x,X) < \mathfrak c$, and under PMEA-$\sigma$ with first countability a countable open local base $\mathcal U_x$ at each $x$; and a discrete family $\mathcal F = \{F_i : i \in I\}$ of closed subsets of $X$.

[F1] The three-quarter separation estimate: under PMEA with $|\mathcal U_x| < \mathfrak c$, and under PMEA-$\sigma$ for first countable $X$ with countable local bases, there is $x \mapsto U^x$ with $U^x \in \mathcal U_x$ and $U^x \cap U^y = \varnothing$ for $x \in F_i$, $y \in F_j$, $i \ne j$ ([[lem-pmea-three-quarter-separation-estimate]]).

[F2] A neighbourhood base at $x$ contains, for each open $G \ni x$, a member $U$ with $x \in U \subseteq G$; so the hypothesis of [F1] is met whenever $x \in F_i \subseteq G$ ([[def-first-countable-top]], [[def-neighbourhood-top]]).

[F3] Collectionwise normality asks that every discrete family of closed sets be separated by pairwise disjoint open expansions ([[def-normalized-families-and-collectionwise-normality]], [[def-discrete-family-and-sigma-bases]]).

## Proof

**Proof technique:** direct.

1.1 Fix the discrete family $\mathcal F$ and, using the character hypothesis, a neighbourhood base $\mathcal U_x$ at each $x$ with $|\mathcal U_x| < \mathfrak c$, or with $|\mathcal U_x| = \omega$ in the first countable case. [given, F2]

2.1 Apply [F1] to $\mathcal F$ and the bases $\mathcal U_x$, obtaining $U^x \in \mathcal U_x$ with $U^x \cap U^y = \varnothing$ whenever $x \in F_i$, $y \in F_j$, $i \ne j$. [step 1.1, F1, F2]

3.1 For each $i$ put $G_i := \bigcup \{\, U^x : x \in F_i \,\}$. Each $G_i$ is open, contains $F_i$ because $x \in U^x$, and distinct $G_i, G_j$ are disjoint by step 2.1. Hence $\mathcal F$ is separated and $X$ is collectionwise normal. [step 2.1, F3] ∎

## Remarks

- **Character, not weight.** The hypothesis is pointwise, so the theorem applies to every Moore space once PMEA-$\sigma$ is available, since Moore spaces are first countable ([[def-moore-spaces-and-developments]]).

- **Fremlin's remark (b) after Theorem 8F.** The proof needs only as much additivity as the size of the local bases, which is why the countably additive version suffices in the first countable case.

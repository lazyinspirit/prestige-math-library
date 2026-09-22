---
id: thm-pmea-normal-low-character-spaces-are-collectionwise-normal
kind: theorem
title: "PMEA makes normal low-character spaces collectionwise normal"
status: draft
origin: pipeline
deps: [lem-pmea-three-quarter-separation-estimate, def-normalized-families-and-collectionwise-normality, def-first-countable-top, def-normal-and-t4-spaces, def-discrete-family-and-sigma-bases, def-neighbourhood-top, def-product-measure-extension-axioms-pmea-and-pmea-sigma, def-axiom-of-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
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

Work in $\mathrm{ZFC}$ ([[def-axiom-of-choice]]), as on this page. Under PMEA every normal space of character below $\mathfrak c$ is collectionwise
normal; under PMEA-$\sigma$ every first countable normal space is collectionwise
normal ([[def-product-measure-extension-axioms-pmea-and-pmea-sigma]],
[[def-normalized-families-and-collectionwise-normality]],
[[def-first-countable-top]]).

## Facts & Assumptions

**Given:** A normal space $X$; under PMEA an open neighbourhood base $\mathcal U_x$ at each $x$ of cardinality $\chi(x,X)<\mathfrak c$, and under PMEA-$\sigma$ with first countability a countable open local base $\mathcal U_x$ at each $x$; and a discrete family $\mathcal F=\{F_i:i\in I\}$ of closed subsets of $X$. Such open bases may be used without increasing cardinality by replacing every base member $N$ with its interior, which is an open neighbourhood of $x$ contained in $N$ ([[def-neighbourhood-top]]).

[F1] The three-quarter separation estimate: under PMEA with nonempty downwards-directed neighbourhood families $\mathcal U_x$ of size less than $\mathfrak c$ satisfying the open-refinement hypothesis of [F2], and under PMEA-$\sigma$ for first countable $X$ with countable local bases, there is $x \mapsto U^x$ with $U^x \in \mathcal U_x$ and $U^x \cap U^y = \varnothing$ for $x \in F_i$, $y \in F_j$, $i \ne j$ ([[lem-pmea-three-quarter-separation-estimate]]).

[F2] A neighbourhood base at $x$ contains, for each open $G \ni x$, a member $U$ with $x \in U \subseteq G$; so the hypothesis of [F1] is met whenever $x \in F_i \subseteq G$ ([[def-first-countable-top]], [[def-neighbourhood-top]]).

[F3] Collectionwise normality asks that every discrete family of closed sets be separated by pairwise disjoint open expansions ([[def-normalized-families-and-collectionwise-normality]], [[def-discrete-family-and-sigma-bases]]).

## Proof

**Proof technique:** direct.

1.1 If $X=\varnothing$ or the discrete family is empty, empty expansions suffice. Otherwise use AC to choose one local base of the stated size at each point, and replace its members by their interiors. This is an image of the original base, so its cardinality does not increase; each interior contains the point, and the image remains a local base. Fix the discrete family $\mathcal F$ and the open neighbourhood bases $\mathcal U_x$ from the Given line, with $|\mathcal U_x|<\mathfrak c$, or with $|\mathcal U_x|\leq\omega$ in the first countable case. [given, F2]

2.1 Each $\mathcal U_x$ is nonempty, by applying its base property to $X$. For $U,V\in\mathcal U_x$, the open intersection $U\cap V$ contains $x$, so [F2] supplies $W\in\mathcal U_x$ with $W\subseteq U\cap V$. This is precisely downward directedness; the original base need not be closed under finite intersections and is not enlarged. If $x\in F_i\subseteq G$ with $G$ open, [F2] likewise supplies a base member inside $G$. Apply [F1] to $\mathcal F$ and the bases $\mathcal U_x$, obtaining $U^x \in \mathcal U_x$ with $U^x \cap U^y = \varnothing$ whenever $x \in F_i$, $y \in F_j$, $i \ne j$. [step 1.1, F1, F2]

3.1 For each $i$ put $G_i:=\bigcup\{U^x:x\in F_i\}$. Each selected $U^x$ belongs to the open base $\mathcal U_x$, so $G_i$ is open; it contains $F_i$ because $x\in U^x$, and distinct $G_i,G_j$ are disjoint by step 2.1. Hence $\mathcal F$ is separated and $X$ is collectionwise normal. [given, step 2.1, F3] ∎

## Remarks

- **Character, not weight.** The hypothesis is pointwise, so the theorem applies to every normal Moore space once PMEA-$\sigma$ is available, since Moore spaces are first countable ([[def-moore-spaces-and-developments]]).

- **Fremlin's remark (b) after Theorem 8F.** The proof needs only as much additivity as the size of the local bases, which is why the countably additive version suffices in the first countable case.

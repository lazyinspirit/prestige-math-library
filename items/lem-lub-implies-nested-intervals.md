---
id: lem-lub-implies-nested-intervals
kind: lemma
title: "An ordered field with the least-upper-bound property has the nested interval property and is Archimedean"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, thm-of-archimedean, def-complete-ordered-field, def-upper-bound, def-ordered-field, thm-induction-principle, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field with the least-upper-bound property (LUB) of
[[def-completeness-properties]]. Then:

1. $F$ is Archimedean ([[def-archimedean-field]]);
2. $F$ has the nested interval property (NIP).

The intersection point produced in claim 2 is the supremum of the left
endpoints, and the proof does not use the hypothesis that the lengths tend to
$0$: an ordered field with (LUB) satisfies the *unrestricted* nested interval
property, of which (NIP) as defined is a special case.

## Facts & Assumptions

**Given:** An ordered field $F$ with the least-upper-bound property, and a nested sequence $(I_k)_{k \in \mathbb{N}}$ of closed intervals $I_k = [a_k, b_k]_F$ of $F$, so that $a_k \le b_k$ for every $k$ and $I_{k+1} \subseteq I_k$ for every $k$.

[L1] Least upper bounds: every nonempty $S \subseteq F$ bounded above has a least upper bound $\sup S \in F$; a least upper bound is an upper bound and is $\le$ every upper bound ([[def-complete-ordered-field]], [[def-upper-bound]]).

[L2] Every complete ordered field is Archimedean ([[thm-of-archimedean]]).

[L3] The properties (LUB), (NIP) and the Archimedean property, as fixed in [[def-completeness-properties]] and [[def-archimedean-field]]; (LUB) for $F$ is by definition the statement that $F$ is a complete ordered field ([[def-complete-ordered-field]]).

[L4] Closed intervals and nesting in $F$: $[a,b]_F = \{x \in F : a \le x \le b\}$ for $a \le b$, and $(I_k)$ is nested when $I_{k+1} \subseteq I_k$ for every $k$ ([[def-sequences-in-an-ordered-field]]).

[L5] The order of $F$ is total and transitive ([[def-ordered-field]]).

[L6] Induction principle on $\mathbb{N}$ ([[thm-induction-principle]]), and the order on $\mathbb{N}$ is total, so of any two indices one is the larger ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Having (LUB) is by definition being a complete ordered field, so $F$ is a complete ordered field. [L1, L3]

1.2 For every $k$: $a_{k+1}$ and $b_{k+1}$ lie in $I_{k+1}$, hence in $I_k$, so $a_k \le a_{k+1} \le b_{k+1} \le b_k$. [L4, L5]

2.1 $F$ is Archimedean, which is claim 1. [step 1.1, L2]

2.2 By induction on the difference of the indices, $a_j \le a_m$ and $b_m \le b_j$ whenever $j \le m$. [step 1.2, L5, L6]

3.1 For all $j, l \in \mathbb{N}$ one has $a_j \le b_l$: letting $m$ be the larger of $j$ and $l$, $a_j \le a_m \le b_m \le b_l$. [step 1.2, step 2.2, L5, L6]

4.1 The set $A := \{\, a_k : k \in \mathbb{N} \,\}$ is nonempty and is bounded above by $b_0$, so $c := \sup A$ exists in $F$. [step 3.1, L1]

5.1 For every $k$: $a_k \le c$ because $c$ is an upper bound of $A$; and $c \le b_k$ because $b_k$ is an upper bound of $A$ by step 3.1 while $c$ is the least such. [step 3.1, step 4.1, L1]

6.1 So $c \in [a_k, b_k]_F$ for every $k$, the intersection of the $I_k$ is nonempty, and $F$ has (NIP), which with step 2.1 gives both claims. [step 2.1, step 5.1, L3, L4] ∎

## Remarks

- **Where the lengths would be used.** They are not used at all above. Their
  role is to force the intersection to be a *single* point: if the lengths tend
  to $0$ and $c, c'$ both lie in every $I_k$ then $|c - c'| \le b_k - a_k$ for
  every $k$, so $|c - c'|$ is below every positive element of $F$ and therefore
  $0$. Uniqueness is not part of (NIP) as defined in
  [[def-completeness-properties]] and is not needed anywhere on this page.

- **The converse of claim 1 fails, and that is the point of two items later on
  this page.** [[fs-nested-intervals-implies-lub]] shows that (NIP) does not
  imply (LUB), and [[fs-cauchy-complete-implies-lub]] shows the same for (CC);
  in both the witness is a non-Archimedean field, so neither carries the
  Archimedean property that (LUB) carries here.

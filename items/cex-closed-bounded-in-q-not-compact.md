---
id: cex-closed-bounded-in-q-not-compact
kind: counterexample
title: "$\\{q \\in \\mathbb{Q} : q \\ge 0,\\ q^2 < 2\\}$ is closed and bounded in $\\mathbb{Q}$ and is not compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-closed-bounded-compact-without-completeness, def-rationals, fs-sqrt2-rational, thm-of-square-roots, def-open-cover-r, def-ordered-field, thm-rat-ordered-field, lem-of-square-monotone, def-abs-value, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Square root of 2 (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root_of_2"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Example 2.21(g))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** in every ordered field a closed bounded set is compact, so the
completeness hypothesis of the Heine-Borel characterisation is unnecessary
([[fs-closed-bounded-compact-without-completeness]]).

The witness is the ordered field $\mathbb{Q}$ ([[def-rationals]],
[[thm-rat-ordered-field]]) together with

$$S \;:=\; \{\, q \in \mathbb{Q} : q \ge 0 \text{ and } q^2 < 2 \,\} .$$

The set $S$ is bounded, is closed in $\mathbb{Q}$, and is not compact in
$\mathbb{Q}$, all with respect to the vocabulary of
[[def-open-cover-r]] transposed from $\mathbb{R}$ to $\mathbb{Q}$ exactly as set
out in [[fs-closed-bounded-compact-without-completeness]], where the refutation
is carried out in full. This item records the witness and says what makes it
work.

## Facts & Assumptions

**Given:** The ordered field $\mathbb{Q}$ and the set $S := \{\, q \in \mathbb{Q} : q \ge 0 \text{ and } q^2 < 2 \,\}$, with "open in $\mathbb{Q}$", "closed in $\mathbb{Q}$", "bounded" and "compact in $\mathbb{Q}$" as defined in [[fs-closed-bounded-compact-without-completeness]].

[A1] The refuted claim: in every ordered field a closed bounded set is compact.

[L1] $S$ is nonempty and bounded, has no greatest element, is closed in $\mathbb{Q}$, and the family $\{\, \{\, y \in \mathbb{Q} : y < r \,\} : r \in S \,\}$ is a cover of $S$ by sets open in $\mathbb{Q}$ with no finite subfamily covering $S$ ([[fs-closed-bounded-compact-without-completeness]]).

[L2] $\mathbb{Q}$ is a totally ordered field ([[thm-rat-ordered-field]], [[def-rationals]], [[def-ordered-field]]), with the absolute value of [[def-abs-value]] and its basic properties ([[lem-of-abs-value]]).

[L3] No rational number squares to $2$ ([[fs-sqrt2-rational]]).

[L4] Squaring is strictly monotone on the nonnegatives of an ordered field ([[lem-of-square-monotone]]).

## Counterexample

**Proof technique:** direct.

1.1 $\mathbb{Q}$ is an ordered field by [L2], so it is a legitimate instance of the claim [A1]. [A1, L2]

1.2 $S$ is bounded and closed in $\mathbb{Q}$ by [L1]; the closedness rests on the fact that no rational squares to $2$ ([L3]), which is what makes the complement of $S$ split into the rationals below $0$ and those whose square exceeds $2$, and on the monotonicity of squaring ([L4]), which is what makes each of those two pieces open in $\mathbb{Q}$. [L1, L2, L3, L4]

1.3 $S$ is not compact in $\mathbb{Q}$: the cover exhibited in [L1] consists of sets open in $\mathbb{Q}$, covers $S$ because $S$ has no greatest element, and admits no finite subfamily covering $S$, since the largest index of such a subfamily is itself a member of $S$ that the subfamily leaves uncovered. [L1, L2]

2.1 So the ordered field $\mathbb{Q}$ carries a bounded set that is closed in $\mathbb{Q}$ and not compact in $\mathbb{Q}$, and the claim [A1] is refuted. [step 1.1, step 1.2, step 1.3, A1, L1] ∎

## Remarks

- **What is closed in $\mathbb{Q}$ is not closed in $\mathbb{R}$.** Read inside
  $\mathbb{R}$, the same collection of numbers is bounded and fails to be
  closed: the real $\sqrt 2$, which exists by [[thm-of-square-roots]] and is not
  rational by [[fs-sqrt2-rational]], is adherent to it and absent from it. The
  set is closed in $\mathbb{Q}$
  precisely because the point that would have to be adjoined to close it does
  not lie in $\mathbb{Q}$. Closedness is a statement about a set inside an
  ambient field, not about the set alone.

- **Only one half of Heine-Borel fails here.** That a compact set is closed and
  bounded ([[lem-compact-implies-closed-and-bounded-r]]) uses no completeness at
  all, only the Archimedean property and the existence of maxima of finite sets;
  the converse
  ([[thm-heine-borel-r]] and [[thm-heine-borel-characterisation-r]]) is the half
  that spends completeness, and it is the half refuted here.

- **Why this witness rather than $\mathbb{Q} \cap [0,1]$.** Both work: a set with
  rational endpoints is also closed and bounded in $\mathbb{Q}$ and also fails to
  be compact there, but its non-compactness has to be produced by splitting it
  at some irrational chosen for the purpose. In $S$ the irrational is already
  built in, and the same fact, the irrationality of $\sqrt 2$
  ([[fs-sqrt2-rational]]), delivers both closedness in $\mathbb{Q}$ and the
  absence of a finite subcover. The witness therefore runs on exactly the
  mechanism of the false statement it refutes.

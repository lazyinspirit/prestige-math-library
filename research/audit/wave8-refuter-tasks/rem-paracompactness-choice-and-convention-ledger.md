## Selection reasons

- Wave 8 ai-generated Statement/Construction seed
- pending Wave 8 genrisk seed (cone 1)

## Target item — `rem-paracompactness-choice-and-convention-ledger`

Normalized current SHA-256: `78e34c1b1e2e2d86c19002235803d4054b2ad442a4e7f38afe9f6575c23ed720`

The complete current item follows, including frontmatter:

````markdown
---
id: rem-paracompactness-choice-and-convention-ledger
kind: remark
title: "Choice and convention ledger for paracompactness, Stone's theorem, and partitions of unity"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-paracompact-space, thm-paracompact-hausdorff-implies-normal, thm-subordinate-partitions-of-unity-exist, lem-metric-open-covers-have-point-finite-refinements, lem-metric-point-finite-refinements-can-be-made-locally-finite, thm-stone-metric-spaces-are-paracompact]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. Ornstein, A New Proof of the Paracompactness of Metric Spaces, Proc. Amer. Math. Soc. 21 (1969), 341–342"
      url: "https://www.ams.org/proc/1969-021-02/"
    - title: "C. Good, I. J. Tree and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://doi.org/10.1090/S0002-9939-98-04163-X"
pipeline_run: null
---

Paracompactness here means the open-cover refinement property alone; Hausdorffness
is not hidden in the word. It is therefore stated in the regularity, normality,
shrinking, and partition-of-unity results that use it. The proofs of
[[thm-paracompact-hausdorff-implies-normal]] and its regularity predecessor use
families of all eligible neighbourhoods, so they make no simultaneous choice.
The cover-shrinking construction is recorded under the Axiom of Choice, and the
partition theorem records Choice and Dependent Choice separately: Choice handles
cover assignments, while the cited Urysohn construction is carried out under
Dependent Choice.

The accessible primary text of Ornstein's proof has two distinct parts. Part (A)
well orders the cover, removes closures of selected dyadic balls, and obtains a
point-finite refinement. Part (B) renames that point-finite cover, assigns
controlled-radius balls to their first containing member, and upgrades it to a
locally finite refinement. Its local-finiteness test uses point-finiteness of
the Part (A) output, so the locally finite lemma depends on the point-finite
lemma. Stone's theorem is proved here under Choice as a sufficient assumption
only; no exact-strength claim is made.
````

## Wave 8 provenance row for the target

```json
{
  "id": "rem-paracompactness-choice-and-convention-ledger",
  "statement": "ai-generated",
  "proof": "not-applicable",
  "evidence": "trivial",
  "urls": [],
  "rationale": "This is a genuinely page-specific synthesis rather than a recognizable literature proposition: it inventories this page's local no-Hausdorff convention and the exact Choice/DC expenditures of its own proofs. Each sentence was checked directly against the cited on-disk definitions, theorems, and the two Ornstein construction items.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-topology.provenance.jsonl"
}
```

## Proof contract for the target

No Wave 8 proof contract is required for this target.

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "rem-paracompactness-choice-and-convention-ledger",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-paracompact-space",
    "declared_target": "def-paracompact-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-paracompactness-choice-and-convention-ledger",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "thm-paracompact-hausdorff-implies-normal",
    "declared_target": "thm-paracompact-hausdorff-implies-normal",
    "target_statement_provenance": "literature-derived",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-paracompactness-choice-and-convention-ledger",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "thm-subordinate-partitions-of-unity-exist",
    "declared_target": "thm-subordinate-partitions-of-unity-exist",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-paracompactness-choice-and-convention-ledger",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "lem-metric-open-covers-have-point-finite-refinements",
    "declared_target": "lem-metric-open-covers-have-point-finite-refinements",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-paracompactness-choice-and-convention-ledger",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "lem-metric-point-finite-refinements-can-be-made-locally-finite",
    "declared_target": "lem-metric-point-finite-refinements-can-be-made-locally-finite",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-paracompactness-choice-and-convention-ledger",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "thm-stone-metric-spaces-are-paracompact",
    "declared_target": "thm-stone-metric-spaces-are-paracompact",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[
  {
    "id": "rem-paracompactness-choice-and-convention-ledger",
    "file": "items/rem-paracompactness-choice-and-convention-ledger.md",
    "source": "provenance",
    "cone_size": 1,
    "logical_consumers": [],
    "direct_citation_consumers": [
      {
        "id": "rem-stone-theorem-choice-strength",
        "via": [
          "forward_refs",
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full text of every cited or declared item (6)

### `def-paracompact-space`

````markdown
---
id: def-paracompact-space
kind: definition
title: "Paracompactness: every open cover has a locally finite open refinement, with no separation axiom built into the word"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cover-refinement-and-local-finiteness, def-compact-space]
justified_by: []
aliases: [def-paracompactness]
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Definition

A topological space $X$ is **paracompact** when every open cover $\mathcal U$
of $X$ has an open refinement $\mathcal V$ which covers $X$ and is locally
finite. In symbols, for every open cover $\mathcal U$ there is a locally finite
open cover $\mathcal V$ such that every $V\in\mathcal V$ lies in some
$U\in\mathcal U$.

No separation axiom is included in this definition. Some sources reserve the
word *paracompact* for the conjunction of this covering property with
Hausdorffness. Here the covering property is named by itself, and any use of
Hausdorffness is stated explicitly.

## Remarks

The finite-subcover condition defining compactness is recalled in
[[def-compact-space]]. A finite family is locally finite, but compactness and
paracompactness remain distinct definitions because their conclusions quantify
over different refinements of a cover.
````

### `lem-metric-open-covers-have-point-finite-refinements`

````markdown
---
id: lem-metric-open-covers-have-point-finite-refinements
kind: lemma
title: "Under choice, every open cover of a metric space has a point-finite open refinement"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cover-refinement-and-local-finiteness, def-metric-topology, def-axiom-of-choice, thm-well-ordering-theorem, lem-geometric-sequence-null]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. Ornstein, A New Proof of the Paracompactness of Metric Spaces, Proc. Amer. Math. Soc. 21 (1969), 341–342"
      url: "https://www.ams.org/proc/1969-021-02/"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every open cover of a metric space has a point-finite
open refinement.

## Facts & Assumptions

**Given:** Choice, a metric space $X$, and an open cover $\{C_\alpha\}_{\alpha\in A}$.

[A1] Every set can be well ordered under the Axiom of Choice ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).

[F1] Metric balls are open and each point of an open set has a ball contained in that set ([[def-metric-topology]]).

[F2] A point-finite open refining cover is as in [[def-cover-refinement-and-local-finiteness]].

[L1] The dyadic radii $2^{-n}$ tend to $0$ ([[lem-geometric-sequence-null]], claim 1 with ratio $1/2$).

## Proof

**Proof technique:** constructive.

1.1 Well order $\{C_\alpha\}$ by [A1], and write $R(x,n)=B(x,2^{-n})$. A ball $R(z,n+1)$ is *chosen for* $C_\alpha$ when $n$ is the least natural number with $R(z,n)\subseteq C_\alpha$ and, in addition, $R(z,n)\subseteq C_\beta$ for some $\beta<\alpha$. Let $\mathcal G_\alpha$ be the union of all balls chosen for $C_\alpha$. [A1, F1, L1, construct]

2.1 Put $C'_\alpha:=C_\alpha\setminus\overline{\mathcal G_\alpha}$. Each $C'_\alpha$ is open and refines $C_\alpha$. [step 1.1, construct]

3.1 The $C'_\alpha$ cover. Otherwise let $C_\alpha$ be the first original member containing an omitted point $x$. Then $x\in\overline{\mathcal G_\alpha}$. By [L1], choose $N$ with $B(x,3\cdot2^{-N})\subseteq C_\alpha$, and put $\delta=2^{-(N+2)}$. Some chosen ball $R(z,n_z+1)$ meets $B(x,\delta)$; write its radius as $r=2^{-(n_z+1)}$. If $r>\delta$, then $d(x,z)<r+\delta<2r$, so its expanded ball $R(z,n_z)$ contains $x$. If $r\le\delta$, then $d(x,z)<r+\delta\le2\delta<2^{-N}$, so $R(z,N)\subseteq C_\alpha$ and minimality gives $n_z\le N$; hence $r\ge2^{-(N+1)}=2\delta$, a contradiction. Thus in every case an expanded chosen ball contains $x$. That expanded ball lies in some $C_\beta$ with $\beta<\alpha$, contradicting the choice of $\alpha$. [step 1.1, step 2.1, F1, L1]

3.2 If $x\in C'_\alpha$ and $n$ is least with $R(x,n)\subseteq C_\alpha$ (which exists by [L1]), then $C_\alpha$ is the first cover member containing $R(x,n)$: otherwise $R(x,n+1)$ would be chosen for $C_\alpha$ and would contain $x$, contrary to $x\notin\overline{\mathcal G_\alpha}$. For each $n$ there is at most one such first member, and as $n$ increases their ordinal indices are nonincreasing. Infinitely many distinct indices would therefore give an infinite strictly descending sequence of ordinals, impossible because its range has a least member. Thus only finitely many $C'_\alpha$ contain $x$. [step 1.1, step 2.1, L1]

4.1 Thus $\{C'_\alpha\}$ is the point-finite open refinement required by [F2]. [F2, step 3.1, step 3.2, discharge-construct] ∎

## Remarks

This is part (A), pages 341–342, of Ornstein's primary proof. Its chosen dyadic-ball construction supplies the point-finite refinement to which the controlled-radius construction in part (B) is then applied.
````

### `lem-metric-point-finite-refinements-can-be-made-locally-finite`

````markdown
---
id: lem-metric-point-finite-refinements-can-be-made-locally-finite
kind: lemma
title: "Under choice, Ornstein's second construction turns a point-finite metric open cover into a locally finite open refinement"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-metric-open-covers-have-point-finite-refinements, def-cover-refinement-and-local-finiteness, def-metric-topology, def-axiom-of-choice, thm-well-ordering-theorem]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. Ornstein, A New Proof of the Paracompactness of Metric Spaces, Proc. Amer. Math. Soc. 21 (1969), 341–342"
      url: "https://www.ams.org/proc/1969-021-02/"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every point-finite open cover of a metric space has
a locally finite open refinement. Consequently every metric open cover has a
locally finite open refinement.

## Facts & Assumptions

**Given:** Choice, a metric space $X$, and a point-finite open cover $\{C_\alpha\}_{\alpha\in A}$.

[A1] The Axiom of Choice permits the cover to be well ordered and used to select its first eligible member ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).

[F1] Metric balls are open, and every point has a positive-radius ball inside some cover member ([[def-metric-topology]]).

[F2] A locally finite open refinement is the paracompactness refinement of [[def-cover-refinement-and-local-finiteness]].

[L1] Under choice every metric open cover has a point-finite open refinement ([[lem-metric-open-covers-have-point-finite-refinements]]).

## Proof

**Proof technique:** constructive.

1.1 Well order the point-finite cover. For $x\in X$ let $$\rho_x=\sup\{r>0:B(x,r)\subseteq C_\alpha \text{ for some }\alpha\}.$$ Put $m_x=\min\{1,\rho_x/4\}$ when $\rho_x<\infty$, and $m_x=1$ otherwise. Then $0<m_x\le1$ and $B(x,2m_x)$ lies in some cover member: its radius is strictly below $\rho_x$. Assign $x$ to the first $C_\alpha$ containing $B(x,2m_x)$, and let $C'_\alpha$ be the union of all $B(x,m_x)$ assigned to $\alpha$. [A1, F1, construct]

2.1 The selected smaller balls cover $X$ and each lies in its assigned $C_\alpha$, so $\{C'_\alpha\}$ is an open refining cover. [step 1.1]

2.2 Fix $x$. If $C'_\alpha$ meets $B(x,m_x/8)$, choose a ball $B(y,m_y)\subseteq C'_\alpha$ meeting it. We claim $x\in C_\alpha$. Otherwise $x\notin B(y,2m_y)$, while intersection gives $d(x,y)<m_y+m_x/8$; hence $m_y<m_x/8\le1/8$. Thus the truncation in step 1.1 is inactive at $y$ and $\rho_y=4m_y$. But $$B(y,5m_y)\subseteq B(x,2m_x),$$ because $d(x,y)+5m_y<6m_y+m_x/8<7m_x/8$; the right-hand ball lies in some cover member by step 1.1. This contradicts the definition of $\rho_y$. Thus $x\in C_\alpha$. [step 1.1]

3.1 The input cover is point-finite, so $x$ belongs to only finitely many $C_\alpha$. Step 2.2 shows that $B(x,m_x/8)$ meets only the corresponding finitely many $C'_\alpha$; hence the new cover is locally finite. [step 2.2, F2]

4.1 Hence $\{C'_\alpha\}$ is a locally finite open refinement of the point-finite cover. For an arbitrary metric open cover, first apply [L1] and then this construction; refinement is transitive, so the result refines the original cover. [L1, F2, step 2.1, step 3.1, discharge-construct] ∎

## Remarks

In the primary paper, part (B) is applied to the point-finite cover obtained in part (A), with that cover renamed $\{C_\alpha\}$. Its local-finiteness test concludes that every new set meeting a fixed small ball has an index $\alpha$ for which $x\in C_\alpha$; point-finiteness of the input is exactly what turns this conclusion into finiteness. Thus part (B) upgrades part (A) rather than restarting from the original arbitrary cover.
````

### `thm-paracompact-hausdorff-implies-normal`

````markdown
---
id: thm-paracompact-hausdorff-implies-normal
kind: theorem
title: "Every paracompact Hausdorff space is normal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-paracompact-space, lem-paracompact-hausdorff-is-regular, lem-locally-finite-unions-and-closures, def-hausdorff-space, def-normal-and-t4-spaces]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Statement

Every paracompact Hausdorff topological space is normal. No choice principle is
used.

## Facts & Assumptions

**Given:** A paracompact Hausdorff space $X$ and disjoint closed subsets $E,F\subseteq X$.

[L1] The space $X$ is regular ([[lem-paracompact-hausdorff-is-regular]]).

[L2] A locally finite family commutes with closure under union ([[lem-locally-finite-unions-and-closures]]).

[F1] Paracompactness supplies a locally finite open refining cover ([[def-paracompact-space]]).

[F2] Normality is separation of disjoint closed sets by disjoint open sets ([[def-normal-and-t4-spaces]]).

## Proof

**Proof technique:** direct.

1.1 For each $x\in E$, regularity supplies an open $U$ containing $x$ with $\overline U\cap F=\varnothing$; therefore the family of all such $U$, together with $X\setminus E$, is an open cover $\mathcal U$ of $X$. [L1, construct]

2.1 Take a locally finite open cover $\mathcal W$ refining $\mathcal U$, and set $H:=\bigcup\{W\in\mathcal W:W\cap E\ne\varnothing\}$. [F1, step 1.1, choose, construct]

3.1 The open set $H$ contains $E$, because a member of $\mathcal W$ containing a point of $E$ cannot lie inside $X\setminus E$. [step 1.1, step 2.1]

3.2 Every member $W$ used in $H$ lies in one of the eligible $U$ and so has $\overline W\cap F=\varnothing$; hence $\overline H=\bigcup\overline W$ is disjoint from $F$ by [L2]. [step 1.1, step 2.1, L2]

4.1 The open sets $H$ and $X\setminus\overline H$ contain $E$ and $F$ respectively and are disjoint, so [F2] proves normality. [step 3.1, step 3.2, F2] ∎
````

### `thm-stone-metric-spaces-are-paracompact`

````markdown
---
id: thm-stone-metric-spaces-are-paracompact
kind: theorem
title: "Stone's theorem, under choice: every metric space is paracompact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-metric-open-covers-have-point-finite-refinements, lem-metric-point-finite-refinements-can-be-made-locally-finite, def-paracompact-space, def-metric-space, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. Ornstein, A New Proof of the Paracompactness of Metric Spaces, Proc. Amer. Math. Soc. 21 (1969), 341–342"
      url: "https://www.ams.org/proc/1969-021-02/"
    - title: "C. Good, I. J. Tree and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://doi.org/10.1090/S0002-9939-98-04163-X"
    - title: "Topology 262 notes (California State University, Northridge)"
      url: "https://www.csun.edu/~ac53971/research/topology_262.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every metric space is paracompact.

## Facts & Assumptions

**Given:** The Axiom of Choice, a metric space $X$, and an arbitrary open cover $\mathcal U$ of its metric topology.

[L1] Under choice, every metric open cover has a point-finite open refinement, and Ornstein's second construction turns that point-finite cover into a locally finite open refinement ([[lem-metric-open-covers-have-point-finite-refinements]], [[lem-metric-point-finite-refinements-can-be-made-locally-finite]]).

[F1] Paracompactness means that every open cover has such a refinement ([[def-paracompact-space]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the arbitrary cover $\mathcal U$. [L1]

2.1 The resulting locally finite open refinement is exactly the condition in [F1], so $X$ is paracompact. [F1, step 1.1] ∎

## Remarks

The theorem is proved here with the Axiom of Choice as a sufficient hypothesis. No assertion is made that this is its exact set-theoretic strength.
````

### `thm-subordinate-partitions-of-unity-exist`

````markdown
---
id: thm-subordinate-partitions-of-unity-exist
kind: theorem
title: "Under choice and dependent choice, every open cover of a paracompact Hausdorff space admits a locally finite subordinate partition of unity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-paracompact-hausdorff-cover-shrinking, thm-paracompact-hausdorff-implies-normal, thm-urysohn-lemma, lem-normalizing-a-locally-finite-positive-family, def-axiom-of-choice, def-dependent-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "Topology 262 notes (California State University, Northridge)"
      url: "https://www.csun.edu/~ac53971/research/topology_262.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Every open cover
of a paracompact Hausdorff space admits a locally finite partition of unity
subordinate to it.

## Facts & Assumptions

**Given:** Choice, dependent choice, a paracompact Hausdorff space $X$, and an open cover $\mathcal U$.

[L1] There are locally finite covers $\{V_s\}$, $\{W_s\}$ and $U_s\in\mathcal U$ with $\overline{V_s}\subseteq W_s\subseteq\overline{W_s}\subseteq U_s$ ([[lem-paracompact-hausdorff-cover-shrinking]]).

[L2] Every paracompact Hausdorff space is normal ([[thm-paracompact-hausdorff-implies-normal]]).

[L3] Under dependent choice, Urysohn's lemma separates disjoint closed sets in a normal space by a continuous map into $[0,1]$ ([[thm-urysohn-lemma]], clause 1).

[L4] If $\{f_s:X\to[0,\infty)\}_{s\in S}$ is a continuous family with locally finite cozero family and everywhere-positive sum $f=\sum_sf_s$, then the functions $\varphi_s=f_s/f$ form a partition of unity, with the same cozero sets and supports as the corresponding $f_s$ ([[lem-normalizing-a-locally-finite-positive-family]]).

## Proof

**Proof technique:** constructive.

1.1 Apply [L1] to obtain $V_s,W_s,U_s$ as stated. [L1, construct]

2.1 By [L2], $X$ is normal. For each $s$, the closed sets $\overline{V_s}$ and $X\setminus W_s$ are disjoint, so [L3] gives a continuous $f_s:X\to[0,1]$ equal to $1$ on $\overline{V_s}$ and $0$ on $X\setminus W_s$. [step 1.1, L2, L3, choose]

3.1 The cozero set of $f_s$ lies in $W_s$, while its support lies in $\overline{W_s}\subseteq U_s$; since $\{W_s\}$ is locally finite, so is the cozero family. [step 1.1, step 2.1]

3.2 Because $\{V_s\}$ covers $X$ and $f_s=1$ on $V_s$, the pointwise sum $\sum_sf_s$ is positive everywhere. [step 1.1, step 2.1]

4.1 By [L4], the normalized functions $\varphi_s=f_s/(\sum_tf_t)$ form a locally finite partition of unity; their supports equal those of $f_s$, so step 3.1 makes the partition subordinate to $\mathcal U$. [step 3.1, step 3.2, L4, discharge-construct] ∎
````


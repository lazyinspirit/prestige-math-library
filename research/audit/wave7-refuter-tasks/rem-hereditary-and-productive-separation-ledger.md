## Selection reasons

- Wave 7 ai-generated statement seed

## Target item — `rem-hereditary-and-productive-separation-ledger`

Normalized current SHA-256: `877fb41bd5699e696b02535f4126b85d52473291a7598600b56535067a15486e`

The complete current item follows, including frontmatter:

````markdown
---
id: rem-hereditary-and-productive-separation-ledger
kind: remark
title: "Preservation ledger for the separation axioms, with $T_1$ conventions kept explicit"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [thm-positive-heredity-of-separation-axioms, thm-positive-productivity-of-separation-axioms, lem-normality-is-closed-hereditary, thm-completely-normal-iff-hereditarily-normal, thm-normality-is-not-hereditary, thm-normality-is-not-productive]
aliases: []
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
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
pipeline_run: null
---

## Remarks

$T_0$, $T_1$, Hausdorffness, regularity, $T_3$, complete regularity, and Tychonoffness pass both to subspaces and to arbitrary products by [[thm-positive-heredity-of-separation-axioms]] and [[thm-positive-productivity-of-separation-axioms]]. The compound names retain their $T_1$ clauses: $T_3$ and Tychonoff are not alternative names for regularity and complete regularity.

Normality has a narrower positive result: it passes to closed subspaces by [[lem-normality-is-closed-hereditary]]. Complete normality is exactly hereditary normality by [[thm-completely-normal-iff-hereditarily-normal]]. Under countable choice the deleted Tychonoff plank refutes hereditary normality ([[thm-normality-is-not-hereditary]]); under choice the lower-limit plane refutes productive normality ([[thm-normality-is-not-productive]]). These failures do not alter the positive ledger above.
````

## Wave 7 provenance row for the target

```json
{
  "id": "rem-hereditary-and-productive-separation-ledger",
  "statement": "ai-generated",
  "proof": "not-applicable",
  "evidence": "none",
  "urls": [],
  "rationale": "This is a page-specific synthesis of the library preservation results and counterexamples rather than a recognizable standalone literature statement; each mathematical entry was checked against its cited item.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-separation-urysohn.provenance.jsonl"
}
```

## Proof contract for the target

No Wave 7 proof contract is required for this target.

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "rem-hereditary-and-productive-separation-ledger",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-positive-heredity-of-separation-axioms",
    "declared_target": "thm-positive-heredity-of-separation-axioms",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-hereditary-and-productive-separation-ledger",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-positive-productivity-of-separation-axioms",
    "declared_target": "thm-positive-productivity-of-separation-axioms",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-hereditary-and-productive-separation-ledger",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-normality-is-closed-hereditary",
    "declared_target": "lem-normality-is-closed-hereditary",
    "target_statement_provenance": "literature-derived",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-hereditary-and-productive-separation-ledger",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-completely-normal-iff-hereditarily-normal",
    "declared_target": "thm-completely-normal-iff-hereditarily-normal",
    "target_statement_provenance": "literature-derived",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-hereditary-and-productive-separation-ledger",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-normality-is-not-hereditary",
    "declared_target": "thm-normality-is-not-hereditary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-hereditary-and-productive-separation-ledger",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-normality-is-not-productive",
    "declared_target": "thm-normality-is-not-productive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (6)

### `lem-normality-is-closed-hereditary`

````markdown
---
id: lem-normality-is-closed-hereditary
kind: lemma
title: "Every closed subspace of a normal space is normal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-normal-and-t4-spaces, def-subspace-topology-top, def-hereditary-property]
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
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
pipeline_run: null
---

## Statement

Normality is closed-hereditary: every closed subspace of a normal space is normal.

## Facts & Assumptions

**Given:** A normal space $X$, a closed subspace $S\subseteq X$, and disjoint closed subsets $A,B$ of $S$.

[F1] A set closed in a subspace is the trace of an ambient closed set; if the subspace is closed, it is itself ambient closed ([[def-subspace-topology-top]]).

[F2] Normality separates disjoint closed subsets by disjoint open sets ([[def-normal-and-t4-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Write $A=S\cap C$ and $B=S\cap D$ for closed $C,D\subseteq X$. Then $A$ and $B$ are closed in $X$, because $S$ is closed. [F1]

2.1 The sets $A,B$ are disjoint closed subsets of the normal space $X$, so choose disjoint ambient open sets $U,V$ with $A\subseteq U$ and $B\subseteq V$. [F2, step 1.1]

3.1 Their traces $U\cap S$ and $V\cap S$ are disjoint open subsets of $S$ containing $A,B$, so $S$ is normal. [F1, step 2.1] ∎
````

### `thm-completely-normal-iff-hereditarily-normal`

````markdown
---
id: thm-completely-normal-iff-hereditarily-normal
kind: theorem
title: "A space is completely normal if and only if every subspace is normal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-completely-normal-and-perfectly-normal-spaces, def-separated-sets, def-normal-and-t4-spaces, def-subspace-topology-top, def-hereditary-property]
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
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
pipeline_run: null
---

## Statement

A space is completely normal if and only if every one of its subspaces is normal. Equivalently, complete normality is exactly hereditary normality.

## Facts & Assumptions

**Given:** A space $X$ and the definitions of complete normality, normality, separated sets, and subspace topology.

[F1] Completely normal means that separated subsets have disjoint open neighbourhoods; normal means the same assertion for disjoint closed subsets ([[def-completely-normal-and-perfectly-normal-spaces]], [[def-normal-and-t4-spaces]]).

[F2] Disjoint closed subsets are separated, and separation is unchanged on passing to a subspace ([[def-separated-sets]]).

[F3] Open subsets of a subspace are traces of ambient open sets ([[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $X$ is completely normal, let $S\subseteq X$, and let $A,B$ be disjoint closed subsets of $S$. By [F2] they are separated in $X$, so ambient disjoint open sets containing them trace to disjoint open sets of $S$. Thus $S$ is normal. [F1, F2, F3]

1.2 Conversely suppose every subspace of $X$ is normal, and let $A,B\subseteq X$ be separated. Put $Y=X\setminus((\overline A\setminus A)\cup(\overline B\setminus B))$; separation ensures that $A,B\subseteq Y$, and they are disjoint closed subsets of $Y$. [F2]

2.1 Normality of $Y$ gives disjoint open $U,V\subseteq Y$ containing $A,B$. Write $U=G\cap Y$ and $V=H\cap Y$ with $G,H$ open in $X$; then $G\cap H$ is contained in $(\overline A\setminus A)\cup(\overline B\setminus B)$. [F3, step 1.2]

3.1 The open sets $G\setminus\overline B$ and $H\setminus\overline A$ contain $A$ and $B$ respectively, and are disjoint: a point of their intersection would lie in $G\cap H$ but in neither of the two displayed closure differences. [F2, step 2.1]

4.1 Hence every separated pair in $X$ has disjoint open neighbourhoods, so $X$ is completely normal. [F1, step 3.1] ∎
````

### `thm-normality-is-not-hereditary`

````markdown
---
id: thm-normality-is-not-hereditary
kind: theorem
title: "Assuming countable choice, normality is not hereditary, even to open regular subspaces"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-deleted-tychonoff-plank-is-regular-and-nonnormal, def-hereditary-property]
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
    - title: "L. A. Steen and J. A. Seebach, Counterexamples in Topology, deleted Tychonoff plank"
      url: "https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf"
    - title: "Tychonoff plank (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_plank"
pipeline_run: null
---

## Statement

Assuming the Axiom of Countable Choice, normality is not hereditary, even when the subspace is open and regular.

## Facts & Assumptions

**Given:** The deleted Tychonoff plank construction.

[L1] Under countable choice, its parent $P$ is normal and its deleted-corner subspace $T$ is open, regular, and nonnormal ([[lem-deleted-tychonoff-plank-is-regular-and-nonnormal]]).

[F1] A hereditary property passes from every space having it to every subspace ([[def-hereditary-property]]).

## Proof

**Proof technique:** direct.

1.1 The parent $P$ in [L1] is normal, but its open regular subspace $T$ is not normal. [L1]

2.1 This one normal space and one nonnormal subspace refute the defining universal condition in [F1]. [F1, step 1.1] ∎
````

### `thm-normality-is-not-productive`

````markdown
---
id: thm-normality-is-not-productive
kind: theorem
title: "Assuming choice, normality is not productive: the normal lower-limit line has a nonnormal square"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-axiom-of-choice, def-countable-choice, cor-lower-limit-line-is-normal, lem-jones-normal-density-discrete-bound, lem-lower-limit-plane-antidiagonal, thm-cardinal-power-set-and-cantor, thm-schroder-bernstein, thm-cantor-set-ternary-description, thm-rationals-countable, lem-of-q-dense]
aliases: []
landmark: true
proof_strategy: contradiction
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
    - title: "G. Gruenhage, General Topology Course Notes, Sorgenfrey plane and Jones's lemma"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
    - title: "Sorgenfrey topology (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
    - title: "Sorgenfrey plane (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sorgenfrey_plane"
pipeline_run: null
---

## Statement

Assuming the Axiom of Choice, the lower-limit line is normal but its square is not normal. Hence normality is not productive, even for a product of two factors.

## Facts & Assumptions

**Given:** The Axiom of Choice and the lower-limit line $L$.

[A1] The Axiom of Choice supplies a choice function for every family of nonempty sets, hence for every countably indexed family, which is the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] Under the Axiom of Countable Choice, the lower-limit line is normal ([[cor-lower-limit-line-is-normal]]).

[L1] Jones's lemma injects $\mathcal P(D)$ into $\mathcal P(E)$ when a normal space has closed discrete $D$ and dense $E$ ([[lem-jones-normal-density-discrete-bound]]).

[L2] The plane $L^2$ has $E=\mathbb Q^2$ at most countable and $D=\{(x,-x):x\in\mathbb R\}$ closed discrete with $D\approx\mathbb R$ ([[lem-lower-limit-plane-antidiagonal]]).

[L3] Cantor's theorem gives no injection $\mathcal P(\mathcal P(\mathbb N))\to\mathcal P(\mathbb N)$, and Schröder-Bernstein turns injections both ways into a bijection ([[thm-cardinal-power-set-and-cantor]], [[thm-schroder-bernstein]]).

[L4] The ternary Cantor-set coding injects $\mathcal P(\mathbb N)$ into $\mathbb R$, while $x\mapsto\{q\in\mathbb Q:q<x\}$ injects $\mathbb R$ into $\mathcal P(\mathbb Q)$; a rational between distinct reals makes the latter map injective, and $\mathbb Q\approx\mathbb N$ ([[thm-cantor-set-ternary-description]], [[lem-of-q-dense]], [[thm-rationals-countable]]).

## Proof

**Proof technique:** contradiction.

1.1 By [A1] and [F1], $L$ is normal. Suppose, for a contradiction, that $L^2$ is normal. [A1, F1, assume-contra]

1.2 Jones's lemma applied to the $D,E$ of [L2] injects $\mathcal P(D)$ into $\mathcal P(E)$. [L1, L2]

1.3 The two injections of [L4], with the fixed bijection $\mathbb Q\approx\mathbb N$, give $\mathbb R\approx\mathcal P(\mathbb N)$ by Schröder-Bernstein. Therefore $D\approx\mathcal P(\mathbb N)$, while $E\preceq\mathbb N$. [L2, L3, L4]

2.1 Taking direct images under these injections turns step 1.2 into an injection $\mathcal P(\mathcal P(\mathbb N))\to\mathcal P(\mathbb N)$. [step 1.2, step 1.3]

3.1 This contradicts Cantor's theorem in [L3]. Therefore $L^2$ is not normal, while $L$ is normal, proving nonproductivity. [L3, step 1.1, step 2.1, discharge-contradiction] ∎
````

### `thm-positive-heredity-of-separation-axioms`

````markdown
---
id: thm-positive-heredity-of-separation-axioms
kind: theorem
title: "$T_0$, $T_1$, $T_2$, regularity, $T_3$, complete regularity, and Tychonoffness are hereditary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-t0-t1-and-hausdorff-are-hereditary, lem-regularity-is-hereditary, lem-complete-regularity-is-hereditary, def-regular-and-t3-spaces, def-completely-regular-and-tychonoff-spaces]
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
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

Each of $T_0$, $T_1$, Hausdorffness ($T_2$), regularity, $T_3$, complete regularity, and Tychonoffness is hereditary.

## Facts & Assumptions

**Given:** A subspace of a space with one of the listed separation properties.

[L1] $T_0$, $T_1$, and Hausdorffness are hereditary ([[lem-t0-t1-and-hausdorff-are-hereditary]]).

[L2] Regularity and complete regularity are hereditary ([[lem-regularity-is-hereditary]], [[lem-complete-regularity-is-hereditary]]).

[F1] $T_3$ means regular plus $T_1$, and Tychonoff means completely regular plus $T_1$ ([[def-regular-and-t3-spaces]], [[def-completely-regular-and-tychonoff-spaces]]).

## Proof

**Proof technique:** direct.

1.1 The first three assertions are [L1], and regularity and complete regularity are [L2]. [L1, L2]

1.2 A subspace of a $T_3$ space is regular by [L2] and $T_1$ by [L1], hence is $T_3$. [F1, L1, L2]

1.3 A subspace of a Tychonoff space is completely regular by [L2] and $T_1$ by [L1], hence is Tychonoff. [F1, L1, L2]

2.1 These cover every property named in the statement. [step 1.1, step 1.2, step 1.3] ∎
````

### `thm-positive-productivity-of-separation-axioms`

````markdown
---
id: thm-positive-productivity-of-separation-axioms
kind: theorem
title: "$T_0$, $T_1$, $T_2$, regularity, $T_3$, complete regularity, and Tychonoffness are productive"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-products-preserve-t0-t1-and-hausdorff, lem-products-preserve-regularity, lem-products-preserve-complete-regularity, def-regular-and-t3-spaces, def-completely-regular-and-tychonoff-spaces]
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
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

Each of $T_0$, $T_1$, Hausdorffness ($T_2$), regularity, $T_3$, complete regularity, and Tychonoffness is productive.

## Facts & Assumptions

**Given:** A family of spaces having one of the listed separation properties.

[L1] Arbitrary products preserve $T_0$, $T_1$, Hausdorffness, regularity, and complete regularity as stated in the three preceding lemmas ([[lem-products-preserve-t0-t1-and-hausdorff]], [[lem-products-preserve-regularity]], [[lem-products-preserve-complete-regularity]]).

[F1] $T_3$ is regular plus $T_1$, and Tychonoff is completely regular plus $T_1$ ([[def-regular-and-t3-spaces]], [[def-completely-regular-and-tychonoff-spaces]]).

## Proof

**Proof technique:** direct.

1.1 The assertions for $T_0$, $T_1$, $T_2$, regularity, and complete regularity are [L1]. [L1]

1.2 A product of $T_3$ spaces is regular and $T_1$ by [L1], hence is $T_3$. [F1, L1]

1.3 A product of Tychonoff spaces is completely regular and $T_1$ by [L1], hence is Tychonoff. [F1, L1]

2.1 Therefore every property in the statement is productive. [step 1.1, step 1.2, step 1.3] ∎
````


## Selection reasons

- critical risk (8): 6 declared dependencies; 5 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `ex-pointwise-but-not-uniform-convergence-on-a-countable-domain`

Normalized current SHA-256: `7a788ae9b7d30951a9cd6e8ca575235b56e13e341b060c8e6a8745dcf25fae5b`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-pointwise-but-not-uniform-convergence-on-a-countable-domain
kind: example
title: "The functions $f_n(k)=1$ for $k\\ge n$ and $0$ otherwise converge pointwise but not uniformly on $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-and-uniform-convergence-uniformities, lem-uniform-convergence-uniformity-is-finer-than-pointwise, def-standard-topologies, def-sequence-convergence-top, def-metric-space, lem-metric-uniformity-dictionary]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Give $\{0,1\}$ the uniformity of its zero-one metric. For $n,k\in\mathbb N$, let $f_n(k)=1$ when $k\ge n$ and $f_n(k)=0$ otherwise. Then $f_n$ converges pointwise, but not uniformly, to the zero function.

## Facts & Assumptions

**Given:** The function set $\{0,1\}^{\mathbb N}$.

[L1] For $d(u,v)=0$ when $u=v$ and $d(u,v)=1$ otherwise, separation and symmetry are immediate, while the triangle inequality follows because $u\ne w$ forces $u\ne v$ or $v\ne w$. Thus $d$ is a metric; its radius-$1/2$ balls are singletons, so its topology is discrete, and its radius-$1/2$ entourage is equality ([[def-metric-space]], [[lem-metric-uniformity-dictionary]], [[def-standard-topologies]]).

[L2] Pointwise and uniform convergence are the two function-space uniformities of [[def-pointwise-and-uniform-convergence-uniformities]].

[L3] Sequence convergence means eventual membership in every neighbourhood ([[def-sequence-convergence-top]]).

## Verification

**Proof technique:** direct.

1.1 For fixed $k$, all $n>k$ have $f_n(k)=0$, so the coordinate sequence converges to $0$. [L1, L3]

1.2 For every $n$, $f_n(n)=1$, so $f_n$ is not in the uniform entourage induced by equality on $\{0,1\}$. [L1, L2]

2.1 Thus $f_n$ converges pointwise to zero by [L2]. [step 1.1, L2]

3.1 Hence convergence is not uniform. [step 1.2] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "ex-pointwise-but-not-uniform-convergence-on-a-countable-domain",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "established-knowledge",
  "urls": [],
  "rationale": "ESCALATED TO ALPHA. Moving-tail indicator functions are a canonical pointwise-not-uniform witness, but no reputable source with this exact N-to-{0,1} construction surfaced. The verification is direct and established; its discrete-uniformity citation is incomplete. ALPHA CONCURRENCE: Moving-tail indicator functions on N are a canonical example separating pointwise from uniform convergence: every coordinate is eventually zero while each function still attains one. The zero-one target uniformity makes the standard witness exact.",
  "alpha_concurred": true,
  "at": "2026-08-08",
  "ledger": "wave7-topology-uniform.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-standard-topologies",
      "source_section": "Definition",
      "quote": "1. **Discrete topology.** $\\mathcal{T}_{\\mathrm{disc}} := \\mathcal{P}(X)$: every\n   subset is open, hence every subset is closed, hence every subset is clopen.\n2. **Indiscrete topology.** $\\mathcal{T}_{\\mathrm{ind}} := \\{\\varnothing, X\\}$.\n   Its closed sets are again $\\varnothing$ and $X$.\n3. **Cofinite topology.**\n   $\\mathcal{T}_{\\mathrm{cof}} := \\{\\varnothing\\} \\cup \\{\\, U \\subseteq X : X \\setminus U \\text{ is finite} \\,\\}$.\n   Its closed sets are $X$ together with the finite subsets of $X$.\n4. **Cocountable topology.**\n   $\\mathcal{T}_{\\mathrm{coc}} := \\{\\varnothing\\} \\cup \\{\\, U \\subseteq X : X \\setminus U \\text{ is at most countable} \\,\\}$.\n   Its closed sets are $X$ together with the at most countable subsets of $X$.\n5. **Particular-point topology.** Fix $p \\in X$ and put\n   $\\mathcal{T}_p := \\{\\varnothing\\} \\cup \\{\\, U \\subseteq X : p \\in U \\,\\}$: the\n   open sets are $\\varnothing$ and the sets containing $p$. Its closed sets are\n   $X$ together with the sets **not** containing $p$.\n6. **Sierpinski topology.** On a two-point set $S = \\{a, b\\}$ with $a \\ne b$,\n   $\\mathcal{T}_{\\mathrm{Sier}} := \\{\\varnothing, \\{b\\}, S\\}$. The pair\n   $(S, \\mathcal{T}_{\\mathrm{Sier}})$ is **Sierpinski space**; $b$ is its open\n   point and $a$ its closed point. This is exactly the particular-point topology\n   of item 5 on a two-point set with particular point $b$, listed separately\n   because it is quoted so often.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-metric-space",
      "source_section": "Definition",
      "quote": "Let $X$ be a set. A **metric** on $X$ is a function\n$d : X \\times X \\to \\mathbb{R}$ such that for all $x, y, z \\in X$:\n\n- **(M1) Separation.** $d(x,y) = 0$ if and only if $x = y$.\n- **(M2) Symmetry.** $d(x,y) = d(y,x)$.\n- **(M3) Triangle inequality.** $d(x,z) \\le d(x,y) + d(y,z)$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-metric-uniformity-dictionary",
      "source_section": "Statement",
      "quote": "For a metric space $(X,d)$ with $X\\ne\\varnothing$, the sets $E_\\varepsilon=\\{(x,y):d(x,y)<\\varepsilon\\}$, $\\varepsilon>0$, generate a separated uniformity. Its induced topology is the metric topology, and uniform continuity to another metric uniformity is exactly metric uniform continuity.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-pointwise-and-uniform-convergence-uniformities",
      "source_section": "Definition",
      "quote": "The relations $P(F,V)$ form an entourage base: finite intersections are\nrefined by replacing $F$ with a finite union and $V$ with a common refinement;\ninverses replace $V$ by $V^{-1}$; and a square root of $V$ gives a square root\nof $P(F,V)$. The same verification with the fixed coordinate set $X$ proves\nthe axioms for the $Q(V)$. The uniformities they generate are respectively the\n**pointwise-convergence** and **uniform-convergence** uniformities on $Y^X$.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-sequence-convergence-top",
      "source_section": "Definition",
      "quote": "- $(x_k)$ **converges to $p$**, written $x_k \\to p$, if for every neighbourhood\n  $N$ of $p$ one has $x_k \\in N$ eventually. The point $p$ is then called **a\n  limit of $(x_k)$**.\n- $p$ is a **cluster point** of $(x_k)$ if for every neighbourhood $N$ of $p$ one\n  has $x_k \\in N$ frequently.\n- For $A \\subseteq X$, the **sequential closure** of $A$ is\n  $$\\operatorname{seqcl}(A) := \\{\\, p \\in X : x_k \\to p \\text{ for some sequence } (x_k) \\text{ with } x_k \\in A \\text{ for all } k \\,\\} .$$\n- A function $f : X \\to Y$ into a topological space $Y$ is **sequentially\n  continuous at $p$** if $x_k \\to p$ in $X$ implies $f(x_k) \\to f(p)$ in $Y$, and\n  **sequentially continuous** if it is sequentially continuous at every point of\n  $X$ ([[def-continuous-map-top]] for the ordinary notion).",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "For fixed $k$, all $n>k$ have $f_n(k)=0$, so the coordinate sequence converges to $0$. [L1, L3]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "For every $n$, $f_n(n)=1$, so $f_n$ is not in the uniform entourage induced by equality on $\\{0,1\\}$. [L1, L2]",
      "step": "1.2",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Thus $f_n$ converges pointwise to zero by [L2]. [step 1.1, L2]",
      "step": "2.1",
      "inputs": [
        "L2",
        "1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Hence convergence is not uniform. [step 1.2] ∎",
      "step": "3.1",
      "inputs": [
        "1.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: any given uniform space has nonempty carrier under the library's proper-filter convention, and a topological group contains its identity"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.1: zero distance, zero index, or the base-value case was inspected under the displayed inequalities and definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the singleton, identity, finite-one, or unit-scale case was inspected"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "statement and step 1.1: the diagonal, coincident-point, constant, minimal, or equality degeneration was checked"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval endpoint, one-sided limit, or strict-versus-weak boundary enters the claim."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The proof uses formula-defined objects and fixed quantified data and makes no selection from an asserted nonempty family."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional and has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (8): 6 declared dependencies; 5 cited facts; boundary-sensitive language; analytic limiting/completeness language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: Checked the boundary cases explicitly: n=0 gives f_0 constant 1, yet the pointwise limit is still the zero function (for k=0, f_n(0)=0 for all n≥1; for k>0, n>k from n=1 onward). The argument ``all n>k have f_n(k)=0`` holds for k=0 as well (n>0 includes n=1,2,…). k=0 case is therefore covered. f_n(n)=1 is true for n=0 too. The uniform non-convergence uses the entourage Q(equality); it is a basic entourage of the uniform-convergence uniformity and f_n never belongs to the ball Q(equality)[0], so convergence fails. The domain ℕ is nonempty; the codomain {0,1} is nonempty and its metric uniformity is well defined. A search for counterexamples (e.g., different indexings, alternative uniformities on {0,1}, finite-domain collapse) yields none; the witness is canonical and mathematically sound. Checked surface: The title, the public statement (Example section), all numbered steps (1.1, 1.2, 2.1, 3.1), and the Facts & Assumptions were read. There are no Remarks. Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/ex-pointwise-but-not-uniform-convergence-on-a-countable-domain--9dc2ddd797d8252c.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-pointwise-but-not-uniform-convergence-on-a-countable-domain",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "def-pointwise-and-uniform-convergence-uniformities",
    "declared_target": "def-pointwise-and-uniform-convergence-uniformities",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-pointwise-but-not-uniform-convergence-on-a-countable-domain",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "lem-uniform-convergence-uniformity-is-finer-than-pointwise",
    "declared_target": "lem-uniform-convergence-uniformity-is-finer-than-pointwise",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-pointwise-but-not-uniform-convergence-on-a-countable-domain",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "def-standard-topologies",
    "declared_target": "def-standard-topologies",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-pointwise-but-not-uniform-convergence-on-a-countable-domain",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "def-sequence-convergence-top",
    "declared_target": "def-sequence-convergence-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-pointwise-but-not-uniform-convergence-on-a-countable-domain",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "def-metric-space",
    "declared_target": "def-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-pointwise-but-not-uniform-convergence-on-a-countable-domain",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "lem-metric-uniformity-dictionary",
    "declared_target": "lem-metric-uniformity-dictionary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
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

### `def-metric-space`

````markdown
---
id: def-metric-space
kind: definition
title: "Metric space: $d(x,y) = 0$ iff $x = y$, symmetry, and the triangle inequality; pseudometric and ultrametric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order, def-complete-ordered-field, def-ordered-field,
       def-max-min, lem-finite-set-has-max]
justified_by: []
aliases: [def-metric, def-pseudometric, def-ultrametric]
landmark: true
short: "metric space $(X,d)$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Ultrametric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrametric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis II, 3rd ed., Ch. 1"
      url: "https://terrytao.wordpress.com/books/analysis-ii/"
    - title: "Pseudometric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pseudometric_space"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) constructed in this
library ([[def-real-numbers]]) and carrying its order ([[def-real-order]]).

Let $X$ be a set. A **metric** on $X$ is a function
$d : X \times X \to \mathbb{R}$ such that for all $x, y, z \in X$:

- **(M1) Separation.** $d(x,y) = 0$ if and only if $x = y$.
- **(M2) Symmetry.** $d(x,y) = d(y,x)$.
- **(M3) Triangle inequality.** $d(x,z) \le d(x,y) + d(y,z)$.

A **metric space** is a pair $(X,d)$ consisting of a set $X$ and a metric $d$ on
it. The elements of $X$ are its **points** and $d(x,y)$ is the **distance** from
$x$ to $y$. When only one metric is in play we write $X$ for $(X,d)$; when
several are, the metric is always named.

**The values of a metric are real numbers.** The codomain is $\mathbb{R}$, so
$d(x,y)$ is an honest element of the complete ordered field and every
inequality above is an inequality there. No infinite value is permitted;
[[rem-metric-axiom-conventions]] records why extended metrics are not treated in
this library.

**Nonnegativity is deliberately absent from the axiom list.** Many texts add a
fourth axiom $d(x,y) \ge 0$. It is redundant: (M1), (M2) and (M3) already force
it, as [[lem-metric-nonnegativity]] proves. Nothing below assumes it before that
lemma is available.

**Pseudometric.** A **pseudometric** on $X$ is a function
$p : X \times X \to \mathbb{R}$ satisfying (M2), (M3) and the weakening

- **(M1') Reflexivity.** $p(x,x) = 0$ for every $x \in X$

of (M1). A pseudometric may therefore assign distance $0$ to two distinct
points. Every metric is a pseudometric, and a pseudometric is a metric exactly
when $p(x,y) = 0$ forces $x = y$.

**Ultrametric.** An **ultrametric** on $X$ is a metric $d$ that in addition
satisfies

- **(M3') Strong triangle inequality.** $d(x,z) \le \max\{d(x,y), d(y,z)\}$

for all $x, y, z \in X$, where the maximum is that of a two-element subset of
$\mathbb{R}$, which exists and is one of the two elements
([[def-max-min]], [[lem-finite-set-has-max]]). An **ultrametric space** is a pair
$(X,d)$ with $d$ an ultrametric.

## Remarks

- **(M3') is a genuine strengthening of (M3), not an independent axiom on top of
  it.** A function satisfying (M1), (M2) and (M3') automatically satisfies (M3):
  by [[lem-metric-nonnegativity]] such a function is nonnegative, and for
  nonnegative reals $a, b$ one has $\max\{a,b\} \le a + b$, since the maximum is
  one of $a, b$ and the other summand is $\ge 0$. So "a metric satisfying (M3')"
  and "a function satisfying (M1), (M2), (M3')" describe the same objects, and
  the definition above may be read either way.

- **Why the biconditional form of (M1).** Splitting (M1) into "$d(x,x) = 0$" and
  "$d(x,y) = 0 \Rightarrow x = y$" gives the same notion; the split form is what
  makes the pseudometric weakening above a matter of deleting one clause. The
  naming fork between *pseudometric* and *semimetric*, which is live in the
  literature, is settled for this library in
  [[rem-metric-axiom-conventions]].

- **The metric is part of the data.** Two different metrics on the same set are
  two different metric spaces, even when they have the same open sets. That is
  why [[def-equivalent-metrics]] compares metrics at three separate strengths
  rather than one, and why a property can be invariant under one of them and not
  under another ([[fs-boundedness-is-a-topological-property]]).
````

### `def-pointwise-and-uniform-convergence-uniformities`

````markdown
---
id: def-pointwise-and-uniform-convergence-uniformities
kind: definition
title: "The pointwise and uniform-convergence uniformities on a function set $Y^X$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-uniform-space-by-entourages, def-finite-cardinality]
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
  references: [{title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Definition

Let $Y$ be uniform and let $Y^X$ be the set of maps $X\to Y$. For an entourage $V$ of $Y$ and finite $F\subseteq X$ ([[def-finite-cardinality]]), define

$$P(F,V)=\{(f,g):(f(x),g(x))\in V\text{ for every }x\in F\},\qquad Q(V)=\{(f,g):(f(x),g(x))\in V\text{ for every }x\in X\}.$$

The relations $P(F,V)$ form an entourage base: finite intersections are
refined by replacing $F$ with a finite union and $V$ with a common refinement;
inverses replace $V$ by $V^{-1}$; and a square root of $V$ gives a square root
of $P(F,V)$. The same verification with the fixed coordinate set $X$ proves
the axioms for the $Q(V)$. The uniformities they generate are respectively the
**pointwise-convergence** and **uniform-convergence** uniformities on $Y^X$.
````

### `def-sequence-convergence-top`

````markdown
---
id: def-sequence-convergence-top
kind: definition
title: "Convergence and cluster points of a sequence in a topological space, sequential continuity, and the sequential closure"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-sequence, def-natural-numbers, def-continuous-map-top,
       lem-limit-unique, lem-metric-limits-unique, lem-metric-ball-neighbourhood-base, def-metric-convergence]
justified_by: []
aliases: [def-sequential-continuity-top, def-sequential-closure-top]
landmark: true
short: "convergence of sequences in a space"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Sequential space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequential_space"
    - title: "J. Munkres, Topology, 2nd ed., §21"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
neighbourhoods as in [[def-neighbourhood-top]].

A **sequence in $X$** is a function $x : \mathbb{N} \to X$, written $(x_k)$ with
$x_k := x(k)$. As everywhere in this library $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and a sequence is indexed from $0$
([[def-sequence]]); an index range copied from a text that starts at $1$ must be
shifted before it is used here. The **range** of $(x_k)$ is
$\{\, x_k : k \in \mathbb{N} \,\}$. Following [[def-sequence]], a property of
indices holds **eventually** if it holds for all $k \ge K$ for some
$K \in \mathbb{N}$, and **frequently** if for every $K$ it holds for some
$k \ge K$; that vocabulary is used here for sequences in an arbitrary set.

Let $(x_k)$ be a sequence in $X$ and let $p \in X$.

- $(x_k)$ **converges to $p$**, written $x_k \to p$, if for every neighbourhood
  $N$ of $p$ one has $x_k \in N$ eventually. The point $p$ is then called **a
  limit of $(x_k)$**.
- $p$ is a **cluster point** of $(x_k)$ if for every neighbourhood $N$ of $p$ one
  has $x_k \in N$ frequently.
- For $A \subseteq X$, the **sequential closure** of $A$ is
  $$\operatorname{seqcl}(A) := \{\, p \in X : x_k \to p \text{ for some sequence } (x_k) \text{ with } x_k \in A \text{ for all } k \,\} .$$
- A function $f : X \to Y$ into a topological space $Y$ is **sequentially
  continuous at $p$** if $x_k \to p$ in $X$ implies $f(x_k) \to f(p)$ in $Y$, and
  **sequentially continuous** if it is sequentially continuous at every point of
  $X$ ([[def-continuous-map-top]] for the ordinary notion).

**The notation $\lim_k x_k$ is not available at this generality, and the reason
is not fastidiousness.** In a general topological space a sequence may converge
to more than one point, so there is no function taking a convergent sequence to
"its" limit, and a symbol $\lim_k x_k$ would not denote. In the indiscrete
topology on a set with at least two points the only neighbourhood of any point is
$X$, so **every** sequence converges to **every** point; in the cofinite topology
on an infinite set every injective sequence converges to every point. Both
witnesses are on the companion page. Accordingly this library writes "$p$ is *a*
limit of $(x_k)$" and "$(x_k)$ converges to $p$", never "*the* limit" and never
$\lim_k x_k$, for a sequence in a space that has not been given a hypothesis
restoring uniqueness.

**Where the notation becomes legitimate again.** Uniqueness of limits is what
licenses the symbol, exactly as it does for sequences of reals
([[lem-limit-unique]]) and in a metric space ([[lem-metric-limits-unique]]): in a
metric space a sequence has at most one limit and $\lim_k x_k$ is unambiguous.
Every metrizable space therefore admits the notation, and so does every space in
which distinct points have disjoint neighbourhoods; where this page uses a
metrizable space, and only there, the usual notation is used without further
comment. The general reading of "$x_k \to p$" above never presupposes it.

**Convergence agrees with the metric notion on a metric topology.** For a metric
space the balls around $p$ are a neighbourhood base at $p$
([[lem-metric-ball-neighbourhood-base]]), so "eventually in every neighbourhood
of $p$" and "eventually in every ball around $p$" are the same condition, and the
latter is [[def-metric-convergence]]. The identification is carried out where
metrizable spaces are defined, later on this page.

## Remarks

- **Every limit is a cluster point, and not conversely.** "Eventually" implies
  "frequently", so a point to which $(x_k)$ converges is a cluster point of it.
  A sequence in a two-point discrete space that takes each of the two values
  frequently has both points as cluster points and converges to neither, since
  each singleton is a neighbourhood of its point and is missed frequently.

- **Constant sequences.** If $x_k = a$ for every $k$, then $x_k \to a$, since
  every neighbourhood of $a$ contains $a$. More generally an *eventually*
  constant sequence with eventual value $a$ converges to $a$. This is the only
  convergence available in a discrete space, where $\{a\}$ is a neighbourhood of
  $a$ and forces $x_k = a$ eventually.

- **Sequential continuity is a strictly weaker condition than continuity in
  general**, and the two agree under a countability hypothesis proved later on
  this page. That is the whole reason sequences are treated here as a separate
  notion rather than as the definition of continuity, and it is why nets and
  filters exist as a subject.
````

### `def-standard-topologies`

````markdown
---
id: def-standard-topologies
kind: definition
title: "The discrete, indiscrete, cofinite, cocountable, particular-point and Sierpinski topologies"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-countable, lem-subset-of-countable, thm-countable-union-of-countable,
       def-equinumerous, def-injection-surjection-bijection, def-natural-numbers,
       lem-nat-order-is-membership, lem-nat-transitive-irreflexive, thm-induction-principle]
justified_by: []
aliases: [def-discrete-topology, def-indiscrete-topology, def-cofinite-topology,
          def-cocountable-topology, def-particular-point-topology, def-sierpinski-space]
landmark: true
short: "discrete, indiscrete, cofinite, cocountable, particular point, Sierpinski"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
    - title: "Trivial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Trivial_topology"
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
    - title: "Particular point topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Particular_point_topology"
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
pipeline_run: null
---

## Definition

Throughout, a topology is as in [[def-topological-space]], and *finite*,
*at most countable* and *uncountable* are as in [[def-countable]], so that
"countable" always means "at most countable" and every finite set is countable.
Let $X$ be a set. The six families below are topologies on $X$; that each really
satisfies (T1), (T2) and (T3) is discharged in full after the list.

1. **Discrete topology.** $\mathcal{T}_{\mathrm{disc}} := \mathcal{P}(X)$: every
   subset is open, hence every subset is closed, hence every subset is clopen.
2. **Indiscrete topology.** $\mathcal{T}_{\mathrm{ind}} := \{\varnothing, X\}$.
   Its closed sets are again $\varnothing$ and $X$.
3. **Cofinite topology.**
   $\mathcal{T}_{\mathrm{cof}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is finite} \,\}$.
   Its closed sets are $X$ together with the finite subsets of $X$.
4. **Cocountable topology.**
   $\mathcal{T}_{\mathrm{coc}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is at most countable} \,\}$.
   Its closed sets are $X$ together with the at most countable subsets of $X$.
5. **Particular-point topology.** Fix $p \in X$ and put
   $\mathcal{T}_p := \{\varnothing\} \cup \{\, U \subseteq X : p \in U \,\}$: the
   open sets are $\varnothing$ and the sets containing $p$. Its closed sets are
   $X$ together with the sets **not** containing $p$.
6. **Sierpinski topology.** On a two-point set $S = \{a, b\}$ with $a \ne b$,
   $\mathcal{T}_{\mathrm{Sier}} := \{\varnothing, \{b\}, S\}$. The pair
   $(S, \mathcal{T}_{\mathrm{Sier}})$ is **Sierpinski space**; $b$ is its open
   point and $a$ its closed point. This is exactly the particular-point topology
   of item 5 on a two-point set with particular point $b$, listed separately
   because it is quoted so often.

**Two elementary facts about finite sets are used below, and both are proved
here.**

*(i) A subset of a finite set is finite.* Let $F \approx n$ with $n \in \mathbb{N}$
([[def-equinumerous]], [[def-natural-numbers]]), witnessed by a bijection
$\varphi : F \to n$, and let $B \subseteq F$. Then $\varphi$ restricts to a
bijection of $B$ onto $\varphi[B] \subseteq n$
([[def-injection-surjection-bijection]]). Every element of the von Neumann natural
$n$ is a natural number strictly smaller than $n$
([[lem-nat-order-is-membership]]), so $\varphi[B]$ is a subset of $\mathbb{N}$
bounded above by $n$, hence finite by the sharper form of
[[lem-subset-of-countable]] ("a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above"). Since $\approx$ is symmetric and transitive, $B$ is finite.

*(ii) A union of two finite sets is finite.* First, if $H$ is finite and $g$ is
any object then $H \cup \{g\}$ is finite: if $g \in H$ there is nothing to prove,
and otherwise a bijection $u : H \to k$ extends to a bijection
$H \cup \{g\} \to k \cup \{k\} = \sigma(k)$ by setting $u(g) := k$, which is
injective because $k \notin k$ ([[lem-nat-transitive-irreflexive]]). Now fix a
finite set $F$ and argue by induction ([[thm-induction-principle]]) on
$m \in \mathbb{N}$ over the statement "for every $G$ with $G \approx m$, the union
$F \cup G$ is finite". At $m = 0$ we have $G = \varnothing$ and $F \cup G = F$. At
$m = \sigma(j)$, a bijection $\psi : G \to \sigma(j)$ gives $g := \psi^{-1}(j)$
and $G' := G \setminus \{g\} \approx j$ (restrict $\psi$), so
$F \cup G = (F \cup G') \cup \{g\}$ is finite by the induction hypothesis and the
previous sentence.

**Discharge of the topology axioms.**

*Discrete.* Every subset of $X$ lies in $\mathcal{P}(X)$, so (T1), (T2) and (T3)
hold with nothing to check.

*Indiscrete.* (T1) is the definition. For (T2), a subfamily of
$\{\varnothing, X\}$ has union $\varnothing$ (if it is empty or $\{\varnothing\}$)
or $X$ (otherwise). For (T3), $\varnothing \cap A = \varnothing$ and
$X \cap X = X$.

*Cofinite.* (T1): $\varnothing$ is listed, and $X \setminus X = \varnothing$ is
finite. (T2): let $\mathcal{S} \subseteq \mathcal{T}_{\mathrm{cof}}$. If every
member is $\varnothing$ the union is $\varnothing$. Otherwise fix
$U_0 \in \mathcal{S}$ with $U_0 \ne \varnothing$; then
$X \setminus \bigcup \mathcal{S} \subseteq X \setminus U_0$, which is finite, so
the left side is finite by (i). (T3): for nonempty $U, V$ with finite
complements, $X \setminus (U \cap V) = (X \setminus U) \cup (X \setminus V)$ is
finite by (ii); and if either of $U, V$ is empty so is $U \cap V$. The closed sets
are the complements of the open ones, that is $X = X \setminus \varnothing$
together with the finite sets.

*Cocountable.* Identical to the cofinite case with "at most countable" in place of
"finite": (i) is replaced by [[lem-subset-of-countable]] itself, and (ii) by the
statement that a union of two at most countable sets is at most countable, which
is the two-set instance of [[thm-countable-union-of-countable]] applied to the
family $A_0 := U, A_1 := V, A_k := \varnothing$ for $k \ge 2$.

*Particular point.* (T1): $\varnothing$ is listed and $p \in X$. (T2): a
subfamily whose members are all $\varnothing$ has union $\varnothing$; otherwise
some member contains $p$, hence so does the union. (T3): if $U$ and $V$ both
contain $p$ then so does $U \cap V$; and if either is $\varnothing$ then so is the
intersection.

*Sierpinski.* The special case $X = \{a,b\}$, $p = b$ of the previous paragraph:
the sets containing $b$ are $\{b\}$ and $S$, so
$\mathcal{T}_b = \{\varnothing, \{b\}, S\} = \mathcal{T}_{\mathrm{Sier}}$.

## Remarks

- **Two degenerate collapses.** If $X$ is finite then the cofinite topology is
  the discrete one, since every subset then has finite complement by fact (i)
  above; if $X$ is at most countable the cocountable topology is discrete for the
  same reason. Both families are therefore interesting only on an infinite,
  respectively uncountable, set, and every statement made about them below names
  that hypothesis.

- **Where the two extremes sit in the comparison order.** The discrete topology
  is the finest and the indiscrete the coarsest topology on $X$
  ([[def-topological-space]]): every topology is a subfamily of $\mathcal{P}(X)$
  and contains $\varnothing$ and $X$. Every other topology on $X$ lies between
  them, and the cofinite topology is coarser than the cocountable one, because a
  finite set is at most countable.

- **No choice principle is needed for any of the six, despite the citation.**
  The only appeal above that carries a choice hypothesis is
  [[thm-countable-union-of-countable]], whose statement assumes
  $\mathrm{AC}_\omega$, and it is used for a union of **two** sets only, padded
  with copies of $\varnothing$. That instance is provable in ZF alone, by
  interleaving two *given* enumerations, exactly as
  [[cor-irrationals-uncountable]] records for the union of the rationals and the
  irrationals; the general theorem is cited because it is the form in which this
  library states the union result, not because the strength is needed. Nothing
  about the cocountable topology depends on countable choice.

- **The Sierpinski point that is open is a genuine choice of labelling.** Both
  $\{\varnothing,\{b\},S\}$ and $\{\varnothing,\{a\},S\}$ are topologies, and they
  are carried to each other by the transposition of $a$ and $b$; this library
  fixes the first and always names the open point.
````

### `lem-metric-uniformity-dictionary`

````markdown
---
id: lem-metric-uniformity-dictionary
kind: lemma
title: "A metric on a nonempty set generates an entourage uniformity whose induced topology and uniformly continuous maps are the usual metric notions, and this uniformity is separated"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-space-by-entourages, thm-uniformity-induces-a-topology, def-separated-uniform-space, def-uniformly-continuous-map, def-metric-space, def-metric-topology, def-metric-uniform-continuity, def-filter-base, lem-filter-base-generates]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

For a metric space $(X,d)$ with $X\ne\varnothing$, the sets $E_\varepsilon=\{(x,y):d(x,y)<\varepsilon\}$, $\varepsilon>0$, generate a separated uniformity. Its induced topology is the metric topology, and uniform continuity to another metric uniformity is exactly metric uniform continuity.

## Facts & Assumptions

**Given:** Metric spaces $(X,d)$ and $(Y,\rho)$ with $X\ne\varnothing$ and $Y\ne\varnothing$.

[L1] A metric has symmetry and the triangle inequality, and a pseudometric is a metric exactly when zero distance separates points ([[def-metric-space]]).

[L2] Metric-open sets are those containing a positive-radius ball about each point ([[def-metric-topology]]).

[L3] Metric uniform continuity means: for every $\varepsilon>0$ there is $\delta>0$ such that $d(x,x')<\delta$ implies $\rho(f(x),f(x'))<\varepsilon$ ([[def-metric-uniform-continuity]]).

[L4] A nonempty proper downward-directed family is a filter base, whose upward closure is the least filter containing it ([[def-filter-base]], [[lem-filter-base-generates]]).

[L5] In an entourage uniformity, entourage balls form a neighbourhood base for the induced topology ([[thm-uniformity-induces-a-topology]]).

## Proof

**Proof technique:** direct.

1.1 The diagonal lies in every $E_\varepsilon$, inverses agree with $E_\varepsilon$ by symmetry, intersections contain $E_{\min(\varepsilon,\delta)}$, and $E_{\varepsilon/2}\circ E_{\varepsilon/2}\subseteq E_\varepsilon$ by the triangle inequality. [L1]

2.1 The family $(E_\varepsilon)_{\varepsilon>0}$ is nonempty, none of its members is empty because $X\ne\varnothing$, and it is downward directed by step 1.1, so [L4] makes its upward closure a filter. The diagonal, inverse, and square-root properties in step 1.1 then make it a uniformity. Its $E_\varepsilon[x]$ are precisely metric balls, so its induced topology is the metric topology by [L2] and [L5]. [step 1.1, L2, L4, L5]

2.2 The intersection of all $E_\varepsilon$ is the diagonal, since $d(x,y)>0$ for $x\ne y$ and $E_{d(x,y)/2}$ excludes $(x,y)$; hence the uniformity is separated. [L1, step 1.1]

3.1 The defining entourage implication for $E_\delta$ and $E_\varepsilon$ is exactly the quantified condition of [L3], which proves the final equivalence. [L3] ∎
````

### `lem-uniform-convergence-uniformity-is-finer-than-pointwise`

````markdown
---
id: lem-uniform-convergence-uniformity-is-finer-than-pointwise
kind: lemma
title: "The uniform-convergence uniformity is finer than the pointwise uniformity, and they agree when the domain is finite"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-and-uniform-convergence-uniformities, def-finite-cardinality]
aliases: []
landmark: false
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
  references: [{title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

The uniform-convergence uniformity on $Y^X$ is finer than the pointwise-convergence uniformity. If $X$ is finite, they are equal.

## Facts & Assumptions

**Given:** A uniform space $Y$, a set $X$, an entourage $V$, and finite $F\subseteq X$.

[L1] Pointwise basic entourages require $V$-closeness on $F$, while uniform basic entourages require it on all of $X$ ([[def-pointwise-and-uniform-convergence-uniformities]]).

[L2] Finiteness allows $X$ itself as an allowed finite coordinate set ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 $Q(V)\subseteq P(F,V)$, so every pointwise basic entourage contains a uniform basic entourage. [L1]

1.2 If $X$ is finite, $P(X,V)=Q(V)$ by [L1] and [L2], so each uniform basic entourage is pointwise basic as well. [L1, L2]

2.1 Hence uniform convergence is finer than pointwise convergence. [step 1.1]

3.1 The two uniformities are equal in the finite-domain case. [step 2.1, step 1.2] ∎
````


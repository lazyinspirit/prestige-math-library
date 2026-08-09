## Selection reasons

- high risk (7): 7 declared dependencies; 7 cited facts; boundary-sensitive language

## Target item — `cor-compact-domain-maps-are-uniformly-continuous`

Normalized current SHA-256: `ed4880dc07ccf773dee888fb8e31c08142af521ec72acfe68f664263ab29ec60`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-compact-domain-maps-are-uniformly-continuous
kind: corollary
title: "Every continuous map from a nonempty compact Hausdorff space to a uniform space is uniformly continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-compact-hausdorff-space-has-a-unique-compatible-uniformity, thm-compact-hausdorff-open-cover-uniformity, def-uniformly-continuous-map, def-continuous-map-top, thm-uniformity-induces-a-topology, lem-symmetric-entourages-form-a-base, lem-entourage-and-uniform-cover-dictionary]
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

Every continuous map from a nonempty compact Hausdorff space to a uniform space is uniformly continuous.

## Facts & Assumptions

**Given:** A continuous map $f:X\to Y$ with $X$ nonempty compact Hausdorff and $Y$ uniform.

[L1] A compact Hausdorff space has one compatible uniformity ([[thm-compact-hausdorff-space-has-a-unique-compatible-uniformity]]).

[L2] Continuity means that every neighbourhood of $f(x)$ contains the image of some neighbourhood of $x$, while uniform continuity is the entourage condition ([[def-continuous-map-top]], [[def-uniformly-continuous-map]]).

[L3] Every entourage ball is a neighbourhood in the induced topology ([[thm-uniformity-induces-a-topology]]). Every open cover of a nonempty compact Hausdorff space is uniform ([[thm-compact-hausdorff-open-cover-uniformity]]), and every uniform cover has an entourage-ball cover refining it ([[lem-entourage-and-uniform-cover-dictionary]]); every target entourage has a symmetric square root ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** direct.

1.1 Let $V$ be a target entourage and choose a symmetric $W$ with $W^{-1}\circ W=W^{\circ2}\subseteq V$. For each $x\in X$, let $O_x$ be the union of all open sets $O$ such that $x\in O$ and $f[O]\subseteq W[f(x)]$. Continuity makes this family nonempty, and its union is an open neighbourhood of $x$ satisfying $f[O_x]\subseteq W[f(x)]$. [L2, L3, construct]

2.1 The open cover $(O_x)_{x\in X}$ is uniform by [L3]. Hence there is a source entourage $E$ whose ball cover refines it: for each $a\in X$, some $O_x$ contains $E[a]$. [step 1.1, L1, L3]

3.1 If $(a,b)\in E$, then $a,b\in E[a]\subseteq O_x$ for some $x$. Thus $f(a),f(b)\in W[f(x)]$, so $(f(a),f(b))\in W^{-1}\circ W\subseteq V$. This is uniform continuity. [step 1.1, step 2.1, L2] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "cor-compact-domain-maps-are-uniformly-continuous",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf",
    "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"
  ],
  "rationale": "Wodzicki Theorem 4.7 and BIU state the compact-domain theorem for the natural compatible uniformity. The library convention requires a nonempty domain, and the proof needs the cover dictionary cited explicitly.",
  "alpha_concurred": false,
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
      "source": "thm-compact-hausdorff-space-has-a-unique-compatible-uniformity",
      "source_section": "Statement",
      "quote": "A nonempty compact Hausdorff topology carries exactly one compatible uniformity.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-uniformly-continuous-map",
      "source_section": "Definition",
      "quote": "For uniform spaces $(X,\\mathcal U_X)$ and $(Y,\\mathcal U_Y)$, a map $f:X\\to Y$ is **uniformly continuous** if for every $V\\in\\mathcal U_Y$ there is $U\\in\\mathcal U_X$ such that $(x,x')\\in U$ implies $(f(x),f(x'))\\in V$. The controlling entourage $U$ is independent of the point $x$.",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-continuous-map-top",
      "source_section": "Definition",
      "quote": "$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the\npreimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-uniformity-induces-a-topology",
      "source_section": "Statement",
      "quote": "For a uniformity $\\mathcal U$ on $X$, call $O\\subseteq X$ open when every $x\\in O$ has an entourage $E$ with $E[x]\\subseteq O$. These open sets form a topology on $X$. Its neighbourhood filter at $x$ has $\\{E[x]:E\\in\\mathcal U\\}$ as a base.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-compact-hausdorff-open-cover-uniformity",
      "source_section": "Statement",
      "quote": "For a nonempty compact Hausdorff space, the covers that admit an open refinement form a compatible uniform-cover structure. In particular every open cover is uniform.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-entourage-and-uniform-cover-dictionary",
      "source_section": "Statement",
      "quote": "In ZF, on a nonempty set $X$, an entourage uniformity determines a uniform-cover structure by the covers $\\{E[x]:x\\in X\\}$, and a uniform-cover structure determines an entourage uniformity by the sets $\\bigcup_{V\\in\\mathcal V}V\\times V$. These constructions recover the same uniform structure.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-symmetric-entourages-form-a-base",
      "source_section": "Statement",
      "quote": "If $\\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\\in\\mathcal U$ there is a symmetric $D\\in\\mathcal U$ with $D\\subseteq E$. More generally, for every entourage $E$ and every integer $n\\ge 1$, there is a symmetric entourage $D$ whose $n$-fold composite satisfies $D^{\\circ n}\\subseteq E$.",
      "uses": [
        "1.1",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Let $V$ be a target entourage and choose a symmetric $W$ with $W^{-1}\\circ W=W^{\\circ2}\\subseteq V$. For each $x\\in X$, let $O_x$ be the union of all open sets $O$ such that $x\\in O$ and $f[O]\\subseteq W[f(x)]$. Continuity makes this family nonempty, and its union is an open neighbourhood of $x$ satisfying $f[O_x]\\subseteq W[f(x)]$. [L2, L3, construct]",
      "step": "1.1",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The open cover $(O_x)_{x\\in X}$ is uniform by [L3]. Hence there is a source entourage $E$ whose ball cover refines it: for each $a\\in X$, some $O_x$ contains $E[a]$. [step 1.1, L1, L3]",
      "step": "2.1",
      "inputs": [
        "L3",
        "1.1",
        "L1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "If $(a,b)\\in E$, then $a,b\\in E[a]\\subseteq O_x$ for some $x$. Thus $f(a),f(b)\\in W[f(x)]$, so $(f(a),f(b))\\in W^{-1}\\circ W\\subseteq V$. This is uniform continuity. [step 1.1, step 2.1, L2] ∎",
      "step": "3.1",
      "inputs": [
        "1.1",
        "2.1",
        "L2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement: the repaired hypothesis requires a nonempty carrier, so the empty case is excluded"
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
      "status": "not_applicable",
      "reason": "The statement has no separate coincident-point, constant-map, or collapsed-parameter branch."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval endpoint, one-sided limit, or strict-versus-weak boundary enters the claim."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 1.1: every selection was checked for a stated nonempty source, a canonical definition, or the expressly assumed choice principle"
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
    "notes": "high risk (7): 7 declared dependencies; 7 cited facts; boundary-sensitive language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: The empty space is excluded by the nonempty hypothesis; the proof would otherwise not produce a cover and the uniform-cover theorem would not apply. The construction was inspected on a singleton domain (unique trivial uniformity, map trivially uniformly continuous), on a finite discrete domain (discrete uniformity), and on a general nonempty compact Hausdorff space. Every step is independent of special cases (zero, one, degenerate): the union that defines O_x is deterministic, the cover (O_x) is uniformly open by the cited theorem, the entourage E exists by the dictionary without choices, and no division or limiting operation appears. The nonempty condition exactly aligns with the requirements of the invoked theorems on uniform covers. Checked surface: The title, the public claim (Statement), every numbered proof step (1.1, 2.1, 3.1), and the Facts & Assumptions section were read. No Remarks section exists. The proof is logically valid and the conclusion follows from the cited facts. Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/cor-compact-domain-maps-are-uniformly-continuous--c0e44d93e7510b22.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cor-compact-domain-maps-are-uniformly-continuous",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-compact-hausdorff-space-has-a-unique-compatible-uniformity",
    "declared_target": "thm-compact-hausdorff-space-has-a-unique-compatible-uniformity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-compact-domain-maps-are-uniformly-continuous",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-compact-hausdorff-open-cover-uniformity",
    "declared_target": "thm-compact-hausdorff-open-cover-uniformity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-compact-domain-maps-are-uniformly-continuous",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-uniformly-continuous-map",
    "declared_target": "def-uniformly-continuous-map",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-compact-domain-maps-are-uniformly-continuous",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-continuous-map-top",
    "declared_target": "def-continuous-map-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-compact-domain-maps-are-uniformly-continuous",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-uniformity-induces-a-topology",
    "declared_target": "thm-uniformity-induces-a-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-compact-domain-maps-are-uniformly-continuous",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-symmetric-entourages-form-a-base",
    "declared_target": "lem-symmetric-entourages-form-a-base",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-compact-domain-maps-are-uniformly-continuous",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-entourage-and-uniform-cover-dictionary",
    "declared_target": "lem-entourage-and-uniform-cover-dictionary",
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

## Full text of every cited or declared item (7)

### `def-continuous-map-top`

````markdown
---
id: def-continuous-map-top
kind: definition
title: "Continuity of a map of topological spaces at a point and globally"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-injection-surjection-bijection]
justified_by: []
aliases: [def-continuity-top]
landmark: true
short: "continuous map of spaces"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), let $f : X \to Y$ be a function and let $x \in X$.
Neighbourhoods are as in [[def-neighbourhood-top]].

$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the
preimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.

$f$ is **continuous** if it is continuous at every point of $X$.

**The same condition with open sets only.** $f$ is continuous at $x$ if and only
if for every open $V \subseteq Y$ with $f(x) \in V$ there is an open
$U \subseteq X$ with $x \in U$ and $f[U] \subseteq V$. Indeed, if $f$ is
continuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of
$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \ni x$,
which satisfies $f[U] \subseteq V$. Conversely, given the displayed condition and
a neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \in V_0 \subseteq V$ and
then open $U \ni x$ with $f[U] \subseteq V_0$; then $x \in U \subseteq f^{-1}[V_0] \subseteq f^{-1}[V]$,
so $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the
same statement written twice.

**Preimage, not image.** $f^{-1}[V] = \{\, x \in X : f(x) \in V \,\}$
is the preimage in the sense of [[def-injection-surjection-bijection]] and is
defined for every function, invertible or not; no inverse function is being
asserted to exist. Continuity is a condition on preimages throughout, and the
corresponding conditions on images define the *open* and *closed* maps of a later
item, which are different notions.

## Remarks

- **This is the metric definition when both topologies are metric topologies.**
  For metric spaces, $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, and the balls around a point are a neighbourhood
  base there; the identification is carried out where metrizable spaces are
  defined later on this page. Nothing about a metric survives in the definition
  above: continuity is a relation between two topologies and a function, and it
  is meaningless to ask whether a function between bare sets is continuous.

- **Continuity depends on both topologies, and coarsening the target or refining
  the source only helps.** If $f$ is continuous and $\mathcal{T}_X$ is replaced
  by a finer topology, or $\mathcal{T}_Y$ by a coarser one, $f$ remains
  continuous, since each condition to be verified is weakened and each
  neighbourhood available in the source is still available. In particular every
  map out of a discrete space and every map into an indiscrete space is
  continuous ([[def-standard-topologies]]).

- **Continuity at a point is strictly weaker than continuity.** A function may be
  continuous at exactly one point, and the definition above is deliberately local
  so that the sequential criteria proved later can be stated pointwise.
````

### `def-uniformly-continuous-map`

````markdown
---
id: def-uniformly-continuous-map
kind: definition
title: "Uniformly continuous map between uniform spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-uniform-space-by-entourages]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Definition

For uniform spaces $(X,\mathcal U_X)$ and $(Y,\mathcal U_Y)$, a map $f:X\to Y$ is **uniformly continuous** if for every $V\in\mathcal U_Y$ there is $U\in\mathcal U_X$ such that $(x,x')\in U$ implies $(f(x),f(x'))\in V$. The controlling entourage $U$ is independent of the point $x$.
````

### `lem-entourage-and-uniform-cover-dictionary`

````markdown
---
id: lem-entourage-and-uniform-cover-dictionary
kind: lemma
title: "On a nonempty set, entourage uniformities and uniform-cover structures determine one another"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-space-by-entourages, def-uniform-cover-space, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: true
proof_strategy: constructive
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Statement

In ZF, on a nonempty set $X$, an entourage uniformity determines a uniform-cover structure by the covers $\{E[x]:x\in X\}$, and a uniform-cover structure determines an entourage uniformity by the sets $\bigcup_{V\in\mathcal V}V\times V$. These constructions recover the same uniform structure.

## Facts & Assumptions

**Given:** A nonempty set $X$ carrying either an entourage uniformity or a uniform-cover structure.

[L1] Symmetric entourages form a base and have symmetric square roots ([[lem-symmetric-entourages-form-a-base]], [[def-uniform-space-by-entourages]]).

[L2] Uniform covers are upward closed under coarsening, have common refinements, and have star-refinements ([[def-uniform-cover-space]]).

## Proof

**Proof technique:** constructive.

1.1 From an entourage $E$, form $\mathcal C_E=\{E[x]:x\in X\}$. Choose a symmetric entourage $D$ with $D^{\circ3}\subseteq E$. If $D[y]\cap D[x]\ne\varnothing$ and $z\in D[y]$, symmetry and a point in the intersection give $(x,z)\in D^{\circ3}\subseteq E$. Hence the star of $D[x]$ in $\mathcal C_D$ lies in $E[x]$, so $\mathcal C_D$ star-refines $\mathcal C_E$. [L1, construct]

1.2 From a uniform cover $\mathcal V$, form $E_{\mathcal V}=\bigcup_{V\in\mathcal V}V\times V$. It contains the nonempty diagonal, so it is nonempty. A star-refinement $\mathcal W$ has $E_{\mathcal W}\circ E_{\mathcal W}\subseteq E_{\mathcal V}$, while common refinements and coarsenings give the remaining filter axioms. [L2, construct]

2.1 Declare a cover uniform when it is coarser than some $\mathcal C_E$. Intersections of entourages give common refinements, enlargement of an entourage gives coarsening, and step 1.1 gives star-refinements. Hence these covers satisfy the uniform-cover axioms. [step 1.1, L1, L2]

2.2 Start with an entourage uniformity. For symmetric $D$, $$ D\subseteq E_{\mathcal C_D}\subseteq D^{-1}\circ D=D^{\circ2}. $$ The first inclusion uses the diagonal, and the second follows because two points in one $D$-ball are $D^{-1}\circ D$-related. Taking a symmetric square root inside any prescribed entourage shows that the recovered entourage filter is exactly the original one. [L1, step 1.1, step 1.2]

2.3 Start instead with a uniform-cover structure. The $E_{\mathcal V}$-ball at $x$ is $$ E_{\mathcal V}[x]=\operatorname{St}(x,\mathcal V), $$ the union of the members of $\mathcal V$ containing $x$. Thus $\mathcal V$ refines $\mathcal C_{E_{\mathcal V}}$, so the latter is uniform by coarsening. Conversely, if $\mathcal W$ star-refines $\mathcal V$, then for any $x$ and any $W_0\in\mathcal W$ containing $x$, $\operatorname{St}(x,\mathcal W)\subseteq\operatorname{St}(W_0,\mathcal W)$, which lies in some member of $\mathcal V$. Therefore $\mathcal C_{E_{\mathcal W}}$ refines $\mathcal V$. The recovered cover structure is exactly the original one. [L2, step 1.2]

3.1 Steps 2.2 and 2.3 prove that the two constructions are mutually inverse at the level of generated structures. [step 2.2, step 2.3, discharge-construct] ∎
````

### `lem-symmetric-entourages-form-a-base`

````markdown
---
id: lem-symmetric-entourages-form-a-base
kind: lemma
title: "Every uniformity has a base of symmetric entourages"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-space-by-entourages, def-filter-base]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

If $\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\in\mathcal U$ there is a symmetric $D\in\mathcal U$ with $D\subseteq E$. More generally, for every entourage $E$ and every integer $n\ge 1$, there is a symmetric entourage $D$ whose $n$-fold composite satisfies $D^{\circ n}\subseteq E$.

## Facts & Assumptions

**Given:** A uniformity $\mathcal U$ on $X$, an entourage $E\in\mathcal U$, and an integer $n\ge 1$.

[A1] A uniformity is a filter whose members are closed under inverse and admit square roots ([[def-uniform-space-by-entourages]]).

[L1] A nonempty, proper family that refines every pair of its members is a filter base ([[def-filter-base]]).

## Proof

**Proof technique:** direct.

1.1 Choose $R\in\mathcal U$ with $R\circ R\subseteq E$, and put $S:=R\cap R^{-1}$. [A1, choose]

1.2 Put $E_0:=E$. By finitely iterating the square-root axiom, choose entourages $E_1,\ldots,E_n$ such that $E_{k+1}\circ E_{k+1}\subseteq E_k$ for $0\le k<n$, and put $D:=E_n\cap E_n^{-1}$. [A1, choose]

2.1 The set $S$ is an entourage, since $R,R^{-1}\in\mathcal U$ and a filter is closed under intersections; also $S=S^{-1}$ and $S\subseteq R\circ R\subseteq E$, because every entourage contains the diagonal. [step 1.1, A1]

2.2 The entourage $D$ is symmetric and $D\subseteq E_n$. Induction on $k$ gives $D^{\circ 2^k}\subseteq E_{n-k}$ for $0\le k\le n$, hence $D^{\circ 2^n}\subseteq E$. Since every entourage contains the diagonal and $n\le 2^n$, one may insert diagonal factors to obtain $D^{\circ n}\subseteq D^{\circ 2^n}\subseteq E$. [step 1.2, A1, algebra]

3.1 Thus symmetric entourages refine every entourage; their intersections are symmetric entourages and none is empty because each contains the diagonal, so they form a filter base by [L1]. [step 2.1, L1]

4.1 Therefore symmetric entourages form a base and admit the asserted finite-composite control. [step 3.1, step 2.2] ∎
````

### `thm-compact-hausdorff-open-cover-uniformity`

````markdown
---
id: thm-compact-hausdorff-open-cover-uniformity
kind: theorem
title: "The covers admitting an open refinement form a compatible uniform-cover structure on a nonempty compact Hausdorff space; in particular every open cover is uniform"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-finite-star-refinement-for-compact-hausdorff-spaces, def-uniform-cover-space, def-compact-space, def-hausdorff-space, lem-entourage-and-uniform-cover-dictionary, thm-uniformity-induces-a-topology]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Statement

For a nonempty compact Hausdorff space, the covers that admit an open refinement form a compatible uniform-cover structure. In particular every open cover is uniform.

## Facts & Assumptions

**Given:** A nonempty compact Hausdorff space $X$.

[L1] Every open cover has a finite open star-refinement ([[lem-finite-star-refinement-for-compact-hausdorff-spaces]]).

[L2] A uniform-cover structure is closed under coarsening and common refinement and has star-refinements ([[def-uniform-cover-space]]).

[L3] A uniform-cover structure determines an entourage uniformity with basic relations $E_{\mathcal V}=\bigcup_{V\in\mathcal V}V\times V$, and entourage balls form neighbourhood bases for the induced topology ([[lem-entourage-and-uniform-cover-dictionary]], [[thm-uniformity-induces-a-topology]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak C$ be the covers admitting an open refinement. It is nonempty, since $\{X\}$ is open. [construct]

2.1 Coarsening preserves membership in $\mathfrak C$, and two open refinements have their intersection cover as a common open refinement. [step 1.1]

2.2 For $\mathcal V\in\mathfrak C$, take an open refinement and then its finite open star-refinement from [L1]; this is a star-refinement still witnessing membership in $\mathfrak C$. [L1, step 1.1]

3.1 Thus $\mathfrak C$ satisfies [L2]. Since every open cover refines itself, every open cover belongs to $\mathfrak C$. [step 2.1, step 2.2, L2]

4.1 The entourage uniformity recovered from $\mathfrak C$ by [L3] induces the original topology. If $\mathcal V\in\mathfrak C$, choose an open refinement $\mathcal W$; then $E_{\mathcal W}[x]=\operatorname{St}(x,\mathcal W)$ contains an open member through $x$, so the recovered entourage balls are neighbourhoods in the original topology. Conversely, if $x\in O$ with $O$ open, the open cover $\{O,X\setminus\{x\}\}$ belongs to $\mathfrak C$, since Hausdorffness makes $\{x\}$ closed. By [L1] choose a finite open star-refinement $\mathcal W$, which belongs to $\mathfrak C$, and choose $W_0\in\mathcal W$ containing $x$. The star of $W_0$ lies in $O$, rather than in $X\setminus\{x\}$, and therefore $E_{\mathcal W}[x]=\operatorname{St}(x,\mathcal W)\subseteq\operatorname{St}(W_0,\mathcal W)\subseteq O$. [step 3.1, L1, L3]

5.1 Hence the structure is compatible with the given topology, and every open cover is uniform. [step 3.1, step 4.1] ∎
````

### `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity`

````markdown
---
id: thm-compact-hausdorff-space-has-a-unique-compatible-uniformity
kind: theorem
title: "A nonempty compact Hausdorff space carries exactly one compatible uniformity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-compact-hausdorff-open-cover-uniformity, lem-entourage-and-uniform-cover-dictionary, def-uniform-space-by-entourages, lem-finite-star-refinement-for-compact-hausdorff-spaces, lem-symmetric-entourages-form-a-base, thm-uniformity-induces-a-topology, def-compact-space, def-uniformizable-space]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Statement

A nonempty compact Hausdorff topology carries exactly one compatible uniformity.

## Facts & Assumptions

**Given:** A nonempty compact Hausdorff topology on $X$.

[L1] Its open covers form a compatible uniform-cover structure ([[thm-compact-hausdorff-open-cover-uniformity]]).

[L2] Uniform-cover and entourage structures determine each other ([[lem-entourage-and-uniform-cover-dictionary]]).

[L3] A compatible uniformity is one whose induced topology is the given topology ([[def-uniformizable-space]]).

[L4] Entourage balls form neighbourhood bases, symmetric entourages have square roots, and compactness supplies finite subcovers ([[thm-uniformity-induces-a-topology]], [[lem-symmetric-entourages-form-a-base]], [[def-compact-space]]).

[L5] Every open cover of a compact Hausdorff space has a finite open star-refinement ([[lem-finite-star-refinement-for-compact-hausdorff-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the cover structure of [L1] to obtain one compatible entourage uniformity. [L1, L2]

1.2 Let $\mathcal U$ be any compatible uniformity. Each entourage-ball cover admits an open refinement because every ball is a neighbourhood in the induced topology, so every cover uniform for $\mathcal U$ admits an open refinement. [L2, L3, L4]

1.3 Conversely, let $\mathcal O$ be an open cover and take a finite open star-refinement $\mathcal W$ by [L5]. Form the family of all open sets $N$ for which there are $x\in N$, $W\in\mathcal W$, and a symmetric entourage $D$ satisfying $N\subseteq D[x]$ and $D^{\circ2}[x]\subseteq W$. This family covers $X$: given $x$, first take $W\in\mathcal W$ containing it, then use compatibility and a symmetric square root to obtain such $D$ and an open neighbourhood $N\subseteq D[x]$. Compactness gives finitely many witnesses $(N_i,x_i,W_i,D_i)$ covering $X$. Put $D=\bigcap_iD_i$. If $y\in N_i$ and $z\in D[y]$, then symmetry gives $x_iD_i yD_i z$, so $z\in D_i^{\circ2}[x_i]\subseteq W_i$. Hence the $D$-ball cover refines $\mathcal W$, and therefore refines $\mathcal O$. Thus every open cover is uniform for $\mathcal U$. [L3, L4, L5, choose]

2.1 By steps 1.2 and 1.3, the cover structure associated to $\mathcal U$ consists exactly of the covers admitting an open refinement, which is the structure in [L1]. [L1, step 1.2, step 1.3]

3.1 The dictionary [L2] then recovers the same entourage uniformity from either structure, proving uniqueness. [step 1.1, step 2.1, L2] ∎
````

### `thm-uniformity-induces-a-topology`

````markdown
---
id: thm-uniformity-induces-a-topology
kind: theorem
title: "The sets containing an entourage ball about each of their points form a topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-space-by-entourages, lem-symmetric-entourages-form-a-base, def-topological-space, def-neighbourhood-top]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

For a uniformity $\mathcal U$ on $X$, call $O\subseteq X$ open when every $x\in O$ has an entourage $E$ with $E[x]\subseteq O$. These open sets form a topology on $X$. Its neighbourhood filter at $x$ has $\{E[x]:E\in\mathcal U\}$ as a base.

## Facts & Assumptions

**Given:** A uniform space $(X,\mathcal U)$.

[A1] Entourages contain the diagonal, are closed under finite intersection, and have symmetric square roots ([[def-uniform-space-by-entourages]], [[lem-symmetric-entourages-form-a-base]]).

[L1] A topology contains $\varnothing,X$, is closed under arbitrary unions, and under binary intersections ([[def-topological-space]]).

[L2] A neighbourhood base at $x$ refines every neighbourhood of $x$ ([[def-neighbourhood-top]]).

## Proof

**Proof technique:** direct.

1.1 The sets $\varnothing$ and $X$ are open: the first has no points to test, and for $x\in X$ every entourage ball is contained in $X$. [A1]

1.2 An arbitrary union of open sets is open, because a point in the union lies in one member and retains that member's entourage ball. [A1]

1.3 If $x\in O\cap P$, choose entourage balls $E[x]\subseteq O$ and $F[x]\subseteq P$; then $(E\cap F)[x]\subseteq O\cap P$, so binary intersections are open. [A1]

2.1 By steps 1.1 to 1.3, the open sets form a topology by [L1]. [step 1.1, step 1.2, step 1.3, L1]

3.1 Let $E$ be an entourage and define $$ O_E=\{y\in E[x]:F[y]\subseteq E[x]\text{ for some }F\in\mathcal U\}. $$ This set is open. Indeed, given $y\in O_E$, choose $F$ as displayed and then a symmetric $G$ with $G\circ G\subseteq F$. If $z\in G[y]$, symmetry gives $G[z]\subseteq(G\circ G)[y]\subseteq F[y]\subseteq E[x]$, so $z\in O_E$; hence $G[y]\subseteq O_E$. Now choose a symmetric $D$ with $D\circ D\subseteq E$. If $y\in D[x]$, then $D[y]\subseteq E[x]$, so $y\in O_E$. Thus $x\in D[x]\subseteq O_E\subseteq E[x]$, proving that $E[x]$ is a neighbourhood of $x$. [A1, step 2.1]

4.1 Conversely, if $N$ is a neighbourhood of $x$, it contains an open set $O$ with $x\in O$; the definition of the topology supplies an entourage $E$ with $E[x]\subseteq O\subseteq N$. Thus the entourage balls refine every neighbourhood, and by step 3.1 they are themselves neighbourhoods. They form a neighbourhood base by [L2]. [step 2.1, step 3.1, L2] ∎
````


## Selection reasons

- high risk (5): 6 declared dependencies; 4 cited facts; 6 numbered proof steps

## Target item — `thm-compact-hausdorff-open-cover-uniformity`

Normalized current SHA-256: `17022b44a16a9e4e77d5a778f3488ab17f61317ce55e486b468bfe606776b7ba`

The complete current item follows, including frontmatter:

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

## Wave 7 provenance row for the target

```json
{
  "id": "thm-compact-hausdorff-open-cover-uniformity",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf",
    "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
  ],
  "rationale": "The sources construct the unique compatible uniformity on a compact Hausdorff space from diagonal neighborhoods and open covers. The item uses the equivalent cover formulation. Its final entourage recovery fails for the locally admitted empty compact space.",
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
      "source": "lem-finite-star-refinement-for-compact-hausdorff-spaces",
      "source_section": "Statement",
      "quote": "Every open cover of a compact Hausdorff space has a finite open star-refinement.",
      "uses": [
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-uniform-cover-space",
      "source_section": "Definition",
      "quote": "A **uniform-cover structure** is a nonempty family $\\mathfrak C$ of covers of $X$ such that a cover refined by a member of $\\mathfrak C$ belongs to $\\mathfrak C$, any two members have a common refinement in $\\mathfrak C$, and every member has a star-refinement in $\\mathfrak C$. Its members are **uniform covers**. When $X\\ne\\varnothing$, the topology it induces and its equivalence with entourages are proved in [[lem-entourage-and-uniform-cover-dictionary]].",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-entourage-and-uniform-cover-dictionary",
      "source_section": "Statement",
      "quote": "In ZF, on a nonempty set $X$, an entourage uniformity determines a uniform-cover structure by the covers $\\{E[x]:x\\in X\\}$, and a uniform-cover structure determines an entourage uniformity by the sets $\\bigcup_{V\\in\\mathcal V}V\\times V$. These constructions recover the same uniform structure.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-uniformity-induces-a-topology",
      "source_section": "Statement",
      "quote": "For a uniformity $\\mathcal U$ on $X$, call $O\\subseteq X$ open when every $x\\in O$ has an entourage $E$ with $E[x]\\subseteq O$. These open sets form a topology on $X$. Its neighbourhood filter at $x$ has $\\{E[x]:E\\in\\mathcal U\\}$ as a base.",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Let $\\mathfrak C$ be the covers admitting an open refinement. It is nonempty, since $\\{X\\}$ is open. [construct]",
      "step": "1.1",
      "inputs": [
        "given data and elementary definitions"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Coarsening preserves membership in $\\mathfrak C$, and two open refinements have their intersection cover as a common open refinement. [step 1.1]",
      "step": "2.1",
      "inputs": [
        "1.1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "For $\\mathcal V\\in\\mathfrak C$, take an open refinement and then its finite open star-refinement from [L1]; this is a star-refinement still witnessing membership in $\\mathfrak C$. [L1, step 1.1]",
      "step": "2.2",
      "inputs": [
        "L1",
        "1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Thus $\\mathfrak C$ satisfies [L2]. Since every open cover refines itself, every open cover belongs to $\\mathfrak C$. [step 2.1, step 2.2, L2]",
      "step": "3.1",
      "inputs": [
        "L2",
        "2.1",
        "2.2"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "The entourage uniformity recovered from $\\mathfrak C$ by [L3] induces the original topology. If $\\mathcal V\\in\\mathfrak C$, choose an open refinement $\\mathcal W$; then $E_{\\mathcal W}[x]=\\operatorname{St}(x,\\mathcal W)$ contains an open member through $x$, so the recovered entourage balls are neighbourhoods in the original topology. Conversely, if $x\\in O$ with $O$ open, the open cover $\\{O,X\\setminus\\{x\\}\\}$ belongs to $\\mathfrak C$, since Hausdorffness makes $\\{x\\}$ closed. By [L1] choose a finite open star-refinement $\\mathcal W$, which belongs to $\\mathfrak C$, and choose $W_0\\in\\mathcal W$ containing $x$. The star of $W_0$ lies in $O$, rather than in $X\\setminus\\{x\\}$, and therefore $E_{\\mathcal W}[x]=\\operatorname{St}(x,\\mathcal W)\\subseteq\\operatorname{St}(W_0,\\mathcal W)\\subseteq O$. [step 3.1, L1, L3]",
      "step": "4.1",
      "inputs": [
        "L3",
        "L1",
        "3.1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "Hence the structure is compatible with the given topology, and every open cover is uniform. [step 3.1, step 4.1] ∎",
      "step": "5.1",
      "inputs": [
        "3.1",
        "4.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement: the repaired compact Hausdorff claim requires a nonempty carrier, so the empty case is excluded"
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
    "notes": "high risk (5): 6 declared dependencies; 4 cited facts; 6 numbered proof steps, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: The empty space is excluded by the nonempty hypothesis. The singleton space is handled correctly: every open cover is finite and trivially uniform, and the star‑refinement argument holds because the cover {X} (or {X,∅}) is open and {x} is closed. The proof uses no other degenerate or boundary cases (zero, one, endpoints, etc.) that could fail. Checked surface: Read the title, the public claim, every numbered step (1.1–5.1), and the Remarks (none present). The proof is logically valid, the claimed coincidences hold, and every necessary hypothesis is satisfied. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/thm-compact-hausdorff-open-cover-uniformity--b9fdb7dedd1c727b.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-compact-hausdorff-open-cover-uniformity",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-finite-star-refinement-for-compact-hausdorff-spaces",
    "declared_target": "lem-finite-star-refinement-for-compact-hausdorff-spaces",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-compact-hausdorff-open-cover-uniformity",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-uniform-cover-space",
    "declared_target": "def-uniform-cover-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-compact-hausdorff-open-cover-uniformity",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-compact-space",
    "declared_target": "def-compact-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-compact-hausdorff-open-cover-uniformity",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-hausdorff-space",
    "declared_target": "def-hausdorff-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-compact-hausdorff-open-cover-uniformity",
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
  },
  {
    "source": "thm-compact-hausdorff-open-cover-uniformity",
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
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (6)

### `def-compact-space`

````markdown
---
id: def-compact-space
kind: definition
title: "Open cover, subcover, and compact topological space; a compact subset is a subspace that is compact in its own right"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-subspace-topology-top, def-standard-topologies, def-countable, def-metric-compactness]
justified_by: []
aliases: [def-compact-topological-space, def-open-cover-top]
landmark: true
short: "open cover, compact space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Cover (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cover_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Section 5.12: Quasi-compact spaces and maps"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- An **open cover** of $(X,\mathcal{T})$ is a family
  $\mathcal{U} \subseteq \mathcal{T}$ of open sets with $X = \bigcup \mathcal{U}$,
  where $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq \mathcal{U}$
  that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \varnothing$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,\mathcal{T})$ is **compact** when every open cover of it has a finite
  subcover: for every open cover $\mathcal{U}$, either $X = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the subspace
  $(A, \mathcal{T}_A)$ is a compact topological space, $\mathcal{T}_A$ being the
  subspace topology ([[def-subspace-topology-top]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A, \mathcal{T}_A)$ and its own open
sets, not about families of open subsets of the ambient $X$. The two readings do
agree, but that is a theorem and not a convention: it is
[[lem-compactness-of-a-subspace-is-ambient]], and no item of this library may use
the ambient reading without citing it. Taking the intrinsic reading makes
compactness a property of the topological space $(A, \mathcal{T}_A)$ alone.
Hence it is preserved when $A$ is embedded homeomorphically as a subspace, or
when another ambient space induces the same topology on $A$; it need not be
preserved if the induced topology changes. This is exactly the convention already fixed for
metric spaces by [[def-metric-compactness]], and the agreement of that
definition with this one is [[thm-compactness-agrees-with-metric-compactness]].

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. Every
space listed as $\{x_0, \dots, x_n\}$ is compact too: given a cover, each $x_i$
lies in some member, and finitely many members named in this way already cover.
So every finite space is compact, whatever its topology, and in particular the
discrete topology on a finite set is compact while the discrete topology on an
infinite set is not ([[def-standard-topologies]]).

**The finiteness convention.** "Finite" above is the listing form. It agrees with
the definition of finiteness by equinumerosity with a natural number
([[def-countable]]), in both directions, and the agreement is the one already
discharged in [[def-metric-compactness]]: a nonempty set equinumerous with
$m \ge 1$ is listable, and a set listed as $\{a_0, \dots, a_n\}$ injects into
$\sigma(n)$ by sending $x$ to the least $i \le n$ with $a_i = x$. Neither
direction uses a choice principle; the second selects nothing, taking a least
index instead.

**Quasicompact is not used here.** Some authors, following Bourbaki, reserve
*compact* for a space that is both compact in the above sense and Hausdorff, and
call the open-cover condition alone *quasicompact*. This library follows the more
widely adopted convention: **compact** means the open-cover condition and nothing
more, and a Hausdorff hypothesis is always written out. The fork is recorded in
[[rem-compactness-conventions-and-choice-ledger]].

## Remarks

**Why open covers rather than covers by arbitrary sets.** Nothing in the
definition would break if $\mathcal{U}$ were allowed to consist of arbitrary
subsets of $X$, but the resulting notion would be uninteresting: every space is
covered by its singletons, and only a finite space would survive. Openness of the
members is what makes the condition a genuine restriction, and it is what
[[lem-compactness-of-a-subspace-is-ambient]] has to keep track of when the
ambient space changes.

**A warning about the word "cover".** A family may cover $A \subseteq X$ without
being a family of subsets of $A$: the members are open subsets of $X$ and their
union merely contains $A$. That is the ambient reading, and it is a different
statement from "$\mathcal{U}$ is an open cover of the space
$(A, \mathcal{T}_A)$", whose members are open subsets of $A$. Which of the two is
meant is written out everywhere on this page.
````

### `def-hausdorff-space`

````markdown
---
id: def-hausdorff-space
kind: definition
title: "Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-standard-topologies,
       def-metrizable-space, thm-metric-hausdorff-separation,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-hausdorff, def-t2-space]
landmark: true
short: "Hausdorff space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

## Remarks

- **Hausdorff spaces have closed singletons.** Fix $x \in X$ and take the union
  of all open subsets of $X$ that avoid $x$. Every $y \ne x$ belongs to one of
  them, by Hausdorff separation of $x$ and $y$, while $x$ belongs to none. The
  union is therefore exactly $X \setminus \{x\}$, so $\{x\}$ is closed.
  Thus the Hausdorff property implies the singleton-closed ($T_1$) property.
  The converse fails: closed singletons need not give disjoint neighbourhoods
  of distinct points.

- **What the Hausdorff condition buys, in the one place this page needs it.**
  Separation of distinct points by disjoint open sets is exactly what a quotient
  map can destroy: identifying points of a Hausdorff space can leave two classes
  every pair of whose open neighbourhoods meet, and the companion page exhibits
  such a quotient of a metrizable space. Nothing weaker than an explicit witness
  settles that, since the condition is a statement about all pairs of open sets.

- **The name.** Hausdorff's own 1914 axiom system for a topological space
  included this condition, so "topological space" once meant what is now called a
  Hausdorff space; this library follows the modern convention in which
  [[def-topological-space]] assumes no separation at all and every separation
  hypothesis is stated where it is used.
````

### `def-uniform-cover-space`

````markdown
---
id: def-uniform-cover-space
kind: definition
title: "Uniform space in the uniform-cover formulation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-finite-cardinality]
aliases: []
landmark: true
verification:
  precheck: n/a
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

## Definition

For a cover $\mathcal V$ of $X$ and $A\subseteq X$, write $\operatorname{St}(A,\mathcal V)$ for the union of the members of $\mathcal V$ meeting $A$. A cover $\mathcal V$ **star-refines** $\mathcal W$ if for every $V\in\mathcal V$, $\operatorname{St}(V,\mathcal V)$ is contained in some member of $\mathcal W$.

A **uniform-cover structure** is a nonempty family $\mathfrak C$ of covers of $X$ such that a cover refined by a member of $\mathfrak C$ belongs to $\mathfrak C$, any two members have a common refinement in $\mathfrak C$, and every member has a star-refinement in $\mathfrak C$. Its members are **uniform covers**. When $X\ne\varnothing$, the topology it induces and its equivalence with entourages are proved in [[lem-entourage-and-uniform-cover-dictionary]].
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

### `lem-finite-star-refinement-for-compact-hausdorff-spaces`

````markdown
---
id: lem-finite-star-refinement-for-compact-hausdorff-spaces
kind: lemma
title: "Every open cover of a compact Hausdorff space has a finite open star-refinement"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-a-compact-hausdorff-space-is-regular-and-normal, def-compact-space, def-hausdorff-space, def-finite-cardinality, lem-finite-choice, def-interior-closure-boundary-top]
aliases: []
landmark: false
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Statement

Every open cover of a compact Hausdorff space has a finite open star-refinement.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$ and an open cover $\mathcal U$.

[L1] A compact Hausdorff space is regular and normal ([[thm-a-compact-hausdorff-space-is-regular-and-normal]]).

[L2] Compactness supplies finite subcovers ([[def-compact-space]]).

[L3] A finite family is indexed by a natural number ([[def-finite-cardinality]]).

[L4] A finite family of nonempty sets admits simultaneous choices ([[lem-finite-choice]]), and closure is the least closed superset ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** constructive.

1.1 Let $\mathcal V$ be the family of all open sets $V$ such that $\overline V\subseteq U$ for some $U\in\mathcal U$. This family covers $X$. Indeed, for $x\in U\in\mathcal U$, normality separates the closed sets $\{x\}$ and $X\setminus U$ by disjoint open sets; the open set containing $x$ has closure contained in $U$. This definition uses no choices indexed by $X$. [L1, L4, construct]

1.2 We record a finite shrinking construction. Given a finite open cover $A_0,\ldots,A_{m-1}$, recursively put $$ F_i=X\setminus\left(\bigcup_{j<i}B_j\cup\bigcup_{j>i}A_j\right). $$ The earlier covering clauses imply $F_i\subseteq A_i$. Normality separates $F_i$ from $X\setminus A_i$, giving an open $B_i$ with $F_i\subseteq B_i\subseteq\overline{B_i}\subseteq A_i$. At the last stage the $B_i$ cover $X$. Thus every finite open cover has an open shrinking whose closures remain in the original members. [L1, L3, L4, construct]

2.1 Compactness gives a finite subcover $V_0,\ldots,V_{n-1}$ of $\mathcal V$. Finite choice supplies $U_i\in\mathcal U$ with $\overline{V_i}\subseteq U_i$ for each $i<n$. [step 1.1, L2, L4]

2.2 From a finite cover $A_i$ and an open shrinking $B_i$ as in step 1.2, form, for each nonempty $S\subseteq\{0,\ldots,m-1\}$, $$ W_S=\left(\bigcap_{i\in S}A_i\right) \setminus\left(\bigcup_{j\notin S}\overline{B_j}\right), $$ discarding empty members. These finitely many sets are open and cover $X$: at $x$, take $S=\{i:x\in A_i\}$. Moreover, choose $k$ with $x\in B_k$. Every $W_S$ containing $x$ has $k\in S$, so $W_S\subseteq A_k$. Hence the point-star $\operatorname{St}(x,\mathcal W)$ lies in $A_k$. Call this a barycentric refinement of $(A_i)$. [step 1.2, L3, construct]

3.1 Apply step 2.2 to the finite cover $(U_i)$ and its shrinking $(V_i)$ from step 2.1, obtaining a finite open barycentric refinement $\mathcal W$ of $\mathcal U$. Apply steps 1.2 and 2.2 again to $\mathcal W$, obtaining a finite open barycentric refinement $\mathcal Z$ of $\mathcal W$. [step 2.1, step 1.2, step 2.2]

4.1 The cover $\mathcal Z$ star-refines $\mathcal U$. Fix $Z_0\in\mathcal Z$ and $x\in Z_0$. Barycentricity of $\mathcal W$ gives $U\in\mathcal U$ with $\operatorname{St}(x,\mathcal W)\subseteq U$. If $Z\in\mathcal Z$ meets $Z_0$ at $y$, barycentricity of $\mathcal Z$ gives $W_y\in\mathcal W$ containing $\operatorname{St}(y,\mathcal Z)$. Both $Z_0$ and $Z$ lie in $W_y$, and $x\in W_y$, so $Z\subseteq W_y\subseteq\operatorname{St}(x,\mathcal W)\subseteq U$. Thus $\operatorname{St}(Z_0,\mathcal Z)\subseteq U$. [step 3.1]

5.1 The finite open cover $\mathcal Z$ is therefore a star-refinement of the original cover. [step 4.1, discharge-construct] ∎
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


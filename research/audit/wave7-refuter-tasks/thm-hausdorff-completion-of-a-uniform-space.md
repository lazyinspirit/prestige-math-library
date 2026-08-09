## Selection reasons

- critical risk (12): 7 declared dependencies; 7 cited facts; biconditional / both-direction claim; boundary-sensitive language; induction, recursion, or minimality

## Target item — `thm-hausdorff-completion-of-a-uniform-space`

Normalized current SHA-256: `a321a3ca44e3d81bbe0c125bf4d51238926639548bfa70a23c76c03065bf91ee`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-hausdorff-completion-of-a-uniform-space
kind: theorem
title: "Every uniform space has a complete Hausdorff reflection with dense canonical image, and the canonical map is a uniform embedding exactly when the original uniformity is separated"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-completion-of-a-uniform-space, lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity, lem-minimal-cauchy-filter-space-is-complete, lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space, def-uniform-embedding-and-uniform-isomorphism, thm-separated-uniformity-iff-induced-topology-is-hausdorff, lem-symmetric-entourages-form-a-base]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}, {title: "Encyclopedia of Mathematics, Complete uniform space", url: "https://encyclopediaofmath.org/wiki/Complete_uniform_space"}]
pipeline_run: null
---

## Statement

Every uniform space $X$ has a Hausdorff completion $\eta:X\to\widehat X$. The map has dense image, and it is a uniform embedding if and only if the original uniformity is separated.

## Facts & Assumptions

**Given:** A uniform space $X$.

[L1] Minimal Cauchy filters carry a separated uniformity ([[lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity]]) and form a complete space ([[lem-minimal-cauchy-filter-space-is-complete]]).

[L2] Point filters define a uniformly continuous dense map $\eta:X\to\widehat X$, and every member of $\eta(x)$ contains $x$ ([[lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space]]).

[L3] A Hausdorff completion and a uniform embedding have the stated definitions ([[def-completion-of-a-uniform-space]], [[def-uniform-embedding-and-uniform-isomorphism]]).

[L4] Separatedness is equivalent to Hausdorffness of the induced topology ([[thm-separated-uniformity-iff-induced-topology-is-hausdorff]]).

[L5] Symmetric entourages form a base and may be chosen inside any prescribed entourage ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** constructive.

1.1 Take $\widehat X$ to be the uniform space of minimal Cauchy filters and take $\eta$ from [L2]. [L1, L2, construct]

2.1 It is complete and separated by [L1], and $\eta$ is uniformly continuous with dense image by [L2]. It remains to verify that the pullback uniformity is not strictly coarser than the original one. Given an entourage $E$ of $X$, choose a symmetric $D\subseteq E$. If $(\eta(x),\eta(y))\in\widehat D$, witnesses $A\in\eta(x)$ and $B\in\eta(y)$ satisfy $A\times B\subseteq D$. Every member of the minimal point filter $\eta(x)$ contains $x$, and every member of $\eta(y)$ contains $y$; therefore $(x,y)\in D\subseteq E$. Thus $(\eta\times\eta)^{-1}[\widehat D]\subseteq E$. Together with uniform continuity, this is exactly the pullback condition in [L3], so $\eta$ is a Hausdorff completion. [step 1.1, L1, L2, L3, L5]

3.1 If $\eta(x)=\eta(y)$, step 2.1 puts $(x,y)$ in every entourage of $X$. Conversely, if $(x,y)$ belongs to every entourage of $X$, uniform continuity puts $(\eta(x),\eta(y))$ in every entourage of $\widehat X$; separatedness of $\widehat X$ gives $\eta(x)=\eta(y)$. [step 2.1, L1, L2]

4.1 Step 3.1 says that $\eta$ is injective exactly when $\mathcal U$ is separated. When injective, the two directions of the pullback condition in step 2.1 say precisely that the corestriction $X\to\eta[X]$ and its inverse are uniformly continuous, so $\eta$ is a uniform embedding. Conversely every uniform embedding is injective. [step 2.1, step 3.1, L3, L4]

5.1 This proves the completion assertion and the exact embedding criterion. [step 2.1, step 4.1, discharge-construct] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-hausdorff-completion-of-a-uniform-space",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf",
    "https://encyclopediaofmath.org/wiki/Uniform_space",
    "https://encyclopediaofmath.org/wiki/Complete_uniform_space"
  ],
  "rationale": "The sources state existence of a dense complete Hausdorff completion; Wodzicki also identifies when the canonical map reflects the original uniformity. The item packages the reflection and embedding criterion.",
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
      "source": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
      "source_section": "Statement",
      "quote": "On the set $\\widehat X$ of minimal Cauchy filters, the relations $\\widehat E$ declaring that two filters have $E$-close members form a separated uniformity.",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-minimal-cauchy-filter-space-is-complete",
      "source_section": "Statement",
      "quote": "The separated uniform space $\\widehat X$ of minimal Cauchy filters is complete.",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space",
      "source_section": "Statement",
      "quote": "The map $\\eta:X\\to\\widehat X$ sending $x$ to the minimal Cauchy filter associated to its principal filter is uniformly continuous and has dense image. For every $x\\in X$, every member of $\\eta(x)$ contains $x$.",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-completion-of-a-uniform-space",
      "source_section": "Definition",
      "quote": "A **Hausdorff completion** of a uniform space $(X,\\mathcal U)$ is a complete\nseparated uniform space $(\\widehat X,\\widehat{\\mathcal U})$ together with a map\n$\\eta:X\\to\\widehat X$ satisfying both of the following conditions.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-uniform-embedding-and-uniform-isomorphism",
      "source_section": "Definition",
      "quote": "A map $f:X\\to Y$ of uniform spaces is a **uniform embedding** if it is injective and its corestriction $X\\to f[X]$, with the subspace uniformity, is a uniform isomorphism. A **uniform isomorphism** is a bijection whose map and inverse are uniformly continuous. Bijection and corestriction are understood in the sense of [[def-injection-surjection-bijection]].",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-separated-uniformity-iff-induced-topology-is-hausdorff",
      "source_section": "Statement",
      "quote": "The topology induced by a uniformity $\\mathcal U$ is Hausdorff if and only if $\\mathcal U$ is separated.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-symmetric-entourages-form-a-base",
      "source_section": "Statement",
      "quote": "If $\\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\\in\\mathcal U$ there is a symmetric $D\\in\\mathcal U$ with $D\\subseteq E$. More generally, for every entourage $E$ and every integer $n\\ge 1$, there is a symmetric entourage $D$ whose $n$-fold composite satisfies $D^{\\circ n}\\subseteq E$.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Take $\\widehat X$ to be the uniform space of minimal Cauchy filters and take $\\eta$ from [L2]. [L1, L2, construct]",
      "step": "1.1",
      "inputs": [
        "L2",
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "It is complete and separated by [L1], and $\\eta$ is uniformly continuous with dense image by [L2]. It remains to verify that the pullback uniformity is not strictly coarser than the original one. Given an entourage $E$ of $X$, choose a symmetric $D\\subseteq E$. If $(\\eta(x),\\eta(y))\\in\\widehat D$, witnesses $A\\in\\eta(x)$ and $B\\in\\eta(y)$ satisfy $A\\times B\\subseteq D$. Every member of the minimal point filter $\\eta(x)$ contains $x$, and every member of $\\eta(y)$ contains $y$; therefore $(x,y)\\in D\\subseteq E$. Thus $(\\eta\\times\\eta)^{-1}[\\widehat D]\\subseteq E$. Together with uniform continuity, this is exactly the pullback condition in [L3], so $\\eta$ is a Hausdorff completion. [step 1.1, L1, L2, L3, L5]",
      "step": "2.1",
      "inputs": [
        "L1",
        "L2",
        "L3",
        "1.1",
        "L5"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "If $\\eta(x)=\\eta(y)$, step 2.1 puts $(x,y)$ in every entourage of $X$. Conversely, if $(x,y)$ belongs to every entourage of $X$, uniform continuity puts $(\\eta(x),\\eta(y))$ in every entourage of $\\widehat X$; separatedness of $\\widehat X$ gives $\\eta(x)=\\eta(y)$. [step 2.1, L1, L2]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Step 3.1 says that $\\eta$ is injective exactly when $\\mathcal U$ is separated. When injective, the two directions of the pullback condition in step 2.1 say precisely that the corestriction $X\\to\\eta[X]$ and its inverse are uniformly continuous, so $\\eta$ is a uniform embedding. Conversely every uniform embedding is injective. [step 2.1, step 3.1, L3, L4]",
      "step": "4.1",
      "inputs": [
        "3.1",
        "2.1",
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "This proves the completion assertion and the exact embedding criterion. [step 2.1, step 4.1, discharge-construct] ∎",
      "step": "5.1",
      "inputs": [
        "2.1",
        "4.1"
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
      "status": "checked",
      "evidence": "statement and step 1.1: strict entourage bounds, interval endpoints, and limiting boundary behavior were checked"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 1.1: every selection was checked for a stated nonempty source, a canonical definition, or the expressly assumed choice principle"
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "statement and step 1.1: the forward implication was traced through its cited inputs"
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "statement and step 5.1: the reverse implication was traced separately through its cited inputs"
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (12): 7 declared dependencies; 7 cited facts; biconditional / both-direction claim; boundary-sensitive language; induction, recursion, or minimality, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: The proof‑contract boundaries (empty, zero, one, degenerate, endpoints, nonempty‑choice, iff‑forward, iff‑reverse) were inspected. The empty uniform space is excluded by the library’s proper‑filter convention; the remaining boundary cases are subsumed under the general construction. Both directions of the “uniform embedding iff separated” claim are proved. Adversarial search (indiscrete uniformity, non‑separated products, singleton spaces) disclosed no counterexample—the pullback condition holds and the map is an embedding exactly when the original uniformity is separated. Checked surface: The title, the public claim, every numbered step (1.1–5.1), and the Remarks (none present) were read and checked. The proof establishes the existence of a Hausdorff completion with the stated properties and the exact embedding criterion. Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/thm-hausdorff-completion-of-a-uniform-space--d1023c293284581b.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-hausdorff-completion-of-a-uniform-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-completion-of-a-uniform-space",
    "declared_target": "def-completion-of-a-uniform-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-hausdorff-completion-of-a-uniform-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
    "declared_target": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-hausdorff-completion-of-a-uniform-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-minimal-cauchy-filter-space-is-complete",
    "declared_target": "lem-minimal-cauchy-filter-space-is-complete",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-hausdorff-completion-of-a-uniform-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space",
    "declared_target": "lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-hausdorff-completion-of-a-uniform-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-uniform-embedding-and-uniform-isomorphism",
    "declared_target": "def-uniform-embedding-and-uniform-isomorphism",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-hausdorff-completion-of-a-uniform-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-separated-uniformity-iff-induced-topology-is-hausdorff",
    "declared_target": "thm-separated-uniformity-iff-induced-topology-is-hausdorff",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-hausdorff-completion-of-a-uniform-space",
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
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (7)

### `def-completion-of-a-uniform-space`

````markdown
---
id: def-completion-of-a-uniform-space
kind: definition
title: "A Hausdorff completion of a uniform space and its canonical dense map"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-uniform-space, def-separated-uniform-space, def-uniform-embedding-and-uniform-isomorphism, def-interior-closure-boundary-top, def-uniformly-continuous-map]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}, {title: "Encyclopedia of Mathematics, Complete uniform space", url: "https://encyclopediaofmath.org/wiki/Complete_uniform_space"}]
pipeline_run: null
---

## Definition

A **Hausdorff completion** of a uniform space $(X,\mathcal U)$ is a complete
separated uniform space $(\widehat X,\widehat{\mathcal U})$ together with a map
$\eta:X\to\widehat X$ satisfying both of the following conditions.

- The image $\eta[X]$ is dense:
  $\overline{\eta[X]}=\widehat X$ ([[def-interior-closure-boundary-top]]).
- The original uniformity is exactly the uniformity pulled back along $\eta$:
  for every $\widehat E\in\widehat{\mathcal U}$,
  $(\eta\times\eta)^{-1}[\widehat E]\in\mathcal U$, and for every
  $E\in\mathcal U$ there is $\widehat E\in\widehat{\mathcal U}$ with
  $(\eta\times\eta)^{-1}[\widehat E]\subseteq E$.

The first half of the second condition is uniform continuity
([[def-uniformly-continuous-map]]); the second half prevents the completion map
from discarding any of the original uniform structure. The map is not required
to be injective. It is a uniform embedding
([[def-uniform-embedding-and-uniform-isomorphism]]) exactly when it is injective,
and this is the usual completion of a separated uniform space.
````

### `def-uniform-embedding-and-uniform-isomorphism`

````markdown
---
id: def-uniform-embedding-and-uniform-isomorphism
kind: definition
title: "Uniform embedding and uniform isomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-uniformly-continuous-map, def-injection-surjection-bijection]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Definition

A map $f:X\to Y$ of uniform spaces is a **uniform embedding** if it is injective and its corestriction $X\to f[X]$, with the subspace uniformity, is a uniform isomorphism. A **uniform isomorphism** is a bijection whose map and inverse are uniformly continuous. Bijection and corestriction are understood in the sense of [[def-injection-surjection-bijection]].
````

### `lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity`

````markdown
---
id: lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity
kind: lemma
title: "The standard entourages on minimal Cauchy filters form a separated uniformity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-minimal-cauchy-filter-associated-to-a-cauchy-filter, def-uniform-space-by-entourages, def-separated-uniform-space, lem-symmetric-entourages-form-a-base]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "J. H. V. Hunt, Boletín de la Sociedad Matemática Mexicana 34 (1989), 11–21", url: "https://www.boletin.math.org.mx/pdf/2/34/BSMM%282%29.34.11-21.pdf"}]
pipeline_run: null
---

## Statement

On the set $\widehat X$ of minimal Cauchy filters, the relations $\widehat E$ declaring that two filters have $E$-close members form a separated uniformity.

## Facts & Assumptions

**Given:** Minimal Cauchy filters $\mathcal F,\mathcal G$ on $X$.

[L1] Every Cauchy filter has a unique associated minimal Cauchy filter, and every principal filter is Cauchy and therefore has an associated minimal Cauchy filter ([[lem-minimal-cauchy-filter-associated-to-a-cauchy-filter]]).

[L2] Symmetric entourages form a base and admit square roots ([[lem-symmetric-entourages-form-a-base]]).

[L3] The entourage axioms and separatedness are stated in [[def-uniform-space-by-entourages]] and [[def-separated-uniform-space]].

## Proof

**Proof technique:** constructive.

1.1 Because a uniformity is a proper filter on $X\times X$, its carrier $X$ is nonempty. Choose $x\in X$; then [L1] gives a minimal Cauchy filter associated to the principal filter at $x$, so $\widehat X$ is nonempty. For symmetric $E$, put $(\mathcal F,\mathcal G)\in\widehat E$ when some $A\in\mathcal F$ and $B\in\mathcal G$ satisfy $A\times B\subseteq E$. [L1, L3, construct, choose]

2.1 Every $\mathcal F$ is $\widehat E$-close to itself: choose an $E$-small member of the Cauchy filter and use it on both sides. Thus each $\widehat E$ contains the nonempty diagonal of $\widehat X$. The relation $\widehat E$ is symmetric. If $\widehat E$ and $\widehat D$ have respective witnesses $A\times B$ and $C\times K$, then $(A\cap C)\times(B\cap K)\subseteq E\cap D$, so finite intersections are refined by the corresponding hatted intersection. [step 1.1]

2.2 Choose a symmetric entourage $D$ with $D^{\circ2}\subseteq E$. If $\mathcal F\,\widehat D\,\mathcal G$ via $A\times B\subseteq D$ and $\mathcal G\,\widehat D\,\mathcal H$ via $C\times K\subseteq D$, choose $b\in B\cap C$. Then $aDbDk$ for every $a\in A,k\in K$, so $A\times K\subseteq D^{\circ2}\subseteq E$. Hence $\widehat D\circ\widehat D\subseteq\widehat E$. [step 1.1, L2, choose]

2.3 Steps 2.1 and 2.2 show that the upward closure of the relations $\widehat E$ is a uniformity. To prove separation, suppose $\mathcal F\,\widehat E\,\mathcal G$ for every entourage $E$. Given $A\in\mathcal F$, minimality gives $\mathcal F=m(\mathcal F)$ by [L1], so some $D[C]\subseteq A$ with $C\in\mathcal F$ and symmetric $D$. Choose an entourage $E\subseteq D$ and witnesses $P\in\mathcal F,Q\in\mathcal G$ with $P\times Q\subseteq E$. Pick $c\in C\cap P$. Then $Q\subseteq E[c]\subseteq D[C]\subseteq A$, so $A\in\mathcal G$. Thus $\mathcal F\subseteq\mathcal G$; symmetry gives equality. [step 1.1, L1, L2, choose]

3.1 Therefore the standard relations form the asserted separated uniformity. [step 2.3, L3, discharge-construct] ∎
````

### `lem-minimal-cauchy-filter-space-is-complete`

````markdown
---
id: lem-minimal-cauchy-filter-space-is-complete
kind: lemma
title: "The uniform space of minimal Cauchy filters is complete"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity, lem-minimal-cauchy-filter-associated-to-a-cauchy-filter, def-complete-uniform-space, def-filter, lem-symmetric-entourages-form-a-base]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "J. H. V. Hunt, Boletín de la Sociedad Matemática Mexicana 34 (1989), 11–21", url: "https://www.boletin.math.org.mx/pdf/2/34/BSMM%282%29.34.11-21.pdf"}]
pipeline_run: null
---

## Statement

The separated uniform space $\widehat X$ of minimal Cauchy filters is complete.

## Facts & Assumptions

**Given:** A Cauchy filter $\Phi$ on $\widehat X$.

[L1] The standard relations form a uniformity on minimal Cauchy filters ([[lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity]]).

[L2] Every Cauchy filter on $X$ has its associated minimal Cauchy filter ([[lem-minimal-cauchy-filter-associated-to-a-cauchy-filter]]).

[L3] Completeness means convergence of every Cauchy filter ([[def-complete-uniform-space]]).

[L4] A filter contains the whole set, omits the empty set, and is closed under finite intersections and supersets ([[def-filter]]); symmetric entourages with prescribed finite-composite control may be chosen inside any entourage ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** constructive.

1.1 For $A\subseteq X$, put $$ A^\#:=\{\,\mathcal M\in\widehat X:A\in\mathcal M\,\}, $$ and define $\mathcal F:=\{A\subseteq X:A^\#\in\Phi\}$. Since $X^\#=\widehat X$, $\varnothing^\#=\varnothing$, $(A\cap B)^\#=A^\#\cap B^\#$, and $A^\#\subseteq B^\#$ whenever $A\subseteq B$, [L4] shows that $\mathcal F$ is a filter on $X$. [L4, construct]

1.2 The filter $\mathcal F$ is Cauchy. Given an entourage $U$, choose a symmetric $D$ with $D^{\circ3}\subseteq U$. Choose a $\widehat D$-small $S\in\Phi$, a filter $\mathcal M_0\in S$, and a $D$-small $C\in\mathcal M_0$. For every $\mathcal N\in S$, the relation $\mathcal M_0\,\widehat D\,\mathcal N$ has witnesses $P\in\mathcal M_0$ and $Q\in\mathcal N$ with $P\times Q\subseteq D$. A point of $C\cap P$ shows $Q\subseteq D[C]$, hence $D[C]\in\mathcal N$. Thus $S\subseteq(D[C])^\#$, so $D[C]\in\mathcal F$. Moreover $D[C]\times D[C]\subseteq D^{\circ3}\subseteq U$, making this a $U$-small member of $\mathcal F$. [L1, L4, choose]

2.1 Let $\mathcal M=m(\mathcal F)$. Given an entourage $E$, choose a symmetric $D$ with $D^{\circ2}\subseteq E$, and choose a $D$-small $A\in\mathcal F$. Then $A^\#\in\Phi$. If $\mathcal N\in A^\#$, the sets $D[A]\in\mathcal M$ and $A\in\mathcal N$ satisfy $D[A]\times A\subseteq D^{\circ2}\subseteq E$, so $\mathcal N\in\widehat E[\mathcal M]$. Hence $A^\#\subseteq\widehat E[\mathcal M]$, and the ball $\widehat E[\mathcal M]$ belongs to $\Phi$. Therefore $\Phi\to\mathcal M$. [step 1.1, step 1.2, L1, L2, L4]

3.1 Since every Cauchy filter $\Phi$ converges, $\widehat X$ is complete by [L3]. [step 2.1, L3, discharge-construct] ∎
````

### `lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space`

````markdown
---
id: lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space
kind: lemma
title: "The minimal Cauchy filters associated to points define a uniformly continuous dense canonical map"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-minimal-cauchy-filter-associated-to-a-cauchy-filter, lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity, def-uniformly-continuous-map, thm-uniformity-induces-a-topology, def-interior-closure-boundary-top, lem-symmetric-entourages-form-a-base]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "J. H. V. Hunt, Boletín de la Sociedad Matemática Mexicana 34 (1989), 11–21", url: "https://www.boletin.math.org.mx/pdf/2/34/BSMM%282%29.34.11-21.pdf"}]
pipeline_run: null
---

## Statement

The map $\eta:X\to\widehat X$ sending $x$ to the minimal Cauchy filter associated to its principal filter is uniformly continuous and has dense image. For every $x\in X$, every member of $\eta(x)$ contains $x$.

## Facts & Assumptions

**Given:** A uniform space $X$ and its minimal-Cauchy-filter space $\widehat X$.

[L1] Principal filters are Cauchy and have associated minimal Cauchy filters ([[lem-minimal-cauchy-filter-associated-to-a-cauchy-filter]]).

[L2] The standard relations are entourages on $\widehat X$ ([[lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity]]).

[L3] Entourage balls describe the induced topology and density is closure equal to the whole space ([[thm-uniformity-induces-a-topology]], [[def-interior-closure-boundary-top]]).

[L4] Symmetric entourages with prescribed finite-composite control may be chosen inside any entourage ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** constructive.

1.1 Define $\eta(x)$ to be the minimal filter associated to the principal filter $\mathcal P_x$ at $x$. Since $\eta(x)=m(\mathcal P_x)\subseteq\mathcal P_x$, every member of $\eta(x)$ contains $x$. [L1, construct]

1.2 Let $\widehat E[\mathcal F]$ be a basic neighbourhood. Choose a symmetric $D$ with $D^{\circ2}\subseteq E$, a $D$-small $A\in\mathcal F$, and $a\in A$. The point filter $\eta(a)$ contains $D[a]$, and $D[a]\times A\subseteq D^{\circ2}\subseteq E$, so $\eta(a)\in\widehat E[\mathcal F]$. Thus every basic neighbourhood meets $\eta[X]$. [L1, L2, L3, L4, choose]

2.1 Given a target basic entourage $\widehat E$, choose a symmetric $D$ with $D^{\circ3}\subseteq E$. If $(x,y)\in D$, then $D[x]\in\eta(x)$ and $D[y]\in\eta(y)$, while $D[x]\times D[y]\subseteq D^{\circ3}\subseteq E$. Hence $(\eta(x),\eta(y))\in\widehat E$, which proves uniform continuity. [step 1.1, L2, L4]

3.1 Thus every neighbourhood meets $\eta[X]$, so its closure is all of $\widehat X$ and the image is dense. [step 1.2, L3, discharge-construct] ∎
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

### `thm-separated-uniformity-iff-induced-topology-is-hausdorff`

````markdown
---
id: thm-separated-uniformity-iff-induced-topology-is-hausdorff
kind: theorem
title: "A uniformity is separated if and only if its induced topology is Hausdorff"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separated-uniform-space, thm-uniformity-induces-a-topology, def-hausdorff-space, lem-symmetric-entourages-form-a-base]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Statement

The topology induced by a uniformity $\mathcal U$ is Hausdorff if and only if $\mathcal U$ is separated.

## Facts & Assumptions

**Given:** A uniform space $(X,\mathcal U)$ with its induced topology.

[A1] A uniformity is separated exactly when each distinct pair is excluded by an entourage ([[def-separated-uniform-space]]).

[L1] Entourage balls are neighbourhood bases, and symmetric square roots exist ([[thm-uniformity-induces-a-topology]], [[lem-symmetric-entourages-form-a-base]]).

[L2] Hausdorff means that distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\mathcal U$ is separated and $x\ne y$. Choose $E$ with $(x,y)\notin E$, then a symmetric $D$ with $D\circ D\subseteq E$. [A1, L1, choose]

1.2 Conversely, if the induced topology is Hausdorff and $x\ne y$, choose disjoint neighbourhoods of $x,y$ and refine the first by an entourage ball $E[x]$; then $y\notin E[x]$, so $(x,y)\notin E$. [L1, L2, choose]

2.1 The neighbourhoods $D[x]$ and $D[y]$ are disjoint: if $z$ belonged to both, symmetry would give $(x,z),(z,y)\in D$ and hence $(x,y)\in D\circ D\subseteq E$. [step 1.1, L1]

3.1 Thus the induced topology is Hausdorff by [L2]. [step 2.1, L2]

4.1 Every distinct pair is excluded by an entourage, so $\mathcal U$ is separated by [A1]. [step 1.2, A1] ∎
````


## Selection reasons

- high risk (6): 4 declared dependencies; 4 cited facts; induction, recursion, or minimality

## Target item — `lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity`

Normalized current SHA-256: `3125cac2efe29647db1ba9eae81f172b28e8265c4b59242cc18e1409bbb685a5`

The complete current item follows, including frontmatter:

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

## Wave 7 provenance row for the target

```json
{
  "id": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf",
    "https://www.boletin.math.org.mx/pdf/2/34/BSMM%282%29.34.11-21.pdf"
  ],
  "rationale": "Wodzicki restricts the standard filter-base uniformity to minimal Cauchy filters and states it is Hausdorff. The item spells out the relation. Its proof omits the nonempty-carrier discharge supplied by the sourced principal-filter clause.",
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
      "source": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
      "source_section": "Statement",
      "quote": "Every Cauchy filter $\\mathcal F$ canonically determines a unique Cauchy filter $m(\\mathcal F)\\subseteq\\mathcal F$ that has no strictly coarser Cauchy filter. For every $x\\in X$, the principal filter $\\mathcal P_x:=\\{A\\subseteq X:x\\in A\\}$ is Cauchy and therefore has an associated minimal Cauchy filter $m(\\mathcal P_x)$.",
      "uses": [
        "1.1",
        "2.3"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-symmetric-entourages-form-a-base",
      "source_section": "Statement",
      "quote": "If $\\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\\in\\mathcal U$ there is a symmetric $D\\in\\mathcal U$ with $D\\subseteq E$. More generally, for every entourage $E$ and every integer $n\\ge 1$, there is a symmetric entourage $D$ whose $n$-fold composite satisfies $D^{\\circ n}\\subseteq E$.",
      "uses": [
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L3",
      "source": "def-uniform-space-by-entourages",
      "source_section": "Definition",
      "quote": "A **uniformity** on $X$ is a filter $\\mathcal U$ on $X\\times X$ ([[def-filter]]) such that:\n\n- every $E\\in\\mathcal U$ contains $\\Delta_X$;\n- $E\\in\\mathcal U$ implies $E^{-1}\\in\\mathcal U$;\n- for every $E\\in\\mathcal U$ there is $D\\in\\mathcal U$ with $D\\circ D\\subseteq E$.",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-separated-uniform-space",
      "source_section": "Definition",
      "quote": "A uniformity $\\mathcal U$ on $X$ is **separated** when $\\bigcap_{E\\in\\mathcal U}E=\\Delta_X$ ([[def-the-diagonal-of-a-space]]). Equivalently, whenever $x\\ne y$, some entourage $E$ satisfies $(x,y)\\notin E$. Separation is a property of the uniformity, not an additional convention in the meaning of uniform space.",
      "uses": [
        "1.1",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Because a uniformity is a proper filter on $X\\times X$, its carrier $X$ is nonempty. Choose $x\\in X$; then [L1] gives a minimal Cauchy filter associated to the principal filter at $x$, so $\\widehat X$ is nonempty. For symmetric $E$, put $(\\mathcal F,\\mathcal G)\\in\\widehat E$ when some $A\\in\\mathcal F$ and $B\\in\\mathcal G$ satisfy $A\\times B\\subseteq E$. [L1, L3, construct, choose]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Every $\\mathcal F$ is $\\widehat E$-close to itself: choose an $E$-small member of the Cauchy filter and use it on both sides. Thus each $\\widehat E$ contains the nonempty diagonal of $\\widehat X$. The relation $\\widehat E$ is symmetric. If $\\widehat E$ and $\\widehat D$ have respective witnesses $A\\times B$ and $C\\times K$, then $(A\\cap C)\\times(B\\cap K)\\subseteq E\\cap D$, so finite intersections are refined by the corresponding hatted intersection. [step 1.1]",
      "step": "2.1",
      "inputs": [
        "1.1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "Choose a symmetric entourage $D$ with $D^{\\circ2}\\subseteq E$. If $\\mathcal F\\,\\widehat D\\,\\mathcal G$ via $A\\times B\\subseteq D$ and $\\mathcal G\\,\\widehat D\\,\\mathcal H$ via $C\\times K\\subseteq D$, choose $b\\in B\\cap C$. Then $aDbDk$ for every $a\\in A,k\\in K$, so $A\\times K\\subseteq D^{\\circ2}\\subseteq E$. Hence $\\widehat D\\circ\\widehat D\\subseteq\\widehat E$. [step 1.1, L2, choose]",
      "step": "2.2",
      "inputs": [
        "1.1",
        "L2"
      ]
    },
    {
      "id": "step-2.3",
      "claim": "Steps 2.1 and 2.2 show that the upward closure of the relations $\\widehat E$ is a uniformity. To prove separation, suppose $\\mathcal F\\,\\widehat E\\,\\mathcal G$ for every entourage $E$. Given $A\\in\\mathcal F$, minimality gives $\\mathcal F=m(\\mathcal F)$ by [L1], so some $D[C]\\subseteq A$ with $C\\in\\mathcal F$ and symmetric $D$. Choose an entourage $E\\subseteq D$ and witnesses $P\\in\\mathcal F,Q\\in\\mathcal G$ with $P\\times Q\\subseteq E$. Pick $c\\in C\\cap P$. Then $Q\\subseteq E[c]\\subseteq D[C]\\subseteq A$, so $A\\in\\mathcal G$. Thus $\\mathcal F\\subseteq\\mathcal G$; symmetry gives equality. [step 1.1, L1, L2, choose]",
      "step": "2.3",
      "inputs": [
        "2.1",
        "2.2",
        "L1",
        "1.1",
        "L2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Therefore the standard relations form the asserted separated uniformity. [step 2.3, L3, discharge-construct] ∎",
      "step": "3.1",
      "inputs": [
        "2.3",
        "L3"
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
    "notes": "high risk (6): 4 declared dependencies; 4 cited facts; induction, recursion, or minimality, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: The uniform space is nonempty (step 1.1), so $\\widehat X$ is nonempty. All existential choices (e.g. $b\\in B\\cap C$, $c\\in C\\cap P$) are from sets that are nonempty because the filters involved are proper and closed under finite intersections. The diagonal is contained (step 2.1). The family $\\{\\widehat E\\}$ satisfies the filter-base intersection property and the square‑root condition (steps 2.1–2.2). The separation argument in step 2.3 correctly uses the construction of minimal Cauchy filters from L1 to deduce equality of filters from universal entourage closeness. Edge cases (empty space, trivial uniformity, singleton $\\widehat X$) are handled by the non‑emptiness derivation and by the fact that the proof nowhere requires the space to contain more than one point. No counterexample to the claim exists; the construction is the standard separated completion of a uniform space. Checked surface: The title, the public claim, every numbered proof step (1.1, 2.1, 2.2, 2.3, 3.1), and Remarks (none present) were read and verified. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity--49d29613ed806b9d.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
    "declared_target": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-uniform-space-by-entourages",
    "declared_target": "def-uniform-space-by-entourages",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-separated-uniform-space",
    "declared_target": "def-separated-uniform-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
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

## Full text of every cited or declared item (4)

### `def-separated-uniform-space`

````markdown
---
id: def-separated-uniform-space
kind: definition
title: "Separated uniformity: the intersection of all entourages is the diagonal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-uniform-space-by-entourages, def-the-diagonal-of-a-space]
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

A uniformity $\mathcal U$ on $X$ is **separated** when $\bigcap_{E\in\mathcal U}E=\Delta_X$ ([[def-the-diagonal-of-a-space]]). Equivalently, whenever $x\ne y$, some entourage $E$ satisfies $(x,y)\notin E$. Separation is a property of the uniformity, not an additional convention in the meaning of uniform space.
````

### `def-uniform-space-by-entourages`

````markdown
---
id: def-uniform-space-by-entourages
kind: definition
title: "Uniform space in the entourage formulation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-filter, def-the-diagonal-of-a-space]
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

Let $X$ be a set and write $\Delta_X=\{(x,x):x\in X\}$ for its diagonal ([[def-the-diagonal-of-a-space]]). For $E\subseteq X\times X$, put $E[x]:=\{y\in X:(x,y)\in E\}$, $E^{-1}:=\{(y,x):(x,y)\in E\}$, and $E\circ F:=\{(x,z):\text{some }y\text{ has }(x,y)\in E,(y,z)\in F\}$.

A **uniformity** on $X$ is a filter $\mathcal U$ on $X\times X$ ([[def-filter]]) such that:

- every $E\in\mathcal U$ contains $\Delta_X$;
- $E\in\mathcal U$ implies $E^{-1}\in\mathcal U$;
- for every $E\in\mathcal U$ there is $D\in\mathcal U$ with $D\circ D\subseteq E$.

Its members are **entourages**. A **uniform space** is a set equipped with a uniformity. The induced topology and its neighbourhoods are constructed in [[thm-uniformity-induces-a-topology]].
````

### `lem-minimal-cauchy-filter-associated-to-a-cauchy-filter`

````markdown
---
id: lem-minimal-cauchy-filter-associated-to-a-cauchy-filter
kind: lemma
title: "Every Cauchy filter canonically determines a unique minimal Cauchy filter coarser than it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cauchy-filter-in-a-uniform-space, def-filter-base, lem-filter-base-generates, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: false
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

Every Cauchy filter $\mathcal F$ canonically determines a unique Cauchy filter $m(\mathcal F)\subseteq\mathcal F$ that has no strictly coarser Cauchy filter. For every $x\in X$, the principal filter $\mathcal P_x:=\{A\subseteq X:x\in A\}$ is Cauchy and therefore has an associated minimal Cauchy filter $m(\mathcal P_x)$.

## Facts & Assumptions

**Given:** A Cauchy filter $\mathcal F$ on a uniform space.

[L1] Cauchyness supplies arbitrarily small members of $\mathcal F$ ([[def-cauchy-filter-in-a-uniform-space]]).

[L2] Filter bases generate the least filter containing them ([[def-filter-base]], [[lem-filter-base-generates]]).

[L3] Symmetric entourages form a base and may be chosen with prescribed finite-composite control ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** constructive.

1.1 Let $\mathcal B$ consist of all $E[A]$ with $A\in\mathcal F$ and symmetric entourage $E$. Every such set contains the nonempty set $A$. Given $E[A],D[B]\in\mathcal B$, the symmetric entourage $E\cap D$ and the member $A\cap B\in\mathcal F$ give $$ (E\cap D)[A\cap B]\subseteq E[A]\cap D[B]. $$ Thus $\mathcal B$ is a proper downward-directed filter base. Let $m(\mathcal F)$ be the filter it generates. [L2, L3, construct]

2.1 Since $A\subseteq E[A]$, every member of $\mathcal B$ belongs to $\mathcal F$, so $m(\mathcal F)\subseteq\mathcal F$. To prove it Cauchy, let $U$ be an entourage and choose a symmetric $E$ with $E^{\circ3}\subseteq U$. Choose $A\in\mathcal F$ with $A\times A\subseteq E$. If $y,z\in E[A]$, take $a,b\in A$ with $aEy$ and $bEz$; symmetry gives $yEaEbEz$, so $(y,z)\in E^{\circ3}\subseteq U$. Hence $E[A]\in m(\mathcal F)$ is $U$-small. [L1, L3, step 1.1]

2.2 Let $\mathcal G\subseteq\mathcal F$ be Cauchy, and fix $E[A]\in\mathcal B$. Choose a symmetric $D$ with $D\subseteq E$, and a $D$-small $B\in\mathcal G$. Since $A,B\in\mathcal F$, choose $c\in A\cap B$. Then $B\subseteq D[c]\subseteq E[A]$, so $E[A]\in\mathcal G$. Thus every Cauchy filter coarser than $\mathcal F$ contains $m(\mathcal F)$. [L1, L3, step 1.1, choose]

3.1 If a Cauchy filter is coarser than $m(\mathcal F)$, step 2.2 places $m(\mathcal F)$ inside it, so equality holds; hence $m(\mathcal F)$ is minimal. Any minimal Cauchy filter coarser than $\mathcal F$ contains $m(\mathcal F)$ by step 2.2 and must equal it by minimality. This proves uniqueness. [step 2.1, step 2.2]

4.1 For $x\in X$, the set $\{x\}$ belongs to $\mathcal P_x$, and $\{x\}\times\{x\}\subseteq\Delta_X\subseteq E$ for every entourage $E$. Thus $\mathcal P_x$ is Cauchy by [L1], and step 3.1 supplies its associated minimal Cauchy filter. [L1, step 3.1, discharge-construct] ∎
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


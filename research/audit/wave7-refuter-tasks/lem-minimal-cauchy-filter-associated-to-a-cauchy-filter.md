## Selection reasons

- critical risk (8): 4 declared dependencies; 4 cited facts; existence, choice, uniqueness, or well-definedness; induction, recursion, or minimality

## Target item — `lem-minimal-cauchy-filter-associated-to-a-cauchy-filter`

Normalized current SHA-256: `4f4aa2ca3a5f361dc41d1e9ba248dffbc29ec1d62d06189d619636463a197213`

The complete current item follows, including frontmatter:

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

## Wave 7 provenance row for the target

```json
{
  "id": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf",
    "https://www.boletin.math.org.mx/pdf/2/34/BSMM%282%29.34.11-21.pdf"
  ],
  "rationale": "Wodzicki 6.1.2-6.1.5 and Hunt give the canonical unique minimal Cauchy filter contained in a Cauchy filter, while Wodzicki 6.1.4-6.1.6 gives the principal-filter instance used by the canonical map. The A4-recovery repair combines those source-backed clauses and supplies the elementary singleton verification, so the materially repaired Statement is ai-altered and semantically sourced.",
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
      "source": "def-cauchy-filter-in-a-uniform-space",
      "source_section": "Definition",
      "quote": "A filter $\\mathcal F$ on a uniform space $(X,\\mathcal U)$ is **Cauchy** if for every entourage $E\\in\\mathcal U$ some $A\\in\\mathcal F$ satisfies $A\\times A\\subseteq E$. Such an $A$ is an $E$-small member of $\\mathcal F$.",
      "uses": [
        "2.1",
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-filter-base",
      "source_section": "Definition",
      "quote": "This is a filter on $X$ ([[def-filter]]), indeed the smallest filter on $X$\ncontaining $\\mathcal{B}$, by [[lem-filter-base-generates]]; it is called the\n**filter generated by $\\mathcal{B}$**, and $\\mathcal{B}$ is called a **base** of\nit. The definite article is licensed by that lemma and by nothing else: the\nnotation $\\langle \\mathcal{B} \\rangle$ is used only for a family already known to\nbe a filter base.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-filter-base-generates",
      "source_section": "Statement",
      "quote": "1. $\\langle \\mathcal{B} \\rangle$ is a filter on $X$ ([[def-filter]]);\n2. $\\mathcal{B} \\subseteq \\langle \\mathcal{B} \\rangle$, and\n   $\\langle \\mathcal{B} \\rangle \\subseteq \\mathcal{F}$ for every filter\n   $\\mathcal{F}$ on $X$ with $\\mathcal{B} \\subseteq \\mathcal{F}$, so\n   $\\langle \\mathcal{B} \\rangle$ is the smallest filter on $X$ containing\n   $\\mathcal{B}$;\n3. every filter $\\mathcal{F}$ on $X$ is itself a filter base, and it generates\n   itself: $\\langle \\mathcal{F} \\rangle = \\mathcal{F}$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-symmetric-entourages-form-a-base",
      "source_section": "Statement",
      "quote": "If $\\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\\in\\mathcal U$ there is a symmetric $D\\in\\mathcal U$ with $D\\subseteq E$. More generally, for every entourage $E$ and every integer $n\\ge 1$, there is a symmetric entourage $D$ whose $n$-fold composite satisfies $D^{\\circ n}\\subseteq E$.",
      "uses": [
        "1.1",
        "2.1",
        "2.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Let $\\mathcal B$ consist of all $E[A]$ with $A\\in\\mathcal F$ and symmetric entourage $E$. Every such set contains the nonempty set $A$. Given $E[A],D[B]\\in\\mathcal B$, the symmetric entourage $E\\cap D$ and the member $A\\cap B\\in\\mathcal F$ give $$ (E\\cap D)[A\\cap B]\\subseteq E[A]\\cap D[B]. $$ Thus $\\mathcal B$ is a proper downward-directed filter base. Let $m(\\mathcal F)$ be the filter it generates. [L2, L3, construct]",
      "step": "1.1",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Since $A\\subseteq E[A]$, every member of $\\mathcal B$ belongs to $\\mathcal F$, so $m(\\mathcal F)\\subseteq\\mathcal F$. To prove it Cauchy, let $U$ be an entourage and choose a symmetric $E$ with $E^{\\circ3}\\subseteq U$. Choose $A\\in\\mathcal F$ with $A\\times A\\subseteq E$. If $y,z\\in E[A]$, take $a,b\\in A$ with $aEy$ and $bEz$; symmetry gives $yEaEbEz$, so $(y,z)\\in E^{\\circ3}\\subseteq U$. Hence $E[A]\\in m(\\mathcal F)$ is $U$-small. [L1, L3, step 1.1]",
      "step": "2.1",
      "inputs": [
        "L1",
        "L3",
        "1.1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "Let $\\mathcal G\\subseteq\\mathcal F$ be Cauchy, and fix $E[A]\\in\\mathcal B$. Choose a symmetric $D$ with $D\\subseteq E$, and a $D$-small $B\\in\\mathcal G$. Since $A,B\\in\\mathcal F$, choose $c\\in A\\cap B$. Then $B\\subseteq D[c]\\subseteq E[A]$, so $E[A]\\in\\mathcal G$. Thus every Cauchy filter coarser than $\\mathcal F$ contains $m(\\mathcal F)$. [L1, L3, step 1.1, choose]",
      "step": "2.2",
      "inputs": [
        "L1",
        "L3",
        "1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "If a Cauchy filter is coarser than $m(\\mathcal F)$, step 2.2 places $m(\\mathcal F)$ inside it, so equality holds; hence $m(\\mathcal F)$ is minimal. Any minimal Cauchy filter coarser than $\\mathcal F$ contains $m(\\mathcal F)$ by step 2.2 and must equal it by minimality. This proves uniqueness. [step 2.1, step 2.2]",
      "step": "3.1",
      "inputs": [
        "2.2",
        "2.1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "For $x\\in X$, the set $\\{x\\}$ belongs to $\\mathcal P_x$, and $\\{x\\}\\times\\{x\\}\\subseteq\\Delta_X\\subseteq E$ for every entourage $E$. Thus $\\mathcal P_x$ is Cauchy by [L1], and step 3.1 supplies its associated minimal Cauchy filter. [L1, step 3.1, discharge-construct] ∎",
      "step": "4.1",
      "inputs": [
        "L1",
        "3.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: the explicit empty-set or empty-family branch was checked against the displayed definitions"
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
    "notes": "critical risk (8): 4 declared dependencies; 4 cited facts; existence, choice, uniqueness, or well-definedness; induction, recursion, or minimality, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: The proof was checked against the empty uniform space (excluded by standard definitions), trivial/indiscrete and discrete uniformities, and the degenerate case where the given Cauchy filter is already minimal. All choices are from nonempty sets and are justified without the axiom of choice. The principal-filter example holds for every point in any uniform space. No counterexample was found. Checked surface: The title, public statement, every numbered proof step (1.1–4.1), and the Remarks (none present) were read and verified. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/lem-minimal-cauchy-filter-associated-to-a-cauchy-filter--a5f5c02e76bc6f80.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-cauchy-filter-in-a-uniform-space",
    "declared_target": "def-cauchy-filter-in-a-uniform-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-filter-base",
    "declared_target": "def-filter-base",
    "target_statement_provenance": "ai-altered",
    "targetPage": "filters-and-ultrafilters",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-filter-base-generates",
    "declared_target": "lem-filter-base-generates",
    "target_statement_provenance": "ai-altered",
    "targetPage": "filters-and-ultrafilters",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
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

### `def-cauchy-filter-in-a-uniform-space`

````markdown
---
id: def-cauchy-filter-in-a-uniform-space
kind: definition
title: "Cauchy filter in a uniform space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-uniform-space-by-entourages, def-filter]
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

A filter $\mathcal F$ on a uniform space $(X,\mathcal U)$ is **Cauchy** if for every entourage $E\in\mathcal U$ some $A\in\mathcal F$ satisfies $A\times A\subseteq E$. Such an $A$ is an $E$-small member of $\mathcal F$.
````

### `def-filter-base`

````markdown
---
id: def-filter-base
kind: definition
title: "Filter base and the filter it generates"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-filter]
justified_by: [lem-filter-base-generates]
aliases: [def-filter-basis]
landmark: false
short: "filter base"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "N. Bourbaki, General Topology: Chapters 1-4, Ch. I §6"
      url: "https://link.springer.com/book/9783540642411"
    - title: "N. Strickland, Notes on Ultrafilters"
      url: "https://faculty.ksu.edu.sa/sites/default/files/ultra.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a set. A family $\mathcal{B} \subseteq \mathcal{P}(X)$ is a
**filter base on $X$** when it satisfies:

- **(B1)** *nonemptiness*: $\mathcal{B} \neq \emptyset$;
- **(B2)** *properness*: $\emptyset \notin \mathcal{B}$;
- **(B3)** *downward directedness*: for all $B_1, B_2 \in \mathcal{B}$ there is
  $B_3 \in \mathcal{B}$ with $B_3 \subseteq B_1 \cap B_2$.

The **upward closure** of $\mathcal{B}$ in $X$ is

$$\langle \mathcal{B} \rangle := \{\, A \subseteq X \;:\; B \subseteq A \text{ for some } B \in \mathcal{B} \,\}.$$

This is a filter on $X$ ([[def-filter]]), indeed the smallest filter on $X$
containing $\mathcal{B}$, by [[lem-filter-base-generates]]; it is called the
**filter generated by $\mathcal{B}$**, and $\mathcal{B}$ is called a **base** of
it. The definite article is licensed by that lemma and by nothing else: the
notation $\langle \mathcal{B} \rangle$ is used only for a family already known to
be a filter base.

## Remarks

- **(B3) does not ask that $B_1 \cap B_2$ itself belong to $\mathcal{B}$**, only
  that some member of $\mathcal{B}$ sit inside it. That is what makes a base
  usable: a family described by a shape, for instance the open discs of the plane
  that contain the origin, is generally not closed under intersection, since the
  intersection of two such discs is not a disc, yet it always contains a smaller
  such disc. Families that *are* closed under pairwise intersection, such as the
  tails $\{n \in \mathbb{N} : N \leq n\}$ of $\mathbb{N}$, are the special case
  $B_3 = B_1 \cap B_2$ of (B3).
- **Every filter is a filter base, and it generates itself.** A filter satisfies
  (B1) because it contains $X$, satisfies (B2) by (F2), and satisfies (B3) with
  $B_3 = B_1 \cap B_2$ by (F3). Both halves are proved in
  [[lem-filter-base-generates]], so "base" is a way of presenting a filter, never
  a different kind of object.
- **When a subfamily is a base for the filter it sits in.** If $\mathcal{B} \subseteq \mathcal{F}$ and every
  member of $\mathcal{F}$ contains a member of $\mathcal{B}$, then $\mathcal{B}$
  is a filter base and $\langle \mathcal{B} \rangle = \mathcal{F}$: (B1) holds
  because $X \in \mathcal{F}$ contains some member of $\mathcal{B}$, (B2) because
  $\mathcal{B} \subseteq \mathcal{F}$, and (B3) because $B_1 \cap B_2 \in
  \mathcal{F}$ contains some member of $\mathcal{B}$. So a base is a
  presentation, not an invariant. What is determined is the generated filter,
  which is why every statement below is about $\langle \mathcal{B} \rangle$ and
  never about $\mathcal{B}$ itself. The criterion is sufficient, and it is not a
  claim that a filter has *many* bases: any base of $\mathcal{F}$ is a subfamily
  of it, so the filter $\{X\}$ on $X$ has exactly one base, namely $\{X\}$.
- (B2) is exactly the properness of the generated filter, and it is not
  automatic: dropping it would allow $\emptyset \in \mathcal{B}$ and then
  $\langle \mathcal{B} \rangle = \mathcal{P}(X)$, the improper filter excluded by
  the convention recorded in [[def-filter]].
````

### `lem-filter-base-generates`

````markdown
---
id: lem-filter-base-generates
kind: lemma
title: "The upward closure of a filter base is the smallest filter containing it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-filter-base, def-filter]
justified_by: []
aliases: []
landmark: false
short: "$\\langle\\mathcal{B}\\rangle$ is the smallest filter $\\supseteq\\mathcal{B}$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "N. Bourbaki, General Topology: Chapters 1-4, Ch. I §6"
      url: "https://link.springer.com/book/9783540642411"
    - title: "N. Strickland, Notes on Ultrafilters"
      url: "https://faculty.ksu.edu.sa/sites/default/files/ultra.pdf"
    - title: "B. Kaya, Ultrafilters and How to Use Them"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/village2019lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $\mathcal{B}$ be a filter base on $X$
([[def-filter-base]]), with upward closure

$$\langle \mathcal{B} \rangle = \{\, A \subseteq X \;:\; B \subseteq A \text{ for some } B \in \mathcal{B} \,\}.$$

Then:

1. $\langle \mathcal{B} \rangle$ is a filter on $X$ ([[def-filter]]);
2. $\mathcal{B} \subseteq \langle \mathcal{B} \rangle$, and
   $\langle \mathcal{B} \rangle \subseteq \mathcal{F}$ for every filter
   $\mathcal{F}$ on $X$ with $\mathcal{B} \subseteq \mathcal{F}$, so
   $\langle \mathcal{B} \rangle$ is the smallest filter on $X$ containing
   $\mathcal{B}$;
3. every filter $\mathcal{F}$ on $X$ is itself a filter base, and it generates
   itself: $\langle \mathcal{F} \rangle = \mathcal{F}$.

## Facts & Assumptions

**Given:** A set $X$, a filter base $\mathcal{B} \subseteq \mathcal{P}(X)$, and $\langle \mathcal{B} \rangle$ as displayed in the statement.

[A1] $\mathcal{B} \neq \emptyset$, $\emptyset \notin \mathcal{B}$, and for all $B_1, B_2 \in \mathcal{B}$ there is $B_3 \in \mathcal{B}$ with $B_3 \subseteq B_1 \cap B_2$ ([[def-filter-base]]).

[L1] A filter on $X$ is a family $\mathcal{F} \subseteq \mathcal{P}(X)$ with $X \in \mathcal{F}$, $\emptyset \notin \mathcal{F}$, $A \cap B \in \mathcal{F}$ whenever $A, B \in \mathcal{F}$, and $B \in \mathcal{F}$ whenever $A \in \mathcal{F}$ and $A \subseteq B \subseteq X$ ([[def-filter]]).

[L2] A filter base on $X$ is a nonempty family of subsets of $X$ that omits $\emptyset$ and is downward directed, the three conditions listed in [A1] ([[def-filter-base]]).

## Proof

**Proof technique:** direct.

1.1 Every member of $\langle \mathcal{B} \rangle$ is a subset of $X$ by definition, so $\langle \mathcal{B} \rangle \subseteq \mathcal{P}(X)$; and $X \in \langle \mathcal{B} \rangle$, since $\mathcal{B}$ has a member $B$ and $B \subseteq X$. [given, A1]

1.2 $\emptyset \notin \langle \mathcal{B} \rangle$: if $B \subseteq \emptyset$ for some $B \in \mathcal{B}$ then $B = \emptyset$, and $\emptyset \notin \mathcal{B}$. [given, A1]

1.3 $\langle \mathcal{B} \rangle$ is closed upward in $X$: if $A \in \langle \mathcal{B} \rangle$, say $B \subseteq A$ with $B \in \mathcal{B}$, and $A \subseteq A' \subseteq X$, then $B \subseteq A'$, so $A' \in \langle \mathcal{B} \rangle$. [given]

1.4 $\langle \mathcal{B} \rangle$ is closed under pairwise intersection: given $A_1, A_2 \in \langle \mathcal{B} \rangle$ pick $B_1, B_2 \in \mathcal{B}$ with $B_i \subseteq A_i$, and then $B_3 \in \mathcal{B}$ with $B_3 \subseteq B_1 \cap B_2 \subseteq A_1 \cap A_2 \subseteq X$, so $A_1 \cap A_2 \in \langle \mathcal{B} \rangle$. [given, A1]

1.5 $\mathcal{B} \subseteq \langle \mathcal{B} \rangle$, because $B \subseteq B$ and $B \subseteq X$ for every $B \in \mathcal{B}$. [given]

1.6 If $\mathcal{F}$ is a filter on $X$ with $\mathcal{B} \subseteq \mathcal{F}$ and $A \in \langle \mathcal{B} \rangle$, say $B \subseteq A \subseteq X$ with $B \in \mathcal{B} \subseteq \mathcal{F}$, then upward closure of $\mathcal{F}$ gives $A \in \mathcal{F}$; hence $\langle \mathcal{B} \rangle \subseteq \mathcal{F}$. [given, L1]

1.7 Every filter $\mathcal{F}$ on $X$ is a filter base: $X \in \mathcal{F}$ gives $\mathcal{F} \neq \emptyset$, properness gives $\emptyset \notin \mathcal{F}$, and for $B_1, B_2 \in \mathcal{F}$ the member $B_3 = B_1 \cap B_2$ of $\mathcal{F}$ satisfies $B_3 \subseteq B_1 \cap B_2$. [L1, L2]

2.1 $\langle \mathcal{B} \rangle$ satisfies all four filter axioms, so it is a filter on $X$. [step 1.1, step 1.2, step 1.3, step 1.4, L1]

2.2 For a filter $\mathcal{F}$ on $X$, applying step 1.5 and step 1.6 to the filter base $\mathcal{F}$ gives $\mathcal{F} \subseteq \langle \mathcal{F} \rangle$ and $\langle \mathcal{F} \rangle \subseteq \mathcal{F}$, that is $\langle \mathcal{F} \rangle = \mathcal{F}$. [step 1.7, step 1.5, step 1.6]

3.1 So $\langle \mathcal{B} \rangle$ is a filter containing $\mathcal{B}$ and contained in every filter that contains $\mathcal{B}$, hence the smallest such filter, and every filter is a filter base generating itself. [step 2.1, step 2.2, step 1.5, step 1.6] ∎

## Remarks

- The only place directedness (B3) is used is step 1.4, the intersection axiom. Drop it and the upward closure of $\mathcal{B}$ is still closed upward and still proper, but it need not be closed under intersection: on $X = \{0, 1\}$ the family $\mathcal{B} = \{\{0\}, \{1\}\}$ has upward closure $\{\{0\}, \{1\}, X\}$, which does not contain $\{0\} \cap \{1\} = \emptyset$ and is not a filter.
- Part 3 is what licenses the phrase "the filter generated by" being applied to a filter: generation is idempotent, so nothing is gained by generating twice.
- Smallest is meant in the inclusion order on $\mathrm{Filt}(X)$ and is a genuine least element of the set of filters containing $\mathcal{B}$, not merely a minimal one, since part 2 compares $\langle \mathcal{B} \rangle$ with every such filter. This is the opposite situation to [[def-ultrafilter]], where only maximality is available.
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


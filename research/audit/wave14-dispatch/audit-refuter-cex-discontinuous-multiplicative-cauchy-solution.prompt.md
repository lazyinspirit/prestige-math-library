# Audit proof-refuter brief — Wave 14, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** You are read-only and
> tool-less. Do not ask for shell or edit permission. Everything available to
> you is reproduced in the dispatch task.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as
an independent adversarial proof-refuter. Return evidence only; Audit-Alpha
alone adjudicates and edits.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the target's title, complete public statement, Facts & Assumptions, every
numbered proof/refutation/verification step, and Remarks. Try to falsify every
load-bearing inference. Before alleging that a cited dependency is too weak,
compare the exact current supplied dependency: domain, hypotheses, quantifiers,
direction, conclusion, boundary cases, and conventions. Check biconditionals,
existence/uniqueness, recursion/induction, limits, index shifts, empty/zero/one/
endpoint/degenerate cases, hidden division, hidden choice, and false Remarks.
For an `ai-generated` Statement or consumer, actively search for a
counterexample or a failure in the witness or cited generated premise. A false
public claim, invalid proof, missing necessary hypothesis, circularity, or
materially inaccurate load-bearing citation is fatal; a quickly closable gap is
nonfatal.

Return no more than 450 words, exactly in this shape:

```text
VERDICT: CLEAN | DEFECTS
```

For each defect:

```text
FINDING 1
  location: [exact section/fact/step]
  severity: fatal | nonfatal
  claim:    [exact assertion]
  evidence: [counterexample, invalid inference, or exact source mismatch]
```

Always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm title, public claim, every numbered step, and Remarks]
```


---

# This dispatch

## Selection reasons

- high risk (5): 9 declared dependencies; 7 cited facts

## Target item — `cex-discontinuous-multiplicative-cauchy-solution`

Normalized current SHA-256: `520ada9d758d456201ec8e73cdd56cb6a827c6f29c2e7311ec75bf0de1969ef5`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cex-discontinuous-multiplicative-cauchy-solution
kind: counterexample
title: "A discontinuous positive solution of $F(x+y)=F(x)F(y)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-every-independent-set-extends-to-a-basis, def-vector-space, def-additive-function, cor-irrationals-uncountable, thm-normalized-exponential-functional-equation, thm-exponential-addition-formula, cor-exponential-reciprocal-and-positivity, thm-exponential-is-strictly-increasing, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "S. G. Johnson, Exponential Functions"
      url: "https://math.mit.edu/~stevenj/exponential.pdf"
    - title: "E. Gselmann, habilitation thesis on functional equations"
      url: "https://math.unideb.hu/sites/default/files/upload_documents/habilitacios_ertekezes_gselmann.pdf"
pipeline_run: null
---

## Statement refuted

Every positive $F:\mathbb R\to(0,\infty)$ satisfying $F(x+y)=F(x)F(y)$ is continuous and equals an ordinary exponential.

## Facts & Assumptions

**Given:** An irrational real $b$, so $\{1,b\}$ is linearly independent over $\mathbb Q$, and the Axiom of Choice.

[L1] Every independent set extends to a basis ([[thm-every-independent-set-extends-to-a-basis]], [[def-vector-space]], [[def-axiom-of-choice]]).

[L2] A $\mathbb Q$-linear map is additive ([[def-additive-function]]).

[L3] The ordinary exponential is positive, injective, and multiplicative ([[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]], [[thm-exponential-addition-formula]]).

## Counterexample

**Proof technique:** constructive.

1.1 Extend $\{1,b\}$ to a Hamel basis. Define the $\mathbb Q$-linear map $A$ by $A(1)=1$, $A(b)=0$, and $A(v)=v$ on the remaining chosen basis elements. Then $A$ is additive but not the identity. [L1, L2, construct]

2.1 Put $F(x)=\exp(A(x))$. Positivity and additivity give $F(x+y)=F(x)F(y)$, and $F(1)=e$.  [step 1.1, L3]

3.1 If $F$ were continuous, [[thm-normalized-exponential-functional-equation]] would give $F=\exp$; injectivity of $\exp$ would then give $A(x)=x$, contradicting $A(b)=0\ne b$.   [step 1.1, step 2.1, L3, given]

4.1 Thus $F$ is a discontinuous positive multiplicative solution. The construction uses Choice exactly in the basis extension.   [step 3.1, given, discharge-construct] ∎
````

## Wave 14 provenance row

```json
{
  "id": "cex-discontinuous-multiplicative-cauchy-solution",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.mit.edu/~stevenj/exponential.pdf",
    "https://math.unideb.hu/sites/default/files/upload_documents/habilitacios_ertekezes_gselmann.pdf"
  ],
  "rationale": "Johnson constructs discontinuous positive solutions of F(x+y)=F(x)F(y) using a Hamel-basis choice, and Gselmann records additive Hamel-basis extensions and exponential solutions exp(A(x)). The item's choice of one basis element b and values A(1)=1, A(b)=0 is a concrete adaptation of that standard construction.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-every-independent-set-extends-to-a-basis",
      "source_section": "Statement",
      "quote": "**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), which is what\n[[thm-zorn]] is proved from. Let $V$ be a vector space over a field $F$\n([[def-vector-space]]) and let $L \\subseteq S \\subseteq V$ with $L$ linearly\nindependent ([[def-linear-independence]]) and $\\operatorname{span}(S) = V$\n([[def-linear-combination-and-span]]). Then there is a basis $B$ of $V$\n([[def-linear-basis]]) with\n\n$$L \\;\\subseteq\\; B \\;\\subseteq\\; S .$$",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-vector-space",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative\nidentity $1_F$, and the field axioms as stated there. A **vector space over $F$**,\nalso called an **$F$-vector space**, consists of\n\n- a set $V$, whose elements are called **vectors**;\n- a binary operation $+ : V \\times V \\to V$ on $V$ ([[def-binary-operation]]),\n  the **vector addition**;\n- an element $0_V \\in V$, the **zero vector**;\n- a map $\\cdot \\,:\\, F \\times V \\to V$, the **scalar multiplication**, written\n  $\\lambda v := \\cdot(\\lambda, v)$;\n\nsubject to the following axioms, in which $u, v \\in V$ and $\\lambda, \\mu \\in F$\nare arbitrary.\n\n- **(V1)** $(V, +, 0_V)$ is an abelian group ([[def-group]]): $+$ is associative\n  and commutative, $0_V$ is a two-sided identity for $+$\n  ([[def-identity-element]]), and every $v \\in V$ has an additive inverse\n  ([[def-invertible-element]]).\n- **(V2)** $\\lambda(u + v) = \\lambda u + \\lambda v$.\n- **(V3)** $(\\lambda + \\mu)v = \\lambda v + \\mu v$.\n- **(V4)** $(\\lambda\\mu)v = \\lambda(\\mu v)$.\n- **(V5)** $1_F v = v$.\n\nThe elements of $F$ are called **scalars**. When several vector spaces are in\nplay we write $0_V$ for the zero of $V$, and we write $-v$ for the additive\ninverse of $v$ and $u - v := u + (-v)$.\n\n**The notation $0_V$ and $-v$ is legitimate.** Axiom (V1) asserts only that some\ntwo-sided identity and some additive inverses exist. That there is at most one\ntwo-sided identity for $+$ is [[lem-identity-unique]], and that an invertible\nelement of a monoid has exactly one inverse is [[lem-inverse-unique]]; both are\nproved before [[def-group]] and are inherited here with the group structure. So\n$0_V$ and $-v$ denote well-defined elements, and nothing below re-derives them.\n\n**What (V1) buys, and why it is not restated.** Associativity, commutativity, the\nidentity law $v + 0_V = v = 0_V + v$, the inverse law $v + (-v) = 0_V$,\ncancellation ([[lem-group-cancellation]]) and the inverse identities\n([[lem-group-inverse-laws]]) are facts about abelian groups. They are quoted from\nthe group page wherever they are used and are never proved again for vectors.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-axiom-of-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Choice** (AC) is the following statement.\n\n> Every family of nonempty sets has a choice function\n> ([[def-choice-function]]).\n\nWritten out: for every set $\\mathcal{F}$ all of whose members are nonempty,\nthere exists a function $g$ with domain $\\mathcal{F}$ satisfying $g(S) \\in S$ for\nall $S \\in \\mathcal{F}$.\n\nAn equivalent formulation is that a product of nonempty sets is nonempty: if\n$X_i \\ne \\emptyset$ for every $i \\in I$, then $\\prod_{i \\in I} X_i \\ne \\emptyset$.\nHere $\\prod_{i \\in I} X_i$ is the set of functions $f$ with domain $I$ such that\n$f(i) \\in X_i$ for every $i \\in I$; when a family of nonempty sets is indexed by\nitself, such an $f$ is precisely a choice function for it.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-additive-function",
      "source_section": "Definition",
      "quote": "Let $\\mathbb{R}$ be the complete ordered field ([[def-complete-ordered-field]],\n[[def-ordered-field]], [[def-field]]). A function $f : \\mathbb{R} \\to \\mathbb{R}$\nis **additive** when it satisfies **Cauchy's functional equation**\n\n$$f(x + y) \\;=\\; f(x) + f(y) \\qquad \\text{for all } x, y \\in \\mathbb{R}.$$\n\nEquivalently, $f$ is a homomorphism of the additive group of $\\mathbb{R}$ into\nitself.\n\n**The linear maps are additive.** For a fixed real $c$ the function\n$x \\mapsto cx$ satisfies $c(x+y) = cx + cy$ by distributivity, so it is\nadditive. Cauchy's question is whether these are the only additive functions,\nand the answer is a genuine dichotomy: with any one of a short list of\nregularity conditions the answer is yes\n([[thm-cauchy-functional-equation-regularity]]), and without any of them it is\nno ([[fs-additive-implies-linear]]).\n\n**No continuity, no monotonicity and no measurability is part of the\ndefinition.** The equation is purely algebraic, and every regularity hypothesis\nbelow is stated explicitly where it is used.\n\n**A first consequence, recorded here because it is used immediately.** An\nadditive $f$ satisfies $f(0) = 0$: putting $x = y = 0$ gives\n$f(0) = f(0) + f(0)$, and subtracting $f(0)$ gives $f(0) = 0$. The remaining\nelementary consequences, including $f(-x) = -f(x)$ and $\\mathbb{Q}$-homogeneity,\nare collected in [[lem-additive-is-q-linear]].",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "cor-exponential-reciprocal-and-positivity",
      "source_section": "Statement",
      "quote": "For every real $x$, $\\exp(x)>0$ and\n$$\\exp(-x)=\\frac1{\\exp(x)}.$$",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-exponential-is-strictly-increasing",
      "source_section": "Statement",
      "quote": "The exponential function is continuous and strictly increasing on $\\mathbb R$.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-exponential-addition-formula",
      "source_section": "Statement",
      "quote": "For all real $x,y$,\n$$\\exp(x+y)=\\exp(x)\\exp(y).$$",
      "uses": [
        "2.1",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Extend $\\{1,b\\}$ to a Hamel basis. Define the $\\mathbb Q$-linear map $A$ by $A(1)=1$, $A(b)=0$, and $A(v)=v$ on the remaining chosen basis elements. Then $A$ is additive but not the identity. [L1, L2, construct]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "construct"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Put $F(x)=\\exp(A(x))$. Positivity and additivity give $F(x+y)=F(x)F(y)$, and $F(1)=e$.  [step 1.1, L3]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L3"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "If $F$ were continuous, [[thm-normalized-exponential-functional-equation]] would give $F=\\exp$; injectivity of $\\exp$ would then give $A(x)=x$, contradicting $A(b)=0\\ne b$.   [step 1.1, step 2.1, L3, given]",
      "step": "3.1",
      "inputs": [
        "1.1",
        "2.1",
        "L3",
        "[thm-normalized-exponential-functional-equation",
        "given"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Thus $F$ is a discontinuous positive multiplicative solution. The construction uses Choice exactly in the basis extension.   [step 3.1, given, discharge-construct] ∎",
      "step": "4.1",
      "inputs": [
        "3.1",
        "given",
        "discharge-construct"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The vector space R over Q is nonempty and contains 1."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 1.1 and 2.1 give A(0)=0 and F(0)=exp(0)=1."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 1.1 and 2.1 give A(1)=1 and F(1)=e."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The irrational b is linearly independent from 1, so the prescribed basis values do not collide."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "R has no finite endpoints."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 explicitly invokes Choice to extend {1,b} to a Hamel basis and then defines A on that basis."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Step 2.1 shows additive A produces multiplicative positive F through exp."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Steps 3.1 and 4.1 use the normalized characterization contrapositively: if F were continuous it would equal exp, contradicting F(b)=1."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cex-discontinuous-multiplicative-cauchy-solution",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "thm-every-independent-set-extends-to-a-basis",
    "declared_target": "thm-every-independent-set-extends-to-a-basis",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-discontinuous-multiplicative-cauchy-solution",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "def-vector-space",
    "declared_target": "def-vector-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-discontinuous-multiplicative-cauchy-solution",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "def-additive-function",
    "declared_target": "def-additive-function",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-discontinuous-multiplicative-cauchy-solution",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "cor-irrationals-uncountable",
    "declared_target": "cor-irrationals-uncountable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-discontinuous-multiplicative-cauchy-solution",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "thm-normalized-exponential-functional-equation",
    "declared_target": "thm-normalized-exponential-functional-equation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-discontinuous-multiplicative-cauchy-solution",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-addition-formula",
    "declared_target": "thm-exponential-addition-formula",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-discontinuous-multiplicative-cauchy-solution",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "cor-exponential-reciprocal-and-positivity",
    "declared_target": "cor-exponential-reciprocal-and-positivity",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-discontinuous-multiplicative-cauchy-solution",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "thm-exponential-is-strictly-increasing",
    "declared_target": "thm-exponential-is-strictly-increasing",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-discontinuous-multiplicative-cauchy-solution",
    "sourcePage": "the-exponential-function-examples",
    "batch": "wave14-real-analysis",
    "target": "def-axiom-of-choice",
    "declared_target": "def-axiom-of-choice",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (9)

### `cor-exponential-reciprocal-and-positivity`

````markdown
---
id: cor-exponential-reciprocal-and-positivity
kind: corollary
title: "The exponential is positive and satisfies $\\exp(-x)=1/\\exp(x)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-exponential-addition-formula, def-real-exponential-function-and-e, lem-of-square-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "J. K. Hunter, An Introduction to Real Analysis, Chapter 10"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch10.pdf"
    - title: "S. G. Johnson, Exponential Functions"
      url: "https://math.mit.edu/~stevenj/exponential.pdf"
pipeline_run: null
---

## Statement

For every real $x$, $\exp(x)>0$ and
$$\exp(-x)=\frac1{\exp(x)}.$$

## Facts & Assumptions

**Given:** $x\in\mathbb R$.

[L1] $\exp(x+y)=\exp(x)\exp(y)$ ([[thm-exponential-addition-formula]]), and $\exp(0)=1$ from [[def-real-exponential-function-and-e]].

[L2] Every nonzero square in an ordered field is positive ([[lem-of-square-positive]]).

## Proof

**Proof technique:** direct.

1.1 Setting $y=-x$ in [L1] gives $\exp(x)\exp(-x)=1$, so both factors are nonzero.  [L1, algebra]

2.1 Also $\exp(x)=\exp(x/2)^2$, so it is nonnegative; by step 1.1 and [L2] it is positive.  [L1, L2]

3.1 Dividing the identity in step 1.1 by $\exp(x)$ gives the reciprocal formula.  [step 1.1, algebra] ∎
````

### `cor-irrationals-uncountable`

````markdown
---
id: cor-irrationals-uncountable
kind: corollary
title: "The irrationals are uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-r-uncountable, thm-rationals-countable, def-countable, lem-countable-iff-surjection-from-n, thm-n-cross-n-countable, lem-of-q-embeds, def-equinumerous, def-injection-surjection-bijection, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$\\mathbb{R}\\setminus\\mathbb{Q}$ uncountable"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Irrational number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Irrational_number"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]) and
let $\iota : \mathbb{Q} \to \mathbb{R}$ be the canonical embedding
([[lem-of-q-embeds]]); write $\mathbb{Q}_{\mathbb{R}} = \iota[\mathbb{Q}]$ for the
copy of the rationals inside $\mathbb{R}$, the set usually written $\mathbb{Q}$
once the identification is made. Then the set of **irrationals**

$$\mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$$

is uncountable ([[def-countable]]).

**Only the union of two sets is used, and that needs no choice whatsoever.** If
the irrationals were at most countable, then $\mathbb{R}$ would be the union of
the two at most countable sets $\mathbb{Q}_{\mathbb{R}}$ and
$\mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$, and countability of a two-set
union is proved by interleaving two given enumerations. The countable union
theorem, which does spend $\mathrm{AC}_\omega$, is **not** invoked here and is
not needed; see the remarks below.

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$, the canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$, the subset $\mathbb{Q}_{\mathbb{R}} = \iota[\mathbb{Q}]$ and its complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$, so that $\mathbb{R} = \mathbb{Q}_{\mathbb{R}} \cup X$.

[L1] $\iota$ is injective ([[lem-of-q-embeds]]), hence a bijection of $\mathbb{Q}$ onto $\mathbb{Q}_{\mathbb{R}}$; $\approx$ is transitive ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L2] $\mathbb{Q} \approx \mathbb{N}$, so $\mathbb{Q}$ is at most countable ([[thm-rationals-countable]]).

[L3] A nonempty set is at most countable if and only if some surjection $\mathbb{N} \to$ it exists ([[lem-countable-iff-surjection-from-n]]); uncountable means not at most countable ([[def-countable]]).

[L4] There is a bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ ([[thm-n-cross-n-countable]]).

[L5] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ is at most countable. [assume-contra]

1.2 $\mathbb{Q}_{\mathbb{R}} \approx \mathbb{Q} \approx \mathbb{N}$ by [L1] and [L2], so $\mathbb{Q}_{\mathbb{R}}$ is at most countable, and it is nonempty since $\iota(0) \in \mathbb{Q}_{\mathbb{R}}$. [L1, L2]

1.3 Fix the bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ of [L4]. [L4]

2.1 If $X = \varnothing$ then $\mathbb{R} = \mathbb{Q}_{\mathbb{R}}$, which is at most countable by step 1.2. [step 1.2, given]

2.2 Otherwise $X \ne \varnothing$, and since $X$ is at most countable by assumption and $\mathbb{Q}_{\mathbb{R}}$ is nonempty and at most countable by step 1.2, [L3] provides surjections $f : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$ and $g : \mathbb{N} \to X$. [step 1.1, step 1.2, L3]

3.1 Define $u : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ by $u(0,k) = f(k)$ and $u(n,k) = g(k)$ for $n \ne 0$. Every element of $\mathbb{R}$ lies in $\mathbb{Q}_{\mathbb{R}}$ or in $X$, hence is $f(k)$ or $g(k)$ for some $k$, so $u$ is surjective onto $\mathbb{R}$. The two surjections were obtained one after the other, not selected simultaneously from an infinite family, so no choice principle is used. [step 2.2, given]

4.1 Hence $u \circ \beta : \mathbb{N} \to \mathbb{R}$ is a surjection and $\mathbb{R} \ne \varnothing$, so $\mathbb{R}$ is at most countable by [L3]. [step 1.3, step 3.1, L3]

5.1 In either case $\mathbb{R}$ is at most countable, by step 2.1 in the first and step 4.1 in the second; this contradicts [L5]. Therefore $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ is uncountable. [step 2.1, step 4.1, L3, L5, discharge-contradiction] ∎

## Remarks

- The same argument shows that removing any at most countable set from $\mathbb{R}$ leaves an uncountable set. In particular the algebraic numbers, once they are available, can be removed to show transcendental numbers exist, which is how Cantor's 1874 paper presented the result: an existence proof for transcendentals with no example constructed.

- The corollary is a statement about the *set* of irrationals only. It says nothing about any individual irrational, and it does not exhibit one; the library exhibits $\sqrt{2}$ separately ([[ex-sqrt-two-exists]], [[fs-sqrt2-rational]]).

- Keeping the two-set union separate from the countable union is not pedantry. The countable case genuinely needs $\mathrm{AC}_\omega$ ([[thm-countable-union-of-countable]]) and is unprovable in ZF conditionally on the consistency of ZF, which is the honest form of [[fs-countable-union-theorem-of-zf]] and rests on an external independence result quoted there rather than proved; whereas this corollary, like [[thm-r-uncountable]] itself, is outright a theorem of ZF.
````

### `def-additive-function`

````markdown
---
id: def-additive-function
kind: definition
title: "Cauchy's functional equation $f(x+y) = f(x) + f(y)$, and the additive functions $\\mathbb{R} \\to \\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
  evidence: exact-source
deps: [def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: [def-cauchy-functional-equation]
landmark: true
short: "additive function; Cauchy's equation"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
pipeline_run: null
---

## Definition

Let $\mathbb{R}$ be the complete ordered field ([[def-complete-ordered-field]],
[[def-ordered-field]], [[def-field]]). A function $f : \mathbb{R} \to \mathbb{R}$
is **additive** when it satisfies **Cauchy's functional equation**

$$f(x + y) \;=\; f(x) + f(y) \qquad \text{for all } x, y \in \mathbb{R}.$$

Equivalently, $f$ is a homomorphism of the additive group of $\mathbb{R}$ into
itself.

**The linear maps are additive.** For a fixed real $c$ the function
$x \mapsto cx$ satisfies $c(x+y) = cx + cy$ by distributivity, so it is
additive. Cauchy's question is whether these are the only additive functions,
and the answer is a genuine dichotomy: with any one of a short list of
regularity conditions the answer is yes
([[thm-cauchy-functional-equation-regularity]]), and without any of them it is
no ([[fs-additive-implies-linear]]).

**No continuity, no monotonicity and no measurability is part of the
definition.** The equation is purely algebraic, and every regularity hypothesis
below is stated explicitly where it is used.

**A first consequence, recorded here because it is used immediately.** An
additive $f$ satisfies $f(0) = 0$: putting $x = y = 0$ gives
$f(0) = f(0) + f(0)$, and subtracting $f(0)$ gives $f(0) = 0$. The remaining
elementary consequences, including $f(-x) = -f(x)$ and $\mathbb{Q}$-homogeneity,
are collected in [[lem-additive-is-q-linear]].
````

### `def-axiom-of-choice`

````markdown
---
id: def-axiom-of-choice
kind: definition
title: "The Axiom of Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-choice-function]
justified_by: []
forward_refs: [ex-russells-socks, rem-choice-strengths, fs-zorn-provable-in-zf,
               lem-finite-choice, rem-choice-ledger]
external_refs: [rem-godel-constructible-universe, rem-cohen-forcing-ac-independent]
aliases: [def-ac]
landmark: true
short: "axiom of choice"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation is that a product of nonempty sets is nonempty: if
$X_i \ne \emptyset$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.
Here $\prod_{i \in I} X_i$ is the set of functions $f$ with domain $I$ such that
$f(i) \in X_i$ for every $i \in I$; when a family of nonempty sets is indexed by
itself, such an $f$ is precisely a choice function for it.

## Remarks

- **This is an axiom, not a theorem, and it is deliberately not derived here.**
  **Assume ZF is consistent.** Then AC is independent of the axioms of
  Zermelo–Fraenkel set theory: Gödel (1938) showed that ZF, if consistent, cannot
  refute it ([[rem-godel-constructible-universe]]), and Cohen (1963) showed that
  ZF, if consistent, cannot prove it ([[rem-cohen-forcing-ac-independent]]). The
  consistency hypothesis is not decoration and cannot be dropped: an inconsistent
  ZF proves everything, AC included, so both halves of the independence would
  fail. Nor can the hypothesis be discharged inside ZF. Both directions also
  require machinery (the constructible universe and forcing) that this library
  does not yet contain, so both are recorded with references rather than proved.
  [[fs-zorn-provable-in-zf]] carries the same consistency assumption explicitly
  in its Given; [[rem-choice-ledger]] records the weaker choice principles.
- Being an axiom, AC carries no well-definedness obligation, which is why this
  item has no `justified_by`.
- The case of a family listed by a natural number, which is the finite case once
  finiteness is defined, is a theorem of ZF and needs no axiom
  ([[lem-finite-choice]]). AC is exactly the extension of that theorem to
  arbitrary index sets, and the gap between the two is not a matter of degree:
  [[ex-russells-socks]] exhibits the difference concretely.
- "ZFC" abbreviates ZF together with AC. A result that invokes AC should say so
  where it is stated, so that a reader can tell which theorems are choice-free;
  that bookkeeping is the purpose of [[rem-choice-ledger]].
  [[rem-choice-strengths]] carries the narrower question of what the ultrafilter
  lemma costs, and on cited authority, and under the hypothesis that ZF is
  consistent, places that principle strictly between ZF and AC.
````

### `def-vector-space`

````markdown
---
id: def-vector-space
kind: definition
title: "Vector space over a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-group, def-binary-operation, def-identity-element, def-invertible-element, lem-identity-unique, lem-inverse-unique]
justified_by: []
aliases: [def-vector, def-scalar-multiplication]
landmark: true
short: "vector space over $F$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector_space"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative
identity $1_F$, and the field axioms as stated there. A **vector space over $F$**,
also called an **$F$-vector space**, consists of

- a set $V$, whose elements are called **vectors**;
- a binary operation $+ : V \times V \to V$ on $V$ ([[def-binary-operation]]),
  the **vector addition**;
- an element $0_V \in V$, the **zero vector**;
- a map $\cdot \,:\, F \times V \to V$, the **scalar multiplication**, written
  $\lambda v := \cdot(\lambda, v)$;

subject to the following axioms, in which $u, v \in V$ and $\lambda, \mu \in F$
are arbitrary.

- **(V1)** $(V, +, 0_V)$ is an abelian group ([[def-group]]): $+$ is associative
  and commutative, $0_V$ is a two-sided identity for $+$
  ([[def-identity-element]]), and every $v \in V$ has an additive inverse
  ([[def-invertible-element]]).
- **(V2)** $\lambda(u + v) = \lambda u + \lambda v$.
- **(V3)** $(\lambda + \mu)v = \lambda v + \mu v$.
- **(V4)** $(\lambda\mu)v = \lambda(\mu v)$.
- **(V5)** $1_F v = v$.

The elements of $F$ are called **scalars**. When several vector spaces are in
play we write $0_V$ for the zero of $V$, and we write $-v$ for the additive
inverse of $v$ and $u - v := u + (-v)$.

**The notation $0_V$ and $-v$ is legitimate.** Axiom (V1) asserts only that some
two-sided identity and some additive inverses exist. That there is at most one
two-sided identity for $+$ is [[lem-identity-unique]], and that an invertible
element of a monoid has exactly one inverse is [[lem-inverse-unique]]; both are
proved before [[def-group]] and are inherited here with the group structure. So
$0_V$ and $-v$ denote well-defined elements, and nothing below re-derives them.

**What (V1) buys, and why it is not restated.** Associativity, commutativity, the
identity law $v + 0_V = v = 0_V + v$, the inverse law $v + (-v) = 0_V$,
cancellation ([[lem-group-cancellation]]) and the inverse identities
([[lem-group-inverse-laws]]) are facts about abelian groups. They are quoted from
the group page wherever they are used and are never proved again for vectors.

## Remarks

- **Scalar multiplication is not a binary operation on a set.** It is a map
  $F \times V \to V$ with arguments from two different sets, so
  [[def-binary-operation]], which is about a map $S \times S \to S$, does not
  apply to it and is never cited for it. The definition above cites that item for
  the vector addition only. In particular "closed under scalar multiplication"
  below always means $\lambda v \in W$ for $\lambda \in F$ and $v \in W$, which is
  not an instance of the closure condition defined there.

- **(V5) is an axiom, not a consequence of (V2)–(V4).** Take any abelian group
  $(V,+,0_V)$ and define $\lambda v := 0_V$ for every $\lambda$ and $v$. Then
  (V2), (V3) and (V4) all hold, both sides of each being $0_V$, while (V5) fails
  as soon as $V \ne \{0_V\}$. So (V5) has to be imposed, and it is what ties the
  scalar action to the identity of $F$.

- **Two structures, one set.** A vector space is data: the set $V$, the addition,
  the zero, and the scalar multiplication, over a fixed field $F$. The same set
  may carry vector-space structures over different fields, and the field is part
  of the statement of every result below. [[lem-restriction-of-scalars]] is the
  first place where that matters.

- **The field is the published one.** No field axiom is restated here; $F$ is a
  field in the sense of [[def-field]], whose axiom (A) already says that $(F,+)$
  is an abelian group and whose axiom (M) says the same of
  $(F \setminus \{0_F\}, \cdot)$. In particular every field is a vector space over
  itself, which is [[lem-restriction-of-scalars]].
````

### `thm-every-independent-set-extends-to-a-basis`

````markdown
---
id: thm-every-independent-set-extends-to-a-basis
kind: theorem
title: "Zorn's lemma gives a basis between any linearly independent set and any spanning set containing it: if $L \\subseteq S \\subseteq V$ with $L$ independent and $\\operatorname{span}(S) = V$, there is a basis $B$ of $V$ with $L \\subseteq B \\subseteq S$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-zorn, def-axiom-of-choice, def-partial-order, def-chain, def-upper-bound, def-maximal-element, lem-independence-has-finite-character, lem-adjoining-a-vector-outside-the-span, def-linear-basis, def-linear-independence, def-linear-combination-and-span, lem-span-monotone-and-idempotent, def-linear-subspace, def-vector-space, def-field]
justified_by: []
aliases: [thm-basis-extension, thm-extend-to-a-basis]
landmark: true
short: "independent set extends to a basis inside a spanning set"
proof_strategy: constructive
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
    - title: "University of Colorado notes: Linear algebra and vector spaces"
      url: "https://math.colorado.edu/~nita/LAVectorSpaces.pdf"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), which is what
[[thm-zorn]] is proved from. Let $V$ be a vector space over a field $F$
([[def-vector-space]]) and let $L \subseteq S \subseteq V$ with $L$ linearly
independent ([[def-linear-independence]]) and $\operatorname{span}(S) = V$
([[def-linear-combination-and-span]]). Then there is a basis $B$ of $V$
([[def-linear-basis]]) with

$$L \;\subseteq\; B \;\subseteq\; S .$$

## Facts & Assumptions

**Given:** The Axiom of Choice; a field $F$; a vector space $V$ over $F$; and subsets $L \subseteq S \subseteq V$ with $L$ linearly independent and $\operatorname{span}(S) = V$.

[L1] Zorn's lemma: a **nonempty** poset in which **every** chain has an upper bound has a maximal element ([[thm-zorn]], [[def-maximal-element]], [[def-upper-bound]], [[def-chain]]). The hypothesis quantifies over every chain, the empty one included, and the empty set is a chain ([[def-chain]]).

[L2] Inclusion is a partial order on any collection of sets, and every element of a poset is an upper bound of the empty subset, vacuously ([[def-partial-order]], [[def-upper-bound]]).

[L3] The union of a **nonempty** chain of linearly independent subsets of $V$, ordered by inclusion, is linearly independent ([[lem-independence-has-finite-character]], claim 2).

[L4] If $A \subseteq V$ is linearly independent and $w \notin \operatorname{span}(A)$, then $w \notin A$ and $A \cup \{w\}$ is linearly independent ([[lem-adjoining-a-vector-outside-the-span]], claim 2).

[L5] $\operatorname{span}(T)$ is a linear subspace of $V$ containing $T$ and contained in every linear subspace of $V$ containing $T$ ([[def-linear-combination-and-span]], [[lem-span-monotone-and-idempotent]], [[def-linear-subspace]]).

[L6] A basis of $V$ is a linearly independent subset $B$ with $\operatorname{span}(B) = V$ ([[def-linear-basis]]).

## Proof

**Proof technique:** constructive.

1.1 Let $P$ be the set of all $A$ with $L \subseteq A \subseteq S$ and $A$ linearly independent. It is a set, being a subcollection of the power set of $S$, and inclusion partially orders it. [construct, L2]

1.2 $P$ is nonempty, since $L$ itself is linearly independent and satisfies $L \subseteq L \subseteq S$. [L6]

1.3 Every chain $\mathcal{C} \subseteq P$ has an upper bound in $P$. If $\mathcal{C} = \varnothing$, then $L \in P$ is an upper bound, vacuously; this case is not optional, since Zorn's lemma as proved here quantifies over every chain and the empty set is a chain, and the union of the empty chain is $\varnothing$, which need not contain $L$. If $\mathcal{C} \ne \varnothing$, put $A^{*} := \bigcup\mathcal{C}$: it is linearly independent, being the union of a nonempty chain of linearly independent sets; it contains $L$, since $\mathcal{C}$ has a member and every member contains $L$; and it is contained in $S$, since every member is. So $A^{*} \in P$, and it contains every member of $\mathcal{C}$. [L1, L2, L3]

2.1 By Zorn's lemma applied to the nonempty poset of step 1.1, in which every chain has an upper bound by step 1.3, there is a maximal element $B$ of $P$: $B$ is linearly independent, $L \subseteq B \subseteq S$, and no member of $P$ strictly contains $B$. [step 1.1, step 1.2, step 1.3, L1]

3.1 $\operatorname{span}(B) = V$. Let $s \in S$ and suppose $s \notin \operatorname{span}(B)$; then $B \cup \{s\}$ is linearly independent and $s \notin B$, so $B \subsetneq B \cup \{s\}$, while $L \subseteq B \cup \{s\} \subseteq S$, putting $B \cup \{s\}$ in $P$ strictly above $B$ and contradicting maximality. Hence $S \subseteq \operatorname{span}(B)$, so $\operatorname{span}(B)$ is a linear subspace of $V$ containing $S$ and therefore contains $\operatorname{span}(S) = V$; the reverse inclusion is automatic, so $\operatorname{span}(B) = V$. [step 2.1, L4, L5]

4.1 The set $B$ produced in step 2.1 is linearly independent and, by step 3.1, spans $V$, so it is a basis of $V$ with $L \subseteq B \subseteq S$. [step 2.1, step 3.1, L6, discharge-construct] ∎

## Remarks

- **Both classical statements are instances of this one.** "Every vector space has a basis" is the case $L = \varnothing$, $S = V$ ([[cor-every-vector-space-has-a-basis]]), and "every spanning set contains a basis" is the case $L = \varnothing$ ([[cor-every-spanning-set-contains-a-basis]]). They are corollaries of this single Zorn argument rather than two separate ones, which is why the two hypotheses are stated together in the statement above.

- **The choice is declared, not hidden.** The only non-constructive ingredient is [[thm-zorn]], and that item records that the Axiom of Choice is used exactly once inside it. Nothing else above appeals to a choice principle: the poset, its order and the upper bound of a chain are all written down explicitly. Zorn's lemma is equivalent to the Axiom of Choice over ZF ([[cor-ac-iff-zorn]]), so the cost of this theorem is exactly that axiom.

- **The empty chain is a real case here.** [[thm-zorn]] as proved in this library has no nonemptiness clause on chains, and its own remarks note that requiring every chain to have an upper bound already forces the poset to be nonempty. In the poset above the union of the empty chain is $\varnothing$, which lies in $P$ only when $L = \varnothing$; the upper bound supplied instead is $L$. Skipping this case would leave a hole in the verification of Zorn's hypothesis.

- **Maximality is used exactly once**, in step 3.1, and only to exclude one extra vector at a time. That is why [[lem-adjoining-a-vector-outside-the-span]] is stated separately: it is the whole content of the step, and the same lemma does the same job in [[lem-basis-iff-maximal-independent-iff-minimal-spanning]] and in [[thm-dimension-of-a-linear-subspace]].
````

### `thm-exponential-addition-formula`

````markdown
---
id: thm-exponential-addition-formula
kind: theorem
title: "The exponential addition formula $\\exp(x+y)=\\exp(x)\\exp(y)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-exponential-series-has-infinite-radius, lem-cauchy-product-of-real-power-series, thm-binomial-theorem, thm-binomial-closed-formula, def-binomial-coefficient, def-factorial-and-falling-factorial, def-canonical-natural, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "J. K. Hunter, An Introduction to Real Analysis, Chapter 10"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch10.pdf"
pipeline_run: null
---

## Statement

For all real $x,y$,
$$\exp(x+y)=\exp(x)\exp(y).$$

## Facts & Assumptions

**Given:** $x,y\in\mathbb R$.

[L1] For fixed $x,y$, the auxiliary power series $\sum_{n\ge0}x^nz^n/\iota(n!)$ and $\sum_{n\ge0}y^nz^n/\iota(n!)$ have infinite radius by [[lem-exponential-series-has-infinite-radius]]. Inside their common radius, their product is the Cauchy product of their coefficients ([[lem-cauchy-product-of-real-power-series]]).

[L2] The binomial theorem says $(x+y)^n=\sum_{k=0}^n\iota\binom nk x^ky^{n-k}$ ([[thm-binomial-theorem]], [[def-binomial-coefficient]]).

[L3] For $k\le n$, $\iota\binom nk=\iota(n!)/(\iota(k!)\iota((n-k)!))$ ([[thm-binomial-closed-formula]]). Therefore $1/(\iota(k!)\iota((n-k)!))=\iota\binom nk/\iota(n!)$, with all naturals read in $\mathbb R$ through [[def-canonical-natural]].

## Proof

**Proof technique:** direct.

1.1 Apply [L1] at the auxiliary value $z=1$. The coefficient of degree $n$ in the resulting Cauchy product for $\exp(x)\exp(y)$ is $\sum_{k=0}^n x^ky^{n-k}/(\iota(k!)\iota((n-k)!))$.   [L1, given]

2.1 Apply [L3] and [L2] to identify this finite sum with $(x+y)^n/\iota(n!)$.  [step 1.1, L2, L3, algebra]

3.1 Summing over $n$ gives the exponential series at $x+y$, hence the formula.  [step 2.1, L1] ∎
````

### `thm-exponential-is-strictly-increasing`

````markdown
---
id: thm-exponential-is-strictly-increasing
kind: theorem
title: "The exponential function is strictly increasing"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-exponential-series-has-infinite-radius, thm-derivative-of-exponential, cor-exponential-reciprocal-and-positivity, cor-mean-value-theorem, cor-power-series-sums-are-continuous]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Statement

The exponential function is continuous and strictly increasing on $\mathbb R$.

## Facts & Assumptions

**Given:** The exponential function.

[L1] Its derivative equals itself ([[thm-derivative-of-exponential]]) and it is everywhere positive ([[cor-exponential-reciprocal-and-positivity]]).

[L2] The mean value theorem applies to a continuous function on a closed interval and converts a positive interior derivative into strict increase ([[cor-mean-value-theorem]]). A power-series sum is continuous at every point strictly inside its convergence interval, and the exponential series has infinite radius ([[cor-power-series-sums-are-continuous]], [[lem-exponential-series-has-infinite-radius]]).

## Proof

**Proof technique:** direct.

1.1 If $x<y$, the mean value theorem gives $\exp(y)-\exp(x)=\exp(c)(y-x)$ for some $c\in(x,y)$.  [L1, L2]

2.1 Both factors on the right are positive, so $\exp(y)>\exp(x)$. Continuity is the cited power-series conclusion.  [step 1.1, L1, L2] ∎
````

### `thm-normalized-exponential-functional-equation`

````markdown
---
id: thm-normalized-exponential-functional-equation
kind: theorem
title: "Regular normalized multiplicative Cauchy equations characterize the exponential"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-exponential-ivp-uniqueness, thm-exponential-addition-formula, thm-exponential-is-strictly-increasing, cor-exponential-reciprocal-and-positivity, def-real-exponential-function-and-e, thm-derivative-of-exponential, def-derivative, def-rational-power, thm-nth-roots-exist, lem-rat-embeds-dense, def-continuity-real]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "Y. Vorobets, Texas A&M MATH 409 Lecture 2-07"
      url: "https://people.tamu.edu/~yvorobets/MATH409-2013C/Lect2-07web.pdf"
    - title: "S. G. Johnson, Exponential Functions"
      url: "https://math.mit.edu/~stevenj/exponential.pdf"
pipeline_run: null
---

## Statement

The exponential function is the unique continuous $F:\mathbb R\to(0,\infty)$ satisfying $F(x+y)=F(x)F(y)$ and $F(1)=e$. It is also the unique function differentiable at $0$ satisfying the functional equation, $F(0)=1$, and $F'(0)=1$.

## Facts & Assumptions

**Given:** A function $F$ satisfying one of the two normalizations.

[L1] The exponential satisfies $\exp(x+y)=\exp(x)\exp(y)$, is continuous and positive, obeys $\exp(0)=1$, $\exp(1)=e$, and $\exp'=\exp$, and is the unique normalized solution of $y'=y$ ([[thm-exponential-addition-formula]], [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]], [[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[thm-exponential-ivp-uniqueness]]).

[L2] Positive $n$-th roots exist uniquely ([[thm-nth-roots-exist]]), rational powers are [[def-rational-power]], and rationals are dense ([[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** cases.

1.1 Under continuity and $F(1)=e$, the equation gives $F(n)=e^n$, $F(-n)=e^{-n}$, and uniqueness of positive roots gives $F(m/n)=e^{m/n}$ for rationals $m/n$. Density and continuity then give $F(x)=\exp(x)$ for every real $x$.   [assume-case continuous, L1, L2, given]

1.2 Under differentiability at $0$, $\frac{F(x+h)-F(x)}h=F(x)\frac{F(h)-1}h$, so $F'(x)=F(x)F'(0)=F(x)$. With $F(0)=1$, [L1] gives $F=\exp$.   [assume-case differentiable, given, L1, algebra]

2.1 The exponential itself satisfies both normalizations, so both uniqueness assertions follow.  [step 1.1, step 1.2, L1, cases-exhaustive] ∎
````


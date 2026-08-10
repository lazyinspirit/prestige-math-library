## Selection reasons

- critical risk (13): 8 declared dependencies; 7 cited facts; 7 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-c-k-complete-in-the-sup-metric`

Normalized current SHA-256: `b895f20954fb2f0f712fd98c1c9a62cafe6d5117000d7ac6e8aa1fc31ec496aa`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-c-k-complete-in-the-sup-metric
kind: theorem
title: "$C(K,\\mathbb{R})$ is complete in the supremum metric for every nonempty compact metric space $K$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuous-real-functions-on-a-compact-metric-space, lem-sup-metric-is-a-metric, thm-extreme-value-metric, thm-uniform-cauchy-criterion-real-functions, thm-uniform-limit-continuous-real-functions, def-complete-metric-space, def-metric-convergence, def-cauchy-in-metric]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(K,d)$ be a nonempty compact metric space. Every member of
$C(K,\mathbb{R})$ is bounded, so the supremum metric

$$d_\infty(f,g):=\sup_{x\in K}|f(x)-g(x)|$$

is defined on $C(K,\mathbb{R})$. With this metric,
$C(K,\mathbb{R})$ is complete.

## Facts & Assumptions

**Given:** A nonempty compact metric space $(K,d)$ and the set $C(K,\mathbb{R})$ of continuous real-valued functions on it.

[L1] Every continuous real-valued function on a nonempty compact metric space has a bounded range ([[thm-extreme-value-metric]]).

[L2] If $S$ is nonempty, the formula $d_\infty(f,g)=\sup_{x\in S}|f(x)-g(x)|$ defines a metric on the set of bounded functions $S\to\mathbb{R}$ ([[lem-sup-metric-is-a-metric]]).

[L3] A sequence is Cauchy in a metric $d$ when, for every positive error, all pairwise distances sufficiently far out are below that error; it converges to $p$ when its distances to $p$ tend to zero ([[def-cauchy-in-metric]], [[def-metric-convergence]]).

[L4] A sequence of real-valued functions converges uniformly if and only if it is uniformly Cauchy ([[thm-uniform-cauchy-criterion-real-functions]]).

[L5] A uniform limit of continuous real-valued functions on a metric space is continuous ([[thm-uniform-limit-continuous-real-functions]]).

[L6] A metric space is complete when every Cauchy sequence in it converges to one of its points ([[def-complete-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every $f\in C(K,\mathbb{R})$ is bounded. Thus $C(K,\mathbb{R})$ is a subset of the bounded functions on $K$, and the restriction of the metric in [L2] is a metric on $C(K,\mathbb{R})$. [L1, L2]

1.2 Let $(f_j)$ be a Cauchy sequence in this supremum metric. [given, L3]

2.1 Given a real $\varepsilon>0$, choose $J$ such that $d_\infty(f_m,f_n)<\varepsilon$ for all $m,n\ge J$. Then $|f_m(x)-f_n(x)|\le d_\infty(f_m,f_n)<\varepsilon$ for all such $m,n$ and every $x\in K$, so $(f_j)$ is uniformly Cauchy. [step 1.2, L2, L3]

3.1 By [L4] there is a function $f:K\to\mathbb{R}$ such that $f_j\to f$ uniformly on $K$. [step 2.1, L4]

4.1 The function $f$ is continuous by [L5], hence belongs to $C(K,\mathbb{R})$ and is bounded by [L1]. [step 3.1, L1, L5]

5.1 Let $\varepsilon>0$. Uniform convergence gives $J$ such that $|f_j(x)-f(x)|<\varepsilon/2$ for every $j\ge J$ and $x\in K$; hence $d_\infty(f_j,f)\le\varepsilon/2<\varepsilon$, so $f_j\to f$ in the supremum metric. [step 3.1, step 4.1, L2, L3]

6.1 Every Cauchy sequence in $C(K,\mathbb{R})$ therefore converges in the supremum metric to a member of $C(K,\mathbb{R})$, so the metric space is complete. [step 1.1, step 5.1, L6] ∎
````

## Wave 12 provenance row

```json
{
  "id": "thm-c-k-complete-in-the-sup-metric",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "$C(K,\\\\mathbb{R})$ is complete in the supremum metric for every nonempty compact metric space $K$: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
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
      "source": "thm-extreme-value-metric",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a nonempty compact metric space ([[def-metric-compactness]], [[def-metric-space]]) and let $f : X \\to \\mathbb{R}$ be continuous ([[def-metric-continuity]]), $\\mathbb{R}$ carrying its usual metric $d_{\\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]). Then the image $f[X]$ is bounded above and below ([[def-bounded-set]]), and it has a maximum and a minimum ([[def-max-min]]): there are points $x_{\\max}, x_{\\min} \\in X$ with $$f(x_{\\min}) \\;\\le\\; f(x) \\;\\le\\; f(x_{\\max}) \\qquad \\text{for every } x \\in X,$$ and then $f(x_{\\max}) = \\sup f[X]$ and $f(x_{\\min}) = \\inf f[X]$ ([[def-complete-ordered-field]], [[def-infimum]]). Nonemptiness of $X$ is a hypothesis and not an oversight: for $X = \\emptyset$ the image is empty and has neither a supremum nor a maximum. No choice principle is used.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-sup-metric-is-a-metric",
      "source_section": "Statement",
      "quote": "Let $S$ be a nonempty set. Call a function $f : S \\to \\mathbb{R}$ **bounded** when its range $f[S] = \\{f(s) : s \\in S\\}$ is a bounded subset of $\\mathbb{R}$ ([[def-bounded-set]]), and write $$\\mathcal{B}(S) := \\{\\, f : f \\text{ is a bounded function } S \\to \\mathbb{R} \\,\\}.$$ For $f, g \\in \\mathcal{B}(S)$ put $D(f,g) := \\{\\, |f(s) - g(s)| : s \\in S \\,\\}$ and $$d_\\infty(f,g) := \\sup D(f,g).$$ This is well defined: $D(f,g)$ is nonempty because $S$ is, and it is bounded above (step 1.1 below), so its least upper bound exists ([[def-complete-ordered-field]]) and is unique ([[lem-sup-unique]]). **Then $d_\\infty$ is a metric on $\\mathcal{B}(S)$** ([[def-metric-space]]), the **supremum metric** (also called the uniform metric). The hypotheses ensure that the formula is a finite real-valued metric for every pair in the stated function space. Boundedness of $f$ and $g$ makes $D(f,g)$ bounded above, and nonemptiness of $S$ makes it nonempty. Some unbounded pairs can still have a finite supremum, but allowing all real-valued functions would not give a finite-valued metric: for example, on $S=\\mathbb{R}$ the functions $f(s)=s$ and $g(s)=0$ make $D(f,g)$ unbounded above ([[rem-sup-conventions]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-cauchy-in-metric",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a sequence in $X$, that is a function $\\mathbb{N} \\to X$ written $x_k := x(k)$ ([[def-metric-convergence]], [[def-sequence]]). As everywhere in this library $\\mathbb{N}$ contains $0$, so a sequence is indexed from $0$. $(x_k)$ is a **Cauchy sequence in $(X,d)$** if for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ such that $$d(x_m, x_n) < \\varepsilon \\qquad \\text{for all } m, n \\ge K .$$ **Rational and real $\\varepsilon$ agree here.** The test is written with a rational $\\varepsilon$ to match [[def-real-limit]] and [[def-metric-convergence]], and nothing is lost by using a real one: below any real $\\eta > 0$ lies a positive rational ([[lem-rat-embeds-dense]]), and the index belonging to that rational serves for $\\eta$. So a proof may establish Cauchyness by producing an index for every real $\\varepsilon > 0$, and may use a Cauchy hypothesis at a real $\\varepsilon$ by first passing to a rational below it. Both moves are used on this page and are always cited. **The condition is exactly $d(x_m,x_n) \\to 0$ as $m$ and $n$ grow independently.** The distances $d(x_m,x_n)$ are nonnegative reals ([[lem-metric-nonnegativity]]), and the displayed condition asks them to be uniformly small on a tail of the doubly indexed family. It is not the same as $d(x_{k+1}, x_k) \\to 0$, which is a strictly weaker condition and is a standing source of error. The partial sums $H_n$ of the harmonic series separate the two: consecutive ones differ by $1/(n+1)$, which tends to $0$, while the sequence is unbounded, and an unbounded sequence of reals is not Cauchy ([[lem-metric-cauchy-bounded]]). **Consistency with the real line.** For $X = \\mathbb{R}$ with the usual metric $d(x,y) = |x-y|$ ([[lem-real-line-is-a-metric-space]]) the condition above reads $|x_m - x_n| < \\varepsilon$ for $m,n \\ge K$, which is verbatim the definition of a Cauchy sequence of reals ([[def-real-limit]]). So the notion introduced here restricts on $\\mathbb{R}$ to the one already in use, and no ambiguity is created.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-metric-convergence",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]). A **sequence in $X$** is a function $x : \\mathbb{N} \\to X$, written $(x_k)$ with $x_k := x(k)$. As everywhere in this library, $\\mathbb{N}$ contains $0$ ([[def-natural-numbers]]) and a sequence is indexed from $0$ ([[def-sequence]]); an index range copied from a text that starts at $1$ must be shifted before it is used here. Let $(x_k)$ be a sequence in $X$ and $p \\in X$. The function $k \\mapsto d(x_k, p)$ is a sequence of reals ([[def-sequence]]), and it is nonnegative ([[lem-metric-nonnegativity]]), so $|d(x_k,p)| = d(x_k,p)$ ([[def-abs-value]]). Define $$x_k \\longrightarrow p \\text{ in } (X,d) \\quad :\\Longleftrightarrow \\quad d(x_k,p) \\longrightarrow 0 \\text{ in } \\mathbb{R},$$ the convergence on the right being that of [[def-real-limit]]. Unwound, this says: for every **rational** $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $d(x_k, p) < \\varepsilon$ for every $k \\ge K$. We then call $p$ a **limit** of $(x_k)$, and say $(x_k)$ **converges** in $(X,d)$ if it has a limit. **Rational and real $\\varepsilon$ agree here, as they do on the real line.** [[def-real-limit]] tests convergence against rational $\\varepsilon$ only, and its own remark, restated for sequences in [[def-sequence]], records that nothing is lost: below any real $\\eta > 0$ lies a positive rational ([[lem-rat-embeds-dense]]), and the index belonging to that rational serves for $\\eta$. So a proof may establish convergence by producing an index for every real $\\varepsilon > 0$, and may use a convergence hypothesis at a real $\\varepsilon$ by first passing to a rational below it. Both moves are used on this page and are always cited. **Subsequences and subsequential limits.** A **subsequence** of $(x_k)$ is the composite $x \\circ n$ for a strictly increasing $n : \\mathbb{N} \\to \\mathbb{N}$, written $(x_{n_j})$, exactly as for sequences of reals ([[def-sequence]]); and $p$ is a **subsequential limit** of $(x_k)$ in $(X,d)$ when some subsequence converges to $p$, which is the metric-space form of [[def-subsequential-limit]].",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-uniform-cauchy-criterion-real-functions",
      "source_section": "Statement",
      "quote": "Let $X$ be a set and let $f_k:X\\to\\mathbb{R}$ for every $k\\in\\mathbb{N}$. Then $(f_k)$ converges uniformly on $X$ to some $f:X\\to\\mathbb{R}$ if and only if $(f_k)$ is uniformly Cauchy on $X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-uniform-limit-continuous-real-functions",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a metric space and let $f_k:X\\to\\mathbb{R}$ be continuous for every $k\\in\\mathbb{N}$, where $\\mathbb{R}$ has its usual metric $d_{\\mathbb{R}}(s,t)=|s-t|$. If $f_k\\to f$ uniformly on $X$, then $f:X\\to\\mathbb{R}$ is continuous.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-complete-metric-space",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]). $(X,d)$ is **complete** if every Cauchy sequence in $(X,d)$ ([[def-cauchy-in-metric]]) converges to a point of $X$ ([[def-metric-convergence]]). A subset $A \\subseteq X$ is called **complete** when the metric subspace $(A, d_A)$ is complete ([[def-isometry-and-metric-embedding]]); as always, the metric is part of the data, and $d_A$ is the restriction of $d$ to $A \\times A$. **The limit is unique when it exists**, since limits in a metric space are unique ([[lem-metric-limits-unique]]), so a complete space assigns to each of its Cauchy sequences one point and not a set of points. **Completeness is a property of the pair $(X,d)$, not of $X$ and not of the topology of $d$.** Both quantifiers in the definition are about the metric: the Cauchy condition is stated with distances, and so is convergence. Two metrics on the same set can have the same open sets while exactly one of them is complete, which is the content of [[fs-completeness-is-a-topological-property]] and its witness. Read the word *complete* as an abbreviation for *complete with respect to this metric*, always.",
      "quote_selection": "full-source-section",
      "uses": [
        "6.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "By [L1], every $f\\in C(K,\\mathbb{R})$ is bounded. Thus $C(K,\\mathbb{R})$ is a subset of the bounded functions on $K$, and the restriction of the metric in [L2] is a metric on $C(K,\\mathbb{R})$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Let $(f_j)$ be a Cauchy sequence in this supremum metric.",
      "step": "1.2",
      "inputs": [
        "given",
        "L3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Given a real $\\varepsilon>0$, choose $J$ such that $d_\\infty(f_m,f_n)<\\varepsilon$ for all $m,n\\ge J$. Then $|f_m(x)-f_n(x)|\\le d_\\infty(f_m,f_n)<\\varepsilon$ for all such $m,n$ and every $x\\in K$, so $(f_j)$ is uniformly Cauchy.",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "By [L4] there is a function $f:K\\to\\mathbb{R}$ such that $f_j\\to f$ uniformly on $K$.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L4"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "The function $f$ is continuous by [L5], hence belongs to $C(K,\\mathbb{R})$ and is bounded by [L1].",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "L1",
        "L5"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "Let $\\varepsilon>0$. Uniform convergence gives $J$ such that $|f_j(x)-f(x)|<\\varepsilon/2$ for every $j\\ge J$ and $x\\in K$; hence $d_\\infty(f_j,f)\\le\\varepsilon/2<\\varepsilon$, so $f_j\\to f$ in the supremum metric.",
      "step": "5.1",
      "inputs": [
        "step 3.1",
        "step 4.1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "Every Cauchy sequence in $C(K,\\mathbb{R})$ therefore converges in the supremum metric to a member of $C(K,\\mathbb{R})$, so the metric space is complete.",
      "step": "6.1",
      "inputs": [
        "step 1.1",
        "step 5.1",
        "L6"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement: K is explicitly assumed nonempty, which is needed for the real-valued supremum convention. Let $(K,d)$ be a nonempty compact metric space. Every member of $C(K,\\mathbb{R})$ is bounded, so the supremum metric $$d_\\infty(f,g):=\\sup_{x\\in K}|f(x)-g(x)|$$ is defined on $C(K,"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-c-k-complete-in-the-sup-metric: zero is not a distinguished parameter case in the claim; ordinary zero-valued functions, vectors, or bounds remain covered by its universal hypotheses."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-c-k-complete-in-the-sup-metric: there is no cardinal, dimension, or exponent parameter with a separate value-one branch in this claim."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-c-k-complete-in-the-sup-metric: the Statement has no collapse, coincidence, constant-family, or equality-case branch beyond cases already included by its universal estimates."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "thm-c-k-complete-in-the-sup-metric: no closed-interval endpoint, exponent endpoint, or finite-index endpoint affects the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.2: Let $(f_j)$ be a Cauchy sequence in this supremum metric."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "thm-c-k-complete-in-the-sup-metric: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "thm-c-k-complete-in-the-sup-metric: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the A2 contract. Alpha assigns the independent proof-refuter route at A5/A6."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-continuous-real-functions-on-a-compact-metric-space",
    "declared_target": "def-continuous-real-functions-on-a-compact-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "lem-sup-metric-is-a-metric",
    "declared_target": "lem-sup-metric-is-a-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-extreme-value-metric",
    "declared_target": "thm-extreme-value-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-uniform-cauchy-criterion-real-functions",
    "declared_target": "thm-uniform-cauchy-criterion-real-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-uniform-limit-continuous-real-functions",
    "declared_target": "thm-uniform-limit-continuous-real-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-complete-metric-space",
    "declared_target": "def-complete-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-metric-convergence",
    "declared_target": "def-metric-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-c-k-complete-in-the-sup-metric",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-cauchy-in-metric",
    "declared_target": "def-cauchy-in-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
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

## Full exact-current text of every cited or declared item (8)

### `def-cauchy-in-metric`

````markdown
---
id: def-cauchy-in-metric
kind: definition
title: "Cauchy sequence in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-convergence, def-sequence, def-real-limit,
       lem-rat-embeds-dense, lem-metric-nonnegativity, lem-real-line-is-a-metric-space,
       lem-index-map-grows]
justified_by: []
aliases: []
landmark: true
short: "Cauchy in a metric space"
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
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a
sequence in $X$, that is a function $\mathbb{N} \to X$ written $x_k := x(k)$
([[def-metric-convergence]], [[def-sequence]]). As everywhere in this library
$\mathbb{N}$ contains $0$, so a sequence is indexed from $0$.

$(x_k)$ is a **Cauchy sequence in $(X,d)$** if for every rational
$\varepsilon > 0$ there is $K \in \mathbb{N}$ such that

$$d(x_m, x_n) < \varepsilon \qquad \text{for all } m, n \ge K .$$

**Rational and real $\varepsilon$ agree here.** The test is written with a
rational $\varepsilon$ to match [[def-real-limit]] and [[def-metric-convergence]],
and nothing is lost by using a real one: below any real $\eta > 0$ lies a
positive rational ([[lem-rat-embeds-dense]]), and the index belonging to that
rational serves for $\eta$. So a proof may establish Cauchyness by producing an
index for every real $\varepsilon > 0$, and may use a Cauchy hypothesis at a real
$\varepsilon$ by first passing to a rational below it. Both moves are used on
this page and are always cited.

**The condition is exactly $d(x_m,x_n) \to 0$ as $m$ and $n$ grow
independently.** The distances $d(x_m,x_n)$ are nonnegative reals
([[lem-metric-nonnegativity]]), and the displayed condition asks them to be
uniformly small on a tail of the doubly indexed family. It is not the same as
$d(x_{k+1}, x_k) \to 0$, which is a strictly weaker condition and is a standing
source of error. The partial sums $H_n$ of the harmonic series separate the two:
consecutive ones differ by $1/(n+1)$, which tends to $0$, while the sequence is
unbounded, and an unbounded sequence of reals is not Cauchy
([[lem-metric-cauchy-bounded]]).

**Consistency with the real line.** For $X = \mathbb{R}$ with the usual metric
$d(x,y) = |x-y|$ ([[lem-real-line-is-a-metric-space]]) the condition above reads
$|x_m - x_n| < \varepsilon$ for $m,n \ge K$, which is verbatim the definition of a
Cauchy sequence of reals ([[def-real-limit]]). So the notion introduced here
restricts on $\mathbb{R}$ to the one already in use, and no ambiguity is created.

## Remarks

- **A Cauchy sequence need not converge.** The definition mentions no candidate
  limit, and that is the whole point of it: it is a condition on the sequence
  alone, testable without knowing where the sequence is going. Whether every
  Cauchy sequence converges is a property of the space, namely completeness
  ([[def-complete-metric-space]]), and it genuinely fails in some spaces
  ([[fs-cauchy-implies-convergent-in-every-metric-space]]).
- **Cauchyness is a property of the metric, not of the topology.** Two metrics
  on the same set may have exactly the same open sets and different Cauchy
  sequences ([[fs-equivalent-metrics-share-cauchy-sequences]]). What does
  preserve Cauchy sequences is uniform equivalence
  ([[def-equivalent-metrics]]), and the reason is
  [[thm-uniform-continuity-preserves-cauchy]].
- **Every subsequence of a Cauchy sequence is Cauchy**, since a strictly
  increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]]), so the
  same $K$ works for the subsequence. Conversely a Cauchy sequence with one
  convergent subsequence already converges
  ([[lem-metric-cauchy-with-convergent-subsequence]]).
````

### `def-complete-metric-space`

````markdown
---
id: def-complete-metric-space
kind: definition
title: "Complete metric space: every Cauchy sequence converges in the space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cauchy-in-metric, def-metric-convergence, def-metric-space,
       lem-metric-limits-unique, def-isometry-and-metric-embedding,
       def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "complete metric space"
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
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

$(X,d)$ is **complete** if every Cauchy sequence in $(X,d)$
([[def-cauchy-in-metric]]) converges to a point of $X$
([[def-metric-convergence]]).

A subset $A \subseteq X$ is called **complete** when the metric subspace
$(A, d_A)$ is complete ([[def-isometry-and-metric-embedding]]); as always, the
metric is part of the data, and $d_A$ is the restriction of $d$ to $A \times A$.

**The limit is unique when it exists**, since limits in a metric space are unique
([[lem-metric-limits-unique]]), so a complete space assigns to each of its Cauchy
sequences one point and not a set of points.

**Completeness is a property of the pair $(X,d)$, not of $X$ and not of the
topology of $d$.** Both quantifiers in the definition are about the metric: the
Cauchy condition is stated with distances, and so is convergence. Two metrics on
the same set can have the same open sets while exactly one of them is complete,
which is the content of [[fs-completeness-is-a-topological-property]] and its
witness. Read the word *complete* as an abbreviation for *complete with respect
to this metric*, always.

## Remarks

- **Do not confuse this with Dedekind completeness.** The least-upper-bound
  property of [[def-complete-ordered-field]] is an order condition on an ordered
  field and is what defines $\mathbb{R}$; the condition here is a metric
  condition and makes sense in any metric space, with no order in sight. On
  $\mathbb{R}$ the first implies the second ([[thm-cauchy-criterion-via-lub]],
  [[thm-euclidean-space-complete]]) and the two are not the same statement: the
  rationals with the usual metric are an ordered field that fails both, while
  there are complete metric spaces with no field structure at all.
- **Every convergent sequence is Cauchy** ([[lem-metric-convergent-implies-cauchy]]),
  so completeness is exactly the assertion that the two classes of sequences
  coincide. It is the converse inclusion that carries all the content.
- **Three sources of completeness are proved on this page.** The real line and
  $\mathbb{R}^n$ are complete ([[thm-euclidean-space-complete]]); a closed subset
  of a complete space is complete ([[thm-complete-subspace-iff-closed]]); and
  every metric space sits densely and isometrically inside a complete one
  ([[thm-metric-completion-exists]]).
````

### `def-continuous-real-functions-on-a-compact-metric-space`

````markdown
---
id: def-continuous-real-functions-on-a-compact-metric-space
kind: definition
title: "The space $C(K,\\mathbb{R})$ of continuous real-valued functions on a nonempty compact metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-space, def-metric-continuity, def-metric-compactness, lem-real-line-is-a-metric-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Definition

Let $(K,d)$ be a nonempty compact metric space
([[def-metric-compactness]]). Define

$$C(K,\mathbb{R}):=\{\,f\in\mathbb{R}^{K}:f:(K,d)\to(\mathbb{R},d_{\mathbb{R}})\text{ is continuous}\,\},$$

where $\mathbb{R}^{K}$ is the function space of [[def-function-space]] and
$d_{\mathbb{R}}(s,t)=|s-t|$ is the usual metric
([[lem-real-line-is-a-metric-space]], [[def-metric-continuity]]).

This definition introduces the set of continuous functions only. Boundedness
and the supremum metric are assertions to be proved, not clauses of the
definition.
````

### `def-metric-convergence`

````markdown
---
id: def-metric-convergence
kind: definition
title: "Convergence of a sequence in a metric space: $x_k \\to x$ iff $d(x_k, x) \\to 0$ in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-sequence, def-real-limit, def-subsequential-limit,
       lem-metric-nonnegativity, lem-rat-embeds-dense, def-natural-numbers,
       def-abs-value]
justified_by: []
aliases: [def-metric-limit]
landmark: true
short: "$x_k \\to x$ in $(X,d)$"
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
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A **sequence in $X$** is a function $x : \mathbb{N} \to X$, written $(x_k)$ with
$x_k := x(k)$. As everywhere in this library, $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and a sequence is indexed from $0$
([[def-sequence]]); an index range copied from a text that starts at $1$ must be
shifted before it is used here.

Let $(x_k)$ be a sequence in $X$ and $p \in X$. The function
$k \mapsto d(x_k, p)$ is a sequence of reals ([[def-sequence]]), and it is
nonnegative ([[lem-metric-nonnegativity]]), so $|d(x_k,p)| = d(x_k,p)$
([[def-abs-value]]). Define

$$x_k \longrightarrow p \text{ in } (X,d) \quad :\Longleftrightarrow \quad d(x_k,p) \longrightarrow 0 \text{ in } \mathbb{R},$$

the convergence on the right being that of [[def-real-limit]]. Unwound, this
says: for every **rational** $\varepsilon > 0$ there is $K \in \mathbb{N}$ with
$d(x_k, p) < \varepsilon$ for every $k \ge K$. We then call $p$ a **limit** of
$(x_k)$, and say $(x_k)$ **converges** in $(X,d)$ if it has a limit.

**Rational and real $\varepsilon$ agree here, as they do on the real line.**
[[def-real-limit]] tests convergence against rational $\varepsilon$ only, and its
own remark, restated for sequences in [[def-sequence]], records that nothing is
lost: below any real $\eta > 0$ lies a positive rational
([[lem-rat-embeds-dense]]), and the index belonging to that rational serves for
$\eta$. So a proof may establish convergence by producing an index for every
real $\varepsilon > 0$, and may use a convergence hypothesis at a real
$\varepsilon$ by first passing to a rational below it. Both moves are used on
this page and are always cited.

**Subsequences and subsequential limits.** A **subsequence** of $(x_k)$ is the
composite $x \circ n$ for a strictly increasing $n : \mathbb{N} \to \mathbb{N}$,
written $(x_{n_j})$, exactly as for sequences of reals ([[def-sequence]]); and
$p$ is a **subsequential limit** of $(x_k)$ in $(X,d)$ when some subsequence
converges to $p$, which is the metric-space form of [[def-subsequential-limit]].

## Remarks

- **A limit is a point of $X$, and uniqueness is a theorem.** Nothing in the
  definition rules out two limits; that a sequence in a metric space has at most
  one is [[lem-metric-limits-unique]], and its proof is where the separation
  axiom (M1) is spent. Reading the same definition with a pseudometric
  ([[def-metric-space]]) that is not a metric, that is one with $p(a,b) = 0$ for
  some $a \ne b$, limits are genuinely not unique: the constant sequence at $a$
  converges to $b$ as well.
- **Convergence is defined from the metric but determined by the topology.**
  It can be restated as "every open set containing $p$ contains $x_k$ for all
  large $k$", which follows from [[lem-metric-ball-neighbourhood-base]]; so it is
  unchanged by passing to a topologically equivalent metric
  ([[def-equivalent-metrics]]). That restatement is not made part of the
  definition, because the metric form is what every proof on this page uses.
- **The relation between convergence and closure** is
  [[thm-metric-sequential-closure]]: a point lies in the closure of $A$ exactly
  when some sequence in $A$ converges to it.
````

### `lem-sup-metric-is-a-metric`

````markdown
---
id: lem-sup-metric-is-a-metric
kind: lemma
title: "The supremum metric $d_\\infty(f,g) = \\sup_x |f(x) - g(x)|$ is a metric on the bounded real-valued functions on a nonempty set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-bounded-set, lem-sup-unique, def-complete-ordered-field,
       lem-of-triangle-inequality, lem-of-abs-value, def-abs-value,
       lem-finite-set-has-max, def-max-min, lem-of-add-order, def-ordered-field,
       rem-sup-conventions]
forward_refs: [def-pointwise-uniform-and-uniformly-cauchy-convergence,
               rem-uniform-convergence-agrees-with-the-later-uniform-topology]
justified_by: []
aliases: [def-sup-metric]
landmark: true
short: "sup metric on $\\mathcal{B}(S)$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Uniform norm (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_norm"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 7"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $S$ be a nonempty set. Call a function $f : S \to \mathbb{R}$ **bounded** when
its range $f[S] = \{f(s) : s \in S\}$ is a bounded subset of $\mathbb{R}$
([[def-bounded-set]]), and write

$$\mathcal{B}(S) := \{\, f : f \text{ is a bounded function } S \to \mathbb{R} \,\}.$$

For $f, g \in \mathcal{B}(S)$ put $D(f,g) := \{\, |f(s) - g(s)| : s \in S \,\}$ and

$$d_\infty(f,g) := \sup D(f,g).$$

This is well defined: $D(f,g)$ is nonempty because $S$ is, and it is bounded
above (step 1.1 below), so its least upper bound exists
([[def-complete-ordered-field]]) and is unique ([[lem-sup-unique]]).

**Then $d_\infty$ is a metric on $\mathcal{B}(S)$** ([[def-metric-space]]), the
**supremum metric** (also called the uniform metric).

The hypotheses ensure that the formula is a finite real-valued metric for every
pair in the stated function space. Boundedness of $f$ and $g$ makes $D(f,g)$
bounded above, and nonemptiness of $S$ makes it nonempty. Some unbounded pairs
can still have a finite supremum, but allowing all real-valued functions would
not give a finite-valued metric: for example, on $S=\mathbb{R}$ the functions
$f(s)=s$ and $g(s)=0$ make $D(f,g)$ unbounded above
([[rem-sup-conventions]]).

## Facts & Assumptions

**Given:** A nonempty set $S$ and bounded functions $f, g, h \in \mathcal{B}(S)$, with $\ell_f \le f(s) \le u_f$, $\ell_g \le g(s) \le u_g$ and $\ell_h \le h(s) \le u_h$ for all $s \in S$; a fixed $s_0 \in S$.

[L1] Bounded subset of $\mathbb{R}$: $T$ is bounded when there are $\ell, u \in \mathbb{R}$ with $\ell \le t \le u$ for every $t \in T$ ([[def-bounded-set]]).

[L2] Least-upper-bound property: a nonempty subset of $\mathbb{R}$ that is bounded above has a least upper bound, that is an upper bound below every upper bound; it is unique ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L3] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and $|u|$ equals $u$ or $-u$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L4] Two-term triangle inequality: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L5] A two-element subset of $\mathbb{R}$ has a maximum, which is one of the two elements and bounds both ([[lem-finite-set-has-max]], [[def-max-min]]).

[L6] Order arithmetic: inequalities may be added and a constant added to both sides, in the strict form of [[lem-of-add-order]] and, together with the case of equality settled by totality ([[def-ordered-field]], [[def-complete-ordered-field]]), in the nonstrict form used below; and by trichotomy $a \le 0$ together with $a \ge 0$ gives $a = 0$.

## Proof

**Proof technique:** direct.

1.1 For every $s \in S$ the value $|f(s) - g(s)|$ is $f(s) - g(s)$ or $g(s) - f(s)$, and $f(s) - g(s) \le u_f - \ell_g$ while $g(s) - f(s) \le u_g - \ell_f$; so $M := \max\{u_f - \ell_g,\ u_g - \ell_f\}$ bounds $D(f,g)$ above, and since $s_0 \in S$ makes $D(f,g)$ nonempty, $d_\infty(f,g) = \sup D(f,g)$ exists and is unique. [given, L1, L2, L3, L5, L6]

1.2 Symmetry (M2): $|g(s) - f(s)| = |-(f(s) - g(s))| = |f(s) - g(s)|$ for every $s \in S$, so $D(g,f)$ and $D(f,g)$ are the same subset of $\mathbb{R}$ and therefore have the same supremum. [L2, L3]

2.1 Separation (M1): $d_\infty(f,g)$ bounds $D(f,g)$ above, so $d_\infty(f,g) \ge |f(s_0) - g(s_0)| \ge 0$; if $d_\infty(f,g) = 0$ then $|f(s) - g(s)| \le 0$ and $|f(s) - g(s)| \ge 0$ for every $s$, hence $f(s) = g(s)$ for every $s$ and $f = g$; conversely if $f = g$ then $D(f,g) = \{0\}$, whose least upper bound is $0$. [step 1.1, L2, L3, L6]

2.2 For every $s \in S$: $|f(s) - h(s)| = |(f(s) - g(s)) + (g(s) - h(s))| \le |f(s) - g(s)| + |g(s) - h(s)| \le d_\infty(f,g) + d_\infty(g,h)$, the last inequality because each supremum bounds its own set above. [step 1.1, L2, L4, L6]

3.1 Triangle inequality (M3): step 2.2 says the real number $d_\infty(f,g) + d_\infty(g,h)$ is an upper bound of $D(f,h)$, and $d_\infty(f,h)$ is the least upper bound of that set, so $d_\infty(f,h) \le d_\infty(f,g) + d_\infty(g,h)$. [step 2.2, L2]

4.1 The function $d_\infty$ therefore satisfies (M1) by step 2.1, (M2) by step 1.2 and (M3) by step 3.1, so it is a metric on $\mathcal{B}(S)$. [step 1.2, step 2.1, step 3.1] ∎

## Remarks

- **Why the bounded functions and not all functions.** For unbounded $f$ the set $D(f,g)$ need not be bounded above and $\sup D(f,g)$ then does not exist, so $d_\infty$ would not be a function into $\mathbb{R}$ at all. Texts that write $d_\infty(f,g) = +\infty$ in that case are working in the extended real line, which is introduced on a later page. The suprema taken here are real numbers, and the extended real line is not used for them ([[rem-sup-conventions]], [[rem-metric-axiom-conventions]]).
- **The supremum need not be attained**, so $d_\infty(f,g)$ is genuinely a supremum and not a maximum; the companion page carries a witness.
- **The name "uniform metric" points at later material.** The quantified definition of uniform convergence of functions appears in [[def-pointwise-uniform-and-uniformly-cauchy-convergence]]. The later [[rem-uniform-convergence-agrees-with-the-later-uniform-topology]] records its agreement with convergence in $d_\infty$; this lemma proves only that $d_\infty$ is a metric on the stated bounded-function space.
````

### `thm-extreme-value-metric`

````markdown
---
id: thm-extreme-value-metric
kind: theorem
title: "A continuous real-valued function on a nonempty compact metric space is bounded and attains a greatest and a least value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded, lem-compactness-is-intrinsic, lem-real-line-is-a-metric-space, def-metric-continuity, def-metric-compactness, def-bounded-set, def-infimum, lem-sup-epsilon, lem-inf-epsilon, def-max-min, def-complete-ordered-field, thm-metric-closure-characterisation, def-metric-interior-closure-boundary, def-metric-topology, def-metric-ball, def-interval, def-metric-bounded-diameter, def-isometry-and-metric-embedding, def-metric-space]
justified_by: []
forward_refs: [cex-evt-fails-without-compactness]
aliases: [thm-evt-metric]
landmark: true
short: "extreme value theorem (metric)"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a nonempty compact metric space ([[def-metric-compactness]],
[[def-metric-space]]) and let $f : X \to \mathbb{R}$ be continuous
([[def-metric-continuity]]), $\mathbb{R}$ carrying its usual metric
$d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]). Then the
image $f[X]$ is bounded above and below ([[def-bounded-set]]), and it has a
maximum and a minimum ([[def-max-min]]): there are points
$x_{\max}, x_{\min} \in X$ with

$$f(x_{\min}) \;\le\; f(x) \;\le\; f(x_{\max}) \qquad \text{for every } x \in X,$$

and then $f(x_{\max}) = \sup f[X]$ and $f(x_{\min}) = \inf f[X]$
([[def-complete-ordered-field]], [[def-infimum]]).

Nonemptiness of $X$ is a hypothesis and not an oversight: for $X = \emptyset$ the
image is empty and has neither a supremum nor a maximum. No choice principle is
used.

## Facts & Assumptions

**Given:** A nonempty compact metric space $(X,d)$ and a continuous $f : X \to \mathbb{R}$.

[L1] The image of a compact metric space under a continuous map is a compact subset of the codomain ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[L2] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]], [[lem-compactness-is-intrinsic]], [[def-metric-bounded-diameter]]).

[L3] In $(\mathbb{R}, d_{\mathbb{R}})$ the ball $B(x_0,\rho)$ is the interval $(x_0-\rho, x_0+\rho)$ ([[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-interval]]).

[L4] A nonempty subset of $\mathbb{R}$ that is bounded above has a supremum, and one bounded below has an infimum ([[def-complete-ordered-field]], [[def-infimum]], [[def-bounded-set]]).

[L5] For $S$ nonempty and bounded above with supremum $u$: for every real $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s \le u$; dually for the infimum ([[lem-sup-epsilon]], [[lem-inf-epsilon]]).

[L6] $x$ lies in the closure of $S$ exactly when every ball around $x$ meets $S$, and a closed set contains its closure ([[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]], [[def-metric-topology]]).

[L7] A subset of a metric space is compact exactly when the corresponding metric subspace is compact, the subspace metric being the restriction ([[def-metric-compactness]], [[def-isometry-and-metric-embedding]]).

## Proof

**Proof technique:** direct.

1.1 $f[X]$ is a compact subset of $(\mathbb{R}, d_{\mathbb{R}})$, and it is nonempty because $X$ is. [L1, L7]

2.1 So $f[X]$ is closed in $\mathbb{R}$ and bounded as a subset of the metric space $(\mathbb{R},d_{\mathbb{R}})$: there are $x_0 \in \mathbb{R}$ and a real $\rho > 0$ with $f[X] \subseteq B(x_0,\rho) = (x_0-\rho,\ x_0+\rho)$. [L2, L3, step 1.1]

3.1 Hence $x_0 + \rho$ is an upper bound and $x_0 - \rho$ a lower bound of $f[X]$, so $f[X]$ is bounded above and below, and being nonempty it has a supremum $u$ and an infimum $\ell$. [L4, step 2.1]

4.1 For every real $\varepsilon > 0$ there is $t \in f[X]$ with $u - \varepsilon < t \le u$, so $|t - u| < \varepsilon$ and $t \in B(u,\varepsilon) \cap f[X]$; therefore every ball around $u$ meets $f[X]$ and $u$ lies in the closure of $f[X]$. [L3, L5, L6, step 3.1]

5.1 Since $f[X]$ is closed, $u \in f[X]$; so $u$ is a member of $f[X]$ bounding it above, that is $u = \max f[X]$, and $u = f(x_{\max})$ for some $x_{\max} \in X$. [L6, step 2.1, step 4.1]

6.1 The same argument with $\ell$ in place of $u$, using the infimum form of step 4.1, gives $\ell \in f[X]$, so $\ell = \min f[X]$ and $\ell = f(x_{\min})$ for some $x_{\min} \in X$. [L5, L6, step 3.1, step 5.1]

7.1 For every $x \in X$ the value $f(x)$ lies in $f[X]$, hence $f(x_{\min}) = \ell \le f(x) \le u = f(x_{\max})$, which is the assertion, with $f(x_{\max}) = \sup f[X]$ and $f(x_{\min}) = \inf f[X]$. [L4, step 3.1, step 5.1, step 6.1] ∎

## Remarks

**Compactness is what is used, not boundedness of the domain.** A bounded non-compact domain is not enough: on the interval $(0,1)$ the identity map is continuous and bounded with no greatest value, and $x \mapsto 1/x$ is continuous and unbounded ([[cex-evt-fails-without-compactness]]).

**Why the supremum has to be shown to be attained at all.** $\sup f[X]$ exists as soon as $f[X]$ is nonempty and bounded above, which needs only boundedness; what compactness adds is that $f[X]$ is closed, and a closed set contains the supremum it approaches. Steps 4.1 and 5.1 are exactly that passage, and they are where the theorem is more than the least-upper-bound property.
````

### `thm-uniform-cauchy-criterion-real-functions`

````markdown
---
id: thm-uniform-cauchy-criterion-real-functions
kind: theorem
title: "A sequence of real-valued functions converges uniformly if and only if it is uniformly Cauchy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, thm-cauchy-criterion-via-lub, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stanford Math 63CM, Additional Lecture Notes, Theorem 1.12"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF63CM-20/lecture-notes-63cm-20-prelim.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $f_k:X\to\mathbb{R}$ for every
$k\in\mathbb{N}$. Then $(f_k)$ converges uniformly on $X$ to some
$f:X\to\mathbb{R}$ if and only if $(f_k)$ is uniformly Cauchy on $X$
([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Facts & Assumptions

**Given:** A set $X$ and a sequence of functions $f_k:X\to\mathbb{R}$.

[A1] Uniform convergence to $f$ means that for every real $\varepsilon>0$ there is $N$ such that $|f_k(x)-f(x)|<\varepsilon$ for every $k\ge N$ and every $x\in X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[A2] Uniform Cauchyness means that for every real $\varepsilon>0$ there is $N$ such that $|f_m(x)-f_n(x)|<\varepsilon$ for every $m,n\ge N$ and every $x\in X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[A3] Pointwise convergence as defined through real sequences can equivalently be tested with every positive real error ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[L1] For reals $u,v$, $|u+v|\le |u|+|v|$ ([[lem-of-triangle-inequality]]).

[L2] Every Cauchy sequence of reals converges to a real ([[thm-cauchy-criterion-via-lub]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $f_k\to f$ uniformly on $X$, and let $\varepsilon>0$ be real. By [A1] choose $N$ with $|f_j(x)-f(x)|<\varepsilon/2$ for every $j\ge N$ and $x\in X$. Thus, for $m,n\ge N$ and $x\in X$, $|f_m(x)-f_n(x)|\le |f_m(x)-f(x)|+|f(x)-f_n(x)|<\varepsilon$. Since $\varepsilon$ was arbitrary, $(f_k)$ is uniformly Cauchy. [A1, A2, L1, choose, algebra]

1.2 Conversely, suppose that $(f_k)$ is uniformly Cauchy on $X$. For each $x\in X$, [A2] makes $(f_k(x))$ a Cauchy real sequence; by [L2] it has a real limit $f(x)$. These values define a function $f:X\to\mathbb{R}$. [A2, L2, construct]

1.3 Under this converse assumption, let $\varepsilon>0$ be real and choose $N$ such that $|f_m(x)-f_n(x)|<\varepsilon/2$ for every $m,n\ge N$ and every $x\in X$. [A2, choose]

2.1 Fix $k\ge N$ and $x\in X$. Pointwise convergence at $x$ gives a threshold $M$ such that $|f_n(x)-f(x)|<\varepsilon/2$ for $n\ge M$. Choose $n\ge N,M$. Then $|f_k(x)-f(x)|\le |f_k(x)-f_n(x)|+|f_n(x)-f(x)|<\varepsilon$. [step 1.2, step 1.3, A3, L1, choose]

3.1 The index $N$ in step 1.3 is independent of $k$ and $x$, so step 2.1 proves $f_k\to f$ uniformly. Together with step 1.1 this proves both directions. [step 1.1, step 2.1, A1] ∎
````

### `thm-uniform-limit-continuous-real-functions`

````markdown
---
id: thm-uniform-limit-continuous-real-functions
kind: theorem
title: "The uniform limit of continuous real-valued functions on a metric space is continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-metric-continuity, lem-real-line-is-a-metric-space, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stanford Math 63CM, Additional Lecture Notes, Theorem 1.16"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF63CM-20/lecture-notes-63cm-20-prelim.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space and let $f_k:X\to\mathbb{R}$ be continuous for
every $k\in\mathbb{N}$, where $\mathbb{R}$ has its usual metric
$d_{\mathbb{R}}(s,t)=|s-t|$. If $f_k\to f$ uniformly on $X$, then
$f:X\to\mathbb{R}$ is continuous.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, continuous functions $f_k:X\to\mathbb{R}$, and uniform convergence $f_k\to f$.

[A1] Uniform convergence gives, for every real $\eta>0$, one index $N$ such that $|f_k(x)-f(x)|<\eta$ for every $k\ge N$ and every $x\in X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[A2] Continuity of $f_N$ at $a$ means that for every real $\eta>0$ there is $\delta>0$ such that $d(x,a)<\delta$ implies $|f_N(x)-f_N(a)|<\eta$ ([[def-metric-continuity]], [[lem-real-line-is-a-metric-space]]).

[L1] For reals $u,v$, $|u+v|\le|u|+|v|$ ([[lem-of-triangle-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in X$ and a real $\varepsilon>0$. By uniform convergence choose $N$ such that $|f_N(x)-f(x)|<\varepsilon/3$ for every $x\in X$. [A1, choose]

1.2 By continuity of $f_N$ at $a$, choose $\delta>0$ such that $d(x,a)<\delta$ implies $|f_N(x)-f_N(a)|<\varepsilon/3$. [A2, choose]

2.1 If $d(x,a)<\delta$, then $|f(x)-f(a)|\le |f(x)-f_N(x)|+|f_N(x)-f_N(a)|+|f_N(a)-f(a)|<\varepsilon$. [step 1.1, step 1.2, L1, algebra]

3.1 Thus $f$ is continuous at the arbitrary point $a$, and hence continuous on $X$. [step 2.1, A2] ∎
````


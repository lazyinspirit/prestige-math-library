## Wave 9 target — `lem-additive-bounded-above-on-an-interval-is-linear`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `8d42b88510e74c52172496d302a8eb60805ba8dbfd5d0e4a6ee014454424fbd2`

## Complete current target

````markdown
---
id: lem-additive-bounded-above-on-an-interval-is-linear
kind: lemma
title: "If an additive $f : \\mathbb{R} \\to \\mathbb{R}$ is bounded above on some nondegenerate interval, then $f(x) = f(1)\\,x$ for every real $x$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-additive-function, lem-additive-is-q-linear, def-interval, def-bounded-set, lem-rat-embeds-dense, cor-archimedean-reciprocal, thm-of-archimedean, def-complete-ordered-field, lem-of-abs-value, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
short: "bounded above on an interval implies linear"
proof_strategy: direct
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
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
    - title: "Additive operators approximately preserving Birkhoff-James orthogonality (Aequationes mathematicae)"
      url: "https://link.springer.com/article/10.1007/s00010-025-01210-4"
pipeline_run: null
---

## Statement

Let $f : \mathbb{R} \to \mathbb{R}$ be additive ([[def-additive-function]]) and
suppose there are reals $p < r$ and a real $M$ with $f(z) \le M$ for every
$z \in [p,r]$; that is, $f$ is bounded above on a nondegenerate interval
([[def-interval]], [[def-bounded-set]]). Then

$$f(x) \;=\; f(1)\,x \qquad \text{for every real } x .$$

**A nondegenerate interval is all that is needed, and its position is
irrelevant.** Any order-convex set with two distinct points contains a closed
$[p,r]$ with $p < r$, and the hypothesis is used only through that closed
interval; the argument then translates the interval along $\mathbb{Q}$ to cover
the whole line.

## Facts & Assumptions

**Given:** An additive $f : \mathbb{R} \to \mathbb{R}$, reals $p < r$, and a real $M$ with $f(z) \le M$ for every $z \in [p,r]$.

[A1] $f(x+y) = f(x) + f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[A2] $f(z) \le M$ for every $z$ with $p \le z \le r$, where $p < r$ ([[def-interval]], [[def-bounded-set]]).

[L1] An additive $f$ satisfies $f(0) = 0$, $f(-x) = -f(x)$, $f(qx) = qf(x)$ for every rational $q$ and every real $x$, and $f(\iota(n)x) = \iota(n)f(x)$ for every $n \in \mathbb{N}$ ([[lem-additive-is-q-linear]]).

[L2] Strictly between any two distinct reals there lies a rational ([[lem-rat-embeds-dense]]).

[L3] For every real $x$ there is a natural $n \ge 1$ with $x < \iota(n)$, and $\iota$ is positive and strictly increasing on the naturals $\ge 1$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L4] $\mathbb{R}$ is an ordered field: sums and products of positives are positive, and $u > 0$ with $v \ge u$ gives $v > 0$ ([[def-complete-ordered-field]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Put $c := f(1)$ and define $g : \mathbb{R} \to \mathbb{R}$ by $g(x) := f(x) - c\,x$. Then $g$ is additive, since both $f$ and $x \mapsto cx$ are, and $g(q) = f(q) - cq = qf(1) - cq = 0$ for every rational $q$. [A1, L1, construct]

2.1 $g$ is bounded above on $[p,r]$: for $z \in [p,r]$ one has $g(z) = f(z) - cz \le M + |c|\,K$, where $K := \max\{|p|, |r|\}$, because $|cz| \le |c|\,|z| \le |c|\,K$ and hence $-cz \le |c|\,K$. Write $M' := M + |c|\,K$ for this bound. [step 1.1, A2, L4]

2.2 $g(x + q) = g(x)$ for every real $x$ and every rational $q$: additivity gives $g(x+q) = g(x) + g(q)$ and $g(q) = 0$. [step 1.1]

2.3 $g$ is identically $0$. Suppose $g(x_{0}) \ne 0$ for some real $x_{0}$. Replacing $x_{0}$ by $-x_{0}$ if necessary, which changes the sign of $g(x_{0})$ since $g(-x) = -g(x)$, we may take $g(x_{0}) > 0$. [step 1.1, L1]

3.1 $g$ is bounded above by $M'$ on the whole of $\mathbb{R}$. Let $x$ be real. The two reals $x - r$ and $x - p$ satisfy $x - r < x - p$, so there is a rational $q$ with $x - r < q < x - p$; then $p < x - q < r$, so $x - q \in [p,r]$ and $g(x) = g((x-q) + q) = g(x-q) \le M'$. [step 2.1, step 2.2, L2]

4.1 With $x_{0}$ as in step 2.3, take a natural $n \ge 1$ with $M'/g(x_{0}) < \iota(n)$; then $\iota(n)\,g(x_{0}) > M'$. But $g(\iota(n)x_{0}) = \iota(n)\,g(x_{0}) > M'$, contradicting step 3.1. So no such $x_{0}$ exists and $g$ vanishes identically. [step 1.1, step 3.1, step 2.3, L1, L3, L4]

5.1 Therefore $f(x) = c\,x = f(1)\,x$ for every real $x$. [step 1.1, step 4.1] ∎

## Remarks

- **Only an upper bound is used, and only on one interval.** The proof never bounds $f$ below and never uses more than the single closed interval $[p,r]$; the translation invariance of step 2.2 and the sliding argument of step 3.1 do the rest. A lower bound on an interval gives the same conclusion by applying the lemma to $-f$, which is additive and bounded above there, and that is how [[thm-cauchy-functional-equation-regularity]] obtains five of its six clauses from this one lemma, the sixth being argued separately there.

- **Where the Archimedean property enters.** Once, in step 4.1, to make the multiples $\iota(n)g(x_{0})$ exceed the bound $M'$. Over a non-Archimedean ordered field the argument fails at exactly that point, and the statement is not asserted there.
````

## Current Wave 9 provenance determination

```json
{
  "id": "lem-additive-bounded-above-on-an-interval-is-linear",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://link.springer.com/article/10.1007/s00010-025-01210-4"
  ],
  "rationale": "The peer-reviewed source states exactly that an additive real function bounded above on a nondegenerate open interval is linear.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 9 proof contract

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-additive-function",
      "source_section": "Definition",
      "quote": "Let $\\mathbb{R}$ be the complete ordered field ([[def-complete-ordered-field]],\n[[def-ordered-field]], [[def-field]]). A function $f : \\mathbb{R} \\to \\mathbb{R}$\nis **additive** when it satisfies **Cauchy's functional equation**",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Length is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-additive-is-q-linear",
      "source_section": "Statement",
      "quote": "Let $f : \\mathbb{R} \\to \\mathbb{R}$ be additive ([[def-additive-function]]), and\nidentify $\\mathbb{N} \\subseteq \\mathbb{Z} \\subseteq \\mathbb{Q} \\subseteq\n\\mathbb{R}$ along the canonical embeddings ([[lem-nat-embeds-int]],\n[[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), writing $\\iota(n)$ for the\ncanonical natural of $n$ in $\\mathbb{R}$ ([[def-canonical-natural]]). Then, for\nevery real $x$:",
      "uses": [
        "1.1",
        "2.3",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "2.1",
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "lem-additive-bounded-above-on-an-interval-is-linear-step-1-1",
      "claim": "Put $c := f(1)$ and define $g : \\mathbb{R} \\to \\mathbb{R}$ by $g(x) := f(x) - c\\,x$. Then $g$ is additive, since both $f$ and $x \\mapsto cx$ are, and $g(q) = f(q) - cq = qf(1) - cq = 0$ for every rational $q$. [A1, L1, construct]",
      "step": "1.1",
      "inputs": [
        "A1",
        "L1"
      ]
    },
    {
      "id": "lem-additive-bounded-above-on-an-interval-is-linear-step-2-1",
      "claim": "$g$ is bounded above on $[p,r]$: for $z \\in [p,r]$ one has $g(z) = f(z) - cz \\le M + |c|\\,K$, where $K := \\max\\{|p|, |r|\\}$, because $|cz| \\le |c|\\,|z| \\le |c|\\,K$ and hence $-cz \\le |c|\\,K$. Write $M' := M + |c|\\,K$ for this bound. [step 1.1, A2, L4]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "A2",
        "L4"
      ]
    },
    {
      "id": "lem-additive-bounded-above-on-an-interval-is-linear-step-2-2",
      "claim": "$g(x + q) = g(x)$ for every real $x$ and every rational $q$: additivity gives $g(x+q) = g(x) + g(q)$ and $g(q) = 0$. [step 1.1]",
      "step": "2.2",
      "inputs": [
        "1.1"
      ]
    },
    {
      "id": "lem-additive-bounded-above-on-an-interval-is-linear-step-2-3",
      "claim": "$g$ is identically $0$. Suppose $g(x_{0}) \\ne 0$ for some real $x_{0}$. Replacing $x_{0}$ by $-x_{0}$ if necessary, which changes the sign of $g(x_{0})$ since $g(-x) = -g(x)$, we may take $g(x_{0}) > 0$. [step 1.1, L1]",
      "step": "2.3",
      "inputs": [
        "1.1",
        "L1"
      ]
    },
    {
      "id": "lem-additive-bounded-above-on-an-interval-is-linear-step-3-1",
      "claim": "$g$ is bounded above by $M'$ on the whole of $\\mathbb{R}$. Let $x$ be real. The two reals $x - r$ and $x - p$ satisfy $x - r < x - p$, so there is a rational $q$ with $x - r < q < x - p$; then $p < x - q < r$, so $x - q \\in [p,r]$ and $g(x) = g((x-q) + q) = g(x-q) \\le M'$. [step 2.1, step 2.2, L2]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "2.2",
        "L2"
      ]
    },
    {
      "id": "lem-additive-bounded-above-on-an-interval-is-linear-step-4-1",
      "claim": "With $x_{0}$ as in step 2.3, take a natural $n \\ge 1$ with $M'/g(x_{0}) < \\iota(n)$; then $\\iota(n)\\,g(x_{0}) > M'$. But $g(\\iota(n)x_{0}) = \\iota(n)\\,g(x_{0}) > M'$, contradicting step 3.1. So no such $x_{0}$ exists and $g$ vanishes identically. [step 1.1, step 3.1, step 2.3, L1, L3, L4]",
      "step": "4.1",
      "inputs": [
        "2.3",
        "3.1",
        "1.1",
        "L1",
        "L3",
        "L4"
      ]
    },
    {
      "id": "lem-additive-bounded-above-on-an-interval-is-linear-step-5-1",
      "claim": "Therefore $f(x) = c\\,x = f(1)\\,x$ for every real $x$. [step 1.1, step 4.1] ∎",
      "step": "5.1",
      "inputs": [
        "1.1",
        "4.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement forms no empty set, empty family, or empty finite sum whose value affects the claim."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "Zero is not a distinguished parameter or exceptional value in this statement."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: the unit or first-index boundary is included explicitly in the stated construction."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement: interval degeneracy is either excluded by a strict endpoint hypothesis or included by the stated weak endpoint convention."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.1: domain endpoints and any one-sided interpretation are kept within the stated relative-domain convention."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 3.1: each existential witness used here is supplied by the cited existence result or by the displayed formula/construction."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "lem-additive-bounded-above-on-an-interval-is-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-additive-function",
    "declared_target": "def-additive-function",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-additive-bounded-above-on-an-interval-is-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-additive-is-q-linear",
    "declared_target": "lem-additive-is-q-linear",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-additive-bounded-above-on-an-interval-is-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-additive-bounded-above-on-an-interval-is-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-additive-bounded-above-on-an-interval-is-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-rat-embeds-dense",
    "declared_target": "lem-rat-embeds-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-additive-bounded-above-on-an-interval-is-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "cor-archimedean-reciprocal",
    "declared_target": "cor-archimedean-reciprocal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-additive-bounded-above-on-an-interval-is-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-of-archimedean",
    "declared_target": "thm-of-archimedean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-additive-bounded-above-on-an-interval-is-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-additive-bounded-above-on-an-interval-is-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-additive-bounded-above-on-an-interval-is-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-additive-bounded-above-on-an-interval-is-linear",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (12)

### `cor-archimedean-reciprocal`

````markdown
---
id: cor-archimedean-reciprocal
kind: corollary
title: "For every $\\varepsilon > 0$ in a complete ordered field there is a natural $n \\ge 1$ with $1/n < \\varepsilon$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-of-archimedean, lem-of-inverse-positive, def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.20(a) and its corollaries)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4 (Prop. 5.4.12, the Archimedean property)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "UTSA Mathematics: The Archimedean property"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Real_Numbers%3AArchimedean_Property"
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let
$\varepsilon \in F$ with $\varepsilon > 0$. Then there is a natural number
$n \ge 1$ such that

$$\frac{1}{n \cdot 1_F} < \varepsilon ,$$

where $n \cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and
$1/(n \cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard
we abbreviate $n \cdot 1_F$ to $n$ and write the conclusion $1/n < \varepsilon$.

This is the **reciprocal form** of the Archimedean property.
[[thm-of-archimedean]] on its own delivers only the assertion that the canonical
naturals are cofinal, $x < n \cdot 1_F$; the form actually used in analysis, that
the reciprocals of the naturals get below every positive bound, is the statement
above, and it is recorded separately so that no proof has to reconstruct the
inversion step in passing.

## Facts & Assumptions

**Given:** A complete ordered field $F$ and an element $\varepsilon \in F$ with $\varepsilon > 0$.

[L1] Archimedean property: for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$ ([[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L2] Inverses and order: if $a > 0$ then $a^{-1} > 0$, and if $0 < a < b$ then $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L3] Field arithmetic: an element $a$ with $a > 0$ is nonzero by trichotomy, hence has a multiplicative inverse $a^{-1}$, and $(a^{-1})^{-1} = a$ ([[def-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $\varepsilon > 0$, trichotomy gives $\varepsilon \ne 0$, so $\varepsilon^{-1}$ exists, and $\varepsilon^{-1} > 0$. [given, L2, L3]

2.1 Apply [L1] to $x = \varepsilon^{-1}$: fix a natural number $n \ge 1$ with $\varepsilon^{-1} < n \cdot 1_F$. [step 1.1, L1, choose]

3.1 Chaining the two displayed inequalities gives $0 < \varepsilon^{-1} < n \cdot 1_F$; in particular $n \cdot 1_F > 0$, so $n \cdot 1_F \ne 0$ and $1/(n \cdot 1_F)$ is defined. [step 1.1, step 2.1, L3]

4.1 Apply the second claim of [L2] with $a = \varepsilon^{-1}$ and $b = n \cdot 1_F$: $0 < (n \cdot 1_F)^{-1} < (\varepsilon^{-1})^{-1}$. [step 3.1, L2]

5.1 By [L3], $(\varepsilon^{-1})^{-1} = \varepsilon$, so the natural number $n \ge 1$ fixed in step 2.1 satisfies $1/(n \cdot 1_F) < \varepsilon$, which is the assertion. [step 4.1, L3] ∎

## Remarks

- **Monotonicity gives the eventual form for free.** If $m \ge n \ge 1$ then
  $m \cdot 1_F \ge n \cdot 1_F > 0$, because $k \mapsto k \cdot 1_F$ is strictly
  increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]), and so
  $1/(m \cdot 1_F) \le 1/(n \cdot 1_F) < \varepsilon$ by [[lem-of-inverse-positive]]
  again. So the corollary yields not merely one index but a threshold: every
  $m \ge n$ satisfies $1/m < \varepsilon$. That one extra line is what a
  convergence proof needs, and it is left to the caller rather than folded into
  the statement, because the caller usually has a threshold of its own to combine
  it with.

- **Completeness is used only through [[thm-of-archimedean]].** Nothing here
  needs the least-upper-bound property directly. The corollary therefore holds
  verbatim in any Archimedean ordered field, in particular in $\mathbb{Q}$, and
  it fails in a non-Archimedean ordered field, where an infinitesimal
  $\varepsilon > 0$ is below every $1/n$ by construction.

- The equivalence is exact: the reciprocal form implies the cofinal form back
  again, since given $x > 0$ one applies it to $\varepsilon = 1/x$. The two are
  the same property written on the two sides of the inversion, and only the
  direction proved above is used in this library.
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

### `def-bounded-set`

````markdown
---
id: def-bounded-set
kind: definition
title: "Lower bound, bounded below, bounded set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Upper and lower bounds (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Upper_and_lower_bounds"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ denotes the complete ordered field
([[def-complete-ordered-field]]) and $S \subseteq \mathbb{R}$ is a subset of it.

The notions **upper bound** and **bounded above** are already fixed by
[[def-complete-ordered-field]] and are only recalled here, never redefined:
$u \in \mathbb{R}$ is an *upper bound* of $S$ if $s \le u$ for all $s \in S$, and
$S$ is *bounded above* if it has at least one upper bound. The dual notions are:

- $\ell \in \mathbb{R}$ is a **lower bound** of $S$ if $\ell \le s$ for all $s \in S$.
- $S$ is **bounded below** if it has at least one lower bound.
- $S$ is **bounded** if it is both bounded above and bounded below, that is, if
  there are $\ell, u \in \mathbb{R}$ with $\ell \le s \le u$ for every $s \in S$.

## Remarks

- A bound is an element of $\mathbb{R}$ and is not required to lie in $S$. A
  bound that does lie in $S$ is a maximum or a minimum ([[def-max-min]]), and
  that is a strictly stronger condition ([[fs-sup-belongs-to-set]]).
- Bounds come in half-lines: if $\ell$ is a lower bound of $S$ then so is every
  $\ell'' \le \ell$, and if $u$ is an upper bound then so is every $u'' \ge u$.
  Consequently a set that has one bound of a given kind has infinitely many, and
  the interesting question is whether the collection of them has a best element,
  which is what a supremum ([[def-complete-ordered-field]]) or an infimum
  ([[def-infimum]]) is.
- Bounded above and bounded below are independent conditions. The set
  $A = \{\, n \cdot 1_{\mathbb{R}} : n \ge 1 \,\}$ of canonical naturals of
  $\mathbb{R}$ is bounded below by $0$ ([[lem-of-naturals-positive]]) and is not
  bounded above ([[thm-of-archimedean]]); its reflection $-A$ is bounded above
  and not bounded below ([[lem-reflection]]).
- The empty set is bounded, and vacuously so: every real number is both an upper
  bound and a lower bound of $\emptyset$, since the defining condition quantifies
  over no elements. Having bounds is therefore much weaker than having a least
  upper bound or a greatest lower bound ([[fs-every-set-has-sup]]).
````

### `def-canonical-natural`

````markdown
---
id: def-canonical-natural
kind: definition
title: "The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-natural-numbers, thm-recursion]
justified_by: []
forward_refs: [def-metric-completion]
aliases: []
landmark: false
short: "$\\iota(n) = n \\cdot 1_F$"
verification:
  precheck: n/a
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## Remarks

- **Where the index shift comes from.** $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]) and $\iota(0) = 0_F$, so $1/\iota(k)$ is undefined at
  $k = 0$. A family of reciprocals indexed by $\mathbb{N}$ is therefore written
  over $\iota(k+1)$, which is why the harmonic and telescoping families of this
  library run over $k+1$ rather than over $k$. This is bookkeeping, not a
  restriction: the values are the usual ones.

- **This definition records notation; the arithmetic is proved elsewhere.** That
  $\iota$ is strictly increasing and positive on $n \ge 1$, and that it carries
  sums to sums and products to products, is [[lem-of-naturals-positive]], stated
  for an ordered field. That lemma introduces the same element by the equivalent
  recursion $1 \cdot 1_F = 1_F$, $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, which
  agrees with the definition above because $\iota(1) = \iota(0) + 1_F = 1_F$.
  Nothing here is new mathematics; the definition exists so that the notation has
  a home a reader can look up.

- **The symbol $\iota$ is used in this library for other canonical maps, and this
  definition does not govern them.** It also denotes the canonical field
  embedding $\iota : \mathbb{Q} \to F$ ([[lem-of-q-embeds]]), the isometric
  embedding of a metric space into a completion ([[def-metric-completion]]), and
  an inclusion map $\iota : S \to X$ of a subspace. Each of those is introduced
  where it is used and means something different from the map defined here. What
  the four share is only that each is the canonical map of its situation.

- **Fields, not just ordered fields.** The recursion needs no order, so the
  definition is stated for a field; every use in this library is in an ordered
  field, and the order is what makes $\iota$ injective
  ([[lem-of-naturals-positive]]). In a field of positive characteristic $\iota$
  is not injective, which is one reason the injectivity is a lemma rather than
  part of the definition.
````

### `def-complete-ordered-field`

````markdown
---
id: def-complete-ordered-field
kind: definition
title: "Complete ordered field (least-upper-bound property)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: [def-dedekind-complete-field]
landmark: true
short: "complete ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

## Remarks

- A least upper bound, if it exists, is unique (two least upper bounds are each
  $\le$ the other, so equal by antisymmetry of the order).
- Applying the property to $\{-s : s \in S\}$ yields the dual **greatest lower
  bound** (infimum) property, so the two are equivalent.
- The Dedekind-cut reals have this property by construction
  ([[thm-dedekind-complete]]); the Cauchy-sequence reals acquire it via
  [[cor-cauchy-reals-lub-complete]]. This definition is the target for the
  uniqueness theorem [[thm-uniqueness-complete-ordered-field]].
````

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
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
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
````

### `lem-additive-is-q-linear`

````markdown
---
id: lem-additive-is-q-linear
kind: lemma
title: "An additive $f : \\mathbb{R} \\to \\mathbb{R}$ satisfies $f(0) = 0$, $f(-x) = -f(x)$ and $f(qx) = q\\,f(x)$ for every rational $q$ and every real $x$; in particular $f(q) = q\\,f(1)$ at every rational $q$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-additive-function, thm-induction-principle, lem-rat-embeds-dense, lem-int-embeds-rat, lem-nat-embeds-int, def-canonical-natural, lem-integer-multiples-agree-with-canonical-natural, def-complete-ordered-field, def-integers, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
short: "additive implies $\\mathbb{Q}$-linear"
proof_strategy: induction
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
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
pipeline_run: null
---

## Statement

Let $f : \mathbb{R} \to \mathbb{R}$ be additive ([[def-additive-function]]), and
identify $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq
\mathbb{R}$ along the canonical embeddings ([[lem-nat-embeds-int]],
[[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), writing $\iota(n)$ for the
canonical natural of $n$ in $\mathbb{R}$ ([[def-canonical-natural]]). Then, for
every real $x$:

1. $f(0) = 0$;
2. $f(-x) = -f(x)$;
3. $f(\iota(n)\,x) = \iota(n)\,f(x)$ for every $n \in \mathbb{N}$;
4. $f(m x) = m\,f(x)$ for every integer $m$;
5. $f(q x) = q\,f(x)$ for every rational $q$.

In particular, taking $x = 1$ in claim 5, $f(q) = q\,f(1)$ at every rational $q$:
**an additive function is determined on $\mathbb{Q}$ by its value at $1$.**

**What this does not say.** Claim 5 is $\mathbb{Q}$-homogeneity, not
$\mathbb{R}$-homogeneity: nothing here gives $f(\lambda x) = \lambda f(x)$ for
irrational $\lambda$, and that is exactly the gap that
[[fs-additive-implies-linear]] shows cannot be closed without a regularity
hypothesis.

## Facts & Assumptions

**Given:** An additive $f : \mathbb{R} \to \mathbb{R}$, so $f(x+y) = f(x) + f(y)$ for all reals $x, y$.

[A1] $f(x + y) = f(x) + f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[L1] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] The canonical natural satisfies $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and it agrees with the additive multiple $n \cdot 1_{\mathbb{R}}$ ([[def-canonical-natural]], [[lem-integer-multiples-agree-with-canonical-natural]], [[lem-of-naturals-positive]]).

[L3] Every integer is $\iota(n)$ or $-\iota(n)$ for a natural $n$, and every rational is $m/\iota(n)$ with $m$ an integer and $n$ a natural $\ge 1$; the embeddings preserve sums and products, and $\iota(n) \ne 0$ for $n \ge 1$ ([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[def-integers]], [[lem-of-naturals-positive]]).

[L4] $\mathbb{R}$ is a field, so cancellation, distributivity and inverses of nonzero elements are available ([[def-complete-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Claim 1: taking $x = y = 0$ in the functional equation gives $f(0) = f(0) + f(0)$, and adding $-f(0)$ to both sides gives $f(0) = 0$. [A1, L4]

1.2 Claim 3, inductive hypothesis: suppose $f(\iota(n)x) = \iota(n)f(x)$ for a given $n \in \mathbb{N}$ and every real $x$. [ih]

2.1 Claim 2: taking $y = -x$ gives $0 = f(0) = f(x) + f(-x)$, so $f(-x) = -f(x)$. [step 1.1, A1, L4]

2.2 Claim 3, base case $n = 0$: $\iota(0) = 0$, so $f(\iota(0)x) = f(0) = 0 = \iota(0)f(x)$. [step 1.1, L2, base]

2.3 Claim 3, inductive step: $\iota(n+1)x = \iota(n)x + x$, so $f(\iota(n+1)x) = f(\iota(n)x) + f(x) = \iota(n)f(x) + f(x) = (\iota(n)+1)f(x) = \iota(n+1)f(x)$. [step 1.2, A1, L2, L4]

3.1 Claim 3 holds for every $n \in \mathbb{N}$ and every real $x$, by induction on $n$ from steps 2.2 and 2.3. [step 2.2, step 2.3, L1]

4.1 Claim 4: an integer $m$ is $\iota(n)$ or $-\iota(n)$ for some natural $n$. In the first case claim 3 applies directly. In the second, $f(mx) = f(-(\iota(n)x)) = -f(\iota(n)x) = -\iota(n)f(x) = m f(x)$. [step 2.1, step 3.1, L3]

5.1 Claim 5: let $q$ be rational and write $q = m/\iota(n)$ with $m$ an integer and $n$ a natural $\ge 1$, so $\iota(n) \ne 0$. Applying claim 4 with the integer $\iota(n)$ to the real $qx$ gives $\iota(n) f(qx) = f(\iota(n) q x) = f(mx) = m f(x)$, and dividing by $\iota(n)$ gives $f(qx) = (m/\iota(n)) f(x) = q f(x)$. [step 4.1, L3, L4]

6.1 Taking $x = 1$ in claim 5 gives $f(q) = q f(1)$ for every rational $q$, and all five claims are proved. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, discharge-induction] ∎

## Remarks

- **The induction is on $\mathbb{N}$ and everything else is algebra.** Only
  claim 3 needs induction; claims 4 and 5 are obtained from it by the two field
  operations, and claims 1 and 2 are two substitutions into the equation. The
  base case is $n = 0$, where $\iota(0) = 0$ and the identity reads $f(0) = 0$;
  it is a genuine case and not a convention, since $\mathbb{N}$ contains $0$.

- **This is the whole of the algebraic theory.** Every regularity theorem about
  Cauchy's equation ([[thm-cauchy-functional-equation-regularity]]) works by
  combining claim 5 with density of $\mathbb{Q}$ in $\mathbb{R}$: the value of
  $f$ is pinned on a dense set, and a regularity hypothesis is what forbids the
  values off that set from being arbitrary.
````

### `lem-of-abs-value`

````markdown
---
id: lem-of-abs-value
kind: lemma
title: "Basic properties of the absolute value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-abs-value, def-ordered-field, lem-of-mult-neg, lem-of-sign-rules]
aliases: []
landmark: false
short: "|x| properties"
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] Absolute value: $|u| = u$ if $u \ge 0$, and $|u| = -u$ if $u < 0$ ([[def-abs-value]]).

[L2] Ordered-field order: trichotomy holds (for each $u$ exactly one of $u > 0$, $u = 0$, $u < 0$), $a < b$ means $b - a$ is positive, and sums and products of positives are positive ([[def-ordered-field]]).

[L3] Signs in products: $(-a)b = -(ab)$ and $(-a)(-b) = ab$ ([[lem-of-mult-neg]]).

[L4] Sign rules: a product of two elements of the same sign is positive, and a product of two elements of opposite sign is negative ([[lem-of-sign-rules]]).

## Proof

**Proof technique:** cases.

1.1 Case $x > 0$: by [L1] $|x| = x > 0$, so $|x| \ge 0$ and $|x| \ne 0$; since $-x < 0$ we get $|-x| = -(-x) = x = |x|$ by [L1], and $-|x| = -x < 0 < x = |x|$, so $-|x| \le x \le |x|$. [assume-case pos, L1, L2, algebra]

1.2 Case $x = 0$: then $|x| = |0| = 0$, so $|x| \ge 0$ holds with $|x| = 0$ and $x = 0$, while $|-x| = |0| = |x|$ and $-|x| = 0 \le 0 \le 0 = |x|$. [assume-case zero, L1]

1.3 Case $x < 0$: by [L1] $|x| = -x$, and [L2] gives $-x > 0$, so $|x| > 0$ and $|x| \ne 0$; here $|-x| = -x = |x|$ by [L1], and $-|x| = -(-x) = x \le x$ while $x < 0 < -x = |x|$, so $-|x| \le x \le |x|$. [assume-case neg, L1, L2, algebra]

1.4 Case $x = 0$ or $y = 0$: then $xy = 0$, so $|xy| = 0$, and one of $|x|, |y|$ is $0$, whence $|x|\,|y| = 0 = |xy|$. [assume-case zerofactor, L1]

1.5 Case $x, y$ have the same sign (both positive or both negative): by [L4] $xy > 0$, so $|xy| = xy$, while $|x|\,|y| = xy$ by [L3] (for $x, y < 0$ this is $(-x)(-y) = xy$), hence $|xy| = |x|\,|y|$. [assume-case same, L1, L3, L4]

1.6 Case $x, y$ have opposite signs (one positive, one negative): by [L4] $xy < 0$, so $|xy| = -(xy)$, while $|x|\,|y| = -(xy)$ by [L3] (namely $x(-y)$ or $(-x)y$), hence $|xy| = |x|\,|y|$. [assume-case opposite, L1, L3, L4]

2.1 By trichotomy [L2] each $x$ lies in exactly one of the cases 1.1-1.3, and in each we verified $|x| \ge 0$, that $|x| = 0 \iff x = 0$, that $|-x| = |x|$, and that $-|x| \le x \le |x|$; hence all four hold for every $x$. [step 1.1, step 1.2, step 1.3, cases-exhaustive]

2.2 By trichotomy [L2] each pair $x, y$ lies in exactly one of the cases 1.4-1.6, and in each $|xy| = |x|\,|y|$; hence $|xy| = |x|\,|y|$ for all $x, y$. [step 1.4, step 1.5, step 1.6, cases-exhaustive]

3.1 Let $c > 0$: if $|x| < c$ then $-c < -|x| \le x \le |x| < c$ by [step 2.1] and [L2], so $-c < x < c$; conversely if $-c < x < c$ then both $x < c$ and $-x < c$, and since $|x|$ equals $x$ or $-x$ by [L1], we get $|x| < c$, so $|x| < c \iff -c < x < c$. [step 2.1, L1, L2] ∎
````

### `lem-of-naturals-positive`

````markdown
---
id: lem-of-naturals-positive
kind: lemma
title: "Canonical naturals are positive and strictly increasing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-of-one-positive, lem-of-add-order, def-field]
aliases: []
landmark: false
short: "n·1 > 0"
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

## Facts & Assumptions

**Given:** An ordered field $F$ whose canonical naturals are defined recursively by $1 \cdot 1_F = 1_F$ and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, with $0 \cdot 1_F = 0$.

[L1] $0 < 1_F$ in every ordered field ([[cor-of-one-positive]]).

[L2] The order is compatible with addition and positives are closed under addition: $a < b$ implies $a + c < b + c$, and $a > 0$, $b > 0$ imply $a + b > 0$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 1$: by definition $1 \cdot 1_F = 1_F$, and $1_F > 0$. [L1, base]

1.2 Inductive hypothesis: assume $n \cdot 1_F > 0$ for some fixed $n \ge 1$. [ih]

1.3 By the recursion, $(n+1) \cdot 1_F - n \cdot 1_F = 1_F > 0$, so $(n+1) \cdot 1_F > n \cdot 1_F$. [given, L1]

1.4 Additive identity: fix $m$ and induct on $n$; at $n = 1$, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F$ by the recursion, and if $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ then $(m+n+1) \cdot 1_F = (m+n) \cdot 1_F + 1_F = m \cdot 1_F + n \cdot 1_F + 1_F = m \cdot 1_F + (n+1) \cdot 1_F$. [given, algebra]

2.1 Inductive step: $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$ is a sum of two positives, by the hypothesis and $1_F > 0$, hence $(n+1) \cdot 1_F > 0$. [step 1.2, L1, L2]

2.2 Iterating 1.3, for $m < n$ one has $m \cdot 1_F < n \cdot 1_F$, so $n \mapsto n \cdot 1_F$ is strictly increasing and therefore injective on $\{1, 2, 3, \dots\}$. [step 1.3, L2]

2.3 Multiplicative identity: fix $m$ and induct on $n$; at $n = 1$, $(m \cdot 1) \cdot 1_F = m \cdot 1_F = (m \cdot 1_F)(1 \cdot 1_F)$, and the step $(m(n+1)) \cdot 1_F = (mn + m) \cdot 1_F = (mn) \cdot 1_F + m \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F) + (m \cdot 1_F)(1_F) = (m \cdot 1_F)((n+1) \cdot 1_F)$ uses 1.4 and distributivity. [step 1.4, algebra]

3.1 By induction on 1.1, 1.2, 2.1, $n \cdot 1_F > 0$ for every $n \ge 1$; with the strict increase 2.2 and the identities 1.4, 2.3, every claim holds. [step 2.1, step 2.2, step 1.4, step 2.3, discharge-induction] ∎
````

### `lem-rat-embeds-dense`

````markdown
---
id: lem-rat-embeds-dense
kind: lemma
title: "The rationals embed densely in the reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-numbers, def-real-order, thm-reals-ordered-field, thm-reals-field, def-rational-cauchy-sequence, thm-rat-ordered-field, thm-rat-field]
aliases: []
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
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
pipeline_run: null
---

## Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

## Facts & Assumptions

**Given:** A real $x = [(a_n)]$ and a rational $\varepsilon > 0$.

[L1] The orders of $\mathbb{Q}$ and $\mathbb{R}$; ordered-field arithmetic ([[thm-rat-ordered-field]], [[thm-reals-ordered-field]]).

[L2] Field arithmetic in $\mathbb{Q}$: $\varepsilon/2, \delta/4$ are positive rationals, and every nonzero rational $q$ has a reciprocal $1/q$ with $q \cdot (1/q) = 1$ ([[thm-rat-field]]).

[L3] Cauchy definition ([[def-rational-cauchy-sequence]]).

[L4] Real positivity via eventual rational lower bounds ([[def-real-order]]).

[L5] $\mathbb{R} = \mathcal{C}/\mathcal{N}$ is a field ([[thm-reals-field]]), and $0_{\mathbb{R}} = \hat 0$, $1_{\mathbb{R}} = \hat 1$ are the classes of the constant sequences ([[def-real-numbers]]). A multiplicative inverse there is unique: if $ab = 1_{\mathbb{R}} = ac$ then $b = b(ac) = (ba)c = c$.

## Proof

**Proof technique:** direct.

1.1 Embedding: constant sequences are Cauchy; $\hat q = \hat r$ iff the constant $q - r$ is null iff $q = r$; operations match termwise; and $q < r$ gives the constant lower bound $r - q > 0$, so $\hat q < \hat r$ and order is preserved and reflected. [L1, L4]

1.2 Fix $N$ with $|a_m - a_n| < \varepsilon/2$ for all $m, n \ge N$, and set $q = a_N$. [L3, L2]

2.1 The difference $\hat q - x$ has representative $(a_N - a_n)$ with $|a_N - a_n| < \varepsilon/2$ for $n \ge N$; hence both $\hat\varepsilon - (x - \hat q)$ and $\hat\varepsilon - (\hat q - x)$ have representatives eventually $> \varepsilon/2$, so both are positive: $|x - \hat q| < \hat\varepsilon$. [step 1.2, L4, L1]

2.2 Inverses: let $q$ be a nonzero rational. Then $\hat q \ne \hat 0 = 0_{\mathbb{R}}$ by the injectivity of step 1.1, and $1/q$ exists in $\mathbb{Q}$ by [L2]; since the operations match termwise (step 1.1), $\hat q \cdot \widehat{1/q} = \widehat{q \cdot (1/q)} = \hat 1 = 1_{\mathbb{R}}$. Inverses in $\mathbb{R}$ are unique by [L5], so $(\hat q)^{-1} = \widehat{1/q}$: the embedding preserves reciprocals. [step 1.1, L2, L5]

3.1 Density: let $x < y$; pick $\delta > 0$ rational and $N$ with the representative of $y - x$ eventually $> \delta$; set $\varepsilon = \delta/4$ and pick $q$ with $|x - \hat q| < \hat\varepsilon$; then $q' = q + 2\varepsilon$ satisfies $\hat q' - x \ge -\hat\varepsilon + 2\hat\varepsilon = \hat\varepsilon > 0$ and $y - \hat q' \ge \hat\delta - \hat\varepsilon - 2\hat\varepsilon = \hat\delta/4 > 0$, so $x < \hat q' < y$. [step 2.1, L4, L1, L2]

4.1 The rationals embed as an ordered subfield — injectively, preserving the order in both directions, the ring operations, and reciprocals — and they approximate every real arbitrarily well and separate any two reals. [step 1.1, step 2.2, step 3.1] ∎
````

### `thm-cauchy-functional-equation-regularity`

````markdown
---
id: thm-cauchy-functional-equation-regularity
kind: theorem
title: "Six regularity conditions each force an additive $f : \\mathbb{R} \\to \\mathbb{R}$ to be $x \\mapsto f(1)x$: continuity at a single point, monotonicity on a nondegenerate interval, boundedness above on one, boundedness below on one, constancy of sign on one, and a graph that is not dense in $\\mathbb{R}^{2}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
  evidence: semantic-source
deps: [def-additive-function, lem-additive-is-q-linear, lem-additive-bounded-above-on-an-interval-is-linear, def-monotone-function, def-continuity-real, def-interval, def-bounded-set, lem-metrics-on-rn, def-metric-space, def-metric-ball, def-metric-interior-closure-boundary, thm-metric-closure-characterisation, lem-rat-embeds-dense, cor-archimedean-reciprocal, lem-of-abs-value, def-complete-ordered-field, def-neighbourhood-r]
justified_by: []
aliases: [thm-cauchy-equation-regularity]
landmark: true
short: "regularity forces linearity"
proof_strategy: cases
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
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
    - title: "Hamel basis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Additive operators approximately preserving Birkhoff-James orthogonality (Aequationes mathematicae)"
      url: "https://link.springer.com/article/10.1007/s00010-025-01210-4"
pipeline_run: null
---

## Statement

Let $f : \mathbb{R} \to \mathbb{R}$ be additive ([[def-additive-function]]) and
put $c := f(1)$. Write $\mathbb{R}^{2}$ for the set of functions
$2 \to \mathbb{R}$ with the metric
$d_\infty\bigl((a,b),(a',b')\bigr) = \max\{|a-a'|,\ |b-b'|\}$
([[lem-metrics-on-rn]], [[def-metric-space]]), and let

$$\Gamma \;:=\; \{\, (x, f(x)) \;:\; x \in \mathbb{R} \,\} \;\subseteq\; \mathbb{R}^{2}$$

be the graph of $f$. If **any one** of the following six conditions holds, then
$f(x) = c\,x$ for every real $x$.

1. $f$ is continuous at some single point of $\mathbb{R}$
   ([[def-continuity-real]]).
2. $f$ is monotone on some nondegenerate interval
   ([[def-monotone-function]], [[def-interval]]).
3. $f$ is bounded above on some nondegenerate interval ([[def-bounded-set]]).
4. $f$ is bounded below on some nondegenerate interval.
5. $f$ has constant sign on some nondegenerate interval $I$: either $f(z) \ge 0$
   for every $z \in I$, or $f(z) \le 0$ for every $z \in I$.
6. $\Gamma$ is **not** dense in $\mathbb{R}^{2}$
   ([[def-metric-interior-closure-boundary]]).

**Conditions 3, 4 and 5 are not independent, and the proof does not pretend they
are.** Condition 5 is the special case of 3 or of 4 with the bound $0$, and
condition 4 is condition 3 applied to $-f$; they are listed separately only
because each is the form in which the hypothesis usually arises. Condition 1 and
condition 2 are each reduced to condition 3 in one line. Condition 6 is the only
one that is not, and it is proved in the contrapositive: if $f$ is not of the
form $x \mapsto cx$, then $\Gamma$ is dense.

**Two classical clauses are absent.** *Boundedness on a set of positive measure*
and *Lebesgue measurability* also force linearity, and neither is stated here:
both require a measure, and this library develops none as it stands. Each is an
independent sufficient condition, so restoring them would change nothing else on
this page.

## Facts & Assumptions

**Given:** An additive $f : \mathbb{R} \to \mathbb{R}$ with $c := f(1)$, and its graph $\Gamma = \{(x,f(x)) : x \in \mathbb{R}\}$.

[A1] $f(x+y) = f(x)+f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[L1] An additive $f$ satisfies $f(0)=0$, $f(-x) = -f(x)$ and $f(qx) = qf(x)$ for every rational $q$ and every real $x$ ([[lem-additive-is-q-linear]]).

[L2] If an additive $g$ is bounded above on some $[p,r]$ with $p < r$, then $g(x) = g(1)x$ for every real $x$ ([[lem-additive-bounded-above-on-an-interval-is-linear]]).

[L3] A nondegenerate interval contains a closed $[p,r]$ with $p < r$, by order-convexity ([[def-interval]]).

[L4] $f$ continuous at $c_{0}$ means: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(c_{0})| < \varepsilon$ whenever $|x - c_{0}| < \delta$; and $|u| < \varepsilon$ gives $u < \varepsilon$ ([[def-continuity-real]], [[def-neighbourhood-r]], [[lem-of-abs-value]]).

[L5] $f$ nondecreasing on $I$ means $f(x) \le f(y)$ for $x \le y$ in $I$, and nonincreasing means $f(x) \ge f(y)$; monotone means one of the two ([[def-monotone-function]]).

[L6] $d_\infty$ is a metric on $\mathbb{R}^{2}$ and its open ball of centre $(a,b)$ and radius $\varepsilon$ is $\{(u,v) : |u-a| < \varepsilon \text{ and } |v-b| < \varepsilon\}$; a subset $S$ of a metric space is dense exactly when every open ball meets $S$ ([[lem-metrics-on-rn]], [[def-metric-ball]], [[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]]).

[L7] Strictly between any two distinct reals there lies a rational; $\mathbb{R}$ is a field, so a nonzero real is invertible ([[lem-rat-embeds-dense]], [[def-complete-ordered-field]], [[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** cases.

1.1 Assume at least one of the six conditions holds. The six steps below treat the six conditions in turn and are exhaustive for that assumption; in each the conclusion reached is $f(x) = cx$ for every real $x$. [construct]

2.1 **Condition 3.** If $f$ is bounded above on a nondegenerate interval, that interval contains a closed $[p,r]$ with $p < r$ on which $f$ is bounded above, and the boundedness lemma gives $f(x) = f(1)x = cx$ for every real $x$. [step 1.1, L2, L3, assume-case above]

2.2 **Condition 6, in the contrapositive: if $f$ is not $x \mapsto cx$ then $\Gamma$ is dense in $\mathbb{R}^{2}$.** Suppose $f(x_{2}) \ne c\,x_{2}$ for some real $x_{2}$. Then $x_{2} \ne 0$, since $f(0) = 0$. Put $x_{1} := 1$, $v_{1} := (x_{1}, f(x_{1})) = (1, c)$ and $v_{2} := (x_{2}, f(x_{2}))$, and put $\Delta := x_{1}f(x_{2}) - x_{2}f(x_{1}) = f(x_{2}) - c\,x_{2}$, which is nonzero by assumption. [step 1.1, L1, assume-case graph]

3.1 **Condition 4.** If $f$ is bounded below on a nondegenerate interval $I$, say $f(z) \ge m$ for $z \in I$, then $-f$ is additive and satisfies $-f(z) \le -m$ on $I$, so $-f$ is bounded above on $I$; by step 2.1 applied to $-f$ we get $-f(x) = (-f)(1)\,x = -cx$, hence $f(x) = cx$. [step 2.1, A1, assume-case below]

3.2 **Condition 2.** Let $f$ be monotone on a nondegenerate interval, which contains $[p,r]$ with $p < r$. If $f$ is nondecreasing there then $f(z) \le f(r)$ for every $z \in [p,r]$, and if $f$ is nonincreasing there then $f(z) \le f(p)$; either way $f$ is bounded above on $[p,r]$ and step 2.1 applies. [step 2.1, L3, L5, assume-case mono]

3.3 **Condition 1.** Let $f$ be continuous at a point $c_{0}$. Taking $\varepsilon := 1$ gives a real $\delta > 0$ with $|f(x) - f(c_{0})| < 1$, hence $f(x) < f(c_{0}) + 1$, for every $x$ with $|x - c_{0}| < \delta$. The set of such $x$ is the nondegenerate interval $(c_{0}-\delta,\ c_{0}+\delta)$, so $f$ is bounded above on a nondegenerate interval and step 2.1 applies. [step 2.1, L3, L4, assume-case cont]

3.4 Let $(a,b) \in \mathbb{R}^{2}$ and let $\varepsilon > 0$ be real. Put $\alpha := (a\,f(x_{2}) - b\,x_{2})/\Delta$ and $\beta := (b\,x_{1} - a\,f(x_{1}))/\Delta$. Then $\alpha x_{1} + \beta x_{2} = a$ and $\alpha f(x_{1}) + \beta f(x_{2}) = b$, as multiplying out and cancelling $\Delta$ shows in each case. [step 2.2, L7]

4.1 **Condition 5.** If $f(z) \ge 0$ for every $z$ in a nondegenerate interval $I$ then $f$ is bounded below on $I$ by $0$ and step 3.1 applies; if $f(z) \le 0$ for every $z \in I$ then $f$ is bounded above on $I$ by $0$ and step 2.1 applies. So sign-constancy is a special case of the two preceding conditions and needs no separate argument. [step 2.1, step 3.1, assume-case sign]

4.2 Choose rationals $q_{1}, q_{2}$ with $|q_{1} - \alpha| < \eta$ and $|q_{2} - \beta| < \eta$, where $\eta > 0$ is a real chosen with $\eta\,(|x_{1}| + |x_{2}|) < \varepsilon$ and $\eta\,(|f(x_{1})| + |f(x_{2})|) < \varepsilon$; such rationals exist because a rational lies strictly between any two distinct reals, and such an $\eta$ exists because for a real $K \ge 0$ the inequality $\eta K < \varepsilon$ holds for all small enough $\eta > 0$. [step 3.4, L7]

5.1 Put $x := q_{1}x_{1} + q_{2}x_{2}$. Then $f(x) = q_{1}f(x_{1}) + q_{2}f(x_{2})$ by additivity and rational homogeneity, so $(x, f(x)) \in \Gamma$. Moreover $|x - a| = |(q_{1}-\alpha)x_{1} + (q_{2}-\beta)x_{2}| \le \eta(|x_{1}| + |x_{2}|) < \varepsilon$ and likewise $|f(x) - b| \le \eta(|f(x_{1})| + |f(x_{2})|) < \varepsilon$. [step 3.4, step 4.2, A1, L1, L7]

6.1 So every open ball of $\mathbb{R}^{2}$ meets $\Gamma$, that is, $\Gamma$ is dense in $\mathbb{R}^{2}$. Reading this contrapositively: if $\Gamma$ is not dense in $\mathbb{R}^{2}$ then $f(x) = cx$ for every real $x$, which is condition 6. [step 2.2, step 5.1, L6]

7.1 Each of the six conditions has now been shown to force $f(x) = cx$ for every real $x$: condition 1 at step 3.3, condition 2 at step 3.2, condition 3 at step 2.1, condition 4 at step 3.1, condition 5 at step 4.1 and condition 6 at step 6.1. [step 2.1, step 3.1, step 4.1, step 3.2, step 3.3, step 6.1, cases-exhaustive] ∎

## Remarks

- **Every clause reduces to one lemma.** The engine is
  [[lem-additive-bounded-above-on-an-interval-is-linear]]; five of the six
  conditions are shown to imply its hypothesis, and the sixth is proved
  separately because a non-dense graph gives no bound on $f$ anywhere. The
  economy is deliberate: proving each clause from scratch would repeat the same
  translation-and-scaling argument five times.

- **The list is not a list of equivalent conditions.** Each of the six implies
  linearity, and linearity implies all six, so over the additive functions they
  are indeed equivalent; but the theorem as stated is six implications in one
  direction, and that is what the proof establishes.

- **None of the six is dispensable in the sense that additivity alone suffices.**
  There is an additive $f$ satisfying none of them
  ([[fs-additive-implies-linear]]), and by the theorem it is unbounded above and
  below on every nondegenerate interval, monotone on none, continuous at no
  point, of constant sign on no nondegenerate interval, and has dense graph. The
  construction costs the Axiom of Choice, and the companion page records what it
  looks like.
````

### `thm-of-archimedean`

````markdown
---
id: thm-of-archimedean
kind: theorem
title: "Every complete ordered field is Archimedean"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-naturals-positive, cor-of-one-positive, def-ordered-field]
aliases: []
landmark: true
short: "complete ⇒ Archimedean"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Neil Donaldson, Math 140A notes: Completeness and the Archimedean property"
      url: "https://www.math.uci.edu/~ndonalds/math140a/1complete.html"
pipeline_run: null
---

## Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

## Facts & Assumptions

**Given:** A complete ordered field $F$; write $A = \{\, n \cdot 1_F : n \ge 1 \,\}$ for the set of its canonical naturals.

[L1] Least-upper-bound property: every nonempty $S \subseteq F$ that is bounded above has a least upper bound $\sup S \in F$ ([[def-complete-ordered-field]]).

[L2] Each canonical natural satisfies $n \cdot 1_F > 0$, one has $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, and $(n+1) \cdot 1_F > n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L3] $0 < 1_F$ ([[cor-of-one-positive]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $F$ is not Archimedean: there is some $x \in F$ with $n \cdot 1_F \le x$ for all $n \ge 1$, that is, $x$ is an upper bound of $A$. [assume-contra]

2.1 The set $A$ is nonempty, since $1 \cdot 1_F = 1_F \in A$, and it is bounded above by $x$. [step 1.1, L2]

3.1 By the least-upper-bound property, $A$ has a least upper bound $s = \sup A \in F$. [step 2.1, L1]

4.1 Since $1_F > 0$, we have $s - 1_F < s$; as $s$ is the least upper bound, $s - 1_F$ is not an upper bound of $A$. [step 3.1, L3]

5.1 Hence there is some $m \ge 1$ with $m \cdot 1_F > s - 1_F$. [step 4.1]

6.1 Adding $1_F$ to both sides, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F > s$. [step 5.1, L2]

7.1 But $(m+1) \cdot 1_F \in A$, so $(m+1) \cdot 1_F \le s$ because $s$ is an upper bound of $A$, contradicting 6.1. [step 6.1, step 3.1, L2]

8.1 The assumption is therefore untenable, so $F$ is Archimedean. [step 7.1, discharge-contradiction] ∎
````


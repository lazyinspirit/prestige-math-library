# Audit proof-refuter brief — Wave 13, A6

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

- high risk (5): 3 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `cor-power-series-convergence-dichotomy`

Normalized current SHA-256: `cad2f50883b58ff694d2f858053d31e0aa2d403bb6dc4b7712104c58f35dc724`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cor-power-series-convergence-dichotomy
kind: corollary
title: "A real power series converges absolutely inside its radius and diverges outside it, while either behaviour may occur at an endpoint"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cauchy-hadamard-for-real-power-series, def-real-power-series-and-radius-of-convergence, thm-root-test]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
pipeline_run: null
---

## Statement

Let $\sum a_n(x-c)^n$ have radius $R$. It converges absolutely at every $x$ with $|x-c|<R$ and diverges at every $x$ with $|x-c|>R$. When $0<R<+\infty$, no common conclusion holds at either endpoint $c\pm R$: power series of radius $R$ can converge there, even absolutely, or diverge there.

## Facts & Assumptions

**Given:** A real power series $\sum a_n(x-c)^n$ with radius $R$ ([[def-real-power-series-and-radius-of-convergence]]).

[L1] Cauchy-Hadamard identifies $R$ from the limit superior of the coefficient roots and the root test gives absolute convergence below the reciprocal threshold and divergence above it ([[thm-cauchy-hadamard-for-real-power-series]]).

[L2] At root-test boundary value $1$, the coefficient families $1/(n+1)$ and $1/(n+1)^2$ both have root limit superior $1$, while the first series diverges and the second converges; changing the coefficient signs does not change their absolute values ([[thm-root-test]], claim 3).

## Proof

**Proof technique:** direct.

1.1 The assertions for $|x-c|<R$ and $|x-c|>R$ are exactly the two strict alternatives supplied by [L1], including the cases $R=0$ and $R=+\infty$. [L1]

1.2 For endpoint behaviour at radius $1$, the series with coefficients $1/(n+1)^2$ converges absolutely at both $x=1$ and $x=-1$. The series with coefficients $1/(n+1)$ diverges at $x=1$, while the series with coefficients $(-1)^n/(n+1)$ diverges at $x=-1$. All three have radius $1$ by [L2]. [L2]

2.1 Replacing $x$ by $(x-c)/R$ and multiplying coefficients by the corresponding powers of $R^{-1}$ transports the two radius-one examples to any finite $R>0$ and centre $c$. Thus either behaviour may occur at an endpoint, while no assertion has been made when the endpoints are not real. [step 1.2, algebra] ∎
````

## Wave 13 provenance row

```json
{
  "id": "cor-power-series-convergence-dichotomy",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series",
    "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
  ],
  "rationale": "The sources state absolute convergence strictly inside the radius, divergence outside, and unconstrained endpoint behaviour. The item packages those clauses as a real, convention-complete corollary and proves them from its local Cauchy–Hadamard theorem.",
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
      "source": "thm-cauchy-hadamard-for-real-power-series",
      "source_section": "Statement",
      "quote": "Let $\\sum_{n\\ge0}a_n(x-c)^n$ be a real power series with radius $R$ ([[def-real-power-series-and-radius-of-convergence]]), and put\n\n$$L:=\\limsup_{k\\to\\infty}|a_{k+1}|^{1/(k+1)}\\in[0,+\\infty].$$\n\nThen $R$ is the reciprocal of $L$ in the following explicit sense:\n\n$$R=\\begin{cases}+\\infty,&L=0,\\\\[2pt]1/L,&0<L<+\\infty,\\\\[2pt]0,&L=+\\infty.\\end{cases}$$\n\nEquivalently, with the conventions $1/0:=+\\infty$ and $1/(+\\infty):=0$, one has $R=1/L$. The roots use $a_{k+1}$ and the exponent $1/(k+1)$ because $\\mathbb N$ starts at $0$ and a zeroth root is undefined.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-root-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)_{k \\ge 1}$ be a family of reals from the starting index $1$\n([[def-series]]), put\n\n$$\\rho_k \\;:=\\; |a_{k+1}|^{1/(k+1)} \\qquad (k \\in \\mathbb{N}), \\qquad \\rho \\;:=\\; \\limsup_{k} \\rho_k \\;\\in\\; \\overline{\\mathbb{R}} ,$$\n\nand note that $\\rho$ exists for every such family, with no hypothesis whatever\n([[lem-limsup-exists]], [[def-limsup-liminf]]). Then:\n\n1. if $\\rho < 1$ then $\\sum_{k \\ge 1} |a_k|$ converges, and hence\n   $\\sum_{k \\ge 1} a_k$ converges as well;\n2. if $\\rho > 1$ then $\\sum_{k \\ge 1} a_k$ diverges;\n3. if $\\rho = 1$ neither conclusion follows: $\\sum_{k \\ge 1} 1/k$ diverges,\n   $\\sum_{k \\ge 1} 1/k^{2}$ converges, and both have $\\rho = 1$.\n\n**The root family is shifted, and that is forced.** The classical expression\n$|a_n|^{1/n}$ is meaningful only for $n \\ge 1$, since $1/0$ is not a rational\nnumber ([[def-rational-power]]), while sequences here are functions on\n$\\mathbb{N}$ and $\\mathbb{N}$ contains $0$. So the roots are written\n$\\rho_k = |a_{k+1}|^{1/(k+1)}$, which is $|a_n|^{1/n}$ reindexed by $n = k+1$,\nexactly the convention of [[thm-ratio-root-inequality]]. Every $\\rho_k$ is\ndefined, including where $a_{k+1} = 0$, by the supplementary clause of\n[[def-rational-power]].\n\n**What claim 1 does and does not say.** The comparison with a geometric series\ndelivers convergence of the series of *absolute values*; that\n$\\sum_{k \\ge 1} a_k$ itself converges is a separate step, and it is supplied by\n[[lem-absolute-convergence-implies-convergence]] earlier on this page. Nothing\nhere identifies the sum, and nothing here says anything about rearranging the\nseries, which is taken up later in this track.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The assertions for $|x-c|<R$ and $|x-c|>R$ are exactly the two strict alternatives supplied by [L1], including the cases $R=0$ and $R=+\\infty$.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "For endpoint behaviour at radius $1$, the series with coefficients $1/(n+1)^2$ converges absolutely at both $x=1$ and $x=-1$. The series with coefficients $1/(n+1)$ diverges at $x=1$, while the series with coefficients $(-1)^n/(n+1)$ diverges at $x=-1$. All three have radius $1$ by [L2].",
      "step": "1.2",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Replacing $x$ by $(x-c)/R$ and multiplying coefficients by the corresponding powers of $R^{-1}$ transports the two radius-one examples to any finite $R>0$ and centre $c$. Thus either behaviour may occur at an endpoint, while no assertion has been made when the endpoints are not real.",
      "step": "2.1",
      "inputs": [
        "step 1.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "cor-power-series-convergence-dichotomy: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Let $\\sum a_n(x-c)^n$ have radius $R$. It converges absolutely at every $x$ with $|x-c|<R$ and diverges at every $x$ with $|x-c|>R$. When $0<R<+\\infty$, no common conclusion holds at either endpoint $c\\pm R$: power serie"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly handles the zero-valued parameter or zero object used by the statement."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.2: the proof explicitly handles the unit value, first index, or limit at one relevant to the assertion."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly handles or excludes the degenerate configuration relevant to the statement."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.2: the proof explicitly treats the endpoint, boundary, or radial-limit behaviour used by the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "cor-power-series-convergence-dichotomy: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: Let $\\sum a_n(x-c)^n$ have radius $R$. It converges absolutely at every $x$ with $|x-c|<R$ and diverges at every $x$ with $|x-c|>R$. When $0<R<+\\infty$, no common conclusion holds at either endpoint $c\\pm R$: power serie"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "cor-power-series-convergence-dichotomy: the Statement is not an equivalence, so there is no forward implication obligation: Let $\\sum a_n(x-c)^n$ have radius $R$. It converges absolutely at every $x$ with $|x-c|<R$ and diverges at every $x$ with $|x-c|>R$. When $0<R<+\\infty$, no common conclusion holds at either endpoint $c\\pm R$: power serie"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "cor-power-series-convergence-dichotomy: the Statement is not an equivalence, so there is no reverse implication obligation: Let $\\sum a_n(x-c)^n$ have radius $R$. It converges absolutely at every $x$ with $|x-c|<R$ and diverges at every $x$ with $|x-c|>R$. When $0<R<+\\infty$, no common conclusion holds at either endpoint $c\\pm R$: power serie"
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cor-power-series-convergence-dichotomy",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-cauchy-hadamard-for-real-power-series",
    "declared_target": "thm-cauchy-hadamard-for-real-power-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-power-series-convergence-dichotomy",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-real-power-series-and-radius-of-convergence",
    "declared_target": "def-real-power-series-and-radius-of-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-power-series-convergence-dichotomy",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-root-test",
    "declared_target": "thm-root-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
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

## Full exact-current text of every cited or declared item (3)

### `def-real-power-series-and-radius-of-convergence`

````markdown
---
id: def-real-power-series-and-radius-of-convergence
kind: definition
title: "A real power series about a centre, its interval of convergence, and its radius in $[0,+\\infty]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, def-absolute-and-conditional-convergence, def-integer-power, def-extended-reals, lem-extended-reals-complete, def-interval]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
pipeline_run: null
---

## Definition

Let $(a_n)_{n\in\mathbb N}$ be a sequence of reals and let $c\in\mathbb R$. The **real power series about the centre $c$ with coefficients $(a_n)$** is the series

$$\sum_{n=0}^{\infty}a_n(x-c)^n$$

at a real argument $x$, where powers are those of [[def-integer-power]] and convergence is that of [[def-series]]. Its value, when the series converges, is called its **sum at $x$**. At $x=c$ the series always converges to $a_0$: the term with $n=0$ is $a_0$ because $0^0=1$, and every later term is $0$.

For $r\ge0$ let $P(r)$ mean that the series converges absolutely at every real $x$ with $|x-c|<r$. The set of such $r$ contains $0$, since the condition $|x-c|<0$ has no solutions. The **radius of convergence** is

$$R:=\sup_{\overline{\mathbb R}}\{r\in\mathbb R:r\ge0\text{ and }P(r)\}\in[0,+\infty],$$

where the supremum is taken in the extended real line of [[def-extended-reals]]. Thus $R$ may be a nonnegative real or $+\infty$, but never $-\infty$.

The **open interval determined by the radius** is

$$I_R:=\{x\in\mathbb R:|x-c|<R\}.$$

When $0<R<+\infty$ this is $(c-R,c+R)$, when $R=+\infty$ it is all of $\mathbb R$, and when $R=0$ it is empty. The centre still carries the convergent value $a_0$ in the last case. No endpoint is included in $I_R$; convergence at $c-R$ or $c+R$, when these are real, is a separate question.

## Remarks

The radius is extended-valued, but no undefined arithmetic in $\overline{\mathbb R}$ is used. Expressions such as $c\pm R$ are written only when $R$ is finite. The reciprocal conventions used in Cauchy-Hadamard are stated explicitly in [[thm-cauchy-hadamard-for-real-power-series]].
````

### `thm-cauchy-hadamard-for-real-power-series`

````markdown
---
id: thm-cauchy-hadamard-for-real-power-series
kind: theorem
title: "Cauchy–Hadamard: the reciprocal radius is $\\limsup_{k\\to\\infty}|a_{k+1}|^{1/(k+1)}$, with the zero and infinite cases included"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-power-series-and-radius-of-convergence, def-limsup-liminf, lem-limsup-exists, lem-limsup-epsilon-characterisation, thm-root-test, def-absolute-and-conditional-convergence]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Cauchy-Hadamard theorem, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Cauchy-Hadamard_theorem"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
pipeline_run: null
---

## Statement

Let $\sum_{n\ge0}a_n(x-c)^n$ be a real power series with radius $R$ ([[def-real-power-series-and-radius-of-convergence]]), and put

$$L:=\limsup_{k\to\infty}|a_{k+1}|^{1/(k+1)}\in[0,+\infty].$$

Then $R$ is the reciprocal of $L$ in the following explicit sense:

$$R=\begin{cases}+\infty,&L=0,\\[2pt]1/L,&0<L<+\infty,\\[2pt]0,&L=+\infty.\end{cases}$$

Equivalently, with the conventions $1/0:=+\infty$ and $1/(+\infty):=0$, one has $R=1/L$. The roots use $a_{k+1}$ and the exponent $1/(k+1)$ because $\mathbb N$ starts at $0$ and a zeroth root is undefined.

## Facts & Assumptions

**Given:** A real power series $\sum a_n(x-c)^n$, its radius $R$, the nonnegative root sequence $q_k:=|a_{k+1}|^{1/(k+1)}$, and $L:=\limsup_k q_k$.

[L1] The limit superior $L$ exists in $\overline{\mathbb R}$ for every real sequence ([[def-limsup-liminf]], [[lem-limsup-exists]]).

[L2] If $L$ is real, then for every real $\varepsilon>0$, $q_k<L+\varepsilon$ eventually and $q_k>L-\varepsilon$ frequently ([[lem-limsup-epsilon-characterisation]]).

[L3] The root test says that a real series from index $1$ converges absolutely when the limit superior of its shifted roots is $<1$, and diverges when that limit superior is $>1$ ([[thm-root-test]]).

[L4] Absolute convergence means convergence of the series of absolute values ([[def-absolute-and-conditional-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in\mathbb R$ and put $d:=|x-c|$. The shifted roots of the terms $a_n(x-c)^n$, $n\ge1$, are $|a_{k+1}(x-c)^{k+1}|^{1/(k+1)}=q_kd$. [given, algebra]

2.1 If $L=0$, then for $d=0$ every root in step 1.1 is $0$, while for $d>0$ and any $\eta>0$, [L2] applied with $\varepsilon=\eta/d$ makes $q_kd<\eta$ eventually. Thus $\limsup_k(q_kd)=0<1$ for every $x$. [step 1.1, L2]

2.2 Suppose $0<L<+\infty$. If $d<1/L$, choose a real $t$ with $L<t<1/d$ (with the second inequality omitted when $d=0$). By [L2], $q_k<t$ eventually, so $\limsup_k(q_kd)\le td<1$. If $d>1/L$, choose $t$ with $1/d<t<L$; [L2] gives $q_k>t$ frequently, so $\limsup_k(q_kd)\ge td>1$. [step 1.1, L2, choose]

2.3 If $L=+\infty$ and $d>0$, then for every real $M>0$ and every index $N$ there is $k\ge N$ with $q_k>M$: otherwise $M$ would bound a tail and its supremum, forcing the infimum of the tail suprema to be finite. Taking $M>1/d$ shows $q_kd>1$ arbitrarily late, hence $\limsup_k(q_kd)>1$. [L1, step 1.1, choose]

3.1 By [L3] and [L4], step 2.1 gives absolute convergence at every real $x$ when $L=0$; step 2.2 gives absolute convergence for $d<1/L$ and divergence for $d>1/L$ when $0<L<+\infty$; and step 2.3 gives divergence at every $x\ne c$ when $L=+\infty$, while the series converges at $c$ to $a_0$. [step 2.1, step 2.2, step 2.3, L3, L4]

4.1 Reading these three alternatives through the definition of the radius yields $R=+\infty$, $R=1/L$, and $R=0$, respectively, which is the stated convention-complete formula. [step 3.1] ∎
````

### `thm-root-test`

````markdown
---
id: thm-root-test
kind: theorem
title: "Root test: $\\limsup |a_k|^{1/k} < 1$ gives absolute convergence and hence convergence, $> 1$ gives divergence, and $= 1$ decides nothing"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-limsup-liminf, lem-limsup-exists, thm-ratio-root-inequality, thm-geometric-series, thm-direct-comparison-test, lem-series-tail-invariance, lem-absolute-convergence-implies-convergence, lem-nth-term-test, thm-nth-roots-exist, def-rational-power, lem-rational-power-laws, lem-rational-power-monotone, lem-power-monotone, lem-of-abs-value, def-extended-reals, lem-extended-reals-complete, thm-p-series-rational, lem-nth-root-of-n-tends-to-one, thm-algebra-of-limits, thm-convergence-iff-limsup-equals-liminf, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
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
  references:
    - title: "Root test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Root_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.33)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)_{k \ge 1}$ be a family of reals from the starting index $1$
([[def-series]]), put

$$\rho_k \;:=\; |a_{k+1}|^{1/(k+1)} \qquad (k \in \mathbb{N}), \qquad \rho \;:=\; \limsup_{k} \rho_k \;\in\; \overline{\mathbb{R}} ,$$

and note that $\rho$ exists for every such family, with no hypothesis whatever
([[lem-limsup-exists]], [[def-limsup-liminf]]). Then:

1. if $\rho < 1$ then $\sum_{k \ge 1} |a_k|$ converges, and hence
   $\sum_{k \ge 1} a_k$ converges as well;
2. if $\rho > 1$ then $\sum_{k \ge 1} a_k$ diverges;
3. if $\rho = 1$ neither conclusion follows: $\sum_{k \ge 1} 1/k$ diverges,
   $\sum_{k \ge 1} 1/k^{2}$ converges, and both have $\rho = 1$.

**The root family is shifted, and that is forced.** The classical expression
$|a_n|^{1/n}$ is meaningful only for $n \ge 1$, since $1/0$ is not a rational
number ([[def-rational-power]]), while sequences here are functions on
$\mathbb{N}$ and $\mathbb{N}$ contains $0$. So the roots are written
$\rho_k = |a_{k+1}|^{1/(k+1)}$, which is $|a_n|^{1/n}$ reindexed by $n = k+1$,
exactly the convention of [[thm-ratio-root-inequality]]. Every $\rho_k$ is
defined, including where $a_{k+1} = 0$, by the supplementary clause of
[[def-rational-power]].

**What claim 1 does and does not say.** The comparison with a geometric series
delivers convergence of the series of *absolute values*; that
$\sum_{k \ge 1} a_k$ itself converges is a separate step, and it is supplied by
[[lem-absolute-convergence-implies-convergence]] earlier on this page. Nothing
here identifies the sum, and nothing here says anything about rearranging the
series, which is taken up later in this track.

## Facts & Assumptions

**Given:** A family $(a_k)_{k \ge 1}$ of reals, the roots $\rho_k = |a_{k+1}|^{1/(k+1)}$ for $k \in \mathbb{N}$, the tail suprema $s_n = \sup\{\rho_k : k \ge n\}$ taken in $\overline{\mathbb{R}}$, and $\rho = \limsup_k \rho_k = \inf\{s_n : n \in \mathbb{N}\}$ ([[def-limsup-liminf]], [[def-extended-reals]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound there, and the extended order is total ([[lem-extended-reals-complete]], [[def-extended-reals]]). In particular $\rho \le s_n$ for every $n$, and $\rho_k \le s_n$ for every $k \ge n$; a real $t$ with $\rho < t$ fails to be a lower bound of $\{s_n\}$, and a real $u$ with $s_n > u$ fails to be an upper bound of $\{\rho_k : k \ge n\}$.

[L2] Both quantities exist for every sequence, bounded or not ([[lem-limsup-exists]]).

[L3] Roots and powers: for $x \ge 0$ and natural $n \ge 1$, $x^{1/n} \ge 0$ and $(x^{1/n})^{n} = x$; on the nonnegatives $y \mapsto y^{n}$ is strictly increasing for $n \ge 1$; and $1^{n} = 1$ ([[thm-nth-roots-exist]], [[def-rational-power]], [[lem-power-monotone]]).

[L4] Absolute value: $|x| \ge 0$ for every real $x$ ([[lem-of-abs-value]]).

[L5] The geometric series $\sum_{j \ge 0} t^{j}$ converges when $|t| < 1$, and a series converges if and only if each of its tail series converges ([[thm-geometric-series]], [[lem-series-tail-invariance]]).

[L6] Direct comparison, in the form for families from a general starting index: if $0 \le x_k \le y_k$ from some index on and $\sum y_k$ converges then $\sum x_k$ converges ([[thm-direct-comparison-test]], [[def-series]]).

[L7] If a series converges then its terms tend to $0$; contrapositively, terms not tending to $0$ force divergence ([[lem-nth-term-test]], [[def-real-limit]]).

[L8] $1 \le n^{1/n}$ for every natural $n \ge 1$, and the sequence $(k+1)^{1/(k+1)}$ converges to $1$ ([[lem-nth-root-of-n-tends-to-one]]); a sequence converging to a real $c$ has $\limsup = \liminf = c$ ([[thm-convergence-iff-limsup-equals-liminf]]); products and quotients of convergent sequences converge, the quotient requiring nonzero limit and nonzero denominators ([[thm-algebra-of-limits]]).

[L9] Laws of rational exponents on a positive base: $(a^{r})^{s} = a^{rs}$, $a^{-r} = 1/a^{r}$ and $a^{r} > 0$; and for rational $t > 0$, $a > 1$ implies $a^{t} > 1$ ([[lem-rational-power-laws]], [[lem-rational-power-monotone]]).

[L10] For rational $p > 0$, $\sum_{k \ge 1} 1/k^{p}$ converges if and only if $p > 1$ ([[thm-p-series-rational]]).

[L11] If $\sum |x_j|$ converges then $\sum x_j$ converges; for a family from the starting index $1$ this is the same statement applied to the shifted sequence $j \mapsto a_{j+1}$, whose series is $\sum_{k \ge 1} a_k$ and whose absolute-value series is $\sum_{k \ge 1} |a_k|$ ([[lem-absolute-convergence-implies-convergence]], [[def-series]]).

## Proof

**Proof technique:** cases.

1.1 Assume $\rho < 1$. [assume-case lt]

1.2 Assume instead $\rho > 1$. [assume-case gt]

1.3 Assume instead $\rho = 1$. [assume-case one]

2.1 Every $\rho_k$ is a nonnegative real, so each $s_n \ge \rho_n \ge 0$ and hence $0$ is a lower bound of $\{s_n\}$, giving $\rho \ge 0$; combined with the case hypothesis $\rho < 1$ this puts $\rho$ strictly between the reals $0$ and $1$, so $\rho$ is a real number. [step 1.1, L1, L2, L3, L4]

2.2 In the case $\rho > 1$, the value $\rho$ is a lower bound of $\{s_n\}$, so $s_n \ge \rho > 1$ for every $n \in \mathbb{N}$. [step 1.2, L1]

2.3 In the case $\rho = 1$, take first $b_k := 1/k$ for $k \ge 1$. Its root family is $\big(1/(k+1)\big)^{1/(k+1)} = 1 / (k+1)^{1/(k+1)}$, and since $(k+1)^{1/(k+1)} \to 1$ with every term at least $1$, the quotient rule gives convergence to $1$, so the limit superior of the root family is $1$; and $\sum_{k \ge 1} 1/k$ diverges, being the case $p = 1$. [step 1.3, L8, L9, L10]

2.4 In the case $\rho = 1$, take next $c_k := 1/k^{2}$ for $k \ge 1$. Its root family is $\big((k+1)^{-2}\big)^{1/(k+1)} = \big((k+1)^{1/(k+1)}\big)^{-2}$, which converges to $1^{-2} = 1$ by the product and quotient rules, so again the limit superior of the root family is $1$; and $\sum_{k \ge 1} 1/k^{2}$ converges, being the case $p = 2$. [step 1.3, L8, L9, L10]

3.1 In the case $\rho < 1$ put $t := (\rho + 1)/2$, a real number with $0 \le \rho < t < 1$; since $t$ is not a lower bound of $\{s_n\}$ there is $N \in \mathbb{N}$ with $s_N < t$. [step 2.1, L1, choose]

3.2 In the case $\rho > 1$, for each $n$ the real $1$ is not an upper bound of $\{\rho_k : k \ge n\}$, so there is $k \ge n$ with $\rho_k > 1$. [step 2.2, L1]

3.3 So at $\rho = 1$ one family gives a divergent series and another a convergent one, and neither of the two conclusions can be drawn, which is claim 3. [step 2.3, step 2.4]

4.1 In the case $\rho < 1$, for every $k \ge N$ we have $\rho_k \le s_N < t$, and raising both nonnegative sides to the power $k+1 \ge 1$ gives $|a_{k+1}| = (\rho_k)^{k+1} < t^{\,k+1}$. [step 3.1, L1, L3]

4.2 In the case $\rho > 1$, whenever $\rho_k > 1$ we get $|a_{k+1}| = (\rho_k)^{k+1} > 1^{\,k+1} = 1$; so by step 3.2 there are indices $k \ge n$ with $|a_{k+1}| > 1$ for every $n$. [step 3.2, L3]

4.3 In the case $\rho < 1$: since $0 < t < 1$ the geometric series $\sum_{j \ge 0} t^{j}$ converges, hence so does its first tail series $\sum_{m \ge 1} t^{m}$. [step 3.1, L5]

5.1 In the case $\rho < 1$: putting $x_j := |a_{j+1}|$ and $y_j := t^{\,j+1}$ for $j \in \mathbb{N}$, step 4.1 gives $0 \le x_j \le y_j$ for all $j \ge N$, and $\sum_j y_j$ is the convergent series of step 4.3; so $\sum_{k \ge 1} |a_k|$ converges. [step 4.1, step 4.3, L4, L6]

5.2 In the case $\rho > 1$: the sequence $j \mapsto a_{j+1}$ does not converge to $0$, because with the rational tolerance $1$ no index $K$ satisfies $|a_{k+1}| < 1$ for all $k \ge K$; hence $\sum_{k \ge 1} a_k$ diverges, which is claim 2. [step 4.2, L7]

6.1 In the case $\rho < 1$: the series $\sum_{k \ge 1} |a_k|$ having been shown to converge, the sequence $j \mapsto a_{j+1}$ has a convergent absolute-value series, so $\sum_{k \ge 1} a_k$ converges as well; together with the convergence of $\sum_{k \ge 1}|a_k|$ that is claim 1. [step 5.1, L11]

7.1 The three cases $\rho < 1$, $\rho > 1$ and $\rho = 1$ exhaust $\overline{\mathbb{R}}$, the extended order being total, so the three claims together cover every family. [step 6.1, step 5.2, step 3.3, L1, cases-exhaustive] ∎

## Remarks

- **The test reads only the tail suprema, and that is why it never needs the roots to converge.** Claim 1 uses a single index $N$ beyond which all roots sit below a fixed $t < 1$; claim 2 uses only that roots above $1$ occur arbitrarily late. Neither argument asks whether $(\rho_k)$ has a limit, which is exactly the advantage of $\limsup$ over $\lim$ here.

- **Claim 2 is proved through the term test, not through a comparison.** What the hypothesis delivers is infinitely many terms of absolute value greater than $1$, which already forbids the terms from tending to $0$. No estimate on the partial sums is needed, and none is available, the terms having no sign.

- **The witnesses in claim 3 are chosen so that both root computations reduce to the single standard limit $n^{1/n} \to 1$.** The companion page carries the same phenomenon with the exponents $-1/2$ and $-2$, where the divergent witness is not the harmonic series.
````


# Audit proof-refuter brief — Wave 7, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as a
read-only adversarial proof-refuter for the published-page audit. You are
tool-less: you cannot open a file, run a command, browse, edit, or delegate.
Everything you may rely on is reproduced in the `This dispatch` section. Return
evidence only; Audit-Alpha alone adjudicates and edits.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

## Adversarial standard

Read the target's title, Statement/Definition/Example/Statement refuted, Facts &
Assumptions, every numbered proof/refutation/verification step, and Remarks.
Try to falsify the public claim and every load-bearing inference.

1. Compare every cited fact with the supplied source text before alleging that
   it is weak. Check domain, quantifiers, hypotheses, direction, conclusion,
   and whether the source licenses the exact use.
2. Check that the title and public statement assert no more than the proof
   establishes, and that every proof step uses only available premises.
3. Check both directions of biconditionals, uniqueness/existence claims,
   induction and limiting arguments, empty/zero/endpoint/degenerate cases,
   extended-real conventions, index shifts, and hidden division or choice.
4. Re-read Remarks as skeptically as a numbered step. A false mathematical
   remark is a defect even when the proof is sound.
5. When the target is marked `ai-generated`, actively search for a
   counterexample to its claim, witness, or refutation rather than merely
   checking prose consistency.
6. Treat a false public claim, logically invalid proof, missing necessary
   hypothesis, circularity, or materially inaccurate load-bearing citation as
   fatal. Do not inflate an expository omission or a gap closable within thirty
   seconds into a defect.

## Output format

Reply with exactly this structure and no preamble:

```text
VERDICT: CLEAN | DEFECTS
```

If `DEFECTS`, give one block per finding:

```text
FINDING 1
  location: [exact title, section, fact label, or numbered step]
  severity: fatal | nonfatal
  claim:    [the exact mathematical assertion]
  evidence: [counterexample, missing hypothesis, invalid inference, or exact source mismatch]
```

Then always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and their disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm the title, public claim, every numbered step, and Remarks were read]
```


---

# This dispatch

## Selection reasons

- critical risk (12): 15 declared dependencies; 12 cited facts; 6 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `lem-pseudometric-from-a-normal-entourage-sequence`

Normalized current SHA-256: `b8e342485833ce12d3740a4a33a61eb88014a503e19f2535f1d80ae835b6fbff`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-pseudometric-from-a-normal-entourage-sequence
kind: lemma
title: "A normal sequence of entourages yields a uniformly continuous pseudometric with controlled dyadic balls"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-metric-space, def-rational-power, def-integer-power, def-infimum, def-finite-sum, def-gauge-of-pseudometrics, lem-geometric-sequence-null, thm-infimum-property, lem-inf-epsilon, lem-finite-sum-laws, lem-rational-power-laws, lem-rational-power-monotone, def-uniform-space-by-entourages, def-filter, thm-strong-induction]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Statement

Given a decreasing symmetric sequence $(E_n)$ with $E_0=X\times X$ and
$E_{n+1}^{\circ3}\subseteq E_n$, there is a pseudometric $p$ on $X$ such that
$$
E_n\subseteq\{p\le2^{-n}\}\subseteq E_{n-1}
$$
for every $n\ge1$. In particular, each set $\{p<\varepsilon\}$ is an
entourage, so $p$ is uniformly continuous for the original uniformity in the
sense of [[def-gauge-of-pseudometrics]].

## Facts & Assumptions

**Given:** A normal sequence $(E_n)$ of symmetric entourages on $X$.

[A1] The given sequence satisfies $E_0=X\times X$, is decreasing, and has $E_{n+1}^{\circ3}\subseteq E_n$.

[A2] Every entourage contains the diagonal, and every superset of an entourage is again an entourage because a uniformity is an upward-closed filter ([[def-uniform-space-by-entourages]], [[def-filter]]).

[L1] A pseudometric satisfies symmetry, the triangle inequality, and $p(x,x)=0$ ([[def-metric-space]]).

[L2] Every nonempty set of reals bounded below has an infimum, which is a lower bound and is approached from above within every positive epsilon ([[thm-infimum-property]], [[lem-inf-epsilon]], [[def-infimum]]).

[L3] Finite sums split under concatenation and are nonnegative when their terms are nonnegative; a nonempty finite sum of positive terms is positive ([[def-finite-sum]], [[lem-finite-sum-laws]], claims 3 and 4).

[L4] The dyadic weights $2^{-n}=(1/2)^n$ are positive, satisfy the rational power laws, strictly decrease with $n$, and tend to $0$ ([[lem-rational-power-laws]], claims 1 and 2, [[lem-rational-power-monotone]], claim 1, and [[lem-geometric-sequence-null]], claim 1).

[L5] Strong induction may assume a claim for every smaller natural number ([[thm-strong-induction]]).

## Proof

**Proof technique:** constructive.

1.1 For $x,y\in X$, let $W(x,y)$ be the set of sums $\sum_{i<k}2^{-n_i}$ over all finite chains $x=x_0,\ldots,x_k=y$ with $(x_{i-1},x_i)\in E_{n_i}$. This set is nonempty because the one-edge $E_0=X\times X$ chain has weight $1$. Every dyadic term is positive by [L4], so every such finite sum is nonnegative by [L3]; hence $0$ is a lower bound. By [L2], the infimum exists; define $p(x,y):=\inf W(x,y)$. [A1, L2, L3, L4, construct]

1.2 We prove by strong induction on the number $k$ of edges, simultaneously for every $n$, that a $k$-edge chain of total weight less than $2^{-n}$ has $E_n$-related endpoints. For $k=0$ the endpoints coincide and hence are $E_n$-related by [A2]. Now let $k\ge1$ and assume the claim for every shorter chain. Its total weight $w$ is positive by [L3] and [L4]. Take the first edge for which the cumulative weight through that edge exceeds $w/2$. The subchain before it has weight at most $w/2$, and the subchain after it has weight less than $w/2$; because $w<2^{-n}$, both are less than $2^{-(n+1)}$. They have fewer than $k$ edges, so the induction hypothesis makes both endpoint pairs $E_{n+1}$-related. The middle edge has weight $2^{-m}\le w<2^{-n}$; strict decrease of the dyadic weights gives $m\ge n+1$, and decreasingness of $(E_j)$ puts that edge in $E_{n+1}$. Thus the endpoints lie in $E_{n+1}^{\circ3}\subseteq E_n$. Strong induction proves the claim for every finite chain. [A1, A2, L3, L4, L5]

2.1 The empty chain has weight $0$, while all weights are nonnegative, so $p(x,x)=0$. Reversing a chain preserves its weight because each $E_n$ is symmetric, so $p(x,y)=p(y,x)$. For the triangle inequality, suppose instead that $p(x,z)>p(x,y)+p(y,z)$ and put $\delta=(p(x,z)-p(x,y)-p(y,z))/3>0$. By [L2], choose an $x$-to-$y$ chain of weight $a<p(x,y)+\delta$ and a $y$-to-$z$ chain of weight $b<p(y,z)+\delta$. Their concatenation has weight $a+b<p(x,y)+p(y,z)+2\delta<p(x,z)$ by [L3], contradicting that $p(x,z)$ is a lower bound of $W(x,z)$. Thus the triangle inequality holds, and $p$ is a pseudometric by [L1]. [step 1.1, L1, L2, L3]

2.2 A one-edge $E_n$-chain has weight $2^{-n}$, so $E_n\subseteq\{p\le2^{-n}\}$. [step 1.1]

2.3 If $p(x,y)\le2^{-n}$ with $n\ge1$, then [L4] gives $p(x,y)\le2^{-n}<2^{-(n-1)}$. Apply the epsilon property in [L2] with $\varepsilon=2^{-(n-1)}-p(x,y)>0$ to obtain a chain of weight less than $2^{-(n-1)}$. Step 1.2 gives $(x,y)\in E_{n-1}$. Thus $\{p\le2^{-n}\}\subseteq E_{n-1}$. [step 1.1, step 1.2, L2, L4]

3.1 Given $\varepsilon>0$, choose $n$ with $2^{-n}<\varepsilon$ by [L4]. Then $E_n\subseteq\{p\le2^{-n}\}\subseteq\{p<\varepsilon\}$, so the latter set is an entourage by upward closure. By [[def-gauge-of-pseudometrics]], $p$ is uniformly continuous for the original uniformity. [A2, step 2.2, L4, discharge-construct] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-pseudometric-from-a-normal-entourage-sequence",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf",
    "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
  ],
  "rationale": "Both sources state the normal-sequence metrization lemma with the same dyadic control inclusions and path-infimum pseudometric construction. The proof is a notation-adjusted expansion.",
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
      "fact": "A2",
      "source": "def-uniform-space-by-entourages",
      "source_section": "Definition",
      "quote": "A **uniformity** on $X$ is a filter $\\mathcal U$ on $X\\times X$ ([[def-filter]]) such that:",
      "uses": [
        "1.2",
        "3.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-filter",
      "source_section": "Definition",
      "quote": "**Convention: filters are proper.** Condition (F2) is part of the definition\nthroughout this library, so \"filter\" always means \"proper filter\". The competing\nconvention drops (F2), calls the resulting objects filters, and says **proper\nfilter** for one that omits $\\emptyset$. The two conventions differ by exactly one\nobject, since (F4) forces any family satisfying (F1), (F3) and (F4) that contains\n$\\emptyset$ to be all of $\\mathcal{P}(X)$: if $\\emptyset \\in \\mathcal{F}$ then\n$\\emptyset \\subseteq B \\subseteq X$ gives $B \\in \\mathcal{F}$ for every\n$B \\subseteq X$. That single extra object is the **improper filter**\n$\\mathcal{P}(X)$. This library follows the more widely adopted convention, in\nwhich the improper filter is not a filter; a reader arriving from the other\nconvention should read every unqualified \"filter\" below as \"proper filter\".",
      "uses": [
        "1.2",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-metric-space",
      "source_section": "Definition",
      "quote": "- **(M1) Separation.** $d(x,y) = 0$ if and only if $x = y$.\n- **(M2) Symmetry.** $d(x,y) = d(y,x)$.\n- **(M3) Triangle inequality.** $d(x,z) \\le d(x,y) + d(y,z)$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-infimum-property",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded below. Then $S$ has a\ngreatest lower bound in $\\mathbb{R}$ ([[def-infimum]]), and it is given by",
      "uses": [
        "1.1",
        "2.1",
        "2.3"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-inf-epsilon",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded below, and let $\\ell$ be a\nlower bound of $S$ ([[def-bounded-set]]). Then",
      "uses": [
        "1.1",
        "2.1",
        "2.3"
      ]
    },
    {
      "fact": "L2",
      "source": "def-infimum",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $\\ell \\in \\mathbb{R}$. Then $\\ell$ is a\n**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:",
      "uses": [
        "1.1",
        "2.1",
        "2.3"
      ]
    },
    {
      "fact": "L3",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Let $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for\n$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the\nupper index**, which is legitimate because of the recursion theorem\n([[thm-recursion]]). That theorem produces a function of one variable, so the\nrunning index has to be carried along inside the value: applying it to the set\n$A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function\n$f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique\n$g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let\n$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and\nfinite products as in [[def-finite-sum]]. Then:",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-rational-power-laws",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a, b > 0$ and let $r, s \\in \\mathbb{Q}$, with\nrational powers as in [[def-rational-power]]. Then:",
      "uses": [
        "1.1",
        "1.2",
        "2.3",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-rational-power-monotone",
      "source_section": "Statement",
      "quote": "1. **In the exponent.** If $a > 1$ then $a^{r} < a^{s}$; if $a = 1$ then $a^{r} = a^{s} = 1$; if $0 < a < 1$ then $a^{r} > a^{s}$.\n2. **In the base.** If $r \\in \\mathbb{Q}$ with $r > 0$ and $0 < a < b$, then $a^{r} < b^{r}$; so $a \\mapsto a^{r}$ is strictly increasing on $\\{a \\in \\mathbb{R} : a > 0\\}$.\n3. **Comparison with $1$.** For rational $t > 0$: $a > 1$ implies $a^{t} > 1$, and $0 < a < 1$ implies $a^{t} < 1$.",
      "uses": [
        "1.1",
        "1.2",
        "2.3",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-geometric-sequence-null",
      "source_section": "Statement",
      "quote": "Let $r \\in \\mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]).",
      "uses": [
        "1.1",
        "1.2",
        "2.3",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-strong-induction",
      "source_section": "Statement",
      "quote": "Let $P$ be a property of naturals such that for every $n \\in \\mathbb{N}$, if $P(m)$ holds for all $m < n$ then $P(n)$. Then $P(n)$ holds for all $n \\in \\mathbb{N}$. (At $n = 0$ the hypothesis is vacuous, so $P(0)$ is forced.)",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "For $x,y\\in X$, let $W(x,y)$ be the set of sums $\\sum_{i<k}2^{-n_i}$ over all finite chains $x=x_0,\\ldots,x_k=y$ with $(x_{i-1},x_i)\\in E_{n_i}$. This set is nonempty because the one-edge $E_0=X\\times X$ chain has weight $1$. Every dyadic term is positive by [L4], so every such finite sum is nonnegative by [L3]; hence $0$ is a lower bound. By [L2], the infimum exists; define $p(x,y):=\\inf W(x,y)$. [A1, L2, L3, L4, construct]",
      "step": "1.1",
      "inputs": [
        "L4",
        "L3",
        "L2",
        "A1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "We prove by strong induction on the number $k$ of edges, simultaneously for every $n$, that a $k$-edge chain of total weight less than $2^{-n}$ has $E_n$-related endpoints. For $k=0$ the endpoints coincide and hence are $E_n$-related by [A2]. Now let $k\\ge1$ and assume the claim for every shorter chain. Its total weight $w$ is positive by [L3] and [L4]. Take the first edge for which the cumulative weight through that edge exceeds $w/2$. The subchain before it has weight at most $w/2$, and the subchain after it has weight less than $w/2$; because $w<2^{-n}$, both are less than $2^{-(n+1)}$. They have fewer than $k$ edges, so the induction hypothesis makes both endpoint pairs $E_{n+1}$-related. The middle edge has weight $2^{-m}\\le w<2^{-n}$; strict decrease of the dyadic weights gives $m\\ge n+1$, and decreasingness of $(E_j)$ puts that edge in $E_{n+1}$. Thus the endpoints lie in $E_{n+1}^{\\circ3}\\subseteq E_n$. Strong induction proves the claim for every finite chain. [A1, A2, L3, L4, L5]",
      "step": "1.2",
      "inputs": [
        "A2",
        "L3",
        "L4",
        "A1",
        "L5"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The empty chain has weight $0$, while all weights are nonnegative, so $p(x,x)=0$. Reversing a chain preserves its weight because each $E_n$ is symmetric, so $p(x,y)=p(y,x)$. For the triangle inequality, suppose instead that $p(x,z)>p(x,y)+p(y,z)$ and put $\\delta=(p(x,z)-p(x,y)-p(y,z))/3>0$. By [L2], choose an $x$-to-$y$ chain of weight $a<p(x,y)+\\delta$ and a $y$-to-$z$ chain of weight $b<p(y,z)+\\delta$. Their concatenation has weight $a+b<p(x,y)+p(y,z)+2\\delta<p(x,z)$ by [L3], contradicting that $p(x,z)$ is a lower bound of $W(x,z)$. Thus the triangle inequality holds, and $p$ is a pseudometric by [L1]. [step 1.1, L1, L2, L3]",
      "step": "2.1",
      "inputs": [
        "L2",
        "L3",
        "L1",
        "1.1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "A one-edge $E_n$-chain has weight $2^{-n}$, so $E_n\\subseteq\\{p\\le2^{-n}\\}$. [step 1.1]",
      "step": "2.2",
      "inputs": [
        "1.1"
      ]
    },
    {
      "id": "step-2.3",
      "claim": "If $p(x,y)\\le2^{-n}$ with $n\\ge1$, then [L4] gives $p(x,y)\\le2^{-n}<2^{-(n-1)}$. Apply the epsilon property in [L2] with $\\varepsilon=2^{-(n-1)}-p(x,y)>0$ to obtain a chain of weight less than $2^{-(n-1)}$. Step 1.2 gives $(x,y)\\in E_{n-1}$. Thus $\\{p\\le2^{-n}\\}\\subseteq E_{n-1}$. [step 1.1, step 1.2, L2, L4]",
      "step": "2.3",
      "inputs": [
        "L4",
        "L2",
        "1.2",
        "1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Given $\\varepsilon>0$, choose $n$ with $2^{-n}<\\varepsilon$ by [L4]. Then $E_n\\subseteq\\{p\\le2^{-n}\\}\\subseteq\\{p<\\varepsilon\\}$, so the latter set is an entourage by upward closure. By [[def-gauge-of-pseudometrics]], $p$ is uniformly continuous for the original uniformity. [A2, step 2.2, L4, discharge-construct] ∎",
      "step": "3.1",
      "inputs": [
        "L4",
        "A2",
        "2.2"
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
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract after reading every numbered step and every cited target section; independent risk review remains for A6."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-pseudometric-from-a-normal-entourage-sequence",
    "sourcePage": "uniform-spaces",
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
    "source": "lem-pseudometric-from-a-normal-entourage-sequence",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-rational-power",
    "declared_target": "def-rational-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-pseudometric-from-a-normal-entourage-sequence",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-integer-power",
    "declared_target": "def-integer-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-pseudometric-from-a-normal-entourage-sequence",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-infimum",
    "declared_target": "def-infimum",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-pseudometric-from-a-normal-entourage-sequence",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-pseudometric-from-a-normal-entourage-sequence",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-gauge-of-pseudometrics",
    "declared_target": "def-gauge-of-pseudometrics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-pseudometric-from-a-normal-entourage-sequence",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-geometric-sequence-null",
    "declared_target": "lem-geometric-sequence-null",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-pseudometric-from-a-normal-entourage-sequence",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-infimum-property",
    "declared_target": "thm-infimum-property",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-pseudometric-from-a-normal-entourage-sequence",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-inf-epsilon",
    "declared_target": "lem-inf-epsilon",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-pseudometric-from-a-normal-entourage-sequence",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-pseudometric-from-a-normal-entourage-sequence",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-rational-power-laws",
    "declared_target": "lem-rational-power-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-pseudometric-from-a-normal-entourage-sequence",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-rational-power-monotone",
    "declared_target": "lem-rational-power-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-pseudometric-from-a-normal-entourage-sequence",
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
    "source": "lem-pseudometric-from-a-normal-entourage-sequence",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-filter",
    "declared_target": "def-filter",
    "target_statement_provenance": "literature-derived",
    "targetPage": "filters-and-ultrafilters",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-pseudometric-from-a-normal-entourage-sequence",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-strong-induction",
    "declared_target": "thm-strong-induction",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (15)

### `def-filter`

````markdown
---
id: def-filter
kind: definition
title: "Filter on a set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-power-set, def-subset-and-proper-subset,
       def-intersection-of-a-set-and-binary-intersection]
justified_by: []
aliases: [def-proper-filter]
landmark: false
short: "filter on $X$"
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
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "Filter (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(mathematics)"
    - title: "N. Bourbaki, General Topology: Chapters 1-4, Ch. I §6"
      url: "https://link.springer.com/book/9783540642411"
    - title: "B. Kaya, Ultrafilters and How to Use Them"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/village2019lecturenotes.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a set. A family $\mathcal{F} \subseteq \mathcal{P}(X)$ of subsets of
$X$ ([[def-power-set]], [[def-subset-and-proper-subset]]) is a **filter on $X$**
when it satisfies:

- **(F1)** *nontriviality*: $X \in \mathcal{F}$;
- **(F2)** *properness*: $\emptyset \notin \mathcal{F}$;
- **(F3)** *closure under pairwise intersection*
  ([[def-intersection-of-a-set-and-binary-intersection]]): if
  $A, B \in \mathcal{F}$ then $A \cap B \in \mathcal{F}$;
- **(F4)** *upward closure in $X$*: if $A \in \mathcal{F}$ and
  $A \subseteq B \subseteq X$ then $B \in \mathcal{F}$.

The set of all filters on $X$ is written $\mathrm{Filt}(X)$. It is a subset of
$\mathcal{P}(\mathcal{P}(X))$, hence a set, and it is ordered by inclusion:
$\mathcal{F} \subseteq \mathcal{G}$ is read "$\mathcal{G}$ is **finer** than
$\mathcal{F}$", and $\mathcal{F}$ is **coarser** than $\mathcal{G}$.

**Convention: filters are proper.** Condition (F2) is part of the definition
throughout this library, so "filter" always means "proper filter". The competing
convention drops (F2), calls the resulting objects filters, and says **proper
filter** for one that omits $\emptyset$. The two conventions differ by exactly one
object, since (F4) forces any family satisfying (F1), (F3) and (F4) that contains
$\emptyset$ to be all of $\mathcal{P}(X)$: if $\emptyset \in \mathcal{F}$ then
$\emptyset \subseteq B \subseteq X$ gives $B \in \mathcal{F}$ for every
$B \subseteq X$. That single extra object is the **improper filter**
$\mathcal{P}(X)$. This library follows the more widely adopted convention, in
which the improper filter is not a filter; a reader arriving from the other
convention should read every unqualified "filter" below as "proper filter".

## Remarks

- **The intuition is "large".** Read $A \in \mathcal{F}$ as "$A$ is a large subset
  of $X$", where largeness is relative to $\mathcal{F}$. Then (F1) says the whole
  space is large, (F2) says the empty set is not, (F3) says two large sets
  overlap largely, and (F4) says a superset of a large set is large. Properness
  is what stops "large" from being vacuous: without (F2) every subset counts as
  large and the notion carries no information, which is the mathematical reason
  the improper filter is excluded rather than a matter of taste.
- **$X \neq \emptyset$ follows.** By (F1) the set $X$ belongs to $\mathcal{F}$ and
  by (F2) the set $\emptyset$ does not, so $X \neq \emptyset$. Equivalently, there
  are **no filters on the empty set**: $\mathcal{P}(\emptyset) = \{\emptyset\}$,
  and any filter on $\emptyset$ would have to contain $\emptyset$ by (F1) and omit
  it by (F2). No hypothesis "$X \neq \emptyset$" is therefore needed anywhere
  below; it is delivered by the existence of a filter.
- **(F3) extends to any finite list of members** and not beyond: an intersection
  of infinitely many members of a filter is usually not a member, and demanding
  that it be one is a strictly stronger notion. The families that generate
  filters by finite intersections are exactly those with the finite intersection
  property ([[def-finite-intersection-property]], [[lem-fip-generates-filter]]).
- Filters are usually presented by a smaller family that they are generated from,
  a **filter base** ([[def-filter-base]], [[lem-filter-base-generates]]), because
  writing out every superset is neither possible nor informative.
- The maximal filters under the inclusion order recorded above are the
  **ultrafilters** ([[def-ultrafilter]]), and every filter is contained in one
  ([[thm-ultrafilter-lemma]]). Maximal here means maximal, not greatest: as soon
  as $X$ has two distinct points $x \neq y$ there is no finest filter, since a
  filter containing every filter would contain the principal filters at $x$ and
  at $y$, hence both $\{x\}$ and $\{y\}$, hence their intersection $\emptyset$,
  which (F2) forbids. Incomparability of those two principal filters is not the
  reason: incomparable elements are perfectly compatible with a greatest element
  above them both, and reading "maximal" as "greatest" is the error recorded in
  [[fs-maximal-is-greatest]]. The argument is set out in [[def-ultrafilter]].
````

### `def-finite-sum`

````markdown
---
id: def-finite-sum
kind: definition
title: "Finite sums and finite products, by recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, thm-induction-principle, def-ordered-field, def-natural-numbers, def-nat-addition, def-field, def-complete-ordered-field, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [def-finite-product]
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
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Empty sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_sum"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## Remarks

- **Why recursion and not "$a_0 + a_1 + \cdots + a_{n-1}$".** The dots are not a
  definition: they presuppose that the displayed pattern determines a value for
  every $n$, which is exactly what the recursion theorem
  ([[thm-recursion]]) supplies, and its uniqueness clause is what makes
  $\sum_{k<n} a_k$ a single well-determined real rather than a family of choices.
  Associativity and commutativity of addition are *not* used in the definition;
  they are used in the laws proved from it ([[lem-finite-sum-laws]]).
- **Naturals and rationals inside $\mathbb{R}$ (a convention used on the whole
  page).** A natural number $n$ and a rational number $r$ are not literally
  elements of $\mathbb{R}$: they enter $\mathbb{R}$ through the canonical
  embedding $\iota : \mathbb{Q} \to \mathbb{R}$, which is an injective,
  order-preserving field homomorphism ([[lem-of-q-embeds]]), restricting on
  positive naturals to $n \mapsto n \cdot 1_{\mathbb{R}} = 1_\mathbb{R} + \cdots + 1_\mathbb{R}$
  ([[lem-of-naturals-positive]]). Following ordinary practice, and only where no
  confusion is possible, we write $n$ for $\iota(n)$ and $r$ for $\iota(r)$; so,
  for instance, $\frac{1}{n}\sum_{k<n} a_k$ means
  $\iota(n)^{-1} \cdot \sum_{k<n} a_k$, which makes sense because
  $\iota(n) > 0$ for $n \ge 1$. Exponents are the one place where the
  identification is deliberately NOT made: in $a^n$ and $a^r$ the exponent stays
  a natural, an integer or a rational ([[def-integer-power]],
  [[def-rational-power]]), never a real.
- The two indexings are related by $\sum_{k=0}^{n} a_k = \sum_{k < n+1} a_k$, so
  a statement proved for one is available for the other. Sums over $k < n$ are
  the primitive form here because $\Sigma_0$, the empty sum, is then the base
  case of every induction, and no index outside $\mathbb{N}$ is ever needed.
````

### `def-gauge-of-pseudometrics`

````markdown
---
id: def-gauge-of-pseudometrics
kind: definition
title: "A gauge of pseudometrics and, on a nonempty set, the uniformity it generates"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-uniform-space-by-entourages, def-filter-base, lem-filter-base-generates]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Definition

A **gauge of pseudometrics** on $X$ is a family $\mathcal P$ of pseudometrics ([[def-metric-space]]). For finite $F\subseteq\mathcal P$ and $\varepsilon>0$, put $E(F,\varepsilon)=\{(x,y):p(x,y)<\varepsilon\text{ for every }p\in F\}$. If $X\ne\varnothing$, these sets form a filter base and generate a uniformity ([[def-filter-base]], [[lem-filter-base-generates]]), called the uniformity **generated by $\mathcal P$**.

For an already given uniformity $\mathcal U$ on $X$, a pseudometric $p$ is
**uniformly continuous for $\mathcal U$** when
$$
\{(x,y):p(x,y)<\varepsilon\}\in\mathcal U
$$
for every $\varepsilon>0$. With this terminology, each member of a gauge is
uniformly continuous for the uniformity generated by that gauge.
````

### `def-infimum`

````markdown
---
id: def-infimum
kind: definition
title: "Greatest lower bound (infimum)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-set]
justified_by: [lem-sup-unique]
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
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $\ell \in \mathbb{R}$. Then $\ell$ is a
**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:

- $\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\ell \le s$ for
  every $s \in S$;
- $\ell' \le \ell$ for every lower bound $\ell'$ of $S$.

Written out in one line:

$$\ell \text{ is an infimum of } S \iff \big[(\forall s \in S)\, \ell \le s\big] \text{ and } \big[(\forall \ell' \in \mathbb{R})\, \big((\forall s \in S)\, \ell' \le s\big) \Rightarrow \ell' \le \ell\big].$$

An infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write
$\inf S$ for it.

## Remarks

- This is the exact dual of the least upper bound (supremum) of
  [[def-complete-ordered-field]]: reverse every inequality and swap "least" for
  "greatest". The two notions are related by reflection through $0$
  ([[lem-reflection]]).
- Existence is deliberately *not* part of the definition. That every nonempty
  subset of $\mathbb{R}$ which is bounded below actually has an infimum is a
  theorem, [[thm-infimum-property]], derived from the least-upper-bound property;
  it is not an axiom and it is not free.
- As with a supremum, an infimum need not belong to $S$; when it does, it is the
  minimum of $S$ ([[def-max-min]]).
- The usable form of the definition in later arguments is the epsilon
  characterisation [[lem-inf-epsilon]]: $\ell = \inf S$ exactly when $\ell$ is a
  lower bound that cannot be raised by any positive amount without losing that
  property.
````

### `def-integer-power`

````markdown
---
id: def-integer-power
kind: definition
title: "Integer powers $a^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, def-ordered-field, def-integers, def-field, def-int-operations, lem-nat-embeds-int, lem-of-inverse-unique, lem-of-no-zero-divisors, lem-of-zero-mult, thm-int-ordered-ring]
justified_by: [lem-power-laws]
aliases: [def-power]
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
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$, where $\mathbb{R}$ is the ambient ordered field
([[def-ordered-field]], [[def-field]]).

**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to
the set $\mathbb{R}$, the starting element $1$ and the function
$f(x) = x \cdot a$, there is a unique function $\mathbb{N} \to \mathbb{R}$,
written $n \mapsto a^n$, with

$$a^0 = 1, \qquad a^{n+1} = a^n \cdot a \quad (n \in \mathbb{N}).$$

Thus $a^1 = a$, $a^2 = a \cdot a$, and so on. Note that this is defined for
**every** $a$, including $a = 0$.

**Negative exponents.** If $a \ne 0$ and $n \in \mathbb{N}$ with $n \ge 1$, set

$$a^{-n} := (a^n)^{-1}.$$

**Why that is legitimate.** The right-hand side presupposes that $a^n$ is
invertible, that is, that $a^n \ne 0$. This is a proof obligation and not an
observation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \ne 0$
in a field, $a^n \ne 0$ for every $n \in \mathbb{N}$, proved there by induction on
$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).
That lemma is a statement *about* the operation introduced here, so it depends on
this definition and is recorded in this item's `justified_by` rather than in its
`deps` (SCHEMA §3). Given $a^n \ne 0$, the value $(a^n)^{-1}$ is a single
well-determined element, because multiplicative inverses in a field are unique
([[lem-of-inverse-unique]]).

**Integer exponents.** Every integer $m$ ([[def-integers]]) is either
$\iota(n)$ or $-\iota(n)$ for a unique natural $n$, where $\iota$ is the
embedding $\mathbb{N} \to \mathbb{Z}$ ([[lem-nat-embeds-int]],
[[def-int-operations]]). This too is a citation and not a slogan: the order on
$\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \ge 0$ or $m < 0$; the
image of $\iota$ is exactly the set of nonnegative integers, and each of them is
$\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then
$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),
so $-m = \iota(n)$ and $m = -\iota(n)$, with $n$ unique because $\iota$ is
injective. The two clauses above therefore define $a^m$ for every
$m \in \mathbb{Z}$ whenever $a \ne 0$, and for every $m \in \mathbb{N}$ for
arbitrary $a$. The clauses are consistent where they overlap: the only overlap is
$m = 0$, where $-\iota(0) = \iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.

## Remarks

- **The convention $0^0 = 1$ is adopted here**, and it is not a matter of taste
  but of agreement with the recursion above: $a^0 = 1$ is the starting value for
  every $a$, exactly as the empty product is $1$ ([[def-finite-sum]]). This is
  the convention that makes the empty product, the binomial theorem, and
  polynomial notation $\sum_k c_k x^k$ work at $x = 0$ without an exception. The
  competing convention "$0^0$ undefined" belongs to contexts where $x^y$ is
  studied as a function of two *real* variables and one wants continuity, which
  is unavailable and irrelevant here: the exponent in $a^m$ is an integer, never
  a real.
- $0^n = 0$ for every $n \ge 1$, since $0^{n} = 0^{n-1} \cdot 0 = 0$, a product
  with a zero factor ([[lem-of-zero-mult]]); and
  $0^{-n}$ is not defined for $n \ge 1$, since $0$ has no inverse.
- The exponent is an integer and stays an integer. Rational exponents are a
  separate construction resting on the existence of roots
  ([[thm-nth-roots-exist]], [[def-rational-power]]), and real exponents do not
  exist in this library yet ([[rem-real-exponents-deferred]]).
- The laws $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$ are
  proved, not assumed, in [[lem-power-laws]]; the order behaviour of $a \mapsto a^n$
  is [[lem-power-monotone]].
````

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

### `def-rational-power`

````markdown
---
id: def-rational-power
kind: definition
title: "Rational powers $a^r$ of a positive base"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-nth-roots-exist, def-integer-power, def-rationals, lem-rat-positive-denominator, lem-nat-embeds-int, def-rat-order, lem-power-monotone, lem-power-laws, lem-of-inverse-positive]
justified_by: [lem-rational-power-well-defined]
aliases: []
landmark: true
short: "$a^{m/n} := (a^{1/n})^m$, $a>0$"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-04
    scope: published-audit-targeted
    context_sha256: 22067f1978d2f781dd7327a6f5c81cccbbc2009bd13885930f7d56ba5a2ceb5e
    item_sha256: 4f75fe6e8c39549d9a1c82a4fc920d13b890d3917b367621daddcaf70f377565
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$ with $a > 0$ and let $r \in \mathbb{Q}$ ([[def-rationals]]).

Every rational has a representative with positive denominator
([[lem-rat-positive-denominator]]), so write $r = m/n$ with $m \in \mathbb{Z}$
and $n$ a positive integer; a positive integer is the image of a unique natural
$\ge 1$ ([[lem-nat-embeds-int]]), and we write $n$ for that natural too. Define

$$a^{r} := \big(a^{1/n}\big)^{m},$$

where $a^{1/n}$ is the unique nonnegative $n$-th root of $a$
([[thm-nth-roots-exist]]) and the outer exponent is an integer power
([[def-integer-power]]). The outer power is legitimate because $a^{1/n} > 0$ when
$a > 0$, so it has an inverse and negative integer exponents are allowed.

**Well-definedness.** The right-hand side must not depend on which representative
$m/n$ of $r$ was chosen. It does not: that is [[lem-rational-power-well-defined]],
which is recorded in this item's `justified_by` rather than in its `deps`, since
it is a statement *about* the operation defined here and therefore depends on
this definition.

**The base must be positive.** For $a < 0$ the same formula is not a definition
at all, because different representatives of the same rational give different
answers, or no answer: see [[fs-rational-power-of-negative-base]], which is
exactly the item that justifies the restriction.

**Supplementary clause for the base $0$.** For $a = 0$ and rational $r > 0$
([[def-rat-order]]) the displayed formula still makes sense and still does not
depend on the representative: $r > 0$ forces $m \ge 1$, and
$\big(0^{1/n}\big)^{m} = 0^{m} = 0$ ([[thm-nth-roots-exist]] applies to every
$a \ge 0$). So we set $0^{r} = 0$ for rational $r > 0$. For $r < 0$ the
expression $0^{r}$ is left undefined, since $0$ has no inverse. This clause is
what lets the inequalities later on this page be stated for nonnegative entries
rather than for positive ones only.

## Remarks

- **Consistency with integer powers.** If $r \in \mathbb{Z}$ then $r = r/1$,
  $a^{1/1} = a$ ([[thm-nth-roots-exist]]), and the definition returns
  $(a^{1})^{r} = a^{r}$ as given by [[def-integer-power]]. So the notation $a^{r}$
  is unambiguous, and rational powers extend integer powers on positive bases.
  At $r = 1/n$ it returns $\big(a^{1/n}\big)^{1} = a^{1/n}$, so the root notation
  of [[thm-nth-roots-exist]] is the special case $r = 1/n$, as intended.
- $a^{r} > 0$ for every $a > 0$ and **every** $r \in \mathbb{Q}$, the exponent $0$
  included. Writing $r = m/n$ with $n \ge 1$: the root $a^{1/n}$ is positive
  ([[thm-nth-roots-exist]]); for $m \ge 0$ the value $\big(a^{1/n}\big)^{m}$ is a
  natural power of a positive element, hence positive, which is claim 1 of
  [[lem-power-monotone]] and covers $m = 0$ as well, since $a^{0} = 1 > 0$; and for
  $m < 0$ the value is $\big(a^{1/n}\big)^{m} = \Big(\big(a^{1/n}\big)^{-m}\Big)^{-1}$
  ([[lem-power-laws]], claim 2), the inverse of a positive element, hence positive
  ([[lem-of-inverse-positive]]). Note that [[lem-power-monotone]] is stated for
  natural exponents only, so it does not by itself settle the negative case; that
  is what the inverse step is for. The exponent laws are
  [[lem-rational-power-laws]] and the order behaviour is
  [[lem-rational-power-monotone]].
- **The exponent is a rational, never a real.** Nothing on this page is a limit,
  a series or a continuous function, and $a^{r}$ is computed in finitely many
  field operations once the root is available. What would be needed to go
  further, why it is deferred here, and where the library later defines $a^{x}$
  for real $x$ are recorded in [[rem-real-exponents-deferred]].
- The convention $0^0 = 1$ of [[def-integer-power]] is untouched: $r = 0$ is not
  covered by the supplementary clause, which asks for $r > 0$. So $0^0 = 1$ while
  $0^{r} = 0$ for every rational $r > 0$. There is no inconsistency, only the
  familiar fact that the two-variable function $(a, r) \mapsto a^{r}$ has no
  continuous extension to $(0,0)$, a statement this library cannot even make yet.
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

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
````

### `lem-geometric-sequence-null`

````markdown
---
id: lem-geometric-sequence-null
kind: lemma
title: "For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, lem-power-laws, lem-bernoulli-inequality, lem-power-monotone, cor-archimedean-reciprocal, thm-of-archimedean, def-real-limit, def-sequence, def-divergence-to-infinity, lem-of-inverse-positive, lem-of-abs-value, def-abs-value, cor-of-one-positive, prop-of-reciprocal-order, thm-induction-principle, prop-of-multiply-inequalities, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
forward_refs: [cex-cauchy-rationals-no-rational-limit]
aliases: []
landmark: false
proof_strategy: cases
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
    - title: "Geometric progression (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_progression"
    - title: "Bernoulli's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bernoulli%27s_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.20(b))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.5 (Lem 6.5.2)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
---

## Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]).

1. If $|r| < 1$ then $(r^k)$ is **null**, that is $r^k \to 0$
   ([[def-real-limit]]).
2. If $|r| > 1$ then $(|r|^k)$ **diverges to $+\infty$**
   ([[def-divergence-to-infinity]]).

Claim 2 is stated for $|r|^k$ and not for $r^k$ on purpose: for $r < -1$ the
terms $r^k$ alternate in sign and are unbounded, so they neither converge nor
diverge to $+\infty$; what is true of them is the statement about their absolute
values.

Both claims come from Bernoulli's inequality ([[lem-bernoulli-inequality]]) and
the Archimedean property. Nothing here needs the least-upper-bound property
except through [[thm-of-archimedean]] and [[cor-archimedean-reciprocal]].

## Facts & Assumptions

**Given:** A real $r$, with integer powers as in [[def-integer-power]]; for $n \in \mathbb{N}$, the symbol $n$ also denotes the canonical natural $n \cdot 1_{\mathbb{R}}$ where it occurs in an arithmetic expression.

[L1] Absolute value: $|x| \ge 0$; $|x| = 0$ exactly when $x = 0$; $|xy| = |x|\,|y|$; and $|x| = x$ when $x \ge 0$, so in particular $|1| = 1$ because $1 > 0$ ([[lem-of-abs-value]], [[def-abs-value]], [[cor-of-one-positive]]).

[L2] Induction principle ([[thm-induction-principle]]), and the recursion clauses $a^0 = 1$, $a^{k+1} = a^k a$ defining integer powers ([[def-integer-power]]).

[L3] Bernoulli's inequality: $(1+x)^n \ge 1 + nx$ for $x \ge -1$ and $n \in \mathbb{N}$ ([[lem-bernoulli-inequality]]).

[L4] Power laws: $(ab)^n = a^n b^n$, and $a^n \ne 0$ when $a \ne 0$ ([[lem-power-laws]]).

[L5] Powers and order: $a \ge 0$ gives $a^n \ge 0$ and $a > 0$ gives $a^n > 0$; $1^n = 1$ for every $n$ ([[lem-power-monotone]]).

[L6] Reciprocals: $a > 0$ gives $a^{-1} > 0$; $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); and $0 < t < 1$ exactly when $1/t > 1$ ([[prop-of-reciprocal-order]]).

[L7] Archimedean property: for every $x \in \mathbb{R}$ there is a natural $n \ge 1$ with $x < n$ ([[thm-of-archimedean]]); and for every $\varepsilon > 0$ there is a natural $N \ge 1$ with $1/N < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L8] Canonical naturals: $n > 0$ for $n \ge 1$, and $m \le n$ in $\mathbb{N}$ gives $m \le n$ in $\mathbb{R}$ ([[lem-of-naturals-positive]]).

[L9] Multiplying inequalities of nonnegatives: $0 \le a \le b$ and $0 \le c \le d$ give $ac \le bd$ ([[prop-of-multiply-inequalities]]).

[L10] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L11] Convergence to $0$ and divergence to $+\infty$ for a sequence of reals; a rational test value $\varepsilon > 0$ is in particular a real one ([[def-real-limit]], [[def-divergence-to-infinity]], [[def-sequence]]).

## Proof

**Proof technique:** cases.

1.1 First, $|r^k| = |r|^k$ for every $k \in \mathbb{N}$, by induction: at $k = 0$ both sides are $|1| = 1$, and if $|r^k| = |r|^k$ then $|r^{k+1}| = |r^k r| = |r^k|\,|r| = |r|^k |r| = |r|^{k+1}$. [given, L1, L2]

1.2 **Case zero.** Assume $r = 0$. [given, assume-case zero]

1.3 **Case small.** Assume $0 < |r| < 1$. [given, assume-case small]

1.4 **Case large.** Assume $|r| > 1$. [given, assume-case large]

2.1 In case zero, $r^k = 0$ for every $k \ge 1$: indeed $r^1 = r^0 r = 1 \cdot 0 = 0$, and if $r^k = 0$ then $r^{k+1} = r^k r = 0$, so induction gives the claim from $k = 1$ on. [step 1.2, L2]

2.2 In case small, put $s := 1/|r|$, which is defined since $|r| \ne 0$, and $h := s - 1$. Then $s > 1$ and $h > 0$. [step 1.3, L1, L6, choose]

2.3 In case large, put $h' := |r| - 1$, so $h' > 0$ and $|r| = 1 + h'$. [step 1.4, choose]

3.1 In case zero, for every rational $\varepsilon > 0$ and every $k \ge 1$ we have $|r^k - 0| = |0| = 0 < \varepsilon$, so $r^k \to 0$ and claim 1 holds. [step 2.1, L1, L11]

3.2 In case small, $|r|^k s^k = (|r| s)^k = 1^k = 1$, so $|r|^k = 1/s^k$, and $s^k > 0$. [step 2.2, L4, L5]

3.3 In case small, Bernoulli applied to $h > 0 \ge -1$ gives $s^k = (1+h)^k \ge 1 + kh > kh > 0$ for every $k \ge 1$, using $1 > 0$ and $kh > 0$. [step 2.2, L3, L8, L9]

3.4 In case large, Bernoulli applied to $h' > 0 \ge -1$ gives $|r|^k = (1 + h')^k \ge 1 + k h'$ for every $k \in \mathbb{N}$. [step 2.3, L3]

3.5 In case large, let $M \in \mathbb{R}$ be arbitrary and use [L7] to fix a natural $n \ge 1$ with $M/h' < n$; then $M \le n h'$, since multiplying $M/h' \le n$ by $h' > 0$ preserves the inequality. [step 2.3, L7, L9, choose]

3.6 In case small, let $\varepsilon > 0$ be rational; then $\varepsilon h > 0$, so [L7] supplies a natural $N \ge 1$ with $1/N < \varepsilon h$, whence $1/(Nh) \le \varepsilon$ on multiplying by $1/h > 0$. [step 2.2, L6, L7, L9, choose]

4.1 In case small, combining steps 3.2 and 3.3: $0 < kh < s^k$ gives $|r|^k = 1/s^k < 1/(kh)$ for every $k \ge 1$. [step 3.2, step 3.3, L6]

4.2 In case large, for every $k \ge n$ we have $k h' \ge n h' \ge M$, so $|r|^k \ge 1 + k h' \ge 1 + M > M$, the last step because $1 > 0$. [step 3.4, step 3.5, L1, L8, L9]

5.1 In case small, for every $k \ge N$ we have $kh \ge Nh > 0$, hence $1/(kh) \le 1/(Nh) \le \varepsilon$, and therefore $|r^k - 0| = |r^k| = |r|^k < 1/(kh) \le \varepsilon$. [step 1.1, step 4.1, step 3.6, L6, L8, L9]

5.2 In case large, an index $n$ has been produced for an arbitrary real $M$ with $|r|^k > M$ for all $k \ge n$, which is exactly divergence to $+\infty$: claim 2 holds. [step 4.2, L11]

6.1 In case small, the rational $\varepsilon > 0$ was arbitrary and the index $N$ was produced from it, so $r^k \to 0$ and claim 1 holds. [step 5.1, L11]

7.1 The hypothesis $|r| < 1$ of claim 1 is exhausted by cases zero and small, since $|r| \ge 0$ with $|r| = 0$ exactly when $r = 0$, so trichotomy leaves only $0 < |r| < 1$; the hypothesis $|r| > 1$ of claim 2 is case large. Both claims are therefore established. [step 3.1, step 5.2, step 6.1, L1, L10, cases: zero small or large, cases-exhaustive] ∎

## Remarks

- **The two claims are not one claim in disguise.** For $|r| > 1$ the sequence
  $(r^k)$ itself has no limiting behaviour to record when $r$ is negative: its
  terms alternate in sign and grow, so it neither converges nor diverges to
  $+\infty$ nor to $-\infty$. Stating claim 2 for $|r|^k$ is what makes it true
  as written.

- **The boundary $|r| = 1$ is excluded and is genuinely different.** For $r = 1$
  the sequence is constant $1$; for $r = -1$ it is the alternating sequence
  ([[lem-alternating-sequence]]), which is bounded and divergent
  ([[fs-bounded-implies-convergent]]). So neither claim extends to $|r| = 1$, and
  the two cases at the boundary do not even agree with each other.

- **Where this is used.** Claim 1 supplies the null sequence $c^{k}$ that makes a
  contractive sequence Cauchy ([[thm-contractive-implies-cauchy]]) and the null
  sequence $(1/10)^n$ that identifies the limit of the decimal truncations of
  $\sqrt 2$ ([[cex-cauchy-rationals-no-rational-limit]]).
````

### `lem-inf-epsilon`

````markdown
---
id: lem-inf-epsilon
kind: lemma
title: "Epsilon characterisation of the infimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-sup-epsilon, thm-infimum-property, lem-reflection, def-bounded-set,
       lem-of-add-order, lem-of-inverse-unique, def-field]
justified_by: []
aliases: []
landmark: false
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
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below, and let $\ell$ be a
lower bound of $S$ ([[def-bounded-set]]). Then

$$\ell = \inf S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } s < \ell + \varepsilon.$$

In words: among the lower bounds of $S$, the infimum is exactly the one that
cannot be raised by any positive amount and still bound $S$ from below.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded below, a lower bound $\ell$ of $S$, and the reflection $T := -S = \{-s : s \in S\}$.

[L1] Reflection, at the level of sets: $S$ is nonempty exactly when $T$ is; $\ell$ is a lower bound of $S$ exactly when $-\ell$ is an upper bound of $T$; and $S$ is bounded below exactly when $T$ is bounded above ([[lem-reflection]]). Elementwise, negation reverses the order: $-(-a) = a$, because $(-a) + a = 0$ and additive inverses are unique ([[def-field]], [[lem-of-inverse-unique]]); and $a < b$ exactly when $-b < -a$, because translation invariance applied with the constant $-a - b$ turns $a < b$ into $-b < -a$ and, applied with the constant $a + b$, turns it back ([[lem-of-add-order]]).

[L2] Every nonempty $S \subseteq \mathbb{R}$ bounded below has an infimum, and $\inf S = -\sup(-S) = -\sup T$ ([[thm-infimum-property]]).

[L3] Epsilon characterisation of the supremum: for a nonempty $X \subseteq \mathbb{R}$ bounded above and an upper bound $v$ of $X$, one has $v = \sup X$ if and only if for every $\varepsilon > 0$ there is $x \in X$ with $v - \varepsilon < x$ ([[lem-sup-epsilon]]).

## Proof

**Proof technique:** direct.

1.1 Since $S$ is nonempty and bounded below and $\ell$ is a lower bound of $S$, the set $T$ is nonempty and $-\ell$ is an upper bound of $T$, so $T$ is nonempty and bounded above. [given, L1]

1.2 For $s \in \mathbb{R}$ and $\varepsilon > 0$, negation turns the inequality $(-\ell) - \varepsilon < -s$ into $s < \ell + \varepsilon$ and back, because $-(-s) = s$ and $-\big((-\ell) - \varepsilon\big) = \ell + \varepsilon$. [L1, algebra]

2.1 By [L2] the infimum of $S$ exists and equals $-\sup T$; hence $\ell = \inf S$ holds if and only if $\ell = -\sup T$, which by negating both sides holds if and only if $-\ell = \sup T$. [step 1.1, L2, L1]

3.1 Applying [L3] to the nonempty bounded-above set $T$ and its upper bound $-\ell$: $-\ell = \sup T$ if and only if for every $\varepsilon > 0$ there is $t \in T$ with $(-\ell) - \varepsilon < t$. [step 1.1, step 2.1, L3]

4.1 The elements of $T$ are exactly the $-s$ with $s \in S$, so by 1.2 the condition "there is $t \in T$ with $(-\ell) - \varepsilon < t$" is equivalent to "there is $s \in S$ with $s < \ell + \varepsilon$". [step 1.2, step 3.1, L1]

5.1 Chaining the equivalences, $\ell = \inf S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $s < \ell + \varepsilon$. [step 2.1, step 3.1, step 4.1] ∎
````

### `lem-rational-power-laws`

````markdown
---
id: lem-rational-power-laws
kind: lemma
title: "Laws of rational exponents"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-rational-power, lem-rational-power-well-defined, lem-power-laws, thm-nth-roots-exist, def-rat-operations, lem-power-monotone, def-rationals, def-integer-power, lem-of-inverse-positive, def-rat-order, thm-rat-ordered-field, lem-of-zero-mult]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a, b > 0$ and let $r, s \in \mathbb{Q}$, with
rational powers as in [[def-rational-power]]. Then:

1. $a^{r} > 0$.
2. $a^{r+s} = a^{r} a^{s}$.
3. $(ab)^{r} = a^{r} b^{r}$; in particular $\big(ab\big)^{1/N} = a^{1/N} b^{1/N}$ for every natural $N \ge 1$.
4. $a^{-r} = \big(a^{r}\big)^{-1} = 1/a^{r}$.
5. $\big(a^{r}\big)^{s} = a^{rs}$.

Claims 2 and 3 persist in the supplementary case of [[def-rational-power]]: for
$a, b \ge 0$ and rationals $r, s > 0$ ([[def-rat-order]]) one still has
$(ab)^{r} = a^{r} b^{r}$ and $a^{r+s} = a^{r} a^{s}$. The two identities degenerate
differently, and it is worth saying how. In the product identity, a zero base on
either side makes both sides $0$. In the addition identity only the base $a$
occurs, so it degenerates only when $a = 0$, and then both sides are $0$; when
$a > 0$ that identity holds with no hypothesis on $b$ at all.

## Facts & Assumptions

**Given:** Reals $a, b > 0$ and rationals $r, s$.

[L1] Definition and well-definedness ([[def-rational-power]], [[lem-rational-power-well-defined]]): for ANY representative $r = m/N$ with $m \in \mathbb{Z}$ and $N \ge 1$ natural, $a^{r} = \big(a^{1/N}\big)^{m}$; and $a^{1/N}$ is the unique $x \ge 0$ with $x^{N} = a$ ([[thm-nth-roots-exist]]), which is $> 0$ when $a > 0$.

[L2] Laws of integer exponents ([[lem-power-laws]], [[def-integer-power]]): for $x, y \ne 0$ and integers $j, k$, $x^{j+k} = x^{j}x^{k}$, $(x^{j})^{k} = x^{jk}$, $(xy)^{j} = x^{j}y^{j}$ and $x^{-j} = (x^{j})^{-1}$.

[L3] Positivity and injectivity: $x > 0$ implies $x^{j} > 0$ for every NATURAL $j$ ([[lem-power-monotone]], claim 1), and hence for every integer $j$, since $x^{-j} = \big(x^{j}\big)^{-1}$ ([[lem-power-laws]], claim 2) and the inverse of a positive element is positive ([[lem-of-inverse-positive]]); and $x \mapsto x^{N}$ is injective on $\{x \ge 0\}$ for $N \ge 1$ ([[lem-power-monotone]], claim 2).

[L4] Rational arithmetic ([[def-rat-operations]], [[def-rationals]]): any two rationals can be written with a common positive denominator, $m/N + k/N = (m+k)/N$, $-(m/N) = (-m)/N$, and $(m/n)(p/q) = (mp)/(nq)$.

[L5] The order on $\mathbb{Q}$ ([[thm-rat-ordered-field]], [[def-rat-order]]) is compatible with addition, so $r > 0$ and $s > 0$ imply $r + s > 0$.

[L6] The supplementary clause of [[def-rational-power]]: $0^{t} = 0$ for every rational $t > 0$, while $0^{t}$ is left undefined for rational $t < 0$ and the convention $0^{0} = 1$ of [[def-integer-power]] is untouched. In a field, a product with a factor $0$ is $0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** direct.

1.1 Choose a common denominator: there are a natural $N \ge 1$ and integers $m, k$ with $r = m/N$ and $s = k/N$; then $r + s = (m+k)/N$ and $-r = (-m)/N$. [L4]

1.2 Roots of a product: for $a, b > 0$ and $N \ge 1$ the element $a^{1/N} b^{1/N}$ is positive and satisfies $\big(a^{1/N} b^{1/N}\big)^{N} = \big(a^{1/N}\big)^{N}\big(b^{1/N}\big)^{N} = ab$, so by uniqueness of the nonnegative $N$-th root $\big(ab\big)^{1/N} = a^{1/N} b^{1/N}$. [L1, L2, L3]

2.1 Claim 1: $a^{r} = \big(a^{1/N}\big)^{m}$ with $a^{1/N} > 0$, and a positive element has positive integer powers, so $a^{r} > 0$. [step 1.1, L1, L3]

2.2 Claim 3: $(ab)^{r} = \big((ab)^{1/N}\big)^{m} = \big(a^{1/N} b^{1/N}\big)^{m} = \big(a^{1/N}\big)^{m}\big(b^{1/N}\big)^{m} = a^{r} b^{r}$, using the root-of-a-product identity and then the integer product law. [step 1.1, step 1.2, L1, L2]

3.1 Claim 2: $a^{r+s} = \big(a^{1/N}\big)^{m+k} = \big(a^{1/N}\big)^{m}\big(a^{1/N}\big)^{k} = a^{r} a^{s}$, the middle equality being the integer addition law applied to the nonzero base $a^{1/N}$. [step 1.1, step 2.1, L1, L2]

3.2 Claim 4: $a^{-r} = \big(a^{1/N}\big)^{-m} = \Big(\big(a^{1/N}\big)^{m}\Big)^{-1} = \big(a^{r}\big)^{-1}$. [step 1.1, step 2.1, L1, L2]

3.3 Claim 5: write $r = m/n$ and $s = p/q$ with $n, q \ge 1$, and put $x := a^{1/(nq)}$, so $x > 0$ and $x^{nq} = a$; then $\big(x^{q}\big)^{n} = x^{qn} = a$ with $x^{q} > 0$, so $x^{q} = a^{1/n}$ by uniqueness of the nonnegative $n$-th root; putting $z := x^{m}$ we get $z > 0$ and $z^{q} = \big(x^{m}\big)^{q} = \big(x^{q}\big)^{m} = \big(a^{1/n}\big)^{m} = a^{r}$, so $z$ is the nonnegative $q$-th root of $a^{r}$, that is $z = \big(a^{r}\big)^{1/q}$; therefore $\big(a^{r}\big)^{s} = \Big(\big(a^{r}\big)^{1/q}\Big)^{p} = z^{p} = \big(x^{m}\big)^{p} = x^{mp} = \big(a^{1/(nq)}\big)^{mp} = a^{(mp)/(nq)} = a^{rs}$. [step 2.1, L1, L2, L3, L4]

3.4 The supplementary nonnegative case, product identity: let $a, b \ge 0$ and let $r > 0$ be rational; if $a > 0$ and $b > 0$ this is step 2.2, and otherwise $a = 0$ or $b = 0$, so $ab = 0$ and the left side is $0^{r} = 0$, while the right side $a^{r}b^{r}$ has a factor $0^{r} = 0$ and is therefore $0$ as well. [step 2.2, L6]

4.1 The supplementary nonnegative case, addition identity: the identity $a^{r+s} = a^{r}a^{s}$ involves the base $a$ only, so nothing need be assumed about $b$; for $a > 0$ it is step 3.1 verbatim, which uses only $a > 0$, and both sides are then positive rather than $0$; for $a = 0$ the exponents satisfy $r + s > 0$, so the left side is $0^{r+s} = 0$ and the right side is $0 \cdot 0 = 0$. [step 3.1, L5, L6]

5.1 All five claims hold for positive bases and arbitrary rational exponents, together with the two supplementary identities for nonnegative bases and positive rational exponents. [step 2.1, step 3.1, step 3.2, step 2.2, step 3.3, step 3.4, step 4.1] ∎
````

### `lem-rational-power-monotone`

````markdown
---
id: lem-rational-power-monotone
kind: lemma
title: "Monotonicity of $r \\mapsto a^{r}$ and of $a \\mapsto a^{r}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-rational-power, lem-rational-power-laws, lem-power-monotone, lem-power-laws, lem-rational-power-well-defined, def-rat-order, def-int-order, lem-nat-embeds-int, thm-nth-roots-exist, lem-rat-positive-denominator, lem-of-sign-rules, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a \in \mathbb{R}$ with $a > 0$ and let $r, s \in \mathbb{Q}$ with $r < s$
([[def-rat-order]]), with rational powers as in [[def-rational-power]].

1. **In the exponent.** If $a > 1$ then $a^{r} < a^{s}$; if $a = 1$ then $a^{r} = a^{s} = 1$; if $0 < a < 1$ then $a^{r} > a^{s}$.
2. **In the base.** If $r \in \mathbb{Q}$ with $r > 0$ and $0 < a < b$, then $a^{r} < b^{r}$; so $a \mapsto a^{r}$ is strictly increasing on $\{a \in \mathbb{R} : a > 0\}$.
3. **Comparison with $1$.** For rational $t > 0$: $a > 1$ implies $a^{t} > 1$, and $0 < a < 1$ implies $a^{t} < 1$.

## Facts & Assumptions

**Given:** A real $a > 0$ and rationals $r < s$; write $t := s - r$, a rational with $t > 0$.

[L1] Positive rationals have positive representatives: $t > 0$ can be written $t = m/N$ with $m, N$ naturals and $m \ge 1$, $N \ge 1$. Every rational has a representative with positive denominator ([[lem-rat-positive-denominator]]); on such a representative $m/N > 0$ holds exactly when $m > 0$ in $\mathbb{Z}$ ([[def-rat-order]], [[def-int-order]]); and a positive integer is the image of a unique natural $\ge 1$ ([[lem-nat-embeds-int]]), which is what turns both the numerator $m > 0$ and the denominator $N > 0$ into naturals $\ge 1$. The last passage is a genuine step and is what [[lem-rational-power-well-defined]] uses at its own [L5].

[L2] Rational power laws ([[lem-rational-power-laws]], [[lem-rational-power-well-defined]], [[def-rational-power]]): $a^{r} > 0$; $a^{r+t} = a^{r} a^{t}$; and $a^{t} = \big(a^{1/N}\big)^{m}$ for the representative $t = m/N$.

[L3] Roots ([[thm-nth-roots-exist]]): $a^{1/N}$ is the unique $x \ge 0$ with $x^{N} = a$, and it is $> 0$ when $a > 0$.

[L4] Integer power monotonicity ([[lem-power-monotone]]): for $N \ge 1$, $x \mapsto x^{N}$ is strictly increasing on $\{x \ge 0\}$ (claim 2); for $m \ge 1$, $x > 1$ implies $x^{m} \ge x > 1$ (claim 3), while $0 \le x < 1$ implies $x^{m} < 1^{m} = 1$, which is claim 2 again with $1$ as the larger base and NOT claim 3, whose nonstrict $x^{m} \le 1$ would not suffice; and $1^{m} = 1$ for every integer $m$, by claim 4 for natural $m$ together with $1^{-k} = (1^{k})^{-1} = 1$ ([[lem-power-laws]]).

[L5] Order arithmetic: for $c > 0$, $x < y \iff cx < cy$; and trichotomy, exactly one of $a < 1$, $a = 1$, $a > 1$ holds ([[lem-of-sign-rules]], [[def-ordered-field]]).

## Proof

**Proof technique:** cases.

1.1 Write $t = s - r$, so $t$ is rational with $t > 0$, and fix a representative $t = m/N$ with naturals $m, N \ge 1$; then $a^{s} = a^{r+t} = a^{r} a^{t}$ with $a^{r} > 0$, so the comparison of $a^{s}$ with $a^{r}$ is exactly the comparison of $a^{t}$ with $1$. [L1, L2, L5]

1.2 Claim 2, which needs no case split: let $r > 0$ be rational with representative $r = m/N$, $m, N \ge 1$, and let $0 < a < b$; then $a^{1/N} < b^{1/N}$, since $b^{1/N} \le a^{1/N}$ would give $b = \big(b^{1/N}\big)^{N} \le \big(a^{1/N}\big)^{N} = a$; raising to the power $m$ preserves the strict inequality between nonnegatives, so $a^{r} = \big(a^{1/N}\big)^{m} < \big(b^{1/N}\big)^{m} = b^{r}$. [L2, L3, L4]

2.1 Case $a > 1$: then $a^{1/N} > 1$, because $a^{1/N} \le 1$ would give $a = \big(a^{1/N}\big)^{N} \le 1$; hence $a^{t} = \big(a^{1/N}\big)^{m} \ge a^{1/N} > 1$, and multiplying $1 < a^{t}$ by $a^{r} > 0$ gives $a^{r} < a^{r} a^{t} = a^{s}$. [assume-case big, step 1.1, L3, L4, L5]

2.2 Case $a = 1$: then $1^{N} = 1$ shows $a^{1/N} = 1$ by uniqueness of the nonnegative $N$-th root, so $a^{u} = 1^{m'} = 1$ for every rational $u$ with representative $m'/N'$; in particular $a^{r} = a^{s} = 1$. [assume-case one, step 1.1, L2, L3, L4]

2.3 Case $0 < a < 1$: then $0 \le a^{1/N} < 1$, because $a^{1/N} \ge 1$ would give $a = \big(a^{1/N}\big)^{N} \ge 1$; hence $a^{t} = \big(a^{1/N}\big)^{m} < 1^{m} = 1$ by strict monotonicity of $x \mapsto x^{m}$ on the nonnegatives, $m \ge 1$, and multiplying $a^{t} < 1$ by $a^{r} > 0$ gives $a^{s} = a^{r} a^{t} < a^{r}$. [assume-case small, step 1.1, L3, L4, L5]

3.1 The three cases $a > 1$, $a = 1$, $0 < a < 1$ exhaust the possibilities for $a > 0$ by trichotomy, so claim 1 holds; claim 3 is the comparison of $a^{t}$ with $1$ established inside the first and third cases; and claim 2 is step 1.2. [cases-exhaustive, step 2.1, step 2.2, step 2.3, step 1.2, L5] ∎
````

### `thm-infimum-property`

````markdown
---
id: thm-infimum-property
kind: theorem
title: "Every nonempty set bounded below has an infimum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-reflection, def-infimum, lem-sup-unique, def-complete-ordered-field,
       lem-of-add-order, lem-of-inverse-unique, def-field]
justified_by: []
aliases: []
landmark: true
short: "greatest-lower-bound property"
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
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "MIT 18.100A, Complete Lecture Notes"
      url: "https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_lec_full.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below. Then $S$ has a
greatest lower bound in $\mathbb{R}$ ([[def-infimum]]), and it is given by

$$\inf S = -\sup(-S), \qquad \text{where } -S = \{-s : s \in S\}.$$

In particular the complete ordered field $\mathbb{R}$ has the
greatest-lower-bound property, which is therefore not an extra axiom: it is a
consequence of the least-upper-bound property.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded below, and its reflection $-S = \{-s : s \in S\}$.

[L1] The least-upper-bound property of $\mathbb{R}$: every nonempty subset of $\mathbb{R}$ that is bounded above has a least upper bound in $\mathbb{R}$, namely an upper bound that is $\le$ every upper bound ([[def-complete-ordered-field]]).

[L2] Reflection: $-(-S) = S$; $S$ is nonempty exactly when $-S$ is; $u$ is an upper bound of a set $X$ exactly when $-u$ is a lower bound of $-X$; and $\ell$ is a lower bound of $X$ exactly when $-\ell$ is an upper bound of $-X$ ([[lem-reflection]]).

[L3] Greatest lower bound (infimum): $\ell$ is one for $S$ when $\ell$ is a lower bound of $S$ and $\ell' \le \ell$ for every lower bound $\ell'$ of $S$ ([[def-infimum]]).

[L4] A least upper bound and a greatest lower bound are unique when they exist, so the notations $\sup$ and $\inf$ are unambiguous ([[lem-sup-unique]]).

[L5] Negation reverses the order, elementwise: $-(-a) = a$, because $(-a) + a = 0$ and additive inverses are unique ([[def-field]], [[lem-of-inverse-unique]]); and $a \le b$ if and only if $-b \le -a$, because translation invariance applied with the constant $-a - b$ turns $a < b$ into $-b < -a$ and, applied with the constant $a + b$, turns $-b < -a$ back into $a < b$, while $a = b$ holds exactly when $-a = -b$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** direct.

1.1 By hypothesis $S \ne \emptyset$ and $S$ is bounded below; fix a lower bound $\ell_0$ of $S$, so $\ell_0 \le s$ for every $s \in S$. [given, choose]

1.2 Let $\ell'$ be an arbitrary lower bound of $S$; then $-\ell'$ is an upper bound of $-S$. [assume-hyp, L2]

2.1 Since $S$ is nonempty, so is $-S$, and since $\ell_0$ is a lower bound of $S$, its negative $-\ell_0$ is an upper bound of $-S$; hence $-S$ is a nonempty subset of $\mathbb{R}$ that is bounded above. [step 1.1, L2]

3.1 By the least-upper-bound property, $-S$ has a least upper bound in $\mathbb{R}$; write $u := \sup(-S)$, which is well defined by uniqueness. [step 2.1, L1, L4]

4.1 Define $\ell := -u$. [step 3.1, construct]

4.2 The element $u$ is the least of the upper bounds of $-S$ and $-\ell'$ is one of them, hence $u \le -\ell'$. [step 1.2, step 3.1, L1]

5.1 Apply the reflection fact to the set $-S$: since $u$ is an upper bound of $-S$, its negative $-u$ is a lower bound of $-(-S)$, and $-(-S) = S$; so $\ell = -u$ is a lower bound of $S$. [step 4.1, step 3.1, L2]

5.2 Negating the inequality $u \le -\ell'$ reverses it, giving $-(-\ell') \le -u$, that is $\ell' \le \ell$. [step 4.2, step 4.1, L5]

6.1 Thus $\ell$ is a lower bound of $S$ satisfying $\ell' \le \ell$ for every lower bound $\ell'$ of $S$, so $\ell$ is a greatest lower bound of $S$; it is the only one, so $\inf S$ exists and $\inf S = \ell = -\sup(-S)$. [step 5.1, step 5.2, L3, L4] ∎

## Remarks

- The theorem is not a restatement of the least-upper-bound property: it is proved from it, by transporting the problem across the order-reversing bijection $x \mapsto -x$ of [[lem-reflection]]. Nothing about $\mathbb{R}$ beyond the complete-ordered-field axioms is used.
- The hypotheses are both needed. The empty set is bounded below by every real and has no greatest lower bound, and a set unbounded below has no lower bound at all; the dual failures for suprema are recorded in [[fs-every-set-has-sup]].
- The identity $\inf S = -\sup(-S)$ is the standard device for turning any statement about suprema into its dual; [[lem-inf-epsilon]] is the first application on this page.
````

### `thm-strong-induction`

````markdown
---
id: thm-strong-induction
kind: theorem
title: "Strong (complete) induction"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, thm-well-ordering-principle, lem-nat-trichotomy]
aliases: [complete-induction, course-of-values-induction]
landmark: false
short: "$(\\forall m<n\\,P(m))\\Rightarrow P(n)$ gives $\\forall n\\,P(n)$"
proof_strategy: contradiction
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
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $P$ be a property of naturals such that for every $n \in \mathbb{N}$, if $P(m)$ holds for all $m < n$ then $P(n)$. Then $P(n)$ holds for all $n \in \mathbb{N}$. (At $n = 0$ the hypothesis is vacuous, so $P(0)$ is forced.)

## Facts & Assumptions

**Given:** A property $P$ satisfying the strong-induction hypothesis $H$: for every $n$, $\big(P(m) \text{ for all } m < n\big) \Rightarrow P(n)$.

[L1] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L2] Exactly one of $x < y$, $x = y$, $y < x$ holds ([[lem-nat-trichotomy]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $P$ fails somewhere; let $S = \{\, n \in \mathbb{N} : P(n) \text{ is false} \,\}$, a nonempty subset of $\mathbb{N}$. [assume-contra]

2.1 By well-ordering [L1], $S$ has a least element $\ell$, so $\ell \le s$ for every $s \in S$; hence every $m < \ell$ lies outside $S$, since $m \in S$ would give $\ell \le m$, which [L2] does not allow alongside $m < \ell$; that is, $P(m)$ holds for all $m < \ell$. [step 1.1, L1, L2]

3.1 By the hypothesis $H$ applied at $\ell$, $P(\ell)$ holds, so $\ell \notin S$. [step 2.1, given]

4.1 But $\ell \in S$ by construction, a contradiction; hence $S$ is empty and $P(n)$ holds for all $n \in \mathbb{N}$. [step 2.1, step 3.1, discharge-contradiction] ∎
````


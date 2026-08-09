# Audit proof-refuter brief — Wave 9, A6

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
For an `ai-generated` proof, actively search for a counterexample. A false
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

## Wave 9 target — `thm-continuous-inverse`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `c0620cc3efe06345b81681594bcdc71e5403cfb5fffcbb30f48249e864f3d1f3`

## Complete current target

````markdown
---
id: thm-continuous-inverse
kind: theorem
title: "Continuous inverse theorem: a continuous injective $f$ on an interval $I$ is a bijection onto the order-convex set $f[I]$, and the inverse $g : f[I] \\to I$ is continuous and strictly monotone in the same sense as $f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [thm-continuous-injection-on-an-interval-is-strictly-monotone, def-monotone-function, cor-continuous-image-of-an-interval-is-an-interval, lem-monotone-with-interval-image-is-continuous, def-continuity-real, def-interval, def-injection-surjection-bijection, thm-algebra-of-continuous-functions, thm-composition-of-continuous-functions]
justified_by: []
aliases: [thm-inverse-function-continuity]
landmark: true
short: "continuous inverse theorem"
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
    - title: "Inverse function theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_function_theorem"
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Real Analysis Notes 10 (California State University, Dominguez Hills)"
      url: "https://math.csudh.edu/~pong/a3/Notes_10.html"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and
injective ([[def-injection-surjection-bijection]]). Then:

1. $f$ is strictly monotone ([[def-monotone-function]]);
2. $f[I]$ is order-convex;
3. the map $f : I \to f[I]$ is a bijection, so there is exactly one
   $g : f[I] \to I$ with $g(f(x)) = x$ for every $x \in I$ and $f(g(u)) = u$ for
   every $u \in f[I]$;
4. $g$ is strictly monotone in the same sense as $f$: increasing if $f$ is
   increasing, decreasing if $f$ is decreasing;
5. $g$ is continuous on $f[I]$.

**"Interval" means "order-convex" here**, as throughout this library
([[thm-connected-subsets-of-r-are-intervals]] is what licenses the word and
[[def-interval]] records that the classification of order-convex sets into the
nine written forms is not proved here). No compactness and no boundedness is
assumed: $I$ may be open, half-open, unbounded, or a single point.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ and a continuous injective $f : I \to \mathbb{R}$.

[L1] A continuous injective function on an order-convex subset of $\mathbb{R}$ is strictly monotone ([[thm-continuous-injection-on-an-interval-is-strictly-monotone]]).

[L2] The image of an order-convex subset of the domain under a continuous function is order-convex ([[cor-continuous-image-of-an-interval-is-an-interval]], claim 1).

[L3] If $J \subseteq \mathbb{R}$ is order-convex, $h : J \to \mathbb{R}$ satisfies $h(u) \le h(v)$ whenever $u, v \in J$ and $u \le v$, and $h[J]$ is order-convex, then $h$ is continuous on $J$ ([[lem-monotone-with-interval-image-is-continuous]]).

[L4] Sums, scalar multiples and composites of continuous functions are continuous; in particular $u \mapsto -u$ is continuous on every subset of $\mathbb{R}$, being the scalar multiple $(-1)\,\mathrm{id}$ of the identity ([[thm-algebra-of-continuous-functions]], [[thm-composition-of-continuous-functions]]).

[L5] $f$ is injective, so $f : I \to f[I]$ is a bijection and has a unique two-sided inverse ([[def-injection-surjection-bijection]]).

[L6] $f$ increasing means $f(x) < f(y)$ whenever $x < y$ in $I$; $-f$ is decreasing exactly when $f$ is increasing, and $-S$ is order-convex exactly when $S$ is ([[def-monotone-function]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is immediate: $f$ is continuous and injective on the order-convex set $I$, hence strictly monotone. [L1]

1.2 Claim 2 is immediate: $I$ is order-convex and $f$ is continuous on $I$, so $f[I]$ is order-convex. [L2]

1.3 Claim 3 is immediate: $f$ is injective and $f : I \to f[I]$ is onto its image by definition of the image, so it is a bijection and has a unique two-sided inverse $g : f[I] \to I$. [L5]

2.1 Suppose $f$ is increasing, and let $u, v \in f[I]$ with $u < v$. Write $u = f(p)$ and $v = f(q)$ with $p = g(u)$ and $q = g(v)$ in $I$. If $q \le p$ then $f(q) \le f(p)$, since $q = p$ gives equality and $q < p$ gives $f(q) < f(p)$; that is $v \le u$, contradicting $u < v$. Hence $p < q$, that is $g(u) < g(v)$, and $g$ is increasing. [step 1.1, step 1.3, L6]

2.2 Suppose instead that $f$ is decreasing, and put $F := -f$, that is $F(x) := -f(x)$. Then $F$ is continuous on $I$, it is injective because $f$ is, and it is increasing. [step 1.1, L4, L6]

3.1 Still with $f$ increasing: $g$ satisfies $g(u) \le g(v)$ whenever $u \le v$ in $f[I]$, by step 2.1 when $u < v$ and trivially when $u = v$; the domain $f[I]$ is order-convex by step 1.2; and the image $g[f[I]]$ is $I$, which is order-convex, because $g$ is onto $I$. So the monotone-with-interval-image criterion applies and $g$ is continuous on $f[I]$. [step 1.2, step 1.3, step 2.1, L3]

4.1 By steps 2.1 and 3.1 applied to $F$, the inverse $G : F[I] \to I$ of $F$ is increasing and continuous, and $F[I] = -f[I]$ is order-convex. [step 2.1, step 3.1, step 2.2]

5.1 For $u \in f[I]$ one has $-u \in F[I]$ and $G(-u) = g(u)$, since $F(g(u)) = -f(g(u)) = -u$ and $G$ is the inverse of $F$. So $g$ is the composite of the continuous map $u \mapsto -u$ from $f[I]$ into $F[I]$ with the continuous $G$, hence continuous on $f[I]$. [step 1.3, step 4.1, L4]

6.1 In that case $g$ is decreasing: for $u < v$ in $f[I]$ one has $-v < -u$ in $F[I]$, so $G(-v) < G(-u)$ because $G$ is increasing, that is $g(v) < g(u)$. [step 4.1, step 5.1]

7.1 Claims 4 and 5 are now proved in both cases: for $f$ increasing by steps 2.1 and 3.1, and for $f$ decreasing by steps 5.1 and 6.1; and by step 1.1 there is no other case. [step 1.1, step 2.1, step 3.1, step 5.1, step 6.1] ∎

## Remarks

- **No epsilon-delta argument appears anywhere.** Continuity of the inverse is obtained entirely from [[lem-monotone-with-interval-image-is-continuous]], whose hypotheses are exactly the two facts the theorem has already established: the inverse is monotone, and its image is the order-convex set $I$. The decreasing case is reduced to the increasing one by composing with $u \mapsto -u$ rather than repeating the argument.

- **What the theorem is used for.** It is the tool that turns a strictly monotone continuous bijection into a continuous one in the other direction, and the standard elementary functions are built with it: the companion page derives the continuity of $x \mapsto x^{1/n}$ this way.
````

## Current Wave 9 provenance determination

```json
{
  "id": "thm-continuous-inverse",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://math.csudh.edu/~pong/a3/Notes_10.html"
  ],
  "rationale": "The university notes state exactly that a strictly monotone function on an interval has a continuous inverse on its image and pair it with the continuous-injection theorem used here.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 9 proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-continuous-injection-on-an-interval-is-strictly-monotone",
      "source_section": "Statement",
      "quote": "Let $I \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) and let\n$f : I \\to \\mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and\ninjective ([[def-injection-surjection-bijection]]). Then $f$ is strictly\nmonotone ([[def-monotone-function]]): either $f(x) < f(y)$ whenever $x < y$ in\n$I$, or $f(x) > f(y)$ whenever $x < y$ in $I$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-continuous-image-of-an-interval-is-an-interval",
      "source_section": "Statement",
      "quote": "**\"Interval\" means \"order-convex\" here.** As [[thm-connected-subsets-of-r-are-intervals]]\nrecords, this library proves that the connected subsets of $\\mathbb{R}$ are\nexactly the order-convex ones, and does **not** prove that every order-convex\nsubset is one of the nine written forms of [[def-interval]]. Claim 1 is\ntherefore stated as order-convexity, which is what the intermediate value\ntheorem delivers; claim 2 identifies the written form in the one case where the\nextreme value theorem supplies the endpoints.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-monotone-with-interval-image-is-continuous",
      "source_section": "Statement",
      "quote": "Let $I \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) and let\n$f : I \\to \\mathbb{R}$ satisfy",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "5. every constant function $A \\to \\mathbb{R}$ and the identity\n   $\\mathrm{id} : A \\to \\mathbb{R}$, $x \\mapsto x$, are continuous on $A$; hence\n   so is $x \\mapsto x^{n}$ for every $n \\in \\mathbb{N}$\n   ([[def-integer-power]]), and hence so is every **polynomial function**\n   $x \\mapsto a_0 + a_1 x + \\dots + a_n x^{n}$ with real coefficients.",
      "uses": [
        "2.2",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-composition-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A, B \\subseteq \\mathbb{R}$, let $g : A \\to \\mathbb{R}$ with\n$g(A) \\subseteq B$, and let $f : B \\to \\mathbb{R}$, so that the composite\n$f \\circ g : A \\to \\mathbb{R}$ is defined. Let $c \\in A$. If $g$ is continuous\nat $c$ and $f$ is continuous at $g(c) \\in B$, then $f \\circ g$ is continuous at\n$c$ ([[def-continuity-real]]).",
      "uses": [
        "2.2",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-injection-surjection-bijection",
      "source_section": "Definition",
      "quote": "- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all\n  $x, y \\in A$.\n- $f$ is **surjective** (onto) if for every $b \\in B$ there is some $x \\in A$\n  with $f(x) = b$; equivalently, the image $f[A] := \\{ f(x) : x \\in A \\}$ equals\n  $B$.\n- $f$ is **bijective** if it is both injective and surjective.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L6",
      "source": "def-monotone-function",
      "source_section": "Definition",
      "quote": "**Negation exchanges the two directions.** For $g := -f$, that is\n$g(x) := -f(x)$, the four conditions above are exchanged in pairs: $f$ is\nnondecreasing exactly when $g$ is nonincreasing, and $f$ is increasing exactly\nwhen $g$ is decreasing, because $u \\le v$ holds exactly when $-v \\le -u$\n([[def-ordered-field]]). Several proofs below use this to reduce a nonincreasing\ncase to a nondecreasing one.",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "A subset $I \\subseteq \\mathbb{R}$ is **order-convex** when",
      "uses": [
        "2.1",
        "2.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-continuous-inverse-step-1-1",
      "claim": "Claim 1 is immediate: $f$ is continuous and injective on the order-convex set $I$, hence strictly monotone. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "thm-continuous-inverse-step-1-2",
      "claim": "Claim 2 is immediate: $I$ is order-convex and $f$ is continuous on $I$, so $f[I]$ is order-convex. [L2]",
      "step": "1.2",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "thm-continuous-inverse-step-1-3",
      "claim": "Claim 3 is immediate: $f$ is injective and $f : I \\to f[I]$ is onto its image by definition of the image, so it is a bijection and has a unique two-sided inverse $g : f[I] \\to I$. [L5]",
      "step": "1.3",
      "inputs": [
        "L5"
      ]
    },
    {
      "id": "thm-continuous-inverse-step-2-1",
      "claim": "Suppose $f$ is increasing, and let $u, v \\in f[I]$ with $u < v$. Write $u = f(p)$ and $v = f(q)$ with $p = g(u)$ and $q = g(v)$ in $I$. If $q \\le p$ then $f(q) \\le f(p)$, since $q = p$ gives equality and $q < p$ gives $f(q) < f(p)$; that is $v \\le u$, contradicting $u < v$. Hence $p < q$, that is $g(u) < g(v)$, and $g$ is increasing. [step 1.1, step 1.3, L6]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.3",
        "L6"
      ]
    },
    {
      "id": "thm-continuous-inverse-step-2-2",
      "claim": "Suppose instead that $f$ is decreasing, and put $F := -f$, that is $F(x) := -f(x)$. Then $F$ is continuous on $I$, it is injective because $f$ is, and it is increasing. [step 1.1, L4, L6]",
      "step": "2.2",
      "inputs": [
        "1.1",
        "L4",
        "L6"
      ]
    },
    {
      "id": "thm-continuous-inverse-step-3-1",
      "claim": "Still with $f$ increasing: $g$ satisfies $g(u) \\le g(v)$ whenever $u \\le v$ in $f[I]$, by step 2.1 when $u < v$ and trivially when $u = v$; the domain $f[I]$ is order-convex by step 1.2; and the image $g[f[I]]$ is $I$, which is order-convex, because $g$ is onto $I$. So the monotone-with-interval-image criterion applies and $g$ is continuous on $f[I]$. [step 1.2, step 1.3, step 2.1, L3]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "1.2",
        "1.3",
        "L3"
      ]
    },
    {
      "id": "thm-continuous-inverse-step-4-1",
      "claim": "By steps 2.1 and 3.1 applied to $F$, the inverse $G : F[I] \\to I$ of $F$ is increasing and continuous, and $F[I] = -f[I]$ is order-convex. [step 2.1, step 3.1, step 2.2]",
      "step": "4.1",
      "inputs": [
        "2.1",
        "3.1",
        "2.2"
      ]
    },
    {
      "id": "thm-continuous-inverse-step-5-1",
      "claim": "For $u \\in f[I]$ one has $-u \\in F[I]$ and $G(-u) = g(u)$, since $F(g(u)) = -f(g(u)) = -u$ and $G$ is the inverse of $F$. So $g$ is the composite of the continuous map $u \\mapsto -u$ from $f[I]$ into $F[I]$ with the continuous $G$, hence continuous on $f[I]$. [step 1.3, step 4.1, L4]",
      "step": "5.1",
      "inputs": [
        "1.3",
        "4.1",
        "L4"
      ]
    },
    {
      "id": "thm-continuous-inverse-step-6-1",
      "claim": "In that case $g$ is decreasing: for $u < v$ in $f[I]$ one has $-v < -u$ in $F[I]$, so $G(-v) < G(-u)$ because $G$ is increasing, that is $g(v) < g(u)$. [step 4.1, step 5.1]",
      "step": "6.1",
      "inputs": [
        "4.1",
        "5.1"
      ]
    },
    {
      "id": "thm-continuous-inverse-step-7-1",
      "claim": "Claims 4 and 5 are now proved in both cases: for $f$ increasing by steps 2.1 and 3.1, and for $f$ decreasing by steps 5.1 and 6.1; and by step 1.1 there is no other case. [step 1.1, step 2.1, step 3.1, step 5.1, step 6.1] ∎",
      "step": "7.1",
      "inputs": [
        "2.1",
        "3.1",
        "5.1",
        "6.1",
        "1.1"
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
      "evidence": "step 7.1: each existential witness used here is supplied by the cited existence result or by the displayed formula/construction."
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
    "source": "thm-continuous-inverse",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-continuous-injection-on-an-interval-is-strictly-monotone",
    "declared_target": "thm-continuous-injection-on-an-interval-is-strictly-monotone",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-inverse",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-monotone-function",
    "declared_target": "def-monotone-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-inverse",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "cor-continuous-image-of-an-interval-is-an-interval",
    "declared_target": "cor-continuous-image-of-an-interval-is-an-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-inverse",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-monotone-with-interval-image-is-continuous",
    "declared_target": "lem-monotone-with-interval-image-is-continuous",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-inverse",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-inverse",
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
    "source": "thm-continuous-inverse",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-injection-surjection-bijection",
    "declared_target": "def-injection-surjection-bijection",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-inverse",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-inverse",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-composition-of-continuous-functions",
    "declared_target": "thm-composition-of-continuous-functions",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (10)

### `cor-continuous-image-of-an-interval-is-an-interval`

````markdown
---
id: cor-continuous-image-of-an-interval-is-an-interval
kind: corollary
title: "The image of an interval under a continuous real function is order-convex, hence an interval, and the image of a closed bounded interval is a closed bounded interval"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-intermediate-value, thm-extreme-value-r, thm-heine-borel-characterisation-r, def-open-cover-r, def-interval, def-connected-r, thm-connected-subsets-of-r-are-intervals, def-continuity-real, def-bounded-set, def-max-min, def-open-and-closed-in-r]
justified_by: []
aliases: []
forward_refs: [ex-ivt-gives-nth-roots]
landmark: true
short: "continuous image of an interval"
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
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.9: The Intermediate Value Property"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.09%3A_The_Intermediate_Value_Property"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ be continuous on $A$
([[def-continuity-real]]) and let $I \subseteq A$ be order-convex
([[def-interval]]). Then:

1. $f[I]$ is order-convex, hence connected
   ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]]);
2. if $I = [a,b]$ with $a \le b$, then $f[I] = [m, M]$ where
   $m = \min f[I]$ and $M = \max f[I]$ ([[def-max-min]]) — a **closed bounded
   interval**, degenerate exactly when $f$ is constant on $[a,b]$.

**"Interval" means "order-convex" here.** As [[thm-connected-subsets-of-r-are-intervals]]
records, this library proves that the connected subsets of $\mathbb{R}$ are
exactly the order-convex ones, and does **not** prove that every order-convex
subset is one of the nine written forms of [[def-interval]]. Claim 1 is
therefore stated as order-convexity, which is what the intermediate value
theorem delivers; claim 2 identifies the written form in the one case where the
extreme value theorem supplies the endpoints.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ continuous on $A$, and an order-convex set $I \subseteq A$.

[L1] Intermediate value theorem: if $u \le v$ in $\mathbb{R}$, if $f$ is continuous on $[u,v]$ and if $w$ lies between $f(u)$ and $f(v)$ in either order, then $f(t) = w$ for some $t \in [u,v]$ ([[thm-intermediate-value]]).

[L2] Continuity passes to subsets of the domain: if $B \subseteq A$ then $f|_B$ is continuous on $B$, since the defining condition quantifies over fewer points ([[def-continuity-real]]).

[L3] Order-convexity: $x, z \in S$ and $x \le w \le z$ imply $w \in S$; every closed bounded interval $[u,v]$ with $u \le v$ is order-convex and is a subset of any order-convex set containing $u$ and $v$ ([[def-interval]]).

[L4] Connectedness: a subset of $\mathbb{R}$ is connected if and only if it is order-convex ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]]).

[L5] $[a,b]$ with $a \le b$ is nonempty, closed and bounded ([[def-interval]], [[def-open-and-closed-in-r]], [[def-bounded-set]]), hence compact ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L6] Extreme value theorem: a continuous real function on a nonempty compact subset of $\mathbb{R}$ attains a greatest and a least value on it ([[thm-extreme-value-r]], [[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 **Claim 1.** Let $u', v' \in f[I]$ and let $w$ satisfy $u' \le w \le v'$. Write $u' = f(p)$ and $v' = f(q)$ with $p, q \in I$, and let $[s,t]$ be the closed bounded interval with $\{s,t\} = \{p,q\}$ and $s \le t$; by [L3] and order-convexity of $I$ we have $[s,t] \subseteq I \subseteq A$. [L3, choose]

1.2 **Claim 2, the endpoints.** Suppose $I = [a,b]$ with $a \le b$. By [L5] the set $[a,b]$ is nonempty and compact, so by [L6] there are $q, p \in [a,b]$ with $f(q) \le f(x) \le f(p)$ for every $x \in [a,b]$; put $m := f(q)$ and $M := f(p)$, so $m = \min f[I]$ and $M = \max f[I]$ and $m \le M$. [L5, L6, choose]

2.1 By [L2] the restriction of $f$ to $[s,t]$ is continuous on $[s,t]$, and $w$ lies between $f(s)$ and $f(t)$ in one order or the other, since $\{f(s), f(t)\} = \{u', v'\}$ and $u' \le w \le v'$. By [L1] there is $c \in [s,t] \subseteq I$ with $f(c) = w$, so $w \in f[I]$. [step 1.1, L1, L2]

3.1 So $f[I]$ is order-convex, and by [L4] it is connected. This is claim 1. [step 2.1, L4]

4.1 **Claim 2, the two inclusions.** Every $z \in f[I]$ satisfies $m \le z \le M$ by step 1.2, so $f[I] \subseteq [m,M]$. Conversely, $m$ and $M$ lie in $f[I]$ and $f[I]$ is order-convex by step 3.1, so every $w$ with $m \le w \le M$ lies in $f[I]$; hence $[m,M] \subseteq f[I]$. Therefore $f[I] = [m,M]$, a closed bounded interval, and it is the single point $\{m\}$ exactly when $m = M$, that is exactly when $f$ is constant on $[a,b]$. [step 3.1, step 1.2, L3] ∎

## Remarks

- **The two halves come from the two theorems.** Order-convexity of the image is the intermediate value theorem and needs nothing else; that the image of a *closed bounded* interval is again closed and bounded is the extreme value theorem, and it fails for other interval forms: the continuous image of $(0,1)$ under $x \mapsto 1/x$ is $(1,\infty)$, and under $x \mapsto x$ it is $(0,1)$, neither closed.

- **The converse of claim 1 is false.** A function whose image on every subinterval is order-convex need not be continuous; this is the intermediate value property without continuity, and the witness for it is not available at this point in the reading order. What *is* true, and is proved on this page, is that a function which is monotone and has an order-convex image is continuous ([[lem-monotone-with-interval-image-is-continuous]]).

- **Claim 2 is the shape the $n$-th-root example uses.** Applying it to $x \mapsto x^{n}$ on $[0, a+1]$ gives an interval containing $0$ and $(a+1)^{n} \ge a$, hence containing $a$; that is the second proof of the existence of $n$-th roots recorded in [[ex-ivt-gives-nth-roots]] on the companion page.
````

### `def-continuity-real`

````markdown
---
id: def-continuity-real
kind: definition
title: "Continuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$: the $\\varepsilon$-$\\delta$ condition, its agreement with $\\lim_{x \\to c} f(x) = f(c)$ at a limit point, and continuity at an isolated point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, def-interval, lem-of-abs-value, def-complete-ordered-field]
justified_by: []
aliases: [def-continuity-at-a-point-r]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "continuity of a real function"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.1: Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field with its order and
absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and
neighbourhoods are those of [[def-neighbourhood-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then
$f$ is **continuous at $c$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ |x - c| < \delta \ \Longrightarrow\ |f(x) - f(c)| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the **positive reals**. In the
language of neighbourhoods: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ with

$$f\bigl(A \cap N_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}\bigl(f(c)\bigr).$$

$f$ is **continuous on $A$** when it is continuous at every point of $A$.

**The point $c$ is required to lie in $A$, and the condition is unpunctured.**
Both differ from [[def-function-limit]], and deliberately. There the quantifier
runs over $0 < |x - c| < \delta$, which removes $x = c$; here $x = c$ is allowed,
and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \varepsilon$, which is
automatic. So allowing $x = c$ costs nothing, and it is what lets the definition
be stated at every point of $A$, including the points where no limit exists.

**Three clauses, and all three are part of the definition.**

1. **At a limit point.** Suppose $c \in A$ is a limit point of $A$
   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the
   limit of $f$ at $c$ exists and
   $$\lim_{x \to c} f(x) \;=\; f(c)$$
   ([[def-function-limit]]). Indeed, for a given $\varepsilon > 0$ a $\delta$
   witnessing continuity witnesses the limit condition, because the limit
   condition quantifies over a subset of the points continuity quantifies over;
   and conversely a $\delta$ witnessing $\lim_{x \to c} f(x) = f(c)$ witnesses
   continuity, because the one point it omits, $x = c$, satisfies
   $|f(c) - f(c)| < \varepsilon$ anyway.

2. **At an isolated point.** Suppose $c \in A$ is an isolated point of $A$
   ([[def-limit-point-r]]), so that $N_{\eta}(c) \cap A = \{c\}$ for some real
   $\eta > 0$. Then **every** $f : A \to \mathbb{R}$ is continuous at $c$: take
   $\delta := \eta$, so that the only $x \in A$ with $|x - c| < \delta$ is $c$
   itself, and $|f(c) - f(c)| = 0 < \varepsilon$.

3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and
   nothing more. It is not a condition relating $f$ to points outside $A$.

Every point of $A$ is either a limit point of $A$ or an isolated point of $A$,
and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe
continuity at every point of $A$.

**This is not the raw $\varepsilon$-$\delta$ formula of
[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes
wrong when the *punctured* formula of [[def-function-limit]] is written down at
an arbitrary point of the domain: at an isolated point it is satisfied
vacuously by every real $L$ at once, so it defines nothing, and this library
therefore leaves $\lim_{x \to c} f(x)$ **undefined** at an isolated point.
Continuity at an isolated point is a different matter: the formula above is not
vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the
only value being compared with itself — and it names a single, well-defined
property. The limit is undefined there; the continuity is defined, and is
automatic. Clause 1 is the only place where the two notions meet, and it is
stated only where the limit exists as a notion.

**Where the distinction disappears.** If $A$ is an open subset of $\mathbb{R}$
([[def-open-and-closed-in-r]]), then every $c \in A$ has some
$N_{\eta}(c) \subseteq A$, and a punctured neighbourhood is never empty
([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and
clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate
interval ([[def-interval]]). Isolated points are what force clause 2 to exist at
all, and they occur as soon as $A$ is allowed to be an arbitrary subset of
$\mathbb{R}$, as in $A = \{0\} \cup [1,2]$.

## Remarks

- **Continuity is local.** If $\eta > 0$ and $g : A \to \mathbb{R}$ agrees with
  $f$ on $A \cap N_{\eta}(c)$, then $f$ is continuous at $c$ if and only if $g$
  is: any $\delta$ may be replaced by $\min\{\delta, \eta\}$, after which the
  condition only ever evaluates the two functions where they agree. So
  continuity at $c$ sees only an arbitrarily small neighbourhood of $c$, exactly
  as the limit does ([[lem-limit-is-local]]).

- **Continuity passes to subsets of the domain.** If $B \subseteq A$ and
  $c \in B$, then continuity of $f$ at $c$ gives continuity of the restriction
  $f|_B$ at $c$, with the same $\delta$: the condition on $f|_B$ quantifies over
  fewer points. The converse fails, and the standard witness is the indicator of
  $\mathbb{Q}$ restricted to $\mathbb{Q}$, which is constant and hence
  continuous, while the indicator itself is continuous nowhere
  ([[cex-dirichlet-is-nowhere-continuous]]).

- **The radius is a real number.** As in [[def-neighbourhood-r]], $\varepsilon$
  and $\delta$ range over the positive reals here. Restricting either quantifier
  to the positive rationals defines the same relation, by the passage recorded
  in [[def-function-limit]]: below every positive real lies a positive rational
  ([[lem-rat-embeds-dense]]), and a real $\delta$ may be shrunk to a rational
  one below it.

- **The word *continuous* is used for two things in this library, and they
  agree.** [[def-metric-continuity]] defines continuity of a map between metric
  spaces, and $A \subseteq \mathbb{R}$ carries the metric $d(x,y) = |x-y|$. The
  two notions coincide, and that is proved, not assumed:
  [[lem-real-and-metric-notions-agree]] is the dictionary, and it is stated on
  this page precisely so that no later item has to guess.
````

### `def-injection-surjection-bijection`

````markdown
---
id: def-injection-surjection-bijection
kind: definition
title: "Injection, surjection, bijection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: [def-injective, def-surjective, def-bijective]
landmark: false
short: "injective, surjective, bijective"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "T. Tao, Analysis I, 3rd ed., §3.3 (Functions)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets and let $f : A \to B$ be a function ([[def-function]]).

- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all
  $x, y \in A$.
- $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$
  with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals
  $B$.
- $f$ is **bijective** if it is both injective and surjective.

For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$; these are the image and preimage of a set under $f$ read as a
relation ([[def-image-and-preimage-under-a-relation]]).

## Remarks

- **Composition.** If $f : A \to B$ and $g : B \to C$ are both injective then so
  is $g \circ f$, since $g(f(x)) = g(f(y))$ forces $f(x) = f(y)$ and then
  $x = y$; if both are surjective then so is $g \circ f$, since any $c \in C$ is
  $g(b)$ for some $b \in B$ and that $b$ is $f(a)$ for some $a \in A$. Hence a
  composition of bijections is a bijection. These verifications, together with the
  two partial converses, are
  [[prop-composition-preserves-injectivity-surjectivity-and-bijectivity]].

- **Inverses.** $f : A \to B$ is bijective exactly when there is a function
  $f^{-1} : B \to A$ with $f^{-1}(f(x)) = x$ for all $x \in A$ and
  $f(f^{-1}(b)) = b$ for all $b \in B$; that two-sided inverse is unique, and it
  is itself a bijection. Injectivity alone gives a bijection from $A$ onto the
  image $f[A]$, and hence an inverse defined on $f[A]$ only. No choice principle
  is involved: the value $f^{-1}(b)$ is the *unique* $x$ with $f(x) = b$, so it
  is determined rather than selected. The full statement, with the uniqueness of the
  two-sided inverse, is
  [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]; the
  corresponding statement for an arbitrary surjection is not available at this point
  in the reading order, because a right inverse for every surjection is equivalent
  to the Axiom of Choice.

- **What this item does and does not do.** A function $A \to B$ is a set of ordered
  pairs, single valued and total on $A$ ([[def-function]]); ordered pairs, Cartesian
  products, images and preimages are fixed by [[def-ordered-pair]],
  [[def-cartesian-product]] and [[def-image-and-preimage-under-a-relation]]. This
  item only fixes the three adjectives and the notation used for them. Nothing here
  is proved.
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

### `def-monotone-function`

````markdown
---
id: def-monotone-function
kind: definition
title: "Nondecreasing, increasing (strictly increasing), nonincreasing, decreasing, monotone and strictly monotone real functions on a subset of $\\mathbb{R}$, with the dictionary to monotone sequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
  evidence: semantic-source
deps: [def-complete-ordered-field, def-real-order, def-interval, def-monotone-sequence, def-sequence, def-ordered-field, def-injection-surjection-bijection]
justified_by: []
aliases: [def-monotone-real-function, def-strictly-monotone]
landmark: true
short: "monotone real function"
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
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Monotone Functions (Analysis WebNotes)"
      url: "https://mathcs.org/analysis/reals/cont/defs/monofun.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]). Let $A \subseteq \mathbb{R}$ and let
$f : A \to \mathbb{R}$. Then $f$ is:

- **nondecreasing** when $f(x) \le f(y)$ for all $x, y \in A$ with $x \le y$;
- **increasing**, or *strictly increasing*, when $f(x) < f(y)$ for all
  $x, y \in A$ with $x < y$;
- **nonincreasing** when $f(x) \ge f(y)$ for all $x, y \in A$ with $x \le y$;
- **decreasing**, or *strictly decreasing*, when $f(x) > f(y)$ for all
  $x, y \in A$ with $x < y$;
- **monotone** when it is nondecreasing or nonincreasing;
- **strictly monotone** when it is increasing or decreasing.

The naming follows the convention of [[def-monotone-sequence]], which is the
convention of this library throughout: *increasing* is the strict notion and
*nondecreasing* the weak one.

**An increasing function is nondecreasing, and a decreasing function is
nonincreasing.** For $x \le y$ either $x < y$, and then $f(x) < f(y)$, hence
$f(x) \le f(y)$; or $x = y$, and then $f(x) = f(y)$. The same argument with the
inequalities reversed gives the second claim. So strictly monotone implies
monotone.

**A strictly monotone function is injective**
([[def-injection-surjection-bijection]]). Let $f$ be increasing and let
$x, y \in A$ with $x \ne y$. By trichotomy either $x < y$, and then
$f(x) < f(y)$, or $y < x$, and then $f(y) < f(x)$; in both cases
$f(x) \ne f(y)$. The decreasing case is the same argument. The converse fails,
and the failure is not exotic: a continuous injection on an interval *is*
strictly monotone ([[thm-continuous-injection-on-an-interval-is-strictly-monotone]]),
but on a domain that is not an interval it need not be.

**Negation exchanges the two directions.** For $g := -f$, that is
$g(x) := -f(x)$, the four conditions above are exchanged in pairs: $f$ is
nondecreasing exactly when $g$ is nonincreasing, and $f$ is increasing exactly
when $g$ is decreasing, because $u \le v$ holds exactly when $-v \le -u$
([[def-ordered-field]]). Several proofs below use this to reduce a nonincreasing
case to a nondecreasing one.

**Monotone on a set, not at a point.** All six conditions are conditions on the
whole of $A$; unlike continuity ([[def-continuity-real]]) there is no pointwise
version, and none is used in this library. The domain $A$ is an arbitrary subset
of $\mathbb{R}$; where a result needs $A$ to be an interval
([[def-interval]]) it says so, and the hypothesis is never decoration.

### The dictionary to monotone sequences

A sequence of reals is a function $x : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]), and [[def-monotone-sequence]] calls it nondecreasing when
$x_j \le x_k$ for all $j \le k$, increasing when $x_j < x_k$ for all $j < k$,
and so on. Those are **the same four conditions as above**, read with the
ordered set $\mathbb{N}$ in place of the ordered subset $A \subseteq \mathbb{R}$
and with the comparison of indices in place of the comparison of arguments. So
nothing new is introduced here for sequences, and the two vocabularies may be
used interchangeably: the words *nondecreasing*, *increasing*, *nonincreasing*,
*decreasing*, *monotone* and *strictly monotone* mean the corresponding
condition on the domain at hand.

One consequence is used repeatedly, and it has to be stated carefully because
composition does **not** simply preserve the four words. Let $(x_k)$ be a
**nondecreasing** sequence with $x_k \in A$ for every $k$, so that $j \le k$ gives
$x_j \le x_k$. Then:

- if $f$ is nondecreasing, $(f(x_k))$ is nondecreasing, since $f(x_j) \le f(x_k)$;
- if $f$ is nonincreasing, $(f(x_k))$ is **nonincreasing**, since
  $f(x_j) \ge f(x_k)$.

So along a nondecreasing sequence the composite inherits the direction of $f$;
and with $(x_k)$ increasing and $f$ increasing, $(f(x_k))$ is increasing, while
with $(x_k)$ increasing and $f$ decreasing, $(f(x_k))$ is decreasing.

**Along a nonincreasing sequence the direction is reversed, not inherited.** If
$(x_k)$ is nonincreasing and $f$ is nonincreasing, then $j \le k$ gives
$x_j \ge x_k$ and hence $f(x_j) \le f(x_k)$: the composite is **nondecreasing**.
The witness is $f(x) = -x$ on $A = \mathbb{R}$ with $x_k = -k$, where both $f$ and
$(x_k)$ are decreasing and $f(x_k) = k$ is increasing. Two order-reversing maps
compose to an order-preserving one, exactly as for the four words applied to
functions.
````

### `lem-monotone-with-interval-image-is-continuous`

````markdown
---
id: lem-monotone-with-interval-image-is-continuous
kind: lemma
title: "A function on an interval satisfying $f(x) \\le f(y)$ whenever $x \\le y$, whose image is order-convex, is continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, def-interval, thm-connected-subsets-of-r-are-intervals, def-connected-r, def-neighbourhood-r, def-max-min, lem-finite-set-has-max, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [lem-monotone-darboux-implies-continuous]
landmark: true
short: "monotone with order-convex image is continuous"
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
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.9: The Intermediate Value Property"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.09%3A_The_Intermediate_Value_Property"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ satisfy

$$f(x) \le f(y) \qquad \text{whenever } x, y \in I \text{ and } x \le y .$$

If the image $f[I]$ is order-convex, then $f$ is continuous on $I$
([[def-continuity-real]]).

**No definition of a monotone function is used, and none is available at this
point in the reading order.** The hypothesis is written out as the displayed
inequality; the classification of monotone functions and their discontinuities
comes later in the library. Equivalently, by
[[thm-connected-subsets-of-r-are-intervals]], the hypothesis on the image is
that $f[I]$ is connected ([[def-connected-r]]).

**The hypothesis on the image cannot be dropped.** Define $f$ on $I = [0,1]$ by
$f(x) := x$ for $x < 1$ and $f(1) := 2$. It satisfies the displayed inequality,
its image is $[0,1) \cup \{2\}$, which is not order-convex, and it is not
continuous at $1$: no $\delta$ works for $\varepsilon = 1/2$, since points of
$[0,1)$ arbitrarily close to $1$ have values close to $1$, at distance close to
$1$ from $f(1) = 2$.

**This is a genuine converse to the intermediate value property, in the presence
of the inequality.** It does not need one-sided limits of monotone functions,
which are not available at this point in the reading order; the entire proof is
the two paragraphs below, which read the required $\delta$ off the image.

## Facts & Assumptions

**Given:** An order-convex set $I \subseteq \mathbb{R}$ and a function $f : I \to \mathbb{R}$ with $f(x) \le f(y)$ whenever $x, y \in I$ and $x \le y$, such that $f[I]$ is order-convex; and a point $c \in I$ together with a real $\varepsilon > 0$.

[L1] Continuity of $f$ at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(c)| < \varepsilon$ for every $x \in I$ satisfying $|x - c| < \delta$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Order-convexity of $f[I]$: if $u, v \in f[I]$ and $u \le w \le v$ then $w \in f[I]$ ([[def-interval]]); equivalently $f[I]$ is connected ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]]).

[L3] Order and field arithmetic in $\mathbb{R}$: trichotomy and totality of the order, so any two reals are comparable and exactly one of $r < c$, $r = c$, $r > c$ holds; $\varepsilon > 0$ gives $\varepsilon/2 > 0$ and $f(c) - \varepsilon < f(c) - \varepsilon/2 < f(c)$ ([[def-ordered-field]]).

[L4] The minimum of a two-element set of reals exists and is one of the two elements ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] Absolute value: for $s > 0$, $|t| < s$ holds exactly when $-s < t < s$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 **A point of $I$ below $c$ with a value close to $f(c)$, when one exists at all.** Suppose some $p \in I$ has $p < c$. We claim there is $q \in I$ with $q < c$ and $f(q) > f(c) - \varepsilon$. If there were none, then $f(q) \le f(c) - \varepsilon$ for every $q \in I$ with $q < c$, and in particular $f(p) \le f(c) - \varepsilon$. Put $w := f(c) - \varepsilon/2$, so $f(p) \le f(c) - \varepsilon < w < f(c)$ by [L3]. Since $f(p), f(c) \in f[I]$, [L2] gives $r \in I$ with $f(r) = w$. By [L3] exactly one of $r < c$, $r = c$, $r > c$ holds: the first gives $w = f(r) \le f(c) - \varepsilon < w$, the second gives $w = f(c)$, and the third gives $w = f(r) \ge f(c)$ by the monotonicity hypothesis; each contradicts $f(c) - \varepsilon < w < f(c)$. So the claimed $q$ exists. [L2, L3]

2.1 **The left radius.** If some $p \in I$ has $p < c$, fix $q$ as in step 1.1 and put $\delta_1 := c - q > 0$; then every $x \in I$ with $c - \delta_1 < x \le c$ satisfies $q < x \le c$, hence $f(q) \le f(x) \le f(c)$ by monotonicity, hence $f(c) - \varepsilon < f(x) \le f(c)$. If no point of $I$ lies below $c$, put $\delta_1 := 1$; then the only $x \in I$ with $c - \delta_1 < x \le c$ is $x = c$, for which $f(c) - \varepsilon < f(c) = f(x) \le f(c)$ holds as well. In both cases $\delta_1 > 0$ and every $x \in I$ with $c - \delta_1 < x \le c$ satisfies $f(c) - \varepsilon < f(x) \le f(c)$. [step 1.1, L3, choose]

2.2 **The right radius, symmetrically.** Suppose some $p \in I$ has $p > c$. If every $s \in I$ with $s > c$ had $f(s) \ge f(c) + \varepsilon$, then with $w' := f(c) + \varepsilon/2$ we would have $f(c) < w' < f(c) + \varepsilon \le f(p)$, so [L2] would give $r \in I$ with $f(r) = w'$; but by [L3] exactly one of $r > c$, $r = c$, $r < c$ holds, and the first gives $w' = f(r) \ge f(c) + \varepsilon > w'$, the second gives $w' = f(c)$, and the third gives $w' = f(r) \le f(c)$ by the monotonicity hypothesis, each contradicting $f(c) < w' < f(c) + \varepsilon$. So there is $s \in I$ with $s > c$ and $f(s) < f(c) + \varepsilon$; put $\delta_2 := s - c > 0$. If no point of $I$ lies above $c$, put $\delta_2 := 1$. In both cases $\delta_2 > 0$ and every $x \in I$ with $c \le x < c + \delta_2$ satisfies $f(c) \le f(x) < f(c) + \varepsilon$. [step 1.1, L2, L3, choose]

3.1 **Combining.** Put $\delta := \min\{\delta_1, \delta_2\}$, which is a positive real by [L4]. Let $x \in I$ with $|x - c| < \delta$, so $c - \delta < x < c + \delta$ by [L5]. By totality either $x \le c$, and then $c - \delta_1 \le c - \delta < x \le c$, so step 2.1 gives $f(c) - \varepsilon < f(x) \le f(c)$; or $x \ge c$, and then $c \le x < c + \delta \le c + \delta_2$, so step 2.2 gives $f(c) \le f(x) < f(c) + \varepsilon$. In either case $-\varepsilon < f(x) - f(c) < \varepsilon$, that is $|f(x) - f(c)| < \varepsilon$ by [L5]. [step 2.1, step 2.2, L3, L4, L5]

4.1 The point $c \in I$ and the real $\varepsilon > 0$ were arbitrary, so by [L1] the function $f$ is continuous at every point of $I$, that is, continuous on $I$. [step 3.1, L1] ∎

## Remarks

- **Where order-convexity of the image is used, and where it is not.** It is used exactly twice, in steps 1.1 and 2.2, each time to convert a value strictly between two attained values into an attained value. Nothing else in the argument looks at the image. In particular, no continuity of $f$ is assumed anywhere, which is what makes the lemma a converse rather than a reformulation.

- **The endpoint cases are not a technicality.** If $c$ is the left endpoint of $I$ there is no point of $I$ below it, and the left half of the estimate is vacuous; the same at the right. Handling them by the fixed radius $1$ keeps the proof free of any hypothesis that $I$ be open or nondegenerate.

- **What this lemma is for.** It is the standard route to continuity of a function defined by a monotone construction whose image is known independently — the Cantor function is the classical instance, its image being all of $[0,1]$ — and it is stated here as a standalone lemma so that a later page may cite it rather than repeat the argument.
````

### `thm-algebra-of-continuous-functions`

````markdown
---
id: thm-algebra-of-continuous-functions
kind: theorem
title: "Sums, scalar multiples, products, absolute values, maxima, minima and quotients with nonvanishing denominator of continuous functions are continuous, as are constants, the identity and every polynomial function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, thm-algebra-of-function-limits, lem-sign-preservation-near-a-limit, def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, cor-of-reverse-triangle, def-max-min, lem-finite-set-has-max, def-integer-power, def-ordered-field, def-field]
justified_by: []
aliases: [thm-continuity-algebra]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "algebra of continuous functions"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.4, 4.9)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f, g : A \to \mathbb{R}$, let
$\alpha \in \mathbb{R}$ and let $c \in A$. Suppose $f$ and $g$ are continuous at
$c$ ([[def-continuity-real]]). Then:

1. $f + g$, $\alpha f$ and $fg$ are continuous at $c$;
2. $|f|$, the function $x \mapsto |f(x)|$, is continuous at $c$;
3. $\max\{f,g\}$ and $\min\{f,g\}$, defined pointwise by
   $x \mapsto \max\{f(x), g(x)\}$ and $x \mapsto \min\{f(x), g(x)\}$
   ([[def-max-min]]), are continuous at $c$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is continuous at
   $c$ as a function on $A_0$.

Moreover, with no hypothesis at all:

5. every constant function $A \to \mathbb{R}$ and the identity
   $\mathrm{id} : A \to \mathbb{R}$, $x \mapsto x$, are continuous on $A$; hence
   so is $x \mapsto x^{n}$ for every $n \in \mathbb{N}$
   ([[def-integer-power]]), and hence so is every **polynomial function**
   $x \mapsto a_0 + a_1 x + \dots + a_n x^{n}$ with real coefficients.

Consequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,
$\alpha f$, $fg$, $|f|$, $\max\{f,g\}$ and $\min\{f,g\}$, and
$(f/g)|_{A_0}$ is continuous on $A_0$.

**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,
and $g$ may well vanish at points of $A$ far from $c$. The hypothesis is
$g(c) \ne 0$, not "$g$ nowhere zero"; what it buys is that $c$ itself lies in
the smaller domain, which is what makes continuity there mean anything.

**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from
[[thm-algebra-of-function-limits]], which is itself proved from $\varepsilon$
and $\delta$, and claims 2, 3 and 5 are proved directly below. So no choice
principle is used anywhere in this item.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, functions $f, g : A \to \mathbb{R}$, a real $\alpha$, a point $c \in A$ at which $f$ and $g$ are continuous, and, for claim 4, the hypothesis $g(c) \ne 0$ together with $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$ ([[def-continuity-real]]).

[L2] A point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both; at an isolated point of its domain every function is continuous; at a limit point $c$ of $A$, continuity of $f$ at $c$ is exactly the statement that the limit of $f$ at $c$ exists and equals $f(c)$ ([[def-continuity-real]], [[def-limit-point-r]], [[def-neighbourhood-r]], [[def-function-limit]]).

[L3] Algebra of function limits at a limit point $c$ of $A$: if the limits of $f$ and $g$ at $c$ exist with values $L$ and $M$, then the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist with values $L+M$, $\alpha L$ and $LM$; and if $M \ne 0$ then $c$ is a limit point of $A_0$, and the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $L/M$ ([[thm-algebra-of-function-limits]]).

[L4] Sign preservation: if the limit of $g$ at a limit point $c$ of $A$ exists and is nonzero, then $c$ is a limit point of $A_0 = \{\, x \in A : g(x) \ne 0 \,\}$ ([[lem-sign-preservation-near-a-limit]]).

[L5] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$ ([[cor-of-reverse-triangle]]); and $|u| \ge 0$, $|u| = 0$ exactly when $u = 0$, $|uv| = |u||v|$ ([[lem-of-abs-value]]).

[L6] Maximum and minimum of a two-element set of reals exist ([[lem-finite-set-has-max]], [[def-max-min]]), and for all reals $u, v$ one has $\max\{u,v\} = \tfrac{1}{2}\bigl(u + v + |u-v|\bigr)$ and $\min\{u,v\} = \tfrac{1}{2}\bigl(u + v - |u-v|\bigr)$.

[L7] Ordered-field arithmetic in $\mathbb{R}$: trichotomy and totality of the order, the field identities, and $0 < 1$ so that $2 \ne 0$ and $t/2$ is defined ([[def-ordered-field]], [[def-field]]).

[L8] Integer powers: $a^{0} = 1$ and $a^{n+1} = a^{n} \cdot a$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 **Justification of the identity in [L6].** Let $u, v \in \mathbb{R}$. By totality either $u \ge v$ or $v \ge u$. If $u \ge v$ then $u - v \ge 0$, so $|u-v| = u-v$ and $\tfrac{1}{2}(u+v+|u-v|) = \tfrac{1}{2}(2u) = u = \max\{u,v\}$, while $\tfrac{1}{2}(u+v-|u-v|) = v = \min\{u,v\}$. If $v \ge u$ the same computation with the roles exchanged applies, since $|u-v| = v-u$ there. [L5, L6, L7]

1.2 **The isolated case.** Suppose $c$ is an isolated point of $A$, say $N_{\eta}(c) \cap A = \{c\}$ with $\eta > 0$ real. Then every function on $A$ is continuous at $c$ by [L2], which gives claims 1, 2 and 3 at once. For claim 4, assume $g(c) \ne 0$; then $c \in A_0$, and $N_{\eta}(c) \cap A_0 \subseteq N_{\eta}(c) \cap A = \{c\}$ with $c$ in the left-hand side, so $c$ is an isolated point of $A_0$ and every function on $A_0$, in particular $(f/g)|_{A_0}$, is continuous at $c$. [L2]

1.3 **Claim 2, at any point of $A$.** Let a real $\varepsilon > 0$ be given and let $\delta > 0$ be as in [L1] for $f$ and this $\varepsilon$. For $x \in A$ with $|x - c| < \delta$ the reverse triangle inequality gives $\bigl||f(x)| - |f(c)|\bigr| \le |f(x) - f(c)| < \varepsilon$. So $|f|$ is continuous at $c$, and no case distinction was needed. [L1, L5]

1.4 **Claim 5, constants and the identity.** If $f$ is constant then $|f(x) - f(c)| = 0 < \varepsilon$ for every $x \in A$ and every real $\varepsilon > 0$, so any $\delta > 0$ serves. For the identity, given a real $\varepsilon > 0$ take $\delta := \varepsilon$: every $x \in A$ with $|x - c| < \delta$ has $|\mathrm{id}(x) - \mathrm{id}(c)| = |x - c| < \varepsilon$. Both are continuous at every point of $A$. [L1, L5, L7]

1.5 **The limit-point case, claim 1.** Suppose $c$ is a limit point of $A$. By [L2] the limits of $f$ and of $g$ at $c$ exist and equal $f(c)$ and $g(c)$. By [L3] the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist and equal $f(c)+g(c)$, $\alpha f(c)$ and $f(c)g(c)$, which are exactly the values of those three functions at $c$; by [L2] again, each of them is continuous at $c$. [L2, L3]

1.6 **The limit-point case, claim 4.** Suppose $c$ is a limit point of $A$ and $g(c) \ne 0$. Then $c \in A_0$, and by [L4] the point $c$ is a limit point of $A_0$. By [L3] the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $f(c)/g(c)$, which is the value of $(f/g)|_{A_0}$ at $c$; by [L2] applied on the domain $A_0$, that function is continuous at $c$. [L2, L3, L4]

2.1 **Claims 1 and 4 in general.** By [L2] the point $c$ is either isolated in $A$ or a limit point of $A$; step 1.2 settles the first case and steps 1.5 and 1.6 the second. So claims 1 and 4 hold as stated. [step 1.2, step 1.5, step 1.6, L2]

3.1 **Claim 3.** By claim 1 the function $f - g = f + (-1)g$ is continuous at $c$, by step 1.3 so is $|f-g|$, and by claim 1 again so are $f + g + |f-g|$ and its scalar multiple by $1/2$. By step 1.1 that scalar multiple is the function $x \mapsto \max\{f(x), g(x)\}$, so the maximum is continuous at $c$; the same argument with $-|f-g|$ gives the minimum. [step 1.1, step 1.3, step 2.1, L6, L7]

3.2 **Claim 5, powers and polynomials.** The map $x \mapsto x^{0}$ is the constant $1$ and $x \mapsto x^{1}$ is the identity, both continuous on $A$ by step 1.4; and if $x \mapsto x^{n}$ is continuous on $A$ then so is $x \mapsto x^{n+1} = x^{n} \cdot x$, being a product of two functions continuous on $A$ by step 2.1. By induction on $n$, $x \mapsto x^{n}$ is continuous on $A$ for every $n \in \mathbb{N}$. A polynomial function $a_0 + a_1x + \dots + a_nx^{n}$ is obtained from these by finitely many scalar multiplications and additions, each of which preserves continuity by step 2.1. [step 1.4, step 2.1, L8]

4.1 Claims 1 to 5 are proved, all of them at an arbitrary point $c$ of $A$ and therefore, applied at every point, on the whole of $A$; and no sequence and no choice principle was used. [step 1.3, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Why the two-case shape, and why it is not an inconvenience.** Continuity is defined at every point of the domain, including isolated points, where no limit exists ([[def-continuity-real]]). The algebra of limits therefore cannot be applied blindly; but at an isolated point every function is continuous, so the case is settled before it is opened. Claims 2 and 5 are proved directly from $\varepsilon$ and $\delta$ and need no case distinction at all.

- **Absolute value, maximum and minimum are not in [[thm-algebra-of-function-limits]]**, and the reason is that they are not needed there. They are needed here: the extreme value theorem and the one-dimensional fixed point theorem both build auxiliary functions out of maxima, minima and differences, and [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]] builds its witnesses out of $|x - x_0|$ and quotients.

- **The converse of claim 2 is false**: $|f|$ may be continuous while $f$ is continuous nowhere. The function equal to $1$ on $\mathbb{Q}$ and to $-1$ elsewhere has constant absolute value; that it is nowhere continuous follows from the argument of [[cex-dirichlet-is-nowhere-continuous]] applied verbatim, since that argument uses only that the two values are distinct.
````

### `thm-composition-of-continuous-functions`

````markdown
---
id: thm-composition-of-continuous-functions
kind: theorem
title: "A composite of continuous functions is continuous, with no side hypothesis of the kind the composition of limits needs"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, thm-composition-of-function-limits, fs-naive-composition-of-limits, def-function-limit, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "composition of continuous functions"
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
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.7)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A, B \subseteq \mathbb{R}$, let $g : A \to \mathbb{R}$ with
$g(A) \subseteq B$, and let $f : B \to \mathbb{R}$, so that the composite
$f \circ g : A \to \mathbb{R}$ is defined. Let $c \in A$. If $g$ is continuous
at $c$ and $f$ is continuous at $g(c) \in B$, then $f \circ g$ is continuous at
$c$ ([[def-continuity-real]]).

Consequently, if $g$ is continuous on $A$ and $f$ is continuous on $B$, then
$f \circ g$ is continuous on $A$.

**No side hypothesis is needed, and that is the whole point.** The composition
theorem for limits, [[thm-composition-of-function-limits]], must assume one of
two extra conditions: either $L \in B$ with $f(L) = M$, or $g \ne L$ on a
punctured neighbourhood of $c$; with both dropped the statement is false, which
is [[fs-naive-composition-of-limits]]. The first of those conditions is exactly
*continuity of $f$ at $L$* written out, so under the hypotheses above it holds
automatically and nothing has to be assumed. The mechanism is visible in the
proof: [[def-continuity-real]] quantifies over $|y - b| < \rho$ rather than over
$0 < |y - b| < \rho$, so the value $y = b$ that the limit version cannot control
is precisely the one the continuity hypothesis does control.

## Facts & Assumptions

**Given:** Sets $A, B \subseteq \mathbb{R}$, functions $g : A \to \mathbb{R}$ with $g(A) \subseteq B$ and $f : B \to \mathbb{R}$, a point $c \in A$ at which $g$ is continuous, and the hypothesis that $f$ is continuous at $b := g(c) \in B$.

[L1] Continuity of $g$ at $c$: for every real $\rho > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|g(x) - g(c)| < \rho$ ([[def-continuity-real]]).

[L2] Continuity of $f$ at $b$: for every real $\varepsilon > 0$ there is a real $\rho > 0$ such that every $y \in B$ with $|y - b| < \rho$ satisfies $|f(y) - f(b)| < \varepsilon$ ([[def-continuity-real]]).

[L3] Neighbourhoods and the unpunctured quantifier: the condition in [L2] is imposed at every $y \in B$ with $|y - b| < \rho$, the value $y = b$ included ([[def-neighbourhood-r]], [[def-continuity-real]]).

## Proof

**Proof technique:** direct.

1.1 Write $b := g(c)$; by hypothesis $b \in B$, since $g(A) \subseteq B$ and $c \in A$. Also $(f \circ g)(c) = f(b)$. [given]

1.2 Let a real $\varepsilon > 0$ be given. By [L2] fix a real $\rho > 0$ such that every $y \in B$ with $|y - b| < \rho$ satisfies $|f(y) - f(b)| < \varepsilon$. [L2, choose]

2.1 By [L1], applied with this $\rho$, fix a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|g(x) - b| < \rho$. [step 1.2, L1, choose]

3.1 Let $x \in A$ with $|x - c| < \delta$. Then $g(x) \in B$ and $|g(x) - b| < \rho$ by step 2.1, so $y := g(x)$ is admissible in step 1.2 and gives $\bigl|f(g(x)) - f(b)\bigr| < \varepsilon$, that is $\bigl|(f \circ g)(x) - (f \circ g)(c)\bigr| < \varepsilon$. Note that the case $g(x) = b$ is included, by [L3]. [step 1.1, step 1.2, step 2.1, L3]

4.1 The real $\varepsilon > 0$ was arbitrary and a $\delta > 0$ was produced for it, so $f \circ g$ is continuous at $c$; applying this at every point of $A$ gives continuity of $f \circ g$ on $A$ whenever $g$ is continuous on $A$ and $f$ on $B$. [step 3.1, L1, L2] ∎

## Remarks

- **The contrast with limits, in one sentence.** [[thm-composition-of-function-limits]] cannot control $f$ at the single value $L$, because [[def-function-limit]] never evaluates $f$ there; continuity of $f$ at that value is exactly the missing information, and it is hypothesis (i) of that theorem. So the present theorem is not a strengthening obtained by cleverness: it is the composition theorem under the hypothesis that makes the obstruction vanish.

- **What is not claimed.** Continuity of $f \circ g$ at $c$ does not follow from continuity of $g$ at $c$ alone together with $f$ merely having a limit at $b$; nor does it follow from continuity of $f$ at $b$ together with $g$ merely having a limit at $c$, since then $g(c)$ need not be $b$ at all. Both hypotheses above are hypotheses about the same two points, $c$ and $g(c)$.
````

### `thm-connected-subsets-of-r-are-intervals`

````markdown
---
id: thm-connected-subsets-of-r-are-intervals
kind: theorem
title: "A subset of $\\mathbb{R}$ is connected if and only if it is order-convex, that is, an interval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-connected-r, def-interval, def-complete-ordered-field, lem-sup-epsilon, lem-sup-unique, def-open-and-closed-in-r, def-bounded-set, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, lem-finite-set-has-max, def-max-min, def-ordered-field, lem-of-add-order, cor-of-one-positive, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-rationals-in-an-interval-are-disconnected]
aliases: []
landmark: true
short: "connected $\\iff$ order-convex"
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.47)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.5"
      url: "https://www.jirka.org/ra/"
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $E \subseteq \mathbb{R}$. Then $E$ is connected ([[def-connected-r]]) if and
only if $E$ is **order-convex** ([[def-interval]]), that is, if and only if

$$x, z \in E \text{ and } x \le w \le z \;\Longrightarrow\; w \in E .$$

**On the word "interval".** Order-convexity is exactly the defining property
that [[def-interval]] proves for each of its nine forms, and in that sense the
theorem says that the connected subsets of $\mathbb{R}$ are the intervals. The
converse classification, that every order-convex subset of $\mathbb{R}$ is empty
or one of the nine forms, is true and is explicitly **not proved anywhere in
this library**; [[def-interval]] records that omission in its own remarks. So
the statement proved below is the equivalence with order-convexity, and the
phrase "is an interval" is to be read as "is order-convex" throughout this page.

## Facts & Assumptions

**Given:** A subset $E \subseteq \mathbb{R}$.

[L1] Separated sets, disconnection, connectedness; separated sets are disjoint ([[def-connected-r]]).

[L2] $\overline{A}$ is the smallest closed superset of $A$, so $A \subseteq B$ gives $\overline{A} \subseteq \overline{B}$ and $\overline{A} \subseteq F$ for every closed $F \supseteq A$; and $\overline{A}$ is exactly the set of points every neighbourhood of which meets $A$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]]).

[L3] Order-convexity, and the interval forms: $(-\infty,w]$ and $[w,\infty)$ are closed sets, $(-\infty,w)$ and $(w,\infty)$ are open sets, and the order is total and transitive ([[def-interval]], [[def-open-and-closed-in-r]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L4] Least-upper-bound property: a nonempty subset of $\mathbb{R}$ bounded above has a unique least upper bound ([[def-complete-ordered-field]], [[lem-sup-unique]], [[def-bounded-set]]).

[L5] Epsilon characterisation: for nonempty $S$ bounded above and $c = \sup S$, every $\varepsilon > 0$ admits $s \in S$ with $c - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L6] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$ ([[def-neighbourhood-r]]).

[L7] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L8] Ordered-field arithmetic: $0 < 1$, so $2 := 1+1 > 0$ and $2^{-1} > 0$; for $d > 0$ one has $0 < d \cdot 2^{-1} < d$; adding a constant preserves an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 Suppose $E$ is not order-convex: there are $x, z \in E$ and $w \in \mathbb{R}$ with $x \le w \le z$ and $w \notin E$; then $w \ne x$ and $w \ne z$, so $x < w < z$. Put $A := E \cap (-\infty,w)$ and $B := E \cap (w,\infty)$; then $x \in A$ and $z \in B$, so both are nonempty, and $A \cup B = E$ because no element of $E$ equals $w$. [assume-hyp, L3]

1.2 Suppose instead that $E$ is order-convex and that $(A,B)$ is a disconnection of $E$; fix $p \in A$ and $q \in B$. Separated sets are disjoint by [L1], so $p \ne q$, and interchanging the names $A$ and $B$ if necessary, which is legitimate because the hypotheses on the pair are symmetric, we may assume $p < q$. [assume-hyp, L1, choose]

1.3 For a nonempty $S \subseteq \mathbb{R}$ bounded above, $\sup S \in \overline{S}$: for every real $\varepsilon > 0$ the fact [L5] supplies $s \in S$ with $\sup S - \varepsilon < s \le \sup S$, so $|s - \sup S| < \varepsilon$ and $s \in N_\varepsilon(\sup S) \cap S$; thus every neighbourhood of $\sup S$ meets $S$, and [L2] gives $\sup S \in \overline{S}$. [L2, L4, L5, L6]

2.1 In the situation of step 1.1 the pair $(A,B)$ is a disconnection: $(-\infty,w]$ is a closed set containing $A$, so $\overline{A} \subseteq (-\infty,w]$ by [L2], whence $\overline{A} \cap B \subseteq (-\infty,w] \cap (w,\infty) = \varnothing$; symmetrically $\overline{B} \subseteq [w,\infty)$ and $A \cap \overline{B} = \varnothing$. So $A$ and $B$ are separated, nonempty, and their union is $E$, and $E$ is disconnected. [step 1.1, L1, L2, L3]

2.2 In the situation of step 1.2 put $S := A \cap [p,q]$; it is nonempty because $p \in A$ and $p \le p \le q$, and it is bounded above by $q$, so $c := \sup S$ exists by [L4], and $p \le c \le q$ since $p \in S$ and $q$ is an upper bound. [step 1.2, L3, L4]

3.1 $c \in A$: from $S \subseteq A$ and [L2] we get $\overline{S} \subseteq \overline{A}$, and $c \in \overline{S}$ by step 1.3, so $c \in \overline{A}$ and hence $c \notin B$ because $\overline{A} \cap B = \varnothing$; on the other hand $p \le c \le q$ with $p, q \in E$ and $E$ order-convex gives $c \in E = A \cup B$, so $c \in A$. [step 1.2, step 1.3, step 2.2, L1, L2]

4.1 $c < q$, since $c \in A$ and $q \in B$ are distinct by [L1] while $c \le q$; and every $v$ with $c < v \le q$ lies in $B$: such a $v$ satisfies $p \le c < v \le q$, so $v \in E$ by order-convexity, and $v \notin A$, for otherwise $v \in A \cap [p,q] = S$ would force $v \le c$. [step 1.2, step 2.2, step 3.1, L1, L3]

5.1 $c \in \overline{B}$, which is impossible: given a real $\varepsilon > 0$, put $t := \min\{\varepsilon \cdot 2^{-1},\ (q - c) \cdot 2^{-1}\}$, a positive real by [L7] and [L8] since $q - c > 0$, and $v := c + t$; then $c < v$ and $v \le c + (q-c) \cdot 2^{-1} < q$, so $v \in B$ by step 4.1, while $|v - c| = t \le \varepsilon \cdot 2^{-1} < \varepsilon$, so $v \in N_\varepsilon(c) \cap B$. Hence every neighbourhood of $c$ meets $B$ and $c \in \overline{B}$ by [L2]; but $c \in A$ by step 3.1 and $A \cap \overline{B} = \varnothing$ by [L1]. So the assumed disconnection cannot exist and an order-convex $E$ is connected. [step 3.1, step 4.1, L1, L2, L6, L7, L8]

6.1 Step 2.1 shows that a set which is not order-convex is disconnected, hence a connected set is order-convex; step 5.1 shows that an order-convex set admits no disconnection, hence is connected. The two together are the asserted equivalence. [step 2.1, step 5.1] ∎

## Remarks

- **Where completeness is spent.** Only in step 2.2, which produces
  $\sup(A \cap [p,q])$; no other step uses the least-upper-bound property, and
  the rest is the order, ordered-field arithmetic and the definition of
  separation. The obstruction over an incomplete ordered field is traceable to
  the failure of that supremum to exist, and it is visible in
  [[cex-rationals-in-an-interval-are-disconnected]]: the set
  $\mathbb{Q} \cap [0,2]$ contains all the rationals between its endpoints and is
  nevertheless disconnected as a subset of $\mathbb{R}$, split at an irrational
  point that $\mathbb{Q}$ does not see.

- **The two directions are of different characters.** "Not order-convex implies
  disconnected" is a construction, step 1.1, and needs nothing beyond the order.
  "Order-convex implies connected" is where the work sits, and the supremum
  $c$ produced in step 2.2 is the point at which the two pieces would have to
  meet; the contradiction is that it is adherent to both.

- **The theorem is about subsets of $\mathbb{R}$ and its statement is written in
  order vocabulary**, so it cannot even be stated where no order is present;
  [[rem-r-native-topology-scope]] collects the results on this page with that
  feature.
````

### `thm-continuous-injection-on-an-interval-is-strictly-monotone`

````markdown
---
id: thm-continuous-injection-on-an-interval-is-strictly-monotone
kind: theorem
title: "A continuous injective function on an interval is strictly monotone"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-continuity-real, def-monotone-function, thm-intermediate-value, def-interval, def-injection-surjection-bijection, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "continuous injection on an interval is strictly monotone"
proof_strategy: contradiction
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
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "Continuous Injection of Interval is Strictly Monotone (ProofWiki)"
      url: "https://proofwiki.org/wiki/Continuous_Injection_of_Interval_is_Strictly_Monotone"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and
injective ([[def-injection-surjection-bijection]]). Then $f$ is strictly
monotone ([[def-monotone-function]]): either $f(x) < f(y)$ whenever $x < y$ in
$I$, or $f(x) > f(y)$ whenever $x < y$ in $I$.

**Both hypotheses are needed and neither can be weakened to the other.**
Continuity alone does not give injectivity, and injectivity alone does not give
monotonicity: the companion page exhibits a continuous injection on
$[0,1] \cup [2,3]$, a set that is not order-convex, that is not monotone. So it
is order-convexity of the domain, and not merely continuity, that forces the
conclusion.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ and a continuous injective $f : I \to \mathbb{R}$.

[A1] $I$ is order-convex: $x, y \in I$ and $x \le z \le y$ imply $z \in I$ ([[def-interval]]).

[A2] $f$ is injective: $f(u) = f(v)$ implies $u = v$ ([[def-injection-surjection-bijection]]).

[A3] $f$ is continuous at every point of $I$; the restriction of $f$ to a subset $S \subseteq I$ is continuous at every point of $S$, since the $\varepsilon$-$\delta$ condition of [[def-continuity-real]] quantifies over fewer points when the domain shrinks.

[L1] Intermediate value theorem: if $u \le v$, $g : [u,v] \to \mathbb{R}$ is continuous and $y$ lies between $g(u)$ and $g(v)$ in either order, then $g(p) = y$ for some $p \in [u,v]$ ([[thm-intermediate-value]]).

[L2] Strictly between any two distinct reals there lies a real ([[lem-rat-embeds-dense]]).

[L3] $f$ is increasing when $f(x) < f(y)$ for all $x < y$ in $I$, decreasing when $f(x) > f(y)$ for all $x < y$ in $I$, and strictly monotone when it is one or the other ([[def-monotone-function]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $f$ is not strictly monotone: $f$ is not increasing and $f$ is not decreasing. [assume-contra]

1.2 **Three-point claim.** For all $u < v < w$ in $I$, either $f(u) < f(v) < f(w)$ or $f(u) > f(v) > f(w)$. Suppose not. By injectivity the three values are pairwise distinct, so the failure means that $f(v)$ is not between $f(u)$ and $f(w)$; hence either $f(v) > f(u)$ and $f(v) > f(w)$, or $f(v) < f(u)$ and $f(v) < f(w)$. [A2]

2.1 Being decreasing means $f(x) > f(y)$ for all $x < y$ in $I$, so its failure gives $a, b \in I$ with $a < b$ and not $f(a) > f(b)$, that is $f(a) \le f(b)$; injectivity together with $a \ne b$ gives $f(a) \ne f(b)$, so $f(a) < f(b)$. [step 1.1, A2, L3]

2.2 In the first case of step 1.2 pick a real $y$ with $\max\{f(u), f(w)\} < y < f(v)$; in the second pick $y$ with $f(v) < y < \min\{f(u), f(w)\}$. Such a $y$ exists because the two bounds are distinct reals. [step 1.2, L2]

3.1 With $y$ as in step 2.2, $[u,v] \subseteq I$ and $[v,w] \subseteq I$ by order-convexity, and $f$ restricted to each is continuous; $y$ lies strictly between $f(u)$ and $f(v)$, and strictly between $f(v)$ and $f(w)$. So there are $p \in [u,v]$ and $q \in [v,w]$ with $f(p) = y = f(q)$. [step 2.2, A1, A3, L1]

4.1 Since $f(p) = y \ne f(v)$ and $f(q) = y \ne f(v)$ we have $p \ne v \ne q$, so $u \le p < v < q \le w$ and in particular $p \ne q$; but $f(p) = f(q)$ contradicts injectivity. The three-point claim of step 1.2 is therefore established. [step 1.2, step 3.1, A2]

5.1 Let $x \in I$ with $x < a$. Applying the three-point claim to $x < a < b$ gives $f(x) < f(a) < f(b)$ or $f(x) > f(a) > f(b)$; the second is impossible because $f(a) < f(b)$. So $f(x) < f(a)$. [step 2.1, step 4.1]

6.1 Let $x \in I$ with $x > a$. If $x < b$, the three-point claim applied to $a < x < b$ gives $f(a) < f(x) < f(b)$, the alternative being impossible as in step 5.1; if $x = b$ then $f(a) < f(x)$ by step 2.1; and if $x > b$, the claim applied to $a < b < x$ gives $f(a) < f(b) < f(x)$. In every case $f(x) > f(a)$. [step 2.1, step 4.1]

6.2 Let $c, d \in I$ with $c < d \le a$; we show $f(c) < f(d)$. If $d = a$ then $c < a$ and step 5.1 gives $f(c) < f(a) = f(d)$. If $d < a$ then the three-point claim applied to $c < d < a$ gives $f(c) < f(d) < f(a)$ or $f(c) > f(d) > f(a)$, and the second contradicts $f(d) < f(a)$ from step 5.1; so $f(c) < f(d)$. [step 4.1, step 5.1]

7.1 Let $c, d \in I$ with $a \le c < d$; we show $f(c) < f(d)$. If $c = a$ then $d > a$ and step 6.1 gives $f(d) > f(a) = f(c)$. If $a < c$ then the three-point claim applied to $a < c < d$ gives $f(a) < f(c) < f(d)$ or $f(a) > f(c) > f(d)$, and the second contradicts $f(c) > f(a)$ from step 6.1; so $f(c) < f(d)$. [step 4.1, step 6.1]

7.2 The only remaining case is $c < a < d$, where steps 5.1 and 6.1 give $f(c) < f(a) < f(d)$ directly. [step 5.1, step 6.1]

8.1 Steps 7.1, 6.2 and 7.2 cover every pair $c < d$ in $I$: either $a \le c$, which is step 7.1, or $c < a$, and then $d \le a$, which is step 6.2, or $a < d$, which is step 7.2. So $f(x) < f(y)$ whenever $x < y$ in $I$, that is, $f$ is increasing. This contradicts step 1.1, which assumed that $f$ is not increasing; the assumption of step 1.1 is therefore false and $f$ is strictly monotone. [step 1.1, step 7.1, step 6.2, step 7.2, L3, discharge-contradiction] ∎

## Remarks

- **The three-point claim is the whole content.** Steps 1.2, 2.2, 3.1 and 4.1 say that a continuous injection on an interval cannot fold: the middle of three points always has the middle value. Everything after that is bookkeeping, comparing an arbitrary pair with one fixed pair $a < b$ on which the direction is known.

- **Where the intermediate value theorem enters.** Once only, in step 3.1, and it is what makes order-convexity of $I$ indispensable: the segments $[u,v]$ and $[v,w]$ must lie inside the domain for the theorem to apply. That is exactly the hypothesis the companion page's counterexample removes.
````


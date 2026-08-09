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

- critical risk (11): 6 declared dependencies; 6 cited facts; 6 numbered proof steps; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; analytic limiting/completeness language

## Target item — `cor-sequential-criterion-for-nonexistence`

Normalized current SHA-256: `480509c157cf737abb39b7d5653e793139f368db4355ca60573b11836714a830`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-sequential-criterion-for-nonexistence
kind: corollary
title: "A function has no limit at $c$ as soon as two sequences in $A \\setminus \\{c\\}$ tending to $c$ give different limits of the values"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-sequential-criterion-for-function-limits, def-function-limit, def-limit-point-r, def-sequence, def-real-limit, lem-limit-unique]
justified_by: []
aliases: [cor-divergence-test-for-function-limits]
landmark: true
short: "sequential test for no limit"
proof_strategy: contrapositive
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Cor. to Thm 4.2)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c$ be a limit
point of $A$ ([[def-limit-point-r]]). Then $f$ has **no** limit at $c$ — that
is, no $L \in \mathbb{R}$ satisfies $\lim_{x \to c} f(x) = L$
([[def-function-limit]]) — as soon as either of the following occurs.

1. There are sequences $(x_k)$ and $(y_k)$ with all terms in $A \setminus \{c\}$,
   both converging to $c$, and reals $P \ne Q$ with $f(x_k) \to P$ and
   $f(y_k) \to Q$ ([[def-sequence]], [[def-real-limit]]).
2. There is a sequence $(x_k)$ with all terms in $A \setminus \{c\}$, converging
   to $c$, for which $(f(x_k))$ does not converge.

**Only the choice-free half of the Heine criterion is used.** The proof runs the
implication from condition 1 to condition 2 of
[[thm-sequential-criterion-for-function-limits]], which is a theorem of ZF; no
sequence is constructed here, both being supplied by the hypothesis. So this
corollary, the workhorse for showing that a limit fails to exist, costs no
choice principle at all.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a limit point $c$ of $A$ ([[def-limit-point-r]], [[def-function-limit]]).

[L1] Heine criterion, the direction from the $\varepsilon$-$\delta$ limit to sequences: if $\lim_{x \to c} f(x) = L$ then $f(z_k) \to L$ for every sequence $(z_k)$ with all terms in $A \setminus \{c\}$ converging to $c$ ([[thm-sequential-criterion-for-function-limits]]). That direction is proved without any choice principle.

[L2] A sequence of reals has at most one limit, so two limits of the same sequence are equal, and a sequence with a limit converges ([[lem-limit-unique]], [[def-real-limit]], [[def-sequence]]).

## Proof

**Proof technique:** contrapositive.

1.1 Each of the two claims has the form "hypothesis $\Rightarrow$ $f$ has no limit at $c$"; we prove the contrapositive of each, namely that if some $L \in \mathbb{R}$ satisfies $\lim_{x \to c} f(x) = L$ then neither hypothesis can hold. [contrapositive-reduce]

1.2 Assume there is $L \in \mathbb{R}$ with $\lim_{x \to c} f(x) = L$. [assume-hyp]

2.1 Let $(z_k)$ be an arbitrary sequence with all terms in $A \setminus \{c\}$ converging to $c$. By [L1], $(f(z_k))$ converges, with limit $L$. [step 1.2, L1]

3.1 Under hypothesis 1 this applies to $(x_k)$ and to $(y_k)$: $f(x_k) \to P$ and $f(x_k) \to L$ give $P = L$ by [L2], and likewise $Q = L$, so $P = Q$; hypothesis 1, which asserts $P \ne Q$, therefore fails. [step 2.1, L2]

3.2 Under hypothesis 2 it applies to $(x_k)$ and gives that $(f(x_k))$ converges; hypothesis 2, which asserts that it does not, therefore fails. [step 2.1, L2]

4.1 So the existence of a limit of $f$ at $c$ excludes both hypotheses; contrapositively, either hypothesis excludes the existence of a limit of $f$ at $c$. [step 3.1, step 3.2, discharge-contrapositive] ∎

## Remarks

- **This is the standard way a limit is shown not to exist**, and the reason is that the direct route would have to refute a statement beginning "there exists $L$": one would have to argue about every real $L$ at once. Two sequences reduce that to a single computation, as on the companion page for $\psi(1/x)$ at $0$ and for the indicator of $\mathbb{Q}$ at every point.

- **The hypothesis "all terms in $A \setminus \{c\}$" is not decorative.** A sequence allowed to take the value $c$ carries information about $f(c)$, which [[def-function-limit]] deliberately ignores; the constant sequence $z_k = c$ would then refute every limit at once.

- **What the corollary does not say.** It gives a sufficient condition for the limit not to exist, not a necessary one in any weaker form: the converse statement, that a limit exists as soon as all such image sequences converge to one value, is the other direction of [[thm-sequential-criterion-for-function-limits]] and is exactly the direction that spends countable choice ([[rem-heine-criterion-choice-cost]]).
````

## Wave 7 provenance row for the target

```json
{
  "id": "cor-sequential-criterion-for-nonexistence",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_limoffunc.html"
  ],
  "rationale": "Lebl’s exact sequential criterion immediately yields both local nonexistence tests. The local corollary packages the two-sequence and nonconvergent-image variants and records that only the choice-free direction is used.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-real-analysis-completeness-limits.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-sequential-criterion-for-function-limits",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c$ be a limit\npoint of $A$ ([[def-limit-point-r]]) and let $L \\in \\mathbb{R}$. The following\nare equivalent.\n\n1. $\\lim_{x \\to c} f(x) = L$ ([[def-function-limit]]).\n2. For **every** sequence $(x_k)_{k \\in \\mathbb{N}}$ with $x_k \\in A$ and\n   $x_k \\ne c$ for every $k$, and $x_k \\to c$ ([[def-sequence]],\n   [[def-real-limit]]), the sequence $(f(x_k))_{k \\in \\mathbb{N}}$ converges to\n   $L$.\n\n**The two directions do not cost the same.** The implication from 1 to 2 is\nproved in ZF: the sequence is handed to the proof, and nothing is selected. The\nimplication from 2 to 1, as proved below, invokes the axiom of countable choice\n([[def-countable-choice]]) exactly once, at step 3.2, to select one bad point\nfrom each of countably many nonempty sets. What this library does and does not\nclaim about that cost is recorded in [[rem-heine-criterion-choice-cost]]; the\nsame asymmetry appears, for the same reason, in\n[[lem-sequential-characterisation-of-closure-r]].\n\nBecause of this, the results on this page that can be proved directly from\n$\\varepsilon$ and $\\delta$ — the algebra of limits, order preservation, the\nsqueeze theorem, composition — **are** proved that way, and not through this\ncriterion. What the criterion is for is the transfer of sequential results to\nfunctions, and above all the *negative* use recorded in\n[[cor-sequential-criterion-for-nonexistence]], which needs only the choice-free\ndirection.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-limit-unique",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $x, y \\in\n\\mathbb{R}$. If $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$\n([[def-real-limit]]), then $x = y$. A sequence therefore has at most one limit,\nand when a limit exists it may be denoted $\\lim_{k} x_k$.",
      "uses": [
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "uses": [
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],\n[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and\n$\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],\n[[def-nat-order]]).\n\nA **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write\n$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or\n$(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is\nthe subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$.\n\nLet $(x_k)$ be a sequence of reals and let $P$ be a property of indices.\n\n- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for\n  every $k \\in \\mathbb{N}$; it is **unbounded** otherwise.\n- $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds\n  for every $k \\ge K$.\n- $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some\n  $k \\ge K$ for which $P(k)$ holds.\n- For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence\n  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is\n  again a sequence of reals.\n- A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if\n  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$\n  along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$;\n  it is again a sequence of reals.\n\n**Convergence and Cauchyness are not defined here.** They are already fixed, for\nsequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to\n$x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is\n$K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$\nis *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$\nwith $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the\ntoolkit for those two notions and does not restate them. A sequence\n**converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "3.1",
        "3.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Each of the two claims has the form \"hypothesis $\\Rightarrow$ $f$ has no limit at $c$\"; we prove the contrapositive of each, namely that if some $L \\in \\mathbb{R}$ satisfies $\\lim_{x \\to c} f(x) = L$ then neither hypothesis can hold.",
      "step": "1.1",
      "inputs": [
        "contrapositive-reduce"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Assume there is $L \\in \\mathbb{R}$ with $\\lim_{x \\to c} f(x) = L$.",
      "step": "1.2",
      "inputs": [
        "assume-hyp"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Let $(z_k)$ be an arbitrary sequence with all terms in $A \\setminus \\{c\\}$ converging to $c$. By [L1], $(f(z_k))$ converges, with limit $L$.",
      "step": "2.1",
      "inputs": [
        "L1",
        "1.2"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Under hypothesis 1 this applies to $(x_k)$ and to $(y_k)$: $f(x_k) \\to P$ and $f(x_k) \\to L$ give $P = L$ by [L2], and likewise $Q = L$, so $P = Q$; hypothesis 1, which asserts $P \\ne Q$, therefore fails.",
      "step": "3.1",
      "inputs": [
        "L2",
        "2.1"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "Under hypothesis 2 it applies to $(x_k)$ and gives that $(f(x_k))$ converges; hypothesis 2, which asserts that it does not, therefore fails.",
      "step": "3.2",
      "inputs": [
        "2.1",
        "L2"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "So the existence of a limit of $f$ at $c$ excludes both hypotheses; contrapositively, either hypothesis excludes the existence of a limit of $f$ at $c$.",
      "step": "4.1",
      "inputs": [
        "3.1",
        "3.2",
        "discharge-contrapositive"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The Statement quantifies over fixed nonempty data and introduces no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "No zero-valued parameter, zero denominator, or zero-index boundary affects the Statement."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 2.1: Let $(z_k)$ be an arbitrary sequence with all terms in $A \\setminus \\{c\\}$ converging to $c$. By [L1], $(f(z_k))$ converges, with limit $L$."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The hypotheses exclude or do not involve a degenerate equality/constant case."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement has no interval endpoint or finite-index endpoint boundary."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.2: all existence or selection moves were checked; any countable-choice use is explicitly tagged in the cited step."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement is not a biconditional; it is a one-directional result, example, or refutation."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement is not a biconditional; no reverse implication is asserted."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract after reading every numbered step and every cited target section; independent risk review remains for A5/A6."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cor-sequential-criterion-for-nonexistence",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-sequential-criterion-for-function-limits",
    "declared_target": "thm-sequential-criterion-for-function-limits",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-sequential-criterion-for-nonexistence",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-function-limit",
    "declared_target": "def-function-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-sequential-criterion-for-nonexistence",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-limit-point-r",
    "declared_target": "def-limit-point-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-sequential-criterion-for-nonexistence",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-sequence",
    "declared_target": "def-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-sequential-criterion-for-nonexistence",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-sequential-criterion-for-nonexistence",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-limit-unique",
    "declared_target": "lem-limit-unique",
    "target_statement_provenance": "literature-derived",
    "targetPage": "sequences-and-limits",
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

## Full text of every cited or declared item (7)

### `def-function-limit`

````markdown
---
id: def-function-limit
kind: definition
title: "The $\\varepsilon$-$\\delta$ limit $\\lim_{x \\to c} f(x) = L$ of $f : A \\to \\mathbb{R}$ at a limit point $c$ of $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-point-r, def-neighbourhood-r, def-interval, def-real-order, def-complete-ordered-field, lem-of-abs-value, lem-rat-embeds-dense]
justified_by: [lem-function-limit-unique]
aliases: [def-epsilon-delta-limit, def-limit-of-a-function]
landmark: true
short: "the $\\varepsilon$-$\\delta$ limit of a function"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Def. 4.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) with its order and absolute value
([[def-real-order]]).

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$, let $c \in \mathbb{R}$
be a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \in \mathbb{R}$.
We say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write

$$\lim_{x \to c} f(x) = L ,$$

when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ 0 < |x - c| < \delta \ \Longrightarrow\ |f(x) - L| < \varepsilon\ \bigr],$$

where $\varepsilon$ and $\delta$ range over the **positive reals**.

In the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:
for every real $\varepsilon > 0$ there is a real $\delta > 0$ with

$$f\bigl(A \cap N^{*}_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}(L),$$

$N^{*}_{\delta}(c) = \{\, y : 0 < |y - c| < \delta \,\}$ being the punctured
$\delta$-neighbourhood of $c$ and $N_{\varepsilon}(L) = (L - \varepsilon,\ L +
\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because
$|f(x) - L| < \varepsilon$ says exactly $f(x) \in N_\varepsilon(L)$, and
$0 < |x - c| < \delta$ says exactly $x \in N^{*}_\delta(c)$.

**Three features of this definition are load bearing, not decoration.**

1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that
   says every punctured neighbourhood of $c$ meets $A$, so for every $\delta > 0$
   the set $A \cap N^{*}_\delta(c)$ over which the implication quantifies is
   nonempty. Drop the requirement and the implication can be satisfied
   vacuously by *every* real $L$ at once, which is exactly what
   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$
   that is not a limit point of $A$ — an isolated point — the symbol
   $\lim_{x \to c} f(x)$ is therefore **not defined** in this library.

2. **$c \in A$ is not required.** A limit point of $A$ need not belong to $A$
   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This
   is what allows a limit to be taken at a point where the function is not
   defined at all, as at $0$ for $x \mapsto x\,\psi(1/x)$.

3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis
   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the
   single point $c$ changes nothing. Equality of the limit with the value is an
   extra condition, not a consequence: [[fs-limit-equals-value]].

**The notation presumes uniqueness.** Writing $\lim_{x \to c} f(x) = L$ treats
the left-hand side as a name for a single real number, which is legitimate only
because at a limit point at most one $L$ can satisfy the displayed condition.
That obligation is discharged by [[lem-function-limit-unique]], recorded in this
item's `justified_by`. As with $\sup S$ ([[rem-sup-conventions]]) and
$\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function
already known to have a limit at $c$.

**Real and rational $\varepsilon$ define the same relation.** Above,
$\varepsilon$ and $\delta$ range over the positive reals. Restricting either
quantifier to the positive rationals gives the same relation: every positive
rational is a positive real, and below every positive real lies a positive
rational ([[lem-rat-embeds-dense]]), so an $\varepsilon$-condition verified for
all positive rationals is verified for an arbitrary positive real $\eta$ by
running it at a rational $\varepsilon$ with $0 < \varepsilon < \eta$, and a
$\delta$ produced as a real may be shrunk to a rational one below it. This is
the passage sanctioned in the remarks of [[def-sequence]], and it is what lets
this definition be compared with [[def-real-limit]], whose $\varepsilon$ is
rational, in [[thm-sequential-criterion-for-function-limits]].

## Remarks

- **Terminology.** *Limit point* here is a property of the set $A$ and the point
  $c$, in the sense of [[def-limit-point-r]]; it has nothing to do with
  subsequential limits ([[def-subsequential-limit]]), and the distinction is the
  one that item records.

- **Why the punctured condition, and not $|x - c| < \delta$.** With the
  unpunctured condition the definition would force $f$ to be defined at $c$ and
  would force $|f(c) - L| < \varepsilon$ for every $\varepsilon$, that is,
  $L = f(c)$. The resulting notion is continuity at $c$, a strictly stronger
  condition, and conflating the two is the error catalogued in
  [[fs-limit-equals-value]].

- **One-sided and infinite variants.** Restricting the domain to one side of $c$
  gives the one-sided limits of [[def-one-sided-limits]]; replacing the
  conditions on $x$ or on $f(x)$ by unboundedness conditions gives the limits at
  and to infinity of [[def-limits-at-infinity]]. Both are built on this
  definition rather than beside it.
````

### `def-limit-point-r`

````markdown
---
id: def-limit-point-r
kind: definition
title: "Limit point, isolated point, adherent point, derived set, and dense subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-open-and-closed-in-r, def-interior-closure-boundary-r]
justified_by: []
aliases: [def-accumulation-point-r, def-derived-set-r, def-dense-in-r]
landmark: true
short: "limit point, isolated point, dense"
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
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and $x \in \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]] and closure as in
[[def-interior-closure-boundary-r]].

- $x$ is an **adherent point** of $A$ when $N_\varepsilon(x) \cap A \ne
  \varnothing$ for every real $\varepsilon > 0$.
- $x$ is a **limit point** (or *accumulation point*) of $A$ when
  $N^{*}_\varepsilon(x) \cap A \ne \varnothing$ for every real
  $\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.
- $x$ is an **isolated point** of $A$ when $x \in A$ and there is a real
  $\varepsilon > 0$ with $N_\varepsilon(x) \cap A = \{x\}$.
- The **derived set** of $A$ is
  $$A' \;:=\; \{\, x \in \mathbb{R} : x \text{ is a limit point of } A \,\}.$$
- $A$ is **dense in $\mathbb{R}$** when $\overline{A} = \mathbb{R}$.

**A limit point is an adherent point**, since $N^{*}_\varepsilon(x) \subseteq
N_\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since
$x \in N_\varepsilon(x) \cap A$ ([[def-neighbourhood-r]]). So the adherent
points of $A$ are exactly the points of $A \cup A'$, a statement proved as part
of [[thm-closure-characterisations-r]].

**Limit point and isolated point are exact opposites inside $A$.** For
$x \in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point
of $A$. Indeed $N_\varepsilon(x) \cap A = \{x\}$ says precisely that
$N^{*}_\varepsilon(x) \cap A = \varnothing$, because $x$ itself always lies in
$N_\varepsilon(x) \cap A$ when $x \in A$; so the existence of an $\varepsilon$
witnessing isolation is the negation of the condition defining a limit point.
A point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and
never both.

**A limit point need not belong to the set, and a point of the set need not be a
limit point.** Both possibilities occur, and the two examples that matter later
are $0$, which is a limit point of $\{\, 1/k : k \ge 1 \,\}$ without belonging
to it, and $0$ again, which belongs to $\{0\} \cup [1,2]$ as an isolated point.

## Remarks

- **Terminology: *limit point* here is about a set, never about a sequence.**
  This library reserves *subsequential limit* for the sequential notion
  ([[def-subsequential-limit]]), and the two are genuinely different: the
  constant sequence $x_k = 0$ has $0$ as a subsequential limit, while its set of
  values $\{0\}$ has no limit point at all. The distinction is the one
  [[def-subsequential-limit]] records under "Terminology", and it is respected
  throughout this page.

- **Density is defined through the closure, not through intervals.** Saying
  $\overline{A} = \mathbb{R}$ is equivalent to saying that every nonempty open
  subset of $\mathbb{R}$ meets $A$, and also to saying that every neighbourhood
  of every real meets $A$; the equivalences follow from
  [[thm-closure-characterisations-r]] and are used in that form in
  [[lem-q-and-irrationals-dense-r]].

- **The derived set need not be comparable with the set.** It can be strictly
  larger, as for $\mathbb{Q}$: every punctured neighbourhood of any real
  contains a rational, since density supplies one strictly between $x$ and
  $x + \varepsilon$ ([[lem-q-and-irrationals-dense-r]]), so the derived set of
  $\mathbb{Q}$ is all of $\mathbb{R}$. It can be strictly smaller, as for
  $\{0\}$, whose derived set is empty; and it can be neither, as for
  $\{0\} \cup (1,2)$, whose derived set is $[1,2]$, a set containing points
  outside the original and omitting the point $0$ of it. A closed set satisfying
  $A \subseteq A'$ is called perfect ([[def-perfect-set-r]]).
````

### `def-real-limit`

````markdown
---
id: def-real-limit
kind: definition
title: "Limits and Cauchy sequences of reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## Remarks

- Quantifying over rational $\varepsilon$ loses nothing: below any real
  $\varepsilon > 0$ lies a positive rational ([[lem-rat-embeds-dense]]).
- $|\cdot|$ is the absolute value of [[def-real-order]].
````

### `def-sequence`

````markdown
---
id: def-sequence
kind: definition
title: "Sequences of reals: bounded, eventually, frequently, tails, subsequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-natural-numbers, def-nat-order, def-real-limit, def-real-order, def-complete-ordered-field, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "$(x_k)$, bounded, eventually, subsequence"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "Sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],
[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and
$\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],
[[def-nat-order]]).

A **sequence of reals** is a function $x : \mathbb{N} \to \mathbb{R}$. We write
$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or
$(x_k)_{k \in \mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is
the subset $\{\, x_k : k \in \mathbb{N} \,\} \subseteq \mathbb{R}$.

Let $(x_k)$ be a sequence of reals and let $P$ be a property of indices.

- $(x_k)$ is **bounded** if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for
  every $k \in \mathbb{N}$; it is **unbounded** otherwise.
- $P$ holds **eventually** if there is $K \in \mathbb{N}$ such that $P(k)$ holds
  for every $k \ge K$.
- $P$ holds **frequently** if for every $K \in \mathbb{N}$ there is some
  $k \ge K$ for which $P(k)$ holds.
- For $K \in \mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence
  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \in \mathbb{N}$; it is
  again a sequence of reals.
- A function $n : \mathbb{N} \to \mathbb{N}$ is **strictly increasing** if
  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$
  along $n$ is the composite $x \circ n$, written $(x_{n_k})_{k \in \mathbb{N}}$;
  it is again a sequence of reals.

**Convergence and Cauchyness are not defined here.** They are already fixed, for
sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to
$x \in \mathbb{R}$ when for every rational $\varepsilon > 0$ there is
$K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and $(x_k)$
is *Cauchy* when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$
with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$. This page builds the
toolkit for those two notions and does not restate them. A sequence
**converges** if it converges to some real, and **diverges** if it does not.

## Remarks

- **Identification of $\mathbb{Q}$ with its image.** The map $q \mapsto \hat q$
  is an embedding of ordered fields ([[lem-rat-embeds-dense]]), and as is
  standard we write $q$ for $\hat q$, so that a rational may be compared with a
  real without further comment. [[def-real-limit]] is stated with the hat; every
  rational $\varepsilon$ occurring on this page is its image under this
  embedding.

- **Rational and real $\varepsilon$ agree.** [[def-real-limit]] tests convergence
  against every *rational* $\varepsilon > 0$, and its own remark records that
  this loses nothing. Spelled out: suppose that for every rational
  $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all
  $k \ge K$, and let $\eta > 0$ be an arbitrary *real*. Since $0 < \eta$,
  density of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]) supplies a
  rational $\varepsilon$ with $0 < \varepsilon < \eta$, and the index $K$
  belonging to that $\varepsilon$ satisfies $|x_k - x| < \varepsilon < \eta$ for
  all $k \ge K$. The converse implication is immediate, since every positive
  rational is a positive real. So the two formulations define the same relation,
  and the same two lines apply verbatim to the Cauchy condition and to any
  condition of the shape "for every $\varepsilon > 0$, eventually
  $\cdots < \varepsilon$". Proofs on this page therefore run the test with a real
  $\varepsilon$ wherever that is more convenient, and say so by citing this
  remark; nothing is smuggled in.

- **Constant sequences converge.** For $c \in \mathbb{R}$ the constant sequence
  $x_k := c$ converges to $c$, because $|x_k - c| = |0| = 0 < \varepsilon$ for
  every $\varepsilon > 0$ and every $k$; it is bounded by $|c|$.

- **Eventually and frequently are dual.** $P$ holds frequently exactly when
  $\lnot P$ does not hold eventually, and $P$ holds eventually exactly when
  $\lnot P$ does not hold frequently. So the two quantifier patterns are
  negations of one another applied to the complementary property, and there is no
  third pattern hiding between them.

- **A sequence is not its range.** $(x_k)$ is a function, not a set, and the
  range does not determine the function: the sequence $x_0 = 0$, $x_k = 1$ for
  $k \ge 1$ and the sequence $y_0 = y_1 = 0$, $y_k = 1$ for $k \ge 2$ have the
  same range $\{0, 1\}$, yet they differ at $k = 1$, so they are different
  sequences. Order and repetition are part of the data and the range forgets
  both. Boundedness, on the other hand, depends only on the range.

- **Indexing.** Sequences here start at $k = 0$ because $\mathbb{N}$ contains
  $0$ ([[def-natural-numbers]]). Texts that index from $1$ describe the same
  objects up to a shift, and the shift changes nothing about convergence, by
  [[lem-limit-of-tail]].
````

### `lem-limit-unique`

````markdown
---
id: lem-limit-unique
kind: lemma
title: "A sequence has at most one limit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-limit, def-sequence, thm-of-archimedean, lem-of-triangle-inequality, lem-of-abs-value, lem-rat-embeds-dense, lem-of-inverse-positive, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "limits are unique"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $x, y \in
\mathbb{R}$. If $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$
([[def-real-limit]]), then $x = y$. A sequence therefore has at most one limit,
and when a limit exists it may be denoted $\lim_{k} x_k$.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals and reals $x, y$ such that $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence: $(x_k)$ converges to $z$ when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - z| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[L2] Triangle inequality: $|a + b| \le |a| + |b|$ in any ordered field, in particular in $\mathbb{R}$ ([[lem-of-triangle-inequality]], [[def-complete-ordered-field]]).

[L3] Absolute value: $|u| \ge 0$, and $|u| = 0$ if and only if $u = 0$, and $|-u| = |u|$ ([[lem-of-abs-value]]).

[L4] Small rationals: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$. Either route gives this: density of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]) applied to the pair $0 < \eta$; or the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$, which yields a natural $n \ge 1$ with $1/\eta < n$ and hence $0 < 1/n < \eta$ ([[lem-of-inverse-positive]]).

[L5] Order arithmetic in $\mathbb{R}$. Trichotomy, so $u \ne 0$ together with $|u| \ge 0$ and $|u| \ne 0$ forces $|u| > 0$; transitivity and irreflexivity of $<$; and, since $u \le v$ means $u < v$ or $u = v$, the mixed form $u \le v < w \Rightarrow u < w$ ([[def-complete-ordered-field]], [[def-ordered-field]]). Adding two strict inequalities: $a < b$ and $c < d$ give $a + c < b + d$ ([[lem-of-add-order]]). Multiplying by a positive: for $c > 0$, $a < b$ gives $ac < bc$ ([[lem-of-sign-rules]]). Halving a positive: $1 > 0$ ([[cor-of-one-positive]]), so $2 := 1 + 1 > 0$ because the positives are closed under addition ([[def-ordered-field]]), hence $2^{-1} > 0$ ([[lem-of-inverse-positive]]) and $\eta/2 = \eta \cdot 2^{-1} > 0$ whenever $\eta > 0$ ([[lem-of-sign-rules]]).

[L6] The order on $\mathbb{N}$ is total, so any two indices $K_1, K_2$ admit an index $k$ with $k \ge K_1$ and $k \ge K_2$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $x \ne y$. [assume-contra]

2.1 Then $x - y \ne 0$, so $|x - y| \ne 0$ while $|x - y| \ge 0$; by trichotomy $|x - y| > 0$, and hence $|x - y|/2 > 0$. [step 1.1, L3, L5]

3.1 Choose a rational $\varepsilon$ with $0 < \varepsilon < |x - y|/2$; multiplying that inequality by $2 > 0$ and using $(|x - y|/2) \cdot 2 = |x - y|$ gives $2\varepsilon < |x - y|$. [step 2.1, L4, L5, algebra, choose]

4.1 Since $(x_k)$ converges to $x$ there is $K_1$ with $|x_k - x| < \varepsilon$ for all $k \ge K_1$, and since $(x_k)$ converges to $y$ there is $K_2$ with $|x_k - y| < \varepsilon$ for all $k \ge K_2$. [step 3.1, L1]

5.1 Fix an index $k$ with $k \ge K_1$ and $k \ge K_2$; then $|x - y| = |(x - x_k) + (x_k - y)| \le |x - x_k| + |x_k - y| = |x_k - x| + |x_k - y|$, while adding the two strict inequalities of step 4.1 gives $|x_k - x| + |x_k - y| < \varepsilon + \varepsilon = 2\varepsilon$; composing the non-strict inequality with the strict one yields $|x - y| < 2\varepsilon$. [step 4.1, L2, L3, L5, L6]

6.1 Combining, $2\varepsilon < |x - y| < 2\varepsilon$, so $2\varepsilon < 2\varepsilon$, which contradicts irreflexivity of the strict order. [step 3.1, step 5.1, L5]

7.1 The assumption $x \ne y$ is therefore untenable, so $x = y$: a sequence of reals has at most one limit. [step 6.1, discharge-contradiction] ∎

## Remarks

- Uniqueness is what licenses the notation $\lim_{k} x_k$ and the phrase *the* limit. Without it the symbol would not denote. This library writes $\lim_k x_k$ only for sequences already known to converge, exactly as it writes $\sup S$ only for sets already known to have a supremum ([[rem-sup-conventions]]).

- The proof uses only that $\mathbb{R}$ is an ordered field in which arbitrarily small positive rationals exist, that is, an Archimedean ordered field ([[thm-of-archimedean]]). Completeness is not needed: limits are unique in $\mathbb{Q}$ too, where many sequences fail to have one.

- The hypothesis is genuinely about a single sequence having two limits. Two *different* sequences may of course share a limit, and a sequence with no limit at all is not excluded by anything here.
````

### `rem-heine-criterion-choice-cost`

````markdown
---
id: rem-heine-criterion-choice-cost
kind: remark
title: "The sequence-to-$\\varepsilon$ direction of the Heine criterion uses countable choice for $\\mathbb{R}$, and where this library records that cost"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-sequential-criterion-for-function-limits, def-countable-choice, def-function-limit, lem-sequential-characterisation-of-closure-r]
justified_by: []
aliases: []
landmark: false
short: "choice cost of the Heine criterion"
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
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "H. Herrlich, Axiom of Choice, Lecture Notes in Mathematics 1876, Springer 2006"
      url: "https://link.springer.com/book/10.1007/11601562"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
pipeline_run: null
---

## What this page spends, and where

[[thm-sequential-criterion-for-function-limits]] is an equivalence, and its two
directions do not cost the same.

- **From the $\varepsilon$-$\delta$ limit to sequences** — if
  $\lim_{x \to c} f(x) = L$ then $f(x_k) \to L$ for every sequence in
  $A \setminus \{c\}$ tending to $c$ — is proved in **ZF**. The sequence is
  handed to the proof; nothing is selected. This is steps 1.1, 2.1 and 3.1 of
  that theorem.

- **From sequences to the $\varepsilon$-$\delta$ limit** is proved there using
  the **Axiom of Countable Choice** ([[def-countable-choice]]), invoked exactly
  once, at step 3.2. The proof assumes the limit fails, obtains for each
  $k \in \mathbb{N}$ a nonempty set
  $X_k = \{\, x \in A : 0 < |x - c| < 1/(k+1) \text{ and } |f(x) - L| \ge \varepsilon_0 \,\}$,
  and needs a single point from each of those countably many sets at once.

**Why no canonical selection is available.** The sets $X_k$ are cut out by an
inequality involving $f$, about which the theorem assumes nothing. There is
therefore no rule in this library that names an element of $X_k$ uniformly in
$k$: they are subsets of $\mathbb{R}$, which carries no well-ordering that ZF
provides, and the sets need not be intervals, need not be closed, and need not
meet $\mathbb{Q}$. That is precisely the situation [[def-countable-choice]]
exists for.

## The same cost, recorded twice

The identical pattern occurs in the prerequisite page: in
[[lem-sequential-characterisation-of-closure-r]] the right-to-left direction is
choice free, while producing a sequence in $A$ converging to a point of
$\overline{A}$ requires selecting one point of $A$ from each of the sets
$N_{1/(k+1)}(x) \cap A$, and that item invokes $\mathrm{AC}_\omega$ explicitly
for it. Both items name the step where the axiom is used, so a reader working in
ZF alone can see exactly which half of each equivalence survives.

## What this library claims, and what it does not

- **Claimed:** the direction from $\varepsilon$-$\delta$ to sequences is a
  theorem of ZF; the converse **as proved here** uses $\mathrm{AC}_\omega$; and
  the use is isolated to one step, so nothing else on this page inherits it.

- **Not claimed:** that the converse *requires* $\mathrm{AC}_\omega$. This
  library proves no independence result and contains neither forcing nor
  permutation models, so it is in no position to assert that some cleverer ZF
  proof does not exist. The systematic study of which such criteria need which
  fragment of choice is a subject in its own right; Herrlich's *Axiom of Choice*
  is the standard reference, and it is cited here as literature, not used.

- **A warning against a tempting slogan.** It is *not* the case that sequential
  criteria in analysis always need choice. Sierpiński proved, in ZF, that a
  function $\mathbb{R} \to \mathbb{R}$ which is sequentially continuous at
  **every** point is continuous. The everywhere-statement and the
  pointwise-statement behave differently, and the cost recorded above is a
  statement about the pointwise criterion as proved here, nothing more.

## The consequence for how this page is organised

Because the criterion carries a choice cost on one side, this page does **not**
route its main results through it. The algebra of limits
([[thm-algebra-of-function-limits]]), order preservation
([[lem-function-limit-preserves-order]]), the squeeze theorem
([[thm-squeeze-for-function-limits]]) and composition
([[thm-composition-of-function-limits]]) are all proved directly from
$\varepsilon$ and $\delta$, and are therefore theorems of ZF. The sequential
machinery is used only where it earns its place: in the criterion itself, and in
[[cor-sequential-criterion-for-nonexistence]], which needs only the choice-free
direction and is the tool by which the companion page shows that various limits
fail to exist.

That organisation is a deliberate choice of proofs, not a mathematical necessity:
each of those four results *could* be deduced from the criterion, at the price of
importing $\mathrm{AC}_\omega$ into statements that do not need it.
````

### `thm-sequential-criterion-for-function-limits`

````markdown
---
id: thm-sequential-criterion-for-function-limits
kind: theorem
title: "Heine criterion: $\\lim_{x \\to c} f(x) = L$ iff $f(x_k) \\to L$ for every sequence in $A \\setminus \\{c\\}$ converging to $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-function-limit, def-sequence, def-natural-numbers, def-real-limit, def-limit-point-r, def-neighbourhood-r, def-countable-choice, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-rat-embeds-dense, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [thm-heine-criterion-for-function-limits]
landmark: true
short: "Heine (sequential) criterion"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.2)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$, let $c$ be a limit
point of $A$ ([[def-limit-point-r]]) and let $L \in \mathbb{R}$. The following
are equivalent.

1. $\lim_{x \to c} f(x) = L$ ([[def-function-limit]]).
2. For **every** sequence $(x_k)_{k \in \mathbb{N}}$ with $x_k \in A$ and
   $x_k \ne c$ for every $k$, and $x_k \to c$ ([[def-sequence]],
   [[def-real-limit]]), the sequence $(f(x_k))_{k \in \mathbb{N}}$ converges to
   $L$.

**The two directions do not cost the same.** The implication from 1 to 2 is
proved in ZF: the sequence is handed to the proof, and nothing is selected. The
implication from 2 to 1, as proved below, invokes the axiom of countable choice
([[def-countable-choice]]) exactly once, at step 3.2, to select one bad point
from each of countably many nonempty sets. What this library does and does not
claim about that cost is recorded in [[rem-heine-criterion-choice-cost]]; the
same asymmetry appears, for the same reason, in
[[lem-sequential-characterisation-of-closure-r]].

Because of this, the results on this page that can be proved directly from
$\varepsilon$ and $\delta$ — the algebra of limits, order preservation, the
squeeze theorem, composition — **are** proved that way, and not through this
criterion. What the criterion is for is the transfer of sequential results to
functions, and above all the *negative* use recorded in
[[cor-sequential-criterion-for-nonexistence]], which needs only the choice-free
direction.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$, a limit point $c$ of $A$ and a real $L$. Sequences are functions on $\mathbb{N}$, and $\mathbb{N}$ contains $0$ ([[def-sequence]], [[def-natural-numbers]]), so the shrinking radii used below are $1/(k+1)$ and never $1/k$.

[L1] The function limit: $\lim_{x \to c} f(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Sequential convergence: $(y_k) \to y$ means that for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|y_k - y| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]], [[def-sequence]]). Testing instead against every positive REAL $\varepsilon$ defines the same relation: every positive rational is a positive real, and below every positive real lies a positive rational ([[lem-rat-embeds-dense]]), which is the passage sanctioned in the remarks of [[def-sequence]].

[L3] Limit point: for every real $\delta > 0$ there is $x \in A$ with $0 < |x - c| < \delta$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]); the canonical naturals satisfy $n \cdot 1_{\mathbb{R}} > 0$ and are strictly increasing in $n$ ([[lem-of-naturals-positive]]); and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

[L5] Countable choice: for every family $(X_k)_{k \in \mathbb{N}}$ of nonempty sets there is a function $k \mapsto x_k$ with $x_k \in X_k$ for every $k$ ([[def-countable-choice]]).

[L6] Absolute value ([[lem-of-abs-value]]); and trichotomy, so the negation of $|u| < \varepsilon$ is $|u| \ge \varepsilon$, and the negation of "for every $\varepsilon$ there is $\delta$ such that P" is "there is $\varepsilon_0$ such that for every $\delta$, not P" ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume condition 1, let $(x_k)$ be a sequence with $x_k \in A$ and $x_k \ne c$ for every $k$ and $x_k \to c$, and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L1, L2, L3]

1.2 Assume condition 1 FAILS. Negating the quantifiers of [L1], there is a real $\varepsilon_0 > 0$ such that for every real $\delta > 0$ some $x \in A$ has $0 < |x - c| < \delta$ and $|f(x) - L| \ge \varepsilon_0$. [assume-hyp, L1, L6]

2.1 By [L1] fix a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$; and by [L2], $\delta$ being a positive real, fix $K \in \mathbb{N}$ with $|x_k - c| < \delta$ for every $k \ge K$. [step 1.1, L1, L2, choose]

2.2 For $k \in \mathbb{N}$ put $X_k := \{\, x \in A \ : \ 0 < |x - c| < 1/(k+1) \ \text{ and } \ |f(x) - L| \ge \varepsilon_0 \,\}$. Each $X_k$ is nonempty, since $k + 1 \ge 1$ makes $1/(k+1)$ a positive real and step 1.2 applies to that radius. [step 1.2, L4, L6]

3.1 For every $k \ge K$ we have $x_k \in A$ and $x_k \ne c$, so $0 < |x_k - c| < \delta$ and hence $|f(x_k) - L| < \varepsilon$. Since $\varepsilon > 0$ was an arbitrary real, $f(x_k) \to L$; condition 1 therefore implies condition 2. [step 2.1, L1, L2, L6]

3.2 By countable choice applied to the family $(X_k)_{k \in \mathbb{N}}$, fix a function $k \mapsto x_k$ with $x_k \in X_k$ for every $k \in \mathbb{N}$. [step 2.2, L5, choose]

4.1 That sequence has $x_k \in A$ and $x_k \ne c$ for every $k$, and it converges to $c$: given a real $\varepsilon > 0$, [L4] supplies a natural $n \ge 1$ with $1/n < \varepsilon$, and every $k \ge n$ has $k + 1 > n \ge 1$, hence $|x_k - c| < 1/(k+1) < 1/n < \varepsilon$. [step 3.2, L2, L4, L6]

4.2 Yet $(f(x_k))$ does not converge to $L$: every $k$ has $|f(x_k) - L| \ge \varepsilon_0$, while a rational $\varepsilon$ with $0 < \varepsilon < \varepsilon_0$ ([L2]) would require some $K$ with $|f(x_k) - L| < \varepsilon < \varepsilon_0$ for all $k \ge K$. [step 3.2, L2, L6]

5.1 So the failure of condition 1 produces a sequence witnessing the failure of condition 2; contrapositively, condition 2 implies condition 1, and with step 3.1 the two conditions are equivalent. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **Where the choice is spent, and where it is not.** Step 3.2 is the only use of [[def-countable-choice]] in this proof, and it occurs only in the direction from condition 2 to condition 1. Steps 1.1, 2.1 and 3.1, which prove the other direction, use no choice principle. [[rem-heine-criterion-choice-cost]] says what may and may not be concluded from that.

- **The sets $X_k$ genuinely have no canonical element.** They are cut out by an inequality involving $f$, about which nothing is assumed, so there is no rule in this library that picks a point of $X_k$ uniformly in $k$. That is exactly the situation [[def-countable-choice]] exists for, and it is the same situation as in [[lem-sequential-characterisation-of-closure-r]].

- **Why $1/(k+1)$ and not $1/k$.** Sequences here are functions on $\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]]), so the index $k = 0$ occurs and $1/k$ would be undefined there. The same convention is used in [[lem-sequential-characterisation-of-closure-r]].
````


# Audit proof-refuter brief — Wave 8, step A6

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

- high risk (7): 4 declared dependencies; 5 cited facts; 6 numbered proof steps; boundary-sensitive language

## Target item — `thm-continuous-image-of-a-compact-set-r`

Normalized current SHA-256: `a5d7a5f1807ae9e80a7ae3a80a1e03a7dec29925403525323af0e1addf3c9177`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-continuous-image-of-a-compact-set-r
kind: theorem
title: "The image of a compact subset of $\\mathbb{R}$ under a continuous real function is compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, def-open-cover-r, def-open-and-closed-in-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "continuous image of a compact set"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.14)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ be continuous on $A$
([[def-continuity-real]]) and let $K \subseteq A$ be compact in the sense of
[[def-open-cover-r]], that is, every family of open subsets of $\mathbb{R}$
whose union contains $K$ has a finite subfamily whose union contains $K$. Then
the image

$$f[K] \;:=\; \{\, f(x) : x \in K \,\}$$

is a compact subset of $\mathbb{R}$.

**This theorem is stated twice in this library, on purpose.** Its metric-space
twin is [[thm-continuous-image-of-a-compact-space-is-compact]], proved from the
cover machinery of metric spaces; the proof below is $\mathbb{R}$-native and
uses only open subsets of $\mathbb{R}$ and the definition of continuity of this
page. The duplication is deliberate and is acknowledged in exactly one place,
[[lem-real-and-metric-notions-agree]] later on this page, which proves that the
two notions of "compact subset of $\mathbb{R}$" and the two notions of
"continuous" coincide, so that the two theorems really are the same statement in
two vocabularies.

**No choice principle is used.** The covering family built below is cut out by a
property rather than selected point by point, and the only selection made is
from a *finite* list, which needs no axiom.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ continuous on $A$, and a compact set $K \subseteq A$; $f[K] = \{\, f(x) : x \in K \,\}$.

[L1] Continuity of $f$ at $x \in A$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(y) - f(x)| < \varepsilon$ for every $y \in A$ satisfying $|y - x| < \delta$; equivalently $f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq N_{\varepsilon}(f(x))$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Open sets: $V \subseteq \mathbb{R}$ is open when every point of $V$ has a neighbourhood inside $V$, and every neighbourhood $N_{\delta}(x)$ is itself an open set containing $x$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] Compactness of $K$: for every family $\mathcal{W}$ of open subsets of $\mathbb{R}$ with $K \subseteq \bigcup \mathcal{W}$, either $K = \varnothing$ and the empty subfamily covers it, or there are $n \in \mathbb{N}$ and $W_0, \dots, W_n \in \mathcal{W}$ with $K \subseteq W_0 \cup \dots \cup W_n$ ([[def-open-cover-r]]).

## Proof

**Proof technique:** direct.

1.1 If $K = \varnothing$, then $f[K] = \varnothing$, which is compact by [L3]. Hence suppose $K \ne \varnothing$ for the rest of the proof. [L3, cases]

1.2 Let $\mathcal{V}$ be a family of open subsets of $\mathbb{R}$ with $f[K] \subseteq \bigcup \mathcal{V}$. Define $$\mathcal{W} \;:=\; \bigl\{\, N_{\delta}(x) \ : \ x \in K,\ \delta \in \mathbb{R},\ \delta > 0,\ \text{and } f\bigl(K \cap N_{\delta}(x)\bigr) \subseteq V \text{ for some } V \in \mathcal{V} \,\bigr\}.$$ This family is cut out by a property of the pair $(x,\delta)$, so it is a set and nothing is selected in forming it; every member is an open subset of $\mathbb{R}$ by [L2]. [L2]

2.1 **$\mathcal{W}$ covers $K$.** Let $x \in K$. Then $x \in A$ and $f(x) \in f[K] \subseteq \bigcup \mathcal{V}$, so $f(x) \in V$ for some $V \in \mathcal{V}$. As $V$ is open, [L2] gives a real $\varepsilon > 0$ with $N_{\varepsilon}(f(x)) \subseteq V$, and [L1] gives a real $\delta > 0$ with $f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq N_{\varepsilon}(f(x)) \subseteq V$. Since $K \subseteq A$ we get $f\bigl(K \cap N_{\delta}(x)\bigr) \subseteq V$, so $N_{\delta}(x) \in \mathcal{W}$, and $x \in N_{\delta}(x)$ by [L2]. Hence $K \subseteq \bigcup \mathcal{W}$. [step 1.2, L1, L2]

3.1 By [L3] there are $n \in \mathbb{N}$ and members $W_0, \dots, W_n$ of $\mathcal{W}$ with $K \subseteq W_0 \cup \dots \cup W_n$. For each $i \le n$ the membership $W_i \in \mathcal{W}$ asserts the existence of some $V \in \mathcal{V}$ with $f(K \cap W_i) \subseteq V$; naming one such $V_i$ for each of the finitely many indices $i \le n$ requires no choice principle. [step 1.1, step 1.2, step 2.1, L3, choose]

4.1 **The finite subfamily works.** Let $z \in f[K]$, say $z = f(x)$ with $x \in K$. By step 3.1 there is $i \le n$ with $x \in W_i$, hence $x \in K \cap W_i$ and $z = f(x) \in V_i$. Therefore $f[K] \subseteq V_0 \cup \dots \cup V_n$, a union of finitely many members of $\mathcal{V}$. [step 3.1]

5.1 Every family of open subsets of $\mathbb{R}$ covering $f[K]$ thus has a finite subfamily covering $f[K]$, so $f[K]$ is compact. [step 1.1, step 1.2, step 4.1, L3] ∎

## Remarks

- **The proof is the preimage characterisation, made canonical.** [[thm-continuity-preimage-characterisation]] says that $f^{-1}(V)$ is the trace on $A$ of an open set; the textbook argument pulls back each $V \in \mathcal{V}$ to such an open set and covers $K$ with those. Doing it that way selects one open set per member of $\mathcal{V}$, a family that may be arbitrarily large. Uniting all admissible balls instead, as above, reaches the same cover with no selection, and the only naming step left is over a finite index set.

- **The image of a compact set is closed and bounded**, by [[thm-heine-borel-characterisation-r]]. That is what the next two items use, and it is the shortest route to both boundedness and the attainment of extrema.

- **Compactness cannot be weakened to closedness or to boundedness.** The image of a closed set need not be closed ([[fs-continuous-image-of-a-closed-set-is-closed]]), and the image of a bounded set need not be bounded, since $x \mapsto 1/x$ carries the bounded set $(0,1)$ onto $(1,\infty)$.
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-continuous-image-of-a-compact-set-r",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces",
    "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
  ],
  "rationale": "Both sources state that the continuous image of a compact set is compact. The local proof is an altered, choice-conscious open-cover argument, with the empty image handled explicitly before the nonempty finite-subcover construction.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-real-analysis-cantor-continuity.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Let $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with $\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq U$. - $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open. - A set is **clopen** when it is both open and closed.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "**A neighbourhood is an open interval.** For every $x$ and every $\\varepsilon > 0$,",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-open-cover-r",
      "source_section": "Definition",
      "quote": "Let $K \\subseteq \\mathbb{R}$, with open sets as in [[def-open-and-closed-in-r]]. - An **open cover** of $K$ is a family $\\mathcal{U}$ of open subsets of $\\mathbb{R}$ with $K \\subseteq \\bigcup \\mathcal{U}$. - A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ that is still an open cover of $K$. - A subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ is **finite** when $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and members $U_0, \\dots, U_n$ of $\\mathcal{U}$ with $\\mathcal{V} = \\{U_0, \\dots, U_n\\}$; repetitions in the list are allowed and harmless. - $K$ is **compact** when every open cover of $K$ has a finite subcover: for every open cover $\\mathcal{U}$ of $K$, either $K = \\varnothing$ and the empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n \\in \\mathcal{U}$ with $$K \\subseteq U_0 \\cup \\dots \\cup U_n .$$ - $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with $x_k \\in K$ for all $k \\in \\mathbb{N}$ ([[def-sequence]]) has a subsequence converging ([[def-real-limit]]) to some point of $K$; equivalently, when every such sequence has a subsequential limit ([[def-subsequential-limit]]) that lies in $K$. **Compactness is a property of $K$ alone.** The covering families range over open subsets of $\\mathbb{R}$, not over sets open in some other ambient space, so the notion defined here is compactness of $K$ as a subset of $\\mathbb{R}$. Nothing below relativises it to a smaller ambient field; where an ordered field other than $\\mathbb{R}$ is meant, as in [[fs-closed-bounded-compact-without-completeness]], the whole vocabulary is set up again there for that field. **$\\varnothing$ is compact and sequentially compact.** The empty subfamily covers it, and there is no sequence with all terms in $\\varnothing$, so both conditions hold vacuously.",
      "uses": [
        "1.1",
        "3.1",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "If $K = \\varnothing$, then $f[K] = \\varnothing$, which is compact by [L3]. Hence suppose $K \\ne \\varnothing$ for the rest of the proof.",
      "step": "1.1",
      "inputs": [
        "L3",
        "cases"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Let $\\mathcal{V}$ be a family of open subsets of $\\mathbb{R}$ with $f[K] \\subseteq \\bigcup \\mathcal{V}$. Define $$\\mathcal{W} \\;:=\\; \\bigl\\{\\, N_{\\delta}(x) \\ : \\ x \\in K,\\ \\delta \\in \\mathbb{R},\\ \\delta > 0,\\ \\text{and } f\\bigl(K \\cap N_{\\delta}(x)\\bigr) \\sub",
      "step": "1.2",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "**$\\mathcal{W}$ covers $K$.** Let $x \\in K$. Then $x \\in A$ and $f(x) \\in f[K] \\subseteq \\bigcup \\mathcal{V}$, so $f(x) \\in V$ for some $V \\in \\mathcal{V}$. As $V$ is open, [L2] gives a real $\\varepsilon > 0$ with $N_{\\varepsilon}(f(x)) \\subseteq V$, and [L1] ",
      "step": "2.1",
      "inputs": [
        "1.2",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "By [L3] there are $n \\in \\mathbb{N}$ and members $W_0, \\dots, W_n$ of $\\mathcal{W}$ with $K \\subseteq W_0 \\cup \\dots \\cup W_n$. For each $i \\le n$ the membership $W_i \\in \\mathcal{W}$ asserts the existence of some $V \\in \\mathcal{V}$ with $f(K \\cap W_i) \\subse",
      "step": "3.1",
      "inputs": [
        "1.1",
        "1.2",
        "2.1",
        "L3",
        "choose"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "**The finite subfamily works.** Let $z \\in f[K]$, say $z = f(x)$ with $x \\in K$. By step 3.1 there is $i \\le n$ with $x \\in W_i$, hence $x \\in K \\cap W_i$ and $z = f(x) \\in V_i$. Therefore $f[K] \\subseteq V_0 \\cup \\dots \\cup V_n$, a union of finitely many memb",
      "step": "4.1",
      "inputs": [
        "3.1"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Every family of open subsets of $\\mathbb{R}$ covering $f[K]$ thus has a finite subfamily covering $f[K]$, so $f[K]$ is compact.",
      "step": "5.1",
      "inputs": [
        "1.1",
        "1.2",
        "4.1",
        "L3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Step 1.1 handles $K=\\varnothing$ directly: $f[K]=\\varnothing$, and [L3] records that the empty subfamily is a finite subcover."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.1 handles empty $K$; for nonempty $K$, steps 3.1–4.1 allow a one-member finite subcover indexed from $0$."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "When K is a singleton, steps 2.1–4.1 produce and transport a one-member finite subcover."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 2.1 permits the chosen neighbourhood to meet K only at x, and step 4.1 still covers the singleton image."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The theorem concerns arbitrary compact subsets, not intervals with endpoint conventions."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.2 collects all admissible balls without choice; under $K\\ne\\varnothing$, step 3.1 makes only finitely many existential choices $V_i$ after compactness supplies the finite list."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `thm-continuous-image-of-a-compact-set-r` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `thm-continuous-image-of-a-compact-set-r` is not an equivalence, so it has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract by reading the item and each cited target from disk. Independent risk review occurs after A3/A4."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-continuous-image-of-a-compact-set-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-image-of-a-compact-set-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-open-cover-r",
    "declared_target": "def-open-cover-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-image-of-a-compact-set-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-open-and-closed-in-r",
    "declared_target": "def-open-and-closed-in-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-image-of-a-compact-set-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
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

## Full text of every cited or declared item (9)

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

### `def-neighbourhood-r`

````markdown
---
id: def-neighbourhood-r
kind: definition
title: "The $\\varepsilon$-neighbourhood and the punctured $\\varepsilon$-neighbourhood of a point of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-order, def-interval, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, def-abs-value, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: false
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
    - title: "Neighbourhood (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18(a))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.1 and §1.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]) and its absolute value ([[def-abs-value]]).

Let $x \in \mathbb{R}$ and let $\varepsilon \in \mathbb{R}$ with
$\varepsilon > 0$. The **$\varepsilon$-neighbourhood of $x$** is

$$N_\varepsilon(x) \;:=\; \{\, y \in \mathbb{R} : |y - x| < \varepsilon \,\},$$

and the **punctured $\varepsilon$-neighbourhood of $x$** is

$$N^{*}_\varepsilon(x) \;:=\; N_\varepsilon(x) \setminus \{x\} \;=\; \{\, y \in \mathbb{R} : 0 < |y - x| < \varepsilon \,\}.$$

The two descriptions of $N^{*}_\varepsilon(x)$ agree because $|y - x| = 0$ holds
exactly when $y = x$ ([[lem-of-abs-value]]).

**A neighbourhood is an open interval.** For every $x$ and every
$\varepsilon > 0$,

$$N_\varepsilon(x) \;=\; (x - \varepsilon,\ x + \varepsilon),$$

the interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for
$\varepsilon > 0$, the equivalence $|y - x| < \varepsilon \iff -\varepsilon <
y - x < \varepsilon$, and adding $x$ throughout turns the right-hand side into
$x - \varepsilon < y < x + \varepsilon$ ([[def-ordered-field]]).

**The centre lies in its own neighbourhoods.** $x \in N_\varepsilon(x)$, since
$|x - x| = |0| = 0 < \varepsilon$ ([[lem-of-abs-value]]).

**Punctured neighbourhoods are never empty.** The element
$y := x + \varepsilon/2$ satisfies $|y - x| = \varepsilon/2$, which is
$> 0$ and $< \varepsilon$, so $y \in N^{*}_\varepsilon(x)$
([[lem-of-abs-value]], [[def-ordered-field]]).

**Monotonicity in the radius.** If $0 < \delta \le \varepsilon$ then
$N_\delta(x) \subseteq N_\varepsilon(x)$, because $|y - x| < \delta \le
\varepsilon$ ([[def-ordered-field]]).

**Nesting at an interior point.** If $y \in N_\varepsilon(x)$ and
$0 < \delta \le \varepsilon - |y - x|$, then

$$N_\delta(y) \;\subseteq\; N_\varepsilon(x).$$

Indeed for $z \in N_\delta(y)$ the triangle inequality
([[lem-of-triangle-inequality]]) gives
$|z - x| = |(z - y) + (y - x)| \le |z - y| + |y - x| < \delta + |y - x| \le
\varepsilon$. Note that $\varepsilon - |y - x| > 0$ precisely because
$y \in N_\varepsilon(x)$, so such a $\delta$ always exists.

## Remarks

- **The radius is a real number, not a rational.** Nothing on this page tests a
  condition against rational radii only. That convention belongs to
  [[def-real-limit]], where the quantifier is over rational $\varepsilon$ and
  the passage between the rational and the real form is the sanctioned remark of
  [[def-sequence]]. Here $\varepsilon$ ranges over the positive reals
  throughout, and every statement above is proved for an arbitrary positive
  real.

- **Why the punctured version is separated out.** A limit point of a set is a
  point every punctured neighbourhood of which meets the set
  ([[def-limit-point-r]]), and deleting the centre is exactly what stops a point
  of the set from qualifying automatically. The unpunctured condition defines
  the weaker notion of an adherent point, and the difference between the two is
  precisely an isolated point.

- **Nesting is the workhorse.** Almost every openness verification on this page
  has the shape "given $y$ in the set, shrink the radius by the distance
  already travelled", which is the nesting property above. It is recorded here
  once so that no later proof has to redo the triangle inequality in passing.
````

### `def-open-and-closed-in-r`

````markdown
---
id: def-open-and-closed-in-r
kind: definition
title: "Open subset of $\\mathbb{R}$ (every point has a neighbourhood inside it), closed subset (complement open), and clopen"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-interval, def-complete-ordered-field, def-ordered-field, def-real-order, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: true
short: "open, closed, clopen in $\\mathbb{R}$"
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $U, F \subseteq \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]].

- $U$ is **open** when for every $x \in U$ there is a real $\varepsilon > 0$
  with $N_\varepsilon(x) \subseteq U$.
- $F$ is **closed** when its complement $\mathbb{R} \setminus F$ is open.
- A set is **clopen** when it is both open and closed.

The whole of the topology of $\mathbb{R}$ developed on this page rests on this
one definition: closedness is *defined* as openness of the complement, and every
other description of a closed set on this page is a theorem
([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).

**$\varnothing$ and $\mathbb{R}$ are clopen.** The condition defining openness
quantifies over the elements of the set, so it holds vacuously for
$\varnothing$; and for $x \in \mathbb{R}$ one has $N_1(x) \subseteq \mathbb{R}$,
so $\mathbb{R}$ is open. Since each of the two is the complement of the other,
each is also closed.

**Every neighbourhood is open.** Let $y \in N_\varepsilon(x)$ and put
$\delta := \varepsilon - |y - x|$, which is $> 0$ because
$y \in N_\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives
$N_\delta(y) \subseteq N_\varepsilon(x)$. So every point of $N_\varepsilon(x)$
has a neighbourhood inside it.

**The four open forms of [[def-interval]] are open sets.** Let $a, b \in
\mathbb{R}$.

- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so
  $\delta := \min\{x - a,\ b - x\}$ is a positive real (the minimum of a
  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).
  If $|y - x| < \delta$ then $y > x - \delta \ge x - (x - a) = a$ and
  $y < x + \delta \le x + (b - x) = b$, so $y \in (a,b)$; hence
  $N_\delta(x) \subseteq (a,b)$.
- $(a,\infty)$: for $x > a$ take $\delta := x - a > 0$; then $|y - x| < \delta$
  gives $y > x - \delta = a$.
- $(-\infty,b)$: for $x < b$ take $\delta := b - x > 0$; then $|y - x| < \delta$
  gives $y < x + \delta = b$.
- $(-\infty,\infty) = \mathbb{R}$: already treated above.

**The four closed forms of [[def-interval]] are closed sets.** In each case the
complement is shown open directly.

- $[a,b]$: if $x \notin [a,b]$ then $x < a$ or $x > b$ by trichotomy
  ([[def-ordered-field]]). If $x < a$, take $\delta := a - x > 0$; every
  $y \in N_\delta(x)$ has $y < x + \delta = a$, hence $y \notin [a,b]$. If
  $x > b$, take $\delta := x - b > 0$; every $y \in N_\delta(x)$ has
  $y > x - \delta = b$, hence $y \notin [a,b]$. So
  $\mathbb{R} \setminus [a,b]$ is open.
- $[a,\infty)$: its complement is $(-\infty,a)$, which is open by the previous
  paragraph.
- $(-\infty,b]$: its complement is $(b,\infty)$, which is open.
- $(-\infty,\infty) = \mathbb{R}$: its complement is $\varnothing$, which is
  open.

## Remarks

- **Open and closed are not opposites, and not exhaustive.** A set may be
  neither: the half-open interval $[0,1)$ is neither open nor closed
  ([[fs-every-set-is-open-or-closed]]). A set may be both: $\varnothing$ and
  $\mathbb{R}$ are clopen. The words are inherited from the interval terminology
  of [[def-interval]], and the agreement between the two usages is exactly the
  two lists verified above: an interval called open there is an open set here,
  and an interval called closed there is a closed set here.

- **A clopen set is a disconnection waiting to happen.** If $A$ is clopen and
  both $A$ and $\mathbb{R} \setminus A$ are nonempty, then each of the two is
  its own closure, so the two are separated in the sense of
  [[def-connected-r]] and $\mathbb{R} = A \cup (\mathbb{R} \setminus A)$ is a
  disconnection. Since $\mathbb{R}$ is order-convex it is connected
  ([[thm-connected-subsets-of-r-are-intervals]]), so no such $A$ exists:
  $\varnothing$ and $\mathbb{R}$ are the only clopen subsets of $\mathbb{R}$.

- **The half-open forms are the ones the two lists omit**, and deliberately so:
  $[a,b)$ and $(a,b]$ with $a < b$ are neither open nor closed as subsets of
  $\mathbb{R}$.

- **The radius depends on the point.** Openness asks for *some* $\varepsilon$
  at each point, and that $\varepsilon$ may shrink to nothing as the point
  approaches the edge of the set, as the computation for $(a,b)$ shows: there
  $\delta = \min\{x - a,\ b - x\}$ tends to $0$ as $x$ tends to either endpoint.
  Asking instead for a single $\varepsilon$ that works simultaneously at every
  point of the set is a strictly stronger condition, and it is not what is
  defined here; nothing on this page uses it.
````

### `def-open-cover-r`

````markdown
---
id: def-open-cover-r
kind: definition
title: "Open cover, subcover, compact subset of $\\mathbb{R}$ (every open cover has a finite subcover), and sequentially compact subset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-sequence, def-subsequential-limit, def-real-limit]
justified_by: []
aliases: [def-compact-in-r, def-sequentially-compact-in-r]
landmark: true
short: "open cover, compact, sequentially compact"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.31, 2.32)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $K \subseteq \mathbb{R}$, with open sets as in
[[def-open-and-closed-in-r]].

- An **open cover** of $K$ is a family $\mathcal{U}$ of open subsets of
  $\mathbb{R}$ with $K \subseteq \bigcup \mathcal{U}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq
  \mathcal{U}$ that is still an open cover of $K$.
- A subfamily $\mathcal{V} \subseteq \mathcal{U}$ is **finite** when
  $\mathcal{V} = \varnothing$ or there are $n \in \mathbb{N}$ and members
  $U_0, \dots, U_n$ of $\mathcal{U}$ with $\mathcal{V} = \{U_0, \dots, U_n\}$;
  repetitions in the list are allowed and harmless.
- $K$ is **compact** when every open cover of $K$ has a finite subcover:
  for every open cover $\mathcal{U}$ of $K$, either $K = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$K \subseteq U_0 \cup \dots \cup U_n .$$
- $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with
  $x_k \in K$ for all $k \in \mathbb{N}$ ([[def-sequence]]) has a subsequence
  converging ([[def-real-limit]]) to some point of $K$; equivalently, when every
  such sequence has a subsequential limit ([[def-subsequential-limit]]) that
  lies in $K$.

**Compactness is a property of $K$ alone.** The covering families range over open
subsets of $\mathbb{R}$, not over sets open in some other ambient space, so the
notion defined here is compactness of $K$ as a subset of $\mathbb{R}$. Nothing
below relativises it to a smaller ambient field; where an ordered field other
than $\mathbb{R}$ is meant, as in
[[fs-closed-bounded-compact-without-completeness]], the whole vocabulary is set
up again there for that field.

**$\varnothing$ is compact and sequentially compact.** The empty subfamily covers
it, and there is no sequence with all terms in $\varnothing$, so both conditions
hold vacuously.

## Remarks

- **Why "finite" is spelled out by listing.** A finite subfamily is described
  here as one that can be written $\{U_0, \dots, U_n\}$ with $n \in \mathbb{N}$,
  which is exactly the form every proof on this page produces or consumes: the
  bisection argument of [[thm-heine-borel-r]] produces a one-member list, and
  the arguments of [[lem-compact-implies-closed-and-bounded-r]] consume a list by
  taking a maximum over it ([[lem-finite-set-has-max]]). Since $\mathbb{N}$
  contains $0$, the shortest nonempty list is $\{U_0\}$.

- **The two notions are not defined to be equivalent, and their equivalence is a
  theorem.** For subsets of $\mathbb{R}$ it is
  [[thm-compact-iff-sequentially-compact-r]]; both of its implications run
  through the characterisation of compactness by closed and bounded, and its
  forward implication additionally uses Bolzano-Weierstrass. Neither implication
  is formal.

- **Compactness is not inherited by subsets, but by closed subsets.** A closed
  subset of a compact set is compact, which is immediate from
  [[thm-heine-borel-characterisation-r]] once that is available, whereas
  $(0,1) \subseteq [0,1]$ shows that an arbitrary subset of a compact set need
  not be compact.

- **The empty cover.** If $K \ne \varnothing$ then no open cover of $K$ is
  empty, so the case distinction in the definition of compactness only ever
  matters for $K = \varnothing$; it is written out so that the definition does
  not quietly assume $K$ nonempty.
````

### `fs-continuous-image-of-a-closed-set-is-closed`

````markdown
---
id: fs-continuous-image-of-a-closed-set-is-closed
kind: false-statement
title: "FALSE: the image of a closed subset of $\\mathbb{R}$ under a continuous real function is closed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuity-real, thm-continuity-preimage-characterisation, thm-continuous-image-of-a-compact-set-r, thm-heine-borel-characterisation-r, def-open-cover-r, thm-algebra-of-continuous-functions, def-open-and-closed-in-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-limit-point-r, def-neighbourhood-r, def-interval, def-integer-power, thm-nth-roots-exist, lem-power-monotone, lem-of-inverse-positive, lem-of-abs-value, def-max-min, lem-finite-set-has-max, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "FALSE: continuous image of a closed set is closed"
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
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

**False claim:** if $A \subseteq \mathbb{R}$, if $f : A \to \mathbb{R}$ is
continuous on $A$ ([[def-continuity-real]]) and if $F \subseteq A$ is a closed
subset of $\mathbb{R}$ ([[def-open-and-closed-in-r]]), then the image
$f[F] = \{\, f(x) : x \in F \,\}$ is a closed subset of $\mathbb{R}$.

**Why it is tempting.** Continuity is characterised by the behaviour of
*preimages*: the preimage of every closed set is relatively closed
([[thm-continuity-preimage-characterisation]]). It is easy to transpose that to
images, and images are exactly where the characterisation says nothing.

**What is true.** Compactness, not closedness, is preserved: the image of a
compact set under a continuous function is compact
([[thm-continuous-image-of-a-compact-set-r]]), hence closed and bounded
([[thm-heine-borel-characterisation-r]]). Closedness by itself is preserved by
neither images nor unions of infinitely many closed sets, and boundedness by
itself is not preserved either, since $x \mapsto 1/x$ carries the bounded set
$(0,1)$ onto the unbounded set $(1,\infty)$.

## Facts & Assumptions

**Given:** The domain $A := \mathbb{R}$, the closed set $F := \mathbb{R}$, and the function $f : \mathbb{R} \to \mathbb{R}$, $f(x) := 1/(1+x^{2})$ ([[def-integer-power]]).

[L1] $\mathbb{R}$ is a closed subset of $\mathbb{R}$, since its complement $\varnothing$ is open ([[def-open-and-closed-in-r]]).

[L2] Algebra of continuous functions: polynomial functions are continuous on $\mathbb{R}$, and if $q$ is continuous and nowhere zero on a set then $1/q$ is continuous there ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L3] Squares and order: $x^{2} \ge 0$ for every real $x$, so $1 + x^{2} \ge 1 > 0$; and $0 < s \le t$ implies $0 < 1/t \le 1/s$ ([[lem-power-monotone]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-integer-power]]).

[L4] Square roots: every real $t \ge 0$ has a unique $s \ge 0$ with $s^{2} = t$ ([[thm-nth-roots-exist]]).

[L5] Closure: $x \in \overline{S}$ exactly when $N_{\varepsilon}(x) \cap S \ne \varnothing$ for every real $\varepsilon > 0$; and $S$ is closed exactly when $S = \overline{S}$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-limit-point-r]], [[def-neighbourhood-r]]).

[L6] Intervals and minima: $(0,1] = \{\, y : 0 < y \le 1 \,\}$ ([[def-interval]]); the minimum of a two-element set of reals exists and is one of them ([[lem-finite-set-has-max]], [[def-max-min]]); and $|u| \ge 0$ with $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]).

## Refutation

**Proof technique:** direct.

1.1 $F = \mathbb{R}$ is a closed subset of $\mathbb{R}$ and is contained in $A = \mathbb{R}$. [L1]

1.2 $f$ is continuous on $\mathbb{R}$: the denominator $x \mapsto 1 + x^{2}$ is a polynomial function, hence continuous by [L2], and it satisfies $1 + x^{2} \ge 1 > 0$ by [L3], so it never vanishes and $f = 1/(1+x^{2})$ is continuous by [L2]. [L2, L3]

1.3 **$(0,1] \subseteq f[\mathbb{R}]$.** Let $y$ satisfy $0 < y \le 1$ and put $t := 1/y - 1$. By [L3] we have $1/y \ge 1$, so $t \ge 0$, and [L4] supplies a real $s \ge 0$ with $s^{2} = t$. Then $1 + s^{2} = 1/y$ and hence $f(s) = 1/(1+s^{2}) = y$. [L3, L4, L6]

1.4 **$(0,1]$ is not closed.** Let a real $\varepsilon > 0$ be given and put $y := \min\{\varepsilon/2,\ 1\}$, a real with $0 < y \le 1$ by [L6], so $y \in (0,1]$; and $|y - 0| = y \le \varepsilon/2 < \varepsilon$, so $y \in N_{\varepsilon}(0) \cap (0,1]$. Hence $0 \in \overline{(0,1]}$ by [L5], while $0 \notin (0,1]$ because $0 < 0$ is false. So $(0,1] \ne \overline{(0,1]}$ and $(0,1]$ is not closed by [L5]. [L5, L6]

2.1 **$f[\mathbb{R}] \subseteq (0,1]$.** For every real $x$, [L3] gives $1 + x^{2} \ge 1 > 0$ and hence $0 < 1/(1+x^{2}) \le 1$, that is $f(x) \in (0,1]$. [step 1.2, L3, L6]

3.1 So $f[F] = f[\mathbb{R}] = (0,1]$. [step 2.1, step 1.3]

4.1 The set $F = \mathbb{R}$ is closed, $f$ is continuous on $\mathbb{R}$, and $f[F] = (0,1]$ is not closed: the claim is false. [step 1.1, step 1.2, step 3.1, step 1.4] ∎

## Remarks

- **The witness is as tame as possible.** $f$ is a quotient of polynomials, defined on the whole line, bounded, and its image is an interval; the failure is only that the infimum $0$ of the image is approached and not attained, because the points that would attain it have escaped to infinity. Replacing $\mathbb{R}$ by any closed unbounded set on which $f$ has infimum $0$, such as $[0,\infty)$, gives the same conclusion.

- **The image of a closed *bounded* set is closed**, because such a set is compact ([[thm-heine-borel-characterisation-r]]) and compactness is preserved ([[thm-continuous-image-of-a-compact-set-r]]). So the false claim becomes true exactly when the hypothesis is strengthened from closed to compact, which is what [[cor-continuous-image-of-an-interval-is-an-interval]] uses in its second half.

- **Openness is not preserved either**, in the other direction: the image of the open set $\mathbb{R}$ under this same $f$ is $(0,1]$, which is not open, and the image of $\mathbb{R}$ under a constant function is a single point. Continuity constrains preimages, not images; that asymmetry is the content of [[thm-continuity-preimage-characterisation]].
````

### `lem-real-and-metric-notions-agree`

````markdown
---
id: lem-real-and-metric-notions-agree
kind: lemma
title: "Dictionary: for $A \\subseteq \\mathbb{R}$ with the metric $d(x,y) = |x-y|$, continuity and uniform continuity of $f : A \\to \\mathbb{R}$ agree with the metric-space notions, the Lipschitz and Hölder conditions are the metric ones instantiated, and a subset of $\\mathbb{R}$ is compact in the open-cover sense of $\\mathbb{R}$ exactly when it is a compact metric subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuity-real, def-uniform-continuity-real, def-metric-continuity, def-metric-uniform-continuity, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, thm-uniform-continuity-preserves-cauchy, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, def-metric-space, def-metric-ball, def-metric-topology, def-metric-compactness, lem-compactness-is-intrinsic, def-metric-compactness-variants, def-metric-convergence, def-cauchy-in-metric, def-open-cover-r, def-open-and-closed-in-r, def-real-limit, def-sequence, def-rational-power, lem-of-abs-value, lem-metric-nonnegativity]
justified_by: []
aliases: [lem-metric-dictionary-for-r]
forward_refs: [ex-x-to-the-beta-separates-the-holder-classes, cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]
landmark: true
short: "real and metric notions agree"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 and Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ carry the subspace metric of the usual metric
$d_{\mathbb{R}}(x,y) = |x-y|$ of $\mathbb{R}$, that is
$d_A(x,y) = |x - y|$ for $x, y \in A$
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]),
and let $f : A \to \mathbb{R}$, regarded also as a map of metric spaces
$(A, d_A) \to (\mathbb{R}, d_{\mathbb{R}})$. Then the $\mathbb{R}$-native
notions of this page and the metric-space notions of the earlier pages are the
**same notions**, in the following five senses.

1. **Continuity.** For every $c \in A$: $f$ is continuous at $c$ in the sense of
   [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense
   of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and
   only if it is continuous as a map of metric spaces.
2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of
   [[def-uniform-continuity-real]] if and only if it is uniformly continuous as
   a map of metric spaces ([[def-metric-uniform-continuity]]).
3. **Lipschitz.** For a real $L \ge 0$: $f$ is Lipschitz with constant $L$ as a
   map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if
   $$|f(x) - f(x')| \le L\,|x - x'| \qquad \text{for all } x, x' \in A .$$
   This displayed condition is what "$f$ is Lipschitz with constant $L$" means
   for a real function on $A$ in this library; no second definition is made.
4. **Hölder.** For a rational $\alpha$ with $0 < \alpha \le 1$ and a real
   $C \ge 0$: $f$ is $\alpha$-Hölder with constant $C$ as a map of metric spaces
   if and only if
   $$|f(x) - f(x')| \le C\,|x - x'|^{\alpha} \qquad \text{for all } x, x' \in A ,$$
   the power being the rational power of a nonnegative base
   ([[def-rational-power]]).
5. **Compactness, in both senses used in this library.** For $K \subseteq
   \mathbb{R}$ with the subspace metric $d_K$:
   - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every
     family of open subsets of $\mathbb{R}$ covering $K$ has a finite subfamily
     covering $K$ — if and only if the metric space $(K, d_K)$ is compact
     ([[def-metric-compactness]]);
   - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and
     only if $(K, d_K)$ is sequentially compact as a metric space
     ([[def-metric-compactness-variants]]).

Two consequences are recorded, since they are the reason the dictionary is
stated as a lemma rather than as a remark.

6. **The regularity hierarchy transfers verbatim.** By clauses 1 to 4 and
   [[thm-metric-regularity-hierarchy]]: a Lipschitz $f : A \to \mathbb{R}$ is
   uniformly continuous on $A$; an $\alpha$-Hölder $f$ with rational
   $0 < \alpha \le 1$ is uniformly continuous on $A$; a uniformly continuous $f$
   is continuous on $A$; and if $A$ is nonempty and bounded, a Lipschitz $f$ is
   $\alpha$-Hölder for every rational $\alpha$ with $0 < \alpha \le 1$. No
   strictness is claimed here, and none is claimed there.
7. **Cauchy sequences transfer.** A sequence $(x_k)$ with terms in $A$ is Cauchy
   in $(A, d_A)$ ([[def-cauchy-in-metric]]) if and only if it is Cauchy as a
   sequence of reals ([[def-real-limit]]); so by clause 2 and
   [[thm-uniform-continuity-preserves-cauchy]], a uniformly continuous
   $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of
   $\mathbb{R}$.

**Why this lemma exists, and why it is a lemma.** Three results of this page —
[[thm-continuous-image-of-a-compact-set-r]], [[thm-extreme-value-r]] and
[[thm-heine-cantor-r]] — are stated a second time here, having already been
proved metric-generally as
[[thm-continuous-image-of-a-compact-space-is-compact]],
[[thm-extreme-value-metric]] and [[thm-heine-cantor-metric]]. The duplication is
deliberate: the $\mathbb{R}$-native proofs run through
[[thm-heine-borel-characterisation-r]] and
[[thm-compact-iff-sequentially-compact-r]], which are order-based, while the
metric proofs run through the cover machinery of metric spaces. **This item is
the single place in the library where that duplication is acknowledged**, and
clauses 1 and 5 are what make the two families of statements literally the same
statements. It is a lemma, and not a remark, precisely so that later pages can
cite it and move between the two vocabularies.

**Clause 5 closes a second seam.** The phrase *compact subset of $\mathbb{R}$*
is defined twice in this library — metrically, as compactness of the metric
subspace ([[def-metric-compactness]]), and $\mathbb{R}$-natively, by covers by
open subsets of $\mathbb{R}$ ([[def-open-cover-r]]) — and until this clause no
item asserted that the two agree.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ with the subspace metric $d_A(x,y) = |x-y|$, a function $f : A \to \mathbb{R}$, and a set $K \subseteq \mathbb{R}$ with the subspace metric $d_K$.

[L1] The usual metric: $d_{\mathbb{R}}(x,y) = |x-y|$ is a metric on $\mathbb{R}$; its open balls are the intervals $B(x,r) = (x-r, x+r)$; and a set $U \subseteq \mathbb{R}$ is open in the metric topology of $d_{\mathbb{R}}$ exactly when it is open in the sense of [[def-open-and-closed-in-r]] ([[lem-real-line-is-a-metric-space]], [[def-metric-space]], [[def-metric-ball]], [[def-metric-topology]]).

[L2] Subspace metric: for $S \subseteq \mathbb{R}$ the restriction $d_S$ of $d_{\mathbb{R}}$ to $S \times S$ is a metric on $S$, so $d_S(x,y) = |x-y|$ for $x, y \in S$ ([[def-isometry-and-metric-embedding]]).

[L3] Metric continuity at $a \in X$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in X$ with $d_X(x,a) < \delta$ satisfies $d_Y(f(x), f(a)) < \varepsilon$ ([[def-metric-continuity]]).

[L4] Metric uniform continuity: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in X$ with $d_X(x,x') < \delta$ satisfy $d_Y(f(x), f(x')) < \varepsilon$ ([[def-metric-uniform-continuity]]).

[L5] Continuity and uniform continuity of a real function on $A$, in the forms of [[def-continuity-real]] and [[def-uniform-continuity-real]].

[L6] Lipschitz and Hölder for a map of metric spaces: $d_Y(f(x),f(x')) \le L\,d_X(x,x')$, respectively $d_Y(f(x),f(x')) \le C\,d_X(x,x')^{\alpha}$ for a rational $\alpha$ with $0 < \alpha \le 1$, the power being that of [[def-rational-power]] with the convention $0^{\alpha} = 0$ ([[def-lipschitz-holder-contraction]]).

[L7] The regularity hierarchy for maps of metric spaces: Lipschitz implies uniformly continuous, uniformly continuous implies continuous, $\alpha$-Hölder implies uniformly continuous, and on a nonempty bounded space Lipschitz implies $\alpha$-Hölder for every rational $\alpha \in (0,1]$ ([[thm-metric-regularity-hierarchy]]).

[L8] Intrinsic character of compactness: a subset $K$ of a metric space $X$ is a compact metric space in its own right, with the subspace metric, exactly when every family of open subsets of $X$ whose union contains $K$ has a finite subfamily whose union contains $K$ ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

[L9] Compactness and sequential compactness of $K \subseteq \mathbb{R}$ in the $\mathbb{R}$-native sense ([[def-open-cover-r]]), and sequential compactness of a metric space ([[def-metric-compactness-variants]]).

[L10] Metric convergence: $x_k \to p$ in $(X,d)$ means $d(x_k,p) \to 0$ in $\mathbb{R}$ ([[def-metric-convergence]]); convergence and the Cauchy condition for real sequences are those of [[def-real-limit]] and [[def-sequence]]; a metric is nonnegative ([[lem-metric-nonnegativity]]); and $|u| \ge 0$ with $\bigl||u|\bigr| = |u|$ ([[lem-of-abs-value]]).

[L11] Cauchy in a metric space: $(x_k)$ is Cauchy in $(X,d)$ when for every rational $\varepsilon > 0$ there is $N$ with $d(x_m,x_n) < \varepsilon$ for all $m,n \ge N$ ([[def-cauchy-in-metric]]).

[L12] A uniformly continuous map of metric spaces sends Cauchy sequences to Cauchy sequences ([[thm-uniform-continuity-preserves-cauchy]]).

## Proof

**Proof technique:** direct.

1.1 **The two distances are the two absolute values.** By [L1] and [L2], for $x, x' \in A$ we have $d_A(x,x') = |x - x'|$, and for $u, v \in \mathbb{R}$ we have $d_{\mathbb{R}}(u,v) = |u - v|$; in particular $d_{\mathbb{R}}(f(x), f(x')) = |f(x) - f(x')|$. [L1, L2]

1.2 **Clause 5, the cover half.** Take the ambient metric space to be $(\mathbb{R}, d_{\mathbb{R}})$ and $K \subseteq \mathbb{R}$ with $d_K$. By [L8], $(K,d_K)$ is a compact metric space exactly when every family of sets open in $(\mathbb{R}, d_{\mathbb{R}})$ whose union contains $K$ has a finite subfamily whose union contains $K$. By [L1] the sets open in $(\mathbb{R}, d_{\mathbb{R}})$ are exactly the open subsets of $\mathbb{R}$ in the sense of [[def-open-and-closed-in-r]]. So the displayed condition is word for word the definition of compactness of $K$ in [L9]. [L1, L8, L9]

2.1 **Clause 1.** Fix $c \in A$. Substituting the identities of step 1.1 into [L3], with $X := (A,d_A)$, $Y := (\mathbb{R}, d_{\mathbb{R}})$ and $a := c$, turns metric continuity at $c$ into: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$. That is verbatim the condition of [L5] defining continuity of $f$ at $c$ in the sense of [[def-continuity-real]]. The two conditions are therefore the same condition, and each holds at every point of $A$ exactly when the other does. [step 1.1, L3, L5]

2.2 **Clause 2.** The same substitution in [L4] turns metric uniform continuity into: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in A$ with $|x - x'| < \delta$ satisfy $|f(x) - f(x')| < \varepsilon$, which is verbatim [[def-uniform-continuity-real]] as recorded in [L5]. [step 1.1, L4, L5]

2.3 **Clauses 3 and 4.** The same substitution in [L6] turns the Lipschitz condition into $|f(x) - f(x')| \le L\,|x-x'|$ for all $x,x' \in A$, and the $\alpha$-Hölder condition into $|f(x) - f(x')| \le C\,|x-x'|^{\alpha}$, the power being that of [[def-rational-power]] and defined at $x = x'$ by the convention $0^{\alpha} = 0$ recorded in [L6]. Since this library gives no other definition of the two conditions for a real function on $A$, the displayed inequalities are what those words mean here. [step 1.1, L6]

2.4 **Clause 5, the sequential half: convergence first.** Let $(x_j)$ be a sequence with terms in $K$ and let $p \in K$. By [L10] and step 1.1, convergence of $(x_j)$ to $p$ in $(K,d_K)$ says $d_K(x_j,p) = |x_j - p| \to 0$ in $\mathbb{R}$; and $|x_j - p| \to 0$ says that for every rational $\varepsilon > 0$ there is $J$ with $\bigl||x_j - p| - 0\bigr| = |x_j - p| < \varepsilon$ for $j \ge J$, which is verbatim the statement $x_j \to p$ of [L10]. So the two convergences are the same relation. [step 1.1, L10]

3.1 **Clause 5, the sequential half.** A sequence in $(K,d_K)$ is exactly a sequence of reals with all terms in $K$, and by step 2.4 a subsequence of it converges to a point of $K$ in $(K,d_K)$ exactly when it converges to that point in $\mathbb{R}$. Hence "every sequence in $K$ has a subsequence converging in $(K,d_K)$ to a point of $K$" and "every sequence of reals with terms in $K$ has a subsequence converging in $\mathbb{R}$ to a point of $K$" are the same statement, which is the assertion of [L9] and [[def-metric-compactness-variants]]. [step 2.4, L9, L10]

3.2 **Clause 6.** By clauses 1 to 4, the four $\mathbb{R}$-native conditions are the corresponding metric conditions for the map $(A,d_A) \to (\mathbb{R},d_{\mathbb{R}})$, so the implications of [L7] hold between them verbatim; the boundedness hypothesis in the last of them is boundedness of the metric space $(A,d_A)$, which for $A \subseteq \mathbb{R}$ is boundedness of $A$ as a set of reals, since $d_A(x,x') = |x-x'|$. [step 2.1, step 2.2, step 2.3, L7]

3.3 **Clause 7.** By step 1.1 and [L11], a sequence $(x_k)$ with terms in $A$ is Cauchy in $(A,d_A)$ exactly when for every rational $\varepsilon > 0$ there is $N$ with $|x_m - x_n| < \varepsilon$ for all $m,n \ge N$, which is verbatim the Cauchy condition of [L10] for a sequence of reals. Combining this with clause 2 and [L12] gives that a uniformly continuous $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of reals. [step 1.1, step 2.2, L10, L11, L12]

4.1 Clauses 1 to 7 are proved, each by rewriting one definition into the other along the identity $d_A(x,x') = |x-x'|$ or, for clause 5, along [L8] and the agreement of the two notions of open subset of $\mathbb{R}$. [step 2.1, step 2.2, step 2.3, step 1.2, step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **Nothing here is a new theorem, and that is the point.** Every clause is an identification of two forms of words, and the only clause with any content beyond substitution is 5, which needs [[lem-compactness-is-intrinsic]] to move between covers by relatively open sets and covers by open subsets of $\mathbb{R}$, and needs [[lem-real-line-is-a-metric-space]] to know that the metric topology of $\mathbb{R}$ is the topology of [[def-open-and-closed-in-r]]. A reader who takes those two identifications for granted is taking for granted exactly what this library refuses to leave unsaid.

- **The hierarchy of clause 6 is not strict by fiat, and the witnesses live on the companion page.** [[thm-metric-regularity-hierarchy]] asserts the four implications and claims no converse. That none of them reverses for real functions is witnessed here: [[ex-x-to-the-beta-separates-the-holder-classes]] gives, for rationals $0 < \beta < \alpha \le 1$, a function on $[0,1]$ that is $\beta$-Hölder and not $\alpha$-Hölder, and in particular ($\alpha = 1$) is uniformly continuous and not Lipschitz; and [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]] gives a continuous function that is not uniformly continuous. Those two items are links, not dependencies: they are examples on the companion page, and nothing on this page rests on them.

- **What the dictionary does *not* say.** It does not say that the two proofs of a duplicated theorem are the same proof, and they are not: the $\mathbb{R}$-native ones use the order of $\mathbb{R}$ and spend no choice beyond what is named in each item, while the metric ones use covers and, where the equivalence of the compactness variants is invoked, countable or dependent choice. What the dictionary establishes is that the two *statements* coincide, so that a later page may use whichever proof it prefers and cite whichever form it needs.
````

### `thm-continuity-preimage-characterisation`

````markdown
---
id: thm-continuity-preimage-characterisation
kind: theorem
title: "$f : A \\to \\mathbb{R}$ is continuous on $A$ if and only if the preimage of every open subset of $\\mathbb{R}$ is the intersection with $A$ of an open subset of $\\mathbb{R}$, and dually for closed sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, def-open-and-closed-in-r, def-neighbourhood-r, thm-open-set-algebra-r]
justified_by: []
aliases: [thm-continuity-open-preimage-r]
landmark: true
short: "preimage characterisation of continuity"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.8)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "D. Ernst, Continuous Real Functions"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/08%3A_New_Page/8.5%3A_Continuous_Real_Functions"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and $f : A \to \mathbb{R}$. Call a set
$S \subseteq A$ **relatively open in $A$** when $S = U \cap A$ for some open
$U \subseteq \mathbb{R}$, and **relatively closed in $A$** when $S = G \cap A$
for some closed $G \subseteq \mathbb{R}$ ([[def-open-and-closed-in-r]]). For
$V \subseteq \mathbb{R}$ write $f^{-1}(V) := \{\, x \in A : f(x) \in V \,\}$.
Then the following are equivalent.

1. $f$ is continuous on $A$ ([[def-continuity-real]]).
2. $f^{-1}(V)$ is relatively open in $A$ for every open $V \subseteq \mathbb{R}$.
3. $f^{-1}(F)$ is relatively closed in $A$ for every closed $F \subseteq \mathbb{R}$.

**"Relatively open" is defined here inline, and on purpose.** At this point in
the reading order this library has no subspace-topology item for $\mathbb{R}$,
and the metric one ([[def-isometry-and-metric-embedding]]) may not be reached
before [[lem-real-and-metric-notions-agree]] has said that the two vocabularies
agree, which is later on this page. The phrase above is therefore an
abbreviation for the displayed condition and nothing more.

**The preimage is taken inside $A$.** $f^{-1}(V)$ is a subset of $A$, never of
$\mathbb{R}$, so claim 2 does **not** say that preimages of open sets are open.
They are open only when $A$ is itself open: then $U \cap A$ is an intersection
of two open sets, hence open ([[thm-open-set-algebra-r]]). For $A = [0,1]$ and
$f$ the identity, $f^{-1}\bigl((-1,1/2)\bigr) = [0,1/2)$ is not open, and it is
the trace on $A$ of the open set $(-1,1/2)$.

**No choice principle is used.** The open set witnessing claim 2 is not selected
point by point; it is *constructed* as a single union over a family cut out by a
property, which is the device the proof below makes explicit.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ and a function $f : A \to \mathbb{R}$; for $V \subseteq \mathbb{R}$, $f^{-1}(V) = \{\, x \in A : f(x) \in V \,\}$.

[L1] Continuity of $f$ at $c \in A$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(c)| < \varepsilon$ for every $x \in A$ satisfying $|x - c| < \delta$; equivalently $f\bigl(A \cap N_{\delta}(c)\bigr) \subseteq N_{\varepsilon}(f(c))$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Open sets of $\mathbb{R}$: $U$ is open when every $x \in U$ has some $N_{\varepsilon}(x) \subseteq U$; every neighbourhood $N_{\varepsilon}(x)$ is itself open; a set is closed exactly when its complement is open ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] An arbitrary union of open subsets of $\mathbb{R}$ is open ([[thm-open-set-algebra-r]]).

[L4] Set algebra: for $V \subseteq \mathbb{R}$ one has $f^{-1}(\mathbb{R} \setminus V) = A \setminus f^{-1}(V)$; and for $U \subseteq \mathbb{R}$, $A \setminus (U \cap A) = (\mathbb{R} \setminus U) \cap A$.

## Proof

**Proof technique:** direct.

1.1 **From 1 to 2: the canonical witness.** Assume $f$ is continuous on $A$ and let $V \subseteq \mathbb{R}$ be open. Define $$U \;:=\; \bigcup \bigl\{\, N_{\delta}(x) \ : \ x \in f^{-1}(V),\ \delta \in \mathbb{R},\ \delta > 0,\ f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq V \,\bigr\}.$$ The family being united is cut out by a property of the pair $(x,\delta)$, so it is a set and nothing is selected from it. Each of its members is open by [L2], so $U$ is open by [L3]. [L2, L3]

1.2 **$f^{-1}(V) \subseteq U \cap A$.** Let $x \in f^{-1}(V)$, so $x \in A$ and $f(x) \in V$. Since $V$ is open, [L2] gives a real $\varepsilon > 0$ with $N_{\varepsilon}(f(x)) \subseteq V$, and continuity at $x$ gives, by [L1], a real $\delta > 0$ with $f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq N_{\varepsilon}(f(x)) \subseteq V$. So this pair $(x,\delta)$ contributes $N_{\delta}(x)$ to the union, and $x \in N_{\delta}(x)$ by [L2]. Hence $x \in U$, and $x \in A$. [L1, L2]

1.3 **From 2 to 1.** Assume claim 2, let $c \in A$ and let a real $\varepsilon > 0$ be given. The set $V := N_{\varepsilon}(f(c))$ is open by [L2], so $f^{-1}(V) = U \cap A$ for some open $U \subseteq \mathbb{R}$. Since $|f(c) - f(c)| = 0 < \varepsilon$ we have $c \in f^{-1}(V)$, hence $c \in U$, and [L2] gives a real $\delta > 0$ with $N_{\delta}(c) \subseteq U$. Every $x \in A$ with $|x - c| < \delta$ then lies in $U \cap A = f^{-1}(V)$, so $f(x) \in N_{\varepsilon}(f(c))$, that is $|f(x) - f(c)| < \varepsilon$. As $c$ and $\varepsilon$ were arbitrary, $f$ is continuous on $A$. [L1, L2]

2.1 **$U \cap A \subseteq f^{-1}(V)$.** Let $y \in U \cap A$. Then $y \in N_{\delta}(x)$ for some pair $(x,\delta)$ occurring in the union, so $y \in A \cap N_{\delta}(x)$ and therefore $f(y) \in V$ by the defining property of that pair. Hence $y \in f^{-1}(V)$. [step 1.1]

3.1 **Claim 2 holds.** By steps 1.2 and 2.1, $f^{-1}(V) = U \cap A$ with $U$ open, so $f^{-1}(V)$ is relatively open in $A$; and $V$ was an arbitrary open subset of $\mathbb{R}$. [step 1.1, step 1.2, step 2.1]

4.1 **2 and 3 are equivalent.** Let $F \subseteq \mathbb{R}$ be closed and put $V := \mathbb{R} \setminus F$, which is open by [L2]. If claim 2 holds then $f^{-1}(V) = U \cap A$ with $U$ open, and by [L4] $$f^{-1}(F) = A \setminus f^{-1}(V) = A \setminus (U \cap A) = (\mathbb{R} \setminus U) \cap A ,$$ with $\mathbb{R} \setminus U$ closed by [L2]; so $f^{-1}(F)$ is relatively closed. The converse runs the same computation in the other direction, starting from an open $V$, putting $F := \mathbb{R} \setminus V$ and using $f^{-1}(V) = A \setminus f^{-1}(F)$. [step 3.1, L2, L4]

5.1 Statements 1, 2 and 3 are therefore equivalent, and the passage from 1 to 2 selected nothing. [step 3.1, step 1.3, step 4.1] ∎

## Remarks

- **Why the union, and not a choice of $\delta$ at each point.** The textbook proof says "for each $x \in f^{-1}(V)$ pick $\delta_x$", which is a choice function on a subset of $\mathbb{R}$ that may be uncountable. Nothing in this library licenses that. Uniting *all* admissible balls avoids the issue completely: the family is defined by a property, membership of $x$ in $U$ needs only the existence of one admissible $\delta$ for that single $x$, and the reverse inclusion needs only the defining property of whichever pair happens to catch $y$.

- **The dual form is not "preimages of closed sets are closed".** As with claim 2, the preimage lives in $A$, and it is relatively closed. The image direction fails outright: a continuous function may carry a closed set to a set that is not closed, which is [[fs-continuous-image-of-a-closed-set-is-closed]].

- **This is the statement that survives when $\mathbb{R}$ is replaced by a metric space or a topological space.** The metric version at this point in the reading order is [[def-metric-topology]] together with [[def-metric-continuity]], and the agreement of the two vocabularies for $A \subseteq \mathbb{R}$ is [[lem-real-and-metric-notions-agree]], later on this page.
````

### `thm-continuous-image-of-a-compact-space-is-compact`

````markdown
---
id: thm-continuous-image-of-a-compact-space-is-compact
kind: theorem
title: "The image of a compact metric space under a continuous map is compact, and so is the image of any compact subset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, lem-compactness-is-intrinsic, def-metric-continuity, thm-metric-continuity-characterisations, def-metric-topology, def-isometry-and-metric-embedding, def-injection-surjection-bijection, def-metric-space]
justified_by: []
aliases: []
landmark: true
short: "continuous image of a compact space"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be continuous ([[def-metric-continuity]]). Then:

1. If $(X,d_X)$ is compact ([[def-metric-compactness]]), the image
   $f[X] \subseteq Y$ is a compact subset of $Y$.
2. More generally, if $K \subseteq X$ is a compact subset of $X$, then $f[K]$ is
   a compact subset of $Y$.

No choice principle is used.

## Facts & Assumptions

**Given:** Metric spaces $(X,d_X)$ and $(Y,d_Y)$ and a continuous $f : X \to Y$; images and preimages are written $f[\,\cdot\,]$ and $f^{-1}[\,\cdot\,]$ ([[def-injection-surjection-bijection]]).

[L1] A subset $A$ of a metric space is compact exactly when for every family $(V_i)_{i \in I}$ of open subsets of the ambient space with $A \subseteq \bigcup_{i \in I} V_i$ there are $n \in \mathbb{N}$ and $i_0, \dots, i_n \in I$ with $A \subseteq V_{i_0} \cup \dots \cup V_{i_n}$, or else $A = \emptyset$; and a space is a compact subset of itself exactly when it is a compact metric space ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

[L2] $f$ is continuous exactly when $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$ ([[thm-metric-continuity-characterisations]], [[def-metric-continuity]], [[def-metric-topology]]).

[L3] The restriction of $f$ to a metric subspace $(K,d_K)$ of $X$ is continuous as a map $(K,d_K) \to (Y,d_Y)$, since the $\varepsilon$-$\delta$ condition at a point of $K$ is the condition for $f$ at that point read for the points of $K$ only, and $d_K$ is the restriction of $d_X$ ([[def-isometry-and-metric-embedding]], [[def-metric-continuity]]).

## Proof

**Proof technique:** direct.

1.1 Assume $(X,d_X)$ compact and let $(V_i)_{i \in I}$ be a family of open subsets of $Y$ with $f[X] \subseteq \bigcup_{i \in I} V_i$. [L1]

2.1 Each $f^{-1}[V_i]$ is open in $X$, and $X = \bigcup_{i \in I} f^{-1}[V_i]$, because every $x \in X$ has $f(x) \in f[X]$ and so $f(x) \in V_i$ for some $i$. [L2, step 1.1]

3.1 If $X = \emptyset$ then $f[X] = \emptyset$ and there is nothing to prove; otherwise compactness of $X$, read against the indexed family of step 2.1, gives $n \in \mathbb{N}$ and $i_0, \dots, i_n \in I$ with $X = f^{-1}[V_{i_0}] \cup \dots \cup f^{-1}[V_{i_n}]$. [L1, step 2.1]

4.1 Every $y \in f[X]$ is $f(x)$ for some $x \in X$, and that $x$ lies in some $f^{-1}[V_{i_j}]$, so $y \in V_{i_j}$; hence $f[X] \subseteq V_{i_0} \cup \dots \cup V_{i_n}$ and $f[X]$ is a compact subset of $Y$: claim 1. [L1, step 3.1]

5.1 For claim 2, let $K \subseteq X$ be a compact subset, so that $(K,d_K)$ is a compact metric space; the restriction of $f$ to $K$ is continuous, and its image is $f[K]$, so claim 1 applied to that restriction gives that $f[K]$ is a compact subset of $Y$. [L1, L3, step 4.1] ∎

## Remarks

**Compactness travels forwards, not backwards.** The preimage of a compact set under a continuous map need not be compact: a constant map from an unbounded space has a one-point image. What claim 1 uses is that preimages of *open* sets are open, which is the content of continuity, together with the fact that a finite subcover upstairs projects to a finite subcover downstairs.

**Consequences on this page.** Claim 1 with $Y = \mathbb{R}$ gives the extreme value theorem ([[thm-extreme-value-metric]]), and claim 2 is what makes the inverse of a continuous bijection from a compact space continuous ([[thm-continuous-bijection-from-a-compact-space-has-continuous-inverse]]).
````

### `thm-heine-borel-characterisation-r`

````markdown
---
id: thm-heine-borel-characterisation-r
kind: theorem
title: "A subset of $\\mathbb{R}$ is compact if and only if it is closed and bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-heine-borel-r, lem-compact-implies-closed-and-bounded-r, def-open-cover-r, def-interval, def-bounded-set, def-open-and-closed-in-r]
justified_by: []
forward_refs: [cex-unbounded-closed-set-not-compact, cex-closed-bounded-in-q-not-compact]
aliases: []
landmark: true
short: "compact $\\iff$ closed and bounded"
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.41)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$. Then $K$ is compact ([[def-open-cover-r]]) if and
only if $K$ is closed ([[def-open-and-closed-in-r]]) and bounded
([[def-bounded-set]]).

This is the Heine-Borel theorem in the form used everywhere below. The forward
implication is [[lem-compact-implies-closed-and-bounded-r]] and spends no
completeness, only the Archimedean property and the existence of maxima of
finite sets; the backward implication rests on
[[thm-heine-borel-r]] and therefore on the completeness of $\mathbb{R}$, and the
remarks below record where it fails without completeness.

## Facts & Assumptions

**Given:** A subset $K \subseteq \mathbb{R}$.

[L1] Open cover, finite subfamily and compactness; the empty subfamily covers $\varnothing$ ([[def-open-cover-r]]).

[L2] A compact subset of $\mathbb{R}$ is closed and bounded ([[lem-compact-implies-closed-and-bounded-r]]).

[L3] Every closed bounded interval $[\ell,u]$ with $\ell \le u$ is compact ([[thm-heine-borel-r]]).

[L4] $K$ is closed exactly when $\mathbb{R} \setminus K$ is open ([[def-open-and-closed-in-r]]).

[L5] $K$ is bounded exactly when there are $\ell, u \in \mathbb{R}$ with $\ell \le y \le u$ for every $y \in K$ ([[def-bounded-set]]).

[L6] $[\ell,u] = \{\, z \in \mathbb{R} : \ell \le z \le u \,\}$ ([[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 If $K$ is compact then $K$ is closed and bounded, which is [L2]; this is the forward implication. [L2]

1.2 For the backward implication assume $K$ is closed and bounded. If $K = \varnothing$ then every open cover of $K$ admits the empty subfamily as a finite subcover, so $K$ is compact. [assume-hyp, L1]

1.3 Assume moreover $K \ne \varnothing$; fix $s \in K$ and, by [L5], reals $\ell, u$ with $\ell \le y \le u$ for every $y \in K$. Then $\ell \le s \le u$, so $\ell \le u$, and $K \subseteq [\ell,u]$ by [L6]. [assume-hyp, L5, L6, choose]

2.1 Let $\mathcal{U}$ be an open cover of $K$ and put $\mathcal{W} := \mathcal{U} \cup \{\mathbb{R} \setminus K\}$. Every member of $\mathcal{W}$ is open, since $\mathbb{R} \setminus K$ is open by [L4], and $\mathcal{W}$ covers $[\ell,u]$: a point of $[\ell,u]$ either lies in $K$, hence in some member of $\mathcal{U}$, or lies outside $K$, hence in $\mathbb{R} \setminus K$. [step 1.3, L1, L4]

3.1 By [L3] the interval $[\ell,u]$ is compact, so some finite subfamily $\{W_0, \dots, W_p\}$ of $\mathcal{W}$ covers $[\ell,u]$, where the case of an empty subfamily is possible only when $[\ell,u] = \varnothing$, which is excluded by $\ell \le u$. Put $\mathcal{V} := \{\, W_i : W_i \in \mathcal{U} \,\}$, a finite subfamily of $\mathcal{U}$. Then $K \subseteq \bigcup \mathcal{V}$: a point $y \in K \subseteq [\ell,u]$ lies in some $W_i$, and $W_i$ cannot be a member of $\mathcal{W}$ outside $\mathcal{U}$, because the only such member is $\mathbb{R} \setminus K$ and $y \in K$; so $W_i \in \mathcal{U}$ and $W_i \in \mathcal{V}$. [step 2.1, L1, L3, L6]

4.1 Every open cover of a nonempty closed bounded $K$ therefore has a finite subcover, so such a $K$ is compact; together with the empty case of step 1.2 this proves the backward implication, and step 1.1 is the forward one. [step 1.1, step 1.2, step 3.1, L1] ∎

## Remarks

- **A closed subset of a compact set is compact.** If $C \subseteq K$ with $K$
  compact and $C$ closed, then $C$ is bounded, being a subset of a bounded set,
  and closed by hypothesis, so it is compact by the theorem. The corresponding
  statement for arbitrary subsets is false: $(0,1) \subseteq [0,1]$ is bounded
  and not compact ([[cex-unbounded-closed-set-not-compact]]).

- **Both hypotheses are needed and neither implies the other.**
  [[cex-unbounded-closed-set-not-compact]] exhibits a closed set that is not
  bounded and a bounded set that is not closed, and neither is compact.

- **What the theorem is not.** It characterises compactness *for subsets of
  $\mathbb{R}$*. The two halves are of very different strengths: the forward
  half is elementary and general, while the backward half rests on the
  completeness of $\mathbb{R}$ and fails over $\mathbb{Q}$
  ([[fs-closed-bounded-compact-without-completeness]], witnessed by
  [[cex-closed-bounded-in-q-not-compact]]). Nothing here licenses "closed and
  bounded implies compact" in any other setting.
````


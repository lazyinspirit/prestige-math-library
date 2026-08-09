## Selection reasons

- critical risk (14): 11 declared dependencies; 11 cited facts; biconditional / both-direction claim; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-sequential-criterion-for-continuity`

Normalized current SHA-256: `737b6ef09bf7d7049901ca1210fb1c2db0ae571f43e89897f592fa5ca9621064`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-sequential-criterion-for-continuity
kind: theorem
title: "$f$ is continuous at $c \\in A$ if and only if $f(x_k) \\to f(c)$ for every sequence in $A$ converging to $c$, the converse direction costing countable choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, thm-sequential-criterion-for-function-limits, rem-heine-criterion-choice-cost, def-countable-choice, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-sequence, def-real-limit, lem-rat-embeds-dense, lem-of-abs-value]
justified_by: []
aliases: [thm-heine-criterion-for-continuity]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "sequential criterion for continuity"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.2)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. The
following are equivalent.

1. $f$ is continuous at $c$ ([[def-continuity-real]]).
2. For **every** sequence $(x_k)_{k \in \mathbb{N}}$ with $x_k \in A$ for every
   $k$ and $x_k \to c$ ([[def-sequence]], [[def-real-limit]]), the sequence
   $\bigl(f(x_k)\bigr)_{k \in \mathbb{N}}$ converges to $f(c)$.

**The sequences here are not required to avoid $c$**, which is the one
difference from [[thm-sequential-criterion-for-function-limits]] and is exactly
what makes the criterion available at an isolated point of $A$, where no limit
exists.

**The two directions do not cost the same.** The implication from 1 to 2 is
proved in ZF: the sequence is handed to the proof and nothing is selected. The
implication from 2 to 1 is obtained below from
[[thm-sequential-criterion-for-function-limits]], and therefore inherits the one
use of the axiom of countable choice ([[def-countable-choice]]) made in that
theorem's converse direction. What this library does and does not claim about
that cost is recorded once, in [[rem-heine-criterion-choice-cost]], and is not
restated here.

**Nothing else on this page is routed through this theorem.** The algebra of
continuous functions, composition, the intermediate value theorem, the extreme
value theorem and Heine-Cantor are all proved from $\varepsilon$ and $\delta$,
or from compactness, exactly as the previous page organised itself. The
choice-free direction 1 to 2 *is* used, in the intermediate value theorem and in
Heine-Cantor, and each of those two items says which direction it uses.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a point $c \in A$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$ ([[def-continuity-real]]).

[L2] A point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both; $c$ is isolated in $A$ when $N_{\eta}(c) \cap A = \{c\}$ for some real $\eta > 0$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] At a limit point $c$ of $A$, $f$ is continuous at $c$ if and only if the limit of $f$ at $c$ exists and equals $f(c)$; at an isolated point of $A$ every function is continuous ([[def-continuity-real]], [[def-function-limit]]).

[L4] Heine criterion for limits: at a limit point $c$ of $A$, $\lim_{x \to c} f(x) = L$ holds if and only if $f(x_k) \to L$ for every sequence $(x_k)$ with $x_k \in A$, $x_k \ne c$ for every $k$, and $x_k \to c$. The direction from the limit to sequences is a theorem of ZF; the converse uses the axiom of countable choice exactly once ([[thm-sequential-criterion-for-function-limits]], [[def-countable-choice]]).

[L5] Convergence of a real sequence: $x_k \to x$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all $k \ge K$; below every positive real lies a positive rational, so the test may equally be run at every real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]).

[L6] Absolute value: $|u| \ge 0$, and $|u| = 0$ exactly when $u = 0$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 **The isolated case, both statements at once.** Suppose $c$ is an isolated point of $A$ and fix a real $\eta > 0$ with $N_{\eta}(c) \cap A = \{c\}$. Then statement 1 holds by [L3]. Statement 2 also holds: if $x_k \in A$ for every $k$ and $x_k \to c$, then by [L5] there is $K$ with $|x_k - c| < \eta$ for all $k \ge K$, so $x_k \in N_{\eta}(c) \cap A = \{c\}$ and hence $x_k = c$ and $f(x_k) = f(c)$ for all $k \ge K$; a sequence eventually equal to $f(c)$ converges to $f(c)$, since $|f(x_k) - f(c)| = 0 < \varepsilon$ for $k \ge K$. So 1 and 2 are both true, and in particular equivalent. [L2, L3, L5, L6]

1.2 **The limit-point case, from 1 to 2.** Suppose $c$ is a limit point of $A$ and that $f$ is continuous at $c$. Let $(x_k)$ satisfy $x_k \in A$ for every $k$ and $x_k \to c$, and let a rational $\varepsilon > 0$ be given. By [L1] fix a real $\delta > 0$ with $|f(x) - f(c)| < \varepsilon$ for every $x \in A$ satisfying $|x - c| < \delta$; by [L5] fix $K$ with $|x_k - c| < \delta$ for all $k \ge K$. Every such $k$ has $x_k \in A$ and $|x_k - c| < \delta$, hence $|f(x_k) - f(c)| < \varepsilon$. As the rational $\varepsilon > 0$ was arbitrary, $f(x_k) \to f(c)$. Nothing was selected, so this is a theorem of ZF. [L1, L5]

1.3 **The limit-point case, from 2 to 1.** Suppose $c$ is a limit point of $A$ and that statement 2 holds. Every sequence $(x_k)$ with $x_k \in A$, $x_k \ne c$ for every $k$, and $x_k \to c$ is in particular a sequence in $A$ converging to $c$, so statement 2 gives $f(x_k) \to f(c)$. That is the right-hand side of [L4] with $L := f(c)$, so [L4] yields that the limit of $f$ at $c$ exists and equals $f(c)$, and [L3] turns that into continuity of $f$ at $c$. This is the direction that inherits the single use of countable choice made in [L4]. [L3, L4]

2.1 By [L2] the point $c$ is either isolated in $A$ or a limit point of $A$. In the first case step 1.1 proves both statements outright; in the second, step 1.2 gives 1 implies 2 and step 1.3 gives 2 implies 1. So statements 1 and 2 are equivalent, with the first implication free of choice and the second inheriting exactly one application of countable choice. [step 1.1, step 1.2, step 1.3, L2] ∎

## Remarks

- **Why the sequences are allowed to hit $c$.** [[thm-sequential-criterion-for-function-limits]] must exclude $c$, because [[def-function-limit]] says nothing about $f(c)$ and a sequence constantly equal to $c$ would test the wrong thing. Continuity does look at $f(c)$, so no exclusion is needed, and dropping it is what makes statement 2 meaningful at an isolated point, where the only sequences converging to $c$ are those eventually equal to $c$.

- **What the choice cost is, and what it is not.** The claim recorded here is that the proof *given above* of 2 implies 1 uses countable choice, through [[thm-sequential-criterion-for-function-limits]]. No claim is made that it is necessary; [[rem-heine-criterion-choice-cost]] states in full what this library does and does not assert, including Sierpiński's ZF theorem that a function continuous sequentially at *every* point of $\mathbb{R}$ is continuous, which shows the everywhere-statement and the pointwise statement behave differently.

- **The negative use is the common one.** To show that $f$ is *not* continuous at $c$ it suffices to exhibit one sequence in $A$ converging to $c$ whose image sequence does not converge to $f(c)$, and that uses only the choice-free direction. [[cex-dirichlet-is-nowhere-continuous]] on the companion page is proved without sequences at all, directly from density, which is cheaper still.
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-sequential-criterion-for-continuity",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/"
  ],
  "rationale": "Lebl presents the sequential criterion for continuity. The local statement keeps arbitrary subdomains and records the countable-choice cost of the converse, so it is a convention-aware adaptation.",
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
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real $\\varepsilon > 0$. - $x$ is a **limit point** (or *accumulation point*) of $A$ when $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$. - $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$. - The **derived set** of $A$ is $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$ - $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Let $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with $\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "2. **At an isolated point.** Suppose $c \\in A$ is an isolated point of $A$ ([[def-limit-point-r]]), so that $N_{\\eta}(c) \\cap A = \\{c\\}$ for some real $\\eta > 0$. Then **every** $f : A \\to \\mathbb{R}$ is continuous at $c$: take $\\delta := \\eta$, so that the only $x \\in A$ with $|x - c| < \\delta$ is $c$ itself, and $|f(c) - f(c)| = 0 < \\varepsilon$.",
      "uses": [
        "1.1",
        "1.3"
      ]
    },
    {
      "fact": "L3",
      "source": "def-function-limit",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]) with its order and absolute value ([[def-real-order]]). Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c \\in \\mathbb{R}$ be a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \\in \\mathbb{R}$. We say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write $$\\lim_{x \\to c} f(x) = L ,$$ when $$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ 0 < |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - L| < \\varepsilon\\ \\bigr],$$ where $\\varepsilon$ and $\\delta$ range over the **positive reals**. In the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N^{*}_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}(L),$$ $N^{*}_{\\delta}(c) = \\{\\, y : 0 < |y - c| < \\delta \\,\\}$ being the punctured $\\delta$-neighbourhood of $c$ and $N_{\\varepsilon}(L) = (L - \\varepsilon,\\ L + \\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because $|f(x) - L| < \\varepsilon$ says exactly $f(x) \\in N_\\varepsilon(L)$, and $0 < |x - c| < \\delta$ says exactly $x \\in N^{*}_\\delta(c)$. **Three features of this definition are load bearing, not decoration.** 1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that says every punctured neighbourhood of $c$ meets $A$, so for every $\\delta > 0$ the set $A \\cap N^{*}_\\delta(c)$ over which the implication quantifies is nonempty. Drop the requirement and the implication can be satisfied vacuously by *every* real $L$ at once, which is exactly what [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$ that is not a limit point of $A$ — an isolated point — the symbol $\\lim_{x \\to c} f(x)$ is therefore **not defined** in this library. 2. **$c \\in A$ is not required.** A limit point of $A$ need not belong to $A$ ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This is what allows a limit to be taken at a point where the function is not defined at all, as at $0$ for $x \\mapsto x\\,\\psi(1/x)$. 3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the single point $c$ changes nothing. Equality of the limit with the value is an extra condition, not a consequence: [[fs-limit-equals-value]]. **The notation presumes uniqueness.** Writing $\\lim_{x \\to c} f(x) = L$ treats the left-hand side as a name for a single real number, which is legitimate only because at a limit point at most one $L$ can satisfy the displayed condition. That obligation is discharged by [[lem-function-limit-unique]], recorded in this item's `justified_by`. As with $\\sup S$ ([[rem-sup-conventions]]) and $\\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function already known to have a limit at $c$. **Real and rational $\\varepsilon$ define the same relation.** Above, $\\varepsilon$ and $\\delta$ range over the positive reals. Restricting either quantifier to the positive rationals gives the same relation: every positive rational is a positive real, and below every positive real lies a positive rational ([[lem-rat-embeds-dense]]), so an $\\varepsilon$-condition verified for all positive rationals is verified for an arbitrary positive real $\\eta$ by running it at a rational $\\varepsilon$ with $0 < \\varepsilon < \\eta$, and a $\\delta$ produced as a real may be shrunk to a rational one below it. This is the passage sanctioned in the remarks of [[def-sequence]], and it is what lets this definition be compared with [[def-real-limit]], whose $\\varepsilon$ is rational, in [[thm-sequential-criterion-for-function-limits]].",
      "uses": [
        "1.1",
        "1.3"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-sequential-criterion-for-function-limits",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c$ be a limit point of $A$ ([[def-limit-point-r]]) and let $L \\in \\mathbb{R}$. The following are equivalent. 1. $\\lim_{x \\to c} f(x) = L$ ([[def-function-limit]]). 2. For **every** sequence $(x_k)_{k \\in \\mathbb{N}}$ with $x_k \\in A$ and $x_k \\ne c$ for every $k$, and $x_k \\to c$ ([[def-sequence]], [[def-real-limit]]), the sequence $(f(x_k))_{k \\in \\mathbb{N}}$ converges to $L$. **The two directions do not cost the same.** The implication from 1 to 2 is proved in ZF: the sequence is handed to the proof, and nothing is selected. The implication from 2 to 1, as proved below, invokes the axiom of countable choice ([[def-countable-choice]]) exactly once, at step 3.2, to select one bad point from each of countably many nonempty sets. What this library does and does not claim about that cost is recorded in [[rem-heine-criterion-choice-cost]]; the same asymmetry appears, for the same reason, in [[lem-sequential-characterisation-of-closure-r]]. Because of this, the results on this page that can be proved directly from $\\varepsilon$ and $\\delta$ — the algebra of limits, order preservation, the squeeze theorem, composition — **are** proved that way, and not through this criterion. What the criterion is for is the transfer of sequential results to functions, and above all the *negative* use recorded in [[cor-sequential-criterion-for-nonexistence]], which needs only the choice-free direction.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L4",
      "source": "def-countable-choice",
      "source_section": "Definition",
      "quote": "Countable Choice",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L5",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is $K$ with $|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "**Convergence and Cauchyness are not defined here.** They are already fixed, for sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to $x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$ is *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the toolkit for those two notions and does not restate them. A sequence **converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "for $x \\in \\mathbb{R}$ and rational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "$|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "**The isolated case, both statements at once.** Suppose $c$ is an isolated point of $A$ and fix a real $\\eta > 0$ with $N_{\\eta}(c) \\cap A = \\{c\\}$. Then statement 1 holds by [L3]. Statement 2 also holds: if $x_k \\in A$ for every $k$ and $x_k \\to c$, then by [",
      "step": "1.1",
      "inputs": [
        "L2",
        "L3",
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "**The limit-point case, from 1 to 2.** Suppose $c$ is a limit point of $A$ and that $f$ is continuous at $c$. Let $(x_k)$ satisfy $x_k \\in A$ for every $k$ and $x_k \\to c$, and let a rational $\\varepsilon > 0$ be given. By [L1] fix a real $\\delta > 0$ with $|f",
      "step": "1.2",
      "inputs": [
        "L1",
        "L5"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "**The limit-point case, from 2 to 1.** Suppose $c$ is a limit point of $A$ and that statement 2 holds. Every sequence $(x_k)$ with $x_k \\in A$, $x_k \\ne c$ for every $k$, and $x_k \\to c$ is in particular a sequence in $A$ converging to $c$, so statement 2 give",
      "step": "1.3",
      "inputs": [
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "By [L2] the point $c$ is either isolated in $A$ or a limit point of $A$. In the first case step 1.1 proves both statements outright; in the second, step 1.2 gives 1 implies 2 and step 1.3 gives 2 implies 1. So statements 1 and 2 are equivalent, with the first ",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2",
        "1.3",
        "L2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The Statement fixes c∈A, so A is nonempty; the empty-domain case is outside the hypotheses."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.1 handles sequences eventually equal to c using absolute difference 0, including isolated points."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.1 handles a singleton domain A={c}, where every convergent sequence is eventually c."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 1.1 treats the isolated/constant-sequence case; steps 1.2–1.3 separately treat the limit-point case."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement is relative to an arbitrary subset A and has no interval endpoints."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.3 invokes the reverse Heine criterion whose cited proof makes the single countable-choice selection; step 1.2 explicitly makes no such selection."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Steps 1.1 and 1.2 prove continuity implies convergence of every sequence, in the isolated and limit-point cases."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Steps 1.1 and 1.3 prove the converse in the isolated and limit-point cases; step 2.1 combines the exhaustive cases."
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
    "source": "thm-sequential-criterion-for-continuity",
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
    "source": "thm-sequential-criterion-for-continuity",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-sequential-criterion-for-function-limits",
    "declared_target": "thm-sequential-criterion-for-function-limits",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-sequential-criterion-for-continuity",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "rem-heine-criterion-choice-cost",
    "declared_target": "rem-heine-criterion-choice-cost",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-sequential-criterion-for-continuity",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-countable-choice",
    "declared_target": "def-countable-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-sequential-criterion-for-continuity",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-function-limit",
    "declared_target": "def-function-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-sequential-criterion-for-continuity",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-sequential-criterion-for-continuity",
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
  },
  {
    "source": "thm-sequential-criterion-for-continuity",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-sequential-criterion-for-continuity",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-sequential-criterion-for-continuity",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-sequential-criterion-for-continuity",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-sequential-criterion-for-continuity",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cex-dirichlet-is-nowhere-continuous",
    "declared_target": "cex-dirichlet-is-nowhere-continuous",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (12)

### `cex-dirichlet-is-nowhere-continuous`

````markdown
---
id: cex-dirichlet-is-nowhere-continuous
kind: counterexample
title: "The indicator of $\\mathbb{Q}$ is continuous at no point of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, lem-q-and-irrationals-dense-r, thm-closure-characterisations-r, def-limit-point-r, def-interior-closure-boundary-r, def-neighbourhood-r, def-open-and-closed-in-r, lem-rat-embeds-dense, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [cex-dirichlet-function]
landmark: true
short: "Dirichlet function is nowhere continuous"
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
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Zakon, Mathematical Analysis, §4.1: Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every function $\mathbb{R} \to \mathbb{R}$ is continuous at
at least one point ([[def-continuity-real]]).

The witness is the **Dirichlet function**, the indicator of the rationals:
writing $\mathbb{Q}$ for the canonical copy of the rationals inside $\mathbb{R}$
([[lem-rat-embeds-dense]]),

$$\mathbf{1}_{\mathbb{Q}} : \mathbb{R} \to \mathbb{R}, \qquad \mathbf{1}_{\mathbb{Q}}(x) := \begin{cases} 1 & \text{if } x \in \mathbb{Q},\\ 0 & \text{if } x \notin \mathbb{Q}. \end{cases}$$

It is continuous at **no** point of $\mathbb{R}$. The mechanism is that both
$\mathbb{Q}$ and its complement are dense ([[lem-q-and-irrationals-dense-r]]),
so every neighbourhood of every real contains a point of each, and the two
values differ by $1$.

**The argument is choice free.** Density is used in the form "every
neighbourhood of every point meets the set", which is
[[thm-closure-characterisations-r]] applied to a closure equal to $\mathbb{R}$;
no sequence is built, so neither
[[lem-sequential-characterisation-of-closure-r]] nor
[[thm-sequential-criterion-for-continuity]] is invoked, and the countable choice
those two spend is not spent here.

## Facts & Assumptions

**Given:** The canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals, its complement $X := \mathbb{R} \setminus \mathbb{Q}$, and the function $\mathbf{1}_{\mathbb{Q}} : \mathbb{R} \to \mathbb{R}$ taking the value $1$ on $\mathbb{Q}$ and $0$ on $X$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| < \varepsilon$ for every real $x$ with $|x - c| < \delta$. So continuity at $c$ fails as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a real $x$ with $|x - c| < \delta$ and $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| \ge \varepsilon_0$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Both $\mathbb{Q}$ and $X$ are dense in $\mathbb{R}$, that is, each has closure $\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]], [[def-limit-point-r]], [[lem-rat-embeds-dense]]).

[L3] A point lies in the closure of $S$ exactly when every neighbourhood $N_{\delta}$ of it meets $S$; so a set with closure $\mathbb{R}$ meets every $N_{\delta}(c)$, for every real $c$ and every real $\delta > 0$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] $\mathbf{1}_{\mathbb{Q}}$ is a well-defined function: $X$ is by definition the complement $\mathbb{R} \setminus \mathbb{Q}$, so every real either lies in $\mathbb{Q}$ or does not, exclusively; and $|1 - 0| = |0 - 1| = 1$, with $1/2 > 0$ and $1/2 < 1$ ([[lem-of-abs-value]], [[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 $\mathbf{1}_{\mathbb{Q}}$ is a well-defined function on $\mathbb{R}$ taking only the values $0$ and $1$, and $\mathbb{R}$ is the disjoint union of $\mathbb{Q}$ and $X$. [L4]

1.2 Let $c \in \mathbb{R}$ be arbitrary, put $\varepsilon_0 := 1/2 > 0$, and let a real $\delta > 0$ be given. [L4]

2.1 By [L2] and [L3] the neighbourhood $N_{\delta}(c)$ meets $\mathbb{Q}$ and it meets $X$: there are reals $p \in N_{\delta}(c) \cap \mathbb{Q}$ and $z \in N_{\delta}(c) \cap X$, so $|p - c| < \delta$ and $|z - c| < \delta$, with $\mathbf{1}_{\mathbb{Q}}(p) = 1$ and $\mathbf{1}_{\mathbb{Q}}(z) = 0$. [step 1.2, L2, L3, choose]

3.1 If $c \in \mathbb{Q}$ then $\mathbf{1}_{\mathbb{Q}}(c) = 1$ and the point $x := z$ satisfies $|x - c| < \delta$ and $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| = |0 - 1| = 1 \ge \varepsilon_0$. If $c \notin \mathbb{Q}$ then $\mathbf{1}_{\mathbb{Q}}(c) = 0$ and the point $x := p$ satisfies $|x - c| < \delta$ and $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| = |1 - 0| = 1 \ge \varepsilon_0$. By [L4] these two possibilities are exhaustive and exclusive. [step 1.1, step 2.1, L4]

4.1 So for the fixed $\varepsilon_0 = 1/2$ no real $\delta > 0$ serves at $c$, and by [L1] the function $\mathbf{1}_{\mathbb{Q}}$ is not continuous at $c$. As $c$ was an arbitrary real, it is continuous at no point of $\mathbb{R}$, and the refuted claim is false. [step 1.2, step 3.1, L1] ∎

## Remarks

- **Why $\varepsilon_0 = 1/2$ and not $1$.** Any $\varepsilon_0 \le 1$ works, since the discrepancy produced is exactly $1$. Taking $1/2$ leaves the inequality strict and makes it visible that the failure is not a boundary effect.

- **Restricting the domain repairs it completely.** The restriction of $\mathbf{1}_{\mathbb{Q}}$ to $\mathbb{Q}$ is constantly $1$ and the restriction to the irrationals is constantly $0$; both are continuous. This is the standard warning that continuity is a property of the pair (function, domain), recorded in [[def-continuity-real]]: continuity passes to subsets of the domain, never up from them.

- **A near miss worth naming.** Multiplying by $x$ repairs continuity at exactly one point: $x \mapsto x\,\mathbf{1}_{\mathbb{Q}}(x)$ is continuous at $0$ and nowhere else, which is [[ex-x-times-dirichlet-is-continuous-exactly-at-zero]]. The same argument as above, applied to any function taking two distinct values densely, shows nowhere-continuity; in particular the function equal to $1$ on $\mathbb{Q}$ and $-1$ elsewhere is nowhere continuous while its absolute value is constant.
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

### `def-countable-choice`

````markdown
---
id: def-countable-choice
kind: definition
title: "The Axiom of Countable Choice ($\\mathrm{AC}_\\omega$)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable, thm-well-ordering-principle, lem-countable-iff-surjection-from-n]
justified_by: []
external_refs: [rem-feferman-levy-model, rem-cohen-first-model]
aliases: [def-ac-omega, axiom-of-countable-choice]
landmark: false
short: "$\\mathrm{AC}_\\omega$"
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
    - title: "D. H. Fremlin, Measure Theory, Chapter 56"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Definition

The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most
countable family of nonempty sets ([[def-countable]]) has a choice function.

## Remarks

- **The two formulations are equivalent, and the passage between them uses no
  choice.** Given an at most countable family $\mathcal{F}$ of nonempty sets,
  either $\mathcal{F} = \varnothing$, where the empty function is a choice
  function, or a surjection $s : \mathbb{N} \to \mathcal{F}$ exists
  ([[lem-countable-iff-surjection-from-n]]); applying the indexed form to
  $X_n := s(n)$ gives $f$ with $f(n) \in s(n)$, and
  $g(S) := f(\min\{\, n : s(n) = S \,\})$ is a choice function for $\mathcal{F}$,
  the minimum being canonical by [[thm-well-ordering-principle]]. Conversely a
  choice function $g$ on the at most countable family $\{\, X_n : n \in \mathbb{N} \,\}$
  gives $f(n) := g(X_n)$.

- **$\mathrm{AC}_\omega$ is strictly weaker than the Axiom of Choice**
  ([[def-axiom-of-choice]]): AC implies it immediately, since AC applies to every
  family, while it is consistent with ZF that $\mathrm{AC}_\omega$ holds and AC
  fails. **It is also strictly stronger than what ZF proves**: it is consistent
  with ZF that $\mathrm{AC}_\omega$ fails, as Cohen's first model shows, since an
  infinite set of reals with no countably infinite subset
  ([[rem-cohen-first-model]]) is already a failure of $\mathrm{AC}_\omega$; the
  Feferman-Levy model ([[rem-feferman-levy-model]]) is a second witness. Both
  statements are conditional on the consistency of ZF and are external results,
  established by forcing and by permutation models; they are recorded here with
  references and are **not** proved in this library, which contains neither
  technique. Of the two, only the failure of $\mathrm{AC}_\omega$ is recorded in
  this library's catalogue of unproved results; the separation of
  $\mathrm{AC}_\omega$ from AC in the other direction is quoted from the
  references alone.

- **Dependent choice sits between them.** The Axiom of Dependent Choice
  (DC) says that if $R$ is a relation on a nonempty set $X$ such that every
  $x \in X$ has some $y$ with $x \mathbin{R} y$, then there is a sequence
  $(x_n)_{n \in \mathbb{N}}$ with $x_n \mathbin{R} x_{n+1}$ for all $n$. In ZF,
  $\mathrm{AC} \Rightarrow \mathrm{DC} \Rightarrow \mathrm{AC}_\omega$; both
  implications are theorems of ZF, and neither is proved here. That neither
  reverses is a pair of relative-consistency results of the same kind as in the
  previous bullet: if ZF is consistent, then so are ZF + DC + (not AC) and
  ZF + $\mathrm{AC}_\omega$ + (not DC). Both are established by forcing and by
  permutation models, are quoted here from the references rather than proved, and
  cannot be stated without the consistency hypothesis; so "DC is *strictly*
  between AC and $\mathrm{AC}_\omega$" is shorthand for those two conditional
  statements and is never used here as a standalone assertion. DC is the
  principle that legitimises "choose $x_0$, then choose $x_1$ depending on
  $x_0$, and so on"; $\mathrm{AC}_\omega$ only legitimises countably many
  *independent* choices made at once.

- **Being an axiom, $\mathrm{AC}_\omega$ carries no well-definedness obligation**,
  which is why this item has no `justified_by`. Its role in this library is
  bookkeeping: [[thm-countable-union-of-countable]] assumes it and flags the exact
  step that spends it, and [[fs-countable-union-theorem-of-zf]] records that the
  assumption cannot be removed.

- Every result *proved* on this page other than
  [[thm-countable-union-of-countable]] is a theorem of ZF alone. In particular
  [[lem-subset-of-countable]], [[lem-countable-iff-surjection-from-n]],
  [[thm-schroder-bernstein]], [[thm-rationals-countable]], [[thm-cantor-powerset]]
  and [[thm-r-uncountable]] are choice free, and each says so. The false
  statements at the end of the page are not all of that kind, and the claim above
  does not cover them: two of the three refute a ZF-provability claim only under
  the hypothesis that ZF is consistent, quoting an external independence result
  rather than proving it, and they say so in their own Facts.
````

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
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
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


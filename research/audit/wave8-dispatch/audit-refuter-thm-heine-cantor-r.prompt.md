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

- critical risk (13): 17 declared dependencies; 18 cited facts; 8 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language
- top-20 dependency-cone consumer (19 generated manifest edges)

## Target item — `thm-heine-cantor-r`

Normalized current SHA-256: `9b4db3e34e2021d5f71dd859438969721de0a60b391a73449b0f3edffd4dad6b`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-heine-cantor-r
kind: theorem
title: "Heine-Cantor in $\\mathbb{R}$: a continuous real function on a compact subset of $\\mathbb{R}$ is uniformly continuous, proved $\\mathbb{R}$-natively from sequential compactness"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-continuity-real, def-continuity-real, lem-real-and-metric-notions-agree, thm-sequential-criterion-for-continuity, thm-compact-iff-sequentially-compact-r, def-open-cover-r, def-real-limit, def-sequence, lem-index-map-grows, def-countable-choice, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-triangle-inequality, lem-of-abs-value, lem-rat-embeds-dense, def-ordered-field]
justified_by: []
aliases: [thm-uniform-continuity-on-compact-r]
forward_refs: [cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval, cex-x-squared-is-not-uniformly-continuous-on-r]
landmark: true
short: "Heine-Cantor in R"
proof_strategy: contradiction
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
    - title: "Heine-Cantor theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.19)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$ be compact ([[def-open-cover-r]]) and let
$f : K \to \mathbb{R}$ be continuous on $K$ ([[def-continuity-real]]). Then $f$
is uniformly continuous on $K$ ([[def-uniform-continuity-real]]).

**This theorem is stated twice in this library, on purpose.** Its metric-space
twin is [[thm-heine-cantor-metric]], proved there from the cover machinery of
metric spaces; the proof below is $\mathbb{R}$-native and runs through
[[thm-compact-iff-sequentially-compact-r]], which is order-based. That the two
statements are the same statement in two vocabularies is
[[lem-real-and-metric-notions-agree]], clauses 1, 2 and 5, immediately above.

**The choice cost, named.** The proof invokes the axiom of countable choice
([[def-countable-choice]]) exactly once, at step 3.1, to select one bad pair of
points from each of countably many nonempty sets. The backward implication of
[[thm-compact-iff-sequentially-compact-r]] also spends countable choice, and
that item names its own uses; the forward implication used here, from compact to
sequentially compact, does not. No claim is made that the axiom is necessary
for either.

## Facts & Assumptions

**Given:** A compact set $K \subseteq \mathbb{R}$ and a function $f : K \to \mathbb{R}$ continuous on $K$.

[L1] Uniform continuity on $K$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in K$ with $|x - x'| < \delta$ satisfy $|f(x) - f(x')| < \varepsilon$. Its negation: there is a real $\varepsilon_0 > 0$ such that for every real $\delta > 0$ some pair $x, x' \in K$ has $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$ ([[def-uniform-continuity-real]], [[def-ordered-field]]).

[L2] A compact subset of $\mathbb{R}$ is sequentially compact: every sequence with all terms in $K$ has a subsequence converging to a point of $K$ ([[thm-compact-iff-sequentially-compact-r]], [[def-open-cover-r]], [[def-sequence]], [[def-real-limit]]).

[L3] Countable choice: for a family $(P_k)_{k \in \mathbb{N}}$ of nonempty sets there is a function on $\mathbb{N}$ picking an element of each ([[def-countable-choice]]).

[L4] A strictly increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]], [[def-sequence]]).

[L5] Archimedean property in reciprocal form: for every real $\eta > 0$ there is a natural $n \ge 1$ with $1/n < \eta$; and $0 < s \le t$ implies $1/t \le 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L6] Sequential criterion, the choice-free direction: if $f$ is continuous at $p \in K$ and $(z_j)$ has terms in $K$ with $z_j \to p$, then $f(z_j) \to f(p)$ ([[thm-sequential-criterion-for-continuity]], [[def-continuity-real]]).

[L7] Triangle inequality and absolute value: $|u + v| \le |u| + |v|$, $|{-u}| = |u|$, $|u| \ge 0$ ([[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

[L8] Convergence of real sequences is tested at rational $\varepsilon > 0$, and below every positive real lies a positive rational, so the test may equally be run at every real $\varepsilon > 0$ ([[def-real-limit]], [[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $f$ is not uniformly continuous on $K$. By [L1] fix a real $\varepsilon_0 > 0$ such that for every real $\delta > 0$ there are $x, x' \in K$ with $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$. [L1, assume-contra]

2.1 For $k \in \mathbb{N}$ put $P_k := \{\, (x,x') \in K \times K \ : \ |x - x'| < 1/(k+1) \text{ and } |f(x) - f(x')| \ge \varepsilon_0 \,\}$. Since $1/(k+1) > 0$, step 1.1 makes every $P_k$ nonempty. [step 1.1, L5]

3.1 By [L3] applied to the family $(P_k)_{k \in \mathbb{N}}$ fix a function $k \mapsto (x_k, x'_k)$ with $(x_k, x'_k) \in P_k$ for every $k$. **This is the single use of countable choice in this proof.** [step 2.1, L3, choose]

4.1 $(x_k)$ is a sequence of reals with all terms in $K$, so by [L2] there are a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ and $p \in K$ with $x_{n_j} \to p$. [step 3.1, L2, choose]

5.1 **The second sequence converges to $p$ as well.** Let a rational $\varepsilon > 0$ be given. By [L5] and [L8] fix $J_1$ with $1/(j+1) < \varepsilon/2$ for every $j \ge J_1$, and by step 4.1 fix $J_2$ with $|x_{n_j} - p| < \varepsilon/2$ for every $j \ge J_2$. For $j \ge \max\{J_1, J_2\}$, using $(x_{n_j}, x'_{n_j}) \in P_{n_j}$ and $n_j \ge j$ from [L4], we get $|x'_{n_j} - x_{n_j}| < 1/(n_j+1) \le 1/(j+1) < \varepsilon/2$, hence $|x'_{n_j} - p| \le |x'_{n_j} - x_{n_j}| + |x_{n_j} - p| < \varepsilon$ by [L7]. So $x'_{n_j} \to p$. [step 3.1, step 4.1, L4, L5, L7, L8]

6.1 The point $p$ lies in $K$ and $f$ is continuous at $p$, so [L6] applied to the two sequences of steps 4.1 and 5.1, both with terms in $K$, gives $f(x_{n_j}) \to f(p)$ and $f(x'_{n_j}) \to f(p)$. [step 4.1, step 5.1, L6]

7.1 By [L8] fix a rational $\varepsilon$ with $0 < \varepsilon < \varepsilon_0/2$, and by step 6.1 fix $J$ with $|f(x_{n_j}) - f(p)| < \varepsilon$ and $|f(x'_{n_j}) - f(p)| < \varepsilon$ for every $j \ge J$. For such $j$, [L7] gives $|f(x_{n_j}) - f(x'_{n_j})| \le |f(x_{n_j}) - f(p)| + |f(p) - f(x'_{n_j})| < 2\varepsilon < \varepsilon_0$. [step 6.1, L7, L8, choose]

8.1 But $(x_{n_j}, x'_{n_j}) \in P_{n_j}$ gives $|f(x_{n_j}) - f(x'_{n_j})| \ge \varepsilon_0$ for every $j$, which contradicts step 7.1. The assumption of step 1.1 is therefore false, and $f$ is uniformly continuous on $K$. [step 3.1, step 7.1, discharge-contradiction] ∎

## Remarks

- **Where compactness is used, and where continuity is used.** Compactness is used once, in step 4.1, to extract a convergent subsequence; continuity is used once, in step 6.1, at the single point $p$ that the extraction produces. Neither can be weakened: $x \mapsto 1/x$ on $(0,1)$ is continuous on a bounded non-closed set and not uniformly continuous ([[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]]), and $x \mapsto x^{2}$ on $\mathbb{R}$ is continuous on a closed unbounded set and not uniformly continuous ([[cex-x-squared-is-not-uniformly-continuous-on-r]]).

- **The converse is sharp.** For every noncompact $E \subseteq \mathbb{R}$ that is bounded there is a continuous function on $E$ that is not uniformly continuous, and for every noncompact $E$ there is an unbounded continuous function and a bounded continuous one with no greatest value. That is [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]], later on this page, and together with this theorem it says that compactness is exactly the hypothesis these results need.

- **The pairs, not the points, are what is chosen.** A common presentation selects two sequences separately and then extracts twice. Selecting the pair once, as above, keeps the count of choice applications at one and makes the second sequence's convergence a consequence rather than a second extraction.
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-heine-cantor-r",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces",
    "https://www.jirka.org/ra/html/sec_unifcont.html"
  ],
  "rationale": "The sources state that a continuous function on a compact set is uniformly continuous. The local proof adapts the standard sequential contradiction and explicitly accounts for its countable selection.",
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
      "source": "def-uniform-continuity-real",
      "source_section": "Definition",
      "quote": "and uniform continuity is",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "ordered field",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-compact-iff-sequentially-compact-r",
      "source_section": "Statement",
      "quote": "Let $K \\subseteq \\mathbb{R}$. Then $K$ is compact if and only if $K$ is sequentially compact ([[def-open-cover-r]]).",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-open-cover-r",
      "source_section": "Definition",
      "quote": "- An **open cover** of $K$ is a family $\\mathcal{U}$ of open subsets of $\\mathbb{R}$ with $K \\subseteq \\bigcup \\mathcal{U}$. - A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ that is still an open cover of $K$. - A subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ is **finite** when $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and members $U_0, \\dots, U_n$ of $\\mathcal{U}$ with $\\mathcal{V} = \\{U_0, \\dots, U_n\\}$; repetitions in the list are allowed and harmless. - $K$ is **compact** when every open cover of $K$ has a finite subcover: for every open cover $\\mathcal{U}$ of $K$, either $K = \\varnothing$ and the empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n \\in \\mathcal{U}$ with $$K \\subseteq U_0 \\cup \\dots \\cup U_n .$$ - $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with $x_k \\in K$ for all $k \\in \\mathbb{N}$ ([[def-sequence]]) has a subsequence converging ([[def-real-limit]]) to some point of $K$; equivalently, when every such sequence has a subsequential limit ([[def-subsequential-limit]]) that lies in $K$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "**Convergence and Cauchyness are not defined here.** They are already fixed, for sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to $x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$ is *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the toolkit for those two notions and does not restate them. A sequence **converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is $K$ with $|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-countable-choice",
      "source_section": "Definition",
      "quote": "> For every family $(X_n)_{n \\in \\mathbb{N}}$ of nonempty sets indexed by > $\\mathbb{N}$ there is a function $f$ with domain $\\mathbb{N}$ such that > $f(n) \\in X_n$ for every $n \\in \\mathbb{N}$. Equivalently, in the vocabulary of [[def-choice-function]]: every at most countable family of nonempty sets ([[def-countable]]) has a choice function.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-index-map-grows",
      "source_section": "Statement",
      "quote": "2. **Growth.** If $n$ is strictly increasing then $n_k \\ge k$ for every",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for every $k \\in \\mathbb{N}$; it is **unbounded** otherwise. - $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds for every $k \\ge K$. - $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some $k \\ge K$ for which $P(k)$ holds. - For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is again a sequence of reals. - A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$ along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$; it is again a sequence of reals.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let $\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number $n \\ge 1$ such that $$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$ where $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and $1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard we abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$. This is the **reciprocal form** of the Archimedean property. [[thm-of-archimedean]] on its own delivers only the assertion that the canonical naturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that the reciprocals of the naturals get below every positive bound, is the statement above, and it is recorded separately so that no proof has to reconstruct the inversion step in passing.",
      "uses": [
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "for every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$",
      "uses": [
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "positive",
      "uses": [
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-sequential-criterion-for-continuity",
      "source_section": "Statement",
      "quote": "1. $f$ is continuous at $c$ ([[def-continuity-real]]). 2. For **every** sequence $(x_k)_{k \\in \\mathbb{N}}$ with $x_k \\in A$ for every $k$ and $x_k \\to c$ ([[def-sequence]], [[def-real-limit]]), the sequence $\\bigl(f(x_k)\\bigr)_{k \\in \\mathbb{N}}$ converges to $f(c)$.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-triangle-inequality",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$.",
      "uses": [
        "5.1",
        "7.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "$|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "5.1",
        "7.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is $K$ with $|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$.",
      "uses": [
        "5.1",
        "7.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and rational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with $|x - \\hat q| < \\hat\\varepsilon$.",
      "uses": [
        "5.1",
        "7.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Suppose $f$ is not uniformly continuous on $K$. By [L1] fix a real $\\varepsilon_0 > 0$ such that for every real $\\delta > 0$ there are $x, x' \\in K$ with $|x - x'| < \\delta$ and $|f(x) - f(x')| \\ge \\varepsilon_0$.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "For $k \\in \\mathbb{N}$ put $P_k := \\{\\, (x,x') \\in K \\times K \\ : \\ |x - x'| < 1/(k+1) \\text{ and } |f(x) - f(x')| \\ge \\varepsilon_0 \\,\\}$. Since $1/(k+1) > 0$, step 1.1 makes every $P_k$ nonempty.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L5"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "By [L3] applied to the family $(P_k)_{k \\in \\mathbb{N}}$ fix a function $k \\mapsto (x_k, x'_k)$ with $(x_k, x'_k) \\in P_k$ for every $k$. **This is the single use of countable choice in this proof.**",
      "step": "3.1",
      "inputs": [
        "L3",
        "2.1"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "$(x_k)$ is a sequence of reals with all terms in $K$, so by [L2] there are a strictly increasing $n : \\mathbb{N} \\to \\mathbb{N}$ and $p \\in K$ with $x_{n_j} \\to p$.",
      "step": "4.1",
      "inputs": [
        "L2",
        "3.1"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "**The second sequence converges to $p$ as well.** Let a rational $\\varepsilon > 0$ be given. By [L5] and [L8] fix $J_1$ with $1/(j+1) < \\varepsilon/2$ for every $j \\ge J_1$, and by step 4.1 fix $J_2$ with $|x_{n_j} - p| < \\varepsilon/2$ for every $j \\ge J_2$. ",
      "step": "5.1",
      "inputs": [
        "L5",
        "L8",
        "4.1",
        "L4",
        "L7",
        "3.1"
      ]
    },
    {
      "id": "step-6-1",
      "claim": "The point $p$ lies in $K$ and $f$ is continuous at $p$, so [L6] applied to the two sequences of steps 4.1 and 5.1, both with terms in $K$, gives $f(x_{n_j}) \\to f(p)$ and $f(x'_{n_j}) \\to f(p)$.",
      "step": "6.1",
      "inputs": [
        "L6",
        "4.1",
        "5.1"
      ]
    },
    {
      "id": "step-7-1",
      "claim": "By [L8] fix a rational $\\varepsilon$ with $0 < \\varepsilon < \\varepsilon_0/2$, and by step 6.1 fix $J$ with $|f(x_{n_j}) - f(p)| < \\varepsilon$ and $|f(x'_{n_j}) - f(p)| < \\varepsilon$ for every $j \\ge J$. For such $j$, [L7] gives $|f(x_{n_j}) - f(x'_{n_j})| \\",
      "step": "7.1",
      "inputs": [
        "L8",
        "6.1",
        "L7"
      ]
    },
    {
      "id": "step-8-1",
      "claim": "But $(x_{n_j}, x'_{n_j}) \\in P_{n_j}$ gives $|f(x_{n_j}) - f(x'_{n_j})| \\ge \\varepsilon_0$ for every $j$, which contradicts step 7.1. The assumption of step 1.1 is therefore false, and $f$ is uniformly continuous on $K$.",
      "step": "8.1",
      "inputs": [
        "7.1",
        "1.1",
        "3.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "For K=∅, uniform continuity is vacuous. Under the contrary assumption, steps 1.1–2.1 would make every P_k nonempty, already incompatible with K×K=∅; the subsequent contradiction remains valid."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 2.1 starts at k=0 with radius 1/(0+1), and step 5.1 uses the zero-based subsequence inequality n_j≥j."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "For singleton K the contrary assumption in step 1.1 cannot produce image separation ε_0; the contradiction proof therefore covers the one-point case."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The bad pairs in step 2.1 may have small domain distance but must have positive image separation; equal pairs are automatically excluded by that inequality."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "K is an arbitrary compact set, not an interval with endpoint conventions."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 2.1 proves each P_k nonempty and step 3.1 invokes countable choice exactly once; step 4.1 then uses the existential subsequence supplied by sequential compactness."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "Heine–Cantor is a one-way implication from compactness plus continuity to uniform continuity."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement does not assert that uniform continuity implies compactness."
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
    "source": "thm-heine-cantor-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-uniform-continuity-real",
    "declared_target": "def-uniform-continuity-real",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-heine-cantor-r",
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
    "source": "thm-heine-cantor-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-real-and-metric-notions-agree",
    "declared_target": "lem-real-and-metric-notions-agree",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-heine-cantor-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-sequential-criterion-for-continuity",
    "declared_target": "thm-sequential-criterion-for-continuity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-heine-cantor-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-compact-iff-sequentially-compact-r",
    "declared_target": "thm-compact-iff-sequentially-compact-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-heine-cantor-r",
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
    "source": "thm-heine-cantor-r",
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
    "source": "thm-heine-cantor-r",
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
    "source": "thm-heine-cantor-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-index-map-grows",
    "declared_target": "lem-index-map-grows",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-heine-cantor-r",
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
    "source": "thm-heine-cantor-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-heine-cantor-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-heine-cantor-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-heine-cantor-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-of-triangle-inequality",
    "declared_target": "lem-of-triangle-inequality",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-heine-cantor-r",
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
    "source": "thm-heine-cantor-r",
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
    "source": "thm-heine-cantor-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-heine-cantor-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "declared_target": "cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-heine-cantor-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cex-x-squared-is-not-uniformly-continuous-on-r",
    "declared_target": "cex-x-squared-is-not-uniformly-continuous-on-r",
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

## Full text of every cited or declared item (21)

### `cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval`

````markdown
---
id: cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval
kind: counterexample
title: "$x \\mapsto 1/x$ is continuous on $(0,1)$ and not uniformly continuous there, the pairs $1/(k+2)$ and $1/(k+3)$ defeating every $\\delta$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-continuity-implies-uniform-continuity, def-uniform-continuity-real, def-continuity-real, thm-algebra-of-continuous-functions, thm-heine-cantor-r, def-open-cover-r, thm-heine-borel-characterisation-r, def-interval, def-sequence, def-bounded-set, def-open-and-closed-in-r, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$1/x$ not uniformly continuous on $(0,1)$"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the function $f : (0,1) \to \mathbb{R}$, $f(x) := 1/x$, is
uniformly continuous on $(0,1)$ ([[def-uniform-continuity-real]],
[[def-interval]]).

$f$ is continuous on $(0,1)$ ([[def-continuity-real]]) and its domain is
bounded, so this is the sharpest simple instance of
[[fs-continuity-implies-uniform-continuity]]: neither continuity nor
boundedness of the domain implies uniform continuity, and what
[[thm-heine-cantor-r]] actually needs is compactness, which $(0,1)$ does not
have because it is not closed ([[thm-heine-borel-characterisation-r]]).

The refutation exhibits, for every $\delta > 0$, a pair of points of $(0,1)$
closer than $\delta$ whose $f$-values differ by exactly $1$. The pairs are

$$x_k := \frac{1}{k+2}, \qquad y_k := \frac{1}{k+3} \qquad (k \in \mathbb{N}),$$

and the shift by $2$ and $3$ is not cosmetic: $\mathbb{N}$ contains $0$ here
([[def-sequence]] is $0$-indexed), so $1/k$ is undefined at $k = 0$ and
$1/(k+1)$ leaves $(0,1)$ at $k = 0$.

## Facts & Assumptions

**Given:** The interval $A := (0,1)$ and the function $f : A \to \mathbb{R}$, $f(x) := 1/x$. Naturals are identified with their canonical images in $\mathbb{R}$.

[L1] Uniform continuity on $A$ fails as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a pair $x, x' \in A$ with $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$ ([[def-uniform-continuity-real]], [[def-ordered-field]]).

[L2] Algebra of continuous functions: the identity is continuous on $A$, and the reciprocal of a continuous nowhere-vanishing function is continuous ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L3] Archimedean property in reciprocal form: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; and $0 < s < t$ implies $0 < 1/t < 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L4] Ordered-field arithmetic: for $k \in \mathbb{N}$ one has $k + 3 > k + 2 \ge 2 > 1 > 0$, so $0 < 1/(k+3) < 1/(k+2) < 1$ and both lie in $(0,1)$; and $(k+2)(k+3) \ge k+2 > 0$ ([[def-ordered-field]], [[def-interval]], [[lem-of-abs-value]]).

[L5] $(0,1)$ is bounded but not closed, hence not compact, so [[thm-heine-cantor-r]] does not apply to it ([[def-bounded-set]], [[def-open-and-closed-in-r]], [[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

## Counterexample

**Proof technique:** direct.

1.1 $f$ is continuous on $A = (0,1)$: the identity is continuous there by [L2] and satisfies $x > 0 \ne 0$ for every $x \in A$, so its reciprocal is continuous on $A$ by [L2]. [L2, L4]

1.2 For $k \in \mathbb{N}$ put $x_k := 1/(k+2)$ and $y_k := 1/(k+3)$. By [L4] both lie in $A$, and $f(x_k) = k+2$, $f(y_k) = k+3$. At the first index, $k = 0$, this reads $x_0 = 1/2$ and $y_0 = 1/3$, both in $(0,1)$. [L4]

2.1 The separation of the arguments is $|x_k - y_k| = \dfrac{1}{k+2} - \dfrac{1}{k+3} = \dfrac{1}{(k+2)(k+3)} \le \dfrac{1}{k+2}$, using $(k+2)(k+3) \ge k+2 > 0$ and [L3]; the separation of the values is $|f(x_k) - f(y_k)| = |(k+2) - (k+3)| = 1$. [step 1.2, L3, L4]

3.1 Put $\varepsilon_0 := 1 > 0$ and let a real $\delta > 0$ be given. By [L3] fix a natural $m \ge 1$ with $1/m < \delta$, and take $k := m$. Then $k + 2 > m > 0$, so $1/(k+2) < 1/m < \delta$ by [L3], and step 2.1 gives $|x_k - y_k| \le 1/(k+2) < \delta$ while $|f(x_k) - f(y_k)| = 1 \ge \varepsilon_0$. [step 2.1, L3, choose]

4.1 So no real $\delta > 0$ serves $\varepsilon_0 = 1$, and by [L1] the function $f$ is not uniformly continuous on $(0,1)$, although by step 1.1 it is continuous there: the refuted claim is false. [step 1.1, step 3.1, L1, L5] ∎

## Remarks

- **What this witnesses in the regularity hierarchy.** [[thm-metric-regularity-hierarchy]], transported to real functions by [[lem-real-and-metric-notions-agree]], gives uniformly continuous $\Rightarrow$ continuous and asserts no converse. This item is the witness that the converse fails, and it is one of the two named in the remarks of [[lem-real-and-metric-notions-agree]]; the other, [[ex-x-to-the-beta-separates-the-holder-classes]], separates the Hölder classes below it.

- **The failure is at the missing endpoint, and it is repaired by restoring it.** On $[a,1]$ with $0 < a < 1$ the same formula is uniformly continuous, by [[thm-heine-cantor-r]], since $[a,1]$ is closed and bounded. It is also repaired by an explicit estimate: on $[a,1]$ one has $|1/x - 1/x'| = |x - x'|/(xx') \le |x-x'|/a^{2}$, so $f$ is even Lipschitz there.

- **A second reading of the same fact.** By [[cor-continuous-extension-from-a-dense-subset-r]], a uniformly continuous function on $(0,1)$ would extend continuously to $[0,1]$ and hence be bounded there ([[cor-boundedness-theorem-r]]); $1/x$ is unbounded on $(0,1)$, so it cannot be uniformly continuous. That route is shorter but rests on more, and the computation above is the elementary one.
````

### `cex-x-squared-is-not-uniformly-continuous-on-r`

````markdown
---
id: cex-x-squared-is-not-uniformly-continuous-on-r
kind: counterexample
title: "$x \\mapsto x^2$ is continuous on $\\mathbb{R}$ and not uniformly continuous, the pairs $k+1$ and $k+1+1/(k+1)$ defeating every $\\delta$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-continuity-implies-uniform-continuity, cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval, def-uniform-continuity-real, def-continuity-real, thm-algebra-of-continuous-functions, thm-heine-cantor-r, def-open-cover-r, thm-heine-borel-characterisation-r, def-integer-power, def-sequence, def-bounded-set, def-open-and-closed-in-r, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$x^2$ not uniformly continuous on $\\mathbb{R}$"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the function $f : \mathbb{R} \to \mathbb{R}$,
$f(x) := x^{2}$ ([[def-integer-power]]), is uniformly continuous on
$\mathbb{R}$ ([[def-uniform-continuity-real]]).

$f$ is continuous on $\mathbb{R}$ ([[def-continuity-real]]) and $\mathbb{R}$ is
a **closed** subset of itself, so this is the complement of
[[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]]: there the
domain was bounded and not closed, here it is closed and not bounded, and
uniform continuity fails in both cases. Neither half of compactness suffices on
its own, and [[thm-heine-cantor-r]] needs both
([[thm-heine-borel-characterisation-r]]).

The refutation exhibits, for every $\delta > 0$, a pair of reals closer than
$\delta$ whose squares differ by more than $2$. The pairs are

$$a_k := k+1, \qquad b_k := k + 1 + \frac{1}{k+1} \qquad (k \in \mathbb{N}),$$

and the shift by $1$ is not cosmetic: $\mathbb{N}$ contains $0$ here
([[def-sequence]] is $0$-indexed), so the reciprocal $1/k$ would be undefined at
the first index.

## Facts & Assumptions

**Given:** The function $f : \mathbb{R} \to \mathbb{R}$, $f(x) := x^{2}$. Naturals are identified with their canonical images in $\mathbb{R}$.

[L1] Uniform continuity on $\mathbb{R}$ fails as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a pair $x, x' \in \mathbb{R}$ with $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$ ([[def-uniform-continuity-real]], [[def-ordered-field]]).

[L2] Polynomial functions are continuous on $\mathbb{R}$; in particular so is $x \mapsto x^{2}$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]], [[def-integer-power]]).

[L3] Archimedean property in reciprocal form: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; and $0 < s < t$ implies $0 < 1/t < 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L4] Ordered-field arithmetic: for $k \in \mathbb{N}$ one has $k + 1 \ge 1 > 0$, so $1/(k+1)$ is defined and positive; the identity $v^{2} - u^{2} = (v-u)(v+u)$; and $|u| \ge 0$ with $|u| = u$ for $u \ge 0$ ([[def-ordered-field]], [[lem-of-abs-value]], [[def-integer-power]]).

[L5] $\mathbb{R}$ is closed in itself but not bounded, hence not compact, so [[thm-heine-cantor-r]] does not apply to it ([[def-open-and-closed-in-r]], [[def-bounded-set]], [[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

## Counterexample

**Proof technique:** direct.

1.1 $f$ is continuous on $\mathbb{R}$, being a polynomial function. [L2]

1.2 For $k \in \mathbb{N}$ put $a_k := k+1$ and $b_k := (k+1) + 1/(k+1)$, both defined because $k + 1 \ge 1 > 0$ by [L4]. At the first index, $k = 0$, this reads $a_0 = 1$ and $b_0 = 2$. [L4]

2.1 The separation of the arguments is $|a_k - b_k| = 1/(k+1)$. The separation of the values is, by [L4], $$|f(b_k) - f(a_k)| = |b_k - a_k|\,(b_k + a_k) = \frac{1}{k+1}\Bigl(2(k+1) + \frac{1}{k+1}\Bigr) = 2 + \frac{1}{(k+1)^{2}} > 2 .$$ [step 1.2, L4]

3.1 Put $\varepsilon_0 := 2 > 0$ and let a real $\delta > 0$ be given. By [L3] fix a natural $m \ge 1$ with $1/m < \delta$ and take $k := m$; then $k + 1 > m > 0$, so $|a_k - b_k| = 1/(k+1) < 1/m < \delta$ by [L3], while step 2.1 gives $|f(a_k) - f(b_k)| > 2 = \varepsilon_0$. [step 2.1, L3, choose]

4.1 So no real $\delta > 0$ serves $\varepsilon_0 = 2$, and by [L1] the function $f$ is not uniformly continuous on $\mathbb{R}$, although by step 1.1 it is continuous there: the refuted claim is false. [step 1.1, step 3.1, L1, L5] ∎

## Remarks

- **The mechanism is the growing slope, not a singularity.** The increment $b_k - a_k$ is chosen to be the reciprocal of the point, so the product $(b_k - a_k)(b_k + a_k)$ stays above $2$ however small the increment becomes. Nothing blows up: $f$ is a polynomial, bounded on every bounded set, and the failure is entirely about how far out one is allowed to look.

- **On every bounded interval it is uniformly continuous.** On $[-M,M]$ one has $|x^{2} - y^{2}| = |x-y|\,|x+y| \le 2M|x-y|$, so $f$ is Lipschitz there, hence uniformly continuous ([[lem-real-and-metric-notions-agree]], clause 6). That is also what [[thm-heine-cantor-r]] gives, since $[-M,M]$ is compact.

- **The consequence for products.** The identity is uniformly continuous on $\mathbb{R}$ and its square is not, so the product of two uniformly continuous functions need not be uniformly continuous; that is [[cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous]], which is this item read once more.
````

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

### `def-ordered-field`

````markdown
---
id: def-ordered-field
kind: definition
title: "Ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field]
aliases: []
landmark: true
short: "ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
---

## Definition

An **ordered field** is a field $F$ ([[def-field]]) together with a subset
$P \subseteq F$, the set of **positive** elements (the *positive cone*),
satisfying:

- **(O1) Trichotomy.** For each $x \in F$, exactly one of the following holds:
  $x \in P$, or $x = 0$, or $-x \in P$.
- **(O2) Closure.** If $x, y \in P$ then $x + y \in P$ and $x \cdot y \in P$.

We write $x > 0$ for $x \in P$ (read "$x$ is positive"), and define the order by

$$a < b \;:\Longleftrightarrow\; b - a \in P, \qquad a \le b \;:\Longleftrightarrow\; a < b \text{ or } a = b.$$

Thus $a > b$ means $b < a$, and $a \ge b$ means $b \le a$. An element $x$ with
$-x \in P$ (equivalently $x < 0$) is called **negative**.

## Remarks

- By trichotomy applied to $b - a$, for any $a, b$ exactly one of $a < b$,
  $a = b$, $a > b$ holds; this makes $\le$ a total order.
- (O2) says the positives are closed under addition and multiplication: sums and
  products of positives are positive.
- The rationals ([[thm-rat-ordered-field]]) and both constructions of the reals
  ([[thm-reals-ordered-field]], [[thm-reals-dedekind-ordered-field]]) are ordered
  fields, so every fact proved here from (O1)-(O2) holds in each of them.
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

### `def-uniform-continuity-real`

````markdown
---
id: def-uniform-continuity-real
kind: definition
title: "Uniform continuity of $f : A \\to \\mathbb{R}$: one $\\delta$ serving every pair of points of $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-continuity-real, def-interval, def-neighbourhood-r, lem-of-abs-value]
justified_by: []
aliases: []
forward_refs: [cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval, cex-x-squared-is-not-uniformly-continuous-on-r]
landmark: true
short: "uniform continuity of a real function"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Def. 4.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. Then $f$ is
**uniformly continuous on $A$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x, x' \in A)\ \bigl[\ |x - x'| < \delta \ \Longrightarrow\ |f(x) - f(x')| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the positive reals.

**The whole content is in the order of the quantifiers.** Written out,
continuity on $A$ ([[def-continuity-real]]) is

$$\forall \varepsilon\ \forall c \in A\ \exists \delta\ \forall x \in A ,$$

and uniform continuity is

$$\forall \varepsilon\ \exists \delta\ \forall x' \in A\ \forall x \in A .$$

Moving $\exists \delta$ to the left of the point quantifier is the entire
difference: for continuity the radius may shrink from point to point, for
uniform continuity one radius must serve the whole of $A$ at once. This is the
same distinction, for the same reason, that [[def-metric-uniform-continuity]]
draws for maps of metric spaces.

**Uniform continuity implies continuity.** Given $\varepsilon > 0$, take the
$\delta$ supplied by uniform continuity and, at a point $c \in A$, apply the
condition with $x' := c$: every $x \in A$ with $|x - c| < \delta$ satisfies
$|f(x) - f(c)| < \varepsilon$. So the same $\delta$ witnesses continuity at
every point of $A$ simultaneously. The converse fails, and the failure is not
marginal: [[fs-continuity-implies-uniform-continuity]] refutes it on this page,
and the companion page works two witnesses out in full.

**Uniform continuity is a property of the pair $(f, A)$, not of $f$ alone.** The
same formula may be uniformly continuous on one set and not on another:
$x \mapsto 1/x$ is uniformly continuous on $[1,\infty)$ and not on $(0,1)$, and
$x \mapsto x^{2}$ is uniformly continuous on every bounded interval and not on
$\mathbb{R}$. Restricting the domain therefore never destroys uniform
continuity, since the condition then quantifies over fewer pairs; enlarging it
may.

**The two points are unordered and may coincide.** Nothing above excludes
$x = x'$, at which the implication reads $|f(x) - f(x)| = 0 < \varepsilon$
([[lem-of-abs-value]]) and is automatic, and the condition is symmetric in the
two points because $|x - x'| = |x' - x|$.

## Remarks

- **A single $\delta$, and a picture.** For a uniformly continuous $f$ one may
  slide a rectangle of width $\delta$ and height $2\varepsilon$ along the graph
  and never have the graph leave it through the top or bottom. For a merely
  continuous $f$ the rectangle must be narrowed as one moves, and on
  $x \mapsto 1/x$ over $(0,1)$ it must be narrowed without limit.

- **Neighbourhood form.** The condition says
  $f\bigl(A \cap N_{\delta}(x')\bigr) \subseteq N_{\varepsilon}(f(x'))$ for
  every $x' \in A$, with one $\delta$ ([[def-neighbourhood-r]]). That is
  continuity on $A$ with the radius independent of the centre.

- **On an interval this is the notion the extension theorem needs.** A
  uniformly continuous function on a set $D$ extends to one on the closure of
  $D$ ([[cor-continuous-extension-from-a-dense-subset-r]]); mere continuity does
  not suffice, since $x \mapsto 1/x$ on $(0,1)$ has no continuous extension to
  $[0,1]$ ([[def-interval]]).

- **The two standard witnesses, for orientation.** The converse fails in two
  independent ways, each worked out on the companion page:
  [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]] on a
  bounded domain that is not closed, and
  [[cex-x-squared-is-not-uniformly-continuous-on-r]] on a closed domain that is
  not bounded. Both are named here for orientation only; nothing in this
  definition rests on them.

- **Lipschitz and Hölder conditions are stronger still, and are not redefined
  here.** They are [[def-lipschitz-holder-contraction]] instantiated at
  $A \subseteq \mathbb{R}$ with $d(x,y) = |x-y|$; the dictionary that makes that
  instantiation legitimate, and that transports the implications of
  [[thm-metric-regularity-hierarchy]] to real functions, is
  [[lem-real-and-metric-notions-agree]], immediately below.
````

### `lem-index-map-grows`

````markdown
---
id: lem-index-map-grows
kind: lemma
title: "A strictly increasing index map satisfies $n_k \\ge k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequence, thm-induction-principle, lem-nat-discrete, def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-successor-neq-self, thm-nat-linear-order, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "$n_k\\ge k$"
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
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "University of Wisconsin Math 521, Homework 5"
      url: "https://people.math.wisc.edu/~angenent/521.2016s/index.html"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $n : \mathbb{N} \to \mathbb{N}$ be a function, written $k \mapsto n_k$, and
recall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$
([[def-sequence]], [[def-nat-order]]).

1. **Consecutive comparisons suffice.** If $n_i < n_{\sigma(i)}$ for every
   $i \in \mathbb{N}$, then $n$ is strictly increasing.
2. **Growth.** If $n$ is strictly increasing then $n_k \ge k$ for every
   $k \in \mathbb{N}$.

Claim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is
what every later subsequence argument uses.

## Facts & Assumptions

**Given:** A function $n : \mathbb{N} \to \mathbb{N}$, written $k \mapsto n_k$, with $\sigma$ the successor and the order of [[def-nat-order]]; claim 1 is proved under the standing assumption that $n_i < n_{\sigma(i)}$ for every $i$, and claim 2 under the standing assumption that $n$ is strictly increasing ([[def-sequence]]).

[A1] $Q(k)$ denotes the statement: $n_j < n_k$ for every $j < k$.

[A2] $P(k)$ denotes the statement: $n_k \ge k$.

[L1] Order and successor on $\mathbb{N}$: $m \le p$ means $m + i = p$ for some $i$, so $0 \le m$ for every $m$ because $0 + m = m$; and $\sigma(k) = k + 1$ with $\sigma(k) \ne k$, so $k < \sigma(k)$ ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-add-identity]], [[lem-nat-successor-neq-self]]).

[L2] Discreteness: $m < p$ if and only if $\sigma(m) \le p$ ([[lem-nat-discrete]]).

[L3] Induction principle: if $R(0)$ holds and $R(k)$ implies $R(\sigma(k))$ for every $k$, then $R(k)$ holds for every $k \in \mathbb{N}$ ([[thm-induction-principle]]).

[L4] The order on $\mathbb{N}$ is reflexive, antisymmetric, transitive and total, and satisfies trichotomy ([[thm-nat-linear-order]], [[lem-nat-trichotomy]]).

## Proof

**Proof technique:** induction.

1.1 Base case for claim 1: $Q(0)$ holds vacuously, since no $j$ satisfies $j < 0$; indeed $0 \le j$ always holds, and $j < 0$ together with $0 \le j$ would contradict antisymmetry. [base, A1, L1, L4]

1.2 Inductive hypothesis for claim 1: fix $k \in \mathbb{N}$ and assume $Q(k)$, that is $n_j < n_k$ for every $j < k$. [ih, A1]

1.3 Base case for claim 2: $P(0)$ states $n_0 \ge 0$, which holds because $0 \le m$ for every natural $m$. [base, A2, L1]

1.4 Inductive hypothesis for claim 2: fix $k \in \mathbb{N}$ and assume $P(k)$, that is $k \le n_k$. [ih, A2]

2.1 Inductive step for claim 1: let $j < \sigma(k)$. By trichotomy either $k < j$, or $j = k$, or $j < k$. The case $k < j$ is impossible, since it gives $\sigma(k) \le j$ by [L2], which together with $j < \sigma(k)$ contradicts antisymmetry. If $j = k$ then $n_j = n_k < n_{\sigma(k)}$ by the standing assumption. If $j < k$ then $n_j < n_k$ by step 1.2 and $n_k < n_{\sigma(k)}$ by the standing assumption, so $n_j < n_{\sigma(k)}$ by transitivity. In every admissible case $n_j < n_{\sigma(k)}$, so $Q(\sigma(k))$ holds. [step 1.2, A1, L2, L4]

2.2 Inductive step for claim 2: $k < \sigma(k)$ by [L1], so strict increase gives $n_k < n_{\sigma(k)}$; combined with $k \le n_k$ from step 1.4 this yields $k < n_{\sigma(k)}$, hence $\sigma(k) \le n_{\sigma(k)}$ by [L2], which is $P(\sigma(k))$. [step 1.4, A2, L1, L2, L4]

3.1 Both inductions are complete, so by the induction principle $Q(k)$ holds for every $k$, which is claim 1, and $P(k)$ holds for every $k$, which is claim 2. [step 1.1, step 1.3, step 2.1, step 2.2, L3, discharge-induction] ∎

## Remarks

- Claim 2 is sharp: the identity map $n_k = k$ is strictly increasing with $n_k = k$ throughout, so no better bound than $n_k \ge k$ holds for all strictly increasing index maps.

- Claim 2 is exactly what makes a subsequence inherit a limit ([[lem-subsequence-inherits-limit]]): a threshold $K$ that works for the original sequence works unchanged for the subsequence, because $n_k \ge k \ge K$ whenever $k \ge K$.

- Nothing here is about $\mathbb{R}$; both claims are about $(\mathbb{N}, \le, \sigma)$ alone. Both are proved **by induction** ([L3]), and that is the method, not an order property. Claim 2 needs three order facts on top of the induction: that $0$ is least, which is what makes its base case $n_0 \ge 0$ true ([L1], step 1.3); discreteness ([[lem-nat-discrete]], [L2]), which upgrades $k < n_{\sigma(k)}$ to $\sigma(k) \le n_{\sigma(k)}$ (step 2.2); and transitivity in its mixed form, which composes $k \le n_k$ with $n_k < n_{\sigma(k)}$ into $k < n_{\sigma(k)}$ ([L4], step 2.2). Claim 1 additionally uses trichotomy and antisymmetry ([L4]).

- Of those three, neither the least element nor discreteness may be dropped. Discreteness alone is not enough: $(\mathbb{Z}, \le)$ is discrete in the same sense, $m < p$ iff $m + 1 \le p$, yet $k \mapsto k - 1$ is strictly increasing on $\mathbb{Z}$ with $n_k < k$ everywhere. What $\mathbb{Z}$ lacks is a least element to anchor the induction. A least element alone is not enough either, which is what fails over $\mathbb{Q}$: on the nonnegative rationals $x \mapsto x/2$ is strictly increasing and fixes the least element $0$, but $x/2 < x$ at every positive rational.
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

### `lem-of-inverse-positive`

````markdown
---
id: lem-of-inverse-positive
kind: lemma
title: "Inverses of positives are positive, and reciprocation reverses order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordered-field, lem-of-sign-rules, cor-of-one-positive]
aliases: []
landmark: false
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
    - title: "University of Innsbruck notes: Ordered fields"
      url: "https://www.uibk.ac.at/media/filer_public/28/02/280225fd-dde6-4e9c-bff6-baad33ff4a05/ragen.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b \in F$.

[L1] $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and for $x \neq 0$ exactly one of $x \in P$, $-x \in P$ holds ([[def-ordered-field]]).

[L2] Sign rules: a product of a positive and a negative is negative, a product of two positives is positive, and for $c > 0$ one has $a < b \iff ac < bc$ ([[lem-of-sign-rules]]).

[L3] $0 < 1$; in particular $1 \neq 0$ ([[cor-of-one-positive]]).

[L4] $P$ is closed under addition, so $<$ is transitive ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$, so $a \neq 0$ and its inverse $a^{-1}$ exists with $a \cdot a^{-1} = 1$; moreover $a^{-1} \neq 0$, since $a^{-1}$ has $a$ as its inverse while $0$ is non-invertible ($1 \neq 0$ by L3). [assume-hyp, L1, L3]

2.1 By trichotomy $a^{-1} \in P$ or $-a^{-1} \in P$; if $-a^{-1} \in P$, then $a > 0$ and $a^{-1} < 0$ give $a \cdot a^{-1} < 0$ by the sign rules, i.e. $1 < 0$, contradicting $0 < 1$; hence $a^{-1} \in P$, i.e. $a^{-1} > 0$, proving claim 1. [step 1.1, L2, L3, L1]

3.1 Assume $0 < a < b$; then $0 < b$ by transitivity, so by claim 1 both $a^{-1} > 0$ and $b^{-1} > 0$, and the sign rules give $a^{-1} b^{-1} > 0$. [assume-hyp, step 2.1, L4, L2, L1]

4.1 Multiplying $a < b$ by the positive $a^{-1} b^{-1}$ via the sign rules gives $a (a^{-1} b^{-1}) < b (a^{-1} b^{-1})$; since $a a^{-1} = 1$ and $b b^{-1} = 1$, this simplifies to $b^{-1} < a^{-1}$. [step 3.1, L2, algebra]

5.1 Together with $b^{-1} > 0$ from step 3.1, we conclude $0 < b^{-1} < a^{-1}$, proving claim 2. [step 3.1, step 4.1] ∎
````

### `lem-of-triangle-inequality`

````markdown
---
id: lem-of-triangle-inequality
kind: lemma
title: "The triangle inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-of-abs-value, lem-of-add-order, def-ordered-field]
aliases: []
landmark: true
short: "Triangle ineq."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
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

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$. Then

$$|x + y| \le |x| + |y|.$$

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] For every $u \in F$, $-|u| \le u \le |u|$, and $|u|$ equals $u$ or $-u$ ([[lem-of-abs-value]]).

[L2] Order compatible with addition: if $a \le b$ and $c \le d$, then $a + c \le b + d$. [[lem-of-add-order]] states the STRICT forms and only those ($a < b \Rightarrow a + c < b + c$, and $a < b$ with $c < d$ giving $a + c < b + d$); the nonstrict form used here is those two together with the cases $a = b$ and $c = d$, settled by trichotomy, the order being total ([[def-ordered-field]]). Explicitly: if $a < b$ and $c < d$ the second strict form applies; if $a < b$ and $c = d$ the first gives $a + c < b + c = b + d$; if $a = b$ and $c < d$ the first gives $a + c < a + d = b + d$; and if $a = b$ and $c = d$ the two sides are equal.

[L3] Field and order arithmetic: $-(a + b) = -a + (-b)$, and $a \le b \iff -b \le -a$ ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $-|x| \le x \le |x|$ and $-|y| \le y \le |y|$. [L1]

2.1 Adding the two chains of [step 1.1] with [L2] and using $-(|x| + |y|) = -|x| + (-|y|)$ from [L3] gives $-(|x| + |y|) \le x + y \le |x| + |y|$. [step 1.1, L2, L3]

3.1 By [L1] the value $|x + y|$ equals $x + y$ or $-(x + y)$; both $x + y \le |x| + |y|$ and $-(x + y) \le |x| + |y|$ hold by [step 2.1] and [L3] (the latter from $-(|x| + |y|) \le x + y$), so $|x + y| \le |x| + |y|$. [step 2.1, L1, L3] ∎
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

### `thm-compact-iff-sequentially-compact-r`

````markdown
---
id: thm-compact-iff-sequentially-compact-r
kind: theorem
title: "A subset of $\\mathbb{R}$ is compact iff it is sequentially compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-heine-borel-characterisation-r, thm-bolzano-weierstrass, def-open-cover-r, lem-sequential-characterisation-of-closure-r, def-subsequential-limit, def-bounded-set, def-countable-choice, def-open-and-closed-in-r, def-interior-closure-boundary-r, def-sequence, def-real-limit, lem-convergent-implies-bounded, lem-subsequence-inherits-limit, lem-limit-unique, lem-index-map-grows, thm-of-archimedean, lem-of-naturals-positive, lem-of-abs-value, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: true
short: "compact $\\iff$ sequentially compact"
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
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$. Then $K$ is compact if and only if $K$ is
sequentially compact ([[def-open-cover-r]]).

Neither implication is formal. Both are routed through the characterisation of
compactness by closed and bounded ([[thm-heine-borel-characterisation-r]]), and
the forward implication additionally uses Bolzano-Weierstrass
([[thm-bolzano-weierstrass]]). **The backward implication uses the axiom of
countable choice** ([[def-countable-choice]]): twice, once inside
[[lem-sequential-characterisation-of-closure-r]] when a point of the closure is
turned into a sequence, and once directly in step 2.3, where an unbounded set
supplies one point beyond each natural bound.

## Facts & Assumptions

**Given:** A subset $K \subseteq \mathbb{R}$. Sequences are indexed by $\mathbb{N}$, which contains $0$ ([[def-sequence]]).

[L1] $K$ is compact when every open cover has a finite subcover, and sequentially compact when every sequence with all terms in $K$ has a subsequence converging to a point of $K$ ([[def-open-cover-r]], [[def-subsequential-limit]], [[def-real-limit]]).

[L2] $K$ is compact exactly when $K$ is closed and bounded ([[thm-heine-borel-characterisation-r]]).

[L3] Bolzano-Weierstrass: a sequence $(x_k)$ of reals for which some $M$ satisfies $|x_k| \le M$ at every index has a subsequence converging to some real ([[thm-bolzano-weierstrass]]).

[L4] A point lies in $\overline{K}$ exactly when some sequence with all terms in $K$ converges to it, and $K$ is closed exactly when $\overline{K} = K$, exactly when $K$ is sequentially closed ([[lem-sequential-characterisation-of-closure-r]], [[def-interior-closure-boundary-r]], [[def-open-and-closed-in-r]]).

[L5] $K$ is bounded exactly when there are $\ell, u$ with $\ell \le y \le u$ for all $y \in K$ ([[def-bounded-set]]).

[L6] Countable choice: for a family $(Y_k)_{k \in \mathbb{N}}$ of nonempty sets there is $f$ with domain $\mathbb{N}$ and $f(k) \in Y_k$ for every $k$ ([[def-countable-choice]]).

[L7] A convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]); every subsequence of a convergent sequence converges to the same limit ([[lem-subsequence-inherits-limit]]); a sequence has at most one limit ([[lem-limit-unique]]); a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ satisfies $n_j \ge j$ ([[lem-index-map-grows]]).

[L8] Archimedean property: for every real $z$ there is a natural $j \ge 1$ with $z < j$; canonical naturals satisfy $k \cdot 1_{\mathbb{R}} \ge 0$ and are increasing in $k$ ([[thm-of-archimedean]], [[lem-of-naturals-positive]]).

[L9] Absolute value: $|z| \ge z$, $|z| \ge -z$, $|z| \ge 0$, and $|z| = z$ for $z \ge 0$ while $|z| = -z$ for $z < 0$ ([[lem-of-abs-value]]).

[L10] Every nonempty finite set of reals has a maximum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication assume $K$ is compact; then $K$ is closed and bounded by [L2], so [L5] supplies $\ell, u$ with $\ell \le y \le u$ for every $y \in K$. Let $(x_k)$ be any sequence with $x_k \in K$ for every $k \in \mathbb{N}$. [assume-hyp, L2, L5]

1.2 For the backward implication assume $K$ is sequentially compact. [assume-hyp, L1]

2.1 The sequence of step 1.1 is bounded: put $M := \max\{|\ell|, |u|\}$ by [L10]; for each $k$, from $\ell \le x_k \le u$ we get $x_k \le u \le |u| \le M$ and $-x_k \le -\ell \le |\ell| \le M$, so $|x_k| \le M$ by [L9]. By [L3] there are a strictly increasing $n$ and a real $L$ with $x_{n_j} \to L$; every term $x_{n_j}$ lies in $K$ and $K$ is closed, so $L \in K$ by [L4]. Hence every sequence in $K$ has a subsequence converging in $K$, that is, $K$ is sequentially compact. [step 1.1, L1, L3, L4, L9, L10]

2.2 A sequentially compact $K$ is closed: let $y \in \overline{K}$; by [L4] there is a sequence $(a_k)$ with $a_k \in K$ for all $k$ and $a_k \to y$; by sequential compactness some subsequence $(a_{n_j})$ converges to a point $z \in K$; but that subsequence also converges to $y$ by [L7], and limits are unique by [L7], so $z = y$ and $y \in K$. Hence $\overline{K} \subseteq K$, so $\overline{K} = K$ and $K$ is closed by [L4]. [step 1.2, L1, L4, L7]

2.3 A sequentially compact $K$ is bounded: suppose it is not. Then for every $k \in \mathbb{N}$ the set $Y_k := \{\, y \in K : y > k \text{ or } y < -k \,\}$ is nonempty, since $Y_k = \varnothing$ would mean $-k \le y \le k$ for every $y \in K$ and make $K$ bounded by [L5]. Use [L6] to fix $f$ with $f(k) \in Y_k$ and put $x_k := f(k)$; then $x_k \in K$, and $|x_k| > k$ for every $k$, because $x_k > k \ge 0$ gives $|x_k| = x_k > k$ while $x_k < -k \le 0$ gives $|x_k| = -x_k > k$ by [L9] and [L8]. By sequential compactness some subsequence $(x_{n_j})$ converges, hence is bounded by some real $M$ with $|x_{n_j}| \le M$ for all $j$ by [L7]; by [L8] fix a natural $j \ge 1$ with $M < j$, and then $|x_{n_j}| > n_j \ge j > M$ by [L7] and [L8], which contradicts $|x_{n_j}| \le M$. So $K$ is bounded. [step 1.2, L1, L5, L6, L7, L8, L9]

3.1 A sequentially compact $K$ is therefore closed by step 2.2 and bounded by step 2.3, hence compact by [L2]. [step 2.2, step 2.3, L2]

4.1 Step 2.1 is the forward implication and step 3.1 the backward one, so for subsets of $\mathbb{R}$ compactness and sequential compactness coincide. [step 2.1, step 3.1] ∎

## Remarks

- **The equivalence is proved, not defined, and it is proved through the order.**
  Both directions pass through [[thm-heine-borel-characterisation-r]], whose
  backward half needs the completeness of $\mathbb{R}$, and the forward
  direction adds [[thm-bolzano-weierstrass]], whose proof spends completeness
  again. Nothing here transfers to a setting where those are unavailable; see
  [[rem-r-native-topology-scope]].

- **Where the choices are spent, and whether they can be avoided.** Step 2.3
  selects one point of $K$ outside $[-k,k]$ for each $k$, and
  [[lem-sequential-characterisation-of-closure-r]] selects one point of $K$ in
  each shrinking neighbourhood. Both are countably many independent selections
  from subsets of $\mathbb{R}$, for which this library has no canonical rule, so
  [[def-countable-choice]] is invoked rather than worked around. The forward
  implication, step 2.1, makes no such selection: the subsequence comes from
  [[thm-bolzano-weierstrass]] as a single object.

- **Sequential compactness is the form used in analysis; compactness is the form
  that is stated without sequences.** The extraction of a convergent subsequence
  is what proofs about continuous functions on $[a,b]$ actually use, while the
  covering definition mentions no sequence and no limit. This theorem is what
  lets a reader move between them for subsets of $\mathbb{R}$, and it is proved
  only there.
````

### `thm-compactness-is-necessary-for-evt-and-uniform-continuity`

````markdown
---
id: thm-compactness-is-necessary-for-evt-and-uniform-continuity
kind: theorem
title: "Rudin 4.20, the sharp converse: on a noncompact $E \\subseteq \\mathbb{R}$ there is an unbounded continuous function and a bounded continuous function with no greatest value, and if $E$ is bounded there is a continuous function on $E$ that is not uniformly continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-heine-borel-characterisation-r, def-open-cover-r, thm-extreme-value-r, thm-heine-cantor-r, cor-boundedness-theorem-r, cor-continuous-extension-from-a-dense-subset-r, thm-algebra-of-continuous-functions, def-continuity-real, def-uniform-continuity-real, def-open-and-closed-in-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-bounded-set, def-max-min, lem-finite-set-has-max, lem-sup-epsilon, def-complete-ordered-field, def-interval, def-neighbourhood-r, def-integer-power, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-power-monotone, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [thm-rudin-4-20]
forward_refs: [cex-evt-fails-on-the-open-interval-and-on-the-half-line]
landmark: true
short: "compactness is necessary"
proof_strategy: constructive
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.20)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis"
      url: "https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf"
pipeline_run: null
---

## Statement

Let $E \subseteq \mathbb{R}$ be nonempty and **not** compact
([[def-open-cover-r]]). Then:

1. there is a function $f : E \to \mathbb{R}$, continuous on $E$
   ([[def-continuity-real]]), that is **unbounded** on $E$;
2. there is a function $g : E \to \mathbb{R}$, continuous and bounded on $E$,
   such that $\sup g[E]$ exists and is **not attained**; in particular $g$ has
   no greatest value on $E$ ([[def-max-min]]);
3. if in addition $E$ is **bounded** ([[def-bounded-set]]), there is a function
   $h : E \to \mathbb{R}$, continuous on $E$, that is **not uniformly
   continuous** on $E$ ([[def-uniform-continuity-real]]).

Together with [[cor-boundedness-theorem-r]], [[thm-extreme-value-r]] and
[[thm-heine-cantor-r]] this says that **compactness is exactly the hypothesis
those three theorems need**: on a compact set every continuous function is
bounded, attains its extrema and is uniformly continuous, and on a set that is
not compact each of those three conclusions fails for some continuous function.

**Claim 3 carries the boundedness hypothesis because it must.** On an unbounded
closed set every uniformly continuous function is still uniformly continuous,
and a noncompact set may well carry only uniformly continuous functions of
interest; what claim 3 asserts is the sharp statement for the bounded case, which
is the case Heine-Cantor leaves open. The unbounded case is covered by claims 1
and 2, which hold with no extra hypothesis.

**Every witness is exhibited, not merely asserted to exist.** Four functions do
the work: $x$ and $-1/(1+x^{2})$ when $E$ is unbounded, and $1/(x-x_0)$ and
$-|x - x_0|$ when $E$ is bounded, where $x_0$ is then a point of
$\overline{E} \setminus E$.

## Facts & Assumptions

**Given:** A nonempty set $E \subseteq \mathbb{R}$ that is not compact.

[L1] A subset of $\mathbb{R}$ is compact if and only if it is closed and bounded; so $E$ is not closed or not bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]], [[def-open-and-closed-in-r]], [[def-bounded-set]]).

[L2] Boundedness: $S$ is bounded when there are reals $\ell, u$ with $\ell \le s \le u$ for every $s \in S$; equivalently when there is a real $M \ge 0$ with $|s| \le M$ for every $s \in S$. So if $S$ is unbounded then for every real $M > 0$ some $s \in S$ has $|s| > M$ ([[def-bounded-set]], [[lem-of-abs-value]], [[lem-finite-set-has-max]], [[def-max-min]]).

[L3] Closure: $\overline{E}$ is the set of points every neighbourhood of which meets $E$, it contains $E$, and $E$ is closed exactly when $E = \overline{E}$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L4] Algebra of continuous functions: constants, the identity and polynomial functions are continuous on any subset of $\mathbb{R}$; sums, scalar multiples, products and absolute values of continuous functions are continuous; and if $q$ is continuous on $S$ and $q(x) \ne 0$ for every $x \in S$, then $p/q$ is continuous on $S$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]], [[def-integer-power]]).

[L5] Suprema: a nonempty subset of $\mathbb{R}$ bounded above has a least upper bound ([[def-complete-ordered-field]]), and for $u = \sup S$ every real $\varepsilon > 0$ admits $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L6] Archimedean property in reciprocal form, reciprocals, and squares: for every real $\eta > 0$ there is a natural $n \ge 1$ with $1/n < \eta$; $0 < s < t$ implies $0 < 1/t < 1/s$; $0 \le a < b$ implies $a^{2} < b^{2}$; and $t \ge 1$ implies $t^{2} \ge t$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]], [[lem-power-monotone]], [[def-integer-power]]).

[L7] Extension theorem: a uniformly continuous real function on a nonempty $D \subseteq \mathbb{R}$ extends to a continuous function on $\overline{D}$ ([[cor-continuous-extension-from-a-dense-subset-r]], [[def-uniform-continuity-real]]).

[L8] Ordered-field arithmetic in $\mathbb{R}$: totality and trichotomy; $|u| > 0$ exactly when $u \ne 0$; $1 + t^{2} \ge 1 > 0$ for every real $t$; and the minimum of a two-element set of reals ([[def-ordered-field]], [[lem-of-abs-value]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-interval]]).

## Proof

**Proof technique:** constructive.

1.1 By [L1] the set $E$ is not closed or not bounded, and these two possibilities are exhaustive: if $E$ is bounded then it is not closed. The two cases below are treated separately, and claim 3 arises only in the second. [L1]

1.2 **First case: $E$ is unbounded. Claim 1.** Put $f(x) := x$, continuous on $E$ by [L4]. Given a real $M > 0$, [L2] supplies $x \in E$ with $|x| > M$, that is $|f(x)| > M$; so $f$ is unbounded on $E$. [L2, L4, construct]

1.3 **First case, claim 2.** Put $g(x) := -1/(1+x^{2})$. The denominator is a polynomial function, continuous by [L4], and satisfies $1 + x^{2} \ge 1 > 0$ by [L8], so $g$ is continuous on $E$ by [L4]; moreover $0 < 1/(1+x^{2}) \le 1$, so $-1 \le g(x) < 0$ for every $x \in E$ and $g$ is bounded. Hence $g[E]$ is nonempty and bounded above by $0$, so $u := \sup g[E]$ exists by [L5] and $u \le 0$. [L4, L5, L8, construct]

2.1 **First case: the supremum is $0$ and is not attained.** Let a real $\varepsilon > 0$ be given and put $M := \max\{1, 1/\varepsilon\} \ge 1$. By [L2] there is $x \in E$ with $|x| > M$, so $x^{2} > M^{2} \ge M \ge 1/\varepsilon$ by [L6] and [L8], hence $1 + x^{2} > 1/\varepsilon > 0$ and $1/(1+x^{2}) < \varepsilon$ by [L6], that is $g(x) > -\varepsilon$. So no real below $0$ is an upper bound of $g[E]$, and $0$ is one; therefore $u = 0$. Since $g(x) < 0$ for every $x \in E$ by step 1.3, the value $0$ is not attained, and for each $x \in E$ the number $\varepsilon := -g(x) > 0$ produces by [L5] some $x' \in E$ with $g(x') > -\varepsilon = g(x)$, so $g$ has no greatest value. [step 1.3, L2, L5, L6, L8]

2.2 **Second case: $E$ is bounded, hence not closed.** By [L3] we have $E \subseteq \overline{E}$ and $E \ne \overline{E}$, so there is $x_0 \in \overline{E} \setminus E$. Every neighbourhood of $x_0$ meets $E$ by [L3]; and $x - x_0 \ne 0$ for every $x \in E$, since $x_0 \notin E$, so $|x - x_0| > 0$ there by [L8]. [step 1.1, L3, L8, choose]

3.1 **Second case, claim 1.** Put $f(x) := 1/(x - x_0)$ for $x \in E$. The denominator is a polynomial function, continuous by [L4], and does not vanish on $E$ by step 2.2, so $f$ is continuous on $E$ by [L4]. Given a real $M > 0$, step 2.2 supplies $x \in E$ with $|x - x_0| < 1/M$, and $|x - x_0| > 0$, so $|f(x)| = 1/|x - x_0| > M$ by [L6]. Hence $f$ is unbounded on $E$. [step 2.2, L4, L6, construct]

3.2 **Second case, claim 2.** Put $g(x) := -|x - x_0|$ for $x \in E$, continuous on $E$ by [L4]. Since $E$ is bounded, [L2] gives a real $M \ge 0$ with $|x| \le M$ on $E$, so $|x - x_0| \le M + |x_0|$ and $-(M + |x_0|) \le g(x) < 0$ for every $x \in E$: $g$ is bounded, and $g[E]$ is nonempty and bounded above by $0$. For a real $\varepsilon > 0$, step 2.2 supplies $x \in E$ with $|x - x_0| < \varepsilon$, that is $g(x) > -\varepsilon$; so $\sup g[E] = 0$ by [L5], and it is not attained because $g(x) < 0$ everywhere on $E$. As in step 2.1, $g$ therefore has no greatest value on $E$. [step 2.1, step 2.2, L2, L4, L5, L8, construct]

4.1 **Second case, claim 3.** Put $h := f$ of step 3.1, continuous on $E$. Suppose $h$ were uniformly continuous on $E$. By [L7] there would be a continuous $H : \overline{E} \to \mathbb{R}$ with $H(x) = h(x)$ for $x \in E$, and $x_0 \in \overline{E}$. Continuity of $H$ at $x_0$ with $\varepsilon := 1$ gives a real $\delta > 0$ such that every $z \in \overline{E}$ with $|z - x_0| < \delta$ satisfies $|H(z) - H(x_0)| < 1$, hence $|H(z)| < |H(x_0)| + 1 =: B$, a real with $B > 0$. Put $r := \min\{\delta, 1/B\} > 0$; by step 2.2 there is $x \in E$ with $|x - x_0| < r$, and then $0 < |x - x_0| < 1/B$ gives $|h(x)| = 1/|x - x_0| > B$ by [L6], while $x \in \overline{E}$ with $|x - x_0| < \delta$ gives $|h(x)| = |H(x)| < B$. That is impossible, so $h$ is not uniformly continuous on $E$. [step 2.2, step 3.1, L6, L7, L8]

5.1 The two cases of step 1.1 are exhaustive, and in each of them claims 1 and 2 have been established by exhibiting the functions named, while claim 3, whose hypothesis places $E$ in the second case, is step 4.1. [step 1.2, step 1.3, step 2.1, step 3.1, step 3.2, step 4.1, discharge-construct: the four witnesses x and -1/(1+x^2) and 1/(x-x_0) and -|x-x_0|] ∎

## Remarks

- **The bounded non-closed case is where all three failures happen at once.** There $x_0 \in \overline{E} \setminus E$ is a hole in the domain, and $1/(x-x_0)$ blows up at it: it is unbounded, it is not uniformly continuous, and $-|x-x_0|$ approaches its supremum $0$ without reaching it. The unbounded case needs a different witness for claim 2, because $-|x - x_0|$ need not be bounded there, and $-1/(1+x^{2})$ is the standard substitute.

- **Claim 3 is proved through the extension theorem rather than through sequences.** The textbook route takes a sequence in $E$ converging to $x_0$, notes that it is Cauchy, and observes that a uniformly continuous function must carry it to a Cauchy, hence bounded, sequence. Producing that sequence from adherence spends countable choice ([[lem-sequential-characterisation-of-closure-r]]). The argument above spends none: [[cor-continuous-extension-from-a-dense-subset-r]] constructs the extension without selecting anything, and the contradiction is then a single $\varepsilon$-$\delta$ estimate at the point $x_0$.

- **What "not attained" means here, precisely.** The supremum of $g[E]$ exists as a real number and equals $0$, and no point of $E$ has $g$-value $0$. That is stronger than saying $g$ has no maximum: it identifies the value the function fails to reach. The companion page works both witnesses out concretely in [[cex-evt-fails-on-the-open-interval-and-on-the-half-line]].
````

### `thm-heine-cantor-metric`

````markdown
---
id: thm-heine-cantor-metric
kind: theorem
title: "Heine-Cantor: a continuous map from a compact metric space to any metric space is uniformly continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, thm-lebesgue-number-lemma, def-metric-continuity, def-metric-uniform-continuity, def-metric-ball, def-metric-bounded-diameter, def-metric-topology, thm-metric-open-set-algebra, lem-metric-nonnegativity, def-metric-space]
justified_by: []
forward_refs: [cex-heine-cantor-fails-without-compactness]
aliases: [thm-heine-cantor]
landmark: true
short: "Heine-Cantor (metric)"
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
    - title: "Heine-Cantor theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem"
    - title: "Lebesgue's number lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lebesgue%27s_number_lemma"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ be a compact metric space ([[def-metric-compactness]]), let
$(Y,d_Y)$ be any metric space ([[def-metric-space]]) and let $f : X \to Y$ be
continuous ([[def-metric-continuity]]). Then $f$ is uniformly continuous
([[def-metric-uniform-continuity]]).

No choice principle is used: the cover built below is cut out by a property, and
the Lebesgue number lemma it is fed to is itself choice free
([[thm-lebesgue-number-lemma]]).

## Facts & Assumptions

**Given:** A compact metric space $(X,d_X)$, a metric space $(Y,d_Y)$ and a continuous $f : X \to Y$.

[L1] $f$ is continuous at $a$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $f[B_X(a,\delta)] \subseteq B_Y(f(a),\varepsilon)$ ([[def-metric-continuity]], [[def-metric-ball]]).

[L2] $f$ is uniformly continuous when for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that $d_X(x,x') < \delta$ implies $d_Y(f(x),f(x')) < \varepsilon$, for all $x,x' \in X$ ([[def-metric-uniform-continuity]]).

[L3] Every open cover of a compact metric space has a Lebesgue number: a real $\delta > 0$ such that every nonempty subset of diameter less than $\delta$ lies in a single member of the cover ([[thm-lebesgue-number-lemma]], [[def-metric-compactness]]).

[L4] Open balls are open ([[thm-metric-open-set-algebra]], [[def-metric-topology]]).

[L5] For nonempty bounded $A$, $\operatorname{diam}(A) = \sup\{d_X(u,v) : u,v \in A\}$; in particular $\operatorname{diam}(\{x,x'\}) = d_X(x,x')$, the set of distances being $\{0, d_X(x,x')\}$ and a metric being nonnegative ([[def-metric-bounded-diameter]], [[lem-metric-nonnegativity]]).

[L6] A metric is symmetric and satisfies the triangle inequality ([[def-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 If $X = \emptyset$ the condition of uniform continuity holds vacuously, so assume $X \ne \emptyset$, and let $\varepsilon > 0$ be real. [L2]

2.1 Put $\mathcal{U} := \{\, U \subseteq X : U \text{ is open in } X \text{ and } f[U] \subseteq B_Y(z, \varepsilon/2) \text{ for some } z \in Y \,\}$, a family cut out by a property and not by a selection. [L1, step 1.1]

3.1 $\mathcal{U}$ is an open cover of $X$: given $x \in X$, continuity at $x$ supplies a real $\delta_x > 0$ with $f[B_X(x,\delta_x)] \subseteq B_Y(f(x), \varepsilon/2)$, and $B_X(x,\delta_x)$ is open and contains $x$, so it belongs to $\mathcal{U}$. [L1, L4, step 2.1]

4.1 By the Lebesgue number lemma there is a real $\delta > 0$ such that every nonempty subset of $X$ of diameter less than $\delta$ is contained in a single member of $\mathcal{U}$. [L3, step 3.1]

5.1 Let $x, x' \in X$ with $d_X(x,x') < \delta$; the set $\{x,x'\}$ is nonempty with diameter $d_X(x,x') < \delta$, so $\{x,x'\} \subseteq U$ for some $U \in \mathcal{U}$, and there is $z \in Y$ with $f[U] \subseteq B_Y(z,\varepsilon/2)$. [L5, step 2.1, step 4.1]

6.1 Then $d_Y(f(x),z) < \varepsilon/2$ and $d_Y(z,f(x')) < \varepsilon/2$, so $d_Y(f(x),f(x')) \le d_Y(f(x),z) + d_Y(z,f(x')) < \varepsilon$; as $\varepsilon > 0$ was arbitrary, $f$ is uniformly continuous. [L2, L6, step 5.1] ∎

## Remarks

**The centre $z$ is not chosen, and that is why the proof is choice free.** The family $\mathcal{U}$ is defined by the *existence* of a suitable $z$, and the argument instantiates that existential once, at step 5.1, for the single member $U$ that the Lebesgue number produced. No function assigning a centre to every member of $\mathcal{U}$ is ever needed.

**Compactness is not removable.** The map $x \mapsto 1/x$ is continuous on the interval $(0,1)$ and is not uniformly continuous there ([[cex-heine-cantor-fails-without-compactness]]); $(0,1)$ is not compact.

**The codomain is arbitrary.** Nothing is assumed about $(Y,d_Y)$ — not completeness, not boundedness, not compactness. All the work is done on the domain side, which is where the finite subcover lives.
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

### `thm-sequential-criterion-for-continuity`

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


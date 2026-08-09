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

## Wave 9 target — `thm-monotone-with-prescribed-discontinuity-set`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `2494cc703882cafcc1b51428c61fe6d6a8ba97e3ea863d7473f07306407bfa0e`

## Complete current target

````markdown
---
id: thm-monotone-with-prescribed-discontinuity-set
kind: theorem
title: "Converse to Froda: for every at most countable $E \\subseteq \\mathbb{R}$ there is a bounded nondecreasing $f : \\mathbb{R} \\to \\mathbb{R}$ whose set of discontinuities is exactly $E$, every one of them a jump"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
  evidence: semantic-source
deps: [def-monotone-function, def-classification-of-discontinuities, thm-monotone-one-sided-limits-exist, thm-monotone-discontinuities-are-jumps, thm-froda, def-countable, lem-countable-iff-surjection-from-n, def-series, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, lem-series-tail-invariance, def-finite-sum, lem-finite-sum-laws, def-continuity-real, def-bounded-set, def-integer-power, def-real-limit, lem-finite-set-has-max, lem-rat-embeds-dense, def-interval, def-max-min]
justified_by: []
aliases: [thm-prescribed-jump-construction]
landmark: true
short: "every countable set is a discontinuity set"
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
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Froda's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Froda%27s_theorem"
    - title: "Discontinuities of monotone functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions"
pipeline_run: null
---

## Statement

Let $E \subseteq \mathbb{R}$ be at most countable ([[def-countable]]). Then
there is a function $f : \mathbb{R} \to \mathbb{R}$ such that

1. $f$ is nondecreasing ([[def-monotone-function]]) and $0 \le f(x) \le 1$ for
   every real $x$, so $f$ is bounded ([[def-bounded-set]]);
2. $f$ is continuous at every $x \notin E$ and discontinuous at every $x \in E$
   ([[def-continuity-real]]), so the discontinuity set of $f$ is exactly $E$;
3. every discontinuity of $f$ is a **jump**
   ([[def-classification-of-discontinuities]]), with
   $\lim_{x \to c^{-}} f(x) = f(c) < \lim_{x \to c^{+}} f(x)$ at every $c \in E$.

Together with [[thm-froda]] this settles the question completely: the sets that
occur as discontinuity sets of monotone functions on $\mathbb{R}$ are **exactly**
the at most countable ones.

**The construction.** For $E = \varnothing$ take $f := 0$. Otherwise fix a
surjection $s : \mathbb{N} \to E$ ([[lem-countable-iff-surjection-from-n]]) and
set

$$f(x) \;:=\; \sum_{k=0}^{\infty} a_{k}(x), \qquad a_{k}(x) := \begin{cases} 1/2^{\,k+1} & \text{if } s(k) < x,\\ 0 & \text{otherwise,}\end{cases}$$

([[def-series]], [[def-integer-power]]): the mass $1/2^{\,k+1}$ is placed at the
point $s(k)$ and is collected by $f$ strictly to the right of it. Repetitions in
the enumeration are harmless; they only make the jump at a point larger.

## Facts & Assumptions

**Given:** An at most countable $E \subseteq \mathbb{R}$.

[L1] A nonempty at most countable set is the image of a surjection $s : \mathbb{N} \to E$ ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L2] A series of nonnegative terms converges if and only if its partial sums are bounded above, and its sum is then the supremum of its partial sums; in particular every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[def-bounded-set]]).

[L3] Finite sums: $\sum_{k<n}$ is monotone in the terms, splits as $\sum_{k<n} = \sum_{k<m} + \sum_{k=m}^{n-1}$ for $m \le n$, scales, and telescopes as $\sum_{k<n}(c_{k+1} - c_{k}) = c_{n} - c_{0}$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L4] $\sum_{k \ge 0} r^{k}$ converges to $1/(1-r)$ for $|r| < 1$, the first term being $r^{0} = 1$ ([[thm-geometric-series]], [[def-integer-power]]); a series converges if and only if each of its tails does, and $\sum_{k \ge 0} u_{k} = \sum_{k<N} u_{k} + \sum_{k \ge N} u_{k}$ ([[lem-series-tail-invariance]]); a convergent sequence of reals comes within every positive $\varepsilon$ of its limit from some index on ([[def-real-limit]]).

[L5] A nonempty finite set of reals, presented as $\{c_{0}, \dots, c_{m}\}$, has a maximum and a minimum ([[lem-finite-set-has-max]], [[def-max-min]]); and strictly between any two distinct reals there lies a real ([[lem-rat-embeds-dense]]).

[L6] A nondecreasing function on an order-convex set has both one-sided limits at every interior point, and is discontinuous there exactly when they differ, in which case the discontinuity is a jump ([[thm-monotone-one-sided-limits-exist]], [[thm-monotone-discontinuities-are-jumps]], [[def-classification-of-discontinuities]], [[def-interval]]).

## Proof

**Proof technique:** constructive.

1.1 If $E = \varnothing$, the constant function $0$ is nondecreasing, takes values in $[0,1]$, is continuous at every real, and has empty discontinuity set; all three claims hold vacuously for claim 3. Assume from here on that $E \ne \varnothing$ and fix a surjection $s : \mathbb{N} \to E$. [L1, construct]

1.2 For every $n \in \mathbb{N}$, $\sum_{k<n} 1/2^{\,k+1} = 1 - 1/2^{\,n}$: each term is $1/2^{\,k+1} = 1/2^{\,k} - 1/2^{\,k+1}$, so the sum telescopes to $1/2^{\,0} - 1/2^{\,n} = 1 - 1/2^{\,n}$. [L3]

2.1 Define $a_{k}(x) := 1/2^{\,k+1}$ when $s(k) < x$ and $a_{k}(x) := 0$ otherwise, and note $0 \le a_{k}(x) \le 1/2^{\,k+1}$ for every $k$ and every real $x$. [step 1.1, construct]

2.2 For every real $\varepsilon > 0$ there is $n \in \mathbb{N}$ with $1/2^{\,n} < \varepsilon$: the partial sums $t_{n} := \sum_{k<n} 1/2^{\,k}$ converge to $2$, and $t_{n} = 2 - 2/2^{\,n}$ by the same telescoping as in step 1.2, so $|t_{n} - 2| = 2/2^{\,n} < \varepsilon$ for all large $n$, whence $1/2^{\,n} < \varepsilon/2 < \varepsilon$ for those $n$. Consequently the partial sums $1 - 1/2^{\,n}$ of $\sum_{k} 1/2^{\,k+1}$ have supremum $1$, so that series converges with sum $1$. [step 1.2, L2, L3, L4]

3.1 For every real $x$ the series $\sum_{k} a_{k}(x)$ converges and $0 \le f(x) \le 1$: its terms are nonnegative and its partial sums satisfy $\sum_{k<n} a_{k}(x) \le \sum_{k<n} 1/2^{\,k+1} = 1 - 1/2^{\,n} \le 1$, so they are bounded above by $1$ and the sum, being their supremum, lies in $[0,1]$. [step 2.1, step 1.2, L2, L3]

3.2 Left continuity holds at **every** real $c$: given real $\varepsilon > 0$ take $n$ with $1/2^{\,n} < \varepsilon$; let $F := \{\, k < n : s(k) < c \,\}$; if $F = \varnothing$ put $x_{0} := c - 1$, and otherwise put $x_{0}$ to be a real with $\max\{s(k) : k \in F\} < x_{0} < c$, which exists because the maximum of the nonempty finite set $\{s(k) : k \in F\}$ is a real strictly below $c$. [step 2.2, L5]

3.3 Right continuity holds at every $c \notin E$: given real $\varepsilon > 0$ take $n$ with $1/2^{\,n} < \varepsilon$; since $c \notin E$ and $s$ has image $E$, no $k$ has $s(k) = c$, so every $k < n$ has $s(k) < c$ or $s(k) > c$. Let $G := \{\, k < n : s(k) > c \,\}$; if $G = \varnothing$ put $y_{0} := c + 1$, and otherwise put $y_{0}$ to be a real with $c < y_{0} < \min\{s(k) : k \in G\}$. [step 1.1, step 2.2, L5]

4.1 $f$ is nondecreasing: if $x \le y$ then $s(k) < x$ implies $s(k) < y$, so $a_{k}(x) \le a_{k}(y)$ for every $k$, hence $\sum_{k<n} a_{k}(x) \le \sum_{k<n} a_{k}(y)$ for every $n$, and taking suprema gives $f(x) \le f(y)$. [step 2.1, step 3.1, L2, L3]

4.2 For all reals $x \le y$ and every $n \in \mathbb{N}$ with $a_{k}(x) = a_{k}(y)$ for every $k < n$, one has $f(y) - f(x) \le 1/2^{\,n}$: for $N \ge n$ the splitting $\sum_{k<N} a_{k}(y) = \sum_{k<n} a_{k}(y) + \sum_{k=n}^{N-1} a_{k}(y) \le \sum_{k<n} a_{k}(x) + \sum_{k=n}^{N-1} 1/2^{\,k+1}$ holds, the last sum being at most $\sum_{k \ge n} 1/2^{\,k+1} = 1 - (1 - 1/2^{\,n}) = 1/2^{\,n}$; so every partial sum of $\sum_{k} a_{k}(y)$ is at most $f(x) + 1/2^{\,n}$, and so is their supremum $f(y)$. [step 2.1, step 1.2, step 3.1, L2, L3, L4]

4.3 Let $c \in E$ and fix $k_{0}$ with $s(k_{0}) = c$. For every $y > c$ and every $N > k_{0}$ the finite sum $\sum_{k<N} a_{k}(y)$ exceeds $\sum_{k<N} a_{k}(c)$ by at least $1/2^{\,k_{0}+1}$, because the list $k \mapsto a_{k}(y) - a_{k}(c)$ has nonnegative entries, so the finite sum of its first $N$ entries is at least its entry at the index $k_{0}$, which is $a_{k_{0}}(y) - a_{k_{0}}(c) = 1/2^{\,k_{0}+1} - 0$. Hence $f(y) - 1/2^{\,k_{0}+1} \ge \sum_{k<N} a_{k}(c)$ for every $N$, the case $N \le k_{0}$ holding because the partial sums of a nonnegative series are nondecreasing; so $f(y) - 1/2^{\,k_{0}+1}$ is an upper bound of those partial sums and therefore at least their supremum $f(c)$. [step 1.1, step 2.1, step 3.1, L2, L3]

5.1 With $x_{0}$ as in step 3.2 and any $x$ with $x_{0} < x \le c$: for $k < n$ with $s(k) < c$ we have $s(k) \le \max\{s(j) : j \in F\} < x_{0} < x$, so $a_{k}(x) = 1/2^{\,k+1} = a_{k}(c)$; and for $k < n$ with $s(k) \ge c \ge x$ we have $a_{k}(x) = 0 = a_{k}(c)$. So $a_{k}(x) = a_{k}(c)$ for every $k < n$, and step 4.2 applied to the pair $x \le c$ gives $0 \le f(c) - f(x) \le 1/2^{\,n} < \varepsilon$. [step 2.1, step 4.1, step 4.2, step 3.2]

5.2 With $y_{0}$ as in step 3.3 and any $y$ with $c \le y < y_{0}$: for $k < n$ with $s(k) < c \le y$ we get $a_{k}(y) = 1/2^{\,k+1} = a_{k}(c)$, and for $k < n$ with $s(k) > c$ we have $s(k) \ge \min\{s(j) : j \in G\} > y_{0} > y$, so $a_{k}(y) = 0 = a_{k}(c)$. So $a_{k}(y) = a_{k}(c)$ for every $k < n$, and step 4.2 applied to the pair $c \le y$ gives $0 \le f(y) - f(c) \le 1/2^{\,n} < \varepsilon$. [step 2.1, step 4.1, step 4.2, step 3.3]

5.3 So $f$ is discontinuous at $c$: for $\varepsilon := 1/2^{\,k_{0}+1} > 0$ and any real $\delta > 0$ the point $y := c + \delta/2$ satisfies $|y - c| < \delta$ and $|f(y) - f(c)| \ge \varepsilon$, so no $\delta$ witnesses the continuity condition at $c$. [step 4.3]

6.1 Hence $f$ is continuous at every $c \notin E$: fix a real $\varepsilon > 0$, take $x_{0}$ as in step 3.2 and $y_{0}$ as in step 3.3 for that same $\varepsilon$, and put $\delta := \min\{c - x_{0}, y_{0} - c\} > 0$; then every real $x$ with $|x - c| < \delta$ satisfies $x_{0} < x < y_{0}$ and therefore $|f(x) - f(c)| < \varepsilon$, by step 5.1 when $x \le c$ and by step 5.2 when $x \ge c$. [step 5.1, step 5.2, L5]

6.2 Every point of $E$ is an interior point of the order-convex set $\mathbb{R}$, so both one-sided limits of $f$ exist there; step 5.1 gives $\lim_{x \to c^{-}} f(x) = f(c)$ and step 4.3 gives $\lim_{x \to c^{+}} f(x) \ge f(c) + 1/2^{\,k_{0}+1} > f(c)$. The two one-sided limits therefore differ, and the discontinuity at $c$ is a jump. [step 5.1, step 4.3, step 5.3, L6]

7.1 Claims 1, 2 and 3 hold for the function $f$ constructed in steps 1.1 and 2.1: claim 1 by steps 3.1 and 4.1, claim 2 by steps 6.1 and 5.3, and claim 3 by step 6.2. [step 3.1, step 4.1, step 6.1, step 5.3, step 6.2, discharge-construct] ∎

## Remarks

- **Why the mass is collected strictly to the right.** The definition uses $s(k) < x$ rather than $s(k) \le x$, and that is what makes $f$ left continuous everywhere, as steps 3.2 and 5.1 show without any hypothesis on $c$. The value $f(c)$ at a point of $E$ is therefore the **left** limit, and the whole jump sits on the right. Using $s(k) \le x$ would produce a right continuous function with the same discontinuity set; nothing else would change.

- **Repetitions in the enumeration are harmless.** If $s$ takes the value $c$ at several indices, the jump at $c$ is the total mass $\sum \{1/2^{\,k+1} : s(k) = c\}$ rather than a single term. Step 4.3 uses only one index $k_{0}$ and so needs no such sum; it establishes a lower bound for the jump, which is all that discontinuity requires.

- **Boundedness is free, and it is worth recording.** The total mass available is $\sum_{k \ge 0} 1/2^{\,k+1} = 1$, so $f$ maps $\mathbb{R}$ into $[0,1]$ however large $E$ is. A bounded nondecreasing function on $\mathbb{R}$ can therefore have a dense set of discontinuities; the companion page takes $E = \mathbb{Q}$ and gets exactly that.
````

## Current Wave 9 provenance determination

```json
{
  "id": "thm-monotone-with-prescribed-discontinuity-set",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions"
  ],
  "rationale": "The jump-functions section constructs a nondecreasing sum of summable step functions with discontinuities at a prescribed countable set. The item extends the presentation to every at-most-countable subset of R and fixes explicit weights and empty/finite cases.",
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
      "source": "lem-countable-iff-surjection-from-n",
      "source_section": "Statement",
      "quote": "Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if\nand only if there is a surjection $s : \\mathbb{N} \\to A$\n([[def-injection-surjection-bijection]]).",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "- $A$ is **finite** if $A \\approx n$ for some $n \\in \\mathbb{N}$.\n- $A$ is **countably infinite** if $A \\approx \\mathbb{N}$.\n- $A$ is **at most countable** if it is finite or countably infinite.\n- $A$ is **uncountable** if it is not at most countable.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \\ge 0$ for every\n   $n$;\n2. $\\sum a_k$ converges **if and only if** $S$ is bounded above\n   ([[def-bounded-set]]), and in that case\n   $$\\sum_{k=0}^{\\infty} a_k \\;=\\; \\sup S ,$$\n   so in particular $s_n \\le \\sum_{k=0}^{\\infty} a_k$ for every $n$;\n3. if $S$ is not bounded above then $s_n \\to +\\infty$\n   ([[def-divergence-to-infinity]]) and $\\sum a_k$ diverges.",
      "uses": [
        "2.2",
        "3.1",
        "4.1",
        "4.2",
        "4.3"
      ]
    },
    {
      "fact": "L2",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "**Convergence, the sum, divergence.** The **series** of $(a_k)$, written\n$\\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges\n([[def-real-limit]]), and then the **sum of the series** is",
      "uses": [
        "2.2",
        "3.1",
        "4.1",
        "4.2",
        "4.3"
      ]
    },
    {
      "fact": "L2",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "The notions **upper bound** and **bounded above** are already fixed by\n[[def-complete-ordered-field]] and are only recalled here, never redefined:\n$u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and\n$S$ is *bounded above* if it has at least one upper bound. The dual notions are:",
      "uses": [
        "2.2",
        "3.1",
        "4.1",
        "4.2",
        "4.3"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let\n$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and\nfinite products as in [[def-finite-sum]]. Then:",
      "uses": [
        "1.2",
        "2.2",
        "3.1",
        "4.1",
        "4.2",
        "4.3"
      ]
    },
    {
      "fact": "L3",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Let $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for\n$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the\nupper index**, which is legitimate because of the recursion theorem\n([[thm-recursion]]). That theorem produces a function of one variable, so the\nrunning index has to be carried along inside the value: applying it to the set\n$A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function\n$f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique\n$g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with",
      "uses": [
        "1.2",
        "2.2",
        "3.1",
        "4.1",
        "4.2",
        "4.3"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-geometric-series",
      "source_section": "Statement",
      "quote": "The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular\n$\\sum_{k=0}^{\\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to\n$1$. Which starting index is meant has to be said, and it is said here.",
      "uses": [
        "2.2",
        "4.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "**Integer exponents.** Every integer $m$ ([[def-integers]]) is either\n$\\iota(n)$ or $-\\iota(n)$ for a unique natural $n$, where $\\iota$ is the\nembedding $\\mathbb{N} \\to \\mathbb{Z}$ ([[lem-nat-embeds-int]],\n[[def-int-operations]]). This too is a citation and not a slogan: the order on\n$\\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \\ge 0$ or $m < 0$; the\nimage of $\\iota$ is exactly the set of nonnegative integers, and each of them is\n$\\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then\n$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),\nso $-m = \\iota(n)$ and $m = -\\iota(n)$, with $n$ unique because $\\iota$ is\ninjective. The two clauses above therefore define $a^m$ for every\n$m \\in \\mathbb{Z}$ whenever $a \\ne 0$, and for every $m \\in \\mathbb{N}$ for\narbitrary $a$. The clauses are consistent where they overlap: the only overlap is\n$m = 0$, where $-\\iota(0) = \\iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.",
      "uses": [
        "2.2",
        "4.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-series-tail-invariance",
      "source_section": "Statement",
      "quote": "1. $t_j = s_{j+N} - s_N$ for every $j \\in \\mathbb{N}$;\n2. $\\sum a_k$ converges **if and only if** its $N$-th tail series converges, and\n   in that case\n   $$\\sum_{k=0}^{\\infty} a_k \\;=\\; s_N \\;+\\; \\sum_{k=N}^{\\infty} a_k ;$$\n3. hence the following are equivalent: $\\sum a_k$ converges; every tail series of\n   $\\sum a_k$ converges; some tail series of $\\sum a_k$ converges.",
      "uses": [
        "2.2",
        "4.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "uses": [
        "2.2",
        "4.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "The usual reading, that *every nonempty finite subset of $\\mathbb{R}$ has a\nmaximum and a minimum*, follows once one identifies the nonempty finite subsets\nof $\\mathbb{R}$ with the sets listable as $\\{a_0, \\dots, a_n\\}$. That\nidentification is recorded as a stipulation in the Given below, because this page\nhas no definition of finiteness to prove it against. **It is discharged, not\nmerely assumed**: [[lem-finite-subsets-listable]] proves that the two\ndescriptions of a nonempty finite subset of $\\mathbb{R}$ agree. That lemma is\nrecorded in `justified_by` rather than in `deps`, since it is about the sets this\nlemma quantifies over and therefore depends on this one. This is what licenses\nthe notation\n$\\max\\{a_1, \\dots, a_n\\}$ and $\\min\\{a_1, \\dots, a_n\\}$ for finite sets of\n**real** numbers from this page onwards.",
      "uses": [
        "3.2",
        "3.3",
        "6.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.",
      "uses": [
        "3.2",
        "3.3",
        "6.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "3.2",
        "3.3",
        "6.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-monotone-one-sided-limits-exist",
      "source_section": "Statement",
      "quote": "In particular a nondecreasing function on an interval has, at every point of\nthat interval, every one-sided limit that is well posed at all: no hypothesis of\ncontinuity, of boundedness, or of any other kind is needed.",
      "uses": [
        "6.2"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-monotone-discontinuities-are-jumps",
      "source_section": "Statement",
      "quote": "1. At every $c \\in I$, each of the two one-sided limits that is well posed\n   exists ([[def-one-sided-limits]]). Consequently $f$ has **no discontinuity of\n   the second kind** ([[def-classification-of-discontinuities]]): every\n   discontinuity of $f$ is of the first kind.\n2. Call $c \\in I$ an **interior point of $I$** when both $I^{-}$ and $I^{+}$ are\n   nonempty. At such a point\n   $$\\lim_{x \\to c^{-}} f(x) \\;\\le\\; f(c) \\;\\le\\; \\lim_{x \\to c^{+}} f(x),$$\n   and $f$ is continuous at $c$ ([[def-continuity-real]]) **if and only if**\n   $\\lim_{x \\to c^{-}} f(x) = \\lim_{x \\to c^{+}} f(x)$.\n3. Hence an interior point $c$ is a discontinuity of $f$ exactly when\n   $$\\lim_{x \\to c^{-}} f(x) \\;<\\; \\lim_{x \\to c^{+}} f(x),$$\n   and every such discontinuity is a **jump**, of jump\n   $\\lim_{x \\to c^{+}} f(x) - \\lim_{x \\to c^{-}} f(x) > 0$.",
      "uses": [
        "6.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-classification-of-discontinuities",
      "source_section": "Definition",
      "quote": "If $c$ is a limit point of exactly one of $A^{-}$ and $A^{+}$, only that side is\ndefined and only that side is used: $c$ is a discontinuity **of the first kind**\nwhen the one-sided limit on the side in question exists, and **of the second\nkind** otherwise. When it exists it is different from $f(c)$, since on such a\npoint the one-sided condition and the continuity condition are the same\ncondition; and there is no jump case, there being nothing to compare the value\nwith. The endpoints of an interval are the typical instance.",
      "uses": [
        "6.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.",
      "uses": [
        "6.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-1-1",
      "claim": "If $E = \\varnothing$, the constant function $0$ is nondecreasing, takes values in $[0,1]$, is continuous at every real, and has empty discontinuity set; all three claims hold vacuously for claim 3. Assume from here on that $E \\ne \\varnothing$ and fix a surjection $s : \\mathbb{N} \\to E$. [L1, construct]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-1-2",
      "claim": "For every $n \\in \\mathbb{N}$, $\\sum_{k<n} 1/2^{\\,k+1} = 1 - 1/2^{\\,n}$: each term is $1/2^{\\,k+1} = 1/2^{\\,k} - 1/2^{\\,k+1}$, so the sum telescopes to $1/2^{\\,0} - 1/2^{\\,n} = 1 - 1/2^{\\,n}$. [L3]",
      "step": "1.2",
      "inputs": [
        "L3"
      ]
    },
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-2-1",
      "claim": "Define $a_{k}(x) := 1/2^{\\,k+1}$ when $s(k) < x$ and $a_{k}(x) := 0$ otherwise, and note $0 \\le a_{k}(x) \\le 1/2^{\\,k+1}$ for every $k$ and every real $x$. [step 1.1, construct]",
      "step": "2.1",
      "inputs": [
        "1.1"
      ]
    },
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-2-2",
      "claim": "For every real $\\varepsilon > 0$ there is $n \\in \\mathbb{N}$ with $1/2^{\\,n} < \\varepsilon$: the partial sums $t_{n} := \\sum_{k<n} 1/2^{\\,k}$ converge to $2$, and $t_{n} = 2 - 2/2^{\\,n}$ by the same telescoping as in step 1.2, so $|t_{n} - 2| = 2/2^{\\,n} < \\varepsilon$ for all large $n$, whence $1/2^{\\,n} < \\varepsilon/2 < \\varepsilon$ for those $n$. Consequently the partial sums $1 - 1/2^{\\,n}$ of $\\sum_{k} 1/2^{\\,k+1}$ have supremum $1$, so that series converges with sum $1$. [step 1.2, L2, L3, L4]",
      "step": "2.2",
      "inputs": [
        "1.2",
        "L2",
        "L3",
        "L4"
      ]
    },
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-3-1",
      "claim": "For every real $x$ the series $\\sum_{k} a_{k}(x)$ converges and $0 \\le f(x) \\le 1$: its terms are nonnegative and its partial sums satisfy $\\sum_{k<n} a_{k}(x) \\le \\sum_{k<n} 1/2^{\\,k+1} = 1 - 1/2^{\\,n} \\le 1$, so they are bounded above by $1$ and the sum, being their supremum, lies in $[0,1]$. [step 2.1, step 1.2, L2, L3]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "1.2",
        "L2",
        "L3"
      ]
    },
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-3-2",
      "claim": "Left continuity holds at **every** real $c$: given real $\\varepsilon > 0$ take $n$ with $1/2^{\\,n} < \\varepsilon$; let $F := \\{\\, k < n : s(k) < c \\,\\}$; if $F = \\varnothing$ put $x_{0} := c - 1$, and otherwise put $x_{0}$ to be a real with $\\max\\{s(k) : k \\in F\\} < x_{0} < c$, which exists because the maximum of the nonempty finite set $\\{s(k) : k \\in F\\}$ is a real strictly below $c$. [step 2.2, L5]",
      "step": "3.2",
      "inputs": [
        "2.2",
        "L5"
      ]
    },
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-3-3",
      "claim": "Right continuity holds at every $c \\notin E$: given real $\\varepsilon > 0$ take $n$ with $1/2^{\\,n} < \\varepsilon$; since $c \\notin E$ and $s$ has image $E$, no $k$ has $s(k) = c$, so every $k < n$ has $s(k) < c$ or $s(k) > c$. Let $G := \\{\\, k < n : s(k) > c \\,\\}$; if $G = \\varnothing$ put $y_{0} := c + 1$, and otherwise put $y_{0}$ to be a real with $c < y_{0} < \\min\\{s(k) : k \\in G\\}$. [step 1.1, step 2.2, L5]",
      "step": "3.3",
      "inputs": [
        "1.1",
        "2.2",
        "L5"
      ]
    },
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-4-1",
      "claim": "$f$ is nondecreasing: if $x \\le y$ then $s(k) < x$ implies $s(k) < y$, so $a_{k}(x) \\le a_{k}(y)$ for every $k$, hence $\\sum_{k<n} a_{k}(x) \\le \\sum_{k<n} a_{k}(y)$ for every $n$, and taking suprema gives $f(x) \\le f(y)$. [step 2.1, step 3.1, L2, L3]",
      "step": "4.1",
      "inputs": [
        "2.1",
        "3.1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-4-2",
      "claim": "For all reals $x \\le y$ and every $n \\in \\mathbb{N}$ with $a_{k}(x) = a_{k}(y)$ for every $k < n$, one has $f(y) - f(x) \\le 1/2^{\\,n}$: for $N \\ge n$ the splitting $\\sum_{k<N} a_{k}(y) = \\sum_{k<n} a_{k}(y) + \\sum_{k=n}^{N-1} a_{k}(y) \\le \\sum_{k<n} a_{k}(x) + \\sum_{k=n}^{N-1} 1/2^{\\,k+1}$ holds, the last sum being at most $\\sum_{k \\ge n} 1/2^{\\,k+1} = 1 - (1 - 1/2^{\\,n}) = 1/2^{\\,n}$; so every partial sum of $\\sum_{k} a_{k}(y)$ is at most $f(x) + 1/2^{\\,n}$, and so is their supremum $f(y)$. [step 2.1, step 1.2, step 3.1, L2, L3, L4]",
      "step": "4.2",
      "inputs": [
        "2.1",
        "1.2",
        "3.1",
        "L2",
        "L3",
        "L4"
      ]
    },
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-4-3",
      "claim": "Let $c \\in E$ and fix $k_{0}$ with $s(k_{0}) = c$. For every $y > c$ and every $N > k_{0}$ the finite sum $\\sum_{k<N} a_{k}(y)$ exceeds $\\sum_{k<N} a_{k}(c)$ by at least $1/2^{\\,k_{0}+1}$, because the list $k \\mapsto a_{k}(y) - a_{k}(c)$ has nonnegative entries, so the finite sum of its first $N$ entries is at least its entry at the index $k_{0}$, which is $a_{k_{0}}(y) - a_{k_{0}}(c) = 1/2^{\\,k_{0}+1} - 0$. Hence $f(y) - 1/2^{\\,k_{0}+1} \\ge \\sum_{k<N} a_{k}(c)$ for every $N$, the case $N \\le k_{0}$ holding because the partial sums of a nonnegative series are nondecreasing; so $f(y) - 1/2^{\\,k_{0}+1}$ is an upper bound of those partial sums and therefore at least their supremum $f(c)$. [step 1.1, step 2.1, step 3.1, L2, L3]",
      "step": "4.3",
      "inputs": [
        "1.1",
        "2.1",
        "3.1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-5-1",
      "claim": "With $x_{0}$ as in step 3.2 and any $x$ with $x_{0} < x \\le c$: for $k < n$ with $s(k) < c$ we have $s(k) \\le \\max\\{s(j) : j \\in F\\} < x_{0} < x$, so $a_{k}(x) = 1/2^{\\,k+1} = a_{k}(c)$; and for $k < n$ with $s(k) \\ge c \\ge x$ we have $a_{k}(x) = 0 = a_{k}(c)$. So $a_{k}(x) = a_{k}(c)$ for every $k < n$, and step 4.2 applied to the pair $x \\le c$ gives $0 \\le f(c) - f(x) \\le 1/2^{\\,n} < \\varepsilon$. [step 2.1, step 4.1, step 4.2, step 3.2]",
      "step": "5.1",
      "inputs": [
        "3.2",
        "4.2",
        "2.1",
        "4.1"
      ]
    },
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-5-2",
      "claim": "With $y_{0}$ as in step 3.3 and any $y$ with $c \\le y < y_{0}$: for $k < n$ with $s(k) < c \\le y$ we get $a_{k}(y) = 1/2^{\\,k+1} = a_{k}(c)$, and for $k < n$ with $s(k) > c$ we have $s(k) \\ge \\min\\{s(j) : j \\in G\\} > y_{0} > y$, so $a_{k}(y) = 0 = a_{k}(c)$. So $a_{k}(y) = a_{k}(c)$ for every $k < n$, and step 4.2 applied to the pair $c \\le y$ gives $0 \\le f(y) - f(c) \\le 1/2^{\\,n} < \\varepsilon$. [step 2.1, step 4.1, step 4.2, step 3.3]",
      "step": "5.2",
      "inputs": [
        "3.3",
        "4.2",
        "2.1",
        "4.1"
      ]
    },
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-5-3",
      "claim": "So $f$ is discontinuous at $c$: for $\\varepsilon := 1/2^{\\,k_{0}+1} > 0$ and any real $\\delta > 0$ the point $y := c + \\delta/2$ satisfies $|y - c| < \\delta$ and $|f(y) - f(c)| \\ge \\varepsilon$, so no $\\delta$ witnesses the continuity condition at $c$. [step 4.3]",
      "step": "5.3",
      "inputs": [
        "4.3"
      ]
    },
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-6-1",
      "claim": "Hence $f$ is continuous at every $c \\notin E$: fix a real $\\varepsilon > 0$, take $x_{0}$ as in step 3.2 and $y_{0}$ as in step 3.3 for that same $\\varepsilon$, and put $\\delta := \\min\\{c - x_{0}, y_{0} - c\\} > 0$; then every real $x$ with $|x - c| < \\delta$ satisfies $x_{0} < x < y_{0}$ and therefore $|f(x) - f(c)| < \\varepsilon$, by step 5.1 when $x \\le c$ and by step 5.2 when $x \\ge c$. [step 5.1, step 5.2, L5]",
      "step": "6.1",
      "inputs": [
        "3.2",
        "3.3",
        "5.1",
        "5.2",
        "L5"
      ]
    },
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-6-2",
      "claim": "Every point of $E$ is an interior point of the order-convex set $\\mathbb{R}$, so both one-sided limits of $f$ exist there; step 5.1 gives $\\lim_{x \\to c^{-}} f(x) = f(c)$ and step 4.3 gives $\\lim_{x \\to c^{+}} f(x) \\ge f(c) + 1/2^{\\,k_{0}+1} > f(c)$. The two one-sided limits therefore differ, and the discontinuity at $c$ is a jump. [step 5.1, step 4.3, step 5.3, L6]",
      "step": "6.2",
      "inputs": [
        "5.1",
        "4.3",
        "5.3",
        "L6"
      ]
    },
    {
      "id": "thm-monotone-with-prescribed-discontinuity-set-step-7-1",
      "claim": "Claims 1, 2 and 3 hold for the function $f$ constructed in steps 1.1 and 2.1: claim 1 by steps 3.1 and 4.1, claim 2 by steps 6.1 and 5.3, and claim 3 by step 6.2. [step 3.1, step 4.1, step 6.1, step 5.3, step 6.2, discharge-construct] ∎",
      "step": "7.1",
      "inputs": [
        "1.1",
        "2.1",
        "3.1",
        "4.1",
        "6.1",
        "5.3",
        "6.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 1.1: the empty-object convention or its exclusion is explicit in the statement/proof."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: the zero-valued or zero-index boundary is handled explicitly, or is included without division by it."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: the unit or first-index boundary is included explicitly in the stated construction."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The claim is not parametrised by an interval, finite range, or object with a degenerate case."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval endpoint or one-sided domain boundary occurs in the statement."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: each existential witness used here is supplied by the cited existence result or by the displayed formula/construction."
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
    "source": "thm-monotone-with-prescribed-discontinuity-set",
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
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-classification-of-discontinuities",
    "declared_target": "def-classification-of-discontinuities",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-monotone-one-sided-limits-exist",
    "declared_target": "thm-monotone-one-sided-limits-exist",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-monotone-discontinuities-are-jumps",
    "declared_target": "thm-monotone-discontinuities-are-jumps",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-froda",
    "declared_target": "thm-froda",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-countable",
    "declared_target": "def-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-countable-iff-surjection-from-n",
    "declared_target": "lem-countable-iff-surjection-from-n",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-geometric-series",
    "declared_target": "thm-geometric-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-nonnegative-series-bounded-partial-sums",
    "declared_target": "thm-nonnegative-series-bounded-partial-sums",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-series-tail-invariance",
    "declared_target": "lem-series-tail-invariance",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-monotone-with-prescribed-discontinuity-set",
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
    "source": "thm-monotone-with-prescribed-discontinuity-set",
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
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-finite-set-has-max",
    "declared_target": "lem-finite-set-has-max",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-with-prescribed-discontinuity-set",
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
    "source": "thm-monotone-with-prescribed-discontinuity-set",
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
    "source": "thm-monotone-with-prescribed-discontinuity-set",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-max-min",
    "declared_target": "def-max-min",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (21)

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

### `def-classification-of-discontinuities`

````markdown
---
id: def-classification-of-discontinuities
kind: definition
title: "Discontinuity of $f$ at a point of its domain, and its classification: removable discontinuity, jump discontinuity and essential discontinuity, equivalently Rudin's discontinuities of the first and of the second kind"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
  evidence: semantic-source
deps: [def-continuity-real, def-one-sided-limits, def-function-limit, def-limit-point-r, def-interval, thm-two-sided-limit-iff-both-one-sided]
justified_by: []
aliases: [def-discontinuity, def-jump-discontinuity, def-removable-discontinuity, def-essential-discontinuity]
landmark: true
short: "removable, jump, essential discontinuity"
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
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then
$f$ is **discontinuous at $c$**, and $c$ is a **discontinuity of $f$**, when $f$
is not continuous at $c$ ([[def-continuity-real]]). As in
[[def-one-sided-limits]] write

$$A^{-} := A \cap (-\infty, c), \qquad A^{+} := A \cap (c, \infty)$$

([[def-interval]]), and recall that $\lim_{x \to c^{-}} f(x)$ is defined only
when $c$ is a limit point of $A^{-}$, and $\lim_{x \to c^{+}} f(x)$ only when
$c$ is a limit point of $A^{+}$ ([[def-limit-point-r]]).

**At an isolated point there is nothing to classify.** If $c$ is an isolated
point of $A$ ([[def-limit-point-r]]), so that $A \cap N_{\rho}(c) = \{c\}$ for
some real $\rho > 0$, then $f$ is continuous at $c$: the $\varepsilon$-$\delta$
condition of [[def-continuity-real]] is satisfied by $\delta := \rho$, since the
only $x \in A$ with $|x - c| < \rho$ is $c$ itself and $|f(c) - f(c)| = 0$. So
every discontinuity is a limit point of $A$, and the classification below covers
every case that occurs.

### Two-sided points

Suppose $c$ is a limit point of **both** $A^{-}$ and $A^{+}$, so that both
one-sided limits are well posed. Say that $c$ is a discontinuity

- **of the first kind** when both one-sided limits exist;
- **of the second kind**, also called **essential**, when at least one of the two
  one-sided limits fails to exist.

A discontinuity of the first kind is further

- **removable** when $\lim_{x \to c^{-}} f(x) = \lim_{x \to c^{+}} f(x)$; the
  common value is then different from $f(c)$, for otherwise
  [[thm-two-sided-limit-iff-both-one-sided]] would give
  $\lim_{x \to c} f(x) = f(c)$ and $f$ would be continuous at $c$
  ([[def-continuity-real]]);
- a **jump** when $\lim_{x \to c^{-}} f(x) \ne \lim_{x \to c^{+}} f(x)$; the
  difference $\lim_{x \to c^{+}} f(x) - \lim_{x \to c^{-}} f(x)$ is then called
  the **jump of $f$ at $c$**.

The three cases *removable*, *jump*, *essential* are mutually exclusive and
exhaust the two-sided discontinuities of $f$: either both one-sided limits
exist, and then they are equal or not, or one of them does not exist.

**Removable is a name for what can be repaired.** If $c$ is a removable
discontinuity with common one-sided value $L$, then the function agreeing with
$f$ off $c$ and taking the value $L$ at $c$ is continuous at $c$, again by
[[thm-two-sided-limit-iff-both-one-sided]] and [[def-continuity-real]]: changing
the single value $f(c)$ removes the discontinuity. No such repair is available at
a jump or at an essential discontinuity, since there the two-sided limit does not
exist at all and no choice of value at $c$ can create it.

### One-sided points

If $c$ is a limit point of exactly one of $A^{-}$ and $A^{+}$, only that side is
defined and only that side is used: $c$ is a discontinuity **of the first kind**
when the one-sided limit on the side in question exists, and **of the second
kind** otherwise. When it exists it is different from $f(c)$, since on such a
point the one-sided condition and the continuity condition are the same
condition; and there is no jump case, there being nothing to compare the value
with. The endpoints of an interval are the typical instance.

**On the two vocabularies.** *First kind* and *second kind* are Rudin's terms and
are recorded because the literature uses them; *removable*, *jump* and
*essential* are the names used in the rest of this library. They name the same
three cases and no third classification is introduced.
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

### `def-countable`

````markdown
---
id: def-countable
kind: definition
title: "Finite, countably infinite, countable, uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-equinumerous, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, lem-pigeonhole]
justified_by: []
aliases: [def-finite-set, def-countably-infinite, def-uncountable]
landmark: true
short: "finite, countable, uncountable"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "T. Tao, Analysis I, 3rd ed., §3.6 and §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

## Remarks

- **Convention: in this library "countable" alone always means "at most
  countable"**, so a finite set is countable. This is the convention of Halmos
  and of Tao, and it is the one that makes the theorems on this page read
  cleanly: subsets, products and unions of countable sets are countable, with no
  finite/infinite case split in the statement. The competing convention, used by
  Rudin among others, reserves "countable" for "countably infinite" and says
  "at most countable" for the disjunction. Under that convention every statement
  below still holds after replacing "countable" with "at most countable", but
  several would become false as literally written. Where the distinction
  matters, the long forms "countably infinite" and "at most countable" are used
  in full, and "uncountable" always means "not at most countable", on which the
  two conventions agree.

- **The three classes are exhaustive by construction**: every set is finite,
  countably infinite, or uncountable, since "uncountable" is defined as the
  negation of the disjunction. That they are also mutually exclusive, that is,
  that no set is both finite and countably infinite, is a genuine theorem
  amounting to $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$, and it is
  proved immediately above as claim 4 of [[lem-pigeonhole]]. So a countably
  infinite set is never finite, and "$A$ is infinite", meaning not finite, is
  implied by $A \approx \mathbb{N}$. The same lemma pins down finiteness itself:
  by its claim 3 a finite set is equinumerous with exactly one natural number, so
  the number of elements of a finite set is well defined, and by its claim 5 no
  finite set is equinumerous with a proper subset of itself.

- **What the exclusivity is and is not used for below.** Nothing on this page
  needs it in order to run: the infinitude of $\mathbb{Q}$, for instance, is
  obtained by exhibiting a bijection $\mathbb{Q} \approx \mathbb{N}$ directly
  ([[thm-rationals-countable]]) rather than by ruling out finiteness. It is used
  where the two notions of infinity are compared
  ([[fs-infinite-has-countable-subset-in-zf]]) and where the continuum hypothesis
  is instantiated at $\mathbb{N}$ ([[rem-continuum-hypothesis]]), both of which
  need $\mathbb{N}$ to be infinite as a fact rather than as a convention.

- **$0$ and the empty set.** $0 = \varnothing$, and $A \approx 0$ holds exactly
  when $A = \varnothing$, so the empty set is finite. This matters in the proofs
  below, where the empty case is always separated out: a surjection
  $\mathbb{N} \to A$ cannot exist when $A = \varnothing$, which is why
  [[lem-countable-iff-surjection-from-n]] assumes $A$ nonempty.

- **Countability is a property of a set alone**, not of a set with structure. In
  particular $\mathbb{Q}$ is countable while carrying a dense order, and
  $\mathbb{R}$ is uncountable; neither statement says anything on its own about
  the order or the arithmetic those sets carry.
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

### `def-max-min`

````markdown
---
id: def-max-min
kind: definition
title: "Maximum and minimum of a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field]
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
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $m \in \mathbb{R}$.

- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \in S$ and $s \le m$
  for every $s \in S$.
- $m$ is a **minimum** (or *least element*) of $S$ if $m \in S$ and $m \le s$
  for every $s \in S$.

A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then
$m_1 \in S$ gives $m_1 \le m_2$ and $m_2 \in S$ gives $m_2 \le m_1$, so
$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy
axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).
The same argument applies to minima, so we may write $\max S$ and $\min S$.

## Remarks

- A maximum is precisely an upper bound of $S$ ([[def-complete-ordered-field]])
  that happens to lie in $S$; a minimum is a lower bound of $S$
  ([[def-bounded-set]]) that lies in $S$. In particular a set with a maximum is
  bounded above and a set with a minimum is bounded below.
- The empty set has neither a maximum nor a minimum, because the requirement
  $m \in S$ cannot be met.
- The membership requirement $m \in S$ is exactly what separates a maximum from a
  supremum, and it is the theme of this page. A supremum is a bound on the set
  and is not asked to belong to it; a maximum is an element of the set. The two
  agree exactly when the supremum happens to be attained ([[lem-max-is-sup]]),
  and they genuinely differ in general ([[fs-sup-belongs-to-set]]).
- Every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum
  ([[lem-finite-set-has-max]]), which is what licenses the notation
  $\max\{a_1, \dots, a_n\}$. Infinite sets need not: the failure of attainment is
  an infinitary phenomenon.
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

### `def-series`

````markdown
---
id: def-series
kind: definition
title: "Series, partial sums, convergence and the sum, divergence, and the tail series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-sum, def-sequence, def-real-limit, def-real-numbers, lem-limit-unique]
justified_by: []
aliases: []
landmark: true
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and
a **sequence of reals** is a function $a : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]), written $(a_k)$; recall that $\mathbb{N}$ contains $0$.

**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial
sums** is

$$s_n \;:=\; \sum_{k < n} a_k \qquad (n \in \mathbb{N}),$$

the finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and
$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses
that define the finite sum. Note that $s_n$ is the sum of the $n$ terms
$a_0, \dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last
one.

**Convergence, the sum, divergence.** The **series** of $(a_k)$, written
$\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges
([[def-real-limit]]), and then the **sum of the series** is

$$\sum_{k=0}^{\infty} a_k \;:=\; \lim_{n} s_n .$$

The series **diverges** when $(s_n)$ does not converge. A convergent sequence of
reals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names
a single real number and nothing further has to be checked for it to be
well defined.

**Series with a general starting index.** Let $m \in \mathbb{N}$ and let $a$ be a
function on $\{\, k \in \mathbb{N} : k \ge m \,\}$, which we call a **family from
$m$** and write $(a_k)_{k \ge m}$. The series

$$\sum_{k \ge m} a_k$$

is by definition the series of the sequence $b_j := a_{j + m}$,
$j \in \mathbb{N}$, which is a genuine sequence of reals; it converges exactly
when that series converges, and its sum is then written
$\sum_{k = m}^{\infty} a_k$. Its partial sums are

$$\sum_{k=m}^{n-1} a_k \;=\; \sum_{j < n-m} a_{m+j} \qquad (n \ge m),$$

in the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum
$0$. A sequence on $\mathbb{N}$ is the case $m = 0$, and the two readings of
$\sum a_k$ agree there, since $b_j = a_j$.

**This clause is not a convenience.** Sequences in this library are functions on
$\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the
classical series are built from expressions that are undefined at the index $0$:
$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \ge 1$. Writing such a series as
$\sum_{k \ge 1} a_k$ names an honest object, whereas writing it as a sequence on
$\mathbb{N}$ would require a value at an index where the defining expression has
none. Every statement on this page says which starting index it uses.

**Tail series.** For $N \in \mathbb{N}$, the **$N$-th tail series** of
$\sum a_k$ is $\sum_{k \ge N} a_k$, that is the series of the $N$-th tail
$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The
$0$-th tail series is the series itself.

## Remarks

- **"Diverges" here means "does not converge", and nothing more.** A divergent
  series may have partial sums that run away to $+\infty$, or to $-\infty$, or
  that oscillate without settling anywhere. The three behaviours are not
  distinguished by the word, and no statement on this page uses "diverges" to
  mean "the partial sums are unbounded" unless it says so.

- **The symbol $\sum_{k=0}^{\infty} a_k$ is defined only for a convergent
  series.** It denotes a real number, not a formal object, and it is illegitimate
  to write it down before convergence has been established. Where a proof needs
  to speak of the series without knowing whether it converges, it speaks of
  $(a_k)$ and of $(s_n)$.

- **Two indices, doing different work.** The index $k$ runs over the terms and is
  bound; the index $n$ runs over the partial sums and is the variable in which the
  limit is taken. Confusing them is the commonest slip in the subject, and it is
  the reason the definition above fixes $s_n = \sum_{k<n} a_k$ rather than
  $\sum_{k \le n} a_k$: with this choice the recursion $s_{n+1} = s_n + a_n$ is
  the one supplied by [[def-finite-sum]], with no shift anywhere.
````

### `lem-countable-iff-surjection-from-n`

````markdown
---
id: lem-countable-iff-surjection-from-n
kind: lemma
title: "A nonempty set is at most countable iff it is a surjective image of $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, thm-well-ordering-principle, def-injection-surjection-bijection, lem-subset-of-countable, def-equinumerous, def-natural-numbers, def-nat-order, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: false
short: "countable iff enumerable by a surjection"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if
and only if there is a surjection $s : \mathbb{N} \to A$
([[def-injection-surjection-bijection]]).

Moreover, from any such surjection an injection $A \to \mathbb{N}$ is obtained
explicitly, without any choice, by

$$j(a) := \min\{\, k \in \mathbb{N} : s(k) = a \,\}.$$

This is the working form of countability used everywhere below: to prove a
nonempty set countable it suffices to list its elements, repetitions and all.

**No choice principle is used.** The backward direction is where an appeal to
choice would be natural ("for each $a$ pick some $k$ with $s(k) = a$") and it is
avoided outright, because $\min$ is canonical: every nonempty set of naturals has
a *least* element ([[thm-well-ordering-principle]]), so $j(a)$ is determined by
$a$ and $s$ alone.

## Facts & Assumptions

**Given:** A nonempty set $A$. For $a \in A$ and a function $s : \mathbb{N} \to A$ write $s^{-1}(\{a\}) = \{\, k \in \mathbb{N} : s(k) = a \,\}$.

[L1] $A$ is at most countable when $A \approx n$ for some $n \in \mathbb{N}$ or $A \approx \mathbb{N}$; $A \approx 0 = \varnothing$ holds only for $A = \varnothing$ ([[def-countable]], [[def-natural-numbers]]).

[L2] Bijections, injections, surjections, images and the symmetry and transitivity of $\approx$; an injection is a bijection onto its image ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L3] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] Every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L5] For naturals, $k \in n \iff k < n$, so a natural number $n$ is the set $\{\, k \in \mathbb{N} : k < n \,\}$ of naturals below it; in particular $0 \in n$ whenever $n \ne 0$ ([[lem-nat-order-is-membership]], proved earlier on this page from the additive order of [[def-nat-order]] on the von Neumann naturals of [[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication assume $A$ is at most countable; since $A \ne \varnothing$ we have $A \approx \mathbb{N}$, or $A \approx n$ for some $n \in \mathbb{N}$ with $n \ne 0$, and in either case fix a bijection $\psi$ from $\mathbb{N}$, respectively from $n$, onto $A$. [assume-hyp, given, L1, L2]

1.2 For the converse implication assume a surjection $s : \mathbb{N} \to A$ is given. [assume-hyp]

2.1 If $\psi$ is defined on $\mathbb{N}$ it is itself a surjection $\mathbb{N} \to A$; if $\psi$ is defined on $n \ne 0$, then $0 \in n$ by [L5] and the function $s_\psi : \mathbb{N} \to A$ with $s_\psi(k) = \psi(k)$ for $k < n$ and $s_\psi(k) = \psi(0)$ for $k \ge n$ is a surjection, since every element of $A$ is $\psi(k)$ for some $k \in n$. In both cases a surjection $\mathbb{N} \to A$ exists. [step 1.1, L2, L5, construct]

2.2 For each $a \in A$ the set $s^{-1}(\{a\})$ is a nonempty subset of $\mathbb{N}$, because $s$ is surjective, so [L3] provides its least element and $j(a) := \min s^{-1}(\{a\})$ defines a function $j : A \to \mathbb{N}$; no selection is made, since the least element is uniquely determined. [step 1.2, L3, construct]

3.1 $j$ is injective: if $j(a) = j(a') = k$ then $s(k) = a$ and $s(k) = a'$, because $j(a) \in s^{-1}(\{a\})$ and $j(a') \in s^{-1}(\{a'\})$, so $a = a'$. [step 2.2, L2]

4.1 Hence $j$ is a bijection of $A$ onto $j[A] \subseteq \mathbb{N}$, so $A \approx j[A]$; the subset $j[A]$ of the at most countable set $\mathbb{N}$ is at most countable by [L4], and transitivity of $\approx$ transfers this to $A$. [step 3.1, L1, L2, L4]

5.1 The forward implication is step 2.1 and the converse is step 4.1, so for nonempty $A$ countability and the existence of a surjection $\mathbb{N} \to A$ are equivalent, with $j$ of step 2.2 the promised injection $A \to \mathbb{N}$. [step 2.1, step 3.1, step 4.1] ∎

## Remarks

- The hypothesis $A \ne \varnothing$ cannot be dropped in the forward direction: $\varnothing$ is finite, hence at most countable, but no function $\mathbb{N} \to \varnothing$ exists at all. The converse direction needs no such hypothesis, since a surjection onto $A$ already forces $A \ne \varnothing$.

- Combining the two directions: a nonempty $A$ is at most countable if and only if $A \preceq \mathbb{N}$ ([[def-equinumerous]]). The forward direction of that reformulation is immediate, and the backward direction is step 4.1.

- The lemma is what licenses the informal phrase "enumerate $A$ as $a_0, a_1, a_2, \dots$, possibly with repetitions". Repetitions are exactly what distinguishes a surjection from a bijection, and allowing them is what makes the criterion easy to apply: the enumerations built in [[thm-product-of-countable]] and [[thm-countable-union-of-countable]] repeat.
````

### `lem-finite-set-has-max`

````markdown
---
id: lem-finite-set-has-max
kind: lemma
title: "Every nonempty finite set of reals has a maximum and a minimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-max-min, thm-induction-principle, def-nat-addition, def-complete-ordered-field, def-ordered-field]
justified_by: [lem-finite-subsets-listable]
forward_refs: [def-countable]
aliases: []
landmark: false
proof_strategy: induction
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
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$ and all $a_0, a_1, \dots, a_n \in \mathbb{R}$, the
set $\{a_0, a_1, \dots, a_n\}$ has a maximum and a minimum ([[def-max-min]]).

What is proved below is exactly the displayed statement, by induction on $n$.

The usual reading, that *every nonempty finite subset of $\mathbb{R}$ has a
maximum and a minimum*, follows once one identifies the nonempty finite subsets
of $\mathbb{R}$ with the sets listable as $\{a_0, \dots, a_n\}$. That
identification is recorded as a stipulation in the Given below, because this page
has no definition of finiteness to prove it against. **It is discharged, not
merely assumed**: [[lem-finite-subsets-listable]] proves that the two
descriptions of a nonempty finite subset of $\mathbb{R}$ agree. That lemma is
recorded in `justified_by` rather than in `deps`, since it is about the sets this
lemma quantifies over and therefore depends on this one. This is what licenses
the notation
$\max\{a_1, \dots, a_n\}$ and $\min\{a_1, \dots, a_n\}$ for finite sets of
**real** numbers from this page onwards.

## Facts & Assumptions

**Given:** Real numbers $a_0, a_1, a_2, \dots$; for $n \in \mathbb{N}$ write $F_n := \{a_0, \dots, a_n\}$, so that $F_{n+1} = F_n \cup \{a_{n+1}\}$. A subset of $\mathbb{R}$ is nonempty and finite exactly when it equals $F_n$ for some $n \in \mathbb{N}$ and some choice of $a_0, \dots, a_n$.

[A1] $P(n)$ denotes the statement: for all $a_0, \dots, a_n \in \mathbb{R}$, the set $F_n$ has a maximum and a minimum.

[L1] Maximum and minimum: $m = \max X$ means $m \in X$ and $x \le m$ for all $x \in X$; $m = \min X$ means $m \in X$ and $m \le x$ for all $x \in X$; each is unique when it exists ([[def-max-min]]).

[L2] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L3] The order on $\mathbb{R}$ is reflexive, total and transitive: $a \le a$; for all $a, b$ exactly one of $a < b$, $a = b$, $b < a$ holds, so at least one of $a \le b$ and $b \le a$ holds; and $a \le b$ with $b \le c$ gives $a \le c$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Base case: $F_0 = \{a_0\}$, and $a_0 \in F_0$ with $a_0 \le a_0$ by reflexivity, so $a_0$ is both a maximum and a minimum of $F_0$; hence $P(0)$ holds. [base, A1, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that is, for all reals $a_0, \dots, a_n$ the set $F_n$ has a maximum and a minimum. [ih, A1]

2.1 Let $a_0, \dots, a_{n+1} \in \mathbb{R}$ be arbitrary; by the inductive hypothesis the set $F_n$ has a maximum $M$ and a minimum $m$, and $F_{n+1} = F_n \cup \{a_{n+1}\}$. [step 1.2, L1]

3.1 By totality at least one of $a_{n+1} \le M$ and $M \le a_{n+1}$ holds. If $a_{n+1} \le M$, then $M \in F_n \subseteq F_{n+1}$, every element of $F_n$ is $\le M$ because $M = \max F_n$, and $a_{n+1} \le M$ as well, so $M$ is a maximum of $F_{n+1}$. If $M \le a_{n+1}$, then $a_{n+1} \in F_{n+1}$, every $x \in F_n$ satisfies $x \le M \le a_{n+1}$ hence $x \le a_{n+1}$ by transitivity, and $a_{n+1} \le a_{n+1}$, so $a_{n+1}$ is a maximum of $F_{n+1}$. Either way $F_{n+1}$ has a maximum. [step 2.1, L1, L3]

3.2 Dually, at least one of $m \le a_{n+1}$ and $a_{n+1} \le m$ holds. If $m \le a_{n+1}$, then $m \in F_{n+1}$ and every element of $F_{n+1}$ is $\ge m$, so $m$ is a minimum of $F_{n+1}$. If $a_{n+1} \le m$, then $a_{n+1} \in F_{n+1}$ and every $x \in F_n$ satisfies $a_{n+1} \le m \le x$ hence $a_{n+1} \le x$ by transitivity, so $a_{n+1}$ is a minimum of $F_{n+1}$. Either way $F_{n+1}$ has a minimum. [step 2.1, L1, L3]

4.1 Since $a_0, \dots, a_{n+1}$ were arbitrary, $F_{n+1}$ has a maximum and a minimum for every such list, that is, $P(n)$ implies $P(n+1)$. [step 3.1, step 3.2, A1]

5.1 The base case and the inductive step give $P(n)$ for every $n \in \mathbb{N}$ by the induction principle; since a nonempty finite subset of $\mathbb{R}$ is exactly a set of the form $F_n$, every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum. [step 1.1, step 4.1, given, L2, discharge-induction] ∎

## Remarks

- **Where the stipulation is discharged.** Finiteness itself is defined later, in [[def-countable]], as equinumerosity with a von Neumann natural; with that definition in hand [[lem-finite-subsets-listable]] proves that a subset of $\mathbb{R}$ is nonempty and finite exactly when it is listable as $\{a_0, \dots, a_n\}$, which is the Given below. So nothing on this page rests on an assumption that is never paid for; it is paid for later, and the payment is recorded in `justified_by`.
- **Only the total order is used, never completeness.** The base case needs reflexivity, the inductive step needs totality and transitivity, and the induction itself runs over $\mathbb{N}$. The same induction works in any totally ordered field; what is recorded here is its specialisation to $\mathbb{R}$.
- Nonemptiness is essential: $\emptyset$ is finite and has no maximum ([[def-max-min]]). Finiteness is essential too: $\{x \in \mathbb{R} : 0 < x < 1\}$ is bounded and has no maximum ([[fs-sup-belongs-to-set]]).
- Combined with claim 1 of [[lem-max-is-sup]], this says every nonempty finite subset of $\mathbb{R}$ has a supremum, and that the supremum is attained, because it equals the maximum. The infimum half is *not* part of [[lem-max-is-sup]], which speaks only of maxima and suprema; it follows from the minimum proved here together with the reflection identity $\inf X = -\sup(-X)$ ([[lem-reflection]], [[thm-infimum-property]]).
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

### `lem-series-tail-invariance`

````markdown
---
id: lem-series-tail-invariance
kind: lemma
title: "A series converges iff each of its tail series converges, and the sum splits as $s_N$ plus the $N$-th tail"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series, lem-limit-of-tail, def-finite-sum, lem-finite-sum-laws, thm-algebra-of-limits, def-real-limit, def-sequence]
justified_by: []
aliases: []
landmark: true
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with partial sums $s_n = \sum_{k<n} a_k$, let
$N \in \mathbb{N}$, and let $t_j := \sum_{i<j} a_{N+i}$ be the partial sums of the
$N$-th tail series $\sum_{k \ge N} a_k$ ([[def-series]]). Then:

1. $t_j = s_{j+N} - s_N$ for every $j \in \mathbb{N}$;
2. $\sum a_k$ converges **if and only if** its $N$-th tail series converges, and
   in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; s_N \;+\; \sum_{k=N}^{\infty} a_k ;$$
3. hence the following are equivalent: $\sum a_k$ converges; every tail series of
   $\sum a_k$ converges; some tail series of $\sum a_k$ converges.

In words: convergence of a series is a property of its terms from any index on,
and changing finitely many terms changes the sum but not the fact of convergence.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals, a natural number $N$, the partial sums $s_n = \sum_{k<n} a_k$ and the partial sums $t_j = \sum_{i<j} a_{N+i}$ of the $N$-th tail series ([[def-series]], [[def-finite-sum]]).

[L1] Splitting of finite sums: if $m \le n$ then $\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$ ([[lem-finite-sum-laws]]), and $\sum_{k=m}^{n-1} a_k$ is by definition $\sum_{i<n-m} a_{m+i}$ ([[def-finite-sum]]).

[L2] Convergence depends only on the tail: a sequence $(x_n)$ converges to $x$ if and only if its $N$-th tail $(x_{j+N})_{j}$ converges to $x$ ([[lem-limit-of-tail]], [[def-sequence]]).

[L3] Algebra of limits: if $x_j \to x$ and $y_j \to y$ then $x_j + y_j \to x + y$ and $x_j - y_j \to x - y$ ([[thm-algebra-of-limits]]).

[L4] A constant sequence $y_j = c$ converges to $c$, immediately from the definition of a limit ([[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Fix $j \in \mathbb{N}$ and put $n := j + N$, so that $N \le n$ and $n - N = j$. [given]

1.2 The family $(s_{j+N})_{j \in \mathbb{N}}$ is the $N$-th tail of the sequence $(s_n)$ of partial sums. [given, L2]

2.1 Splitting the partial sum $s_n$ at $N$ gives $s_n = \sum_{k<N} a_k + \sum_{k=N}^{n-1} a_k = s_N + \sum_{i<j} a_{N+i} = s_N + t_j$. [step 1.1, L1]

2.2 Suppose $\sum a_k$ converges, say $s_n \to S$; then the $N$-th tail $(s_{j+N})_j$ converges to $S$. [given, step 1.2, L2]

3.1 Claim 1 follows: $t_j = s_{j+N} - s_N$ for every $j \in \mathbb{N}$. [step 2.1, algebra]

4.1 The constant sequence with value $s_N$ converges to $s_N$, so $t_j = s_{j+N} - s_N \to S - s_N$, and the $N$-th tail series converges with sum $S - s_N$. [step 2.2, step 3.1, L3, L4]

4.2 Conversely, suppose the $N$-th tail series converges, say $t_j \to T$; then $s_{j+N} = s_N + t_j \to s_N + T$ by the same two rules. [step 3.1, L3, L4]

5.1 So the $N$-th tail of $(s_n)$ converges to $s_N + T$, hence $(s_n)$ itself converges to $s_N + T$ and $\sum a_k$ converges. [step 4.2, step 1.2, L2]

6.1 Claim 2 follows: the two convergences are equivalent, and when they hold the sums are related by $S = s_N + T$, which is the displayed identity. [step 4.1, step 5.1, algebra]

7.1 Claim 3 follows as well: if $\sum a_k$ converges then by claim 2 every tail series converges; every tail series converging trivially gives some tail series converging, the family of tails being indexed by all of $\mathbb{N}$; and if some tail series, say the $N$-th, converges then by claim 2 again $\sum a_k$ converges. [step 6.1] ∎

## Remarks

- **Where the hypothesis-free character comes from.** Nothing here assumes the terms have a sign or that any series converges: claim 1 is an identity between finite sums, valid always, and claims 2 and 3 are read off from it by two standard limit rules. That is why the lemma may be used to move between a series and its tails inside proofs that have not yet decided the convergence question.

- **The sum does change.** Only the fact of convergence is tail invariant. The identity in claim 2 is the exact bookkeeping: discarding the first $N$ terms lowers the sum by $s_N$, and no more.
````

### `thm-froda`

````markdown
---
id: thm-froda
kind: theorem
title: "Froda's theorem: the set of discontinuities of a monotone function on an interval is at most countable, the injection into $\\mathbb{N}$ being built from one fixed enumeration of the rationals by least index, so no choice principle is used"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-monotone-function, thm-monotone-discontinuities-are-jumps, thm-monotone-one-sided-limits-exist, def-classification-of-discontinuities, def-countable, thm-rationals-countable, lem-rat-embeds-dense, lem-subset-of-countable, thm-well-ordering-principle, def-interval, def-injection-surjection-bijection, def-equinumerous, def-continuity-real]
justified_by: []
aliases: [thm-froda-countable-discontinuities]
landmark: true
short: "Froda: countably many discontinuities"
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
    - title: "Froda's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Froda%27s_theorem"
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Discontinuities of monotone functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ be monotone ([[def-monotone-function]]). Then the set

$$D \;:=\; \{\, c \in I : f \text{ is discontinuous at } c \,\}$$

([[def-classification-of-discontinuities]]) is **at most countable**
([[def-countable]]).

More precisely, the proof exhibits an injection $J : D \to \mathbb{N}$
([[def-injection-surjection-bijection]]) built from one fixed enumeration of the
rationals: at a discontinuity $c$ interior to $I$ the value $J(c)$ is read off
the **least index** of a rational lying in the gap
$\bigl(\lim_{x \to c^{-}} f(x),\ \lim_{x \to c^{+}} f(x)\bigr)$, which is a
nonempty open interval by [[thm-monotone-discontinuities-are-jumps]]. The map
$J$ is therefore determined by $f$ and by the fixed enumeration, and **no choice
principle is used**: least indices are canonical by
[[thm-well-ordering-principle]], and nothing anywhere in the proof is selected
without being determined.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ and a monotone $f : I \to \mathbb{R}$; and $\mathbb{Q}$ denotes the canonical copy of the rationals inside $\mathbb{R}$.

[A1] $I$ is order-convex: $x, y \in I$ and $x \le z \le y$ imply $z \in I$ ([[def-interval]]).

[L1] A nondecreasing $f$ on an order-convex $I$ has, at every $c \in I$, each well-posed one-sided limit; and if both $I^{-} = I \cap (-\infty,c)$ and $I^{+} = I \cap (c,\infty)$ are nonempty then $\lim_{x \to c^{-}} f(x) = \sup\{f(x) : x \in I, x < c\}$ and $\lim_{x \to c^{+}} f(x) = \inf\{f(x) : x \in I, x > c\}$ ([[thm-monotone-one-sided-limits-exist]]).

[L2] For a nondecreasing $f$ on an order-convex $I$ and a point $c$ with both $I^{-}$ and $I^{+}$ nonempty, $f$ is discontinuous at $c$ if and only if $\lim_{x \to c^{-}} f(x) < \lim_{x \to c^{+}} f(x)$ ([[thm-monotone-discontinuities-are-jumps]]).

[L3] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]) and the map $q \mapsto \hat q$ embeds $\mathbb{Q}$ in $\mathbb{R}$ injectively ([[lem-rat-embeds-dense]]), so composing a bijection $\mathbb{N} \to \mathbb{Q}$ with that embedding gives a bijection $e : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$ onto the canonical copy of the rationals inside $\mathbb{R}$; and strictly between any two distinct reals there lies a point of $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]], [[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L4] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] Every subset of $\mathbb{N}$ is at most countable, and a set in bijection with an at most countable set is at most countable ([[lem-subset-of-countable]], [[def-countable]], [[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L6] $f$ is discontinuous at $c$ exactly when it is not continuous there, and $|(-f)(x) - (-f)(c)| = |f(x) - f(c)|$, so $f$ and $-f$ have exactly the same points of discontinuity ([[def-continuity-real]], [[def-monotone-function]]).

## Proof

**Proof technique:** direct.

1.1 It is enough to treat a nondecreasing $f$: if $f$ is nonincreasing then $-f$ is nondecreasing and has the same discontinuity set, so the conclusion for $-f$ is the conclusion for $f$. Assume from here on that $f$ is nondecreasing. [L6]

1.2 Fix once and for all a bijection $e : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$; everything below is defined in terms of $f$, $I$ and this one function. [L3, choose]

1.3 Call $c \in I$ **interior** when both $I^{-}$ and $I^{+}$ are nonempty, and write $D_{0}$ for the set of interior points of $I$ at which $f$ is discontinuous. A point of $I$ that is not interior has $I^{-} = \varnothing$, and is then a least element of $I$, or $I^{+} = \varnothing$, and is then a greatest element of $I$; a subset of $\mathbb{R}$ has at most one least and at most one greatest element, so $D \setminus D_{0}$ has at most two elements. [A1]

2.1 For $c \in D_{0}$ put $L^{-}(c) := \lim_{x \to c^{-}} f(x)$ and $L^{+}(c) := \lim_{x \to c^{+}} f(x)$, both of which exist, and note $L^{-}(c) < L^{+}(c)$. [step 1.3, L1, L2]

2.2 Let $c, c' \in D_{0}$ with $c < c'$. Take $t := e(k)$ for the least $k$ with $c < e(k) < c'$, which exists because a point of $\mathbb{Q}_{\mathbb{R}}$ lies strictly between $c$ and $c'$; then $t \in I$, since $c, c' \in I$ and $I$ is order-convex. [step 1.3, A1, L3, L4]

3.1 For $c \in D_{0}$ the set $K(c) := \{\, k \in \mathbb{N} : L^{-}(c) < e(k) < L^{+}(c) \,\}$ is nonempty, since a point of $\mathbb{Q}_{\mathbb{R}}$ lies strictly between the two distinct reals $L^{-}(c)$ and $L^{+}(c)$ and $e$ is onto $\mathbb{Q}_{\mathbb{R}}$; so $j(c) := \min K(c)$ is a well-defined natural number, determined by $c$, $f$ and $e$ alone. [step 2.1, L3, L4]

3.2 With $c < t < c'$ as in step 2.2: $L^{+}(c) = \inf\{f(x) : x \in I, x > c\} \le f(t)$ because $t$ is one of the points in that set, and $f(t) \le \sup\{f(x) : x \in I, x < c'\} = L^{-}(c')$ for the same reason on the other side. Hence $L^{+}(c) \le L^{-}(c')$. [step 2.2, L1]

4.1 The two open intervals $(L^{-}(c), L^{+}(c))$ and $(L^{-}(c'), L^{+}(c'))$ are therefore disjoint, so no point of $\mathbb{Q}_{\mathbb{R}}$ lies in both, so $e(j(c)) \ne e(j(c'))$ and hence $j(c) \ne j(c')$. Since $c < c'$ was an arbitrary pair of distinct elements of $D_{0}$, the map $j : D_{0} \to \mathbb{N}$ is injective. [step 3.1, step 3.2]

5.1 Define $J : D \to \mathbb{N}$ by $J(c) := 2\,j(c) + 1$ for $c \in D_{0}$; $J(c) := 0$ if $c \in D \setminus D_{0}$ is a least element of $I$; and $J(c) := 2$ if $c \in D \setminus D_{0}$ is a greatest element of $I$ and not a least one. Then $J$ is injective: it is injective on $D_{0}$ by step 4.1, it separates the at most two points of $D \setminus D_{0}$ from each other, and its values on $D_{0}$ are odd while its values off $D_{0}$ are even. [step 1.3, step 4.1, construct]

6.1 Consequently $J$ is a bijection from $D$ onto the subset $J[D] \subseteq \mathbb{N}$, which is at most countable; countability transfers along that bijection, so $D$ is at most countable. [step 5.1, L5] ∎

## Remarks

- **The bound is attained.** Froda's theorem gives no better bound than *at most countable*, and none is available: for every at most countable $E \subseteq \mathbb{R}$ there is a bounded nondecreasing function on $\mathbb{R}$ whose discontinuity set is exactly $E$ ([[thm-monotone-with-prescribed-discontinuity-set]]). Taking $E = \mathbb{Q}$ gives a nondecreasing function discontinuous at every rational and continuous at every irrational.

- **What the choice-freedom rests on.** Two canonical selections, and nothing else: one fixed bijection $e : \mathbb{N} \to \mathbb{Q}$, produced by [[thm-rationals-countable]], whose own proof spends no choice principle; and the least element of a nonempty set of naturals ([[thm-well-ordering-principle]]). Replacing "least index" by "some index" would turn step 3.1 into an application of a choice principle over the possibly uncountable index set $D_{0}$.

- **Monotonicity is doing all the work, not continuity of anything.** The only property of $f$ used after step 1.1 is the inequality $L^{+}(c) \le L^{-}(c')$ of step 3.2, which says that the gaps opened by distinct discontinuities are laid out in the same order as the discontinuities themselves and therefore do not overlap. A function that is not monotone can be discontinuous everywhere ([[thm-dirichlet-and-thomae-continuity-sets]]).
````

### `thm-geometric-series`

````markdown
---
id: thm-geometric-series
kind: theorem
title: "For $|r| < 1$, $\\sum_{k \\ge 0} r^k = 1/(1-r)$, and for $|r| \\ge 1$ the series diverges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, lem-power-difference-factorisation, lem-geometric-sequence-null, lem-nth-term-test, def-integer-power, thm-algebra-of-limits, def-finite-sum, lem-of-abs-value, lem-power-monotone, thm-induction-principle, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
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
    - title: "Geometric series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]),
so that $r^0 = 1$ for every $r$, including $r = 0$.

1. If $|r| < 1$ then the series $\sum r^k$ converges ([[def-series]]) and
   $$\sum_{k=0}^{\infty} r^{k} \;=\; \frac{1}{1-r} .$$
2. If $|r| \ge 1$ then $\sum r^k$ diverges.

The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular
$\sum_{k=0}^{\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to
$1$. Which starting index is meant has to be said, and it is said here.

## Facts & Assumptions

**Given:** A real number $r$, the integer powers $r^k$ ([[def-integer-power]]), and the partial sums $s_n = \sum_{k<n} r^k$ of $\sum r^k$ ([[def-series]], [[def-finite-sum]]).

[L1] Factorisation of a difference of powers: for $a, b \in \mathbb{R}$ and natural $n \ge 1$, $b^n - a^n = (b-a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}$ ([[lem-power-difference-factorisation]]).

[L2] For $|r| < 1$ the sequence $(r^k)$ is null, that is $r^k \to 0$ ([[lem-geometric-sequence-null]]).

[L3] Algebra of limits: sums, differences and quotients of convergent sequences converge to the corresponding combination, the quotient rule requiring a nonzero limit and nonzero denominators ([[thm-algebra-of-limits]], [[def-real-limit]]).

[L4] Absolute value: $|xy| = |x|\,|y|$, $|x| \ge 0$, and $|x| = 0$ exactly when $x = 0$; also $|1| = 1$, since $1 > 0$ ([[lem-of-abs-value]]).

[L5] Powers and order: $a^0 = 1$ for every $a$; if $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; and $1^n = 1$ for every $n$ ([[lem-power-monotone]], [[def-integer-power]]).

[L6] The principle of induction ([[thm-induction-principle]]).

[L7] If a series converges then its terms tend to $0$ ([[lem-nth-term-test]]).

[L8] Notation of [[def-finite-sum]]: $\sum_{k=0}^{n-1} x_k$ is $\sum_{k<n} x_k$, and the empty sum $\sum_{k<0} x_k$ is $0$.

## Proof

**Proof technique:** cases.

1.1 Assume $|r| < 1$. [assume-case lt]

1.2 Assume instead $|r| \ge 1$. [assume-case ge]

1.3 For every natural $n \ge 1$, applying [L1] with $b = 1$ and $a = r$ gives $1 - r^n = (1-r)\sum_{k=0}^{n-1} r^k \cdot 1^{\,n-1-k} = (1-r)\,s_n$, using $1^m = 1$ and the notation of [L8]. [L1, L5, L8]

1.4 At $n = 0$ the identity $1 - r^n = (1-r)s_n$ also holds, both sides being $0$ because $r^0 = 1$ and $s_0$ is the empty sum. [L5, L8]

2.1 In the case $|r| < 1$ we have $r \ne 1$, since $|1| = 1$ and $|r| < 1$; hence $1 - r \ne 0$. [step 1.1, L4, algebra]

2.2 In the case $|r| \ge 1$, an induction gives $|r^k| = |r|^k$ for every $k \in \mathbb{N}$: at $k = 0$ both sides are $1$, and if $|r^k| = |r|^k$ then $|r^{k+1}| = |r^k \cdot r| = |r^k|\,|r| = |r|^k |r| = |r|^{k+1}$. [step 1.2, L4, L5, L6]

2.3 In the case $|r| \ge 1$ we get $|r|^k \ge 1$ for every $k \in \mathbb{N}$: at $k = 0$ this reads $1 \ge 1$, and for $k \ge 1$ it is the comparison $|r|^k \ge |r| \ge 1$. [step 1.2, L5]

3.1 In the case $|r| < 1$, dividing by $1 - r \ne 0$ gives $s_n = (1 - r^n)/(1-r)$ for every $n \in \mathbb{N}$. [step 2.1, step 1.3, step 1.4, algebra]

3.2 In the case $|r| \ge 1$, combining the two previous steps gives $|r^k - 0| = |r^k| = |r|^k \ge 1$ for every $k \in \mathbb{N}$. [step 2.2, step 2.3]

4.1 In the case $|r| < 1$ the sequence $(r^n)$ is null, so $1 - r^n \to 1$ and therefore $s_n \to 1/(1-r)$, the denominator being the nonzero constant $1-r$; hence $\sum r^k$ converges with sum $1/(1-r)$, which is claim 1. [step 1.1, step 3.1, step 2.1, L2, L3]

4.2 In the case $|r| \ge 1$ the sequence $(r^k)$ does not converge to $0$, since the rational tolerance $\varepsilon = 1$ admits no index $K$ with $|r^k - 0| < 1$ for all $k \ge K$; so by the term test $\sum r^k$ diverges, which is claim 2. [step 3.2, L7]

5.1 The two cases $|r| < 1$ and $|r| \ge 1$ exhaust the possibilities, since the order on $\mathbb{R}$ is total, so claims 1 and 2 together cover every real $r$. [step 4.1, step 4.2, cases-exhaustive] ∎

## Remarks

- **The divergence half needs no separate treatment of $r = 1$ and $r = -1$.** Both are covered by $|r| \ge 1$, and the single reason is the same in every case: the terms have absolute value at least $1$, so they cannot tend to $0$. For $r = 1$ the partial sums are $s_n = n$ and run to $+\infty$; for $r = -1$ they oscillate between $0$ and $1$. The theorem says only that neither converges, which is all that "diverges" means here ([[def-series]]).

- **Why the identity is proved at $n = 0$ separately.** [[lem-power-difference-factorisation]] requires $n \ge 1$, since its right-hand side is a sum over $k < n$ of a term involving $b^{\,n-1-k}$, and $n-1$ is not a natural number at $n = 0$. The identity is still true at $n = 0$, but by inspection of two empty objects rather than by that lemma, and step 1.4 says so rather than letting the reader assume the citation covers it.
````

### `thm-monotone-discontinuities-are-jumps`

````markdown
---
id: thm-monotone-discontinuities-are-jumps
kind: theorem
title: "A monotone function on an interval has no discontinuity of the second kind: at every point both relevant one-sided limits exist, and an interior point $c$ is a discontinuity exactly when $\\lim_{x \\to c^{-}} f(x) < \\lim_{x \\to c^{+}} f(x)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
  evidence: semantic-source
deps: [def-monotone-function, thm-monotone-one-sided-limits-exist, def-classification-of-discontinuities, thm-two-sided-limit-iff-both-one-sided, def-continuity-real, def-one-sided-limits, def-interval, def-limit-point-r]
justified_by: []
aliases: []
landmark: false
short: "monotone discontinuities are jumps"
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
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Discontinuities of monotone functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ be nondecreasing ([[def-monotone-function]]). Write
$I^{-} = I \cap (-\infty,c)$ and $I^{+} = I \cap (c,\infty)$ for $c \in I$.

1. At every $c \in I$, each of the two one-sided limits that is well posed
   exists ([[def-one-sided-limits]]). Consequently $f$ has **no discontinuity of
   the second kind** ([[def-classification-of-discontinuities]]): every
   discontinuity of $f$ is of the first kind.
2. Call $c \in I$ an **interior point of $I$** when both $I^{-}$ and $I^{+}$ are
   nonempty. At such a point
   $$\lim_{x \to c^{-}} f(x) \;\le\; f(c) \;\le\; \lim_{x \to c^{+}} f(x),$$
   and $f$ is continuous at $c$ ([[def-continuity-real]]) **if and only if**
   $\lim_{x \to c^{-}} f(x) = \lim_{x \to c^{+}} f(x)$.
3. Hence an interior point $c$ is a discontinuity of $f$ exactly when
   $$\lim_{x \to c^{-}} f(x) \;<\; \lim_{x \to c^{+}} f(x),$$
   and every such discontinuity is a **jump**, of jump
   $\lim_{x \to c^{+}} f(x) - \lim_{x \to c^{-}} f(x) > 0$.

The same three claims hold for a nonincreasing $f$, with the two one-sided
limits exchanged and all inequalities reversed, by applying the above to $-f$,
which is nondecreasing ([[def-monotone-function]]) and has exactly the same
points of continuity, since $|(-f)(x) - (-f)(c)| = |f(x) - f(c)|$.

**A point of $I$ that is not interior is an endpoint, and there are at most
two.** $I^{-} = \varnothing$ says that $c$ is a least element of $I$ and
$I^{+} = \varnothing$ that it is a greatest one, and a set has at most one of
each. Those two points are excluded from claims 2 and 3 only because a
comparison of two one-sided limits is not available there; claim 1 covers them.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$, a nondecreasing $f : I \to \mathbb{R}$, and $c \in I$.

[L1] If $I^{-} \ne \varnothing$ then $c$ is a limit point of $I^{-}$ and $\lim_{x \to c^{-}} f(x) = \sup\{f(x) : x \in I, x < c\} \le f(c)$; if $I^{+} \ne \varnothing$ then $c$ is a limit point of $I^{+}$ and $\lim_{x \to c^{+}} f(x) = \inf\{f(x) : x \in I, x > c\} \ge f(c)$ ([[thm-monotone-one-sided-limits-exist]]).

[L2] If $c$ is a limit point of both $I^{-}$ and $I^{+}$, then $\lim_{x \to c} f(x) = L$ holds if and only if both one-sided limits at $c$ exist and equal $L$; in particular the two-sided limit exists exactly when the two one-sided limits exist and agree ([[thm-two-sided-limit-iff-both-one-sided]]).

[L3] At a limit point $c \in I$ of $I$, $f$ is continuous at $c$ if and only if $\lim_{x \to c} f(x)$ exists and equals $f(c)$; at an isolated point of $I$ every function is continuous ([[def-continuity-real]], [[def-limit-point-r]], [[def-classification-of-discontinuities]]).

[L4] A discontinuity at a two-sided point is of the second kind when at least one one-sided limit fails to exist, of the first kind otherwise, and is a jump when the two one-sided limits exist and differ; at a one-sided point it is of the first kind when the one available one-sided limit exists ([[def-classification-of-discontinuities]]).

## Proof

**Proof technique:** direct.

1.1 Let $c \in I$. If $I^{-} \ne \varnothing$ then $\lim_{x \to c^{-}} f(x)$ exists, and if $I^{+} \ne \varnothing$ then $\lim_{x \to c^{+}} f(x)$ exists; if one of the two sets is empty the corresponding symbol is not defined and there is nothing to prove for it. [L1]

2.1 Claim 1 follows: at every point of $I$ every well-posed one-sided limit of $f$ exists, so no discontinuity of $f$ can be of the second kind, and every discontinuity is therefore of the first kind. [step 1.1, L4]

2.2 Now let $c$ be an interior point of $I$, and write $L^{-} := \lim_{x \to c^{-}} f(x)$ and $L^{+} := \lim_{x \to c^{+}} f(x)$, both of which exist by step 1.1. Then $L^{-} \le f(c) \le L^{+}$, which is the displayed inequality of claim 2. [step 1.1, L1]

3.1 Suppose $L^{-} = L^{+}$. Then $L^{-} \le f(c) \le L^{+} = L^{-}$ forces $L^{-} = f(c) = L^{+}$, so both one-sided limits equal $f(c)$; hence $\lim_{x \to c} f(x)$ exists and equals $f(c)$, and $f$ is continuous at $c$. [step 2.2, L2, L3]

3.2 Suppose conversely that $f$ is continuous at $c$. Since $c$ is a limit point of $I^{-}$ and hence of $I$, continuity gives $\lim_{x \to c} f(x) = f(c)$, and then both one-sided limits exist and equal $f(c)$; in particular $L^{-} = L^{+}$. [step 2.2, L1, L2, L3]

4.1 Claim 2 is proved by steps 3.1 and 3.2 together with step 2.2. [step 2.2, step 3.1, step 3.2]

5.1 Claim 3: at an interior point $c$, $f$ is discontinuous exactly when $L^{-} \ne L^{+}$, and since $L^{-} \le f(c) \le L^{+}$ the only way for them to differ is $L^{-} < L^{+}$. Both one-sided limits exist and differ, so the discontinuity is a jump, of jump $L^{+} - L^{-} > 0$. [step 2.2, step 4.1, L4] ∎

## Remarks

- **Nothing here counts the discontinuities.** Claim 3 says only what a discontinuity of a monotone function looks like at an interior point. That the set of them is at most countable is a further theorem, [[thm-froda]], and its proof is exactly the observation that the open intervals $(\lim_{x \to c^{-}} f(x), \lim_{x \to c^{+}} f(x))$ attached to distinct discontinuities are disjoint.

- **Why no interior discontinuity of a monotone function is removable.** Claim 2 rules them out at interior points: there $L^{-} = L^{+}$ already forces continuity, because the inequality $L^{-} \le f(c) \le L^{+}$ pins $f(c)$ between the two one-sided values. That inequality is special to monotone functions, and it is what makes *jump* the only kind of interior discontinuity available. At a point of $I$ that is not interior the inequality is one-sided too and the argument does not apply, so a monotone function may fail to be continuous at an endpoint of $I$ while having its one one-sided limit; that failure is a discontinuity of the first kind and it is not a jump, there being only one side to compare.
````

### `thm-monotone-one-sided-limits-exist`

````markdown
---
id: thm-monotone-one-sided-limits-exist
kind: theorem
title: "One-sided limits of a monotone function always exist: for $f$ nondecreasing on an interval $I$ and $c \\in I$, $\\lim_{x \\to c^{-}} f(x) = \\sup\\{f(x) : x \\in I,\\ x < c\\}$ whenever $I$ has points below $c$, $\\lim_{x \\to c^{+}} f(x) = \\inf\\{f(x) : x \\in I,\\ x > c\\}$ whenever it has points above $c$, and these satisfy $\\lim_{x \\to c^{-}} f(x) \\le f(c) \\le \\lim_{x \\to c^{+}} f(x)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
  evidence: semantic-source
deps: [def-monotone-function, def-one-sided-limits, def-function-limit, lem-function-limit-unique, def-limit-point-r, def-interval, lem-sup-epsilon, lem-inf-epsilon, def-bounded-set, def-infimum, thm-infimum-property, def-complete-ordered-field, def-neighbourhood-r]
justified_by: []
aliases: [thm-monotone-one-sided-limits]
landmark: true
short: "monotone: one-sided limits exist"
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
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Monotone Functions (Analysis WebNotes)"
      url: "https://mathcs.org/analysis/reals/cont/defs/monofun.html"
    - title: "Discontinuities of monotone functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]), let
$f : I \to \mathbb{R}$ be nondecreasing ([[def-monotone-function]]) and let
$c \in I$. Write

$$I^{-} := I \cap (-\infty, c), \qquad I^{+} := I \cap (c, \infty)$$

([[def-one-sided-limits]]).

1. **Left.** If $I^{-} \ne \varnothing$ then $c$ is a limit point of $I^{-}$
   ([[def-limit-point-r]]), the set $\{\, f(x) : x \in I^{-} \,\}$ is nonempty
   and bounded above by $f(c)$, and
   $$\lim_{x \to c^{-}} f(x) \;=\; \sup\{\, f(x) : x \in I,\ x < c \,\} \;\le\; f(c) .$$
2. **Right.** If $I^{+} \ne \varnothing$ then $c$ is a limit point of $I^{+}$,
   the set $\{\, f(x) : x \in I^{+} \,\}$ is nonempty and bounded below by
   $f(c)$, and
   $$\lim_{x \to c^{+}} f(x) \;=\; \inf\{\, f(x) : x \in I,\ x > c \,\} \;\ge\; f(c) .$$
3. **Together.** If both $I^{-}$ and $I^{+}$ are nonempty then
   $$\lim_{x \to c^{-}} f(x) \;\le\; f(c) \;\le\; \lim_{x \to c^{+}} f(x) .$$

In particular a nondecreasing function on an interval has, at every point of
that interval, every one-sided limit that is well posed at all: no hypothesis of
continuity, of boundedness, or of any other kind is needed.

**The nonincreasing case is not a separate theorem.** If $g : I \to \mathbb{R}$
is nonincreasing then $-g$ is nondecreasing ([[def-monotone-function]]), and a
real $L$ is the left limit of $-g$ at $c$ exactly when $-L$ is the left limit of
$g$ at $c$, since $|(-g)(x) - L| = |g(x) - (-L)|$; so claims 1 to 3 hold for $g$
with the suprema and infima exchanged and the inequalities reversed.

**Order-convexity of $I$ is what makes the limits well posed.** Without it the
symbol $\lim_{x \to c^{-}} f(x)$ need not be defined even though $I^{-}$ is
nonempty: for $I = \{0\} \cup [1,2]$ and $c = 1$ the set $I^{-} = \{0\}$ is
nonempty but $1$ is not a limit point of it, and [[def-one-sided-limits]] leaves
the symbol undefined there for exactly that reason.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$, a nondecreasing $f : I \to \mathbb{R}$, and $c \in I$.

[A1] $f(x) \le f(y)$ for all $x, y \in I$ with $x \le y$ ([[def-monotone-function]]).

[A2] $I$ is order-convex: $x, y \in I$ and $x \le z \le y$ imply $z \in I$ ([[def-interval]]).

[L1] Every nonempty subset of $\mathbb{R}$ that is bounded above has a least upper bound, and every nonempty subset bounded below has a greatest lower bound ([[def-complete-ordered-field]], [[def-bounded-set]], [[def-infimum]], [[thm-infimum-property]]).

[L2] For $S$ nonempty and bounded above with upper bound $u$: $u = \sup S$ if and only if for every real $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]). Dually, for $S$ nonempty and bounded below with lower bound $\ell$: $\ell = \inf S$ if and only if for every real $\varepsilon > 0$ there is $s \in S$ with $s < \ell + \varepsilon$ ([[lem-inf-epsilon]]).

[L3] $\lim_{x \to c^{-}} f(x) = L$ means: $c$ is a limit point of $I^{-}$, and for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - L| < \varepsilon$ for every $x \in I$ with $c - \delta < x < c$; dually on the right ([[def-one-sided-limits]], [[def-function-limit]], [[def-neighbourhood-r]]).

[L4] $x$ is a limit point of a set $S$ when every punctured neighbourhood of $x$ meets $S$ ([[def-limit-point-r]], [[def-neighbourhood-r]]); a one-sided limit, being the limit of a restriction, is unique when it exists ([[lem-function-limit-unique]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $I^{-} \ne \varnothing$ and fix $a \in I$ with $a < c$; then $[a,c] \subseteq I$, since any $z$ with $a \le z \le c$ lies in $I$. [A2]

1.2 Claim 2 is the same argument on the other side, and is written out here rather than deduced. Suppose $I^{+} \ne \varnothing$ and fix $b \in I$ with $c < b$; then $[c,b] \subseteq I$, and for real $\delta > 0$ the point $\min\{b, c + \delta/2\}$ lies in $I^{+}$ within $\delta$ of $c$, so $c$ is a limit point of $I^{+}$. [A2, L4]

2.1 Every real $\delta > 0$ gives a point of $I^{-}$ within $\delta$ of $c$ and different from $c$: put $z := \max\{a, c - \delta/2\}$, so that $a \le z < c$ and $c - z \le \delta/2 < \delta$, and $z \in I$ by step 1.1. Hence $c$ is a limit point of $I^{-}$ and the symbol on the left of claim 1 is well posed. [step 1.1, L4]

2.2 The set $S^{-} := \{\, f(x) : x \in I,\ x < c \,\}$ is nonempty, since $f(a) \in S^{-}$, and $f(c)$ is an upper bound of it, since $x < c$ gives $f(x) \le f(c)$. So $L := \sup S^{-}$ exists and $L \le f(c)$, the latter because $f(c)$ is an upper bound and $L$ is the least one. [step 1.1, A1, L1]

2.3 The set $S^{+} := \{\, f(x) : x \in I,\ x > c \,\}$ is nonempty and bounded below by $f(c)$, so $M := \inf S^{+}$ exists and $M \ge f(c)$. [step 1.2, A1, L1]

3.1 Let $\varepsilon > 0$ be real. By the epsilon characterisation of the supremum there is $x_0 \in I$ with $x_0 < c$ and $L - \varepsilon < f(x_0)$. [step 2.2, L2]

3.2 Given real $\varepsilon > 0$, the epsilon characterisation of the infimum gives $x_1 \in I$ with $x_1 > c$ and $f(x_1) < M + \varepsilon$; put $\delta := x_1 - c > 0$. For $x \in I$ with $c < x < c + \delta$ we have $c < x < x_1$, so $M \le f(x) \le f(x_1) < M + \varepsilon$ and hence $|f(x) - M| < \varepsilon$. [step 2.3, A1, L2]

4.1 Put $\delta := c - x_0 > 0$ and let $x \in I$ satisfy $c - \delta < x < c$. Then $x_0 < x < c$, so $f(x_0) \le f(x)$ by monotonicity and $f(x) \le L$ because $f(x) \in S^{-}$ and $L$ is an upper bound of $S^{-}$; hence $L - \varepsilon < f(x_0) \le f(x) \le L$ and therefore $|f(x) - L| < \varepsilon$. [step 2.2, step 3.1, A1]

4.2 Claim 2 is proved: $\lim_{x \to c^{+}} f(x) = M = \inf S^{+} \ge f(c)$. [step 1.2, step 2.3, step 3.2, L3, L4]

5.1 Claim 1 is proved: $\varepsilon > 0$ was arbitrary in step 3.1, so $\lim_{x \to c^{-}} f(x) = L = \sup S^{-} \le f(c)$, and this value is the only one the symbol can denote. [step 2.1, step 2.2, step 4.1, L3, L4]

6.1 Claim 3 follows by combining the two inequalities of claims 1 and 2, both of which are then available. [step 5.1, step 4.2] ∎

## Remarks

- **Where completeness is spent.** Exactly once on each side, in the existence of $\sup S^{-}$ and of $\inf S^{+}$; the rest of the proof is the definition of a one-sided limit and the monotonicity hypothesis. Over an ordered field that is not complete the statement fails, because the supremum need not exist.

- **The two one-sided limits need not agree, and that is the point.** When both are defined they satisfy $\lim_{x \to c^{-}} f(x) \le f(c) \le \lim_{x \to c^{+}} f(x)$, and a strict inequality between the outer two is exactly a jump discontinuity; [[thm-monotone-discontinuities-are-jumps]] turns that observation into the classification of the discontinuities of a monotone function, and [[thm-froda]] counts them.
````

### `thm-nonnegative-series-bounded-partial-sums`

````markdown
---
id: thm-nonnegative-series-bounded-partial-sums
kind: theorem
title: "A series of nonnegative terms converges iff its partial sums are bounded, and then the sum is their supremum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-monotone-sequence, thm-monotone-convergence, cor-monotone-converges-iff-bounded, lem-monotone-unbounded-diverges, def-bounded-set, def-finite-sum, lem-finite-sum-laws, def-sequence, def-divergence-to-infinity, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-comparison-needs-nonnegativity]
aliases: []
landmark: true
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.24)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k \ge 0$ for every $k \in \mathbb{N}$,
let $s_n = \sum_{k<n} a_k$ be its partial sums and let
$S = \{\, s_n : n \in \mathbb{N} \,\}$ be the range of $(s_n)$ ([[def-series]]).
Then:

1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \ge 0$ for every
   $n$;
2. $\sum a_k$ converges **if and only if** $S$ is bounded above
   ([[def-bounded-set]]), and in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; \sup S ,$$
   so in particular $s_n \le \sum_{k=0}^{\infty} a_k$ for every $n$;
3. if $S$ is not bounded above then $s_n \to +\infty$
   ([[def-divergence-to-infinity]]) and $\sum a_k$ diverges.

This is the theorem that makes the nonnegative theory work: for terms of one
sign, convergence is a boundedness question and no candidate limit is ever
needed. Every comparison test on this page is an application of it.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k \ge 0$ for every $k$, its partial sums $s_n = \sum_{k<n} a_k$, and the range $S = \{s_n : n \in \mathbb{N}\}$ ([[def-series]], [[def-finite-sum]], [[def-sequence]]).

[L1] The recursion clause of the finite sum: $s_{n+1} = s_n + a_n$ ([[def-finite-sum]]).

[L2] Consecutive comparisons suffice for monotonicity: $(x_k)$ is nondecreasing if and only if $x_k \le x_{k+1}$ for every $k$; and a nondecreasing sequence is bounded below by its first term ([[def-monotone-sequence]]).

[L3] Monotonicity of finite sums: if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$ ([[lem-finite-sum-laws]]).

[L4] A monotone sequence converges if and only if it is bounded, that is if and only if there is $M$ with $|x_k| \le M$ for every $k$ ([[cor-monotone-converges-iff-bounded]], [[def-sequence]]).

[L5] A nondecreasing sequence bounded above converges to the supremum of its range, which exists by the least-upper-bound property ([[thm-monotone-convergence]], [[def-complete-ordered-field]], [[def-bounded-set]]).

[L6] A nondecreasing sequence whose range is not bounded above diverges to $+\infty$ ([[lem-monotone-unbounded-diverges]], [[def-divergence-to-infinity]]).

## Proof

**Proof technique:** direct.

1.1 For every $n$, $s_{n+1} - s_n = a_n \ge 0$, so $s_n \le s_{n+1}$ and $(s_n)$ is nondecreasing. [given, L1, L2]

1.2 For every $n$, $s_n = \sum_{k<n} a_k \ge 0$, all terms being nonnegative. [given, L3]

2.1 Claim 1 is steps 1.1 and 1.2 together. [step 1.1, step 1.2]

2.2 Since $s_n \ge 0$ we have $|s_n| = s_n$, so $(s_n)$ is bounded in the sense of [L4] if and only if $S$ is bounded above. [step 1.2, L4]

3.1 By [L4] applied to the monotone sequence $(s_n)$, the series converges if and only if $(s_n)$ is bounded, hence if and only if $S$ is bounded above. [step 1.1, step 2.2, L4]

4.1 If $S$ is bounded above then $(s_n)$ converges to $\sup S$, so $\sum a_k$ converges with sum $\sup S$; and since $\sup S$ is an upper bound of $S$, $s_n \le \sup S$ for every $n$. [step 1.1, step 3.1, L5]

4.2 If $S$ is not bounded above then $s_n \to +\infty$, and by step 3.1 the series diverges. [step 1.1, step 3.1, L6]

5.1 The equivalence and the identification of the sum as the supremum together make claim 2, and the divergence statement is claim 3. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **"Bounded" and "bounded above" coincide here, and only here.** The equivalence used in step 2.2 rests on $s_n \ge 0$, which rests on every term being nonnegative. For a series with terms of both signs the partial sums can be bounded above and still fail to converge, so nothing in this theorem survives the loss of the sign hypothesis. That failure is exhibited by [[cex-comparison-needs-nonnegativity]] on the companion page.

- **Claim 3 is a strictly stronger statement than "diverges".** Divergence alone permits oscillation ([[def-series]]); for nonnegative terms it cannot occur, and the partial sums necessarily run to $+\infty$. This is what licenses the phrase "the series diverges to $+\infty$" for nonnegative terms, and it is what the Abel-Dini theorem later on this page uses.

- **This criterion is the monotone convergence property, worn differently.** The proof above is monotone convergence for $\mathbb{R}$ applied to the nondecreasing sequence of partial sums, and nothing is lost going back the other way. Given a nondecreasing sequence $(x_n)$ of reals, put $y_n := x_n - x_0 \ge 0$ and let $a_0 := 0$, $a_{k+1} := y_{k+1} - y_k \ge 0$; then $s_{n+1} = y_n$ ([[def-series]]), the partial sums are bounded exactly when $(x_n)$ is bounded above, and claim 1 returns the convergence of $(y_n)$ and so of $(x_n)$. Testing boundedness of partial sums is therefore not a device special to series. Read in the vocabulary of [[def-completeness-properties]] it is the property (MCT), which in an arbitrary ordered field already forces the Archimedean property on its own ([[lem-mct-implies-archimedean]]) and with it the least-upper-bound property ([[lem-mct-implies-lub]]). The translation just given is carried out in $\mathbb{R}$, since [[def-series]] is stated for sequences of reals and this library defines no series over a general ordered field.
````


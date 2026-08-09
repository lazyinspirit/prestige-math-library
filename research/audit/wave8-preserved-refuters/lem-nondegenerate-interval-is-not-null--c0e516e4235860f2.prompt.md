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

- critical risk (11): 21 declared dependencies; 22 cited facts; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language
- top-20 dependency-cone consumer (22 generated manifest edges)

## Target item — `lem-nondegenerate-interval-is-not-null`

Normalized current SHA-256: `fef19072a284dcbfd3288a8282a7c5043c22a376c20d26dbdb88a098e65d2aaa`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-nondegenerate-interval-is-not-null
kind: lemma
title: "A sequence of intervals covering $[a,b]$ has total length at least $b - a$, so no interval of positive length has measure zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-interval-cover-total-length, def-measure-zero-and-content-zero, def-interval, thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, def-bounded-set, thm-geometric-series, def-series, def-finite-sum, lem-finite-sum-laws, thm-nonnegative-series-bounded-partial-sums, def-integer-power, thm-induction-principle, lem-nat-trichotomy, def-nat-order, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero]
aliases: []
landmark: true
short: "countable cover of $[a,b]$ has total length $\\ge b-a$"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$, let $(a_k)_{k \in \mathbb{N}}$ and
$(b_k)_{k \in \mathbb{N}}$ be sequences of reals with $a_k \le b_k$ for every
$k$, and suppose

$$[a,b] \;\subseteq\; \bigcup_{k \in \mathbb{N}} [a_k, b_k] .$$

If $M \in \mathbb{R}$ satisfies $\sum_{k < n} (b_k - a_k) \le M$ for every
$n \in \mathbb{N}$, then

$$M \;\ge\; b - a .$$

Consequently, if $a < b$ then **no subset of $\mathbb{R}$ containing $[a,b]$ has
measure zero** ([[def-measure-zero-and-content-zero]]); in particular none of
the four bounded intervals $[a,b]$, $(a,b)$, $[a,b)$, $(a,b]$ with $a < b$ has
measure zero, so measure zero is not a vacuous notion.

This is the countable strengthening of
[[lem-finite-interval-cover-total-length]], and it is what compactness is spent
on: the countable cover is enlarged to an open one at an arbitrarily small cost
in total length, and [[thm-heine-borel-characterisation-r]] reduces it to a
finite cover, where the finite lemma applies.

## Facts & Assumptions

**Given:** Reals $a \le b$, sequences $(a_k)$ and $(b_k)$ with $a_k \le b_k$ for every $k$ and $[a,b] \subseteq \bigcup_k [a_k,b_k]$, and a real $M$ with $\sum_{k<n}(b_k - a_k) \le M$ for every $n \in \mathbb{N}$. Throughout, $\theta := 2^{-1}$.

[L1] Measure zero: $A$ is null when for every real $\varepsilon > 0$ there is a sequence of closed intervals covering $A$ all of whose partial total lengths are $\le \varepsilon$; a subset of a null set is null ([[def-measure-zero-and-content-zero]]).

[L2] $[c,d] = \{\, x : c \le x \le d \,\}$ has length $d - c \ge 0$ when $c \le d$; $(c,d)$ is the open interval; a closed bounded interval is bounded ([[def-interval]], [[def-bounded-set]]).

[L3] Every open interval $(c,d)$ is an open set and every interval $[c,d]$ is a closed set ([[def-open-and-closed-in-r]], [[def-interval]]).

[L4] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]]); from every family of open sets whose union contains a compact set, either the set is empty and the empty subfamily covers it, or one can extract $m \in \mathbb{N}$ and members $U_0, \dots, U_m$ of the family whose union already contains it ([[def-open-cover-r]]).

[L5] If $[a,b] \subseteq \bigcup_{j \le n}[c_j,d_j]$ with $c_j \le d_j$ and $a \le b$, then $\sum_{j \le n}(d_j - c_j) \ge b - a$; the same holds for covering intervals of any bounded form with those endpoints ([[lem-finite-interval-cover-total-length]]).

[L6] Powers and the geometric series: $\theta^0 = 1$ and $\theta^{k+1} = \theta^k \theta$, all $\theta^k > 0$ for $\theta > 0$, and $\sum_{k=0}^{\infty} \theta^k = 1/(1-\theta) = 2$ for $\theta = 2^{-1}$; a series of nonnegative terms has all its partial sums at most its sum ([[def-integer-power]], [[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L7] Finite sums: additivity, scaling by a constant, splitting, and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L8] Every finite list $k_0, \dots, k_m$ of naturals has an upper bound $K \in \mathbb{N}$: by induction on $m$, taking $K = 0$ for the empty case and replacing $K$ by whichever of $K$ and $k_{m+1}$ is the larger, the order of $\mathbb{N}$ being total ([[thm-induction-principle]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L9] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $0 < t \cdot 2^{-1} < t$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $M < b - a$. Since $\sum_{k<0}(b_k - a_k) = 0$ by [L7], we have $M \ge 0$, so $b - a > 0$ and $a < b$. Put $\varepsilon := (b - a - M) \cdot 2^{-1}$, a positive real by [L9]. [assume-contra, given, L7, L9]

2.1 For $k \in \mathbb{N}$ put $\delta_k := \varepsilon \cdot 4^{-1} \cdot \theta^{k}$, a positive real by [L6] and [L9], and $J_k := (a_k - \delta_k,\ b_k + \delta_k)$. Each $J_k$ is an open set by [L3], and $[a_k,b_k] \subseteq J_k$ because $a_k - \delta_k < a_k \le x \le b_k < b_k + \delta_k$ for $x \in [a_k,b_k]$, by [L2] and [L9]. Hence $[a,b] \subseteq \bigcup_k [a_k,b_k] \subseteq \bigcup_k J_k$, so $\{\, J_k : k \in \mathbb{N} \,\}$ is a family of open sets whose union contains $[a,b]$. The length of the interval with endpoints $a_k - \delta_k$ and $b_k + \delta_k$ is $(b_k - a_k) + 2\delta_k = (b_k - a_k) + \varepsilon \cdot 2^{-1} \cdot \theta^{k}$, by [L2] and [L9]. [step 1.1, given, L2, L3, L6, L9]

3.1 $[a,b]$ is closed and bounded by [L2] and [L3], hence compact by [L4]; so there are $m \in \mathbb{N}$ and members $J_{k_0}, \dots, J_{k_m}$ of the family with $[a,b] \subseteq J_{k_0} \cup \dots \cup J_{k_m}$. By [L8] fix $K \in \mathbb{N}$ with $k_t \le K$ for every $t \le m$; then every $J_{k_t}$ occurs among $J_0, \dots, J_K$, so $[a,b] \subseteq \bigcup_{k \le K} J_k$. [step 2.1, L2, L3, L4, L8, choose]

4.1 By [L5], applied to the $K+1$ intervals $J_k$ with endpoints $a_k - \delta_k \le b_k + \delta_k$, one gets $\sum_{k \le K} \big( (b_k - a_k) + \varepsilon \cdot 2^{-1} \cdot \theta^{k} \big) \ge b - a$. [step 2.1, step 3.1, L5]

5.1 The left-hand side is at most $M + \varepsilon$: by [L7] it splits as $\sum_{k < K+1}(b_k - a_k) + \varepsilon \cdot 2^{-1} \sum_{k < K+1} \theta^{k}$, the first sum is $\le M$ by hypothesis, and the second is $\le \varepsilon \cdot 2^{-1} \cdot 2 = \varepsilon$ by [L6]. So $b - a \le M + \varepsilon = (b - a + M) \cdot 2^{-1} < b - a$ by [L9], which is impossible; the assumption of step 1.1 is untenable and $M \ge b - a$. For the consequence, let $a < b$ and let $A \supseteq [a,b]$ be null; taking $\varepsilon_1 := (b-a) \cdot 2^{-1} > 0$ in [L1] gives a sequence of closed intervals covering $A$, hence covering $[a,b]$, with every partial total length $\le \varepsilon_1$, so what has just been proved gives $(b-a) \cdot 2^{-1} \ge b - a$ and hence $b - a \le 0$ by [L9], contradicting $a < b$. Finally each of $(a,b)$, $[a,b)$, $(a,b]$ and $[a,b]$ with $a < b$ contains $[a', b']$ for $a' := a + (b-a) \cdot 4^{-1}$ and $b' := b - (b-a) \cdot 4^{-1}$, which satisfy $a < a' < b' < b$ by [L9], so none of them is null. [step 1.1, step 2.1, step 4.1, given, L1, L6, L7, L9, discharge-contradiction] ∎

## Remarks

- **What the hypothesis $\sum_{k<n}(b_k - a_k) \le M$ says.** It is the working form of "the total length is at most $M$" recorded in [[def-measure-zero-and-content-zero]]: for nonnegative terms, having all partial sums below $M$ is the same as convergence with sum below $M$. Stating the lemma with partial sums avoids assuming convergence, and the conclusion is therefore also the statement that a cover of $[a,b]$ whose total length diverges is no counterexample.

- **The $\varepsilon$ is spent on making the cover open, not on the estimate.** Enlarging $[a_k,b_k]$ to $(a_k - \delta_k, b_k + \delta_k)$ adds $2\delta_k$ to the $k$-th length, and the geometric choice $\delta_k = \varepsilon \theta^k/4$ makes the whole added amount at most $\varepsilon$, however many intervals are used. This is the standard device and it recurs in [[thm-compact-null-is-content-zero]].

- **Compactness is not optional here.** Without it the finite lemma cannot be reached, and the countable statement is genuinely stronger than the finite one: $\mathbb{Q} \cap [0,1]$ is covered by countably many intervals of total length below any $\varepsilon$, and by no finite family of total length below $1$ ([[cex-null-set-not-of-content-zero]]).
````

## Wave 8 provenance row for the target

```json
{
  "id": "lem-nondegenerate-interval-is-not-null",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
  ],
  "rationale": "The UAF notes give the countable interval-cover argument showing that an interval of positive length is not null, using compactness to pass to a finite subcover. The local proof follows that argument with this library’s series indexing.",
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
      "source": "def-measure-zero-and-content-zero",
      "source_section": "Definition",
      "quote": "- $A$ has **measure zero**, equivalently $A$ is **null**, when for every real $\\varepsilon > 0$ there are sequences $(a_k)_{k \\in \\mathbb{N}}$ and $(b_k)_{k \\in \\mathbb{N}}$ of reals with $a_k \\le b_k$ for every $k$, such that $$A \\subseteq \\bigcup_{k \\in \\mathbb{N}} [a_k, b_k] \\qquad \\text{and} \\qquad \\sum_{k=0}^{\\infty} (b_k - a_k) \\text{ converges with sum } \\le \\varepsilon .$$ - $A$ has **content zero** when for every real $\\varepsilon > 0$ there are $n \\in \\mathbb{N}$ and reals $a_0 \\le b_0, \\dots, a_n \\le b_n$ with $$A \\subseteq \\bigcup_{j \\le n} [a_j, b_j] \\qquad \\text{and} \\qquad \\sum_{j=0}^{n} (b_j - a_j) \\le \\varepsilon .$$",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "bounded",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq U$. - $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open. - A set is **clopen** when it is both open and closed.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "interval",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-heine-borel-characterisation-r",
      "source_section": "Statement",
      "quote": "Let $K \\subseteq \\mathbb{R}$. Then $K$ is compact ([[def-open-cover-r]]) if and only if $K$ is closed ([[def-open-and-closed-in-r]]) and bounded ([[def-bounded-set]]).",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-open-cover-r",
      "source_section": "Definition",
      "quote": "$K$ is **compact** when every open cover of $K$ has a finite subcover: for every open cover $\\mathcal{U}$ of $K$, either $K = \\varnothing$ and the empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n \\in \\mathcal{U}$ with $$K \\subseteq U_0 \\cup \\dots \\cup U_n .$$",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-finite-interval-cover-total-length",
      "source_section": "Statement",
      "quote": "**The same bound holds for a cover by bounded intervals of any of the four bounded forms**, since an interval with endpoints $c \\le d$ is contained in $[c,d]$ and has the same length $d - c$ ([[def-interval]]); replacing each covering interval by the closed interval on its endpoints changes no length and only enlarges the union. In particular a finite family of intervals of total length strictly below $b - a$ cannot cover $[a,b]$, which is the form in which this lemma is used throughout the page.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "**Integer exponents.** Every integer $m$ ([[def-integers]]) is either",
      "uses": [
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-geometric-series",
      "source_section": "Statement",
      "quote": "Let $r \\in \\mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]), so that $r^0 = 1$ for every $r$, including $r = 0$. 1. If $|r| < 1$ then the series $\\sum r^k$ converges ([[def-series]]) and $$\\sum_{k=0}^{\\infty} r^{k} \\;=\\; \\frac{1}{1-r} .$$ 2. If $|r| \\ge 1$ then $\\sum r^k$ diverges. The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular $\\sum_{k=0}^{\\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to $1$. Which starting index is meant has to be said, and it is said here.",
      "uses": [
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial",
      "uses": [
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with $a_k \\ge 0$ for every $k \\in \\mathbb{N}$, let $s_n = \\sum_{k<n} a_k$ be its partial sums and let $S = \\{\\, s_n : n \\in \\mathbb{N} \\,\\}$ be the range of $(s_n)$ ([[def-series]]). Then: 1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \\ge 0$ for every $n$; 2. $\\sum a_k$ converges **if and only if** $S$ is bounded above ([[def-bounded-set]]), and in that case $$\\sum_{k=0}^{\\infty} a_k \\;=\\; \\sup S ,$$ so in particular $s_n \\le \\sum_{k=0}^{\\infty} a_k$ for every $n$; 3. if $S$ is not bounded above then $s_n \\to +\\infty$ ([[def-divergence-to-infinity]]) and $\\sum a_k$ diverges. This is the theorem that makes the nonnegative theory work: for terms of one sign, convergence is a boundedness question and no candidate limit is ever needed. Every comparison test on this page is an application of it.",
      "uses": [
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the",
      "uses": [
        "1.1",
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let $\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and finite products as in [[def-finite-sum]]. Then: 1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$. 2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]). 3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$. 4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$. 5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$. 6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "uses": [
        "1.1",
        "5.1"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "This is the induction principle, the basis of proof by induction.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-nat-trichotomy",
      "source_section": "Statement",
      "quote": "For all $m, n \\in \\mathbb{N}$ exactly one of $m < n$, $m = n$, $m > n$ holds. In particular the order ([[def-nat-order]]) is total.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-nat-order",
      "source_section": "Definition",
      "quote": "$$m \\le n \\iff \\exists k \\in \\mathbb{N}\\ (m + k = n),$$ and the **strict order** by $m < n \\iff (m \\le n \\text{ and } m \\neq n)$, using addition ([[def-nat-addition]]).",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L9",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity satisfies $0 < 1$;",
      "uses": [
        "1.1",
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b, c, d \\in F$. 1. **Translation invariance.** If $a < b$ then $a + c < b + c$. 2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.1",
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b, c \\in F$. 1. If $a > 0$ and $b > 0$ then $ab > 0$. 2. If $a > 0$ and $b < 0$ then $ab < 0$. 3. If $a < 0$ and $b < 0$ then $ab > 0$. 4. If $c > 0$ then $a < b \\iff ac < bc$. 5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.1",
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "ordered field",
      "uses": [
        "1.1",
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.",
      "uses": [
        "1.1",
        "2.1",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Suppose, for contradiction, that $M < b - a$. Since $\\sum_{k<0}(b_k - a_k) = 0$ by [L7], we have $M \\ge 0$, so $b - a > 0$ and $a < b$. Put $\\varepsilon := (b - a - M) \\cdot 2^{-1}$, a positive real by [L9].",
      "step": "1.1",
      "inputs": [
        "assume-contra",
        "given",
        "L7",
        "L9"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "For $k \\in \\mathbb{N}$ put $\\delta_k := \\varepsilon \\cdot 4^{-1} \\cdot \\theta^{k}$, a positive real by [L6] and [L9], and $J_k := (a_k - \\delta_k,\\ b_k + \\delta_k)$. Each $J_k$ is an open set by [L3], and $[a_k,b_k] \\subseteq J_k$ because $a_k - \\delta_k < a_k",
      "step": "2.1",
      "inputs": [
        "1.1",
        "given",
        "L2",
        "L3",
        "L6",
        "L9"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "$[a,b]$ is closed and bounded by [L2] and [L3], hence compact by [L4]; so there are $m \\in \\mathbb{N}$ and members $J_{k_0}, \\dots, J_{k_m}$ of the family with $[a,b] \\subseteq J_{k_0} \\cup \\dots \\cup J_{k_m}$. By [L8] fix $K \\in \\mathbb{N}$ with $k_t \\le K$ f",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L2",
        "L3",
        "L4",
        "L8",
        "choose"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "By [L5], applied to the $K+1$ intervals $J_k$ with endpoints $a_k - \\delta_k \\le b_k + \\delta_k$, one gets $\\sum_{k \\le K} \\big( (b_k - a_k) + \\varepsilon \\cdot 2^{-1} \\cdot \\theta^{k} \\big) \\ge b - a$.",
      "step": "4.1",
      "inputs": [
        "2.1",
        "3.1",
        "L5"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "The left-hand side is at most $M + \\varepsilon$: by [L7] it splits as $\\sum_{k < K+1}(b_k - a_k) + \\varepsilon \\cdot 2^{-1} \\sum_{k < K+1} \\theta^{k}$, the first sum is $\\le M$ by hypothesis, and the second is $\\le \\varepsilon \\cdot 2^{-1} \\cdot 2 = \\varepsilo",
      "step": "5.1",
      "inputs": [
        "1.1",
        "2.1",
        "4.1",
        "given",
        "L1",
        "L6",
        "L7",
        "L9",
        "discharge-contradiction"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The Statement concerns a sequence indexed by N covering the nonempty closed interval [a,b] with a≤b; there is no empty index family."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.1 uses the n=0 empty partial sum to infer M≥0."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "No scalar, cardinal, index, or exponent in the Statement of `lem-nondegenerate-interval-is-not-null` has a one boundary requiring a separate argument."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 1.1 shows that a=b makes the desired inequality M≥b-a immediate; step 5.1 imposes a<b only for the non-nullity consequence."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 2.1 enlarges each closed interval without losing endpoints, and step 5.1 separately covers open, closed, and half-open interval conventions."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 establishes $a<b$ before step 3.1 applies compactness to $[a,b]$; hence the compact set is nonempty and [L4] licenses the listed finite-subcover alternative."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `lem-nondegenerate-interval-is-not-null` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `lem-nondegenerate-interval-is-not-null` is not an equivalence, so it has no reverse iff direction."
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
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-finite-interval-cover-total-length",
    "declared_target": "lem-finite-interval-cover-total-length",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-measure-zero-and-content-zero",
    "declared_target": "def-measure-zero-and-content-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-heine-borel-characterisation-r",
    "declared_target": "thm-heine-borel-characterisation-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-nat-trichotomy",
    "declared_target": "lem-nat-trichotomy",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-nat-order",
    "declared_target": "def-nat-order",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cor-of-one-positive",
    "declared_target": "cor-of-one-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-of-add-order",
    "declared_target": "lem-of-add-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-of-sign-rules",
    "declared_target": "lem-of-sign-rules",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-nondegenerate-interval-is-not-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cex-null-set-not-of-content-zero",
    "declared_target": "cex-null-set-not-of-content-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero-examples",
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

## Full text of every cited or declared item (23)

### `cex-null-set-not-of-content-zero`

````markdown
---
id: cex-null-set-not-of-content-zero
kind: counterexample
title: "$\\mathbb{Q} \\cap [0,1]$ has measure zero and not content zero, although it is bounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-null-implies-content-zero, lem-finite-interval-cover-total-length, lem-countable-sets-are-null, def-measure-zero-and-content-zero, thm-rationals-countable, lem-subset-of-countable, lem-q-and-irrationals-dense-r, lem-rat-embeds-dense, thm-open-set-algebra-r, thm-closure-characterisations-r, def-open-and-closed-in-r, def-interval, def-countable, thm-compact-null-is-content-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
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
    - title: "Jordan measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jordan_measure"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every set of measure zero has content zero
([[fs-null-implies-content-zero]]).

The witness is $E := \mathbb{Q}_{\mathbb{R}} \cap [0,1]$, the rationals of the
unit interval ([[lem-rat-embeds-dense]], [[def-interval]]). It is at most
countable, hence null; it is bounded; and every finite family of intervals
covering it has total length at least $1$, because the union of finitely many
closed intervals is closed and contains the closure of $E$, which is all of
$[0,1]$. The refutation is carried out in full in
[[fs-null-implies-content-zero]]; this item records the witness and says what
makes it work.

## Facts & Assumptions

**Given:** The set $E = \mathbb{Q}_{\mathbb{R}} \cap [0,1]$.

[A1] The refuted claim: every subset of $\mathbb{R}$ of measure zero has content zero.

[L1] $E$ is at most countable, being a subset of the countable set $\mathbb{Q}_{\mathbb{R}}$, and therefore null ([[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]], [[lem-rat-embeds-dense]], [[lem-countable-sets-are-null]]).

[L2] Every point of $[0,1]$ is adherent to $E$, so any closed set containing $E$ contains $[0,1]$; and a finite union of closed intervals is closed ([[fs-null-implies-content-zero]], [[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[thm-open-set-algebra-r]], [[def-open-and-closed-in-r]], [[def-interval]]).

[L3] A finite family of closed intervals covering $[0,1]$ has total length at least $1$ ([[lem-finite-interval-cover-total-length]]).

[L4] Content zero means a finite cover of total length below every positive $\varepsilon$; on compact sets content zero and measure zero coincide ([[def-measure-zero-and-content-zero]], [[thm-compact-null-is-content-zero]]).

## Counterexample

**Proof technique:** direct.

1.1 $E$ has measure zero by [L1], and $E \subseteq [0,1]$ is bounded. [L1]

1.2 Any finite family of closed intervals covering $E$ has total length at least $1$: its union is closed by [L2] and contains $E$, hence contains $[0,1]$ by [L2], and [L3] applies. [L2, L3]

2.1 So $E$ does not have content zero, since a witness at $\varepsilon = 2^{-1}$ would give a finite cover of total length at most $2^{-1} < 1$; $E$ therefore witnesses the failure of [A1]. [step 1.1, step 1.2, A1, L4] ∎

## Remarks

- **Boundedness is not what is missing.** $E$ is bounded, and its failure is as
  large as it can be: no finite cover does better than the trivial cover of
  $[0,1]$ by itself. What $E$ lacks is closedness, and hence compactness; adding
  it repairs the implication completely ([[thm-compact-null-is-content-zero]]).

- **The closure is the whole obstruction.** Content zero is insensitive to
  passing to the closure, since a finite union of closed intervals is closed,
  whereas measure zero is not: $E$ is null and $\overline{E} = [0,1]$ is not
  ([[lem-nondegenerate-interval-is-not-null]]). That single asymmetry is the
  entire difference between the two notions.

- **Compare the compact case.** The Cantor set is uncountable and null, and being
  compact it also has content zero ([[thm-cantor-set-properties]]). So the failure
  here is not about cardinality: a much larger null set can have content zero,
  and a countable one need not.
````

### `cor-of-one-positive`

````markdown
---
id: cor-of-one-positive
kind: corollary
title: "The multiplicative identity is positive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-of-square-positive, def-field]
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
    - title: "Elias Zakon, Mathematical Analysis: Axioms and Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.01%3A_Axioms_and_Basic_Definitions"
pipeline_run: null
proof_strategy: direct
---

## Statement

In any ordered field $F$ with positive cone $P$, the multiplicative identity
satisfies $0 < 1$; that is, $1 \in P$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$ and multiplicative identity $1$ ([[def-field]]).

[L1] In any field $1 \neq 0$ ([[def-field]]).

[L2] For every $x \neq 0$ the square satisfies $x^2 > 0$ ([[lem-of-square-positive]]).

[L3] The identity axiom gives $1 = 1 \cdot 1 = 1^2$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 By the field axioms $1 \neq 0$, and $1 = 1 \cdot 1 = 1^2$. [L1, L3]

2.1 Since $1 \neq 0$, applying the square lemma with $x = 1$ gives $1^2 > 0$. [step 1.1, L2]

3.1 Because $1 = 1^2$, it follows that $1 > 0$, i.e. $0 < 1$. [step 2.1, step 1.1, L3] ∎
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

### `def-measure-zero-and-content-zero`

````markdown
---
id: def-measure-zero-and-content-zero
kind: definition
title: "Measure zero (a countable cover by intervals of total length below every $\\varepsilon$) and content zero (a finite such cover)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interval, def-series, def-countable, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero]
aliases: [def-null-set]
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
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "Jordan measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jordan_measure"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), intervals and their lengths are as in
[[def-interval]], and a *sequence* is a function on $\mathbb{N}$, which contains
$0$. Let $A \subseteq \mathbb{R}$.

- $A$ has **measure zero**, equivalently $A$ is **null**, when for every real
  $\varepsilon > 0$ there are sequences $(a_k)_{k \in \mathbb{N}}$ and
  $(b_k)_{k \in \mathbb{N}}$ of reals with $a_k \le b_k$ for every $k$, such
  that
  $$A \subseteq \bigcup_{k \in \mathbb{N}} [a_k, b_k] \qquad \text{and} \qquad \sum_{k=0}^{\infty} (b_k - a_k) \text{ converges with sum } \le \varepsilon .$$
- $A$ has **content zero** when for every real $\varepsilon > 0$ there are
  $n \in \mathbb{N}$ and reals $a_0 \le b_0, \dots, a_n \le b_n$ with
  $$A \subseteq \bigcup_{j \le n} [a_j, b_j] \qquad \text{and} \qquad \sum_{j=0}^{n} (b_j - a_j) \le \varepsilon .$$

The number $b_k - a_k \ge 0$ is the length of $[a_k,b_k]$ ([[def-interval]]), and
the sums are the series and the finite sums of [[def-series]] and
[[def-finite-sum]].

**Working form: only the partial sums have to be checked.** All the terms
$b_k - a_k$ are $\ge 0$, so by claim 2 of
[[thm-nonnegative-series-bounded-partial-sums]] the series converges exactly when
its partial sums are bounded above, and its sum is then their supremum.
Consequently, for a fixed $\varepsilon > 0$,

$$\sum_{k=0}^{\infty}(b_k - a_k) \text{ converges with sum} \le \varepsilon \quad \Longleftrightarrow \quad \sum_{k<n} (b_k - a_k) \le \varepsilon \ \text{ for every } n \in \mathbb{N},$$

since a supremum is $\le \varepsilon$ exactly when $\varepsilon$ is an upper
bound of the set it is the supremum of ([[def-complete-ordered-field]]). Every
verification of nullity below checks the right-hand condition.

**Closed intervals lose nothing.** A bounded interval with endpoints
$a \le b$ is contained in $[a,b]$ and has the same length ([[def-interval]]), so
a cover by intervals of any of the four bounded forms yields a cover by closed
intervals with the same lengths. The definition is therefore stated with closed
intervals once and for all. Covers by *open* intervals are a genuinely different
demand, and passing to one costs a little extra length: the enlargement
$[a_k,b_k] \subseteq (a_k - \delta_k,\ b_k + \delta_k)$ is carried out where it is
needed, in [[lem-nondegenerate-interval-is-not-null]] and in
[[thm-compact-null-is-content-zero]].

**Both notions are inherited by subsets.** If $B \subseteq A$ and $A$ is null,
then any cover of $A$ covers $B$, so $B$ is null; the same sentence with finite
covers shows a subset of a set of content zero has content zero.

**A finite cover is a countable cover, so content zero implies measure zero.**
Padding the list $[a_0,b_0], \dots, [a_n,b_n]$ with the degenerate intervals
$[0,0]$ for $k > n$ leaves the total length unchanged, by the splitting law for
finite sums ([[lem-finite-sum-laws]]). This is recorded as a lemma with its
proof, [[lem-content-zero-implies-null]], because it is cited on its own.

## Remarks

- **The two notions genuinely differ.** $\mathbb{Q} \cap [0,1]$ is null and does
  not have content zero ([[cex-null-set-not-of-content-zero]]), so the two
  quantifier patterns, "a sequence of intervals" and "a finite list of
  intervals", are not interchangeable. They do agree for compact sets
  ([[thm-compact-null-is-content-zero]]), and the compact case is the only one in
  which content zero is used anywhere on this pair of pages. Nothing is claimed
  about what later pages will do with it.

- **Why "content" and not "measure" for the finite version.** The finite-cover
  notion is the vanishing of the Jordan outer content, and the countable-cover
  notion is the vanishing of the Lebesgue outer measure. Neither outer quantity
  is defined in this library, and no item here assigns a nonzero size to any set:
  every statement is of the shape "can, or cannot, be covered by intervals of
  total length below such and such a bound". That is a deliberate restriction of
  scope at this point in the reading order, not a claim that the general notions
  are unavailable in mathematics.

- **Measure zero is not vacuous and not universal.** No interval with two
  distinct endpoints is null ([[lem-nondegenerate-interval-is-not-null]]), while
  every at most countable set is ([[lem-countable-sets-are-null]]) and so is the
  uncountable Cantor set ([[thm-cantor-set-properties]]). The three facts
  together are what make the notion worth having.
````

### `def-nat-order`

````markdown
---
id: def-nat-order
kind: definition
title: "Order on the natural numbers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-numbers, def-nat-addition]
aliases: []
landmark: false
short: "$m\\le n\\iff\\exists k\\,(m+k=n)$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §2.2 (Ordering of the naturals)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Definition

For $m, n \in \mathbb{N}$, define the **order** by

$$m \le n \iff \exists k \in \mathbb{N}\ (m + k = n),$$

and the **strict order** by $m < n \iff (m \le n \text{ and } m \neq n)$, using
addition ([[def-nat-addition]]).

## Remarks

Read $m \le n$ as "$n$ is $m$ plus something": the gap $k$ with $m + k = n$ is
unique when it exists (by commutativity and cancellation,
[[lem-nat-add-commutative]], [[lem-nat-add-cancellative]]) and is
written $n - m$ once subtraction is available. That $\le$ is genuinely a linear
order, reflexive, antisymmetric, transitive, and total, is proved in
[[thm-nat-linear-order]] and [[lem-nat-trichotomy]]; compatibility with the
arithmetic ([[lem-nat-order-add-compatible]],
[[lem-nat-order-mult-compatible]]) and discreteness
($m < n \iff \sigma(m) \le n$, [[lem-nat-discrete]]) follow.

In the von Neumann model this order coincides with membership and inclusion:
$m \le n \iff m \subseteq n$ and $m < n \iff m \in n$, matching the picture of
each natural number as the set $\{0, 1, \dots, n-1\}$ of its predecessors
([[def-natural-numbers]]). That coincidence is not proved here; it is derived
from the additive definition above on a later page. The least-element property of every nonempty subset,
the **well-ordering principle** ([[thm-well-ordering-principle]]), is the deepest
consequence.
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

### `lem-finite-interval-cover-total-length`

````markdown
---
id: lem-finite-interval-cover-total-length
kind: lemma
title: "If finitely many intervals cover a closed bounded interval $[a,b]$, the sum of their lengths is at least $b - a$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-interval, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "finite cover of $[a,b]$ has total length $\\ge b-a$"
proof_strategy: induction
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$, let $n \in \mathbb{N}$, and let
$c_0 \le d_0, \ \dots, \ c_n \le d_n$ be reals such that

$$[a,b] \;\subseteq\; \bigcup_{j \le n} [c_j, d_j] ,$$

the intervals being those of [[def-interval]]. Then

$$\sum_{j=0}^{n} (d_j - c_j) \;\ge\; b - a .$$

**The same bound holds for a cover by bounded intervals of any of the four
bounded forms**, since an interval with endpoints $c \le d$ is contained in
$[c,d]$ and has the same length $d - c$ ([[def-interval]]); replacing each
covering interval by the closed interval on its endpoints changes no length and
only enlarges the union. In particular a finite family of intervals of total
length strictly below $b - a$ cannot cover $[a,b]$, which is the form in which
this lemma is used throughout the page.

This is the one quantitative fact underlying everything about measure zero here.
Without it nothing forbids a set of measure zero from being all of $[0,1]$.
Four items on this page rest on it: [[lem-nondegenerate-interval-is-not-null]]
directly, and through that lemma [[thm-cantor-set-properties]],
[[thm-fat-cantor-set-has-positive-measure]] and
[[fs-null-implies-content-zero]]. Two of the worked items on the companion page
rest on it as well.

## Facts & Assumptions

**Given:** For $n \in \mathbb{N}$ let $P(n)$ be the assertion: for all reals $a \le b$ and all reals $c_0 \le d_0, \dots, c_n \le d_n$ with $[a,b] \subseteq \bigcup_{j \le n}[c_j,d_j]$, one has $\sum_{j \le n}(d_j - c_j) \ge b - a$. The lemma is that $P(n)$ holds for every $n \in \mathbb{N}$.

[L1] $[c,d] = \{\, x : c \le x \le d \,\}$, its length is $d - c \ge 0$ when $c \le d$, and $[a,b]$ is nonempty exactly when $a \le b$ ([[def-interval]]).

[L2] Finite sums: $\sum_{j \le n} t_j = \sum_{j < n+1} t_j$ with $\sum_{j<0} t_j = 0$ and $\sum_{j<m+1} t_j = \sum_{j<m} t_j + t_m$; sums split as $\sum_{j<m} t_j = \sum_{j<i} t_j + \sum_{j=i}^{m-1} t_j$ for $i \le m$, where $\sum_{j=i}^{m-1} t_j = \sum_{l < m-i} t_{i+l}$; a sum of nonnegative terms is nonnegative, and each single term is at most the whole sum ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L4] Ordered-field arithmetic: $0 < 1$, so $2 := 1 + 1 > 0$ and $0 < t \cdot 2^{-1} < t$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** induction.

1.1 The assertion to be proved is $P(n)$ for every $n \in \mathbb{N}$, with $P$ as in the Given, and the argument is an induction on $n$ using [L3]. [given, L3, induction]

1.2 **Base, $n = 0$.** Let $a \le b$ and $[a,b] \subseteq [c_0,d_0]$ with $c_0 \le d_0$. Then $a \in [a,b]$ and $b \in [a,b]$ by [L1], so $c_0 \le a$ and $b \le d_0$, whence $d_0 - c_0 \ge b - a$ by [L4]; and $\sum_{j \le 0}(d_j - c_j) = d_0 - c_0$ by [L2]. So $P(0)$ holds. [base, L1, L2, L4]

1.3 **Induction hypothesis.** Fix $n \in \mathbb{N}$ and assume $P(n)$. [ih, given]

2.1 **The induction step: the two easy cases.** Let $a \le b$ and let $c_0 \le d_0, \dots, c_{n+1} \le d_{n+1}$ satisfy $[a,b] \subseteq \bigcup_{j \le n+1}[c_j,d_j]$; write $S := \sum_{j \le n+1}(d_j - c_j)$, a sum of nonnegative terms by [L1]. If $a = b$ then $b - a = 0 \le S$ by [L2]. Otherwise $a < b$; then $a \in [a,b]$ by [L1], so there is $i \le n+1$ with $a \in [c_i,d_i]$, that is $c_i \le a \le d_i$, and we fix one such $i$. If $d_i \ge b$ then $d_i - c_i \ge b - a$ by [L4], and $d_i - c_i \le S$ by [L2], so $S \ge b - a$. There remains the case $a < b$ and $d_i < b$. [step 1.1, L1, L2, L4, choose]

3.1 **The induction step: the remaining case, where the $i$-th interval is deleted.** Assume $a < b$ and $d_i < b$, and define $n+1$ pairs by $(c'_l, d'_l) := (c_l, d_l)$ for $l < i$ and $(c'_l, d'_l) := (c_{l+1}, d_{l+1})$ for $i \le l \le n$; by the splitting law and the index-shift convention of [L2], $S' := \sum_{l \le n}(d'_l - c'_l) = S - (d_i - c_i)$. Let $\eta$ be any real with $0 < \eta \le b - d_i$ and put $c := d_i + \eta$, so $d_i < c \le b$. Every $x \in [c,b]$ satisfies $x \ge c > d_i$, hence $x \notin [c_i,d_i]$ by [L1], and satisfies $a \le d_i < x \le b$, hence $x \in [a,b]$; so $x$ lies in some $[c_j,d_j]$ with $j \ne i$, that is in some $[c'_l,d'_l]$. Thus $[c,b] \subseteq \bigcup_{l \le n}[c'_l,d'_l]$ with $c \le b$, and step 1.3 gives $S' \ge b - c = b - d_i - \eta$. [step 1.3, step 2.1, L1, L2, L4]

4.1 **Passing to the limiting value of $\eta$, and the conclusion.** In the case of step 3.1 one has $S' \ge b - d_i$: were $S' < b - d_i$, the real $\eta_0 := (b - d_i - S') \cdot 2^{-1}$ would satisfy $0 < \eta_0 < b - d_i$ by [L4], so step 3.1 would give $S' \ge b - d_i - \eta_0 = (b - d_i + S') \cdot 2^{-1} > S'$, which is impossible. Hence $S = (d_i - c_i) + S' \ge (d_i - a) + (b - d_i) = b - a$ by [L4], using $c_i \le a$ from step 2.1. Together with the cases settled in step 2.1 this proves $P(n+1)$, so by [L3] $P(n)$ holds for every $n \in \mathbb{N}$. [step 2.1, step 3.1, L2, L3, L4, discharge-induction] ∎

## Remarks

- **Why the argument does not simply take $[d_i, b]$.** The point $d_i$ itself may be covered by the deleted interval and by nothing else, so the remaining intervals need not cover $[d_i,b]$. They do cover $[d_i + \eta,\, b]$ for every positive $\eta$, and that is enough: the bound $b - d_i - \eta$ holds for all such $\eta$, and step 4.1 removes the $\eta$. Every attempt to shortcut this step by taking a closed left endpoint at $d_i$ is false as stated.

- **Degenerate covering intervals are allowed and cost nothing.** A pair with $c_j = d_j$ contributes the single point $c_j$ and the length $0$, so a list may always be padded to a longer one, which is what [[lem-content-zero-implies-null]] does.

- **The bound is sharp.** The single interval $[a,b]$ covers $[a,b]$ with total length exactly $b - a$, and no cover does better.

- **This is not the Heine-Borel theorem, and it does not use it.** The lemma is a statement about finitely many intervals and is proved by counting alone; compactness enters only when a countable cover has to be reduced to a finite one, which is what [[lem-nondegenerate-interval-is-not-null]] does with it.
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

### `lem-nat-trichotomy`

````markdown
---
id: lem-nat-trichotomy
kind: lemma
title: "Trichotomy of the order on $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-add-successor-left, lem-nat-add-associative, lem-nat-add-commutative, lem-nat-add-cancellative, lem-nat-nonzero-is-successor, thm-omega-is-peano-system, thm-induction-principle]
aliases: []
landmark: false
short: "exactly one of $<,=,>$"
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
proof_strategy: induction
---

## Statement

For all $m, n \in \mathbb{N}$ exactly one of $m < n$, $m = n$, $m > n$ holds. In particular the order ([[def-nat-order]]) is total.

## Facts & Assumptions

**Given:** The order on $\mathbb{N}$, where $m \le n$ means $\exists k\ (m + k = n)$ and $m < n$ means $m \le n$ with $m \ne n$ ([[def-nat-order]]), and addition with $m + 0 = m$, $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]).

[L1] $0 + k = k$ ([[lem-nat-add-identity]]).

[L2] Left successor law: $\sigma(a) + k = \sigma(a + k)$ ([[lem-nat-add-successor-left]]).

[L3] Addition is associative ([[lem-nat-add-associative]]).

[L4] Every nonzero natural is a successor: $n \ne 0 \Rightarrow n = \sigma(a)$ for some $a$ ([[lem-nat-nonzero-is-successor]]).

[L5] $\sigma(x) \ne 0$ for every $x$ (axiom P1 of [[thm-omega-is-peano-system]]).

[L6] Cancellation: $x + k = y + k \Rightarrow x = y$ ([[lem-nat-add-cancellative]]).

[L7] Addition is commutative ([[lem-nat-add-commutative]]).

## Proof

**Proof technique:** induction.

1.1 At most one of the three holds where equality is involved: $m < n$ forces $m \ne n$ and $m > n$ forces $n \ne m$, so $m = n$ is incompatible with either strict relation. [given]

1.2 The two strict relations are incompatible: if $m < n$ and $m > n$ then $m + j = n$ and $n + i = m$ with $i, j \ne 0$, so $m + (j + i) = (m + j) + i = n + i = m = m + 0$; by commutativity [L7], $(j + i) + m = 0 + m$, so $j + i = 0$ by cancellation [L6]; yet $j = \sigma(a)$ [L4] gives, by the left successor law [L2], $j + i = \sigma(a) + i = \sigma(a + i) \ne 0$ [L5], a contradiction. [given, L2, L3, L4, L5, L6, L7]

1.3 For every $n$ one has $n < \sigma(n)$, since $n + \sigma(0) = \sigma(n + 0) = \sigma(n)$ by the recursion, with $\sigma(0) \ne 0$ [L5]. [given, L5]

1.4 Base case $n = 0$: for arbitrary $m$, either $m = 0$, giving $m = n$, or $m \ne 0$ so $0 + m = m$ [L1] with $m \ne 0$ gives $0 < m$, that is $n < m$; so at least one of $m < n$, $m = n$, $m > n$ holds. [base, L1, L4]

1.5 Inductive hypothesis: fix $n$ and assume that for every $m$ at least one of $m < n$, $m = n$, $m > n$ holds. [ih]

2.1 Successor step: for arbitrary $m$, apply the hypothesis; if $m < n$ then $n = m + k$ with $k \ne 0$, and the recursion gives $m + \sigma(k) = \sigma(m + k) = \sigma(n)$, so $\sigma(n) = m + \sigma(k)$ with $\sigma(k) \ne 0$ [L5], giving $m < \sigma(n)$; if $m = n$ then $m + \sigma(0) = \sigma(m + 0) = \sigma(m) = \sigma(n)$, so $\sigma(n) = m + \sigma(0)$ with $\sigma(0) \ne 0$, giving $m < \sigma(n)$; if $m > n$ then $m = n + i$ with $i \ne 0$, so $i = \sigma(a)$ [L4], and the recursion gives $n + \sigma(a) = \sigma(n + a)$ while the left successor law [L2] gives $\sigma(n) + a = \sigma(n + a)$, so $m = n + \sigma(a) = \sigma(n + a) = \sigma(n) + a$, whence $a = 0$ gives $m = \sigma(n)$ and $a \ne 0$ gives $\sigma(n) < m$; in every case at least one of $m < \sigma(n)$, $m = \sigma(n)$, $m > \sigma(n)$ holds. [step 1.5, given, L2, L4, L5]

3.1 By the induction principle with base 1.4, hypothesis 1.5, and step 2.1, comparability holds for all $m, n$, and with the incompatibilities 1.1 and 1.2 exactly one of $m < n$, $m = n$, $m > n$ holds, so the order is total. [step 1.1, step 1.2, step 1.4, step 2.1, discharge-induction] ∎
````

### `lem-of-add-order`

````markdown
---
id: lem-of-add-order
kind: lemma
title: "Order is preserved by adding a constant and by adding inequalities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field]
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
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c, d \in F$.

1. **Translation invariance.** If $a < b$ then $a + c < b + c$.
2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c, d \in F$.

[L1] For $x, y \in F$, the relation $x < y$ means $y - x \in P$ ([[def-ordered-field]]).

[L2] $P$ is closed under addition: if $u, v \in P$ then $u + v \in P$ (axiom O2 of [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a < b$; by the definition of the order this means $b - a \in P$. [assume-hyp, L1]

1.2 For every $c \in F$ the field identities give $(b + c) - (a + c) = b - a$. [algebra]

1.3 Assume moreover $c < d$; by the definition of the order this means $d - c \in P$. [assume-hyp, L1]

1.4 The field identities give $(b + d) - (a + c) = (b - a) + (d - c)$. [algebra]

2.1 Hence $(b + c) - (a + c) = b - a \in P$, which is exactly $a + c < b + c$, proving claim 1. [step 1.1, step 1.2, L1]

2.2 Since $b - a \in P$ and $d - c \in P$, closure under addition gives $(b - a) + (d - c) \in P$. [step 1.1, step 1.3, L2]

3.1 Therefore $(b + d) - (a + c) = (b - a) + (d - c) \in P$, which is exactly $a + c < b + d$, proving claim 2. [step 1.4, step 2.2, L1] ∎
````

### `lem-of-sign-rules`

````markdown
---
id: lem-of-sign-rules
kind: lemma
title: "Sign rules for products and monotonicity of multiplication"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, lem-of-mult-neg, lem-of-zero-mult]
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
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c \in F$.

1. If $a > 0$ and $b > 0$ then $ab > 0$.
2. If $a > 0$ and $b < 0$ then $ab < 0$.
3. If $a < 0$ and $b < 0$ then $ab > 0$.
4. If $c > 0$ then $a < b \iff ac < bc$.
5. If $c < 0$ then $a < b \iff bc < ac$ (multiplication by a negative reverses order).

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c \in F$.

[L1] For $x, y \in F$: $x < y \iff y - x \in P$; $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and (trichotomy) for each $x$ exactly one of $x \in P$, $x = 0$, $-x \in P$ holds, so $0 \notin P$ and $x \in P \Rightarrow x \neq 0$ ([[def-ordered-field]]).

[L2] $P$ is closed under multiplication: if $u, v \in P$ then $uv \in P$ (axiom O2 of [[def-ordered-field]]).

[L3] In any field, $(-u)v = -(uv)$ and $(-u)(-v) = uv$ ([[lem-of-mult-neg]]).

[L4] In any field, $0 \cdot u = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$ and $b > 0$, i.e. $a \in P$ and $b \in P$; closure gives $ab \in P$, so $ab > 0$, proving claim 1. [assume-hyp, L1, L2]

1.2 Assume $a > 0$ and $b < 0$, i.e. $a \in P$ and $-b \in P$; closure gives $a(-b) \in P$. [assume-hyp, L1, L2]

1.3 Assume $a < 0$ and $b < 0$, i.e. $-a \in P$ and $-b \in P$; closure gives $(-a)(-b) \in P$. [assume-hyp, L1, L2]

1.4 Assume $c > 0$ and $a < b$, i.e. $c \in P$ and $b - a \in P$; closure gives $(b - a)c \in P$. [assume-hyp, L1, L2]

1.5 Assume $c < 0$ and $a < b$, i.e. $-c \in P$ and $b - a \in P$; closure gives $(b - a)(-c) \in P$. [assume-hyp, L1, L2]

2.1 Since $a(-b) = -(ab)$ by L3, step 1.2 gives $-(ab) \in P$, so $ab < 0$, proving claim 2. [step 1.2, L3, L1]

2.2 Since $(-a)(-b) = ab$ by L3, step 1.3 gives $ab \in P$, so $ab > 0$, proving claim 3. [step 1.3, L3, L1]

2.3 By distributivity $(b - a)c = bc - ac$, so step 1.4 gives $bc - ac \in P$, i.e. $ac < bc$: this is the forward direction of claim 4. [step 1.4, algebra, L1]

2.4 By L3 and distributivity $(b - a)(-c) = -((b - a)c) = -(bc - ac) = ac - bc$, so step 1.5 gives $ac - bc \in P$, i.e. $bc < ac$: this is the forward direction of claim 5. [step 1.5, L3, algebra, L1]

3.1 Conversely, assume $c > 0$ and $ac < bc$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $ac < bc$; if $b < a$ then the argument of step 2.3 applied to the pair $b < a$ gives $bc < ac$, so $bc - ac \in P$ (from $ac < bc$) while $ac - bc \in P$ (from $bc < ac$), putting the element $bc - ac$ and its negative $ac - bc$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 4. [assume-hyp, step 2.3, L4, L1, algebra]

4.1 Conversely, assume $c < 0$ and $bc < ac$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $bc < ac$; if $b < a$ then the argument of step 2.4 applied to the pair $b < a$ gives $ac < bc$, so $ac - bc \in P$ (from $bc < ac$) while $bc - ac \in P$ (from $ac < bc$), putting the element $ac - bc$ and its negative $bc - ac$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 5. [assume-hyp, step 2.4, L4, L1, algebra] ∎
````

### `thm-compact-null-is-content-zero`

````markdown
---
id: thm-compact-null-is-content-zero
kind: theorem
title: "For a compact subset of $\\mathbb{R}$, measure zero and content zero coincide"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-measure-zero-and-content-zero, lem-content-zero-implies-null, thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, def-interval, thm-geometric-series, def-series, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-integer-power, thm-induction-principle, lem-nat-trichotomy, def-nat-order, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero]
aliases: []
landmark: true
short: "compact: null $\\Leftrightarrow$ content zero"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jordan measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jordan_measure"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$ be compact ([[def-open-cover-r]]), equivalently
closed and bounded ([[thm-heine-borel-characterisation-r]]). Then

$$K \text{ has measure zero} \quad \Longleftrightarrow \quad K \text{ has content zero}$$

([[def-measure-zero-and-content-zero]]).

The implication from content zero to measure zero is
[[lem-content-zero-implies-null]] and needs no hypothesis on $K$. The other
direction is the one that uses compactness, and it uses it exactly as
[[lem-nondegenerate-interval-is-not-null]] does: a countable cover is enlarged to
an open cover at an arbitrarily small cost in total length, and compactness
reduces the open cover to a finite one.

## Facts & Assumptions

**Given:** A compact set $K \subseteq \mathbb{R}$ and a real $\varepsilon > 0$. Throughout, $\theta := 2^{-1}$.

[L1] $A$ is null when for every real $\eta > 0$ there are sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $A \subseteq \bigcup_k[a_k,b_k]$ and $\sum_{k<i}(b_k - a_k) \le \eta$ for every $i$; $A$ has content zero when the same holds with a finite list ([[def-measure-zero-and-content-zero]]).

[L2] A set of content zero is null ([[lem-content-zero-implies-null]]).

[L3] $[c,d]$ has length $d - c \ge 0$ for $c \le d$; $(c,d)$ is the open interval with the same endpoints and is contained in $[c,d]$ ([[def-interval]]).

[L4] Every open interval is an open set ([[def-open-and-closed-in-r]], [[def-interval]]).

[L5] $K$ is compact: from every family of open sets whose union contains $K$, either $K = \varnothing$ and the empty subfamily covers it, or there are $m \in \mathbb{N}$ and members $U_0, \dots, U_m$ of the family whose union contains $K$; compactness is equivalent to being closed and bounded ([[def-open-cover-r]], [[thm-heine-borel-characterisation-r]]).

[L6] Powers and the geometric series: $\theta^0 = 1$, $\theta^{k+1} = \theta^k\theta$, $\theta^k > 0$, and $\sum_{k=0}^{\infty}\theta^k = 2$ for $\theta = 2^{-1}$; a series of nonnegative terms has all its partial sums at most its sum ([[def-integer-power]], [[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L7] Finite sums: additivity, scaling, splitting and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L8] Every finite list of naturals has an upper bound in $\mathbb{N}$, by induction on its length and the totality of the order of $\mathbb{N}$ ([[thm-induction-principle]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L9] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $4 > 0$, $8 > 0$ and $t \cdot 8^{-1} > 0$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 One direction is immediate: if $K$ has content zero then $K$ is null by [L2], with no hypothesis on $K$ used. It remains to prove the converse for compact $K$. [L2, suffices: only the forward direction remains]

1.2 If $K = \varnothing$, then for every real $\varepsilon > 0$ the single interval $[0,0]$ covers $K$ and has total length $0 \le \varepsilon$, so $K$ has content zero by [L1]. Hence suppose $K \ne \varnothing$ for the rest of the proof. [L1, cases]

2.1 Assume $K$ is null and let the real $\varepsilon > 0$ be given. By [L1] applied with $\eta := \varepsilon \cdot 2^{-1} > 0$ fix sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $K \subseteq \bigcup_k [a_k,b_k]$ and $\sum_{k<i}(b_k - a_k) \le \varepsilon \cdot 2^{-1}$ for every $i \in \mathbb{N}$. [step 1.1, given, L1, L9, choose]

3.1 Put $\delta_k := \varepsilon \cdot 8^{-1} \cdot \theta^{k}$, a positive real by [L6] and [L9], and $J_k := (a_k - \delta_k,\ b_k + \delta_k)$, an open set by [L4] containing $[a_k,b_k]$ by [L3] and [L9]. Hence $\{\, J_k : k \in \mathbb{N} \,\}$ is a family of open sets whose union contains $K$, and the closed interval $[a_k - \delta_k,\ b_k + \delta_k]$ has length $(b_k - a_k) + 2\delta_k = (b_k - a_k) + \varepsilon \cdot 4^{-1} \cdot \theta^{k}$ by [L3] and [L9]. [step 2.1, L3, L4, L6, L9]

4.1 By [L5] there are $m \in \mathbb{N}$ and members $J_{k_0}, \dots, J_{k_m}$ of that family covering $K$, and by [L8] there is $N \in \mathbb{N}$ with $k_t \le N$ for every $t \le m$; then $K \subseteq \bigcup_{k \le N} J_k \subseteq \bigcup_{k \le N}[a_k - \delta_k,\ b_k + \delta_k]$ by [L3]. [step 1.2, step 3.1, L3, L5, L8, choose]

5.1 The total length of that finite list is $\sum_{k \le N}\big((b_k - a_k) + \varepsilon \cdot 4^{-1}\theta^{k}\big) = \sum_{k<N+1}(b_k - a_k) + \varepsilon \cdot 4^{-1}\sum_{k<N+1}\theta^{k} \le \varepsilon \cdot 2^{-1} + \varepsilon \cdot 4^{-1} \cdot 2 = \varepsilon$, by [L7], step 2.1, [L6] and [L9]. [step 2.1, step 3.1, step 4.1, L6, L7, L9]

6.1 So for every real $\varepsilon > 0$ the finite list of step 4.1 covers $K$ with total length at most $\varepsilon$, which by [L1] is exactly the statement that $K$ has content zero; together with step 1.1 the two notions coincide on compact sets. [step 1.1, step 1.2, step 4.1, step 5.1, L1] ∎

## Remarks

- **Compactness, not boundedness, is what does the work.** $\mathbb{Q} \cap [0,1]$ is bounded and null and does not have content zero ([[cex-null-set-not-of-content-zero]]); it fails to be closed, and the finite subcover step is exactly what it cannot supply.

- **The theorem is what makes content zero usable at all.** Every set to which content zero is applied on this page is compact: the Cantor set ([[thm-cantor-set-properties]]) and the Smith-Volterra-Cantor set ([[def-fat-cantor-set]]) are both closed and bounded, so for them the two notions may be used interchangeably, and the finite form is the one that combines with [[lem-finite-interval-cover-total-length]].

- **The cost of opening up the cover is $\varepsilon \cdot 2^{-1}$, chosen in advance.** Splitting the budget in half before the enlargement, rather than after, is what keeps the final total at $\varepsilon$ exactly; the same bookkeeping appears in [[lem-nondegenerate-interval-is-not-null]] and in [[thm-countable-union-of-null-is-null]].
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

### `thm-induction-principle`

````markdown
---
id: thm-induction-principle
kind: theorem
title: "The principle of mathematical induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-inductive-set, lem-omega-smallest-inductive]
aliases: [principle-of-induction, induction-principle]
landmark: true
short: "$0\\in S$, $\\sigma$-closed $\\Rightarrow S=\\mathbb N$"
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
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ is the smallest inductive set ([[def-inductive-set]], [[def-natural-numbers]], [[lem-omega-smallest-inductive]]); $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$.

[L1] $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $S \subseteq \mathbb{N}$ with $0 = \varnothing \in S$ and ($x \in S \Rightarrow \sigma(x) = x \cup \{x\} \in S$). [given]

2.1 Then $S$ contains $\varnothing$ and is closed under $x \mapsto x \cup \{x\}$, so $S$ is an inductive set. [step 1.1]

3.1 $\mathbb{N} = \omega \subseteq S$ because $\omega$ is a subset of every inductive set. [L1, step 2.1]

4.1 With $S \subseteq \mathbb{N}$ by hypothesis, $S = \mathbb{N}$. [step 3.1, given]

5.1 The property form is the set case with $S = \{n \in \mathbb{N} : P(n)\}$: $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ give $0 \in S$ and $\sigma$-closure, so $S = \mathbb{N}$, i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎
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


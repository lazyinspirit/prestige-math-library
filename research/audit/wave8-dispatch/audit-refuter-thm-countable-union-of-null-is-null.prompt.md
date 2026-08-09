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

- critical risk (11): 19 declared dependencies; 18 cited facts; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language
- top-20 dependency-cone consumer (21 generated manifest edges)

## Target item — `thm-countable-union-of-null-is-null`

Normalized current SHA-256: `88ebe8214894e91dc274d40d8c7db570a30795965b78633e1deb932dae57dcff`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-countable-union-of-null-is-null
kind: theorem
title: "A countable union of measure-zero sets has measure zero, by countable choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measure-zero-and-content-zero, def-countable, def-countable-choice, thm-n-cross-n-countable, thm-geometric-series, def-series, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-integer-power, def-injection-surjection-bijection, thm-induction-principle, lem-nat-trichotomy, def-nat-order, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero, cex-meager-set-of-full-measure]
aliases: []
landmark: true
short: "countable union of null sets is null"
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
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(A_n)_{n \in \mathbb{N}}$ be a sequence of subsets of $\mathbb{R}$, each of
measure zero ([[def-measure-zero-and-content-zero]]). Then

$$\bigcup_{n \in \mathbb{N}} A_n \quad \text{has measure zero.}$$

By the padding convention of [[def-measure-zero-and-content-zero]] and
[[def-countable]] the same conclusion covers the union of an at most countable
family of null sets, a finite family being extended by copies of $\varnothing$.

**The hypothesis $\mathrm{AC}_\omega$ is spent at exactly one step, step 2.1
below**, where one covering sequence is selected for every $A_n$ at once. Each
$A_n$ has many such covers and nullity provides no rule for singling one out.
Nothing else in the proof selects anything: the diagonal enumeration and the
estimate are formulas.

## Facts & Assumptions

**Given:** A sequence $(A_n)_{n \in \mathbb{N}}$ of null subsets of $\mathbb{R}$ and a real $\varepsilon > 0$. Throughout, $\theta := 2^{-1}$.

[A1] The Axiom of Countable Choice: every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets has a function $f$ on $\mathbb{N}$ with $f(n) \in X_n$ for every $n$ ([[def-countable-choice]]).

[L1] $A$ is null when for every real $\eta > 0$ there are sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $A \subseteq \bigcup_k[a_k,b_k]$ and $\sum_{k<n}(b_k - a_k) \le \eta$ for every $n$ ([[def-measure-zero-and-content-zero]]).

[L2] There is a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$, with inverse $J^{-1}$ ([[thm-n-cross-n-countable]], [[def-injection-surjection-bijection]]).

[L3] Powers and the geometric series: $\theta^0 = 1$, $\theta^{m+1} = \theta^m \theta$, $\theta^m > 0$, and $\sum_{m=0}^{\infty}\theta^m = 2$ for $\theta = 2^{-1}$; a series of nonnegative terms has all its partial sums at most its sum ([[def-integer-power]], [[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L4] Finite sums: additivity, scaling, splitting and monotonicity in the terms; a sum of nonnegative terms is nonnegative and does not decrease when further nonnegative terms are adjoined, so a sum of finitely many nonnegative terms indexed injectively inside a finite rectangle is at most the sum over the whole rectangle ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] Every finite list of naturals has an upper bound in $\mathbb{N}$, by induction on its length and the totality of the order of $\mathbb{N}$ ([[thm-induction-principle]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L6] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $t \cdot 2^{-1} > 0$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 Let the real $\varepsilon > 0$ be given and put $\varepsilon_n := \varepsilon \cdot \theta^{n+1}$ for $n \in \mathbb{N}$, a positive real by [L3] and [L6]. Let $X_n$ be the set of all pairs of sequences $\big((a_k),(b_k)\big)$ with $a_k \le b_k$ for every $k$, $A_n \subseteq \bigcup_k [a_k,b_k]$ and $\sum_{k<i}(b_k - a_k) \le \varepsilon_n$ for every $i \in \mathbb{N}$. Each $A_n$ is null, so each $X_n$ is nonempty by [L1]. [given, L1, L3, L6]

2.1 By [A1] fix $f$ with $f(n) \in X_n$ for every $n$, and write $f(n) = \big((a^n_k)_k, (b^n_k)_k\big)$. This is the one and only application of countable choice in the proof. [step 1.1, A1, choose]

3.1 By [L2] fix a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ and define sequences $(c_j)$ and $(d_j)$ by $c_{J(m,k)} := a^m_k$ and $d_{J(m,k)} := b^m_k$, which is a total definition because $J$ is a bijection; then $c_j \le d_j$ for every $j$. Every $x \in \bigcup_n A_n$ lies in some $A_m$, hence in some $[a^m_k, b^m_k] = [c_{J(m,k)}, d_{J(m,k)}]$ by step 2.1, so $\bigcup_n A_n \subseteq \bigcup_j [c_j, d_j]$. [step 2.1, L2]

4.1 Fix $i \in \mathbb{N}$. The pairs $J^{-1}(j)$ for $j < i$ are finitely many and pairwise distinct, so by [L5] there is $N \in \mathbb{N}$ with both coordinates of each of them at most $N$; since all the terms $d_j - c_j$ are nonnegative, [L4] gives $\sum_{j<i}(d_j - c_j) \le \sum_{m \le N}\Big(\sum_{k \le N}(b^m_k - a^m_k)\Big)$. For each $m \le N$ the inner sum is $\sum_{k < N+1}(b^m_k - a^m_k) \le \varepsilon_m$ by step 2.1, so the whole is at most $\sum_{m \le N} \varepsilon \cdot \theta^{m+1} = \varepsilon \cdot \theta \sum_{m<N+1}\theta^{m} \le \varepsilon \cdot 2^{-1} \cdot 2 = \varepsilon$, by [L3], [L4] and [L6]. [step 3.1, L3, L4, L5, L6]

5.1 Steps 3.1 and 4.1 exhibit, for the given $\varepsilon > 0$, sequences of closed intervals covering $\bigcup_n A_n$ with every partial total length at most $\varepsilon$; since $\varepsilon > 0$ was arbitrary, [L1] gives that $\bigcup_n A_n$ has measure zero. [step 1.1, step 3.1, step 4.1, L1] ∎

## Remarks

- **Why the slack is geometric.** The $n$-th set is covered to within
  $\varepsilon \cdot 2^{-n-1}$ and the budgets sum to $\varepsilon$, exactly as in
  [[lem-countable-sets-are-null]], of which this theorem is the abstract form:
  applying it to the singletons $\{x_n\}$ of a listing recovers that lemma, at
  the cost of an appeal to $\mathrm{AC}_\omega$ that the direct proof avoids.
  The expenditure is the same one, and made for the same reason, as in
  [[thm-countable-union-of-countable]].

- **No rearrangement theorem is used, and none is available here.** The estimate
  is made on finite partial sums only, and every finite partial sum of the
  doubly-indexed family is compared with a sum over a finite rectangle, which is a
  finite rearrangement. The theory of rearranging infinite series is not in the
  reading order at this point, and the proof is arranged so as not to need it.

- **The bound is on the total length, not on the number of intervals.** The
  combined cover is countable even when each $A_n$ is covered by infinitely many
  intervals, which is exactly what [[thm-n-cross-n-countable]] supplies. Nothing
  analogous holds for content zero: a countable union of sets of content zero
  need not have content zero, since $\mathbb{Q} \cap [0,1]$ is such a union
  ([[cex-null-set-not-of-content-zero]]).

- **This is where the two smallness notions of the page separate cleanly.** A
  countable union of null sets is null, whereas a countable union of nowhere
  dense sets is meager and, by [[thm-baire-category-r]], never all of
  $\mathbb{R}$; and yet $\mathbb{R}$ is the union of a meager set and a null set
  ([[cex-meager-set-of-full-measure]]).
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-countable-union-of-null-is-null",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://math.mit.edu/classes/18.125/HW2.pdf"
  ],
  "rationale": "MIT Homework 2.1 states exactly that a countable union of measure-zero sets has measure zero. The local proof expands the standard double-indexed epsilon allocation and explicitly records countable choice.",
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
      "fact": "A1",
      "source": "def-countable-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Countable Choice**, written $\\mathrm{AC}_\\omega$, is the following statement. > For every family $(X_n)_{n \\in \\mathbb{N}}$ of nonempty sets indexed by > $\\mathbb{N}$ there is a function $f$ with domain $\\mathbb{N}$ such that > $f(n) \\in X_n$ for every $n \\in \\mathbb{N}$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-measure-zero-and-content-zero",
      "source_section": "Definition",
      "quote": "- $A$ has **measure zero**, equivalently $A$ is **null**, when for every real $\\varepsilon > 0$ there are sequences $(a_k)_{k \\in \\mathbb{N}}$ and $(b_k)_{k \\in \\mathbb{N}}$ of reals with $a_k \\le b_k$ for every $k$, such that $$A \\subseteq \\bigcup_{k \\in \\mathbb{N}} [a_k, b_k] \\qquad \\text{and} \\qquad \\sum_{k=0}^{\\infty} (b_k - a_k) \\text{ converges with sum } \\le \\varepsilon .$$ - $A$ has **content zero** when for every real $\\varepsilon > 0$ there are $n \\in \\mathbb{N}$ and reals $a_0 \\le b_0, \\dots, a_n \\le b_n$ with $$A \\subseteq \\bigcup_{j \\le n} [a_j, b_j] \\qquad \\text{and} \\qquad \\sum_{j=0}^{n} (b_j - a_j) \\le \\varepsilon .$$",
      "uses": [
        "1.1",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-n-cross-n-countable",
      "source_section": "Statement",
      "quote": "Then $J$ is a bijection from $\\mathbb{N} \\times \\mathbb{N}$ onto",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-injection-surjection-bijection",
      "source_section": "Definition",
      "quote": "$f$ is **surjective** (onto) if for every $b \\in B$ there is some $x \\in A$ with $f(x) = b$",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "**Integer exponents.** Every integer $m$ ([[def-integers]]) is either",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-geometric-series",
      "source_section": "Statement",
      "quote": "Let $r \\in \\mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]), so that $r^0 = 1$ for every $r$, including $r = 0$. 1. If $|r| < 1$ then the series $\\sum r^k$ converges ([[def-series]]) and $$\\sum_{k=0}^{\\infty} r^{k} \\;=\\; \\frac{1}{1-r} .$$ 2. If $|r| \\ge 1$ then $\\sum r^k$ diverges. The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular $\\sum_{k=0}^{\\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to $1$. Which starting index is meant has to be said, and it is said here.",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with $a_k \\ge 0$ for every $k \\in \\mathbb{N}$, let $s_n = \\sum_{k<n} a_k$ be its partial sums and let $S = \\{\\, s_n : n \\in \\mathbb{N} \\,\\}$ be the range of $(s_n)$ ([[def-series]]). Then: 1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \\ge 0$ for every $n$; 2. $\\sum a_k$ converges **if and only if** $S$ is bounded above ([[def-bounded-set]]), and in that case $$\\sum_{k=0}^{\\infty} a_k \\;=\\; \\sup S ,$$ so in particular $s_n \\le \\sum_{k=0}^{\\infty} a_k$ for every $n$; 3. if $S$ is not bounded above then $s_n \\to +\\infty$ ([[def-divergence-to-infinity]]) and $\\sum a_k$ diverges. This is the theorem that makes the nonnegative theory work: for terms of one sign, convergence is a boundedness question and no candidate limit is ever needed. Every comparison test on this page is an application of it.",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let $\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and finite products as in [[def-finite-sum]]. Then: 1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$. 2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]). 3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$. 4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$. 5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$. 6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "This is the induction principle, the basis of proof by induction.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-nat-trichotomy",
      "source_section": "Statement",
      "quote": "For all $m, n \\in \\mathbb{N}$ exactly one of $m < n$, $m = n$, $m > n$ holds. In particular the order ([[def-nat-order]]) is total.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-nat-order",
      "source_section": "Definition",
      "quote": "$$m \\le n \\iff \\exists k \\in \\mathbb{N}\\ (m + k = n),$$ and the **strict order** by $m < n \\iff (m \\le n \\text{ and } m \\neq n)$, using addition ([[def-nat-addition]]).",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity satisfies $0 < 1$;",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b, c, d \\in F$. 1. **Translation invariance.** If $a < b$ then $a + c < b + c$. 2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b, c \\in F$. 1. If $a > 0$ and $b > 0$ then $ab > 0$. 2. If $a > 0$ and $b < 0$ then $ab < 0$. 3. If $a < 0$ and $b < 0$ then $ab > 0$. 4. If $c > 0$ then $a < b \\iff ac < bc$. 5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "ordered field",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.",
      "uses": [
        "1.1",
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Let the real $\\varepsilon > 0$ be given and put $\\varepsilon_n := \\varepsilon \\cdot \\theta^{n+1}$ for $n \\in \\mathbb{N}$, a positive real by [L3] and [L6]. Let $X_n$ be the set of all pairs of sequences $\\big((a_k),(b_k)\\big)$ with $a_k \\le b_k$ for every $k$,",
      "step": "1.1",
      "inputs": [
        "L3",
        "L6",
        "L1"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "By [A1] fix $f$ with $f(n) \\in X_n$ for every $n$, and write $f(n) = \\big((a^n_k)_k, (b^n_k)_k\\big)$. This is the one and only application of countable choice in the proof.",
      "step": "2.1",
      "inputs": [
        "A1",
        "1.1"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "By [L2] fix a bijection $J : \\mathbb{N} \\times \\mathbb{N} \\to \\mathbb{N}$ and define sequences $(c_j)$ and $(d_j)$ by $c_{J(m,k)} := a^m_k$ and $d_{J(m,k)} := b^m_k$, which is a total definition because $J$ is a bijection; then $c_j \\le d_j$ for every $j$. Eve",
      "step": "3.1",
      "inputs": [
        "L2",
        "2.1"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Fix $i \\in \\mathbb{N}$. The pairs $J^{-1}(j)$ for $j < i$ are finitely many and pairwise distinct, so by [L5] there is $N \\in \\mathbb{N}$ with both coordinates of each of them at most $N$; since all the terms $d_j - c_j$ are nonnegative, [L4] gives $\\sum_{j<i}",
      "step": "4.1",
      "inputs": [
        "L5",
        "L4",
        "2.1",
        "L3",
        "L6",
        "3.1"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Steps 3.1 and 4.1 exhibit, for the given $\\varepsilon > 0$, sequences of closed intervals covering $\\bigcup_n A_n$ with every partial total length at most $\\varepsilon$; since $\\varepsilon > 0$ was arbitrary, [L1] gives that $\\bigcup_n A_n$ has measure zero.",
      "step": "5.1",
      "inputs": [
        "3.1",
        "4.1",
        "L1",
        "1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Step 1.1 still makes X_n nonempty when A_n=∅ because nullity supplies a cover; step 3.1 then covers a possibly empty union vacuously."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.1 assigns a positive budget at n=0, and step 4.1 includes the i=0 empty partial sum."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 3.1 includes the row m=0, so a union supported on a single constituent is covered."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Steps 3.1–4.1 allow zero-length intervals and use only nonnegativity of their lengths."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 3.1 preserves the closed intervals from each constituent cover, so endpoint membership is unchanged."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 proves every cover-set X_n nonempty and step 2.1 invokes countable choice exactly once to select one cover for each n."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `thm-countable-union-of-null-is-null` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `thm-countable-union-of-null-is-null` is not an equivalence, so it has no reverse iff direction."
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
    "source": "thm-countable-union-of-null-is-null",
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
    "source": "thm-countable-union-of-null-is-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-countable-union-of-null-is-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "thm-countable-union-of-null-is-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-n-cross-n-countable",
    "declared_target": "thm-n-cross-n-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-countable-union-of-null-is-null",
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
    "source": "thm-countable-union-of-null-is-null",
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
    "source": "thm-countable-union-of-null-is-null",
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
    "source": "thm-countable-union-of-null-is-null",
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
    "source": "thm-countable-union-of-null-is-null",
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
    "source": "thm-countable-union-of-null-is-null",
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
    "source": "thm-countable-union-of-null-is-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-countable-union-of-null-is-null",
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
    "source": "thm-countable-union-of-null-is-null",
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
    "source": "thm-countable-union-of-null-is-null",
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
    "source": "thm-countable-union-of-null-is-null",
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
    "source": "thm-countable-union-of-null-is-null",
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
    "source": "thm-countable-union-of-null-is-null",
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
    "source": "thm-countable-union-of-null-is-null",
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
    "source": "thm-countable-union-of-null-is-null",
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
    "source": "thm-countable-union-of-null-is-null",
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
  },
  {
    "source": "thm-countable-union-of-null-is-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cex-meager-set-of-full-measure",
    "declared_target": "cex-meager-set-of-full-measure",
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

## Full text of every cited or declared item (24)

### `cex-meager-set-of-full-measure`

````markdown
---
id: cex-meager-set-of-full-measure
kind: counterexample
title: "$\\mathbb{R}$ is the union of a meager set and a set of measure zero, so smallness of category and smallness of measure are independent notions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-baire-category-r, def-nowhere-dense-meager, def-f-sigma-g-delta, def-measure-zero-and-content-zero, lem-countable-sets-are-null, thm-rationals-countable, lem-countable-iff-surjection-from-n, lem-q-and-irrationals-dense-r, lem-rat-embeds-dense, thm-geometric-series, def-series, def-open-and-closed-in-r, thm-open-set-algebra-r, def-interval, def-countable, def-equinumerous, def-integer-power, lem-power-laws, def-finite-sum, lem-finite-sum-laws, thm-nonnegative-series-bounded-partial-sums, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-neighbourhood-r, def-limit-point-r, lem-geometric-sequence-null, def-real-limit, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
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
    - title: "Meagre set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Meagre_set"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "J. C. Oxtoby, Measure and Category, 2nd ed., Ch. 1-2 (John C. Oxtoby)"
      url: "https://en.wikipedia.org/wiki/John_C._Oxtoby"
    - title: "Meager set (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Meager_set"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** meagreness and measure zero are comparable notions of
smallness, so that a set small in one sense is small, or at least not
co-small, in the other.

The witness is a decomposition $\mathbb{R} = (\mathbb{R} \setminus G) \cup G$ in
which $\mathbb{R} \setminus G$ is meager ([[def-nowhere-dense-meager]]) and $G$
has measure zero ([[def-measure-zero-and-content-zero]]). So $\mathbb{R}$, which
by [[thm-baire-category-r]] is not meager, splits into two pieces each of which
is negligible, one in the sense of category and one in the sense of measure. In
particular $G$ is residual and null at the same time, and its complement is
meager and, being the complement of a null set, in no sense small in measure.

The set is
$$G := \bigcap_{n \in \mathbb{N}} U_n, \qquad U_n := \bigcup_{k \in \mathbb{N}} \big(e(k) - 2^{-k-n-2},\ e(k) + 2^{-k-n-2}\big),$$
where $e : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$ is a bijection onto the
rationals ([[lem-rat-embeds-dense]]).

## Facts & Assumptions

**Given:** A bijection $e : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$ onto the rationals inside $\mathbb{R}$, the sets $U_n$ and $G$ displayed above.

[A1] The refuted claim: a meager set and a set of measure zero cannot together exhaust $\mathbb{R}$, meagreness and nullity being comparable notions of smallness.

[L1] $\mathbb{Q} \approx \mathbb{N}$ and $q \mapsto \hat q$ is injective onto $\mathbb{Q}_{\mathbb{R}}$, so a bijection $e$ exists; $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$ ([[thm-rationals-countable]], [[def-equinumerous]], [[def-countable]], [[lem-countable-iff-surjection-from-n]], [[lem-rat-embeds-dense]], [[lem-q-and-irrationals-dense-r]], [[def-limit-point-r]]).

[L2] $(c,d)$ is an open interval of length $d - c$ and is an open set; an arbitrary union of open sets is open; the complement of an open set is closed ([[def-interval]], [[def-open-and-closed-in-r]], [[thm-open-set-algebra-r]]).

[L3] A set is dense exactly when every $N_\varepsilon(x)$ meets it; a closed set is nowhere dense exactly when its interior is empty; a meager set is a union of a sequence of nowhere dense sets ([[def-limit-point-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]], [[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]]).

[L4] $\sum_{k=0}^{\infty}2^{-k} = 2$, powers satisfy $2^{-k-n-1} = 2^{-n-1}2^{-k}$, finite sums scale, and $2^{-n} \to 0$ ([[thm-geometric-series]], [[def-series]], [[def-integer-power]], [[lem-power-laws]], [[def-finite-sum]], [[lem-finite-sum-laws]], [[thm-nonnegative-series-bounded-partial-sums]], [[lem-geometric-sequence-null]], [[def-real-limit]]).

[L5] Nullity: $A$ is null when for every real $\varepsilon > 0$ there is a sequence of closed intervals covering $A$ with all partial total lengths at most $\varepsilon$; every at most countable set is null ([[def-measure-zero-and-content-zero]], [[lem-countable-sets-are-null]]).

[L6] $\mathbb{R}$ is not a union of a sequence of nowhere dense sets ([[thm-baire-category-r]]).

[L7] $G$ is an intersection of a sequence of open sets, so it is $G_\delta$ ([[def-f-sigma-g-delta]]).

[L8] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $2^{-k-n-2} > 0$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 Fix $e$ by [L1]. Each $U_n$ is an open set, being a union of open intervals by [L2], and each contains $\mathbb{Q}_{\mathbb{R}}$, since $e(k)$ lies in the $k$-th interval by [L8]. Hence each $U_n$ is dense by [L1] and [L3], a superset of a dense set being dense. [given, L1, L2, L3, L8, choose]

2.1 **$G$ is null.** Let the real $\varepsilon > 0$ be given and use [L4] to fix $n$ with $2^{-n} \le \varepsilon$. The closed intervals $I_k := [\,e(k) - 2^{-k-n-2},\ e(k) + 2^{-k-n-2}\,]$ cover $U_n$, hence cover $G \subseteq U_n$, and each has length $2^{-k-n-1} = 2^{-n-1}2^{-k}$ by [L2], [L4] and [L8]; so every partial total length is $\sum_{k<i}2^{-n-1}2^{-k} = 2^{-n-1}\sum_{k<i}2^{-k} \le 2^{-n-1} \cdot 2 = 2^{-n} \le \varepsilon$ by [L4]. By [L5] the set $G$ has measure zero. [step 1.1, L4, L5, L8]

2.2 **$\mathbb{R} \setminus G$ is meager.** By De Morgan $\mathbb{R} \setminus G = \bigcup_n (\mathbb{R} \setminus U_n)$, and each $\mathbb{R} \setminus U_n$ is closed by [L2]. Its interior is empty: if $N_\delta(x) \subseteq \mathbb{R} \setminus U_n$ for some real $\delta > 0$, then $N_\delta(x)$ would miss $\mathbb{Q}_{\mathbb{R}} \subseteq U_n$, contradicting the density of $\mathbb{Q}_{\mathbb{R}}$ given by [L1] and [L3]. So each $\mathbb{R} \setminus U_n$ is nowhere dense by [L3], and $\mathbb{R} \setminus G$ is meager. [step 1.1, L1, L2, L3]

3.1 So $\mathbb{R} = (\mathbb{R} \setminus G) \cup G$ with the first piece meager and the second null, which is the failure of [A1]. Moreover $G$ is residual, its complement being meager, and $G \ne \varnothing$: were $G$ empty, $\mathbb{R} = \mathbb{R} \setminus G$ would be meager, contradicting [L6]. Thus $G$ is a residual, $G_\delta$ set of measure zero by [L7], and $\mathbb{R} \setminus G$ is a meager set whose complement is null. [step 2.1, step 2.2, A1, L3, L6, L7] ∎

## Remarks

- **Both pieces are as small as their notion allows, and they are complementary.**
  $G$ is null and residual; $\mathbb{R} \setminus G$ is meager and its complement
  is null. So no implication holds between "meager" and "null" in either
  direction, and neither can be strengthened to a statement about the complement.
  This is the standard duality between measure and category, and $G$ is the
  standard witness for it.

- **$G$ contains all the irrationals that are well approximable by rationals.**
  Membership in $U_n$ says that some rational $e(k)$ lies within
  $2^{-k-n-2}$ of the point, so $G$ is a set of points approximable by rationals
  at every accuracy of that shape. Nothing on this page needs that reading; it is
  recorded because it is what makes the example natural rather than contrived.

- **Baire is used only once, and only for nonemptiness.** Steps 2.1 and 2.2 are
  independent of [[thm-baire-category-r]]; it enters in step 3.1 to rule out
  $G = \varnothing$, which would make the decomposition vacuous. That is also the
  precise sense in which the example needs the completeness of $\mathbb{R}$.

- **The individual $U_n$ are open, dense and of small total cover length**, which
  is [[ex-q-covered-by-intervals-of-small-total-length]] with
  $\varepsilon = 2^{-n}$; the example is that construction iterated and
  intersected.
````

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

### `lem-countable-sets-are-null`

````markdown
---
id: lem-countable-sets-are-null
kind: lemma
title: "Every at most countable subset of $\\mathbb{R}$ has measure zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measure-zero-and-content-zero, def-countable, lem-countable-iff-surjection-from-n, thm-geometric-series, def-series, def-interval, def-integer-power, def-finite-sum, lem-finite-sum-laws, thm-nonnegative-series-bounded-partial-sums, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-dense-set-of-measure-zero]
aliases: []
landmark: false
short: "countable $\\Rightarrow$ null"
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
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
pipeline_run: null
---

## Statement

Every at most countable set $A \subseteq \mathbb{R}$ ([[def-countable]]) has
measure zero ([[def-measure-zero-and-content-zero]]).

The cover is explicit: the $k$-th point of a listing of $A$ is put inside an
interval of length $\varepsilon \cdot 2^{-k-1}$, and the lengths sum to
$\varepsilon$ by [[thm-geometric-series]]. **No choice principle is used**: a
listing of $A$ is a single object, fixed once ([[lem-countable-iff-surjection-from-n]]),
and everything after that is a formula in $k$.

## Facts & Assumptions

**Given:** An at most countable set $A \subseteq \mathbb{R}$ and a real $\varepsilon > 0$. Throughout, $\theta := 2^{-1}$.

[L1] $A$ is null when for every real $\varepsilon > 0$ there are sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $A \subseteq \bigcup_k [a_k,b_k]$, and $\sum_{k<n}(b_k - a_k) \le \varepsilon$ for every $n \in \mathbb{N}$ ([[def-measure-zero-and-content-zero]]).

[L2] $[c,d] = \{\, x : c \le x \le d \,\}$ has length $d - c$ when $c \le d$, and $[c,c] = \{c\}$ has length $0$ ([[def-interval]]).

[L3] A nonempty at most countable set admits a surjection $s : \mathbb{N} \to A$ ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L4] Powers and the geometric series: $\theta^0 = 1$, $\theta^{k+1} = \theta^k\theta$, $\theta^k > 0$, and $\sum_{k=0}^{\infty}\theta^k = 2$ for $\theta = 2^{-1}$; a series of nonnegative terms has all its partial sums at most its sum ([[def-integer-power]], [[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L5] Finite sums: scaling by a constant, and $\sum_{k<n} 0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $4 > 0$ and $t \cdot 4^{-1} > 0$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 Let the real $\varepsilon > 0$ be given. If $A = \varnothing$, the constant sequences $a_k := 0$ and $b_k := 0$ satisfy $A \subseteq \bigcup_k [0,0]$ vacuously and $\sum_{k<n}(b_k - a_k) = 0 \le \varepsilon$ for every $n$ by [L5], so the condition of [L1] holds at this $\varepsilon$. Assume from now on that $A \ne \varnothing$ and, by [L3], fix a surjection $s : \mathbb{N} \to A$. [given, L1, L2, L3, L5, choose]

2.1 Put $\delta_k := \varepsilon \cdot 4^{-1} \cdot \theta^{k}$, a positive real by [L4] and [L6], and $a_k := s(k) - \delta_k$, $b_k := s(k) + \delta_k$; then $a_k \le b_k$ and $s(k) \in [a_k,b_k]$ by [L6], so $A = \{\, s(k) : k \in \mathbb{N} \,\} \subseteq \bigcup_k [a_k, b_k]$ by step 1.1. The length of $[a_k,b_k]$ is $b_k - a_k = 2\delta_k = \varepsilon \cdot 2^{-1} \cdot \theta^{k}$ by [L2] and [L6]. [step 1.1, L2, L4, L6]

3.1 For every $n \in \mathbb{N}$, $\sum_{k<n}(b_k - a_k) = \varepsilon \cdot 2^{-1} \sum_{k<n}\theta^{k} \le \varepsilon \cdot 2^{-1} \cdot 2 = \varepsilon$, using scaling from [L5] and the bound on the partial sums of the geometric series from [L4]. [step 2.1, L4, L5, L6]

4.1 So for every real $\varepsilon > 0$ the sequences of step 2.1 cover $A$ with all partial total lengths at most $\varepsilon$, which by [L1] is exactly the statement that $A$ has measure zero; the empty case was settled in step 1.1. [step 1.1, step 2.1, step 3.1, L1] ∎

## Remarks

- **Indexing.** Sequences here start at $k = 0$, and the first interval has
  length $\varepsilon \cdot 2^{-1}$, not $\varepsilon$. The total is
  $\varepsilon \cdot 2^{-1} \sum_{k \ge 0} 2^{-k} = \varepsilon$ exactly, so the
  cover is as tight as the definition allows and nothing is wasted at the first
  index.

- **Repetitions are harmless.** A surjection $s$ may repeat values, and a finite
  set is covered by infinitely many intervals, most of them redundant. This is
  why the listing form of countability ([[lem-countable-iff-surjection-from-n]])
  is the convenient one: no injectivity and no case split between the finite and
  the countably infinite case is needed.

- **The converse fails badly.** The Cantor set is uncountable and null
  ([[thm-cantor-set-properties]]), so "null" is very far from "countable"; and
  the Smith-Volterra-Cantor set is uncountable and not null
  ([[thm-fat-cantor-set-has-positive-measure]]), so cardinality decides nothing
  either way.

- **Density decides nothing either.** $\mathbb{Q}$ is countable, hence null, and
  is dense in $\mathbb{R}$ ([[cex-dense-set-of-measure-zero]]); a null set may
  therefore meet every interval.
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

### `thm-baire-category-r`

````markdown
---
id: thm-baire-category-r
kind: theorem
title: "Baire category in $\\mathbb{R}$, by nested intervals with canonically chosen rational endpoints: a countable intersection of dense open sets is dense, so $\\mathbb{R}$ is not a countable union of nowhere dense sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nowhere-dense-meager, thm-nested-interval-property, def-interval, def-open-and-closed-in-r, def-limit-point-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-countable, def-equinumerous, def-injection-surjection-bijection, thm-rationals-countable, lem-rat-embeds-dense, thm-well-ordering-principle, thm-recursion, thm-open-set-algebra-r, def-neighbourhood-r]
justified_by: []
forward_refs: [ex-baire-reproves-r-uncountable, cex-meager-set-of-full-measure]
aliases: []
landmark: true
short: "countable intersection of dense open sets is dense"
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
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Exercise 22) and Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Baire theorem (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Baire_theorem"
    - title: "E. Zakon, Mathematical Analysis, §6.8: Baire Categories"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
pipeline_run: null
---

## Statement

Let $(U_n)_{n \in \mathbb{N}}$ be a sequence of subsets of $\mathbb{R}$, each
open ([[def-open-and-closed-in-r]]) and dense ([[def-limit-point-r]]). Then

$$\bigcap_{n \in \mathbb{N}} U_n \quad \text{is dense in } \mathbb{R}.$$

Consequently, if $(A_n)_{n \in \mathbb{N}}$ is a sequence of nowhere dense
subsets of $\mathbb{R}$ ([[def-nowhere-dense-meager]]), then
$\bigcup_{n \in \mathbb{N}} A_n \ne \mathbb{R}$: no meager subset of
$\mathbb{R}$ exhausts $\mathbb{R}$, so $\mathbb{R}$ is of the second category in
itself.

**The selection is canonical, and the proof spends no choice principle.** The
textbook argument picks a nested interval at every stage in terms of the one
before it, which is the axiom of dependent choice ([[def-dependent-choice]]). The construction below
instead fixes one enumeration $e$ of the rationals ([[thm-rationals-countable]],
[[lem-rat-embeds-dense]]) and, at every stage, takes the interval whose two
rational endpoints have **least index** among those meeting the requirements.
The requirements are met by some rational-endpoint interval, which is what the
refinement claim of the proof establishes, and the least such index is
determined by [[thm-well-ordering-principle]]; so the whole recursion is a
single application of [[thm-recursion]] to one total map. This is the device of
[[thm-perfect-set-uncountable-r]], transplanted from perfect sets to dense open
sets. What it does **not** settle is the strength of the theorem for general
complete metric spaces, which is recorded separately in
[[rem-baire-in-r-is-choice-free]].

## Facts & Assumptions

**Given:** A sequence $(U_n)_{n \in \mathbb{N}}$ of dense open subsets of $\mathbb{R}$. Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$ under $q \mapsto \hat q$. A pair $(p,q) \in \mathbb{Q}_{\mathbb{R}} \times \mathbb{Q}_{\mathbb{R}}$ is called **good** when $p < q$, and $G$ denotes the set of good pairs.

[A1] Each $U_n$ is open and dense in $\mathbb{R}$.

[L1] $A \subseteq \mathbb{R}$ is dense when $\overline{A} = \mathbb{R}$, and $\overline{A}$ is exactly the set of points every neighbourhood of which meets $A$; so $A$ is dense if and only if $N_\varepsilon(x) \cap A \ne \varnothing$ for every $x \in \mathbb{R}$ and every real $\varepsilon > 0$ ([[def-limit-point-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]]).

[L2] $U$ is open when every $x \in U$ admits a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$; every open interval $(p,q)$ is an open set, and $[p,q]$ is a closed bounded interval, nonempty when $p \le q$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L3] The intersection of two open subsets of $\mathbb{R}$ is open, and the complement of a closed set is open ([[thm-open-set-algebra-r]], [[def-open-and-closed-in-r]]).

[L4] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]], [[def-equinumerous]]); $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$, and strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]); a composition of bijections is a bijection ([[def-injection-surjection-bijection]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] Recursion: for a set $Y$, an element $y_0 \in Y$ and a function $T : Y \to Y$ there is $h : \mathbb{N} \to Y$ with $h(0) = y_0$ and $h(\sigma(k)) = T(h(k))$ ([[thm-recursion]]).

[L7] Nested interval property: for nonempty closed bounded intervals $I_k = [a_k,b_k]$ with $I_{k+1} \subseteq I_k$, the intersection $\bigcap_k I_k$ is nonempty ([[thm-nested-interval-property]]).

[L8] $A$ is nowhere dense exactly when $\mathbb{R} \setminus \overline{A}$ is dense; $\overline{A}$ is a closed set containing $A$ ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L9] An at most countable family may always be presented as a sequence indexed by $\mathbb{N}$ ([[def-countable]], [[def-nowhere-dense-meager]]).

## Proof

**Proof technique:** constructive.

1.1 Fix $x_0 \in \mathbb{R}$ and a real $\varepsilon_0 > 0$; by [L1] it suffices to produce a point of $\bigcap_n U_n$ lying in $N_{\varepsilon_0}(x_0)$, since $x_0$ and $\varepsilon_0$ are then arbitrary. [given, L1, suffices: one point in each neighbourhood]

1.2 By [L4] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$ and put $e := \iota \circ \beta$, where $\iota(q) = \hat q$, so that $e$ is a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$. [L4, choose]

1.3 Recall the terminology of the Given: a pair $(p,q)$ of elements of $\mathbb{Q}_{\mathbb{R}}$ is good when $p < q$, and $G$ is the set of good pairs. [given, construct]

2.1 **Refinement claim.** For every good $(p,q)$ and every $n \in \mathbb{N}$ there is a good $(p',q')$ with $[p',q'] \subseteq (p,q) \cap U_n$. To see it, note first that $(p,q)$ is nonempty, since [L4] supplies an element of $\mathbb{Q}_{\mathbb{R}}$ strictly between $p$ and $q$, and that $(p,q)$ is open by [L2]; fix $y_1 \in (p,q)$ and, by [L2], a real $\rho_1 > 0$ with $N_{\rho_1}(y_1) \subseteq (p,q)$. Since $U_n$ is dense, [A1] and [L1] give $y \in N_{\rho_1}(y_1) \cap U_n$, so $y \in (p,q) \cap U_n$, and that set is open by [A1], [L2] and [L3], so there is a real $\rho > 0$ with $N_\rho(y) \subseteq (p,q) \cap U_n$. By [L4] fix $p', q' \in \mathbb{Q}_{\mathbb{R}}$ with $y - \rho < p' < y < q' < y + \rho$. Then $p' < q'$, so $(p',q')$ is good, and every $t \in [p',q']$ satisfies $y - \rho < p' \le t \le q' < y + \rho$, whence $|t - y| < \rho$ and $t \in N_\rho(y)$; thus $[p',q'] \subseteq N_\rho(y) \subseteq (p,q) \cap U_n$. [step 1.3, A1, L1, L2, L3, L4, choose]

3.1 **Successor rule.** For $(k, (p,q)) \in \mathbb{N} \times G$ let $m$ be the least natural for which some natural $j$ makes $(e(m), e(j))$ good with $[e(m), e(j)] \subseteq (p,q) \cap U_k$, and let $j$ be the least natural with that property for that $m$; put $T(k,(p,q)) := (\sigma(k), (e(m), e(j)))$. The set of eligible $m$ is nonempty by step 2.1 applied with $n = k$, since $e$ is onto $\mathbb{Q}_{\mathbb{R}}$ by step 1.2, so both minima exist by [L5] and $T : \mathbb{N} \times G \to \mathbb{N} \times G$ is a total function defined without any selection. [step 1.2, step 2.1, L4, L5, construct]

4.1 **The recursion.** By [L4] fix $p_0, q_0 \in \mathbb{Q}_{\mathbb{R}}$ with $x_0 - \varepsilon_0 < p_0 < x_0 < q_0 < x_0 + \varepsilon_0$; then $(p_0,q_0)$ is good and, as in step 2.1, $[p_0,q_0] \subseteq N_{\varepsilon_0}(x_0)$ by [L2]. Apply [L6] with $Y = \mathbb{N} \times G$, seed $(0,(p_0,q_0))$ and map $T$ to get $h : \mathbb{N} \to \mathbb{N} \times G$ with $h(0) = (0,(p_0,q_0))$ and $h(\sigma(k)) = T(h(k))$; an induction on $k$ shows that the first coordinate of $h(k)$ is $k$, so write $h(k) = (k,(p_k,q_k))$, every $(p_k,q_k)$ being good. [step 1.1, step 1.3, step 3.1, L2, L4, L6, construct]

5.1 Write $I_k := [p_k, q_k]$, a nonempty closed bounded interval by [L2]. The rule of step 3.1 gives, for every $k \in \mathbb{N}$, that $I_{k+1} \subseteq (p_k,q_k) \cap U_k \subseteq I_k$; in particular the family $(I_k)$ is nested and $I_{k+1} \subseteq U_k$. [step 3.1, step 4.1, L2]

6.1 By [L7] applied to the nested family $(I_k)$ of nonempty closed bounded intervals, $\bigcap_{k} I_k \ne \varnothing$; fix $x$ in it. [step 5.1, L7, choose]

7.1 For every $n \in \mathbb{N}$ one has $x \in I_{n+1} \subseteq U_n$ by steps 5.1 and 6.1, so $x \in \bigcap_n U_n$; and $x \in I_0 \subseteq N_{\varepsilon_0}(x_0)$ by steps 4.1 and 6.1. So $N_{\varepsilon_0}(x_0)$ meets $\bigcap_n U_n$. [step 4.1, step 5.1, step 6.1]

8.1 Since $x_0 \in \mathbb{R}$ and the real $\varepsilon_0 > 0$ were arbitrary, every neighbourhood of every point of $\mathbb{R}$ meets $\bigcap_n U_n$, so that set is dense by [L1]. [step 1.1, step 7.1, L1]

9.1 For the consequence, let $(A_n)$ be a sequence of nowhere dense sets and put $U_n := \mathbb{R} \setminus \overline{A_n}$, which is open by [L3] and [L8] and dense by [L8]; by step 8.1 the set $\bigcap_n U_n$ is dense, hence nonempty, and any $x$ in it lies outside every $\overline{A_n}$ and so outside every $A_n$, giving $x \notin \bigcup_n A_n$ and therefore $\bigcup_n A_n \ne \mathbb{R}$. By [L9] the same conclusion covers a union of an at most countable family of nowhere dense sets, so no meager set is all of $\mathbb{R}$. [step 8.1, L1, L3, L8, L9, discharge-construct] ∎

## Remarks

- **What "dense" is doing at each end.** Density of the $U_n$ is used exactly once, in the refinement claim, to find a point of $U_n$ inside a given open interval; openness is used exactly once, immediately after, to fit a whole closed interval with rational endpoints around that point. Neither hypothesis can be dropped. Without openness the conclusion fails: the family consisting of $\mathbb{Q}$ together with all the sets $\mathbb{R} \setminus \{q\}$ for $q \in \mathbb{Q}$ is an at most countable family of dense sets, all but the first of them open, and its intersection is empty. Without density it fails too, for the constant sequence $U_n := (0,1)$ has intersection $(0,1)$, which is not dense in $\mathbb{R}$.

- **Only nonemptiness of the nested intersection is used.** The construction does not force the interval lengths to $0$ and does not need to: claim 1 of [[thm-nested-interval-property]] already produces a point, and one point is all the argument wants. That is why no Archimedean step appears anywhere above.

- **The consequence is the form used downstream.** Applying it to the sequence of singletons $\{x_n\}$ of a supposed enumeration of $\mathbb{R}$ reproves that $\mathbb{R}$ is uncountable ([[ex-baire-reproves-r-uncountable]]); applying it to a supposed presentation of $\mathbb{Q}$ as a $G_\delta$ set is what shows that no such presentation exists ([[cor-q-is-meager-and-not-g-delta]]).

- **Category is not measure.** The intersection produced above is dense but may be very small in the sense of [[def-measure-zero-and-content-zero]]; indeed $\mathbb{R}$ decomposes as a meager set together with a set of measure zero ([[cex-meager-set-of-full-measure]]), so this theorem says nothing whatever about size in measure.
````

### `thm-countable-union-of-countable`

````markdown
---
id: thm-countable-union-of-countable
kind: theorem
title: "Countable unions of at most countable sets, assuming $\\mathrm{AC}_\\omega$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice, thm-n-cross-n-countable, lem-countable-iff-surjection-from-n, def-countable, thm-well-ordering-principle, def-injection-surjection-bijection, def-equinumerous]
justified_by: []
aliases: []
landmark: false
short: "countable union of countables (needs $\\mathrm{AC}_\\omega$)"
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 56"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(A_n)_{n \in \mathbb{N}}$ be a family of at most countable sets
([[def-countable]]) indexed by $\mathbb{N}$. Then

$$U = \bigcup_{n \in \mathbb{N}} A_n$$

is at most countable.

**The hypothesis $\mathrm{AC}_\omega$ is not decoration and it is not removable.**
It is spent at exactly one step, step 3.1 below, where one surjection
$\mathbb{N} \to A_n$ is selected for every $n$ at once. Each $A_n$ has such
surjections, in general many of them, and the countability assumption provides no
rule for singling one out. Without some choice principle the theorem is not
available at all: ZF alone does not prove it, **conditionally on the consistency
of ZF**, as recorded among this page's false statements and discussed in the
remarks below, where that item is named and linked. The
consistency hypothesis is not a formality and cannot be dropped: the separation
rests on an external independence result that this library quotes rather than
proves, and it cannot be stated without it.

## Facts & Assumptions

**Given:** A family $(A_n)_{n \in \mathbb{N}}$ of at most countable sets, its union $U = \bigcup_{n \in \mathbb{N}} A_n$, and the Axiom of Countable Choice as an explicit hypothesis.

[L1] Finite, countably infinite, at most countable; $\varnothing$ is finite ([[def-countable]]).

[L2] A nonempty set $X$ is at most countable if and only if there is a surjection $\mathbb{N} \to X$ ([[lem-countable-iff-surjection-from-n]]).

[L3] $\mathrm{AC}_\omega$: for every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets there is $f$ with $f(n) \in X_n$ for all $n$ ([[def-countable-choice]]).

[L4] There is a bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ ([[thm-n-cross-n-countable]], [[def-equinumerous]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] A composition of surjections is a surjection ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 If $U = \varnothing$ then $U$ is finite, hence at most countable. [given, L1]

1.2 Assume instead $U \ne \varnothing$; then $J := \{\, n \in \mathbb{N} : A_n \ne \varnothing \,\}$ is nonempty, so it has a least element $n_0$ by [L5]. [given, L5]

1.3 Fix the bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ of [L4]. [L4]

2.1 For $n \in J$ let $S_n$ be the set of all surjections $\mathbb{N} \to A_n$, which is nonempty by [L2] since $A_n$ is nonempty and at most countable; for $n \notin J$ put $S_n := S_{n_0}$, also nonempty. This makes $(S_n)_{n \in \mathbb{N}}$ a family of nonempty sets indexed by $\mathbb{N}$, defined with no choices. [step 1.2, given, L2, construct]

3.1 **This is the step that uses choice.** Apply $\mathrm{AC}_\omega$ [L3] to the family $(S_n)_{n \in \mathbb{N}}$ of step 2.1: it delivers a function $n \mapsto s_n$ with $s_n \in S_n$ for every $n$, that is, one surjection $s_n : \mathbb{N} \to A_n$ selected simultaneously for every $n \in J$. Nothing in the hypotheses names a particular surjection onto $A_n$, so this selection cannot be replaced by a definition; it is exactly here, and nowhere else in the proof, that the theorem leaves ZF. [step 2.1, L3, choose]

4.1 Define $t : \mathbb{N} \times \mathbb{N} \to U$ by $t(n,k) = s_n(k)$; the value lies in $A_n \subseteq U$ for $n \in J$ and in $A_{n_0} \subseteq U$ otherwise, so $t$ is well defined. It is surjective: any $x \in U$ lies in some $A_n$, which is then nonempty, so $n \in J$ and $x = s_n(k)$ for some $k$ because $s_n$ is onto $A_n$. [step 3.1, given]

5.1 Hence $t \circ \beta : \mathbb{N} \to U$ is a surjection by [L6], and $U \ne \varnothing$, so $U$ is at most countable by [L2]. [step 1.3, step 4.1, L2, L6]

6.1 In both cases $U$ is at most countable, which is the assertion. [step 1.1, step 5.1, L1] ∎

## Remarks

- **An at most countable index set is no more general.** If $I$ is at most countable and $(A_i)_{i \in I}$ are at most countable, then either $I$ is empty, and the union is $\varnothing$, or a surjection $r : \mathbb{N} \to I$ exists ([[lem-countable-iff-surjection-from-n]]) and $\bigcup_{i \in I} A_i = \bigcup_{n \in \mathbb{N}} A_{r(n)}$, which the theorem covers. That reindexing uses no choice.

- **The two-set union needs no choice at all**, and neither does any union of finitely many sets: with $A$ and $B$ both at most countable and nonempty, fix surjections $f, g : \mathbb{N} \to A, B$ (two choices made one after the other, which is ordinary existential instantiation, not a choice principle) and put $u(0,k) = f(k)$ and $u(n,k) = g(k)$ for $n \ne 0$, a surjection $\mathbb{N} \times \mathbb{N} \to A \cup B$. This is the form used in [[cor-irrationals-uncountable]], and keeping it separate from the countable case is the whole point of flagging step 3.1.

- The failure without choice is not a technicality about exotic sets: if ZF is consistent, then it is consistent with ZF that $\mathbb{R}$ itself is a countable union of countable sets ([[fs-countable-union-theorem-of-zf]]), even though $\mathbb{R}$ is provably uncountable in ZF ([[thm-r-uncountable]]).
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

### `thm-n-cross-n-countable`

````markdown
---
id: thm-n-cross-n-countable
kind: theorem
title: "$\\mathbb{N} \\times \\mathbb{N} \\approx \\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, def-equinumerous, def-injection-surjection-bijection, lem-nat-no-zero-divisors, thm-strong-induction, thm-recursion, thm-induction-principle, thm-omega-is-peano-system, lem-nat-nonzero-is-successor, def-nat-addition, def-nat-multiplication, def-nat-order, def-natural-numbers, lem-nat-add-commutative, lem-nat-add-associative, lem-nat-add-cancellative, lem-nat-add-identity, lem-nat-add-successor-left, lem-nat-mult-commutative, lem-nat-mult-associative, lem-nat-mult-distributive, lem-nat-mult-identity, lem-nat-mult-cancellative, lem-nat-order-add-compatible, lem-nat-trichotomy, thm-nat-linear-order, lem-nat-discrete]
justified_by: []
aliases: [pairing-bijection]
landmark: false
short: "$(m,n)\\mapsto 2^m(2n+1)$ is a bijection"
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
    - title: "Pairing function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pairing_function"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Statement

$\mathbb{N} \times \mathbb{N} \approx \mathbb{N}$ ([[def-equinumerous]]): the
plane of pairs of naturals is countably infinite ([[def-countable]]).

The bijection is exhibited, not merely asserted to exist. Define $2^m$ by
recursion on $m$ ([[thm-recursion]]) by $2^0 = 1$ and $2^{\sigma(m)} = 2^m + 2^m$,
and set

$$J(m,n) = 2^m \cdot \sigma(n + n), \qquad \text{that is} \qquad J(m,n) = 2^m(2n+1).$$

Then $J$ is a bijection from $\mathbb{N} \times \mathbb{N}$ onto
$\mathbb{N} \setminus \{0\}$, and $\sigma$ is a bijection from $\mathbb{N}$ onto
$\mathbb{N} \setminus \{0\}$, so $\sigma^{-1} \circ J$ is a bijection
$\mathbb{N} \times \mathbb{N} \to \mathbb{N}$. What makes $J$ bijective is the
decomposition of a nonzero natural into a power of two times an odd number,
existence and uniqueness both.

## Facts & Assumptions

**Given:** Addition and multiplication on $\mathbb{N}$ with $m + 0 = m$, $m + \sigma(k) = \sigma(m + k)$, $m \cdot 0 = 0$ and $m \cdot \sigma(k) = m \cdot k + m$ ([[def-nat-addition]], [[def-nat-multiplication]]); $1 := \sigma(0)$. Call $k \in \mathbb{N}$ **even** if $k = j + j$ for some $j$ and **odd** if $k = \sigma(j + j)$ for some $j$.

[L1] Recursion: for a set $X$, $x_0 \in X$ and $F : X \to X$ there is $h : \mathbb{N} \to X$ with $h(0) = x_0$ and $h(\sigma(m)) = F(h(m))$ ([[thm-recursion]]).

[L2] Peano: $\sigma(k) \ne 0$ and $\sigma$ is injective ([[thm-omega-is-peano-system]]); every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]).

[L3] Arithmetic laws: $+$ and $\cdot$ are commutative and associative, $1 \cdot n = n = n \cdot 1$, $0 + n = n$, $a(b + c) = ab + ac$ and $\sigma(a) + n = \sigma(a + n)$ ([[lem-nat-add-commutative]], [[lem-nat-add-associative]], [[lem-nat-add-identity]], [[lem-nat-mult-commutative]], [[lem-nat-mult-associative]], [[lem-nat-mult-identity]], [[lem-nat-mult-distributive]], [[lem-nat-add-successor-left]]).

[L4] Order laws: exactly one of $a < b$, $a = b$, $b < a$ holds ([[lem-nat-trichotomy]]); $\le$ is reflexive, antisymmetric, transitive and total ([[thm-nat-linear-order]]), so $<$ is transitive and mixes with $\le$, in the sense that each of $a < b < c$, $a \le b < c$ and $a < b \le c$ gives $a < c$: transitivity of $\le$ gives $a \le c$ in every case, while $a = c$ would force $b = c$ or $a = b$ by antisymmetry, contradicting whichever of the two hypotheses is strict; and $<$ is irreflexive, because $a < a$ would demand $a \ne a$ ([[def-nat-order]]); $a \le b \iff a + k \le b + k$ and $a < b \iff a + k < b + k$ ([[lem-nat-order-add-compatible]]); $a < b \iff \sigma(a) \le b$, so $a < \sigma(a)$ ([[lem-nat-discrete]]); and $a \le b$ means $a + c = b$ for some $c$ ([[def-nat-order]]), where moreover $a < b$ holds exactly when that $c$ is nonzero, since $c = 0$ gives $b = a$, while $c \ne 0$ with $a = b$ would give $c + a = a + c = a = 0 + a$ and hence $c = 0$ by additive cancellation ([[lem-nat-add-cancellative]], [[lem-nat-add-commutative]], [[lem-nat-add-identity]]).

[L5] Cancellation: $a \cdot k = b \cdot k$ with $k \ne 0$ gives $a = b$ ([[lem-nat-mult-cancellative]]); and $a \cdot b = 0$ forces $a = 0$ or $b = 0$ ([[lem-nat-no-zero-divisors]]).

[L6] Induction ([[thm-induction-principle]]) and strong induction ([[thm-strong-induction]]).

[L7] Bijections, injections, surjections, composition and inverses ([[def-injection-surjection-bijection]]); $A \approx B$ means a bijection $A \to B$ exists ([[def-equinumerous]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] with $X = \mathbb{N}$, $x_0 = 1$ and $F(x) = x + x$: this defines $m \mapsto 2^m$ with $2^0 = 1$ and $2^{\sigma(m)} = 2^m + 2^m$ for all $m$. [L1, construct]

1.2 Every natural is even or odd: by induction, $0 = 0 + 0$ is even; and if $k = j + j$ is even then $\sigma(k) = \sigma(j + j)$ is odd, while if $k = \sigma(j + j)$ is odd then $\sigma(k) = \sigma(\sigma(j+j)) = \sigma(\sigma(j) + j) = \sigma(j) + \sigma(j)$ is even, using $\sigma(j) + j = \sigma(j + j)$ and $x + \sigma(y) = \sigma(x + y)$. [L3, L6, given]

1.3 No natural is both even and odd, that is $j + j \ne \sigma(i + i)$ for all $i, j$: if $j \le i$ then $j + j \le i + j = j + i \le i + i < \sigma(i + i)$; if $i < j$ then $\sigma(i) \le j$, so $\sigma(i+i) < \sigma(\sigma(i+i)) = \sigma(\sigma(i) + i) = \sigma(i) + \sigma(i) \le j + j$; in both cases the two sides differ by irreflexivity of $<$. [L3, L4, given]

1.4 $\sigma$ is a bijection from $\mathbb{N}$ onto $\mathbb{N} \setminus \{0\}$: it is injective by [L2], its values are nonzero by [L2], and every nonzero natural is a value of $\sigma$ by [L2]. [L2, L7]

2.1 $2^m \ne 0$ for every $m$: by induction, $2^0 = \sigma(0) \ne 0$; and if $2^m \ne 0$ then $2^m = \sigma(a)$ for some $a$ by [L2], so $2^{\sigma(m)} = 2^m + 2^m = 2^m + \sigma(a) = \sigma(2^m + a) \ne 0$. [step 1.1, L2, L6, given]

2.2 $2^{m + d} = 2^m \cdot 2^d$ for all $m, d$: by induction on $d$, at $d = 0$ both sides are $2^m$ since $m + 0 = m$ and $2^m \cdot 1 = 2^m$; and if $2^{m+d} = 2^m \cdot 2^d$ then $2^{m + \sigma(d)} = 2^{\sigma(m+d)} = 2^{m+d} + 2^{m+d} = 2^m 2^d + 2^m 2^d = 2^m (2^d + 2^d) = 2^m \cdot 2^{\sigma(d)}$. [step 1.1, L3, L6, given]

3.1 Define $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ by $J(m,n) = 2^m \cdot \sigma(n+n)$. Its values are nonzero: $2^m \ne 0$ by step 2.1 and $\sigma(n+n) \ne 0$ by [L2], so $J(m,n) \ne 0$ by [L5]. Thus $J$ maps into $\mathbb{N} \setminus \{0\}$. [step 1.1, step 2.1, L2, L5, construct]

4.1 $J$ is injective. Suppose $2^m \sigma(n+n) = 2^{m'} \sigma(n'+n')$; by [L4] we may assume $m \le m'$, the other case being symmetric, and write $m' = m + d$. By step 2.2 the right side is $2^m (2^d \sigma(n'+n'))$, so cancelling the nonzero factor $2^m$ with [L5] and [L3] gives $\sigma(n+n) = 2^d \cdot \sigma(n'+n')$. If $d \ne 0$ then $d = \sigma(e)$ by [L2] and $2^d = 2^e + 2^e$, so the right side equals $w + w$ with $w = 2^e \sigma(n'+n')$, by [L3]; that would make $\sigma(n+n)$ both odd and even, contradicting step 1.3. Hence $d = 0$ and $m' = m$, and then $\sigma(n+n) = \sigma(n'+n')$ gives $n + n = n' + n'$ by injectivity of $\sigma$, whence $n = n'$ because $n < n'$ would force $n + n < n' + n = n + n' < n' + n'$ by [L4] and [L3], and symmetrically for $n' < n$. [step 1.1, step 1.3, step 2.1, step 2.2, step 3.1, L2, L3, L4, L5]

4.2 $J$ is surjective onto $\mathbb{N} \setminus \{0\}$: by strong induction [L6] we show every $k$ is $0$ or a value of $J$. Let $k \ne 0$ and assume the claim for all $j < k$. By step 1.2, $k$ is odd or even. If $k = \sigma(j+j)$ then $k = 1 \cdot \sigma(j+j) = 2^0 \sigma(j+j) = J(0,j)$ by [L3]. If $k = j + j$ then $j \ne 0$, since $j = 0$ would give $k = 0$; also $j < j + j = k$ by [L4], because $j + j = k$ with $j \ne 0$; so the hypothesis at $j$ and $j \ne 0$ give $j = 2^m \sigma(n+n)$ for some $m, n$, and then $k = j + j = 2^m \sigma(n+n) + 2^m \sigma(n+n) = (2^m + 2^m) \sigma(n+n) = 2^{\sigma(m)} \sigma(n+n) = J(\sigma(m), n)$ by [L3] and step 1.1. [step 1.1, step 1.2, step 3.1, L3, L4, L6]

5.1 Therefore $J$ is a bijection from $\mathbb{N} \times \mathbb{N}$ onto $\mathbb{N} \setminus \{0\}$, and composing with the inverse of the bijection $\sigma$ of step 1.4 yields the bijection $\sigma^{-1} \circ J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$; hence $\mathbb{N} \times \mathbb{N} \approx \mathbb{N}$ and $\mathbb{N} \times \mathbb{N}$ is countably infinite. [step 1.4, step 4.1, step 4.2, L7] ∎

## Remarks

- Written out, $\sigma^{-1}(J(m,n)) = 2^m(2n+1) - 1$, the standard bijection. The detour through $\mathbb{N} \setminus \{0\}$ avoids subtraction, which the naturals do not have as a total operation.

- The proof is a proof of unique factorisation into a power of two times an odd number: step 4.2 is existence and step 4.1 is uniqueness. Nothing weaker would do, and no appeal to a picture of the diagonal enumeration is made anywhere. Nothing here uses any choice principle.

- The Cantor pairing polynomial $(m,n) \mapsto \tfrac{(m+n)(m+n+1)}{2} + n$ is an alternative bijection. It is not used because halving is not available in $\mathbb{N}$ without first developing division with remainder, whereas doubling, which is all $2^m$ needs, is immediate from addition.
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


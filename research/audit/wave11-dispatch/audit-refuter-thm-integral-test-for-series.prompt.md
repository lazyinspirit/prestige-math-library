# Audit proof-refuter brief — Wave 11, A6

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
For an `ai-generated` Statement or counterexample, actively search for a
counterexample to the public claim or a failure in the witness. A false public
claim, invalid proof, missing necessary hypothesis, circularity, or materially
inaccurate load-bearing citation is fatal; a quickly closable gap is nonfatal.

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

- critical risk (14): 19 declared dependencies; 18 cited facts; 10 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language
- top-20 manifest-edge consumer (19 outgoing relationships)

## Target item — `thm-integral-test-for-series`

Normalized current SHA-256: `9adb7e767f66b4750006ad920ef0cb3b3901bffd11d02d6bc701458d55411e71`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-integral-test-for-series
kind: theorem
title: "The integral test: for $f \\ge 0$ nonincreasing on $[0,\\infty)$, $\\sum_k f(k)$ converges if and only if the sequence $\\bigl(\\int_0^N f\\bigr)_N$ is bounded, with $\\int_0^N f \\le \\sum_{k<N} f(k) \\le f(0) + \\int_0^N f$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-monotonicity-of-the-integral, thm-additivity-over-subintervals, lem-integral-elementary-bounds, thm-monotone-implies-integrable, lem-integrability-on-a-subinterval, def-monotone-function, def-series, thm-nonnegative-series-bounded-partial-sums, lem-finite-sum-laws, def-finite-sum, def-sequence, def-canonical-natural, lem-of-naturals-positive, def-oriented-integral, def-bounded-set, def-interval, def-darboux-integral, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: [thm-cauchy-integral-test]
landmark: true
short: "integral test for series"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Integral test for convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integral_test_for_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, Improper Riemann integrals"
      url: "https://www.jirka.org/ra/html/sec_impropriemann.html"
pipeline_run: null
---

## Statement

Let $f : [0,\infty) \to \mathbb{R}$ be nonincreasing ([[def-monotone-function]])
with $f(t) \ge 0$ for every $t \ge 0$. For $N \in \mathbb{N}$ write

$$J_N \;:=\; \int_0^{N} f ,$$

which is defined for every $N$: for $N \ge 1$ the restriction of $f$ to $[0,N]$
is monotone, hence bounded and integrable ([[thm-monotone-implies-integrable]]),
and $J_0 = \int_0^0 f = 0$ ([[def-oriented-integral]]). Here $N$ inside the
integral means the canonical natural $\iota(N) \in \mathbb{R}$
([[def-canonical-natural]]), as everywhere in this library. Let
$s_N := \sum_{k<N} f(k)$ be the partial sums of $\sum_k f(k)$
([[def-series]], [[def-finite-sum]]), the index $k$ ranging over $\mathbb{N}$,
which **contains $0$**. Then:

1. **The bracket.** For every $N \in \mathbb{N}$,
   $$J_N \;\le\; s_N \;\le\; f(0) + J_N .$$
2. **The test.** $(J_N)_{N\in\mathbb{N}}$ is nondecreasing, and $\sum_k f(k)$
   converges **if and only if** the set $\{\,J_N : N \in \mathbb{N}\,\}$ is
   bounded above ([[def-bounded-set]]).

**The conclusion is about a sequence of proper integrals, and that is
deliberate.** This library has not defined $\int_0^{\infty} f$ at this point in
the reading order — improper integrals are developed on a later page — so the
statement that a reader may expect, "$\sum_k f(k)$ converges if and only if
$\int_0^{\infty} f$ converges", is not available and is not made. What is proved
is the statement above, which is what that one abbreviates; the later page is
where the two are identified.

**The index starts at $0$.** Both the sum and the integral begin at $0$, because
$\mathbb{N}$ contains $0$ and a sequence is a function on $\mathbb{N}$
([[def-sequence]]). The classical statement, which starts at $1$, is the
statement about the first tail of $\sum_k f(k)$ and is not the statement above.

## Facts & Assumptions

**Given:** A nonincreasing $f : [0,\infty) \to \mathbb{R}$ with $f \ge 0$, and the notation $J_N = \int_0^N f$, $s_N = \sum_{k<N} f(k)$ for $N \in \mathbb{N}$.

[L1] A monotone function on a closed bounded interval with distinct endpoints is bounded and integrable there, as is its restriction to any closed subinterval with distinct endpoints ([[thm-monotone-implies-integrable]], [[lem-integrability-on-a-subinterval]], [[def-monotone-function]], [[def-darboux-integral]]).

[L2] If $\kappa \le u \le \mu$ on $[p,q]$ with $p<q$ and $u$ is integrable there, then $\kappa(q-p) \le \int_p^q u \le \mu(q-p)$ ([[thm-monotonicity-of-the-integral]], [[lem-integral-elementary-bounds]]).

[L3] Additivity over adjacent intervals, in the oriented form valid for arbitrary points ([[thm-additivity-over-subintervals]], claim 3, [[def-oriented-integral]]).

[L4] Finite sums: telescoping $\sum_{k<n}(c_{k+1}-c_k) = c_n - c_0$, splitting, additivity, and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] For a sequence $(a_k)$ of nonnegative reals, the partial sums are nondecreasing and $\sum a_k$ converges if and only if the set of partial sums is bounded above ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[def-sequence]]).

[L6] $\iota(0) = 0$, $\iota(N+1) = \iota(N)+1$, and $\iota$ is nondecreasing on $\mathbb{N}$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L7] Ordered-field arithmetic: the order is total and transitive, and adding constants preserves inequalities ([[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 For $k \in \mathbb{N}$ the interval $[\iota(k), \iota(k+1)]$ is nondegenerate of length $1$ by [L6], $f$ is integrable on it by [L1], and $f(k+1) \le f(t) \le f(k)$ for every $t$ in it, $f$ being nonincreasing. [given, L1, L6]

1.2 By [L3] and [L4], $J_N = \int_0^N f = \sum_{k<N}\int_k^{k+1} f$ for every $N \in \mathbb{N}$: writing $\Phi(x) := \int_0^x f$, each summand is $\Phi(k+1)-\Phi(k)$ and the sum telescopes to $\Phi(N) - \Phi(0) = J_N$. [L1, L3, L4, L6]

1.3 By [L4], $\sum_{k<N}f(k+1) = s_{N+1} - f(0)$, since splitting $s_{N+1} = \sum_{k<N+1}f(k)$ at index $1$ gives $f(0) + \sum_{j<N}f(1+j)$. [L4]

2.1 Hence $f(k+1) \le \int_{k}^{k+1} f \le f(k)$ for every $k \in \mathbb{N}$, by [L2] with $q - p = 1$. [step 1.1, L2]

3.1 Summing step 2.1 over $k < N$ with [L4] gives $\sum_{k<N} f(k+1) \;\le\; J_N \;\le\; \sum_{k<N} f(k) \;=\; s_N$, which is the left half of claim 1. [step 2.1, step 1.2, L4]

3.2 $(J_N)$ is nondecreasing: $J_{N+1} - J_N = \int_N^{N+1} f \ge 0$ by step 1.2 and [L2], since $f \ge 0$. [step 2.1, step 1.2, given, L2, L7]

4.1 So $s_{N+1} \le f(0) + J_N$ by step 3.1 and step 1.3; and $s_N \le s_{N+1}$ because $f(N) \ge 0$, so $s_N \le f(0) + J_N$, which is the right half of claim 1. [step 3.1, step 1.3, given, L4, L7]

4.2 **If $\sum_k f(k)$ converges**, then by [L5] the partial sums are bounded above, say $s_N \le S$ for every $N$, and step 3.1 gives $J_N \le s_N \le S$; so the set of $J_N$ is bounded above. [step 3.1, given, L5, L7]

5.1 **If the set of $J_N$ is bounded above**, say by a real $B$, then $s_N \le f(0) + B$ for every $N$ by step 4.1, so the partial sums are bounded above and $\sum_k f(k)$ converges by [L5], the terms $f(k)$ being nonnegative. [step 4.1, given, L5, L7]

6.1 Steps 5.1 and 4.2 are the two implications of claim 2, and step 3.2 is its first clause; claim 1 is steps 3.1 and 4.1. [step 3.1, step 4.1, step 3.2, step 5.1, step 4.2] ∎

## Remarks

- **Why the bracket is stated with $f(0)$ and not with a tail.** The two sums in step 3.1 differ by exactly the first term $f(0)$ and the last term $f(N)$; the clean two-sided statement that survives at every $N \ge 0$, including $N = 0$ where it reads $0 \le 0 \le f(0)$, is the one displayed in claim 1.

- **The version beginning at $k = 1$ is a statement about a tail.** For the family $(f(k))_{k \ge 1}$ the same argument on $[1,N]$ gives $\int_1^N f \le \sum_{k=1}^{N-1} f(k) \le f(1) + \int_1^N f$, and convergence of the two series is equivalent by [[lem-series-tail-invariance]]. Nothing above silently starts at $1$, and a reader comparing with a classical text should check which convention that text uses for $\mathbb{N}$.

- **Monotonicity of $f$ is used exactly twice**, in step 1.1, to bracket $f$ on a unit interval by its two endpoint values, and through [[thm-monotone-implies-integrable]] to know that $f$ is integrable on $[0,N]$ at all. Nonnegativity is used in three named places: to make $(J_N)$ nondecreasing in step 3.2, to pass from $s_{N+1}$ to $s_N$ in step 4.1, and to apply [[thm-nonnegative-series-bounded-partial-sums]], whose own hypothesis is that the terms are nonnegative. No claim is made here about what happens to the test if that hypothesis is dropped.
````

## Wave 11 provenance row

```json
{
  "id": "thm-integral-test-for-series",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_impropriemann.html"
  ],
  "rationale": "The source states the integral test for a positive decreasing function and its sampled series. The item reformulates convergence of the improper integral as boundedness of the proper-integral sequence indexed from zero, allows nonincreasing nonnegative f, and records explicit comparison inequalities.",
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
      "source": "thm-monotone-implies-integrable",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be monotone, that is\nnondecreasing or nonincreasing on $[a,b]$ ([[def-monotone-function]]). Then $f$\nis bounded ([[def-bounded-set]]) and Riemann integrable on $[a,b]$\n([[def-darboux-integral]]).\n\nMoreover, for the uniform partition $U_N$ of $[a,b]$ into $N \\ge 1$ parts\n([[def-partition-and-refinement]]),\n\n$$U(f,U_N) - L(f,U_N) \\;=\\; \\bigl|f(b) - f(a)\\bigr| \\cdot \\frac{b-a}{\\iota(N)} ,$$\n\nwhere $\\iota(N)$ is the canonical natural of $N$ in $\\mathbb{R}$\n([[def-canonical-natural]]). The right-hand side is an **equality**, not an\nestimate: the sum $\\sum_{i<N}(M_i - m_i)$ telescopes exactly, because on each\nsubinterval a monotone function attains its extremes at the two endpoints.\n\nNo continuity is assumed, and none holds in general: a nondecreasing function may\nbe discontinuous at every rational\n([[thm-monotone-with-prescribed-discontinuity-set]]), and the companion page of\nthis pair works out the integral of the floor function, the simplest\ndiscontinuous monotone integrand.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-integrability-on-a-subinterval",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]), and let $c, d$ satisfy\n\n$$a \\;\\le\\; c \\;<\\; d \\;\\le\\; b .$$\n\nThen the restriction of $f$ to $[c,d]$ is bounded ([[def-bounded-set]]) and\nintegrable on $[c,d]$.\n\nThe degenerate case $c = d$ is not an omission: there $\\int_c^c f = 0$ by\n[[def-oriented-integral]], and no partition of $[c,d]$ exists to speak of\n([[def-partition-and-refinement]]).",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-monotone-function",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]). Let $A \\subseteq \\mathbb{R}$ and let\n$f : A \\to \\mathbb{R}$. Then $f$ is:\n\n- **nondecreasing** when $f(x) \\le f(y)$ for all $x, y \\in A$ with $x \\le y$;\n- **increasing**, or *strictly increasing*, when $f(x) < f(y)$ for all\n  $x, y \\in A$ with $x < y$;\n- **nonincreasing** when $f(x) \\ge f(y)$ for all $x, y \\in A$ with $x \\le y$;\n- **decreasing**, or *strictly decreasing*, when $f(x) > f(y)$ for all\n  $x, y \\in A$ with $x < y$;\n- **monotone** when it is nondecreasing or nonincreasing;\n- **strictly monotone** when it is increasing or decreasing.\n\nThe naming follows the convention of [[def-monotone-sequence]], which is the\nconvention of this library throughout: *increasing* is the strict notion and\n*nondecreasing* the weak one.\n\n**An increasing function is nondecreasing, and a decreasing function is\nnonincreasing.** For $x \\le y$ either $x < y$, and then $f(x) < f(y)$, hence\n$f(x) \\le f(y)$; or $x = y$, and then $f(x) = f(y)$. The same argument with the\ninequalities reversed gives the second claim. So strictly monotone implies\nmonotone.\n\n**A strictly monotone function is injective**\n([[def-injection-surjection-bijection]]). Let $f$ be increasing and let\n$x, y \\in A$ with $x \\ne y$. By trichotomy either $x < y$, and then\n$f(x) < f(y)$, or $y < x$, and then $f(y) < f(x)$; in both cases\n$f(x) \\ne f(y)$. The decreasing case is the same argument. The converse fails,\nand the failure is not exotic: a continuous injection on an interval *is*\nstrictly monotone ([[thm-continuous-injection-on-an-interval-is-strictly-monotone]]),\nbut on a domain that is not an interval it need not be.\n\n**Negation exchanges the two directions.** For $g := -f$, that is\n$g(x) := -f(x)$, the four conditions above are exchanged in pairs: $f$ is\nnondecreasing exactly when $g$ is nonincreasing, and $f$ is increasing exactly\nwhen $g$ is decreasing, because $u \\le v$ holds exactly when $-v \\le -u$\n([[def-ordered-field]]). Several proofs below use this to reduce a nonincreasing\ncase to a nondecreasing one.\n\n**Monotone on a set, not at a point.** All six conditions are conditions on the\nwhole of $A$; unlike continuity ([[def-continuity-real]]) there is no pointwise\nversion, and none is used in this library. The domain $A$ is an arbitrary subset\nof $\\mathbb{R}$; where a result needs $A$ to be an interval\n([[def-interval]]) it says so, and the hypothesis is never decoration.\n\n### The dictionary to monotone sequences\n\nA sequence of reals is a function $x : \\mathbb{N} \\to \\mathbb{R}$\n([[def-sequence]]), and [[def-monotone-sequence]] calls it nondecreasing when\n$x_j \\le x_k$ for all $j \\le k$, increasing when $x_j < x_k$ for all $j < k$,\nand so on. Those are **the same four conditions as above**, read with the\nordered set $\\mathbb{N}$ in place of the ordered subset $A \\subseteq \\mathbb{R}$\nand with the comparison of indices in place of the comparison of arguments. So\nnothing new is introduced here for sequences, and the two vocabularies may be\nused interchangeably: the words *nondecreasing*, *increasing*, *nonincreasing*,\n*decreasing*, *monotone* and *strictly monotone* mean the corresponding\ncondition on the domain at hand.\n\nOne consequence is used repeatedly, and it has to be stated carefully because\ncomposition does **not** simply preserve the four words. Let $(x_k)$ be a\n**nondecreasing** sequence with $x_k \\in A$ for every $k$, so that $j \\le k$ gives\n$x_j \\le x_k$. Then:\n\n- if $f$ is nondecreasing, $(f(x_k))$ is nondecreasing, since $f(x_j) \\le f(x_k)$;\n- if $f$ is nonincreasing, $(f(x_k))$ is **nonincreasing**, since\n  $f(x_j) \\ge f(x_k)$.\n\nSo along a nondecreasing sequence the composite inherits the direction of $f$;\nand with $(x_k)$ increasing and $f$ increasing, $(f(x_k))$ is increasing, while\nwith $(x_k)$ increasing and $f$ decreasing, $(f(x_k))$ is decreasing.\n\n**Along a nonincreasing sequence the direction is reversed, not inherited.** If\n$(x_k)$ is nonincreasing and $f$ is nonincreasing, then $j \\le k$ gives\n$x_j \\ge x_k$ and hence $f(x_j) \\le f(x_k)$: the composite is **nondecreasing**.\nThe witness is $f(x) = -x$ on $A = \\mathbb{R}$ with $x_k = -k$, where both $f$ and\n$(x_k)$ are decreasing and $f(x_k) = k$ is increasing. Two order-reversing maps\ncompose to an order-preserving one, exactly as for the four words applied to\nfunctions.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-darboux-integral",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]). Write $\\mathcal{P}$ for the set of all partitions of\n$[a,b]$ ([[def-partition-and-refinement]]) and put\n\n$$\\mathcal{L} \\;:=\\; \\{\\, L(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}, \\qquad \\mathcal{U} \\;:=\\; \\{\\, U(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}$$\n\nfor the sets of lower and of upper Darboux sums ([[def-darboux-sums]]).\n\n### Both extrema exist\n\n**$\\mathcal{P}$ is nonempty**: the pair $(1, t)$ with $t_0 := a$ and $t_k := b$\nfor $k \\ge 1$ is a partition of $[a,b]$, since $a < b$. So $\\mathcal{L}$ and\n$\\mathcal{U}$ are nonempty.\n\n**$\\mathcal{L}$ is bounded above and $\\mathcal{U}$ is bounded below.** Fix any\n$Q \\in \\mathcal{P}$. By claim 2 of [[lem-refinement-inequalities]],\n$L(f,P) \\le U(f,Q)$ for every $P \\in \\mathcal{P}$, so $U(f,Q)$ is an upper bound\nof $\\mathcal{L}$; and $L(f,Q) \\le U(f,P)$ for every $P$, so $L(f,Q)$ is a lower\nbound of $\\mathcal{U}$.\n\nHence a nonempty set bounded above has a supremum\n([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum\n([[thm-infimum-property]], [[def-infimum]]), each unique ([[lem-sup-unique]]).\nThe **lower** and **upper Darboux integrals** of $f$ over $[a,b]$ are the real\nnumbers\n\n$$\\underline{\\int_a^b} f \\;:=\\; \\sup \\mathcal{L} \\;=\\; \\sup_{P} L(f,P), \\qquad \\overline{\\int_a^b} f \\;:=\\; \\inf \\mathcal{U} \\;=\\; \\inf_{P} U(f,P) .$$\n\n### The lower integral never exceeds the upper one\n\n$$\\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f .$$\n\nIndeed, for each fixed $Q \\in \\mathcal{P}$ the number $U(f,Q)$ is an upper bound\nof $\\mathcal{L}$, so the least upper bound satisfies\n$\\underline{\\int_a^b} f \\le U(f,Q)$. As $Q$ was arbitrary, $\\underline{\\int_a^b}f$\nis a lower bound of $\\mathcal{U}$, and the greatest lower bound satisfies\n$\\underline{\\int_a^b} f \\le \\overline{\\int_a^b} f$ ([[def-infimum]]).\n\nMoreover, for **every** partition $P$,\n\n$$L(f,P) \\;\\le\\; \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f \\;\\le\\; U(f,P) ,$$\n\nthe outer inequalities because a member of a set is at most its supremum and at\nleast its infimum.\n\n### Integrability\n\n$f$ is **Darboux integrable on $[a,b]$**, and on this page simply\n**integrable**, when\n\n$$\\underline{\\int_a^b} f \\;=\\; \\overline{\\int_a^b} f ,$$\n\nand then the common value is written\n\n$$\\int_a^b f \\qquad \\text{or} \\qquad \\int_a^b f(x)\\,\\mathrm{d}x ,$$\n\nthe **integral of $f$ over $[a,b]$**. It is a single well-determined real\nnumber, being the common value of two numbers each of which is unique\n([[lem-sup-unique]]). Without the displayed equality the symbol $\\int_a^b f$ is\nnot defined and is never written.\n\n**The inequality above is the whole difficulty.** By the previous paragraph\nintegrability is *never* a question of one integral exceeding the other, only of\nthe gap $\\overline{\\int_a^b} f - \\underline{\\int_a^b} f \\ge 0$ being $0$; and by\n[[thm-riemann-criterion]] that gap is $0$ exactly when a single partition can be\nfound making $U(f,P) - L(f,P)$ small. Whether that is possible is settled\ncompletely, in terms of the discontinuities of $f$, by\n[[thm-lebesgue-criterion]].\n\n**\"Riemann integrable\" means the same thing here.** The definition above is\nDarboux's. Riemann's own definition, in terms of tagged partitions of small\nmesh, is [[def-tagged-partition-and-riemann-sum]], and the two define the same\nclass of functions with the same integral by [[thm-darboux-equals-riemann]].\nUntil that theorem is proved the two phrases are kept apart; after it they are\nused interchangeably, as they are throughout the literature.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-monotonicity-of-the-integral",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f, g : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]). Then:\n\n1. **Nonnegativity.** If $f(x) \\ge 0$ for every $x \\in [a,b]$ then\n   $\\int_a^b f \\ge 0$.\n2. **Monotonicity.** If $f(x) \\le g(x)$ for every $x \\in [a,b]$ then\n   $$\\int_a^b f \\;\\le\\; \\int_a^b g .$$\n3. **Two-sided bound.** If $m \\le f(x) \\le M$ for every $x \\in [a,b]$, with\n   $m, M$ real, then\n   $$m\\,(b-a) \\;\\le\\; \\int_a^b f \\;\\le\\; M\\,(b-a) .$$\n\n**Equality in claim 1 does not force $f$ to vanish.** A nonnegative integrable\nfunction with integral $0$ may be positive at infinitely many points; that is\n[[fs-nonnegative-integrable-with-zero-integral-vanishes]] on the previous page's\ncompanion. Under the additional hypothesis of continuity the conclusion does\nhold, and that is [[thm-nonnegative-continuous-with-zero-integral-vanishes]]\nbelow.\n\n**Claim 2 is stated for $a < b$ and is not orientation-invariant.** With the\nconvention of [[def-oriented-integral]], $f \\le g$ gives\n$\\int_u^v f \\le \\int_u^v g$ when $u \\le v$ and the reverse inequality when\n$u \\ge v$, since both sides change sign together.",
      "uses": [
        "2.1",
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-integral-elementary-bounds",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ satisfy\n\n$$m \\;\\le\\; f(x) \\;\\le\\; M \\qquad \\text{for every } x \\in [a,b],$$\n\nwith $m, M$ real. Then $f$ is bounded ([[def-bounded-set]]), so its Darboux sums\nand integrals are defined ([[def-darboux-sums]], [[def-darboux-integral]]), and\nfor **every** partition $P$ of $[a,b]$ ([[def-partition-and-refinement]])\n\n$$m(b-a) \\;\\le\\; L(f,P) \\;\\le\\; \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f \\;\\le\\; U(f,P) \\;\\le\\; M(b-a) .$$\n\nIn particular, taking $f$ to be the constant function with value $c$:\n\n$$\\int_a^b c \\;=\\; c\\,(b-a) ,$$\n\nthe constant function being integrable, with $L(f,P) = U(f,P) = c(b-a)$ for\nevery partition $P$.",
      "uses": [
        "2.1",
        "3.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-additivity-over-subintervals",
      "source_section": "Statement",
      "quote": "Let $a < c < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]). Then:\n\n1. $f$ is integrable on $[a,b]$ ([[def-darboux-integral]]) **if and only if** its\n   restrictions to $[a,c]$ and to $[c,b]$ are integrable;\n2. and in that case\n   $$\\int_a^b f \\;=\\; \\int_a^c f \\;+\\; \\int_c^b f .$$\n3. **Oriented form.** Let $\\alpha < \\beta$ be reals, let $f : [\\alpha,\\beta] \\to\n   \\mathbb{R}$ be integrable, and let $u, v, w \\in [\\alpha,\\beta]$ be arbitrary.\n   Then, with the convention of [[def-oriented-integral]],\n   $$\\int_u^v f \\;+\\; \\int_v^w f \\;=\\; \\int_u^w f .$$\n\nClaim 3 is where [[def-oriented-integral]] earns its place: it holds for every\narrangement of the three points, including the degenerate ones, and it is the\nform used everywhere below.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-oriented-integral",
      "source_section": "Definition",
      "quote": "**Why this item is first.** The published definition of the integral does not\ncover this page. [[def-darboux-integral]] is stated for reals $a < b$, because\nthe partitions it quantifies over are those of [[def-partition-and-refinement]],\nwhose standing hypothesis is $a < b$: with $a = b$ the chain\n$a = t_0 < \\dots < t_n = b$ is unsatisfiable. So $\\int_a^b f$ is an undefined\nsymbol whenever $a \\ge b$, and every additivity statement below would be\nill-formed as it is usually written. This item extends the notation, and nothing\nelse: the object it names is still the Darboux integral of\n[[def-darboux-integral]].\n\nLet $u, v \\in \\mathbb{R}$ and write\n\n$$[u \\wedge v,\\ u \\vee v] \\;:=\\; \\text{the closed interval with endpoints } u \\text{ and } v$$\n\n([[def-interval]]). Let $f$ be a real-valued function whose domain contains that\ninterval. Say that **$f$ is integrable between $u$ and $v$** when either $u = v$,\nor $u \\ne v$ and the restriction of $f$ to $[u \\wedge v,\\ u \\vee v]$ is bounded\n([[def-bounded-set]]) and Darboux integrable there ([[def-darboux-integral]],\n[[def-darboux-sums]]). For such $f$ define\n\n$$\\int_u^v f \\;:=\\; \\begin{cases} \\text{the Darboux integral of } f \\text{ over } [u,v] & \\text{if } u < v, \\\\[2pt] 0 & \\text{if } u = v, \\\\[2pt] -\\displaystyle\\int_v^u f & \\text{if } u > v. \\end{cases}$$\n\n**There is nothing to check for consistency.** The three clauses are indexed by\nthe three cases of trichotomy, $u < v$, $u = v$ and $u > v$, which are mutually\nexclusive and exhaustive; no pair of them ever applies to the same $(u,v)$. In\nparticular the first clause is untouched, so on $u < v$ this is the published\nintegral verbatim and every published theorem about it applies unchanged.\n\n**The middle clause is a stipulation, not a computation.** It is *not* claimed\nthat $0$ is a value forced by the $u < v$ definition in any limiting sense; that\ndefinition simply says nothing at $u = v$, and $\\int_u^u f := 0$ is what is\nwritten there. It is also unconditional: no hypothesis on $f$ beyond being\ndefined at $u$ is asked for, since the case $u = v$ never refers to a partition.\n\n### The two consequences used throughout the page\n\n**Antisymmetry, for every pair.** For all reals $u, v$ with $f$ integrable\nbetween them,\n\n$$\\int_u^v f \\;=\\; -\\int_v^u f .$$\n\nIndeed if $u < v$ then $v > u$ and the third clause reads\n$\\int_v^u f = -\\int_u^v f$, which rearranges to the display; if $u = v$ both\nsides are $0$; and if $u > v$ the third clause is the display itself.\n\n**Absolute values agree.** Consequently\n$\\bigl|\\int_u^v f\\bigr| = \\bigl|\\int_v^u f\\bigr|$ for every such pair.\n\n**An obligation recorded here and discharged elsewhere.** With this convention\nthe additivity identity\n\n$$\\int_u^v f \\;+\\; \\int_v^w f \\;=\\; \\int_u^w f$$\n\nholds for **every** arrangement of $u, v, w$ in an interval on which $f$ is\nintegrable, not only for $u < v < w$. That is a theorem and not part of this\ndefinition; it is proved as the last clause of\n[[thm-additivity-over-subintervals]], and nothing on this page uses it before it\nis proved there.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), in particular an ordered field\n([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set\nof natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$\n([[def-nat-addition]]).\n\nLet $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for\n$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the\nupper index**, which is legitimate because of the recursion theorem\n([[thm-recursion]]). That theorem produces a function of one variable, so the\nrunning index has to be carried along inside the value: applying it to the set\n$A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function\n$f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique\n$g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with\n\n$$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$\n\nWrite $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates.\n\n**The first coordinate is the index itself, and that is a small induction, not an\nobservation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if\n$\\pi_1(g(n)) = n$, then\n$g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$,\nso $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every\n$n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed\nclauses be read off, and doing so gives\n\n$$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$\n\n$\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those\ntwo properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies\nthe two clauses defining $g$, hence equals $g$ by the uniqueness clause of\n[[thm-recursion]], so $\\Sigma' = \\Sigma$.\n\nWe write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting\nelement $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same\ninduction on the first coordinate and the same uniqueness argument, gives the\nunique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with\n\n$$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$\n\nand we write $\\prod_{k < n} a_k := \\Pi_n$.\n\n**Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate\n\n$$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$\n\nand, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$\nfor the number of terms,\n\n$$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$\n\nWhen $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while\nthe empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is\nnotation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the\nempty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of\n$\\mathbb{N}$ and is only a way of writing \"no terms\".\n\nOnly finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation\n$\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list\n$a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the\nlist to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively\n$a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "uses": [
        "1.2",
        "1.3",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let\n$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and\nfinite products as in [[def-finite-sum]]. Then:\n\n1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$.\n2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).\n3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$.\n4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.\n5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$.\n6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "uses": [
        "1.2",
        "1.3",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with $a_k \\ge 0$ for every $k \\in \\mathbb{N}$,\nlet $s_n = \\sum_{k<n} a_k$ be its partial sums and let\n$S = \\{\\, s_n : n \\in \\mathbb{N} \\,\\}$ be the range of $(s_n)$ ([[def-series]]).\nThen:\n\n1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \\ge 0$ for every\n   $n$;\n2. $\\sum a_k$ converges **if and only if** $S$ is bounded above\n   ([[def-bounded-set]]), and in that case\n   $$\\sum_{k=0}^{\\infty} a_k \\;=\\; \\sup S ,$$\n   so in particular $s_n \\le \\sum_{k=0}^{\\infty} a_k$ for every $n$;\n3. if $S$ is not bounded above then $s_n \\to +\\infty$\n   ([[def-divergence-to-infinity]]) and $\\sum a_k$ diverges.\n\nThis is the theorem that makes the nonnegative theory work: for terms of one\nsign, convergence is a boundedness question and no candidate limit is ever\nneeded. Every comparison test on this page is an application of it.",
      "uses": [
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and\na **sequence of reals** is a function $a : \\mathbb{N} \\to \\mathbb{R}$\n([[def-sequence]]), written $(a_k)$; recall that $\\mathbb{N}$ contains $0$.\n\n**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial\nsums** is\n\n$$s_n \\;:=\\; \\sum_{k < n} a_k \\qquad (n \\in \\mathbb{N}),$$\n\nthe finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and\n$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses\nthat define the finite sum. Note that $s_n$ is the sum of the $n$ terms\n$a_0, \\dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last\none.\n\n**Convergence, the sum, divergence.** The **series** of $(a_k)$, written\n$\\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges\n([[def-real-limit]]), and then the **sum of the series** is\n\n$$\\sum_{k=0}^{\\infty} a_k \\;:=\\; \\lim_{n} s_n .$$\n\nThe series **diverges** when $(s_n)$ does not converge. A convergent sequence of\nreals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names\na single real number and nothing further has to be checked for it to be\nwell defined.\n\n**Series with a general starting index.** Let $m \\in \\mathbb{N}$ and let $a$ be a\nfunction on $\\{\\, k \\in \\mathbb{N} : k \\ge m \\,\\}$, which we call a **family from\n$m$** and write $(a_k)_{k \\ge m}$. The series\n\n$$\\sum_{k \\ge m} a_k$$\n\nis by definition the series of the sequence $b_j := a_{j + m}$,\n$j \\in \\mathbb{N}$, which is a genuine sequence of reals; it converges exactly\nwhen that series converges, and its sum is then written\n$\\sum_{k = m}^{\\infty} a_k$. Its partial sums are\n\n$$\\sum_{k=m}^{n-1} a_k \\;=\\; \\sum_{j < n-m} a_{m+j} \\qquad (n \\ge m),$$\n\nin the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum\n$0$. A sequence on $\\mathbb{N}$ is the case $m = 0$, and the two readings of\n$\\sum a_k$ agree there, since $b_j = a_j$.\n\n**This clause is not a convenience.** Sequences in this library are functions on\n$\\mathbb{N}$ and $\\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the\nclassical series are built from expressions that are undefined at the index $0$:\n$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \\ge 1$. Writing such a series as\n$\\sum_{k \\ge 1} a_k$ names an honest object, whereas writing it as a sequence on\n$\\mathbb{N}$ would require a value at an index where the defining expression has\nnone. Every statement on this page says which starting index it uses.\n\n**Tail series.** For $N \\in \\mathbb{N}$, the **$N$-th tail series** of\n$\\sum a_k$ is $\\sum_{k \\ge N} a_k$, that is the series of the $N$-th tail\n$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The\n$0$-th tail series is the series itself.",
      "uses": [
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],\n[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and\n$\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],\n[[def-nat-order]]).\n\nA **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write\n$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or\n$(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is\nthe subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$.\n\nLet $(x_k)$ be a sequence of reals and let $P$ be a property of indices.\n\n- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for\n  every $k \\in \\mathbb{N}$; it is **unbounded** otherwise.\n- $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds\n  for every $k \\ge K$.\n- $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some\n  $k \\ge K$ for which $P(k)$ holds.\n- For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence\n  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is\n  again a sequence of reals.\n- A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if\n  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$\n  along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$;\n  it is again a sequence of reals.\n\n**Convergence and Cauchyness are not defined here.** They are already fixed, for\nsequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to\n$x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is\n$K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$\nis *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$\nwith $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the\ntoolkit for those two notions and does not restate them. A sequence\n**converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):\n\n$$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$\n\n$\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written\n$n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times.\n\n**Why the notation is needed at all.** A natural number in this library is a von\nNeumann natural, that is a set ([[def-natural-numbers]]), and a set is not an\nelement of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when\n$n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and\n$x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field,\nand writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an\ninformal text would write $1/(k+1)$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L7",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "3.2",
        "4.1",
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "3.2",
        "4.1",
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "3.2",
        "4.1",
        "4.2",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-integral-test-for-series-step-1-1",
      "claim": "For $k \\in \\mathbb{N}$ the interval $[\\iota(k), \\iota(k+1)]$ is nondegenerate of length $1$ by [L6], $f$ is integrable on it by [L1], and $f(k+1) \\le f(t) \\le f(k)$ for every $t$ in it, $f$ being nonincreasing. [given, L1, L6]",
      "step": "1.1",
      "inputs": [
        "given",
        "L1",
        "L6"
      ]
    },
    {
      "id": "thm-integral-test-for-series-step-1-2",
      "claim": "By [L3] and [L4], $J_N = \\int_0^N f = \\sum_{k<N}\\int_k^{k+1} f$ for every $N \\in \\mathbb{N}$: writing $\\Phi(x) := \\int_0^x f$, each summand is $\\Phi(k+1)-\\Phi(k)$ and the sum telescopes to $\\Phi(N) - \\Phi(0) = J_N$. [L1, L3, L4, L6]",
      "step": "1.2",
      "inputs": [
        "L1",
        "L3",
        "L4",
        "L6"
      ]
    },
    {
      "id": "thm-integral-test-for-series-step-1-3",
      "claim": "By [L4], $\\sum_{k<N}f(k+1) = s_{N+1} - f(0)$, since splitting $s_{N+1} = \\sum_{k<N+1}f(k)$ at index $1$ gives $f(0) + \\sum_{j<N}f(1+j)$. [L4]",
      "step": "1.3",
      "inputs": [
        "L4"
      ]
    },
    {
      "id": "thm-integral-test-for-series-step-2-1",
      "claim": "Hence $f(k+1) \\le \\int_{k}^{k+1} f \\le f(k)$ for every $k \\in \\mathbb{N}$, by [L2] with $q - p = 1$. [step 1.1, L2]",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L2"
      ]
    },
    {
      "id": "thm-integral-test-for-series-step-3-1",
      "claim": "Summing step 2.1 over $k < N$ with [L4] gives $\\sum_{k<N} f(k+1) \\;\\le\\; J_N \\;\\le\\; \\sum_{k<N} f(k) \\;=\\; s_N$, which is the left half of claim 1. [step 2.1, step 1.2, L4]",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "step 1.2",
        "L4"
      ]
    },
    {
      "id": "thm-integral-test-for-series-step-3-2",
      "claim": "$(J_N)$ is nondecreasing: $J_{N+1} - J_N = \\int_N^{N+1} f \\ge 0$ by step 1.2 and [L2], since $f \\ge 0$. [step 2.1, step 1.2, given, L2, L7]",
      "step": "3.2",
      "inputs": [
        "step 2.1",
        "step 1.2",
        "given",
        "L2",
        "L7"
      ]
    },
    {
      "id": "thm-integral-test-for-series-step-4-1",
      "claim": "So $s_{N+1} \\le f(0) + J_N$ by step 3.1 and step 1.3; and $s_N \\le s_{N+1}$ because $f(N) \\ge 0$, so $s_N \\le f(0) + J_N$, which is the right half of claim 1. [step 3.1, step 1.3, given, L4, L7]",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "step 1.3",
        "given",
        "L4",
        "L7"
      ]
    },
    {
      "id": "thm-integral-test-for-series-step-4-2",
      "claim": "**If $\\sum_k f(k)$ converges**, then by [L5] the partial sums are bounded above, say $s_N \\le S$ for every $N$, and step 3.1 gives $J_N \\le s_N \\le S$; so the set of $J_N$ is bounded above. [step 3.1, given, L5, L7]",
      "step": "4.2",
      "inputs": [
        "step 3.1",
        "given",
        "L5",
        "L7"
      ]
    },
    {
      "id": "thm-integral-test-for-series-step-5-1",
      "claim": "**If the set of $J_N$ is bounded above**, say by a real $B$, then $s_N \\le f(0) + B$ for every $N$ by step 4.1, so the partial sums are bounded above and $\\sum_k f(k)$ converges by [L5], the terms $f(k)$ being nonnegative. [step 4.1, given, L5, L7]",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "given",
        "L5",
        "L7"
      ]
    },
    {
      "id": "thm-integral-test-for-series-step-6-1",
      "claim": "Steps 5.1 and 4.2 are the two implications of claim 2, and step 3.2 is its first clause; claim 1 is steps 3.1 and 4.1. [step 3.1, step 4.1, step 3.2, step 5.1, step 4.2] ∎",
      "step": "6.1",
      "inputs": [
        "step 3.1",
        "step 4.1",
        "step 3.2",
        "step 5.1",
        "step 4.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-integral-test-for-series concerns stipulated functions and points; no empty family, empty sum, or empty choice domain changes its assertion."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement includes the zero boundary, and step 1.2 treats or preserves that case."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement includes the unit/first-index boundary, and step 1.1 treats or preserves that case."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement fixes the concrete interval, and step 1.1 uses that nondegenerate domain."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement specifies the closed or oriented interval convention; step 1.2 handles the endpoint data used by the argument."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 establishes or explicitly fixes the object before the proof chooses or extremizes it."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "The forward direction in the Statement is covered by the derivation beginning at step 1.1."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "The reverse direction in the Statement is completed by step 6.1."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the published A2 contract; independent risk routing occurs after A3."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-monotonicity-of-the-integral",
    "declared_target": "thm-monotonicity-of-the-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-additivity-over-subintervals",
    "declared_target": "thm-additivity-over-subintervals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "lem-integral-elementary-bounds",
    "declared_target": "lem-integral-elementary-bounds",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-monotone-implies-integrable",
    "declared_target": "thm-monotone-implies-integrable",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "lem-integrability-on-a-subinterval",
    "declared_target": "lem-integrability-on-a-subinterval",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-monotone-function",
    "declared_target": "def-monotone-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-oriented-integral",
    "declared_target": "def-oriented-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-darboux-integral",
    "declared_target": "def-darboux-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-integral-test-for-series",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
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

## Full exact-current text of every cited or declared item (20)

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

### `def-canonical-natural`

````markdown
---
id: def-canonical-natural
kind: definition
title: "The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-natural-numbers, thm-recursion]
justified_by: []
forward_refs: [def-metric-completion]
aliases: []
landmark: false
short: "$\\iota(n) = n \\cdot 1_F$"
verification:
  precheck: n/a
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## Remarks

- **Where the index shift comes from.** $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]) and $\iota(0) = 0_F$, so $1/\iota(k)$ is undefined at
  $k = 0$. A family of reciprocals indexed by $\mathbb{N}$ is therefore written
  over $\iota(k+1)$, which is why the harmonic and telescoping families of this
  library run over $k+1$ rather than over $k$. This is bookkeeping, not a
  restriction: the values are the usual ones.

- **This definition records notation; the arithmetic is proved elsewhere.** That
  $\iota$ is strictly increasing and positive on $n \ge 1$, and that it carries
  sums to sums and products to products, is [[lem-of-naturals-positive]], stated
  for an ordered field. That lemma introduces the same element by the equivalent
  recursion $1 \cdot 1_F = 1_F$, $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, which
  agrees with the definition above because $\iota(1) = \iota(0) + 1_F = 1_F$.
  Nothing here is new mathematics; the definition exists so that the notation has
  a home a reader can look up.

- **The symbol $\iota$ is used in this library for other canonical maps, and this
  definition does not govern them.** It also denotes the canonical field
  embedding $\iota : \mathbb{Q} \to F$ ([[lem-of-q-embeds]]), the isometric
  embedding of a metric space into a completion ([[def-metric-completion]]), and
  an inclusion map $\iota : S \to X$ of a subspace. Each of those is introduced
  where it is used and means something different from the map defined here. What
  the four share is only that each is the canonical map of its situation.

- **Fields, not just ordered fields.** The recursion needs no order, so the
  definition is stated for a field; every use in this library is in an ordered
  field, and the order is what makes $\iota$ injective
  ([[lem-of-naturals-positive]]). In a field of positive characteristic $\iota$
  is not injective, which is one reason the injectivity is a lemma rather than
  part of the definition.
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

### `def-darboux-integral`

````markdown
---
id: def-darboux-integral
kind: definition
title: "The lower and upper Darboux integrals of a bounded $f$ on $[a,b]$ as $\\sup_P L(f,P)$ and $\\inf_P U(f,P)$, Darboux integrability as their equality, and the notation $\\int_a^b f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-darboux-sums, lem-refinement-inequalities, def-partition-and-refinement, def-bounded-set, def-complete-ordered-field, def-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique, def-interval]
justified_by: []
aliases: [def-riemann-integrable, def-lower-and-upper-integral]
landmark: true
short: "Darboux integral $\\int_a^b f$"
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
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Definition

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]). Write $\mathcal{P}$ for the set of all partitions of
$[a,b]$ ([[def-partition-and-refinement]]) and put

$$\mathcal{L} \;:=\; \{\, L(f,P) \ : \ P \in \mathcal{P} \,\}, \qquad \mathcal{U} \;:=\; \{\, U(f,P) \ : \ P \in \mathcal{P} \,\}$$

for the sets of lower and of upper Darboux sums ([[def-darboux-sums]]).

### Both extrema exist

**$\mathcal{P}$ is nonempty**: the pair $(1, t)$ with $t_0 := a$ and $t_k := b$
for $k \ge 1$ is a partition of $[a,b]$, since $a < b$. So $\mathcal{L}$ and
$\mathcal{U}$ are nonempty.

**$\mathcal{L}$ is bounded above and $\mathcal{U}$ is bounded below.** Fix any
$Q \in \mathcal{P}$. By claim 2 of [[lem-refinement-inequalities]],
$L(f,P) \le U(f,Q)$ for every $P \in \mathcal{P}$, so $U(f,Q)$ is an upper bound
of $\mathcal{L}$; and $L(f,Q) \le U(f,P)$ for every $P$, so $L(f,Q)$ is a lower
bound of $\mathcal{U}$.

Hence a nonempty set bounded above has a supremum
([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum
([[thm-infimum-property]], [[def-infimum]]), each unique ([[lem-sup-unique]]).
The **lower** and **upper Darboux integrals** of $f$ over $[a,b]$ are the real
numbers

$$\underline{\int_a^b} f \;:=\; \sup \mathcal{L} \;=\; \sup_{P} L(f,P), \qquad \overline{\int_a^b} f \;:=\; \inf \mathcal{U} \;=\; \inf_{P} U(f,P) .$$

### The lower integral never exceeds the upper one

$$\underline{\int_a^b} f \;\le\; \overline{\int_a^b} f .$$

Indeed, for each fixed $Q \in \mathcal{P}$ the number $U(f,Q)$ is an upper bound
of $\mathcal{L}$, so the least upper bound satisfies
$\underline{\int_a^b} f \le U(f,Q)$. As $Q$ was arbitrary, $\underline{\int_a^b}f$
is a lower bound of $\mathcal{U}$, and the greatest lower bound satisfies
$\underline{\int_a^b} f \le \overline{\int_a^b} f$ ([[def-infimum]]).

Moreover, for **every** partition $P$,

$$L(f,P) \;\le\; \underline{\int_a^b} f \;\le\; \overline{\int_a^b} f \;\le\; U(f,P) ,$$

the outer inequalities because a member of a set is at most its supremum and at
least its infimum.

### Integrability

$f$ is **Darboux integrable on $[a,b]$**, and on this page simply
**integrable**, when

$$\underline{\int_a^b} f \;=\; \overline{\int_a^b} f ,$$

and then the common value is written

$$\int_a^b f \qquad \text{or} \qquad \int_a^b f(x)\,\mathrm{d}x ,$$

the **integral of $f$ over $[a,b]$**. It is a single well-determined real
number, being the common value of two numbers each of which is unique
([[lem-sup-unique]]). Without the displayed equality the symbol $\int_a^b f$ is
not defined and is never written.

**The inequality above is the whole difficulty.** By the previous paragraph
integrability is *never* a question of one integral exceeding the other, only of
the gap $\overline{\int_a^b} f - \underline{\int_a^b} f \ge 0$ being $0$; and by
[[thm-riemann-criterion]] that gap is $0$ exactly when a single partition can be
found making $U(f,P) - L(f,P)$ small. Whether that is possible is settled
completely, in terms of the discontinuities of $f$, by
[[thm-lebesgue-criterion]].

**"Riemann integrable" means the same thing here.** The definition above is
Darboux's. Riemann's own definition, in terms of tagged partitions of small
mesh, is [[def-tagged-partition-and-riemann-sum]], and the two define the same
class of functions with the same integral by [[thm-darboux-equals-riemann]].
Until that theorem is proved the two phrases are kept apart; after it they are
used interchangeably, as they are throughout the literature.

## Remarks

- **The supremum is over all partitions, and nothing is selected.** Both
  $\mathcal{L}$ and $\mathcal{U}$ are sets determined by $f$ and $[a,b]$ alone,
  and $\sup$ and $\inf$ are canonical, so no choice principle is involved in
  forming either integral. Where a choice does enter on this page is recorded in
  [[rem-riemann-integral-choice-ledger]].

- **Why the lower integral is a supremum and not an infimum.** Refining a
  partition can only increase a lower sum and decrease an upper sum
  ([[lem-refinement-inequalities]]), so the lower sums push up towards the
  integral and the upper sums push down towards it. Taking $\inf \mathcal{L}$
  would return the sum over the coarsest partition and would carry no
  information about $f$ beyond its infimum on $[a,b]$.

- **A bounded $f$ always has both integrals; only their equality can fail.** The
  Dirichlet function on $[0,1]$ has lower integral $0$ and upper integral $1$
  ([[fs-bounded-implies-riemann-integrable]]), which is the standard witness that
  the definition above is not vacuous in either direction.
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

### `def-oriented-integral`

````markdown
---
id: def-oriented-integral
kind: definition
title: "The integral with oriented limits: $\\int_a^a f := 0$ and $\\int_b^a f := -\\int_a^b f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-darboux-integral, def-partition-and-refinement, def-darboux-sums, def-bounded-set, def-interval]
justified_by: []
aliases: [def-oriented-limits-of-integration]
landmark: true
short: "oriented limits $\\int_b^a f = -\\int_a^b f$"
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: n/a
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Definition

**Why this item is first.** The published definition of the integral does not
cover this page. [[def-darboux-integral]] is stated for reals $a < b$, because
the partitions it quantifies over are those of [[def-partition-and-refinement]],
whose standing hypothesis is $a < b$: with $a = b$ the chain
$a = t_0 < \dots < t_n = b$ is unsatisfiable. So $\int_a^b f$ is an undefined
symbol whenever $a \ge b$, and every additivity statement below would be
ill-formed as it is usually written. This item extends the notation, and nothing
else: the object it names is still the Darboux integral of
[[def-darboux-integral]].

Let $u, v \in \mathbb{R}$ and write

$$[u \wedge v,\ u \vee v] \;:=\; \text{the closed interval with endpoints } u \text{ and } v$$

([[def-interval]]). Let $f$ be a real-valued function whose domain contains that
interval. Say that **$f$ is integrable between $u$ and $v$** when either $u = v$,
or $u \ne v$ and the restriction of $f$ to $[u \wedge v,\ u \vee v]$ is bounded
([[def-bounded-set]]) and Darboux integrable there ([[def-darboux-integral]],
[[def-darboux-sums]]). For such $f$ define

$$\int_u^v f \;:=\; \begin{cases} \text{the Darboux integral of } f \text{ over } [u,v] & \text{if } u < v, \\[2pt] 0 & \text{if } u = v, \\[2pt] -\displaystyle\int_v^u f & \text{if } u > v. \end{cases}$$

**There is nothing to check for consistency.** The three clauses are indexed by
the three cases of trichotomy, $u < v$, $u = v$ and $u > v$, which are mutually
exclusive and exhaustive; no pair of them ever applies to the same $(u,v)$. In
particular the first clause is untouched, so on $u < v$ this is the published
integral verbatim and every published theorem about it applies unchanged.

**The middle clause is a stipulation, not a computation.** It is *not* claimed
that $0$ is a value forced by the $u < v$ definition in any limiting sense; that
definition simply says nothing at $u = v$, and $\int_u^u f := 0$ is what is
written there. It is also unconditional: no hypothesis on $f$ beyond being
defined at $u$ is asked for, since the case $u = v$ never refers to a partition.

### The two consequences used throughout the page

**Antisymmetry, for every pair.** For all reals $u, v$ with $f$ integrable
between them,

$$\int_u^v f \;=\; -\int_v^u f .$$

Indeed if $u < v$ then $v > u$ and the third clause reads
$\int_v^u f = -\int_u^v f$, which rearranges to the display; if $u = v$ both
sides are $0$; and if $u > v$ the third clause is the display itself.

**Absolute values agree.** Consequently
$\bigl|\int_u^v f\bigr| = \bigl|\int_v^u f\bigr|$ for every such pair.

**An obligation recorded here and discharged elsewhere.** With this convention
the additivity identity

$$\int_u^v f \;+\; \int_v^w f \;=\; \int_u^w f$$

holds for **every** arrangement of $u, v, w$ in an interval on which $f$ is
integrable, not only for $u < v < w$. That is a theorem and not part of this
definition; it is proved as the last clause of
[[thm-additivity-over-subintervals]], and nothing on this page uses it before it
is proved there.

## Remarks

- **This is notation, and it is a real notation.** Without it the substitution
  theorem could not be stated with the limits $\varphi(c)$ and $\varphi(d)$ in
  the order the map produces them, since a differentiable $\varphi$ need be
  neither injective nor monotone; and the integral function $x \mapsto \int_a^x f$
  would be undefined at $x = a$.

- **One published inequality is not orientation-invariant, and that is a trap.**
  The estimate $\bigl|\int_u^v f\bigr| \le \int_u^v |f|$ is guaranteed only
  for $u \le v$: at $u > v$ the right-hand side is $-\int_v^u |f| \le 0$ while
  the left-hand side is $\ge 0$, so the inequality fails whenever
  $\int_v^u |f| > 0$. The form valid for every pair is
  $\bigl|\int_u^v f\bigr| \le \bigl|\int_u^v |f|\bigr|$, and this is stated where
  it is proved ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

- **Integrability is a property of the unordered pair.** By construction, $f$ is
  integrable between $u$ and $v$ if and only if it is integrable between $v$ and
  $u$, since both refer to the same closed interval; only the sign of the value
  remembers the order.
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

### `lem-integrability-on-a-subinterval`

````markdown
---
id: lem-integrability-on-a-subinterval
kind: lemma
title: "A function integrable on $[a,b]$ is integrable on every closed subinterval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-oriented-integral, def-darboux-integral, thm-riemann-criterion, lem-refinement-inequalities, def-darboux-sums, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-interval]
justified_by: []
aliases: []
landmark: false
short: "integrability passes to subintervals"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, Properties of the Riemann integral"
      url: "https://www.jirka.org/ra/html/sec_rintprop.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]), and let $c, d$ satisfy

$$a \;\le\; c \;<\; d \;\le\; b .$$

Then the restriction of $f$ to $[c,d]$ is bounded ([[def-bounded-set]]) and
integrable on $[c,d]$.

The degenerate case $c = d$ is not an omission: there $\int_c^c f = 0$ by
[[def-oriented-integral]], and no partition of $[c,d]$ exists to speak of
([[def-partition-and-refinement]]).

## Facts & Assumptions

**Given:** Reals $a < b$, an integrable $f : [a,b] \to \mathbb{R}$, and reals $c, d$ with $a \le c < d \le b$. Write $g$ for the restriction of $f$ to $[c,d]$.

[L1] Riemann's criterion: a bounded function on a closed bounded interval with distinct endpoints is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ of that interval with $U(\cdot,P) - L(\cdot,P) < \varepsilon$ ([[thm-riemann-criterion]], [[def-darboux-integral]]).

[L2] For a partition $P$ of $[a,b]$ and a point $p \in [a,b]$, the partition $P + p$ satisfies $\operatorname{pts}(P+p) = \operatorname{pts}(P) \cup \{p\}$ and refines $P$; a refinement of a refinement refines the original, since the point-set inclusions compose ([[def-partition-and-refinement]]).

[L3] If $P'$ refines $P$ then $L(f,P) \le L(f,P') \le U(f,P') \le U(f,P)$ ([[lem-refinement-inequalities]], claim 1).

[L4] For a partition $R = (n,t)$ of an interval and bounded $h$ on it: $L(h,R) = \sum_{i<n} m_i \Delta_i$, $U(h,R) = \sum_{i<n} M_i\Delta_i$ with $m_i = \inf h[I_i]$, $M_i = \sup h[I_i]$, $I_i = [t_i,t_{i+1}]$, $\Delta_i = t_{i+1}-t_i > 0$, and $M_i - m_i \ge 0$ ([[def-darboux-sums]], [[def-partition-and-refinement]], [[def-interval]]).

[L5] Finite sums: additivity, scaling, splitting at an intermediate index with $\sum_{k=m}^{n-1}a_k = \sum_{j<n-m}a_{m+j}$, and monotonicity in the terms, so that a sum of nonnegative terms is at most a sum containing those terms among others ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 1 to 4).

[L6] A partition $P' = (n',t')$ of $[a,b]$ has $t'$ strictly increasing on indices $\le n'$, hence injective there, so a point of $\operatorname{pts}(P')$ is $t'_j$ for exactly one $j \le n'$; and $j < k$ gives $t'_j < t'_k$ ([[def-partition-and-refinement]]).

[L7] A restriction of a bounded function is bounded: the same $M$ serves fewer points ([[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 $g$ is bounded on $[c,d]$, since $[c,d] \subseteq [a,b]$ and $f$ is bounded on $[a,b]$, integrability presupposing boundedness. [given, L7]

1.2 Let a real $\varepsilon > 0$ be given, and fix a partition $P$ of $[a,b]$ with $U(f,P) - L(f,P) < \varepsilon$. [given, L1, choose]

2.1 Put $P' := (P + c) + d$, a partition of $[a,b]$ refining $P$ whose point set contains $c$ and $d$. [step 1.2, L2, construct]

3.1 By [L3] applied to the pair $(P, P')$, $U(f,P') - L(f,P') \le U(f,P) - L(f,P) < \varepsilon$. [step 1.2, step 2.1, L3]

3.2 Write $P' = (n',t')$ and fix the unique indices $p, q \le n'$ with $t'_p = c$ and $t'_q = d$; then $p < q$, because $c < d$ and $t'$ is increasing on those indices. [step 2.1, L6, choose]

4.1 Define $Q := (q-p,\ s)$ by $s_i := t'_{p+i}$ for $i \le q-p$ and $s_k := d$ for $k \ge q-p$. Then $s_0 = t'_p = c$, $s_{q-p} = t'_q = d$, and $s_i < s_{i+1}$ for $i < q-p$ by [L6], with $q - p \ge 1$; so $Q$ is a partition of $[c,d]$, its $i$-th subinterval is $[t'_{p+i}, t'_{p+i+1}] = I'_{p+i}$ and its $i$-th length is $\Delta'_{p+i}$. [step 3.2, L6, construct]

5.1 For $i < q-p$ the $i$-th subinterval of $Q$ is $I'_{p+i} \subseteq [c,d]$, and $g$ agrees with $f$ there, so the extreme values of $g$ on it are $M'_{p+i}$ and $m'_{p+i}$; hence $U(g,Q) - L(g,Q) = \sum_{i<q-p}\bigl(M'_{p+i} - m'_{p+i}\bigr)\Delta'_{p+i}$ by [L4] and [L5]. [step 4.1, L4, L5]

6.1 Every term $\bigl(M'_j - m'_j\bigr)\Delta'_j$ is nonnegative by [L4], and splitting $\sum_{j<n'}$ first at $p$ and then at $q$ exhibits $\sum_{i<q-p}\bigl(M'_{p+i}-m'_{p+i}\bigr)\Delta'_{p+i}$ as one of the three pieces of $\sum_{j<n'}\bigl(M'_j-m'_j\bigr)\Delta'_j$, the other two being nonnegative; so the displayed sum is at most $U(f,P') - L(f,P')$. [step 5.1, L4, L5]

7.1 Combining, $U(g,Q) - L(g,Q) \le U(f,P') - L(f,P') < \varepsilon$. [step 3.1, step 5.1, step 6.1]

8.1 Since $\varepsilon > 0$ was arbitrary and $g$ is bounded, [L1] applies on $[c,d]$ and $g$ is integrable there. [step 1.1, step 1.2, step 7.1, L1] ∎

## Remarks

- **The one step that is not bookkeeping is the re-indexing.** A partition in this library is a pair $(n,t)$ with a tail convention ([[def-partition-and-refinement]]), not a set of points, so "restrict $P'$ to $[c,d]$" is not a defined operation; step 4.1 writes the restricted list out, shifts its index by $p$ and resets its tail to $d$. Everything else follows from the fact that dropping nonnegative terms from a finite sum cannot increase it.

- **The converse is also true, and is proved separately.** Integrability on $[a,c]$ and on $[c,b]$ gives integrability on $[a,b]$; that direction needs a splice rather than a restriction and is the second half of [[thm-additivity-over-subintervals]].
````

### `lem-integral-elementary-bounds`

````markdown
---
id: lem-integral-elementary-bounds
kind: lemma
title: "If $m \\le f \\le M$ on $[a,b]$ then $m(b-a) \\le L(f,P) \\le \\underline{\\int_a^b} f \\le \\overline{\\int_a^b} f \\le U(f,P) \\le M(b-a)$ for every partition $P$; in particular every constant function is integrable, with $\\int_a^b c = c(b-a)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-infimum, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, def-max-min, lem-of-abs-value, def-interval]
justified_by: []
aliases: []
landmark: false
short: "elementary bounds on the integral"
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
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ satisfy

$$m \;\le\; f(x) \;\le\; M \qquad \text{for every } x \in [a,b],$$

with $m, M$ real. Then $f$ is bounded ([[def-bounded-set]]), so its Darboux sums
and integrals are defined ([[def-darboux-sums]], [[def-darboux-integral]]), and
for **every** partition $P$ of $[a,b]$ ([[def-partition-and-refinement]])

$$m(b-a) \;\le\; L(f,P) \;\le\; \underline{\int_a^b} f \;\le\; \overline{\int_a^b} f \;\le\; U(f,P) \;\le\; M(b-a) .$$

In particular, taking $f$ to be the constant function with value $c$:

$$\int_a^b c \;=\; c\,(b-a) ,$$

the constant function being integrable, with $L(f,P) = U(f,P) = c(b-a)$ for
every partition $P$.

## Facts & Assumptions

**Given:** Reals $a < b$, reals $m \le M$, and $f : [a,b] \to \mathbb{R}$ with $m \le f(x) \le M$ for every $x \in [a,b]$. Let $P = (n,t)$ be a partition of $[a,b]$, with subintervals $I_i$ and lengths $\Delta_i$ for $i < n$.

[L1] $\sum_{i<n}\Delta_i = b - a$, every $\Delta_i > 0$, and $n \ge 1$; each $I_i$ is a nonempty subset of $[a,b]$ ([[def-partition-and-refinement]], [[def-interval]]).

[L2] $m_i = \inf f[I_i]$ and $M_i = \sup f[I_i]$ exist, $L(f,P) = \sum_{i<n}m_i\Delta_i$ and $U(f,P) = \sum_{i<n}M_i\Delta_i$, and $m_i \le f(x) \le M_i$ for $x \in I_i$ ([[def-darboux-sums]]).

[L3] $L(f,P) \le \underline{\int_a^b} f \le \overline{\int_a^b} f \le U(f,P)$ for every partition $P$; $f$ is integrable exactly when the two integrals are equal, and then $\int_a^b f$ is their common value ([[def-darboux-integral]]).

[L4] An infimum is the greatest lower bound and a supremum the least upper bound; a set with a single element has that element as both ([[def-infimum]], [[def-complete-ordered-field]], [[def-max-min]]).

[L5] Finite sums: scaling, monotonicity in the terms, and $\sum_{i<n}\lambda\,\Delta_i = \lambda\sum_{i<n}\Delta_i$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] Ordered-field arithmetic: multiplying an inequality by a positive quantity preserves it, adding a constant preserves it, and the order is transitive; $|x| \le \max\{|m|,|M|\}$ whenever $m \le x \le M$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[lem-of-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 $f$ is bounded: $|f(x)| \le \max\{|m|,|M|\}$ for every $x \in [a,b]$ by [L6], so the Darboux sums and integrals of [L2] and [L3] are defined. [given, L6]

1.2 For every $i < n$: $m$ is a lower bound of $f[I_i]$ and $M$ an upper bound, since $I_i \subseteq [a,b]$; the set $f[I_i]$ is nonempty by [L1]. Hence $m \le m_i$ and $M_i \le M$ by [L4]. [given, L1, L2, L4]

1.3 **The constant case, treated on its own.** Suppose in addition that $f$ is the constant function with value $c$, that is $f(x) = c$ for every $x \in [a,b]$; the general argument below does not use this supposition. Then $f[I_i] = \{c\}$ for every $i < n$ by [L1], so $m_i = M_i = c$ by [L4], and $L(f,P) = U(f,P) = \sum_{i<n} c\,\Delta_i = c(b-a)$ by [L5] and [L1]. [L1, L2, L4, L5]

2.1 $L(f,P) \ge m(b-a)$: by step 1.2 and $\Delta_i > 0$ one has $m_i\Delta_i \ge m\Delta_i$ for every $i < n$, so monotonicity and scaling in [L5] give $L(f,P) \ge \sum_{i<n} m\,\Delta_i = m\sum_{i<n}\Delta_i = m(b-a)$ by [L1]. [step 1.2, L1, L5, L6]

2.2 $U(f,P) \le M(b-a)$: the same argument with $M_i \le M$ gives $U(f,P) \le \sum_{i<n}M\,\Delta_i = M(b-a)$. [step 1.2, L1, L5, L6]

3.1 Combining steps 2.1 and 2.2 with the chain of [L3] gives the displayed five-term inequality for every partition $P$. [step 2.1, step 2.2, L3]

4.1 Hence, still under the supposition of step 1.3 that $f$ is constant with value $c$, the set of lower sums and the set of upper sums are both $\{c(b-a)\}$, so $\underline{\int_a^b} f = \overline{\int_a^b} f = c(b-a)$ by [L4], $f$ is integrable, and $\int_a^b c = c(b-a)$ by [L3]. [step 1.3, L3, L4] ∎

## Remarks

- **The five-term chain is the only estimate most of this page needs.** Every integrability proof below produces one partition and controls $U(f,P) - L(f,P)$; the chain then locates both integrals inside an interval of that length, and [[thm-riemann-criterion]] turns the observation into an equivalence.

- **The bounds are sharp, but equality does not characterize constants.** Constant functions show that neither outer coefficient can be improved. Nonconstant functions can also attain equality: for the Dirichlet indicator on $[0,1]$, every partition has $L(f,P) = 0$ and $U(f,P) = 1$, so both outer bounds are equalities.

- **Nonnegativity, as a special case.** If $f \ge 0$ on $[a,b]$ then $m$ may be taken to be $0$, so $\int_a^b f \ge 0$ whenever the integral exists. A nonnegative integrand with vanishing integral need not vanish, however; that is [[fs-nonnegative-integrable-with-zero-integral-vanishes]].
````

### `lem-of-naturals-positive`

````markdown
---
id: lem-of-naturals-positive
kind: lemma
title: "Canonical naturals are positive and strictly increasing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-of-one-positive, lem-of-add-order, def-field]
aliases: []
landmark: false
short: "n·1 > 0"
proof_strategy: induction
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
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

## Facts & Assumptions

**Given:** An ordered field $F$ whose canonical naturals are defined recursively by $1 \cdot 1_F = 1_F$ and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, with $0 \cdot 1_F = 0$.

[L1] $0 < 1_F$ in every ordered field ([[cor-of-one-positive]]).

[L2] The order is compatible with addition and positives are closed under addition: $a < b$ implies $a + c < b + c$, and $a > 0$, $b > 0$ imply $a + b > 0$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 1$: by definition $1 \cdot 1_F = 1_F$, and $1_F > 0$. [L1, base]

1.2 Inductive hypothesis: assume $n \cdot 1_F > 0$ for some fixed $n \ge 1$. [ih]

1.3 By the recursion, $(n+1) \cdot 1_F - n \cdot 1_F = 1_F > 0$, so $(n+1) \cdot 1_F > n \cdot 1_F$. [given, L1]

1.4 Additive identity: fix $m$ and induct on $n$; at $n = 1$, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F$ by the recursion, and if $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ then $(m+n+1) \cdot 1_F = (m+n) \cdot 1_F + 1_F = m \cdot 1_F + n \cdot 1_F + 1_F = m \cdot 1_F + (n+1) \cdot 1_F$. [given, algebra]

2.1 Inductive step: $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$ is a sum of two positives, by the hypothesis and $1_F > 0$, hence $(n+1) \cdot 1_F > 0$. [step 1.2, L1, L2]

2.2 Iterating 1.3, for $m < n$ one has $m \cdot 1_F < n \cdot 1_F$, so $n \mapsto n \cdot 1_F$ is strictly increasing and therefore injective on $\{1, 2, 3, \dots\}$. [step 1.3, L2]

2.3 Multiplicative identity: fix $m$ and induct on $n$; at $n = 1$, $(m \cdot 1) \cdot 1_F = m \cdot 1_F = (m \cdot 1_F)(1 \cdot 1_F)$, and the step $(m(n+1)) \cdot 1_F = (mn + m) \cdot 1_F = (mn) \cdot 1_F + m \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F) + (m \cdot 1_F)(1_F) = (m \cdot 1_F)((n+1) \cdot 1_F)$ uses 1.4 and distributivity. [step 1.4, algebra]

3.1 By induction on 1.1, 1.2, 2.1, $n \cdot 1_F > 0$ for every $n \ge 1$; with the strict increase 2.2 and the identities 1.4, 2.3, every claim holds. [step 2.1, step 2.2, step 1.4, step 2.3, discharge-induction] ∎
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

### `thm-additivity-over-subintervals`

````markdown
---
id: thm-additivity-over-subintervals
kind: theorem
title: "For $a<c<b$: $f$ is integrable on $[a,b]$ if and only if it is integrable on $[a,c]$ and on $[c,b]$, and then $\\int_a^b f = \\int_a^c f + \\int_c^b f$; with the oriented form for arbitrary $a,b,c$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-integrability-on-a-subinterval, def-oriented-integral, def-darboux-integral, def-darboux-sums, thm-riemann-criterion, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: [thm-integral-additive-in-the-interval]
landmark: true
short: "additivity over subintervals"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, Properties of the Riemann integral"
      url: "https://www.jirka.org/ra/html/sec_rintprop.html"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Statement

Let $a < c < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]). Then:

1. $f$ is integrable on $[a,b]$ ([[def-darboux-integral]]) **if and only if** its
   restrictions to $[a,c]$ and to $[c,b]$ are integrable;
2. and in that case
   $$\int_a^b f \;=\; \int_a^c f \;+\; \int_c^b f .$$
3. **Oriented form.** Let $\alpha < \beta$ be reals, let $f : [\alpha,\beta] \to
   \mathbb{R}$ be integrable, and let $u, v, w \in [\alpha,\beta]$ be arbitrary.
   Then, with the convention of [[def-oriented-integral]],
   $$\int_u^v f \;+\; \int_v^w f \;=\; \int_u^w f .$$

Claim 3 is where [[def-oriented-integral]] earns its place: it holds for every
arrangement of the three points, including the degenerate ones, and it is the
form used everywhere below.

## Facts & Assumptions

**Given:** Reals $a < c < b$ and a bounded $f : [a,b] \to \mathbb{R}$; and, for claim 3, reals $\alpha < \beta$, an integrable $f : [\alpha,\beta] \to \mathbb{R}$ and points $u,v,w \in [\alpha,\beta]$. Let a real $\varepsilon > 0$ be given.

[L1] Riemann's criterion on any closed bounded interval with distinct endpoints ([[thm-riemann-criterion]]).

[L2] A function integrable on $[p,q]$ is integrable on every $[p',q'] \subseteq [p,q]$ with $p' < q'$ ([[lem-integrability-on-a-subinterval]]).

[L3] For a partition $R = (n,t)$ and bounded $h$: $L(h,R) = \sum_{i<n}m_i\Delta_i$, $U(h,R) = \sum_{i<n}M_i\Delta_i$, and $L(h,R) \le \underline{\int} h \le \overline{\int} h \le U(h,R)$, the integral being the common value of the two when they agree ([[def-darboux-sums]], [[def-darboux-integral]]).

[L4] A partition of $[p,q]$ is a pair $(n,t)$ with $n \ge 1$, $t_0 = p$, $t_i < t_{i+1}$ for $i < n$ and $t_k = q$ for $k \ge n$; its subintervals are $[t_i,t_{i+1}]$ for $i<n$ ([[def-partition-and-refinement]], [[def-interval]]).

[L5] Finite sums split at an intermediate index, with $\sum_{k=p}^{q-1}x_k = \sum_{j<q-p}x_{p+j}$ ([[def-finite-sum]], [[lem-finite-sum-laws]], clause 3).

[L6] With oriented limits, $\int_v^u h = -\int_u^v h$ and $\int_u^u h = 0$ ([[def-oriented-integral]]).

[L7] Ordered-field arithmetic: adding a constant preserves an inequality, the order is total and transitive, and a real of absolute value below every positive real is $0$ ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 **Claim 1, forward.** If $f$ is integrable on $[a,b]$ then, since $a < c$ and $c < b$, [L2] gives integrability on $[a,c]$ and on $[c,b]$. [L2]

1.2 **The splice.** Let $P_1 = (n_1,t^1)$ be a partition of $[a,c]$ and $P_2 = (n_2,t^2)$ one of $[c,b]$. Define $P := (n_1+n_2,\ t)$ by $t_i := t^1_i$ for $i \le n_1$, $t_{n_1+j} := t^2_j$ for $j \le n_2$, and $t_k := b$ for $k \ge n_1+n_2$. The two prescriptions agree at $i = n_1$, where $t^1_{n_1} = c = t^2_0$; and $t_0 = a$, $t_{n_1+n_2} = t^2_{n_2} = b$, with $t_i < t_{i+1}$ for every $i < n_1+n_2$. So $P$ is a partition of $[a,b]$. [L4, construct]

1.3 **Claim 1, converse.** Suppose $f$ is integrable on $[a,c]$ and on $[c,b]$, and use [L1] on each to fix $P_1$ with $U(f,P_1)-L(f,P_1) < \varepsilon\cdot 2^{-1}$ and $P_2$ with $U(f,P_2)-L(f,P_2) < \varepsilon\cdot 2^{-1}$. [L1, choose]

2.1 The first $n_1$ subintervals of $P$ are those of $P_1$ and the last $n_2$ are those of $P_2$, with the matching lengths, so by [L3] and the splitting law [L5], $L(f,P) = L(f,P_1) + L(f,P_2)$ and $U(f,P) = U(f,P_1) + U(f,P_2)$. [step 1.2, L3, L4, L5]

3.1 For the splice $P$ of those two, step 2.1 gives $U(f,P) - L(f,P) < \varepsilon$; as $\varepsilon > 0$ was arbitrary and $f$ is bounded, [L1] makes $f$ integrable on $[a,b]$. [step 1.2, step 2.1, step 1.3, L1, L7]

4.1 **Claim 2.** With $P_1$, $P_2$ and $P$ as above, [L3] puts $\int_a^b f$ between $L(f,P)$ and $U(f,P)$, that is between $L(f,P_1)+L(f,P_2)$ and $U(f,P_1)+U(f,P_2)$ by step 2.1; and [L3] applied on $[a,c]$ and on $[c,b]$ puts $\int_a^c f + \int_c^b f$ between the same two numbers. [step 2.1, step 1.3, step 3.1, L3]

5.1 Those two numbers differ by less than $\varepsilon$ by step 1.3, so $\bigl|\int_a^b f - \int_a^c f - \int_c^b f\bigr| < \varepsilon$; as $\varepsilon > 0$ was arbitrary the difference is $0$, which is claim 2. [step 1.3, step 4.1, L7]

6.1 **Claim 3, first the sorted case.** Let $x \le y$ in $[\alpha,\beta]$. Then $\int_\alpha^y f = \int_\alpha^x f + \int_x^y f$. Indeed if $\alpha < x < y$ this is claim 2 applied on $[\alpha,y]$, where $f$ is integrable by [L2]; if $x = \alpha$ the middle term is $0$ by [L6] and the identity is trivial; and if $x = y$ the last term is $0$ by [L6] and the identity is again trivial. [step 5.1, L2, L6]

7.1 Put $F(x) := \int_\alpha^x f$ for $x \in [\alpha,\beta]$, which is defined by [L2] and [L6]. Then $\int_x^y f = F(y) - F(x)$ for **all** $x,y \in [\alpha,\beta]$: for $x < y$ this is step 6.1 rearranged; for $x = y$ both sides are $0$ by [L6]; and for $x > y$ the case already proved gives $\int_y^x f = F(x)-F(y)$, and [L6] negates both sides. [step 6.1, L2, L6, construct]

8.1 **Claim 3.** For arbitrary $u,v,w \in [\alpha,\beta]$, step 7.1 gives $\int_u^v f + \int_v^w f = \bigl(F(v)-F(u)\bigr) + \bigl(F(w)-F(v)\bigr) = F(w)-F(u) = \int_u^w f$. [step 7.1, algebra] ∎

## Remarks

- **The oriented form is not proved by listing six orderings.** Step 7.1 shows that the oriented integral between two points is a *difference of values of one function of one variable*, after which claim 3 is the cancellation $(F(v)-F(u))+(F(w)-F(v)) = F(w)-F(u)$, valid however the three points are arranged and however many of them coincide. The case analysis is confined to the two lines of step 7.1, and no appeal to symmetry is made anywhere.

- **The function $F$ of step 7.1 is the integral function**, and it is given its own item, [[def-the-integral-function]], because the rest of the page is about it. Nothing there re-proves step 7.1; it cites this theorem.

- **Boundedness on the whole of $[a,b]$ is a hypothesis of claim 1 in both directions.** Boundedness on $[a,c]$ and on $[c,b]$ separately does give boundedness on the union, so the converse could be stated with the hypothesis split; it is stated globally because [[def-darboux-sums]] needs it globally to make $U(f,P)$ meaningful for a partition of $[a,b]$.
````

### `thm-monotone-implies-integrable`

````markdown
---
id: thm-monotone-implies-integrable
kind: theorem
title: "A monotone function on $[a,b]$ is Riemann integrable: for the uniform partition into $N$ parts the upper minus lower sum telescopes to $|f(b) - f(a)|\\,(b-a)/\\iota(N)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-criterion, def-monotone-function, def-partition-and-refinement, def-darboux-sums, def-darboux-integral, lem-finite-sum-laws, def-finite-sum, def-bounded-set, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-interval, def-max-min, def-infimum, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "monotone $\\Rightarrow$ integrable"
proof_strategy: cases
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, MAT 125B Lecture Notes"
      url: "https://www.math.ucdavis.edu/~hunter/m125b/125bLectureNotes_5-26-11.pdf"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be monotone, that is
nondecreasing or nonincreasing on $[a,b]$ ([[def-monotone-function]]). Then $f$
is bounded ([[def-bounded-set]]) and Riemann integrable on $[a,b]$
([[def-darboux-integral]]).

Moreover, for the uniform partition $U_N$ of $[a,b]$ into $N \ge 1$ parts
([[def-partition-and-refinement]]),

$$U(f,U_N) - L(f,U_N) \;=\; \bigl|f(b) - f(a)\bigr| \cdot \frac{b-a}{\iota(N)} ,$$

where $\iota(N)$ is the canonical natural of $N$ in $\mathbb{R}$
([[def-canonical-natural]]). The right-hand side is an **equality**, not an
estimate: the sum $\sum_{i<N}(M_i - m_i)$ telescopes exactly, because on each
subinterval a monotone function attains its extremes at the two endpoints.

No continuity is assumed, and none holds in general: a nondecreasing function may
be discontinuous at every rational
([[thm-monotone-with-prescribed-discontinuity-set]]), and the companion page of
this pair works out the integral of the floor function, the simplest
discontinuous monotone integrand.

## Facts & Assumptions

**Given:** Reals $a < b$ and a monotone $f : [a,b] \to \mathbb{R}$. Let $N \ge 1$ be a natural number and let $U_N = (N,t)$ be the uniform partition of $[a,b]$ into $N$ parts, with subintervals $I_i = [t_i,t_{i+1}]$ and lengths $\Delta_i = (b-a)/\iota(N)$ for $i < N$.

[L1] $f$ is nondecreasing, meaning $f(x) \le f(y)$ whenever $x \le y$ in $[a,b]$, or nonincreasing, meaning $f(x) \ge f(y)$ whenever $x \le y$; these two cases are what "monotone" means and they exhaust it ([[def-monotone-function]]).

[L2] For the uniform partition: $t_0 = a$, $t_N = b$, $t_i < t_{i+1}$, every $\Delta_i = (b-a)/\iota(N) > 0$, and $\sum_{i<N}\Delta_i = b-a$ ([[def-partition-and-refinement]]).

[L3] If a nonempty set $S \subseteq \mathbb{R}$ has a greatest element then that element is $\sup S$, and if it has a least element then that element is $\inf S$ ([[def-max-min]], [[def-infimum]], [[def-complete-ordered-field]]).

[L4] $M_i = \sup f[I_i]$, $m_i = \inf f[I_i]$, $U(f,P) - L(f,P) = \sum_{i<n}(M_i-m_i)\Delta_i$ ([[def-darboux-sums]], [[lem-finite-sum-laws]]).

[L5] Finite sums: scaling and telescoping, $\sum_{i<N}(c_{i+1}-c_i) = c_N - c_0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P) - L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L7] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$, and $\iota(N) > 0$ for $N \ge 1$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L8] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; $|x| = x$ for $x \ge 0$ and $|x| = -x$ for $x \le 0$ ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** cases.

1.1 By [L1] there are two cases, $f$ nondecreasing and $f$ nonincreasing, and they exhaust the hypothesis. Every $x \in [a,b]$ satisfies $a \le x \le b$ ([[def-interval]]). [given, L1, cases]

1.2 **Case: $f$ is nondecreasing.** Then $f(a) \le f(x) \le f(b)$ for every $x \in [a,b]$, so $f$ is bounded by [L8]; and for $i < N$ and $x \in I_i$ one has $t_i \le x \le t_{i+1}$, hence $f(t_i) \le f(x) \le f(t_{i+1})$. Since $f(t_i)$ and $f(t_{i+1})$ themselves lie in $f[I_i]$, they are its least and greatest elements, so $m_i = f(t_i)$ and $M_i = f(t_{i+1})$ by [L3]. [assume-case up, given, L2, L3, L8]

1.3 **Case: $f$ is nonincreasing.** Then $f(b) \le f(x) \le f(a)$ for every $x \in [a,b]$, so $f$ is bounded; and for $i < N$ and $x \in I_i$ one has $f(t_{i+1}) \le f(x) \le f(t_i)$, so $m_i = f(t_{i+1})$ and $M_i = f(t_i)$ by [L3]. [assume-case down, given, L2, L3, L8]

2.1 In the nondecreasing case, $M_i - m_i = f(t_{i+1}) - f(t_i)$, so by [L4], [L2] and [L5], $U(f,U_N) - L(f,U_N) = \sum_{i<N}\bigl(f(t_{i+1}) - f(t_i)\bigr)\frac{b-a}{\iota(N)} = \frac{b-a}{\iota(N)}\bigl(f(t_N) - f(t_0)\bigr) = \frac{b-a}{\iota(N)}\bigl(f(b) - f(a)\bigr)$, and $f(b) - f(a) \ge 0$, so this equals $|f(b)-f(a)|(b-a)/\iota(N)$ by [L8]. [step 1.2, L2, L4, L5, L8]

2.2 In the nonincreasing case the same computation gives $U(f,U_N) - L(f,U_N) = \frac{b-a}{\iota(N)}\bigl(f(a) - f(b)\bigr)$ with $f(a) - f(b) \ge 0$, which is again $|f(b)-f(a)|(b-a)/\iota(N)$ by [L8]. The two cases of step 1.1 exhaust the hypothesis, so the displayed identity holds for every monotone $f$, which is also bounded. [step 1.3, L2, L4, L5, L8, cases-exhaustive]

3.1 Let a real $\varepsilon > 0$ be given and put $\eta := \varepsilon \cdot \bigl((|f(b)-f(a)| + 1)(b-a)\bigr)^{-1}$, a positive real by [L8]. By [L7] fix a natural $N \ge 1$ with $1/\iota(N) < \eta$. [step 2.2, L7, L8, choose]

4.1 Then $U(f,U_N) - L(f,U_N) = |f(b)-f(a)|\,(b-a)/\iota(N) \le (|f(b)-f(a)|+1)(b-a)/\iota(N) < (|f(b)-f(a)|+1)(b-a)\,\eta = \varepsilon$: the first inequality because $(b-a)/\iota(N) > 0$ and $|f(b)-f(a)| \le |f(b)-f(a)|+1$, and the second because $(|f(b)-f(a)|+1)(b-a) > 0$ and $1/\iota(N) < \eta$. So $U(f,U_N) - L(f,U_N) < \varepsilon$. [step 2.1, step 2.2, step 3.1, L8]

5.1 Since the real $\varepsilon > 0$ was arbitrary and step 4.1 produced a partition with $U - L < \varepsilon$, criterion [L6] applies: $f$ is bounded by steps 1.2 and 1.3 and Riemann integrable on $[a,b]$. [step 1.2, step 1.3, step 4.1, L6] ∎

## Remarks

- **The telescoping is exact, and that is what makes the proof short.** No estimate of $M_i - m_i$ is needed subinterval by subinterval: the whole sum of the gaps is the total rise of $f$, however wildly the rise is distributed. This is why a monotone function with infinitely many jumps is no harder than a continuous one here, and it is the same telescoping that [[def-partition-and-refinement]] uses for the lengths.

- **Uniformity of the partition is a convenience, not a necessity.** For an arbitrary partition $P$ the same identification of $m_i$ and $M_i$ gives $U(f,P) - L(f,P) \le \|P\| \cdot |f(b)-f(a)|$, by bounding each $\Delta_i$ by the mesh before telescoping. The uniform partition is used above only so that $\Delta_i$ can be pulled out of the sum as a constant.

- **No choice principle is used.** The partition is given by a formula in $N$, and $N$ is obtained from one instance of the Archimedean property. See [[rem-riemann-integral-choice-ledger]].

- **Monotone is strictly weaker than continuous here.** The floor function is nondecreasing with jumps at every integer and is integrable (the companion page of this pair); and a monotone function has at most countably many discontinuities ([[thm-froda]]), so this theorem is also a special case of [[cor-countably-many-discontinuities-integrable]] once that is available. The direct proof is kept because it is elementary and quantitative, and because it costs no choice at all.
````

### `thm-monotonicity-of-the-integral`

````markdown
---
id: thm-monotonicity-of-the-integral
kind: theorem
title: "If $f \\le g$ on $[a,b]$ and both are integrable then $\\int_a^b f \\le \\int_a^b g$; and $m(b-a) \\le \\int_a^b f \\le M(b-a)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-linearity-of-the-integral, def-darboux-integral, def-darboux-sums, lem-integral-elementary-bounds, lem-finite-sum-laws, def-finite-sum, def-oriented-integral, def-infimum, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [thm-integral-is-monotone]
landmark: true
short: "monotonicity of the integral"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f, g : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]). Then:

1. **Nonnegativity.** If $f(x) \ge 0$ for every $x \in [a,b]$ then
   $\int_a^b f \ge 0$.
2. **Monotonicity.** If $f(x) \le g(x)$ for every $x \in [a,b]$ then
   $$\int_a^b f \;\le\; \int_a^b g .$$
3. **Two-sided bound.** If $m \le f(x) \le M$ for every $x \in [a,b]$, with
   $m, M$ real, then
   $$m\,(b-a) \;\le\; \int_a^b f \;\le\; M\,(b-a) .$$

**Equality in claim 1 does not force $f$ to vanish.** A nonnegative integrable
function with integral $0$ may be positive at infinitely many points; that is
[[fs-nonnegative-integrable-with-zero-integral-vanishes]] on the previous page's
companion. Under the additional hypothesis of continuity the conclusion does
hold, and that is [[thm-nonnegative-continuous-with-zero-integral-vanishes]]
below.

**Claim 2 is stated for $a < b$ and is not orientation-invariant.** With the
convention of [[def-oriented-integral]], $f \le g$ gives
$\int_u^v f \le \int_u^v g$ when $u \le v$ and the reverse inequality when
$u \ge v$, since both sides change sign together.

## Facts & Assumptions

**Given:** Reals $a < b$ and integrable $f, g : [a,b] \to \mathbb{R}$, with reals $m \le M$ where claim 3 is concerned.

[A1] $f(x) \ge 0$ for every $x \in [a,b]$.

[A2] $f(x) \le g(x)$ for every $x \in [a,b]$.

[A3] $m \le f(x) \le M$ for every $x \in [a,b]$.

[L1] If $m' \le h \le M'$ on $[a,b]$ then $m'(b-a) \le L(h,P) \le \underline{\int_a^b} h \le \overline{\int_a^b} h \le U(h,P) \le M'(b-a)$ for every partition $P$ ([[lem-integral-elementary-bounds]], [[def-darboux-sums]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] If $h$ is integrable then $\int_a^b h$ is the common value of the lower and upper integrals ([[def-darboux-integral]], [[def-infimum]]).

[L3] Sums and scalar multiples of integrable functions are integrable, and $\int_a^b(\lambda h + \nu k) = \lambda\int_a^b h + \nu\int_a^b k$ ([[thm-linearity-of-the-integral]]).

[L4] Ordered-field arithmetic: adding a constant to both sides of an inequality preserves it, and the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]]). The nonstrict forms follow from the strict ones by adjoining the case of equality.

## Proof

**Proof technique:** direct.

1.1 **Claim 1.** Under [A1] the constant $0$ is a lower bound of $f$ on $[a,b]$, so [L1] applies with $m' := 0$ and gives $\underline{\int_a^b} f \ge 0$. [A1, L1]

1.2 **Claim 2.** Under [A2] the function $h := g - f$ satisfies $h(x) \ge 0$ for every $x \in [a,b]$, and $h$ is integrable with $\int_a^b h = \int_a^b g - \int_a^b f$ by [L3]. [A2, L3, L4]

2.1 Since $f$ is integrable, $\int_a^b f = \underline{\int_a^b} f \ge 0$ by [L2]. [step 1.1, L2]

3.1 By claim 1 applied to $h$, $\int_a^b g - \int_a^b f \ge 0$, that is $\int_a^b f \le \int_a^b g$. [step 2.1, step 1.2, L4]

4.1 **Claim 3.** Under [A3], [L1] applied to $f$ with $m' := m$ and $M' := M$ gives $m(b-a) \le \underline{\int_a^b} f$ and $\overline{\int_a^b} f \le M(b-a)$, and both integrals equal $\int_a^b f$ by [L2]. [A3, L1, L2] ∎

## Remarks

- **Claim 3 is cited, not reproved.** [[lem-integral-elementary-bounds]] already proves the five-term chain for every partition, and it is the item that also computes the integral of a constant, $\int_a^b c = c(b-a)$. Claim 3 is that chain read at an integrable $f$; nothing new is established here.

- **Claim 2 is proved through claim 1 and linearity, and not by comparing Darboux sums.** Comparing sums works too, since $f \le g$ gives $m_i(f) \le m_i(g)$ and $M_i(f) \le M_i(g)$ on every subinterval, but the route through $g - f$ is shorter and uses only results already available. Either way the hypothesis is a pointwise inequality on the *whole* of $[a,b]$; an inequality holding off a finite set gives the same conclusion, by [[lem-changing-a-function-at-finitely-many-points]], and that is a separate statement.

- **What claim 2 is for.** It is what turns a pointwise estimate on an integrand into an estimate on the integral, and every estimate of that shape on this page and its companion is an application of it. No count of those applications is asserted here; the dependency graph of the page is where that is read off.
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


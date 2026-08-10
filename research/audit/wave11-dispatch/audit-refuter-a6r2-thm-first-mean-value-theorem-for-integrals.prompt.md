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

- critical risk (11): 15 declared dependencies; 13 cited facts; 10 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-first-mean-value-theorem-for-integrals`

Normalized current SHA-256: `c8254a05b45a3935f6e727b84819a8fdd24530671c2ad9e728cab73119c3aae6`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-first-mean-value-theorem-for-integrals
kind: theorem
title: "If $f$ is continuous on $[a,b]$ and $g$ is integrable with $g \\ge 0$, there is $\\xi \\in [a,b]$ with $\\int_a^b fg = f(\\xi)\\int_a^b g$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-monotonicity-of-the-integral, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-linearity-of-the-integral, thm-extreme-value-r, cor-continuous-image-of-an-interval-is-an-interval, thm-heine-borel-r, def-open-cover-r, thm-continuous-implies-integrable, def-continuity-real, def-max-min, lem-integral-elementary-bounds, def-darboux-integral, def-interval, def-ordered-field, def-complete-ordered-field]
forward_refs: [cex-the-first-mean-value-theorem-needs-a-one-signed-weight]
justified_by: []
aliases: [thm-mean-value-theorem-for-integrals]
landmark: true
short: "first mean value theorem for integrals"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be continuous on $[a,b]$
([[def-continuity-real]]) and let $g : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]) with $g(x) \ge 0$ for every $x \in [a,b]$. Then $fg$
is integrable and there is $\xi \in [a,b]$ with

$$\int_a^b f\,g \;=\; f(\xi)\,\int_a^b g .$$

**The special case $g \equiv 1$** is the familiar statement that a continuous
function attains its average value: there is $\xi \in [a,b]$ with

$$\int_a^b f \;=\; f(\xi)\,(b-a) ,$$

and it is this clause that the fundamental theorem below is usually derived
from in other treatments.

**The hypothesis $g \ge 0$ is essential.** For a sign-changing integrable $g$
the conclusion fails, and the witness is
the counterexample with a sign-changing weight on the companion
page.

## Facts & Assumptions

**Given:** Reals $a < b$, a continuous $f : [a,b] \to \mathbb{R}$, and an integrable $g : [a,b] \to \mathbb{R}$ with $g \ge 0$ on $[a,b]$.

[L1] $[a,b]$ is compact, and a continuous real function on a nonempty compact set attains a minimum and a maximum there ([[thm-heine-borel-r]], [[def-open-cover-r]], [[thm-extreme-value-r]], [[def-max-min]], [[def-interval]]).

[L2] For continuous $f$ on $[a,b]$ with $a \le b$, $f[\,[a,b]\,] = [\min f[\,[a,b]\,],\ \max f[\,[a,b]\,]]$ ([[cor-continuous-image-of-an-interval-is-an-interval]], claim 2).

[L3] A continuous function on $[a,b]$ is integrable there ([[thm-continuous-implies-integrable]]).

[L4] A product of two integrable functions on $[a,b]$ is integrable ([[cor-integrability-of-absolute-values-products-and-lattice-operations]], claim 1).

[L5] If $u \le w$ pointwise and both are integrable then $\int_a^b u \le \int_a^b w$; and if $u \ge 0$ is integrable then $\int_a^b u \ge 0$ ([[thm-monotonicity-of-the-integral]]).

[L6] Scalar multiples: $\int_a^b \lambda u = \lambda\int_a^b u$ ([[thm-linearity-of-the-integral]]), and $\int_a^b 1 = b-a$ ([[lem-integral-elementary-bounds]]).

[L7] Ordered-field arithmetic: multiplying an inequality by a nonnegative quantity preserves it, a positive real has a positive inverse, and the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 $f$ is integrable by [L3], so $fg$ is integrable by [L4]. [given, L3, L4]

1.2 By [L1] fix $p, q \in [a,b]$ with $f(q) = \min f[\,[a,b]\,] =: m$ and $f(p) = \max f[\,[a,b]\,] =: M$, so $m \le f(x) \le M$ for every $x \in [a,b]$. [given, L1, choose]

1.3 By [L5], $\int_a^b g \ge 0$. [given, L5]

2.1 Since $g \ge 0$, multiplying the inequalities of step 1.2 by $g(x)$ gives $m\,g(x) \le f(x)g(x) \le M\,g(x)$ for every $x \in [a,b]$, and all three functions are integrable by step 1.1 and [L6]. [step 1.1, step 1.2, given, L6, L7]

3.1 By [L5] and [L6] applied to step 2.1, $m\int_a^b g \;\le\; \int_a^b fg \;\le\; M\int_a^b g$. [step 2.1, L5, L6]

4.1 **The case $\int_a^b g = 0$.** Then step 3.1 reads $0 \le \int_a^b fg \le 0$, so $\int_a^b fg = 0 = f(a)\int_a^b g$, and $\xi := a$ works. [step 1.3, step 3.1, L7]

4.2 **The case $\int_a^b g > 0$.** Then $\lambda := \bigl(\int_a^b fg\bigr)\big/\bigl(\int_a^b g\bigr)$ is a real satisfying $m \le \lambda \le M$, by step 3.1 divided by the positive $\int_a^b g$. [step 1.3, step 3.1, L7, construct]

5.1 By step 1.2 and [L2], $f[\,[a,b]\,] = [m,M]$, so $\lambda = f(\xi)$ for some $\xi \in [a,b]$; then $\int_a^b fg = \lambda\int_a^b g = f(\xi)\int_a^b g$. [step 1.2, step 4.2, L2, L7, choose]

6.1 The two cases $\int_a^b g = 0$ and $\int_a^b g > 0$ are exhaustive by step 1.3, so the theorem holds. [step 1.3, step 4.1, step 5.1, L7]

7.1 **The clause $g \equiv 1$.** The constant $1$ is integrable, nonnegative, with $\int_a^b 1 = b-a$ by [L6], so step 6.1 gives $\xi \in [a,b]$ with $\int_a^b f = f(\xi)(b-a)$. [step 6.1, L6] ∎

## Remarks

- **The case $\int_a^b g = 0$ is handled first because the usual proof divides by it.** There the conclusion is trivially true for *every* $\xi$, and nothing is claimed about the location of a distinguished point; the theorem asserts only that some $\xi$ works.

- **No intermediate value theorem is invoked directly.** What is needed is that the continuous image of $[a,b]$ is exactly $[\min,\max]$, which is claim 2 of [[cor-continuous-image-of-an-interval-is-an-interval]]; that item is itself proved from the intermediate and extreme value theorems, and citing it here saves repeating the argument.

- **$\xi$ can be forced to lie in the open interval only under extra hypotheses**, and none is claimed. The standard refinement puts $\xi$ in the open interval when $g \equiv 1$; it is not proved here, it is not needed anywhere on this page, and the theorem does not assert it.

- **Forward reference, orientation only.** The witness showing that $g \ge 0$ cannot be dropped is [[cex-the-first-mean-value-theorem-needs-a-one-signed-weight]] on the companion page; nothing above depends on it.
````

## Wave 11 provenance row

```json
{
  "id": "thm-first-mean-value-theorem-for-integrals",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Integral_calculus"
  ],
  "rationale": "The source states the broader weighted first mean value theorem for a one-signed integrable weight and places the witness in the open interval. The published item specializes to g >= 0, permits an endpoint witness, and gives a local proof with explicit zero-weight handling, so the source is semantic rather than verbatim support.",
  "alpha_concurred": false,
  "at": "2026-08-10"
}
```

## Exact-current proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-heine-borel-r",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a \\le b$. Then the closed bounded interval\n$[a,b]$ ([[def-interval]]) is compact ([[def-open-cover-r]]): every family of\nopen subsets of $\\mathbb{R}$ whose union contains $[a,b]$ has a finite subfamily\nwhose union already contains $[a,b]$.\n\nThe proof is by repeated bisection. Supposing some open cover admits no finite\nsubcover, one halves the interval, keeps a half that still admits none, and\niterates; the halves shrink to a point, which the cover does reach, and a single\nmember of the cover then swallows a whole late-stage half. **The halving rule is\ncanonical**, taking the left half whenever the left half works, so the recursion\nuses [[thm-recursion]] and no choice principle.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-open-cover-r",
      "source_section": "Definition",
      "quote": "Let $K \\subseteq \\mathbb{R}$, with open sets as in\n[[def-open-and-closed-in-r]].\n\n- An **open cover** of $K$ is a family $\\mathcal{U}$ of open subsets of\n  $\\mathbb{R}$ with $K \\subseteq \\bigcup \\mathcal{U}$.\n- A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq\n  \\mathcal{U}$ that is still an open cover of $K$.\n- A subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ is **finite** when\n  $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and members\n  $U_0, \\dots, U_n$ of $\\mathcal{U}$ with $\\mathcal{V} = \\{U_0, \\dots, U_n\\}$;\n  repetitions in the list are allowed and harmless.\n- $K$ is **compact** when every open cover of $K$ has a finite subcover:\n  for every open cover $\\mathcal{U}$ of $K$, either $K = \\varnothing$ and the\n  empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and\n  $U_0, \\dots, U_n \\in \\mathcal{U}$ with\n  $$K \\subseteq U_0 \\cup \\dots \\cup U_n .$$\n- $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with\n  $x_k \\in K$ for all $k \\in \\mathbb{N}$ ([[def-sequence]]) has a subsequence\n  converging ([[def-real-limit]]) to some point of $K$; equivalently, when every\n  such sequence has a subsequential limit ([[def-subsequential-limit]]) that\n  lies in $K$.\n\n**Compactness is a property of $K$ alone.** The covering families range over open\nsubsets of $\\mathbb{R}$, not over sets open in some other ambient space, so the\nnotion defined here is compactness of $K$ as a subset of $\\mathbb{R}$. Nothing\nbelow relativises it to a smaller ambient field; where an ordered field other\nthan $\\mathbb{R}$ is meant, as in\n[[fs-closed-bounded-compact-without-completeness]], the whole vocabulary is set\nup again there for that field.\n\n**$\\varnothing$ is compact and sequentially compact.** The empty subfamily covers\nit, and there is no sequence with all terms in $\\varnothing$, so both conditions\nhold vacuously.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-extreme-value-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ be continuous on $A$\n([[def-continuity-real]]) and let $K \\subseteq A$ be **nonempty** and compact\n([[def-open-cover-r]]). Then $\\sup f[K]$ and $\\inf f[K]$ exist and are\n**attained**: there are $p, q \\in K$ with\n\n$$f(q) \\;=\\; \\inf f[K] \\;\\le\\; f(x) \\;\\le\\; \\sup f[K] \\;=\\; f(p) \\qquad \\text{for every } x \\in K .$$\n\nEquivalently, the set $f[K]$ has a maximum and a minimum\n([[def-max-min]]), namely $\\max f[K] = f(p)$ and $\\min f[K] = f(q)$.\n\n**Nonemptiness of $K$ is a hypothesis, not an oversight.** For $K = \\varnothing$\nthe set $f[K]$ is empty, and neither a supremum nor a maximum of the empty set\nexists in this library ([[def-complete-ordered-field]] supplies suprema of\nnonempty sets bounded above only).\n\n**This theorem is stated twice in this library, on purpose.** Its metric-space\ntwin is [[thm-extreme-value-metric]], proved from the cover machinery of metric\nspaces; the proof below is $\\mathbb{R}$-native, running through Heine-Borel for\n$\\mathbb{R}$ and the order-completeness of $\\mathbb{R}$, and it uses no cover\nargument beyond the one already spent in\n[[thm-continuous-image-of-a-compact-set-r]]. That the two statements are the\nsame statement in two vocabularies is proved in\n[[lem-real-and-metric-notions-agree]], later on this page.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$.\n\n- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.\n\nA set has at most one maximum: if $m_1$ and $m_2$ are both maxima then\n$m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so\n$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy\naxiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).\nThe same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-continuous-image-of-an-interval-is-an-interval",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ be continuous on $A$\n([[def-continuity-real]]) and let $I \\subseteq A$ be order-convex\n([[def-interval]]). Then:\n\n1. $f[I]$ is order-convex, hence connected\n   ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]]);\n2. if $I = [a,b]$ with $a \\le b$, then $f[I] = [m, M]$ where\n   $m = \\min f[I]$ and $M = \\max f[I]$ ([[def-max-min]]) — a **closed bounded\n   interval**, degenerate exactly when $f$ is constant on $[a,b]$.\n\n**\"Interval\" means \"order-convex\" here.** As [[thm-connected-subsets-of-r-are-intervals]]\nrecords, this library proves that the connected subsets of $\\mathbb{R}$ are\nexactly the order-convex ones, and does **not** prove that every order-convex\nsubset is one of the nine written forms of [[def-interval]]. Claim 1 is\ntherefore stated as order-convexity, which is what the intermediate value\ntheorem delivers; claim 2 identifies the written form in the one case where the\nextreme value theorem supplies the endpoints.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-continuous-implies-integrable",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be continuous on $[a,b]$\n([[def-continuity-real]]). Then $f$ is bounded ([[def-bounded-set]]) and Riemann\nintegrable on $[a,b]$ ([[def-darboux-integral]]).\n\n**The proof gives more than integrability: it gives a partition that works.** For\nevery real $\\varepsilon > 0$ the uniform partition into $N$ parts already\nsatisfies $U(f,P) - L(f,P) < \\varepsilon$, as soon as $N$ is large enough that\n$(b-a)/\\iota(N)$ is below the $\\delta$ that uniform continuity supplies for\n$\\varepsilon/\\bigl(2(b-a)\\bigr)$. Uniform continuity is exactly what makes one\n$\\delta$ serve all $N$ subintervals at once, and it is the only place where the\ncompactness of $[a,b]$ is used.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-integrability-of-absolute-values-products-and-lattice-operations",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f, g : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]). Then:\n\n1. $|f|$, $f^{2}$ and $fg$ are integrable on $[a,b]$\n   ([[def-abs-value]], [[def-integer-power]]);\n2. $\\max(f,g)$ and $\\min(f,g)$, defined pointwise\n   ([[def-max-min]]), are integrable on $[a,b]$;\n3. the **triangle inequality for the integral**:\n   $$\\Bigl|\\int_a^b f\\Bigr| \\;\\le\\; \\int_a^b |f| .$$\n\n**Claim 3 is stated with $a < b$ and is not orientation-invariant.** For $u > v$\nthe right-hand side is $-\\int_v^u |f| \\le 0$ while the left-hand side is $\\ge 0$,\nso the inequality as written is false there. The form valid for *every* pair\n$u,v$ on which $f$ is integrable ([[def-oriented-integral]]) is\n\n$$\\Bigl|\\int_u^v f\\Bigr| \\;\\le\\; \\Bigl|\\int_u^v |f|\\,\\Bigr| ,$$\n\nand that is the form the estimates below on this page use whenever the limits\nare not known to be in increasing order.\n\n**The converse of claim 1 fails.** Integrability of $|f|$ does not give\nintegrability of $f$; the witness is on the companion page.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-monotonicity-of-the-integral",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f, g : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]). Then:\n\n1. **Nonnegativity.** If $f(x) \\ge 0$ for every $x \\in [a,b]$ then\n   $\\int_a^b f \\ge 0$.\n2. **Monotonicity.** If $f(x) \\le g(x)$ for every $x \\in [a,b]$ then\n   $$\\int_a^b f \\;\\le\\; \\int_a^b g .$$\n3. **Two-sided bound.** If $m \\le f(x) \\le M$ for every $x \\in [a,b]$, with\n   $m, M$ real, then\n   $$m\\,(b-a) \\;\\le\\; \\int_a^b f \\;\\le\\; M\\,(b-a) .$$\n\n**Equality in claim 1 does not force $f$ to vanish.** A nonnegative integrable\nfunction with integral $0$ may be positive at infinitely many points; that is\n[[fs-nonnegative-integrable-with-zero-integral-vanishes]] on the previous page's\ncompanion. Under the additional hypothesis of continuity the conclusion does\nhold, and that is [[thm-nonnegative-continuous-with-zero-integral-vanishes]]\nbelow.\n\n**Claim 2 is stated for $a < b$ and is not orientation-invariant.** With the\nconvention of [[def-oriented-integral]], $f \\le g$ gives\n$\\int_u^v f \\le \\int_u^v g$ when $u \\le v$ and the reverse inequality when\n$u \\ge v$, since both sides change sign together.",
      "uses": [
        "1.3",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-linearity-of-the-integral",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f, g : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]). Then:\n\n1. $f + g$ is integrable on $[a,b]$ and\n   $\\int_a^b (f+g) = \\int_a^b f + \\int_a^b g$;\n2. for every real $\\lambda$, $\\lambda f$ is integrable on $[a,b]$ and\n   $\\int_a^b \\lambda f = \\lambda \\int_a^b f$;\n3. consequently, for all reals $\\lambda, \\mu$ the function $\\lambda f + \\mu g$ is\n   integrable and\n   $$\\int_a^b(\\lambda f + \\mu g) \\;=\\; \\lambda\\int_a^b f \\;+\\; \\mu\\int_a^b g ;$$\n4. the same identity holds with oriented limits: if $u, v \\in [a,b]$ and $f, g$\n   are integrable between $u$ and $v$ ([[def-oriented-integral]]), then\n   $\\int_u^v(\\lambda f + \\mu g) = \\lambda\\int_u^v f + \\mu\\int_u^v g$.\n\n**Linearity of the integral is not linearity of the Darboux sums**, and the\nproof of claim 1 has to squeeze rather than compute. On a subinterval the\ninequality $\\sup(f+g) \\le \\sup f + \\sup g$ can be strict — take $f(x) = x$ and\n$g(x) = -x$ on $[0,1]$, where the left side is $0$ and the right side is $1$ —\nso $U(f+g,P)$ is in general strictly below $U(f,P) + U(g,P)$ and no identity\nbetween upper sums is available. Claim 2, by contrast, is an identity at the\nlevel of the sums, with the roles of $\\sup$ and $\\inf$ exchanged when\n$\\lambda < 0$.",
      "uses": [
        "2.1",
        "3.1",
        "7.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-integral-elementary-bounds",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ satisfy\n\n$$m \\;\\le\\; f(x) \\;\\le\\; M \\qquad \\text{for every } x \\in [a,b],$$\n\nwith $m, M$ real. Then $f$ is bounded ([[def-bounded-set]]), so its Darboux sums\nand integrals are defined ([[def-darboux-sums]], [[def-darboux-integral]]), and\nfor **every** partition $P$ of $[a,b]$ ([[def-partition-and-refinement]])\n\n$$m(b-a) \\;\\le\\; L(f,P) \\;\\le\\; \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f \\;\\le\\; U(f,P) \\;\\le\\; M(b-a) .$$\n\nIn particular, taking $f$ to be the constant function with value $c$:\n\n$$\\int_a^b c \\;=\\; c\\,(b-a) ,$$\n\nthe constant function being integrable, with $L(f,P) = U(f,P) = c(b-a)$ for\nevery partition $P$.",
      "uses": [
        "2.1",
        "3.1",
        "7.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "2.1",
        "4.1",
        "4.2",
        "5.1",
        "6.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "2.1",
        "4.1",
        "4.2",
        "5.1",
        "6.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-first-mean-value-theorem-for-integrals-step-1-1",
      "claim": "$f$ is integrable by [L3], so $fg$ is integrable by [L4]. [given, L3, L4]",
      "step": "1.1",
      "inputs": [
        "given",
        "L3",
        "L4"
      ]
    },
    {
      "id": "thm-first-mean-value-theorem-for-integrals-step-1-2",
      "claim": "By [L1] fix $p, q \\in [a,b]$ with $f(q) = \\min f[\\,[a,b]\\,] =: m$ and $f(p) = \\max f[\\,[a,b]\\,] =: M$, so $m \\le f(x) \\le M$ for every $x \\in [a,b]$. [given, L1, choose]",
      "step": "1.2",
      "inputs": [
        "given",
        "L1",
        "choose"
      ]
    },
    {
      "id": "thm-first-mean-value-theorem-for-integrals-step-1-3",
      "claim": "By [L5], $\\int_a^b g \\ge 0$. [given, L5]",
      "step": "1.3",
      "inputs": [
        "given",
        "L5"
      ]
    },
    {
      "id": "thm-first-mean-value-theorem-for-integrals-step-2-1",
      "claim": "Since $g \\ge 0$, multiplying the inequalities of step 1.2 by $g(x)$ gives $m\\,g(x) \\le f(x)g(x) \\le M\\,g(x)$ for every $x \\in [a,b]$, and all three functions are integrable by step 1.1 and [L6]. [step 1.1, step 1.2, given, L6, L7]",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "given",
        "L6",
        "L7"
      ]
    },
    {
      "id": "thm-first-mean-value-theorem-for-integrals-step-3-1",
      "claim": "By [L5] and [L6] applied to step 2.1, $m\\int_a^b g \\;\\le\\; \\int_a^b fg \\;\\le\\; M\\int_a^b g$. [step 2.1, L5, L6]",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L5",
        "L6"
      ]
    },
    {
      "id": "thm-first-mean-value-theorem-for-integrals-step-4-1",
      "claim": "**The case $\\int_a^b g = 0$.** Then step 3.1 reads $0 \\le \\int_a^b fg \\le 0$, so $\\int_a^b fg = 0 = f(a)\\int_a^b g$, and $\\xi := a$ works. [step 1.3, step 3.1, L7]",
      "step": "4.1",
      "inputs": [
        "step 1.3",
        "step 3.1",
        "L7"
      ]
    },
    {
      "id": "thm-first-mean-value-theorem-for-integrals-step-4-2",
      "claim": "**The case $\\int_a^b g > 0$.** Then $\\lambda := \\bigl(\\int_a^b fg\\bigr)\\big/\\bigl(\\int_a^b g\\bigr)$ is a real satisfying $m \\le \\lambda \\le M$, by step 3.1 divided by the positive $\\int_a^b g$. [step 1.3, step 3.1, L7, construct]",
      "step": "4.2",
      "inputs": [
        "step 1.3",
        "step 3.1",
        "L7",
        "construct"
      ]
    },
    {
      "id": "thm-first-mean-value-theorem-for-integrals-step-5-1",
      "claim": "By step 1.2 and [L2], $f[\\,[a,b]\\,] = [m,M]$, so $\\lambda = f(\\xi)$ for some $\\xi \\in [a,b]$; then $\\int_a^b fg = \\lambda\\int_a^b g = f(\\xi)\\int_a^b g$. [step 1.2, step 4.2, L2, L7, choose]",
      "step": "5.1",
      "inputs": [
        "step 1.2",
        "step 4.2",
        "L2",
        "L7",
        "choose"
      ]
    },
    {
      "id": "thm-first-mean-value-theorem-for-integrals-step-6-1",
      "claim": "The two cases $\\int_a^b g = 0$ and $\\int_a^b g > 0$ are exhaustive by step 1.3, so the theorem holds. [step 1.3, step 4.1, step 5.1, L7]",
      "step": "6.1",
      "inputs": [
        "step 1.3",
        "step 4.1",
        "step 5.1",
        "L7"
      ]
    },
    {
      "id": "thm-first-mean-value-theorem-for-integrals-step-7-1",
      "claim": "**The clause $g \\equiv 1$.** The constant $1$ is integrable, nonnegative, with $\\int_a^b 1 = b-a$ by [L6], so step 6.1 gives $\\xi \\in [a,b]$ with $\\int_a^b f = f(\\xi)(b-a)$. [step 6.1, L6] ∎",
      "step": "7.1",
      "inputs": [
        "step 6.1",
        "L6"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-first-mean-value-theorem-for-integrals concerns stipulated functions and points; no empty family, empty sum, or empty choice domain changes its assertion."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-first-mean-value-theorem-for-integrals has no counting, exponent, or value parameter whose zero case changes the proof."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-first-mean-value-theorem-for-integrals has no counting, exponent, or unit parameter whose one case changes the proof."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement explicitly assumes distinct ordered endpoints, excluding the degenerate interval before step 1.1."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement specifies the closed or oriented interval convention; step 1.2 handles the endpoint data used by the argument."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.2 establishes or explicitly fixes the object before the proof chooses or extremizes it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of thm-first-mean-value-theorem-for-integrals is not a biconditional, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of thm-first-mean-value-theorem-for-integrals is not a biconditional, so it has no reverse iff direction."
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
    "source": "thm-first-mean-value-theorem-for-integrals",
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
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "cor-integrability-of-absolute-values-products-and-lattice-operations",
    "declared_target": "cor-integrability-of-absolute-values-products-and-lattice-operations",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-linearity-of-the-integral",
    "declared_target": "thm-linearity-of-the-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-extreme-value-r",
    "declared_target": "thm-extreme-value-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-heine-borel-r",
    "declared_target": "thm-heine-borel-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-continuous-implies-integrable",
    "declared_target": "thm-continuous-implies-integrable",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
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
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-max-min",
    "declared_target": "def-max-min",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
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
    "source": "thm-first-mean-value-theorem-for-integrals",
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
    "source": "thm-first-mean-value-theorem-for-integrals",
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
    "source": "thm-first-mean-value-theorem-for-integrals",
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
    "source": "thm-first-mean-value-theorem-for-integrals",
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
  },
  {
    "source": "thm-first-mean-value-theorem-for-integrals",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "cex-the-first-mean-value-theorem-needs-a-one-signed-weight",
    "declared_target": "cex-the-first-mean-value-theorem-needs-a-one-signed-weight",
    "target_statement_provenance": "ai-generated",
    "targetPage": "properties-of-the-integral-and-the-working-ftc-examples",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (16)

### `cex-the-first-mean-value-theorem-needs-a-one-signed-weight`

````markdown
---
id: cex-the-first-mean-value-theorem-needs-a-one-signed-weight
kind: counterexample
title: "Continuous $f$ and integrable sign-changing $g$ with $\\int_a^b fg \\ne f(\\xi)\\int_a^b g$ for every $\\xi$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [thm-first-mean-value-theorem-for-integrals, cor-primitives-of-a-continuous-function, thm-ftc-second-part, thm-monotonicity-of-the-integral, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-continuous-implies-integrable, thm-algebra-of-continuous-functions, lem-derivative-of-a-power, thm-algebra-of-derivatives, def-oriented-integral, def-canonical-natural, lem-of-naturals-positive, def-integer-power, def-continuity-real, def-darboux-integral, def-derivative, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "the weight must not change sign"
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
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

## Statement refuted

**False claim:** if $f$ is continuous on $[a,b]$ and $g$ is integrable on
$[a,b]$, then there is $\xi \in [a,b]$ with
$\int_a^b f g = f(\xi)\int_a^b g$.

That is [[thm-first-mean-value-theorem-for-integrals]] with the hypothesis
$g \ge 0$ deleted, and it is false. On $[-1,1]$ take

$$f(t) \;=\; t, \qquad g(t) \;=\; t .$$

Both are continuous, hence integrable, and $g$ changes sign. Then

$$\int_{-1}^{1} f g \;=\; \int_{-1}^{1} t^{2}\,\mathrm{d}t \;=\; \frac{2}{\iota(3)} \;>\; 0, \qquad \int_{-1}^{1} g \;=\; \int_{-1}^{1} t\,\mathrm{d}t \;=\; 0 ,$$

so $f(\xi)\int_{-1}^{1} g = 0$ for **every** $\xi \in [-1,1]$, while the left-hand
side is positive. No $\xi$ works.

## Facts & Assumptions

**Given:** The functions $f(t) = g(t) = t$ on $[-1,1]$, and $\xi \in [-1,1]$ arbitrary.

[L1] Every polynomial function is continuous, and a continuous function on $[-1,1]$ is integrable there ([[thm-algebra-of-continuous-functions]], claim 5, [[def-continuity-real]], [[thm-continuous-implies-integrable]], [[def-darboux-integral]]).

[L2] A product of two integrable functions on $[-1,1]$ is integrable ([[cor-integrability-of-absolute-values-products-and-lattice-operations]], claim 1).

[L3] For $n \ge 1$ the function $x \mapsto x^{n}$ is differentiable at every real $c$ with derivative $\iota(n)c^{\,n-1}$, and a scalar multiple of a differentiable function is differentiable with the scaled derivative ([[lem-derivative-of-a-power]], claim 2, [[thm-algebra-of-derivatives]], claim 2, [[def-derivative]]).

[L4] If $H$ is differentiable at every point of $[p,q]$ with $H'$ integrable there, then $\int_p^q H' = H(q)-H(p)$; a continuous function on an interval has a primitive ([[thm-ftc-second-part]], [[cor-primitives-of-a-continuous-function]]).

[L5] Powers and canonical naturals: $1^{2} = 1$, $(-1)^{2} = 1$, $1^{3} = 1$, $(-1)^{3} = -1$, $\iota(2) = 2 > 0$ and $\iota(3) = 3 > 0$ ([[def-integer-power]], [[def-canonical-natural]], [[lem-of-naturals-positive]], [[def-ordered-field]]).

[L6] If $u \ge 0$ is integrable then $\int_p^q u \ge 0$, and $u \cdot 0 = 0$ for every real $u$ ([[thm-monotonicity-of-the-integral]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]], [[def-oriented-integral]]).

## Counterexample

**Proof technique:** direct.

1.1 $f$ and $g$ are continuous on $[-1,1]$, hence integrable there by [L1], and $fg$, the function $t \mapsto t^{2}$, is integrable by [L1] or [L2]. [given, L1, L2]

1.2 The function $H_1(t) := t^{3}/\iota(3)$ is differentiable at every real with $H_1'(t) = \iota(3)t^{2}/\iota(3) = t^{2}$, by [L3] and [L5]. [L3, L5, construct]

1.3 The function $H_2(t) := t^{2}/\iota(2)$ is differentiable at every real with $H_2'(t) = \iota(2)\,t/\iota(2) = t$, by [L3] and [L5]. [L3, L5, construct]

2.1 By [L4] applied to $H_1$ on $[-1,1]$, $\int_{-1}^{1} t^{2}\,\mathrm{d}t = H_1(1)-H_1(-1) = 1/\iota(3) - (-1)/\iota(3) = 2/\iota(3)$, a positive real by [L5]. [step 1.1, step 1.2, L4, L5]

2.2 By [L4] applied to $H_2$ on $[-1,1]$, $\int_{-1}^{1} t\,\mathrm{d}t = H_2(1)-H_2(-1) = 1/\iota(2) - 1/\iota(2) = 0$. [step 1.1, step 1.3, L4, L5]

3.1 For every $\xi \in [-1,1]$, $f(\xi)\int_{-1}^{1} g = \xi \cdot 0 = 0$ by step 2.2 and [L6], while $\int_{-1}^{1} fg = 2/\iota(3) > 0$ by step 2.1. [step 2.1, step 2.2, L5, L6]

4.1 Hence $\int_{-1}^{1} fg \ne f(\xi)\int_{-1}^{1}g$ for every $\xi \in [-1,1]$, and the claim fails at this pair. [step 3.1, L5] ∎

## Remarks

- **What survives when the weight changes sign.** The bound $\bigl|\int_a^b fg\bigr| \le \bigl(\sup_{[a,b]}|f|\bigr)\int_a^b|g|$ still holds, by [[thm-monotonicity-of-the-integral]] applied to $-\sup|f|\,|g| \le fg \le \sup|f|\,|g|$ together with [[cor-integrability-of-absolute-values-products-and-lattice-operations]]. What is lost is the *identity*: the weighted average $\int fg / \int g$ need not be a value of $f$, and here it is not even defined.

- **Where the proof of the theorem breaks.** With $g \ge 0$ the pointwise inequalities $mg \le fg \le Mg$ survive integration and bracket $\int_a^b fg$ between $m\int_a^b g$ and $M\int_a^b g$ (the pointwise inequalities are step 2.1 of [[thm-first-mean-value-theorem-for-integrals]] and the bracket is its step 3.1). Multiplying $m \le f \le M$ by a $g$ that changes sign reverses the inequality where $g < 0$, so no such bracket is available, and the pair above shows that no weaker bracket can rescue the conclusion: the left-hand side is positive and the right-hand side is $0$ whatever $\xi$ is.

- **The theorem with $g \le 0$ holds too**, by applying [[thm-first-mean-value-theorem-for-integrals]] to $-g$ and using linearity; what cannot be dropped is that $g$ has *one* sign.
````

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

### `cor-integrability-of-absolute-values-products-and-lattice-operations`

````markdown
---
id: cor-integrability-of-absolute-values-products-and-lattice-operations
kind: corollary
title: "If $f,g$ are integrable on $[a,b]$ then so are $\\lvert f\\rvert$, $f^{2}$, $fg$, $\\max(f,g)$ and $\\min(f,g)$, and $\\bigl\\lvert\\int_a^b f\\bigr\\rvert \\le \\int_a^b\\lvert f\\rvert$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-composition-with-a-continuous-function, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, def-oriented-integral, thm-algebra-of-continuous-functions, def-continuity-real, def-abs-value, lem-of-abs-value, def-darboux-integral, def-darboux-sums, def-max-min, def-integer-power, def-bounded-set, def-interval, def-ordered-field, def-complete-ordered-field]
forward_refs: [cex-absolute-value-integrable-without-the-function]
justified_by: []
aliases: [cor-integrable-functions-form-an-algebra]
landmark: true
short: "products, moduli and lattice operations"
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

1. $|f|$, $f^{2}$ and $fg$ are integrable on $[a,b]$
   ([[def-abs-value]], [[def-integer-power]]);
2. $\max(f,g)$ and $\min(f,g)$, defined pointwise
   ([[def-max-min]]), are integrable on $[a,b]$;
3. the **triangle inequality for the integral**:
   $$\Bigl|\int_a^b f\Bigr| \;\le\; \int_a^b |f| .$$

**Claim 3 is stated with $a < b$ and is not orientation-invariant.** For $u > v$
the right-hand side is $-\int_v^u |f| \le 0$ while the left-hand side is $\ge 0$,
so the inequality as written is false there. The form valid for *every* pair
$u,v$ on which $f$ is integrable ([[def-oriented-integral]]) is

$$\Bigl|\int_u^v f\Bigr| \;\le\; \Bigl|\int_u^v |f|\,\Bigr| ,$$

and that is the form the estimates below on this page use whenever the limits
are not known to be in increasing order.

**The converse of claim 1 fails.** Integrability of $|f|$ does not give
integrability of $f$; the witness is on the companion page.

## Facts & Assumptions

**Given:** Reals $a < b$ and integrable $f, g : [a,b] \to \mathbb{R}$.

[L1] If $u$ is integrable on $[a,b]$ with values in $[m,M]$ and $\varphi$ is continuous on $[m,M]$, then $\varphi\circ u$ is integrable ([[thm-composition-with-a-continuous-function]]); an integrable function is bounded, so such $m$ and $M$ exist ([[def-darboux-sums]], [[def-bounded-set]], [[def-interval]]).

[L2] Sums and scalar multiples of integrable functions are integrable, with $\int_a^b(\lambda u + \nu w) = \lambda\int_a^b u + \nu\int_a^b w$ ([[thm-linearity-of-the-integral]]).

[L3] If $u \le w$ pointwise on $[a,b]$ and both are integrable then $\int_a^b u \le \int_a^b w$ ([[thm-monotonicity-of-the-integral]]).

[L4] The absolute value $t \mapsto |t|$, the square $t \mapsto t^{2}$ and every polynomial function are continuous on every subset of $\mathbb{R}$ ([[thm-algebra-of-continuous-functions]], claims 2 and 5, [[def-continuity-real]]).

[L5] For reals $s,t$: $\max\{s,t\} = (s + t + |s-t|)\cdot 2^{-1}$ and $\min\{s,t\} = (s + t - |s-t|)\cdot 2^{-1}$, and $st = \bigl((s+t)^{2} - (s-t)^{2}\bigr)\cdot 4^{-1}$ ([[def-max-min]], [[def-abs-value]], [[def-ordered-field]], [[def-integer-power]]).

[L6] Absolute value: $-|t| \le t \le |t|$, and $|t| \le c$ follows from $-c \le t \le c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L7] With oriented limits, $\int_v^u u = -\int_u^v u$ and $\int_u^u u = 0$ ([[def-oriented-integral]]).

[L8] Ordered-field arithmetic: adding constants and multiplying by positive reals preserve inequalities, and the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 $f$ is bounded, so fix reals $m \le M$ with $f[\,[a,b]\,] \subseteq [m,M]$; the same for $g$, and for $f+g$ and $f-g$, which are integrable by [L2]. [given, L1, L2, choose]

1.2 The maps $t \mapsto |t|$ and $t \mapsto t^{2}$ are continuous on any closed bounded interval, by [L4]. [L4]

2.1 By [L1] applied with $\varphi(t) = |t|$ to $f$, to $g$ and to $f-g$, the functions $|f|$, $|g|$ and $|f-g|$ are integrable. [step 1.1, step 1.2, L1]

2.2 By [L1] applied with $\varphi(t) = t^{2}$ to $f$, to $f+g$ and to $f-g$, the functions $f^{2}$, $(f+g)^{2}$ and $(f-g)^{2}$ are integrable. [step 1.1, step 1.2, L1]

3.1 By [L5], $fg = \bigl((f+g)^{2}-(f-g)^{2}\bigr)\cdot 4^{-1}$ pointwise, so $fg$ is integrable by [L2]; this completes claim 1. [step 2.1, step 2.2, L2, L5]

3.2 By [L5], $\max(f,g) = \bigl(f + g + |f-g|\bigr)\cdot 2^{-1}$ and $\min(f,g) = \bigl(f+g-|f-g|\bigr)\cdot 2^{-1}$ pointwise, so both are integrable by [L2]; this is claim 2. [step 2.1, L2, L5]

3.3 **Claim 3.** By [L6], $-|f| \le f \le |f|$ pointwise on $[a,b]$, and all three functions are integrable by step 2.1 and [L2]. [step 2.1, L2, L6]

4.1 By [L3] applied twice, $-\int_a^b|f| \le \int_a^b f \le \int_a^b |f|$, using $\int_a^b(-|f|) = -\int_a^b|f|$ from [L2]. [step 3.3, L2, L3]

5.1 Hence $\bigl|\int_a^b f\bigr| \le \int_a^b|f|$ by [L6], which is claim 3. [step 4.1, L6]

6.1 **The oriented form.** For $u = v$ both sides are $0$ by [L7]; for $u < v$ it is claim 3 on $[u,v]$; and for $u > v$ both $\int_u^v f$ and $\int_u^v |f|$ are the negatives of the corresponding integrals over $[v,u]$ by [L7], so the two absolute values are unchanged and claim 3 on $[v,u]$ gives the inequality. [step 5.1, L7, L8] ∎

## Remarks

- **Every integrability clause comes from one theorem plus linearity.** The only input that produces integrability is [[thm-composition-with-a-continuous-function]], with [[thm-linearity-of-the-integral]] recombining the pieces; claim 3 additionally uses [[thm-monotonicity-of-the-integral]], which is the one place an inequality between integrals is needed. The identities of [L5] are algebra, and they are what turns a statement about composing with $|\cdot|$ and $(\cdot)^2$ into statements about products and lattice operations. In particular no new estimate on Darboux sums is made here.

- **The polarisation identity is used, and it is why $f^2$ comes first.** There is no direct route from integrability of $f$ and of $g$ to integrability of $fg$ through the composition theorem, because $(s,t) \mapsto st$ is a function of two variables and the theorem composes with one. Writing $fg$ through squares of sums and differences reduces it to the one-variable case.

- **The inequality of claim 3 is the integral analogue of the triangle inequality**, and like it, it can be strict: for $f(x) = x$ on $[-1,1]$ the left-hand side is $0$ and the right-hand side is $1$.

- **Forward reference, orientation only.** The witness refuting the converse of claim 1 is [[cex-absolute-value-integrable-without-the-function]] on the companion page; nothing above depends on it.
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

### `thm-continuous-implies-integrable`

````markdown
---
id: thm-continuous-implies-integrable
kind: theorem
title: "A continuous function on $[a,b]$ is Riemann integrable, by Heine-Cantor and Riemann's criterion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-criterion, thm-heine-cantor-r, def-uniform-continuity-real, thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, def-continuity-real, cor-boundedness-theorem-r, def-partition-and-refinement, def-darboux-sums, def-darboux-integral, lem-finite-sum-laws, def-finite-sum, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-interval, def-bounded-set, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "continuous $\\Rightarrow$ integrable"
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Heine-Cantor theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be continuous on $[a,b]$
([[def-continuity-real]]). Then $f$ is bounded ([[def-bounded-set]]) and Riemann
integrable on $[a,b]$ ([[def-darboux-integral]]).

**The proof gives more than integrability: it gives a partition that works.** For
every real $\varepsilon > 0$ the uniform partition into $N$ parts already
satisfies $U(f,P) - L(f,P) < \varepsilon$, as soon as $N$ is large enough that
$(b-a)/\iota(N)$ is below the $\delta$ that uniform continuity supplies for
$\varepsilon/\bigl(2(b-a)\bigr)$. Uniform continuity is exactly what makes one
$\delta$ serve all $N$ subintervals at once, and it is the only place where the
compactness of $[a,b]$ is used.

## Facts & Assumptions

**Given:** Reals $a < b$ and a function $f : [a,b] \to \mathbb{R}$ continuous on $[a,b]$.

[L1] $[a,b]$ is closed and bounded, hence compact ([[def-interval]], [[def-open-and-closed-in-r]], [[def-bounded-set]], [[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L2] A continuous real function on a compact subset of $\mathbb{R}$ is bounded there ([[cor-boundedness-theorem-r]]).

[L3] Heine-Cantor: a continuous real function on a compact subset $K$ of $\mathbb{R}$ is uniformly continuous on $K$, that is, for every real $\eta > 0$ there is a real $\delta > 0$ with $|f(x) - f(y)| < \eta$ for all $x, y \in K$ with $|x - y| < \delta$ ([[thm-heine-cantor-r]], [[def-uniform-continuity-real]]).

[L4] For a partition $P = (n,t)$ of $[a,b]$: $\Delta_i = t_{i+1} - t_i > 0$, $\sum_{i<n}\Delta_i = b-a$, and the uniform partition $U_N$ into $N \ge 1$ parts has every $\Delta_i$ equal to $(b-a)/\iota(N)$ ([[def-partition-and-refinement]]).

[L5] $U(f,P) - L(f,P) = \sum_{i<n}(M_i - m_i)\Delta_i$ and $M_i - m_i = \sup\{|f(x)-f(y)| : x, y \in I_i\}$ for bounded $f$ ([[def-darboux-sums]], [[lem-finite-sum-laws]]).

[L6] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P) - L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L7] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$, and $\iota(N) > 0$ for $N \ge 1$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L8] Finite sums: scaling and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L9] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; $x, y \in [c,d]$ gives $|x - y| \le d - c$ ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 $[a,b]$ is compact by [L1], so $f$ is bounded on $[a,b]$ by [L2] and its Darboux sums and integrals are defined. [given, L1, L2]

1.2 Let a real $\varepsilon > 0$ be given and put $\eta := \varepsilon \cdot \bigl(2(b-a)\bigr)^{-1}$, a positive real by [L9] since $b - a > 0$. [given, L9]

2.1 By [L3] applied to the compact set $[a,b]$ with this $\eta$, fix a real $\delta > 0$ such that $|f(x) - f(y)| < \eta$ for all $x, y \in [a,b]$ with $|x - y| < \delta$. [step 1.1, step 1.2, L1, L3, choose]

3.1 By [L7] fix a natural $N \ge 1$ with $1/\iota(N) < \delta \cdot (b-a)^{-1}$, and put $P := U_N = (N,t)$, the uniform partition of $[a,b]$ into $N$ parts. Then every $\Delta_i$ equals $(b-a)/\iota(N) < \delta$ by [L4] and [L9]. [step 2.1, L4, L7, L9, choose]

4.1 For each $i < N$ and all $x, y \in I_i = [t_i, t_{i+1}]$ one has $|x-y| \le \Delta_i < \delta$ by [L9], hence $|f(x) - f(y)| < \eta$ by step 2.1. So $\eta$ is an upper bound of the set $\{|f(x)-f(y)| : x,y \in I_i\}$, and therefore $M_i - m_i \le \eta$ by [L5]. [step 2.1, step 3.1, L5, L9]

5.1 Consequently $U(f,P) - L(f,P) = \sum_{i<N}(M_i - m_i)\Delta_i \le \sum_{i<N}\eta\,\Delta_i = \eta\,(b-a) = \varepsilon \cdot 2^{-1} < \varepsilon$, using [L5], step 4.1, $\Delta_i > 0$, [L8], [L4] and [L9]. [step 4.1, L4, L5, L8, L9]

6.1 Since the real $\varepsilon > 0$ of step 1.2 was arbitrary and step 5.1 produced a partition with $U(f,P) - L(f,P) < \varepsilon$, criterion [L6] applies and $f$ is Riemann integrable on $[a,b]$; it is bounded by step 1.1. [step 1.1, step 1.2, step 5.1, L6] ∎

## Remarks

- **Continuity is sufficient and very far from necessary.** A monotone function may have infinitely many discontinuities and is still integrable ([[thm-monotone-implies-integrable]]); Thomae's function is discontinuous at every rational and integrable ([[cor-countably-many-discontinuities-integrable]]); and the indicator of the Cantor set is discontinuous at uncountably many points and integrable. The exact frontier is [[thm-lebesgue-criterion]].

- **Where compactness enters, and what it buys.** Only through [L1], and then twice: [[cor-boundedness-theorem-r]] to know that the Darboux sums exist at all, and [[thm-heine-cantor-r]] to get one $\delta$ for the whole interval. On a non-compact interval both can fail: $x \mapsto 1/x$ is continuous on $(0,1)$ and unbounded there, so it has no Darboux sums at all.

- **The choice cost is inherited, not incurred.** Nothing in the proof above selects anything from an infinite family; the single use of countable choice behind this theorem sits inside [[thm-heine-cantor-r]], which names it in its own statement. See [[rem-riemann-integral-choice-ledger]].
````

### `thm-extreme-value-r`

````markdown
---
id: thm-extreme-value-r
kind: theorem
title: "Extreme value theorem: a continuous real function on a nonempty compact subset of $\\mathbb{R}$ attains a greatest and a least value"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-continuous-image-of-a-compact-set-r, cor-boundedness-theorem-r, thm-heine-borel-characterisation-r, def-open-cover-r, def-continuity-real, def-bounded-set, def-infimum, thm-infimum-property, lem-sup-epsilon, lem-inf-epsilon, def-max-min, def-complete-ordered-field, thm-closure-characterisations-r, def-open-and-closed-in-r, def-neighbourhood-r]
justified_by: []
aliases: [thm-evt-r]
forward_refs: [cex-evt-fails-on-the-open-interval-and-on-the-half-line]
landmark: true
short: "extreme value theorem"
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
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.16)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "Compact space (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Compact_space"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ be continuous on $A$
([[def-continuity-real]]) and let $K \subseteq A$ be **nonempty** and compact
([[def-open-cover-r]]). Then $\sup f[K]$ and $\inf f[K]$ exist and are
**attained**: there are $p, q \in K$ with

$$f(q) \;=\; \inf f[K] \;\le\; f(x) \;\le\; \sup f[K] \;=\; f(p) \qquad \text{for every } x \in K .$$

Equivalently, the set $f[K]$ has a maximum and a minimum
([[def-max-min]]), namely $\max f[K] = f(p)$ and $\min f[K] = f(q)$.

**Nonemptiness of $K$ is a hypothesis, not an oversight.** For $K = \varnothing$
the set $f[K]$ is empty, and neither a supremum nor a maximum of the empty set
exists in this library ([[def-complete-ordered-field]] supplies suprema of
nonempty sets bounded above only).

**This theorem is stated twice in this library, on purpose.** Its metric-space
twin is [[thm-extreme-value-metric]], proved from the cover machinery of metric
spaces; the proof below is $\mathbb{R}$-native, running through Heine-Borel for
$\mathbb{R}$ and the order-completeness of $\mathbb{R}$, and it uses no cover
argument beyond the one already spent in
[[thm-continuous-image-of-a-compact-set-r]]. That the two statements are the
same statement in two vocabularies is proved in
[[lem-real-and-metric-notions-agree]], later on this page.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ continuous on $A$, and a nonempty compact set $K \subseteq A$; write $S := f[K]$.

[L1] $S = f[K]$ is compact ([[thm-continuous-image-of-a-compact-set-r]]), and it is nonempty because $K$ is.

[L2] $S$ is bounded: there is a real $M \ge 0$ with $|z| \le M$ for every $z \in S$, so $-M$ is a lower bound and $M$ an upper bound of $S$ ([[cor-boundedness-theorem-r]], [[def-bounded-set]]).

[L3] A compact subset of $\mathbb{R}$ is closed ([[thm-heine-borel-characterisation-r]], [[def-open-and-closed-in-r]]).

[L4] Least upper bounds: a nonempty subset of $\mathbb{R}$ bounded above has a supremum ([[def-complete-ordered-field]]); a nonempty subset bounded below has an infimum ([[thm-infimum-property]], [[def-infimum]]).

[L5] Epsilon characterisations: for nonempty $S$ bounded above and $u = \sup S$, every real $\varepsilon > 0$ admits $s \in S$ with $u - \varepsilon < s$; dually for $\ell = \inf S$ there is $s \in S$ with $s < \ell + \varepsilon$ ([[lem-sup-epsilon]], [[lem-inf-epsilon]]).

[L6] Closure: $\overline{S}$ is the set of points every neighbourhood of which meets $S$, and $S$ is closed exactly when $S = \overline{S}$ ([[thm-closure-characterisations-r]], [[def-neighbourhood-r]]).

[L7] A maximum of a set is an element of it that bounds it above, and a minimum is an element that bounds it below ([[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the set $S = f[K]$ is nonempty and compact, and by [L2] it is bounded; by [L3] it is closed. [L1, L2, L3]

2.1 By [L4] the supremum $u := \sup S$ and the infimum $\ell := \inf S$ exist. [step 1.1, L4]

3.1 **$u$ is adherent to $S$.** Let a real $\varepsilon > 0$ be given. By [L5] there is $s \in S$ with $u - \varepsilon < s$, and $s \le u < u + \varepsilon$ since $u$ bounds $S$ above; hence $|s - u| < \varepsilon$, that is $s \in N_{\varepsilon}(u) \cap S$. So every neighbourhood of $u$ meets $S$. [step 2.1, L5, L6]

3.2 **$\ell$ is adherent to $S$.** Symmetrically, [L5] gives $s \in S$ with $s < \ell + \varepsilon$, and $\ell \le s$ since $\ell$ bounds $S$ below; hence $s \in N_{\varepsilon}(\ell) \cap S$ for every real $\varepsilon > 0$. [step 2.1, L5, L6]

4.1 By [L6] the two steps above say $u \in \overline{S}$ and $\ell \in \overline{S}$; and $S$ is closed by step 1.1, so $\overline{S} = S$ and therefore $u \in S$ and $\ell \in S$. [step 1.1, step 3.1, step 3.2, L6]

5.1 Since $u \in S = f[K]$ there is $p \in K$ with $f(p) = u$, and since $\ell \in S$ there is $q \in K$ with $f(q) = \ell$. [step 4.1, choose]

6.1 For every $x \in K$ the value $f(x)$ lies in $S$, so $\ell \le f(x) \le u$, that is $f(q) \le f(x) \le f(p)$. Hence $u = \sup f[K] = f(p)$ is a maximum of $f[K]$ and $\ell = \inf f[K] = f(q)$ is a minimum of it, both attained at points of $K$. [step 2.1, step 4.1, step 5.1, L7] ∎

## Remarks

- **The two ingredients, kept apart.** Compactness of $K$ enters only through the compactness of the image; order-completeness of $\mathbb{R}$ enters only in the existence of $\sup S$ and $\inf S$. The bridge between them is closedness of $S$: a closed set contains the adherent points of itself, and the supremum of a nonempty bounded set is always adherent to it, by [[lem-sup-epsilon]]. Neither ingredient can be dropped: over $\mathbb{Q}$ the supremum need not exist, and on a noncompact domain the supremum exists and is not attained ([[cex-evt-fails-on-the-open-interval-and-on-the-half-line]]).

- **Attainment is exactly what the epsilon characterisation cannot give on its own.** [[lem-sup-epsilon]] produces points of $S$ arbitrarily close to $\sup S$ for any nonempty bounded $S$; nothing there says one of them equals $\sup S$. What closedness adds is that the limiting value is not lost.

- **The converse.** If every continuous real function on a set $E$ attains a greatest value, then $E$ is compact. That is the content of [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]], which exhibits, for every noncompact $E$, a bounded continuous function on $E$ with no greatest value.
````

### `thm-heine-borel-r`

````markdown
---
id: thm-heine-borel-r
kind: theorem
title: "Heine-Borel by bisection: every closed bounded interval $[a,b]$ is compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-open-cover-r, def-interval, thm-nested-interval-property, def-complete-ordered-field, thm-recursion, cor-archimedean-reciprocal, thm-of-archimedean, def-neighbourhood-r, def-open-and-closed-in-r, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$[a,b]$ is compact"
proof_strategy: contradiction
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.40)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$. Then the closed bounded interval
$[a,b]$ ([[def-interval]]) is compact ([[def-open-cover-r]]): every family of
open subsets of $\mathbb{R}$ whose union contains $[a,b]$ has a finite subfamily
whose union already contains $[a,b]$.

The proof is by repeated bisection. Supposing some open cover admits no finite
subcover, one halves the interval, keeps a half that still admits none, and
iterates; the halves shrink to a point, which the cover does reach, and a single
member of the cover then swallows a whole late-stage half. **The halving rule is
canonical**, taking the left half whenever the left half works, so the recursion
uses [[thm-recursion]] and no choice principle.

## Facts & Assumptions

**Given:** Reals $a \le b$ and an open cover $\mathcal{U}$ of $[a,b]$; the set $X := \{\, (u,v) \in \mathbb{R} \times \mathbb{R} : u \le v \,\}$; and the following terminology: a pair $(u,v) \in X$ is **bad** when there are no $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $[u,v] \subseteq U_0 \cup \dots \cup U_n$, that is, when the interval $[u,v]$ admits no finite subcover from $\mathcal{U}$.

[L1] Open cover, subcover, finite subfamily and compactness ([[def-open-cover-r]]).

[L2] Closed bounded intervals: $[u,v] = \{\, z : u \le z \le v \,\}$ is nonempty exactly when $u \le v$; and for $u \le m \le v$ one has $[u,v] = [u,m] \cup [m,v]$, since $z \in [u,v]$ satisfies $z \le m$ or $m < z$ by trichotomy ([[def-interval]], [[def-ordered-field]]).

[L3] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$, and $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] Recursion: for a set $Y$, an element $y_0 \in Y$ and a function $G : Y \to Y$ there is $h : \mathbb{N} \to Y$ with $h(0) = y_0$ and $h(k+1) = G(h(k))$ for every $k$ ([[thm-recursion]]).

[L5] Nested interval property: if $[a_k,b_k]$ with $a_k \le b_k$ satisfy $[a_{k+1},b_{k+1}] \subseteq [a_k,b_k]$ for every $k \in \mathbb{N}$, then $\bigcap_{k} [a_k,b_k] \ne \varnothing$ ([[thm-nested-interval-property]]).

[L6] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L7] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$, the map $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing, and $(n+1) \cdot 1_{\mathbb{R}} = n \cdot 1_{\mathbb{R}} + 1$ ([[lem-of-naturals-positive]]); a positive element has a positive inverse and $0 < c \le d$ gives $0 < 1/d \le 1/c$ ([[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L8] Ordered-field arithmetic: $0 < 1$, hence $2 := 1 + 1 > 0$ and $2^{-1} > 0$; adding a constant preserves an inequality and multiplying by a positive preserves it ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-complete-ordered-field]], [[def-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L9] Absolute value: $|y - x| \le v - u$ whenever $x, y \in [u,v]$, because $|y - x|$ equals $y - x$ or $x - y$ and each is at most $v - u$ ([[lem-of-abs-value]], [[def-ordered-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $[a,b]$ is not compact: some open cover $\mathcal{U}$ of $[a,b]$ has no finite subcover, that is, the pair $(a,b) \in X$ is bad. [assume-contra, L1]

1.2 Bisection rule: for $(u,v) \in X$ put $m := (u+v) \cdot 2^{-1}$, so that $u \le m \le v$ by [L8], and define $G(u,v) := (u,m)$ if $(u,m)$ is bad and $G(u,v) := (m,v)$ otherwise. This is a definition by cases on one condition, so $G : X \to X$ is a function and nothing is selected. [L2, L8, construct]

1.3 If $(u,v)$ is bad then $G(u,v)$ is bad: were both $(u,m)$ and $(m,v)$ not bad, concatenating the two finite lists of members of $\mathcal{U}$ would give a finite subfamily whose union contains $[u,m] \cup [m,v] = [u,v]$ by [L2], so $(u,v)$ would not be bad; hence at least one half is bad, and the rule returns the left half when it is bad and otherwise the right half, which must then be bad. [L1, L2]

2.1 Apply [L4] with $Y = X$, seed $(a,b)$ and map $G$: there is $h : \mathbb{N} \to X$ with $h(0) = (a,b)$ and $h(k+1) = G(h(k))$. Write $h(k) = (a_k,b_k)$, so $a_k \le b_k$ for every $k$, $(a_0,b_0) = (a,b)$, and $(a_{k+1},b_{k+1})$ is one of the two halves of $(a_k,b_k)$. [step 1.2, L2, L4, construct]

3.1 Every $(a_k,b_k)$ is bad, by induction on $k$: the case $k = 0$ is step 1.1, and if $(a_k,b_k)$ is bad then $(a_{k+1},b_{k+1}) = G(a_k,b_k)$ is bad by step 1.3. [step 1.1, step 1.3, step 2.1]

3.2 Writing $\ell_k := b_k - a_k \ge 0$, the intervals are nested and the lengths halve: $[a_{k+1},b_{k+1}]$ is $[a_k,m_k]$ or $[m_k,b_k]$ with $m_k = (a_k+b_k) \cdot 2^{-1}$, and each of these is contained in $[a_k,b_k]$ by [L2], while $m_k - a_k = b_k - m_k = \ell_k \cdot 2^{-1}$, so $\ell_{k+1} = \ell_k \cdot 2^{-1}$. [step 2.1, L2, L8]

4.1 For every $k \in \mathbb{N}$ one has $\ell_k \cdot (k+1) \le \ell_0$, by induction on $k$: at $k = 0$ this reads $\ell_0 \cdot 1 \le \ell_0$; and if it holds at $k$ then $\ell_{k+1} \cdot (k+2) = \ell_k \cdot 2^{-1} \cdot (k+2) \le \ell_k \cdot (k+1) \le \ell_0$, using $\ell_k \ge 0$ and $(k+2) \cdot 2^{-1} \le k+1$, which is $k + 2 \le 2k+2$, that is $0 \le k$. [step 3.2, L7, L8]

4.2 By [L5] the nested family $[a_k,b_k]$ of nonempty closed bounded intervals has a common point $x$; since $x \in [a_0,b_0] = [a,b]$ and $\mathcal{U}$ covers $[a,b]$, fix $U \in \mathcal{U}$ with $x \in U$ and then, $U$ being open, a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$. [step 3.2, L1, L2, L3, L5, choose]

5.1 There is $k \in \mathbb{N}$ with $\ell_k < \varepsilon$: the real $\varepsilon/(\ell_0+1)$ is positive because $\ell_0 + 1 > 0$, so [L6] supplies a natural $n \ge 1$ with $1/n < \varepsilon/(\ell_0+1)$; put $k := n-1$, a natural number, so that $k+1 = n$ and step 4.1 with [L7] gives $\ell_k \le \ell_0 \cdot (1/n) \le \ell_0 \cdot \varepsilon/(\ell_0+1) < \varepsilon$, the last step because $\ell_0 < \ell_0 + 1$ forces $\ell_0/(\ell_0+1) < 1$ and $\varepsilon > 0$. [step 4.1, step 4.2, L6, L7, L8, choose]

6.1 For that $k$ one has $x \in [a_k,b_k]$, and every $y \in [a_k,b_k]$ satisfies $|y - x| \le \ell_k < \varepsilon$ by [L9], so $[a_k,b_k] \subseteq N_\varepsilon(x) \subseteq U$; hence the one-member subfamily $\{U\}$ of $\mathcal{U}$ covers $[a_k,b_k]$ and $(a_k,b_k)$ is not bad, contradicting step 3.1. The assumption of step 1.1 is therefore untenable and $[a,b]$ is compact. [step 3.1, step 4.2, step 5.1, L1, L3, L9, discharge-contradiction] ∎

## Remarks

- **What each hypothesis buys.** Closedness enters through [L5]: the nested
  interval property is stated for closed intervals and fails for open ones
  ([[cex-nested-open-intervals-empty]]). Boundedness enters through the same
  fact and through the length computation of step 3.2. Completeness of
  $\mathbb{R}$ enters only inside [[thm-nested-interval-property]] and, through
  [[cor-archimedean-reciprocal]], in step 5.1.

- **Why the lengths are handled without powers.** The obvious route is
  $\ell_k = \ell_0 \cdot 2^{-k}$ together with the nullity of a geometric
  sequence, which is available ([[lem-geometric-sequence-null]]). The route
  taken instead, the one-line induction of step 4.1, gives the weaker bound
  $\ell_k \le \ell_0/(k+1)$, which is all step 5.1 needs, and it avoids
  integer powers and the algebra of limits entirely.

- **The recursion is over pairs, not over sets.** The state carried from stage
  to stage is the pair of endpoints, so [L4] applies with $Y = X$ and a total
  map $G$; had the rule been "choose a bad half", the state would have been
  chosen rather than computed and the argument would have needed dependent
  choice, which this library does not have.

- **The converse direction is a separate result.** That a compact subset of
  $\mathbb{R}$ must be closed and bounded is
  [[lem-compact-implies-closed-and-bounded-r]], and the two together give
  [[thm-heine-borel-characterisation-r]].
````

### `thm-linearity-of-the-integral`

````markdown
---
id: thm-linearity-of-the-integral
kind: theorem
title: "Integrable functions on $[a,b]$ form a set closed under sums and scalar multiples, and $\\int_a^b(\\lambda f+\\mu g) = \\lambda\\int_a^b f + \\mu\\int_a^b g$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-darboux-integral, def-darboux-sums, thm-riemann-criterion, lem-refinement-inequalities, def-partition-and-refinement, lem-integral-elementary-bounds, def-oriented-integral, lem-reflection, def-infimum, lem-sup-unique, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [thm-integral-is-linear]
landmark: true
short: "linearity of the integral"
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

1. $f + g$ is integrable on $[a,b]$ and
   $\int_a^b (f+g) = \int_a^b f + \int_a^b g$;
2. for every real $\lambda$, $\lambda f$ is integrable on $[a,b]$ and
   $\int_a^b \lambda f = \lambda \int_a^b f$;
3. consequently, for all reals $\lambda, \mu$ the function $\lambda f + \mu g$ is
   integrable and
   $$\int_a^b(\lambda f + \mu g) \;=\; \lambda\int_a^b f \;+\; \mu\int_a^b g ;$$
4. the same identity holds with oriented limits: if $u, v \in [a,b]$ and $f, g$
   are integrable between $u$ and $v$ ([[def-oriented-integral]]), then
   $\int_u^v(\lambda f + \mu g) = \lambda\int_u^v f + \mu\int_u^v g$.

**Linearity of the integral is not linearity of the Darboux sums**, and the
proof of claim 1 has to squeeze rather than compute. On a subinterval the
inequality $\sup(f+g) \le \sup f + \sup g$ can be strict — take $f(x) = x$ and
$g(x) = -x$ on $[0,1]$, where the left side is $0$ and the right side is $1$ —
so $U(f+g,P)$ is in general strictly below $U(f,P) + U(g,P)$ and no identity
between upper sums is available. Claim 2, by contrast, is an identity at the
level of the sums, with the roles of $\sup$ and $\inf$ exchanged when
$\lambda < 0$.

## Facts & Assumptions

**Given:** Reals $a < b$, integrable $f, g : [a,b] \to \mathbb{R}$, reals $\lambda, \mu$, and a real $\varepsilon > 0$.

[L1] Riemann's criterion: a bounded $h$ on $[a,b]$ is integrable if and only if for every real $\eta > 0$ there is a partition $P$ with $U(h,P) - L(h,P) < \eta$ ([[thm-riemann-criterion]]).

[L2] For every partition $P$ and bounded $h$: $L(h,P) \le \underline{\int_a^b} h \le \overline{\int_a^b} h \le U(h,P)$, and $h$ is integrable exactly when the two integrals agree, their common value being $\int_a^b h$; the lower integral is $\sup_P L(h,P)$ and the upper is $\inf_P U(h,P)$ ([[def-darboux-integral]], [[lem-sup-unique]]).

[L3] $L(h,P) = \sum_{i<n} m_i(h)\Delta_i$ and $U(h,P) = \sum_{i<n}M_i(h)\Delta_i$, where $m_i(h) = \inf h[I_i]$ and $M_i(h) = \sup h[I_i]$ over the subintervals $I_i$ of $P = (n,t)$, with $\Delta_i > 0$; an integrable function is bounded, and a sum of two bounded functions and a scalar multiple of a bounded function are bounded ([[def-darboux-sums]], [[def-partition-and-refinement]], [[def-bounded-set]]).

[L4] If $P'$ refines $P$ then $L(h,P) \le L(h,P') \le U(h,P') \le U(h,P)$; the common refinement $P_1 \vee P_2$ refines both ([[lem-refinement-inequalities]], [[def-partition-and-refinement]]).

[L5] Finite sums are additive and homogeneous: $\sum_{i<n}(x_i + y_i) = \sum_{i<n}x_i + \sum_{i<n}y_i$ and $\sum_{i<n}\lambda x_i = \lambda\sum_{i<n}x_i$ ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 1 and 2).

[L6] A supremum is the least upper bound and an infimum the greatest lower bound; both exist for a nonempty bounded set and are unique ([[def-complete-ordered-field]], [[def-infimum]], [[lem-sup-unique]]).

[L7] Reflection: writing $-S = \{-s : s \in S\}$, a real $u$ is an upper bound of $S$ exactly when $-u$ is a lower bound of $-S$, and conversely; hence $\sup(-S) = -\inf S$ and $\inf(-S) = -\sup S$ for nonempty bounded $S$, by [L6] ([[lem-reflection]]).

[L8] The constant function $0$ is integrable with $\int_a^b 0 = 0$ ([[lem-integral-elementary-bounds]]).

[L9] Ordered-field arithmetic: adding a constant and multiplying by a positive quantity preserve an inequality, the order is total and transitive, and a real $x$ with $|x| < \eta$ for every real $\eta > 0$ is $0$ ([[def-ordered-field]], [[def-complete-ordered-field]]). These order facts are used in their nonstrict form as well, obtained by adjoining the case of equality.

[L10] With oriented limits, $\int_v^u h = -\int_u^v h$ and $\int_u^u h = 0$ ([[def-oriented-integral]]).

## Proof

**Proof technique:** direct.

1.1 $f$, $g$, $f+g$ and $\lambda f$ are bounded on $[a,b]$, so all their Darboux sums and integrals are defined. [given, L3]

1.2 For every partition $P = (n,t)$ and every $i < n$: $f(x) + g(x) \le M_i(f) + M_i(g)$ for $x \in I_i$, so $M_i(f) + M_i(g)$ is an upper bound of $(f+g)[I_i]$ and $M_i(f+g) \le M_i(f) + M_i(g)$ by [L6]; dually $m_i(f+g) \ge m_i(f) + m_i(g)$. [L3, L6]

1.3 Fix partitions $P_1$ and $P_2$ with $U(f,P_1) - L(f,P_1) < \varepsilon \cdot 2^{-1}$ and $U(g,P_2) - L(g,P_2) < \varepsilon \cdot 2^{-1}$, and put $P := P_1 \vee P_2$. [given, L1, L4, choose]

1.4 **Claim 2, the case $\lambda = 0$.** Then $\lambda f$ is the constant function $0$, integrable with integral $0 = 0 \cdot \int_a^b f$. [L8]

1.5 **Claim 2, the case $\lambda > 0$.** For every partition $P$ and every $i < n$, $\lambda M_i(f)$ is an upper bound of $(\lambda f)[I_i]$, and any upper bound $w$ of $(\lambda f)[I_i]$ gives the upper bound $w/\lambda$ of $f[I_i]$, whence $M_i(f) \le w/\lambda$ and $\lambda M_i(f) \le w$; so $M_i(\lambda f) = \lambda M_i(f)$ by [L6], and dually $m_i(\lambda f) = \lambda m_i(f)$. [L3, L6, L9]

1.6 **Claim 2, the case $\lambda = -1$.** For every $P$ and $i < n$, $(-f)[I_i] = -\bigl(f[I_i]\bigr)$, so $M_i(-f) = -m_i(f)$ and $m_i(-f) = -M_i(f)$ by [L7]. [L3, L7]

2.1 By [L4], $U(f,P) - L(f,P) < \varepsilon\cdot 2^{-1}$ and $U(g,P) - L(g,P) < \varepsilon \cdot 2^{-1}$. [step 1.3, L4]

2.2 Summing the inequalities of step 1.2 over $i < n$ against the positive weights $\Delta_i$ and using [L5] gives $L(f,P) + L(g,P) \le L(f+g,P) \le U(f+g,P) \le U(f,P) + U(g,P)$. [step 1.2, L3, L5, L9]

2.3 With step 1.5 and [L5], $U(\lambda f,P) = \lambda U(f,P)$ and $L(\lambda f, P) = \lambda L(f,P)$ for $\lambda > 0$; hence $U(\lambda f,P)-L(\lambda f,P) = \lambda\bigl(U(f,P)-L(f,P)\bigr)$, which [L1] makes smaller than any prescribed positive number by choosing $P$ suitably, so $\lambda f$ is integrable. [step 1.5, L1, L3, L5, L9]

2.4 With step 1.6 and [L5], $U(-f,P) = -L(f,P)$ and $L(-f,P) = -U(f,P)$, so $U(-f,P)-L(-f,P) = U(f,P)-L(f,P)$ and $-f$ is integrable by [L1]; and by [L7] applied to the sets of Darboux sums, $\overline{\int_a^b}(-f) = -\underline{\int_a^b} f$ and $\underline{\int_a^b}(-f) = -\overline{\int_a^b} f$, so $\int_a^b(-f) = -\int_a^b f$. [step 1.6, L1, L2, L5, L7]

3.1 Hence $U(f+g,P) - L(f+g,P) \le \bigl(U(f,P)-L(f,P)\bigr) + \bigl(U(g,P)-L(g,P)\bigr) < \varepsilon$, so $f+g$ is integrable by [L1], $\varepsilon > 0$ having been arbitrary. [step 1.1, step 2.1, step 2.2, L1, L9]

3.2 Moreover the set of lower sums of $\lambda f$ is $\lambda$ times the set of lower sums of $f$, and a supremum scales by a positive factor, by the argument of step 1.5 applied to that set; so $\underline{\int_a^b}\lambda f = \lambda \underline{\int_a^b} f$, and likewise for the upper integrals, giving $\int_a^b \lambda f = \lambda\int_a^b f$. [step 1.5, step 2.3, L2, L6, L9]

4.1 Both $\int_a^b(f+g)$ and $\int_a^b f + \int_a^b g$ lie in the interval from $L(f,P)+L(g,P)$ to $U(f,P)+U(g,P)$: the first by [L2] and step 2.2, the second by [L2] applied to $f$ and to $g$ separately. [step 2.1, step 2.2, step 3.1, L2]

4.2 **Claim 2 for $\lambda < 0$.** Then $-\lambda > 0$ and $\lambda f = (-\lambda)(-f)$, so steps 2.3, 2.4 and 3.2 give integrability and the required identities and $\int_a^b \lambda f = (-\lambda)\int_a^b(-f) = (-\lambda)\bigl(-\int_a^b f\bigr) = \lambda\int_a^b f$. [step 2.3, step 3.2, step 2.4, L9]

5.1 That interval has length less than $\varepsilon$ by step 2.1, so $\bigl|\int_a^b(f+g) - \int_a^b f - \int_a^b g\bigr| < \varepsilon$; as $\varepsilon > 0$ was arbitrary the difference is $0$, which is claim 1. [step 2.1, step 4.1, L9]

5.2 Claim 2 is now proved in all three cases $\lambda = 0$, $\lambda > 0$ and $\lambda < 0$, which are exhaustive by trichotomy. [step 1.4, step 2.3, step 3.2, step 4.2, L9]

6.1 **Claim 3.** By claim 2 the functions $\lambda f$ and $\mu g$ are integrable with integrals $\lambda\int_a^b f$ and $\mu\int_a^b g$, and by claim 1 their sum is integrable with the sum of those integrals. [step 5.1, step 5.2]

7.1 **Claim 4.** If $u < v$ then $u, v \in [a,b]$ and claim 3 applies verbatim on $[u,v]$; if $u = v$ both sides are $0$ by [L10]; and if $u > v$ then applying the case $u < v$ to the pair $(v,u)$ and multiplying by $-1$ gives the identity, by [L10]. [step 6.1, L10] ∎

## Remarks

- **Why claim 1 cannot be an identity of Darboux sums.** The example in the statement shows $\sup(f+g) < \sup f + \sup g$ is possible on a single subinterval, so $U(f+g,P) = U(f,P)+U(g,P)$ is false in general. What survives is the pair of inequalities of step 1.2, and they are enough because the gap between them is squeezed to $0$ by [[thm-riemann-criterion]].

- **The two scalar cases really are different.** For $\lambda > 0$ the extreme values scale; for $\lambda < 0$ they are exchanged, because multiplying by a negative reverses the order ([[lem-reflection]]). Merging the cases and writing $U(\lambda f, P) = \lambda U(f,P)$ for all $\lambda$ would be false at $\lambda = -1$, where the correct identity is $U(-f,P) = -L(f,P)$.

- **The set of integrable functions on $[a,b]$ is closed under the operations named here and under more.** Products, absolute values and the lattice operations are also integrable, but none of them is obtained from linearity alone: the proofs of [[cor-integrability-of-absolute-values-products-and-lattice-operations]] all pass through [[thm-composition-with-a-continuous-function]], with linearity used only to recombine the pieces.
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


# Audit proof-refuter brief — Wave 10, A6

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

## Wave 10 target — `ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set`

Selection: mandatory Wave 10 high/critical proof-bearing route (risk report classifies all 49 contracts critical).

Normalized current SHA-256: `9ff5f925d86376897bc47e078eb36b7fab6554f7b9a4588f31c807cb378f01f9`

## Complete current target

````markdown
---
id: ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set
kind: example
title: "For every $F_\\sigma$ subset $E$ of $[0,1]$ of measure zero there is a bounded Riemann integrable function on $[0,1]$ whose set of discontinuities is exactly $E$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-lebesgue-criterion, def-f-sigma-g-delta, def-measure-zero-and-content-zero, lem-nondegenerate-interval-is-not-null, def-continuity-real, def-classification-of-discontinuities, def-open-and-closed-in-r, def-neighbourhood-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-integer-power, lem-power-monotone, thm-well-ordering-principle, lem-finite-set-has-max, def-max-min, def-sequence, def-bounded-set, def-darboux-integral, def-interval, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
short: "prescribed null $F_\\sigma$ discontinuity set"
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Fsigma set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/F%CF%83_set"
    - title: "M. Wodzicki, The Riemann Integral"
      url: "https://math.berkeley.edu/~wodzicki/H104.F10/Integral.pdf"
    - title: "Sets of discontinuity (University of Richmond MATH 320)"
      url: "https://blog.richmond.edu/math320/2016/10/20/sets-of-discontinuity/"
pipeline_run: null
---

## Example

Let $E \subseteq [0,1]$ be an $F_\sigma$ subset of $\mathbb{R}$
([[def-f-sigma-g-delta]]) of measure zero
([[def-measure-zero-and-content-zero]]). Then there is a bounded function
$h : [0,1] \to \mathbb{R}$, with values in $[0,1]$, that is Riemann integrable on
$[0,1]$ and whose set of discontinuities is **exactly** $E$
([[def-continuity-real]], [[def-classification-of-discontinuities]]).

**The construction.** Fix closed sets $F_0, F_1, F_2, \dots$ with
$E = \bigcup_{n \in \mathbb{N}} F_n$ and put

$$h(x) \;:=\; 2^{-n(x)} \ \text{ for } x \in E, \qquad h(x) \;:=\; 0 \ \text{ for } x \in [0,1]\setminus E,$$

where $n(x) := \min\{\, n \in \mathbb{N} : x \in F_n \,\}$ is the least index of a
closed set containing $x$ ([[thm-well-ordering-principle]]). Nothing is selected:
$n(x)$ is the least element of a set determined by $x$ and the fixed sequence
$(F_n)$.

**Why this is worth stating.** Together with
[[thm-discontinuity-set-is-f-sigma]], which shows that a discontinuity set is
always the trace of an $F_\sigma$ set, and with [[thm-lebesgue-criterion]], which
shows that an integrable function has a null discontinuity set, the example says
that the two necessary conditions are also **jointly sufficient**: null and
$F_\sigma$ is exactly what a discontinuity set of a Riemann integrable function
on $[0,1]$ can be. The Cantor set and any at most countable subset of $[0,1]$
are instances.

**Choice.** The construction uses none; the only choice principle in the
statement comes from the direction of [[thm-lebesgue-criterion]] used at the end,
and that direction, "null $\Rightarrow$ integrable", is a theorem of ZF.

## Facts & Assumptions

**Given:** An $F_\sigma$ set $E \subseteq [0,1]$ of measure zero, and a sequence $(F_n)_{n \in \mathbb{N}}$ of closed subsets of $\mathbb{R}$ with $E = \bigcup_n F_n$.

[L1] $E$ is a union of a sequence of closed sets ([[def-f-sigma-g-delta]], [[def-sequence]]).

[L2] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L3] A set $F$ is closed exactly when every point outside $F$ has a neighbourhood missing $F$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] $E$ has measure zero and a subset of a null set is null, so $E$ contains no interval with two distinct endpoints: such an interval would be null, contradicting [[lem-nondegenerate-interval-is-not-null]] ([[def-measure-zero-and-content-zero]]).

[L5] Powers: $2^{-n} > 0$ for every $n \in \mathbb{N}$, $2^{0} = 1$, $2^{-n} \le 1$, and $m < n$ implies $2^{-n} < 2^{-m}$ ([[def-integer-power]], [[lem-power-monotone]]).

[L6] Every nonempty finite set of reals has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L7] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$, and $2^{-N} \le 1/\iota(N)$ for $N \ge 1$, since $\iota(N) \le 2^{N}$ by induction ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-power-monotone]]).

[L8] A bounded function on $[a,b]$ with $a < b$ whose set of discontinuities has measure zero is Riemann integrable, and that implication uses no choice principle ([[thm-lebesgue-criterion]], [[def-bounded-set]], [[def-darboux-integral]]).

[L9] Ordered-field arithmetic and the absolute value: the order is total and transitive; for $0 \le x \le 1$ and a real $\rho > 0$ the reals $u := \max\{0,x-\rho\}$ and $v := \min\{1,x+\rho\}$ satisfy $u < v$ and $(u,v) \subseteq N_\rho(x)\cap[0,1]$; a nonempty open interval is a nondegenerate interval ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-max-min]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]], [[def-neighbourhood-r]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** constructive.

1.1 Fix the sequence $(F_n)$ of [L1] and define $n(x) := \min\{\, n \in \mathbb{N} : x \in F_n \,\}$ for $x \in E$, which exists by [L2] since the set is a nonempty subset of $\mathbb{N}$; define $h : [0,1] \to \mathbb{R}$ by $h(x) := 2^{-n(x)}$ for $x \in E$ and $h(x) := 0$ otherwise. [given, L1, L2, L5, construct]

2.1 $h$ is bounded with values in $[0,1]$: $0 < 2^{-n(x)} \le 2^{0} = 1$ for $x \in E$ by [L5], and $h = 0$ off $E$. [step 1.1, L5]

2.2 **$h$ is discontinuous at every point of $E$.** Let $x \in E$, so $h(x) = 2^{-n(x)} > 0$ by [L5], and let a real $\rho > 0$ be given. By [L9] the interval $(u,v) \subseteq N_\rho(x)\cap[0,1]$ is nonempty with $u < v$, hence is a nondegenerate interval, so by [L4] it is not contained in $E$: there is $y \in (u,v)$ with $y \notin E$, and then $h(y) = 0$ and $|h(x)-h(y)| = 2^{-n(x)}$. So the continuity condition fails at $x$ for $\varepsilon := 2^{-n(x)}$. [step 1.1, L4, L5, L9]

2.3 **$h$ is continuous at every point of $[0,1]\setminus E$.** Let $x \in [0,1]$ with $x \notin E$, so $h(x) = 0$, and let a real $\varepsilon > 0$ be given. By [L7] fix a natural $N \ge 1$ with $2^{-N} \le 1/\iota(N) < \varepsilon$. For each $n \le N$ one has $x \notin F_n$, since $F_n \subseteq E$, so [L3] supplies a real $\rho_n > 0$ with $N_{\rho_n}(x) \cap F_n = \varnothing$; put $\rho := \min\{\rho_0,\dots,\rho_N\} > 0$, which exists by [L6]. [step 1.1, L3, L6, L7, L9, choose]

3.1 For $y \in [0,1]$ with $|y - x| < \rho$: if $y \notin E$ then $h(y) = 0$; and if $y \in E$ then $y \notin F_n$ for every $n \le N$ by step 2.3, so $n(y) > N$ and $h(y) = 2^{-n(y)} < 2^{-N} < \varepsilon$ by [L5] and step 2.3. In both cases $|h(y) - h(x)| = h(y) < \varepsilon$, so $h$ is continuous at $x$. [step 1.1, step 2.3, L5, L9]

4.1 By steps 2.2 and 3.1 the set of discontinuities of $h$ in $[0,1]$ is exactly $E$, which has measure zero by hypothesis; $h$ is bounded by step 2.1 and $0 < 1$, so [L8] gives that $h$ is Riemann integrable on $[0,1]$. The function $h$ constructed in step 1.1 therefore has all the stated properties. [step 2.1, step 2.2, step 3.1, given, L8, discharge-construct] ∎

## Remarks

- **Where each hypothesis on $E$ is used.** That $E$ is $F_\sigma$ is what makes the exhaustion $(F_n)$ available and hence gives continuity off $E$ in step 3.1; that $E$ is null is used twice, once through [L4] to force discontinuity **on** $E$, and once at the end through [[thm-lebesgue-criterion]]. Dropping either hypothesis breaks the example, and by [[thm-discontinuity-set-is-f-sigma]] and [[thm-lebesgue-criterion]] neither can be dropped from the conclusion either.

- **The values $2^{-n}$ are a convenience.** Any sequence of positive reals tending to $0$ would do in their place; what the proof needs is that the value at a point of $F_n \setminus (F_0 \cup \dots \cup F_{n-1})$ is small when $n$ is large, and that it is never $0$ on $E$.

- **Two familiar instances.** Taking $E$ at most countable recovers a function continuous exactly off a prescribed countable set, of which Thomae's function is the case $E = \mathbb{Q}\cap[0,1]$ in spirit though not in formula ([[ex-thomae-is-riemann-integrable-with-integral-zero]]); taking $E$ to be the Cantor set recovers a function of the type of [[ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero]], the Cantor set being closed, hence $F_\sigma$, and null.

- **No analogue holds without nullity.** The Smith-Volterra-Cantor set is closed, hence $F_\sigma$, and it is the discontinuity set of its own indicator, which is **not** integrable ([[cex-indicator-of-a-fat-cantor-set-is-not-integrable]]). So the $F_\sigma$ condition alone buys nothing.
````

## Current Wave 10 provenance determination

```json
{
  "id": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F10/Integral.pdf",
    "https://blog.richmond.edu/math320/2016/10/20/sets-of-discontinuity/"
  ],
  "rationale": "The sources give the F-sigma characterization of discontinuity sets and Lebesgue’s criterion. The item supplies a particular weighted closed-set-indicator construction for a prescribed null F-sigma set.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 10 proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-f-sigma-g-delta",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with open and closed sets as in\n[[def-open-and-closed-in-r]].\n\n- $A$ is an **$F_\\sigma$ set** when there is a sequence $(F_n)_{n \\in \\mathbb{N}}$\n  of closed subsets of $\\mathbb{R}$ with\n  $$A \\;=\\; \\bigcup_{n \\in \\mathbb{N}} F_n .$$\n- $A$ is a **$G_\\delta$ set** when there is a sequence $(V_n)_{n \\in \\mathbb{N}}$\n  of open subsets of $\\mathbb{R}$ with\n  $$A \\;=\\; \\bigcap_{n \\in \\mathbb{N}} V_n .$$\n\nThe letters are the traditional ones: $F$ for *fermé* with $\\sigma$ for *somme*,\n$G$ for *Gebiet* with $\\delta$ for *Durchschnitt*.\n\n**The two classes are exchanged by complementation.** $A$ is $F_\\sigma$ if and\nonly if $\\mathbb{R} \\setminus A$ is $G_\\delta$. If $A = \\bigcup_n F_n$ with each\n$F_n$ closed, then $\\mathbb{R} \\setminus A = \\bigcap_n (\\mathbb{R} \\setminus F_n)$\nby De Morgan, and each $\\mathbb{R} \\setminus F_n$ is open by the definition of\nclosedness ([[def-open-and-closed-in-r]]); the converse is the same computation\nread backwards, using that the complement of an open set is closed, which is\nagain [[def-open-and-closed-in-r]].\n\n**Every closed set is $F_\\sigma$ and every open set is $G_\\delta$**, by the\nconstant sequence $F_n := A$, respectively $V_n := A$. As with\n[[def-nowhere-dense-meager]], an at most countable family ([[def-countable]]) may\nalways be presented as a sequence: a finite list $F_0, \\dots, F_m$ of closed sets\nis extended by $F_n := F_m$ for $n > m$, and a finite list of open sets likewise,\nso nothing is lost by indexing over $\\mathbb{N}$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],\n[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and\n$\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],\n[[def-nat-order]]).\n\nA **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write\n$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or\n$(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is\nthe subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$.\n\nLet $(x_k)$ be a sequence of reals and let $P$ be a property of indices.\n\n- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for\n  every $k \\in \\mathbb{N}$; it is **unbounded** otherwise.\n- $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds\n  for every $k \\ge K$.\n- $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some\n  $k \\ge K$ for which $P(k)$ holds.\n- For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence\n  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is\n  again a sequence of reals.\n- A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if\n  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$\n  along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$;\n  it is again a sequence of reals.\n\n**Convergence and Cauchyness are not defined here.** They are already fixed, for\nsequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to\n$x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is\n$K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$\nis *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$\nwith $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the\ntoolkit for those two notions and does not restate them. A sequence\n**converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-well-ordering-principle",
      "source_section": "Statement",
      "quote": "Every nonempty subset $S \\subseteq \\mathbb{N}$ has a least element: there is $\\ell \\in S$ with $\\ell \\le s$ for all $s \\in S$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "Let $U, F \\subseteq \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]].\n\n- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$\n  with $N_\\varepsilon(x) \\subseteq U$.\n- $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open.\n- A set is **clopen** when it is both open and closed.\n\nThe whole of the topology of $\\mathbb{R}$ developed on this page rests on this\none definition: closedness is *defined* as openness of the complement, and every\nother description of a closed set on this page is a theorem\n([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).\n\n**$\\varnothing$ and $\\mathbb{R}$ are clopen.** The condition defining openness\nquantifies over the elements of the set, so it holds vacuously for\n$\\varnothing$; and for $x \\in \\mathbb{R}$ one has $N_1(x) \\subseteq \\mathbb{R}$,\nso $\\mathbb{R}$ is open. Since each of the two is the complement of the other,\neach is also closed.\n\n**Every neighbourhood is open.** Let $y \\in N_\\varepsilon(x)$ and put\n$\\delta := \\varepsilon - |y - x|$, which is $> 0$ because\n$y \\in N_\\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives\n$N_\\delta(y) \\subseteq N_\\varepsilon(x)$. So every point of $N_\\varepsilon(x)$\nhas a neighbourhood inside it.\n\n**The four open forms of [[def-interval]] are open sets.** Let $a, b \\in\n\\mathbb{R}$.\n\n- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so\n  $\\delta := \\min\\{x - a,\\ b - x\\}$ is a positive real (the minimum of a\n  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).\n  If $|y - x| < \\delta$ then $y > x - \\delta \\ge x - (x - a) = a$ and\n  $y < x + \\delta \\le x + (b - x) = b$, so $y \\in (a,b)$; hence\n  $N_\\delta(x) \\subseteq (a,b)$.\n- $(a,\\infty)$: for $x > a$ take $\\delta := x - a > 0$; then $|y - x| < \\delta$\n  gives $y > x - \\delta = a$.\n- $(-\\infty,b)$: for $x < b$ take $\\delta := b - x > 0$; then $|y - x| < \\delta$\n  gives $y < x + \\delta = b$.\n- $(-\\infty,\\infty) = \\mathbb{R}$: already treated above.\n\n**The four closed forms of [[def-interval]] are closed sets.** In each case the\ncomplement is shown open directly.\n\n- $[a,b]$: if $x \\notin [a,b]$ then $x < a$ or $x > b$ by trichotomy\n  ([[def-ordered-field]]). If $x < a$, take $\\delta := a - x > 0$; every\n  $y \\in N_\\delta(x)$ has $y < x + \\delta = a$, hence $y \\notin [a,b]$. If\n  $x > b$, take $\\delta := x - b > 0$; every $y \\in N_\\delta(x)$ has\n  $y > x - \\delta = b$, hence $y \\notin [a,b]$. So\n  $\\mathbb{R} \\setminus [a,b]$ is open.\n- $[a,\\infty)$: its complement is $(-\\infty,a)$, which is open by the previous\n  paragraph.\n- $(-\\infty,b]$: its complement is $(b,\\infty)$, which is open.\n- $(-\\infty,\\infty) = \\mathbb{R}$: its complement is $\\varnothing$, which is\n  open.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L3",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-nondegenerate-interval-is-not-null",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a \\le b$, let $(a_k)_{k \\in \\mathbb{N}}$ and\n$(b_k)_{k \\in \\mathbb{N}}$ be sequences of reals with $a_k \\le b_k$ for every\n$k$, and suppose\n\n$$[a,b] \\;\\subseteq\\; \\bigcup_{k \\in \\mathbb{N}} [a_k, b_k] .$$\n\nIf $M \\in \\mathbb{R}$ satisfies $\\sum_{k < n} (b_k - a_k) \\le M$ for every\n$n \\in \\mathbb{N}$, then\n\n$$M \\;\\ge\\; b - a .$$\n\nConsequently, if $a < b$ then **no subset of $\\mathbb{R}$ containing $[a,b]$ has\nmeasure zero** ([[def-measure-zero-and-content-zero]]); in particular none of\nthe four bounded intervals $[a,b]$, $(a,b)$, $[a,b)$, $(a,b]$ with $a < b$ has\nmeasure zero, so measure zero is not a vacuous notion.\n\nThis is the countable strengthening of\n[[lem-finite-interval-cover-total-length]], and it is what compactness is spent\non: the countable cover is enlarged to an open one at an arbitrarily small cost\nin total length, and [[thm-heine-borel-characterisation-r]] reduces it to a\nfinite cover, where the finite lemma applies.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-measure-zero-and-content-zero",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), intervals and their lengths are as in\n[[def-interval]], and a *sequence* is a function on $\\mathbb{N}$, which contains\n$0$. Let $A \\subseteq \\mathbb{R}$.\n\n- $A$ has **measure zero**, equivalently $A$ is **null**, when for every real\n  $\\varepsilon > 0$ there are sequences $(a_k)_{k \\in \\mathbb{N}}$ and\n  $(b_k)_{k \\in \\mathbb{N}}$ of reals with $a_k \\le b_k$ for every $k$, such\n  that\n  $$A \\subseteq \\bigcup_{k \\in \\mathbb{N}} [a_k, b_k] \\qquad \\text{and} \\qquad \\sum_{k=0}^{\\infty} (b_k - a_k) \\text{ converges with sum } \\le \\varepsilon .$$\n- $A$ has **content zero** when for every real $\\varepsilon > 0$ there are\n  $n \\in \\mathbb{N}$ and reals $a_0 \\le b_0, \\dots, a_n \\le b_n$ with\n  $$A \\subseteq \\bigcup_{j \\le n} [a_j, b_j] \\qquad \\text{and} \\qquad \\sum_{j=0}^{n} (b_j - a_j) \\le \\varepsilon .$$\n\nThe number $b_k - a_k \\ge 0$ is the length of $[a_k,b_k]$ ([[def-interval]]), and\nthe sums are the series and the finite sums of [[def-series]] and\n[[def-finite-sum]].\n\n**Working form: only the partial sums have to be checked.** All the terms\n$b_k - a_k$ are $\\ge 0$, so by claim 2 of\n[[thm-nonnegative-series-bounded-partial-sums]] the series converges exactly when\nits partial sums are bounded above, and its sum is then their supremum.\nConsequently, for a fixed $\\varepsilon > 0$,\n\n$$\\sum_{k=0}^{\\infty}(b_k - a_k) \\text{ converges with sum} \\le \\varepsilon \\quad \\Longleftrightarrow \\quad \\sum_{k<n} (b_k - a_k) \\le \\varepsilon \\ \\text{ for every } n \\in \\mathbb{N},$$\n\nsince a supremum is $\\le \\varepsilon$ exactly when $\\varepsilon$ is an upper\nbound of the set it is the supremum of ([[def-complete-ordered-field]]). Every\nverification of nullity below checks the right-hand condition.\n\n**Closed intervals lose nothing.** A bounded interval with endpoints\n$a \\le b$ is contained in $[a,b]$ and has the same length ([[def-interval]]), so\na cover by intervals of any of the four bounded forms yields a cover by closed\nintervals with the same lengths. The definition is therefore stated with closed\nintervals once and for all. Covers by *open* intervals are a genuinely different\ndemand, and passing to one costs a little extra length: the enlargement\n$[a_k,b_k] \\subseteq (a_k - \\delta_k,\\ b_k + \\delta_k)$ is carried out where it is\nneeded, in [[lem-nondegenerate-interval-is-not-null]] and in\n[[thm-compact-null-is-content-zero]].\n\n**Both notions are inherited by subsets.** If $B \\subseteq A$ and $A$ is null,\nthen any cover of $A$ covers $B$, so $B$ is null; the same sentence with finite\ncovers shows a subset of a set of content zero has content zero.\n\n**A finite cover is a countable cover, so content zero implies measure zero.**\nPadding the list $[a_0,b_0], \\dots, [a_n,b_n]$ with the degenerate intervals\n$[0,0]$ for $k > n$ leaves the total length unchanged, by the splitting law for\nfinite sums ([[lem-finite-sum-laws]]). This is recorded as a lemma with its\nproof, [[lem-content-zero-implies-null]], because it is cited on its own.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field\n([[def-ordered-field]], [[def-field]]).\n\n**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to\nthe set $\\mathbb{R}$, the starting element $1$ and the function\n$f(x) = x \\cdot a$, there is a unique function $\\mathbb{N} \\to \\mathbb{R}$,\nwritten $n \\mapsto a^n$, with\n\n$$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a \\quad (n \\in \\mathbb{N}).$$\n\nThus $a^1 = a$, $a^2 = a \\cdot a$, and so on. Note that this is defined for\n**every** $a$, including $a = 0$.\n\n**Negative exponents.** If $a \\ne 0$ and $n \\in \\mathbb{N}$ with $n \\ge 1$, set\n\n$$a^{-n} := (a^n)^{-1}.$$\n\n**Why that is legitimate.** The right-hand side presupposes that $a^n$ is\ninvertible, that is, that $a^n \\ne 0$. This is a proof obligation and not an\nobservation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \\ne 0$\nin a field, $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, proved there by induction on\n$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).\nThat lemma is a statement *about* the operation introduced here, so it depends on\nthis definition and is recorded in this item's `justified_by` rather than in its\n`deps` (SCHEMA §3). Given $a^n \\ne 0$, the value $(a^n)^{-1}$ is a single\nwell-determined element, because multiplicative inverses in a field are unique\n([[lem-of-inverse-unique]]).\n\n**Integer exponents.** Every integer $m$ ([[def-integers]]) is either\n$\\iota(n)$ or $-\\iota(n)$ for a unique natural $n$, where $\\iota$ is the\nembedding $\\mathbb{N} \\to \\mathbb{Z}$ ([[lem-nat-embeds-int]],\n[[def-int-operations]]). This too is a citation and not a slogan: the order on\n$\\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \\ge 0$ or $m < 0$; the\nimage of $\\iota$ is exactly the set of nonnegative integers, and each of them is\n$\\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then\n$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),\nso $-m = \\iota(n)$ and $m = -\\iota(n)$, with $n$ unique because $\\iota$ is\ninjective. The two clauses above therefore define $a^m$ for every\n$m \\in \\mathbb{Z}$ whenever $a \\ne 0$, and for every $m \\in \\mathbb{N}$ for\narbitrary $a$. The clauses are consistent where they overlap: the only overlap is\n$m = 0$, where $-\\iota(0) = \\iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-power-monotone",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let\n$a, b \\in \\mathbb{R}$ and let $n \\in \\mathbb{N}$, with powers as in\n[[def-integer-power]].\n\n1. **Signs.** If $a \\ge 0$ then $a^n \\ge 0$, and if $a > 0$ then $a^n > 0$.\n2. **Strict monotonicity in the base.** If $0 \\le a < b$ and $n \\ge 1$ then $a^n < b^n$. Consequently, for $a, b \\ge 0$ and $n \\ge 1$: $a < b \\iff a^n < b^n$ and $a \\le b \\iff a^n \\le b^n$, and $x \\mapsto x^n$ is injective on $\\{x \\in \\mathbb{R} : x \\ge 0\\}$.\n3. **Comparison with the base.** If $a \\ge 1$ and $n \\ge 1$ then $a^n \\ge a \\ge 1$; if $a > 1$ and $n \\ge 1$ then $a^n \\ge a > 1$; and if $0 \\le a \\le 1$ then $a^n \\le 1$.\n4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the\nset $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]).\n\nWhat is proved below is exactly the displayed statement, by induction on $n$.\n\nThe usual reading, that *every nonempty finite subset of $\\mathbb{R}$ has a\nmaximum and a minimum*, follows once one identifies the nonempty finite subsets\nof $\\mathbb{R}$ with the sets listable as $\\{a_0, \\dots, a_n\\}$. That\nidentification is recorded as a stipulation in the Given below, because this page\nhas no definition of finiteness to prove it against. **It is discharged, not\nmerely assumed**: [[lem-finite-subsets-listable]] proves that the two\ndescriptions of a nonempty finite subset of $\\mathbb{R}$ agree. That lemma is\nrecorded in `justified_by` rather than in `deps`, since it is about the sets this\nlemma quantifies over and therefore depends on this one. This is what licenses\nthe notation\n$\\max\\{a_1, \\dots, a_n\\}$ and $\\min\\{a_1, \\dots, a_n\\}$ for finite sets of\n**real** numbers from this page onwards.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L6",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$.\n\n- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.\n\nA set has at most one maximum: if $m_1$ and $m_2$ are both maxima then\n$m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so\n$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy\naxiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).\nThe same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L7",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L7",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):\n\n$$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$\n\n$\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written\n$n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times.\n\n**Why the notation is needed at all.** A natural number in this library is a von\nNeumann natural, that is a set ([[def-natural-numbers]]), and a set is not an\nelement of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when\n$n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and\n$x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field,\nand writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an\ninformal text would write $1/(k+1)$.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-power-monotone",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let\n$a, b \\in \\mathbb{R}$ and let $n \\in \\mathbb{N}$, with powers as in\n[[def-integer-power]].\n\n1. **Signs.** If $a \\ge 0$ then $a^n \\ge 0$, and if $a > 0$ then $a^n > 0$.\n2. **Strict monotonicity in the base.** If $0 \\le a < b$ and $n \\ge 1$ then $a^n < b^n$. Consequently, for $a, b \\ge 0$ and $n \\ge 1$: $a < b \\iff a^n < b^n$ and $a \\le b \\iff a^n \\le b^n$, and $x \\mapsto x^n$ is injective on $\\{x \\in \\mathbb{R} : x \\ge 0\\}$.\n3. **Comparison with the base.** If $a \\ge 1$ and $n \\ge 1$ then $a^n \\ge a \\ge 1$; if $a > 1$ and $n \\ge 1$ then $a^n \\ge a > 1$; and if $0 \\le a \\le 1$ then $a^n \\le 1$.\n4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-lebesgue-criterion",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]) and let\n\n$$D \\;:=\\; \\{\\, x \\in [a,b] \\ : \\ f \\text{ is discontinuous at } x \\,\\}$$\n\n([[def-continuity-real]], [[def-classification-of-discontinuities]]). Then\n\n$$f \\text{ is Riemann integrable on } [a,b] \\quad \\Longleftrightarrow \\quad D \\text{ has measure zero}$$\n\n([[def-darboux-integral]], [[def-measure-zero-and-content-zero]]).\n\n**The choice cost, named.** The implication from integrability to $D$ being null\nuses the Axiom of Countable Choice ([[def-countable-choice]]) exactly once,\nthrough [[thm-countable-union-of-null-is-null]] at step 7.1: $D$ is exhibited as\nthe union of a sequence of null sets. The converse implication, from $D$ null to\nintegrability, is a theorem of ZF: it uses no choice principle at all.\n\n**\"Measure zero\" here is the cover condition of\n[[def-measure-zero-and-content-zero]]**, namely that for every $\\varepsilon > 0$\nthere is a sequence of intervals covering $D$ of total length at most\n$\\varepsilon$. No outer measure, no measurable set and no Lebesgue integral is\nused or needed; the criterion is a statement about interval covers throughout.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field\n([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it.\n\nThe notions **upper bound** and **bounded above** are already fixed by\n[[def-complete-ordered-field]] and are only recalled here, never redefined:\n$u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and\n$S$ is *bounded above* if it has at least one upper bound. The dual notions are:\n\n- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-darboux-integral",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]). Write $\\mathcal{P}$ for the set of all partitions of\n$[a,b]$ ([[def-partition-and-refinement]]) and put\n\n$$\\mathcal{L} \\;:=\\; \\{\\, L(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}, \\qquad \\mathcal{U} \\;:=\\; \\{\\, U(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}$$\n\nfor the sets of lower and of upper Darboux sums ([[def-darboux-sums]]).\n\n### Both extrema exist\n\n**$\\mathcal{P}$ is nonempty**: the pair $(1, t)$ with $t_0 := a$ and $t_k := b$\nfor $k \\ge 1$ is a partition of $[a,b]$, since $a < b$. So $\\mathcal{L}$ and\n$\\mathcal{U}$ are nonempty.\n\n**$\\mathcal{L}$ is bounded above and $\\mathcal{U}$ is bounded below.** Fix any\n$Q \\in \\mathcal{P}$. By claim 2 of [[lem-refinement-inequalities]],\n$L(f,P) \\le U(f,Q)$ for every $P \\in \\mathcal{P}$, so $U(f,Q)$ is an upper bound\nof $\\mathcal{L}$; and $L(f,Q) \\le U(f,P)$ for every $P$, so $L(f,Q)$ is a lower\nbound of $\\mathcal{U}$.\n\nHence a nonempty set bounded above has a supremum\n([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum\n([[thm-infimum-property]], [[def-infimum]]), each unique ([[lem-sup-unique]]).\nThe **lower** and **upper Darboux integrals** of $f$ over $[a,b]$ are the real\nnumbers\n\n$$\\underline{\\int_a^b} f \\;:=\\; \\sup \\mathcal{L} \\;=\\; \\sup_{P} L(f,P), \\qquad \\overline{\\int_a^b} f \\;:=\\; \\inf \\mathcal{U} \\;=\\; \\inf_{P} U(f,P) .$$\n\n### The lower integral never exceeds the upper one\n\n$$\\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f .$$\n\nIndeed, for each fixed $Q \\in \\mathcal{P}$ the number $U(f,Q)$ is an upper bound\nof $\\mathcal{L}$, so the least upper bound satisfies\n$\\underline{\\int_a^b} f \\le U(f,Q)$. As $Q$ was arbitrary, $\\underline{\\int_a^b}f$\nis a lower bound of $\\mathcal{U}$, and the greatest lower bound satisfies\n$\\underline{\\int_a^b} f \\le \\overline{\\int_a^b} f$ ([[def-infimum]]).\n\nMoreover, for **every** partition $P$,\n\n$$L(f,P) \\;\\le\\; \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f \\;\\le\\; U(f,P) ,$$\n\nthe outer inequalities because a member of a set is at most its supremum and at\nleast its infimum.\n\n### Integrability\n\n$f$ is **Darboux integrable on $[a,b]$**, and on this page simply\n**integrable**, when\n\n$$\\underline{\\int_a^b} f \\;=\\; \\overline{\\int_a^b} f ,$$\n\nand then the common value is written\n\n$$\\int_a^b f \\qquad \\text{or} \\qquad \\int_a^b f(x)\\,\\mathrm{d}x ,$$\n\nthe **integral of $f$ over $[a,b]$**. It is a single well-determined real\nnumber, being the common value of two numbers each of which is unique\n([[lem-sup-unique]]). Without the displayed equality the symbol $\\int_a^b f$ is\nnot defined and is never written.\n\n**The inequality above is the whole difficulty.** By the previous paragraph\nintegrability is *never* a question of one integral exceeding the other, only of\nthe gap $\\overline{\\int_a^b} f - \\underline{\\int_a^b} f \\ge 0$ being $0$; and by\n[[thm-riemann-criterion]] that gap is $0$ exactly when a single partition can be\nfound making $U(f,P) - L(f,P)$ small. Whether that is possible is settled\ncompletely, in terms of the discontinuities of $f$, by\n[[thm-lebesgue-criterion]].\n\n**\"Riemann integrable\" means the same thing here.** The definition above is\nDarboux's. Riemann's own definition, in terms of tagged partitions of small\nmesh, is [[def-tagged-partition-and-riemann-sum]], and the two define the same\nclass of functions with the same integral by [[thm-darboux-equals-riemann]].\nUntil that theorem is proved the two phrases are kept apart; after it they are\nused interchangeably, as they are throughout the literature.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "2.2",
        "2.3",
        "3.1"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "2.2",
        "2.3",
        "3.1"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "2.2",
        "2.3",
        "3.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$.\n\n- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.\n\nA set has at most one maximum: if $m_1$ and $m_2$ are both maxima then\n$m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so\n$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy\naxiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).\nThe same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "uses": [
        "2.2",
        "2.3",
        "3.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "2.2",
        "2.3",
        "3.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "2.2",
        "2.3",
        "3.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "2.2",
        "2.3",
        "3.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "2.2",
        "2.3",
        "3.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-interior-closure-boundary-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with open and closed sets as in\n[[def-open-and-closed-in-r]].\n\n- The **interior** of $A$ is the union of all open subsets of $A$:\n  $$A^{\\circ} \\;:=\\; \\bigcup \\{\\, U \\subseteq \\mathbb{R} : U \\text{ open and } U \\subseteq A \\,\\}.$$\n- The **closure** of $A$ is the intersection of all closed supersets of $A$:\n  $$\\overline{A} \\;:=\\; \\bigcap \\{\\, F \\subseteq \\mathbb{R} : F \\text{ closed and } A \\subseteq F \\,\\}.$$\n- The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus A^{\\circ}$.\n- The **exterior** of $A$ is $\\operatorname{ext} A := (\\mathbb{R} \\setminus A)^{\\circ}$.\n\n**Both operators are well defined and deliver what their names claim.** The\nfamily whose union defines $A^{\\circ}$ always contains $\\varnothing$, and the\nfamily whose intersection defines $\\overline{A}$ always contains $\\mathbb{R}$,\nso the second family is nonempty and both expressions denote subsets of\n$\\mathbb{R}$ without appeal to any convention about empty unions or\nintersections. Moreover:\n\n- $A^{\\circ}$ is **open**, being a union of open sets\n  ([[thm-open-set-algebra-r]], claim 1), and $A^{\\circ} \\subseteq A$, since\n  every set in the family is a subset of $A$. It is therefore the **largest**\n  open subset of $A$: any open $U \\subseteq A$ is a member of the family and so\n  $U \\subseteq A^{\\circ}$.\n- $\\overline{A}$ is **closed**, being an intersection of a nonempty family of\n  closed sets ([[thm-open-set-algebra-r]], claim 3), and $A \\subseteq\n  \\overline{A}$, since every set in the family contains $A$. It is therefore the\n  **smallest** closed superset of $A$: any closed $F \\supseteq A$ is a member of\n  the family and so $\\overline{A} \\subseteq F$.\n\n**Pointwise description of the interior.** For $x \\in \\mathbb{R}$,\n\n$$x \\in A^{\\circ} \\iff \\text{there is } \\varepsilon > 0 \\text{ with } N_\\varepsilon(x) \\subseteq A .$$\n\nIf $x \\in A^{\\circ}$ then, $A^{\\circ}$ being open and containing $x$, there is\n$\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq A^{\\circ} \\subseteq A$.\nConversely if $N_\\varepsilon(x) \\subseteq A$ then $N_\\varepsilon(x)$ is an open\nsubset of $A$ ([[def-open-and-closed-in-r]]) containing $x$, hence\n$x \\in N_\\varepsilon(x) \\subseteq A^{\\circ}$ ([[def-neighbourhood-r]]).\n\nThe corresponding pointwise description of the closure is not a definitional\nmatter and is proved separately, as [[thm-closure-characterisations-r]].",
      "uses": [
        "2.2",
        "2.3",
        "3.1"
      ]
    },
    {
      "fact": "L9",
      "source": "thm-closure-characterisations-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with closure $\\overline{A}$ as in\n[[def-interior-closure-boundary-r]] and derived set $A'$ as in\n[[def-limit-point-r]]. Write\n\n$$E \\;:=\\; \\{\\, x \\in \\mathbb{R} : N_\\varepsilon(x) \\cap A \\ne \\varnothing \\text{ for every real } \\varepsilon > 0 \\,\\}$$\n\nfor the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then:\n\n1. $\\overline{A} = E$.\n2. $\\overline{A} = A \\cup A'$.\n3. $\\overline{A}$ is the smallest closed superset of $A$: it is closed, it\n   contains $A$, and it is contained in every closed $F$ with $A \\subseteq F$.\n4. $A$ is closed if and only if $A = \\overline{A}$, if and only if\n   $A' \\subseteq A$.\n\nClaim 3 is the content of the definition of $\\overline{A}$ and is restated here\nso that the four descriptions stand together; claims 1, 2 and 4 are the ones\nthat carry work.",
      "uses": [
        "2.2",
        "2.3",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set-step-1-1",
      "claim": "Fix the sequence $(F_n)$ of [L1] and define $n(x) := \\min\\{\\, n \\in \\mathbb{N} : x \\in F_n \\,\\}$ for $x \\in E$, which exists by [L2] since the set is a nonempty subset of $\\mathbb{N}$; define $h : [0,1] \\to \\mathbb{R}$ by $h(x) := 2^{-n(x)}$ for $x \\in E$ and $h(x) := 0$ otherwise. [given, L1, L2, L5, construct]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "L5"
      ]
    },
    {
      "id": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set-step-2-1",
      "claim": "$h$ is bounded with values in $[0,1]$: $0 < 2^{-n(x)} \\le 2^{0} = 1$ for $x \\in E$ by [L5], and $h = 0$ off $E$. [step 1.1, L5]",
      "step": "2.1",
      "inputs": [
        "L5",
        "1.1"
      ]
    },
    {
      "id": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set-step-2-2",
      "claim": "**$h$ is discontinuous at every point of $E$.** Let $x \\in E$, so $h(x) = 2^{-n(x)} > 0$ by [L5], and let a real $\\rho > 0$ be given. By [L9] the interval $(u,v) \\subseteq N_\\rho(x)\\cap[0,1]$ is nonempty with $u < v$, hence is a nondegenerate interval, so by [L4] it is not contained in $E$: there is $y \\in (u,v)$ with $y \\notin E$, and then $h(y) = 0$ and $|h(x)-h(y)| = 2^{-n(x)}$. So the continuity condition fails at $x$ for $\\varepsilon := 2^{-n(x)}$. [step 1.1, L4, L5, L9]",
      "step": "2.2",
      "inputs": [
        "L5",
        "L9",
        "L4",
        "1.1"
      ]
    },
    {
      "id": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set-step-2-3",
      "claim": "**$h$ is continuous at every point of $[0,1]\\setminus E$.** Let $x \\in [0,1]$ with $x \\notin E$, so $h(x) = 0$, and let a real $\\varepsilon > 0$ be given. By [L7] fix a natural $N \\ge 1$ with $2^{-N} \\le 1/\\iota(N) < \\varepsilon$. For each $n \\le N$ one has $x \\notin F_n$, since $F_n \\subseteq E$, so [L3] supplies a real $\\rho_n > 0$ with $N_{\\rho_n}(x) \\cap F_n = \\varnothing$; put $\\rho := \\min\\{\\rho_0,\\dots,\\rho_N\\} > 0$, which exists by [L6]. [step 1.1, L3, L6, L7, L9, choose]",
      "step": "2.3",
      "inputs": [
        "L7",
        "L3",
        "L6",
        "1.1",
        "L9"
      ]
    },
    {
      "id": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set-step-3-1",
      "claim": "For $y \\in [0,1]$ with $|y - x| < \\rho$: if $y \\notin E$ then $h(y) = 0$; and if $y \\in E$ then $y \\notin F_n$ for every $n \\le N$ by step 2.3, so $n(y) > N$ and $h(y) = 2^{-n(y)} < 2^{-N} < \\varepsilon$ by [L5] and step 2.3. In both cases $|h(y) - h(x)| = h(y) < \\varepsilon$, so $h$ is continuous at $x$. [step 1.1, step 2.3, L5, L9]",
      "step": "3.1",
      "inputs": [
        "2.3",
        "L5",
        "1.1",
        "L9"
      ]
    },
    {
      "id": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set-step-4-1",
      "claim": "By steps 2.2 and 3.1 the set of discontinuities of $h$ in $[0,1]$ is exactly $E$, which has measure zero by hypothesis; $h$ is bounded by step 2.1 and $0 < 1$, so [L8] gives that $h$ is Riemann integrable on $[0,1]$. The function $h$ constructed in step 1.1 therefore has all the stated properties. [step 2.1, step 2.2, step 3.1, given, L8, discharge-construct] ∎",
      "step": "4.1",
      "inputs": [
        "2.2",
        "3.1",
        "2.1",
        "L8",
        "1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The example fixes concrete points/functions and has no empty family or empty-domain branch."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.1 explicitly includes the zero-valued, vanishing, or zero-index case."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.1 explicitly includes the unit, singleton, or first-index case."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Example explicitly fixes a nondegenerate interval or assumes strict endpoint order."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 1.1 explicitly keeps endpoints/interior points within the stated relative-domain convention."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 supplies each displayed witness by formula or by the cited existence premise before using it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The stated result is not a biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The stated result is not a biconditional."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "thm-lebesgue-criterion",
    "declared_target": "thm-lebesgue-criterion",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "def-f-sigma-g-delta",
    "declared_target": "def-f-sigma-g-delta",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "def-measure-zero-and-content-zero",
    "declared_target": "def-measure-zero-and-content-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "lem-nondegenerate-interval-is-not-null",
    "declared_target": "lem-nondegenerate-interval-is-not-null",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "def-classification-of-discontinuities",
    "declared_target": "def-classification-of-discontinuities",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "def-interior-closure-boundary-r",
    "declared_target": "def-interior-closure-boundary-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "thm-closure-characterisations-r",
    "declared_target": "thm-closure-characterisations-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "lem-power-monotone",
    "declared_target": "lem-power-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "thm-well-ordering-principle",
    "declared_target": "thm-well-ordering-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "def-darboux-integral",
    "declared_target": "def-darboux-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
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
    "source": "ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set",
    "sourcePage": "the-riemann-integral-examples",
    "batch": "wave10-real-analysis",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (32)

### `cex-indicator-of-a-fat-cantor-set-is-not-integrable`

````markdown
---
id: cex-indicator-of-a-fat-cantor-set-is-not-integrable
kind: counterexample
title: "The indicator of the Smith-Volterra-Cantor set is discontinuous exactly on a nowhere dense set, and is not Riemann integrable, because that set does not have measure zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set, thm-lebesgue-criterion, def-fat-cantor-set, thm-fat-cantor-set-has-positive-measure, def-nowhere-dense-meager, def-interior-closure-boundary-r, def-measure-zero-and-content-zero, def-continuity-real, def-classification-of-discontinuities, def-open-and-closed-in-r, def-neighbourhood-r, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-interval, def-bounded-set, def-infimum, def-max-min, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "fat Cantor indicator not integrable"
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
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "MAT425 Lecture Notes (Princeton University)"
      url: "https://web.math.princeton.edu/~js129/PDFs/teaching/MAT425_spring_2025/MAT425_Lecture_Notes.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted:** that a bounded function on $[a,b]$ is Riemann integrable whenever
its set of discontinuities is nowhere dense
([[fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set]],
[[def-nowhere-dense-meager]]).

The witness is the indicator $g$ of the Smith-Volterra-Cantor set
$S \subseteq [0,1]$ ([[def-fat-cantor-set]]). Its set of discontinuities is
exactly $S$, which is closed, nowhere dense and **not** of measure zero
([[thm-fat-cantor-set-has-positive-measure]]); and $g$ is not Riemann integrable,
with

$$\underline{\int_0^1} g \;=\; 0, \qquad \overline{\int_0^1} g \;\ge\; \tfrac12 .$$

**The contrast with the Cantor set is the whole point.** The Cantor set is also
closed and nowhere dense, and its indicator **is** integrable, with integral $0$
([[ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero]]). The two
sets differ only in measure, and that is what decides
([[thm-lebesgue-criterion]]).

The proof below is direct, from claim 4 of
[[thm-fat-cantor-set-has-positive-measure]]; it does not go through the forward
half of [[thm-lebesgue-criterion]] and so **uses no choice principle**.

## Facts & Assumptions

**Given:** The Smith-Volterra-Cantor set $S \subseteq [0,1]$ and its indicator $g : [0,1] \to \mathbb{R}$, with $g(x) = 1$ for $x \in S$ and $g(x) = 0$ otherwise.

[A1] The refuted claim: a bounded function on a closed bounded interval with distinct endpoints whose set of discontinuities is nowhere dense is Riemann integrable.

[L1] $S$ is closed, bounded and nowhere dense, so $S$ contains no nonempty open set; and if $(a_k)$, $(b_k)$ are sequences of reals with $a_k \le b_k$, $S \subseteq \bigcup_k[a_k,b_k]$ and $\sum_{k<i}(b_k-a_k) \le M$ for every $i \in \mathbb{N}$, then $M \ge 2^{-1}$ ([[thm-fat-cantor-set-has-positive-measure]], [[def-fat-cantor-set]], [[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[def-measure-zero-and-content-zero]]).

[L2] A set is closed exactly when every point outside it has a neighbourhood missing it ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] For a partition $P = (n,t)$ of $[0,1]$: $n \ge 1$, $t_i < t_{i+1}$, $\Delta_i > 0$, $I_i = [t_i,t_{i+1}]$, $[0,1] = \bigcup_{i<n}I_i$, and $(t_i,t_{i+1})$ is a nonempty open subset of $[0,1]$ ([[def-partition-and-refinement]], [[def-interval]], [[def-open-and-closed-in-r]]).

[L4] $m_i = \inf g[I_i]$, $M_i = \sup g[I_i]$, $L(g,P) = \sum_{i<n}m_i\Delta_i$, $U(g,P) = \sum_{i<n}M_i\Delta_i$; $\underline{\int_0^1}g$ is the supremum of the lower sums and $\overline{\int_0^1}g$ the infimum of the upper sums; $g$ is integrable exactly when they agree ([[def-darboux-sums]], [[def-darboux-integral]], [[def-bounded-set]]).

[L5] A set with a least element has it as its infimum and one with a greatest element has it as its supremum; an infimum of a set all of whose members are $\ge c$ is $\ge c$ ([[def-infimum]], [[def-max-min]], [[def-complete-ordered-field]]).

[L6] Finite sums: scaling, splitting, monotonicity in the terms, $\sum_{i<n}0 = 0$; and a finite list of closed intervals extends to a sequence by degenerate intervals of length $0$ without changing any partial total ([[def-finite-sum]], [[lem-finite-sum-laws]], [[def-measure-zero-and-content-zero]]).

[L7] Ordered-field arithmetic: for $0 \le x \le 1$ and a real $\rho > 0$ the reals $u := \max\{0,x-\rho\}$ and $v := \min\{1,x+\rho\}$ satisfy $u < v$ and $(u,v) \subseteq N_\rho(x)\cap[0,1]$; and $0 < 2^{-1} < 1$ ([[def-max-min]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-neighbourhood-r]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 $g$ takes only the values $0$ and $1$, so it is bounded on $[0,1]$ and its Darboux sums and integrals are defined by [L4]. [given, L4]

1.2 **Discontinuity on $S$.** Let $x \in S$, so $g(x) = 1$, and let a real $\rho > 0$ be given. By [L7] the interval $(u,v) \subseteq N_\rho(x)\cap[0,1]$ is nonempty and open, so by [L1] it contains a point $y \notin S$; then $|y-x| < \rho$, $y \in [0,1]$ and $|g(x)-g(y)| = 1$, so continuity fails at $x$ for $\varepsilon := 1$ ([[def-continuity-real]], [[def-classification-of-discontinuities]]). [given, L1, L7]

1.3 **Continuity off $S$.** Let $x \in [0,1]$ with $x \notin S$. Since $S$ is closed, [L2] gives a real $\rho > 0$ with $N_\rho(x)\cap S = \varnothing$, so $g$ vanishes on $N_\rho(x)\cap[0,1]$ and continuity holds at $x$. [given, L1, L2]

2.1 So the set of discontinuities of $g$ in $[0,1]$ is exactly $S$, which is nowhere dense by [L1]. [step 1.2, step 1.3, L1]

2.2 **Every lower sum is $0$.** Let $P = (n,t)$ be a partition of $[0,1]$ and $i < n$. By [L3] the interval $(t_i,t_{i+1})$ is a nonempty open subset of $[0,1]$, so by [L1] it contains a point outside $S$, at which $g$ takes the value $0$; as $g \ge 0$, that value is the least element of $g[I_i]$ and $m_i = 0$ by [L5]. Hence $L(g,P) = 0$ by [L4] and [L6]. [step 1.1, L1, L3, L4, L5, L6]

2.3 **Every upper sum is at least $2^{-1}$.** With $P$ as above put $B := \{\, i < n : I_i \cap S \ne \varnothing \,\}$. For $i \in B$ the set $g[I_i]$ contains $1$, so $M_i = 1$ by [L5]; for $i \notin B$ one has $g[I_i] = \{0\}$ and $M_i = 0$. Hence $U(g,P)$ is the sum of the $\Delta_i$ with $i \in B$, by [L4] and [L6]. [step 1.1, L4, L5, L6]

3.1 The intervals $I_i$ with $i \in B$ cover $S$, since $S \subseteq [0,1] = \bigcup_{i<n}I_i$ by [L3]. Extending that finite list to a sequence by degenerate intervals $[0,0]$ ([L6]) gives a cover of $S$ all of whose partial total lengths are at most $U(g,P)$, so [L1] gives $U(g,P) \ge 2^{-1}$. [step 2.3, L1, L3, L6]

4.1 By [L5] and step 2.2, $\underline{\int_0^1}g = 0$; by [L5] and step 3.1, $\overline{\int_0^1}g \ge 2^{-1} > 0$. The two differ, so $g$ is not Riemann integrable by [L4]. [step 2.2, step 3.1, L4, L5, L7]

5.1 So $g$ is bounded on $[0,1]$, an interval with $0 < 1$, its set of discontinuities is nowhere dense by step 2.1, and it is not Riemann integrable: [A1] is refuted. [step 2.1, step 4.1, A1] ∎

## Remarks

- **Nowhere dense and null are independent, and only the second matters here.** $S$ is nowhere dense and not null; $\mathbb{Q}\cap[0,1]$ is null and dense. Thomae's function has the second as its discontinuity set and is integrable ([[ex-thomae-is-riemann-integrable-with-integral-zero]]); $g$ has the first and is not. Neither notion of smallness implies the other, and [[thm-lebesgue-criterion]] names the one that decides.

- **The constant $2^{-1}$ is what this library can state, and it is enough.** No outer measure is defined here, so "the measure of $S$ is $1/2$" is not a statement available; claim 4 of [[thm-fat-cantor-set-has-positive-measure]] gives the quantitative form actually used, that no interval cover of $S$ has total length below $2^{-1}$. The upper integral is therefore at least $2^{-1}$; whether it equals $2^{-1}$ is not asserted.

- **What the argument uses about $S$, and nothing more.** Only three properties enter: $S$ is closed, $S$ has empty interior, and no interval cover of $S$ has total length below $2^{-1}$. Any set with those three properties would serve as a witness in exactly the same way, and the argument is written so that the particular construction of [[def-fat-cantor-set]] is used only through [[thm-fat-cantor-set-has-positive-measure]].
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

### `def-f-sigma-g-delta`

````markdown
---
id: def-f-sigma-g-delta
kind: definition
title: "$F_\\sigma$ and $G_\\delta$ subsets of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-countable, thm-open-set-algebra-r]
justified_by: []
aliases: []
landmark: false
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
    - title: "Fσ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/F-sigma_set"
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G-delta_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 and Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Borel set (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Borel_set"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, with open and closed sets as in
[[def-open-and-closed-in-r]].

- $A$ is an **$F_\sigma$ set** when there is a sequence $(F_n)_{n \in \mathbb{N}}$
  of closed subsets of $\mathbb{R}$ with
  $$A \;=\; \bigcup_{n \in \mathbb{N}} F_n .$$
- $A$ is a **$G_\delta$ set** when there is a sequence $(V_n)_{n \in \mathbb{N}}$
  of open subsets of $\mathbb{R}$ with
  $$A \;=\; \bigcap_{n \in \mathbb{N}} V_n .$$

The letters are the traditional ones: $F$ for *fermé* with $\sigma$ for *somme*,
$G$ for *Gebiet* with $\delta$ for *Durchschnitt*.

**The two classes are exchanged by complementation.** $A$ is $F_\sigma$ if and
only if $\mathbb{R} \setminus A$ is $G_\delta$. If $A = \bigcup_n F_n$ with each
$F_n$ closed, then $\mathbb{R} \setminus A = \bigcap_n (\mathbb{R} \setminus F_n)$
by De Morgan, and each $\mathbb{R} \setminus F_n$ is open by the definition of
closedness ([[def-open-and-closed-in-r]]); the converse is the same computation
read backwards, using that the complement of an open set is closed, which is
again [[def-open-and-closed-in-r]].

**Every closed set is $F_\sigma$ and every open set is $G_\delta$**, by the
constant sequence $F_n := A$, respectively $V_n := A$. As with
[[def-nowhere-dense-meager]], an at most countable family ([[def-countable]]) may
always be presented as a sequence: a finite list $F_0, \dots, F_m$ of closed sets
is extended by $F_n := F_m$ for $n > m$, and a finite list of open sets likewise,
so nothing is lost by indexing over $\mathbb{N}$.

## Remarks

- **The classes are genuinely larger than the closed and the open sets.**
  $\mathbb{Q}$ is $F_\sigma$ and is neither open nor closed, and the irrationals
  are $G_\delta$ and neither open nor closed; both computations are in
  [[cor-q-is-meager-and-not-g-delta]]. That $\mathbb{Q}$ is not also $G_\delta$
  is the first genuinely hard fact about these classes and needs the Baire
  category theorem ([[thm-baire-category-r]]).

- **Why the algebra of open sets is not enough.** [[thm-open-set-algebra-r]]
  gives that a *finite* intersection of open sets is open and a *finite* union of
  closed sets is closed. The definitions above are exactly what one gets by
  relaxing "finite" to "countable" once, and the point of the whole notion is
  that the relaxation is proper: a countable intersection of open sets need not
  be open, which is [[cex-intersection-of-shrinking-intervals-not-open]].

- **Nothing here is a measure-theoretic notion.** $F_\sigma$ and $G_\delta$ are
  defined from the topology of $\mathbb{R}$ alone and are used on this page to
  say precisely how far $\mathbb{Q}$ and its complement sit from being closed or
  open. They cut across [[def-measure-zero-and-content-zero]] completely:
  $\mathbb{Q}$ is $F_\sigma$ and has measure zero
  ([[lem-countable-sets-are-null]]), while the Smith-Volterra-Cantor set is
  closed, hence $F_\sigma$, and does not
  ([[thm-fat-cantor-set-has-positive-measure]]).
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

### `def-interior-closure-boundary-r`

````markdown
---
id: def-interior-closure-boundary-r
kind: definition
title: "Interior, closure, boundary and exterior of a subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-neighbourhood-r, thm-open-set-algebra-r]
justified_by: []
aliases: []
landmark: true
short: "$A^{\\circ}$, $\\overline{A}$, $\\partial A$"
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
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, with open and closed sets as in
[[def-open-and-closed-in-r]].

- The **interior** of $A$ is the union of all open subsets of $A$:
  $$A^{\circ} \;:=\; \bigcup \{\, U \subseteq \mathbb{R} : U \text{ open and } U \subseteq A \,\}.$$
- The **closure** of $A$ is the intersection of all closed supersets of $A$:
  $$\overline{A} \;:=\; \bigcap \{\, F \subseteq \mathbb{R} : F \text{ closed and } A \subseteq F \,\}.$$
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus A^{\circ}$.
- The **exterior** of $A$ is $\operatorname{ext} A := (\mathbb{R} \setminus A)^{\circ}$.

**Both operators are well defined and deliver what their names claim.** The
family whose union defines $A^{\circ}$ always contains $\varnothing$, and the
family whose intersection defines $\overline{A}$ always contains $\mathbb{R}$,
so the second family is nonempty and both expressions denote subsets of
$\mathbb{R}$ without appeal to any convention about empty unions or
intersections. Moreover:

- $A^{\circ}$ is **open**, being a union of open sets
  ([[thm-open-set-algebra-r]], claim 1), and $A^{\circ} \subseteq A$, since
  every set in the family is a subset of $A$. It is therefore the **largest**
  open subset of $A$: any open $U \subseteq A$ is a member of the family and so
  $U \subseteq A^{\circ}$.
- $\overline{A}$ is **closed**, being an intersection of a nonempty family of
  closed sets ([[thm-open-set-algebra-r]], claim 3), and $A \subseteq
  \overline{A}$, since every set in the family contains $A$. It is therefore the
  **smallest** closed superset of $A$: any closed $F \supseteq A$ is a member of
  the family and so $\overline{A} \subseteq F$.

**Pointwise description of the interior.** For $x \in \mathbb{R}$,

$$x \in A^{\circ} \iff \text{there is } \varepsilon > 0 \text{ with } N_\varepsilon(x) \subseteq A .$$

If $x \in A^{\circ}$ then, $A^{\circ}$ being open and containing $x$, there is
$\varepsilon > 0$ with $N_\varepsilon(x) \subseteq A^{\circ} \subseteq A$.
Conversely if $N_\varepsilon(x) \subseteq A$ then $N_\varepsilon(x)$ is an open
subset of $A$ ([[def-open-and-closed-in-r]]) containing $x$, hence
$x \in N_\varepsilon(x) \subseteq A^{\circ}$ ([[def-neighbourhood-r]]).

The corresponding pointwise description of the closure is not a definitional
matter and is proved separately, as [[thm-closure-characterisations-r]].

## Remarks

- **The four sets partition nothing by themselves, but three of them do.** For
  every $A$ the three sets $A^{\circ}$, $\partial A$ and $\operatorname{ext} A$
  are pairwise disjoint with union $\mathbb{R}$. This is not proved here and is
  not used on this page; what is used is only the definitions above and the
  characterisations of [[thm-closure-characterisations-r]].

- **Interior and closure are dual.** Complementation exchanges the two families
  above, since $U$ is open exactly when $\mathbb{R} \setminus U$ is closed, so
  $\mathbb{R} \setminus A^{\circ} = \overline{\mathbb{R} \setminus A}$ and
  $\mathbb{R} \setminus \overline{A} = (\mathbb{R} \setminus A)^{\circ} =
  \operatorname{ext} A$. The second identity is the reason the exterior is
  usually described as "the complement of the closure".

- **$A$ is open exactly when $A = A^{\circ}$, and closed exactly when
  $A = \overline{A}$.** For the first: $A^{\circ} \subseteq A$ always, and
  $A \subseteq A^{\circ}$ holds exactly when $A$ is one of the open subsets of
  $A$, that is, exactly when $A$ is open. The closure half is the same argument
  read the other way, and it is recorded as a claim of
  [[thm-closure-characterisations-r]] because the rest of that theorem needs it.

- **Boundary points may or may not belong to the set.** $\partial (0,1) =
  \partial [0,1] = \{0,1\}$, and the two boundary points lie outside the first
  set and inside the second; the boundary sees only the way the set meets its
  complement, not which side the edge is assigned to.
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

### `ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero`

````markdown
---
id: ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero
kind: example
title: "The indicator of the Cantor set is discontinuous exactly on the Cantor set, which is null, so it is Riemann integrable with integral $0$ even though it is discontinuous at uncountably many points"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lebesgue-criterion, def-cantor-set, thm-cantor-set-properties, def-measure-zero-and-content-zero, def-nowhere-dense-meager, def-interior-closure-boundary-r, def-continuity-real, def-classification-of-discontinuities, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-countable, def-interval, def-open-and-closed-in-r, def-neighbourhood-r, def-bounded-set, def-infimum, def-max-min, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "$\\int_0^1 \\mathbf{1}_C = 0$"
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
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "MAT425 Lecture Notes (Princeton University)"
      url: "https://web.math.princeton.edu/~js129/PDFs/teaching/MAT425_spring_2025/MAT425_Lecture_Notes.pdf"
pipeline_run: null
---

## Example

Let $C \subseteq [0,1]$ be the Cantor middle-thirds set ([[def-cantor-set]]) and
let $\mathbf{1}_C : [0,1] \to \mathbb{R}$ be its indicator, $\mathbf{1}_C(x) = 1$
for $x \in C$ and $\mathbf{1}_C(x) = 0$ otherwise. Then:

1. $\mathbf{1}_C$ is discontinuous at every point of $C$ and continuous at every
   point of $[0,1] \setminus C$, so its set of discontinuities is **exactly** $C$
   ([[def-continuity-real]], [[def-classification-of-discontinuities]]);
2. $\mathbf{1}_C$ is Riemann integrable on $[0,1]$, because $C$ has measure zero
   ([[thm-cantor-set-properties]], [[thm-lebesgue-criterion]]);
3. $\int_0^1 \mathbf{1}_C = 0$.

**The point of the example is claim 2 against claim 1.** The discontinuity set is
uncountable ([[thm-cantor-set-properties]], [[def-countable]]), so no
cardinality argument such as [[cor-countably-many-discontinuities-integrable]]
applies; what makes the function integrable is that $C$ can be covered by
intervals of arbitrarily small total length, and nothing else.

Only the implication "measure zero $\Rightarrow$ integrable" of
[[thm-lebesgue-criterion]] is used, so **no choice principle is involved**.

## Facts & Assumptions

**Given:** The Cantor set $C \subseteq [0,1]$ and its indicator $\mathbf{1}_C : [0,1] \to \mathbb{R}$.

[L1] $C$ is closed and bounded, has measure zero, is uncountable, and contains no interval with two distinct endpoints; in particular $C$ is nowhere dense, so the interior of $C$ is empty and every nonempty open subset of $\mathbb{R}$ contains a point outside $C$ ([[thm-cantor-set-properties]], [[def-cantor-set]], [[def-measure-zero-and-content-zero]], [[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[def-countable]]).

[L2] A set is closed exactly when every point outside it has a neighbourhood missing it ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] A bounded $f$ on $[a,b]$ with $a < b$ is Riemann integrable if and only if its set of discontinuities has measure zero; the implication from "measure zero" to "integrable" uses no choice principle ([[thm-lebesgue-criterion]], [[def-bounded-set]]).

[L4] For a partition $P = (n,t)$ of $[0,1]$: $n \ge 1$, $t_i < t_{i+1}$, $\Delta_i > 0$, $I_i = [t_i,t_{i+1}] \subseteq [0,1]$, and $(t_i,t_{i+1})$ is a nonempty open subset of $[0,1]$ ([[def-partition-and-refinement]], [[def-interval]], [[def-open-and-closed-in-r]]).

[L5] $m_i = \inf f[I_i]$, $L(f,P) = \sum_{i<n}m_i\Delta_i$, $\underline{\int_0^1}f$ is the supremum of the lower sums, $\overline{\int_0^1}f$ the infimum of the upper sums, and the integral is their common value when they agree ([[def-darboux-sums]], [[def-darboux-integral]]).

[L6] A set with a least element has it as its infimum; the supremum of $\{0\}$ is $0$ ([[def-infimum]], [[def-max-min]], [[def-complete-ordered-field]]).

[L7] Finite sums: $\sum_{i<n}0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L8] Ordered-field arithmetic: for $0 \le x \le 1$ and a real $\rho > 0$ the reals $u := \max\{0,x-\rho\}$ and $v := \min\{1,x+\rho\}$ satisfy $u < v$ and $(u,v) \subseteq N_\rho(x)\cap[0,1]$ ([[def-max-min]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-neighbourhood-r]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 $\mathbf{1}_C$ takes only the values $0$ and $1$, so it is bounded on $[0,1]$ and its Darboux sums and integrals are defined by [L5]. [given, L5]

1.2 **Discontinuity on $C$.** Let $x \in C$, so $\mathbf{1}_C(x) = 1$, and let a real $\rho > 0$ be given. By [L8] the set $(u,v) \subseteq N_\rho(x)\cap[0,1]$ is a nonempty open interval, so by [L1] it contains a point $y \notin C$; then $y \in [0,1]$, $|y-x| < \rho$ and $|\mathbf{1}_C(x) - \mathbf{1}_C(y)| = 1$. So the continuity condition fails at $x$ for $\varepsilon := 1$. [given, L1, L8]

1.3 **Continuity off $C$.** Let $x \in [0,1]$ with $x \notin C$. Since $C$ is closed, [L2] gives a real $\rho > 0$ with $N_\rho(x) \cap C = \varnothing$, so $\mathbf{1}_C$ vanishes on $N_\rho(x)\cap[0,1]$ and $|\mathbf{1}_C(y) - \mathbf{1}_C(x)| = 0 < \varepsilon$ there for every $\varepsilon > 0$. [given, L1, L2]

2.1 So the set of discontinuities of $\mathbf{1}_C$ in $[0,1]$ is exactly $C$, which has measure zero by [L1]; by [L3] and $0 < 1$, $\mathbf{1}_C$ is Riemann integrable on $[0,1]$. [step 1.1, step 1.2, step 1.3, L1, L3]

2.2 **Every lower sum is $0$.** Let $P = (n,t)$ be a partition of $[0,1]$ and $i < n$. By [L4] the interval $(t_i,t_{i+1})$ is a nonempty open subset of $[0,1]$, so by [L1] it contains a point outside $C$, at which $\mathbf{1}_C$ takes the value $0$; since $\mathbf{1}_C \ge 0$, the value $0$ is the least element of $\mathbf{1}_C[I_i]$ and $m_i = 0$ by [L6]. Hence $L(\mathbf{1}_C,P) = 0$ by [L5] and [L7]. [step 1.1, L1, L4, L5, L6, L7]

3.1 The set of lower sums is $\{0\}$, so $\underline{\int_0^1}\mathbf{1}_C = 0$ by [L6]; and $\mathbf{1}_C$ is integrable by step 2.1, so $\int_0^1 \mathbf{1}_C = 0$ by [L5]. [step 2.1, step 2.2, L5, L6] ∎

## Remarks

- **Uncountably many discontinuities, and the integral does not notice.** $C$ is uncountable ([[thm-cantor-set-properties]]), so this function is outside the reach of [[cor-countably-many-discontinuities-integrable]] and is the standard demonstration that the Lebesgue criterion is strictly stronger than the countable one.

- **Every upper sum is at least the total length of the subintervals meeting $C$, and that total goes to $0$.** The proof above does not need this, since integrability comes from the criterion and the value from the lower sums alone; but it is the reason the upper sums also converge to $0$, and it is precisely where the Smith-Volterra-Cantor set behaves differently ([[cex-indicator-of-a-fat-cantor-set-is-not-integrable]]).

- **The two hypotheses of claim 1 are the two properties of $C$ that matter.** Closedness gives continuity off $C$; empty interior gives discontinuity on $C$. A set with both is exactly a closed nowhere dense set, and any such set is the discontinuity set of its own indicator. Whether that indicator is integrable then depends only on whether the set is null, which is what [[fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set]] settles in the negative for category.
````

### `ex-thomae-is-riemann-integrable-with-integral-zero`

````markdown
---
id: ex-thomae-is-riemann-integrable-with-integral-zero
kind: example
title: "Thomae's function is Riemann integrable on $[0,1]$ with integral $0$: it is continuous at every irrational, so its discontinuity set is countable, and every lower Darboux sum is $0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dirichlet-and-thomae-functions, thm-dirichlet-and-thomae-continuity-sets, cor-countably-many-discontinuities-integrable, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, thm-rationals-countable, lem-subset-of-countable, def-countable, lem-q-and-irrationals-dense-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, def-continuity-real, lem-finite-sum-laws, def-finite-sum, def-interval, def-bounded-set, def-infimum, def-max-min, def-canonical-natural, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "$\\int_0^1 t = 0$ for Thomae"
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
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "MAT 125B Discussion 3 (UC Davis)"
      url: "https://www.math.ucdavis.edu/~gravner/MAT125B/materials/disc3.pdf"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Example

Let $t : [0,1] \to \mathbb{R}$ be Thomae's function restricted to $[0,1]$: at a
rational $x$ with least denominator $q(x) \ge 1$ it takes the value
$1/\iota(q(x))$, and at an irrational $x$ the value $0$
([[def-dirichlet-and-thomae-functions]], [[def-canonical-natural]]). Then $t$ is
Riemann integrable on $[0,1]$ and

$$\int_0^1 t \;=\; 0 .$$

**Two ingredients, and they pull in opposite directions.** $t$ is continuous at
every irrational and discontinuous at every rational
([[thm-dirichlet-and-thomae-continuity-sets]]), so its discontinuity set is
$\mathbb{Q}\cap[0,1]$, which is infinite and dense — and countable, which is what
[[cor-countably-many-discontinuities-integrable]] needs. The value is then read
off the lower sums, every one of which is $0$ because every subinterval contains
an irrational ([[lem-q-and-irrationals-dense-r]]).

Every **upper** sum, by contrast, is strictly positive, since every subinterval
contains a rational; the upper integral is nevertheless $0$, an infimum of
positive numbers.

## Facts & Assumptions

**Given:** Thomae's function $t : [0,1] \to \mathbb{R}$ as above.

[L1] $t(x) = 1/\iota(q(x))$ with $\iota(q(x)) \ge 1 > 0$ at a rational $x$, and $t(x) = 0$ at an irrational $x$; hence $0 \le t(x) \le 1$ everywhere and $t(x) > 0$ at every rational $x$ ([[def-dirichlet-and-thomae-functions]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L2] Thomae's function on $\mathbb{R}$ is continuous at every irrational and discontinuous at every rational ([[thm-dirichlet-and-thomae-continuity-sets]]); a restriction is continuous at every point of the smaller domain at which the original is continuous, the same $\delta$ serving a condition quantified over fewer points ([[def-continuity-real]]).

[L3] $\mathbb{Q}$ is countably infinite and every subset of an at most countable set is at most countable ([[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]]).

[L4] A bounded function on $[a,b]$ with $a < b$ whose set of discontinuities is at most countable is Riemann integrable ([[cor-countably-many-discontinuities-integrable]], [[def-bounded-set]]).

[L5] The irrationals are dense in $\mathbb{R}$, so every nonempty open interval contains an irrational ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L6] For a partition $P = (n,s)$ of $[0,1]$: $n \ge 1$, $s_i < s_{i+1}$, $\Delta_i > 0$, $I_i = [s_i,s_{i+1}] \subseteq [0,1]$, and $(s_i,s_{i+1})$ is a nonempty open interval ([[def-partition-and-refinement]], [[def-interval]]).

[L7] $m_i = \inf t[I_i]$, $L(t,P) = \sum_{i<n}m_i\Delta_i$, $\underline{\int_0^1}t$ is the supremum of the lower sums and $\overline{\int_0^1}t$ the infimum of the upper sums, and the integral is their common value when they agree ([[def-darboux-sums]], [[def-darboux-integral]]).

[L8] A set with a least element has it as its infimum; the supremum of $\{0\}$ is $0$ ([[def-infimum]], [[def-max-min]], [[def-complete-ordered-field]]).

[L9] Finite sums: $\sum_{i<n}0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L10] Ordered-field arithmetic: the order is total and transitive, and a reciprocal of a positive quantity is positive ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 $t$ is bounded on $[0,1]$, with $0 \le t(x) \le 1$ for every $x$, by [L1]. [given, L1, L10]

1.2 By [L2], $t$ is continuous at every irrational point of $[0,1]$, so its set of discontinuities in $[0,1]$ is contained in $\mathbb{Q}\cap[0,1]$, which is at most countable by [L3]; a subset of it is then at most countable as well. [given, L2, L3]

2.1 By [L4] applied on $[0,1]$, with $0 < 1$, $t$ is Riemann integrable on $[0,1]$. [step 1.1, step 1.2, L4]

2.2 **Every lower sum is $0$.** Let $P = (n,s)$ be a partition of $[0,1]$ and $i < n$. By [L6] the interval $(s_i,s_{i+1})$ is nonempty and open, so by [L5] it contains an irrational $y$, and $y \in I_i \subseteq [0,1]$, so $t(y) = 0$ by [L1]. Since $t \ge 0$ by [L1], the value $0$ is the least element of $t[I_i]$ and $m_i = 0$ by [L8]. Hence $L(t,P) = 0$ by [L7] and [L9]. [step 1.1, L1, L5, L6, L7, L8, L9]

3.1 The set of lower sums is therefore $\{0\}$ and $\underline{\int_0^1}t = 0$ by [L8]; since $t$ is integrable by step 2.1, $\int_0^1 t = 0$ by [L7]. [step 2.1, step 2.2, L7, L8] ∎

## Remarks

- **The discontinuity set is dense and the function is still integrable.** $\mathbb{Q}\cap[0,1]$ meets every subinterval of $[0,1]$, so no partition isolates the bad points; what saves the function is that the set is countable, hence null ([[lem-countable-sets-are-null]]). This is the cleanest witness that "small" for integrability means small in measure and not small in category or in closure.

- **The same function refutes a plausible converse.** $t$ is nonnegative, integrable with integral $0$, and positive at every rational, so a vanishing integral does not force a nonnegative integrand to vanish ([[cex-nonnegative-integrable-with-zero-integral-need-not-vanish]], [[fs-nonnegative-integrable-with-zero-integral-vanishes]]).

- **Contrast with the Dirichlet function.** $\mathbf{1}_{\mathbb{Q}}$ is discontinuous everywhere and not integrable ([[cex-dirichlet-is-not-riemann-integrable]]), yet it is nonzero at exactly the same points as $t$. Only the values differ, and they differ in a way that makes $t$ continuous at every irrational; that is the whole of the difference.
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

### `lem-nondegenerate-interval-is-not-null`

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
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
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

### `lem-power-monotone`

````markdown
---
id: lem-power-monotone
kind: lemma
title: "Monotonicity of $x \\mapsto x^n$ and of $n \\mapsto a^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, cor-of-one-positive, lem-of-sign-rules, prop-of-multiply-inequalities, thm-induction-principle, def-ordered-field, def-nat-order, lem-nat-discrete]
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let
$a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$, with powers as in
[[def-integer-power]].

1. **Signs.** If $a \ge 0$ then $a^n \ge 0$, and if $a > 0$ then $a^n > 0$.
2. **Strict monotonicity in the base.** If $0 \le a < b$ and $n \ge 1$ then $a^n < b^n$. Consequently, for $a, b \ge 0$ and $n \ge 1$: $a < b \iff a^n < b^n$ and $a \le b \iff a^n \le b^n$, and $x \mapsto x^n$ is injective on $\{x \in \mathbb{R} : x \ge 0\}$.
3. **Comparison with the base.** If $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; if $a > 1$ and $n \ge 1$ then $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1$.
4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.

## Facts & Assumptions

**Given:** An ordered field $\mathbb{R}$, elements $a, b \in \mathbb{R}$ and naturals $m, n$.

[L1] Definition of powers ([[def-integer-power]]): $a^0 = 1$ and $a^{n+1} = a^n a$.

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Sign and scaling rules: a product of positives is positive, and for $c > 0$, $x < y \iff cx < cy$ ([[lem-of-sign-rules]]); the positives are closed under addition and satisfy trichotomy ([[def-ordered-field]]); and $1 > 0$ ([[cor-of-one-positive]], which is where that fact is proved: neither of the two items just named states it).

[L4] Multiplying inequalities of nonnegatives: if $0 \le x \le y$ and $0 \le u \le v$ then $xu \le yv$, and if $0 < x < y$ and $0 < u < v$ then $xu < yv$ ([[prop-of-multiply-inequalities]]).

[L5] Trichotomy and transitivity of the order: for $x, y$ exactly one of $x < y$, $x = y$, $y < x$ holds, and $<$ and $\le$ are transitive ([[def-ordered-field]]).

[L6] The order on the exponents: $m \le n$ holds exactly when $n = m + k$ for some natural $k$ ([[def-nat-order]]), and $m < n$ holds exactly when $m + 1 \le n$ ([[lem-nat-discrete]]); combining the two, $m < n$ holds exactly when $n = m + d$ for some natural $d \ge 1$.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: $a^0 = 1 > 0$, so claim 1 holds; claim 2 is vacuous at $n = 0$; $a^0 = 1 \ge 1$ and $a^0 = 1 \le 1$, so claim 3 holds at $n = 0$ in the nonstrict readings. [base, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume, for all $a, b$: $a \ge 0 \Rightarrow a^n \ge 0$ and $a > 0 \Rightarrow a^n > 0$; and $0 \le a \le b \Rightarrow a^n \le b^n$, with $a^n < b^n$ when moreover $a < b$ and $n \ge 1$. [ih]

2.1 Signs at $n+1$: if $a \ge 0$ then $a^{n+1} = a^n a$ is a product of two nonnegatives, hence $\ge 0$, and if $a > 0$ it is a product of two positives, hence $> 0$. [step 1.2, L1, L3, L4]

3.1 Strict monotonicity at $n+1$, assuming $0 \le a < b$: then $b > 0$, and the hypothesis gives $0 \le a^n \le b^n$ with $b^n > 0$ by step 2.1; if $a = 0$ then $a^{n+1} = 0 < b^{n+1}$ since $b^{n+1} = b^n b > 0$; if $a > 0$ then $a^{n+1} = a^n a \le b^n a$ by multiplying $a^n \le b^n$ by $a > 0$, and $b^n a < b^n b$ by multiplying $a < b$ by $b^n > 0$, so $a^{n+1} < b^{n+1}$ by transitivity; and in either case $0 \le a \le b$ gives $a^{n+1} \le b^{n+1}$ by [L4]. [step 1.2, step 2.1, L1, L3, L4, L5]

4.1 By the induction principle, claims 1 and 2 hold for every $n$, in the form: $a \ge 0 \Rightarrow a^n \ge 0$; $a > 0 \Rightarrow a^n > 0$; and $0 \le a < b$ with $n \ge 1$ gives $a^n < b^n$. [step 1.1, step 2.1, step 3.1, L2]

5.1 The equivalences of claim 2 follow by trichotomy: for $a, b \ge 0$ and $n \ge 1$, if $a^n < b^n$ then neither $a = b$ (which would give $a^n = b^n$) nor $b < a$ (which would give $b^n < a^n$) is possible, so $a < b$; the $\le$ form is the negation of the $<$ form with $a$ and $b$ exchanged; and injectivity is the case $a^n = b^n$, where $a < b$ and $b < a$ are both excluded. [step 4.1, L5]

5.2 Claim 4: for $a > 1$ we have $a^{n+1} = a^n a > a^n \cdot 1 = a^n$, multiplying $1 < a$ by $a^n > 0$, so $a^n$ is strictly increasing in $n$, and hence $a^m < a^n$ whenever $m < n$: writing $n = m + d$ with $d \ge 1$ and inducting on $d$, the case $d = 1$ is that one-step inequality and the passage from $d$ to $d+1$ is $a^m < a^{m+d} < a^{m+d+1}$ by transitivity; for $a = 1$ an induction gives $1^n = 1$ for all $n$; and for $0 < a < 1$ we have $a^{n+1} = a^n a < a^n \cdot 1 = a^n$, so $a^n$ is strictly decreasing in $n$ and the same induction on the gap $d$ gives $a^m > a^n$ for $m < n$. [step 4.1, L1, L2, L3, L5, L6]

6.1 Claim 3: if $a \ge 1$ and $n \ge 1$ then applying step 4.1 to $1 \le a$ gives $1 = 1^n \le a^n$, and $a^n = a^{n-1} a \ge 1 \cdot a = a$ since $a^{n-1} \ge 1$ by the same argument and $a > 0$; if $a > 1$ the same computation gives $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1^n = 1$. [step 4.1, step 5.1, L1, L3, L4]

7.1 All four claims are proved: signs and strict monotonicity in the base by the induction of steps 1.1 and 3.1, the order equivalences and injectivity by trichotomy, and the comparisons with the base and the behaviour in the exponent by steps 6.1 and 5.2. [step 4.1, step 5.1, step 6.1, step 5.2, discharge-induction] ∎
````

### `thm-closure-characterisations-r`

````markdown
---
id: thm-closure-characterisations-r
kind: theorem
title: "The closure equals the set together with its limit points, equals the set of points every neighbourhood of which meets it, and is the smallest closed superset; a set is closed iff it contains its limit points"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-interior-closure-boundary-r, def-limit-point-r, def-open-and-closed-in-r, thm-open-set-algebra-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "$\\overline{A} = A \\cup A'$"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.27)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, with closure $\overline{A}$ as in
[[def-interior-closure-boundary-r]] and derived set $A'$ as in
[[def-limit-point-r]]. Write

$$E \;:=\; \{\, x \in \mathbb{R} : N_\varepsilon(x) \cap A \ne \varnothing \text{ for every real } \varepsilon > 0 \,\}$$

for the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then:

1. $\overline{A} = E$.
2. $\overline{A} = A \cup A'$.
3. $\overline{A}$ is the smallest closed superset of $A$: it is closed, it
   contains $A$, and it is contained in every closed $F$ with $A \subseteq F$.
4. $A$ is closed if and only if $A = \overline{A}$, if and only if
   $A' \subseteq A$.

Claim 3 is the content of the definition of $\overline{A}$ and is restated here
so that the four descriptions stand together; claims 1, 2 and 4 are the ones
that carry work.

## Facts & Assumptions

**Given:** A subset $A \subseteq \mathbb{R}$, and the set $E$ of adherent points of $A$ as displayed in the Statement.

[L1] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $F$ is closed when $\mathbb{R} \setminus F$ is open ([[def-open-and-closed-in-r]]).

[L2] $x \in N_\varepsilon(x)$; $N^{*}_\varepsilon(x) = N_\varepsilon(x) \setminus \{x\} \subseteq N_\varepsilon(x)$; and if $y \in N_\varepsilon(x)$ then $\delta := \varepsilon - |y - x| > 0$ and $N_\delta(y) \subseteq N_\varepsilon(x)$ ([[def-neighbourhood-r]]).

[L3] $\overline{A}$ is the intersection of the nonempty family of closed supersets of $A$; it is closed, it contains $A$, and it is contained in every closed superset of $A$ ([[def-interior-closure-boundary-r]], [[thm-open-set-algebra-r]]).

[L4] $x$ is an adherent point of $A$ when every $N_\varepsilon(x)$ meets $A$, a limit point when every $N^{*}_\varepsilon(x)$ meets $A$, and $A'$ is the set of limit points ([[def-limit-point-r]]).

## Proof

**Proof technique:** direct.

1.1 $A \subseteq E$: for $x \in A$ and any $\varepsilon > 0$ one has $x \in N_\varepsilon(x) \cap A$, so that intersection is nonempty. [L2, L4]

1.2 Let $x \in \mathbb{R} \setminus E$; by the definition of $E$ there is a real $\varepsilon > 0$ with $N_\varepsilon(x) \cap A = \varnothing$. [L4, choose]

1.3 Let $F$ be closed with $A \subseteq F$, and let $x \in \mathbb{R} \setminus F$; since $\mathbb{R} \setminus F$ is open there is a real $\eta > 0$ with $N_\eta(x) \subseteq \mathbb{R} \setminus F$. [L1, choose]

2.1 For every $y \in N_\varepsilon(x)$ the radius $\delta := \varepsilon - |y - x|$ is positive and $N_\delta(y) \subseteq N_\varepsilon(x)$, so $N_\delta(y) \cap A = \varnothing$ and $y \notin E$; hence $N_\varepsilon(x) \subseteq \mathbb{R} \setminus E$, and since $x$ was an arbitrary point of $\mathbb{R} \setminus E$ that set is open, that is, $E$ is closed. [step 1.2, L1, L2, L4]

2.2 From $N_\eta(x) \subseteq \mathbb{R} \setminus F \subseteq \mathbb{R} \setminus A$ we get $N_\eta(x) \cap A = \varnothing$, so $x \notin E$; hence $\mathbb{R} \setminus F \subseteq \mathbb{R} \setminus E$, that is, $E \subseteq F$, for every closed $F \supseteq A$. [step 1.3, L4]

3.1 By steps 1.1 and 2.1 the set $E$ is a closed superset of $A$, so $\overline{A} \subseteq E$ by the leastness in [L3]; and $\overline{A}$ is itself a closed superset of $A$ by [L3], so step 2.2 applied to $F = \overline{A}$ gives $E \subseteq \overline{A}$. Hence $\overline{A} = E$, which is claim 1. [step 1.1, step 2.1, step 2.2, L3]

4.1 $E = A \cup A'$: if $x \in E$ and $x \notin A$ then for every $\varepsilon > 0$ some $a \in N_\varepsilon(x) \cap A$ exists, and $a \ne x$ because $x \notin A$, so $a \in N^{*}_\varepsilon(x) \cap A$ and $x \in A'$; conversely $A \subseteq E$ by step 1.1, and $A' \subseteq E$ because $N^{*}_\varepsilon(x) \subseteq N_\varepsilon(x)$. Combining with step 3.1 gives $\overline{A} = A \cup A'$, which is claim 2. [step 1.1, step 3.1, L2, L4]

5.1 Claim 4: if $A$ is closed then $A$ is a closed superset of itself, so $\overline{A} \subseteq A$ by [L3], while $A \subseteq \overline{A}$ by [L3], whence $A = \overline{A}$; conversely if $A = \overline{A}$ then $A$ is closed because $\overline{A}$ is. Finally $A = \overline{A}$ says $A = A \cup A'$ by step 4.1, and $A = A \cup A'$ holds exactly when $A' \subseteq A$. [step 4.1, L3]

6.1 Claim 3 is [L3] restated, and claims 1, 2 and 4 are steps 3.1, 4.1 and 5.1, so all four hold. [step 3.1, step 4.1, step 5.1, L3] ∎

## Remarks

- **Which claim does the work in practice.** Claim 1 is the one used almost
  everywhere below: to show a point lies in $\overline{A}$ one exhibits, for each
  $\varepsilon > 0$, a point of $A$ within $\varepsilon$ of it. Claim 2 is what
  separates the two ways a point can be adherent, by membership or by
  accumulation, and it is what makes the notion of an isolated point visible.

- **No special property of $\mathbb{R}$ is used.** The argument uses the
  definitions of open, closed, neighbourhood and closure, and the order enters
  only through the nesting property of neighbourhoods; neither the
  least-upper-bound property nor the Archimedean property appears at any step.
  The results of this page that do use them are flagged in
  [[rem-r-native-topology-scope]].

- **The sequential form is a separate theorem and costs more.** Replacing
  "every neighbourhood meets $A$" by "some sequence in $A$ converges to $x$" is
  [[lem-sequential-characterisation-of-closure-r]], and the passage from the
  first to the second spends the axiom of countable choice, since it selects one
  point of $A$ from each of infinitely many neighbourhoods. The characterisation
  proved above is choice free.
````

### `thm-discontinuity-set-is-f-sigma`

````markdown
---
id: thm-discontinuity-set-is-f-sigma
kind: theorem
title: "For $f : A \\to \\mathbb{R}$ the set of points of $A$ at which $f$ is discontinuous is the intersection with $A$ of an $F_\\sigma$ subset of $\\mathbb{R}$, and the set of points at which $f$ is continuous is the intersection with $A$ of a $G_\\delta$ subset; for $A = \\mathbb{R}$ the two sets are $F_\\sigma$ and $G_\\delta$ outright"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
  evidence: semantic-source
deps: [def-oscillation, thm-continuity-iff-oscillation-zero, lem-oscillation-superlevel-sets-are-closed, def-f-sigma-g-delta, def-open-and-closed-in-r, cor-archimedean-reciprocal, def-continuity-real, def-extended-reals, def-canonical-natural, lem-of-naturals-positive, def-classification-of-discontinuities]
justified_by: []
aliases: [thm-continuity-set-is-g-delta]
landmark: true
short: "discontinuity set is $F_\\sigma$"
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
    - title: "Gdelta set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. Write

$$D \;:=\; \{\, x \in A : f \text{ is discontinuous at } x \,\}, \qquad C \;:=\; A \setminus D$$

([[def-continuity-real]], [[def-classification-of-discontinuities]]). Then:

1. **Pointwise exhaustion.** $D = \{\, x \in A : \omega_f(x) > 0 \,\}$
   ([[def-oscillation]]), and $D$ is the union of the increasing sequence of
   superlevel sets
   $$D \;=\; \bigcup_{n \in \mathbb{N}} \{\, x \in A : \omega_f(x) \ge 1/\iota(n+1) \,\}$$
   ([[def-canonical-natural]]), whose thresholds are $1, 1/2, 1/3, \dots$.
2. **Descriptive form.** There is an $F_\sigma$ set $F \subseteq \mathbb{R}$ and
   a $G_\delta$ set $V \subseteq \mathbb{R}$ ([[def-f-sigma-g-delta]]) with
   $$D \;=\; A \cap F, \qquad C \;=\; A \cap V, \qquad V = \mathbb{R} \setminus F ,$$
   and $F$ may be taken to be $\bigcup_{n \in \mathbb{N}} G_n$ with each $G_n$ a
   closed subset of $\mathbb{R}$ cutting down on $A$ to the $n$-th set of
   claim 1 ([[lem-oscillation-superlevel-sets-are-closed]]).

In particular, when $A = \mathbb{R}$ the discontinuity set $D$ is an $F_\sigma$
subset of $\mathbb{R}$ and the continuity set $C$ is a $G_\delta$ subset, and
claim 1 reads $D = \bigcup_{n} \{\, x \in \mathbb{R} : \omega_f(x) \ge 1/\iota(n+1) \,\}$.

**Claim 1 is stated separately because it is what is cited downstream.** The
exhaustion of $D$ by the superlevel sets $\{\omega_f \ge 1/\iota(n+1)\}$ is used
directly wherever a property has to be established one threshold at a time —
[[thm-baire-one-continuity-points]] shows each superlevel set nowhere dense and
concludes that $D$ is meager — and that use needs the identity itself, not only
the descriptive conclusion of claim 2.

**The statement is relative on purpose.** For a general domain $A$ the sets $D$
and $C$ are subsets of $A$, and neither is $F_\sigma$ or $G_\delta$ in
$\mathbb{R}$ in general; what the proof produces are two subsets of $\mathbb{R}$
that cut down to them. The absolute form is stated only for $A = \mathbb{R}$,
which is the case [[thm-continuity-set-realisation]] and
[[cor-no-function-is-continuous-exactly-on-q]] use.

## Facts & Assumptions

**Given:** $A \subseteq \mathbb{R}$ and a function $f : A \to \mathbb{R}$.

[L1] $f$ is continuous at $c \in A$ if and only if $\omega_f(c) = 0$; and $\omega_f(c) \ge 0$ for every $c \in A$ ([[thm-continuity-iff-oscillation-zero]], [[def-oscillation]], [[def-extended-reals]]).

[L2] For every real $\varepsilon > 0$ there is a closed $G \subseteq \mathbb{R}$ with $\{x \in A : \omega_f(x) \ge \varepsilon\} = A \cap G$ ([[lem-oscillation-superlevel-sets-are-closed]]).

[L3] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \eta$, where $\iota(m)$ is the canonical natural of $m$ in $\mathbb{R}$; and $\iota$ is strictly increasing and positive on the naturals $\ge 1$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L4] A subset of $\mathbb{R}$ is $F_\sigma$ when it is the union of a sequence of closed sets and $G_\delta$ when it is the intersection of a sequence of open sets; $S$ is $F_\sigma$ if and only if $\mathbb{R} \setminus S$ is $G_\delta$ ([[def-f-sigma-g-delta]], [[def-open-and-closed-in-r]]).

## Proof

**Proof technique:** direct.

1.1 For each $n \in \mathbb{N}$ put $\varepsilon_n := 1/\iota(n+1)$, a positive real since $n + 1 \ge 1$, and let $G_n \subseteq \mathbb{R}$ be closed with $\{x \in A : \omega_f(x) \ge \varepsilon_n\} = A \cap G_n$. [L2, L3, construct]

1.2 $D = \{\, x \in A : \omega_f(x) > 0 \,\}$: a point $x \in A$ is a discontinuity exactly when $\omega_f(x) \ne 0$, and $\omega_f(x) \ge 0$ always, so exactly when $\omega_f(x) > 0$. [L1]

2.1 $D \subseteq \bigcup_{n \in \mathbb{N}} (A \cap G_n)$. Let $x \in D$, so $\omega_f(x) > 0$. If $\omega_f(x) \ge \varepsilon_0 = 1$ then $x \in A \cap G_0$. Otherwise $0 < \omega_f(x) < 1$, so $\omega_f(x)$ is a positive real, and there is a natural $m \ge 1$ with $1/\iota(m) < \omega_f(x)$; writing $m = n + 1$ with $n \in \mathbb{N}$ gives $\omega_f(x) > \varepsilon_n$, hence $x \in A \cap G_n$. [step 1.1, step 1.2, L3]

2.2 Conversely $\bigcup_{n \in \mathbb{N}} (A \cap G_n) \subseteq D$: if $x \in A \cap G_n$ then $\omega_f(x) \ge \varepsilon_n > 0$, so $x \in D$. [step 1.1, step 1.2, L3]

3.1 Put $F := \bigcup_{n \in \mathbb{N}} G_n$, an $F_\sigma$ subset of $\mathbb{R}$ since each $G_n$ is closed and the family is indexed by $\mathbb{N}$. Then $A \cap F = \bigcup_{n} (A \cap G_n) = D$. [step 1.1, step 2.1, step 2.2, L4]

3.2 Claim 1 is proved: $D = \{x \in A : \omega_f(x) > 0\}$ by step 1.2, and $D = \bigcup_{n \in \mathbb{N}} \{x \in A : \omega_f(x) \ge \varepsilon_n\}$ by steps 2.1 and 2.2, since $A \cap G_n$ is by step 1.1 exactly the set $\{x \in A : \omega_f(x) \ge \varepsilon_n\}$ with $\varepsilon_n = 1/\iota(n+1)$. The union is increasing, since $n \le m$ gives $\iota(n+1) \le \iota(m+1)$ and hence $\varepsilon_m \le \varepsilon_n$. [step 1.1, step 1.2, step 2.1, step 2.2, L3]

4.1 Put $V := \mathbb{R} \setminus F$, a $G_\delta$ subset of $\mathbb{R}$. Then $A \cap V = A \setminus (A \cap F) = A \setminus D = C$. [step 3.1, L4]

5.1 Claim 2 is proved by steps 3.1 and 4.1; and for $A = \mathbb{R}$ the two identities read $D = F$ and $C = V$, so $D$ is $F_\sigma$ and $C$ is $G_\delta$ outright. [step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **The exhaustion is indexed from $0$ and the thresholds are $1/\iota(n+1)$.** $\mathbb{N}$ contains $0$, so the sequence of thresholds is $1, 1/2, 1/3, \dots$ and never $1/\iota(0)$, which is not defined. Writing the union as $\bigcup_{n \ge 1} \{\omega_f \ge 1/\iota(n)\}$ names the same family; the form above is used because a sequence in this library is a function on $\mathbb{N}$.

- **The converse holds and is proved separately.** Every $G_\delta$ subset of $\mathbb{R}$ is the continuity set of some function $\mathbb{R} \to \mathbb{R}$ ([[thm-continuity-set-realisation]]), so the two classes coincide exactly. What the present theorem contributes is the direction that constrains: no function can have a continuity set that fails to be $G_\delta$, and [[cor-no-function-is-continuous-exactly-on-q]] spends that on $\mathbb{Q}$.
````

### `thm-lebesgue-criterion`

````markdown
---
id: thm-lebesgue-criterion
kind: theorem
title: "Lebesgue's criterion for Riemann integrability: a bounded $f$ on $[a,b]$ is Riemann integrable if and only if its set of discontinuities has measure zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-criterion, def-oscillation, thm-continuity-iff-oscillation-zero, lem-oscillation-superlevel-sets-are-closed, def-measure-zero-and-content-zero, thm-countable-union-of-null-is-null, thm-compact-null-is-content-zero, lem-content-zero-implies-null, thm-heine-borel-characterisation-r, def-open-cover-r, def-countable-choice, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-open-and-closed-in-r, thm-open-set-algebra-r, def-neighbourhood-r, def-bounded-set, def-interval, def-continuity-real, def-classification-of-discontinuities, def-extended-reals, def-sequence, thm-well-ordering-principle, thm-induction-principle, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
justified_by: []
aliases: [thm-lebesgue-integrability-criterion]
landmark: true
short: "Lebesgue's criterion"
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
    - title: "Lebesgue's criterion for Riemann integrability (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral#Integrability"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
    - title: "M. Wodzicki, The Riemann Integral"
      url: "https://math.berkeley.edu/~wodzicki/H104.F10/Integral.pdf"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]) and let

$$D \;:=\; \{\, x \in [a,b] \ : \ f \text{ is discontinuous at } x \,\}$$

([[def-continuity-real]], [[def-classification-of-discontinuities]]). Then

$$f \text{ is Riemann integrable on } [a,b] \quad \Longleftrightarrow \quad D \text{ has measure zero}$$

([[def-darboux-integral]], [[def-measure-zero-and-content-zero]]).

**The choice cost, named.** The implication from integrability to $D$ being null
uses the Axiom of Countable Choice ([[def-countable-choice]]) exactly once,
through [[thm-countable-union-of-null-is-null]] at step 7.1: $D$ is exhibited as
the union of a sequence of null sets. The converse implication, from $D$ null to
integrability, is a theorem of ZF: it uses no choice principle at all.

**"Measure zero" here is the cover condition of
[[def-measure-zero-and-content-zero]]**, namely that for every $\varepsilon > 0$
there is a sequence of intervals covering $D$ of total length at most
$\varepsilon$. No outer measure, no measurable set and no Lebesgue integral is
used or needed; the criterion is a statement about interval covers throughout.

## Facts & Assumptions

**Given:** Reals $a < b$, a bounded $f : [a,b] \to \mathbb{R}$, a real $M_{+} > 0$ with $|f(x)| \le M_{+}$ for every $x \in [a,b]$, and $D$ as in the Statement.

[A1] The Axiom of Countable Choice, used only where [L11] is invoked ([[def-countable-choice]]).

[L1] For a partition $P = (n,t)$ of $[a,b]$: $n \ge 1$, $\Delta_i = t_{i+1}-t_i > 0$, $\sum_{i<n}\Delta_i = b-a$, $I_i = [t_i,t_{i+1}] \subseteq [a,b]$, and appending a point $y > t_n$ to a partition of $[a,t_n]$ gives a partition of $[a,y]$ whose subintervals are the old ones together with $[t_n,y]$ ([[def-partition-and-refinement]]).

[L2] $U(f,P) - L(f,P) = \sum_{i<n}(M_i-m_i)\Delta_i$, $M_i - m_i = \omega_f(I_i)$, and $0 \le M_i - m_i \le 2M_{+}$ ([[def-darboux-sums]], [[def-oscillation]]).

[L3] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P)-L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L4] Oscillation: $\omega_f(S) \le \omega_f(T)$ for $S \subseteq T \subseteq [a,b]$; $0 \le \omega_f(x) \le \omega_f([a,b] \cap N_\rho(x))$ for every real $\rho > 0$ and every $x \in [a,b]$; $\omega_f(x)$ is the infimum of those values over $\rho > 0$; and since $f$ is bounded every one of these values is a real number in $[0, 2M_{+}]$ ([[def-oscillation]], [[def-extended-reals]], [[def-neighbourhood-r]]).

[L5] $f$ is continuous at $x \in [a,b]$ if and only if $\omega_f(x) = 0$; hence $D = \{x \in [a,b] : \omega_f(x) > 0\}$ ([[thm-continuity-iff-oscillation-zero]], [[def-continuity-real]]).

[L6] For every real $\sigma > 0$ there is a closed $G \subseteq \mathbb{R}$ with $\{x \in [a,b] : \omega_f(x) \ge \sigma\} = [a,b] \cap G$ ([[lem-oscillation-superlevel-sets-are-closed]]).

[L7] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded; $[a,b]$ is closed and bounded; an intersection of closed sets is closed; every open interval is an open set ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]], [[def-open-and-closed-in-r]], [[thm-open-set-algebra-r]], [[def-interval]], [[def-bounded-set]]).

[L8] $A$ has content zero when for every real $\tau > 0$ there are $m \in \mathbb{N}$ and reals $c_0 \le e_0, \dots, c_m \le e_m$ with $A \subseteq \bigcup_{j \le m}[c_j,e_j]$ and $\sum_{j \le m}(e_j - c_j) \le \tau$; $A$ has measure zero when the same holds with a sequence of intervals and every partial total length at most $\tau$; a subset of a null set is null ([[def-measure-zero-and-content-zero]]).

[L9] A set of content zero has measure zero ([[lem-content-zero-implies-null]]), and for a **compact** set the two notions coincide ([[thm-compact-null-is-content-zero]]).

[L10] For every real $\eta > 0$ there is a natural $k \ge 1$ with $1/\iota(k) < \eta$; $\iota(k) > 0$ for $k \ge 1$, $\iota$ is nonnegative and nondecreasing on $\mathbb{N}$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L11] Assuming [A1], the union of a sequence of null subsets of $\mathbb{R}$ is null ([[thm-countable-union-of-null-is-null]], [[def-sequence]]).

[L12] Finite sums: splitting, additivity, scaling, monotonicity in the terms, and telescoping ([[def-finite-sum]], [[lem-finite-sum-laws]]). Also the interchange of two finite sums, $\sum_{i<n}\sum_{j<p}c_{i,j} = \sum_{j<p}\sum_{i<n}c_{i,j}$ for any doubly indexed family of reals; below it is applied with $p := m+1$, since $\sum_{j \le m}$ abbreviates $\sum_{j<m+1}$. That identity is **not** one of the six clauses of [[lem-finite-sum-laws]] and is therefore proved here, by induction on $p$ with $n$ held fixed ([[thm-induction-principle]]). At $p = 0$ each inner sum $\sum_{j<0}c_{i,j}$ is $0$ by the recursion clause of [[def-finite-sum]], so the left side is $\sum_{i<n}0 = 0$ by clause 2 of [[lem-finite-sum-laws]] taken with $\lambda = 0$, while the right side is an empty sum and so is $0$ as well. Passing from $p$ to $p+1$, the recursion clause and clause 1 of [[lem-finite-sum-laws]] give $\sum_{i<n}\sum_{j<p+1}c_{i,j} = \sum_{i<n}\bigl(\sum_{j<p}c_{i,j} + c_{i,p}\bigr) = \sum_{i<n}\sum_{j<p}c_{i,j} + \sum_{i<n}c_{i,p}$, which by the induction hypothesis is $\sum_{j<p}\sum_{i<n}c_{i,j} + \sum_{i<n}c_{i,p} = \sum_{j<p+1}\sum_{i<n}c_{i,j}$, again by the recursion clause.

[L13] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]); every nonempty subset of $\mathbb{R}$ bounded above has a supremum ([[def-complete-ordered-field]]).

[L14] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; an open interval is order-convex ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 For a real $\sigma > 0$ put $E_\sigma := \{\, x \in [a,b] : \omega_f(x) \ge \sigma \,\}$. By [L5], $E_\sigma \subseteq D$ for every $\sigma > 0$. [L4, L5, construct]

2.1 **Each $E_\sigma$ has content zero, assuming $f$ integrable.** Let $\sigma > 0$ and $\tau > 0$ be real. By [L3] fix a partition $P = (n,t)$ with $U(f,P) - L(f,P) < \sigma\tau \cdot 2^{-1}$. Let $B := \{\, i < n : (t_i,t_{i+1}) \cap E_\sigma \ne \varnothing \,\}$ and put $\chi_i := 1$ for $i \in B$ and $\chi_i := 0$ otherwise. [step 1.1, L3, L14, choose, construct]

2.2 **The exhaustion of $D$.** Put $\sigma_k := 1/\iota(k+1)$ for $k \in \mathbb{N}$, a positive real by [L10]. Then $D = \bigcup_{k \in \mathbb{N}} E_{\sigma_k}$. For the inclusion from left to right, let $x \in D$, so $\omega_f(x) > 0$ by [L5] and $\omega_f(x)$ is a real by [L4]; if $\omega_f(x) \ge 1 = \sigma_0$ then $x \in E_{\sigma_0}$, and otherwise [L10] gives a natural $k+1 \ge 1$ with $1/\iota(k+1) < \omega_f(x)$, so $x \in E_{\sigma_k}$. For the reverse inclusion, $x \in E_{\sigma_k}$ gives $\omega_f(x) \ge \sigma_k > 0$, hence $x \in D$ by [L5]. [step 1.1, L4, L5, L10, L14]

2.3 **The converse; this half of the proof is steps 2.3, 3.2, 4.2, 5.2, 6.2, 7.2, 8.1, 9.1, 10.1, 11.1, 12.1 and 13.1, and its symbols are its own.** Assume $D$ null and let a real $\varepsilon > 0$ be given. Put $\sigma' := \varepsilon \cdot \bigl(2(b-a)\bigr)^{-1}$ and $\tau' := \varepsilon \cdot \bigl(8M_{+}\bigr)^{-1}$, both positive by [L14]. By step 1.1 and [L8], $E_{\sigma'} \subseteq D$ is null. [step 1.1, given, L8, L14]

3.1 For $i \in B$ one has $M_i - m_i \ge \sigma$: fix $x \in (t_i,t_{i+1}) \cap E_\sigma$; since $(t_i,t_{i+1})$ is open there is a real $\rho > 0$ with $N_\rho(x) \subseteq (t_i,t_{i+1})$, so $[a,b] \cap N_\rho(x) \subseteq I_i$ and [L4] gives $\sigma \le \omega_f(x) \le \omega_f([a,b] \cap N_\rho(x)) \le \omega_f(I_i) = M_i - m_i$ by [L2]. [step 2.1, L1, L2, L4, L7, choose]

3.2 $E_{\sigma'}$ is compact: by [L6] there is a closed $G$ with $E_{\sigma'} = [a,b] \cap G$, an intersection of two closed sets, hence closed; and $E_{\sigma'} \subseteq [a,b]$ is bounded. So [L7] applies. [step 2.3, L6, L7]

4.1 Hence $\sigma\chi_i\Delta_i \le (M_i - m_i)\Delta_i$ for every $i < n$, the case $i \notin B$ because both $M_i - m_i \ge 0$ and $\Delta_i > 0$. Summing and using [L12] and [L2]: $\sigma \sum_{i<n}\chi_i\Delta_i \le U(f,P) - L(f,P) < \sigma\tau \cdot 2^{-1}$, so $\lambda := \sum_{i<n}\chi_i\Delta_i < \tau \cdot 2^{-1}$. [step 2.1, step 3.1, L2, L12, L14]

4.2 By [L9] applied to the compact null set $E_{\sigma'}$, it has content zero, so by [L8] there are $m \in \mathbb{N}$ and reals $c_0 \le e_0, \dots, c_m \le e_m$ with $E_{\sigma'} \subseteq \bigcup_{j \le m}[c_j,e_j]$ and $\sum_{j\le m}(e_j-c_j) \le \tau' \cdot 2^{-1}$. Put $\mu := \tau' \cdot \bigl(4(\iota(m)+1)\bigr)^{-1} > 0$ and $O_j := (c_j - \mu,\ e_j + \mu)$, an open interval containing $[c_j,e_j]$, of length $(e_j - c_j) + 2\mu$. Then $\sum_{j\le m}\bigl((e_j-c_j)+2\mu\bigr) \le \tau' \cdot 2^{-1} + 2\mu(\iota(m)+1) = \tau' \cdot 2^{-1} + \tau' \cdot 2^{-1} = \tau'$, by [L12] and [L10]. [step 2.3, step 3.2, L8, L9, L10, L12, L14, construct]

5.1 $E_\sigma$ is covered by the finite list of $2n+1$ closed intervals $[p_j,q_j]$, $j \le 2n$, defined by $[p_j,q_j] := [t_j,t_{j+1}]$ for $j < n$ with $j \in B$, $[p_j,q_j] := [a,a]$ for $j < n$ with $j \notin B$, and $[p_j,q_j] := [t_{j-n},t_{j-n}]$ for $n \le j \le 2n$: indeed a point of $E_\sigma$ lies in $[a,b]$, hence is one of $t_0,\dots,t_n$ or lies in some $(t_i,t_{i+1})$, and in the latter case $i \in B$. Its total length is $\sum_{j \le 2n}(q_j - p_j) = \sum_{i<n}\chi_i\Delta_i + 0 = \lambda < \tau$, by splitting the sum at $n$ ([L12]). [step 2.1, step 4.1, L1, L12, L14, construct]

5.2 **The family of good intervals.** Let $\mathcal{W}$ be the set of all open intervals $(u,v)$ with $u < v$ such that either $(u,v) \subseteq O_j$ for some $j \le m$, or $\omega_f([a,b]\cap(u,v)) < \sigma'$. Every $x \in [a,b]$ lies in a member: if $x \in E_{\sigma'}$ then $x \in [c_j,e_j] \subseteq O_j$ for some $j \le m$ by step 4.2, and $O_j$ is itself a member; and if $x \notin E_{\sigma'}$ then $\omega_f(x) < \sigma'$, so by [L4] some real $\rho > 0$ has $\omega_f([a,b]\cap N_\rho(x)) < \sigma'$, and $N_\rho(x) = (x-\rho,x+\rho)$ is a member containing $x$. [step 4.2, L4, L7, L14, construct]

6.1 As $\tau > 0$ was arbitrary, $E_\sigma$ has content zero by [L8], hence measure zero by [L9]; this used only that $f$ is integrable. [step 2.1, step 5.1, L8, L9]

6.2 **Cousin's construction: a partition each of whose subintervals lies in a member of $\mathcal{W}$.** Let $S$ be the set of $y \in (a,b]$ such that some partition of $[a,y]$ has every subinterval contained in a member of $\mathcal{W}$. $S$ is nonempty: by step 5.2 fix $(\alpha,\beta) \in \mathcal{W}$ with $a \in (\alpha,\beta)$ and put $y_0 := \min\{(a+b)\cdot 2^{-1},\ (a+\beta)\cdot 2^{-1}\}$, so $a < y_0 \le b$, $y_0 < \beta$ and $\alpha < a$; the one-subinterval partition of $[a,y_0]$ has $[a,y_0] \subseteq (\alpha,\beta)$, so $y_0 \in S$. Also $S$ is bounded above by $b$, so $s := \sup S$ exists by [L13] and $a < y_0 \le s \le b$. [step 5.2, L1, L13, L14, choose]

7.1 **Integrability implies $D$ null.** Assume $f$ integrable. By step 6.1 each $E_{\sigma_k}$ is null, and $k \mapsto E_{\sigma_k}$ is a sequence of subsets of $\mathbb{R}$, so [L11] applies and $\bigcup_k E_{\sigma_k} = D$ is null by step 2.2. This is the only use of [A1] in the proof. [step 6.1, step 2.2, A1, L11]

7.2 $s = b$. By step 5.2 fix $(\alpha',\beta') \in \mathcal{W}$ with $s \in (\alpha',\beta')$. Since $\sup S = s > \alpha'$ there is $x \in S$ with $x > \alpha'$, and $x \le s$. Suppose $s < b$ and choose a real $y$ with $s < y < \min\{b, \beta'\}$, possible because $s < b$ and $s < \beta'$. Then $\alpha' < x \le s < y < \beta'$, so $[x,y] \subseteq (\alpha',\beta')$, and appending $y$ to a partition of $[a,x]$ witnessing $x \in S$ gives one for $[a,y]$ by [L1]; hence $y \in S$ with $y > \sup S$, which is impossible. [step 6.2, L1, L13, L14, choose]

8.1 $b \in S$. By step 5.2 fix $(\alpha'',\beta'') \in \mathcal{W}$ with $b \in (\alpha'',\beta'')$. Since $\sup S = b > \alpha''$ there is $x \in S$ with $x > \alpha''$ and $x \le b$. If $x = b$ there is nothing to prove; otherwise $\alpha'' < x < b < \beta''$ gives $[x,b] \subseteq (\alpha'',\beta'')$, and appending $b$ as in step 7.2 puts $b$ in $S$. So there is a partition $P' = (n',t')$ of $[a,b]$, with subintervals $I'_i$ and lengths $\Delta'_i$ for $i < n'$, every subinterval of which lies in a member of $\mathcal{W}$. [step 5.2, step 7.2, L1, L13, L14, choose]

9.1 **Good and bad subintervals.** Write $M'_i := \sup f[I'_i]$ and $m'_i := \inf f[I'_i]$. Call $i < n'$ **good** when $I'_i \subseteq W$ for some $W = (u,v) \in \mathcal{W}$ with $\omega_f([a,b]\cap(u,v)) < \sigma'$, and **bad** otherwise. For a good $i$, $I'_i \subseteq [a,b] \cap W$, so $M'_i - m'_i = \omega_f(I'_i) \le \omega_f([a,b]\cap W) < \sigma'$ by [L2] and [L4]. For a bad $i$, step 8.1 supplies a member containing $I'_i$, and it is not of the second kind, so $I'_i \subseteq O_j$ for some $j \le m$. [step 8.1, L1, L2, L4]

10.1 **Bounding the bad lengths.** For $j \le m$ put $J_j := \{\, i < n' : c_j - \mu \le t'_i \text{ and } t'_{i+1} \le e_j + \mu \,\}$ and $h^{j}_i := \Delta'_i$ for $i \in J_j$, $h^{j}_i := 0$ otherwise; a bad $i$ lies in some $J_j$ by step 9.1. Each $J_j$ consists of consecutive indices, since $i < i^{\dagger} < i^{\ddagger}$ with $i,i^{\ddagger} \in J_j$ gives $c_j - \mu \le t'_i \le t'_{i^{\dagger}}$ and $t'_{i^{\dagger}+1} \le t'_{i^{\ddagger}+1} \le e_j + \mu$. [step 9.1, L1, L14, construct]

11.1 $\sum_{i<n'}h^{j}_i \le (e_j - c_j) + 2\mu$ for each $j \le m$: the sum is $0$ when $J_j = \varnothing$; otherwise let $p := \min J_j$ and let $q$ be the least natural with $q > p$ and $q \notin J_j$, which exists by [L13] since $n' \notin J_j$, so that $J_j = \{\, i : p \le i < q \,\}$ by step 10.1. Splitting the sum at $p$ and at $q$ and discarding the vanishing outer parts, then telescoping ([L12]), gives $\sum_{i<n'}h^{j}_i = \sum_{i=p}^{q-1}\Delta'_i = t'_q - t'_p \le (e_j+\mu) - (c_j-\mu)$, using $p \in J_j$ and $q-1 \in J_j$. [step 10.1, L12, L13, L14]

12.1 Put $\beta_i := \Delta'_i$ for bad $i$ and $\beta_i := 0$ for good $i$. Then $\beta_i \le \sum_{j \le m}h^{j}_i$ pointwise by step 10.1, all terms being nonnegative, so by [L12] and step 11.1, $\sum_{i<n'}\beta_i \le \sum_{j\le m}\sum_{i<n'}h^{j}_i \le \sum_{j\le m}\bigl((e_j-c_j)+2\mu\bigr) \le \tau'$, the last step by step 4.2. [step 4.2, step 10.1, step 11.1, L12, L14]

13.1 For every $i < n'$, $(M'_i-m'_i)\Delta'_i \le \sigma'\Delta'_i + 2M_{+}\beta_i$: for good $i$ by step 9.1 and $\beta_i \ge 0$, for bad $i$ by $M'_i - m'_i \le 2M_{+}$ from [L2] and $\beta_i = \Delta'_i$. Summing over $i < n'$ and using [L12], [L1] and step 12.1: $U(f,P')-L(f,P') \le \sigma'(b-a) + 2M_{+}\tau' = \varepsilon\cdot 2^{-1} + \varepsilon \cdot 4^{-1} < \varepsilon$. [step 2.3, step 9.1, step 12.1, L1, L2, L12, L14]

14.1 The real $\varepsilon > 0$ of step 2.3 was arbitrary and step 13.1 produced a partition with $U - L < \varepsilon$, so $f$ is integrable by [L3]. With step 7.1 this proves both implications, and the criterion is established; the forward half is steps 1.1, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1 and 7.1, working with $\sigma, \tau, P, B, \chi, \lambda$, and the converse half is the steps named in step 2.3, working with $\sigma', \tau', P', \mathcal{W}, S$. [step 7.1, step 2.3, step 13.1, L3] ∎

## Remarks

- **What the two halves cost.** The forward half is a single application of Riemann's criterion for each threshold $\sigma$, plus the countable union; the backward half is where all the work is, and it is entirely a covering argument: the bad set is compact and null, hence of content zero, hence coverable by finitely many open intervals of small total length, and the rest of $[a,b]$ is chopped up by Cousin's construction into pieces of oscillation below $\sigma$.

- **Why Cousin's construction and not a Lebesgue number.** Step 6.2 to step 8.1 build the partition directly from the completeness of $\mathbb{R}$: the set of right endpoints reachable by a good partition is nonempty and bounded, and its supremum is shown to be $b$ and to be attained. This uses no sequence, no subsequence and no choice, whereas the usual Lebesgue-number argument selects a bad interval for each $n$ and then extracts a convergent subsequence, which costs countable choice. Since the whole point of this item's choice ledger is that the backward implication is a ZF theorem, the choice-free route is the one taken.

- **The superlevel sets, not the discontinuity set, are what is covered.** $D$ itself is in general not closed, so [[thm-compact-null-is-content-zero]] does not apply to it; each $E_\sigma$ **is** closed in $[a,b]$ ([[lem-oscillation-superlevel-sets-are-closed]]) and bounded, and that is exactly the hypothesis needed. The passage back from the $E_{\sigma_k}$ to $D$ is step 2.2, and it is where the countable union appears.

- **The exhaustion $D = \bigcup_k E_{1/\iota(k+1)}$ is derived here, and it is also claim 1 of [[thm-discontinuity-set-is-f-sigma]].** When this proof was written that theorem stated only the descriptive form — $D$ as the trace on the domain of an $F_\sigma$ subset of $\mathbb{R}$ — which is not the pointwise identity step 2.2 needs, so the identity was derived inline from [[thm-continuity-iff-oscillation-zero]] and the Archimedean property. The exhaustion has since been stated there as claim 1, precisely because several items were quoting it from a theorem that did not assert it. The inline derivation is retained because it is three lines and keeps this item's choice ledger readable in one place; citing claim 1 instead would be equally correct.

- **Both directions are sharp in the obvious sense.** The indicator of the Cantor set is discontinuous on an uncountable null set and is integrable; the indicator of the Smith-Volterra-Cantor set is discontinuous on a nowhere dense set that is not null and is not integrable ([[fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set]]). So neither cardinality nor category decides integrability; only measure does.
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

### `thm-well-ordering-principle`

````markdown
---
id: thm-well-ordering-principle
kind: theorem
title: "The well-ordering principle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, thm-induction-principle, lem-nat-discrete, lem-nat-trichotomy, thm-omega-is-peano-system, lem-nat-add-successor-left, lem-nat-add-identity]
aliases: [well-ordering]
landmark: true
short: "every nonempty $S\\subseteq\\mathbb N$ has a least element"
proof_strategy: contradiction
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
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$.

## Facts & Assumptions

**Given:** A nonempty subset $S \subseteq \mathbb{N}$. Define $T = \{\, n \in \mathbb{N} : \text{every } m \text{ with } m \le n \text{ satisfies } m \notin S \,\}$ (informally, no element of $S$ is $\le n$).

[L1] Induction principle: a subset of $\mathbb{N}$ that contains $0$ and is closed under $\sigma$ equals $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] $m < n \iff \sigma(m) \le n$; consequently no $k$ satisfies $n < k < \sigma(n)$ ([[lem-nat-discrete]]).

[L3] Exactly one of $s < n$, $s = n$, $n < s$ holds ([[lem-nat-trichotomy]]); and $n < s \iff \sigma(n) \le s$ ([[lem-nat-discrete]]).

[L4] $\sigma$ is injective (Peano axiom P2) ([[thm-omega-is-peano-system]]).

[L5] $\sigma(a) + i = \sigma(a + i)$ for all $a, i$ (the left successor law, [[lem-nat-add-successor-left]]).

[L6] $0 + k = k$ for all $k$ ([[lem-nat-add-identity]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $S$ is nonempty but has no least element. [assume-contra]

1.2 If $m < \sigma(n)$ then $m \le n$: by [L2] applied to $m$ and $\sigma(n)$ we get $\sigma(m) \le \sigma(n)$, say $\sigma(m) + i = \sigma(n)$; then $\sigma(m + i) = \sigma(m) + i = \sigma(n)$ [L5], so $m + i = n$ by injectivity [L4], hence $m \le n$. [L2, L4, L5]

2.1 First, $0 \in T$: if $0 \in S$ then $0 \le s$ for all $s \in S$, since $0 + s = s$ [L6], making $0$ a least element, contrary to the assumption; hence $0 \notin S$; moreover $m \le 0$ forces $m = 0$, because $m \ne 0$ would give $0 < m$ (as $0 + m = m$ [L6] with $m \ne 0$) while $m \le 0$ gives $m < 0$, and [L3] admits at most one of these; so every $m \le 0$ lies outside $S$. [step 1.1, L3, L6, given]

2.2 Next, $T$ is closed under $\sigma$: assume $n \in T$; if $\sigma(n) \in S$ then no $s \in S$ satisfies $s < \sigma(n)$ (else $s \le n$ by step 1.2, so $s \notin S$ because $n \in T$, a contradiction), hence $\sigma(n) \le s$ for all $s \in S$ by [L3], making $\sigma(n)$ a least element, contrary to the assumption; therefore $\sigma(n) \notin S$, and any $m$ with $m \le \sigma(n)$ satisfies $m = \sigma(n)$ or $m \ne \sigma(n)$; in the second case $m \le \sigma(n)$ together with $m \ne \sigma(n)$ gives $m < \sigma(n)$ by the definition of the strict order, hence $m \le n$ by step 1.2 and $m \notin S$ because $n \in T$, while in the first case $m = \sigma(n) \notin S$; so every $m \le \sigma(n)$ lies outside $S$, giving $\sigma(n) \in T$. [step 1.1, step 1.2, L3]

3.1 By the induction principle [L1], from $0 \in T$ and closure under $\sigma$, $T = \mathbb{N}$; then for every $n$, taking $m = n \le n$ shows $n \notin S$, so $S = \varnothing$, contradicting nonemptiness; therefore $S$ has a least element. [step 2.1, step 2.2, L1, discharge-contradiction] ∎
````


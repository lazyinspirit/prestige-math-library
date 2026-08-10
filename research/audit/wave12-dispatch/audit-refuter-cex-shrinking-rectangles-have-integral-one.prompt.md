# Audit proof-refuter brief — Wave 12, A6

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
For an `ai-generated` Statement or consumer, actively search for a
counterexample or a failure in the witness or cited generated premise. A false
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

## Selection reasons

- critical risk (10): 11 declared dependencies; 11 cited facts; 7 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language

## Target item — `cex-shrinking-rectangles-have-integral-one`

Normalized current SHA-256: `52fe2fd8da9a1f07faaf7efcb05f20640f6ee2abd95c21a638423649c359874a`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cex-shrinking-rectangles-have-integral-one
kind: counterexample
title: "Shrinking rectangles converge pointwise to zero while every integral equals one"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-darboux-integral, thm-finitely-many-discontinuities-integrable, lem-changing-a-function-at-finitely-many-points, lem-integral-elementary-bounds, thm-additivity-over-subintervals, def-oriented-integral, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, §4.4"
      url: "https://open.umn.edu/opentextbooks/textbooks/174"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if Riemann-integrable functions on $[0,1]$ converge
pointwise to $0$, then their integrals converge to $0$.

For $k\in\mathbb{N}$ put $a_k:=\iota(k+1)$, the positive canonical natural in
$\mathbb{R}$, and define

$$r_k(x):=\begin{cases}a_k,&0<x\le1/a_k,\\0,&x=0\text{ or }1/a_k<x\le1.\end{cases}$$

Then $r_k\to0$ pointwise while $\int_0^1r_k=1$ for every $k$.

## Facts & Assumptions

**Given:** The functions $r_k$ in the Statement, with $a_k=\iota(k+1)>0$.

[L1] For every real $\varepsilon>0$ there is $N\ge1$ with $1/\iota(N)<\varepsilon$; canonical naturals increase and their positive reciprocals decrease ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] A bounded function on a closed interval with only finitely many possible discontinuities is Riemann integrable ([[thm-finitely-many-discontinuities-integrable]], [[def-darboux-integral]]).

[L3] Changing an integrable function at finitely many points preserves its integrability and integral ([[lem-changing-a-function-at-finitely-many-points]]).

[L4] A constant $c$ has integral $c(v-u)$ on $[u,v]$, and integrals add over adjacent subintervals, including the oriented convention at coincident endpoints ([[lem-integral-elementary-bounds]], [[thm-additivity-over-subintervals]], [[def-oriented-integral]]).

[L5] Pointwise convergence of $(f_k)$ to $f$ means that for every $x$ and every $\varepsilon>0$ there is an $N$ such that $k\ge N$ implies $|f_k(x)-f(x)|<\varepsilon$; uniform convergence requires one such $N$ for every $x$ simultaneously ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $r_k$ is bounded and is continuous except possibly at $0$ and $1/a_k$, so it is integrable by [L2]. [L2]

1.2 Let $q_k$ equal $a_k$ on $[0,1/a_k]$ and $0$ on $(1/a_k,1]$. The functions $q_k$ and $r_k$ differ only at $0$, so they have the same integral by [L3]. [L3, construct]

1.3 At $x=0$ one has $r_k(0)=0$ for all $k$. If $x>0$, choose $N$ with $1/\iota(N)<x$; for $k\ge N$, monotonicity of the canonical naturals gives $1/a_k<x$, hence $r_k(x)=0$. Thus $r_k\to0$ pointwise. [L1, L5, choose]

1.4 To see explicitly that the convergence is not uniform, take $\varepsilon:=1/2$. For every proposed $N\in\mathbb N$, choose $k:=N$ and $x_N:=1/a_N$; then $|r_N(x_N)-0|=a_N\ge1>\varepsilon$. Thus the uniform quantifier condition in [L5] fails. [given, L1, L5]

2.1 By [L3] and [L4], endpoint values do not affect either piece, and splitting at $1/a_k$ when it lies in the interior, with the coincident-endpoint convention otherwise, gives $\int_0^1q_k=a_k(1/a_k)+0=1$. [step 1.2, L3, L4, algebra]

3.1 Steps 1.2 and 2.1 give $\int_0^1r_k=1$ for every $k$, whereas the integral of the zero function is $0$. [step 1.2, step 2.1, L3, L4]

4.1 The sequence therefore converges pointwise to $0$ but its integrals do not converge to the integral of the limit, refuting the claim. [step 1.3, step 3.1] ∎
````

## Wave 12 provenance row

```json
{
  "id": "cex-shrinking-rectangles-have-integral-one",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "Shrinking rectangles converge pointwise to zero while every integral equals one: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
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
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let $\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number $n \\ge 1$ such that $$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$ where $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and $1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard we abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$. This is the **reciprocal form** of the Archimedean property. [[thm-of-archimedean]] on its own delivers only the assertion that the canonical naturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that the reciprocals of the naturals get below every positive bound, is the statement above, and it is recorded separately so that no proof has to reconstruct the inversion step in passing.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "L1",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and multiplicative identity $1_F$. Define $\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$ ([[def-natural-numbers]], [[thm-recursion]]): $$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$ $\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written $n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times. **Why the notation is needed at all.** A natural number in this library is a von Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an element of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when $n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and $x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field, and writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an informal text would write $1/(k+1)$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for $n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number $\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$ and $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$: - $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$; - the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$; - $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b \\in F$. 1. If $a > 0$ then $a^{-1} > 0$. 2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-finitely-many-discontinuities-integrable",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded ([[def-bounded-set]]). Suppose there are $r \\in \\mathbb{N}$ and points $d_0, \\dots, d_{r-1} \\in [a,b]$ such that $f$ is continuous ([[def-continuity-real]]) at every point of $[a,b]$ other than $d_0, \\dots, d_{r-1}$; that is, every discontinuity of $f$ ([[def-classification-of-discontinuities]]) occurs among those $r$ listed points. Then $f$ is Riemann integrable on $[a,b]$ ([[def-darboux-integral]]). For $r = 0$ the hypothesis says $f$ is continuous on $[a,b]$ and the conclusion is [[thm-continuous-implies-integrable]]; the argument below covers that case without a separate treatment. Repetitions in the list are allowed and harmless, and no claim is made that the listed points **are** discontinuities: the hypothesis is one-sided, so a finite superset of the discontinuity set is enough. **Nothing is said about the kind of the discontinuities.** They may be removable, jumps, or essential ([[def-classification-of-discontinuities]]); only their number matters. Boundedness is a genuine hypothesis, since an unbounded function has no Darboux sums at all ([[def-darboux-sums]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-darboux-integral",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded ([[def-bounded-set]]). Write $\\mathcal{P}$ for the set of all partitions of $[a,b]$ ([[def-partition-and-refinement]]) and put $$\\mathcal{L} \\;:=\\; \\{\\, L(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}, \\qquad \\mathcal{U} \\;:=\\; \\{\\, U(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}$$ for the sets of lower and of upper Darboux sums ([[def-darboux-sums]]). ### Both extrema exist **$\\mathcal{P}$ is nonempty**: the pair $(1, t)$ with $t_0 := a$ and $t_k := b$ for $k \\ge 1$ is a partition of $[a,b]$, since $a < b$. So $\\mathcal{L}$ and $\\mathcal{U}$ are nonempty. **$\\mathcal{L}$ is bounded above and $\\mathcal{U}$ is bounded below.** Fix any $Q \\in \\mathcal{P}$. By claim 2 of [[lem-refinement-inequalities]], $L(f,P) \\le U(f,Q)$ for every $P \\in \\mathcal{P}$, so $U(f,Q)$ is an upper bound of $\\mathcal{L}$; and $L(f,Q) \\le U(f,P)$ for every $P$, so $L(f,Q)$ is a lower bound of $\\mathcal{U}$. Hence a nonempty set bounded above has a supremum ([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum ([[thm-infimum-property]], [[def-infimum]]), each unique ([[lem-sup-unique]]). The **lower** and **upper Darboux integrals** of $f$ over $[a,b]$ are the real numbers $$\\underline{\\int_a^b} f \\;:=\\; \\sup \\mathcal{L} \\;=\\; \\sup_{P} L(f,P), \\qquad \\overline{\\int_a^b} f \\;:=\\; \\inf \\mathcal{U} \\;=\\; \\inf_{P} U(f,P) .$$ ### The lower integral never exceeds the upper one $$\\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f .$$ Indeed, for each fixed $Q \\in \\mathcal{P}$ the number $U(f,Q)$ is an upper bound of $\\mathcal{L}$, so the least upper bound satisfies $\\underline{\\int_a^b} f \\le U(f,Q)$. As $Q$ was arbitrary, $\\underline{\\int_a^b}f$ is a lower bound of $\\mathcal{U}$, and the greatest lower bound satisfies $\\underline{\\int_a^b} f \\le \\overline{\\int_a^b} f$ ([[def-infimum]]). Moreover, for **every** partition $P$, $$L(f,P) \\;\\le\\; \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f \\;\\le\\; U(f,P) ,$$ the outer inequalities because a member of a set is at most its supremum and at least its infimum. ### Integrability $f$ is **Darboux integrable on $[a,b]$**, and on this page simply **integrable**, when $$\\underline{\\int_a^b} f \\;=\\; \\overline{\\int_a^b} f ,$$ and then the common value is written $$\\int_a^b f \\qquad \\text{or} \\qquad \\int_a^b f(x)\\,\\mathrm{d}x ,$$ the **integral of $f$ over $[a,b]$**. It is a single well-determined real number, being the common value of two numbers each of which is unique ([[lem-sup-unique]]). Without the displayed equality the symbol $\\int_a^b f$ is not defined and is never written. **The inequality above is the whole difficulty.** By the previous paragraph integrability is *never* a question of one integral exceeding the other, only of the gap $\\overline{\\int_a^b} f - \\underline{\\int_a^b} f \\ge 0$ being $0$; and by [[thm-riemann-criterion]] that gap is $0$ exactly when a single partition can be found making $U(f,P) - L(f,P)$ small. Whether that is possible is settled completely, in terms of the discontinuities of $f$, by [[thm-lebesgue-criterion]]. **\"Riemann integrable\" means the same thing here.** The definition above is Darboux's. Riemann's own definition, in terms of tagged partitions of small mesh, is [[def-tagged-partition-and-riemann-sum]], and the two define the same class of functions with the same integral by [[thm-darboux-equals-riemann]]. Until that theorem is proved the two phrases are kept apart; after it they are used interchangeably, as they are throughout the literature.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-changing-a-function-at-finitely-many-points",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be integrable ([[def-darboux-integral]]), let $E \\subseteq [a,b]$ be finite ([[def-countable]], [[def-equinumerous]]), and let $g : [a,b] \\to \\mathbb{R}$ satisfy $$g(x) \\;=\\; f(x) \\qquad \\text{for every } x \\in [a,b] \\setminus E .$$ Then $g$ is integrable on $[a,b]$ and $$\\int_a^b g \\;=\\; \\int_a^b f .$$ In particular the values of an integrand at the endpoints of the interval, and at any finite set of points, are irrelevant to both questions.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-integral-elementary-bounds",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ satisfy $$m \\;\\le\\; f(x) \\;\\le\\; M \\qquad \\text{for every } x \\in [a,b],$$ with $m, M$ real. Then $f$ is bounded ([[def-bounded-set]]), so its Darboux sums and integrals are defined ([[def-darboux-sums]], [[def-darboux-integral]]), and for **every** partition $P$ of $[a,b]$ ([[def-partition-and-refinement]]) $$m(b-a) \\;\\le\\; L(f,P) \\;\\le\\; \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f \\;\\le\\; U(f,P) \\;\\le\\; M(b-a) .$$ In particular, taking $f$ to be the constant function with value $c$: $$\\int_a^b c \\;=\\; c\\,(b-a) ,$$ the constant function being integrable, with $L(f,P) = U(f,P) = c(b-a)$ for every partition $P$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-additivity-over-subintervals",
      "source_section": "Statement",
      "quote": "Let $a < c < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded ([[def-bounded-set]]). Then: 1. $f$ is integrable on $[a,b]$ ([[def-darboux-integral]]) **if and only if** its restrictions to $[a,c]$ and to $[c,b]$ are integrable; 2. and in that case $$\\int_a^b f \\;=\\; \\int_a^c f \\;+\\; \\int_c^b f .$$ 3. **Oriented form.** Let $\\alpha < \\beta$ be reals, let $f : [\\alpha,\\beta] \\to \\mathbb{R}$ be integrable, and let $u, v, w \\in [\\alpha,\\beta]$ be arbitrary. Then, with the convention of [[def-oriented-integral]], $$\\int_u^v f \\;+\\; \\int_v^w f \\;=\\; \\int_u^w f .$$ Claim 3 is where [[def-oriented-integral]] earns its place: it holds for every arrangement of the three points, including the degenerate ones, and it is the form used everywhere below.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-oriented-integral",
      "source_section": "Definition",
      "quote": "**Why this item is first.** The published definition of the integral does not cover this page. [[def-darboux-integral]] is stated for reals $a < b$, because the partitions it quantifies over are those of [[def-partition-and-refinement]], whose standing hypothesis is $a < b$: with $a = b$ the chain $a = t_0 < \\dots < t_n = b$ is unsatisfiable. So $\\int_a^b f$ is an undefined symbol whenever $a \\ge b$, and every additivity statement below would be ill-formed as it is usually written. This item extends the notation, and nothing else: the object it names is still the Darboux integral of [[def-darboux-integral]]. Let $u, v \\in \\mathbb{R}$ and write $$[u \\wedge v,\\ u \\vee v] \\;:=\\; \\text{the closed interval with endpoints } u \\text{ and } v$$ ([[def-interval]]). Let $f$ be a real-valued function whose domain contains that interval. Say that **$f$ is integrable between $u$ and $v$** when either $u = v$, or $u \\ne v$ and the restriction of $f$ to $[u \\wedge v,\\ u \\vee v]$ is bounded ([[def-bounded-set]]) and Darboux integrable there ([[def-darboux-integral]], [[def-darboux-sums]]). For such $f$ define $$\\int_u^v f \\;:=\\; \\begin{cases} \\text{the Darboux integral of } f \\text{ over } [u,v] & \\text{if } u < v, \\\\[2pt] 0 & \\text{if } u = v, \\\\[2pt] -\\displaystyle\\int_v^u f & \\text{if } u > v. \\end{cases}$$ **There is nothing to check for consistency.** The three clauses are indexed by the three cases of trichotomy, $u < v$, $u = v$ and $u > v$, which are mutually exclusive and exhaustive; no pair of them ever applies to the same $(u,v)$. In particular the first clause is untouched, so on $u < v$ this is the published integral verbatim and every published theorem about it applies unchanged. **The middle clause is a stipulation, not a computation.** It is *not* claimed that $0$ is a value forced by the $u < v$ definition in any limiting sense; that definition simply says nothing at $u = v$, and $\\int_u^u f := 0$ is what is written there. It is also unconditional: no hypothesis on $f$ beyond being defined at $u$ is asked for, since the case $u = v$ never refers to a partition. ### The two consequences used throughout the page **Antisymmetry, for every pair.** For all reals $u, v$ with $f$ integrable between them, $$\\int_u^v f \\;=\\; -\\int_v^u f .$$ Indeed if $u < v$ then $v > u$ and the third clause reads $\\int_v^u f = -\\int_u^v f$, which rearranges to the display; if $u = v$ both sides are $0$; and if $u > v$ the third clause is the display itself. **Absolute values agree.** Consequently $\\bigl|\\int_u^v f\\bigr| = \\bigl|\\int_v^u f\\bigr|$ for every such pair. **An obligation recorded here and discharged elsewhere.** With this convention the additivity identity $$\\int_u^v f \\;+\\; \\int_v^w f \\;=\\; \\int_u^w f$$ holds for **every** arrangement of $u, v, w$ in an interval on which $f$ is integrable, not only for $u < v < w$. That is a theorem and not part of this definition; it is proved as the last clause of [[thm-additivity-over-subintervals]], and nothing on this page uses it before it is proved there.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
      "source_section": "Definition",
      "quote": "Let $X$ be a set and, for each $k \\in \\mathbb{N}$, let $f_k : X \\to \\mathbb{R}$ be a real-valued function ([[def-function-space]]). Let $f : X \\to \\mathbb{R}$. The sequence $(f_k)$ **converges pointwise** to $f$ on $X$ when, for every $x \\in X$, the real sequence $(f_k(x))$ converges to $f(x)$ ([[def-real-limit]]). Thus the index after which $|f_k(x)-f(x)|<\\varepsilon$ may depend on both $\\varepsilon$ and $x$. The sequence $(f_k)$ **converges uniformly** to $f$ on $X$ when $$(\\forall \\varepsilon>0)(\\exists N\\in\\mathbb{N})(\\forall k\\ge N)(\\forall x\\in X)\\quad |f_k(x)-f(x)|<\\varepsilon,$$ where $\\varepsilon$ ranges over the positive reals. Here one index $N$ serves every point of $X$. The sequence $(f_k)$ is **uniformly Cauchy** on $X$ when $$(\\forall \\varepsilon>0)(\\exists N\\in\\mathbb{N})(\\forall m,n\\ge N)(\\forall x\\in X)\\quad |f_m(x)-f_n(x)|<\\varepsilon.$$ For each of the three notions above, restricting the error to positive rationals gives an equivalent condition. The real-error condition immediately implies the rational-error condition. Conversely, given a real $\\eta>0$, choose $n\\ge1$ with $1/n<\\eta$ by [[cor-archimedean-reciprocal]]; the condition for the positive rational $1/n$ implies the condition for $\\eta$. The real-error form is used because it makes the uniform quantifiers transparent.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "1.4"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Each $r_k$ is bounded and is continuous except possibly at $0$ and $1/a_k$, so it is integrable by [L2].",
      "step": "1.1",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Let $q_k$ equal $a_k$ on $[0,1/a_k]$ and $0$ on $(1/a_k,1]$. The functions $q_k$ and $r_k$ differ only at $0$, so they have the same integral by [L3].",
      "step": "1.2",
      "inputs": [
        "L3",
        "construct"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "At $x=0$ one has $r_k(0)=0$ for all $k$. If $x>0$, choose $N$ with $1/\\iota(N)<x$; for $k\\ge N$, monotonicity of the canonical naturals gives $1/a_k<x$, hence $r_k(x)=0$. Thus $r_k\\to0$ pointwise.",
      "step": "1.3",
      "inputs": [
        "L1",
        "L5",
        "choose"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "To see explicitly that the convergence is not uniform, take $\\varepsilon:=1/2$. For every proposed $N\\in\\mathbb N$, choose $k:=N$ and $x_N:=1/a_N$; then $|r_N(x_N)-0|=a_N\\ge1>\\varepsilon$. Thus the uniform quantifier condition in [L5] fails.",
      "step": "1.4",
      "inputs": [
        "given",
        "L1",
        "L5"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By [L3] and [L4], endpoint values do not affect either piece, and splitting at $1/a_k$ when it lies in the interior, with the coincident-endpoint convention otherwise, gives $\\int_0^1q_k=a_k(1/a_k)+0=1$.",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "L3",
        "L4",
        "algebra"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Steps 1.2 and 2.1 give $\\int_0^1r_k=1$ for every $k$, whereas the integral of the zero function is $0$.",
      "step": "3.1",
      "inputs": [
        "step 1.2",
        "step 2.1",
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "The sequence therefore converges pointwise to $0$ but its integrals do not converge to the integral of the limit, refuting the claim.",
      "step": "4.1",
      "inputs": [
        "step 1.3",
        "step 3.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "cex-shrinking-rectangles-have-integral-one: the Statement introduces no possibly empty family requiring a witness; its sequence domains are N or its displayed witness has a fixed nonempty domain."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.3: At $x=0$ one has $r_k(0)=0$ for all $k$. If $x>0$, choose $N$ with $1/\\iota(N)<x$; for $k\\ge N$, monotonicity of the canonical naturals gives $1/a_k<x$, hence $r_k(x)=0$. Thus $r_k\\to0$ pointwise."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "cex-shrinking-rectangles-have-integral-one: there is no cardinal, dimension, or exponent parameter with a separate value-one branch in this claim."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 1.2: Let $q_k$ equal $a_k$ on $[0,1/a_k]$ and $0$ on $(1/a_k,1]$. The functions $q_k$ and $r_k$ differ only at $0$, so they have the same integral by [L3]."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 2.1: By [L3] and [L4], endpoint values do not affect either piece, and splitting at $1/a_k$ when it lies in the interior, with the coincident-endpoint convention otherwise, gives $\\int_0^1q_k=a_k(1/a_k)+0=1$."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "cex-shrinking-rectangles-have-integral-one: the proof makes no choice from a family whose nonemptiness is not already supplied; any witness used is explicit or uniquely determined."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "cex-shrinking-rectangles-have-integral-one: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "cex-shrinking-rectangles-have-integral-one: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the A2 contract. Alpha assigns the independent proof-refuter route at A5/A6."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
    "declared_target": "def-pointwise-uniform-and-uniformly-cauchy-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
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
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-finitely-many-discontinuities-integrable",
    "declared_target": "thm-finitely-many-discontinuities-integrable",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-changing-a-function-at-finitely-many-points",
    "declared_target": "lem-changing-a-function-at-finitely-many-points",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
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
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-additivity-over-subintervals",
    "declared_target": "thm-additivity-over-subintervals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "def-oriented-integral",
    "declared_target": "def-oriented-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
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
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
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
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
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
    "source": "cex-shrinking-rectangles-have-integral-one",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
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

## Full exact-current text of every cited or declared item (11)

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

### `def-pointwise-uniform-and-uniformly-cauchy-convergence`

````markdown
---
id: def-pointwise-uniform-and-uniformly-cauchy-convergence
kind: definition
title: "Pointwise convergence, uniform convergence, and the uniformly Cauchy condition for sequences of real-valued functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-space, def-real-limit, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a set and, for each $k \in \mathbb{N}$, let
$f_k : X \to \mathbb{R}$ be a real-valued function
([[def-function-space]]). Let $f : X \to \mathbb{R}$.

The sequence $(f_k)$ **converges pointwise** to $f$ on $X$ when, for every
$x \in X$, the real sequence $(f_k(x))$ converges to $f(x)$
([[def-real-limit]]). Thus the index after which
$|f_k(x)-f(x)|<\varepsilon$ may depend on both $\varepsilon$ and $x$.

The sequence $(f_k)$ **converges uniformly** to $f$ on $X$ when

$$(\forall \varepsilon>0)(\exists N\in\mathbb{N})(\forall k\ge N)(\forall x\in X)\quad |f_k(x)-f(x)|<\varepsilon,$$

where $\varepsilon$ ranges over the positive reals. Here one index $N$ serves
every point of $X$.

The sequence $(f_k)$ is **uniformly Cauchy** on $X$ when

$$(\forall \varepsilon>0)(\exists N\in\mathbb{N})(\forall m,n\ge N)(\forall x\in X)\quad |f_m(x)-f_n(x)|<\varepsilon.$$

For each of the three notions above, restricting the error to positive
rationals gives an equivalent condition. The real-error condition immediately
implies the rational-error condition. Conversely, given a real $\eta>0$,
choose $n\ge1$ with $1/n<\eta$ by
[[cor-archimedean-reciprocal]]; the condition for the positive rational
$1/n$ implies the condition for $\eta$. The real-error form is used because
it makes the uniform quantifiers transparent.
````

### `lem-changing-a-function-at-finitely-many-points`

````markdown
---
id: lem-changing-a-function-at-finitely-many-points
kind: lemma
title: "Changing an integrable function at finitely many points changes neither its integrability nor its integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-linearity-of-the-integral, thm-riemann-criterion, lem-integral-elementary-bounds, def-darboux-sums, def-partition-and-refinement, def-darboux-integral, lem-finite-sum-laws, def-finite-sum, thm-induction-principle, def-countable, def-equinumerous, thm-of-archimedean, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, def-bounded-set, def-interval, def-ordered-field, def-complete-ordered-field]
forward_refs: [fs-the-integral-function-is-always-a-primitive]
justified_by: []
aliases: []
landmark: false
short: "finitely many values do not matter"
proof_strategy: induction
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
    - title: "J. Lebl, Basic Analysis I, Properties of the Riemann integral"
      url: "https://www.jirka.org/ra/html/sec_rintprop.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]), let $E \subseteq [a,b]$ be finite
([[def-countable]], [[def-equinumerous]]), and let $g : [a,b] \to \mathbb{R}$
satisfy

$$g(x) \;=\; f(x) \qquad \text{for every } x \in [a,b] \setminus E .$$

Then $g$ is integrable on $[a,b]$ and

$$\int_a^b g \;=\; \int_a^b f .$$

In particular the values of an integrand at the endpoints of the interval, and at
any finite set of points, are irrelevant to both questions.

## Facts & Assumptions

**Given:** Reals $a < b$, an integrable $f : [a,b] \to \mathbb{R}$, a finite $E \subseteq [a,b]$, and $g : [a,b] \to \mathbb{R}$ agreeing with $f$ off $E$. Finite means: there are $r \in \mathbb{N}$ and a bijection $e$ from $\{\, j \in \mathbb{N} : j < r \,\}$ onto $E$ ([[def-countable]], [[def-equinumerous]]).

[L1] Riemann's criterion ([[thm-riemann-criterion]]), and: an integrable function is bounded, since Darboux sums are defined only for bounded functions ([[def-darboux-sums]], [[def-bounded-set]]).

[L2] For a partition $R = (n,t)$ and a bounded function $h$ on the interval: $L(h,R) = \sum_{i<n}m_i\Delta_i$, $U(h,R) = \sum_{i<n}M_i\Delta_i$ with $m_i = \inf h[I_i] \le M_i = \sup h[I_i]$, and $L(h,R) \le \underline{\int_a^b} h \le \overline{\int_a^b} h \le U(h,R)$ ([[def-darboux-sums]], [[def-darboux-integral]]).

[L3] The uniform partition $U_N$ of $[a,b]$ into $N \ge 1$ parts has $n = N$ and every $\Delta_i$ equal to $(b-a)/\iota(N)$, and its subintervals cover $[a,b]$; the index list $t$ is strictly increasing on indices $\le N$, hence injective there ([[def-partition-and-refinement]], [[def-canonical-natural]], [[def-interval]]).

[L4] Finite sums: monotonicity in the terms, scaling, additivity, and splitting; consequently, if $x_i = 0$ for every $i < n$ except $i = j$, then $\sum_{i<n}x_i = x_j$, by splitting at $j$ and at $j+1$ and $\sum 0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 1 to 4).

[L5] Sums and scalar multiples of integrable functions are integrable, with the corresponding identity for the integrals ([[thm-linearity-of-the-integral]]); and the constant function $0$ is integrable with integral $0$ ([[lem-integral-elementary-bounds]]).

[L6] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$, and $\iota(N) > 0$ for $N \ge 1$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-naturals-positive]]).

[L7] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L8] Ordered-field arithmetic: multiplying an inequality by a nonnegative quantity and adding constants preserve it, the order is total and transitive, and a real of absolute value below every positive real is $0$ ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 **The one-point case is proved first, for a function called $w$ so that no symbol is reused.** Let $p \in [a,b]$ and let $w : [a,b] \to \mathbb{R}$ satisfy $w(x) = 0$ for every $x \ne p$; put $K := |w(p)|$, so $|w(x)| \le K$ for every $x$ and $w$ is bounded. [given, L1]

1.2 Fix $N \ge 1$ and write $U_N = (N,t)$ with subintervals $I_i$ and lengths $\Delta_i = (b-a)/\iota(N)$. Define $\theta_i := 1$ if $p \in I_i$ and $\theta_i := 0$ otherwise, for $i < N$. [L3, construct]

1.3 **Setting up the induction.** Put $h := g - f$, so that $h(x) = 0$ for every $x \notin E$, and for $j < r$ define $h_j : [a,b] \to \mathbb{R}$ by $h_j(x) := h(x)$ if $x = e(j)$ and $h_j(x) := 0$ otherwise. Each $h_j$ vanishes off the single point $e(j)$. [given, construct]

2.1 At most two indices $i < N$ have $\theta_i = 1$, and they are consecutive: if $p \in I_i \cap I_j$ with $i < j$ then $t_j \le p \le t_{i+1}$ and $t_{i+1} \le t_j$, so $t_{i+1} = t_j$ and $j = i+1$ by injectivity of $t$. Also some index has $\theta_i = 1$, since the subintervals cover $[a,b]$; let $i_0$ be the least such. [step 1.2, L3, choose]

2.2 For every $x \in [a,b]$ and every $k \le r$, $\sum_{j<k} h_j(x) = h(x)$ when $x = e(j_0)$ for some $j_0 < k$, and $\sum_{j<k}h_j(x) = 0$ otherwise: in the first case all terms with $j \ne j_0$ vanish, because $e$ is injective, and [L4] evaluates the sum; in the second every term is $0$. [step 1.3, L4]

3.1 For every $i < N$: if $\theta_i = 0$ then $w$ vanishes on $I_i$, so $m_i = M_i = 0$, where $m_i$ and $M_i$ are the extreme values of $w$ on $I_i$; and always $-K\theta_i \le m_i \le M_i \le K\theta_i$. [step 1.2, step 2.1, L2, L8]

3.2 Define $y_i := \Delta_i$ for $i = i_0$ and $y_i := 0$ otherwise, and $z_i := \Delta_i$ for $i = i_0+1$ with $i_0 + 1 < N$, and $z_i := 0$ otherwise. Then $\theta_i\Delta_i \le y_i + z_i$ for every $i < N$ by step 2.1, and $\sum_{i<N}(y_i+z_i) \le 2(b-a)/\iota(N)$ by [L4] and [L3]. [step 1.2, step 2.1, L3, L4, construct]

3.3 Let $Q(k)$, for $k \le r$, be the statement that the function $H_k : x \mapsto \sum_{j<k}h_j(x)$ is integrable on $[a,b]$ with $\int_a^b H_k = 0$. [step 2.2, construct]

4.1 By step 3.1 and monotonicity of finite sums, $U(w,U_N) - L(w,U_N) = \sum_{i<N}(M_i-m_i)\Delta_i \le \sum_{i<N}2K\theta_i\Delta_i \le 4K(b-a)/\iota(N)$, and likewise $-2K(b-a)/\iota(N) \le L(w,U_N)$ and $U(w,U_N) \le 2K(b-a)/\iota(N)$. [step 3.1, step 3.2, L2, L4, L8]

4.2 **Base.** $H_0$ is the constant function $0$, integrable with integral $0$ by [L5], so $Q(0)$ holds. [base, step 3.3, L5]

4.3 **Induction hypothesis.** Fix $k < r$ and assume $Q(k)$. [ih, step 3.3]

5.1 Given a real $\eta > 0$, [L6] supplies $N$ with $4K(b-a)/\iota(N) < \eta$, so $w$ satisfies Riemann's criterion and is integrable by [L1]. [step 4.1, L1, L6, L8]

5.2 Moreover $|\int_a^b w| \le 2K(b-a)/\iota(N)$ for every $N \ge 1$ by step 4.1 and [L2], and the right-hand side is below every positive real by [L6]; hence $\int_a^b w = 0$. Steps 1.1 to 5.2 therefore prove: every function on $[a,b]$ vanishing off a single point is integrable with integral $0$. [step 4.1, L2, L6, L8]

6.1 $H_{k+1} = H_k + h_k$ pointwise by [L4], and $h_k$ is integrable with integral $0$ by steps 5.1 and 5.2 applied to $w := h_k$ and $p := e(k)$; so $H_{k+1}$ is integrable with $\int_a^b H_{k+1} = 0 + 0 = 0$ by [L5], which is $Q(k+1)$. [step 5.1, step 5.2, step 1.3, step 4.3, L4, L5]

7.1 By [L7] with steps 4.2 and 6.1, $Q(k)$ holds for every $k \le r$; at $k = r$, and by step 2.2, $H_r = h$, so $h$ is integrable with $\int_a^b h = 0$. [step 2.2, step 4.2, step 4.3, step 6.1, L7]

8.1 Hence $g = f + h$ is integrable with $\int_a^b g = \int_a^b f + 0 = \int_a^b f$ by [L5]. [step 7.1, L5, discharge-induction] ∎

## Remarks

- **The subtle point is that a partition point lies in two subintervals.** The subintervals of a partition are closed and overlap at their shared endpoints ([[def-partition-and-refinement]]), so the exceptional point $p$ may belong to two of them; step 2.1 proves that it belongs to at most two and that they are consecutive, and step 3.2 is what pays for that possibility, with the factor $2$ that survives into step 4.1.

- **Nothing here is an index-subset sum.** The indicator sequence $\theta$ of step 1.2 is a genuine sequence on $\{\,i : i<N\,\}$, and every estimate is applied term by term and then summed by the monotonicity clause of [[lem-finite-sum-laws]], whose clauses are stated for $\sum_{i<n}$; no sum over a subset of the index range is used.

- **The contrast with the derivative is the point of the lemma.** Changing a function at one point can destroy differentiability at that point, and changes nothing at any other point, since a limit at $x \ne p$ may be taken over a neighbourhood excluding $p$; it changes no integral at all. This is also why the integral function of an integrable $f$ cannot detect a change of $f$ at a point, which is what [[fs-the-integral-function-is-always-a-primitive]] on the companion page turns into a refutation.
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
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
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

### `thm-finitely-many-discontinuities-integrable`

````markdown
---
id: thm-finitely-many-discontinuities-integrable
kind: theorem
title: "A bounded function on $[a,b]$ that is continuous except at finitely many points is Riemann integrable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-criterion, def-continuity-real, def-classification-of-discontinuities, def-partition-and-refinement, def-darboux-sums, def-darboux-integral, lem-finite-sum-laws, def-finite-sum, def-bounded-set, thm-heine-cantor-r, def-uniform-continuity-real, thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, thm-open-set-algebra-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, thm-well-ordering-principle, thm-induction-principle, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-interval, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "finitely many discontinuities $\\Rightarrow$ integrable"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Functions with finitely many discontinuities (University of Pennsylvania)"
      url: "https://www2.math.upenn.edu/~gressman/analysis/07-integrationfuncs.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]). Suppose there are $r \in \mathbb{N}$ and points
$d_0, \dots, d_{r-1} \in [a,b]$ such that $f$ is continuous
([[def-continuity-real]]) at every point of $[a,b]$ other than
$d_0, \dots, d_{r-1}$; that is, every discontinuity of $f$
([[def-classification-of-discontinuities]]) occurs among those $r$ listed
points. Then $f$ is Riemann integrable on $[a,b]$ ([[def-darboux-integral]]).

For $r = 0$ the hypothesis says $f$ is continuous on $[a,b]$ and the conclusion
is [[thm-continuous-implies-integrable]]; the argument below covers that case
without a separate treatment. Repetitions in the list are allowed and harmless,
and no claim is made that the listed points **are** discontinuities: the
hypothesis is one-sided, so a finite superset of the discontinuity set is enough.

**Nothing is said about the kind of the discontinuities.** They may be
removable, jumps, or essential ([[def-classification-of-discontinuities]]); only
their number matters. Boundedness is a genuine hypothesis, since an unbounded
function has no Darboux sums at all ([[def-darboux-sums]]).

## Facts & Assumptions

**Given:** Reals $a < b$; a bounded $f : [a,b] \to \mathbb{R}$; a real $M_{+} > 0$ with $|f(x)| \le M_{+}$ for every $x \in [a,b]$; and $r \in \mathbb{N}$ with points $d_0, \dots, d_{r-1} \in [a,b]$ such that $f$ is continuous at every $x \in [a,b]$ with $x \ne d_k$ for all $k < r$.

[L1] For a partition $P = (n,t)$ of $[a,b]$: $n \ge 1$, $\Delta_i = t_{i+1}-t_i > 0$, $\sum_{i<n}\Delta_i = b-a$, $\Delta_i \le \|P\|$, no $t_j$ with $j \le n$ lies strictly between $t_i$ and $t_{i+1}$, inserting a point does not increase the mesh and adds that point to $\operatorname{pts}(P)$, and the uniform partition $U_N$ has mesh $(b-a)/\iota(N)$ ([[def-partition-and-refinement]]).

[L2] $U(f,P) - L(f,P) = \sum_{i<n}(M_i-m_i)\Delta_i$, $M_i - m_i = \sup\{|f(x)-f(y)| : x,y \in I_i\}$, and $0 \le M_i - m_i \le 2M_{+}$ ([[def-darboux-sums]]).

[L3] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P)-L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L4] A closed bounded subset of $\mathbb{R}$ is compact, and a continuous real function on a compact subset $K$ of $\mathbb{R}$ is uniformly continuous on $K$: for every real $\eta > 0$ there is a real $\delta > 0$ with $|g(x)-g(y)| < \eta$ for all $x,y \in K$ with $|x-y| < \delta$. This holds for $K = \varnothing$ as well, the condition being vacuous there ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]], [[thm-heine-cantor-r]], [[def-uniform-continuity-real]]).

[L5] Every open interval is an open set, an arbitrary union of open sets is open, a complement of an open set is closed, an intersection of closed sets is closed, and $[a,b]$ is closed and bounded ([[def-interval]], [[def-open-and-closed-in-r]], [[thm-open-set-algebra-r]], [[def-neighbourhood-r]], [[def-bounded-set]]).

[L6] For $u < v$ the endpoints $u$ and $v$ are adherent to $(u,v)$, so every closed set containing $(u,v)$ contains $[u,v]$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L7] If $g : A \to \mathbb{R}$ is continuous at $c \in A$ and $c \in B \subseteq A$, then the restriction $g|_B$ is continuous at $c$ as a function on $B$: the same $\delta$ works, the condition quantifying over fewer points ([[def-continuity-real]]).

[L8] Finite sums: splitting, additivity, scaling, monotonicity in the terms, and telescoping ([[def-finite-sum]], [[lem-finite-sum-laws]]). Also the interchange of two finite sums, $\sum_{i<n}\sum_{k<r}c_{i,k} = \sum_{k<r}\sum_{i<n}c_{i,k}$ for any doubly indexed family of reals. That identity is **not** one of the six clauses of [[lem-finite-sum-laws]] and is therefore proved here, by induction on $r$ ([[thm-induction-principle]]). At $r = 0$ each inner sum $\sum_{k<0}c_{i,k}$ is $0$ by the recursion clause of [[def-finite-sum]], so the left side is $\sum_{i<n}0 = 0$ by clause 2 of [[lem-finite-sum-laws]] taken with $\lambda = 0$, while the right side is an empty sum and so is $0$ as well. Passing from $r$ to $r+1$, the recursion clause and clause 1 of [[lem-finite-sum-laws]] give $\sum_{i<n}\sum_{k<r+1}c_{i,k} = \sum_{i<n}\bigl(\sum_{k<r}c_{i,k} + c_{i,r}\bigr) = \sum_{i<n}\sum_{k<r}c_{i,k} + \sum_{i<n}c_{i,r}$, which by the induction hypothesis is $\sum_{k<r}\sum_{i<n}c_{i,k} + \sum_{i<n}c_{i,r} = \sum_{k<r+1}\sum_{i<n}c_{i,k}$, again by the recursion clause. Note that $n$ is fixed throughout the induction and only $r$ varies.

[L9] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L10] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$; $\iota(N) > 0$ for $N \ge 1$ and $\iota(r) \ge 0$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L11] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; $x,y \in [c,d]$ gives $|x-y| \le d-c$ ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 Let a real $\varepsilon > 0$ be given. Put $\theta := \varepsilon \cdot \bigl(4(b-a)\bigr)^{-1}$ and $\eta := \varepsilon \cdot \bigl(16\,M_{+}(\iota(r)+1)\bigr)^{-1}$, both positive reals by [L10] and [L11]. [given, L10, L11]

2.1 Put $V := \bigcup_{k<r}\,(d_k - \eta,\ d_k + \eta)$, an open set by [L5], and $K := [a,b] \setminus V = [a,b] \cap (\mathbb{R}\setminus V)$, an intersection of two closed sets, hence closed by [L5], and bounded since $K \subseteq [a,b]$; so $K$ is compact by [L4]. [step 1.1, L4, L5, construct]

3.1 $f$ is continuous at every point of $K$: a point $x \in K$ is not any $d_k$, since $d_k \in (d_k-\eta, d_k+\eta) \subseteq V$ and $K$ misses $V$. Hence the restriction $f|_K$ is continuous on $K$ by [L7]. [step 2.1, given, L7, L11]

4.1 By [L4] applied to $f|_K$ on the compact set $K$ with the value $\theta$, fix a real $\delta > 0$ such that $|f(x)-f(y)| < \theta$ for all $x,y \in K$ with $|x-y| < \delta$. [step 2.1, step 3.1, L4, choose]

5.1 By [L10] fix a natural $N \ge 1$ with $1/\iota(N) < \delta \cdot (b-a)^{-1}$, so that the uniform partition $U_N$ has mesh $(b-a)/\iota(N) < \delta$ by [L1] and [L11]. Let $P = (n,t)$ be the partition obtained from $U_N$ by inserting, one after another, those of the $2r$ points $d_k - \eta$ and $d_k + \eta$ with $k < r$ that lie in $[a,b]$. By [L1] each insertion leaves the mesh no larger, so $\|P\| < \delta$, and $\operatorname{pts}(P)$ contains every one of those points that lies in $[a,b]$. [step 4.1, L1, L10, L11, choose, construct]

6.1 **A dichotomy for each subinterval and each $k$.** Fix $i < n$ and $k < r$, and write $c^{-} := d_k - \eta$ and $c^{+} := d_k + \eta$. Neither $c^{-}$ nor $c^{+}$ lies in the open interval $(t_i,t_{i+1})$: if such a point lies in $[a,b]$ it is a member of $\operatorname{pts}(P)$ by step 5.1, hence is some $t_j$ with $j \le n$, and no $t_j$ lies strictly between $t_i$ and $t_{i+1}$ by [L1]; and if it lies outside $[a,b]$ it is outside $[t_i,t_{i+1}]$ altogether. [step 5.1, L1, L11]

7.1 Consequently either $(t_i,t_{i+1}) \cap (c^{-},c^{+}) = \varnothing$, or $I_i \subseteq [c^{-},c^{+}]$. Suppose the intersection contains a point $z$ and let $w \in (t_i,t_{i+1})$. If $w \le c^{-}$ then $c^{-}$ lies between $w$ and $z$, both in the order-convex set $(t_i,t_{i+1})$, so $c^{-} \in (t_i,t_{i+1})$, contradicting step 6.1; likewise $w \ge c^{+}$ is impossible. So $(t_i,t_{i+1}) \subseteq (c^{-},c^{+})$. Then $c^{-} < z < t_{i+1}$ with $c^{-} \notin (t_i,t_{i+1})$ forces $c^{-} \le t_i$, and symmetrically $c^{+} \ge t_{i+1}$, that is $I_i \subseteq [c^{-},c^{+}]$. [step 6.1, L11, given]

8.1 Call $i < n$ **bad** when $I_i \subseteq [d_k-\eta, d_k+\eta]$ for some $k < r$, and **good** otherwise. If $i$ is good then by step 7.1 the open interval $(t_i,t_{i+1})$ meets no $(d_k-\eta,d_k+\eta)$, hence $(t_i,t_{i+1}) \subseteq K$; since $K$ is closed, [L6] gives $I_i = [t_i,t_{i+1}] \subseteq K$. [step 2.1, step 7.1, L6]

9.1 For a good $i$: all $x,y \in I_i$ lie in $K$ and satisfy $|x-y| \le \Delta_i \le \|P\| < \delta$ by [L1] and [L11], so $|f(x)-f(y)| < \theta$ by step 4.1; therefore $\theta$ bounds the set whose supremum is $M_i - m_i$, and $M_i - m_i \le \theta$ by [L2]. [step 4.1, step 5.1, step 8.1, L1, L2, L11]

9.2 **Bounding the bad lengths.** For $k < r$ put $J_k := \{\, i < n : d_k - \eta \le t_i \text{ and } t_{i+1} \le d_k + \eta \,\}$, so that $i$ is bad exactly when $i \in J_k$ for some $k < r$, and put $h^{k}_i := \Delta_i$ for $i \in J_k$ and $h^{k}_i := 0$ otherwise. Each $J_k$ is a set of consecutive indices: if $i < i' < i''$ with $i, i'' \in J_k$ then $d_k - \eta \le t_i \le t_{i'}$ and $t_{i'+1} \le t_{i''+1} \le d_k + \eta$, so $i' \in J_k$. [step 8.1, L1, L11, construct]

10.1 $\sum_{i<n} h^{k}_i \le 2\eta$ for each $k < r$. If $J_k = \varnothing$ the sum is $0$. Otherwise let $p := \min J_k$ and let $q$ be the least natural with $q > p$ and $q \notin J_k$, which exists by [L9] because $n \notin J_k$; by step 9.2 then $J_k = \{\, i : p \le i < q \,\}$, since an $i \in J_k$ with $i \ge q$ together with $p \in J_k$ and $p < q \le i$ would put $q \in J_k$. Splitting the sum at $p$ and at $q$ and discarding the vanishing outer parts ([L8]) gives $\sum_{i<n}h^{k}_i = \sum_{i=p}^{q-1}\Delta_i = t_q - t_p$ by telescoping, and $p \in J_k$, $q-1 \in J_k$ give $t_p \ge d_k-\eta$ and $t_q \le d_k+\eta$, whence $t_q - t_p \le 2\eta$. [step 9.2, L8, L9, L11]

11.1 Put $\beta_i := \Delta_i$ for $i$ bad and $\beta_i := 0$ for $i$ good. Then $\beta_i \le \sum_{k<r}h^{k}_i$ for every $i < n$, all terms being nonnegative and a bad $i$ lying in some $J_k$; so by [L8], $\sum_{i<n}\beta_i \le \sum_{i<n}\sum_{k<r}h^{k}_i = \sum_{k<r}\sum_{i<n}h^{k}_i \le \sum_{k<r}2\eta = 2\eta\,\iota(r)$, using step 10.1. [step 9.2, step 10.1, L8, L11]

12.1 For every $i < n$ one has $(M_i - m_i)\Delta_i \le \theta\,\Delta_i + 2M_{+}\,\beta_i$: for good $i$ this is step 9.1 together with $\beta_i \ge 0$, and for bad $i$ it follows from $M_i - m_i \le 2M_{+}$ in [L2] and $\beta_i = \Delta_i$, together with $\theta\Delta_i \ge 0$. [step 9.1, step 11.1, L2, L11]

13.1 Summing step 12.1 over $i < n$ and using [L8], [L1] and step 11.1: $U(f,P) - L(f,P) \le \theta\sum_{i<n}\Delta_i + 2M_{+}\sum_{i<n}\beta_i \le \theta(b-a) + 4M_{+}\eta\,\iota(r) \le \varepsilon\cdot 4^{-1} + \varepsilon\cdot 4^{-1} < \varepsilon$, the last estimate because $4M_{+}\eta\,\iota(r) \le 4M_{+}\eta(\iota(r)+1) = \varepsilon\cdot 4^{-1}$ by step 1.1. [step 1.1, step 11.1, step 12.1, L1, L2, L8, L10, L11]

14.1 The real $\varepsilon > 0$ of step 1.1 was arbitrary and step 13.1 produced a partition $P$ with $U(f,P) - L(f,P) < \varepsilon$, so [L3] applies and $f$ is Riemann integrable on $[a,b]$. [step 1.1, step 13.1, L3] ∎

## Remarks

- **Where the two budgets go.** The $\varepsilon/4$ of step 13.1 that is spent on the good subintervals buys uniform continuity away from the bad points; the $\varepsilon/4$ spent on the bad ones buys nothing but their total length, and it is affordable only because there are finitely many of them and $\eta$ may be chosen after $r$ is known. Both halves survive verbatim when "finitely many points" is replaced by "a set of measure zero", and that replacement is [[thm-lebesgue-criterion]].

- **The listing form of the hypothesis is deliberate.** Saying "the set of discontinuities is finite" would require a notion of finiteness and a listing theorem to use it; saying "every discontinuity is among $d_0,\dots,d_{r-1}$" is what the proof consumes and is what every application supplies. The same device is used by [[lem-finite-set-has-max]].

- **The result is genuinely weaker than what is true.** Thomae's function has infinitely many discontinuities and is integrable, and so is the indicator of the Cantor set, whose discontinuity set is uncountable. What survives is that a *finite* discontinuity set never obstructs integrability, whatever the function does at those points.

- **Choice.** The proof selects nothing from an infinite family; the only countable choice behind it is the single use inside [[thm-heine-cantor-r]], invoked at step 4.1. See [[rem-riemann-integral-choice-ledger]].
````


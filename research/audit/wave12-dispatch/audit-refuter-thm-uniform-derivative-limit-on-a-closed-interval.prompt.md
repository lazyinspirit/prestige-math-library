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

- critical risk (10): 19 declared dependencies; 17 cited facts; 7 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-uniform-derivative-limit-on-a-closed-interval`

Normalized current SHA-256: `672fba646c389da89d08837236ff90c865e757fa92331f7c56980b56d6ee56df`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-uniform-derivative-limit-on-a-closed-interval
kind: theorem
title: "If continuously differentiable functions converge at one point and their derivatives converge uniformly on a closed interval, then the functions converge uniformly to a differentiable function whose derivative is the derivative limit"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-real-limit, def-continuity-real, lem-real-and-metric-notions-agree, thm-uniform-limit-continuous-real-functions, thm-uniform-limit-interchanges-riemann-integration, thm-ftc-first-part, thm-ftc-second-part, def-derivative, def-function-limit, def-limit-point-r, def-interval, lem-uniform-integral-error-bound, thm-continuous-implies-integrable, lem-integrability-on-a-subinterval, def-oriented-integral, thm-additivity-over-subintervals, def-the-integral-function, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a<b$ be reals and let $f_k:[a,b]\to\mathbb{R}$ be continuously
differentiable: each $f_k$ is differentiable on $[a,b]$ and each derivative
$f_k'$ is continuous there ([[def-continuity-real]]). Suppose there is
$c\in[a,b]$ such that the real
sequence $(f_k(c))$ converges to $A$, and suppose $f_k'\to g$ uniformly on
$[a,b]$. Then there is a differentiable function $f:[a,b]\to\mathbb{R}$ such
that

$$f_k\longrightarrow f\ \text{ uniformly},\qquad f'=g.$$

## Facts & Assumptions

**Given:** Reals $a<b$, a point $c\in[a,b]$, continuously differentiable functions $f_k:[a,b]\to\mathbb{R}$, convergence $f_k(c)\to A$, and uniform convergence $f_k'\to g$.

[L1] A uniform limit of continuous real-valued functions is continuous, and a continuous function on $[a,b]$ is Riemann integrable ([[thm-uniform-limit-continuous-real-functions]], [[thm-continuous-implies-integrable]]).

[L2] Uniform convergence of integrable functions preserves integrability and the limit of the integrals ([[thm-uniform-limit-interchanges-riemann-integration]]).

[L3] If $s<t$, $G$ is differentiable on $[s,t]$, and $G'$ is integrable there, then $\int_s^tG'=G(t)-G(s)$ ([[thm-ftc-second-part]]). Restriction to a closed subinterval preserves differentiability and the derivative at its limit points, and integrability on $[a,b]$ passes to every nondegenerate closed subinterval ([[def-derivative]], [[def-function-limit]], [[def-limit-point-r]], [[def-interval]], [[lem-integrability-on-a-subinterval]]). Finally $\int_t^s h=-\int_s^t h$ and $\int_s^s h=0$ whenever the displayed integrals are defined ([[def-oriented-integral]]).

[L4] If $g$ is continuous, its integral function $H(x)=\int_a^xg$ is differentiable with $H'=g$; oriented additivity gives $\int_c^xg=H(x)-H(c)$ ([[thm-ftc-first-part]], [[def-the-integral-function]], [[thm-additivity-over-subintervals]]).

[L5] Sums and scalar multiples of differentiable functions are differentiable, with the corresponding derivative rules ([[thm-algebra-of-derivatives]], [[def-derivative]]).

[L6] A uniform bound $|p-q|\le\eta$ on an interval gives $\left|\int_u^v p-\int_u^v q\right|\le\eta|v-u|$ ([[lem-uniform-integral-error-bound]]).

[L7] On a subset of $\mathbb R$ with its usual subspace metric, real-native continuity is equivalent to metric-space continuity ([[lem-real-and-metric-notions-agree]]).

## Proof

**Proof technique:** constructive.

1.1 By [L7], each real-continuous derivative $f_k'$ is metric-continuous. The uniform-limit clause of [L1] makes $g$ metric-continuous, and [L7] makes $g$ real-continuous. The integrability clause of [L1] therefore makes every $f_k'$ and $g$ Riemann integrable; [L2] also gives the integrability of the uniform limit. [L1, L2, L7]

1.2 Let $\varepsilon>0$. Choose $N_0$ such that $|f_k(c)-A|<\varepsilon/2$ for $k\ge N_0$, and choose $N_1$ such that $|f_k'(x)-g(x)|<\varepsilon/\bigl(2(b-a+1)\bigr)$ for $k\ge N_1$ and all $x\in[a,b]$. [given, choose]

2.1 Fix $k$ and $x\in[a,b]$. If $c<x$, restrict $f_k$ to $[c,x]$; its derivative is $f_k'$ there and that derivative is integrable there by steps 1.1 and [L3], so the first clause of [L3] gives $f_k(x)=f_k(c)+\int_c^x f_k'$. If $x<c$, apply that clause on $[x,c]$ and then use orientation; if $x=c$, use $\int_c^c f_k'=0$. Thus in every case $f_k(x)=f_k(c)+\int_c^x f_k'$. [step 1.1, L3]

2.2 Define $H(x):=\int_a^xg$ and construct $f:[a,b]\to\mathbb{R}$ by $f(x):=A+H(x)-H(c)=A+\int_c^xg$. [step 1.1, L4, construct]

3.1 By [L4] and [L5], $H$ is differentiable with $H'=g$, and therefore the constructed function $f=A+H-H(c)$ is differentiable with $f'=g$. [step 2.2, L4, L5]

3.2 Choose $N$ at least as large as $N_0,N_1$. For $k\ge N$ and $x\in[a,b]$, steps 2.2 and 2.1 with [L6] give $|f_k(x)-f(x)|\le |f_k(c)-A|+\left|\int_c^x f_k'-\int_c^xg\right|<\varepsilon/2+\varepsilon|x-c|/\bigl(2(b-a+1)\bigr)<\varepsilon$. [step 2.2, step 2.1, step 1.2, L6, choose, algebra]

4.1 The index $N$ in step 3.2 serves every $x\in[a,b]$, so $f_k\to f$ uniformly; step 3.1 gives $f'=g$. Thus the constructed $f$ has both asserted properties. [step 3.2, step 3.1, discharge-construct] ∎
````

## Wave 12 provenance row

```json
{
  "id": "thm-uniform-derivative-limit-on-a-closed-interval",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "If continuously differentiable functions converge at one point and their derivatives converge uniformly on a closed interval, then the functions converge uniformly to a differentiable function whose derivative is the derivative limit: The open textbooks give the corresponding uniform-convergence definition, permanence/interchange theorem, completeness result, or standard counterexample; the item reindexes sequences at zero and spells out the library’s metric, Riemann-integral, endpoint, and dependency conventions. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
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
      "source": "thm-uniform-limit-continuous-real-functions",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a metric space and let $f_k:X\\to\\mathbb{R}$ be continuous for every $k\\in\\mathbb{N}$, where $\\mathbb{R}$ has its usual metric $d_{\\mathbb{R}}(s,t)=|s-t|$. If $f_k\\to f$ uniformly on $X$, then $f:X\\to\\mathbb{R}$ is continuous.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-continuous-implies-integrable",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be continuous on $[a,b]$ ([[def-continuity-real]]). Then $f$ is bounded ([[def-bounded-set]]) and Riemann integrable on $[a,b]$ ([[def-darboux-integral]]). **The proof gives more than integrability: it gives a partition that works.** For every real $\\varepsilon > 0$ the uniform partition into $N$ parts already satisfies $U(f,P) - L(f,P) < \\varepsilon$, as soon as $N$ is large enough that $(b-a)/\\iota(N)$ is below the $\\delta$ that uniform continuity supplies for $\\varepsilon/\\bigl(2(b-a)\\bigr)$. Uniform continuity is exactly what makes one $\\delta$ serve all $N$ subintervals at once, and it is the only place where the compactness of $[a,b]$ is used.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-uniform-limit-interchanges-riemann-integration",
      "source_section": "Statement",
      "quote": "Let $a<b$ be reals. Suppose every $f_k:[a,b]\\to\\mathbb{R}$ is Riemann integrable and $f_k\\to f$ uniformly on $[a,b]$. Then $f$ is Riemann integrable and $$\\int_a^b f_k\\longrightarrow\\int_a^b f.$$",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-ftc-second-part",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $G : [a,b] \\to \\mathbb{R}$ be differentiable at every point of $[a,b]$ as a function on $[a,b]$ ([[def-derivative]]; at $a$ and $b$ this is the one-sided derivative), let $f := G'$, and suppose $f$ is integrable on $[a,b]$ ([[def-darboux-integral]]). Then $$\\int_a^b f \\;=\\; G(b) - G(a) .$$ **Both hypotheses are needed and neither is removable.** A function may be differentiable everywhere with $G'$ not integrable — then the left-hand side does not exist (an everywhere differentiable function with unbounded derivative) — and an integrable $f$ need not be the derivative of anything (the sign function); both witnesses are on the companion page. **No continuity of $f$ is assumed**, which is what makes this the working form: the theorem evaluates $\\int_a^b f$ for every integrable derivative, not only for continuous integrands.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-derivative",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]), neighbourhoods are those of [[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]]. Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a **limit point of $A$**. The **difference quotient of $f$ at $c$** is the function $$q_{f,c} : A \\setminus \\{c\\} \\to \\mathbb{R}, \\qquad q_{f,c}(x) := \\frac{f(x) - f(c)}{x - c} .$$ The division is legitimate at every point of the domain, since $x \\ne c$ gives $x - c \\ne 0$. **The point $c$ is a limit point of $A \\setminus \\{c\\}$, not merely of $A$.** For every real $\\varepsilon > 0$ the punctured neighbourhood $N^{*}_{\\varepsilon}(c)$ omits $c$, so $$N^{*}_{\\varepsilon}(c) \\cap A \\;=\\; N^{*}_{\\varepsilon}(c) \\cap (A \\setminus \\{c\\}) ,$$ and the left-hand side is nonempty because $c$ is a limit point of $A$. So $q_{f,c}$ is a function on a set having $c$ as a limit point, and $\\lim_{x \\to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines. $f$ is **differentiable at $c$** when that limit exists, and then the **derivative of $f$ at $c$** is $$f'(c) \\;:=\\; \\lim_{x \\to c} q_{f,c}(x) \\;=\\; \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c} .$$ **Two obligations are carried by that notation, and both are discharged here.** 1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a single real number. That is legitimate: $c$ is a limit point of the domain $A \\setminus \\{c\\}$ of $q_{f,c}$, so at most one real can satisfy the $\\varepsilon$-$\\delta$ condition, by [[lem-function-limit-unique]] applied to $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the symbol denotes. 2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not decoration. At an **isolated** point of $A$ the punctured condition $0 < |x - c| < \\delta$ is met by no point of the domain at all, so the $\\varepsilon$-$\\delta$ formula is satisfied vacuously by *every* real at once; this is why [[def-function-limit]] leaves the limit undefined there, and it is why this library defines $f'(c)$ only at a limit point of $A$. At an isolated point of its domain a function is neither differentiable nor non-differentiable here: the question is not posed. **The limit sees only $A \\setminus \\{c\\}$, so how the difference quotient is extended to $c$ is irrelevant.** Let $Q : A \\to \\mathbb{R}$ agree with $q_{f,c}$ at every point of $A \\setminus \\{c\\}$, and let $L \\in \\mathbb{R}$. Then $\\lim_{x \\to c} Q(x) = L$ if and only if $\\lim_{x \\to c} q_{f,c}(x) = L$. Both conditions read: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ such that every point $x$ of the relevant domain with $0 < |x - c| < \\delta$ satisfies $|{\\cdot} - L| < \\varepsilon$ ([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both quantifiers, so in both cases the points quantified over are exactly the $x \\in A \\setminus \\{c\\}$ with $0 < |x - c| < \\delta$, at which $Q$ and $q_{f,c}$ take the same value. The two conditions are the same condition. **Differentiability on a set.** For $S \\subseteq A$, $f$ is **differentiable on $S$** when it is differentiable at every $c \\in S$; implicit in that phrase is that every point of $S$ is a limit point of $A$. $f$ is **differentiable** when it is differentiable on the whole of $A$. **Restriction of the domain.** Let $B \\subseteq A$, let $c \\in B$ and suppose $c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the restriction $f|_B : B \\to \\mathbb{R}$, and $$(f|_B)'(c) \\;=\\; f'(c) .$$ Indeed $B \\setminus \\{c\\} \\subseteq A \\setminus \\{c\\}$; the displayed identity of punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit point of $B \\setminus \\{c\\}$; the difference quotient $q_{f|_B, c}$ is the restriction of $q_{f,c}$ to $B \\setminus \\{c\\}$, since $f|_B(c) = f(c)$; and claim 2 of [[lem-limit-is-local]] carries the limit to that restriction. **Every point of a nondegenerate interval is a limit point of it.** Let $J \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) with at least two elements and let $p \\in J$. Choose $q \\in J$ with $q \\ne p$, and let a real $\\varepsilon > 0$ be given. If $p < q$, put $y := p + \\tfrac{1}{2}\\min\\{\\varepsilon,\\ q - p\\}$; then $p < y$, and $y - p \\le \\tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and order-convexity gives $y \\in J$, while $0 < |y - p| < \\varepsilon$. If $q < p$, the point $y := p - \\tfrac{1}{2}\\min\\{\\varepsilon,\\ p - q\\}$ serves in the same way. So $N^{*}_{\\varepsilon}(p) \\cap J \\ne \\varnothing$ for every real $\\varepsilon > 0$, that is, $p$ is a limit point of $J$ ([[def-limit-point-r]]). Consequently, for $f$ defined on a nondegenerate interval $I$, the symbol $f'(c)$ is meaningful at **every** $c \\in I$, endpoints included. At an endpoint the difference quotient is taken over the points of $I$ lying on the one side that is available, so what other texts call a one-sided derivative is, here, simply the derivative of $f$ on $I$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-function-limit",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]) with its order and absolute value ([[def-real-order]]). Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c \\in \\mathbb{R}$ be a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \\in \\mathbb{R}$. We say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write $$\\lim_{x \\to c} f(x) = L ,$$ when $$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ 0 < |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - L| < \\varepsilon\\ \\bigr],$$ where $\\varepsilon$ and $\\delta$ range over the **positive reals**. In the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N^{*}_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}(L),$$ $N^{*}_{\\delta}(c) = \\{\\, y : 0 < |y - c| < \\delta \\,\\}$ being the punctured $\\delta$-neighbourhood of $c$ and $N_{\\varepsilon}(L) = (L - \\varepsilon,\\ L + \\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because $|f(x) - L| < \\varepsilon$ says exactly $f(x) \\in N_\\varepsilon(L)$, and $0 < |x - c| < \\delta$ says exactly $x \\in N^{*}_\\delta(c)$. **Three features of this definition are load bearing, not decoration.** 1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that says every punctured neighbourhood of $c$ meets $A$, so for every $\\delta > 0$ the set $A \\cap N^{*}_\\delta(c)$ over which the implication quantifies is nonempty. Drop the requirement and the implication can be satisfied vacuously by *every* real $L$ at once, which is exactly what [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$ that is not a limit point of $A$ — an isolated point — the symbol $\\lim_{x \\to c} f(x)$ is therefore **not defined** in this library. 2. **$c \\in A$ is not required.** A limit point of $A$ need not belong to $A$ ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This is what allows a limit to be taken at a point where the function is not defined at all, as at $0$ for $x \\mapsto x\\,\\psi(1/x)$. 3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the single point $c$ changes nothing. Equality of the limit with the value is an extra condition, not a consequence: [[fs-limit-equals-value]]. **The notation presumes uniqueness.** Writing $\\lim_{x \\to c} f(x) = L$ treats the left-hand side as a name for a single real number, which is legitimate only because at a limit point at most one $L$ can satisfy the displayed condition. That obligation is discharged by [[lem-function-limit-unique]], recorded in this item's `justified_by`. As with $\\sup S$ ([[rem-sup-conventions]]) and $\\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function already known to have a limit at $c$. **Real and rational $\\varepsilon$ define the same relation.** Above, $\\varepsilon$ and $\\delta$ range over the positive reals. Restricting either quantifier to the positive rationals gives the same relation: every positive rational is a positive real, and below every positive real lies a positive rational ([[lem-rat-embeds-dense]]), so an $\\varepsilon$-condition verified for all positive rationals is verified for an arbitrary positive real $\\eta$ by running it at a rational $\\varepsilon$ with $0 < \\varepsilon < \\eta$, and a $\\delta$ produced as a real may be shrunk to a rational one below it. This is the passage sanctioned in the remarks of [[def-sequence]], and it is what lets this definition be compared with [[def-real-limit]], whose $\\varepsilon$ is rational, in [[thm-sequential-criterion-for-function-limits]].",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in [[def-neighbourhood-r]] and closure as in [[def-interior-closure-boundary-r]]. - $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real $\\varepsilon > 0$. - $x$ is a **limit point** (or *accumulation point*) of $A$ when $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$. - $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$. - The **derived set** of $A$ is $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$ - $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$. **A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq N_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since $x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent points of $A$ are exactly the points of $A \\cup A'$, a statement proved as part of [[thm-closure-characterisations-r]]. **Limit point and isolated point are exact opposites inside $A$.** For $x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point of $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that $N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in $N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$ witnessing isolation is the negation of the condition defining a limit point. A point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and never both. **A limit point need not belong to the set, and a point of the set need not be a limit point.** Both possibilities occur, and the two examples that matter later are $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging to it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]], [[def-ordered-field]]) with its order ([[def-real-order]]). A subset $I \\subseteq \\mathbb{R}$ is **order-convex** when $$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$ The **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where $a, b \\in \\mathbb{R}$: | | bounded forms | | one-sided and full forms | |---|---|---|---| | $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ | | $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ | | $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ | | $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ | | | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ | An interval is **open** when both of its written endpoints are excluded, that is for the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is **closed** when both written endpoints are included, that is for $[a,b]$, $[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and $(a,b]$ are **half-open**. **The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They mark which side carries no endpoint condition at all; the five forms in the right column are defined by the displayed conditions on $x$ alone, and no arithmetic is ever performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$ silently that [[rem-sup-conventions]] records for suprema. **Every one of the nine forms is order-convex.** Each is defined by a conjunction of at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or $x \\le b$, and each such condition is inherited by an intermediate point: if $a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$, by transitivity of the order ([[def-ordered-field]]). Applying this to whichever one or two conditions define the form in question gives $z \\in I$ whenever $x, y \\in I$ and $x \\le z \\le y$. **Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly when it is of one of the four forms in the left column: for those, $a$ is a lower bound and $b$ an upper bound. The other five forms are unbounded, on the side or sides written with $\\infty$; the verification is in the remarks below. **Nondegeneracy.** An interval is **degenerate** when it has at most one element, and **nondegenerate** when it has at least two. For the four bounded forms with endpoints $a$ and $b$: - $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly when $a < b$. It is the singleton $\\{a\\}$ when $a = b$. - $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each is nondegenerate. The only assertion here that is not immediate from the defining conditions is that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because $a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to both sides and halving ([[def-ordered-field]]); repeating the halving inside $(a, (a+b)/2)$ produces a second point. **Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is exactly the condition making them nonempty. They are the intervals the nested interval property is stated for, and the phrase *closed bounded interval* always carries the hypothesis $a \\le b$ in this library. **Length.** The **length** of a bounded interval presented by its endpoints $a \\le b$ is $$\\ell = b - a \\;\\ge\\; 0 .$$ Length is attached to the presentation by endpoints and is not recovered from the set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is $(c,c)$ for any other $c$, while each of these presentations has length $0$, so nothing inconsistent arises; but the endpoints are named explicitly at every point where a length is used in this library, and never inferred from the set. Unbounded intervals are assigned no length.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-integrability-on-a-subinterval",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be integrable ([[def-darboux-integral]]), and let $c, d$ satisfy $$a \\;\\le\\; c \\;<\\; d \\;\\le\\; b .$$ Then the restriction of $f$ to $[c,d]$ is bounded ([[def-bounded-set]]) and integrable on $[c,d]$. The degenerate case $c = d$ is not an omission: there $\\int_c^c f = 0$ by [[def-oriented-integral]], and no partition of $[c,d]$ exists to speak of ([[def-partition-and-refinement]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-oriented-integral",
      "source_section": "Definition",
      "quote": "**Why this item is first.** The published definition of the integral does not cover this page. [[def-darboux-integral]] is stated for reals $a < b$, because the partitions it quantifies over are those of [[def-partition-and-refinement]], whose standing hypothesis is $a < b$: with $a = b$ the chain $a = t_0 < \\dots < t_n = b$ is unsatisfiable. So $\\int_a^b f$ is an undefined symbol whenever $a \\ge b$, and every additivity statement below would be ill-formed as it is usually written. This item extends the notation, and nothing else: the object it names is still the Darboux integral of [[def-darboux-integral]]. Let $u, v \\in \\mathbb{R}$ and write $$[u \\wedge v,\\ u \\vee v] \\;:=\\; \\text{the closed interval with endpoints } u \\text{ and } v$$ ([[def-interval]]). Let $f$ be a real-valued function whose domain contains that interval. Say that **$f$ is integrable between $u$ and $v$** when either $u = v$, or $u \\ne v$ and the restriction of $f$ to $[u \\wedge v,\\ u \\vee v]$ is bounded ([[def-bounded-set]]) and Darboux integrable there ([[def-darboux-integral]], [[def-darboux-sums]]). For such $f$ define $$\\int_u^v f \\;:=\\; \\begin{cases} \\text{the Darboux integral of } f \\text{ over } [u,v] & \\text{if } u < v, \\\\[2pt] 0 & \\text{if } u = v, \\\\[2pt] -\\displaystyle\\int_v^u f & \\text{if } u > v. \\end{cases}$$ **There is nothing to check for consistency.** The three clauses are indexed by the three cases of trichotomy, $u < v$, $u = v$ and $u > v$, which are mutually exclusive and exhaustive; no pair of them ever applies to the same $(u,v)$. In particular the first clause is untouched, so on $u < v$ this is the published integral verbatim and every published theorem about it applies unchanged. **The middle clause is a stipulation, not a computation.** It is *not* claimed that $0$ is a value forced by the $u < v$ definition in any limiting sense; that definition simply says nothing at $u = v$, and $\\int_u^u f := 0$ is what is written there. It is also unconditional: no hypothesis on $f$ beyond being defined at $u$ is asked for, since the case $u = v$ never refers to a partition. ### The two consequences used throughout the page **Antisymmetry, for every pair.** For all reals $u, v$ with $f$ integrable between them, $$\\int_u^v f \\;=\\; -\\int_v^u f .$$ Indeed if $u < v$ then $v > u$ and the third clause reads $\\int_v^u f = -\\int_u^v f$, which rearranges to the display; if $u = v$ both sides are $0$; and if $u > v$ the third clause is the display itself. **Absolute values agree.** Consequently $\\bigl|\\int_u^v f\\bigr| = \\bigl|\\int_v^u f\\bigr|$ for every such pair. **An obligation recorded here and discharged elsewhere.** With this convention the additivity identity $$\\int_u^v f \\;+\\; \\int_v^w f \\;=\\; \\int_u^w f$$ holds for **every** arrangement of $u, v, w$ in an interval on which $f$ is integrable, not only for $u < v < w$. That is a theorem and not part of this definition; it is proved as the last clause of [[thm-additivity-over-subintervals]], and nothing on this page uses it before it is proved there.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-ftc-first-part",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be integrable ([[def-darboux-integral]]), let $F$ be its integral function ([[def-the-integral-function]]), and let $c \\in [a,b]$ be a point at which $f$ is continuous ([[def-continuity-real]]). Then $F$ is differentiable at $c$ as a function on $[a,b]$ ([[def-derivative]]) and $$F'(c) \\;=\\; f(c) .$$ At $c = a$ and $c = b$ this is the one-sided statement, which is what [[def-derivative]] means at those points: every point of a nondegenerate interval is a limit point of it, so $F'(c)$ is a meaningful symbol at every $c \\in [a,b]$, and the difference quotient is taken over $[a,b] \\setminus \\{c\\}$. **Consequently, if $f$ is continuous on the whole of $[a,b]$, then $F$ is a primitive of $f$ there**: $F' = f$ at every point of $[a,b]$. **Continuity at $c$ is a hypothesis and it cannot be dropped.** For an integrable $f$ that is discontinuous at $c$, $F'(c)$ may fail to exist, and it may exist and differ from $f(c)$; both are exhibited on the companion page, by an integrable function with no primitive and by a false statement about the integral function.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-the-integral-function",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be integrable ([[def-darboux-integral]]). The **integral function of $f$ with base point $a$** is $$F : [a,b] \\to \\mathbb{R}, \\qquad F(x) \\;:=\\; \\int_a^x f .$$ **It is a genuine function, and that has to be checked.** For $x \\in (a,b]$ the restriction of $f$ to $[a,x]$ is integrable, by [[lem-integrability-on-a-subinterval]] applied with $c := a$ and $d := x$, so $\\int_a^x f$ names a single real number ([[def-darboux-integral]]). For $x = a$ the symbol $\\int_a^a f$ is $0$ by [[def-oriented-integral]]. So $F(x)$ is defined at every point of $[a,b]$ and $$F(a) \\;=\\; 0 .$$ More generally, for any base point $c \\in [a,b]$ the function $x \\mapsto \\int_c^x f$ is defined on the whole of $[a,b]$, the integral being the oriented one of [[def-oriented-integral]] when $x < c$; the case $c = a$ is written $F$ above and is the one used unless another base point is named. ### The two identities used throughout **Increments are integrals.** For all $x, y \\in [a,b]$, in either order, $$F(y) - F(x) \\;=\\; \\int_x^y f .$$ This is claim 3 of [[thm-additivity-over-subintervals]] applied to the three points $a$, $x$, $y$: it gives $\\int_a^x f + \\int_x^y f = \\int_a^y f$, that is $F(x) + \\int_x^y f = F(y)$. No ordering of $x$ and $y$ is assumed, and the degenerate cases $x = y$, $x = a$ and $y = a$ are included, since claim 3 is stated for arbitrary points. **Changing the base point changes $F$ by a constant.** If $c \\in [a,b]$ and $F_c(x) := \\int_c^x f$, then for every $x \\in [a,b]$ $$F_c(x) \\;=\\; F(x) - F(c) ,$$ again by claim 3 of [[thm-additivity-over-subintervals]] at the points $a$, $c$, $x$. So the family of integral functions of $f$ is one function up to an additive constant.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.2",
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
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-algebra-of-derivatives",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $c \\in A$ be a limit point of $A$ ([[def-limit-point-r]]), let $f, g : A \\to \\mathbb{R}$ be differentiable at $c$ ([[def-derivative]]) and let $\\alpha \\in \\mathbb{R}$. Then: 1. $f + g$ is differentiable at $c$ and $(f+g)'(c) = f'(c) + g'(c)$; 2. $\\alpha f$ is differentiable at $c$ and $(\\alpha f)'(c) = \\alpha f'(c)$; 3. $fg$ is differentiable at $c$ and $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$; 4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the point $c$ lies in $A_0$ and is a limit point of $A_0$, the quotient $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is differentiable at $c$ as a function on $A_0$, and $$\\bigl((f/g)|_{A_0}\\bigr)'(c) \\;=\\; \\frac{f'(c)\\,g(c) - f(c)\\,g'(c)}{g(c)^{2}} .$$ Each claim asserts two things: that the derivative on the left exists, and that it has the stated value. Both are proved. **Why claim 4 is stated on $A_0$.** The function $f/g$ is not defined where $g$ vanishes, and $g$ may vanish at points of $A$ far from $c$; restricting to $A_0$ is forced. That the restriction still has $c$ as a limit point, so that a derivative there means anything at all, is not free either, and it is the last claim of [[lem-sign-preservation-near-a-limit]] applied to $g$. The hypothesis is $g(c) \\ne 0$, not \"$g$ vanishes nowhere\". **Everything is proved through [[thm-caratheodory-characterisation]].** No difference quotient is estimated and no limit theorem beyond continuity is used, so no choice principle is spent. The four identities are four algebraic rearrangements of an increment, each followed by a reading of [[thm-algebra-of-continuous-functions]].",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-derivative",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]), neighbourhoods are those of [[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]]. Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a **limit point of $A$**. The **difference quotient of $f$ at $c$** is the function $$q_{f,c} : A \\setminus \\{c\\} \\to \\mathbb{R}, \\qquad q_{f,c}(x) := \\frac{f(x) - f(c)}{x - c} .$$ The division is legitimate at every point of the domain, since $x \\ne c$ gives $x - c \\ne 0$. **The point $c$ is a limit point of $A \\setminus \\{c\\}$, not merely of $A$.** For every real $\\varepsilon > 0$ the punctured neighbourhood $N^{*}_{\\varepsilon}(c)$ omits $c$, so $$N^{*}_{\\varepsilon}(c) \\cap A \\;=\\; N^{*}_{\\varepsilon}(c) \\cap (A \\setminus \\{c\\}) ,$$ and the left-hand side is nonempty because $c$ is a limit point of $A$. So $q_{f,c}$ is a function on a set having $c$ as a limit point, and $\\lim_{x \\to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines. $f$ is **differentiable at $c$** when that limit exists, and then the **derivative of $f$ at $c$** is $$f'(c) \\;:=\\; \\lim_{x \\to c} q_{f,c}(x) \\;=\\; \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c} .$$ **Two obligations are carried by that notation, and both are discharged here.** 1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a single real number. That is legitimate: $c$ is a limit point of the domain $A \\setminus \\{c\\}$ of $q_{f,c}$, so at most one real can satisfy the $\\varepsilon$-$\\delta$ condition, by [[lem-function-limit-unique]] applied to $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the symbol denotes. 2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not decoration. At an **isolated** point of $A$ the punctured condition $0 < |x - c| < \\delta$ is met by no point of the domain at all, so the $\\varepsilon$-$\\delta$ formula is satisfied vacuously by *every* real at once; this is why [[def-function-limit]] leaves the limit undefined there, and it is why this library defines $f'(c)$ only at a limit point of $A$. At an isolated point of its domain a function is neither differentiable nor non-differentiable here: the question is not posed. **The limit sees only $A \\setminus \\{c\\}$, so how the difference quotient is extended to $c$ is irrelevant.** Let $Q : A \\to \\mathbb{R}$ agree with $q_{f,c}$ at every point of $A \\setminus \\{c\\}$, and let $L \\in \\mathbb{R}$. Then $\\lim_{x \\to c} Q(x) = L$ if and only if $\\lim_{x \\to c} q_{f,c}(x) = L$. Both conditions read: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ such that every point $x$ of the relevant domain with $0 < |x - c| < \\delta$ satisfies $|{\\cdot} - L| < \\varepsilon$ ([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both quantifiers, so in both cases the points quantified over are exactly the $x \\in A \\setminus \\{c\\}$ with $0 < |x - c| < \\delta$, at which $Q$ and $q_{f,c}$ take the same value. The two conditions are the same condition. **Differentiability on a set.** For $S \\subseteq A$, $f$ is **differentiable on $S$** when it is differentiable at every $c \\in S$; implicit in that phrase is that every point of $S$ is a limit point of $A$. $f$ is **differentiable** when it is differentiable on the whole of $A$. **Restriction of the domain.** Let $B \\subseteq A$, let $c \\in B$ and suppose $c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the restriction $f|_B : B \\to \\mathbb{R}$, and $$(f|_B)'(c) \\;=\\; f'(c) .$$ Indeed $B \\setminus \\{c\\} \\subseteq A \\setminus \\{c\\}$; the displayed identity of punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit point of $B \\setminus \\{c\\}$; the difference quotient $q_{f|_B, c}$ is the restriction of $q_{f,c}$ to $B \\setminus \\{c\\}$, since $f|_B(c) = f(c)$; and claim 2 of [[lem-limit-is-local]] carries the limit to that restriction. **Every point of a nondegenerate interval is a limit point of it.** Let $J \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) with at least two elements and let $p \\in J$. Choose $q \\in J$ with $q \\ne p$, and let a real $\\varepsilon > 0$ be given. If $p < q$, put $y := p + \\tfrac{1}{2}\\min\\{\\varepsilon,\\ q - p\\}$; then $p < y$, and $y - p \\le \\tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and order-convexity gives $y \\in J$, while $0 < |y - p| < \\varepsilon$. If $q < p$, the point $y := p - \\tfrac{1}{2}\\min\\{\\varepsilon,\\ p - q\\}$ serves in the same way. So $N^{*}_{\\varepsilon}(p) \\cap J \\ne \\varnothing$ for every real $\\varepsilon > 0$, that is, $p$ is a limit point of $J$ ([[def-limit-point-r]]). Consequently, for $f$ defined on a nondegenerate interval $I$, the symbol $f'(c)$ is meaningful at **every** $c \\in I$, endpoints included. At an endpoint the difference quotient is taken over the points of $I$ lying on the one side that is available, so what other texts call a one-sided derivative is, here, simply the derivative of $f$ on $I$.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-uniform-integral-error-bound",
      "source_section": "Statement",
      "quote": "Let $u,v\\in\\mathbb{R}$, and let $f$ and $g$ be integrable between $u$ and $v$. If $\\eta\\ge0$ and $$|f(x)-g(x)|\\le\\eta$$ throughout the closed interval with endpoints $u$ and $v$, then $$\\left|\\int_u^v f-\\int_u^v g\\right|\\le \\eta\\,|v-u|.$$",
      "quote_selection": "full-source-section",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-real-and-metric-notions-agree",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$ carry the subspace metric of the usual metric $d_{\\mathbb{R}}(x,y) = |x-y|$ of $\\mathbb{R}$, that is $d_A(x,y) = |x - y|$ for $x, y \\in A$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), and let $f : A \\to \\mathbb{R}$, regarded also as a map of metric spaces $(A, d_A) \\to (\\mathbb{R}, d_{\\mathbb{R}})$. Then the $\\mathbb{R}$-native notions of this page and the metric-space notions of the earlier pages are the **same notions**, in the following five senses. 1. **Continuity.** For every $c \\in A$: $f$ is continuous at $c$ in the sense of [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and only if it is continuous as a map of metric spaces. 2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of [[def-uniform-continuity-real]] if and only if it is uniformly continuous as a map of metric spaces ([[def-metric-uniform-continuity]]). 3. **Lipschitz.** For a real $L \\ge 0$: $f$ is Lipschitz with constant $L$ as a map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if $$|f(x) - f(x')| \\le L\\,|x - x'| \\qquad \\text{for all } x, x' \\in A .$$ This displayed condition is what \"$f$ is Lipschitz with constant $L$\" means for a real function on $A$ in this library; no second definition is made. 4. **Hölder.** For a rational $\\alpha$ with $0 < \\alpha \\le 1$ and a real $C \\ge 0$: $f$ is $\\alpha$-Hölder with constant $C$ as a map of metric spaces if and only if $$|f(x) - f(x')| \\le C\\,|x - x'|^{\\alpha} \\qquad \\text{for all } x, x' \\in A ,$$ the power being the rational power of a nonnegative base ([[def-rational-power]]). 5. **Compactness, in both senses used in this library.** For $K \\subseteq \\mathbb{R}$ with the subspace metric $d_K$: - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every family of open subsets of $\\mathbb{R}$ covering $K$ has a finite subfamily covering $K$ — if and only if the metric space $(K, d_K)$ is compact ([[def-metric-compactness]]); - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and only if $(K, d_K)$ is sequentially compact as a metric space ([[def-metric-compactness-variants]]). Two consequences are recorded, since they are the reason the dictionary is stated as a lemma rather than as a remark. 6. **The regularity hierarchy transfers verbatim.** By clauses 1 to 4 and [[thm-metric-regularity-hierarchy]]: a Lipschitz $f : A \\to \\mathbb{R}$ is uniformly continuous on $A$; an $\\alpha$-Hölder $f$ with rational $0 < \\alpha \\le 1$ is uniformly continuous on $A$; a uniformly continuous $f$ is continuous on $A$; and if $A$ is nonempty and bounded, a Lipschitz $f$ is $\\alpha$-Hölder for every rational $\\alpha$ with $0 < \\alpha \\le 1$. No strictness is claimed here, and none is claimed there. 7. **Cauchy sequences transfer.** A sequence $(x_k)$ with terms in $A$ is Cauchy in $(A, d_A)$ ([[def-cauchy-in-metric]]) if and only if it is Cauchy as a sequence of reals ([[def-real-limit]]); so by clause 2 and [[thm-uniform-continuity-preserves-cauchy]], a uniformly continuous $f : A \\to \\mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of $\\mathbb{R}$. **Why this lemma exists, and why it is a lemma.** Three results of this page — [[thm-continuous-image-of-a-compact-set-r]], [[thm-extreme-value-r]] and [[thm-heine-cantor-r]] — are stated a second time here, having already been proved metric-generally as [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-extreme-value-metric]] and [[thm-heine-cantor-metric]]. The duplication is deliberate: the $\\mathbb{R}$-native proofs run through [[thm-heine-borel-characterisation-r]] and [[thm-compact-iff-sequentially-compact-r]], which are order-based, while the metric proofs run through the cover machinery of metric spaces. **This item is the single place in the library where that duplication is acknowledged**, and clauses 1 and 5 are what make the two families of statements literally the same statements. It is a lemma, and not a remark, precisely so that later pages can cite it and move between the two vocabularies. **Clause 5 closes a second seam.** The phrase *compact subset of $\\mathbb{R}$* is defined twice in this library — metrically, as compactness of the metric subspace ([[def-metric-compactness]]), and $\\mathbb{R}$-natively, by covers by open subsets of $\\mathbb{R}$ ([[def-open-cover-r]]) — and until this clause no item asserted that the two agree.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "By [L7], each real-continuous derivative $f_k'$ is metric-continuous. The uniform-limit clause of [L1] makes $g$ metric-continuous, and [L7] makes $g$ real-continuous. The integrability clause of [L1] therefore makes every $f_k'$ and $g$ Riemann integrable; [L2] also gives the integrability of the uniform limit.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "L7"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Let $\\varepsilon>0$. Choose $N_0$ such that $|f_k(c)-A|<\\varepsilon/2$ for $k\\ge N_0$, and choose $N_1$ such that $|f_k'(x)-g(x)|<\\varepsilon/\\bigl(2(b-a+1)\\bigr)$ for $k\\ge N_1$ and all $x\\in[a,b]$.",
      "step": "1.2",
      "inputs": [
        "given",
        "choose"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Fix $k$ and $x\\in[a,b]$. If $c<x$, restrict $f_k$ to $[c,x]$; its derivative is $f_k'$ there and that derivative is integrable there by steps 1.1 and [L3], so the first clause of [L3] gives $f_k(x)=f_k(c)+\\int_c^x f_k'$. If $x<c$, apply that clause on $[x,c]$ and then use orientation; if $x=c$, use $\\int_c^c f_k'=0$. Thus in every case $f_k(x)=f_k(c)+\\int_c^x f_k'$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L3"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "Define $H(x):=\\int_a^xg$ and construct $f:[a,b]\\to\\mathbb{R}$ by $f(x):=A+H(x)-H(c)=A+\\int_c^xg$.",
      "step": "2.2",
      "inputs": [
        "step 1.1",
        "L4",
        "construct"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "By [L4] and [L5], $H$ is differentiable with $H'=g$, and therefore the constructed function $f=A+H-H(c)$ is differentiable with $f'=g$.",
      "step": "3.1",
      "inputs": [
        "step 2.2",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-3.2",
      "claim": "Choose $N$ at least as large as $N_0,N_1$. For $k\\ge N$ and $x\\in[a,b]$, steps 2.2 and 2.1 with [L6] give $|f_k(x)-f(x)|\\le |f_k(c)-A|+\\left|\\int_c^x f_k'-\\int_c^xg\\right|<\\varepsilon/2+\\varepsilon|x-c|/\\bigl(2(b-a+1)\\bigr)<\\varepsilon$.",
      "step": "3.2",
      "inputs": [
        "step 2.2",
        "step 2.1",
        "step 1.2",
        "L6",
        "choose",
        "algebra"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "The index $N$ in step 3.2 serves every $x\\in[a,b]$, so $f_k\\to f$ uniformly; step 3.1 gives $f'=g$. Thus the constructed $f$ has both asserted properties.",
      "step": "4.1",
      "inputs": [
        "step 3.2",
        "step 3.1",
        "discharge-construct"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-uniform-derivative-limit-on-a-closed-interval: the Statement introduces no possibly empty family requiring a witness; its sequence domains are N or its displayed witness has a fixed nonempty domain."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 2.1: Fix $k$ and $x\\in[a,b]$. If $c<x$, restrict $f_k$ to $[c,x]$; its derivative is $f_k'$ there and that derivative is integrable there by steps 1.1 and [L3], so the first clause of [L3] gives $f_k(x)=f_k(c)+\\int_c^x f_k'$. If $x<c$, apply that clause on $[x,c]$ and then use orienta"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-uniform-derivative-limit-on-a-closed-interval: there is no cardinal, dimension, or exponent parameter with a separate value-one branch in this claim."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-uniform-derivative-limit-on-a-closed-interval: the Statement has no collapse, coincidence, constant-family, or equality-case branch beyond cases already included by its universal estimates."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.2: Let $\\varepsilon>0$. Choose $N_0$ such that $|f_k(c)-A|<\\varepsilon/2$ for $k\\ge N_0$, and choose $N_1$ such that $|f_k'(x)-g(x)|<\\varepsilon/\\bigl(2(b-a+1)\\bigr)$ for $k\\ge N_1$ and all $x\\in[a,b]$."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "thm-uniform-derivative-limit-on-a-closed-interval: the proof makes no choice from a family whose nonemptiness is not already supplied; any witness used is explicit or uniquely determined."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "thm-uniform-derivative-limit-on-a-closed-interval: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "thm-uniform-derivative-limit-on-a-closed-interval: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
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
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
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
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
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
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
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
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "lem-real-and-metric-notions-agree",
    "declared_target": "lem-real-and-metric-notions-agree",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-uniform-limit-continuous-real-functions",
    "declared_target": "thm-uniform-limit-continuous-real-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-uniform-limit-interchanges-riemann-integration",
    "declared_target": "thm-uniform-limit-interchanges-riemann-integration",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-ftc-first-part",
    "declared_target": "thm-ftc-first-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-ftc-second-part",
    "declared_target": "thm-ftc-second-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-derivative",
    "declared_target": "def-derivative",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
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
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
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
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
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
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "lem-uniform-integral-error-bound",
    "declared_target": "lem-uniform-integral-error-bound",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
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
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "lem-integrability-on-a-subinterval",
    "declared_target": "lem-integrability-on-a-subinterval",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
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
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
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
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "def-the-integral-function",
    "declared_target": "def-the-integral-function",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-derivative-limit-on-a-closed-interval",
    "sourcePage": "uniform-convergence-of-functions",
    "batch": "wave12-real-analysis",
    "target": "thm-algebra-of-derivatives",
    "declared_target": "thm-algebra-of-derivatives",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
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

## Full exact-current text of every cited or declared item (19)

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

### `def-derivative`

````markdown
---
id: def-derivative
kind: definition
title: "The derivative $f'(c) = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c}$ of $f : A \\to \\mathbb{R}$ at a point $c \\in A$ that is a limit point of $A$, and differentiability on a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-interval, def-neighbourhood-r, def-complete-ordered-field, def-continuity-real, lem-limit-is-local]
justified_by: []
forward_refs: [cex-absolute-value-is-not-differentiable-at-zero]
aliases: [def-differentiable, def-differentiability]
landmark: true
short: "the derivative at a point"
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
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Def. 5.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §10.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), neighbourhoods are those of
[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function

$$q_{f,c} : A \setminus \{c\} \to \mathbb{R}, \qquad q_{f,c}(x) := \frac{f(x) - f(c)}{x - c} .$$

The division is legitimate at every point of the domain, since $x \ne c$ gives
$x - c \ne 0$.

**The point $c$ is a limit point of $A \setminus \{c\}$, not merely of $A$.**
For every real $\varepsilon > 0$ the punctured neighbourhood
$N^{*}_{\varepsilon}(c)$ omits $c$, so

$$N^{*}_{\varepsilon}(c) \cap A \;=\; N^{*}_{\varepsilon}(c) \cap (A \setminus \{c\}) ,$$

and the left-hand side is nonempty because $c$ is a limit point of $A$. So
$q_{f,c}$ is a function on a set having $c$ as a limit point, and
$\lim_{x \to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.

$f$ is **differentiable at $c$** when that limit exists, and then the
**derivative of $f$ at $c$** is

$$f'(c) \;:=\; \lim_{x \to c} q_{f,c}(x) \;=\; \lim_{x \to c} \frac{f(x) - f(c)}{x - c} .$$

**Two obligations are carried by that notation, and both are discharged here.**

1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a
   single real number. That is legitimate: $c$ is a limit point of the domain
   $A \setminus \{c\}$ of $q_{f,c}$, so at most one real can satisfy the
   $\varepsilon$-$\delta$ condition, by [[lem-function-limit-unique]] applied to
   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the
   symbol denotes.
2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not
   decoration. At an **isolated** point of $A$ the punctured condition
   $0 < |x - c| < \delta$ is met by no point of the domain at all, so the
   $\varepsilon$-$\delta$ formula is satisfied vacuously by *every* real at
   once; this is why [[def-function-limit]] leaves the limit undefined there,
   and it is why this library defines $f'(c)$ only at a limit point of $A$. At
   an isolated point of its domain a function is neither differentiable nor
   non-differentiable here: the question is not posed.

**The limit sees only $A \setminus \{c\}$, so how the difference quotient is
extended to $c$ is irrelevant.** Let $Q : A \to \mathbb{R}$ agree with
$q_{f,c}$ at every point of $A \setminus \{c\}$, and let $L \in \mathbb{R}$.
Then $\lim_{x \to c} Q(x) = L$ if and only if $\lim_{x \to c} q_{f,c}(x) = L$.
Both conditions read: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that every point $x$ of the relevant domain with
$0 < |x - c| < \delta$ satisfies $|{\cdot} - L| < \varepsilon$
([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both
quantifiers, so in both cases the points quantified over are exactly the
$x \in A \setminus \{c\}$ with $0 < |x - c| < \delta$, at which $Q$ and
$q_{f,c}$ take the same value. The two conditions are the same condition.

**Differentiability on a set.** For $S \subseteq A$, $f$ is **differentiable on
$S$** when it is differentiable at every $c \in S$; implicit in that phrase is
that every point of $S$ is a limit point of $A$. $f$ is **differentiable** when
it is differentiable on the whole of $A$.

**Restriction of the domain.** Let $B \subseteq A$, let $c \in B$ and suppose
$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the
restriction $f|_B : B \to \mathbb{R}$, and

$$(f|_B)'(c) \;=\; f'(c) .$$

Indeed $B \setminus \{c\} \subseteq A \setminus \{c\}$; the displayed identity
of punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit
point of $B \setminus \{c\}$; the difference quotient $q_{f|_B, c}$ is the
restriction of $q_{f,c}$ to $B \setminus \{c\}$, since $f|_B(c) = f(c)$; and
claim 2 of [[lem-limit-is-local]] carries the limit to that restriction.

**Every point of a nondegenerate interval is a limit point of it.** Let
$J \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) with at least two
elements and let $p \in J$. Choose $q \in J$ with $q \ne p$, and let a real
$\varepsilon > 0$ be given. If $p < q$, put $y := p + \tfrac{1}{2}\min\{\varepsilon,\ q - p\}$;
then $p < y$, and $y - p \le \tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and
order-convexity gives $y \in J$, while $0 < |y - p| < \varepsilon$. If $q < p$,
the point $y := p - \tfrac{1}{2}\min\{\varepsilon,\ p - q\}$ serves in the same
way. So $N^{*}_{\varepsilon}(p) \cap J \ne \varnothing$ for every real
$\varepsilon > 0$, that is, $p$ is a limit point of $J$
([[def-limit-point-r]]).

Consequently, for $f$ defined on a nondegenerate interval $I$, the symbol
$f'(c)$ is meaningful at **every** $c \in I$, endpoints included. At an endpoint
the difference quotient is taken over the points of $I$ lying on the one side
that is available, so what other texts call a one-sided derivative is, here,
simply the derivative of $f$ on $I$.

## Remarks

- **Notation.** $f'(c)$ and $\frac{df}{dx}(c)$ denote the same real number, and
  this library uses the first. Neither is an operation performed on a symbol
  $x$: the variable in the second is a name for the argument and nothing more.

- **Differentiability is a property of the pair $(f, A)$ at $c$, not of $f$
  alone.** The restriction clause above goes in one direction only, and the
  converse fails. Take $A := \mathbb{R}$, $f(x) := |x|$, $B := [0,\infty)$ and
  $c := 0$. Then $f|_B$ is the identity on $B$, whose difference quotient at $0$
  is constantly $1$, so $f|_B$ is differentiable at $0$ with derivative $1$;
  that $f$ itself is not differentiable at $0$ is
  [[cex-absolute-value-is-not-differentiable-at-zero]] on the companion page.
  So enlarging the domain can destroy differentiability, and the phrase
  "$f$ is differentiable at $c$" always carries the domain with it.

- **The relation to continuity is not definitional.** [[def-continuity-real]]
  is a condition on $f$ near $c$ that does not mention a quotient, and it is
  defined at every point of $A$, isolated points included, whereas
  differentiability is defined only at limit points of $A$. That
  differentiability implies continuity is a theorem on this page and not a
  reading of the definitions.

- **No second derivative and no one-sided derivative is introduced here.**
  Both are standard, and both are absent from this page on purpose;
  [[rem-derivative-conventions]] records exactly what is fixed and what is left
  open at this point in the reading order.
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

### `def-the-integral-function`

````markdown
---
id: def-the-integral-function
kind: definition
title: "The integral function $F(x) := \\int_a^x f$ of an integrable $f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-integrability-on-a-subinterval, thm-additivity-over-subintervals, def-oriented-integral, def-darboux-integral, def-interval, def-bounded-set]
forward_refs: [cex-an-integrable-function-with-no-primitive, fs-the-integral-function-is-always-a-primitive]
justified_by: []
aliases: [def-integral-function]
landmark: true
short: "integral function $F(x) = \\int_a^x f$"
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
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Definition

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]). The **integral function of $f$ with base point $a$**
is

$$F : [a,b] \to \mathbb{R}, \qquad F(x) \;:=\; \int_a^x f .$$

**It is a genuine function, and that has to be checked.** For $x \in (a,b]$ the
restriction of $f$ to $[a,x]$ is integrable, by
[[lem-integrability-on-a-subinterval]] applied with $c := a$ and $d := x$, so
$\int_a^x f$ names a single real number ([[def-darboux-integral]]). For $x = a$
the symbol $\int_a^a f$ is $0$ by [[def-oriented-integral]]. So $F(x)$ is defined
at every point of $[a,b]$ and

$$F(a) \;=\; 0 .$$

More generally, for any base point $c \in [a,b]$ the function
$x \mapsto \int_c^x f$ is defined on the whole of $[a,b]$, the integral being the
oriented one of [[def-oriented-integral]] when $x < c$; the case $c = a$ is
written $F$ above and is the one used unless another base point is named.

### The two identities used throughout

**Increments are integrals.** For all $x, y \in [a,b]$, in either order,

$$F(y) - F(x) \;=\; \int_x^y f .$$

This is claim 3 of [[thm-additivity-over-subintervals]] applied to the three
points $a$, $x$, $y$: it gives $\int_a^x f + \int_x^y f = \int_a^y f$, that is
$F(x) + \int_x^y f = F(y)$. No ordering of $x$ and $y$ is assumed, and the
degenerate cases $x = y$, $x = a$ and $y = a$ are included, since claim 3 is
stated for arbitrary points.

**Changing the base point changes $F$ by a constant.** If $c \in [a,b]$ and
$F_c(x) := \int_c^x f$, then for every $x \in [a,b]$

$$F_c(x) \;=\; F(x) - F(c) ,$$

again by claim 3 of [[thm-additivity-over-subintervals]] at the points $a$, $c$,
$x$. So the family of integral functions of $f$ is one function up to an
additive constant.

## Remarks

- **$F$ exists for every integrable $f$, whether or not $f$ has a primitive.**
  Nothing in the definition asks $f$ to be continuous anywhere, and nothing here
  claims $F' = f$. The two statements about $F'$ that this page does prove are: $F$ is
  always Lipschitz ([[thm-the-integral-function-is-lipschitz]]), and $F'(c) = f(c)$
  at every point $c$ where $f$ is continuous ([[thm-ftc-first-part]]).

- **$F$ need not be a primitive of $f$.** At a discontinuity of $f$ the
  derivative $F'$ may fail to exist, or may exist and differ from $f$; both
  possibilities are exhibited on the companion page, by
  [[cex-an-integrable-function-with-no-primitive]] and
  [[fs-the-integral-function-is-always-a-primitive]]. That is the honest content
  of the phrase "the integral function", and it is why it is not called "the
  primitive" here.

- **Why the base point is part of the data and the notation suppresses it.** The
  symbol $F$ hides its dependence on $a$, as is customary; the identity
  $F_c = F - F(c)$ above is what makes the suppression harmless, since every
  statement below about $F$ is about its increments, which do not see the base
  point at all.
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

### `lem-uniform-integral-error-bound`

````markdown
---
id: lem-uniform-integral-error-bound
kind: lemma
title: "Uniformly close integrable functions have integrals differing by at most the interval length times their uniform error"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, def-oriented-integral, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $u,v\in\mathbb{R}$, and let $f$ and $g$ be integrable between $u$ and $v$.
If $\eta\ge0$ and

$$|f(x)-g(x)|\le\eta$$

throughout the closed interval with endpoints $u$ and $v$, then

$$\left|\int_u^v f-\int_u^v g\right|\le \eta\,|v-u|.$$

## Facts & Assumptions

**Given:** Reals $u,v$, functions $f,g$ integrable between them, and a real $\eta\ge0$ with $|f-g|\le\eta$ on the interval between them.

[L1] Linear combinations of integrable functions are integrable and their integrals are the corresponding linear combinations, including for oriented limits ([[thm-linearity-of-the-integral]], [[def-oriented-integral]]).

[L2] If $a<b$, an integrable function $h$ satisfying $m\le h(x)\le M$ on $[a,b]$ has $m(b-a)\le\int_a^b h\le M(b-a)$ ([[thm-monotonicity-of-the-integral]]).

[L3] For every real $z$, $-|z|\le z\le|z|$ and $|-z|=|z|$; for $c>0$, $|z|<c$ exactly when $-c<z<c$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 If $u=v$, both oriented integrals are $0$ and the asserted inequality holds. [L1, algebra]

1.2 Suppose $u<v$ and put $h:=f-g$. Then $h$ is integrable and $\int_u^v h=\int_u^v f-\int_u^v g$. [L1]

2.1 The hypothesis gives $|h(x)|\le\eta$, while [L3] gives $-|h(x)|\le h(x)\le|h(x)|$; hence $-\eta\le h(x)\le\eta$ on $[u,v]$, and [L2] gives $-\eta(v-u)\le\int_u^v h\le\eta(v-u)$. [step 1.2, L2, L3]

3.1 Hence $\left|\int_u^v f-\int_u^v g\right|=\left|\int_u^v h\right|\le\eta(v-u)$ when $u<v$. [step 1.2, step 2.1, L3]

4.1 If $u>v$, apply step 3.1 to the ordered pair $(v,u)$ and use antisymmetry of oriented integrals; the same bound results because $|u-v|=|v-u|$. [step 3.1, L1, L3]

5.1 The alternatives $u=v$, $u<v$, and $u>v$ are exhaustive, and steps 1.1, 3.1, and 4.1 give the claimed inequality. [step 1.1, step 3.1, step 4.1] ∎
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

### `thm-algebra-of-derivatives`

````markdown
---
id: thm-algebra-of-derivatives
kind: theorem
title: "Sums, scalar multiples, products and quotients: $(f+g)'(c) = f'(c) + g'(c)$, $(\\alpha f)'(c) = \\alpha f'(c)$, $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$, and $(f/g)'(c) = \\bigl(f'(c)g(c) - f(c)g'(c)\\bigr)/g(c)^{2}$ when $g(c) \\ne 0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-caratheodory-characterisation, cor-differentiable-implies-continuous, thm-algebra-of-continuous-functions, def-continuity-real, def-function-limit, def-limit-point-r, lem-sign-preservation-near-a-limit, def-integer-power, lem-of-no-zero-divisors]
justified_by: []
aliases: [thm-differentiation-rules, thm-product-rule, thm-quotient-rule]
landmark: true
short: "algebra of derivatives"
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
    - title: "Product rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_rule"
    - title: "Quotient rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.3)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c \in A$ be a limit point of $A$
([[def-limit-point-r]]), let $f, g : A \to \mathbb{R}$ be differentiable at $c$
([[def-derivative]]) and let $\alpha \in \mathbb{R}$. Then:

1. $f + g$ is differentiable at $c$ and $(f+g)'(c) = f'(c) + g'(c)$;
2. $\alpha f$ is differentiable at $c$ and $(\alpha f)'(c) = \alpha f'(c)$;
3. $fg$ is differentiable at $c$ and $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and is a limit point of $A_0$, the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is differentiable
   at $c$ as a function on $A_0$, and
   $$\bigl((f/g)|_{A_0}\bigr)'(c) \;=\; \frac{f'(c)\,g(c) - f(c)\,g'(c)}{g(c)^{2}} .$$

Each claim asserts two things: that the derivative on the left exists, and that
it has the stated value. Both are proved.

**Why claim 4 is stated on $A_0$.** The function $f/g$ is not defined where $g$
vanishes, and $g$ may vanish at points of $A$ far from $c$; restricting to $A_0$
is forced. That the restriction still has $c$ as a limit point, so that a
derivative there means anything at all, is not free either, and it is the last
claim of [[lem-sign-preservation-near-a-limit]] applied to $g$. The hypothesis
is $g(c) \ne 0$, not "$g$ vanishes nowhere".

**Everything is proved through
[[thm-caratheodory-characterisation]].** No difference quotient is estimated and
no limit theorem beyond continuity is used, so no choice principle is spent.
The four identities are four algebraic rearrangements of an increment, each
followed by a reading of [[thm-algebra-of-continuous-functions]].

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a point $c \in A$ that is a limit point of $A$, functions $f, g : A \to \mathbb{R}$ differentiable at $c$, and a real $\alpha$; for claim 4 also the hypothesis $g(c) \ne 0$ together with $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$ ([[def-derivative]], [[def-limit-point-r]]).

[L1] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]), used in both directions: for a set $B \subseteq \mathbb{R}$, a point $p \in B$ that is a limit point of $B$ and a function $h : B \to \mathbb{R}$, the function $h$ is differentiable at $p$ if and only if there is $\eta : B \to \mathbb{R}$, continuous at $p$, with $h(x) - h(p) = \eta(x)(x - p)$ for every $x \in B$, and then $\eta(p) = h'(p)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]]): sums, scalar multiples and products of functions continuous at a point are continuous there (claim 1); every constant function and the identity are continuous everywhere on the domain (claim 5); and if $u, v$ are continuous at a point $p$ of their common domain $D$ with $v(p) \ne 0$, then $p$ lies in $D_0 := \{x \in D : v(x) \ne 0\}$ and $(u/v)|_{D_0}$ is continuous at $p$ as a function on $D_0$ (claim 4).

[L3] Continuity passes to a subset of the domain: if $B \subseteq A$, if $p \in B$ and if $\psi : A \to \mathbb{R}$ is continuous at $p$, then $\psi|_B$ is continuous at $p$, the condition on the restriction quantifying over fewer points ([[def-continuity-real]]).

[L4] A function differentiable at $c$ is continuous at $c$ ([[cor-differentiable-implies-continuous]]); in particular $g$ is.

[L5] At a limit point $c$ of $A$, continuity of $g$ at $c$ says exactly that $\lim_{x \to c} g(x)$ exists and equals $g(c)$ ([[def-continuity-real]], clause 1, [[def-function-limit]]).

[L6] Sign preservation ([[lem-sign-preservation-near-a-limit]]): if $c$ is a limit point of $A$ and $\lim_{x \to c} g(x)$ exists and is nonzero, then $c$ is a limit point of $A_0 = \{x \in A : g(x) \ne 0\}$.

[L7] A product of two nonzero reals is nonzero ([[lem-of-no-zero-divisors]]), and $g(c)^{2} = g(c)\,g(c)$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], applied to $f$ and to $g$ on $A$ at $c$, fix $\varphi, \psi : A \to \mathbb{R}$, both continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ and $g(x) - g(c) = \psi(x)(x - c)$ for every $x \in A$, and with $\varphi(c) = f'(c)$ and $\psi(c) = g'(c)$. [L1, choose]

1.2 Assume $g(c) \ne 0$. Then $c \in A_0$ by the definition of $A_0$; $g$ is continuous at $c$ by [L4], so $\lim_{x \to c} g(x) = g(c) \ne 0$ by [L5]; and therefore $c$ is a limit point of $A_0$ by [L6]. [L4, L5, L6]

2.1 **Sum.** For every $x \in A$, $(f+g)(x) - (f+g)(c) = \bigl(f(x)-f(c)\bigr) + \bigl(g(x)-g(c)\bigr) = \bigl(\varphi(x) + \psi(x)\bigr)(x-c)$. The function $\varphi + \psi$ is continuous at $c$ by [L2], and $(\varphi+\psi)(c) = f'(c) + g'(c)$. So [L1] gives claim 1. [step 1.1, L1, L2]

2.2 **Scalar multiple.** For every $x \in A$, $(\alpha f)(x) - (\alpha f)(c) = \alpha\bigl(f(x)-f(c)\bigr) = \bigl(\alpha\varphi(x)\bigr)(x-c)$. The function $\alpha\varphi$ is continuous at $c$ by [L2], with value $\alpha f'(c)$ there. So [L1] gives claim 2. [step 1.1, L1, L2]

2.3 **Product.** For every $x \in A$, $f(x)g(x) - f(c)g(c) = \bigl(f(x)-f(c)\bigr)g(x) + f(c)\bigl(g(x)-g(c)\bigr) = \bigl(\varphi(x)g(x) + f(c)\psi(x)\bigr)(x-c)$. Put $\chi := \varphi\,g + f(c)\,\psi$; it is continuous at $c$ by [L2], since $\varphi$, $\psi$ and (by [L4]) $g$ are, and constants are; and $\chi(c) = \varphi(c)g(c) + f(c)\psi(c) = f'(c)g(c) + f(c)g'(c)$. So [L1] gives claim 3. [step 1.1, L1, L2, L4]

2.4 **Quotient, the rearrangement.** Assume $g(c) \ne 0$ and let $x \in A_0$, so $g(x) \ne 0$ and $g(c) \ne 0$. Then $f(x)/g(x) - f(c)/g(c) = \bigl(f(x)g(c) - f(c)g(x)\bigr)/\bigl(g(x)g(c)\bigr)$, and $f(x)g(c) - f(c)g(x) = \bigl(f(x)-f(c)\bigr)g(c) - f(c)\bigl(g(x)-g(c)\bigr) = \bigl(\varphi(x)g(c) - f(c)\psi(x)\bigr)(x-c)$. So, defining $\theta : A_0 \to \mathbb{R}$ by $\theta(x) := \bigl(\varphi(x)g(c) - f(c)\psi(x)\bigr)/\bigl(g(x)g(c)\bigr)$, one has $(f/g)|_{A_0}(x) - (f/g)|_{A_0}(c) = \theta(x)(x-c)$ for every $x \in A_0$. [step 1.1, L1, L7]

2.5 **Quotient, continuity of the factor.** Assume $g(c) \ne 0$. The restrictions of $\varphi$, $\psi$ and $g$ to $A_0$ are continuous at $c \in A_0$ by [L3] and [L4], so by [L2] the numerator $u(x) := \varphi(x)g(c) - f(c)\psi(x)$ and the denominator $v(x) := g(x)g(c)$ are continuous at $c$ as functions on $A_0$. By [L7] the denominator vanishes at no point of $A_0$, so $\{x \in A_0 : v(x) \ne 0\} = A_0$, and $v(c) = g(c)^{2} \ne 0$; hence claim 4 of [L2] gives that $\theta = (u/v)|_{A_0}$ is continuous at $c$, with $\theta(c) = \bigl(\varphi(c)g(c) - f(c)\psi(c)\bigr)/g(c)^{2} = \bigl(f'(c)g(c) - f(c)g'(c)\bigr)/g(c)^{2}$. [step 1.1, step 1.2, L2, L3, L4, L7]

3.1 **Quotient, conclusion.** Assume $g(c) \ne 0$. By step 1.2 the point $c$ lies in $A_0$ and is a limit point of $A_0$; by steps 2.4 and 2.5 the function $\theta : A_0 \to \mathbb{R}$ is continuous at $c$ and factors the increment of $(f/g)|_{A_0}$. So [L1], applied on the domain $A_0$ at the point $c$, gives that $(f/g)|_{A_0}$ is differentiable at $c$ with derivative $\theta(c)$: claim 4. [step 1.2, step 2.4, step 2.5, L1]

4.1 Claims 1 to 4 are proved, by steps 2.1, 2.2, 2.3 and 3.1 respectively, each by exhibiting the Carathéodory factor of the new function and reading its continuity at $c$ off the algebra of continuous functions. [step 2.1, step 2.2, step 2.3, step 3.1] ∎

## Remarks

- **The product rearrangement in one line.** The identity $fg - f(c)g(c) = (f - f(c))\,g + f(c)\,(g - g(c))$ splits the increment of a product into two increments, one multiplied by $g$ and one by a constant. It is the same identity that carries the product case of [[thm-algebra-of-function-limits]], read at the level of increments rather than of $\varepsilon$; here the factor $g$ has to be continuous at $c$ rather than merely bounded near it, and [[cor-differentiable-implies-continuous]] is what supplies that.

- **The reciprocal is the case $f \equiv 1$.** Claim 4 then reads $\bigl((1/g)|_{A_0}\bigr)'(c) = -g'(c)/g(c)^{2}$, since $f'(c) = 0$ for a constant $f$; nothing separate has to be proved, and the derivative of a negative integer power on this page is obtained exactly this way.

- **Two hypotheses that look removable and are not.** In claim 4 the hypothesis $g(c) \ne 0$ cannot be weakened to "$g$ is nonzero somewhere near $c$", because $c$ itself must lie in the smaller domain for a derivative there to be a statement about $c$; and the conclusion is about $(f/g)|_{A_0}$, not about any extension of it to $A$, since no such extension is canonical.
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

### `thm-ftc-first-part`

````markdown
---
id: thm-ftc-first-part
kind: theorem
title: "The first fundamental theorem: if $f$ is integrable on $[a,b]$ and continuous at $c$, then $F'(c) = f(c)$; in particular a continuous $f$ has $F$ as a primitive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-integral-function, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, cor-integrability-of-absolute-values-products-and-lattice-operations, lem-integral-elementary-bounds, lem-integrability-on-a-subinterval, thm-additivity-over-subintervals, def-oriented-integral, def-derivative, def-function-limit, def-continuity-real, def-interval, def-darboux-integral, lem-of-abs-value, def-abs-value, def-ordered-field, def-complete-ordered-field, thm-of-archimedean, cor-archimedean-reciprocal]
forward_refs: [cex-an-integrable-function-with-no-primitive, fs-the-integral-function-is-always-a-primitive]
justified_by: []
aliases: [thm-fundamental-theorem-of-calculus-first-part]
landmark: true
short: "first fundamental theorem"
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
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]), let $F$ be its integral function
([[def-the-integral-function]]), and let $c \in [a,b]$ be a point at which $f$ is
continuous ([[def-continuity-real]]). Then $F$ is differentiable at $c$ as a
function on $[a,b]$ ([[def-derivative]]) and

$$F'(c) \;=\; f(c) .$$

At $c = a$ and $c = b$ this is the one-sided statement, which is what
[[def-derivative]] means at those points: every point of a nondegenerate interval
is a limit point of it, so $F'(c)$ is a meaningful symbol at every $c \in [a,b]$,
and the difference quotient is taken over $[a,b] \setminus \{c\}$.

**Consequently, if $f$ is continuous on the whole of $[a,b]$, then $F$ is a
primitive of $f$ there**: $F' = f$ at every point of $[a,b]$.

**Continuity at $c$ is a hypothesis and it cannot be dropped.** For an integrable
$f$ that is discontinuous at $c$, $F'(c)$ may fail to exist, and it may exist and
differ from $f(c)$; both are exhibited on the companion page, by
an integrable function with no primitive and by a false
statement about the integral function.

## Facts & Assumptions

**Given:** Reals $a < b$, an integrable $f : [a,b] \to \mathbb{R}$, its integral function $F(x) = \int_a^x f$, a point $c \in [a,b]$ at which $f$ is continuous, and a real $\varepsilon > 0$.

[L1] $F(x) - F(c) = \int_c^x f$ for all $x, c \in [a,b]$, in either order ([[def-the-integral-function]], [[thm-additivity-over-subintervals]]).

[L2] Continuity at $c$: for every real $\eta > 0$ there is a real $\delta > 0$ such that every $t \in [a,b]$ with $|t - c| < \delta$ satisfies $|f(t) - f(c)| < \eta$ ([[def-continuity-real]]).

[L3] Every point of a nondegenerate interval is a limit point of it, so $F'(c) = \lim_{x\to c} \bigl(F(x)-F(c)\bigr)/(x-c)$ is a meaningful symbol, the limit being taken over $[a,b]\setminus\{c\}$ ([[def-derivative]], [[def-function-limit]], [[def-interval]]).

[L4] For $p < q$ in $[a,b]$: $f$ and $|f|$ and every constant are integrable on $[p,q]$; $\int_p^q \lambda = \lambda(q-p)$; sums and scalar multiples of integrable functions are integrable with the corresponding identity; and $\bigl|\int_p^q u\bigr| \le \int_p^q |u|$ ([[lem-integrability-on-a-subinterval]], [[lem-integral-elementary-bounds]], [[thm-linearity-of-the-integral]], [[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L5] If $u \le w$ pointwise on $[p,q]$ and both are integrable then $\int_p^q u \le \int_p^q w$ ([[thm-monotonicity-of-the-integral]]).

[L6] With oriented limits, $\int_q^p u = -\int_p^q u$ and $\int_p^p u = 0$ ([[def-oriented-integral]]).

[L7] Absolute value and ordered-field arithmetic: $|{-t}| = |t|$, $|t\,s| = |t||s|$, $|t| \le c$ follows from $-c \le t \le c$, a positive real has a positive inverse, and the order is total and transitive ([[lem-of-abs-value]], [[def-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]). The nonstrict forms of the order facts follow from the strict ones by adjoining equality.

[L8] For every real $\eta > 0$ there is a real $\eta' > 0$ with $\eta' < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] with $\eta := \varepsilon \cdot 2^{-1}$, fix a real $\delta > 0$ such that $|f(t)-f(c)| < \varepsilon\cdot 2^{-1}$ for every $t \in [a,b]$ with $|t-c| < \delta$. [given, L2, L7, L8, choose]

1.2 For $x \in [a,b]$ with $x \ne c$, [L1] and [L4] give $F(x) - F(c) - f(c)(x-c) = \int_c^x f - \int_c^x f(c) = \int_c^x \bigl(f(t) - f(c)\bigr)\,\mathrm{d}t$, the constant $f(c)$ having integral $f(c)(x-c)$ over the oriented interval from $c$ to $x$ by [L4] and [L6]. [L1, L4, L6]

2.1 **The estimate for $c < x < c+\delta$.** Every $t \in [c,x]$ has $|t-c| < \delta$, so $-\varepsilon\cdot2^{-1} \le f(t)-f(c) \le \varepsilon\cdot 2^{-1}$ there by step 1.1, whence $\bigl|\int_c^x (f - f(c))\bigr| \le \varepsilon\cdot2^{-1}\,(x-c)$ by [L4] and [L5]. [step 1.1, step 1.2, L4, L5, L7]

2.2 **The estimate for $c-\delta < x < c$.** By [L6], $\int_c^x (f-f(c)) = -\int_x^c (f-f(c))$, and every $t \in [x,c]$ has $|t-c| < \delta$, so the same argument gives $\bigl|\int_c^x (f-f(c))\bigr| \le \varepsilon\cdot 2^{-1}\,(c-x)$. [step 1.1, step 1.2, L4, L5, L6, L7]

3.1 In both cases $\bigl|\int_c^x(f-f(c))\bigr| \le \varepsilon\cdot 2^{-1}\,|x-c|$, so dividing by the nonzero $|x-c|$ and using step 1.2 gives $\Bigl|\dfrac{F(x)-F(c)}{x-c} - f(c)\Bigr| \le \varepsilon\cdot 2^{-1} < \varepsilon$ for every $x \in [a,b]$ with $0 < |x-c| < \delta$. [step 1.2, step 2.1, step 2.2, L7]

4.1 Since $\varepsilon > 0$ was arbitrary, the limit of the difference quotient of $F$ at $c$ exists and equals $f(c)$ by [L3]; that is, $F'(c) = f(c)$. [step 1.1, step 3.1, L3]

5.1 If $f$ is continuous at every point of $[a,b]$ then step 4.1 applies at every $c \in [a,b]$, so $F' = f$ on $[a,b]$ and $F$ is a primitive of $f$. [step 4.1, L3] ∎

## Remarks

- **The estimate is written out for $x < c$ as well, and that is not redundancy.** For $x < c$ the factor $1/(x-c)$ is negative and the naive chain $m(x-c) \le \int_c^x \le M(x-c)$ reverses; what makes the argument uniform is taking absolute values *before* dividing, which is what steps 2.1, 2.2 and 3.1 do. This is the single most common error in this proof.

- **The route is the definition of the derivative, not the mean value theorem for integrals.** Deducing $F'(c) = f(c)$ from [[thm-first-mean-value-theorem-for-integrals]] would need $f$ continuous on a whole subinterval around $c$, which is a strictly stronger hypothesis than continuity at the single point $c$. The theorem as stated is the sharp one.

- **What is proved at a point is proved at a point.** Nothing here says $F$ is differentiable anywhere else, and nothing says $F' = f$ off the continuity set of $f$. Where $f$ is merely integrable, all that survives is [[thm-the-integral-function-is-lipschitz]].

- **Forward references, orientation only.** The two failures at a discontinuity are worked out on the companion page as [[cex-an-integrable-function-with-no-primitive]] and [[fs-the-integral-function-is-always-a-primitive]]; nothing above depends on either.
````

### `thm-ftc-second-part`

````markdown
---
id: thm-ftc-second-part
kind: theorem
title: "The second fundamental theorem: if $G$ is differentiable on $[a,b]$ with $G' = f$ and $f$ is integrable, then $\\int_a^b f = G(b)-G(a)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-darboux-integral, def-partition-and-refinement, def-darboux-sums, cor-mean-value-theorem, def-derivative, cor-differentiable-implies-continuous, lem-finite-sum-laws, def-finite-sum, def-interval, def-continuity-real, def-bounded-set, def-ordered-field, def-complete-ordered-field]
forward_refs: [cex-a-function-with-a-primitive-that-is-not-integrable, cex-an-integrable-function-with-no-primitive]
justified_by: []
aliases: [thm-fundamental-theorem-of-calculus-second-part, thm-newton-leibniz]
landmark: true
short: "second fundamental theorem"
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
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $G : [a,b] \to \mathbb{R}$ be differentiable at every
point of $[a,b]$ as a function on $[a,b]$ ([[def-derivative]]; at $a$ and $b$
this is the one-sided derivative), let $f := G'$, and suppose $f$ is integrable
on $[a,b]$ ([[def-darboux-integral]]). Then

$$\int_a^b f \;=\; G(b) - G(a) .$$

**Both hypotheses are needed and neither is removable.** A function may be
differentiable everywhere with $G'$ not integrable — then the left-hand side does
not exist (an everywhere differentiable function with unbounded derivative) — and an
integrable $f$ need not be the derivative of anything
(the sign function); both witnesses are on the
companion page.

**No continuity of $f$ is assumed**, which is what makes this the working form:
the theorem evaluates $\int_a^b f$ for every integrable derivative, not only for
continuous integrands.

## Facts & Assumptions

**Given:** Reals $a < b$, a function $G : [a,b] \to \mathbb{R}$ differentiable at every point of $[a,b]$, $f := G'$ integrable on $[a,b]$, and a partition $P = (n,t)$ of $[a,b]$.

[L1] For a partition $P = (n,t)$ of $[a,b]$: $t_0 = a$, $t_n = b$, $t_i < t_{i+1}$ for $i < n$, $\Delta_i = t_{i+1}-t_i > 0$, and $I_i = [t_i,t_{i+1}] \subseteq [a,b]$ ([[def-partition-and-refinement]], [[def-interval]]).

[L2] $L(f,P) = \sum_{i<n}m_i\Delta_i$ and $U(f,P) = \sum_{i<n}M_i\Delta_i$ with $m_i = \inf f[I_i]$ and $M_i = \sup f[I_i]$, so $m_i \le f(\xi) \le M_i$ for every $\xi \in I_i$ ([[def-darboux-sums]], [[def-bounded-set]]).

[L3] $\underline{\int_a^b} f = \sup_P L(f,P)$ and $\overline{\int_a^b} f = \inf_P U(f,P)$, and $f$ integrable means the two agree, their common value being $\int_a^b f$ ([[def-darboux-integral]]).

[L4] Mean value theorem: if $u$ is continuous on $[p,q]$ with $p<q$ and differentiable at every point of $(p,q)$, there is $\xi \in (p,q)$ with $u(q)-u(p) = u'(\xi)(q-p)$ ([[cor-mean-value-theorem]]).

[L5] A function differentiable at a point is continuous there, and the restriction of a differentiable function to a subinterval is differentiable with the same derivative at every point of that subinterval which is a limit point of it ([[cor-differentiable-implies-continuous]], [[def-derivative]], [[def-continuity-real]]).

[L6] Finite sums: telescoping $\sum_{i<n}(c_{i+1}-c_i) = c_n - c_0$, and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 4 and 5).

[L7] Ordered-field arithmetic: multiplying an inequality by a positive real preserves it, the order is total and transitive, and a number that is an upper bound of a set and also a lower bound of another set lies between their supremum and infimum ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Let $P = (n,t)$ be an arbitrary partition of $[a,b]$ and let $i < n$. The restriction of $G$ to $I_i = [t_i,t_{i+1}]$ is continuous on $I_i$ and differentiable at every point of $(t_i,t_{i+1})$, with the same derivative $f$ there, by [L5] and [L1]. [given, L1, L5]

2.1 By [L4] applied on $I_i$ there is $\xi_i \in (t_i,t_{i+1})$ with $G(t_{i+1}) - G(t_i) = f(\xi_i)\,\Delta_i$; since $\xi_i \in I_i$ and $\Delta_i > 0$, [L2] gives $m_i\Delta_i \le G(t_{i+1})-G(t_i) \le M_i\Delta_i$. [step 1.1, L1, L2, L4, L7]

3.1 Step 2.1 holds for every $i < n$, so monotonicity of finite sums applies to the three families and gives $\sum_{i<n}m_i\Delta_i \le \sum_{i<n}\bigl(G(t_{i+1})-G(t_i)\bigr) \le \sum_{i<n}M_i\Delta_i$. [step 2.1, L6]

4.1 The middle sum telescopes to $G(t_n) - G(t_0) = G(b) - G(a)$ by [L6] and [L1], so $L(f,P) \le G(b)-G(a) \le U(f,P)$ by [L2]. [step 3.1, L1, L2, L6]

5.1 Step 4.1 holds for **every** partition $P$, so $G(b)-G(a)$ is an upper bound of the set of lower sums and a lower bound of the set of upper sums; hence $\underline{\int_a^b} f \le G(b)-G(a) \le \overline{\int_a^b} f$ by [L3] and [L7]. [step 4.1, L3, L7]

6.1 Since $f$ is integrable the two integrals coincide with $\int_a^b f$, so $\int_a^b f = G(b)-G(a)$. [step 5.1, L3] ∎

## Remarks

- **No choice principle is spent, and no sequence of tags is ever formed.** The usual proof selects one $\xi_i$ per subinterval and assembles the Riemann sum $\sum_i f(\xi_i)\Delta_i$, which is a choice from finitely many nonempty sets. The proof above never forms that family: step 2.1 proves, for an arbitrary fixed $i$, the *inequality* $m_i\Delta_i \le G(t_{i+1})-G(t_i) \le M_i\Delta_i$, which is a universally quantified statement about $i$ and needs no selection, and step 3.1 then sums the inequality. The telescoping identity supplies the middle term without any tags at all.

- **The hypothesis is differentiability at every point of the closed interval.** It is not enough to be differentiable on $(a,b)$ and continuous on $[a,b]$ in the argument as written, because step 2.1 uses the derivative only on open subintervals but the definition $f = G'$ has to name a function on all of $[a,b]$ for $\int_a^b f$ to mean anything. Changing $f$ at the two endpoints changes neither its integrability nor its integral ([[lem-changing-a-function-at-finitely-many-points]]), so the reader who prefers the weaker hypothesis loses nothing.

- **This is the half of the fundamental theorem that computes.** The other half, [[thm-ftc-first-part]], produces a primitive; this one evaluates an integral once a primitive is known, and it is the tool the companion page reaches for whenever a primitive is available. Where no primitive is at hand the companion page computes instead by splitting at a jump and using the integral of a constant; no claim is made here about how many of its computations take which route.

- **Forward references, orientation only.** The two witnesses showing neither hypothesis is removable are [[cex-a-function-with-a-primitive-that-is-not-integrable]] and [[cex-an-integrable-function-with-no-primitive]] on the companion page; nothing above depends on either.
````

### `thm-uniform-limit-continuous-real-functions`

````markdown
---
id: thm-uniform-limit-continuous-real-functions
kind: theorem
title: "The uniform limit of continuous real-valued functions on a metric space is continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-metric-continuity, lem-real-line-is-a-metric-space, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stanford Math 63CM, Additional Lecture Notes, Theorem 1.16"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF63CM-20/lecture-notes-63cm-20-prelim.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space and let $f_k:X\to\mathbb{R}$ be continuous for
every $k\in\mathbb{N}$, where $\mathbb{R}$ has its usual metric
$d_{\mathbb{R}}(s,t)=|s-t|$. If $f_k\to f$ uniformly on $X$, then
$f:X\to\mathbb{R}$ is continuous.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, continuous functions $f_k:X\to\mathbb{R}$, and uniform convergence $f_k\to f$.

[A1] Uniform convergence gives, for every real $\eta>0$, one index $N$ such that $|f_k(x)-f(x)|<\eta$ for every $k\ge N$ and every $x\in X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[A2] Continuity of $f_N$ at $a$ means that for every real $\eta>0$ there is $\delta>0$ such that $d(x,a)<\delta$ implies $|f_N(x)-f_N(a)|<\eta$ ([[def-metric-continuity]], [[lem-real-line-is-a-metric-space]]).

[L1] For reals $u,v$, $|u+v|\le|u|+|v|$ ([[lem-of-triangle-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in X$ and a real $\varepsilon>0$. By uniform convergence choose $N$ such that $|f_N(x)-f(x)|<\varepsilon/3$ for every $x\in X$. [A1, choose]

1.2 By continuity of $f_N$ at $a$, choose $\delta>0$ such that $d(x,a)<\delta$ implies $|f_N(x)-f_N(a)|<\varepsilon/3$. [A2, choose]

2.1 If $d(x,a)<\delta$, then $|f(x)-f(a)|\le |f(x)-f_N(x)|+|f_N(x)-f_N(a)|+|f_N(a)-f(a)|<\varepsilon$. [step 1.1, step 1.2, L1, algebra]

3.1 Thus $f$ is continuous at the arbitrary point $a$, and hence continuous on $X$. [step 2.1, A2] ∎
````

### `thm-uniform-limit-interchanges-riemann-integration`

````markdown
---
id: thm-uniform-limit-interchanges-riemann-integration
kind: theorem
title: "A uniform limit of Riemann-integrable functions is Riemann integrable, and its integral is the limit of their integrals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, thm-riemann-criterion, lem-uniform-integral-error-bound, def-darboux-integral, def-darboux-sums, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a<b$ be reals. Suppose every $f_k:[a,b]\to\mathbb{R}$ is Riemann
integrable and $f_k\to f$ uniformly on $[a,b]$. Then $f$ is Riemann
integrable and

$$\int_a^b f_k\longrightarrow\int_a^b f.$$

## Facts & Assumptions

**Given:** Reals $a<b$, integrable functions $f_k:[a,b]\to\mathbb{R}$, and uniform convergence $f_k\to f$.

[A1] Uniform convergence means that for every real $\eta>0$ one index makes $|f_k(x)-f(x)|<\eta$ for every later $k$ and every $x\in[a,b]$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[L1] An integrable function on $[a,b]$ is bounded; conversely, a bounded function $h$ there is Riemann integrable exactly when, for every real $\varepsilon>0$, some partition $P$ satisfies $U(h,P)-L(h,P)<\varepsilon$ ([[def-darboux-integral]], [[thm-riemann-criterion]]).

[L2] Darboux upper and lower sums are finite sums of the subinterval suprema and infima times the subinterval lengths; finite sums preserve inequalities and split and telescope in the usual way ([[def-darboux-sums]], [[lem-finite-sum-laws]]).

[L3] If two integrable functions differ by at most $\eta$ uniformly, then their integrals differ by at most $\eta(b-a)$ ([[lem-uniform-integral-error-bound]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$ be real, put $\eta:=\varepsilon/(4(b-a))>0$, and choose an index $j$ such that $|f_j(x)-f(x)|<\eta$ for every $x\in[a,b]$. [A1, choose]

1.2 By integrability of $f_j$ and [L1], choose a partition $P$ with $U(f_j,P)-L(f_j,P)<\varepsilon/2$. [L1, choose]

2.1 The integrable function $f_j$ is bounded, say $|f_j(x)|\le M$ on $[a,b]$; then $|f(x)|\le M+\eta$, so $f$ is bounded. [step 1.1, L1, algebra]

3.1 On each subinterval of $P$, step 1.1 gives $\sup f\le\sup f_j+\eta$ and $\inf f\ge\inf f_j-\eta$; these suprema and infima exist by step 2.1. Multiplying by the nonnegative subinterval lengths and summing gives $U(f,P)\le U(f_j,P)+\eta(b-a)$ and $L(f,P)\ge L(f_j,P)-\eta(b-a)$. [step 1.1, step 1.2, step 2.1, L2, algebra]

4.1 Therefore $U(f,P)-L(f,P)\le U(f_j,P)-L(f_j,P)+2\eta(b-a)<\varepsilon$, so [L1] makes $f$ integrable. [step 3.1, L1, algebra]

5.1 Now let $\varepsilon>0$ be real and choose $N$ such that $|f_k(x)-f(x)|<\varepsilon/(b-a+1)$ for every $k\ge N$ and every $x\in[a,b]$. [step 4.1, A1, choose]

6.1 For $k\ge N$, both functions are integrable, so [L3] gives $\left|\int_a^b f_k-\int_a^b f\right|\le \varepsilon(b-a)/(b-a+1)<\varepsilon$. [step 4.1, step 5.1, L3, algebra]

7.1 Step 6.1 proves $\int_a^b f_k\to\int_a^b f$, while step 4.1 proves integrability of $f$. [step 4.1, step 6.1] ∎
````


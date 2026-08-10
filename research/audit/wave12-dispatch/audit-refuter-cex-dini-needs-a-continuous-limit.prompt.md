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

- critical risk (8): 5 declared dependencies; 6 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `cex-dini-needs-a-continuous-limit`

Normalized current SHA-256: `a1e56040a800f142454f2e8784bfd972ec6c5be9c93cf6f7ee12f29c5b11c936`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cex-dini-needs-a-continuous-limit
kind: counterexample
title: "Dini's theorem fails for a discontinuous limit: powers on $[0,1]$ decrease pointwise to a discontinuous endpoint indicator but not uniformly"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-dini-on-a-closed-interval, cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly, def-continuity-real, thm-algebra-of-continuous-functions, def-integer-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
    - title: "Dini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dini%27s_theorem"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** continuity of the pointwise limit in Dini's theorem can be
dropped.

On $[0,1]$ let $f_k(x)=x^{k+1}$. These continuous functions decrease
pointwise to the discontinuous endpoint indicator

$$\chi(x)=\begin{cases}0,&0\le x<1,\\1,&x=1,\end{cases}$$

and the convergence is not uniform.

## Facts & Assumptions

**Given:** The functions $f_k(x)=x^{k+1}$ and the endpoint indicator $\chi$ on $[0,1]$.

[L1] The powers $x^{k+1}$ converge pointwise to $\chi$ on $[0,1]$ and do not converge uniformly there ([[cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly]]).

[L2] Every polynomial function, hence every natural power, is continuous ([[thm-algebra-of-continuous-functions]], [[def-integer-power]], [[def-continuity-real]]).

[L3] Dini's theorem on a closed interval requires the approximating functions and their pointwise limit to be continuous ([[thm-dini-on-a-closed-interval]]).

[L4] Continuity at $c$ requires that every positive output error admit a positive input radius on which all nearby function values remain close to the value at $c$ ([[def-continuity-real]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $f_k$ is continuous by [L2]. [L2]

1.2 For $x\in[0,1]$, $f_{k+1}(x)=x^{k+2}=x\,x^{k+1}\le x^{k+1}=f_k(x)$, so the sequence is pointwise nonincreasing. [given, algebra]

1.3 The pointwise convergence to $\chi$ and the failure of uniform convergence are [L1]. [L1]

1.4 The function $\chi$ is discontinuous at $1$: for every $\delta>0$, the point $y:=1-\min\{\delta/2,1/2\}$ lies in $[0,1)$ with $|y-1|<\delta$ and $|\chi(y)-\chi(1)|=1$. [L4, algebra]

2.1 Thus compactness, continuity of all approximants, and monotonicity hold, but the limit is discontinuous and the uniform conclusion fails; continuity of the limit in [L3] is indispensable. [step 1.1, step 1.2, step 1.3, step 1.4, L3] ∎
````

## Wave 12 provenance row

```json
{
  "id": "cex-dini-needs-a-continuous-limit",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Dini%27s_theorem",
    "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
  ],
  "rationale": "Dini's theorem fails for a discontinuous limit: powers on $[0,1]$ decrease pointwise to a discontinuous endpoint indicator but not uniformly: The sources state Dini’s theorem with compactness, continuity, continuous limit, and monotonicity; the item specializes to a closed real interval or supplies an explicit standard witness showing why one named hypothesis cannot be dropped. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
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
      "source": "cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly",
      "source_section": "Statement refuted",
      "quote": "**Refuted claim:** pointwise convergence of real-valued functions on a closed bounded interval implies uniform convergence. For $k\\in\\mathbb{N}$ define $f_k:[0,1]\\to\\mathbb{R}$ by $$f_k(x):=x^{k+1}.$$ Then $(f_k)$ converges pointwise to the endpoint indicator $$\\chi(x):=\\begin{cases}0,&0\\le x<1,\\\\1,&x=1,\\end{cases}$$ but the convergence is not uniform.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f, g : A \\to \\mathbb{R}$, let $\\alpha \\in \\mathbb{R}$ and let $c \\in A$. Suppose $f$ and $g$ are continuous at $c$ ([[def-continuity-real]]). Then: 1. $f + g$, $\\alpha f$ and $fg$ are continuous at $c$; 2. $|f|$, the function $x \\mapsto |f(x)|$, is continuous at $c$; 3. $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, defined pointwise by $x \\mapsto \\max\\{f(x), g(x)\\}$ and $x \\mapsto \\min\\{f(x), g(x)\\}$ ([[def-max-min]]), are continuous at $c$; 4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the point $c$ lies in $A_0$ and the quotient $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is continuous at $c$ as a function on $A_0$. Moreover, with no hypothesis at all: 5. every constant function $A \\to \\mathbb{R}$ and the identity $\\mathrm{id} : A \\to \\mathbb{R}$, $x \\mapsto x$, are continuous on $A$; hence so is $x \\mapsto x^{n}$ for every $n \\in \\mathbb{N}$ ([[def-integer-power]]), and hence so is every **polynomial function** $x \\mapsto a_0 + a_1 x + \\dots + a_n x^{n}$ with real coefficients. Consequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$, $\\alpha f$, $fg$, $|f|$, $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, and $(f/g)|_{A_0}$ is continuous on $A_0$. **Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**, and $g$ may well vanish at points of $A$ far from $c$. The hypothesis is $g(c) \\ne 0$, not \"$g$ nowhere zero\"; what it buys is that $c$ itself lies in the smaller domain, which is what makes continuity there mean anything. **Nothing here is proved through a sequence.** Claims 1 and 4 are read off from [[thm-algebra-of-function-limits]], which is itself proved from $\\varepsilon$ and $\\delta$, and claims 2, 3 and 5 are proved directly below. So no choice principle is used anywhere in this item.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field ([[def-ordered-field]], [[def-field]]). **Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to the set $\\mathbb{R}$, the starting element $1$ and the function $f(x) = x \\cdot a$, there is a unique function $\\mathbb{N} \\to \\mathbb{R}$, written $n \\mapsto a^n$, with $$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a \\quad (n \\in \\mathbb{N}).$$ Thus $a^1 = a$, $a^2 = a \\cdot a$, and so on. Note that this is defined for **every** $a$, including $a = 0$. **Negative exponents.** If $a \\ne 0$ and $n \\in \\mathbb{N}$ with $n \\ge 1$, set $$a^{-n} := (a^n)^{-1}.$$ **Why that is legitimate.** The right-hand side presupposes that $a^n$ is invertible, that is, that $a^n \\ne 0$. This is a proof obligation and not an observation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \\ne 0$ in a field, $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, proved there by induction on $n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]). That lemma is a statement *about* the operation introduced here, so it depends on this definition and is recorded in this item's `justified_by` rather than in its `deps` (SCHEMA §3). Given $a^n \\ne 0$, the value $(a^n)^{-1}$ is a single well-determined element, because multiplicative inverses in a field are unique ([[lem-of-inverse-unique]]). **Integer exponents.** Every integer $m$ ([[def-integers]]) is either $\\iota(n)$ or $-\\iota(n)$ for a unique natural $n$, where $\\iota$ is the embedding $\\mathbb{N} \\to \\mathbb{Z}$ ([[lem-nat-embeds-int]], [[def-int-operations]]). This too is a citation and not a slogan: the order on $\\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \\ge 0$ or $m < 0$; the image of $\\iota$ is exactly the set of nonnegative integers, and each of them is $\\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then $-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]), so $-m = \\iota(n)$ and $m = -\\iota(n)$, with $n$ unique because $\\iota$ is injective. The two clauses above therefore define $a^m$ for every $m \\in \\mathbb{Z}$ whenever $a \\ne 0$, and for every $m \\in \\mathbb{N}$ for arbitrary $a$. The clauses are consistent where they overlap: the only overlap is $m = 0$, where $-\\iota(0) = \\iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field with its order and absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and neighbourhoods are those of [[def-neighbourhood-r]]. Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$. Then $f$ is **continuous at $c$** when $$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - f(c)| < \\varepsilon\\ \\bigr],$$ with $\\varepsilon$ and $\\delta$ ranging over the **positive reals**. In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$. **The point $c$ is required to lie in $A$, and the condition is unpunctured.** Both differ from [[def-function-limit]], and deliberately. There the quantifier runs over $0 < |x - c| < \\delta$, which removes $x = c$; here $x = c$ is allowed, and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \\varepsilon$, which is automatic. So allowing $x = c$ costs nothing, and it is what lets the definition be stated at every point of $A$, including the points where no limit exists. **Three clauses, and all three are part of the definition.** 1. **At a limit point.** Suppose $c \\in A$ is a limit point of $A$ ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the limit of $f$ at $c$ exists and $$\\lim_{x \\to c} f(x) \\;=\\; f(c)$$ ([[def-function-limit]]). Indeed, for a given $\\varepsilon > 0$ a $\\delta$ witnessing continuity witnesses the limit condition, because the limit condition quantifies over a subset of the points continuity quantifies over; and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses continuity, because the one point it omits, $x = c$, satisfies $|f(c) - f(c)| < \\varepsilon$ anyway. 2. **At an isolated point.** Suppose $c \\in A$ is an isolated point of $A$ ([[def-limit-point-r]]), so that $N_{\\eta}(c) \\cap A = \\{c\\}$ for some real $\\eta > 0$. Then **every** $f : A \\to \\mathbb{R}$ is continuous at $c$: take $\\delta := \\eta$, so that the only $x \\in A$ with $|x - c| < \\delta$ is $c$ itself, and $|f(c) - f(c)| = 0 < \\varepsilon$. 3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and nothing more. It is not a condition relating $f$ to points outside $A$. Every point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe continuity at every point of $A$. **This is not the raw $\\varepsilon$-$\\delta$ formula of [[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes wrong when the *punctured* formula of [[def-function-limit]] is written down at an arbitrary point of the domain: at an isolated point it is satisfied vacuously by every real $L$ at once, so it defines nothing, and this library therefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point. Continuity at an isolated point is a different matter: the formula above is not vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the only value being compared with itself — and it names a single, well-defined property. The limit is undefined there; the continuity is defined, and is automatic. Clause 1 is the only place where the two notions meet, and it is stated only where the limit exists as a notion. **Where the distinction disappears.** If $A$ is an open subset of $\\mathbb{R}$ ([[def-open-and-closed-in-r]]), then every $c \\in A$ has some $N_{\\eta}(c) \\subseteq A$, and a punctured neighbourhood is never empty ([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate interval ([[def-interval]]). Isolated points are what force clause 2 to exist at all, and they occur as soon as $A$ is allowed to be an arbitrary subset of $\\mathbb{R}$, as in $A = \\{0\\} \\cup [1,2]$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-dini-on-a-closed-interval",
      "source_section": "Statement",
      "quote": "Let $a<b$ be reals. Suppose $f_k:[a,b]\\to\\mathbb{R}$ and $f:[a,b]\\to\\mathbb{R}$ are continuous, $f_k\\to f$ pointwise, and the sequence is pointwise monotone in one fixed direction: $$f_k(x)\\le f_{k+1}(x)\\quad\\text{for all }k,x,$$ or $$f_{k+1}(x)\\le f_k(x)\\quad\\text{for all }k,x.$$ Then $f_k\\to f$ uniformly on $[a,b]$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field with its order and absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and neighbourhoods are those of [[def-neighbourhood-r]]. Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$. Then $f$ is **continuous at $c$** when $$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - f(c)| < \\varepsilon\\ \\bigr],$$ with $\\varepsilon$ and $\\delta$ ranging over the **positive reals**. In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$. **The point $c$ is required to lie in $A$, and the condition is unpunctured.** Both differ from [[def-function-limit]], and deliberately. There the quantifier runs over $0 < |x - c| < \\delta$, which removes $x = c$; here $x = c$ is allowed, and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \\varepsilon$, which is automatic. So allowing $x = c$ costs nothing, and it is what lets the definition be stated at every point of $A$, including the points where no limit exists. **Three clauses, and all three are part of the definition.** 1. **At a limit point.** Suppose $c \\in A$ is a limit point of $A$ ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the limit of $f$ at $c$ exists and $$\\lim_{x \\to c} f(x) \\;=\\; f(c)$$ ([[def-function-limit]]). Indeed, for a given $\\varepsilon > 0$ a $\\delta$ witnessing continuity witnesses the limit condition, because the limit condition quantifies over a subset of the points continuity quantifies over; and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses continuity, because the one point it omits, $x = c$, satisfies $|f(c) - f(c)| < \\varepsilon$ anyway. 2. **At an isolated point.** Suppose $c \\in A$ is an isolated point of $A$ ([[def-limit-point-r]]), so that $N_{\\eta}(c) \\cap A = \\{c\\}$ for some real $\\eta > 0$. Then **every** $f : A \\to \\mathbb{R}$ is continuous at $c$: take $\\delta := \\eta$, so that the only $x \\in A$ with $|x - c| < \\delta$ is $c$ itself, and $|f(c) - f(c)| = 0 < \\varepsilon$. 3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and nothing more. It is not a condition relating $f$ to points outside $A$. Every point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe continuity at every point of $A$. **This is not the raw $\\varepsilon$-$\\delta$ formula of [[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes wrong when the *punctured* formula of [[def-function-limit]] is written down at an arbitrary point of the domain: at an isolated point it is satisfied vacuously by every real $L$ at once, so it defines nothing, and this library therefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point. Continuity at an isolated point is a different matter: the formula above is not vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the only value being compared with itself — and it names a single, well-defined property. The limit is undefined there; the continuity is defined, and is automatic. Clause 1 is the only place where the two notions meet, and it is stated only where the limit exists as a notion. **Where the distinction disappears.** If $A$ is an open subset of $\\mathbb{R}$ ([[def-open-and-closed-in-r]]), then every $c \\in A$ has some $N_{\\eta}(c) \\subseteq A$, and a punctured neighbourhood is never empty ([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate interval ([[def-interval]]). Isolated points are what force clause 2 to exist at all, and they occur as soon as $A$ is allowed to be an arbitrary subset of $\\mathbb{R}$, as in $A = \\{0\\} \\cup [1,2]$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.4"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Each $f_k$ is continuous by [L2].",
      "step": "1.1",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "For $x\\in[0,1]$, $f_{k+1}(x)=x^{k+2}=x\\,x^{k+1}\\le x^{k+1}=f_k(x)$, so the sequence is pointwise nonincreasing.",
      "step": "1.2",
      "inputs": [
        "given",
        "algebra"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "The pointwise convergence to $\\chi$ and the failure of uniform convergence are [L1].",
      "step": "1.3",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "The function $\\chi$ is discontinuous at $1$: for every $\\delta>0$, the point $y:=1-\\min\\{\\delta/2,1/2\\}$ lies in $",
      "step": "1.4",
      "inputs": [
        "L4",
        "algebra"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Thus compactness, continuity of all approximants, and monotonicity hold, but the limit is discontinuous and the uniform conclusion fails; continuity of the limit in [L3] is indispensable.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "step 1.3",
        "step 1.4",
        "L3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "cex-dini-needs-a-continuous-limit: the Statement introduces no possibly empty family requiring a witness; its sequence domains are N or its displayed witness has a fixed nonempty domain."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "cex-dini-needs-a-continuous-limit: zero is not a distinguished parameter case in the claim; ordinary zero-valued functions, vectors, or bounds remain covered by its universal hypotheses."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "cex-dini-needs-a-continuous-limit: there is no cardinal, dimension, or exponent parameter with a separate value-one branch in this claim."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "cex-dini-needs-a-continuous-limit: the Statement has no collapse, coincidence, constant-family, or equality-case branch beyond cases already included by its universal estimates."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.2: For $x\\in[0,1]$, $f_{k+1}(x)=x^{k+2}=x\\,x^{k+1}\\le x^{k+1}=f_k(x)$, so the sequence is pointwise nonincreasing."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "cex-dini-needs-a-continuous-limit: the proof makes no choice from a family whose nonemptiness is not already supplied; any witness used is explicit or uniquely determined."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "cex-dini-needs-a-continuous-limit: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "cex-dini-needs-a-continuous-limit: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
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
    "source": "cex-dini-needs-a-continuous-limit",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-dini-on-a-closed-interval",
    "declared_target": "thm-dini-on-a-closed-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dini-needs-a-continuous-limit",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly",
    "declared_target": "cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions-examples",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dini-needs-a-continuous-limit",
    "sourcePage": "uniform-convergence-of-functions-examples",
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
    "source": "cex-dini-needs-a-continuous-limit",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dini-needs-a-continuous-limit",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "def-integer-power",
    "declared_target": "def-integer-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
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

## Full exact-current text of every cited or declared item (5)

### `cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly`

````markdown
---
id: cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly
kind: counterexample
title: "$f_k(x)=x^{k+1}$ converges pointwise but not uniformly on $[0,1]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-integer-power, lem-geometric-sequence-null, lem-bernoulli-inequality, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** pointwise convergence of real-valued functions on a closed
bounded interval implies uniform convergence.

For $k\in\mathbb{N}$ define $f_k:[0,1]\to\mathbb{R}$ by

$$f_k(x):=x^{k+1}.$$

Then $(f_k)$ converges pointwise to the endpoint indicator

$$\chi(x):=\begin{cases}0,&0\le x<1,\\1,&x=1,\end{cases}$$

but the convergence is not uniform.

## Facts & Assumptions

**Given:** The functions $f_k(x)=x^{k+1}$ and the endpoint indicator $\chi$ on $[0,1]$.

[L1] If $|r|<1$, then $r^k\to0$ ([[lem-geometric-sequence-null]], [[def-integer-power]]).

[L2] Bernoulli's inequality says $(1+t)^n\ge1+\iota(n)t$ for $t\ge-1$ and $n\in\mathbb{N}$ ([[lem-bernoulli-inequality]], [[def-canonical-natural]]).

[L3] The canonical naturals satisfy $\iota(k+1)>0$, and positive reciprocals reverse nonstrict inequalities ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L4] Uniform convergence requires one index after which the error is below every prescribed positive real at every point of the domain ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Counterexample

**Proof technique:** direct.

1.1 If $0\le x<1$, then $|x|<1$, so [L1] gives $x^{k+1}\to0=\chi(x)$; at $x=1$, one has $f_k(1)=1=\chi(1)$ for every $k$. Thus $f_k\to\chi$ pointwise. [L1]

1.2 For each $k$, put $a_k:=\iota(k+1)>0$ and $y_k:=1-1/(2a_k)$. Then $0\le y_k<1$, so $\chi(y_k)=0$. [L3, algebra]

2.1 Apply [L2] with $n=k+1$ and $t=-1/(2a_k)$: $f_k(y_k)=\left(1-1/(2a_k)\right)^{k+1}\ge1-a_k/(2a_k)=1/2$. [step 1.2, L2, L3, algebra]

3.1 Hence $|f_k(y_k)-\chi(y_k)|\ge1/2$ for every $k$, so no index makes the error smaller than $1/2$ at every point; the convergence is not uniform. [step 1.2, step 2.1, L4]

4.1 The functions therefore satisfy the refuted claim's hypothesis and violate its conclusion. [step 1.1, step 3.1] ∎
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

### `thm-algebra-of-continuous-functions`

````markdown
---
id: thm-algebra-of-continuous-functions
kind: theorem
title: "Sums, scalar multiples, products, absolute values, maxima, minima and quotients with nonvanishing denominator of continuous functions are continuous, as are constants, the identity and every polynomial function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, thm-algebra-of-function-limits, lem-sign-preservation-near-a-limit, def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, cor-of-reverse-triangle, def-max-min, lem-finite-set-has-max, def-integer-power, def-ordered-field, def-field]
justified_by: []
aliases: [thm-continuity-algebra]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "algebra of continuous functions"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.4, 4.9)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f, g : A \to \mathbb{R}$, let
$\alpha \in \mathbb{R}$ and let $c \in A$. Suppose $f$ and $g$ are continuous at
$c$ ([[def-continuity-real]]). Then:

1. $f + g$, $\alpha f$ and $fg$ are continuous at $c$;
2. $|f|$, the function $x \mapsto |f(x)|$, is continuous at $c$;
3. $\max\{f,g\}$ and $\min\{f,g\}$, defined pointwise by
   $x \mapsto \max\{f(x), g(x)\}$ and $x \mapsto \min\{f(x), g(x)\}$
   ([[def-max-min]]), are continuous at $c$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is continuous at
   $c$ as a function on $A_0$.

Moreover, with no hypothesis at all:

5. every constant function $A \to \mathbb{R}$ and the identity
   $\mathrm{id} : A \to \mathbb{R}$, $x \mapsto x$, are continuous on $A$; hence
   so is $x \mapsto x^{n}$ for every $n \in \mathbb{N}$
   ([[def-integer-power]]), and hence so is every **polynomial function**
   $x \mapsto a_0 + a_1 x + \dots + a_n x^{n}$ with real coefficients.

Consequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,
$\alpha f$, $fg$, $|f|$, $\max\{f,g\}$ and $\min\{f,g\}$, and
$(f/g)|_{A_0}$ is continuous on $A_0$.

**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,
and $g$ may well vanish at points of $A$ far from $c$. The hypothesis is
$g(c) \ne 0$, not "$g$ nowhere zero"; what it buys is that $c$ itself lies in
the smaller domain, which is what makes continuity there mean anything.

**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from
[[thm-algebra-of-function-limits]], which is itself proved from $\varepsilon$
and $\delta$, and claims 2, 3 and 5 are proved directly below. So no choice
principle is used anywhere in this item.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, functions $f, g : A \to \mathbb{R}$, a real $\alpha$, a point $c \in A$ at which $f$ and $g$ are continuous, and, for claim 4, the hypothesis $g(c) \ne 0$ together with $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$ ([[def-continuity-real]]).

[L2] A point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both; at an isolated point of its domain every function is continuous; at a limit point $c$ of $A$, continuity of $f$ at $c$ is exactly the statement that the limit of $f$ at $c$ exists and equals $f(c)$ ([[def-continuity-real]], [[def-limit-point-r]], [[def-neighbourhood-r]], [[def-function-limit]]).

[L3] Algebra of function limits at a limit point $c$ of $A$: if the limits of $f$ and $g$ at $c$ exist with values $L$ and $M$, then the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist with values $L+M$, $\alpha L$ and $LM$; and if $M \ne 0$ then $c$ is a limit point of $A_0$, and the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $L/M$ ([[thm-algebra-of-function-limits]]).

[L4] Sign preservation: if the limit of $g$ at a limit point $c$ of $A$ exists and is nonzero, then $c$ is a limit point of $A_0 = \{\, x \in A : g(x) \ne 0 \,\}$ ([[lem-sign-preservation-near-a-limit]]).

[L5] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$ ([[cor-of-reverse-triangle]]); and $|u| \ge 0$, $|u| = 0$ exactly when $u = 0$, $|uv| = |u||v|$ ([[lem-of-abs-value]]).

[L6] Maximum and minimum of a two-element set of reals exist ([[lem-finite-set-has-max]], [[def-max-min]]), and for all reals $u, v$ one has $\max\{u,v\} = \tfrac{1}{2}\bigl(u + v + |u-v|\bigr)$ and $\min\{u,v\} = \tfrac{1}{2}\bigl(u + v - |u-v|\bigr)$.

[L7] Ordered-field arithmetic in $\mathbb{R}$: trichotomy and totality of the order, the field identities, and $0 < 1$ so that $2 \ne 0$ and $t/2$ is defined ([[def-ordered-field]], [[def-field]]).

[L8] Integer powers: $a^{0} = 1$ and $a^{n+1} = a^{n} \cdot a$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 **Justification of the identity in [L6].** Let $u, v \in \mathbb{R}$. By totality either $u \ge v$ or $v \ge u$. If $u \ge v$ then $u - v \ge 0$, so $|u-v| = u-v$ and $\tfrac{1}{2}(u+v+|u-v|) = \tfrac{1}{2}(2u) = u = \max\{u,v\}$, while $\tfrac{1}{2}(u+v-|u-v|) = v = \min\{u,v\}$. If $v \ge u$ the same computation with the roles exchanged applies, since $|u-v| = v-u$ there. [L5, L6, L7]

1.2 **The isolated case.** Suppose $c$ is an isolated point of $A$, say $N_{\eta}(c) \cap A = \{c\}$ with $\eta > 0$ real. Then every function on $A$ is continuous at $c$ by [L2], which gives claims 1, 2 and 3 at once. For claim 4, assume $g(c) \ne 0$; then $c \in A_0$, and $N_{\eta}(c) \cap A_0 \subseteq N_{\eta}(c) \cap A = \{c\}$ with $c$ in the left-hand side, so $c$ is an isolated point of $A_0$ and every function on $A_0$, in particular $(f/g)|_{A_0}$, is continuous at $c$. [L2]

1.3 **Claim 2, at any point of $A$.** Let a real $\varepsilon > 0$ be given and let $\delta > 0$ be as in [L1] for $f$ and this $\varepsilon$. For $x \in A$ with $|x - c| < \delta$ the reverse triangle inequality gives $\bigl||f(x)| - |f(c)|\bigr| \le |f(x) - f(c)| < \varepsilon$. So $|f|$ is continuous at $c$, and no case distinction was needed. [L1, L5]

1.4 **Claim 5, constants and the identity.** If $f$ is constant then $|f(x) - f(c)| = 0 < \varepsilon$ for every $x \in A$ and every real $\varepsilon > 0$, so any $\delta > 0$ serves. For the identity, given a real $\varepsilon > 0$ take $\delta := \varepsilon$: every $x \in A$ with $|x - c| < \delta$ has $|\mathrm{id}(x) - \mathrm{id}(c)| = |x - c| < \varepsilon$. Both are continuous at every point of $A$. [L1, L5, L7]

1.5 **The limit-point case, claim 1.** Suppose $c$ is a limit point of $A$. By [L2] the limits of $f$ and of $g$ at $c$ exist and equal $f(c)$ and $g(c)$. By [L3] the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist and equal $f(c)+g(c)$, $\alpha f(c)$ and $f(c)g(c)$, which are exactly the values of those three functions at $c$; by [L2] again, each of them is continuous at $c$. [L2, L3]

1.6 **The limit-point case, claim 4.** Suppose $c$ is a limit point of $A$ and $g(c) \ne 0$. Then $c \in A_0$, and by [L4] the point $c$ is a limit point of $A_0$. By [L3] the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $f(c)/g(c)$, which is the value of $(f/g)|_{A_0}$ at $c$; by [L2] applied on the domain $A_0$, that function is continuous at $c$. [L2, L3, L4]

2.1 **Claims 1 and 4 in general.** By [L2] the point $c$ is either isolated in $A$ or a limit point of $A$; step 1.2 settles the first case and steps 1.5 and 1.6 the second. So claims 1 and 4 hold as stated. [step 1.2, step 1.5, step 1.6, L2]

3.1 **Claim 3.** By claim 1 the function $f - g = f + (-1)g$ is continuous at $c$, by step 1.3 so is $|f-g|$, and by claim 1 again so are $f + g + |f-g|$ and its scalar multiple by $1/2$. By step 1.1 that scalar multiple is the function $x \mapsto \max\{f(x), g(x)\}$, so the maximum is continuous at $c$; the same argument with $-|f-g|$ gives the minimum. [step 1.1, step 1.3, step 2.1, L6, L7]

3.2 **Claim 5, powers and polynomials.** The map $x \mapsto x^{0}$ is the constant $1$ and $x \mapsto x^{1}$ is the identity, both continuous on $A$ by step 1.4; and if $x \mapsto x^{n}$ is continuous on $A$ then so is $x \mapsto x^{n+1} = x^{n} \cdot x$, being a product of two functions continuous on $A$ by step 2.1. By induction on $n$, $x \mapsto x^{n}$ is continuous on $A$ for every $n \in \mathbb{N}$. A polynomial function $a_0 + a_1x + \dots + a_nx^{n}$ is obtained from these by finitely many scalar multiplications and additions, each of which preserves continuity by step 2.1. [step 1.4, step 2.1, L8]

4.1 Claims 1 to 5 are proved, all of them at an arbitrary point $c$ of $A$ and therefore, applied at every point, on the whole of $A$; and no sequence and no choice principle was used. [step 1.3, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Why the two-case shape, and why it is not an inconvenience.** Continuity is defined at every point of the domain, including isolated points, where no limit exists ([[def-continuity-real]]). The algebra of limits therefore cannot be applied blindly; but at an isolated point every function is continuous, so the case is settled before it is opened. Claims 2 and 5 are proved directly from $\varepsilon$ and $\delta$ and need no case distinction at all.

- **Absolute value, maximum and minimum are not in [[thm-algebra-of-function-limits]]**, and the reason is that they are not needed there. They are needed here: the extreme value theorem and the one-dimensional fixed point theorem both build auxiliary functions out of maxima, minima and differences, and [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]] builds its witnesses out of $|x - x_0|$ and quotients.

- **The converse of claim 2 is false**: $|f|$ may be continuous while $f$ is continuous nowhere. The function equal to $1$ on $\mathbb{Q}$ and to $-1$ elsewhere has constant absolute value; that it is nowhere continuous follows from the argument of [[cex-dirichlet-is-nowhere-continuous]] applied verbatim, since that argument uses only that the two values are distinct.
````

### `thm-dini-on-a-closed-interval`

````markdown
---
id: thm-dini-on-a-closed-interval
kind: theorem
title: "Dini's theorem on a closed interval: monotone pointwise convergence of continuous functions to a continuous limit is uniform"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-continuity-real, thm-algebra-of-continuous-functions, thm-continuity-preimage-characterisation, thm-heine-borel-r, lem-finite-set-has-max, lem-finite-choice, def-canonical-natural, lem-of-naturals-positive, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
    - title: "Dini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dini%27s_theorem"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a<b$ be reals. Suppose $f_k:[a,b]\to\mathbb{R}$ and
$f:[a,b]\to\mathbb{R}$ are continuous, $f_k\to f$ pointwise, and the sequence
is pointwise monotone in one fixed direction:

$$f_k(x)\le f_{k+1}(x)\quad\text{for all }k,x,$$

or

$$f_{k+1}(x)\le f_k(x)\quad\text{for all }k,x.$$

Then $f_k\to f$ uniformly on $[a,b]$.

## Facts & Assumptions

**Given:** Reals $a<b$, continuous functions $f_k,f:[a,b]\to\mathbb{R}$, pointwise convergence $f_k\to f$, and one of the two pointwise monotonicity conditions in the Statement.

[A1] Uniform convergence means that for every real $\varepsilon>0$ there is $N$ such that $|f_k(x)-f(x)|<\varepsilon$ for every $k\ge N$ and every $x\in[a,b]$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[L1] Sums and scalar multiples of continuous real functions are continuous ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L2] If $h:A\to\mathbb{R}$ is continuous, the inverse image of an open subset of $\mathbb{R}$ is relatively open in $A$: it is $O\cap A$ for some open $O\subseteq\mathbb{R}$ ([[thm-continuity-preimage-characterisation]]).

[L3] Every open cover of the closed bounded interval $[a,b]$ has a finite subcover ([[thm-heine-borel-r]]).

[L4] Every finite list of natural numbers has a greatest member: apply the finite-real maximum theorem to their canonical images, which preserve the natural-number order; finite choices can be made without any choice axiom ([[lem-finite-set-has-max]], [[def-canonical-natural]], [[lem-of-naturals-positive]], [[thm-nat-linear-order]], [[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix a real $\varepsilon>0$. For each $n\in\mathbb{N}$ put $h_n:=f_n-f$ and $U_n:=\{x\in[a,b]:|h_n(x)|<\varepsilon\}$. The function $h_n$ is continuous by [L1], so [L2] makes $U_n$ relatively open in $[a,b]$. [L1, L2, construct]

1.2 In the nondecreasing case, pointwise convergence forces $f_n(x)\le f(x)$ for every $n,x$, and the errors $f(x)-f_n(x)$ decrease with $n$; in the nonincreasing case it forces $f(x)\le f_n(x)$ and the errors $f_n(x)-f(x)$ decrease. Thus $U_n\subseteq U_{n+1}$ in either case, and pointwise convergence gives $\bigcup_nU_n=[a,b]$. [given, algebra]

2.1 Let $\mathcal{O}$ be the family of all open sets $O\subseteq\mathbb{R}$ whose trace $O\cap[a,b]$ equals $U_n$ for some $n$. By step 1.1 each $U_n$ has such an open witness, and by step 1.2 the family $\mathcal{O}$ covers $[a,b]$. [step 1.1, step 1.2, L2, construct]

3.1 By [L3], choose finitely many $O_0,\dots,O_r\in\mathcal{O}$ covering $[a,b]$. By finite choice, choose $n_0,\dots,n_r$ with $O_i\cap[a,b]=U_{n_i}$, and let $N:=\max\{n_0,\dots,n_r\}$. [step 2.1, L3, L4, choose]

4.1 Since the $U_n$ are increasing, every $U_{n_i}$ is contained in $U_N$; the traces of the $O_i$ cover $[a,b]$, so $U_N=[a,b]$, and then $U_k=[a,b]$ for every $k\ge N$. [step 1.2, step 3.1]

5.1 Therefore $|f_k(x)-f(x)|<\varepsilon$ for every $k\ge N$ and every $x\in[a,b]$. Since $\varepsilon$ was arbitrary, the convergence is uniform. [step 4.1, A1] ∎
````


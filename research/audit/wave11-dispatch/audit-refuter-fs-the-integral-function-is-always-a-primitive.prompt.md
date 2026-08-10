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

- critical risk (17): 21 declared dependencies; 21 cited facts; 7 numbered proof steps; biconditional / both-direction claim; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; quotient or equivalence-class construction; analytic limiting/completeness language
- top-20 manifest-edge consumer (21 outgoing relationships)

## Target item — `fs-the-integral-function-is-always-a-primitive`

Normalized current SHA-256: `41de010a444a641544e205ff8ced89d982c0381daa4ddedad6e030d8cbc64784`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: fs-the-integral-function-is-always-a-primitive
kind: false-statement
title: "FALSE: for every integrable $f$ on $[a,b]$, the integral function $F(x)=\\int_a^x f$ satisfies $F' = f$ on $[a,b]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-ftc-first-part, def-the-integral-function, cex-an-integrable-function-with-no-primitive, lem-changing-a-function-at-finitely-many-points, lem-integral-elementary-bounds, thm-additivity-over-subintervals, thm-finitely-many-discontinuities-integrable, thm-two-sided-limit-iff-both-one-sided, def-one-sided-limits, def-function-limit, def-derivative, def-continuity-real, def-classification-of-discontinuities, def-oriented-integral, def-darboux-integral, def-abs-value, lem-of-abs-value, def-interval, def-bounded-set, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "FALSE: $F$ is always a primitive"
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
    - title: "Sign function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sign_function"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

**False claim:** let $a<b$ be reals and let $f : [a,b] \to \mathbb{R}$ be
Riemann integrable ([[def-darboux-integral]]). Then its integral function
$F(x) = \int_a^x f$ ([[def-the-integral-function]]) is differentiable at every
point of $[a,b]$ with $F'(x) = f(x)$ there.

The claim fails in **two independent ways**, and both are exhibited below.

1. $F'$ may fail to exist. For the sign function $s$ on $[-1,1]$
   ([[cex-an-integrable-function-with-no-primitive]]) one has $F(x) = |x|-1$,
   which is not differentiable at $0$.
2. $F'$ may exist and differ from $f$. On $[0,1]$ let $f(x) := 0$ for
   $x \ne 1/2$ and $f(1/2) := 1$. Then $F$ is the zero function, so $F'(1/2) = 0$
   while $f(1/2) = 1$.

The second witness shows the failure is not exotic: **any** integrable $f$ that
differs from a continuous $g$ at a single point has the same integral function as
$g$, by [[lem-changing-a-function-at-finitely-many-points]], and therefore has
$F' = g \ne f$ at that point. Continuity of $f$ at the point is what the true
theorem [[thm-ftc-first-part]] asks for, and it asks for nothing more. It is not
claimed here to be *necessary*: what the conclusion needs is the equality
$F'(c) = f(c)$, and the last Remark below exhibits an $f$ discontinuous at a
point where that equality nevertheless holds.

## Facts & Assumptions

**Given:** The sign function $s$ on $[-1,1]$ of [[cex-an-integrable-function-with-no-primitive]], with $s(x) = -1$ for $x<0$, $s(0) = 0$ and $s(x) = 1$ for $x>0$; and the function $f$ on $[0,1]$ with $f(1/2) = 1$ and $f(x) = 0$ otherwise.

[A1] The false claim: for every integrable $u$ on $[p,q]$, the integral function of $u$ is differentiable everywhere on $[p,q]$ with derivative $u$.

[L1] $s$ is Riemann integrable on $[-1,1]$ ([[cex-an-integrable-function-with-no-primitive]], [[thm-finitely-many-discontinuities-integrable]], [[def-classification-of-discontinuities]], [[def-bounded-set]]).

[L2] Changing an integrable function at finitely many points changes neither its integrability nor its integral, and $\int_p^q c = c(q-p)$ for a constant ([[lem-changing-a-function-at-finitely-many-points]], [[lem-integral-elementary-bounds]]).

[L3] Additivity in the oriented form for arbitrary points, and $\int_p^p u = 0$ ([[thm-additivity-over-subintervals]], claim 3, [[def-oriented-integral]], [[def-the-integral-function]]).

[L4] If both one-sided limits of a function at $c$ exist and differ, the two-sided limit does not exist, so the derivative there does not exist ([[thm-two-sided-limit-iff-both-one-sided]], [[def-one-sided-limits]], [[def-function-limit]], [[def-derivative]]).

[L5] Absolute value: $|x| = x$ for $x \ge 0$, $|x| = -x$ for $x \le 0$, and $|x|/x$ is $1$ for $x>0$ and $-1$ for $x<0$ ([[def-abs-value]], [[lem-of-abs-value]]).

[L6] First fundamental theorem: if $u$ is integrable on $[p,q]$ and continuous at $c$, then the integral function of $u$ has derivative $u(c)$ at $c$ ([[thm-ftc-first-part]], [[def-continuity-real]]).

[L7] Ordered-field arithmetic: the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]).

## Refutation

**Proof technique:** direct.

1.1 **First witness.** $s$ is integrable on $[-1,1]$ by [L1], and its integral function is $F(x) = \int_{-1}^{x}s$. [given, L1]

1.2 **Second witness.** The function $f$ on $[0,1]$ is bounded and agrees with the constant $0$ off the single point $1/2$, so it is integrable with $\int_0^{x}f = \int_0^{x}0 = 0$ for every $x \in [0,1]$ by [L2] and [L3]; hence its integral function is the zero function. [given, L2, L3]

2.1 For $x \in [0,1]$: by [L3], $F(x) = \int_{-1}^{0}s + \int_0^{x}s$, and $s$ agrees with the constant $-1$ on $[-1,0]$ off the single point $0$ and with the constant $1$ on $[0,x]$ off the single point $0$, so [L2] gives $F(x) = -1 + x$. For $x \in [-1,0]$: $s$ agrees with the constant $-1$ on $[x,0]$ off $0$, so $\int_{-1}^{x}s = -(x-(-1)) = -x-1$ by [L2] and [L3]. In both cases $F(x) = |x|-1$ by [L5]. [step 1.1, L2, L3, L5]

2.2 The zero function is differentiable everywhere with derivative $0$, so its derivative at $1/2$ is $0$, while $f(1/2) = 1 \ne 0$. Here $F'$ **exists** at the point and differs from $f$ there, so [A1] fails again, in a different way. [step 1.2, given, L2, L7]

3.1 The difference quotient of $F$ at $0$ is $x \mapsto (F(x)-F(0))/x = |x|/x$, which is $1$ for $x>0$ and $-1$ for $x<0$ by [L5]; so its one-sided limits at $0$ are $1$ and $-1$. [step 2.1, L5]

4.1 By [L4] the limit of that quotient at $0$ does not exist, so $F$ is not differentiable at $0$ and [A1] fails at $s$: the claim is false. [step 3.1, A1, L4]

5.1 Both failures occur exactly at a discontinuity of the integrand: $s$ is discontinuous at $0$ and $f$ at $1/2$. Off those points [L6] applies and gives $F' = f$, so the correct statement is [[thm-ftc-first-part]], whose hypothesis is continuity of the integrand at the point in question. [step 4.1, step 2.2, L6] ∎

## Remarks

- **The two witnesses are genuinely different failures.** In the first, $F$ has no derivative at the bad point at all; in the second, $F$ is as smooth as could be wished and simply computes a different number. A repair attempting to weaken the conclusion to "$F$ is differentiable wherever it can be" would still be refuted by the second witness.

- **What is always true of $F$ is one dimension weaker.** For every integrable $f$ the integral function is Lipschitz, hence uniformly continuous ([[thm-the-integral-function-is-lipschitz]]); differentiability is exactly what continuity of the integrand buys, and nothing more is available.

- **The failure set can be much larger than a point.** For Thomae's function $t$ on $[0,1]$ the integral function is identically $0$, so $F' = 0$ while $t$ is positive at every rational: the claim above then fails at every point of an infinite set, not merely at finitely many. No general statement is made here about an arbitrary integrable $f$ — at a discontinuity where $f$ happens to take the value $F'$ does, the two agree, and $f$ vanishing off $\{1/\iota(n+1)\}$ is such a case at the point $0$.
````

## Wave 11 provenance row

```json
{
  "id": "fs-the-integral-function-is-always-a-primitive",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_ftc.html"
  ],
  "rationale": "The source states the precise FTC continuity-point condition and gives the sign-function integral whose absolute-value cusp is not differentiable. The item combines that canonical witness with the standard finite-point-change witness to distinguish nonexistence of F' from existence with F' not equal to f.",
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
      "source": "cex-an-integrable-function-with-no-primitive",
      "source_section": "Statement refuted",
      "quote": "**False claim:** every Riemann integrable function on a closed bounded interval\nhas a primitive there, that is, is the derivative of some function on that\ninterval.\n\nLet $s : [-1,1] \\to \\mathbb{R}$ be the sign function,\n\n$$s(x) \\;:=\\; \\begin{cases} -1 & -1 \\le x < 0, \\\\ 0 & x = 0, \\\\ 1 & 0 < x \\le 1. \\end{cases}$$\n\nThen $s$ is Riemann integrable on $[-1,1]$ with $\\int_{-1}^{1} s = 0$, and there\nis **no** $G : [-1,1] \\to \\mathbb{R}$ differentiable at every point of $[-1,1]$\nwith $G' = s$.\n\n**The integral function of $s$ is $F(x) = |x| - 1$**, which is differentiable at\nevery point of $[-1,1]$ except $x = 0$ — exactly the one point where $s$ is\ndiscontinuous. That is consistent with [[thm-ftc-first-part]], which claims\n$F'(c) = s(c)$ only at points of continuity of $s$, and it is what the refutation\nbelow turns into a contradiction.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-finitely-many-discontinuities-integrable",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]). Suppose there are $r \\in \\mathbb{N}$ and points\n$d_0, \\dots, d_{r-1} \\in [a,b]$ such that $f$ is continuous\n([[def-continuity-real]]) at every point of $[a,b]$ other than\n$d_0, \\dots, d_{r-1}$; that is, every discontinuity of $f$\n([[def-classification-of-discontinuities]]) occurs among those $r$ listed\npoints. Then $f$ is Riemann integrable on $[a,b]$ ([[def-darboux-integral]]).\n\nFor $r = 0$ the hypothesis says $f$ is continuous on $[a,b]$ and the conclusion\nis [[thm-continuous-implies-integrable]]; the argument below covers that case\nwithout a separate treatment. Repetitions in the list are allowed and harmless,\nand no claim is made that the listed points **are** discontinuities: the\nhypothesis is one-sided, so a finite superset of the discontinuity set is enough.\n\n**Nothing is said about the kind of the discontinuities.** They may be\nremovable, jumps, or essential ([[def-classification-of-discontinuities]]); only\ntheir number matters. Boundedness is a genuine hypothesis, since an unbounded\nfunction has no Darboux sums at all ([[def-darboux-sums]]).",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-classification-of-discontinuities",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$. Then\n$f$ is **discontinuous at $c$**, and $c$ is a **discontinuity of $f$**, when $f$\nis not continuous at $c$ ([[def-continuity-real]]). As in\n[[def-one-sided-limits]] write\n\n$$A^{-} := A \\cap (-\\infty, c), \\qquad A^{+} := A \\cap (c, \\infty)$$\n\n([[def-interval]]), and recall that $\\lim_{x \\to c^{-}} f(x)$ is defined only\nwhen $c$ is a limit point of $A^{-}$, and $\\lim_{x \\to c^{+}} f(x)$ only when\n$c$ is a limit point of $A^{+}$ ([[def-limit-point-r]]).\n\n**At an isolated point there is nothing to classify.** If $c$ is an isolated\npoint of $A$ ([[def-limit-point-r]]), so that $A \\cap N_{\\rho}(c) = \\{c\\}$ for\nsome real $\\rho > 0$, then $f$ is continuous at $c$: the $\\varepsilon$-$\\delta$\ncondition of [[def-continuity-real]] is satisfied by $\\delta := \\rho$, since the\nonly $x \\in A$ with $|x - c| < \\rho$ is $c$ itself and $|f(c) - f(c)| = 0$. So\nevery discontinuity is a limit point of $A$, and the classification below covers\nevery case that occurs.\n\n### Two-sided points\n\nSuppose $c$ is a limit point of **both** $A^{-}$ and $A^{+}$, so that both\none-sided limits are well posed. Say that $c$ is a discontinuity\n\n- **of the first kind** when both one-sided limits exist;\n- **of the second kind**, also called **essential**, when at least one of the two\n  one-sided limits fails to exist.\n\nA discontinuity of the first kind is further\n\n- **removable** when $\\lim_{x \\to c^{-}} f(x) = \\lim_{x \\to c^{+}} f(x)$; the\n  common value is then different from $f(c)$, for otherwise\n  [[thm-two-sided-limit-iff-both-one-sided]] would give\n  $\\lim_{x \\to c} f(x) = f(c)$ and $f$ would be continuous at $c$\n  ([[def-continuity-real]]);\n- a **jump** when $\\lim_{x \\to c^{-}} f(x) \\ne \\lim_{x \\to c^{+}} f(x)$; the\n  difference $\\lim_{x \\to c^{+}} f(x) - \\lim_{x \\to c^{-}} f(x)$ is then called\n  the **jump of $f$ at $c$**.\n\nThe three cases *removable*, *jump*, *essential* are mutually exclusive and\nexhaust the two-sided discontinuities of $f$: either both one-sided limits\nexist, and then they are equal or not, or one of them does not exist.\n\n**Removable is a name for what can be repaired.** If $c$ is a removable\ndiscontinuity with common one-sided value $L$, then the function agreeing with\n$f$ off $c$ and taking the value $L$ at $c$ is continuous at $c$, again by\n[[thm-two-sided-limit-iff-both-one-sided]] and [[def-continuity-real]]: changing\nthe single value $f(c)$ removes the discontinuity. No such repair is available at\na jump or at an essential discontinuity, since there the two-sided limit does not\nexist at all and no choice of value at $c$ can create it.\n\n### One-sided points\n\nIf $c$ is a limit point of exactly one of $A^{-}$ and $A^{+}$, only that side is\ndefined and only that side is used: $c$ is a discontinuity **of the first kind**\nwhen the one-sided limit on the side in question exists, and **of the second\nkind** otherwise. When it exists it is different from $f(c)$, since on such a\npoint the one-sided condition and the continuity condition are the same\ncondition; and there is no jump case, there being nothing to compare the value\nwith. The endpoints of an interval are the typical instance.\n\n**On the two vocabularies.** *First kind* and *second kind* are Rudin's terms and\nare recorded because the literature uses them; *removable*, *jump* and\n*essential* are the names used in the rest of this library. They name the same\nthree cases and no third classification is introduced.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field\n([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it.\n\nThe notions **upper bound** and **bounded above** are already fixed by\n[[def-complete-ordered-field]] and are only recalled here, never redefined:\n$u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and\n$S$ is *bounded above* if it has at least one upper bound. The dual notions are:\n\n- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-changing-a-function-at-finitely-many-points",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]), let $E \\subseteq [a,b]$ be finite\n([[def-countable]], [[def-equinumerous]]), and let $g : [a,b] \\to \\mathbb{R}$\nsatisfy\n\n$$g(x) \\;=\\; f(x) \\qquad \\text{for every } x \\in [a,b] \\setminus E .$$\n\nThen $g$ is integrable on $[a,b]$ and\n\n$$\\int_a^b g \\;=\\; \\int_a^b f .$$\n\nIn particular the values of an integrand at the endpoints of the interval, and at\nany finite set of points, are irrelevant to both questions.",
      "uses": [
        "1.2",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-integral-elementary-bounds",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ satisfy\n\n$$m \\;\\le\\; f(x) \\;\\le\\; M \\qquad \\text{for every } x \\in [a,b],$$\n\nwith $m, M$ real. Then $f$ is bounded ([[def-bounded-set]]), so its Darboux sums\nand integrals are defined ([[def-darboux-sums]], [[def-darboux-integral]]), and\nfor **every** partition $P$ of $[a,b]$ ([[def-partition-and-refinement]])\n\n$$m(b-a) \\;\\le\\; L(f,P) \\;\\le\\; \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f \\;\\le\\; U(f,P) \\;\\le\\; M(b-a) .$$\n\nIn particular, taking $f$ to be the constant function with value $c$:\n\n$$\\int_a^b c \\;=\\; c\\,(b-a) ,$$\n\nthe constant function being integrable, with $L(f,P) = U(f,P) = c(b-a)$ for\nevery partition $P$.",
      "uses": [
        "1.2",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-additivity-over-subintervals",
      "source_section": "Statement",
      "quote": "Let $a < c < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]). Then:\n\n1. $f$ is integrable on $[a,b]$ ([[def-darboux-integral]]) **if and only if** its\n   restrictions to $[a,c]$ and to $[c,b]$ are integrable;\n2. and in that case\n   $$\\int_a^b f \\;=\\; \\int_a^c f \\;+\\; \\int_c^b f .$$\n3. **Oriented form.** Let $\\alpha < \\beta$ be reals, let $f : [\\alpha,\\beta] \\to\n   \\mathbb{R}$ be integrable, and let $u, v, w \\in [\\alpha,\\beta]$ be arbitrary.\n   Then, with the convention of [[def-oriented-integral]],\n   $$\\int_u^v f \\;+\\; \\int_v^w f \\;=\\; \\int_u^w f .$$\n\nClaim 3 is where [[def-oriented-integral]] earns its place: it holds for every\narrangement of the three points, including the degenerate ones, and it is the\nform used everywhere below.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-oriented-integral",
      "source_section": "Definition",
      "quote": "**Why this item is first.** The published definition of the integral does not\ncover this page. [[def-darboux-integral]] is stated for reals $a < b$, because\nthe partitions it quantifies over are those of [[def-partition-and-refinement]],\nwhose standing hypothesis is $a < b$: with $a = b$ the chain\n$a = t_0 < \\dots < t_n = b$ is unsatisfiable. So $\\int_a^b f$ is an undefined\nsymbol whenever $a \\ge b$, and every additivity statement below would be\nill-formed as it is usually written. This item extends the notation, and nothing\nelse: the object it names is still the Darboux integral of\n[[def-darboux-integral]].\n\nLet $u, v \\in \\mathbb{R}$ and write\n\n$$[u \\wedge v,\\ u \\vee v] \\;:=\\; \\text{the closed interval with endpoints } u \\text{ and } v$$\n\n([[def-interval]]). Let $f$ be a real-valued function whose domain contains that\ninterval. Say that **$f$ is integrable between $u$ and $v$** when either $u = v$,\nor $u \\ne v$ and the restriction of $f$ to $[u \\wedge v,\\ u \\vee v]$ is bounded\n([[def-bounded-set]]) and Darboux integrable there ([[def-darboux-integral]],\n[[def-darboux-sums]]). For such $f$ define\n\n$$\\int_u^v f \\;:=\\; \\begin{cases} \\text{the Darboux integral of } f \\text{ over } [u,v] & \\text{if } u < v, \\\\[2pt] 0 & \\text{if } u = v, \\\\[2pt] -\\displaystyle\\int_v^u f & \\text{if } u > v. \\end{cases}$$\n\n**There is nothing to check for consistency.** The three clauses are indexed by\nthe three cases of trichotomy, $u < v$, $u = v$ and $u > v$, which are mutually\nexclusive and exhaustive; no pair of them ever applies to the same $(u,v)$. In\nparticular the first clause is untouched, so on $u < v$ this is the published\nintegral verbatim and every published theorem about it applies unchanged.\n\n**The middle clause is a stipulation, not a computation.** It is *not* claimed\nthat $0$ is a value forced by the $u < v$ definition in any limiting sense; that\ndefinition simply says nothing at $u = v$, and $\\int_u^u f := 0$ is what is\nwritten there. It is also unconditional: no hypothesis on $f$ beyond being\ndefined at $u$ is asked for, since the case $u = v$ never refers to a partition.\n\n### The two consequences used throughout the page\n\n**Antisymmetry, for every pair.** For all reals $u, v$ with $f$ integrable\nbetween them,\n\n$$\\int_u^v f \\;=\\; -\\int_v^u f .$$\n\nIndeed if $u < v$ then $v > u$ and the third clause reads\n$\\int_v^u f = -\\int_u^v f$, which rearranges to the display; if $u = v$ both\nsides are $0$; and if $u > v$ the third clause is the display itself.\n\n**Absolute values agree.** Consequently\n$\\bigl|\\int_u^v f\\bigr| = \\bigl|\\int_v^u f\\bigr|$ for every such pair.\n\n**An obligation recorded here and discharged elsewhere.** With this convention\nthe additivity identity\n\n$$\\int_u^v f \\;+\\; \\int_v^w f \\;=\\; \\int_u^w f$$\n\nholds for **every** arrangement of $u, v, w$ in an interval on which $f$ is\nintegrable, not only for $u < v < w$. That is a theorem and not part of this\ndefinition; it is proved as the last clause of\n[[thm-additivity-over-subintervals]], and nothing on this page uses it before it\nis proved there.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-the-integral-function",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]). The **integral function of $f$ with base point $a$**\nis\n\n$$F : [a,b] \\to \\mathbb{R}, \\qquad F(x) \\;:=\\; \\int_a^x f .$$\n\n**It is a genuine function, and that has to be checked.** For $x \\in (a,b]$ the\nrestriction of $f$ to $[a,x]$ is integrable, by\n[[lem-integrability-on-a-subinterval]] applied with $c := a$ and $d := x$, so\n$\\int_a^x f$ names a single real number ([[def-darboux-integral]]). For $x = a$\nthe symbol $\\int_a^a f$ is $0$ by [[def-oriented-integral]]. So $F(x)$ is defined\nat every point of $[a,b]$ and\n\n$$F(a) \\;=\\; 0 .$$\n\nMore generally, for any base point $c \\in [a,b]$ the function\n$x \\mapsto \\int_c^x f$ is defined on the whole of $[a,b]$, the integral being the\noriented one of [[def-oriented-integral]] when $x < c$; the case $c = a$ is\nwritten $F$ above and is the one used unless another base point is named.\n\n### The two identities used throughout\n\n**Increments are integrals.** For all $x, y \\in [a,b]$, in either order,\n\n$$F(y) - F(x) \\;=\\; \\int_x^y f .$$\n\nThis is claim 3 of [[thm-additivity-over-subintervals]] applied to the three\npoints $a$, $x$, $y$: it gives $\\int_a^x f + \\int_x^y f = \\int_a^y f$, that is\n$F(x) + \\int_x^y f = F(y)$. No ordering of $x$ and $y$ is assumed, and the\ndegenerate cases $x = y$, $x = a$ and $y = a$ are included, since claim 3 is\nstated for arbitrary points.\n\n**Changing the base point changes $F$ by a constant.** If $c \\in [a,b]$ and\n$F_c(x) := \\int_c^x f$, then for every $x \\in [a,b]$\n\n$$F_c(x) \\;=\\; F(x) - F(c) ,$$\n\nagain by claim 3 of [[thm-additivity-over-subintervals]] at the points $a$, $c$,\n$x$. So the family of integral functions of $f$ is one function up to an\nadditive constant.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-two-sided-limit-iff-both-one-sided",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in\n\\mathbb{R}$ be a limit point of **both** $A^{-} = A \\cap (-\\infty, c)$ and\n$A^{+} = A \\cap (c, \\infty)$ ([[def-limit-point-r]], [[def-interval]]), so that\nboth one-sided limits at $c$ are well posed ([[def-one-sided-limits]]). Then $c$\nis a limit point of $A$, and for every $L \\in \\mathbb{R}$:\n\n$$\\lim_{x \\to c} f(x) = L \\quad \\Longleftrightarrow \\quad \\lim_{x \\to c^{-}} f(x) = L \\ \\text{ and } \\ \\lim_{x \\to c^{+}} f(x) = L$$\n\n([[def-function-limit]]). Consequently the limit of $f$ at $c$ **exists** if and\nonly if both one-sided limits exist and are equal, and in that case\n\n$$\\lim_{x \\to c} f(x) \\;=\\; \\lim_{x \\to c^{-}} f(x) \\;=\\; \\lim_{x \\to c^{+}} f(x) .$$\n\n**The hypothesis on both sides is what makes the statement an equivalence.** If\n$c$ is a limit point of only one of the two sets — as $1$ is for\n$\\{0\\} \\cup [1,2]$ — then the one-sided limit on that side and the two-sided\nlimit are the same condition, and the symbol on the other side is not defined at\nall ([[def-one-sided-limits]]).",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-one-sided-limits",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in\n\\mathbb{R}$. Put\n\n$$A^{-} := A \\cap (-\\infty, c), \\qquad A^{+} := A \\cap (c, \\infty)$$\n\n([[def-interval]]), and write $f^{-} := f|_{A^{-}}$ and $f^{+} := f|_{A^{+}}$\nfor the restrictions of $f$ to those sets.\n\n**Right limit.** Suppose $c$ is a limit point of $A^{+}$ ([[def-limit-point-r]]).\nFor $L \\in \\mathbb{R}$ we write\n\n$$\\lim_{x \\to c^{+}} f(x) = L \\quad :\\Longleftrightarrow \\quad \\lim_{x \\to c} f^{+}(x) = L$$\n\nin the sense of [[def-function-limit]]. Written out: for every real\n$\\varepsilon > 0$ there is a real $\\delta > 0$ such that\n\n$$|f(x) - L| < \\varepsilon \\qquad \\text{for every } x \\in A \\text{ with } c < x < c + \\delta .$$\n\n**Left limit.** Suppose $c$ is a limit point of $A^{-}$. For $L \\in \\mathbb{R}$\nwe write $\\lim_{x \\to c^{-}} f(x) = L$ when $\\lim_{x \\to c} f^{-}(x) = L$; written\nout, for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with\n$|f(x) - L| < \\varepsilon$ for every $x \\in A$ with $c - \\delta < x < c$.\n\n**The written-out forms agree with the definitions.** For $x \\in A^{+}$ the two\nconditions $0 < |x - c| < \\delta$ and $c < x < c + \\delta$ are the same: $x > c$\ngives $x - c > 0$, so $|x - c| = x - c$ and $0 < |x - c| < \\delta$ reads\n$0 < x - c < \\delta$ ([[lem-of-abs-value]]). Symmetrically on the left, where\n$x < c$ gives $|x - c| = c - x$.\n\n**Well-posedness is inherited, not reproved.** A one-sided limit *is* a limit,\nnamely the limit of a restriction, so:\n\n- **Uniqueness.** At most one $L$ can occur, by [[lem-function-limit-unique]]\n  applied to $f^{+}$ on the domain $A^{+}$ (respectively to $f^{-}$ on\n  $A^{-}$), which is legitimate exactly because $c$ was required to be a limit\n  point of that set. This is what makes the notation $\\lim_{x \\to c^{+}} f(x)$\n  denote a single real.\n- **Locality and restriction.** Both claims of [[lem-limit-is-local]] apply\n  verbatim to $f^{+}$ and $f^{-}$.\n\n**When the symbols are defined.** If $c$ is not a limit point of $A^{+}$ — for\ninstance if $A$ contains no point to the right of $c$, or only points bounded\naway from $c$ on that side — then $\\lim_{x \\to c^{+}} f(x)$ is **not defined**\nhere, for the reason given in [[def-function-limit]]: the\n$\\varepsilon$-$\\delta$ condition would be satisfied vacuously by every real at\nonce. The same applies on the left.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-function-limit",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]) with its order and absolute value\n([[def-real-order]]).\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c \\in \\mathbb{R}$\nbe a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \\in \\mathbb{R}$.\nWe say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write\n\n$$\\lim_{x \\to c} f(x) = L ,$$\n\nwhen\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ 0 < |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - L| < \\varepsilon\\ \\bigr],$$\n\nwhere $\\varepsilon$ and $\\delta$ range over the **positive reals**.\n\nIn the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:\nfor every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with\n\n$$f\\bigl(A \\cap N^{*}_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}(L),$$\n\n$N^{*}_{\\delta}(c) = \\{\\, y : 0 < |y - c| < \\delta \\,\\}$ being the punctured\n$\\delta$-neighbourhood of $c$ and $N_{\\varepsilon}(L) = (L - \\varepsilon,\\ L +\n\\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because\n$|f(x) - L| < \\varepsilon$ says exactly $f(x) \\in N_\\varepsilon(L)$, and\n$0 < |x - c| < \\delta$ says exactly $x \\in N^{*}_\\delta(c)$.\n\n**Three features of this definition are load bearing, not decoration.**\n\n1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that\n   says every punctured neighbourhood of $c$ meets $A$, so for every $\\delta > 0$\n   the set $A \\cap N^{*}_\\delta(c)$ over which the implication quantifies is\n   nonempty. Drop the requirement and the implication can be satisfied\n   vacuously by *every* real $L$ at once, which is exactly what\n   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$\n   that is not a limit point of $A$ — an isolated point — the symbol\n   $\\lim_{x \\to c} f(x)$ is therefore **not defined** in this library.\n\n2. **$c \\in A$ is not required.** A limit point of $A$ need not belong to $A$\n   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This\n   is what allows a limit to be taken at a point where the function is not\n   defined at all, as at $0$ for $x \\mapsto x\\,\\psi(1/x)$.\n\n3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis\n   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the\n   single point $c$ changes nothing. Equality of the limit with the value is an\n   extra condition, not a consequence: [[fs-limit-equals-value]].\n\n**The notation presumes uniqueness.** Writing $\\lim_{x \\to c} f(x) = L$ treats\nthe left-hand side as a name for a single real number, which is legitimate only\nbecause at a limit point at most one $L$ can satisfy the displayed condition.\nThat obligation is discharged by [[lem-function-limit-unique]], recorded in this\nitem's `justified_by`. As with $\\sup S$ ([[rem-sup-conventions]]) and\n$\\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function\nalready known to have a limit at $c$.\n\n**Real and rational $\\varepsilon$ define the same relation.** Above,\n$\\varepsilon$ and $\\delta$ range over the positive reals. Restricting either\nquantifier to the positive rationals gives the same relation: every positive\nrational is a positive real, and below every positive real lies a positive\nrational ([[lem-rat-embeds-dense]]), so an $\\varepsilon$-condition verified for\nall positive rationals is verified for an arbitrary positive real $\\eta$ by\nrunning it at a rational $\\varepsilon$ with $0 < \\varepsilon < \\eta$, and a\n$\\delta$ produced as a real may be shrunk to a rational one below it. This is\nthe passage sanctioned in the remarks of [[def-sequence]], and it is what lets\nthis definition be compared with [[def-real-limit]], whose $\\varepsilon$ is\nrational, in [[thm-sequential-criterion-for-function-limits]].",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-derivative",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), neighbourhoods are those of\n[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a\n**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function\n\n$$q_{f,c} : A \\setminus \\{c\\} \\to \\mathbb{R}, \\qquad q_{f,c}(x) := \\frac{f(x) - f(c)}{x - c} .$$\n\nThe division is legitimate at every point of the domain, since $x \\ne c$ gives\n$x - c \\ne 0$.\n\n**The point $c$ is a limit point of $A \\setminus \\{c\\}$, not merely of $A$.**\nFor every real $\\varepsilon > 0$ the punctured neighbourhood\n$N^{*}_{\\varepsilon}(c)$ omits $c$, so\n\n$$N^{*}_{\\varepsilon}(c) \\cap A \\;=\\; N^{*}_{\\varepsilon}(c) \\cap (A \\setminus \\{c\\}) ,$$\n\nand the left-hand side is nonempty because $c$ is a limit point of $A$. So\n$q_{f,c}$ is a function on a set having $c$ as a limit point, and\n$\\lim_{x \\to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.\n\n$f$ is **differentiable at $c$** when that limit exists, and then the\n**derivative of $f$ at $c$** is\n\n$$f'(c) \\;:=\\; \\lim_{x \\to c} q_{f,c}(x) \\;=\\; \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c} .$$\n\n**Two obligations are carried by that notation, and both are discharged here.**\n\n1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a\n   single real number. That is legitimate: $c$ is a limit point of the domain\n   $A \\setminus \\{c\\}$ of $q_{f,c}$, so at most one real can satisfy the\n   $\\varepsilon$-$\\delta$ condition, by [[lem-function-limit-unique]] applied to\n   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the\n   symbol denotes.\n2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not\n   decoration. At an **isolated** point of $A$ the punctured condition\n   $0 < |x - c| < \\delta$ is met by no point of the domain at all, so the\n   $\\varepsilon$-$\\delta$ formula is satisfied vacuously by *every* real at\n   once; this is why [[def-function-limit]] leaves the limit undefined there,\n   and it is why this library defines $f'(c)$ only at a limit point of $A$. At\n   an isolated point of its domain a function is neither differentiable nor\n   non-differentiable here: the question is not posed.\n\n**The limit sees only $A \\setminus \\{c\\}$, so how the difference quotient is\nextended to $c$ is irrelevant.** Let $Q : A \\to \\mathbb{R}$ agree with\n$q_{f,c}$ at every point of $A \\setminus \\{c\\}$, and let $L \\in \\mathbb{R}$.\nThen $\\lim_{x \\to c} Q(x) = L$ if and only if $\\lim_{x \\to c} q_{f,c}(x) = L$.\nBoth conditions read: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ such that every point $x$ of the relevant domain with\n$0 < |x - c| < \\delta$ satisfies $|{\\cdot} - L| < \\varepsilon$\n([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both\nquantifiers, so in both cases the points quantified over are exactly the\n$x \\in A \\setminus \\{c\\}$ with $0 < |x - c| < \\delta$, at which $Q$ and\n$q_{f,c}$ take the same value. The two conditions are the same condition.\n\n**Differentiability on a set.** For $S \\subseteq A$, $f$ is **differentiable on\n$S$** when it is differentiable at every $c \\in S$; implicit in that phrase is\nthat every point of $S$ is a limit point of $A$. $f$ is **differentiable** when\nit is differentiable on the whole of $A$.\n\n**Restriction of the domain.** Let $B \\subseteq A$, let $c \\in B$ and suppose\n$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the\nrestriction $f|_B : B \\to \\mathbb{R}$, and\n\n$$(f|_B)'(c) \\;=\\; f'(c) .$$\n\nIndeed $B \\setminus \\{c\\} \\subseteq A \\setminus \\{c\\}$; the displayed identity\nof punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit\npoint of $B \\setminus \\{c\\}$; the difference quotient $q_{f|_B, c}$ is the\nrestriction of $q_{f,c}$ to $B \\setminus \\{c\\}$, since $f|_B(c) = f(c)$; and\nclaim 2 of [[lem-limit-is-local]] carries the limit to that restriction.\n\n**Every point of a nondegenerate interval is a limit point of it.** Let\n$J \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) with at least two\nelements and let $p \\in J$. Choose $q \\in J$ with $q \\ne p$, and let a real\n$\\varepsilon > 0$ be given. If $p < q$, put $y := p + \\tfrac{1}{2}\\min\\{\\varepsilon,\\ q - p\\}$;\nthen $p < y$, and $y - p \\le \\tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and\norder-convexity gives $y \\in J$, while $0 < |y - p| < \\varepsilon$. If $q < p$,\nthe point $y := p - \\tfrac{1}{2}\\min\\{\\varepsilon,\\ p - q\\}$ serves in the same\nway. So $N^{*}_{\\varepsilon}(p) \\cap J \\ne \\varnothing$ for every real\n$\\varepsilon > 0$, that is, $p$ is a limit point of $J$\n([[def-limit-point-r]]).\n\nConsequently, for $f$ defined on a nondegenerate interval $I$, the symbol\n$f'(c)$ is meaningful at **every** $c \\in I$, endpoints included. At an endpoint\nthe difference quotient is taken over the points of $I$ lying on the one side\nthat is available, so what other texts call a one-sided derivative is, here,\nsimply the derivative of $f$ on $I$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-abs-value",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of\n$x \\in F$ is\n\n$$|x| \\;:=\\; \\begin{cases} x & \\text{if } x \\ge 0, \\\\ -x & \\text{if } x < 0. \\end{cases}$$",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-ftc-first-part",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]), let $F$ be its integral function\n([[def-the-integral-function]]), and let $c \\in [a,b]$ be a point at which $f$ is\ncontinuous ([[def-continuity-real]]). Then $F$ is differentiable at $c$ as a\nfunction on $[a,b]$ ([[def-derivative]]) and\n\n$$F'(c) \\;=\\; f(c) .$$\n\nAt $c = a$ and $c = b$ this is the one-sided statement, which is what\n[[def-derivative]] means at those points: every point of a nondegenerate interval\nis a limit point of it, so $F'(c)$ is a meaningful symbol at every $c \\in [a,b]$,\nand the difference quotient is taken over $[a,b] \\setminus \\{c\\}$.\n\n**Consequently, if $f$ is continuous on the whole of $[a,b]$, then $F$ is a\nprimitive of $f$ there**: $F' = f$ at every point of $[a,b]$.\n\n**Continuity at $c$ is a hypothesis and it cannot be dropped.** For an integrable\n$f$ that is discontinuous at $c$, $F'(c)$ may fail to exist, and it may exist and\ndiffer from $f(c)$; both are exhibited on the companion page, by\nan integrable function with no primitive and by a false\nstatement about the integral function.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field with its order and\nabsolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and\nneighbourhoods are those of [[def-neighbourhood-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$. Then\n$f$ is **continuous at $c$** when\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - f(c)| < \\varepsilon\\ \\bigr],$$\n\nwith $\\varepsilon$ and $\\delta$ ranging over the **positive reals**. In the\nlanguage of neighbourhoods: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ with\n\n$$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$\n\n$f$ is **continuous on $A$** when it is continuous at every point of $A$.\n\n**The point $c$ is required to lie in $A$, and the condition is unpunctured.**\nBoth differ from [[def-function-limit]], and deliberately. There the quantifier\nruns over $0 < |x - c| < \\delta$, which removes $x = c$; here $x = c$ is allowed,\nand at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \\varepsilon$, which is\nautomatic. So allowing $x = c$ costs nothing, and it is what lets the definition\nbe stated at every point of $A$, including the points where no limit exists.\n\n**Three clauses, and all three are part of the definition.**\n\n1. **At a limit point.** Suppose $c \\in A$ is a limit point of $A$\n   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the\n   limit of $f$ at $c$ exists and\n   $$\\lim_{x \\to c} f(x) \\;=\\; f(c)$$\n   ([[def-function-limit]]). Indeed, for a given $\\varepsilon > 0$ a $\\delta$\n   witnessing continuity witnesses the limit condition, because the limit\n   condition quantifies over a subset of the points continuity quantifies over;\n   and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses\n   continuity, because the one point it omits, $x = c$, satisfies\n   $|f(c) - f(c)| < \\varepsilon$ anyway.\n\n2. **At an isolated point.** Suppose $c \\in A$ is an isolated point of $A$\n   ([[def-limit-point-r]]), so that $N_{\\eta}(c) \\cap A = \\{c\\}$ for some real\n   $\\eta > 0$. Then **every** $f : A \\to \\mathbb{R}$ is continuous at $c$: take\n   $\\delta := \\eta$, so that the only $x \\in A$ with $|x - c| < \\delta$ is $c$\n   itself, and $|f(c) - f(c)| = 0 < \\varepsilon$.\n\n3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and\n   nothing more. It is not a condition relating $f$ to points outside $A$.\n\nEvery point of $A$ is either a limit point of $A$ or an isolated point of $A$,\nand never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe\ncontinuity at every point of $A$.\n\n**This is not the raw $\\varepsilon$-$\\delta$ formula of\n[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes\nwrong when the *punctured* formula of [[def-function-limit]] is written down at\nan arbitrary point of the domain: at an isolated point it is satisfied\nvacuously by every real $L$ at once, so it defines nothing, and this library\ntherefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point.\nContinuity at an isolated point is a different matter: the formula above is not\nvacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the\nonly value being compared with itself — and it names a single, well-defined\nproperty. The limit is undefined there; the continuity is defined, and is\nautomatic. Clause 1 is the only place where the two notions meet, and it is\nstated only where the limit exists as a notion.\n\n**Where the distinction disappears.** If $A$ is an open subset of $\\mathbb{R}$\n([[def-open-and-closed-in-r]]), then every $c \\in A$ has some\n$N_{\\eta}(c) \\subseteq A$, and a punctured neighbourhood is never empty\n([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and\nclause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate\ninterval ([[def-interval]]). Isolated points are what force clause 2 to exist at\nall, and they occur as soon as $A$ is allowed to be an arbitrary subset of\n$\\mathbb{R}$, as in $A = \\{0\\} \\cup [1,2]$.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L7",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L7",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "2.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "fs-the-integral-function-is-always-a-primitive-step-1-1",
      "claim": "**First witness.** $s$ is integrable on $[-1,1]$ by [L1], and its integral function is $F(x) = \\int_{-1}^{x}s$. [given, L1]",
      "step": "1.1",
      "inputs": [
        "given",
        "L1"
      ]
    },
    {
      "id": "fs-the-integral-function-is-always-a-primitive-step-1-2",
      "claim": "**Second witness.** The function $f$ on $[0,1]$ is bounded and agrees with the constant $0$ off the single point $1/2$, so it is integrable with $\\int_0^{x}f = \\int_0^{x}0 = 0$ for every $x \\in [0,1]$ by [L2] and [L3]; hence its integral function is the zero function. [given, L2, L3]",
      "step": "1.2",
      "inputs": [
        "given",
        "L2",
        "L3"
      ]
    },
    {
      "id": "fs-the-integral-function-is-always-a-primitive-step-2-1",
      "claim": "For $x \\in [0,1]$: by [L3], $F(x) = \\int_{-1}^{0}s + \\int_0^{x}s$, and $s$ agrees with the constant $-1$ on $[-1,0]$ off the single point $0$ and with the constant $1$ on $[0,x]$ off the single point $0$, so [L2] gives $F(x) = -1 + x$. For $x \\in [-1,0]$: $s$ agrees with the constant $-1$ on $[x,0]$ off $0$, so $\\int_{-1}^{x}s = -(x-(-1)) = -x-1$ by [L2] and",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L2",
        "L3",
        "L5"
      ]
    },
    {
      "id": "fs-the-integral-function-is-always-a-primitive-step-2-2",
      "claim": "The zero function is differentiable everywhere with derivative $0$, so its derivative at $1/2$ is $0$, while $f(1/2) = 1 \\ne 0$. Here $F'$ **exists** at the point and differs from $f$ there, so [A1] fails again, in a different way. [step 1.2, given, L2, L7]",
      "step": "2.2",
      "inputs": [
        "step 1.2",
        "given",
        "L2",
        "L7",
        "A1"
      ]
    },
    {
      "id": "fs-the-integral-function-is-always-a-primitive-step-3-1",
      "claim": "The difference quotient of $F$ at $0$ is $x \\mapsto (F(x)-F(0))/x = |x|/x$, which is $1$ for $x>0$ and $-1$ for $x<0$ by [L5]; so its one-sided limits at $0$ are $1$ and $-1$. [step 2.1, L5]",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L5"
      ]
    },
    {
      "id": "fs-the-integral-function-is-always-a-primitive-step-4-1",
      "claim": "By [L4] the limit of that quotient at $0$ does not exist, so $F$ is not differentiable at $0$ and [A1] fails at $s$: the claim is false. [step 3.1, A1, L4]",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "A1",
        "L4"
      ]
    },
    {
      "id": "fs-the-integral-function-is-always-a-primitive-step-5-1",
      "claim": "Both failures occur exactly at a discontinuity of the integrand: $s$ is discontinuous at $0$ and $f$ at $1/2$. Off those points [L6] applies and gives $F' = f$, so the correct statement is [[thm-ftc-first-part]], whose hypothesis is continuity of the integrand at the point in question. [step 4.1, step 2.2, L6] ∎",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "step 2.2",
        "L6"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "fs-the-integral-function-is-always-a-primitive concerns stipulated functions and points; no empty family, empty sum, or empty choice domain changes its assertion."
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
      "evidence": "Statement explicitly assumes distinct ordered endpoints, excluding the degenerate interval before step 1.1."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement specifies the closed or oriented interval convention; step 1.1 handles the endpoint data used by the argument."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 establishes or explicitly fixes the object before the proof chooses or extremizes it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of fs-the-integral-function-is-always-a-primitive is not a biconditional, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of fs-the-integral-function-is-always-a-primitive is not a biconditional, so it has no reverse iff direction."
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
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-ftc-first-part",
    "declared_target": "thm-ftc-first-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-the-integral-function",
    "declared_target": "def-the-integral-function",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "cex-an-integrable-function-with-no-primitive",
    "declared_target": "cex-an-integrable-function-with-no-primitive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc-examples",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-changing-a-function-at-finitely-many-points",
    "declared_target": "lem-changing-a-function-at-finitely-many-points",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-two-sided-limit-iff-both-one-sided",
    "declared_target": "thm-two-sided-limit-iff-both-one-sided",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-one-sided-limits",
    "declared_target": "def-one-sided-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-abs-value",
    "declared_target": "def-abs-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "fs-the-integral-function-is-always-a-primitive",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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

## Full exact-current text of every cited or declared item (22)

### `cex-an-integrable-function-with-no-primitive`

````markdown
---
id: cex-an-integrable-function-with-no-primitive
kind: counterexample
title: "The sign function is Riemann integrable on $[-1,1]$ and has no primitive there"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-ftc-first-part, thm-finitely-many-discontinuities-integrable, thm-additivity-over-subintervals, lem-changing-a-function-at-finitely-many-points, lem-integral-elementary-bounds, cor-zero-derivative-implies-constant, cor-differentiable-implies-continuous, thm-two-sided-limit-iff-both-one-sided, def-one-sided-limits, def-derivative, def-function-limit, def-the-integral-function, def-continuity-real, def-classification-of-discontinuities, def-oriented-integral, def-darboux-integral, def-abs-value, lem-of-abs-value, def-interval, def-bounded-set, def-limit-point-r, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "integrable with no primitive"
proof_strategy: contradiction
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Sign function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sign_function"
    - title: "Antiderivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Antiderivative"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
    - title: "Colgate University MATH 323, Chapter 5 notes"
      url: "https://math.colgate.edu/math323/dlantz/extras/notesC5.pdf"
pipeline_run: null
---

## Statement refuted

**False claim:** every Riemann integrable function on a closed bounded interval
has a primitive there, that is, is the derivative of some function on that
interval.

Let $s : [-1,1] \to \mathbb{R}$ be the sign function,

$$s(x) \;:=\; \begin{cases} -1 & -1 \le x < 0, \\ 0 & x = 0, \\ 1 & 0 < x \le 1. \end{cases}$$

Then $s$ is Riemann integrable on $[-1,1]$ with $\int_{-1}^{1} s = 0$, and there
is **no** $G : [-1,1] \to \mathbb{R}$ differentiable at every point of $[-1,1]$
with $G' = s$.

**The integral function of $s$ is $F(x) = |x| - 1$**, which is differentiable at
every point of $[-1,1]$ except $x = 0$ — exactly the one point where $s$ is
discontinuous. That is consistent with [[thm-ftc-first-part]], which claims
$F'(c) = s(c)$ only at points of continuity of $s$, and it is what the refutation
below turns into a contradiction.

## Facts & Assumptions

**Given:** The sign function $s$ on $[-1,1]$ and its integral function $F(x) = \int_{-1}^{x} s$.

[A1] There is $G : [-1,1] \to \mathbb{R}$, differentiable at every point of $[-1,1]$ as a function on $[-1,1]$, with $G'(x) = s(x)$ for every $x \in [-1,1]$.

[L1] A bounded function on $[p,q]$ with at most finitely many discontinuities is Riemann integrable there ([[thm-finitely-many-discontinuities-integrable]], [[def-bounded-set]], [[def-darboux-integral]], [[def-classification-of-discontinuities]]).

[L2] Changing an integrable function at finitely many points changes neither its integrability nor its integral, and $\int_p^q c = c(q-p)$ for a constant ([[lem-changing-a-function-at-finitely-many-points]], [[lem-integral-elementary-bounds]]).

[L3] Additivity, in the oriented form valid for arbitrary points ([[thm-additivity-over-subintervals]], claim 3, [[def-oriented-integral]], [[def-the-integral-function]]).

[L4] If $u$ is continuous on an order-convex $I$ and differentiable with $u' = 0$ at every interior point of $I$, then $u$ is constant on $I$ ([[cor-zero-derivative-implies-constant]], [[def-interval]]).

[L5] A function differentiable at a point is continuous there, and a restriction to a subinterval still having the point as a limit point is differentiable there with the same derivative; every point of a nondegenerate interval is a limit point of it ([[cor-differentiable-implies-continuous]], [[def-derivative]], [[def-limit-point-r]], [[def-continuity-real]]).

[L6] If both one-sided limits of a function at $c$ exist and differ, the two-sided limit does not exist ([[thm-two-sided-limit-iff-both-one-sided]], [[def-one-sided-limits]], [[def-function-limit]]).

[L7] Absolute value: $|x| = x$ for $x \ge 0$ and $|x| = -x$ for $x \le 0$; $|x|/x = 1$ for $x>0$ and $= -1$ for $x<0$ ([[def-abs-value]], [[lem-of-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Counterexample

**Proof technique:** contradiction.

1.1 $s$ is bounded, with $|s| \le 1$, and continuous at every point of $[-1,1]$ other than $0$: near a point $x \ne 0$ it is locally constant. So $s$ is integrable on $[-1,1]$, and likewise on $[-1,0]$ and on $[0,1]$, by [L1]. [given, L1]

1.2 **Assume [A1].** Then $G' = s$ everywhere on $[-1,1]$. [assume-contra, A1]

2.1 On $[-1,0]$ the function $s$ agrees with the constant $-1$ except at the single point $0$, so $\int_{-1}^{0} s = -1\cdot(0-(-1)) = -1$ by [L2]; on $[0,1]$ it agrees with the constant $1$ except at $0$, so $\int_0^1 s = 1$. [step 1.1, L2]

2.2 On $I_{+} := [0,1]$ the function $u_{+}(x) := G(x) - x$ is continuous, by [L5], and differentiable at every interior point $x \in (0,1)$ with $u_{+}'(x) = s(x) - 1 = 0$; so $u_{+}$ is constant on $[0,1]$ by [L4], say $G(x) = x + c_1$ there. [step 1.2, L4, L5, choose]

2.3 On $I_{-} := [-1,0]$ the function $u_{-}(x) := G(x) + x$ is continuous and differentiable at every $x \in (-1,0)$ with $u_{-}'(x) = s(x)+1 = 0$; so $G(x) = -x + c_2$ on $[-1,0]$. [step 1.2, L4, L5, choose]

3.1 By [L3], $\int_{-1}^{1} s = \int_{-1}^{0} s + \int_0^1 s = -1 + 1 = 0$. [step 2.1, L3]

3.2 By [L3] again, $F(x) = \int_{-1}^{x} s$ equals $-1 + x$ for $x \in [0,1]$ and equals $-(x-(-1)) = -x-1$ for $x \in [-1,0]$, by [L2] applied on the relevant piece; in both cases $F(x) = |x| - 1$ by [L7]. [step 2.1, L2, L3, L7]

3.3 Evaluating both formulas at $x = 0$ gives $c_1 = G(0) = c_2$; write $c$ for the common value, so $G(x) = |x| + c$ for every $x \in [-1,1]$ by [L7]. [step 2.2, step 2.3, L7]

4.1 The difference quotient of $G$ at $0$ is $x \mapsto (G(x)-G(0))/x = |x|/x$, which equals $1$ for $x > 0$ and $-1$ for $x < 0$ by [L7]; so its right-hand limit at $0$ is $1$ and its left-hand limit is $-1$. [step 3.3, L7]

5.1 By [L6] the two-sided limit of that quotient at $0$ does not exist, so $G$ is not differentiable at $0$; this contradicts [A1]. [step 4.1, A1, L6]

6.1 Hence no such $G$ exists: $s$ is integrable on $[-1,1]$ by step 1.1 and has no primitive there, so the claim is false. [step 1.1, step 3.1, step 5.1, discharge-contradiction] ∎

## Remarks

- **Darboux's theorem is not used.** The slick argument — a derivative has the intermediate value property, and $s$ does not — rests on Darboux's theorem on the intermediate value property of derivatives. The refutation above uses only [[cor-zero-derivative-implies-constant]] and the one-sided limits of a difference quotient, both already published.

- **The tension with the first fundamental theorem is only apparent.** $F$ *is* differentiable with $F' = s$ at every point of $[-1,1]$ except $0$, which is exactly what [[thm-ftc-first-part]] promises, since $s$ is continuous exactly off $0$. What fails is the existence of *any* function differentiable at $0$ too with derivative $s(0)$ there, and step 4.1 shows the obstruction is the jump of $s$ at $0$, not a defect of $F$.

- **The value $s(0)$ is irrelevant to both halves.** Changing it changes neither the integral, by [[lem-changing-a-function-at-finitely-many-points]], nor the conclusion of step 5.1, which shows $G$ is not differentiable at $0$ at all and therefore cannot have any prescribed derivative there.
````

### `def-abs-value`

````markdown
---
id: def-abs-value
kind: definition
title: "Absolute value in an ordered field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: []
landmark: false
short: "|x|"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dartmouth College analysis notes: Absolute value"
      url: "https://math.dartmouth.edu/~m63w21/lecture-m63-02.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of
$x \in F$ is

$$|x| \;:=\; \begin{cases} x & \text{if } x \ge 0, \\ -x & \text{if } x < 0. \end{cases}$$

## Remarks

- The distance between $x$ and $y$ is $|x - y|$.
- The basic algebraic properties ($|x| \ge 0$, $|x| = 0 \iff x = 0$,
  $|xy| = |x|\,|y|$, and the characterisation $|x| < c \iff -c < x < c$) are
  established in [[lem-of-abs-value]]; the triangle inequality is
  [[lem-of-triangle-inequality]].
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

### `def-one-sided-limits`

````markdown
---
id: def-one-sided-limits
kind: definition
title: "The left and right limits of $f$ at $c$, as limits of the restrictions of $f$ to $A \\cap (-\\infty, c)$ and $A \\cap (c, \\infty)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-interval, lem-limit-is-local, lem-function-limit-unique, lem-of-abs-value]
justified_by: []
aliases: [def-left-limit, def-right-limit]
landmark: true
short: "one-sided limits"
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
    - title: "One-sided limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/One-sided_limit"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in
\mathbb{R}$. Put

$$A^{-} := A \cap (-\infty, c), \qquad A^{+} := A \cap (c, \infty)$$

([[def-interval]]), and write $f^{-} := f|_{A^{-}}$ and $f^{+} := f|_{A^{+}}$
for the restrictions of $f$ to those sets.

**Right limit.** Suppose $c$ is a limit point of $A^{+}$ ([[def-limit-point-r]]).
For $L \in \mathbb{R}$ we write

$$\lim_{x \to c^{+}} f(x) = L \quad :\Longleftrightarrow \quad \lim_{x \to c} f^{+}(x) = L$$

in the sense of [[def-function-limit]]. Written out: for every real
$\varepsilon > 0$ there is a real $\delta > 0$ such that

$$|f(x) - L| < \varepsilon \qquad \text{for every } x \in A \text{ with } c < x < c + \delta .$$

**Left limit.** Suppose $c$ is a limit point of $A^{-}$. For $L \in \mathbb{R}$
we write $\lim_{x \to c^{-}} f(x) = L$ when $\lim_{x \to c} f^{-}(x) = L$; written
out, for every real $\varepsilon > 0$ there is a real $\delta > 0$ with
$|f(x) - L| < \varepsilon$ for every $x \in A$ with $c - \delta < x < c$.

**The written-out forms agree with the definitions.** For $x \in A^{+}$ the two
conditions $0 < |x - c| < \delta$ and $c < x < c + \delta$ are the same: $x > c$
gives $x - c > 0$, so $|x - c| = x - c$ and $0 < |x - c| < \delta$ reads
$0 < x - c < \delta$ ([[lem-of-abs-value]]). Symmetrically on the left, where
$x < c$ gives $|x - c| = c - x$.

**Well-posedness is inherited, not reproved.** A one-sided limit *is* a limit,
namely the limit of a restriction, so:

- **Uniqueness.** At most one $L$ can occur, by [[lem-function-limit-unique]]
  applied to $f^{+}$ on the domain $A^{+}$ (respectively to $f^{-}$ on
  $A^{-}$), which is legitimate exactly because $c$ was required to be a limit
  point of that set. This is what makes the notation $\lim_{x \to c^{+}} f(x)$
  denote a single real.
- **Locality and restriction.** Both claims of [[lem-limit-is-local]] apply
  verbatim to $f^{+}$ and $f^{-}$.

**When the symbols are defined.** If $c$ is not a limit point of $A^{+}$ — for
instance if $A$ contains no point to the right of $c$, or only points bounded
away from $c$ on that side — then $\lim_{x \to c^{+}} f(x)$ is **not defined**
here, for the reason given in [[def-function-limit]]: the
$\varepsilon$-$\delta$ condition would be satisfied vacuously by every real at
once. The same applies on the left.

## Remarks

- **Neither one-sided limit requires $c \in A$, and neither looks at $f(c)$.**
  Both properties are inherited from [[def-function-limit]], since $c \notin
  A^{-} \cup A^{+}$: the point $c$ belongs to neither $(-\infty, c)$ nor
  $(c, \infty)$.

- **The two one-sided limits and the two-sided limit.** When $c$ is a limit
  point of both $A^{-}$ and $A^{+}$, the two-sided limit exists exactly when
  both one-sided limits exist and agree, and then all three coincide:
  [[thm-two-sided-limit-iff-both-one-sided]]. When $c$ is a limit point of only
  one of the two sets, that one-sided limit and the two-sided limit are the same
  condition, again by claim 2 of [[lem-limit-is-local]] together with the
  observation that $A$ and that one side have the same points in a small enough
  punctured neighbourhood of $c$.

- **Notation.** Some texts write $f(c+)$ and $f(c-)$ for these values. This
  library writes only $\lim_{x \to c^{+}} f(x)$ and $\lim_{x \to c^{-}} f(x)$,
  because the shorter notation looks like an evaluation of $f$ and these
  quantities are not values of $f$: they are defined without reference to
  $f(c)$, which may not even exist.
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

### `thm-the-integral-function-is-lipschitz`

````markdown
---
id: thm-the-integral-function-is-lipschitz
kind: theorem
title: "The integral function of a bounded integrable $f$ is Lipschitz, hence uniformly continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-integral-function, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-monotonicity-of-the-integral, lem-integral-elementary-bounds, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, lem-real-line-is-a-metric-space, lem-real-and-metric-notions-agree, def-continuity-real, def-uniform-continuity-real, def-bounded-set, def-oriented-integral, def-darboux-integral, lem-of-abs-value, def-abs-value, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$F$ is Lipschitz"
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
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]), let $K \ge 0$ be a real with $|f(t)| \le K$ for every
$t \in [a,b]$ ([[def-bounded-set]]), and let $F$ be the integral function of $f$
([[def-the-integral-function]]). Then

$$\bigl|F(y) - F(x)\bigr| \;\le\; K\,|y - x| \qquad \text{for all } x,y \in [a,b] ,$$

that is, $F$ is Lipschitz with constant $K$ on $[a,b]$
([[def-lipschitz-holder-contraction]], [[lem-real-and-metric-notions-agree]]).
Consequently $F$ is uniformly continuous on $[a,b]$
([[def-uniform-continuity-real]]) and hence continuous there
([[def-continuity-real]]).

**No continuity of $f$ is assumed.** This is the strongest regularity of $F$
available before the fundamental theorem, and it is what makes the hypotheses of
that theorem visible as hypotheses: continuity of $f$ at a point buys
differentiability of $F$ there, and integrability alone already buys this much
everywhere.

## Facts & Assumptions

**Given:** Reals $a < b$, an integrable $f : [a,b] \to \mathbb{R}$, a real $K \ge 0$ with $|f| \le K$ on $[a,b]$, and the integral function $F(x) = \int_a^x f$; points $x,y \in [a,b]$.

[L1] $F(y) - F(x) = \int_x^y f$ for all $x,y \in [a,b]$, in either order ([[def-the-integral-function]]).

[L2] $|f|$ is integrable on every $[p,q] \subseteq [a,b]$ with $p<q$, and $\bigl|\int_p^q f\bigr| \le \int_p^q |f|$ there ([[cor-integrability-of-absolute-values-products-and-lattice-operations]], claims 1 and 3).

[L3] If $u \le w$ pointwise on $[p,q]$ and both are integrable then $\int_p^q u \le \int_p^q w$, and $\int_p^q c = c(q-p)$ for a constant $c$ ([[thm-monotonicity-of-the-integral]], [[lem-integral-elementary-bounds]]).

[L4] With oriented limits, $\int_y^x f = -\int_x^y f$ and $\int_x^x f = 0$ ([[def-oriented-integral]]).

[L5] Absolute value: $|{-t}| = |t|$, $|t| \ge 0$, and $|t| \le c$ follows from $-c \le t \le c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L6] A real function on $A \subseteq \mathbb{R}$ satisfying $|u(x)-u(x')| \le L|x-x'|$ for all $x,x' \in A$ is Lipschitz with constant $L$ as a map of metric spaces, $\mathbb{R}$ carrying its usual metric; a Lipschitz real function is uniformly continuous, and a uniformly continuous one is continuous ([[lem-real-and-metric-notions-agree]], clauses 3 and 6, [[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[lem-real-line-is-a-metric-space]]).

[L7] Ordered-field arithmetic: the order is total and transitive, and multiplying an inequality by a nonnegative real preserves it ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 **The case $x < y$.** By [L1], $F(y)-F(x) = \int_x^y f$, and $[x,y] \subseteq [a,b]$ with $x < y$. [given, L1]

1.2 **The case $x = y$.** Then $F(y)-F(x) = 0$ and $K|y-x| = 0$, so the inequality holds with equality. [L1, L4, L5]

2.1 On $[x,y]$ one has $|f(t)| \le K$ for every $t$, so by [L2] and [L3], $\bigl|\int_x^y f\bigr| \le \int_x^y |f| \le \int_x^y K = K\,(y-x)$. [step 1.1, given, L2, L3]

3.1 Hence $|F(y)-F(x)| \le K(y-x) = K|y-x|$ when $x < y$. [step 1.1, step 2.1, L5]

4.1 **The case $y < x$.** Applying step 3.1 to the pair $(y,x)$ gives $|F(x)-F(y)| \le K|x-y|$, and $|F(y)-F(x)| = |F(x)-F(y)|$ with $|y-x| = |x-y|$ by [L5]; so the inequality holds here too. [step 3.1, L5]

5.1 The three cases $x<y$, $x=y$, $y<x$ are exhaustive by [L7], so $|F(y)-F(x)| \le K|y-x|$ for all $x,y \in [a,b]$. [step 1.2, step 3.1, step 4.1, L7]

6.1 By [L6], $F$ is therefore Lipschitz with constant $K$ on $[a,b]$, hence uniformly continuous on $[a,b]$, hence continuous there. [step 5.1, L6] ∎

## Remarks

- **The estimate is written out on both sides of the diagonal.** Hiding the case $y < x$ inside the absolute value would conceal the fact that $\int_x^y f$ is then the *oriented* integral of [[def-oriented-integral]], and that the published inequality $\bigl|\int_p^q f\bigr| \le \int_p^q|f|$ is available only for $p \le q$. Step 4.1 is what pays for that.

- **The constant is any bound on $|f|$, and it need not be sharp.** If $f$ is integrable then it is bounded by definition of the Darboux sums, so some $K$ exists; the theorem is stated with $K$ given rather than existentially, because every later use supplies its own bound.

- **The dictionary lemma is cited on purpose.** Lipschitz and uniform continuity are defined in this library both for real functions and for maps of metric spaces, and [[lem-real-and-metric-notions-agree]] is the single item recording that the two families of notions coincide. Citing it, rather than proving the implication again, is what keeps the library from carrying two notions of continuity.
````

### `thm-two-sided-limit-iff-both-one-sided`

````markdown
---
id: thm-two-sided-limit-iff-both-one-sided
kind: theorem
title: "If $c$ is a limit point of the domain from both sides, the limit exists iff both one-sided limits exist and agree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-one-sided-limits, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-interval, lem-limit-is-local, lem-function-limit-unique, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "two-sided iff both one-sided"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "One-sided limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/One-sided_limit"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in
\mathbb{R}$ be a limit point of **both** $A^{-} = A \cap (-\infty, c)$ and
$A^{+} = A \cap (c, \infty)$ ([[def-limit-point-r]], [[def-interval]]), so that
both one-sided limits at $c$ are well posed ([[def-one-sided-limits]]). Then $c$
is a limit point of $A$, and for every $L \in \mathbb{R}$:

$$\lim_{x \to c} f(x) = L \quad \Longleftrightarrow \quad \lim_{x \to c^{-}} f(x) = L \ \text{ and } \ \lim_{x \to c^{+}} f(x) = L$$

([[def-function-limit]]). Consequently the limit of $f$ at $c$ **exists** if and
only if both one-sided limits exist and are equal, and in that case

$$\lim_{x \to c} f(x) \;=\; \lim_{x \to c^{-}} f(x) \;=\; \lim_{x \to c^{+}} f(x) .$$

**The hypothesis on both sides is what makes the statement an equivalence.** If
$c$ is a limit point of only one of the two sets — as $1$ is for
$\{0\} \cup [1,2]$ — then the one-sided limit on that side and the two-sided
limit are the same condition, and the symbol on the other side is not defined at
all ([[def-one-sided-limits]]).

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$, a real $c$ that is a limit point of both $A^{-} = A \cap (-\infty, c)$ and $A^{+} = A \cap (c, \infty)$, and a real $L$ ([[def-limit-point-r]], [[def-interval]], [[def-one-sided-limits]]).

[L1] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - L| < \varepsilon$.

[L2] Limit point: $c$ is a limit point of $S$ when for every real $\delta > 0$ there is $x \in S$ with $0 < |x - c| < \delta$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Intervals: $A^{-} = \{\, x \in A : x < c \,\}$ and $A^{+} = \{\, x \in A : x > c \,\}$ ([[def-interval]]).

[L4] Absolute value and order: $|x - c| = 0$ exactly when $x = c$; the order is total, so every $x \ne c$ satisfies $x < c$ or $x > c$; and $0 < |x - c| < \delta$ is equivalent to $c - \delta < x < c$ for $x < c$ and to $c < x < c + \delta$ for $x > c$ ([[lem-of-abs-value]], [[def-ordered-field]]). Of two positive reals the smaller is positive.

[L5] Restriction: if $B \subseteq A$ has $c$ as a limit point and $\lim_{x \to c} f(x) = L$, then $\lim_{x \to c} f|_B(x) = L$ (claim 2 of [[lem-limit-is-local]]).

[L6] One-sided limits are by definition the limits of the restrictions $f|_{A^{-}}$ and $f|_{A^{+}}$ at $c$ ([[def-one-sided-limits]]).

[L7] At a limit point of its domain a function has at most one limit ([[lem-function-limit-unique]]); applied to $f|_{A^{-}}$ and to $f|_{A^{+}}$ it makes each one-sided limit a single real, and applied to $f$ it does the same for the two-sided limit.

## Proof

**Proof technique:** direct.

1.1 $c$ is a limit point of $A$: it is one of $A^{+}$ by hypothesis, and $A^{+} \subseteq A$, so every point of $A^{+}$ found in a punctured neighbourhood of $c$ is a point of $A$ there. [L2, L3]

1.2 For $x \in A$ the condition $0 < |x - c|$ says exactly $x \ne c$, and then $x < c$ or $x > c$, that is $x \in A^{-}$ or $x \in A^{+}$; moreover for $x \in A^{-}$ the condition $0 < |x - c| < \delta$ reads $c - \delta < x < c$ and for $x \in A^{+}$ it reads $c < x < c + \delta$. [L3, L4]

2.1 Suppose $\lim_{x \to c} f(x) = L$. Both $A^{-}$ and $A^{+}$ are subsets of $A$ having $c$ as a limit point, so [L5] gives $\lim_{x \to c} f|_{A^{-}}(x) = L$ and $\lim_{x \to c} f|_{A^{+}}(x) = L$, which by [L6] is exactly $\lim_{x \to c^{-}} f(x) = L$ and $\lim_{x \to c^{+}} f(x) = L$. [step 1.1, step 1.2, L5, L6]

2.2 Suppose conversely that both one-sided limits equal $L$, and let $\varepsilon > 0$ be an arbitrary real. By [L6] and [L1] fix reals $\delta_1, \delta_2 > 0$ such that every $x \in A^{-}$ with $0 < |x - c| < \delta_1$ and every $x \in A^{+}$ with $0 < |x - c| < \delta_2$ satisfies $|f(x) - L| < \varepsilon$; let $\delta$ be the smaller of the two. Every $x \in A$ with $0 < |x - c| < \delta$ lies in $A^{-}$ or in $A^{+}$ by step 1.2, and in either case $|f(x) - L| < \varepsilon$. As $\varepsilon$ was arbitrary, $\lim_{x \to c} f(x) = L$. [step 1.2, L1, L4, L6, choose]

3.1 The displayed equivalence is steps 2.1 and 2.2. For the consequence: if the limit of $f$ at $c$ exists, say with value $L$, then step 2.1 gives that both one-sided limits exist with the same value $L$, so they agree; and if both one-sided limits exist and are equal, to the common value $L$, then step 2.2 gives that the limit of $f$ at $c$ exists and equals $L$. Each of the three symbols denotes a single real by [L7], so the three are equal. [step 2.1, step 2.2, L7] ∎

## Remarks

- **The two directions are not symmetric in difficulty.** From the two-sided limit to the one-sided ones is pure restriction, [[lem-limit-is-local]]; the converse has to glue two estimates, and the gluing is legitimate precisely because every point of $A$ other than $c$ lies strictly on one side of $c$, which is the totality of the order.

- **The typical failure** is a function whose two one-sided limits exist and differ: the sign function at $0$, on the companion page. Then the two-sided limit cannot exist, since by step 2.1 it would force both one-sided values to equal it.

- **A function may also have no two-sided limit for a different reason**, namely that a one-sided limit fails to exist rather than that the two disagree. The theorem covers that case too, since its right-hand side asserts the existence of both one-sided values, so its failure on one side alone already blocks the two-sided limit. The companion page exhibits both patterns.
````


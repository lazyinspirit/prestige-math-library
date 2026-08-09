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

## Wave 9 target — `thm-monotone-one-sided-limits-exist`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `4ed6aeeb3dc2f2ded6c83c9715572e7ed9f503a29f1a25cb10d74b5b6cb71bfa`

## Complete current target

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

## Current Wave 9 provenance determination

```json
{
  "id": "thm-monotone-one-sided-limits-exist",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://mathcs.org/analysis/reals/cont/defs/monofun.html",
    "https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions"
  ],
  "rationale": "The literature gives existence and the supremum/infimum formulas for one-sided limits of monotone real functions. The item packages both monotonicity directions, relative-domain endpoint conditions, uniqueness, and explicit real bounds.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 9 proof contract

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-monotone-function",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]). Let $A \\subseteq \\mathbb{R}$ and let\n$f : A \\to \\mathbb{R}$. Then $f$ is:",
      "uses": [
        "2.2",
        "2.3",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "A subset $I \\subseteq \\mathbb{R}$ is **order-convex** when",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-infimum",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $\\ell \\in \\mathbb{R}$. Then $\\ell$ is a\n**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:",
      "uses": [
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-infimum-property",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded below. Then $S$ has a\ngreatest lower bound in $\\mathbb{R}$ ([[def-infimum]]), and it is given by",
      "uses": [
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-sup-epsilon",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded above, and let $u$ be an\nupper bound of $S$ ([[def-complete-ordered-field]]). Then",
      "uses": [
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-inf-epsilon",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded below, and let $\\ell$ be a\nlower bound of $S$ ([[def-bounded-set]]). Then",
      "uses": [
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-one-sided-limits",
      "source_section": "Definition",
      "quote": "**Left limit.** Suppose $c$ is a limit point of $A^{-}$. For $L \\in \\mathbb{R}$\nwe write $\\lim_{x \\to c^{-}} f(x) = L$ when $\\lim_{x \\to c} f^{-}(x) = L$; written\nout, for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with\n$|f(x) - L| < \\varepsilon$ for every $x \\in A$ with $c - \\delta < x < c$.",
      "uses": [
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-function-limit",
      "source_section": "Definition",
      "quote": "In the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:\nfor every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with",
      "uses": [
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then",
      "uses": [
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne\n  \\varnothing$ for every real $\\varepsilon > 0$.\n- $x$ is a **limit point** (or *accumulation point*) of $A$ when\n  $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real\n  $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.\n- $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$.\n- The **derived set** of $A$ is\n  $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$\n- $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.",
      "uses": [
        "1.2",
        "2.1",
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "and the **punctured $\\varepsilon$-neighbourhood of $x$** is",
      "uses": [
        "1.2",
        "2.1",
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-function-limit-unique",
      "source_section": "Statement",
      "quote": "**The hypothesis that $c$ is a limit point is not removable.** At an isolated\npoint of the domain the same $\\varepsilon$-$\\delta$ formula is satisfied\nvacuously by every real at once, which is the content of\n[[fs-limit-unique-at-every-point-of-the-domain]].",
      "uses": [
        "1.2",
        "2.1",
        "4.2",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-monotone-one-sided-limits-exist-step-1-1",
      "claim": "Suppose $I^{-} \\ne \\varnothing$ and fix $a \\in I$ with $a < c$; then $[a,c] \\subseteq I$, since any $z$ with $a \\le z \\le c$ lies in $I$. [A2]",
      "step": "1.1",
      "inputs": [
        "A2"
      ]
    },
    {
      "id": "thm-monotone-one-sided-limits-exist-step-1-2",
      "claim": "Claim 2 is the same argument on the other side, and is written out here rather than deduced. Suppose $I^{+} \\ne \\varnothing$ and fix $b \\in I$ with $c < b$; then $[c,b] \\subseteq I$, and for real $\\delta > 0$ the point $\\min\\{b, c + \\delta/2\\}$ lies in $I^{+}$ within $\\delta$ of $c$, so $c$ is a limit point of $I^{+}$. [A2, L4]",
      "step": "1.2",
      "inputs": [
        "A2",
        "L4"
      ]
    },
    {
      "id": "thm-monotone-one-sided-limits-exist-step-2-1",
      "claim": "Every real $\\delta > 0$ gives a point of $I^{-}$ within $\\delta$ of $c$ and different from $c$: put $z := \\max\\{a, c - \\delta/2\\}$, so that $a \\le z < c$ and $c - z \\le \\delta/2 < \\delta$, and $z \\in I$ by step 1.1. Hence $c$ is a limit point of $I^{-}$ and the symbol on the left of claim 1 is well posed. [step 1.1, L4]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L4"
      ]
    },
    {
      "id": "thm-monotone-one-sided-limits-exist-step-2-2",
      "claim": "The set $S^{-} := \\{\\, f(x) : x \\in I,\\ x < c \\,\\}$ is nonempty, since $f(a) \\in S^{-}$, and $f(c)$ is an upper bound of it, since $x < c$ gives $f(x) \\le f(c)$. So $L := \\sup S^{-}$ exists and $L \\le f(c)$, the latter because $f(c)$ is an upper bound and $L$ is the least one. [step 1.1, A1, L1]",
      "step": "2.2",
      "inputs": [
        "1.1",
        "A1",
        "L1"
      ]
    },
    {
      "id": "thm-monotone-one-sided-limits-exist-step-2-3",
      "claim": "The set $S^{+} := \\{\\, f(x) : x \\in I,\\ x > c \\,\\}$ is nonempty and bounded below by $f(c)$, so $M := \\inf S^{+}$ exists and $M \\ge f(c)$. [step 1.2, A1, L1]",
      "step": "2.3",
      "inputs": [
        "1.2",
        "A1",
        "L1"
      ]
    },
    {
      "id": "thm-monotone-one-sided-limits-exist-step-3-1",
      "claim": "Let $\\varepsilon > 0$ be real. By the epsilon characterisation of the supremum there is $x_0 \\in I$ with $x_0 < c$ and $L - \\varepsilon < f(x_0)$. [step 2.2, L2]",
      "step": "3.1",
      "inputs": [
        "2.2",
        "L2"
      ]
    },
    {
      "id": "thm-monotone-one-sided-limits-exist-step-3-2",
      "claim": "Given real $\\varepsilon > 0$, the epsilon characterisation of the infimum gives $x_1 \\in I$ with $x_1 > c$ and $f(x_1) < M + \\varepsilon$; put $\\delta := x_1 - c > 0$. For $x \\in I$ with $c < x < c + \\delta$ we have $c < x < x_1$, so $M \\le f(x) \\le f(x_1) < M + \\varepsilon$ and hence $|f(x) - M| < \\varepsilon$. [step 2.3, A1, L2]",
      "step": "3.2",
      "inputs": [
        "2.3",
        "A1",
        "L2"
      ]
    },
    {
      "id": "thm-monotone-one-sided-limits-exist-step-4-1",
      "claim": "Put $\\delta := c - x_0 > 0$ and let $x \\in I$ satisfy $c - \\delta < x < c$. Then $x_0 < x < c$, so $f(x_0) \\le f(x)$ by monotonicity and $f(x) \\le L$ because $f(x) \\in S^{-}$ and $L$ is an upper bound of $S^{-}$; hence $L - \\varepsilon < f(x_0) \\le f(x) \\le L$ and therefore $|f(x) - L| < \\varepsilon$. [step 2.2, step 3.1, A1]",
      "step": "4.1",
      "inputs": [
        "2.2",
        "3.1",
        "A1"
      ]
    },
    {
      "id": "thm-monotone-one-sided-limits-exist-step-4-2",
      "claim": "Claim 2 is proved: $\\lim_{x \\to c^{+}} f(x) = M = \\inf S^{+} \\ge f(c)$. [step 1.2, step 2.3, step 3.2, L3, L4]",
      "step": "4.2",
      "inputs": [
        "1.2",
        "2.3",
        "3.2",
        "L3",
        "L4"
      ]
    },
    {
      "id": "thm-monotone-one-sided-limits-exist-step-5-1",
      "claim": "Claim 1 is proved: $\\varepsilon > 0$ was arbitrary in step 3.1, so $\\lim_{x \\to c^{-}} f(x) = L = \\sup S^{-} \\le f(c)$, and this value is the only one the symbol can denote. [step 2.1, step 2.2, step 4.1, L3, L4]",
      "step": "5.1",
      "inputs": [
        "3.1",
        "2.1",
        "2.2",
        "4.1",
        "L3",
        "L4"
      ]
    },
    {
      "id": "thm-monotone-one-sided-limits-exist-step-6-1",
      "claim": "Claim 3 follows by combining the two inequalities of claims 1 and 2, both of which are then available. [step 5.1, step 4.2] ∎",
      "step": "6.1",
      "inputs": [
        "5.1",
        "4.2"
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
      "evidence": "step 1.2: the zero-valued or zero-index boundary is handled explicitly, or is included without division by it."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 2.1: the unit or first-index boundary is included explicitly in the stated construction."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement: interval degeneracy is either excluded by a strict endpoint hypothesis or included by the stated weak endpoint convention."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 2.1: domain endpoints and any one-sided interpretation are kept within the stated relative-domain convention."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: each existential witness used here is supplied by the cited existence result or by the displayed formula/construction."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Statement and steps 1.1-6.1: the numbered proof explicitly establishes the stated forward implication as part of the biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Statement and steps 1.1-6.1: the numbered proof explicitly establishes the converse implication as part of the biconditional."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "thm-monotone-one-sided-limits-exist",
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
    "source": "thm-monotone-one-sided-limits-exist",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-monotone-one-sided-limits-exist",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-monotone-one-sided-limits-exist",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-function-limit-unique",
    "declared_target": "lem-function-limit-unique",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-one-sided-limits-exist",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-monotone-one-sided-limits-exist",
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
    "source": "thm-monotone-one-sided-limits-exist",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-sup-epsilon",
    "declared_target": "lem-sup-epsilon",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-one-sided-limits-exist",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-inf-epsilon",
    "declared_target": "lem-inf-epsilon",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-one-sided-limits-exist",
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
    "source": "thm-monotone-one-sided-limits-exist",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-infimum",
    "declared_target": "def-infimum",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-one-sided-limits-exist",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-infimum-property",
    "declared_target": "thm-infimum-property",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-monotone-one-sided-limits-exist",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-monotone-one-sided-limits-exist",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (15)

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

### `def-infimum`

````markdown
---
id: def-infimum
kind: definition
title: "Greatest lower bound (infimum)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-set]
justified_by: [lem-sup-unique]
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
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $\ell \in \mathbb{R}$. Then $\ell$ is a
**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:

- $\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\ell \le s$ for
  every $s \in S$;
- $\ell' \le \ell$ for every lower bound $\ell'$ of $S$.

Written out in one line:

$$\ell \text{ is an infimum of } S \iff \big[(\forall s \in S)\, \ell \le s\big] \text{ and } \big[(\forall \ell' \in \mathbb{R})\, \big((\forall s \in S)\, \ell' \le s\big) \Rightarrow \ell' \le \ell\big].$$

An infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write
$\inf S$ for it.

## Remarks

- This is the exact dual of the least upper bound (supremum) of
  [[def-complete-ordered-field]]: reverse every inequality and swap "least" for
  "greatest". The two notions are related by reflection through $0$
  ([[lem-reflection]]).
- Existence is deliberately *not* part of the definition. That every nonempty
  subset of $\mathbb{R}$ which is bounded below actually has an infimum is a
  theorem, [[thm-infimum-property]], derived from the least-upper-bound property;
  it is not an axiom and it is not free.
- As with a supremum, an infimum need not belong to $S$; when it does, it is the
  minimum of $S$ ([[def-max-min]]).
- The usable form of the definition in later arguments is the epsilon
  characterisation [[lem-inf-epsilon]]: $\ell = \inf S$ exactly when $\ell$ is a
  lower bound that cannot be raised by any positive amount without losing that
  property.
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

### `lem-function-limit-unique`

````markdown
---
id: lem-function-limit-unique
kind: lemma
title: "At a limit point of the domain a function has at most one limit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-triangle-inequality, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "uniqueness of the function limit"
proof_strategy: contradiction
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
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$, let $c$ be a limit
point of $A$ ([[def-limit-point-r]]) and let $L, L' \in \mathbb{R}$. If

$$\lim_{x \to c} f(x) = L \qquad \text{and} \qquad \lim_{x \to c} f(x) = L'$$

([[def-function-limit]]), then $L = L'$.

A function therefore has **at most one** limit at a limit point of its domain,
which is what licenses the notation $\lim_{x \to c} f(x)$ for a single real
number. This lemma is recorded in the `justified_by` field of
[[def-function-limit]] for exactly that reason.

**The hypothesis that $c$ is a limit point is not removable.** At an isolated
point of the domain the same $\varepsilon$-$\delta$ formula is satisfied
vacuously by every real at once, which is the content of
[[fs-limit-unique-at-every-point-of-the-domain]].

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$, a limit point $c$ of $A$, and reals $L, L'$ with $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} f(x) = L'$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$, and likewise with $L'$ in place of $L$ ([[def-function-limit]]).

[L2] Limit point: for every real $\delta > 0$ there is $x \in A$ with $0 < |x - c| < \delta$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Triangle inequality: $|u + v| \le |u| + |v|$ in $\mathbb{R}$ ([[lem-of-triangle-inequality]]).

[L4] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; and $|-u| = |u|$ ([[lem-of-abs-value]]).

[L5] Order arithmetic in $\mathbb{R}$: trichotomy, so $u \ne 0$ together with $|u| \ge 0$ and $|u| \ne 0$ forces $|u| > 0$, and $t < t$ is impossible; adding two strict inequalities ([[lem-of-add-order]]); $0 < 1$ ([[cor-of-one-positive]]), hence $2 := 1 + 1 > 0$ and $2^{-1} > 0$ ([[lem-of-inverse-positive]]), so $\eta/2 > 0$ and $(\eta/2) \cdot 2 = \eta$ whenever $\eta > 0$ ([[lem-of-sign-rules]], [[def-ordered-field]]); and of two positive reals the smaller is positive, the order being total.

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $L \ne L'$. [assume-contra]

2.1 Then $L - L' \ne 0$, so $|L - L'| \ne 0$ while $|L - L'| \ge 0$, and trichotomy gives $|L - L'| > 0$; hence $\varepsilon := |L - L'|/2 > 0$ and $2\varepsilon = |L - L'|$. [step 1.1, L4, L5]

3.1 Applying [L1] twice with this $\varepsilon$, fix reals $\delta_1 > 0$ and $\delta_2 > 0$ such that every $x \in A$ with $0 < |x - c| < \delta_1$ has $|f(x) - L| < \varepsilon$ and every $x \in A$ with $0 < |x - c| < \delta_2$ has $|f(x) - L'| < \varepsilon$; put $\delta$ to be the smaller of $\delta_1$ and $\delta_2$, so $\delta > 0$. [step 2.1, L1, L5, choose]

4.1 Since $c$ is a limit point of $A$, fix $x \in A$ with $0 < |x - c| < \delta$. [step 3.1, L2, choose]

5.1 That $x$ satisfies $0 < |x - c| < \delta_1$ and $0 < |x - c| < \delta_2$, hence both $|f(x) - L| < \varepsilon$ and $|f(x) - L'| < \varepsilon$. [step 3.1, step 4.1, L1]

6.1 Therefore $|L - L'| = |(L - f(x)) + (f(x) - L')| \le |L - f(x)| + |f(x) - L'| = |f(x) - L| + |f(x) - L'| < \varepsilon + \varepsilon = 2\varepsilon = |L - L'|$. [step 5.1, L3, L4, L5]

7.1 So $|L - L'| < |L - L'|$, which trichotomy forbids; the assumption $L \ne L'$ is untenable, and hence $L = L'$. [step 6.1, L5, discharge-contradiction] ∎

## Remarks

- **Where each hypothesis is spent.** The limit conditions are used only in step 5.1, and the limit-point hypothesis only in step 4.1, to produce a *single* point $x$ of the domain near $c$ at which both estimates can be read. Without such a point the two estimates never meet and nothing forces $L = L'$; that is the whole mechanism, and it is the reason [[fs-limit-unique-at-every-point-of-the-domain]] is false.

- **The sequential analogue** is [[lem-limit-unique]], proved by the same two-estimates-at-one-index argument. Neither statement uses any choice principle.

- **One-sided limits inherit this.** By [[def-one-sided-limits]] a one-sided limit is the limit of a restriction of $f$, so applying this lemma to that restriction gives uniqueness there too; nothing has to be reproved.
````

### `lem-inf-epsilon`

````markdown
---
id: lem-inf-epsilon
kind: lemma
title: "Epsilon characterisation of the infimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-sup-epsilon, thm-infimum-property, lem-reflection, def-bounded-set,
       lem-of-add-order, lem-of-inverse-unique, def-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below, and let $\ell$ be a
lower bound of $S$ ([[def-bounded-set]]). Then

$$\ell = \inf S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } s < \ell + \varepsilon.$$

In words: among the lower bounds of $S$, the infimum is exactly the one that
cannot be raised by any positive amount and still bound $S$ from below.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded below, a lower bound $\ell$ of $S$, and the reflection $T := -S = \{-s : s \in S\}$.

[L1] Reflection, at the level of sets: $S$ is nonempty exactly when $T$ is; $\ell$ is a lower bound of $S$ exactly when $-\ell$ is an upper bound of $T$; and $S$ is bounded below exactly when $T$ is bounded above ([[lem-reflection]]). Elementwise, negation reverses the order: $-(-a) = a$, because $(-a) + a = 0$ and additive inverses are unique ([[def-field]], [[lem-of-inverse-unique]]); and $a < b$ exactly when $-b < -a$, because translation invariance applied with the constant $-a - b$ turns $a < b$ into $-b < -a$ and, applied with the constant $a + b$, turns it back ([[lem-of-add-order]]).

[L2] Every nonempty $S \subseteq \mathbb{R}$ bounded below has an infimum, and $\inf S = -\sup(-S) = -\sup T$ ([[thm-infimum-property]]).

[L3] Epsilon characterisation of the supremum: for a nonempty $X \subseteq \mathbb{R}$ bounded above and an upper bound $v$ of $X$, one has $v = \sup X$ if and only if for every $\varepsilon > 0$ there is $x \in X$ with $v - \varepsilon < x$ ([[lem-sup-epsilon]]).

## Proof

**Proof technique:** direct.

1.1 Since $S$ is nonempty and bounded below and $\ell$ is a lower bound of $S$, the set $T$ is nonempty and $-\ell$ is an upper bound of $T$, so $T$ is nonempty and bounded above. [given, L1]

1.2 For $s \in \mathbb{R}$ and $\varepsilon > 0$, negation turns the inequality $(-\ell) - \varepsilon < -s$ into $s < \ell + \varepsilon$ and back, because $-(-s) = s$ and $-\big((-\ell) - \varepsilon\big) = \ell + \varepsilon$. [L1, algebra]

2.1 By [L2] the infimum of $S$ exists and equals $-\sup T$; hence $\ell = \inf S$ holds if and only if $\ell = -\sup T$, which by negating both sides holds if and only if $-\ell = \sup T$. [step 1.1, L2, L1]

3.1 Applying [L3] to the nonempty bounded-above set $T$ and its upper bound $-\ell$: $-\ell = \sup T$ if and only if for every $\varepsilon > 0$ there is $t \in T$ with $(-\ell) - \varepsilon < t$. [step 1.1, step 2.1, L3]

4.1 The elements of $T$ are exactly the $-s$ with $s \in S$, so by 1.2 the condition "there is $t \in T$ with $(-\ell) - \varepsilon < t$" is equivalent to "there is $s \in S$ with $s < \ell + \varepsilon$". [step 1.2, step 3.1, L1]

5.1 Chaining the equivalences, $\ell = \inf S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $s < \ell + \varepsilon$. [step 2.1, step 3.1, step 4.1] ∎
````

### `lem-sup-epsilon`

````markdown
---
id: lem-sup-epsilon
kind: lemma
title: "Epsilon characterisation of the supremum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-sup-unique, def-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded above, and let $u$ be an
upper bound of $S$ ([[def-complete-ordered-field]]). Then

$$u = \sup S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } u - \varepsilon < s.$$

In words: among the upper bounds of $S$, the supremum is exactly the one that
cannot be lowered by any positive amount and still bound $S$.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded above, and an upper bound $u$ of $S$; since $S$ is nonempty and bounded above, $\sup S$ exists.

[L1] Supremum: $u = \sup S$ exactly when $u$ is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$; and every nonempty subset of $\mathbb{R}$ that is bounded above has such a least upper bound ([[def-complete-ordered-field]]).

[L2] The least upper bound is unique, so the equation $u = \sup S$ says precisely that $u$ is a least upper bound of $S$ ([[lem-sup-unique]]).

[L3] The order is total: for $a, b \in \mathbb{R}$ exactly one of $a < b$, $a = b$, $b < a$ holds, so the negation of $a \le b$ is $b < a$; and $a < b$ holds exactly when $b - a > 0$ ([[def-complete-ordered-field]], [[def-ordered-field]]). (Translation invariance follows in one line from that last equivalence, since $(b + c) - (a + c) = b - a$, but no step below uses it and it is not claimed here as a quoted result.)

## Proof

**Proof technique:** direct.

1.1 For the forward implication assume $u = \sup S$, that is, $u$ is an upper bound of $S$ that is $\le$ every upper bound of $S$, and let $\varepsilon > 0$ be arbitrary. [assume-hyp, L1, L2]

1.2 For the converse implication assume that $u$ is an upper bound of $S$ such that for every $\varepsilon > 0$ there exists $s \in S$ with $u - \varepsilon < s$, and let $u'$ be an arbitrary upper bound of $S$. [assume-hyp]

2.1 Since $u - (u - \varepsilon) = \varepsilon > 0$, we have $u - \varepsilon < u$. [step 1.1, L3, algebra]

2.2 By totality either $u \le u'$ or $u' < u$; in the second case put $\varepsilon_0 := u - u'$, so that $\varepsilon_0 > 0$ and $u - \varepsilon_0 = u'$. [step 1.2, L3, algebra]

3.1 The element $u - \varepsilon$ is not an upper bound of $S$: if it were, the leastness of $u$ among upper bounds would give $u \le u - \varepsilon$, which contradicts $u - \varepsilon < u$ by trichotomy. [step 2.1, step 1.1, L1, L3]

3.2 In that second case the hypothesis applied to $\varepsilon_0$ yields $s_0 \in S$ with $u' = u - \varepsilon_0 < s_0$, so $s_0 \le u'$ fails, contradicting that $u'$ is an upper bound of $S$; the second case is therefore impossible and $u \le u'$. [step 2.2, step 1.2, L3]

4.1 Failing to be an upper bound of $S$ means precisely that some $s \in S$ does not satisfy $s \le u - \varepsilon$, and by totality that says $u - \varepsilon < s$; since $\varepsilon > 0$ was arbitrary, the forward implication is proved. [step 3.1, L3]

4.2 Since $u'$ was an arbitrary upper bound of $S$, we get $u \le u'$ for every upper bound $u'$; as $u$ is itself an upper bound, $u$ is a least upper bound of $S$, hence $u = \sup S$ by uniqueness, which proves the converse implication. [step 3.2, step 1.2, L1, L2]

5.1 Both implications hold, so for an upper bound $u$ of a nonempty set $S$ bounded above, $u = \sup S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$. [step 4.1, step 4.2] ∎
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

### `thm-infimum-property`

````markdown
---
id: thm-infimum-property
kind: theorem
title: "Every nonempty set bounded below has an infimum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-reflection, def-infimum, lem-sup-unique, def-complete-ordered-field,
       lem-of-add-order, lem-of-inverse-unique, def-field]
justified_by: []
aliases: []
landmark: true
short: "greatest-lower-bound property"
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
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "MIT 18.100A, Complete Lecture Notes"
      url: "https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_lec_full.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below. Then $S$ has a
greatest lower bound in $\mathbb{R}$ ([[def-infimum]]), and it is given by

$$\inf S = -\sup(-S), \qquad \text{where } -S = \{-s : s \in S\}.$$

In particular the complete ordered field $\mathbb{R}$ has the
greatest-lower-bound property, which is therefore not an extra axiom: it is a
consequence of the least-upper-bound property.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded below, and its reflection $-S = \{-s : s \in S\}$.

[L1] The least-upper-bound property of $\mathbb{R}$: every nonempty subset of $\mathbb{R}$ that is bounded above has a least upper bound in $\mathbb{R}$, namely an upper bound that is $\le$ every upper bound ([[def-complete-ordered-field]]).

[L2] Reflection: $-(-S) = S$; $S$ is nonempty exactly when $-S$ is; $u$ is an upper bound of a set $X$ exactly when $-u$ is a lower bound of $-X$; and $\ell$ is a lower bound of $X$ exactly when $-\ell$ is an upper bound of $-X$ ([[lem-reflection]]).

[L3] Greatest lower bound (infimum): $\ell$ is one for $S$ when $\ell$ is a lower bound of $S$ and $\ell' \le \ell$ for every lower bound $\ell'$ of $S$ ([[def-infimum]]).

[L4] A least upper bound and a greatest lower bound are unique when they exist, so the notations $\sup$ and $\inf$ are unambiguous ([[lem-sup-unique]]).

[L5] Negation reverses the order, elementwise: $-(-a) = a$, because $(-a) + a = 0$ and additive inverses are unique ([[def-field]], [[lem-of-inverse-unique]]); and $a \le b$ if and only if $-b \le -a$, because translation invariance applied with the constant $-a - b$ turns $a < b$ into $-b < -a$ and, applied with the constant $a + b$, turns $-b < -a$ back into $a < b$, while $a = b$ holds exactly when $-a = -b$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** direct.

1.1 By hypothesis $S \ne \emptyset$ and $S$ is bounded below; fix a lower bound $\ell_0$ of $S$, so $\ell_0 \le s$ for every $s \in S$. [given, choose]

1.2 Let $\ell'$ be an arbitrary lower bound of $S$; then $-\ell'$ is an upper bound of $-S$. [assume-hyp, L2]

2.1 Since $S$ is nonempty, so is $-S$, and since $\ell_0$ is a lower bound of $S$, its negative $-\ell_0$ is an upper bound of $-S$; hence $-S$ is a nonempty subset of $\mathbb{R}$ that is bounded above. [step 1.1, L2]

3.1 By the least-upper-bound property, $-S$ has a least upper bound in $\mathbb{R}$; write $u := \sup(-S)$, which is well defined by uniqueness. [step 2.1, L1, L4]

4.1 Define $\ell := -u$. [step 3.1, construct]

4.2 The element $u$ is the least of the upper bounds of $-S$ and $-\ell'$ is one of them, hence $u \le -\ell'$. [step 1.2, step 3.1, L1]

5.1 Apply the reflection fact to the set $-S$: since $u$ is an upper bound of $-S$, its negative $-u$ is a lower bound of $-(-S)$, and $-(-S) = S$; so $\ell = -u$ is a lower bound of $S$. [step 4.1, step 3.1, L2]

5.2 Negating the inequality $u \le -\ell'$ reverses it, giving $-(-\ell') \le -u$, that is $\ell' \le \ell$. [step 4.2, step 4.1, L5]

6.1 Thus $\ell$ is a lower bound of $S$ satisfying $\ell' \le \ell$ for every lower bound $\ell'$ of $S$, so $\ell$ is a greatest lower bound of $S$; it is the only one, so $\inf S$ exists and $\inf S = \ell = -\sup(-S)$. [step 5.1, step 5.2, L3, L4] ∎

## Remarks

- The theorem is not a restatement of the least-upper-bound property: it is proved from it, by transporting the problem across the order-reversing bijection $x \mapsto -x$ of [[lem-reflection]]. Nothing about $\mathbb{R}$ beyond the complete-ordered-field axioms is used.
- The hypotheses are both needed. The empty set is bounded below by every real and has no greatest lower bound, and a set unbounded below has no lower bound at all; the dual failures for suprema are recorded in [[fs-every-set-has-sup]].
- The identity $\inf S = -\sup(-S)$ is the standard device for turning any statement about suprema into its dual; [[lem-inf-epsilon]] is the first application on this page.
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


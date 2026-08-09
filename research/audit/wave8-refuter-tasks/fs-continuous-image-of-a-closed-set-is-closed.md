## Selection reasons

- critical risk (12): 20 declared dependencies; 17 cited facts; 7 numbered proof steps; boundary-sensitive language; quotient or equivalence-class construction; analytic limiting/completeness language
- top-20 dependency-cone consumer (20 generated manifest edges)

## Target item — `fs-continuous-image-of-a-closed-set-is-closed`

Normalized current SHA-256: `75a9d61cc20f8a44d2a375238cc9a459c4d05aaca4be47d88ec7963e1ceb5f3c`

The complete current item follows, including frontmatter:

````markdown
---
id: fs-continuous-image-of-a-closed-set-is-closed
kind: false-statement
title: "FALSE: the image of a closed subset of $\\mathbb{R}$ under a continuous real function is closed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuity-real, thm-continuity-preimage-characterisation, thm-continuous-image-of-a-compact-set-r, thm-heine-borel-characterisation-r, def-open-cover-r, thm-algebra-of-continuous-functions, def-open-and-closed-in-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-limit-point-r, def-neighbourhood-r, def-interval, def-integer-power, thm-nth-roots-exist, lem-power-monotone, lem-of-inverse-positive, lem-of-abs-value, def-max-min, lem-finite-set-has-max, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "FALSE: continuous image of a closed set is closed"
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
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

**False claim:** if $A \subseteq \mathbb{R}$, if $f : A \to \mathbb{R}$ is
continuous on $A$ ([[def-continuity-real]]) and if $F \subseteq A$ is a closed
subset of $\mathbb{R}$ ([[def-open-and-closed-in-r]]), then the image
$f[F] = \{\, f(x) : x \in F \,\}$ is a closed subset of $\mathbb{R}$.

**Why it is tempting.** Continuity is characterised by the behaviour of
*preimages*: the preimage of every closed set is relatively closed
([[thm-continuity-preimage-characterisation]]). It is easy to transpose that to
images, and images are exactly where the characterisation says nothing.

**What is true.** Compactness, not closedness, is preserved: the image of a
compact set under a continuous function is compact
([[thm-continuous-image-of-a-compact-set-r]]), hence closed and bounded
([[thm-heine-borel-characterisation-r]]). Closedness by itself is preserved by
neither images nor unions of infinitely many closed sets, and boundedness by
itself is not preserved either, since $x \mapsto 1/x$ carries the bounded set
$(0,1)$ onto the unbounded set $(1,\infty)$.

## Facts & Assumptions

**Given:** The domain $A := \mathbb{R}$, the closed set $F := \mathbb{R}$, and the function $f : \mathbb{R} \to \mathbb{R}$, $f(x) := 1/(1+x^{2})$ ([[def-integer-power]]).

[L1] $\mathbb{R}$ is a closed subset of $\mathbb{R}$, since its complement $\varnothing$ is open ([[def-open-and-closed-in-r]]).

[L2] Algebra of continuous functions: polynomial functions are continuous on $\mathbb{R}$, and if $q$ is continuous and nowhere zero on a set then $1/q$ is continuous there ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L3] Squares and order: $x^{2} \ge 0$ for every real $x$, so $1 + x^{2} \ge 1 > 0$; and $0 < s \le t$ implies $0 < 1/t \le 1/s$ ([[lem-power-monotone]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-integer-power]]).

[L4] Square roots: every real $t \ge 0$ has a unique $s \ge 0$ with $s^{2} = t$ ([[thm-nth-roots-exist]]).

[L5] Closure: $x \in \overline{S}$ exactly when $N_{\varepsilon}(x) \cap S \ne \varnothing$ for every real $\varepsilon > 0$; and $S$ is closed exactly when $S = \overline{S}$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-limit-point-r]], [[def-neighbourhood-r]]).

[L6] Intervals and minima: $(0,1] = \{\, y : 0 < y \le 1 \,\}$ ([[def-interval]]); the minimum of a two-element set of reals exists and is one of them ([[lem-finite-set-has-max]], [[def-max-min]]); and $|u| \ge 0$ with $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]).

## Refutation

**Proof technique:** direct.

1.1 $F = \mathbb{R}$ is a closed subset of $\mathbb{R}$ and is contained in $A = \mathbb{R}$. [L1]

1.2 $f$ is continuous on $\mathbb{R}$: the denominator $x \mapsto 1 + x^{2}$ is a polynomial function, hence continuous by [L2], and it satisfies $1 + x^{2} \ge 1 > 0$ by [L3], so it never vanishes and $f = 1/(1+x^{2})$ is continuous by [L2]. [L2, L3]

1.3 **$(0,1] \subseteq f[\mathbb{R}]$.** Let $y$ satisfy $0 < y \le 1$ and put $t := 1/y - 1$. By [L3] we have $1/y \ge 1$, so $t \ge 0$, and [L4] supplies a real $s \ge 0$ with $s^{2} = t$. Then $1 + s^{2} = 1/y$ and hence $f(s) = 1/(1+s^{2}) = y$. [L3, L4, L6]

1.4 **$(0,1]$ is not closed.** Let a real $\varepsilon > 0$ be given and put $y := \min\{\varepsilon/2,\ 1\}$, a real with $0 < y \le 1$ by [L6], so $y \in (0,1]$; and $|y - 0| = y \le \varepsilon/2 < \varepsilon$, so $y \in N_{\varepsilon}(0) \cap (0,1]$. Hence $0 \in \overline{(0,1]}$ by [L5], while $0 \notin (0,1]$ because $0 < 0$ is false. So $(0,1] \ne \overline{(0,1]}$ and $(0,1]$ is not closed by [L5]. [L5, L6]

2.1 **$f[\mathbb{R}] \subseteq (0,1]$.** For every real $x$, [L3] gives $1 + x^{2} \ge 1 > 0$ and hence $0 < 1/(1+x^{2}) \le 1$, that is $f(x) \in (0,1]$. [step 1.2, L3, L6]

3.1 So $f[F] = f[\mathbb{R}] = (0,1]$. [step 2.1, step 1.3]

4.1 The set $F = \mathbb{R}$ is closed, $f$ is continuous on $\mathbb{R}$, and $f[F] = (0,1]$ is not closed: the claim is false. [step 1.1, step 1.2, step 3.1, step 1.4] ∎

## Remarks

- **The witness is as tame as possible.** $f$ is a quotient of polynomials, defined on the whole line, bounded, and its image is an interval; the failure is only that the infimum $0$ of the image is approached and not attained, because the points that would attain it have escaped to infinity. Replacing $\mathbb{R}$ by any closed unbounded set on which $f$ has infimum $0$, such as $[0,\infty)$, gives the same conclusion.

- **The image of a closed *bounded* set is closed**, because such a set is compact ([[thm-heine-borel-characterisation-r]]) and compactness is preserved ([[thm-continuous-image-of-a-compact-set-r]]). So the false claim becomes true exactly when the hypothesis is strengthened from closed to compact, which is what [[cor-continuous-image-of-an-interval-is-an-interval]] uses in its second half.

- **Openness is not preserved either**, in the other direction: the image of the open set $\mathbb{R}$ under this same $f$ is $(0,1]$, which is not open, and the image of $\mathbb{R}$ under a constant function is a single point. Continuity constrains preimages, not images; that asymmetry is the content of [[thm-continuity-preimage-characterisation]].
````

## Wave 8 provenance row for the target

```json
{
  "id": "fs-continuous-image-of-a-closed-set-is-closed",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
  ],
  "rationale": "The MIT notes distinguish compact-image preservation from closed-image preservation. The local refutation uses the standard closed domain [1,infinity) under reciprocal, whose image is (0,1].",
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
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq U$. - $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open. - A set is **clopen** when it is both open and closed.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f, g : A \\to \\mathbb{R}$, let $\\alpha \\in \\mathbb{R}$ and let $c \\in A$. Suppose $f$ and $g$ are continuous at $c$ ([[def-continuity-real]]). Then:",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-power-monotone",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let $a, b \\in \\mathbb{R}$ and let $n \\in \\mathbb{N}$, with powers as in [[def-integer-power]]. 1. **Signs.** If $a \\ge 0$ then $a^n \\ge 0$, and if $a > 0$ then $a^n > 0$. 2. **Strict monotonicity in the base.** If $0 \\le a < b$ and $n \\ge 1$ then $a^n < b^n$. Consequently, for $a, b \\ge 0$ and $n \\ge 1$: $a < b \\iff a^n < b^n$ and $a \\le b \\iff a^n \\le b^n$, and $x \\mapsto x^n$ is injective on $\\{x \\in \\mathbb{R} : x \\ge 0\\}$. 3. **Comparison with the base.** If $a \\ge 1$ and $n \\ge 1$ then $a^n \\ge a \\ge 1$; if $a > 1$ and $n \\ge 1$ then $a^n \\ge a > 1$; and if $0 \\le a \\le 1$ then $a^n \\le 1$. 4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b \\in F$. 1. If $a > 0$ then $a^{-1} > 0$. 2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "ordered field",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-nth-roots-exist",
      "source_section": "Statement",
      "quote": "$n \\ge 1$ there is a **unique** $s \\in \\mathbb{R}$ with $s \\ge 0$ and $s^n = a$",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-closure-characterisations-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with closure $\\overline{A}$ as in [[def-interior-closure-boundary-r]] and derived set $A'$ as in [[def-limit-point-r]]. Write $$E \\;:=\\; \\{\\, x \\in \\mathbb{R} : N_\\varepsilon(x) \\cap A \\ne \\varnothing \\text{ for every real } \\varepsilon > 0 \\,\\}$$ for the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then: 1. $\\overline{A} = E$. 2. $\\overline{A} = A \\cup A'$. 3. $\\overline{A}$ is the smallest closed superset of $A$: it is closed, it contains $A$, and it is contained in every closed $F$ with $A \\subseteq F$. 4. $A$ is closed if and only if $A = \\overline{A}$, if and only if $A' \\subseteq A$. Claim 3 is the content of the definition of $\\overline{A}$ and is restated here so that the four descriptions stand together; claims 1, 2 and 4 are the ones that carry work.",
      "uses": [
        "1.4"
      ]
    },
    {
      "fact": "L5",
      "source": "def-interior-closure-boundary-r",
      "source_section": "Definition",
      "quote": "- The **interior** of $A$ is the union of all open subsets of $A$: $$A^{\\circ} \\;:=\\; \\bigcup \\{\\, U \\subseteq \\mathbb{R} : U \\text{ open and } U \\subseteq A \\,\\}.$$ - The **closure** of $A$ is the intersection of all closed supersets of $A$: $$\\overline{A} \\;:=\\; \\bigcap \\{\\, F \\subseteq \\mathbb{R} : F \\text{ closed and } A \\subseteq F \\,\\}.$$ - The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus A^{\\circ}$. - The **exterior** of $A$ is $\\operatorname{ext} A := (\\mathbb{R} \\setminus A)^{\\circ}$.",
      "uses": [
        "1.4"
      ]
    },
    {
      "fact": "L5",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in [[def-neighbourhood-r]] and closure as in [[def-interior-closure-boundary-r]].",
      "uses": [
        "1.4"
      ]
    },
    {
      "fact": "L5",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and $0 < \\delta \\le \\varepsilon - |y - x|$, then",
      "uses": [
        "1.4"
      ]
    },
    {
      "fact": "L6",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly",
      "uses": [
        "1.3",
        "1.4",
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the set $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]).",
      "uses": [
        "1.3",
        "1.4",
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$ for every $s \\in S$.",
      "uses": [
        "1.3",
        "1.4",
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then $$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$ and, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.3",
        "1.4",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$F = \\mathbb{R}$ is a closed subset of $\\mathbb{R}$ and is contained in $A = \\mathbb{R}$.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "$f$ is continuous on $\\mathbb{R}$: the denominator $x \\mapsto 1 + x^{2}$ is a polynomial function, hence continuous by [L2], and it satisfies $1 + x^{2} \\ge 1 > 0$ by [L3], so it never vanishes and $f = 1/(1+x^{2})$ is continuous by [L2].",
      "step": "1.2",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "**$(0,1] \\subseteq f[\\mathbb{R}]$.** Let $y$ satisfy $0 < y \\le 1$ and put $t := 1/y - 1$. By [L3] we have $1/y \\ge 1$, so $t \\ge 0$, and [L4] supplies a real $s \\ge 0$ with $s^{2} = t$. Then $1 + s^{2} = 1/y$ and hence $f(s) = 1/(1+s^{2}) = y$.",
      "step": "1.3",
      "inputs": [
        "L3",
        "L4",
        "L6"
      ]
    },
    {
      "id": "step-1-4",
      "claim": "**$(0,1]$ is not closed.** Let a real $\\varepsilon > 0$ be given and put $y := \\min\\{\\varepsilon/2,\\ 1\\}$, a real with $0 < y \\le 1$ by [L6], so $y \\in (0,1]$; and $|y - 0| = y \\le \\varepsilon/2 < \\varepsilon$, so $y \\in N_{\\varepsilon}(0) \\cap (0,1]$. Hence $",
      "step": "1.4",
      "inputs": [
        "L6",
        "L5"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "**$f[\\mathbb{R}] \\subseteq (0,1]$.** For every real $x$, [L3] gives $1 + x^{2} \\ge 1 > 0$ and hence $0 < 1/(1+x^{2}) \\le 1$, that is $f(x) \\in (0,1]$.",
      "step": "2.1",
      "inputs": [
        "L3",
        "1.2",
        "L6"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "So $f[F] = f[\\mathbb{R}] = (0,1]$.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "1.3"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "The set $F = \\mathbb{R}$ is closed, $f$ is continuous on $\\mathbb{R}$, and $f[F] = (0,1]$ is not closed: the claim is false.",
      "step": "4.1",
      "inputs": [
        "1.1",
        "1.2",
        "3.1",
        "1.4"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The item uses a fixed nonempty real domain or fixed numerical witness, so no empty-domain branch is part of its claim."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 1.3–1.4 show 0 is the missing limit point of the image (0,1] and is not attained."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 1.1–1.3 include the domain endpoint 1 and image value 1."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 1.3 proves the full image equality, including the endpoint value 1 and excluding only 0."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 1.1 proves [1,∞) is closed with endpoint 1; step 1.3 proves the image is (0,1], preserving exactly one endpoint."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The reciprocal map and every witness are explicit formulas."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `fs-continuous-image-of-a-closed-set-is-closed` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `fs-continuous-image-of-a-closed-set-is-closed` is not an equivalence, so it has no reverse iff direction."
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
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-continuity-preimage-characterisation",
    "declared_target": "thm-continuity-preimage-characterisation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-continuous-image-of-a-compact-set-r",
    "declared_target": "thm-continuous-image-of-a-compact-set-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
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
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
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
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
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
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
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
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
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
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-nth-roots-exist",
    "declared_target": "thm-nth-roots-exist",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-continuous-image-of-a-closed-set-is-closed",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (21)

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

### `thm-continuity-preimage-characterisation`

````markdown
---
id: thm-continuity-preimage-characterisation
kind: theorem
title: "$f : A \\to \\mathbb{R}$ is continuous on $A$ if and only if the preimage of every open subset of $\\mathbb{R}$ is the intersection with $A$ of an open subset of $\\mathbb{R}$, and dually for closed sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, def-open-and-closed-in-r, def-neighbourhood-r, thm-open-set-algebra-r]
justified_by: []
aliases: [thm-continuity-open-preimage-r]
landmark: true
short: "preimage characterisation of continuity"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.8)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "D. Ernst, Continuous Real Functions"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/08%3A_New_Page/8.5%3A_Continuous_Real_Functions"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and $f : A \to \mathbb{R}$. Call a set
$S \subseteq A$ **relatively open in $A$** when $S = U \cap A$ for some open
$U \subseteq \mathbb{R}$, and **relatively closed in $A$** when $S = G \cap A$
for some closed $G \subseteq \mathbb{R}$ ([[def-open-and-closed-in-r]]). For
$V \subseteq \mathbb{R}$ write $f^{-1}(V) := \{\, x \in A : f(x) \in V \,\}$.
Then the following are equivalent.

1. $f$ is continuous on $A$ ([[def-continuity-real]]).
2. $f^{-1}(V)$ is relatively open in $A$ for every open $V \subseteq \mathbb{R}$.
3. $f^{-1}(F)$ is relatively closed in $A$ for every closed $F \subseteq \mathbb{R}$.

**"Relatively open" is defined here inline, and on purpose.** At this point in
the reading order this library has no subspace-topology item for $\mathbb{R}$,
and the metric one ([[def-isometry-and-metric-embedding]]) may not be reached
before [[lem-real-and-metric-notions-agree]] has said that the two vocabularies
agree, which is later on this page. The phrase above is therefore an
abbreviation for the displayed condition and nothing more.

**The preimage is taken inside $A$.** $f^{-1}(V)$ is a subset of $A$, never of
$\mathbb{R}$, so claim 2 does **not** say that preimages of open sets are open.
They are open only when $A$ is itself open: then $U \cap A$ is an intersection
of two open sets, hence open ([[thm-open-set-algebra-r]]). For $A = [0,1]$ and
$f$ the identity, $f^{-1}\bigl((-1,1/2)\bigr) = [0,1/2)$ is not open, and it is
the trace on $A$ of the open set $(-1,1/2)$.

**No choice principle is used.** The open set witnessing claim 2 is not selected
point by point; it is *constructed* as a single union over a family cut out by a
property, which is the device the proof below makes explicit.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ and a function $f : A \to \mathbb{R}$; for $V \subseteq \mathbb{R}$, $f^{-1}(V) = \{\, x \in A : f(x) \in V \,\}$.

[L1] Continuity of $f$ at $c \in A$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(c)| < \varepsilon$ for every $x \in A$ satisfying $|x - c| < \delta$; equivalently $f\bigl(A \cap N_{\delta}(c)\bigr) \subseteq N_{\varepsilon}(f(c))$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Open sets of $\mathbb{R}$: $U$ is open when every $x \in U$ has some $N_{\varepsilon}(x) \subseteq U$; every neighbourhood $N_{\varepsilon}(x)$ is itself open; a set is closed exactly when its complement is open ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] An arbitrary union of open subsets of $\mathbb{R}$ is open ([[thm-open-set-algebra-r]]).

[L4] Set algebra: for $V \subseteq \mathbb{R}$ one has $f^{-1}(\mathbb{R} \setminus V) = A \setminus f^{-1}(V)$; and for $U \subseteq \mathbb{R}$, $A \setminus (U \cap A) = (\mathbb{R} \setminus U) \cap A$.

## Proof

**Proof technique:** direct.

1.1 **From 1 to 2: the canonical witness.** Assume $f$ is continuous on $A$ and let $V \subseteq \mathbb{R}$ be open. Define $$U \;:=\; \bigcup \bigl\{\, N_{\delta}(x) \ : \ x \in f^{-1}(V),\ \delta \in \mathbb{R},\ \delta > 0,\ f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq V \,\bigr\}.$$ The family being united is cut out by a property of the pair $(x,\delta)$, so it is a set and nothing is selected from it. Each of its members is open by [L2], so $U$ is open by [L3]. [L2, L3]

1.2 **$f^{-1}(V) \subseteq U \cap A$.** Let $x \in f^{-1}(V)$, so $x \in A$ and $f(x) \in V$. Since $V$ is open, [L2] gives a real $\varepsilon > 0$ with $N_{\varepsilon}(f(x)) \subseteq V$, and continuity at $x$ gives, by [L1], a real $\delta > 0$ with $f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq N_{\varepsilon}(f(x)) \subseteq V$. So this pair $(x,\delta)$ contributes $N_{\delta}(x)$ to the union, and $x \in N_{\delta}(x)$ by [L2]. Hence $x \in U$, and $x \in A$. [L1, L2]

1.3 **From 2 to 1.** Assume claim 2, let $c \in A$ and let a real $\varepsilon > 0$ be given. The set $V := N_{\varepsilon}(f(c))$ is open by [L2], so $f^{-1}(V) = U \cap A$ for some open $U \subseteq \mathbb{R}$. Since $|f(c) - f(c)| = 0 < \varepsilon$ we have $c \in f^{-1}(V)$, hence $c \in U$, and [L2] gives a real $\delta > 0$ with $N_{\delta}(c) \subseteq U$. Every $x \in A$ with $|x - c| < \delta$ then lies in $U \cap A = f^{-1}(V)$, so $f(x) \in N_{\varepsilon}(f(c))$, that is $|f(x) - f(c)| < \varepsilon$. As $c$ and $\varepsilon$ were arbitrary, $f$ is continuous on $A$. [L1, L2]

2.1 **$U \cap A \subseteq f^{-1}(V)$.** Let $y \in U \cap A$. Then $y \in N_{\delta}(x)$ for some pair $(x,\delta)$ occurring in the union, so $y \in A \cap N_{\delta}(x)$ and therefore $f(y) \in V$ by the defining property of that pair. Hence $y \in f^{-1}(V)$. [step 1.1]

3.1 **Claim 2 holds.** By steps 1.2 and 2.1, $f^{-1}(V) = U \cap A$ with $U$ open, so $f^{-1}(V)$ is relatively open in $A$; and $V$ was an arbitrary open subset of $\mathbb{R}$. [step 1.1, step 1.2, step 2.1]

4.1 **2 and 3 are equivalent.** Let $F \subseteq \mathbb{R}$ be closed and put $V := \mathbb{R} \setminus F$, which is open by [L2]. If claim 2 holds then $f^{-1}(V) = U \cap A$ with $U$ open, and by [L4] $$f^{-1}(F) = A \setminus f^{-1}(V) = A \setminus (U \cap A) = (\mathbb{R} \setminus U) \cap A ,$$ with $\mathbb{R} \setminus U$ closed by [L2]; so $f^{-1}(F)$ is relatively closed. The converse runs the same computation in the other direction, starting from an open $V$, putting $F := \mathbb{R} \setminus V$ and using $f^{-1}(V) = A \setminus f^{-1}(F)$. [step 3.1, L2, L4]

5.1 Statements 1, 2 and 3 are therefore equivalent, and the passage from 1 to 2 selected nothing. [step 3.1, step 1.3, step 4.1] ∎

## Remarks

- **Why the union, and not a choice of $\delta$ at each point.** The textbook proof says "for each $x \in f^{-1}(V)$ pick $\delta_x$", which is a choice function on a subset of $\mathbb{R}$ that may be uncountable. Nothing in this library licenses that. Uniting *all* admissible balls avoids the issue completely: the family is defined by a property, membership of $x$ in $U$ needs only the existence of one admissible $\delta$ for that single $x$, and the reverse inclusion needs only the defining property of whichever pair happens to catch $y$.

- **The dual form is not "preimages of closed sets are closed".** As with claim 2, the preimage lives in $A$, and it is relatively closed. The image direction fails outright: a continuous function may carry a closed set to a set that is not closed, which is [[fs-continuous-image-of-a-closed-set-is-closed]].

- **This is the statement that survives when $\mathbb{R}$ is replaced by a metric space or a topological space.** The metric version at this point in the reading order is [[def-metric-topology]] together with [[def-metric-continuity]], and the agreement of the two vocabularies for $A \subseteq \mathbb{R}$ is [[lem-real-and-metric-notions-agree]], later on this page.
````

### `thm-continuous-image-of-a-compact-set-r`

````markdown
---
id: thm-continuous-image-of-a-compact-set-r
kind: theorem
title: "The image of a compact subset of $\\mathbb{R}$ under a continuous real function is compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, def-open-cover-r, def-open-and-closed-in-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "continuous image of a compact set"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.14)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ be continuous on $A$
([[def-continuity-real]]) and let $K \subseteq A$ be compact in the sense of
[[def-open-cover-r]], that is, every family of open subsets of $\mathbb{R}$
whose union contains $K$ has a finite subfamily whose union contains $K$. Then
the image

$$f[K] \;:=\; \{\, f(x) : x \in K \,\}$$

is a compact subset of $\mathbb{R}$.

**This theorem is stated twice in this library, on purpose.** Its metric-space
twin is [[thm-continuous-image-of-a-compact-space-is-compact]], proved from the
cover machinery of metric spaces; the proof below is $\mathbb{R}$-native and
uses only open subsets of $\mathbb{R}$ and the definition of continuity of this
page. The duplication is deliberate and is acknowledged in exactly one place,
[[lem-real-and-metric-notions-agree]] later on this page, which proves that the
two notions of "compact subset of $\mathbb{R}$" and the two notions of
"continuous" coincide, so that the two theorems really are the same statement in
two vocabularies.

**No choice principle is used.** The covering family built below is cut out by a
property rather than selected point by point, and the only selection made is
from a *finite* list, which needs no axiom.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ continuous on $A$, and a compact set $K \subseteq A$; $f[K] = \{\, f(x) : x \in K \,\}$.

[L1] Continuity of $f$ at $x \in A$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(y) - f(x)| < \varepsilon$ for every $y \in A$ satisfying $|y - x| < \delta$; equivalently $f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq N_{\varepsilon}(f(x))$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Open sets: $V \subseteq \mathbb{R}$ is open when every point of $V$ has a neighbourhood inside $V$, and every neighbourhood $N_{\delta}(x)$ is itself an open set containing $x$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] Compactness of $K$: for every family $\mathcal{W}$ of open subsets of $\mathbb{R}$ with $K \subseteq \bigcup \mathcal{W}$, either $K = \varnothing$ and the empty subfamily covers it, or there are $n \in \mathbb{N}$ and $W_0, \dots, W_n \in \mathcal{W}$ with $K \subseteq W_0 \cup \dots \cup W_n$ ([[def-open-cover-r]]).

## Proof

**Proof technique:** direct.

1.1 If $K = \varnothing$, then $f[K] = \varnothing$, which is compact by [L3]. Hence suppose $K \ne \varnothing$ for the rest of the proof. [L3, cases]

1.2 Let $\mathcal{V}$ be a family of open subsets of $\mathbb{R}$ with $f[K] \subseteq \bigcup \mathcal{V}$. Define $$\mathcal{W} \;:=\; \bigl\{\, N_{\delta}(x) \ : \ x \in K,\ \delta \in \mathbb{R},\ \delta > 0,\ \text{and } f\bigl(K \cap N_{\delta}(x)\bigr) \subseteq V \text{ for some } V \in \mathcal{V} \,\bigr\}.$$ This family is cut out by a property of the pair $(x,\delta)$, so it is a set and nothing is selected in forming it; every member is an open subset of $\mathbb{R}$ by [L2]. [L2]

2.1 **$\mathcal{W}$ covers $K$.** Let $x \in K$. Then $x \in A$ and $f(x) \in f[K] \subseteq \bigcup \mathcal{V}$, so $f(x) \in V$ for some $V \in \mathcal{V}$. As $V$ is open, [L2] gives a real $\varepsilon > 0$ with $N_{\varepsilon}(f(x)) \subseteq V$, and [L1] gives a real $\delta > 0$ with $f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq N_{\varepsilon}(f(x)) \subseteq V$. Since $K \subseteq A$ we get $f\bigl(K \cap N_{\delta}(x)\bigr) \subseteq V$, so $N_{\delta}(x) \in \mathcal{W}$, and $x \in N_{\delta}(x)$ by [L2]. Hence $K \subseteq \bigcup \mathcal{W}$. [step 1.2, L1, L2]

3.1 By [L3] there are $n \in \mathbb{N}$ and members $W_0, \dots, W_n$ of $\mathcal{W}$ with $K \subseteq W_0 \cup \dots \cup W_n$. For each $i \le n$ the membership $W_i \in \mathcal{W}$ asserts the existence of some $V \in \mathcal{V}$ with $f(K \cap W_i) \subseteq V$; naming one such $V_i$ for each of the finitely many indices $i \le n$ requires no choice principle. [step 1.1, step 1.2, step 2.1, L3, choose]

4.1 **The finite subfamily works.** Let $z \in f[K]$, say $z = f(x)$ with $x \in K$. By step 3.1 there is $i \le n$ with $x \in W_i$, hence $x \in K \cap W_i$ and $z = f(x) \in V_i$. Therefore $f[K] \subseteq V_0 \cup \dots \cup V_n$, a union of finitely many members of $\mathcal{V}$. [step 3.1]

5.1 Every family of open subsets of $\mathbb{R}$ covering $f[K]$ thus has a finite subfamily covering $f[K]$, so $f[K]$ is compact. [step 1.1, step 1.2, step 4.1, L3] ∎

## Remarks

- **The proof is the preimage characterisation, made canonical.** [[thm-continuity-preimage-characterisation]] says that $f^{-1}(V)$ is the trace on $A$ of an open set; the textbook argument pulls back each $V \in \mathcal{V}$ to such an open set and covers $K$ with those. Doing it that way selects one open set per member of $\mathcal{V}$, a family that may be arbitrarily large. Uniting all admissible balls instead, as above, reaches the same cover with no selection, and the only naming step left is over a finite index set.

- **The image of a compact set is closed and bounded**, by [[thm-heine-borel-characterisation-r]]. That is what the next two items use, and it is the shortest route to both boundedness and the attainment of extrema.

- **Compactness cannot be weakened to closedness or to boundedness.** The image of a closed set need not be closed ([[fs-continuous-image-of-a-closed-set-is-closed]]), and the image of a bounded set need not be bounded, since $x \mapsto 1/x$ carries the bounded set $(0,1)$ onto $(1,\infty)$.
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

### `thm-nth-roots-exist`

````markdown
---
id: thm-nth-roots-exist
kind: theorem
title: "Existence and uniqueness of $n$-th roots: a unique $a^{1/n} \\ge 0$ with $(a^{1/n})^n = a$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-sup-epsilon, lem-sup-unique, lem-power-monotone, lem-power-difference-factorisation, def-bounded-set, lem-of-add-order, thm-of-square-roots, def-integer-power, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, lem-of-zero-mult, lem-of-naturals-positive, lem-of-q-embeds, def-ordered-field]
justified_by: []
aliases: [thm-nth-root, def-nth-root]
landmark: true
short: "unique $s\\ge0$ with $s^n=a$"
proof_strategy: contradiction
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
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.21)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).
For every $a \in \mathbb{R}$ with $a \ge 0$ and every $n \in \mathbb{N}$ with
$n \ge 1$ there is a **unique** $s \in \mathbb{R}$ with $s \ge 0$ and $s^n = a$
([[def-integer-power]]); we write

$$s = a^{1/n} = \sqrt[n]{a}.$$

Moreover $a^{1/n} > 0$ when $a > 0$, and $a^{1/1} = a$.

**This generalises the published [[thm-of-square-roots]], and the case $n = 2$ is
not new.** That theorem already produces the unique $\sqrt{a} \ge 0$ with
$(\sqrt{a})^2 = a$, and it is cited as such throughout the library; the notation
$a^{1/2}$ introduced here is the same number. What is new is the passage to
general $n$: the completed square that drives the $n = 2$ argument has no direct
analogue, and its place is taken by the factorisation of $b^n - a^n$ and the
resulting Lipschitz estimate ([[lem-power-difference-factorisation]]).

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]]), that is, an ordered field ([[def-ordered-field]]) with the least-upper-bound property; an element $a \ge 0$; and a natural $n \ge 1$, with $\iota(n) \in \mathbb{R}$ written $n$ ([[lem-of-naturals-positive]], [[lem-of-q-embeds]]).

[L1] Least-upper-bound property: every nonempty subset of $\mathbb{R}$ that is bounded above ([[def-bounded-set]]) has a least upper bound, and it is unique, so the notation $\sup S$ is legitimate ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L2] Epsilon characterisation of the supremum: if $S$ is nonempty and bounded above and $u = \sup S$, then for every $\varepsilon > 0$ there is $t \in S$ with $u - \varepsilon < t$ ([[lem-sup-epsilon]]).

[L3] Monotonicity of powers ([[lem-power-monotone]]): $x \mapsto x^n$ is strictly increasing on $\{x \ge 0\}$ for $n \ge 1$, hence injective there; $x \ge 0$ implies $x^n \ge 0$ and $x > 0$ implies $x^n > 0$; and $x \ge 1$ implies $x^n \ge x$.

[L4] Lipschitz estimate ([[lem-power-difference-factorisation]]): if $0 \le x \le y \le B$ and $n \ge 1$ then $0 \le y^n - x^n \le n B^{\,n-1}(y - x)$.

[L5] Order arithmetic: adding a constant preserves the order and for $c > 0$, $x < y \iff cx < cy$ ([[lem-of-add-order]], [[lem-of-sign-rules]]), both stated there for the STRICT order alone, so where a $\le$ is added or scaled below the move is that statement together with the case of equality, settled by trichotomy ([[def-ordered-field]]); $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of those three, hence $2 = 1 + 1 > 0$; and $0 < 2^{-1} < 1$, since $0 < 1 < 2$ gives $0 < 2^{-1} < 1^{-1} = 1$ ([[lem-of-inverse-positive]], claim 2).

[L6] Trichotomy: for $x, y \in \mathbb{R}$ exactly one of $x < y$, $x = y$, $y < x$ holds; consequently any two elements have a minimum ([[def-ordered-field]]).

[L7] A product with a zero factor vanishes: $0 \cdot x = x \cdot 0 = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** contradiction.

1.1 If $a = 0$ then $s = 0$ satisfies $s \ge 0$ and $s^n = 0 = a$, since $0^n = 0^{n-1} \cdot 0 = 0$ for $n \ge 1$; so existence holds in that case and we assume $a > 0$ from here on. [given, L3, L7, algebra]

1.2 Uniqueness holds as soon as a root exists: if $u, v \ge 0$ satisfy $u^n = v^n$, then strict monotonicity of $x \mapsto x^n$ on the nonnegatives rules out both $u < v$ and $v < u$, so $u = v$ by trichotomy. [L3, L6]

1.3 Define $S = \{t \in \mathbb{R} : t \ge 0 \text{ and } t^n \le a\}$; then $0 \in S$, because $0 \ge 0$ and $0^n = 0 \le a$, so $S$ is nonempty. [given, L3, L7]

1.4 The element $M := 1 + a$ is an upper bound of $S$: since $a > 0$ and $1 > 0$ we have $M > 1$ and $M > a$, so any $t > M$ satisfies $t > 1$, whence $t^n \ge t > M > a$ and $t \notin S$. [given, L3, L5]

2.1 By the least-upper-bound property $s := \sup S$ exists in $\mathbb{R}$; moreover $s \ge 0$ because $0 \in S$, and $s \le M$ because $M$ is an upper bound and $s$ is the least one. [L1, step 1.3, step 1.4]

3.1 Put $B := M + 1 = a + 2$; then $B > M \ge 1 > 0$, so $B^{\,n-1} > 0$ and $n B^{\,n-1} > 0$, and every $x$ with $0 \le x \le M + 1$ satisfies $0 \le x \le B$. [step 2.1, L3, L5]

3.2 Assume, for contradiction, that $s^n \ne a$; by trichotomy either $s^n < a$ or $s^n > a$. [assume-contra, step 2.1, L6]

4.1 (Case $s^n < a$.) Put $\delta := \min\{1, (a - s^n)(n B^{\,n-1})^{-1}\}$, which is $> 0$ since $a - s^n > 0$ and $n B^{\,n-1} > 0$, and put $h := 2^{-1}\delta$, so that $0 < h < \delta \le 1$ and $h < (a - s^n)(nB^{\,n-1})^{-1}$; then $0 \le s \le s + h \le M + 1 = B$, so the Lipschitz estimate gives $(s+h)^n - s^n \le nB^{\,n-1} h < a - s^n$, hence $(s+h)^n < a$ and $s + h \in S$, while $s + h > s$ contradicts that $s$ is an upper bound of $S$. [assume-case low, step 3.2, step 2.1, step 3.1, L4, L5, L6, choose]

4.2 (Case $s^n > a$.) Here $s > 0$, since $s = 0$ would give $s^n = 0 \le a$; put $\delta := \min\{s, (s^n - a)(nB^{\,n-1})^{-1}\} > 0$ and $h := 2^{-1}\delta$, so that $0 < h < s$ and $h < (s^n - a)(nB^{\,n-1})^{-1}$; then $0 \le s - h \le s \le B$, so the Lipschitz estimate gives $s^n - (s-h)^n \le nB^{\,n-1}h < s^n - a$, hence $(s-h)^n > a$; applying the epsilon characterisation with $\varepsilon = h$ produces $t \in S$ with $t > s - h \ge 0$, whence $t^n > (s-h)^n > a$ by strict monotonicity, contradicting $t \in S$. [assume-case high, step 3.2, step 2.1, step 3.1, L2, L3, L4, L5, L6, L7, choose]

5.1 Both cases of the disjunction in step 3.2 are impossible, so the assumption fails and $s^n = a$; this $s$ is the unique nonnegative $n$-th root of $a$ by step 1.2, it satisfies $s > 0$ when $a > 0$ because $s = 0$ would force $a = s^n = 0$, and at $n = 1$ the element $a$ itself is a nonnegative solution of $s^1 = a$, so $a^{1/1} = a$; writing $a^{1/n} = \sqrt[n]{a}$ for it, the case $n = 2$ recovers the already published $\sqrt{a}$ of [[thm-of-square-roots]]. [step 4.1, step 4.2, step 3.2, step 1.2, step 1.1, L3, L7, cases, discharge-contradiction] ∎
````


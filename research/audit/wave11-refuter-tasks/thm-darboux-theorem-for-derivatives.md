## Selection reasons

- high risk (7): 9 declared dependencies; 6 cited facts; boundary-sensitive language

## Target item — `thm-darboux-theorem-for-derivatives`

Normalized current SHA-256: `d4116a2c8b02f3eac429e025c73e43ed2c88c387bf40afb9a7813204af132f4d`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-darboux-theorem-for-derivatives
kind: theorem
title: "Darboux's theorem: every derivative has the intermediate-value property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-derivative, cor-differentiable-implies-continuous, thm-heine-borel-r, thm-extreme-value-r, thm-fermat-interior-extremum, thm-algebra-of-derivatives, lem-derivative-of-a-power, def-interval, def-intermediate-value-property]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "J. Lebl, Basic Analysis I, Mean value theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
    - title: "Colgate University MATH 323, Chapter 5 notes"
      url: "https://math.colgate.edu/math323/dlantz/extras/notesC5.pdf"
pipeline_run: null
---

## Statement

If $I\subseteq\mathbb R$ is an interval and $f:I\to\mathbb R$ is differentiable, then $f'$ has the intermediate value property ([[def-intermediate-value-property]]).

## Facts & Assumptions

**Given:** $x<y$ in $I$ and a real $\lambda$ between $f'(x)$ and $f'(y)$.

[L1] Differentiability implies continuity; the closed bounded interval $[x,y]$ is compact; and a continuous real function on a nonempty compact set attains its extrema ([[cor-differentiable-implies-continuous]], [[thm-heine-borel-r]], [[thm-extreme-value-r]]).

[L2] An interior extremum of a differentiable function has derivative $0$ ([[thm-fermat-interior-extremum]]).

[L3] Derivatives obey the algebra rules, and the derivative of $t\mapsto t$ is $1$ ([[thm-algebra-of-derivatives]], [[lem-derivative-of-a-power]]).

## Proof

**Proof technique:** cases.

1.1 If $\lambda=f'(x)$ or $\lambda=f'(y)$, choose that endpoint.  [assume-case endpoint, given]

1.2 Suppose $f'(x)<\lambda<f'(y)$, and define $h(t)=f(t)-\lambda t$ on $[x,y]$. Then $h'(x)<0<h'(y)$.  [assume-case increasing, L3, algebra]

1.3 If instead $f'(y)<\lambda<f'(x)$, apply the preceding argument to $-h$, obtaining an interior extremum of $h$.  [assume-case decreasing, L1, L3]

2.1 For sufficiently small positive $s,t$, the derivative inequalities give $h(x+s)<h(x)$ and $h(y-t)<h(y)$. Hence a minimum of $h$ on $[x,y]$ occurs at an interior point $c$.  [step 1.2, L1, choose]

3.1 In either strict-order case, Fermat gives $h'(c)=0$, hence $f'(c)=\lambda$. Together with the endpoint case, every intermediate value is attained.  [step 2.1, step 1.3, L2, L3, cases-exhaustive] ∎
````

## Wave 11 provenance row

```json
{
  "id": "thm-darboux-theorem-for-derivatives",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_mvt.html",
    "https://math.colgate.edu/math323/dlantz/extras/notesC5.pdf"
  ],
  "rationale": "Both sources state that the derivative of a differentiable real function on an interval has the intermediate value property, with the same quantifiers and direction. The extremum-based numbered proof is local.",
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
      "source": "cor-differentiable-implies-continuous",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a\nlimit point of $A$ ([[def-limit-point-r]]). If $f$ is differentiable at $c$\n([[def-derivative]]) then $f$ is continuous at $c$ ([[def-continuity-real]]).\n\nConsequently, if $f$ is differentiable on a set $S \\subseteq A$ then $f$ is\ncontinuous at every point of $S$.\n\n**No converse is asserted, and none holds.** Continuity at $c$ does not give\ndifferentiability at $c$, and the standard witness is worked out on the\ncompanion page.",
      "uses": [
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-heine-borel-r",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a \\le b$. Then the closed bounded interval\n$[a,b]$ ([[def-interval]]) is compact ([[def-open-cover-r]]): every family of\nopen subsets of $\\mathbb{R}$ whose union contains $[a,b]$ has a finite subfamily\nwhose union already contains $[a,b]$.\n\nThe proof is by repeated bisection. Supposing some open cover admits no finite\nsubcover, one halves the interval, keeps a half that still admits none, and\niterates; the halves shrink to a point, which the cover does reach, and a single\nmember of the cover then swallows a whole late-stage half. **The halving rule is\ncanonical**, taking the left half whenever the left half works, so the recursion\nuses [[thm-recursion]] and no choice principle.",
      "uses": [
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-extreme-value-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ be continuous on $A$\n([[def-continuity-real]]) and let $K \\subseteq A$ be **nonempty** and compact\n([[def-open-cover-r]]). Then $\\sup f[K]$ and $\\inf f[K]$ exist and are\n**attained**: there are $p, q \\in K$ with\n\n$$f(q) \\;=\\; \\inf f[K] \\;\\le\\; f(x) \\;\\le\\; \\sup f[K] \\;=\\; f(p) \\qquad \\text{for every } x \\in K .$$\n\nEquivalently, the set $f[K]$ has a maximum and a minimum\n([[def-max-min]]), namely $\\max f[K] = f(p)$ and $\\min f[K] = f(q)$.\n\n**Nonemptiness of $K$ is a hypothesis, not an oversight.** For $K = \\varnothing$\nthe set $f[K]$ is empty, and neither a supremum nor a maximum of the empty set\nexists in this library ([[def-complete-ordered-field]] supplies suprema of\nnonempty sets bounded above only).\n\n**This theorem is stated twice in this library, on purpose.** Its metric-space\ntwin is [[thm-extreme-value-metric]], proved from the cover machinery of metric\nspaces; the proof below is $\\mathbb{R}$-native, running through Heine-Borel for\n$\\mathbb{R}$ and the order-completeness of $\\mathbb{R}$, and it uses no cover\nargument beyond the one already spent in\n[[thm-continuous-image-of-a-compact-set-r]]. That the two statements are the\nsame statement in two vocabularies is proved in\n[[lem-real-and-metric-notions-agree]], later on this page.",
      "uses": [
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-fermat-interior-extremum",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be\n**interior to $A$** ([[def-local-extremum]],\n[[def-interior-closure-boundary-r]]). Suppose $f$ has a local extremum at $c$\n([[def-local-extremum]]) and is differentiable at $c$ ([[def-derivative]]).\nThen\n\n$$f'(c) \\;=\\; 0 .$$\n\nThe symbol $f'(c)$ is meaningful under these hypotheses because an interior\npoint of $A$ is a limit point of $A$, which is proved in\n[[def-local-extremum]].\n\n**Interiority is a hypothesis and not a convenience.** At a point of $A$ that is\nnot interior, the argument below cannot place points of $A$ on both sides of\n$c$, and the conclusion genuinely fails: the companion page exhibits a function\non $[0,1]$ attaining both its greatest and its least value at points where the\nderivative is $1$.\n\n**No converse is asserted.** A vanishing derivative does not produce an\nextremum. The witness is the cubic of\n[[fs-vanishing-derivative-forbids-strict-increase]], which has $f'(0) = 0$ and\nneither a local maximum nor a local minimum at $0$; that failure is recorded in\nthe remarks of that item, not as an item of its own.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-algebra-of-derivatives",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $c \\in A$ be a limit point of $A$\n([[def-limit-point-r]]), let $f, g : A \\to \\mathbb{R}$ be differentiable at $c$\n([[def-derivative]]) and let $\\alpha \\in \\mathbb{R}$. Then:\n\n1. $f + g$ is differentiable at $c$ and $(f+g)'(c) = f'(c) + g'(c)$;\n2. $\\alpha f$ is differentiable at $c$ and $(\\alpha f)'(c) = \\alpha f'(c)$;\n3. $fg$ is differentiable at $c$ and $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$;\n4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the\n   point $c$ lies in $A_0$ and is a limit point of $A_0$, the quotient\n   $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is differentiable\n   at $c$ as a function on $A_0$, and\n   $$\\bigl((f/g)|_{A_0}\\bigr)'(c) \\;=\\; \\frac{f'(c)\\,g(c) - f(c)\\,g'(c)}{g(c)^{2}} .$$\n\nEach claim asserts two things: that the derivative on the left exists, and that\nit has the stated value. Both are proved.\n\n**Why claim 4 is stated on $A_0$.** The function $f/g$ is not defined where $g$\nvanishes, and $g$ may vanish at points of $A$ far from $c$; restricting to $A_0$\nis forced. That the restriction still has $c$ as a limit point, so that a\nderivative there means anything at all, is not free either, and it is the last\nclaim of [[lem-sign-preservation-near-a-limit]] applied to $g$. The hypothesis\nis $g(c) \\ne 0$, not \"$g$ vanishes nowhere\".\n\n**Everything is proved through\n[[thm-caratheodory-characterisation]].** No difference quotient is estimated and\nno limit theorem beyond continuity is used, so no choice principle is spent.\nThe four identities are four algebraic rearrangements of an increment, each\nfollowed by a reading of [[thm-algebra-of-continuous-functions]].",
      "uses": [
        "1.2",
        "1.3",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-derivative-of-a-power",
      "source_section": "Statement",
      "quote": "Powers are those of [[def-integer-power]], and $\\iota : \\mathbb{N} \\to\n\\mathbb{R}$ is the canonical natural of [[def-canonical-natural]], so that\n$\\iota(0) = 0$ and $\\iota(m+1) = \\iota(m) + 1$. Let $n \\in \\mathbb{N}$.\n\n1. The function $p_0 : \\mathbb{R} \\to \\mathbb{R}$, $p_0(x) = x^{0}$, is the\n   constant function $1$, and it is differentiable at every $c \\in \\mathbb{R}$\n   with $p_0'(c) = 0$ ([[def-derivative]]).\n2. For $n \\ge 1$ the function $p_n : \\mathbb{R} \\to \\mathbb{R}$,\n   $p_n(x) = x^{n}$, is differentiable at every $c \\in \\mathbb{R}$, and\n   $$p_n'(c) \\;=\\; \\iota(n)\\,c^{\\,n-1} .$$\n3. For $n \\ge 1$ put $A_0 := \\{\\, x \\in \\mathbb{R} : x \\ne 0 \\,\\}$. The function\n   $m_n : A_0 \\to \\mathbb{R}$, $m_n(x) = x^{-n}$, is differentiable at every\n   $c \\in A_0$ as a function on $A_0$, and\n   $$m_n'(c) \\;=\\; -\\,\\iota(n)\\,c^{\\,-n-1} .$$\n4. Let $a : \\mathbb{N} \\to \\mathbb{R}$ with $a_j = 0$ for $j \\ge n$, and let\n   $P : \\mathbb{R} \\to \\mathbb{R}$ be the polynomial function\n   $P(x) = \\sum_{j<n} a_j x^{j}$ ([[def-finite-sum]]). Then $P$ is\n   differentiable at every $c \\in \\mathbb{R}$, and, defining $e : \\mathbb{N}\n   \\to \\mathbb{R}$ by $e_0 := 0$ and $e_j := \\iota(j)\\,a_j\\,c^{\\,j-1}$ for\n   $j \\ge 1$,\n   $$P'(c) \\;=\\; \\sum_{j<n} e_j .$$\n\n**Claim 2 is stated for $n \\ge 1$ and not for $n \\ge 0$, and that is not\ntimidity.** At $n = 0$ its right-hand side reads $\\iota(0)\\,c^{-1}$, and\n$c^{-1}$ is not defined at $c = 0$ ([[def-integer-power]]), so the formula is\nnot a statement about the whole line. Claim 1 is what covers $n = 0$, and it\nsays the derivative is $0$ there, which is what the informal reading\n\"$0 \\cdot c^{-1}$\" is reaching for. The same shift is why the term $e_0$ of\nclaim 4 is defined to be $0$ outright rather than by the formula.",
      "uses": [
        "1.2",
        "1.3",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-darboux-theorem-for-derivatives-step-1-1",
      "claim": "If $\\lambda=f'(x)$ or $\\lambda=f'(y)$, choose that endpoint. [assume-case endpoint, given]",
      "step": "1.1",
      "inputs": [
        "assume-case endpoint",
        "given"
      ]
    },
    {
      "id": "thm-darboux-theorem-for-derivatives-step-1-2",
      "claim": "Suppose $f'(x)<\\lambda<f'(y)$, and define $h(t)=f(t)-\\lambda t$ on $[x,y]$. Then $h'(x)<0<h'(y)$. [assume-case increasing, L3, algebra]",
      "step": "1.2",
      "inputs": [
        "assume-case increasing",
        "L3",
        "algebra"
      ]
    },
    {
      "id": "thm-darboux-theorem-for-derivatives-step-1-3",
      "claim": "If instead $f'(y)<\\lambda<f'(x)$, apply the preceding argument to $-h$, obtaining an interior extremum of $h$. [assume-case decreasing, L1, L3]",
      "step": "1.3",
      "inputs": [
        "assume-case decreasing",
        "L1",
        "L3"
      ]
    },
    {
      "id": "thm-darboux-theorem-for-derivatives-step-2-1",
      "claim": "For sufficiently small positive $s,t$, the derivative inequalities give $h(x+s)<h(x)$ and $h(y-t)<h(y)$. Hence a minimum of $h$ on $[x,y]$ occurs at an interior point $c$. [step 1.2, L1, choose]",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "L1",
        "choose"
      ]
    },
    {
      "id": "thm-darboux-theorem-for-derivatives-step-3-1",
      "claim": "In either strict-order case, Fermat gives $h'(c)=0$, hence $f'(c)=\\lambda$. Together with the endpoint case, every intermediate value is attained. [step 2.1, step 1.3, L2, L3, cases-exhaustive] ∎",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "step 1.3",
        "L2",
        "L3",
        "cases-exhaustive"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-darboux-theorem-for-derivatives concerns stipulated functions and points; no empty family, empty sum, or empty choice domain changes its assertion."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-darboux-theorem-for-derivatives has no counting, exponent, or value parameter whose zero case changes the proof."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-darboux-theorem-for-derivatives has no counting, exponent, or unit parameter whose one case changes the proof."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-darboux-theorem-for-derivatives has no interval-length or denominator parameter that may collapse degenerately."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "thm-darboux-theorem-for-derivatives contains no interval-endpoint assertion requiring a separate endpoint case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 establishes or explicitly fixes the object before the proof chooses or extremizes it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of thm-darboux-theorem-for-derivatives is not a biconditional, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of thm-darboux-theorem-for-derivatives is not a biconditional, so it has no reverse iff direction."
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
    "source": "thm-darboux-theorem-for-derivatives",
    "sourcePage": "darboux-lhopital-and-taylor",
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
    "source": "thm-darboux-theorem-for-derivatives",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "cor-differentiable-implies-continuous",
    "declared_target": "cor-differentiable-implies-continuous",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-darboux-theorem-for-derivatives",
    "sourcePage": "darboux-lhopital-and-taylor",
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
    "source": "thm-darboux-theorem-for-derivatives",
    "sourcePage": "darboux-lhopital-and-taylor",
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
    "source": "thm-darboux-theorem-for-derivatives",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-fermat-interior-extremum",
    "declared_target": "thm-fermat-interior-extremum",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-darboux-theorem-for-derivatives",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-algebra-of-derivatives",
    "declared_target": "thm-algebra-of-derivatives",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-darboux-theorem-for-derivatives",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "lem-derivative-of-a-power",
    "declared_target": "lem-derivative-of-a-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-darboux-theorem-for-derivatives",
    "sourcePage": "darboux-lhopital-and-taylor",
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
    "source": "thm-darboux-theorem-for-derivatives",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-intermediate-value-property",
    "declared_target": "def-intermediate-value-property",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
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

## Full exact-current text of every cited or declared item (9)

### `cor-differentiable-implies-continuous`

````markdown
---
id: cor-differentiable-implies-continuous
kind: corollary
title: "A function differentiable at $c$ is continuous at $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-caratheodory-characterisation, def-continuity-real, thm-algebra-of-continuous-functions, def-limit-point-r]
justified_by: []
forward_refs: [cex-absolute-value-is-not-differentiable-at-zero]
aliases: []
landmark: true
short: "differentiable implies continuous"
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
    - title: "Differentiable function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Differentiable_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.2)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
limit point of $A$ ([[def-limit-point-r]]). If $f$ is differentiable at $c$
([[def-derivative]]) then $f$ is continuous at $c$ ([[def-continuity-real]]).

Consequently, if $f$ is differentiable on a set $S \subseteq A$ then $f$ is
continuous at every point of $S$.

**No converse is asserted, and none holds.** Continuity at $c$ does not give
differentiability at $c$, and the standard witness is worked out on the
companion page.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a point $c \in A$ that is a limit point of $A$ at which $f$ is differentiable ([[def-derivative]], [[def-limit-point-r]]).

[L1] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]): since $f$ is differentiable at the limit point $c$ of $A$, there is $\varphi : A \to \mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in A$, and $\varphi(c) = f'(c)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]]): sums, scalar multiples and products of functions continuous at a point of the common domain are continuous there (claim 1); and every constant function on $A$ and the identity $x \mapsto x$ on $A$ are continuous at every point of $A$ (claim 5).

[L3] Continuity of $f$ at $c$ is the $\varepsilon$-$\delta$ condition of [[def-continuity-real]], and continuity on a set is continuity at each of its points.

## Proof

**Proof technique:** direct.

1.1 Fix a function $\varphi : A \to \mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in A$. [L1, choose]

1.2 The identity $x \mapsto x$ on $A$ and every constant function on $A$ are continuous at $c$; hence so is $x \mapsto x - c$, which is the sum of the identity and the constant function with value $-c$. [L2]

2.1 The pointwise product $x \mapsto \varphi(x)(x - c)$ is continuous at $c$, being the product of two functions on $A$ continuous at $c$. [step 1.1, step 1.2, L2]

3.1 For every $x \in A$ one has $f(x) = f(c) + \varphi(x)(x - c)$, so $f$ is the sum of the constant function with value $f(c)$ and the product of step 2.1. [step 1.1, L1]

4.1 A sum of two functions continuous at $c$ is continuous at $c$, so $f$ is continuous at $c$. [step 2.1, step 3.1, L2, L3]

5.1 The point $c$ was an arbitrary point of $A$, a limit point of $A$, at which $f$ is differentiable; applying step 4.1 at every point of a set $S \subseteq A$ on which $f$ is differentiable gives continuity of $f$ at every point of $S$. [step 3.1, L3] ∎

## Remarks

- **Where the work actually is.** None of it is here. Carathéodory's characterisation already replaces the quotient by a product, and a product is visibly small when one factor is bounded near $c$ and the other tends to $0$; the algebra of continuous functions packages exactly that. A direct proof from the quotient would multiply and divide by $x - c$ and would have to say why that is legal, which is the same observation in a less convenient place.

- **The converse fails.** $x \mapsto |x|$ is continuous at $0$ and not differentiable there, which is [[cex-absolute-value-is-not-differentiable-at-zero]] on the companion page. So continuity is strictly weaker, and the gap is not exotic: it opens at a single corner.

- **What is *not* claimed.** Nothing here says that a function differentiable on a set has a continuous derivative, and nothing here says that $f'$ is defined anywhere except where it was assumed to be. Both are separate questions, and neither is settled on this page.
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

### `def-intermediate-value-property`

````markdown
---
id: def-intermediate-value-property
kind: definition
title: "The intermediate value property (Darboux property) of a function on an interval: the image of every subinterval is order-convex"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
  evidence: semantic-source
deps: [lem-monotone-with-interval-image-is-continuous, def-interval, def-complete-ordered-field, thm-connected-subsets-of-r-are-intervals, cor-continuous-image-of-an-interval-is-an-interval, def-continuity-real]
justified_by: []
aliases: [def-darboux-property]
landmark: true
short: "intermediate value property"
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
    - title: "Darboux's theorem (analysis) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux%27s_theorem_(analysis)"
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "Darboux property (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Darboux_property"
pipeline_run: null
---

## Definition

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$. Then $f$ has the **intermediate value property**, also
called the **Darboux property**, when

$$f[J] \ \text{is order-convex for every order-convex } J \subseteq I .$$

As everywhere in this library, "interval" is read as "order-convex"
([[thm-connected-subsets-of-r-are-intervals]] is what licenses the word;
[[def-interval]] records that the classification of the order-convex subsets of
$\mathbb{R}$ into the nine written forms is not proved here).

### The equivalent pointwise form

$f$ has the intermediate value property **if and only if**

> for all $a, b \in I$ with $a < b$ and every real $y$ with $f(a) \le y \le f(b)$
> or $f(b) \le y \le f(a)$, there is $c \in [a,b]$ with $f(c) = y$.

*From the displayed condition to the pointwise one.* Given $a < b$ in $I$, the
set $[a,b]$ is order-convex and contained in $I$ by order-convexity of $I$, so
$f[\,[a,b]\,]$ is order-convex; it contains $f(a)$ and $f(b)$, hence every $y$
between them, and such a $y$ is $f(c)$ for some $c \in [a,b]$.

*From the pointwise condition to the displayed one.* Let $J \subseteq I$ be
order-convex, let $u, v \in f[J]$ and let $u \le y \le v$. Write $u = f(a)$ and
$v = f(b)$ with $a, b \in J$. If $a = b$ then $u = v = y$ and $y \in f[J]$. If
$a < b$, the pointwise condition gives $c \in [a,b]$ with $f(c) = y$, and
$c \in J$ because $J$ is order-convex and $a, b \in J$; so $y \in f[J]$. If
$b < a$ the same argument applies with the roles of $a$ and $b$ exchanged, the
pointwise condition being stated symmetrically in the two orders. Hence $f[J]$
is order-convex.

Both forms are used below, and they are used interchangeably.

### Every continuous function on an interval has the property

If $f$ is continuous on $I$ ([[def-continuity-real]]) then $f[J]$ is
order-convex for every order-convex $J \subseteq I$
([[cor-continuous-image-of-an-interval-is-an-interval]], claim 1). So continuity
implies the intermediate value property.

**The converse is false**, and that is the whole reason the property is given a
name of its own: a function may take every intermediate value on every
subinterval and be continuous nowhere. The failure is recorded as
[[fs-intermediate-value-property-implies-continuity]].

**A monotone function with the intermediate value property is continuous.** This
is not a further theorem but a reading of
[[lem-monotone-with-interval-image-is-continuous]]: for a function satisfying
$f(x) \le f(y)$ whenever $x \le y$ on an order-convex $I$, order-convexity of
the single image $f[I]$ already forces continuity. So the pathologies live
entirely among the non-monotone functions.
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

### `lem-derivative-of-a-power`

````markdown
---
id: lem-derivative-of-a-power
kind: lemma
title: "For a natural $n \\ge 1$ the function $x \\mapsto x^{n}$ is differentiable everywhere with derivative $\\iota(n)\\,x^{\\,n-1}$; for $n = 0$ it is the constant $1$, with derivative $0$; for a natural $n \\ge 1$ the function $x \\mapsto x^{-n}$ is differentiable at every $x \\ne 0$ with derivative $-\\iota(n)\\,x^{-n-1}$; consequently every polynomial function is differentiable at every real, with the derivative computed term by term"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-derivative, thm-algebra-of-derivatives, def-integer-power, lem-power-laws, def-canonical-natural, thm-induction-principle, def-finite-sum, def-function-limit, def-limit-point-r, def-neighbourhood-r]
justified_by: []
aliases: [lem-power-rule]
landmark: true
short: "the power rule"
proof_strategy: induction
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
    - title: "Power rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Statement

Powers are those of [[def-integer-power]], and $\iota : \mathbb{N} \to
\mathbb{R}$ is the canonical natural of [[def-canonical-natural]], so that
$\iota(0) = 0$ and $\iota(m+1) = \iota(m) + 1$. Let $n \in \mathbb{N}$.

1. The function $p_0 : \mathbb{R} \to \mathbb{R}$, $p_0(x) = x^{0}$, is the
   constant function $1$, and it is differentiable at every $c \in \mathbb{R}$
   with $p_0'(c) = 0$ ([[def-derivative]]).
2. For $n \ge 1$ the function $p_n : \mathbb{R} \to \mathbb{R}$,
   $p_n(x) = x^{n}$, is differentiable at every $c \in \mathbb{R}$, and
   $$p_n'(c) \;=\; \iota(n)\,c^{\,n-1} .$$
3. For $n \ge 1$ put $A_0 := \{\, x \in \mathbb{R} : x \ne 0 \,\}$. The function
   $m_n : A_0 \to \mathbb{R}$, $m_n(x) = x^{-n}$, is differentiable at every
   $c \in A_0$ as a function on $A_0$, and
   $$m_n'(c) \;=\; -\,\iota(n)\,c^{\,-n-1} .$$
4. Let $a : \mathbb{N} \to \mathbb{R}$ with $a_j = 0$ for $j \ge n$, and let
   $P : \mathbb{R} \to \mathbb{R}$ be the polynomial function
   $P(x) = \sum_{j<n} a_j x^{j}$ ([[def-finite-sum]]). Then $P$ is
   differentiable at every $c \in \mathbb{R}$, and, defining $e : \mathbb{N}
   \to \mathbb{R}$ by $e_0 := 0$ and $e_j := \iota(j)\,a_j\,c^{\,j-1}$ for
   $j \ge 1$,
   $$P'(c) \;=\; \sum_{j<n} e_j .$$

**Claim 2 is stated for $n \ge 1$ and not for $n \ge 0$, and that is not
timidity.** At $n = 0$ its right-hand side reads $\iota(0)\,c^{-1}$, and
$c^{-1}$ is not defined at $c = 0$ ([[def-integer-power]]), so the formula is
not a statement about the whole line. Claim 1 is what covers $n = 0$, and it
says the derivative is $0$ there, which is what the informal reading
"$0 \cdot c^{-1}$" is reaching for. The same shift is why the term $e_0$ of
claim 4 is defined to be $0$ outright rather than by the formula.

## Facts & Assumptions

**Given:** A natural $n$, a real $c$, and the functions $p_n$, $m_n$ and $P$ of the statement.

[L1] Powers ([[def-integer-power]]): $a^{0} = 1$ and $a^{m+1} = a^{m}a$ for every $a \in \mathbb{R}$ and $m \in \mathbb{N}$; $a^{-m} := (a^{m})^{-1}$ for $a \ne 0$ and $m \ge 1$; and $0^{m} = 0$ for $m \ge 1$.

[L2] Canonical naturals ([[def-canonical-natural]]): $\iota(0) = 0$, $\iota(m+1) = \iota(m) + 1$, and hence $\iota(1) = 1$.

[L3] Algebra of derivatives ([[thm-algebra-of-derivatives]]): at a limit point $c$ of the common domain, sums, scalar multiples and products of functions differentiable at $c$ are differentiable at $c$ with the four stated formulas, and if the denominator is nonzero at $c$ then the quotient, restricted to the set where the denominator does not vanish, is differentiable at $c$ with the quotient formula; that restricted set has $c$ as a limit point.

[L4] Derivative and difference quotient ([[def-derivative]]): $f$ is differentiable at a limit point $c$ of its domain $D$ exactly when the difference quotient $x \mapsto (f(x)-f(c))/(x-c)$, a function on $D \setminus \{c\}$, has a limit at $c$, and $f'(c)$ is that limit. A constant function $h \equiv K$ on a set having $c$ as a limit point has $\lim_{x \to c} h(x) = K$: given a real $\varepsilon > 0$, any real $\delta > 0$ serves, since $|K - K| = 0 < \varepsilon$ ([[def-function-limit]]).

[L5] Induction principle on $\mathbb{N}$ ([[thm-induction-principle]]).

[L6] Finite sums ([[def-finite-sum]]): $\sum_{j<0} b_j = 0$ and $\sum_{j<m+1} b_j = \bigl(\sum_{j<m} b_j\bigr) + b_m$.

[L7] Integer exponent laws for a nonzero base ([[lem-power-laws]]): $a^{k} \ne 0$ for every $k \in \mathbb{N}$ when $a \ne 0$; and for integers $j, k$ one has $a^{j}a^{k} = a^{j+k}$, $(a^{j})^{k} = a^{jk}$ and $a^{-k} = (a^{k})^{-1}$.

[L8] Every real is a limit point of $\mathbb{R}$, punctured neighbourhoods in $\mathbb{R}$ being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

## Proof

**Proof technique:** induction.

1.1 **Base case, claim 2 at $n = 1$.** By [L1], $x^{1} = x^{0}x = 1 \cdot x = x$, so $p_1$ is the identity. Fix $c \in \mathbb{R}$; for every $x \ne c$ the difference quotient is $(x - c)/(x - c) = 1$, so it is the constant function $1$ on $\mathbb{R} \setminus \{c\}$, and by [L4] and [L8] its limit at $c$ is $1$. Since $\iota(1)c^{0} = 1 \cdot 1 = 1$ by [L1] and [L2], claim 2 holds at $n = 1$. [base, L1, L2, L4, L8]

1.2 **Inductive hypothesis.** Fix a natural $n \ge 1$ and assume that $p_n$ is differentiable at every $c \in \mathbb{R}$ with $p_n'(c) = \iota(n)c^{\,n-1}$. [ih]

1.3 **Claim 1.** By [L1] the function $p_0$ is the constant function $1$. Fix $c \in \mathbb{R}$; for every $x \ne c$ its difference quotient is $(1-1)/(x-c) = 0$, the constant function $0$ on $\mathbb{R}\setminus\{c\}$, whose limit at $c$ is $0$ by [L4] and [L8]. So $p_0$ is differentiable at every $c$ with $p_0'(c) = 0$. [L1, L4, L8]

2.1 **Successor step.** Let $c \in \mathbb{R}$. By [L1], $p_{n+1}(x) = x^{n+1} = x^{n}x = p_n(x)\,p_1(x)$ for every $x$. Both factors are differentiable at $c$, by step 1.2 and step 1.1, so the product rule of [L3] gives that $p_{n+1}$ is differentiable at $c$ with $p_{n+1}'(c) = p_n'(c)p_1(c) + p_n(c)p_1'(c) = \iota(n)c^{\,n-1}c + c^{n} \cdot 1$. Now $c^{\,n-1}c = c^{\,(n-1)+1} = c^{n}$ by [L1], so the right-hand side is $\iota(n)c^{n} + c^{n} = \bigl(\iota(n)+1\bigr)c^{n} = \iota(n+1)c^{n}$ by [L2]. [step 1.1, step 1.2, L1, L2, L3]

3.1 **Claim 2.** Steps 1.1 and 2.1 are the base case and the successor step of an induction over the naturals $n \ge 1$, so by [L5] the function $p_n$ is differentiable at every $c \in \mathbb{R}$ with $p_n'(c) = \iota(n)c^{\,n-1}$, for every natural $n \ge 1$. [step 1.1, step 2.1, L5]

4.1 **Claim 3.** Let $n \ge 1$. The set $\{\, x \in \mathbb{R} : p_n(x) \ne 0 \,\}$ is exactly $A_0$: a nonzero $x$ has $x^{n} \ne 0$ by [L7], and $0^{n} = 0$ by [L1]. Fix $c \in A_0$. The constant function $1$ on $\mathbb{R}$ is differentiable at $c$ with derivative $0$ by step 1.3, and $p_n$ is differentiable at $c$ with derivative $\iota(n)c^{\,n-1}$ by step 3.1, with $p_n(c) = c^{n} \ne 0$. So the quotient rule of [L3] applies: the function $x \mapsto 1/x^{n}$ on $A_0$, which by [L1] and [L7] is $m_n$, is differentiable at $c$ with derivative $\bigl(0 \cdot c^{n} - 1 \cdot \iota(n)c^{\,n-1}\bigr)/(c^{n})^{2} = -\iota(n)\,c^{\,n-1}\bigl(c^{\,2n}\bigr)^{-1} = -\iota(n)\,c^{\,n-1-2n} = -\iota(n)\,c^{\,-n-1}$, where $(c^{n})^{2} = c^{\,2n}$ and $c^{\,n-1}c^{\,-2n} = c^{\,-n-1}$ are [L7]. [step 1.3, step 3.1, L1, L3, L7]

4.2 **Claim 4, by a second induction on $n$.** Fix $c \in \mathbb{R}$ and the sequence $a$. At $n = 0$ the sum $P(x) = \sum_{j<0} a_j x^{j}$ is $0$ for every $x$ by [L6], so $P$ is the constant function $0$ and, as in step 1.3, $P'(c) = 0 = \sum_{j<0} e_j$. Suppose the claim holds at $n$, and let $P_{n+1}(x) := \sum_{j<n+1} a_j x^{j}$. By [L6], $P_{n+1}(x) = P_n(x) + a_n x^{n}$ for every $x$, where $P_n(x) = \sum_{j<n} a_j x^{j}$. The function $x \mapsto a_n x^{n}$ is differentiable at $c$ with derivative $e_n$: for $n = 0$ it is the constant $a_n$, of derivative $0 = e_0$, by step 1.3 and the scalar rule of [L3]; for $n \ge 1$ it is the scalar multiple $a_n p_n$, of derivative $a_n \iota(n)c^{\,n-1} = e_n$, by step 3.1 and the scalar rule of [L3]. The inductive hypothesis gives $P_n'(c) = \sum_{j<n} e_j$, so the sum rule of [L3] gives that $P_{n+1}$ is differentiable at $c$ with $P_{n+1}'(c) = \sum_{j<n} e_j + e_n = \sum_{j<n+1} e_j$ by [L6]. By [L5] claim 4 holds for every $n \in \mathbb{N}$. [step 1.3, step 3.1, L3, L5, L6]

5.1 All four claims are established: claim 1 by step 1.3, claim 2 by step 3.1, claim 3 by step 4.1 and claim 4 by step 4.2. [step 1.3, step 3.1, step 4.1, step 4.2, discharge-induction] ∎

## Remarks

- **Why the induction starts at $n = 1$ and not at $n = 0$.** The successor step multiplies by the identity, and the identity is $p_1$; starting at $n = 0$ would require the formula of claim 2 to hold at $n = 0$, which it does not, since $c^{-1}$ is undefined at $c = 0$. The two statements are therefore kept apart, and claim 1 is proved on its own from the definition. This is the same index care that [[def-canonical-natural]] records for families of reciprocals: $\mathbb{N}$ contains $0$, and a formula written for "$n$" is a claim about $n = 0$ unless it says otherwise.

- **The negative exponents cost nothing extra.** Claim 3 is the quotient rule of [[thm-algebra-of-derivatives]] applied with numerator the constant $1$, and the domain it produces, the set where $x^{n}$ does not vanish, is exactly $\mathbb{R} \setminus \{0\}$; no separate argument and no separate limit is needed. Rational exponents are a different matter, resting on [[thm-nth-roots-exist]], and are treated on the companion page rather than here.

- **Claim 4 is a statement about a finite sum, not about an infinite one.** Nothing here says anything about differentiating a series term by term; that is a separate question, needing hypotheses about convergence that this page does not have and does not assume.
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

### `thm-fermat-interior-extremum`

````markdown
---
id: thm-fermat-interior-extremum
kind: theorem
title: "Fermat's interior extremum theorem: if $f$ has a local extremum at a point $c$ interior to its domain and is differentiable at $c$, then $f'(c) = 0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, def-local-extremum, lem-sign-preservation-near-a-limit, def-function-limit, def-neighbourhood-r, def-interior-closure-boundary-r, def-limit-point-r, lem-of-sign-rules, def-ordered-field]
justified_by: []
forward_refs: [cex-fermat-fails-at-an-endpoint]
aliases: [thm-fermat-stationary-point, thm-interior-extremum]
landmark: true
short: "Fermat's interior extremum theorem"
proof_strategy: contradiction
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
    - title: "Fermat's theorem (stationary points) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fermat%27s_theorem_(stationary_points)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.8)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, Mean Value Theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be
**interior to $A$** ([[def-local-extremum]],
[[def-interior-closure-boundary-r]]). Suppose $f$ has a local extremum at $c$
([[def-local-extremum]]) and is differentiable at $c$ ([[def-derivative]]).
Then

$$f'(c) \;=\; 0 .$$

The symbol $f'(c)$ is meaningful under these hypotheses because an interior
point of $A$ is a limit point of $A$, which is proved in
[[def-local-extremum]].

**Interiority is a hypothesis and not a convenience.** At a point of $A$ that is
not interior, the argument below cannot place points of $A$ on both sides of
$c$, and the conclusion genuinely fails: the companion page exhibits a function
on $[0,1]$ attaining both its greatest and its least value at points where the
derivative is $1$.

**No converse is asserted.** A vanishing derivative does not produce an
extremum. The witness is the cubic of
[[fs-vanishing-derivative-forbids-strict-increase]], which has $f'(0) = 0$ and
neither a local maximum nor a local minimum at $0$; that failure is recorded in
the remarks of that item, not as an item of its own.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a point $c \in A$ interior to $A$, at which $f$ has a local extremum and is differentiable ([[def-local-extremum]], [[def-derivative]]).

[A1] $c$ is interior to $A$: there is a real $\varepsilon_A > 0$ with $N_{\varepsilon_A}(c) \subseteq A$; and such a $c$ is a limit point of $A$, so $f'(c)$ is defined ([[def-local-extremum]], [[def-interior-closure-boundary-r]], [[def-limit-point-r]]).

[A2] $f$ has a local extremum at $c$: there is a real $\rho > 0$ such that either $f(x) \le f(c)$ for every $x \in A \cap N_{\rho}(c)$, or $f(x) \ge f(c)$ for every $x \in A \cap N_{\rho}(c)$ ([[def-local-extremum]]).

[L1] Derivative ([[def-derivative]]): the difference quotient $q(x) := (f(x)-f(c))/(x-c)$ is a function on $A \setminus \{c\}$, the point $c$ is a limit point of $A \setminus \{c\}$, and $\lim_{x \to c} q(x) = f'(c)$ ([[def-function-limit]]). In particular $f(x) - f(c) = q(x)(x - c)$ for every $x \in A$ with $x \ne c$.

[L2] Sign preservation ([[lem-sign-preservation-near-a-limit]]): if $h$ is a function on a set $D$ having $c$ as a limit point and $\lim_{x \to c} h(x) = L$ with $L \ne 0$, then there is a real $\delta > 0$ such that every $x \in D$ with $0 < |x - c| < \delta$ satisfies $h(x) > L/2 > 0$ when $L > 0$, and $h(x) < L/2 < 0$ when $L < 0$.

[L3] Neighbourhoods ([[def-neighbourhood-r]]): $N_{\varepsilon}(c) = \{ y : |y - c| < \varepsilon \}$, and of finitely many positive reals the smallest is positive.

[L4] Order arithmetic ([[lem-of-sign-rules]], [[def-ordered-field]]): a product of two positive reals is positive, a product of a positive and a negative real is negative, and trichotomy, so $f'(c) \ne 0$ means $f'(c) > 0$ or $f'(c) < 0$, exclusively.

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $f'(c) \ne 0$; by trichotomy either $f'(c) > 0$ or $f'(c) < 0$. [assume-contra, L4]

1.2 Fix a real $\varepsilon_A > 0$ with $N_{\varepsilon_A}(c) \subseteq A$. [A1, choose]

1.3 Fix a real $\rho > 0$ as in [A2], so that on $A \cap N_{\rho}(c)$ the function $f$ never exceeds $f(c)$, or never falls below it. [A2, choose]

2.1 Apply [L2] to $h := q$ on the domain $D := A \setminus \{c\}$, of which $c$ is a limit point by [L1], with $L := f'(c) \ne 0$: fix a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $q(x) > f'(c)/2 > 0$ if $f'(c) > 0$, and $q(x) < f'(c)/2 < 0$ if $f'(c) < 0$. The clause $0 < |x-c|$ makes the two descriptions of the range of $x$, over $A$ and over $A \setminus \{c\}$, the same. [step 1.1, L1, L2, choose]

3.1 Put $\eta := \min\{\varepsilon_A,\ \rho,\ \delta\}$, a positive real, and set $x_{+} := c + \eta/2$ and $x_{-} := c - \eta/2$. Each satisfies $|x_{\pm} - c| = \eta/2 < \eta$, so each lies in $N_{\varepsilon_A}(c) \subseteq A$, each lies in $N_{\rho}(c)$, and each satisfies $0 < |x_{\pm} - c| < \delta$. In particular $x_{+}, x_{-} \in A \cap N_{\rho}(c)$ and both differ from $c$. [step 1.2, step 1.3, step 2.1, L3]

4.1 Suppose $f'(c) > 0$. By step 2.1, $q(x_{+}) > 0$ and $q(x_{-}) > 0$. Since $x_{+} - c = \eta/2 > 0$, [L1] and [L4] give $f(x_{+}) - f(c) = q(x_{+})(x_{+}-c) > 0$; since $x_{-} - c = -\eta/2 < 0$, they give $f(x_{-}) - f(c) = q(x_{-})(x_{-}-c) < 0$. So $f(x_{+}) > f(c)$ and $f(x_{-}) < f(c)$. [step 2.1, step 3.1, L1, L4]

4.2 Suppose instead $f'(c) < 0$. By step 2.1, $q(x_{+}) < 0$ and $q(x_{-}) < 0$. The same two products, with the signs of the quotients reversed, give $f(x_{+}) - f(c) < 0$ and $f(x_{-}) - f(c) > 0$. So $f(x_{-}) > f(c)$ and $f(x_{+}) < f(c)$. [step 2.1, step 3.1, L1, L4]

5.1 In both cases of step 1.1 there is a point of $A \cap N_{\rho}(c)$ at which $f$ takes a value strictly greater than $f(c)$, and a point of $A \cap N_{\rho}(c)$ at which it takes a value strictly smaller: the two points are $x_{+}$ and $x_{-}$ in one order or the other, and both lie in $A \cap N_{\rho}(c)$ by step 3.1. [step 3.1, step 4.1, step 4.2, L4]

6.1 By step 1.3 one of two things holds on $A \cap N_{\rho}(c)$: either no value exceeds $f(c)$, or none falls below it. Step 5.1 produces a value of each kind, so both alternatives fail, and [A2] guarantees that one of them holds. The assumption of step 1.1 is therefore untenable, and $f'(c) = 0$. [step 1.3, step 5.1, A2, discharge-contradiction] ∎

## Remarks

- **What the proof actually uses.** Only that the difference quotient keeps the sign of its limit near $c$, and that $c$ has points of $A$ on both sides of it arbitrarily close. The first is [[lem-sign-preservation-near-a-limit]]; the second is exactly what interiority buys, and it is where the hypothesis is spent. No continuity of $f$ away from $c$, and no hypothesis on $A$ beyond containing a neighbourhood of $c$, is needed.

- **The one-sided reading.** At a point $c$ with points of $A$ on one side only, the argument still gives half of the conclusion: if $f$ has a local maximum there and only points to the right, then $f'(c) \le 0$. This page does not state that refinement, because it does not use it, and the companion page's witness at an endpoint is the same observation seen from outside ([[cex-fermat-fails-at-an-endpoint]]).

- **A stationary point is not an extremum.** The converse of this theorem is false, and the standard witness, $x \mapsto x^{3}$ at $0$, is the same function that this page uses to refute a different plausible claim about vanishing derivatives.
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


## Selection reasons

- critical risk (9): 9 declared dependencies; 6 cited facts; boundary-sensitive language; induction, recursion, or minimality
- Wave 7 ai-generated statement seed

## Target item — `ex-the-first-dyadic-levels-of-the-urysohn-construction`

Normalized current SHA-256: `63f2745460020175c8ad89948b806cf59c210a4710f5bedea3ac0f07fa6cc6c0`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-the-first-dyadic-levels-of-the-urysohn-construction
kind: example
title: "The sets $U_0, U_1, U_{1/2}, U_{1/4}, U_{3/4}$ of the Urysohn construction computed for two disjoint closed subsets of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-urysohn-lemma, def-the-dyadic-rationals-of-the-unit-interval,
       lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function,
       lem-normality-via-shrinking, def-normal-and-t4-spaces,
       thm-metric-spaces-are-completely-normal, def-interval,
       lem-real-line-is-a-metric-space, thm-closure-characterisation-top]
justified_by: []
aliases: []
landmark: false
short: "dyadic levels computed by hand"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Example

Take $A := (-\infty,0]$ and $B := [1,\infty)$ in $\mathbb{R}$, disjoint closed
sets of the normal space $\mathbb{R}$ ([[thm-metric-spaces-are-completely-normal]],
[[def-interval]]). For $r$ a dyadic rational of $[0,1]$ with $r<1$
([[def-the-dyadic-rationals-of-the-unit-interval]]) put

$$U_r \;:=\; \Big(-\infty,\ \tfrac{1+r}{2}\Big), \qquad U_1 := \mathbb{R}.$$

These are open, and satisfy $\overline{U_r} \subseteq U_s$ for every $r<s$ in
$D$ and $U_1 = \mathbb{R}$, so $(U_r)_{r \in D}$ is a legitimate instance of
the family hypothesised in
[[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]] and could
arise from the construction inside [[thm-urysohn-lemma]] applied to $A,B$. In
particular:

$$U_0 = \big(-\infty,\ \tfrac12\big), \quad U_{1/4} = \big(-\infty,\ \tfrac58\big), \quad U_{1/2} = \big(-\infty,\ \tfrac34\big), \quad U_{3/4} = \big(-\infty,\ \tfrac78\big), \quad U_1 = \mathbb{R}.$$

## Facts & Assumptions

**Given:** $A = (-\infty,0]$, $B=[1,\infty)$ in $\mathbb{R}$, and $U_r := (-\infty, (1+r)/2)$ for dyadic $r<1$, $U_1 := \mathbb{R}$.

[L1] $\overline{(-\infty,c)} = (-\infty,c]$ for real $c$, and $(-\infty,c) \subseteq (-\infty,c')$ exactly when $c \le c'$. The closure identity is two lines from the cited items: $(-\infty,c]$ is closed, since its complement $(c,\infty)$ contains an interval $(x - r, x + r)$ around each of its points $x$ (take $r = x - c$), which is the open-set criterion of [[lem-real-line-is-a-metric-space]] claim 3; and $c$ lies in the closure of $(-\infty,c)$, since every interval $(c - r, c + r)$ with $r > 0$ meets it, so by [[thm-closure-characterisation-top]] claims 1 and 2 the closure of $(-\infty,c)$ is $(-\infty,c]$ exactly. The inclusion clause is immediate from [[def-interval]] and the order. ([[lem-real-line-is-a-metric-space]], [[thm-closure-characterisation-top]], [[def-interval]])

[L2] $A \subseteq U_0$: every $x \le 0$ satisfies $x < 1/2$.

## Verification

**Proof technique:** direct.

1.1 For dyadic $r<s<1$: $\overline{U_r} = \big(-\infty,\ (1+r)/2\big]$ by [L1], and $(1+r)/2 < (1+s)/2$ since $r<s$, so $\overline{U_r} \subseteq \big(-\infty,\ (1+s)/2\big) = U_s$. [given, L1, algebra]

1.2 For dyadic $r<1$: $\overline{U_r} = \big(-\infty,(1+r)/2\big]$, and $(1+r)/2 < 1$ since $r<1$, so $\overline{U_r} \subseteq (-\infty,1) \subseteq \mathbb{R} = U_1$. [given, L1, algebra]

1.3 $A \subseteq U_0$ by [L2]; and $B \subseteq \mathbb{R} \setminus U_r$ for every dyadic $r<1$, since $(1+r)/2 < 1 \le x$ for $x \in B$, so $x \notin U_r$. [given, L2, algebra]

2.1 By step 1.1 and step 1.2, $\overline{U_r} \subseteq U_s$ for every $r<s$ in $D$, and $U_1 = \mathbb{R}$; so $(U_r)_{r\in D}$ satisfies the hypotheses of [[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]], and $f(x) := \inf(\{r\in D : x \in U_r\}\cup\{1\})$ is continuous $\mathbb{R} \to [0,1]$. By step 1.3, $A \subseteq f^{-1}(\{0\})$ (every $r \ge 0$ works for $x\in A$, so $f(x) \le 0$, and $f \ge 0$ always) and $B \subseteq f^{-1}(\{1\})$ (no dyadic $r<1$ works for $x \in B$). [step 1.1, step 1.2, step 1.3] ∎

## Remarks

- **The five requested sets are read off the general formula.** $U_0, U_{1/4}, U_{1/2}, U_{3/4}$ are nested, each strictly inside the next by step 1.1, and $U_1 = \mathbb{R}$ is the point at which the family widens all at once, in line with the discussion in [[thm-urysohn-lemma]]'s own Remarks of why the recursion tracks $X \setminus B$ rather than $X$ until the very last step.

- **This is one legitimate family among many.** [[thm-urysohn-lemma]] never claims uniqueness, and the family here is not literally the output of the dependent-choice recursion in that item's proof — it is a hand-picked family satisfying the same two hypotheses, chosen because its members have closed forms.
````

## Wave 7 provenance row for the target

```json
{
  "id": "ex-the-first-dyadic-levels-of-the-urysohn-construction",
  "statement": "ai-generated",
  "proof": "ai-generated",
  "evidence": "trivial",
  "urls": [],
  "rationale": "Direct verification: closure of (-infinity,(1+r)/2) lies in the corresponding later interval whenever r<s, and the displayed levels follow by substitution.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-separation-urysohn.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-real-line-is-a-metric-space",
      "source_section": "Statement",
      "quote": "Define $d_{\\mathbb{R}} : \\mathbb{R} \\times \\mathbb{R} \\to \\mathbb{R}$ by\n$d_{\\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:\n\n1. $d_{\\mathbb{R}}$ is a metric on $\\mathbb{R}$ ([[def-metric-space]]); it is\n   called the **usual metric** of $\\mathbb{R}$.\n2. For $x \\in \\mathbb{R}$ and $r > 0$ the open ball is the bounded open interval\n   ([[def-interval]], [[def-metric-ball]])\n   $$B(x,r) = (x-r,\\ x+r),$$\n   and the closed ball is $\\bar B(x,r) = [x-r,\\ x+r]$.\n3. Consequently $U \\subseteq \\mathbb{R}$ is open in the metric topology of\n   $d_{\\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \\in U$\n   there is $r > 0$ with $(x-r, x+r) \\subseteq U$. This topology is called the\n   **usual topology** of $\\mathbb{R}$.\n4. $(\\mathbb{R}, d_{\\mathbb{R}})$ is not a bounded metric space\n   ([[def-metric-bounded-diameter]]): no ball contains $\\mathbb{R}$, so\n   $\\operatorname{diam}(\\mathbb{R})$ is not defined.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-closure-characterisation-top",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space, let $\\mathcal{B}$ be a basis for\n$\\mathcal{T}$ ([[def-topology-basis-subbasis]]), let $A \\subseteq X$ and let\n$x \\in X$. Closure, derived set and limit points are as in\n[[def-interior-closure-boundary-top]]. Then:\n\n1. The following four conditions are equivalent.\n   - (a) $x \\in \\overline{A}$;\n   - (b) $N \\cap A \\ne \\varnothing$ for every neighbourhood $N$ of $x$\n     ([[def-neighbourhood-top]]);\n   - (c) $U \\cap A \\ne \\varnothing$ for every open $U$ with $x \\in U$;\n   - (d) $B \\cap A \\ne \\varnothing$ for every $B \\in \\mathcal{B}$ with $x \\in B$.\n2. $\\overline{A}$ is closed, contains $A$, and is contained in every closed\n   $F \\subseteq X$ with $A \\subseteq F$; so it is the smallest closed superset of\n   $A$, and $A$ is closed if and only if $A = \\overline{A}$.\n3. $\\overline{A} = A \\cup A'$.\n\nClaim 2 is recorded here for reference and is discharged in\n[[def-interior-closure-boundary-top]], where it is what makes the definition of\n$\\overline{A}$ well posed; claims 1 and 3 are proved below. Claim 1 is the form in\nwhich the closure is used everywhere afterwards, and clause (d) is what makes a\nclosure computable from a basis rather than from all open sets.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "1.1",
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "For dyadic $r<s<1$: $\\overline{U_r} = \\big(-\\infty,\\ (1+r)/2\\big]$ by [L1], and $(1+r)/2 < (1+s)/2$ since $r<s$, so $\\overline{U_r} \\subseteq \\big(-\\infty,\\ (1+s)/2\\big) = U_s$. [given, L1, algebra]",
      "step": "1.1",
      "inputs": [
        "given",
        "L1",
        "algebra"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "For dyadic $r<1$: $\\overline{U_r} = \\big(-\\infty,(1+r)/2\\big]$, and $(1+r)/2 < 1$ since $r<1$, so $\\overline{U_r} \\subseteq (-\\infty,1) \\subseteq \\mathbb{R} = U_1$. [given, L1, algebra]",
      "step": "1.2",
      "inputs": [
        "given",
        "L1",
        "algebra"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "$A \\subseteq U_0$ by [L2]; and $B \\subseteq \\mathbb{R} \\setminus U_r$ for every dyadic $r<1$, since $(1+r)/2 < 1 \\le x$ for $x \\in B$, so $x \\notin U_r$. [given, L2, algebra]",
      "step": "1.3",
      "inputs": [
        "given",
        "L2",
        "algebra"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By step 1.1 and step 1.2, $\\overline{U_r} \\subseteq U_s$ for every $r<s$ in $D$, and $U_1 = \\mathbb{R}$; so $(U_r)_{r\\in D}$ satisfies the hypotheses of [[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]], and $f(x) := \\inf(\\{r\\in D : x \\in U_r\\}\\cup\\{1\\})$ is continuous $\\mathbb{R} \\to [0,1]$. By step 1.3, $A \\subseteq f^{-1}(\\{0\\})$ (every $r \\ge 0$ works for $x\\in A$, so $f(x) \\le 0$, and $f \\ge 0$ always) and $B \\subseteq f^{-1}(\\{1\\})$ (no dyadic $r<1$ works for $x \\in B$). [step 1.1, step 1.2, step 1.3] ∎",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "step 1.3",
        "1.1",
        "1.2",
        "1.3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement has no distinguished empty-set or empty-family case parameter or case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.3: zero or base-value case was inspected under the displayed definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: unit, singleton, or one-term case was inspected"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The statement has no distinguished degenerate or equality case parameter or case."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "statement and step 2.1: endpoint and codomain-boundary behavior was inspected"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The statement has no distinguished nonempty-choice obligations were checked against the stated hypothesis or explicit construction parameter or case."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (9): 9 declared dependencies; 6 cited facts; boundary-sensitive language; induction, recursion, or minimality, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: All dyadic pairs r < s in D (including r=0, s=1 and intermediate values) satisfy the required inclusion; the closure identity holds for all real endpoints; the function f separates A and B exactly as claimed. No counterexample or boundary failure was found. Checked surface: The title, the public claim, every numbered step (1.1, 1.2, 1.3, 2.1), and the Remarks were read and assessed. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/ex-the-first-dyadic-levels-of-the-urysohn-construction--b164ea6179666326.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-the-first-dyadic-levels-of-the-urysohn-construction",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-urysohn-lemma",
    "declared_target": "thm-urysohn-lemma",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-first-dyadic-levels-of-the-urysohn-construction",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-the-dyadic-rationals-of-the-unit-interval",
    "declared_target": "def-the-dyadic-rationals-of-the-unit-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-first-dyadic-levels-of-the-urysohn-construction",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "declared_target": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-first-dyadic-levels-of-the-urysohn-construction",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-normality-via-shrinking",
    "declared_target": "lem-normality-via-shrinking",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-first-dyadic-levels-of-the-urysohn-construction",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-normal-and-t4-spaces",
    "declared_target": "def-normal-and-t4-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-first-dyadic-levels-of-the-urysohn-construction",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-metric-spaces-are-completely-normal",
    "declared_target": "thm-metric-spaces-are-completely-normal",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-first-dyadic-levels-of-the-urysohn-construction",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "ex-the-first-dyadic-levels-of-the-urysohn-construction",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-real-line-is-a-metric-space",
    "declared_target": "lem-real-line-is-a-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-first-dyadic-levels-of-the-urysohn-construction",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-closure-characterisation-top",
    "declared_target": "thm-closure-characterisation-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
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

## Full text of every cited or declared item (9)

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

### `def-normal-and-t4-spaces`

````markdown
---
id: def-normal-and-t4-spaces
kind: definition
title: "Normal spaces and $T_4$ spaces, with the source disagreement over whether normality includes $T_1$ stated explicitly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-t0-and-t1-spaces, def-separated-sets,
       def-standard-topologies, def-neighbourhood-top]
justified_by: []
aliases: [def-normal-space, def-t4-space]
landmark: true
short: "normal space, $T_4$ space"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **normal** when any two disjoint closed sets can be separated by
  disjoint open sets: for all closed $A, B \subseteq X$ with
  $A \cap B = \varnothing$ there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).

Either of $A$, $B$ may be empty, and those cases are met by $U = \varnothing$ or
$V = \varnothing$ together with $X$; so the condition hides no nonemptiness
hypothesis. As with regularity, "disjoint open sets" may equivalently be read as
"disjoint open neighbourhoods of the two sets" ([[def-neighbourhood-top]]).

**Normality is the special case of complete normality at a disjoint closed
pair.** Disjoint closed sets are separated in the sense of
[[def-separated-sets]], since the closure of a closed set is itself; so a space
in which every *separated* pair can be put into disjoint open sets is in
particular normal. That stronger condition is defined later on this page, and the
implication is proved there.

**The convention fork, and this library's side of it.** Exactly as for
regularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.
Munkres builds it in; Kelley, Willard and Engelking do not. **This library takes
the second side**: *normal* names the separation condition alone, $T_4$ names
normal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.
The reason is again that the two halves are independent, and here the point is
sharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The
indiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,
its only closed sets being $\varnothing$ and the whole space, and it is not even
$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on
this page, the first as a false statement and both on the companion page.

## Remarks

- **Normality does not imply regularity**, and the failure is witnessed by
  Sierpinski space on the companion page, which is normal and not regular.
  Whether *regularity* implies normality is a question this page leaves open: any
  witness reachable from the material here would need cardinal arithmetic or the
  hereditary behaviour of regularity. This page's own prerequisites still supply
  neither: cardinal arithmetic and cofinality is now built, but *below* this
  one, and nothing here draws on it; the hereditary and productive behaviour of
  the separation axioms is developed later in the reading order. So nothing above
  asserts an answer and no false statement asserting
  one is planted here ([[rem-separation-axiom-conventions]]).

- **Normality is the axiom that behaves worst**, and the companion page shows
  one symptom: the deleted Tychonoff plank, a subspace of a product of two
  ordinal spaces each of which is $T_3$, is Hausdorff and not normal. Whether
  normality is inherited by subspaces or preserved by products is a question this
  page does not answer, and nothing here asserts an answer; the plank is
  presented only as a Hausdorff space that fails normality.

- **What the definition does *not* say.** It says nothing about separating a
  point from a closed set, because a point need not be closed; that is the
  content of the $T_1$ hypothesis in $T_4$, and the theorem two items below is
  where it is spent.
````

### `def-the-dyadic-rationals-of-the-unit-interval`

````markdown
---
id: def-the-dyadic-rationals-of-the-unit-interval
kind: definition
title: "The dyadic rationals of $[0,1]$, their finite levels $D_n$, and their density in $[0,1]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interval, def-integer-power, def-canonical-natural, def-nat-power,
       cor-archimedean-reciprocal, def-ordered-field, def-natural-numbers,
       def-nat-order, thm-induction-principle, thm-well-ordering-principle,
       lem-of-naturals-positive, lem-of-inverse-positive, def-countable,
       lem-nat-nonzero-is-successor]
justified_by: []
aliases: [def-dyadic-rationals]
landmark: true
short: "dyadic rationals of $[0,1]$"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Dyadic rational (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dyadic_rational"
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Throughout, $\iota$ is the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]),
and as is standard $\iota(k)$ is abbreviated to $k$ once no ambiguity results
([[cor-archimedean-reciprocal]]). For $m, n \in \mathbb{N}$, $m^n \in \mathbb{N}$ is the
natural-number power of [[def-nat-power]], distinct from but agreeing with the
real (integer) power $a^n$ of [[def-integer-power]] by that item's clause (d):
$\iota(m^n) = \iota(m)^n$. Writing $2$ for $\iota(2)$ as just agreed, this lets
$2^n$ be read as a natural number **or** as the real $\iota(2)^n$ interchangeably.

For $n \in \mathbb{N}$ put

$$D_n \;:=\; \Big\{\, \frac{k}{2^n} \;:\; k \in \mathbb{N},\ k \le 2^n \,\Big\} \;\subseteq\; [0,1],$$

the order $\le$ on the naturals $k$ and $2^n$ being that of [[def-nat-order]].
Each $D_n$ is
a finite subset of $[0,1]$ ([[def-interval]]) with $0, 1 \in D_n$ (the cases
$k=0$ and $k=2^n$); it has at most $2^n+1$ elements, so is finite in the sense
of [[def-countable]]. The **dyadic rationals of $[0,1]$** are

$$D \;:=\; \bigcup_{n \in \mathbb{N}} D_n \;\subseteq\; [0,1],$$

a countable union of finite sets. Each **level** $D_n$ is nested in the next:
if $k \le 2^n$ then $2k \le 2^{n+1}$ (multiplying the natural inequality by $2$),
and $\dfrac{k}{2^n} = \dfrac{2k}{2^{n+1}}$ in $\mathbb{R}$ (clearing the common
factor $\iota(2)$, licensed by [[def-ordered-field]]), so every element of $D_n$
is exhibited as an element of $D_{n+1}$; hence $D_0 \subseteq D_1 \subseteq
D_2 \subseteq \cdots$ and $D = \bigcup_n D_n$ is genuinely increasing, not
merely a union.

**The level decomposition, stated and discharged here because the recursion of
[[thm-urysohn-lemma]] consumes it.** For $n \in \mathbb{N}$,

$$D_{n+1} \;=\; D_n \,\cup\, \Big\{\, t_j := \frac{2j+1}{2^{n+1}} \;:\; j \in \mathbb{N},\ j < 2^n \,\Big\},$$

and the new points $t_j$ are pairwise distinct, none lies in $D_n$, and each
lies strictly between the $D_n$-consecutive pair $r_j := j/2^n$ and
$s_j := (j+1)/2^n$. *Strict betweenness:* $2j < 2j+1 < 2j+2$, and dividing by
the positive $2^{n+1}$ preserves strict order ([[def-ordered-field]]), so
$r_j = 2j/2^{n+1} < t_j < (2j+2)/2^{n+1} = s_j$. *Distinctness:* $j \mapsto
2j+1$ is injective. *Disjointness from $D_n$:* $t_j = k/2^n$ with
$k \le 2^n$ would give $2j+1 = 2k$ after clearing the positive factor
$1/2^{n+1}$ and applying injectivity of $\iota$; but $k \le j$ gives
$2k \le 2j < 2j+1$, and $k \ge j+1$ gives $2k \ge 2j+2 > 2j+1$, so no such $k$
exists. *The union is all of $D_{n+1}$:* given $k/2^{n+1}$ with
$k \le 2^{n+1}$, the set $\{\, i \in \mathbb{N} : 2i > k \,\}$ is nonempty
($2(k+1) = 2k+2 > k$), so by [[thm-well-ordering-principle]] it has a least
element $i_0$, and $i_0 \ge 1$ since $2 \cdot 0 = 0 \le k$; writing
$i_0 = j+1$ ([[lem-nat-nonzero-is-successor]]) gives $2j \le k < 2j+2$, so
$k = 2j$ or $k = 2j+1$. In the first case $k/2^{n+1} = j/2^n \in D_n$ (with
$j \le 2^n$ since $2j \le 2^{n+1}$); in the second it is $t_j$ (with $j < 2^n$
since $2j+1 \le 2^{n+1}$ forces $2j < 2^{n+1}$). Finally, **any two elements of
$D$ lie together in a common level**: one lies in some $D_m$ and the other in
some $D_{m'}$, and both then lie in $D_{\max(m,m')}$ by the nesting just
proved.

**$D$ is dense in $[0,1]$: for every $x \in [0,1]$ and every real
$\varepsilon > 0$ there is $r \in D$ with $|x - r| < \varepsilon$.** First, a
growth fact about natural-number powers, proved by induction on $n$
([[thm-induction-principle]]): $2^n \ge n+1$ for every $n \in \mathbb{N}$. At
$n=0$, $2^0 = 1 = 0+1$. If $2^n \ge n+1$, then $2^{n+1} = 2^n \cdot 2 = 2^n + 2^n
\ge (n+1) + (n+1) = 2n+2 \ge n+2 = (n+1)+1$, the middle inequality adding the
inductive hypothesis to itself and the last holding since $n \ge 0$; both steps
use only that the order of $\mathbb{N}$ is compatible with addition
([[def-nat-order]]). Transporting the inequality into $\mathbb{R}$ by the
order-preserving $\iota$ ([[lem-of-naturals-positive]]) gives $\iota(2^n) \ge
\iota(n+1) = \iota(n)+1$ for every $n$.

Now fix $x \in [0,1]$ and a real $\varepsilon > 0$. By
[[cor-archimedean-reciprocal]] fix a natural $m \ge 1$ with $1/m < \varepsilon$.
Put $n := m$; then $\iota(2^n) \ge \iota(n)+1 = \iota(m)+1 > \iota(m) > 0$, so by
[[lem-of-inverse-positive]] $0 < 1/2^n < 1/m < \varepsilon$. Consider
$S := \{\, k \in \mathbb{N} : x \le k/2^n \,\}$. It is nonempty, since $k=2^n$
satisfies $x \le 1 = 2^n/2^n$ because $x \in [0,1]$; so by
[[thm-well-ordering-principle]] $S$ has a least element $k_0$, and $k_0 \le 2^n$
because $2^n \in S$. If $k_0 = 0$ then $x \le 0$, and $x \ge 0$ since $x \in
[0,1]$, so $x = 0 = 0/2^n \in D_n \subseteq D$, within distance $0 < \varepsilon$
of itself. If $k_0 \ge 1$ then $k_0 - 1 \in \mathbb{N}$ and, by minimality of
$k_0$, $k_0 - 1 \notin S$, that is $x > (k_0-1)/2^n = k_0/2^n - 1/2^n$; combined
with $x \le k_0/2^n$ this gives $|x - k_0/2^n| \le 1/2^n < \varepsilon$, and
$r := k_0/2^n \in D_n \subseteq D$ since $k_0 \le 2^n$. Either way some $r \in D$
satisfies $|x-r| < \varepsilon$.

## Remarks

- **Every dyadic rational of $[0,1]$ other than $0$ and $1$ lies strictly
  between them**, since $0 < k/2^n < 1$ exactly when $0 < k < 2^n$.

- **The finite levels, not $D$ itself, are what the construction of Urysohn's
  lemma recurses on.** $D$ is presented here as the increasing union
  $\bigcup_n D_n$ precisely so that a family indexed by $D$ can be built one
  finite level at a time, each level adding only finitely many new indices to
  the one before.
````

### `lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function`

````markdown
---
id: lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function
kind: lemma
title: "If $(U_r)_{r \\in D}$ are open with $\\overline{U_r} \\subseteq U_s$ whenever $r < s$ and $U_1 = X$, then $x \\mapsto \\inf\\{ r \\in D : x \\in U_r \\}$ is a continuous map $X \\to [0,1]$, and no choice principle is used"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-the-dyadic-rationals-of-the-unit-interval, def-topological-space,
       def-continuous-map-top, thm-continuity-characterisations-top,
       def-topology-basis-subbasis, thm-basis-criterion, def-subspace-topology-top,
       def-interval, def-infimum, thm-infimum-property,
       def-interior-closure-boundary-top, lem-real-line-is-a-metric-space,
       def-metrizable-space]
justified_by: []
aliases: [lem-dyadic-scale-continuous]
landmark: true
short: "a dyadic open scale defines a continuous function"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Bernard Badzioch, MTH 427 Topology I, Notes 10"
      url: "https://www.math.buffalo.edu/~badzioch/MTH427/_static/mth427_notes_10.pdf"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$D$ be the dyadic rationals of $[0,1]$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).
Let $(U_r)_{r \in D}$ be a family of open subsets of $X$ such that

$$\overline{U_r} \subseteq U_s \quad \text{whenever } r < s \text{ in } D, \qquad \text{and} \qquad U_1 = X.$$

Then

$$f(x) \;:=\; \inf\big(\{\, r \in D : x \in U_r \,\} \cup \{1\}\big)$$

defines a map $f : X \to [0,1]$, and $f$ is continuous.

**No choice principle is used in passing from the family $(U_r)_{r \in D}$ to
$f$.** Every existential instantiation in the proof below is a single choice
from a single nonempty set of reals, never a simultaneous selection over an
infinite index; where the family $(U_r)_{r \in D}$ itself is later built by a
choice-consuming recursion, that cost is incurred in producing the family, not
in this lemma.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, the dyadic rationals $D$ of $[0,1]$, and a family $(U_r)_{r \in D}$ of open subsets of $X$ with $\overline{U_r} \subseteq U_s$ whenever $r < s$ in $D$, and $U_1 = X$.

[A1] Shrinking hypothesis: for $r < s$ in $D$, $\overline{U_r} \subseteq U_s$.

[A2] $U_1 = X$.

[L1] $D \subseteq [0,1]$, and $D$ is dense in $[0,1]$: for every $x \in [0,1]$ and every real $\varepsilon > 0$ there is $r \in D$ with $|x-r| < \varepsilon$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).

[L2] Infimum: a nonempty $S \subseteq \mathbb{R}$ bounded below has $\inf S \in \mathbb{R}$ ([[thm-infimum-property]]), which is a lower bound of $S$ and is $\ge$ every other lower bound of $S$ ([[def-infimum]]). Consequently, for a real $a$: (i) if some $s \in S$ has $s < a$ then $\inf S \le s < a$; (ii) if $\inf S < a$ then some $s \in S$ has $s < a$, since otherwise $a$ would be a lower bound of $S$ forcing $a \le \inf S$; (iii) if $r < \inf S$ then $r < s$ for every $s \in S$, since $\inf S$ is itself a lower bound of $S$.

[L3] The traces on $[0,1]$ of the order rays, $[0,a) := (-\infty,a) \cap [0,1]$ and $(a,1] := (a,\infty) \cap [0,1]$ for $a \in \mathbb{R}$, form a subbasis for the subspace topology of $[0,1]$ ([[def-subspace-topology-top]]). Indeed each ray $(-\infty,a)$, $(a,\infty)$ is a union of bounded open intervals of $\mathbb{R}$, hence open in the usual topology ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]), so the topology the rays generate is contained in the usual topology of $\mathbb{R}$; and every bounded open interval $(a,b)$ is the intersection $(a,\infty) \cap (-\infty,b)$ of two rays, so by [[thm-basis-criterion]] the finite intersections of the rays already form a basis containing every bounded open interval, hence the rays generate at least the usual topology. The two inclusions make the rays a subbasis for the usual topology of $\mathbb{R}$ ([[def-topology-basis-subbasis]]), and tracing a subbasis onto a subspace gives a subbasis for the subspace topology ([[def-subspace-topology-top]]).

[L4] Checking preimages of a fixed subbasis suffices for continuity ([[thm-continuity-characterisations-top]], clause (d)$\Leftrightarrow$(a)).

[L5] $A \subseteq \overline{A}$ for every $A \subseteq X$, and $X \setminus \overline{A}$ is open ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 For $x \in X$ put $S_x := \{\, r \in D : x \in U_r \,\} \cup \{1\}$; then $S_x$ is a nonempty subset of $[0,1]$, since $1 \in S_x$ and $D \subseteq [0,1]$ by [L1], so $S_x$ is bounded below by $0$ and above by $1$. [given, L1]

2.1 By step 1.1 and [L2], $\inf S_x$ exists in $\mathbb{R}$ for every $x \in X$, lies in $[0,1]$ since $0$ is a lower bound of $S_x$ and $\inf S_x \le 1$ as $1 \in S_x$; define $f : X \to [0,1]$ by $f(x) := \inf S_x$. [step 1.1, L2, construct]

3.1 For every $x \in X$ and real $a$ with $0 < a \le 1$: if there is $r \in D$ with $r < a$ and $x \in U_r$, then $r \in S_x$, so $f(x) \le r < a$ by [L2](i). [step 2.1, L2]

3.2 For every $x \in X$ and real $a$ with $0 < a \le 1$: if $f(x) < a$, then by [L2](ii) some $s \in S_x$ has $s < a \le 1$, so $s \ne 1$, hence $s \in D$ and $x \in U_s$, with $s < a$. [step 2.1, L2]

3.3 For real $a \le 0$: $\{x : f(x) < a\} = \varnothing$, since $f(x) \ge 0$ always by step 2.1; for real $a > 1$: $\{x : f(x) < a\} = X$, since $f(x) \le 1 < a$ always by step 2.1; both open. [step 2.1]

3.4 For every $x \in X$ and real $a$ with $0 \le a < 1$: if $f(x) > a$, put $x_0 := (a+f(x))/2 \in (a,f(x)) \subseteq [0,1]$ and $\delta := (f(x)-a)/2 > 0$; by [L1] fix $r_1 \in D$ with $|x_0 - r_1| < \delta$, so $r_1 \in (a,f(x))$. [step 2.1, L1, choose]

3.5 For every $x \in X$, real $a$ with $0 \le a < 1$, and $r \in D$ with $r > a$: if $x \notin \overline{U_r}$, then $r$ is a lower bound of $S_x$. Indeed, for $s = 1 \in S_x$: $r \le 1 = s$, since $r \in D \subseteq [0,1]$ by [L1]; for $s \in D$ with $x \in U_s$: if $s < r$ then [A1] gives $\overline{U_s} \subseteq U_r$, so $x \in U_s \subseteq \overline{U_s} \subseteq U_r \subseteq \overline{U_r}$ by [L5], contradicting $x \notin \overline{U_r}$, so $s \ge r$. [step 2.1, A1, L1, L5]

3.6 For real $a < 0$: $\{x : f(x) > a\} = X$, since $f(x) \ge 0 > a$ always by step 2.1; for real $a \ge 1$: $\{x : f(x) > a\} = \varnothing$, since $f(x) \le 1 \le a$ always. [step 2.1]

4.1 For real $a$ with $0 < a \le 1$: $\{\, x \in X : f(x) < a \,\} = \bigcup_{r \in D,\, r<a} U_r$, by steps 3.1 and 3.2 giving the two inclusions; a union of open sets, hence open. [step 3.1, step 3.2]

4.2 Continuing under the hypothesis of step 3.4: since $a < r_1$, by [L1] fix $r_2 \in D$ with $|(a+r_1)/2 - r_2| < (r_1-a)/2$, so $r_2 \in (a,r_1)$. [step 3.4, L1, choose]

4.3 Continuing under the hypothesis of step 3.5: since $r$ is a lower bound of $S_x$ by step 3.5, [L2] gives $r \le \inf S_x = f(x)$; combined with $r > a$, $f(x) > a$. [step 3.5, step 2.1, L2]

5.1 Continuing, with $r_1, r_2$ as in step 4.2: since $r_1 < f(x) = \inf S_x$, [L2](iii) gives $r_1 < s$ for every $s \in S_x$; in particular $r_1 \ne 1$, since $r_1 < f(x) \le 1$, so $r_1 \notin S_x$ forces $x \notin U_{r_1}$, as otherwise $r_1$ itself would lie in $S_x$. [step 3.4, step 2.1, L2]

6.1 Continuing: since $r_2 < r_1$ in $D$, [A1] gives $\overline{U_{r_2}} \subseteq U_{r_1}$; if $x \in \overline{U_{r_2}}$ then $x \in U_{r_1}$, contradicting step 5.1; so $x \notin \overline{U_{r_2}}$, and $r_2 > a$. [step 4.2, step 5.1, A1]

7.1 For real $a$ with $0 \le a < 1$: $\{\, x \in X : f(x) > a \,\} = \bigcup_{r \in D,\, r>a} \big(X \setminus \overline{U_r}\big)$. A point of the left side has, by steps 3.4 and 6.1, some $r = r_2 \in D$ with $r > a$ and $x \in X \setminus \overline{U_r}$; a point $x$ of the right side lies in $X \setminus \overline{U_r}$ for some such $r$, hence $x \notin \overline{U_r}$, giving $f(x) > a$ by step 4.3. Each $X \setminus \overline{U_r}$ is open by [L5], so the union is open. [step 6.1, step 4.3, L5]

8.1 By [L3], the sets $[0,a)$ and $(a,1]$, $a \in \mathbb{R}$, form a subbasis for the subspace topology of $[0,1]$; and $f^{-1}(\,[0,a)\,) = \{x : f(x) < a\}$, $f^{-1}(\,(a,1]\,) = \{x : f(x) > a\}$ are open in $X$ for every real $a$, by steps 4.1, 3.3, 7.1 and 3.6. [step 4.1, step 3.3, step 7.1, step 3.6, L3]

9.1 By [L4], since the preimage of every member of that subbasis is open, $f$ is continuous as a map $X \to [0,1]$; together with step 2.1 this proves the statement. [step 8.1, step 2.1, L4] ∎

## Remarks

- **Why the $\cup\{1\}$ in the definition of $f$.** It is what makes $S_x$ manifestly nonempty and bounded above by $1$ without first invoking $U_1 = X$; under that hypothesis $1 \in D$ already forces $1 \in S_x$ on its own (since every $x \in X = U_1$), so the union is not strictly necessary here, but it keeps well-definedness visible from the definition of $S_x$ alone, which matters when this lemma is quoted with a family for which the reader has not yet checked $U_1 = X$ line by line.

- **Where density of $D$ is spent, and only there.** The forward half of the "$f(x) > a$" characterisation (steps 3.4, 4.2, 5.1 and 6.1) is the only place two dyadic points strictly between $a$ and $f(x)$ are extracted; the "$f(x) < a$" half needs no density at all, only the defining property of an infimum. This asymmetry mirrors the asymmetry of the hypothesis: the shrinking clause $\overline{U_r} \subseteq U_s$ supplies a *closed* set inside an *open* one, and closing the resulting gap is what the second dyadic point is for.

- **The subbasis fact (Fact [L3]) has no home elsewhere in this library** at this point in the reading order: no earlier item states that the order rays generate the usual topology of $\mathbb{R}$, so it is derived here from the basis criterion rather than cited as a single fact.
````

### `lem-normality-via-shrinking`

````markdown
---
id: lem-normality-via-shrinking
kind: lemma
title: "A space is normal if and only if every closed $A$ inside an open $U$ admits an open $V$ with $A \\subseteq V \\subseteq \\overline{V} \\subseteq U$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normal-and-t4-spaces, def-interior-closure-boundary-top,
       thm-closure-characterisation-top, def-topological-space]
justified_by: []
aliases: [lem-shrinking-lemma-normal]
landmark: true
short: "normality by shrinking"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
closures as in [[def-interior-closure-boundary-top]]. The following two
conditions are equivalent.

- **(a)** $X$ is normal ([[def-normal-and-t4-spaces]]).
- **(b)** For every closed $A \subseteq X$ and every open $U$ with
  $A \subseteq U$ there is an open $V$ with
  $$A \subseteq V \subseteq \overline{V} \subseteq U .$$

In particular, in a normal space any two disjoint closed sets $A$ and $D$ admit
an open $V \supseteq A$ with $\overline{V} \cap D = \varnothing$: apply (b) to
$A$ and the open set $X \setminus D$. That corollary is the form in which
normality is used later on this page.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, a closed set $A$, an open set $U$ with $A \subseteq U$, and disjoint closed sets $A_0, B_0$.

[A1] $X$ is normal when disjoint closed sets admit disjoint open supersets ([[def-normal-and-t4-spaces]]).

[L1] $\overline{V}$ is the smallest closed superset of $V$: it is closed, contains $V$, and is contained in every closed set containing $V$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

[L2] A set is closed exactly when its complement is open, and complementation reverses inclusion ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume (a), and let $A$ be closed with $A \subseteq U$ and $U$ open; then $B := X \setminus U$ is closed by [L2] and $A \cap B = \varnothing$, so [A1] gives disjoint open $V \supseteq A$ and $W \supseteq B$. [A1, L2, assume-hyp]

1.2 Assume (b), and let $A_0, B_0$ be disjoint closed sets; then $U_0 := X \setminus B_0$ is open by [L2] and contains $A_0$, so (b) gives an open $V_0$ with $A_0 \subseteq V_0 \subseteq \overline{V_0} \subseteq U_0$. [L2, assume-hyp]

2.1 Under step 1.1: $V \subseteq X \setminus W$, since $V \cap W = \varnothing$, and $X \setminus W$ is closed by [L2], so $\overline{V} \subseteq X \setminus W$ by [L1]; and $X \setminus W \subseteq X \setminus B = U$ because $B \subseteq W$ and complementation reverses inclusion. [step 1.1, L1, L2]

2.2 Under step 1.2: put $W_0 := X \setminus \overline{V_0}$, which is open by [L1] and [L2]; then $V_0 \cap W_0 = \varnothing$ because $V_0 \subseteq \overline{V_0}$, and $B_0 = X \setminus U_0 \subseteq X \setminus \overline{V_0} = W_0$ because $\overline{V_0} \subseteq U_0$. [step 1.2, L1, L2]

3.1 Step 2.1 gives $A \subseteq V \subseteq \overline{V} \subseteq U$ with $V$ open, so (a) implies (b). [step 2.1]

3.2 Step 2.2 gives disjoint open $V_0 \supseteq A_0$ and $W_0 \supseteq B_0$, so (b) implies (a) by [A1]. [step 2.2, A1]

4.1 Steps 3.1 and 3.2 make (a) and (b) equivalent. [step 3.1, step 3.2]

5.1 For the final assertion, let $A$ and $D$ be disjoint closed sets in a normal $X$; then $X \setminus D$ is open by [L2] and contains $A$, so (b) gives an open $V$ with $A \subseteq V \subseteq \overline{V} \subseteq X \setminus D$, whence $\overline{V} \cap D = \varnothing$. [step 4.1, L2] ∎

## Remarks

- **The name.** Statement (b) is the *shrinking* form: an open set containing a closed set can be shrunk so that even its closure stays inside. It is the exact analogue for closed sets of the clause of [[lem-regularity-via-closed-neighbourhoods]] that shrinks an open set around a point.

- **Iterating (b) is what proves Urysohn's lemma**, by indexing a family of open sets by the dyadic rationals; that iteration is a dependent choice and is not performed on this page ([[rem-separation-axiom-conventions]]). The single application above is choice free.

- **Nothing here uses a separation axiom.** In particular $A$ and $D$ may be empty, and the corollary reads correctly in that case with $V = \varnothing$ or $V = X$ respectively.
````

### `lem-real-line-is-a-metric-space`

````markdown
---
id: lem-real-line-is-a-metric-space
kind: lemma
title: "The absolute value makes $\\mathbb{R}$ a metric space: $d(x,y) = |x-y|$ is a metric, its open balls are the intervals $(x-r, x+r)$, and it is unbounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-metric-ball, def-metric-topology, def-metric-bounded-diameter,
       def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-interval,
       thm-of-archimedean, def-complete-ordered-field, def-ordered-field,
       lem-of-add-order, lem-of-naturals-positive]
justified_by: []
aliases: [def-usual-metric-on-r]
landmark: true
short: "$(\\mathbb{R}, |x-y|)$"
proof_strategy: direct
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Real line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Real_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Define $d_{\mathbb{R}} : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by
$d_{\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:

1. $d_{\mathbb{R}}$ is a metric on $\mathbb{R}$ ([[def-metric-space]]); it is
   called the **usual metric** of $\mathbb{R}$.
2. For $x \in \mathbb{R}$ and $r > 0$ the open ball is the bounded open interval
   ([[def-interval]], [[def-metric-ball]])
   $$B(x,r) = (x-r,\ x+r),$$
   and the closed ball is $\bar B(x,r) = [x-r,\ x+r]$.
3. Consequently $U \subseteq \mathbb{R}$ is open in the metric topology of
   $d_{\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \in U$
   there is $r > 0$ with $(x-r, x+r) \subseteq U$. This topology is called the
   **usual topology** of $\mathbb{R}$.
4. $(\mathbb{R}, d_{\mathbb{R}})$ is not a bounded metric space
   ([[def-metric-bounded-diameter]]): no ball contains $\mathbb{R}$, so
   $\operatorname{diam}(\mathbb{R})$ is not defined.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]) with its absolute value ([[def-abs-value]]), and the function $d_{\mathbb{R}}(x,y) = |x-y|$; points $x, y, z \in \mathbb{R}$ and a real $r > 0$.

[L1] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and for $c > 0$ one has $|u| < c$ if and only if $-c < u < c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L2] Triangle inequality in an ordered field: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L3] Intervals: $(a,b) = \{t : a < t < b\}$ and $[a,b] = \{t : a \le t \le b\}$ ([[def-interval]]).

[L4] Archimedean property: for every $w \in \mathbb{R}$ there is a natural $n \ge 1$ with $w < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]); and $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]]).

[L5] Adding a constant to an inequality, in strict and nonstrict form: the strict form is [[lem-of-add-order]] and the nonstrict form is that together with the case of equality, the order being total ([[def-ordered-field]]).

[L6] Trichotomy: for reals $a,b$ exactly one of $a < b$, $a = b$, $b < a$ holds ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Separation (M1): $d_{\mathbb{R}}(x,y) = |x-y| = 0$ holds if and only if $x - y = 0$, that is if and only if $x = y$. [L1]

1.2 Symmetry (M2): $d_{\mathbb{R}}(y,x) = |y-x| = |-(x-y)| = |x-y| = d_{\mathbb{R}}(x,y)$. [L1]

1.3 Triangle inequality (M3): $d_{\mathbb{R}}(x,z) = |x - z| = |(x-y) + (y-z)| \le |x-y| + |y-z| = d_{\mathbb{R}}(x,y) + d_{\mathbb{R}}(y,z)$. [L2]

1.4 For $y \in \mathbb{R}$ and $r > 0$: $y \in B(x,r)$ means $|x - y| < r$, which by [L1] holds if and only if $-r < x - y < r$, and adding $y - r$ respectively $y + r$ to the two halves shows this is equivalent to $x - r < y < x + r$. [L1, L5]

1.5 For $y \in \mathbb{R}$ and $r > 0$: $y \in \bar B(x,r)$ means $|x-y| \le r$, which by the same equivalence read with $\le$ in place of $<$ holds if and only if $x - r \le y \le x + r$. [L1, L5]

1.6 Let $x_0 \in \mathbb{R}$ and $r > 0$ be arbitrary, and use [L4] to fix a natural $n \ge 1$ with $x_0 + r < n \cdot 1_{\mathbb{R}}$; write $w := n \cdot 1_{\mathbb{R}}$. [L4, choose]

2.1 By steps 1.1, 1.2 and 1.3 the function $d_{\mathbb{R}}$ satisfies (M1), (M2) and (M3), so it is a metric on $\mathbb{R}$, which is claim 1. [step 1.1, step 1.2, step 1.3]

2.2 By step 1.4 and [L3] the set $B(x,r)$ has exactly the elements of $(x-r,x+r)$, and by step 1.5 and [L3] the set $\bar B(x,r)$ has exactly the elements of $[x-r,x+r]$; this is claim 2. [step 1.4, step 1.5, L3]

2.3 Since $r > 0$ we have $x_0 < x_0 + r < w$, so $w - x_0 > r > 0$ and hence $d_{\mathbb{R}}(x_0, w) = |x_0 - w| = |-(w - x_0)| = w - x_0 > r$; therefore $w \notin B(x_0,r)$. [step 1.6, L1, L5, L6]

3.1 Substituting claim 2 into the definition of open in the metric topology gives claim 3: $U$ is open exactly when every $x \in U$ admits $r > 0$ with $(x-r,x+r) = B(x,r) \subseteq U$. [step 2.2]

4.1 Since $x_0$ and $r$ were arbitrary, step 2.3 exhibits for every ball $B(x_0,r)$ a real not in it, so no ball contains $\mathbb{R}$; hence $\mathbb{R}$ is not a bounded subset of itself and $\operatorname{diam}(\mathbb{R})$ is not defined, which is claim 4. [step 2.1, step 2.3] ∎

## Remarks

- **This is the metric every later ceiling rests on.** Every real-line example on the companion page, and every subspace of $\mathbb{R}$ used there, takes its metric from $d_{\mathbb{R}}$ through the subspace construction of [[def-isometry-and-metric-embedding]].
- **Unboundedness needs no Archimedean input, and no completeness either.** No ordered field is bounded under $d(u,v) = |u-v|$, and the reason is a single element rather than any cofinality property: given a centre $c$ and a radius $r > 0$, the element $c + r + 1$ satisfies $d(c,\, c + r + 1) = |{-(r+1)}| = r + 1 > r$, because $1 > 0$ and $r + 1 > 0$ ([[lem-of-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]]); so it lies outside $B(c,r)$ and no ball contains the field. Step 1.6 above chooses its witness with [[thm-of-archimedean]] instead, which is a convenience and not a necessity: it delivers a witness that is a canonical natural, and claim 4 needs no such thing. Claim 4 therefore holds verbatim in every ordered field with this $d$, Archimedean or not. Note also that a radius is an element of $\mathbb{R}$, so "a ball of infinite radius" is not something that can be written here.
- **The claim that $\operatorname{diam}(\mathbb{R})$ is "not defined" is a claim about the conventions of this development** ([[rem-sup-conventions]], [[def-metric-bounded-diameter]]): suprema here are real numbers and the extended real line, which is introduced on a later page, is not used for them, so an unbounded set has no diameter at all rather than a diameter $+\infty$.
````

### `thm-closure-characterisation-top`

````markdown
---
id: thm-closure-characterisation-top
kind: theorem
title: "A point lies in the closure of $A$ iff every basic neighbourhood of it meets $A$; the closure is the smallest closed superset and equals $A$ together with its derived set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-interior-closure-boundary-top, def-neighbourhood-top, def-topology-basis-subbasis, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "closure by neighbourhoods; $\\overline{A} = A \\cup A'$"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space, let $\mathcal{B}$ be a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]), let $A \subseteq X$ and let
$x \in X$. Closure, derived set and limit points are as in
[[def-interior-closure-boundary-top]]. Then:

1. The following four conditions are equivalent.
   - (a) $x \in \overline{A}$;
   - (b) $N \cap A \ne \varnothing$ for every neighbourhood $N$ of $x$
     ([[def-neighbourhood-top]]);
   - (c) $U \cap A \ne \varnothing$ for every open $U$ with $x \in U$;
   - (d) $B \cap A \ne \varnothing$ for every $B \in \mathcal{B}$ with $x \in B$.
2. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$; so it is the smallest closed superset of
   $A$, and $A$ is closed if and only if $A = \overline{A}$.
3. $\overline{A} = A \cup A'$.

Claim 2 is recorded here for reference and is discharged in
[[def-interior-closure-boundary-top]], where it is what makes the definition of
$\overline{A}$ well posed; claims 1 and 3 are proved below. Claim 1 is the form in
which the closure is used everywhere afterwards, and clause (d) is what makes a
closure computable from a basis rather than from all open sets.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, a basis $\mathcal{B}$ for $\mathcal{T}$, a subset $A \subseteq X$ and a point $x \in X$.

[A1] $\overline{A}$ is the intersection of all closed supersets of $A$; it is closed, contains $A$, and is contained in every closed superset of $A$ ([[def-interior-closure-boundary-top]]).

[A2] $x \in A'$ means that $N \cap (A \setminus \{x\}) \ne \varnothing$ for every neighbourhood $N$ of $x$ ([[def-interior-closure-boundary-top]]).

[L1] $N$ is a neighbourhood of $x$ when $x \in U \subseteq N$ for some open $U$; an open set containing $x$ is a neighbourhood of $x$ ([[def-neighbourhood-top]]).

[L2] $\mathcal{B}$ is a basis for $\mathcal{T}$: for every open $U$ and every $x \in U$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, and every member of $\mathcal{B}$ is open ([[def-topology-basis-subbasis]]).

[L3] A set is closed exactly when its complement is open ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (c): let $U$ be open with $x \in U$ and suppose $U \cap A = \varnothing$; then $X \setminus U$ is closed and contains $A$, so $\overline{A} \subseteq X \setminus U$ by [A1], whence $x \notin \overline{A}$, contradicting (a); therefore $U \cap A \ne \varnothing$. [A1, L3]

1.2 (c) implies (a): suppose $x \notin \overline{A}$; then $U := X \setminus \overline{A}$ is open by [A1] and [L3], contains $x$, and satisfies $U \cap A = \varnothing$ because $A \subseteq \overline{A}$, so (c) fails. [A1, L3]

1.3 (b) implies (c): an open $U$ containing $x$ is a neighbourhood of $x$, so (b) applies to it. [L1]

1.4 (c) implies (b): let $N$ be a neighbourhood of $x$ and fix open $U$ with $x \in U \subseteq N$; then $\varnothing \ne U \cap A \subseteq N \cap A$. [L1]

1.5 (c) implies (d): every $B \in \mathcal{B}$ with $x \in B$ is an open set containing $x$. [L2]

1.6 (d) implies (c): let $U$ be open with $x \in U$ and fix $B \in \mathcal{B}$ with $x \in B \subseteq U$; then $\varnothing \ne B \cap A \subseteq U \cap A$. [L2]

1.7 $A \subseteq \overline{A}$ and $\overline{A}$ is closed, and $\overline{A}$ is contained in every closed superset of $A$, which is claim 2; in particular $A$ is closed exactly when $A = \overline{A}$, since one inclusion always holds and the other says that $A$ is a closed superset of itself. [A1, L3]

2.1 By steps 1.1 to 1.6 the four conditions (a), (b), (c) and (d) are equivalent, which is claim 1: (a) and (c) are equivalent by steps 1.1 and 1.2, (b) and (c) by steps 1.3 and 1.4, and (c) and (d) by steps 1.5 and 1.6. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6]

3.1 $A \cup A' \subseteq \overline{A}$: points of $A$ lie in $\overline{A}$ by [A1], and if $x \in A'$ then every neighbourhood $N$ of $x$ meets $A \setminus \{x\}$ and hence meets $A$, so $x \in \overline{A}$ by condition (b). [step 2.1, A1, A2]

3.2 $\overline{A} \subseteq A \cup A'$: let $x \in \overline{A}$ and suppose $x \notin A$; then for every neighbourhood $N$ of $x$ condition (b) gives $N \cap A \ne \varnothing$, and $A = A \setminus \{x\}$ because $x \notin A$, so $N \cap (A \setminus \{x\}) \ne \varnothing$ and $x \in A'$. [step 2.1, A2]

4.1 Steps 3.1 and 3.2 give $\overline{A} = A \cup A'$, which is claim 3; with step 2.1 for claim 1 and step 1.7 for claim 2 the theorem is proved. [step 1.7, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Clause (d) is relative to a basis and clause (c) is not.** Different bases for one topology give different families of test sets in (d), and the theorem says all of them detect the same closure. This is why a closure in a metric space may be computed with balls alone, and a closure in $\mathbb{R}$ with bounded open intervals alone.

- **The empty set and the whole space.** $\overline{\varnothing} = \varnothing$, since $\varnothing$ is closed, and $\overline{X} = X$; claim 1 reads correctly in both cases, no neighbourhood meeting $\varnothing$ and every neighbourhood meeting $X$.

- **Nothing here assumes that singletons are closed.** In the indiscrete topology on a set with at least two points, $\overline{\{x\}} = X$ for every $x$, since the only neighbourhood of any point is $X$; claim 3 then says $A' = X \setminus \{x\}$ is contained in $\overline{\{x\}}$, which it is.
````

### `thm-metric-spaces-are-completely-normal`

````markdown
---
id: thm-metric-spaces-are-completely-normal
kind: theorem
title: "In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-completely-normal-and-perfectly-normal-spaces, def-normal-and-t4-spaces,
       def-separated-sets, def-metric-space, def-metric-topology, def-metric-ball,
       def-metrizable-space, def-metric-bounded-diameter, thm-metric-closure-characterisation,
       thm-metric-open-set-algebra, def-infimum, thm-infimum-property, def-max-min,
       lem-metric-nonnegativity, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "metric spaces are completely normal"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 32: Normal Spaces (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-32.pdf"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology
([[def-metric-topology]]), and let $A, B \subseteq X$ be separated
([[def-separated-sets]]). Then there are disjoint open sets $U \supseteq A$ and
$V \supseteq B$.

Consequently every metrizable space ([[def-metrizable-space]]) is **completely
normal**, and hence normal
([[def-completely-normal-and-perfectly-normal-spaces]],
[[def-normal-and-t4-spaces]]).

**No choice principle is used.** The two open sets are unions indexed by the
points of $A$ and of $B$, and the radius attached to a point is the number
$d(a,B)/2$, which is determined by $a$, by $B$ and by $d$; nothing is selected.

## Facts & Assumptions

**Given:** A metric space $(X,d)$ and separated sets $A, B \subseteq X$, so that $\overline{A} \cap B = A \cap \overline{B} = \varnothing$, with closures taken in the metric topology.

[A1] $A$ and $B$ are separated: $\overline{A} \cap B = \varnothing$ and $A \cap \overline{B} = \varnothing$ ([[def-separated-sets]]).

[L1] For nonempty $S \subseteq X$ and $x \in X$ the distance $d(x,S) = \inf\{\, d(x,s) : s \in S \,\}$ exists in $\mathbb{R}$, is a lower bound of that set, and satisfies $d(x,S) \ge 0$ ([[def-metric-bounded-diameter]], [[def-infimum]], [[thm-infimum-property]], [[lem-metric-nonnegativity]]).

[L2] For nonempty $S \subseteq X$, $\overline{S} = \{\, x \in X : d(x,S) = 0 \,\}$ ([[thm-metric-closure-characterisation]], claim 1).

[L3] Open balls are open and an arbitrary union of open sets is open; $\varnothing$ and $X$ are open ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[def-topological-space]]).

[L4] $x \in B(x,r)$ for every $r > 0$, and $y \in B(x,r)$ means $d(x,y) < r$ ([[def-metric-ball]]).

[L5] The triangle inequality $d(p,q) \le d(p,x) + d(x,q)$ and symmetry $d(p,q) = d(q,p)$ ([[def-metric-space]]).

[L6] A two-element set of reals has a maximum, which is one of the two and is at least the other ([[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 If $A = \varnothing$ then $U := \varnothing$ and $V := X$ are disjoint open sets with $A \subseteq U$ and $B \subseteq V$; if $B = \varnothing$ then $U := X$ and $V := \varnothing$ do the same. [L3, construct]

1.2 Assume from here that $A$ and $B$ are both nonempty, so that $d(x,A)$ and $d(x,B)$ are defined for every $x \in X$. [L1, assume-hyp]

2.1 For $a \in A$: $a \notin \overline{B}$ by [A1], so $d(a,B) \ne 0$ by [L2], and $d(a,B) \ge 0$ by [L1]; hence $r_a := d(a,B)/2 > 0$. Symmetrically $s_b := d(b,A)/2 > 0$ for $b \in B$. [step 1.2, A1, L1, L2]

3.1 Define $U := \bigcup_{a \in A} B(a, r_a)$ and $V := \bigcup_{b \in B} B(b, s_b)$; both are open by [L3], and $A \subseteq U$ and $B \subseteq V$ by [L4]. [step 2.1, L3, L4, construct]

4.1 Suppose $x \in U \cap V$; then there are $a \in A$ and $b \in B$ with $d(a,x) < r_a$ and $d(b,x) < s_b$. [step 3.1, L4, assume-hyp]

5.1 Under step 4.1: $d(a,b) \le d(a,x) + d(x,b) < r_a + s_b$, using symmetry for $d(x,b) = d(b,x)$. [step 4.1, L5]

5.2 Under step 4.1: $r_a + s_b \le 2\max\{r_a, s_b\} = \max\{d(a,B),\ d(b,A)\}$, by [L6] and the definitions of $r_a$ and $s_b$. [step 2.1, step 4.1, L6]

5.3 $d(a,B) \le d(a,b)$, since $b \in B$ makes $d(a,b)$ a member of the set whose infimum is $d(a,B)$; and $d(b,A) \le d(b,a) = d(a,b)$ for the same reason with the roles exchanged. [step 4.1, L1, L5]

6.1 By steps 5.1, 5.2 and 5.3, $d(a,b) < \max\{d(a,B), d(b,A)\} \le d(a,b)$, which is impossible; so no such $x$ exists and $U \cap V = \varnothing$. [step 5.1, step 5.2, step 5.3]

7.1 By steps 1.1, 3.1 and 6.1 the separated pair $A, B$ has disjoint open supersets in every case. [step 1.1, step 3.1, step 6.1]

8.1 If $(Y,\mathcal{T})$ is metrizable, fix a metric $d$ inducing $\mathcal{T}$; separation of two subsets is a statement about the closure operator, and the topological closure of a metrizable space is the metric closure of any inducing metric, so step 7.1 applies verbatim and $Y$ is completely normal, hence normal. [step 7.1, L2] ∎

## Remarks

- **The halving is what makes the balls miss each other.** Radii $d(a,B)$ and $d(b,A)$ without the factor $2$ would not do: two balls of those radii can meet, and the triangle inequality then gives no contradiction. With the halving the sum of the two radii is at most the larger of the two distances, which is at most $d(a,b)$.

- **Separated, not merely disjoint, is exactly the right hypothesis.** For disjoint sets the radii can fail to be positive: in $\mathbb{R}$ the disjoint sets $(0,1)$ and $[1,2)$ have $d(1, (0,1)) = 0$, and indeed they are not separated. What the hypothesis buys is positivity of every radius, and nothing else.

- **The corresponding statement for $\mathbb{R}$ needs no new proof.** $\mathbb{R}$ with its usual topology is metrizable by the usual metric ([[def-metrizable-space]]), so it is completely normal, and so is every $\mathbb{R}^n$ and every subspace of a metrizable space.
````

### `thm-urysohn-lemma`

````markdown
---
id: thm-urysohn-lemma
kind: theorem
title: "Urysohn's lemma, under the axiom of dependent choice: in a normal space two disjoint closed sets are separated by a continuous function into $[0,1]$, and conversely such a space is normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function,
       def-the-dyadic-rationals-of-the-unit-interval, def-normal-and-t4-spaces,
       lem-normality-via-shrinking, def-dependent-choice, lem-finite-choice,
       def-choice-function, def-continuous-map-top, thm-continuity-characterisations-top,
       def-interior-closure-boundary-top, def-interval, def-topological-space,
       def-subspace-topology-top, lem-real-line-is-a-metric-space]
justified_by: []
external_refs: [rem-urysohn-lemma-not-a-zf-theorem]
aliases: [thm-urysohn]
landmark: true
short: "Urysohn's lemma (DC)"
proof_strategy: constructive
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
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X, \mathcal{T})$ be a topological space.

1. If $X$ is normal ([[def-normal-and-t4-spaces]]) and $A, B \subseteq X$ are
   disjoint closed sets, there is a continuous $f : X \to [0,1]$
   ([[def-continuous-map-top]], [[def-interval]]) with
   $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$.
2. Conversely, if every pair of disjoint closed subsets of $X$ admits a
   continuous function into $[0,1]$ separating them in the sense of clause 1,
   then $X$ is normal. **This direction uses no choice principle.**

**Where the choice principle of clause 1 is spent, and why not less.** The
construction below builds, for each $n \in \mathbb{N}$, an assignment of an
open set to every dyadic rational of level $n$, extending the level-$(n-1)$
assignment; at each single level the finitely many new open sets are chosen at
once by [[lem-finite-choice]], a theorem of ZF, but stringing together
infinitely many such levels, each depending on the one before, is exactly the
situation dependent choice is for. The published
[[rem-urysohn-lemma-not-a-zf-theorem]] records, with its sources, that
$\mathrm{ZF}$ and even $\mathrm{ZF}$ together with the Axiom of Countable
Choice do not suffice, and that dependent choice does; nothing here claims
dependent choice is *necessary* for clause 1, only that the construction given
is carried out in $\mathrm{ZF} + \mathrm{DC}$.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and dependent choice.

[A1] $\mathrm{DC}$: for every nonempty set $P$, every relation $R \subseteq P \times P$ entire on $P$ (every $p \in P$ has some $q \in P$ with $p \mathbin{R} q$), and every $a \in P$, there is a sequence $(p_k)_{k \in \mathbb{N}}$ with $p_0 = a$ and $p_k \mathbin{R} p_{k+1}$ for every $k$ ([[def-dependent-choice]]).

[L1] Shrinking: if $X$ is normal, $C \subseteq X$ is closed and $O \subseteq X$ is open with $C \subseteq O$, then there is open $W$ with $C \subseteq W \subseteq \overline{W} \subseteq O$ ([[lem-normality-via-shrinking]]).

[L2] Finite choice: a function $F$ with domain a natural number $n$, all of whose values are nonempty sets, admits a choice function for the family $F[n]$ of its values ([[lem-finite-choice]], [[def-choice-function]]), a theorem of ZF.

[L3] The dyadic rationals $D = \bigcup_{n} D_n$ of $[0,1]$ are an increasing union of finite levels; for $n \in \mathbb{N}$, $D_{n+1} = D_n \cup \{\, t_j : 0 \le j < 2^n \,\}$, where $t_j$ is strictly between the $D_n$-consecutive pair $r_j := j/2^n$ and $s_j := (j+1)/2^n$, the $2^n$ points $t_j$ are pairwise distinct and disjoint from $D_n$, and every two elements of $D$ lie together in some common $D_n$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).

[L4] Chaining: if $V_0, \dots, V_k$ ($k \ge 0$) are subsets of $X$ with $\overline{V_i} \subseteq V_{i+1}$ for every $i < k$, then $\overline{V_0} \subseteq V_k$, since $V_i \subseteq \overline{V_i} \subseteq V_{i+1}$ for each $i$ ([[def-interior-closure-boundary-top]]) makes $\overline{V_0} \subseteq V_1 \subseteq V_2 \subseteq \cdots \subseteq V_k$ a chain of inclusions.

[L5] The generic construction: if $(U_r)_{r \in D}$ is a family of open subsets of $X$ with $\overline{U_r} \subseteq U_s$ whenever $r<s$ in $D$ and $U_1 = X$, then $g(x) := \inf(\{r \in D : x \in U_r\} \cup \{1\})$ is a continuous map $X \to [0,1]$ ([[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]]).

[L6] The order rays $(-\infty,\tfrac12)$ and $(\tfrac12,\infty)$ are open in the usual topology of $\mathbb R$ ([[lem-real-line-is-a-metric-space]], clause 3), so their traces $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in the subspace topology of $[0,1]$ ([[def-subspace-topology-top]], [[def-interval]]). They are disjoint and contain $0$ and $1$, respectively.

[L7] Preimages of open sets under a continuous map are open ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]]).

[L8] $A \subseteq \overline{A}$ for every $A \subseteq X$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** constructive.

1.1 Assume $X$ is normal and $A, B \subseteq X$ are disjoint closed sets (the hypothesis of clause 1). [assume-hyp]

1.2 Assume instead that every pair of disjoint closed subsets of $X$ admits a continuous function into $[0,1]$ separating them as in clause 1 (the hypothesis of clause 2). [assume-hyp]

2.1 Under step 1.1: $A \subseteq X \setminus B$, since $A \cap B = \varnothing$, and $X \setminus B$ is open since $B$ is closed; by [L1] applied to the closed set $A$ and the open set $X \setminus B$, fix open $\Phi_0(0)$ with $A \subseteq \Phi_0(0) \subseteq \overline{\Phi_0(0)} \subseteq X \setminus B$, and put $\Phi_0(1) := X \setminus B$, defining $\Phi_0 : D_0 \to \mathcal{T}$ on $D_0 = \{0,1\}$. [step 1.1, L1, choose, construct]

2.2 Under step 1.2: let $C, E \subseteq X$ be disjoint closed sets; fix a continuous $h : X \to [0,1]$ with $C \subseteq h^{-1}(\{0\})$ and $E \subseteq h^{-1}(\{1\})$. [step 1.2, choose]

3.1 Under step 1.1: $A \subseteq \Phi_0(0)$; $\overline{\Phi_0(0)} \subseteq \Phi_0(1)$; and $\Phi_0(1) = X \setminus B$. [step 2.1]

3.2 Under step 1.2, continuing: by [L6], $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in $[0,1]$, disjoint, with $0 \in [0,\tfrac12)$ and $1 \in (\tfrac12,1]$; put $O_1 := h^{-1}(\,[0,\tfrac12)\,)$ and $O_2 := h^{-1}(\,(\tfrac12,1]\,)$, open in $X$ by [L7]. [step 2.2, L6, L7]

4.1 Under step 1.1: for $n \in \mathbb{N}$, call $\Phi : D_n \to \mathcal{T}$ **admissible at level $n$** when (i) $\overline{\Phi(r)} \subseteq \Phi(s)$ for every $r < s$ in $D_n$; (ii) $A \subseteq \Phi(0)$; (iii) $\Phi(1) = X \setminus B$. Put $P := \{\, (n,\Phi) : n \in \mathbb{N},\ \Phi \text{ admissible at level } n \,\}$, and for $(n,\Phi), (n',\Phi') \in P$ say $(n,\Phi) \mathbin{R} (n',\Phi')$ when $n' = n+1$ and $\Phi'|_{D_n} = \Phi$. By step 3.1, $(0,\Phi_0) \in P$. [step 3.1, construct]

4.2 Under step 1.2: $C \subseteq O_1$, since $h \equiv 0 \in [0,\tfrac12)$ on $C$; $E \subseteq O_2$, since $h \equiv 1 \in (\tfrac12,1]$ on $E$; and $O_1 \cap O_2 = h^{-1}\big(\,[0,\tfrac12) \cap (\tfrac12,1]\,\big) = h^{-1}(\varnothing) = \varnothing$. [step 2.2, step 3.2, L6]

5.1 Under step 1.1: let $(n,\Phi) \in P$. For each $j$ with $0 \le j < 2^n$, with $r_j, s_j, t_j$ as in [L3]: since $r_j < s_j$ in $D_n$, admissibility (i) gives $\overline{\Phi(r_j)} \subseteq \Phi(s_j)$, so by [L1] the set of open $W$ with $\overline{\Phi(r_j)} \subseteq W \subseteq \overline{W} \subseteq \Phi(s_j)$ is nonempty. [step 4.1, L1, L3]

5.2 Under step 1.2: since $C, E$ were an arbitrary disjoint closed pair, step 4.2 exhibits disjoint open supersets for every such pair, so $X$ is normal by [[def-normal-and-t4-spaces]]; this is clause 2, and no step of it used [A1]. [step 4.2]

6.1 Under step 1.1, continuing under step 5.1: by [L2] applied to the function assigning, to each $j < 2^n$, the nonempty set of open $W$ with $\overline{\Phi(r_j)} \subseteq W \subseteq \overline{W} \subseteq \Phi(s_j)$, fix a simultaneous choice, giving open $W_j$ with $\overline{\Phi(r_j)} \subseteq W_j \subseteq \overline{W_j} \subseteq \Phi(s_j)$ for every $0 \le j < 2^n$. [step 5.1, L2, choose]

7.1 Under step 1.1: define $\Phi' : D_{n+1} \to \mathcal{T}$ by $\Phi'|_{D_n} := \Phi$ and $\Phi'(t_j) := W_j$ for $0 \le j < 2^n$; this is well defined since $D_{n+1} = D_n \cup \{t_j : 0 \le j < 2^n\}$ with the $t_j$ pairwise distinct and disjoint from $D_n$ by [L3]. Then $(n,\Phi) \mathbin{R} (n+1,\Phi')$. [step 6.1, L3, construct]

8.1 Under step 1.1, with $\Phi, \Phi'$ as in step 7.1: for the $D_{n+1}$-consecutive pair $(r_j, t_j)$: $\overline{\Phi'(r_j)} = \overline{\Phi(r_j)} \subseteq W_j = \Phi'(t_j)$ by step 6.1; for the pair $(t_j, s_j)$: $\overline{\Phi'(t_j)} = \overline{W_j} \subseteq \Phi(s_j) = \Phi'(s_j)$ by step 6.1. [step 7.1, step 6.1]

9.1 Under step 1.1: for $x < y$ in $D_{n+1}$, the finitely many elements of $D_{n+1} \cap [x,y]$, listed increasingly as $x = u_0 < u_1 < \cdots < u_k = y$, are $D_{n+1}$-consecutive at each step $u_i < u_{i+1}$, and each such pair is one of the pairs of step 8.1 (every $D_{n+1}$-consecutive pair has at least one member among the new points $t_j$, since a new point was inserted into every $D_n$-consecutive gap); so $\overline{\Phi'(u_i)} \subseteq \Phi'(u_{i+1})$ at each step, and [L4] gives $\overline{\Phi'(x)} = \overline{\Phi'(u_0)} \subseteq \Phi'(u_k) = \Phi'(y)$. [step 8.1, L3, L4]

10.1 Under step 1.1: $A \subseteq \Phi'(0) = \Phi(0)$, since $0 \in D_n$ is unaffected by the extension; $\Phi'(1) = \Phi(1) = X \setminus B$, since $1 \in D_n$ is likewise unaffected; with step 9.1 this is admissibility of $\Phi'$ at level $n+1$, so $(n+1,\Phi') \in P$. [step 7.1, step 9.1, L3]

11.1 Under step 1.1: by steps 5.1, 6.1, 7.1 and 10.1, every $(n,\Phi) \in P$ has some $(n+1,\Phi') \in P$ with $(n,\Phi) \mathbin{R} (n+1,\Phi')$; so $R$ is entire on $P$. [step 7.1, step 10.1]

12.1 Under step 1.1: $P$ is nonempty by step 4.1 and $R$ is entire on $P$ by step 11.1; by [A1] applied with $a := (0,\Phi_0)$, there is a sequence $\big((m_k,\Psi_k)\big)_{k \in \mathbb{N}}$ with $(m_0,\Psi_0) = (0,\Phi_0)$ and $(m_k,\Psi_k) \mathbin{R} (m_{k+1},\Psi_{k+1})$ for every $k$. [step 4.1, step 11.1, A1, construct]

13.1 Under step 1.1: since $(n,\Phi) \mathbin{R} (n',\Phi')$ forces $n' = n+1$, and $m_0 = 0$, induction on $k$ gives $m_k = k$ for every $k \in \mathbb{N}$; so each $\Psi_k : D_k \to \mathcal{T}$ is admissible at level $k$, and $\Psi_{k+1}|_{D_k} = \Psi_k$ for every $k$. [step 12.1]

14.1 Under step 1.1: for $r \in D$, fix $n$ with $r \in D_n$ [L3] and define $V_r := \Psi_n(r)$; by step 13.1, for $n \le n'$ with $r \in D_n$, $\Psi_{n'}(r) = \Psi_n(r)$ (chaining $\Psi_{n'}|_{D_n} = \Psi_n$ through the intermediate levels), so $V_r$ does not depend on the level $n$ chosen. [step 13.1, L3, construct]

15.1 Under step 1.1: for $r < s$ in $D$, fix $n$ with $r, s \in D_n$ [L3]; then $\overline{V_r} = \overline{\Psi_n(r)} \subseteq \Psi_n(s) = V_s$ by admissibility (i) of $\Psi_n$. Also $A \subseteq V_0$ and $V_1 = X \setminus B$, by admissibility (ii) and (iii) of $\Psi_n$ for any $n$. [step 14.1, step 13.1, L3]

16.1 Under step 1.1: define $U_r := V_r$ for $r \in D$ with $r < 1$, and $U_1 := X$. For $r < s$ in $D$: if $s < 1$, $\overline{U_r} = \overline{V_r} \subseteq V_s = U_s$ by step 15.1; if $s = 1$, $\overline{U_r} = \overline{V_r} \subseteq V_1 = X \setminus B \subseteq X = U_1$ by step 15.1. So $\overline{U_r} \subseteq U_s$ whenever $r < s$ in $D$, and $U_1 = X$. [step 15.1, construct]

17.1 Under step 1.1: by [L5] applied to $(U_r)_{r \in D}$ of step 16.1, $f(x) := \inf(\{r \in D : x \in U_r\} \cup \{1\})$ is a continuous map $X \to [0,1]$. [step 16.1, L5]

17.2 Under step 1.1: for $b \in B$ and $r \in D$ with $r < 1$: fix $n$ with $r \in D_n$ [L3]; since $1 \in D_n$ also, admissibility (i) of $\Psi_n$ applied to $r < 1$ gives $\overline{\Psi_n(r)} \subseteq \Psi_n(1) = X \setminus B$, that is $\overline{V_r} \subseteq X \setminus B$; since $V_r \subseteq \overline{V_r}$ by [L8] and $U_r = V_r$ by step 16.1, $U_r \cap B = \varnothing$, so $b \notin U_r$. [step 14.1, step 13.1, step 16.1, L3, L8]

18.1 Under step 1.1: for $a \in A$: $a \in V_0$ by step 15.1, and $U_0 = V_0$ by step 16.1 (as $0 < 1$), so $a \in U_0$ and $0 \in \{r \in D : a \in U_r\}$; hence $f(a) \le 0$, and $f(a) \ge 0$ since $f$ maps into $[0,1]$ by step 17.1, so $f(a) = 0$. [step 17.1, step 16.1, step 15.1]

18.2 Under step 1.1: for $b \in B$: by step 17.2, $b \notin U_r$ for every $r \in D$ with $r < 1$, and $b \in U_1 = X$ by step 16.1; so $\{r \in D : b \in U_r\} \cup \{1\} = \{1\}$, giving $f(b) = \inf\{1\} = 1$. [step 17.2, step 16.1]

19.1 Steps 17.1, 18.1 and 18.2 show that, under the hypothesis of step 1.1, $f$ is a continuous map $X \to [0,1]$ with $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$, which is clause 1. [step 17.1, step 18.1, step 18.2]

20.1 Steps 19.1 and 5.2 establish clauses 1 and 2 respectively. [step 19.1, step 5.2, discharge-construct] ∎

## Remarks

- **The lemma is stated for a normal space, not a $T_4$ space.** $T_1$ is used nowhere above; it is needed only to turn a *point* into a closed set, which is the extra step the next corollary spends. The published [[rem-urysohn-lemma-not-a-zf-theorem]] states the classical $T_4$ form; the form proved here is the more general one, and the two are not in tension — the $T_4$ form follows by adding the $T_1$ hypothesis, which is not used in this proof at all.

- **Only clause 1 costs a choice principle**, and it is spent at exactly one place: the single application of dependent choice in step 12.1, which strings together the countably many admissible levels built one finite step at a time in steps 5.1–10.1. Every other existential instantiation above (steps 2.1, 2.2 and 6.1) draws from a single nonempty set or, in step 6.1, from a finite family of them via [[lem-finite-choice]], and neither costs anything beyond ZF.

- **Why the construction tracks $X \setminus B$ rather than $X$ at $r=1$.** Recording $\Phi_n(1) := X \setminus B$ throughout the recursion, rather than $X$, is what makes admissibility clause (i) alone carry the whole $B$-avoidance property: since $1 \in D_n$ for every $n$, clause (i) applied to any $r<1$ already gives $\overline{\Phi_n(r)} \subseteq \Phi_n(1) = X \setminus B$, with no separate bookkeeping. Only at the very end, in step 16.1, is the top value widened from $X \setminus B$ to $X$, which is exactly what [[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]] requires.
````


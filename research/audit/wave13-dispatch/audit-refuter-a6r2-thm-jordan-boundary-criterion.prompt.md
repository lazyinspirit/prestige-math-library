# Audit proof-refuter brief — Wave 13, A6

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

- critical risk (10): 10 declared dependencies; 10 cited facts; biconditional / both-direction claim; boundary-sensitive language
- top-20 manifest-edge consumer (10 outgoing relationships)

## Target item — `thm-jordan-boundary-criterion`

Normalized current SHA-256: `8205f9b267307bfd4179f1959968046f45266dcd1d8b5b1532d2f2173e0c7375`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-jordan-boundary-criterion
kind: theorem
title: "A bounded set in $\\mathbb{R}^m$ is Jordan measurable iff its boundary is null, equivalently of content zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-jordan-content-and-indicator-integrability, thm-lebesgue-criterion-in-rn, def-metric-interior-closure-boundary, thm-metric-closure-characterisation, def-metric-topology, def-metric-bounded-diameter, thm-heine-borel-rn, lem-compact-null-iff-content-zero-in-rn, def-null-and-content-zero-in-rn, def-jordan-inner-and-outer-content]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

A metric-bounded set $E\subseteq\mathbb R^m$ is Jordan measurable if and only
if its boundary $\partial E$ is null, equivalently has content zero.

## Facts & Assumptions

**Given:** Metric-bounded $E$ in the sense of [[def-metric-bounded-diameter]].

[L1] If $Q$ is a nondegenerate rectangle with $\overline E\subseteq\operatorname{int}Q$, then the relative-domain indicator $1_E:Q\to\mathbb R$ is discontinuous exactly at the ambient boundary $\partial E$. At a boundary point every sufficiently small ambient ball lies in $Q$ and meets both $E$ and its ambient complement, while away from the boundary the indicator is locally constant ([[def-metric-interior-closure-boundary]]).

[L2] Indicator integrability is Jordan measurability ([[thm-jordan-content-and-indicator-integrability]]), and integrability is equivalent to a null discontinuity set ([[thm-lebesgue-criterion-in-rn]]).

[L3] The boundary is closed: it is the intersection of the closed set $\overline E$ with the complement of the open set $\operatorname{int}E$ ([[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]], [[def-metric-topology]]). By [[def-jordan-inner-and-outer-content]], metric boundedness places $E$ in a closed bounding rectangle $Q$. Since $Q$ is closed and contains $E$, the smallest-closed-superset property gives $\partial E\subseteq\overline E\subseteq Q$. Thus $\partial E$ is closed and bounded, hence compact by [[thm-heine-borel-rn]], and compact nullity is equivalent to content zero ([[lem-compact-null-iff-content-zero-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], choose a closed bounding rectangle $Q_0$ for $E$ and enlarge every coordinate interval by a fixed positive margin to obtain a nondegenerate rectangle $Q$ with $\overline E\subseteq Q_0\subseteq\operatorname{int}Q$. By [L1] and [L2], $E$ is Jordan measurable exactly when $\partial E$ is null. [L1, L2, L3, given, choose]

1.2 By [L3], nullity of this compact boundary is equivalent to content zero.   [L3, given]

2.1 Combining the equivalences proves the criterion.   [step 1.1, step 1.2, given] ∎
````

## Wave 13 provenance row

```json
{
  "id": "thm-jordan-boundary-criterion",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_jordansets.html"
  ],
  "rationale": "Lebl Proposition 10.5.1 exactly supports that a bounded subset of R^n is Jordan measurable iff its ambient boundary is null. The added equivalence with content zero and the relative-domain indicator proof on an enlarged rectangle are local adaptations licensed by the internal compact-null/content-zero lemma and the cited boundary, compactness, and integrability interfaces.",
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
      "source": "def-metric-interior-closure-boundary",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \\subseteq X$ and let\n$x \\in X$. Balls are as in [[def-metric-ball]] and open sets as in\n[[def-metric-topology]]; recall that a real $r$ written as a radius is always\n$> 0$.\n\n- $x$ is an **interior point** of $A$ if $B(x,r) \\subseteq A$ for some $r$. The\n  set of interior points is the **interior** $\\operatorname{int}(A)$.\n- $x$ is an **adherent point** of $A$ if $B(x,r) \\cap A \\ne \\emptyset$ for every\n  $r$. The set of adherent points is the **closure** $\\overline{A}$.\n- $x$ is a **limit point** (accumulation point) of $A$ if\n  $B(x,r) \\cap (A \\setminus \\{x\\}) \\ne \\emptyset$ for every $r$. The set of limit\n  points is the **derived set** $A'$.\n- $x$ is an **isolated point** of $A$ if $x \\in A$ and $B(x,r) \\cap A = \\{x\\}$\n  for some $r$.\n- The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus \\operatorname{int}(A)$.\n- $A$ is **dense** in $X$ if $\\overline{A} = X$.\n\n**The interior is open, and it is the largest open subset of $A$.** If\n$x \\in \\operatorname{int}(A)$, fix $r$ with $B(x,r) \\subseteq A$; the ball\n$B(x,r)$ is itself open ([[thm-metric-open-set-algebra]]), so every\n$y \\in B(x,r)$ has some $s$ with $B(y,s) \\subseteq B(x,r) \\subseteq A$, which\nputs $y$ in $\\operatorname{int}(A)$. Hence $B(x,r) \\subseteq \\operatorname{int}(A)$\nand $\\operatorname{int}(A)$ is open. It is contained in $A$, since\n$x \\in B(x,r) \\subseteq A$ for an interior point $x$; and if $V \\subseteq A$ is\nopen then every $v \\in V$ has a ball inside $V \\subseteq A$, so\n$V \\subseteq \\operatorname{int}(A)$.\n\n**Two descriptions of the boundary agree.** $x \\in \\partial A$ says that every\nball around $x$ meets $A$ and that no ball around $x$ is contained in $A$; the\nsecond half says exactly that every ball around $x$ meets $X \\setminus A$. So\n\n$$\\partial A = \\{\\, x \\in X : B(x,r) \\cap A \\ne \\emptyset \\text{ and } B(x,r) \\cap (X \\setminus A) \\ne \\emptyset \\text{ for every } r \\,\\},$$\n\nfrom which $\\partial A = \\partial(X \\setminus A)$ is immediate.\n\n**Elementary containments, straight from the definitions.** $A \\subseteq \\overline{A}$,\nbecause $x \\in A$ lies in every $B(x,r) \\cap A$; $A' \\subseteq \\overline{A}$,\nbecause a ball meeting $A \\setminus \\{x\\}$ meets $A$; and\n$\\operatorname{int}(A) \\subseteq A \\subseteq \\overline{A}$. A point of $A$ is\neither isolated in $A$ or a limit point of $A$, and not both, according to\nwhether some ball meets $A$ only in $x$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-jordan-content-and-indicator-integrability",
      "source_section": "Statement",
      "quote": "A metric-bounded set $E\\subseteq\\mathbb R^m$ is Jordan measurable if and only\nif its indicator $1_E$ is Riemann integrable on a fixed nondegenerate bounding\nrectangle $Q$. In that case\n$$\\int_Q1_E=\\operatorname{cont}(E).$$",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-lebesgue-criterion-in-rn",
      "source_section": "Statement",
      "quote": "A bounded real function on a closed nondegenerate rectangle in $\\mathbb R^m$, $m\\ge1$, is Riemann integrable if and only if its discontinuity set is null.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-metric-interior-closure-boundary",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \\subseteq X$ and let\n$x \\in X$. Balls are as in [[def-metric-ball]] and open sets as in\n[[def-metric-topology]]; recall that a real $r$ written as a radius is always\n$> 0$.\n\n- $x$ is an **interior point** of $A$ if $B(x,r) \\subseteq A$ for some $r$. The\n  set of interior points is the **interior** $\\operatorname{int}(A)$.\n- $x$ is an **adherent point** of $A$ if $B(x,r) \\cap A \\ne \\emptyset$ for every\n  $r$. The set of adherent points is the **closure** $\\overline{A}$.\n- $x$ is a **limit point** (accumulation point) of $A$ if\n  $B(x,r) \\cap (A \\setminus \\{x\\}) \\ne \\emptyset$ for every $r$. The set of limit\n  points is the **derived set** $A'$.\n- $x$ is an **isolated point** of $A$ if $x \\in A$ and $B(x,r) \\cap A = \\{x\\}$\n  for some $r$.\n- The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus \\operatorname{int}(A)$.\n- $A$ is **dense** in $X$ if $\\overline{A} = X$.\n\n**The interior is open, and it is the largest open subset of $A$.** If\n$x \\in \\operatorname{int}(A)$, fix $r$ with $B(x,r) \\subseteq A$; the ball\n$B(x,r)$ is itself open ([[thm-metric-open-set-algebra]]), so every\n$y \\in B(x,r)$ has some $s$ with $B(y,s) \\subseteq B(x,r) \\subseteq A$, which\nputs $y$ in $\\operatorname{int}(A)$. Hence $B(x,r) \\subseteq \\operatorname{int}(A)$\nand $\\operatorname{int}(A)$ is open. It is contained in $A$, since\n$x \\in B(x,r) \\subseteq A$ for an interior point $x$; and if $V \\subseteq A$ is\nopen then every $v \\in V$ has a ball inside $V \\subseteq A$, so\n$V \\subseteq \\operatorname{int}(A)$.\n\n**Two descriptions of the boundary agree.** $x \\in \\partial A$ says that every\nball around $x$ meets $A$ and that no ball around $x$ is contained in $A$; the\nsecond half says exactly that every ball around $x$ meets $X \\setminus A$. So\n\n$$\\partial A = \\{\\, x \\in X : B(x,r) \\cap A \\ne \\emptyset \\text{ and } B(x,r) \\cap (X \\setminus A) \\ne \\emptyset \\text{ for every } r \\,\\},$$\n\nfrom which $\\partial A = \\partial(X \\setminus A)$ is immediate.\n\n**Elementary containments, straight from the definitions.** $A \\subseteq \\overline{A}$,\nbecause $x \\in A$ lies in every $B(x,r) \\cap A$; $A' \\subseteq \\overline{A}$,\nbecause a ball meeting $A \\setminus \\{x\\}$ meets $A$; and\n$\\operatorname{int}(A) \\subseteq A \\subseteq \\overline{A}$. A point of $A$ is\neither isolated in $A$ or a limit point of $A$, and not both, according to\nwhether some ball meets $A$ only in $x$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-metric-closure-characterisation",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \\subseteq X$,\nwith closure, derived set and limit points as in\n[[def-metric-interior-closure-boundary]]. Then:\n\n1. If $A \\ne \\emptyset$, then $\\overline{A} = \\{\\, x \\in X : d(x,A) = 0 \\,\\}$,\n   where $d(x,A)$ is the distance from a point to a nonempty set\n   ([[def-metric-bounded-diameter]]).\n2. $\\overline{A} = A \\cup A'$.\n3. $\\overline{A}$ is closed, contains $A$, and is contained in every closed\n   $F \\subseteq X$ with $A \\subseteq F$. So $\\overline{A}$ is the smallest closed\n   superset of $A$, and $A$ is closed if and only if $A = \\overline{A}$.\n\nClaims 2 and 3 hold for every $A$, the empty set included: $\\overline{\\emptyset}$\nis empty because no ball meets $\\emptyset$, and $\\emptyset$ is closed because $X$\nis open ([[def-metric-topology]]). Claim 1 carries the hypothesis $A \\ne \\emptyset$\nbecause $d(x,A)$ is defined only for nonempty $A$\n([[def-metric-bounded-diameter]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-metric-topology",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]).\n\nA subset $U \\subseteq X$ is **open in $(X,d)$** if for every $x \\in U$ there is a\nreal $r > 0$ with $B(x,r) \\subseteq U$ ([[def-metric-ball]]). A subset\n$F \\subseteq X$ is **closed in $(X,d)$** if its complement $X \\setminus F$ is\nopen.\n\nThe collection\n\n$$\\mathcal{T}_d := \\{\\, U \\subseteq X : U \\text{ is open in } (X,d) \\,\\}$$\n\nof all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$\nthat is both open and closed is called **clopen**.\n\n**Two sets are open for trivial reasons.** $\\emptyset$ is open, because the\ndefining condition quantifies over no points; and $X$ is open, because\n$B(x,r) \\subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and\n$\\emptyset$ are also closed, and both are clopen.\n\n**A neighbourhood of a point $x$** is any open set containing $x$. The condition\nabove therefore reads: $U$ is open exactly when every point of $U$ has a ball\naround it inside $U$, and it is the balls alone that have to be tested.\n\n**The metric, not the set, determines $\\mathcal{T}_d$.** Two metrics on the same\nset may have different metric topologies, and two different metrics may have the\nsame one; the systematic comparison is [[def-equivalent-metrics]].",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-jordan-inner-and-outer-content",
      "source_section": "Definition",
      "quote": "For bounded $E\\subseteq\\mathbb R^m$, in the metric sense of [[def-metric-bounded-diameter]], its **Jordan outer content** is the infimum of $\\sum_{r<q}\\operatorname{vol}(R_r)$ over finite axis-parallel rectangle covers of $E$. Its **Jordan inner content** is the supremum of the same sums over finite families of rectangles contained in $E$ whose interiors are pairwise disjoint.\n\nMetric boundedness always supplies a nondegenerate bounding rectangle. For\nnonempty $E$, choose $x_0\\in\\mathbb R^m$ and $r>0$ with\n$E\\subseteq B(x_0,r)$. Since\n$|x_j-(x_0)_j|\\le d_\\infty(x,x_0)\\le d_2(x,x_0)<r$ for every coordinate\n([[lem-metrics-on-rn]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, [[def-metric-ball]]), the nondegenerate box\n$\\prod_{j<m}[(x_0)_j-r,(x_0)_j+r]$ contains $E$. The empty set lies in\nany fixed nondegenerate rectangle.\n\nThus the outer family is nonempty and the same bounding rectangle bounds the\ninner sums; the empty family gives inner sum $0$. Refining all listed\nendpoints into one grid and splitting the nested finite sums shows every\ninscribed sum is at most every covering sum\n([[def-multidimensional-grid-partition]], [[lem-finite-sum-laws]]).\nCompleteness therefore supplies finite real extrema\n([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]],\n[[lem-sup-unique]]).\n\nThe set is **Jordan measurable** when the contents agree, and their common value is its **Jordan content**. The empty set and every degenerate rectangle have content $0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-heine-borel-rn",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $\\mathbb{R}^n$ be the set of functions\n$n \\to \\mathbb{R}$ and let $d_2$ be the Euclidean metric on it\n([[lem-metrics-on-rn]]). Then:\n\n1. **Closed boxes are compact.** For reals $a_k \\le b_k$ $(k < n)$ the box\n   $Q = \\{\\, x \\in \\mathbb{R}^n : a_k \\le x_k \\le b_k \\text{ for every } k < n \\,\\}$\n   is a compact subset of $(\\mathbb{R}^n, d_2)$ ([[def-metric-compactness]]).\n2. **Heine-Borel.** A subset $K \\subseteq \\mathbb{R}^n$ is a compact subset of\n   $(\\mathbb{R}^n, d_2)$ if and only if $K$ is closed in $\\mathbb{R}^n$\n   ([[def-metric-topology]]) and bounded\n   ([[def-metric-bounded-diameter]]).\n3. **The real line.** A subset $K \\subseteq \\mathbb{R}$ is a compact subset of\n   $(\\mathbb{R}, d_{\\mathbb{R}})$, the usual metric $d_{\\mathbb{R}}(x,y) = |x-y|$\n   ([[lem-real-line-is-a-metric-space]]), if and only if $K$ is closed in\n   $\\mathbb{R}$ and bounded.\n\n**No choice principle is used.** The bisection below halves one coordinate at a\ntime and takes the **left** half whenever the left half still fails to be finitely\ncovered, the right half otherwise: a rule with two outcomes, decided by a\nproperty of the box, not a selection. That is the whole reason the theorem is\navailable in ZF, while the general \"complete and totally bounded implies compact\"\n([[thm-complete-and-totally-bounded-implies-compact]]) is not.\n\nThe hypothesis $n \\ge 1$ is inherited from [[lem-metrics-on-rn]], which defines\n$\\mathbb{R}^n$ and its metrics only there; the last remark below records what\nhappens at $n = 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-compact-null-iff-content-zero-in-rn",
      "source_section": "Statement",
      "quote": "A compact subset of $\\mathbb R^m$ is null if and only if it has content zero.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "By [L3], choose a closed bounding rectangle $Q_0$ for $E$ and enlarge every coordinate interval by a fixed positive margin to obtain a nondegenerate rectangle $Q$ with $\\overline E\\subseteq Q_0\\subseteq\\operatorname{int}Q$. By [L1] and [L2], $E$ is Jordan measurable exactly when $\\partial E$ is null.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "L3",
        "given",
        "choose"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "By [L3], nullity of this compact boundary is equivalent to content zero.  ",
      "step": "1.2",
      "inputs": [
        "L3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Combining the equivalences proves the criterion.  ",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-jordan-boundary-criterion: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: A metric-bounded set $E\\subseteq\\mathbb R^m$ is Jordan measurable if and only if its boundary $\\partial E$ is null, equivalently has content zero."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-jordan-boundary-criterion: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: A metric-bounded set $E\\subseteq\\mathbb R^m$ is Jordan measurable if and only if its boundary $\\partial E$ is null, equivalently has content zero."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-jordan-boundary-criterion: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: A metric-bounded set $E\\subseteq\\mathbb R^m$ is Jordan measurable if and only if its boundary $\\partial E$ is null, equivalently has content zero."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-jordan-boundary-criterion: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: A metric-bounded set $E\\subseteq\\mathbb R^m$ is Jordan measurable if and only if its boundary $\\partial E$ is null, equivalently has content zero."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.2: the proof explicitly treats the endpoint, boundary, or radial-limit behaviour used by the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: [L3] supplies a closed bounding rectangle before the proof chooses and enlarges it by a fixed positive margin."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Statement and steps 1.1 and 2.1: the forward implication follows through the indicator-integrability and compact-boundary equivalences."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Statement and steps 1.1 and 2.1: the reverse implication follows through the same checked equivalences in reverse."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-jordan-boundary-criterion",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-jordan-content-and-indicator-integrability",
    "declared_target": "thm-jordan-content-and-indicator-integrability",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-boundary-criterion",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-lebesgue-criterion-in-rn",
    "declared_target": "thm-lebesgue-criterion-in-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-boundary-criterion",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-metric-interior-closure-boundary",
    "declared_target": "def-metric-interior-closure-boundary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-boundary-criterion",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-metric-closure-characterisation",
    "declared_target": "thm-metric-closure-characterisation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-boundary-criterion",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-metric-topology",
    "declared_target": "def-metric-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-boundary-criterion",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-metric-bounded-diameter",
    "declared_target": "def-metric-bounded-diameter",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-boundary-criterion",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-heine-borel-rn",
    "declared_target": "thm-heine-borel-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-boundary-criterion",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "lem-compact-null-iff-content-zero-in-rn",
    "declared_target": "lem-compact-null-iff-content-zero-in-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-boundary-criterion",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-null-and-content-zero-in-rn",
    "declared_target": "def-null-and-content-zero-in-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-jordan-boundary-criterion",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-jordan-inner-and-outer-content",
    "declared_target": "def-jordan-inner-and-outer-content",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (10)

### `def-jordan-inner-and-outer-content`

````markdown
---
id: def-jordan-inner-and-outer-content
kind: definition
title: "Jordan inner and outer content and Jordan measurable bounded sets in $\\mathbb{R}^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-rectangle-and-volume, def-multidimensional-grid-partition, def-finite-sum, lem-finite-sum-laws, def-metric-bounded-diameter, def-metric-ball, lem-metrics-on-rn, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-complete-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
pipeline_run: null
---

## Definition

For bounded $E\subseteq\mathbb R^m$, in the metric sense of [[def-metric-bounded-diameter]], its **Jordan outer content** is the infimum of $\sum_{r<q}\operatorname{vol}(R_r)$ over finite axis-parallel rectangle covers of $E$. Its **Jordan inner content** is the supremum of the same sums over finite families of rectangles contained in $E$ whose interiors are pairwise disjoint.

Metric boundedness always supplies a nondegenerate bounding rectangle. For
nonempty $E$, choose $x_0\in\mathbb R^m$ and $r>0$ with
$E\subseteq B(x_0,r)$. Since
$|x_j-(x_0)_j|\le d_\infty(x,x_0)\le d_2(x,x_0)<r$ for every coordinate
([[lem-metrics-on-rn]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, [[def-metric-ball]]), the nondegenerate box
$\prod_{j<m}[(x_0)_j-r,(x_0)_j+r]$ contains $E$. The empty set lies in
any fixed nondegenerate rectangle.

Thus the outer family is nonempty and the same bounding rectangle bounds the
inner sums; the empty family gives inner sum $0$. Refining all listed
endpoints into one grid and splitting the nested finite sums shows every
inscribed sum is at most every covering sum
([[def-multidimensional-grid-partition]], [[lem-finite-sum-laws]]).
Completeness therefore supplies finite real extrema
([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]],
[[lem-sup-unique]]).

The set is **Jordan measurable** when the contents agree, and their common value is its **Jordan content**. The empty set and every degenerate rectangle have content $0$.
````

### `def-metric-bounded-diameter`

````markdown
---
id: def-metric-bounded-diameter
kind: definition
title: "Bounded subset, diameter, distance from a point to a set, and distance between two sets in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-ball, def-bounded-set, def-infimum,
       thm-infimum-property, lem-sup-unique, def-complete-ordered-field,
       lem-metric-nonnegativity, rem-sup-conventions, lem-of-add-order,
       def-ordered-field]
justified_by: []
aliases: [def-metric-diameter, def-distance-to-set]
landmark: false
short: "bounded, $\\operatorname{diam}$, $d(x,A)$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Bounded set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bounded_set"
    - title: "Diameter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Diameter"
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let
$A, B \subseteq X$.

**Bounded subset.** $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$
and a real $r > 0$ with $A \subseteq B(x_0, r)$ ([[def-metric-ball]]). The space
$(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself.

**Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and
bounded, and put

$$D(A) := \{\, d(a,b) : a, b \in A \,\} \subseteq \mathbb{R}.$$

Then $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and
$r$ with $A \subseteq B(x_0,r)$, every $a, b \in A$ satisfy
$d(a,b) \le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry
([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]],
[[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$
([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\mathbb{R}$ by
the least-upper-bound property ([[def-complete-ordered-field]]), and that bound
is unique ([[lem-sup-unique]]). Define

$$\operatorname{diam}(A) := \sup D(A).$$

**Distance from a point to a set, for nonempty $A$ only.** Let $x \in X$ and let
$A$ be nonempty, and put $E(x,A) := \{\, d(x,a) : a \in A \,\}$. Then $E(x,A)$ is
nonempty and bounded below by $0$, since a metric is nonnegative
([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower
bound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]].
Define

$$d(x,A) := \inf E(x,A).$$

**Distance between two sets, for nonempty $A$ and $B$ only.** Put
$E(A,B) := \{\, d(a,b) : a \in A,\ b \in B \,\}$, again nonempty and bounded
below by $0$, and define

$$d(A,B) := \inf E(A,B).$$

**Every one of the three scope restrictions is load bearing.** In this library
$\sup$ and $\inf$ denote real numbers and are written only after existence has
been established; the extended real line is introduced on a later page and is
not used for the suprema and infima taken here, and no convention
$\sup \emptyset = -\infty$ is in force in this development
([[rem-sup-conventions]]). Accordingly:

- $\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and**
  bounded. It is not defined for $A = \emptyset$, and it is not defined, not even
  as an infinite value, for an unbounded $A$.
- $d(x,A)$ is defined exactly when $A \ne \emptyset$, and $d(A,B)$ exactly when
  both $A$ and $B$ are nonempty. No boundedness is needed for these two, because
  $0$ is always a lower bound.

## Remarks

- **Diameter and the distance functions are nonnegative.** For nonempty bounded
  $A$ and any $a \in A$ we have $0 = d(a,a) \in D(A)$, so
  $\operatorname{diam}(A) \ge 0$; and $d(x,A) \ge 0$, $d(A,B) \ge 0$ because $0$
  is a lower bound of the sets they are infima of
  ([[lem-metric-nonnegativity]], [[def-infimum]]).
- **$d(A,B)$ is not a metric on the nonempty subsets of $X$.** It is symmetric
  and vanishes on $A = B$, but two distinct disjoint sets can be at distance $0$,
  so the separation axiom (M1) of [[def-metric-space]] fails; the witness is on
  the companion page. The letter $d$ is reused for three different functions
  here, the metric, the point-to-set distance and the set-to-set distance, only
  because the arguments make the intended one unambiguous.
- **$d(x,A)$ is the special case $d(\{x\},A)$**, since
  $E(\{x\},A) = E(x,A)$, and the two infima therefore agree by uniqueness
  ([[lem-sup-unique]]).
````

### `def-metric-interior-closure-boundary`

````markdown
---
id: def-metric-interior-closure-boundary
kind: definition
title: "Interior, closure, boundary, limit point, isolated point and dense subset of a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-topology, def-metric-ball, thm-metric-open-set-algebra, def-metric-space]
justified_by: []
aliases: [def-closure, def-interior, def-boundary, def-limit-point, def-dense]
landmark: true
short: "$\\operatorname{int} A$, $\\overline{A}$, $\\partial A$"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ and let
$x \in X$. Balls are as in [[def-metric-ball]] and open sets as in
[[def-metric-topology]]; recall that a real $r$ written as a radius is always
$> 0$.

- $x$ is an **interior point** of $A$ if $B(x,r) \subseteq A$ for some $r$. The
  set of interior points is the **interior** $\operatorname{int}(A)$.
- $x$ is an **adherent point** of $A$ if $B(x,r) \cap A \ne \emptyset$ for every
  $r$. The set of adherent points is the **closure** $\overline{A}$.
- $x$ is a **limit point** (accumulation point) of $A$ if
  $B(x,r) \cap (A \setminus \{x\}) \ne \emptyset$ for every $r$. The set of limit
  points is the **derived set** $A'$.
- $x$ is an **isolated point** of $A$ if $x \in A$ and $B(x,r) \cap A = \{x\}$
  for some $r$.
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus \operatorname{int}(A)$.
- $A$ is **dense** in $X$ if $\overline{A} = X$.

**The interior is open, and it is the largest open subset of $A$.** If
$x \in \operatorname{int}(A)$, fix $r$ with $B(x,r) \subseteq A$; the ball
$B(x,r)$ is itself open ([[thm-metric-open-set-algebra]]), so every
$y \in B(x,r)$ has some $s$ with $B(y,s) \subseteq B(x,r) \subseteq A$, which
puts $y$ in $\operatorname{int}(A)$. Hence $B(x,r) \subseteq \operatorname{int}(A)$
and $\operatorname{int}(A)$ is open. It is contained in $A$, since
$x \in B(x,r) \subseteq A$ for an interior point $x$; and if $V \subseteq A$ is
open then every $v \in V$ has a ball inside $V \subseteq A$, so
$V \subseteq \operatorname{int}(A)$.

**Two descriptions of the boundary agree.** $x \in \partial A$ says that every
ball around $x$ meets $A$ and that no ball around $x$ is contained in $A$; the
second half says exactly that every ball around $x$ meets $X \setminus A$. So

$$\partial A = \{\, x \in X : B(x,r) \cap A \ne \emptyset \text{ and } B(x,r) \cap (X \setminus A) \ne \emptyset \text{ for every } r \,\},$$

from which $\partial A = \partial(X \setminus A)$ is immediate.

**Elementary containments, straight from the definitions.** $A \subseteq \overline{A}$,
because $x \in A$ lies in every $B(x,r) \cap A$; $A' \subseteq \overline{A}$,
because a ball meeting $A \setminus \{x\}$ meets $A$; and
$\operatorname{int}(A) \subseteq A \subseteq \overline{A}$. A point of $A$ is
either isolated in $A$ or a limit point of $A$, and not both, according to
whether some ball meets $A$ only in $x$.

## Remarks

- **The closure is defined here by adherent points and by nothing else.** That it
  is closed, that it is the smallest closed set containing $A$, that for nonempty
  $A$ it is $\{x : d(x,A) = 0\}$, and that it consists of the limits of sequences
  from $A$, are theorems ([[thm-metric-closure-characterisation]],
  [[thm-metric-sequential-closure]]) and are proved from this definition.
- **Limit point of a set is not the same notion as subsequential limit of a
  sequence** ([[def-subsequential-limit]]), which this library deliberately keeps
  under a different name: the constant sequence $x_k = 0$ has $0$ as a
  subsequential limit, while its set of values $\{0\}$ has no limit point at all.
- **Dense is relative to the ambient space**, and the ambient space is part of
  the data: $A$ is dense in $X$ when $\overline{A} = X$, with $\overline{A}$
  computed in $(X,d)$. The same $A$ inside a larger space is a different
  question.
````

### `def-metric-topology`

````markdown
---
id: def-metric-topology
kind: definition
title: "The metric topology: a set is open when every one of its points has a ball around it inside the set; closed means open complement"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-ball, def-metric-space]
justified_by: []
aliases: [def-open-set-metric, def-closed-set-metric]
landmark: true
short: "metric topology"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A subset $U \subseteq X$ is **open in $(X,d)$** if for every $x \in U$ there is a
real $r > 0$ with $B(x,r) \subseteq U$ ([[def-metric-ball]]). A subset
$F \subseteq X$ is **closed in $(X,d)$** if its complement $X \setminus F$ is
open.

The collection

$$\mathcal{T}_d := \{\, U \subseteq X : U \text{ is open in } (X,d) \,\}$$

of all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$
that is both open and closed is called **clopen**.

**Two sets are open for trivial reasons.** $\emptyset$ is open, because the
defining condition quantifies over no points; and $X$ is open, because
$B(x,r) \subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and
$\emptyset$ are also closed, and both are clopen.

**A neighbourhood of a point $x$** is any open set containing $x$. The condition
above therefore reads: $U$ is open exactly when every point of $U$ has a ball
around it inside $U$, and it is the balls alone that have to be tested.

**The metric, not the set, determines $\mathcal{T}_d$.** Two metrics on the same
set may have different metric topologies, and two different metrics may have the
same one; the systematic comparison is [[def-equivalent-metrics]].

## Remarks

- **What "topology" means here.** $\mathcal{T}_d$ is defined above as a
  collection of subsets of $X$; the abstract notion of a topological space, a
  collection of subsets closed under arbitrary unions and finite intersections
  taken as primitive data, is introduced on a later page and is not used
  here. What is proved
  here is that $\mathcal{T}_d$ has exactly those closure properties
  ([[thm-metric-open-set-algebra]]), which is what licenses the word.
- **Open and closed are not opposites.** A set may be neither ($[0,1)$ inside
  $\mathbb{R}$, once the usual metric is available from
  [[lem-real-line-is-a-metric-space]]) or both ($\emptyset$ and $X$ always, and
  in some spaces every subset at once, as the discrete metric on the companion
  page shows). "Not open" is never a synonym for "closed".
- **Closedness is complementation, and nothing else, at this stage.** The
  description of closed sets by limits of sequences, and the description of the
  closure as an infimum of distances, are theorems proved later on this page
  ([[thm-metric-closure-characterisation]], [[thm-metric-sequential-closure]]),
  not part of the definition.
````

### `def-null-and-content-zero-in-rn`

````markdown
---
id: def-null-and-content-zero-in-rn
kind: definition
title: "Measure zero and content zero in $\\mathbb{R}^m$ by countable and finite cube covers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-rectangle-and-volume, def-series, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-countable, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Definition

Fix $m\ge1$. A **closed cube** is a rectangle $\prod_{j<m}[a_j,a_j+\ell]$ with $\ell\ge0$; its volume is $\ell^m$. A set $E\subseteq\mathbb R^m$ is **null** when, for every $\varepsilon>0$, it is covered by a sequence of closed cubes whose nonnegative volume series converges with sum at most $\varepsilon$. It has **content zero** when such a cover can be finite.

The series and finite sums are [[def-series]] and [[def-finite-sum]], and their nonnegative bounds use [[thm-nonnegative-series-bounded-partial-sums]] and [[lem-finite-sum-laws]]. Both properties pass to subsets. Padding a finite cover with degenerate zero-volume cubes proves that content zero implies null. This terminology defines only cover-nullity; it does not define a measure on arbitrary sets.
````

### `lem-compact-null-iff-content-zero-in-rn`

````markdown
---
id: lem-compact-null-iff-content-zero-in-rn
kind: lemma
title: "For compact subsets of $\\mathbb{R}^m$, measure zero and content zero coincide"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-null-and-content-zero-in-rn, thm-heine-borel-rn, def-metric-compactness, lem-compactness-is-intrinsic, def-metric-topology, def-multidimensional-rectangle-and-volume, thm-geometric-series, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

A compact subset of $\mathbb R^m$ is null if and only if it has content zero.

## Facts & Assumptions

**Given:** A compact $K\subseteq\mathbb R^m$.

[L1] Content zero implies nullity by finite-cover padding ([[def-null-and-content-zero-in-rn]]).

[L2] Compactness is intrinsic, so every ambient-open cover of a compact subset has a finite subcover ([[def-metric-compactness]], [[lem-compactness-is-intrinsic]], [[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 One implication is [L1]. For the other, fix $\varepsilon>0$ and choose a countable closed-cube cover of $K$ with total volume below $\varepsilon/2$.  [L1, given]

2.1 Enlarge the $j$-th cube to a larger closed cube whose interior contains it, choosing the added volume below $\varepsilon2^{-j-2}$. The interiors form an open cover and the total volumes of their closed containing cubes are below $\varepsilon$.   [step 1.1, given, choose]

3.1 Compactness selects finitely many of those interiors. The corresponding finite family of closed enlarged cubes still covers $K$, and its volume sum is at most the entire nonnegative series, hence below $\varepsilon$.   [step 2.1, L2, given]

4.1 Thus $K$ has content zero.  [step 3.1] ∎
````

### `thm-heine-borel-rn`

````markdown
---
id: thm-heine-borel-rn
kind: theorem
title: "Heine-Borel in $\\mathbb{R}^n$: with the Euclidean metric a subset of $\\mathbb{R}^n$ is compact if and only if it is closed and bounded, and the proof by bisection uses no choice principle; the same holds on the real line"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, lem-compactness-is-intrinsic, thm-compact-subset-is-closed-and-bounded, lem-closed-subset-of-a-compact-space-is-compact, lem-metrics-on-rn, lem-real-line-is-a-metric-space, thm-nested-interval-property, thm-recursion, def-finite-sum, def-interval, def-integer-power, lem-geometric-sequence-null, lem-finite-sum-laws, def-metric-ball, def-metric-bounded-diameter, def-metric-topology, def-isometry-and-metric-embedding, lem-finite-set-has-max, def-max-min, cor-archimedean-reciprocal, thm-of-archimedean, thm-of-square-roots, lem-of-square-monotone, def-abs-value, def-canonical-natural, def-real-limit, def-metric-space]
justified_by: []
aliases: [thm-heine-borel-euclidean]
landmark: true
short: "Heine-Borel in $\\mathbb{R}^n$"
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^n$ be the set of functions
$n \to \mathbb{R}$ and let $d_2$ be the Euclidean metric on it
([[lem-metrics-on-rn]]). Then:

1. **Closed boxes are compact.** For reals $a_k \le b_k$ $(k < n)$ the box
   $Q = \{\, x \in \mathbb{R}^n : a_k \le x_k \le b_k \text{ for every } k < n \,\}$
   is a compact subset of $(\mathbb{R}^n, d_2)$ ([[def-metric-compactness]]).
2. **Heine-Borel.** A subset $K \subseteq \mathbb{R}^n$ is a compact subset of
   $(\mathbb{R}^n, d_2)$ if and only if $K$ is closed in $\mathbb{R}^n$
   ([[def-metric-topology]]) and bounded
   ([[def-metric-bounded-diameter]]).
3. **The real line.** A subset $K \subseteq \mathbb{R}$ is a compact subset of
   $(\mathbb{R}, d_{\mathbb{R}})$, the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   ([[lem-real-line-is-a-metric-space]]), if and only if $K$ is closed in
   $\mathbb{R}$ and bounded.

**No choice principle is used.** The bisection below halves one coordinate at a
time and takes the **left** half whenever the left half still fails to be finitely
covered, the right half otherwise: a rule with two outcomes, decided by a
property of the box, not a selection. That is the whole reason the theorem is
available in ZF, while the general "complete and totally bounded implies compact"
([[thm-complete-and-totally-bounded-implies-compact]]) is not.

The hypothesis $n \ge 1$ is inherited from [[lem-metrics-on-rn]], which defines
$\mathbb{R}^n$ and its metrics only there; the last remark below records what
happens at $n = 0$.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the metric space $(\mathbb{R}^n, d_2)$, and the notions of open, closed, bounded and compact subset in it.

[L1] $\mathbb{R}^n$ is the set of functions $n \to \mathbb{R}$, and $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^2}$, $d_\infty(x,y) = \max\{|x_k - y_k| : k < n\}$ are metrics on it ([[lem-metrics-on-rn]], [[def-finite-sum]], [[def-metric-space]]).

[L2] Finite sums of nonnegative terms dominate each term and are monotone, and $\sum_{k<n} c = \iota(n)c$ for a constant $c$, $\iota(n)$ being the canonical natural of $\mathbb{R}$ ([[lem-finite-sum-laws]], [[def-finite-sum]], [[def-canonical-natural]]).

[L3] For $a,b \ge 0$: $a \le b$ exactly when $a^2 \le b^2$; every $a \ge 0$ has a unique nonnegative square root; and $\sqrt{c^2} = |c|$ for every real $c$ ([[lem-of-square-monotone]], [[thm-of-square-roots]], [[def-abs-value]]).

[L4] A subset $A$ is compact exactly when every family $(U_i)_{i \in I}$ of open subsets of the ambient space with $A \subseteq \bigcup_{i \in I} U_i$ has finitely many members whose union contains $A$, or $A = \emptyset$; and the sets open in the subspace $A$ are exactly the traces on $A$ of the open subsets of the ambient space, so, taking complements inside $A$, the sets closed in $A$ are exactly the traces on $A$ of the closed subsets of the ambient space ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]], [[def-metric-topology]], [[def-isometry-and-metric-embedding]]).

[L5] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]).

[L6] A closed subset of a compact metric space is compact ([[lem-closed-subset-of-a-compact-space-is-compact]]).

[L7] Nested closed bounded intervals $I_m = [\alpha_m,\beta_m]$ with $I_{m+1} \subseteq I_m$ have nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$ ([[thm-nested-interval-property]], [[def-interval]], [[def-real-limit]]).

[L8] Recursion: for a set $A$, an element $a \in A$ and $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g(0) = a$ and $g(m+1) = f(g(m))$; a stage-dependent rule is handled on $A = \mathbb{N} \times Z$, the first coordinate of $g(m)$ then being $m$ ([[thm-recursion]], [[def-finite-sum]]).

[L9] $(1/2)^m \to 0$, integer powers being those of [[def-integer-power]] ([[lem-geometric-sequence-null]], [[def-real-limit]]).

[L10] A nonempty finite set of reals has a maximum, one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L11] $U$ is open exactly when every point of $U$ has a ball inside $U$; a subset is bounded when it is empty or lies in some ball $B(x_0,\rho)$ with $\rho > 0$ ([[def-metric-topology]], [[def-metric-ball]], [[def-metric-bounded-diameter]]).

[L12] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/N < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 For $x,y \in \mathbb{R}^n$ and $k < n$ the term $(x_k-y_k)^2$ is one of the nonnegative terms of $\sum_{j<n}(x_j-y_j)^2$, so $(x_k-y_k)^2 \le d_2(x,y)^2$, and taking nonnegative square roots gives $|x_k - y_k| \le d_2(x,y)$; hence $d_\infty(x,y) \le d_2(x,y)$. [L1, L2, L3]

1.2 Conversely each $(x_j-y_j)^2 \le d_\infty(x,y)^2$, so $d_2(x,y)^2 \le \iota(n)\,d_\infty(x,y)^2 \le \big(\iota(n) d_\infty(x,y)\big)^2$, the last step because $\iota(n) \ge 1$; hence $d_2(x,y) \le \iota(n)\, d_\infty(x,y)$. [L1, L2, L3]

2.1 For claim 1 fix reals $a_k \le b_k$ $(k<n)$ and the box $Q$ they determine, let $(U_i)_{i \in I}$ be open subsets of $\mathbb{R}^n$ with $Q \subseteq \bigcup_{i \in I} U_i$, call a set $S \subseteq \mathbb{R}^n$ **finitely covered** when finitely many of the $U_i$ have union containing $S$, and suppose for contradiction that $Q$ is not finitely covered. [L4, step 1.1, step 1.2, assume-contra]

3.1 For a box $P = \{\, x : c_j \le x_j \le e_j \ (j<n) \,\}$ with $c_j \le e_j$ and for $k < n$, let $P^{k,0}$ and $P^{k,1}$ be the boxes obtained by replacing the $k$-th interval $[c_k,e_k]$ by $[c_k, (c_k+e_k)/2]$ and by $[(c_k+e_k)/2, e_k]$; then $P = P^{k,0} \cup P^{k,1}$ by trichotomy applied to $x_k$ against the midpoint, the $k$-th side length of each is $(e_k-c_k)/2$ and the others are unchanged, and if both halves were finitely covered so would $P$ be, the union of two finite subfamilies being finite. Define $H_k(P) := P^{k,0}$ if $P^{k,0}$ is not finitely covered, and $H_k(P) := P^{k,1}$ otherwise; this is a definition by a property, and $H_k(P)$ is not finitely covered whenever $P$ is. [L7, step 2.1]

4.1 Recursion on $\mathbb{N} \times Z$, with $Z$ the set of functions from boxes to boxes, starting value $(0, \mathrm{id})$ and rule $(j, h) \mapsto (j+1,\ H_j \circ h)$ for $j < n$ and $(j,h) \mapsto (j+1,h)$ otherwise, produces $G_j$ for every $j$; put $G := G_n$. By induction on $j \le n$, $G_j(P) \subseteq P$ is a box whose $k$-th side is half that of $P$ for $k < j$ and equal to that of $P$ for $k \ge j$, and $G_j(P)$ is not finitely covered when $P$ is not. So $G(P) \subseteq P$ halves every side and preserves not being finitely covered. [L8, step 3.1]

5.1 Recursion applied to the starting value $Q$ and the rule $G$ produces boxes $P_m$ with $P_0 = Q$ and $P_{m+1} = G(P_m)$; each $P_m$ fails to be finitely covered, $P_{m+1} \subseteq P_m$, and the $k$-th side length of $P_m$ is $\ell_k (1/2)^m$, where $\ell_k := b_k - a_k \ge 0$. [L8, step 4.1]

6.1 For each $k < n$ the $k$-th intervals of the $P_m$ form a nested family of closed bounded intervals whose lengths $\ell_k(1/2)^m$ tend to $0$, so their intersection is a single point $p_k$; the function $p : n \to \mathbb{R}$, $k \mapsto p_k$, is a point of $\mathbb{R}^n$ lying in every $P_m$. [L7, L9, step 5.1]

7.1 Since $p \in P_0 = Q \subseteq \bigcup_{i \in I} U_i$, there is $i^{\ast} \in I$ with $p \in U_{i^{\ast}}$, and openness gives a real $r > 0$ with $B(p,r) \subseteq U_{i^{\ast}}$. [L11, step 6.1]

8.1 Put $L := \max\{\ell_k : k < n\} \ge 0$ and $C := \iota(n) L + 1 > 0$; for $x \in P_m$ each $|x_k - p_k|$ is at most the $k$-th side length of $P_m$, so $d_\infty(x,p) \le L (1/2)^m$ and $d_2(x,p) \le \iota(n) L (1/2)^m \le C (1/2)^m$ by step 1.2. Taking a natural $N \ge 1$ with $1/N < r/C$ and then $m$ with $(1/2)^m < 1/N$ gives $P_m \subseteq B(p,r) \subseteq U_{i^{\ast}}$, so $P_m$ is finitely covered by the single set $U_{i^{\ast}}$, contradicting step 5.1. [L9, L10, L12, step 1.2, step 5.1, step 6.1, step 7.1, discharge-contradiction]

9.1 Therefore every such family has finitely many members covering $Q$, and $Q$ is a compact subset of $(\mathbb{R}^n,d_2)$: claim 1 is proved. [L4, step 2.1, step 8.1]

10.1 For claim 2, a compact $K \subseteq \mathbb{R}^n$ is closed and bounded. [L5, step 9.1]

11.1 Conversely let $K \subseteq \mathbb{R}^n$ be closed and bounded; if $K = \emptyset$ it is compact, and otherwise $K \subseteq B(x_0,\rho)$ for some $x_0$ and real $\rho > 0$, so every $x \in K$ and $k < n$ satisfy $|x_k| \le |(x_0)_k| + |x_k - (x_0)_k| \le |(x_0)_k| + d_2(x,x_0) < |(x_0)_k| + \rho$ by step 1.1; with $M := \max\{|(x_0)_k| : k < n\} + \rho$ the box $Q_M := \{\, x : -M \le x_k \le M \ (k<n) \,\}$ contains $K$. [L10, L11, step 1.1, step 10.1]

12.1 $K$ is the trace on $Q_M$ of a closed subset of $\mathbb{R}^n$, namely of $K$ itself, so $K$ is closed in the metric subspace $Q_M$; that subspace is compact by step 9.1, so $K$ is compact, and claim 2 is proved. [L4, L6, step 9.1, step 11.1]

13.1 For claim 3, let $\psi : \mathbb{R} \to \mathbb{R}^1$ send $t$ to the function $1 \to \mathbb{R}$ with value $t$; it is a bijection and $d_2(\psi(s),\psi(t)) = \sqrt{(s-t)^2} = |s-t| = d_{\mathbb{R}}(s,t)$, so $\psi$ carries each ball onto the corresponding ball, hence open sets onto open sets and open covers onto open covers with matching finite subfamilies, and likewise closed sets onto closed sets and bounded sets onto bounded sets. Applying claim 2 with $n = 1$ to $\psi[K]$ therefore gives claim 3. [L1, L3, L4, L11, step 12.1] ∎

## Remarks

**Why the bisection halves one coordinate at a time.** Halving all $n$ coordinates at once produces $2^n$ sub-boxes, and choosing one of them canonically means enumerating them, which needs a bijection between the functions $n \to \{0,1\}$ and a natural number. Halving a single coordinate produces two sub-boxes, and "the left one if it is still not finitely covered, the right one otherwise" is a definition by cases needing nothing at all. Composing $n$ such halvings, as step 4.1 does, recovers the full halving of every side and keeps the construction canonical, which is what a choice-free proof requires.

**Where each hypothesis is used.** Closedness enters only at step 12.1, through [[lem-closed-subset-of-a-compact-space-is-compact]]; boundedness enters only at step 11.1, to fit $K$ inside a box. Dropping either leaves a non-compact set: the whole of $\mathbb{R}^n$ is closed and unbounded, and an open ball is bounded and not closed, and neither is compact by claim 2.

**The converse direction is what fails in a general metric space.** Claim 2 says that in $\mathbb{R}^n$ closed and bounded is enough; that is special to $\mathbb{R}^n$, and [[fs-closed-and-bounded-implies-compact-in-every-metric-space]] records the false general statement together with a witness. What survives in every metric space is only the direction of step 10.1 ([[thm-compact-subset-is-closed-and-bounded]]).

**The case $n = 0$.** $\mathbb{R}^0$ has exactly one element, the empty function, and [[lem-metrics-on-rn]] does not treat it, because $d_\infty$ would be a maximum over the empty index set. On a one-element set the only metric is the one taking the value $0$, and the resulting space is compact for trivial reasons: it is listed as $\{x_0\}$, and any family of open sets covering it has a member containing $x_0$ ([[def-metric-compactness]]). Nothing above is needed for that case and nothing above claims it.
````

### `thm-jordan-content-and-indicator-integrability`

````markdown
---
id: thm-jordan-content-and-indicator-integrability
kind: theorem
title: "A bounded set is Jordan measurable iff its indicator is Riemann integrable, and the integral is its Jordan content"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-jordan-inner-and-outer-content, def-multidimensional-darboux-integral, def-multidimensional-darboux-sums, thm-multidimensional-riemann-criterion, def-multidimensional-grid-partition, lem-multidimensional-refinement-inequalities, lem-finite-cube-covers-admit-grid-control, def-multidimensional-rectangle-and-volume, def-metric-bounded-diameter]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

A metric-bounded set $E\subseteq\mathbb R^m$ is Jordan measurable if and only
if its indicator $1_E$ is Riemann integrable on a fixed nondegenerate bounding
rectangle $Q$. In that case
$$\int_Q1_E=\operatorname{cont}(E).$$

## Facts & Assumptions

**Given:** Metric-bounded $E\subseteq Q$ in the sense of [[def-metric-bounded-diameter]], where $Q$ is a nondegenerate bounding rectangle.

[L1] Jordan inner and outer content are [[def-jordan-inner-and-outer-content]].

[L2] Multidimensional Darboux sums and integrability are [[def-multidimensional-darboux-sums]], [[def-multidimensional-darboux-integral]], and [[thm-multidimensional-riemann-criterion]].

[L3] A finite rectangle cover can be converted to grid cells meeting $E$ with arbitrarily small excess volume ([[lem-finite-cube-covers-admit-grid-control]]), and rectangles are finite coordinate products ([[def-multidimensional-rectangle-and-volume]]).

## Proof

**Proof technique:** direct.

1.1 On a grid cell, the infimum of $1_E$ is $1$ exactly when the cell is contained in $E$, while its supremum is $1$ exactly when the cell meets $E$. Thus lower and upper sums are inscribed and covering grid approximations.  [L1, L2]

2.1 Apply [L3] to each finite outer rectangle approximation to obtain a grid whose cells meeting $E$ have arbitrarily small excess volume. For an inner approximation, shrink each nondegenerate inscribed rectangle by an arbitrarily small volume, insert the shrunken endpoints, and retain the grid cells inside it. Degenerate rectangles contribute zero. Splitting along the aligned endpoints shows that arbitrary Jordan approximations and grid approximations have the same infimum and supremum. [step 1.1, L3, given]

3.1 Equality of Jordan contents is therefore equality of the lower and upper integrals on the fixed bounding rectangle, and their common value is $\operatorname{cont}(E)$.   [step 2.1, L1, L2, given] ∎
````

### `thm-lebesgue-criterion-in-rn`

````markdown
---
id: thm-lebesgue-criterion-in-rn
kind: theorem
title: "Lebesgue's criterion in $\\mathbb{R}^m$: a bounded function on a closed nondegenerate rectangle is Riemann integrable iff its discontinuity set is null"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-multidimensional-riemann-criterion, def-multidimensional-darboux-sums, def-multidimensional-darboux-integral, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, def-null-and-content-zero-in-rn, lem-null-sets-in-rn-closed-under-subsets-and-countable-unions, lem-compact-null-iff-content-zero-in-rn, def-oscillation-in-rn, lem-oscillation-characterisation-in-rn, cor-archimedean-reciprocal, lem-finite-cube-covers-admit-grid-control, thm-heine-borel-rn, lem-closed-subset-of-a-compact-space-is-compact, def-metric-compactness, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-countable-choice, lem-integer-part, thm-algebra-of-continuous-functions, def-continuity-real, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Statement

A bounded real function on a closed nondegenerate rectangle in $\mathbb R^m$, $m\ge1$, is Riemann integrable if and only if its discontinuity set is null.

## Facts & Assumptions

**Given:** A closed nondegenerate rectangle $Q\subseteq\mathbb R^m$, $m\ge1$, and a bounded $f:Q\to\mathbb R$, with $|f|\le B$.

[L1] Continuity at $x$ is equivalent to $\omega_f(x)=0$, and each set $\{x:\omega_f(x)\ge\varepsilon\}$ is closed for $\varepsilon>0$ ([[def-oscillation-in-rn]], [[lem-oscillation-characterisation-in-rn]]).

[L2] The rectangle is compact ([[thm-heine-borel-rn]]), its relatively closed subsets are compact ([[lem-closed-subset-of-a-compact-space-is-compact]]), and compact null sets have content zero ([[lem-compact-null-iff-content-zero-in-rn]]).

[L3] Finite cube covers admit grid control ([[lem-finite-cube-covers-admit-grid-control]]), and small Darboux gaps characterize integrability ([[thm-multidimensional-riemann-criterion]]).

[L4] Compactness supplies finite subcovers ([[def-metric-compactness]]), and the Euclidean and sup norms satisfy fixed dimension-dependent comparisons ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[L5] If $u\ge0$, the integer-part theorem supplies a natural $N\ge1$ with $u\le N\le u+1$ after treating the integral and zero cases separately ([[lem-integer-part]]). Rectangle volume is the product of the side lengths ([[def-multidimensional-rectangle-and-volume]]); finite sums and products obey [[def-finite-sum]] and [[lem-finite-sum-laws]]; and every real polynomial is continuous ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L6] For every positive real $u$ there is a natural $r\ge1$ with $1/r<u$ ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** direct.

1.1 **Finite rectangle-to-cube claim.** Let $R_s=\prod_{j<m}[a_{s,j},b_{s,j}]$, for $s$ in a finite index set, and let $\gamma>0$. Put $\ell_{s,j}=b_{s,j}-a_{s,j}$. For every $\delta>0$, [L5] supplies naturals $N_{s,j}\ge1$ with $\ell_{s,j}\le\iota(N_{s,j})\delta\le\ell_{s,j}+\delta$. Partition the interval from $a_{s,j}$ into $N_{s,j}$ consecutive intervals of length $\delta$, allowing the last one to extend past $b_{s,j}$. Their Cartesian products are closed cubes of side $\delta$ covering $R_s$, and their total volume is $$\prod_{j<m}\iota(N_{s,j})\delta \le \prod_{j<m}(\ell_{s,j}+\delta).$$ The finite sum of the expressions on the right is a polynomial in $\delta$ whose value at $0$ is $\sum_s\operatorname{vol}(R_s)$. Continuity at $0$ therefore permits a common $\delta>0$ for which the resulting finite cube cover of $\bigcup_sR_s$ has total volume below $\sum_s\operatorname{vol}(R_s)+\gamma$. This includes degenerate rectangles: every zero side contributes a factor $\delta$, so its covering volume tends to $0$.  [L5, construct]

1.2 Suppose the discontinuity set $D$ is null. Given $\varepsilon>0$, choose $\alpha>0$ with $\alpha\operatorname{vol}Q<\varepsilon/2$, and put $S_\alpha=\{x:\omega_f(x)\ge\alpha\}$. Then $S_\alpha\subseteq D$ is relatively closed in $Q$, hence compact, and is null.  [L1, L2, choose]

1.3 Conversely, suppose $f$ is integrable. Fix $r\ge1$ and $\eta>0$, and choose a grid $P$ whose Darboux gap is below $\eta/(2r)$. Let $H_P\subseteq Q$ be the finite union of the pieces of the coordinate hyperplanes forming cell boundaries. Every point of $S_{1/r}\setminus H_P$ lies in the interior of a unique cell whose oscillation is at least $1/r$. Thus the total volume of these high-oscillation cells is below $\eta/2$.  [L1, L3, choose, algebra]

2.1 Cover $S_\alpha$ by finitely many cubes and enlarge them so that their interiors still cover $S_\alpha$, keeping their total volume below $\varepsilon/(8(B+1))$. Apply [L3] to the union of the enlarged cubes, with the remaining volume budget, to obtain a grid $P_0$ whose cells meeting that union have total volume below $\varepsilon/(4(B+1))$.  [step 1.2, L2, L3, choose]

2.2 The set $S_{1/r}$ is contained in the union of the high-oscillation cells and the finitely many pieces forming $H_P$. Each hyperplane piece is a degenerate rectangle of volume $0$.  [step 1.3, L5]

3.1 Let $O$ be the union of those cube interiors and $K=Q\setminus O$. The set $K$ is relatively closed in compact $Q$, hence compact by [L2]. For every $z\in K$, $\omega_f(z)<\alpha$, so some Euclidean ball about $z$ has oscillation below $\alpha$. Shrink these balls by a factor of two; compactness gives a finite subcover of $K$.  [step 2.1, L1, L2, L4, choose]

3.2 Apply the finite rectangle-to-cube claim of step 1.1 to that finite family, with $\gamma=\eta/2$. Its rectangle-volume sum is below $\eta/2$, so $S_{1/r}$ has a finite cube cover of total volume below $\eta$. Since $\eta>0$ was arbitrary, $S_{1/r}$ has content zero and is null.  [step 1.1, step 1.3, step 2.2, L2]

4.1 Refine $P_0$ to mesh small enough that the fixed norm comparison in [L4] makes every cell meeting a shrunken ball lie inside the corresponding original ball. Every cell not meeting $O$ contains a point of $K$, hence is contained in one of those original oscillation balls; refinement does not increase the total volume of cells meeting $O$.  [step 3.1, L3, L4]

5.1 The Darboux gap is therefore below $\alpha\operatorname{vol}Q+2B\,\varepsilon/(4(B+1))<\varepsilon$. By [L3], $f$ is integrable.  [step 1.2, step 2.1, step 4.1, L3, algebra]

6.1 By [L1] and [L6], $D=\bigcup_{r\ge1}S_{1/r}$. Countable-union closure makes $D$ null, with countable choice used exactly through [[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]] and [[def-countable-choice]]. Together with step 5.1, this proves both directions using cover-nullity only. [step 5.1, step 3.2, L1, L6] ∎
````

### `thm-metric-closure-characterisation`

````markdown
---
id: thm-metric-closure-characterisation
kind: theorem
title: "The closure of a nonempty $A$ is $\\{x : d(x,A) = 0\\}$, equals $A$ together with its limit points, and is the smallest closed superset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-interior-closure-boundary, def-metric-bounded-diameter,
       thm-metric-open-set-algebra, lem-inf-epsilon, def-metric-topology,
       def-metric-ball, def-infimum, lem-metric-nonnegativity, def-metric-space,
       thm-infimum-property, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "closure = zero-distance set = smallest closed superset"
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
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \subseteq X$,
with closure, derived set and limit points as in
[[def-metric-interior-closure-boundary]]. Then:

1. If $A \ne \emptyset$, then $\overline{A} = \{\, x \in X : d(x,A) = 0 \,\}$,
   where $d(x,A)$ is the distance from a point to a nonempty set
   ([[def-metric-bounded-diameter]]).
2. $\overline{A} = A \cup A'$.
3. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$. So $\overline{A}$ is the smallest closed
   superset of $A$, and $A$ is closed if and only if $A = \overline{A}$.

Claims 2 and 3 hold for every $A$, the empty set included: $\overline{\emptyset}$
is empty because no ball meets $\emptyset$, and $\emptyset$ is closed because $X$
is open ([[def-metric-topology]]). Claim 1 carries the hypothesis $A \ne \emptyset$
because $d(x,A)$ is defined only for nonempty $A$
([[def-metric-bounded-diameter]]).

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a subset $A \subseteq X$, a point $x \in X$, and a closed set $F \subseteq X$ with $A \subseteq F$; when $A \ne \emptyset$, the set $E(x) := \{\, d(x,a) : a \in A \,\}$, whose infimum is $d(x,A)$.

[A1] Closure and derived set: $x \in \overline{A}$ means $B(x,r) \cap A \ne \emptyset$ for every $r > 0$; $x \in A'$ means $B(x,r) \cap (A \setminus \{x\}) \ne \emptyset$ for every $r > 0$ ([[def-metric-interior-closure-boundary]]).

[A2] Open and closed: $U$ is open when every point of $U$ has a ball around it inside $U$; $F$ is closed when $X \setminus F$ is open ([[def-metric-topology]]).

[L1] For nonempty $A$, the set $E(x)$ is nonempty and bounded below by $0$, so $d(x,A) = \inf E(x)$ exists and is a lower bound of $E(x)$ ([[def-metric-bounded-diameter]], [[lem-metric-nonnegativity]], [[thm-infimum-property]], [[def-infimum]]).

[L2] Epsilon characterisation of the infimum: for a nonempty $S \subseteq \mathbb{R}$ bounded below and a lower bound $\ell$ of $S$, one has $\ell = \inf S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $s < \ell + \varepsilon$ ([[lem-inf-epsilon]]).

[L3] Balls are open, so a point of a ball has a ball around it inside that ball ([[thm-metric-open-set-algebra]], [[def-metric-ball]]).

[L4] Membership in a ball: $a \in B(x,r)$ means $d(x,a) < r$, and $x \in B(x,r)$ always ([[def-metric-ball]]); trichotomy of the order of $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $A \ne \emptyset$ and $x \in \overline{A}$, and let $\varepsilon > 0$ be arbitrary; then $B(x,\varepsilon) \cap A \ne \emptyset$, so there is $a \in A$ with $d(x,a) < \varepsilon = 0 + \varepsilon$, and $0$ is a lower bound of $E(x)$, so $d(x,A) = 0$ by the epsilon characterisation. [A1, L1, L2, L4]

1.2 Conversely suppose $A \ne \emptyset$ and $d(x,A) = 0$, and let $r > 0$ be arbitrary; the epsilon characterisation supplies $a \in A$ with $d(x,a) < 0 + r = r$, that is $a \in B(x,r) \cap A$, so $x \in \overline{A}$. [A1, L1, L2, L4]

1.3 $A \subseteq \overline{A}$ and $A' \subseteq \overline{A}$: a point $a \in A$ lies in $B(a,r) \cap A$ for every $r$, and a ball meeting $A \setminus \{x\}$ meets $A$. [A1, L4]

1.4 If $x \in \overline{A}$ and $x \notin A$, then for every $r$ the nonempty set $B(x,r) \cap A$ equals $B(x,r) \cap (A \setminus \{x\})$, since $x$ is not a member of $A$; hence $x \in A'$. [A1]

1.5 $\overline{A}$ is closed: let $x \in X \setminus \overline{A}$ and fix $r$ with $B(x,r) \cap A = \emptyset$; for $y \in B(x,r)$ there is $s$ with $B(y,s) \subseteq B(x,r)$, so $B(y,s) \cap A = \emptyset$ and $y \notin \overline{A}$, whence $B(x,r) \subseteq X \setminus \overline{A}$ and $X \setminus \overline{A}$ is open. [A1, A2, L3]

1.6 $\overline{A} \subseteq F$ for every closed $F \supseteq A$: if $x \in \overline{A}$ had $x \notin F$, then $X \setminus F$ open would give $r$ with $B(x,r) \subseteq X \setminus F \subseteq X \setminus A$, so $B(x,r) \cap A = \emptyset$, contradicting $x \in \overline{A}$. [A1, A2, given]

2.1 Claim 1 follows: by step 1.1 every adherent point of a nonempty $A$ satisfies $d(x,A) = 0$, and by step 1.2 every $x$ with $d(x,A) = 0$ is adherent. [step 1.1, step 1.2]

2.2 Claim 2 follows: $A \cup A' \subseteq \overline{A}$ by step 1.3, and $\overline{A} \subseteq A \cup A'$ by step 1.4, since a point of $\overline{A}$ either lies in $A$ or, not lying in $A$, lies in $A'$. [step 1.3, step 1.4]

2.3 Claim 3 follows: $\overline{A}$ is closed by step 1.5, contains $A$ by step 1.3, and sits inside every closed superset of $A$ by step 1.6; in particular if $A$ is closed then $\overline{A} \subseteq A \subseteq \overline{A}$, so $A = \overline{A}$, and conversely if $A = \overline{A}$ then $A$ is closed. [step 1.3, step 1.5, step 1.6]

3.1 Claims 1, 2 and 3 are therefore all established. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Claim 1 is where the infimum does the work.** Reading it right to left,
  $d(x,A) = 0$ says that $A$ has points arbitrarily close to $x$ without saying
  that any of them is $x$; reading it left to right, adherence says the same
  thing in the language of balls. The equivalence is exactly the epsilon
  characterisation of the infimum ([[lem-inf-epsilon]]) with the lower bound $0$.
- **The distance function is $1$-Lipschitz** ([[lem-distance-to-set-is-lipschitz]]),
  so claim 1 exhibits $\overline{A}$ as the zero set of a function that does not
  increase distances. That is not used above and is recorded only as
  orientation.
- **Claim 3 is the form that transfers to general topology**, where no metric is
  available and the closure is defined outright as the intersection of all
  closed supersets. Claim 1 is the specifically metric statement, and claim 2
  sits between them.
````


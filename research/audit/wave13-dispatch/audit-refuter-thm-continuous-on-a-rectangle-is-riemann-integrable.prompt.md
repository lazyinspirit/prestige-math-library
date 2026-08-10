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

- high risk (7): 13 declared dependencies; 9 cited facts; boundary-sensitive language
- top-20 manifest-edge consumer (13 outgoing relationships)

## Target item — `thm-continuous-on-a-rectangle-is-riemann-integrable`

Normalized current SHA-256: `828e563fb1efd256a018dc1dcc4bf948f636be8c2d73e0889cd188237a41892d`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-continuous-on-a-rectangle-is-riemann-integrable
kind: theorem
title: "Every continuous function on a closed nondegenerate rectangle in $\\mathbb{R}^m$ is Riemann integrable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-multidimensional-riemann-criterion, def-multidimensional-darboux-sums, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, thm-heine-borel-rn, thm-heine-cantor-metric, def-metric-continuity, def-metric-compactness, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-continuous-image-of-a-compact-space-is-compact, thm-extreme-value-metric, def-bounded-set]
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
pipeline_run: null
---

## Statement

Every continuous real function on a closed nondegenerate rectangle $Q\subseteq\mathbb R^m$, $m\ge1$, is Riemann integrable.

## Facts & Assumptions

**Given:** A continuous $f:Q\to\mathbb R$.

[L1] $Q$ is compact by Heine-Borel ([[thm-heine-borel-rn]], [[def-metric-compactness]]).

[L2] A continuous function on a compact metric space is uniformly continuous and bounded ([[thm-heine-cantor-metric]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-extreme-value-metric]], [[def-metric-continuity]]).

[L3] The Euclidean and sup-norm metrics are the published metrics and satisfy $d_2(x,y)\le\iota(m)d_\infty(x,y)$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

[L4] Arbitrarily small Darboux gaps characterize integrability ([[thm-multidimensional-riemann-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Given $\varepsilon>0$, use [L2] with oscillation target $\varepsilon/(1+\operatorname{vol}Q)$ and choose a grid whose mesh is below the resulting sup-metric radius.   [L1, L2, L3, given, choose]

2.1 Every cell then has oscillation below that target. Since cell volumes sum to $\operatorname{vol}Q$, the Darboux gap is below $\varepsilon$.   [step 1.1, given]

3.1 The multidimensional Riemann criterion proves integrability.   [step 2.1, L4] ∎
````

## Wave 13 provenance row

```json
{
  "id": "thm-continuous-on-a-rectangle-is-riemann-integrable",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_rirect.html"
  ],
  "rationale": "The source proves that a continuous function on a closed rectangle is Riemann integrable by compactness and uniform continuity. The item translates the proof through the Euclidean/sup-norm comparison.",
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
      "source": "thm-heine-borel-rn",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $\\mathbb{R}^n$ be the set of functions\n$n \\to \\mathbb{R}$ and let $d_2$ be the Euclidean metric on it\n([[lem-metrics-on-rn]]). Then:\n\n1. **Closed boxes are compact.** For reals $a_k \\le b_k$ $(k < n)$ the box\n   $Q = \\{\\, x \\in \\mathbb{R}^n : a_k \\le x_k \\le b_k \\text{ for every } k < n \\,\\}$\n   is a compact subset of $(\\mathbb{R}^n, d_2)$ ([[def-metric-compactness]]).\n2. **Heine-Borel.** A subset $K \\subseteq \\mathbb{R}^n$ is a compact subset of\n   $(\\mathbb{R}^n, d_2)$ if and only if $K$ is closed in $\\mathbb{R}^n$\n   ([[def-metric-topology]]) and bounded\n   ([[def-metric-bounded-diameter]]).\n3. **The real line.** A subset $K \\subseteq \\mathbb{R}$ is a compact subset of\n   $(\\mathbb{R}, d_{\\mathbb{R}})$, the usual metric $d_{\\mathbb{R}}(x,y) = |x-y|$\n   ([[lem-real-line-is-a-metric-space]]), if and only if $K$ is closed in\n   $\\mathbb{R}$ and bounded.\n\n**No choice principle is used.** The bisection below halves one coordinate at a\ntime and takes the **left** half whenever the left half still fails to be finitely\ncovered, the right half otherwise: a rule with two outcomes, decided by a\nproperty of the box, not a selection. That is the whole reason the theorem is\navailable in ZF, while the general \"complete and totally bounded implies compact\"\n([[thm-complete-and-totally-bounded-implies-compact]]) is not.\n\nThe hypothesis $n \\ge 1$ is inherited from [[lem-metrics-on-rn]], which defines\n$\\mathbb{R}^n$ and its metrics only there; the last remark below records what\nhappens at $n = 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-metric-compactness",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), with open sets as in\n[[def-metric-topology]] and balls as in [[def-metric-ball]].\n\n- An **open cover** of $(X,d)$ is a family $\\mathcal{U}$ of open subsets of $X$\n  with $X = \\bigcup \\mathcal{U}$, where\n  $\\bigcup \\mathcal{U} = \\{\\, x \\in X : x \\in U \\text{ for some } U \\in \\mathcal{U} \\,\\}$.\n- A **subcover** of $\\mathcal{U}$ is a subfamily\n  $\\mathcal{V} \\subseteq \\mathcal{U}$ that is itself an open cover.\n- A family $\\mathcal{V}$ of sets is **finite** when $\\mathcal{V} = \\emptyset$ or\n  there are $n \\in \\mathbb{N}$ and sets $V_0, \\dots, V_n$ with\n  $\\mathcal{V} = \\{V_0, \\dots, V_n\\}$; repetitions in the list are allowed and\n  harmless.\n- $(X,d)$ is **compact** when every open cover of it has a finite subcover: for\n  every open cover $\\mathcal{U}$, either $X = \\emptyset$ and the empty subfamily\n  covers it, or there are $n \\in \\mathbb{N}$ and\n  $U_0, \\dots, U_n \\in \\mathcal{U}$ with\n  $$X = U_0 \\cup \\dots \\cup U_n .$$\n- A subset $A \\subseteq X$ is a **compact subset** of $X$ when the metric\n  subspace $(A, d_A)$ is a compact metric space, $d_A$ being the restriction of\n  $d$ to $A \\times A$ ([[def-isometry-and-metric-embedding]]).\n\n**Compactness of a subset is defined intrinsically, and only intrinsically.**\nThe last clause speaks about the subspace $(A,d_A)$ and its own open sets, not\nabout families of open subsets of the ambient $X$. The two readings do agree,\nbut that is a theorem and not a convention: it is\n[[lem-compactness-is-intrinsic]], and no item of this library may use the\nambient reading without citing it. Taking the intrinsic reading as the\ndefinition is what makes \"compact\" a property of the metric space $(A,d_A)$\nalone, so that a set compact in one ambient space is compact in every other one\ncontaining it isometrically.\n\n**The empty space is compact**, since the empty subfamily of any family covers\nit; this is the reason the clause above is written with the two cases. The\none-point space is compact too, and so is every space listed as\n$\\{x_0, \\dots, x_n\\}$: given a cover, each $x_i$ lies in some member, and\nfinitely many members chosen in this way already cover.\n\n**The finiteness convention, and how it is used both ways.** \"Finite\" above is\nthe listing form, matching the finite lists of\n[[def-finite-intersection-property]]. It agrees with the definition of\nfiniteness by equinumerosity with a natural number ([[def-countable]]), and\nboth directions of the agreement are available and are used below:\n\n- A nonempty finite set $F$ in the sense of [[def-countable]] satisfies\n  $F \\approx m$ for some $m \\ge 1$, and a bijection $m \\to F$ is exactly a\n  listing $F = \\{a_0, \\dots, a_{m-1}\\}$.\n- Conversely a set listed as $A = \\{a_0, \\dots, a_n\\}$, that is the image of a\n  function $a$ with domain $\\sigma(n)$, is finite in the sense of\n  [[def-countable]]: the map sending $x \\in A$ to the least $i \\le n$ with\n  $a_i = x$ is an injection of $A$ into $\\sigma(n)$, so $A$ is equinumerous with\n  a subset of $\\mathbb{N}$ bounded above, and such a subset is finite\n  ([[lem-subset-of-countable]]).\n\nNeither direction uses a choice principle: the second selects nothing, taking a\nleast index instead.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-heine-cantor-metric",
      "source_section": "Statement",
      "quote": "Let $(X,d_X)$ be a compact metric space ([[def-metric-compactness]]), let\n$(Y,d_Y)$ be any metric space ([[def-metric-space]]) and let $f : X \\to Y$ be\ncontinuous ([[def-metric-continuity]]). Then $f$ is uniformly continuous\n([[def-metric-uniform-continuity]]).\n\nNo choice principle is used: the cover built below is cut out by a property, and\nthe Lebesgue number lemma it is fed to is itself choice free\n([[thm-lebesgue-number-lemma]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-continuous-image-of-a-compact-space-is-compact",
      "source_section": "Statement",
      "quote": "Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let\n$f : X \\to Y$ be continuous ([[def-metric-continuity]]). Then:\n\n1. If $(X,d_X)$ is compact ([[def-metric-compactness]]), the image\n   $f[X] \\subseteq Y$ is a compact subset of $Y$.\n2. More generally, if $K \\subseteq X$ is a compact subset of $X$, then $f[K]$ is\n   a compact subset of $Y$.\n\nNo choice principle is used.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-extreme-value-metric",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a nonempty compact metric space ([[def-metric-compactness]],\n[[def-metric-space]]) and let $f : X \\to \\mathbb{R}$ be continuous\n([[def-metric-continuity]]), $\\mathbb{R}$ carrying its usual metric\n$d_{\\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]). Then the\nimage $f[X]$ is bounded above and below ([[def-bounded-set]]), and it has a\nmaximum and a minimum ([[def-max-min]]): there are points\n$x_{\\max}, x_{\\min} \\in X$ with\n\n$$f(x_{\\min}) \\;\\le\\; f(x) \\;\\le\\; f(x_{\\max}) \\qquad \\text{for every } x \\in X,$$\n\nand then $f(x_{\\max}) = \\sup f[X]$ and $f(x_{\\min}) = \\inf f[X]$\n([[def-complete-ordered-field]], [[def-infimum]]).\n\nNonemptiness of $X$ is a hypothesis and not an oversight: for $X = \\emptyset$ the\nimage is empty and has neither a supremum nor a maximum. No choice principle is\nused.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-metric-continuity",
      "source_section": "Definition",
      "quote": "Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces ([[def-metric-space]]), let\n$f : X \\to Y$ be a function and let $a \\in X$.\n\n$f$ is **continuous at $a$** if for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ such that\n\n$$d_X(x,a) < \\delta \\;\\Longrightarrow\\; d_Y\\big(f(x), f(a)\\big) < \\varepsilon \\qquad \\text{for all } x \\in X .$$\n\n$f$ is **continuous** (globally, or on $X$) if it is continuous at every point of\n$X$.\n\n**The same condition in balls.** Since $d_X(x,a) < \\delta$ says $x \\in B_X(a,\\delta)$\nand $d_Y(f(x),f(a)) < \\varepsilon$ says $f(x) \\in B_Y(f(a),\\varepsilon)$\n([[def-metric-ball]]), continuity at $a$ reads: for every $\\varepsilon > 0$ there\nis $\\delta > 0$ with\n\n$$f\\big[B_X(a,\\delta)\\big] \\subseteq B_Y\\big(f(a), \\varepsilon\\big).$$\n\nBoth forms are used below and are the same statement written twice.\n\n**Both metrics matter, and both are named.** Continuity is a property of the\ntriple $(d_X, d_Y, f)$, not of $f$ alone. When several metrics on the same\nunderlying sets are in play, as in [[def-equivalent-metrics]], the metrics are\nalways written out.\n\n**Quantifier order.** The $\\delta$ is allowed to depend on $\\varepsilon$ **and on\nthe point $a$**. Requiring one $\\delta$ to work at every point simultaneously is\na strictly stronger condition, uniform continuity; it is defined on a later page\nof this library, and at this point in the reading order it is written out in full\nwhere needed ([[def-equivalent-metrics]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
      "source_section": "Statement",
      "quote": "**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about\n$\\mathbb{R}^{n}$ with $n \\ge 1$.**\n\n1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over\n   $\\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every\n   $p \\in \\mathbb{N}$ and every list $u : p \\to V$\n   ([[def-linear-combination-and-span]]),\n   $$N\\Bigl(\\sum_{j<p} u_j\\Bigr) \\;\\le\\; \\sum_{j<p} N(u_j),$$\n   and for all $u, w \\in V$,\n   $$\\bigl|N(u) - N(w)\\bigr| \\;\\le\\; N(u - w).$$\n\nNow let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $\\mathbb{R}^{n}$ carry the norms of\n[[def-p-norms-on-rn]] and write $\\iota$ for the canonical natural\n([[def-canonical-natural]]).\n\n2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on\n   $\\mathbb{R}^{n}$ and put $C := \\max\\{\\, N(e_k) : k<n \\,\\}$, a maximum over a\n   nonempty finite set of reals ([[lem-standard-basis-of-f-n]],\n   [[lem-finite-set-has-max]]). Then $C \\ge 0$ and\n   $$N(x) \\;\\le\\; C\\,\\lVert x\\rVert_1 \\qquad \\text{for every } x \\in \\mathbb{R}^{n}.$$\n3. **The comparison chain.** For every $x \\in \\mathbb{R}^{n}$,\n   $$\\lVert x\\rVert_\\infty \\;\\le\\; \\lVert x\\rVert_2 \\;\\le\\; \\lVert x\\rVert_1 \\;\\le\\; \\iota(n)\\,\\lVert x\\rVert_\\infty , \\qquad \\lVert x\\rVert_1 \\;\\le\\; \\sqrt{\\iota(n)}\\;\\lVert x\\rVert_2 .$$\n   In particular $\\lVert\\cdot\\rVert_1$, $\\lVert\\cdot\\rVert_2$ and\n   $\\lVert\\cdot\\rVert_\\infty$ are pairwise equivalent norms on $\\mathbb{R}^{n}$,\n   with the constants displayed ([[def-equivalent-norms]]).\n4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in\n   clause 2, $N : (\\mathbb{R}^{n}, d_2) \\to (\\mathbb{R}, d_{\\mathbb{R}})$ is\n   Lipschitz with constant $C\\sqrt{\\iota(n)}$\n   ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]],\n   [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and\n   continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]).\n\n**Where $n \\ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to\nexist, and clause 3 mentions $\\lVert\\cdot\\rVert_\\infty$; at $n = 0$ each is a\nmaximum over the empty index set and does not exist, exactly as in\n[[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis\non the dimension and no hypothesis on the space.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-p-norms-are-norms-and-induce-the-published-metrics",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $p \\in \\mathbb{Q}$ with $p \\ge 1$, with the norms\nof [[def-p-norms-on-rn]]. Then:\n\n1. $\\lVert\\cdot\\rVert_p$ is a norm on $\\mathbb{R}^{n}$\n   ([[def-norm-and-normed-space]]).\n2. For $n \\ge 1$, $\\lVert\\cdot\\rVert_\\infty$ is a norm on $\\mathbb{R}^{n}$.\n3. **The dictionary.** For $n \\ge 1$ and all $x, y \\in \\mathbb{R}^{n}$,\n   $$\\lVert x-y\\rVert_1 = d_1(x,y), \\qquad \\lVert x-y\\rVert_2 = d_2(x,y), \\qquad \\lVert x-y\\rVert_\\infty = d_\\infty(x,y),$$\n   where $d_1$, $d_2$, $d_\\infty$ are the metrics of the published\n   [[lem-metrics-on-rn]]. So the metric induced by each of these three norms\n   ([[def-norm-and-normed-space]]) **is** the correspondingly named published\n   metric, not merely one equivalent to it.\n\n**Consequence, used repeatedly below and stated once here.** By clause 3 at\n$p = 2$, the metric space $(\\mathbb{R}^{n}, d_2)$ of the published metric-spaces\npage and the metric space underlying the normed space\n$(\\mathbb{R}^{n}, \\lVert\\cdot\\rVert_2)$ of this page are the same object. Hence\ncompleteness ([[thm-euclidean-space-complete]] clause 2), Heine-Borel\n([[thm-heine-borel-rn]] clause 2) and the compactness equivalences\n([[thm-metric-compactness-equivalences]]) are statements about this page's normed\nspace, **with their hypothesis $n \\ge 1$ inherited unchanged and not weakened**.\nNothing below cites any of those three theorems for $n = 0$.\n\n**Why this lemma exists.** Without it the library would hold a norm-induced\nmetric on $\\mathbb{R}^{n}$ and a separately published metric on the same set with\nno recorded relation, and every later citation would have to guess which was\nmeant. The proof of clause 3 is a comparison of two written expressions; the\nvalue is that the comparison is made and recorded.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-multidimensional-riemann-criterion",
      "source_section": "Statement",
      "quote": "A bounded $f:Q\\to\\mathbb R$ on a nondegenerate rectangle is Riemann\nintegrable if and only if, for every $\\varepsilon>0$, some grid $P$ satisfies\n$U(f,P)-L(f,P)<\\varepsilon$.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Given $\\varepsilon>0$, use [L2] with oscillation target $\\varepsilon/(1+\\operatorname{vol}Q)$ and choose a grid whose mesh is below the resulting sup-metric radius.  ",
      "step": "1.1",
      "inputs": [
        "L2",
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Every cell then has oscillation below that target. Since cell volumes sum to $\\operatorname{vol}Q$, the Darboux gap is below $\\varepsilon$.  ",
      "step": "2.1",
      "inputs": [
        "step 1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The multidimensional Riemann criterion proves integrability.  ",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L4"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-continuous-on-a-rectangle-is-riemann-integrable: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Every continuous real function on a closed nondegenerate rectangle $Q\\subseteq\\mathbb R^m$, $m\\ge1$, is Riemann integrable."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-continuous-on-a-rectangle-is-riemann-integrable: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: Every continuous real function on a closed nondegenerate rectangle $Q\\subseteq\\mathbb R^m$, $m\\ge1$, is Riemann integrable."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-continuous-on-a-rectangle-is-riemann-integrable: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Every continuous real function on a closed nondegenerate rectangle $Q\\subseteq\\mathbb R^m$, $m\\ge1$, is Riemann integrable."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement: degeneracy is explicitly excluded or separated by the hypotheses: Every continuous real function on a closed nondegenerate rectangle $Q\\subseteq\\mathbb R^m$, $m\\ge1$, is Riemann integrable."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "thm-continuous-on-a-rectangle-is-riemann-integrable: no interval or radial endpoint is part of the conclusion; checked against the Statement: Every continuous real function on a closed nondegenerate rectangle $Q\\subseteq\\mathbb R^m$, $m\\ge1$, is Riemann integrable."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: every witness selected there is drawn after the proof establishes the relevant positivity, existence, or nonemptiness condition."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "thm-continuous-on-a-rectangle-is-riemann-integrable: the Statement is not an equivalence, so there is no forward implication obligation: Every continuous real function on a closed nondegenerate rectangle $Q\\subseteq\\mathbb R^m$, $m\\ge1$, is Riemann integrable."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "thm-continuous-on-a-rectangle-is-riemann-integrable: the Statement is not an equivalence, so there is no reverse implication obligation: Every continuous real function on a closed nondegenerate rectangle $Q\\subseteq\\mathbb R^m$, $m\\ge1$, is Riemann integrable."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-continuous-on-a-rectangle-is-riemann-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-multidimensional-riemann-criterion",
    "declared_target": "thm-multidimensional-riemann-criterion",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-on-a-rectangle-is-riemann-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-multidimensional-darboux-sums",
    "declared_target": "def-multidimensional-darboux-sums",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-on-a-rectangle-is-riemann-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-multidimensional-grid-partition",
    "declared_target": "def-multidimensional-grid-partition",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-on-a-rectangle-is-riemann-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-multidimensional-rectangle-and-volume",
    "declared_target": "def-multidimensional-rectangle-and-volume",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-on-a-rectangle-is-riemann-integrable",
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
    "source": "thm-continuous-on-a-rectangle-is-riemann-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-heine-cantor-metric",
    "declared_target": "thm-heine-cantor-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-on-a-rectangle-is-riemann-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-metric-continuity",
    "declared_target": "def-metric-continuity",
    "target_statement_provenance": "literature-derived",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-on-a-rectangle-is-riemann-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-metric-compactness",
    "declared_target": "def-metric-compactness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-on-a-rectangle-is-riemann-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
    "declared_target": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-on-a-rectangle-is-riemann-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "lem-p-norms-are-norms-and-induce-the-published-metrics",
    "declared_target": "lem-p-norms-are-norms-and-induce-the-published-metrics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-on-a-rectangle-is-riemann-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-continuous-image-of-a-compact-space-is-compact",
    "declared_target": "thm-continuous-image-of-a-compact-space-is-compact",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-on-a-rectangle-is-riemann-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-extreme-value-metric",
    "declared_target": "thm-extreme-value-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-on-a-rectangle-is-riemann-integrable",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
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

## Full exact-current text of every cited or declared item (13)

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

### `def-metric-compactness`

````markdown
---
id: def-metric-compactness
kind: definition
title: "Open cover, subcover, compact metric space, and compact subset of a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-topology, def-metric-ball, def-isometry-and-metric-embedding, def-countable, lem-subset-of-countable]
justified_by: []
aliases: [def-compact-metric-space]
landmark: true
short: "open cover, compact metric space"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Cover (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cover_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), with open sets as in
[[def-metric-topology]] and balls as in [[def-metric-ball]].

- An **open cover** of $(X,d)$ is a family $\mathcal{U}$ of open subsets of $X$
  with $X = \bigcup \mathcal{U}$, where
  $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily
  $\mathcal{V} \subseteq \mathcal{U}$ that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \emptyset$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,d)$ is **compact** when every open cover of it has a finite subcover: for
  every open cover $\mathcal{U}$, either $X = \emptyset$ and the empty subfamily
  covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the metric
  subspace $(A, d_A)$ is a compact metric space, $d_A$ being the restriction of
  $d$ to $A \times A$ ([[def-isometry-and-metric-embedding]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A,d_A)$ and its own open sets, not
about families of open subsets of the ambient $X$. The two readings do agree,
but that is a theorem and not a convention: it is
[[lem-compactness-is-intrinsic]], and no item of this library may use the
ambient reading without citing it. Taking the intrinsic reading as the
definition is what makes "compact" a property of the metric space $(A,d_A)$
alone, so that a set compact in one ambient space is compact in every other one
containing it isometrically.

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. The
one-point space is compact too, and so is every space listed as
$\{x_0, \dots, x_n\}$: given a cover, each $x_i$ lies in some member, and
finitely many members chosen in this way already cover.

**The finiteness convention, and how it is used both ways.** "Finite" above is
the listing form, matching the finite lists of
[[def-finite-intersection-property]]. It agrees with the definition of
finiteness by equinumerosity with a natural number ([[def-countable]]), and
both directions of the agreement are available and are used below:

- A nonempty finite set $F$ in the sense of [[def-countable]] satisfies
  $F \approx m$ for some $m \ge 1$, and a bijection $m \to F$ is exactly a
  listing $F = \{a_0, \dots, a_{m-1}\}$.
- Conversely a set listed as $A = \{a_0, \dots, a_n\}$, that is the image of a
  function $a$ with domain $\sigma(n)$, is finite in the sense of
  [[def-countable]]: the map sending $x \in A$ to the least $i \le n$ with
  $a_i = x$ is an injection of $A$ into $\sigma(n)$, so $A$ is equinumerous with
  a subset of $\mathbb{N}$ bounded above, and such a subset is finite
  ([[lem-subset-of-countable]]).

Neither direction uses a choice principle: the second selects nothing, taking a
least index instead.

## Remarks

**Why open covers rather than closed ones.** Nothing in the definition would
break if $\mathcal{U}$ were allowed to consist of arbitrary sets, but the
resulting notion would be uninteresting: every space is covered by its
singletons, and only a finite space would survive. Openness of the members is
what makes the condition a genuine restriction, and it is what
[[lem-compactness-is-intrinsic]] has to keep track of when the ambient space
changes.

**A warning about the word "cover".** A family may cover $A \subseteq X$ without
being a family of subsets of $A$: the members are open subsets of $X$ and their
union merely contains $A$. That is the ambient reading, and it is a different
statement from "$\mathcal{U}$ is an open cover of the metric space $(A,d_A)$",
whose members are open subsets of $A$. Which of the two is meant is written out
everywhere on this page.
````

### `def-metric-continuity`

````markdown
---
id: def-metric-continuity
kind: definition
title: "Continuity of a map between metric spaces, at a point and globally, in the $\\varepsilon$-$\\delta$ form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-space, def-metric-ball]
justified_by: []
aliases: [def-continuous-map-metric]
landmark: true
short: "$\\varepsilon$-$\\delta$ continuity"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces ([[def-metric-space]]), let
$f : X \to Y$ be a function and let $a \in X$.

$f$ is **continuous at $a$** if for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that

$$d_X(x,a) < \delta \;\Longrightarrow\; d_Y\big(f(x), f(a)\big) < \varepsilon \qquad \text{for all } x \in X .$$

$f$ is **continuous** (globally, or on $X$) if it is continuous at every point of
$X$.

**The same condition in balls.** Since $d_X(x,a) < \delta$ says $x \in B_X(a,\delta)$
and $d_Y(f(x),f(a)) < \varepsilon$ says $f(x) \in B_Y(f(a),\varepsilon)$
([[def-metric-ball]]), continuity at $a$ reads: for every $\varepsilon > 0$ there
is $\delta > 0$ with

$$f\big[B_X(a,\delta)\big] \subseteq B_Y\big(f(a), \varepsilon\big).$$

Both forms are used below and are the same statement written twice.

**Both metrics matter, and both are named.** Continuity is a property of the
triple $(d_X, d_Y, f)$, not of $f$ alone. When several metrics on the same
underlying sets are in play, as in [[def-equivalent-metrics]], the metrics are
always written out.

**Quantifier order.** The $\delta$ is allowed to depend on $\varepsilon$ **and on
the point $a$**. Requiring one $\delta$ to work at every point simultaneously is
a strictly stronger condition, uniform continuity; it is defined on a later page
of this library, and at this point in the reading order it is written out in full
where needed ([[def-equivalent-metrics]]).

## Remarks

- **Nothing is claimed here beyond the definition.** That continuity is
  equivalent to preimages of open sets being open, to preimages of closed sets
  being closed, to sequential continuity, and to
  $f[\overline{A}] \subseteq \overline{f[A]}$, is the theorem
  [[thm-metric-continuity-characterisations]].
- **Continuity at a point is a local condition**: it depends only on the values
  of $f$ on any one ball around $a$, since the condition may always be tested
  with a smaller $\delta$.
- Every isometric embedding is continuous, with $\delta = \varepsilon$
  ([[def-isometry-and-metric-embedding]], [[lem-isometry-is-an-embedding]]), and
  so is every map that does not increase distances, such as $u \mapsto d(u,A)$
  ([[lem-distance-to-set-is-lipschitz]]).
````

### `def-multidimensional-darboux-sums`

````markdown
---
id: def-multidimensional-darboux-sums
kind: definition
title: "Lower and upper Darboux sums over a grid partition in $\\mathbb{R}^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, def-bounded-set, def-complete-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
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
pipeline_run: null
---

## Definition

Let $f:Q\to\mathbb R$ be bounded on a nondegenerate rectangle and let $P$ be a grid. For each cell $Q_i$, put
$$m_i:=\inf f[Q_i],\quad M_i:=\sup f[Q_i],\quad L(f,P):=\sum_i m_i\operatorname{vol}(Q_i),\quad U(f,P):=\sum_i M_i\operatorname{vol}(Q_i).$$
The extrema exist as finite reals because each nonempty image is bounded ([[def-bounded-set]], [[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]]), and the sums use the iterated convention of [[def-multidimensional-grid-partition]].

Since $m_i\le M_i$ and cell volumes are nonnegative, $L(f,P)\le U(f,P)$. Moreover
$$U(f,P)-L(f,P)=\sum_i(M_i-m_i)\operatorname{vol}(Q_i),$$
the sum of cell oscillations weighted by volume ([[lem-finite-sum-laws]]).
````

### `def-multidimensional-grid-partition`

````markdown
---
id: def-multidimensional-grid-partition
kind: definition
title: "Grid partitions of a rectangle in $\\mathbb{R}^m$, their cells, refinements and mesh"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-rectangle-and-volume, def-partition-and-refinement, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: false
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
pipeline_run: null
---

## Definition

A **grid partition** $P$ of a nondegenerate rectangle $Q=[a,b]\subseteq\mathbb R^m$ is a family, one for each $j<m$, of one-dimensional partitions $a_j=t_{j,0}<\cdots<t_{j,n_j}=b_j$ ([[def-partition-and-refinement]]). For a multi-index $i=(i_0,\ldots,i_{m-1})$ with $i_j<n_j$, its cell is
$$Q_i:=\prod_{j<m}[t_{j,i_j},t_{j,i_j+1}].$$
A sum over cells means the iterated recursive sum $\sum_{i_0<n_0}\cdots\sum_{i_{m-1}<n_{m-1}}$ of [[def-finite-sum]]. The **mesh** is $\max_{j<m,i_j<n_j}(t_{j,i_j+1}-t_{j,i_j})$, which exists by [[lem-finite-set-has-max]] and is the largest $d_\infty$-diameter ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

Refinement is coordinatewise. Coordinatewise union gives a common refinement. The cells cover $Q$ and have pairwise disjoint interiors. Repeated splitting of finite sums and induction on $m$ give
$$\sum_i\operatorname{vol}(Q_i)=\operatorname{vol}(Q).$$
These statements include boundary overlaps: boundaries may meet, but interiors do not, and volume splitting is algebraic.
````

### `def-multidimensional-rectangle-and-volume`

````markdown
---
id: def-multidimensional-rectangle-and-volume
kind: definition
title: "Axis-parallel rectangles in $\\mathbb{R}^m$ and their volume"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [lem-metrics-on-rn, def-p-norms-on-rn, def-finite-sum, lem-finite-sum-laws, def-interval, def-canonical-natural, lem-of-naturals-positive]
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
pipeline_run: null
---

## Definition

Fix a natural number $m\ge1$. For $a,b\in\mathbb R^m$ with $a_j\le b_j$ for $j<m$, define
$$[a,b]:=\{x\in\mathbb R^m:a_j\le x_j\le b_j\ (j<m)\},\qquad \operatorname{vol}[a,b]:=\prod_{j<m}(b_j-a_j).$$
The product is the recursively defined finite product of [[def-finite-sum]]. The rectangle is **nondegenerate** when every $a_j<b_j$, and it is a **cube** when all side lengths are equal.

Every factor is nonnegative, so volume is nonnegative. For a coordinate index $r<m$, cutting at $c\in[a_r,b_r]$ gives two rectangles whose volumes add to the original, by distributivity in that factor and [[lem-finite-sum-laws]]. Under the standard identification $\mathbb R^1\cong\mathbb R$ ([[lem-metrics-on-rn]], [[def-p-norms-on-rn]]), this is the interval $[a_0,b_0]$ and its length.
````

### `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`

````markdown
---
id: lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
kind: lemma
title: "The finite and reverse triangle inequalities for a norm; and for $n \\ge 1$ every norm $N$ on $\\mathbb{R}^n$ satisfies $N(x) \\le C\\lVert x\\rVert_1$ and is Lipschitz, hence continuous, for $d_2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-equivalent-norms, lem-standard-basis-of-f-n, def-linear-combination-and-span, thm-unique-coordinates-with-respect-to-an-ordered-basis, thm-cauchy-schwarz-finite, lem-finite-set-has-max, def-max-min, lem-finite-sum-laws, def-finite-sum, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, def-metric-continuity, def-canonical-natural, lem-of-naturals-positive, thm-induction-principle, lem-of-abs-value, lem-of-square-monotone, thm-of-square-roots, lem-real-line-is-a-metric-space, lem-metrics-on-rn, def-vector-space, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: false
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
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about
$\mathbb{R}^{n}$ with $n \ge 1$.**

1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over
   $\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every
   $p \in \mathbb{N}$ and every list $u : p \to V$
   ([[def-linear-combination-and-span]]),
   $$N\Bigl(\sum_{j<p} u_j\Bigr) \;\le\; \sum_{j<p} N(u_j),$$
   and for all $u, w \in V$,
   $$\bigl|N(u) - N(w)\bigr| \;\le\; N(u - w).$$

Now let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^{n}$ carry the norms of
[[def-p-norms-on-rn]] and write $\iota$ for the canonical natural
([[def-canonical-natural]]).

2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on
   $\mathbb{R}^{n}$ and put $C := \max\{\, N(e_k) : k<n \,\}$, a maximum over a
   nonempty finite set of reals ([[lem-standard-basis-of-f-n]],
   [[lem-finite-set-has-max]]). Then $C \ge 0$ and
   $$N(x) \;\le\; C\,\lVert x\rVert_1 \qquad \text{for every } x \in \mathbb{R}^{n}.$$
3. **The comparison chain.** For every $x \in \mathbb{R}^{n}$,
   $$\lVert x\rVert_\infty \;\le\; \lVert x\rVert_2 \;\le\; \lVert x\rVert_1 \;\le\; \iota(n)\,\lVert x\rVert_\infty , \qquad \lVert x\rVert_1 \;\le\; \sqrt{\iota(n)}\;\lVert x\rVert_2 .$$
   In particular $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_2$ and
   $\lVert\cdot\rVert_\infty$ are pairwise equivalent norms on $\mathbb{R}^{n}$,
   with the constants displayed ([[def-equivalent-norms]]).
4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in
   clause 2, $N : (\mathbb{R}^{n}, d_2) \to (\mathbb{R}, d_{\mathbb{R}})$ is
   Lipschitz with constant $C\sqrt{\iota(n)}$
   ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]],
   [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and
   continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]).

**Where $n \ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to
exist, and clause 3 mentions $\lVert\cdot\rVert_\infty$; at $n = 0$ each is a
maximum over the empty index set and does not exist, exactly as in
[[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis
on the dimension and no hypothesis on the space.

## Facts & Assumptions

**Given:** A vector space $V$ over $\mathbb{R}$ with a norm $N$ ([[def-vector-space]], [[def-norm-and-normed-space]]); and, for clauses 2 to 4, a natural $n \ge 1$, the space $\mathbb{R}^{n}$, a norm $N$ on it, and vectors $x, y \in \mathbb{R}^{n}$.

[L1] The norm axioms: $N(v) = 0$ exactly when $v = 0_V$; $N(\lambda v) = |\lambda|N(v)$; $N(u+w) \le N(u)+N(w)$; and $N(v) \ge 0$ ([[def-norm-and-normed-space]]).

[L2] Finite sums in a vector space: $\sum_{j<0}u_j = 0_V$ and $\sum_{j<p+1}u_j = \bigl(\sum_{j<p}u_j\bigr) + u_p$ ([[def-linear-combination-and-span]]); and $(-1)v = -v$ ([[lem-vector-space-elementary-consequences]]).

[L3] The induction principle ([[thm-induction-principle]]).

[L4] Laws of finite sums of reals ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, $\sum_{k<n}\lambda = \iota(n)\lambda$, a sum of nonnegative terms is nonnegative, and every single term is at most such a sum.

[L5] The standard basis: $e_i \in \mathbb{R}^{n}$ has $e_i(i) = 1$ and $e_i(j) = 0$ for $j \ne i$, $e$ is an ordered basis of $\mathbb{R}^{n}$, and every $x$ satisfies $x = \sum_{i<n}x_i e_i$ with coordinate list $i \mapsto x(i)$ ([[lem-standard-basis-of-f-n]] clauses 1 to 3, [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L6] Maxima ([[lem-finite-set-has-max]], [[def-max-min]]): a nonempty finite set of reals has a maximum, which belongs to the set and bounds it above.

[L7] The three norms ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]): $\lVert x\rVert_1 = \sum_{k<n}|x_k|$, $\lVert x\rVert_2 = \sqrt{\sum_{k<n}x_k^{2}}$, $\lVert x\rVert_\infty = \max\{|x_k| : k<n\}$, and each induces the correspondingly named published metric.

[L8] Cauchy-Schwarz in root form ([[thm-cauchy-schwarz-finite]]): $\bigl|\sum_{k<n}a_kb_k\bigr| \le \sqrt{\sum_{k<n}a_k^{2}}\sqrt{\sum_{k<n}b_k^{2}}$.

[L9] Square roots and squaring ([[thm-of-square-roots]], [[lem-of-square-monotone]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt{c})^{2} = c$; for $a,b \ge 0$, $a \le b$ exactly when $a^{2} \le b^{2}$.

[L10] Absolute value ([[lem-of-abs-value]]): $|t| \ge 0$, $|t|^{2} = t^{2}$, $|st| = |s||t|$, $|-t| = |t|$, and $|t|$ equals $t$ or $-t$.

[L11] The canonical natural: $\iota(n) > 0$ for $n \ge 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L12] Lipschitz maps and the regularity hierarchy ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]): a map with $d_Y(f(x),f(y)) \le L\,d_X(x,y)$ and $L \ge 0$ is Lipschitz, hence uniformly continuous, hence continuous; $d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 The finite triangle inequality holds by induction on $p$: at $p = 0$ both sides are $0$, since $\sum_{j<0}u_j = 0_V$ and $N(0_V) = 0$ and the empty real sum is $0$; and if $N(\sum_{j<p}u_j) \le \sum_{j<p}N(u_j)$, then $N(\sum_{j<p+1}u_j) = N(\sum_{j<p}u_j + u_p) \le N(\sum_{j<p}u_j) + N(u_p) \le \sum_{j<p}N(u_j) + N(u_p) = \sum_{j<p+1}N(u_j)$. [L1, L2, L3, L4]

1.2 For $u, w \in V$: $N(u) = N((u-w)+w) \le N(u-w) + N(w)$, so $N(u)-N(w) \le N(u-w)$; and $N(w-u) = N((-1)(u-w)) = |-1|N(u-w) = N(u-w)$, so the same argument with $u$ and $w$ exchanged gives $N(w)-N(u) \le N(u-w)$. Since $|N(u)-N(w)|$ is one of $N(u)-N(w)$ and $N(w)-N(u)$, the reverse triangle inequality follows, completing clause 1. [L1, L2, L10]

1.3 For every $j<n$: $x_j^{2} \le \sum_{k<n}x_k^{2}$, since every single term of a sum of nonnegative terms is at most the sum; taking nonnegative square roots and using $|x_j|^{2} = x_j^{2}$ gives $|x_j| \le \lVert x\rVert_2$. [L4, L7, L9, L10]

1.4 For every $j<n$: $|x_j| \le \sum_{k<n}|x_k| = \lVert x\rVert_1$, again because a single term is at most the sum. [L4, L7, L10]

1.5 $\sum_{k<n}|x_k| \le \sum_{k<n}\lVert x\rVert_\infty = \iota(n)\lVert x\rVert_\infty$, since $|x_k| \le \lVert x\rVert_\infty$ for every $k<n$ and a constant list sums to $\iota(n)$ times its value; so $\lVert x\rVert_1 \le \iota(n)\lVert x\rVert_\infty$. [L4, L6, L7, L11]

1.6 Instantiating [L8] at $a_k := |x_k|$ and $b_k := 1$ gives $\lVert x\rVert_1 = \bigl|\sum_{k<n}|x_k|\cdot 1\bigr| \le \sqrt{\sum_{k<n}|x_k|^{2}}\,\sqrt{\sum_{k<n}1} = \lVert x\rVert_2\sqrt{\iota(n)}$. [L4, L7, L8, L10]

1.7 The set $\{N(e_k) : k<n\}$ is a nonempty finite set of reals because $n \ge 1$, so $C = \max\{N(e_k) : k<n\}$ exists, belongs to the set, satisfies $N(e_k) \le C$ for every $k<n$, and is $\ge 0$ since every value of $N$ is. [L1, L5, L6]

1.8 $x = \sum_{i<n} x_i e_i$, the coordinate list of $x$ with respect to the ordered basis $e$ being $i \mapsto x(i) = x_i$. [L5]

2.1 $\lVert x\rVert_\infty$ is one of the numbers $|x_j|$ with $j<n$, so step 1.3 gives $\lVert x\rVert_\infty \le \lVert x\rVert_2$. [step 1.3, L6, L7]

2.2 $\sum_{k<n}x_k^{2} = \sum_{k<n}|x_k|\,|x_k| \le \sum_{k<n}|x_k|\,\lVert x\rVert_1 = \lVert x\rVert_1\sum_{k<n}|x_k| = \lVert x\rVert_1^{2}$, using step 1.4 termwise, monotonicity and scaling; taking nonnegative square roots gives $\lVert x\rVert_2 \le \lVert x\rVert_1$. [step 1.4, L4, L7, L9, L10]

2.3 Applying step 1.1 to the list $i \mapsto x_i e_i$ and then (N2): $N(x) = N\bigl(\sum_{i<n}x_ie_i\bigr) \le \sum_{i<n}N(x_ie_i) = \sum_{i<n}|x_i|\,N(e_i) \le \sum_{i<n}|x_i|\,C = C\lVert x\rVert_1$, the last inequality by monotonicity from step 1.7. This is clause 2. [step 1.1, step 1.7, step 1.8, L1, L4, L7]

3.1 Steps 2.1, 2.2, 1.5 and 1.6 are the four inequalities of clause 3; since $\iota(n) > 0$ and $\sqrt{\iota(n)} > 0$, they exhibit positive constants in both directions for each of the three pairs, so the three norms are pairwise equivalent. [step 1.5, step 1.6, step 2.1, step 2.2, L11, L9]

3.2 By step 1.2 applied on $\mathbb{R}^{n}$, then step 2.3, then step 1.6: $\bigl|N(x)-N(y)\bigr| \le N(x-y) \le C\lVert x-y\rVert_1 \le C\sqrt{\iota(n)}\;\lVert x-y\rVert_2$. [step 1.2, step 1.6, step 2.3, L4]

4.1 Since $\lVert x-y\rVert_2 = d_2(x,y)$ and $\bigl|N(x)-N(y)\bigr| = d_{\mathbb{R}}(N(x),N(y))$, step 3.2 says exactly that $N$ is Lipschitz with the nonnegative constant $C\sqrt{\iota(n)}$, hence uniformly continuous and continuous; this is clause 4, and with steps 1.2, 2.3 and 3.1 all four clauses are proved. [step 1.2, step 2.3, step 3.1, step 3.2, L7, L12] ∎

## Remarks

- **Clause 2 is the half of norm equivalence that costs no compactness.** It gives an upper bound for an arbitrary norm in terms of $\lVert\cdot\rVert_1$, and hence in terms of $\lVert\cdot\rVert_2$ by clause 3, by a computation with the standard basis alone. The matching **lower** bound is where compactness of the unit sphere enters, and that is [[thm-all-norms-on-rn-are-equivalent]].

- **The constants of clause 3 are best possible, and the companion page shows it.** Nothing here claims sharpness; the attaining vectors are exhibited on the companion page for $\mathbb{R}^{2}$.

- **Clause 1 is stated for a general norm on purpose.** It is used below for the Euclidean norm on $\mathbb{R}^{n}$ inside [[thm-steinitz-polygonal-confinement]] and for an arbitrary $N$ in clause 2, and it is the only statement on this page that needs no hypothesis on the dimension at all.
````

### `lem-p-norms-are-norms-and-induce-the-published-metrics`

````markdown
---
id: lem-p-norms-are-norms-and-induce-the-published-metrics
kind: lemma
title: "Each $\\lVert\\cdot\\rVert_p$ is a norm on $\\mathbb{R}^n$, and the induced metrics are exactly $d_1$, $d_2$ and $d_\\infty$ of the published metric-spaces page"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-p-norms-on-rn, def-norm-and-normed-space, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, thm-minkowski-finite, lem-rational-power-laws, lem-rational-power-monotone, lem-finite-sum-laws, def-finite-sum, lem-metrics-on-rn, def-metric-space, def-metric-topology, thm-euclidean-space-complete, thm-heine-borel-rn, thm-metric-compactness-equivalences, lem-finite-set-has-max, def-max-min, def-rational-power, lem-of-abs-value, def-abs-value, lem-of-triangle-inequality, lem-of-sign-rules, def-ordered-field, thm-of-square-roots]
justified_by: []
aliases: []
landmark: true
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
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Minkowski inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Minkowski_inequality"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $p \in \mathbb{Q}$ with $p \ge 1$, with the norms
of [[def-p-norms-on-rn]]. Then:

1. $\lVert\cdot\rVert_p$ is a norm on $\mathbb{R}^{n}$
   ([[def-norm-and-normed-space]]).
2. For $n \ge 1$, $\lVert\cdot\rVert_\infty$ is a norm on $\mathbb{R}^{n}$.
3. **The dictionary.** For $n \ge 1$ and all $x, y \in \mathbb{R}^{n}$,
   $$\lVert x-y\rVert_1 = d_1(x,y), \qquad \lVert x-y\rVert_2 = d_2(x,y), \qquad \lVert x-y\rVert_\infty = d_\infty(x,y),$$
   where $d_1$, $d_2$, $d_\infty$ are the metrics of the published
   [[lem-metrics-on-rn]]. So the metric induced by each of these three norms
   ([[def-norm-and-normed-space]]) **is** the correspondingly named published
   metric, not merely one equivalent to it.

**Consequence, used repeatedly below and stated once here.** By clause 3 at
$p = 2$, the metric space $(\mathbb{R}^{n}, d_2)$ of the published metric-spaces
page and the metric space underlying the normed space
$(\mathbb{R}^{n}, \lVert\cdot\rVert_2)$ of this page are the same object. Hence
completeness ([[thm-euclidean-space-complete]] clause 2), Heine-Borel
([[thm-heine-borel-rn]] clause 2) and the compactness equivalences
([[thm-metric-compactness-equivalences]]) are statements about this page's normed
space, **with their hypothesis $n \ge 1$ inherited unchanged and not weakened**.
Nothing below cites any of those three theorems for $n = 0$.

**Why this lemma exists.** Without it the library would hold a norm-induced
metric on $\mathbb{R}^{n}$ and a separately published metric on the same set with
no recorded relation, and every later citation would have to guess which was
meant. The proof of clause 3 is a comparison of two written expressions; the
value is that the comparison is made and recorded.

## Facts & Assumptions

**Given:** A natural number $n$, a rational $p \ge 1$, vectors $x, y \in \mathbb{R}^{n}$ and a real $\lambda$; write $S(x) := \sum_{k<n}|x_k|^{p}$, so that $\lVert x\rVert_p = S(x)^{1/p}$ ([[def-p-norms-on-rn]], [[def-finite-sum]]).

[A1] For clauses 2 and 3, $n \ge 1$, so that $\{|x_k| : k<n\}$ is a nonempty finite set of reals ([[def-p-norms-on-rn]], [[lem-metrics-on-rn]]).

[L1] Rational powers ([[def-rational-power]], [[lem-rational-power-laws]]): for $a, b \ge 0$ and rationals $r, s > 0$ one has $a^{r} \ge 0$, $(ab)^{r} = a^{r}b^{r}$, $0^{r} = 0$, and $a^{r} > 0$ when $a > 0$; and for $a > 0$, $(a^{r})^{s} = a^{rs}$ and $a^{1} = a$.

[L2] Monotonicity in the base ([[lem-rational-power-monotone]] clause 2): for a rational $r > 0$ and reals $0 \le a < b$ one has $a^{r} < b^{r}$; hence $a \le b$ implies $a^{r} \le b^{r}$, the case $a = b$ being trivial, and $a^{r} = 0$ only for $a = 0$.

[L3] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity; a sum of nonnegative terms is nonnegative, each single term is at most such a sum, and a sum of nonnegative terms that vanishes has every term $0$.

[L4] Minkowski's inequality for finite sums at rational $p \ge 1$ ([[thm-minkowski-finite]]): $\bigl(\sum_{k<n}|a_k+b_k|^{p}\bigr)^{1/p} \le \bigl(\sum_{k<n}|a_k|^{p}\bigr)^{1/p} + \bigl(\sum_{k<n}|b_k|^{p}\bigr)^{1/p}$.

[L5] Absolute value ([[lem-of-abs-value]], [[def-abs-value]], [[lem-of-triangle-inequality]]): $|t| \ge 0$; $|t| = 0$ exactly when $t = 0$; $|st| = |s|\,|t|$; $|s+t| \le |s|+|t|$; and $|t|^{2} = t^{2}$.

[L6] Maxima ([[lem-finite-set-has-max]], [[def-max-min]]): a nonempty finite set of reals has a maximum, the maximum belongs to the set and bounds it above, and a set with an upper bound belonging to it has that element as its maximum.

[L7] Order arithmetic: multiplying an inequality by a nonnegative real preserves it ([[lem-of-sign-rules]] in its strict form, together with the case of equality settled by totality), and $\le$ is transitive ([[def-ordered-field]]).

[L8] The norm axioms (N1), (N2), (N3) ([[def-norm-and-normed-space]]); $\lVert\cdot\rVert_2$ agrees with the Euclidean norm of [[def-euclidean-inner-product]], and is a norm by [[thm-cauchy-schwarz-and-the-euclidean-norm]]; square roots are the rational power at exponent $1/2$ ([[thm-of-square-roots]], [[def-p-norms-on-rn]]).

[L9] The published metrics on $\mathbb{R}^{n}$ for $n \ge 1$ are $d_1(x,y) = \sum_{k<n}|x_k-y_k|$, $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^{2}}$ and $d_\infty(x,y) = \max\{|x_k-y_k| : k<n\}$, and each is a metric ([[lem-metrics-on-rn]], [[def-metric-space]], [[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 Every term $|x_k|^{p}$ is nonnegative, so $S(x) \ge 0$ and $\lVert x\rVert_p = S(x)^{1/p}$ is defined and nonnegative. [L1, L3]

1.2 $S(x) = 0$ holds exactly when $|x_k|^{p} = 0$ for every $k<n$, a vanishing sum of nonnegative terms having every term $0$; and $|x_k|^{p} = 0$ exactly when $|x_k| = 0$, that is exactly when $x_k = 0$. [L1, L2, L3, L5]

1.3 For every $k<n$, $|(\lambda x)_k|^{p} = \bigl(|\lambda|\,|x_k|\bigr)^{p} = |\lambda|^{p}|x_k|^{p}$, so $S(\lambda x) = |\lambda|^{p}S(x)$ by scaling of finite sums. [L1, L3, L5]

1.4 Instantiating [L4] at $a_k := x_k$ and $b_k := y_k$, and using $(x+y)_k = x_k+y_k$, gives $\lVert x+y\rVert_p \le \lVert x\rVert_p + \lVert y\rVert_p$, which is axiom (N3) for $\lVert\cdot\rVert_p$. [L4, L8]

1.5 Under [A1] the set $\{|x_k| : k<n\}$ is nonempty and finite, so $\lVert x\rVert_\infty$ exists, is one of the $|x_k|$, and satisfies $|x_k| \le \lVert x\rVert_\infty$ for every $k<n$; in particular $\lVert x\rVert_\infty \ge 0$. [A1, L5, L6]

1.6 Under [A1], $\lVert x-y\rVert_1 = \sum_{k<n}|x_k-y_k|$ by the case $p=1$ of the definition, and that is the written expression for $d_1(x,y)$. [L1, L9]

1.7 Under [A1], $\lVert x-y\rVert_2 = \bigl(\sum_{k<n}|x_k-y_k|^{2}\bigr)^{1/2} = \sqrt{\sum_{k<n}(x_k-y_k)^{2}}$, using $|t|^{2} = t^{2}$ and the identification of the exponent $1/2$ with the nonnegative square root, and that is the written expression for $d_2(x,y)$. [L5, L8, L9]

1.8 Under [A1], $\lVert x-y\rVert_\infty = \max\{|x_k-y_k| : k<n\}$ by definition, and that is the written expression for $d_\infty(x,y)$. [L9]

2.1 $\lVert x\rVert_p = 0$ holds exactly when $S(x) = 0$, since $S(x) > 0$ would give $S(x)^{1/p} > 0$ and $0^{1/p} = 0$. [step 1.1, L1, L2]

2.2 Under [A1]: $\lVert x\rVert_\infty = 0$ forces $|x_k| \le 0$ and $|x_k| \ge 0$ for every $k<n$, hence $x = 0$; and $\lVert 0\rVert_\infty = 0$. This is (N1) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L8]

2.3 Under [A1]: for every $k<n$, $|(\lambda x)_k| = |\lambda|\,|x_k| \le |\lambda|\,\lVert x\rVert_\infty$, and choosing $j<n$ with $|x_j| = \lVert x\rVert_\infty$ gives $|(\lambda x)_j| = |\lambda|\,\lVert x\rVert_\infty$; so $|\lambda|\lVert x\rVert_\infty$ belongs to the set and bounds it above, whence $\lVert \lambda x\rVert_\infty = |\lambda|\lVert x\rVert_\infty$. This is (N2) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L6, L7]

2.4 Under [A1]: for every $k<n$, $|(x+y)_k| = |x_k+y_k| \le |x_k| + |y_k| \le \lVert x\rVert_\infty + \lVert y\rVert_\infty$; choosing $j<n$ with $|(x+y)_j| = \lVert x+y\rVert_\infty$ gives $\lVert x+y\rVert_\infty \le \lVert x\rVert_\infty + \lVert y\rVert_\infty$, which is (N3) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L6, L7]

3.1 By steps 2.1 and 1.2, $\lVert x\rVert_p = 0$ exactly when $x_k = 0$ for every $k<n$, that is exactly when $x = 0$; this is axiom (N1) for $\lVert\cdot\rVert_p$. [step 2.1, step 1.2, L8]

3.2 Steps 2.2, 2.3 and 2.4 are (N1), (N2) and (N3) for $\lVert\cdot\rVert_\infty$ under [A1], so clause 2 holds. [step 2.2, step 2.3, step 2.4, A1, L8]

4.1 If $\lambda = 0$ then $\lambda x = 0$ and both sides of (N2) are $0$ by step 3.1; if $\lambda \ne 0$ then $|\lambda| > 0$, and step 1.3 with the power laws gives $\lVert \lambda x\rVert_p = \bigl(|\lambda|^{p}S(x)\bigr)^{1/p} = \bigl(|\lambda|^{p}\bigr)^{1/p}S(x)^{1/p} = |\lambda|^{p\cdot(1/p)}\lVert x\rVert_p = |\lambda|\,\lVert x\rVert_p$; this is axiom (N2). [step 1.3, step 3.1, L1, L5, L8]

5.1 Steps 3.1, 4.1 and 1.4 are (N1), (N2) and (N3) for $\lVert\cdot\rVert_p$, so clause 1 holds. [step 1.4, step 3.1, step 4.1, L8]

6.1 Steps 1.6, 1.7 and 1.8 give clause 3, and with steps 5.1 and 3.2 all three clauses are proved; in particular the metric induced by $\lVert\cdot\rVert_2$ on $\mathbb{R}^{n}$ for $n \ge 1$ is the published $d_2$, which is the consequence recorded in the Statement. [step 5.1, step 3.2, step 1.6, step 1.7, step 1.8, L9] ∎

## Remarks

- **What the consequence does and does not license.** Because the two metric spaces are literally the same, a published theorem about $(\mathbb{R}^{n}, d_2)$ may be quoted here verbatim. It may **not** be quoted with a weaker hypothesis: [[thm-euclidean-space-complete]], [[thm-heine-borel-rn]] and [[lem-metrics-on-rn]] are all stated for $n \ge 1$ only, because $d_\infty$ is a maximum over an empty index set at $n = 0$, and every item on this page that uses one of them carries $n \ge 1$ in its own statement.

- **Clause 1 holds at $n = 0$ and clause 2 does not apply there.** At $n = 0$ every $\lVert\cdot\rVert_p$ is the zero function on the one-element space $\mathbb{R}^{0}$, which is the unique norm on the zero space ([[def-norm-and-normed-space]]); $\lVert\cdot\rVert_\infty$ is not defined there at all.

- **The route to (N3) differs between the two families, and that is not an accident.** For $\lVert\cdot\rVert_p$ the triangle inequality is Minkowski's inequality, a genuine theorem about rational powers; for $\lVert\cdot\rVert_\infty$ it is the elementary argument of step 2.4, that a maximum of sums is at most the sum of the maxima. The second argument is the one that needs a nonempty index set.
````

### `thm-continuous-image-of-a-compact-space-is-compact`

````markdown
---
id: thm-continuous-image-of-a-compact-space-is-compact
kind: theorem
title: "The image of a compact metric space under a continuous map is compact, and so is the image of any compact subset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, lem-compactness-is-intrinsic, def-metric-continuity, thm-metric-continuity-characterisations, def-metric-topology, def-isometry-and-metric-embedding, def-injection-surjection-bijection, def-metric-space]
justified_by: []
aliases: []
landmark: true
short: "continuous image of a compact space"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be continuous ([[def-metric-continuity]]). Then:

1. If $(X,d_X)$ is compact ([[def-metric-compactness]]), the image
   $f[X] \subseteq Y$ is a compact subset of $Y$.
2. More generally, if $K \subseteq X$ is a compact subset of $X$, then $f[K]$ is
   a compact subset of $Y$.

No choice principle is used.

## Facts & Assumptions

**Given:** Metric spaces $(X,d_X)$ and $(Y,d_Y)$ and a continuous $f : X \to Y$; images and preimages are written $f[\,\cdot\,]$ and $f^{-1}[\,\cdot\,]$ ([[def-injection-surjection-bijection]]).

[L1] A subset $A$ of a metric space is compact exactly when for every family $(V_i)_{i \in I}$ of open subsets of the ambient space with $A \subseteq \bigcup_{i \in I} V_i$ there are $n \in \mathbb{N}$ and $i_0, \dots, i_n \in I$ with $A \subseteq V_{i_0} \cup \dots \cup V_{i_n}$, or else $A = \emptyset$; and a space is a compact subset of itself exactly when it is a compact metric space ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

[L2] $f$ is continuous exactly when $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$ ([[thm-metric-continuity-characterisations]], [[def-metric-continuity]], [[def-metric-topology]]).

[L3] The restriction of $f$ to a metric subspace $(K,d_K)$ of $X$ is continuous as a map $(K,d_K) \to (Y,d_Y)$, since the $\varepsilon$-$\delta$ condition at a point of $K$ is the condition for $f$ at that point read for the points of $K$ only, and $d_K$ is the restriction of $d_X$ ([[def-isometry-and-metric-embedding]], [[def-metric-continuity]]).

## Proof

**Proof technique:** direct.

1.1 Assume $(X,d_X)$ compact and let $(V_i)_{i \in I}$ be a family of open subsets of $Y$ with $f[X] \subseteq \bigcup_{i \in I} V_i$. [L1]

2.1 Each $f^{-1}[V_i]$ is open in $X$, and $X = \bigcup_{i \in I} f^{-1}[V_i]$, because every $x \in X$ has $f(x) \in f[X]$ and so $f(x) \in V_i$ for some $i$. [L2, step 1.1]

3.1 If $X = \emptyset$ then $f[X] = \emptyset$ and there is nothing to prove; otherwise compactness of $X$, read against the indexed family of step 2.1, gives $n \in \mathbb{N}$ and $i_0, \dots, i_n \in I$ with $X = f^{-1}[V_{i_0}] \cup \dots \cup f^{-1}[V_{i_n}]$. [L1, step 2.1]

4.1 Every $y \in f[X]$ is $f(x)$ for some $x \in X$, and that $x$ lies in some $f^{-1}[V_{i_j}]$, so $y \in V_{i_j}$; hence $f[X] \subseteq V_{i_0} \cup \dots \cup V_{i_n}$ and $f[X]$ is a compact subset of $Y$: claim 1. [L1, step 3.1]

5.1 For claim 2, let $K \subseteq X$ be a compact subset, so that $(K,d_K)$ is a compact metric space; the restriction of $f$ to $K$ is continuous, and its image is $f[K]$, so claim 1 applied to that restriction gives that $f[K]$ is a compact subset of $Y$. [L1, L3, step 4.1] ∎

## Remarks

**Compactness travels forwards, not backwards.** The preimage of a compact set under a continuous map need not be compact: a constant map from an unbounded space has a one-point image. What claim 1 uses is that preimages of *open* sets are open, which is the content of continuity, together with the fact that a finite subcover upstairs projects to a finite subcover downstairs.

**Consequences on this page.** Claim 1 with $Y = \mathbb{R}$ gives the extreme value theorem ([[thm-extreme-value-metric]]), and claim 2 is what makes the inverse of a continuous bijection from a compact space continuous ([[thm-continuous-bijection-from-a-compact-space-has-continuous-inverse]]).
````

### `thm-extreme-value-metric`

````markdown
---
id: thm-extreme-value-metric
kind: theorem
title: "A continuous real-valued function on a nonempty compact metric space is bounded and attains a greatest and a least value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded, lem-compactness-is-intrinsic, lem-real-line-is-a-metric-space, def-metric-continuity, def-metric-compactness, def-bounded-set, def-infimum, lem-sup-epsilon, lem-inf-epsilon, def-max-min, def-complete-ordered-field, thm-metric-closure-characterisation, def-metric-interior-closure-boundary, def-metric-topology, def-metric-ball, def-interval, def-metric-bounded-diameter, def-isometry-and-metric-embedding, def-metric-space]
justified_by: []
forward_refs: [cex-evt-fails-without-compactness]
aliases: [thm-evt-metric]
landmark: true
short: "extreme value theorem (metric)"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a nonempty compact metric space ([[def-metric-compactness]],
[[def-metric-space]]) and let $f : X \to \mathbb{R}$ be continuous
([[def-metric-continuity]]), $\mathbb{R}$ carrying its usual metric
$d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]). Then the
image $f[X]$ is bounded above and below ([[def-bounded-set]]), and it has a
maximum and a minimum ([[def-max-min]]): there are points
$x_{\max}, x_{\min} \in X$ with

$$f(x_{\min}) \;\le\; f(x) \;\le\; f(x_{\max}) \qquad \text{for every } x \in X,$$

and then $f(x_{\max}) = \sup f[X]$ and $f(x_{\min}) = \inf f[X]$
([[def-complete-ordered-field]], [[def-infimum]]).

Nonemptiness of $X$ is a hypothesis and not an oversight: for $X = \emptyset$ the
image is empty and has neither a supremum nor a maximum. No choice principle is
used.

## Facts & Assumptions

**Given:** A nonempty compact metric space $(X,d)$ and a continuous $f : X \to \mathbb{R}$.

[L1] The image of a compact metric space under a continuous map is a compact subset of the codomain ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[L2] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]], [[lem-compactness-is-intrinsic]], [[def-metric-bounded-diameter]]).

[L3] In $(\mathbb{R}, d_{\mathbb{R}})$ the ball $B(x_0,\rho)$ is the interval $(x_0-\rho, x_0+\rho)$ ([[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-interval]]).

[L4] A nonempty subset of $\mathbb{R}$ that is bounded above has a supremum, and one bounded below has an infimum ([[def-complete-ordered-field]], [[def-infimum]], [[def-bounded-set]]).

[L5] For $S$ nonempty and bounded above with supremum $u$: for every real $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s \le u$; dually for the infimum ([[lem-sup-epsilon]], [[lem-inf-epsilon]]).

[L6] $x$ lies in the closure of $S$ exactly when every ball around $x$ meets $S$, and a closed set contains its closure ([[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]], [[def-metric-topology]]).

[L7] A subset of a metric space is compact exactly when the corresponding metric subspace is compact, the subspace metric being the restriction ([[def-metric-compactness]], [[def-isometry-and-metric-embedding]]).

## Proof

**Proof technique:** direct.

1.1 $f[X]$ is a compact subset of $(\mathbb{R}, d_{\mathbb{R}})$, and it is nonempty because $X$ is. [L1, L7]

2.1 So $f[X]$ is closed in $\mathbb{R}$ and bounded as a subset of the metric space $(\mathbb{R},d_{\mathbb{R}})$: there are $x_0 \in \mathbb{R}$ and a real $\rho > 0$ with $f[X] \subseteq B(x_0,\rho) = (x_0-\rho,\ x_0+\rho)$. [L2, L3, step 1.1]

3.1 Hence $x_0 + \rho$ is an upper bound and $x_0 - \rho$ a lower bound of $f[X]$, so $f[X]$ is bounded above and below, and being nonempty it has a supremum $u$ and an infimum $\ell$. [L4, step 2.1]

4.1 For every real $\varepsilon > 0$ there is $t \in f[X]$ with $u - \varepsilon < t \le u$, so $|t - u| < \varepsilon$ and $t \in B(u,\varepsilon) \cap f[X]$; therefore every ball around $u$ meets $f[X]$ and $u$ lies in the closure of $f[X]$. [L3, L5, L6, step 3.1]

5.1 Since $f[X]$ is closed, $u \in f[X]$; so $u$ is a member of $f[X]$ bounding it above, that is $u = \max f[X]$, and $u = f(x_{\max})$ for some $x_{\max} \in X$. [L6, step 2.1, step 4.1]

6.1 The same argument with $\ell$ in place of $u$, using the infimum form of step 4.1, gives $\ell \in f[X]$, so $\ell = \min f[X]$ and $\ell = f(x_{\min})$ for some $x_{\min} \in X$. [L5, L6, step 3.1, step 5.1]

7.1 For every $x \in X$ the value $f(x)$ lies in $f[X]$, hence $f(x_{\min}) = \ell \le f(x) \le u = f(x_{\max})$, which is the assertion, with $f(x_{\max}) = \sup f[X]$ and $f(x_{\min}) = \inf f[X]$. [L4, step 3.1, step 5.1, step 6.1] ∎

## Remarks

**Compactness is what is used, not boundedness of the domain.** A bounded non-compact domain is not enough: on the interval $(0,1)$ the identity map is continuous and bounded with no greatest value, and $x \mapsto 1/x$ is continuous and unbounded ([[cex-evt-fails-without-compactness]]).

**Why the supremum has to be shown to be attained at all.** $\sup f[X]$ exists as soon as $f[X]$ is nonempty and bounded above, which needs only boundedness; what compactness adds is that $f[X]$ is closed, and a closed set contains the supremum it approaches. Steps 4.1 and 5.1 are exactly that passage, and they are where the theorem is more than the least-upper-bound property.
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

### `thm-heine-cantor-metric`

````markdown
---
id: thm-heine-cantor-metric
kind: theorem
title: "Heine-Cantor: a continuous map from a compact metric space to any metric space is uniformly continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, thm-lebesgue-number-lemma, def-metric-continuity, def-metric-uniform-continuity, def-metric-ball, def-metric-bounded-diameter, def-metric-topology, thm-metric-open-set-algebra, lem-metric-nonnegativity, def-metric-space]
justified_by: []
forward_refs: [cex-heine-cantor-fails-without-compactness]
aliases: [thm-heine-cantor]
landmark: true
short: "Heine-Cantor (metric)"
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
    - title: "Heine-Cantor theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem"
    - title: "Lebesgue's number lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lebesgue%27s_number_lemma"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ be a compact metric space ([[def-metric-compactness]]), let
$(Y,d_Y)$ be any metric space ([[def-metric-space]]) and let $f : X \to Y$ be
continuous ([[def-metric-continuity]]). Then $f$ is uniformly continuous
([[def-metric-uniform-continuity]]).

No choice principle is used: the cover built below is cut out by a property, and
the Lebesgue number lemma it is fed to is itself choice free
([[thm-lebesgue-number-lemma]]).

## Facts & Assumptions

**Given:** A compact metric space $(X,d_X)$, a metric space $(Y,d_Y)$ and a continuous $f : X \to Y$.

[L1] $f$ is continuous at $a$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $f[B_X(a,\delta)] \subseteq B_Y(f(a),\varepsilon)$ ([[def-metric-continuity]], [[def-metric-ball]]).

[L2] $f$ is uniformly continuous when for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that $d_X(x,x') < \delta$ implies $d_Y(f(x),f(x')) < \varepsilon$, for all $x,x' \in X$ ([[def-metric-uniform-continuity]]).

[L3] Every open cover of a compact metric space has a Lebesgue number: a real $\delta > 0$ such that every nonempty subset of diameter less than $\delta$ lies in a single member of the cover ([[thm-lebesgue-number-lemma]], [[def-metric-compactness]]).

[L4] Open balls are open ([[thm-metric-open-set-algebra]], [[def-metric-topology]]).

[L5] For nonempty bounded $A$, $\operatorname{diam}(A) = \sup\{d_X(u,v) : u,v \in A\}$; in particular $\operatorname{diam}(\{x,x'\}) = d_X(x,x')$, the set of distances being $\{0, d_X(x,x')\}$ and a metric being nonnegative ([[def-metric-bounded-diameter]], [[lem-metric-nonnegativity]]).

[L6] A metric is symmetric and satisfies the triangle inequality ([[def-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 If $X = \emptyset$ the condition of uniform continuity holds vacuously, so assume $X \ne \emptyset$, and let $\varepsilon > 0$ be real. [L2]

2.1 Put $\mathcal{U} := \{\, U \subseteq X : U \text{ is open in } X \text{ and } f[U] \subseteq B_Y(z, \varepsilon/2) \text{ for some } z \in Y \,\}$, a family cut out by a property and not by a selection. [L1, step 1.1]

3.1 $\mathcal{U}$ is an open cover of $X$: given $x \in X$, continuity at $x$ supplies a real $\delta_x > 0$ with $f[B_X(x,\delta_x)] \subseteq B_Y(f(x), \varepsilon/2)$, and $B_X(x,\delta_x)$ is open and contains $x$, so it belongs to $\mathcal{U}$. [L1, L4, step 2.1]

4.1 By the Lebesgue number lemma there is a real $\delta > 0$ such that every nonempty subset of $X$ of diameter less than $\delta$ is contained in a single member of $\mathcal{U}$. [L3, step 3.1]

5.1 Let $x, x' \in X$ with $d_X(x,x') < \delta$; the set $\{x,x'\}$ is nonempty with diameter $d_X(x,x') < \delta$, so $\{x,x'\} \subseteq U$ for some $U \in \mathcal{U}$, and there is $z \in Y$ with $f[U] \subseteq B_Y(z,\varepsilon/2)$. [L5, step 2.1, step 4.1]

6.1 Then $d_Y(f(x),z) < \varepsilon/2$ and $d_Y(z,f(x')) < \varepsilon/2$, so $d_Y(f(x),f(x')) \le d_Y(f(x),z) + d_Y(z,f(x')) < \varepsilon$; as $\varepsilon > 0$ was arbitrary, $f$ is uniformly continuous. [L2, L6, step 5.1] ∎

## Remarks

**The centre $z$ is not chosen, and that is why the proof is choice free.** The family $\mathcal{U}$ is defined by the *existence* of a suitable $z$, and the argument instantiates that existential once, at step 5.1, for the single member $U$ that the Lebesgue number produced. No function assigning a centre to every member of $\mathcal{U}$ is ever needed.

**Compactness is not removable.** The map $x \mapsto 1/x$ is continuous on the interval $(0,1)$ and is not uniformly continuous there ([[cex-heine-cantor-fails-without-compactness]]); $(0,1)$ is not compact.

**The codomain is arbitrary.** Nothing is assumed about $(Y,d_Y)$ — not completeness, not boundedness, not compactness. All the work is done on the domain side, which is where the finite subcover lives.
````

### `thm-multidimensional-riemann-criterion`

````markdown
---
id: thm-multidimensional-riemann-criterion
kind: theorem
title: "Riemann's criterion on a nondegenerate rectangle in $\\mathbb{R}^m$: integrability is equivalent to arbitrarily small Darboux gaps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-multidimensional-darboux-integral, def-multidimensional-darboux-sums, lem-multidimensional-refinement-inequalities, def-multidimensional-grid-partition, lem-sup-epsilon, lem-inf-epsilon]
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
pipeline_run: null
---

## Statement

A bounded $f:Q\to\mathbb R$ on a nondegenerate rectangle is Riemann
integrable if and only if, for every $\varepsilon>0$, some grid $P$ satisfies
$U(f,P)-L(f,P)<\varepsilon$.

## Facts & Assumptions

**Given:** A bounded function on a nondegenerate rectangle.

[L1] The lower and upper integrals are the supremum and infimum in [[def-multidimensional-darboux-integral]].

[L2] Near-supremum and near-infimum elements exist ([[lem-sup-epsilon]], [[lem-inf-epsilon]]).

[L3] Common refinements improve both sums ([[lem-multidimensional-refinement-inequalities]], [[def-multidimensional-grid-partition]]).

## Proof

**Proof technique:** direct.

1.1 If the two integrals equal $I$, choose $P_-$ with $L(f,P_-)>I-\varepsilon/2$ and $P_+$ with $U(f,P_+)<I+\varepsilon/2$. A common refinement $P$ has gap below $\varepsilon$.  [L1, L2, L3]

1.2 Conversely, a common refinement shows every lower sum is at most every upper sum, so for every $P$, $0\le\overline{\int_Q}f-\underline{\int_Q}f\le U(f,P)-L(f,P)$. Arbitrarily small gaps force the integral difference to be $0$.   [L1, L3, given]

2.1 Thus the conditions are equivalent.  [step 1.1, step 1.2] ∎
````


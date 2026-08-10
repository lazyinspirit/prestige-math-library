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

- critical risk (9): 11 declared dependencies; 11 cited facts; boundary-sensitive language; analytic limiting/completeness language
- top-20 manifest-edge consumer (11 outgoing relationships)

## Target item — `cor-one-dimensional-and-multidimensional-riemann-agree`

Normalized current SHA-256: `39229c2ff3e65782a08d205b6eb7fa057df02d51c32f954efa031e6637f36e47`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cor-one-dimensional-and-multidimensional-riemann-agree
kind: corollary
title: "At $m=1$, nondegenerate multidimensional rectangles, grid sums and the integral are exactly the published one-dimensional notions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-multidimensional-darboux-equals-riemann, def-multidimensional-rectangle-and-volume, def-multidimensional-grid-partition, def-multidimensional-darboux-sums, def-multidimensional-darboux-integral, def-multidimensional-tagged-partition-and-riemann-sum, def-darboux-integral, def-tagged-partition-and-riemann-sum, thm-darboux-equals-riemann, lem-metrics-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics]
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

Under $\mathbb R^1\cong\mathbb R$, nondegenerate multidimensional rectangles,
grids, Darboux sums, tagged sums, integrability, and integral values are exactly
the published one-dimensional notions on intervals $[a,b]$ with $a<b$.

## Facts & Assumptions

**Given:** The standard isometry $\mathbb R^1\cong\mathbb R$ ([[lem-metrics-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

[L1] The one-dimensional notions are [[def-darboux-integral]], [[def-tagged-partition-and-riemann-sum]], and [[thm-darboux-equals-riemann]].

[L2] A multidimensional rectangle is a finite coordinate product with product volume; a grid is a coordinatewise partition whose cells split that volume; and the Darboux and tagged notions are the cited cell sums and their extrema or mesh limits ([[def-multidimensional-rectangle-and-volume]], [[def-multidimensional-grid-partition]], [[def-multidimensional-darboux-sums]], [[def-multidimensional-darboux-integral]], [[def-multidimensional-tagged-partition-and-riemann-sum]], [[thm-multidimensional-darboux-equals-riemann]]).

## Proof

**Proof technique:** direct.

1.1 With one coordinate, nondegeneracy says $a<b$. A grid is one ordinary partition of $[a,b]$, its cells are its subintervals, and their volumes are their lengths. The iterated cell sum has one index and is the ordinary finite sum.  [given, L1, L2]

2.1 Therefore the lower, upper, and tagged sums agree term for term; taking extrema or mesh limits gives identical integrability classes and values.  [step 1.1, L1, L2] ∎
````

## Wave 13 provenance row

```json
{
  "id": "cor-one-dimensional-and-multidimensional-riemann-agree",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_rirect.html"
  ],
  "rationale": "The source's one- and several-variable definitions coincide under R^1≅R. The item isolates that dictionary as a convention bridge and verifies each component directly.",
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
      "source": "def-darboux-integral",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]). Write $\\mathcal{P}$ for the set of all partitions of\n$[a,b]$ ([[def-partition-and-refinement]]) and put\n\n$$\\mathcal{L} \\;:=\\; \\{\\, L(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}, \\qquad \\mathcal{U} \\;:=\\; \\{\\, U(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}$$\n\nfor the sets of lower and of upper Darboux sums ([[def-darboux-sums]]).\n\n### Both extrema exist\n\n**$\\mathcal{P}$ is nonempty**: the pair $(1, t)$ with $t_0 := a$ and $t_k := b$\nfor $k \\ge 1$ is a partition of $[a,b]$, since $a < b$. So $\\mathcal{L}$ and\n$\\mathcal{U}$ are nonempty.\n\n**$\\mathcal{L}$ is bounded above and $\\mathcal{U}$ is bounded below.** Fix any\n$Q \\in \\mathcal{P}$. By claim 2 of [[lem-refinement-inequalities]],\n$L(f,P) \\le U(f,Q)$ for every $P \\in \\mathcal{P}$, so $U(f,Q)$ is an upper bound\nof $\\mathcal{L}$; and $L(f,Q) \\le U(f,P)$ for every $P$, so $L(f,Q)$ is a lower\nbound of $\\mathcal{U}$.\n\nHence a nonempty set bounded above has a supremum\n([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum\n([[thm-infimum-property]], [[def-infimum]]), each unique ([[lem-sup-unique]]).\nThe **lower** and **upper Darboux integrals** of $f$ over $[a,b]$ are the real\nnumbers\n\n$$\\underline{\\int_a^b} f \\;:=\\; \\sup \\mathcal{L} \\;=\\; \\sup_{P} L(f,P), \\qquad \\overline{\\int_a^b} f \\;:=\\; \\inf \\mathcal{U} \\;=\\; \\inf_{P} U(f,P) .$$\n\n### The lower integral never exceeds the upper one\n\n$$\\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f .$$\n\nIndeed, for each fixed $Q \\in \\mathcal{P}$ the number $U(f,Q)$ is an upper bound\nof $\\mathcal{L}$, so the least upper bound satisfies\n$\\underline{\\int_a^b} f \\le U(f,Q)$. As $Q$ was arbitrary, $\\underline{\\int_a^b}f$\nis a lower bound of $\\mathcal{U}$, and the greatest lower bound satisfies\n$\\underline{\\int_a^b} f \\le \\overline{\\int_a^b} f$ ([[def-infimum]]).\n\nMoreover, for **every** partition $P$,\n\n$$L(f,P) \\;\\le\\; \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f \\;\\le\\; U(f,P) ,$$\n\nthe outer inequalities because a member of a set is at most its supremum and at\nleast its infimum.\n\n### Integrability\n\n$f$ is **Darboux integrable on $[a,b]$**, and on this page simply\n**integrable**, when\n\n$$\\underline{\\int_a^b} f \\;=\\; \\overline{\\int_a^b} f ,$$\n\nand then the common value is written\n\n$$\\int_a^b f \\qquad \\text{or} \\qquad \\int_a^b f(x)\\,\\mathrm{d}x ,$$\n\nthe **integral of $f$ over $[a,b]$**. It is a single well-determined real\nnumber, being the common value of two numbers each of which is unique\n([[lem-sup-unique]]). Without the displayed equality the symbol $\\int_a^b f$ is\nnot defined and is never written.\n\n**The inequality above is the whole difficulty.** By the previous paragraph\nintegrability is *never* a question of one integral exceeding the other, only of\nthe gap $\\overline{\\int_a^b} f - \\underline{\\int_a^b} f \\ge 0$ being $0$; and by\n[[thm-riemann-criterion]] that gap is $0$ exactly when a single partition can be\nfound making $U(f,P) - L(f,P)$ small. Whether that is possible is settled\ncompletely, in terms of the discontinuities of $f$, by\n[[thm-lebesgue-criterion]].\n\n**\"Riemann integrable\" means the same thing here.** The definition above is\nDarboux's. Riemann's own definition, in terms of tagged partitions of small\nmesh, is [[def-tagged-partition-and-riemann-sum]], and the two define the same\nclass of functions with the same integral by [[thm-darboux-equals-riemann]].\nUntil that theorem is proved the two phrases are kept apart; after it they are\nused interchangeably, as they are throughout the literature.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-tagged-partition-and-riemann-sum",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals and let $P = (n,t)$ be a partition of $[a,b]$, with\nsubintervals $I_i = [t_i,t_{i+1}]$ and lengths $\\Delta_i = t_{i+1} - t_i$ for\n$i < n$ ([[def-partition-and-refinement]]).\n\nA **tagging** of $P$ is a sequence $\\xi : \\mathbb{N} \\to \\mathbb{R}$\n([[def-sequence]]) with\n\n$$\\xi_i \\;\\in\\; I_i \\qquad \\text{for every } i < n, \\qquad \\xi_k := b \\ \\text{ for } k \\ge n ,$$\n\nthe second clause being the same bookkeeping tail convention that\n[[def-partition-and-refinement]] uses, so that $\\xi$ is a genuine sequence and no\nindex above $n$ is ever read. The pair $(P,\\xi)$ is a **tagged partition** of\n$[a,b]$, and $\\xi_i$ is the **tag** of the $i$-th subinterval. The **mesh** of a\ntagged partition is the mesh $\\|P\\|$ of its underlying partition.\n\n**Taggings exist, and no choice is involved in producing one.** Setting\n$\\xi_i := t_i$ for $i < n$ and $\\xi_k := b$ for $k \\ge n$ defines a tagging,\nsince $t_i \\in [t_i,t_{i+1}] = I_i$ ([[def-interval]]). So every partition\ncarries at least one tagging, exhibited by a formula. What *is* a selection is\nchoosing a tag in each subinterval subject to a condition, as\n[[thm-darboux-equals-riemann]] does; there the family of choices is finite and\nthe selection is a theorem of ZF.\n\nFor $f : [a,b] \\to \\mathbb{R}$ and a tagged partition $(P,\\xi)$ the **Riemann\nsum** of $f$ is\n\n$$S(f,P,\\xi) \\;:=\\; \\sum_{i<n} f(\\xi_i)\\,\\Delta_i ,$$\n\nthe finite sum of [[def-finite-sum]], indexed by $i \\in \\mathbb{N}$ with $i < n$.\nIt is a real number, being a finite sum of reals, and it is defined for **every**\n$f$, bounded or not: no supremum or infimum of $f$ occurs in it.\n\n### A Riemann sum lies between the Darboux sums of the same partition\n\nSuppose in addition that $f$ is bounded ([[def-bounded-set]]), so that the\nDarboux sums of [[def-darboux-sums]] are defined. Then for every tagging $\\xi$\nof $P$,\n\n$$L(f,P) \\;\\le\\; S(f,P,\\xi) \\;\\le\\; U(f,P) .$$\n\nIndeed $\\xi_i \\in I_i$ gives $m_i \\le f(\\xi_i) \\le M_i$ ([[def-darboux-sums]]),\nand multiplying by $\\Delta_i > 0$ and summing over $i < n$ preserves the two\ninequalities, by monotonicity of finite sums, clause 4 of\n[[lem-finite-sum-laws]], and the order axioms ([[def-ordered-field]],\n[[def-complete-ordered-field]]).\n\nThis one line is the whole of the easy half of\n[[thm-darboux-equals-riemann]]: whatever the tags, a Riemann sum is trapped\nbetween the two Darboux sums, so control of $U(f,P) - L(f,P)$ is control of\nevery Riemann sum over $P$ at once.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-darboux-equals-riemann",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]) and let $I \\in \\mathbb{R}$. The following are equivalent.\n\n1. **(Darboux)** $f$ is Darboux integrable on $[a,b]$ with\n   $\\int_a^b f = I$ ([[def-darboux-integral]]).\n2. **(Riemann)** For every real $\\varepsilon > 0$ there is a real $\\delta > 0$\n   such that\n   $$\\bigl|\\,S(f,P,\\xi) - I\\,\\bigr| \\;<\\; \\varepsilon$$\n   for **every** tagged partition $(P,\\xi)$ of $[a,b]$ with $\\|P\\| < \\delta$\n   ([[def-tagged-partition-and-riemann-sum]], [[def-partition-and-refinement]]).\n\n**The quantifier over tagged partitions is universal, and that is the content.**\nCondition 2 constrains every tagged partition of small mesh at once, tags\nincluded; it is not a statement about one sequence of tagged partitions, and it\ncannot be weakened to one. The companion page of this pair exhibits a\nnon-integrable function whose Riemann sums are constant along such a sequence.\n\n**Boundedness is a hypothesis of both conditions as stated here.** Condition 1\npresupposes it, since the Darboux sums of an unbounded function do not exist\n([[def-darboux-sums]]); condition 2 makes sense for unbounded $f$ as well, and\nin fact implies boundedness, but that implication is not proved here and is not\nused: every application on this page starts from a bounded $f$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-multidimensional-rectangle-and-volume",
      "source_section": "Definition",
      "quote": "Fix a natural number $m\\ge1$. For $a,b\\in\\mathbb R^m$ with $a_j\\le b_j$ for $j<m$, define\n$$[a,b]:=\\{x\\in\\mathbb R^m:a_j\\le x_j\\le b_j\\ (j<m)\\},\\qquad \\operatorname{vol}[a,b]:=\\prod_{j<m}(b_j-a_j).$$\nThe product is the recursively defined finite product of [[def-finite-sum]]. The rectangle is **nondegenerate** when every $a_j<b_j$, and it is a **cube** when all side lengths are equal.\n\nEvery factor is nonnegative, so volume is nonnegative. For a coordinate index $r<m$, cutting at $c\\in[a_r,b_r]$ gives two rectangles whose volumes add to the original, by distributivity in that factor and [[lem-finite-sum-laws]]. Under the standard identification $\\mathbb R^1\\cong\\mathbb R$ ([[lem-metrics-on-rn]], [[def-p-norms-on-rn]]), this is the interval $[a_0,b_0]$ and its length.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-multidimensional-grid-partition",
      "source_section": "Definition",
      "quote": "A **grid partition** $P$ of a nondegenerate rectangle $Q=[a,b]\\subseteq\\mathbb R^m$ is a family, one for each $j<m$, of one-dimensional partitions $a_j=t_{j,0}<\\cdots<t_{j,n_j}=b_j$ ([[def-partition-and-refinement]]). For a multi-index $i=(i_0,\\ldots,i_{m-1})$ with $i_j<n_j$, its cell is\n$$Q_i:=\\prod_{j<m}[t_{j,i_j},t_{j,i_j+1}].$$\nA sum over cells means the iterated recursive sum $\\sum_{i_0<n_0}\\cdots\\sum_{i_{m-1}<n_{m-1}}$ of [[def-finite-sum]]. The **mesh** is $\\max_{j<m,i_j<n_j}(t_{j,i_j+1}-t_{j,i_j})$, which exists by [[lem-finite-set-has-max]] and is the largest $d_\\infty$-diameter ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).\n\nRefinement is coordinatewise. Coordinatewise union gives a common refinement. The cells cover $Q$ and have pairwise disjoint interiors. Repeated splitting of finite sums and induction on $m$ give\n$$\\sum_i\\operatorname{vol}(Q_i)=\\operatorname{vol}(Q).$$\nThese statements include boundary overlaps: boundaries may meet, but interiors do not, and volume splitting is algebraic.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-multidimensional-darboux-sums",
      "source_section": "Definition",
      "quote": "Let $f:Q\\to\\mathbb R$ be bounded on a nondegenerate rectangle and let $P$ be a grid. For each cell $Q_i$, put\n$$m_i:=\\inf f[Q_i],\\quad M_i:=\\sup f[Q_i],\\quad L(f,P):=\\sum_i m_i\\operatorname{vol}(Q_i),\\quad U(f,P):=\\sum_i M_i\\operatorname{vol}(Q_i).$$\nThe extrema exist as finite reals because each nonempty image is bounded ([[def-bounded-set]], [[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]]), and the sums use the iterated convention of [[def-multidimensional-grid-partition]].\n\nSince $m_i\\le M_i$ and cell volumes are nonnegative, $L(f,P)\\le U(f,P)$. Moreover\n$$U(f,P)-L(f,P)=\\sum_i(M_i-m_i)\\operatorname{vol}(Q_i),$$\nthe sum of cell oscillations weighted by volume ([[lem-finite-sum-laws]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-multidimensional-darboux-integral",
      "source_section": "Definition",
      "quote": "For a bounded function $f:Q\\to\\mathbb R$ on a nondegenerate rectangle\n$Q\\subseteq\\mathbb R^m$, define\n$$\\underline{\\int_Q}f:=\\sup_P L(f,P),\\qquad \\overline{\\int_Q}f:=\\inf_P U(f,P),$$\nover all grid partitions $P$ of $Q$. The grid family is nonempty, since the endpoints in each coordinate give a one-cell grid. Every lower sum is at most every upper sum by a common refinement and [[lem-multidimensional-refinement-inequalities]], so the two sets of sums are nonempty and bounded and the extrema exist ([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]]).\n\nThe function is **Riemann integrable over $Q$** when the two values agree.\nTheir unique common real is $\\int_Q f$. No integral is defined here for a\ndegenerate rectangle, because the grid definition requires every coordinate\ninterval to have distinct endpoints. This is the multidimensional Darboux\ndefinition; its agreement with the published one-dimensional definition is\nproved separately.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-multidimensional-tagged-partition-and-riemann-sum",
      "source_section": "Definition",
      "quote": "A **tagging** of a grid $P$ assigns to every cell $Q_i$ a point $\\xi_i\\in Q_i$. The lower corner is a canonical tagging, so taggings exist without choice. The **Riemann sum** is\n$$S(f,P,\\xi):=\\sum_i f(\\xi_i)\\operatorname{vol}(Q_i),$$\nwith the iterated sum convention of [[def-multidimensional-grid-partition]].\n\nThe tagged sums **converge with mesh to $I$** if for every $\\varepsilon>0$ some $\\delta>0$ makes $|S(f,P,\\xi)-I|<\\varepsilon$ for every tagged grid with mesh below $\\delta$. Finite cellwise selections used in proofs are licensed by [[lem-finite-choice]] and [[def-choice-function]], not by countable choice.\n\nFor bounded $f$, each tag lies in its cell, so termwise inequalities and nonnegative volumes give\n$$L(f,P)\\le S(f,P,\\xi)\\le U(f,P)$$\n([[def-multidimensional-darboux-sums]], [[def-bounded-set]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-multidimensional-darboux-equals-riemann",
      "source_section": "Statement",
      "quote": "A bounded function on a nondegenerate rectangle is Darboux integrable with\nvalue $I$ if and only if all tagged grid sums converge with mesh to $I$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "With one coordinate, nondegeneracy says $a<b$. A grid is one ordinary partition of $[a,b]$, its cells are its subintervals, and their volumes are their lengths. The iterated cell sum has one index and is the ordinary finite sum. ",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Therefore the lower, upper, and tagged sums agree term for term; taking extrema or mesh limits gives identical integrability classes and values. ",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L1",
        "L2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "cor-one-dimensional-and-multidimensional-riemann-agree: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Under $\\mathbb R^1\\cong\\mathbb R$, nondegenerate multidimensional rectangles, grids, Darboux sums, tagged sums, integrability, and integral values are exactly the published one-dimensional notions on intervals $[a,b]$ wi"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "cor-one-dimensional-and-multidimensional-riemann-agree: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: Under $\\mathbb R^1\\cong\\mathbb R$, nondegenerate multidimensional rectangles, grids, Darboux sums, tagged sums, integrability, and integral values are exactly the published one-dimensional notions on intervals $[a,b]$ wi"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "cor-one-dimensional-and-multidimensional-riemann-agree: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Under $\\mathbb R^1\\cong\\mathbb R$, nondegenerate multidimensional rectangles, grids, Darboux sums, tagged sums, integrability, and integral values are exactly the published one-dimensional notions on intervals $[a,b]$ wi"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement: degeneracy is explicitly excluded or separated by the hypotheses: Under $\\mathbb R^1\\cong\\mathbb R$, nondegenerate multidimensional rectangles, grids, Darboux sums, tagged sums, integrability, and integral values are exactly the published one-dimensional notions on intervals $[a,b]$ wi"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "cor-one-dimensional-and-multidimensional-riemann-agree: no interval or radial endpoint is part of the conclusion; checked against the Statement: Under $\\mathbb R^1\\cong\\mathbb R$, nondegenerate multidimensional rectangles, grids, Darboux sums, tagged sums, integrability, and integral values are exactly the published one-dimensional notions on intervals $[a,b]$ wi"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "cor-one-dimensional-and-multidimensional-riemann-agree: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: Under $\\mathbb R^1\\cong\\mathbb R$, nondegenerate multidimensional rectangles, grids, Darboux sums, tagged sums, integrability, and integral values are exactly the published one-dimensional notions on intervals $[a,b]$ wi"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "cor-one-dimensional-and-multidimensional-riemann-agree: the Statement is not an equivalence, so there is no forward implication obligation: Under $\\mathbb R^1\\cong\\mathbb R$, nondegenerate multidimensional rectangles, grids, Darboux sums, tagged sums, integrability, and integral values are exactly the published one-dimensional notions on intervals $[a,b]$ wi"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "cor-one-dimensional-and-multidimensional-riemann-agree: the Statement is not an equivalence, so there is no reverse implication obligation: Under $\\mathbb R^1\\cong\\mathbb R$, nondegenerate multidimensional rectangles, grids, Darboux sums, tagged sums, integrability, and integral values are exactly the published one-dimensional notions on intervals $[a,b]$ wi"
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cor-one-dimensional-and-multidimensional-riemann-agree",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-multidimensional-darboux-equals-riemann",
    "declared_target": "thm-multidimensional-darboux-equals-riemann",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-one-dimensional-and-multidimensional-riemann-agree",
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
    "source": "cor-one-dimensional-and-multidimensional-riemann-agree",
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
    "source": "cor-one-dimensional-and-multidimensional-riemann-agree",
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
    "source": "cor-one-dimensional-and-multidimensional-riemann-agree",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-multidimensional-darboux-integral",
    "declared_target": "def-multidimensional-darboux-integral",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-one-dimensional-and-multidimensional-riemann-agree",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-multidimensional-tagged-partition-and-riemann-sum",
    "declared_target": "def-multidimensional-tagged-partition-and-riemann-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-one-dimensional-and-multidimensional-riemann-agree",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
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
    "source": "cor-one-dimensional-and-multidimensional-riemann-agree",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-tagged-partition-and-riemann-sum",
    "declared_target": "def-tagged-partition-and-riemann-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-one-dimensional-and-multidimensional-riemann-agree",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-darboux-equals-riemann",
    "declared_target": "thm-darboux-equals-riemann",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-one-dimensional-and-multidimensional-riemann-agree",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "lem-metrics-on-rn",
    "declared_target": "lem-metrics-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-one-dimensional-and-multidimensional-riemann-agree",
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
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (11)

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

### `def-multidimensional-darboux-integral`

````markdown
---
id: def-multidimensional-darboux-integral
kind: definition
title: "The lower and upper Darboux integrals over a nondegenerate rectangle in $\\mathbb{R}^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-darboux-sums, lem-multidimensional-refinement-inequalities, def-multidimensional-grid-partition, def-complete-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique, def-bounded-set]
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

For a bounded function $f:Q\to\mathbb R$ on a nondegenerate rectangle
$Q\subseteq\mathbb R^m$, define
$$\underline{\int_Q}f:=\sup_P L(f,P),\qquad \overline{\int_Q}f:=\inf_P U(f,P),$$
over all grid partitions $P$ of $Q$. The grid family is nonempty, since the endpoints in each coordinate give a one-cell grid. Every lower sum is at most every upper sum by a common refinement and [[lem-multidimensional-refinement-inequalities]], so the two sets of sums are nonempty and bounded and the extrema exist ([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]]).

The function is **Riemann integrable over $Q$** when the two values agree.
Their unique common real is $\int_Q f$. No integral is defined here for a
degenerate rectangle, because the grid definition requires every coordinate
interval to have distinct endpoints. This is the multidimensional Darboux
definition; its agreement with the published one-dimensional definition is
proved separately.
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

### `def-multidimensional-tagged-partition-and-riemann-sum`

````markdown
---
id: def-multidimensional-tagged-partition-and-riemann-sum
kind: definition
title: "Tagged grid partitions and Riemann sums in $\\mathbb{R}^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-grid-partition, def-multidimensional-darboux-sums, def-multidimensional-rectangle-and-volume, lem-finite-choice, def-choice-function, def-bounded-set]
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

A **tagging** of a grid $P$ assigns to every cell $Q_i$ a point $\xi_i\in Q_i$. The lower corner is a canonical tagging, so taggings exist without choice. The **Riemann sum** is
$$S(f,P,\xi):=\sum_i f(\xi_i)\operatorname{vol}(Q_i),$$
with the iterated sum convention of [[def-multidimensional-grid-partition]].

The tagged sums **converge with mesh to $I$** if for every $\varepsilon>0$ some $\delta>0$ makes $|S(f,P,\xi)-I|<\varepsilon$ for every tagged grid with mesh below $\delta$. Finite cellwise selections used in proofs are licensed by [[lem-finite-choice]] and [[def-choice-function]], not by countable choice.

For bounded $f$, each tag lies in its cell, so termwise inequalities and nonnegative volumes give
$$L(f,P)\le S(f,P,\xi)\le U(f,P)$$
([[def-multidimensional-darboux-sums]], [[def-bounded-set]]).
````

### `def-tagged-partition-and-riemann-sum`

````markdown
---
id: def-tagged-partition-and-riemann-sum
kind: definition
title: "Tagged partitions of $[a,b]$, with a tag $\\xi_i$ in each subinterval, and the Riemann sum $S(f,P,\\xi) = \\sum_i f(\\xi_i)\\,\\Delta_i$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partition-and-refinement, def-finite-sum, lem-finite-sum-laws, def-interval, def-complete-ordered-field, def-ordered-field, def-sequence, def-darboux-sums, def-bounded-set]
justified_by: []
aliases: [def-riemann-sum]
landmark: true
short: "tagged partition, Riemann sum"
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
    - title: "Riemann sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_sum"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Definition

Let $a < b$ be reals and let $P = (n,t)$ be a partition of $[a,b]$, with
subintervals $I_i = [t_i,t_{i+1}]$ and lengths $\Delta_i = t_{i+1} - t_i$ for
$i < n$ ([[def-partition-and-refinement]]).

A **tagging** of $P$ is a sequence $\xi : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]) with

$$\xi_i \;\in\; I_i \qquad \text{for every } i < n, \qquad \xi_k := b \ \text{ for } k \ge n ,$$

the second clause being the same bookkeeping tail convention that
[[def-partition-and-refinement]] uses, so that $\xi$ is a genuine sequence and no
index above $n$ is ever read. The pair $(P,\xi)$ is a **tagged partition** of
$[a,b]$, and $\xi_i$ is the **tag** of the $i$-th subinterval. The **mesh** of a
tagged partition is the mesh $\|P\|$ of its underlying partition.

**Taggings exist, and no choice is involved in producing one.** Setting
$\xi_i := t_i$ for $i < n$ and $\xi_k := b$ for $k \ge n$ defines a tagging,
since $t_i \in [t_i,t_{i+1}] = I_i$ ([[def-interval]]). So every partition
carries at least one tagging, exhibited by a formula. What *is* a selection is
choosing a tag in each subinterval subject to a condition, as
[[thm-darboux-equals-riemann]] does; there the family of choices is finite and
the selection is a theorem of ZF.

For $f : [a,b] \to \mathbb{R}$ and a tagged partition $(P,\xi)$ the **Riemann
sum** of $f$ is

$$S(f,P,\xi) \;:=\; \sum_{i<n} f(\xi_i)\,\Delta_i ,$$

the finite sum of [[def-finite-sum]], indexed by $i \in \mathbb{N}$ with $i < n$.
It is a real number, being a finite sum of reals, and it is defined for **every**
$f$, bounded or not: no supremum or infimum of $f$ occurs in it.

### A Riemann sum lies between the Darboux sums of the same partition

Suppose in addition that $f$ is bounded ([[def-bounded-set]]), so that the
Darboux sums of [[def-darboux-sums]] are defined. Then for every tagging $\xi$
of $P$,

$$L(f,P) \;\le\; S(f,P,\xi) \;\le\; U(f,P) .$$

Indeed $\xi_i \in I_i$ gives $m_i \le f(\xi_i) \le M_i$ ([[def-darboux-sums]]),
and multiplying by $\Delta_i > 0$ and summing over $i < n$ preserves the two
inequalities, by monotonicity of finite sums, clause 4 of
[[lem-finite-sum-laws]], and the order axioms ([[def-ordered-field]],
[[def-complete-ordered-field]]).

This one line is the whole of the easy half of
[[thm-darboux-equals-riemann]]: whatever the tags, a Riemann sum is trapped
between the two Darboux sums, so control of $U(f,P) - L(f,P)$ is control of
every Riemann sum over $P$ at once.

## Remarks

- **The tags are unconstrained beyond membership.** In particular a tag may be an
  endpoint, two adjacent subintervals may share their tag at the common endpoint,
  and the tags need not be increasing. The three standard specialisations — left
  endpoints $\xi_i = t_i$, right endpoints $\xi_i = t_{i+1}$, midpoints
  $\xi_i = (t_i + t_{i+1})\cdot 2^{-1}$ — are all taggings, and each is given by a
  formula in $P$.

- **Convergence of Riemann sums is a mesh condition, not a sequence condition.**
  [[thm-darboux-equals-riemann]] quantifies over **all** tagged partitions of
  mesh below $\delta$. Weakening that to a single sequence of tagged partitions
  whose meshes tend to $0$ gives a strictly weaker condition, and the weakening
  is not harmless: the companion page of this pair
  exhibits a non-integrable function whose Riemann sums are constant along such a
  sequence.

- **Why Riemann sums and Darboux sums are both kept.** The Darboux sums are
  canonical functions of $f$ and $P$ and make suprema and infima available
  ([[def-darboux-integral]]); the Riemann sums are defined without any
  completeness of $\mathbb{R}$ and are what a numerical approximation actually
  computes. The theorem that the two routes give the same integral is
  [[thm-darboux-equals-riemann]].
````

### `lem-metrics-on-rn`

````markdown
---
id: lem-metrics-on-rn
kind: lemma
title: "$\\mathbb{R}^n$ as the set of functions $n \\to \\mathbb{R}$, and $d_1$, $d_2$, $d_\\infty$ are metrics on it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-natural-numbers, def-finite-sum, thm-minkowski-finite,
       thm-cauchy-schwarz-finite, lem-finite-set-has-max, thm-of-square-roots,
       lem-of-abs-value, lem-finite-sum-laws, def-max-min, lem-of-square-monotone,
       lem-of-square-positive, lem-of-triangle-inequality, def-abs-value,
       def-integer-power, def-ordered-field, def-complete-ordered-field,
       lem-of-add-order]
justified_by: []
aliases: [def-euclidean-space]
landmark: true
short: "$\\mathbb{R}^n$ with $d_1, d_2, d_\\infty$"
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
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "Taxicab geometry (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Taxicab_geometry"
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$. A von Neumann natural is the set of its
predecessors, $n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so it can be
used directly as an index set. Define

$$\mathbb{R}^n := \{\, x : x \text{ is a function } n \to \mathbb{R} \,\},$$

and write $x_k$ for $x(k)$, $k < n$. Two elements of $\mathbb{R}^n$ are equal
exactly when they agree at every $k < n$, functions being equal when they have
the same values. For $x, y \in \mathbb{R}^n$ put

$$d_1(x,y) := \sum_{k<n} |x_k - y_k|, \qquad d_2(x,y) := \sqrt{\ \sum_{k<n} (x_k - y_k)^2\ }, \qquad d_\infty(x,y) := \max\{\, |x_k - y_k| : k < n \,\}.$$

All three are well defined: the finite sums are those of [[def-finite-sum]]; the
sum of squares is nonnegative ([[lem-finite-sum-laws]], [[lem-of-square-positive]])
so it has a unique nonnegative square root ([[thm-of-square-roots]]); and
$\{|x_k - y_k| : k < n\}$ is a nonempty finite subset of $\mathbb{R}$, because
$n \ge 1$, so it has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]).

**Then $d_1$, $d_2$ and $d_\infty$ are metrics on $\mathbb{R}^n$**
([[def-metric-space]]).

**Why $n \ge 1$.** For $n = 0$ the set $\mathbb{R}^0$ has exactly one element,
the empty function, and $d_1$ and $d_2$ are the empty sum $0$ and its root; but
$d_\infty$ would be the maximum of the empty set, which does not exist. The
hypothesis $n \ge 1$ is therefore not decoration, and it is carried by every
statement about $d_\infty$ in this library.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; elements $x, y, z \in \mathbb{R}^n$; and the lists $a_k := x_k - y_k$, $b_k := y_k - z_k$ for $k < n$, so that $a_k + b_k = x_k - z_k$. Write $A := \sum_{k<n} a_k^2$, $C := \sum_{k<n} b_k^2$ and $B := \sum_{k<n} a_k b_k$.

[L1] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity; a sum of nonnegative terms is nonnegative, every single term is at most the sum, and a sum of nonnegative terms that vanishes has every term $0$.

[L2] Absolute value ([[lem-of-abs-value]], [[def-abs-value]]): $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and $u \le |u|$.

[L3] Two-term triangle inequality: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L4] Minkowski's inequality at the rational exponent $p = 1$ ([[thm-minkowski-finite]]): $\sum_{k<n}|a_k + b_k| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k|$.

[L5] Cauchy-Schwarz in root form ([[thm-cauchy-schwarz-finite]]): $\big|\sum_{k<n} a_k b_k\big| \le \sqrt{\sum_{k<n} a_k^2}\ \sqrt{\sum_{k<n} b_k^2}$.

[L6] Square roots ([[thm-of-square-roots]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt{c})^2 = c$; in particular $\sqrt{c} = 0$ if and only if $c = 0$.

[L7] Squares ([[lem-of-square-positive]], [[def-integer-power]]): $u^2 \ge 0$ always, and $u^2 = 0$ only for $u = 0$; and monotonicity of squaring on the nonnegatives, $s \le t \iff s^2 \le t^2$ for $s, t \ge 0$ ([[lem-of-square-monotone]]).

[L8] Maximum of a nonempty finite set of reals: it exists, it belongs to the set, and it is an upper bound of the set ([[lem-finite-set-has-max]], [[def-max-min]]).

[L9] Order arithmetic in $\mathbb{R}$: inequalities may be added and a constant added to both sides, in the strict form of [[lem-of-add-order]] and, together with the case of equality settled by totality ([[def-ordered-field]], [[def-complete-ordered-field]]), in the nonstrict form used below.

## Proof

**Proof technique:** direct.

1.1 Separation for $d_1$: $d_1(x,y) = \sum_{k<n}|a_k|$ is a sum of nonnegative terms, so it vanishes exactly when every $|a_k|$ vanishes, that is exactly when $x_k = y_k$ for all $k < n$, that is exactly when $x = y$. [L1, L2]

1.2 Separation for $d_2$: $d_2(x,y) = \sqrt{A}$ vanishes exactly when $A = 0$; $A$ is a sum of nonnegative terms, so $A = 0$ exactly when $a_k^2 = 0$ for every $k < n$, which happens exactly when every $a_k = 0$, that is exactly when $x = y$. [L1, L6, L7]

1.3 Separation for $d_\infty$: the maximum $d_\infty(x,y)$ belongs to $\{|a_k| : k < n\}$ and bounds it above, so it is $0$ exactly when every $|a_k| = 0$, that is exactly when $x = y$. [L2, L8]

1.4 Symmetry for all three: $|y_k - x_k| = |-(x_k - y_k)| = |x_k - y_k|$ and $(y_k - x_k)^2 = (x_k - y_k)^2$ for every $k < n$, so the three defining expressions are unchanged when $x$ and $y$ are exchanged. [L2, L7]

1.5 Triangle inequality for $d_1$: applying [L4] to the lists $(a_k)$ and $(b_k)$ gives $d_1(x,z) = \sum_{k<n}|a_k + b_k| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k| = d_1(x,y) + d_1(y,z)$. [L4]

1.6 Expanding with additivity and scaling: $\sum_{k<n}(a_k + b_k)^2 = \sum_{k<n}\big(a_k^2 + 2a_kb_k + b_k^2\big) = A + 2B + C$. [L1, algebra]

1.7 By [L5] and $B \le |B|$: $B \le \sqrt{A}\,\sqrt{C}$, and $A = (\sqrt{A})^2$, $C = (\sqrt{C})^2$ with $\sqrt{A}, \sqrt{C} \ge 0$. [L2, L5, L6]

1.8 Triangle inequality for $d_\infty$: for each $k < n$, $|a_k + b_k| \le |a_k| + |b_k| \le d_\infty(x,y) + d_\infty(y,z)$ because the two maxima bound their sets; so $d_\infty(x,y) + d_\infty(y,z)$ is an upper bound of $\{|a_k + b_k| : k < n\}$, and the maximum $d_\infty(x,z)$ of that set is one of its elements, whence $d_\infty(x,z) \le d_\infty(x,y) + d_\infty(y,z)$. [L3, L8, L9]

2.1 Combining steps 1.6 and 1.7: $\sum_{k<n}(a_k+b_k)^2 = A + 2B + C \le (\sqrt{A})^2 + 2\sqrt{A}\sqrt{C} + (\sqrt{C})^2 = \big(\sqrt{A} + \sqrt{C}\big)^2$. [step 1.6, step 1.7, L9, algebra]

3.1 Both $d_2(x,z) = \sqrt{\sum_{k<n}(a_k+b_k)^2}$ and $\sqrt{A} + \sqrt{C}$ are nonnegative, and by step 2.1 the square of the first is at most the square of the second, so monotonicity of squaring on the nonnegatives gives $d_2(x,z) \le \sqrt{A} + \sqrt{C} = d_2(x,y) + d_2(y,z)$. [step 2.1, L6, L7]

4.1 Each of $d_1$, $d_2$, $d_\infty$ satisfies (M1) by steps 1.1, 1.2 and 1.3, satisfies (M2) by step 1.4, and satisfies (M3) by steps 1.5, 3.1 and 1.8 respectively; hence all three are metrics on $\mathbb{R}^n$. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.8, step 3.1] ∎

## Remarks

- **$\mathbb{R}^n$ is defined ZFC-natively here**, as the set of functions from
  the von Neumann natural $n$ to $\mathbb{R}$, precisely so that its coordinates
  are indexed by $k < n$ and the finite-sum machinery of [[def-finite-sum]],
  [[thm-minkowski-finite]] and [[thm-cauchy-schwarz-finite]], all of which sum
  over $k < n$, applies without any reindexing.
- **No rational power appears anywhere above.** The triangle inequality for
  $d_2$ is obtained from Cauchy-Schwarz and the existence of square roots, not
  from Minkowski at $p = 2$, so this lemma does not depend on the theory of
  rational exponents. Minkowski is used only at $p = 1$, where its statement is
  the termwise sum of the two-term triangle inequality.
- **The three metrics are Lipschitz equivalent, with explicit constants,** and
  in particular have the same topology; that computation is on the companion
  page and is not needed here.
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

### `thm-darboux-equals-riemann`

````markdown
---
id: thm-darboux-equals-riemann
kind: theorem
title: "The Darboux and Riemann definitions agree: a bounded $f$ on $[a,b]$ is Darboux integrable with integral $I$ if and only if for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ such that $|S(f,P,\\xi) - I| < \\varepsilon$ for every tagged partition of mesh below $\\delta$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-partition-and-refinement, def-darboux-sums, def-darboux-integral, def-tagged-partition-and-riemann-sum, thm-riemann-criterion, lem-refinement-inequalities, lem-sup-epsilon, lem-inf-epsilon, lem-finite-sum-laws, def-finite-sum, def-bounded-set, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, lem-finite-choice, def-choice-function, lem-of-abs-value, def-interval, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive]
justified_by: []
aliases: [thm-riemann-and-darboux-integrals-agree]
landmark: true
short: "Darboux $=$ Riemann"
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
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]) and let $I \in \mathbb{R}$. The following are equivalent.

1. **(Darboux)** $f$ is Darboux integrable on $[a,b]$ with
   $\int_a^b f = I$ ([[def-darboux-integral]]).
2. **(Riemann)** For every real $\varepsilon > 0$ there is a real $\delta > 0$
   such that
   $$\bigl|\,S(f,P,\xi) - I\,\bigr| \;<\; \varepsilon$$
   for **every** tagged partition $(P,\xi)$ of $[a,b]$ with $\|P\| < \delta$
   ([[def-tagged-partition-and-riemann-sum]], [[def-partition-and-refinement]]).

**The quantifier over tagged partitions is universal, and that is the content.**
Condition 2 constrains every tagged partition of small mesh at once, tags
included; it is not a statement about one sequence of tagged partitions, and it
cannot be weakened to one. The companion page of this pair exhibits a
non-integrable function whose Riemann sums are constant along such a sequence.

**Boundedness is a hypothesis of both conditions as stated here.** Condition 1
presupposes it, since the Darboux sums of an unbounded function do not exist
([[def-darboux-sums]]); condition 2 makes sense for unbounded $f$ as well, and
in fact implies boundedness, but that implication is not proved here and is not
used: every application on this page starts from a bounded $f$.

## Facts & Assumptions

**Given:** Reals $a < b$, a bounded $f : [a,b] \to \mathbb{R}$, a real $M \ge 0$ with $|f(x)| \le M$ for every $x \in [a,b]$, and a real $I$. Put $M_{+} := M + 1$, so $M_{+} > 0$ and $|f(x)| \le M_{+}$ for every $x$.

[L1] For a partition $P = (n,t)$ of $[a,b]$: $n \ge 1$, the subintervals $I_i = [t_i,t_{i+1}]$ are nonempty, $\Delta_i = t_{i+1} - t_i > 0$, $\sum_{i<n}\Delta_i = b-a$, and $\|P\| = \max\{\Delta_i : i < n\}$. The uniform partition $U_N$ into $N \ge 1$ parts has $\|U_N\| = (b-a)/\iota(N)$. The common refinement $P \vee P_0$ refines both, and $n_{P \vee P_0} \le n_P + n_{P_0} - 1$ ([[def-partition-and-refinement]], [[def-interval]]).

[L2] $L(f,P) = \sum_{i<n}m_i\Delta_i$ and $U(f,P) = \sum_{i<n}M_i\Delta_i$ with $m_i = \inf f[I_i]$ and $M_i = \sup f[I_i]$; $L(f,P) \le \underline{\int_a^b} f \le \overline{\int_a^b} f \le U(f,P)$; $f$ is integrable exactly when the two integrals coincide, and then $\int_a^b f$ is their common value ([[def-darboux-sums]], [[def-darboux-integral]]).

[L3] $S(f,P,\xi) = \sum_{i<n}f(\xi_i)\Delta_i$ for a tagging $\xi$ of $P$, and $L(f,P) \le S(f,P,\xi) \le U(f,P)$ when $f$ is bounded ([[def-tagged-partition-and-riemann-sum]]).

[L4] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P) - L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L5] If $P'$ refines $P$ then $L(f,P) \le L(f,P')$, $U(f,P') \le U(f,P)$, and moreover $U(f,P) - U(f,P') \le 2M_{+}\,\iota(n'-n)\,\|P\|$ and $L(f,P') - L(f,P) \le 2M_{+}\,\iota(n'-n)\,\|P\|$ ([[lem-refinement-inequalities]]).

[L6] $\varepsilon$-characterisations: if $u = \sup S$ with $S$ nonempty then for every real $\eta > 0$ there is $s \in S$ with $s > u - \eta$; dually for the infimum ([[lem-sup-epsilon]], [[lem-inf-epsilon]]).

[L7] A family of nonempty sets **indexed by a natural number** $n$ has a choice function, and this is a theorem of ZF; the family used below is indexed by $i < n$, which is exactly that listed form. [[lem-finite-choice]] states it in that form and expressly declines to identify it with "every finite family of nonempty sets has a choice function", no definition of finiteness being available where it is proved ([[lem-finite-choice]], [[def-choice-function]]).

[L8] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$; $\iota$ is nonnegative, additive and nondecreasing on $\mathbb{N}$, and $\iota(N) > 0$ for $N \ge 1$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L9] Finite sums: additivity, scaling, monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L10] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; $|x| < c$ exactly when $-c < x < c$ for $c > 0$ ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[cor-of-one-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **Condition 2 implies condition 1.** Assume condition 2 and let a real $\varepsilon > 0$ be given. Fix $\delta > 0$ as in condition 2 for this $\varepsilon$, and put $\theta := \varepsilon/(b-a) > 0$ by [L10]. [given, L10, choose]

1.2 **Condition 1 implies condition 2; this half of the proof is steps 1.2, 2.2, 2.3, 3.3, 4.2, 5.2 and 6.2, and its symbols are its own.** Assume $f$ is integrable with $\int_a^b f = I$ and let a real $\eta > 0$ be given. By [L4] fix a partition $P_0 = (n_0, t^0)$ with $U(f,P_0) - L(f,P_0) < \eta \cdot 2^{-1}$. [given, L4, L10, choose]

2.1 A partition of mesh below $\delta$ exists: by [L8] fix $N \ge 1$ with $1/\iota(N) < \delta/(b-a)$ and take $P := U_N$, so $\|P\| = (b-a)/\iota(N) < \delta$ by [L1] and [L10]. Write $P = (n,t)$. [step 1.1, L1, L8, L10, choose]

2.2 By [L2] and integrability, $L(f,P_0) \le \underline{\int_a^b} f = I = \overline{\int_a^b} f \le U(f,P_0)$. Hence $U(f,P_0) - I \le U(f,P_0) - L(f,P_0) < \eta \cdot 2^{-1}$ and $I - L(f,P_0) \le U(f,P_0) - L(f,P_0) < \eta \cdot 2^{-1}$, that is $U(f,P_0) < I + \eta \cdot 2^{-1}$ and $L(f,P_0) > I - \eta \cdot 2^{-1}$. [step 1.2, L2, L10]

2.3 Put $\delta_0 := \eta \cdot \bigl(8\,M_{+}\,\iota(n_0)\bigr)^{-1}$, a positive real since $M_{+} > 0$ and $\iota(n_0) > 0$ by [L8] and $n_0 \ge 1$ by [L1]. [step 1.2, L1, L8, L10, construct]

3.1 For each $i < n$ the set $X_i := \{\, x \in I_i : f(x) > M_i - \theta \,\}$ is nonempty by [L6], since $M_i = \sup f[I_i]$ and $f[I_i]$ is nonempty by [L1]. By [L7] the finite family $\{X_i : i < n\}$ has a choice function $g$; put $\xi_i := g(X_i)$ for $i < n$ and $\xi_k := b$ for $k \ge n$, a tagging of $P$. [step 2.1, L1, L2, L6, L7, choose]

3.2 Likewise the sets $Y_i := \{\, x \in I_i : f(x) < m_i + \theta \,\}$ are nonempty by [L6], and [L7] supplies a tagging $\zeta$ of $P$ with $\zeta_i \in Y_i$ for $i < n$. [step 2.1, L1, L2, L6, L7, choose]

3.3 Let $(Q,\upsilon)$ be any tagged partition of $[a,b]$ with $\|Q\| < \delta_0$, and write $Q = (n_Q,u)$ and $R := Q \vee P_0$, with $R = (n_R, r)$. By [L1], $R$ refines both $Q$ and $P_0$, and $n_R - n_Q \le n_0 - 1$, so $\iota(n_R - n_Q) \le \iota(n_0)$ by [L8]. [step 2.3, L1, L8, given]

4.1 $S(f,P,\xi) \ge U(f,P) - \varepsilon$: by step 3.1, $f(\xi_i) \ge M_i - \theta$ for $i < n$, so multiplying by $\Delta_i > 0$ and summing gives $S(f,P,\xi) \ge \sum_{i<n}(M_i - \theta)\Delta_i = U(f,P) - \theta\sum_{i<n}\Delta_i = U(f,P) - \theta(b-a) = U(f,P) - \varepsilon$, by [L9], [L1] and [L3]. Symmetrically $S(f,P,\zeta) \le L(f,P) + \varepsilon$. [step 3.1, step 3.2, L1, L3, L9, L10]

4.2 By [L5] applied to the refinement $R$ of $Q$, $U(f,Q) - U(f,R) \le 2M_{+}\iota(n_R-n_Q)\|Q\| \le 2M_{+}\iota(n_0)\delta_0 = \eta \cdot 4^{-1}$, and likewise $L(f,R) - L(f,Q) \le \eta \cdot 4^{-1}$. [step 2.3, step 3.3, L5, L8, L10]

5.1 By condition 2 both $|S(f,P,\xi) - I| < \varepsilon$ and $|S(f,P,\zeta) - I| < \varepsilon$, since $\|P\| < \delta$. Hence $U(f,P) \le S(f,P,\xi) + \varepsilon < I + 2\varepsilon$ and $L(f,P) \ge S(f,P,\zeta) - \varepsilon > I - 2\varepsilon$, by step 4.1 and [L10]. [step 1.1, step 2.1, step 4.1, L10]

5.2 By [L5] applied to the refinement $R$ of $P_0$, $U(f,R) \le U(f,P_0)$ and $L(f,R) \ge L(f,P_0)$. Combining with step 4.2 and step 2.2: $U(f,Q) \le U(f,R) + \eta \cdot 4^{-1} \le U(f,P_0) + \eta \cdot 4^{-1} < I + \eta \cdot 2^{-1} + \eta \cdot 4^{-1}$, and symmetrically $L(f,Q) > I - \eta \cdot 2^{-1} - \eta \cdot 4^{-1}$. [step 2.2, step 3.3, step 4.2, L5, L10]

6.1 By [L2], $\overline{\int_a^b} f \le U(f,P) < I + 2\varepsilon$ and $\underline{\int_a^b} f \ge L(f,P) > I - 2\varepsilon$, and since $\underline{\int_a^b} f \le \overline{\int_a^b} f$ by [L2], both integrals lie strictly between $I - 2\varepsilon$ and $I + 2\varepsilon$; in particular $\bigl|\overline{\int_a^b} f - I\bigr| \le 2\varepsilon$ and $\bigl|\underline{\int_a^b} f - I\bigr| \le 2\varepsilon$. [step 5.1, L2, L10]

6.2 By [L3], $L(f,Q) \le S(f,Q,\upsilon) \le U(f,Q)$, so step 5.2 gives $I - \eta \cdot 2^{-1} - \eta \cdot 4^{-1} < S(f,Q,\upsilon) < I + \eta \cdot 2^{-1} + \eta \cdot 4^{-1}$, whence $|S(f,Q,\upsilon) - I| < \eta \cdot 2^{-1} + \eta \cdot 4^{-1} < \eta$ by [L10]. Since $(Q,\upsilon)$ was an arbitrary tagged partition of mesh below $\delta_0$, condition 2 holds with this $\delta_0$. [step 5.2, L3, L10]

7.1 Step 6.1 holds for **every** real $\varepsilon > 0$. If $\overline{\int_a^b} f \ne I$, taking $\varepsilon := \bigl|\overline{\int_a^b} f - I\bigr| \cdot 4^{-1} > 0$ would give $\bigl|\overline{\int_a^b} f - I\bigr| \le \bigl|\overline{\int_a^b} f - I\bigr| \cdot 2^{-1}$, which is false for a positive quantity; so $\overline{\int_a^b} f = I$, and the same argument gives $\underline{\int_a^b} f = I$. Hence $f$ is integrable with $\int_a^b f = I$ by [L2], which is condition 1. [step 6.1, L2, L10]

8.1 Steps 1.1, 2.1, 3.1, 3.2, 4.1, 5.1, 6.1 and 7.1 prove that condition 2 implies condition 1; steps 1.2, 2.2, 2.3, 3.3, 4.2, 5.2 and 6.2 prove the converse. The two halves share no symbol, the first working with $\varepsilon, \delta, P, \xi, \zeta, \theta$ and the second with $\eta, \delta_0, P_0, Q, \upsilon, R$, and together they give the stated equivalence. [step 7.1, step 6.2] ∎

## Remarks

- **What the Riemann condition costs in choice: nothing beyond ZF.** The only selection made anywhere above is in steps 3.1 and 3.2, where a tag is picked in each of the $n$ subintervals of one fixed partition. That family is listed by the index $i < n$, and a family of nonempty sets listed by a natural number has a choice function outright ([[lem-finite-choice]]), with no appeal to any choice axiom. Every other existential in the proof is instantiated once. This is recorded in [[rem-riemann-integral-choice-ledger]].

- **Why the mesh of the coarse partition is the right quantity.** Step 4.2 is the only place where the mesh hypothesis is spent, and it is spent through the quantitative clause of [[lem-refinement-inequalities]]. The symbols there are those of the second half: adding the at most $n_0 - 1$ interior points of $P_0$ to the arbitrary partition $Q$ can change each Darboux sum by at most $2M_{+}$ times the total length of the affected subintervals, and each of those has length below $\delta_0$, the mesh bound imposed on $Q$. The number $n_0$ is fixed **before** $\delta_0$ is chosen, in step 1.2 against step 2.3, which is why the argument is not circular.

- **The two conditions are not symmetric in what they presuppose.** Condition 1 names the integral as a supremum and an infimum and needs the completeness of $\mathbb{R}$ to make sense; condition 2 names it as a limit of sums and could be stated over any ordered field. What the theorem says is that on $\mathbb{R}$ the two coincide, so the numerical picture and the order-theoretic one describe the same object.

- **The value $I$ is not a free parameter after the fact.** If condition 2 holds for $I$ and for $I'$ then $|I - I'| < 2\varepsilon$ for every $\varepsilon > 0$, by evaluating both at one tagged partition of small enough mesh, so $I = I'$. The integral is therefore determined by condition 2 alone, as it is by condition 1.
````

### `thm-multidimensional-darboux-equals-riemann`

````markdown
---
id: thm-multidimensional-darboux-equals-riemann
kind: theorem
title: "The multidimensional Darboux and tagged-mesh definitions of the Riemann integral agree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-multidimensional-tagged-partition-and-riemann-sum, def-multidimensional-darboux-integral, thm-multidimensional-riemann-criterion, lem-multidimensional-refinement-inequalities, def-multidimensional-darboux-sums, def-multidimensional-grid-partition, cor-archimedean-reciprocal, lem-sup-epsilon, lem-inf-epsilon, lem-finite-choice]
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
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Statement

A bounded function on a nondegenerate rectangle is Darboux integrable with
value $I$ if and only if all tagged grid sums converge with mesh to $I$.

## Facts & Assumptions

**Given:** A bounded $f:Q\to\mathbb R$, with $|f|\le B$, on a nondegenerate rectangle $Q$.

[L1] Every tagged sum lies between its grid's Darboux sums ([[def-multidimensional-tagged-partition-and-riemann-sum]]).

[L2] Small Darboux gaps characterize integrability ([[thm-multidimensional-riemann-criterion]]).

[L3] Refining by a fixed grid changes the bounds only by the boundary-slab estimate ([[lem-multidimensional-refinement-inequalities]]).

[L4] Finite choice selects cell values within any positive distance of infima and suprema ([[lem-sup-epsilon]], [[lem-inf-epsilon]], [[lem-finite-choice]]).

[L5] Repeated equal subdivision and the Archimedean reciprocal property give grid partitions of a nondegenerate rectangle with arbitrarily small mesh ([[def-multidimensional-grid-partition]], [[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is Darboux integrable, choose a fixed grid $P_0$ with small gap by [L2]. For any sufficiently fine $P$, refine it with $P_0$; [L3] makes the Darboux bounds of $P$ differ from those of the refinement by arbitrarily little. Since the refined lower and upper sums trap $I$, [L1] makes every tagged sum over $P$ close to $I$.  [L1, L2, L3]

1.2 Conversely, suppose every sufficiently fine tagged sum is close to $I$. By [L5], choose one grid below the convergence mesh threshold and, using [L4], tag each cell near its supremum and then near its infimum. The two tagged sums approximate $U(f,P)$ and $L(f,P)$, so their common closeness to $I$ makes the Darboux gap arbitrarily small.   [L4, L5, given]

2.1 Apply [L2] in step 1.2. Since the near-upper and near-lower tagged sums are both arbitrarily close to $I$, the common lower/upper integral lies arbitrarily close to $I$ and therefore equals $I$. Both directions give the same value.  [step 1.1, step 1.2, L1, L2] ∎
````


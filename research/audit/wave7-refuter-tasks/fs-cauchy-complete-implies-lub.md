## Selection reasons

- high risk (7): 9 declared dependencies; 9 cited facts; analytic limiting/completeness language

## Target item — `fs-cauchy-complete-implies-lub`

Normalized current SHA-256: `c6deaae70b041e623386a5ce3b830911a8b0d3e321f08c9c8b33d1400a798653`

The complete current item follows, including frontmatter:

````markdown
---
id: fs-cauchy-complete-implies-lub
kind: false-statement
title: "FALSE: an ordered field in which every Cauchy sequence converges has the least-upper-bound property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-completeness-equivalences, def-completeness-properties, def-archimedean-field, def-sequences-in-an-ordered-field, def-complete-ordered-field, thm-laurent-cauchy-complete, cor-laurent-not-lub-complete, lem-laurent-non-archimedean, thm-laurent-ordered-field]
justified_by: []
aliases: []
landmark: true
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
pipeline_run: null
---

## Statement

**False claim:** every ordered field in which every Cauchy sequence converges,
that is, every ordered field with (CC) as in [[def-completeness-properties]],
has the least-upper-bound property (LUB).

This is clause 4 of [[thm-completeness-equivalences]] with its Archimedean
hypothesis deleted. The witness is again the formal Laurent series field
$K = \mathbb{R}((t^{-1}))$: every Cauchy sequence in $K$ converges in $K$, and
$K$ has no least upper bound for the set of its own canonical naturals.

**This is the sharpest of the failures on this page**, because "complete" is the
word most often used loosely for both properties at once. In $\mathbb{R}$ they
coincide; in an ordered field they do not, and the difference is exactly the
Archimedean property.

## Facts & Assumptions

**Given:** The formal Laurent series field $K = \mathbb{R}((t^{-1}))$.

[L1] $K$ is an ordered field ([[thm-laurent-ordered-field]]).

[L2] Every sequence in $K$ that is Cauchy in $K$ converges in $K$ ([[thm-laurent-cauchy-complete]]); Cauchyness and convergence in an ordered field are as in [[def-sequences-in-an-ordered-field]], and that is exactly (CC) ([[def-completeness-properties]]).

[L3] $K$ is not a complete ordered field: the set $A = \{\, n \cdot 1_K : n \in \mathbb{N}\,\}$ is nonempty and bounded above by $t$ and has no least upper bound in $K$ ([[cor-laurent-not-lub-complete]], [[def-complete-ordered-field]]).

[L4] $K$ is not Archimedean, since $n \cdot 1_K < t$ for every natural $n$ ([[lem-laurent-non-archimedean]], [[def-archimedean-field]]).

[L5] For an ordered field, the Archimedean property together with (CC) does imply (LUB) ([[thm-completeness-equivalences]], clause 4 implies clause 1).

## Refutation

**Proof technique:** direct.

1.1 $K$ is an ordered field. [L1]

1.2 $K$ has (CC): every Cauchy sequence in $K$ converges in $K$. [L2]

1.3 $K$ does not have (LUB), the set of its canonical naturals being nonempty, bounded above and without a least upper bound. [L3]

2.1 So $K$ is an ordered field with (CC) and without (LUB), and the claim is false. [step 1.1, step 1.2, step 1.3]

3.1 What fails in $K$ is precisely the hypothesis that the claim deleted: $K$ is not Archimedean, and with that hypothesis restored the implication is true. [step 1.1, L4, L5] ∎

## Remarks

- **Where the thresholds are read is what makes this possible.** Cauchyness in
  $K$ is tested against every positive element of $K$, including the
  infinitesimals ([[def-sequences-in-an-ordered-field]]), so the condition is
  much stronger in $K$ than the same words read with rational thresholds. It is
  strong enough that only sequences whose coefficients freeze can satisfy it,
  and those all converge. Meanwhile the canonical naturals, which are what (LUB)
  fails on, are not Cauchy at all, so (CC) never gets a chance to see them.

- **The three properties $K$ has and the three it lacks.** It has (CC) and (NIP)
  in the shrinking form ([[cor-laurent-nested-intervals]]) and it is an ordered
  field; it lacks (LUB), and hence also (BW) and (MCT), each of which would force
  it to be Archimedean ([[lem-bw-implies-archimedean]],
  [[lem-mct-implies-archimedean]]).

- **A reader who wants a single sentence:** Cauchy completeness says the field
  has no holes that a sequence can point at; the least-upper-bound property says
  it has no holes at all. In a non-Archimedean field a sequence indexed by
  $\mathbb{N}$ is too short to point at the holes.
````

## Wave 7 provenance row for the target

```json
{
  "id": "fs-cauchy-complete-implies-lub",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://arxiv.org/abs/1101.5652"
  ],
  "rationale": "Hall explicitly notes that sequential completeness is not sufficient for stronger completeness outside the Archimedean setting. The local false statement is that standard missing-ARCH strengthening with the Laurent field as witness.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-real-analysis-completeness-limits.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-laurent-ordered-field",
      "source_section": "Statement",
      "quote": "Let $K = \\mathbb{R}((t^{-1}))$ and let\n$P = \\{\\, f \\in K : f \\ne 0_K \\text{ and } \\operatorname{lc}(f) > 0 \\,\\}$\n([[def-formal-laurent-series]]). Then:\n\n1. $P$ is a positive cone on $K$, so $(K, P)$ is an ordered field\n   ([[def-ordered-field]]), and $f < g$ holds exactly when $g - f \\ne 0_K$ and\n   $\\operatorname{lc}(g - f) > 0$.\n2. For $f \\ne 0_K$ the absolute value ([[def-abs-value]]) satisfies\n   $|f| \\ne 0_K$, $v(|f|) = v(f)$ and\n   $\\operatorname{lc}(|f|) = \\lvert \\operatorname{lc}(f) \\rvert > 0$.\n3. The map $\\iota : \\mathbb{R} \\to K$ sending $c$ to the series with value $c$\n   at index $0$ is an injective ring homomorphism with $\\iota(c) \\in P$ exactly\n   when $c > 0$; and the canonical naturals of $K$ are\n   $n \\cdot 1_K = \\iota(n \\cdot 1_{\\mathbb{R}})$ for every $n \\in \\mathbb{N}$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-laurent-cauchy-complete",
      "source_section": "Statement",
      "quote": "Every sequence $(f^{(n)})_{n \\in \\mathbb{N}}$ in $K = \\mathbb{R}((t^{-1}))$ that\nis Cauchy in $K$ ([[def-sequences-in-an-ordered-field]]) converges in $K$. That\nis, the ordered field $K$ of [[thm-laurent-ordered-field]] is **sequentially\nCauchy complete**.\n\nThe limit is built coefficient by coefficient: at each index $j \\in \\mathbb{Z}$\nthe real numbers $f^{(n)}(j)$ are eventually constant in $n$, and $L(j)$ is that\neventual value.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-sequences-in-an-ordered-field",
      "source_section": "Definition",
      "quote": "Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and\nits absolute value $|\\cdot|$ ([[def-abs-value]]), and $\\mathbb{N}$ is the set of\nnatural numbers with its order ([[def-natural-numbers]], [[def-nat-order]]).\n\nA **sequence in $F$** is a function $x : \\mathbb{N} \\to F$. We write $x_k$ for\n$x(k)$ and $(x_k)$, or $(x_k)_{k \\in \\mathbb{N}}$, for the function itself.\n\nLet $(x_k)$ be a sequence in $F$.\n\n- $(x_k)$ is **bounded** when there is $M \\in F$ with $|x_k| \\le M$ for every\n  $k \\in \\mathbb{N}$.\n- $(x_k)$ **converges to** $L \\in F$ when\n\n  $$\\text{for every } \\varepsilon \\in F \\text{ with } \\varepsilon > 0 \\text{ there is } N \\in \\mathbb{N} \\text{ such that } |x_k - L| < \\varepsilon \\text{ for all } k \\ge N.$$\n\n  We then write $x_k \\to L$ *in $F$*. The sequence is **convergent in $F$** when\n  it converges to some $L \\in F$, and **divergent in $F$** otherwise.\n- $(x_k)$ is **Cauchy in $F$** when\n\n  $$\\text{for every } \\varepsilon \\in F \\text{ with } \\varepsilon > 0 \\text{ there is } N \\in \\mathbb{N} \\text{ such that } |x_k - x_l| < \\varepsilon \\text{ for all } k, l \\ge N.$$\n\n- $(x_k)$ is **nondecreasing** when $x_j \\le x_k$ for all $j \\le k$,\n  **increasing** when $x_j < x_k$ for all $j < k$, **nonincreasing** when\n  $x_j \\ge x_k$ for all $j \\le k$, **decreasing** when $x_j > x_k$ for all\n  $j < k$, and **monotone** when it is nondecreasing or nonincreasing.\n- For a strictly increasing $n : \\mathbb{N} \\to \\mathbb{N}$, the **subsequence**\n  of $(x_k)$ along $n$ is the composite $(x_{n_j})_{j \\in \\mathbb{N}}$. An\n  element $L \\in F$ is a **subsequential limit** of $(x_k)$ when some\n  subsequence of $(x_k)$ converges to $L$ in $F$.\n\n**Closed intervals and nesting.** For $a, b \\in F$ with $a \\le b$, the **closed\ninterval** with endpoints $a$ and $b$ is\n\n$$[a,b]_F \\;:=\\; \\{\\, x \\in F : a \\le x \\le b \\,\\},$$\n\nand its **length** is $b - a \\ge 0$. A sequence $(I_k)_{k \\in \\mathbb{N}}$ of\nclosed intervals $I_k = [a_k, b_k]_F$ is **nested** when $I_{k+1} \\subseteq I_k$\nfor every $k$. Its **lengths tend to $0$ in $F$** when the sequence\n$(b_k - a_k)_{k \\in \\mathbb{N}}$ converges to $0$ in the sense above, that is,\nwhen for every $\\varepsilon > 0$ in $F$ there is $N \\in \\mathbb{N}$ with\n$b_k - a_k < \\varepsilon$ for all $k \\ge N$ (the absolute value may be dropped\nbecause each length is $\\ge 0$).",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-completeness-properties",
      "source_section": "Definition",
      "quote": "Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and\nits absolute value. Sequences in $F$, and the notions of convergence in $F$,\nCauchyness in $F$, boundedness, nondecreasing and nonincreasing, subsequence,\nclosed interval $[a,b]_F$, nesting, and lengths tending to $0$ in $F$, are the\nones fixed once and for all in [[def-sequences-in-an-ordered-field]]. They are\nnot restated here and they are never read in $\\mathbb{R}$: every $\\varepsilon$\nbelow ranges over the positive elements of $F$ itself.\n\nA sequence $(x_k)$ in $F$ is **bounded above** when there is $B \\in F$ with\n$x_k \\le B$ for every $k \\in \\mathbb{N}$, and a subset $S \\subseteq F$ is bounded\nabove when there is $B \\in F$ with $s \\le B$ for every $s \\in S$\n([[def-complete-ordered-field]], [[def-upper-bound]]).\n\nThe following are five properties that $F$ may or may not have.\n\n- **(LUB), the least-upper-bound property.** Every nonempty $S \\subseteq F$ that\n  is bounded above has a least upper bound in $F$. This is exactly the condition\n  that makes $F$ a complete ordered field ([[def-complete-ordered-field]]), and\n  the two names are used interchangeably here.\n\n- **(MCT), the monotone convergence property.** Every nondecreasing sequence in\n  $F$ that is bounded above converges in $F$.\n\n- **(NIP), the nested interval property.** For every nested sequence\n  $(I_k)_{k \\in \\mathbb{N}}$ of closed intervals $I_k = [a_k, b_k]_F$ of $F$\n  whose lengths tend to $0$ in $F$, the intersection\n\n  $$\\bigcap_{k \\in \\mathbb{N}} I_k$$\n\n  is nonempty.\n\n- **(BW), the Bolzano-Weierstrass property.** Every bounded sequence in $F$ has\n  a subsequence that converges in $F$.\n\n- **(CC), Cauchy completeness.** Every Cauchy sequence in $F$ converges in $F$.\n\nAlongside these we use the **Archimedean property (ARCH)** of\n[[def-archimedean-field]]: for every $x \\in F$ there is a natural number $n$\nwith $x < n \\cdot 1_F$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "cor-laurent-not-lub-complete",
      "source_section": "Statement",
      "quote": "$K = \\mathbb{R}((t^{-1}))$ is an ordered field that is **not** a complete\nordered field ([[def-complete-ordered-field]]): it does not have the\nleast-upper-bound property.\n\nThe failure is witnessed concretely by the set of canonical naturals\n$$A \\;:=\\; \\{\\, n \\cdot 1_K \\;:\\; n \\in \\mathbb{N} \\,\\} \\;\\subseteq\\; K,$$\nwhich is nonempty and bounded above by $t$, yet has no least upper bound in\n$K$: every upper bound of $A$ admits a strictly smaller upper bound.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L3",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-laurent-non-archimedean",
      "source_section": "Statement",
      "quote": "Let $K = \\mathbb{R}((t^{-1}))$ be the ordered field of\n[[thm-laurent-ordered-field]], and identify a natural number with its image in\n$\\mathbb{Z}$ when it is used as an index. Then:\n\n1. $n \\cdot 1_K < t$ for every $n \\in \\mathbb{N}$; consequently $K$ is **not**\n   Archimedean ([[def-archimedean-field]]).\n2. $0_K < t^{-(k+1)} < t^{-k}$ for every $k \\in \\mathbb{Z}$.\n3. **(Countable cofinality.)** For every $\\varepsilon \\in K$ with\n   $\\varepsilon > 0_K$ there is $k \\in \\mathbb{N}$ with\n   $0_K < t^{-k} < \\varepsilon$; indeed every integer $k > v(\\varepsilon)$\n   works.\n4. **(The monomials measure the valuation.)** For $h \\in K$ and $k \\in\n   \\mathbb{Z}$: if $h(j) = 0$ for every $j \\le k$ then $|h| < t^{-k}$; and\n   conversely, if $|h| < t^{-k}$ then $h(j) = 0$ for every $j < k$.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-archimedean-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). For a natural number\n$n \\ge 1$, write $n \\cdot 1_F := \\underbrace{1_F + \\cdots + 1_F}_{n}$ for the\n$n$-fold sum of the multiplicative identity, and $0 \\cdot 1_F := 0$. These are\nthe **canonical natural numbers** of $F$.\n\n$F$ is **Archimedean** if for every $x \\in F$ there is a natural number $n$ with\n\n$$x < n \\cdot 1_F.$$\n\nEquivalently, the canonical naturals $(n \\cdot 1_F)_{n \\ge 1}$ are **cofinal**:\nno single element of $F$ is an upper bound for all of them.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-completeness-equivalences",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with the five properties (LUB), (MCT), (NIP), (BW),\n(CC) and the Archimedean property (ARCH) as in\n[[def-completeness-properties]] and [[def-archimedean-field]]. The following\nfive statements about $F$ are equivalent:\n\n1. (LUB);\n2. (ARCH) and (NIP);\n3. (BW);\n4. (ARCH) and (CC);\n5. (MCT).\n\nMoreover each of (LUB), (BW) and (MCT) implies (ARCH) on its own, so in\nstatements 1, 3 and 5 the Archimedean property is a consequence rather than a\nhypothesis.\n\n**The Archimedean hypothesis in statements 2 and 4 may not be dropped.** It is\nnot an artefact of the proof: the nested interval property without it does not\nimply (LUB) ([[fs-nested-intervals-implies-lub]]), and neither does Cauchy\ncompleteness without it ([[fs-cauchy-complete-implies-lub]]). Both are refuted\nby the same witness, the formal Laurent series field\n$\\mathbb{R}((t^{-1}))$.\n\nThe equivalence is proved as a single cycle\n$1 \\Rightarrow 2 \\Rightarrow 3 \\Rightarrow 4 \\Rightarrow 5 \\Rightarrow 1$, each\narrow being one lemma of this page.",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$K$ is an ordered field.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "$K$ has (CC): every Cauchy sequence in $K$ converges in $K$.",
      "step": "1.2",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "$K$ does not have (LUB), the set of its canonical naturals being nonempty, bounded above and without a least upper bound.",
      "step": "1.3",
      "inputs": [
        "L3"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "So $K$ is an ordered field with (CC) and without (LUB), and the claim is false.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "What fails in $K$ is precisely the hypothesis that the claim deleted: $K$ is not Archimedean, and with that hypothesis restored the implication is true.",
      "step": "3.1",
      "inputs": [
        "1.1",
        "L4",
        "L5"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 1.3: $K$ does not have (LUB), the set of its canonical naturals being nonempty, bounded above and without a least upper bound."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "No zero-valued parameter, zero denominator, or zero-index boundary affects the Statement."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "No singleton, first nonzero index, or unit boundary affects the Statement."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The hypotheses exclude or do not involve a degenerate equality/constant case."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement has no interval endpoint or finite-index endpoint boundary."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: the proof begins from named data and uses only explicit witnesses or deterministic constructions; no selection from an unindexed nonempty family is hidden."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement is not a biconditional; it is a one-directional result, example, or refutation."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement is not a biconditional; no reverse implication is asserted."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "high risk (7): 9 declared dependencies; 9 cited facts; analytic limiting/completeness language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: The refutation is a direct counterexample: the ordered field `K = ℝ((t⁻¹))` is non-Archimedean, every Cauchy sequence in `K` converges (so `K` has (CC) by [[def-completeness-properties]]), but the set `A = { n·1_K : n ∈ ℕ }` is nonempty, bounded above by `t`, and has no least upper bound (so `K` lacks (LUB)). The boundary between Archimedean and non-Archimedean ordered fields is exactly where the implication (CC)⇒(LUB) changes from true to false; in any Archimedean ordered field the implication holds ([[thm-completeness-equivalences]]). The witness set `A` does not form a Cauchy sequence, so (CC) imposes no requirement on it. Degenerate/empty/zero cases do not affect the argument. Checked surface: The title, the public false claim, every numbered step (1.1, 1.2, 1.3, 2.1, 3.1), and the Remarks section were read and verified for mathematical accuracy and consistency with the supplied sources. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/fs-cauchy-complete-implies-lub--b4cb984838cfa898.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "fs-cauchy-complete-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-completeness-equivalences",
    "declared_target": "thm-completeness-equivalences",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-cauchy-complete-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-completeness-properties",
    "declared_target": "def-completeness-properties",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-cauchy-complete-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-archimedean-field",
    "declared_target": "def-archimedean-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-cauchy-complete-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-sequences-in-an-ordered-field",
    "declared_target": "def-sequences-in-an-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "formal-laurent-series-field",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-cauchy-complete-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "fs-cauchy-complete-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-laurent-cauchy-complete",
    "declared_target": "thm-laurent-cauchy-complete",
    "target_statement_provenance": "ai-altered",
    "targetPage": "formal-laurent-series-field",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-cauchy-complete-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "cor-laurent-not-lub-complete",
    "declared_target": "cor-laurent-not-lub-complete",
    "target_statement_provenance": "ai-altered",
    "targetPage": "formal-laurent-series-field",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-cauchy-complete-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-laurent-non-archimedean",
    "declared_target": "lem-laurent-non-archimedean",
    "target_statement_provenance": "ai-altered",
    "targetPage": "formal-laurent-series-field",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-cauchy-complete-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-laurent-ordered-field",
    "declared_target": "thm-laurent-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "formal-laurent-series-field",
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

## Full text of every cited or declared item (12)

### `cor-laurent-nested-intervals`

````markdown
---
id: cor-laurent-nested-intervals
kind: corollary
title: "$\\mathbb{R}((t^{-1}))$ has the nested interval property for lengths tending to $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sequences-in-an-ordered-field, thm-laurent-cauchy-complete, thm-laurent-ordered-field, lem-laurent-non-archimedean, def-formal-laurent-series, def-ordered-field, def-abs-value, lem-of-abs-value, lem-of-add-order, thm-induction-principle, def-nat-order, thm-nat-linear-order, def-natural-numbers]
aliases: []
landmark: true
short: "shrinking nested intervals in $K$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-08
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "Cantor theorem (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Cantor_theorem"
    - title: "Cauchy sequences in ordered fields (University of Tennessee notes)"
      url: "https://web.math.utk.edu/~freire/teaching/m300f12/m300s12handout7.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ and let $(I_n)_{n \in \mathbb{N}}$ with
$I_n = [a_n, b_n]_K$ be a nested sequence of closed intervals in $K$ whose
lengths tend to $0$ in $K$, that is, for every $\varepsilon > 0$ in $K$ there is
$N$ with $b_n - a_n < \varepsilon$ for all $n \ge N$
([[def-sequences-in-an-ordered-field]]). Then

$$\bigcap_{n \in \mathbb{N}} I_n$$

contains exactly one element of $K$.

**The hypothesis that the lengths tend to $0$ may not be dropped**: this is the
nested interval property in its *shrinking* form only, and nothing on this page
establishes the unrestricted form for $K$. The remarks below record what happens
without the hypothesis.

## Facts & Assumptions

**Given:** A nested sequence $(I_n)_{n \in \mathbb{N}}$ of closed intervals $I_n = [a_n,b_n]_K$ in $K$, so $a_n \le b_n$ and $I_{n+1} \subseteq I_n$ for every $n$, whose lengths tend to $0$ in $K$.

[L1] $[a,b]_K = \{x \in K : a \le x \le b\}$ for $a \le b$; a sequence $(x_n)$ in $K$ is Cauchy in $K$ when for every $\varepsilon > 0$ in $K$ there is $N$ with $|x_n - x_m| < \varepsilon$ for all $n,m \ge N$, and converges to $L$ when for every $\varepsilon > 0$ in $K$ there is $N$ with $|x_n - L| < \varepsilon$ for all $n \ge N$; the lengths $b_n - a_n$ tend to $0$ when for every $\varepsilon > 0$ in $K$ they are eventually $< \varepsilon$ ([[def-sequences-in-an-ordered-field]]).

[L2] Every Cauchy sequence in $K$ converges in $K$ ([[thm-laurent-cauchy-complete]]).

[L3] $K$ is an ordered field ([[thm-laurent-ordered-field]], [[def-ordered-field]]), so its order is total and transitive and $x < y$ means $0 < y - x$. Compatibility with addition is used below in its NONSTRICT form, $x \le y \Rightarrow x + z \le y + z$, whereas [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + z < y + z$, and $x < y$ with $z < w$ giving $x + z < y + w$); the nonstrict form is the first strict form together with the case $x = y$, where the two sides are equal, the order being total ([[def-ordered-field]]).

[L4] $|z| \ge 0$, $|z| = 0$ only for $z = 0$, and $|z|$ equals $z$ or $-z$; so $|z| = z$ when $z \ge 0$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L5] The order on $\mathbb{N}$ is total ([[thm-nat-linear-order]], [[def-nat-order]]) and induction is available ([[thm-induction-principle]], [[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 For each $n$, the endpoints $a_{n+1}$ and $b_{n+1}$ belong to $I_{n+1}$ because $a_{n+1} \le b_{n+1}$, and $I_{n+1} \subseteq I_n$, so both belong to $I_n$; by [L1] this says $a_n \le a_{n+1}$ and $b_{n+1} \le b_n$. Hence $a_n \le a_{n+1} \le b_{n+1} \le b_n$. [given, L1, L3]

1.2 The intersection contains at most one element. Suppose $x, y \in \bigcap_n I_n$ with $x \ne y$, so $|x - y| > 0$ by [L4]. For each $n$ both $x$ and $y$ lie in $[a_n,b_n]_K$, so $x - y \le b_n - a_n$ and $y - x \le b_n - a_n$ by [L1] and [L3], and since $|x-y|$ is one of $x-y$, $y-x$ by [L4] we get $|x - y| \le b_n - a_n$ for every $n$. Applying the shrinking hypothesis with $\varepsilon := |x-y|$ produces some $n$ with $b_n - a_n < |x-y|$, a contradiction. [given, L1, L3, L4]

2.1 Whenever $n \le m$ one has $a_n \le a_m \le b_m \le b_n$: this is [step 1.1] for $m = n+1$, it is trivial for $m = n$, and the general case follows by induction on $m$ using transitivity of the order. [step 1.1, L3, L5]

3.1 $(a_n)_{n \in \mathbb{N}}$ is Cauchy in $K$. Let $\varepsilon > 0$ in $K$ and take $N$ with $b_n - a_n < \varepsilon$ for all $n \ge N$. Let $n, m \ge N$; by [L5] we may assume $n \le m$, the other case being the same with the roles exchanged. By [step 2.1], $a_n \le a_m \le b_m \le b_n$, so $0 \le a_m - a_n \le b_n - a_n < \varepsilon$, and $|a_m - a_n| = a_m - a_n < \varepsilon$ by [L4]. [step 2.1, given, L1, L3, L4, L5]

4.1 By [L2] there is $L \in K$ with $a_n \to L$ in $K$. [step 3.1, L2]

5.1 $a_n \le L$ for every $n$. Otherwise $L < a_n$ for some $n$; put $\varepsilon := a_n - L > 0$ and use [step 4.1] to fix $N$ with $|a_m - L| < \varepsilon$ for all $m \ge N$. Pick $m$ with $m \ge N$ and $m \ge n$ ([L5]). By [step 2.1], $a_n \le a_m$, so $a_m - L \ge a_n - L = \varepsilon > 0$ and hence $|a_m - L| = a_m - L \ge \varepsilon$ by [L4], contradicting $|a_m - L| < \varepsilon$. [step 2.1, step 4.1, L1, L3, L4, L5]

5.2 $L \le b_n$ for every $n$. Otherwise $b_n < L$ for some $n$; put $\varepsilon := L - b_n > 0$ and fix $N$ with $|a_m - L| < \varepsilon$ for all $m \ge N$. Pick $m$ with $m \ge N$ and $m \ge n$. By [step 2.1], $a_m \le b_m \le b_n$, so $L - a_m \ge L - b_n = \varepsilon > 0$ and hence $|a_m - L| = L - a_m \ge \varepsilon$ by [L4], again a contradiction. [step 2.1, step 4.1, L1, L3, L4, L5]

6.1 By [step 5.1] and [step 5.2], $a_n \le L \le b_n$ for every $n$, so $L \in \bigcap_n I_n$ by [L1] and the intersection is nonempty; by [step 1.2] it has no second element. Hence $\bigcap_n I_n = \{L\}$. [step 5.1, step 5.2, step 1.2, L1] ∎

## Remarks

- **This is the shrinking form, and the restriction is real.** The unrestricted nested interval property — every nested sequence of nonempty closed intervals meets — is **false** in $K$, and [[cex-laurent-nested-intervals-empty]] exhibits a nested sequence with empty intersection. So the hypothesis here is not a convenience of the proof, and no item on this page may be cited for the unrestricted form.

- **A trap in the hypothesis: "lengths $2/n$" does not mean shrinking.** The condition is that the lengths tend to $0$ *in the order of $K$*, tested against every positive $\varepsilon \in K$, not merely against positive real constants. A nested sequence whose $n$-th length is the constant series $\iota(2/(n+1))$ does **not** satisfy it: since $\iota(c)$ takes the nonzero value $c$ at index $0$, clause 4 of [[lem-laurent-non-archimedean]] forbids $|\iota(c)| < t^{-1}$, so no such length ever gets below $\varepsilon = t^{-1}$. Real-indexed shrinking is strictly weaker than shrinking in $K$, and a proof that assumed the former would be proving a different theorem.

- **Where completeness enters.** Exactly once, at [step 4.1]. Everything before it is monotonicity bookkeeping valid in any ordered field, and everything after it uses only the order and the absolute value. That is why the corollary is a corollary of [[thm-laurent-cauchy-complete]] and not an independent argument about series.
````

### `cor-laurent-not-lub-complete`

````markdown
---
id: cor-laurent-not-lub-complete
kind: corollary
title: "$\\mathbb{R}((t^{-1}))$ does not have the least-upper-bound property; its canonical naturals have no supremum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, lem-laurent-valuation, thm-laurent-ordered-field, lem-laurent-non-archimedean, thm-of-archimedean, def-complete-ordered-field, def-archimedean-field, def-ordered-field, thm-reals-ordered-field, cor-cauchy-reals-lub-complete]
aliases: []
landmark: true
short: "$K$ is not complete"
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
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Complete ordered fields are Archimedean (Rutgers Math 311 notes)"
      url: "https://sites.math.rutgers.edu/~sussmann/slides-math-311-2020-September-21.pdf"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

$K = \mathbb{R}((t^{-1}))$ is an ordered field that is **not** a complete
ordered field ([[def-complete-ordered-field]]): it does not have the
least-upper-bound property.

The failure is witnessed concretely by the set of canonical naturals
$$A \;:=\; \{\, n \cdot 1_K \;:\; n \in \mathbb{N} \,\} \;\subseteq\; K,$$
which is nonempty and bounded above by $t$, yet has no least upper bound in
$K$: every upper bound of $A$ admits a strictly smaller upper bound.

## Facts & Assumptions

**Given:** $K$ with its valuation $v$, leading coefficient $\operatorname{lc}$, monomials $t^{-a}$ and constants $\iota(c)$; the set $A = \{\, n \cdot 1_K : n \in \mathbb{N} \,\}$.

[L1] $K$ is an ordered field in which $f < g$ holds exactly when $g - f \ne 0_K$ and $\operatorname{lc}(g-f) > 0$; the canonical naturals are $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$; and for $c \ne 0$ the constant $\iota(c)$ is nonzero with $v(\iota(c)) = 0$ and $\operatorname{lc}(\iota(c)) = c$ ([[thm-laurent-ordered-field]]).

[L2] $n \cdot 1_K < t$ for every $n \in \mathbb{N}$, and $K$ is not Archimedean ([[lem-laurent-non-archimedean]], [[def-archimedean-field]]).

[L3] Every complete ordered field is Archimedean ([[thm-of-archimedean]]).

[L4] $F$ is a complete ordered field when every nonempty $S \subseteq F$ that is bounded above has a least upper bound in $F$, a least upper bound being an upper bound $\le$ every upper bound ([[def-complete-ordered-field]]).

[L5] For nonzero $h \in K$: $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; $t^{-a}$ is nonzero with $v(t^{-a}) = a$ and $\operatorname{lc}(t^{-a}) = 1$ ([[def-formal-laurent-series]]).

[L6] For nonzero $f, g \in K$: $fg \ne 0_K$ with $v(fg) = v(f)+v(g)$ and $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$; $-f \ne 0_K$ with $v(-f) = v(f)$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f)$; if $v(f) < v(g)$ then $f+g \ne 0_K$ with $\operatorname{lc}(f+g) = \operatorname{lc}(f)$; and if $v(f) = v(g)$ with $\operatorname{lc}(f)+\operatorname{lc}(g) \ne 0$ then $f+g \ne 0_K$ with $v(f+g) = v(f)$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)+\operatorname{lc}(g)$ ([[lem-laurent-valuation]]).

[L7] $\mathbb{R}$ is a complete ordered field and hence Archimedean: for every real $c$ there is a natural $n$ with $c < n \cdot 1_{\mathbb{R}}$ ([[thm-reals-ordered-field]], [[cor-cauchy-reals-lub-complete]], [[thm-of-archimedean]]).

[L8] In an ordered field exactly one of $x < y$, $x = y$, $y < x$ holds ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 $K$ is an ordered field that is not Archimedean, while by [L3] every complete ordered field is Archimedean; so $K$ is not a complete ordered field, that is, $K$ does not have the least-upper-bound property of [L4]. [L1, L2, L3, L4]

1.2 $A$ is nonempty, since $0 \cdot 1_K = 0_K$ and $1 \cdot 1_K = 1_K$ lie in it, and it is bounded above by $t$, since $n \cdot 1_K < t$ for every natural $n$ by [L2]. [L1, L2, L4]

1.3 Let $s \in K$ be any upper bound of $A$. Since $1_K \in A$ we have $1_K \le s$, and $1_K > 0_K$ because $\operatorname{lc}(1_K) = 1 > 0$; so $s > 0_K$, hence $s \ne 0_K$ and $\operatorname{lc}(s) > 0$. [L1, L4, L5]

2.1 $v(s) < 0$. Indeed, if $v(s) > 0$ then $v(1_K) = 0 < v(s) = v(-s)$ by [L6], so $1_K - s$ is nonzero with leading coefficient $\operatorname{lc}(1_K) = 1 > 0$, giving $s < 1_K$ and contradicting $1_K \le s$ by [L8]. And if $v(s) = 0$, write $c := \operatorname{lc}(s) > 0$ and use [L7] to fix a natural $n$ with $c < n \cdot 1_{\mathbb{R}}$; then $\iota(n \cdot 1_{\mathbb{R}}) - s$ has both valuations equal to $0$ and leading coefficients summing to $n \cdot 1_{\mathbb{R}} - c \ne 0$, so by [L6] it is nonzero with leading coefficient $n \cdot 1_{\mathbb{R}} - c > 0$, giving $n \cdot 1_K > s$ and contradicting that $s$ is an upper bound of $A$. [step 1.3, L1, L4, L5, L6, L7, L8]

3.1 Put $r := v(s) < 0$ and $c := \operatorname{lc}(s) > 0$, and set $s' := \iota(c/2)\, t^{-r} \in K$. By [L1], [L5] and [L6], $s'$ is nonzero with $v(s') = 0 + r = r$ and $\operatorname{lc}(s') = (c/2)\cdot 1 = c/2 > 0$. [step 1.3, step 2.1, L1, L5, L6]

4.1 $s'$ is an upper bound of $A$: it satisfies $s' > 0_K$ by [L1], which settles $n = 0$; and for $n \ge 1$ the element $n \cdot 1_K$ is nonzero with valuation $0$ by [L1], so $v(s') = r < 0 = v(-(n \cdot 1_K))$ and [L6] makes $s' - n\cdot 1_K$ nonzero with leading coefficient $c/2 > 0$, that is $n \cdot 1_K < s'$. [step 3.1, L1, L5, L6]

4.2 $s' < s$: both $s$ and $-s'$ are nonzero of valuation $r$, and their leading coefficients sum to $c - c/2 = c/2 \ne 0$, so by [L6] the difference $s - s'$ is nonzero with leading coefficient $c/2 > 0$. [step 3.1, L1, L6]

5.1 Steps 4.1 and 4.2 show that every upper bound $s$ of $A$ admits an upper bound $s'$ with $s' < s$, so no upper bound of $A$ is least and $A$ has no least upper bound in $K$; with [step 1.2] this exhibits a nonempty subset of $K$ that is bounded above and has no supremum, which is the concrete form of the failure already established in [step 1.1]. [step 1.1, step 1.2, step 4.1, step 4.2, L4] ∎

## Remarks

- **Two proofs of one fact, kept apart on purpose.** [step 1.1] is the abstract
  route: non-Archimedean ordered fields cannot be complete, by the contrapositive
  of [[thm-of-archimedean]], and nothing about Laurent series enters it. The rest
  of the proof is the concrete route, and it names the failing set. Only the
  concrete route tells the reader *what* has no supremum, which matters because
  the same field will be shown to be sequentially Cauchy complete in
  [[thm-laurent-cauchy-complete]]: the reader is entitled to see the set on which
  the two notions of completeness disagree.

- **The halving is not special.** Any real $\lambda$ with $0 < \lambda < 1$
  would serve in place of $1/2$: the only properties used are that
  $\lambda c > 0$, so the smaller element is still positive of valuation $r < 0$
  and therefore still above every canonical natural, and that
  $c - \lambda c \ne 0$, so the descent is strict. Both hold for every such
  $\lambda$, which is why the set of upper bounds of $A$ has no least element
  rather than merely failing to contain one particular candidate.
````

### `def-archimedean-field`

````markdown
---
id: def-archimedean-field
kind: definition
title: "Archimedean ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ordered-field, def-field]
aliases: []
landmark: false
short: "Archimedean"
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
    - title: "UTSA Mathematics: The Archimedean property"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Real_Numbers%3AArchimedean_Property"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]). For a natural number
$n \ge 1$, write $n \cdot 1_F := \underbrace{1_F + \cdots + 1_F}_{n}$ for the
$n$-fold sum of the multiplicative identity, and $0 \cdot 1_F := 0$. These are
the **canonical natural numbers** of $F$.

$F$ is **Archimedean** if for every $x \in F$ there is a natural number $n$ with

$$x < n \cdot 1_F.$$

Equivalently, the canonical naturals $(n \cdot 1_F)_{n \ge 1}$ are **cofinal**:
no single element of $F$ is an upper bound for all of them.

## Remarks

- Equivalently (applying the definition to $1/\varepsilon$): for every
  $\varepsilon > 0$ in $F$ there is $n$ with $1/(n \cdot 1_F) < \varepsilon$, so
  the canonical fractions $1/n$ are arbitrarily small.
- That the canonical naturals are well-defined, positive, and strictly
  increasing is [[lem-of-naturals-positive]]. Every complete ordered field is
  Archimedean ([[thm-of-archimedean]]); an ordered field need not be
  ([[cex-ordered-field-not-archimedean]]).
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

### `def-completeness-properties`

````markdown
---
id: def-completeness-properties
kind: definition
title: "The five completeness properties of an ordered field: least upper bound, monotone convergence, nested intervals, Bolzano-Weierstrass, and Cauchy completeness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequences-in-an-ordered-field, def-ordered-field, def-archimedean-field, def-complete-ordered-field, def-upper-bound]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §1.2 and §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and
its absolute value. Sequences in $F$, and the notions of convergence in $F$,
Cauchyness in $F$, boundedness, nondecreasing and nonincreasing, subsequence,
closed interval $[a,b]_F$, nesting, and lengths tending to $0$ in $F$, are the
ones fixed once and for all in [[def-sequences-in-an-ordered-field]]. They are
not restated here and they are never read in $\mathbb{R}$: every $\varepsilon$
below ranges over the positive elements of $F$ itself.

A sequence $(x_k)$ in $F$ is **bounded above** when there is $B \in F$ with
$x_k \le B$ for every $k \in \mathbb{N}$, and a subset $S \subseteq F$ is bounded
above when there is $B \in F$ with $s \le B$ for every $s \in S$
([[def-complete-ordered-field]], [[def-upper-bound]]).

The following are five properties that $F$ may or may not have.

- **(LUB), the least-upper-bound property.** Every nonempty $S \subseteq F$ that
  is bounded above has a least upper bound in $F$. This is exactly the condition
  that makes $F$ a complete ordered field ([[def-complete-ordered-field]]), and
  the two names are used interchangeably here.

- **(MCT), the monotone convergence property.** Every nondecreasing sequence in
  $F$ that is bounded above converges in $F$.

- **(NIP), the nested interval property.** For every nested sequence
  $(I_k)_{k \in \mathbb{N}}$ of closed intervals $I_k = [a_k, b_k]_F$ of $F$
  whose lengths tend to $0$ in $F$, the intersection

  $$\bigcap_{k \in \mathbb{N}} I_k$$

  is nonempty.

- **(BW), the Bolzano-Weierstrass property.** Every bounded sequence in $F$ has
  a subsequence that converges in $F$.

- **(CC), Cauchy completeness.** Every Cauchy sequence in $F$ converges in $F$.

Alongside these we use the **Archimedean property (ARCH)** of
[[def-archimedean-field]]: for every $x \in F$ there is a natural number $n$
with $x < n \cdot 1_F$.

## Remarks

- **(NIP) is stated in the shrinking form because that is the form both
  satisfied by the formal Laurent series field and used by the bisection
  theorem.** The field $\mathbb{R}((t^{-1}))$ is Cauchy complete without having
  least upper bounds ([[thm-laurent-cauchy-complete]],
  [[cor-laurent-not-lub-complete]]), and it satisfies shrinking (NIP)
  ([[cor-laurent-nested-intervals]]). The same shrinking condition is exactly
  what the bisection argument of
  [[lem-nested-intervals-and-archimedean-imply-bw]] produces.

- **"Lengths tend to $0$" is read in $F$.** For a non-Archimedean $F$ this is
  strictly stronger than the same words read in $\mathbb{R}$ through some
  identification of the rational scalars, and the difference is not academic:
  the remarks of [[cor-laurent-nested-intervals]] exhibit intervals in
  $\mathbb{R}((t^{-1}))$ whose lengths are the real constants $2/(n+1)$, which
  tend to $0$ in the ordinary real sense and do not tend to $0$ in the order of
  that field.

- **Boundedness of a sequence is two-sided, boundedness above is not.**
  [[def-sequences-in-an-ordered-field]] calls $(x_k)$ bounded when
  $|x_k| \le M$ for every $k$, which is the hypothesis of (BW); (MCT) asks only
  for the one-sided bound $x_k \le B$, which for a nondecreasing sequence is the
  only side in question, since $x_0 \le x_k$ always.

- **(MCT) is stated for nondecreasing sequences only.** The nonincreasing case
  is not a separate assumption: if $(x_k)$ is nonincreasing and bounded below by
  $b$ then $(-x_k)$ is nondecreasing and bounded above by $-b$, and $x_k \to L$
  exactly when $-x_k \to -L$, because $|(-x_k) - (-L)| = |x_k - L|$. That
  reduction is used in the proof of [[lem-mct-implies-lub]].

- **Nothing here presumes that any of the five holds.** They are predicates on
  an ordered field, and the point of the page they open is that in the presence
  of (ARCH) they are all the same predicate ([[thm-completeness-equivalences]]),
  while without it two of them are strictly weaker
  ([[fs-nested-intervals-implies-lub]], [[fs-cauchy-complete-implies-lub]]).

- **(CC) is this library's third rendering of "Cauchy complete", and for $\mathbb{R}$ all three agree.** [[def-cauchy-in-metric]] and [[def-complete-metric-space]] read Cauchyness and completeness in a metric space, and the case $n = 1$ of [[thm-euclidean-space-complete]] proves $(\mathbb{R}, |x-y|)$ complete; [[def-real-limit]] reads both notions for real sequences, with $\varepsilon$ ranging over the positive rationals; the present definition reads them in an ordered field $F$. For $F = \mathbb{R}$ under the metric $d(x,y) = |x-y|$ of [[lem-real-line-is-a-metric-space]] the three unfold to the same quantified statement: below every positive real lies a positive rational ([[lem-rat-embeds-dense]]), so the two ranges of $\varepsilon$ pick out the same Cauchy sequences and the same convergent ones. So "$\mathbb{R}$ satisfies (CC)" is a statement this library has already proved twice, as [[thm-cauchy-criterion-via-lub]] and as the case $n = 1$ of [[thm-euclidean-space-complete]]. The parallel stops at $\mathbb{R}$. The absolute value of an ordered field takes its values in $F$, while a metric is required to take its values in $\mathbb{R}$ ([[def-metric-space]]), so for a non-Archimedean $F$ the map $(x,y) \mapsto |x-y|$ is not a metric in this library's sense and the metric development says nothing about it. That is why [[lem-of-sequence-basics]] had to be proved from the order axioms alone, although its Cauchy clauses reappear for metric spaces as [[lem-metric-convergent-implies-cauchy]], [[lem-metric-cauchy-bounded]] and [[lem-metric-cauchy-with-convergent-subsequence]]. Neither development generalises the other; they meet exactly at $\mathbb{R}$.
````

### `def-sequences-in-an-ordered-field`

````markdown
---
id: def-sequences-in-an-ordered-field
kind: definition
title: "Sequences, convergence, Cauchyness, monotonicity, boundedness and closed intervals in an arbitrary ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ordered-field, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-natural-numbers, def-nat-order, def-sequence, def-real-limit, def-monotone-sequence, def-interval, def-subsequential-limit]
aliases: []
landmark: false
short: "sequences in an ordered field $F$"
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
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Cauchy sequences in ordered fields (University of Tennessee notes)"
      url: "https://web.math.utk.edu/~freire/teaching/m300f12/m300s12handout7.pdf"
pipeline_run: null
---

## Definition

Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and
its absolute value $|\cdot|$ ([[def-abs-value]]), and $\mathbb{N}$ is the set of
natural numbers with its order ([[def-natural-numbers]], [[def-nat-order]]).

A **sequence in $F$** is a function $x : \mathbb{N} \to F$. We write $x_k$ for
$x(k)$ and $(x_k)$, or $(x_k)_{k \in \mathbb{N}}$, for the function itself.

Let $(x_k)$ be a sequence in $F$.

- $(x_k)$ is **bounded** when there is $M \in F$ with $|x_k| \le M$ for every
  $k \in \mathbb{N}$.
- $(x_k)$ **converges to** $L \in F$ when

  $$\text{for every } \varepsilon \in F \text{ with } \varepsilon > 0 \text{ there is } N \in \mathbb{N} \text{ such that } |x_k - L| < \varepsilon \text{ for all } k \ge N.$$

  We then write $x_k \to L$ *in $F$*. The sequence is **convergent in $F$** when
  it converges to some $L \in F$, and **divergent in $F$** otherwise.
- $(x_k)$ is **Cauchy in $F$** when

  $$\text{for every } \varepsilon \in F \text{ with } \varepsilon > 0 \text{ there is } N \in \mathbb{N} \text{ such that } |x_k - x_l| < \varepsilon \text{ for all } k, l \ge N.$$

- $(x_k)$ is **nondecreasing** when $x_j \le x_k$ for all $j \le k$,
  **increasing** when $x_j < x_k$ for all $j < k$, **nonincreasing** when
  $x_j \ge x_k$ for all $j \le k$, **decreasing** when $x_j > x_k$ for all
  $j < k$, and **monotone** when it is nondecreasing or nonincreasing.
- For a strictly increasing $n : \mathbb{N} \to \mathbb{N}$, the **subsequence**
  of $(x_k)$ along $n$ is the composite $(x_{n_j})_{j \in \mathbb{N}}$. An
  element $L \in F$ is a **subsequential limit** of $(x_k)$ when some
  subsequence of $(x_k)$ converges to $L$ in $F$.

**Closed intervals and nesting.** For $a, b \in F$ with $a \le b$, the **closed
interval** with endpoints $a$ and $b$ is

$$[a,b]_F \;:=\; \{\, x \in F : a \le x \le b \,\},$$

and its **length** is $b - a \ge 0$. A sequence $(I_k)_{k \in \mathbb{N}}$ of
closed intervals $I_k = [a_k, b_k]_F$ is **nested** when $I_{k+1} \subseteq I_k$
for every $k$. Its **lengths tend to $0$ in $F$** when the sequence
$(b_k - a_k)_{k \in \mathbb{N}}$ converges to $0$ in the sense above, that is,
when for every $\varepsilon > 0$ in $F$ there is $N \in \mathbb{N}$ with
$b_k - a_k < \varepsilon$ for all $k \ge N$ (the absolute value may be dropped
because each length is $\ge 0$).

## Remarks

- **The thresholds range over $F$, and that is not a stylistic choice.** In an
  Archimedean ordered field one may equivalently test $\varepsilon$ over the
  canonical rationals, and that is what the $\mathbb{R}$-specific
  [[def-real-limit]] does; the two agree there, as the remark on rational and
  real $\varepsilon$ in [[def-sequence]] records. In a general $F$ they do
  **not** agree, because the canonical rationals need not be cofinal below the
  positive elements. A concrete failure lives on this page: in
  $\mathbb{R}((t^{-1}))$ every positive rational constant exceeds $t^{-1}$
  (clause 4 of [[lem-laurent-non-archimedean]], since a nonzero constant is
  nonzero at index $0$), so the sequence taking the value $0$ at even indices
  and $t^{-1}$ at odd indices would satisfy the Cauchy condition read with
  rational thresholds only, while failing it at $\varepsilon = t^{-2}$, where
  consecutive terms differ by $t^{-1} > t^{-2}$; and it has no limit at all,
  since a convergent sequence is Cauchy by the triangle inequality. Every
  definition above therefore
  quantifies over $\varepsilon \in F$, and no proof in this library may
  substitute a rational threshold in a field that has not been shown to be
  Archimedean.

- **These are the $\mathbb{R}$-notions with $\mathbb{R}$ replaced by $F$, and
  nothing more.** Sequence, tail, subsequence and boundedness are
  [[def-sequence]]; monotonicity is [[def-monotone-sequence]]; subsequential
  limits are [[def-subsequential-limit]]; convergence and Cauchyness are
  [[def-real-limit]]; closed intervals are the form $[a,b]$ of
  [[def-interval]]. Only the field in which the inequalities are read has
  changed.

- **Transfer of theorems is not automatic, and citing an $\mathbb{R}$-item for a
  general $F$ is a citation error.** A result proved about sequences of reals is
  a statement about $\mathbb{R}$. Many such proofs use only the ordered-field
  axioms and go through for any $F$ verbatim, and many others use completeness
  or the Archimedean property and do not. Which is which has to be settled by
  reading the proof; until an item is stated for a general ordered field, it may
  not be cited for one.

- **Limits are unique in any ordered field.** If $x_k \to L$ and $x_k \to L'$
  in $F$ with $L \ne L'$, put $\varepsilon := |L - L'|/2$, which is positive
  because $|L-L'| > 0$ ([[lem-of-abs-value]]) and $2 = 1 + 1 > 0$. Choose $N$
  beyond which both $|x_k - L| < \varepsilon$ and $|x_k - L'| < \varepsilon$
  hold, and take any $k \ge N$: the triangle inequality
  ([[lem-of-triangle-inequality]], proved for an arbitrary ordered field) gives
  $|L - L'| \le |L - x_k| + |x_k - L'| < 2\varepsilon = |L - L'|$, which is
  impossible. So the limit, when it exists, is unique, and the notation
  $\lim_k x_k$ is unambiguous. No completeness and no Archimedean hypothesis is
  used.

- **Indexing starts at $0$**, as everywhere in this library, because
  $0 \in \mathbb{N}$ ([[def-natural-numbers]]). A nested sequence of intervals
  therefore begins with $I_0$, and a statement about "the first $N$ terms" means
  the indices $0, \dots, N-1$.
````

### `lem-bw-implies-archimedean`

````markdown
---
id: lem-bw-implies-archimedean
kind: lemma
title: "Bolzano-Weierstrass alone forces the Archimedean property, so it needs no separate Archimedean hypothesis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, def-ordered-field, lem-of-add-order, lem-of-abs-value, lem-of-naturals-positive, lem-of-sequence-basics, cor-of-one-positive, lem-nat-discrete]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "J. Lebl, Basic Analysis I, §1.2 and §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field with the Bolzano-Weierstrass property (BW) of
[[def-completeness-properties]]. Then $F$ is Archimedean
([[def-archimedean-field]]).

Consequently (BW) needs no Archimedean hypothesis attached to it, in contrast
with the nested interval property and with Cauchy completeness, which do
([[fs-nested-intervals-implies-lub]], [[fs-cauchy-complete-implies-lub]]).

## Facts & Assumptions

**Given:** An ordered field $F$ with (BW).

[L1] The property (BW): every bounded sequence in $F$ has a subsequence converging in $F$ ([[def-completeness-properties]]).

[L2] Sequences in an ordered field: a sequence is a function $\mathbb{N} \to F$; it is bounded when $|x_k| \le M$ for every $k$ and some $M \in F$; a subsequence is taken along a strictly increasing $n : \mathbb{N} \to \mathbb{N}$; convergence and Cauchyness in $F$ are as fixed there ([[def-sequences-in-an-ordered-field]]).

[L3] Archimedean property: $F$ is Archimedean when for every $x \in F$ there is a natural number $n$ with $x < n \cdot 1_F$, where $0 \cdot 1_F = 0$ and $(n+1)\cdot 1_F = n \cdot 1_F + 1_F$ ([[def-archimedean-field]]).

[L4] Canonical naturals: $n \cdot 1_F > 0$ for $n \ge 1$, the map $n \mapsto n \cdot 1_F$ is strictly increasing on $\{1,2,3,\dots\}$, and $(m+n)\cdot 1_F = m \cdot 1_F + n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L5] Absolute value: $|u| = u$ whenever $u \ge 0$ ([[lem-of-abs-value]]).

[L6] A sequence converging in $F$ is Cauchy in $F$ (clause 3 of [[lem-of-sequence-basics]]).

[L7] Order arithmetic: $0 < 1_F$ ([[cor-of-one-positive]]); the order is total, so the failure of $x < y$ is $y \le x$; adding a constant preserves the order ([[lem-of-add-order]], [[def-ordered-field]]). Here [[lem-of-add-order]] states the STRICT forms and only those; the nonstrict forms used below are those together with the equality cases, which trichotomy settles, the order being total ([[def-ordered-field]]).

[L8] Discreteness of $\mathbb{N}$: $m < p$ if and only if $m + 1 \le p$ ([[lem-nat-discrete]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $F$ has (BW) and is not Archimedean; then there is $x \in F$ such that $x < n \cdot 1_F$ fails for every natural $n$, that is, $n \cdot 1_F \le x$ for every $n \in \mathbb{N}$. [L3, L7, assume-contra]

1.2 Let $(y_k)$ be the sequence in $F$ given by $y_k := k \cdot 1_F$, so that $y_0 = 0$, $y_{k+1} = y_k + 1_F$, and $y_k \ge 0$ for every $k$. [L2, L3, L4]

2.1 $(y_k)$ is bounded: $|y_k| = y_k \le x$ for every $k$. [step 1.1, step 1.2, L2, L5]

3.1 By (BW) there is a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ and an $L \in F$ with $y_{n_j} \to L$ in $F$. [step 2.1, L1, L2]

4.1 The subsequence $(y_{n_j})$ is therefore Cauchy in $F$, so, $1_F$ being positive, there is $J \in \mathbb{N}$ with $|y_{n_j} - y_{n_i}| < 1_F$ for all $i, j \ge J$. [step 3.1, L2, L6, L7]

5.1 But $n_J < n_{J+1}$ gives $n_J + 1 \le n_{J+1}$ and hence $y_{n_{J+1}} \ge y_{n_J + 1} = y_{n_J} + 1_F$, so $y_{n_{J+1}} - y_{n_J} \ge 1_F > 0$ and $|y_{n_{J+1}} - y_{n_J}| \ge 1_F$, contradicting step 4.1. [step 1.2, step 4.1, L4, L5, L7, L8]

6.1 The assumption of step 1.1 is therefore untenable, and an ordered field with (BW) is Archimedean. [step 5.1, discharge-contradiction] ∎

## Remarks

- **The witness sequence is the obstruction itself.** In a non-Archimedean field
  the canonical naturals are bounded, so they form a bounded sequence; and no
  subsequence of them can converge, because consecutive terms of any
  subsequence stay at distance at least $1_F$. That is the whole argument, and
  it shows that (BW) fails in every non-Archimedean ordered field, for instance
  in $\mathbb{R}(t)$ ([[cex-ordered-field-not-archimedean]]) and in
  $\mathbb{R}((t^{-1}))$ ([[lem-laurent-non-archimedean]]).

- Note which direction is being used: the sequence is bounded and has no
  convergent subsequence, so (BW) is contradicted. Nothing here says that
  $(y_k)$ fails to be Cauchy for some other reason; it is Cauchy along no
  subsequence at all.
````

### `lem-laurent-non-archimedean`

````markdown
---
id: lem-laurent-non-archimedean
kind: lemma
title: "$\\mathbb{R}((t^{-1}))$ is non-Archimedean, and the monomials $t^{-k}$ are cofinal below its positive elements"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-formal-laurent-series, lem-laurent-valuation, thm-laurent-ordered-field, def-archimedean-field, def-ordered-field, def-abs-value, thm-int-ordered-ring, lem-nat-embeds-int, def-int-order]
aliases: []
landmark: true
short: "$K$ is non-Archimedean"
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
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ be the ordered field of
[[thm-laurent-ordered-field]], and identify a natural number with its image in
$\mathbb{Z}$ when it is used as an index. Then:

1. $n \cdot 1_K < t$ for every $n \in \mathbb{N}$; consequently $K$ is **not**
   Archimedean ([[def-archimedean-field]]).
2. $0_K < t^{-(k+1)} < t^{-k}$ for every $k \in \mathbb{Z}$.
3. **(Countable cofinality.)** For every $\varepsilon \in K$ with
   $\varepsilon > 0_K$ there is $k \in \mathbb{N}$ with
   $0_K < t^{-k} < \varepsilon$; indeed every integer $k > v(\varepsilon)$
   works.
4. **(The monomials measure the valuation.)** For $h \in K$ and $k \in
   \mathbb{Z}$: if $h(j) = 0$ for every $j \le k$ then $|h| < t^{-k}$; and
   conversely, if $|h| < t^{-k}$ then $h(j) = 0$ for every $j < k$.

## Facts & Assumptions

**Given:** $K$ with its valuation $v$, leading coefficient $\operatorname{lc}$, monomials $t^{-a}$ and constants $\iota(c)$.

[L1] For nonzero $h \in K$, $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere, so $t^{-a} \ne 0_K$ with $v(t^{-a}) = a$ and $\operatorname{lc}(t^{-a}) = 1$; and $t = t^{-(-1)}$ ([[def-formal-laurent-series]]).

[L2] $K$ is an ordered field in which $f < g$ holds exactly when $g - f \ne 0_K$ and $\operatorname{lc}(g-f) > 0$; for $f \ne 0_K$ one has $|f| \ne 0_K$, $v(|f|) = v(f)$ and $\operatorname{lc}(|f|) > 0$; and $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$, which for $n \ge 1$ is nonzero with $v = 0$ ([[thm-laurent-ordered-field]], [[def-abs-value]]).

[L3] For nonzero $f, g \in K$: $-f \ne 0_K$ with $v(-f) = v(f)$; and if $v(f) < v(g)$ then $f + g \ne 0_K$ with $\operatorname{lc}(f+g) = \operatorname{lc}(f)$ ([[lem-laurent-valuation]]).

[L4] An ordered field $F$ is Archimedean when for every $x \in F$ there is a natural $n$ with $x < n \cdot 1_F$; and in an ordered field exactly one of $x < y$, $x = y$, $y < x$ holds ([[def-archimedean-field]], [[def-ordered-field]]).

[L5] The order on $\mathbb{Z}$ is total, and every integer $\ge 0$ is the image of a unique natural number; so for every $m \in \mathbb{Z}$ there is a natural $k$ whose image exceeds $m$ ([[thm-int-ordered-ring]], [[def-int-order]], [[lem-nat-embeds-int]]).

## Proof

**Proof technique:** direct.

1.1 For every $k \in \mathbb{Z}$ the monomial $t^{-k}$ is nonzero with $\operatorname{lc}(t^{-k}) = 1 > 0$, so $t^{-k} > 0_K$ by [L2]; and since $v(t^{-k}) = k < k+1 = v(-t^{-(k+1)})$ by [L1] and [L3], the difference $t^{-k} - t^{-(k+1)}$ is nonzero with leading coefficient $\operatorname{lc}(t^{-k}) = 1 > 0$, so $t^{-(k+1)} < t^{-k}$. [L1, L2, L3]

1.2 Let $n \in \mathbb{N}$. If $n = 0$ then $t - n \cdot 1_K = t$, which is nonzero with $\operatorname{lc}(t) = 1 > 0$. If $n \ge 1$ then $n \cdot 1_K$ is nonzero with $v(n \cdot 1_K) = 0$, so $-(n\cdot 1_K)$ is nonzero with valuation $0$ by [L3], while $v(t) = -1 < 0$; hence $t - n\cdot 1_K$ is nonzero with leading coefficient $\operatorname{lc}(t) = 1 > 0$ by [L3]. In both cases $n \cdot 1_K < t$ by [L2]. [L1, L2, L3]

1.3 Conversely, let $h \in K$ and $k \in \mathbb{Z}$ with $|h| < t^{-k}$, and suppose $h \ne 0_K$ with $v(h) < k$. Then $v(|h|) = v(h) < k = v(t^{-k})$ and $\operatorname{lc}(|h|) > 0$ by [L2], so $|h| - t^{-k}$ is nonzero with leading coefficient $\operatorname{lc}(|h|) > 0$ by [L3], giving $t^{-k} < |h|$ and contradicting $|h| < t^{-k}$ by the trichotomy of [L4]. Hence $h = 0_K$ or $v(h) \ge k$, and in either case $h(j) = 0$ for every $j < k$ by [L1]. [L1, L2, L3, L4]

2.1 Let $h \in K$ and $k \in \mathbb{Z}$ with $h(j) = 0$ for every $j \le k$. If $h = 0_K$ then $|h| = 0_K < t^{-k}$ by [step 1.1]. Otherwise $h \ne 0_K$ with $v(h) > k$, so $|h| \ne 0_K$ with $v(|h|) = v(h) > k = v(t^{-k})$ by [L1] and [L2]; then $t^{-k} - |h|$ is nonzero with leading coefficient $\operatorname{lc}(t^{-k}) = 1 > 0$ by [L3], so $|h| < t^{-k}$ by [L2]. [step 1.1, L1, L2, L3]

2.2 Let $\varepsilon \in K$ with $\varepsilon > 0_K$, so $\varepsilon \ne 0_K$ and $\operatorname{lc}(\varepsilon) > 0$ by [L2]; put $m := v(\varepsilon)$ and use [L5] to fix a natural $k$ with $k > m$. Then $v(\varepsilon) = m < k = v(t^{-k}) = v(-t^{-k})$ by [L1] and [L3], so $\varepsilon - t^{-k}$ is nonzero with leading coefficient $\operatorname{lc}(\varepsilon) > 0$, that is $t^{-k} < \varepsilon$; and $t^{-k} > 0_K$ by [step 1.1]. The same computation applies to every integer $k > m$. [step 1.1, L1, L2, L3, L5]

2.3 By [step 1.2], $n \cdot 1_K < t$ for every natural $n$; by the trichotomy of [L4] no natural $n$ can then satisfy $t < n \cdot 1_K$, so the defining condition of [L4] fails at $x = t$ and $K$ is not Archimedean. [step 1.2, L4]

3.1 Clause 1 is [step 1.2] with [step 2.3], clause 2 is [step 1.1], clause 3 is [step 2.2], and clause 4 is [step 2.1] together with [step 1.3]. [step 1.1, step 2.1, step 1.3, step 2.2, step 2.3] ∎

## Remarks

- **Why clause 3 is the pivotal one.** The valuation takes its values in
  $\mathbb{Z}$, which has countable cofinality, and clause 3 is the translation
  of that fact into the order of $K$: a *countable* family, the monomials
  $t^{-k}$ with $k \in \mathbb{N}$, already gets below every positive element.
  This is what makes the sequential Cauchy condition in $K$ testable against
  countably many thresholds, and it is the reason a sequence indexed by
  $\mathbb{N}$ suffices to reach a limit in [[thm-laurent-cauchy-complete]].
  Nothing like it would hold if the exponents were allowed to range over a
  group of uncountable cofinality.

- **Non-Archimedean here is a statement about $t$, not about the constants.**
  The canonical naturals of $K$ are the constant series
  $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$ (clause 3 of
  [[thm-laurent-ordered-field]]), all of valuation $0$, and what bounds them
  above is $t$, of valuation $-1$. The computation in step 1.2 uses nothing
  about $t$ beyond that: every *positive* element of negative valuation exceeds
  every canonical natural, because a strict inequality between valuations
  decides the comparison outright, whatever the coefficients are.
````

### `lem-mct-implies-archimedean`

````markdown
---
id: lem-mct-implies-archimedean
kind: lemma
title: "The monotone convergence property alone forces the Archimedean property, so it carries no separate Archimedean hypothesis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, def-ordered-field, lem-of-add-order, lem-of-naturals-positive, lem-of-abs-value, lem-of-sequence-basics, cor-of-one-positive]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "J. Lebl, Basic Analysis I, §1.2 and §2.4"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field with the monotone convergence property (MCT) of
[[def-completeness-properties]]. Then $F$ is Archimedean
([[def-archimedean-field]]).

So (MCT), like (BW) and like (LUB), carries the Archimedean property on its own,
and the hypothesis attached to (CC) in
[[lem-cauchy-complete-and-archimedean-imply-mct]] need not be attached here.
This is what lets [[rem-where-the-archimedean-hypothesis-is-needed]] sort the
five properties into those that do and those that do not.

## Facts & Assumptions

**Given:** An ordered field $F$ with (MCT).

[L1] The property (MCT): every nondecreasing sequence in $F$ that is bounded above converges in $F$ ([[def-completeness-properties]]).

[L2] Sequences in an ordered field: a sequence is a function $\mathbb{N} \to F$; it is nondecreasing when $x_j \le x_k$ for all $j \le k$; convergence and Cauchyness in $F$ are as fixed there ([[def-sequences-in-an-ordered-field]]).

[L3] Archimedean property: $F$ is Archimedean when for every $x \in F$ there is a natural $n$ with $x < n \cdot 1_F$, where $0 \cdot 1_F = 0$ and $(n+1)\cdot 1_F = n \cdot 1_F + 1_F$ ([[def-archimedean-field]]).

[L4] Canonical naturals: $n \cdot 1_F > 0$ for $n \ge 1$ and $n \mapsto n \cdot 1_F$ is strictly increasing on $\{1,2,3,\dots\}$ ([[lem-of-naturals-positive]]).

[L5] A sequence converging in $F$ is Cauchy in $F$ (clause 3 of [[lem-of-sequence-basics]]).

[L6] Order arithmetic: $0 < 1_F$ ([[cor-of-one-positive]]); the order is total, so the failure of $x < y$ is $y \le x$; adding a constant preserves the order ([[lem-of-add-order]], [[def-ordered-field]]); and $|u| = u$ whenever $u \ge 0$ ([[lem-of-abs-value]]). Here [[lem-of-add-order]] states the STRICT forms and only those; the nonstrict forms used below are those together with the equality cases, which trichotomy settles, the order being total ([[def-ordered-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $F$ has (MCT) and is not Archimedean; then there is $x \in F$ with $n \cdot 1_F \le x$ for every $n \in \mathbb{N}$. [L3, L6, assume-contra]

1.2 Let $(y_k)$ be the sequence $y_k := k \cdot 1_F$ in $F$, so $y_0 = 0$ and $y_{k+1} = y_k + 1_F$; it is nondecreasing, since $0 = y_0 < y_n$ for $n \ge 1$ and $j \mapsto j \cdot 1_F$ is strictly increasing on the positive naturals. [L2, L3, L4]

2.1 $(y_k)$ is bounded above by $x$, so (MCT) makes it converge in $F$ to some $L$. [step 1.1, step 1.2, L1, L2]

3.1 Being convergent, $(y_k)$ is Cauchy in $F$, so, $1_F$ being positive, there is $N \in \mathbb{N}$ with $|y_k - y_l| < 1_F$ for all $k, l \ge N$. [step 2.1, L2, L5, L6]

4.1 But $y_{N+1} - y_N = 1_F > 0$, so $|y_{N+1} - y_N| = 1_F$, which is not $< 1_F$; this contradicts step 3.1. [step 1.2, step 3.1, L6]

5.1 The assumption of step 1.1 is therefore untenable, and an ordered field with (MCT) is Archimedean. [step 4.1, discharge-contradiction] ∎

## Remarks

- **Why this item exists.** Without it, the natural reading of the equivalence
  theorem would attach an Archimedean hypothesis to (MCT) as well, and
  [[rem-where-the-archimedean-hypothesis-is-needed]] would answer its own
  question wrongly. With it the answer is clean: (LUB), (BW) and (MCT) each
  imply the Archimedean property, while (NIP) and (CC) do not
  ([[fs-nested-intervals-implies-lub]], [[fs-cauchy-complete-implies-lub]]).

- **The witness is the same sequence as in [[lem-bw-implies-archimedean]]**, the
  canonical naturals, but the two arguments use different failures of it. There
  the sequence is bounded and has no convergent subsequence; here it is
  nondecreasing and bounded above and has no limit. Neither argument implies the
  other, because neither (BW) nor (MCT) is assumed in the other's proof.

- The gap of exactly $1_F$ between consecutive terms is what does the work, and
  it is available in every ordered field: $1_F > 0$ by
  [[cor-of-one-positive]], and no smallness of $1_F$ relative to $x$ is
  possible, since the Cauchy condition is tested at the threshold $1_F$ itself.
````

### `thm-completeness-equivalences`

````markdown
---
id: thm-completeness-equivalences
kind: theorem
title: "For an ordered field the five completeness properties are equivalent, provided the Archimedean property is assumed alongside nested intervals and Cauchy completeness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-archimedean-field, lem-lub-implies-nested-intervals, lem-nested-intervals-and-archimedean-imply-bw, lem-bw-implies-archimedean, lem-bw-implies-cauchy-complete, lem-cauchy-complete-and-archimedean-imply-mct, lem-mct-implies-archimedean, lem-mct-implies-lub]
justified_by: []
aliases: []
landmark: true
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §1.2 and §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with the five properties (LUB), (MCT), (NIP), (BW),
(CC) and the Archimedean property (ARCH) as in
[[def-completeness-properties]] and [[def-archimedean-field]]. The following
five statements about $F$ are equivalent:

1. (LUB);
2. (ARCH) and (NIP);
3. (BW);
4. (ARCH) and (CC);
5. (MCT).

Moreover each of (LUB), (BW) and (MCT) implies (ARCH) on its own, so in
statements 1, 3 and 5 the Archimedean property is a consequence rather than a
hypothesis.

**The Archimedean hypothesis in statements 2 and 4 may not be dropped.** It is
not an artefact of the proof: the nested interval property without it does not
imply (LUB) ([[fs-nested-intervals-implies-lub]]), and neither does Cauchy
completeness without it ([[fs-cauchy-complete-implies-lub]]). Both are refuted
by the same witness, the formal Laurent series field
$\mathbb{R}((t^{-1}))$.

The equivalence is proved as a single cycle
$1 \Rightarrow 2 \Rightarrow 3 \Rightarrow 4 \Rightarrow 5 \Rightarrow 1$, each
arrow being one lemma of this page.

## Facts & Assumptions

**Given:** An ordered field $F$.

[L1] (LUB) implies (ARCH) and (NIP) ([[lem-lub-implies-nested-intervals]]).

[L2] (ARCH) together with (NIP) implies (BW) ([[lem-nested-intervals-and-archimedean-imply-bw]]).

[L3] (BW) implies (ARCH) ([[lem-bw-implies-archimedean]]).

[L4] (BW) implies (CC) ([[lem-bw-implies-cauchy-complete]]).

[L5] (ARCH) together with (CC) implies (MCT) ([[lem-cauchy-complete-and-archimedean-imply-mct]]).

[L6] (MCT) implies (ARCH) ([[lem-mct-implies-archimedean]]).

[L7] (ARCH) together with (MCT) implies (LUB) ([[lem-mct-implies-lub]]).

## Proof

**Proof technique:** direct.

1.1 Statement 1 implies statement 2: (LUB) gives both (ARCH) and (NIP). [L1]

1.2 Statement 2 implies statement 3: (ARCH) with (NIP) gives (BW). [L2]

1.3 Statement 3 implies statement 4: (BW) gives (ARCH), and (BW) gives (CC), so it gives their conjunction. [L3, L4]

1.4 Statement 4 implies statement 5: (ARCH) with (CC) gives (MCT). [L5]

1.5 Statement 5 implies statement 1: (MCT) gives (ARCH) by [L6], and (ARCH) with (MCT) gives (LUB) by [L7]. [L6, L7]

2.1 Steps 1.1 to 1.5 form a cycle passing through all five statements, so for any two of them there is a chain of implications from the first to the second; the five are therefore equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5]

2.2 Each of (LUB), (BW) and (MCT) implies (ARCH): the first by [L1], the second by [L3], the third by [L6]. [step 1.1, step 1.3, step 1.5, L1, L3, L6]

3.1 Both assertions of the statement are established, by steps 2.1 and 2.2. [step 2.1, step 2.2] ∎

## Remarks

- **What the cycle costs.** Seven lemmas suffice for the whole equivalence, because a single cycle through all five statements yields every implication between them, and the arrangement is chosen so that no lemma has to carry an Archimedean hypothesis it cannot discharge. Statement 3 is deliberately the hinge: (BW) is the one property that both implies (ARCH) and is implied by a nested interval argument, so the cycle can enter and leave it without an extra hypothesis.

- **Read as a statement about $\mathbb{R}$**, the theorem says that the five familiar theorems of a first analysis course are not five theorems but one, and that the least-upper-bound axiom could have been replaced by any of the other four (with (ARCH) alongside, where required). This library takes (LUB) as the axiom ([[def-complete-ordered-field]]) and proves the others from it on earlier pages; nothing here re-proves them for $\mathbb{R}$, and nothing here may be cited as a proof about $\mathbb{R}$ that is not already there.

- **The two failures are genuinely different from the three successes.** (NIP) and (CC) are both statements about sequences whose data are already close together, and neither of them ever produces a new element far away; that is why an infinitesimal layer can be added to a field without disturbing them, and why the naturals can stay bounded. (LUB), (BW) and (MCT) each quantify over an object that is only assumed *bounded*, so each of them can be tested against the canonical naturals themselves, and each fails at once when those are bounded. [[rem-where-the-archimedean-hypothesis-is-needed]] develops this.
````

### `thm-laurent-cauchy-complete`

````markdown
---
id: thm-laurent-cauchy-complete
kind: theorem
title: "Every Cauchy sequence in $\\mathbb{R}((t^{-1}))$ converges: $K$ is sequentially Cauchy complete"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, lem-laurent-series-ring, thm-laurent-ordered-field, lem-laurent-non-archimedean, def-sequences-in-an-ordered-field, def-ordered-field, def-abs-value, thm-well-ordering-principle, thm-induction-principle, def-natural-numbers, def-nat-order, thm-nat-linear-order, lem-nat-embeds-int]
aliases: []
landmark: true
short: "$K$ is Cauchy complete"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-08
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "Complete field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_field"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "Laurent series (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Laurent_series"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Every sequence $(f^{(n)})_{n \in \mathbb{N}}$ in $K = \mathbb{R}((t^{-1}))$ that
is Cauchy in $K$ ([[def-sequences-in-an-ordered-field]]) converges in $K$. That
is, the ordered field $K$ of [[thm-laurent-ordered-field]] is **sequentially
Cauchy complete**.

The limit is built coefficient by coefficient: at each index $j \in \mathbb{Z}$
the real numbers $f^{(n)}(j)$ are eventually constant in $n$, and $L(j)$ is that
eventual value.

## Scratch

The whole theorem turns on one structural fact about $K$, and it is worth
isolating before the proof: **the value group is $\mathbb{Z}$, so it has
countable cofinality.** Concretely, the countably many monomials $t^{-k}$,
$k \in \mathbb{N}$, get below every positive element of $K$
([[lem-laurent-non-archimedean]], clause 3). Two consequences drive everything.

First, the Cauchy condition, which quantifies over the uncountably many positive
$\varepsilon \in K$, is *equivalent* to its restriction to the countable family
$\varepsilon = t^{-(k+1)}$, and by clause 4 of the same lemma that restricted
condition says exactly: for each $k$ the coefficients at all indices $j \le k$
are eventually constant along the sequence.

Second, a sequence indexed by $\mathbb{N}$ is long enough to reach the limit.
For each of the countably many thresholds $t^{-k}$ there is an index $N_k$ past
which the sequence is that close, and $\sup$-free bookkeeping over $\mathbb{N}$
assembles the $N_k$ into a single limit. In a field whose value group had
uncountable cofinality this last step would fail, and a sequence would not
suffice.

The one genuinely non-formal point is that the assembled $L$ must have support
bounded below, so that it is an element of $K$ at all. That does not follow from
the eventual constancy at each index separately; it comes from the *single*
threshold $k = 0$, which already pins down every negative index at once.

## Facts & Assumptions

**Given:** A sequence $(f^{(n)})_{n \in \mathbb{N}}$ in $K$ that is Cauchy in $K$.

[L1] $K$ consists of the functions $\mathbb{Z} \to \mathbb{R}$ whose support is bounded below; $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere ([[def-formal-laurent-series]]).

[L2] $K$ is an ordered field, so its order is transitive and total ([[thm-laurent-ordered-field]], [[def-ordered-field]], [[def-abs-value]]); and $(g - h)(j) = g(j) - h(j)$ for $g, h \in K$ ([[lem-laurent-series-ring]]).

[L3] In $K$: $0_K < t^{-(k+1)} < t^{-k}$ for every $k \in \mathbb{Z}$; for every $\varepsilon > 0$ in $K$ there is $k \in \mathbb{N}$ with $t^{-k} < \varepsilon$; if $h(j) = 0$ for every $j \le k$ then $|h| < t^{-k}$; and if $|h| < t^{-k}$ then $h(j) = 0$ for every $j < k$ ([[lem-laurent-non-archimedean]]).

[L4] $(x_n)$ is Cauchy in $K$ when for every $\varepsilon > 0$ in $K$ there is $N \in \mathbb{N}$ with $|x_n - x_m| < \varepsilon$ for all $n, m \ge N$; and $(x_n)$ converges to $L$ in $K$ when for every $\varepsilon > 0$ in $K$ there is $N$ with $|x_n - L| < \varepsilon$ for all $n \ge N$ ([[def-sequences-in-an-ordered-field]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] The order on $\mathbb{N}$ is total ([[thm-nat-linear-order]], [[def-nat-order]]), induction is available ([[thm-induction-principle]], [[def-natural-numbers]]), and every integer $\ge 0$ is the image of a unique natural number, so a natural number may be used as an index in $\mathbb{Z}$ ([[lem-nat-embeds-int]]).

## Proof

**Proof technique:** constructive.

1.1 For $k \in \mathbb{N}$ put $M_k := \{\, N \in \mathbb{N} : |f^{(n)} - f^{(m)}| < t^{-(k+1)} \text{ for all } n, m \ge N \,\}$. Since $t^{-(k+1)} > 0_K$ by [L3] and the sequence is Cauchy, $M_k \ne \varnothing$ by [L4]; let $N_k := \min M_k$, which exists by [L5]. [given, L3, L4, L5, construct]

2.1 For every $k \in \mathbb{N}$, all $n, m \ge N_k$ and every $j \le k$ one has $f^{(n)}(j) = f^{(m)}(j)$: by [step 1.1] $|f^{(n)} - f^{(m)}| < t^{-(k+1)}$, so [L3] gives $(f^{(n)} - f^{(m)})(j) = 0$ for every $j < k+1$, that is for every $j \le k$, and $(f^{(n)} - f^{(m)})(j) = f^{(n)}(j) - f^{(m)}(j)$ by [L2]. [step 1.1, L2, L3, L6]

2.2 $N_a \le N_b$ whenever $a \le b$ in $\mathbb{N}$: for consecutive indices, $t^{-(k+2)} < t^{-(k+1)}$ by [L3], so any $N$ witnessing membership in $M_{k+1}$ also witnesses membership in $M_k$ by transitivity of the order [L2]; hence $M_{k+1} \subseteq M_k$ and $N_k = \min M_k \le \min M_{k+1} = N_{k+1}$. The general case follows by induction on $b$ [L6]. [step 1.1, L2, L3, L6]

2.3 Define $\kappa : \mathbb{Z} \to \mathbb{N}$ by $\kappa(j) := j$ for $j \ge 0$ and $\kappa(j) := 0$ for $j < 0$, so that $j \le \kappa(j)$ for every $j \in \mathbb{Z}$; then define $L : \mathbb{Z} \to \mathbb{R}$ by $L(j) := f^{(N_{\kappa(j)})}(j)$. [step 1.1, L6, construct]

3.1 For every $j \in \mathbb{Z}$ and every $n \ge N_{\kappa(j)}$ one has $f^{(n)}(j) = L(j)$: apply [step 2.1] with $k = \kappa(j)$, which is legitimate since $j \le \kappa(j)$, to the two indices $n$ and $N_{\kappa(j)}$, both of which are $\ge N_{\kappa(j)}$. [step 2.1, step 2.3, L6]

3.2 $L \in K$. The series $f^{(N_0)}$ lies in $K$, so by [L1] there is $m_0 \in \mathbb{Z}$ with $f^{(N_0)}(j) = 0$ for every $j < m_0$. If $j < m_0$ and $j < 0$ then $\kappa(j) = 0$, so $L(j) = f^{(N_0)}(j) = 0$; hence $L(j) = 0$ for every $j$ below both $m_0$ and $0$, the support of $L$ is bounded below, and $L \in K$. [step 2.3, L1]

4.1 For every $k \in \mathbb{N}$, every $n \ge N_k$ and every $j \le k$ one has $f^{(n)}(j) = L(j)$: if $j \ge 0$ then $\kappa(j) = j \le k$, and if $j < 0$ then $\kappa(j) = 0 \le k$, so in both cases $N_{\kappa(j)} \le N_k \le n$ by [step 2.2] and [step 3.1] applies. [step 2.2, step 3.1, L6]

5.1 $(f^{(n)})$ converges to $L$ in $K$. Let $\varepsilon > 0$ in $K$. By [L3] — this is the countable-cofinality step, and it is the only place where anything special about $K$ is used — there is $k \in \mathbb{N}$ with $t^{-k} < \varepsilon$. Put $N := N_k$. For every $n \ge N$, [step 4.1] and [L2] give $(f^{(n)} - L)(j) = f^{(n)}(j) - L(j) = 0$ for every $j \le k$, so $|f^{(n)} - L| < t^{-k}$ by [L3] and therefore $|f^{(n)} - L| < \varepsilon$ by transitivity [L2]. As $\varepsilon$ was arbitrary, this is convergence in the sense of [L4]. [step 3.2, step 4.1, L2, L3, L4]

6.1 The sequence $(f^{(n)})$ was an arbitrary Cauchy sequence in $K$, and [step 3.2] and [step 5.1] produce an element $L \in K$ to which it converges; so every Cauchy sequence in $K$ converges in $K$. [step 3.2, step 5.1, discharge-construct] ∎

## Remarks

- **What makes the argument work, in one sentence.** The value group of $K$ is $\mathbb{Z}$, whose cofinality is countable, so the continuum of thresholds $\varepsilon > 0$ in the Cauchy condition collapses to the countable family $t^{-k}$, $k \in \mathbb{N}$ ([[lem-laurent-non-archimedean]], clause 3), and a sequence indexed by $\mathbb{N}$ can meet all of them. A proof that skipped this step would be proving nothing: it is exactly the point at which the countability of the index set $\mathbb{N}$ is matched to the structure of the field.

- **Support-boundedness of the limit is a separate obligation, and it is discharged from a single threshold.** Knowing that each coefficient $f^{(n)}(j)$ is eventually constant gives a function $\mathbb{Z} \to \mathbb{R}$ and nothing more; there is no reason *a priori* why its support should be bounded below. What supplies that is [step 3.2]: the threshold $k = 0$ freezes *all* indices $j \le 0$ simultaneously from the single stage $N_0$ onward, so $L$ agrees with the one series $f^{(N_0)}$ on the whole negative half-line and inherits its lower bound.

- **No choice is used.** The stage $N_k$ is not chosen: it is defined as the least element of $M_k$, which exists by the well-ordering principle ([[thm-well-ordering-principle]]). This matters because the construction makes countably many selections, and a version of it that said "pick some $N_k$" would be an appeal to countable choice for no reason.

- **This is Cauchy completeness and nothing more.** $K$ is sequentially Cauchy complete and at the same time lacks the least-upper-bound property ([[cor-laurent-not-lub-complete]]); the two are not the same condition, and in a non-Archimedean field they come apart. Nor does this theorem give the unrestricted nested interval property: see [[cor-laurent-nested-intervals]] for what it does give, and [[cex-laurent-nested-intervals-empty]] for what it does not.
````

### `thm-laurent-ordered-field`

````markdown
---
id: thm-laurent-ordered-field
kind: theorem
title: "$\\mathbb{R}((t^{-1}))$ is an ordered field, ordered by the sign of the leading coefficient"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-formal-laurent-series, lem-laurent-series-ring, lem-laurent-valuation, thm-laurent-series-field, def-ordered-field, def-archimedean-field, def-field, def-abs-value, thm-reals-ordered-field, thm-induction-principle, def-natural-numbers, thm-int-ordered-ring]
aliases: []
landmark: true
short: "$K$ is an ordered field"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-08
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ and let
$P = \{\, f \in K : f \ne 0_K \text{ and } \operatorname{lc}(f) > 0 \,\}$
([[def-formal-laurent-series]]). Then:

1. $P$ is a positive cone on $K$, so $(K, P)$ is an ordered field
   ([[def-ordered-field]]), and $f < g$ holds exactly when $g - f \ne 0_K$ and
   $\operatorname{lc}(g - f) > 0$.
2. For $f \ne 0_K$ the absolute value ([[def-abs-value]]) satisfies
   $|f| \ne 0_K$, $v(|f|) = v(f)$ and
   $\operatorname{lc}(|f|) = \lvert \operatorname{lc}(f) \rvert > 0$.
3. The map $\iota : \mathbb{R} \to K$ sending $c$ to the series with value $c$
   at index $0$ is an injective ring homomorphism with $\iota(c) \in P$ exactly
   when $c > 0$; and the canonical naturals of $K$ are
   $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$ for every $n \in \mathbb{N}$.

## Facts & Assumptions

**Given:** $K$ with its valuation $v$, leading coefficient $\operatorname{lc}$, constants $\iota(c)$ and the set $P$ above.

[L1] For nonzero $h \in K$, $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; $\iota(c)$ is $c$ at index $0$ and $0$ elsewhere; $1_K = \iota(1)$ ([[def-formal-laurent-series]]).

[L2] $K$ is a commutative ring, $(f+g)(k) = f(k)+g(k)$, and $(\iota(c)h)(k) = c\,h(k)$ ([[lem-laurent-series-ring]]).

[L3] For nonzero $f, g \in K$: $fg \ne 0_K$ with $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$; $-f \ne 0_K$ with $v(-f) = v(f)$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f)$; if $v(f) < v(g)$ then $f+g \ne 0_K$ with $v(f+g) = v(f)$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)$; and if $v(f) = v(g)$ with $\operatorname{lc}(f) + \operatorname{lc}(g) \ne 0$ then $f+g \ne 0_K$ with $\operatorname{lc}(f+g) = \operatorname{lc}(f) + \operatorname{lc}(g)$ ([[lem-laurent-valuation]]).

[L4] $K$ is a field ([[thm-laurent-series-field]], [[def-field]]).

[L5] An ordered field is a field with a subset $P$ satisfying (O1) trichotomy, for each $x$ exactly one of $x \in P$, $x = 0$, $-x \in P$, and (O2) closure of $P$ under addition and multiplication; the order is then $a < b :\iff b - a \in P$ ([[def-ordered-field]]). For $n \ge 1$, $n \cdot 1_F$ is the $n$-fold sum of $1_F$, and $0 \cdot 1_F = 0$ ([[def-archimedean-field]]).

[L6] $\mathbb{R}$ is an ordered field: exactly one of $x > 0$, $x = 0$, $x < 0$ holds for each real $x$, and sums and products of positive reals are positive ([[thm-reals-ordered-field]], [[def-ordered-field]]).

[L7] $|x| = x$ when $x \ge 0$ and $|x| = -x$ when $x < 0$, in any ordered field and in $\mathbb{R}$ ([[def-abs-value]]).

[L8] Induction: a property holding at $0$ and inherited from $n$ to $n+1$ holds at every natural number ([[thm-induction-principle]], [[def-natural-numbers]]).

[L9] The order on $\mathbb{Z}$ is total, so for $p, q \in \mathbb{Z}$ exactly one of $p < q$, $p = q$, $q < p$ holds ([[thm-int-ordered-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $f \in K$. If $f = 0_K$ then neither $f$ nor $-f = 0_K$ lies in $P$, since membership in $P$ requires being nonzero. If $f \ne 0_K$ then $-f \ne 0_K$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f)$ by [L3], and by trichotomy in $\mathbb{R}$ ([L6]) exactly one of $\operatorname{lc}(f) > 0$ and $-\operatorname{lc}(f) > 0$ holds. So for every $f$ exactly one of $f \in P$, $f = 0_K$, $-f \in P$ holds, which is (O1). [L1, L3, L5, L6]

1.2 Let $f, g \in P$. By [L3] $fg \ne 0_K$ and $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$, a product of two positive reals, hence positive by [L6]; so $fg \in P$. [L3, L6]

1.3 $\iota(c) + \iota(d) = \iota(c+d)$ because addition is computed index by index, and $\iota(c)\iota(d) = \iota(cd)$ because $(\iota(c)\iota(d))(k) = c\,\iota(d)(k)$ by [L2], which is $cd$ at $k = 0$ and $0$ elsewhere; also $\iota(1) = 1_K$, and $\iota$ is injective since $\iota(c)(0) = c$. [L1, L2]

2.1 Let $f, g \in P$ and compare $v(f)$ with $v(g)$, which by [L9] are related in exactly one of three ways. If $v(f) < v(g)$ then by [L3] $f + g \ne 0_K$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f) > 0$; if $v(g) < v(f)$ the same argument with the roles exchanged applies; and if $v(f) = v(g)$ then $\operatorname{lc}(f) + \operatorname{lc}(g) > 0$ by [L6], in particular nonzero, so by [L3] $f+g \ne 0_K$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f) + \operatorname{lc}(g) > 0$. In every case $f + g \in P$, which with [step 1.2] is (O2). [step 1.2, L3, L6, L9]

2.2 For $c \ne 0$ the series $\iota(c)$ is nonzero with $v(\iota(c)) = 0$ and $\operatorname{lc}(\iota(c)) = c$, so $\iota(c) \in P$ exactly when $c > 0$; and $\iota(0) = 0_K \notin P$. With [step 1.3] this makes $\iota$ an injective ring homomorphism carrying the positive reals onto the positive constants. [step 1.3, L1]

2.3 For every natural $n$, $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$: at $n = 0$ both sides are $0_K$ by [L5] and [L1], and if the identity holds at $n$ then $(n+1)\cdot 1_K = n \cdot 1_K + 1_K = \iota(n \cdot 1_{\mathbb{R}}) + \iota(1) = \iota(n \cdot 1_{\mathbb{R}} + 1) = \iota((n+1)\cdot 1_{\mathbb{R}})$ by [step 1.3]. [step 1.3, L1, L5, L8]

3.1 By [step 1.1] and [step 2.1] the set $P$ satisfies (O1) and (O2), and $K$ is a field by [L4]; hence $(K,P)$ is an ordered field, in which $f < g$ means $g - f \in P$, that is, $g - f \ne 0_K$ and $\operatorname{lc}(g-f) > 0$. [step 1.1, step 2.1, L4, L5]

4.1 Let $f \ne 0_K$. If $f \in P$ then $f > 0_K$ by [step 3.1], so $|f| = f$ by [L7], and $\operatorname{lc}(|f|) = \operatorname{lc}(f) = \lvert \operatorname{lc}(f)\rvert$ since $\operatorname{lc}(f) > 0$. Otherwise $-f \in P$ by [step 1.1], so $f < 0_K$ and $|f| = -f$, whence $|f| \ne 0_K$, $v(|f|) = v(f)$ and $\operatorname{lc}(|f|) = -\operatorname{lc}(f) = \lvert\operatorname{lc}(f)\rvert$, again positive. In both cases $v(|f|) = v(f)$ and $\operatorname{lc}(|f|) = \lvert\operatorname{lc}(f)\rvert > 0$. [step 1.1, step 3.1, L3, L7]

5.1 Clause 1 is [step 3.1], clause 2 is [step 4.1], and clause 3 is [step 2.2] with [step 2.3]. [step 3.1, step 2.2, step 4.1, step 2.3] ∎

## Remarks

- **The order compares lowest terms, and only those.** By clause 1, deciding $f < g$ means finding the least index at which $f$ and $g$ differ and comparing the two coefficients there. Every later coefficient is irrelevant, which is why $\iota(c) > t^{-1}$ for every positive real $c$, however small, and why the order is not the coefficientwise one.

- **$\mathbb{R}$ sits inside $K$ as an ordered subfield, and that is all clause 3 says.** It does not say that $\mathbb{R}$ is cofinal in $K$, and indeed it is not: the computation used for the canonical naturals in [[lem-laurent-non-archimedean]] applies verbatim to every constant, since $v(t) = -1 < 0 = v(\iota(c))$ for every $c \ne 0$, so $\iota(c) < t$ for every real $c$. The identification $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$ is recorded because the Archimedean property is a statement about the canonical naturals ([[def-archimedean-field]]), and it is the bridge between those and the constant series.
````


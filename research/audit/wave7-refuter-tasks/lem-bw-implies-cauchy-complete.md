## Selection reasons

- high risk (5): 3 cited facts; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `lem-bw-implies-cauchy-complete`

Normalized current SHA-256: `6b30481612b63f8ca700f607398865852ab736048fc070c2f15736cf89810901`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-bw-implies-cauchy-complete
kind: lemma
title: "Bolzano-Weierstrass implies Cauchy completeness in any ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, lem-of-sequence-basics]
justified_by: []
aliases: []
landmark: false
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
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field with the Bolzano-Weierstrass property (BW) of
[[def-completeness-properties]]. Then $F$ has Cauchy completeness (CC): every
Cauchy sequence in $F$ converges in $F$.

No Archimedean hypothesis is needed here, and none is hidden: (BW) already
carries the Archimedean property on its own
([[lem-bw-implies-archimedean]]), but that fact is not used below.

## Facts & Assumptions

**Given:** An ordered field $F$ with (BW), and a Cauchy sequence $(x_k)$ in $F$.

[L1] The properties (BW) and (CC) of [[def-completeness-properties]].

[L2] Sequences in an ordered field: boundedness, subsequences, convergence in $F$ and Cauchyness in $F$ ([[def-sequences-in-an-ordered-field]]).

[L3] In any ordered field, a Cauchy sequence is bounded (clause 4 of [[lem-of-sequence-basics]]), and a Cauchy sequence with a subsequence converging to $L$ converges to $L$ (clause 5 of the same lemma).

## Proof

**Proof technique:** direct.

1.1 Being Cauchy in $F$, the sequence $(x_k)$ is bounded. [L2, L3]

2.1 By (BW) there is a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ and an $L \in F$ with $x_{n_j} \to L$ in $F$. [step 1.1, L1, L2]

3.1 A Cauchy sequence with a convergent subsequence converges to the same limit, so $x_k \to L$ in $F$. [step 2.1, L2, L3]

4.1 An arbitrary Cauchy sequence in $F$ therefore converges in $F$, which is (CC). [step 3.1, L1] ∎

## Remarks

- **This is the only implication on the page that is pure bookkeeping**, and
  that is precisely because both of its ingredients were extracted into
  [[lem-of-sequence-basics]] and proved there for an arbitrary ordered field.
  Written out inline it would repeat the boundedness induction and the
  three-term triangle estimate of that lemma.

- The converse fails: $\mathbb{R}((t^{-1}))$ has (CC)
  ([[thm-laurent-cauchy-complete]]) and, being non-Archimedean
  ([[lem-laurent-non-archimedean]]), fails (BW) by
  [[lem-bw-implies-archimedean]].
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-bw-implies-cauchy-complete",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://arxiv.org/abs/1101.5652"
  ],
  "rationale": "Hall gives Bolzano-Weierstrass and sequential Cauchy completeness in the same ordered-field equivalence theorem. The local item isolates the BW-to-CC implication and proves it through a convergent subsequence.",
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
      "source": "def-completeness-properties",
      "source_section": "Definition",
      "quote": "Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and\nits absolute value. Sequences in $F$, and the notions of convergence in $F$,\nCauchyness in $F$, boundedness, nondecreasing and nonincreasing, subsequence,\nclosed interval $[a,b]_F$, nesting, and lengths tending to $0$ in $F$, are the\nones fixed once and for all in [[def-sequences-in-an-ordered-field]]. They are\nnot restated here and they are never read in $\\mathbb{R}$: every $\\varepsilon$\nbelow ranges over the positive elements of $F$ itself.\n\nA sequence $(x_k)$ in $F$ is **bounded above** when there is $B \\in F$ with\n$x_k \\le B$ for every $k \\in \\mathbb{N}$, and a subset $S \\subseteq F$ is bounded\nabove when there is $B \\in F$ with $s \\le B$ for every $s \\in S$\n([[def-complete-ordered-field]], [[def-upper-bound]]).\n\nThe following are five properties that $F$ may or may not have.\n\n- **(LUB), the least-upper-bound property.** Every nonempty $S \\subseteq F$ that\n  is bounded above has a least upper bound in $F$. This is exactly the condition\n  that makes $F$ a complete ordered field ([[def-complete-ordered-field]]), and\n  the two names are used interchangeably here.\n\n- **(MCT), the monotone convergence property.** Every nondecreasing sequence in\n  $F$ that is bounded above converges in $F$.\n\n- **(NIP), the nested interval property.** For every nested sequence\n  $(I_k)_{k \\in \\mathbb{N}}$ of closed intervals $I_k = [a_k, b_k]_F$ of $F$\n  whose lengths tend to $0$ in $F$, the intersection\n\n  $$\\bigcap_{k \\in \\mathbb{N}} I_k$$\n\n  is nonempty.\n\n- **(BW), the Bolzano-Weierstrass property.** Every bounded sequence in $F$ has\n  a subsequence that converges in $F$.\n\n- **(CC), Cauchy completeness.** Every Cauchy sequence in $F$ converges in $F$.\n\nAlongside these we use the **Archimedean property (ARCH)** of\n[[def-archimedean-field]]: for every $x \\in F$ there is a natural number $n$\nwith $x < n \\cdot 1_F$.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-sequences-in-an-ordered-field",
      "source_section": "Definition",
      "quote": "Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and\nits absolute value $|\\cdot|$ ([[def-abs-value]]), and $\\mathbb{N}$ is the set of\nnatural numbers with its order ([[def-natural-numbers]], [[def-nat-order]]).\n\nA **sequence in $F$** is a function $x : \\mathbb{N} \\to F$. We write $x_k$ for\n$x(k)$ and $(x_k)$, or $(x_k)_{k \\in \\mathbb{N}}$, for the function itself.\n\nLet $(x_k)$ be a sequence in $F$.\n\n- $(x_k)$ is **bounded** when there is $M \\in F$ with $|x_k| \\le M$ for every\n  $k \\in \\mathbb{N}$.\n- $(x_k)$ **converges to** $L \\in F$ when\n\n  $$\\text{for every } \\varepsilon \\in F \\text{ with } \\varepsilon > 0 \\text{ there is } N \\in \\mathbb{N} \\text{ such that } |x_k - L| < \\varepsilon \\text{ for all } k \\ge N.$$\n\n  We then write $x_k \\to L$ *in $F$*. The sequence is **convergent in $F$** when\n  it converges to some $L \\in F$, and **divergent in $F$** otherwise.\n- $(x_k)$ is **Cauchy in $F$** when\n\n  $$\\text{for every } \\varepsilon \\in F \\text{ with } \\varepsilon > 0 \\text{ there is } N \\in \\mathbb{N} \\text{ such that } |x_k - x_l| < \\varepsilon \\text{ for all } k, l \\ge N.$$\n\n- $(x_k)$ is **nondecreasing** when $x_j \\le x_k$ for all $j \\le k$,\n  **increasing** when $x_j < x_k$ for all $j < k$, **nonincreasing** when\n  $x_j \\ge x_k$ for all $j \\le k$, **decreasing** when $x_j > x_k$ for all\n  $j < k$, and **monotone** when it is nondecreasing or nonincreasing.\n- For a strictly increasing $n : \\mathbb{N} \\to \\mathbb{N}$, the **subsequence**\n  of $(x_k)$ along $n$ is the composite $(x_{n_j})_{j \\in \\mathbb{N}}$. An\n  element $L \\in F$ is a **subsequential limit** of $(x_k)$ when some\n  subsequence of $(x_k)$ converges to $L$ in $F$.\n\n**Closed intervals and nesting.** For $a, b \\in F$ with $a \\le b$, the **closed\ninterval** with endpoints $a$ and $b$ is\n\n$$[a,b]_F \\;:=\\; \\{\\, x \\in F : a \\le x \\le b \\,\\},$$\n\nand its **length** is $b - a \\ge 0$. A sequence $(I_k)_{k \\in \\mathbb{N}}$ of\nclosed intervals $I_k = [a_k, b_k]_F$ is **nested** when $I_{k+1} \\subseteq I_k$\nfor every $k$. Its **lengths tend to $0$ in $F$** when the sequence\n$(b_k - a_k)_{k \\in \\mathbb{N}}$ converges to $0$ in the sense above, that is,\nwhen for every $\\varepsilon > 0$ in $F$ there is $N \\in \\mathbb{N}$ with\n$b_k - a_k < \\varepsilon$ for all $k \\ge N$ (the absolute value may be dropped\nbecause each length is $\\ge 0$).",
      "uses": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-sequence-basics",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $(x_k)$, $(y_k)$ be\nsequences in $F$, with convergence in $F$, Cauchyness in $F$, boundedness and\nsubsequences as in [[def-sequences-in-an-ordered-field]]. Then:\n\n1. **Limits are unique.** If $x_k \\to L$ and $x_k \\to L'$ in $F$, then $L = L'$.\n   A convergent sequence therefore has exactly one limit in $F$ and the notation\n   $\\lim_k x_k$ denotes it unambiguously. This is the licence under which the\n   remaining clauses are written as equations between limits, and it is not new\n   here: [[def-sequences-in-an-ordered-field]] already establishes it, in an\n   arbitrary ordered field and with no completeness or Archimedean hypothesis.\n   It is restated as clause 1 so that this lemma is self-contained as the\n   citation target of the whole abstract chain on this page.\n2. **Limits preserve non-strict inequalities.** If $(x_k)$ and $(y_k)$ both\n   converge in $F$ and $x_k \\le y_k$ for every $k$, then\n\n   $$\\lim_k x_k \\;\\le\\; \\lim_k y_k .$$\n\n3. **Convergent implies Cauchy.** If $(x_k)$ converges in $F$, it is Cauchy in\n   $F$.\n4. **Cauchy implies bounded.** If $(x_k)$ is Cauchy in $F$, it is bounded.\n5. **A Cauchy sequence with a convergent subsequence converges.** If $(x_k)$ is\n   Cauchy in $F$ and some subsequence $(x_{n_j})$ converges in $F$, then $(x_k)$\n   converges in $F$ as well, and\n\n   $$\\lim_k x_k \\;=\\; \\lim_j x_{n_j} .$$\n\n   Both sides are asserted to exist: the right-hand side by hypothesis, the\n   left-hand side as part of the conclusion.\n\n**Why this is a separate item.** Each of the five is proved in this library for\nsequences of *reals*, and none of those proofs may be cited here.\n[[rem-sequence-conventions]] is explicit about it: a theorem about sequences of\nreals is a theorem about $\\mathbb{R}$, and the fact that its argument would\ntransfer to an arbitrary ordered field is a statement about the argument, not a\nlicence to cite the result. The five are collected here, proved from the ordered\nfield axioms alone, so that the completeness equivalences of this page have one\nplace to cite instead of five inline reconstructions.",
      "uses": [
        "1.1",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Being Cauchy in $F$, the sequence $(x_k)$ is bounded.",
      "step": "1.1",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "By (BW) there is a strictly increasing $n : \\mathbb{N} \\to \\mathbb{N}$ and an $L \\in F$ with $x_{n_j} \\to L$ in $F$.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "A Cauchy sequence with a convergent subsequence converges to the same limit, so $x_k \\to L$ in $F$.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "An arbitrary Cauchy sequence in $F$ therefore converges in $F$, which is (CC).",
      "step": "4.1",
      "inputs": [
        "3.1",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The Statement quantifies over fixed nonempty data and introduces no empty-set or empty-family boundary."
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
      "evidence": "step 2.1: all existence or selection moves were checked; any countable-choice use is explicitly tagged in the cited step."
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
    "notes": "high risk (5): 3 cited facts; induction, recursion, or minimality; analytic limiting/completeness language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: All boundary cases (empty, zero, one, degenerate, endpoints, nonempty‑choice) were reviewed and either are not applicable or are explicitly handled by the cited facts. The proof uses no limiting argument that breaks at boundaries, and the non‑Archimedean case is excluded by (BW) implying Archimedean (a separate result) but is not needed for the direct steps. No counterexample exists; the implication holds for any ordered field. Checked surface: The title, the public statement, each of the four numbered proof steps, and both Remarks were read. The proof is logically valid, the citations are accurate, and the Remarks contain no false mathematical claims. Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/lem-bw-implies-cauchy-complete--00971d74999571e8.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-bw-implies-cauchy-complete",
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
    "source": "lem-bw-implies-cauchy-complete",
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
    "source": "lem-bw-implies-cauchy-complete",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-of-sequence-basics",
    "declared_target": "lem-of-sequence-basics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (6)

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

### `lem-of-sequence-basics`

````markdown
---
id: lem-of-sequence-basics
kind: lemma
title: "Sequence basics in an arbitrary ordered field: limits are unique, limits preserve non-strict inequalities, convergent sequences are Cauchy, Cauchy sequences are bounded, and a Cauchy sequence with a convergent subsequence converges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-sequence-conventions, def-sequences-in-an-ordered-field, def-ordered-field, lem-of-abs-value, lem-of-triangle-inequality, lem-of-add-order, lem-index-map-grows, lem-of-inverse-positive, lem-of-naturals-positive, cor-of-one-positive, thm-induction-principle, thm-nat-linear-order]
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
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.1 and §2.4"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $(x_k)$, $(y_k)$ be
sequences in $F$, with convergence in $F$, Cauchyness in $F$, boundedness and
subsequences as in [[def-sequences-in-an-ordered-field]]. Then:

1. **Limits are unique.** If $x_k \to L$ and $x_k \to L'$ in $F$, then $L = L'$.
   A convergent sequence therefore has exactly one limit in $F$ and the notation
   $\lim_k x_k$ denotes it unambiguously. This is the licence under which the
   remaining clauses are written as equations between limits, and it is not new
   here: [[def-sequences-in-an-ordered-field]] already establishes it, in an
   arbitrary ordered field and with no completeness or Archimedean hypothesis.
   It is restated as clause 1 so that this lemma is self-contained as the
   citation target of the whole abstract chain on this page.
2. **Limits preserve non-strict inequalities.** If $(x_k)$ and $(y_k)$ both
   converge in $F$ and $x_k \le y_k$ for every $k$, then

   $$\lim_k x_k \;\le\; \lim_k y_k .$$

3. **Convergent implies Cauchy.** If $(x_k)$ converges in $F$, it is Cauchy in
   $F$.
4. **Cauchy implies bounded.** If $(x_k)$ is Cauchy in $F$, it is bounded.
5. **A Cauchy sequence with a convergent subsequence converges.** If $(x_k)$ is
   Cauchy in $F$ and some subsequence $(x_{n_j})$ converges in $F$, then $(x_k)$
   converges in $F$ as well, and

   $$\lim_k x_k \;=\; \lim_j x_{n_j} .$$

   Both sides are asserted to exist: the right-hand side by hypothesis, the
   left-hand side as part of the conclusion.

**Why this is a separate item.** Each of the five is proved in this library for
sequences of *reals*, and none of those proofs may be cited here.
[[rem-sequence-conventions]] is explicit about it: a theorem about sequences of
reals is a theorem about $\mathbb{R}$, and the fact that its argument would
transfer to an arbitrary ordered field is a statement about the argument, not a
licence to cite the result. The five are collected here, proved from the ordered
field axioms alone, so that the completeness equivalences of this page have one
place to cite instead of five inline reconstructions.

## Facts & Assumptions

**Given:** An ordered field $F$ and sequences $(x_k)$, $(y_k)$ in $F$. Each of the five claims is proved under its own stated hypotheses; nothing is assumed of $(x_k)$ or $(y_k)$ outside the claim being proved.

[L1] Sequences in an ordered field: $(x_k)$ converges to $L$ in $F$ when for every $\varepsilon > 0$ in $F$ there is $N \in \mathbb{N}$ with $|x_k - L| < \varepsilon$ for all $k \ge N$; $(x_k)$ is Cauchy in $F$ when for every $\varepsilon > 0$ in $F$ there is $N \in \mathbb{N}$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge N$; $(x_k)$ is bounded when there is $M \in F$ with $|x_k| \le M$ for every $k$; and a subsequence of $(x_k)$ is a sequence $(x_{n_j})_{j \in \mathbb{N}}$ for a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ ([[def-sequences-in-an-ordered-field]]).

[L2] Triangle inequality: $|u + v| \le |u| + |v|$ for $u, v \in F$ ([[lem-of-triangle-inequality]]).

[L3] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and $u \le |u|$ ([[lem-of-abs-value]]).

[L4] Order in $F$: exactly one of $u < v$, $u = v$, $v < u$ holds, so the order is total, and both $<$ and $\le$ are transitive; adding a constant preserves the strict order and two strict inequalities may be added ([[lem-of-add-order]]); the nonstrict forms of those two, used below, are the strict forms together with the equality cases, which trichotomy settles ([[def-ordered-field]]).

[L5] Halving: $0 < 1_F$ ([[cor-of-one-positive]]), so $2 \cdot 1_F = 1_F + 1_F > 0$ ([[lem-of-naturals-positive]]) and $2 \cdot 1_F$ is nonzero, hence invertible with $(2 \cdot 1_F)^{-1} > 0$ ([[lem-of-inverse-positive]]). Writing $\varepsilon/2$ for $\varepsilon \cdot (2 \cdot 1_F)^{-1}$, an $\varepsilon > 0$ gives $\varepsilon/2 > 0$ and $\varepsilon/2 + \varepsilon/2 = \varepsilon$ ([[def-ordered-field]]).

[L6] Induction principle on $\mathbb{N}$ ([[thm-induction-principle]]).

[L7] Growth of an index map: a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ satisfies $n_j \ge j$ for every $j$ ([[lem-index-map-grows]]).

[L8] The order on $\mathbb{N}$ is total and transitive, so of any two indices one is $\ge$ the other, and every index $k$ satisfies $k \le N$ or $k \ge N$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 If $d \in F$ satisfies $d < \varepsilon$ for every $\varepsilon > 0$ in $F$, then $d \le 0$: were $d > 0$, the instance $\varepsilon = d$ would give $d < d$, which trichotomy forbids, so $d > 0$ fails and totality leaves $d \le 0$. [L4, algebra]

1.2 For every $\varepsilon > 0$ in $F$ one has $\varepsilon/2 > 0$ and $\varepsilon/2 + \varepsilon/2 = \varepsilon$. [L5]

1.3 **Claim 1.** Assume $x_k \to L$ and $x_k \to L'$, and let $\varepsilon > 0$ in $F$ be arbitrary; choose $N_1$ with $|x_k - L| < \varepsilon/2$ for $k \ge N_1$, choose $N_2$ with $|x_k - L'| < \varepsilon/2$ for $k \ge N_2$, and let $N$ be whichever of $N_1, N_2$ is the larger. [L1, L8, choose]

1.4 **Claim 2.** Assume $x_k \to L$, $y_k \to M$ and $x_k \le y_k$ for every $k$, and let $\varepsilon > 0$ in $F$ be arbitrary; choose $N_1$ with $|x_k - L| < \varepsilon/2$ for $k \ge N_1$, choose $N_2$ with $|y_k - M| < \varepsilon/2$ for $k \ge N_2$, and let $N$ be the larger of the two. [L1, L8, choose]

1.5 **Claim 3.** Assume $x_k \to L$ and let $\varepsilon > 0$ in $F$ be arbitrary; choose $N$ with $|x_k - L| < \varepsilon/2$ for all $k \ge N$. [L1, choose]

1.6 **Claim 4.** For every $n \in \mathbb{N}$ there is $B \in F$ with $|x_j| \le B$ for all $j \le n$, by induction on $n$: for $n = 0$ take $B = |x_0|$; and given such a $B$ for $n$, totality of the order on $F$ gives either $|x_{n+1}| \le B$, in which case the same $B$ serves for $n + 1$, or $B < |x_{n+1}|$, in which case $|x_{n+1}|$ serves for $n+1$ by transitivity. [L1, L4, L6]

1.7 **Claim 4, continued.** Assume $(x_k)$ is Cauchy; since $1_F > 0$, choose $N$ with $|x_k - x_l| < 1_F$ for all $k, l \ge N$, so that for $k \ge N$ one has $|x_k| = |(x_k - x_N) + x_N| \le |x_k - x_N| + |x_N| < 1_F + |x_N|$. [L1, L2, L4, L5, choose]

1.8 **Claim 5.** Assume $(x_k)$ is Cauchy and $x_{n_j} \to L$ along a strictly increasing $n$, and let $\varepsilon > 0$ in $F$ be arbitrary; choose $N_1$ with $|x_k - x_l| < \varepsilon/2$ for $k, l \ge N_1$, choose $N_2$ with $|x_{n_j} - L| < \varepsilon/2$ for $j \ge N_2$, and let $N$ be the larger of the two, so that $n_N \ge N \ge N_1$ and $N \ge N_2$. [L1, L7, L8, choose]

2.1 For every $k \ge N$ in the situation of step 1.3: $|L - L'| = |(L - x_k) + (x_k - L')| \le |L - x_k| + |x_k - L'| = |x_k - L| + |x_k - L'| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 1.2, step 1.3, L2, L3, L4]

2.2 For every $k \ge N$ in the situation of step 1.4: $L - M = (L - x_k) + (x_k - y_k) + (y_k - M)$, where $L - x_k \le |L - x_k| < \varepsilon/2$ and $y_k - M \le |y_k - M| < \varepsilon/2$ and $x_k - y_k \le 0$; adding, $L - M < \varepsilon$. [step 1.2, step 1.4, L3, L4]

2.3 For all $k, l \ge N$ in the situation of step 1.5: $|x_k - x_l| = |(x_k - L) + (L - x_l)| \le |x_k - L| + |x_l - L| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 1.2, step 1.5, L2, L3, L4]

2.4 In the situation of steps 1.6 and 1.7, let $B$ be a bound for $|x_j|$ over $j \le N$ and set $M := B + 1_F + |x_N|$; then $B \ge |x_0| \ge 0$ and $1_F + |x_N| > 0$, so $M \ge B$ and $M \ge 1_F + |x_N|$, whence $|x_k| \le B \le M$ for $k \le N$ and $|x_k| < 1_F + |x_N| \le M$ for $k \ge N$; as every index satisfies $k \le N$ or $k \ge N$, $(x_k)$ is bounded. [step 1.6, step 1.7, L1, L3, L4, L8]

2.5 For every $k \ge N$ in the situation of step 1.8: $|x_k - L| = |(x_k - x_{n_N}) + (x_{n_N} - L)| \le |x_k - x_{n_N}| + |x_{n_N} - L| < \varepsilon/2 + \varepsilon/2 = \varepsilon$, the first summand being covered because $k \ge N \ge N_1$ and $n_N \ge N_1$. [step 1.2, step 1.8, L2, L4]

3.1 By step 2.1 the element $|L - L'|$ is below every $\varepsilon > 0$, so $|L - L'| \le 0$; with $|L - L'| \ge 0$ this forces $|L - L'| = 0$ and hence $L = L'$, which is claim 1. [step 1.1, step 2.1, L3, L4]

3.2 By step 2.2 the element $L - M$ is below every $\varepsilon > 0$, so $L - M \le 0$, that is $L \le M$, which is claim 2. [step 1.1, step 2.2, L4]

3.3 Step 2.3 produced, for an arbitrary $\varepsilon > 0$, an $N$ beyond which all pairs are within $\varepsilon$, so $(x_k)$ is Cauchy in $F$, which is claim 3. [step 2.3, L1]

4.1 Step 2.5 produced, for an arbitrary $\varepsilon > 0$, an $N$ beyond which $|x_k - L| < \varepsilon$, so $(x_k)$ converges in $F$ with $x_k \to L$; since also $x_{n_j} \to L$, step 3.1 identifies both limits as $L$ and gives $\lim_k x_k = \lim_j x_{n_j}$, which is claim 5. [step 2.5, step 3.1, L1]

5.1 Claims 1, 2, 3, 4 and 5 are steps 3.1, 3.2, 3.3, 2.4 and 4.1 respectively, so all five hold. [step 2.4, step 3.1, step 3.2, step 3.3, step 4.1] ∎

## Remarks

- **Nothing above uses the Archimedean property, and nothing above uses
  completeness.** The five claims hold in every ordered field, including
  $\mathbb{R}(t)$ and $\mathbb{R}((t^{-1}))$. That is what makes them safe to
  use on both sides of every implication proved on this page.

- **Claim 2 is genuinely non-strict.** From $x_k < y_k$ at every index one gets
  only $L \le M$: the sequences $x_k = 0$ and $y_k = \varepsilon/(k+1)$ in an
  Archimedean $F$ have $x_k < y_k$ and equal limits. The real-number version of
  this warning is recorded at [[lem-limit-preserves-order]].

- **There is deliberately no arithmetic clause here.** Nothing above lets one
  add, multiply or divide two limits in a general ordered field, and no item in
  this library does: [[thm-algebra-of-limits]] is stated for sequences of reals,
  and by the rule recalled above it may not be cited for a general $F$. No proof
  on this page needs such a clause; every abstract argument here works with the
  defining $\varepsilon$ and $N$ directly, or with clauses 1 to 5.

- **Claim 4 avoids any appeal to a maximum of a finite set.** The library's
  finite-maximum lemma [[lem-finite-set-has-max]] is stated for $\mathbb{R}$,
  so it is unavailable here for the same reason the other four real-valued
  lemmas are; step 1.6 replaces it by an induction that uses nothing but
  totality of the order of $F$.
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


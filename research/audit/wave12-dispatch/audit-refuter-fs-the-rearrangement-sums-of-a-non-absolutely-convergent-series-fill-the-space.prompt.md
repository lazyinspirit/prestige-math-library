# Audit proof-refuter brief — Wave 12, A6

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

- critical risk (10): 21 declared dependencies; 20 cited facts; 6 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language

## Target item — `fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space`

Normalized current SHA-256: `fccf4b29aee8fb008f9448a85ec5696747f119b92f8e10b19bf73415354d697e`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space
kind: false-statement
title: "FALSE: if a convergent series in $\\mathbb{R}^{n}$ does not converge absolutely, then every point of $\\mathbb{R}^{n}$ is the sum of some rearrangement of it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-rearrangement-sums-lie-in-an-affine-subspace, ex-gamma-and-its-complement-computed-for-a-plane-series, def-the-space-of-summing-directions, def-series-of-vectors-and-rearrangement, thm-componentwise-convergence-and-completeness, thm-riemann-series-theorem, thm-absolute-convergence-in-rn, def-absolute-and-conditional-convergence, thm-p-series-rational, def-euclidean-inner-product, def-p-norms-on-rn, def-norm-and-normed-space, def-linear-subspace, def-injection-surjection-bijection, lem-standard-basis-of-f-n, def-series, lem-metric-limits-unique, def-metric-convergence, lem-finite-sum-laws, def-finite-sum, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
    - title: "T. Banakh, A Simple Inductive Proof of the Levy-Steinitz Theorem"
      url: "https://arxiv.org/abs/1711.04136"
pipeline_run: null
---

## Statement

**False claim:** let $n \ge 1$ and let $(x_k)$ be a sequence in $\mathbb{R}^{n}$
whose series converges but does not converge absolutely
([[def-series-of-vectors-and-rearrangement]]). Then every point of
$\mathbb{R}^{n}$ is the sum of some rearrangement of $\sum x_k$; that is,
$\mathcal{S}(x) = \mathbb{R}^{n}$.

**Where the claim comes from.** For $n = 1$ it is true, and it is the published
[[thm-riemann-series-theorem]]: a conditionally convergent real series can be
rearranged to any prescribed sum. The claim above is the naive transfer of that
theorem to $\mathbb{R}^{n}$ by analogy, and the analogy fails at $n = 2$
already.

**The witness** is the series of
[[ex-gamma-and-its-complement-computed-for-a-plane-series]]:
$x_k = \bigl(\varepsilon_k/\iota(k+1),\ 0\bigr)$ in $\mathbb{R}^{2}$, which
converges, does not converge absolutely, and has **no** rearrangement sum off the
horizontal axis. In particular $(0,1)$ is not a rearrangement sum.

## Facts & Assumptions

**Given:** The sequence $(x_k)$ in $\mathbb{R}^{2}$ of [[ex-gamma-and-its-complement-computed-for-a-plane-series]], with $x_k = (c_k, 0)$ and $c_k = \varepsilon_k/\iota(k+1)$.

[A1] The refuted claim, instantiated at $n = 2$ and this $(x_k)$: every point of $\mathbb{R}^{2}$, in particular $(0,1)$, is the sum of some rearrangement of $\sum x_k$.

[L1] The series $\sum x_k$ converges, with sum $s = (S,0)$, and does not converge absolutely, its norms being $1/\iota(k+1)$ and the harmonic series divergent ([[ex-gamma-and-its-complement-computed-for-a-plane-series]] clauses 1 and 2, [[thm-p-series-rational]], [[def-absolute-and-conditional-convergence]], [[def-canonical-natural]]).

[L2] A rearrangement of $\sum x_k$ is $\sum x_{\sigma(k)}$ for a bijection $\sigma$ of $\mathbb{N}$, and $\mathcal{S}(x)$ is the set of its sums ([[def-series-of-vectors-and-rearrangement]], [[def-injection-surjection-bijection]]).

[L3] Convergence in $\mathbb{R}^{2}$ is componentwise, partial sums are computed coordinatewise, and a limit in a metric space is unique ([[thm-componentwise-convergence-and-completeness]] clause 1, [[lem-standard-basis-of-f-n]] clause 1, [[lem-metric-limits-unique]], [[def-metric-convergence]], [[lem-finite-sum-laws]], [[def-finite-sum]]).

[L4] The containment theorem: $\mathcal{S}(x) \subseteq s + \Gamma^{\perp}$, and for this series $\Gamma^{\perp}$ is the set of multiples of $e_0$ ([[thm-rearrangement-sums-lie-in-an-affine-subspace]], [[def-the-space-of-summing-directions]], [[ex-gamma-and-its-complement-computed-for-a-plane-series]] clause 3, [[def-linear-subspace]], [[def-euclidean-inner-product]], [[def-p-norms-on-rn]], [[def-norm-and-normed-space]]).

## Refutation

**Proof technique:** direct.

1.1 The second coordinate of every term $x_k$ is $0$, so for every bijection $\sigma$ of $\mathbb{N}$ the second coordinate of every partial sum $\sum_{j<N}x_{\sigma(j)}$ is the finite sum of zeros, namely $0$. [L2, L3]

1.2 The hypotheses of the refuted claim are met by this series: it converges and does not converge absolutely. [L1]

2.1 If a rearrangement $\sum x_{\sigma(k)}$ converges to a point $t \in \mathbb{R}^{2}$, then by componentwise convergence its second coordinate sequence, constantly $0$ by step 1.1, converges to $t_1$; a constant sequence converges to its value and limits are unique, so $t_1 = 0$. [step 1.1, L3]

3.1 Hence every element of $\mathcal{S}(x)$ has second coordinate $0$, and $(0,1)$, whose second coordinate is $1 \ne 0$, is not a rearrangement sum. [step 2.1, L2]

4.1 So [A1] fails for a series satisfying the hypotheses of the refuted claim, and the claim is false. [step 1.2, step 3.1, A1]

5.1 The failure is structural rather than accidental: by the containment theorem every rearrangement sum lies in $s + \Gamma^{\perp}$, and here $\Gamma^{\perp}$ is a line in $\mathbb{R}^{2}$, hence a proper subset, so $\mathcal{S}(x)$ cannot be all of $\mathbb{R}^{2}$ whatever else is true of it. [step 3.1, L4] ∎

## Remarks

- **The refutation uses only the containment half.** Step 2.1 is an elementary argument about the second coordinate and needs nothing beyond componentwise convergence; step 5.1 explains it through [[thm-rearrangement-sums-lie-in-an-affine-subspace]], which proves $\mathcal{S}(x) \subseteq s+\Gamma^{\perp}$ and nothing more. **No statement about the reverse inclusion is used here, and none is asserted.**

- **Why $n = 1$ is genuinely different.** For a conditionally convergent real series $\Gamma = \{0\}$, so $\Gamma^{\perp}$ is the whole line and the containment says nothing; the space simply has no proper subspace for the rearrangement sums to be trapped in other than $\{0\}$. From $n = 2$ on there is room, and this witness uses it.

- **What a correct general statement would have to look like.** The affine subspace $s + \Gamma^{\perp}$ is an upper bound for $\mathcal{S}(x)$, and the two extremes are both realised: it is a single point when the series converges absolutely ([[thm-absolute-convergence-in-rn]]), and it is the whole line in the one-dimensional conditionally convergent case ([[thm-riemann-series-theorem]]). What happens between those extremes for $n \ge 2$ is **not settled in this library**, and the present item settles only that "everything" is the wrong answer.
````

## Wave 12 provenance row

```json
{
  "id": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://arxiv.org/abs/1711.04136"
  ],
  "rationale": "FALSE: if a convergent series in $\\\\mathbb{R}^{n}$ does not converge absolutely, then every point of $\\\\mathbb{R}^{n}$ is the sum of some rearrangement of it: The Levy–Steinitz source supplies the finite-dimensional rearrangement-sum affine-subspace framework; the item uses the library’s Gamma/Gamma-perp notation, zero-based series, and either states a weaker containment, computes a specialization, or refutes an overgeneralization. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
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
      "source": "ex-gamma-and-its-complement-computed-for-a-plane-series",
      "source_section": "Example",
      "quote": "Let $(\\varepsilon_k)$ be the alternating sequence, the unique sequence of reals with $\\varepsilon_0 = 1$ and $\\varepsilon_{k+1} = -\\varepsilon_k$, so $|\\varepsilon_k| = 1$ for every $k$ ([[lem-alternating-sequence]]). In $\\mathbb{R}^{2}$ put $$x_k \\;:=\\; \\Bigl(\\frac{\\varepsilon_k}{\\iota(k+1)},\\ 0\\Bigr) \\qquad (k \\in \\mathbb{N}),$$ with $\\iota$ the canonical natural ([[def-canonical-natural]]). Call a **line through the origin** the set of scalar multiples of a fixed nonzero vector; each such set is a linear subspace ([[def-linear-subspace]]). Then: 1. $\\sum x_k$ converges, to $s = (S, 0)$ where $S$ is the sum of the alternating harmonic series; **the value of $S$ is not computed here**, being a logarithm and outside this page's reach. 2. $\\sum x_k$ does **not** converge absolutely ([[def-series-of-vectors-and-rearrangement]]). 3. $\\Gamma = \\{\\, (0,t) : t \\in \\mathbb{R} \\,\\}$, the line of multiples of $e_1$, and $\\Gamma^{\\perp} = \\{\\, (t,0) : t \\in \\mathbb{R} \\,\\}$, the line of multiples of $e_0$ ([[def-the-space-of-summing-directions]]). 4. Consequently [[thm-rearrangement-sums-lie-in-an-affine-subspace]] confines every rearrangement sum to the horizontal line $s + \\Gamma^{\\perp} = \\{(t,0) : t \\in \\mathbb{R}\\}$; and for **this** series the confinement is exact, $\\mathcal{S}(x) = s + \\Gamma^{\\perp}$, by the published [[thm-riemann-series-theorem]] applied to the first coordinate. **Clause 4 decides nothing about the general question.** This series is degenerate: it lies inside a line, so its rearrangement behaviour is the one-dimensional behaviour of its first coordinate and nothing more. It is therefore **not** evidence about whether $\\mathcal{S}(x) = s + \\Gamma^{\\perp}$ for a series genuinely spread over $\\mathbb{R}^{n}$ with $n \\ge 2$, a question this library does not settle ([[rem-rn-conventions-and-scope]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-p-series-rational",
      "source_section": "Statement",
      "quote": "Let $p \\in \\mathbb{Q}$ with $p > 0$. For a natural number $k \\ge 1$ write $\\iota(k) = k \\cdot 1_{\\mathbb{R}}$ for the canonical natural, which is positive ([[lem-of-naturals-positive]]), and write $k^{p} := \\iota(k)^{p}$ for its rational power ([[def-rational-power]]). Then $$\\sum_{k \\ge 1} \\frac{1}{k^{p}} \\ \\text{converges} \\qquad \\Longleftrightarrow \\qquad p > 1 .$$ In particular the harmonic series $\\sum_{k \\ge 1} 1/k$ diverges, at $p = 1$, and $\\sum_{k \\ge 1} 1/k^{2}$ converges, at $p = 2$. **The index range is not cosmetic.** The series starts at $k = 1$ because $1/0^{p}$ is undefined: [[def-rational-power]] gives $0^{p} = 0$ for rational $p > 0$, and $0$ has no inverse. Sequences here are functions on $\\mathbb{N}$ and $\\mathbb{N}$ contains $0$ ([[def-series]]), so the object named above is a series from the starting index $1$ in the sense of [[def-series]], not a series of a sequence on $\\mathbb{N}$. **The exponent is rational, and that is a limitation of this page.** Rational powers of a positive base are what [[def-rational-power]] supplies; real exponents require the exponential and the logarithm, which this library develops later. The statement above is therefore the full $p$-series theorem for every exponent this page can name.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-absolute-and-conditional-convergence",
      "source_section": "Definition",
      "quote": "Let $(a_k)$ be a sequence of reals, with series $\\sum a_k$ and partial sums $s_n = \\sum_{k<n} a_k$ as in [[def-series]], and let $|x|$ be the absolute value ([[def-abs-value]]). **Absolute convergence.** The series $\\sum a_k$ **converges absolutely** when the series $\\sum |a_k|$ converges ([[def-series]]). Since $|a_k| \\ge 0$ for every $k$ ([[lem-of-abs-value]]), this is a statement about a series of nonnegative terms. **Conditional convergence.** The series $\\sum a_k$ **converges conditionally** when it converges ([[def-series]], [[def-real-limit]]) and does *not* converge absolutely. So a convergent series is exactly one of the two: absolutely convergent or conditionally convergent, according as $\\sum |a_k|$ converges or not. **One implication is already proved, and is not reproved anywhere on this page.** [[lem-absolute-convergence-implies-convergence]] states that if $\\sum |a_k|$ converges then $\\sum a_k$ converges. That lemma was coined and proved on the previous page of this track, where the root and ratio tests need it; this page names it and builds on it. In particular an absolutely convergent series is a convergent series, so the two words above really do partition the convergent series, and \"conditionally convergent\" is not vacuous by accident: the alternating harmonic series is a witness, and the witness is exhibited in [[fs-convergent-implies-absolutely-convergent]]. **General starting index.** Let $m \\in \\mathbb{N}$ and let $(a_k)_{k \\ge m}$ be a family from $m$ ([[def-series]]). The series $\\sum_{k \\ge m} a_k$ **converges absolutely** when $\\sum_{k \\ge m} |a_k|$ converges, and **converges conditionally** when it converges and does not converge absolutely. By [[def-series]] both statements are the corresponding statements for the shifted sequence $j \\mapsto a_{j+m}$, so nothing new is being defined and every result below transfers to a general starting index in the same way, exactly as [[lem-absolute-convergence-implies-convergence]] already records for the one implication it proves.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and multiplicative identity $1_F$. Define $\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$ ([[def-natural-numbers]], [[thm-recursion]]): $$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$ $\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written $n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times. **Why the notation is needed at all.** A natural number in this library is a von Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an element of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when $n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and $x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field, and writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an informal text would write $1/(k+1)$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-series-of-vectors-and-rearrangement",
      "source_section": "Definition",
      "quote": "Let $n \\in \\mathbb{N}$ with $n \\ge 1$, so that $\\mathbb{R}^{n}$ carries the Euclidean metric $d_2$ ([[lem-metrics-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]). A **sequence of vectors** is a function $x : \\mathbb{N} \\to \\mathbb{R}^{n}$, written $(x_k)$ with $x_k := x(k)$; as everywhere in this library $\\mathbb{N}$ contains $0$ and a sequence is indexed from $0$ ([[def-sequence]], [[def-metric-convergence]]). ### Partial sums and convergence The **partial sums** of $(x_k)$ are $$s_N \\;:=\\; \\sum_{k<N} x_k \\;\\in\\; \\mathbb{R}^{n} \\qquad (N \\in \\mathbb{N}),$$ the finite sum of the vector space $\\mathbb{R}^{n}$ ([[def-linear-combination-and-span]]), so $s_0 = 0$ and $s_{N+1} = s_N + x_N$. **No third notion of finite sum is introduced**: by [[lem-standard-basis-of-f-n]] clause 1 the vector sum is computed pointwise, $(s_N)(j) = \\sum_{k<N} x_k(j)$ for $j<n$, the right-hand side being the real finite sum of [[def-finite-sum]]. The **series** $\\sum x_k$ **converges to $s \\in \\mathbb{R}^{n}$** when $s_N \\to s$ in $(\\mathbb{R}^{n}, d_2)$ ([[def-metric-convergence]]), and then $s$ is **the sum**, written $\\sum_{k=0}^{\\infty}x_k$. The symbol denotes a single vector, because a sequence in a metric space has at most one limit ([[lem-metric-limits-unique]]). The series **diverges** when $(s_N)$ does not converge. ### Absolute convergence $\\sum x_k$ **converges absolutely** when the real series $\\sum \\lVert x_k\\rVert_2$ converges ([[def-series]]); since $\\lVert x_k\\rVert_2 \\ge 0$ ([[def-norm-and-normed-space]]), this is a statement about a series of nonnegative terms, exactly as in [[def-absolute-and-conditional-convergence]]. **The choice of norm is immaterial.** If $N$ is any norm on $\\mathbb{R}^{n}$ then $c\\lVert x_k\\rVert_2 \\le N(x_k) \\le C\\lVert x_k\\rVert_2$ for fixed $c, C > 0$ ([[thm-all-norms-on-rn-are-equivalent]], [[def-equivalent-norms]]), so $\\sum N(x_k)$ converges exactly when $\\sum\\lVert x_k\\rVert_2$ does, both being series of nonnegative terms. The notion defined above therefore depends on $\\mathbb{R}^{n}$ and not on the norm chosen to test it. ### Rearrangement and the set of rearrangement sums Let $\\sigma : \\mathbb{N} \\to \\mathbb{N}$ be a bijection ([[def-injection-surjection-bijection]]). The **rearrangement of $\\sum x_k$ along $\\sigma$** is the series $\\sum x_{\\sigma(k)}$ of the sequence $k \\mapsto x_{\\sigma(k)}$, verbatim as in [[def-rearrangement-and-unconditional-convergence]] one dimension down. The **set of rearrangement sums** of $(x_k)$ is $$\\mathcal{S}(x) \\;:=\\; \\Bigl\\{\\, s \\in \\mathbb{R}^{n} \\;:\\; \\text{some rearrangement of } \\sum x_k \\text{ converges to } s \\,\\Bigr\\}.$$ Taking $\\sigma$ to be the identity shows that a convergent $\\sum x_k$ has its own sum in $\\mathcal{S}(x)$, so $\\mathcal{S}(x) \\ne \\varnothing$ for a convergent series. ### Agreement with the one-dimensional theory $\\mathbb{R}^{1}$ is the set of functions $1 \\to \\mathbb{R}$ and is **not literally** $\\mathbb{R}$. The map $\\theta : \\mathbb{R} \\to \\mathbb{R}^{1}$ sending $t$ to the function with value $t$ at $0$ is a bijection; it preserves addition and scalar multiplication, since both are computed pointwise ([[def-vector-space]], [[lem-standard-basis-of-f-n]]), and $d_2(\\theta(s),\\theta(t)) = |s-t|$, so it is an isometric bijection ([[def-isometry-and-metric-embedding]]). Under that identification, and for $n = 1$: - the partial sums above are the partial sums of [[def-series]]; - convergence and the sum are those of [[def-series]]; - absolute convergence is that of [[def-absolute-and-conditional-convergence]], since $\\lVert\\theta(t)\\rVert_2 = |t|$; - rearrangement is that of [[def-rearrangement-and-unconditional-convergence]]; - $\\mathcal{S}(x)$ is the image under $\\theta$ of the set of rearrangement sums that the published remark [[rem-rearrangement-in-higher-dimensions]] writes $\\mathcal{S}(a)$. **Every comparison on this page between $\\mathbb{R}^{n}$ and the published one-dimensional theory goes through this identification, and it is stated each time.**",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-injection-surjection-bijection",
      "source_section": "Definition",
      "quote": "Let $A$ and $B$ be sets and let $f : A \\to B$ be a function ([[def-function]]). - $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \\in A$. - $f$ is **surjective** (onto) if for every $b \\in B$ there is some $x \\in A$ with $f(x) = b$; equivalently, the image $f[A] := \\{ f(x) : x \\in A \\}$ equals $B$. - $f$ is **bijective** if it is both injective and surjective. For $S \\subseteq A$ we write $f[S] = \\{ f(x) : x \\in S \\}$ for the image of $S$, and for $T \\subseteq B$ we write $f^{-1}[T] = \\{ x \\in A : f(x) \\in T \\}$ for the preimage of $T$; these are the image and preimage of a set under $f$ read as a relation ([[def-image-and-preimage-under-a-relation]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-componentwise-convergence-and-completeness",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $\\mathbb{R}^{n}$ carry the Euclidean metric $d_2$ of [[lem-metrics-on-rn]], and let $\\bigl(x^{(j)}\\bigr)_{j\\in\\mathbb{N}}$ be a sequence in $\\mathbb{R}^{n}$ ([[def-metric-convergence]]). For $k < n$ write $\\bigl(x^{(j)}_k\\bigr)_{j\\in\\mathbb{N}}$ for the $k$-th **coordinate sequence**, a sequence of reals ([[def-sequence]]). Then: 1. **Convergence is componentwise.** For $x \\in \\mathbb{R}^{n}$, $x^{(j)} \\to x$ in $(\\mathbb{R}^{n}, d_2)$ if and only if $x^{(j)}_k \\to x_k$ in $\\mathbb{R}$ for every $k<n$ ([[def-real-limit]]). 2. **Cauchyness is componentwise.** $\\bigl(x^{(j)}\\bigr)$ is Cauchy in $(\\mathbb{R}^{n},d_2)$ ([[def-cauchy-in-metric]]) if and only if every coordinate sequence is Cauchy in $\\mathbb{R}$. 3. **Completeness in every norm.** For every norm $N$ on $\\mathbb{R}^{n}$ ([[def-norm-and-normed-space]]) the metric space $(\\mathbb{R}^{n}, d_N)$ is complete ([[def-complete-metric-space]]). **Clause 3 is obtained by citation and is not reproved here.** [[thm-euclidean-space-complete]] clause 2 states that $(\\mathbb{R}^{n},d_2)$ is complete, **for $n \\ge 1$ only**, and this theorem carries that hypothesis forward without weakening it; what is added is the passage from $d_2$ to an arbitrary norm, through [[thm-all-norms-on-rn-are-equivalent]] and the dictionary of [[def-equivalent-norms]].",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-standard-basis-of-f-n",
      "source_section": "Statement",
      "quote": "Let $F$ be a field ([[def-field]]), let $n \\in \\mathbb{N}$ and let $F^{n}$ be the function space on the von Neumann natural $n = \\{0, \\dots, n-1\\}$, with the pointwise operations ([[def-function-space]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector** $e_i \\in F^{n}$ by $$e_i(i) = 1_F, \\qquad e_i(j) = 0_F \\ \\text{ for } j < n \\text{ with } j \\ne i .$$ Then: 1. **Finite sums in a function space are pointwise.** For every set $X$, every $p \\in \\mathbb{N}$, every list $u : p \\to F^{X}$ and every $j \\in X$, $$\\Bigl(\\sum_{k<p} u_k\\Bigr)(j) \\;=\\; \\sum_{k<p} u_k(j),$$ the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary $X$ because the companion page needs it at $X = \\mathbb{N}$.) 2. $e : n \\to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in particular $e$ is injective and its image $e[n] = \\{\\, e_i : i < n \\,\\}$ is a basis of $F^{n}$ with $e[n] \\approx n$ ([[def-equinumerous]]); 3. for every $\\lambda : n \\to F$ and every $j < n$, $\\bigl(\\sum_{i<n}\\lambda_i e_i\\bigr)(j) = \\lambda_j$; equivalently the coordinate list of $x \\in F^{n}$ with respect to the ordered basis $e$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is $i \\mapsto x(i)$; 4. $F^{n}$ is finite-dimensional over $F$ with $\\dim_F F^{n} = n$ ([[def-dimension]]); 5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function, so $F^{0}$ is the zero space, the empty list is its ordered basis, $\\varnothing$ is its basis and $\\dim_F F^{0} = 0$. Every index runs from $0$, so the coordinates of an element of $F^{n}$ are $x_0, \\dots, x_{n-1}$ and no statement above is restricted to $n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-metric-limits-unique",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a sequence in $X$ ([[def-metric-convergence]]). If $x_k \\to p$ and $x_k \\to q$, then $p = q$. So a convergent sequence in a metric space has exactly one limit, and the notation $\\lim_k x_k$ is unambiguous.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-metric-convergence",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]). A **sequence in $X$** is a function $x : \\mathbb{N} \\to X$, written $(x_k)$ with $x_k := x(k)$. As everywhere in this library, $\\mathbb{N}$ contains $0$ ([[def-natural-numbers]]) and a sequence is indexed from $0$ ([[def-sequence]]); an index range copied from a text that starts at $1$ must be shifted before it is used here. Let $(x_k)$ be a sequence in $X$ and $p \\in X$. The function $k \\mapsto d(x_k, p)$ is a sequence of reals ([[def-sequence]]), and it is nonnegative ([[lem-metric-nonnegativity]]), so $|d(x_k,p)| = d(x_k,p)$ ([[def-abs-value]]). Define $$x_k \\longrightarrow p \\text{ in } (X,d) \\quad :\\Longleftrightarrow \\quad d(x_k,p) \\longrightarrow 0 \\text{ in } \\mathbb{R},$$ the convergence on the right being that of [[def-real-limit]]. Unwound, this says: for every **rational** $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $d(x_k, p) < \\varepsilon$ for every $k \\ge K$. We then call $p$ a **limit** of $(x_k)$, and say $(x_k)$ **converges** in $(X,d)$ if it has a limit. **Rational and real $\\varepsilon$ agree here, as they do on the real line.** [[def-real-limit]] tests convergence against rational $\\varepsilon$ only, and its own remark, restated for sequences in [[def-sequence]], records that nothing is lost: below any real $\\eta > 0$ lies a positive rational ([[lem-rat-embeds-dense]]), and the index belonging to that rational serves for $\\eta$. So a proof may establish convergence by producing an index for every real $\\varepsilon > 0$, and may use a convergence hypothesis at a real $\\varepsilon$ by first passing to a rational below it. Both moves are used on this page and are always cited. **Subsequences and subsequential limits.** A **subsequence** of $(x_k)$ is the composite $x \\circ n$ for a strictly increasing $n : \\mathbb{N} \\to \\mathbb{N}$, written $(x_{n_j})$, exactly as for sequences of reals ([[def-sequence]]); and $p$ is a **subsequential limit** of $(x_k)$ in $(X,d)$ when some subsequence converges to $p$, which is the metric-space form of [[def-subsequential-limit]].",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let $\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and finite products as in [[def-finite-sum]]. Then: 1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$. 2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]). 3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$. 4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$. 5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$. 6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]), in particular an ordered field ([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set of natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$ ([[def-nat-addition]]). Let $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for $a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the upper index**, which is legitimate because of the recursion theorem ([[thm-recursion]]). That theorem produces a function of one variable, so the running index has to be carried along inside the value: applying it to the set $A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function $f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique $g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with $$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$ Write $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates. **The first coordinate is the index itself, and that is a small induction, not an observation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if $\\pi_1(g(n)) = n$, then $g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$, so $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every $n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed clauses be read off, and doing so gives $$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$ $\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those two properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies the two clauses defining $g$, hence equals $g$ by the uniqueness clause of [[thm-recursion]], so $\\Sigma' = \\Sigma$. We write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting element $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same induction on the first coordinate and the same uniqueness argument, gives the unique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with $$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$ and we write $\\prod_{k < n} a_k := \\Pi_n$. **Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate $$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$ and, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$ for the number of terms, $$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$ When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while the empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is notation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the empty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of $\\mathbb{N}$ and is only a way of writing \"no terms\". Only finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation $\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list $a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the list to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively $a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-rearrangement-sums-lie-in-an-affine-subspace",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $(x_k)$ be a sequence in $\\mathbb{R}^{n}$ whose series converges ([[def-series-of-vectors-and-rearrangement]]) and write $s := \\sum_{k=0}^{\\infty}x_k$. Let $\\Gamma$ and $\\Gamma^{\\perp}$ be as in [[def-the-space-of-summing-directions]]. Then: 1. **Nonemptiness.** $s \\in \\mathcal{S}(x)$, so $\\mathcal{S}(x) \\ne \\varnothing$. 2. **Containment.** $$\\mathcal{S}(x) \\;\\subseteq\\; s + \\Gamma^{\\perp},$$ the affine subspace through $s$ with direction $\\Gamma^{\\perp}$ ([[def-the-space-of-summing-directions]]). Equivalently, $t - s \\in \\Gamma^{\\perp}$ for every rearrangement sum $t$. 3. **The absolutely convergent case.** If $\\sum x_k$ converges absolutely then $\\Gamma = \\mathbb{R}^{n}$, $\\Gamma^{\\perp} = \\{0\\}$, the affine subspace is the single point $\\{s\\}$, and $\\mathcal{S}(x) = \\{s\\}$. 4. **The one-dimensional conditionally convergent case.** Let $n = 1$ and identify $\\mathbb{R}^{1}$ with $\\mathbb{R}$ as in [[def-series-of-vectors-and-rearrangement]]. If $\\sum x_k$ converges conditionally ([[def-absolute-and-conditional-convergence]]) then $\\Gamma = \\{0\\}$, $\\Gamma^{\\perp} = \\mathbb{R}^{1}$, and the containment of clause 2 is an **equality**, $\\mathcal{S}(x) = s + \\Gamma^{\\perp} = \\mathbb{R}^{1}$, by the published [[thm-riemann-series-theorem]]. **What this theorem does not say, stated here and repeated in the Remarks.** It proves a **containment** and nothing more. Whether $\\mathcal{S}(x)$ is all of $s + \\Gamma^{\\perp}$ when $n \\ge 2$ is **not settled anywhere on this page**, and no item on this page asserts anything about it in either direction. Clause 4 is the case $n = 1$, where the answer is supplied by a published theorem about the real line; it is not evidence for any statement in higher dimensions.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-the-space-of-summing-directions",
      "source_section": "Definition",
      "quote": "Let $n \\in \\mathbb{N}$ with $n \\ge 1$ and let $(x_k)$ be a sequence in $\\mathbb{R}^{n}$ ([[def-series-of-vectors-and-rearrangement]]). Define $$\\Gamma \\;:=\\; \\Bigl\\{\\, a \\in \\mathbb{R}^{n} \\;:\\; \\sum_k \\bigl|\\langle a, x_k\\rangle\\bigr| \\text{ converges} \\,\\Bigr\\}, \\qquad \\Gamma^{\\perp} \\;:=\\; \\bigl\\{\\, y \\in \\mathbb{R}^{n} \\;:\\; \\langle a, y\\rangle = 0 \\text{ for every } a \\in \\Gamma \\,\\bigr\\},$$ the inner product being the Euclidean one ([[def-euclidean-inner-product]]) and the series that of [[def-series]]. Elements of $\\Gamma$ are the **summing directions** of $(x_k)$: those $a$ for which the real series of the projections $\\langle a, x_k\\rangle$ converges absolutely ([[def-absolute-and-conditional-convergence]]). Both sets depend on the sequence $(x_k)$; when several are in play the notation is $\\Gamma(x)$ and $\\Gamma(x)^{\\perp}$. **Phrased with the inner product, deliberately.** The classical statement uses linear functionals and the dual space. This library has no definition of a linear map at this point in the reading order — the page that introduces linear maps, rank-nullity and quotient spaces comes **earlier in the plan order** and is not yet built — so writing $\\Gamma$ with functionals would mint that page's canonical object here. The two descriptions agree on $\\mathbb{R}^{n}$, and nothing on this page depends on their agreement. ### Both are linear subspaces **$\\Gamma$ is a linear subspace of $\\mathbb{R}^{n}$** ([[def-linear-subspace]]). It is nonempty: $\\langle 0, x_k\\rangle = 0$ for every $k$ by bilinearity, and the series with all terms $0$ converges. For $\\lambda \\in \\mathbb{R}$ and $a, b \\in \\Gamma$, bilinearity and the absolute value laws give $$\\bigl|\\langle \\lambda a + b, x_k\\rangle\\bigr| \\;=\\; \\bigl|\\lambda\\langle a,x_k\\rangle + \\langle b,x_k\\rangle\\bigr| \\;\\le\\; |\\lambda|\\,\\bigl|\\langle a,x_k\\rangle\\bigr| + \\bigl|\\langle b,x_k\\rangle\\bigr|$$ ([[lem-of-abs-value]]), and the series of the right-hand side converges by [[lem-series-linearity]] clauses 1 and 2, so the left-hand series converges by the comparison test ([[thm-direct-comparison-test]], the terms being nonnegative). By the one-step subspace test ([[lem-linear-subspace-criterion]]), $\\Gamma$ is a linear subspace. **$\\Gamma^{\\perp}$ is a linear subspace of $\\mathbb{R}^{n}$.** It contains $0$, and for $\\lambda \\in \\mathbb{R}$, $y, z \\in \\Gamma^{\\perp}$ and $a \\in \\Gamma$, bilinearity gives $\\langle a, \\lambda y + z\\rangle = \\lambda\\langle a,y\\rangle + \\langle a,z\\rangle = 0$; again [[lem-linear-subspace-criterion]] applies. Equivalently $\\Gamma^{\\perp}$ is the intersection of the linear subspaces $\\{y : \\langle a,y\\rangle = 0\\}$ over $a \\in \\Gamma$, a nonempty family since $0 \\in \\Gamma$, and [[lem-intersection-of-linear-subspaces]] gives the same conclusion. ### $\\Gamma$ is everything exactly when the series converges absolutely **If $\\sum x_k$ converges absolutely then $\\Gamma = \\mathbb{R}^{n}$.** For any $a$, Cauchy-Schwarz gives $|\\langle a,x_k\\rangle| \\le \\lVert a\\rVert_2\\lVert x_k\\rVert_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]), and $\\sum_k \\lVert a\\rVert_2\\lVert x_k\\rVert_2$ converges by [[lem-series-linearity]] clause 2; the comparison test gives $a \\in \\Gamma$. **Conversely, if $\\Gamma = \\mathbb{R}^{n}$ then $\\sum x_k$ converges absolutely.** Each standard basis vector $e_j$ lies in $\\Gamma$, and $\\langle e_j, x_k\\rangle = (x_k)_j$ ([[lem-standard-basis-of-f-n]], [[def-euclidean-inner-product]]), so each real series $\\sum_k |(x_k)_j|$ converges. A finite sum of convergent series converges, by [[lem-series-linearity]] clause 1 and induction on the number of summands ([[thm-induction-principle]], [[lem-finite-sum-laws]], [[def-finite-sum]]), so $\\sum_k \\sum_{j<n}|(x_k)_j| = \\sum_k \\lVert x_k\\rVert_1$ converges; and $\\lVert x_k\\rVert_2 \\le \\lVert x_k\\rVert_1$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, [[def-p-norms-on-rn]]), so $\\sum_k\\lVert x_k\\rVert_2$ converges by the comparison test. **That equivalence is what makes the containment theorem below contain [[thm-absolute-convergence-in-rn]] as a special case**: absolute convergence gives $\\Gamma = \\mathbb{R}^{n}$, hence $\\Gamma^{\\perp} = \\{0\\}$ (any $y \\in \\Gamma^{\\perp}$ satisfies $\\langle y,y\\rangle = 0$ and so $y = 0$ by positive definiteness), and the affine subspace below collapses to a point. ### Affine subspaces The library has no notion of an affine subspace, so one is fixed here. For a linear subspace $W \\subseteq \\mathbb{R}^{n}$ and $s \\in \\mathbb{R}^{n}$, the **affine subspace through $s$ with direction $W$** is the coset $$s + W \\;:=\\; \\{\\, s + w \\;:\\; w \\in W \\,\\} .$$ **A coset is determined by $W$ together with any one of its points.** If $p \\in s + W$, say $p = s + w_0$ with $w_0 \\in W$, then $p + W = s + W$: every $p + w = s + (w_0 + w)$ lies in $s+W$ because $W$ is closed under addition, and every $s + w = p + (w - w_0)$ lies in $p + W$ because $W$ is closed under addition and under multiplication by $-1$ ([[def-linear-subspace]], [[def-vector-space]]). In particular $s + W = s' + W$ if and only if $s - s' \\in W$.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "ex-gamma-and-its-complement-computed-for-a-plane-series",
      "source_section": "Example",
      "quote": "Let $(\\varepsilon_k)$ be the alternating sequence, the unique sequence of reals with $\\varepsilon_0 = 1$ and $\\varepsilon_{k+1} = -\\varepsilon_k$, so $|\\varepsilon_k| = 1$ for every $k$ ([[lem-alternating-sequence]]). In $\\mathbb{R}^{2}$ put $$x_k \\;:=\\; \\Bigl(\\frac{\\varepsilon_k}{\\iota(k+1)},\\ 0\\Bigr) \\qquad (k \\in \\mathbb{N}),$$ with $\\iota$ the canonical natural ([[def-canonical-natural]]). Call a **line through the origin** the set of scalar multiples of a fixed nonzero vector; each such set is a linear subspace ([[def-linear-subspace]]). Then: 1. $\\sum x_k$ converges, to $s = (S, 0)$ where $S$ is the sum of the alternating harmonic series; **the value of $S$ is not computed here**, being a logarithm and outside this page's reach. 2. $\\sum x_k$ does **not** converge absolutely ([[def-series-of-vectors-and-rearrangement]]). 3. $\\Gamma = \\{\\, (0,t) : t \\in \\mathbb{R} \\,\\}$, the line of multiples of $e_1$, and $\\Gamma^{\\perp} = \\{\\, (t,0) : t \\in \\mathbb{R} \\,\\}$, the line of multiples of $e_0$ ([[def-the-space-of-summing-directions]]). 4. Consequently [[thm-rearrangement-sums-lie-in-an-affine-subspace]] confines every rearrangement sum to the horizontal line $s + \\Gamma^{\\perp} = \\{(t,0) : t \\in \\mathbb{R}\\}$; and for **this** series the confinement is exact, $\\mathcal{S}(x) = s + \\Gamma^{\\perp}$, by the published [[thm-riemann-series-theorem]] applied to the first coordinate. **Clause 4 decides nothing about the general question.** This series is degenerate: it lies inside a line, so its rearrangement behaviour is the one-dimensional behaviour of its first coordinate and nothing more. It is therefore **not** evidence about whether $\\mathcal{S}(x) = s + \\Gamma^{\\perp}$ for a series genuinely spread over $\\mathbb{R}^{n}$ with $n \\ge 2$, a question this library does not settle ([[rem-rn-conventions-and-scope]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-linear-subspace",
      "source_section": "Definition",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). A subset $W \\subseteq V$ is a **linear subspace** of $V$ when - **(W1)** $0_V \\in W$; - **(W2)** $W$ is closed under the vector addition: $u, v \\in W$ implies $u + v \\in W$; - **(W3)** $W$ is closed under scalar multiplication: $\\lambda \\in F$ and $v \\in W$ imply $\\lambda v \\in W$. Every vector space $V$ has the two **trivial linear subspaces** $\\{0_V\\}$ and $V$ itself; a linear subspace $W$ with $W \\ne V$ is called **proper**. **The restricted operations are the required data, and $W$ is a vector space.** By (W2) the vector addition of $V$ restricts to a binary operation $W \\times W \\to W$, and by (W3) the scalar multiplication restricts to a map $F \\times W \\to W$. With these and the element $0_V$, the set $W$ is a vector space over $F$: - axioms (V2)–(V5) are equations required of elements of $W$, which are in particular elements of $V$, so they are inherited from $V$; likewise associativity and commutativity of the restricted addition; - $0_V$ lies in $W$ by (W1) and is a two-sided identity for the restricted addition, since it is one in $V$; - for $v \\in W$ the vector $(-1_F)v$ lies in $W$ by (W3), and $(-1_F)v = -v$ ([[lem-vector-space-elementary-consequences]]), so $-v \\in W$ and $v + (-v) = 0_V$ holds in $W$. So $(W,+,0_V)$ is an abelian group, which is axiom (V1), and $W$ is a vector space over $F$ **whose zero vector and whose additive inverses are those of $V$**. In the language of [[def-subgroup]], the three displayed conditions (S1) $0_V \\in W$, (S2) closure under addition and (S3) closure under additive inverses all hold, so $W$ is a subgroup of the abelian group $(V,+,0_V)$ ([[def-group]]); that reading, and its converse, are recorded as [[lem-linear-subspace-is-a-subgroup]] and are cited from there rather than re-argued below.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-euclidean-inner-product",
      "source_section": "Definition",
      "quote": "Let $n \\in \\mathbb{N}$. A natural number is a von Neumann natural, that is a set, and $n = \\{0, 1, \\dots, n-1\\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]), so $$\\mathbb{R}^{n} \\;=\\; \\{\\, x \\;:\\; x \\text{ is a function } n \\to \\mathbb{R} \\,\\}$$ is the function space of [[def-function-space]] at $F = \\mathbb{R}$ and $X = n$, a vector space over $\\mathbb{R}$ under the pointwise operations ([[def-vector-space]]). We write $x_k := x(k)$ for $k < n$, and two elements of $\\mathbb{R}^{n}$ are equal exactly when they agree at every $k < n$. This is the same set that [[lem-metrics-on-rn]] calls $\\mathbb{R}^{n}$. The **Euclidean inner product** of $x, y \\in \\mathbb{R}^{n}$ is the real number $$\\langle x, y\\rangle \\;:=\\; \\sum_{k<n} x_k\\,y_k ,$$ the finite sum of [[def-finite-sum]] applied to the list $k \\mapsto x_k y_k$ (extended by $0$ beyond $n$, as every finite list in this library is). The **Euclidean norm** of $x$ is $$\\lVert x\\rVert_2 \\;:=\\; \\sqrt{\\langle x, x\\rangle},$$ which is defined because $\\langle x,x\\rangle = \\sum_{k<n} x_k^{2} \\ge 0$ (a sum of nonnegative terms, [[lem-finite-sum-laws]] clause 4 and [[lem-of-square-positive]], the case $x_k = 0$ giving $x_k^2 = 0$ by [[def-integer-power]]) and every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]). ### Both are defined for every $n$, including $n = 0$ At $n = 0$ the set $\\mathbb{R}^{0}$ has exactly one element, the empty function, and it is the zero vector space ([[lem-standard-basis-of-f-n]] clause 5); the sum above is the empty sum, so $\\langle x,y\\rangle = 0$ and $\\lVert x\\rVert_2 = 0$. **This is the first place on this page where the two index regimes diverge, and the divergence is deliberate.** The published metrics $d_1$, $d_2$, $d_\\infty$ of [[lem-metrics-on-rn]] are defined only for $n \\ge 1$, because $d_\\infty$ would otherwise be a maximum over the empty index set; the algebra above needs no such restriction. The boundary in this page runs between the algebra and the metric, not where a reader would guess, and [[rem-rn-conventions-and-scope]] lists exactly which items inherit $n \\ge 1$. ### The algebra of the inner product For all $x, y, z \\in \\mathbb{R}^{n}$ and $\\lambda \\in \\mathbb{R}$: 1. **Symmetry.** $\\langle x,y\\rangle = \\langle y,x\\rangle$, since $x_ky_k = y_kx_k$ termwise. 2. **Additivity in the first argument.** $\\langle x + y, z\\rangle = \\langle x,z\\rangle + \\langle y,z\\rangle$: the list $k \\mapsto (x_k+y_k)z_k$ is the termwise sum of $k \\mapsto x_kz_k$ and $k \\mapsto y_kz_k$, so [[lem-finite-sum-laws]] clause 1 applies. 3. **Homogeneity in the first argument.** $\\langle \\lambda x, y\\rangle = \\lambda\\langle x,y\\rangle$, by [[lem-finite-sum-laws]] clause 2. 4. **Bilinearity.** Clauses 2 and 3 together with symmetry give the same two laws in the second argument. 5. **Positive definiteness.** $\\langle x,x\\rangle \\ge 0$, and $\\langle x,x\\rangle = 0$ if and only if $x = 0$. Indeed a vanishing sum of nonnegative terms has every term $0$ ([[lem-finite-sum-laws]] clause 4), so $x_k^{2} = 0$ for every $k < n$, and a nonzero real has a positive square ([[lem-of-square-positive]]), whence $x_k = 0$ for every $k < n$ and $x = 0$. 6. **Agreement with the published Euclidean metric.** For $n \\ge 1$ and $x, y \\in \\mathbb{R}^{n}$, $\\lVert x - y\\rVert_2 = \\sqrt{\\sum_{k<n}(x_k-y_k)^{2}} = d_2(x,y)$, the two sides being the same expression ([[lem-metrics-on-rn]]). In particular $\\lVert x\\rVert_2 = d_2(x, 0)$. That $\\lVert\\cdot\\rVert_2$ is a norm in the sense of [[def-norm-and-normed-space]] is proved in [[thm-cauchy-schwarz-and-the-euclidean-norm]], where the triangle inequality is obtained from the Cauchy-Schwarz inequality; it is not assumed here.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-p-norms-on-rn",
      "source_section": "Definition",
      "quote": "Let $n \\in \\mathbb{N}$ and let $\\mathbb{R}^{n}$ be the function space of [[def-euclidean-inner-product]], with $x_k := x(k)$ for $k < n$. ### The $p$-norm, for a rational exponent $p \\ge 1$ Let $p \\in \\mathbb{Q}$ with $p \\ge 1$. For $x \\in \\mathbb{R}^{n}$ put $$\\lVert x\\rVert_p \\;:=\\; \\Bigl(\\sum_{k<n} |x_k|^{p}\\Bigr)^{1/p},$$ where $|\\cdot|$ is the absolute value ([[def-abs-value]]), the sum is the finite sum of [[def-finite-sum]], and both powers are the **rational** powers of [[def-rational-power]]. **Every power written here is defined.** Each base $|x_k|$ is a nonnegative real and $p > 0$, so $|x_k|^{p}$ is given by [[def-rational-power]] for $|x_k| > 0$ and by its supplementary clause $0^{p} = 0$ for $|x_k| = 0$; the sum of these nonnegative terms is nonnegative ([[lem-finite-sum-laws]] clause 4), and $1/p$ is a positive rational, so the outer power is defined for the same two reasons. The value does not depend on which representative of $p$ or of $1/p$ is used ([[lem-rational-power-well-defined]]). **The exponent is a rational, and that is not a matter of taste.** [[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational** exponent only; real exponents do not exist at this point in the reading order, and [[rem-real-exponents-deferred]] records exactly why. This is also why the published Minkowski inequality [[thm-minkowski-finite]], which is what makes the triangle inequality work below, is itself stated for rational $p \\ge 1$. **No statement on this page is written for $p$ ranging over a real interval.** ### The maximum norm For $n \\ge 1$ and $x \\in \\mathbb{R}^{n}$ put $$\\lVert x\\rVert_\\infty \\;:=\\; \\max\\{\\, |x_k| \\;:\\; k < n \\,\\},$$ the maximum of a nonempty finite set of reals, which exists and is one of its elements ([[lem-finite-set-has-max]], [[def-max-min]]). **The hypothesis $n \\ge 1$ is required and propagates.** At $n = 0$ the set $\\{|x_k| : k<n\\}$ is empty and has no maximum ([[def-max-min]]). This is the same restriction the published [[lem-metrics-on-rn]] carries, for the same reason, and **every statement on this page that mentions $\\lVert\\cdot\\rVert_\\infty$ inherits it**. The $p$-norms for rational $p \\ge 1$ carry no such restriction: at $n = 0$ each is the empty sum raised to a positive rational power, hence $0$. ### The three cases the rest of the page uses - $\\lVert x\\rVert_1 = \\sum_{k<n}|x_k|$, since $t^{1} = t$ for $t \\ge 0$ ([[lem-rational-power-laws]], and $0^{1} = 0$ by the supplementary clause). - $\\lVert x\\rVert_2 = \\bigl(\\sum_{k<n}|x_k|^{2}\\bigr)^{1/2} = \\sqrt{\\sum_{k<n}x_k^{2}}$, which is exactly the Euclidean norm of [[def-euclidean-inner-product]]: the exponent $2$ agrees with the integer power, so $|x_k|^{2} = x_k^{2}$ ([[lem-of-abs-value]]), and $t^{1/2}$ is the unique nonnegative square root of $t$, which is $\\sqrt{t}$ ([[def-rational-power]], [[thm-of-square-roots]]). **The two notations denote the same function and no second Euclidean norm is introduced.** - $\\lVert x\\rVert_\\infty$ as above, for $n \\ge 1$. That each of these is a norm in the sense of [[def-norm-and-normed-space]], and that the metrics they induce are exactly the published $d_1$, $d_2$ and $d_\\infty$ of [[lem-metrics-on-rn]], is [[lem-p-norms-are-norms-and-induce-the-published-metrics]]; it is proved there and is not assumed here.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-norm-and-normed-space",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]) constructed in this library, in particular a field, so that \"vector space\" below always means vector space over $\\mathbb{R}$ ([[def-vector-space]]). Let $V$ be a vector space over $\\mathbb{R}$, with zero vector $0_V$. A **norm on $V$** is a function $N : V \\to \\mathbb{R}$ such that for all $u, v \\in V$ and all $\\lambda \\in \\mathbb{R}$: - **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$. - **(N2) Absolute homogeneity.** $N(\\lambda v) = |\\lambda|\\,N(v)$, the absolute value being that of [[def-abs-value]]. - **(N3) Triangle inequality.** $N(u + v) \\le N(u) + N(v)$. A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over $\\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write $\\lVert v\\rVert$ for $N(v)$; when several are, the norm is always named. **The values of a norm are real numbers.** The codomain is $\\mathbb{R}$, so $N(v)$ is an honest element of the complete ordered field and no infinite value is permitted. This is the same convention [[rem-metric-axiom-conventions]] records for metrics. ### Nonnegativity is a theorem, not an axiom Many texts add a fourth condition $N(v) \\ge 0$. It is redundant. Applying (N2) with $\\lambda = -1$ gives $N(-v) = |-1|\\,N(v) = N(v)$ ([[lem-of-abs-value]], [[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3) with $u = v$ and $-v$ gives $$0 \\;=\\; N(0_V) \\;=\\; N\\bigl(v + (-v)\\bigr) \\;\\le\\; N(v) + N(-v) \\;=\\; N(v) + N(v),$$ where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \\ge 0$, and if $N(v) < 0$ then $N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids ([[def-complete-ordered-field]]). Hence $N(v) \\ge 0$ for every $v \\in V$. **Consequently the verification of a candidate norm has three things to check and not four**, exactly as the verification of a candidate metric has three and not four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this library assumes nonnegativity of a norm before the argument above. ### The induced metric Let $N$ be a norm on $V$ and define $$d_N(u,v) \\;:=\\; N(u - v) \\qquad (u, v \\in V),$$ where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on $V$** ([[def-metric-space]]), and the three axioms are the three conditions above, in order: - **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$, that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$. - **(M2)** $d_N(v,u) = N(v-u) = N\\bigl((-1)(u-v)\\bigr) = |-1|\\,N(u-v) = d_N(u,v)$, by (N2), [[lem-of-abs-value]] and $(-1)w = -w$ ([[lem-vector-space-elementary-consequences]]). - **(M3)** $d_N(u,w) = N\\bigl((u-v) + (v-w)\\bigr) \\le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$, by (N3). A normed space is therefore a metric space, and every notion defined for metric spaces — open set ([[def-metric-topology]]), convergence, Cauchyness, continuity, compactness — is available in it with no further definition. **This library never introduces a second notion of any of them for normed spaces.** ### Two properties an arbitrary metric need not have The metric $d_N$ satisfies, for all $u, v, w \\in V$ and $\\lambda \\in \\mathbb{R}$: - **translation invariance**, $d_N(u + w, v + w) = N\\bigl((u+w)-(v+w)\\bigr) = N(u-v) = d_N(u,v)$; - **absolute homogeneity**, $d_N(\\lambda u, \\lambda v) = N\\bigl(\\lambda(u-v)\\bigr) = |\\lambda|\\,d_N(u,v)$, by (N2). **Not every metric on a vector space arises from a norm**, and homogeneity is what fails. The published bounded remetrisation [[lem-bounded-remetrisation]] replaces a metric $d$ by $d' = \\min\\{d, 1\\}$, a metric with the same topology whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with $d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute homogeneity would force $d'(\\lambda v, 0_V) = |\\lambda|\\,d'(v, 0_V)$, which is unbounded in $\\lambda$, while $d'$ is bounded by $1$. So the passage from norms to metrics is not reversible, and a statement about a metric on a vector space is strictly weaker than the corresponding statement about a norm.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The second coordinate of every term $x_k$ is $0$, so for every bijection $\\sigma$ of $\\mathbb{N}$ the second coordinate of every partial sum $\\sum_{j<N}x_{\\sigma(j)}$ is the finite sum of zeros, namely $0$.",
      "step": "1.1",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "The hypotheses of the refuted claim are met by this series: it converges and does not converge absolutely.",
      "step": "1.2",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "If a rearrangement $\\sum x_{\\sigma(k)}$ converges to a point $t \\in \\mathbb{R}^{2}$, then by componentwise convergence its second coordinate sequence, constantly $0$ by step 1.1, converges to $t_1$; a constant sequence converges to its value and limits are unique, so $t_1 = 0$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Hence every element of $\\mathcal{S}(x)$ has second coordinate $0$, and $(0,1)$, whose second coordinate is $1 \\ne 0$, is not a rearrangement sum.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L2"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "So [A1] fails for a series satisfying the hypotheses of the refuted claim, and the claim is false.",
      "step": "4.1",
      "inputs": [
        "step 1.2",
        "step 3.1",
        "A1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "The failure is structural rather than accidental: by the containment theorem every rearrangement sum lies in $s + \\Gamma^{\\perp}$, and here $\\Gamma^{\\perp}$ is a line in $\\mathbb{R}^{2}$, hence a proper subset, so $\\mathcal{S}(x)$ cannot be all of $\\mathbb{R}^{2}$ whatever else is true of it.",
      "step": "5.1",
      "inputs": [
        "step 3.1",
        "L4"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space: the Statement introduces no possibly empty family requiring a witness; its sequence domains are N or its displayed witness has a fixed nonempty domain."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 2.1: If a rearrangement $\\sum x_{\\sigma(k)}$ converges to a point $t \\in \\mathbb{R}^{2}$, then by componentwise convergence its second coordinate sequence, constantly $0$ by step 1.1, converges to $t_1$; a constant sequence converges to its value and limits are unique, so $t_1 = 0$."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement: The one-dimensional, one-term, or p=1 boundary is within the stated range (or is the explicit minimal witness) and was checked against the proof. **False claim:** let $n \\ge 1$ and let $(x_k)$ be a sequence in $\\mathbb{R}^{n}$ whose series converges but does not converge absolutely (). Then every point of $\\mathbb{R}^{n}$ is"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 2.1: If a rearrangement $\\sum x_{\\sigma(k)}$ converges to a point $t \\in \\mathbb{R}^{2}$, then by componentwise convergence its second coordinate sequence, constantly $0$ by step 1.1, converges to $t_1$; a constant sequence converges to its value and limits are unique, so $t_1 = 0$."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space: no closed-interval endpoint, exponent endpoint, or finite-index endpoint affects the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space: the proof makes no choice from a family whose nonemptiness is not already supplied; any witness used is explicit or uniquely determined."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the A2 contract. Alpha assigns the independent proof-refuter route at A5/A6."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-rearrangement-sums-lie-in-an-affine-subspace",
    "declared_target": "thm-rearrangement-sums-lie-in-an-affine-subspace",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "ex-gamma-and-its-complement-computed-for-a-plane-series",
    "declared_target": "ex-gamma-and-its-complement-computed-for-a-plane-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space-examples",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-the-space-of-summing-directions",
    "declared_target": "def-the-space-of-summing-directions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-series-of-vectors-and-rearrangement",
    "declared_target": "def-series-of-vectors-and-rearrangement",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-componentwise-convergence-and-completeness",
    "declared_target": "thm-componentwise-convergence-and-completeness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-riemann-series-theorem",
    "declared_target": "thm-riemann-series-theorem",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-absolute-convergence-in-rn",
    "declared_target": "thm-absolute-convergence-in-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-absolute-and-conditional-convergence",
    "declared_target": "def-absolute-and-conditional-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-p-series-rational",
    "declared_target": "thm-p-series-rational",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-euclidean-inner-product",
    "declared_target": "def-euclidean-inner-product",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-p-norms-on-rn",
    "declared_target": "def-p-norms-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-norm-and-normed-space",
    "declared_target": "def-norm-and-normed-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-linear-subspace",
    "declared_target": "def-linear-subspace",
    "target_statement_provenance": "literature-derived",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-injection-surjection-bijection",
    "declared_target": "def-injection-surjection-bijection",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-standard-basis-of-f-n",
    "declared_target": "lem-standard-basis-of-f-n",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-metric-limits-unique",
    "declared_target": "lem-metric-limits-unique",
    "target_statement_provenance": "literature-derived",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-metric-convergence",
    "declared_target": "def-metric-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
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

## Full exact-current text of every cited or declared item (21)

### `def-absolute-and-conditional-convergence`

````markdown
---
id: def-absolute-and-conditional-convergence
kind: definition
title: "Absolutely convergent and conditionally convergent series, and the general starting index"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, lem-absolute-convergence-implies-convergence, def-abs-value, lem-of-abs-value, def-real-limit]
justified_by: []
aliases: []
landmark: true
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
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Conditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Conditional_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Definition

Let $(a_k)$ be a sequence of reals, with series $\sum a_k$ and partial sums
$s_n = \sum_{k<n} a_k$ as in [[def-series]], and let $|x|$ be the absolute value
([[def-abs-value]]).

**Absolute convergence.** The series $\sum a_k$ **converges absolutely** when the
series $\sum |a_k|$ converges ([[def-series]]). Since $|a_k| \ge 0$ for every $k$
([[lem-of-abs-value]]), this is a statement about a series of nonnegative terms.

**Conditional convergence.** The series $\sum a_k$ **converges conditionally**
when it converges ([[def-series]], [[def-real-limit]]) and does *not* converge
absolutely.

So a convergent series is exactly one of the two: absolutely convergent or
conditionally convergent, according as $\sum |a_k|$ converges or not.

**One implication is already proved, and is not reproved anywhere on this page.**
[[lem-absolute-convergence-implies-convergence]] states that if $\sum |a_k|$
converges then $\sum a_k$ converges. That lemma was coined and proved on the
previous page of this track, where the root and ratio tests need it; this page
names it and builds on it. In particular an absolutely convergent series is a
convergent series, so the two words above really do partition the convergent
series, and "conditionally convergent" is not vacuous by accident: the alternating
harmonic series is a witness, and the witness is exhibited in
[[fs-convergent-implies-absolutely-convergent]].

**General starting index.** Let $m \in \mathbb{N}$ and let $(a_k)_{k \ge m}$ be a
family from $m$ ([[def-series]]). The series $\sum_{k \ge m} a_k$ **converges
absolutely** when $\sum_{k \ge m} |a_k|$ converges, and **converges
conditionally** when it converges and does not converge absolutely. By
[[def-series]] both statements are the corresponding statements for the shifted
sequence $j \mapsto a_{j+m}$, so nothing new is being defined and every result
below transfers to a general starting index in the same way, exactly as
[[lem-absolute-convergence-implies-convergence]] already records for the one
implication it proves.

## Remarks

- **Absolute convergence is a condition on the terms, not on the sum.** It says
  the series of absolute values converges, and it says nothing about the value of
  $\sum_{k=0}^{\infty} a_k$. The two sums are in general different, and no
  statement here identifies them.

- **Why the distinction earns a page.** Every result on this page separates the
  two classes. An absolutely convergent series may be reordered at will
  ([[thm-dirichlet-rearrangement]]) and multiplied by another
  ([[thm-mertens]]); a conditionally convergent one may be reordered to any sum
  whatever ([[thm-riemann-series-theorem]]). The difference is not one of degree.

- **A series of nonnegative terms converges absolutely if it converges at all**,
  since then $|a_k| = a_k$. So the distinction is invisible for the comparison,
  condensation, Raabe, Gauss and Kummer tests of the previous page, all of which
  assume terms of one sign. It is not invisible on that page as a whole: the root
  and ratio tests are stated for terms of arbitrary sign and reach convergence of
  $\sum a_k$ precisely through
  [[lem-absolute-convergence-implies-convergence]], which is where the word
  *absolutely convergent* is first used. What that page does not develop, and this
  one does, is everything that separates the two classes rather than the one
  implication those two tests need.
````

### `def-canonical-natural`

````markdown
---
id: def-canonical-natural
kind: definition
title: "The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-natural-numbers, thm-recursion]
justified_by: []
forward_refs: [def-metric-completion]
aliases: []
landmark: false
short: "$\\iota(n) = n \\cdot 1_F$"
verification:
  precheck: n/a
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## Remarks

- **Where the index shift comes from.** $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]) and $\iota(0) = 0_F$, so $1/\iota(k)$ is undefined at
  $k = 0$. A family of reciprocals indexed by $\mathbb{N}$ is therefore written
  over $\iota(k+1)$, which is why the harmonic and telescoping families of this
  library run over $k+1$ rather than over $k$. This is bookkeeping, not a
  restriction: the values are the usual ones.

- **This definition records notation; the arithmetic is proved elsewhere.** That
  $\iota$ is strictly increasing and positive on $n \ge 1$, and that it carries
  sums to sums and products to products, is [[lem-of-naturals-positive]], stated
  for an ordered field. That lemma introduces the same element by the equivalent
  recursion $1 \cdot 1_F = 1_F$, $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, which
  agrees with the definition above because $\iota(1) = \iota(0) + 1_F = 1_F$.
  Nothing here is new mathematics; the definition exists so that the notation has
  a home a reader can look up.

- **The symbol $\iota$ is used in this library for other canonical maps, and this
  definition does not govern them.** It also denotes the canonical field
  embedding $\iota : \mathbb{Q} \to F$ ([[lem-of-q-embeds]]), the isometric
  embedding of a metric space into a completion ([[def-metric-completion]]), and
  an inclusion map $\iota : S \to X$ of a subspace. Each of those is introduced
  where it is used and means something different from the map defined here. What
  the four share is only that each is the canonical map of its situation.

- **Fields, not just ordered fields.** The recursion needs no order, so the
  definition is stated for a field; every use in this library is in an ordered
  field, and the order is what makes $\iota$ injective
  ([[lem-of-naturals-positive]]). In a field of positive characteristic $\iota$
  is not injective, which is one reason the injectivity is a lemma rather than
  part of the definition.
````

### `def-euclidean-inner-product`

````markdown
---
id: def-euclidean-inner-product
kind: definition
title: "The Euclidean inner product $\\langle x,y\\rangle = \\sum_{k<n} x_k y_k$ on $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-function-space, def-vector-space, lem-standard-basis-of-f-n, def-finite-sum, lem-finite-sum-laws, lem-metrics-on-rn, lem-of-square-positive, thm-of-square-roots, def-natural-numbers, lem-nat-order-is-membership, def-integer-power, lem-power-laws]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Dot product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dot_product"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$. A natural number is a von Neumann natural, that is a set,
and $n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]],
[[lem-nat-order-is-membership]]), so

$$\mathbb{R}^{n} \;=\; \{\, x \;:\; x \text{ is a function } n \to \mathbb{R} \,\}$$

is the function space of [[def-function-space]] at $F = \mathbb{R}$ and $X = n$,
a vector space over $\mathbb{R}$ under the pointwise operations
([[def-vector-space]]). We write $x_k := x(k)$ for $k < n$, and two elements of
$\mathbb{R}^{n}$ are equal exactly when they agree at every $k < n$. This is the
same set that [[lem-metrics-on-rn]] calls $\mathbb{R}^{n}$.

The **Euclidean inner product** of $x, y \in \mathbb{R}^{n}$ is the real number

$$\langle x, y\rangle \;:=\; \sum_{k<n} x_k\,y_k ,$$

the finite sum of [[def-finite-sum]] applied to the list $k \mapsto x_k y_k$
(extended by $0$ beyond $n$, as every finite list in this library is). The
**Euclidean norm** of $x$ is

$$\lVert x\rVert_2 \;:=\; \sqrt{\langle x, x\rangle},$$

which is defined because $\langle x,x\rangle = \sum_{k<n} x_k^{2} \ge 0$ (a sum
of nonnegative terms, [[lem-finite-sum-laws]] clause 4 and
[[lem-of-square-positive]], the case $x_k = 0$ giving $x_k^2 = 0$ by
[[def-integer-power]]) and every nonnegative real has a unique nonnegative square
root ([[thm-of-square-roots]]).

### Both are defined for every $n$, including $n = 0$

At $n = 0$ the set $\mathbb{R}^{0}$ has exactly one element, the empty function,
and it is the zero vector space ([[lem-standard-basis-of-f-n]] clause 5); the sum
above is the empty sum, so $\langle x,y\rangle = 0$ and $\lVert x\rVert_2 = 0$.
**This is the first place on this page where the two index regimes diverge, and
the divergence is deliberate.** The published metrics $d_1$, $d_2$, $d_\infty$ of
[[lem-metrics-on-rn]] are defined only for $n \ge 1$, because $d_\infty$ would
otherwise be a maximum over the empty index set; the algebra above needs no such
restriction. The boundary in this page runs between the algebra and the metric,
not where a reader would guess, and [[rem-rn-conventions-and-scope]] lists
exactly which items inherit $n \ge 1$.

### The algebra of the inner product

For all $x, y, z \in \mathbb{R}^{n}$ and $\lambda \in \mathbb{R}$:

1. **Symmetry.** $\langle x,y\rangle = \langle y,x\rangle$, since $x_ky_k = y_kx_k$
   termwise.
2. **Additivity in the first argument.**
   $\langle x + y, z\rangle = \langle x,z\rangle + \langle y,z\rangle$: the list
   $k \mapsto (x_k+y_k)z_k$ is the termwise sum of $k \mapsto x_kz_k$ and
   $k \mapsto y_kz_k$, so [[lem-finite-sum-laws]] clause 1 applies.
3. **Homogeneity in the first argument.**
   $\langle \lambda x, y\rangle = \lambda\langle x,y\rangle$, by
   [[lem-finite-sum-laws]] clause 2.
4. **Bilinearity.** Clauses 2 and 3 together with symmetry give the same two laws
   in the second argument.
5. **Positive definiteness.** $\langle x,x\rangle \ge 0$, and
   $\langle x,x\rangle = 0$ if and only if $x = 0$. Indeed a vanishing sum of
   nonnegative terms has every term $0$ ([[lem-finite-sum-laws]] clause 4), so
   $x_k^{2} = 0$ for every $k < n$, and a nonzero real has a positive square
   ([[lem-of-square-positive]]), whence $x_k = 0$ for every $k < n$ and $x = 0$.
6. **Agreement with the published Euclidean metric.** For $n \ge 1$ and
   $x, y \in \mathbb{R}^{n}$,
   $\lVert x - y\rVert_2 = \sqrt{\sum_{k<n}(x_k-y_k)^{2}} = d_2(x,y)$, the two
   sides being the same expression ([[lem-metrics-on-rn]]). In particular
   $\lVert x\rVert_2 = d_2(x, 0)$.

That $\lVert\cdot\rVert_2$ is a norm in the sense of [[def-norm-and-normed-space]]
is proved in [[thm-cauchy-schwarz-and-the-euclidean-norm]], where the triangle
inequality is obtained from the Cauchy-Schwarz inequality; it is not assumed
here.

## Remarks

- **Scope: the concrete form only.** What is defined above is the Euclidean inner
  product on $\mathbb{R}^{n}$ and nothing more. The general theory of inner
  product spaces — abstract inner products, orthonormal bases, Gram-Schmidt,
  orthogonal projection and orthogonal complements of arbitrary subspaces — is
  planned for a page of this library that comes **earlier in the plan order** and
  is not yet built. No item on this page claims anything about abstract inner
  product spaces, and no item on this page introduces the general notion.

- **The standard basis and coordinates.** For $i < n$ the standard unit vector
  $e_i \in \mathbb{R}^{n}$ has $e_i(i) = 1$ and $e_i(j) = 0$ for $j \ne i$
  ([[lem-standard-basis-of-f-n]]). Then $\langle x, e_i\rangle = x_i$: the list
  $k \mapsto x_k (e_i)_k$ vanishes except at $k = i$, where its value is $x_i$,
  and a list vanishing off one index sums to its value there
  ([[lem-finite-sum-laws]] clause 3, splitting the range at $i$). So the
  coordinates of $x$ are recovered by testing against the standard basis, which
  is the form used repeatedly below.

- **Powers here are integer powers.** $x_k^{2}$ means the integer power of
  [[def-integer-power]], and $\lVert x\rVert_2^{2} = \langle x,x\rangle$ by
  [[thm-of-square-roots]] and [[lem-power-laws]].
````

### `def-finite-sum`

````markdown
---
id: def-finite-sum
kind: definition
title: "Finite sums and finite products, by recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, thm-induction-principle, def-ordered-field, def-natural-numbers, def-nat-addition, def-field, def-complete-ordered-field, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [def-finite-product]
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
    - title: "Empty sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_sum"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## Remarks

- **Why recursion and not "$a_0 + a_1 + \cdots + a_{n-1}$".** The dots are not a
  definition: they presuppose that the displayed pattern determines a value for
  every $n$, which is exactly what the recursion theorem
  ([[thm-recursion]]) supplies, and its uniqueness clause is what makes
  $\sum_{k<n} a_k$ a single well-determined real rather than a family of choices.
  Associativity and commutativity of addition are *not* used in the definition;
  they are used in the laws proved from it ([[lem-finite-sum-laws]]).
- **Naturals and rationals inside $\mathbb{R}$ (a convention used on the whole
  page).** A natural number $n$ and a rational number $r$ are not literally
  elements of $\mathbb{R}$: they enter $\mathbb{R}$ through the canonical
  embedding $\iota : \mathbb{Q} \to \mathbb{R}$, which is an injective,
  order-preserving field homomorphism ([[lem-of-q-embeds]]), restricting on
  positive naturals to $n \mapsto n \cdot 1_{\mathbb{R}} = 1_\mathbb{R} + \cdots + 1_\mathbb{R}$
  ([[lem-of-naturals-positive]]). Following ordinary practice, and only where no
  confusion is possible, we write $n$ for $\iota(n)$ and $r$ for $\iota(r)$; so,
  for instance, $\frac{1}{n}\sum_{k<n} a_k$ means
  $\iota(n)^{-1} \cdot \sum_{k<n} a_k$, which makes sense because
  $\iota(n) > 0$ for $n \ge 1$. Exponents are the one place where the
  identification is deliberately NOT made: in $a^n$ and $a^r$ the exponent stays
  a natural, an integer or a rational ([[def-integer-power]],
  [[def-rational-power]]), never a real.
- The two indexings are related by $\sum_{k=0}^{n} a_k = \sum_{k < n+1} a_k$, so
  a statement proved for one is available for the other. Sums over $k < n$ are
  the primitive form here because $\Sigma_0$, the empty sum, is then the base
  case of every induction, and no index outside $\mathbb{N}$ is ever needed.
````

### `def-injection-surjection-bijection`

````markdown
---
id: def-injection-surjection-bijection
kind: definition
title: "Injection, surjection, bijection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: [def-injective, def-surjective, def-bijective]
landmark: false
short: "injective, surjective, bijective"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "T. Tao, Analysis I, 3rd ed., §3.3 (Functions)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets and let $f : A \to B$ be a function ([[def-function]]).

- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all
  $x, y \in A$.
- $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$
  with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals
  $B$.
- $f$ is **bijective** if it is both injective and surjective.

For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$; these are the image and preimage of a set under $f$ read as a
relation ([[def-image-and-preimage-under-a-relation]]).

## Remarks

- **Composition.** If $f : A \to B$ and $g : B \to C$ are both injective then so
  is $g \circ f$, since $g(f(x)) = g(f(y))$ forces $f(x) = f(y)$ and then
  $x = y$; if both are surjective then so is $g \circ f$, since any $c \in C$ is
  $g(b)$ for some $b \in B$ and that $b$ is $f(a)$ for some $a \in A$. Hence a
  composition of bijections is a bijection. These verifications, together with the
  two partial converses, are
  [[prop-composition-preserves-injectivity-surjectivity-and-bijectivity]].

- **Inverses.** $f : A \to B$ is bijective exactly when there is a function
  $f^{-1} : B \to A$ with $f^{-1}(f(x)) = x$ for all $x \in A$ and
  $f(f^{-1}(b)) = b$ for all $b \in B$; that two-sided inverse is unique, and it
  is itself a bijection. Injectivity alone gives a bijection from $A$ onto the
  image $f[A]$, and hence an inverse defined on $f[A]$ only. No choice principle
  is involved: the value $f^{-1}(b)$ is the *unique* $x$ with $f(x) = b$, so it
  is determined rather than selected. The full statement, with the uniqueness of the
  two-sided inverse, is
  [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]; the
  corresponding statement for an arbitrary surjection is not available at this point
  in the reading order, because a right inverse for every surjection is equivalent
  to the Axiom of Choice.

- **What this item does and does not do.** A function $A \to B$ is a set of ordered
  pairs, single valued and total on $A$ ([[def-function]]); ordered pairs, Cartesian
  products, images and preimages are fixed by [[def-ordered-pair]],
  [[def-cartesian-product]] and [[def-image-and-preimage-under-a-relation]]. This
  item only fixes the three adjectives and the notation used for them. Nothing here
  is proved.
````

### `def-linear-subspace`

````markdown
---
id: def-linear-subspace
kind: definition
title: "Linear subspace of a vector space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-vector-space, def-subgroup, def-group, lem-vector-space-elementary-consequences]
justified_by: []
aliases: [def-linear-subspace-of-a-vector-space]
landmark: true
short: "linear subspace $W \\le V$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). A subset
$W \subseteq V$ is a **linear subspace** of $V$ when

- **(W1)** $0_V \in W$;
- **(W2)** $W$ is closed under the vector addition: $u, v \in W$ implies
  $u + v \in W$;
- **(W3)** $W$ is closed under scalar multiplication: $\lambda \in F$ and
  $v \in W$ imply $\lambda v \in W$.

Every vector space $V$ has the two **trivial linear subspaces** $\{0_V\}$ and $V$
itself; a linear subspace $W$ with $W \ne V$ is called **proper**.

**The restricted operations are the required data, and $W$ is a vector space.**
By (W2) the vector addition of $V$ restricts to a binary operation
$W \times W \to W$, and by (W3) the scalar multiplication restricts to a map
$F \times W \to W$. With these and the element $0_V$, the set $W$ is a vector
space over $F$:

- axioms (V2)–(V5) are equations required of elements of $W$, which are in
  particular elements of $V$, so they are inherited from $V$; likewise
  associativity and commutativity of the restricted addition;
- $0_V$ lies in $W$ by (W1) and is a two-sided identity for the restricted
  addition, since it is one in $V$;
- for $v \in W$ the vector $(-1_F)v$ lies in $W$ by (W3), and
  $(-1_F)v = -v$ ([[lem-vector-space-elementary-consequences]]), so $-v \in W$
  and $v + (-v) = 0_V$ holds in $W$.

So $(W,+,0_V)$ is an abelian group, which is axiom (V1), and $W$ is a vector
space over $F$ **whose zero vector and whose additive inverses are those of
$V$**. In the language of [[def-subgroup]], the three displayed conditions
(S1) $0_V \in W$, (S2) closure under addition and (S3) closure under additive
inverses all hold, so $W$ is a subgroup of the abelian group $(V,+,0_V)$
([[def-group]]); that reading, and its converse, are recorded as
[[lem-linear-subspace-is-a-subgroup]] and are cited from there rather than
re-argued below.

## Remarks

- **"Linear subspace", never bare "subspace", in this library.** The word
  *subspace* is already in use here for the topological notion, a subset of a
  topological space carrying the induced topology, which is an unrelated idea.
  The names on this page therefore all say *linear*: `def-linear-subspace`,
  `lem-linear-subspace-criterion`, `lem-intersection-of-linear-subspaces`,
  `lem-linear-subspace-is-a-subgroup`, `def-sum-of-linear-subspaces`. Where the
  ambient vector space is fixed and no confusion is possible, the surrounding
  prose still writes the full phrase.

- **Closure under negatives is not a fourth condition.** It follows from (W3),
  because the additive inverse of a vector is the scalar multiple $(-1_F)v$. This
  is why the definition asks for three conditions where the definition of a
  subgroup asks for three of its own, and why the one-step test
  ([[lem-linear-subspace-criterion]]) can compress them into one.

- **(W1) cannot be replaced by "$W \ne \varnothing$" while dropping the others.**
  It can be replaced by nonemptiness *given* (W3), since a nonempty $W$ closed
  under scalar multiplication contains $0_F v = 0_V$
  ([[lem-vector-space-elementary-consequences]]) for any of its elements $v$.
  Stated with (W1) the definition is checkable one condition at a time, and the
  economical single test is [[lem-linear-subspace-criterion]].

- **The field matters.** A subset of $V$ may be closed under the scalars of a
  subfield $K \subseteq F$ without being closed under all of $F$, so "linear
  subspace" always means "linear subspace over the field named". Restriction of
  scalars ([[lem-restriction-of-scalars]]) is what makes that distinction
  possible.
````

### `def-metric-convergence`

````markdown
---
id: def-metric-convergence
kind: definition
title: "Convergence of a sequence in a metric space: $x_k \\to x$ iff $d(x_k, x) \\to 0$ in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-sequence, def-real-limit, def-subsequential-limit,
       lem-metric-nonnegativity, lem-rat-embeds-dense, def-natural-numbers,
       def-abs-value]
justified_by: []
aliases: [def-metric-limit]
landmark: true
short: "$x_k \\to x$ in $(X,d)$"
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
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A **sequence in $X$** is a function $x : \mathbb{N} \to X$, written $(x_k)$ with
$x_k := x(k)$. As everywhere in this library, $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and a sequence is indexed from $0$
([[def-sequence]]); an index range copied from a text that starts at $1$ must be
shifted before it is used here.

Let $(x_k)$ be a sequence in $X$ and $p \in X$. The function
$k \mapsto d(x_k, p)$ is a sequence of reals ([[def-sequence]]), and it is
nonnegative ([[lem-metric-nonnegativity]]), so $|d(x_k,p)| = d(x_k,p)$
([[def-abs-value]]). Define

$$x_k \longrightarrow p \text{ in } (X,d) \quad :\Longleftrightarrow \quad d(x_k,p) \longrightarrow 0 \text{ in } \mathbb{R},$$

the convergence on the right being that of [[def-real-limit]]. Unwound, this
says: for every **rational** $\varepsilon > 0$ there is $K \in \mathbb{N}$ with
$d(x_k, p) < \varepsilon$ for every $k \ge K$. We then call $p$ a **limit** of
$(x_k)$, and say $(x_k)$ **converges** in $(X,d)$ if it has a limit.

**Rational and real $\varepsilon$ agree here, as they do on the real line.**
[[def-real-limit]] tests convergence against rational $\varepsilon$ only, and its
own remark, restated for sequences in [[def-sequence]], records that nothing is
lost: below any real $\eta > 0$ lies a positive rational
([[lem-rat-embeds-dense]]), and the index belonging to that rational serves for
$\eta$. So a proof may establish convergence by producing an index for every
real $\varepsilon > 0$, and may use a convergence hypothesis at a real
$\varepsilon$ by first passing to a rational below it. Both moves are used on
this page and are always cited.

**Subsequences and subsequential limits.** A **subsequence** of $(x_k)$ is the
composite $x \circ n$ for a strictly increasing $n : \mathbb{N} \to \mathbb{N}$,
written $(x_{n_j})$, exactly as for sequences of reals ([[def-sequence]]); and
$p$ is a **subsequential limit** of $(x_k)$ in $(X,d)$ when some subsequence
converges to $p$, which is the metric-space form of [[def-subsequential-limit]].

## Remarks

- **A limit is a point of $X$, and uniqueness is a theorem.** Nothing in the
  definition rules out two limits; that a sequence in a metric space has at most
  one is [[lem-metric-limits-unique]], and its proof is where the separation
  axiom (M1) is spent. Reading the same definition with a pseudometric
  ([[def-metric-space]]) that is not a metric, that is one with $p(a,b) = 0$ for
  some $a \ne b$, limits are genuinely not unique: the constant sequence at $a$
  converges to $b$ as well.
- **Convergence is defined from the metric but determined by the topology.**
  It can be restated as "every open set containing $p$ contains $x_k$ for all
  large $k$", which follows from [[lem-metric-ball-neighbourhood-base]]; so it is
  unchanged by passing to a topologically equivalent metric
  ([[def-equivalent-metrics]]). That restatement is not made part of the
  definition, because the metric form is what every proof on this page uses.
- **The relation between convergence and closure** is
  [[thm-metric-sequential-closure]]: a point lies in the closure of $A$ exactly
  when some sequence in $A$ converges to it.
````

### `def-norm-and-normed-space`

````markdown
---
id: def-norm-and-normed-space
kind: definition
title: "A norm on a real vector space, the induced metric, and the dictionary with the metric axioms"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-space, def-function-space, def-linear-map, def-metric-space, lem-metric-nonnegativity, def-metric-topology, lem-bounded-remetrisation, rem-metric-axiom-conventions, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-complete-ordered-field, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Normed vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normed_vector_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) constructed in this library, in particular a
field, so that "vector space" below always means vector space over $\mathbb{R}$
([[def-vector-space]]).

Let $V$ be a vector space over $\mathbb{R}$, with zero vector $0_V$. A **norm on
$V$** is a function $N : V \to \mathbb{R}$ such that for all $u, v \in V$ and all
$\lambda \in \mathbb{R}$:

- **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$.
- **(N2) Absolute homogeneity.** $N(\lambda v) = |\lambda|\,N(v)$, the absolute
  value being that of [[def-abs-value]].
- **(N3) Triangle inequality.** $N(u + v) \le N(u) + N(v)$.

A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over
$\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write
$\lVert v\rVert$ for $N(v)$; when several are, the norm is always named.

**The values of a norm are real numbers.** The codomain is $\mathbb{R}$, so
$N(v)$ is an honest element of the complete ordered field and no infinite value
is permitted. This is the same convention [[rem-metric-axiom-conventions]]
records for metrics.

### Nonnegativity is a theorem, not an axiom

Many texts add a fourth condition $N(v) \ge 0$. It is redundant. Applying (N2)
with $\lambda = -1$ gives $N(-v) = |-1|\,N(v) = N(v)$ ([[lem-of-abs-value]],
[[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3)
with $u = v$ and $-v$ gives

$$0 \;=\; N(0_V) \;=\; N\bigl(v + (-v)\bigr) \;\le\; N(v) + N(-v) \;=\; N(v) + N(v),$$

where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \ge 0$, and if $N(v) < 0$ then
$N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids
([[def-complete-ordered-field]]). Hence $N(v) \ge 0$ for every $v \in V$.

**Consequently the verification of a candidate norm has three things to check and
not four**, exactly as the verification of a candidate metric has three and not
four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this
library assumes nonnegativity of a norm before the argument above.

### The induced metric

Let $N$ be a norm on $V$ and define

$$d_N(u,v) \;:=\; N(u - v) \qquad (u, v \in V),$$

where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on
$V$** ([[def-metric-space]]), and the three axioms are the three conditions
above, in order:

- **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$,
  that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$.
- **(M2)** $d_N(v,u) = N(v-u) = N\bigl((-1)(u-v)\bigr) = |-1|\,N(u-v) = d_N(u,v)$,
  by (N2), [[lem-of-abs-value]] and $(-1)w = -w$
  ([[lem-vector-space-elementary-consequences]]).
- **(M3)** $d_N(u,w) = N\bigl((u-v) + (v-w)\bigr) \le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$,
  by (N3).

A normed space is therefore a metric space, and every notion defined for metric
spaces — open set ([[def-metric-topology]]), convergence, Cauchyness,
continuity, compactness — is available in it with no further definition. **This
library never introduces a second notion of any of them for normed spaces.**

### Two properties an arbitrary metric need not have

The metric $d_N$ satisfies, for all $u, v, w \in V$ and $\lambda \in \mathbb{R}$:

- **translation invariance**, $d_N(u + w, v + w) = N\bigl((u+w)-(v+w)\bigr) = N(u-v) = d_N(u,v)$;
- **absolute homogeneity**, $d_N(\lambda u, \lambda v) = N\bigl(\lambda(u-v)\bigr) = |\lambda|\,d_N(u,v)$, by (N2).

**Not every metric on a vector space arises from a norm**, and homogeneity is
what fails. The published bounded remetrisation [[lem-bounded-remetrisation]]
replaces a metric $d$ by $d' = \min\{d, 1\}$, a metric with the same topology
whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with
$d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute
homogeneity would force $d'(\lambda v, 0_V) = |\lambda|\,d'(v, 0_V)$, which is
unbounded in $\lambda$, while $d'$ is bounded by $1$. So the passage from norms
to metrics is not reversible, and a statement about a metric on a vector space is
strictly weaker than the corresponding statement about a norm.

## Remarks

- **Why (N1) is stated as an equivalence.** The direction $N(0_V) = 0$ is forced
  by (N2) with $\lambda = 0$, since $0\,v = 0_V$
  ([[lem-vector-space-elementary-consequences]]) gives $N(0_V) = |0|\,N(v) = 0$.
  Only the direction "$N(v) = 0$ implies $v = 0_V$" is a genuine assumption, and
  dropping it gives what is usually called a seminorm, a notion this library does
  not use. The situation is exactly the one [[rem-metric-axiom-conventions]]
  describes for (M1) and the pseudometric.

- **The zero space carries exactly one norm.** If $V = \{0_V\}$ then the only
  function $V \to \mathbb{R}$ satisfying (N1) is the one with value $0$, and it
  satisfies (N2) and (N3) trivially. In particular $\mathbb{R}^{0}$, the function
  space on the empty index set ([[def-function-space]]), is a normed space,
  although the metrics of the published metric theory on $\mathbb{R}^n$ are
  defined only for $n \ge 1$.

- **What is not defined here.** This item does not define linear maps; their
  published definition is [[def-linear-map]]. It also does not define operator
  norms, dual spaces, or abstract inner product spaces.
  [[rem-rn-conventions-and-scope]] records the remaining scope boundaries and
  what each later development would license.
````

### `def-p-norms-on-rn`

````markdown
---
id: def-p-norms-on-rn
kind: definition
title: "The $p$-norms $\\lVert x\\rVert_p$ for rational $p \\ge 1$, and $\\lVert x\\rVert_\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-euclidean-inner-product, def-rational-power, lem-rational-power-well-defined, lem-rational-power-laws, lem-rational-power-monotone, rem-real-exponents-deferred, thm-minkowski-finite, def-finite-sum, lem-finite-sum-laws, lem-finite-set-has-max, def-max-min, lem-metrics-on-rn, def-abs-value, lem-of-abs-value, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$ and let $\mathbb{R}^{n}$ be the function space of
[[def-euclidean-inner-product]], with $x_k := x(k)$ for $k < n$.

### The $p$-norm, for a rational exponent $p \ge 1$

Let $p \in \mathbb{Q}$ with $p \ge 1$. For $x \in \mathbb{R}^{n}$ put

$$\lVert x\rVert_p \;:=\; \Bigl(\sum_{k<n} |x_k|^{p}\Bigr)^{1/p},$$

where $|\cdot|$ is the absolute value ([[def-abs-value]]), the sum is the finite
sum of [[def-finite-sum]], and both powers are the **rational** powers of
[[def-rational-power]].

**Every power written here is defined.** Each base $|x_k|$ is a nonnegative real
and $p > 0$, so $|x_k|^{p}$ is given by [[def-rational-power]] for $|x_k| > 0$
and by its supplementary clause $0^{p} = 0$ for $|x_k| = 0$; the sum of these
nonnegative terms is nonnegative ([[lem-finite-sum-laws]] clause 4), and
$1/p$ is a positive rational, so the outer power is defined for the same two
reasons. The value does not depend on which representative of $p$ or of $1/p$ is
used ([[lem-rational-power-well-defined]]).

**The exponent is a rational, and that is not a matter of taste.**
[[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational**
exponent only; real exponents do not exist at this point in the reading order,
and [[rem-real-exponents-deferred]] records exactly why. This is also why the
published Minkowski inequality [[thm-minkowski-finite]], which is what makes the
triangle inequality work below, is itself stated for rational $p \ge 1$. **No
statement on this page is written for $p$ ranging over a real interval.**

### The maximum norm

For $n \ge 1$ and $x \in \mathbb{R}^{n}$ put

$$\lVert x\rVert_\infty \;:=\; \max\{\, |x_k| \;:\; k < n \,\},$$

the maximum of a nonempty finite set of reals, which exists and is one of its
elements ([[lem-finite-set-has-max]], [[def-max-min]]).

**The hypothesis $n \ge 1$ is required and propagates.** At $n = 0$ the set
$\{|x_k| : k<n\}$ is empty and has no maximum ([[def-max-min]]). This is the same
restriction the published [[lem-metrics-on-rn]] carries, for the same reason, and
**every statement on this page that mentions $\lVert\cdot\rVert_\infty$ inherits
it**. The $p$-norms for rational $p \ge 1$ carry no such restriction: at $n = 0$
each is the empty sum raised to a positive rational power, hence $0$.

### The three cases the rest of the page uses

- $\lVert x\rVert_1 = \sum_{k<n}|x_k|$, since $t^{1} = t$ for $t \ge 0$
  ([[lem-rational-power-laws]], and $0^{1} = 0$ by the supplementary clause).
- $\lVert x\rVert_2 = \bigl(\sum_{k<n}|x_k|^{2}\bigr)^{1/2} = \sqrt{\sum_{k<n}x_k^{2}}$,
  which is exactly the Euclidean norm of [[def-euclidean-inner-product]]: the
  exponent $2$ agrees with the integer power, so $|x_k|^{2} = x_k^{2}$
  ([[lem-of-abs-value]]), and $t^{1/2}$ is the unique nonnegative square root of
  $t$, which is $\sqrt{t}$ ([[def-rational-power]], [[thm-of-square-roots]]).
  **The two notations denote the same function and no second Euclidean norm is
  introduced.**
- $\lVert x\rVert_\infty$ as above, for $n \ge 1$.

That each of these is a norm in the sense of [[def-norm-and-normed-space]], and
that the metrics they induce are exactly the published $d_1$, $d_2$ and
$d_\infty$ of [[lem-metrics-on-rn]], is
[[lem-p-norms-are-norms-and-induce-the-published-metrics]]; it is proved there
and is not assumed here.

## Remarks

- **Why $p \ge 1$.** The triangle inequality for $\lVert\cdot\rVert_p$ is
  Minkowski's inequality, and [[thm-minkowski-finite]] is stated for rational
  $p \ge 1$. For $0 < p < 1$ the displayed expression is still defined but is not
  a norm on $\mathbb{R}^{n}$ for $n \ge 2$; nothing on this page asserts anything
  about that range, and the expression is never written with such an exponent.

- **Monotonicity in the base is what makes the comparisons below work.** For a
  fixed positive rational $r$ the map $a \mapsto a^{r}$ is strictly increasing on
  the positive reals ([[lem-rational-power-monotone]] clause 2), so an inequality
  between nonnegative sums passes through the outer power. That is the only
  property of rational powers used in the comparison chain of
  [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]].

- **The subscript $\infty$ is a name, not a number.** No arithmetic is performed
  with it, and $\lVert\cdot\rVert_\infty$ is not $\lVert\cdot\rVert_p$ for any
  exponent; it is a separately defined function that happens to sit at the end of
  the family. This is the same refusal to extend $\mathbb{R}$ silently that
  [[def-interval]] records for the interval notation.
````

### `def-series`

````markdown
---
id: def-series
kind: definition
title: "Series, partial sums, convergence and the sum, divergence, and the tail series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-sum, def-sequence, def-real-limit, def-real-numbers, lem-limit-unique]
justified_by: []
aliases: []
landmark: true
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and
a **sequence of reals** is a function $a : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]), written $(a_k)$; recall that $\mathbb{N}$ contains $0$.

**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial
sums** is

$$s_n \;:=\; \sum_{k < n} a_k \qquad (n \in \mathbb{N}),$$

the finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and
$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses
that define the finite sum. Note that $s_n$ is the sum of the $n$ terms
$a_0, \dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last
one.

**Convergence, the sum, divergence.** The **series** of $(a_k)$, written
$\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges
([[def-real-limit]]), and then the **sum of the series** is

$$\sum_{k=0}^{\infty} a_k \;:=\; \lim_{n} s_n .$$

The series **diverges** when $(s_n)$ does not converge. A convergent sequence of
reals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names
a single real number and nothing further has to be checked for it to be
well defined.

**Series with a general starting index.** Let $m \in \mathbb{N}$ and let $a$ be a
function on $\{\, k \in \mathbb{N} : k \ge m \,\}$, which we call a **family from
$m$** and write $(a_k)_{k \ge m}$. The series

$$\sum_{k \ge m} a_k$$

is by definition the series of the sequence $b_j := a_{j + m}$,
$j \in \mathbb{N}$, which is a genuine sequence of reals; it converges exactly
when that series converges, and its sum is then written
$\sum_{k = m}^{\infty} a_k$. Its partial sums are

$$\sum_{k=m}^{n-1} a_k \;=\; \sum_{j < n-m} a_{m+j} \qquad (n \ge m),$$

in the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum
$0$. A sequence on $\mathbb{N}$ is the case $m = 0$, and the two readings of
$\sum a_k$ agree there, since $b_j = a_j$.

**This clause is not a convenience.** Sequences in this library are functions on
$\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the
classical series are built from expressions that are undefined at the index $0$:
$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \ge 1$. Writing such a series as
$\sum_{k \ge 1} a_k$ names an honest object, whereas writing it as a sequence on
$\mathbb{N}$ would require a value at an index where the defining expression has
none. Every statement on this page says which starting index it uses.

**Tail series.** For $N \in \mathbb{N}$, the **$N$-th tail series** of
$\sum a_k$ is $\sum_{k \ge N} a_k$, that is the series of the $N$-th tail
$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The
$0$-th tail series is the series itself.

## Remarks

- **"Diverges" here means "does not converge", and nothing more.** A divergent
  series may have partial sums that run away to $+\infty$, or to $-\infty$, or
  that oscillate without settling anywhere. The three behaviours are not
  distinguished by the word, and no statement on this page uses "diverges" to
  mean "the partial sums are unbounded" unless it says so.

- **The symbol $\sum_{k=0}^{\infty} a_k$ is defined only for a convergent
  series.** It denotes a real number, not a formal object, and it is illegitimate
  to write it down before convergence has been established. Where a proof needs
  to speak of the series without knowing whether it converges, it speaks of
  $(a_k)$ and of $(s_n)$.

- **Two indices, doing different work.** The index $k$ runs over the terms and is
  bound; the index $n$ runs over the partial sums and is the variable in which the
  limit is taken. Confusing them is the commonest slip in the subject, and it is
  the reason the definition above fixes $s_n = \sum_{k<n} a_k$ rather than
  $\sum_{k \le n} a_k$: with this choice the recursion $s_{n+1} = s_n + a_n$ is
  the one supplied by [[def-finite-sum]], with no shift anywhere.
````

### `def-series-of-vectors-and-rearrangement`

````markdown
---
id: def-series-of-vectors-and-rearrangement
kind: definition
title: "Series of vectors in $\\mathbb{R}^n$, absolute convergence, rearrangement, and the set of rearrangement sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-euclidean-inner-product, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-componentwise-convergence-and-completeness, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, def-metric-convergence, def-series, def-absolute-and-conditional-convergence, def-rearrangement-and-unconditional-convergence, lem-standard-basis-of-f-n, def-linear-combination-and-span, def-finite-sum, lem-finite-sum-laws, def-sequence, def-injection-surjection-bijection, def-vector-space, lem-metrics-on-rn, lem-metric-limits-unique, def-isometry-and-metric-embedding, def-norm-and-normed-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "T. Banakh, A Simple Inductive Proof of the Levy-Steinitz Theorem"
      url: "https://arxiv.org/abs/1711.04136"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$ with $n \ge 1$, so that $\mathbb{R}^{n}$ carries the
Euclidean metric $d_2$ ([[lem-metrics-on-rn]],
[[lem-p-norms-are-norms-and-induce-the-published-metrics]]). A **sequence of
vectors** is a function $x : \mathbb{N} \to \mathbb{R}^{n}$, written $(x_k)$ with
$x_k := x(k)$; as everywhere in this library $\mathbb{N}$ contains $0$ and a
sequence is indexed from $0$ ([[def-sequence]], [[def-metric-convergence]]).

### Partial sums and convergence

The **partial sums** of $(x_k)$ are

$$s_N \;:=\; \sum_{k<N} x_k \;\in\; \mathbb{R}^{n} \qquad (N \in \mathbb{N}),$$

the finite sum of the vector space $\mathbb{R}^{n}$
([[def-linear-combination-and-span]]), so $s_0 = 0$ and $s_{N+1} = s_N + x_N$.
**No third notion of finite sum is introduced**: by
[[lem-standard-basis-of-f-n]] clause 1 the vector sum is computed pointwise,
$(s_N)(j) = \sum_{k<N} x_k(j)$ for $j<n$, the right-hand side being the real
finite sum of [[def-finite-sum]].

The **series** $\sum x_k$ **converges to $s \in \mathbb{R}^{n}$** when
$s_N \to s$ in $(\mathbb{R}^{n}, d_2)$ ([[def-metric-convergence]]), and then $s$
is **the sum**, written $\sum_{k=0}^{\infty}x_k$. The symbol denotes a single
vector, because a sequence in a metric space has at most one limit
([[lem-metric-limits-unique]]). The series **diverges** when $(s_N)$ does not
converge.

### Absolute convergence

$\sum x_k$ **converges absolutely** when the real series
$\sum \lVert x_k\rVert_2$ converges ([[def-series]]); since
$\lVert x_k\rVert_2 \ge 0$ ([[def-norm-and-normed-space]]), this is a statement
about a series of nonnegative terms, exactly as in
[[def-absolute-and-conditional-convergence]].

**The choice of norm is immaterial.** If $N$ is any norm on $\mathbb{R}^{n}$ then
$c\lVert x_k\rVert_2 \le N(x_k) \le C\lVert x_k\rVert_2$ for fixed $c, C > 0$
([[thm-all-norms-on-rn-are-equivalent]], [[def-equivalent-norms]]), so
$\sum N(x_k)$ converges exactly when $\sum\lVert x_k\rVert_2$ does, both being
series of nonnegative terms. The notion defined above therefore depends on
$\mathbb{R}^{n}$ and not on the norm chosen to test it.

### Rearrangement and the set of rearrangement sums

Let $\sigma : \mathbb{N} \to \mathbb{N}$ be a bijection
([[def-injection-surjection-bijection]]). The **rearrangement of $\sum x_k$ along
$\sigma$** is the series $\sum x_{\sigma(k)}$ of the sequence
$k \mapsto x_{\sigma(k)}$, verbatim as in
[[def-rearrangement-and-unconditional-convergence]] one dimension down. The
**set of rearrangement sums** of $(x_k)$ is

$$\mathcal{S}(x) \;:=\; \Bigl\{\, s \in \mathbb{R}^{n} \;:\; \text{some rearrangement of } \sum x_k \text{ converges to } s \,\Bigr\}.$$

Taking $\sigma$ to be the identity shows that a convergent $\sum x_k$ has its own
sum in $\mathcal{S}(x)$, so $\mathcal{S}(x) \ne \varnothing$ for a convergent
series.

### Agreement with the one-dimensional theory

$\mathbb{R}^{1}$ is the set of functions $1 \to \mathbb{R}$ and is **not
literally** $\mathbb{R}$. The map $\theta : \mathbb{R} \to \mathbb{R}^{1}$ sending
$t$ to the function with value $t$ at $0$ is a bijection; it preserves addition
and scalar multiplication, since both are computed pointwise
([[def-vector-space]], [[lem-standard-basis-of-f-n]]), and
$d_2(\theta(s),\theta(t)) = |s-t|$, so it is an isometric bijection
([[def-isometry-and-metric-embedding]]). Under that identification, and for
$n = 1$:

- the partial sums above are the partial sums of [[def-series]];
- convergence and the sum are those of [[def-series]];
- absolute convergence is that of [[def-absolute-and-conditional-convergence]],
  since $\lVert\theta(t)\rVert_2 = |t|$;
- rearrangement is that of [[def-rearrangement-and-unconditional-convergence]];
- $\mathcal{S}(x)$ is the image under $\theta$ of the set of rearrangement sums
  that the published remark [[rem-rearrangement-in-higher-dimensions]] writes
  $\mathcal{S}(a)$.

**Every comparison on this page between $\mathbb{R}^{n}$ and the published
one-dimensional theory goes through this identification, and it is stated each
time.**

## Remarks

- **Where $n \ge 1$ comes from.** Convergence is tested with $d_2$, and
  [[lem-metrics-on-rn]] defines the metrics on $\mathbb{R}^{n}$ only for
  $n \ge 1$. The algebra above — partial sums, rearrangement, the set
  $\mathcal{S}(x)$ as a set of vectors — makes sense at $n = 0$ as well, but
  nothing on this page is asserted there.

- **Convergence is componentwise.** By
  [[thm-componentwise-convergence-and-completeness]] clause 1 and the pointwise
  formula for partial sums, $\sum x_k$ converges to $s$ if and only if the $n$
  real series $\sum (x_k)_j$ converge, with sums $s_j$. That is the form every
  proof below uses, and it is what reduces the vector theory to the published
  scalar theory rather than duplicating it.

- **Unconditional convergence is not defined here.** The one-dimensional notion is
  [[def-rearrangement-and-unconditional-convergence]], and over $\mathbb{R}$ it
  coincides with absolute convergence ([[cor-unconditional-iff-absolute-in-r]]).
  Whether that coincidence survives to $\mathbb{R}^{n}$ for $n \ge 2$ is not
  settled anywhere on this page, and nothing here asserts it in either direction.
  What **is** proved is that absolute convergence implies convergence of every
  rearrangement to the same sum ([[thm-absolute-convergence-in-rn]]).
````

### `def-the-space-of-summing-directions`

````markdown
---
id: def-the-space-of-summing-directions
kind: definition
title: "The subspace $\\Gamma$ of directions along which a series converges absolutely, and its orthogonal complement $\\Gamma^{\\perp}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series-of-vectors-and-rearrangement, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, thm-absolute-convergence-in-rn, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-p-norms-on-rn, def-linear-subspace, lem-linear-subspace-criterion, lem-intersection-of-linear-subspaces, def-vector-space, def-series, lem-series-linearity, thm-direct-comparison-test, lem-standard-basis-of-f-n, def-absolute-and-conditional-convergence, lem-of-abs-value, lem-finite-sum-laws, def-finite-sum, thm-induction-principle, def-norm-and-normed-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
    - title: "T. Banakh, A Simple Inductive Proof of the Levy-Steinitz Theorem"
      url: "https://arxiv.org/abs/1711.04136"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$ with $n \ge 1$ and let $(x_k)$ be a sequence in
$\mathbb{R}^{n}$ ([[def-series-of-vectors-and-rearrangement]]). Define

$$\Gamma \;:=\; \Bigl\{\, a \in \mathbb{R}^{n} \;:\; \sum_k \bigl|\langle a, x_k\rangle\bigr| \text{ converges} \,\Bigr\}, \qquad \Gamma^{\perp} \;:=\; \bigl\{\, y \in \mathbb{R}^{n} \;:\; \langle a, y\rangle = 0 \text{ for every } a \in \Gamma \,\bigr\},$$

the inner product being the Euclidean one ([[def-euclidean-inner-product]]) and
the series that of [[def-series]]. Elements of $\Gamma$ are the **summing
directions** of $(x_k)$: those $a$ for which the real series of the projections
$\langle a, x_k\rangle$ converges absolutely
([[def-absolute-and-conditional-convergence]]). Both sets depend on the sequence
$(x_k)$; when several are in play the notation is $\Gamma(x)$ and
$\Gamma(x)^{\perp}$.

**Phrased with the inner product, deliberately.** The classical statement uses
linear functionals and the dual space. This library has no definition of a linear
map at this point in the reading order — the page that introduces linear maps,
rank-nullity and quotient spaces comes **earlier in the plan order** and is not
yet built — so writing $\Gamma$ with functionals would mint that page's canonical
object here. The two descriptions agree on $\mathbb{R}^{n}$, and nothing on this
page depends on their agreement.

### Both are linear subspaces

**$\Gamma$ is a linear subspace of $\mathbb{R}^{n}$** ([[def-linear-subspace]]).
It is nonempty: $\langle 0, x_k\rangle = 0$ for every $k$ by bilinearity, and the
series with all terms $0$ converges. For $\lambda \in \mathbb{R}$ and
$a, b \in \Gamma$, bilinearity and the absolute value laws give

$$\bigl|\langle \lambda a + b, x_k\rangle\bigr| \;=\; \bigl|\lambda\langle a,x_k\rangle + \langle b,x_k\rangle\bigr| \;\le\; |\lambda|\,\bigl|\langle a,x_k\rangle\bigr| + \bigl|\langle b,x_k\rangle\bigr|$$

([[lem-of-abs-value]]), and the series of the right-hand side converges by
[[lem-series-linearity]] clauses 1 and 2, so the left-hand series converges by
the comparison test ([[thm-direct-comparison-test]], the terms being
nonnegative). By the one-step subspace test
([[lem-linear-subspace-criterion]]), $\Gamma$ is a linear subspace.

**$\Gamma^{\perp}$ is a linear subspace of $\mathbb{R}^{n}$.** It contains $0$,
and for $\lambda \in \mathbb{R}$, $y, z \in \Gamma^{\perp}$ and $a \in \Gamma$,
bilinearity gives $\langle a, \lambda y + z\rangle = \lambda\langle a,y\rangle + \langle a,z\rangle = 0$;
again [[lem-linear-subspace-criterion]] applies. Equivalently $\Gamma^{\perp}$ is
the intersection of the linear subspaces
$\{y : \langle a,y\rangle = 0\}$ over $a \in \Gamma$, a nonempty family since
$0 \in \Gamma$, and [[lem-intersection-of-linear-subspaces]] gives the same
conclusion.

### $\Gamma$ is everything exactly when the series converges absolutely

**If $\sum x_k$ converges absolutely then $\Gamma = \mathbb{R}^{n}$.** For any
$a$, Cauchy-Schwarz gives
$|\langle a,x_k\rangle| \le \lVert a\rVert_2\lVert x_k\rVert_2$
([[thm-cauchy-schwarz-and-the-euclidean-norm]]), and
$\sum_k \lVert a\rVert_2\lVert x_k\rVert_2$ converges by
[[lem-series-linearity]] clause 2; the comparison test gives $a \in \Gamma$.

**Conversely, if $\Gamma = \mathbb{R}^{n}$ then $\sum x_k$ converges
absolutely.** Each standard basis vector $e_j$ lies in $\Gamma$, and
$\langle e_j, x_k\rangle = (x_k)_j$ ([[lem-standard-basis-of-f-n]],
[[def-euclidean-inner-product]]), so each real series $\sum_k |(x_k)_j|$
converges. A finite sum of convergent series converges, by
[[lem-series-linearity]] clause 1 and induction on the number of summands
([[thm-induction-principle]], [[lem-finite-sum-laws]], [[def-finite-sum]]), so
$\sum_k \sum_{j<n}|(x_k)_j| = \sum_k \lVert x_k\rVert_1$ converges; and
$\lVert x_k\rVert_2 \le \lVert x_k\rVert_1$
([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3,
[[def-p-norms-on-rn]]), so $\sum_k\lVert x_k\rVert_2$ converges by the comparison
test.

**That equivalence is what makes the containment theorem below contain
[[thm-absolute-convergence-in-rn]] as a special case**: absolute convergence
gives $\Gamma = \mathbb{R}^{n}$, hence $\Gamma^{\perp} = \{0\}$ (any
$y \in \Gamma^{\perp}$ satisfies $\langle y,y\rangle = 0$ and so $y = 0$ by
positive definiteness), and the affine subspace below collapses to a point.

### Affine subspaces

The library has no notion of an affine subspace, so one is fixed here. For a
linear subspace $W \subseteq \mathbb{R}^{n}$ and $s \in \mathbb{R}^{n}$, the
**affine subspace through $s$ with direction $W$** is the coset

$$s + W \;:=\; \{\, s + w \;:\; w \in W \,\} .$$

**A coset is determined by $W$ together with any one of its points.** If
$p \in s + W$, say $p = s + w_0$ with $w_0 \in W$, then $p + W = s + W$: every
$p + w = s + (w_0 + w)$ lies in $s+W$ because $W$ is closed under addition, and
every $s + w = p + (w - w_0)$ lies in $p + W$ because $W$ is closed under
addition and under multiplication by $-1$ ([[def-linear-subspace]],
[[def-vector-space]]). In particular $s + W = s' + W$ if and only if
$s - s' \in W$.

## Remarks

- **$0 \in \Gamma$ always, so $\Gamma$ is never empty and $\Gamma^{\perp}$ is
  never larger than $\mathbb{R}^{n}$ by accident.** At the other extreme, if
  $\Gamma = \{0\}$ then $\Gamma^{\perp} = \mathbb{R}^{n}$, the condition on $y$
  being vacuous apart from $a = 0$.

- **The definition does not presuppose convergence of $\sum x_k$**, and neither
  $\Gamma$ nor $\Gamma^{\perp}$ mentions the sum. Convergence is a hypothesis of
  the theorems that use them, not of the definition.

- **No orthogonal decomposition is claimed.** Nothing here asserts that
  $\mathbb{R}^{n}$ is the direct sum of $\Gamma$ and $\Gamma^{\perp}$, or that
  $(\Gamma^{\perp})^{\perp} = \Gamma$. Those are statements of the theory of
  inner product spaces and orthogonality, which is planned for a page earlier in
  the plan order that is not yet built, and **no item on this page uses them**.
  What is used is only that $\Gamma^{\perp}$ is a linear subspace and that
  $\langle a, y\rangle = 0$ for $a \in \Gamma$, $y \in \Gamma^{\perp}$.

- **The name.** $\Gamma$ is the set of directions in which the series is
  absolutely summable; along a direction outside $\Gamma$ the projected real
  series converges conditionally at best, and it is exactly there that
  rearrangement can move the sum.
````

### `ex-gamma-and-its-complement-computed-for-a-plane-series`

````markdown
---
id: ex-gamma-and-its-complement-computed-for-a-plane-series
kind: example
title: "A convergent series in $\\mathbb{R}^{2}$ with $\\Gamma$ a line and $\\Gamma^{\\perp}$ a line, computed from the definition"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-space-of-summing-directions, def-series-of-vectors-and-rearrangement, thm-rearrangement-sums-lie-in-an-affine-subspace, thm-componentwise-convergence-and-completeness, thm-alternating-series-test, thm-p-series-rational, thm-riemann-series-theorem, lem-series-linearity, lem-alternating-sequence, def-monotone-sequence, def-euclidean-inner-product, def-p-norms-on-rn, def-norm-and-normed-space, def-series, def-absolute-and-conditional-convergence, def-linear-subspace, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, cor-archimedean-reciprocal, def-integer-power, def-real-limit, lem-of-abs-value, lem-standard-basis-of-f-n, def-injection-surjection-bijection, thm-of-square-roots, def-rational-power]
justified_by: []
aliases: []
landmark: false
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
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
    - title: "T. Banakh, A Simple Inductive Proof of the Levy-Steinitz Theorem"
      url: "https://arxiv.org/abs/1711.04136"
pipeline_run: null
---

## Example

Let $(\varepsilon_k)$ be the alternating sequence, the unique sequence of reals
with $\varepsilon_0 = 1$ and $\varepsilon_{k+1} = -\varepsilon_k$, so
$|\varepsilon_k| = 1$ for every $k$ ([[lem-alternating-sequence]]). In
$\mathbb{R}^{2}$ put

$$x_k \;:=\; \Bigl(\frac{\varepsilon_k}{\iota(k+1)},\ 0\Bigr) \qquad (k \in \mathbb{N}),$$

with $\iota$ the canonical natural ([[def-canonical-natural]]). Call a **line
through the origin** the set of scalar multiples of a fixed nonzero vector; each
such set is a linear subspace ([[def-linear-subspace]]). Then:

1. $\sum x_k$ converges, to $s = (S, 0)$ where $S$ is the sum of the alternating
   harmonic series; **the value of $S$ is not computed here**, being a logarithm
   and outside this page's reach.
2. $\sum x_k$ does **not** converge absolutely
   ([[def-series-of-vectors-and-rearrangement]]).
3. $\Gamma = \{\, (0,t) : t \in \mathbb{R} \,\}$, the line of multiples of $e_1$,
   and $\Gamma^{\perp} = \{\, (t,0) : t \in \mathbb{R} \,\}$, the line of
   multiples of $e_0$ ([[def-the-space-of-summing-directions]]).
4. Consequently [[thm-rearrangement-sums-lie-in-an-affine-subspace]] confines
   every rearrangement sum to the horizontal line
   $s + \Gamma^{\perp} = \{(t,0) : t \in \mathbb{R}\}$; and for **this** series
   the confinement is exact, $\mathcal{S}(x) = s + \Gamma^{\perp}$, by the
   published [[thm-riemann-series-theorem]] applied to the first coordinate.

**Clause 4 decides nothing about the general question.** This series is
degenerate: it lies inside a line, so its rearrangement behaviour is the
one-dimensional behaviour of its first coordinate and nothing more. It is
therefore **not** evidence about whether $\mathcal{S}(x) = s + \Gamma^{\perp}$
for a series genuinely spread over $\mathbb{R}^{n}$ with $n \ge 2$, a question
this library does not settle ([[rem-rn-conventions-and-scope]]).

## Facts & Assumptions

**Given:** The sequence $(x_k)$ above, its first coordinate sequence $c_k := \varepsilon_k/\iota(k+1)$ and the sequence $b_k := 1/\iota(k+1)$.

[L1] The alternating sequence: $\varepsilon_0 = 1$, $\varepsilon_{k+1} = -\varepsilon_k$, and $|\varepsilon_k| = 1$ ([[lem-alternating-sequence]], [[lem-of-abs-value]]).

[L2] $\iota(k+1) > 0$ and $\iota$ is strictly increasing; $0 < u \le v$ gives $0 < 1/v \le 1/u$; and for every real $\varepsilon>0$ there is $K$ with $1/\iota(K+1) < \varepsilon$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]]).

[L3] The alternating series test: a nonincreasing null sequence $(b_k)$ makes $\sum\varepsilon_k b_k$ converge ([[thm-alternating-series-test]], [[def-monotone-sequence]], [[def-real-limit]], [[def-series]]).

[L4] The $p$-series theorem: $\sum_{k\ge1}1/k^{p}$ converges if and only if $p>1$; at $p=1$ the harmonic series diverges ([[thm-p-series-rational]], [[def-rational-power]], [[def-series]]).

[L5] Convergence in $\mathbb{R}^{2}$ is componentwise ([[thm-componentwise-convergence-and-completeness]] clause 1, [[def-series-of-vectors-and-rearrangement]], [[lem-standard-basis-of-f-n]]).

[L6] The inner product, the Euclidean norm and the definition of $\Gamma$ and $\Gamma^{\perp}$ ([[def-euclidean-inner-product]], [[def-p-norms-on-rn]], [[def-norm-and-normed-space]], [[def-the-space-of-summing-directions]], [[thm-of-square-roots]], [[def-integer-power]]).

[L7] For $c \ne 0$, $\sum c\,a_k$ converges if and only if $\sum a_k$ converges ([[lem-series-linearity]] clause 3).

[L8] The containment theorem ([[thm-rearrangement-sums-lie-in-an-affine-subspace]]) and the Riemann series theorem: a conditionally convergent real series has, for every real $c$, a rearrangement converging to $c$ ([[thm-riemann-series-theorem]] clause 1, [[def-absolute-and-conditional-convergence]], [[def-injection-surjection-bijection]]).

## Verification

**Proof technique:** direct.

1.1 $(b_k)$ is positive, nonincreasing and converges to $0$: positivity and monotonicity from $0 < \iota(k+1) < \iota(k+2)$, and convergence because for a rational $\varepsilon>0$ an index $K$ with $1/\iota(K+1)<\varepsilon$ gives $b_k \le b_K < \varepsilon$ for $k \ge K$. [L2]

1.2 The second coordinate sequence is constantly $0$, so its series converges with sum $0$. [L5]

2.1 By the alternating series test $\sum_k c_k = \sum_k \varepsilon_k b_k$ converges; write $S$ for its sum. [step 1.1, L3]

2.2 $\lVert x_k\rVert_2 = \sqrt{c_k^{2}+0} = |c_k| = |\varepsilon_k| b_k = b_k$, and $\sum_k b_k$ is the harmonic series, which diverges; so $\sum x_k$ does not converge absolutely, which is clause 2. [step 1.1, L1, L4, L6]

3.1 By componentwise convergence, $\sum x_k$ converges with sum $s = (S,0)$, which is clause 1. [step 2.1, step 1.2, L5]

3.2 For $a = (a_0,a_1) \in \mathbb{R}^{2}$: $\langle a, x_k\rangle = a_0 c_k$, so $|\langle a,x_k\rangle| = |a_0|\,b_k$. If $a_0 = 0$ every term is $0$ and the series converges; if $a_0 \ne 0$ then $|a_0| > 0$ and convergence of $\sum_k |a_0| b_k$ would give convergence of $\sum_k b_k$, which is false. [step 2.2, L1, L6, L7]

3.3 Conversely let $t \in \mathbb{R}$. The real series $\sum_k c_k$ converges by step 2.1 and does not converge absolutely by step 2.2, so it converges conditionally, and the Riemann series theorem supplies a bijection $\sigma$ of $\mathbb{N}$ with $\sum_k c_{\sigma(k)} = t$. The rearranged vector series $\sum_k x_{\sigma(k)}$ has first coordinate series $\sum_k c_{\sigma(k)}$ and second coordinate series constantly $0$, so by componentwise convergence it converges to $(t,0)$; hence $(t,0) \in \mathcal{S}(x)$. [step 2.1, step 2.2, L5, L8]

4.1 Hence $\Gamma = \{a : a_0 = 0\} = \{(0,t) : t \in \mathbb{R}\}$, the set of scalar multiples of $e_1$. [step 3.2, L6]

5.1 For $y = (y_0,y_1)$: $y \in \Gamma^{\perp}$ means $\langle (0,t), y\rangle = t\,y_1 = 0$ for every real $t$, which at $t = 1$ forces $y_1 = 0$, and conversely $y_1 = 0$ makes every such product $0$. So $\Gamma^{\perp} = \{(t,0) : t \in \mathbb{R}\}$, the set of scalar multiples of $e_0$, and clause 3 is proved. [step 4.1, L6]

6.1 By the containment theorem, $\mathcal{S}(x) \subseteq s + \Gamma^{\perp} = \{\,(S+t,\ 0) : t \in \mathbb{R}\,\} = \{\,(w,0) : w\in\mathbb{R}\,\}$. [step 3.1, step 5.1, L8]

7.1 Steps 6.1 and 3.3 give $\mathcal{S}(x) = s + \Gamma^{\perp}$, which is clause 4. [step 6.1, step 3.3] ∎

## Remarks

- **Why this example is degenerate, and why that is said out loud.** Every term $x_k$ lies in the line $\Gamma^{\perp}$, so the whole series lives there and its rearrangement theory is the theory of the real series $\sum c_k$. The equality in clause 4 is therefore the published [[thm-riemann-series-theorem]] wearing two coordinates, not a higher-dimensional phenomenon. **Nothing here supports or contradicts any statement about a series whose terms span $\mathbb{R}^{2}$.**

- **The divergence of the harmonic series may be had two ways.** Step 2.2 uses [[thm-p-series-rational]] at $p = 1$; the Cauchy condensation test gives the same conclusion, and either citation would do.

- **What the example makes concrete.** $\Gamma$ is computed from its definition, one direction at a time, and turns out to be the set of directions orthogonal to where the series actually moves: testing against $e_1$ sees only zeros, and testing against $e_0$ sees the alternating harmonic series, which is not absolutely summable. That is exactly the dichotomy [[def-the-space-of-summing-directions]] is built to record.
````

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
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
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
````

### `lem-metric-limits-unique`

````markdown
---
id: lem-metric-limits-unique
kind: lemma
title: "A sequence in a metric space has at most one limit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-metric-convergence, def-metric-space, def-real-limit, lem-rat-embeds-dense,
       lem-metric-nonnegativity, def-abs-value, lem-of-abs-value, cor-of-one-positive,
       lem-of-add-order, lem-of-inverse-positive, lem-of-sign-rules, def-field,
       def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "limits are unique"
proof_strategy: contradiction
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
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a
sequence in $X$ ([[def-metric-convergence]]). If $x_k \to p$ and $x_k \to q$,
then $p = q$.

So a convergent sequence in a metric space has exactly one limit, and the
notation $\lim_k x_k$ is unambiguous.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a sequence $(x_k)$ in $X$, and points $p, q \in X$ with $x_k \to p$ and $x_k \to q$.

[A1] Convergence: $x_k \to p$ means that for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $d(x_k,p) < \varepsilon$ for all $k \ge K$ ([[def-metric-convergence]], [[def-real-limit]]); and $d(x,y) \ge 0$ for all $x, y \in X$, so in particular $d(x_k,p) \ge 0$ and its absolute value is itself ([[lem-metric-nonnegativity]], [[def-abs-value]], [[lem-of-abs-value]]).

[L1] Density of the rationals: strictly between any two reals lies a rational, so below any real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$ ([[lem-rat-embeds-dense]]).

[L2] Halving. For a real $c > 0$ set $2 := 1 + 1$ and $c/2 := c \cdot 2^{-1}$. Then $2 > 0$, so $2 \ne 0$ and $2^{-1} > 0$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[def-ordered-field]]); hence $c/2 > 0$ ([[lem-of-sign-rules]]); and $c/2 + c/2 = c(2^{-1} + 2^{-1}) = c(2 \cdot 2^{-1}) = c$ ([[def-field]]).

[L3] Separation (M1) and the triangle inequality (M3) of $d$, together with symmetry (M2) ([[def-metric-space]]).

[L4] Trichotomy of the order of $\mathbb{R}$, and transitivity: $a < b$ and $b \le a$ cannot both hold ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L5] Adding two inequalities: $a < b$ and $c < d$ give $a + c < b + d$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $p \ne q$. [assume-contra]

2.1 By (M1) $d(p,q) \ne 0$, and $d(p,q) \ge 0$, so $c := d(p,q) > 0$ by trichotomy; put $\eta := c/2$, a positive real with $\eta + \eta = c$. [step 1.1, A1, L2, L3, L4]

3.1 Fix a rational $\varepsilon$ with $0 < \varepsilon < \eta$, and use the convergence hypotheses at $\varepsilon$ to fix $K_1, K_2 \in \mathbb{N}$ with $d(x_k,p) < \varepsilon$ for $k \ge K_1$ and $d(x_k,q) < \varepsilon$ for $k \ge K_2$. [step 2.1, A1, L1, choose]

4.1 Let $m$ be any natural with $m \ge K_1$ and $m \ge K_2$, for instance $m := K_1 + K_2$; then $d(x_m,p) < \varepsilon$ and $d(x_m,q) < \varepsilon$. [step 3.1, choose]

5.1 By symmetry and the triangle inequality, $c = d(p,q) \le d(p,x_m) + d(x_m,q) = d(x_m,p) + d(x_m,q) < \varepsilon + \varepsilon < \eta + \eta = c$. [step 4.1, step 2.1, L3, L5]

6.1 Step 5.1 asserts $c < c$, which trichotomy forbids; the supposition of step 1.1 is therefore untenable and $p = q$. [step 5.1, L4, discharge-contradiction] ∎

## Remarks

- **Where each axiom is spent.** Separation (M1) is what turns $p \ne q$ into $d(p,q) > 0$, and it is the only axiom that distinguishes a metric from a pseudometric ([[def-metric-space]]). In a pseudometric space with $d(p,q) = 0$ and $p \ne q$, the constant sequence $x_k = p$ converges to both, so the lemma is false there and this is exactly the step that fails.
- **The same argument proves more**, namely that a metric space is Hausdorff: the balls $B(p, c/2)$ and $B(q, c/2)$ are disjoint. That is recorded separately as [[thm-metric-hausdorff-separation]], and uniqueness of limits follows from it as well.
- **Instantiating at a rational is not cosmetic.** [[def-real-limit]] quantifies over rational $\varepsilon$, so a convergence hypothesis may only be applied at a rational; step 3.1 passes from the real $\eta$ to a rational below it using [[lem-rat-embeds-dense]], which is the sanctioned move.
````

### `lem-standard-basis-of-f-n`

````markdown
---
id: lem-standard-basis-of-f-n
kind: lemma
title: "The standard list $e : n \\to F^{n}$ with $e_i(i) = 1_F$ and $e_i(j) = 0_F$ for $j \\ne i$ is an ordered basis of $F^{n}$; hence $\\dim_F F^{n} = n$, and $F^{0}$ is the zero space with basis $\\varnothing$ and dimension $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-basis, def-dimension, def-linear-independence, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-function-space, def-linear-combination-and-span, def-sum-of-linear-subspaces, def-monoid-finite-product, lem-restriction-of-scalars, def-vector-space, def-field, lem-vector-space-elementary-consequences, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection, def-equinumerous, def-countable]
justified_by: []
aliases: [lem-standard-basis, def-standard-unit-vectors]
landmark: true
short: "$\\dim_F F^{n} = n$"
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
    - title: "Standard basis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Standard_basis"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field ([[def-field]]), let $n \in \mathbb{N}$ and let $F^{n}$ be the
function space on the von Neumann natural $n = \{0, \dots, n-1\}$, with the
pointwise operations ([[def-function-space]], [[def-natural-numbers]],
[[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector**
$e_i \in F^{n}$ by

$$e_i(i) = 1_F, \qquad e_i(j) = 0_F \ \text{ for } j < n \text{ with } j \ne i .$$

Then:

1. **Finite sums in a function space are pointwise.** For every set $X$, every
   $p \in \mathbb{N}$, every list $u : p \to F^{X}$ and every $j \in X$,
   $$\Bigl(\sum_{k<p} u_k\Bigr)(j) \;=\; \sum_{k<p} u_k(j),$$
   the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary
   $X$ because the companion page needs it at $X = \mathbb{N}$.)
2. $e : n \to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in
   particular $e$ is injective and its image $e[n] = \{\, e_i : i < n \,\}$ is a
   basis of $F^{n}$ with $e[n] \approx n$ ([[def-equinumerous]]);
3. for every $\lambda : n \to F$ and every $j < n$,
   $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \lambda_j$; equivalently the
   coordinate list of $x \in F^{n}$ with respect to the ordered basis $e$
   ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is
   $i \mapsto x(i)$;
4. $F^{n}$ is finite-dimensional over $F$ with $\dim_F F^{n} = n$
   ([[def-dimension]]);
5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function,
   so $F^{0}$ is the zero space, the empty list is its ordered basis,
   $\varnothing$ is its basis and $\dim_F F^{0} = 0$.

Every index runs from $0$, so the coordinates of an element of $F^{n}$ are
$x_0, \dots, x_{n-1}$ and no statement above is restricted to $n \ge 1$.

## Facts & Assumptions

**Given:** A field $F$, a natural number $n$, the vector space $F^{n}$ with pointwise operations, and the vectors $e_i$ for $i < n$.

[L1] $F^{X}$ is a vector space over $F$ with $(x+y)(j) = x(j)+y(j)$, $(\lambda x)(j) = \lambda\,x(j)$ and zero the constant function at $0_F$; two elements are equal exactly when they agree at every point; and $F^{0}$ has exactly one element, the empty function, which is $0_{F^{0}}$ ([[def-function-space]], [[def-vector-space]]).

[L2] Finite sums: $\sum_{k<0}u_k$ is the zero vector and $\sum_{k<\sigma(p)}u_k = \bigl(\sum_{k<p}u_k\bigr) + u_p$, in any vector space ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L3] $F$ is a vector space over itself, with the field addition and multiplication ([[lem-restriction-of-scalars]], claim 1), so the finite sums of $\mathbb{N}$-indexed lists of scalars are available in $(F,+,0_F)$ and satisfy (F1) and (F3); in particular a list of scalars vanishing off a single index sums to its value at that index ([[def-sum-of-linear-subspaces]]).

[L4] In $F$: $\lambda 1_F = \lambda$ and $\lambda 0_F = 0_F$ for every $\lambda \in F$ ([[def-field]], [[lem-vector-space-elementary-consequences]]).

[L5] A list $v : n \to V$ is an ordered basis of $V$ if and only if every $x \in V$ is $\sum_{i<n}\lambda_i v_i$ for exactly one $\lambda : n \to F$; an ordered basis is injective and its image is a basis with $v[n] \approx n$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], [[def-linear-basis]], [[def-linear-independence]], [[def-injection-surjection-bijection]]).

[L6] $\dim_F V$ is the unique $p \in \mathbb{N}$ with a basis $B \approx p$, defined when $V$ has a finite basis ([[def-dimension]], [[def-countable]]).

[L7] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1, that a finite sum in $F^{X}$ is computed pointwise: for every $p \in \mathbb{N}$, every list $u : p \to F^{X}$ and every $j \in X$, $\bigl(\sum_{k<p}u_k\bigr)(j) = \sum_{k<p}u_k(j)$, the right-hand sum being taken in $(F,+,0_F)$. By induction on $p$: at $p = 0$ the left side is the value at $j$ of the constant function $0_F$ and the right side is the empty sum $0_F$; and if it holds at $p$, then $\bigl(\sum_{k<\sigma(p)}u_k\bigr)(j) = \bigl(\sum_{k<p}u_k + u_p\bigr)(j) = \bigl(\sum_{k<p}u_k\bigr)(j) + u_p(j) = \sum_{k<p}u_k(j) + u_p(j) = \sum_{k<\sigma(p)}u_k(j)$, using pointwise addition and the recursion. [L1, L2, L3, L7]

2.1 Evaluating a combination of the $e_i$. Let $\lambda : n \to F$ and $j < n$. By step 1.1 and pointwise scalar multiplication, $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \sum_{i<n}(\lambda_i e_i)(j) = \sum_{i<n}\lambda_i\, e_i(j)$. The list of scalars $i \mapsto \lambda_i\,e_i(j)$ takes the value $\lambda_i 0_F = 0_F$ at every $i \ne j$ and the value $\lambda_j 1_F = \lambda_j$ at $i = j$, so it vanishes off the single index $j$ and therefore sums to $\lambda_j$. Hence $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \lambda_j$ for every $j < n$. [step 1.1, L1, L3, L4]

3.1 Existence and uniqueness of coordinates. Given $x \in F^{n}$, put $\lambda_i := x(i)$; by step 2.1 the vectors $\sum_{i<n}\lambda_i e_i$ and $x$ agree at every $j < n$, hence are equal. And if $\sum_{i<n}\lambda_i e_i = \sum_{i<n}\mu_i e_i$, then evaluating both sides at $j$ and using step 2.1 gives $\lambda_j = \mu_j$ for every $j < n$. So every $x \in F^{n}$ is $\sum_{i<n}\lambda_i e_i$ for exactly one $\lambda : n \to F$. [step 2.1, L1]

4.1 Claims 2 and 3. Step 2.1 is claim 3, and by the coordinate characterisation of an ordered basis, step 3.1 says exactly that $e$ is an ordered basis of $F^{n}$; hence $e$ is injective, $e[n]$ is a basis of $F^{n}$, and $e[n] \approx n$. [step 2.1, step 3.1, L5]

5.1 Claims 4 and 5. By step 4.1 the space $F^{n}$ has a basis with $n$ elements, so it is finite-dimensional and $\dim_F F^{n} = n$. At $n = 0$ the space $F^{0}$ has exactly one element, the empty function, which is its zero vector, so $F^{0}$ is the zero space; the list $e$ is then the empty list, its image is $\varnothing$, and $\dim_F F^{0} = 0$. [step 4.1, L1, L6] ∎

## Remarks

- **The indices start at $0$ because a natural number is the set of its predecessors.** $F^{n}$ is the function space $F^{X}$ at $X = n = \{0,\dots,n-1\}$ ([[def-function-space]], [[lem-nat-order-is-membership]]), so an element of $F^{n}$ is a function on $\{0,\dots,n-1\}$ and there is no $e_n$. Reading the standard basis off a $1$-indexed source would put a vector outside the space at one end and lose one at the other.

- **Step 1.1 is not a triviality to be skipped.** That a finite sum of functions is the pointwise finite sum is a statement about the recursion defining [[def-monoid-finite-product]] in two different monoids, and it is proved by induction. Every evaluation argument on this page and on the companion page rests on it.

- **This is the concrete counterweight to [[cor-every-vector-space-has-a-basis]].** Here a basis is written down and no choice principle is used anywhere; there a basis is produced by Zorn's lemma and none is exhibited. The companion page carries both extremes for infinite-dimensional spaces as well: an explicit infinite basis for the eventually zero families, and a basis of $\mathbb{R}$ over $\mathbb{Q}$ that no argument exhibits.
````

### `thm-absolute-convergence-in-rn`

````markdown
---
id: thm-absolute-convergence-in-rn
kind: theorem
title: "An absolutely convergent series in $\\mathbb{R}^n$ converges, and every rearrangement converges to the same sum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series-of-vectors-and-rearrangement, thm-componentwise-convergence-and-completeness, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-norm-and-normed-space, thm-direct-comparison-test, thm-dirichlet-rearrangement, lem-absolute-convergence-implies-convergence, def-absolute-and-conditional-convergence, def-series, def-cauchy-in-metric, def-complete-metric-space, lem-metric-convergent-implies-cauchy, lem-real-line-is-a-metric-space, lem-metrics-on-rn, lem-finite-sum-laws, def-finite-sum, lem-standard-basis-of-f-n, def-injection-surjection-bijection, def-metric-convergence, def-real-limit]
justified_by: []
aliases: []
landmark: true
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
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "T. Banakh, A Simple Inductive Proof of the Levy-Steinitz Theorem"
      url: "https://arxiv.org/abs/1711.04136"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$ and let $(x_k)$ be a sequence in
$\mathbb{R}^{n}$ whose series converges absolutely
([[def-series-of-vectors-and-rearrangement]]). Then:

1. $\sum x_k$ converges; write $s := \sum_{k=0}^{\infty}x_k$.
2. For every bijection $\sigma : \mathbb{N} \to \mathbb{N}$
   ([[def-injection-surjection-bijection]]) the rearranged series
   $\sum x_{\sigma(k)}$ converges absolutely, with
   $\sum_{k=0}^{\infty}x_{\sigma(k)} = s$.
3. Consequently $\mathcal{S}(x) = \{s\}$: the set of rearrangement sums is a
   single point.

**This is the $\mathbb{R}^{n}$ analogue of the published one-dimensional
statements, not a generalisation of their proofs.**
[[lem-absolute-convergence-implies-convergence]] and
[[thm-dirichlet-rearrangement]] are proved on the real line; everything below
reduces to them coordinatewise, or to completeness of $(\mathbb{R}^{n},d_2)$.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; a sequence $(x_k)$ in $\mathbb{R}^{n}$ with $\sum \lVert x_k\rVert_2$ convergent; the vector partial sums $s_N = \sum_{k<N}x_k$ and the real partial sums $T_N = \sum_{k<N}\lVert x_k\rVert_2$; a bijection $\sigma$ of $\mathbb{N}$; a rational $\varepsilon > 0$.

[L1] Series of vectors, absolute convergence, rearrangement and $\mathcal{S}(x)$ ([[def-series-of-vectors-and-rearrangement]]); partial sums are computed pointwise, $(s_N)(j) = \sum_{k<N}(x_k)_j$ ([[lem-standard-basis-of-f-n]] clause 1, [[def-finite-sum]]).

[L2] The finite triangle inequality for a norm, $N(\sum_{k<p}u_k) \le \sum_{k<p}N(u_k)$, and the coordinate bound $|y_j| \le \lVert y\rVert_2$ for $j<n$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clauses 1 and 3, [[def-norm-and-normed-space]], [[def-p-norms-on-rn]]).

[L3] Splitting of finite sums: for $L \le N$, $\sum_{k<N}a_k = \sum_{k<L}a_k + \sum_{k=L}^{N-1}a_k$, and the same identity in $\mathbb{R}^{n}$ read pointwise ([[lem-finite-sum-laws]] clause 3, [[def-finite-sum]], [[lem-standard-basis-of-f-n]] clause 1).

[L4] $(\mathbb{R}^{n},d_2)$ is complete for $n \ge 1$, $d_2(u,v) = \lVert u-v\rVert_2$, and a sequence converging in a metric space is Cauchy ([[thm-componentwise-convergence-and-completeness]] clause 3, [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[lem-metrics-on-rn]], [[def-complete-metric-space]], [[def-cauchy-in-metric]], [[lem-metric-convergent-implies-cauchy]], [[lem-real-line-is-a-metric-space]]).

[L5] Componentwise convergence in $\mathbb{R}^{n}$ for $n \ge 1$ ([[thm-componentwise-convergence-and-completeness]] clause 1, [[def-metric-convergence]], [[def-real-limit]]).

[L6] The direct comparison test: if $0 \le a_k \le b_k$ from some index on and $\sum b_k$ converges, then $\sum a_k$ converges ([[thm-direct-comparison-test]], [[def-series]]).

[L7] Dirichlet's rearrangement theorem: if $\sum a_k$ converges absolutely then for every bijection $\sigma$ of $\mathbb{N}$ the series $\sum |a_{\sigma(k)}|$ converges with the same sum as $\sum|a_k|$, and $\sum a_{\sigma(k)}$ converges with the same sum as $\sum a_k$ ([[thm-dirichlet-rearrangement]], [[def-absolute-and-conditional-convergence]]).

[L8] Absolute convergence implies convergence for real series, and a convergent series of nonnegative terms is absolutely convergent, its terms being their own absolute values ([[lem-absolute-convergence-implies-convergence]], [[def-absolute-and-conditional-convergence]]).

## Proof

**Proof technique:** direct.

1.1 For $L \le N$: $s_N - s_L = \sum_{k=L}^{N-1}x_k$ and $T_N - T_L = \sum_{k=L}^{N-1}\lVert x_k\rVert_2$, both by splitting, the vector identity being the pointwise reading of the real one. [L1, L3]

1.2 The real sequence $(T_N)$ converges by hypothesis, hence is Cauchy in $(\mathbb{R},d_{\mathbb{R}})$: for every rational $\varepsilon>0$ there is $K$ with $|T_N - T_L| < \varepsilon$ for all $N,L \ge K$. [L4, L8]

1.3 For every $j<n$ and every $k$: $0 \le |(x_k)_j| \le \lVert x_k\rVert_2$. [L2]

1.4 Likewise $k \mapsto \lVert x_{\sigma(k)}\rVert_2$ is the rearrangement along $\sigma$ of $k \mapsto \lVert x_k\rVert_2$, a convergent series of nonnegative terms and therefore absolutely convergent, so $\sum_k\lVert x_{\sigma(k)}\rVert_2$ converges; that is, $\sum x_{\sigma(k)}$ converges absolutely. [L7, L8, L1]

2.1 Hence $\lVert s_N - s_L\rVert_2 \le \sum_{k=L}^{N-1}\lVert x_k\rVert_2 = T_N - T_L$ by the finite triangle inequality. [step 1.1, L2]

2.2 By step 1.3 and the comparison test, the real series $\sum_k |(x_k)_j|$ converges for every $j<n$; so each coordinate series $\sum_k (x_k)_j$ converges absolutely. [step 1.3, L6, L8]

3.1 By steps 2.1 and 1.2, for $N \ge L \ge K$ we get $d_2(s_N,s_L) = \lVert s_N-s_L\rVert_2 \le |T_N-T_L| < \varepsilon$, and the same bound with $N$ and $L$ exchanged; so $(s_N)$ is Cauchy in $(\mathbb{R}^{n},d_2)$. [step 2.1, step 1.2, L4]

3.2 Fix a bijection $\sigma$. For every $j<n$ the sequence $k \mapsto (x_{\sigma(k)})_j$ is the rearrangement along $\sigma$ of the sequence $k \mapsto (x_k)_j$; by step 2.2 the latter series converges absolutely, so Dirichlet's theorem gives that $\sum_k (x_{\sigma(k)})_j$ converges with the same sum as $\sum_k (x_k)_j$. [step 2.2, L7]

4.1 Since $(\mathbb{R}^{n},d_2)$ is complete, the Cauchy sequence $(s_N)$ converges; that is, $\sum x_k$ converges, which is clause 1. Write $s$ for its sum. [step 3.1, L4]

5.1 By clause 1 applied to the sequence $k \mapsto x_{\sigma(k)}$, which converges absolutely by step 1.4, the series $\sum x_{\sigma(k)}$ converges; and by step 3.2 each coordinate of its sum equals the corresponding coordinate of $s$, so its sum is $s$. This is clause 2. [step 4.1, step 3.2, step 1.4, L5]

6.1 By clause 2 every rearrangement of $\sum x_k$ converges to $s$, and the identity bijection shows $s \in \mathcal{S}(x)$; so $\mathcal{S}(x) = \{s\}$, which is clause 3. [step 4.1, step 5.1, L1] ∎

## Remarks

- **Two independent routes to clause 1 are available and only one is used.** The proof above uses completeness of $(\mathbb{R}^{n},d_2)$ together with the finite triangle inequality. The alternative is to run step 2.2 first and reassemble by [[thm-componentwise-convergence-and-completeness]] clause 1, using [[lem-absolute-convergence-implies-convergence]] on each coordinate. The two give the same theorem; mixing them would prove clause 1 twice.

- **The published Cauchy criterion for series** ([[thm-series-cauchy-criterion]]) is the standard packaging of step 1.2 and would serve in its place; the proof uses the plainer statement that a convergent real sequence is Cauchy, so that the index bookkeeping stays visible.

- **Clause 3 is the half of the rearrangement question this theorem settles.** For an absolutely convergent series the set of rearrangement sums is as small as it can be. What $\mathcal{S}(x)$ looks like when the series converges **without** converging absolutely is taken up in [[thm-rearrangement-sums-lie-in-an-affine-subspace]], which proves a containment and no more; see [[rem-rn-conventions-and-scope]] for exactly what this page does and does not settle.
````

### `thm-componentwise-convergence-and-completeness`

````markdown
---
id: thm-componentwise-convergence-and-completeness
kind: theorem
title: "For $n \\ge 1$ a sequence in $\\mathbb{R}^n$ converges iff each coordinate sequence converges, is Cauchy iff each coordinate sequence is Cauchy, and $\\mathbb{R}^n$ is complete in every norm"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, lem-p-norms-are-norms-and-induce-the-published-metrics, def-p-norms-on-rn, thm-euclidean-space-complete, def-complete-metric-space, def-metric-convergence, def-cauchy-in-metric, lem-metric-limits-unique, lem-metric-convergent-implies-cauchy, lem-metrics-on-rn, lem-standard-basis-of-f-n, def-sequence, def-real-limit, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, lem-finite-set-has-max, def-max-min, lem-real-line-is-a-metric-space, def-norm-and-normed-space, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
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
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^{n}$ carry the Euclidean
metric $d_2$ of [[lem-metrics-on-rn]], and let $\bigl(x^{(j)}\bigr)_{j\in\mathbb{N}}$
be a sequence in $\mathbb{R}^{n}$ ([[def-metric-convergence]]). For $k < n$ write
$\bigl(x^{(j)}_k\bigr)_{j\in\mathbb{N}}$ for the $k$-th **coordinate sequence**,
a sequence of reals ([[def-sequence]]). Then:

1. **Convergence is componentwise.** For $x \in \mathbb{R}^{n}$,
   $x^{(j)} \to x$ in $(\mathbb{R}^{n}, d_2)$ if and only if
   $x^{(j)}_k \to x_k$ in $\mathbb{R}$ for every $k<n$
   ([[def-real-limit]]).
2. **Cauchyness is componentwise.** $\bigl(x^{(j)}\bigr)$ is Cauchy in
   $(\mathbb{R}^{n},d_2)$ ([[def-cauchy-in-metric]]) if and only if every
   coordinate sequence is Cauchy in $\mathbb{R}$.
3. **Completeness in every norm.** For every norm $N$ on $\mathbb{R}^{n}$
   ([[def-norm-and-normed-space]]) the metric space $(\mathbb{R}^{n}, d_N)$ is
   complete ([[def-complete-metric-space]]).

**Clause 3 is obtained by citation and is not reproved here.**
[[thm-euclidean-space-complete]] clause 2 states that $(\mathbb{R}^{n},d_2)$ is
complete, **for $n \ge 1$ only**, and this theorem carries that hypothesis
forward without weakening it; what is added is the passage from $d_2$ to an
arbitrary norm, through [[thm-all-norms-on-rn-are-equivalent]] and the dictionary
of [[def-equivalent-norms]].

## Facts & Assumptions

**Given:** A natural $n \ge 1$; the space $\mathbb{R}^{n}$ with the norms of [[def-p-norms-on-rn]] and the metric $d_2$; a sequence $\bigl(x^{(j)}\bigr)$ in $\mathbb{R}^{n}$; a point $x \in \mathbb{R}^{n}$; a norm $N$ on $\mathbb{R}^{n}$; and a rational $\varepsilon > 0$.

[L1] The comparison chain for $n \ge 1$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3): $\lVert y\rVert_\infty \le \lVert y\rVert_2 \le \lVert y\rVert_1 \le \iota(n)\lVert y\rVert_\infty$ for every $y \in \mathbb{R}^{n}$, where $\lVert y\rVert_\infty = \max\{|y_k| : k<n\}$ ([[def-p-norms-on-rn]], [[lem-finite-set-has-max]], [[def-max-min]]).

[L2] The dictionary $d_2(u,v) = \lVert u-v\rVert_2$, and $(u-v)_k = u_k - v_k$ ([[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[lem-standard-basis-of-f-n]]).

[L3] Convergence and Cauchyness in a metric space, and their agreement on $\mathbb{R}$ with the real notions ([[def-metric-convergence]], [[def-cauchy-in-metric]], [[def-real-limit]], [[lem-real-line-is-a-metric-space]]); rational and real $\varepsilon$ may be used interchangeably in both.

[L4] $(\mathbb{R}^{n}, d_2)$ is complete for $n \ge 1$ ([[thm-euclidean-space-complete]] clause 2, [[def-complete-metric-space]]).

[L5] All norms on $\mathbb{R}^{n}$ are equivalent for $n \ge 1$ ([[thm-all-norms-on-rn-are-equivalent]]), and equivalent norms have the same convergent sequences with the same limits and the same Cauchy sequences ([[def-equivalent-norms]]).

[L6] Limits in a metric space are unique, and every convergent sequence is Cauchy ([[lem-metric-limits-unique]], [[lem-metric-convergent-implies-cauchy]]).

[L7] $\iota(n) > 0$ for $n \ge 1$, and $u > 0$ gives $u^{-1} > 0$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L8] A nonempty finite set of naturals has a greatest element, and every nonempty set of naturals has a least element ([[lem-finite-set-has-max]], [[def-max-min]], [[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 For every $y \in \mathbb{R}^{n}$ and every $k<n$: $|y_k| \le \lVert y\rVert_\infty \le \lVert y\rVert_2$, the first inequality because $\lVert y\rVert_\infty$ bounds the set it is the maximum of. [L1]

1.2 For every $y \in \mathbb{R}^{n}$: $\lVert y\rVert_2 \le \iota(n)\lVert y\rVert_\infty$, and $\lVert y\rVert_\infty = |y_{k_0}|$ for some $k_0 < n$. [L1]

1.3 Conversely suppose $x^{(j)}_k \to x_k$ for every $k<n$. Given a rational $\varepsilon > 0$, the real $\varepsilon/\iota(n)$ is positive, so for each $k<n$ the set of indices $K$ such that $|x^{(j)}_k - x_k| < \varepsilon/\iota(n)$ for all $j \ge K$ is a nonempty set of naturals; let $K_k$ be its least element, a determination rather than a selection, and put $K := \max\{K_0,\dots,K_{n-1}\}$, a maximum of a nonempty finite set of naturals. [L3, L7, L8]

1.4 $(\mathbb{R}^{n},d_2)$ is complete, by citation and for $n \ge 1$ only. [L4]

1.5 Let $N$ be any norm on $\mathbb{R}^{n}$. By [L5], $N$ and $\lVert\cdot\rVert_2$ are equivalent, so $d_N$ and $d_2$ have the same Cauchy sequences and the same convergent sequences with the same limits. [L5]

2.1 For all $u,v \in \mathbb{R}^{n}$ and $k<n$: $|u_k - v_k| \le d_2(u,v) \le \iota(n)\max\{|u_k-v_k| : k<n\}$, by steps 1.1 and 1.2 applied to $y := u - v$. [step 1.1, step 1.2, L2]

2.2 Hence a Cauchy sequence in $(\mathbb{R}^{n},d_N)$ is Cauchy in $(\mathbb{R}^{n},d_2)$, converges there by step 1.4, and therefore converges in $(\mathbb{R}^{n},d_N)$ to the same point; so $(\mathbb{R}^{n},d_N)$ is complete, which is clause 3. [step 1.4, step 1.5, L5, L6]

3.1 Suppose $x^{(j)} \to x$ in $(\mathbb{R}^{n},d_2)$ and fix $k<n$. Given a rational $\varepsilon > 0$, take $K$ with $d_2(x^{(j)},x) < \varepsilon$ for $j \ge K$; then $|x^{(j)}_k - x_k| \le d_2(x^{(j)},x) < \varepsilon$ for $j \ge K$, so $x^{(j)}_k \to x_k$. [step 2.1, L3]

3.2 For $j \ge K$ and every $k<n$ we have $|x^{(j)}_k - x_k| < \varepsilon/\iota(n)$; the maximum of these $n$ numbers is one of them, so $\max\{|x^{(j)}_k - x_k| : k<n\} < \varepsilon/\iota(n)$ and hence $d_2(x^{(j)},x) < \iota(n)\cdot\varepsilon/\iota(n) = \varepsilon$ by step 2.1. Therefore $x^{(j)} \to x$. [step 2.1, step 1.3, L1, L7]

3.3 The same two estimates prove clause 2 with $x$ replaced by $x^{(l)}$ throughout: if $d_2(x^{(j)},x^{(l)}) < \varepsilon$ for $j,l \ge K$ then $|x^{(j)}_k - x^{(l)}_k| < \varepsilon$ for $j,l \ge K$ and every $k<n$; and conversely, choosing for each $k<n$ the least $K_k$ beyond which $|x^{(j)}_k - x^{(l)}_k| < \varepsilon/\iota(n)$ for $j,l \ge K_k$ and taking $K := \max\{K_0,\dots,K_{n-1}\}$ gives $d_2(x^{(j)},x^{(l)}) < \varepsilon$ for $j,l \ge K$. [step 2.1, L3, L7, L8]

4.1 Steps 3.1 and 3.2 are the two directions of clause 1. [step 3.1, step 3.2]

5.1 Clauses 1, 2 and 3 are steps 4.1, 3.3 and 2.2. [step 4.1, step 3.3, step 2.2] ∎

## Remarks

- **No choice principle is used.** The only place a family of indices is produced is steps 1.3 and 3.3, where finitely many indices are obtained, each as the **least** element of a nonempty set of naturals ([[thm-well-ordering-principle]]). A least element is determined by the set, not selected from it.

- **What happens at $n = 0$, stated separately because the theorem does not cover it.** $\mathbb{R}^{0}$ has exactly one element, the empty function, and is the zero vector space ([[lem-standard-basis-of-f-n]] clause 5); by [[def-norm-and-normed-space]] it carries exactly one norm, the zero function, whose induced metric is constantly $0$. Every sequence in a one-point metric space is Cauchy and converges to that point, so $(\mathbb{R}^{0}, d_N)$ is complete. **That statement is proved here from scratch in this remark and is not obtained from [[thm-euclidean-space-complete]]**, which is stated for $n \ge 1$ only because $d_\infty$ is a maximum over an empty index set at $n = 0$. Clauses 1 and 2 are vacuous at $n = 0$, there being no index $k<0$.

- **Clause 1 is the reason the rest of this page can work coordinatewise.** Every later item that reduces a statement about $\mathbb{R}^{n}$ or $\mathbb{R}^{m}$ to $n$ or $m$ statements about $\mathbb{R}$ passes through it, and each such item therefore carries the hypothesis $n \ge 1$ or $m \ge 1$ in its own statement.
````

### `thm-p-series-rational`

````markdown
---
id: thm-p-series-rational
kind: theorem
title: "For rational $p > 0$, $\\sum 1/k^p$ converges iff $p > 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cauchy-condensation, thm-geometric-series, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, def-monotone-sequence, def-series, lem-of-inverse-positive, thm-nth-roots-exist, lem-of-naturals-positive, def-integer-power, lem-of-abs-value]
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
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Cauchy condensation test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_condensation_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.28)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Stephen Semmes, Elements of Analysis"
      url: "https://math.rice.edu/~semmes/math331.pdf"
pipeline_run: null
---

## Statement

Let $p \in \mathbb{Q}$ with $p > 0$. For a natural number $k \ge 1$ write
$\iota(k) = k \cdot 1_{\mathbb{R}}$ for the canonical natural, which is positive
([[lem-of-naturals-positive]]), and write $k^{p} := \iota(k)^{p}$ for its rational
power ([[def-rational-power]]). Then

$$\sum_{k \ge 1} \frac{1}{k^{p}} \ \text{converges} \qquad \Longleftrightarrow \qquad p > 1 .$$

In particular the harmonic series $\sum_{k \ge 1} 1/k$ diverges, at $p = 1$, and
$\sum_{k \ge 1} 1/k^{2}$ converges, at $p = 2$.

**The index range is not cosmetic.** The series starts at $k = 1$ because
$1/0^{p}$ is undefined: [[def-rational-power]] gives $0^{p} = 0$ for rational
$p > 0$, and $0$ has no inverse. Sequences here are functions on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-series]]), so the object named above is a series
from the starting index $1$ in the sense of [[def-series]], not a series of a
sequence on $\mathbb{N}$.

**The exponent is rational, and that is a limitation of this page.** Rational
powers of a positive base are what [[def-rational-power]] supplies; real exponents
require the exponential and the logarithm, which this library develops later. The
statement above is therefore the full $p$-series theorem for every exponent this
page can name.

## Facts & Assumptions

**Given:** A rational $p > 0$ and the family $a_k := 1/k^{p} = \iota(k)^{-p}$, defined for naturals $k \ge 1$ ([[def-rational-power]], [[def-series]]).

[L1] Rational powers of a positive base are positive, and $a^{r+s} = a^{r}a^{s}$, $(a^{r})^{s} = a^{rs}$, $a^{-r} = 1/a^{r}$ for $a > 0$ and rationals $r, s$ ([[lem-rational-power-laws]]).

[L2] Monotonicity of rational powers: for rational $t > 0$ and $0 < a < b$ one has $a^{t} < b^{t}$; and for $a > 1$ and rationals $r < s$ one has $a^{r} < a^{s}$ ([[lem-rational-power-monotone]]).

[L3] The integer power and the rational power agree at an integer exponent: for $a > 0$ and $n \in \mathbb{Z}$, $a^{n}$ read as in [[def-integer-power]] equals $a^{n}$ read as in [[def-rational-power]], since $n = n/1$ and $a^{1/1} = a$ ([[thm-nth-roots-exist]], [[def-rational-power]]). In particular $a^{0} = 1$.

[L4] Reciprocation reverses the order on the positives: $0 < a < b$ implies $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

[L5] Condensation: for a family $(x_k)_{k \ge 1}$ that is nonnegative and nonincreasing, $\sum_{k \ge 1} x_k$ converges if and only if $\sum_{j \ge 0} 2^{j} x_{2^{j}}$ converges ([[thm-cauchy-condensation]], [[def-monotone-sequence]]).

[L6] The geometric series: $\sum_{j \ge 0} r^{j}$ converges if and only if $|r| < 1$ ([[thm-geometric-series]], [[lem-of-abs-value]]).

[L7] The canonical naturals are positive and order preserving: $0 < \iota(1) \le \iota(j) < \iota(k)$ for naturals $1 \le j < k$, and $\iota(2) = 2 > 1$ ([[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 For every natural $k \ge 1$ the base $\iota(k)$ is positive, so $a_k = \iota(k)^{-p}$ is defined and positive; in particular the family is nonnegative. [given, L7, L1]

1.2 For naturals $1 \le j < k$ we have $0 < \iota(j) < \iota(k)$, hence $\iota(j)^{p} < \iota(k)^{p}$ since $p > 0$, hence $a_j = 1/\iota(j)^{p} > 1/\iota(k)^{p} = a_k$; and for $j = k$ the two are equal. So $a_j \ge a_k$ whenever $1 \le j \le k$. [given, L7, L2, L4, L1]

1.3 For every $j \in \mathbb{N}$ the base $2^{j}$ is positive and, reading the exponent $j$ as a rational, $2^{j} a_{2^{j}} = 2^{j} \big(2^{j}\big)^{-p} = 2^{j} \cdot 2^{-jp} = 2^{\,j - jp} = 2^{\,(1-p)j} = \big(2^{\,1-p}\big)^{j}$. [L1, L3, L7, algebra]

1.4 Since $2 > 1$, the map $t \mapsto 2^{t}$ is strictly increasing on $\mathbb{Q}$ and $2^{0} = 1$; hence $r = 2^{\,1-p} < 1 = 2^{0}$ holds exactly when $1 - p < 0$, that is exactly when $p > 1$. [L2, L3, L7]

2.1 Condensation applies to $(a_k)_{k \ge 1}$: $\sum_{k \ge 1} a_k$ converges if and only if $\sum_{j \ge 0} 2^{j} a_{2^{j}}$ converges. [step 1.1, step 1.2, L5]

2.2 So the condensed series is the geometric series $\sum_{j \ge 0} r^{j}$ with $r := 2^{\,1-p}$, and $r > 0$, so $|r| = r$. [step 1.3, L1, L3]

3.1 By the geometric series theorem, $\sum_{j \ge 0} r^{j}$ converges if and only if $r < 1$. [step 2.2, L6]

4.1 Chaining the three equivalences: $\sum_{k \ge 1} 1/k^{p}$ converges $\iff$ the condensed series converges $\iff$ $r < 1$ $\iff$ $p > 1$. [step 2.1, step 2.2, step 3.1, step 1.4] ∎

## Remarks

- **Where the threshold comes from.** Condensation turns the $p$-series into a geometric series of ratio $2^{1-p}$, and the geometric threshold $r = 1$ pulls back to $p = 1$. Nothing about the number $1$ is special to the $p$-series; it is the exponent at which the condensed terms stop shrinking.

- **At $p = 1$ the condensed series is $\sum_{j \ge 0} 1$.** Its terms do not tend to $0$, so it diverges, and with it the harmonic series. That instance is worked out on the companion page, together with the older block argument that does not use condensation at all.

- **Only rational exponents are covered, and the gap is real.** For irrational $p$ the expression $k^{p}$ has no meaning in this library yet, so the statement is not merely unproved there, it is unstatable. The same limitation is what keeps the Bertrand-type series $\sum 1/(k (\log k)^{p})$ off this page entirely, the logarithm not being available.
````

### `thm-rearrangement-sums-lie-in-an-affine-subspace`

````markdown
---
id: thm-rearrangement-sums-lie-in-an-affine-subspace
kind: theorem
title: "The set of rearrangement sums of a convergent series in $\\mathbb{R}^n$ is a nonempty subset of the affine subspace $s + \\Gamma^{\\perp}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-space-of-summing-directions, def-series-of-vectors-and-rearrangement, thm-absolute-convergence-in-rn, thm-componentwise-convergence-and-completeness, thm-cauchy-schwarz-and-the-euclidean-norm, def-euclidean-inner-product, def-p-norms-on-rn, def-norm-and-normed-space, thm-dirichlet-rearrangement, thm-riemann-series-theorem, cor-unconditional-iff-absolute-in-r, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, def-series, lem-finite-sum-laws, def-finite-sum, lem-standard-basis-of-f-n, def-linear-subspace, def-injection-surjection-bijection, def-metric-convergence, def-real-limit, lem-metric-limits-unique, thm-induction-principle, def-isometry-and-metric-embedding, lem-of-abs-value, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: true
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
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "T. Banakh, A Simple Inductive Proof of the Levy-Steinitz Theorem"
      url: "https://arxiv.org/abs/1711.04136"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $(x_k)$ be a sequence in
$\mathbb{R}^{n}$ whose series converges
([[def-series-of-vectors-and-rearrangement]]) and write
$s := \sum_{k=0}^{\infty}x_k$. Let $\Gamma$ and $\Gamma^{\perp}$ be as in
[[def-the-space-of-summing-directions]]. Then:

1. **Nonemptiness.** $s \in \mathcal{S}(x)$, so $\mathcal{S}(x) \ne \varnothing$.
2. **Containment.**
   $$\mathcal{S}(x) \;\subseteq\; s + \Gamma^{\perp},$$
   the affine subspace through $s$ with direction $\Gamma^{\perp}$
   ([[def-the-space-of-summing-directions]]). Equivalently, $t - s \in \Gamma^{\perp}$
   for every rearrangement sum $t$.
3. **The absolutely convergent case.** If $\sum x_k$ converges absolutely then
   $\Gamma = \mathbb{R}^{n}$, $\Gamma^{\perp} = \{0\}$, the affine subspace is
   the single point $\{s\}$, and $\mathcal{S}(x) = \{s\}$.
4. **The one-dimensional conditionally convergent case.** Let $n = 1$ and
   identify $\mathbb{R}^{1}$ with $\mathbb{R}$ as in
   [[def-series-of-vectors-and-rearrangement]]. If $\sum x_k$ converges
   conditionally ([[def-absolute-and-conditional-convergence]]) then
   $\Gamma = \{0\}$, $\Gamma^{\perp} = \mathbb{R}^{1}$, and the containment of
   clause 2 is an **equality**, $\mathcal{S}(x) = s + \Gamma^{\perp} = \mathbb{R}^{1}$,
   by the published [[thm-riemann-series-theorem]].

**What this theorem does not say, stated here and repeated in the Remarks.** It
proves a **containment** and nothing more. Whether $\mathcal{S}(x)$ is all of
$s + \Gamma^{\perp}$ when $n \ge 2$ is **not settled anywhere on this page**, and
no item on this page asserts anything about it in either direction. Clause 4 is
the case $n = 1$, where the answer is supplied by a published theorem about the
real line; it is not evidence for any statement in higher dimensions.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; a sequence $(x_k)$ in $\mathbb{R}^{n}$ with $\sum x_k$ convergent of sum $s$; a bijection $\sigma$ of $\mathbb{N}$; a vector $a \in \Gamma$; the partial sums $s_N = \sum_{k<N}x_k$ and $s^{\sigma}_N = \sum_{k<N}x_{\sigma(k)}$.

[L1] Series of vectors, absolute convergence, rearrangement, $\mathcal{S}(x)$, and the identification of $\mathbb{R}^{1}$ with $\mathbb{R}$ ([[def-series-of-vectors-and-rearrangement]], [[def-rearrangement-and-unconditional-convergence]], [[def-injection-surjection-bijection]], [[def-isometry-and-metric-embedding]]).

[L2] $\Gamma$ and $\Gamma^{\perp}$ are linear subspaces; $a \in \Gamma$ means $\sum_k|\langle a,x_k\rangle|$ converges; $\Gamma = \mathbb{R}^{n}$ exactly when $\sum x_k$ converges absolutely; and $s + W$ denotes the coset of a linear subspace $W$ ([[def-the-space-of-summing-directions]], [[def-linear-subspace]]).

[L3] The inner product is bilinear and symmetric, $\langle y,y\rangle = \lVert y\rVert_2^{2}$, positive definiteness gives $\langle y,y\rangle = 0$ only for $y = 0$, and Cauchy-Schwarz gives $|\langle a,y\rangle| \le \lVert a\rVert_2\lVert y\rVert_2$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-p-norms-on-rn]], [[def-norm-and-normed-space]]).

[L4] Laws of finite sums and the induction principle ([[lem-finite-sum-laws]], [[def-finite-sum]], [[thm-induction-principle]]); finite sums in $\mathbb{R}^{n}$ are pointwise ([[lem-standard-basis-of-f-n]] clause 1).

[L5] Dirichlet's rearrangement theorem: an absolutely convergent real series has, for every bijection $\sigma$ of $\mathbb{N}$, a rearrangement converging to the same sum ([[thm-dirichlet-rearrangement]], [[def-absolute-and-conditional-convergence]]).

[L6] The Riemann series theorem: a conditionally convergent real series has, for every $c \in \mathbb{R}$, a rearrangement converging to $c$ ([[thm-riemann-series-theorem]] clause 1); and over $\mathbb{R}$ a convergent series is absolutely convergent or conditionally convergent and not both ([[cor-unconditional-iff-absolute-in-r]], [[def-absolute-and-conditional-convergence]]).

[L7] Convergence in $(\mathbb{R}^{n},d_2)$ and in $\mathbb{R}$, uniqueness of limits, and the componentwise criterion ([[def-metric-convergence]], [[def-real-limit]], [[lem-metric-limits-unique]], [[thm-componentwise-convergence-and-completeness]]).

[L8] An absolutely convergent series in $\mathbb{R}^{n}$ converges, every rearrangement converges to the same sum, and $\mathcal{S}(x)$ is then a single point ([[thm-absolute-convergence-in-rn]]).

[L9] Absolute value and order arithmetic: $|uv| = |u||v|$, $|u| \ge 0$, and $u>0$ gives $u^{-1}>0$ ([[lem-of-abs-value]], [[lem-of-inverse-positive]]).

## Proof

**Proof technique:** direct.

1.1 The identity map of $\mathbb{N}$ is a bijection and the rearrangement along it is the original series, so $s \in \mathcal{S}(x)$ and clause 1 holds. [L1]

1.2 For every $a \in \mathbb{R}^{n}$ and every finite list $u : p \to \mathbb{R}^{n}$, $\bigl\langle a, \sum_{j<p}u_j\bigr\rangle = \sum_{j<p}\langle a, u_j\rangle$: at $p=0$ both sides are $0$, and the successor step is additivity of the inner product in its second argument. [L3, L4]

1.3 If $u_N \to u$ in $(\mathbb{R}^{n},d_2)$ then $\langle a, u_N\rangle \to \langle a,u\rangle$ in $\mathbb{R}$, since $\bigl|\langle a,u_N\rangle - \langle a,u\rangle\bigr| = \bigl|\langle a, u_N-u\rangle\bigr| \le \lVert a\rVert_2\,\lVert u_N-u\rVert_2$, so a tolerance $\varepsilon/(\lVert a\rVert_2+1)$ on the right serves for $\varepsilon$ on the left. [L3, L7, L9]

1.4 Now let $n = 1$ and suppose $\sum x_k$ converges conditionally, so the real series $\sum_k (x_k)_0$ converges and $\sum_k|(x_k)_0|$ diverges. For $a \in \mathbb{R}^{1}$, $\langle a, x_k\rangle = a_0 (x_k)_0$ and $|\langle a,x_k\rangle| = |a_0|\,|(x_k)_0|$; if $a_0 \ne 0$ then convergence of $\sum_k |a_0||(x_k)_0|$ would give convergence of $\sum_k |(x_k)_0|$ after multiplying by the positive $1/|a_0|$, which is false, so $a \in \Gamma$ forces $a_0 = 0$; and $a = 0$ does lie in $\Gamma$. Hence $\Gamma = \{0\}$. [L1, L2, L9]

2.1 Let $t \in \mathcal{S}(x)$, say $s^{\sigma}_N \to t$ for a bijection $\sigma$, and let $a \in \Gamma$. By steps 1.2 and 1.3, $\langle a,t\rangle = \lim_N \langle a, s^{\sigma}_N\rangle = \lim_N \sum_{k<N}\langle a, x_{\sigma(k)}\rangle$, so the real series $\sum_k\langle a,x_{\sigma(k)}\rangle$ converges with sum $\langle a,t\rangle$. [step 1.2, step 1.3, L1, L7]

2.2 In the same way $\langle a, s\rangle = \lim_N\langle a, s_N\rangle = \lim_N\sum_{k<N}\langle a,x_k\rangle$, so $\sum_k\langle a,x_k\rangle$ converges with sum $\langle a,s\rangle$. [step 1.2, step 1.3, L7]

2.3 With $\Gamma = \{0\}$ the condition defining $\Gamma^{\perp}$ is $\langle 0,y\rangle = 0$, which holds for every $y$, so $\Gamma^{\perp} = \mathbb{R}^{1}$ and $s + \Gamma^{\perp} = \mathbb{R}^{1}$. [step 1.4, L2, L3]

3.1 The real sequence $k \mapsto \langle a, x_{\sigma(k)}\rangle$ is the rearrangement along $\sigma$ of the sequence $k \mapsto \langle a,x_k\rangle$, and the latter series converges absolutely because $a \in \Gamma$; so by Dirichlet's theorem the two series have the same sum. [step 2.1, step 2.2, L2, L5]

3.2 By the Riemann series theorem applied to the conditionally convergent real series $\sum_k (x_k)_0$, every real $c$ is the sum of some rearrangement of it; transporting along the identification of $\mathbb{R}$ with $\mathbb{R}^{1}$, every element of $\mathbb{R}^{1}$ lies in $\mathcal{S}(x)$. So $\mathcal{S}(x) = \mathbb{R}^{1} = s + \Gamma^{\perp}$, which with steps 1.4 and 2.3 is clause 4. [step 1.4, step 2.3, L1, L6, L7]

4.1 Combining steps 2.1, 2.2 and 3.1 gives $\langle a,t\rangle = \langle a,s\rangle$, hence $\langle a, t-s\rangle = 0$ by bilinearity. [step 2.1, step 2.2, step 3.1, L3]

5.1 Since $a \in \Gamma$ was arbitrary, $t-s \in \Gamma^{\perp}$, that is $t \in s + \Gamma^{\perp}$; as $t \in \mathcal{S}(x)$ was arbitrary, clause 2 holds. [step 4.1, L2]

6.1 Suppose $\sum x_k$ converges absolutely. Then $\Gamma = \mathbb{R}^{n}$, so any $y \in \Gamma^{\perp}$ satisfies $\langle y,y\rangle = 0$ and hence $y = 0$; thus $\Gamma^{\perp} = \{0\}$ and $s + \Gamma^{\perp} = \{s\}$. Moreover $\mathcal{S}(x) = \{s\}$ by [L8], so clause 3 holds and the containment of clause 2 is an equality in this case. [step 5.1, L2, L3, L8]

7.1 Clauses 1, 2, 3 and 4 are steps 1.1, 5.1, 6.1 and 3.2. [step 1.1, step 5.1, step 6.1, step 3.2] ∎

## Remarks

- **This theorem proves containment only, and the reverse inclusion is not proved, assumed, or asserted anywhere on this page.** For $n \ge 2$ the question whether every point of $s + \Gamma^{\perp}$ is a rearrangement sum is **open as far as this library is concerned**. It is not open in the mathematical literature, and this page deliberately states nothing about what the literature says, exactly as the published [[rem-rearrangement-in-higher-dimensions]] declines to. What is missing here is machinery, not effort: every route known to the author of this page passes through the orthogonal decomposition of a finite-dimensional inner product space and through a separation argument for convex sets, and neither exists in this library — the first belongs to a page earlier in the plan order that is not yet built, and the second to no planned page at all. See [[rem-rn-conventions-and-scope]].

- **The title claims exactly clause 2 and clause 1, and no more.** A title asserting that $\mathcal{S}(x)$ **is** the affine subspace would assert the reverse inclusion, which is not proved here.

- **Clause 4 is the published one-dimensional dichotomy seen from this page.** Over $\mathbb{R}$ a convergent series is either absolutely convergent, and then $\Gamma$ is everything and $\mathcal{S}$ is a point (clause 3), or conditionally convergent, and then $\Gamma$ is $\{0\}$ and $\mathcal{S}$ is the whole line (clause 4). Both extremes are consistent with clause 2, and both are equalities; that is a fact about dimension $1$, where a linear subspace of $\mathbb{R}^{1}$ is $\{0\}$ or everything and there is no room in between.

- **What the containment already rules out.** Even without the reverse inclusion, clause 2 forbids a rearrangement sum from leaving the affine subspace. That is enough to refute the naive $\mathbb{R}^{n}$ analogue of the Riemann series theorem, and the companion page does so with an elementary witness, using clause 2 and nothing further.
````

### `thm-riemann-series-theorem`

````markdown
---
id: thm-riemann-series-theorem
kind: theorem
title: "The Riemann series theorem: a conditionally convergent real series has, for every $c \\in \\mathbb{R}$, a rearrangement with sum $c$, and rearrangements diverging to $+\\infty$, to $-\\infty$, and oscillating with any prescribed $\\liminf \\le \\limsup$ in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-positive-and-negative-parts, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, lem-nth-term-test, thm-recursion, thm-well-ordering-principle, def-injection-surjection-bijection, def-divergence-to-infinity, def-limsup-liminf, def-extended-reals, def-extended-limits, thm-convergence-iff-limsup-equals-liminf, thm-nonnegative-series-bounded-partial-sums, def-series, def-finite-sum, lem-finite-sum-laws, lem-limit-preserves-order, thm-induction-principle, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
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
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
    - title: "W. Fisher, Introduction to Analysis"
      url: "https://math.berkeley.edu/~willfisher/teaching/104sm24/main.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals whose series converges conditionally
([[def-absolute-and-conditional-convergence]]). Let $\alpha, \beta \in
\overline{\mathbb{R}}$ ([[def-extended-reals]]) with $\alpha \le \beta$. Then
there is a bijection $\sigma : \mathbb{N} \to \mathbb{N}$
([[def-injection-surjection-bijection]]) such that the partial sums
$T_n = \sum_{k<n} a_{\sigma(k)}$ of the rearranged series
([[def-rearrangement-and-unconditional-convergence]]) satisfy

$$\liminf_{n} T_n = \alpha, \qquad \limsup_{n} T_n = \beta$$

([[def-limsup-liminf]]). In particular:

1. for every $c \in \mathbb{R}$, taking $\alpha = \beta = c$, there is a
   rearrangement of $\sum a_k$ that converges with sum $c$;
2. taking $\alpha = \beta = +\infty$, there is a rearrangement whose partial sums
   diverge to $+\infty$ ([[def-divergence-to-infinity]]), and taking
   $\alpha = \beta = -\infty$, one whose partial sums diverge to $-\infty$;
3. taking $\alpha < \beta$, there is a rearrangement whose partial sums oscillate,
   with limit inferior exactly $\alpha$ and limit superior exactly $\beta$.

So the sum of a conditionally convergent series is an artefact of the order in
which its terms are written, and every prescribed asymptotic behaviour is
attainable. Contrast [[thm-dirichlet-rearrangement]], where absolute convergence
makes the sum independent of the order.

**The construction.** Write $P := \{k : a_k \ge 0\}$ and $N := \{k : a_k < 0\}$,
which partition $\mathbb{N}$, and enumerate each increasingly as $(p_i)$ and
$(q_l)$. Fix real sequences $(u_j)$ and $(v_j)$ with $u_j \le v_j$ and
$u_j \le v_{j+1}$ for every $j$; these are the *targets*. The rearrangement is
produced one index at a time by a greedy rule: **while the running sum is at most
the current upper target, take the next unused nonnegative term; once it exceeds
that target, take negative terms until the running sum falls below the current
lower target; then move to the next pair of targets and repeat.** Both supplies
are inexhaustible, because for a conditionally convergent series both
$\sum a_k^{+}$ and $\sum a_k^{-}$ diverge to $+\infty$
([[lem-positive-and-negative-parts]]); and the overshoot at each turning point is
at most the term just used, which tends to $0$ because $a_k \to 0$
([[lem-nth-term-test]]). Those two facts are the whole theorem.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $\sum a_k$ convergent and $\sum |a_k|$ divergent; the positive and negative parts $a_k^{+}$, $a_k^{-}$; the sets $P = \{k : a_k \ge 0\}$ and $N = \{k : a_k < 0\}$; and extended reals $\alpha \le \beta$.

[A1] $P$ and $N$ are disjoint with union $\mathbb{N}$, since the order on $\mathbb{R}$ is total; $a_k^{+} = a_k$ and $a_k^{-} = 0$ for $k \in P$, while $a_k^{+} = 0$ and $a_k^{-} = -a_k$ for $k \in N$ ([[lem-positive-and-negative-parts]]).

[L1] For a conditionally convergent series, the partial sums of $\sum a_k^{+}$ and of $\sum a_k^{-}$ both diverge to $+\infty$ ([[lem-positive-and-negative-parts]], [[def-divergence-to-infinity]]).

[L2] The terms of a convergent series tend to $0$ ([[lem-nth-term-test]]).

[L3] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] The recursion theorem: for a set $A$, an element $a \in A$ and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g(0) = a$ and $g(n+1) = f(g(n))$ ([[thm-recursion]]).

[L5] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L6] Finite sums: $\sum_{k<0} x_k = 0$, $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$, splitting at an intermediate index, and $\sum_{k<n} 0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L7] Partial sums of a series and their recursion $s_{n+1} = s_n + a_n$ ([[def-series]]).

[L8] Limits preserve non-strict inequalities holding eventually ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L9] A bijection is an injective surjection ([[def-injection-surjection-bijection]]).

[L10] $\limsup_n x_n = \inf\{\, \sup\{x_m : m \ge n\} : n \in \mathbb{N} \,\}$ and $\liminf_n x_n = \sup\{\, \inf\{x_m : m \ge n\} : n \in \mathbb{N}\,\}$, both taken in $\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]).

[L11] A sequence converges to a real $L$ exactly when its limit inferior and limit superior both equal $L$, and diverges to $\pm\infty$ exactly when both equal $\pm\infty$ ([[thm-convergence-iff-limsup-equals-liminf]], [[def-extended-limits]]).

[L12] For nonnegative terms, a series diverges exactly when the range of its partial sums is unbounded above, and then those partial sums diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]]).

## Proof

**Proof technique:** constructive.

1.1 Since $\sum a_k$ converges, $a_k \to 0$. [given, L2]

1.2 For every $K \in \mathbb{N}$ there is $k \ge K$ with $k \in P$: otherwise $a_k < 0$ for every $k \ge K$, so $a_k^{+} = 0$ for every $k \ge K$, so the partial sums of $\sum a_k^{+}$ are constant from $K$ on and hence bounded, contradicting [L1]. The same argument with $a_k^{-}$ shows that for every $K$ there is $k \ge K$ with $k \in N$. [A1, L1, L6, L12]

2.1 In particular $P$ and $N$ are nonempty, and for every $k$ the sets $\{m \in P : m > k\}$ and $\{m \in N : m > k\}$ are nonempty; so by [L3] each has a least element. [step 1.2, L3]

3.1 Define $p : \mathbb{N} \to \mathbb{N}$ by $p_0 := \min P$ and $p_{i+1} := \min\{m \in P : m > p_i\}$, and $q : \mathbb{N} \to \mathbb{N}$ by $q_0 := \min N$ and $q_{l+1} := \min\{m \in N : m > q_l\}$; both are legitimate applications of the recursion theorem, the "next element" operations being total functions $\mathbb{N} \to \mathbb{N}$ by step 2.1. Both $p$ and $q$ take values in $P$, respectively $N$, and are strictly increasing. [step 2.1, L3, L4, construct]

4.1 An induction gives $p_i \ge i$ and $q_l \ge l$ for every index, since $p_0 \ge 0$ and $p_{i+1} > p_i \ge i$ forces $p_{i+1} \ge i+1$. [step 3.1, L5]

4.2 An induction on $i$ gives $P \cap \{k : k < p_i\} = \{p_{i'} : i' < i\}$: at $i = 0$ both sides are empty because $p_0$ is the least element of $P$; and passing from $i$ to $i+1$ adds exactly $p_i$, since $p_{i+1}$ is the least element of $P$ strictly greater than $p_i$, so no element of $P$ lies strictly between them. The same holds for $q$ and $N$. [step 3.1, L5]

4.3 Fix real sequences $(u_j)$ and $(v_j)$ with $u_j \le v_j$ and $u_j \le v_{j+1}$ for every $j$. Put $A := \mathbb{N} \times \mathbb{N} \times \mathbb{N} \times \mathbb{R} \times \{0,1\}$, whose elements are written $(i, l, j, s, m)$, and define $\mathrm{out} : A \to \mathbb{N}$ and $f : A \to A$ by: if $m = 0$ and $s \le v_j$, then $\mathrm{out} := p_i$ and $f := (i+1, l, j, s + a_{p_i}, 0)$; if $m = 0$ and $s > v_j$, then $\mathrm{out} := q_l$ and $f := (i, l+1, j, s + a_{q_l}, 1)$; if $m = 1$ and $s \ge u_j$, then $\mathrm{out} := q_l$ and $f := (i, l+1, j, s + a_{q_l}, 1)$; if $m = 1$ and $s < u_j$, then $\mathrm{out} := p_i$ and $f := (i+1, l, j+1, s + a_{p_i}, 0)$. The four cases are exhaustive and mutually exclusive, the order on $\mathbb{R}$ being total, so $f$ and $\mathrm{out}$ are functions. [step 3.1, construct]

5.1 Every element of $P$ is some $p_i$, and every element of $N$ is some $q_l$: given $k \in P$, the set $\{i : p_i > k\}$ is nonempty by step 4.1, so it has a least element $i_0$; $i_0 \ne 0$ since $p_0 = \min P \le k$, and $p_{i_0 - 1} \le k < p_{i_0}$, so $k \in P \cap \{m : m < p_{i_0}\} = \{p_{i'} : i' < i_0\}$ by step 4.2. Together with step 3.1 this says that $p$ is a bijection onto $P$ and $q$ a bijection onto $N$; both are injective because they are strictly increasing. [step 3.1, step 4.1, step 4.2, L3, L9]

5.2 An induction on $i$ gives $\sum_{i' < i} a_{p_{i'}} = \sum_{k < p_i} a_k^{+}$: at $i = 0$ every $k < p_0$ lies in $N$, so $a_k^{+} = 0$ and both sides are $0$; and splitting $\sum_{k<p_{i+1}} a_k^{+}$ at $p_i$ and at $p_i + 1$ isolates the single term $a_{p_i}^{+} = a_{p_i}$, all remaining indices $k$ with $p_i < k < p_{i+1}$ lying in $N$ by step 4.2 and contributing $0$. The same argument gives $\sum_{l' < l} a_{q_{l'}} = -\sum_{k<q_l} a_k^{-}$. [A1, step 3.1, step 4.2, L5, L6]

5.3 By the recursion theorem let $g : \mathbb{N} \to A$ satisfy $g(0) = (0,0,0,0,0)$ and $g(n+1) = f(g(n))$, write $g(n) = (i_n, l_n, j_n, s_n, m_n)$, and define $\sigma(n) := \mathrm{out}(g(n))$. [step 4.3, L4, construct]

5.4 For general $\alpha \le \beta$ choose real sequences with $u_j \le v_j$ and $u_j \le v_{j+1}$ as follows: if $\alpha, \beta$ are real, $u_j := \alpha$ and $v_j := \beta$; if $\alpha = -\infty$ and $\beta$ is real, $u_j := \beta - (j+1)$ and $v_j := \beta$; if $\alpha$ is real and $\beta = +\infty$, $u_j := \alpha$ and $v_j := \alpha + (j+1)$; if $\alpha = \beta = +\infty$, $u_j := j$ and $v_j := j+1$; if $\alpha = \beta = -\infty$, $u_j := -(j+2)$ and $v_j := -(j+1)$; and if $\alpha = -\infty$, $\beta = +\infty$, $u_j := -(j+1)$ and $v_j := j+1$. In every case $(u_j)$ tends to $\alpha$ and $(v_j)$ to $\beta$ in $\overline{\mathbb{R}}$, and both conditions of step 4.3 hold. [step 4.3, L11, choose]

6.1 Hence $\sum_{i'<i} a_{p_{i'}} \to +\infty$ as $i \to \infty$ and $\sum_{l'<l} a_{q_{l'}} \to -\infty$ as $l \to \infty$: the left-hand sides are the values of the partial sums of $\sum a_k^{+}$, respectively of $-\sum a_k^{-}$, at the strictly increasing indices $p_i$, respectively $q_l$, and by step 4.1 those indices are at least $i$, respectively $l$. [step 4.1, step 5.2, L1]

6.2 An induction on $n$ gives $i_n + l_n = n$ and $s_n = \sum_{k<n} a_{\sigma(k)}$: both hold at $n = 0$, and each transition increases exactly one of $i, l$ by one and adds to $s$ exactly the term $a_{\sigma(n)}$ indexed by the emitted natural. So $s_n = T_n$, the $n$-th partial sum of the rearranged series. [step 4.3, step 5.3, L5, L7]

7.1 Consequently, for every $i_0 \in \mathbb{N}$ and every real $M$ there is $i > i_0$ with $\sum_{i'=i_0}^{i-1} a_{p_{i'}} > M$, and for every $l_0$ and every real $M$ there is $l > l_0$ with $\sum_{l' = l_0}^{l-1} a_{q_{l'}} < M$; this is step 6.1 together with splitting of finite sums, the omitted initial block being a fixed real. [step 6.1, L6]

7.2 An induction on $n$ gives that $\sigma(n) = p_{i_n}$ at every step that increments $i$, and $\sigma(n) = q_{l_n}$ at every step that increments $l$; since $(i_n)$ and $(l_n)$ are nondecreasing and increase by one exactly at those steps, distinct steps of the first kind carry distinct values of $i_n$ and distinct steps of the second kind distinct values of $l_n$. As $p$ and $q$ are injective with disjoint ranges $P$ and $N$, the map $\sigma$ is injective. [step 4.3, step 6.2, step 5.1, L5]

8.1 There are infinitely many steps of each kind: if from some step $n_0$ on no step increments $l$, then $m_n$ is eventually constantly $0$, because a step with $m = 1$ that does not increment $l$ sets $m$ to $0$ and a step with $m = 0$ that does not increment $l$ leaves $m$ at $0$; then $j_n$ is eventually constant, say $j$, and every subsequent step satisfies $s_n \le v_{j}$, while by step 7.1 the values $s_n$, which from $n_0$ on increase by the successive terms $a_{p_i}$, exceed $v_j$ for some $n$. Symmetrically, if from some step on no step increments $i$, then $m_n$ is eventually constantly $1$, $j_n$ is eventually constant $j$, every subsequent step satisfies $s_n \ge u_j$, and step 7.1 makes $s_n$ fall below $u_j$. [step 7.1, step 4.3, step 6.2, L5]

9.1 Hence $i_n \to \infty$ and $l_n \to \infty$, so every $p_i$ and every $q_l$ occurs as some $\sigma(n)$; since $P \cup N = \mathbb{N}$ and $p, q$ enumerate $P$ and $N$, the map $\sigma$ is surjective, and with step 7.2 it is a bijection of $\mathbb{N}$. [A1, step 5.1, step 7.2, step 8.1, L9]

9.2 Likewise $j_n \to \infty$: if $j_n$ were eventually constant $j$, then from some step on no round is completed, so no step has $m = 1$ and $s < u_j$; by the argument of step 8.1 the mode is then eventually constant, and either it is $0$ forever, whence $s_n \le v_j$ always while $s_n$ increases past $v_j$, or it is $1$ forever, whence $s_n \ge u_j$ always while $s_n$ falls below $u_j$. [step 7.1, step 4.3, step 8.1]

10.1 For each $j \ge 1$ let $\beta_j$ be the step at which the mode of round $j$ changes from $0$ to $1$, that is the unique $n$ with $j_n = j$, $m_n = 0$ and $s_n > v_j$, and let $\alpha_j$ be the step at which round $j$ is completed, the unique $n$ with $j_n = j$, $m_n = 1$ and $s_n < u_j$; both exist by step 8.1 and step 9.2, and $\alpha_{j-1} < \beta_j < \alpha_j$. [step 4.3, step 8.1, step 9.2, choose]

11.1 The step $\beta_j$ is preceded, within round $j$, either by a step that added a term $a_{p_i} \ge 0$ to a value $s \le v_j$, or by the completing step $\alpha_{j-1}$ of the previous round, which added a term $a_{p_i} \ge 0$ to a value $s < u_{j-1} \le v_j$. In both situations $v_j < T_{\beta_j} \le v_j + a_{p_i}$ for the index $i$ used at the immediately preceding step. [step 4.3, step 10.1]

11.2 Likewise the step $\alpha_j$ is preceded within round $j$ by a step that added a term $a_{q_l} < 0$ to a value $s \ge u_j$, that step being either an earlier descent step or the switch $\beta_j$ itself, at which $s > v_j \ge u_j$; so $u_j - |a_{q_l}| \le T_{\alpha_j} < u_j$ for the index $l$ used at that step. [step 4.3, step 10.1]

11.3 For $\alpha_{j-1} \le n \le \beta_j$ the partial sums increase, every step of the climb adding a term $a_{p_i} \ge 0$; for $\beta_j \le n \le \alpha_j$ they decrease, every step of the descent adding a term $a_{q_l} < 0$. Hence for every $n$ with $\alpha_{j-1} \le n \le \alpha_j$ one has $\min\{T_{\alpha_{j-1}}, T_{\alpha_j}\} \le T_n \le T_{\beta_j}$. [A1, step 4.3, step 10.1]

12.1 Put $\delta_j := \max\{a_{p_{i(j)}},\, |a_{q_{l(j)}}|\}$ for the two indices appearing in step 11.1 and step 11.2. As $j \to \infty$ those indices tend to infinity, by step 8.1 and step 9.2, so $p_{i(j)} \to \infty$ and $q_{l(j)} \to \infty$ by step 4.1, and $\delta_j \to 0$ by step 1.1. Thus $v_j < T_{\beta_j} \le v_j + \delta_j$ and $u_j - \delta_j \le T_{\alpha_j} < u_j$ for every $j \ge 1$. [step 1.1, step 4.1, step 8.1, step 9.2, step 11.1, step 11.2]

12.2 Fix $n$ and let $J$ be least with $\alpha_{J-1} \ge n$, which exists because the $\alpha_j$ are strictly increasing. By step 11.3 every $m \ge \alpha_{J-1}$ satisfies $T_m \le \sup\{T_{\beta_j} : j \ge J\}$, and only the finitely many indices $m$ with $n \le m < \alpha_{J-1}$ are unaccounted for; each of those lies in a round of index at most $J-1$ and so is at most $\max\{T_{\beta_j} : 1 \le j \le J-1\}$ together with $T_n$ itself. Hence $\sup\{T_m : m \ge n\}$ is finite or $+\infty$ according as $\sup\{T_{\beta_j} : j \ge J\}$ is, and taking the infimum over $n$, which drives $J$ to infinity, gives $\limsup_n T_n = \limsup_j T_{\beta_j}$. [step 10.1, step 11.3, L10]

13.1 Take $u_j = v_j = c$ for all $j$, which satisfies the two conditions of step 4.3. Then $c < T_{\beta_j} \le c + \delta_j$ and $c - \delta_j \le T_{\alpha_j} < c$, so by step 11.3 every $n$ with $\alpha_{j-1} \le n \le \alpha_j$ has $|T_n - c| \le \max\{\delta_{j-1}, \delta_j\}$. Given a real $\varepsilon > 0$, choose $J \ge 2$ with $\delta_j < \varepsilon$ for all $j \ge J-1$; then $|T_n - c| < \varepsilon$ for all $n \ge \alpha_{J-1}$, so $T_n \to c$ and the rearranged series converges with sum $c$. This is claim 1. [step 12.1, step 11.3, L8]

13.2 Take $v_j = j+1$ and $u_j = j$, which satisfy the two conditions. Then $T_{\alpha_j} \ge u_j - \delta_j = j - \delta_j$, so by step 11.3 every $n$ with $\alpha_{j-1} \le n \le \alpha_j$ has $T_n \ge \min\{j-1-\delta_{j-1},\, j - \delta_j\}$, a quantity that exceeds any prescribed real for all large $j$; hence $T_n \to +\infty$. Taking instead $v_j = -(j+1)$ and $u_j = -(j+2)$, which also satisfy the two conditions, gives $T_n \le T_{\beta_j} \le v_j + \delta_j = -(j+1) + \delta_j$ on the same ranges, hence $T_n \to -\infty$. This is claim 2. [step 12.1, step 11.3, L8]

13.3 By step 12.1 the subsequence $(T_{\beta_j})_{j \ge 1}$ tends to $\beta$ and $(T_{\alpha_j})_{j\ge1}$ tends to $\alpha$, in $\overline{\mathbb{R}}$: when the target sequence is real-valued and convergent the two-sided bound of step 12.1 with $\delta_j \to 0$ gives it, and when the target sequence diverges the one-sided bound does. [step 12.1, step 5.4, L8, L11]

14.1 By step 13.3 and [L11], $\limsup_j T_{\beta_j} = \beta$; so $\limsup_n T_n = \beta$. The same argument applied to infima, with $\alpha_j$ in place of $\beta_j$ and the lower bound of step 11.3 in place of the upper one, gives $\liminf_n T_n = \liminf_j T_{\alpha_j} = \alpha$. [step 13.3, step 12.2, L10, L11]

15.1 The bijection $\sigma$ of step 5.3, built from the targets chosen in step 5.4, is therefore a rearrangement of $\sum a_k$ whose partial sums have limit inferior $\alpha$ and limit superior $\beta$; claims 1 and 2 are the special cases computed directly in step 13.1 and step 13.2, and claim 3 is the case $\alpha < \beta$. [step 9.1, step 13.1, step 13.2, step 14.1, discharge-construct] ∎

## Remarks

- **Only two properties of the series are used.** That both part series diverge to $+\infty$ ([[lem-positive-and-negative-parts]]), which is what keeps the two supplies inexhaustible, and that $a_k \to 0$ ([[lem-nth-term-test]]), which is what makes the overshoot at each turning point vanish. Both hold for every conditionally convergent series and neither holds for an absolutely convergent one, whose part series both converge.

- **Where the well-ordering principle is used, and where it is not.** It appears in step 2.1 and step 3.1, to define the increasing enumerations of $P$ and $N$, and in step 5.1. It does *not* appear in the greedy rule: "take terms until the running sum crosses the target" is implemented as a one-step recursion whose state carries the two counters, the round and the running sum, so no least crossing index is ever selected. No choice principle is used anywhere; every object is determined by the data.

- **Zero terms are not a special case.** They are collected into $P$, so a run of zeros is consumed during a climb without moving the running sum, and the climb still terminates because the tail sums of $\sum_i a_{p_i}$ are unbounded. Had $P$ been defined as $\{k : a_k > 0\}$, the zero-indexed terms would have had to be inserted separately for $\sigma$ to be surjective.

- **The oscillating case is genuinely more than the two divergences.** With $\alpha < \beta$ both finite, the partial sums visit every neighbourhood of $\alpha$ and of $\beta$ infinitely often and are eventually confined to a neighbourhood of $[\alpha, \beta]$; the subsequential limit set of $(T_n)$ is then the whole interval, though nothing on this page needs that refinement.
````


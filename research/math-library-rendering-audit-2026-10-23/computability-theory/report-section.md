## Computability Theory

Completed visual review of **874 items across 86 pages**, with **1045 image tiles**. Findings: 22 confirmed, 6 typography. Evidence: [manifest](math-library-rendering-audit-2026-10-23/computability-theory/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/computability-theory/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/computability-theory/category-review-receipt.json).

### Confirmed rendering defects

#### computability-theory / confirmed 001: `ex-p-poly-equals-p-with-polynomial-advice`

- Location: **Verification**; source lines 46.
- Pages: `boolean-circuits-and-nonuniform-complexity-examples`.
- Visible defect: Proof step 2.1 uses Markdown double-backtick inline code delimiters around the concrete gate list. The captured application preview visibly prints the opening and closing backticks in the prose instead of presenting the list cleanly as code. Replace with a single backtick span or another supported code presentation, then recapture. This is confirmed rendering leakage; no formula or gate meaning is lost.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/ex-p-poly-equals-p-with-polynomial-advice--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/ex-p-poly-equals-p-with-polynomial-advice.md).

Exact frozen source lines:

```text
46: 2.1 Conversely encode $C_2$ by the topological list ``inputs $x_1,x_2$; NOT $x_1$; designate the NOT gate as output.'' A fixed evaluator given this list as advice returns $1$ on $00$ and, for every two-bit $x$, returns $\neg x_1$; the declared input $x_2$ is simply unused. [L1, step 1.1, construct]
```

#### computability-theory / confirmed 002: `cex-sigma-n-and-pi-n-are-disjoint`

- Location: **Title**; source lines 4.
- Pages: `the-arithmetical-hierarchy-and-posts-theorem-examples`.
- Visible defect: The title displays Sigma_n^0 and Pi_n^0 with literal underscores and carets; the set symbols render properly in the Statement.
- Future repair: Use renderer-supported inline math in the title or spell the hierarchy names out.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/cex-sigma-n-and-pi-n-are-disjoint--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/cex-sigma-n-and-pi-n-are-disjoint.md).

Exact frozen source lines:

```text
4: title: "A set lying in both Sigma_n^0 and Pi_n^0"
```

#### computability-theory / confirmed 003: `ex-many-one-reductions-transfer-decidability-and-recognizability`

- Location: **Title**; source lines 4.
- Pages: `computable-reductions-and-rices-theorem-examples`.
- Visible defect: The title displays A_TM <=m as raw ASCII rather than a subscripted machine language and many-one reduction symbol.
- Future repair: Use inline math for A_{TM} and the many-one reduction notation, or phrase the title without symbolic shorthand.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/ex-many-one-reductions-transfer-decidability-and-recognizability--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/ex-many-one-reductions-transfer-decidability-and-recognizability.md).

Exact frozen source lines:

```text
4: title: "Using A_TM <=m nonemptiness to transfer undecidability and recognizability information"
```

#### computability-theory / confirmed 004: `ex-time-bounds-imply-space-bounds`

- Location: **Title**; source lines 4.
- Pages: `resource-bounds-and-machine-invariance-examples`.
- Visible defect: The title displays both n^2 expressions with a literal caret.
- Future repair: Use inline math for the quadratic bounds or spell out “quadratic time” and “quadratic space”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/ex-time-bounds-imply-space-bounds--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/ex-time-bounds-imply-space-bounds.md).

Exact frozen source lines:

```text
4: title: "A machine that runs in O(n^2) time necessarily uses at most O(n^2) space"
```

#### computability-theory / confirmed 005: `def-circuit-family-and-p-poly`

- Location: **Definition**; source lines 28, 28.
- Pages: `boolean-circuits-and-nonuniform-complexity`.
- Visible defect: The frozen Definition has plain `(C_n)`, `C_n(x)=1`, `L`, and `n` with no math delimiters. The original tile visibly renders these as upright baseline text, so the circuit index and input notation are not typeset as mathematics.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: ; [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/def-circuit-family-and-p-poly.md).

Exact frozen source lines:

```text
28: A circuit family is a sequence (C_n) with exactly n inputs at length n. It recognizes L if C_n(x)=1 exactly when x belongs to L for every n-bit x. P/poly contains exactly the languages recognized by families with polynomial size; no algorithm that constructs C_n from n is required.
```

#### computability-theory / confirmed 006: `thm-one-way-and-two-way-tapes-are-equivalent`

- Location: **Facts & Assumptions**; source lines 40.
- Pages: `robust-machine-models-and-universal-computation`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/thm-one-way-and-two-way-tapes-are-equivalent--01.png), [tile 02](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/thm-one-way-and-two-way-tapes-are-equivalent--02.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/thm-one-way-and-two-way-tapes-are-equivalent.md).

Exact frozen source lines:

```text
40: [F1] Extend the clauses of [[def-language-recognized-and-decided]] and [[def-partial-function-computed-by-a-machine]] to the two-way convention. Input occupies cells $0,1,\ldots$ and all negative cells are initially blank. A halting two-way configuration outputs a word $u$ exactly when $u$ occupies cells $0,\ldots,|u|-1$ and every other cell in $mathbb Z$ is blank. Thus a nonblank negative cell prevents the configuration from outputting an ordinary word.
```

#### computability-theory / confirmed 007: `prop-every-finite-language-is-regular`

- Location: **Proof**; source lines 38.
- Pages: `deterministic-finite-automata-and-regular-languages`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/prop-every-finite-language-is-regular--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/prop-every-finite-language-is-regular.md).

Exact frozen source lines:

```text
38: 1.1 Define a machine $D$ with state set $P\cup\{\bot\}$, start state $\varepsilon$, accepting set $F=L$, and transition rule $$ \delta(p,a)=\begin{cases}pa,&\text{if }pa\in P,\\ \bot,&\text{if }pa\notin P,\end{cases}\qquad \delta(\bot,a)=\bot. $$ By [F1] the state set is finite, and the transition rule is total on $(P\cup\{\bot\})\times\Sigma$. [given, F1, construct]
```

#### computability-theory / confirmed 008: `thm-posts-theorem`

- Location: **Statement**; source lines 29, 31.
- Pages: `the-arithmetical-hierarchy-and-posts-theorem`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/thm-posts-theorem--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/thm-posts-theorem.md).

Exact frozen source lines:

```text
29: Put $0^{(0)}=\varnothing$ and let $0^{(n+1)}$ be the halting set for machines
31: $$A\in\Sigma_{n+1}^0\iff A\text{ is }0^{(n)}\text{-c.e.},\qquad A\in\Delta_{n+1}^0\iff A\le_T0^{(n)}.$$
```

#### computability-theory / confirmed 009: `cor-delta-one-sets-are-exactly-decidable`

- Location: **Item body**; source lines 4.
- Pages: `the-arithmetical-hierarchy-and-posts-theorem`.
- Visible defect: The title contains literal `Delta_1^0`; in the original-resolution title tile it renders as plain ASCII subscript/caret notation. The statement body writes the corresponding notation inside `$...$` and renders correctly.
- Future repair: Use math delimiters around the title symbol while preserving its words.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/research/math-library-rendering-audit-2026-10-23/computability-theory/screenshots/cor-delta-one-sets-are-exactly-decidable--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/cor-delta-one-sets-are-exactly-decidable.md).

Exact frozen source lines:

```text
4: title: "Delta_1^0 sets are exactly the decidable sets"
```

#### computability-theory / confirmed 010: `def-bounded-reachability-recursion`

- Location: **Item body**; source lines 4.
- Pages: `space-complexity-savitch-and-tqbf`.
- Visible defect: The title contains literal `2^i`, displayed as ASCII caret notation in the title tile. The body definition and intended-length statement use `$2^i$` and render correctly.
- Future repair: Mark the exponent as math in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/research/math-library-rendering-audit-2026-10-23/computability-theory/screenshots/def-bounded-reachability-recursion--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/def-bounded-reachability-recursion.md).

Exact frozen source lines:

```text
4: title: "The bounded reachability recursion for directed paths of length at most 2^i"
```

#### computability-theory / confirmed 011: `ex-distinguishable-prefix-nonregularity-criterion`

- Location: **Item body**; source lines 4.
- Pages: `myhill-nerode-theory-and-dfa-minimization-examples`.
- Visible defect: The title contains literal `0^n`, `{0^n1^n : n >= 0}`; the original-resolution title tile shows carets and `>=` as plain text. The example body uses rendered math.
- Future repair: Format the expression as math in the title, with the intended set notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/research/math-library-rendering-audit-2026-10-23/computability-theory/screenshots/ex-distinguishable-prefix-nonregularity-criterion--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/ex-distinguishable-prefix-nonregularity-criterion.md).

Exact frozen source lines:

```text
4: title: "The prefixes 0^n distinguish the language {0^n1^n : n >= 0}"
```

#### computability-theory / confirmed 012: `thm-greedy-set-cover-is-an-h-n-approximation`

- Location: **Item body**; source lines 4.
- Pages: `approximation-algorithms-and-gap-reductions`.
- Visible defect: The title contains literal `H_n`; its screenshot displays the underscore notation as plain text. The statement body renders `$H_n$` correctly.
- Future repair: Format `H_n` as math in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/research/math-library-rendering-audit-2026-10-23/computability-theory/screenshots/thm-greedy-set-cover-is-an-h-n-approximation--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/thm-greedy-set-cover-is-an-h-n-approximation.md).

Exact frozen source lines:

```text
4: title: "Weighted greedy set cover has approximation factor H_n"
```

#### computability-theory / confirmed 013: `lem-sum-check-verifier-is-polynomial-time-given-point-evaluation`

- Location: **Proof**; source lines 38.
- Pages: `arithmetization-and-the-sum-check-protocol`.
- Visible defect: Fact [F1] includes raw `d_i+1` in ordinary prose; the screenshot displays this as literal ASCII rather than a subscripted mathematical bound. Other uses of the degree bound in the statement and proof are rendered math.
- Future repair: Format the degree expression as `$d_i+1$` or spell it out.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/research/math-library-rendering-audit-2026-10-23/computability-theory/screenshots/lem-sum-check-verifier-is-polynomial-time-given-point-evaluation--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/lem-sum-check-verifier-is-polynomial-time-given-point-evaluation.md).

Exact frozen source lines:

```text
38: ## Proof
```

#### computability-theory / confirmed 014: `def-linearity-test`

- Location: **Title**; source lines 4.
- Pages: `arithmetization-and-the-sum-check-protocol`.
- Visible defect: The original tile displays F_2 with a literal underscore in the title instead of a mathematical subscript.
- Future repair: Typeset the mathematical notation in the title or repair the reported rendering issue while preserving the statement.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/research/math-library-rendering-audit-2026-10-23/computability-theory/screenshots/def-linearity-test--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/def-linearity-test.md).

Exact frozen source lines:

```text
4: title: "The BLR linearity test over F_2"
```

#### computability-theory / confirmed 015: `ex-sum-check-three-variable-transcript`

- Location: **Title**; source lines 4.
- Pages: `arithmetization-and-the-sum-check-protocol-examples`.
- Visible defect: The original tile displays F_101 with a literal underscore in the title instead of a mathematical subscript.
- Future repair: Typeset the mathematical notation in the title or repair the reported rendering issue while preserving the statement.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/research/math-library-rendering-audit-2026-10-23/computability-theory/screenshots/ex-sum-check-three-variable-transcript--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/ex-sum-check-three-variable-transcript.md).

Exact frozen source lines:

```text
4: title: "A complete sum-check transcript over F_101"
```

#### computability-theory / confirmed 016: `thm-savitchs-theorem`

- Location: **Title**; source lines 4.
- Pages: `space-complexity-savitch-and-tqbf`.
- Visible defect: The original tile displays the exponent as literal ^2 in the title, not a superscript; the formula in the item body renders correctly.
- Future repair: Typeset the mathematical notation in the title or repair the reported rendering issue while preserving the statement.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/research/math-library-rendering-audit-2026-10-23/computability-theory/screenshots/thm-savitchs-theorem--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/thm-savitchs-theorem.md).

Exact frozen source lines:

```text
4: title: "Savitch's theorem: NSPACE(s(n)) is contained in DSPACE(s(n)^2)"
```

#### computability-theory / confirmed 017: `thm-halting-is-sigma-one-complete`

- Location: **frontmatter title**; source lines 4.
- Pages: `the-arithmetical-hierarchy-and-posts-theorem`.
- Visible defect: In the rendered title, Sigma_1^0 is shown as literal ASCII underscore/caret notation rather than mathematical subscripts and superscripts. The Statement section uses rendered math correctly.
- Future repair: Use title text that spells out the notation or a title-rendering path that supports math.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/thm-halting-is-sigma-one-complete--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/thm-halting-is-sigma-one-complete.md).

Exact frozen source lines:

```text
4: title: "The halting set is Sigma_1^0-complete"
```

#### computability-theory / confirmed 018: `def-plurality-decoding-of-powered-local-views`

- Location: **Remarks**; source lines 46.
- Pages: `gap-amplification-and-assignment-testing`.
- Visible defect: The sole screenshot is 1400 pixels high and its bottom edge cuts through the fourth Remarks bullet; the end of the sentence and item are outside the tile. Source, frozen snapshot, and HTML are hash-stable and were read, but this rendered tail could not be visually reviewed.
- Future repair: Capture a continuation tile for the remaining rendered Remarks text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/def-plurality-decoding-of-powered-local-views--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/def-plurality-decoding-of-powered-local-views.md).

Exact frozen source lines:

```text
46: - The decoding is defined for every labeling of $G_t$, canonical lifts included: for the canonical lift $\bar\sigma$ of a base labeling $\sigma$, every pattern from $v$ ends at a vertex $w$ whose view claims $\sigma(v)$ for $v$, so $p_v$ is concentrated on $\sigma(v)$ and $\hat{\bar\sigma}=\sigma$.
```

#### computability-theory / confirmed 019: `def-sigma-n-pi-n-and-delta-n-sets`

- Location: **title**; source lines 4.
- Pages: `the-arithmetical-hierarchy-and-posts-theorem`.
- Visible defect: The tile title displays Sigma_n^0, Pi_n^0, and Delta_n^0 as literal ASCII with underscores and carets; the corresponding symbols are rendered as mathematics in the item body. The title math is therefore visually inconsistent and the caret/underscore notation is not typeset.
- Future repair: Use the renderer-supported math delimiters and TeX commands in the title, e.g. $\Sigma_n^0$, $\Pi_n^0$, and $\Delta_n^0$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/def-sigma-n-pi-n-and-delta-n-sets--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/def-sigma-n-pi-n-and-delta-n-sets.md).

Exact frozen source lines:

```text
4: title: "The classes Sigma_n^0, Pi_n^0, and Delta_n^0"
```

#### computability-theory / confirmed 020: `lem-first-false-round-is-caught-by-root-bound`

- Location: **Facts & Assumptions**; source lines 32.
- Pages: `arithmetization-and-the-sum-check-protocol`.
- Visible defect: In the Facts tile, S_{i-1}, q_i, r_i, and h_i are shown as literal underscore-style strings while the surrounding statement/proof uses rendered math. These are variable/index expressions, not code identifiers.
- Future repair: Wrap the mathematical expressions in supported inline math delimiters, consistently with the statement and proof.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/lem-first-false-round-is-caught-by-root-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/lem-first-false-round-is-caught-by-root-bound.md).

Exact frozen source lines:

```text
32: [F1] The current true value is S_{i-1}, the honest message is q_i, and a fresh uniform r_i is drawn only after h_i is fixed ([[def-sum-check-instance-and-protocol]]).
```

#### computability-theory / confirmed 021: `ex-sigma-one-sets-are-exactly-ce-sets`

- Location: **title**; source lines 4.
- Pages: `the-arithmetical-hierarchy-and-posts-theorem-examples`.
- Visible defect: The rendered item title shows the formula notation literally as `Sigma_1^0`; the body presents the arithmetical-hierarchy notation as mathematics.
- Future repair: Typeset the title formula using supported inline math delimiters, for example `\Sigma_1^0`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/ex-sigma-one-sets-are-exactly-ce-sets--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/ex-sigma-one-sets-are-exactly-ce-sets.md).

Exact frozen source lines:

```text
4: title: "Reading a c.e. definition as a Sigma_1^0 formula"
```

#### computability-theory / confirmed 022: `fs-sigma-n-and-pi-n-are-disjoint`

- Location: **title**; source lines 4.
- Pages: `the-arithmetical-hierarchy-and-posts-theorem`.
- Visible defect: The rendered title exposes both hierarchy-class symbols as literal ASCII `Sigma_n^0` and `Pi_n^0`, while the statement uses rendered mathematical symbols.
- Future repair: Typeset the title formulas using supported inline math delimiters, for example `\Sigma_n^0` and `\Pi_n^0`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/fs-sigma-n-and-pi-n-are-disjoint--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/fs-sigma-n-and-pi-n-are-disjoint.md).

Exact frozen source lines:

```text
4: title: "False: Sigma_n^0 and Pi_n^0 are disjoint"
```

### Optional typography

#### computability-theory / typography 001: `ex-existence-and-uniqueness-of-multilinear-extension`

- Location: **Item body**; source lines 4, 4.
- Pages: `arithmetization-and-the-sum-check-protocol-examples`.
- Visible defect: The title uses plain `F_5`; the rendered title shows the underscore literally. The body correctly typesets the field notation.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: ; [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/ex-existence-and-uniqueness-of-multilinear-extension.md).

Exact frozen source lines:

```text
4: title: "Interpolating a two-bit table over F_5"
```

#### computability-theory / typography 002: `thm-multitape-to-single-tape-time-simulation`

- Location: **Item body**; source lines 4, 4.
- Pages: `resource-bounds-and-machine-invariance`.
- Visible defect: The title uses ASCII `O((n+T(n))^2)` and the capture displays the caret expression literally. The statement body typesets the asymptotic expression.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: ; [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/thm-multitape-to-single-tape-time-simulation.md).

Exact frozen source lines:

```text
4: title: "Every multitape time-T computation has a single-tape simulation in O((n+T(n))^2) time"
```

#### computability-theory / typography 003: `thm-totality-is-pi-two-complete`

- Location: **Item body**; source lines 4, 4.
- Pages: `the-arithmetical-hierarchy-and-posts-theorem`.
- Visible defect: The title uses ASCII `Pi_2^0`; the capture displays the underscore/caret literally. The statement body renders the arithmetical-hierarchy notation correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: ; [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/thm-totality-is-pi-two-complete.md).

Exact frozen source lines:

```text
4: title: "The totality set is Pi_2^0-complete"
```

#### computability-theory / typography 004: `ex-pit-is-in-corp`

- Location: **Item body**; source lines 4.
- Pages: `randomized-complexity-and-amplification-examples`, `randomized-complexity-and-amplification`.
- Visible defect: Title contains raw x^2-y^2; the captured title displays the caret notation literally. The body formula is rendered correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/ex-pit-is-in-corp--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/ex-pit-is-in-corp.md).

Exact frozen source lines:

```text
4: title: "A random evaluation test that separates the zero polynomial from x^2-y^2"
```

#### computability-theory / typography 005: `thm-sigma-one-sets-are-exactly-ce-sets`

- Location: **Item body**; source lines 4.
- Pages: `the-arithmetical-hierarchy-and-posts-theorem`.
- Visible defect: Title uses raw Sigma_1^0; the captured title displays underscores/caret notation literally. The statement body renders its hierarchy notation correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/thm-sigma-one-sets-are-exactly-ce-sets--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/thm-sigma-one-sets-are-exactly-ce-sets.md).

Exact frozen source lines:

```text
4: title: "Sigma_1^0 sets are exactly the computably enumerable sets"
```

#### computability-theory / typography 006: `def-polynomial-advice-machine`

- Location: **Definition**; source lines 28.
- Pages: `boolean-circuits-and-nonuniform-complexity`.
- Visible defect: The rendered sentence preserves a_n and n-bit as literal ASCII rather than setting a_n as a subscript. This is legible and not treated as a confirmed defect; optional typography only.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/computability-theory/screenshots/def-polynomial-advice-machine--01.png); [frozen source](math-library-rendering-audit-2026-10-23/computability-theory/snapshots/def-polynomial-advice-machine.md).

Exact frozen source lines:

```text
28: An advised polynomial-time machine consists of a deterministic polynomial-time machine M and strings a_n of polynomial length. On each n-bit input x it receives (x,a_n), and accepts exactly the intended language. The string is length-indexed and need not be computable from n.
```


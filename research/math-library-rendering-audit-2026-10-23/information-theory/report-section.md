## Information Theory

Completed visual review of **464 items across 48 pages**, with **657 image tiles**. Findings: 19 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/information-theory/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/information-theory/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/information-theory/category-review-receipt.json).

### Confirmed rendering defects

#### information-theory / confirmed 001: `ex-it-dephasing-quantum-relative-entropy-dpi`

- Location: **Diagram convention**; source lines 73, 74, 75, 76, 77, 78, 79.
- Pages: `quantum-relative-entropy-data-processing-and-strong-subadditivity-examples`.
- Visible defect: The assigned HTML tile displays the LaTeX/TikZ source literally in the Diagram convention section instead of drawing the stated one-wire channel schematic.
- Future repair: Render the TikZ block through a supported diagram path or replace it with supported diagram markup; retain the wire labels X, Δ, and Δ(X).
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/ex-it-dephasing-quantum-relative-entropy-dpi--01.png), [tile 02](math-library-rendering-audit-2026-10-23/information-theory/screenshots/ex-it-dephasing-quantum-relative-entropy-dpi--02.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/ex-it-dephasing-quantum-relative-entropy-dpi.md).

Exact frozen source lines:

```text
73: \begin{center}
74: \begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
75:   \draw[->] (0,0) -- (1.2,0) node[midway,above] {$X$};
76:   \node[draw,rounded corners,minimum width=1.5cm,minimum height=.75cm] (deph) at (2,0) {$\Delta$};
77:   \draw[->] (deph.east) -- (3.3,0) node[midway,above] {$\Delta(X)$};
78: \end{tikzpicture}
79: \end{center}
```

#### information-theory / confirmed 002: `cor-smb-limit-is-conditional-entropy-under-ac`

- Location: **Statement**; source lines 32.
- Pages: `stationary-ergodic-sources-and-universal-coding`.
- Visible defect: The local rendered statement prints E[g_infinity|I] literally instead of typesetting the conditional expectation. The formula is properly delimited and rendered later in the proof.
- Future repair: Typeset the statement formula, e.g. $\mathbb E[g_\infty\mid\mathcal I]$, with source-consistent notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/cor-smb-limit-is-conditional-entropy-under-ac--01.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/cor-smb-limit-is-conditional-entropy-under-ac.md).

Exact frozen source lines:

```text
32: Under AC, identifies the componentwise SMB limit with E[g_infinity|I], conditional expectation of infinite-past information given the invariant sigma-algebra.
```

#### information-theory / confirmed 003: `thm-stationary-entropy-rate-limit`

- Location: **Statement**; source lines 28.
- Pages: `stationary-ergodic-sources-and-universal-coding`.
- Visible defect: The local rendered statement prints the ASCII exponent, tuple ellipsis, and formula as ordinary text; the matching proof uses rendered TeX.
- Future repair: Typeset the block entropy expression in inline math, consistent with the notation used in the proof.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/thm-stationary-entropy-rate-limit--01.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/thm-stationary-entropy-rate-limit.md).

Exact frozen source lines:

```text
28: Proves that n^{-1}H(X_0,...,X_{n-1}) converges under stationarity and equals the limit of the finite-past conditional entropies.
```

#### information-theory / confirmed 004: `thm-huffman-coding-is-prefix-optimal`

- Location: **Proof technique banner**; source lines 52.
- Pages: `prefix-codes-and-finite-lossless-coding`.
- Visible defect: The intended uppercase technique banner displays the enclosed math literally as `$M\GE2$` rather than rendering it.
- Future repair: Keep the uppercase banner and delimit the mathematical expression so the renderer typesets it; do not uppercase TeX commands.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/thm-huffman-coding-is-prefix-optimal--01.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/thm-huffman-coding-is-prefix-optimal.md).

Exact frozen source lines:

```text
52: **Proof technique:** Induct on list size $m\ge2$: for every finite list of at least two positive weights with distinct serial numbers and total weight one, every sequence of minimum-weight merges, including every tie resolution, gives an optimal prefix code. The base case is size two; the one-symbol source is handled separately in step 1.1. A reduced list retains positive weights, total weight one, and distinct serials because each parent receives a fresh serial. The original source and each reduced active list are instances of this claim.
```

#### information-theory / confirmed 005: `ex-finite-trellis-viterbi-tie-and-unreachable-state`

- Location: **Example**; source lines 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60.
- Pages: `finite-trellis-viterbi-and-sequence-decoding-examples`.
- Visible defect: The local HTML/preview displays the `~~~tikz` block contents as literal TeX/TikZ text instead of a trellis drawing.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/ex-finite-trellis-viterbi-tie-and-unreachable-state--01.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/ex-finite-trellis-viterbi-tie-and-unreachable-state.md).

Exact frozen source lines:

```text
49: \begin{tikzpicture}[>=stealth]
50: \node[circle,draw] (s) at (0,0) {$s$};
51: \node[circle,draw] (a) at (2,1) {$a$};
52: \node[circle,draw] (b) at (2,0) {$b$};
53: \node[circle,draw,dashed] (c) at (2,-1) {$c$};
54: \node[circle,draw] (t) at (4,0) {$t$};
55: \draw[->] (s) -- node[above] {$2$} (a);
56: \draw[->] (s) -- node[above] {$2$} (b);
57: \draw[->] (a) -- node[above] {$3$} (t);
58: \draw[->] (b) -- node[below] {$3$} (t);
59: \draw[->] (c) -- node[below] {$100$} (t);
60: \end{tikzpicture}
```

#### information-theory / confirmed 006: `ex-it-strong-subadditivity-for-pure-tripartite-state`

- Location: **Diagram convention**; source lines 69, 70, 71, 72, 73, 74, 75, 76.
- Pages: `quantum-relative-entropy-data-processing-and-strong-subadditivity-examples`.
- Visible defect: The local HTML/preview displays the center/TikZ source as literal text rather than the intended state-preparation diagram; the raw source spans screenshot tiles 01 and 02.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/ex-it-strong-subadditivity-for-pure-tripartite-state--01.png), [tile 02](math-library-rendering-audit-2026-10-23/information-theory/screenshots/ex-it-strong-subadditivity-for-pure-tripartite-state--02.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/ex-it-strong-subadditivity-for-pure-tripartite-state.md).

Exact frozen source lines:

```text
69: \begin{center}
70: \begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
71:   \node[draw,rounded corners,minimum width=1.8cm,minimum height=.8cm] (state) at (0,0) {$|\mathrm{GHZ}\rangle$};
72:   \draw[->] (state.north west) -- (-1.1,1) node[above] {$A$};
73:   \draw[->] (state.north) -- (0,1) node[above] {$B$};
74:   \draw[->] (state.north east) -- (1.1,1) node[above] {$C$};
75: \end{tikzpicture}
76: \end{center}
```

#### information-theory / confirmed 007: `thm-ams-ergodic-information-aep`

- Location: **Statement**; source lines 37.
- Pages: `stationary-ergodic-sources-and-universal-coding`.
- Visible defect: The normalized self-information formula displays literal carets, braces, and underscore notation in the local preview instead of typeset mathematics.
- Future repair: Wrap the self-information expression in inline math delimiters, then regenerate and inspect the local preview.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/thm-ams-ergodic-information-aep--01.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/thm-ams-ergodic-information-aep.md).

Exact frozen source lines:

```text
37: Assume AC. For a finite-alphabet AMS source whose stationary mean is ergodic with bit entropy rate h, the normalized self-information -n^{-1}log_2 P(X_0^{n-1}) converges P-almost surely to h.
```

#### information-theory / confirmed 008: `ex-hmm-viterbi-exact-sequence-map`

- Location: **Example**; source lines 61, 73.
- Pages: `finite-trellis-viterbi-and-sequence-decoding-examples`.
- Visible defect: The example shows raw TikZ commands instead of the initial-state and transition-probability diagram.
- Future repair: Use the renderer-supported diagram format for this content or remove the raw TikZ block; regenerate and inspect the full Example section.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/ex-hmm-viterbi-exact-sequence-map--01.png), [tile 02](math-library-rendering-audit-2026-10-23/information-theory/screenshots/ex-hmm-viterbi-exact-sequence-map--02.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/ex-hmm-viterbi-exact-sequence-map.md).

Exact frozen source lines:

```text
61: ~~~tikz
73: ~~~
```

#### information-theory / confirmed 009: `thm-ams-stationary-mean-asymptotic-dominance`

- Location: **Statement**; source lines 24, 26.
- Pages: `stationary-ergodic-sources-and-universal-coding`.
- Visible defect: The Statement sentence is displayed with source-authored ASCII notation P, Pbar, T^{-n}G, and Pbar(G)=0 rather than rendered mathematical notation. Typeset the measures and inverse-shift event in the existing math syntax; the current tile visibly exposes the raw caret, hyphen, parentheses, and bar-name text.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/research/math-library-rendering-audit-2026-10-23/information-theory/screenshots/thm-ams-stationary-mean-asymptotic-dominance--01.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/thm-ams-stationary-mean-asymptotic-dominance.md).

Exact frozen source lines:

```text
24: ## Statement
26: For an AMS law P with stationary mean Pbar, proves P(T^{-n}G) tends to zero for every event G with Pbar(G)=0.
```

#### information-theory / confirmed 010: `ex-iid-and-markov-source-entropy-rates`

- Location: **Example**; source lines 28.
- Pages: `stationary-ergodic-sources-and-universal-coding-examples`.
- Visible defect: The original-resolution tile prints h=1 and h=H2(1/4) as ordinary text, so the entropy-function subscript and argument are not typeset.
- Future repair: Use inline math delimiters for the formulas, e.g. `$h=1$ bit/symbol` and `$h=H_2(1/4)$`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/ex-iid-and-markov-source-entropy-rates--01.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/ex-iid-and-markov-source-entropy-rates.md).

Exact frozen source lines:

```text
28: Computes h=1 bit/symbol for fair IID bits and h=H2(1/4) for the stationary symmetric two-state Markov source with switch probability 1/4; compares the stationary LZ78 expected rates.
```

#### information-theory / confirmed 011: `thm-componentwise-shannon-mcmillan-breiman`

- Location: **Statement**; source lines 33.
- Pages: `stationary-ergodic-sources-and-universal-coding`.
- Visible defect: The Statement contains `-n^{-1}log_2 P(X_0^{n-1})` as ordinary text without math delimiters. The local HTML and screenshot show the literal caret, braces, underscore, and `log_2` source notation instead of typeset math. The displayed claim is otherwise readable.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/thm-componentwise-shannon-mcmillan-breiman--01.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/thm-componentwise-shannon-mcmillan-breiman.md).

Exact frozen source lines:

```text
33: For every stationary finite-alphabet source, proves -n^{-1}log_2 P(X_0^{n-1}) converges almost surely and in L1 to the invariant Birkhoff limit of infinite-past information density, with mean equal to the entropy rate in bits.
```

#### information-theory / confirmed 012: `lem-cost-constrained-dmc-mutual-information-under-average-cost`

- Location: **Item body**; source lines 4.
- Pages: `cost-constrained-gaussian-and-feedback-channels`.
- Visible defect: The title uses `n C_I(Gamma)` as raw ASCII mathematical notation. The local HTML heading and screenshot show the underscore and `Gamma` literally.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/lem-cost-constrained-dmc-mutual-information-under-average-cost--01.png), [tile 02](math-library-rendering-audit-2026-10-23/information-theory/screenshots/lem-cost-constrained-dmc-mutual-information-under-average-cost--02.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/lem-cost-constrained-dmc-mutual-information-under-average-cost.md).

Exact frozen source lines:

```text
4: title: An average-cost DMC block input has mutual information at most n C_I(Gamma)
```

#### information-theory / confirmed 013: `ex-lz78-parse-with-explicit-terminator`

- Location: **Remarks**; source lines 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67.
- Pages: `stationary-ergodic-sources-and-universal-coding-examples`.
- Visible defect: The frozen HTML contains a red “diagram failed to render” panel with the TikZ source instead of the trie. The source describes a trie with root index 0, inserted phrase nodes 1–5, symbol-labeled parent-child edges, and a dashed output-only # edge from node 2.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/ex-lz78-parse-with-explicit-terminator--01.png), [tile 02](math-library-rendering-audit-2026-10-23/information-theory/screenshots/ex-lz78-parse-with-explicit-terminator--02.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/ex-lz78-parse-with-explicit-terminator.md).

Exact frozen source lines:

```text
52: ```tikz
53: \begin{tikzpicture}[every node/.style={draw,circle,inner sep=2pt},>=stealth]
54: \node (r) at (0,0) {$0:\epsilon$};
55: \node (a) at (-2,-1) {$1:0$};
56: \node (b) at (2,-1) {$2:1$};
57: \node (aa) at (-2,-2) {$3:00$};
58: \node (ba) at (2,-2) {$4:10$};
59: \node (baa) at (2,-3) {$5:100$};
60: \node[draw=none,rectangle] (end) at (4,-2) {$1\#: \text{output only}$};
61: \draw (r)--node[above left,draw=none] {$0$}(a);
62: \draw (r)--node[above right,draw=none] {$1$}(b);
63: \draw (a)--node[left,draw=none] {$0$}(aa);
64: \draw (b)--node[right,draw=none] {$0$}(ba);
65: \draw (ba)--node[right,draw=none] {$0$}(baa);
66: \draw[dashed,->] (b)--node[above,draw=none] {$\#$}(end);
67: \end{tikzpicture}
```

#### information-theory / confirmed 014: `lem-aep-implies-fixed-rate-lossless-coding`

- Location: **Statement**; source lines 26.
- Pages: `stationary-ergodic-sources-and-universal-coding`.
- Visible defect: The source writes -n^{-1}\log2 P(X^n) without math delimiters; the frozen HTML visibly renders the caret, braces, and log2 literally. The displayed claim also says “proves” rather than stating the coding conclusion, but this report records only the rendering defect.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/lem-aep-implies-fixed-rate-lossless-coding--01.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/lem-aep-implies-fixed-rate-lossless-coding.md).

Exact frozen source lines:

```text
26: For any finite-alphabet source with -n^{-1}log2 P(X^n) converging in probability to h, proves vanishing block error is achievable for R>h and impossible for R<h.
```

#### information-theory / confirmed 015: `lem-finite-alphabet-past-information-convergence`

- Location: **Statement**; source lines 32.
- Pages: `stationary-ergodic-sources-and-universal-coding`.
- Visible defect: The source writes p_k(a), g_k, and sup_k g_k as plain text rather than math; the frozen HTML visibly leaves underscores and sup_k literal.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/lem-finite-alphabet-past-information-convergence--01.png), [tile 02](math-library-rendering-audit-2026-10-23/information-theory/screenshots/lem-finite-alphabet-past-information-convergence--02.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/lem-finite-alphabet-past-information-convergence.md).

Exact frozen source lines:

```text
32: Proves p_k(a) converges almost surely for each symbol, g_k converges on realized paths, and sup_k g_k is integrable with an explicit exponential tail bound.
```

#### information-theory / confirmed 016: `lem-it-cq-typical-projector-dimension`

- Location: **Facts & Assumptions**; source lines 57.
- Pages: `quantum-source-compression-and-cq-capacity`.
- Visible defect: The linked theorem title leaks “S^*S” as raw ASCII in the rendered anchor text.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/lem-it-cq-typical-projector-dimension--01.png), [tile 02](math-library-rendering-audit-2026-10-23/information-theory/screenshots/lem-it-cq-typical-projector-dimension--02.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/lem-it-cq-typical-projector-dimension.md).

Exact frozen source lines:

```text
57: [F5] [[thm-non-negative-operator-characterisations]]: a nonnegative operator with zero quadratic form at a vector annihilates that vector.
```

#### information-theory / confirmed 017: `lem-it-finite-quantum-entropy-continuity`

- Location: **Statement**; source lines 32.
- Pages: `quantum-source-compression-and-cq-capacity`.
- Visible defect: The linked operator-norm definition title leaks max_{||v||=1} ||Tv|| as raw ASCII in the rendered anchor text.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/lem-it-finite-quantum-entropy-continuity--01.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/lem-it-finite-quantum-entropy-continuity.md).

Exact frozen source lines:

```text
32: For each fixed finite dimension $d$, von Neumann entropy is continuous on density operators ([[def-qc-density-operator]]) on $\mathbb C^d$ in operator norm ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]). Thus, if $\rho_k\to\rho$ in operator norm, then $S(\rho_k)\to S(\rho)$.
```

#### information-theory / confirmed 018: `lem-it-maximum-coherent-information-attained`

- Location: **Facts & Assumptions**; source lines 59.
- Pages: `quantum-channel-capacities-and-entanglement-assistance`.
- Visible defect: The linked operator-norm definition title leaks max_{||v||=1} ||Tv|| as raw ASCII in the rendered anchor text.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/lem-it-maximum-coherent-information-attained--01.png), [tile 02](math-library-rendering-audit-2026-10-23/information-theory/screenshots/lem-it-maximum-coherent-information-attained--02.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/lem-it-maximum-coherent-information-attained.md).

Exact frozen source lines:

```text
59: [F2] [[def-non-negative-and-positive-operator]], [[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], and [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: nonnegativity is equivalent to self-adjointness and $\langle Tx,x\rangle\ge0$ for every vector; $|\langle Tx,y\rangle|\le\|T\|\|x\|\|y\|$.
```

#### information-theory / confirmed 019: `lem-qkd-abort-aware-ideal-output-is-state`

- Location: **Facts & Assumptions**; source lines 49.
- Pages: `quantum-key-distribution-and-composable-secrecy`.
- Visible defect: The linked theorem title leaks “S^*S” as raw ASCII in the rendered anchor text.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/information-theory/screenshots/lem-qkd-abort-aware-ideal-output-is-state--01.png), [tile 02](math-library-rendering-audit-2026-10-23/information-theory/screenshots/lem-qkd-abort-aware-ideal-output-is-state--02.png); [frozen source](math-library-rendering-audit-2026-10-23/information-theory/snapshots/lem-qkd-abort-aware-ideal-output-is-state.md).

Exact frozen source lines:

```text
49: [F6] [[thm-non-negative-operator-characterisations]]: a nonnegative finite-dimensional operator has an orthonormal eigenbasis with nonnegative real eigenvalues.
```


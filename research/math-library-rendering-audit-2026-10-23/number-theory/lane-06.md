# Number Theory rendering audit — lane 06

Reviewed all 76 assigned titles and complete ItemBody snapshots, and opened each of the 115 receipt-listed PNG tiles individually at original resolution with `tools.view_image(detail="original")`.

## Findings

### 1. `cex-shoups-product-bound-does-not-determine-mertens-constant` — Title
- Snapshot: `snapshots/cex-shoups-product-bound-does-not-determine-mertens-constant.md` lines 4.
- Symptom: The title displays “Theta(1/log x)” as ordinary ASCII text although it denotes the asymptotic expression Θ(1/log x).
- Classification: `literal-ASCII-mathematical-notation`.
- Screenshot tile(s):
  - `screenshots/cex-shoups-product-bound-does-not-determine-mertens-constant--01.png` — SHA-256 `984770dd0944a6b6661761791b9fad877afe7f4e589017ef68d79ec4ed35306b`
- Suggested repair: Use inline math for the expression, e.g. “A $\Theta(1/\log x)$ product bound does not determine the Mertens constant.”

### 2. `lem-harmonic-sum-asymptotic` — Title
- Snapshot: `snapshots/lem-harmonic-sum-asymptotic.md` lines 4.
- Symptom: The title displays “log x plus gamma plus O(1/x)” as ordinary text; the title’s main mathematical expression is not typeset.
- Classification: `literal-ASCII-mathematical-notation`.
- Screenshot tile(s):
  - `screenshots/lem-harmonic-sum-asymptotic--01.png` — SHA-256 `db4d0d123d27592a8a2f04d1c3fabc184b5c84ac36cde6d5b3d3c5b32c8bff4c`
- Suggested repair: Set the formula in inline math, e.g. “The harmonic sum is $\log x+\gamma+O(1/x)$.”

### 3. `cor-p-adic-field-is-locally-compact-and-totally-disconnected` — Title
- Snapshot: `snapshots/cor-p-adic-field-is-locally-compact-and-totally-disconnected.md` lines 4.
- Symptom: The title renders “Q_p” literally rather than as the p-adic field symbol.
- Classification: `literal-ASCII-mathematical-notation`.
- Screenshot tile(s):
  - `screenshots/cor-p-adic-field-is-locally-compact-and-totally-disconnected--01.png` — SHA-256 `0fd46375b8770835be89edc5a0ee94fb37a28e43eb57802ea8fcb0aa4770efb2`
- Suggested repair: Use inline math, “$\mathbb Q_p$ is locally compact and totally disconnected.”

### 4. `thm-p-adic-completion-agrees-with-the-fraction-field-of-zp` — Title
- Snapshot: `snapshots/thm-p-adic-completion-agrees-with-the-fraction-field-of-zp.md` lines 4.
- Symptom: The title renders “Z_p” literally in “fraction field of Z_p” rather than typesetting the ring of p-adic integers.
- Classification: `literal-ASCII-mathematical-notation`.
- Screenshot tile(s):
  - `screenshots/thm-p-adic-completion-agrees-with-the-fraction-field-of-zp--01.png` — SHA-256 `b71922b43e5971e00ec20bb79e0262adacf1b0ac8361a6fbe306d4d7a4372611`
- Suggested repair: Typeset the notation in the title, e.g. “The p-adic completion agrees with the fraction field of $\mathbb Z_p$.”

### 5. `thm-logarithmic-unit-image-is-a-full-lattice` — Proof technique
- Snapshot: `snapshots/thm-logarithmic-unit-image-is-a-full-lattice.md` lines 108.
- Symptom: The proof-technique sentence is shown in uppercase with literal dollar delimiters around z and t_c (for example “$Z$” and “$T_C$”), while surrounding body math is typeset.
- Classification: `raw-TeX-delimiters-in-plain-text-field`.
- Screenshot tile(s):
  - `screenshots/thm-logarithmic-unit-image-is-a-full-lattice--03.png` — SHA-256 `ec66586d0b2695ebc02b31bcf39819b32d31ceac0709578b08b6c28dc1f7a1a2`
- Suggested repair: Render the proof-technique value through the Markdown/KaTeX path, or remove math delimiters and express the variables as plain words; preserve the full sentence and its mathematical meaning.

### 6. `thm-small-element-in-a-number-field-ideal` — Proof / remarks boundary
- Snapshot: `snapshots/thm-small-element-in-a-number-field-ideal.md` lines 91.
- Symptom: The source appends “## Remarks” to the end of proof step 5.1 on the same line; the screenshot displays the literal heading marker after the proof-ending metadata.
- Classification: `raw-Markdown-heading-marker`.
- Screenshot tile(s):
  - `screenshots/thm-small-element-in-a-number-field-ideal--02.png` — SHA-256 `2cd239ce3b894376b1ca6fef55650dae5e0bc215d9bef144a76eb203479e1751`
- Suggested repair: End the proof step after “∎”, then put “## Remarks” on its own line with a blank line before it.

## Diagram review

No existing TikZ/rendered diagrams occur in this lane. The reciprocity table and character-value listing were checked for completeness and legibility; they are tables, not diagram candidates.

One optional, uncertain diagram candidate is recorded for `lem-full-lattice-fundamental-domain-and-bounded-points`: a 2D half-open fundamental parallelogram and several lattice translates, with a bounded set showing finite intersection. The report JSON gives the exact construction and boundary checks. This would be an editorial aid only; the prose proof is self-contained.

## Coverage and evidence

The exact 76-item / 115-tile coverage, snapshot hashes, receipt paths, per-tile hashes, and individual original-resolution viewing attestations are in [`lane-06.json`](lane-06.json). All receipt hashes matched the local PNG bytes. No production files, items, app state, or publication metadata were changed; no tests, builds, or gates were run.

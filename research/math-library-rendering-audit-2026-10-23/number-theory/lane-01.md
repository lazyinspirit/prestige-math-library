# Number Theory rendering audit — lane 01

Reviewed all 76 assigned item titles and complete ItemBody snapshots, along with all 118 receipt-listed PNG tiles. Every tile was opened individually with `tools.view_image` at original resolution; no downscaled images or collages were used. All tile file hashes match their receipt hashes. The JSON report contains the exhaustive item and tile inventory, per-tile hashes, and individual viewing attestations.

## Findings

### RND-01 — Real quadratic units and Pell's equation

- **Source:** `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-real-quadratic-units-and-pell.md:98` (Proof technique)
- **Symptom:** The rendered technique label exposes inline math delimiters and a TeX command as literal text (visible as “NORM $PM1$”/raw markup in the technique banner), unlike the surrounding typeset mathematics.
- **Classification:** rendering defect: raw TeX in plain-text technique label
- **Screenshot evidence:**
  - `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-real-quadratic-units-and-pell--02.png` — SHA-256 `53fa94e7d631c2b3d957c1f4b4325ca8e33ac1939a85168adbc6be8f2cfaaefa`
  - `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-real-quadratic-units-and-pell--03.png` — SHA-256 `5dc3501e09703e16ae36e532cd6dc23b9d8da59363b561e56b60a2b955ace11a`
- **Suggested repair:** Rewrite the technique label without math delimiters and TeX commands (for example, “norm plus or minus one” and “epsilon_d = u_d squared”), or render the label through the math-aware Markdown path.

### RND-02 — S-units of Q

- **Source:** `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/ex-s-units-of-q.md:94` (Proof technique)
- **Symptom:** The technique banner displays raw inline/display delimiters and TeX command text for Q and S-unit; this is visible as “$\MATHBB Q$”/“$$S$-UNIT” rather than formatted notation.
- **Classification:** rendering defect: raw TeX in plain-text technique label
- **Screenshot evidence:**
  - `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-s-units-of-q--03.png` — SHA-256 `c21105d7ad093ffb63e4273b41128b8881c59e0cdd647090ad9dab343adb4e4d`
  - `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/ex-s-units-of-q--04.png` — SHA-256 `210df9c1cc878efd369aecf3f15252f68bc2994e3375a0e33327ad65792737ae`
- **Suggested repair:** Use plain-text “Q” and “S-unit theorem” in this label, or render the label through the math-aware Markdown path; avoid nested/doubled dollar delimiters.

### RND-03 — Finitely many roots of unity in a number field

- **Source:** `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/lem-roots-of-unity-in-a-number-field-are-finite.md:82` (Proof technique)
- **Symptom:** The technique banner leaves inline math delimiters around K, n, and 1 as literal dollar signs instead of typesetting them.
- **Classification:** rendering defect: raw TeX in plain-text technique label
- **Screenshot evidence:**
  - `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/lem-roots-of-unity-in-a-number-field-are-finite--02.png` — SHA-256 `0d39a7e58c6f57f6712d39bc776722499429124ac4a8310515b5d0ca41a6322f`
- **Suggested repair:** Replace the math-wrapped variables with plain text (“K”, “n”, “1”), or route the technique label through the math-aware Markdown renderer.

### RND-04 — The regulator is well defined

- **Source:** `research/math-library-rendering-audit-2026-10-23/number-theory/snapshots/thm-number-field-regulator-is-well-defined.md:73` (Proof technique)
- **Symptom:** The technique banner exposes raw inline math delimiters and TeX macros for r and plus/minus one (e.g. “rank-$R$” and “$PM1$”) instead of rendering the notation.
- **Classification:** rendering defect: raw TeX in plain-text technique label
- **Screenshot evidence:**
  - `research/math-library-rendering-audit-2026-10-23/number-theory/screenshots/thm-number-field-regulator-is-well-defined--02.png` — SHA-256 `fdf690b49cc04befc1e84669d2eb115a8a9cdcf7eba4aabb0a9a8957f11609ad`
- **Suggested repair:** Use plain text (“rank r”, “plus or minus one”) in the technique label, or render the label through the math-aware Markdown path.

## Diagram review

No TikZ diagrams occur in the assigned receipts (76 receipts report `tikz_count: 0`; none reports diagram failures). The Chinese remainder example includes a complete table rather than a diagram; its twelve residue pairs were checked against the map and are correct. No additional missing-diagram candidate is source-supported strongly enough to recommend.

## Coverage and evidence

The complete 76-item, 118-tile coverage list, item snapshot hashes, receipt metrics, exact tile paths and hashes, and per-tile original-resolution viewing attestations are in [`lane-01.json`](lane-01.json).

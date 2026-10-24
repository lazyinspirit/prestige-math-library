# Number Theory rendering audit — lane 10

Reviewed all 75 assigned complete ItemBodies from their immutable source snapshots and rendered HTML, plus all 107 receipt-listed PNG tiles individually using original-resolution image viewing.

Source snapshot mismatches: 0; tile hash mismatches: 0. Receipts report no KaTeX errors, no TikZ diagrams, and no diagram failures.

## Findings

### 1. `cor-average-order-of-divisor-sum-function` — title-ascii-mathematics

- **Section and source lines:** title, lines 4 of the assigned snapshot.
- **Symptom:** The title says “(pi squared over 6)n” as literal prose/ASCII formula; it is not typeset like the same value in the statement and proof.
- **Suggested repair:** Set the formula in the title with math delimiters, e.g. $(\pi^2/6)n$, or use a prose title that avoids formula notation.
- **Screenshot evidence:**
  - `screenshots/cor-average-order-of-divisor-sum-function--01.png` — SHA-256 `2b94b0f4f0a2ccebf66726b8e2ee410167047e263296bea844622a3acad3a520`

### 2. `ex-prime-counting-theta-and-psi-table` — title-ascii-mathematics

- **Section and source lines:** title, lines 4 of the assigned snapshot.
- **Symptom:** The title displays “pi(x), theta(x), and psi(x)” as literal ASCII function names while the body typesets these symbols.
- **Suggested repair:** Typeset the functions in the title, e.g. $\pi(x)$, $\theta(x)$, and $\psi(x)$.
- **Screenshot evidence:**
  - `screenshots/ex-prime-counting-theta-and-psi-table--01.png` — SHA-256 `bb4b4d07eff7d37c14b9d021391caa44fe38644d60f221bf43494a3c16a0ae1f`

### 3. `ex-quadratic-subfield-of-q-zeta-seven` — title-ascii-mathematics

- **Section and source lines:** title, lines 4 of the assigned snapshot.
- **Symptom:** The title displays “Q(zeta_7)” literally instead of the number field notation rendered in the body.
- **Suggested repair:** Typeset the field as $\mathbb{Q}(\zeta_7)$.
- **Screenshot evidence:**
  - `screenshots/ex-quadratic-subfield-of-q-zeta-seven--01.png` — SHA-256 `0d9b857be582ffecffd90ae248cd03d68295f31a4d1465b3bccce69b09e12761`

### 4. `ex-ring-of-integers-of-q-sqrt-five` — title-ascii-mathematics

- **Section and source lines:** title, lines 4 of the assigned snapshot.
- **Symptom:** The title displays “Q(sqrt 5)” literally while the body uses a typeset quadratic field expression.
- **Suggested repair:** Typeset the field as $\mathbb{Q}(\sqrt{5})$.
- **Screenshot evidence:**
  - `screenshots/ex-ring-of-integers-of-q-sqrt-five--01.png` — SHA-256 `ca984724f5188c608c66a76a22d3581809274c0f45b1322b255099e051f54514`

### 5. `lem-weighted-von-mangoldt-harmonic-estimate` — title-ascii-mathematics

- **Section and source lines:** title, lines 4 of the assigned snapshot.
- **Symptom:** The title writes “log x plus O(1)” in literal ASCII words, unlike the typeset asymptotic formula in the statement.
- **Suggested repair:** Typeset the asymptotic phrase, e.g. $\log x+O(1)$, or recast the title in non-formula prose.
- **Screenshot evidence:**
  - `screenshots/lem-weighted-von-mangoldt-harmonic-estimate--01.png` — SHA-256 `3353b1fc10876ac575c8cf85a4115d4df4f21de0cf12321565cdd0633e1a830e`

## Reviewed observation excluded by renderer intent

`ex-von-mangoldt-divisor-sum`, verification lines 44, 46: Inline item references render as full-width block links, so “By” and the linked title occupy separate lines. Root confirmed this is intentional MathMarkdown behavior; the observed line break is therefore not a rendering defect. Rejected as a defect under the renderer-scope decision; retained as a reviewed observation only.

Screenshot evidence:
- `screenshots/ex-von-mangoldt-divisor-sum--01.png` — SHA-256 `e95fc385c08279cb44d1c6411820cd345345513e7fa32ef43964fc903282018e`
- `screenshots/def-prime--01.png` — SHA-256 `aee26d6649d3ab8abbd7f0e7e080a3bfa15a3794cd1f22eb352d06227f5a04b3`

## Diagrams

No diagram was missing or defective in a way that calls for an editorial candidate. The content states its maps, relations, signs, and algebraic constructions directly; no source-supported visual would add necessary information. No gratuitous diagram is recommended.

The JSON file records the exact 75-item and 107-tile coverage, receipt values, per-file hashes, and the individual original-resolution viewing attestation for every tile.

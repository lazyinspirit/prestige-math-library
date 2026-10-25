## Symmetric Groups and Symmetric Functions

Completed visual review of **321 items across 32 pages**, with **717 image tiles**. Findings: 2 confirmed, 2 uncertain, 2 typography. Evidence: [manifest](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/category-review-receipt.json).

### Confirmed rendering defects

#### symmetric-groups-and-symmetric-functions / confirmed 001: `cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric`

- Location: **title**; source lines 4.
- Pages: `kronecker-coefficients-and-internal-products`.
- Visible defect: The title displays S_3 with a literal underscore rather than a typeset subscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/screenshots/cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric--01.png); [frozen source](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/snapshots/cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric.md).

Exact frozen source lines:

```text
4: title: Kronecker coefficients are nonnegative integers with full S_3 and conjugation symmetries
```

#### symmetric-groups-and-symmetric-functions / confirmed 002: `ex-kronecker-products-for-s3`

- Location: **title**; source lines 4.
- Pages: `kronecker-coefficients-and-internal-products-examples`.
- Visible defect: The title displays S_3 with a literal underscore rather than a typeset subscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/screenshots/ex-kronecker-products-for-s3--01.png), [tile 02](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/screenshots/ex-kronecker-products-for-s3--02.png), [tile 03](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/screenshots/ex-kronecker-products-for-s3--03.png); [frozen source](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/snapshots/ex-kronecker-products-for-s3.md).

Exact frozen source lines:

```text
4: title: The complete internal product table for S_3
```

### Optional typography

#### symmetric-groups-and-symmetric-functions / typography 001: `ex-s5-character-table-by-fixed-tabloid-reconstruction`

- Location: **Item body**; source lines 4.
- Pages: `rim-hooks-and-the-murnaghan-nakayama-rule-examples`.
- Visible defect: Title uses literal S_5 notation rather than a typeset subscript; the matrices and formulas in the body are rendered as math.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/screenshots/ex-s5-character-table-by-fixed-tabloid-reconstruction--01.png); [frozen source](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/snapshots/ex-s5-character-table-by-fixed-tabloid-reconstruction.md).

Exact frozen source lines:

```text
4: title: "The S_5 character table by fixed-tabloid reconstruction"
```

#### symmetric-groups-and-symmetric-functions / typography 002: `ex-three-core-and-three-quotient-by-abacus`

- Location: **Item body**; source lines 4.
- Pages: `cores-quotients-and-blocks-of-symmetric-groups-examples`.
- Visible defect: Title uses literal 1^3 notation in the partition; formulas in the body are rendered as math.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/screenshots/ex-three-core-and-three-quotient-by-abacus--01.png); [frozen source](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/snapshots/ex-three-core-and-three-quotient-by-abacus.md).

Exact frozen source lines:

```text
4: title: "The three-core and three-quotient of (6,5,2,1^3) by abacus"
```

### Uncertain observations

#### symmetric-groups-and-symmetric-functions / uncertain 001: `ex-the-s4-character-table-by-rim-hook-recursion`

- Location: **Item body**; source lines 4.
- Pages: `rim-hooks-and-the-murnaghan-nakayama-rule-examples`.
- Visible defect: The item heading in the local rendered HTML/screenshot displays the underscore literally as “S_4”; the body uses math delimiters and renders S_4 with a subscript.
- Future repair: Write the title as "The $S_4$ character table by rim-hook recursion" so the heading matches the mathematical notation used in the body.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/screenshots/ex-the-s4-character-table-by-rim-hook-recursion--01.png), [tile 02](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/screenshots/ex-the-s4-character-table-by-rim-hook-recursion--02.png), [tile 03](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/screenshots/ex-the-s4-character-table-by-rim-hook-recursion--03.png); [frozen source](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/snapshots/ex-the-s4-character-table-by-rim-hook-recursion.md).

Exact frozen source lines:

```text
4: title: "The S_4 character table by rim-hook recursion"
```

#### symmetric-groups-and-symmetric-functions / uncertain 002: `ex-rsk-shapes-of-all-six-permutations-in-s3`

- Location: **Example**; source lines 27, 28, 45.
- Pages: `plancherel-measure-and-asymptotic-young-diagrams-examples`.
- Visible defect: The example is specifically a worked Robinson–Schensted insertion computation, but the complete body contains no tableau drawing. The insertion/recording tableaux are central objects and the current row-list prose makes the six outcomes harder to compare.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/screenshots/ex-rsk-shapes-of-all-six-permutations-in-s3--01.png), [tile 02](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/screenshots/ex-rsk-shapes-of-all-six-permutations-in-s3--02.png); [frozen source](math-library-rendering-audit-2026-10-23/symmetric-groups-and-symmetric-functions/snapshots/ex-rsk-shapes-of-all-six-permutations-in-s3.md).

Exact frozen source lines:

```text
27: Running Robinson-Schensted row insertion on the six permutations of $\{1,2,3\}$ gives
28: $$123\mapsto(3),\quad 132\mapsto(2,1),\quad 213\mapsto(2,1),\quad 231\mapsto(2,1),\quad 312\mapsto(2,1),\quad 321\mapsto(1^3);$$
45: 1.1 Explicit insertions: applying [F1] to each word, one letter at a time, gives the following tableaux (written as the list of their rows): $123\rightsquigarrow((1,2,3))$, shape $(3)$; $132$: $(1)$, then $(1,3)$, then $2$ bumps the $3$, giving rows $(1,2)$ and $(3)$, shape $(2,1)$; $213$: $(2)$, then $1$ bumps $2$ giving rows $(1)$ and $(2)$, then $3$ is appended in the first row, shape $(2,1)$; $231$: $(2)$, then $(2,3)$, then $1$ bumps $2$, giving rows $(1,3)$ and $(2)$, shape $(2,1)$; $312$: $(3)$, then $1$ bumps $3$ giving rows $(1)$ and $(3)$, then $2$ is appended in the first row, shape $(2,1)$; $321$: $(3)$, then $2$ bumps $3$, giving rows $(2)$ and $(3)$, then $1$ bumps $2$ and the expelled $2$ bumps $3$, giving rows $(1)$, $(2)$, $(3)$, shape $(1^3)$. Each bumping step is the deterministic rule of [F1] applied to the displayed entries. [given, F1]
```


# subjects-02 reconciliation application report

Applied 2026-08-14 from `subjects-02-RULINGS.md`, using the evidence in
`subjects-02-RECONCILIATION.md` and the ownership table in
`subjects-02-SEAMS.md` §4. No blocker or authority expansion was needed.

## Application accounting

“Rows” below means proposed-item inventory rows, including `fs-` rows and B-page
leaves. A rewritten row is counted once when its statement, ordinal, or pair
label changed; prose-only edits are not counted as row rewrites. “Citation
targets” counts distinct owning page/interface labels, not repeated textual
occurrences.

| file | rows removed | rows rewritten or relabelled | citation targets repointed | applied result |
|---|---:|---:|---:|---|
| `plan-functional-analysis-track.md` | **7** | **11** | **3** — T-10, FR-1, FR-2 | S-1 rows were removed. FA-14 now proves trigonometric density through the complex self-adjoint Stone–Weierstrass theorem, explicitly checking that the character algebra contains $1$, is self-adjoint, and separates points; $L^2$ completeness then uses MT-15. |
| `plan-fourier-analysis-track.md` | **0** | **1** | **3** — PDE-11, PDE-14, future PDE Strichartz interface | S-1/S-2 ownership receipts were updated; the anchor is now PT-22's final companion; the Sobolev and Strichartz references are declared forward references. The one rewritten row is FR-13's S-5 non-load-bearing Strichartz leaf. |
| `plan-pde-track.md` | **8** | **7** | **1** — FR-8 | PDE-19 retains its Schauder and elliptic $W^{2,p}$ content, verifies the Newtonian-Hessian kernel, and applies FR-8's generic Calderón–Zygmund theorem. Only the eight generic harmonic-analysis rows were removed. |
| `plan-differential-geometry-track.md` | **39** | **62** | **7** — AT-2, AT-3, AT-6, AT-7, AT-8, RL-2, RL-7 | S-4 removed 25 ordinary singular-chain/cochain proposals while retaining smooth singular comparison, de Rham, wedge/cup compatibility, and degree agreement. S-3 removed 14 Verma/character proposals while retaining the direct finite-dimensional highest-weight classification. |
| `plan-representation-theory-lie-track.md` | **0** | **0** | **0** | An S-3 receipt records RL as the sole proposed home for the 14 ids. S-5 notes make RL-9's geometry-dependent Borel–Weil–Bott rows and RL-10's localisation-dependent Duflo rows sourced, non-load-bearing, and `proved_here: false` at build. |
| `plan-representation-theory-groups-track.md` | **0** | **38** | **2** — RG-28, RG-29 | S-6 relabelled/moved all 36 rows on the two swapped pairs, and rewrote the RG-27 supplier pointer and RG-30 principal-series pointer. RG-28 is now the principal/complementary-series supplier and RG-29 the property-(T) consumer. RG-26 also has the S-5 disintegration note. |
| `plan-differential-topology-track.md` | **0** | **0** | **0** | DT-24 now records the missing simple-homotopy/Whitehead-group supplier with non-load-bearing `proved_here: false` discipline. DT-32's $\Theta_7$ order theorem was already written as a sourced, non-load-bearing `not-supplied` result, so its inventory was unchanged. |
| `plan-algebraic-varieties-track.md` | **0** | **0** | **0** | Inspected as one of the six subjects-02 tracks; no S-5 ruling applies and no edit was needed. |
| `plan-algebraic-topology-track.md` | **0** | **0** | **0** | Inspected as one of the six subjects-02 tracks; no missing S-5 note required an edit. It remains the owner of all 25 S-4 ids. |

DG's **62** rewritten rows break down as DG-16 **34**, DG-17 **7**, and
DG-32 **21**. RG's **38** break down as **36** rows reassigned by the pair swap
plus **2** adjacent consumer/supplier-pointer rewrites.

## Duplicate and inventory verification

| settled group | duplicate proposals before | duplicate proposals after |
|---|---:|---:|
| AT–DG | **25** | **0** |
| RL–DG | **14** | **0** |
| FR–FA | **7** | **0** |
| FR–PDE | **8** | **0** |
| **total** | **54** | **0** |

The loser-side proposal-set diff contains exactly those 54 ids: FA 7, PDE 8,
and DG 39. Every removed id is still present in its ruled owner (AT 25, RL 14,
FR 15), and no proposal id was added in any edited scaffold. Therefore no id
was invented and no id that had only one proposing track was removed.

The resulting item totals are FA **729**, FR **299**, PDE **845**, DG **2,059**,
RL **321**, RG **544**, and DT **668**. Historical pre-reconciliation totals
remain labelled as historical in the affected enrichment reports.

## Structural verification

- Pair-heading ranges remain consecutive and unchanged: FA **25**, FR **18**,
  PDE **26**, DG **37**, RL **15**, RG **30**, and DT **32**.
- A-page declarations, B-page declarations, and Markdown table separators have
  the same per-file counts as before the application. Pair-key table rows also
  remain unchanged: FA **50**, FR **36**, PDE **56**, DG **52**, RL **45**, RG
  **60**, and DT **64**.
- The affected numbered inventories are consecutive after removal/reordering:
  FA-6 **14/5**, FA-14 **19/5**, PDE-19 **13/6**, DG-16 **23/7**, DG-17
  **36/12**, and DG-32 **24/12** A/B rows. RG pair headings run consecutively
  through RG-27, RG-28, RG-29, RG-30 in the new order.
- Source matrices, heading crosswalks, pair ledgers, and final inventory totals
  remain present. Their item sets have no additions, and their only deletions
  are the ruled duplicate rows listed above.
- `git diff --check` reports no whitespace errors. No normative document,
  `plan-spec.json`, `items/**`, or `library/**` was modified.


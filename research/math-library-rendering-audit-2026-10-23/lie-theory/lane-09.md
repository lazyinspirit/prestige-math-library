# Lie Theory visual audit — lane 09

## Scope and coverage

Audited all 107 assigned items against their frozen snapshots and local HTML captures. Viewed all 163 assigned screenshot tiles individually at original resolution. Checked titles, complete rendered item sections shown by the snapshots, inline math, references, and any diagram material. Exact item, source, HTML, and tile hashes are in [lane-09.json](lane-09.json).

## Findings

- **Confirmed raw title notation:** `ex-a-levi-decomposition-of-the-euclidean-motion-algebra` displays `R^3`; `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n` displays `sl_n`; and `thm-root-sl-two-triple` displays `sl_2`. Their exact source lines, screenshots, symptoms, and suggested repairs are recorded in the ledger.
- **Confirmed raw TeX in technique banner:** `lem-hom-from-projectives-counts-simple-composition-factors` shows the literal `$\\operatorname{Hom}(P(\\lambda),-)$` in its Proof technique banner. The banner casing is intended; the TeX source is visible.

## Diagram review

No authored TikZ/SVG diagram or existing diagram mathematics requiring correction was present in the assigned captures. The A2 Verma embedding example is a source-supported optional diagram candidate: its text defines the six Bruhat vertices and all eight covers. See the ledger for the exact relations and arrow direction to verify.

This report covers local preview artifacts only. No source items or application files were changed, and no production route or publication status was checked.

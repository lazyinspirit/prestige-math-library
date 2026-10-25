# PDE rendering audit — lane 08

Reviewed all 94 assigned titles and complete ItemBodies, and individually opened all 192 receipt-listed screenshot tiles at original resolution. All assignment source, frozen snapshot, local HTML, receipt and tile hashes match; source and snapshot bytes are identical for every item. The capture manifests report no KaTeX parser errors and no TikZ diagrams.

Confirmed rendering findings: 8.

- Six proof-technique banners display TeX source literally rather than typesetting inline notation: `cex-strong-continuity-does-not-imply-operator-norm-continuity` (line 60), `cor-resolvent-power-estimates-for-semigroup-generators` (line 58), `lem-fractional-level-set-kernel-measure-estimate` (line 53), `lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing` (line 64), `thm-morrey-rellich-compactness-for-p-greater-than-n` (line 63), and `thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain` (line 63). Exact tile paths and hashes are in [lane-08.json](lane-08.json).
- `rem-meyers-serrin-does-not-assert-density-for-p-infinity` uses un-delimited `W^{k,∞}` in the title (line 4), which renders literally.
- The linked title “If (Y) is Banach then \mathcal B(X,Y) is Banach” appears with literal TeX in `lem-contour-definition-of-an-analytic-semigroup` (source link line 81; linked title source line 4 in `thm-bounded-operator-space-is-banach.md`).

No clipping was confirmed. A read-only DOM check of all 94 local HTML previews at 1200×1400 found no root horizontal overflow and no horizontally scrollable overflow containers; the apparent right-edge line endings had no hidden scrollable remainder.

Diagram review found no existing diagrams in this lane. Optional source-supported candidates are listed in lane-08.json: the characteristic projection fold and two minimisers in `ex-hopf-lax-solution-with-a-forming-corner`, and the backward/forward spacetime cones in `def-forward-and-backward-wave-cones-domain-of-dependence-and-influence`. Their exact maps, sets, relations and line anchors are recorded there; these are pedagogical suggestions, not defects.

This review used frozen local material only. No live site or HTTP(S), tests, builds, gates, production files, app state, library item, or publication metadata were accessed or changed.

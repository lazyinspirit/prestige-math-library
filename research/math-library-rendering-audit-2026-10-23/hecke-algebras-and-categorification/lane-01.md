# Hecke Algebras and Categorification visual audit — lane 01

Reviewed all 23 assigned frozen item bodies and all 48 screenshot tiles individually at original resolution. Each frozen title and complete ItemBody was checked against its local HTML and screenshots, including references, formula typography, technique banners, clipping, TikZ and scratch-section presence.

All source hashes match `assignment-01.json`; each snapshot is byte-identical to its current source; all HTML hashes match the assignment; and all PNG hashes match their individual screenshot manifests. Every tile was opened separately with `tools.view_image` at original resolution. No `Scratch` section is present in these snapshots. Inline linked reference titles break some long sentences across lines but are the local rendering of the source wikilinks; I found no separate title leak. No technique banner contains raw mathematical notation.

## Confirmed rendering finding

1. **`lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree`** — Statement, source line 29; shorthand labels include `dotD(lambda)`, `J(lambda)`, `G0`, and `CP`. The statement and proof use ordinary text such as `D_crystal(lambda)`, `D_cell(lambda)`, `v -> v^{-1}`, and `[J(lambda):D_crystal(lambda)]_q`; the assigned screenshot manifest reports zero KaTeX expressions. The notation is legible but untypeset, with ASCII underscores/arrows obscuring the named objects. This is a source-authored formatting defect, not an HTML failure. Typeset the notation while preserving the intended CP abbreviation. Screenshot: `screenshots/lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree--01.png`.

No other confirmed raw-ASCII formula, literal markup, clipping, or rendering failure was found. Tiles that end mid-content overlap the following tile, which shows the continuation; no loss from the complete capture was confirmed.

## Optional diagram candidates

- **`def-klr-induction-and-restriction-bimodules`**, source lines 37–39 and 43. The definition explicitly calls the inclusion horizontal concatenation and defines Ind/Res through the idempotent corner. An optional two-part diagram could show the separated-block embedding into `e(beta,gamma)R(beta+gamma)e(beta,gamma)` and the corresponding induction left ideal and restriction projection. Check the `R(beta) tensor R(gamma)` image versus the full corner, idempotent placement, tensor sides and arrow directions. This is an editorial candidate; the current formulas are complete and no defect is confirmed. Screenshot: `screenshots/def-klr-induction-and-restriction-bimodules--01.png`.
- **`thm-klr-pbw-basis-theorem`**, source lines 50 and 52. The dot-slide correction identities and crossing-word reduction could be shown as an optional local wire-rewrite sketch, with equal-colour strands, dot/crossing indices, correction idempotents and signs checked against the equations. The proof is already complete algebraically; no missing-diagram error is confirmed. Screenshots: `screenshots/thm-klr-pbw-basis-theorem--01.png`, `screenshots/thm-klr-pbw-basis-theorem--02.png`.

## Existing TikZ diagram

The only assigned TikZ diagram is in **`ex-b2-unequal-parameter-kl-basis-and-cell-edges`** (source lines 38–50). Its Coxeter edge is labelled `m(s,t)=4`; its directed cell graph matches all four stated transitions and their left-multiplication labels. The rendered diagram is legible and unclipped; no TikZ failure or incorrect map/edge was found. This is coverage, not a defect candidate.

The JSON report records every assigned source, snapshot and HTML hash, each opened tile path/hash/dimensions, section coverage, capture diagnostics, the confirmed finding and optional diagram candidates. Review was limited to frozen local preview; no live website, renderer, tests/builds, item sources or publication status were accessed or changed.

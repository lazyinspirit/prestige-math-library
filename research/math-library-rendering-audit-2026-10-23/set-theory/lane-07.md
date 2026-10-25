# Set Theory rendering audit — lane 07

## Scope and coverage

Reviewed all 127 assigned titles and complete ItemBodies against frozen source snapshots and matching local captured HTML. Opened each of the 200 receipt-listed PNG tiles individually with `tools.view_image` at original resolution; no collage or downscaling was used. Source, snapshot, HTML, and tile hashes match their assignment or receipt manifests.

Two confirmed raw-notation rendering findings appear in the large-cardinal lane. There is no TikZ source or existing diagram to inspect. One high-likelihood optional commutative diagram candidate is recorded for the quotient universal property. Per-item and per-tile coverage, hashes, and view attestations are recorded in [lane-07.json](lane-07.json).

## Confirmed findings

### `def-lc-laver-anticipation-function` — Definition, snapshot lines 25 and 29

The prose leaves mathematical symbols as baseline text: “kappa”, “x”, “lambda>=kappa”, “j(ell)”, “j(kappa)”, and “Lambda=kappa”. The screenshot visibly shows the raw `lambda>=kappa` and `Lambda=kappa` forms beside properly typeset display equations. Put these variables and relation in math delimiters, preserving the prose. Evidence: `screenshots/def-lc-laver-anticipation-function--01.png`.

### `cor-lc-large-cardinal-implication-ledger` — Facts & Assumptions and Proof, snapshot lines 36 and 54

The prose renders “kappa” and “lambda>=kappa” literally in claims about fine measures, while the Statement typesets its variables. Put these expressions in math delimiters. Evidence: `screenshots/cor-lc-large-cardinal-implication-ledger--01.png` and `--02.png`.

## Diagram review

No existing TikZ/tikzcd source or rendered diagram occurs in the assigned items. The quotient universal-property item has a high-likelihood optional commutative-triangle diagram: `A --π--> A/~`, `A --f--> B`, and `A/~ --g--> B`, with `g∘π=f`; see snapshot lines 38–44. The diagram would summarize the factorization and uniqueness statement. No other missing diagram met the high-likelihood threshold.

## Limitations

These were local Chromium ItemBody previews, not live website routes. The review covered visible rendering and diagram opportunities, not full mathematical verification of every proof. No item, application, build, or publication files were modified.

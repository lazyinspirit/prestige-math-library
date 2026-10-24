# Probability rendering audit — lane 02

## Coverage

- Reviewed all 69 assigned frozen titles and complete ItemBodies against snapshots, local source files, and local HTML. The exact inventory and full snapshot line ranges are in [lane-02.json](lane-02.json).
- Opened all 101 receipt-listed PNG tiles individually with `tools.view_image(detail="original")`; no collage or downscaling. Every tile path, receipt hash, observed hash, capture offset, and view attestation is recorded in [lane-02.json](lane-02.json).
- All assigned source, snapshot, HTML, and screenshot hashes match their assignment or receipt. Receipts report zero KaTeX errors, TikZ diagrams, or diagram failures. No standalone clipping or horizontal overflow defect was confirmed.

## Confirmed rendering finding

- **Unformatted mathematical notation in prose:** [lem-normal-density-has-total-mass-one, source line 68](../../../items/lem-normal-density-has-total-mass-one.md:68). In proof step 2.1, `f(t)=exp(-t^2)` is written without math delimiters and appears in the text face while the surrounding expressions are typeset. The expression is plain prose in the source, so this is a notation formatting issue rather than a KaTeX parser error. See [tile 01](screenshots/lem-normal-density-has-total-mass-one--01.png); SHA-256 `5d393c083b809fb0fb3441f949f9a8d3f04d80ceea96d57d34dfa5f2f4abbece`.

No broken LaTeX, raw TeX commands, or rendered diagram defect was confirmed elsewhere in the lane.

## Diagram review

- No existing TikZ diagrams are present: every assigned receipt reports `tikz_count: 0` and `diagram_failures: 0`. The JSON records a diagram check for each assigned item.
- One uncertain optional candidate is recorded for [ex-gamblers-ruin-hitting-probabilities-from-harmonicity, source lines 47–54](../../../items/ex-gamblers-ruin-hitting-probabilities-from-harmonicity.md:47): a finite-state path graph with absorbing endpoint loops and harmonic values `i/N`. Its content and checks are specified in the JSON. The claim and proof are already complete; the diagram would only make the state transitions and boundary values easier to scan.

This review covers assigned local rendering evidence only. No production item, application file, publication/status metadata, or native state was edited; no tests, builds, gates, commits, pushes, or network calls were made. Only `lane-02.md` and `lane-02.json` were written.

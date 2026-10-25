# Lane 05 visual review

Reviewed 26 assigned items and 64 revision-2 screenshot tiles. All listed tiles matched the corresponding revision-2 sidecars; every assigned item reported `tikz_count: 0` and no diagram failures.

## Findings

1. **ex-hard-lefschetz-and-hodge-riemann-relations-for-the-coinvariant-algebra-of-s-three — Title (snapshot line 4).** The title displays the subgroup as literal `S_3`, unlike the math-rendered occurrences in the body. Classification: `confirmed`. Suggested repair: Use `S₃` in the plain-text title, or otherwise format the title so the subgroup notation is typeset.
2. **ex-parabolic-kl-polynomials-for-s-three-modulo-s-two — Title (snapshot line 4).** The title displays both subgroup indices as literal underscores (`S_3`, `S_2`), while body occurrences are typeset. Classification: `confirmed`. Suggested repair: Use `S₃` and `S₂` in the plain-text title, or otherwise format the title so the subgroup notation is typeset.
3. **lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize — Proof, step 4.1 (snapshot line 87).** Backslashes are missing throughout this paragraph’s TeX, so command names and relations render as ordinary italic text (for example `operatorname`, `mathfraksl`, and `mathrmGL`) rather than mathematical notation. Classification: `confirmed`. Suggested repair: Restore the TeX command backslashes in step 4.1 (including `\operatorname`, `\to`, `\otimes`, `\ge`, `\cdot`, `\mathfrak`, `\mathrm`, `\exp`, and `\mathbb`) and re-render the equations.
4. **thm-lifting-of-indecomposable-projectives-to-the-deformed-family — Proof technique (snapshot line 87).** The proof-technique label displays the inline-math delimiters `$R$` literally in the all-caps technique line. Classification: `confirmed`. Suggested repair: Avoid math delimiters in the plain-text proof-technique field; write `R` or use a renderer-supported inline math form there.

Coverage and exact evidence are recorded in `lane-05.json`.

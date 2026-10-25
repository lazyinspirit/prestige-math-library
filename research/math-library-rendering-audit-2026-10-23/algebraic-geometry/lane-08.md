# Algebraic Geometry rendering audit — lane 08

Reviewed all 111 assigned items and all 230 revision-2 screenshot tiles, opening every tile individually at original resolution. The complete rendered item bodies, titles, facts, proofs, remarks, source sections, and internal-reference regions were compared with the frozen snapshots. No TikZ diagrams were listed for this lane.

Confirmed findings recorded: 20.

- **cex-nilpotent-polynomial-data-invisible-to-zero-locus** — confirmed: The rendered title shows the caret in “x^2” literally rather than as a superscript. (snapshot lines 4).
- **cex-regular-bijection-not-isomorphism-cusp** — confirmed: The rendered title shows “mapsto” and the caret exponents literally. (snapshot lines 4).
- **def-algebraic-cycle-and-cycle-group** — confirmed: The rendered title begins “lgebraic cycles”; the initial “A” in the frozen title is missing. (snapshot lines 4).
- **def-split-augmented-simplicial-objects-and-matching-objects** — confirmed: The rendered title begins “plit augmented”; the initial “S” in the frozen title is missing. (snapshot lines 4).
- **lem-nonaffine-group-monomorphism-closed-immersion** — confirmed: The rendered title begins “inite-type”; the initial “F” in the frozen title is missing. (snapshot lines 4).
- **cor-degree-additive-proper-curve** — confirmed: The proof-technique line displays inline math delimiters and LaTeX commands literally. (snapshot lines 109).
- **lem-arith-mumford-map-degree-is-euler-characteristic-square** — confirmed: The proof-technique line displays inline math delimiters and LaTeX commands literally. (snapshot lines 72).
- **thm-hodge-index-theorem-for-smooth-projective-surfaces** — confirmed: The proof-technique line displays inline math delimiters and LaTeX commands literally. (snapshot lines 67).
- **lem-complete-normal-surface-regular-resolution-converts-to-normalized-point-blowups** — confirmed: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose. (snapshot lines 50, 52).
- **lem-degree-p-inseparable-differential-trace-extends-on-normal-surfaces** — confirmed: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose. (snapshot lines 41, 43).
- **lem-normal-surface-fibre-divisor-conormal-degree-positive** — confirmed: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose. (snapshot lines 43, 45).
- **lem-normalized-point-blowups-dominate-local-normal-surface-modifications** — confirmed: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose. (snapshot lines 42, 44).
- **lem-projective-normal-surface-modification-h1-injects-off-special-fibre** — confirmed: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose. (snapshot lines 45, 47).
- **lem-proper-surface-regularity-transfers-to-and-from-completion** — confirmed: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose. (snapshot lines 41, 43).
- **lem-rational-singular-point-blowup-canonical-pullback-surjective** — confirmed: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose. (snapshot lines 39, 41).
- **lem-surface-p-basis-subfield-separation** — confirmed: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose. (snapshot lines 38, 40).
- **thm-negativity-for-exceptional-curves-on-smooth-surfaces** — confirmed: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose. (snapshot lines 58, 60).
- **thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups** — confirmed: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose. (snapshot lines 44, 46).
- **thm-resolution-of-normal-surface-singularities** — confirmed: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose. (snapshot lines 69, 71).
- **lem-smoothness-stable-under-product-classical** — confirmed: The rendered proof ends with the literal Markdown marker “## Source qualification” appended to the final proof paragraph. (snapshot lines 129).

Coverage and exact screenshot paths are in `lane-08.json`.

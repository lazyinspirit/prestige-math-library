# Algebraic Geometry rendering audit — lane 02

Reviewed all 111 assigned items and all 239 revision-2 screenshot tiles at original resolution. Each rendered item was checked from title through its final section, including proof/facts/remarks, internal reference titles, and TikZ when present. Screenshot paths below are the exact paths listed by the capture manifests.

## Findings

1. **ex-rational-parametrization-circle-conic** — Title (snapshot line 4, confirmed). The title renders x^2 and y^2 with literal carets instead of superscripted exponents. Repair: Render the title formula with math markup or spell the equation in plain text. Screenshot: `screenshots/ex-rational-parametrization-circle-conic--01.png`.
2. **lem-central-ga-subgroup-of-smooth-connected-unipotent-group** — Title (snapshot line 4, confirmed). The title renders G_a with a literal underscore instead of a subscript. Repair: Render G_a as inline math in the title, or write “the additive group” in plain text. Screenshot: `screenshots/lem-central-ga-subgroup-of-smooth-connected-unipotent-group--01.png`.
3. **thm-affine-variety-product-coordinate-ring** — Title (snapshot line 4, confirmed). The title renders k[X], k[Y], and tensor_k as plain text with a literal underscore. Repair: Render the coordinate-ring formula with math markup in the title. Screenshot: `screenshots/thm-affine-variety-product-coordinate-ring--01.png`.
4. **thm-unipotent-group-triangular-criterion** — Title (snapshot line 4, confirmed). The title renders U_n with a literal underscore instead of a subscript. Repair: Render U_n as inline math in the title, or spell out the upper unitriangular group in plain text. Screenshot: `screenshots/thm-unipotent-group-triangular-criterion--01.png`.
5. **lem-arith-coherent-kunneth-and-proper-image-dual** — Proof technique (snapshot line 70, confirmed). The rendered proof-technique label exposes literal dollar delimiters around H^1 and the phi subscript formula. Repair: Use renderer-supported math delimiters for the proof-technique field, or replace the formulas with plain words. Screenshot: `screenshots/lem-arith-coherent-kunneth-and-proper-image-dual--01.png`.
6. **lem-arith-prime-to-characteristic-multiplication-etale** — Proof technique (snapshot line 47, confirmed). The rendered proof-technique label exposes literal dollar delimiters around n. Repair: Remove the dollar delimiters or use math markup supported in the proof-technique field. Screenshot: `screenshots/lem-arith-prime-to-characteristic-multiplication-etale--01.png`.
7. **thm-affine-variety-product-coordinate-ring** — Proof (snapshot line 38, typography). The proof displays backticked machine identifiers for three cited items instead of readable reference titles. Repair: Replace the inline item slugs with linked references using their display titles. Screenshot: `screenshots/thm-affine-variety-product-coordinate-ring--01.png`.

## Coverage

The JSON coverage rows match the assignment IDs and preserve every listed tile path. Items without a row in Findings were recorded as clean.

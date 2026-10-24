# Braid Groups rendering audit — lane 05

Reviewed all 45 assigned items and all 100 listed revision-2 screenshot tiles at original resolution. I checked each title and full rendered body, including every section, proof/facts/remarks, internal reference titles, and TikZ where present. No assigned item contained TikZ. The lane has 41 clean items and 4 items with confirmed findings.

## Findings

1. **def-khovanov-seidel-bigraded-cover-and-bigraded-curves** — Title (snapshot line 4, confirmed). The rendered title shows the caret in “Z^2” literally instead of typesetting the exponent. Repair: Typeset the title formula as $Z^2$ or rewrite it as “Z-squared”. Screenshot(s): `screenshots/def-khovanov-seidel-bigraded-cover-and-bigraded-curves--01.png`, `screenshots/def-khovanov-seidel-bigraded-cover-and-bigraded-curves--02.png`.
2. **thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n** — Title (snapshot line 4, confirmed). The rendered title shows “Aut(F_n)” literally, including the underscore, instead of typesetting the formula. Repair: Typeset the title expression as $\operatorname{Aut}(F_n)$ or rewrite it in words. Screenshot(s): `screenshots/thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n--01.png`, `screenshots/thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n--02.png`.
3. **thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations** — Title (snapshot line 4, confirmed). The rendered title shows “U_i” literally, including the underscore, instead of typesetting the subscript. Repair: Typeset the title symbol as $U_i$ or rewrite it in words. Screenshot(s): `screenshots/thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations--01.png`, `screenshots/thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations--02.png`, `screenshots/thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations--03.png`.
4. **thm-standard-pure-braids-generate-the-pure-braid-group** — Proof technique (snapshot line 65, confirmed). The proof-technique label displays the dollar delimiters around n literally instead of typesetting the math. Repair: Rewrite as “induction on the strand count” or render the formula in the proof-technique field. Screenshot(s): `screenshots/thm-standard-pure-braids-generate-the-pure-braid-group--01.png`, `screenshots/thm-standard-pure-braids-generate-the-pure-braid-group--02.png`, `screenshots/thm-standard-pure-braids-generate-the-pure-braid-group--03.png`.

## Coverage

The JSON coverage rows match all 45 assignment IDs. Each row records every listed screenshot tile actually viewed; all 100 tiles were opened at original resolution.

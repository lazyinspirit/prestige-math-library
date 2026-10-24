# Braid Groups rendering audit — lane 02

Reviewed all 45 assigned items against their frozen snapshots and every listed revision-2 PNG, each opened at original resolution. Complete titles and item bodies were reviewed, including all displayed sections, proofs/facts/remarks/scratch where present, internal references, and TikZ where listed. No TikZ tiles were listed for this assignment.

## Findings

### `ex-the-artin-action-of-the-b-three-generators`

- **Section and frozen line:** Title, line 4.
- **Symptom:** The rendered heading displays B_3 with a literal underscore instead of a subscripted braid-group symbol.
- **Screenshot:** `screenshots/ex-the-artin-action-of-the-b-three-generators--01.png`
- **Suggested repair:** Use a rendered title form such as “The Artin action of the $B_3$ generators” or Unicode B₃.

### `thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism`

- **Section and frozen line:** Proof (technique label), line 58.
- **Symptom:** The proof-technique label displays the inline-math delimiters and TeX command literally in the rendered technique header.
- **Screenshot:** `screenshots/thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism--02.png`
- **Suggested repair:** Use plain wording in the technique label, such as “strong induction on the minimal total length of A,” or render math in technique labels.

### `thm-ordered-planar-configuration-spaces-are-aspherical`

- **Section and frozen line:** Proof (technique label), line 66.
- **Symptom:** The proof-technique label displays inline-math delimiters and the TeX command literally in the rendered technique header.
- **Screenshot:** `screenshots/thm-ordered-planar-configuration-spaces-are-aspherical--02.png`
- **Suggested repair:** Use plain wording in the technique label, such as “induction on n for fixed degree k ≥ 3,” or render math in technique labels.

## Coverage

The JSON coverage rows contain all 45 assigned IDs, their item-body section headings, page assignments, and the complete screenshot path arrays. Three items have confirmed findings; the other 42 were clean on visual review.

# Representation Theory visual audit — lane 09

## Scope and coverage

Audited all 71 assigned published items against their frozen source snapshots and matching local ItemBody HTML previews. Checked each complete title and ItemBody, including rendered LaTeX and any TikZ or diagram content. Individually opened all 161 receipt-listed PNG tiles with `tools.view_image` at original resolution. Source, HTML, and tile SHA256 values all match the assignment and receipts. Exact per-item section and tile coverage, hashes, and view attestations are in [lane-09.json](lane-09.json).

No high-likelihood missing diagram was identified. The assignment receipts report no TikZ render failures. No source, item, application, or publication files were changed.

## Confirmed findings

All findings concern title math notation:

- **ex-frobenius-normal-two-complement-for-s3**, frontmatter title line 4: `title: "Frobenius normal two complement for S_3"`. The title displays S_3 with a literal underscore and baseline 3 instead of a typeset subscript. Suggested repair: Write the group name in inline math, e.g. $S_3$. Screenshot: `screenshots/ex-frobenius-normal-two-complement-for-s3--01.png`.
- **ex-brauer-pair-branching-for-c3-semidirect-d8-in-characteristic-two**, frontmatter title line 4: `title: Brauer pair branching for c3 semidirect d8 in characteristic two`. The title renders the group names as plain lowercase c3 and d8, losing the standard group notation and semidirect-product symbol used by the example. Suggested repair: Use a math-formatted group expression such as $C_3\rtimes D_8$. Screenshot: `screenshots/ex-brauer-pair-branching-for-c3-semidirect-d8-in-characteristic-two--01.png`.
- **thm-classification-of-the-irreducible-unitary-dual-of-sl2-r**, frontmatter title line 4: `title: Classification of the irreducible unitary dual of SL2(R)`. The title renders SL2(R) as plain text without the standard subscript in SL_2 or blackboard-bold real field symbol. Suggested repair: Format the group name in math, e.g. $\mathrm{SL}_2(\mathbb{R})$. Screenshot: `screenshots/thm-classification-of-the-irreducible-unitary-dual-of-sl2-r--01.png`.
- **thm-parabolic-mackey-formula-for-finite-gl-n**, frontmatter title line 4: `title: Parabolic Mackey formula for finite GL_n`. The title renders GL_n with a literal underscore and baseline n instead of a typeset subscript. Suggested repair: Write the group name in inline math, e.g. $\mathrm{GL}_n$. Screenshot: `screenshots/thm-parabolic-mackey-formula-for-finite-gl-n--01.png`.

All other assigned titles and body rendering were clean for the requested LaTeX/TikZ and diagram review.

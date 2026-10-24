# Lie Theory rendering review — lane 05

Read-only review of frozen snapshots and local HTML/screenshots. No production route, builds, tests, or gates were checked. All assigned screenshots were opened individually at original resolution.

## Coverage

Reviewed 107 assigned items and 166 PNG tiles; all 166 were viewed. Sidecars report 5183 KaTeX expressions, zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. Exact source, snapshot, HTML, and PNG hashes are recorded in [lane-05.json](lane-05.json).

## Confirmed rendering defects

1. Raw TeX appears in three uppercase technique banners: fs-the-dual-representation-has-x-lambda-v-equal-lambda-x-v-with-no-minus-sign (snapshot line 40), lem-finite-dimensional-tensors-reach-every-block-simple (line 94), and thm-lies-theorem (line 49). Use plain-text technique wording or avoid inline TeX in this banner field.
2. Literal ASCII subscripts appear in mathematical prose: ex-the-affine-a1-gcm-has-singular-rank-one-realization-data (line 30), and thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra (lines 30, 32, 36). Wrap these variables and expressions in inline TeX.

## Diagram candidate

thm-existence-of-each-classified-root-system, lines 50, 58, 60, 64, 66: a labelled Dynkin-diagram atlas for the named A, B, C, D, E, F, and G types could help compare classification outcomes. In particular, check the displayed G2 Cartan matrix against the triple edge and arrow toward the shorter root. This is an editorial aid, not a defect; details are in the JSON.

## Other observations

No title/reference leak, Scratch text, clipped standalone image, or incorrect existing diagram was observed. Link titles render as intentional block links. There were no existing TikZ diagrams in the assigned items to check.

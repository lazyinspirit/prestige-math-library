# Step 5a reader report — batch 22

Run: `frontier-37-owner-30`  
Role: reader (`reader-22`)  
Verdict: no confirmed mathematical defect in the assigned current pages or items; no repair made and no withdrawal proposed.

## Opened inventory

### Assigned pages

- `library/braid-groups/artin-presentation-completeness-and-braid-combing.md` (A page, draft): opened frontmatter and full prose. **Verdict: pass.** Its summary tracks the current combing, kernel, induction, and model-comparison items without adding a claim beyond them.
- `library/braid-groups/artin-presentation-completeness-and-braid-combing-examples.md` (B page, draft): opened frontmatter and full prose. **Verdict: pass.** Its summaries of the worked word, the three-strand basis, and the surjection counterexample match the current example items.

### Assigned items

Opened each current item file (all are drafts in this run):

- `def-zariski-braid-combing-words-alpha-and-x`
- `lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors`
- `lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel`
- `lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter`
- `lem-every-trivial-braid-word-combs-as-w-one-w-two`
- `lem-the-combed-geometric-decomposition-is-unique`
- `thm-the-artin-presentation-is-complete-for-geometric-braids`
- `cor-all-four-classical-braid-models-realize-the-artin-presentation`
- `ex-combing-a-four-strand-braid-word`
- `ex-the-free-kernel-words-for-three-strand-braid-combing`
- `cex-visible-artin-relations-alone-do-not-prove-presentation-completeness`

I also opened `research/frontier-37-owner-30-batch-22.proof-contracts.json`, checked its scope and boundary-obligation summaries against the current item proofs, and did not treat it as a substitute for the item-by-item reading.

### Dependencies opened for the audit

- Artin/geometric conventions: `def-braid-group-by-the-artin-presentation`, `prop-the-artin-presentation-surjects-onto-geometric-braids`, `prop-stacking-of-geometric-braids-is-well-defined`, `thm-geometric-braids-form-a-group`, `def-geometric-braid-with-setwise-endpoints`, `def-elementary-geometric-half-twist`, `lem-geometric-far-commutativity`, `lem-geometric-three-strand-braid-relation`, and `prop-geometric-endpoint-permutation-equals-covering-monodromy`.
- Configuration and kernel inputs: `thm-geometric-and-configuration-braid-models-are-canonically-isomorphic`, `cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations`, `lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent`, `def-ordered-configuration-space`, `def-unordered-configuration-space`, `def-induced-homomorphism-on-fundamental-groups`, `prop-higher-homotopy-basepoint-transport-and-moving-homotopies`, and the three in-run batch-21 items `thm-pure-braid-forgetting-a-strand-short-exact-sequence`, `lem-standard-pure-braids-generate-each-free-kernel`, and `def-standard-pure-braid-generators`.
- Mapping-class comparison: the in-run batch-20 items `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk` and `def-boundary-fixed-mapping-class-group-of-a-punctured-disk`.
- Algebraic inputs: `def-group-presentation`, `thm-first-isomorphism-theorem-groups`, `thm-von-dyck`, `def-axiom-of-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `def-integers-modulo-n`, `def-addition-and-multiplication-modulo-n`, `thm-standard-representatives-modulo-n`, and `thm-integers-modulo-n-basic-algebra`.

## Mathematical checks

- With the library's convention that the first written factor is the upper layer, the inverse endpoint permutation in the prefix lemma tracks the point from the top down through the letters in word order. The connector product telescopes by free cancellation, and its factor positions agree with the six-case lemma's above/below convention.
- The six reductions follow from the two Artin relation families and free cancellations. In the `k>j` case the slide identity `σ_k^ε α_j ≡ α_j σ_{k-1}^ε` is valid for both signs. The mixed conjugation table is consistent in both orientations; the collection lemma's right-to-left processing terminates because each processed σ-letter has a suffix of x-letters that shortens at every rewrite.
- The four-strand example's permutation sequence, twelve factors, reductions, collection, and `W_1,W_2` are correct. Both displayed halves of `W` reduce by one three-strand relation and free cancellations. The `W_1` cancellation is compressed in the prose but the adjacent inverse pairs are immediate.
- For the kernel uniqueness lemma, the expanded word identity `x_i ≡ P̃_i⁻¹ Ã_{in} P̃_i` is a free-cancellation identity. The radial embedding maps the lower standard-generator supports to the upper-rank supports, and the moving-basepoint homotopy makes its induced `π_1` map injective. Together with the current batch-21 free-kernel basis statement this gives the trivial intersection needed to separate `W_1` and `W_2`. The induction in the completeness theorem handles `n=1` and applies the lower-rank hypothesis correctly at each `n≥2`, including `n=2`.
- In the mapping-class comparison, the current batch-20 proof explicitly homotopes the moving pair in the assigned positive half twist to the supported half-rotation path relative to endpoints. The inverse-loop and inverse-endpoint conventions then give the stated generator image. The batch-22 corollary composes the maps at the common basepoint and transports the presentation through group isomorphisms.
- The three-strand kernel identities and the conjugated free-basis argument are correct. The `C4 -> C2` counterexample is verified directly: `x ↦ g` is surjective, while `x^2 != 1` is separated by `P -> Z/4` and maps to `1 in G`.

## Source checks and limits

- Opened Juan González-Meneses, *Basic results on braid groups*, [arXiv:1010.0321](https://arxiv.org/pdf/1010.0321). Section 2.1, especially equation (2.2) (PDF pp. 11–13), gives the free-kernel sequence and combing generators. Section 3.1, Proposition 3.1 and its six factor cases, conjugation table, collection, and induction (PDF pp. 20–22), supports the cited combing argument. The assigned items supply explicit derivations in the repository's own stacking convention.
- Opened Birman–Brendle, [*Braids: A Survey*](https://www.math.columbia.edu/~jb/Handbook-21.pdf), §1.2, author manuscript p. 5. It gives `A_{s,t}=(σ_{t-1}⋯σ_{s+1})σ_s^2(σ_{s+1}^{-1}⋯σ_{t-1}^{-1})` and states that the free subgroup in the last-strand sequence is generated by `A_{1,n},…,A_{n-1,n}` (PDF p. 5). These match the current batch-21 standard-generator and free-kernel inputs.
- The item cites Farb–Margalit, *A Primer on Mapping Class Groups*, v5.0, §9.1.3, printed p. 256, at [the archived v5.0 URL](https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf); that exact archive URL was inaccessible to the web reader. I opened an accessible [v4 mirror](https://pagine.dm.unipi.it/~a019210/Farb%20Magalit_Primer%20on%20Teichmuller%20theory.pdf), §9.1.3, printed p. 256, for the general disk mapping-class identification and supported half-twist correspondence. Its §9.1.2 describes its configuration-space generator as clockwise (printed p. 255); I used the current batch-20 explicit path calculation, not that source's sign convention, to check the assigned generator correspondence.
- The cited Minasyan MATH6138 PDF at `https://www.personal.soton.ac.uk/am4x07/rs/MATH6138-notes.pdf`, §2.2, could not be fetched by the web reader (timeout). The counterexample is self-contained and was checked directly against the opened local von Dyck and modular-arithmetic statements, so this external citation was not needed for the mathematical verdict.

## Repairs, findings, and blocker

- **Edits:** none. No material repair was required; therefore no proof contract, `verification.judge` record, reflow output, or precheck output was changed or regenerated.
- **Uneditable mathematical defects:** none found. This includes the B page and its three example items, which were read but were outside the prose-edit scope.
- **Withdrawals:** none proposed.
- **Blocker:** no blocker to this batch's mathematical read. The cross-batch dependency artifact still labels the batch-21 pure-braid inputs and the batch-20 mapping-class input as open for owner certification. This report does not certify those supplier items or close those run edges.

## Coverage note

Both assigned pages, all eleven assigned items, the batch-22 proof-contract scope/boundary summaries, the directly relevant current supplier statements/proofs, and the cited González-Meneses and Birman–Brendle sections were read. I did not independently certify the in-run batch-20 or batch-21 supplier items. The exact archived Farb–Margalit v5.0 and Minasyan PDFs were not accessible; the report records the accessible Farb–Margalit mirror and does not claim to have read the Minasyan argument.

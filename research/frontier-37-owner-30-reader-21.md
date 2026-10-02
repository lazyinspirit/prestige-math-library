# Step 5a reader report — batch 21

Run: `frontier-37-owner-30`  
Role: reader  
Date: 2026-10-01

## Opened inventory

Assigned pages opened:

- A page: `library/braid-groups/pure-braids-fadell-neuwirth-and-asphericity.md`
- B page: `library/braid-groups/pure-braids-fadell-neuwirth-and-asphericity-examples.md`

Assigned A items opened:

- `lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles`
- `lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction`
- `thm-pure-braid-forgetting-a-strand-short-exact-sequence`
- `thm-point-pushing-is-the-kernel-of-forgetting-a-puncture`
- `lem-the-planar-forgetful-map-has-a-continuous-section`
- `cor-the-pure-braid-extension-splits`
- `thm-ordered-planar-configuration-spaces-are-aspherical`
- `cor-unordered-planar-configuration-spaces-are-aspherical`
- `def-standard-pure-braid-generators`
- `lem-standard-pure-braids-generate-each-free-kernel`
- `thm-standard-pure-braids-generate-the-pure-braid-group`
- `thm-pure-braid-groups-are-torsion-free`

Assigned B examples opened:

- `ex-the-pure-two-strand-braid-group-is-infinite-cyclic`
- `ex-the-pure-three-strand-group-as-a-split-free-by-cyclic-extension`
- `ex-pure-braid-generators-as-point-pushes`
- `cex-the-short-exact-sequence-to-s-n-does-not-prove-b-n-torsion-free`

Relevant dependency statements were opened for the punctured-disk spine and covering argument, the configuration-space definitions and open/closed-disk comparison, the Fadell–Neuwirth fibration and its proof, the fibration long exact sequence, AC/DC, the ordered-to-unordered covering, braid/configuration and braid/mapping-class identifications, point pushing and its inverse-endpoint convention, the explicit section and splitting criterion, smooth motion representatives and their isotopy extension, basepoint transport, and the geometric braid stacking and half-twist conventions. The graph dependencies opened include the finite-wedge fundamental group, reduced words, collapse of a contractible CW subcomplex, and the finite polygonal disk lemma.

## Independent source check

- Juan González-Meneses, *Basic results on braid groups*, §2.1, printed pp. 11–13: Theorem 2.1 gives local triviality of coordinate forgetting; the text gives the far-right section, the fibration sequence (2.3), the π₂ induction, the pure-braid short exact sequence and splitting, and the higher-homotopy induction. [Author-hosted arXiv text](https://arxiv.org/pdf/1010.0321).
- Joan S. Birman and Tara E. Brendle, *Braids: A Survey*, §1.2, printed pp. 4–5: the split pure-braid tower and its free kernel generators (A_{1,n},\ldots,A_{n-1,n}); §1.3, Theorem 1 and its evaluation-fibration argument, printed pp. 5–6. [Author-hosted PDF](https://www.math.columbia.edu/~jb/Handbook-21.pdf).
- Allen Hatcher, *Algebraic Topology*, §1.A, printed pp. 83–86, and Example 1B.1, printed pp. 87–88: tree covers of graphs and the contractibility of a tree universal cover. [Author-hosted PDF](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf).

## Edit and evidence

Repaired `items/lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles.md`, Step 1.2. Its construction used `max` and a minimum over pairs of punctures without defining them for (k=0) or (k=1), so the proof did not cover two allowed cases. Step 1.2 now handles (k=0) directly by a based contraction of the plane at any basepoint, and sets η=1 when (k=1); for (k\ge2), it uses the minimum positive separation of the distinct first coordinates. The square-disjointness argument now states separately that it is vacuous for (k=1). I removed the duplicate later (k=0) proof and the now-unused basepoint-transport fact/dependency, then renumbered the remaining fact references.

Updated `research/frontier-37-owner-30-batch-21.proof-contracts.json`: the Step 1.2 derivation now matches the repaired proof, and the empty, zero, and one boundary records describe the actual case handling. The item had no `verification.judge` record to remove; its verification metadata contained only the precheck result. Reflow normalized the item layout.

Validation after the final edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles.md` — PASS, 1 checked, 0 failing.

An intermediate precheck caught a forward reference to the removed Step 1.9; I moved the (k=0) proof into Step 1.2 and reran both commands successfully.

## Uneditable defects

None confirmed. No proposed withdrawal is needed.

## Page verdicts

- `pure-braids-fadell-neuwirth-and-asphericity` (A page): pass. The authored summary matches the repaired spine argument and the verified π₂, short exact sequence, splitting, point-pushing, asphericity, generator, and torsion claims. No page prose edit was needed.
- `pure-braids-fadell-neuwirth-and-asphericity-examples` (B page): pass. The authored summary agrees with the two-strand computation, the normalized (PB_3) section action, the point-push identification and sign, and the abstract extension counterexample. No confirmed B-page defect was found.

## Coverage limitation and blocker

The original Fadell–Neuwirth journal-scan URL redirected to the journal login, so I did not independently read that scan. I checked the current library dependency proof and the complete relevant §2.1 argument in González-Meneses above. I did not independently audit every generic dependency proof beyond the statements and arguments needed for this batch. No blocker remains.

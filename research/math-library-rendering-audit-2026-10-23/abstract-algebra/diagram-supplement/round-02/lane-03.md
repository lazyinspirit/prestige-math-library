# Round 02, lane 03 — Five Lemma diagram

## Coverage

Reviewed the bound snapshot for `thm-five-lemma-for-modules`, including the statement diagram and both hypothesis sets. The snapshot hash matches the current item. Viewed both local screenshots at original resolution: `1200×1400` and `1200×100`; their hashes match the screenshot receipt.

## Checks

- **Rows and maps:** The top row is `A → B → C → D → E` with maps `u,v,w,x`; the lower row is `A′ → B′ → C′ → D′ → E′` with maps `u′,v′,w′,x′`. The five vertical maps point downward in order `a,b,c,d,e`, matching the source definitions and commutativity equations.
- **Injectivity:** The condition `a` surjective, `b` and `d` injective implies `c` injective. These positions are correct for the injective Four Lemma; the proof applies this case at line 65.
- **Surjectivity:** The condition `b` and `d` surjective, `e` injective implies `c` surjective. These positions are correct for the surjective Four Lemma; the proof applies this case at line 67.
- **Isomorphism consequence:** If `a,b,d,e` are isomorphisms, the first hypothesis set yields injectivity of `c` and the second yields surjectivity, so `c` is an isomorphism. Exactness is stated for both rows around the diagram, so zero endpoints are not required in the drawing.
- **Rendered tiles:** The first tile visibly contains the complete two-row, five-column diagram and its labels. The second tile is a short trailing capture. The receipt reports one TikZ diagram and no diagram failures.

## Result

Checked correct. No diagram or hypothesis mismatch found.

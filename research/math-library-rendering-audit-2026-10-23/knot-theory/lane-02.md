# Knot Theory visual audit — lane 02

## Scope and coverage

The assignment contains 95 items and 212 screenshot tiles. Assignment SHA256, per-item current-source and frozen-snapshot hashes, local HTML hashes, and each tile hash and resolution are recorded in [lane-02.json](lane-02.json). Source, snapshot, and HTML hashes match the assignment for all 95 items; all 212 tile hashes match their local capture receipts. I opened every assigned tile individually with `view_image` at original resolution. Visual review is complete for this lane. No production route or publication status was checked or changed; no source content was edited; no builds, tests, or gates were run.

## Confirmed rendering defects

### `ex-knot-kt-45-worked-cases` — lines 40–50

- **Kind:** TikZ source rendered literally.
- **Source/snapshot SHA256:** `f26fcf68558586f0c02fa03c9cd7983cf97228ce8e04ef9280a6496ff43dea80` (identical).
- **Visual evidence:** [`ex-knot-kt-45-worked-cases--01.png`](screenshots/ex-knot-kt-45-worked-cases--01.png), SHA256 `d1d9a9478f16105934de97d30ccc13db1e7b25a1b224e24ac19f27751fad00e1`, 1200×1400, opened at original resolution.
- **Finding:** The `~~~tikz` block and its `tikzpicture`, `draw`, and `node` commands appear as code in the Example body. The text below describes the intended left-handed trefoil closure and crossing order, but no diagram is drawn.
- **Repair direction:** Render the existing three-crossing braid closure through a supported diagram form, retaining the left-handed braid, closure arcs, over/under gaps, orientation, and marked point.

### `lem-link-wirtinger-local-meridian-conjugacy` — lines 87–95, 101–117

- **Kind:** two TikZ blocks rendered literally.
- **Source/snapshot SHA256:** `33a51915296ce6fb0d9a8c191e0c680b151dbd9549938dc0f5de2576e0129c83` (identical).
- **Visual evidence:** [`lem-link-wirtinger-local-meridian-conjugacy--03.png`](screenshots/lem-link-wirtinger-local-meridian-conjugacy--03.png), SHA256 `0faa3f145cd12f60115837ac890b1a1d07a4d9ef1d77441ac1fbe903a2c75b60`, 1200×731, opened at original resolution.
- **Finding:** Both `tikzpicture` blocks are printed as source in the body. They are intended to show the local crossing chart and the triangle-access loop used to identify the over-meridian with the conjugate of the under-meridian.
- **Repair direction:** Render both existing drawings. Preserve the over-strand direction, under-strand, source and target sides, access paths `a_s`, `a_t`, `β`, and the positive meridian label `m_o`.

### `thm-closed-oriented-smooth-three-manifold-admits-heegaard-splitting` — lines 72–80

- **Kind:** TikZ source rendered literally.
- **Source/snapshot SHA256:** `ec807ac65350c6c836b22e7d525f1c197da4702b44b774d2981aaa6974a738ee` (identical).
- **Visual evidence:** [`thm-closed-oriented-smooth-three-manifold-admits-heegaard-splitting--02.png`](screenshots/thm-closed-oriented-smooth-three-manifold-admits-heegaard-splitting--02.png), SHA256 `c15e4b1603a42e371e24fd30724ba6d9182f3ddf0f38f323b03671513e62eed3`, 1200×628, opened at original resolution.
- **Finding:** The Diagram section displays the `tikzpicture`, `draw`, and `node` source instead of the two rounded regions and shared boundary curve described immediately above it.
- **Repair direction:** Render the two handlebody neighborhoods and common surface `Σ`; keep the drawing schematic as stated, without adding a graph, gluing map, or proof dependency.

### `def-blanchfield-pairing-and-higher-order-rho-invariant` — line 51

- **Kind:** literal ASCII math notation leaks into prose.
- **Source/snapshot SHA256:** `8337062ba8e8e9b27ff40cf2851841885754fae811255cc09faaefa049b44229` (identical).
- **Visual evidence:** [`def-blanchfield-pairing-and-higher-order-rho-invariant--01.png`](screenshots/def-blanchfield-pairing-and-higher-order-rho-invariant--01.png), SHA256 `e95293e5707d40306a94ba4428fbfec6be62d6822d6ad81a8f5af3d9107d100a`, 1200×1400, opened at original resolution.
- **Finding:** The signature-defect formula is displayed as ordinary prose with raw `H_1(M)`, `G^(2)`, and ASCII subscripts/superscripts. It is visually distinct from the properly rendered math around it.
- **Repair direction:** Mark the displayed signature-defect expression as inline math, preserving its variables and separate bordism-independence caveat.

### `def-satellite-induced-concordance-operator` — lines 45–47

- **Kind:** literal ASCII math notation leaks into prose.
- **Source/snapshot SHA256:** `10dd55ef9e575b5497b23ed249aab12bcd56ccd4e1b0cdda58d155eb632050bd` (identical).
- **Visual evidence:** [`def-satellite-induced-concordance-operator--01.png`](screenshots/def-satellite-induced-concordance-operator--01.png), SHA256 `422834b4f2663275a2ad2e5e47938e711ce1eed06b0bb1edadea921010a3ed72`, 1200×1400, opened at original resolution.
- **Finding:** The displayed definition contains unmarked notation such as `V=S¹×D²`, `e_K`, `H₁(V;Z)`, `C_sm`, and `C^{1/n}` as ordinary prose. The formulas are legible but expose source notation rather than using the math rendering seen elsewhere in the item.
- **Repair direction:** Mark the solid-torus model, embedding, homology class, and concordance-class notation as inline math; retain the definition's distinction between ordinary and strong winding number.

### `lem-freedman-casson-handle-skyscraper-and-surgery-modules` — repeated examples, including line 347

- **Kind:** repeated literal ASCII math notation leaks into prose.
- **Source/snapshot SHA256:** `fe031726352b0804e27a19fa5fbdf37e4d2005c2cbfe5f5218c9b45170f290b1` (identical).
- **Visual evidence:** [`lem-freedman-casson-handle-skyscraper-and-surgery-modules--01.png`](screenshots/lem-freedman-casson-handle-skyscraper-and-surgery-modules--01.png), SHA256 `0b94af0a1211590f1a2a0fa3921e0d0d5cdea585615ce07a0b083056e2610035`, 1200×1400, and [`lem-freedman-casson-handle-skyscraper-and-surgery-modules--24.png`](screenshots/lem-freedman-casson-handle-skyscraper-and-surgery-modules--24.png), SHA256 `68e2f9a548026610278810b69713e8844b7db76b4c3acf43e7499a9a04b75c8f`, 1200×955; both opened at original resolution.
- **Finding:** Mathematical notation repeatedly appears as ordinary text, including `Sigma_g`, `e^−1`, `B^4`, and `V_(i+1)`. At line 347 the rendered proof also exposes terms such as `1/(2n eta^2)` and `4n` without math formatting; tile 24 shows these in the final construction steps. The same pattern occurs earlier in the body. This is an extensive readability defect, not an isolated punctuation wrap.
- **Repair direction:** Convert the mathematical expressions to rendered inline or display math while retaining the authored proof text and labels. Do not infer any mathematical change from the typography finding.

## Source-supported missing-diagram candidates

These are editorial candidates, not confirmed errors. The existing proofs state their arguments without relying on a diagram.

### `alg-khovanov-chain-complex-from-diagram` — lines 46–48

- **Kind:** local smoothing and cube-edge schematic.
- **Rationale:** The procedure introduces A/B smoothings, then maps between states by merge multiplication or split comultiplication. A single local crossing picture could connect the state change to its edge map.
- **Draw/check:** Show one crossing with the through-pairing A-smoothing and cap-cup B-smoothing, label the two states `v` and `v+e_j`, and annotate a merge case with `m` and a split case with `Δ`. Keep the sign `(-1)^{Σ_{i<j}v(c_i)}` in the source text; a local picture alone does not establish `d²=0`.

### `thm-knot-genus-additive-under-connected-sum` — lines 78, 84, 86

- **Kind:** connected-sum sphere cut of a spanning surface.
- **Rationale:** The proof removes closed intersection curves and then cuts a minimum-genus surface along the remaining arc on the standard sum sphere. A schematic could make the final decomposition into `F₁` and `F₂` more immediate.
- **Draw/check:** Show the sphere `S` meeting `K#J` at two points, the remaining arc `α=F∩S`, and the two pieces `F₁,F₂` with boundaries `K` and `J`. Indicate that the preceding innermost-circle argument has removed every closed component; do not use the drawing to justify the Euler-characteristic or minimality steps.

## Existing diagram checks

The existing E8 graph, four-term chord relation, framed solid-torus slope example, unknot bridge cross-section, Conway two-chord patterns, and torus-knot group pushout diagram render in the expected labeled form. Their visible labels and relations agree with the accompanying text. No confirmed mathematical mismatch or standalone-image clipping defect was found in the diagrams reviewed.

## Coverage

All 95 assigned titles and ItemBodies and all 212 assigned tiles were reviewed. The exact item and per-tile inventory is in [lane-02.json](lane-02.json); every tile record is marked viewed at original resolution. The preview is local evidence only and supports no production-route claim.

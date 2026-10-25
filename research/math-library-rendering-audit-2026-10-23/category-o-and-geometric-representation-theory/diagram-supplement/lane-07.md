# Category O diagram supplement — lane 07

Reviewed all 25 assigned items for high-likelihood missing diagrams and mathematical issues in existing diagrams. All 25 source hashes and all 54 local screenshot tile hashes matched the manifest and receipts. No assigned item has an existing TikZ diagram or reported diagram failure. The three candidates below are optional editorial possibilities; no proof depends on a diagram.

## Candidates

### thm-category-o-translation-intertwines-residue-induction-and-restriction

- **Type / classification:** missing-tikz-diagram; uncertain.
- **Source:** `items/thm-category-o-translation-intertwines-residue-induction-and-restriction.md`, SHA256 `9c52a547e283c6e07fa18c311754c9d250b169aa0fe0d708ea4757cdc12ef914`; frozen lines 58–63.
- **Diagram:** paired induction/restriction comparison squares across the Schur functor.
- **Why it may help:** The two functorial comparisons reverse direction between induction and restriction, with source and target block projectors and adjunction maps. Paired squares could make the directions and compatibility legible.
- **Content and checks:**
  - Draw the induction square with O_d → O_{d+1} across the top and B_d-mod → B_{d+1}-mod across the bottom, with vertical Schur functors π_d and π_{d+1}.
  - Draw the restriction square in the reverse direction, O_{d+1} → O_d and B_{d+1}-mod → B_d-mod.
  - Label the natural isomorphisms by the stated f_i and e_i comparisons; identify the generalized-i projector and source/target content cuts.
  - If adjunction units and counits are shown, mark their directions from the evaluation/coevaluation data and dual transported reverse adjunction.
  - Check: the induction square domains are degree d and codomains degree d+1; restriction reverses them.
  - Check: each vertical map is the Schur functor for the matching degree and supported block.
  - Check: the generalized-i projectors and content projections are attached to the stated source/target objects.
  - Check: any displayed unit/counit arrow has the direction and domain specified by the adjunction, without asserting extra equalities.
- **Candidate status:** Optional editorial diagram; the textual statement and proof appear internally consistent, and no diagram is needed for the proof.
- **Local screenshots:** [thm-category-o-translation-intertwines-residue-induction-and-restriction--01.png](../screenshots/thm-category-o-translation-intertwines-residue-induction-and-restriction--01.png), [thm-category-o-translation-intertwines-residue-induction-and-restriction--02.png](../screenshots/thm-category-o-translation-intertwines-residue-induction-and-restriction--02.png), [thm-category-o-translation-intertwines-residue-induction-and-restriction--03.png](../screenshots/thm-category-o-translation-intertwines-residue-induction-and-restriction--03.png)

### thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations

- **Type / classification:** missing-tikz-diagram; uncertain.
- **Source:** `items/thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations.md`, SHA256 `d4a213e09261b67c3446ffaed42b0077cd16e1f8253e0ed5df199e1d245e8489`; frozen lines 62–69.
- **Diagram:** bar-compatible finite-cut inclusions and direct-limit comparison.
- **Why it may help:** The claim hinges on two distinct embeddings (upper-cut inclusion and common-bottom-tail embedding) being compatible with the bar. A diagram could clarify which finite-cut module maps to which larger cut and how the direct-limit bar is induced.
- **Content and checks:**
  - Show a finite-cut Fock module and its enlarged-cut module, with the upper-cut inclusion labeled as the supported truncation map.
  - Show the common-bottom-tail embedding ι_k(M_A)=M_{A⊔(k−1)^l} with the actual domain and codomain at each finite cut.
  - Place the corresponding bar operators on both modules and mark the commuting squares asserted by ψι=ιψ.
  - Show compatible finite-cut maps passing to the full direct limit, including semi-infinite columns.
  - Check: the domain and codomain of each upper-cut and common-tail map against the chosen cut notation.
  - Check: both squares use the finite-cut bars from the statement and do not conflate the two embeddings.
  - Check: the common tail index (k−1)^l and the ordered column chart are preserved.
  - Check: the direct-limit map is induced by the compatible finite-cut family and preserves bar-fixed/chart vectors.
- **Candidate status:** Optional editorial diagram; no contradiction is visible in the statement or proof, and the proof does not rely on a diagram.
- **Local screenshots:** [thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations--01.png](../screenshots/thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations--01.png), [thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations--02.png](../screenshots/thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations--02.png), [thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations--03.png](../screenshots/thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations--03.png)

### ex-r-polynomial-and-kl-recursions-on-a-small-bruhat-interval

- **Type / classification:** missing-tikz-diagram; uncertain.
- **Source:** `items/ex-r-polynomial-and-kl-recursions-on-a-small-bruhat-interval.md`, SHA256 `d03a6df3154105a113d7166e93759a59eda91c9f5a323da85a016034b17d4246`; frozen lines 59–59, 63–63.
- **Diagram:** ranked Hasse diagram of the ten-element Bruhat interval [1324,3412].
- **Why it may help:** The example’s calculations depend on the exact interval, its cover structure, and the fact that the distinguished μ-pair spans three ranks. A small Hasse diagram would make those combinatorial inputs much easier to inspect.
- **Content and checks:**
  - Use vertices b=1324; a=1342, c=1423, d=2314, f=3124; A=1432, C=2413, D=3142, F=3214; and w=3412, arranged by inversion length 1,2,3,4.
  - Draw covers b→a,c,d,f; a→A,D; c→A,C; d→C,F; f→D,F; and A,C,D,F→w.
  - Add a separate non-cover callout for μ(b,w)=1 and ℓ(w)−ℓ(b)=3; do not depict it as a Hasse edge.
  - Check: Verify the ten vertex labels and their one-line permutations match the source and the four rank levels have lengths 1,2,3,4.
  - Check: Verify the intermediate covers are exactly a<A,D; c<A,C; d<C,F; f<D,F, with every rank-two vertex above b and every rank-three vertex below w.
  - Check: the diagram has no transitive-reduction edges omitted or extra edges added.
  - Check: Keep the μ(b,w) callout distinct from the cover relation; verify the displayed pair is comparable but not a cover.
- **Candidate status:** Optional editorial diagram; the source explicitly lists the interval and relations and no mathematical error is observed.
- **Local screenshots:** [ex-r-polynomial-and-kl-recursions-on-a-small-bruhat-interval--01.png](../screenshots/ex-r-polynomial-and-kl-recursions-on-a-small-bruhat-interval--01.png), [ex-r-polynomial-and-kl-recursions-on-a-small-bruhat-interval--02.png](../screenshots/ex-r-polynomial-and-kl-recursions-on-a-small-bruhat-interval--02.png), [ex-r-polynomial-and-kl-recursions-on-a-small-bruhat-interval--03.png](../screenshots/ex-r-polynomial-and-kl-recursions-on-a-small-bruhat-interval--03.png)

## Coverage

All assigned items were considered. The JSON coverage table lists each item, its source hash, disposition, and local screenshot paths. The reviewed item set contains no existing TikZ diagram to adjudicate.

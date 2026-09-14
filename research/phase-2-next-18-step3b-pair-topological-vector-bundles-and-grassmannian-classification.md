# Step 3b author checkpoint — topological vector bundles and Grassmannian classification

- Run: `phase-2-next-18`
- Role: `alpha-high`
- Batch: `4`
- Owned A/B pages: `topological-vector-bundles-and-grassmannian-classification`, `topological-vector-bundles-and-grassmannian-classification-examples`
- Ownership boundary: only this pair is edited; the K-theory sibling rows in batch 4 are preserved.

## Evidence read before authoring

- Repository contracts: complete `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/group-author.md`, `briefs/content-repair.md`, and `briefs/tasks/frontier-dependency-ledger.md`.
- Design: AT-15 in `research/plan-algebraic-topology-track.md` (lines 2010–2061), current `research/plan-spec.json`, batch-4 manifest, coverage, notes, and cross-batch input.
- Step 3a: the non-owner `insufficient` receipt and owner `proceed` enrichment receipt. No `research/phase-2-next-18-owner-authoring-direction.md` exists.
- Hatcher, *Vector Bundles & K-Theory*, Chapter 1 §§1.1–1.2, complete printed pp.6–37. Exact locators used below include Proposition 1.2 (pp.11–12), Proposition 1.4 (pp.13–14), Proposition 1.7 (pp.16–17), Example 1.10 and Propositions 1.11/1.14 (pp.21–27), Theorem 1.16 and its complete embedding/uniqueness proof (pp.29–33), Proposition 1.17 (pp.33–35), and Lemma 1.21 (pp.36–37).
- Miller, MIT 18.906 notes, complete Chapter 3 Lectures 16–21, printed pp.53–72: numerability, metrics, splitting, frames and structure-group reduction, Gauss embeddings, Stiefel connectivity, and universal bundles.
- Franklin and Thomas, “A Survey of $k_\omega$-Spaces,” definition on printed p.111 and complete property list surrounding finite-product Property 4 on printed p.113. This supplies the ordinary product-topology step for the explicit stable-Stiefel contraction.
- Existing published dependency arguments were read in full where used, especially `thm-principal-bundles-are-classified-by-maps-to-bg` (including its arbitrary-numeration countabilization). The published long-line counterexample was also read in full while auditing the provisional B-item dependency and the structural defect reported below.

## Scaffold audit and repairs

Confirmed repairs applied to this pair's rows in `research/phase-2-next-18-batch-4.pages.json`:

1. `def-oriented-real-vector-bundle-and-oriented-frame-bundle`: removed the false implicit assertion that every oriented bundle has a metric/SO reduction. The definition is now choice-free; a supplied metric belongs to the following proposition.
2. `def-oriented-grassmannian-and-tautological-oriented-bundle`: qualified the forgetful double cover by `n>=1` and recorded the rank-zero point case.
3. `thm-stable-stiefel-space-is-contractible`: replaced the AC/Whitehead scaffold with the explicit odd-coordinate/even-frame contraction. This removes unnecessary choice and avoids using the later Schubert CW theorem implicitly.
4. `lem-a-bundle-embedding-produces-its-grassmannian-classifying-map`: made the arbitrary-index target explicit and added the published AC countabilization needed to reach the countable stable Grassmannian. This closes the gap in the promised arbitrary-numerable CGWH classification.
5. `thm-oriented-real-vector-bundles-are-classified-by-bso`: normalized “Choice” to exact “AC,” added the CGWH and `n>=0` boundaries, and exposed the rank-zero singleton.
6. `thm-finite-rank-complement-theorem-over-compact-hausdorff-bases` and `thm-homotopy-invariance-of-vector-bundle-pullback`: added the explicit AC-implies-DC supplier required by their partition-of-unity uses.
7. `thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range`: removed dependencies on AC-bearing general theorems. The sphere proof uses its own finite-cover disk argument, so clutching and its examples remain choice-free.
8. The finite/projective and rank-zero examples no longer cite the AC classification theorem when their direct calculations do not use it.
9. `cex-the-tautological-line-over-rp-infinity-has-no-finite-rank-complement`: added the published finite-projective-space cellular-boundary computation, singular-homology homotopy invariance, and the definitions needed to verify the CGWH hypothesis. A one-cell-per-dimension assertion alone did not establish the required mod-two differential.
10. `cex-vector-bundle-classification-without-numerability-can-fail`: propagated AC and the stable-classification dependency. The nonnumerability witness is choice-free, but the library currently proves numerability of the tautological bundle on the stable Grassmannian using AC; excluding its pullback must expose that use.
11. The repository dependency gate then exposed a forbidden edge from that vector-bundle counterexample to the published principal-bundle counterexample, which lives only on a B page. The edge was removed. The owned item now derives nonnumerability locally: a hypothetical numeration supplies a continuous fiber metric, whose path-length metric is proved directly to induce the topology of the nonmetrizable long line. Nyikos pp.271–272 supply exactly the differentiable, connected, Hausdorff, nonmetrizable long-line facts used.
12. The final continuity audit of `thm-stable-stiefel-space-is-contractible` found that stagewise continuity alone does not formally establish continuity on the ordinary product with the interval. The proof now verifies compact Hausdorff Stiefel stages and closed inclusions, then invokes Franklin–Thomas Property 4 for the $k_\omega$ product topology. The scaffold's coordinate typo `i -> 2i` was also corrected to the actual odd-coordinate map `i -> 2i-1`.
13. The same final audit made two proof suppliers fully explicit. The stable-Stiefel theorem now states and proves both odd- and even-coordinate displacement homotopies used by the classification uniqueness lemma. The sphere-clutching theorem now derives disk triviality from a finite strict-support partition, a finite Grassmannian embedding, uniform projection bounds, and finitely many endpoint bundle isomorphisms; it no longer leaves “finite graph transport” as an unauthored strategy phrase.
14. The repository forward-reference gate exposed four load-bearing uses of the later published implication `thm-choice-implies-dependent-implies-countable-choice`. Because an A-spine theorem cannot defer a proof prerequisite to page order 665, the new local supplier `lem-ac-supplies-dependent-choice-for-vector-bundle-constructions` was inserted immediately after the opening definition. It proves the exact prescribed-initial-point implication AC⇒DC from the published AC and DC definitions plus ordinary recursion. The four consumers now point to this earlier local supplier.

The original owner scope receipt predates these statement repairs and will require a current owner scope ruling after the non-owner sufficient review is refreshed. That obligation is not treated as resolved here.

## Item checkpoints

Checkpoints below are appended only after the named item has been authored and locally checked.

## Published-item findings for owner reconciliation

- **Confirmed structural defect, high confidence:** `cex-principal-bundle-classification-can-fail-without-numerability` is a published `counterexample`, but its claim is headed `## Claim` rather than the schema-required and proof-contract-citable `## Statement refuted`. Evidence: `SCHEMA.md` §3 assigns `Statement refuted` to counterexamples; `tools/facts-block.mjs` permits only `Statement`, `Statement refuted`, `Definition`, `Example`, and `Remark` as citation source sections. This blocks an exact proof-contract citation despite the mathematical proof itself being usable. Required supplier: none. Repair strategy: rename the heading to `## Statement refuted` while preserving its content, then refresh its publication verification and downstream contract citation. The present pair removed its provisional B-page dependency and instead gives the long-line nonnumerability argument locally, so this published defect does not block the pair.
- **Confirmed prose drift caused by the new local supplier, high confidence:** the published remarks in `def-dependent-choice` say both that AC⇒DC is “not in this library” and that “Nothing in this library proves DC.” The newly authored `lem-ac-supplies-dependent-choice-for-vector-bundle-constructions` now proves exactly AC⇒DC from the published definitions and recursion, so those two sentences will be false when this pair is published (and already fail as a repository-wide inventory description while the draft exists). Required supplier: the new local lemma. Repair strategy: replace the historical inventory claims with a link to the new lemma, while preserving the warning that DC is not a theorem of ZF alone; refresh publication verification. This is semantic/prose drift, not a defect in the definition of DC.

### 1. `def-real-and-complex-topological-vector-bundle`

- Claim/conventions: fixed-rank real or complex bundles; transition order `g_ki=g_kj g_ji`; numeration means supplied linear charts plus a support-subordinate locally finite partition; rank zero and empty base included.
- Sources: Hatcher §1.1 pp.6–8; Milnor–Stasheff §2 pp.14–16.
- Dependencies checked: `def-locally-trivial-fiber-bundle`, `def-invertible-matrix-and-general-linear-group`.
- Check: explicit-path precheck clean (definition, hence no proof contract).
- Open gaps: none. Next: transition-cocycle gluing.

### `lem-ac-supplies-dependent-choice-for-vector-bundle-constructions`

- Claim/conventions: in ZF, AC implies the prescribed-initial-point form of DC. AC chooses a successor from each nonempty successor set, and recursion from the given point produces the required sequence.
- Source locator: Jech, *The Axiom of Choice*, §2.4.1, printed pp.22–23, for the full DC sequence formulation and discussion. The implication with prescribed initial point is derived in the item rather than attributed to an omitted source argument.
- Dependencies examined: `def-axiom-of-choice`, `def-dependent-choice`, and `thm-recursion`. The proof handles coincident successor sets, nonfunctional relations, repetitions, singleton carriers, and the prescribed zeroth term.
- Check: explicit-path precheck, strict selected-item proof contract, rendercheck, and dependency-order placement all pass for the new lemma. Its exact use of AC is the single successor-set choice in step 1.1.
- Open gaps: none. Next: replace the four later-page AC⇒DC edges in their consumers.

### `thm-vector-bundles-glued-from-transition-cocycles`

- Claim/conventions: constructed the quotient bundle for the stated multiplication order; proved the local quotient charts, gauge-change isomorphism, and recovery from every atlas.
- Source locator: Hatcher pp.7–8; Milnor–Stasheff pp.14–20.
- Dependencies examined: `def-real-and-complex-topological-vector-bundle`, `thm-quotient-universal-property`.
- Check: explicit-path precheck passes in canonical four-layer form. Both quotient continuity and both directions of reconstruction/gauge equivalence are explicit.
- Open gaps: none. Next: bundle maps, sections, and subbundles.

### `def-vector-bundle-map-section-subbundle-and-isomorphism`

- Claim/conventions: bundle maps are linear fiberwise and lie over the named base map; subbundles are locally coordinate subspaces; short exact sequences carry local subbundle data.
- Dependencies examined: `def-real-and-complex-topological-vector-bundle`. Source: Hatcher pp.8–11 and Milnor–Stasheff pp.14–24.
- Check: explicit-path precheck clean (definition).
- Open gaps: none. Next: pullback bundles.

### `def-pullback-vector-bundle-and-pullback-section`

- Claim/conventions: pullback is the equalizer subspace of `X × E`; inherited fiber operations, pulled-back charts, canonical map, and pulled-back section are explicit.
- Dependencies examined: the vector-bundle and bundle-map definitions and `def-subspace-topology-top`.
- Check: explicit-path precheck clean (definition); empty preimages and rank zero are covered by the formula.
- Open gaps: none. Next: pullback functoriality.

### `prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism`

- Claim: wrote the identity and composition comparison maps and inverses, then checked naturality, three-map coherence, and section composition coordinatewise.
- Dependency examined: `def-pullback-vector-bundle-and-pullback-section`.
- Check: explicit-path precheck passes; both identity/composition endpoints and rank-zero/empty formulas remain valid.
- Open gaps: none. Next: standard vector-bundle operations.

### `def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles`

- Claim/conventions: gave the actual transition representations for direct sum, tensor, dual, Hom, exterior powers, conjugation, and realification; included `Λ^0`, `k>rank`, and pullback compatibility.
- Dependencies examined: cocycle gluing and canonical pullback functoriality.
- Check: explicit-path precheck clean (definition); zero and over-rank exterior powers are explicit.
- Open gaps: none. Next: bundle metrics.

### `thm-numerable-vector-bundles-admit-bundle-metrics`

- Claim: authored the locally finite weighted Euclidean/Hermitian formula and proved continuity and positive definiteness. The supplied-numeration branch is choice-free.
- AC audit: AC is stated. The preceding local lemma proves the exact `AC => DC` implication used before the published paracompact partition theorem; all relevant dependency IDs were examined.
- Check: explicit-path precheck passes. Empty base is vacuous; rank zero has the unique zero-dimensional positive-definite form.
- Open gaps: none. Next: splitting exact sequences.

### `cor-short-exact-sequences-of-vector-bundles-split-over-the-base`

- Claim: proved the metric orthogonal complement is locally a subbundle, the quotient restricts to a bundle isomorphism, and the resulting splitting depends on the metric.
- Dependencies examined: exact-sequence/subbundle definition and metric theorem.
- AC audit: only obtaining a metric on the paracompact branch inherits AC; the supplied-metric branch is choice-free.
- Check: explicit-path precheck passes; zero-rank kernel or quotient is included by the direct-sum calculation.
- Open gaps: none. Next: finite complement over compact bases.

### `thm-finite-rank-complement-theorem-over-compact-hausdorff-bases`

- Claim: from a finite subordinate partition, constructed the explicit `sqrt(rho_i)` embedding into `F^(mn)` and the continuous projection onto its orthogonal complement.
- Dependencies examined: compact-Hausdorff finite partition theorem, the preceding local `AC => DC` lemma, subbundle definition, and AC definition. The unused general metric dependency was removed from this scaffold.
- Check: explicit-path precheck passes. Empty base and rank zero take `N=0`; nonzero rank has finite `N=mn`.
- Open gaps: none. Next: homotopy invariance.

### `thm-homotopy-invariance-of-vector-bundle-pullback`

- Claim: supplied Hatcher's complete cylinder argument: finite vertical strips, a countable disjoint-union refinement, graph transports, and the locally finite endpoint composite with inverse.
- Dependencies examined: pullback definition, paracompact partition theorem, the preceding local `AC => DC` lemma, AC, and the published arbitrary-numeration countabilization in `thm-principal-bundles-are-classified-by-maps-to-bg`.
- AC audit: AC is stated and used exactly to obtain DC and countabilize the arbitrary partition. The strip and graph transports are finite/local.
- Check: explicit-path precheck passes; both endpoints and noncanonicity are explicit.
- Open gaps: none. Next: frame and associated bundles.

### `def-frame-bundle-and-associated-vector-bundle`

- Claim/conventions: fixed the right action `u·g=u∘g`, the standard left representation in the associated quotient, and checked evaluation against that relation; pullback and numeration compatibility and rank zero are explicit.
- Dependencies examined: vector bundles/maps and the published principal/associated-bundle definitions and local-triviality proposition.
- Check: explicit-path precheck clean (definition).
- Open gaps: none. Next: oriented bundles and positive frames.

### `def-oriented-real-vector-bundle-and-oriented-frame-bundle`

- Claim/conventions: constructed the orientation cover, its section convention, positive determinant test, and principal `GL_n^+` frame bundle. Rank zero has one canonical orientation; the two-sheet assertion is restricted to `n>=1`.
- Dependencies examined: vector-bundle and frame-bundle definitions. Hatcher locator: pp.25–27.
- Check: explicit-path precheck clean (definition). No metric and no choice principle is used.
- Open gaps: none. Next: SO(n)-reductions.

### `prop-orientation-is-equivalent-to-an-so-n-reduction`

- Claim: proved both maps between orientations and positive orthonormal-frame reductions, checked they are inverse, and described natural transport under a nonisometric oriented bundle isomorphism by polar normalization.
- Local supplier added before use: the preceding oriented-bundle definition now defines an `H`-reduction by extension of structure group; its manifest dependency was registered.
- Check: explicit-path precheck passes; rank zero is the singleton case. A supplied metric makes the argument choice-free.
- Open gaps: none. Next: Stiefel/Grassmann spaces and tautological bundles.

### `def-stiefel-space-grassmannian-and-tautological-bundle`

- Claim/conventions: defined finite Stiefel spaces, quotient Grassmannians, graph charts, the associated tautological bundle, stable coordinate inclusions, and the final weak topology.
- Scaffold repair: the definition no longer assumes the stable colimit is already a CW complex; that conclusion is supplied later by the Schubert theorem.
- Dependencies examined: frame/associated bundles, transition gluing, and the definition of weak CW topology.
- Check: explicit-path precheck clean (definition); `n=0` is a point with the zero tautological bundle.
- Open gaps: none. Next: oriented Grassmannians.

### `def-oriented-grassmannian-and-tautological-oriented-bundle`

- Claim/conventions: constructed `Gr_n^+` as `V_n/SO(n)`, descended the tautological orientation, and fixed the stable model notation `BSO(n)`.
- Boundary repair: the forgetful map is a double cover only for `n>=1`; for `n=0` both spaces are points.
- Dependencies examined: stable Grassmannian and oriented-frame definitions.
- Check: explicit-path precheck clean (definition).
- Open gaps: none. Next: contractibility of stable Stiefel space.

### `thm-stable-stiefel-space-is-contractible`

- Claim: proved explicit odd- and even-coordinate displacement homotopies by Gram-normalizing `(1-s)I+sQ`, with injectivity checked from the largest finite coordinate; rotating the odd-coordinate frame into a fixed even-coordinate frame gives the contraction.
- Dependency examined: stable Stiefel/weak-colimit definition. Finite stages are proved compact Hausdorff with closed inclusions; Franklin–Thomas Property 4, printed p.113, supplies the product-with-interval weak topology. Stage bounds and ordinary product-interval continuity are explicit.
- Check: explicit-path precheck passes. Rank zero is already a point; no AC, compact-image lemma, cellular approximation, or Whitehead theorem is used.
- Open gaps: none. Next: embeddings and Gauss maps.

### `lem-a-bundle-embedding-produces-its-grassmannian-classifying-map`

- Claim: proved continuity via the Gram projection, wrote the inverse to the tautological pullback isomorphism, constructed the square-root-weighted embedding from a supplied numeration, and separately proved countable and compact refinements.
- AC audit: AC is stated. It is used for the published arbitrary-index countabilization and inherited by the compact complement theorem; supplied locally finite coordinates and the finite embedding-to-Gauss-map clauses are constructive.
- Dependencies examined: tautological definition, partition definition, published principal-bundle countabilization, compact complement theorem, AC.
- Check: explicit-path precheck passes; empty and rank-zero compact cases use `N=0`.
- Open gaps: none. Next: uniqueness up to homotopy.

### `lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely`

- Claim: forward direction uses endpoint invariance. Reverse direction moves the two image-plane maps to orthogonal odd/even coordinate blocks and interpolates their identified bundle embeddings; the norm calculation proves every intermediate map is injective.
- Dependencies examined: homotopy invariance, embedding/Gauss lemma, explicit stable Stiefel displacement, and AC.
- AC audit: only the forward endpoint theorem inherits AC. Reverse, both iff directions' endpoints, `n=0`, and empty base are explicit.
- Check: explicit-path precheck passes.
- Open gaps: none. Next: stable Grassmannian classification.

### `thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians`

- Claim: defined the pullback map, proved universal tautological numerability, well-definedness for both paracompact and explicitly numerable CGWH bases, surjectivity by the embedding lemma, injectivity by odd/even interpolation, naturality, and the BO/BU model statement.
- Source locator added to the proof: Hatcher Appendix Proposition 1.19, pp.35–36, proves the weak sequential compact-stage union is paracompact; the published partition theorem then numerates the universal tautological bundle.
- AC audit: AC is stated and used through the preceding local lemma for the partition theorem's DC input, and directly for arbitrary numeration countabilization and the published equivariant endpoint transport. Nonnumerable bundles are explicitly excluded.
- Check: explicit-path precheck passes; both iff directions, `n=0`, empty base, and the arbitrary-CGWH qualification are explicit.
- Open gaps: none. Next: oriented classification by BSO.

### `thm-oriented-real-vector-bundles-are-classified-by-bso`

- Claim: oriented Gauss maps transport the given fiber orientation; the forward homotopy transport stays in positive-determinant charts; the reverse interpolation transports one fixed orientation through all image planes. Naturality and the SO-reduction reading are explicit.
- Dependencies examined: stable real classification, orientation/SO reduction, oriented tautological bundle, AC.
- AC audit: exact inheritance is the stable theorem's numeration/countabilization. `n=0` is the singleton and both iff directions are written.
- Check: explicit-path precheck passes.
- Open gaps: none. Next: Schubert cells.

### `def-schubert-cells-in-real-and-complex-grassmannians`

- Claim/conventions: defined the incidence equalities, unique pivot-normalized basis, exact free-coordinate count `sum(a_i-i)`, real/complex dimensions, and partition dictionary.
- Dependency examined: finite/stable Grassmannian definition. Sources: Hatcher pp.33–35; Milnor–Stasheff pp.73–80.
- Check: explicit-path precheck clean (definition); `n=0` corresponds to the empty symbol and zero-dimensional cell.
- Open gaps: none. Next: finite and stable Schubert CW structures.

### `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`

- Claim: constructed Hatcher's compact orthonormal-echelon characteristic balls, proved boundary pivots only decrease, performed the finite cell-dimension attachment argument, and passed to the weak stable union. For a subcomplex of dimension at most `r`, the formula `a_i-i <= d(a) <= r` now explicitly bounds every pivot by `i+r`, so finite-stage containment is derived rather than assumed.
- Dependencies examined: Schubert-cell coordinates and the full CW definition. Sources: Hatcher Proposition 1.17 pp.33–35; Milnor–Stasheff §6 pp.73–80.
- Check: explicit-path precheck passes. Empty symbol/rank zero, real versus complex dimension, closure finiteness, finite-stage inclusions, and finite-subcomplex containment are explicit.
- Open gaps: none. Next: clutching construction.

### `def-clutching-construction-for-bundles-over-a-suspension`

- Claim/conventions: defined the two-cone quotient with `(a,v)_+ ~ (a,g(a)v)_-`, supplied collar transition charts, fixed the Hopf sign convention, and showed swapping charts inverts `g`.
- Dependencies examined: cocycle gluing and reduced suspension/cones.
- Check: explicit-path precheck clean (definition); rank zero gives the unique bundle.
- Open gaps: none. Next: clutching classification and stable ranges.

### `thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range`

- Claim: proved disk triviality by a finite choice-free construction: a strict-support metric partition embeds the radial pullback in a finite trivial bundle, and a uniform subdivision makes successive image-plane projections bundle isomorphisms. Then extracted every clutching map, proved both directions of the exact disk-gauge equivalence, and handled homotopy. Polar deformation plus the two sphere fibrations yields `q<=2n` complex and `q<n` real stability.
- Real qualification: for `q>1`, oriented classes lie in `GL_n^+` and unoriented classes are reflection-conjugacy orbits; `q=1` remains the component/orbit case. Complex `q>=2`, rank zero, and the loop basepoint issue are explicit.
- Dependencies examined: clutching construction and the fibration long exact sequence. AC-bearing general homotopy/complement dependencies were removed; the proof uses only finite data.
- Check: explicit-path precheck passes.
- Open gaps: none. Next: oriented clutching.

### `thm-oriented-clutching-classifies-oriented-bundles-over-spheres`

- Claim: chose oriented hemisphere trivializations, proved positive gauge equivalence reduces exactly to homotopy, restricted polar deformation to `GL_n^+ -> SO(n)`, and calculated orientation reversal as `g -> r g r^-1`.
- Dependencies examined: general clutching theorem, oriented-frame definition, and SO-reduction proposition.
- Check: explicit-path precheck passes; `k=1` and `n>=1` are explicit; the finite construction uses no AC.
- Open gaps: none. Next: companion examples, beginning with the circle line bundles.

### `ex-mobius-and-trivial-real-lines-over-the-circle`

- Calculation: normalized the two `S^0` clutching values, proved the relative-sign invariant survives interval gauges, and identified `(1,1)` with the cylinder and `(1,-1)` with the Möbius quotient.
- Dependency examined: full clutching classification, especially its `q=1` orbit clause.
- Check: explicit-path precheck passes; witnesses, failed isomorphism invariant, and exhaustion are explicit.
- Open gaps: none. Next: tautological projective lines.

### `ex-tautological-real-and-complex-lines-over-projective-space`

- Calculation: identified projective points with one-planes, matched the total-space pairs exactly, and computed the Gauss map as the finite-stage inclusion and then the stable identity.
- Dependency examined: Stiefel/Grassmannian/tautological definition. The unnecessary AC-bearing embedding/classification dependencies were removed.
- Check: explicit-path precheck passes; finite and infinite real/complex cases are all explicit and choice-free.
- Open gaps: none. Next: the Hopf clutching sign.

### `ex-hopf-line-bundle-over-the-two-sphere-by-clutching`

- Calculation: on the affine disks used frames $s_+(z)=(z,1)$ and $s_-(z^{-1})=(1,z^{-1})$; the equality $s_+(z)=z s_-(z^{-1})$ proves that the fixed plus-to-minus coefficient convention gives $g(z)=z$.
- Dependencies examined: the clutching convention and the direct identification of the tautological projective line. Hatcher locator: Example 1.10, printed pp.22–23.
- Check: explicit-path precheck passes. Swapping charts gives $z^{-1}$, which is also the scalar transition for the dual line; the sign is therefore derived rather than inferred.
- Open gaps: none. Next: complex bundles over the circle.

### `ex-all-complex-vector-bundles-over-the-circle-are-trivial`

- Calculation: polar deformation followed by unitary diagonalization supplies an explicit path from every matrix in $\operatorname{GL}_n(\mathbb C)$ to the identity; the two values of an $S^0$ clutching map are contracted independently.
- Dependency examined: the full $q=1$ clutching statement. The identity clutch is identified with $S^1\times\mathbb C^n$.
- Check: explicit-path precheck passes. Rank zero is forced by $\operatorname{GL}_0(\mathbb C)=\{I\}$, and the failure of the argument for $\mathbb R^\times$ records the Möbius contrast.
- Open gaps: none. Next: rank-zero and empty-base classification.

### `ex-rank-zero-and-empty-base-vector-bundle-classification`

- Calculation: every rank-zero projection is locally, hence globally, the identity $X\to X$ up to its forced bundle isomorphism; $\operatorname{Gr}_0$ is a point. Over the empty base the total space and every map out of the base are forced.
- Dependencies examined: the vector-bundle definition and the rank-zero clause of the stable Grassmannian definition. No classification theorem is used.
- Check: explicit-path precheck passes. The distinction between a literally chosen total space and its unique isomorphism class is explicit; arbitrary rank over the empty base is covered.
- Open gaps: none. Next: oriented two-plane bundles over $S^2$.

### `ex-oriented-two-plane-bundles-over-s-two-by-winding-number`

- Calculation: the rotation homeomorphism $\mathbb R/\mathbb Z\cong\operatorname{SO}(2)$ converts oriented clutching classes into integer winding numbers. Conjugation by $\operatorname{diag}(1,-1)$ sends $R(t)$ to $R(-t)$ and hence $m$ to $-m$.
- Dependencies examined: oriented clutching, including its orientation-reversal clause, and the proved degree isomorphism for the circle.
- Check: explicit-path precheck passes. Realization and uniqueness for every integer and the $m=0$ trivial bundle are explicit; no AC is used.
- Open gaps: none. Next: the lack of a finite complement for the tautological line over $\mathbb RP^\infty$.

### `cex-the-tautological-line-over-rp-infinity-has-no-finite-rank-complement`

- Counterexample: a hypothetical $\gamma\oplus\eta\cong\underline{\mathbb R}^{r+1}$ produces a classifying map through $\mathbb RP^r$. Stable classification would make its composite homotopic to the identity, while degree $r+1$ mod-two homology makes the composite zero and the identity nonzero.
- Scaffold repair and dependencies examined: the projective-line example, stable classification, stable Schubert CW structure, the published finite-$\mathbb RP^m$ boundary calculation, cellular comparison, homotopy invariance, CW/CGWH definitions, and AC. The new finite-projective-space supplier is necessary to prove that the mod-two differentials vanish.
- AC audit: the statement assumes AC. Its only use is the injective half of stable classification; the embedding and cellular contradiction are choice-free. The proof checks directly that $\mathbb RP^\infty$ is CGWH and uses the classification proof's paracompactness result.
- Check: explicit-path precheck passes after adopting its canonical prerequisite ordering. The witness and failed conclusion are explicit, including $r=0$ via degree $1$.
- Open gaps: none. Next: the long-line nonnumerable counterexample.

### `cex-vector-bundle-classification-without-numerability-can-fail`

- Counterexample: Nyikos supplies a connected Hausdorff differentiable nonmetrizable long line. A hypothetical numeration of its tangent line gives a continuous fiber inner product; the locally proved length metric is finite, positive, and induces the manifold topology, a contradiction. A pullback of the numerable stable tautological line would numerate $TL$, so no such pullback exists.
- Dependencies examined: the earlier numerable-bundle metric theorem, stable classification's construction of the universal numeration, and AC. The forbidden B-leaf dependency on the published principal-bundle example was removed after the repository dependency gate exposed it.
- AC audit: the contradiction from a supplied numeration through the length metric is choice-free. AC is stated and used only for the stable Grassmannian tautological numeration that excludes a pullback.
- Source locator: Nyikos, *Topology Proceedings* 4 (1979), printed pp.271–272 for the connected Hausdorff differentiable one-manifold and nonmetrizability statements; the path-metric argument is derived locally rather than attributed to Nyikos.
- Check: explicit-path precheck passes after canonical phase renumbering. The exact witness, failed conclusion, CGWH qualification, metric-topology proof, and exclusion from the second-countable manifold convention are explicit.
- Open gaps: none. All 33 originally assigned items and the one necessary local supplier are authored and registered; final validation is recorded below.

## Handoff

### Completed inventory

The A page contains 26 items, in prerequisite order:

1. `def-real-and-complex-topological-vector-bundle`
2. `lem-ac-supplies-dependent-choice-for-vector-bundle-constructions` (new local supplier)
3. `thm-vector-bundles-glued-from-transition-cocycles`
4. `def-vector-bundle-map-section-subbundle-and-isomorphism`
5. `def-pullback-vector-bundle-and-pullback-section`
6. `prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism`
7. `def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles`
8. `thm-numerable-vector-bundles-admit-bundle-metrics`
9. `cor-short-exact-sequences-of-vector-bundles-split-over-the-base`
10. `thm-finite-rank-complement-theorem-over-compact-hausdorff-bases`
11. `thm-homotopy-invariance-of-vector-bundle-pullback`
12. `def-frame-bundle-and-associated-vector-bundle`
13. `def-oriented-real-vector-bundle-and-oriented-frame-bundle`
14. `prop-orientation-is-equivalent-to-an-so-n-reduction`
15. `def-stiefel-space-grassmannian-and-tautological-bundle`
16. `def-oriented-grassmannian-and-tautological-oriented-bundle`
17. `thm-stable-stiefel-space-is-contractible`
18. `lem-a-bundle-embedding-produces-its-grassmannian-classifying-map`
19. `lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely`
20. `thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians`
21. `thm-oriented-real-vector-bundles-are-classified-by-bso`
22. `def-schubert-cells-in-real-and-complex-grassmannians`
23. `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`
24. `def-clutching-construction-for-bundles-over-a-suspension`
25. `thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range`
26. `thm-oriented-clutching-classifies-oriented-bundles-over-spheres`

The B page contains all eight assigned items:

1. `ex-mobius-and-trivial-real-lines-over-the-circle`
2. `ex-tautological-real-and-complex-lines-over-projective-space`
3. `ex-hopf-line-bundle-over-the-two-sphere-by-clutching`
4. `ex-all-complex-vector-bundles-over-the-circle-are-trivial`
5. `ex-rank-zero-and-empty-base-vector-bundle-classification`
6. `ex-oriented-two-plane-bundles-over-s-two-by-winding-number`
7. `cex-the-tautological-line-over-rp-infinity-has-no-finite-rank-complement`
8. `cex-vector-bundle-classification-without-numerability-can-fail`

The manifest, both page frontmatters, all item frontmatters, and the proof-contract scope agree exactly on these 34 IDs and their dependency order. The shared K-theory sibling remains at 20 A-page and 6 B-page items; none of its rows or files was edited.

### Checks actually run

- Explicit-path precheck: 24 proof-bearing items checked, 0 failing; the ten definitions were supplied in the same explicit 34-item invocation and correctly skipped as non-proof-bearing.
- Rendercheck: all 34 owned items and both owned library pages, 36 files total, pass real KaTeX and YAML parsing.
- Citecheck: 34 items scanned, no recognized elementary move missing its stating home.
- Owned-pair content policy: 34 scoped items, 0 errors, 0 warnings.
- Strict proof contract: 34/34 checked, 0 errors, 0 warnings. Boundary audit: 272 item-specific rows, 47 `not_applicable`, no template cluster and no contradicted disposition. Citation fidelity: 73 exact citations, no missing quote and no widening candidate. Finite smoke: no applicable finite obligations and no errors.
- Shared batch manifest dependencies: 60 items, 0 missing or malformed dependency arrays. Owned page/manifest/frontmatter/contract parity passes with A=26 and B=8.
- Coverage checklist: two shared-batch A pages, 50 harvested results, 0 errors, 0 warnings. Source-fetch check: all 8 batch sources fetch-verified and resolved, including the newly recorded Jech source.
- `validate-plan research/plan-spec.json`: exit 0; the repository plan is acyclic and consistent, with only existing unrelated redundant-prerequisite warnings.
- `depcheck --quiet`: exit 0; all references resolve, there are no cycles and no draft items occur on published pages. Existing unrelated `cited-not-in-deps` warnings remain.
- `fwdcheck --quiet`: exit 0 after inserting the local AC⇒DC supplier; every forward reference is declared and no spine-forward dependency remains.
- `extcheck`: exit 0 with existing unrelated published external-proof warnings; every recorded-not-proved statement remains a cited remark and every consequence is marked.
- Frontier dependency ledger refreshed. Batch 4's cross-batch input is `[]`; no hidden or unresolved cross-batch item edge was found.

### Published findings requiring serial reconciliation

The owner/serial reconciler must carry both confirmed findings from the earlier section into the canonical published-consumer-supplier ledger; this author did not race that shared ledger:

- Item `cex-principal-bundle-classification-can-fail-without-numerability` on page `obstruction-theory-postnikov-towers-and-classifying-spaces-examples`: rename `## Claim` to `## Statement refuted` and refresh its verification/contracts.
- Item `def-dependent-choice` on page `countability-and-uncountability`: replace the now-stale claims that AC⇒DC is not proved in the library with a link to `lem-ac-supplies-dependent-choice-for-vector-bundle-constructions`, while retaining the distinction between ZF and ZF+AC.

### Open workflow obligations

1. The owner `proceed` receipt at hash `570beac9d1e72ca88f4ae0d961c434a3067c45f581e056f8829a697a24b93f81` predates the repaired statements and new local supplier. The current scope check exits 1 with the exact owner-held reason: “owner proceed; apply amendments and record proceed for current scope.” This author did not override it. All 34 files are auditor-created relative to the immutable pre-author baseline, so no Step 3 self-review, `record-item`, owner flag, judge verdict, or audit stamp was manufactured; the engine's post-dispatch created-item certification applies, but a current owner scope ruling remains required unless the engine emits the corresponding hash-bound scope certification.
2. Pre-splice `research/plan-spec.json` still has empty item arrays for both owned pages. Step 4 must splice 26 A-page and 8 B-page IDs. The shared batch notes still say 20+7 for this pair and 53 total; they must be reconciled to 26+8 and 60 total while retaining the untouched K-theory count 20+6. Their statements that the long-line item depends on the published principal-bundle counterexample and that no published defect was found must also be replaced by the audited results above.
3. Repository status currently reports active run `frontier-23`, whereas this explicit dispatch and all written artifacts name `phase-2-next-18`. Git HEAD is `98dd9d261`. The operator should reconcile that run-selection context before attempting an automated transition; no `.autopilot` state was edited here.

There are no open mathematical, source-retrieval, render, contract, dependency, or cross-batch gaps in this pair.

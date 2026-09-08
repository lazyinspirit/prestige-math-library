# Step 8 adjudication — group f

Run: `phase-2-wave-1`  
Batches: `7`, `8`  
Pages read in full: `simplicial-subdivision-and-simplicial-approximation`, `simplicial-subdivision-and-simplicial-approximation-examples`, `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface`, `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface-examples`  
Owned items read in full: 80 of 80

The four current page files, all 80 owned item files, the Step-7 digest, and the exact published or owned dependencies needed by the ten rejections were opened. The group has no cross-group dependency seam, and no rejection exposed a cross-group or published-item defect.

## Adjudications

| Item | Exact rejection | Pre-edit guard SHA-256 | Outcome | Decision |
|---|---|---|---|---|
| `def-classical-affine-algebraic-set-with-empty-boundaries` | `gpt-5.6-terra` / `b4f7e413c3813136590ba3b8f7928ef460294a45dba671d9aa300b67bf7209d0` | `d2cbb2c7eb9af08347b0fc12eb766af2c7b5a11ace37e3b99a5e69deb293472a` | `confirmed_fatal` (`other`) | The definition gave `V` the domain of subsets of the polynomial ring but then supplied ring elements `0` and `1`. The boundary formulas were therefore ill-typed until singleton-set abbreviations were declared. |
| `def-classical-affine-variety-morphism` | `gpt-5.6-terra` / `20da8e496578a9353d26e8a60cb75f87687f6779edab5f4244815b82209a7160` | `17ff40ecd5504cd80e16426783d141c20eac3d1def3014b399334a47a302eae1` | `confirmed_fatal` (`other`) | The inverse of a bijection `U -> Y` has the generally nonaffine open `U` as target, outside the preceding affine-target morphism definition. The isomorphism clause was ill-typed. |
| `def-classical-birational-equivalence` | `gpt-5.6-terra` / `d8c8502e731c09ddc51d479de26e474250017343059ef1c08707bb6b6ebde83d` | `78502762a893a567720a5c8e8ade627e8d9ee693568e50fc4ecf19b7d56c5707` | `false_positive` | The item promises a result in “the following theorem”; the immediately following owned item is `thm-classical-birational-equivalence-iff-function-fields-isomorphic`, whose Statement gives exactly the promised equivalences and whose proof treats affine and atlas cases. The definition does not claim to prove that theorem inside itself. |
| `def-classical-germ-and-local-ring` | `gpt-5.6-terra` / `988b6590fa11e5294e924812e43cb5059aba8ae10cbafd9c11779c1753c1dcf0` | `8227b65fbd137f7f9bb2ad0b59455d8f153c9f044e9b0ccb7794d8e8b39a222d` | `false_positive` | The definition proves the germ algebra well-defined and explicitly defers locality to the immediately following `thm-classical-affine-local-ring-is-localization`. That theorem identifies the stalk with `A_{m_x}` and invokes the exact published localization-at-a-prime theorem for its unique maximal ideal. Naming the standard object is accurate. |
| `def-classical-integral-affine-atlas-and-chartwise-morphism` | `gpt-5.6-terra` / `2aab472731d44ea6b017d56bfc634f9b3d35a00101590e23e930adb2c2a2082b` | `13e6e8a03d13e2a16e8a766ca0f02226589c92481979113d99ac704eed0fe95e` | `false_positive` | The rejection substitutes “affine algebraic set” for the actual chart condition. The item requires every chart to be homeomorphic to a **classical affine variety**, and `def-classical-affine-variety-interface` defines that term to mean nonempty and irreducible. The same paragraph proves the affine separation condition before concluding that one affine chart is an example. |
| `def-finite-convex-cell-complex-and-linear-subdivision` | `gpt-5.6-terra` / `d9e8cdab66fa2f2ea185013fdfecebb1c6cf61b58bf77da8dc1aad5d37bf2d0b` | `3f98696fb30b0dc5e95cd9baff7569c013ac14707b9df8f089e7c341e488fc27` | `confirmed_fatal` (`logic`) | The asserted face equivalence included the empty face, but the empty face of a zero-dimensional cell presented by no inequalities cannot arise by turning a defining inequality into an equality. |
| `def-oriented-simplicial-subdivision-chain-map` | `gpt-5.6-terra` / `d0905c8d86a91413dfd6e41eafdd12e15e6581ad66817f2e1be6071cc81800e8` | `7f75dd0276054d27e7930c350bab61bc114c11d77f8c223718dfe90a7586f518` | `confirmed_fatal` (`other`) | The title called `S` a chain map while the body deliberately defined only a graded operator and deferred `dS=Sd` to the next lemma. The title was an overstatement even though the body warned against reading it that way. |
| `lem-finite-convex-cell-complexes-admit-compatible-triangulations` | `gpt-5.6-terra` / `2fedc5bbd861f4bc07dc85a887872ed852ec1e6d629b7a9b28d0e255571da578` | `3b205edb23fcb7364a1f065b9b4a4fa3826ca969a473c92274770e38536e0d73` | `confirmed_nonfatal` | F1's shorthand omits the supplier's nonempty bounded qualifiers, but the Given object is a finite convex cell complex, whose cells are definitionally nonempty and bounded. Step 2.1 applies compactness only to such a cell. The exact dependency statement supplies the needed restricted result, so the omission is a locally closed wording gap rather than a fatal inference. |
| `thm-classical-principal-open-is-affine-variety` | `gpt-5.6-terra` / `a44d17099d5d48552b0c91e041a68771b9511e3ca455c28db9b030c2b8409ee6` | `3968ba9a8ed777d3d616aaacdba6d871cddea0ab4c067ff4a92d39bef34f7ccc` | `false_positive` | Step 3.1 does not infer morphismhood merely from coordinate pullbacks. F9 says every global regular function on the affine algebraic set `Z` belongs to its coordinate ring, and F10 says those elements are polynomial functions in the coordinate classes. Their pullbacks are therefore regular, exactly meeting the affine-target definition; F8 then supplies the all-open form. |
| `thm-classical-rational-map-maximal-domain-affine-target` | `gpt-5.6-terra` / `0036184087f3faa7a909228c2b02be3f7fe8114f996f22510b0842d2b233b93e` | `8d47e5fe9d019cf30412e671159761b3dfccb6869dc56e765bb3a6db4102df3a` | `false_positive` | The item directly depends on `def-classical-rational-map`, which defines equivalence as agreement on a nonempty open of the common domain. F2 proves that exact relation is an equivalence relation. Two representatives in one equivalence class are therefore related, by elementary unfolding of “equivalence class,” and F3 extends their agreement to the whole overlap. |

## Fatal repairs and rejudge targets

### `def-classical-affine-algebraic-set-with-empty-boundaries`

- Declared `V(0):=V({0})` and `V(1):=V({1})` before using the two abbreviations. This preserves `V(empty)=V(0)=k^n` and `V(1)=empty`, including `n=0`.
- Direct dependencies remain `def-multivariate-polynomial-ring-by-iteration`, `def-polynomial-evaluation-and-root`, and `def-algebraically-closed-field`.
- Synchronized the owned batch-8 manifest and the downstream owned contract quotations.
- Post-repair guard SHA-256: `851474c213d9267c028b2daa26e40ffd1206ed04ef5f86607e12f414c5a88d75`.
- Rejudge target: `def-classical-affine-algebraic-set-with-empty-boundaries`.

### `def-classical-affine-variety-morphism`

- Moved the open-target notion before the isomorphism clause and defined an isomorphism between open subsets as a bijection whose two directions are locally regular morphisms. This makes the inverse's target well-typed without changing the affine-target global-section test.
- Direct dependencies remain `def-classical-regular-function-on-open-set` and `lem-classical-regular-functions-locality-and-gluing`.
- Synchronized the owned batch-8 manifest and downstream owned contract quotations.
- Post-repair guard SHA-256: `9605d604e516236a62adfabc3815babadb57a79eedb968cf4d9bb5ab85476ce8`.
- Rejudge target: `def-classical-affine-variety-morphism`.

### `def-finite-convex-cell-complex-and-linear-subdivision`

- Restricted the active-inequality equivalence to nonempty faces; the separately stipulated empty face remains a face, including for a zero-cell with no defining inequalities.
- Dependencies and the batch-7 manifest summary remain unchanged; regenerated the owned contract consumer of the corrected Definition.
- Post-repair guard SHA-256: `354ae0abfb28b7eaa4e1ef1a5e413a5f08617019efc2d94405a5a94ad5335ed8`.
- Rejudge target: `def-finite-convex-cell-complex-and-linear-subdivision`.

### `def-oriented-simplicial-subdivision-chain-map`

- Retitled the item “Oriented simplicial subdivision operator” and replaced the self-contradictory ID disclaimer by the exact statement that no chain-map property is assumed. The established item ID is unchanged.
- Synchronized the owned batch-7 manifest title. The citable Definition remains a graded-operator construction; `lem-oriented-simplicial-subdivision-commutes-with-boundary` remains the chain-map proof.
- Post-repair guard SHA-256: `83bd70c1173aff45ccc905788505e9bbfc55aae6c52dd0cd9820cb51ea7f2d81`.
- Rejudge target: `def-oriented-simplicial-subdivision-chain-map`.

The exact rejudge target set is therefore:

1. `def-classical-affine-algebraic-set-with-empty-boundaries`
2. `def-classical-affine-variety-morphism`
3. `def-finite-convex-cell-complex-and-linear-subdivision`
4. `def-oriented-simplicial-subdivision-chain-map`

## Reader warning

- `s8a-e7e89165bfef0da5b5726621` on `ex-a-compact-set-in-an-infinite-non-locally-finite-realization-still-meets-finitely-many-cells`: `nonfatal`. Under nonattainment, for every `x` with `x_{v_n}<m_n`, the Archimedean property gives `k` with `1/k<m_n-x_{v_n}`, so the displayed opens cover `C`; a finite subcover gives the strict bound used. This is an elementary one-line unpacking, exactly the warning's `gap-a-reader-closes` classification. No edit is licensed.

## Sources consulted

- [J. S. Milne, *Algebraic Geometry*, v6.10](https://www.jmilne.org/math/CourseNotes/AG.pdf), §3b–e, PDF pp. 59–67: germs form the stalk algebra; in the algebraic cases it is local; morphisms of ringed spaces are defined on arbitrary open ringed spaces; affine morphisms are characterized by regular coordinate/global-function pullback. This supports the morphism repair and the nonfatal/false-positive dispositions for the germ and principal-open objections.
- [J. S. Milne, *Algebraic Geometry*, v6.10](https://www.jmilne.org/math/CourseNotes/AG.pdf), §5l, PDF p. 116 (printed p. 117): rational maps are equivalence classes of regular maps on dense opens; their largest domain is the union of representative domains; birational maps have rational inverses, and Proposition 5.39 identifies birational equivalence with function-field isomorphism. This supports the rational-map and birational dispositions.
- [C. P. Rourke and B. J. Sanderson, *Introduction to Piecewise-Linear Topology*](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf), Chapter 2, pp. 13–16, especially 2.7 and 2.9: cells carry the empty face as a separate convention; finite cell complexes contain all faces; compatible coning yields a simplicial subdivision. This supports the empty-face repair and the triangulation disposition.
- Current exact dependencies were also opened directly, including `def-classical-affine-variety-interface`, `thm-classical-affine-local-ring-is-localization`, `thm-classical-birational-equivalence-iff-function-fields-isomorphic`, `def-classical-rational-map`, `lem-classical-rational-map-equivalence-transitive`, `lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex`, the localization and function-field interfaces, and the full topology dependency set named by the owned items.

## Alerts, scope additions, and blockers

- Incoming Step-7 warning: one, disposition recorded above.
- Incoming or outgoing cross-group alerts: none.
- Published-item repairs: none.
- New supporting lemmas or Step-8 scope additions: none.
- Frontier-ledger additions: none; no changed dependency crosses a batch boundary.
- Mathematical blockers: none.

## Validation

- Pre-edit hash audit: pass. All ten adjudicated items exactly matched their `pre-step8` touch-ledger hashes before repair.
- Post-edit exact `itemHashGuard` audit: pass. The four repaired digests are the values recorded above and in their defect-ledger rows; the six nonfatal/false-positive items retain their full pre-edit guard digests.
- Rejection closure: pass. The live judge ledger contains ten `keep:false` tuples on the 80 owned items, and all ten exact `(id, model, context_sha256)` tuples have adjudication rows.
- Rendering and citation syntax: pass. `rendercheck` and focused `citecheck` accepted all four repaired items with no YAML, rendering, KaTeX, or citation errors.
- Content policy: pass for batches 7 and 8: 80 scoped items, zero errors, zero warnings.
- Strict proof contracts: pass, 31/31 entries for batch 7 and 49/49 for batch 8. The affected owned contract entries were regenerated after the repairs.
- Citation fidelity: pass across both owned batches: 207 citations, none missing, and no widening candidates.
- Dependency and plan structure: `depcheck --quiet` had no hard failure; it reported 473 existing repository warnings. `validate-plan` found the declared order acyclic, with no item cycles, forward dependencies, B-page dependencies, or unresolved IDs among 934 pages.
- Owned splice synchronization: pass for all four group-f pages after the batch-7 and batch-8 mechanical updates. The final whole-run `splice-plan --verify` still reports seven pages in batches 1, 3, 4, 6, 9, and 10 changed by other in-flight groups; none is owned by group f.
- Step-8 scope: pass: 7 groups scoped, 402 items partitioned, zero open rejections, and 2/2 reader warnings or alerts dispositioned.
- Defect ledger: `validate` and the adjudication/reader-decision `check` both pass for all 72 current-run rows with zero errors. The four group-f fatal defects are rows `p2w1-f-step8-001` through `p2w1-f-step8-004`.
- Step-8 edit guard: pass against `pre-step8`: 15,818 items at baseline, 26 changed, zero created or deleted, and 26/26 changes licensed.
- Rejudge and stage transition: not run. Those remain engine-owned. A supplementary read-only coverage probe could not resolve context hashes because this adjudication lane has no configured runner; it made no state change and was not used as a gate.

No group-f obligation or mathematical blocker remains. The engine's next action is the targeted rejudge of the four items listed above.

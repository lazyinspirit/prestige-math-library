# Step 3a reader report — batch 66

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Review date: 2026-10-21

## Opened inventory

Assigned pages:

- `library/knot-theory/cyclic-branched-covers-and-knot-determinants.md`
- `library/knot-theory/cyclic-branched-covers-and-knot-determinants-examples.md`

The A-page requirements were opened: `knot-exteriors-and-peripheral-systems`, `seifert-matrices-and-the-alexander-module`, and `alexander-polynomial-from-seifert-matrices`.

All twelve assigned items were opened in dependency order:

1. `lem-square-integer-cokernel-finiteness-and-order`
2. `lem-cyclic-cover-linking-form-inverse-matrix`
3. `def-cyclic-branched-cover-of-a-knot`
4. `lem-cyclic-branched-cover-homology-is-alexander-module-coinvariants`
5. `lem-branched-cover-surgery-presentation-from-seifert-surface`
6. `lem-cyclic-branched-cover-seifert-block-matrix`
7. `lem-double-branched-cover-homology-from-seifert-matrix`
8. `ex-knot-kt-11-worked-cases`
9. `lem-cyclic-cover-order-root-product-and-rational-sphere-test`
10. `thm-knot-determinant-is-order-of-double-cover-homology`
11. `thm-knot-cyclic-cover-order-from-alexander-polynomial`
12. `cex-knot-kt-11-boundary-case`

Direct supplier items named by the assigned items were opened: `def-oriented-link-in-s-three-and-ambient-isotopy`, `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`, `thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere`, `def-one-variable-alexander-module-of-an-oriented-link`, `thm-mayer-vietoris-sequence-in-singular-homology`, `def-axiom-of-choice`, `def-knot-exterior`, `lem-knot-tubular-exterior-and-boundary`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `prop-the-first-hurewicz-map-in-degree-one-is-abelianization`, `def-covering-map-and-evenly-covered-neighbourhoods`, `thm-classification-of-connected-covering-spaces`, `def-regular-covering`, `thm-regular-covering-characterizations`, `cor-deck-group-of-a-regular-covering`, `def-deck-transformation-and-deck-group`, `prop-singular-homology-is-invariant-under-deformation-retracts`, `def-oriented-seifert-surface`, `def-knot-seifert-pairing-and-matrix`, `def-countable-choice`, `def-countable-choice-principle-for-foliation-pair`, `thm-choice-implies-dependent-implies-countable-choice`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `lem-seifert-pairing-well-defined`, `thm-poincare-lefschetz-duality`, `thm-long-exact-sequence-of-a-pair-in-singular-homology`, `def-alexander-polynomial-from-the-first-elementary-ideal`, `thm-seifert-matrix-presents-knot-alexander-module`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `lem-seifert-matrix-skew-part-is-surface-intersection`, `lem-square-seifert-presentation-and-alexander-normalization`, and `thm-every-oriented-knot-bounds-a-seifert-surface`. The central Seifert-presentation chain was followed through `lem-knot-infinite-cyclic-cover-cut-and-paste-presentation` to `lem-seifert-cut-open-cover-alexander-module-presentation` (batch 61).

The twelve batch-66 proof contracts were inspected for their assigned rows, derivation inventories, boundary cases, and unresolved-obligation fields. All proof-bearing rows are marked complete and have no listed unresolved supplier checks or obligations; the definition row is marked not applicable. These records were treated as evidence, not as mathematical verdicts.

## Assigned-item review

No confirmed mathematical defect was found in the twelve assigned carriers. The cokernel reduction and Smith-style diagonal argument in `lem-square-integer-cokernel-finiteness-and-order` are valid, including the empty and singular cases. The surgery linking-form sign in `lem-cyclic-cover-linking-form-inverse-matrix` agrees with the stated meridian-longitude convention. The cover definition, coinvariant quotient, branched-handle presentation, block-matrix homology presentation, and its double-cover specialization preserve the stated cover and orientation conventions. The two Smith-form computations in the worked example are correct; the displayed map for the unknot is a connected double branched cover of $S^3$. Fourier diagonalization of $\mathbb{Z}[t]/(t^q-1)$ gives the stated root-product criterion, and evaluation at $t=-1$ gives the determinant theorem and oddness. For the trefoil, $\det(V_T-tV_T^T)=t^2-t+1$ vanishes at $\zeta_6=e^{i\pi/3}$, so the stated counterexample follows.

The relevant primary-source passages were checked independently:

- Akbulut–Kirby, §2, printed pp. 113–117: the cyclic branched-cover construction glues successive copies only; the text explicitly says the final positive face need not be glued to the first. Its disk-and-band handle construction supports the $2g(q-1)$ handle count.
- Przytycki–Yasuhara, Introduction, printed pp. 2–3: $M_{p,\alpha}$ has diagonal blocks $V+V^T$, upper adjacent blocks $-V^T$, and lower adjacent blocks $-V$, and is stated to present cyclic-cover first homology. Their §3, printed pp. 13–14, identifies the surgery presentation. Their §1, Theorem 1.1 and Corollary 1.2, printed pp. 5–7, gives the negative inverse surgery-linking formula, confirming the sign used in the linking-form lemma.
- Saeki, Chapter 7, Examples 7.4–7.5: the positive-push trefoil and figure-eight matrices are exactly the matrices used in the example and counterexample.

Diagram review found no incorrect or missing diagram in the assigned items. The surgery chain diagram matches the $q-1$ consecutive seams; the inverse-surgery diagram and the Seifert normal/intersection schematic match their accompanying text. The opened cut-open-cover diagrams are consistent with their stated seam and map conventions.

## Findings not editable in this dispatch

The JSON findings file records eleven published dependencies whose Definitions or Statements contain hyperlinks before the formulation is complete, contrary to the uninterrupted-statement rule. Their `Definition references` or `Statement references` sections must carry those links after the complete formulation. Each is an uneditable published dependency; the JSON identifies an assigned consumer in its dependency closure.

| Published dependency | Exact location | Assigned consumer | Needed correction |
|---|---|---|---|
| `def-oriented-link-in-s-three-and-ambient-isotopy` | `## Definition`, multiple paragraphs including the link/smooth-embedding definitions | `lem-cyclic-cover-linking-form-inverse-matrix` | Move all Definition hyperlinks to a following `Definition references` section. |
| `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold` | `## Statement`, first paragraph: links in the link hypothesis and finite-CW/classification conclusions | `lem-cyclic-cover-linking-form-inverse-matrix` | Move all Statement hyperlinks to a following `Statement references` section. |
| `def-one-variable-alexander-module-of-an-oriented-link` | `## Definition`, total-linking and cover/module paragraphs | `lem-cyclic-cover-linking-form-inverse-matrix` | Move all Definition hyperlinks to a following `Definition references` section. |
| `def-axiom-of-choice` | `## Definition`, equivalent-product formulation links to the choice-function definition | `lem-cyclic-cover-linking-form-inverse-matrix` | Move the embedded link to a following `Definition references` section; the later duplicate does not cure the inline link. |
| `def-covering-map-and-evenly-covered-neighbourhoods` | `## Definition`, covering-map sentence's parenthetical supplier links | `def-cyclic-branched-cover-of-a-knot` | Move all Definition hyperlinks to a following `Definition references` section. |
| `def-regular-covering` | `## Definition`, regular-covering and normal-covering sentences | `def-cyclic-branched-cover-of-a-knot` | Move all Definition hyperlinks to a following `Definition references` section. |
| `thm-regular-covering-characterizations` | `## Statement`, equivalence clause 1 links to the regular-covering definition | `def-cyclic-branched-cover-of-a-knot` | Move the Statement hyperlink to a following `Statement references` section. |
| `def-deck-transformation-and-deck-group` | `## Definition`, the definition sentence links to map, group, and action definitions | `def-cyclic-branched-cover-of-a-knot` | Move all Definition hyperlinks to a following `Definition references` section. |
| `def-countable-choice-principle-for-foliation-pair` | `## Definition`, sequence-formulation paragraphs | `lem-branched-cover-surgery-presentation-from-seifert-surface` | Move all Definition hyperlinks to a following `Definition references` section. |
| `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` | `## Statement`, opening AC hypothesis | `lem-branched-cover-surgery-presentation-from-seifert-surface` | Move the Statement hyperlink to a following `Statement references` section. |
| `def-alexander-polynomial-from-the-first-elementary-ideal` | `## Definition`, first paragraph and caveats | `lem-cyclic-cover-order-root-product-and-rational-sphere-test` | Move all Definition hyperlinks to a following `Definition references` section. |

One additional nonfatal proof gap occurs in the current-run draft supplier `lem-seifert-cut-open-cover-alexander-module-presentation` (batch 61), Proof 3.1. It says the finite-stack Mayer–Vietoris sequences pass to a direct limit but supplies no elementwise exactness argument or exactness dependency for that passage. The consumer `lem-cyclic-cover-order-root-product-and-rational-sphere-test` reaches it through the Seifert-matrix presentation chain. A short proof that filtered colimits of these abelian-group sequences are exact, or an explicit dependency on an exactness result, closes the gap. Its current raw SHA-256 is recorded in `observed_source` in the findings JSON.

## Page verdicts

- `cyclic-branched-covers-and-knot-determinants`: no page defect observed. The page is YAML frontmatter only, has the assigned inventory, and retains `page_layout: compact-v1`.
- `cyclic-branched-covers-and-knot-determinants-examples`: no page defect observed. The page is YAML frontmatter only, its examples inventory matches the two assigned B-items, and it retains `page_layout: compact-v1`.

No item or page was edited. Therefore no proof contract was changed, no `verification.judge` record was removed, and no reflow, precheck, or proof-layout command was required. The live run status read during review showed the run still in Step 3a; its reported blocker is `3a-split`, `split-30` failed three times for batch 30, outside this assignment. There is no batch-66 blocker.

## Coverage limits

All assigned items, assigned pages, their page requirements, and their direct supplier statements were opened. I also followed the central Seifert-matrix presentation path to its batch-61 cut-open-cover supplier. I did not audit the full recursive foundation of every opened supplier or independently reread every corroborating Rolfsen and Livingston passage; no claim about those uninspected foundations or passages is made. The independent source checks above were limited to the passages needed to resolve the surgery construction, sign, block matrix, and worked matrices.

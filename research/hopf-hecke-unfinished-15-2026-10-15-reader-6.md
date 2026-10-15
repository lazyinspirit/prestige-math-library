# Step 3a reader report — batch 6

Run: `hopf-hecke-unfinished-15-2026-10-15`  
Role: `reader-6`

## Opened inventory

- A page: `library/hopf-hecke-algebras/hopf-modules-coinvariants-and-the-fundamental-theorem.md`.
- B page: `library/hopf-hecke-algebras/hopf-modules-coinvariants-and-the-fundamental-theorem-examples.md`.
- A-page items, read in dependency order: `def-hh-right-right-hopf-module-and-coinvariants`; `lem-hh-coinvariants-form-a-subspace`; `lem-hh-free-right-right-hopf-module`; `lem-hh-hopf-module-coinvariant-projection`; `thm-hh-fundamental-theorem-of-hopf-modules`; `lem-hh-coinvariants-of-free-hopf-module`; `cor-hh-hopf-module-functor-equivalence`.
- B-page items: `ex-hh-regular-hopf-module-projection`; `ex-hh-free-hopf-module-over-group-algebra`; `ex-hh-free-hopf-module-over-polynomial-hopf-algebra`; `cex-hh-separate-action-and-coaction-fail-hopf-compatibility`.
- Relevant item suppliers opened: `def-hh-scalar-and-tensor-conventions`; `def-left-and-right-modules`; `def-linear-map`; `def-algebra-over-a-commutative-ring`; `lem-hh-tensor-coherence-on-elementary-tensors`; `prop-functoriality-of-module-tensor-products`; `thm-unit-isomorphisms-for-module-tensor-products`; `thm-tensor-product-of-algebras-over-a-commutative-ring`; `def-hh-coalgebra-and-coalgebra-map` (batch 1); `def-hh-right-comodule-and-comodule-morphism` (batch 2); `lem-hh-tensor-product-coalgebra`; `def-hh-bialgebra-and-bialgebra-map`; `lem-hh-convolution-algebra-associativity-and-unit`; `def-hh-hopf-algebra-and-antipode`; and `thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication` (batch 3).
- Opened the four declared prerequisite page summaries and the batch-6 manifest, proof contracts, cross-batch dependency record, coverage record, authoring notes, HH-7 plan section, and matching `plan-spec.json` rows as review context. These records were treated as evidence, not as mathematical verdicts.

## Mathematical review and source evidence

The right-right convention in the definition agrees with Schneider, *Lectures on Hopf Algebras*, §2, printed pp. 22–23, and Drogalski, *Chapter 3: Hopf Algebras*, §3.6, Definition 3.34 and Definition 3.37 (printed pp. 42–43). Both define the compatibility as `rho(mh)=sum m_0 h_1 tensor m_1 h_2` and the coinvariants by `rho(m)=m tensor 1`. The kernel argument proves the subspace claim directly. The free action and coaction satisfy the module, comodule, and compatibility equations using the bialgebra axioms.

The projection computation uses anti-comultiplicativity and both antipode identities to prove `rho(P(m))=P(m) tensor 1`, and then shows it fixes coinvariants. In the fundamental theorem, `beta=(P tensor id)rho` is genuinely range-valued in `M^coH tensor H`; the proof does not assume individual Sweedler summands are coinvariant. The two composites reduce to the counit and antipode identities, and the action/coaction maps are checked. Neither proof assumes an inverse or bijectivity of `S`. These claims agree with Schneider, Theorem 2.1 and its proof (printed pp. 22–23), and Drogalski, Theorem 3.38 proof Steps 1–4 (printed pp. 43–44). I opened both complete relevant proof passages; the cited theorem locations are accurate.

The free-module coinvariant calculation follows by applying `id_V tensor epsilon` to the coinvariance equation. The functor-equivalence corollary defines both functors, checks their behavior on morphisms and naturality, and verifies both triangle identities. The examples are consistent: the regular module gives `k1_H` and `P(h)=epsilon(h)1_H`; group-algebra coefficient functionals detect the identity-group component; the alternating binomial sums give the polynomial projection in every characteristic; and the `kC_2` counterexample distinguishes the basis tensors even in characteristic two. No unproved hypothesis is used to apply the fundamental theorem.

The page-level factual claims checked against the current plan and manifests agree: the HH-7 page IDs, order, companion and four prerequisites match the plan and plan spec; the referenced batch-3/4/5 A-page item counts are 8/6/5. The page summaries accurately describe the assigned results and examples.

## Edits, defects, verdicts, and blockers

- **Edits:** none. No confirmed defect was found in an editable batch-6 item or the A-page prose. No reflow, precheck, or proof-layout run was needed because no item was changed.
- **Uneditable defects:** none identified in the relevant dependencies or assigned prose.
- **A-page verdict:** no confirmed mathematical, citation, or summary defect found.
- **B-page verdict:** no confirmed mathematical, witness, computation, or summary defect found.
- **Blocker:** none.

Coverage limitation: I reviewed the declared prerequisite pages at the page-summary/interface level and opened the item-level suppliers used by the batch-6 arguments. I did not audit unrelated items on those prerequisite pages; no batch-6 conclusion reviewed here depends on those unrelated claims.

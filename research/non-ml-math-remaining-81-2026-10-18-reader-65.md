# Step 3a reader report — batch 65

Run: `non-ml-math-remaining-81-2026-10-18`  
Reader: `reader-65`

## Inventory opened

Assigned pages:

- `library/quantum-groups-and-crystal-bases/yangians-quantum-affine-and-transfer-matrices.md`
- `library/quantum-groups-and-crystal-bases/yangians-quantum-affine-and-transfer-matrices-examples.md`

Assigned A-page items, reviewed in dependency order:

- `def-yangian-gl-n-rtt-presentation`
- `lem-yangian-rtt-component-commutator-form`
- `prop-yangian-gl-n-rtt-hopf-structure`
- `def-yangian-evaluation-module`
- `thm-yangian-evaluation-module-well-defined`
- `lem-yangian-rtt-spectral-rescaling`
- `prop-yangian-rational-r-matrix-yang-baxter-and-invertibility`
- `lem-yangian-fundamental-evaluation-intertwiner`
- `def-yangian-periodic-fundamental-chain`
- `lem-yangian-periodic-monodromy-satisfies-rtt`
- `thm-yangian-periodic-transfer-matrices-commute`
- `lem-yangian-gl2-one-root-bethe-cancellation`

Assigned B-page items:

- `ex-yangian-two-site-periodic-transfer-matrix`
- `cex-yangian-one-root-bethe-equation-does-not-guarantee-completeness`

Item dependencies opened to check the arguments:

- In-run batch 64 suppliers: `def-hh-rational-spectral-r-matrix` and `lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter`.
- Published suppliers: `def-matrix-units`, `def-matrix-space`, `thm-tensor-product-basis-from-bases`, `def-hh-scalar-and-tensor-conventions`, `thm-tensor-products-commute-with-arbitrary-direct-sums`, `thm-unit-isomorphisms-for-module-tensor-products`, `def-free-module-on-a-set-and-standard-basis`, and `thm-universal-property-of-free-modules`.

Page-level reading prerequisites opened:

- `library/hopf-hecke-algebras/hopf-hecke-and-quantum-symmetry-interfaces.md`
- `library/quantum-algebra-and-representation-theory/affine-current-algebras-virasoro-and-sugawara.md`
- `library/hecke-algebras-and-categorification/cyclotomic-klr-algebras-and-highest-weight-categorification.md`

I also checked the batch 65 proof-contract fact quotations against the current item statements and relevant steps. The two batch 64 draft suppliers remain outside this batch's edit scope.

## Mathematical review and page verdicts

**A page — pass.** The type-A RTT definition fixes the field, rank, matrix units, auxiliary legs, formal-series convention, and (R_N(x)=xI+iP_N). The component relation follows from the stated matrix entries. The coproduct, counit, and inverse antipode proof respects the ordinary algebraic tensor product and the RTT quotient. The evaluation formula and dual-natural action satisfy the displayed component relation. The (N=2) R-matrix is the exact batch 64 carrier; the higher-rank Yang–Baxter, kernel/rank, and intertwiner claims follow from the explicit permutation and basis calculations. The finite-chain induction proves monodromy RTT, and the transfer proof handles noncommuting coefficients in its partial-trace calculation before extending the polynomial identity to singular differences. The one-root statement retains its common-domain and nonzero-vector hypotheses.

**B page — pass.** The two-site partial trace gives τ(u)=(2u^2+1/2)I-P12, and the special value, derivative, inverse, and normalized operator are computed consistently. The counit direct sum satisfies the scalar one-root equation while its positive-root vectors vanish, so the claimed failure of completeness is witnessed. The page summaries accurately delimit these examples and do not use them as theorem suppliers.

The reviewed proof-contract rows match their current fact statements and uses. The proof arguments did not change, so no proof-contract rows were affected. The changed items had no `verification.judge` records to remove.

## Edits and evidence

All edits below correct source locators or narrow the described source claim. No mathematical statement, fact, or proof step changed.

- `items/thm-yangian-periodic-transfer-matrices-commute.md:20`: changed the Faddeev locator to §3, equations (44)–(47). Those equations give monodromy RTT and transfer-trace commutativity; the former locator, §4 equations (66)–(78), covers the (A,B,D) exchange relations. Source: [Faddeev, *How Algebraic Bethe Ansatz Works for Integrable Model*](https://arxiv.org/pdf/hep-th/9605187), §3, equations (44)–(47).
- `items/ex-yangian-two-site-periodic-transfer-matrix.md:20`: changed the Faddeev locator to equations (33)–(39), (41)–(47), and (63)–(65), which locate the permutation/R-matrix, monodromy and trace, and logarithmic-derivative Hamiltonian construction. Source: [Faddeev](https://arxiv.org/pdf/hep-th/9605187), §3, those equations.
- `items/lem-yangian-periodic-monodromy-satisfies-rtt.md:23`: changed the Loebbert locator to §5.1, equation (5.13), where the monodromy RTT relation appears. Source: [Loebbert, *Lectures on Yangian Symmetry*](https://arxiv.org/pdf/1606.02947), §5.1, equation (5.13).
- `items/thm-yangian-evaluation-module-well-defined.md:23`: described Faddeev equations (31)–(39) as the spin-1/2 Lax operator, permutation R-matrix, and local RLL relation; that section does not specify the item’s dual-natural action. Source: [Faddeev](https://arxiv.org/pdf/hep-th/9605187), §3, equations (31)–(39).
- `items/lem-yangian-fundamental-evaluation-intertwiner.md:20`: narrowed the Molev–Nazarov–Olshanski locator to the Yang R-matrix, RTT presentation, and evaluation homomorphism, without attributing the item’s specific intertwiner equation to that passage. Its local proof specializes Yang–Baxter directly. Sources: [Molev, Nazarov, and Olshanski, *Yangians and Classical Lie Algebras*](https://arxiv.org/pdf/hep-th/9409025), §§1.4–1.8 and 1.16–1.19; [Faddeev](https://arxiv.org/pdf/hep-th/9605187), §3, equations (31)–(39), including local RLL equation (36).
- `items/lem-yangian-gl2-one-root-bethe-cancellation.md:23`: narrowed the Isaev locator to the monodromy RTT and transfer-trace construction in §5.1, equations (5.1.5)–(5.1.8). Faddeev §4 equations (66)–(97) provide the Bethe exchange and cancellation formulas used by the item. Sources: [Isaev, *Lectures on Quantum Groups and Yang-Baxter Equations*](https://arxiv.org/pdf/2206.08902), §5.1, equations (5.1.5)–(5.1.8); [Faddeev](https://arxiv.org/pdf/hep-th/9605187), §§3–4, equations (66)–(97).
- `items/cex-yangian-one-root-bethe-equation-does-not-guarantee-completeness.md:20,23`: narrowed Faddeev to the Bethe-vector eigenvalue formula and Bethe equations, and Loebbert to periodic transfer matrices and their commutativity. Neither locator now claims that the source proves this counterexample’s noncompleteness conclusion. Sources: [Faddeev](https://arxiv.org/pdf/hep-th/9605187), §4, equations (88)–(97); [Loebbert](https://arxiv.org/pdf/1606.02947), §5.3, equations (5.31)–(5.34).

Reflow reported all seven edited items unchanged. Precheck passed for all seven. Final proof-layout checked seven items and 20 steps, with zero defects.

## Unedited defects and blockers

No confirmed or suspected defect remains in the assigned pages, assigned items, or reviewed in-run suppliers. No proposed withdrawal is present. No blocker.

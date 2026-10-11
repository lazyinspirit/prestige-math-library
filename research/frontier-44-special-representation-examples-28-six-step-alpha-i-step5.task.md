# Step 5 adjudication — group **i**, run `frontier-44-special-representation-examples-28-six-step`

You are the group Alpha for batches 6, 7, 8: 3 A/B pair(s), 6 page(s), 67 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **6**: `research/frontier-44-special-representation-examples-28-six-step-batch-6-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **7**: `research/frontier-44-special-representation-examples-28-six-step-batch-7-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **8**: `research/frontier-44-special-representation-examples-28-six-step-batch-8-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/frontier-44-special-representation-examples-28-six-step-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 6 | `kashiwara-operators-and-crystal-lattices` | A | special-topics-in-representation-theory | 1528 | `divided-powers-integral-forms-and-quantum-highest-weights` |
| 6 | `kashiwara-operators-and-crystal-lattices-examples` | B | special-topics-in-representation-theory | 1529 | `kashiwara-operators-and-crystal-lattices` |
| 7 | `tensor-product-crystals-and-highest-weight-crystal-uniqueness` | A | special-topics-in-representation-theory | 1530 | `kashiwara-operators-and-crystal-lattices`, `tensor-products-of-modules` |
| 7 | `tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples` | B | special-topics-in-representation-theory | 1531 | `tensor-product-crystals-and-highest-weight-crystal-uniqueness` |
| 8 | `balanced-triples-and-global-crystal-bases` | A | special-topics-in-representation-theory | 1532 | `divided-powers-integral-forms-and-quantum-highest-weights`, `kashiwara-operators-and-crystal-lattices`, `tensor-product-crystals-and-highest-weight-crystal-uniqueness` |
| 8 | `balanced-triples-and-global-crystal-bases-examples` | B | special-topics-in-representation-theory | 1533 | `balanced-triples-and-global-crystal-bases` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `kashiwara-operators-and-crystal-lattices` — Kashiwara Operators and Crystal Lattices (13 item(s))

- `def-the-local-ring-at-q-zero` · definition — The local ring $A_0$ of rational functions regular at $q=0$
- `thm-unique-kashiwara-i-string-decomposition` · theorem — Uniqueness of the $i$-string decomposition of an integrable module
- `def-kashiwara-crystal-operators` · definition — The Kashiwara operators $\tilde e_i$ and $\tilde f_i$ of an integrable module
- `thm-the-i-string-decomposition-of-the-negative-half` · theorem — The $i$-string decomposition of the negative half
- `def-crystal-lattice-and-crystal-basis` · definition — Crystal lattices, crystal bases and their crystals
- `lem-rank-one-tensor-strings-have-the-crystal-limit-rule` · lemma — Rank-one tensor strings and their crystal limit rule
- `def-crystal-graph-epsilon-phi-and-weight` · definition — The crystal graph, $\varepsilon_i$, $\varphi_i$ and the weight function
- `def-kashiwara-lattices-lambda-and-infinity` · definition — The Kashiwara lattices $\mathcal L(\lambda)$ and $\mathcal L(\infty)$ and their generating sets
- `lem-highest-weight-tensor-maps-and-their-adjunction` · lemma — Highest weight tensor maps, their adjunction and the retraction $S_{\lambda,\mu}$
- `thm-grand-loop-existence-of-highest-weight-crystal-bases` · theorem — The grand loop: existence of the highest weight crystal bases
- `lem-crystal-lattice-polarizations-are-perfect-at-q-zero` · lemma — Crystal lattice polarizations are perfect at $q=0$
- `lem-crystal-operators-commute-with-highest-weight-projection-modulo-q` · lemma — Projection from $\mathcal L(\infty)$ to $\mathcal L(\lambda)$ and its compatibility with the Kashiwara operators
- `thm-crystal-basis-of-the-negative-half` · theorem — The crystal basis $\mathcal B(\infty)$ of the negative half

### `kashiwara-operators-and-crystal-lattices-examples` — Kashiwara Operators and Crystal Lattices — Examples (4 item(s))

- `cex-an-a-zero-lattice-without-a-crystal-basis` · counterexample — A free $A_0$-lattice generating the module that is not a crystal lattice
- `ex-crystal-graph-of-b-two-lambda-one` · example — The crystal graph of the quantum symmetric square of the standard $A_2$-module
- `ex-kashiwara-strings-in-the-three-dimensional-sl-two-module` · example — Kashiwara strings in the three-dimensional $\mathfrak{sl}_2$-module
- `ex-projection-from-b-infinity-to-a-highest-weight-crystal` · example — The projection from $B(\infty)$ to a highest weight crystal for $\mathfrak{sl}_2$

### `tensor-product-crystals-and-highest-weight-crystal-uniqueness` — Tensor-Product Crystals and Highest-Weight Crystal Uniqueness (10 item(s))

- `lem-tensor-products-of-integrable-weight-modules-are-integrable` · lemma — Tensor products of integrable weight modules and of their crystal lattices
- `def-tensor-product-of-crystals` · definition — The tensor product crystal $B_1\otimes B_2$ and its two-case convention
- `lem-i-string-components-of-a-crystal-lattice` · lemma — The $i$-string components of a lattice vector and the single surviving component modulo $q$
- `def-highest-weight-element-and-connected-highest-weight-crystal` · definition — Highest weight elements, lowering-generated subcrystals and highest weight crystals
- `thm-crystal-basis-tensor-product-rule` · theorem — The crystal basis of a tensor product and the two-case operator rule
- `lem-crystal-tensor-product-weight-epsilon-and-phi-formulas` · lemma — The weight, $\varepsilon_i$ and $\varphi_i$ formulas for the tensor product crystal
- `thm-the-highest-weight-crystal-b-lambda-exists` · theorem — The canonical crystal $B(\lambda)$ is a highest weight crystal of highest weight $\lambda$
- `prop-dual-crystal-and-reversal-conventions` · proposition — The dual crystal: reversed arrows, negated weights and swapped $\varepsilon/\varphi$
- `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals` · theorem — Uniqueness: crystal bases of integrable modules decompose into highest weight crystals
- `thm-highest-weight-components-in-a-tensor-product-crystal` · theorem — Highest weight components in a tensor product crystal

### `tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples` — Tensor-Product Crystals and Highest-Weight Crystal Uniqueness — Examples (4 item(s))

- `cex-changing-the-tensor-equality-convention-changes-the-crystal` · counterexample — Changing the equality case in the tensor rule breaks the partial-inverse axiom
- `ex-tensor-crystal-b-one-tensor-b-one-for-sl-two` · example — The tensor crystal $B(1)\otimes B(1)$ for $\mathfrak{sl}_2$
- `ex-highest-components-in-a-small-type-a-two-tensor-crystal` · example — Highest components in the $A_2$ tensor crystal $B(\lambda_1)\otimes B(\lambda_1)$
- `ex-dual-crystal-reverses-arrows-and-weights` · example — Dual crystals reverse arrows and weights: two small computations

### `balanced-triples-and-global-crystal-bases` — Balanced Triples and Global Crystal Bases (30 item(s))

- `lem-lusztig-and-kashiwara-normalizations-match-by-root-color` · lemma — The Lusztig–Kashiwara form, parameter and coproduct dictionary
- `def-the-bar-lattice-and-integral-lattice-of-a-based-module` · definition — The bar lattice and the divided-power integral lattice of a based module
- `def-balanced-triple-and-globalization-map` · definition — Balanced triples over the two charts of $\mathbb P^1$ and the globalization map
- `def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules` · definition — The integral residue lattices $L_A(\infty)$ and $L_A(\lambda)$
- `def-root-height-completion-for-weightwise-quasi-r-intertwiners` · definition — The root-height completion for weightwise quasi-$R$ intertwiners
- `def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves` · definition — The Drinfeld pairing between the positive and negative quantum halves
- `lem-balanced-triple-linear-algebra-over-the-projective-line` · lemma — The balanced-triple linear algebra over $\mathbb P^1$
- `lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis` · lemma — Integral residues of the negative half: freeness, the crystal basis and the form characterization
- `lem-negative-half-reversal-preserves-integral-and-crystal-lattices` · lemma — Reversal preserves the negative-half integral and crystal lattices
- `lem-string-ideal-decomposition-of-the-integral-lattices` · lemma — Integrality of the string decomposition and the divided-power string ideals
- `lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree` · lemma — The Drinfeld pairing is nondegenerate in each root degree and matches the shuffle pairing
- `lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite` · lemma — Homogeneous dual-basis sums: basis independence and weightwise finiteness
- `lem-string-ideal-triples-are-balanced` · lemma — The string-ideal triples are balanced: the induction step (Kashiwara 7.4.1 / JKK 10.4)
- `thm-the-highest-weight-crystal-triple-is-balanced` · theorem — The highest weight and negative half integral crystal triples are balanced
- `thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique` · theorem — Existence and uniqueness of the weightwise quasi-$R$ intertwiner
- `def-lower-global-basis-of-a-quantum-highest-weight-module` · definition — The lower global basis of $U_q^-$ and of a highest weight module
- `lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations` · lemma — The quasi-$R$ intertwiner determines its inverse and the coproduct factorizations
- `thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis` · theorem — Bar invariance, congruence and uniqueness of the lower global basis
- `def-upper-global-basis-by-the-contravariant-form` · definition — The upper (form-dual) global basis and the required perfectness of the integral pairing
- `thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module` · theorem — The based quotient: projection of the lower global basis to a highest weight module
- `thm-integral-triangular-decomposition-for-the-lusztig-form` · theorem — Integral triangular decomposition and freeness of the Lusztig form
- `prop-global-bases-specialize-to-integral-weight-bases` · proposition — Specialization of the global bases and the root-of-unity boundary
- `thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type` · theorem — Lusztig's canonical basis and Kashiwara's lower global basis agree in symmetric finite ADE type
- `thm-quantum-highest-weight-modules-deform-the-classical-weight-character` · theorem — Finitely generated free integral weight lattices and deformation of the classical weight character
- `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible` · theorem — Upper and lower global bases are dual and crystal compatible
- `lem-quasi-r-divided-power-integrality-on-based-lattices` · lemma — Divided-power integrality of the quasi-$R$ action on based lattices
- `thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules` · theorem — Tensor bars on finite products of based integrable modules
- `lem-distinct-cyclotomic-shears-give-integrable-based-sl-two-chains` · lemma — Distinct cyclotomic shears give integrable based quantum sl-two chains
- `lem-two-cyclotomic-shears-give-a-periodic-integrable-based-sl-two-chain` · lemma — Two cyclotomic shears give a periodic integrable based quantum sl-two chain
- `lem-periodic-cyclotomic-based-sl-two-tensor-corrections-escape-every-finite-cut` · lemma — Periodic cyclotomic tensor corrections escape every finite cut

### `balanced-triples-and-global-crystal-bases-examples` — Balanced Triples and Global Crystal Bases — Examples (6 item(s))

- `cex-bar-invariance-and-mod-q-congruence-without-balancedness` · counterexample — Bar invariance and the congruence modulo $q$ do not imply balancedness
- `ex-canonical-global-basis-normalization-in-symmetric-type` · example — Matching the canonical and lower global normalizations in rank one and $A_2$
- `ex-lower-and-upper-global-bases-in-a-small-highest-weight-module` · example — Lower and upper global bases in a small highest weight module
- `ex-balanced-triple-for-the-two-dimensional-quantum-sl-two-module` · example — The balanced triple and global basis for the two-dimensional $U_q(\mathfrak{sl}_2)$-module
- `cex-finite-type-based-modules-need-not-have-finite-basis-compatible-envelopes` · counterexample — An integrable based module can have no finite based envelope of a raw basis vector
- `cex-integrable-based-sl-two-tensor-triples-need-not-be-balanced` · counterexample — Integrable based sl-two tensor triples need not be balanced

## Your seams

Your pages depend on another group's:

- `kashiwara-operators-and-crystal-lattices` requires `divided-powers-integral-forms-and-quantum-highest-weights` (group f, batch 5)
- `balanced-triples-and-global-crystal-bases` requires `divided-powers-integral-forms-and-quantum-highest-weights` (group f, batch 5)

Another group's pages depend on yours:

- `quantum-affine-type-a-and-level-one-fock-space` (group j) requires your `tensor-product-crystals-and-highest-weight-crystal-uniqueness`
- `quantum-affine-type-a-and-level-one-fock-space` (group j) requires your `balanced-triples-and-global-crystal-bases`
- `parabolic-category-o-and-fock-space-bases` (group n) requires your `balanced-triples-and-global-crystal-bases`
- `klr-algebras-induction-and-quantum-serre-categorification` (group p) requires your `balanced-triples-and-global-crystal-bases`
- `cyclotomic-klr-algebras-and-highest-weight-categorification` (group p) requires your `balanced-triples-and-global-crystal-bases`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-44-special-representation-examples-28-six-step-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `frontier-44-special-representation-examples-28-six-step`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.

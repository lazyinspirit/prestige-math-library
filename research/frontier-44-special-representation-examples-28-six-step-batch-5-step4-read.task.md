# Step 4 batch reviewer — batch **5**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **5**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["5"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 5 | `divided-powers-integral-forms-and-quantum-highest-weights` | A | quantized-enveloping-algebras-and-quantum-serre-relations, integrable-highest-weight-kac-moody-modules |
| 5 | `divided-powers-integral-forms-and-quantum-highest-weights-examples` | B | divided-powers-integral-forms-and-quantum-highest-weights |

## Your content, in full

### `divided-powers-integral-forms-and-quantum-highest-weights` — Divided Powers, Integral Forms, and Quantum Highest Weights

- `def-kashiwara-skew-derivations-on-the-negative-quantum-half` · definition — Kashiwara's skew derivations $e_i'$ and $e_i''$ on the negative half
- `def-lusztig-divided-power-integral-form` · definition — The Lusztig divided-power integral form $U_A$
- `def-quantum-weight-module-and-integrability` · definition — Quantum weight modules, weights in $P$, and integrability
- `def-contravariant-form-on-an-integrable-quantum-highest-weight-module` · definition — The contravariant form on an integrable highest weight module
- `def-quantum-verma-module-and-simple-highest-weight-quotient` · definition — Quantum Verma modules $M(\lambda)$, highest weight vectors, and the simple highest weight quotient $L(\lambda)$
- `def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half` · definition — The Lusztig-Kashiwara bilinear form on the negative half: the recursion
- `lem-divided-power-and-toral-quantum-binomial-reordering-identities` · lemma — Divided-power multiplication, toral binomials and the $E_i^{(a)}F_i^{(b)}$ reordering identity
- `lem-divided-power-half-has-integral-skew-string-coefficients` · lemma — Integral skew-string coefficients on the divided-power negative half
- `lem-finite-support-regularization-of-quantum-label-weight-modules` · lemma — Finite-support regularization of quantum label-weight modules
- `lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality` · lemma — The bar involution and the contravariant anti-involution preserve $U_A$
- `lem-cartan-projection-constructs-the-quantum-verma-contravariant-form` · lemma — Cartan projection constructs the Verma contravariant form and identifies its radical
- `lem-quantum-highest-weight-serre-quotient-is-integrable` · lemma — The dominant quantum Serre quotient is nonzero and integrable
- `lem-the-negative-half-is-separated-by-iterated-skew-derivations` · lemma — Separation of the negative half by iterated skew derivations
- `lem-unmodified-integral-torus-has-a-quantum-binomial-basis` · lemma — The unmodified integral torus has a quantum-binomial basis
- `lem-local-q-one-deformation-proves-integrable-highest-weight-universality` · lemma — Local q=1 deformation proves integrable highest weight universality
- `lem-rational-local-quantum-halves-and-torus-specialize-at-q-one` · lemma — Rational-local quantum halves and torus specialize at q=1
- `thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral` · theorem — The negative-half bilinear form is symmetric, nondegenerate and integral
- `lem-q-one-toral-specialization-identifies-the-classical-cartan-generators` · lemma — The q=1 toral specialization identifies the classical Cartan generators
- `thm-integrable-quantum-highest-weight-module-exists-and-is-unique` · theorem — The integrable quantum highest weight module exists and is unique
- `prop-integrable-quantum-highest-weight-modules-are-semisimple` · proposition — Integrable bounded-above quantum modules with finite-dimensional weight spaces are direct sums of simple highest weight modules
- `prop-specialization-at-q-one-recovers-the-classical-enveloping-relations` · proposition — Specialization at q=1 recovers the classical enveloping relations
- `lem-type-a-kazhdan-lusztig-basis-has-elementary-triangular-bar-properties` · lemma — The type-A Kazhdan–Lusztig basis has elementary triangular bar properties

### `divided-powers-integral-forms-and-quantum-highest-weights-examples` — Divided Powers, Integral Forms, and Quantum Highest Weights — Examples

- `ex-divided-powers-and-lusztig-form-in-quantized-sl-two` · example — Divided powers and the Lusztig form in quantized sl2
- `ex-quantum-verma-and-simple-modules-for-sl-two` · example — Quantum Verma and simple modules for sl2
- `ex-specializing-a-quantum-highest-weight-lattice-at-q-one` · example — Specializing a quantum highest weight lattice at q=1
- `cex-direct-q-one-substitution-in-quantum-denominators` · counterexample — Direct q=1 substitution in quantum denominators

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `kashiwara-operators-and-crystal-lattices` requires `divided-powers-integral-forms-and-quantum-highest-weights`
- `balanced-triples-and-global-crystal-bases` requires `divided-powers-integral-forms-and-quantum-highest-weights`
- `klr-algebras-induction-and-quantum-serre-categorification` requires `divided-powers-integral-forms-and-quantum-highest-weights`
---

# Step 4 Alpha batch reviewer — read-only digest, `frontier-44-special-representation-examples-28-six-step`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.

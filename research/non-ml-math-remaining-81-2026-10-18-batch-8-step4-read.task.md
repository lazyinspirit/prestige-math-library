# Step 4 batch reviewer — batch **8**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **8**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["8"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 8 | `prefix-codes-and-finite-lossless-coding` | A | finite-alphabet-entropy-and-divergence, kolmogorov-complexity-and-algorithmic-randomness |
| 8 | `prefix-codes-and-finite-lossless-coding-examples` | B | prefix-codes-and-finite-lossless-coding |

## Your content, in full

### `prefix-codes-and-finite-lossless-coding` — Prefix Codes and Finite Lossless Coding

- `def-finite-discrete-source-and-blocks` · definition — Finite discrete sources and product blocks
- `lem-finite-gibbs-inequality` · lemma — Nonnegativity of finite relative entropy with a positive reference
- `def-base-two-entropy-of-a-finite-source` · definition — Base-two entropy of a finite source
- `def-binary-source-code-and-extension` · definition — Finite binary source codes, extension, and expected length
- `def-binary-prefix-code` · definition — Binary prefix codes and their code trees
- `thm-mcmillan-inequality-for-finite-binary-codes` · theorem — McMillan inequality for finite binary uniquely decodable codes
- `def-ideal-real-arithmetic-interval-code` · definition — Ideal-real arithmetic interval coding for a fixed block
- `lem-prefix-codes-are-uniquely-decodable` · lemma — Every finite binary prefix code is uniquely decodable
- `thm-binary-kraft-criterion-for-finite-lengths` · theorem — Binary Kraft criterion for finite positive codeword lengths
- `alg-binary-huffman-coding` · algorithm — Deterministic binary Huffman coding
- `thm-ideal-real-arithmetic-interval-code-is-prefix-and-lossless` · theorem — Ideal-real interval coding is prefix-free and lossless
- `alg-finite-register-rational-arithmetic-coder` · algorithm — Exact finite-register arithmetic coding for rational block sources
- `thm-shannon-bounds-for-finite-binary-codes` · theorem — Shannon bounds for finite binary codes
- `thm-huffman-coding-is-prefix-optimal` · theorem — The deterministic Huffman code is prefix-optimal
- `cor-ideal-real-arithmetic-code-average-length` · corollary — Ideal-real arithmetic coding is within two bits per block
- `thm-finite-register-rational-arithmetic-coder-is-prefix-and-lossless` · theorem — The rational finite-register arithmetic code is prefix-free and lossless
- `cor-huffman-code-lengths-are-within-one-bit-of-entropy` · corollary — Huffman expected length is within one bit of entropy
- `cor-finite-register-arithmetic-coder-average-length` · corollary — The finite-register rational coder is within two bits per block

### `prefix-codes-and-finite-lossless-coding-examples` — Prefix Codes and Finite Lossless Coding — Examples

- `ex-uniquely-decodable-code-not-prefix` · example — A uniquely decodable binary code that is not prefix-free
- `ex-finite-register-arithmetic-coder-block-ab` · example — Exact rational interval coding of the block AB
- `ex-huffman-dyadic-source-and-code-tree` · example — Huffman tree for a dyadic three-symbol source

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `prefix-codes-and-finite-lossless-coding` requires `finite-alphabet-entropy-and-divergence`
- `stationary-ergodic-sources-and-universal-coding` requires `prefix-codes-and-finite-lossless-coding`
- `finite-trellis-viterbi-and-sequence-decoding` requires `prefix-codes-and-finite-lossless-coding`
---

# Step 4 Alpha batch reviewer — read-only digest, `non-ml-math-remaining-81-2026-10-18`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.

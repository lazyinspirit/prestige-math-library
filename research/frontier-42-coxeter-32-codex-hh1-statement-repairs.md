# Codex bounded review and focused correction of HH-1 Statement repairs

Run: `frontier-42-coxeter-32`. Review date: 2026-10-07. Scope: the native R1/R2 repairs in `lem-hh-tensor-coherence-on-elementary-tensors` and `lem-hh-finite-tensor-duality-and-canonical-coevaluation`, their exact current direct consumers, and necessary matching batch-1 carriers. One independent targeted mathematical pass followed by one focused correction; no native gate, dispatch, receipt refresh, judgment, or commit was performed.

## Evidence and original contract boundary

Read CLAUDE.md, README.md and SCHEMA.md fully. Read both complete current lemmas, the native pair author report, the current pair task `research/frontier-42-coxeter-32-step3b-pair-tensor-coherence-and-algebraic-descent-25c59a9ad4a0d1f9.task.md`, the two Step-1 readiness records, the exact relevant batch-1 proof-contract entries and manifest rows. The approved coherence strategy promises naturality, pentagon, triangle and both hexagons by elementary-tensor computations, without invoking a general monoidal coherence theorem. The approved finite-duality strategy promises the product dual basis, the canonical preimage of the identity, basis-independent coevaluation and both zigzags. All these claims remain supplied.

The native report's R1 section records the old ill-typed formula with a redundant rightmost alpha and its correction. Its R2 section records the Statement caveat being moved to Remarks with a forward declaration. The items are untracked in git; this reviewer did not recover the original pre-native-repair bytes and does not claim a byte-for-byte independent reconstruction of those earlier carriers. `*.before.json` preserves the actual post-native-repair, pre-Codex carriers captured on entry. The Step-1 readiness hashes are historical readiness evidence, not current mathematical certification. No confidence value was invented or overwritten.

## Independent mathematical conclusions

R1 is sufficient at the Statement level. In claim 4, reading right to left, the domain `(L tensor M) tensor N` passes through `N tensor (L tensor M)`, `(N tensor L) tensor M`, `(L tensor N) tensor M`, then `L tensor (N tensor M)`. The right route has the same domain/codomain and gives the same elementary tensor. Claim 5 likewise carries `L tensor (M tensor N)` to `(N tensor L) tensor M` by both routes. The pentagon, naturality and unit triangle follow from the displayed elementary-tensor formulas and spanning; scalar balancing supplies the triangle. No extra associator or broad coherence theorem is required.

R2 is sufficient at the Statement level. The finite dual product basis proves the canonical map is an isomorphism, including empty bases. The finite Hom–tensor isomorphism gives the unique preimage of id_V, and symmetry gives the coevaluation tensor. Evaluation and coevaluation are basis independent; expansion of x and f gives both zigzags, including V=0. The moved caveat is orientation and invokes no later result in the proof. The B counterexample independently constructs the infinite map and proves failure by an infinite independent family of contractions trapped in a finite span.

Focused correction discovered and repaired four exact proof/source-use defects, without changing any Statement or Definition:

- Coherence step 1.2 reused a map declared N→N' in the M-unit square. It now declares a separate g:M→M' and uses g throughout that square.
- Coherence step 1.3 applied alpha tensor id to an already right-associated output and had malformed parentheses. It now applies that map to the actual input `((l tensor m) tensor n) tensor x`, with output `(l tensor (m tensor n)) tensor x`.
- Finite duality step 2.1 started the second zigzag at `1 tensor f`, although id tensor coev has domain V* tensor k. It now starts at `f tensor 1` and retains the output `1 tensor f` before applying lambda. Both unit maps are thus used with the correct domains.
- The infinite counterexample's F6 incorrectly cited the finite-dimensional lemma for an infinite-dimensional canonical map. F6 now cites the general tensor universal property through the conventions supplier, and step 1.1 explicitly constructs the map by two bilinear descents. Step 2.1 uses that constructed formula. The finite lemma remains the accurately qualified refutation target in Statement refuted and its existing dependency; its proof is not used for an infinite-dimensional isomorphism.

Updated only those three items' exact derivation entries and the counterexample's F6 citation/use record in the batch-1 proof contract. Updated only the duality and counterexample manifest strategies: the former uses the primitive associator/unit formulas rather than an unnecessary coherence link; the latter records its general canonical-map construction. Statement mirrors and A/B page content need no edit.

## Sources actually inspected

Read full local published supplier texts, including their proofs where present: `thm-symmetry-and-associativity-over-a-commutative-ring`, `thm-unit-isomorphisms-for-module-tensor-products`, `prop-functoriality-of-module-tensor-products`, `thm-hom-from-a-finite-dimensional-space-as-a-tensor-product`, `thm-dual-family-is-a-basis-in-finite-dimension`, `thm-tensor-product-basis-from-bases`, `thm-unique-coordinates-with-respect-to-an-ordered-basis`, `def-tensor-product-of-modules-by-generators-and-relations`, `thm-universal-property-of-module-tensor-products`, `def-algebraic-dual-and-linear-functional`, `def-dual-family-associated-to-a-basis`, and the counterexample's finite-independent-set bound. Read the conventions supplier fully. These give the exact map directions, coordinate identities, finite expansion and finite-span obstruction used above. External Conrad/CRing/Pinkham PDFs were not re-fetched or read in this pass; their native fetch evidence is reported by the author and is not represented as a new Codex source read. No mathematical uncertainty requiring an external consultation remains for these elementary computations.

## Actual downstream use and stopping condition

Full `items/` name search and all run manifest dependency rows identify precisely:

| Consumer | Supplier clause/use | Result |
|---|---|---|
| `def-hh-scalar-and-tensor-conventions` | coherence `justified_by`; Definition permits omitted parentheses after coherence proof | Definition unchanged; elementary-tensor maps and identities suffice for this convention |
| `ex-hh-pentagon-on-four-named-vectors` | coherence claim 2, F3 and Verification 1.1–2.1 | full example checked; pentagon unchanged and explicit evaluations agree |
| `ex-hh-finite-coevaluation-in-two-bases` | finite-duality claims 2–3, F3 and Verification 2.1 | full example checked; characteristic≠2 makes displayed dual basis valid and cross terms cancel |
| `cex-hh-infinite-dimensional-tensor-dual-identification-fails` | finite-duality claim 1 as refutation target; former F6 infinite map use | corrected F6/construction above; full contraction obstruction checked |

No current outside-batch direct item or manifest consumer names either supplier. No active other-pair item was edited. There are no pending actual direct consumers for root follow-up from this review. Because no consumer Statement/Definition changed, no further dependency hop is required. This conclusion is bound to the current on-disk scan; root should use the drained final graph for recertification.

## Focused verification and current hashes

After the final item edits, explicit paths for the two lemmas and the counterexample passed `precheck` (3/3), `rendercheck` (3 items; zero errors/warnings) and `proof-layout` (14 numbered steps; zero defects). Their strict selected proof-contract check passed with zero errors/warnings after correcting the contract generator's temporary trailing-tag extraction error; two intermediate contract checks failed mechanically and were not represented as passing. Focused `depcheck` and `fwdcheck` passed with zero errors/warnings. The latter reports one closed orientation-only forward reference and zero load-bearing forward uses. These are local checks, not native gates or whole-item delegated audit stamps.

Exact raw, content (itemHashGuard; verification excluded), and surface hashes for all reviewed items are in `*.hashes.json`; actual pre-Codex carriers and detailed primary check outputs are retained in `*.before.json` and `*.checks.json`. Current canonical hashes:

- coherence: `da707fc6e43cc6f82046412364be4faa663c011a100f6fefc9d283b8fad11973`
- finite duality: `edee924f456cf6951c8ba76aa0f767d1d6cbe8b96c208bef75c90b1a9d1473e2`
- infinite counterexample: `c58efe956ed67a0475181ac2c6736dbec9f694419f9e9cbfda471e1602d360cc`

No unresolved mathematical objection remains within this bounded scope. Root owns final dependency-ordered rehash/recertification and gate closure after all writers drain; the native current review receipts have intentionally not been refreshed here.

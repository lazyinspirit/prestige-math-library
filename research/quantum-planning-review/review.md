# Quantum planning owner review

Status: draft scaffold integration complete; prerequisite authoring holds explicit, 2026-10-14. The owner commissioned exactly fourteen `gpt-6-luna` agents with `reasoning_effort: max`: six full-text quantum-computing researchers and one QC integrator, plus six quantum-algorithms researchers/section authors and one QA integrator. The second team's size follows the user's correction to seven agents.

## Commission and scope

The complete topic lists, prerequisite orders, mathematical boundary, source-reading requirements and exclusive output ownership are recorded in both teams' `TEAM-BRIEF.md` files. The approved scope comprises 24 QC and 36 QA topic areas, each with a proposed A page and B examples companion. Actual mathematical dependency graphs, rather than numbering alone, control prerequisite order. Every claim remains a planning proposal; there are no new item carriers, publication decisions, proof-acceptance stamps or workflow transitions.

The QC primary source assignments were Watrous's complete textbook (598 PDF pages), Preskill's complete available chapters 2–6 (306 pages; the author marks chapter 4 incomplete), de Wolf's full course (239 pages), Watrous's complete Waterloo CS766/QIC820 course (197 pages), Cleve's complete Waterloo QIC710 course (328 pages), and Childs's complete course (191 pages). Each assigned researcher has reported complete sequential reading to that exact scope. Supplementary source ledgers distinguish full-document, chapter/section, visual and unread/bibliography-only material. Download/extraction integrity is separate from reported reading and mathematical validity. No unavailable typed Preskill chapter 8 or closed source is represented as read.

## Mathematical review corrections

The owner read selected research contracts and reviewed the following substantive issues with their original reviewers and integrators:

- Preserve the library's first-argument-linear inner product. Dirac brackets reverse the root pairing; bras remain linear, and outer operators have coordinate matrix xy†.
- Negating an input into a fresh output bit needs X on the target and a controlled copy. Parallel reversible evaluation needs coherent fanout/unfanout trees and explicit wire-conflict, depth and workspace accounting.
- The computational-record teleportation expansion is the state after CNOT and Hadamard, not the pre-gate entangled state. Correction order and arbitrary-reference semantics are explicit.
- A projective state-preparation packing cannot treat complementary sign vectors as distinct rays. The revised signed code fixes half the signs; the finite-alphabet count uses total width W. The smooth dimension argument uses projective coordinate charts, not a global identification of projective space with Euclidean space.
- Normalized coset Fourier states have coefficient sqrt(|H|/|G|), not 1/sqrt(|G|). The H=G boundary gives amplitude one at the trivial character. Fourier-sampling consumers were checked.
- A phase oracle alone does not supply classical candidate verification. Search contracts charge a membership bit query or explicit controlled-phase conversion.
- Absorbing transition kernels need a general row-stochastic reflection-walk definition. Detection is separate from finding, retains laziness/gap assumptions, and specifies finite phase-estimation precision and repetition.
- Finite raw gate sets at fixed width do not approximate arbitrary determinant phases in operator norm. SU synthesis, projective/channel synthesis and clean-subspace synthesis have distinct contracts; controlling a phase-minimized smaller block is not a valid phase-preserving compilation.
- The root rectangular SVD theorem already covers maps V→W despite its narrower title. Root promise and classical-code suppliers are reused where their actual hypotheses fit.
- No-broadcasting's singular-state extension uses faithful domination, positive marginal support, channel compression on all operators, and a fixed positive regularization parameter. These are explicit local proof obligations.

Corrections were assigned to the original source reviewers, who reported their affected consumers and sent revised contracts to the integrators. This review does not certify every future proof.

## Checks and remaining authoring work

`check-proposals.mjs` checks only the two explicit planning proposals and consumed root prerequisite closure: identity collisions, source locators, declaration completeness, dependency resolution, forbidden logical suppliers, B-page leaves, item/page cycles, supplier-first local order and declared page reachability. Its final machine result is recorded separately. `source-cache-inventory.py` inventories cached PDF/text bytes and hashes; it does not prove reading. Category prose is checked with the repository's scoped renderer/prose validators.

Physical postulates, experiments, physical theorems, observations and remarks are not logical suppliers. Physics-library mathematics informs root-local proof proposals and nonlogical provenance; it is not silently imported into the root namespace. Future authoring must supply and review every local proof before readiness. Existing mathematical drafts with complete inspected proofs remain visible held prerequisites until ordinary review/eligibility work is completed; no unrelated live run is controlled or edited to clear them.

After the GPT-6.1 Sol/medium category audit, inventories contain 358 QC and 538 QA proposals across 120 A/B pages. The exact prerequisite recipes are in [prerequisite-repairs.md](prerequisite-repairs.md) and [prerequisite-repairs.json](prerequisite-repairs.json). The current inherited prerequisite graph still fails the strict no-remark rule; the conditional virtual graph passes after 18 declared consumer repairs and 14 proposed prerequisite suppliers. This is a complete planning handoff, not completed proof authoring or library acceptance. Scoped category render/prose checks passed for both category files with zero errors or warnings.

The four-category follow-up audit is indexed in [scaffold-audit-2026-10-14](../scaffold-audit-2026-10-14/README.md). Its final shared checks cover 896 quantum proposals: the current root closure contains 1,834 prerequisites and still has precisely the ten inherited remark failures; the virtual repaired closure passes at 2,729 nodes. The existing draft Golden–Thompson dependency remains a held planning supplier. No current source repair or native proof acceptance is inferred.

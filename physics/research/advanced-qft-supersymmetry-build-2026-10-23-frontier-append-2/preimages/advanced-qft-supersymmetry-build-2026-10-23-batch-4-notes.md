# Batch 4 authoring notes

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Pair: `qftx-nonabelian-brst-bv-mathematics` and its examples companion.  
Disposition: all eight assigned items have current Step 1 `ready` records. Item/page carriers remain drafts; these records establish authoring readiness only, not independent proof approval.

## Plan, inventory, and dependencies

The assigned design, `research/plan-spec.json`, and the batch manifest agree on the A/B page IDs, order 960, title, category/library, and page prerequisite `qftx-gauge-geometry`. The active plan item arrays are empty placeholders. The design listed five future A items; one additional local A lemma, `lem-qftx-bv-canonical-action-generates-brst-differential`, was added between the BV definition and master-equation lemma to prove the parity sign in the antifield coupling. This is a local intermediate proof of the designed BV interface, not a new topic. The A page has six items and the B page has two examples. Both page files contain YAML frontmatter only and have empty Markdown bodies.

Computed item levels from the current batch manifest are:

- Level 0: `def-qftx-nonabelian-brst-complex`.
- Level 1: `lem-qftx-nonabelian-brst-nilpotence`.
- Level 2: `def-qftx-local-brst-cohomology`, `def-qftx-bv-antibracket-master-action`, `ex-qftx-su2-brst-nilpotence`.
- Level 3: `lem-qftx-bv-canonical-action-generates-brst-differential`, `lem-qftx-bv-master-equation-brst-nilpotence`.
- Level 4: `ex-qftx-su2-bv-ghost-master-equation`.

The actual item edges are recorded in each carrier, the batch manifest, and the Step 1 readiness records. The A page has the one external page edge to `qftx-gauge-geometry`; the B page depends on the A page. Batch 4 remains at page dependency level 1 and requires batch 2. The current graph and the recorded graph agree on that edge and level. The current manifest-derived digest is `9038b50b8e1b1f8a957938d1a6129640a24e2de8813aec71d6f42490296529d8`, while the shared run-level file still carries `872dc222b65e5b6f2b36bf2a5bff4231d1468980d1985ec86c50a80d02cb4914`. The digest is stale because authoring populated and updated the batch manifest. Shared scheduling state was left to the owner; recompute it at the drained join.

The required provider page and its five current item carriers were inspected. A fresh `loadStep1Record`/`step1Decision` check returns `closed:true`, `decision:ready` for `def-qftx-nonabelian-gauge-data`, `def-qftx-principal-connection-form`, `def-qftx-lie-algebra-valued-form-bracket`, `lem-qftx-principal-curvature-cartan-bianchi`, and `def-qftx-associated-covariant-derivative`. The batch cross-dependency array marks the A-page edge `verified` for current interface/readiness only, not independent proof approval. Batch 4 items state their finite-dimensional Lie-algebra and representation assumptions directly and have no item-level dependency on batch 2. No batch-2 file was changed.

## Item claims, conventions, and prerequisites

- `def-qftx-nonabelian-brst-complex` (level 0; no item deps): defines the finite-jet algebra over a nonempty open coordinate patch, a finite-dimensional real Lie algebra and parity-preserving representation, and the left-odd convention `sA=∂c+[A,c]`, `sc=-1/2[c,c]`, `sψ=-ρ(c)ψ`. It claims no global bundle, action, or quantum theory. Sources: Barnich–Brandt–Henneaux (BHN), §§2.2–2.3 and 4.1–4.2; Gomis–París–Samuel (GPS), §§3.2 and 5.2.
- `lem-qftx-nonabelian-brst-nilpotence` (level 1; dependency: the BRST definition): proves square-zero on ghost, gauge, and arbitrary-parity matter generators, commutation with total derivatives, and extension to every finite jet polynomial. The only algebraic inputs are Lie Jacobi and the representation identity. Sources: BHN §§2.2–2.3, 4.1; GPS §§3.2, 5.2.
- `def-qftx-local-brst-cohomology` (level 2; dependencies: BRST definition and nilpotence lemma): defines typed local horizontal forms and `H^{g,p}(s|d_H)`, proves `d_H^2=0`, `sd_H+d_Hs=0`, and that the stated denominator lies in the numerator, and distinguishes local algebraic cohomology from physical-state cohomology. Its local-functional interpretation states the needed support/boundary condition. Sources: BHN §§2.3, 4.1–4.5; GPS §§4.6, 8.1.
- `def-qftx-bv-antibracket-master-action` (level 2; dependencies: BRST definition and nilpotence lemma): fixes antifield parity/ghost number, right/left bracket derivatives, the conditional minimal action candidate, irreducibility and off-shell closure assumptions, and an optional nonminimal pair without claiming cohomological contractibility. The local-functional domain is conditional and does not define a measure, BV Laplacian, path integral, or QME. Sources: GPS §§4.1–4.6, 5.2; Qiu–Zabzine (QZ) §§3.1–3.2, 4.1–4.4.
- `lem-qftx-bv-canonical-action-generates-brst-differential` (level 3; dependency: BV definition): explicitly computes the right-derivative sign for each field/ghost parity, proving `(S,Φ)=s₀Φ`; the local-field identity is conditional on well-defined variational derivatives and boundary behavior. Sources: GPS §§4.2, 4.6; QZ §§3.1–3.2, 4.2.
- `lem-qftx-bv-master-equation-brst-nilpotence` (level 3; dependency: BV definition): proves both directions between the CME and nilpotence of `sF=(S_BV,F)` from shifted Jacobi. The converse explicitly assumes no nonzero ghost-number-one central element; it is verified for the finite canonical polynomial algebra and remains a separate hypothesis for any formal local-functional domain. Sources: GPS §§4.2–4.3, 4.6; QZ §§4.2–4.4.
- `ex-qftx-su2-brst-nilpotence` (level 2; dependencies: BRST definition and nilpotence lemma): displays the Pauli matrices, computes their products and the SU(2) structure constants, and applies the general finite-jet lemma. It makes no global-bundle or physical claim.
- `ex-qftx-su2-bv-ghost-master-equation` (level 4; dependencies: BV definition and CME/nilpotence lemma): directly computes the canonical bracket for the finite three-ghost/three-antifield algebra and reduces the CME to the SU(2) Jacobi identity. It is only the non-Abelian ghost sector, not a full Yang–Mills action or quantum field theory.

## Source retrieval and coverage

The complete 150-page BHN PDF was retrieved and the targeted full sections §§2.2–2.3 and 4.1–4.5 were read. It supports the non-Abelian local BRST convention, finite jets, horizontal forms, and relative cohomology definition; no later classification theorem is imported. The complete 196-page GPS PDF was retrieved and §§3.2, 4.1–4.6, and 5.2 were read. It supports the canonical derivative bracket, shifted identities, master-action data, and field-coordinate BRST construction; its Hamiltonian ordering differs, and the new item derives the local sign from the declared convention. The complete 67-page QZ author preprint was retrieved from official arXiv v2 at `https://arxiv.org/pdf/1105.2680`; §§3.1–3.2 and 4.1–4.4 (PDF pp. 11–26) were read. Its finite-dimensional scope and warning about unregularized infinite-dimensional operations are retained.

The originally selected ORBilu QZ PDF endpoint failed TLS certificate verification on the first attempt and five recovery retries. Searches found the identical 67-page author preprint at official arXiv v2; title page, authors, page count, section sequence, and relevant text were compared with the web-inspected ORBilu copy. The ORBilu URL remains in `batch-4.coverage.json` as a certain URL-level drop; all six attempts, searches, per-item alternative arguments, and dependency arrays are recorded under `source_resolution`. No mathematical content was dropped. Every harvested result has a disposition. Final checks report 3/4 URLs fetch-verified and 4/4 sources resolved, with one documented mirror drop.

The current coverage file records source URLs, section locators, supported item IDs, source searches, retrieval attempts, harvested results, and their dispositions. `coverage-checklist` reports one A page, 12 harvested results, zero errors, and zero warnings.

## Final checks and readiness

- Scoped item dependency calculation: all eight levels match the manifest; no dependency cycles.
- `content-policy`: 8 items, 0 errors, 0 warnings.
- `depcheck`: 8 scoped items; dependency closure 8 items and 2 pages; 0 errors, 0 warnings.
- `rendercheck`: 10 items/pages, 0 errors, 0 warnings.
- `precheck`: all five proof-bearing items pass.
- `proof-layout`: 7 explicitly changed items, 13 steps, 0 defects.
- `coverage-checklist`: 1 page, 12 harvested results, 0 errors, 0 warnings.
- `source-fetch-check`: 3/4 URL fetch stamps; 4/4 resolved with one documented dropped mirror.
- Proof contracts: 8 contracts match the 8-item scope; derivation labels, cited proof steps, and exact supplier excerpts checked successfully.
- Step 1 records: all eight assigned items return current `closed:true`, `decision:ready`; each record lists its direct item dependencies. The five required provider items are also current and ready.

No unresolved mathematical prerequisite or proof obligation remains within this batch. The shared run-level digest still needs its owner-controlled recomputation described above. Later review gates remain responsible for independent acceptance.

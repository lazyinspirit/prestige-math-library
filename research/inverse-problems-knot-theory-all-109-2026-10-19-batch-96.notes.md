# Batch 96 authoring notes

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Pair: `knot-floer-genus-and-fiberedness-detection` and its examples page  
Role: beta  
Dispatch scheduling input: `41dd33146255b664e55b75603e7c764ee3bde257d4079845e209411309d97f62`

## Active run evidence

The recomputed native status at handoff is `running`, with Step 1 scaffold at 84/109, no writers in flight, and the owner repair/recertification blocker still active. No `.autopilot` state was edited. The current `git log -1` is `50139bdcb6 Defer compact construction artifact scans until author drain`; the extensive untracked drafts were treated as other authors' work unless explicitly in batch 96 scope.

## Controlling plan and conflicts

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the exact batch task, the owner authoring direction, the full KT-43 design section at `research/plan-knot-theory-track.md` around lines 1257–1287, `research/plan-spec.json`, the current prerequisite map, and the dependency-level input. The KT-43 design section controls item scope and proof route. The plan-spec page record agrees on page identity, title, order, category, companion and the two page requirements; its `items: []` has no competing item inventory.
- The prerequisite map assigns `def-balanced-taut-sutured-manifold-and-product-region` to KT-43 although the KT-43 design's A-item paragraph omits it. It is required for the sutured Floer claims and was added.
- The supplied item set had no local definition of the sutured disk-count complex or the relative Spin-c/Chern-class grading used by Ni/Juhasz. Added `def-sutured-floer-chain-complex`, `def-knot-relative-spinc-structure`, and `def-top-alexander-grading-of-knot-floer-homology` before their consumers.
- The planned B example needs the converse direction “fibered implies rank-one top group” to infer that the rank-two `5_2` group is nonfibered. Added `thm-fibered-knot-has-rank-one-top-knot-floer-homology`. The Poincare-sphere boundary case needs a complete local proof that the Poincare sphere is a nontrivial integral homology sphere; added `lem-poincare-homology-sphere-is-nontrivial-integral-homology-sphere`.
- The plan/scheduler inputs do not agree exactly: the dispatch describes batches 71 and 92 as prerequisites, while the current `batch-dependency-levels.json` record for batch 96 is level 6 and lists batches 59, 71 and 92. The page `requires` fields remain the plan/task values (satellite/JSJ and grid pages); item-level dependency on the batch-59 minimum-genus definition is recorded directly. No shared scheduling file was edited.
- The old broad grid route cannot establish the assigned integral claims: current batch-92 `thm-grid-homology-independent-of-grid-and-equals-knot-floer` is explicitly an F2 statement with `proof:not-supplied`, and current batch-92 disk analysis is for pointed S3 diagrams and mod-two boundary cancellation. It does not provide signed integral counts or a general-Y sutured analytic model. The integral statements are retained; the source route and proof obligations are escalated rather than changing coefficients.
- The batch-71 satellite page and its actual draft definitions are present now. The actual `def-satellite-pattern-companion-and-winding-number` body is S3-specific and assumes AC-omega; the actual `def-incompressibility-seifert-fibration-and-jsj-system` body gives the general 3-manifold terminology and also assumes AC-omega. Batch 71's manifest lists `thm-jsj-decomposition-of-knot-exteriors` at level 8, but `items/thm-jsj-decomposition-of-knot-exteriors.md` is absent. Its planned statement is for knots in S3 and assumes full AC, whereas the Ni statements here quantify over general closed oriented Y and state no AC hypothesis. This is a scope and axiom-strength mismatch. The local Ni items remain escalated; no false S3-to-general-Y interface is claimed.
- The actual declared transitive JSJ inputs in the batch-71 manifest include `lem-knot-exterior-is-irreducible`, `lem-kneser-haken-finiteness-for-incompressible-tori`, `lem-boundary-compressible-annulus-is-boundary-parallel`, `lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel`, `lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal`, `lem-essential-annulus-in-seifert-piece-isotopic-to-vertical`, `lem-atoroidal-piece-with-essential-annulus-is-seifert`, and `lem-seifert-boundary-fiber-slopes-unique-except-small-pieces`, plus AC/DC/AC-omega inputs. Their current carriers are draft. The actual `lem-knot-exterior-is-irreducible` proof is S3-only and depends on the current draft smooth Schoenflies supplier. The planned JSJ theorem body is the immediate blocker, so none of these draft inputs are treated as a completed JSJ proof.
- The controlling design includes a general-Y Ni fibering statement, not merely its S3 corollary. A suitable owner-level proposal is a proved JSJ/characteristic-region interface for knot exteriors in arbitrary closed oriented 3-manifolds, together with the integral signed sutured-Floer regularity/compactness/gluing/invariance input. Placement should be decided by the owner because extending the batch-71 S3 theorem is a cross-batch scope change.

## Inventory and item levels

Item inventory is in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-96.pages.json`; item order is ascending by computed level within each page.

| Level | Items |
|---:|---|
| 0 | `lem-poincare-homology-sphere-is-nontrivial-integral-homology-sphere`; `def-balanced-taut-sutured-manifold-and-product-region` |
| 1 | `def-sutured-floer-chain-complex`; `cex-knot-kt-43-boundary-case` |
| 2 | `def-knot-relative-spinc-structure` |
| 3 | `def-top-alexander-grading-of-knot-floer-homology` |
| 4 | `thm-knot-floer-detects-seifert-genus` |
| 9 | `lem-ni-holomorphic-disk-and-jsj-analytic-inputs` |
| 10 | `lem-ni-fiberedness-sutured-floer-and-gabai-inputs`; `thm-fibered-knot-has-rank-one-top-knot-floer-homology` |
| 11 | `thm-rank-one-top-knot-floer-detects-fiberedness` |
| 12 | `ex-knot-kt-43-worked-cases` |

The level-9 Ni analytic package uses the planned batch-71 JSJ item at level 8. Its carrier and general-Y hypotheses are unresolved. The dispatch's batch level 6 is a separate page/batch scheduling level, not a reason to lower these item levels.

## Source reading and dispositions

Full authoritative PDFs/lecture notes were opened and the complete relevant arguments read. Exact URLs, locators, supported items and every harvested-result disposition are in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-96.coverage.json`.

- Ni, `https://arxiv.org/pdf/math/0607156v4`, §§1–7: exact Theorem 1.1 hypotheses and proof route; sutured conventions, homology-product reduction, horizontal/product-annulus formulas, characteristic product region and Gabai input. The theorem's source scope is general Y; the local S3-only JSJ carrier does not discharge it.
- Juhasz, `https://arxiv.org/pdf/math/0609779v3`, §§1–3 and 8–9: balanced/taut definitions, sutured diagrams and signed complexes, relative Spin-c/Chern class, HFK/SFH decomposition, genus and fibering criteria. The proof route still needs a locally complete integral analytic foundation.
- Ozsvath–Szabo, `https://arxiv.org/pdf/math/0311496`, Theorem 1.2 and complete proof: integral genus detection for S3 knots via taut foliations/contact nonvanishing. The full local proof is not supplied.
- Ozsvath–Szabo, `https://arxiv.org/pdf/math/0209149v3`, Theorem 1.3 and proof: integral HFK ranks of alternating knots from the symmetrized Alexander polynomial (signature fixes the Maslov shift), supporting the stated `5_2` rank.
- Manolescu, `https://web.stanford.edu/~cm5/hfk.pdf`, Theorems 2.3 and 2.5 and relevant diagram sections: independent S3 genus/fibering treatment and conventions.
- Ozsvath–Stipsicz–Szabo, `https://web.math.princeton.edu/~petero/GridHomologyBook.pdf`, Chapter 4 and Chapter 16; MOS, `https://arxiv.org/pdf/math/0607691v2`, §§1–3: grid conventions and the explicit mod-two limitation. They are not used to infer integral HFK.
- Regensburg Algebraic Topology notes, `https://loeh.app.ur.de/teaching/topologie1_ws2122/lecture_notes.pdf`, §4.5.12, and Hatcher, `https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf`, §2.2: Poincare-sphere group/homology and Mayer–Vietoris support for the local counterexample.
- One KnotInfo 5_2 grid SVG click failed with HTTP/tool 400 during figure exploration; one curl recovery returned HTTP 200 and the SVG was inspected. This illustration was unused and is not a mathematical source. No source in the coverage ledger is dropped or replaced on that basis.

## Proof status and exact escalations

- Complete local proofs: the Poincare-sphere homology lemma and the connected-sum reducible-exterior counterexample. The counterexample's H0 Mayer–Vietoris calculation proves the punctured summands connected; the round-unknot complement calculation gives H1(A)=Z; neither side of the connected-sum sphere is a ball in the complement.
- Definitions: balanced/taut/product-region conventions; sutured diagram, disk-count and coefficient conventions, including d=0; relative Spin-c/Chern-class convention; integral Alexander grading. The definitions defer chain-complex existence, diagram invariance and coefficient comparison explicitly.
- Escalated deep items, with full statement scope retained: genus detection; Ni analytic/decomposition package; Ni sutured/Gabai product criterion; fibered-implies-rank-one; rank-one detects fibering; trefoil/5_2 worked cases. Their statements are not accepted and no proof completion is claimed.
- Exact outstanding proof work: (i) integral signed Heegaard/sutured disk regularity, finite counts, compactness, boundary degeneration, gluing, coherent orientations, and invariance; (ii) the HFK/SFH surface-decomposition map proofs; (iii) the general-Y JSJ and characteristic-product-region input for Ni; (iv) full Gabai/Floer argument; (v) a locally justified alternating-knot calculation for `5_2`, trefoil fiberedness and the irreducible-exterior application; (vi) resolve AC-omega versus full-AC uses without strengthening or weakening the public statements.
- Exact source-item mismatches and proposed supplier placement are expanded in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-96.cross-batch-dependencies.json` and the escalated proof-contract entries.

## Validation and decisions

Final results after the last item edit:

- source-fetch-check --stamp: 9/9 full-text sources fetched and stamped; 0 drops.
- coverage-checklist --require-destination: 1 page, 25 harvested results, 0 errors, 0 warnings.
- proof-contract --strict: 12/12 items checked, 0 errors, 0 warnings.
- proof-layout on the 12 explicitly changed items: 12 items, 9 proof steps, 0 defects.
- content-policy on the batch-96 manifest: 12 scoped items, 0 errors, 0 warnings.
- Statement-first inspection on the 12 assigned items: 0 defects.
- Batch-96 page/item inventory, dependency-list, item-level and empty-body consistency check: 12 items, 0 defects; all four JSON evidence files parse.
- item-dependency-levels check for the whole run exits 1. It reports 13 unrelated empty A/B scaffold inventories (inverse-problem-benchmarking-and-shift, open-frontiers-in-learned-inverse-problems, hyperbolic-dehn-filling-and-exceptional-slopes, fox-milnor-factorization-and-slice-obstructions, casson-gordon-invariants-and-sliceness-obstructions, freedman-theorem-and-topological-sliceness, satellite-operators-and-knot-concordance-filtrations, colored-jones-invariant-and-volume-conjecture, tau-invariant-and-the-four-ball-genus, epsilon-and-upsilon-concordance-invariants, character-varieties-and-the-a-polynomial, open-questions-in-knot-polynomials-and-surgery, and zero-traces-and-conway-nonsliceness) and one unrelated mismatch: cex-knot-kt-21-boundary-case level 15 versus computed 16. It reports no batch-96 level mismatch; the per-batch dependency/frontmatter consistency check passes.
- step1-decisions record created six ready and six escalated records, without --owner; a read-only hash check finds 6 ready records current and 6 escalations with no drift. The ready records are the four local definitions plus the Poincare homology lemma and the reducible-exterior counterexample. All genus, Ni, rank-detection and worked-example claims remain escalated.

No test suite was added or run. No published item, shared plan, scheduler input, engine state, owner verdict or other pair's file was edited. The draft page bodies remain empty and no page-layout flag was authored.

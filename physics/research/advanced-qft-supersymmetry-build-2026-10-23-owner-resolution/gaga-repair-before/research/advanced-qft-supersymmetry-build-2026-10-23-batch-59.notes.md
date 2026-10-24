# Batch 59 authoring notes

Run: advanced-qft-supersymmetry-build-2026-10-23  
Batch: 59  
Pair: qftx-adhm-linear-data-and-framed-monads / qftx-adhm-linear-data-and-framed-monads-examples  
Manifest: research/advanced-qft-supersymmetry-build-2026-10-23-batch-59.pages.json

## Scope, plan and design

- The assigned task is research/advanced-qft-supersymmetry-build-2026-10-23-beta-59.task.md. The owner direction read before authoring is research/advanced-qft-supersymmetry-build-2026-10-23-owner-authoring-direction.md; it controls stale design material.
- No separate design section or design dossier governed this pair. The pair was scaffolded from the owner ADHM prerequisite scaffold and the inspected sources; no design section is claimed as read.
- research/plan-spec.json and research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/scope-extension-7-pairs.json agree with the assigned page title/order, exact six A items, two B examples, and the fifteen A-page requirements. No claim, convention, or inventory conflict was found.
- The initial A-page frontmatter had requires: [], only three of six items, and no examples; the initial batch manifest also had empty inventories. These stale placeholders are repaired to the canonical plan. The new B page has YAML frontmatter only and an empty body.
- The A page retains order 967.2, draft status, mathematics library, and an empty Markdown body. It now contains the six planned A items and exact fifteen page prerequisites; its examples list is empty because the companion B page owns the two examples. The B page retains draft status, has no body, contains both examples, and requires the A page.
- A duplicate published page file exists for the prerequisite ID relations-functions-and-quotients at both library/foundations/relations-functions-and-quotients.md and library/set-theory/relations-functions-and-quotients.md; both frontmatters and page contents inspected here are identical. No outside file was modified. The exact page-ID prerequisite is retained, and this path-duplication observation is recorded for the owner.
- The batch-dependency file places batch 59 at batch level 0 with requires: []. No edge to another run batch is present. Item levels below follow in-run item edges, not page requirements.

## Item inventory, claims and dependency levels

| Level | Item | Authored claim and interface |
|---:|---|---|
| 0 | def-qftx-adhm-linear-data-stability-and-regularity | Raw finite-dimensional ADHM maps, complex/real moment expressions, word stability, costability, regularity, positive/zero FI loci, and the dual-framing torus convention. Explicitly asserts no sheaf, ASD, quotient, or noncompact-pushforward result. Preserved unchanged. |
| 1 | lem-adhm-stable-quotient-and-torus-lift | Stable complex quotient is free/proper with word-frame charts, smooth finite-type geometric quotient and tangent complex; compact-torus lift follows from actual word-frame characters. Preserved unchanged after full proof inspection. |
| 2 | thm-qftx-adhm-real-complex-quotient-correspondence | Finite-dimensional minimization proves positive-FI stable-orbit/real-unitary-orbit equivalence and zero-FI regular-locus equivalence, with smoothness and compact-torus equivariance. Endpoints remain distinct. Preserved unchanged after full proof inspection. |
| 0 | thm-qftx-projective-gaga-for-monad-data | Exact projective GAGA for P²/P³, cohomology, finite Ext, restriction to the framing line, and a narrowly stated algebraic-family/base-change interface. The proof is conditional on [A1] projective analytic local-flatness/Cartan A–B/uniform generation and [A2] relative direct-image comparison; those packages have no current local carrier. |
| 1 | lem-qftx-p2-beilinson-diagonal-and-framed-vanishing | Locally proves line freeness, framed slope semistability, H⁰/H² vanishings, the exact dimensions, the diagonal Koszul resolution, and the three-term Beilinson monad. Family statement is limited to flat finite-type algebraic families with the displayed constant cohomology ranks and actual base-change isomorphisms. Uses the GAGA item conditionally. |
| 3 | thm-qftx-framed-p2-monad-adhm-correspondence | Locally proves the raw ADHM complex, beta surjectivity, alpha sheaf-injectivity and costability criterion, torsion-freeness by depth, framing/Hilbert polynomial, normalized converse, stability, GL(V) uniqueness, algebraic family and dual-number tangent maps, and torus weights. The sheaf dictionary is conditional on the preceding GAGA/Beilinson interfaces. |
| 4 | ex-qftx-adhm-one-dimensional-fi-chambers | For N=k=1 computes positive-FI quotient C², empty stable zero level, and a nonregular framed rank-one sheaf. It proves directly that a smooth U(1) ASD connection on round S⁴ has zero charge, so the ordinary charge-one ASD space is empty. |
| 4 | ex-qftx-adhm-zero-charge-framing-monad | For k=0 checks every empty map, equation, quotient, Euler block, framing, and Hilbert polynomial; the inverse statement follows from the Beilinson monad. |

The first three existing carriers were reread in full. Their statements, hypotheses, proof contracts and content were not changed. All mathematics items remain in domain mathematics, library mathematics; no physical premise is introduced.

## Source evidence

Six full-text sources were inspected and then verified by the scoped fetch-stamp command. The source coverage file records each source locator, per-item disposition, read extent, supported claims and limitations.

- Serre, Géométrie algébrique et géométrie analytique, Theorems 1–3 and proofs §§12–17, printed pp. 19–27, plus local analytic-ring discussion §§5–6: supports the precise GAGA interface. Its proof depends on projective analytic inputs; it does not erase the local [A1]/[A2] obligations.
- Nakajima–Yoshioka, Lectures on Instanton Counting, full 60-page lecture notes, §3.1, PDF pp. 17–19: independent full-notes treatment of framed torsion-free sheaves, locally-free locus, boundary and conventions; it does not prove the dictionary.
- Lee, Introduction to Smooth Manifolds, 2nd ed., Prop. 21.4 and Thm. 21.10 with proofs, printed pp. 542–547: book treatment of the quotient-manifold input; the ADHM properness proof remains local.
- Nekrasov, Seiberg–Witten Prepotential from Instanton Counting, §§3.1–3.3, equations (3.1)–(3.9): raw ADHM signs, torus and FI conventions; the local quotient proof is not attributed to it.
- Donaldson, The ADHM construction of Yang–Mills instantons, full 15-page text, printed pp. 3–12: independent monad/twistor context and Beilinson roadmap; not a complete P² dictionary proof.
- Henni, Monads for framed torsion-free sheaves on multi-blow-ups of the projective plane, full arXiv text, §§2–3: independent monad construction context; the exact P² diagonal, framed vanishings and family argument are supplied locally.

The A page has independent full treatments in the complete Nakajima–Yoshioka lecture notes, Donaldson paper and Lee book; Serre and Henni provide primary source treatments of the two difficult algebraic interfaces. No source retrieval failed, so no recovery retries or source drops were required. No source-resolution failure record was created.

## Dependency and convention checks

- Raw complex equation: mu_C=[B1,B2]+IJ. Raw real equation: mu_R=[B1,B1†]+[B2,B2†]+II†−J†J.
- Word stability means the span of every B-word applied to I(W) is V. Costability means no nonzero common invariant subspace lies in ker J. Positive-FI complex data use stability; zero-FI balanced data use stability plus costability.
- On P², the convention is alpha=(z0 B1−z1,z0 B2−z2,z0 J)^T, beta=(-z0 B2+z2,z0 B1−z1,z0 I). Their product is z0²([B1,B2]+IJ). The framing representation is h=diag(e_alpha^{-1}), with characters sum e_alpha^{-1} and dual sum e_alpha.
- The Beilinson family statement requires a flat finite-type algebraic family and the indicated constant-rank cohomology/base-change isomorphisms. No arbitrary holomorphic-family algebraization is claimed. The GAGA direct-image clause is explicitly conditional on its own relative comparison [A2].
- The monad depth argument uses the regular-local surface ring and projective-dimension bound at the finite alpha rank-drop set. Stability proves beta surjectivity; common eigenvectors over C identify alpha rank drops with noncostability. No locally-free strengthening is silently applied to arbitrary torsion-free sheaves.
- Cross-batch dependencies are recorded as one edge per direct page/item supplier. The JSON contains 15 page edges and 51 external item edges; all 66 rows have nonempty evidence and status `verified`, meaning the scoped interface was checked, not independently approved. The unresolved Cartan/relative-GAGA packages are not invented as supplier rows and remain in these notes and the GAGA item's [A1]/[A2].

## Validation and readiness

Source fetch stamping passed: `source-fetch-check --coverage research/advanced-qft-supersymmetry-build-2026-10-23-batch-59-source-coverage.json --stamp` reported 6/6 sources fetch-verified and 6/6 resolved, with no drops. Coverage checklist: 1 page, 10 harvested results, 0 errors and 0 warnings.

Final scoped checks passed: content-policy covered all 8 items with 0 errors/warnings; strict proof-contract validation covered all 8 with 0 errors/warnings; citation fidelity checked 59 quotations with 0 misses; citation-faithfulness screening found 0 candidates across 8 items; proof-layout checked the 5 changed items and 32 steps with 0 defects; rendercheck covered 10 page/item files with no issues; manifest-deps found 0 missing dependencies; scoped depcheck covered the 8 selected items and their 3,625-item/407-page closure with 0 errors/warnings; manifest-integrity reported 124/124 obligations present with 0 drift. The scoped dependency-level calculation returned exactly `[0,1,2,0,1,3,4,4]` in manifest order, with no cycles or label errors. Page bodies are empty YAML-only pages. The batch-59 cross-batch file is a JSON array of 66 valid rows (15 page, 51 external item), all `verified` at the scoped-interface level.

Native Step 1 records are present for all 8 assigned items, with the three `ready` records hash-current: the definition, stable-quotient lemma and real/complex quotient theorem are `ready`; the GAGA theorem, Beilinson/framed-vanishing lemma, monad/ADHM theorem and both examples are `escalated`. The GAGA proof remains conditional on [A1] projective analytic local-flatness, Cartan A–B and uniform generation, and [A2] relative direct-image comparison. No local carriers with complete proofs for those packages exist. Its consumers retain their completed conditional arguments and must remain escalated until the actual interfaces are supplied and checked. Draft status, pending precheck, and absent independent approval were not treated as prerequisite gaps.

Two run-wide checks remain blocked outside this batch. The full run item-level check reports 22 unrelated errors: six empty inventories on the `qftx-s3-partition-functions`, `qftx-spectral-networks`, and `qftx-adhm-zero-fi-asd-correspondence` A/B pairs, plus 16 stale level labels on the AQFT anomaly and QFT sphere-gauge items (`lem-aqft-local-counterterm-shift-is-relative-coboundary`, `def-aqft-thooft-anomaly`, `def-aqft-anomaly-matching-data`, `pthm-aqft-selected-chiral-spectrum-anomaly-cancellation`, `ex-aqft-single-chiral-fundamental-polynomial`, `ex-aqft-mixed-background-counterterm-shift`, `ex-aqft-vectorlike-conjugate-chiral-pair`, `pthm-aqft-symmetry-preserving-rg-anomaly-match`, `op-aqft-fusion-two-category-anomaly-classification`, `ex-aqft-local-anomaly-counterterm-transport`, `ex-aqft-explicit-breaking-endpoint`, `lem-qftx-parametric-gauge-smoothing`, `lem-qftx-sphere-gauge-evaluation-fibration`, `lem-qftx-based-gauge-sphere-homotopy`, `thm-qftx-reduced-gauge-group-sphere-nontriviality`, `ex-qftx-sphere-gauge-s3-components`). The full batch-dependency-level check stops while parsing an unrelated batch-51 `\widetilde` source passage, with `Invalid escape sequence \w` (the reported item is `ex-qftx-omega-u1-one-instanton-factor`); it therefore does not reach the recorded-state comparison. These shared inputs were not edited. Batch 59 itself has level 0 with `requires: []`, and its scoped item levels pass as above.

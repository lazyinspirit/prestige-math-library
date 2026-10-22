# Batch 80 authoring notes — qftx-kz-chiral-interface

## Inventory and plan reconciliation

- The run’s owner-authoring-direction override file was absent when checked.
- Assigned A/B pair: qftx-kz-chiral-interface (order 857) and qftx-kz-chiral-interface-examples (order 858), category quantum-field-theory-mathematics, library mathematics. Plan-spec matches page IDs, titles, companion, order, category, library, and the A page’s four required pages: qftx-anomaly-cocycles, qftx-ribbon-braid-representations, harish-chandra-isomorphism-casimir-and-central-characters, modular-categories-verlinde-and-tqft. The B page requires A.
- The plan-spec rows were empty scaffolds; the detailed design assigns three A items and one B example. Two local A lemmas were added before their consumers: lem-qftx-casimir-tensor-diagonal-invariance supplies the triple curvature identity, and lem-qftx-basic-form-scale supplies the Killing/basic-form conversion. No page identity or scope conflict was found. The WZW definition’s direct item dependencies also include the current-cocycle, braided-line, basic-form, Drinfeld, ribbon-category, and KZ inputs it actually uses.
- Final item levels are 0, 0, 0, 1, 2, 2 for the two lemmas, KZ definition, flatness theorem, WZW contract, and example. The scoped dependency calculation reports no errors or cycles. A has 5 items and B has 1, below the 100-item cap.
- Recomputing the current 129-batch graph gives batch 80 level 4, requires batches 63 and 75. The shared scheduling file’s input hash is stale, although its batch-80 row still says level 4 and requires 63 and 75. Shared scheduling metadata was left for the owner to refresh.

## Mathematical route and conventions

- The A page defines the Killing-form Casimir KZ connection on ordered configurations, proves diagonal invariance of its tensor, expands curvature and cancels disjoint-pair and triple terms using the logarithmic Arnold relation, then constructs local-system transport and pure-braid monodromy.
- Full-braid descent is conditional on all tensor factors carrying the same module and action. The statement gives the simultaneous coordinate/tensor permutation explicitly. The proof fixes the library’s first-then-second loop product; path transport composes in reverse operator order, so the left representation is the inverse of the positive path transport.
- The source’s standard WZW shift uses the long-root-length-two basic form, while the planned KZ tensor uses the Killing form. The local scale lemma proves B_Kill = 2hvee B_bas and the WZW item records kappa_Kill = (k+hvee)/(2hvee). This converts coefficients exactly.
- The WZW item is a conditional completion contract. It states current-mode, level, module, coinvariant, conformal-block, sewing, and Sugawara interfaces, and does not claim affine conformal-block existence, finite dimensionality, sewing/factorization, or Drinfeld–Kohno/VOA equivalence. Its sl2 modular input applies only to the stated positive-trace divided-power tilting quotient; no identification with KZ monodromy or generic unitarity is inferred.

## Supplier audit and cross-batch inputs

- qftx-anomaly-cocycles is verified for the scoped current-algebra use: the current-cocycle Definition and Jacobi/central-extension proposition are current and ready. The unrelated anomaly coefficient interface is not used.
- qftx-ribbon-braid-representations is now verified. Its current A-page prerequisites include tensor-and-fusion-categories, braided-and-symmetric-monoidal-categories, free-groups-and-presentations, principal-series-representations-of-gl-n-over-a-finite-field, and unitary-fusion-spaces-f-and-r-symbols-and-anyon-models, alongside its original five page prerequisites. Its current def-qftx-braided-line-model record is ready and hash-current at 011c29ceb0718bf30abd08b6d701007bc92e838e2c1b64a74490db4edb9c5357. I reread the current Statement and full Proof after that owner update; its exact category, braiding, positive-generator, and coherence interface matches the conditional WZW use.
- The source owner’s record says batch-80 consumer use remains separately provisional. The five final cross-batch rows are verified with no orphaned reviews: the anomaly page, ribbon page, WZW-to-current-cocycle Definition, WZW-to-cocycle-Jacobi proposition, and WZW-to-braided-line item. Verified here records only the scoped interface check, not independent mathematical approval.
- The WZW item’s own Step-1 record was written escalated at 2026-10-21T14:23:35.803Z using the earlier stale-source audit. The owner had updated the ribbon supplier to ready at 14:23:03.980Z; I failed to recheck between those serial writes. I did not use --owner or overwrite the escalation. I corrected the WZW Remark, so its record hash is now stale as well: recorded 02561bb0fca8729ae1fdce2500cd7180a507284f5183308b47fa5187a3bec3a0; current itemHash 94be0d8b61c0efc479ec903810e0c1fe1f16374f9f469141c7cbfb4daf775c31. Its Step-1 decision remains escalated for owner resolution; the current mathematical supplier interfaces and both cross-batch edges are verified.

## Source harvest

The coverage file records two independent full-text treatments for A, nine harvested results, exact locators, supported items, and each result’s disposition.

- Etingof, Frenkel, and Kirillov, Lectures on Representation Theory and Knizhnik-Zamolodchikov Equations (AMS Mathematical Surveys and Monographs 58, 1998): https://djvu.online/file/elCdJNnaapAuA. Inspected Lecture 1 §§1.2 and 1.4; Lecture 2 §§2.5–2.8, printed pp. 19–25; Lecture 3 §3.5, pp. 36–37; Lecture 8 §8.1, pp. 113–115. The AMS full-PDF probe returned 403; the identified complete book text was read at the cited full-text copy and its identity checked against AMS catalog/endmatter.
- Kohno, “Monodromy representations of braid groups and Yang-Baxter equations,” Annales de l'Institut Fourier 37 (1987), no. 4, pp. 139–160: https://www.numdam.org/item/10.5802/aif.1114.pdf. Read the complete 23-page archival paper and §1.1, printed pp. 141–143 / PDF pp. 3–5.
- Both active source URLs pass source-fetch-check with stamps: 2/2 fetch-verified, 2/2 resolved, 0 new stamps, no drops. No unresolved source_resolution entries remain. The B example cites the same treatments and supplies its own sl2 calculation.
- The design’s amplitudes and local-Lie background references provide context but do not supply independent complete KZ connection, curvature, and monodromy arguments; the Etingof–Frenkel–Kirillov book and Kohno paper were added for that mathematical coverage.

## Contracts, checks, and readiness

- The proof contract covers all 6 items, with 34 exact supplier excerpts, 29 numbered derivations, all 8 standard boundary dispositions per item, and 6 finite checks. Strict proof-contract: 6/6, 0 errors or warnings.
- Final proof-layout: 6 items, 29 steps, 0 defects. Final author-check passes precheck, rendercheck, scoped content policy, and strict proof-contract. Scoped depcheck passes. Coverage checklist reports 1 sourced A page, 9 harvested results, 0 errors and 0 warnings. The explicit batch-80 item-level calculation passes with levels 0, 0, 0, 1, 2, 2.
- Five item Step-1 records are ready and hash-current: both lemmas, the KZ connection, the flatness theorem, and the B example. The WZW item remains escalated because the recorded decision cannot be replaced without owner authority; no --owner option was used.
- The run-wide batch-level input hash is stale. The recomputed batch-80 scheduling row remains level 4 with requires [63, 75]. The shared run-level file was not changed.

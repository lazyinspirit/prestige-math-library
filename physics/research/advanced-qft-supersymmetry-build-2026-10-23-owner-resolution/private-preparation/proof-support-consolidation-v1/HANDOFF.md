# Opt-in V2 proof-support consolidation

Actual cause: the difference-cochain theorem’s step2.2 moves an existing pre-display [F2,F4,step1.1] cluster into its old terminal[F2,F4], preserving the support union; the old reader compares terminal strings only. Step1.2 is a separate already-supported V2 presentation delta. Main/pin bytes were read-only, and main finalization/science/consumer approval remain Index/Root-owned.

Six scoped BUILD tool/test/doc files are frozen in code-boundary.json (SHA256 d040b7711746edb8a49ff2086da6989dec4a3be784d72271fef2e759e41a1843), with scoped.patch/preimages. Core extractor6931ecd05765828ea36c646146ee87e39bdf724ab582774332ed3032e8740a9d; mainwrapper28f3d2ae31ca799501cfee84a0ec85adc4b7762b49eafb3d2c7d7e5c40a19ad0. No commit/reload/native/authority/readiness/source/pin writes. Frozen pending independent Super audit and final Root review.

Typed entry opt-in ONLY under presentation_version2:

```json
{"proof_support_consolidation":{"version":1,"steps":["2.2"]}}
```

The wrapper passes the exact object as the third extractor argument. Malformed/duplicate/unknown/unused requests fail, and legacy entries reject the field. New delta kind proof-support-consolidation has fullbefore/after step bytes plus support_consolidation:version1,terminal_before,terminal_after,removed_cluster{text,offset},support_union,display_before,inline_after,qed,scientific_tokens_sha256. The returnedchanges object binds the opt-in and exact source hashes. The validator demands the same entryoption and exact usedstep set, ordinary exact per-delta hash/reason/reading_limits/evidence, hypotheses identical and no new premises/results. Main repair/authentication/finalization/consumer/source guards remain and the new kind participates in the existing diagram-independence requirement.

Only one same-step prose cluster immediately before a single-line display is consolidated. Newfinal support must equal stable union(oldfinal,removedcluster) with no duplicates/added/lost tags. SameQED. Exact displaypayload bytes after outertrim, only its actual finalcomma moved immediately outside inline math. Surrounding protected math/code/wiki spans stay byte-identical; only outsideprose whitespace collapses. Fences/comments/unclosedspans/ambiguousclusters/noncomma/payload/punctuation rewrites/crossstep movements fail conservatively. This is not a generic proof-support or scientific-text normalization.

Verification:100tests PASS (73prior+27new) in all-tests-100.log; old53-golden.json proves every installed extraction JSONbyte-identical to oldextractor and installedchanges, including legacyentries. New adversarial fixtures cover added/lost/duplicate tags, formula/prose/punctuation/QED changes, hidden code/wiki/math clusters, crossstep/unknown/unusedoptions, missing/stale/unboundreviews, legacy optin rejection and inherited diagramindependence. Node syntax/scopedgitdiffcheck pass. Actual current read-only extraction facts in actual-difference-case-extraction.json are not a finalized main repair or source adoption.

Focused command:

```sh
node --test tools/physics-support/original-maintenance.test.mjs tools/physics-support/original-rendering-maintenance.test.mjs tools/physics-support/original-presentation-maintenance.test.mjs tools/physics-support/physics-imports-category-projection.test.mjs tools/physics-support/original-proof-support-consolidation.test.mjs
```

No unchanged-content gate battery was repeated. Ordinary actual native owner recertification/gates remain Root-owned after final code review and any necessary real source finalizations.

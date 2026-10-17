# Root-only boundary intake

This is a research integration packet, not canonical application, mathematical acceptance, a gate, recertification, or hash binding. `intake.py plan` has actually run and writes research artifacts only. Its root application branch has not been run. Existing root and engine histories remain untouched.

The explicit `final-packets.json` allowlist contains owner-confirmed final releases. Never glob all proposed packets into application: many old releases are intentionally retained. Packet replacements remove only the superseded path from the allowlist. Each plan generation preserves its manifest, normalized index, diagnostics and current source snapshots under `generations/`.

Run the read-only intake with:

```sh
python3 research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/intake.py plan
```

`coverage-report.json` reports original occurrence counts and deduplicated item/case coverage separately. Original diagnostics contain 9938 template rows, 370 contradiction occurrences and 192 strict-anchor occurrences; the latter represent 192 unique item/case keys. The full union has 10133 unique targets. `missing_targets`, normalization errors, conflicts and row guards remain explicit. Reviewed template rows that retain their original prose still count as owner-supplied **unapplied review intents**, with the actual source-specific owner assessment retained. Their existence does not assert checker closure.

`normalized-index.json` records current canonical owner file/path, exact current before/after row, all contributing packet records, and diagnostic signals. The rehomed PCVAR example is routed by actual unique current contract ownership to batch 92; original owner evidence and history remain intact. A row replacement is decomposed into immediate fields so genuinely disjoint or identical field changes can compose. Conflicting values, including deletion versus retained/replaced text, are errors rather than last-write-wins. Owner fullrow preimages are compared exactly to current rows; already-equal final proposals are identified without inventing historical equality.

Only named boundary rows can change. Source quotes, citations, derivations, classification, finite smoke and unrelated metadata are never restored from old full-carrier proposals. Newly requested `reviewed` or `template_review` values are separated into `UNAPPLIED-review-intents.json` and cannot be applied by this utility. Existing current review/history values remain unchanged. Root must adjudicate each actual scientific rationale and bind final payloads in its separate authorized binding operation.

`literal-anchor-issues.json` is a read-only transcription check of the actual boundary evidence grammar, using current numbered source labels. It is not the native proof-contract gate or mathematical validation. Explicit obsolete step mentions can fail even in negated prose; a real Definition/Statement/Example anchor or actual proof-step reference must support checked evidence. Unsupported anchor prefixes must not be invented to silence this report. `explicit-proof-reference-review.json` additionally checks direct Proof/Verification references in both checked and not-applicable prose, because the native checked-only grammar can miss stale labels in contextual notes.

`source-guard-report.json` compares literal known owner source archives and embedded complete source bodies where available. Missing historical full-byte guards are recorded as unknown; changed archives remain mismatches. Integration current snapshots only bind the bytes seen during this plan, and do not claim that the helper or original owner mathematically read those exact historical bytes. Root-approved format, notation, dependency, routing and scientific changes must be assessed honestly. Root can approve current source correspondence individually by item, or explicitly for the entire exact reviewed source report with a substantive reason; neither approval invents historical byte equality or adds proof-review flags.

Application remains root-only and requires all targets covered, no conflicts, no errors, no row guards or literal-anchor failures, and no pending final lanes. Root first copies the exact reviewed index, manifest and source report to separate immutable approval snapshots. A root approval JSON has this shape (paths are repository-relative):

```json
{
  "root_authorized": true,
  "scientific_reasons_reviewed": true,
  "approved_index_snapshot": "research/ROOT-REVIEWED-normalized-index.json",
  "approved_manifest_snapshot": "research/ROOT-REVIEWED-final-packets.json",
  "approved_source_report_snapshot": "research/ROOT-REVIEWED-source-guard-report.json",
  "source_confirmations": {
    "ITEM-ID": "Root's concrete reason accepting current source correspondence despite an absent or mismatching historical archive."
  }
}
```

Alternatively root may replace the per-item confirmations with explicit `all_current_source_correspondence_approved: true` and a `source_correspondence_reason` of at least 80 characters explaining its actual review of the exact source report and known changes. Historical source-byte equality remains unasserted where unavailable. This is root authorization, never an automatic classification by intake. Do not set it without that review.

Root alone may then invoke:

```sh
python3 research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/intake.py apply-root-only --approval research/ROOT-boundary-approval.json
```

This branch checks exact approval snapshots, current source bytes, and all current row preimages before staging any write. It then checks full contract bytes again and atomically replaces individual files. The multi-file operation requires a drained writer set; it is not a database transaction. An exceptional rollback restores only files still matching this invocation's output and refuses to overwrite concurrent changes. An application receipt records actual files, without claiming hashes, bindings or gates. This helper has **not invoked that branch**.

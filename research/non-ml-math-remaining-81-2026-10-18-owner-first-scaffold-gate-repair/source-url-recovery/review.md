# Source URL recovery proposal

Both advisory failures are already resolved at the mathematical source level in batch28. The canonical coverage ledger contains the original failed source records, with six actual failed attempts each, documented dropped resolutions and replacement arguments. It also contains active corrected author-hosted records on both A and B, with genuine full-body verification at those corrected URLs. The original source-coverage ledger separately retains that history. None of these canonical inputs was edited.

The liveness report nevertheless harvests both old URLs from preserved history. In tools/url-sweep.mjs, raw citation collection is followed by explicit original_url supersession handling; sourceDropped records are skipped before that handling. Consequently the historical dropped rows alone do not declare the old links superseded to this collector. The existing active replacement records do not yet have original_url.

## Fresh full-body verification

Both existing live replacements were freshly fetched with default verified HTTPS, HTTP200 and application/pdf, at the exact URLs below. No certificate bypass, archive assumption or transferred stamp was used.

- EGNO: https://math.mit.edu/~etingof/egnobookfinal.pdf — 3,067,397bytes,362pages, SHA256 `a40d076197b666d8b3b231ac59748a95f9b311d49ce57f4024c0da8308796db3`.
- Penneys: https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf —508,049bytes,27pages, SHA256 `39d258895b3ff4d5c0e429280c039b4888de96203f691f5388ed15a651504ccb`.

The fresh EGNO body is fully byte-identical to the retained physics-algebra source PDF; the fresh Penneys body is fully byte-identical to the retained earlier Ising source PDF. Both also match the exact bytes/pages/SHA256prefix recorded in batch28's genuine2026-10-17T15:53fetches. `full-body-identity.json` binds the retained and fresh copies. This is edition identity by actual complete bytes, not merely a title or basename match.

Identity inspection read EGNO PDF1–2 (the AMSVolume205 *Tensor Categories*, four named authors, author's final version) and Penneys PDF1,4,16 (Math8800 *Unitary fusion categories*, the section3.2dagger definition and exact fusion-tree/F-matrix text). The Penneys PDF creation metadata is2023-10-04. This was a bounded identity/edition inspection, not a new whole-book or complete-notes read. Original reading attribution remains unchanged.

## Minimal proposed canonical change

The proposed batch28coverage adds only `original_url` to the four already-active corrected source records (two URLs on A and B). The original_url values are the corresponding failed kleinMIT and oldOSUFusionCats URLs. No reader-facing URL, source title, harvest, reading paragraph, fetch stamp, failed attempt, source_resolution or retrieval-history entry changes. `delta-proposal.json` gives exact JSON pointers and the existing fetch records; reversing these four added fields recovers the original JSON object exactly. Canonical source-coverage history is untouched.

This uses the documented native supersession vocabulary already consumed by url-sweep, rather than excluding a genuine unresolved citation. A pure local check with the actual citationUrls/sourceDropped functions and documented supersession loop confirms that both live URLs remain collected and the two historical links become explicitly superseded. That check is not a production URL gate and made no network request. No runtime or liveness artifact was changed.

## Native archive candidates and apply route

The native report found real Wayback candidates. Their exact timestamps and URLs are copied in native-failures-and-recoveries.json and the full original report is preserved under before/. They have not been full-body fetched or edition-matched by this reviewer. In particular the Penneys candidate timestamp2023-02-08predates the creation date of the verified current2023-10-04PDF; it must not be presumed the same edition.

Ordinary tools/url-recover-apply.mjs would mechanically swap a failed source URL to its report's archive snapshot while preserving original_url. Here those old sources are already documented dropped and the exact live recovered editions already exist as active records. Swapping the dropped records to unverified archive editions would add no source backing and could change edition identity. The proposed original_url addition records the same native reader-facing supersession relation on the actual verified replacements while preserving all genuine failed-mirror evidence. Root owns integration and any truthful refreshed fetch stamps after the active battery's findings are complete. No old fetch stamp is reassigned to a new URL.

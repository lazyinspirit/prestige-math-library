# Four URL liveness failures: historical metadata resolution

The four failures are historical metadata leakage into citation collection. No selected source URL needs replacement, and no new source reading or fetch stamp is claimed. The JSON contains exact JSON-pointer operations and verbatim before values.

- Batch17: move `/source_candidates` to `/historical_source_candidates` and `/retrieval_history` to `/historical_retrieval_history`, preserving both arrays unchanged. Selected Ferguson1973 WPI and Ghosal–van der Vaart2007 arXiv citations remain active.
- Batch56: move `/pages/0/sources/0/retrieval_history` to `/pages/0/sources/0/historical_retrieval_history`, unchanged. The selected Arlot–Celisse arXiv author version remains active.
- Batch53: preserve the complete original locator under `/pages/0/sources/0/historical_diagnostic_reading`; keep only the main-paper ranges in the current locator. The supplement was diagnostic reading whose empirical-covariance proof defers by analogy; it was never an accepted supplier.
- Batches10/18: no change. Their GGV2000 source drops already exclude the failed VU URL. Batch17’s old VU candidate is inconsistently labeled2007; its actual PDF identity cannot be established from403 HTML, so do not replace it with either paper.

Fresh ordinary TLS-verified GETs retrieved WPI Ferguson1973 (HTTP200, application/pdf,1,672,660bytes,23PDFpages including cover; journal pp209–230), Arlot–Celisse arXiv0907.4728 (HTTP200, application/pdf,546,503bytes,40pages), and main MBB/TBB arXiv1711.01070 (HTTP200, application/pdf,908,265bytes,29pages). Identity/front matter and pagination were inspected; these observations do not claim a new full mathematical reading. The last PDF is not the supplement.

Fresh failures: VU403/5,594-byte Cloudflare HTML; UNAM TLS issuer verification failure/no body; Yale TLS self-signed-certificate failure/no body (the native earlier record reports hostname mismatch and is retained exactly); supplement403/4,545-byte Cloudflare HTML. No accessible same15-page supplement was established. Its earlier native browser retrieval/reading remains historical evidence, without upgrading the current response.

`tools/citation-urls.mjs` already excludes coverage keys beginning `historical_`, dropped source objects, and recovery/source-resolution/check fields. The proposal uses that supported distinction between current citations and past diagnostic observations. All original URLs and outcomes remain intact. Root owns coverage integration, bindings, fetch certification and fresh recertification before the full battery. No gate or partial test was run here.

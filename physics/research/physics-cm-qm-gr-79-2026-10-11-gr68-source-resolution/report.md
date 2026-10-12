# GR68 Minguzzi source-reading resolution

The source text is genuinely available locally. The canonical Springer URL's documented current bot wall does not invalidate the earlier retrieved full publication. The existing `advanced-sources/minguzzi-living-review.pdf` is 2,787,175 bytes, has 202 pages according to MuPDF, and hashes to `eecf79113a9e69032570c75556df48096b549928a9df600f8d9700a2ff86871c`. That exactly matches `advanced-sources/source-metadata.json`, which records retrieval on **2026-10-03** from `https://link.springer.com/content/pdf/10.1007/s41114-019-0019-x.pdf`. The title page identifies E. Minguzzi, *Lorentzian causality theory*, Living Reviews in Relativity (2019) 22:3 and the same DOI. The accompanying 587,582-byte text hashes to `1c64a300f10063c1135191062dccb540b3e115e4550988c39314e998ff0b9a65`.

This diagnosis read the cached PDF's bounded pp. 35–36 and 159–161, independently extracted again with MuPDF in [minguzzi-pages-35-36-159-161.txt](minguzzi-pages-35-36-159-161.txt). Section 6.1 contains the exponential differential definition of conjugacy, Proposition 6.3 and its geodesic-variation proof, Jacobi initial conditions, the matrix of Jacobi fields and the Riccati identity. Theorem 2.22 and its interior-conjugacy/nonmaximization remark occur on pp. 35–36. This is a bounded source-reading resolution, not a complete 202-page reading or independent proof acceptance. The original October 3 provenance records earlier bounded reading in other sections; those records were neither enlarged nor rewritten.

Current carriers in `physics/items/`, all retaining their existing Springer secondary reference:

| Page | Item | Reference line |
| --- | --- | --- |
| A: gr-curvature-and-tides | def-gr-jacobi-field-and-conjugate-instant | 31 |
| A | thm-gr-jacobi-equation-and-geodesic-deviation | 40 |
| A | lem-gr-conjugacy-via-the-exponential-map | 30 |
| A | lem-gr-normal-index-form-factorization | 38 |
| A | thm-gr-conjugacy-and-local-timelike-maximum | 40 |
| A | lem-gr-algebraic-curvature-vanishing-criterion | 29 |
| A | pthm-gr-tidal-comparison | 38 |
| B: gr-curvature-and-tides-examples | ex-gr-conjugate-instant-on-a-round-sphere-factor | 32 |

[evidence.json](evidence.json) records exact current carrier hashes, reference strings, canonical source provenance and bounded reading scope for all eight. No citation, source or promised result was dropped; no mirror was needed to establish that the cited source body had been retrieved and is currently available to the local reader. Fresh remote access to the Springer URL was not claimed or retried.

## Native mechanical requirements

The current engine's `source-fetch-check`, `url-liveness` and `source-backing` descriptors select **batch coverage sources**, rather than every secondary item reference. GR68's coverage lists Carroll, Reall and Tong, with existing full-text stamps; it contains no Minguzzi row. The normal focused diagnostics below ran from `physics/`. They were not native gate attempts and wrote only the liveness diagnostic inside this evidence directory.

```bash
node tools/physics-support/source-fetch-check.mjs --coverage research/physics-cm-qm-gr-79-2026-10-11-batch-68.coverage.json
node tools/physics-support/url-sweep.mjs --coverage research/physics-cm-qm-gr-79-2026-10-11-batch-68.coverage.json --out research/physics-cm-qm-gr-79-2026-10-11-gr68-source-resolution/primary-url-diagnostic.json --fail-on-dead --timeout-ms 15000
node tools/physics-support/source-backing.mjs --coverage research/physics-cm-qm-gr-79-2026-10-11-batch-68.coverage.json --liveness research/physics-cm-qm-gr-79-2026-10-11-gr68-source-resolution/primary-url-diagnostic.json --require-verified
```

All exited 0. Fetch check: **3/3 fetch-verified, 3/3 resolved, zero drops**. URL diagnostic: **3/3 live, zero failed/blocking, three citation decisions**. Backing diagnostic with the additional `--require-verified` restriction: **eight harvested authored results across one coverage file, all still backed**. Those eight harvested results are the tool's harvest count, not a claim that it semantically audits the eight secondary-citing carriers listed above. The existing tools also preserve genuine prior full-text fetch evidence when current network availability changes. No coverage row or fetch stamp was added, and the cached Minguzzi metadata was not converted into a fresh native fetch stamp.

## Small integration correction

The seventh-source limitation itself requires no production, coverage, URL or code repair. One bibliographic locator discrepancy was found while reading: `thm-gr-conjugacy-and-local-timelike-maximum` named p. 36 for the interior-conjugate-point remark, but the remark is on printed/PDF **p. 35**, followed by Theorem 2.22's proof on p. 36. Root released the locator correction after the batch-68 author successfully ended and the pause was acknowledged. The exact before hashes were unchanged, and the patch changed that reference's locator to **pp. 35–36 (PDF pp. 35–36)** in the item and matching batch manifest reference. The body, statement, hypotheses, source URL and proof remain unchanged.

[locator-proposal.patch](locator-proposal.patch) records the two-line bibliographic correction, and [locator-proposal.json](locator-proposal.json) records its original proposal and before/proposed-after hashes. [locator-applied.json](locator-applied.json) records the actual integration and exact affected readiness bindings. Original carrier, manifest and affected readiness files are archived under `before/`; [readiness-before.json](readiness-before.json) records all 19 readiness dispositions before the correction. This distinct metadata finding closed in cycle 1 of at most 2.

Only `thm-gr-conjugacy-and-local-timelike-maximum`'s native readiness input hash changed; the other 18 batch-68 rows stayed current and untouched. Its original author decision, owner flag, dependencies and reason were preserved, with one appended annotation identifying the bibliographic metadata refresh. Afterward, a single shared fresh snapshot confirmed **19/19 current readiness records**. Exact source-reference title consistency passed; a byte comparison confirmed the complete item body was unchanged, and the manifest item outside `sources` was unchanged. Explicit changed-item checks passed: **proof-layout: one item, eight steps, zero defects**; renderer YAML/KaTeX checks: **one file clean**. These are formatting/metadata checks, not mathematical acceptance or a consumer claim review.

Actual post-correction carrier SHA256: `e18e1f46fc8c5eaaae3cb75600916ba43966ad41ea13111dbac256e7fefcec3d`; manifest SHA256: `d2d8e8a25fd32878b7bdb179449437176b812dc805ee0d17a440783e4f7627a7`; affected native readiness input SHA256: `1547b6216ee5f6f61bc1bf2ac9ba00055a3a5a5a03c01ec816c453a3c4321eb7`.

No other production item, page, manifest, coverage, source URL, import, code, control or run state was modified. No unit tests, actual gate attempt, controller restart or commit was performed. The source-reading disposition closed with zero repair cycles; the isolated locator correction closed in cycle 1.

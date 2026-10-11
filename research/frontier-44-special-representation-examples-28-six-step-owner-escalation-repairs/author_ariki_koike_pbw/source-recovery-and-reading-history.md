# HH-16 source recovery and reading history

This evidence belongs only to author_ariki_koike_pbw. The prior source report is research/hopf-hecke-scaffold/hecke-source-report.md (research date 2026-10-07). It records the earlier Neaime acquisition and reading, including its exact version, page and extraction counts, locator ranges, and the corrected Lemma 6.4 Case 3 coefficient. That history is preserved; this file does not replace or edit the shared report.

## Prior recorded Neaime acquisition

The 2026-10-07 report records Georges Neaime, *Geodesic normal forms and Hecke algebras for the complex reflection groups G(de,e,n)*, arXiv:1810.12053v1, as a 39-page source extracted to 87,833 characters. Its then-cache paths were /tmp/hopf-hecke-sources/neaime.pdf and neaime.txt; the report says those files were outside the tracked corpus. The actual reported reading was PDF pp. 2–4, p. 22, pp. 24–31 (Lemmas 5.7–5.16), and pp. 32–38 (the complete §6 proof). This is 19 specifically located PDF pages, not a claim that the entire article was read. The report does not give a PDF or extracted-text SHA-256, so byte identity to that earlier cache cannot be checked.

## Recovery for this authoring run

At the start of this run, the old cache paths and expected /tmp/research cache were absent. The immutable versioned arXiv endpoint was therefore recovered directly:

- Neaime arXiv v1 PDF: https://arxiv.org/pdf/1810.12053v1; 39 pages; current PDF SHA-256 20addc9c80187b619199cecc05fc5b35796bd12039debb462c9aa73814b39795.
- PyMuPDF extraction: 87,296 characters; text SHA-256 981c2d22e5464e74a692682b2d1db8f027063eab470c734677c77cc567d3f022.
- Current-run reread: PDF pp. 2–4, p. 22, and pp. 24–38, exactly 19 pages. The full §6 induction and all nine final-factor lemmas were checked against the extracted pages. The source displays z s_j=s_j z for j>=2, but the affine presentation gives the rank-four interaction with s_2 and commutation only for j>=3; the authoring proof checks that normalization directly. The source's Lemma 6.4 Case 3 coefficient loss is corrected locally in the item: a z^c s_2 z^{c'} s_2 z s_2 = a^2 z^{c+c'}s_2 z s_2 + a z^{c+1}s_2 z^{c'}.

A second directly relevant source was recovered and inspected for the generic braid calculation:

- Jun Hu and Andrew Mathas, *Seminormal forms and cyclotomic quiver Hecke algebras of type A*, arXiv:1304.0906v3, https://arxiv.org/pdf/1304.0906v3; 51 pages; current PDF SHA-256 54b112868aef305ccbb8ba1608005ef84ee1457104ec41e3d69af6c22c2cf520.
- PyMuPDF extraction: 144,002 characters; text SHA-256 255dd545fca4d0910938e5b34a095ab9bb119a4a2058c82446e3079183f80eeb.
- Current-run reading: PDF pp. 14–20, exactly 7 pages, including §3.2 and the six-state braid expansion.

Current recovery counters are two PDF acquisitions, two PDF extractions, and 26 pages read in the current run (19 Neaime, 7 Hu–Mathas). Across the inherited Neaime record and this reread, the documented Neaime acquisition/extraction events are 2, with 38 relevant page-read events (19 each); the historical PDF's bytes remain unverifiable because its hash was not recorded. The owner allocation lists this author group with batches empty and no contract paths. No review/repair round or source-cap maximum is asserted here; no cap value is supplied by the allocation or the inherited source report. No source-access blocker remains.

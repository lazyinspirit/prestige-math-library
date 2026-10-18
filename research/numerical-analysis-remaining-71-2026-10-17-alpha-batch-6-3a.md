# Batch 6 Step 3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`; group: `batch-6`.

Scope has no touched/page/reader/refuter obligations; the decisions array is empty. Reader report/findings and refuter JSON contain no findings. Only the four generated HIGH-risk reviews are owed. No item or page has been edited.

## Completed level 1: Haar cell averages

`thm-na-haar-cell-average-w1inf-error-bound`: independently checked every step and the actual projection, smooth-class and Taylor suppliers. Real C^1 data make every integral valid. The variance identity gives (2h)^-1 times the pairwise squared difference integral; MVT bounds it by h^3 M1^2/2 per cell, hence h M1/sqrt(2) globally. Checked J=0, zero/constant functions, coincident points and cell endpoints. No defect or missing prerequisite; contract risk_review complete. MIT Handout 3 (source URL in item), PDF pp.1–5, was opened for Haar filter context; it is not being credited with the particular cell-error constant, which is proved directly here. Published Taylor supplier was read completely and is sound for the n=0 use. No published defect found.

Initial risk-report passed (22 items; four HIGH). Reviews below were completed in the generated dependency order. Engine owns hashes and gate battery.

## Completed level 1: periodic compact-filter Parseval

`thm-na-periodic-orthogonal-compact-filter-dwt-inverse-parseval`: Independently read Proof 1.1–2.1, exact admissible-pair Definition and Euclidean finite-sum supplier. N>=2L implies 2L-2<N and distinct taps within each row; each modular overlap has at most one difference representative, necessarily even. Zero overlap yields zero; reverse mixed correlations follow by reindexing the stipulated h/g correlation. The zero representative occurs in same-type rows only when k=l modulo N/2, hence exactly on the diagonal. Square row orthogonality gives inverse transpose and Parseval; later stages act on the approximation block and extend by identity on retained details, so composition/permutation is orthogonal. Checked N=2L, wrapped overlaps, x=0, no further admissible stage, and vacuous L=1 (no admissible pair satisfies both g sum and h sum). MIT Handout 7 PDF pp.2–5, especially p.4 eqs.(4)–(6), agrees with the even-shift hypotheses and transpose synthesis; finite periodic no-collision is proved locally. Reader/refuter have no findings. No defect, missing prerequisite or AC use.


## Completed level 3: D4 support and moments

`lem-na-d4-multilevel-detail-support-and-moments`: Independently read all three proof steps and actual multilevel Definition, D4 QMF/two-moment proof, exact D4 taps and earlier Parseval supplier. Substitution yields offsets 2^(ell-1)r+sum_v 2^(v-1)s_v; path contributions at equal offsets are summed into effective taps. The containing interval has S<=3*2^ell-2<N because ell<=J-2, so distinct effective positions cannot alias modulo N, including wrapped translates. Affine low-pass images remain affine and the final high-pass zero sum/first moment kills them on the periodic lift; no assertion about a globally affine periodic sequence is needed. Stage input lengths are at least 8=2L, so Parseval supplies unit row norm. The displayed finite-square identity proves l1<=sqrt(actual support size); output length is N/2^ell. Checked ell=1, J=3, maximal ell=J-2 and translated wraparound; all sums finite, no AC. Read MIT Handout 13 PDF pp.2–3 (slides 3–6) visually because text extraction is corrupt: moment cancellation agrees with the local affine argument. Reader/refuter have no findings. No defect or missing prerequisite.


## Completed level 5: smooth sampled D4 rate

`cor-na-sampled-smooth-d4-besov-best-m-rate`: Independently checked Proof 1.1–2.1 and all five actual cited suppliers, including the complete sampled-decay and finite-tail proofs and their Taylor/threshold prerequisites. Periodic C^2 data give a global M2 bound on every lifted support; Taylor n=1, affine cancellation, l1<=sqrt(3*2^ell) and sample factor 2^(-J/2) yield (9sqrt(3)/2)M2*2^(-5j/2). Four coarse coefficients are individually bounded by M0 using orthogonality. For 0<s<2, p=1/(s+1/2) lies in (0,2), scale weights vanish, and 1-5p/2=-p(2-s); the j>=2 geometric sum has exactly numerator 2^(-2p(2-s)) and positive denominator 1-2^(-p(2-s)). Finite sorted coefficients obey n*b_n^p<=||c||_p^p; integrating t^(-2/p) gives p/(2-p) and square root exponent -s. Checked J=3, m=1,N, zero and constant data, ties, wrapped supports and excluded s=0,2. No intrinsic Besov equivalence or continuous-function reconstruction claim is used. Mallat printed pp.330–331 (Theorems 9.9–9.10 and their complete tail arguments) and p.335 eq.(9.44) with q>s and C^q qualification were read; local algebra supplies the critical relation directly. MIT Handout13 pp.2–3 supports cancellation context. Reader/refuter contain no findings. No defect, unmet prerequisite or infinite-choice use.

All four risk reviews are complete; no mathematical repair was necessary.

## Sources and limits

The source sections used for this review were [MIT Handout 3](https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/9ae8fd2b4313aea9cb1d828e3d431301_Handout3.pdf), PDF pp.1–5 (Haar analysis and transpose synthesis); [MIT Handout 7](https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/f95f7897eb0d62fc82ab88c3ae3937e6_Handout7.pdf), PDF pp.2–5 (even-shift conditions and transpose synthesis); [MIT Handout 13](https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/99231bc0f90b87508c01a2e7f5a960e7_Handout13.pdf), PDF pp.2–3/slides 3–6 (moment and polynomial cancellation, visually read); and [Mallat Chapter 9](https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf), printed pp.330–331 and 335 (sorted tails and the weighted coefficient convention). No intrinsic Besov characterization or smoothness theorem for the continuous D4 wavelet is required by these finite claims. The explicit D4 identities were independently verified from the current radical taps and local QMF proof. The source Handout 8 was opened but its corrupt extracted text was not treated as mathematical evidence.

This is a focused review of the four routed risks and their actual prerequisites, not a new full-batch or full-foundations audit. The published Euclidean pairing, interval-derivative definition and full Taylor proof were read for their exact uses; no defect in those uses was found. No published item was edited and no published-defect ledger entry is needed.

## Outputs, checks and disposition

- `alpha-batch-6-3a-decisions.json` contains exactly zero decisions, matching the empty touched/page/reader/refuter scope. Risk enrichment alone does not create obligations or defect rows.
- The only proof-contract changes are the four complete, item-specific `risk_review` records. All contracts after excluding those additions hash identically to the reader-post records. No manifest, provenance, Statement, Definition, proof, or verification record changed.
- Pre/post item and page fingerprint maps are identical. All 22 current raw item hashes and both current raw page hashes match reader-post. Using the actual `__step4_page_id` manifest projection, all current item manifest hashes and both page manifest hashes match reader-post too.
- Required commands: `node tools/risk-report.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-6.proof-contracts.json` and the same command with `--require-reviewed`; both exit 0 with `risk-report: 0 error(s), 22 item(s) routed`.
- No item was edited, so reflow, item precheck and final proof-layout are not applicable. No judge, stamp, dispatch, stage transition or gate battery was run.
- Owned-consumer frontier ledger note records the exact supplier interfaces reviewed; stable IDs, existing dispositions and proposed withdrawals are preserved. No outside consumer repair, new withdrawal, published finding, escalation or blocker was identified.

Local work is complete. The engine retains decision stamping and gate ownership.

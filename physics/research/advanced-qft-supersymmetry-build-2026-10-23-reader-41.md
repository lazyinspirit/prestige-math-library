# Step 3a Reader Report — Batch 41

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Batch: `41`  
Review date: 2026-10-25  
Role: independent reader

## Inventory opened

Assigned pages:

- `library/advanced-qft-and-supersymmetry/qftx-thooft-anomalies.md` (A): all six listed items, title, draft status, physics library, compact layout, and three `requires` entries match the current batch manifest. The Markdown body is empty. Page verdict: **pass** for its carrier and inventory.
- `library/advanced-qft-and-supersymmetry/qftx-thooft-anomalies-examples.md` (B): the three example IDs, companion relationship, title, draft status, physics library, compact layout, and A-page requirement match the current manifest. The Markdown body is empty. Page verdict: **pass** for its carrier and inventory.

Assigned items opened in dependency order:

1. `def-aqft-cubic-anomaly-polynomial`
2. `lem-aqft-dual-cubic-anomaly-polynomial-cancellation`
3. `lem-aqft-local-counterterm-shift-is-relative-coboundary`
4. `def-aqft-thooft-anomaly`
5. `def-aqft-anomaly-matching-data`
6. `pthm-aqft-selected-chiral-spectrum-anomaly-cancellation`
7. `ex-aqft-single-chiral-fundamental-polynomial`
8. `ex-aqft-mixed-background-counterterm-shift`
9. `ex-aqft-vectorlike-conjugate-chiral-pair`

For the assigned dependency closure, I opened `def-aqft-topological-defect`, `def-aqft-p-form-global-symmetry`, `def-qftx-nonabelian-brst-complex`, `lem-qftx-nonabelian-brst-nilpotence`, and `def-qftx-local-brst-cohomology`, plus the current p-form, BRST/BV, and SUSY-Ward required page carriers. The exact p-form, finite-jet BRST, nilpotence, and relative-cohomology interfaces used by batch 41 match their declared uses. The BRST/BV and SUSY-Ward pages have no body prose; I did not treat their unrelated items as proof premises.

The current-run downstream consumers reached by the corrected Definition were also opened for impact review: `def-aqft-heavy-chiral-u1-threshold-data`, `pthm-aqft-heavy-chiral-threshold-wess-zumino-match`, and `ex-aqft-heavy-fermion-anomaly-threshold` (batch 44). They are outside this batch and were not edited.

## Mathematical and source review

The degree-six coefficient expands correctly: $2\pi[\operatorname{tr}\exp(-iF/2\pi)]_6=i\operatorname{tr}(F^3)/(24\pi^2)$. The transpose proof gives the negative cubic trace and the negative canonical Chern–Simons transgression for the dual representation. The local-counterterm lemma is the quotient identity for the stated $sC_4+d_Hr_3$ denominator. The anomaly definition distinguishes the nondynamical background class from a gauge-redundancy anomaly. The selected pair theorem remains conditional on the adopted one-loop regulator/descent input; its cancellation follows from the common linear descent and the dual trace identity. The three examples keep polynomial nonvanishing, representative shifts, and local class cancellation distinct.

I checked the relevant passages of [Bilal, *Lectures on Anomalies*](https://arxiv.org/pdf/0802.0634): §2.4, Eq. (2.20), gives $\gamma_5=i\gamma^0\gamma^1\gamma^2\gamma^3=-i\gamma_0\gamma_1\gamma_2\gamma_3$ for signature $(-,+,+,+)$; §5.2.3, especially Eq. (5.45), describes the opposite-statistics Pauli–Villars subtraction and its large-mass limit; §9.4, Eq. (9.40), gives the positive-chirality four-dimensional coefficient $i\operatorname{tr}(F^3)/(24\pi^2)$; §10.4, Eqs. (10.49)–(10.54), gives the anti-Hermitian descent normalization $2\pi[\operatorname{ch}(-F)]_6$. The relevant [Alvarez, *Gauge Anomalies*](https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf) passages are §2.2, Eqs. (2.82)–(2.88), for the Stora–Zumino descent, §§2.1–2.3 for representation additivity/conjugation, and §2.4 for the consistent/covariant distinction and counterterm shift. These checks support the calculations without treating the regulator input as a theorem about every QFT.

## Repair and assigned-consumer review

In `items/def-aqft-anomaly-matching-data.md`, Definition paragraph 1, the original $\gamma_5$ expression had the opposite sign from Bilal Eq. (2.20), while the text identified it as Bilal’s positive-chirality convention and used Bilal’s positive-chirality determinant sign. I changed it to $\gamma_5=i\gamma^0\gamma^1\gamma^2\gamma^3=-i\gamma_0\gamma_1\gamma_2\gamma_3$. I added §2.4, Eq. (2.20) to the source locator and reference label. The anomaly coefficient and the remaining definition were not changed.

I reviewed the assigned consumers of that Definition. The conjugate-pair theorem and the single-species and vectorlike examples now use the source’s positive-chirality convention consistently; the counterterm example does not use chirality. No dependent assigned item required repair. The Definition’s proof-contract row has no citations, derivations, or routine proof steps, and its boundary checks do not depend on the chirality sign; it therefore needed no contract-field change. No `verification.judge` record was present on the repaired item.

Validation for the repaired item:

- Reflow: `unchanged`.
- Precheck: `0 checked, 0 failing`; this is a non-proof Definition.
- Final proof-layout: `1 items, 0 steps, 0 defects`.

No TikZ or tikzcd diagram occurs in the assigned items; none was required by the exposition. The assigned statements and definitions are uninterrupted by hyperlinks; their references follow the complete sections. No page summary prose was authored or restored.

## Uneditable findings and blocker

The batch-44 threshold definition at `items/def-aqft-heavy-chiral-u1-threshold-data.md`, Definition paragraph 1, still uses the opposite $\gamma_5$ sign while identifying it as Bilal’s positive chirality. The theorem at `items/pthm-aqft-heavy-chiral-threshold-wess-zumino-match.md`, Statement paragraph 1 and Proof 1.2, repeats that convention and applies Bilal’s positive-chirality anomaly formula to it, so the claimed sign is wrong. The dependent example at `items/ex-aqft-heavy-fermion-anomaly-threshold.md`, Example final sentence, repeats the positive numerical variation. These are downstream current-run consumers outside batch 41; the findings JSON records their evidence for owner routing. They require owner disposition and the owning batch’s focused consumer review before the source-interface correction can be treated as fully closed across the run.

## Coverage limits

I reviewed every assigned page and item and the exact dependency statements needed for their claims. I checked the cited source passages listed above; I did not independently reconstruct the Pauli–Villars loop calculation or claim a global-anomaly, determinant-line, or continuum-QFT result. No experiment or statistical inference is involved in this batch.

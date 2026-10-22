# Batch 40 source reading

Run: physics-non-fluid-129-2026-10-21-r2

All three PDF bodies were retrieved into raw/, inspected locally with
mutool info and mutool draw -F txt, and checked with
source-fetch-check --coverage research/physics-non-fluid-129-2026-10-21-r2-batch-40.coverage.json --stamp.
The fetch check returned **3/3 full-text sources verified**, with no retries
or drops. The complete raw file hashes, byte counts, page counts, and durable
fetch stamps are recorded in the sibling coverage file.

## Read ranges and use

### Iyer and Wald (1994)

* Source: [Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy](https://arxiv.org/pdf/gr-qc/9403028), arXiv:gr-qc/9403028v1; complete 31-page PDF in raw/iyer-wald-1994.pdf.
* Read: §3, equations (40)–(48), printed pp. 8–9 (PDF pp. 9–10), and §4, equations (49)–(60), printed pp. 10–11 (PDF pp. 11–12). This includes both potential ambiguities, the Iyer–Wald current ordering, on-shell closure, local exactness, the finite-boundary-flux caveat, and the general Noether-charge decomposition. The asymptotic falloff discussion is read only as a boundary-condition warning.
* Supports: def-gr-fx-covariant-presymplectic-current, lem-gr-fx-variation-commutator-identity, prop-gr-fx-on-shell-current-closure, prop-gr-fx-field-space-closedness, prop-gr-fx-potential-ambiguity, and prop-gr-fx-diffeomorphism-current-identity.
* Dispositions: equations (40)–(48) and (49)–(51) are locally implemented or proved as identified in coverage.json; the higher-derivative decomposition (52)–(60) is out-of-scope; noncompact asymptotic falloff is out-of-scope because this batch works on finite compact chains.

### Compère and Fiorucci (2019)

* Source: [Advanced Lectures on General Relativity](https://arxiv.org/pdf/1801.07064), arXiv:1801.07064v4; complete 125-page lecture-note PDF in raw/compere-fiorucci-2019.pdf. This is the independent full-lecture-notes treatment for the page.
* Read: Lecture 1, §§1.3.1–1.3.3 and §§1.4.1–1.4.2, including the derivation of the fundamental surface-charge identity, residual-ambiguity discussion, and integrability criterion.
* Supports: field-family and current conventions, field-space closedness, local Noether exactness, boundary ambiguities, and charge integrability for the assigned items.
* Convention check: Compère–Fiorucci define the contracted presymplectic current with the opposite order from the explicitly assigned Iyer–Wald convention. The page retains Iyer–Wald's order and translates signs in each local calculation; no source formula was copied without that check.
* Dispositions: the second-Noether-theorem derivation and the specific surface-charge two-form formula are out-of-scope; the page does not assume their additional gauge-identity or boundary-action hypotheses. The distinction between local charge integrability and global exactness is included.

### Harlow and Wu (2020)

* Source: [Covariant phase space with boundaries](https://arxiv.org/pdf/1906.08616), arXiv:1906.08616v4; complete 61-page PDF in raw/harlow-wu-2020.pdf.
* Read: §§2.2–2.4 and §3.2 in full, including the scalar-field variation and Cauchy-data form; also read the complete Maxwell boundary-charge example in §3.3.
* Supports: the conditional variational decomposition, distinction between covariance and boundary-preserving symmetry, scalar example, and need to specify boundary terms and integrability conditions.
* Dispositions: their boundary-action Hamiltonian construction is out-of-scope because the batch does not adopt its boundary action data or claim its Hamiltonian formulas. The Maxwell charge example is out-of-scope as a distinct internal-gauge model; it is not used as proof for gravitational diffeomorphisms. Its infinite-dimensional regularity caveat motivates the finite-dimensional family formulation but supplies no global solution-manifold claim.

## Retrieval history

The three source URLs fetched successfully on their first --stamp attempt.
There was no retrieval failure, alternate URL, source drop, or unresolved
source-resolution entry. No measurements or empirical results were sought or
reported.

# Batch 128 source reading — JT disk spectral preparation

Run: physics-non-fluid-129-2026-10-21-r2

The complete source documents were retrieved through their full-text pages and
the ranges below were inspected. These are theoretical treatments, not
experimental observations. No measurements, empirical uncertainty, or claims
about nature are inferred.

## A page: tgrx-jt-disk-model

### Phil Saad, Stephen H. Shenker, and Douglas Stanford, “JT gravity as a matrix integral”

Full-text article:
https://arxiv.org/html/1903.11115

The earlier thermodynamics-and-general-relativity source inventory records a
full PDF retrieval on 2026-10-19 (SHA-256
331e0d25fdb32da9c9c7e805d74eb3671f528bec3c8a814d719a1acc06ba1a2d) and reading
of PDF pp. 1–5. That source-history record remains unchanged. This batch
separately inspected the exact density, disk-integral, and ensemble locators
listed below and retained new fetch stamps in its own coverage file.

Read the disk boundary calculation in §3.3.5, equations (121)–(126), and the
genus-zero density formula in §3.5, equation (145). Equation (145) writes the
leading density as C/(2 pi^2) sinh(2 pi sqrt(2 C E)) after the stated
normalization adjustment; the topological factor exp(S_0) multiplies the
disk contribution. The local postulate records this as an adopted continuous
density. The local theorem, rather than the source's path-integral argument,
proves the exact Laplace integral.

The Introduction and §6 discussion were read for the matrix-integral
interpretation and the non-unique nonperturbative completion. These support
rem-tgrx-jt-completion-notunique; they do not show that the disk density
selects one fixed boundary Hamiltonian.

Harvest dispositions: §3.5 equation (145), included in
post-tgrx-jt-disk-spectral-model; §3.3.5 equations (121)–(126), absorbed
inline into pthm-tgrx-jt-disk-laplace; Introduction and §6
non-unique-completion/ensemble discussion, included in
rem-tgrx-jt-completion-notunique.

### Thomas G. Mertens and Gustavo J. Turiaci, “Solvable models of quantum black holes: a review on Jackiw–Teitelboim gravity”

Full-text review:
https://arxiv.org/html/2210.10846

Read §3.1, equations (3.7) and (3.10), which give the disk partition function
and inverse-Laplace density with the same C, S_0, and beta convention.
The nearby discussion notes that S_0 is not a ground-state degeneracy in the
continuous disk-density model; the authored items do not make that
identification. Read §§4.3.1–4.4 for the matrix-integral duality, ensemble
interpretation, and perturbative/nonperturbative boundary, and §5.2 on
factorization, discreteness, and ensemble averaging. These support the B-page
limitation only; no universal fixed-Hamiltonian conclusion is imported.

Harvest dispositions: §3.1 equations (3.7) and (3.10), included in
post-tgrx-jt-disk-spectral-model; §§4.3.1–4.4 and §5.2, included in
rem-tgrx-jt-completion-notunique; the S_0 ground-degeneracy warning is
out of scope because neither assigned item identifies S_0 with a ground
state degeneracy.

### Gábor Sárosi, “AdS2 holography and the SYK model,” lecture notes

Full lecture notes:
https://arxiv.org/html/1711.08482

Read §3.1 and §3.3.1, including equations (47), (54), and (55), for the JT
boundary Schwarzian action, the disk thermal factor, and its thermodynamic
relation. The notes explicitly set conversion constants such as c and k_B to
one. This is an independent pedagogical treatment of the disk thermodynamics
and unit convention; it does not give the exact spectral-density normalization
used in this batch, which is taken from the first two treatments and
re-evaluated locally.

Harvest dispositions: §3.3.1 equation (54), included as context for
post-tgrx-jt-disk-spectral-model; equation (55) and the stated unit
convention, absorbed inline into that postulate. The lecture's SYK-specific
material is outside this page's claims.

## B page: tgrx-jt-disk-model-examples

The SSS Introduction/§6 and the Mertens–Turiaci §§4.3.1–4.4 and §5.2 were
also inspected specifically for the B-page warning. Both sources describe a
matrix-integral/ensemble interpretation and do not make the genus-zero disk
density a unique nonperturbative completion of a fixed microscopic theory.
These results are included in rem-tgrx-jt-completion-notunique.

## Retrieval history

No retrieval failed; no recovery retry, source drop, or alternative proof was
needed. source-fetch-check --stamp was run on the exact batch-128 coverage
file; its byte counts, hashes, and fetch times are retained there. The source
harvest is limited to the stated sections and equations, not a claim that every
argument in any source was read.

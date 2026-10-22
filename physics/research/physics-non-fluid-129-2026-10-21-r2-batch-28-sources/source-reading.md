# Batch 28 source reading — Adopted charged-background and effective-model regimes

Run: physics-non-fluid-129-2026-10-21-r2

All four complete PDFs were fetched into raw/, parsed into complete text files in text/, and inspected in the relevant sections below. The source-fetch checker subsequently fetched and stamped each full-text URL. There were no retrieval failures, recovery retries, source drops, or unresolved source resolutions. The BCP and Balakumar full texts give independent charged-scalar treatments; Sorokin and Dunne give independent nonlinear-electrodynamics/effective-action treatments. This gives the A page four independent treatments, including a complete book-length lecture-notes volume and a full doctoral thesis.

## Charged test-scalar model and conditional scattering

1. Richard Brito, Vitor Cardoso, and Paolo Pani, *Superradiance -- the 2020 Edition*, Lecture Notes in Physics 971, complete 281-page edition: <https://arxiv.org/pdf/1501.06570>. The retrieved PDF is 16,222,249 bytes (SHA-256 prefix 1e0663f0ea7d487a).

   I inspected §4.4, equations (4.50)–(4.53). This section treats test fields on a prescribed stationary background, separates the scalar wave equation, states incoming/reflected/horizon asymptotics, and evaluates a real-potential Wronskian. I also inspected §§4.6 and 4.6.1, equations (4.54)–(4.56): the charged condition is $\omega-q\Phi_H<0$, and for RN the mode threshold is $\omega<qQ/r_+$. The local result uses the exact current suppliers' gauge $A_t=-Q/r$ and the same potential difference $\Phi_H=Q/r_+$; it does not import the source's opposite potential sign. The source's simpler plane-wave asymptotic is not adopted: the local radial coefficient has a charged $1/r$ tail, and the current Definition fixes the Coulomb phase $\Theta=\omega r_*-eQ\log(r/L)$. The source's plotted amplification percentages are not used.

2. Visakan Balakumar, *Aspects of quantum charged scalar field theory in curved spacetime: Black hole superradiance and Hadamard renormalisation*, University of Sheffield PhD thesis (2022), complete 307-page text: <https://inspirehep.net/files/c9d9d32ca091d580007a1fee1bb44dc0>. The retrieved PDF is 1,731,481 bytes (SHA-256 prefix de751e44335eda8d).

   I inspected Chapter 3, §§3.1–3.2.4, especially equations (3.1)–(3.11) and (3.36)–(3.56). These give the RN metric and electric gauge, the massless minimally coupled charged-scalar equation, and its separated radial equation. I then read §§3.3.3–3.3.4, equations (3.72)–(3.84), including the Wronskian comparisons and the two charge-sign cases. The local statement takes the positive-frequency $eQ>0$ band and does not assert a mode exists. The thesis's quantum normalization and later quantum-state construction are outside this batch. Its simple plane-wave infinity form is not substituted for the local logarithmic Coulomb phase.

## Effective classical constitutive model

3. Dmitri P. Sorokin, *Introductory Notes on Non-linear Electrodynamics and its Applications*, arXiv:2112.12118v3 (2022), complete 26-page review: <https://arxiv.org/pdf/2112.12118>. The retrieved PDF is 663,848 bytes (SHA-256 prefix 3683ed39d78f85dd).

   I inspected §3.1 on the Heisenberg–Euler–Kockel effective action and §3.2, equations (3.4)–(3.7), on the two Lorentz invariants and a generic invariant-based NED Lagrangian. The source distinguishes special models and discusses separate causality/convexity conditions. The local postulate adopts one explicit classical polynomial with arbitrary fixed coefficients and a stated invariant domain; it imports neither Heisenberg–Euler coefficients nor those separate consistency conditions.

4. Gerald V. Dunne, *Heisenberg-Euler Effective Lagrangians: Basics and Extensions*, complete 82-page lecture review (2004): <https://arxiv.org/pdf/hep-th/0406216>. The retrieved PDF is 751,327 bytes (SHA-256 prefix 39346f65275c3086).

   I inspected §1.1 on the constant-background one-loop QED effective action, §1.2.4 on low-energy EFT operators and derivative terms, and §1.3 on weak-field expansions. These sections distinguish an EFT derivation and its regimes from a phenomenological classical constitutive postulate. No coefficient, scale threshold, or error estimate from the review is assigned to the local model.

## Candidate source search

The search for Plebański's 1970 *Lectures on Non-linear Electrodynamics* found book-catalog metadata but no full text that could be inspected. It was not cited or claimed as read. No active source failed retrieval, so the five-retry recovery route was not used; no source was dropped from the assigned coverage.

The coverage file records every harvested section and its per-item disposition, exact URL and locator. The four source-fetch stamps each record one successful full-text fetch and zero failures.

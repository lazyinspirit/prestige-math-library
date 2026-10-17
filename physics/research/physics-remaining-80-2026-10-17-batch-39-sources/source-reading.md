# Batch 39 source retrieval and reading record

Run: physics-remaining-80-2026-10-17  
Subject: uniformly bounded finite-range quantum spin interactions  
Reading date: 2026-10-17

## Independent treatment 1: Naaijkens

Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, extended and corrected Summer 2016 lecture notes, full 157-page PDF, arXiv:1311.2717v2. Full text URL: https://arxiv.org/pdf/1311.2717

The complete PDF body was fetched to raw/naajk-quantum-spin-systems.pdf (SHA-256 6d954604ef16fc58481f469a43ab3364229c4456d8ee6bf7c2446adb6d22751d; 157 pages). PyMuPDF extracted the complete body to raw/naajk-quantum-spin-systems.txt (SHA-256 2832a3e3c67e29128632b3a9d8723cafa24f9b5ceefb9024e19329ec85a5bd06). I inspected the complete relevant sections and their proofs:

- §3.3.7–3.3.8, printed pp. 66–68: interaction definition, finite-range and boundedness conditions, local Hamiltonians, the finite Heisenberg dynamics, and the explicitly defined finite-support interaction sum.
- Theorem 3.3.12 and proof, printed pp. 69–71: convergence of finite-volume dynamics to a strongly continuous automorphism group; the proof route uses local derivations and analytic expansions.
- Theorem 4.1.2 and full proof, printed pp. 96–101: finite-volume Lieb–Robinson commutator estimate; the proof iterates a differential inequality and treats finite local supports.
- Theorem 4.2.1 and proof, printed pp. 101–102: Duhamel comparison of nested volumes and norm convergence to infinite-volume dynamics.
- The local derivation and generator discussion, §3.3, printed pp. 64–71: finite local commutator sums and the generator domain framework.
- Example 3.3.9, printed pp. 67–68: a one-dimensional nearest-neighbor spin interaction, used only as context for the B-page example.

Harvested results and disposition:

| Result read | Supported item | Disposition |
|---|---|---|
| Interaction definition and finite-range/per-site bound, §3.3.7–3.3.8 | def-qsm-bounded-finite-range-interaction | included; the item explicitly fixes max-metric range, support multiplicity convention, units, and free-boundary truncation. |
| Finite-volume commutator path estimate, Theorem 4.1.2 | lem-qsm-finite-range-commutator-path-bound | inline; the item derives its own finite-range constants from M, R, and kappa, rather than importing Naaijkens's regular-kernel constants. |
| Duhamel comparison and thermodynamic limit, Theorem 4.2.1 | lem-qsm-boundary-dynamics-cauchy, thm-qsm-finite-range-spin-dynamics | inline; the assigned proofs give the exact exterior tail and explicitly pass to the norm completion. |
| Local commutator derivation and generator discussion, §3.3 | lem-qsm-local-generator-domain | inline; the local finite sum, integral identity, and graph-closedness proof are supplied in the item. |
| Nearest-neighbor spin interaction example, Example 3.3.9 | ex-qsm-finite-range-nearest-neighbor-ising | included; the local example changes the diagonal coupling but recomputes all constants directly. |
| Naaijkens's general metric-kernel and non-finite-range extensions | None | out-of-scope; the assigned claims use only the stated finite-dimensional, bounded, finite-range lattice assumptions. |

## Independent treatment 2: Nachtergaele–Sims

Bruno Nachtergaele and Robert Sims, Lieb-Robinson Bounds in Quantum Many-Body Physics, complete 36-page paper. Full text URL: https://arxiv.org/pdf/1004.2086

The full PDF and extracted text were already present in the category research dossier and were re-inspected directly: research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/workers/infinite-equilibrium/raw/nachtergaele-sims.pdf (SHA-256 05eff585a48438c9b4b8677f77e7439e7582531c181d850fbec0a9d9f70fe059) and nachtergaele-sims.txt (SHA-256 b388089e476f4d6c33368c91de5386e4905be50d3548cdd4733d60555d81826a). The complete relevant proofs were read:

- Theorem 2.3 and proof, PDF pp. 4–7: finite-volume commutator estimate via a variation-of-constants lemma and interaction-path iteration.
- Theorem 3.1 and proof, PDF pp. 18–20: norm thermodynamic limit under a summable regular-kernel interaction condition, using Duhamel comparison and the finite-volume commutator estimate.

Harvested results and disposition:

| Result read | Supported item | Disposition |
|---|---|---|
| Finite-volume interaction-path proof, Theorem 2.3 | lem-qsm-finite-range-commutator-path-bound | inline; the proof here specializes to finite range and gives the nonsharp exponential rate explicitly. |
| Duhamel thermodynamic-limit proof, Theorem 3.1 | lem-qsm-boundary-dynamics-cauchy, thm-qsm-finite-range-spin-dynamics | inline; the assigned proof directly sums exterior lattice tails and needs no general convolution function F. |
| Onsite Hamiltonian / regular-kernel extensions beyond bounded finite spin terms | None | out-of-scope; no unbounded onsite, bosonic, or long-range claim is carried over. |

The same complete paper is also the second independent treatment recorded for the B companion. I re-inspected §2.1, equations (2.5)–(2.7), and Example 2.1 (PDF pp. 3–5): these give the finite-dimensional spin-system setup and a nearest-neighbor spin-1/2 Heisenberg Hamiltonian. Its disposition is `inline` for `ex-qsm-finite-range-nearest-neighbor-ising`: the B example is a diagonal Pauli-z specialization, and its proof independently verifies self-adjointness, norm, support size, range and the per-site bound. This reuses the already retrieved full PDF and its existing retrieval record; no new retrieval attempt is claimed.

## Retrieval verification

Naaijkens was successfully fetched directly from its full-text PDF URL on 2026-10-17, inspected as a PDF, and extracted locally. Nachtergaele–Sims was already retrieved as a complete PDF/text pair in the same category research dossier and was inspected again. No retrieval failed and no source was dropped. The batch coverage record runs node tools/physics-support/source-fetch-check.mjs --coverage research/physics-remaining-80-2026-10-17-batch-39.coverage.json --stamp; its actual fetch results are retained in that JSON. This confirms full-text retrieval, not independent proof acceptance.

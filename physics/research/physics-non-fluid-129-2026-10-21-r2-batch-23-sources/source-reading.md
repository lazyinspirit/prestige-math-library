# Batch 23 source reading

Run: physics-non-fluid-129-2026-10-21-r2

## Full texts inspected

1. Richard Brito, Vitor Cardoso, and Paolo Pani, *Superradiance -- the 2020 Edition*, second edition, Lecture Notes in Physics 971, full 281-page edition: <https://arxiv.org/pdf/1501.06570>. I inspected the complete relevant arguments in §§4.1.1, 4.4, and 4.6.1, including equations (4.2a), (4.50)-(4.56). The text supplies the charged wave equation, separated RN radial potential, Wronskian reflection relation, and charged threshold. Its source sign conventions are not substituted for the imported RN potential. Its simple plane-wave infinity asymptotic is not adopted: the local radial coefficient has a long-range $-2\omega eQ/r$ term, so the assigned Definition uses $\Theta=\omega r_*-eQ\log(r/L)$ and the local proof evaluates that phase directly.

2. Visakan Balakumar, *Aspects of quantum charged scalar field theory in curved spacetime: Black hole superradiance and Hadamard renormalisation*, PhD thesis, University of Sheffield, full 307-page thesis: <https://inspirehep.net/files/c9d9d32ca091d580007a1fee1bb44dc0>. I inspected the complete relevant reasoning in Chapter 3, §§3.1-3.3.4, including equations (3.11)-(3.59) and (3.76)-(3.84). The source gives an independent charged scalar equation, angular and radial separation, mode boundary data, and Wronskian relations. Its simpler plane-wave asymptotic at infinity is not used because the local Coulomb tail requires the logarithmic phase. Quantization and quantum-state normalization are out of scope.

Both complete documents were retrieved and page-count checked by the batch coverage source-fetch-check --stamp record. The browser text extractor could not open the 16 MB arXiv PDF because of its response-size limit; I used the same edition's full arXiv HTML at https://arxiv.org/html/1501.06570v8 for the complete relevant arguments, and the source-fetch checker then fetched and stamped the complete PDF. No full-text source fetch failed; no source was dropped; no alternative proof was needed for a missing source.

## Harvest and disposition

The A-page coverage records all five harvested results from the lecture-notes book and all five from the thesis, with item mappings and exact dispositions. The B-page coverage records the two charged-mode threshold treatments as contextual support for the neutral specialization. Source formulas are context only: the local radial-equation calculation and Wronskian identity are complete proofs. The one long-range asymptotic mismatch in each full text is explicitly marked out-of-scope; it is replaced by the complete local Coulomb-phase formulation and derivation.

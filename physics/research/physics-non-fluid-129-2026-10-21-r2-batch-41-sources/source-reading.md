# Batch 41 full-text source reading

Run: `physics-non-fluid-129-2026-10-21-r2`; pair: `gr-fx13-tetrads-and-lorentz-spin`.

The source harvest and every result disposition are recorded in the batch coverage JSON. Carroll and Tong are two independent general-relativity treatments; Oblak is a third independent treatment focused on the Lorentz-group and spin-cover calculation. Tong's §§3.4.2 and 4.5.6 are split into two URL records for fetch verification but count as one treatment.

## S. M. Carroll

- Full text: <https://arxiv.org/pdf/gr-qc/9712019>
- Read: Chapter 3, tetrads and non-coordinate bases, printed pp. 88–95 (PDF pp. 95–102), equations (3.114)–(3.144).
- Local copy: `raw/carroll-gr-1997.pdf`; SHA-256 `d4cbfeed3a18370cb7e1a256da6fa7de722982ad7f6a146b4fc0fe14a6bebf6c`.
- Harvested: orthonormal coframes and local Lorentz changes; connection transformation; torsion and curvature forms; torsion components as affine torsion; metric compatibility as eta-skewness; first and second Cartan Bianchi identities; component solving of the torsion equation.
- Disposition: the tetrad, connection, torsion, curvature, and torsion-free equivalence are authored locally; the second Bianchi identity is cited to the current published bundle-connection theorem; the first Bianchi identity and explicit component formula are recorded out of scope because neither is a prerequisite or assigned claim.

## David Tong

- §§3.4.2 full text: <https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html>
- Read: HTML lines 1133–1243, complete connection-one-form, curvature, torsion, and structure-equation discussion.
- §4.5.6 full text: <https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html>
- Read: HTML lines 1252–1321, complete spinor section, including the Lorentzian spin group and local spinor derivative conventions.
- Harvested: connection matrices; curvature and torsion forms; second Bianchi identity; Lorentzian spin representations and local spinor bundles; gamma matrices and spin covariant derivatives; compact SU(2) time-gauge scope.
- Disposition: connection/torsion items and Clifford compatibility are included; the second Bianchi identity is already published; no SU(2) reduction is claimed because no time-gauge choice is supplied. Tong's two section URLs are one independent lecture-note treatment.

## Blagoje Oblak

- Full text: <https://arxiv.org/pdf/1508.00920>
- Read: complete §§2.3.1–2.3.3, PDF pp. 24–27, including the source's full connectedness and double-cover arguments and explicit rotation/boost matrices.
- Local copy: `raw/oblak-lorentz-sphere-1508.00920.pdf`; SHA-256 `cab3c1e1b582647774c8bafc50287933e0d73935da3613f2a818e1c819736d67`.
- Harvested: SL(2,C) connectedness; Hermitian-matrix representation; determinant invariance; image and kernel; explicit rotations and boosts; simply connectedness and universal-cover statement.
- Disposition: the local connectedness lemma and full Lorentz double-cover proposition are included; explicit rotations and boosts are checked in B examples; universal-cover strengthening is not claimed. The proof uses the design's differential-plus-connectedness route for surjectivity, rather than importing the source's boost-rotation factorization argument.

## Retrieval and source-resolution record

Full-text inspection succeeded for the three selected treatments. No selected URL has a retrieval failure and no selected source has a `source_resolution` drop or unresolved status. `source-fetch-check --stamp` is run on the coverage file after the source manifest is complete; its actual attempt and fetch stamps are retained there. The previously considered Rovelli PDF is not a selected source because its local text extraction did not expose the relevant passages reliably; no claim relies on it, and the readable independent sources above supply the required source support.

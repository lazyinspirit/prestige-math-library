# Inverse Problems rendering audit — lane 04

Reviewed 53 assigned items and all 96 screenshot tiles at original resolution. Current source, frozen snapshot, local HTML, and screenshot hashes match their manifests. Full titles and ItemBody were checked.

Confirmed finding: 1. One source-supported editorial diagram candidate is listed separately. No raw ASCII math, unrendered TeX/KaTeX, literal TikZ, Scratch residue, or reference-title leaks were found. The unrolled-architecture diagram renders and its state/update arrows match the recurrence. No production route was inspected.

## def-ip-real-frame-phase-retrieval

- Section: Definition diagram; source lines 58, 60–63
- Kind: Diagram render failure
- Symptom: A red failure box displays the raw tikzcd instead of the commutative square.
- Mathematical check: The intended arrows are $T_\Phi$, quotient $q$, coordinatewise squaring $S$, and intensity map $\mathcal I_\Phi$, matching the preceding identity. The diagram is explanatory, not used in proof.
- Screenshot: screenshots/def-ip-real-frame-phase-retrieval--01.png
- Suggested repair: Repair the tikzcd rendering input and confirm all four objects and arrows render.

## Editorial candidate: def-ip-injective-geodesic-ray-transform

- Section: Definition, source line 40
- Candidate: Geodesic-arc schematic
- Rationale: A schematic could clarify the maximal nontangential segment and its boundary directions.
- Draw/check: Show a smooth-boundary manifold domain, unit-speed arc $\gamma:[0,L]$, inward initial velocity, outward terminal velocity, interior-supported $f$, and label $I_{g_0}f(\gamma)=\int_0^L f(\gamma(t))\,dt$. Avoid suggesting every geodesic is maximal or that the picture proves injectivity.
- Classification: Optional editorial improvement; not a defect.
- Screenshot: screenshots/def-ip-injective-geodesic-ray-transform--01.png

## Rejected visual observation

The initially suspected left-edge clipping in screenshots/lem-ip-open-euclidean-locally-finite-smooth-partition--01.png is not present. The coordinator rechecked the standalone original-resolution tile, and I reopened it at original resolution: both the breadcrumb and complete “Locally finite…” H1 are visible at the ordinary margin. It is recorded as a rejected observation in lane-04.json.

All other assigned items rendered their title and complete ItemBody without an observed rendering defect. Plain L2/H1 typography and intentional block-style links were not counted as defects. Per-item and per-tile hashes are in lane-04.json.

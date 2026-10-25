# Algebraic Geometry rendering audit — lane 01

Reviewed all 112 assigned items and all 246 revision-2 screenshot tiles at original resolution. Each rendered item was checked from title through its final section, including proof/facts/remarks, internal reference titles, and TikZ when present. Screenshot paths in the JSON are the exact paths listed by the capture manifests.

## Findings

1. **lem-affine-algebraic-group-faithful-rational-representation** — Proof technique (snapshot line 71, confirmed). The rendered proof-technique label shows literal dollar delimiters and LaTeX around A and (A,Δ). Repair: Render the proof-technique field with supported math markup or rewrite the formula in plain words. Screenshot: `screenshots/lem-affine-algebraic-group-faithful-rational-representation--01.png`.
2. **lem-arith-polarization-and-picard-twist-ampleness** — Proof technique (snapshot line 67, confirmed). The rendered proof-technique label shows literal dollar delimiters and LaTeX for the bundle and Mumford map. Repair: Render the proof-technique field with supported math markup or rewrite the formula in plain words. Screenshot: `screenshots/lem-arith-polarization-and-picard-twist-ampleness--02.png`.
3. **lem-k-theory-of-projective-space-and-projections** — Proof technique (snapshot line 93, confirmed). The rendered proof-technique label shows literal dollar delimiters and LaTeX for P×ᵧP. Repair: Render the proof-technique field with supported math markup or rewrite the formula in plain words. Screenshot: `screenshots/lem-k-theory-of-projective-space-and-projections--02.png`.
4. **lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction** — Hyperplane restriction–Gysin composite and its exact normalization (snapshot line 96, confirmed). The local construction text displays formula syntax such as i!k_M and D_D without typesetting the subscripts. Repair: Wrap the local construction formula in renderer-supported math delimiters and typeset its subscripts. Screenshot: `screenshots/lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction--04.png`.
5. **lem-smooth-closed-immersion-regular-conormal-sequence** — Proof technique (snapshot line 81, confirmed). The rendered proof-technique label shows literal dollar delimiters around H₁. Repair: Render the proof-technique field with supported math markup or rewrite H₁ in plain words. Screenshot: `screenshots/lem-smooth-closed-immersion-regular-conormal-sequence--02.png`.

## Coverage

The JSON coverage rows match all 112 assignment IDs and preserve all 246 listed tile paths. Items without a row in Findings were recorded as clean.

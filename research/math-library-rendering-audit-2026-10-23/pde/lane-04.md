# PDE rendering audit — lane 04

Reviewed all 94 assigned titles and complete ItemBodies, plus all 190 assigned screenshot tiles. Each tile was opened individually with tools.view_image(detail="original"). Frozen source, snapshot, HTML and screenshot hashes match their assignment and receipts. No item or tile remains unreviewed. Exact per-item and per-tile hashes and original-resolution attestations are in [lane-04.json](lane-04.json).

## Confirmed rendering findings

Eight proof-technique banners retain literal dollar-delimited LaTeX instead of typesetting it. Adjacent body equations render normally. Exact source lines and original screenshot evidence are in the JSON. Affected items: cex-translation-semigroup-is-not-strongly-continuous-on-linfinity (57), lem-doubling-variables-maximum-localisation (70), lem-linearity-of-the-bochner-integral (57), lem-sobolev-pasting-across-an-overlap (79), thm-direct-method-for-convex-integral-functionals (72), thm-subcritical-compactness-of-the-sobolev-trace (54), thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class (63), thm-weak-harnack-inequality-for-nonnegative-supersolutions (61).

No other genuine LaTeX rendering defect was confirmed. No standalone clipping was confirmed; consecutive crops overlap and content continues through adjacent originals.

## Optional diagram candidates

These are uncertain editorial suggestions; the prose already states and proves the claims.

- cex-quasilinear-characteristics-can-cross-before-the-lifted-ode-blows-up (lines 31, 35, 37, 39): show X(t,xi)=xi-t tanh(xi) developing a caustic when X_xi(1,0)=0, alongside the still-defined lifted coordinate Z(t,xi)=-tanh(xi). Do not imply the lift blows up.
- thm-one-dimensional-forced-wave-duhamel-formula (lines 35–37): show the backward characteristic triangle with vertex (x,t), edges y=x±c(t-s), base at s=0, and source integral factor 1/(2c).
- lem-truncated-wave-cone-geometry-and-frustum-presentation (lines 38, 43, 50, 52, 56, 58, 60): show bottom/top disks, lateral frustum, circular edges and the three outward normals with stated signs. A 1+1-dimensional section is schematic for general-dimensional faces.
- ex-surface-density-and-outward-normal-on-a-graph (lines 27, 37): show the subgraph, tangent frame, outward vector (-Dh,1), unit normal and density sqrt(1+|Dh|^2); preserve affine patch area sqrt(6) and upward e3-flux 1.

## Rendering and diagram checks

The 94 sidecars report 0 KaTeX errors, 0 TikZ diagrams and 0 diagram failures. No Scratch section or panel occurs in the assigned ItemBodies.

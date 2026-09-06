# Exact Step-8 repair envelope — 8-preflight, round 3

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
complete relevant diagnostic records, exact current rejection tuples, and explicit run/published ownership.
The full_evidence file retains the original untruncated battery output and all ownership assignments.
Read its relevant sections if a diagnostic is ambiguous; do not infer absence from this scoped view.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-32",
  "stage": "8-preflight",
  "round": 3,
  "mode": "preflight",
  "group": "c",
  "full_evidence": "research/frontier-32-8-preflight-repair-evidence-3-62fc9959a02345adc947e2750e8eaa846c64f6873afec8b546b2c39e5575bbf0.json",
  "full_evidence_sha256": "62fc9959a02345adc947e2750e8eaa846c64f6873afec8b546b2c39e5575bbf0",
  "failures": [
    {
      "id": "risk-report",
      "stage": "8-preflight",
      "why": "ERROR risk-review-missing [lem-local-logarithmic-derivative-zeta]: lem-local-logarithmic-derivative-zeta is high risk and lacks a complete Alpha risk_review",
      "output": "ORDINARY 2 [lem-sokal-local-operator-norm-lower-bound] 2:boundary-sensitive language\nORDINARY 2 [thm-sokal-gliding-hump-uniform-boundedness] 2:5 declared dependencies\nORDINARY 0 [thm-open-mapping-theorem] no signals\nORDINARY 0 [thm-bounded-inverse-theorem] no signals\nORDINARY 0 [cor-separately-continuous-bilinear-map-on-banach-spaces-is-jointly-continuous] no signals\nORDINARY 2 [cex-open-mapping-fails-without-completeness] 2:analytic limiting/completeness language\nORDINARY 2 [cor-pointwise-limit-of-bounded-operators-is-bounded] 2:analytic limiting/completeness language\nORDINARY 0 [ex-condensation-of-singularities] no signals\nORDINARY 2 [lem-open-mapping-successive-approximation] 2:analytic limiting/completeness language\nORDINARY 0 [lem-sphere-and-ball-measures-scale] no signals\nORDINARY 2 [lem-radial-derivative-of-a-spherical-average] 2:analytic limiting/completeness language\nORDINARY 0 [thm-spherical-mean-value-property-for-harmonic-functions] no signals\nORDINARY 0 [cor-ball-mean-value-property-for-harmonic-functions] no signals\nORDINARY 0 [lem-radial-mollification-fixes-local-mean-value-functions] no signals\nORDINARY 2 [thm-continuous-mean-value-functions-are-harmonic] 2:4 declared dependencies\nORDINARY 0 [cor-local-mean-value-property-is-enough] no signals\nORDINARY 0 [lem-distributional-laplacian-commutes-with-mollification] no signals\nMODERATE 4 [thm-weyl-lemma-for-the-laplacian] 2:4 declared dependencies; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [cor-locally-integrable-weakly-harmonic-functions-are-smooth] 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [lem-derivatives-of-harmonic-functions-are-harmonic] no signals\nORDINARY 2 [thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic] 2:analytic limiting/completeness language\nORDINARY 0 [ex-affine-and-harmonic-polynomial-functions] no signals\nORDINARY 0 [ex-real-and-imaginary-parts-of-holomorphic-monomials] no signals\nORDINARY 0 [ex-radial-harmonic-functions-away-from-the-origin] no signals\nORDINARY 0 [cex-harmonic-on-a-punctured-domain-need-not-extend] no signals\nORDINARY 2 [cex-one-centred-ball-mean-identity-does-not-force-harmonicity] 2:boundary-sensitive language\nMODERATE 4 [ex-distributional-harmonicity-removes-an-apparent-corner] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space] no signals\nORDINARY 0 [prop-chain-rule-for-smooth-half-space-maps] no signals\nMODERATE 4 [lem-smoothness-at-the-boundary-is-independent-of-charts-and-extensions] 2:4 declared dependencies; 2:boundary-sensitive language\nMODERATE 4 [thm-smooth-invariance-of-manifold-boundary] 2:4 declared dependencies; 2:boundary-sensitive language\nORDINARY 2 [cor-diffeomorphisms-preserve-interior-and-boundary] 2:boundary-sensitive language\nORDINARY 2 [thm-the-interior-is-an-open-smooth-n-manifold] 2:boundary-sensitive language\nORDINARY 2 [thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold] 2:boundary-sensitive language\nHIGH 7 [prop-a-manifold-has-empty-boundary-if-and-only-if-it-is-a-manifold-without-boundary] 2:4 declared dependencies; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary] 2:boundary-sensitive language\nMODERATE 4 [thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary] 2:5 declared dependencies; 2:boundary-sensitive language\nORDINARY 2 [prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane] 2:boundary-sensitive language\nORDINARY 2 [prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors] 2:boundary-sensitive language\nORDINARY 2 [thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary] 2:boundary-sensitive language\nHIGH 6 [thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary] 2:4 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary] 2:boundary-sensitive language\nMODERATE 4 [thm-collar-neighborhood-theorem] 2:5 declared dependencies; 2:boundary-sensitive language\nORDINARY 2 [thm-the-double-has-a-well-defined-smooth-structure] 2:boundary-sensitive language\nORDINARY 2 [cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary] 2:boundary-sensitive language\nORDINARY 2 [thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts] 2:boundary-sensitive language\nMODERATE 4 [thm-neat-submanifolds-have-boundary-adapted-slice-charts] 2:4 declared dependencies; 2:boundary-sensitive language\nMODERATE 4 [thm-morse-sard-for-maps-from-manifolds-with-boundary] 2:5 declared dependencies; 2:boundary-sensitive language\nHIGH 6 [prop-orientations-and-positive-basis-classes-agree-in-positive-dimension] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension] 2:boundary-sensitive language\nHIGH 5 [thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form] 2:4 declared dependencies; 3:biconditional / both-direction claim\nORDINARY 2 [prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations] 2:boundary-sensitive language\nMODERATE 4 [prop-pointwise-orientation-sign-of-a-local-diffeomorphism] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [prop-boundary-orientation-is-independent-of-the-outward-vector-field] 2:boundary-sensitive language\nORDINARY 2 [prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary] 2:boundary-sensitive language\nORDINARY 2 [prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold] 2:boundary-sensitive language\nORDINARY 2 [fs-a-boundary-point-can-become-an-interior-point-under-another-smooth-chart] 2:boundary-sensitive language\nORDINARY 2 [fs-the-tangent-space-at-a-boundary-point-has-dimension-n-minus-one] 2:boundary-sensitive language\nMODERATE 4 [fs-every-vector-field-on-a-manifold-with-boundary-has-a-local-two-sided-flow-inside-the-manifold] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [fs-an-orientable-manifold-comes-with-a-canonical-orientation] 2:boundary-sensitive language\nORDINARY 2 [fs-every-manifold-is-orientable] 2:boundary-sensitive language\nORDINARY 2 [fs-the-boundary-orientation-is-given-by-inward-normal-first] 2:boundary-sensitive language\nMODERATE 4 [ex-the-closed-half-space-as-a-manifold-with-boundary] 2:4 declared dependencies; 2:boundary-sensitive language\nMODERATE 4 [ex-the-closed-ball-and-its-sphere-boundary] 2:4 declared dependencies; 2:boundary-sensitive language\nORDINARY 2 [ex-the-cylinder-with-two-oppositely-oriented-boundary-components] 2:boundary-sensitive language\nORDINARY 2 [ex-the-boundary-of-an-oriented-interval] 2:boundary-sensitive language\nORDINARY 2 [ex-the-standard-collar-of-a-closed-ball] 2:boundary-sensitive language\nORDINARY 2 [ex-the-double-of-a-disk-is-a-sphere] 2:quotient or equivalence-class construction\nMODERATE 4 [ex-the-mobius-band-is-nonorientable-with-oriented-circle-boundary] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [ex-real-projective-space-is-orientable-exactly-in-odd-dimension] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [ex-the-product-orientation-on-a-torus] no signals\nORDINARY 2 [cex-a-submanifold-meeting-the-ambient-boundary-nonneatly] 2:boundary-sensitive language\nORDINARY 2 [cex-an-inward-pointing-field-with-no-negative-time-flow-in-the-half-line] 2:analytic limiting/completeness language\nMODERATE 4 [ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal] 2:4 declared dependencies; 2:boundary-sensitive language\nrisk-report: 2 error(s), 478 item(s) routed",
      "named_ids": [
        "lem-sokal-local-operator-norm-lower-bound",
        "thm-sokal-gliding-hump-uniform-boundedness",
        "thm-open-mapping-theorem",
        "thm-bounded-inverse-theorem",
        "cor-separately-continuous-bilinear-map-on-banach-spaces-is-jointly-continuous",
        "cex-open-mapping-fails-without-completeness",
        "cor-pointwise-limit-of-bounded-operators-is-bounded",
        "ex-condensation-of-singularities",
        "lem-open-mapping-successive-approximation",
        "lem-sphere-and-ball-measures-scale",
        "lem-radial-derivative-of-a-spherical-average",
        "thm-spherical-mean-value-property-for-harmonic-functions",
        "cor-ball-mean-value-property-for-harmonic-functions",
        "lem-radial-mollification-fixes-local-mean-value-functions",
        "thm-continuous-mean-value-functions-are-harmonic",
        "cor-local-mean-value-property-is-enough",
        "lem-distributional-laplacian-commutes-with-mollification",
        "thm-weyl-lemma-for-the-laplacian",
        "cor-locally-integrable-weakly-harmonic-functions-are-smooth",
        "lem-derivatives-of-harmonic-functions-are-harmonic",
        "thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic",
        "ex-affine-and-harmonic-polynomial-functions",
        "ex-real-and-imaginary-parts-of-holomorphic-monomials",
        "ex-radial-harmonic-functions-away-from-the-origin",
        "cex-harmonic-on-a-punctured-domain-need-not-extend",
        "cex-one-centred-ball-mean-identity-does-not-force-harmonicity",
        "ex-distributional-harmonicity-removes-an-apparent-corner",
        "lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space",
        "prop-chain-rule-for-smooth-half-space-maps",
        "lem-smoothness-at-the-boundary-is-independent-of-charts-and-extensions",
        "thm-smooth-invariance-of-manifold-boundary",
        "cor-diffeomorphisms-preserve-interior-and-boundary",
        "thm-the-interior-is-an-open-smooth-n-manifold",
        "thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold",
        "prop-a-manifold-has-empty-boundary-if-and-only-if-it-is-a-manifold-without-boundary",
        "thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary",
        "thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary",
        "prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane",
        "prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors",
        "thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary",
        "thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary",
        "thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary",
        "thm-collar-neighborhood-theorem",
        "thm-the-double-has-a-well-defined-smooth-structure",
        "cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary",
        "thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts",
        "thm-neat-submanifolds-have-boundary-adapted-slice-charts",
        "thm-morse-sard-for-maps-from-manifolds-with-boundary",
        "prop-orientations-and-positive-basis-classes-agree-in-positive-dimension",
        "thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension",
        "thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form",
        "prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations",
        "prop-pointwise-orientation-sign-of-a-local-diffeomorphism",
        "prop-boundary-orientation-is-independent-of-the-outward-vector-field",
        "prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary",
        "prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold",
        "fs-a-boundary-point-can-become-an-interior-point-under-another-smooth-chart",
        "fs-the-tangent-space-at-a-boundary-point-has-dimension-n-minus-one",
        "fs-every-vector-field-on-a-manifold-with-boundary-has-a-local-two-sided-flow-inside-the-manifold",
        "fs-an-orientable-manifold-comes-with-a-canonical-orientation",
        "fs-every-manifold-is-orientable",
        "fs-the-boundary-orientation-is-given-by-inward-normal-first",
        "ex-the-closed-half-space-as-a-manifold-with-boundary",
        "ex-the-closed-ball-and-its-sphere-boundary",
        "ex-the-cylinder-with-two-oppositely-oriented-boundary-components",
        "ex-the-boundary-of-an-oriented-interval",
        "ex-the-standard-collar-of-a-closed-ball",
        "ex-the-double-of-a-disk-is-a-sphere",
        "ex-the-mobius-band-is-nonorientable-with-oriented-circle-boundary",
        "ex-real-projective-space-is-orientable-exactly-in-odd-dimension",
        "ex-the-product-orientation-on-a-torus",
        "cex-a-submanifold-meeting-the-ambient-boundary-nonneatly",
        "cex-an-inward-pointing-field-with-no-negative-time-flow-in-the-half-line",
        "ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "lem-sokal-local-operator-norm-lower-bound",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-sokal-gliding-hump-uniform-boundedness",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-open-mapping-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bounded-inverse-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-separately-continuous-bilinear-map-on-banach-spaces-is-jointly-continuous",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-open-mapping-fails-without-completeness",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-pointwise-limit-of-bounded-operators-is-bounded",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-condensation-of-singularities",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-open-mapping-successive-approximation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-sphere-and-ball-measures-scale",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radial-derivative-of-a-spherical-average",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-spherical-mean-value-property-for-harmonic-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-ball-mean-value-property-for-harmonic-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radial-mollification-fixes-local-mean-value-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-continuous-mean-value-functions-are-harmonic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-local-mean-value-property-is-enough",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-distributional-laplacian-commutes-with-mollification",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-weyl-lemma-for-the-laplacian",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-locally-integrable-weakly-harmonic-functions-are-smooth",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-derivatives-of-harmonic-functions-are-harmonic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-affine-and-harmonic-polynomial-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-real-and-imaginary-parts-of-holomorphic-monomials",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-radial-harmonic-functions-away-from-the-origin",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-harmonic-on-a-punctured-domain-need-not-extend",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-one-centred-ball-mean-identity-does-not-force-harmonicity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-distributional-harmonicity-removes-an-apparent-corner",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-chain-rule-for-smooth-half-space-maps",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-smoothness-at-the-boundary-is-independent-of-charts-and-extensions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-smooth-invariance-of-manifold-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-diffeomorphisms-preserve-interior-and-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-interior-is-an-open-smooth-n-manifold",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-a-manifold-has-empty-boundary-if-and-only-if-it-is-a-manifold-without-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-collar-neighborhood-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-double-has-a-well-defined-smooth-structure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-neat-submanifolds-have-boundary-adapted-slice-charts",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-morse-sard-for-maps-from-manifolds-with-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-orientations-and-positive-basis-classes-agree-in-positive-dimension",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-pointwise-orientation-sign-of-a-local-diffeomorphism",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-boundary-orientation-is-independent-of-the-outward-vector-field",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-boundary-point-can-become-an-interior-point-under-another-smooth-chart",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-tangent-space-at-a-boundary-point-has-dimension-n-minus-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-vector-field-on-a-manifold-with-boundary-has-a-local-two-sided-flow-inside-the-manifold",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-an-orientable-manifold-comes-with-a-canonical-orientation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-manifold-is-orientable",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-boundary-orientation-is-given-by-inward-normal-first",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-closed-half-space-as-a-manifold-with-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-closed-ball-and-its-sphere-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-cylinder-with-two-oppositely-oriented-boundary-components",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-boundary-of-an-oriented-interval",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-standard-collar-of-a-closed-ball",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-double-of-a-disk-is-a-sphere",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-mobius-band-is-nonorientable-with-oriented-circle-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-real-projective-space-is-orientable-exactly-in-odd-dimension",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-product-orientation-on-a-torus",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-submanifold-meeting-the-ambient-boundary-nonneatly",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-an-inward-pointing-field-with-no-negative-time-flow-in-the-half-line",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal",
      "scope": "run",
      "owner": "c"
    }
  ],
  "assigned_items": [
    {
      "id": "lem-sokal-local-operator-norm-lower-bound",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-sokal-gliding-hump-uniform-boundedness",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-open-mapping-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bounded-inverse-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-separately-continuous-bilinear-map-on-banach-spaces-is-jointly-continuous",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-open-mapping-fails-without-completeness",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-pointwise-limit-of-bounded-operators-is-bounded",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-condensation-of-singularities",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-open-mapping-successive-approximation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-sphere-and-ball-measures-scale",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radial-derivative-of-a-spherical-average",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-spherical-mean-value-property-for-harmonic-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-ball-mean-value-property-for-harmonic-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radial-mollification-fixes-local-mean-value-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-continuous-mean-value-functions-are-harmonic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-local-mean-value-property-is-enough",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-distributional-laplacian-commutes-with-mollification",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-weyl-lemma-for-the-laplacian",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-locally-integrable-weakly-harmonic-functions-are-smooth",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-derivatives-of-harmonic-functions-are-harmonic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-affine-and-harmonic-polynomial-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-real-and-imaginary-parts-of-holomorphic-monomials",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-radial-harmonic-functions-away-from-the-origin",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-harmonic-on-a-punctured-domain-need-not-extend",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-one-centred-ball-mean-identity-does-not-force-harmonicity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-distributional-harmonicity-removes-an-apparent-corner",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-chain-rule-for-smooth-half-space-maps",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-smoothness-at-the-boundary-is-independent-of-charts-and-extensions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-smooth-invariance-of-manifold-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-diffeomorphisms-preserve-interior-and-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-interior-is-an-open-smooth-n-manifold",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-a-manifold-has-empty-boundary-if-and-only-if-it-is-a-manifold-without-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-collar-neighborhood-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-double-has-a-well-defined-smooth-structure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-neat-submanifolds-have-boundary-adapted-slice-charts",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-morse-sard-for-maps-from-manifolds-with-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-orientations-and-positive-basis-classes-agree-in-positive-dimension",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-pointwise-orientation-sign-of-a-local-diffeomorphism",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-boundary-orientation-is-independent-of-the-outward-vector-field",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-boundary-point-can-become-an-interior-point-under-another-smooth-chart",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-tangent-space-at-a-boundary-point-has-dimension-n-minus-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-vector-field-on-a-manifold-with-boundary-has-a-local-two-sided-flow-inside-the-manifold",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-an-orientable-manifold-comes-with-a-canonical-orientation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-manifold-is-orientable",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-boundary-orientation-is-given-by-inward-normal-first",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-closed-half-space-as-a-manifold-with-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-closed-ball-and-its-sphere-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-cylinder-with-two-oppositely-oriented-boundary-components",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-boundary-of-an-oriented-interval",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-standard-collar-of-a-closed-ball",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-double-of-a-disk-is-a-sphere",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-mobius-band-is-nonorientable-with-oriented-circle-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-real-projective-space-is-orientable-exactly-in-odd-dimension",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-product-orientation-on-a-torus",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-submanifold-meeting-the-ambient-boundary-nonneatly",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-an-inward-pointing-field-with-no-negative-time-flow-in-the-half-line",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal",
      "scope": "run",
      "owner": "c"
    }
  ],
  "fatal_repair_licences": [
    {
      "id": "lem-open-mapping-successive-approximation",
      "model": "gpt-5.6-terra",
      "context_sha256": "b6589ceb1c31a9bf93c7b72916096b1504d8dd5995696874454c22b15daa72a3",
      "item_sha256": "22d275211937b5cb53df5b09120cb5cab329297c9eb71940320963d5b89cb738",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "c",
      "at": "2026-09-06T10:28:54.201Z"
    },
    {
      "id": "ex-radial-harmonic-functions-away-from-the-origin",
      "model": "gpt-5.6-terra",
      "context_sha256": "023ce640af551d983e12b1ca0712029d73dd8c97a8d2b6067693c072aa91e071",
      "item_sha256": "853a10fd8e568f61863e5a62013d5f2b81795d0a1346cfd1eee5b92d2386ff71",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "c",
      "at": "2026-09-06T10:28:54.202Z"
    },
    {
      "id": "lem-radial-mollification-fixes-local-mean-value-functions",
      "model": "gpt-5.6-terra",
      "context_sha256": "71fc12dce384803c52d88a5cbe5592c4294e5de51321099c5ce5cce81b4aa01a",
      "item_sha256": "947fba0ed69adac530a35932f3c830984e326270eb8c6b5e02583db108ca9faa",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "c",
      "at": "2026-09-06T10:28:54.202Z"
    },
    {
      "id": "ex-distributional-harmonicity-removes-an-apparent-corner",
      "model": "gpt-5.6-terra",
      "context_sha256": "3e411afb9c900a47bbdeba8c4c8c7a2ac0feb9ca9e6e9679cd86faa0aab3cc75",
      "item_sha256": "534aca9605b6bb3e9ac5b881b1d025fc4404e03eaf4cdf89adf56dd2f4dbe4b5",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "c",
      "at": "2026-09-06T10:28:54.202Z"
    },
    {
      "id": "cor-local-mean-value-property-is-enough",
      "model": "gpt-5.6-terra",
      "context_sha256": "4a439faab11a705656fe62c67c557d11625e2f2bac4e06b5ee219ce9ebd1ec7e",
      "item_sha256": "99506dd831130f6ad717bf69b1506436a5b4d1d800bb40002b172b101b790ae3",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "c",
      "at": "2026-09-06T10:28:54.202Z"
    },
    {
      "id": "cex-one-centred-ball-mean-identity-does-not-force-harmonicity",
      "model": "gpt-5.6-terra",
      "context_sha256": "c62adb9cbc7c952f9570c54dab59e0233d31c9c0cbb80b3a8ee0ed9cb9937dfa",
      "item_sha256": "3bdf7f2040b5a311b517a534ef67830994e51b2b5ef202cea95375f5ceb52fa6",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "c",
      "at": "2026-09-06T10:28:54.202Z"
    },
    {
      "id": "ex-affine-and-harmonic-polynomial-functions",
      "model": "gpt-5.6-terra",
      "context_sha256": "a93671b350b8bf02068122e52962159bbfe75401b8c74ea5c54fbb52172392f7",
      "item_sha256": "58d85e5fbd9dccf43fbc7d2a2d743c5f97dff06e05530e211d6471f8463e3099",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "c",
      "at": "2026-09-06T10:28:54.202Z"
    },
    {
      "id": "thm-neat-submanifolds-have-boundary-adapted-slice-charts",
      "model": "gpt-5.6-terra",
      "context_sha256": "8f39170820e1ad753825dba8af50e25ba924fa1af1998cb118469864ed7ee678",
      "item_sha256": "37fb061a6a8e318f814993903e6392ccfc693c3078bbd060a0af0054d570cd08",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "c",
      "at": "2026-09-06T10:28:54.203Z"
    },
    {
      "id": "thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts",
      "model": "gpt-5.6-terra",
      "context_sha256": "10ce8b69eb886776d391c002bfab16d0922de2409253da993949a3a91f6cedd6",
      "item_sha256": "723c6ced0b1eac57b9e7978786bc961e34d45be957ae3d4babbfab6f582bcc56",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "c",
      "at": "2026-09-06T10:28:54.203Z"
    },
    {
      "id": "prop-boundary-orientation-is-independent-of-the-outward-vector-field",
      "model": "gpt-5.6-terra",
      "context_sha256": "8df8307ee0e7dfa8d7c0af82adad8e46645785e6b6a0ad2af52c393d671538aa",
      "item_sha256": "7b0ecbe87584808e431be85fd3ac490553db5476d0ec8d75ab55d3cd6e048581",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "c",
      "at": "2026-09-06T10:28:54.203Z"
    },
    {
      "id": "thm-the-double-has-a-well-defined-smooth-structure",
      "model": "gpt-5.6-terra",
      "context_sha256": "b5b5d93fc7c2d0180ac48072dbff0773b9f084b036d5d6198f590e67073a811f",
      "item_sha256": "bd800a3eae4b9c4e9b713de91224bb3c2f7778e76dfde9cc218beec9e6e81208",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "c",
      "at": "2026-09-06T10:28:54.204Z"
    },
    {
      "id": "ex-real-projective-space-is-orientable-exactly-in-odd-dimension",
      "model": "gpt-5.6-terra",
      "context_sha256": "51784c2697d4f08331e0df07e13e2af642d1b07d3a1ca0767729ba5e5436458a",
      "item_sha256": "55fb8c143e8a35f4f8db79cc2ad8bcb74d0ffd0e3e2559693f1265890fa1ac96",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "c",
      "at": "2026-09-06T10:28:54.204Z"
    },
    {
      "id": "prop-pointwise-orientation-sign-of-a-local-diffeomorphism",
      "model": "gpt-5.6-terra",
      "context_sha256": "528f353a08fa85002f77db5a25b6acde4687cd94c9ee6843d3039da7f7c21ce3",
      "item_sha256": "5203a6d53901461e3b73ff0efc589da1cb5f28efa1324308fc49e023ee86b8c5",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "c",
      "at": "2026-09-06T10:28:54.204Z"
    },
    {
      "id": "thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary",
      "model": "gpt-5.6-terra",
      "context_sha256": "47fe4493bdf25f5df7475897e6ce7f570360b7e2f6a94c51fe40c82ebb06608c",
      "item_sha256": "cc4e6c30458538fea46d88c4844c8f9c548e4d2b04b962353fe937a55975d7a7",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "c",
      "at": "2026-09-06T10:28:54.204Z"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **c**, run `frontier-32`

You are the group Alpha for batches **4**, **14**, **15**: 3 A/B pair(s), 6 page(s), 110 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-32-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-32-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `the-baire-principles-of-functional-analysis` | A | functional-analysis | 288.057 | `geometric-hahn-banach-and-convex-separation-examples` |
| 4 | `the-baire-principles-of-functional-analysis-examples` | B | functional-analysis | 288.058 | `the-baire-principles-of-functional-analysis` |
| 14 | `harmonic-functions-and-mean-values-in-rn` | A | pde | 458.003 | `quasilinear-characteristics-and-cauchy-kovalevskaya-examples`, `the-divergence-theorem-and-classical-stokes`, `the-maximal-function-and-lebesgue-differentiation` |
| 14 | `harmonic-functions-and-mean-values-in-rn-examples` | B | pde | 458.004 | `harmonic-functions-and-mean-values-in-rn`, `complex-differentiability-and-cauchy-riemann` |
| 15 | `manifolds-with-boundary-collars-and-orientations` | A | differential-geometry | 467 | `smooth-manifolds-and-smooth-maps`, `smooth-partitions-of-unity-and-exhaustions`, `tangent-cotangent-and-the-differential`, `rank-theorems-and-embedded-submanifolds`, `smooth-vector-bundles-and-sections`, `sard-theorem-and-transversality`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `vector-fields-flows-and-lie-derivatives`, `distributions-integral-manifolds-and-the-frobenius-theorem`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-exterior-derivative-and-cartan-calculus`, `exterior-powers-orientation-and-hodge-duality` |
| 15 | `manifolds-with-boundary-collars-and-orientations-examples` | B | differential-geometry | 468 | `manifolds-with-boundary-collars-and-orientations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-baire-principles-of-functional-analysis` — The Baire Principles of Functional Analysis (16 item(s))

- `thm-uniform-boundedness-principle` · theorem — Uniform boundedness principle
- `thm-banach-steinhaus-dichotomy` · theorem — Baire dichotomy for a pointwise-defined family of bounded linear operators
- `cor-pointwise-limit-of-bounded-operators-is-bounded` · corollary — A pointwise limit of bounded operators is bounded with the liminf norm bound
- `lem-sokal-local-operator-norm-lower-bound` · lemma — A nonzero bounded linear operator is large on one of two nearby points
- `thm-sokal-gliding-hump-uniform-boundedness` · theorem — Sokal's gliding-hump proof of uniform boundedness
- `lem-open-mapping-ball-closure-step` · lemma — The closure of a bounded image contains a ball
- `lem-open-mapping-successive-approximation` · lemma — Successive approximation turns a closure-ball inclusion into an actual preimage
- `thm-open-mapping-theorem` · theorem — Open mapping theorem
- `cor-open-mapping-quantitative-form` · corollary — Quantitative lifting form of the open mapping theorem
- `thm-bounded-inverse-theorem` · theorem — Bounded inverse theorem
- `def-graph-of-a-linear-operator` · definition — The graph of a linear operator with a linear domain
- `thm-closed-graph-theorem` · theorem — Closed graph theorem
- `def-closable-linear-operator` · definition — A closable densely defined linear operator
- `thm-closability-sequential-criterion` · theorem — Sequential criterion for closability
- `cor-separately-continuous-bilinear-map-on-banach-spaces-is-jointly-continuous` · corollary — A separately continuous bilinear map on Banach spaces is jointly continuous
- `cor-equivalent-complete-norms-from-one-sided-comparison` · corollary — A one-sided comparison of two complete norms makes them equivalent

### `the-baire-principles-of-functional-analysis-examples` — The Baire Principles of Functional Analysis — Examples (5 item(s))

- `ex-condensation-of-singularities` · example — Condensation of singularities
- `cex-uniform-boundedness-fails-on-an-incomplete-domain` · counterexample — Uniform boundedness fails on the incomplete space c_00
- `cex-open-mapping-fails-without-completeness` · counterexample — A bounded bijection of incomplete normed spaces need not be open
- `cex-closed-graph-fails-without-completeness` · counterexample — A closed everywhere-defined graph need not be bounded without completeness
- `ex-a-closed-unbounded-differential-operator` · example — Differentiation on C^1[0,1] is closed and unbounded in the supremum norm

### `harmonic-functions-and-mean-values-in-rn` — Harmonic Functions and Mean Values in Rn (16 item(s))

- `def-distributional-harmonicity-and-poisson-equation-in-rn` · definition — Distributional harmonicity and Poisson's equation on an open subset of Rn
- `def-spherical-averages-and-local-ball-means-in-rn` · definition — Spherical averages and local ball means in Rn
- `lem-sphere-and-ball-measures-scale` · lemma — Surface and volume measures of Euclidean spheres and balls scale with radius
- `lem-radial-derivative-of-a-spherical-average` · lemma — The radial derivative of a spherical average
- `thm-spherical-mean-value-property-for-harmonic-functions` · theorem — Harmonic functions equal their spherical averages
- `cor-ball-mean-value-property-for-harmonic-functions` · corollary — Harmonic functions equal their ball averages
- `def-radial-mollifier-family-in-rn` · definition — A radial mollifier family in Rn
- `lem-radial-mollification-fixes-local-mean-value-functions` · lemma — Radial mollification fixes a function with the local ball mean-value property
- `thm-continuous-mean-value-functions-are-harmonic` · theorem — A continuous function with the ball mean-value property is harmonic
- `cor-local-mean-value-property-is-enough` · corollary — The local ball mean-value property already implies harmonicity
- `lem-distributional-laplacian-commutes-with-mollification` · lemma — The distributional Laplacian commutes with mollification on shrunken domains
- `thm-weyl-lemma-for-the-laplacian` · theorem — Weyl's lemma for the Laplacian
- `cor-locally-integrable-weakly-harmonic-functions-are-smooth` · corollary — A locally integrable weakly harmonic function has a smooth harmonic representative
- `lem-derivatives-of-harmonic-functions-are-harmonic` · lemma — Derivatives of harmonic functions are harmonic
- `thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic` · theorem — Locally uniform limits of harmonic functions are harmonic
- `rem-plane-harmonic-theory-is-owned-by-complex-analysis` · remark — Plane-specific harmonic theory remains owned by complex analysis

### `harmonic-functions-and-mean-values-in-rn-examples` — Harmonic Functions and Mean Values in Rn — Examples (6 item(s))

- `ex-affine-and-harmonic-polynomial-functions` · example — Affine functions and mixed quadratic monomials are harmonic
- `ex-real-and-imaginary-parts-of-holomorphic-monomials` · example — The real and imaginary parts of holomorphic monomials
- `ex-radial-harmonic-functions-away-from-the-origin` · example — Radial harmonic functions away from the origin
- `cex-harmonic-on-a-punctured-domain-need-not-extend` · counterexample — A harmonic function on a punctured domain need not extend across the puncture
- `cex-one-centred-ball-mean-identity-does-not-force-harmonicity` · counterexample — One centred ball-mean identity does not force harmonicity
- `ex-distributional-harmonicity-removes-an-apparent-corner` · example — Distributional harmonicity removes an apparent interior corner

### `manifolds-with-boundary-collars-and-orientations` — Manifolds with Boundary Collars and Orientations (55 item(s))

- `def-euclidean-upper-half-space-and-its-boundary` · definition — Euclidean upper half-space and its boundary
- `def-smooth-function-on-a-relatively-open-subset-of-a-half-space` · definition — Smooth functions on relatively open half-space sets
- `lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space` · lemma — Half-space extensions have the same derivatives on the half-space
- `prop-chain-rule-for-smooth-half-space-maps` · proposition — Chain rule for smooth half-space maps
- `def-topological-manifold-with-boundary` · definition — Topological manifolds with boundary
- `def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary` · definition — Smooth charts, atlases, and structures with boundary
- `def-smooth-map-between-manifolds-with-boundary` · definition — Smooth maps between manifolds with boundary
- `lem-smoothness-at-the-boundary-is-independent-of-charts-and-extensions` · lemma — Boundary smoothness is independent of charts and extensions
- `def-interior-point-boundary-point-interior-and-boundary-of-a-manifold` · definition — Interior and boundary of a manifold with boundary
- `thm-smooth-invariance-of-manifold-boundary` · theorem — Smooth invariance of the manifold boundary
- `cor-diffeomorphisms-preserve-interior-and-boundary` · corollary — Diffeomorphisms preserve interior and boundary
- `thm-the-interior-is-an-open-smooth-n-manifold` · theorem — The interior is an open smooth n-manifold
- `thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold` · theorem — The boundary of a positive-dimensional manifold is a closed embedded smooth (n-1)-manifold
- `prop-a-manifold-has-empty-boundary-if-and-only-if-it-is-a-manifold-without-boundary` · proposition — Empty boundary is equivalent to being boundaryless
- `thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary` · theorem — Smooth partitions of unity exist on manifolds with boundary
- `thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary` · theorem — Tangent and cotangent bundles extend over a boundary
- `def-inward-outward-and-boundary-tangent-vectors` · definition — Inward, outward, and boundary-tangent vectors
- `prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane` · proposition — The boundary tangent space is the boundary-tangent hyperplane
- `def-boundary-defining-function` · definition — Boundary-defining functions
- `prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors` · proposition — Boundary-defining functions exist locally and detect inward vectors
- `thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary` · theorem — A global inward-pointing boundary vector field exists
- `thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary` · theorem — Boundary-tangent fields have boundary-preserving local two-sided flows
- `thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary` · theorem — Inward-pointing fields have local forward semiflows at the boundary
- `def-smooth-collar-of-a-manifold-boundary` · definition — Smooth collars of a manifold boundary
- `thm-collar-neighborhood-theorem` · theorem — Collar neighborhood theorem
- `def-double-of-a-smooth-manifold-with-boundary` · definition — The double of a smooth manifold with boundary
- `thm-the-double-has-a-well-defined-smooth-structure` · theorem — The double has a well-defined smooth structure
- `cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary` · corollary — Smooth functions and tensor fields extend locally across the boundary
- `def-smooth-immersion-and-embedding-for-manifolds-with-boundary` · definition — Immersions and embeddings for manifolds with boundary
- `def-embedded-smooth-submanifold-with-boundary` · definition — Embedded smooth submanifolds with boundary
- `thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts` · theorem — Boundary submanifolds of a boundaryless manifold have half-slice charts
- `def-neat-submanifold-of-a-manifold-with-boundary` · definition — Neat submanifolds of a manifold with boundary
- `thm-neat-submanifolds-have-boundary-adapted-slice-charts` · theorem — Neat submanifolds have boundary-adapted slice charts
- `thm-morse-sard-for-maps-from-manifolds-with-boundary` · theorem — Morse-Sard for maps from manifolds with boundary
- `def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space` · definition — Determinant-line orientations of finite-dimensional real vector spaces
- `prop-orientations-and-positive-basis-classes-agree-in-positive-dimension` · proposition — Orientations and positive basis classes agree in positive dimension
- `def-oriented-smooth-manifold-and-oriented-chart` · definition — Oriented smooth manifolds and oriented charts
- `thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension` · theorem — Positive oriented atlases characterize orientations in positive dimension
- `def-orientable-manifold` · definition — Orientable manifolds
- `thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form` · theorem — Orientability is equivalent to a nowhere-vanishing top form
- `prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations` · proposition — Nonempty connected orientable manifolds have exactly two orientations
- `prop-pointwise-orientation-sign-of-a-local-diffeomorphism` · proposition — Pointwise orientation sign of a local diffeomorphism
- `def-product-orientation` · definition — Product orientations
- `def-induced-orientation-on-a-hypersurface-from-a-coorientation` · definition — Orientation induced on a hypersurface by a coorientation
- `def-induced-boundary-orientation` · definition — Induced boundary orientation
- `prop-boundary-orientation-is-independent-of-the-outward-vector-field` · proposition — Boundary orientation is independent of the outward vector field
- `prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary` · proposition — Boundary orientation of a product with at most one boundary factor
- `prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold` · proposition — An oriented transverse normal bundle orients an embedded submanifold
- `def-orientation-preserving-parametrization` · definition — Orientation-preserving parametrizations
- `fs-a-boundary-point-can-become-an-interior-point-under-another-smooth-chart` · false-statement — A smooth chart can turn a boundary point into an interior point
- `fs-the-tangent-space-at-a-boundary-point-has-dimension-n-minus-one` · false-statement — The tangent space at a boundary point has dimension n-1
- `fs-every-vector-field-on-a-manifold-with-boundary-has-a-local-two-sided-flow-inside-the-manifold` · false-statement — Every boundary vector field has a local two-sided flow inside the manifold
- `fs-an-orientable-manifold-comes-with-a-canonical-orientation` · false-statement — An orientable manifold has a canonical orientation
- `fs-every-manifold-is-orientable` · false-statement — Every manifold is orientable
- `fs-the-boundary-orientation-is-given-by-inward-normal-first` · false-statement — Boundary orientation is inward-normal-first

### `manifolds-with-boundary-collars-and-orientations-examples` — Manifolds with Boundary Collars and Orientations — Examples (12 item(s))

- `ex-the-closed-half-space-as-a-manifold-with-boundary` · example — The closed half-space as a manifold with boundary
- `ex-the-closed-ball-and-its-sphere-boundary` · example — The closed ball and its sphere boundary
- `ex-the-cylinder-with-two-oppositely-oriented-boundary-components` · example — A cylinder with oppositely oriented boundary components
- `ex-the-boundary-of-an-oriented-interval` · example — The boundary of an oriented interval
- `ex-the-standard-collar-of-a-closed-ball` · example — The standard collar of a closed ball
- `ex-the-double-of-a-disk-is-a-sphere` · example — The double of a disk is a sphere
- `ex-the-mobius-band-is-nonorientable-with-oriented-circle-boundary` · example — The Mobius band is nonorientable although its boundary circle is orientable
- `ex-real-projective-space-is-orientable-exactly-in-odd-dimension` · example — Positive-dimensional real projective space is orientable exactly in odd dimension
- `ex-the-product-orientation-on-a-torus` · example — The product orientation on a torus
- `cex-a-submanifold-meeting-the-ambient-boundary-nonneatly` · counterexample — A submanifold meeting the ambient boundary nonneatly
- `cex-an-inward-pointing-field-with-no-negative-time-flow-in-the-half-line` · counterexample — An inward field without a negative-time flow in the half-line
- `ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal` · example — Boundary orientation of the unit sphere by the outward normal

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

3 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-c667527fa94e3c0e3e35ac45 · `def-spherical-averages-and-local-ball-means-in-rn`** (from group c, would-be-fatal) — The definition introduces M_u(x,r) and A_u(x,r), and then states their mean-value properties, without quantifying an open Omega or requiring u to be measurable and sphere/ball integrable. As written the displayed integrals need not exist for an arbitrary u.
- **s8a-bea9295dcfb0e3326be749b1 · `def-distributional-harmonicity-and-poisson-equation-in-rn`** (from group c, gap-a-reader-closes) — It defines a distribution as a continuous linear functional on C_c^infty(Omega) without specifying the test-function topology. The intended standard LF topology is recoverable, but continuity is otherwise undefined.
- **s8a-b4995ce770e4f4a663df4d20 · `cor-pointwise-limit-of-bounded-operators-is-bounded`** (from group c, gap-a-reader-closes) — Step 3.1 says that the preceding inequality along a subsequence with norms tending to the liminf yields the liminf bound, but the displayed preceding estimate used the global M. One must separately apply ||T_n x||<=||T_n||||x|| along that subsequence before passing to its limit.

Append one owning-group disposition per warning to `research/frontier-32-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-32`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Work only on `assigned_items`, using the live tuples
and retained fatal repair licences as evidence. Rerun focused checks where supported.

Resolve every assigned finding in this pass, keeping the existing mathematics
and detail except where an exact fatal licence requires correction. A serial
reviewer must establish ownership before editing an ambiguous record. If the
detector or repair authority is wrong, report the cause; unchanged retries stop.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
including the envelope's `fatal_repair_licences`. These bind validated original
rejections to the pre-Step-8 baseline even after a repair makes their verdicts
stale. Empty `live_tuples` does not revoke these licences. Use them only to
complete the assigned repair; do not readjudicate settled findings.
You may also correct a documentary contract, manifest, impact or verification
record to match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.

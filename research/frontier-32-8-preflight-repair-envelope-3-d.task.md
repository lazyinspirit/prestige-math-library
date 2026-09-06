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
  "group": "d",
  "full_evidence": "research/frontier-32-8-preflight-repair-evidence-3-62fc9959a02345adc947e2750e8eaa846c64f6873afec8b546b2c39e5575bbf0.json",
  "full_evidence_sha256": "62fc9959a02345adc947e2750e8eaa846c64f6873afec8b546b2c39e5575bbf0",
  "failures": [
    {
      "id": "risk-report",
      "stage": "8-preflight",
      "why": "ERROR risk-review-missing [lem-local-logarithmic-derivative-zeta]: lem-local-logarithmic-derivative-zeta is high risk and lacks a complete Alpha risk_review",
      "output": "ORDINARY 2 [lem-perron-kernel] 2:analytic limiting/completeness language\nORDINARY 0 [lem-truncated-perron-kernel] no signals\nORDINARY 2 [thm-perron-formula] 2:analytic limiting/completeness language\nMODERATE 4 [thm-truncated-perron-formula] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [thm-riemann-von-mangoldt-zero-counting] 2:5 declared dependencies; 2:boundary-sensitive language\nORDINARY 2 [cor-zeta-zero-count-unit-interval] 2:boundary-sensitive language\nHIGH 5 [lem-local-logarithmic-derivative-zeta] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [lem-logarithmic-derivative-zeta-left-half-plane] no signals\nHIGH 7 [lem-von-mangoldt-explicit-formula-residues] 3:7 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-von-mangoldt-explicit-formula-smoothed] 2:6 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [thm-von-mangoldt-explicit-formula-truncated] 2:6 declared dependencies; 2:boundary-sensitive language\nORDINARY 2 [ex-perron-kernel-at-and-away-from-the-jump] 2:analytic limiting/completeness language\nORDINARY 2 [ex-perron-formula-for-a-finite-dirichlet-polynomial] 2:analytic limiting/completeness language\nORDINARY 2 [ex-von-mangoldt-residue-table] 2:boundary-sensitive language\nMODERATE 4 [ex-smoothed-versus-sharp-explicit-formula] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [ex-selecting-an-admissible-contour-height] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [cex-an-unordered-infinite-zero-sum-is-not-a-formula] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cex-right-continuous-psi-has-the-wrong-perron-endpoint] 2:boundary-sensitive language\nMODERATE 4 [lem-nonzero-number-field-ideal-has-finite-quotient] 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [thm-number-field-integral-ideal-factorisation-in-zf] 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [thm-principal-ideal-norm-is-absolute-field-norm] 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [thm-ideal-norm-is-multiplicative] 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 0 [cor-norm-of-a-prime-ideal] no signals\nORDINARY 2 [thm-fundamental-identity-for-primes-in-number-fields] 2:quotient or equivalence-class construction\nORDINARY 0 [thm-ramification-and-residue-degrees-in-towers] no signals\nMODERATE 4 [thm-dedekind-kummer-prime-factorisation] 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nORDINARY 2 [cor-eisenstein-prime-is-totally-ramified] 2:boundary-sensitive language\nHIGH 7 [thm-ramified-primes-and-the-number-field-discriminant] 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 0 [cor-only-finitely-many-primes-ramify] no signals\nORDINARY 0 [lem-codifferent-is-a-fractional-ideal] no signals\nMODERATE 4 [thm-different-of-a-monogenic-number-field] 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nORDINARY 2 [thm-discriminant-is-the-norm-of-the-different] 2:analytic limiting/completeness language\nMODERATE 3 [thm-prime-support-of-the-different-is-ramification] 3:biconditional / both-direction claim\nMODERATE 4 [thm-different-exponent-in-tame-and-wild-ramification] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [cor-discriminant-valuation-from-different-exponents] no signals\nORDINARY 2 [ex-prime-factorization-in-quadratic-fields] 2:quotient or equivalence-class construction\nMODERATE 4 [ex-dedekind-kummer-in-a-cubic-field] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [cex-dedekind-kummer-without-the-index-hypothesis] 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nORDINARY 0 [ex-eisenstein-total-ramification] no signals\nORDINARY 0 [ex-quadratic-field-codifferent] no signals\nORDINARY 2 [ex-cyclotomic-different-preview] 2:quotient or equivalence-class construction\nMODERATE 4 [ex-tame-different-exponent] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [ex-wild-different-exponent] 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [prop-verma-homomorphisms-are-singular-vectors] no signals\nORDINARY 2 [lem-enveloping-algebra-of-the-negative-nilpotent-lie-algebra-is-a-domain] 2:boundary-sensitive language\nMODERATE 3 [lem-a-nonzero-verma-homomorphism-is-injective] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [lem-every-verma-module-contains-a-simple-verma-submodule] 2:4 declared dependencies; 2:4 cited facts\nMODERATE 3 [lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-verma-homomorphism-spaces-have-dimension-at-most-one] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [lem-simple-root-singular-vector-in-a-verma-module] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 1 [prop-simple-reflection-embedding-of-verma-modules] 1:2 cited facts\nHIGH 5 [thm-verma-embedding-for-an-arbitrary-positive-root] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [lem-a-verma-composition-factor-has-the-same-central-character] 1:3 cited facts; 2:quotient or equivalence-class construction\nHIGH 6 [prop-verma-composition-multiplicities-are-finite] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-first-jantzen-filtration-term-is-the-verma-maximal-submodule] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [thm-jantzen-sum-formula-for-a-verma-module] 1:3 cited facts\nCRITICAL 10 [thm-strong-linkage-principle-for-verma-modules] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nMODERATE 3 [lem-verma-embedding-implies-strong-linkage] 1:2 cited facts; 2:quotient or equivalence-class construction\nHIGH 6 [thm-bgg-verma-homomorphism-criterion] 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [cor-generic-verma-modules-are-simple] 2:analytic limiting/completeness language\nHIGH 6 [cor-antidominant-verma-modules-are-simple] 2:5 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [ex-sl2-verma-embedding-chain] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [ex-a2-regular-dominant-verma-embedding-poset] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [ex-a2-singular-dot-orbit-collapses] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [cex-equal-central-character-does-not-give-every-verma-embedding-direction] 2:analytic limiting/completeness language\nMODERATE 4 [cex-nonintegral-reflection-does-not-produce-a-singular-power] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [lem-base-change-of-intertwiner-spaces] 1:2 cited facts\nORDINARY 1 [lem-galois-conjugates-have-equal-scalar-extension-multiplicity] 1:2 cited facts\nHIGH 6 [thm-scalar-extension-of-an-irreducible-finite-group-representation] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-character-field-is-the-stabilizer-fixed-field] 2:6 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim\nMODERATE 3 [thm-absolute-irreducibility-via-the-endomorphism-division-algebra] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-schur-index-is-independent-of-the-chosen-splitting-field] 2:5 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-character-of-an-irreducible-over-a-nonsplitting-field] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [cor-schur-index-divides-the-representation-degree] no signals\nHIGH 5 [thm-schur-index-equals-division-algebra-index] 3:7 declared dependencies; 2:5 cited facts\nCRITICAL 11 [thm-schur-index-as-minimal-realization-multiplicity] 2:6 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [ex-galois-conjugate-characters-of-c3] 2:4 declared dependencies; 2:boundary-sensitive language; 1:finite countermodel smoke test selected\nHIGH 5 [ex-s3-is-split-over-the-rationals] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-quaternion-character-has-schur-index-two] 2:5 declared dependencies\nMODERATE 4 [ex-trivial-character-has-schur-index-one] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nrisk-report: 2 error(s), 478 item(s) routed\nERROR risk-review-missing [lem-local-logarithmic-derivative-zeta]: lem-local-logarithmic-derivative-zeta is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [lem-von-mangoldt-explicit-formula-residues]: lem-von-mangoldt-explicit-formula-residues is high risk and lacks a complete Alpha risk_review\n",
      "named_ids": [
        "lem-perron-kernel",
        "lem-truncated-perron-kernel",
        "thm-perron-formula",
        "thm-truncated-perron-formula",
        "thm-riemann-von-mangoldt-zero-counting",
        "cor-zeta-zero-count-unit-interval",
        "lem-local-logarithmic-derivative-zeta",
        "lem-logarithmic-derivative-zeta-left-half-plane",
        "lem-von-mangoldt-explicit-formula-residues",
        "thm-von-mangoldt-explicit-formula-smoothed",
        "thm-von-mangoldt-explicit-formula-truncated",
        "ex-perron-kernel-at-and-away-from-the-jump",
        "ex-perron-formula-for-a-finite-dirichlet-polynomial",
        "ex-von-mangoldt-residue-table",
        "ex-smoothed-versus-sharp-explicit-formula",
        "ex-selecting-an-admissible-contour-height",
        "cex-an-unordered-infinite-zero-sum-is-not-a-formula",
        "cex-right-continuous-psi-has-the-wrong-perron-endpoint",
        "lem-nonzero-number-field-ideal-has-finite-quotient",
        "thm-number-field-integral-ideal-factorisation-in-zf",
        "thm-principal-ideal-norm-is-absolute-field-norm",
        "thm-ideal-norm-is-multiplicative",
        "cor-norm-of-a-prime-ideal",
        "thm-fundamental-identity-for-primes-in-number-fields",
        "thm-ramification-and-residue-degrees-in-towers",
        "thm-dedekind-kummer-prime-factorisation",
        "cor-eisenstein-prime-is-totally-ramified",
        "thm-ramified-primes-and-the-number-field-discriminant",
        "cor-only-finitely-many-primes-ramify",
        "lem-codifferent-is-a-fractional-ideal",
        "thm-different-of-a-monogenic-number-field",
        "thm-discriminant-is-the-norm-of-the-different",
        "thm-prime-support-of-the-different-is-ramification",
        "thm-different-exponent-in-tame-and-wild-ramification",
        "cor-discriminant-valuation-from-different-exponents",
        "ex-prime-factorization-in-quadratic-fields",
        "ex-dedekind-kummer-in-a-cubic-field",
        "cex-dedekind-kummer-without-the-index-hypothesis",
        "ex-eisenstein-total-ramification",
        "ex-quadratic-field-codifferent",
        "ex-cyclotomic-different-preview",
        "ex-tame-different-exponent",
        "ex-wild-different-exponent",
        "prop-verma-homomorphisms-are-singular-vectors",
        "lem-enveloping-algebra-of-the-negative-nilpotent-lie-algebra-is-a-domain",
        "lem-a-nonzero-verma-homomorphism-is-injective",
        "lem-every-verma-module-contains-a-simple-verma-submodule",
        "lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one",
        "thm-verma-homomorphism-spaces-have-dimension-at-most-one",
        "lem-simple-root-singular-vector-in-a-verma-module",
        "prop-simple-reflection-embedding-of-verma-modules",
        "thm-verma-embedding-for-an-arbitrary-positive-root",
        "lem-a-verma-composition-factor-has-the-same-central-character",
        "prop-verma-composition-multiplicities-are-finite",
        "lem-first-jantzen-filtration-term-is-the-verma-maximal-submodule",
        "thm-jantzen-sum-formula-for-a-verma-module",
        "thm-strong-linkage-principle-for-verma-modules",
        "lem-verma-embedding-implies-strong-linkage",
        "thm-bgg-verma-homomorphism-criterion",
        "cor-generic-verma-modules-are-simple",
        "cor-antidominant-verma-modules-are-simple",
        "ex-sl2-verma-embedding-chain",
        "ex-a2-regular-dominant-verma-embedding-poset",
        "ex-a2-singular-dot-orbit-collapses",
        "cex-equal-central-character-does-not-give-every-verma-embedding-direction",
        "cex-nonintegral-reflection-does-not-produce-a-singular-power",
        "lem-base-change-of-intertwiner-spaces",
        "lem-galois-conjugates-have-equal-scalar-extension-multiplicity",
        "thm-scalar-extension-of-an-irreducible-finite-group-representation",
        "lem-character-field-is-the-stabilizer-fixed-field",
        "thm-absolute-irreducibility-via-the-endomorphism-division-algebra",
        "lem-schur-index-is-independent-of-the-chosen-splitting-field",
        "thm-character-of-an-irreducible-over-a-nonsplitting-field",
        "cor-schur-index-divides-the-representation-degree",
        "thm-schur-index-equals-division-algebra-index",
        "thm-schur-index-as-minimal-realization-multiplicity",
        "ex-galois-conjugate-characters-of-c3",
        "ex-s3-is-split-over-the-rationals",
        "ex-quaternion-character-has-schur-index-two",
        "ex-trivial-character-has-schur-index-one"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "lem-perron-kernel",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-truncated-perron-kernel",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-perron-formula",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-truncated-perron-formula",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-riemann-von-mangoldt-zero-counting",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-zeta-zero-count-unit-interval",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-local-logarithmic-derivative-zeta",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-logarithmic-derivative-zeta-left-half-plane",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-von-mangoldt-explicit-formula-residues",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-von-mangoldt-explicit-formula-smoothed",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-von-mangoldt-explicit-formula-truncated",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-perron-kernel-at-and-away-from-the-jump",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-perron-formula-for-a-finite-dirichlet-polynomial",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-von-mangoldt-residue-table",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-smoothed-versus-sharp-explicit-formula",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-selecting-an-admissible-contour-height",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-an-unordered-infinite-zero-sum-is-not-a-formula",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-right-continuous-psi-has-the-wrong-perron-endpoint",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-nonzero-number-field-ideal-has-finite-quotient",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-number-field-integral-ideal-factorisation-in-zf",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-principal-ideal-norm-is-absolute-field-norm",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-ideal-norm-is-multiplicative",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-norm-of-a-prime-ideal",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-fundamental-identity-for-primes-in-number-fields",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-ramification-and-residue-degrees-in-towers",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-dedekind-kummer-prime-factorisation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-eisenstein-prime-is-totally-ramified",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-ramified-primes-and-the-number-field-discriminant",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-only-finitely-many-primes-ramify",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-codifferent-is-a-fractional-ideal",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-different-of-a-monogenic-number-field",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-discriminant-is-the-norm-of-the-different",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-prime-support-of-the-different-is-ramification",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-different-exponent-in-tame-and-wild-ramification",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-discriminant-valuation-from-different-exponents",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-prime-factorization-in-quadratic-fields",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-dedekind-kummer-in-a-cubic-field",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-dedekind-kummer-without-the-index-hypothesis",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-eisenstein-total-ramification",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-quadratic-field-codifferent",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-cyclotomic-different-preview",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-tame-different-exponent",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-wild-different-exponent",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-verma-homomorphisms-are-singular-vectors",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-enveloping-algebra-of-the-negative-nilpotent-lie-algebra-is-a-domain",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-nonzero-verma-homomorphism-is-injective",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-every-verma-module-contains-a-simple-verma-submodule",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-verma-homomorphism-spaces-have-dimension-at-most-one",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-simple-root-singular-vector-in-a-verma-module",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-simple-reflection-embedding-of-verma-modules",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-verma-embedding-for-an-arbitrary-positive-root",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-verma-composition-factor-has-the-same-central-character",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-verma-composition-multiplicities-are-finite",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-first-jantzen-filtration-term-is-the-verma-maximal-submodule",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-jantzen-sum-formula-for-a-verma-module",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-strong-linkage-principle-for-verma-modules",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-verma-embedding-implies-strong-linkage",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-bgg-verma-homomorphism-criterion",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-generic-verma-modules-are-simple",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-antidominant-verma-modules-are-simple",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-sl2-verma-embedding-chain",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a2-regular-dominant-verma-embedding-poset",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a2-singular-dot-orbit-collapses",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-equal-central-character-does-not-give-every-verma-embedding-direction",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-nonintegral-reflection-does-not-produce-a-singular-power",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-base-change-of-intertwiner-spaces",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-galois-conjugates-have-equal-scalar-extension-multiplicity",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-scalar-extension-of-an-irreducible-finite-group-representation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-character-field-is-the-stabilizer-fixed-field",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-absolute-irreducibility-via-the-endomorphism-division-algebra",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-schur-index-is-independent-of-the-chosen-splitting-field",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-character-of-an-irreducible-over-a-nonsplitting-field",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-schur-index-divides-the-representation-degree",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-schur-index-equals-division-algebra-index",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-schur-index-as-minimal-realization-multiplicity",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-galois-conjugate-characters-of-c3",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-s3-is-split-over-the-rationals",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-quaternion-character-has-schur-index-two",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-trivial-character-has-schur-index-one",
      "scope": "run",
      "owner": "d"
    }
  ],
  "assigned_items": [
    {
      "id": "lem-perron-kernel",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-truncated-perron-kernel",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-perron-formula",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-truncated-perron-formula",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-riemann-von-mangoldt-zero-counting",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-zeta-zero-count-unit-interval",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-local-logarithmic-derivative-zeta",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-logarithmic-derivative-zeta-left-half-plane",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-von-mangoldt-explicit-formula-residues",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-von-mangoldt-explicit-formula-smoothed",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-von-mangoldt-explicit-formula-truncated",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-perron-kernel-at-and-away-from-the-jump",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-perron-formula-for-a-finite-dirichlet-polynomial",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-von-mangoldt-residue-table",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-smoothed-versus-sharp-explicit-formula",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-selecting-an-admissible-contour-height",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-an-unordered-infinite-zero-sum-is-not-a-formula",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-right-continuous-psi-has-the-wrong-perron-endpoint",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-nonzero-number-field-ideal-has-finite-quotient",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-number-field-integral-ideal-factorisation-in-zf",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-principal-ideal-norm-is-absolute-field-norm",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-ideal-norm-is-multiplicative",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-norm-of-a-prime-ideal",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-fundamental-identity-for-primes-in-number-fields",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-ramification-and-residue-degrees-in-towers",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-dedekind-kummer-prime-factorisation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-eisenstein-prime-is-totally-ramified",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-ramified-primes-and-the-number-field-discriminant",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-only-finitely-many-primes-ramify",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-codifferent-is-a-fractional-ideal",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-different-of-a-monogenic-number-field",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-discriminant-is-the-norm-of-the-different",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-prime-support-of-the-different-is-ramification",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-different-exponent-in-tame-and-wild-ramification",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-discriminant-valuation-from-different-exponents",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-prime-factorization-in-quadratic-fields",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-dedekind-kummer-in-a-cubic-field",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-dedekind-kummer-without-the-index-hypothesis",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-eisenstein-total-ramification",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-quadratic-field-codifferent",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-cyclotomic-different-preview",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-tame-different-exponent",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-wild-different-exponent",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-verma-homomorphisms-are-singular-vectors",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-enveloping-algebra-of-the-negative-nilpotent-lie-algebra-is-a-domain",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-nonzero-verma-homomorphism-is-injective",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-every-verma-module-contains-a-simple-verma-submodule",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-verma-homomorphism-spaces-have-dimension-at-most-one",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-simple-root-singular-vector-in-a-verma-module",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-simple-reflection-embedding-of-verma-modules",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-verma-embedding-for-an-arbitrary-positive-root",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-verma-composition-factor-has-the-same-central-character",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-verma-composition-multiplicities-are-finite",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-first-jantzen-filtration-term-is-the-verma-maximal-submodule",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-jantzen-sum-formula-for-a-verma-module",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-strong-linkage-principle-for-verma-modules",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-verma-embedding-implies-strong-linkage",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-bgg-verma-homomorphism-criterion",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-generic-verma-modules-are-simple",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-antidominant-verma-modules-are-simple",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-sl2-verma-embedding-chain",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a2-regular-dominant-verma-embedding-poset",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a2-singular-dot-orbit-collapses",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-equal-central-character-does-not-give-every-verma-embedding-direction",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-nonintegral-reflection-does-not-produce-a-singular-power",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-base-change-of-intertwiner-spaces",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-galois-conjugates-have-equal-scalar-extension-multiplicity",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-scalar-extension-of-an-irreducible-finite-group-representation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-character-field-is-the-stabilizer-fixed-field",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-absolute-irreducibility-via-the-endomorphism-division-algebra",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-schur-index-is-independent-of-the-chosen-splitting-field",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-character-of-an-irreducible-over-a-nonsplitting-field",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-schur-index-divides-the-representation-degree",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-schur-index-equals-division-algebra-index",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-schur-index-as-minimal-realization-multiplicity",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-galois-conjugate-characters-of-c3",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-s3-is-split-over-the-rationals",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-quaternion-character-has-schur-index-two",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-trivial-character-has-schur-index-one",
      "scope": "run",
      "owner": "d"
    }
  ],
  "fatal_repair_licences": [
    {
      "id": "cor-antidominant-verma-modules-are-simple",
      "model": "gpt-5.6-terra",
      "context_sha256": "315b8790a0972befaa7167a9f8a3c91e0dbf5e55f26e4ba7ba3073b6e0e1622a",
      "item_sha256": "4da1d572ce228cfff42b880ec7126bbcbaec6a68ce0040afe8c3061a39b49e53",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "ex-a2-regular-dominant-verma-embedding-poset",
      "model": "gpt-5.6-terra",
      "context_sha256": "d719c282c906be15f8ef6539d7195e2df32b687d53935e4cdd6f9fedd61d622e",
      "item_sha256": "7d19c04664602e1d681bc5c40535abd5622f7a6a61c42ca08982ac2a9d8511e3",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "ex-cyclotomic-different-preview",
      "model": "gpt-5.6-terra",
      "context_sha256": "a5b89beaf24ea52220287bfe3e731d02baeda309c7354ec1af70fe0dc6baefe0",
      "item_sha256": "920454c20e8e86d54f0558ae482cc9f14a063211683c1a3fa010a6f2e61f627d",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "ex-prime-factorization-in-quadratic-fields",
      "model": "gpt-5.6-terra",
      "context_sha256": "4cb8b255cd325ba218bd73be590fc36c107e14346351fd73aa8cd0c55257c9c3",
      "item_sha256": "9db9dea1f6eb3fc080dc1c0c7cf5b6c1ac395435959c8ec1b8e521fe48c19223",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "ex-quadratic-field-codifferent",
      "model": "gpt-5.6-terra",
      "context_sha256": "edbde2f637e87ead37b438f87f316bebb5a31726bc2feb27f94e465947f16f3c",
      "item_sha256": "818d42a655ff792ca54db4f9560a0585bab1aa26230b0acb34f7192c32f60573",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "ex-selecting-an-admissible-contour-height",
      "model": "gpt-5.6-terra",
      "context_sha256": "f5a24da81f3c160ec7db2e1bfdfe759916527f8cfe743566b7299b7032f5861c",
      "item_sha256": "52cb62f2081fbd25784a0341ac27e6e3e9634b57b1f6c936b47cf2376fc5064b",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "ex-von-mangoldt-residue-table",
      "model": "gpt-5.6-terra",
      "context_sha256": "755e08c34390d2f25a895b040e5b2fc22c9565b09cda3dbe0477e57ca5cb9933",
      "item_sha256": "d30a9cd48dbfab5eccf5b1309e81abb2545e70b7ccf569898fb891cd444862ac",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "ex-wild-different-exponent",
      "model": "gpt-5.6-terra",
      "context_sha256": "81f4bb3b50b84f33e9a1badc0c505b1049f90731cae88f3a3f2e840251461c53",
      "item_sha256": "64503df0015fc0613dacb9219c76f1b2eaa45ad69c65e8b198a139809787bb9c",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one",
      "model": "gpt-5.6-terra",
      "context_sha256": "63e1896e564ec18cc7dfe3df54c5b04dbb513aab968fdb4c6f93cbf6f5db60d7",
      "item_sha256": "0a9e191ac818440fa09db7be9796f4958c9eb82e8e6f790d9cd77ba0c1867fee",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "lem-local-logarithmic-derivative-zeta",
      "model": "gpt-5.6-terra",
      "context_sha256": "1275a0138f9bfa429941c8ffdf99e7ef620f697b0174f2aba41ce01158f10628",
      "item_sha256": "8ad84f1be525505cefa84462912c2f2e2e13bac0203e2161f4d94a65e31a8953",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "lem-logarithmic-derivative-zeta-left-half-plane",
      "model": "gpt-5.6-terra",
      "context_sha256": "014cea0ae1085a6379ca91ce8a68356f02f3673329a44fe831a0a2d11c25884a",
      "item_sha256": "40066af25d512ac231c204682d45382d15de75f70a80d42fd3268167508907ac",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "lem-simple-root-singular-vector-in-a-verma-module",
      "model": "gpt-5.6-terra",
      "context_sha256": "0752e25f698c9a7e64ee48090cff2724aac4876382716ffcc2b6540d3d595677",
      "item_sha256": "495b023e2b52ec4146fbddd0b1cd2fa362bb42d7194c4cf63a6c65140b63b27e",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "lem-von-mangoldt-explicit-formula-residues",
      "model": "gpt-5.6-terra",
      "context_sha256": "b1b121f934a348bf0ec4ba8cb6784bc67853fe58d205cbcada8cc70a9630e617",
      "item_sha256": "8ba90b41eeb4479c2b708d90efff8bde75c0580addb459b98915e86b17c6ed02",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "thm-dedekind-kummer-prime-factorisation",
      "model": "gpt-5.6-terra",
      "context_sha256": "4ec36afa4495f1ff10999f4205e906afa0332fdbb76b11e0893482ed3d230d01",
      "item_sha256": "ddfd57f32082128f9310f903d8c8d3397b24268a9f634a9dad11955dc9a43bc1",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "thm-different-exponent-in-tame-and-wild-ramification",
      "model": "gpt-5.6-terra",
      "context_sha256": "8813b4fe77bbb57d4089dda6bcd9844141645550d2ed9df289ef15f4e5b553af",
      "item_sha256": "ec1b2e03b9c044ae6b71006c7fa98e8c276e2b4ff2d11bcd81617780ddd95481",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "thm-different-of-a-monogenic-number-field",
      "model": "gpt-5.6-terra",
      "context_sha256": "af777d65f7c937f63300a486fb17ebb6cd084cadb65b5492b83a82c7de907389",
      "item_sha256": "ff52968593ab64261310456bc441acc5ee0506f6c7aa9635b754327227b5fac6",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "thm-prime-support-of-the-different-is-ramification",
      "model": "gpt-5.6-terra",
      "context_sha256": "b1d584b03e9811cea0cb58c93af1247b071e07471acf0d3dd173362d2e987472",
      "item_sha256": "663499ccb524a3a8674b81e23e84b7d21561f48347f521d1fc8a57aab77bf4f6",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "thm-riemann-von-mangoldt-zero-counting",
      "model": "gpt-5.6-terra",
      "context_sha256": "f66db44cc89dcdefb1900cb47d63ddcf9496a9380645f3ccf52dccec624f12b9",
      "item_sha256": "247afd8fcbc2ebd4d5870808b5506b602a1d10438af38768b8edac1b21c9693a",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "thm-scalar-extension-of-an-irreducible-finite-group-representation",
      "model": "gpt-5.6-terra",
      "context_sha256": "42b4a6b39413b0ecb9ca9b948e2aa08b63626763465670b2133259f1212954b4",
      "item_sha256": "ee7f2115522fb48c2a6219c9aa7b92ec93733158ee6d4d13b16141f9f0fb0e65",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "thm-schur-index-as-minimal-realization-multiplicity",
      "model": "gpt-5.6-terra",
      "context_sha256": "b0fa297751e9fcfe505af335a8709484e25dc043a15aa108042d825936a29ad2",
      "item_sha256": "66216f04f717a4dc33c97bd40f0b4809c3dc37b92f7ff359885c4abe4e02ce9c",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "thm-verma-homomorphism-spaces-have-dimension-at-most-one",
      "model": "gpt-5.6-terra",
      "context_sha256": "51676abaf6085bb57c229e0c35041771b1c78248a884013bf24651b148f894d7",
      "item_sha256": "ddfc1bbdc877a41202cc07de27b05805ef63cf539c53f16e110d193f1bd1efa3",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    },
    {
      "id": "thm-von-mangoldt-explicit-formula-smoothed",
      "model": "gpt-5.6-terra",
      "context_sha256": "ece6f6161f9151feeed669ee4d8d12488030b8aecda2d466df6a02cb55c7ec7d",
      "item_sha256": "e21253b780e38c832e2f9f29637e5b082d49bc35ca2ba77fc53ea8e5b0d75073",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "d",
      "at": "2026-09-06T10:50:00.000Z"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **d**, run `frontier-32`

You are the group Alpha for batches **7**, **16**, **17**: 4 A/B pair(s), 8 page(s), 97 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-32-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 7 | `perron-inversion-and-the-explicit-formula` | A | number-theory | 348.013 | `primitive-dirichlet-l-functions-and-functional-equations-examples` |
| 7 | `perron-inversion-and-the-explicit-formula-examples` | B | number-theory | 348.014 | `perron-inversion-and-the-explicit-formula` |
| 7 | `prime-ideal-decomposition-ramification-and-the-different` | A | number-theory | 365.913 | `number-fields-rings-of-integers-and-discriminants-examples` |
| 7 | `prime-ideal-decomposition-ramification-and-the-different-examples` | B | number-theory | 365.914 | `prime-ideal-decomposition-ramification-and-the-different` |
| 16 | `homomorphisms-between-verma-modules-and-linkage` | A | lie-theory | 510.005 | `verma-modules-and-shapovalov-forms-examples` |
| 16 | `homomorphisms-between-verma-modules-and-linkage-examples` | B | lie-theory | 510.006 | `homomorphisms-between-verma-modules-and-linkage` |
| 17 | `schur-indices-and-fields-of-definition` | A | representation-theory | 510.035 | `brauer-induction-and-elementary-subgroups-examples` |
| 17 | `schur-indices-and-fields-of-definition-examples` | B | representation-theory | 510.036 | `schur-indices-and-fields-of-definition` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `perron-inversion-and-the-explicit-formula` — Perron Inversion and the Explicit Formula (14 item(s))

- `def-starred-summatory-function` · definition
- `lem-perron-kernel` · lemma
- `lem-truncated-perron-kernel` · lemma
- `thm-perron-formula` · theorem
- `thm-truncated-perron-formula` · theorem
- `def-half-weighted-chebyshev-psi` · definition
- `def-riemann-zeta-zero-counting` · definition
- `thm-riemann-von-mangoldt-zero-counting` · theorem
- `cor-zeta-zero-count-unit-interval` · corollary
- `lem-local-logarithmic-derivative-zeta` · lemma
- `lem-logarithmic-derivative-zeta-left-half-plane` · lemma
- `lem-von-mangoldt-explicit-formula-residues` · lemma
- `thm-von-mangoldt-explicit-formula-smoothed` · theorem
- `thm-von-mangoldt-explicit-formula-truncated` · theorem

### `perron-inversion-and-the-explicit-formula-examples` — Perron Inversion and the Explicit Formula — Examples (7 item(s))

- `ex-perron-kernel-at-and-away-from-the-jump` · example
- `ex-perron-formula-for-a-finite-dirichlet-polynomial` · example
- `ex-von-mangoldt-residue-table` · example
- `ex-smoothed-versus-sharp-explicit-formula` · example
- `ex-selecting-an-admissible-contour-height` · example
- `cex-an-unordered-infinite-zero-sum-is-not-a-formula` · counterexample
- `cex-right-continuous-psi-has-the-wrong-perron-endpoint` · counterexample

### `prime-ideal-decomposition-ramification-and-the-different` — Prime Ideal Decomposition Ramification and the Different (24 item(s))

- `def-absolute-norm-of-an-ideal` · definition
- `lem-nonzero-number-field-ideal-has-finite-quotient` · lemma
- `thm-number-field-integral-ideal-factorisation-in-zf` · theorem
- `thm-principal-ideal-norm-is-absolute-field-norm` · theorem
- `thm-ideal-norm-is-multiplicative` · theorem
- `cor-norm-of-a-prime-ideal` · corollary
- `def-prime-above-and-residue-degree` · definition
- `def-ramification-index` · definition
- `thm-fundamental-identity-for-primes-in-number-fields` · theorem
- `def-split-inert-ramified-and-unramified-prime` · definition
- `thm-ramification-and-residue-degrees-in-towers` · theorem
- `thm-dedekind-kummer-prime-factorisation` · theorem
- `cor-eisenstein-prime-is-totally-ramified` · corollary
- `thm-ramified-primes-and-the-number-field-discriminant` · theorem
- `cor-only-finitely-many-primes-ramify` · corollary
- `def-trace-dual-and-codifferent-of-a-number-field` · definition
- `lem-codifferent-is-a-fractional-ideal` · lemma
- `def-different-of-a-number-field` · definition
- `thm-different-of-a-monogenic-number-field` · theorem
- `thm-discriminant-is-the-norm-of-the-different` · theorem
- `thm-prime-support-of-the-different-is-ramification` · theorem
- `def-tame-and-wild-ramification` · definition
- `thm-different-exponent-in-tame-and-wild-ramification` · theorem
- `cor-discriminant-valuation-from-different-exponents` · corollary

### `prime-ideal-decomposition-ramification-and-the-different-examples` — Prime Ideal Decomposition Ramification and the Different — Examples (8 item(s))

- `ex-prime-factorization-in-quadratic-fields` · example
- `ex-dedekind-kummer-in-a-cubic-field` · example
- `cex-dedekind-kummer-without-the-index-hypothesis` · counterexample
- `ex-eisenstein-total-ramification` · example
- `ex-quadratic-field-codifferent` · example
- `ex-cyclotomic-different-preview` · example
- `ex-tame-different-exponent` · example
- `ex-wild-different-exponent` · example

### `homomorphisms-between-verma-modules-and-linkage` — Homomorphisms Between Verma Modules and Linkage (20 item(s))

- `prop-verma-homomorphisms-are-singular-vectors` · proposition — Verma homomorphisms and singular vectors
- `lem-enveloping-algebra-of-the-negative-nilpotent-lie-algebra-is-a-domain` · lemma — The enveloping algebra of the negative nilpotent Lie algebra is a domain
- `lem-a-nonzero-verma-homomorphism-is-injective` · lemma — A nonzero homomorphism between Verma modules is injective
- `lem-every-verma-module-contains-a-simple-verma-submodule` · lemma — Every Verma module contains a simple Verma submodule
- `lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one` · lemma — Homomorphisms from a simple Verma module have dimension at most one
- `thm-verma-homomorphism-spaces-have-dimension-at-most-one` · theorem — Homomorphism spaces between Verma modules have dimension at most one
- `lem-simple-root-singular-vector-in-a-verma-module` · lemma — The simple-root singular vector in a Verma module
- `prop-simple-reflection-embedding-of-verma-modules` · proposition — Simple-reflection embeddings of Verma modules
- `thm-verma-embedding-for-an-arbitrary-positive-root` · theorem — Verma embedding for an arbitrary positive root
- `def-strong-linkage-order-on-weights` · definition — The strong linkage order on weights
- `lem-a-verma-composition-factor-has-the-same-central-character` · lemma — A Verma composition factor has the same central character
- `prop-verma-composition-multiplicities-are-finite` · proposition — Verma composition multiplicities are finite
- `def-jantzen-deformation-and-filtration-of-a-verma-module` · definition — The Jantzen deformation and filtration of a Verma module
- `lem-first-jantzen-filtration-term-is-the-verma-maximal-submodule` · lemma — The first Jantzen filtration term is the maximal Verma submodule
- `thm-jantzen-sum-formula-for-a-verma-module` · theorem — The Jantzen sum formula for a Verma module
- `thm-strong-linkage-principle-for-verma-modules` · theorem — The strong linkage principle for Verma modules
- `lem-verma-embedding-implies-strong-linkage` · lemma — A Verma embedding implies strong linkage
- `thm-bgg-verma-homomorphism-criterion` · theorem — The BGG criterion for homomorphisms between Verma modules
- `cor-generic-verma-modules-are-simple` · corollary — Generic Verma modules are simple
- `cor-antidominant-verma-modules-are-simple` · corollary — Antidominant regular Verma modules are simple

### `homomorphisms-between-verma-modules-and-linkage-examples` — Homomorphisms Between Verma Modules and Linkage — Examples (5 item(s))

- `ex-sl2-verma-embedding-chain` · example — The sl2 Verma embedding chain
- `ex-a2-regular-dominant-verma-embedding-poset` · example — The A2 regular integral-dominant Verma embedding poset
- `ex-a2-singular-dot-orbit-collapses` · example — A singular A2 dot orbit collapses
- `cex-equal-central-character-does-not-give-every-verma-embedding-direction` · counterexample — Equal central character does not give every Verma embedding direction
- `cex-nonintegral-reflection-does-not-produce-a-singular-power` · counterexample — A nonintegral reflection does not produce a singular power

### `schur-indices-and-fields-of-definition` — Schur Indices and Fields of Definition (15 item(s))

- `def-character-field-and-field-of-definition` · definition
- `def-galois-conjugate-representation` · definition
- `lem-base-change-of-intertwiner-spaces` · lemma
- `lem-galois-conjugates-have-equal-scalar-extension-multiplicity` · lemma
- `thm-scalar-extension-of-an-irreducible-finite-group-representation` · theorem
- `lem-character-field-is-the-stabilizer-fixed-field` · lemma
- `def-endomorphism-division-algebra-of-an-irreducible` · definition
- `thm-absolute-irreducibility-via-the-endomorphism-division-algebra` · theorem
- `def-schur-index-of-an-irreducible-character` · definition
- `lem-schur-index-is-independent-of-the-chosen-splitting-field` · lemma
- `thm-character-of-an-irreducible-over-a-nonsplitting-field` · theorem
- `cor-schur-index-divides-the-representation-degree` · corollary
- `def-index-of-a-central-division-algebra` · definition
- `thm-schur-index-equals-division-algebra-index` · theorem
- `thm-schur-index-as-minimal-realization-multiplicity` · theorem

### `schur-indices-and-fields-of-definition-examples` — Schur Indices and Fields of Definition — Examples (4 item(s))

- `ex-galois-conjugate-characters-of-c3` · example
- `ex-s3-is-split-over-the-rationals` · example
- `ex-quaternion-character-has-schur-index-two` · example
- `ex-trivial-character-has-schur-index-one` · example

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

1 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-3719497e29b7e7a6567f56d2 · `thm-prime-support-of-the-different-is-ramification`** (from group d, would-be-fatal) — The stated iff is false under the page's own convention that a rational prime is ramified if some prime above it has e>1. From p|N(D_K) one obtains that some P over p divides D_K, not that every P over p does. Mixed factorisation occurs: for K=Q(θ), θ a root of x^3-x^2-3x+1 (discriminant 148), modulo 37 the polynomial is (x-4)^2(x-30). Thus 37 ramifies, but the prime attached to x-30 has e=1 and does not divide the different. The correct local condition is that P divides D_K iff P itself ramifies.

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

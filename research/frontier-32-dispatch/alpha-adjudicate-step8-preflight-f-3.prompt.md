# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-32-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-32
role: alpha-adjudicate
label: step8-preflight-f-3

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
  "group": "f",
  "full_evidence": "research/frontier-32-8-preflight-repair-evidence-3-62fc9959a02345adc947e2750e8eaa846c64f6873afec8b546b2c39e5575bbf0.json",
  "full_evidence_sha256": "62fc9959a02345adc947e2750e8eaa846c64f6873afec8b546b2c39e5575bbf0",
  "failures": [
    {
      "id": "risk-report",
      "stage": "8-preflight",
      "why": "ERROR risk-review-missing [lem-local-logarithmic-derivative-zeta]: lem-local-logarithmic-derivative-zeta is high risk and lacks a complete Alpha risk_review",
      "output": "ORDINARY 2 [lem-depth-infinity-when-ideal-acts-surjectively] 2:existence, choice, uniqueness, or well-definedness\nHIGH 7 [lem-regular-element-exists-by-prime-avoidance] 2:5 declared dependencies; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [cor-depth-zero-iff-ideal-contained-in-an-associated-prime] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [thm-depth-zero-associated-prime-criterion] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 7 [lem-maximal-regular-sequence-stops-at-associated-prime] 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [lem-ext-depth-zero-identifies-annihilated-elements] 2:boundary-sensitive language\nORDINARY 2 [lem-ext-depth-shift-across-a-regular-element] 2:boundary-sensitive language\nORDINARY 2 [lem-maximal-regular-sequences-have-common-length-ext] 2:quotient or equivalence-class construction\nMODERATE 4 [cor-depth-as-first-nonzero-ext] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [thm-depth-equals-maximal-regular-sequence-length] no signals\nORDINARY 0 [lem-depth-radical-invariance-via-ext] no signals\nORDINARY 0 [cor-depth-depends-only-on-radical] no signals\nMODERATE 4 [lem-depth-quotient-by-regular-element] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [lem-associated-prime-after-power-regular-quotient] 2:4 declared dependencies; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 6 [lem-depth-bounded-by-associated-prime-quotient-dimension] 2:4 declared dependencies; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nCRITICAL 8 [lem-depth-localisation-inequality] 2:4 declared dependencies; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nMODERATE 4 [thm-radical-localisation-and-regular-quotient-properties-of-depth] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [lem-depth-lemma-lower-bound-middle] no signals\nORDINARY 2 [lem-depth-lemma-lower-bound-left] 2:boundary-sensitive language\nORDINARY 0 [lem-depth-lemma-lower-bound-right] no signals\nORDINARY 2 [thm-depth-lemma] 2:boundary-sensitive language\nORDINARY 0 [cor-depth-lemma-unequal-depth-equalities] no signals\nCRITICAL 9 [lem-koszul-depth-first-nonzero-cohomology] 3:8 declared dependencies; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nORDINARY 0 [cor-depth-bounded-by-number-of-ideal-generators] no signals\nORDINARY 0 [thm-koszul-characterisation-of-depth] no signals\nCRITICAL 8 [lem-depth-at-a-prime-bounded-by-local-dimension] 2:4 declared dependencies; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nORDINARY 0 [cor-depth-of-a-finite-local-module-at-most-its-dimension] no signals\nORDINARY 2 [thm-depth-bounded-by-support-dimension] 2:boundary-sensitive language\nORDINARY 2 [cor-zero-dimensional-local-modules-are-cohen-macaulay] 2:boundary-sensitive language\nORDINARY 2 [lem-regular-quotient-preserves-depth-dimension-gap] 2:quotient or equivalence-class construction\nHIGH 7 [cor-regular-quotient-cohen-macaulay-equivalence] 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-regular-quotients-and-cohen-macaulayness] 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nORDINARY 0 [lem-associated-primes-of-cohen-macaulay-module-have-full-dimension] no signals\nORDINARY 2 [cor-cohen-macaulay-modules-have-no-embedded-associated-primes] 2:induction, recursion, or minimality\nMODERATE 4 [thm-associated-primes-of-cohen-macaulay-modules] 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 6 [lem-cohen-macaulay-parameter-first-element-regular] 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nMODERATE 4 [lem-cohen-macaulay-parameter-sequence-induction] 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 6 [cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module] 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nMODERATE 4 [cor-one-regular-system-of-parameters-implies-cohen-macaulay] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [thm-parameters-and-regular-sequences-in-cohen-macaulay-modules] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [lem-localisation-of-cohen-macaulay-module-depth-dimension-equality] no signals\nORDINARY 0 [cor-cohen-macaulayness-localises] no signals\nORDINARY 2 [thm-localisation-of-cohen-macaulay-modules] 2:boundary-sensitive language\nMODERATE 4 [lem-polynomial-extension-depth-increases-by-one] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [cor-polynomial-extension-preserves-cohen-macaulayness] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [thm-polynomial-extension-of-cohen-macaulay-rings] 2:boundary-sensitive language\nMODERATE 4 [lem-completion-preserves-regular-sequences] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [lem-completion-reflects-depth] 2:4 declared dependencies\nHIGH 5 [cor-completion-preserves-cohen-macaulayness-two-directions] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [thm-completion-preserves-cohen-macaulayness] 3:biconditional / both-direction claim\nORDINARY 2 [lem-flat-local-depth-formula-regular-sequence-split] 2:quotient or equivalence-class construction\nCRITICAL 8 [cor-flat-local-depth-additivity] 2:4 declared dependencies; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 5 [cor-flat-local-cohen-macaulay-fibre-criterion] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [thm-depth-formula-for-flat-local-homomorphisms] 3:biconditional / both-direction claim\nORDINARY 2 [ex-zero-dimensional-rings-cohen-macaulay] 2:boundary-sensitive language\nMODERATE 4 [ex-polynomial-rings-cohen-macaulay] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [ex-non-cohen-macaulay-local-ring] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [ex-cohen-macaulay-ring-with-zero-divisors] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-maximal-cohen-macaulay-module] 2:boundary-sensitive language\nORDINARY 2 [ex-depth-of-a-hypersurface] 2:quotient or equivalence-class construction\nORDINARY 2 [ex-depth-of-a-union-of-planes] 2:quotient or equivalence-class construction\nORDINARY 2 [ex-depth-infinity-zero-module-convention] 2:boundary-sensitive language\nORDINARY 0 [ex-depth-lemma-three-inequalities] no signals\nMODERATE 4 [ex-parameter-sequence-regular-in-a-hypersurface] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [ex-parameter-sequence-fails-in-a-non-cm-ring] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [ex-cohen-macaulay-associated-primes-unmixed] 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-completion-depth-computation] 2:quotient or equivalence-class construction\nHIGH 5 [thm-affine-variety-product-coordinate-ring] 3:7 declared dependencies; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [lem-affine-product-topology-not-product-topology] 2:quotient or equivalence-class construction\nMODERATE 4 [lem-segre-map-well-defined-injective] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [thm-segre-image-rank-one-minors] 2:boundary-sensitive language\nMODERATE 4 [cor-projective-variety-product-exists] 2:4 declared dependencies; 2:boundary-sensitive language\nORDINARY 2 [lem-veronese-map-well-defined-closed-immersion] 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [cor-homogeneous-polynomial-becomes-hyperplane-section] no signals\nMODERATE 4 [lem-plucker-map-well-defined-injective] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [thm-plucker-image-closed] 2:boundary-sensitive language\nORDINARY 0 [lem-grassmannian-standard-affine-charts] no signals\nORDINARY 2 [cor-grassmannian-smooth-irreducible-dimension] 2:boundary-sensitive language\nORDINARY 2 [lem-incidence-locus-is-closed] 2:boundary-sensitive language\nORDINARY 0 [thm-graph-closed-for-classical-variety-morphism] no signals\nORDINARY 2 [lem-diagonal-affine-variety-cut-out-by-coordinate-differences] 2:quotient or equivalence-class construction\nORDINARY 2 [lem-fibre-as-base-change-to-point-classical] 2:quotient or equivalence-class construction\nMODERATE 4 [thm-multihomogeneous-map-to-projective-space] 2:4 declared dependencies; 2:boundary-sensitive language\nORDINARY 0 [cor-segre-veronese-embedding] no signals\nORDINARY 0 [cex-zariski-product-topology-too-coarse] no signals\nORDINARY 2 [cex-tensor-product-of-domains-not-domain] 2:boundary-sensitive language\nORDINARY 0 [lem-intersection-affine-opens-covered-principal-opens] no signals\nMODERATE 4 [thm-gluing-affine-schemes] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [thm-morphisms-into-affine-scheme-global-sections] 2:4 declared dependencies\nORDINARY 0 [lem-morphism-schemes-local-on-source-target] no signals\nORDINARY 0 [lem-open-immersion-monomorphism] no signals\nORDINARY 2 [thm-affine-schemes-quasi-separated] 2:4 declared dependencies\nHIGH 6 [thm-affine-closed-immersions-quotient-rings] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [thm-reduction-universal-property] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [lem-finite-type-local-on-source-and-target] 2:5 declared dependencies\nHIGH 6 [thm-classical-varieties-equivalent-integral-separated-finite-type-schemes] 2:5 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [thm-quasi-coherent-ideal-closed-subscheme-correspondence] 2:quotient or equivalence-class construction\nHIGH 7 [thm-scheme-theoretic-image-quasi-compact-morphism] 2:5 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [ex-scheme-theoretic-image-dense-open-immersion] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cex-closed-subset-does-not-determine-closed-subscheme] 2:quotient or equivalence-class construction\nORDINARY 2 [cex-locally-finite-type-not-finite-type] 2:boundary-sensitive language\nHIGH 5 [cex-finite-type-not-finite-presentation-nonnoetherian-base] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nrisk-report: 2 error(s), 478 item(s) routed",
      "named_ids": [
        "lem-depth-infinity-when-ideal-acts-surjectively",
        "lem-regular-element-exists-by-prime-avoidance",
        "cor-depth-zero-iff-ideal-contained-in-an-associated-prime",
        "thm-depth-zero-associated-prime-criterion",
        "lem-maximal-regular-sequence-stops-at-associated-prime",
        "lem-ext-depth-zero-identifies-annihilated-elements",
        "lem-ext-depth-shift-across-a-regular-element",
        "lem-maximal-regular-sequences-have-common-length-ext",
        "cor-depth-as-first-nonzero-ext",
        "thm-depth-equals-maximal-regular-sequence-length",
        "lem-depth-radical-invariance-via-ext",
        "cor-depth-depends-only-on-radical",
        "lem-depth-quotient-by-regular-element",
        "lem-associated-prime-after-power-regular-quotient",
        "lem-depth-bounded-by-associated-prime-quotient-dimension",
        "lem-depth-localisation-inequality",
        "thm-radical-localisation-and-regular-quotient-properties-of-depth",
        "lem-depth-lemma-lower-bound-middle",
        "lem-depth-lemma-lower-bound-left",
        "lem-depth-lemma-lower-bound-right",
        "thm-depth-lemma",
        "cor-depth-lemma-unequal-depth-equalities",
        "lem-koszul-depth-first-nonzero-cohomology",
        "cor-depth-bounded-by-number-of-ideal-generators",
        "thm-koszul-characterisation-of-depth",
        "lem-depth-at-a-prime-bounded-by-local-dimension",
        "cor-depth-of-a-finite-local-module-at-most-its-dimension",
        "thm-depth-bounded-by-support-dimension",
        "cor-zero-dimensional-local-modules-are-cohen-macaulay",
        "lem-regular-quotient-preserves-depth-dimension-gap",
        "cor-regular-quotient-cohen-macaulay-equivalence",
        "thm-regular-quotients-and-cohen-macaulayness",
        "lem-associated-primes-of-cohen-macaulay-module-have-full-dimension",
        "cor-cohen-macaulay-modules-have-no-embedded-associated-primes",
        "thm-associated-primes-of-cohen-macaulay-modules",
        "lem-cohen-macaulay-parameter-first-element-regular",
        "lem-cohen-macaulay-parameter-sequence-induction",
        "cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module",
        "cor-one-regular-system-of-parameters-implies-cohen-macaulay",
        "thm-parameters-and-regular-sequences-in-cohen-macaulay-modules",
        "lem-localisation-of-cohen-macaulay-module-depth-dimension-equality",
        "cor-cohen-macaulayness-localises",
        "thm-localisation-of-cohen-macaulay-modules",
        "lem-polynomial-extension-depth-increases-by-one",
        "cor-polynomial-extension-preserves-cohen-macaulayness",
        "thm-polynomial-extension-of-cohen-macaulay-rings",
        "lem-completion-preserves-regular-sequences",
        "lem-completion-reflects-depth",
        "cor-completion-preserves-cohen-macaulayness-two-directions",
        "thm-completion-preserves-cohen-macaulayness",
        "lem-flat-local-depth-formula-regular-sequence-split",
        "cor-flat-local-depth-additivity",
        "cor-flat-local-cohen-macaulay-fibre-criterion",
        "thm-depth-formula-for-flat-local-homomorphisms",
        "ex-zero-dimensional-rings-cohen-macaulay",
        "ex-polynomial-rings-cohen-macaulay",
        "ex-non-cohen-macaulay-local-ring",
        "ex-cohen-macaulay-ring-with-zero-divisors",
        "ex-maximal-cohen-macaulay-module",
        "ex-depth-of-a-hypersurface",
        "ex-depth-of-a-union-of-planes",
        "ex-depth-infinity-zero-module-convention",
        "ex-depth-lemma-three-inequalities",
        "ex-parameter-sequence-regular-in-a-hypersurface",
        "ex-parameter-sequence-fails-in-a-non-cm-ring",
        "ex-cohen-macaulay-associated-primes-unmixed",
        "ex-completion-depth-computation",
        "thm-affine-variety-product-coordinate-ring",
        "lem-affine-product-topology-not-product-topology",
        "lem-segre-map-well-defined-injective",
        "thm-segre-image-rank-one-minors",
        "cor-projective-variety-product-exists",
        "lem-veronese-map-well-defined-closed-immersion",
        "cor-homogeneous-polynomial-becomes-hyperplane-section",
        "lem-plucker-map-well-defined-injective",
        "thm-plucker-image-closed",
        "lem-grassmannian-standard-affine-charts",
        "cor-grassmannian-smooth-irreducible-dimension",
        "lem-incidence-locus-is-closed",
        "thm-graph-closed-for-classical-variety-morphism",
        "lem-diagonal-affine-variety-cut-out-by-coordinate-differences",
        "lem-fibre-as-base-change-to-point-classical",
        "thm-multihomogeneous-map-to-projective-space",
        "cor-segre-veronese-embedding",
        "cex-zariski-product-topology-too-coarse",
        "cex-tensor-product-of-domains-not-domain",
        "lem-intersection-affine-opens-covered-principal-opens",
        "thm-gluing-affine-schemes",
        "thm-morphisms-into-affine-scheme-global-sections",
        "lem-morphism-schemes-local-on-source-target",
        "lem-open-immersion-monomorphism",
        "thm-affine-schemes-quasi-separated",
        "thm-affine-closed-immersions-quotient-rings",
        "thm-reduction-universal-property",
        "lem-finite-type-local-on-source-and-target",
        "thm-classical-varieties-equivalent-integral-separated-finite-type-schemes",
        "thm-quasi-coherent-ideal-closed-subscheme-correspondence",
        "thm-scheme-theoretic-image-quasi-compact-morphism",
        "ex-scheme-theoretic-image-dense-open-immersion",
        "cex-closed-subset-does-not-determine-closed-subscheme",
        "cex-locally-finite-type-not-finite-type",
        "cex-finite-type-not-finite-presentation-nonnoetherian-base"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "lem-depth-infinity-when-ideal-acts-surjectively",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-regular-element-exists-by-prime-avoidance",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-depth-zero-iff-ideal-contained-in-an-associated-prime",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-depth-zero-associated-prime-criterion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-maximal-regular-sequence-stops-at-associated-prime",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-ext-depth-zero-identifies-annihilated-elements",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-ext-depth-shift-across-a-regular-element",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-maximal-regular-sequences-have-common-length-ext",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-depth-as-first-nonzero-ext",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-depth-equals-maximal-regular-sequence-length",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-radical-invariance-via-ext",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-depth-depends-only-on-radical",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-quotient-by-regular-element",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-associated-prime-after-power-regular-quotient",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-bounded-by-associated-prime-quotient-dimension",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-localisation-inequality",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-radical-localisation-and-regular-quotient-properties-of-depth",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-lemma-lower-bound-middle",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-lemma-lower-bound-left",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-lemma-lower-bound-right",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-depth-lemma",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-depth-lemma-unequal-depth-equalities",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-koszul-depth-first-nonzero-cohomology",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-depth-bounded-by-number-of-ideal-generators",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-koszul-characterisation-of-depth",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-at-a-prime-bounded-by-local-dimension",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-depth-of-a-finite-local-module-at-most-its-dimension",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-depth-bounded-by-support-dimension",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-zero-dimensional-local-modules-are-cohen-macaulay",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-regular-quotient-preserves-depth-dimension-gap",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-regular-quotient-cohen-macaulay-equivalence",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-regular-quotients-and-cohen-macaulayness",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-associated-primes-of-cohen-macaulay-module-have-full-dimension",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-cohen-macaulay-modules-have-no-embedded-associated-primes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-associated-primes-of-cohen-macaulay-modules",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-cohen-macaulay-parameter-first-element-regular",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-cohen-macaulay-parameter-sequence-induction",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-one-regular-system-of-parameters-implies-cohen-macaulay",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-parameters-and-regular-sequences-in-cohen-macaulay-modules",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-localisation-of-cohen-macaulay-module-depth-dimension-equality",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-cohen-macaulayness-localises",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-localisation-of-cohen-macaulay-modules",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-polynomial-extension-depth-increases-by-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-polynomial-extension-preserves-cohen-macaulayness",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-polynomial-extension-of-cohen-macaulay-rings",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-completion-preserves-regular-sequences",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-completion-reflects-depth",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-completion-preserves-cohen-macaulayness-two-directions",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-completion-preserves-cohen-macaulayness",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-flat-local-depth-formula-regular-sequence-split",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-flat-local-depth-additivity",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-flat-local-cohen-macaulay-fibre-criterion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-depth-formula-for-flat-local-homomorphisms",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-zero-dimensional-rings-cohen-macaulay",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-polynomial-rings-cohen-macaulay",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-non-cohen-macaulay-local-ring",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-cohen-macaulay-ring-with-zero-divisors",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-maximal-cohen-macaulay-module",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-depth-of-a-hypersurface",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-depth-of-a-union-of-planes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-depth-infinity-zero-module-convention",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-depth-lemma-three-inequalities",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-parameter-sequence-regular-in-a-hypersurface",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-parameter-sequence-fails-in-a-non-cm-ring",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-cohen-macaulay-associated-primes-unmixed",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-completion-depth-computation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-affine-variety-product-coordinate-ring",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-affine-product-topology-not-product-topology",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-segre-map-well-defined-injective",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-segre-image-rank-one-minors",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-projective-variety-product-exists",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-veronese-map-well-defined-closed-immersion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-homogeneous-polynomial-becomes-hyperplane-section",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-plucker-map-well-defined-injective",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-plucker-image-closed",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-grassmannian-standard-affine-charts",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-grassmannian-smooth-irreducible-dimension",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-incidence-locus-is-closed",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-graph-closed-for-classical-variety-morphism",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-diagonal-affine-variety-cut-out-by-coordinate-differences",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-fibre-as-base-change-to-point-classical",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-multihomogeneous-map-to-projective-space",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-segre-veronese-embedding",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-zariski-product-topology-too-coarse",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-tensor-product-of-domains-not-domain",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-intersection-affine-opens-covered-principal-opens",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-gluing-affine-schemes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-morphisms-into-affine-scheme-global-sections",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-morphism-schemes-local-on-source-target",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-open-immersion-monomorphism",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-affine-schemes-quasi-separated",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-affine-closed-immersions-quotient-rings",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-reduction-universal-property",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-finite-type-local-on-source-and-target",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-classical-varieties-equivalent-integral-separated-finite-type-schemes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-quasi-coherent-ideal-closed-subscheme-correspondence",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-scheme-theoretic-image-quasi-compact-morphism",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-scheme-theoretic-image-dense-open-immersion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-closed-subset-does-not-determine-closed-subscheme",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-locally-finite-type-not-finite-type",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-finite-type-not-finite-presentation-nonnoetherian-base",
      "scope": "run",
      "owner": "f"
    }
  ],
  "assigned_items": [
    {
      "id": "lem-depth-infinity-when-ideal-acts-surjectively",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-regular-element-exists-by-prime-avoidance",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-depth-zero-iff-ideal-contained-in-an-associated-prime",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-depth-zero-associated-prime-criterion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-maximal-regular-sequence-stops-at-associated-prime",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-ext-depth-zero-identifies-annihilated-elements",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-ext-depth-shift-across-a-regular-element",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-maximal-regular-sequences-have-common-length-ext",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-depth-as-first-nonzero-ext",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-depth-equals-maximal-regular-sequence-length",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-radical-invariance-via-ext",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-depth-depends-only-on-radical",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-quotient-by-regular-element",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-associated-prime-after-power-regular-quotient",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-bounded-by-associated-prime-quotient-dimension",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-localisation-inequality",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-radical-localisation-and-regular-quotient-properties-of-depth",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-lemma-lower-bound-middle",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-lemma-lower-bound-left",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-lemma-lower-bound-right",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-depth-lemma",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-depth-lemma-unequal-depth-equalities",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-koszul-depth-first-nonzero-cohomology",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-depth-bounded-by-number-of-ideal-generators",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-koszul-characterisation-of-depth",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-at-a-prime-bounded-by-local-dimension",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-depth-of-a-finite-local-module-at-most-its-dimension",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-depth-bounded-by-support-dimension",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-zero-dimensional-local-modules-are-cohen-macaulay",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-regular-quotient-preserves-depth-dimension-gap",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-regular-quotient-cohen-macaulay-equivalence",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-regular-quotients-and-cohen-macaulayness",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-associated-primes-of-cohen-macaulay-module-have-full-dimension",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-cohen-macaulay-modules-have-no-embedded-associated-primes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-associated-primes-of-cohen-macaulay-modules",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-cohen-macaulay-parameter-first-element-regular",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-cohen-macaulay-parameter-sequence-induction",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-one-regular-system-of-parameters-implies-cohen-macaulay",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-parameters-and-regular-sequences-in-cohen-macaulay-modules",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-localisation-of-cohen-macaulay-module-depth-dimension-equality",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-cohen-macaulayness-localises",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-localisation-of-cohen-macaulay-modules",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-polynomial-extension-depth-increases-by-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-polynomial-extension-preserves-cohen-macaulayness",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-polynomial-extension-of-cohen-macaulay-rings",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-completion-preserves-regular-sequences",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-completion-reflects-depth",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-completion-preserves-cohen-macaulayness-two-directions",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-completion-preserves-cohen-macaulayness",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-flat-local-depth-formula-regular-sequence-split",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-flat-local-depth-additivity",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-flat-local-cohen-macaulay-fibre-criterion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-depth-formula-for-flat-local-homomorphisms",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-zero-dimensional-rings-cohen-macaulay",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-polynomial-rings-cohen-macaulay",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-non-cohen-macaulay-local-ring",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-cohen-macaulay-ring-with-zero-divisors",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-maximal-cohen-macaulay-module",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-depth-of-a-hypersurface",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-depth-of-a-union-of-planes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-depth-infinity-zero-module-convention",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-depth-lemma-three-inequalities",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-parameter-sequence-regular-in-a-hypersurface",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-parameter-sequence-fails-in-a-non-cm-ring",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-cohen-macaulay-associated-primes-unmixed",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-completion-depth-computation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-affine-variety-product-coordinate-ring",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-affine-product-topology-not-product-topology",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-segre-map-well-defined-injective",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-segre-image-rank-one-minors",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-projective-variety-product-exists",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-veronese-map-well-defined-closed-immersion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-homogeneous-polynomial-becomes-hyperplane-section",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-plucker-map-well-defined-injective",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-plucker-image-closed",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-grassmannian-standard-affine-charts",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-grassmannian-smooth-irreducible-dimension",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-incidence-locus-is-closed",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-graph-closed-for-classical-variety-morphism",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-diagonal-affine-variety-cut-out-by-coordinate-differences",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-fibre-as-base-change-to-point-classical",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-multihomogeneous-map-to-projective-space",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-segre-veronese-embedding",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-zariski-product-topology-too-coarse",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-tensor-product-of-domains-not-domain",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-intersection-affine-opens-covered-principal-opens",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-gluing-affine-schemes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-morphisms-into-affine-scheme-global-sections",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-morphism-schemes-local-on-source-target",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-open-immersion-monomorphism",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-affine-schemes-quasi-separated",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-affine-closed-immersions-quotient-rings",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-reduction-universal-property",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-finite-type-local-on-source-and-target",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-classical-varieties-equivalent-integral-separated-finite-type-schemes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-quasi-coherent-ideal-closed-subscheme-correspondence",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-scheme-theoretic-image-quasi-compact-morphism",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-scheme-theoretic-image-dense-open-immersion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-closed-subset-does-not-determine-closed-subscheme",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-locally-finite-type-not-finite-type",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-finite-type-not-finite-presentation-nonnoetherian-base",
      "scope": "run",
      "owner": "f"
    }
  ],
  "fatal_repair_licences": [
    {
      "id": "cex-finite-type-not-finite-presentation-nonnoetherian-base",
      "model": "gpt-5.6-terra",
      "context_sha256": "c59a769a9a4162ea6f9c9cb4609ead3f189fd94f6ee3b31b46fce907b103d411",
      "item_sha256": "a9c9f37fbc8973de3a270bbe5f4bdfadb44797d5811eaef9b6f3b0bbe86432d3",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "cor-depth-lemma-unequal-depth-equalities",
      "model": "gpt-5.6-terra",
      "context_sha256": "b40c0188dff449f2905725c4af5b59d3e2a0b906abdb76e36a3a8f43df560edb",
      "item_sha256": "87e3f139ad811da9a454245875dda0bdcb8f497b4d03227a3d398500e378027b",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "cor-flat-local-depth-additivity",
      "model": "gpt-5.6-terra",
      "context_sha256": "14c27731b6dd2283285e3a6ecb622c3c46108d73d10a8ab9d6e8d4dc43422751",
      "item_sha256": "e641344689a9a0348c1592641de6c65ea3926504b9817c835477360f6b28b748",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "cor-grassmannian-smooth-irreducible-dimension",
      "model": "gpt-5.6-terra",
      "context_sha256": "9e5268ff6185517b3b99d4e01c6baa1083141dd9bc3c605760d0338d2c674156",
      "item_sha256": "2b2a7d113f86fbd9c0e4064bc352cc990b9c10c75ce94be2b577856b8b6afcc6",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "cor-homogeneous-polynomial-becomes-hyperplane-section",
      "model": "gpt-5.6-terra",
      "context_sha256": "0d6610912bee4d46865802f5e06dc68f54c5d79c5b94f9e6b3e4beb0e8729d7b",
      "item_sha256": "e3cd60dc960d540c962bdf2e6a44ba7bfa2ca7215d54c886bfd4aca65d6044fd",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "cor-one-regular-system-of-parameters-implies-cohen-macaulay",
      "model": "gpt-5.6-terra",
      "context_sha256": "f4825602cff5869bbba1218e84e5f5cfdefdba02d6bd571b2fb524f7cfbd89fe",
      "item_sha256": "926d1a557be734800e6438f5a67370110f84c8793a05b19b0158e8cc9463b7de",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "cor-polynomial-extension-preserves-cohen-macaulayness",
      "model": "gpt-5.6-terra",
      "context_sha256": "a9c6c57b1625f0d24493c4488d5a60aedd2f949ff029d377a3c1921239879615",
      "item_sha256": "2fd5e489b8f0e83ddf0310218f4620bda1ea84c2fb841d44c117b30cf42ff7e2",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "cor-projective-variety-product-exists",
      "model": "gpt-5.6-terra",
      "context_sha256": "955605e7a1ab712cf20e24cab1b92e994cda823978b413db69d3d81187e42f21",
      "item_sha256": "717ed92fef95075784b2391e6d0ad7a790e4340e3dc8724d5d9a55286f23aa37",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "cor-segre-veronese-embedding",
      "model": "gpt-5.6-terra",
      "context_sha256": "4ecadfcb7f3d294e560b635ad0e9971367abce98a7a6123c088a95ece2d79b4c",
      "item_sha256": "12190afb81551facf68db15241cd3b55e8e96741af38d0415230983d1f2955da",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "ex-cohen-macaulay-ring-with-zero-divisors",
      "model": "gpt-5.6-terra",
      "context_sha256": "ac3187191b3d6dbd2b5fc9aab384842cd7f29e5919373754ee61b26693ed0189",
      "item_sha256": "88366b5ebebfbf865b02e91e1c9c013f2a6cc0df87573a70fc733198c1e674b4",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "ex-depth-infinity-zero-module-convention",
      "model": "gpt-5.6-terra",
      "context_sha256": "e010d942d74f2417b4aa81b2b1406f0bc8c3710e4496c7e53fb703504f708854",
      "item_sha256": "6f4d765edb809a7bcd015676b5386e2cfb718e53ce0ac39ffe831bc812206dd0",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "ex-non-cohen-macaulay-local-ring",
      "model": "gpt-5.6-terra",
      "context_sha256": "37b43b9b3d22e27375d4422966af1ab49b14dc94b552b1a2606e232e499ad3bf",
      "item_sha256": "fd965d7218ff27da3be785c61b2501e70236d6794a8997a736732f9912686222",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "ex-parameter-sequence-regular-in-a-hypersurface",
      "model": "gpt-5.6-terra",
      "context_sha256": "ae95af83b3fc9b49667853984dd74ecb1f16c9a09cc5c58b0f160c93d63abcf5",
      "item_sha256": "2e753ce7f70986e10d1107fd7eeb03c174420ac67efdfd63aac0a390c5b3f8e8",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "ex-polynomial-rings-cohen-macaulay",
      "model": "gpt-5.6-terra",
      "context_sha256": "55467ca082d059a234f3146d147e9d38cd66d2f383f2f94d9206b8b14a2b01fd",
      "item_sha256": "9232e52f9feb76dda59fd638ded10b48af6e38079a127cc5e360495cb76ac27f",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "lem-cohen-macaulay-parameter-first-element-regular",
      "model": "gpt-5.6-terra",
      "context_sha256": "567c2e4fa2b1a5853a183d877b9a47becc15e29e7c6f84a7a19d45a0f21d8b95",
      "item_sha256": "f9fcb0c3f00f994576417921da6c60e526eaef5f7145632db219e083a5209d23",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "lem-depth-at-a-prime-bounded-by-local-dimension",
      "model": "gpt-5.6-terra",
      "context_sha256": "43296ace3a914cf9beddf4277d6195e7381a60facb67145910a906d98e9a1cbf",
      "item_sha256": "2b95f973100a9783dd759b3ffac98d23dd039b1638681508176dd5c4fe2619fb",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "lem-depth-infinity-when-ideal-acts-surjectively",
      "model": "gpt-5.6-terra",
      "context_sha256": "a672e4862e114f31666ae544dfd9c6008e8bac1f66fefa3c1f137c8226c70522",
      "item_sha256": "6a87546afb9034bc28895acb9b332c33afb6bf2e36b8efe136be47a120c86af9",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "lem-depth-lemma-lower-bound-left",
      "model": "gpt-5.6-terra",
      "context_sha256": "38735ab82055c7942f8abe5843fb725cb4d2fcf9d28ca0f7251f8169534d06e8",
      "item_sha256": "7b59c0a1fd6703f6a0381a1d980d51ed4e48a73e4a945841271db254010460c1",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "lem-depth-lemma-lower-bound-middle",
      "model": "gpt-5.6-terra",
      "context_sha256": "8e750ce4496a742963cc80037f3450d9d5525e1a4f2f60c792c93afe15e8712b",
      "item_sha256": "87335fda35503b513b84d467d604f02e41788f87f9109dca20ee160877ec8536",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "lem-depth-lemma-lower-bound-right",
      "model": "gpt-5.6-terra",
      "context_sha256": "7c9203c49120f1b755f8169379c8e7055be19a814a2c4cb5ff34184db1fe66e3",
      "item_sha256": "ab1d94a88710daf31f1fa82c88de24d180b94345d29cb86d89552dda7a201972",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "lem-fibre-as-base-change-to-point-classical",
      "model": "gpt-5.6-terra",
      "context_sha256": "d2a3d62b6bc9eb756c55648f4c4737096fca7a890fd7d006c95965f5ebe0dbc1",
      "item_sha256": "ef2d22fb8371d30066b30d6eb8d947dc51e6c9857092644a8373b60a769cc627",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "lem-finite-type-local-on-source-and-target",
      "model": "gpt-5.6-terra",
      "context_sha256": "5f6bce4385d9f28d655211bffabd8ea14894b08baa2b8be1b96f4ec117741054",
      "item_sha256": "1dbdc8add175e8c065bc01e12508ac05789dbac7a0ac22ecb92bfbb1f7fdb28a",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "lem-incidence-locus-is-closed",
      "model": "gpt-5.6-terra",
      "context_sha256": "4ad1570c51fde41c03d99f2bd41b9f56f87d538a9422ce2057ac0dd4db831bf3",
      "item_sha256": "d3aef249955f1b4319ae567a7204f00351ba70dba2850f745da7eb726bc41a22",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "lem-koszul-depth-first-nonzero-cohomology",
      "model": "gpt-5.6-terra",
      "context_sha256": "38f62578a47685008ee606b9bfb07e7bea1e6229a63c6ed18bdd72d56f2afc11",
      "item_sha256": "40ca80a98761149e0ef3aa9d15c751516209a5890710df0ea776b433b4d19b2c",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "lem-polynomial-extension-depth-increases-by-one",
      "model": "gpt-5.6-terra",
      "context_sha256": "ca85c00fb0d3e8aa59e9a0492fa74a79d555eeb673d1110091bff5ca97f81176",
      "item_sha256": "490b1854631ce56dc64f6dea8b9163d687f7398e554d3fcbb3c3c5c663f22685",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "lem-regular-quotient-preserves-depth-dimension-gap",
      "model": "gpt-5.6-terra",
      "context_sha256": "70b1bd7c4045305c8bc9e59822a7b6ae6d59ccc1377a153baf330f8b42f73423",
      "item_sha256": "ff5f255957f9aa1368c41759e71c5f2fcf92e46c34757681909584cce67f007f",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "lem-segre-map-well-defined-injective",
      "model": "gpt-5.6-terra",
      "context_sha256": "56a7c41a211ff5e2ba97e7ac87fc6d22da27e1304c36cbb8bb914a568106c2a3",
      "item_sha256": "a684cd0592d1ca1e9bb056b08ace578d76791fef59e3454f6491fd3dfc8e6e8b",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "thm-affine-closed-immersions-quotient-rings",
      "model": "gpt-5.6-terra",
      "context_sha256": "886cd73aab34e47fc2877cf70d1914f5628f59506a10c533435034fb5b50876f",
      "item_sha256": "723bf9639f18934d37bb49bb5eb3d2a0baf30f734d2634ff5b1e4f3009090330",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "thm-affine-variety-product-coordinate-ring",
      "model": "gpt-5.6-terra",
      "context_sha256": "054cd956852e77e8b5c5fa6171530fabb53420c8a15a029f98d250fd4ed0de91",
      "item_sha256": "980c4f69d888c69cb628ea90fc8ac441f72228f6915bf73b9d6befc663da5750",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "thm-classical-varieties-equivalent-integral-separated-finite-type-schemes",
      "model": "gpt-5.6-terra",
      "context_sha256": "a67e11c8151c0ac3854669231c447b48fb2d11f1241cc2616c069ab85f7a87a3",
      "item_sha256": "05bf9e3abb9613db5a5d013aea322086d3a25805b86f88a741c48cd0609d7fa6",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "thm-depth-equals-maximal-regular-sequence-length",
      "model": "gpt-5.6-terra",
      "context_sha256": "b072fbe1ba538805e6f649be0f3905e60de6dd28505bf2ab1c6d3d7d7a3265d0",
      "item_sha256": "2e6af64f1fb9ab11d55da99f1eddeb0a22dc8e43e52c8f0c4339e1e62c0d268b",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "thm-gluing-affine-schemes",
      "model": "gpt-5.6-terra",
      "context_sha256": "eaffabc61657825ac42a99ab2dd58903ffec485c6fb090be92f9abd87e44acb9",
      "item_sha256": "768f3082be7235e88c1e4b7c3a6220d279cb86b4132505c9eca7ff6b4faa3c21",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "thm-graph-closed-for-classical-variety-morphism",
      "model": "gpt-5.6-terra",
      "context_sha256": "e263b5124920308a49619d065c6e068bfa65c1a1efbceedf8d05867399c0e501",
      "item_sha256": "096a744a4c49947007143e0f99a9ceff40c893d0c48e5d7a1a0a11683807c3cd",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "thm-multihomogeneous-map-to-projective-space",
      "model": "gpt-5.6-terra",
      "context_sha256": "38abbc46ad91b50106541a80b0aed4d0ea5faead03122d84c9d01e3eefcf1bd6",
      "item_sha256": "7d3e1fd4458c7ba2ea7d87a03bf76c8de002d1f5e3ea3c765b77285aef3f4f45",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "thm-plucker-image-closed",
      "model": "gpt-5.6-terra",
      "context_sha256": "37f7275e1efaa64124c3c67966abddd0bb9edda2c51339335c292bde7d24a7f3",
      "item_sha256": "d71a7c70dcec3c6816e13fea9e8c29ddfe7d9a74a82ffd5b61d5ad424ed9df32",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    },
    {
      "id": "thm-segre-image-rank-one-minors",
      "model": "gpt-5.6-terra",
      "context_sha256": "4692d3d921be6b8b4c5d05b2dc2d31a41bb893781ee0e0ee1ff39d398673e351",
      "item_sha256": "310f4adc977111b5623bdda40693eb1052b5dab0e091e2d3d73e6744f3c29eee",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "f",
      "at": "2026-09-06T10:37:19.147Z"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **f**, run `frontier-32`

You are the group Alpha for batches **9**, **11**, **12**: 4 A/B pair(s), 8 page(s), 183 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-32-alpha-f-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 9 | `depth-and-cohen-macaulay-modules` | A | commutative-algebra | 365.903 | `koszul-complexes-and-regular-sequences-examples`, `ext-and-balanced-resolutions` |
| 9 | `depth-and-cohen-macaulay-modules-examples` | B | commutative-algebra | 365.904 | `depth-and-cohen-macaulay-modules` |
| 11 | `products-segre-and-veronese-embeddings-and-grassmannians` | A | algebraic-geometry | 366.047 | `projective-algebraic-sets-projective-morphisms-and-cones-examples`, `exterior-powers-orientation-and-hodge-duality` |
| 11 | `products-segre-and-veronese-embeddings-and-grassmannians-examples` | B | algebraic-geometry | 366.048 | `products-segre-and-veronese-embeddings-and-grassmannians` |
| 12 | `presheaves-sheaves-stalks-and-sheafification` | A | scheme-theory | 366.057 | `plane-curves-local-intersection-multiplicity-and-bezout-examples` |
| 12 | `presheaves-sheaves-stalks-and-sheafification-examples` | B | scheme-theory | 366.058 | `presheaves-sheaves-stalks-and-sheafification` |
| 12 | `schemes-subschemes-and-morphisms-locally-of-finite-type` | A | scheme-theory | 366.063 | `affine-schemes-and-the-structure-sheaf-examples`, `holomorphic-inverse-and-weierstrass-preparation` |
| 12 | `schemes-subschemes-and-morphisms-locally-of-finite-type-examples` | B | scheme-theory | 366.064 | `schemes-subschemes-and-morphisms-locally-of-finite-type` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `depth-and-cohen-macaulay-modules` — Depth and Cohen Macaulay Modules (57 item(s))

- `def-depth-with-respect-to-an-ideal` · definition — Depth with respect to an ideal
- `lem-depth-infinity-when-ideal-acts-surjectively` · lemma — Depth is infinite when the ideal acts surjectively
- `lem-regular-element-exists-by-prime-avoidance` · lemma — A regular element exists by prime avoidance
- `cor-depth-zero-iff-ideal-contained-in-an-associated-prime` · corollary — Depth zero and associated primes
- `thm-depth-zero-associated-prime-criterion` · theorem — The local depth-zero associated-prime criterion
- `lem-maximal-regular-sequence-stops-at-associated-prime` · lemma — A maximal regular sequence stops at an associated prime
- `lem-ext-depth-zero-identifies-annihilated-elements` · lemma — Ext degree zero identifies ideal-annihilated elements
- `lem-ext-depth-shift-across-a-regular-element` · lemma — The first nonzero Ext shifts across a regular element
- `lem-maximal-regular-sequences-have-common-length-ext` · lemma — Maximal regular sequences have a common Ext length
- `cor-depth-as-first-nonzero-ext` · corollary — Depth as the first nonzero Ext degree
- `thm-depth-equals-maximal-regular-sequence-length` · theorem — Depth equals the maximal regular-sequence length
- `lem-depth-radical-invariance-via-ext` · lemma — Radical invariance of first nonzero Ext
- `cor-depth-depends-only-on-radical` · corollary — Depth depends only on the radical of the ideal
- `lem-depth-quotient-by-regular-element` · lemma — Depth drops by one after quotienting by a regular element
- `lem-associated-prime-after-power-regular-quotient` · lemma — A prime minimal over an associated prime plus one element becomes associated after a power quotient
- `lem-depth-bounded-by-associated-prime-quotient-dimension` · lemma — Depth is bounded by the quotient dimension at every associated prime
- `lem-depth-localisation-inequality` · lemma — Localization gives the stated depth inequality
- `thm-radical-localisation-and-regular-quotient-properties-of-depth` · theorem — Radical, localization, and regular-quotient properties of depth
- `lem-depth-lemma-lower-bound-middle` · lemma — The middle lower bound in the Depth Lemma
- `lem-depth-lemma-lower-bound-left` · lemma — The left lower bound in the Depth Lemma
- `lem-depth-lemma-lower-bound-right` · lemma — The right lower bound in the Depth Lemma
- `thm-depth-lemma` · theorem — The three Depth Lemma inequalities
- `cor-depth-lemma-unequal-depth-equalities` · corollary — Unequal-depth equalities in a short exact sequence
- `lem-koszul-depth-first-nonzero-cohomology` · lemma — Depth from first nonzero Koszul cohomology
- `cor-depth-bounded-by-number-of-ideal-generators` · corollary — Depth is bounded by the number of ideal generators
- `thm-koszul-characterisation-of-depth` · theorem — The Koszul characterization of depth
- `lem-depth-at-a-prime-bounded-by-local-dimension` · lemma — Depth at a prime is bounded by local support dimension
- `cor-depth-of-a-finite-local-module-at-most-its-dimension` · corollary — A finite local module has depth at most its dimension
- `thm-depth-bounded-by-support-dimension` · theorem — Depth is bounded by support dimension
- `def-cohen-macaulay-local-module-and-ring` · definition — Cohen--Macaulay local modules and rings
- `def-maximal-and-global-cohen-macaulay-modules` · definition — Maximal and global Cohen--Macaulay modules
- `cor-zero-dimensional-local-modules-are-cohen-macaulay` · corollary — Zero-dimensional finite local modules are Cohen--Macaulay
- `lem-regular-quotient-preserves-depth-dimension-gap` · lemma — A regular parameter quotient preserves the depth--dimension gap
- `cor-regular-quotient-cohen-macaulay-equivalence` · corollary — Cohen--Macaulayness and a regular parameter quotient
- `thm-regular-quotients-and-cohen-macaulayness` · theorem — Regular quotients and Cohen--Macaulayness
- `lem-associated-primes-of-cohen-macaulay-module-have-full-dimension` · lemma — Associated primes of a Cohen--Macaulay module have full dimension
- `cor-cohen-macaulay-modules-have-no-embedded-associated-primes` · corollary — Cohen--Macaulay modules have no embedded associated primes
- `thm-associated-primes-of-cohen-macaulay-modules` · theorem — Associated primes of Cohen--Macaulay modules
- `lem-cohen-macaulay-parameter-first-element-regular` · lemma — The first parameter of a Cohen--Macaulay module is regular
- `lem-cohen-macaulay-parameter-sequence-induction` · lemma — Induction along a Cohen--Macaulay parameter sequence
- `cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module` · corollary — Every system of parameters is regular in a Cohen--Macaulay module
- `cor-one-regular-system-of-parameters-implies-cohen-macaulay` · corollary — One regular system of parameters implies Cohen--Macaulayness
- `thm-parameters-and-regular-sequences-in-cohen-macaulay-modules` · theorem — Parameters and regular sequences in Cohen--Macaulay modules
- `lem-localisation-of-cohen-macaulay-module-depth-dimension-equality` · lemma — Localization preserves the Cohen--Macaulay depth--dimension equality
- `cor-cohen-macaulayness-localises` · corollary — Cohen--Macaulayness localizes
- `thm-localisation-of-cohen-macaulay-modules` · theorem — Localization of Cohen--Macaulay modules
- `lem-polynomial-extension-depth-increases-by-one` · lemma — A polynomial variable increases depth by one
- `cor-polynomial-extension-preserves-cohen-macaulayness` · corollary — Polynomial extension preserves Cohen--Macaulayness
- `thm-polynomial-extension-of-cohen-macaulay-rings` · theorem — Polynomial extensions of Cohen--Macaulay rings
- `lem-completion-preserves-regular-sequences` · lemma — Completion preserves regular sequences
- `lem-completion-reflects-depth` · lemma — Completion reflects depth
- `cor-completion-preserves-cohen-macaulayness-two-directions` · corollary — Completion preserves Cohen--Macaulayness in both directions
- `thm-completion-preserves-cohen-macaulayness` · theorem — Completion preserves Cohen--Macaulayness
- `lem-flat-local-depth-formula-regular-sequence-split` · lemma — A flat local map splits regular sequences into base and fibre parts
- `cor-flat-local-depth-additivity` · corollary — Depth is additive for a flat local homomorphism
- `cor-flat-local-cohen-macaulay-fibre-criterion` · corollary — The flat-local Cohen--Macaulay fibre criterion
- `thm-depth-formula-for-flat-local-homomorphisms` · theorem — The depth formula for flat local homomorphisms

### `depth-and-cohen-macaulay-modules-examples` — Depth and Cohen Macaulay Modules — Examples (13 item(s))

- `ex-zero-dimensional-rings-cohen-macaulay` · example — A zero-dimensional local ring is Cohen--Macaulay
- `ex-polynomial-rings-cohen-macaulay` · example — Polynomial rings are Cohen--Macaulay
- `ex-non-cohen-macaulay-local-ring` · example — A non-Cohen--Macaulay local quotient
- `ex-cohen-macaulay-ring-with-zero-divisors` · example — A Cohen--Macaulay ring with zero divisors
- `ex-maximal-cohen-macaulay-module` · example — A nonfree maximal Cohen--Macaulay module
- `ex-depth-of-a-hypersurface` · example — Depth of a hypersurface quotient
- `ex-depth-of-a-union-of-planes` · example — Depth of a union of planes
- `ex-depth-infinity-zero-module-convention` · example — The zero-module and surjective-ideal depth conventions
- `ex-depth-lemma-three-inequalities` · example — Three sharp Depth Lemma inequalities
- `ex-parameter-sequence-regular-in-a-hypersurface` · example — A parameter sequence regular in a hypersurface
- `ex-parameter-sequence-fails-in-a-non-cm-ring` · example — A parameter sequence that fails in a non-Cohen--Macaulay ring
- `ex-cohen-macaulay-associated-primes-unmixed` · example — Associated primes are unmixed in a Cohen--Macaulay example
- `ex-completion-depth-computation` · example — A depth computation before and after completion

### `products-segre-and-veronese-embeddings-and-grassmannians` — Products Segre and Veronese Embeddings and Grassmannians (25 item(s))

- `def-product-varieties-universal-property` · definition — Products of classical algebraic sets and their universal property
- `thm-affine-variety-product-coordinate-ring` · theorem — The product of affine varieties has coordinate ring k[X] tensor_k k[Y]
- `lem-affine-product-topology-not-product-topology` · lemma — The Zariski topology on an affine product is generally not the product topology
- `def-segre-map` · definition — The Segre map from a product of projective spaces
- `lem-segre-map-well-defined-injective` · lemma — The Segre map is well defined and injective
- `thm-segre-image-rank-one-minors` · theorem — The Segre image is the projective rank-one locus cut out by 2 by 2 minors
- `cor-projective-variety-product-exists` · corollary — Products of nonempty projective varieties exist as projective varieties
- `def-veronese-map` · definition — The degree-d Veronese map
- `lem-veronese-map-well-defined-closed-immersion` · lemma — The Veronese map is a well-defined closed immersion
- `cor-homogeneous-polynomial-becomes-hyperplane-section` · corollary — A degree-d homogeneous equation becomes a hyperplane section under Veronese
- `def-grassmannian-subspaces` · definition — The Grassmannian of r-dimensional subspaces of a finite-dimensional vector space
- `def-plucker-coordinates` · definition — Plucker coordinates and the Plucker map
- `lem-plucker-map-well-defined-injective` · lemma — The Plucker map is well defined and injective
- `thm-plucker-image-closed` · theorem — The Plucker image is a closed projective subvariety
- `lem-grassmannian-standard-affine-charts` · lemma — Standard affine charts on the Grassmannian
- `cor-grassmannian-smooth-irreducible-dimension` · corollary — The Grassmannian is smooth, irreducible, and has dimension r(n-r)
- `def-incidence-correspondence-varieties` · definition — Incidence correspondence varieties
- `lem-incidence-locus-is-closed` · lemma — The standard incidence locus is closed
- `thm-graph-closed-for-classical-variety-morphism` · theorem — Graphs of morphisms to a projective classical variety are closed
- `lem-diagonal-affine-variety-cut-out-by-coordinate-differences` · lemma — The affine diagonal is cut out by coordinate differences
- `def-base-change-classical-varieties` · definition — Base change of classical varieties when the pullback exists
- `lem-fibre-as-base-change-to-point-classical` · lemma — A classical fibre is base change to a point
- `thm-multihomogeneous-map-to-projective-space` · theorem — Fixed-multidegree forms define maps from products to projective space
- `cor-segre-veronese-embedding` · corollary — The Segre-Veronese map is a closed embedding
- `rem-products-need-scheme-fibre-products` · remark — Why scheme fibre products are needed beyond the classical setting

### `products-segre-and-veronese-embeddings-and-grassmannians-examples` — Products Segre and Veronese Embeddings and Grassmannians — Examples (8 item(s))

- `ex-segre-p1-times-p1-quadric` · example — The Segre image of P1 times P1 is a quadric surface
- `ex-quadratic-veronese-conic` · example — The quadratic Veronese image of P1 is a plane conic
- `ex-grassmannian-lines-in-projective-three-space` · example — Lines in P3 and the Klein quadric Gr(2,4)
- `ex-grassmannian-boundary-r-zero-n` · example — The boundary Grassmannians Gr(0,V) and Gr(dim V,V)
- `cex-zariski-product-topology-too-coarse` · counterexample — The product of Zariski topologies is too coarse on A1 times A1
- `ex-incidence-point-hyperplane` · example — The incidence variety of a point and a hyperplane
- `cex-tensor-product-of-domains-not-domain` · counterexample — Tensor products of domains need not be domains over a nonclosed field
- `ex-segre-veronese-bidegree-two-three` · example — A bidegree (2,3) Segre-Veronese embedding

### `presheaves-sheaves-stalks-and-sheafification` — Presheaves Sheaves Stalks and Sheafification (29 item(s))

- `def-open-set-category-topological-space` · definition — The category of open subsets of a topological space
- `def-presheaf-on-topological-space` · definition — A presheaf on a topological space
- `def-section-restriction-and-global-section` · definition — Sections, restrictions, and global sections of a presheaf
- `def-morphism-of-presheaves` · definition — Morphisms of presheaves
- `def-separated-presheaf` · definition — Separated presheaves
- `def-sheaf-on-topological-space` · definition — A sheaf on a topological space
- `lem-sheaf-section-over-empty-set-terminal` · lemma — A set-valued sheaf has a unique section over the empty open set
- `thm-sheaf-equalizer-condition` · theorem — The sheaf axiom is the equalizer condition on a cover
- `lem-sheaf-condition-check-on-basis` · lemma — The sheaf condition can be checked on a basis with basis-refinable intersections
- `def-presheaf-of-groups-rings-modules` · definition — Presheaves and sheaves of groups, rings, and modules
- `lem-forgetful-sheaf-compatibility` · lemma — Sheafhood of algebraic-structure valued presheaves is detected on underlying sets
- `def-stalk-of-presheaf` · definition — The stalk of a presheaf at a point
- `lem-germ-equivalence-relation` · lemma — Equality on a smaller neighbourhood defines the germ equivalence relation
- `def-germ-of-section` · definition — Germs of sections
- `lem-section-zero-if-all-germs-zero` · lemma — A section of a sheaf of groups is zero exactly when all of its germs are zero
- `lem-morphisms-of-sheaves-determined-by-stalks` · lemma — Morphisms of sheaves are determined by their maps on stalks
- `thm-sheaf-morphism-isomorphism-stalkwise` · theorem — A morphism of sheaves is an isomorphism exactly when it is an isomorphism on every stalk
- `def-etale-space-of-sheaf-of-sets` · definition — The etale space of a sheaf of sets
- `thm-sheaves-as-local-homeomorphisms` · theorem — Sheaves of sets are equivalent to local homeomorphisms over the base space
- `def-presheaf-plus-construction` · definition — The plus construction for a presheaf
- `lem-first-plus-construction-is-separated` · lemma — The first plus construction is separated and preserves stalks
- `lem-second-plus-construction-is-sheaf` · lemma — The second plus construction is a sheaf
- `def-sheafification` · definition — Sheafification of a presheaf
- `thm-sheafification-universal-property` · theorem — Sheafification is left adjoint to the inclusion of sheaves into presheaves
- `thm-sheafification-preserves-stalks` · theorem — Sheafification preserves stalks
- `cor-sheafification-idempotent` · corollary — Sheafification is idempotent
- `def-subsheaf` · definition — Subsheaves
- `lem-image-sheaf-is-sheafification-presheaf-image` · lemma — The image sheaf is the sheafification of the presheaf image
- `rem-sections-not-determined-by-single-stalk` · remark — A single stalk does not determine a global section

### `presheaves-sheaves-stalks-and-sheafification-examples` — Presheaves Sheaves Stalks and Sheafification — Examples (9 item(s))

- `ex-sheaf-continuous-real-functions` · example — Continuous real-valued functions form a sheaf
- `ex-sheaf-locally-constant-functions` · example — Locally constant functions form a sheaf and have constant stalks
- `cex-presheaf-bounded-continuous-functions-not-sheaf` · counterexample — Bounded continuous functions need not form a sheaf
- `cex-constant-presheaf-not-sheaf-disconnected-open` · counterexample — The constant presheaf need not be a sheaf on a disconnected open set
- `ex-skyscraper-set-sheaf-stalks` · example — A set-valued skyscraper sheaf and its stalks
- `ex-extension-by-empty-outside-open` · example — Sections on an open subset extended by the empty set outside it
- `cex-objectwise-image-not-sheaf` · counterexample — The objectwise image of a sheaf morphism need not be a sheaf
- `ex-germs-of-continuous-functions` · example — Distinct continuous functions can share one germ, but equal germs everywhere force equality
- `ex-empty-space-unique-sheaf-sections` · example — The empty space has a unique sheaf section over the empty open set

### `schemes-subschemes-and-morphisms-locally-of-finite-type` — Schemes Subschemes and Morphisms Locally of Finite Type (33 item(s))

- `def-classical-algebraic-prevariety-regular-maps-and-varieties` · definition — Classical algebraic prevarieties, regular maps, and varieties
- `def-scheme` · definition — Schemes as affine-locally locally ringed spaces
- `def-affine-open-subscheme` · definition — Affine open subschemes
- `lem-intersection-affine-opens-covered-principal-opens` · lemma — Intersections of affine opens admit principal affine covers
- `thm-gluing-affine-schemes` · theorem — Gluing affine schemes along compatible open isomorphisms
- `def-morphism-of-schemes` · definition — Morphisms of schemes
- `thm-morphisms-into-affine-scheme-global-sections` · theorem — Morphisms to an affine scheme and global sections
- `lem-morphism-schemes-local-on-source-target` · lemma — Morphisms of schemes are local on compatible open covers
- `def-scheme-over-base` · definition — Schemes and morphisms over a base scheme
- `def-open-immersion-schemes` · definition — Open immersions of schemes
- `lem-open-immersion-monomorphism` · lemma — Open immersions are monomorphisms
- `def-quasi-compact-and-quasi-separated-scheme` · definition — Quasi-compact and quasi-separated schemes
- `thm-affine-schemes-quasi-separated` · theorem — Affine schemes are quasi-separated
- `def-ideal-sheaf` · definition — Ideal sheaves on a scheme
- `def-quasi-coherent-ideal-sheaf` · definition — Quasi-coherent ideal sheaves
- `def-closed-immersion-schemes` · definition — Closed immersions of schemes
- `thm-affine-closed-immersions-quotient-rings` · theorem — Closed immersions into affine schemes are quotient spectra
- `thm-quasi-coherent-ideal-closed-subscheme-correspondence` · theorem — Quasi-coherent ideals and closed subschemes
- `def-reduction-of-scheme` · definition — The reduction of a scheme
- `thm-reduction-universal-property` · theorem — Universal property of scheme reduction
- `def-irreducible-component-scheme` · definition — Irreducible components with reduced induced scheme structure
- `def-integral-scheme` · definition — Integral schemes
- `def-locally-noetherian-and-noetherian-scheme` · definition — Locally Noetherian and Noetherian schemes
- `def-locally-finite-type-and-finite-type-morphism` · definition — Locally finite type and finite type morphisms
- `def-locally-finite-presentation-morphism` · definition — Locally finite presentation morphisms
- `lem-finite-type-local-on-source-and-target` · lemma — Finite type is affine-local on source and target
- `def-quasi-compact-and-quasi-separated-morphism` · definition — Quasi-compact and quasi-separated morphisms
- `def-affine-overlap-separation-condition` · definition — Affine-overlap separation condition
- `def-variety-scheme-theoretic` · definition — Scheme-theoretic varieties
- `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes` · theorem — Irreducible classical varieties and integral separated finite-type schemes
- `def-scheme-theoretic-image` · definition — Scheme-theoretic image
- `thm-scheme-theoretic-image-quasi-compact-morphism` · theorem — Scheme-theoretic image of a quasi-compact morphism
- `rem-topological-versus-scheme-theoretic-subspace` · remark — A support does not determine its scheme structure

### `schemes-subschemes-and-morphisms-locally-of-finite-type-examples` — Schemes Subschemes and Morphisms Locally of Finite Type — Examples (9 item(s))

- `ex-projective-line-by-gluing-affines` · example — The projective line from two affine charts
- `ex-doubled-origin-nonseparated-scheme` · example — The affine line with doubled origin
- `ex-closed-subscheme-double-origin-point` · example — Two infinitesimal structures at the origin
- `ex-reduction-dual-numbers` · example — Reduction of the dual-number point
- `cex-closed-subset-does-not-determine-closed-subscheme` · counterexample — A closed subset has many scheme structures
- `ex-affine-n-space-over-arbitrary-base` · example — Affine n-space over an arbitrary base
- `cex-locally-finite-type-not-finite-type` · counterexample — An infinite disjoint union is locally but not globally finite type
- `cex-finite-type-not-finite-presentation-nonnoetherian-base` · counterexample — Finite type need not mean finite presentation
- `ex-scheme-theoretic-image-dense-open-immersion` · example — The scheme-theoretic image of a dense open immersion

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

3 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-d1aa912ac24bd97a0460a351 · `lem-depth-radical-invariance-via-ext`** (from group f, gap-a-reader-closes) — The stated hypotheses allow arbitrary ideals I,J, but its sole depth/Ext dependency, cor-depth-as-first-nonzero-ext, requires the ideal to lie in the Jacobson radical. The proof instead invokes an unlisted “standard finite-filtration Ext devissage”; the claim may be standard, but the supplied proof does not discharge this hypothesis/citation mismatch.
- **s8a-9420e482f9d7c30727202ca9 · `cor-one-regular-system-of-parameters-implies-cohen-macaulay`** (from group f, gap-a-reader-closes) — The statement uses “a system of parameters for M,” but its listed definition def-system-of-parameters-and-parameter-ideal defines systems only for a local ring R, not finite modules. The appropriate module convention is supplied by thm-dimension-and-parameters-for-modules but is not cited here.
- **s8a-27abc7a018265ebf06ec2b1a · `presheaves-sheaves-stalks-and-sheafification`** (from group f, would-be-fatal) — The declared prerequisite page plane-curves-local-intersection-multiplicity-and-bezout-examples is absent from library/. A repository search found only planning/current-run task references, so that required published dependency could not be read.

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


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.

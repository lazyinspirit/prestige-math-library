# Step 3a scope review — pair `soergel-intersection-forms-and-hodge-theory`

Run `frontier-44-special-representation-examples-28`, batch 12. A page
`soergel-intersection-forms-and-hodge-theory` (order 1542, 28 items) and B page
`soergel-intersection-forms-and-hodge-theory-examples` (order 1543, 5 items),
category `special-topics-in-representation-theory`. The pair is scaffold-only:
none of the 33 item files exists in `items/` yet; authoring is Step 3b.

**Verdict: scope sufficient.** No planned topic or result of the intended
(type-A) subject is omitted; every prerequisite resolves to a published item
or an in-batch supplier; the consumer interface used by later batches is
present. One statement-scope finding (F1 below) is recorded for the owner; it
does not remove or weaken any planned coverage.

## Inputs read

- Design: `research/plan-kazhdan-lusztig-track.md` L75–L110 ("KL-2 — Soergel
  intersection forms and Hodge theory": 21-row A table, B-companion note
  "calculations stop at rank two; examples are not used to prove the general
  Hodge induction").
- Manifest: `research/frontier-44-special-representation-examples-28-batch-12.pages.json`
  (28 A: 7 definitions, 13 lemmas, 7 theorems, 1 corollary; 5 B: 4 examples,
  1 counterexample; dependency levels 0–12).
- Coverage: `...-batch-12.coverage.json`; notes: `...-batch-12.notes.md`;
  cross-batch input `...-batch-12.cross-batch-dependencies.json` (empty, as
  recorded — every out-of-run supplier is a published item, and the single
  inbound page edge is owned by batch 13's input).
- Plan: `research/plan-spec.json` rows 1542/1543 (A `requires`
  `kazhdan-lusztig-bases-polynomials-and-cells`,
  `type-a-soergel-bimodules-and-hecke-categorification`,
  `rouquier-complexes-and-categorical-braid-relations`,
  `dual-spaces-bilinear-forms-and-inertia`; B `requires` the A page).
- Owner records: `...-owner-authoring-direction.md` (authorizes the 24
  special-topics pairs; suppliers before consumers; retain planned claims);
  `...-owner-soergel-repair.md` (owner source/proof-route closure and the three
  added local suppliers); `briefs/tasks/frontier-dependency-ledger.md`
  Batch-12 Step-1 record. Drift: `...-alpha-step1-drift.md` section for this
  pair records `no-drift`; independently re-checked against the published
  supplier inventories and the current plan, and it holds.

## Design versus manifest

- All 21 designed A rows are present with the design's meanings, in
  supplier-before-consumer order: real scalar extension; rational/real label
  comparison; reduced module + dominant Lefschetz operator; invariant
  intersection form on Bott–Samelson bimodules; primitive/hL/HR dictionary;
  primitive decomposition; local intersection form; local-form detection of
  `S(xs)`; embedding theorem; deformed operator `L_zeta`; large-`zeta` HR and
  deformation principle; minimal complexes/perverse truncations; Δ-split
  Rouquier complexes; conditional linearity; HR signs for Rouquier complexes;
  deleted-word factorization; weak-Lefschetz injectivity from the minimal
  Rouquier differential; three-case deformed hard Lefschetz; simultaneous
  induction (`S`, `hL`, `HR`); Soergel's character conjecture for type A;
  positivity corollary.
- Seven local A suppliers were added; each is a genuine prerequisite of a
  designed claim and is placed before its consumers: the Hecke trace form and
  its KL-basis values (consumed by the detection theorem and the corollary);
  uniqueness/non-degeneracy of invariant forms on `B_x` (consumed by the
  embedding theorem and the HR statements); signature constancy + weak-Lefschetz
  substitute + degenerate shifted case (consumed by the hard-Lefschetz proofs
  and the large-deformation lemma); tensoring with `B_s` preserves HR signs
  (consumed by the HR/hL items); undeformed Lefschetz/HR restriction to Soergel
  summands; right-descent descent to simple invariants; radical/perverse/
  minimal-complex structure. No design claim was weakened or dropped; the A
  page remains far below the 100-item cap.
- The B page realizes the design's rank-1/rank-2 restriction: rank-one
  bimodule (trace form, reduced module, hard Lefschetz), the `S_3` coinvariant
  algebra as `B_{w_0}`, the rank-two Bott–Samelson bimodule with character
  decomposition and the rank-two braid relation, the `S_3` Hodge–Riemann sign
  computation, and the counterexample showing hard Lefschetz fails for a
  non-strictly-dominant degree-two element. No A item depends on any B item
  (checked), so the examples remain illustrations, as the design requires.
- Deviation checked: the design's `def-soergel-module-and-dominant-lefschetz-operator`
  is the manifest's `def-reduced-soergel-module-and-dominant-lefschetz-operator`
  (recorded in the batch notes); the design id occurs only in the prose design
  and has no consumer, so nothing dangles.
- Explicit conditional hypotheses in the statements (`S(y)`, `HR(z,t)_zeta`,
  `S(<=x)`, etc.) are the design's intended induction seams, not omissions.

## Source coverage

- A page: 5 sources — Elias–Williamson arXiv:1212.0791v2 (intro; §1.2; §2;
  §3.1–3.6; §4; §5; §6.1–6.8), Soergel arXiv:math/0403496 (classification,
  self-duality, Hom formula), Riche arXiv:1711.02464 (independent survey),
  Libedinsky–Williamson arXiv:1205.4206 §3.2–3.4/Prop. 3.7 (Δ-splitness),
  Gobet arXiv:1601.00339 §5–6 (independent linearity treatment).
- B page: EW, Soergel, Riche restricted to the rank-1/rank-2 material.
- Coverage dispositions: A 52 `included` / 8 `out-of-scope`; B 11 / 3; the
  out-of-scope rows are reasoned (local/relative Hodge theory; category-O and
  geometric consequences deferred to the KL-4 page; general Coxeter statements;
  Soergel §6 localization; LW decategorification; Gobet's biclosed
  generalization) and are unused by any selected consumer, except for the F1
  inconsistency below.
- Fresh checks: `coverage-checklist` 2 pages / 74 rows / 0 errors / 0 warnings;
  independent re-downloads: EW v2 byte size 440331 with sha256 prefix
  `01039f543cdd06f1` and Riche byte size 419945 with sha256
  `752ac675671a7b18c518d755f1a63ba707440e1efffa94899f7847875021ff45`, both
  matching the owner's reviewed copies exactly; LW 1205.4206, Gobet
  1601.00339 and Soergel math/0403496 all HTTP 200.

## Prerequisites and dependency closure

- Item level: 110 external dependency edges reduce to 54 unique ids; every one
  is a published `items/` file (scripted status check, 0 drafts/0 missing). All
  in-batch dependencies resolve inside the 33; there is no A→B dependency, no
  duplicate home and no cycle (`item-dependency-levels` exit 0).
- Page level: the four `requires` pages are published and earlier —
  `kazhdan-lusztig-bases-polynomials-and-cells` (1540),
  `type-a-soergel-bimodules-and-hecke-categorification` (1516),
  `rouquier-complexes-and-categorical-braid-relations` (1518),
  `dual-spaces-bilinear-forms-and-inertia` (127).
- Consumers: batch 13 (`projective-functors-and-the-soergel-functor-in-category-o`)
  depends on `def-reduced-soergel-module-and-dominant-lefschetz-operator`,
  `lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree`
  and `def-invariant-intersection-form-on-a-bott-samelson-bimodule`; batch 14
  depends on `thm-soergels-character-conjecture`. All four ids exist in this
  manifest, and the three owner-mandated interfaces (character theorem,
  degree-zero local forms, undeformed restriction lemma) are present. No
  published item references any of the pair's ids.
- Fresh run checks: `manifest-deps` 33/0/0; `content-policy --manifest-only`
  33/0/0; `item-dependency-levels check` exit 0 (858 items / 100 pages);
  `step1-decisions check` 858/858 ready, 0 work rows; `manifest-integrity`
  100/100 with no scope drift.
- Unmet prerequisites: none for the declared type-A scope. F1 concerns only an
  over-broad clause; see below.

## Finding F1 — statement-scope inconsistency (owner action requested; non-blocking for subject coverage)

- What: `thm-positive-rouquier-complexes-are-delta-split` ends with "No
  positivity of characters and no assumption S is used; the statement is
  unconditional for every Coxeter group and every reflection faithful
  realization."
- Why it matters: the pair is deliberately type-A. Item 1 defines only the real
  type-A category over `S = R[x_1,...,x_n]` with the `S_n` action, and every
  published supplier of this item is type-A on disk:
  `def-rouquier-complex-of-a-braid-word` and
  `def-positive-and-negative-rouquier-generator-complexes` are built from
  `B_i = R ⊗_{R^{s_i}} R(1)` over `R = Q[x_1,...,x_n]`;
  `def-type-a-standard-graph-bimodules-support-filtrations-and-character`,
  `lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations` and
  `lem-type-a-soergel-generators-are-finite-free-on-both-sides` are stated over
  `S_n`. The coverage record itself disposes "the general Coxeter group and
  arbitrary reflection faithful realization statements" as `out-of-scope` with
  the reason "no item claims the general Coxeter case", which this clause
  contradicts.
- Source fidelity: the clause is faithful to the source. In the fetched EW v2
  body, Proposition 6.8 is stated for `x ∈ W` in the paper's arbitrary-Coxeter
  setup (fixed Coxeter system `(W,S)` and reflection faithful representation
  over `R`), with proof "This is [LW, Proposition 3.7]". So this is a
  source-scope attribution written into a type-A Statement, not a false claim.
- Consequence if retained as an asserted claim: its prerequisites — the
  general reflection-faithful Soergel category and the general
  Rouquier/Libedinsky–Williamson framework — are absent from the published
  library and from all 100 current-run pages (grep of `items/` for "reflection
  faithful" returns only the type-A realization items and unrelated
  coxeter-groups interface items).
- Recommended owner action (owner decides): (a) narrow the clause to the page's
  setting, e.g. "no positivity of characters and no assumption `S` is used;
  the type-A statement above is unconditional", moving the source's general
  form to an attributed source note with the EW 6.8 locator; or (b) if the
  general theorem is to be claimed on the page, add the general
  reflection-faithful setup and general Rouquier/LW suppliers before authoring.
  No pair merger or subject enrichment is indicated.

## Verdict

Scope sufficient for both pages. The KL-2 design is realized item-for-item with
seven necessary local suppliers, the B companion stays inside rank ≤ 2 and is
not load-bearing, all prerequisites are met by published and in-batch items,
and the downstream interfaces are intact. F1 is reported for the owner's
decision on the single over-broad statement clause; it changes no dependency,
no planned result and no example. Scope only; no item approval.

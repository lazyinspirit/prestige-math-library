# Frontier 32 · reader 17

## Scope opened

- Batch manifest: `research/frontier-32-batch-17.pages.json`.
- A page: `library/representation-theory/schur-indices-and-fields-of-definition.md`.
- B page: `library/representation-theory/schur-indices-and-fields-of-definition-examples.md`.
- All 19 assigned items: the 15 A-page items and four B-page examples named in
  the manifest.
- Direct dependency closure: all 38 distinct manifest dependency items,
  including the scalar-extension, Maschke, Galois, character, splitting-field,
  division-ring, and tensor-extension interfaces needed by the proofs.
- Source evidence: the batch coverage/notes and the complete Zheng *Lectures on
  Algebra* PDF, especially Assumption 4.3.1 and Proposition 4.3.2 (PDF p. 150)
  and Proposition 4.6.14 (PDF p. 170).  These were read against the current
  item text; they were not used as a substitute for it.

The A inventory was
`def-character-field-and-field-of-definition`,
`def-galois-conjugate-representation`,
`lem-base-change-of-intertwiner-spaces`,
`lem-galois-conjugates-have-equal-scalar-extension-multiplicity`,
`thm-scalar-extension-of-an-irreducible-finite-group-representation`,
`lem-character-field-is-the-stabilizer-fixed-field`,
`def-endomorphism-division-algebra-of-an-irreducible`,
`thm-absolute-irreducibility-via-the-endomorphism-division-algebra`,
`def-schur-index-of-an-irreducible-character`,
`lem-schur-index-is-independent-of-the-chosen-splitting-field`,
`thm-character-of-an-irreducible-over-a-nonsplitting-field`,
`cor-schur-index-divides-the-representation-degree`,
`def-index-of-a-central-division-algebra`,
`thm-schur-index-equals-division-algebra-index`, and
`thm-schur-index-as-minimal-realization-multiplicity`.  The B inventory was
`ex-galois-conjugate-characters-of-c3`,
`ex-s3-is-split-over-the-rationals`,
`ex-quaternion-character-has-schur-index-two`, and
`ex-trivial-character-has-schur-index-one`.  Both page summaries were checked;
neither needed an edit.

## Repairs made

All repairs are in in-flight batch-17 content or its proof contract.

1. `lem-galois-conjugates-have-equal-scalar-extension-multiplicity` now states
   the necessary characteristic-zero and finite-dimensional hypotheses.  Its
   former statement invoked complete reducibility without supplying the
   `char(E)\nmid |G|` hypothesis.
2. `lem-character-field-is-the-stabilizer-fixed-field` now requires
   `F\subseteq E\subseteq\mathbb C`, which licenses its use of the
   complex-character determination theorem.
3. The Schur-index definition and splitting-field independence lemma now state
   the finite-Galois condition actually used by the orbit theorem.
4. `thm-character-of-an-irreducible-over-a-nonsplitting-field` now keeps the
   base field in the multiplicity: its `m` is the multiplicity of the
   constituent in `E\otimes_FV`, rather than the character-field Schur index
   in general.  The original identification is false after enlarging the base
   field; for the faithful quaternion character, extension from
   `\mathbb Q` to `\mathbb Q(i)` changes the relative multiplicity from
   two to one.
5. `cor-schur-index-divides-the-representation-degree` is correspondingly
   restricted to the irreducible `K=\mathbb Q(\chi)` model used to define
   `m_K(\chi)`.
6. `thm-schur-index-equals-division-algebra-index` is restricted to that
   character-field model and now proves centrality and the equality by
   base-changing to `M_m(E)`, taking Galois invariants of central elements,
   and comparing dimensions.  This replaces the invalid general-base-field
   assertion and its unsupported “orbit block” descent.
7. `thm-schur-index-as-minimal-realization-multiplicity` no longer asserts the
   false matrix-embedding/Morita equivalence.  It uses the scalar-extension
   multiplicity directly to establish attainability and divisibility.
8. The `C_3` example now distinguishes rational orbit multiplicity from the
   Schur index over `\mathbb Q(\zeta)`.
9. Updated `research/frontier-32-batch-17.proof-contracts.json` for all
   changed statements and proof rows, including exact current quotations and
   fact-to-step use maps.  No affected item carried a stale
   `verification.judge` record.

## Checks

- Reflow ran on every changed item (it reformatted the corollary and
  division-algebra theorem; the other changed items were already canonical).
- Focused `precheck`: all 14 proof-bearing assigned items pass.
- `manifest-deps`: 19 items, 0 errors.
- Strict batch proof contract: 14/14 proof-bearing items, 0 errors and 0
  warnings.
- Citation fidelity: 34 citations, no missing exact quote and no widening
  candidate.
- Render check: both pages and all 19 items, 21 files total, pass.

The attempted `content-policy --manifest-only` check is not applicable after
authoring: it treats the current in-flight item files as duplicate future
mints.  This is a checker mode mismatch, not a defect in batch 17.

## Page verdicts

- **A — Schur Indices and Fields of Definition:** pass after the repairs above.
  The character-field, scalar-extension, division-algebra, and minimality
  assertions now preserve their base fields and hypotheses.
- **B — Examples:** pass after the `C_3` terminology repair.  The `S_3`,
  quaternion, and trivial-character computations were independently opened and
  agree with their stated models and boundary conclusions.

## Blocker

The coverage notes record one external liveness blocker: Node fetch cannot
resolve the retained Wiese author URL (`EAI_AGAIN`).  Zheng is independently
fetch-stamped and supports the repaired mathematics; no source stamp was
invented.  This is recorded as a source-fetch/environment blocker only, not as
an uneditable mathematical finding.

## Uneditable findings

None.

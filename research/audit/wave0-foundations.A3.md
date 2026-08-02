# Wave 0 · foundations — A3 orchestrator adjudication (2026-08-02)

Verified from disk before ruling: D3a ([L3] carries "σ(j) ≠ 0" absent from
`lem-nat-nonzero-is-successor`'s Statement; `thm-omega-is-peano-system` absent
from deps), D3b ([L2] claims `m < σ(n) ⟺ m ≤ n`; `lem-nat-discrete` states
`m < n ⟺ σ(m) ≤ n`), D3c ([L2] co-cites ℕ-specific `thm-induction-principle`
for a second-system claim), D5b (`lem-nat-add-cancellative` is right-
cancellation; gap uniqueness needs commutativity), D4a/d/e/f (deps lists
confirmed missing the named targets), D1/D2 (one-for-one with the 11
`proof-contract --strict` errors).

## Decisions

- **Provenance retags: APPROVED, all 39** (25 literature-derived/exact-source,
  14 ai-altered/semantic-source; zero waivers, zero concurrences needed; D5
  no-op).
- **D1a–e APPROVED** — insert the missing inline step tags as drafted.
- **D2a APPROVED** — tag `L2` at step 1.3.
- **D2b APPROVED as deletion** — delete unused [L3] and drop
  `lem-nat-nonzero-is-successor` from `deps` of `fs-induction-without-base`;
  update contract. Same for `ex-two-plus-two`: drop unused `ex-one-plus-one`
  deps entry.
- **D3a APPROVED** — split [L3]; cite `thm-omega-is-peano-system` for P1; add
  to `deps`.
- **D3b APPROVED** — restate [L2] as what `lem-nat-discrete` states; write the
  one-line bridge as a step via σ-injectivity citing
  `thm-omega-is-peano-system` (preferred over the cancellation route: P2 is
  the natural license); add to `deps`.
- **D3c APPROVED** — drop the `thm-induction-principle` link from [L2]; keep
  the deps entry.
- **D4a/b/d/e/f APPROVED** — add the named dependency to `deps`, state it as a
  new fact, tag the using step. D4c: restate the Given only, as proposed.
- **D5a APPROVED** — write the one-clause converse into step 5.1 (Beta's
  preferred route), keeping "Equivalently" honest.
- **D5b APPROVED** — add the `lem-nat-add-commutative` citation to the Remark.
- **D5c DEFERRED to Alpha (A6)** with recommendation: mark the von Neumann
  order/membership coincidence stated-without-proof with the Kaya URL; note
  the optional future lemma in the A10 owner queue.
- **D5d, D5e APPROVED** — narrow the two page-prose claims exactly as
  proposed (D5e: the "available interchangeably in what follows" phrasing —
  licensed by the proved induction ⇒ WO ⇒ strong chain).

Rationale: citation precision is non-negotiable and every approved item was
verified mis-attributed or unlicensed as claimed; deletions here are of unused
facts/edges only (no id, no reading order). All deps changes get impact-audit
closure at wave level from the pre-A4 snapshot.

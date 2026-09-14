# Step 3a scope review — Schauder bases, approximation, and Banach-space pathologies

Run: `phase-2-next-18`  
A page: `schauder-bases-approximation-and-banach-space-pathologies`  
B page: `schauder-bases-approximation-and-banach-space-pathologies-examples`

## Decision

**Insufficient.** The pair needs enrichment on its existing A page; no merger is
recommended.

## Exact scope omission

This pair is the designated Phase-2 proof destination for the recorded item
`rem-enflo-space`, but the manifest supplies only
`rem-enflo-space-without-the-approximation-property`, a non-load-bearing
`proved_here: false` remark. Its statement records a separable space without AP
but omits the promised **reflexive** conclusion, while its coverage expressly
puts Enflo's tensor/trace estimates outside the local scope. It therefore does
not prove or retire the library's existing claim that a separable reflexive
Banach space can fail AP and hence have no Schauder basis.

This is a binding library-role gap, not a request to check Enflo's proof for
correctness. `research/phase-2-build-manifest.md` explicitly says that the old
source-only Enflo boundary does not retire `rem-enflo-space` and requires a
complete proof scaffold. `research/phase-2-expansion-recorded-audit.md` reaches
the same conclusion, and the current retirement ledger leaves
`rem-enflo-space` non-exempt, without a candidate proof page or proof
certificate.

## Recommended owner action

Enrich this pair with a proof-bearing Enflo construction, or an owner-selected
equivalent complete construction, before recording `proceed`. The original
paper's route is naturally local to this A page and requires, at minimum:

- the finite-support approximation and localized-trace setup for finite-rank
  operators;
- the quantitative trace-obstruction criterion implying failure of AP;
- the finite-dimensional Walsh-function estimates and symmetry-averaging
  lemma;
- the combinatorial block construction satisfying the obstruction criterion;
- a final theorem that the completed space is separable and reflexive and
  satisfies the quantitative finite-rank obstruction, hence fails AP and has no
  Schauder basis.

The batch's fetch-verified coverage records a complete reading of
[Enflo's original paper](https://projecteuclid.org/journals/acta-mathematica/volume-130/issue-none/A-counterexample-to-the-approximation-problem-in-Banach-spaces/10.1007/BF02392270.pdf).
I independently read the complete argument in the fetchable
[Math-Net Russian translation](https://www.mathnet.ru/php/getFT.phtml?jrnid=mat&paperid=713&what=fullt&option_lang=eng):
Theorem 1 is prepared by the finite-rank/trace lemmas, Walsh estimates and
symmetry argument, then discharged by the explicit block construction. The
present 29-item A page remains below the 60-item split ceiling, so this omission
calls for enrichment rather than a pair merger.

## Remaining scope evidence

- Apart from Enflo, the manifest preserves every topic and example in the
  controlling FA-11 prose design: ordered Schauder expansions and bounded
  coordinates; conditional/unconditional convergence; AP and BAP; the
  `ba(2^N)` model of `(ell-infinity)*` and Banach means; the James-space
  nonreflexive/isometric-bidual pathology; Dvoretzky–Rogers; and all seven
  designed B-page examples. Four added local suppliers repair the prose's
  coefficient-continuity, finite-range-density, Banach-mean, and
  finite-dimensional Auerbach gaps.
- The six pair-specific source records are current and fetch-resolved. The
  owner has accepted the Szankowski `1 <= p < 2` item as a precisely sourced,
  non-load-bearing historical remark; the available complete reconstruction
  covers `1 < p < 2`, so this remains source-qualified rather than a local proof,
  but it is not the missing retirement supplier identified above.
- `plan-spec.json` agrees on the page IDs, order, category, companion and
  backward prerequisite; its empty item arrays are the expected pre-splice
  state. The drift report finds the FA-4 and FA-6--FA-10 inputs in the declared
  prerequisite closure. The pair has no current-run cross-batch item edge and
  no current Step-3a owner receipt.
- Current batch checks pass: coverage has 58 disposed rows with no error or
  warning; all 10 batch sources are fetch-verified and resolved; manifest
  dependencies report 73 items with no error; and manifest-only content policy
  reports no error or warning. These shape/source checks do not discharge the
  explicit Enflo retirement proof gate.

This is a scope determination only. It does not approve or reject any
individual proof or record an owner decision.

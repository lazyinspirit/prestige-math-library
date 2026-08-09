# Wave 10 A3 orchestrator decision receipt

Decision completed: 2026-08-09

Status: **A3 complete; A4 authorized with one provenance override.** I verified
the manifest, 57-row ledger, 49 proof contracts, findings register, four page
files, every proposed item target, and the exact licensing clauses from disk. A
fresh GPT 5.6 Sol `xhigh` reader independently reproduced the contract result,
repair decisions, source checks, and cross-wave relationship sets. No item or
page is changed by this receipt.

Scope integrity is exact: 57 distinct item ids and 57 unique ledger rows;
49/49 proof-bearing ids have contracts; all 349 numbered steps and 392 boundary
dispositions are present. The baseline strict result is 49/49 checked, exactly
one error and zero warnings: the honest empty use for
`ex-integral-of-the-floor-function` L1. The approved A4 edit closes it without
inventing a use.

## Mathematical and citation decisions

1. `lem-integral-elementary-bounds` Remark — **APPROVE**. Equality in the two
   elementary outer bounds does not characterize constants: the Dirichlet
   indicator has infimum zero and supremum one on every nondegenerate
   partition interval and attains both bounds for every partition. Apply the
   proposed sharpness wording; the lemma Statement and proof remain unchanged.
2. `thm-monotonicity-from-the-derivative` L3 — **APPROVE**. Add the defining
   difference-quotient limit exactly as proposed before the existing
   restriction and interval clauses. Step 1.2 then cites the proposition it
   actually uses.
3. `ex-integral-of-the-floor-function` — **APPROVE**. Add L1 to step 1.2's
   citation list, changing it to `[given, L1, L4, L5, L7]`, and set the
   corresponding contract use to `["1.2"]`. Step 1.2 evaluates the displayed
   floor values, so this is a genuine use rather than decorative inventory.
4. `library/real-analysis/the-derivative-and-mean-value-theorems.md` —
   **APPROVE WITH OVERRIDE as delegated A4 work**. The current page says the
   four theorems are results “that the derivative exists for,” but they assume
   differentiability and derive consequences. Use: “...proves the rules that
   make it computable, and then proves four central theorems whose hypotheses
   use differentiability: Fermat's interior extremum theorem, Rolle's theorem,
   Cauchy's mean value theorem, and the mean value theorem itself.” R1 delegates
   this unambiguous page-prose falsehood, and A4 expressly permits the owning
   Beta to edit its A-page summary.

The wholesale nine-paragraph derivative summary, seven-paragraph Riemann
summary, and positional wording in `rem-derivative-conventions` remain recorded
as nonfatal prose debt under the standing triage rule. They are not structural
rewrites authorized here.

After the repairs, regenerate the two affected proof-contract entries from
final text. Required strict result: 49/49 checked, zero errors, zero warnings.

## Provenance decisions

**APPROVE 56 rows as submitted; APPROVE ONE WITH OVERRIDE.** Preserve every
legacy `origin` field. No scoped item carries legacy `authorship`, so A4 removes
none.

- `cex-differentiable-with-unbounded-derivative-is-not-lipschitz`: retain
  `ai-altered` / `semantic-source`, add
  `https://www.mate.unlp.edu.ar/practicas/51_5_0505202117553.pdf`, and correct
  the rationale. Hunter supports the bounded-derivative implication; the UNLP
  exercise sheet explicitly gives square root as non-Lipschitz on `(0,1)`,
  while the item harmlessly extends the domain to `(0,1]` and proves the
  unbounded-derivative and Lipschitz-contradiction details locally.

The 15 submitted distinct URLs otherwise resolved and supported their stated
role. No `established-knowledge` waiver or positive-novelty uncertainty remains.

## Mandatory final-text reconciliation

Independent manifest filtering reproduces the findings exactly: 86 Wave 10
relationships from 36 sources into 20 Wave 8 targets, and 29 relationships
from 22 sources into eight Wave 9 targets. A6 must reopen all 115 edges against
final Wave 8/9 text before Wave 10 is frozen or judged.

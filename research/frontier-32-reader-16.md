# Frontier-32 reader report — batch 16

## Scope opened

- A page: `library/lie-theory/homomorphisms-between-verma-modules-and-linkage.md`.
  Opened all 20 items: `prop-verma-homomorphisms-are-singular-vectors`,
  `lem-enveloping-algebra-of-the-negative-nilpotent-lie-algebra-is-a-domain`,
  `lem-a-nonzero-verma-homomorphism-is-injective`,
  `lem-every-verma-module-contains-a-simple-verma-submodule`,
  `lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one`,
  `thm-verma-homomorphism-spaces-have-dimension-at-most-one`,
  `lem-simple-root-singular-vector-in-a-verma-module`,
  `prop-simple-reflection-embedding-of-verma-modules`,
  `thm-verma-embedding-for-an-arbitrary-positive-root`,
  `def-strong-linkage-order-on-weights`,
  `lem-a-verma-composition-factor-has-the-same-central-character`,
  `prop-verma-composition-multiplicities-are-finite`,
  `def-jantzen-deformation-and-filtration-of-a-verma-module`,
  `lem-first-jantzen-filtration-term-is-the-verma-maximal-submodule`,
  `thm-jantzen-sum-formula-for-a-verma-module`,
  `thm-strong-linkage-principle-for-verma-modules`,
  `lem-verma-embedding-implies-strong-linkage`,
  `thm-bgg-verma-homomorphism-criterion`,
  `cor-generic-verma-modules-are-simple`, and
  `cor-antidominant-verma-modules-are-simple`.
- B page: `library/lie-theory/homomorphisms-between-verma-modules-and-linkage-examples.md`.
  Opened all five leaves: `ex-sl2-verma-embedding-chain`,
  `ex-a2-regular-dominant-verma-embedding-poset`,
  `ex-a2-singular-dot-orbit-collapses`,
  `cex-equal-central-character-does-not-give-every-verma-embedding-direction`, and
  `cex-nonintegral-reflection-does-not-produce-a-singular-power`.
- Opened the batch manifest, coverage, notes, and proof contract, plus all 19
  direct external dependency items: the universal property; PBW ordered basis
  and Verma model; singular-vector, Casimir, weight-cone, and character facts;
  the Verma, reflection, and Weyl-vector definitions; opposite-root bracket;
  central-character and scalar-action facts; the simple quotient; dot-orbit
  central characters; Shapovalov form, radical, determinant, and irreducibility
  results.
- Independently opened the relevant complete Etingof PDF passages: Exercises
  8.11, 8.14, and 8.15 (PDF pp. 43–46), Theorem 15.11 (p. 82), and the
  Jantzen/BGG material (pp. 104–105); and Chen, *Lecture 4*, Definition 3.9
  and the type-A Weyl-action material (p. 4).

## Confirmed repairs

1. `thm-verma-embedding-for-an-arbitrary-positive-root` had an invalid proof
   reduction: a positive-integral pairing with an arbitrary positive root need
   not split into positive-integral **simple** pairings. In type A2, shifted
   simple pairings `1/2,1/2` give integral pairing `1` for
   `alpha_1+alpha_2`, but neither simple pairing is integral. Replaced that
   reduction with the exact one-reflection application of Etingof Theorem
   15.11, whose generic determinant-and-limit argument has the required
   arbitrary-weight scope. Corrected the item source locator accordingly and
   updated its proof-contract rows.
2. `lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one`
   used an imprecise “leading growth” assertion. Replaced it with the exact
   vector-partition comparison along the interior lattice ray
   `xi=sum_{alpha>0} alpha`, including the rank-one boundary, and stated the
   Schur-lemma justification for zero intersection. Updated its contract.
3. `prop-simple-reflection-embedding-of-verma-modules` and the converse of
   `thm-bgg-verma-homomorphism-criterion` asserted PBW injectivity without
   exposing the domain calculation. Both now spell out the PBW-model kernel
   argument through `gr U(n^-)=S(n^-)`; their contract rows now match.
4. `thm-strong-linkage-principle-for-verma-modules` omitted integrality from
   the reflection supplied by the Jantzen sum. Restored
   `in Z_{>0}`, as required by the strong-linkage definition, and synchronized
   the contract.
5. The live Sakellaridis URL cited by four in-flight items now serves an
   unrelated document. Replaced those references with exact, independently
   read Etingof locations: Exercise 8.15(i) for the simple-root vector;
   Theorem 15.11 and Corollary 20.14 for the antidominant corollary; and
   Exercise 8.11 for both rank-one leaves. This repaired inaccurate current
   citations without changing any B-page prose.

The material proof repairs updated
`research/frontier-32-batch-16.proof-contracts.json`. No item had a stale
`verification.judge` record to remove.

## Page verdicts

| Page | Verdict | Basis |
| --- | --- | --- |
| `homomorphisms-between-verma-modules-and-linkage` | pass after repair | The conventions, all directed implications, the Jantzen formula, linkage induction, and the source scopes are now consistent. |
| `homomorphisms-between-verma-modules-and-linkage-examples` | pass | The sl2, regular and singular A2, direction, and nonintegral-power boundary checks agree with the stated dot-action conventions. |

## Validation

- PASS — reflow and focused precheck for every changed item.
- PASS — batch-wide precheck: 23 proof-bearing items, zero failures.
- PASS — `node tools/proof-contract.mjs research/frontier-32-batch-16.proof-contracts.json --strict`: 23/23, zero errors and warnings.
- PASS — `node tools/content-policy.mjs research/frontier-32-batch-16.pages.json` and `node tools/manifest-deps.mjs research/frontier-32-batch-16.pages.json`.
- PASS — `node tools/source-backing.mjs --coverage research/frontier-32-batch-16.coverage.json --liveness research/frontier-32-url-liveness.json`: all 15 authored results backed.
- PASS — scoped `git diff --check`.

## Blocker and uneditable findings

The archived Sakellaridis URL could not be fetched in this terminal because DNS
resolution for `web.archive.org` fails; the browser also rejects the nested
archive URL as unsafe. This is non-blocking after the citation repairs above,
because no reviewed in-flight claim relies on that unavailable document. There
are no remaining uneditable findings.

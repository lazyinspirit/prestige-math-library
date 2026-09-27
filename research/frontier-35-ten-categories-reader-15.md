# Step 5a reader report — batch 15

Run: `frontier-35-ten-categories`  
Verdict: one false claim repaired in an assigned in-flight A item; no uneditable
defects or blockers remain.

## Opened inventory

### Pages

- `library/braid-groups/geometric-braids-and-artin-generators.md` (A)
- `library/braid-groups/geometric-braids-and-artin-generators-examples.md` (B)
- `library/braid-groups/garside-structure-normal-forms-and-the-center.md` (A)
- `library/braid-groups/garside-structure-normal-forms-and-the-center-examples.md` (B)

### Items

**Geometric braids and Artin generators (10):**

- `def-geometric-braid-with-setwise-endpoints`
- `def-braid-isotopy-relative-top-and-bottom`
- `prop-stacking-of-geometric-braids-is-well-defined`
- `thm-geometric-braids-form-a-group`
- `def-elementary-geometric-half-twist`
- `lem-geometric-far-commutativity`
- `lem-geometric-three-strand-braid-relation`
- `lem-geometric-braids-admit-generic-polygonal-representatives`
- `lem-every-geometric-braid-is-a-word-in-half-twists`
- `prop-the-artin-presentation-surjects-onto-geometric-braids`

**Geometric braid examples (4):**

- `ex-geometric-two-strand-braids-are-integer-twists`
- `ex-the-three-strand-geometric-braid-relation`
- `cex-setwise-endpoints-do-not-make-a-braid-pure`
- `cex-arbitrary-link-isotopy-need-not-be-braid-isotopy`

**Garside structure, normal forms, and the center (24):**

- `def-positive-braid-monoid`
- `lem-positive-artin-relations-preserve-homogeneous-length`
- `def-artin-right-complements-and-word-reversing`
- `lem-artin-right-complements-satisfy-the-cube-condition`
- `lem-artin-positive-word-reversing-is-complete`
- `lem-the-positive-braid-monoid-is-left-and-right-cancellative`
- `def-left-and-right-divisibility-for-positive-braids`
- `lem-artin-atoms-have-explicit-left-and-right-lcms-and-complements`
- `def-garside-half-twist-and-simple-positive-braid`
- `lem-conjugation-by-delta-reverses-artin-generators`
- `lem-each-artin-atom-divides-delta-on-both-sides`
- `lem-every-positive-braid-divides-a-power-of-delta-on-both-sides`
- `thm-positive-braids-have-left-and-right-gcds-and-lcms`
- `thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group`
- `thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group`
- `lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts`
- `lem-simple-positive-braids-are-indexed-by-permutations`
- `lem-delta-is-the-lcm-of-the-artin-atoms-and-has-the-same-left-and-right-divisors`
- `thm-left-garside-normal-form-is-unique`
- `cor-the-braid-group-word-problem-is-decidable-by-garside-normal-form`
- `thm-braid-groups-are-torsion-free-by-the-garside-lattice`
- `lem-a-central-positive-braid-is-a-power-of-delta-squared-for-n-greater-than-two`
- `thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two`
- `prop-the-center-of-b-two-is-all-of-b-two`

**Garside examples (4):**

- `ex-the-simple-braids-and-divisibility-lattice-for-b-three`
- `ex-a-left-garside-normal-form-computation-in-b-three`
- `ex-the-full-twist-in-b-three`
- `cex-exponent-sum-is-not-a-complete-braid-normal-form`

The batch items and each listed page were opened. I also opened the dependency
statements needed for the examples and for the divisibility repair, including
`def-braid-group-by-the-artin-presentation`, `def-symmetric-group`,
`def-group-presentation`, and `thm-von-dyck`. The repair uses the positive
monoid, homogeneous length, and cancellation statements in
`def-positive-braid-monoid`,
`lem-positive-artin-relations-preserve-homogeneous-length`, and
`lem-the-positive-braid-monoid-is-left-and-right-cancellative`.

## Page verdicts

- **`geometric-braids-and-artin-generators` (A): sound.** The relative-isotopy
  conventions, stacking, inverses, elementary half-twists, the two braid
  relations, generic representatives, and the generation/presentation claims
  are supported by the assigned item arguments. No page prose needed repair.
- **`geometric-braids-and-artin-generators-examples` (B): sound.** The integer
  twist description, explicit three-strand relation, non-purity example, and
  distinction between link isotopy and braid isotopy follow from the stated
  definitions and witnesses. No page prose needed repair.
- **`garside-structure-normal-forms-and-the-center` (A): sound after the
  repair below.** The positive braid, reversing, divisibility, Garside element,
  lattice, normal-form, word-problem, torsion, and center arguments were
  checked against their hypotheses and dependencies. No page prose needed
  repair.
- **`garside-structure-normal-forms-and-the-center-examples` (B): sound.** The
  $B_3$ simple-braid/divisibility calculations, normal-form calculation, full
  twist identities, and exponent-sum counterexample are supported by the
  displayed computations and cited results. No page prose needed repair.

## Repair and evidence

In `items/def-left-and-right-divisibility-for-positive-braids.md`, Definition,
Basic properties (ii), the previous text asserted that left divisibility
implies right divisibility after right multiplication. This is false. In

\[
B_3^+,\qquad a=\sigma_1,\quad b=\sigma_1\sigma_2,\quad x=\sigma_1,
\]

one has $a\preccurlyeq_L b$, but $ax=\sigma_1^2$ and
$bx=\sigma_1\sigma_2\sigma_1=\Delta$. If $ax\preccurlyeq_R bx$, then
$\Delta=c\sigma_1^2$ for some positive $c$. Homogeneous length forces
$c=\sigma_1$ or $c=\sigma_2$; under the permutation map to $S_3$,
$c\sigma_1^2$ maps to $s_1$ or $s_2$, while $\Delta$ maps to
$s_1s_2s_1=(1\ 3)$. Thus no such $c$ exists.

The definition now states the two correct equivalences:
\(a\preccurlyeq_L b\iff xa\preccurlyeq_L xb\) and
\(a\preccurlyeq_R b\iff ax\preccurlyeq_R bx\). Their forward directions
follow by keeping the same divisibility witness; their reverse directions
follow by left and right cancellation, respectively.

Updated the target entry in both
`research/frontier-35-ten-categories-batch-15.proof-contracts.json` and the
merged `research/frontier-35-ten-categories-proof-contracts.json`: added a
checked `sided-compatibility` boundary and refreshed the three assigned
consumer citation quotes that included the old paragraph. Both JSON files
parse, contain no stale quote, and have three corrected quotes. The item had no
`verification.judge` record to remove.

Validation required by the dispatch:

- `node tools/tsx-run.mjs tools/reflow.mts items/def-left-and-right-divisibility-for-positive-braids.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-left-and-right-divisibility-for-positive-braids.md` — 0 checked, 0 failing; all clean.

## Source checks

- Dehornoy et al., *Foundations of Garside Theory*,
  [Text.pdf](https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf), §II.4:
  Corollary 4.45, Proposition 4.46, and Corollary 4.47 (PDF pp. 92–93) state
  cancellation and conditional common right-multiple/right-lcm conclusions;
  Lemma II.4.62 (PDF p. 674 onward) gives completeness of right-reversing under
  right-Noetherianity, absence of an epsilon relation, and the cube condition.
  I compared the complete relevant proof argument with the assigned reversing
  lemma.
- J. González-Meneses, *Basic Results on Braid Groups*,
  [arXiv PDF](https://arxiv.org/pdf/1010.0321), §4.3, Theorem 4.2 (printed
  pp. 30–31), states that for $n>2$, $Z(B_n)=\langle\Delta^2\rangle$. The
  proof passage and adjacent $B_2\cong\mathbb Z$ statement support the
  assigned center examples.

## Uneditable defects and blockers

None found in the assigned batch. No proposed withdrawal was present. No
blocker remains. This review covers batch 15 and its claim-relevant
dependencies; it does not certify other batches or unrelated library content.

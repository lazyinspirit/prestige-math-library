# frontier-13 spine attestation — `lem-of-q-embeds`

## Verdict

**Attested: read and sound.** I found no `confirmed_fatal`, nonfatal, or polish
defect in the published item `lem-of-q-embeds`. I made no content edit.

The item is unmodified in the working tree. The current spine receipt records
content hash `ebb5d25e7f7b30fdc43d6ab9ef51379b12ca6a3158a1418b31faba17c3899300`,
31 direct consumers, and 2,276 transitive consumers.

## Proof coverage

I read **100% of the proof**, including the complete Statement, Facts &
Assumptions block, and all **11 numbered steps**: 1.1, 1.2, 2.1–2.5, 3.1,
3.2, 4.1, and 5.1.

- Steps 1.1–1.2 construct the integer map and then the rational map. The
  positive-denominator condition and positivity of `q · 1_F` ensure that every
  displayed inverse exists; zero and negative integer numerators are covered by
  the stated integer convention.
- Step 2.1 correctly proves independence of the fraction representative by
  applying the integer homomorphism to `pq' = p'q` and cancelling the two
  nonzero denominator images.
- Steps 2.2–2.3 correctly prove multiplication and addition by the integer
  identities, distributivity, commutativity, and the elementary inverse-of-a-
  product identity in a field.
- Step 2.4 correctly sends a positive rational to a positive element: a
  positive-denominator representative has positive numerator, both numerator
  and denominator images are positive, the denominator inverse is positive,
  and a product of positives is positive.
- Step 2.5 correctly forces any unital field homomorphism to agree with the
  constructed map on the integers.
- Step 3.1 combines well-definedness, additivity, multiplicativity, and the unit
  calculation to obtain a field homomorphism. Step 3.2 then uses additivity and
  positivity to prove strict order preservation.
- Step 4.1 uses totality of the rational order and strict order preservation to
  prove injectivity. Step 5.1 uses preservation of products and inverses to
  force agreement on every fraction, proving uniqueness.

Every step follows from an explicit fact, an earlier step, the Given, or
elementary field algebra. No inference requires an unstated hypothesis.

## Citation attestation

I opened all six direct dependencies and compared their actual Statements or
Definitions with `[L1]`–`[L5]` and the Statement's ordered-field citation.

- `[L1]` / `thm-rat-ordered-field`: faithful. The theorem states that the
  relation of `def-rat-order` is well defined and makes `Q` a totally ordered
  field. I also opened `def-rat-order`: it states that every rational has a
  positive-denominator representative and that `0 < [(a,b)]` is equivalent to
  `0 < a` when `b > 0`. Thus the proof's numerator-sign use preserves the
  domain and direction of the cited result.
- `[L2]` / `lem-of-naturals-positive`: faithful. Its Statement gives positivity,
  strict increase and injectivity of `n \mapsto n · 1_F`, together with the
  additive and multiplicative identities used in the proof. The zero and signed
  integer extensions in step 1.1 are elementary field algebra.
- `[L3]` / `lem-of-inverse-positive`: exact for the implication
  `a > 0 => a^{-1} > 0`.
- `[L4]` / `lem-of-sign-rules`: exact for closure of positives under products
  and for `a < b` iff `ac < bc` when `c > 0`.
- `[L5]` / `def-field-homomorphism`: faithful. The Definition requires
  preservation of addition, multiplication, and the unit, and its Remark derives
  preservation of zero, negation, and inverses of nonzero elements.
- `def-ordered-field`: faithful to the Statement's domain and to the proof's use
  of trichotomy, totality, the positive cone, and the strict order definition.

For the nested rational-construction check, I additionally opened
`def-rat-operations` and `thm-rat-field`; their operations and field conclusion
agree with the fraction arithmetic used in steps 2.1–2.3 and 5.1.

## Title, Statement, boundaries, and provenance

The title and Statement claim exactly what the proof establishes: one unital
field homomorphism from `Q` to an arbitrary ordered field, with the displayed
integer and fraction formulas, strict order preservation, injectivity, and
uniqueness. The phrase "embedding as an ordered subfield" is licensed by the
proved injective field homomorphism and strict order preservation.

Boundary checks are clean: `q >= 1` excludes a zero denominator; `q = 1`,
`p = 0`, positive and negative numerators, `x = y`, and `x != y` are all covered.
The ordered-field hypothesis supplies characteristic zero through positivity of
the canonical naturals. There is no hidden nonempty choice and no unproved
direction of an iff used by the argument.

The target and every direct dependency carry separate
`provenance.statement` / `provenance.proof` fields. No load-bearing dependency
has an `ai-generated` Statement or Construction.

## Count

**Items opened: 10** — the target, all 6 direct dependencies, and 3 nested
rational-construction items used to verify `[L1]` and the fraction arithmetic.

Per-item verdict: `lem-of-q-embeds` — **clean; attested read**.

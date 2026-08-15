# frontier-14 — Step 6a independent reader 5

Scope: `research/frontier-14-batch-5.pages.json` — both pages, all 25 scoped
items. I opened all 25 scoped item files and all 32 additional distinct item
files cited by their dependency lists, for 57 distinct item files opened in
total. I checked all 95 `[F#]`/`[A#]`/`[L#]` obligations against the cited item
on disk. The mechanical citation-fidelity and boundary-audit passes both had
zero candidates; the findings below come from the independent semantic read.

## Findings

### R5-1 — `prop-quadratic-residue-is-representative-independent`

- **Location:** Proof step 3.1, `items/prop-quadratic-residue-is-representative-independent.md:57`.
- **Defect:** The step says that from `u=[x]_n` being a unit and
  `u^2=[a]_n`, the congruence `x^2 congruent a (mod n)` lets `[L1]` declare
  `a` a quadratic residue. But `[L1]`, faithfully restating
  `def-quadratic-residue-modulo-n`, applies only after `gcd(a,n)=1` is known.
  The step does not state that `u^2` is a unit and then use `[L3]` to obtain
  this missing hypothesis. The bridge is immediate, but it is absent from the
  stated inputs.
- **Severity:** `polish` — a competent reader closes it well within 30 seconds.

### R5-2 — `thm-count-of-quadratic-residues-modulo-prime`

- **Location:** Proof steps 1.1 and 2.1,
  `items/thm-count-of-quadratic-residues-modulo-prime.md:53` and `:57`.
- **Defect:** `[L1]` says that the nonzero quadratic residues form the
  index-two subgroup `Q`; it does not itself state that every unit outside `Q`
  is a quadratic nonresidue. Both steps use that complement identification.
  It follows immediately by unfolding `def-quadratic-residue-modulo-n`, but
  that definition is neither a fact nor a dependency of this item.
- **Severity:** `polish` — this is an omitted definitional bridge, not a false
  count.

### R5-3 — `prop-legendre-symbol-on-units-is-homomorphism`

- **Location:** Proof step 1.1,
  `items/prop-legendre-symbol-on-units-is-homomorphism.md:53`.
- **Defect:** `[L1]` establishes only that the symbol is well defined and takes
  values in `{+1,-1}` on units; `[L2]` identifies the square subgroup `Q`.
  Neither cited fact says which sign is assigned to `Q`. The conclusion that
  the symbol is `1` on `Q` and `-1` on the other coset needs the defining
  clause of `def-legendre-symbol`, which is absent from both the facts and the
  dependency list.
- **Severity:** `polish` — adding the exact defining clause closes the step
  immediately.

### R5-4 — `prop-legendre-symbol-on-units-is-homomorphism`

- **Location:** Proof step 3.1,
  `items/prop-legendre-symbol-on-units-is-homomorphism.md:57`.
- **Defect:** The equality `chi_p(g^n)=(-1)^n` is asserted without first
  establishing that the chosen generator `g` lies outside `Q`, hence has
  Legendre value `-1`. This follows because a generator lying in the proper
  index-two subgroup `Q` would force `G=<g>` to be contained in `Q`, but that
  bridge is not stated.
- **Severity:** `polish` — a sub-30-second omitted bridge.

### R5-5 — `lem-gauss-half-system-permutation`

- **Location:** Frontmatter title,
  `items/lem-gauss-half-system-permutation.md:4`, versus the Statement at
  `:29`.
- **Defect:** The title says without qualification that multiplication
  permutes an odd prime's signed half-system. The Statement and proof require
  the essential hypothesis `p` does not divide `a`. Without it the title is
  false: for `a=0`, every product `aj` is zero, so there are no signed
  representatives in `{+/-1,...,+/-m}` and no permutation. The title therefore
  asserts more than the Statement and proof establish.
- **Severity:** `fatal` — overstrong title with a concrete counterexample.

### R5-6 — `thm-gauss-quadratic-residue-lemma`

- **Location:** Proof step 3.1,
  `items/thm-gauss-quadratic-residue-lemma.md:59`.
- **Defect:** The step says every `1 <= j <= m < p` is coprime to the prime
  `p`, then invokes `[L3]`. `[L3]` is only the unit iff gcd criterion; it does
  not license the intervening primality-to-coprimality inference. The exact
  available dependency is `lem-prime-not-dividing-is-coprime`, but it is not
  listed or cited here.
- **Severity:** `polish` — the omitted inference is immediate from primality.

### R5-7 — `thm-gauss-quadratic-residue-lemma`

- **Location:** Proof step 4.1,
  `items/thm-gauss-quadratic-residue-lemma.md:61`.
- **Defect:** `[L4]` supplies Euler's congruence but does not say that the
  Legendre symbol is `+1` or `-1` when `p` does not divide `a`. That range is
  needed to turn congruence modulo odd `p` into integer equality. It is the
  unit branch of `def-legendre-symbol`, which is absent from this item's facts
  and dependency list.
- **Severity:** `polish` — a short missing definitional input.

### R5-8 — `thm-first-supplement-to-quadratic-reciprocity`

- **Location:** Proof step 1.1,
  `items/thm-first-supplement-to-quadratic-reciprocity.md:51`.
- **Defect:** The cited Euler-criterion theorem gives a congruence. The step
  turns it into equality by saying both sides are `+1` or `-1`, but no listed
  fact supplies the Legendre symbol's range. The missing input is again the
  unit branch of `def-legendre-symbol` (here `p` never divides `-1`).
- **Severity:** `polish` — a sub-30-second definitional bridge.

### R5-9 — `ex-quadratic-congruence-from-its-discriminant`

- **Location:** Verification steps 1.1 and 3.1,
  `items/ex-quadratic-congruence-from-its-discriminant.md:43` and `:47`.
- **Defect:** Step 1.1 infers `(4/11)=1` from `4` being a nonzero square, but
  `[L1]` is only the discriminant root-count formula and does not state the
  defining Legendre-symbol clause. Step 3.1 then infers from
  `(6x+4)^2 congruent 4 (mod 11)` that `6x+4 congruent +/-2 (mod 11)` without
  an input supplying the no-zero-divisors property of `Z/11`. Both facts are
  true, and step 2.1 plus direct substitution already supplies a quick route
  to exhaust the two displayed roots, but the written inputs do not license
  the two inferences as stated.
- **Severity:** `polish` — both are short local bridges; the example and its
  witnesses are correct.

### R5-10 — `cex-squaring-on-units-is-not-a-homomorphism-nonabelian-warning`

- **Location:** Fact `[L4]`,
  `items/cex-squaring-on-units-is-not-a-homomorphism-nonabelian-warning.md:39`.
- **Defect:** `[L4]` says `(gh)^n=g^n h^n` "requires" `g` and `h` to commute.
  The cited `lem-group-power-laws` states only the faithful clause
  **"if `gh=hg` then `(gh)^n=g^n h^n`"** and adds that the equality *can* fail
  without commutativity. It does not state the converse for an individual
  exponent; that converse is false, for example at `n=0` or `n=1`, when the
  equality holds for every pair. The fact line changes the cited direction
  from sufficiency to necessity. The counterexample computation itself is
  valid and does not need this inflated wording.
- **Severity:** `fatal` — inaccurate `[L4]` restatement with a changed
  direction and concrete boundary counterexamples.

## Checks with no finding

- All 25 mathematical-content items carry both `provenance.statement` and
  `provenance.proof`. No scoped Statement or Construction is `ai-generated`,
  so there is no load-bearing AI-generated statement. The three
  `ai-generated` proof labels belong only to finite B-page computations.
- The fixed numerical witnesses were independently recomputed: the residue
  and root tables modulo 11, fourth/eighth powers modulo 17, square image
  modulo 15, the unique cube root modulo 29, the two discriminant roots, and
  the signed Gauss list all agree with the files. The 29-row repeated-squaring
  transcript for `726377359` has no mismatched row, its binary exponent is
  correct, its final residue is `p-1`, and trial division through the square
  root confirms the stated modulus is prime.
- Apart from R5-10, the other 94 numbered fact citations preserve their cited
  target's domain, hypotheses, quantifiers, direction, and conclusion.
- The A-page summary has two nonempty prose paragraphs under 150 words each;
  the B page has no authored body. I found no separate page-summary overclaim.

## Per-page verdicts

- `quadratic-residues-and-the-legendre-symbol` — **fatal defect present**
  (`R5-5`), with seven polish findings (`R5-1` through `R5-4` and `R5-6`
  through `R5-8`). All other ten items on the page were clean on this read.
- `quadratic-residues-and-the-legendre-symbol-examples` — **fatal defect
  present** (`R5-10`), with one polish finding (`R5-9`). All other seven items
  on the page were clean on this read.

Count opened: **25/25 scoped items; 57 distinct item files total** after opening
all 32 additional dependency targets.

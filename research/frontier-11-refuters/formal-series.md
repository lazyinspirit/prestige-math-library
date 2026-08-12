## Your cluster — `formal-series`: formal power series

Pages: `formal-power-series` (A, 22 items, order 193) and its `-examples`
(B, 9 items).

### Read this first — why this cluster's Facts blocks have had NO independent read

The independent reader (reader-2) read every proof step and dependency here and
found the proofs sound after three small repairs. But at that time **every one of
these items put all its dependency references into a single aggregate `**Given:**`
paragraph and cited the tag `[given]`** — there was not one `[F#]` label in the
whole batch, and all 49 proof contracts had empty citation arrays.

After reader-2 finished, the batch's **own Beta** — the agent that authored these
items, and which is barred from auditing its own work — rewrote every Facts block
into labeled `[F#]` facts and retagged every proof step. Alpha has verified from
the diff that **no numbered proof-step body text changed**: only the Facts blocks
and the bracketed tag lists. But that new Facts text is freshly authored prose
that no independent party has read, and it was written by the author.

**So your single most important job in this cluster is fact fidelity.** For every
`[F#]` in every item: open the cited item on disk and check the restatement
reproduces its Definition/Statement — same domain, quantifiers, hypotheses,
conclusion, direction. Report any fact that inflates, weakens, invents a converse,
drops a hypothesis, or replaces the proposition with a description of what it is
for. Then check the **tag lists**: a step tagged `[F3]` that does not use `F3`,
and a step that uses a fact it does not tag, are both defects.

### Priority 1 — `thm-lagrange-burmann-inversion`

Named by Alpha as a priority. Verify:

- the exact form of the inversion formula the item states, and that it matches a
  reputable source (you have web access; Flajolet–Sedgewick Appendix A.6 and
  Stanley EC2 §5.4 both carry it);
- the hypotheses: `φ(0) ≠ 0` (or whatever the item assumes) and what that buys.
  Reader-2's repair added `thm-formal-power-series-unit-criterion` to license
  forming `ψ(u) = u/φ(u)` — check the unit criterion really says a formal series is
  a unit exactly when its constant coefficient is a unit, and that the item's ring
  hypothesis (field? commutative ring? `ℚ`-algebra?) is strong enough for every
  division the proof performs. Lagrange inversion over a general commutative ring
  needs care about dividing by `n`;
- the residue calculus: `lem-formal-residue-identities` must supply exactly the
  identities used, including `res(f') = 0` and the change-of-variable/derivative
  identity. Check the `n = 0` case;
- that `ex-lagrange-inversion-catalan-coefficients` and
  `ex-reversion-of-x-over-one-minus-x` compute correctly. Recompute the Catalan
  coefficients and the reversion series yourself to at least order 6.

### Priority 2 — the field-of-fractions trap

**This library has no field-of-fractions or localisation construction anywhere** —
Alpha verified that from disk at step 3, and the step-3 record notes that this
batch was at one point about to *assert* it in a theorem title.

`thm-formal-power-laurent-dictionary` is the item where it would hide. Its
Statement is supposed to claim only: coefficient extension embeds `K[[x]]` in
`K((x))` injectively and multiplicatively; the image is `0` together with the
nonzero Laurent series of nonnegative order; every nonzero `h` factors uniquely as
`x^{v_x(h)}u` with `u` a unit; the inverse is `x^{−v_x(h)}u^{−1}`; and over `ℝ`
the convention matches the published Laurent items. **Check it does not say
`K((x))` is the fraction field of `K[[x]]`**, and that no proof in the pair
reintroduces that claim by another name. Also check `cor-formal-series-over-a-field-is-a-local-domain`
does not assert a fraction field by way of "local ring" language.

Reader-2 also repaired this item's title from `v(h)` to `v_x(h)` and a literal
`qquad`. Check title, Statement, proof and cited Laurent notation now all agree.

### Priority 3 — the rest, with the boundary cases that matter here

- `def-formal-power-series-and-coefficient-extraction`,
  `thm-formal-power-series-ring-and-polynomial-embedding`,
  `prop-coefficient-extraction-linearity-and-extensionality` — the convolution
  product is well defined because each coefficient is a **finite** sum; check that
  is stated, and check the polynomial embedding is injective and unital.
- `def-formal-order-and-x-adic-topology`, `lem-formal-order-laws` — the order of
  `0` must be `+∞`; check every law is stated with that convention and that
  `ord(fg) = ord f + ord g` is claimed only over a domain (it fails over
  `ℤ/4ℤ`, which is exactly what `ex-formal-series-over-zmod-four` witnesses).
- `def-summable-family-of-formal-series`, `thm-summable-families-and-rearrangement`,
  `thm-x-adic-completeness-and-polynomial-density` — local finiteness is the whole
  content; check the rearrangement theorem's hypothesis is local finiteness and not
  something weaker, and check `cex-nonsummable-constant-family` refutes exactly the
  stated claim (including its nonzero-ring hypothesis).
- `thm-formal-power-series-unit-criterion`, `def-formal-series-composition`,
  `thm-formal-composition-laws`, `thm-formal-compositional-inverse` — composition
  `f∘g` requires `ord g ≥ 1`; check every composition formed in the pair satisfies
  it, and that `cex-formal-composition-with-nonzero-constant` shows why.
  Compositional inverse needs `ord f = 1` **and** the linear coefficient a unit;
  check both.
- `def-formal-power-series-derivative`, `prop-formal-derivative-algebra` — reader-2
  added `prop-coefficient-extraction-linearity-and-extensionality` for the shift
  formula used in step 1.3. Check the product and chain rules are proved
  coefficientwise and hold over any commutative ring.
- `def-formal-exponential-logarithm-and-powers`, `thm-formal-exponential-logarithm-identities`,
  `cor-unique-formal-root-with-constant-one` — these need denominators `n!`, so
  they need a `ℚ`-algebra. **Check the characteristic-zero / `ℚ`-algebra hypothesis
  is stated in every one of them.** An `exp` defined over an arbitrary commutative
  ring is a fatal defect. Reader-2 removed `thm-formal-compositional-inverse` from
  the identities theorem as unused — confirm it really is unused now.
- `ex-formal-geometric-series`, `ex-negative-binomial-series`,
  `ex-formal-square-root-one-minus-four-x`, `cex-formal-nonunit-has-no-inverse`,
  `ex-formal-series-over-zmod-four`. Reader-2 repaired the last of these: the old
  Facts attributed the quotient-equality criterion and the product formula to
  `thm-integers-modulo-n-basic-algebra`, which states neither; it now cites
  `def-integers-modulo-n` and `def-addition-and-multiplication-modulo-n`. Verify
  those definitions carry exactly `[a]_n = [b]_n ⟺ a ≡ b (mod n)` and
  `[a]_n[b]_n = [ab]_n`, and recompute `[2]_4 ≠ [0]_4`, `[2]_4[2]_4 = [0]_4`.
  Recompute the square-root series `√(1−4x)` coefficients to order 6 and the
  negative-binomial coefficients.

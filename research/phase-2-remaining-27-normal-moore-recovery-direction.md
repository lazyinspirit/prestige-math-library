# Operator direction — reopened normal-Moore CH/HYP items

Run `phase-2-remaining-27`, pair `normal-moore-spaces-pmea-and-consistency-strength`
(batch 14). Written 2026-09-17 by the operator after the Step-3b stalemate of
2026-09-16T17:13:19Z. Binding only for the seven reopened items listed below.

## Why the escalation is lifted

The 2026-09-16 escalation rests on: "the Fleissner HYP/CH construction
conditions ... are not recoverable at symbol level from the only available
machine-readable copy (AMS/KU scan; Type-3 math fonts defeat text extraction and
no OCR is available here)". That premise is wrong, and it is wrong for the very
copy the run already stamped:

- `https://kuscholarworks.ku.edu/server/api/core/bitstreams/88062b98-5ab8-4fdc-9548-9e00a9c7507d/content`
  (stamped 2026-09-15, 9 pages) is identical to the AMS copy
  `https://www.ams.org/journals/tran/1982-273-01/S0002-9947-1982-0664048-8/S0002-9947-1982-0664048-8.pdf`,
  W. G. Fleissner, *If all normal Moore spaces are metrizable, then there is
  an inner model with a measurable cardinal*, Trans. AMS 273 (1982), 365-373.
- The PDF carries a hidden ABBYY OCR text layer (Info dictionary:
  `OCR_ENCODING_QUALITY(86.39%)`, scanner Fujitsu fi-6770, 600 dpi CCITT page
  images). `mutool draw -F txt <file>.pdf` extracts all nine printed pages into
  legible text; each page's displayed formulas must still be checked against
  the rendered image (`mutool draw -r 600 -o p5.png -F png <file>.pdf 5`).
- Systematic OCR substitutions to expect: `ß`=β, `co`=ω, `G` or `E`=∈,
  `2` = Σ or 𝒵 (disambiguate by context), `k`=κ, `Km`=κ_m, `IJ`=⋃, `<`=≤,
  `-` or `—` inside formulas is often `=`, `2"`=Σ^σ, `£`=E.
- Recovered text and PDF copy, page-per-page:
  `scratchpad/source-cache/normal-moore-spaces/fleissner-1982-page-1..9.txt`
  and `scratchpad/source-cache/normal-moore-spaces/fleissner-1982-transactions.pdf`.

This is a source-recovery fact about the stamped copy, not a licence to publish
a named-theorem summary. Author the construction itself, in full.

## Items reopened (exactly these)

A page: `thm-ch-normal-nonmetrizable-moore-space`,
`cor-v-equals-l-refutes-normal-moore-space-conjecture`,
`thm-fleissner-hyp-normal-nonmetrizable-moore-space`,
`thm-normal-moore-implies-inner-model-measurable`,
`thm-formal-nmsc-consistency-lower-bound`,
`thm-normal-moore-consistency-strength-sandwich`.
B page: `fs-zfc-proves-normal-moore-space-conjecture`.

Do not re-author the 26 completed items of this pair, do not touch the sibling
pair `choice-strength-in-baire-urysohn-stone-and-tychonoff` in batch 14, and do
not edit published content.

## Repair direction

1. The only new mathematics is Fleissner's construction (Sections 3-7, printed
   pp. 366-371): HYP clauses (1a)-(3b), Lemma 1, the A(σ,m) recursion (4)-(6),
   the Q_k triples (7)-(9) with (10)-(12), the basis and development (13),
   Lemma 2 and the club/γ/j machinery (14)-(16) for normality, and the stafull
   Lemma 3(a)-(c) with (17)-(18) for non-metrizability. The five consistency
   items are compositions of that construction with items this run already
   holds (`thm-no-inner-model-measurable-implies-fleissner-hyp`,
   `thm-dodd-jensen-covering-supplies-fleissner-hyp-data`,
   `thm-generalized-continuum-hypothesis-in-l`,
   `thm-finite-fragment-relative-consistency-transfer`,
   `thm-formal-relative-consistency-from-verified-proof-reduction`,
   `thm-strongly-compact-relative-consistency-normal-moore`); keep their
   manifest statements, and state each transfer in the exact form its supplier
   provides.
2. Reuse the pair's existing local suppliers
   (`def-fleissner-hyp-covering-interface`, `lem-ladder-separation-from-hyp`,
   `def-moore-spaces-and-developments`,
   `def-normalized-families-and-collectionwise-normality`,
   `lem-metrizable-spaces-are-collectionwise-normal`) as declared dependencies
   where the proof uses them, and keep each manifest item row, its frontmatter
   `deps`, its proof contract and its decision in agreement. Add a local
   definition only if the construction genuinely needs one.
3. Operator's working reading of the source's shorthand — verify each against
   the page images and, where a better reading exists, follow the source and
   record the deviation in the dispatch report:
   - `A(σ,m)` is a κ_m-indexed **list** of members of 𝒵 (repetitions allowed),
     increasing in `m` and in `σ` as initial segments, and (5) is an equality
     of ranges. This is forced at small σ (for σ=(δ) with |δ|=ω, only ∅ and {∅}
     lie below level 1, while (4) asks for κ_m entries) and by §7's
     "enumerate A(σ,n) as {Z(σ,δ) : δ < κ_n}".
   - `Σ^{ρ|m} := Σ^{(ρ|m)*}` with `ρ|m = (ρ(0),…,ρ(m-1))` (standard
     restriction). Section 7's (17)-(18) use `Z(ρ,δ), Z(τ,η) ⊆ Σ_m` and the
     membership test `ρ|m ∈ Z`.
   - (12) is a condition on the triple ⟨g,ρ,τ⟩ at the index σ of the basic open
     set B(σ): for every n, every Z in the list A(σ,n) with Z ⊆ Σ_m,
     `g(Z ∩ Σ^{ρ|m}) = 1` iff `σ|m ∈ Z`. The superscript is the triple's first
     component, the test uses the index. With this reading §6 Case 1 uses
     `Z ∩ Σ^{σ(n)} ∈ A(σ,j(σ))` and `Z ∩ Σ^{ν(n)} ∈ A(ν,j(ν))` with `m = n`,
     and both g-arguments collapse to `Z ∩ Σ^{σ(n-1)}` because
     `ρ(n-1) = σ(n-1) < ν(n)` and `Z ∩ Σ^{σ(n)} = Z ∩ Σ^{ρ(n)}`.
   - (3b) cannot be read literally for successor β: for δ ∈ E the set
     `E ∩ (δ+1)` contains δ and therefore meets every club on δ+1, so the
     all-β reading contradicts (3a). It is only ever consumed at limit β, in
     Lemma 1's limit case. Verify the limit-β instances for the CH instance
     (E = limit ordinals below ω₁; for limit β < ω₁ a club of successors
     cofinal in β is disjoint from E), state the convention inside the CH item,
     and do not assert a stronger claim.
4. If some step still cannot be completed, escalate that exact step with its
   locator and the precise gap. Do not publish a summary, do not weaken the
   statement, and do not mark an unfinished item complete.
5. When the seven items are authored: record `accept` decisions (confidence 1,
   examined dependency IDs), update the batch-14 manifest, proof contracts,
   coverage, notes and cross-batch dependency input, and rerun the pair's
   author checks. Report completed IDs, checks actually run, and every open
   obligation in
   `research/phase-2-remaining-27-step3b-pair-normal-moore-spaces-pmea-and-consistency-strength.md`.

## Update — 2026-09-17: image verification pass completed

The twelve transcription items requested in §2 of the lane's report are now
answered from rendered page images of the stamped copy (PyMuPDF at 4×–20×, not
the OCR text layer): see
`research/phase-2-remaining-27-normal-moore-image-pass.md`. In summary: (12) is
`Z ∈ A(σ,n)` and `Z ⊂ Σ_m` imply `g(Z ∩ Σ^{ρ|m}) = 1 iff σ|m ∈ Z` with the
triple's ρ in the superscript and the index σ in the test; (5)'s second factor
is `⋃_{k<n} Σ_k`; (9)'s domain is `𝒵(ρ*)`; (11) is the `i < n` agreement of
`ρ(0)_i` and `τ(0)_i`; (15) is `Z ∩ Σ^{σ(n)} ∈ A(σ, j(σ))`; (16) is
`j(σ) ≥ m_{γ(σ(n+1))}(σ(0))`; Case 1 and Case 2 read as printed with
`σ|n ∈ Z`, `ν|n ∉ Z` and Case 2 concluding `ρ(0)_m ≠ τ(0)_m`; Lemma 3(a)–(c)
are stated *and proved* in the source; (17) is
`Z(ρ,δ) = Z(τ,η) ∩ Σ^{ρ|m}`; (18a)/(18b) are the contradictory alternatives;
and the Erdős–Rado subscript is `κ_n`. Author from these readings; the
escalation is lifted for these twelve points. Escalate again only with a
genuinely narrower gap.

**Second update — 2026-09-17 (see "Update 2" of the image-pass file).** Two of
the three remaining points are settled by the printed glyphs: `W_σ` is indexed
by the *subscript* `Σ_{j(σ)}` (witnesses have length exactly `j(σ)`, so (11) is
instantiated at `n = j(σ)`), and `𝒵` requires `card Z ≤ κ`, not `< κ` (the OCR
renders the printed `≤` as `<`). The p. 371 chain is printed with `ρ|m` in all
four exponents and (18a)/(18b) are the contradictory alternatives; the only
point still open is the derivation that turns those printed data into
`σ|m ∈ Z(σ,η)` and `σ|m ∉ Z(σ,η)`. Close (i) and (iii) from the corrected
readings, and either close (ii) with an explicit derivation or escalate with
the single missing implication named exactly.

## Third update — 2026-09-17 (operator): the remaining point is closed

Read this before authoring. It answers the re-escalation of the 2026-09-17
reopened lane, corrects one reading in §3 above, and gives the derivation the
lane asked for. The mathematics below was verified by the operator against the
rendered page images (`fitz`, 8×–20×, locators given) and by direct derivation;
it is the authorized repair direction for the seven reopened items. Verify each
step against the images yourself before you rely on it, and record every
deviation from the printed text in the dispatch report.

### 1. The exponent in (12) is one restriction step higher than the notation sentence says

- Locators, printed p. 369 (PDF page 5): (12) reads
  `if Z ∈ A(σ, n) and Z ⊂ Σ_m, then g(Z ∩ Σ^{ρ|m}) = 1 iff σ|m ∈ Z`, and the
  sentence above it reads `(we will use Σ^{ρ|m} for Σ^{(ρ|m)*})`. Both were
  re-read at 20×. With `a* = greatest ordinal in range a` (p. 369, first line
  of §5) this gives `(ρ|m)* = ρ(m-1)`, so the literal reading bounds the
  g-argument by `ρ(m-1)` — *below* `σ(m-1) = (σ|m)*` and below `ρ(m-1) <
  τ(m-1) < ρ(m)`. Under that literal reading the test sequence `σ|m` is not an
  element of `Σ^{ρ|m}`, (18a) is impossible (it asserts `ρ|m ∈ Z(ρ,δ) ⊆
  Σ^{ρ|m}`, while `(ρ|m)* = ρ(m-1)` is not below itself), and the closing
  transfer of §7 fails. That is the whole of the reported defect.
- The paper's own displayed use fixes the intended reading. Printed p. 370
  (PDF page 6), Case 1, verbatim: `Since σ|n ∈ Z and ν|n ∉ Z, we have by (12)
  \n 1 = g(Z ∩ Σ^{ρ(n)}) = 0.` Here `Z ∈ Σ_n` is a level-`n` set (Lemma 2),
  the test is `σ|n`, and the displayed exponent is `ρ(n)` — the entry *after*
  the restriction index, not `ρ(n-1)`. Both (12)-applications in that display
  have the same argument: at index `σ` the set is `Z ∩ Σ^{σ(n)}` (15) and the
  exponent is the triple's `ρ`, giving `Z ∩ Σ^{σ(n)}` because `σ ⊆ ρ` makes
  `ρ(n) = σ(n)`; at index `ν` the set is `Z ∩ Σ^{ν(n)}` (15) and the argument
  is `Z ∩ Σ^{ρ(n)}` because `ν ⊆ τ`, `ρ(n) < τ(n) = ν(n)` by (8). So the
  paper's (12), as used by its own §6, has the g-argument bound one step above
  the restriction index: for a level-`m` set the bound is `ρ(m)`.
- **Authorized reading (12\*).** For `σ ∈ Σ_n`, a triple `⟨g,ρ,τ⟩` satisfies
  (12) at index `σ` iff for every `Z ∈ A(σ,n)` of level `m`:
  `g(Z ∩ Σ^{ρ(m)}) = 1 iff σ|m ∈ Z` — i.e. the printed `Σ^{ρ|m}` is *used* for
  `Σ^{(ρ|(m+1))*} = Σ^{ρ(m)}`. The notation sentence on p. 369 should read
  `Σ^{ρ|m+1}`; the usage is right, the sentence is off by one.
- Consequences used below: `ρ|m`, `σ|m`, `τ|m` all lie in `Σ^{ρ(m)}`
  (`(ρ|m)* = ρ(m-1) < ρ(m)`; `σ(m-1) < ρ(m)` and `τ(m-1) < ρ(m)` are instances
  of Lemma 3(c)'s `σ_α(i) < σ_β(i')` for `i < i'`, i.e. of (8)). So both (18a)
  and (18b) are consistent alternatives, as the printed text presents them, and
  the closing transfer of §7 is valid.

### 2. The coverage step in §7 is automatic (the lane's lead 3 is withdrawn)

Lemma 3(a) is applied to `T = {σ ∈ Σ : B(σ) ⊆ U_{σ(0)}}`. Every `f ∈ F` has
`f(0) ∈ E`, so `f ∈ Y_{f(0)} ⊆ U_{f(0)}`; `U_{f(0)}` is open and `f ∉ Q`, so
some basic open set `B(σ)` satisfies `f ∈ B(σ) ⊆ U_{f(0)}`, and `f ∈ B(σ)`
means `σ ⊆ f` (the alternative `f ∈ G(σ)` is impossible for `f ∈ F`). Then
`σ(0) = f(0)`, so `B(σ) ⊆ U_{σ(0)}`, i.e. `σ ∈ T` and `f ∈ [σ]`. Hence
`⋃{[σ] : σ ∈ T} = F`, exactly Lemma 3(a)'s hypothesis. No coverage lemma has
to be assumed or invented, and no "`T` misses cylinders" obstruction exists.

### 3. (17) and (18) follow from the failure of (12) for every g

This is the derivation the lane asked for. Fix `n`, a pair `ρ,τ ∈ W` with
`ρ(0) < τ(0)` (both in `Σ_n`), and enumerate `A(σ,n) = {Z(σ,δ) : δ < κ_n}`.
For every `g : 𝒵(ρ*) → {0,1}` the triple `⟨g,ρ,τ⟩` satisfies (7)–(11) (for
(8) use Lemma 3(c); for (10) take the index `σ` to be `ρ` or `τ` itself; for
(11) use the thinning of `S'`), so disjointness of `{U_δ : δ ∈ E}` makes (12)
fail at index `ρ` or at index `τ`. Consider the two constraint systems

- `C_ρ`: `g(Z ∩ Σ^{ρ(m)}) = [ρ|m ∈ Z]` for every `Z ∈ A(ρ,n)` of level `m`;
- `C_τ`: `g(Z ∩ Σ^{ρ(m)}) = [τ|m ∈ Z]` for every `Z ∈ A(ρ,n)`-analogue
  `Z ∈ A(τ,n)` of level `m` — note the exponent is the *triple's* `ρ` in both.

(a) **Each system is internally consistent.** By §1, `ρ|m, τ|m ∈ Σ^{ρ(m)}`,
so the required value is a function of the *trace* `Z ∩ Σ^{ρ(m)}` alone:
`[ρ|m ∈ Z] = [ρ|m ∈ Z ∩ Σ^{ρ(m)}]`, and likewise for `τ`. So no system can
contain two constraints with the same trace and different values.

(b) **No `g` satisfies both systems**, since such a `g` would satisfy (12) at
both indices, giving `q ∈ B(ρ) ∩ B(τ) ⊆ U_{ρ(0)} ∩ U_{τ(0)} = ∅` (using
`ρ,τ ∈ W ⊆ S' ⊆ T` for the two inclusions and disjointness for the equality).

(c) **Therefore a conflict exists**: some trace occurs in both systems with
opposite required values, and by (a) one side of the conflict comes from
`C_ρ` and the other from `C_τ`. So there are `δ,η < κ_n` and `m ∈ ω` with

- (17) `Z(ρ,δ) ∩ Σ^{ρ(m)} = Z(τ,η) ∩ Σ^{ρ(m)}` — the trace form; the printed
  `Z(ρ,δ) = Z(τ,η) ∩ Σ^{ρ|m}` is its special case when the left side is already
  bounded, which the paper assumes; the trace form is what the paper's own
  four-term chain displays, and it is what (c) yields;
- (18a) `ρ|m ∈ Z(ρ,δ)` and `τ|m ∉ Z(τ,η)`, or (18b) `ρ|m ∉ Z(ρ,δ)` and
  `τ|m ∈ Z(τ,η)`.

(An empty common trace forces both required values to be `0`, so a conflict
forces the trace to be nonempty; the trace is then a set of level-`m`
sequences, which is why both sides carry the *same* level `m`.)

Colour each pair `(x,y) ∈ [W]²`, `x(0) < y(0)`, by the least conflict witness
`(δ,η,m,alt)` (well-ordered choice in a fixed order of `κ_n × κ_n × ω × 2`,
which is a bijection with `κ_n`). Since `κ > (2^{κ_n})⁺`, the published
Erdős–Rado theorem `thm-general-cardinal-erdos-rado` (`beth_1(κ_n)⁺ =
(2^{κ_n})⁺ → (κ_n⁺)²_{κ_n}`) restricted to a `(2^{κ_n})⁺`-sized subset gives a
homogeneous set of size `κ_n⁺ ≥ 3`: there are `ρ,σ,τ ∈ W` with
`ρ(0) < σ(0) < τ(0)` and one common `(δ,η,m,alt)`, hence (17) and the same
alternative of (18) hold for the pairs `(ρ,σ)`, `(ρ,τ)` and `(σ,τ)`.

### 4. The printed closing then runs exactly as written

With (17) in trace form: the pair `(ρ,σ)` gives
`Z(σ,η) ∩ Σ^{ρ(m)} = Z(ρ,δ) ∩ Σ^{ρ(m)}`, the pair `(ρ,τ)` gives
`Z(τ,η) ∩ Σ^{ρ(m)} = Z(ρ,δ) ∩ Σ^{ρ(m)}`, and the pair `(σ,τ)` gives
`Z(σ,δ) ∩ Σ^{σ(m)} = Z(τ,η) ∩ Σ^{σ(m)}`, whose intersection with
`Σ^{ρ(m)} ⊆ Σ^{σ(m)}` (again (8)) gives the printed fourth term. That is the
printed four-term chain.

Under the common alternative (18a): the pair `(σ,τ)` gives `σ|m ∈ Z(σ,δ)` and
the pair `(ρ,σ)` gives `σ|m ∉ Z(σ,η)`; the chain transfers membership across
`Σ^{ρ(m)}`, and `σ|m ∈ Σ^{ρ(m)}` by §1, so `σ|m ∈ Z(σ,η)` — contradiction.
Under (18b) the same two lines run with `∈` and `∉` exchanged. This is the
paper's "Now applying (18) yields `σ|m ∈ Z(σ,η)` and `σ|m ∉ Z(σ,η)`", with the
chain doing the transfer; the printed summary is terse but the step is sound.

### 5. What the seven items must state, and the one obligation to record

- Author the seven items from (12\*), the trace form of (17), the conflict
  derivation of §3 and the closing of §4. State in the construction item's
  proof, in one sentence each, (i) that the exponent bound is `ρ(m)` for a
  level-`m` set — the reading the paper's own §6 Case 1 display uses — and
  (ii) that (17) is used in trace form. These are documented local repairs of
  the printed notation, not source attributions: record them in the dispatch
  report as such.
- Declare `thm-general-cardinal-erdos-rado` (published) as a dependency of the
  construction item for the Erdős–Rado step, with its AC use stated.
- **The one obligation you must discharge and record:** the A-lists `A(σ,m)`
  are constructed to satisfy (4)–(6) and are not pinned down by them; §3 needs
  the additional well-definedness invariant that for every `Z ∈ A(σ,n)` of
  level `m` the trace `Z ∩ Σ^{ρ(m)}` lies in the domain `𝒵(ρ*)` of `g` (and
  likewise for the truncations used in (15)). Choose the enumeration and the
  A-lists so that the invariant holds — the paper's §6 club `C` (printed
  p. 370, (14)) is the same closure property for the fixed `Z` of §6 — prove
  the instance you use, and state it as a construction requirement in the
  item. If you cannot prove it, escalate that exact statement with the proof
  you have; do not assume it silently.

Everything else in §§5–7 is as previously verified (recursion (4)–(6), the
Q_k triples (7)–(12), basis and development (13), Lemma 2 with (14)–(16) and
both cases, Lemma 3(a)–(c) with the proofs printed at p. 370).

**Addendum to §5 (same update).** The trace-domain obligation splits in two,
and only the first part needs a construction choice:

- *For the space's definition.* (12) is part of the definition of `B(σ)`, so
  every constraint it evaluates must have its trace in `𝒵` of the triple's
  first component. Discharge this the way §6 does: for a fixed `Z ∈ 𝒵` and
  `β < κ⁺`, the truncation `Z ∩ Σ^β` has `card ≤ κ` and level `< ω`, so it *is*
  some `Z_{i(β)}`; the class `C_Z = {γ < κ⁺ : ∀β < γ (i(β) < γ)}` is the set of
  closure points of `β ↦ i(β)` and is club — the same statement as the paper's
  `C` in (14) on printed p. 370, and the same style of argument. Choose the
  enumeration (and hence the A-lists, which by (5) must exhaust
  `𝒵(σ*) ∩ ⋃_{k<n} Σ_k`) so that the bounds `ρ(m)` used in (12) are closure
  points for the relevant `Z`; state that as a construction requirement in the
  item and prove the club statement you use.
- *For the §7 argument.* Nothing further is needed. A failure of (12) can only
  be witnessed by a well-formed constraint, so the two systems of §3 contain
  only coherent constraints; each side is consistent by §1, disjointness forbids
  a common solution by §3(b), and the conflict of §3(c) is therefore a
  cross-side conflict between well-formed constraints. No coherence property of
  the remaining A-list members is used anywhere.

**Repair applied (operator, 2026-09-17).** The third lane authored the seven
items plus the new local supplier `thm-fleissner-normal-moore-space-construction`.
On reading the finished item the operator repaired its step 1.2: the authored
`A(σ,m)` list had a singleton entry set and could not support (5) or the uses in
steps 3.1/7.1/8.2, so the step now defines `S(σ,m)` as the union over
`σ'' ⊆ σ` of the first `κ_m` elements of `F_{σ''}` and proves (4)–(6) for it.
The item's precheck and strict proof-contract checks pass, the item's `accept`
decision and the seven dependents' decisions were re-recorded, and the detail is
in the operator addendum of
`research/phase-2-remaining-27-step3b-pair-normal-moore-spaces-pmea-and-consistency-strength.md`.

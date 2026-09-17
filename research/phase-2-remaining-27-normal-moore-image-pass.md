# Image verification pass — Fleissner (1982) normal-Moore construction

Run `phase-2-remaining-27`, pair `normal-moore-spaces-pmea-and-consistency-strength`.
Written 2026-09-17 by the operator, answering the twelve transcription items
listed in §2 of
`research/phase-2-remaining-27-step3b-pair-normal-moore-spaces-pmea-and-consistency-strength.md`.

**Method.** The stamped copy
`scratchpad/source-cache/normal-moore-spaces/fleissner-1982-transactions.pdf`
(= Trans. AMS 273 (1982) 365–373, KU/AMS scan) was rendered with PyMuPDF at
4×–20× magnification and read as page images; every display below was read from
the rendered image, not from the OCR text layer. Printed p. 369 = PDF page 5,
p. 370 = page 6, p. 371 = page 7. Rendered crops used for the disputed displays
are reproducible with `fitz` at the locators given.

## Printed p. 369 (setup, §5)

1. **(4)** `card A(σ, m) = κ_m`   `(card A(σ, m) ≤ m² if κ = ω)`.
   The parenthetical is exactly as shown; the case split is on `κ = ω`, and the
   bound is `m²`.
2. **(5)** `⋃_{m∈ω} A(σ, m) = 𝒵(σ*) ∩ ( ⋃_{k<n} Σ_k )`.
   The second factor is the union of the *length-k* sequence sets for `k < n`,
   i.e. the sequences of length `< n`.
3. **(9)** `g is a function from 𝒵(ρ*) to {0, 1}.`
   The domain is the family `𝒵(ρ*) = {Z_α : α < ρ*}`, not `ρ*` itself.
4. **(11)** `for all i < n, ρ(0)_i = τ(0)_i,`
   printed exactly with the subscript `i` on both sides (the entries of the
   0-th coordinates agree for `i < n`).
5. **(12)** `if Z ∈ A(σ, n) and Z ⊂ Σ_m, then g(Z ∩ Σ^{ρ|m}) = 1 iff σ|m ∈ Z.`
   The preceding sentence fixes the notation: "(we will use `Σ^{ρ|m}` for
   `Σ^{(ρ|m)*}`)". So the superscript in (12) is the **triple's first component
   ρ restricted to m** (then `*`), and the membership test is the **index σ**
   restricted to `m`. The printed relation between `Z` and `Σ_m` is `⊂`.
6. **(14)** `C = {γ ∈ κ⁺ : if β < γ, then Z ∩ Σ^β = Z_α for some α < γ}.`
   `C` is a family of **ordinals** (elements of `κ⁺`); the condition is about
   the subsets `Z ∩ Σ^β` of the fixed level-`n` set `Z`, each of which must be
   one of the `Z_α` with `α < γ`. It is not a family of subsets of `Σ^β`.

## Printed p. 370 (§6 continued, §7 Lemma 3)

7. **(15)** `if γ(σ(n)) < σ(n + 2), then Z ∩ Σ^{σ(n)} ∈ A(σ, j(σ)).`
8. **(16)** `j(σ) ≥ m_{γ(σ(n + 1))}(σ(0)).`
   The subscript of `m` is `γ(σ(n+1))` and its argument is `σ(0)`.
9. **Case 1 and Case 2, verbatim:**
   - "Case 1. `γ(ν(n)) < σ(n + 2)`. Then `Z ∩ Σ^{σ(n)} ∈ A(σ, j(σ))` and
     `Z ∩ Σ^{ν(n)} ∈ A(ν, j(ν))`. Since `σ|n ∈ Z` and `ν|n ∉ Z`, we have by
     (12)  `1 = g(Z ∩ Σ^{ρ(n)}) = 0`."
   - "Case 2. `σ(n + 2) ≤ γ(ν(n))`. Then `γ(σ(n + 1)) = γ(ν(n + 1))`. By (8),
     `σ(0) ≠ ν(0)`, so from (16) and Lemma 1, `m = max{j(σ), j(ν)}` satisfies
     `ρ(0)_m ≠ τ(0)_m`. Contradiction to (11)."
   Membership directions: `σ|n ∈ Z`, `ν|n ∉ Z`; Case 1's display uses the
   superscript `ρ(n)` (the n-th entry of the triple's ρ), Case 2's conclusion is
   an inequality of the `m`-th entries of `ρ(0)` and `τ(0)`.
10. **Lemma 3, verbatim (statements):**
    - "(a) If `∪{[σ] : σ ∈ T} = F`, then for some `n`, `T ∩ Σ_n` has a sta-full
      subset."
    - "(b) Suppose that `S ⊆ Σ_n` is sta-full, and that `h : S → κ⁺` satisfies
      for all `σ ∈ S`, `h(σ) < σ(0)`. Then there is a sta-full `S′ ⊆ S` such
      that `h|S′` is constant."
    - "(c) If `S′ ⊆ Σ_n` is sta-full, then for each `β ∈ κ⁺`, there is
      `W = {σ_α : α < β} ⊆ S′` such that
      `σ_α(i) < σ_{α′}(i′)  iff i < i′ or i = i′ and α < α′`."
    - Definition above them: "A subset `S` of `Σ_n` is **sta-full** if for all
      `σ ∈ S` and `j < n`, `{τ(j) : σ|j ⊂ τ ∈ S}` is stationary."
    - The printed proofs of (a)–(c) are one paragraph each and are *complete*
      arguments at the stated level of detail (a: construct `f ∉ ∪{[σ] : σ ∈ T}`
      by induction on `i`; b: induct on `i` with the stationary sets
      `{σ ∈ dom h_{i−1} : σ ⊃ ρ, h_{i−1}(σ) = h_i(ρ)}` and set
      `S′ = {σ ∈ S : ∀i<n, h_i(σ|n−i) = h_n(∅)}`; c: define `σ_α(i)` by
      induction on `(i, α)` in the lexicographic order). None of the three is
      left as an unproved sketch.

## Printed p. 371 (§7 end)

11. **(17)** `Z(ρ, δ) = Z(τ, η) ∩ Σ^{ρ|m},`
    with the superscript `ρ|m` (the triple's ρ restricted to `m`).
12. **(18a)** `either ρ|m ∈ Z(ρ, δ) and τ|m ∉ Z(τ, η),`
    **(18b)** `or ρ|m ∉ Z(ρ, δ) and τ|m ∈ Z(τ, η).`
    These are the **contradictory** alternatives (the ∈/∉ pattern is opposite in
    the two clauses), not a consistent pair.

**The closing chain, verbatim:** "It follows from (17) that
`Z(σ, η) ∩ Σ^{ρ|m} = Z(ρ, δ) ∩ Σ^{ρ|m} = Z(τ, η) ∩ Σ^{ρ|m} = Z(σ, δ) ∩ Σ^{ρ|m}`.
Now applying (18) yields `σ|m ∈ Z(σ, η)` and `σ|m ∉ Z(σ, η)`."

**Cardinal-arithmetic line (resolves the ER subscript):** "Since
`κ > (2^{κ_n})⁺`, we can apply the Erdös–Rado theorem, `κ → (3)²_{κ_n}`, to get
`ρ, σ, τ ∈ W` (with `ρ(0) < σ(0) < τ(0)`) and `δ, η < κ_n`, for which each pair
`(ρ, σ)`, `(ρ, τ)`, and `(σ, τ)` satisfies (17) and the same alternative of
(18). (In the case `κ = ω`, we use Ramsey's theorem `ω → (ω)^m_η`.)"
The subscript is `κ_n` (the sequence of (4)), not `κ_ω` and not `κ_η`; this was
checked at 20× on the rendered page.

## Consequences for the open reading questions

- (12)'s superscript problem is settled: `Σ^{ρ|m}` with ρ the triple's first
  component, `σ|m ∈ Z` the test — i.e. the operator's reading (12) is the
  printed one, and Case 1's `Σ^{ρ(n)}` is a *different* ordinal superscript
  occurring in the contradiction display, consistent with `Σ^β = {τ : τ* < β}`.
- (5)'s second factor is `⋃_{k<n} Σ_k` (length `< n`), and (4)'s parenthetical
  is `card A(σ,m) ≤ m² if κ = ω`.
- (9) is `𝒵(ρ*) → {0,1}`; (11) is the `i < n` agreement of `ρ(0)_i, τ(0)_i`.
- (16)'s subscript is `γ(σ(n+1))` with argument `σ(0)`, so Case 2's
  `γ(σ(n+1)) = γ(ν(n+1))` is the printed common club point.
- (18a)/(18b) are contradictory alternatives, and the §7 contradiction closes
  exactly as printed.
- Lemma 3(a)–(c) are stated and proved in the source; no supplementary proof has
  to be invented for them, only the conventions (`Σ`, `[σ]`, `Z_α`, `κ_n`) that
  the earlier sections fix.

## Update 2 — 2026-09-17: the three remaining gaps, checked at 24×–40×

The re-dispatched lane re-escalated on three points. Two of them are misreadings
of sub/superscripts and of one inequality symbol; the third is a real
close-reading question and is stated below in the form the lane needs.

**(i) `W_σ` is subscript-indexed.** Printed p. 370 reads, unambiguously at 16×:
`Set W_σ = ⋃{B(ρ) : σ ⊆ ρ ∈ Σ_{j(σ)}}` — the index is the **subscript**
`Σ_{j(σ)}`, i.e. the witnessing sequences have length exactly `j(σ)`. It is not
`Σ^{γ(σ*)}`. Consequence: a triple in `W(σ) ∩ W(ν)` lies in `G(σ₁)` for some
`σ₁ ⊇ σ` of length `j(σ)`, so (11) is instantiated with `n = j(σ)` and gives
`ρ(0)_i = τ(0)_i` for all `i < j(σ)`; likewise for `ν`. The Case 2 comparison
index is `m = max{j(σ), j(ν)}`, so the case analysis has to use the *lengths of
the instantiated parameters*, not the length `n+3` of σ, ν. (This also removes
the lane's "no lower bound on witness lengths" objection: the bound is exactly
`j(σ) ≥ n+3`.)

**(iii) `𝒵` allows `card Z ≤ κ`.** Printed p. 368 reads, at 40×:
`Let 𝒵 be the family of subsets, Z, of Σ satisfying card Z ≤ κ and for some
n ∈ ω, Z ⊂ Σ_n.` The symbol is `≤`, not `<` (the ABBYY text layer renders it
`<`, which is what misled the lane). Consequence: for `Z = {σ ∈ Σ_n : [σ] ∩ K = ∅}`
every section `Z ∩ Σ^β` is a subset of `Σ_n` of cardinality at most
`card Z ≤ κ`, hence lies in `𝒵`, and (14)'s condition is the index-closure
condition `Z ∩ Σ^β = Z_α` with `α < γ` — the cardinality objection does not
arise.

**(ii) The p. 371 chain.** Printed as:
`Z(ρ, δ) = Z(τ, η) ∩ Σ^{ρ|m}` (17), with (18a) `ρ|m ∈ Z(ρ,δ)` and
`τ|m ∉ Z(τ,η)` or (18b) the opposite, and then
`Z(σ,η) ∩ Σ^{ρ|m} = Z(ρ,δ) ∩ Σ^{ρ|m} = Z(τ,η) ∩ Σ^{ρ|m} = Z(σ,δ) ∩ Σ^{ρ|m}`
— the fourth exponent is `ρ|m` at 34×, not `σ|m`. The Erdős–Rado line reads
`κ > (2^{κ_n})⁺`, `κ → (3)²_{κ_n}`, homogeneous `ρ, σ, τ ∈ W` with
`ρ(0) < σ(0) < τ(0)`, `δ, η < κ_n`, each pair satisfying (17) with the same
`(δ,η)` and the same alternative of (18). What remains to be shown from these
printed data is the passage from (18a)/(18b) and the chain to
`σ|m ∈ Z(σ,η)` **and** `σ|m ∉ Z(σ,η)`: it needs (a) the transfer of
`σ|m ∈ Z(σ,δ)` (from (18) for the pair (σ,τ)) across the chain, i.e.
`σ|m ∈ Σ^{ρ|m}`, and (b) the chain's last equality, which uses (17) for the
pair (σ,τ) whose exponent is `σ|m`. A reading that closes both at once (rather
than one at a time) is what the author needs; if the printed text does not
supply it, the closure is a locally authored argument and must be recorded as
such, not attributed to the source.

**Update 3 (2026-09-17): point (ii) is closed.** The exponent in (12) is *used*
by the paper with the bound one restriction step higher than the notation
sentence says — p. 370's Case 1 display is `1 = g(Z ∩ Σ^{ρ(n)}) = 0` for a
level-`n` set `Z`, not `ρ(n-1)` — so the printed `Σ^{ρ|m}` serves as
`Σ^{ρ(m)}`, `σ|m ∈ Σ^{ρ(m)}`, and the transfer across the chain is valid. The
full derivation (coverage step, the conflict-witness derivation of (17)+(18),
and the closing) is in the "Third update" of
`research/phase-2-remaining-27-normal-moore-recovery-direction.md`, which is the
binding direction for the reopened lane. This pass's point (ii) is therefore
resolved in the source's favour, with one documented notation repair and one
construction obligation recorded there.

Also confirmed while checking: printed p. 366 fixes the notation — `ρ, σ, τ, ν`
are finite functions on natural numbers (finite sequences) with range in the
`E` of HYP, and `f, g` are functions on `ω`; Lemma 1 there provides the
functions `m_β` used in (16).

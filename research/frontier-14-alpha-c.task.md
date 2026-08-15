## Group Alpha **c** — batch 7, step-3 scaffold review

One A/B pair: `stone-weierstrass-general` (287) and its examples companion.

Write `research/frontier-14-alpha-c-step3-scaffold-review.md`.

### Read this first — this pair was lost once

It was batched at step 0, scaffolded in full, reviewed by group Alpha a, and
then **removed from the manifest, the coverage harvest and the proof contracts**
between step 3 and step 4. Every gate stayed green, because they validate what
is in the artifacts and none can see a page that is no longer there.

The cause was a decision deadlock: Alpha a marked the pair `insufficient` on
finding **D1**, its re-check recorded `not ready — D1 has no recorded decision`,
and the splice resolved that by dropping the page.

**D1 is now decided.** Read Alpha a's §D of
`research/frontier-14-alpha-a-step3-scaffold-review.md` — it is careful work and
you should not redo it, only check the scaffold honours it.

### The decision the Beta was told to follow

Two backward edges are now in `plan-spec.json` for page 287:
`field-extensions-and-the-complex-numbers` (order 54) and
`the-complex-exponential-and-eulers-formula` (order 189).

So the pair **must cite the library's published complex numbers, not re-mint
them**. Specifically, these must NOT appear as newly minted items:

- `def-complex-scalar-pairs-for-stone-weierstrass`
- `thm-complex-scalar-pair-field-and-conjugation-laws`
- `lem-dyadic-root-of-unity-filter`

The last is exactly `cor-sum-of-roots-of-unity` — *"For $n\in\mathbb N$ with
$n\ge2$, the sum of all $n$th roots of unity is $0$"* — which is published.
Check on disk that the scaffold cites it rather than rebuilding it, and that
`def-self-adjoint-complex-function-algebra` now rests on the published ℂ.

### Everything else

`research/frontier-14-brief-alpha.md` is your full contract; the ordinary step-3
questions all apply — is the mathematics covered, is every decline true against
disk, does every deferral name a licensing page id, is the harvest faithful,
would the A page exceed 60 items, are the load-bearing dependencies real and
correctly restated.

T10 owes the **lattice (Kakutani–Krein)**, **real algebra**, **nowhere-vanishing**
and **complex self-adjoint** forms, and the disc-algebra counterexample on the B
page showing self-adjointness cannot be dropped.

**If you find a decision that is not yours, record it as a blocker and say what
the legitimate alternatives are. Never let a page be dropped for want of a
decision.**

**No permission prompts of any kind**, including inside an `&&` chain.

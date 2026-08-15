## Batch 7 of run `frontier-14` — Stone–Weierstrass, restored

One A/B pair: `stone-weierstrass-general` (287) and its examples companion.

### Read this first — why this batch exists

This pair was scaffolded once in batch 2 and then **lost**. Group Alpha a marked
it `insufficient` on finding **D1**; its re-check recorded `not ready — D1 has
no recorded decision`; and at the step-4 splice the pair was dropped from the
manifest, the coverage harvest and the proof contracts rather than spliced. No
gate caught it, because every gate validates what is *in* the artifacts.

**D1 is now decided, in your favour.** You do not need to work around it.

### The D1 decision (orchestrator, approved 2026-08-15)

The earlier scaffold re-minted complex scalars locally —
`def-complex-scalar-pairs-for-stone-weierstrass`,
`thm-complex-scalar-pair-field-and-conjugation-laws`,
`lem-dyadic-root-of-unity-filter` — because
`field-extensions-and-the-complex-numbers` was not in 287's closure.

Alpha a established that this puts a **second, different ℂ** into the library,
and that two legal backward edges reach the published one. Both are now in
`plan-spec.json`:

- `field-extensions-and-the-complex-numbers` (order 54, published)
- `the-complex-exponential-and-eulers-formula` (order 189, published)

So **cite the published complex numbers. Do not re-mint them.** In particular:

| do not build | cite instead |
|---|---|
| a local field of coordinate pairs | `def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field` |
| a local ℝ² identification | `thm-complex-numbers-are-the-real-coordinate-plane` |
| local conjugation/modulus laws | `def-complex-conjugate-real-imaginary-part-and-modulus`, `lem-complex-conjugation-and-modulus-laws` |
| `lem-dyadic-root-of-unity-filter` | `cor-sum-of-roots-of-unity` — *"For $n\in\mathbb N$ with $n\ge2$, the sum of all $n$th roots of unity is $0$"* |

Open each on disk before citing it.

### The mathematics

`research/plan-topology-track.md` §T10. The A page owes the **lattice
(Kakutani–Krein) form**, the **real algebra form**, the **nowhere-vanishing
form**, and the **complex form under the indispensable self-adjointness
hypothesis** — `thm-complex-stone-weierstrass-self-adjoint`. The B page owes the
disc-algebra counterexample showing self-adjointness cannot be dropped.

T10's *Gelfand duality* decline is inherited, but must name a licensing **page
id** — check `research/plan-functional-analysis-track.md` for the real one.

Sources the earlier scaffold verified and you should reuse: Erdman, *A Companion
to Real Analysis*, §21.2.1–21.2.7 and §21.2.13–21.2.15; Berkeley Math 205B notes
Thm 9.3–9.6; Carlen, Rutgers topology notes §1.6, Thms 1.26–1.30. All three were
confirmed live by the citation gate.

### Your outputs

`research/frontier-14-batch-7.{pages.json,notes.md,coverage.json,proof-contracts.json}`.
The manifest already exists with both pages and empty item lists.

Everything in `research/frontier-14-brief-beta.md` applies. Read
`research/frontier-14-PREVENTIONS.md`.

**If you hit a decision that is not yours to make, record it as a blocker in
your notes and scaffold the best legitimate alternative. Never drop a page.**
That is what went wrong the first time.

**No permission prompts of any kind**, including inside an `&&` chain.

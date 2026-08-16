## Your assignment — batch 4, group 3: traces, Borel generators on R and R^n, continuous preimages

Run `frontier-15`, batch 4. The pair is
`library/measure-theory/sigma-algebras-and-borel-sets.md` (A page, 44 items) and
`library/measure-theory/sigma-algebras-and-borel-sets-examples.md` (B page, 16 items).
All items are at `items/<id>.md`, `status: draft`. The batch proof contract is
`research/frontier-15-batch-4.proof-contracts.json`.

Read these items in full, every numbered step against every cited item on disk:

- thm-trace-is-a-sigma-algebra
- thm-generated-trace-commutes
- lem-open-subsets-of-r-are-countable-unions-of-rational-intervals
- thm-seven-generators-of-the-borel-sigma-algebra-on-r
- thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn
- thm-borel-sigma-algebra-of-a-subspace-is-the-trace
- thm-continuous-preimages-of-borel-sets-are-borel

**Focus for this group.** Every one of these is a "generated σ-algebra equals generated
σ-algebra" argument, and every one is proved by mutual inclusion. The classic defect is
proving one inclusion and asserting the other.

1. **`thm-seven-generators…` and `thm-rational-box-generators…`.** Each claims a list of
   families all generate the Borel σ-algebra. Check **each listed family separately**,
   in **both** directions. Open intervals, closed intervals, half-open, open rays,
   closed rays — a ray family generating the Borel σ-algebra needs the countable
   operations that produce bounded intervals from rays, spelled out. Verify the proof
   does not use a family it has not yet shown to be generating. For `\mathbb R^n`,
   check the **compact sets** clause if present: compact sets generate the Borel
   σ-algebra on `\mathbb R^n` because closed sets are countable unions of compacts —
   this needs σ-compactness of `\mathbb R^n` and is false in a general topological
   space. If the Statement is written for a general space, that is a false statement.
2. **`lem-open-subsets-of-r-are-countable-unions-of-rational-intervals`.** Check the
   construction actually covers every point of the open set and that each chosen
   rational interval is contained in it. Instantiate `U = \varnothing` and `U =
   \mathbb R`.
3. **`thm-trace-is-a-sigma-algebra` and `thm-generated-trace-commutes`.** The trace
   commutation `\sigma_A(\mathcal E\cap A) = \sigma_X(\mathcal E)\cap A` is proved by a
   good-sets argument in one direction and directly in the other. Check both. Then
   check `thm-borel-sigma-algebra-of-a-subspace-is-the-trace` genuinely invokes the
   subspace topology (open sets of `A` are traces of open sets of `X`) and not merely
   set intersection. Instantiate `A = \varnothing` and `A = X`.
4. **`thm-continuous-preimages-of-borel-sets-are-borel`.** This is a good-sets /
   minimality argument: `\{B : f^{-1}(B)\in\mathcal B_X\}` is a σ-algebra containing the
   open sets. Verify the preimage commutes with complement and countable union as used,
   and that continuity is used exactly where claimed. Check whether the Statement is
   about **Borel measurability** or about continuity — a Statement claiming more than
   continuous preimages (e.g. that Borel functions compose, or that images are Borel)
   would be false.
5. **Boundary.** For every item instantiate the empty family, the empty set, `n = 0`
   and `n = 1` where a dimension appears, and both directions of every iff. State what
   you found.

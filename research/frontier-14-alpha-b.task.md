## Group Alpha **b** — batches 4, 5, 6

Three A/B pairs, one each in linear algebra, number theory and category theory.
Three distinct literatures; budget accordingly.

| batch | pair | Beta task file |
|---|---|---|
| 4 | `triangularisation-and-jordan-canonical-form` | `research/frontier-14-beta-4.task.md` |
| 5 | `quadratic-residues-and-the-legendre-symbol` | `research/frontier-14-beta-5.task.md` |
| 6 | `reflective-subcategories-and-the-adjoint-functor-theorems` | `research/frontier-14-beta-6.task.md` |

Write `research/frontier-14-alpha-b-step3-scaffold-review.md`.

### Three things specific to your batches

**1. Batch 4 must not ship existence without uniqueness.** LA-10
(`research/plan-algebra-track.md` from line ~1887) makes **uniqueness of the
Jordan form up to the order of the blocks** well-definedness obligation #21, and
it is a real theorem proved via the computable invariants — the ranks of powers
of $T-\lambda$ — not by asserting the blocks are determined. `frontier-13`
shipped a corollary with a false uniqueness clause that took two repair rounds,
so check this one specifically.

Also check the downstream contract. `modules-over-a-pid-and-canonical-forms`
(order 106, `research/plan-algebra-track-expansion.md` ~1310–1360) is designed to
carry a **mandatory agreement item** against this page's Jordan theorem, and it
records that the witness "two matrices with the same characteristic and minimal
polynomial are similar" lives on **this pair's B page** and will be restated
natively there because a B page is a leaf. Confirm that witness is scaffolded on
the B page — it is doing real work for a later page even though nothing will
ever cite it.

**2. Batch 5's two apparent drops are already checked — verify my check, do not
redo it blind.** The scaffold does not mint `thm-power-residue-criterion-modulo-
prime` or `cor-number-of-nth-roots-modulo-prime`, both of which NT-2 enumerates.
The Beta dispositioned both `already-published`, on the ground that
`thm-eulers-criterion-for-binomial-congruences` and
`cor-number-of-solutions-of-a-binomial-congruence` are **stronger** — they hold
for every modulus admitting a primitive root, with exponent
$\gcd(m,\varphi(n))$, rather than for primes only.

I verified both are published, in this page's declared closure, and do state the
stronger form. What I did **not** check is whether every place NT-2 uses the
prime-only version is correctly served by the general one, including hypotheses.
That is your check.

Separately, the Beta declined to cite `lem-integer-part` for the second
supplement because it is published but homed on
`library/real-analysis/limits-of-real-functions.md`, **outside** this page's
closure — I confirmed that, and it is the correct call. It proves the parity
directly from the division algorithm instead. Check that replacement argument is
actually complete, since it is now load-bearing for
`thm-second-supplement-to-quadratic-reciprocity`.

**3. Batch 6 carries the run's most delicate obligation.** MA-2
(`research/plan-category-theory-track.md` from line ~1164) says it outright:

> The page carries the block's most delicate proof obligation: the textbook
> initial-object lemma makes a class-indexed choice, and SE-D3 forbids it. §6
> records the repair and item 12 is where it lands.

Read §6 yourself before judging the scaffold. The three failure modes are:
scaffolding the textbook proof with the choice unremarked; quietly weakening the
theorem to dodge it; or asserting the repair closes when it does not. If the
Beta flagged that the repair does not close, that is a real finding and it is
far cheaper now than at step 8 — say so plainly rather than smoothing it over.

Also check smallness. MA-2 item 13 is explicit that wide pullbacks compute
intersections **for supplied set-indexed families**, and that SAFT keeps its
direct hypothesis for arbitrary collections rather than forming a proper-class
diagram. Local smallness, well-poweredness and the solution-set condition are
hypotheses, not background — confirm they are stated on every item that uses
them.

### Sizing

`reflective-subcategories-and-the-adjoint-functor-theorems` scaffolded 43 A
items against a design estimate of 40, and this subject expands under authoring.
It is under the 60 threshold now; say whether you expect authoring to push it
over, because a split proposed at step 3 costs a spec edit and one proposed at
step 5 costs the page.

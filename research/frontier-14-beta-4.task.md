## Batch 4 of run `frontier-14` — triangularisation and Jordan form

One A/B pair, and it is not a light load. This is the last unbuilt linear-algebra
page below the spectral theorem, and `modules-over-a-pid-and-canonical-forms`
(order 106) is designed to cite it and to carry a **mandatory agreement item**
against your Jordan-form theorem. What you scaffold here is what that page will
be checked against.

| | |
|---|---|
| A page | `triangularisation-and-jordan-canonical-form` · order **90** · category `linear-algebra` |
| B page | `triangularisation-and-jordan-canonical-form-examples` · order **91** |
| requires | `diagonalisation-and-the-minimal-polynomial` (published — built in `frontier-13`) |
| prose scaffold | `research/plan-algebra-track.md` §**LA-10** "Triangularisation, Generalised Eigenspaces and Jordan Form", from line ~1887; sizing at line 35 (A 28 / B 16); the well-definedness obligation **#21** at line ~395 |

Also read `research/plan-algebra-track-expansion.md` line ~207 (the one-line
inventory) and lines ~1310–1360 (MOD-5), which is the downstream page and states
precisely what it expects to be able to cite from you.

The load-bearing results, from LA-10: an operator is triangularisable iff its
characteristic polynomial splits; generalised eigenspaces and the primary
decomposition; **the existence of a basis of Jordan strings** by induction on
$\dim \operatorname{im}$; **Jordan canonical form** when $\chi$ splits;
**uniqueness of the Jordan form up to the order of the blocks** — this is
well-definedness obligation #21 and it is as important as existence, proved via
the computable invariants (the ranks of powers of $T - \lambda$), not by an
appeal to "the blocks are determined"; and **two matrices are similar iff they
have the same Jordan form**.

**Do not ship existence without uniqueness.** The previous run shipped a
corollary asserting a false uniqueness clause and it took two repair rounds.
Uniqueness here is a real theorem with a real proof, and the invariant that
proves it is the one MOD-5 will later re-derive and check against you.

**A `deps` boundary you must respect.** MOD-5 records that the witness "two
matrices with the same characteristic and minimal polynomial are similar" lives
on **your B page**, order 91 — and that because a B page is a leaf, MOD-5 will
restate it natively rather than cite it. So put that witness on your B page
knowingly: it is doing real work for a later page even though nothing will ever
cite it. It is the $4\times4$ example with $\chi = (x-\lambda)^4$,
$m = (x-\lambda)^2$ and two different block structures.

**Sizing.** LA-10 estimates A 28 / B 16. If your harvest pushes the A page past
**60 items**, propose a split in your notes at step 2 — the natural cut is
triangularisation and generalised eigenspaces on one page, Jordan form and
similarity classification on another. Propose it early; after authoring it is a
rewrite.

`diagonalisation-and-the-minimal-polynomial` was built last run and carries
several items that were repaired at step 8 for citation over-extension. **Open
it on disk and read the Statements you intend to cite**, not the titles.

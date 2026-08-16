## This dispatch — refuter `c7-examples`, run `frontier-14`, batch 7

Read the items below in full, on disk at `items/<id>.md`, together with
every item each one names in its `deps` and cites in a `[F#]`/`[A#]`/`[L#]`
fact. The batch's proof contract is `research/frontier-14-batch-7.proof-contracts.json`;
its `boundaries` rows are claims you may falsify.

Page: `stone-weierstrass-general-examples` (B). Subject: worked examples and the
disc-algebra counterexample for Stone–Weierstrass.

**All four items were repaired minutes ago at step 6b.** Read what is on disk
now, not what a report describes. Concentrate on the repairs — a repair that
reproduces the defect it was meant to fix is the single most valuable thing you
can find here:

- `cex-disc-algebra-is-not-dense-without-self-adjointness` — the Statement now
  spells out the uniform closure; step 1.2 was rewritten to prove that
  polynomials are continuous, that $A$ is a complex function algebra (via a
  coefficient-sum bound on $D$), and that $A$ is uniformly closed; `[L9]` was
  changed from de Moivre to the exponential addition law and step 1.4 rewritten
  around it; step 1.5's induction was reindexed to start at the base case of
  `[L11]`; step 5.1 now argues continuity of conjugation. **Check every one of
  those estimates and the $ab-fg$ bound in particular.**
- `ex-trigonometric-polynomials-are-dense-on-the-circle` — `[L5]` was widened to
  quote the modulus laws the proof actually uses, and step 2.1 now proves the
  Laurent sums are continuous. Verify `[L5]` against
  `lem-complex-conjugation-and-modulus-laws` on disk — it must not claim more
  than that item states.
- `ex-two-point-duplication-algebra-and-its-quotient` — `[L3]` previously said
  `thm-heine-borel-r` gives a "compact topological subspace"; it now quotes the
  ambient-cover form and a new `[L4]` supplies the bridge
  `lem-compactness-of-a-subspace-is-ambient`. The tent function is now a
  pointwise minimum. Check the min really equals the two-branch formula and that
  it lies in the algebra.
- `ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval` — same
  compactness bridge, and $h(x)=|x-c|$ now has a continuity argument.

### Your items

- `cex-disc-algebra-is-not-dense-without-self-adjointness`
- `ex-trigonometric-polynomials-are-dense-on-the-circle`
- `ex-two-point-duplication-algebra-and-its-quotient`
- `ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval`

### Where this group's defects are most likely

- **The disc-algebra sampling argument, steps 2.1 to 4.1.** Recompute
  $N^{-1}\sum_k\zeta^k p(\zeta^k)$ yourself. Check the exponent range
  $j+1\in\{1,\ldots,m+1\}$ against $N=m+2$, check `[L8]` really applies to the
  exponent-one sum, and check the final $1\le\cdots<1$ contradiction. If $p$ is
  the zero polynomial or $m=0$, does the argument still run?
- **Degenerate parameters.** $a=b$ in the polynomial example (its Statement says
  $a<b$ — is that used?), $c$ at an endpoint in the tent, $N=2$ in the disc
  algebra, and the constant Laurent sum on the circle.
- **`ex-two-point-duplication-algebra-and-its-quotient` step 2.1** claims the
  only nonsingleton class is $\{0,1\}$. Try to find a pair it does not separate.
- **Every claim of the form "vanishes only at the two endpoints"** or "is
  strictly below 1 at the other point" — instantiate and check.

Report every finding in your final message, fatal first, per the brief above.

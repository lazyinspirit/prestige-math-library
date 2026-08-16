## This dispatch — refuter `c7-real`, run `frontier-14`, batch 7

Read the items below in full, on disk at `items/<id>.md`, together with
every item each one names in its `deps` and cites in a `[F#]`/`[A#]`/`[L#]`
fact. The batch's proof contract is `research/frontier-14-batch-7.proof-contracts.json`;
its `boundaries` rows are claims you may falsify.

Pages: `stone-weierstrass-general` (A) and `stone-weierstrass-general-examples` (B).
Subject: the real Stone–Weierstrass theorem, its nonunital dichotomy, and the
indistinguishability quotient.

### Your items

- `lem-uniform-closure-of-a-general-real-function-algebra-is-a-lattice`
- `thm-real-stone-weierstrass-general`
- `lem-nowhere-vanishing-algebras-approximate-the-constant-one`
- `cor-real-stone-weierstrass-nowhere-vanishing-form`
- `def-function-algebra-indistinguishability-quotient`
- `thm-closed-real-function-algebras-are-function-spaces-on-their-quotients`
- `ex-finite-space-function-algebras-interpolate-exactly`

### Where this group's defects are most likely

- **Unitality is load-bearing and easy to drop.** `thm-closed-real-function-algebras-are-function-spaces-on-their-quotients`
  needs a *unital* uniformly closed algebra: $A=\{0\}$ is a uniformly closed
  real function algebra whose quotient is a point but which is not
  $C(\text{pt},\mathbb R)=\mathbb R$. Check every step, the title, and the
  Statement for a place where unitality is used but not assumed, or assumed but
  not used.
- **Where the algebra is not unital.** `lem-uniform-closure-of-a-general-real-function-algebra-is-a-lattice`
  step 3.1 subtracts $q(0)$ precisely so that $p$ has zero constant term. Check
  that every polynomial substitution in that item and in
  `lem-nowhere-vanishing-algebras-approximate-the-constant-one` step 4.2 really
  lands in a possibly-nonunital algebra, and that the $M=0$ and $m=M$ boundary
  branches are correct.
- **`lem-nowhere-vanishing-algebras-approximate-the-constant-one` step 4.2**
  approximates $1/t$ on $[m,M]$. Verify $m>0$ is actually established, that the
  final estimate $h(x)\varepsilon/M\le\varepsilon$ holds at every point, and that
  the $\varepsilon$ quantifier order is right.
- **The empty space.** Four of these items open with an $X=\varnothing$ branch
  claiming the empty function is simultaneously the zero function, a constant
  function, and the constant one. Decide, once, whether that is true in this
  library's conventions, and say so concretely for each item that uses it.
- **`ex-finite-space-function-algebras-interpolate-exactly` has an `ai-generated`
  Statement.** Actively hunt a counterexample: the empty space, the one-point
  space, the complex case without self-adjointness, and a finite non-Hausdorff
  space. Check that step 1.2 really derives discreteness, and that `[L3]`'s use
  of `lem-finite-choice` matches what that item states.
- **`thm-closed-real-function-algebras...` step 2.2** claims pullback by a
  surjection preserves the uniform distance, with a parenthetical empty case.
  Check the isometry claim and the surjectivity argument in step 5.1.

Report every finding in your final message, fatal first, per the brief above.

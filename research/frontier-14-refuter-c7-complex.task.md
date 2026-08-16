## This dispatch — refuter `c7-complex`, run `frontier-14`, batch 7

Read the items below in full, on disk at `items/<id>.md`, together with
every item each one names in its `deps` and cites in a `[F#]`/`[A#]`/`[L#]`
fact. The batch's proof contract is `research/frontier-14-batch-7.proof-contracts.json`;
its `boundaries` rows are claims you may falsify.

Page: `stone-weierstrass-general` (A). Subject: the passage from the real
Stone–Weierstrass dichotomy to the complex self-adjoint theorem.

**These items were repaired minutes ago at step 6b.** Read what is on disk now,
not what a report describes. Four of the repairs are specifically in your scope
and each is a place a new defect could have been introduced:

- `lem-real-part-of-a-self-adjoint-complex-function-algebra` — the **title** was
  changed to add "point-separating". Check the title, the Statement and the
  proof against each other.
- `cor-self-adjoint-algebra-generated-by-a-separating-family-is-dense` — a fact
  line that mis-cited `def-complex-metric-convergence-and-continuity` for a
  claim about $C(X,\mathbb C)$ was **deleted**, the remaining facts renumbered,
  and step 2.1 rewritten to lean on `[L1]` alone. Check that no step now cites a
  fact it does not have, and that the density conclusion really is `[L1]`'s.
- `thm-real-stone-weierstrass-dichotomy-for-separating-algebras` — the
  unitization $A^+$ was previously used in a step before it was defined; it is
  now constructed in step 1.3. Check that the construction is correct, that
  $A^+$ really is an algebra, that the case split is exhaustive and exclusive,
  and that every $\varepsilon$ estimate closes.

### Your items

- `def-self-adjoint-complex-function-algebra`
- `lem-real-part-of-a-self-adjoint-complex-function-algebra`
- `thm-complex-stone-weierstrass-self-adjoint`
- `cor-self-adjoint-algebra-generated-by-a-separating-family-is-dense`
- `thm-real-stone-weierstrass-dichotomy-for-separating-algebras`

### Where this group's defects are most likely

- **`lem-real-part-...` step 2.1** asserts $u=\operatorname{Re}f$ and
  $v=\operatorname{Im}f$ and then says an inequality is "consistent with their
  continuity". Decide whether continuity of $u,v$ as maps into $\mathbb R$ is
  actually established, and whether $A_{\mathbb R}\subseteq C(X,\mathbb R)$
  follows.
- **`thm-complex-stone-weierstrass-self-adjoint` steps 2.1–4.1** move between
  the real and complex alternatives. Check that the common-zero set really
  transfers, that step 4.1's converse inclusion is proved and not assumed, and
  that "exactly one of the following" is genuinely exclusive on a nonempty $X$.
- **`def-self-adjoint-complex-function-algebra`** says $C(X,\mathbb C)$ is
  "equipped with the metric of `def-complex-metric-convergence-and-continuity`".
  Open that definition: is the metric it defines a metric on $\mathbb C$ or on
  the function space? Say plainly whether the definition is defective and
  whether anything load-bearing rests on the difference.
- **The empty space and the one-point space** in every item here.

Report every finding in your final message, fatal first, per the brief above.

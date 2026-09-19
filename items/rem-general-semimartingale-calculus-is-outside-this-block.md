---
id: rem-general-semimartingale-calculus-is-outside-this-block
kind: remark
title: "General semimartingale calculus is outside this block"
status: draft
origin: pipeline
deps: [def-continuous-brownian-ito-process, def-quadratic-covariation-of-brownian-ito-processes, def-quadratic-variation-along-a-partition-sequence, thm-ito-formula-one-dimensional, thm-multidimensional-ito-formula-for-brownian-driven-processes, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Aad van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Sections 5.8-5.9"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Remark

The development on this page covers **continuous Brownian-driven Ito
processes** only: processes of the form
$X_t=X_0+\int_0^tb_s\,ds+\int_0^t\sigma_s\,dB_s$
[[def-continuous-brownian-ito-process]], their quadratic covariation along
deterministic partition sequences
[[def-quadratic-covariation-of-brownian-ito-processes]]
[[def-quadratic-variation-along-a-partition-sequence]], and the one- and
multidimensional Ito formulas [[thm-ito-formula-one-dimensional]]
[[thm-multidimensional-ito-formula-for-brownian-driven-processes]].

**Outside the block.** The following are not defined, proved or used here, and
none of the statements on this page may be quoted as covering them:

1. Ito formulas with jump terms and integration with respect to discontinuous
   semimartingales or compensated random measures;
2. stochastic integration against a general continuous local martingale or a
   general semimartingale, and the corresponding covariation theory; the
   Brownian integral of this block is not a general stochastic integral;
3. the Burkholder--Davis--Gundy inequalities and the predictable quadratic
   variation $\langle M\rangle$, which are distinct from the realized
   partition-limit objects used here;
4. change of measure (Girsanov theory) and exponential tilting beyond the
   explicit exponential Brownian martingale;
5. existence and uniqueness theory for stochastic differential equations;
6. Tanaka's formula, local time, and reflection-type decompositions;
7. stochastic differential geometry, stochastic flows and manifold-valued
   diffusions.

**Boundary of the covariation definition.** The symbol $[X,Y]$ used on this
page is defined by limits along *deterministic* partition sequences with mesh
tending to zero, and only when one common limit arises for every such sequence
[[def-quadratic-covariation-of-brownian-ito-processes]]. Results stated for
that convention do not automatically transfer to random, path-adapted or
non-vanishing-mesh partitions, and no such transfer is claimed.

No proof is attached: this remark records the scope boundary of the preceding
constructions rather than a mathematical assertion.

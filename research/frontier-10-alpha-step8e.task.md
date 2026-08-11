# This dispatch — final round. Close, repair once, or park. Then attest one item.

The owner has authorised publication and is waiting. Two items remain, **both
rejected by Terra only — DeepSeek cleared both.**

## 1. `cor-planar-simple-graph-edge-bound`

> Terra: *"Step 1.1 uses the uncited fact that a tree on n vertices has n minus 1
> edges. Neither L1 nor L2 establishes this, so the tree case is not licensed."*

**`cor-tree-edge-count` exists in the library.** If step 1.1 genuinely uses that
fact, this is `dependency_citation` fatal and the repair is to cite it. If the
tree case is not actually load-bearing, close it.

## 2. `rem-riemann-stieltjes-conventions-and-scope`

> Terra: *"The finite-step claim omits continuity at each jump: the companion
> common-jump counterexample is a one-step integrator for which the integral does
> not exist."*

**`cex-common-jump-prevents-riemann-stieltjes-integrability` exists.** Read it. If
it really is a one-step integrator that refutes the finite-step claim as written,
the claim needs its missing hypothesis and this is fatal. If the claim already
excludes that case, close it.

## Choose per item

1. **Close** — `confirmed_nonfatal` or `false_positive`, no mutation, no rejudge.
   Terra-only findings closed as nonfatal repeatedly in this run and DeepSeek
   cleared both of these; do not repair to be safe.
2. **Repair once** — only with a concrete fatal defect named.
3. **Park** — drop from publish scope and report what would finish it.

**No further round.** A repair rejected again parks automatically.

## Then: attest one item for the audit receipt

`research/frontier-10-audit-coverage.new.json` is the regenerated template. Its
only delta from the receipt you already issued is **one added item in both
`item_scope` and `proof_scope`: `lem-plane-triangulation-is-connected`**, the
connectedness lemma built after the pause at the owner's direction.

**That item has never been reader-audited or refuted** — it is the one piece of
this run outside the audited scope. Read it properly: proof steps, dependency
citations, boundary cases (exactly three vertices, the outer face), title against
content. Then fill the template's reviewer and attestation fields, carrying your
prior dispositions forward for the unchanged 584, and write it to
`research/frontier-10-audit-coverage.json`.

If that lemma does not survive your reading, say so — it is better to hear it now
than after publication.

Baseline `pre-step8e`; every adjudication row needs `item_sha256`. Report changed
items so I rejudge exactly those.

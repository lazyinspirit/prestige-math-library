# Batch 50 authoring notes — preconditioner algorithms and residual metrics

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: beta  
Batch dependency level: 3; prerequisite batches: 2, 18, 34.  
Dispatch scheduling input SHA-256: `b4e9601f3418e4d869380ba1f3d5167eb5d371b0e951d6d71837e622197c44a5`.  
Dependency artifact input SHA-256: `1abea6443c3532c0d0dd6716027d13701671f13ed52e434cfb52b7a38390868a`.

## Item inventory and levels

Levels are computed from logical item dependencies in the batch manifest. Page
`requires` edges are placement/context edges and do not raise an item level.

| Item | Page | In-run suppliers | Level |
|---|---|---|---:|
| `ex-left-preconditioned-residual-can-understate-physical-residual` | B | none | 0 |
| `alg-ilu0-fixed-pattern-factorization` | A | batch 2 `def-csr-matrix-with-stored-entry-semantics` | 1 |
| `thm-ilu0-factor-pattern-and-work-counts` | A | ILU(0) algorithm; batch 2 CSR definition | 2 |
| `ex-ilu0-tridiagonal-factorization` | B | ILU(0) algorithm; batch 2 CSR definition | 2 |
| `cex-ilu0-product-can-create-fill-outside-input-pattern` | B | ILU(0) algorithm; batch 2 CSR definition | 2 |
| `alg-flexible-gmres-variable-right-preconditioning` | A | none | 0 |
| `thm-flexible-gmres-residual-minimization-on-actual-preconditioned-span` | A | local flexible-GMRES algorithm | 1 |

The A page has four items and the B page has three, within the 100-item page
cap. The new FGMRES items define a finite exact-arithmetic method and prove
minimization over the actual vectors $z_j$; they assert no fixed-preconditioner
spectral result or convergence guarantee.

## Controlling design and conflicts

The controlling design is NA-06 in
`research/plan-numerical-linear-track.md`, read together with its incorporated
NA-06 appendix in
`research/numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`.
The current owner direction explicitly selects the category plan and its exact
mathematical-contract appendix for authoring; this repaired contract therefore
controls the broader NA-06 presentation in
`research/plan-numerical-analysis-track.md` L88–100 and the earlier `plan-spec`
summary wherever wording differs.

The broader NA-06 prose promises reuse of a flexible-GMRES condition, while the
repaired scope makes its variable-preconditioner interface conditional on being
promised and not already covered. A repository search found no existing FGMRES
item; batch 34 supplies standard GMRES material but has no flexible-GMRES item.
Because the broad plan does promise this interface, this pair adds a local
definition and a complete residual-minimization theorem. They use the actual
span of the per-step vectors $z_j$ and do not import a batch-34 proof or any
fixed-$M$ spectral claim. Saad, §9.4.1, printed pp. 287–289, was read in full
for the algorithm and its minimization argument.

The audit's stronger output claim `pattern(LU) \subseteq P` is false for
standard ILU(0). The factor-pattern theorem therefore proves only the true
factor-slot statement and is marked `escalated`; the B-page counterexample
records the exact defect. For
$$A=\begin{pmatrix}1&1&0\\0&1&0\\1&0&1\end{pmatrix},$$
all pivots are $1$ and the fixed-pattern recurrence returns
$$L=\begin{pmatrix}1&0&0\\0&1&0\\1&0&1\end{pmatrix},\qquad
U=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}.$$
Then $(LU)_{32}=1$ although $A_{32}=0$. Saad §10.3.2 and Templates §3.4.2
both distinguish retained factor slots from product fill. Proposed owner
resolution: amend the controlling contract to require only the stored slots of
$L$ and $U$ to lie in $P$, with an explicit caveat that $LU$ can have fill;
the affected item is `thm-ilu0-factor-pattern-and-work-counts`, placed on the A
page. No plan or audit file was edited.

The row-oriented update order in the local algorithm matches the audit's
left-looking pattern-intersection formula in exact field arithmetic. For a
fixed target slot $(i,j)\in P$, the row algorithm updates it precisely for
indices $k$ satisfying $(i,k),(k,j)\in P$ and $k<i$, $k<j$. If $i>j$, these
conditions reduce to $k<j$ and the final division gives
$$L_{ij}=\frac{a_{ij}-\sum_{k<j,\ (i,k),(k,j)\in P}L_{ik}U_{kj}}{U_{jj}}.$$
If $i\le j$, they reduce to $k<i$ and the final stored value is
$$U_{ij}=a_{ij}-\sum_{k<i,\ (i,k),(k,j)\in P}L_{ik}U_{kj}.$$
These are the declared nested-order formulas on the existing pattern; the
algorithm performs no pivoting or reordering. The remaining audit defect is
the false product-pattern clause above, not the loop ordering.

`plan-spec.json` summarizes NA-06 conditionally for the flexible-GMRES
interface and only fixed-pattern ILU(0). The richer existing plan promise is
preserved by the local FGMRES pair; the local item does not duplicate the
published residual maps, SPD-preconditioned CG theorem, or condition-number
counterexample.

## Prerequisites and cross-batch state

- Batch 2: inspected the complete current `def-csr-matrix-with-stored-entry-semantics`
  definition and its ready Step-1 record. Canonicality excludes duplicates and
  stored zeros, so $s=\operatorname{nnz}(A)$; this is the only logical item
  supplier from batch 2 used here. No batch-2 matvec or graph theorem is
  imported.
- Batch 18: inspected the stationary-iteration A page and manifest. It is
  declared page context only; no batch-18 item is a logical dependency.
- Batch 34: inspected its current Krylov A page and manifest. The run snapshot
  still listed the page as in flight, so no item proof, excerpt, or acceptance
  is claimed. Its page-context edge remains `open` in the cross-batch ledger.
  Neither local FGMRES item imports a batch-34 item.
- Published preconditioning page: read the four named items in full—left/right/
  SPD preconditioning definition, explicit residual-map proposition,
  SPD-preconditioned CG theorem, and the condition-number counterexample.
  Residual maps and the worsening example are reused from that canonical page.
- Other external suppliers read in full include the field, complex field,
  matrix product, coordinate inner-product/norm, finite-dimensional least
  squares, span, and forward/back substitution definitions/results listed in
  the item dependency arrays and proof contracts.

The complete item-level and page-context edge evidence is in
`research/numerical-optimization-dynamics-2026-10-16-batch-50.cross-batch-dependencies.json`.

## Sources and dispositions

1. Yousef Saad, *Iterative Methods for Sparse Linear Systems*, 2nd ed.,
   <https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf>.
   Downloaded the complete 567-page text; read Chapter 9 §§9.1–9.6, printed
   pp. 275–296 (PDF pp. 295–316), and Chapter 10 §§10.1–10.8, printed
   pp. 297–368 (PDF pp. 317–388). Direct items: residual comparison;
   variable-right FGMRES recurrence and residual minimization; fixed-pattern
   ILU(0) recurrence, pivot status, factor slots, and product-fill distinction.
   The full per-section dispositions and verified fetch stamp are in the
   coverage JSON.
2. Richard Barrett et al., *Templates for the Solution of Linear Systems*,
   2nd ed., <https://www.netlib.org/templates/templates.pdf>. Downloaded the
   complete 117-page text; read §3.1.2, printed pp. 35–36 (PDF pp. 45–46), and
   §§3.4.1–3.4.2, printed pp. 38–41 (PDF pp. 48–51). It independently supports
   left/right residual distinctions, triangular application, pivot breakdown,
   and the factor-slot/product-fill distinction.

Both sources were retrieved and inspected as full texts. The initial
`source-fetch-check --stamp` pass newly stamped 2/2 sources; the final stamp
check reports 2/2 verified, 2/2 resolved, zero drops, and zero newly fetched
sources. No retrieval failed; no `source_resolution` record is needed.

The proof statements use exact field/complex arithmetic. They claim neither
finite-precision stability, an ILU factorization identity $LU=A$, a product
pattern inclusion, nor convergence or quality improvement for a Krylov method.

## Scoped checks and Step-1 decisions

Final scoped results after the last item, page, manifest, and proof-contract
edits:

| Check | Result |
|---|---|
| `node tools/tsx-run.mjs tools/precheck.mts` on the five proof-bearing items | Pass: 5 checked, 0 failing |
| `node tools/proof-layout.mjs` on the seven changed items | Pass: 7 items, 24 steps, 0 defects |
| Strict batch proof-contract check | Pass: 5/5 proof-bearing items, 0 errors, 0 warnings |
| `rendercheck` on seven items and both A/B pages | Pass: all 9 files; math and frontmatter render |
| Batch content policy | Pass: 7 items, 0 errors, 0 warnings |
| Final `source-fetch-check --stamp` | Pass: 2/2 sources verified and resolved, 0 drops |
| Dependency levels with prerequisite batch 2 plus batch 50 | Pass: 19 items, 0 errors; batch-50 levels match the table above |
| Manifest/carrier consistency | Pass: both page inventories and all seven dependency arrays match |

The full-run dependency scan remains nonzero outside this assignment: 90 errors
at the final run (86 empty page inventories and four stale item-level labels;
zero cycles). The four stale labels are
`thm-na-clenshaw-curtis-interpolation-coefficients`,
`def-na-clenshaw-curtis-quadrature`,
`thm-na-clenshaw-curtis-exactness-and-near-best-error`, and
`ex-na-clenshaw-curtis-integrates-quadratics`. Those pairs are outside batch 50;
the batch-2-plus-50 scoped check passes.

Step-1 records, written without `--owner`, are `ready` for
`alg-ilu0-fixed-pattern-factorization`,
`alg-flexible-gmres-variable-right-preconditioning`,
`ex-left-preconditioned-residual-can-understate-physical-residual`,
`thm-flexible-gmres-residual-minimization-on-actual-preconditioned-span`,
`ex-ilu0-tridiagonal-factorization`, and
`cex-ilu0-product-can-create-fill-outside-input-pattern`. The record for
`thm-ilu0-factor-pattern-and-work-counts` is `escalated` with the false
product-pattern clause, witness, and proposed owner resolution above. The
batch-34 page-context edge remains open; no batch-50 item claims an item-level
dependency on its in-flight proofs.

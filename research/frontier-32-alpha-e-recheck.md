# frontier-32 — Alpha group `e` — Step 3 scaffold recheck

Rechecked the current manifests, coverage records, live plan entries, group
assignment, and the Step-3 fix-pass notes for batches 8, 10, and 18. Group
`e` owns exactly those batches.

## Finding dispositions

| finding | disposition | current-byte evidence |
|---|---|---|
| E18-1 — the fixed-function Morse--Smale residuality theorem lacked a Sard--Smale/Fredholm route. | **closed — accepted** | Batch 18 now has the backward chain `def-fredholm-maps-and-regular-values-on-countable-banach-manifolds` → `thm-sard-smale-residual-regular-values-for-fredholm-maps` → `lem-universal-metric-trajectory-projection-is-fredholm` and `lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics`; the fixed-function theorem depends on that chain, not on finite-dimensional `thm-parametric-transversality`. The current coverage maps Smale §1/Theorem (1.3) to the Fredholm residual-regular-values result and Abbondandolo--Majer §2.12, Theorem 2.19, and Lemmas 2.21--2.25 to the universal-projection and Baire-passage interfaces. The stated finite differentiability, countable-base, residual, and smooth-metric Baire qualifications are retained. |
| E18-2 — the noncompact index-one counterexample lacked an explicit complete source-backed witness. | **closed — accepted** | The claim is now the global locus $\mathcal M_1(X)=\coprod_{\lambda(p)-\lambda(q)=1}\mathcal M(p,q)$, not a fixed-endpoint infinitude claim. Cieliebak--Frauenfelder's Introduction example supports the countable-disjoint-union/one-trajectory pattern; the manifest coverage expressly records that the locally normalized field is a separate checked construction. On $\mathbb R_n$, the current fix pass uses $f_n=n(3x-x^3)/2$ and patches the bounded descending field $Y_n=-f_n'/(1+(f_n')^2)\partial_x$ with $X_{+,n}=2u/u'\partial_x$ and $X_{-,n}=-2v/v'\partial_x$, for $f_n=n-u^2=-n+v^2$ near $1$ and $-1$. Thus $X_nu=2u$ and $X_nv=-2v$ on the critical neighbourhoods, exactly satisfying `def-downward-gradient-like-vector-field`; all three summands strictly decrease $f_n$ away from critical points. The patched field is bounded, hence complete on each $\mathbb R_n$; $W^u(p_n)\cap W^s(q_n)=(-1,1)$ is one time-translation orbit, and the countable disjoint union gives an infinite discrete global index-one locus. |

## Verification of the remaining fix-pass records

- Batch 8's pushbacks remain correct: E18-1 and E18-2 belong solely to Batch
  18. Its retained false-statement witness is sound: the bounded complexes of
  finitely generated free abelian groups with even Euler characteristic form a
  triangulated subcategory, while $\mathbb Z[0]\oplus\mathbb Z[0]$ is in it
  and has the excluded retract $\mathbb Z[0]$.
- Batch 10 has no numbered finding. Its incidence-number definition remains
  backward-only through oriented reduced integral homology, including
  $\widetilde H_0(S^0;\mathbb Z)$, and the cellular-approximation harvest row
  still defers to the later live page
  `hurewicz-whitehead-freudenthal-and-cw-approximation` at order `366.023`.

## Scope decisions and focused validation

`scope-decisions refresh --run frontier-32 --group e` retained all 47 current
decline decisions with no pending row. `scope-decisions check --run frontier-32
--group e` then reported 47 current declines and 0 errors. In particular, the
Batch 18 compactness/counting material remains deferred to
`morse-trajectory-moduli-spaces-and-the-morse-differential` at order `533`,
after this pair at orders `523`--`524`.

Focused current-byte checks passed:

- `manifest-deps`: Batch 8 — 53 items; Batch 10 — 35 items; Batch 18 — 25
  items; all with 0 errors.
- `coverage-checklist --require-destination`: Batch 8 — 106 rows; Batch 10
  — 43 rows; Batch 18 — 64 rows; all with 0 errors and 0 warnings.
- `validate-plan.mjs research/plan-spec.json`: exit 0; declared page order is
  acyclic and consistent, with no item-level cycle, forward-reference,
  B-page-dependency, or unresolved-ID error among pages with item lists.

## Current verdicts

| A page | batch | verdict |
|---|---:|---|
| `triangulated-categories` | 8 | sufficient |
| `cw-complexes-and-cellular-homology` | 10 | sufficient |
| `stable-unstable-manifolds-and-morse-smale-transversality` | 18 | sufficient |

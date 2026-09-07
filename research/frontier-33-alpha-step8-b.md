# Step 8 adjudication — group b

Run: `frontier-33`  
Batches: `2`, `12`  
Pages read in full: `dual-spaces-adjoint-operators-and-annihilators`, `dual-spaces-adjoint-operators-and-annihilators-examples`, `maximum-principles-harnack-and-liouville-in-rn`, `maximum-principles-harnack-and-liouville-in-rn-examples`  
Owned items read in full: 77 of 77

The current page files, all 77 owned item files, the Step-7 digest, and every direct dependency of a rejected item were read. The Step-7 digest has no concerns or alerts. No rejection exposed a cross-group or published-item defect. No web source was needed: each disputed point is settled by direct typing or scalar algebra in the current item and dependency text.

## Adjudications

| Item | Exact rejection | Pre-edit guard SHA-256 | Outcome | Decision |
|---|---|---|---|---|
| `cex-unbounded-punctured-harmonic-singularity-is-not-removable` | `gpt-5.6-terra` / `b56517554437cfa7a126d143a203d079df71fe2c395b5623c683b40b1e1608d3` | `2ab0718d6beca9a0223e14cd4977fd895a6b886e4fa06ddfdd144710f777d097` | `confirmed_fatal` (`logic`) | Step 2.1 falsely said that both profiles have signed ratio one to the dependency's critical profiles. In dimension two, `log|x| / log(1/|x|) = -1`; only its absolute value is one. |
| `cor-transpose-preserves-invertibility` | `gpt-5.6-terra` / `be6202acc47eab77c58f8d3d0988745cccfb499e502faba0f5e7a9a3ddd4ff76` | `17296366b9159d0c327b446a1ab689aab5416cc6e7759e366ce99b1dc7ea06b8` | `confirmed_nonfatal` | The rejection correctly notices that step 1.2 omits `F4` from its trailing support tag. But `F4` explicitly states that `T*` is bounded, and the boundedness also follows immediately from its displayed definition. This is an immediately closable proof-step citation gap, not a false claim or inference. The fatal-only rule licenses no edit. |
| `lem-transpose-reverses-composition` | `gpt-5.6-terra` / `e93943cb31181619aff28d630dfa2f8f437c505310dfddb0f64aa1bb93835e96` | `4f017b81431c3d2127e77b2f68e40754d30ee4271a9c1da877b0925a5641b59c` | `confirmed_fatal` (`other`) | The final statement quantifies only over bounded maps `T,U:X→Y`; for bounded nonlinear maps the transpose expressions are undefined. The claim therefore needs an explicit linearity hypothesis. |

## Repairs and evidence

### `cex-unbounded-punctured-harmonic-singularity-is-not-removable`

- Repaired only proof step 2.1. It now records signed ratio `-1` for `n=2`, signed ratio `1` for `n≥3`, and absolute ratio one in both cases.
- Dependency checked: `items/cor-removable-singularity-for-bounded-harmonic-functions.md`, statement and steps 2.1–4.1. It supplies the critical profiles `log(1/|x-p|)` in dimension two and `|x-p|^{2-n}` in higher dimensions, making the ratio computation exact.
- Current item checked: `items/cex-unbounded-punctured-harmonic-singularity-is-not-removable.md`, statement and counterexample steps 1.1–2.1. The radial harmonicity calculation and nonremovability conclusion remain unchanged.
- Post-repair guard SHA-256: `72d6cbc6ae25c71f1fab25f543d4e8a117b8d47b7671bf515575fb00a962790e`.
- Focused precheck: pass.
- Rejudge target: `cex-unbounded-punctured-harmonic-singularity-is-not-removable`.

### `lem-transpose-reverses-composition`

- Repaired only the last sentence of the statement, changing “bounded `T,U`” to “bounded linear `T,U`.” The operator identity and proof are unchanged.
- Dependency checked: `items/def-transpose-of-a-bounded-operator.md`, definition. It defines `T*` only for bounded linear operators and fixes the bilinear complex-dual convention.
- Current item checked: `items/lem-transpose-reverses-composition.md`, statement and proof steps 1.1–2.1. Evaluation proves the reversed composition, identity, and linear-combination formulas under the repaired hypotheses.
- Post-repair guard SHA-256: `dccd68f545566860bff28d40f44ef4c12e0f905f326f8526be7139f4fdfdc855`.
- Focused precheck: pass.
- Rejudge target: `lem-transpose-reverses-composition`.

### `cor-transpose-preserves-invertibility`

- No content, contract, impact, or judge change made.
- Dependencies checked: `items/thm-surjective-iff-transpose-is-bounded-below.md`, `items/thm-bounded-below-iff-transpose-is-surjective.md`, `items/lem-transpose-reverses-composition.md`, `items/lem-transpose-is-bounded-and-has-the-same-norm.md`, `items/thm-bounded-inverse-theorem.md`, and `items/thm-bounded-operator-space-is-banach.md`.
- Exact support: the item’s `F4` says `T*:Y*→X*` is bounded with `||T*||=||T||`; `F6` makes both dual spaces Banach; `F5` then applies to the assumed bijective `T*`. The rejection identifies only the missing `F4` tag on step 1.2.

## Alerts, scope additions, and blockers

- Step-7 reader warnings: none.
- Incoming or outgoing cross-group alerts: none.
- Published-item repairs: none.
- New supporting lemmas or scope additions: none.
- Blockers: none.

## Validation

- Focused precheck of both repaired items: pass, 2 checked and 0 failing.
- Focused rendercheck of both repaired items: pass, 2 checked with valid YAML, KaTeX, and delimiters.
- Step-8 guard: pass. The `pre-step8` baseline had exactly 2 changed items; 2 of 2 changes were licensed by exact `confirmed_fatal` adjudications.
- Step-8 scope check: pass. It reports 8 groups, 923 partitioned items, 99 routed rejection rows, and 0 of 0 reader warnings/alerts requiring disposition.
- Defect-ledger check for `frontier-33`: pass, 600 run rows checked and 0 errors.

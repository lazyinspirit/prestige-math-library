# Step 3b helper b-1 Wu continuation checkpoint and handoff

Run `phase-2-next-21`; pair `bocksteins-steenrod-squares-and-cohomology-operations` / `bocksteins-steenrod-squares-and-cohomology-operations-examples`.

Exclusive authored artifacts in this continuation:

- `items/ex-wu-classes-of-a-closed-surface.md`
- `library/algebraic-topology/bocksteins-steenrod-squares-and-cohomology-operations-examples.md`
- this helper report

No shared manifest, coverage, dependency input, proof-contract, decision,
plan/prose, group report, published item, or defect-ledger file was edited.

## Verified starting state and sources

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the dedicated continuation task,
  both Batch-5 manifest rows for this pair, all authored Bockstein A items, all
  six already-authored companion examples, the previous b-1 local-coefficients
  handoff, the complete local-coefficient A proof chain, and
  `research/phase-2-next-21-wu-repair-analysis.md`.
- The two target files and this continuation report were absent at dispatch.
  The repository contained extensive unrelated in-flight changes, all left
  untouched.
- The owner analysis was treated as a route to check, not as a proof. The live
  local-coefficient conventions control: coefficients occur at the first
  vertex; local cochains transport the zeroth face backward; and for a
  degree-$p$ cochain,
  `partial(phi cap C)=(-1)^p(phi cap partial C-delta phi cap C)`.
- Complete authoritative source passages consulted:
  - Ranicki, *Algebraic and Geometric Surgery*, Definition 4.1(iii), Remark
    4.2, and Proposition 4.3(ii), printed page 49,
    <https://webhomes.maths.ed.ac.uk/~v1ranick/books/surgery.pdf>. This states
    the orientation-character identity and orientability criterion but was not
    substituted for the required chain proof.
  - Hatcher, correction to the last two paragraphs of *Algebraic Topology*
    page 335, complete one-page correction,
    <https://pi.math.cornell.edu/~hatcher/AT/Pduality.pdf>. This controls the
    twisted fundamental class and corrected constant/orientation-coefficient
    duality typing.
  - Davis--Kirk, *Lecture Notes in Algebraic Topology*, Chapter 5 Section 2.2,
    printed pages 100--103, for orientation characters and twisted duality.
- The scaffold's Mosher--Tangora Chapter 4 Section 1 locator is wrong for this
  claim and must be replaced in shared metadata.

## Item checkpoint: `ex-wu-classes-of-a-closed-surface`

### Claim and conventions

Assuming AC, for a nonempty closed connected topological surface $M$, the
orientation-transport signs on singular edges define a choice-independent
class $w_1(M)$. The item proves

`v_0=1`, `v_1=w_1(M)`, and `v_i=0` for `i>1`, with `v_1=0` if and only if
`M` is orientable.

The positive Bockstein and positive cochain differential conventions are used.
With the local cap convention, the load-bearing sign is

`partial(c cap_q C)=-(delta c) cap_q C=-2(b cap_q C)`;

hence the lift-and-divide cycle is `W=-b cap_q C`. This corrects the unsigned
placeholder in the owner analysis.

### Exact dependencies proposed for the shared manifest

1. `def-wu-classes-of-a-closed-manifold`
2. `prop-first-steenrod-square-is-the-mod-two-bockstein`
3. `prop-steenrod-square-normalization-instability-and-top-square`
4. `def-bockstein-connecting-operation`
5. `def-orientation-local-system-and-orientation-cover`
6. `prop-the-manifold-orientation-system-is-a-local-system`
7. `def-singular-and-cellular-chain-complexes-with-local-coefficients`
8. `lem-twisted-boundaries-square-to-zero-and-are-independent-of-lift-bases`
9. `lem-canonical-twisted-fundamental-classes-over-compact-subsets`
10. `def-cup-and-cap-products-with-local-coefficient-pairings`
11. `def-fundamental-class-of-a-compact-oriented-manifold`
12. `def-singular-cochain-complex-with-coefficients`
13. `def-axiom-of-choice`

The scaffold dependency
`thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`
is not used and should be removed. Dependencies 6--10 are supplied by the
later local-coefficients A page, so the earlier B page needs the page-level
forward-reference whitelist recorded below.

### Proof derivation and proposed contract

- Step 1.1: functoriality around a singular two-simplex gives
  `epsilon_02=epsilon_01+epsilon_12`, hence `delta epsilon=0`.
- Step 2.1: replacing `e_x` by `(-1)^t(x)e_x` changes `epsilon` by `delta t`.
- Step 3.1: for the local zero-cochain `c(x)=e_x`, the first-vertex formula
  gives `delta c=2b`; explicitly `b=0` on preserving edges and `b=-e_v0` on
  reversing edges. Torsion-freeness gives `delta b=0`, and canonical reduction
  sends `b` to `epsilon`.
- Step 4.1: the canonical pairing `q:O tensor O -> Z` and a finite canonical
  twisted fundamental cycle `C` give `Z=c cap_q C`. Reduction of `C` has the
  canonical nonzero local values, so it represents `[M]_2`, and `Z` reduces to
  the same cycle.
- Step 5.1: the exact cap-boundary sign gives `partial Z=2W` for
  `W=-b cap_q C`; torsion-freeness makes `W` a cycle, and reduction gives
  `bar W=epsilon cap bar C`.
- Step 6.1: for the zero/one integral lift `a-hat` of a mod-two one-cocycle,
  write `delta a-hat=2h`. Its mod-four reduction represents `Sq^1(x)`. The
  integer equality `2h(Z)=a-hat(partial Z)=2a-hat(W)` gives
  `<Sq^1 x,[M]_2>=<x,[bar W]>`.
- Step 7.1: the explicit front-edge/back-edge cap formula identifies this with
  `<w_1 cup x,[M]_2>`. The top-square supplier then gives the self-intersection
  version; Wu's formula was not assumed.
- Steps 8.1--9.1: perfect-pairing uniqueness gives `v_1=w_1`; the Wu
  definition supplies `v_0=1`, `v_2=0`, and all out-of-range vanishings.
- Step 10.1: a global orientation makes `epsilon` a coboundary. Conversely, a
  primitive changes the chosen generators so every path transport preserves
  them; comparison on path-connected chart balls proves that the resulting
  pointwise section is continuous and hence is an orientation.
- Step 11.1: closes the nonempty/connected/boundaryless/dimension-two,
  zero-class, degree-endpoint, degenerate-simplex, torsion-free division, and
  choice cases.

Proposed proof-contract `citations` are exactly `[F1]`--`[F10]` and `[A1]` in
the item; proposed `uses` and derivation `inputs` are exactly the same-line
tags on Steps 1.1--11.1. Boundary flags should record: `empty` and
`disconnected` excluded by hypothesis; `zero` covered in Step 11.1;
`one/degree-zero` and `endpoints` covered in Steps 9.1 and 11.1; `degenerate`
covered in Steps 1.1 and 11.1; `nonempty-choice` covered by `[A1]` and Step
11.1. Both directions of the orientability biconditional are proved in Step
10.1.

### AC expenditure

AC is charged directly, not merely propagated: it chooses one of the two
generators in every stalk `O_x`, a set-indexed family. AC is separately
inherited by the perfect pairing in the Wu-class supplier. The finite cycle
representative, a primitive for one given coboundary, and one chart at a time
are single existential instantiations and do not add family choice.

### Item-level checks

- Explicit-path precheck:
  `node tools/tsx-run.mjs tools/precheck.mts items/ex-wu-classes-of-a-closed-surface.md`
  passes (`direct`).
- Mathematical obligation: none presently open in the item. The lead must
  inspect the coefficient reduction and cap sign before accepting it.

## B-page checkpoint

The authored page lists exactly the seven selected examples in manifest order:

1. `ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space`
2. `ex-steenrod-squares-on-real-projective-space`
3. `ex-steenrod-squares-on-complex-projective-space-mod-two`
4. `ex-adem-relation-sq-one-sq-one-equals-zero`
5. `ex-wu-classes-of-a-closed-surface`
6. `cex-the-top-square-formula-does-not-define-all-lower-squares`
7. `cex-steenrod-squares-are-not-integral-cohomology-operations`

Its narrative accurately records: the integral and mod-two projective
Bocksteins; the real and complex projective binomial formulas and their
truncations/parity; the choice-free Bockstein proof of `Sq^1 Sq^1=0`; the
twisted-chain surface Wu calculation; the suspended-projective-space versus
sphere lower-square counterexample; and the failure of an integral lift for
`Sq^2` while `Sq^1` retains the integral Bockstein lift.

The reader-facing paragraph explicitly says that the Wu proof draws on the
later local-coefficients treatment. The shared Batch-5 B-page row must add

```json
"forwardRefs": ["local-coefficients-twisted-homology-and-duality"]
```

while retaining its sole `requires` entry
`bocksteins-steenrod-squares-and-cohomology-operations`. The later page is a
whitelisted leaf-only forward citation, not an ordinary prerequisite and not a
new dependency of any other example.

## Exact shared changes proposed to group b

1. Replace the Wu manifest statement by the authored scoped statement:
   explicitly assume AC; take `M` nonempty, closed, connected, topological,
   and two-dimensional; define the generator-dependent edge cocycle and assert
   choice independence; retain all promised values and the orientability
   biconditional.
2. Replace the Wu dependency array by the thirteen-item ordered set above.
   In particular, add the five later local-coefficient suppliers numbered
   6--10 and remove the unused topological UCT supplier.
3. Replace the scaffold strategy by the complete Steps 1.1--11.1 derivation
   recorded above. The proof provenance should be `ai-altered`, not
   `literature-derived`, because the local signed-chain argument and its exact
   conventions were constructed and checked here.
4. Replace Mosher--Tangora Chapter 4 Section 1 by the three source entries in
   the item, led by Ranicki's exact printed-page-49 locator. Amend the AT-9 plan
   prose/source locator correspondingly; do not leave the known-wrong locator
   in shared metadata.
5. Add the B-page `forwardRefs` array exactly as shown. Do not add the later A
   page to `requires` and do not change the B-page leaf status.
6. Add the Wu proof-contract row with citations, derivations, inputs, boundary
   flags, AC use, and biconditional directions exactly as specified in this
   report and in the item's same-line tags. No contract is proposed for the
   prose-only B page.
7. Splice the newly authored item and page into the normal group-b inspection,
   focused author check, scope/item decisions, dependency closure, and Step-3b
   report. Those shared actions were intentionally not run by this helper.

## Final validation and open obligations

- Explicit-path precheck on both owned targets: pass; the item reports
  `PASS ... (direct)`, while the prose-only page is correctly not a
  proof-bearing target (`1 checked, 0 failing`).
- Real explicit-path rendercheck on both targets: pass for both files under the
  renderer YAML parser and real KaTeX, with no wikilink-in-math, delimiter,
  multiline-display, or parse error.
- `git diff --check` on the two targets and this report: pass.
- Final target hashes at handoff:
  - Wu item: `1923b0c0c9ba99d91f19d29edfcc296500764b45de691105e4910cdac0f1e815`
  - B page: `2ef143b984fe298195b415bc7b01fb39e27b0fc8d4e18aa6b154f1e00be12d05`
- No open mathematical obligation is presently known. This is an authoring
  handoff, not certification; group b must independently inspect and integrate
  the item, especially the coefficient types, cap sign, forward whitelist, and
  proof contract.
- No potential published defect was found. The defect is confined to the
  unpublished Wu scaffold's source locator and incomplete strategy.
- Next item: none; both assigned target files are complete. No additional item
  is authorized in this helper's scope.

**Required next action:** group lead b should apply the seven shared changes
above, rerun the focused author/plan/dependency checks, inspect the rendered
item and page, and only then decide whether to certify them.

# Step 5a reader report — batch 10

Run: `frontier-37-owner-30`  
Role: reader  
Scope: assigned pages and items in `research/frontier-37-owner-30-batch-10.pages.json`

## Opened inventory

The active-run status command reported `frontier-37-owner-30 — running`, with
Step 5a reader artifacts still pending. The current git log was consistent with
the dispatch. No separate rendered evidence bundle for batch 10 was present in
the task-specific runtime paths, so I read the current page and item files.

Opened the batch manifest and both pages:

- A page: `library/pde/smooth-approximation-and-sobolev-extension.md`
- B page: `library/pde/smooth-approximation-and-sobolev-extension-examples.md`

Opened all 16 A-page items:

- `lem-mollification-commutes-with-weak-derivatives-in-the-interior`
- `thm-local-smooth-approximation-in-wkp`
- `thm-meyers-serrin-density-on-an-arbitrary-open-set`
- `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`
- `rem-meyers-serrin-does-not-assert-density-for-p-infinity`
- `def-wkp-zero-as-a-sobolev-closure`
- `lem-zero-extension-from-w-one-p-zero`
- `lem-compact-support-zero-extension-in-wkp`
- `def-sobolev-extension-domain-and-extension-operator`
- `thm-wkp-extension-from-a-half-space`
- `def-bounded-c-k-domain-and-boundary-charts`
- `lem-c-k-boundary-flattening-preserves-wkp-locally`
- `thm-extension-theorem-for-bounded-smooth-domains`
- `thm-smooth-up-to-the-boundary-density-on-smooth-domains`
- `cor-sobolev-embeddings-transfer-from-rn-to-extension-domains`
- `rem-lipschitz-versus-c-one-versus-smooth-domain-hypotheses`

Opened all 7 B-page items:

- `ex-mollification-of-the-absolute-value`
- `ex-zero-extension-of-a-compactly-supported-sobolev-function`
- `cex-zero-extension-of-a-nonzero-boundary-function-creates-a-jump`
- `cex-c-infinity-up-to-boundary-density-is-domain-sensitive`
- `cex-not-every-open-set-is-a-w-one-p-extension-domain`
- `ex-reflection-extension-on-the-half-line`
- `cex-mollification-after-zero-extension-does-not-preserve-boundary-values`

I opened the dependency statements needed for the checks, including the
Sobolev and weak-derivative definitions, the weak-derivative locality and
commutation lemmas, the ACL and one-dimensional absolute-continuity statements,
change of variables, null-set preservation, mollifier and approximate-identity
interfaces, and the measure, Hölder, Fubini, Fatou, cutoff, Leibniz, and
weak-stability results. The two assigned PDE sources I checked directly were:

- Richard S. Laugesen, *Linear Analysis and Partial Differential Equations*,
  Definition 3.10, printed pp. 58–59, for the local graph convention:
  <https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf>
- Sung-Jin Oh, *Lecture Notes for Math 222A*, §11.2 density proof immediately
  before Proposition 11.10 (printed pp. 154–156), and Proposition 11.13 and
  Remark 11.14 (printed pp. 157–159), for smooth density, chart localization,
  high-order reflection, and the boundary-regularity caveat:
  <https://web.math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf>

## Repairs

1. `def-bounded-c-k-domain-and-boundary-charts`: replaced the global-looking
   graph equality with a local equality inside `R(W)`, defined the flattening
   map from physical to flat coordinates as `(y,s) ↦ (y,s-h(y))`, and corrected
   its inverse. The chart now maps the local domain to `t<0`, matching the
   extension proof's use of `Phi` and `Phi^{-1}`. Also replaced the false claim
   that every bounded open subset of `R` is an interval: the local one-sided
   condition in dimension one gives finite disjoint unions of bounded
   intervals. Laugesen's Definition 3.10 gives the exact local form
   `Omega intersect B = {x in B: x_N > gamma(x')}`.

2. `thm-wkp-extension-from-a-half-space`: corrected the interface formula.
   Normal integration by parts leaves the trace of the `r`-th normal
   derivative, `tr_{r e_n} u`, paired with the tangentially differentiated
   test function. The previous formula used `tr_{beta+r e_n} u` as well as
   `D^beta phi`, counting tangential derivatives twice. The corrected formula
   gives the stated moment cancellation. I also defined the reflection index
   set for `k=0`; the previous proof used an empty sum there despite asserting
   even reflection. With `J_0={1}` and `a_1=1`, the candidate order-zero
   derivative is the even reflection and its norm is bounded.

3. `thm-meyers-serrin-density-on-an-arbitrary-open-set`: selected each
   mollification radius small enough to keep its support away from
   `K_{j-1}`, in addition to keeping it inside `U_j`. The positive distance
   follows because `eta_j` vanishes near `K_{j-1}`. This makes the asserted
   local finiteness of the mollified supports follow from the construction.

4. `lem-c-k-boundary-flattening-preserves-wkp-locally`: restricted the inverse
   estimate to matched patches (`Phi(U_0)=V_0`), since the original one-sided
   inclusion did not make `u composed with Psi` defined on all of `V_0`.
   Replaced the unsupported claim that zero-extension mollifications converge
   in `W^{k,p}(V_0)` by Meyers–Serrin density on the open set `V_0`. Separated
   the order-zero identity from the positive-order chain-rule sum. For
   `p=infinity`, obtained the weak derivative formula at a finite exponent and
   then used the formula fields' direct `L-infinity` bounds, rather than
   passing unsupported `L-infinity` bounds for the approximants to a limit.
   This follows the standard pullback estimate from change of variables and
   the chain rule; Oh's §11.2 records the required smooth density on open sets.

5. `thm-extension-theorem-for-bounded-smooth-domains`: made the finite chart
   patches nested and recorded the support constraint needed by the local
   reflection. Clarified zero extension across artificial chart edges inside
   the half-space, where the cutoff vanishes near those edges and tests stay
   away from the physical boundary. Corrected the final support expression to
   the physical set `supp(psi_i) intersect Phi_i^{-1}(supp(w-tilde))`; the
   former expression intersected sets in different coordinate spaces. The
   finite partition, half-space reflection, and matched-patch change of
   variables give the stated extension.

6. `cex-c-infinity-up-to-boundary-density-is-domain-sensitive`: applied the
   endpoint estimate to `phi_j-u` on each fixed strip, so the estimate's
   constant remains fixed while the Sobolev error tends to zero. The former
   proof estimated `phi_j` and then shrank the strip, but the endpoint
   constant grows like `1/epsilon`, so the residual derivative term need not
   tend to zero. Also corrected the local geometry: near an interior slit
   point the removed set is a half-segment, so the domain is connected and
   dense on both sides; its complement has empty interior, unlike the open
   complementary side required by a one-sided graph chart.

7. `cex-mollification-after-zero-extension-does-not-preserve-boundary-values`:
   stated the missing kernel hypothesis explicitly: the even nonnegative
   unit-mass base kernel is supported in `[-1,1]`, and `rho_epsilon` is its
   rescaling. This is needed for the claimed support `[-epsilon,epsilon]` and
   the endpoint value `1/2`. Corrected the claim that the zero extension has
   no jump; it has jumps at both endpoints, which convolution smooths.

No changed item had a `verification.judge` record to remove. Updated the
batch-scoped contracts in `research/frontier-37-owner-30-batch-10.proof-contracts.json`.

Reflow and precheck results for the seven changed items:

| Item | Reflow | Precheck |
| --- | --- | --- |
| `def-bounded-c-k-domain-and-boundary-charts` | unchanged | 0 checked, 0 failing |
| `thm-wkp-extension-from-a-half-space` | reflowed | pass, direct |
| `thm-meyers-serrin-density-on-an-arbitrary-open-set` | reflowed | pass, direct |
| `lem-c-k-boundary-flattening-preserves-wkp-locally` | reflowed | pass, direct |
| `thm-extension-theorem-for-bounded-smooth-domains` | reflowed | pass, direct |
| `cex-c-infinity-up-to-boundary-density-is-domain-sensitive` | reflowed | pass, direct |
| `cex-mollification-after-zero-extension-does-not-preserve-boundary-values` | unchanged after final repair | pass, direct |

All item prechecks report zero failing items.

## Uneditable defect

`library/pde/smooth-approximation-and-sobolev-extension-examples.md`, first
prose paragraph: the sentence ending “the zero-extension class is unchanged
almost everywhere” is false when referring to mollification at a fixed scale.
For the assigned example, the restricted convolution is continuous with
one-sided endpoint limit `1/2`, whereas the indicator equals `1` almost
everywhere on `(0,1)`; it therefore cannot equal that class almost everywhere.
The sentence also groups fixed-scale behavior with the approximation limit,
which needs separate wording. This is a nonfatal false claim in B-page prose,
which this reader was not licensed to edit. No other uneditable defect or
published-dependency defect was confirmed.

## Page verdicts

- A page `smooth-approximation-and-sobolev-extension`: pass after the item
  repairs above. Its summary and placement match the checked item claims.
- B page `smooth-approximation-and-sobolev-extension-examples`: needs the
  first-paragraph prose correction noted above. The assigned B-item repairs
  are complete.

## Blocker

No blocker to the assigned item repairs or checks. The B-page summary finding
remains for the 5b lead because B-page prose was outside this reader's edit
authority. No withdrawal is proposed.

## Coverage note

I opened both assigned pages, all 23 manifest-listed items, and the direct
dependency statements needed for the reviewed inferences; I also checked the
current run status and git history. I did not independently re-audit every
transitive proof or every textbook citation behind the published dependency
interfaces. No separate rendered evidence bundle for batch 10 was available.

# Group-d escalation follow-up after the split convention

Date: 2026-09-20  
Run: `phase-2-remaining-27`  
Dispatch: `escalation-sol-1b`

## Convention and source check

This follow-up retains the owner's earlier split:

- the finite-energy Itô integral remains available over the raw filtration;
- localization, stopping, continuous-local-martingale arguments, and Brownian
  martingale representation use the usual conditions (complete and
  right-continuous);
- local drift variation and local diffusion energy are almost-sure
  finite-horizon conditions.

The relevant arguments were checked in full, not merely through search-result
snippets:

- A. W. van der Vaart, *Martingales, Diffusions and Financial Mathematics*,
  the usual-filtration convention, localized stochastic integration in
  Theorem 5.36, Itô's formula in Theorem 5.85, and the Brownian representation
  theorem and proof in Theorem 6.6:
  <https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf>.
- A. Eberle, *Introduction to Stochastic Analysis*, the usual conditions,
  localization lemma 5.11, multidimensional Itô formula, and integration by
  parts:
  <https://wt.iam.uni-bonn.de/fileadmin/WT/Inhalt/people/Andreas_Eberle/IntroStoAn1516/IntroStochAnalysis2015.pdf>.
- R. Durrett, *Probability: Theory and Examples*, the Brownian harmonic and
  annular-exit argument in Chapter 9:
  <https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf>.
- G. Lawler, *Stochastic Calculus: An Introduction with Applications*, the
  space-time multidimensional Itô formula and harmonic-function local
  martingales:
  <https://www.math.uchicago.edu/~lawler/finbook.pdf>.
- P. Sousi, *Advanced Probability*, Definition 6.10 and the natural/right-limit
  filtration distinction:
  <https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf>.

No mathematical question among the eleven remains open.

## Decisions on the eleven escalations

### Repaired

1. `thm-ito-formula-one-dimensional` — **repaired**; queue position 11.
   The convention change alone did not repair the eventwise-$L^2$, unbounded
   initial value, weighted-quadratic-variation, or negative-time extension
   defects. The current localization witness is: “For $c>0$ put
   $D_c:=\{|X_0|\le c\}\in\mathcal F_0$” and
   “$\bar X^{(c)}:=1_{D_c}X^{\rho_c}$.” The stochastic approximation now uses
   the isometry and dominated convergence globally, and the mollified extension
   is asserted to agree with $f$ only on the “nonnegative inner cylinder.”

2. `thm-multidimensional-ito-formula-for-brownian-driven-processes` —
   **repaired**; queue position 36. The same initial-value and eventwise-$L^2$
   repairs were required, as were original-partition boundary control and the
   removal of double-counted second-order terms. The current proof says:
   “These are the complete spatial Hessian terms; no separate drift expansion
   is added.” The standard independent-coordinate covariance convention is now
   explicit, resolving the receipts' separate convention complaint.

3. `thm-space-time-harmonic-functions-yield-brownian-local-martingales` —
   **repaired**; queue position 37. Relative openness, the smooth cutoff,
   derivative evaluation after exit, the moving-event limit, and the lifetime
   meaning all needed correction. The statement now gives a “continuous local
   martingale up to the lifetime $\tau_U$”; stopped gradients are defined by
   bounded predictable extensions and are never evaluated outside $U$.

4. `ex-brownian-hitting-probability-from-an-exponential-martingale` —
   **repaired**; queue position 43. The current text consistently uses the
   canonical coordinate under $P_x$ and no longer invokes an unjustified
   domination for dyadic ceiling times. Its exact replacement witness is:
   “The time $\tau\wedge T$ is bounded, and optional sampling applied directly
   to the martingale $M$ gives $E_xM_{\tau\wedge T}=M_0=e^{-2\mu x}$.”

5. `ex-harmonic-functions-of-planar-brownian-motion` — **repaired**; queue
   position 48. It now starts with Brownian motion “with its usual augmented
   filtration” and its “everywhere-continuous, zero-start normalization.” Its
   stopped integrands use bounded predictable extensions, and the global claim
   is only the lifetime-local statement supplied by the repaired theorem.

6. `ex-logarithm-of-geometric-brownian-motion` — **repaired**; queue position
   51. The null-path normalization is now licensed by completeness, positivity
   is immediate from the defining exponential, and the proof records the
   “everywhere pathwise identity” obtained by taking the ordinary logarithm.
   Finite-horizon bounds are obtained from continuity of the normalized
   Brownian path, not from a localization assertion that required them first.

7. `lem-planar-brownian-annular-exit-probability` — **repaired**; queue
   position 57. The proof now uses the canonical coordinate $Z$ and expectation
   $E_x$ throughout, proves the minimum exit time finite from a one-coordinate
   hitting time, and corrects the tie claim: “The tie event can include paths
   with both times infinite, but it has $P_x$-probability zero because
   $H<\infty$ almost surely; a finite tie is impossible when
   $\varepsilon<R$.”

8. `thm-brownian-filtration-martingale-representation` — **repaired**; queue
   position 61. Deterministic step functions are handled interval by interval,
   real and imaginary stochastic exponentials are separated, and the path-law
   assertion now says: “This is a statement about the joint law, not an
   isomorphism of the original sample space.” The invalid measurable-section
   argument was replaced by the conditional-projection proof
   $E[UV\mid\mathcal H\vee\mathcal G_m]
   =U E[V\mid\mathcal G_m]$, downward convergence, Blumenthal's law, and
   density of bounded product variables. Local energy is asserted almost
   surely.

9. `thm-integration-by-parts-for-brownian-ito-processes` — **repaired**;
   queue position 68. The expectation corollary now also assumes
   “$E\int_0^t|\xi_s\eta_s|ds<\infty$.” Localization controls both initial
   values, and the finite-energy comparison uses the isometry directly. The
   algebraic starting point is now exactly
   “$X_TY_T-X_0Y_0=\sum_jX_{t_j}\Delta_jY+
   \sum_jY_{t_j}\Delta_jX+\sum_j\Delta_jX\Delta_jY$,” so the initial product
   is not counted twice.

### Resolved by the convention and repaired suppliers

10. `thm-two-sided-exit-probability-for-brownian-motion` —
    **resolved-by-convention**; queue position 42. No consumer edit was needed.
    Its current statement already uses “the coordinate process $Z$ of the
    shifted law,” and its proof explicitly says that the exit time is a stopping
    time of the usual augmentation. The residual supplier defects were repaired
    in `def-brownian-motion-started-at-x` and
    `thm-strong-markov-property-of-brownian-motion`.

11. `ex-expected-exit-time-from-an-interval-via-ito-formula` —
    **resolved-by-convention**; queue position 46. No consumer edit was needed.
    It already declares “the shifted process $B^x$” and uses the bounded Dynkin
    formula on $\tau\wedge n$ before monotone convergence. The repaired usual
    localization interface, started-at-$x$ law, and one-dimensional Itô
    supplier now license the proof as written.

### Still open

None.

## Residual supplier repairs

Six unqueued or upstream suppliers needed owner-authorized repair:

- `def-natural-and-usual-augmented-brownian-filtrations`: the null ideal is now
  “the family of all subsets of ambient $P$-null events,” after completing the
  ambient probability space; every such set lies in $\mathcal F_0$, and the
  usual filtration is proved complete and right-continuous.
- `thm-strong-markov-property-of-brownian-motion`: the stale disclaimer was
  removed; it now states that the exceptional ambient null event belongs to
  $\mathcal F_0$, “so this normalization preserves adaptedness.”
- `thm-localized-ito-integral`: it now says, “The filtration is assumed to
  satisfy the usual conditions,” and consistently treats the energy exhaustion
  as almost sure.
- `thm-stopping-an-ito-integral`: it now says that “local energy is finite
  almost surely on every finite horizon” and that its canonical localizers
  increase to infinity almost surely.
- `def-continuous-brownian-ito-process`: scalar and multidimensional drift and
  diffusion integrability are almost-sure finite-horizon conditions, and its
  common stopping times increase to infinity almost surely.
- `def-brownian-motion-started-at-x`: the shifted law now lives on “canonical
  continuous path space,” making closed-set hitting events Borel, with an
  everywhere-continuous normalized Brownian version.

These six supplier changes and the first three repaired consumers have valid
`owner-prerequisite-repair` rows, each with a direct `found_via` consumer among
the eleven and two HTTPS sources. The direct pairs are:

```text
def-natural-and-usual-augmented-brownian-filtrations
  -> thm-brownian-filtration-martingale-representation
thm-strong-markov-property-of-brownian-motion
  -> thm-two-sided-exit-probability-for-brownian-motion
thm-localized-ito-integral
  -> thm-ito-formula-one-dimensional
thm-stopping-an-ito-integral
  -> thm-ito-formula-one-dimensional
def-continuous-brownian-ito-process
  -> thm-ito-formula-one-dimensional
def-brownian-motion-started-at-x
  -> thm-two-sided-exit-probability-for-brownian-motion
thm-ito-formula-one-dimensional
  -> thm-multidimensional-ito-formula-for-brownian-driven-processes
thm-multidimensional-ito-formula-for-brownian-driven-processes
  -> thm-space-time-harmonic-functions-yield-brownian-local-martingales
thm-space-time-harmonic-functions-yield-brownian-local-martingales
  -> ex-harmonic-functions-of-planar-brownian-motion
```

The other six edited consumers are terminal leaves among the eleven:

```text
ex-brownian-hitting-probability-from-an-exponential-martingale
ex-harmonic-functions-of-planar-brownian-motion
ex-logarithm-of-geometric-brownian-motion
lem-planar-brownian-annular-exit-probability
thm-brownian-filtration-martingale-representation
thm-integration-by-parts-for-brownian-ito-processes
```

They already have exact assigned fatal evidence, which is the ordinary licence
for their own repair. None has a direct consumer among the eleven, so no row can
satisfy both the dispatch requirement `found_via = a direct consumer among the
eleven` and the guard's enforced direct-dependency relation. No self-row or
fabricated dependency was written. This is a workflow-schema mismatch in the
literal “one row per edited item” deliverable, not an unresolved mathematical
claim.

## Exact normalized hashes

The hashes below are `itemHashGuard` hashes, which exclude the `verification`
block and are the form enforced by `step7-guard`.

```text
def-natural-and-usual-augmented-brownian-filtrations
  dadb5353bdd2f84c0a486516fe4556ca924c88e8818cdf484f9b9f4623b923da
  -> 0cc932ac0c7c719d4edd6b6deb0bea951a1753325c248defa90c2779d1ce3c45
thm-strong-markov-property-of-brownian-motion
  bd17ce3e18b6fce6cc9c193dbb1dbd4646655c0185f4e8baffb07a817075fab3
  -> 7cdc32644133a58d1cb0076583fbf51b9d98028d728c848dab76045fb6c01e0f
thm-localized-ito-integral
  8100d6ee7ad407d2cb25968bae4b3a03d5a4ce35d3a032951896f25b140edc6a
  -> 72617532700d9752ee8c698e3096b023375d4173a0da411a7c61f55105d2cbb6
thm-stopping-an-ito-integral
  989eab9b53a5f99c3070de7ab2449c522345889ab740111771558fe70af44249
  -> 1f9911f72d7fc7cd95b3e10dc4efe6c9d29a6237035a607cc387f7f70e8489a4
def-continuous-brownian-ito-process
  a27995653649025e1aafdaaba7721e8bb4d3701c74bd21679b6b420791566a80
  -> 2e31d10cb3d18e25214477d13c297c4fd939878428c6118905d016f44bba6c37
def-brownian-motion-started-at-x
  4b86c425c7ecc49e5d0c4a3d3f0b92d4be174859db677c6ce9d08cccb77146a8
  -> e9dae7a2f3afc1c4bd54e72d08a4ddc4e40b97731a9c9017cc3a82bc091029bb
thm-ito-formula-one-dimensional
  a6b18602ae56c6be0db3f672fa223354728eb7f1bbe12da4002b84023b5c522a
  -> 17cc4cbc740eda9726c6d3ff22e3def4a0a1bd1a8642bb75d5d188435cbb764a
thm-multidimensional-ito-formula-for-brownian-driven-processes
  2789f526db780ca4d75ed1343f19731ea0aaed1dc89bc8c0beb743bc72c02338
  -> e1e9d87a28722b5f3ab7eaa3c83e3985e0ba145cb0ce852d1767fd0e40810e32
thm-space-time-harmonic-functions-yield-brownian-local-martingales
  9ef5e5227ff3f20ff879876e08a6837311be894eb51c3f28d953142157d2c3ad
  -> a7bcd6ea1045c31f97ab0f164a7b2fe51ed9fc7f579854ed235f35393a4f7fe7
ex-brownian-hitting-probability-from-an-exponential-martingale
  19193f77c259f31901ebba6b46b217db97f4eeefe3965163dd1d8f3abacdc78e
  -> cf7a3fe65743f047c58753f391f088ddd82c20dc21a8ff95f15de2acd7c7c5ab
ex-harmonic-functions-of-planar-brownian-motion
  4b9bc01660be4af219c9b44dbe226b7bb72e8dfeeecf77dac464fb3c946b0de4
  -> 64abcbbbe6972b1099a9bf72300b15c87a875ff1712fa63d9207561a47d51bb3
ex-logarithm-of-geometric-brownian-motion
  9cd2bdc10700ff7fdfca179b6b6aff89b800bfa06db67a2456df36b73fe6d1b6
  -> 847c373eb911f58c68335dd075d13e64d6e3dc0e92aceac759f89f52b8d2b1fd
lem-planar-brownian-annular-exit-probability
  9a3a9c39c392593021437f22455587e9b40acd31e56ce5900e645fb0bd5bf7be
  -> b19f8f1768af206c71f2b48e92428f2d372d2dc586c6e5608f013d61059b5fbf
thm-brownian-filtration-martingale-representation
  9211c380b7cd63c5ff4fd71940545f6c29aaf88c50d64358e488a4b5568faf9a
  -> 6bc398318b141ef7d7ede159f7a7d0e92800ee4b983221323dccb2b65371f52f
thm-integration-by-parts-for-brownian-ito-processes
  412b4c0e5a66e908d0f3e98239736c92ca1755d8ea72027196156533d78c1acd
  -> 4834fa505617af917e0bf8dd86c08e560f45a75741effe53ac241608a7b0fb42
```

## Re-adjudication and frontier handoff

The frozen group-d round-2 queue positions whose evidence is stale after these
repairs are:

```text
3, 4, 8, 9, 10, 11, 14, 36, 37, 42, 43, 46, 48, 51, 57, 61, 68
```

The eleven escalated consumers themselves are at positions
`11, 36, 37, 42, 43, 46, 48, 51, 57, 61, 68`. Positions `3, 4, 8, 14` are
edited upstream suppliers, and positions `9, 10` consume the repaired
localization interface. `def-natural-and-usual-augmented-brownian-filtrations`
and `def-brownian-motion-started-at-x` are not positions in this frozen queue.
No queue or terminal ledger was edited, and no reseal or rejudge was initiated.

The Step-8 lead must refresh and read the unified frontier ledger before acting.
In particular, dependency additions in the started-at-$x$, space-time harmonic,
planar harmonic, and logarithmic-geometric-Brownian items must be picked up by
that refresh; this dispatch did not write the level-wide ledger.

## Checks and mechanical blockers

- `node tools/prosecheck.mjs <15 edited items and this report>`: passed with
  16 files checked and 0 errors. Its only output beyond success was two
  heuristic `count-in-prose` warnings on this report's exact check counts; the
  tool reported no positional contradiction.
- `node tools/depcheck.mjs`: failed on seven repository-wide
  `[b-leaf-content]` errors outside the files edited here. The output also
  contains pre-existing citation/dependency warnings. No depcheck error named
  an edited file in this dispatch.
- Batch-7 proof contracts for the four edited batch-7 items: 7 errors,
  0 warnings, 4/4 checked. They are stale quote/use and boundary mappings after
  the authorized item repairs.
- Batch-8 proof contracts for the eleven edited batch-8 items: 128 errors,
  0 warnings, 11/11 checked. They are stale quote/use/step maps after the
  authorized material repairs. Proof-contract files are not among this
  dispatch's writable artifacts, so they were reported rather than changed.
- `step7-guard` accepts all nine owner-prerequisite rows. Its only remaining
  error is `auditor-certification-shape` for
  `def-brownian-motion-started-at-x`: the Step-7 auditor-created certification
  carriers are stale after the authorized repair. This dispatch may not edit
  certifications; the engine must bind the current certification after the
  successful dispatch as prescribed by the task protocol.
- `queue-status` for
  `research/phase-2-remaining-27-step7-fa-d-round-2.json` was run. Its reseal
  suggestions were not executed because routing and resealing belong to the
  engine.
- Repository-wide `git diff --check` reports three whitespace defects in
  unrelated files owned by other work. The path-limited check of all fifteen
  edited items, the owner-repair ledger, and this report passed with no output.

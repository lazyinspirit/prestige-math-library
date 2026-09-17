# Step 5a reader report — batch `13`, run `phase-2-remaining-27`

Reader label `reader-13` (`covers: 13`). Scope: exactly the four pages of
`research/phase-2-remaining-27-batch-13.pages.json` and all 117 items they
list. Run state at reading time: `.autopilot/phase-2-remaining-27/state.json`
stage `5a-read`; every listed item is an in-flight (unpublished) draft whose
frontmatter carries `pipeline_run: phase-2-remaining-27`, so local repair is
licensed for all of them. No item in this batch carries a `verification:`
block, so there was no stale `verification.judge` record to remove on the
repaired items.

## Opened inventory

Pages (read in full, prose and item lists):

- A `library/differential-geometry/real-forms-and-real-semisimple-lie-algebras.md` (order 509, 52 items)
- B `library/differential-geometry/real-forms-and-real-semisimple-lie-algebras-examples.md` (order 510, 12 items)
- A `library/differential-geometry/moment-maps-and-symplectic-reduction.md` (order 515, 41 items)
- B `library/differential-geometry/moment-maps-and-symplectic-reduction-examples.md` (order 516, 12 items)

Items: all 117 files under `items/<id>.md` listed by the manifest were opened
and read (52 + 12 + 41 + 12). Out-of-batch dependencies whose statements I opened and read before relying on
them: `thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra`,
`thm-root-string-property`, `thm-cartans-semisimplicity-criterion`,
`thm-every-derivation-of-a-semisimple-lie-algebra-is-inner`,
`thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms`,
`thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions`,
`prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra`,
`thm-second-whitehead-lemma`, `thm-conjugacy-of-maximal-tori` and
`thm-existence-of-geodesically-convex-neighborhoods`; all ten match the uses
made of them in this batch. Further dependency statements were read as quoted
inside the batch items (their fact blocks); the page files own dependency
lists (`.requires`) were checked against the manifest ids.

## Verdicts by page

- `real-forms-and-real-semisimple-lie-algebras` (A): **sound after the
  repairs listed below**; statements, titles, definitions, witnesses and
  citations all check out, including the numerical witness for su(2,1)
  (`lem-chevalley-basis-and-real-structure-constants`, `prop-restricted-root-
  systems-may-be-nonreduced`, `thm-cayley-transforms-connect-…`,
  `thm-classification-of-real-forms-by-vogan-diagrams`), which I verified
  step by step (string identity, two-step normalisation, Chevalley involution,
  integrality, `k_0` closure, Cayley-transform inverses).
- `real-forms-and-real-semisimple-lie-algebras-examples` (B): **sound**, no
  defect found. Computations checked (sl(2,R)/sl(2,C) real forms, Cartan
  involution and k+p, polar decomposition, compact/split Cartans, Iwasawa for
  SL(2,R), restricted roots of sl(n,R), BC witness, Vogan diagrams on A_2,
  complex-as-real, the two nonconjugacy counterexamples, hyperbolic space with
  Cartan curvature −1/(2(n−1)) and its standard normalisation).
- `moment-maps-and-symplectic-reduction` (A): **sound after the repair to
  `fs-an-infinitesimal-moment-map-is-automatically-equivariant` and the two
  clarifying repairs in `prop-cartan-decomposition-gives-the-invariant-metric-
  and-curvature-of-g-mod-k`**. Sign conventions (fundamental field
  `exp(−tξ)`, moment equation `dμ^ξ = −ι_{ξ_M}ω`), the KKS sign, the
  nonequivariance cocycle, the affine freedom, the tangent-space identity, and
  the Marsden–Weinstein–Meyer statement and proof were checked against each
  other and are mutually consistent.
- `moment-maps-and-symplectic-reduction-examples` (B): **sound**, no defect
  found. The quadratic moment map sign, the Hopf reduction, weighted
  (singular) quotients, angular momentum, cotangent reduction, S²_r as a
  coadjoint orbit with area 4πr, the Grassmannian frame model (dimension
  2k(n−k)), addition of angular momenta, the shifting trick, the oscillator
  descent, and the two counterexamples all check.

## Edits made (all in in-flight items of this batch)

1. `items/thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group.md`,
   step 4.3. Two false displays in the injectivity argument for the
   differential of ψ.
   - Before: `g(A)=(e^{A}-1)A^{-1}=-f(-A)`; the correct identity is
     `g(A)=f(-A)` ((e^A−1)/A = (1−e^A)/(−A)); the following substitution
     `-(e^A+1)g(A)S=0` is the correct one *with* `g=f(-A)`, so only the sign
     in the parenthetical was wrong. After: `g(A)=(e^{A}-1)A^{-1}=f(-A)`.
   - Before: `so \ker g(A)=\ker A=Z(\mathfrak g_0)=0`; `\ker(\operatorname{ad}X_0)`
     is the centralizer of `X_0`, not the centre, and `\ker g(A)` need not
     equal `\ker A`. After: `so g(A) is invertible and \ker g(A)=0`, which is
     what the eigenvalue computation `(e^λ−1)/λ ≠ 0`, `1` on `\ker A`
     actually gives.
   Evidence: the argument needs only `g(A)S=0 ⇒ S=0` and then `U=−g(A)S=0`;
   the repaired text is exactly that.
2. `items/thm-iwasawa-decomposition-on-the-lie-algebra-level.md`, step 1.3.
   The displayed intermediate identity `X=θX=H+θY` is false: `θH=−H` for
   `H∈a⊂p_0`, so `θX=−H+θY`. The conclusion (`H=0`, `θY=Y`, `Y∈n∩θn=0`)
   is unchanged. After: `hence θX=−H+θY, and the direct sum decomposition …
   applied to the two expressions $X=H+Y$ and $\theta X=-H+\theta Y$ gives
   $H=-H$, that is $H=0$, and $\theta Y=Y$ …`.
3. `items/thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification.md`,
   step 1.1. Sign error: with the definition's normalisation
   `B(E_α,θE_α)=−2/|α|²` one gets `[E_α,−θE_α]=+h_α`, not `−h_α`; the item's
   own step 2.1 and `def-cayley-transform-…` both use the `+` sign. After:
   `[E_\alpha,-\theta E_\alpha]=-B(E_\alpha,\theta E_\alpha)H_\alpha=
   (2/|\alpha|^2)H_\alpha=h_\alpha … since |H_\alpha|^2=B(H_\alpha,H_\alpha)
   =\alpha(H_\alpha)=|\alpha|^2 in that case`.
4. `items/fs-an-infinitesimal-moment-map-is-automatically-equivariant.md`,
   step 3.1. Sign error in the explicit defect: `d(−x)=−dx`, so `X_{−x}=∂_y`
   (the text's `X_{-x}=-∂_y` is `X_x`), and therefore
   `{y,−x}=−{y,x}=ω(∂_x,∂_y)=+1`, not `−1`. The defect is still nonzero, so
   the refutation stands. After: `one has $X_y=\partial_x$ and
   $X_x=-\partial_y$, so $\{y,-x\}=\omega(\partial_x,\partial_y)=1$; …
   Thus $c(\xi,\eta)=1\neq0$`.
5. `items/prop-classical-real-forms-of-the-classical-complex-lie-algebras.md`,
   Statement and step 2.2. The statement's parenthetical
   "the split form occurs at the largest possible signature
   (`su([n/2],[n/2])` … for type A_n, …)" is false: the split form of type
   A_n is `sl_{n+1}(R)`, and `su(p,q)` with `|p−q|≤1` is only the inner form
   of maximal real rank `min(p,q)`. Step 2.2's clause "for odd n the form
   `so(n+1,n−1)` of type D_n has maximal real rank n−1" is likewise false:
   `so(p,q)` with `p+q=2n` has real rank `min(p,q)`, maximal `n` at
   `so(n,n)`, for both parities. Repaired both to the correct split forms and
   the correct rank statement. Also removed a duplicated
   "**Exhaustion.** / **What is proved here.**" block that appeared both
   before and inside `## Remarks` (the second, headed copy is kept).
6. `items/thm-classification-of-real-semisimple-lie-algebras.md`. Removed a
   duplicated pair of remark bullets ("**Where the case analysis enters.**",
   "**The complex case.**") that appeared both before and inside
   `## Remarks`; no mathematical content changed.
7. `items/cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group.md`.
   Substantive repair of the crux of the proof.
   - Defect: step 1.6 asserted the midpoint inequality with a deficit
     `d(m,hm)² ≤ ½(d(p,hp)²+d(q,hq)²) − ¼d(p,q)²` for the *displacement
     function* of any isometry; this is false (Euclidean rotation by 30° with
     p=0, q=(1,0) gives LHS 0.067 > RHS −0.116), as is the intermediate claim
     `d(m,hm) ≤ ½d(p,q)` (fails for translations). Step 3.1 also asserted
     boundedness of the sublevel sets of `f(x)=sup_{g∈L}d(x,gx)`, which fails
     for `L={e}`, and step 3.2 used the false inequality to conclude that a
     minimiser is fixed.
   - Repair: the inequality is now proved for the *radius function*
     `f(x)=max_{y∈O}d(x,y)` of a compact set `O`, where the deficit term of
     the cited convexity inequality ([L7]) is independent of `y` and therefore
     survives the maximum; step 2.2 takes `O=L·x_1` (so `f` is L-invariant,
     satisfies step 1.6, and is proper because `f≥d(·,x_1)`); step 3.1 obtains
     a minimiser from a bounded minimising sequence using the Hopf–Rinow
     property now recorded in [L7]; step 4.1 (formerly 3.2) derives the
     contradiction `¼d(x_0,g·x_0)² ≤ 0`. Step 5.1 now covers an arbitrary
     compact `L` (no connectedness reduction needed); steps 1.2/2.1
     (maximality of `K`) and 6.1/7.1 are unchanged in content.
   - Also renumbered the item's steps to the canonical precheck layering
     (old 3.2→4.1, 4.1→5.1, 5.1→6.1, 6.1→7.1) and updated every `step x.y`
     reference and tag accordingly; this numbering was already non-canonical
     before the edit (precheck reported the same auto-repair).
8. `items/prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k.md`.
   Two imprecise justifications whose conclusions are correct.
   - Step 2.1: the identity `dL_{g'^{-1}}V=dR_{k^{-1}}dL_{g^{-1}}V` is not
     literally true; `dL_{g'^{-1}}=dL_{k^{-1}}\circ dL_{g^{-1}}` and
     `Π∘dL_{k^{-1}}=Ad_k∘Π`, so the two projected vectors differ by `Ad_k`,
     whose `B_{θ_*}`-invariance is exactly what step 1.1 supplies. Text now
     says this.
   - Step 7.1: "Differentiating the Jacobi equation twice" should be once
     (with `γ'` parallel and `J(0)=J''(0)=0`); the displayed conclusion
     `R(Y,X)X=−J'''(0)` is the correct one for the first derivative. Text now
     says "once".

Post-repair checks (mandated): for each of the eight changed items I ran
`node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and
`node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`; all eight now
report `PASS … (direct)` (one file was already single-line and reflow reported
"unchanged"). No `verification.judge`/`verification:` record existed on any of
them, so none had to be removed. The affected proof contracts (the Facts &
Assumptions blocks) were re-read after editing: no repaired step now needs a
fact that is not declared, and the added Hopf–Rinow clause for the corollary
was written into its [L7].

## Uneditable defects

None found. I found **no defect anywhere I was not licensed to edit**: no
defect in another batch, in `research/plan-spec.json`, in B-page prose, or in
published content. In particular, the B-page prose of both example pages
matches the items they summarise, and the two A-page prose summaries match
their item lists (including the six recorded traps on the moment-map page).

## Observations recorded but not classed as defects (no edit)

- `thm-real-forms-correspond-to-conjugate-linear-involutions`, step 4.1: the
  passage from "mutually inverse on objects" to a bijection of *isomorphism*
  classes uses the standard fact that a real isomorphism of real forms
  complexifies to an automorphism of `g`; it is not spelled out but is closed
  at once.
- `prop-compact-group-moment-map-can-be-averaged-to-an-equivariant-one-…`,
  step 2.1: the displayed intermediate identity `μ̄(h·p)=∫k^{-1}·μ(kh·p)dk`
  is true, but its stated justification ("using equivariance of μ") is not the
  right one (μ is only an infinitesimal moment map); the identity and the
  equivariance conclusion follow from Haar invariance (substitute `g=kh^{-1}`
  using right invariance), which [F1] supplies.
- `def-split-real-form` and `def-maximal-split-abelian-subspace-and-real-rank`
  use the phrase "real rank" once before that term is defined on the later
  page item; each occurrence defines the quantity it uses, so no circularity
  or false claim arises.

- `cor-maximal-compact-subgroups-…`, [L7]: the cited
  `thm-existence-of-geodesically-convex-neighborhoods` supplies strongly
  geodesically convex neighbourhoods, not the midpoint (CN) inequality itself,
  which is asserted there as "the standard convexity of the distance function"
  on a Hadamard manifold with the curvature item; the inequality is true and
  is exactly what my repaired steps use, and the curvature of `G/K` is
  supplied locally, so only the locator is partial rather than the claim.

## Blockers

None. No unresolved escalation; no proposed withdrawal was needed (no claim
had to be removed, and no item was deleted or emptied). Published-dependency
findings: none, so no assigned consumer needed to be named.

## Coverage note (limitations, stated honestly)

I read every assigned page and every assigned item in full and checked every
statement, title, definition, witness, contract and citation locator against
the item's own facts; for the numerical witnesses (`su(2,1)`, `sl(2,R)`,
`sl_3(R)`/`su(2,1)` Vogan data, the Grassmannian and hyperboloid
computations) I redid the computations rather than trusting the authors. The
fixpoint/convexity defect above was confirmed by an explicit counterexample.
Limits of this pass: (i) for the two long classification items
(`thm-classification-of-real-forms-by-vogan-diagrams`,
`thm-classification-of-real-semisimple-lie-algebras`) and for
`thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications` I
verified the statements, the hypotheses, the constructive steps, the
enumeration logic and the internal consistency, but I did not independently
re-derive every case of the Borel–de Siebenthal enumeration or every entry of
the exceptional figures, which are cited to Knapp's Theorem 6.96/6.105 and
Figures 6.2–6.3; (ii) I did not fetch and read the external sources
(Knapp, Etingof, Cannas da Silva, Meinrenken) page by page — the page
locators were checked for internal plausibility and the mathematics was
verified from the item texts; (iii) the four page files' `requires` lists were
only checked against the manifest ids, not audited as prerequisite closures.
Within those limits every claim I did verify is reported above, and no
uncertainty remains that would affect a verdict.

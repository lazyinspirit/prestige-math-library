# DEFERRED.md — results held back for want of a prerequisite track

Owner decision, 2026-07-25: results requiring **measure theory**, **functional
analysis**, **set theory beyond choice** (forcing, large cardinals,
independence), or **algebraic topology** are deferred until those tracks are
properly introduced in future sessions. Nothing here is dropped; this file is the
work list for picking them up.

**The rule that produced this list** (see WORKFLOW.md "Definition justification"
and the scope priority): rigor and non-circularity outrank completeness. A result
whose proof needs machinery the library does not yet contain may not be authored
as a `thm-`/`lem-` with a borrowed or hand-waved proof. It is either deferred to
here, or recorded in place as a `rem-` that states it and cites a source, marked
explicitly as not proved in this library.

**Difficulty is never a reason to defer.** Everything here is deferred for a
missing *prerequisite*, not because it is hard. Hard-but-reachable results
(Hermite's transcendence of e, Henstock-Kurzweil, Green's theorem, Morse's lemma,
Kelley's even-continuity Ascoli, the lattice form of Stone-Weierstrass) are in
scope and get proved, decomposed into as many small lemmas as it takes.

---

## 0. Available WITHOUT the deferred tracks (do not defer these by mistake)

Worth stating explicitly, because they look measure-theoretic and are not:

- **"Measure zero" and "almost everywhere"** in the elementary covering sense (a
  set is null if for every epsilon it is covered by intervals of total length
  below epsilon). This is all that **Lebesgue's criterion for Riemann
  integrability** needs, and all that the statements "the Cantor function has
  derivative zero almost everywhere" and "Volterra's derivative is discontinuous
  on a set of positive measure" need. Elementary, in scope, lives on the
  Topology-of-R and Riemann-integral pages.
- **Content zero / Jordan content / Jordan measurability**, and the fact that
  Jordan measurable is strictly stronger than null. Elementary.
- **The Baire category theorem** for complete metric spaces and for locally
  compact Hausdorff spaces, and its consequences that do not need a Banach space:
  no function is continuous exactly on Q; the generic continuous function is
  nowhere differentiable; Q is not G-delta.
  **Corrected 2026-07-25 (counterexample sweep):** an earlier draft of this line
  called the locally compact Hausdorff case choice-free. It is not. BCT is FOUR
  inequivalent principles over ZF — complete metric **<=> DC** (Blair 1977);
  **separable** complete metric is **ZF**-provable; totally bounded complete and
  second countable complete are **<=> AC_omega**; **compact Hausdorff <=> DMC**
  (Fossy-Morillon 1998) and **locally compact regular <=> DMC** (Bacsich 1972),
  and **BPI does not imply DMC**. Availability is unaffected (nothing here needs
  measure theory or functional analysis), but every BCT item must state which
  version it uses and what that version costs. Wikipedia's "BCT2" is not a ZF
  theorem, and Herrlich's 1997 survey still lists BCT <=> DC as open.
- **Riesz's lemma** and the non-compactness of the closed unit ball of an
  infinite-dimensional normed space. Elementary once norms are defined.
- **Kelley's proof that Tychonoff implies AC** (via the cofinite topology on
  X union {infinity}). Elementary; only the *independence* results need forcing.
- **Hahn-Mazurkiewicz** (a Hausdorff space is a continuous image of [0,1] iff it
  is a Peano continuum). Point-set, not algebraic topology.

---

## 1. MEASURE AND INTEGRATION

Track to build: Lebesgue outer measure, Caratheodory measurability, the Lebesgue
integral, the convergence theorems, L^p.

**Deferred results**
- The **Lebesgue integral** and its convergence theorems: monotone convergence,
  Fatou, dominated convergence.
- The **sharp FTC for absolutely continuous functions**: F is absolutely
  continuous on [a,b] iff F' exists a.e., is in L^1, and the integral of F'
  recovers F on every subinterval. The elementary definition of absolute
  continuity, the hierarchy $C^1\subseteq\mathrm{Lipschitz}\subseteq AC
  \subseteq C\cap BV$, and witnesses that the inclusions are strict are now
  built on the bounded-variation page; the Lebesgue-integral characterisation
  remains deferred. *(Placeholder on the FTC page:
  `rem-ftc-absolutely-continuous`.)*
- **Lebesgue's differentiation theorem**: a monotone function is differentiable
  almost everywhere. Needed to state the Cantor-function counterexample at full
  strength.
- **Banach-Zarecki**: F is absolutely continuous iff F is continuous, of bounded
  variation, and satisfies Luzin's property (N).
- **Vitali covering theorem** and the Mini-Vitali covering theorem.
- **Egorov's theorem** and **Lusin's theorem**.
- **L^p spaces**: Riesz-Fischer completeness, separability of L^p for finite p,
  non-separability of L-infinity, Holder and Minkowski in integral form.
- **Fubini-Tonelli for the Lebesgue integral**, and the sigma-finiteness
  hypothesis. The counterexample `1_diagonal` under Lebesgue times counting
  measure, and **Sierpinski's CH example** of a non-measurable subset of the unit
  square with iterated integrals 0 and 1.
- **Non-measurable sets**: the Vitali set; Banach-Tarski. (These also need choice
  beyond ZF+DC; see §3.)
- **Arzela's bounded convergence theorem** is NOT deferred (it is a Riemann-level
  theorem), but its natural home next to dominated convergence is.
- **"f is Lebesgue integrable iff f and |f| are both Henstock-Kurzweil
  integrable"**, i.e. HK is a non-absolute integral. The HK integral itself is in
  scope; this comparison is not.
- **Kolmogorov (1926)**: an L^1 function whose Fourier series diverges
  everywhere. Also **du Bois-Reymond**: a continuous function whose Fourier
  series diverges at a point (this one is Baire-reachable and may be in scope).
- The **Riesz-Markov-Kakutani representation theorem** (also §2).
- **Gelbaum-Olmsted Ch. 8** items that are genuinely measure-theoretic: a
  bounded semicontinuous function not almost-everywhere equal to any
  Riemann-integrable function; a measure-zero set that is no function's
  discontinuity set; an improper Riemann integral existing where the Lebesgue
  integral does not (the sine integral).

---

## 2. FUNCTIONAL ANALYSIS

Track to build: Banach spaces, bounded operators, dual spaces, the three
Baire-consequence theorems, weak topologies, Hilbert space and Banach algebras.
Normed spaces and their elementary finite-dimensional theory are already built.

**Deferred results**
- **Hahn-Banach** (and the fact that it follows from BPI, strictly weaker than
  AC: Luxemburg 1962, Pincus; it implies the existence of non-measurable sets).
- **Open mapping theorem** and **closed graph theorem**.
- **Uniform boundedness / Banach-Steinhaus.** *(Borderline: the proof is just
  Baire plus linearity. Normed spaces now exist; pull it forward once Banach
  spaces, bounded operators and the operator norm are built.)*
- **Banach-Alaoglu** (equivalent to BPI).
- **Riesz representation** for Hilbert space; **Riesz-Markov-Kakutani** for
  C(X)\* as regular Borel measures.
- **Banach-Stone**: an isometry of C(X) onto C(Y) forces X homeomorphic to Y.
- **Commutative Gelfand-Naimark**: commutative unital C\*-algebras are exactly
  the C(X) for X compact Hausdorff. With **Gelfand-Kolmogorov** (maximal ideals
  of C(X) correspond to beta-X) this is the "algebra equals topology" dictionary
  that the whole topology track is built to support, and it is the natural
  capstone once functional analysis exists.
- **Stone duality**: Boolean algebras versus Stone spaces.
- **Spectral theory**; compact operators; Fredholm theory.
- **Weak and weak-\* topologies**, and the observation that weak closures are not
  sequential closures because the weak topology is not first countable
  (**Mazur's lemma** is the repair). This is the analysis payoff of the
  nets-and-filters page and currently has to be a remark there.
- **Nagata's theorem** for C_p(X); **Gerlits-Nagy** and the rest of C_p-theory.
- **Dugundji's extension theorem** in its full form (a LINEAR extension operator
  into a locally convex TVS). The metric Tietze case is in scope; the linear
  extender is not.
- A **Banach space cannot have countably infinite Hamel dimension**.
- **Every separable infinite-dimensional Hilbert space is isometrically
  isomorphic to l^2.**
- **Kuratowski-Wojdyslawski**: every bounded metric space is isometric to a
  closed subset of a convex subset of a Banach space.

*Added by the counterexample sweep, 2026-07-25:*
- **Enflo's space** (Acta Math. 130 (1973) 309-317): a separable reflexive Banach
  space failing the approximation property, hence **with no Schauder basis** —
  the refutation of Banach's basis problem. Combined with Banach-Mazur
  universality it also refutes "a closed subspace of a space with a Schauder
  basis has one".
- **The James space J**: separable, non-reflexive, **isometrically isomorphic to
  its bidual** but not via the canonical map. This is why reflexivity must name
  the canonical embedding, and it is the counterexample students most need.
- **James's theorem**: a *Banach* space is reflexive iff every functional attains
  its norm on the unit ball; completeness cannot be dropped. With the
  counterweight **Bishop-Phelps**: the norm-attaining functionals are dense.
- **Banach limits** and the identification **(l^inf)\* = ba(2^N)**, the bounded
  *finitely additive* charges, of which l^1 is a proper subspace. Needs
  Hahn-Banach, hence BPI.
- **The Radon-Nikodym property**, and **c_0 is not a dual space** (its ball has
  no extreme points, while Alaoglu + Krein-Milman gives every dual ball some).
- **Eberlein-Smulian**, and the Schur property of l^1 (weak and norm convergence
  of *sequences* agree there though the topologies differ, so sequences cannot
  detect the difference).
- **A discontinuous linear functional on an infinite-dimensional BANACH space**
  is **equivalent to AC** (HR 109) and unprovable in ZF+DC: under ZF + DC + "every
  set of reals has the Baire property" every linear map from a Frechet space to a
  normed space is continuous (Wright, Bull. AMS 79 (1973) 1247-1250; Garnir 1974).
  *Not deferred:* the **explicit, choice-free** discontinuous functional
  `f(x) = sum n*x_n` on `c_00` with the sup norm. Also open, per Howard-Rubin
  [52][367] and [52][366]: whether Hahn-Banach alone yields a Hamel basis for R
  over Q or a discontinuous additive `f : R -> R`. Do not assert it does.

---

## 3. SET THEORY BEYOND CHOICE (forcing, large cardinals, independence)

Track to build: ordinals and transfinite recursion first (see §3a, which is
*cheap* and unblocks a lot), then constructibility and forcing.

### 3a. Ordinals and transfinite recursion — SMALL, and it unblocks the topology counterexamples

**Not required for Tychonoff or the ultrafilter lemma**, which is why the minimal
`choice-zorn-and-ultrafilters` page routes through the choice-free Bourbaki-Witt
fixed point theorem instead. But a great many topology counterexamples are built
from ordinals, so without this page those pages are much thinner:

- von Neumann ordinals, transfinite induction, transfinite recursion, ordinal
  arithmetic, Cantor normal form, Hartogs numbers, cofinality.
- Cardinals, cardinal arithmetic, **Cantor-Schroder-Bernstein**, Cantor's
  theorem, alephs and beths, Konig's theorem.
- **omega_1**, the first uncountable ordinal, and the ordinal spaces [0,omega_1)
  and [0,omega_1].
- **The long line and long ray**: a non-metrisable 1-manifold, sequentially
  compact, first countable, normal, not paracompact, not Lindelof, admitting no
  Riemannian metric, on which every continuous real function is eventually
  constant. The **Prufer manifold** likewise.
- **The Tychonoff plank** [0,omega_1] x [0,omega] minus a corner: a compact
  Hausdorff space with a non-normal subspace, which is the standard witness that
  normality is not hereditary.
- Counterexamples that need these: compact but not sequentially compact
  ([0,1]^[0,1], beta-N); sequentially compact but not compact (omega_1);
  countably compact but not compact (the long line); T4 not T5 (the plank);
  T5 not T6 ([0,omega_1]); sequential closure differing from closure
  ([0,omega_1]); Arhangelskii's theorem; the Cantor-Bendixson theorem.

**Recommendation: build §3a as its own small page early.** It is ordinary ZFC,
needs no forcing, and it is the difference between a topology track with real
counterexamples and one with toy ones.

*Sharpened by the counterexample sweep, 2026-07-25 — the recommendation is now
firm, and the page's centre of gravity moves.* The interesting mathematics here is
not the ordinals, it is **the choice cost of `omega_1` being regular**.
`omega_1` **exists in ZF** (Hartogs, Math. Ann. 76 (1915) 438-443, with no
choice), but "a countable union of countable sets is countable" is **not**
ZF-provable (Feferman-Levy; Jech, *The Axiom of Choice* (1973) Thm 10.6). In the
Feferman-Levy model `cf(omega_1) = omega`, and then `[0,omega_1)` is
sigma-compact and is **neither** countably nor sequentially compact — every
counterexample built on it silently consumes AC_omega. Also worth stating on that
page: `[0,omega_1)` is **never** Lindelof in ZF. Two corrections to fold in from
the delta note: the **long line and long ray ARE path-connected** (only the
*extended* ray is the connected-not-path-connected example), and sequential
compactness belongs to the **closed** long ray, the open one not even being
countably compact.

**One thing this page is NOT needed for, contrary to the list above:** "regular
but not completely regular". **Mysior's example** (Proc. AMS 81 (1981) 652-653)
does that with no ordinals at all. Author Mysior on the separation page; keep the
Tychonoff corkscrew, its deleted form, and Hewitt's condensed corkscrew as `rem-`
items with citations. Hewitt (Ann. of Math. 47 (1946) 503-509) is worth stating
even unproved: a **regular Hausdorff space with `C(X) = R`**, the sharp answer to
Urysohn's 1925 problem.

### 3b. Genuinely deferred (needs forcing / large cardinals)

- **CH and GCH are independent of ZFC** (Godel 1938, Cohen 1963); **GCH implies
  AC** (Sierpinski).
- **The Suslin Hypothesis is independent**; a Suslin line refutes productivity of
  ccc, while MA + not-CH makes ccc productive.
- **The Normal Moore Space Conjecture is independent**: false under V = L
  (Fleissner) and under MA + not-CH, consistent from a strongly compact cardinal
  via PMEA (Nyikos).
- **L-spaces exist in ZFC** (Justin Moore, 2005); **S-spaces consistently do not**
  (Todorcevic, under PFA).
- **Dowker spaces exist in ZFC** (M. E. Rudin 1971; Balogh 1996 at cardinality
  continuum; Kojman-Shelah 1998), so **Dowker's theorem** (X normal and
  X x [0,1] normal iff X countably paracompact) has a real witness.
- **Solovay's model**: ZF + DC is consistent with every set of reals being
  Lebesgue measurable and having the Baire property. Hence Vitali sets and
  Banach-Tarski need more than DC, and the Hamel-basis pathology behind the
  discontinuous solutions of Cauchy's functional equation genuinely requires
  choice.
- **Feferman-Levy model**: R is a countable union of countable sets and omega_1
  is singular. Kills "a countable union of countable sets is countable" and the
  regularity of omega_1 as ZF theorems.
- **Cohen's first model**: an infinite Dedekind-finite set of reals.
- **Halpern-Levy (1971)**: BPI does not imply AC, so Tychonoff-for-Hausdorff is
  strictly weaker than Tychonoff.
- **Good-Tree-Watson (1998)**: A. H. Stone's theorem (every metric space is
  paracompact) is not provable in ZF + DC.
- **Blair (1977)**: the Baire category theorem for complete metric spaces is
  equivalent to dependent choice.
- **Martin's Axiom** and its consequences.
- Independence results generally. All of these are stated in the library as
  `rem-` items with citations; none is proved.

*Added by the counterexample sweep, 2026-07-25:*
- **Suslin's Hypothesis, both directions.** Con(ZFC + SH): Solovay-Tennenbaum,
  Ann. of Math. 94 (1971) 201-245, the invention of iterated ccc forcing;
  **MA + not-CH implies SH**. Con(ZFC + not-SH): Jech 1967, Tennenbaum 1968; and
  **diamond implies not-SH** (Jensen 1972), so **a Suslin line exists in L**.
  Kurepa 1935: Suslin line <=> Suslin tree <=> Suslin algebra. The ZFC-provable
  substitute for "ccc does not imply separable" is the **Cantor cube**
  `{0,1}^kappa` for `kappa > c`, which needs no independence at all — see the
  delta note. *(Unverified: "a Suslin line has a non-ccc square". Check Kunen.)*
- **aleph_1-sized Dowker spaces** need diamond or CH; their existence in ZFC is
  **open**. Rudin's 1971 ZFC example has cardinality `aleph_omega^aleph_0`;
  Balogh 1996 gives one of size continuum, Kojman-Shelah 1998 one of size
  `aleph_{omega+1}` via PCF.
- **Shelah, Israel J. Math. 48 (1984) 1-47**: ZF + DC + "every set of reals has
  the Baire property" is consistent **without an inaccessible** — the sharpening
  of Solovay's model (Ann. of Math. 92 (1970) 1-56), which does need one.
- **Lauchli (Comment. Math. Helv. 37 (1962/63) 1-18)**: a model with a T4 space
  on which every continuous real function is constant, transferred to ZF by
  Jech-Sochor. Hence **Urysohn's lemma is not a ZF theorem** (HR Form 78; Tietze
  is Form 375). **Tachtsis, Proc. AMS 147 (2019) 4029-4038** (see erratum
  10.1090/proc/14848): not provable from ZF + countable choice either.
  **Blass, Trans. AMS 255 (1979) 31-59**: DMC implies UL, and DMC is optimal;
  **Brunner 1983**: BPI does not.
- **Corson, Proc. AMS 148 (2020) 5381-5386**: BPI does **not** imply Stone's
  theorem, answering the open question of Good-Tree-Watson (1998). Stone's
  theorem is **not known** to be equivalent to AC and no source shows it strictly
  weaker; upper bound MC (Howard-Keremedis-Rubin-Stanley 2000).
- **Schechter, Fund. Math. 189 (2006) 285-288**: Kelley's 1950 specialisation of
  Tychonoff to cofinite topologies proves only **BPI**, not AC, because `X_a` is
  not closed there. "Products of compact **T1** spaces are compact" **<=> AC**
  survives with the repair (make the adjoined point isolated).
- **Gitik (1980)**: from large cardinals, a ZF model in which **every** uncountable
  cardinal is singular.
- **Fossy-Morillon, JLMS 57 (1998) 1-19** and **Bacsich 1972**: the compact
  Hausdorff and locally compact regular forms of BCT are each **<=> DMC**; and
  **BPI does not imply DMC** (HR [14][106] = 3, explicit model).
- **Fellhauer, J. Log. Anal. 9 (2017)**: the open mapping theorem does not imply
  the Baire category theorem.

---

## 4. ALGEBRAIC TOPOLOGY

Track to build: change of basepoint, the circle computation and covering spaces;
later homology. Endpoint-fixed path homotopy, the fundamental-group laws and
functorial maps, simple connectedness and the convex Euclidean case are already
built.

**Deferred results**
- **pi_1(S^1) is isomorphic to Z**, and the reading of the exact sequence
  0 -> Z -> R -> T -> 0 as "R is the universal cover of the circle". The exact
  sequence itself and the computation of the kernel of the complex exponential
  are in scope on the Euler's-formula page; only the covering-space reading is
  deferred.
- **Covering spaces**, the universal cover, and the **Riemann surface of the
  logarithm** as the universal cover of C minus 0. The elementary statement that
  no continuous logarithm exists on C minus 0 IS in scope (the winding-number
  obstruction can be made elementary), but the surface is not.
- The **change-of-basepoint theorem** and the equivalence between trivial
  fundamental group, null-homotopy of every loop and endpoint-fixed homotopy of
  any two paths. The definition of simple connectedness itself is built.
- **Brouwer's fixed point theorem** in dimension at least 2. *(Borderline: Pugh
  derives it from the general Stokes theorem, so it may be reachable from the
  multivariable track without homotopy. Flagged for reconsideration.)*
- The **general Jordan curve theorem**; **invariance of domain**. The polygonal
  Jordan curve theorem is built on the plane-graphs page.
- **Hopf's extension theorem** and obstruction theory, i.e. the reason Tietze
  does not extend maps into S^n.
- Homology, cohomology, de Rham cohomology, and the general Stokes theorem on
  manifolds. *(The Stokes theorem on chains may be reachable from the
  multivariable track; the manifold version is not.)*

*Added by the counterexample sweep, 2026-07-25:*
- **Semi-local simple connectedness**, and with it the fact that the **Hawaiian
  earring** has no universal cover and that its `pi_1` is uncountable and **not
  free**. The earring's point-set properties — compact, connected, path-connected,
  **locally path-connected**, metrizable — are all in scope and must be stated
  correctly; it is emphatically *not* an example of "path-connected but not
  locally connected". The natural continuous bijection from the CW wedge of
  circles onto it is a bijection and not a homeomorphism, which *is* in scope.
- **Shape theory**, and the **Warsaw circle**: all homotopy groups vanish yet it
  is not contractible, so weakly contractible does not imply contractible. Its
  point-set content (a compact connected non-path-connected continuum) is in
  scope on the connectedness page; the shape-theoretic reading is not.
- **Invariance of domain**, hence "`R^n` homeomorphic to `R^m` implies `n = m`".
  Needed to say why the Hilbert cube's homogeneity is surprising while `[0,1]^n`
  has genuine corners. Note the cheap half is in scope: `R` and `R^2` **are** in
  bijection, so cardinality proves nothing here.
- **Cantor's leaky tent / Knaster-Kuratowski fan** is NOT deferred: it is a
  Euclidean subspace defined in pure ZF, and the proof that it is connected while
  the punctured version is totally disconnected is elementary. Same for the
  **pseudo-arc** and the **solenoids** as point-set objects; only their
  homotopy-theoretic invariants are deferred.

---

## 5. RESEARCH FRONTIER AND OPEN PROBLEMS

Recorded as `rem-` items with citations; not provable at any level here.

- **Normality of pi** is open.
- The **Hausdorff dimension of the Weierstrass function** is 2 + log_b(a),
  settled only in 2018.
- The **Jacobian conjecture** (a polynomial map of C^n with constant nonzero
  Jacobian determinant is invertible) is open.
- **Transcendence**: Hermite's proof that e is transcendental is IN SCOPE.
  **Lindemann-Weierstrass** and the transcendence of pi are reachable in
  principle but long; flagged for a decision rather than deferred outright.
  Whether e + pi is irrational is open.
- **Gauss-Legendre / Brent-Salamin AGM**, Ramanujan and Chudnovsky series for pi:
  these rest on elliptic-integral and modular-form identities well outside the
  stack. Remark only.
- The **Hilbert-transform characterisation of pi** (the unique normalisation
  making the Hilbert transform a linear complex structure on L^2) needs both
  measure theory and functional analysis. Remark only.

---

## 6. HOW TO PICK THESE UP

1. Build the prerequisite track as its own category, to the same standard.
2. Grep this file for the track name and convert each `rem-` placeholder into a
   real proof-bearing item, keeping the remark's id as an alias if the statement
   moves.
3. Re-run `node tools/depcheck.mjs`; the new items must not introduce a cycle and
   must not force an existing page to depend on a later one.
4. Delete the entry from this file when it is discharged.

---

## 7. How the `not-proved-here` category retires (owner, 2026-08-14)

The owner asked whether to delete the entire "recorded, not proved here"
category. **The ruling is: discharge it, do not delete it.**

**Why deletion was declined.** The category is 5 pages carrying 114 items, and
116 items repo-wide carry `proved_here: false` (66 published, 50 draft). **80
other items declare a dependency on one of them.** Deleting the category does not
remove the library's debt; it hides it, leaving 80 items silently resting on
results the library neither proves nor records — the exact inversion of the
self-contained-scope rule. `CLAUDE.md` states the same thing from the reader's
side: the ‡ machinery "is what makes that fallback honest to readers".

**The retirement path.** A `rem-` item earns its removal by being replaced with a
real proof, one at a time, as the track that owns its subject is BUILT:

| catalogue page | items | retires when |
|---|---|---|
| `deferred-measure-and-integration` | 29 | the measure-theory level is built |
| `deferred-functional-analysis` | 33 | the functional-analysis level is built |
| `deferred-algebraic-topology` | 17 | an algebraic-topology track is scaffolded and built |
| `deferred-set-theory-beyond-choice` | 22 | needs forcing / large cardinals; no track yet |
| `open-problems-and-research-frontier` | 13 | never — these are open problems |

Both measure theory and functional analysis now have **complete prose scaffolds**
(`research/plan-measure-theory-track.md`, 23 A/B pairs;
`research/plan-functional-analysis-track.md`, 25 A/B pairs), and each explicitly
disposed of its backlog rows in §1 and §2 above. So **62 of the 116 are ready to
be discharged as soon as those two levels are built** — that is the next
opportunity, and it retires two of the five pages outright.

**The procedure for each item, when its track lands.** Replace the `rem-` item's
source-cited statement with a locally proved item; move every consumer's `deps`
edge from the `rem-` id to the new id; run `impact-audit.mjs` from a pre-edit
snapshot and resolve every consumer; then retire the `rem-` id through the
`aliases` mechanism — **ids are immutable on `main`, so it is aliased, never
deleted outright.** Only when a catalogue page has no items left does the page
itself go.

**What must not happen:** deleting a `rem-` item while a consumer still cites it.
That is a `dep-unresolved` hard error, and 80 items are exposed to it.

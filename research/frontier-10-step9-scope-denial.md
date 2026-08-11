# `frontier-10` step 9 — scope-denial sweep

Alpha-frontier-10, 2026-08-11. **Complete. Findings were made.** This was a
contextual corpus read, not a grep-only pass.

## Result

- **10 draft files repaired**. They contained stale denials about absolute
  continuity, normed spaces, the fundamental group and simple connectedness,
  real Hölder exponents, and the polygonal Jordan curve theorem.
- **33 published files require edits in the publishing commit**. They were not
  mutated here. Six of those claims were falsified directly by `frontier-10`;
  the remainder are inherited stale denials exposed by the same corpus-wide
  read.
- **No stale denial was found for determinants or category theory**, despite
  both subjects being absent before this run. Existing remarks about
  determinants are page-local, and the category pages make no exclusivity
  claim.
- **No stale order claim was found after the finite-sum re-home.** The complete
  `incidence-algebras-and-mobius-inversion` page was read. It does not say that
  commutative-monoid sums first arrive at order 203, and no page below 203 says
  they are unavailable. The two moved items now sit coherently at order 46.
- **No additional edit is required for the published six-item
  `group-actions-and-cayleys-theorem` page.** Its prose describes the material
  it actually contains and makes no exclusivity claim. The 31 A items and 16 B
  examples remain staged in `research/frontier-10-published-amendments.md`; the
  publishing commit must use that staged replacement, not edit the published
  page early.

## Method and candidate accounting

The structural entry point was `node tools/prosecheck.mjs --warnings`. Before
repairs it reported 218 `library-scope-denial` warnings in 195 files; after
repairs it reports 215 in 192 files. The three disappearing warning files are
retained below as repaired candidates, so none vanishes from the audit record.
Every warning file was read in full or with overlapping contextual chunks, and
each hit was checked against current item ids, page order, and the run manifest.

That mechanical set was widened in four ways:

1. a bidirectional proximity search for *neither, no item, lacks, absent,
   silent, nowhere, not developed, does not appear, only page, first, unique to,
   beyond scope, not available, we do not,* and *not built* near *library,
   page, track, here,* or *reading order*;
2. direct searches for this run's new subjects: determinants and row reduction,
   category theory, Ramsey theory, plane graphs, polynomial rings, bounded
   variation and Riemann–Stieltjes integration, improper integration, Fubini and
   change of variables, real powers, affine subspaces, and group actions;
3. a full read of every page under `library/not-proved-here/`, plus
   `DEFERRED.md`;
4. full-file reads of the two re-home endpoints, the published group-actions
   pair, all 28 run pages, and every file repaired during this sweep.

The broader-language pass contributed 231 files outside the original warning
set. Their apparent denials were overwhelmingly mathematical negations,
proof-boundary statements, or claims explicitly limited by “on this page” or
“at this point in the reading order”. The disposition ledgers at the end record
the warning candidates and the semantic families; the sections immediately
below give exact old and replacement text for every false claim.

## Draft repairs applied

The text below records the false text as it stood before this sweep and the
replacement now on disk. Forward references named by the replacements were
added to front matter.

### D1. Absolute continuity catalogue — `DEFERRED.md`

Old (exact):

> **Absolutely continuous functions**, and the **sharp FTC**: F is absolutely
> continuous on [a,b] iff F' exists a.e., is in L^1, and the integral of F'
> recovers F(b) - F(a). This is the exact characterisation of the class for which
> Newton-Leibniz holds, and it is the natural endpoint of the FTC page.

Replacement (exact):

> The **sharp FTC for absolutely continuous functions**: F is absolutely
> continuous on [a,b] iff F' exists a.e., is in L^1, and the integral of F'
> recovers F on every subinterval. The elementary definition of absolute
> continuity, the hierarchy $C^1\subseteq\mathrm{Lipschitz}\subseteq AC
> \subseteq C\cap BV$, and witnesses that the inclusions are strict are now
> built on the bounded-variation page; the Lebesgue-integral characterisation
> remains deferred.

### D2. Functional-analysis catalogue — `DEFERRED.md`

Old (exact):

> Track to build: normed and Banach spaces, bounded operators, dual spaces, the
> three Baire-consequence theorems, weak topologies, Hilbert space, Banach
> algebras.

Replacement (exact):

> Track to build: Banach spaces, bounded operators, dual spaces, the three
> Baire-consequence theorems, weak topologies, Hilbert space and Banach algebras.
> Normed spaces and their elementary finite-dimensional theory are already built.

The accompanying uniform-boundedness clause changed from “it could be pulled
forward once normed spaces exist” to the exact replacement:

> Normed spaces now exist; pull it forward once Banach spaces, bounded operators
> and the operator norm are built.

### D3. Algebraic-topology catalogue — `DEFERRED.md`

Old (exact):

> Track to build: homotopy, the fundamental group, covering spaces; later homology.

> **Simply connected** as a homotopy-theoretic notion. The library uses only the
> elementary substitutes (star-shaped, convex, polygonally connected) for the
> Poincare lemma and the gradient theorem.

> **The Jordan curve theorem**; **invariance of domain**.

Replacement (exact):

> Track to build: change of basepoint, the circle computation and covering
> spaces; later homology. Endpoint-fixed path homotopy, the fundamental-group
> laws and functorial maps, simple connectedness and the convex Euclidean case
> are already built.

> The **change-of-basepoint theorem** and the equivalence between trivial
> fundamental group, null-homotopy of every loop and endpoint-fixed homotopy of
> any two paths. The definition of simple connectedness itself is built.

> The **general Jordan curve theorem**; **invariance of domain**. The polygonal
> Jordan curve theorem is built on the plane-graphs page.

### D4. Simple connectedness — `items/rem-simple-connectedness.md`

Old (exact):

> **Not proved in this library.** Nothing above is established here. The library
> does not construct the fundamental group, does not prove that concatenation is
> well defined on path-homotopy classes, does not prove that the group is
> independent of the basepoint on a path connected space, and does not prove the
> equivalence of the three formulations of simple connectedness.

> **What would prove it.** The homotopy track: homotopy of maps and of paths, the
> groupoid of path classes, the fundamental group as a functor from pointed
> spaces to groups, and the change-of-basepoint isomorphism induced by a path.
> This is the opening chapter of any algebraic topology course and is elementary
> in the sense of needing no machinery beyond point-set topology, but it is a
> track this library has not built, so it is recorded and not proved.

> The library does not use it. It uses elementary substitutes instead, and the
> substitution is deliberate.

Replacement (exact):

> **Partly proved elsewhere in this library.** The library now constructs based
> loop classes and the fundamental group
> ([[def-based-loops-and-fundamental-group]]), proves that concatenation is well
> defined and gives the group laws ([[thm-fundamental-group-laws]]), and defines
> simple connectedness by requiring a trivial fundamental group at every
> basepoint ([[def-simply-connected]]). What is not proved is the
> change-of-basepoint isomorphism on a path-connected space and, consequently,
> the equivalence of the three formulations stated above.

> **What would prove the remaining clauses.** A path-induced
> change-of-basepoint isomorphism, with its independence and composition laws,
> would show that one basepoint suffices and would identify null-homotopy of
> every loop with endpoint-fixed homotopy of any two paths. The groupoid language
> is a natural way to package that argument, but it is not needed for the
> fundamental group core already present.

> The library now uses the definition in its topology track and proves that every
> nonempty convex Euclidean subset is simply connected
> ([[thm-convex-subsets-have-trivial-fundamental-group]]). The analysis results
> named above still use elementary substitutes, and that restriction is
> deliberate.

### D5. Fundamental group of the circle — `items/rem-pi1-circle-is-z.md`

Old (exact):

> **Not proved in this library.** Neither the group structure on $\pi_1(S^1, 1)$
> nor the isomorphism with $\mathbb{Z}$ is established here.

> The library keeps the consequences it needs and drops the group.

> What those pages must never say is that the resulting integer computes a
> fundamental group, because the fundamental group is not defined here.

Replacement (exact):

> **Not proved in this library.** The group $\pi_1(S^1,1)$ is defined by
> [[def-based-loops-and-fundamental-group]], and its group structure is proved in
> [[thm-fundamental-group-laws]]. What is not established is the winding-number
> classification of its loop classes, the isomorphism with $\mathbb Z$, and
> hence the conclusion that the circle is not simply connected in the sense of
> [[def-simply-connected]].

> The library has the group but not this computation.

> What those pages must not say without the covering-space lifting argument is
> that the resulting integer gives a complete invariant of loop classes or
> proves $\pi_1(S^1,1)\cong\mathbb Z$.

### D6. Polygonal versus general Jordan separation — `items/rem-jordan-curve-theorem.md`

Old (exact):

> **Not proved in this library.**

> There are also winding-number proofs in the plane, which need
> [[rem-pi1-circle-is-z]] or an equivalent elementary degree theory, and a
> genuinely elementary proof for **polygonal** curves by the parity of crossings
> of a generic ray. The polygonal case is within reach of this library's methods;
> the general case is not.

Replacement (exact):

> **The general theorem is not proved in this library.**

> There are also winding-number proofs in the plane, which need
> [[rem-pi1-circle-is-z]] or an equivalent elementary degree theory. The
> genuinely elementary **polygonal** case is now proved by parity of crossings
> of a generic ray in [[thm-polygonal-jordan-curve]]. The general case remains
> unavailable.

### D7. Hahn–Banach statement — `items/rem-hahn-banach-theorem.md`

Old (exact):

> **Not proved in this library.** The library has no normed space or dual space
> track yet, so this statement is recorded with a citation rather than
> established. Nothing here rests on it.

> What is missing here is therefore not the choice principle but the analytic
> vocabulary: normed spaces, bounded operators and duals.

Replacement (exact):

> **Not proved in this library.** Normed spaces are now defined in
> [[def-norm-and-normed-space]], but bounded linear functionals, operator norms
> and dual spaces have not been developed. The extension theorem and its normed
> consequences are therefore recorded with citations rather than established.
> Nothing here rests on them.

> What is missing here is therefore not the choice principle or the definition
> of a normed space, but the one-step extension lemma and the vocabulary and
> theory of bounded operators and duals.

### D8. Hahn–Banach choice strength — `items/rem-hahn-banach-choice-strength.md`

Old (exact):

> **What would prove it.** (1) is an ultrapower construction over the ultrafilter
> lemma, which this library does prove as [[thm-ultrafilter-lemma]]; it would
> become reachable as soon as normed spaces exist, but the argument is still not
> written here.

Replacement (exact):

> The library proves as [[thm-ultrafilter-lemma]]. The library now also defines
> normed spaces in [[def-norm-and-normed-space]], but it has not developed
> bounded linear functionals and dual spaces or written the ultrapower extension
> argument needed here.

### D9. Uniform boundedness — `items/rem-uniform-boundedness.md`

Old (exact):

> It is deferred only because normed spaces and bounded operators are not yet
> defined, so there is nothing here to state it about; the moment that vocabulary
> exists, this result can be pulled forward and proved in full.

Replacement (exact):

> Normed spaces are now defined in [[def-norm-and-normed-space]]; the missing
> vocabulary is Banach spaces, bounded linear operators and their operator norms.
> Once that remaining vocabulary exists, this result can be pulled forward and
> proved in full.

### D10. Deferred algebraic-topology page — `library/not-proved-here/deferred-algebraic-topology.md`

Old (exact):

> There is no proof section anywhere on it, and there cannot be: the homotopy
> track, the fundamental group, covering spaces, homology and cohomology, has not
> been built in this library.

> When a homotopy track is eventually built, each item here becomes a real
> theorem with a real proof, and the entry is removed from the deferral list.

Replacement (exact):

> The library now has the elementary endpoint-fixed homotopy and
> fundamental-group core: it constructs $\pi_1$, proves its group laws and
> functoriality, defines simple connectedness, and proves the convex Euclidean
> case. The entries retained here need machinery that core does not yet supply —
> change of basepoint and circle computations, covering spaces, general Jordan
> separation, homology and cohomology — so they remain remarks marked "not proved
> here".

> When the machinery needed by a remaining entry is eventually built, that entry
> becomes a real theorem with a real proof and is removed from the deferral list.

The replacement also adds exact split bullets saying that the fundamental-group
core and polygonal Jordan theorem are proved while change of basepoint, the
circle computation and general Jordan separation remain deferred.

### D11. Deferred functional-analysis page — `library/not-proved-here/deferred-functional-analysis.md`

Old (exact):

> Functional analysis needs a track this library does not yet have, namely
> normed and Banach spaces, bounded operators, dual spaces, weak topologies,
> Hilbert space and Banach algebras.

> The third of these is flagged as borderline: its proof is Baire plus linearity,
> both of which the library can already afford, so it is deferred only for want
> of the vocabulary to state it in, and it should be pulled forward as soon as
> normed spaces exist.

Replacement (exact):

> The library now defines normed spaces and proves their elementary
> finite-dimensional theory. What remains unbuilt is the functional-analysis
> track proper: Banach spaces, bounded operators, dual spaces, weak topologies,
> Hilbert space and Banach algebras.

> Normed spaces now exist; it remains deferred for want of Banach spaces,
> bounded linear operators and the operator norm, and should be pulled forward
> when that remaining vocabulary is built.

### D12. Stieltjes exponent scope — `items/rem-riemann-stieltjes-conventions-and-scope.md`

Old (exact):

> Young's theorem is proved only for rational Hölder exponents because those are
> the powers presently developed in the library. No Lebesgue–Stieltjes measure,
> almost-everywhere differentiability theorem, or arbitrary-real-exponent Hölder
> theory is asserted.

Replacement (exact):

> Young's theorem is proved here only for rational Hölder exponents because
> arbitrary real exponents are not available at this point in the reading order;
> the later [[thm-holder-finite-real-exponents]] supplies that broader exponent
> theory. No Lebesgue–Stieltjes measure, almost-everywhere differentiability
> theorem, or arbitrary-real-exponent Stieltjes theorem is asserted on this page.

## Published edits queued — do not apply before the publishing commit

Every file in this section is `status: published`. The exact old text remains on
disk by design. Each replacement below is the text the publishing commit should
apply; add any named forward reference to the item's `forward_refs` at the same
time.

### P1. Absolute continuity — `items/rem-absolutely-continuous-function.md`

Old (exact):

> **Not proved in this library.** The definition can of course be written down
> with no measure theory at all, and the statement above is recorded rather than
> proved because its content, everything after the definition, is
> measure-theoretic.

Replacement (exact):

> **Partly proved elsewhere in this library.** The elementary definition is
> [[def-absolutely-continuous-function]]. The hierarchy
> $C^1\subseteq\mathrm{Lipschitz}\subseteq AC\subseteq C\cap BV$ and strictness
> witnesses are proved in [[thm-c1-lipschitz-ac-bv-hierarchy]] and its companion
> examples. Closure under vector-space operations and products, Luzin's property
> (N), the sharp Lebesgue-integral FTC and the Banach–Zarecki characterisation
> remain unproved.

### P2. Deferred measure page — `library/not-proved-here/deferred-measure-and-integration.md`

Old (exact):

> Absolute continuity, the sharp fundamental theorem of calculus that
> characterises it, and its integral-free counterpart, the Banach-Zarecki
> theorem.

Replacement (exact):

> The elementary definition of absolute continuity, its place in the
> $C^1$–Lipschitz–$AC$–$BV$ hierarchy, and strictness witnesses are now proved on
> the bounded-variation page. Luzin's property (N), the sharp
> Lebesgue-integral fundamental theorem of calculus and the Banach–Zarecki
> theorem remain recorded here.

The same file contains a second stale claim.

Old (exact):

> A third, du Bois-Reymond's continuous function with a divergent Fourier
> series, is recorded as probably reachable by the uniform boundedness route now
> that norms exist ([[def-norm-and-normed-space]]), once the library also has the
> Baire theorem for a general complete metric space, and is waiting on a page
> rather than on a theory.

Replacement (exact):

> A third, du Bois-Reymond's continuous function with a divergent Fourier
> series, is probably reachable by the uniform-boundedness route. The library
> already has the Baire theorem for complete metric spaces and now has norms;
> what remains is the Fourier/Dirichlet-kernel argument and the bounded-operator
> vocabulary needed to package the evaluation functionals.

### P3. Earlier integral-scope page — `items/rem-integral-conventions-and-scope.md`

Old (exact):

> **Bounded variation and the Riemann-Stieltjes integral.** The integrator
> $\mathrm{d}\alpha$ generalises everything on this page, and the sharpened
> second mean value theorem belongs with it. That is a later page of the same
> track, and it is not built.

Replacement (exact):

> **Bounded variation and the Riemann–Stieltjes integral.** The later
> bounded-variation page builds total variation, Jordan decomposition and the
> Riemann–Stieltjes integral. None is available at this point in the reading
> order, so nothing on the present page uses it.

### P4. Sine-integral deferral — `items/rem-improper-riemann-not-lebesgue.md`

Old (exact):

> **Which page it serves.** The improper integrals page, which will prove
> convergence of exactly this integral and the divergence of the integral of the
> absolute value, and can therefore state that the integral is conditionally
> convergent.

Replacement (exact):

> **Which page it serves.** The later improper-integrals page proves general
> Dirichlet and tail-mass criteria from which convergence of this integral and
> divergence of its absolute integral follow once the required trigonometric
> estimates are supplied. That concrete application and the value $\pi/2$ are
> not proved there, so this item remains a cited boundary statement.

### P5. Re-home count — `library/abstract-algebra/rings-subrings-and-integral-domains.md`

Old (exact):

> Twenty-six items are proved on this page, eleven of them marked as landmarks
> in the flowchart above.

Replacement (exact):

> Twenty-eight items are proved on this page, thirteen of them marked as
> landmarks in the flowchart above.

This is the only stale statement caused by the order-203 to order-46 re-home.

### P6. Affine subspace — `items/def-the-space-of-summing-directions.md`

Old (exact):

> The library has no notion of an affine subspace, so one is fixed here.

Replacement (exact):

> At this point in the reading order the general definition is not yet
> available, so the Euclidean instance is fixed here; the later
> [[def-affine-subspace-of-a-vector-space]] supplies the general definition.

### P7. Power-over-geometric proof boundary — `items/lem-power-over-geometric-null.md`

Old (exact):

> That statement is not available in this library and is not proved on this
> page, so the argument above is made directly instead.

Replacement (exact):

> That statement is not available at this point in the reading order and is not
> proved on this page; it is proved later in
> [[thm-real-power-continuity-and-derivatives]], so the argument above is made
> directly instead.

### P8. Limsup page — `library/real-analysis/limsup-and-subsequential-limits.md`

Old (exact):

> The last two are proved directly from Bernoulli's inequality and the
> Archimedean property, since the continuity of $x \mapsto x^{\alpha}$ that the
> root-test route would need is not available in this library.

Replacement (exact):

> The last two are proved directly from Bernoulli's inequality and the
> Archimedean property, since continuity of $x\mapsto x^\alpha$ is not available
> at this point in the reading order; it is proved later in
> [[thm-real-power-continuity-and-derivatives]].

### P9. Integer powers — `items/def-integer-power.md`

Old (exact):

> Rational exponents are a separate construction resting on the existence of
> roots ([[thm-nth-roots-exist]], [[def-rational-power]]), and real exponents do
> not exist in this library yet ([[rem-real-exponents-deferred]]).

Replacement (exact):

> Rational exponents are a separate construction resting on the existence of
> roots ([[thm-nth-roots-exist]], [[def-rational-power]]), and real exponents are
> not available at this point in the reading order; they are introduced later in
> [[def-real-power]] (see [[rem-real-exponents-deferred]]).

### P10. Hölder definition — `items/def-lipschitz-holder-contraction.md`

Old (exact):

> **Why the exponent is a rational and why it is at most $1$.** This library has
> no real exponents ([[def-rational-power]]), so $\alpha$ ranges over the
> rationals; that is a limitation of the ambient toolkit and not of the notion.

Replacement (exact):

> **Why the exponent is rational on this page and why it is at most $1$.** At
> this point in the reading order only rational powers are available
> ([[def-rational-power]]), so $\alpha$ ranges over the rationals. The later
> [[def-real-power]] removes that ambient restriction; the present definition is
> retained as the rational-exponent version.

### P11. Hölder-class separator — `items/ex-x-to-the-beta-separates-the-holder-classes.md`

Old (exact):

> [[def-rational-power]] defines $a^{r}$ for rational $r$ only, so this library
> has no real exponents; that is a limitation of the ambient toolkit, recorded in
> [[def-lipschitz-holder-contraction]], and not of the notion.

Replacement (exact):

> [[def-rational-power]] is the exponent theory available at this page's
> position in the reading order, so the example is stated for rational
> exponents. The later [[def-real-power]] supplies real exponents; the
> restriction here belongs to the local toolkit, not to the Hölder notion.

### P12. Square-root Hölder example — `items/ex-square-root-is-half-holder.md`

Old (exact):

> This library defines $a^{r}$ only for rational $r$
> ([[def-rational-power]]), and both $1/2$ and every exponent used above are
> rational; claim 4 quantifies over rational $\alpha$ only, and says nothing
> about real exponents, which do not exist here.

Replacement (exact):

> At this page's position in the reading order, [[def-rational-power]] is the
> available exponent construction. Both $1/2$ and every exponent used above are
> rational, so claim 4 is intentionally local to rational $\alpha$; real powers
> are introduced later in [[def-real-power]].

### P13. Hölder exponent above one — `items/thm-holder-exponent-above-one-forces-constancy.md`

Old (exact):

> This library has no real exponents and no limits of the shape
> $n^{-\beta} \to 0$ ready to hand for a general rational $\beta > 0$.

Replacement (exact):

> Neither real exponents nor a general theorem of the form
> $n^{-\beta}\to0$ is available at this point in the reading order, so the proof
> supplies the one rational instance it needs. The general real-power theory is
> developed later in [[def-real-power]].

### P14. Derivative of an $n$th root — `items/ex-derivative-of-the-nth-root-by-the-inverse-rule.md`

Old (exact):

> This library has no real exponents, so every step above stays inside
> $\mathbb{Q}$ in the exponent, as [[def-rational-power]] requires.

Replacement (exact):

> Real exponents are not available at this page's position in the reading order,
> so every step above stays inside $\mathbb{Q}$ as [[def-rational-power]]
> requires. The later [[def-real-power]] does not alter this proof boundary.

### P15. Rational-power scope remark — `items/rem-real-exponents-deferred.md`

Old title (exact):

> Why real exponents are deferred

Replacement title (exact):

> Why real exponents are deferred on the rational-powers page

The file already acknowledges the later published construction, but its final
sentence reasserts the old global scope.

Old (exact):

> Those statements are not weaker versions of the classical ones waiting to be
> upgraded; they are the classical ones, restricted to the exponents that
> currently have a meaning.

Replacement (exact):

> Those statements are the classical rational-exponent forms, restricted to the
> exponents available at this page's position in the reading order; the later
> real-power page supplies the general versions.

### P16. Sup-metric completeness example — `items/ex-bounded-functions-with-sup-metric-are-complete.md`

Old (exact):

> This library has no extended real line, so an unbounded "distance" is not
> available as a placeholder.

Replacement (exact):

> The extended real line is introduced later, but it is not used as a metric
> codomain or as a placeholder here; $d_\infty(f_k,f)$ is real-valued only after
> boundedness of $f$ is proved.

### P17. Function-space conventions — `items/rem-function-space-conventions.md`

Old (exact):

> The uniform metric is a supremum over $X$, and this library has no extended
> real line and no convention $\sup \varnothing = -\infty$
> ([[rem-sup-conventions]]).

Replacement (exact):

> The uniform metric is a real-valued supremum over $X$. Although the extended
> real line is introduced later, this page does not use it and adopts no
> convention $\sup\varnothing=-\infty$ ([[rem-sup-conventions]]).

### P18. Uniform metric — `items/lem-uniform-metric-on-a-function-space.md`

Old (exact):

> For $X = \varnothing$ the set $Y^{X}$ has a single element and
> $\sup \varnothing$ does not exist in this library, which has no extended real
> line ([[rem-sup-conventions]]).

Replacement (exact):

> For $X=\varnothing$ the set $Y^X$ has a single element, but
> $\sup\varnothing$ is undefined under the real-valued supremum convention used
> here ([[rem-sup-conventions]]). The extended real line is introduced later and
> is not the codomain of this metric.

### P19. Metric-spaces page — `library/topology/metric-spaces.md`

Old (exact):

> The values are real numbers, never $+\infty$;
> [[rem-metric-axiom-conventions]] records that decision, together with the live
> naming fork between *pseudometric* and *semimetric* and the reason extended
> metrics wait for the extended real line.

Replacement (exact):

> The values are real numbers, never $+\infty$;
> [[rem-metric-axiom-conventions]] records that decision, together with the live
> naming fork between *pseudometric* and *semimetric*. The extended real line is
> introduced later, but no extended-metric restatement is made on this page.

### P20. Compact-to-Hausdorff continuous bijection — `items/fs-continuous-bijection-is-a-homeomorphism.md`

Old (exact):

> Neither compactness nor the Hausdorff property is defined in this library, so
> that repair is recorded here as orientation only and is used nowhere.

Replacement (exact):

> Neither compactness nor the Hausdorff property is available at this point in
> the reading order. They are defined later in [[def-compact-space]] and
> [[def-hausdorff-space]], where
> [[thm-continuous-bijection-from-a-compact-space-has-continuous-inverse]] proves
> this repair.

### P21. Outer content versus outer measure — `items/def-measure-zero-and-content-zero.md`

Old (exact):

> Neither outer quantity is defined in this library, and no item here assigns a
> nonzero size to any set.

Replacement (exact):

> Neither outer quantity is available at this point in the reading order. Jordan
> outer content is defined later in [[def-jordan-inner-and-outer-content]];
> Lebesgue outer measure is still not defined. No item on this page assigns a
> nonzero size to any set.

### P22. Dowker spaces — `items/rem-dowker-spaces.md`

Old (exact):

> **Not proved in this library.** No construction here, and no topology track at
> this point of the library.

Replacement (exact):

> **Not proved in this library.** The library now has a substantial general-
> topology track, including separation, compactness and paracompactness, but it
> does not construct a Dowker space or develop the specialised
> countable-paracompactness and set-theoretic machinery used by the cited
> constructions.

### P23. $\aleph_1$-sized Dowker problem — `items/rem-aleph-one-dowker-space-open.md`

Old (exact):

> This library develops neither the general topology in which Dowker spaces are
> constructed nor the independence machinery in which the question would be
> settled negatively; both tracks are deferred.

Replacement (exact):

> The library now develops the required general-topology background, but it does
> not build a Dowker-space construction or the forcing and independence
> machinery needed to analyse the $\aleph_1$ question.

### P24. L-spaces and S-spaces — `items/rem-l-spaces-and-s-spaces.md`

Old (exact):

> Neither construction is carried out here, and the required topology
> (hereditary separability, the Lindelöf property, walks on ordinals) is not
> developed here.

Replacement (exact):

> Neither construction is carried out here. The library now develops
> separability, the Lindelöf property and their hereditary forms, but it does not
> develop the minimal-walk and oscillation machinery for the ZFC L-space or the
> forcing machinery for the S-space consistency result.

### P25. Normal Moore space conjecture — `items/rem-normal-moore-space-conjecture.md`

Old (exact):

> None of (a), (b), (c) is proved here, and no metrisation theory exists here yet
> either.

Replacement (exact):

> None of (a), (b), or (c) is proved here. The library now has a metrisation
> track and the standard metrisation theorems, but not the large-cardinal,
> forcing, measure-theoretic or inner-model machinery needed for these
> independence statements.

### P26. Monotone convergence naming warning — `items/rem-monotone-convergence-theorem.md`

Old (exact):

> The other is the elementary theorem that a monotone sequence of reals
> converges if and only if it is bounded, which belongs to the sequences track;
> that one is not deferred, but as things stand it is not proved anywhere in
> this library either, and nothing on this page bears on it.

Replacement (exact):

> The other is the elementary theorem that a monotone sequence of reals
> converges if and only if it is bounded, proved in
> [[cor-monotone-converges-iff-bounded]]. Nothing on this page bears on that
> sequence theorem, and neither result is a special case of the other.

### P27. Ultrafilter nonmeasurability — `items/rem-sierpinski-ultrafilter-not-measurable.md`

Old (exact):

> The statement needs the product measure on $\{0,1\}^{\mathbb{N}}$, or Lebesgue
> measure on $[0,1]$, and the Baire category machinery on a Polish space. Neither
> track is developed here; measure and integration is recorded, not proved,
> alongside this item.

Replacement (exact):

> The statement needs the product measure on $\{0,1\}^{\mathbb N}$, or Lebesgue
> measure on $[0,1]$, and a specialised topological zero-one law on a Polish
> space. The library now has the general Baire/category background, but not that
> zero-one-law argument or the measure and integration track.

### P28. Suslin-line square — `items/rem-suslin-line-non-ccc-square-unverified.md`

Old (exact):

> It is not proved here because this library develops neither order topologies
> nor recursion of length $\omega_1$, both of which the argument uses.

Replacement (exact):

> It is not proved here. The library now develops order topologies and
> transfinite recursion through $\omega_1$, but it has not authored Kunen's
> specialised Suslin-line construction and square argument.

### P29. Research-frontier page — `library/not-proved-here/open-problems-and-research-frontier.md`

Old (exact):

> That the square of a Suslin line fails the countable chain condition needs
> order topology and recursion on $\omega_1$.

Replacement (exact):

> That the square of a Suslin line fails the countable chain condition uses the
> order-topology and $\omega_1$-recursion background the library now has, but its
> specialised conditional construction and proof have not been authored here.

### P30. Countability of the rationals — `items/thm-rationals-countable.md`

Old (exact):

> That map needs greatest common divisors, which this library has not developed.

Replacement (exact):

> That map needs greatest common divisors, which are not available at this point
> in the reading order; they are developed later on the divisibility-and-GCD
> page. Working with a surjection instead of an injection avoids that later
> dependency.

### P31. First uncountable ordinal notation — `items/def-first-uncountable-ordinal.md`

Old (exact):

> **Notation.** The cardinal notation $\aleph_1$ is **not** used on this page or
> anywhere in this library's ordinal development. It presupposes the aleph
> hierarchy $\alpha \mapsto \aleph_\alpha$, which is not constructed here; every
> statement about the first uncountable ordinal is written $\omega_1$. The
> symbol does occur in remarks elsewhere that record results of cardinal
> arithmetic this library does not develop. The two names denote the same
> ordinal once the hierarchy exists, but nothing on this page needs that.

Replacement (exact):

> **Notation and reading order.** The cardinal notation $\aleph_1$ is not used
> on this page or in the ordinal development because the aleph hierarchy is not
> available at this point in the reading order; every statement here is written
> with $\omega_1$. The later [[def-aleph-and-beth-hierarchies]] constructs the
> hierarchy and proves $\aleph_1=\omega_1$. Nothing on the present page needs
> that later notation.

### P32. Bounded countable subsets of $\omega_1$ — `items/thm-countable-subsets-of-omega-one-are-bounded.md`

Old (exact):

> **What the statement deliberately avoids.** The usual formulation is
> "$\omega_1$ is a regular cardinal", using the cofinality function
> $\operatorname{cf}$. Neither $\operatorname{cf}$ nor the regular/singular
> vocabulary is defined in this library, so the conclusion is stated in terms
> of subsets: no at most countable subset is cofinal.

Replacement (exact):

> **What the statement deliberately avoids at this point in the reading
> order.** The usual formulation is "$\omega_1$ is a regular cardinal", using
> the cofinality function $\operatorname{cf}$. That vocabulary is introduced
> later in [[def-cofinality]], so the present theorem states the conclusion in
> the subset form available here: no at most countable subset is cofinal.

### P33. Companion $\omega_1$ counterexample — `items/cex-omega-one-has-no-at-most-countable-cofinal-subset.md`

Old (exact):

> **What is deliberately not said.** In the usual vocabulary this item says
> $\operatorname{cf}(\omega_1) > \omega$, or "$\omega_1$ is regular". Neither
> the cofinality function nor the ordinal sense of the word *regular* is defined
> in this library — the word does occur here, but only as the separation axiom
> for topological spaces — so the statement is made in terms of subsets only
> ([[def-cofinal-subset-of-an-ordinal]]).

Replacement (exact):

> **What is deliberately not said at this point in the reading order.** In the
> later vocabulary this item says $\operatorname{cf}(\omega_1)>\omega$, or that
> $\omega_1$ is regular. The cofinality and regular/singular vocabulary is
> introduced later in [[def-cofinality]], so this earlier example stays in the
> subset language of [[def-cofinal-subset-of-an-ordinal]].

## Candidate disposition ledger

### Structural `prosecheck` candidates

The 33 published files with a false claim have claim-level verdicts P1–P33
above. Several are mixed files: for example, “this theorem is not proved here”
is still true while a nearby denial of its prerequisite track is false. In every
mixed file, **only the exact old text quoted above is false; all other denial
candidates remain true**. The three structural candidates whose warning vanished
after repair are `items/rem-simple-connectedness.md`,
`library/not-proved-here/deferred-algebraic-topology.md`, and
`library/not-proved-here/deferred-functional-analysis.md`; their false text and
replacements are D4, D10 and D11.

The remaining structural-warning files, all read in context, have the following
verdict:

- `items/cex-empty-set-has-no-sup.md` — **still true**
- `items/cex-mean-value-equality-fails-for-a-vector-valued-function.md` — **still true**
- `items/cex-psi-of-one-over-x-has-no-limit-at-zero.md` — **still true**
- `items/cex-subset-closed-under-scaling-but-not-addition.md` — **still true**
- `items/cex-subset-closed-under-the-operation-not-a-subgroup.md` — **still true**
- `items/cex-unbounded-set-has-no-sup.md` — **still true**
- `items/cor-every-vector-space-has-a-basis.md` — **still true**
- `items/cor-unconditional-iff-absolute-in-r.md` — **still true**
- `items/def-compact-open-topology.md` — **still true**
- `items/def-completely-normal-and-perfectly-normal-spaces.md` — **still true**
- `items/def-countable-choice.md` — **still true**
- `items/def-divergence-to-infinity.md` — **still true**
- `items/def-function-limit.md` — **still true**
- `items/def-g-delta-and-f-sigma-in-a-topological-space.md` — **still true**
- `items/def-limits-at-infinity.md` — **still true**
- `items/def-metrizable-space.md` — **still true**
- `items/def-rational-power.md` — **still true**
- `items/def-summability-matrix.md` — **still true**
- `items/def-ultrafilter.md` — **still true**
- `items/def-urysohn-space.md` — **still true**
- `items/def-well-order.md` — **still true**
- `items/ex-abel-dini-pair-for-the-harmonic-series.md` — **still true**
- `items/ex-gamma-and-its-complement-computed-for-a-plane-series.md` — **still true**
- `items/ex-powers-of-omega-and-epsilon-zero.md` — **still true**
- `items/ex-recursive-sqrt-two-plus-x.md` — **still true**
- `items/ex-sum-and-intersection-in-f-three.md` — **still true**
- `items/ex-the-compact-open-topology-on-the-continuous-functions-of-the-line.md` — **still true**
- `items/fs-cesaro-converse.md` — **still true**
- `items/fs-closed-ball-is-the-closure-of-the-open-ball.md` — **still true**
- `items/fs-countable-union-theorem-of-zf.md` — **still true**
- `items/fs-every-fermat-number-is-prime.md` — **still true**
- `items/fs-every-normal-space-is-hausdorff.md` — **still true**
- `items/fs-every-set-has-sup.md` — **still true**
- `items/fs-every-set-well-orderable-in-zf.md` — **still true**
- `items/fs-every-ultrafilter-principal.md` — **still true**
- `items/fs-infinite-has-countable-subset-in-zf.md` — **still true**
- `items/fs-the-compact-open-topology-is-always-metrizable.md` — **still true**
- `items/fs-union-of-two-independent-sets-is-independent.md` — **still true**
- `items/fs-unique-sequential-limits-imply-hausdorff.md` — **still true**
- `items/lem-metric-nonnegativity.md` — **still true**
- `items/lem-sequential-closure-inside-closure.md` — **still true**
- `items/rem-baire-category-choice-strength.md` — **still true**
- `items/rem-baire-in-r-is-choice-free.md` — **still true**
- `items/rem-banach-alaoglu.md` — **still true**
- `items/rem-banach-limits.md` — **still true**
- `items/rem-banach-no-countable-hamel-basis.md` — **still true**
- `items/rem-banach-stone.md` — **still true**
- `items/rem-banach-tarski.md` — **still true**
- `items/rem-banach-zarecki.md` — **still true**
- `items/rem-bishop-phelps.md` — **still true**
- `items/rem-blass-model-without-ultrafilters.md` — **still true**
- `items/rem-brent-salamin-agm-algorithm.md` — **still true**
- `items/rem-brouwer-fixed-point.md` — **still true**
- `items/rem-c0-not-a-dual-space.md` — **still true**
- `items/rem-choice-ledger.md` — **still true**
- `items/rem-closed-graph-theorem.md` — **still true**
- `items/rem-cohen-first-model.md` — **still true**
- `items/rem-cohen-forcing-ac-independent.md` — **still true**
- `items/rem-compact-operators.md` — **still true**
- `items/rem-covering-spaces-and-universal-cover.md` — **still true**
- `items/rem-de-rham-and-stokes-on-manifolds.md` — **still true**
- `items/rem-dimension-invariance-of-euclidean-space.md` — **still true**
- `items/rem-discontinuous-functional-choice-strength.md` — **still true**
- `items/rem-dominated-convergence-theorem.md` — **still true**
- `items/rem-du-bois-reymond-divergent-fourier.md` — **still true**
- `items/rem-dual-of-l-infinity.md` — **still true**
- `items/rem-dugundji-extension-linear.md` — **still true**
- `items/rem-e-plus-pi-irrationality-open.md` — **still true**
- `items/rem-eberlein-smulian.md` — **still true**
- `items/rem-egorov-theorem.md` — **still true**
- `items/rem-enflo-space.md` — **still true**
- `items/rem-exponential-sequence-as-covering.md` — **still true**
- `items/rem-fatou-lemma.md` — **still true**
- `items/rem-feferman-levy-model.md` — **still true**
- `items/rem-feferman-no-free-ultrafilter-in-zf.md` — **still true**
- `items/rem-fraenkel-socks-model.md` — **still true**
- `items/rem-fredholm-theory.md` — **still true**
- `items/rem-ftc-absolutely-continuous.md` — **still true**
- `items/rem-fubini-counting-measure-diagonal.md` — **still true**
- `items/rem-fubini-tonelli.md` — **still true**
- `items/rem-gch-implies-ac.md` — **still true**
- `items/rem-gelfand-kolmogorov.md` — **still true**
- `items/rem-gelfand-naimark-commutative.md` — **still true**
- `items/rem-gerlits-nagy.md` — **still true**
- `items/rem-gitik-all-uncountable-cardinals-singular.md` — **still true**
- `items/rem-godel-constructible-universe.md` — **still true**
- `items/rem-hahn-banach-choice-strength.md` — **still true**
- `items/rem-hahn-banach-discontinuous-additive-open.md` — **still true**
- `items/rem-hahn-banach-hamel-basis-open.md` — **still true**
- `items/rem-hahn-banach-theorem.md` — **still true**
- `items/rem-halpern-levy-bpi-not-ac.md` — **still true**
- `items/rem-hawaiian-earring-fundamental-group.md` — **still true**
- `items/rem-henstock-kurzweil-vs-lebesgue.md` — **still true**
- `items/rem-hilbert-transform-characterisation-of-pi.md` — **still true**
- `items/rem-holder-minkowski-integral.md` — **still true**
- `items/rem-homology-and-cohomology.md` — **still true**
- `items/rem-homotopy-invariants-of-classical-continua.md` — **still true**
- `items/rem-hopf-extension-and-obstruction.md` — **still true**
- `items/rem-independence-of-ch-and-gch.md` — **still true**
- `items/rem-invariance-of-domain.md` — **still true**
- `items/rem-jacobian-conjecture.md` — **still true**
- `items/rem-james-space.md` — **still true**
- `items/rem-james-theorem.md` — **still true**
- `items/rem-jordan-curve-theorem.md` — **still true**
- `items/rem-kolmogorov-divergent-fourier.md` — **still true**
- `items/rem-kuratowski-wojdyslawski.md` — **still true**
- `items/rem-lebesgue-differentiation-theorem.md` — **still true**
- `items/rem-lebesgue-measure-and-integral.md` — **still true**
- `items/rem-lebesgue-monotone-differentiation.md` — **still true**
- `items/rem-lindemann-weierstrass-theorem.md` — **still true**
- `items/rem-lp-separability.md` — **still true**
- `items/rem-lusin-theorem.md` — **still true**
- `items/rem-martins-axiom.md` — **still true**
- `items/rem-mazur-lemma.md` — **still true**
- `items/rem-metric-axiom-conventions.md` — **still true**
- `items/rem-metric-spaces-have-sigma-discrete-bases.md` — **still true**
- `items/rem-mini-vitali-covering-theorem.md` — **still true**
- `items/rem-nagata-theorem-cp.md` — **still true**
- `items/rem-normality-of-pi-open.md` — **still true**
- `items/rem-null-set-not-discontinuity-set.md` — **still true**
- `items/rem-omega-one-and-the-cost-of-choice.md` — **still true**
- `items/rem-open-mapping-theorem.md` — **still true**
- `items/rem-pi1-circle-is-z.md` — **still true**
- `items/rem-radon-nikodym-property.md` — **still true**
- `items/rem-ramanujan-chudnovsky-pi-series.md` — **still true**
- `items/rem-riemann-surface-of-log.md` — **still true**
- `items/rem-riesz-fischer.md` — **still true**
- `items/rem-riesz-markov-kakutani.md` — **still true**
- `items/rem-riesz-representation-hilbert.md` — **still true**
- `items/rem-schechter-kelley-tychonoff.md` — **still true**
- `items/rem-schur-property-l1.md` — **still true**
- `items/rem-semicontinuous-not-ae-riemann.md` — **still true**
- `items/rem-semilocal-simple-connectedness.md` — **still true**
- `items/rem-separable-hilbert-isometric-l2.md` — **still true**
- `items/rem-separation-axiom-conventions.md` — **still true**
- `items/rem-sequence-conventions.md` — **still true**
- `items/rem-shape-theory.md` — **still true**
- `items/rem-shelah-inaccessible-and-the-baire-property.md` — **still true**
- `items/rem-sierpinski-iterated-integrals.md` — **still true**
- `items/rem-sigma-locally-finite-base-produces-compatible-normal-sequence.md` — **still true**
- `items/rem-solovay-model.md` — **still true**
- `items/rem-spectral-theory-bounded-operators.md` — **still true**
- `items/rem-stone-duality.md` — **still true**
- `items/rem-stone-theorem-choice-strength.md` — **still true**
- `items/rem-sup-conventions.md` — **still true**
- `items/rem-suslin-hypothesis-independent.md` — **still true**
- `items/rem-transcendence-of-pi.md` — **still true**
- `items/rem-uniform-boundedness.md` — **still true**
- `items/rem-urysohn-lemma-not-a-zf-theorem.md` — **still true**
- `items/rem-vitali-covering-theorem.md` — **still true**
- `items/rem-vitali-non-measurable-set.md` — **still true**
- `items/rem-warsaw-circle-weakly-contractible.md` — **still true**
- `items/rem-weak-and-weak-star-topologies.md` — **still true**
- `items/rem-weierstrass-graph-hausdorff-dimension.md` — **still true**
- `items/thm-algebra-of-function-limits.md` — **still true**
- `items/thm-canonical-prime-factorisation.md` — **still true**
- `items/thm-cantor-powerset.md` — **still true**
- `items/thm-cauchy-criterion-via-lub.md` — **still true**
- `items/thm-evaluation-is-continuous-on-a-locally-compact-metric-domain.md` — **still true**
- `items/thm-gauss-test.md` — **still true**
- `items/thm-heine-borel-r.md` — **still true**
- `items/thm-integral-test-for-series.md` — **still true**
- `items/thm-limit-comparison-test.md` — **still true**
- `items/thm-metric-sequential-closure.md` — **still true**
- `items/thm-product-of-countable.md` — **still true**
- `items/thm-t4-implies-t3.md` — **still true**
- `items/thm-the-exponential-law.md` — **still true**
- `items/thm-tychonoff.md` — **still true**
- `items/thm-ultrafilter-lemma.md` — **still true**
- `library/combinatorics/finite-counting-and-binomial-coefficients.md` — **still true**
- `library/not-proved-here/deferred-set-theory-beyond-choice.md` — **still true**
- `library/real-analysis/countability-and-uncountability.md` — **still true**
- `library/real-analysis/equivalent-forms-of-completeness.md` — **still true**

### Broader-language candidates outside `prosecheck`

A conservative post-repair re-run of the bidirectional proximity expression
produced 280 files: 63 overlap the current structural set and 217 do not. False
claims from the non-overlap set are already recorded in P1–P33. The remaining
non-overlap files and their verdicts are:

- `DEFERRED.md` — **still true**
- `items/cex-a-closed-graph-without-continuity.md` — **still true**
- `items/cex-a-count-that-double-counts.md` — **still true**
- `items/cex-cantor-intersection-needs-vanishing-diameters.md` — **still true**
- `items/cex-condensation-needs-monotonicity.md` — **still true**
- `items/cex-differentiable-with-unbounded-derivative-is-not-lipschitz.md` — **still true**
- `items/cex-hilbert-monoid-factorisation-not-unique.md` — **still true**
- `items/cex-indicator-of-a-fat-cantor-set-is-not-integrable.md` — **still true**
- `items/cex-infinite-product-diverges-though-the-series-converges.md` — **still true**
- `items/cex-laurent-nested-intervals-empty.md` — **still true**
- `items/cex-line-with-two-origins.md` — **still true**
- `items/cex-proper-subspace-with-an-equinumerous-basis.md` — **still true**
- `items/cex-quotient-map-neither-open-nor-closed.md` — **still true**
- `items/cex-rationals-in-an-interval-are-disconnected.md` — **still true**
- `items/cex-separately-continuous-not-jointly-continuous.md` — **still true**
- `items/cex-sequential-closure-strictly-inside-closure.md` — **still true**
- `items/cex-the-deleted-tychonoff-plank-is-not-normal.md` — **still true**
- `items/cex-topologically-not-uniformly-equivalent.md` — **still true**
- `items/cex-zorn-hypothesis-fails.md` — **still true**
- `items/cor-a-linear-subspace-has-a-complement.md` — **still true**
- `items/cor-ac-iff-well-ordering.md` — **still true**
- `items/cor-bounded-derivative-implies-lipschitz.md` — **still true**
- `items/cor-cantor-function-is-continuous.md` — **still true**
- `items/cor-continuous-image-of-an-interval-is-an-interval.md` — **still true**
- `items/cor-countably-many-discontinuities-integrable.md` — **still true**
- `items/cor-differentiable-implies-continuous.md` — **still true**
- `items/cor-interval-uncountable.md` — **still true**
- `items/cor-laurent-nested-intervals.md` — **still true**
- `items/cor-primitives-of-a-continuous-function.md` — **still true**
- `items/cor-raabe-test.md` — **still true**
- `items/cor-ramsey-recursion-and-diagonal-upper-bound.md` — **still true**
- `items/cor-the-derangement-recurrences.md` — **still true**
- `items/cor-tietze-for-unbounded-and-open-interval-valued-maps.md` — **still true**
- `items/cor-urysohns-lemma-closes-the-separation-chain.md` — **still true**
- `items/cor-vector-valued-ftc-and-lipschitz-bound.md` — **still true**
- `items/def-absolute-and-conditional-convergence.md` — **still true**
- `items/def-additive-function.md` — **still true**
- `items/def-admissible-set.md` — **still true**
- `items/def-aleph-and-beth-hierarchies.md` — **still true**
- `items/def-axiom-of-foundation.md` — **still true**
- `items/def-cantor-set.md` — **still true**
- `items/def-cesaro-mean.md` — **still true**
- `items/def-compact-space.md` — **still true**
- `items/def-compactness-variants.md` — **still true**
- `items/def-completely-regular-and-tychonoff-spaces.md` — **still true**
- `items/def-dependent-choice.md` — **still true**
- `items/def-derivative.md` — **still true**
- `items/def-euclidean-inner-product.md` — **still true**
- `items/def-first-countable-top.md` — **still true**
- `items/def-formal-laurent-series.md` — **still true**
- `items/def-hausdorff-space.md` — **still true**
- `items/def-hereditary-property.md` — **still true**
- `items/def-infinite-product.md` — **still true**
- `items/def-int-abs.md` — **still true**
- `items/def-iterated-products-and-ordered-triples.md` — **still true**
- `items/def-metric-compactness-variants.md` — **still true**
- `items/def-metric-compactness.md` — **still true**
- `items/def-normal-and-t4-spaces.md` — **still true**
- `items/def-ring.md` — **still true**
- `items/def-separated-sets.md` — **still true**
- `items/def-zero-divisor-and-integral-domain.md` — **still true**
- `items/ex-a-uniformly-equicontinuous-family-of-lipschitz-functions.md` — **still true**
- `items/ex-alternating-harmonic-rearranged-to-three-halves.md` — **still true**
- `items/ex-alternating-harmonic-series.md` — **still true**
- `items/ex-arbitrarily-long-runs-of-composites.md` — **still true**
- `items/ex-baire-reproves-r-uncountable.md` — **still true**
- `items/ex-banach-fixed-point-for-square-roots.md` — **still true**
- `items/ex-basis-of-the-eventually-zero-families.md` — **still true**
- `items/ex-canonical-choice-on-naturals.md` — **still true**
- `items/ex-cauchy-complete-not-complete-field.md` — **still true**
- `items/ex-circle-as-r-mod-z.md` — **still true**
- `items/ex-connectedness-of-the-standard-topologies.md` — **still true**
- `items/ex-distance-to-the-integers-is-1-lipschitz.md` — **still true**
- `items/ex-f-n-and-its-coordinate-subspaces.md` — **still true**
- `items/ex-hamel-basis-of-r-over-q.md` — **still true**
- `items/ex-integers-under-addition.md` — **still true**
- `items/ex-klein-four-group.md` — **still true**
- `items/ex-limit-at-infinity-of-a-rational-function.md` — **still true**
- `items/ex-omega-plus-omega-is-countable.md` — **still true**
- `items/ex-r-as-a-vector-space-over-q.md` — **still true**
- `items/ex-ratio-fails-root-succeeds.md` — **still true**
- `items/ex-rational-function-field-order.md` — **still true**
- `items/ex-russells-socks.md` — **still true**
- `items/ex-sierpinski-space-is-t0-normal-and-not-regular.md` — **still true**
- `items/ex-sorgenfrey-line.md` — **still true**
- `items/ex-sup-rationals-below-sqrt-two.md` — **still true**
- `items/ex-symmetric-group-on-three-letters.md` — **still true**
- `items/ex-symmetries-of-a-square.md` — **still true**
- `items/ex-telescoping-sum-computed.md` — **still true**
- `items/ex-the-alexander-subbase-lemma-applied-to-a-closed-interval.md` — **still true**
- `items/ex-the-cofinite-topology-in-the-separation-hierarchy.md` — **still true**
- `items/ex-the-diagonal-in-the-cofinite-and-cocountable-topologies.md` — **still true**
- `items/ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy.md` — **still true**
- `items/ex-the-exponential-law-worked-on-the-line.md` — **still true**
- `items/ex-the-rationals-are-totally-disconnected-and-not-discrete.md` — **still true**
- `items/ex-two-subsequential-limits.md` — **still true**
- `items/fs-bounded-implies-convergent.md` — **still true**
- `items/fs-cardinality-of-a-union-adds-without-disjointness.md` — **still true**
- `items/fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set.md` — **still true**
- `items/fs-nonnegative-integrable-with-zero-integral-vanishes.md` — **still true**
- `items/fs-pointwise-limit-of-riemann-integrable-is-integrable.md` — **still true**
- `items/fs-projections-are-closed-maps.md` — **still true**
- `items/fs-q-is-g-delta.md` — **still true**
- `items/fs-quotient-map-is-open.md` — **still true**
- `items/fs-quotient-of-a-hausdorff-space-is-hausdorff.md` — **still true**
- `items/fs-ratio-limsup-at-least-one-diverges.md` — **still true**
- `items/fs-subsequence-convergence-implies-convergence.md` — **still true**
- `items/fs-the-continuum-has-cardinality-aleph-omega.md` — **still true**
- `items/fs-transfinite-induction-needs-choice.md` — **still true**
- `items/fs-uncountable-contains-interval.md` — **still true**
- `items/lem-absolute-convergence-implies-convergence.md` — **still true**
- `items/lem-cauchy-sequence-bounded.md` — **still true**
- `items/lem-colour-focussing-for-arithmetic-progressions.md` — **still true**
- `items/lem-compactness-of-a-subspace-is-ambient.md` — **still true**
- `items/lem-complete-remetrisation.md` — **still true**
- `items/lem-convergent-implies-bounded.md` — **still true**
- `items/lem-convergent-implies-cauchy.md` — **still true**
- `items/lem-countable-sets-are-null.md` — **still true**
- `items/lem-direct-sum-criterion.md` — **still true**
- `items/lem-finite-choice.md` — **still true**
- `items/lem-finite-sum-permutation-invariance.md` — **still true**
- `items/lem-interior-closure-boundary-identities.md` — **still true**
- `items/lem-limit-of-tail.md` — **still true**
- `items/lem-limsup-reflection.md` — **still true**
- `items/lem-monotone-with-interval-image-is-continuous.md` — **still true**
- `items/lem-omega-least-limit-ordinal.md` — **still true**
- `items/lem-order-of-element-exists.md` — **still true**
- `items/lem-reciprocal-of-null-diverges.md` — **still true**
- `items/lem-refinement-inequalities.md` — **still true**
- `items/lem-series-linearity.md` — **still true**
- `items/lem-span-of-a-single-vector.md` — **still true**
- `items/lem-subgroups-of-z-are-cyclic.md` — **still true**
- `items/lem-subsequence-inherits-limit.md` — **still true**
- `items/rem-cardinal-arithmetic-choice-ledger.md` — **still true**
- `items/rem-compactness-choice-ledger-metric.md` — **still true**
- `items/rem-completeness-routes.md` — **still true**
- `items/rem-connectedness-conventions.md` — **still true**
- `items/rem-constructions-this-page-stops-short-of.md` — **still true**
- `items/rem-continuum-hypothesis.md` — **still true**
- `items/rem-counting-conventions-and-scope.md` — **still true**
- `items/rem-derivative-conventions.md` — **still true**
- `items/rem-extended-real-conventions.md` — **still true**
- `items/rem-heine-criterion-choice-cost.md` — **still true**
- `items/rem-ordinal-versus-cardinal-exponentiation.md` — **still true**
- `items/rem-r-native-topology-scope.md` — **still true**
- `items/rem-rearrangement-in-higher-dimensions.md` — **still true**
- `items/rem-riemann-integral-choice-ledger.md` — **still true**
- `items/rem-riemann-stieltjes-conventions-and-scope.md` — **still true**
- `items/rem-rn-conventions-and-scope.md` — **still true**
- `items/rem-sieve-pigeonhole-and-double-counting-conventions.md` — **still true**
- `items/rem-strength-order-of-the-nonnegative-tests.md` — **still true**
- `items/rem-sums-proved-to-exist-but-not-evaluated.md` — **still true**
- `items/rem-topology-conventions.md` — **still true**
- `items/thm-alternating-series-test.md` — **still true**
- `items/thm-any-two-finite-bases-have-the-same-size.md` — **still true**
- `items/thm-baire-one-continuity-points.md` — **still true**
- `items/thm-cauchy-functional-equation-regularity.md` — **still true**
- `items/thm-compact-open-equals-compact-convergence.md` — **still true**
- `items/thm-comparison-of-the-three-function-space-topologies.md` — **still true**
- `items/thm-completely-normal-implies-normal.md` — **still true**
- `items/thm-composition-of-function-limits.md` — **still true**
- `items/thm-composition-with-a-continuous-function.md` — **still true**
- `items/thm-countable-union-of-countable.md` — **still true**
- `items/thm-decimal-expansions.md` — **still true**
- `items/thm-dimension-formula.md` — **still true**
- `items/thm-division-algorithm-in-z.md` — **still true**
- `items/thm-fat-cantor-set-has-positive-measure.md` — **still true**
- `items/thm-first-countable-sequences-suffice.md` — **still true**
- `items/thm-first-mean-value-theorem-for-integrals.md` — **still true**
- `items/thm-geometric-series.md` — **still true**
- `items/thm-infimum-property.md` — **still true**
- `items/thm-intermediate-value.md` — **still true**
- `items/thm-mertens.md` — **still true**
- `items/thm-metric-continuity-characterisations.md` — **still true**
- `items/thm-metric-equivalence-hierarchy.md` — **still true**
- `items/thm-monotone-convergence.md` — **still true**
- `items/thm-mostowski-collapse.md` — **still true**
- `items/thm-nonnegative-continuous-with-zero-integral-vanishes.md` — **still true**
- `items/thm-omega-one-is-the-least-uncountable-ordinal.md` — **still true**
- `items/thm-open-subsets-of-r-structure.md` — **still true**
- `items/thm-ratio-test.md` — **still true**
- `items/thm-rearrangement-sums-lie-in-an-affine-subspace.md` — **still true**
- `items/thm-root-test.md` — **still true**
- `items/thm-schroder-bernstein.md` — **still true**
- `items/thm-sequential-criterion-for-continuity.md` — **still true**
- `items/thm-substitution.md` — **still true**
- `items/thm-tarski-square.md` — **still true**
- `items/thm-the-empty-set-exists-and-is-unique.md` — **still true**
- `items/thm-the-separation-implication-chain.md` — **still true**
- `items/thm-uniform-limit-theorem.md` — **still true**
- `items/thm-vandermonde-identity.md` — **still true**
- `library/combinatorics/eulerian-and-hamiltonian-graphs.md` — **still true**
- `library/foundations/ordinal-arithmetic.md` — **still true**
- `library/not-proved-here/deferred-functional-analysis.md` — **still true**
- `library/number-theory/divisibility-gcd-and-bezout.md` — **still true**
- `library/real-analysis/absolute-convergence-and-rearrangement.md` — **still true**
- `library/real-analysis/cantor-set-baire-and-measure-zero.md` — **still true**
- `library/real-analysis/continuity-ivt-evt-and-uniform-continuity.md` — **still true**
- `library/real-analysis/foundations-of-the-real-numbers.md` — **still true**
- `library/real-analysis/limits-of-real-functions.md` — **still true**
- `library/real-analysis/monotone-functions-and-discontinuities.md` — **still true**
- `library/real-analysis/monotone-sequences-and-cauchy-completeness.md` — **still true**
- `library/real-analysis/properties-of-the-integral-and-the-working-ftc.md` — **still true**
- `library/real-analysis/rn-as-a-normed-space.md` — **still true**
- `library/real-analysis/sequences-and-limits.md` — **still true**
- `library/real-analysis/sine-cosine-and-the-definition-of-pi.md` — **still true**
- `library/real-analysis/the-derivative-and-mean-value-theorems.md` — **still true**
- `library/topology/function-space-topologies.md` — **still true**
- `library/topology/nets-and-filters.md` — **still true**
- `library/topology/separation-axioms.md` — **still true**

## High-risk targeted verdicts

| target | verdict |
|---|---|
| determinants, row reduction, and matrix pages predating the run | **still true** — all denials are local to the page or its reading-order position; no page says determinants remain globally absent |
| category theory | **still true** — no old page claims that categories, functors or natural transformations remain globally unavailable |
| bounded variation, absolute continuity and Riemann–Stieltjes integration | **now false in draft and published prose** — D1, D12 and P1–P3 |
| improper integration | **one predictive claim now false** — P4; other pre-order-165 claims explicitly say “at this point in the reading order” and remain true |
| finite-sum re-home from order 203 to 46 | **one count false** — P5; no arrival-order denial found in either endpoint or any consumer |
| affine-subspace vocabulary added by batch 9 | **one published global denial false** — P6 |
| real-power and extended-real vocabulary | **inherited global denials false** — P7–P19; local rational-exponent and real-valued-metric boundaries remain true |
| compactness, Hausdorffness, metrisation and general topology | **inherited global denials false** — P20 and P22–P29; theorem-specific deferrals remain true |
| GCD, aleph and cofinality vocabulary | **inherited global denials false** — P30–P33; earlier-page proof boundaries remain true after the proposed order qualification |
| Ramsey theory, plane graphs and polynomial rings | **still true except polygonal Jordan scope** — D6 repairs the polygonal/general split; no exclusivity denial was found for the new Ramsey, plane-graph or polynomial-ring pages |
| group-actions enrichment | **still true on the six-item published page** — the staged 31-item/16-example enrichment supplies the publishing-commit prose; no early edit was made |

The six published files whose stale text is directly attributable to this run
are P1–P6. D1, D6 and D12 are the corresponding run-authored draft repairs. The
remaining P entries are inherited falsehoods found because this sweep followed
the claims to the current corpus rather than stopping at the run manifest.

## Verification and blocker

- `git diff --check` — pass.
- `node tools/depcheck.mjs` — pass; 3,480 items, 210 pages.
- `node tools/fwdcheck.mjs` — pass; every added forward reference declared,
  strictly forward and cycle-free.
- `node tools/prosecheck.mjs` — pass; 3,690 files, **0 errors**, 579 heuristic
  warnings (215 scope-denial, 189 count-in-prose, 175 count-of-this-page).
- `node tools/prosecheck.mjs --warnings` — exit 0; the 215 scope candidates are
  the post-repair advisory set dispositioned above.

The official wrapper command
`node tools/gates.mjs --step 9 --run frontier-10` could not spawn its nested
`/usr/bin/node` in this execution runtime: both wrapper rows reported
`spawnSync /usr/bin/node EPERM`; the required row was therefore printed as
`FAIL` and the advisory row as `warn`. No permission or escalation was sought.
The wrapper's two declared commands are exactly the two direct `prosecheck`
commands above, and both pass when invoked without the nested spawn. This is an
infrastructure receipt blocker, not a content failure, and is recorded plainly
for the step-10 rundown.

## Mutation boundary and final reread

Only the 10 draft files listed in D1–D12 were changed (some entries share a
file). Every changed file was reread in full after its final edit. The published
files P1–P33 remain untouched; their edits are queued here for the publishing
commit. The whole incidence page, all deferred catalogue pages, and the current
published group-actions page were reread after the last draft repair. No further
false scope-denial claim was found. There is no mathematical blocker and no
permission prompt was raised.

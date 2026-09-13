# Step 3b helper c-3 checkpoint and handoff

Run: `phase-2-next-21`  
Pair: `the-ergodic-theorems-of-von-neumann-and-birkhoff`  
Role: pair authoring helper for group lead c

## Initial checkpoint

- Read in full: `CLAUDE.md`, `README.md`, `SCHEMA.md`, and
  `research/phase-2-next-21-step3b-helper-c-3.task.md`.
- Read the current pair rows in
  `research/phase-2-next-21-batch-1.pages.json`, the complete batch notes and
  coverage, the Step-3a pair decision, and the exact statements of all 57
  external dependencies declared by the 34 manifest items.
- Initial owned-file state: both page files and all 34 listed item files were
  absent. The pair must be materialized from its current manifest.
- Authoritative source passages checked directly from the fetched PDFs:
  Del Vigna, *The Birkhoff Ergodic Theorem*, complete pp. 1–6; Walkden,
  §§8.5–8.6 (printed pp. 78–81), §§9.5–9.6 (pp. 84–87), §§10.1–10.6
  (pp. 89–98), and §11.2 (pp. 99–101); Sarig, Chapter 2, Theorems 2.1–2.3
  and complete proofs (printed pp. 35–41, PDF pp. 43–49).
- Conventions fixed for all items: $T^0=\operatorname{id}$;
  $S_nf=\sum_{k=0}^{n-1}f\circ T^k$ is unnormalised;
  $A_nf=S_nf/n$; functions used pointwise are finite-valued measurable
  representatives; $L^p$ symbols denote a.e. classes only after
  representative independence is proved; half-open digit cylinders and the
  terminating/non-eventually-$(b-1)$ expansion convention are retained.
- Owner-held upstream blocker: the current notes identify 28 analytic items as
  reaching published A-P integral/$L^p$/Radon–Nikodym interfaces. I will author
  their local arguments completely but will not call those upstream suppliers
  repaired or publication-ready. The cylinder lemma's separate owner-held
  readiness record is overbroad according to the exact dependency audit and
  still requires owner release.
- New local obligation found from exact statements: the irrational-rotation
  proof applies the compact-metric unique-ergodicity theorem, while the
  declared `def-circle-rotation-and-doubling-map` statement does not establish
  compactness. I will add the pair-local A-page supplier
  `lem-unit-interval-circle-is-a-nonempty-compact-metric-space`, prove it from
  Heine–Borel and continuous images of compact spaces, and propose that the
  lead integrate its contract/dependency edge.

Next item: `def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace`.

## Item checkpoints 1–5: ergodic-theorem spine

1. `def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace`
   is complete. It fixes representative-level sums, $T^0$, and the complex
   fixed subspace without asserting constancy. Proposed contract correction:
   add direct dependency
   `def-complex-lp-and-euclidean-test-function-conventions`, because the
   manifest statement names complex $L^2$ but its original dependency list
   only defined the real quotient carrier.
2. `prop-ergodic-averages-are-well-defined-and-l-p-contractive` is complete.
   Measurability, null-preimage representative independence, finite-$p$
   integral invariance, the $p=\infty$ essential-bound equivalence, and the
   finite-sum contraction are all explicit. Proposed contract correction: add
   `def-complex-lp-and-euclidean-test-function-conventions` and
   `thm-complex-holder-minkowski-and-the-quotient-norm`; the original real
   norm/Minkowski suppliers do not by themselves prove the promised complex
   assertion.
3. `thm-maximal-ergodic-theorem` is complete by the strict-positive
   finite-maximum argument. It uses no finite-total-measure or inverse
   hypothesis; the limit $E_N\uparrow E$ is handled separately on $f^+$ and
   $f^-$.
4. `lem-sigma-finite-ergodic-oscillation-sets-have-finite-measure` is
   complete. The exact shifted-average identity gives strict invariance. For
   $\alpha>0$, every finite-measure $C\subseteq E_{\alpha,\beta}$ satisfies
   $\alpha\mu(C)\leq\lVert f\rVert_1$ after applying the maximal theorem to
   $f-\alpha1_C$; sigma-finite exhaustion closes the bound. The
   $\alpha\leq0$ case is reduced to $-f$ at the positive threshold $-\beta$.
5. `thm-birkhoff-ergodic-theorem` is complete. Each rational oscillation set
   has finite measure, the two strict-invariant maximal inequalities force it
   null, Fatou makes the limit finite and integrable, the shift identity gives
   invariance, and a countable inverse-image union proves representative
   independence. The complex case uses only real and imaginary parts.

Sources used for checkpoints 1–5: Del Vigna Theorems 3 and 5, complete pp.
2–6; Walkden §10.5, printed pp. 93–97; Sarig Theorems 2.1–2.2, printed pp.
35–40. Boundary cases checked: $n=1$, $p=\infty$, infinite total measure,
noninvertible $T$, nonergodic systems, and real/complex observables. Open
obligation: upstream A-P integral/$L^p$ suppliers remain owner-held; these
local proofs do not certify those published files.

Next item: `thm-birkhoff-limit-identification-on-finite-measure-spaces`.

## Item checkpoints 6–9: finite-measure identification and norm limits

6. `thm-birkhoff-limit-identification-on-finite-measure-spaces` is complete.
   A rational invariant-stratum argument proves the event-integral identity
   directly from the maximal theorem, without consuming the later $L^1$
   convergence lemma. The signed Radon–Nikodym density on the strict invariant
   sigma-algebra is then compared with the pointwise limit on rational strict
   level sets. Full AC is used exactly at the published Radon–Nikodym step;
   real and imaginary densities handle the complex case.
7. `lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces` is
   complete. For $p=1$, radial clipping, Markov, and contractivity give the
   uniform tail estimate
   $K\lVert f\rVert_1/M+\lVert(|f|-K)_+\rVert_1$, after which
   convergence in measure and Vitali apply componentwise. For $p>1$, bounded
   truncations converge by dominated convergence and Fatou plus contractivity
   controls both errors. The proof explicitly excludes $p=\infty$.
8. `cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems` is
   complete for $0<\mu(X)<\infty$. Normalizing the measure permits the exact
   invariant-function supplier, the event identity at $X$ supplies the factor
   $1/\mu(X)$, and the preceding lemma supplies $L^1$ convergence. Full AC is
   inherited exactly from limit identification.
9. `thm-von-neumann-mean-ergodic-theorem-in-l-two` is complete. It uses the
   published complex Hilbert Cesaro lemma for the Koopman isometry and retains
   the non-surjective case; Birkhoff is not used. Full AC is inherited exactly
   from the projection/Cesaro supplier.

Sources used for checkpoints 6–9: Del Vigna Theorem 5 and Corollary 6,
pp. 4–6; Walkden §§9.4–9.6 and §§10.1, 10.5, printed pp. 84–97; Sarig
Theorems 2.1–2.3, printed pp. 35–41. Boundary cases checked: zero total
measure for the identification theorem, positive finite non-probability
normalization in the corollary, complex observables, $p=1$, $1<p<\infty$,
and non-surjective Koopman isometries. Open obligation: the upstream A-P
Radon–Nikodym, integral, and $L^p$ suppliers still require owner closure.

Next item: `def-unique-ergodicity`.

## Item checkpoints 10–16: unique ergodicity and Weyl

10. `def-unique-ergodicity` is complete and keeps existence-plus-uniqueness
    of an invariant Borel probability separate from ergodicity relative to a
    fixed measure.
11. `lem-continuous-functions-determine-borel-probabilities-on-compact-metric-spaces`
    is complete by decreasing continuous distance cutoffs for closed sets and
    finite-measure uniqueness on the closed-set pi-system. The empty closed
    set and vacuous empty-space case are explicit.
12. `thm-unique-ergodicity-is-equivalent-to-uniform-ergodic-averages` is
    complete in both directions. Empirical probabilities, the exact
    telescoping invariance identity, compact-probability subsequences, and
    continuous-test uniqueness supply the proof. Countable choice is spent
    through the subsequence/representation supplier and the countable failure
    witnesses.
13. New local supplier
    `lem-unit-interval-circle-is-a-nonempty-compact-metric-space` is complete.
    The quotient map $q:[0,1]\to[0,1)$ is 1-Lipschitz into the circle metric,
    onto, and carries the Heine–Borel compact interval onto the circle. Proposed
    contract: add this lemma to the A-page inventory immediately before the
    irrational-rotation theorem, with deps
    `def-circle-rotation-and-doubling-map`, `thm-heine-borel-rn`,
    `thm-compactness-under-continuous-maps`, and
    `thm-compactness-agrees-with-metric-compactness`.
14. `thm-irrational-circle-rotations-are-uniquely-ergodic` is complete by the
    mandated non-Fourier route. Generic Birkhoff plus ergodicity gives the
    constant on a conull dense set, dominated convergence identifies the
    constant, and one finite net plus the common modulus of continuity upgrades
    to uniform convergence. Proposed additional direct dependency:
    `cor-compact-domain-maps-are-uniformly-continuous`; neither the original
    circle definition nor the equicontinuity lemma supplies uniform continuity
    of the starting observable.
15. `def-equidistribution-mod-one` is complete with half-open interval,
    fractional-part, empty-interval, and whole-interval conventions.
16. `thm-weyl-equidistribution-for-irrational-rotations` is complete.
    Explicit continuous upper/lower ramps on the two boundary arcs squeeze
    interval frequencies to interval length. It inherits countable choice from
    unique ergodicity and does not use the Fourier Weyl criterion.

Source used for checkpoints 10–16: Walkden Theorem 8.5.1 and Proposition
8.6.1 with their complete proofs, printed pp. 78–81. The local
irrational-rotation proof deliberately replaces Walkden's Fourier proof by the
design-mandated Birkhoff/equicontinuity argument. The local circle-compactness
supplier uses the published Heine–Borel and continuous-image theorems, with
Stacks Project Tag 0059 as its external locator. Open obligations: the lead
must integrate the new item and the two prerequisite corrections into shared
contracts/manifests; upstream integral defects remain owner-held.

Next item: `def-canonical-base-b-expansion-and-normality`.

## Item checkpoints 17–20: digit coding and probabilistic consequences

17. `def-canonical-base-b-expansion-and-normality` is complete.  The greedy
    recurrence reconstructs the number with an explicit bounded remainder and
    proves that its endpoint convention is terminating, equivalently not
    eventually $b-1$.  Overlapping word frequencies use starting positions
    $0\leq k<n$.
18. `lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints`
    is complete.  The iterated digit recurrence identifies each length-$\ell$
    word with its half-open level cylinder (in fact also at canonical
    endpoints), while the stated endpoint set is a countable union of finite
    sets and therefore null.  Countable choice is used only through the
    published countability/nullity suppliers.
19. `thm-borels-normal-number-theorem` is complete.  For every base and word,
    Birkhoff plus mixing/ergodicity gives a constant cylinder-frequency limit;
    dominated convergence, integral invariance, and interval length identify
    it as $b^{-\ell}$.  One explicitly countable exceptional union handles all
    bases, lengths, words, and endpoints.
20. `thm-fair-coin-frequency-strong-law` is complete.  The first-coordinate
    observable has shift average equal to the empirical proportion of ones;
    mixing, Birkhoff, and bounded dominated convergence identify the limit as
    the one-coordinate cylinder mass $1/2$.

Source used for checkpoints 17–20: Walkden §11.2, printed pp. 99–101, together
with the already checked Birkhoff material in §§10.1 and 10.5, printed pp.
89–97.  Boundary cases checked: canonical $b$-adic endpoints, overlapping
words, all integer bases rather than only doubling, and completed versus Borel
Lebesgue probability through the declared suppliers.  Open obligation: the
cylinder item's owner-held release and the inherited upstream analytic
suppliers still require lead/owner closure.

Next item: `fs-birkhoff-ergodic-averages-converge-at-every-point`.

## Item checkpoints 21–27: scope and hypothesis counterexamples

21. `fs-birkhoff-ergodic-averages-converge-at-every-point` is complete.  An
    explicit binary point with alternating constant blocks of lengths
    $1,2,4,\ldots$ has zero-frequency subsequences tending to $2/3$ and $1/3$;
    the doubling-map indicator average therefore diverges at that point.
22. `fs-every-measure-preserving-system-has-space-mean-ergodic-limits` is
    complete.  A nonconstant half-rotation-invariant indicator has every
    average equal to itself, rather than to its space mean $1/2$.
23. `fs-birkhoff-limit-is-always-constant` is complete using the same explicit
    invariant function, with nonconstancy verified on two positive-measure
    regions.
24. `fs-von-neumann-mean-convergence-implies-birkhoff-pointwise-convergence`
    is complete.  Level-by-level dyadic interval indicators converge to zero
    in $L^2$ and diverge at every point.  The item explicitly limits its
    refutation to the inference from norm convergence alone: it does not claim
    an actual ergodic-average counterexample, which Birkhoff rules out.
25. `fs-weyl-equidistribution-holds-for-every-rotation-angle` is complete with
    $\alpha=0$, whose visit frequency to $[0,1/2)$ is $1$ rather than $1/2$.
26. `fs-every-real-number-is-normal` is complete: the periodic binary string
    $0.1010\ldots$ has no occurrence of $00$.
27. `fs-birkhoff-ergodic-theorem-holds-for-every-measurable-function` is
    complete.  For doubling, the finite measurable function $f(0)=0$ and
    $f(x)=1/x$ has infinite integral by disjoint interval lower sums.  Birkhoff
    applied to $f_m=\min(f,m)$, followed by a countable conull intersection,
    forces $A_nf\to+\infty$ almost everywhere.  Proposed contract correction:
    add direct dependency `thm-finite-and-countable-subadditivity-of-measures`,
    which is used to combine the truncation exceptional sets and was absent
    from the manifest row.

Sources used for checkpoints 21–27: Del Vigna, Example 1 and Theorems 3–5,
pp. 1–6; Walkden §§8.6, 10.1, 10.5 and 11.2, printed pp. 80–101; Sarig,
Chapter 2, Theorems 2.1–2.3 and proofs, printed pp. 35–41.  Boundary cases
checked: a single exceptional orbit versus an a.e. theorem, lack of ergodicity,
the distinction between norm and pointwise convergence, rational angles,
periodic digit strings, and measurable finite non-$L^1$ observables.

Next item: `ex-borels-binary-normality-exception-is-uncountable-and-null`.

## Item checkpoints 28–35: companion examples

28. `ex-borels-binary-normality-exception-is-uncountable-and-null` is
    complete.  Fixing the first $n$ even digits gives $2^n$ disjoint cylinders
    of length $2^{-2n}$, so continuity from above gives nullity.  Arbitrary odd
    digits code the power set of the positive integers bijectively, while
    forced even zeros exclude eventual-one ambiguity and the word $11$.
    Proposed contract correction: add direct dependency
    `thm-lebesgue-measure-of-a-box-of-every-kind`, used to compute the cylinder
    lengths and absent from the manifest row.
29. `ex-weyl-equidistribution-for-square-root-two-initial-terms` is complete.
    It computes the exact fractional parts before displaying four-decimal
    approximations and clearly separates that finite illustration from the
    asymptotic theorem.
30. `ex-rational-half-rotation-has-a-nonconstant-ergodic-average` is complete.
    Even averages are the exact two-cycle mean, odd averages have pointwise
    error at most $1/n$, and the limit is invariant, nonconstant, and has the
    same integral $1/4$ as the observable.
31. `ex-kac-reciprocal-return-frequency-from-birkhoff` is complete.  Visits
    include time zero; the canonical definition satisfies
    $N_E(\tau_m+1,x)=m$, so the positive Birkhoff frequency gives
    $\tau_m/m\to1/\mu(E)$.  Full AC is used only through the chosen Birkhoff
    specialization, not to enumerate return times.
32. `ex-fair-coin-strong-law-from-the-shift` is complete by the coordinate
    identity $f(\sigma^kx)=x_k$ and the already proved shift theorem.
33. `ex-zero-point-one-zero-one-is-not-normal-in-base-two` is complete.  The
    geometric series gives $2/3$, the periodic expansion is canonical, and the
    word $00$ has frequency zero.
34. `cex-nonintegrable-observable-has-divergent-ergodic-averages` is complete
    as a self-contained counterexample, with measurability, infinite integral,
    bounded truncations, common conull set, and divergence to $+\infty$ all
    verified.  As for checkpoint 27, propose adding direct dependency
    `thm-finite-and-countable-subadditivity-of-measures` for the common conull
    set.
35. `ex-nonergodic-half-rotation-l-two-projection` is complete.  The explicit
    period-two estimate gives both pointwise and $L^2$ convergence to $g$;
    uniqueness of the $L^2$ limit in von Neumann's theorem identifies
    $g=P_Mf$.  Full AC is used only through that projection theorem.

The A and B page files are now materialized.  The A page includes all 26
manifest items plus the new local compact-circle lemma in prerequisite order;
the B page contains exactly the eight assigned examples.  Next action:
explicit-path precheck, link/dependency checks, rendercheck, and correction of
all failures within the exclusive scope.

## Final audit checkpoint and handoff

The final item-by-item reread found and repaired the following local defects
before validation:

- stale prose references created by canonical proof-phase adoption in the
  sigma-finite oscillation lemma, Birkhoff theorem, finite-measure
  identification theorem, unique-ergodicity equivalence, and uncountable-null
  example;
- the finite-measure identification proof now explicitly derives
  \(h\circ T=h\) from \(\mathcal I\)-measurability before forming modulo-null
  invariant rational comparison sets;
- the closed-set cutoff is correctly
  \(\phi_m=\max\{0,1-m\,d(\cdot,F)\}\), and its existence, Lipschitz property,
  and zero-set property now cite the exact published distance suppliers;
- compact continuous functions now cite the extreme-value theorem wherever
  boundedness is used, and passage from uniform convergence to convergence of
  probability integrals cites the exact integral triangle/monotonicity
  suppliers;
- every half-rotation item which computes interval masses or asserts
  positive-measure value sets now directly cites the interval-measure theorem;
- the \(\sqrt2\) example replaces a bare decimal approximation by the checked
  inequalities \(1.4142135^2<2<1.4142136^2\), which rigorously justify all five
  displayed four-decimal fractional parts; and
- the Del Vigna author name in the pointwise-everywhere false statement was
  corrected.

The complete proposed contract changes for lead integration are:

1. Add def-complex-lp-and-euclidean-test-function-conventions to
   def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace.
2. Add def-complex-lp-and-euclidean-test-function-conventions and
   thm-complex-holder-minkowski-and-the-quotient-norm to
   prop-ergodic-averages-are-well-defined-and-l-p-contractive.
3. Add the new A-page item
   lem-unit-interval-circle-is-a-nonempty-compact-metric-space with the four
   dependencies recorded in checkpoint 13, and add it to
   thm-irrational-circle-rotations-are-uniquely-ergodic.
4. Add lem-distance-to-set-is-lipschitz and
   thm-metric-closure-characterisation to
   lem-continuous-functions-determine-borel-probabilities-on-compact-metric-spaces.
5. Add thm-extreme-value-metric,
   thm-integral-triangle-inequality, and
   prop-order-and-scalar-rules-for-the-nonnegative-integral to
   thm-unique-ergodicity-is-equivalent-to-uniform-ergodic-averages.
6. Add cor-compact-domain-maps-are-uniformly-continuous and
   thm-extreme-value-metric to
   thm-irrational-circle-rotations-are-uniquely-ergodic in addition to the
   new local compact-circle lemma.
7. Add thm-finite-and-countable-subadditivity-of-measures to both
   nonintegrable-observable items.
8. Add thm-lebesgue-measure-of-a-box-of-every-kind to
   ex-borels-binary-normality-exception-is-uncountable-and-null,
   fs-every-measure-preserving-system-has-space-mean-ergodic-limits,
   fs-birkhoff-limit-is-always-constant,
   ex-rational-half-rotation-has-a-nonconstant-ergodic-average, and
   ex-nonergodic-half-rotation-l-two-projection.
9. Propagate the choice assumptions of the exact Lebesgue/rotation/Weyl
   suppliers into the affected statements: add
   prop-integer-base-map-preserves-lebesgue-measure and
   def-countable-choice to
   fs-birkhoff-ergodic-averages-converge-at-every-point; add
   def-countable-choice to the two half-rotation false statements,
   fs-weyl-equidistribution-holds-for-every-rotation-angle,
   ex-weyl-equidistribution-for-square-root-two-initial-terms, and
   ex-rational-half-rotation-has-a-nonconstant-ergodic-average; and add
   thm-lebesgue-measure-of-a-box-of-every-kind plus def-axiom-of-choice to
   fs-von-neumann-mean-convergence-implies-birkhoff-pointwise-convergence.
   The two nonintegrable-observable statements now also display their already
   declared countable-choice assumption.

Validation on the exact owned paths after these repairs:

- proof precheck: **31 checked, 0 failing**; the four definition items
  correctly have no proof section and were excluded from the proof-only
  invocation;
- rendercheck: **37 files clean** (35 items and both pages), using the real
  KaTeX renderer and renderer YAML parser;
- citecheck: **35 items clean**, with every recognised elementary move citing
  a statement that supplies it;
- prosecheck: **31 proof-bearing items clean**, with 0 errors and 0 warnings;
- repository-wide depcheck currently reports 40 errors and 270 warnings from
  other live/concurrent drafts, but a JSON filter over this pair's page slug
  and all owned ID stems reports **0 owned-relevant errors and 0
  owned-relevant warnings**.

No new published-item defect was found during the exact-statement reread.  The
previously recorded owner-held A-P analytic chain and cylinder-readiness
release remain open; this handoff does not certify or mutate either shared
record.  All 35 pair items and both pages are locally complete.  The next
action belongs to group lead c: inspect the proofs, integrate the proposed
contracts and new item into shared batch records, then validate and certify
each item subject to those owner-held gates.

# Automorphic forms, spectral theory, and higher-rank analytic results

**Planning status (2026-10-23):** proposed A/B page pairs and source/proof
obligations only. No library item, page, canonical plan, engine state, or
publication was changed. The machine-readable fragment and ordered inventories
owned by this track are in [`r4-sources/pair-fragment.json`](r4-sources/pair-fragment.json)
and [`r4-sources/proposed-inventories.json`](r4-sources/proposed-inventories.json).
They are candidates for the builder's combined fragments, not accepted items.

## Scope and coverage boundary

This track covers classical congruence modular forms and Hecke operators;
weight-zero Maass forms, Eisenstein series and spectral decomposition;
Hecke–Maass entropy/measure rigidity and quantum unique ergodicity (QUE);
Kuznetsov's formula; GL2 Rankin--Selberg theory and subconvexity; holomorphic
Hecke-eigenform mass equidistribution; a full-level GL3 automorphic-distribution
and Voronoi line; Selberg-eigenvalue evidence; and the exact GL(n+1) by GL(n)
results in Yang's 2023 and 2026 papers. It does not claim a complete analytic
theory for every GL(n), a general-conductor/high-rank subconvexity theorem, or
all-aspect bounds. Yang's 2026 Corollary 1.2 is limited to standard GL(n)
L-functions obtained by taking the tempered isobaric representation
`1 ⊞ ··· ⊞ 1`; Theorem A has a broader but still specific GL(n+1) × GL(n)
Rankin--Selberg scope, with fixed finite conductors and the t-aspect varying.
Yang 2023 supplies its stated level-aspect moment and qualitative
nonvanishing family, not an arbitrary individual subconvex bound.

The sources reviewed here support GL2; the Miller--Schmid source reviewed here
supports full-level cuspidal GL3; and Yang's two papers prove their own
GL(n+1) × GL(n) statements under the hypotheses recorded below. These facts do
not close the general GL(n) representation-theory, local/global
Rankin--Selberg, spectral, and conductor prerequisites. Those are explicit
upstream build obligations in the GL(n) foundation pair. GL(n) for n ≥ 4 is
not omitted: the foundation and Yang theorem pairs are staged for it, while
general standard-L-function analytic continuation/functional equation proof
and conductor-aspect/high-rank results remain unfulfilled source and proof
obligations. No all-aspect theorem is inferred from the t-aspect or moment
results.

The output is a finite sequence of seventeen A/B pairs. A pages carry
definitions and proved results; companion B pages carry worked examples and
finite instances. Every theorem item in the inventory is a proposed local
proof obligation. A literature citation, theorem statement in a source, or
source theorem with omitted prerequisites is not a substitute for suppliers in
the eventual item proof. Open problems do not supply logical proofs. Algorithms
may be legitimate dependencies as constructive objects; their correctness,
termination, and complexity claims require separate theorem suppliers.

## Ownership and deduplication ledger

The current carrier
[`library/complex-analysis/level-one-modular-forms-and-the-j-invariant.md`](../../../library/complex-analysis/level-one-modular-forms-and-the-j-invariant.md)
has `status: published`, 27 items, and no examples page content. This live
carrier is the ownership truth. It owns the modular-group action and standard
fundamental domain, compactified level-one modular curve, cusp q-expansion
principle, level-one modular/cusp forms, Eisenstein series, valence and
dimension formulas, graded ring, discriminant and j-invariant, and related
classical results. Reuse IDs including
`def-modular-group-action-on-the-upper-half-plane`,
`thm-standard-fundamental-domain-for-the-modular-group`,
`def-compactified-level-one-modular-curve`,
`thm-q-expansion-principle-at-the-cusp`,
`def-level-one-modular-form-and-cusp-form`,
`def-level-one-eisenstein-series`, `thm-eisenstein-series-are-modular-forms`,
`thm-level-one-valence-formula`, `thm-ring-of-level-one-modular-forms`, and
`def-modular-discriminant-and-j-invariant`. Do not create a second copy of
these items. The historic number-theory plan's earlier deferral of
automorphic material does not alter the published carrier or this addendum.

Reuse the published number-theory/complex-analysis pages
`primitive-dirichlet-l-functions-and-functional-equations`,
`dirichlet-characters-l-functions-and-primes-in-progressions`,
`dirichlet-series-and-euler-products`, `the-riemann-zeta-function`, and
`unbounded-self-adjoint-operators-and-stones-theorem` at their existing IDs.
The first two supply primitive characters, Gauss sums and Dirichlet functional
equations; the last supplies the unbounded self-adjoint spectral theorem and
min-max machinery. Keep each existing supplier in its present category.

No published page was found for congruence-level Hecke theory, Maass cusp-form
spectral decomposition, Hecke--Maass QUE, Kuznetsov, automorphic GL2/GL3
L-functions, or the Yang results. There is therefore no current
automorphic-page item to reuse. The algebraic R4 track's planned A pages
`modular-forms-and-galois-representations`,
`galois-representations-and-frobenius`,
`constructible-etale-sheaves-and-lisse-sheaves`,
`compactly-supported-etale-cohomology-and-trace-formula`, and
`deligne-weights-and-finite-field-trace-bounds` supply exact dependencies for
the holomorphic Deligne/Ramanujan theorem. Item edges include
`thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform`,
`thm-delignes-galois-representation-has-eigenform-frobenius-polynomial`,
`thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial`,
`def-lisse-l-adic-sheaf-on-a-scheme`,
`def-frobenius-trace-function-of-a-lisse-sheaf`,
`thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves`,
and `thm-deligne-weight-bound-for-compactly-supported-cohomology`. The
modular-curve Galois representation and Frobenius-polynomial comparison are
owned by that algebraic pair; this analytic track only adds the derived
full-level eigenvalue bound. Do not duplicate the finite-field trace-function
pair owned by the algebraic track.

## Full-text source ledger and result disposition

The staged source files and SHA-256 hashes are recorded in
[`r4-sources/source-index.md`](r4-sources/source-index.md). URLs below resolve
to the retrieved version, not to a moving abstract page. “Read” means the
specified full text was actually read at the stated extent; it does not imply
that cited prerequisites inside that source have also been read or discharged.

### Modular forms, GL2, and spectral theory

1. **J. S. Milne, _Modular Functions and Modular Forms_, version 1.31 (2017),**
   <https://www.jmilne.org/math/CourseNotes/MF.pdf>. Full PDF and extracted
   text staged. Read complete Ch. 2 (printed pp. 25–39), Ch. 4 (pp. 48–66),
   Ch. 5 (pp. 67–86), and §9 (pp. 101–104). Include the congruence modular
   curve/form setup, Petersson and Poincaré-series tools, Hecke formulas and
   actions, and the Hecke--Weil L-function discussion in the named modular
   and GL2 pairs. The newform discussion's cited Ogg details (§§5.33–5.37)
   and the converse-theorem proof omitted in §9 are not claimed as supplied;
   newform classification and converse theorems are deferred pending those
   proof sources.
2. **A. Knightly and C. Li, _Kuznetsov's Trace Formula and the Hecke
   Eigenvalues of Maass Forms_, arXiv:1202.0189v1 (2012),**
   <https://arxiv.org/pdf/1202.0189v1>. Full article PDF/text staged. Read
   complete §§1.1–1.2, 4.1–4.3, 5.1–5.8, 6.1–6.4, 7.1–7.7 (including
   Theorems 7.13 and 7.14), 8.1–8.5, 9.1–9.3, and 10. The Maass, Hecke,
   Eisenstein/Fourier-coefficient, spectral-decomposition, pre-Kuznetsov and
   Kuznetsov statements and proofs go to the Maass and Kuznetsov pairs;
   Theorem 8.1's holomorphic-strip/decay extension and Theorem 10.2's
   vertical level-aspect Sato--Tate theorem are included with their exact
   hypotheses. Theorem 10.2 fixes a prime p and m, levels tending to infinity
   coprime to p, the stated Hecke-basis weights
   `|a_m(u)|^2 / ||u||^2 · h(t_u)/cosh(πt_u)`, and the correction by
   `Σ_{j=0}^{ord_p(m)} X_{2j}`; for p not dividing m the limit is
   Sato--Tate. Do not turn this into horizontal Sato--Tate or insert a
   Ramanujan hypothesis. §9's generalized Kloosterman estimates have
   classical Weil/Gauss-sum inputs. They are deferred from the inventory; no
   generalized-sum theorem depends on them. The exact trace identity does not
   import that strengthening.
3. **S. D. Miller and W. Schmid, _The Rankin--Selberg Method for Automorphic
   Distributions_, arXiv:math/0605783v1,**
   <https://arxiv.org/pdf/math/0605783v1>. Full PDF/text staged. Read complete
   §4 (extracted lines 1450–2480): classical Mellin and GL2 Rankin--Selberg
   series, Eisenstein unfolding, gamma factors, analytic continuation and
   functional equation. Include the proved unfolding/FE contracts with the
   integrability and cuspidality hypotheses actually used there. Local
   Rankin--Selberg lemmas cited by the article must be made local suppliers;
   they are not discharged by this section's citation alone.
4. **R. Holowinsky and K. Soundararajan, _Mass Equidistribution for Hecke
   Eigenforms_, arXiv:0809.1636v1,**
   <https://arxiv.org/pdf/0809.1636>. Entire paper read and staged. Include
   Theorem 1 for normalized holomorphic Hecke eigencuspforms of even weight k
   for `SL2(Z)`: matrix coefficients against fixed Hecke Maass cusp forms
   decay by `O_{φ,ε}((log k)^(-1/30+ε))`, and against the specified fixed
   incomplete Eisenstein series by `O_{ψ,ε}((log k)^(-2/15+ε))`; use the
   spectral-density argument for the resulting mass equidistribution. Include
   Theorem 2's shifted-convolution/sieve bound and Theorem 3's weak
   subconvexity bound as named supplier contracts, not as proofs supplied by
   the article (the paper states these prior results). Section 2 records
   symmetric-square continuation, zero-free, and lower-bound inputs. The
   article uses Deligne, Gelbart--Jacquet symmetric-square automorphy, and
   cited Rankin--Selberg/zero-free results. Build their proof chains in the
   named Deligne and GL2/symmetric-square suppliers. Maass QUE is treated in
   separate pairs and sources below.
5. **P. Michel and A. Venkatesh, _The Subconvexity Problem for GL2_,
   arXiv:0903.3591v2 (2010),**
   <https://arxiv.org/pdf/0903.3591v2>. Full PDF/text staged. Read the theorem
   statements and complete §§2–4 and §§5.1–5.2. Include Theorem 1.1 for
   unitary-central-character GL1/GL2 representations over a fixed number
   field, `L(π,1/2) ≪_F C(π)^(1/4−δ)`, and Theorem 1.2 for GL2 × GL2,
   `L(π1×π2,1/2) ≪_{F,π2} C(π1×π2)^(1/4−δ)`, with its stated polynomial
   uniformity in the field discriminant and conductor of the fixed second
   factor. The proof's adelic Sobolev norms, local Whittaker/trilinear/Hecke
   calculations, regularized global periods and amplification go to the
   GL2-subconvex pair. It is a hybrid conductor result, not a trace-formula
   result. Do not state a numerical value of δ or an unrestricted all-aspect
   estimate. §5.3 and later material were not read or used.

### GL3 distributions and higher-rank relative trace formula

6. **S. D. Miller and W. Schmid, _Distributions and Analytic Continuation of
   Dirichlet Series_, arXiv:math/0403030v1 (2004),**
   <https://arxiv.org/pdf/math/0403030v1>. Full 72-page PDF/text staged.
   Read complete §§2–7: order of vanishing/canonical extension, Fourier and
   Fourier--Mellin transforms and functional equation, zeta/Dirichlet and
   GL2 applications, the `T_{α,η}` operators and adjoints, and uniform
   families/multivariable distribution integration. Include those local
   analytic distribution suppliers in the GL3 pair. This is the companion
   distribution paper, not the separate 2006 Rankin--Selberg article.
7. **S. D. Miller and W. Schmid, _Automorphic Distributions, L-functions,
   and Voronoi Summation for GL(3)_, arXiv:math/0408100v3 (2004),**
   <https://arxiv.org/pdf/math/0408100v3>. Full PDF/text staged. Read the
   introduction and complete §§2–6: automorphic distributions and their
   induced-model embedding, Heisenberg Fourier expansion and proof,
   full-level `GL(3,Z)` Voronoi summation, and standard/twisted GL3 L-function
   analytic continuation and functional equations. Include only the
   cuspidal full-level GL3 statements with their parity/twist conditions;
   do not claim the paper proves general-level or arbitrary GL(n) extensions.
   The §7 converse-theorem material was not included. The companion source
   above closes the cited [29] distribution/Fourier--Mellin lemmas. The
   automorphic embedding still requires the named Casselman and
   Casselman--Wallach representation-theory suppliers; the article's
   citations alone do not close them.
8. **Z. Yang, _Relative Trace Formula and L-functions for GL(n+1) × GL(n)_,
   arXiv:2303.02225v1 (2023),**
   <https://arxiv.org/pdf/2303.02225v1>. Full PDF/text staged. Read all of
   §1, §§2–8, and §§9.1–9.2. Include the proved relative trace formula
   (Theorems D/E) with its number-field, unitary cuspidal GL(n) input,
   Whittaker-vector, central-character, compact-mod-center test-function,
   generic-spectrum, truncation/regularization, and correction-term
   hypotheses. Include Theorem B/§9.1's level-aspect second moment only for
   fixed everywhere-unramified `π′ ∈ A_0([GL_n],ω′)`, varying generic
   automorphic spectrum at level ideal `N`; its weights are the paper's
   `α_{φ,N},β_{φ,N}` and its main term is
   `c_{F,f∞}H^♢_{f∞}(λ_{π′∞})Λ(1,π′,Ad)|N|^n log|N| + O(|N|^n)`.
   Corollary 9.4 separately gives the compact archimedean-window sum
   `Σ_{π∈A_0(N,ω), λ_{π∞}∈D}|L(1,π×π′)|²/L(1,π,Ad) ≪ |N|^n log|N|`.
   Include Theorem C/§9.2 qualitative simultaneous nonvanishing only under
   its coprime nontrivial conductors, fixed split-place, matching
   archimedean-type and prescribed-family hypotheses. This is not the 2026
   quantitative count. Local/global Rankin--Selberg, Arthur/Langlands
   spectral decomposition, and test-vector inputs cited by the paper need
   named proved suppliers in the GL(n) foundation/RTF chain.
9. **Z. Yang, _Relative Trace Formula, Subconvexity and Quantitative
   Nonvanishing of Rankin--Selberg L-functions for GL(n+1) × GL(n)_,
   arXiv:2309.07534v2 (version dated 2026-09-16),**
   <https://arxiv.org/pdf/2309.07534v2>. Full PDF/text staged. Read complete
   §§1–11, including all theorem statements and proofs. Include Theorem A's
   t-aspect bound for n≥1, unitary pure-isobaric generic `π` on GL(n+1)/Q
   and unitary cuspidal `π′` on GL(n)/Q, with fixed finite conductors and
   constants depending on them:
   `L(1/2+it,π×π′) ≪_{π,π′,ε} (1+|t|)^(n(n+1)/4−1/[4(3n²+n−1)]+ε)`.
   If `π` is tempered, the saving is `1/[4(3n−1)]`. The theorem's proof
   uses its amplified relative trace formula, microlocal archimedean test
   vectors, spectral lower bound, small/dual/orbital-cell estimates and
   regular orbital estimate; it invokes the 2023 RTF and named
   Rankin--Selberg/local representation suppliers. Corollary 1.2 is a
   different, narrower item (next pair): only standard GL(n) `L(s,π′)` from
   `π=1⊞···⊞1`, a tempered isobaric representation. Theorem C's quantitative
   nonvanishing is only `n≥2`: for unitary cuspidal `π′_1,π′_2` on GL(n)/Q
   with coprime conductors `M′_1,M′_2`, `M′_1M′_2>1`, and matching
   archimedean type, auxiliary split prime `p*∤M′_1M′_2`, `T,M≥1` with
   `(M,M′_1M′_2p*)=1`, fixed unitary Hecke character `ω` trivial at infinity,
   fixed archimedean parameter of growth `T`, fixed supercuspidal local type
   `π_{p*}` at `p*` with central character `ω_{p*}`, and the paper's fixed-width
   family/spectral window, the count is
   `≫(TM)^(-ε)M^(n/(3n²+n−1))T^(1/[2(3n²+n−1)])` when
   `M≤T^((n+1)/(n²−n−1))`, and
   `≫(TM)^(-ε)M^(1/(n²+n+1))T^(1/[2(n²+n+1)])` otherwise. Do not extend any
   of these to all aspects or arbitrary standard GL(n) representations.

### Hecke–Maass entropy, measure rigidity, and QUE

- **J. Bourgain and E. Lindenstrauss, _Entropy of Quantum Limits_, Comm. Math.
  Phys. 233 (2003), 153–171, full 21-page author manuscript,**
  <https://www.math.princeton.edu/~elonl/Publications/pos_entropy.pdf>.
  Full PDF/text staged and complete paper read (printed pp. 1–21, §§1–5).
  Include Theorem 2.1, Corollary 2.2 and the compact part of Theorem 2.3.
  The paper's §4 noncompact argument has a documented split-algebra gap;
  the exact primary correction is Bourgain–Lindenstrauss, “Corrections and
  Additions to ‘Entropy of Quantum Limits’,” dated 2004-10-26,
  <https://math.huji.ac.il/~elon/Publications/erratum-pos-entropy.pdf>.
  Its complete six-page text was read and is staged by the algebraic/trace
  researcher at
  [the R3 source review](r3-sources/noncompact-entropy-source-review.md).
  The correction's Theorem 2 (printed pp. 2–3) gives, for each compact
  `Ω⊂\Gamma\backslash SL_2(R)`, `x∈Ω`, and small `ε`, the alternative
  `μ(xB(ε,τ₀)) ≪_Ω ε^{2/9}` or `M(1_{Ωᶜ},x)>0.199`, with
  `τ₀=1/50`; the maximal inequality bounds the exceptional set by `5.1δ`
  when `μ(Ωᶜ)<δ`. Thus a.e. local dimension and every geodesic-flow ergodic
  component's entropy are at least `2/9` (Haar entropy normalization 2).
  Its §2 treats the split algebra `Q×Q` by integer-eigenvector and orbit
  escape/Mahler arguments. The correction also fixes the BL03 §5 Theorem
  3.5(4) exponent from the printed `ε^{-κ′/4}` to `ε^{-κ′}`. The erratum
  itself has a factor-two typo in Lemma 5's displayed trace hypothesis:
  `tr(g)=2 cosh(t₀)` is forced by its proof and later application, and the
  R3 source review records that one-line repair. Preserve the alternatives
  and exceptional-set scope; do not upgrade this to a uniform pointwise
  plaque bound on all of a noncompact quotient. §5's Brun sieve and Burgess
  character-sum estimate remain separate proof suppliers.
- **E. Lindenstrauss, _Invariant Measures and Arithmetic Quantum Unique
  Ergodicity_, Ann. of Math. 163 (2006), 165–219,**
  <https://annals.math.princeton.edu/wp-content/uploads/annals-v163-n1-p03.pdf>.
  Full 55-page published PDF/text staged and complete §§1–8 plus Appendix A
  read. Include Theorem 1.1's measure-rigidity contract: `A`-invariant
  probability measure on the quotient `Γ\(SL2(R)×L)/K`, discrete `Γ` with
  `Γ∩L` finite, positive entropy for every `A`-ergodic component, and
  `L/K`-recurrence imply a linear combination of algebraic `SL2(R)`-invariant
  measures. Theorem 1.4 gives compact arithmetic-surface QUE; for
  noncompact congruence surfaces it gives the limit `c·dvol`, `0≤c≤1`,
  allowing escape of mass. The proof chain is concrete: §§2–4 construct
  leafwise conditional measures and characterize recurrence; §§5–6 prove
  conditional-measure facts for expanding/contracting foliations; §7 proves
  measure rigidity using Ratner's horocycle `H`-property and a
  Ledrappier–Young/Margulis–Tomanov entropy characterization (Theorem 7.6
  cites MT94, Proposition 9.2); §8 proves Hecke-tree recurrence (Theorem
  8.1); Appendix A proves the required Besicovitch maximal inequality for
  non-invariant leafwise conditional measures. The other applications in
  Theorems 1.5–1.6 are outside this pair. Theorem 1.4 cites the BL03
  positive-entropy result; the 2004 correction supplies its noncompact
  entropy branch.
- **K. Soundararajan, _Quantum Unique Ergodicity for the Full Modular Surface_,
  arXiv:0901.4060v1 (2009),**
  <https://arxiv.org/pdf/0901.4060v1>. Full 10-page PDF/text staged and the
  complete article read: §1 Theorem 1 and Proposition 2, §2 their deduction
  from Theorem 3, §3 Hecke-multiplicative preliminaries and Lemmas 3.1–3.3,
  and §4 proof of Theorem 3. Theorem 1 is for an `L²`-normalized full-level
  Hecke–Maass cusp form with Laplace eigenvalue tending to infinity; its
  microlocal lifts have only normalized Haar measure as weak-* limit.
  Proposition 2 gives the uniform cusp-tail bound
  `∫_{|x|≤1/2,y≥T}|φ|² dxdy/y² ≪ log(eT)/√T`. The proof derives it from the
  source's Theorem 3 for Hecke-multiplicative sequences. Section 2 explicitly
  combines that no-escape bound with Lindenstrauss's result that limits are
  `c·Haar`; the limiting `c` must be 1. It states that the argument extends
  to congruence subgroups, but the planned theorem here is only full level.
  Chebyshev's interval prime bound is reusable from the existing
  `chebyshev-bounds-and-mertens-theorems` page. The article's cited Burgess
  estimate is not proved there and remains a named local proof obligation.
- **Dated QUE status search (2026-10-23),** raw arXiv API response staged as
  `r4-sources/arxiv-api-que-current-status-search-2026-10-23.xml`, exact
  query <https://export.arxiv.org/api/query?search_query=all%3A%22quantum%20unique%20ergodicity%22&start=0&max_results=50&sortBy=submittedDate&sortOrder=descending>,
  sorted by submission date and retrieved 2026-10-23 08:26:01Z. The results include a June 2026 review that
  still describes general QUE as a conjecture and current projects that
  continue to prove restricted Hecke/geometry cases. This is bounded
  search-status evidence, not a claim that an arXiv query proves universal
  non-resolution. The `op-` item is specifically the full modular-surface
  QUE statement without a Hecke-eigenfunction hypothesis and records this
  date/search scope.

### Selberg eigenvalue evidence and status

10. **A. Booker, M. Lee, and A. Strömbergsson, _Twist-Minimal Trace Formulas
    and the Selberg Eigenvalue Conjecture_, arXiv:1803.06016v2 (2020),**
    <https://arxiv.org/pdf/1803.06016v2>. The full PDF/text were read through
    §§2.1–2.9 and §3, as well as the complete introduction and §§4–5. Include
    the explicit arbitrary-conductor Γ0(N) trace formula and its full chain:
    §2.1 imports the general trace formula; §2.2 derives the formula; §§2.3–2.9
    compute identity, noncuspidal, cusp, cuspidal, Eisenstein, and continuous
    terms; §3 proves the newform and twist-minimal sieves. Theorem 1.1 verifies
    the conjecture for Γ1(N), N≤880, and Γ(N), N≤226. Theorem 1.2 is conditional
    on Artin's conjecture. Sections 4–5 give the Γ(N) reduction and interval
    arithmetic computations. They report quadratic class numbers through
    `e^20`, `X≤40`, and `M=200`; no source code, certificate, or raw interval
    data is staged. §6 on complexity was not read. Treat the finite theorem,
    its algorithm description, and the open conjecture as separate contracts.
    The computation is rigorous subject to the paper's stated software and
    hardware assumptions. The general trace formula is source-mapped to the
    complete Booker–Strömbergsson 2007 proof, read through §§2.1–2.3: Theorem 2
    and formula (2.37) prove the general cofinite isometry-group formula;
    Theorem 3 gives the squarefree Γ0(N) specialization; Theorem 4 sieves to
    newforms. Only the opening computational remarks of §2.4 were read; the
    source and reading map are in the source index.
11. **A. Pascadi, _On the Exponents of Distribution of Primes and Smooth
    Numbers_, arXiv:2505.00653v2 (2025),**
    <https://arxiv.org/pdf/2505.00653v2>. Full PDF/text staged; read the
    complete relevant introduction and the exact §1.4 discussion of the
    exceptional spectrum. It formulates Selberg's conjecture for congruence
    `Γ0(q)` in the cuspidal Maass spectrum, excluding constants: every
    cuspidal Laplace eigenvalue is at least 1/4. For an exceptional cusp form
    it defines `θ_f=2|Im(t_f)|=sqrt(max(0,1−4λ_f))` for
    `λ_f=1/4+t_f²`; thus `θ_f=0` for real tempered `t_f`. It records
    `θ_max≤7/32`, equivalently `|Im(t_f)|≤7/64` and
    `λ_f≥975/4096`. Include Kim--Sarnak's unconditional
    pointwise bound as a proved result separate from the conjecture. Its
    exact proof source is identified below but has not been retrieved/read in
    this track, so the item is not proof-closed here.
12. **Dated status search for Selberg's eigenvalue conjecture (2026-10-23),**
    raw arXiv API response staged as
    `r4-sources/arxiv-api-selberg-eigenvalue-current-status-search-2026-10-23.xml`,
    exact query
    <https://export.arxiv.org/api/query?search_query=all%3A%22Selberg%20eigenvalue%20conjecture%22&start=0&max_results=30&sortBy=submittedDate&sortOrder=descending>.
    Retrieved 2026-10-23 08:04:53Z. The newest exact-phrase result was
    arXiv:2608.25812v1 (submitted 2026-08-26), whose abstract still assumes
    the Selberg eigenvalue conjecture; Pascadi's 2025 version also states it
    as a conjecture. This is bounded status evidence, not a proof that no
    resolution exists anywhere. Formulate the `op-` item with this dated,
    search-limited status note and no logical dependencies/supplier role.

### Cross-track finite-field evidence (not a duplicate row here)

The finite-field trace-function/Deligne-weight review belongs to the algebraic
track, not this automorphic fragment. Its owner reported reading the complete
21-page 2014 manuscript by Fouvry–Kowalski–Michel, “Trace functions over finite
fields and their applications,” §§2–4, especially Theorem 4.1 at printed p. 13
(published Colloquium De Giorgi 2013 and 2014, 2015, pp. 7–35, DOI
<https://doi.org/10.1007/978-88-7642-515-8_3>), and Deligne, *Weil II*,
§3.3.1, Theorem 1. The reported correlation contract is for geometrically
irreducible, pointwise weight-zero middle extensions on `A¹/F_p`, `ℓ≠p`:
geometrically nonisomorphic sheaves have correlation
`≤3c(F1)^2c(F2)^2√p`; in the geometrically isomorphic case subtract the
unit-modulus phase times p and retain the same error. The algebraic owner
reports no geometric/étale local supplier chain yet. I did not independently
retrieve/read those two sources for this GL2/GLn dossier, so this is
cross-track ownership evidence and a proof gap, not a claim of my source
reading or a dependency of the automorphic pairs.

## Proposed pair contracts and local proof obligations

The machine-readable row and inventory files list the exact proposed item IDs,
titles, kinds, item dependencies, and page dependencies. Each theorem listed
below is a proposed local theorem contract. Literature results provide source
evidence and proof obligations; they do not become supplier items without a
local argument or proved local dependencies.

1. **Congruence forms and Hecke operators.** Start from the published level-one
   carrier. Define `Γ0(N)`, nebentypus, cuspidal forms, Petersson product,
   normalized Hecke operators and exact coefficient formulae. Prove
   preservation of cusp forms, commutation, and self-adjointness only with the
   hypotheses Milne proves (including trivial nebentypus where required).
   B-page examples use the existing level-one Eisenstein/discriminant and
   concrete congruence-level coefficients. The Ogg newform details omitted by
   the reviewed source remain outside this pair.
2. **Maass forms and spectral decomposition.** Define the weight-zero
   hyperbolic Laplacian, Maass cusp form, spectral parameter, Eisenstein
   series and Fourier coefficients. Prove the discrete-cuspidal plus
   continuous-Eisenstein spectral decomposition in Knightly--Li's precise
   level and nebentypus setting, using the existing self-adjoint spectral
   theorem plus the local domain, cusp truncation and completeness arguments.
   Do not assert compact resolvent for a noncompact cusp surface.
3. **Entropy bounds and measure rigidity.** Define Hecke quantum limits before
   the positive-entropy theorem. State Bourgain--Lindenstrauss Theorems 2.1/2.3
   and Corollary 2.2 with `κ′=2/9`, and Lindenstrauss Theorems 1.1/1.4/8.1
   with their distinct scopes. For noncompact congruence quotients, use the
   corrected 2004 Theorem 2 alternative: pointwise plaque mass
   `O_Ω(ε^{2/9})` or geodesic-flow maximal-function escape above `0.199`; its
   maximal inequality bounds the exceptional set, and the local-dimension
   implication yields the a.e. entropy consequence. Do not state a uniform
   plaque bound at every point. Explicit suppliers are R2's Brun truncation theorem
   `thm-brun-combinatorial-sieve-inequalities` through the local BL application
   `thm-bourgain-lindenstrauss-brun-fundamental-lemma-application`, and the
   Burgess bound (Theorems 5.3/Corollary 5.4), the corrected split-case
   Mahler/escape argument, the corrected plaque alternative,
   geodesic-flow maximal estimate, local-dimension-to-entropy, Hecke-tree
   recurrence, MT94 Prop. 9.2 entropy/leafwise conditional partitions,
   Ratner's horocycle H-property, and Lindenstrauss Appendix A's Besicovitch
   maximal inequality. The cross-track R3 review records the correction proof
   and the Lemma 5 trace-factor repair. The imported sieve and measure-rigidity
   supplier proofs remain explicit local proof tasks where their primary
   sources have not been read. The unimodular lattice model reuses
   `def-full-euclidean-lattice-and-covolume`; the entropy pair requires its
   Minkowski page for that item.
4. **Hecke–Maass quantum unique ergodicity.** For the full modular surface, state
   Soundararajan's Theorem 1 for `L²`-normalized full-level Hecke–Maass cusp
   forms with eigenvalues tending to infinity. Prove the Proposition 2 cusp
   tail `≪log(eT)/√T` from the paper's Theorem 3 Hecke-multiplicative estimate,
   the Maass Fourier–Whittaker expansion, Parseval and the reusable Chebyshev
   prime bound; combine it with Lindenstrauss's `c·Haar` theorem to show `c=1`.
   The corrected noncompact entropy theorem closes the upstream entropy
   statement; its Burgess, Hecke-tree, maximal-inequality, Mahler and measure-
   rigidity suppliers remain local proof obligations. Add
   `op-que-for-maass-eigenfunctions-without-hecke-eigenfunction-hypothesis`
   stating that every sequence of `L²`-normalized Laplace eigenfunctions on
   the full modular surface with eigenvalues tending to infinity has normalized
   Liouville measure as its unique weak-* limit, with no mass escape, without
   a joint Hecke-eigenfunction hypothesis. This is a separate open problem
   and never a dependency.
5. **Kuznetsov and Hecke statistics.** Define Kloosterman sums and Bessel
   transforms; prove Theorems 7.13/7.14 and the §8 test-function extension
   under the paper's Paley–Wiener/strip/decay assumptions. Add Theorem 10.2
   vertical level-aspect Sato–Tate with the exact weights and correction
   factors above. The identity is the staged result. Knightly–Li §9 generalized Kloosterman
   estimates are deferred: although that section was read, no generalized-sum
   theorem is included until its exact Weil/Gauss-sum supplier chain is built.
6. **GL2 Rankin–Selberg L-functions.** Derive the standard GL2 Euler product
   from the Hecke relations; use the full-level holomorphic cusp form's Mellin
   transform for its FE; prove the GL2 Rankin–Selberg integral, continuation,
   gamma factors and FE in the Miller–Schmid §4 setting. Local obligations
   include convergence/unfolding, invariant measures, Fourier/Mellin
   inversion and the cited local holomorphy lemma. Reuse existing Dirichlet
   FE items in twist examples.
7. **GL2 hybrid subconvexity.** State MV Theorems 1.1/1.2 with fixed number
   field, unitary central character, fixed second GL2 factor for the
   convolution theorem, analytic conductor, and an unspecified absolute
   `δ>0`. Local proof items supply Sobolev bounds, Whittaker/trilinear/Hecke
   calculations, regularized period identities, amplification and
   conductor interpolation. The source gives a hybrid conductor result; the
   examples must not advertise a separate unconditional t-only theorem.
8. **Holomorphic Deligne/Ramanujan interface.** For normalized full-level
   holomorphic Hecke eigenforms, reuse the algebraic R4 attached-representation
   and Frobenius-polynomial suppliers, and derive `|λ_f(n)|≤d(n)` from the
   Deligne weight bound. The exact algebraic item edges are in the source
   index. Deligne's 1969 Bourbaki article is a conditional exposition at the
   cited Weil-conjecture step, not a stand-alone proof. The item is staged
   with its full modular-curve/cohomology dependencies.
9. **Holomorphic mass equidistribution.** State HS Theorem 1 and its weak-*
   mass consequence for full-level holomorphic Hecke eigencuspforms of even
   weights tending to infinity. Local suppliers include Deligne's coefficient
   bound, Gelbart–Jacquet symmetric-square automorphy, symmetric-square
   analytic properties/zero-free region, Holowinsky's shifted-convolution
   sieve, Soundararajan's weak-subconvex estimate from HS Theorems 2–3, and
   the spectral-density passage. The source proves its final combination but
   states some essential inputs from earlier works.
10. **GL3 distributions and Voronoi.** Limit to the full-level cuspidal GL3
    setting with the Miller–Schmid parity/primitive-twist hypotheses. Prove
    the automorphic-distribution embedding, Heisenberg Fourier expansion,
    Voronoi identity, and standard/twisted continuation and FE. The complete
    distribution companion supplies canonical extension/Fourier–Mellin
    lemmas. Casselman/Casselman–Wallach embeddings and local transforms remain
    exact local proof suppliers. Do not generalize to arbitrary level or GL(n).
    This full-level GL3 transform is distinct from the classical GL1 divisor
    or circle Voronoi transform and its Bessel kernel; no such reusable lower-
    rank supplier is staged in this track.
11. **GL(n) representation foundation.** This pair contains definitions and
    examples only: adelic automorphic representation, unitary cuspidal/generic
    representation, pure isobaric sum, standard/Rankin–Selberg L-function,
    and analytic conductor. It does not certify its general spectral or
    Rankin–Selberg theorem dependencies as closed.
12. **GL(n+1) × GL(n) local integrals and functional equation.** Define
    generic Whittaker models and local Rankin–Selberg integrals, then prove
    their local-factor and functional-equation contracts. JPSS 1983 Theorem
    2.7 and multiplicativity Theorem 3.1 supply the nonarchimedean local chain;
    Jacquet 2009 Theorem 2.1's §8.1 proof covers the (n,n) principal-series case; its
    adjacent-rank branch and Proposition 11.1 cover (n,n−1), and §11 extends
    the functional equations to general archimedean generic representations.
    Theorem 2.7, with proofs in §§12–15, supplies local test vectors. State the unramified Satake Euler factor separately.
    Cogdell 2003 is the global source: Theorem 2.1 gives the adjacent-rank
    Eulerian integral and Theorem 4.1 gives global meromorphic continuation,
    functional equation, and vertical-strip boundedness for GL(n+1)×GL(n).
    Its boundedness proof closes for adjacent ranks and explicitly leaves
    m<n−1 without the required global local-generator theory. Liu–Su–Sun and
    Li–Liu–Su–Sun give narrower principal-series local identities;
    Kurinczuk–Matringe gives a narrower nonarchimedean cuspidal test-vector
    case. Murase–Sugano 1996 §§9 and 11 give special class-one Shintani
    integrals. These reviewed sources support the named adjacent-rank theorem
    contracts, not arbitrary-rank local/global theory, conductor-aspect
    comparison, or the Yang RTF and spectral prerequisites. Keep Yang's
    pair-specific hypotheses exact.
13. **Yang 2023 relative trace formula and level moment.** Prove the precise
    RTF with regularization/truncation, spectral and geometric sides,
    singularity matching and correction terms. Items for spectral expansion
    and regularization sit as named local suppliers. Theorem B is only the
    fixed everywhere-unramified `π′` level-aspect second moment with the
    stated generic spectrum and local weights; Corollary 9.4 and qualitative
    simultaneous nonvanishing are separate. Do not convert this moment to a
    pointwise subconvex bound.
14. **Yang 2026 t-aspect GL(n+1) × GL(n) subconvexity.** State Theorem A for
    `n≥1`, unitary pure-isobaric generic `π` on GL(n+1)/Q, unitary cuspidal
    `π′` on GL(n)/Q, fixed finite conductors and variable `t`; give general
    and tempered savings separately. Local suppliers include the RTF, the
    microlocal archimedean test vector, ramified local periods, amplified
    spectral lower bound and regular-orbital estimate. This is not an
    all-aspect result.
15. **Yang standard GL(n) t-aspect corollary.** Keep Corollary 1.2 separate
    from Theorem A. It applies only to standard `L(1/2+it,π′)` with `π′`
    unitary cuspidal on GL(n)/Q from the special tempered choice
    `π=1⊞···⊞1`; use `δ=1/[n(n+1)(3n−1)]` and exponent
    `(1−δ)n/4+ε`. Do not transfer it to other GL(n) families.
16. **Yang 2026 quantitative simultaneous nonvanishing.** State Theorem C
    only for `n≥2`, two unitary cuspidal GL(n)/Q forms with coprime conductors
    `M′_1,M′_2` and `M′_1M′_2>1`, matching archimedean type, auxiliary split
    prime `p*∤M′_1M′_2`, `T,M≥1` with `(M,M′_1M′_2p*)=1`, fixed unitary Hecke
    character `ω` trivial at infinity, prescribed fixed archimedean and
    supercuspidal `π_{p*}` local data with central character `ω_{p*}`, and the
    spectral-window/fixed-width family conditions. Include the exact lower
    bounds `≫(TM)^(-ε)M^(n/(3n²+n−1))T^(1/[2(3n²+n−1)])` for
    `M≤T^((n+1)/(n²−n−1))`, and
    `≫(TM)^(-ε)M^(1/(n²+n+1))T^(1/[2(n²+n+1)])` otherwise. This is distinct
    from the 2023 qualitative theorem.
17. **Selberg eigenvalues, finite checks, and open conjecture.** The conjecture
    is that every positive cuspidal Maass Laplace eigenvalue for a congruence
    subgroup of `SL2(Z)` is at least `1/4`; constants are excluded. With
    `λ=1/4+t_f²`, define `θ_f=2|Im(t_f)|=sqrt(max(0,1−4λ_f))`, and set
    `θ_f=0` for real tempered `t_f`. Kim--Sarnak is a proved theorem with
    `|Im(t_f)|≤7/64`, equivalently `θ_f≤7/32` and
    `λ≥975/4096` for positive cuspidal weight-zero spectrum. The Kim–Sarnak
    Appendix 2 proof is read; its local chain names these inputs. Proposition
    2 gives the finite-place bound at each unramified prime for either parity,
    and its archimedean bound directly when `π∞` is spherical. To cover the
    other weight-zero parity, the inventory includes the local `χ_{−4}` twist
    lemma: the odd quadratic character has infinite component `sgn(det)`, makes
    the GL2(R) principal-series component spherical, preserves its infinitesimal
    character and Laplace eigenvalue, and satisfies
    `Sym⁴(π⊗χ_{−4})≃Sym⁴π`. The twist is ramified at 2, but the finite-place
    7/64 statement for the original π is applied independently at all its
    unramified primes; the eigenvalue conclusion uses the archimedean bound.
    The source proof inputs are the weak exterior-square lift,
    Kim--Shahidi symmetric-cube input, symmetric-fourth lift, noncuspidal
    symmetric-fourth alternative, twisted symmetric-square analytic
    properties, same-rank Rankin--Selberg absolute convergence, Deligne's
    hyper-Kloosterman estimate, and the archimedean gamma-ratio input. The
    exact item IDs are in the Selberg inventory. Kim Appendix 2 is fully read,
    but several cited inputs remain source-gated: Kim--Shahidi Sym³ and the
    noncuspidal Sym⁴ exponent source are not read; Shahidi 1988 is identified
    but not retrieved; Kim 1999 is read, yet its exterior-square results do
    not match the symmetric-square holomorphy cited in Appendix 2 Proposition
    3; and the actual Jacquet--Shalika archimedean citation is their 1990
    *Exterior Square L-functions* chapter, not the staged 1981 paper. The
    generic GL(n) Proposition 1 item has the exact exponent
    `1/2−1/(1+n(n+1)/2)`, requires a unitary cuspidal representation and
    absolute convergence of its symmetric-square Dirichlet series for
    `Re(s)>1`, gives finite bounds only at unramified primes, and gives the
    same archimedean exponent only for spherical/unramified infinity. For
    `n=5`, this is `7/16`; the GL2 Satake relation gives `7/64`. The source
    index gives exact citations and status. The BLS finite verifications remain
    distinct theorems/examples; their supplier chain includes the general
    trace formula, BLS explicit/twist-minimal formulas, finite input data,
    interval algorithm and a separate certificate-correctness/termination theorem. The
    code, raw certificates and interval data are not staged, so no independent
    reproduction is claimed. The `op-` item has no dependent consumers.

## Staged GL(n) breadth map and unfulfilled work

| Claim area | Reviewed source support | Exact planned destination | Boundary / remaining source obligation |
|---|---|---|---|
| GL2 holomorphic and Maass theory | Milne Chs. 2, 4, 5; Knightly--Li §§4–10; Miller--Schmid RS §4 | congruence-Hecke, Maass-spectrum, Kuznetsov, GL2-RS pairs | Newform/Ogg details deferred; generalized §9 Kloosterman strengthening needs Weil/Gauss proof suppliers. |
| GL2 subconvexity | Michel--Venkatesh §§2–5.2 | GL2 hybrid subconvex pair | Exact MV theorem family only; no numerical δ, no theorem beyond the source's fixed-factor/conductor statement. |
| Hecke–Maass entropy and recurrence | Bourgain--Lindenstrauss 2003 §§1–5; Bourgain--Lindenstrauss 2004 correction §§1–2; Lindenstrauss 2006 §§1–8, Appendix A | entropy/measure-rigidity pair | The correction gives the small-plaque-mass OR geodesic-flow maximal-function escape alternative; the maximal inequality yields a.e. entropy at least 2/9; local dimension, Hecke-tree, Burgess, Mahler, maximal-inequality and measure-rigidity chains still require local suppliers. |
| Hecke–Maass QUE on the modular surface | Soundararajan 2009, complete 10-page article; corrected Lindenstrauss noncompact entropy input | separate full-level Maass QUE pair | Soundararajan proves no escape of mass and uses Lindenstrauss's limit up to escape; general QUE without a Hecke-eigenfunction hypothesis is a separate `op-`. |
| Holomorphic QUE | Holowinsky--Soundararajan full paper | HS mass-equidistribution pair | Imported sieve/weak-subconvex, Deligne, Gelbart--Jacquet and zero-free proofs must be local suppliers. |
| GL3 standard L / Voronoi | Miller--Schmid full-level GL3 §§2–6 plus complete distribution companion §§2–7 | GL3 distribution/Voronoi pair | Full-level cuspidal GL3 only; representation-embedding and local automorphic suppliers remain explicit. No general GL(n) inference. |
| GL(n+1) × GL(n) relative trace and moments | Yang 2023 §§1–8, 9.1–9.2 | GL(n) foundation and Yang 2023 RTF/moment pair | Theorem B fixed unramified `π′`; Theorem C qualitative family only. The global adjacent-rank analytic properties are supplied by Cogdell Theorem 4.1; Yang-specific spectral, period, and test-vector chains remain local proof obligations. |
| GL(n+1) × GL(n) t-aspect subconvexity | Yang 2026 §§1–11 | Yang Theorem A pair | All n≥1 within that exact unitary generic/isobaric family; fixed finite conductors. No all-aspect bound. |
| Standard GL(n) t-aspect | Yang 2026 Cor. 1.2 | separate standard-GL(n) corollary pair | Only `π=1⊞···⊞1` special case and stated exponent. No wider family by unsupported transfer. |
| GL(n+1) × GL(n) quantitative nonvanishing | Yang 2026 Thm C | separate nonvanishing pair | n≥2 and all listed conductors/types/prime/window constraints. Not the qualitative 2023 result and not unrestricted. |
| General GL(n) analytic theory / GL(n≥4) | Yang statements establish the cited pair-specific results; Murase--Sugano 1996 supports only its class-one adjacent-rank Shintani integrals | definitions foundation, separate local-RS/FE supplier pair, then Yang pairs | JPSS 1983, Jacquet 2009, and Cogdell 2003 provide the reviewed local and adjacent-rank global source contracts. The m<n−1 global vertical-strip case, general arbitrary-rank local/global construction, general spectral inputs, conductor-aspect/high-rank subconvexity, and all-aspect results remain beyond those sources. No high-rank coverage is inferred from a GL2 source or Yang Cor. 1.2. |
| Selberg eigenvalue / trace formula | BS07 §§2.1–2.3; BLS 2020 §§2.1–2.9, §3, §§4–5; Kim 2003 Appendix 2; Pascadi 2025 relevant introduction/§1.4; dated 2026 arXiv query | Selberg bound/finite verification/open problem pair | Conjecture scope is positive cuspidal weight-zero eigenvalues (constants excluded); `θ=2|Im(t)|=sqrt(max(0,1−4λ))`, zero for real tempered `t`. Kim's full Appendix 2 is read; Kim--Shahidi/Langlands--Shahidi, same-rank RS, and archimedean local suppliers are itemized, with remaining primary-proof gaps explicit. BLS finite theorems have a trace/sieve/algorithm/certificate correctness chain; no code/certificate/raw interval data is staged. |
| Finite-field trace functions / Deligne weights | Coverage owned by algebraic track; its researcher reports full FKM 2014 survey and Deligne Weil II §3.3.1 Theorem 1 review | algebraic track only | Reported correlation bound has no local AG/étale supplier chain yet; not a dependency or source-read claim in this automorphic dossier. |

No omnibus “automorphic theory complete” claim is made. Preserve the full
scoped build plan with each remaining source/proof obligation recorded at its
supplier page and item; do not silently widen a claim beyond its stated source
hypotheses. The unfinished obligations above are part of this handoff, not
external-reference fallbacks.

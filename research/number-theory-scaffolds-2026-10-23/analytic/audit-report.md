# Analytic Number Theory Scaffold Audit

**Status:** active audit of the refreshed analytic owner fragments. The
21:13 owner/aggregate snapshot passed structural graph checks; R3 found a withdrawal
that invalidates R1's Bourgain–Watt 2017 theorem supplier, and R1 has removed
that theorem chain. Li–Yang and Cen still have separate explicit
supplier chains with some published inputs source-gated. R4 has added the
Kim–Sarnak and finite Selberg proof chains and refreshed its source ledger;
some cited proof inputs remain explicitly source-gated. The root-owned
canonical splice and official validator remain pending.

**Scope:** planning audit only. This review does not create or edit library items,
pages, the canonical plan, or engine state.

## Verified repository and plan conventions

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, and the relevant planning and
  authoring portions of `WORKFLOW.md` before reviewing this track.
- No `.autopilot/number-theory-scaffolds-2026-10-23` state directory is present;
  this work is a planning scaffold, not an active engine run.
- `tools/validate-plan.mjs` requires ordered A/B/P page rows. A new A page has a
  B companion; the B page declares its A page as a prerequisite. Each item row
  needs a unique ID, kind, title, and explicit `deps`. All item-induced page
  dependencies must be covered by the transitive closure of page `requires`,
  and `requires` must be an earlier-order transitive reduction. A pages are
  capped at 100 items; a substantive prerequisite is not to be dropped to meet
  the cap. A future active invocation must select a nonempty exact page set.
- The working tree contains many unrelated modifications and untracked files.
  The audit is limited to the analytic scaffold evidence and this report.
- The run's read-only `research/number-theory-scaffolds-2026-10-23/plan-baseline.json`
  seals the original plan head/hash and identifies `analytic-number-theory` as
  a new category. New analytic rows belong in that category; the existing
  `number-theory` pages above remain their published prerequisites without
  re-homing. The sealed existing plan has maximum order 3215.

## Existing published analytic number theory suppliers

The following published pages already provide substantial analytic-number-
theory prerequisites and should be reused as prerequisite context without
re-homing or duplicating their items:

- `library/number-theory/arithmetic-functions-and-dirichlet-convolution.md`
- `library/number-theory/average-orders-divisor-sums-and-representation-counts.md`
- `library/number-theory/chebyshev-bounds-and-mertens-theorems.md`
- `library/number-theory/dirichlet-series-and-euler-products.md`
- `library/number-theory/dirichlet-characters-l-functions-and-primes-in-progressions.md`
- `library/number-theory/primitive-dirichlet-l-functions-and-functional-equations.md`
- `library/number-theory/perron-inversion-and-the-explicit-formula.md`
- `library/number-theory/classical-zero-free-region-and-the-prime-number-theorem.md`
- `library/complex-analysis/the-riemann-zeta-function.md`

These cover, among other prerequisites, arithmetic functions and convolution,
Dirichlet series and absolute-convergence Euler products, characters and
orthogonality, primitive L-functions, the explicit formula, the classical
zero-free region, and the prime number theorem (including fixed-modulus
arithmetic progressions). The canonical plan already gives these pages stable
identities and locations in the `number-theory` or `complex-analysis`
categories.

## Source material inspected so far

- R1 has staged full PDF and extracted text for Evertse's *Analytic Number
  Theory* chapters 0–6, Ben Green's *The Prime Number Theorem* notes, and the
  complete Heath-Brown 1979 paper *The Density of Zeros of Dirichlet's
  L-Functions*. Vaughan–Montgomery *Multiplicative Number Theory III*, a
  Vaughan lecture extract, Guth–Maynard's accepted large-values paper, and
  later zero-density material are also staged for source review.
- R2 has staged Kedlaya's full relevant web chapters (11–21) and full primary
  papers by GPY, Maynard, Polymath8a/8b, Green–Tao, and Stadlmann, plus recent
  bounded-gap claims. Kedlaya's own front matter says the notes are still under
  development, many proofs are exercises or omitted, and its Chapter 21 is
  incomplete. It is a useful exposition, not a blanket proof-completion record.
- I read the complete extracted text of Kedlaya chapters 11–21. Two concrete
  source defects must not be copied into planned statements: (1) Chapter 12,
  Theorem 12.2 prints a `+` in its claimed lower bound for `V^-`, contradicting
  the same chapter's `V^- <= V` and its immediately following lower sieve
  estimate, which uses `1 - ...`; (2) Chapters 20–21 contain `x+h_j`/`N+h_j`
  in places where their summation variable is `n`. The primary Maynard paper is
  available locally and is the appropriate source for any complete bounded-gap
  proof review.
- The local Heath-Brown PDF is 10 pages and its extracted text is poor around
  displayed formulas. Any exact exponent or formula taken from it needs to be
  checked against the printed paper; title/abstract extraction alone does not
  establish a reading of its proof. I visually checked the page 231 scan: its
  zero count includes multiplicity on `σ ≤ Re ρ ≤ 1`, `|Im ρ| ≤ T`, and its
  sum is over primitive characters modulo `q ≤ Q`. Theorem 1 is uniform for
  `11/14 ≤ σ ≤ 1`; at `Q=1` it gives
  `N(σ,T) ≪ T^{2(1−σ)+ε}`. Other formulas still need scan-level checking if
  used.
- The R2 2026 bounded-gap bundle contains distinct, dated claims: OpenAI's
  186 manuscript and separate numerical-certificate text (30 August); the
  Stadlmann 240 preprint arXiv:2608.31126v1 (31 August); Kintali's
  computer-assisted 236 manuscript (1 September); Hanxin Zhang's GPT-5.6
  240 paper (2 September); the Axiom Math 212 preliminary draft (3 September);
  and Ce Shen's separate 45-dimensional 212 paper (4 September). The newer
  Sharifi/OpenAI 182 manuscript by GPT-6 Astra, prompted by Romyar Sharifi,
  states an original 4 September version, an
  18 September revision, and a 3 October edition with the corrected Type III
  result and formal derivation. These must be distinguished from Stadlmann's
  separate 2025 published work on primes in progressions and bounded gaps
  between many primes: that work gives the smooth-modulus distribution
  exponent `1/2 + 1/40 − ε` and `H_m = O(exp(3.8075m))`; it does not prove
  `H_1 ≤ 240`. These newer claims are reports, not accepted logical suppliers.
  The 212 papers' ancillary certificate paths are not included. For the 182
  bundle, the Type II and Type III source papers are present in the 132-page
  local PDF; the external repository/Lean source, numerical release/code, and
  result receipts are not included in this checkout.
- The local 186 formalization directory contains only README files and
  `formalization.yaml`/`main.json`; its referenced Lean source, comparator
  project, Python certificate, and result receipt are absent from this source
  dossier. Its README explicitly says the Lean target depends on three
  unproved axioms, including cited Deligne-type estimates and 104 outer/45
  inner integral bounds plus cap bounds; it says the numerical certificate
  does not discharge these axioms. This is not independently checkable proof
  evidence in the present checkout.
- The 182 source is a 132-page bundle whose local PDF/text includes the main
  article (pp. 1–52), Type II companion (pp. 53–89), and Type III companion
  (pp. 90–132). I inspected the main result and §§13.1–13.2 for claim/status
  review, not all 132 pages. The public repository/Lean sources, external
  numerical release/code, and result receipts referenced in the article are
  not staged here. Section 13.1 treats 262 physical-integral inequalities and
  finite-field estimates, including a local Fourier premise, as inputs. The
  formal endpoint proves implications conditional on those inputs. Section
  13.2 derives the Type III Fourier premise from named general published
  theorem parameters but retains the joint continuous-adic relative-pairing,
  base-change, arithmetic-realization, and coefficient-transport compatibility
  as an explicit interpretation requirement. This is not independently
  checked unconditional `H_1 ≤ 182` evidence in the present audit.
- The R3 dossier includes the full 2024 erratum to Green–Tao–Ziegler's 2012
  Gowers inverse theorem. The erratum states that original Proposition 8.3 is
  incorrect and does not hold as stated; it replaces it with a weaker
  Proposition 3.1 sufficient for the cited Proposition 7.3, and corrects
  filtration hypotheses and other notation. Any use of this inverse theorem
  must cite/reconstruct the corrected statement or a later repaired source,
  rather than reuse Proposition 8.3 verbatim.
- The 2008 Green–Tao prime-progression paper explicitly assumes
  Szemerédi's theorem in its transference argument and supplies definitions
  for the linear-forms and correlation conditions. The existing library has a
  Szemerédi regularity lemma but no Szemerédi theorem, relative Szemerédi
  theorem, or Green–Tao prime-progression supplier. If this theorem is within
  the final frontier, those are genuine prerequisite authoring obligations.
- Schanuel's primary 1979 text (`algebraic/r3-sources/schanuel-heights-in-number-fields.pdf`)
  was checked against the printed pages 435 and 447. For fixed number field
  `K`, `d=[K:Q]`, projective dimension `n=m−1` (`m≥2`), and K-relative height
  `H_K`, the point count has leading term `C_{K,m} B^m` and error
  `O(B^{m−1/d})`, with
  `C_{K,m} = h_K/ζ_K(m) · (2^{r_1}(2π)^{r_2}/√|Δ_K|)^m · m^{r_1+r_2−1} R_K/w_K`.
  The exception `(m,d)=(2,1)` has error `O(B log B)`. For absolute height
  `H=H_K^{1/d}`, substitution `B^d` gives exponent `md` and error `md−1`
  with the same exception. This fixes the normalization and constant for any
  planned projective-count statement.

## Pending audit work

### Interim fragment audit findings (not yet final)

- At the 2026-10-23 21:13 snapshot, the owner files and generated aggregate
  contain 71 A/B pairs, 142 page rows, and 677 proposed analytic item
  contracts: R1 has 17 pairs/132 items, R2 7/106, R3 18/145, R4 17/151, and
  R5 12/143. The aggregate page IDs and ordered inventories match all current
  owner files exactly. Every pair
  is reciprocal and every B page requires its A. Owner page fragments
  intentionally keep `items: []`; the generated aggregate stores the matching
  ordered inventory in its separate file.
- A read-only page/item check over the current owner fragments, the algebraic
  consolidated fragment, and published items finds no duplicate or
  unresolved item IDs, item forward references, open-problem consumers,
  wrong-kind prefixes, B-page theorem items, or item-induced page-closure
  gaps. All reciprocal A/B pairs are valid and every A has fewer than 100
  items. The current combined raw page set has 282 proposed rows after the
  analytic additions and current algebraic refreshes.
  The final cross-track splice must still recompute topological order and the
  transitive reduction.
- R1's two new discrepancy pairs have explicit supplier IDs for the Li–Yang
  and Cen proofs. R3 retrieved the current arXiv status page for
  Bourgain–Watt arXiv 1709.04340: v2 is marked withdrawn by Nigel Watt on
  2023-07-16. The withdrawal notice says gaps/faults in Propositions 2 and 3,
  plus a problem justifying the Bourgain–Guth reduction in Proposition 1′, mean
  Theorems 1, 2, and 3 lose theorem status. The full v1 text states
  `Δ(X),R(X)=Oε(X^{517/1648+ε})`, but that claim is not a
  valid theorem supplier. The staged arXiv withdrawal page is
  `analytic/r3-sources/bourgain-watt-1709-withdrawal-arxiv-page.html`.
  R1 removed its BW reduction/sawtooth theorem chain and retains the v1 claim
  only as a dated, withdrawn status remark. Do not infer a competing
  `517/1648` bound or a contradiction to Li–Yang.
- Li–Yang's item chain names its first-spacing, Huxley second-spacing, and
  final-reduction suppliers. Cen's chain names degree-five VMVT,
  Robert–Sargos/Watt spacing, Guth–Maldague cone-envelope, and local reduction
  suppliers. R3's full-text review confirms Bourgain–Demeter–Guth supplies the
  degree-five VMVT input but does not prove Guth–Maldague's distinct
  amplitude-dependent cone-envelope theorem. The R1 edge from Robert–Sargos
  to Cen Proposition 3.1 was repaired. Huxley 2003 and Robert–Sargos 2006
  primary full texts remain access-gated; their quoted exact contracts stay
  explicit proof/source gates. R3 read Watt 2004 Lemma 8.2, but its Lemma 8.1
  proof imports Huxley 1996 §§14–16 and Huxley–Watt 2000 Lemma 5.3, which were
  not read; R1 keeps that upstream source gate explicit. The Cen arXiv v1
  result and Li–Yang preprint statements are not an exhaustive current-record
  survey. R3's full imported-input review is recorded in
  `analytic/r3-sources/li-yang-cen-import-source-review.md` (SHA-256
  `f537f83c9b9a22e3c10b2d0e9f8ec6dda44a1519175ea647aa0830de2606ec5c`).
- R2 now has the Chen–Kühn weighted-sifted-sum definition before its consumer,
  removed unnecessary BV/Mertens inputs from the generic linear-sieve
  fundamental lemma, and recorded the A4 MZ step-weight discrepancy as a
  proof obligation. R3 has the corrected Green–Tao–Ziegler 2024 inverse
  theorem statement and the six-page Bourgain–Lindenstrauss 2004 noncompact
  entropy correction. R5 has the `s^{12}` inhomogeneous Duffin–Schaeffer
  exponent correction, explicit Borel–Cantelli suppliers, and no theorem
  consumers of its terminal open problems. The earlier owner-level item
  issues noted in the previous snapshot are resolved.
- The latest R5 owner dossier now includes the three added Hausdorff/Khinchine–
  Groshev/homogeneous-dynamics pair contracts and the `s^{12}` correction to
  its inhomogeneous Duffin–Schaeffer status statement. Its new source formulas
  initially contained literal tab/backspace control characters; the current
  dossier has zero such bytes. Recheck the item dependencies and any revised
  owner copies after the final aggregate refresh.
- The latest R4 prose revision fixes the Selberg scope and notation: it now
  excludes the constant eigenvalue, states the conjecture for positive
  cuspidal Maass eigenvalues, and uses `λ=1/4+t²`,
  `θ=2|Im t|=sqrt(max(0,1−4λ))` with `θ=0` for real tempered `t`. It also
  adds separate entropy/measure-rigidity, full-level Hecke–Maass QUE, and
  no-Hecke-hypothesis open-problem contracts. The latter is correctly a
  nonlogical frontier item. I verified its arithmetic scope against the
  staged sources: Lindenstrauss's classification permits `c·volume`,
  `0≤c≤1`, in the noncompact case, while Soundararajan's nonescape proof is
  for `SL₂(Z)`. R4's source index was refreshed after the additional GL(n)
  and BLS/BS07 sources were staged. At the 20:29 source-index snapshot I
  independently recomputed SHA-256 for all 50 then-indexed R4 `.pdf`, `.txt`,
  `.xml`, and `.html` assets; every digest matched. R4 refreshed the index at
  21:10 with the Kim–Sarnak archived capture, Kim 1999 full text, and parity
  scope note. At 21:10 I rechecked all 57 staged source assets against the
  manifest; all hashes
  match. The ledger records
  the JPSS local proof,
  Cogdell's adjacent-rank global proof, and Jacquet's archimedean proof as
  distinct sources. It also records complete BLS 2020 and Booker–Strömbergsson
  2007 formula-proof extents; finite verification code/certificates are still
  unstaged. R4 has now recorded its Kim 2003 reading extent: Introduction,
  §§2–5.3, §7.1–7.3.2, and full Appendix 2 from the archived AMS capture. I
  independently read the full extracted Appendix 2 (printed pp. 175–183), but
  not the complete main-article proof. Proposition 1 assumes absolute
  convergence of `L(s,Π,Sym²)` and gives exponent
  `1/2−1/(1+n(n+1)/2)`; Proposition 2 applies
  it to the GL5 symmetric-fourth lift and yields
  `|log_p|α_{j,p}||≤7/64`, and at an unramified archimedean place
  `|Re(μ_{j,∞})|≤7/64`, hence `λ₁(Γ)≥975/4096`. The proof imports the
  symmetric-fourth automorphy, symmetric-square continuation/functional
  equation, Deligne's hyper-Kloosterman bound, and Jacquet–Shalika's local
  archimedean bounds. R4 has added their exact theorem suppliers where already
  available; cited Kim/Shahidi/archimedean sources not staged in R4 remain
  explicit source/proof gates. In the noncuspidal `Sym⁴(π)` case, Appendix 2
  expressly invokes
  Kim–Shahidi for a separate stronger `1/10` estimate; that proof is another
  source/input gate for an all-cuspidal-`π` statement. The exact Appendix 2
  inputs include Shahidi 1988, *Annals of Mathematics* 127, 547–584, for the
  symmetric-square functional equation, and Kim 1999, *Canadian Journal of
  Mathematics* 51, 835–849, for holomorphy. That 1999 article has now been
  retrieved and fully read; it proves exterior-square and unequal-rank
  Rankin–Selberg holomorphy but does not prove the general symmetric-square
  holomorphy asserted in Appendix 2 Proposition 3. Record this citation-scope
  mismatch and keep the latter input source-gated. Shahidi 1988's symmetric-
  square functional-equation paper is cited but not yet staged. Appendix 2's
  distinct `[J-S]` citation is Jacquet–Shalika 1990, `Exterior Square
  L-functions`, for the archimedean gamma-ratio bound; it also remains
  unstaged. Kim–Shahidi's Sym³ and noncuspidal Sym⁴ results are separate cited
  proof inputs, not locally proved by the Kim 2003 paper. The source's
  archimedean clause is explicitly conditional on `π∞` being unramified. R4
  added `thm-kim-sarnak-quadratic-twist-makes-weight-zero-gl2-spherical` to
  transfer odd parity to the spherical case via `χ_{−4}` while preserving the
  Laplace parameter and `Sym⁴` lift. The final audit must check that theorem's
  local and finite-place hypotheses before treating the all-parity
  congruence-spectrum conclusion as closed.
- I checked the staged primary QUE statements directly. Lindenstrauss,
  Theorem 1.4 (2006), for a congruence lattice over `Q`, gives normalized
  volume as the only arithmetic quantum limit in the compact case; in the
  noncompact case it allows `c` times normalized volume for `0≤c≤1`.
  Soundararajan, Theorem 1 (2009), proves nonescape and the normalized
  microlocal-lift limit for norm-one Hecke–Maass cusp forms on
  `SL₂(Z)\H` as the Laplace eigenvalue tends to infinity. Thus this source
  pair closes QUE for the stated full modular group by combining measure
  rigidity with a separate nonescape estimate, but does not establish
  nonescape for all congruence subgroups. Keep entropy/measure classification,
  nonescape, and the combined full-level QUE theorem as distinct logical
  obligations.
- A cross-track source supplement now provides the actual six-page 2004
  Bourgain–Lindenstrauss correction, fully read by R3 and recorded in
  `analytic/r3-sources/noncompact-entropy-source-review.md`. Its Theorem 2
  gives the noncompact alternative “plaque mass `≪ε^{2/9}` or geodesic-flow
  maximal function `>0.199`”; the maximal inequality yields positive entropy
  `2/9` almost everywhere, sufficient for Lindenstrauss's measure-rigidity
  theorem and the full-level QUE chain. The correction does not upgrade the
  stronger pointwise BL03 Theorem 2.1 to the noncompact case. It also corrects
  a factor-two typo in its Lemma 5 trace hypothesis and the BL03 Theorem
  3.5(4) exponent typo. R4's latest prose now uses this corrected chain; the local maximal
  inequality, Mahler compactness, local-dimension-to-entropy implication,
  Burgess estimate, and Brun-sieve inputs remain named local proof suppliers.
  This does not justify relabeling established Hecke QUE as open; the
  non-Hecke QUE frontier item is separate.
- I also checked the status and Theorem 1 statements on pp. 1–4 of
  Hauke–Treuer–Maynard–Pollington, “Counterexamples to the Inhomogeneous
  Duffin–Schaeffer Conjecture,” arXiv:2609.30921v1 (2026). Their counterexample
  applies when a nonzero shift `γ` has infinitely many rational approximants
  satisfying `|γ−r/s| < exp(−s^12)`; I visually checked the exponent on the
  printed p. 2 theorem. R5 corrected the earlier `exp(−s^{1/2})` transcription
  to the source's `exp(−s^{12})`. Their first remark explicitly leaves
  arbitrary shifts, especially non-Liouville irrational shifts, widely open.
  This supports the proposed non-Liouville frontier item. My review was of
  these status/result passages, not the full 11-page proof.
- The R4 source index now records its 99-page JPSS scan and owner-reported
  full OCR/read, with theorem locators checked against page images. I
  independently checked its metadata and rendered the first pages; the JINA
  extraction itself is only metadata, so the article reading claim rests on
  R4's documented OCR transcript/extent, not that extraction. The source
  ledger correctly separates JPSS 1983 local nonarchimedean factors and
  multiplicativity from Cogdell 2003's global adjacent-rank Theorem 4.1 and
  Jacquet 2009's archimedean local theory. Cogdell proves boundedness for
  adjacent ranks `m=n−1` and `m=n`, but explicitly leaves `m<n−1` vertical-strip
  boundedness to additional theory. The three newer principal-series and
  cuspidal test-vector papers are narrowly scoped, not blanket generic
  substitutes. The GL(n+1)×GL(n) global FE item remains an ordinary planned
  theorem obligation; it is not an open problem.

The final owner-level graph audit now passes: no duplicate/dangling IDs,
forward references, open-problem consumers, page-closure gaps, cycles, bad
pairs, unresolved page requirements, or A-page cap violations occur in the
current analytic fragments. R4's source-assets manifest also matches all 57
staged assets. In the current 282-row combined fragment graph, the analytic
page requirements have no redundant direct edges; the algebraic fragment has
101 direct requirements that remain redundant and need the root's final
combined transitive reduction. Remaining limits are source-proof gates: Huxley 2003 and
Robert–Sargos 2006; Huxley 1996 and Huxley–Watt 2000 inputs to Watt; Kim's
symmetric-square holomorphy citation mismatch; the unstaged Shahidi 1988 and
Jacquet–Shalika 1990 sources; Kim–Shahidi Sym³/noncuspidal Sym⁴ inputs; and
BLS's unretrieved code/certificates. R4's §9 generalized Kloosterman estimate
is explicitly deferred. The aggregate and prose projection have been
regenerated; root still needs the final canonical combined page-order and
transitive-reduction check and a nonempty exact page selection.
Source-status conclusions remain limited to the exact versions and reading
extents recorded here and in the owner ledgers. Unverified recent claims
remain dated status context, not logical suppliers from labels or abstracts
alone.


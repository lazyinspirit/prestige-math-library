# Frontier 32 / beta / batch 7 — scaffold notes

## Authority and design alignment

Only this note, research/frontier-32-batch-7.pages.json, and
research/frontier-32-batch-7.coverage.json are edited for Batch 7. No plan,
workflow state, published page, or another batch changed.

The controlling records are NT-15, research/plan-number-theory-track.md
lines 1350--1439, and NT-20, lines 1719--1823. Research/plan-spec.json agrees:
Perron A/B are orders 348.013/348.014 and require
primitive-dirichlet-l-functions-and-functional-equations-examples; prime ideals
A/B are 365.913/365.914 and require
number-fields-rings-of-integers-and-discriminants-examples.
research/frontier-32-alpha-step0-drift.md records both as no-drift. No
design/spec choice was made here.

The Perron pair has 14 A and 7 B items; the prime-ideal pair has 24 A and 8 B
items. Both A pages remain below 60 items, so no split is proposed.

## Sources actually read

| Page | Source and kind | Exact locator and support |
| --- | --- | --- |
| Perron | [Kiran S. Kedlaya, Analytic Number Theory, Ch. 10](https://kskedlaya.org/ant/chapter-10.html), course notes | Navigation and complete Ch. 10 HTML lines 251--428, §§10.1--10.4. Half endpoint, Perron kernel/truncation, residue ledger, contour heights, left-half-plane bound. |
| Perron | [Nick Andersen, Analytic Number Theory notes](https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf), lecture notes | Contents PDF p. 1; Ch. 11 pp. 40--43 and Ch. 12 pp. 43--48 through Thm. 12.6. Independent local log derivative, Riemann--von Mangoldt computation, smoothing transform, and contour formula. |
| Ideals | [J. S. Milne, Algebraic Number Theory, Chs. 3--4](https://www.jmilne.org/math/CourseNotes/ANT.pdf), course notes | Contents pp. 2--3; Ch. 3 pp. 50--54 (Theorem 3.7 through Theorem 3.20), pp. 60--68 (factorisation in extensions through Proposition 3.53), Ch. 4 pp. 69--71 (Norms of ideals through Proposition 4.2), and Exercise 4-2 on p. 84. This TOC-bearing primary treatment supplies the ZF-local integral-factorisation route, numerical norm, prime norm, multiplicativity, and both tower laws. |
| Ideals | [Keith Conrad, The Different Ideal](https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf), lecture notes | Contents p. 1; §§3--4 pp. 3--13, Def. 3.1 through Cor. 4.16. Independent trace-dual, different, norm/discriminant, and tame/wild treatment. |

The coverage ledger records every source-owned heading/result in those ranges:
118 rows, each included or inline with an item ID, or declined with a
result-specific reason. It deliberately records Andersen's PNT/RH conclusions
and Conrad's general-order material as out of scope. The live Milne edition's
relevant labels are Thm. 3.35, Thm. 3.41, and Prop. 3.53; this is a source
version detail, not a design/spec conflict.

## Conventions and proof route

- Perron integrals are symmetric vertical limits. A*(x) and psi_0(x) take half
  weight only at positive integral x; published psi(x) remains right-continuous.
  x^rho means exp(rho log x) with real log x.
- The sharp formula has a finite symmetric ordinate sum. Infinite zero sums are
  used only in the smoothed formula with its convergence statement. The contour
  accounts for 1, all nontrivial zero multiplicities, negative even zeros, and 0.
  A finite height grid plus the unit-interval count chooses admissible heights.
- Ideal norm is first defined only for nonzero integral ideals. The trace dual
  is intrinsic; basis computations only prove fractional-ideal status.
  Dedekind--Kummer visibly retains its monogenic and index hypotheses. Tame
  different exponents give equality e-1; wild ramification only gives its
  stated lower bound.
- The number-field integral-ideal factorisation interface is deliberately
  local and ZF-valid: for a nonzero integral ideal, first use its finite
  additive quotient to make the lattice of over-ideals and the relevant prime
  list finite, then perform Milne's localization/CRT factorisation argument
  over that finite list. Selections are least-coded finite selections; it does
  not import the published Choice-qualified general Dedekind-domain item.

## Item ledger

The source tags K, A, M, C mean Kedlaya, Andersen, Milne, Conrad above.
Every row states the exact authoring target, proof strategy, and explicit deps.

### Perron Inversion and the Explicit Formula, A

| ID | Claim and route | Deps |
| --- | --- | --- |
| def-starred-summatory-function | Define A*(x)=sum(n<x)a_n+a_x/2 at positive integral x and sum(n<x)a_n otherwise. [K] | [] |
| lem-perron-kernel | Symmetric integral of y^s/s for c,y>0 is 0, 1/2, 1 as y<1, y=1, y>1. [K] | [] |
| lem-truncated-perron-kernel | Define I(y,T); prove separate y≠1 and y=1 truncation errors. [K] | [lem-perron-kernel] |
| thm-perron-formula | Under absolute convergence on Re(s)=c and stated domination for both limits, pass from finite sums to A*(x)=(2pi i)^-1 integral F(s)x^s/s ds. [K] | [def-starred-summatory-function, lem-perron-kernel] |
| thm-truncated-perron-formula | Bound by the weighted min{1,(T abs(log(x/n)))^-1} sum plus c abs(a_x)/T. [K] | [def-starred-summatory-function, lem-truncated-perron-kernel] |
| def-half-weighted-chebyshev-psi | Define psi_0 by Lambda with half endpoint and contrast the published right-continuous psi. [K] | [def-von-mangoldt-function, def-chebyshev-psi-function] |
| def-riemann-zeta-zero-counting | Define N(T) for 0<gamma<=T nontrivial zeros, multiplicities included. [A] | [thm-riemann-zeta-meromorphic-continuation] |
| thm-riemann-von-mangoldt-zero-counting | Argument principle, completed zeta and Stirling give N(T)=T/(2pi)log(T/(2pi))-T/(2pi)+O(log T), T>=2; include indent/perturbation. [A] | [def-riemann-zeta-zero-counting, def-riemann-xi-function, thm-argument-principle-null-homologous-cycle, thm-stirling-formula-gamma] |
| cor-zeta-zero-count-unit-interval | Derive the O(log(T+2)) count in [T,T+1]. [K,A] | [thm-riemann-von-mangoldt-zero-counting] |
| lem-local-logarithmic-derivative-zeta | Uniformly -1<=sigma<=2 away from ordinates, zeta'/zeta is the |t-Im rho|<1 sum plus O(log(|t|+2)). [K,A] | [def-riemann-zeta-zero-counting, thm-hadamard-product-for-riemann-xi] |
| lem-logarithmic-derivative-zeta-left-half-plane | Functional equation and Stirling give O(log abs(s)) in Re(s)<=-1 at fixed distance from trivial zeros. [K,A] | [thm-riemann-zeta-functional-equation, thm-stirling-formula-gamma] |
| lem-von-mangoldt-explicit-formula-residues | Tabulate x, -x^rho/rho, -log(1-x^-2)/2, and -zeta'(0)/zeta(0). [K,A] | [thm-riemann-zeta-meromorphic-continuation, thm-von-mangoldt-logarithmic-derivative-zeta] |
| thm-von-mangoldt-explicit-formula-smoothed | Define Andersen's piecewise-linear phi and Mellin transform; prove sum Lambda(n)phi(n)=phi~(1)-sum rho phi~(rho)-log(2pi)-sum(k>=1)phi~(-2k), with convergence. [A] | [def-von-mangoldt-function, lem-local-logarithmic-derivative-zeta, lem-logarithmic-derivative-zeta-left-half-plane, lem-von-mangoldt-explicit-formula-residues] |
| thm-von-mangoldt-explicit-formula-truncated | For x,T>=2 state psi_0(x)-x as finite zero sum, all constant residues, Kedlaya's nearest-other-prime-power error, and bounded height adjustment. [K,A] | [def-half-weighted-chebyshev-psi, thm-truncated-perron-formula, cor-zeta-zero-count-unit-interval, lem-local-logarithmic-derivative-zeta, lem-logarithmic-derivative-zeta-left-half-plane, lem-von-mangoldt-explicit-formula-residues] |

### Perron companion, B

| ID | Claim and route | Deps |
| --- | --- | --- |
| ex-perron-kernel-at-and-away-from-the-jump | Compare the kernel at y=1 with values on both sides. [K] | [lem-perron-kernel, lem-truncated-perron-kernel] |
| ex-perron-formula-for-a-finite-dirichlet-polynomial | Verify Perron termwise when all sums are finite. [K] | [thm-perron-formula] |
| ex-von-mangoldt-residue-table | Work all four residue types, retaining the pole at zero. [K,A] | [lem-von-mangoldt-explicit-formula-residues] |
| ex-smoothed-versus-sharp-explicit-formula | Contrast a transition band with the sharp half endpoint. [A] | [thm-von-mangoldt-explicit-formula-smoothed, thm-von-mangoldt-explicit-formula-truncated] |
| ex-selecting-an-admissible-contour-height | Select a zero-separated height from a finite grid. [K,A] | [cor-zeta-zero-count-unit-interval] |
| cex-an-unordered-infinite-zero-sum-is-not-a-formula | Show an unsymmetrised unregularised zero sum is not asserted equal to psi_0. [K,A] | [thm-von-mangoldt-explicit-formula-smoothed, thm-von-mangoldt-explicit-formula-truncated] |
| cex-right-continuous-psi-has-the-wrong-perron-endpoint | At a prime power distinguish right-continuity from Perron's half value. [K] | [def-half-weighted-chebyshev-psi, def-chebyshev-psi-function] |

### Prime Ideal Decomposition, Ramification, and the Different, A

| ID | Claim and route | Deps |
| --- | --- | --- |
| def-absolute-norm-of-an-ideal | Define N(a)=abs(O_K/a) for nonzero integral a. [M, Ch. 4, PDF pp. 69--71] | [] |
| lem-nonzero-number-field-ideal-has-finite-quotient | Use the finite free integral lattice to prove finite additive index. [M, Milne Ch. 4 pp. 69--71] | [thm-ring-of-integers-free-of-rank-degree] |
| thm-number-field-integral-ideal-factorisation-in-zf | For a number field $K$, every nonzero integral ideal of $\mathcal O_K$ has a unique finite product $\prod_i\mathfrak p_i^{e_i}$ of distinct nonzero prime ideals with $e_i>0$. Author the finite-quotient ideal-lattice enumeration, the local prime-power calculation, and the finite CRT reassembly; record explicitly that these are finite/least-coded choices in ZF. [M, Theorem 3.7; local proof plan uses Lemmas 3.8--3.10, Corollary 3.13, and Example 3.19] | [lem-nonzero-number-field-ideal-has-finite-quotient, thm-chinese-remainder-theorem-for-comaximal-ideals] |
| thm-principal-ideal-norm-is-absolute-field-norm | Prove N((alpha))=abs(N_K/Q(alpha)) for nonzero integral alpha. [M, Proposition 4.1(c)] | [def-absolute-norm-of-an-ideal, lem-nonzero-number-field-ideal-has-finite-quotient, cor-trace-and-norm-of-an-algebraic-integer] |
| thm-ideal-norm-is-multiplicative | Prove N(ab)=N(a)N(b) by the ZF-local integral factorisation and the prime-power quotient filtration. [M, Proposition 4.2(a)] | [def-absolute-norm-of-an-ideal, lem-nonzero-number-field-ideal-has-finite-quotient, thm-number-field-integral-ideal-factorisation-in-zf] |
| cor-norm-of-a-prime-ideal | For P over rational p obtain P cap Z=(p), N(P)=p^f, and residue degree f. [M, Ch. 4, PDF pp. 69--70] | [def-absolute-norm-of-an-ideal, lem-nonzero-number-field-ideal-has-finite-quotient, def-finite-field-and-its-order] |
| def-prime-above-and-residue-degree | Define P|p by contraction and f(P/p)=[O_L/P:O_K/p]. [M] | [def-ring-of-integers-of-a-number-field, def-finite-field-and-its-order] |
| def-ramification-index | Define e_i from pO_L=product P_i^e_i using the local ZF integral-factorisation interface. [M] | [thm-number-field-integral-ideal-factorisation-in-zf] |
| thm-fundamental-identity-for-primes-in-number-fields | Prove sum e_i f_i=[L:K] from the finite prime-power filtration after the local ZF factorisation. [M] | [def-prime-above-and-residue-degree, def-ramification-index, thm-number-field-integral-ideal-factorisation-in-zf] |
| def-split-inert-ramified-and-unramified-prime | State exact e,f,g conventions, including inertness. [M] | [def-prime-above-and-residue-degree, def-ramification-index, thm-fundamental-identity-for-primes-in-number-fields] |
| thm-ramification-and-residue-degrees-in-towers | Prove multiplicativity of e and f in towers. [M, Ch. 4 opening and Exercise 4-2, PDF pp. 69, 84] | [def-prime-above-and-residue-degree, def-ramification-index] |
| thm-dedekind-kummer-prime-factorisation | With O_L=O_K[alpha] and p not dividing the index, factor the reduced minimal polynomial and identify prime factors, e, f. [M] | [def-prime-above-and-residue-degree, def-ramification-index, def-integral-basis-and-power-integral-basis] |
| cor-eisenstein-prime-is-totally-ramified | Eisenstein valuation proof yields one prime of full index. [M] | [thm-dedekind-kummer-prime-factorisation] |
| thm-ramified-primes-and-the-number-field-discriminant | Establish p ramifies iff p divides the number-field discriminant. [M,C] | [thm-fundamental-identity-for-primes-in-number-fields, thm-number-field-discriminant-is-well-defined-and-nonzero] |
| cor-only-finitely-many-primes-ramify | Use the nonzero discriminant's finite support. [M] | [thm-ramified-primes-and-the-number-field-discriminant] |
| def-trace-dual-and-codifferent-of-a-number-field | Define a^vee={x:Tr(xa) subset Z} and O_K^vee intrinsically. [C] | [def-fractional-ideal, lem-trace-pairing-for-a-finite-separable-extension] |
| lem-codifferent-is-a-fractional-ideal | Prove trace duals fractional and (c a)^vee=c^-1 a^vee. [C] | [def-trace-dual-and-codifferent-of-a-number-field, def-fractional-ideal] |
| def-different-of-a-number-field | Define D_K=(O_K^vee)^-1. [C] | [lem-codifferent-is-a-fractional-ideal, def-invertible-fractional-ideal] |
| thm-different-of-a-monogenic-number-field | If O_K=Z[alpha], prove D_K=(f'(alpha)). [C] | [def-different-of-a-number-field, def-integral-basis-and-power-integral-basis] |
| thm-discriminant-is-the-norm-of-the-different | Prove N(D_K)=abs(disc(K)). [C] | [def-different-of-a-number-field, def-absolute-norm-of-an-ideal, thm-number-field-discriminant-is-well-defined-and-nonzero] |
| thm-prime-support-of-the-different-is-ramification | Identify prime support of D_K with ramification. [C] | [def-different-of-a-number-field, thm-ramified-primes-and-the-number-field-discriminant, def-prime-ideal-valuations-on-fractional-ideals] |
| def-tame-and-wild-ramification | Tame means p does not divide e(P/p); wild otherwise. [C] | [def-ramification-index] |
| thm-different-exponent-in-tame-and-wild-ramification | Prove v_P(D)>=e-1, equality tame, and v_P(D)>=e wild; no false wild equality. [M,C] | [thm-prime-support-of-the-different-is-ramification, def-tame-and-wild-ramification] |
| cor-discriminant-valuation-from-different-exponents | Derive v_p(d_K)=sum(P|p)f(P/p)v_P(D_K). [C] | [thm-discriminant-is-the-norm-of-the-different, thm-ideal-norm-is-multiplicative, def-prime-ideal-valuations-on-fractional-ideals] |

### Prime-ideal companion, B

| ID | Claim and route | Deps |
| --- | --- | --- |
| ex-prime-factorization-in-quadratic-fields | Compute split, inert, ramified quadratic patterns. [M] | [thm-fundamental-identity-for-primes-in-number-fields, def-split-inert-ramified-and-unramified-prime] |
| ex-dedekind-kummer-in-a-cubic-field | Factor a permitted cubic modulo p and read e,f. [M] | [thm-dedekind-kummer-prime-factorisation] |
| cex-dedekind-kummer-without-the-index-hypothesis | Rework NT-19's bad-index field data, natively rather than depending on its B example, to show why polynomial reduction alone fails. | [thm-dedekind-kummer-prime-factorisation, cor-order-index-discriminant-formula] |
| ex-eisenstein-total-ramification | Check a unique full-index prime factor. [M] | [cor-eisenstein-prime-is-totally-ramified] |
| ex-quadratic-field-codifferent | Compute a quadratic codifferent/different and its norm. [C] | [thm-different-of-a-monogenic-number-field, thm-discriminant-is-the-norm-of-the-different] |
| ex-cyclotomic-different-preview | Compute a monogenic cyclotomic derivative ideal without general conductor theory. [C] | [thm-different-of-a-monogenic-number-field, def-cyclotomic-extension] |
| ex-tame-different-exponent | Calculate a tame exponent equal to e-1. [C] | [thm-different-exponent-in-tame-and-wild-ramification] |
| ex-wild-different-exponent | Calculate a wild example retaining only the valid lower bound. [C] | [thm-different-exponent-in-tame-and-wild-ramification] |

## Checks, known limits, and next obligation

Completed before this repair: JSON parse; `manifest-deps` (52 items, no
normalisation/errors); `coverage-checklist --require-destination` (2 pages, 88
harvested results, no errors/warnings); `content-policy --manifest-only` (52
scoped items, no errors or warnings); and `validate-plan` against a read-only
temporary copy of the plan spec with these two manifests merged (exit 0; the
global order/dependency validator reported no cycles, forward references,
B-page dependencies, or unresolved identifiers). The Step-3 section records
the post-repair validation results.

The complete source sections were read in the web reader and that verification
is recorded in each source's `fetch_verified` field; consequently the
non-network source gate reports 4/4 sources fetch-verified.  A fresh local
`source-fetch-check --stamp` and `url-sweep --recover --fail-on-dead` both
encountered sandbox DNS failure (`EAI_AGAIN` / `curl: (6) Could not resolve
host`) for all four hosts, including archive lookup.  This is a local transport
failure, not a finding that any of the verified texts is unavailable.  The URL
sweep report is the disposable file
`/tmp/frontier-32-batch-7-url-liveness.json`; no replacement source was
substituted without reading it.

Authoring must retain the Perron domination hypotheses, symmetric limits,
endpoint convention, admissible height, and residue signs; and must retain the
Dedekind--Kummer index condition and tame/wild distinction.  The local DNS
outage is the only remaining environmental validation limitation.

## Step-3 fix pass

- Review finding 1, “The six `[M]` norm/tower targets are outside the declared
  Milne range.” **Applied.** The complete added passage was re-read in the
  fetch-verified primary treatment at
  https://www.jmilne.org/math/CourseNotes/ANT.pdf: Ch. 4, “Norms of ideals”,
  PDF pp. 69--71, and Exercise 4-2 on p. 84. Its own definitions and results
  now have individual canonical-coverage dispositions for
  `def-absolute-norm-of-an-ideal`,
  `lem-nonzero-number-field-ideal-has-finite-quotient`,
  `thm-principal-ideal-norm-is-absolute-field-norm`,
  `thm-ideal-norm-is-multiplicative`, `cor-norm-of-a-prime-ideal`, and
  `thm-ramification-and-residue-degrees-in-towers`. The first two have been
  kept separate: the numerical-norm definition carries the definition, while
  finite additive index carries the lemma. Changed record:
  `frontier-32-batch-7.coverage.json` (expanded Milne range and complete
  dispositions) and the corresponding item-ledger source locators above.

- Review finding 2, “The controlling design promises that all NT-20 proofs are
  finite algebra in ZF,” but the three targets imported the explicitly
  Choice-qualified `thm-unique-factorisation-of-ideals-in-dedekind-domains`.
  **Applied.** The new
  `thm-number-field-integral-ideal-factorisation-in-zf` is a local,
  number-field integral-ideal interface with the finite quotient/lattice,
  local-prime-power, and finite CRT proof route stated in its ledger record.
  Its explicit backward dependencies are
  `lem-nonzero-number-field-ideal-has-finite-quotient` and
  `thm-chinese-remainder-theorem-for-comaximal-ideals`; the finite-quotient
  lemma in turn depends on `thm-ring-of-integers-free-of-rank-degree`. Milne
  Ch. 3, Theorem 3.7, Lemmas 3.8--3.10, Corollary 3.13, Example 3.19, and
  Theorem 3.20 (PDF pp. 50--54) were read and harvested for that route.
  `thm-ideal-norm-is-multiplicative`, `def-ramification-index`, and
  `thm-fundamental-identity-for-primes-in-number-fields` now use this local
  ZF interface rather than the Choice-qualified general-Dedekind theorem.
  Changed record: `frontier-32-batch-7.pages.json`, with matching coverage
  and item-ledger records in this batch only.

- Post-repair validation: `manifest-deps` reports 53 items and 0 errors;
  `coverage-checklist --require-destination` reports 2 pages, 118 harvested
  results, and 0 errors/warnings; `source-fetch-check` reports 4/4 verified
  sources; whole-run `content-policy --manifest-only` reports 676 scoped items
  and 0 errors/warnings; and `validate-plan research/plan-spec.json` reports
  no cycles, forward references, B-page dependencies, or unresolved ids among
  its 800 declared pages with item lists. The source records remain current;
  no source was substituted and no unresolved mathematical obligation remains
  in this scaffold repair.

## Step-5 authoring

Authored the four draft pages
`perron-inversion-and-the-explicit-formula`,
`perron-inversion-and-the-explicit-formula-examples`,
`prime-ideal-decomposition-ramification-and-the-different`, and
`prime-ideal-decomposition-ramification-and-the-different-examples`, together
with all 53 manifest item ids: 14 Perron A items, 7 Perron B items, 24
prime-ideal A items, and 8 prime-ideal B items.  The corresponding
`frontier-32-batch-7.proof-contracts.json` has contracts for all 43
proof-bearing items; definitions are deliberately outside that proof-bearing
scope.

Provenance is `literature-derived` for the sourced definitions and assertions
from Kedlaya/Andersen and Milne/Conrad, with locally written proofs marked
`ai-generated` (the ZF-local factorisation proof is `ai-altered`).  Worked
examples and counterexamples are marked `ai-generated` with their required
generation roles; none is a dependency target.  Sources were retained at the
coverage locators: Kedlaya Chapter 10, Andersen Chapters 11--12, Milne
Chapters 3--4 and Exercise 4-2, and Conrad §§3--4.

No planned claim was narrowed or dropped.  The authored Perron items retain
symmetric limits, the half endpoint, real-logarithm powers, a finite
zero-separated sharp sum, and the four residue families.  The ideal items
retain the finite/least-coded ZF factorisation route, Dedekind--Kummer's
monogenic/index hypotheses, and the tame equality versus wild lower bound.
No blocker remains.

Checks run after the one canonical YAML repair (expanding inline provenance
and generation mappings):

- `node tools/tsx-run.mjs tools/precheck.mts` with all 53 explicit manifest
  item paths: 43 proof-bearing items checked, 0 failing.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; the global
  plan reports no cycles, forward references, B-page dependencies, or
  unresolved ids among its item-listed pages.
- `node tools/content-policy.mjs research/frontier-32-batch-7.pages.json`:
  53 scoped items, 0 errors and 0 warnings.
- `node tools/proof-contract.mjs research/frontier-32-batch-7.proof-contracts.json --strict`:
  43 of 43 proof-bearing contracts checked, 0 errors and 0 warnings.

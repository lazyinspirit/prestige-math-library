# frontier-31 beta batch 6 — scaffold notes

## Scope and plan check

Read `research/plan-number-theory-track.md` at the assigned NT-14 (line 1286) and NT-19 (line 1651) sections and `research/plan-spec.json`.  For both pairs the design and spec agree on page id, order, and top-level prerequisite:

- `primitive-dirichlet-l-functions-and-functional-equations` / `.examples`, orders 348.011/348.012, requires `dirichlet-characters-l-functions-and-primes-in-progressions-examples`.
- `number-fields-rings-of-integers-and-discriminants` / `.examples`, orders 365.911/365.912, requires `hilbert-symbols-and-the-quadratic-local-global-principle-examples`.

There is no design-versus-spec drift to adjudicate. The NT-14 design also names `lem-fourier-transform-of-a-gaussian` and `thm-dirac-comb-is-fourier-invariant` as planned functional-analysis inputs, but neither id occurs in the current plan inventory. They are therefore scaffolded locally, with no external unresolved dependency, so the selected Poisson route is genuinely closed. This records an item-granularity gap, not a contrary page/order/prerequisite decision.

## Primitive Dirichlet L functions

Conventions fixed throughout: `e(x)=exp(2 pi i x)`; `hat f(xi)=integral_R f(x)e(-x xi) dx`; `a in {0,1}` is determined by `chi(-1)=(-1)^a`; and for primitive `chi` modulo `q`, `Lambda(s,chi)=(q/pi)^((s+a)/2) Gamma((s+a)/2)L(s,chi)`. The `q=1` principal primitive character is the zeta exception, so it is not silently described as entire or as having a forced zero at zero.

Sources read and fetch-verified in `frontier-31-batch-6.coverage.json`:

- Nickolas Andersen, *Analytic Number Theory*, Chapter 16, PDF pp. 60–67, <https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf>. The harvest names §16.1–§16.3.2, Lemmas 16.1, 16.3–16.4, Theorems 16.2 and 16.5–16.8, equations (16.2)–(16.3), and Remark 16.9.
- Kiran S. Kedlaya, *A Course in Analytic Number Theory*, Chapter 6 §§6.1–6.2, <https://kskedlaya.org/ant/chap-funceq2.html>. The harvest names Definition 6.1, equations (6.1.1)–(6.1.4) and (6.2.1)–(6.2.2), the finite Fourier coefficients, and the even/odd theta transformations.

The A-page contract (`frontier-31-batch-6.pages.json`) has these source-supported claims and direct planned dependencies:

- `def-induced-dirichlet-character` — induction with the zero-value convention; depends on `def-dirichlet-character-modulo-q`.
- `def-primitive-dirichlet-character-and-conductor` — primitive and conductor; depends on induction.
- `thm-dirichlet-character-primitive-induction` — unique primitive ancestor; depends on those definitions and `thm-chinese-remainder-theorem`.
- `thm-induced-dirichlet-l-finite-euler-factors` — finite factor comparison in `Re(s)>1`; depends on induction and the published L-series/Euler product.
- `def-gauss-sum-dirichlet-character`, `lem-primitive-gauss-sum-twist`, `thm-primitive-gauss-sum-norm` — normalized Gauss sum, including the nonunit twist case and `|tau|^2=q`; successive dependencies are explicit in the manifest.
- `def-parity-dirichlet-character`; `lem-fourier-transform-of-a-gaussian`; `thm-dirac-comb-is-fourier-invariant`; `thm-twisted-poisson-summation` — parity and the fixed-normalization Fourier/Poisson chain. Twisted Poisson depends on the primitive twist and the comb theorem.
- `def-completed-dirichlet-l-function`; `thm-primitive-dirichlet-l-analytic-continuation`; `thm-primitive-dirichlet-l-functional-equation`; `cor-dirichlet-l-root-number-unit-modulus`; `cor-dirichlet-l-trivial-zeros` — completed-function definition, separate theta continuations, unified `(-i)^a tau(chi)/sqrt(q)` equation, unit root number, and parity trivial zeros. The continuation records the published zeta continuation; trivial zeros record the Gamma and `s=0` qualification.

The B-page is concrete rather than decorative: primitive ancestors at small moduli, finite Euler factors, `chi_4`'s Gauss sum, even/odd theta kernels, and beta-function trivial zeros, plus the two requested counterexamples about conductor and additive-character convention. Each has direct A-page dependencies in the manifest.

## Number fields, rings of integers, and discriminants

Conventions fixed throughout: a number field is a finite extension `K/Q`; `O_K` is the integral closure of `Z` in `K`; an order is full rank by definition; an integral basis is ordered; a power basis is additional structure rather than an assumption. First define `disc(alpha_1,...,alpha_n)=det(Tr(alpha_i alpha_j))` for an ordered Q-basis. The embedding determinant uses all `n` embeddings; signature `(r_1,r_2)` counts one member of each nonreal conjugate pair only in its separate definition. Quadratic statements assume squarefree `d != 1`. No lattice/Minkowski theory is pulled into this page.

Sources read and fetch-verified in `frontier-31-batch-6.coverage.json`:

- J. S. Milne, *Algebraic Number Theory*, Chapter 2 “Rings of Integers,” PDF pp. 25–36, <https://www.jmilne.org/math/CourseNotes/ANT.pdf>. The harvest enumerates its two ring proofs, Definition 2.5 through Proposition 2.29, the Bases/Norms and traces/Bilinear forms/Discriminants headings, Lemma 2.23, Propositions 2.24, 2.26–2.27, and Remarks 2.25 and 2.28.
- William Stein, *Algebraic Number Theory*, §§2.3–2.4 (PDF pp. 25–34) and §§6.1–6.2 (PDF pp. 68–72), <https://wstein.org/books/ant/ant.pdf>. The harvest enumerates Definitions 2.3.3, 2.3.13, 2.3.17, and 2.4.2; the named propositions, lemmas, and examples in the read range; and Chapter 6 through Proposition 6.2.6.

The A-page contract has the complete intended route:

- `def-number-field`, `def-ring-of-integers-of-a-number-field`, `cor-algebraic-integer-minimal-polynomial-criterion`, `thm-clearing-denominators-for-an-algebraic-number`, `cor-trace-and-norm-of-an-algebraic-integer` establish the arithmetic input. Dependencies use the already published extension, integral-closure, integral-module, and norm/trace results.
- `def-order-in-a-number-field`, `def-integral-basis-and-power-integral-basis`, `thm-ring-of-integers-free-of-rank-degree`, `thm-orders-have-integral-bases-and-finite-index` distinguish maximal order, arbitrary order, and power basis. The freeness proof route is finite integral closure plus PID submodule freeness; no unproved permanent basis choice is made.
- `def-archimedean-embeddings-and-number-field-signature`, `def-discriminant-of-a-number-field-basis-and-order`, `lem-discriminant-change-of-basis`, `thm-discriminant-as-an-embedding-determinant`, and `thm-number-field-discriminant-is-well-defined-and-nonzero` form the discriminant core with the full-embedding convention.
- `thm-power-basis-discriminant-is-polynomial-discriminant`, `cor-order-index-discriminant-formula`, `cor-squarefree-power-basis-discriminant-gives-ring-of-integers`, `thm-ring-of-integers-of-a-quadratic-field`, `cor-discriminant-of-a-quadratic-field`, and `cor-ring-of-integers-is-a-dedekind-domain` give the planned applications and endpoint. Every item has explicit direct deps in the manifest.

The B-page supplies `Q`, Gaussian/Eisenstein, `Q(sqrt(5))`, a source-backed pure cubic, a nonmaximal quadratic order, and the index obstruction to naive polynomial factorization. The design's requested nonmonogenic counterexample is **not** asserted: `rem-nonmonogenic-number-field-source-obligation` documents that an author must first obtain a complete, fetchable proof for a named example. Its coverage disposition is `deferred` to `owner-decision`, with the precise reason recorded.

## Known limits and next action

- Source URLs were opened in full through the web reader on 2026-09-05. Local `curl`/Node resolution is restricted in this runner, so the receipts truthfully use `verified_via: web-open`, matching existing frontier coverage practice rather than fabricating a byte hash.
- The scaffold has 16/7 items for the primitive pair and 20/7 for the number-fields pair. Both A pages are under the 60-item split threshold.
- Next action: run manifest, coverage, fetch-stamp presence, URL liveness, and plan validators; record their exact results below without changing unrelated state.

## Validation log

Run on 2026-09-05 after the final scaffold update:

- `node tools/manifest-deps.mjs research/frontier-31-batch-6.pages.json` — pass: 50 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs research/frontier-31-batch-6.pages.json --manifest-only` — pass: 50 scoped items, 0 errors, 0 warnings. This also resolved every explicit dependency either in the batch or in published inventory.
- `node tools/coverage-checklist.mjs research/frontier-31-batch-6.coverage.json --require-destination` — pass: 2 A pages, 102 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-31-batch-6.coverage.json` — pass: 4/4 sources carry a full-text web-open verification receipt.
- `node tools/validate-plan.mjs research/plan-spec.json` — pass: declared page order acyclic and all currently asserted plan-item dependencies resolved. The current whole-run plan has not yet been spliced with this batch, so its 50 new local contracts are checked by the preceding manifest gates rather than falsely claimed as plan-spliced.
- `node tools/url-sweep.mjs --coverage research/frontier-31-batch-6.coverage.json --out /tmp/frontier-31-batch-6-url-liveness.json --recover --fail-on-dead --timeout-ms 8000` — the local transport probe reports 0/4 because this runner cannot resolve *any* external host (`curl: (6) Could not resolve host`), including archive host variants. This is environmental, not a source repair finding: all four exact reader-facing URLs were independently reopened as full text in the web reader on the same date. No `original_url` substitution or re-sourcing is honest or warranted.

Unresolved authoring obligation: the documented nonmonogenic-example source obligation remains deferred to `owner-decision`; it is intentional and is not an asserted mathematical counterexample.

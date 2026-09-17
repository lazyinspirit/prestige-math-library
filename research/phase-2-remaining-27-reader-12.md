# Phase 2 remaining 27 — batch 12, Step 5a reader report

- Run: `phase-2-remaining-27` · batch `12` · role: reader (`reader-12`)
- Assigned pages: `highest-weight-theory-for-complex-semisimple-lie-algebras` (order 505, A),
  `highest-weight-theory-for-complex-semisimple-lie-algebras-examples` (506, B),
  `compact-lie-groups-maximal-tori-and-peter-weyl-theory` (507, A),
  `compact-lie-groups-maximal-tori-and-peter-weyl-theory-examples` (508, B)
- Items: 115 (38 + 11 + 54 + 12), all `status: draft` (in flight).

## Method

1. Read `research/phase-2-remaining-27-batch-12.pages.json`, then opened **every** assigned
   page file and **every** assigned item file in full (front matter deps/provenance/sources,
   Statement/Definition, Facts & Assumptions, Proof / Verification / Refutation).
2. Read the cited target of every load-bearing non-batch dependency used by the proofs and
   examples inspected (see the list below), and checked hypotheses, direction, quantifiers and
   normalisations against the way batch 12 uses them.
3. For every item edited: `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and
   `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` (reflow reported `unchanged` for
   all ten; precheck `PASS` for all proof-bearing items, `0 checked, 0 failing` for the
   definition item). Proof contracts were regenerated with
   `node tools/regen-contract-entries.mjs research/phase-2-remaining-27-batch-12.proof-contracts.json`
   (3 entries, then 6 entries). No item carried a `verification.judge` record, so no stale judge
   stamp had to be removed.
4. Cross-checks: `tools/rendercheck.mjs` on all four pages and on all ten edited items (all
   parse under KaTeX); `tools/prosecheck.mjs` on page 507 (0 errors); `tools/depcheck.mjs`
   repo-wide (no cycle, all references resolve; none of the edited items appears among its
   `cited-not-in-deps` warnings).

### Inventory of opened items

Page 505 (38): `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system`,
`def-weight-and-weight-space-of-a-lie-algebra-representation`,
`prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces`,
`lem-simple-reflections-preserve-weight-multiplicities`, `prop-root-vectors-shift-weight-spaces`,
`def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra`,
`thm-triangular-decomposition-of-a-complex-semisimple-lie-algebra`, `def-partial-order-on-weights`,
`def-highest-weight-vector-and-highest-weight-module`,
`lem-highest-weight-modules-have-weights-below-the-top-weight`,
`lem-every-finite-dimensional-irreducible-representation-has-a-highest-weight-vector`,
`prop-a-finite-dimensional-irreducible-module-is-generated-by-any-highest-weight-vector`,
`prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional`,
`def-integral-dominant-and-strictly-dominant-weights`,
`prop-dominant-integral-weights-are-nonnegative-combinations-of-fundamental-weights`,
`lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral`,
`lem-integrability-relations-for-a-dominant-highest-weight`,
`def-dominant-integrable-highest-weight-cyclic-module`,
`lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives`,
`lem-simple-root-integrability-bounds-the-dominant-cyclic-module`,
`lem-a-dominant-cyclic-highest-weight-module-has-a-unique-simple-quotient`,
`thm-finite-dimensionality-of-lambda-highest-weight-simple-modules-for-dominant-integral-lambda`,
`thm-simple-highest-weight-modules-are-classified-by-their-highest-weight`,
`thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`,
`cor-every-finite-dimensional-representation-is-a-direct-sum-of-highest-weight-modules`,
`prop-highest-weight-of-the-dual-representation`,
`prop-top-highest-weight-summand-in-a-tensor-product`,
`prop-the-adjoint-representation-has-highest-weight-the-highest-root`, `def-weyl-vector-rho`,
`prop-weyl-vector-is-the-sum-of-fundamental-weights`,
`prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one`,
`rem-harish-chandra-isomorphism-and-category-o`, `fs-every-weight-vector-is-a-highest-weight-vector`,
`fs-every-verma-module-is-finite-dimensional`,
`fs-every-highest-weight-lambda-gives-a-finite-dimensional-simple-module`,
`fs-dominance-is-defined-without-choosing-positive-roots`,
`fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition`,
`fs-the-weyl-character-formula-is-an-ordinary-quotient-of-functions-before-formal-cancellation-is-justified`.

Page 506 (11): `ex-all-finite-dimensional-irreducible-sl-two-modules`, `ex-verma-modules-for-sl-two`,
`ex-standard-and-dual-representations-of-sl-n-by-highest-weights`,
`ex-symmetric-powers-as-highest-weight-modules`,
`ex-exterior-powers-and-fundamental-weights-of-sl-n`,
`ex-the-adjoint-representation-and-the-highest-root`,
`ex-weyl-character-and-dimension-formulas-for-sl-two`,
`ex-the-eight-dimensional-adjoint-representation-of-sl-three`,
`ex-a-tensor-product-decomposition-for-sl-two`,
`cex-a-nondominant-integral-verma-quotient-that-is-infinite-dimensional`,
`cex-the-full-weight-lattice-does-not-integrate-to-every-central-quotient-group`.

Page 507 (54): the Haar/representation block `def-left-right-and-bi-invariant-borel-measure-on-a-lie-group`,
`cor-normalized-haar-measure-on-a-compact-lie-group`,
`prop-integration-against-haar-is-invariant-under-translations-and-conjugation`,
`def-continuous-and-unitary-representation-of-a-compact-lie-group`,
`thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable`,
`cor-complete-reducibility-for-compact-lie-groups`,
`def-matrix-coefficient-and-character-of-a-compact-group-representation`,
`thm-schur-orthogonality-for-compact-lie-groups`,
`cor-irreducible-characters-are-orthonormal-class-functions`,
`prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics`; the torus/Weyl block
`def-torus-and-maximal-torus-in-a-compact-lie-group`,
`thm-structure-of-a-compact-connected-abelian-lie-group`,
`thm-maximal-tori-exist-in-compact-lie-groups`,
`thm-every-element-of-a-compact-connected-lie-group-lies-in-a-maximal-torus`,
`thm-conjugacy-of-maximal-tori`,
`cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus`,
`cor-rank-of-a-compact-connected-lie-group-is-well-defined`,
`def-weyl-group-of-a-compact-connected-lie-group`, `thm-compact-group-weyl-group-is-finite`,
`prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits`,
`def-roots-of-a-compact-connected-lie-group`,
`thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part`,
`thm-analytic-and-root-system-weyl-groups-agree`; the integration/lattice block
`def-weyl-jacobian-on-a-maximal-torus`,
`prop-weyl-jacobian-is-well-defined-and-weyl-invariant`, `thm-weyl-integration-formula`,
`def-character-and-cocharacter-lattices-of-a-torus`,
`prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t`,
`def-root-datum-of-a-compact-connected-lie-group`,
`prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group`,
`thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems`,
`thm-compact-connected-lie-groups-are-classified-by-root-data`,
`prop-central-quotients-correspond-to-intermediate-character-lattices`; the Peter–Weyl block
`def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group`,
`def-convolution-operator-associated-to-a-continuous-function-on-a-compact-group`,
`lem-continuous-convolution-operators-are-hilbert-schmidt-and-compact`,
`lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces`,
`lem-compact-lie-groups-admit-central-continuous-approximate-identities`,
`thm-peter-weyl-for-compact-lie-groups`,
`cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group`,
`cor-finite-dimensional-unitary-representations-separate-points-of-a-compact-lie-group`,
`cor-every-compact-lie-group-is-isomorphic-to-a-closed-matrix-lie-group`,
`thm-highest-weight-classification-for-a-compact-connected-lie-group`,
`prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights`,
`lem-weyl-denominator-and-anti-invariant-orbit-sum-basis`,
`lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator`,
`thm-weyl-character-formula-for-compact-connected-lie-groups`,
`cor-representation-ring-has-the-dominant-character-basis`; and the six false statements
`fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant`,
`fs-every-element-of-a-disconnected-compact-lie-group-lies-in-the-identity-components-maximal-torus`,
`fs-a-root-system-determines-a-compact-connected-semisimple-group-up-to-isomorphism`,
`fs-every-dominant-weight-of-the-abstract-weight-lattice-integrates-to-every-compact-group-form`,
`fs-peter-weyl-says-every-continuous-function-is-a-finite-sum-of-matrix-coefficients`,
`fs-every-unitary-representation-of-a-compact-group-is-finite-dimensional`.

Page 508 (12): `ex-normalized-haar-measure-on-a-torus`,
`ex-maximal-tori-and-weyl-groups-of-u-n-and-su-n`, `ex-maximal-torus-and-weyl-group-of-so-three`,
`ex-weyl-integration-formula-for-su-two`, `ex-character-lattices-of-su-two-and-so-three`,
`ex-simply-connected-adjoint-and-intermediate-forms-of-a-semisimple-compact-group`,
`ex-fourier-series-on-a-torus-as-peter-weyl`,
`ex-matrix-coefficients-of-the-standard-su-two-representation`,
`ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case`,
`cex-su-two-and-so-three-share-a-root-system-but-are-not-isomorphic`,
`cex-a-disconnected-compact-group-element-outside-every-identity-component-torus`,
`ex-the-peter-weyl-decomposition-of-l-two-su-two`.

### Non-batch dependencies opened and checked against their use

- Lie-theoretic root theory: `def-root-and-root-space-relative-to-a-cartan-subalgebra`,
  `thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra`,
  `thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional`,
  `thm-root-sl-two-triple`, `def-coroot-of-a-lie-algebra-root`,
  `thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system`,
  `prop-root-systems-of-the-classical-complex-lie-algebras`, `def-special-linear-lie-algebra-sl-two`,
  `thm-finite-dimensional-representations-of-sl-two`, `thm-poincare-birkhoff-witt`,
  `thm-serre-presentation-theorem` (its statement, used through the simple-root commutators of
  `lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives`),
  `thm-equivalent-characterizations-of-reductive-lie-algebras`.
- Abstract root systems: `def-reduced-crystallographic-euclidean-root-system`,
  `def-positive-system-and-base-of-simple-roots`,
  `thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates`,
  `def-weyl-group-of-a-root-system`, `def-fundamental-weights`,
  `def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice`,
  `prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system`,
  `thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers`,
  `prop-weyl-length-equals-positive-root-inversion-number`,
  `def-length-and-longest-element-of-a-finite-weyl-group`.
- Lie groups and analysis: `def-lie-group`, `def-exponential-map-of-a-lie-group`,
  `cor-the-exponential-map-is-a-local-diffeomorphism-at-zero`,
  `thm-lie-second-fundamental-theorem`, `thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations`,
  `thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras`,
  `thm-cartans-closed-subgroup-theorem`, `thm-quotient-manifold-by-a-closed-lie-subgroup`,
  `thm-hopf-rinow`, `lem-no-small-subgroups-in-a-lie-group`,
  `def-left-haar-integral-and-left-haar-measure`, `cor-normalized-haar-probability-on-a-compact-group`,
  `lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets`,
  `thm-c-c-is-dense-in-l-p-for-radon-measures`,
  `cor-schurs-lemma-for-irreducible-representations`,
  `thm-complex-stone-weierstrass-self-adjoint`,
  `thm-l-two-kernels-give-hilbert-schmidt-operators`, `thm-hilbert-schmidt-operators-are-compact`,
  `thm-spectral-theorem-for-compact-self-adjoint-operators`, `thm-hilbert-space-fourier-expansion`,
  `thm-fourier-basis-and-parseval-on-the-n-torus`,
  `prop-direct-sum-dual-hom-and-tensor-representations`, `def-axiom-of-choice`.

## Edits (all in in-flight batch-12 material)

### 1. `library/differential-geometry/compact-lie-groups-maximal-tori-and-peter-weyl-theory.md` (assigned A-page prose)

Two math spans had lost their backslashes and could not render:

- line 77 `are quotients $mathfrak t/Lambdacong(S^1)^r$` → `are quotients $\mathfrak t/\Lambda\cong(S^1)^r$`
- line 93 `the sandwich $Qsubseteq X^*(T)subseteq P$` → `the sandwich $Q\subseteq X^*(T)\subseteq P$`

Evidence: the raw source strings contain no LaTeX commands, so the renderer would emit literal
text; `tools/rendercheck.mjs` now parses all four page files, and `tools/prosecheck.mjs` reports
0 errors for the page.

### 2. `items/prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t.md`

Defect (false claim, statement plus proof): the item declared the cocharacter lattice
"identified with $\Lambda$ through $\eta(e^{i\theta})=\exp(\theta X_\eta)$ with $X_\eta\in\Lambda$".
With the item's own normalisation (Lie of the circle $=i\mathbb R$, $\exp(2\pi i)=1$,
$\Lambda=\ker\exp$, $\chi(\exp X)=e^{\lambda(X)}$, $\lambda(\Lambda)\subseteq2\pi i\mathbb Z$),
well-definedness of $\eta$ at $\theta=2\pi$ gives $\exp(2\pi X_\eta)=1$, i.e.
$2\pi X_\eta\in\Lambda$, i.e. $X_\eta\in\frac{1}{2\pi}\Lambda$, not $X_\eta\in\Lambda$: for
$T=S^1$ and $\eta(z)=z$ one has $X_\eta=i\notin\Lambda=2\pi i\mathbb Z$. The pairing formula
$\langle\chi,\eta\rangle=\lambda(X_\eta)/i$ is correct, but its integrality comes from
$\lambda(2\pi X_\eta)\in2\pi i\mathbb Z$, not from $\lambda(\Lambda)\subseteq2\pi i\mathbb Z$.

Repair: statement now identifies the cocharacter lattice with
$\frac{1}{2\pi}\Lambda=\{X:2\pi X\in\Lambda\}$; step 1.1 now lifts $\chi\circ\exp$ to
$\mu:\mathfrak t\to\mathbb R$ with $e^{i\mu(X)}=\chi(\exp X)$ and sets $\lambda=i\mu$ (so that
$\lambda$ is the $\mathbb C$-linear functional of the statement and takes values in $i\mathbb R$
on $\mathfrak t$); steps 1.2, 2.2 and 3.1 were corrected accordingly. The proposition's content
(identification of $X^*(T)$ with the integral functionals, freeness of rank $\dim T$, perfect
pairing) is unchanged. `precheck`: PASS; contract entry regenerated.

### 3. `items/lem-simple-root-integrability-bounds-the-dominant-cyclic-module.md`

Defects in the proof of this load-bearing finite-dimensionality lemma:

- Step 9.1 contained the false identity
  "$2n_i=(\lambda,\alpha_i^\vee)-(\nu,\alpha_i^\vee)=m_i-\langle\nu,\alpha_i^\vee\rangle\le m_i$":
  summing $\lambda-\nu=\sum_jn_j\alpha_j$ against the simple coroots gives
  $2n_i-\sum_{j\ne i}|A_{ij}|n_j$, not $2n_i$, so the stated bound on the $n_i$ fails in rank
  $\ge2$ (e.g. $A_2$). Repaired with a correct boundedness argument: for dominant $\nu\le\lambda$
  and $n=\lambda-\nu\in Q_+$ one has $(\nu,n)\ge0$, hence
  $(n,n)\le(\lambda,n)\le|\lambda|\,|n|$ and $|n|\le|\lambda|$, so the nonnegative integers $n_i$
  are bounded because the simple roots are a basis of $E$.
- Step 6.1 used the expression "dimension $q-2j+m+1<m+1$" for the submodule generated by a vector
  of $h_{\alpha_i}$-eigenvalue $q-2j$ in a summand of top weight $m$ (the correct dimension in this
  eigenvalue normalisation is $\frac{m-(q-2j)}{2}+1$), and it passed from a single summand
  $T_0$ to $f_i^qt\ne0$ without saying why the remaining summands cannot cancel. Repaired: the
  proper-submodule contradiction is stated with the correct dimension and the inequality
  $2j<m+q$, and the argument is applied inside every irreducible summand $T_r$ with $t_r\ne0$,
  whose top weight $m_r$ satisfies $q=m_r-2k_r$, so that $f_i^qt=\sum_rf_i^qt_r\ne0$ term by term.

`precheck`: PASS; contract entry regenerated. The lemma's conclusion (finiteness of
$M_{\mathrm{int}}(\lambda)$) is unchanged.

### 4. `items/def-weight-and-weight-space-of-a-lie-algebra-representation.md`

Defect (false claim in the justification of distinct-weight-space independence): the text claimed
this needs "$\mathfrak h^*$ is an infinite-dimensional space over the infinite field $\mathbb C$
whenever $\mathfrak h\ne0$". In this setting $\mathfrak g$ (hence $\mathfrak h$) is
finite-dimensional, so $\mathfrak h^*$ is finite-dimensional; the existence of $H$ with pairwise
distinct $\mu_j(H)$ follows instead because the finitely many sets
$\{H:(\mu_i-\mu_j)(H)=0\}$ are proper subspaces over the infinite field, and a finite union of
proper subspaces cannot cover the space. Repaired in place (the same reason, stated correctly).

### 5. `items/lem-simple-reflections-preserve-weight-multiplicities.md`

Defect (unlicensed inference): step 3.1 concluded from
$s_\alpha(\nu)(h_\alpha)=-q$ that $s_\alpha(\nu)$ "is the weight of the
$h_\alpha$-eigenspace of eigenvalue $-q$". Matching the value on $h_\alpha$ alone does not
identify the weight functional; the identification needs the $\mathfrak{sl}_2$-string, i.e. that
$f_\alpha^{\,j}u\ne0$ and has weight $\nu-j\alpha$ for $j=0,\dots,q$ (root vectors shift weights:
$H\cdot(x\cdot w)=(\mu-\alpha)(H)x\cdot w$ for $x\in\mathfrak g_{-\alpha}$, $w\in V_\mu$).
Repaired by adding that justification (elementary derivation, using only [L1], [L2]).
`precheck`: PASS; contract entry regenerated.

### 6. Citation slips in five items plus one fact-row self-citation

Each of these named the current step (or, in the last case, itself) as its own justification;
all were corrected to the intended earlier reference:

- `lem-highest-weight-modules-have-weights-below-the-top-weight` step 5.1: "Steps 2.1, 4.1 and
  5.1" → "Steps 2.1, 4.1 and 4.2".
- `prop-top-highest-weight-summand-in-a-tensor-product` step 5.1: "By steps 3.1 and 5.1" →
  "By steps 3.1 and 4.1".
- `prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one` step 3.1:
  "Steps 1.1 and 3.1" → "Steps 1.1 and 2.1".
- `ex-verma-modules-for-sl-two` step 5.1: "Collecting steps 1.1–5.1" → "Collecting steps 1.1–4.1".
- `ex-the-adjoint-representation-and-the-highest-root` step 2.1: "by steps 1.1 and 2.1" →
  "by steps 1.1 and 1.2".
- `fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition`
  fact [L3]: trailing self-citation "[L3]" → "[L1]" (the fact itself invokes [L1]).

`precheck`: PASS for all six; contract entries regenerated for all six.

## Defect-like observations left unedited (recorded for the 5b lead / owner)

These are terse steps whose closure is immediate and whose conclusions I verified to be correct;
they are not false claims, definitions, witnesses or citations, so they were left as written:

- `lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral` step 3.1 and
  `lem-integrability-relations-for-a-dominant-highest-weight` steps 2.1/3.1 say "the summand
  containing $v$" where a decomposition into irreducible $\mathfrak{sl}_2$-summands need not have
  $v$ in a single summand; the conclusions ($m_i\ge0$, $f_i^{\,m_i+1}v_\lambda=0$) are correct and
  follow at once from the string $v,f_iv,\dots$ (which spans the submodule generated by $v$).
- `lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces`
  step 1.2 says "substituting $y=gu$" in the left-translation computation where $y=g^{-1}u$ is
  needed; the displayed identity $L_gT_k=T_kL_g$ is correct.
- `prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group` step 2.1 (finite
  generation of $\pi_1$, index $[P:X^*(T_K)]=|\ker|$), `thm-compact-connected-lie-groups-are-classified-by-root-data`
  steps 1.2–2.1 (realisation of a root datum), and `prop-central-quotients-correspond-to-intermediate-character-lattices`
  step 4.1 (outer automorphisms) are the tersest arguments of the batch: each asserts a standard
  ingredient with citations rather than reconstructing it. I checked the statements they support
  and found them true and correctly attributed, but a 5b/owner pass may want to expand them.

## Uneditable defects

None found. No defect was found in another batch's material, in published content, in B-page
prose, or in `research/plan-spec.json`; consequently the findings array for this batch is empty.
The repo-wide `tools/depcheck.mjs` warnings (`cited-not-in-deps`) are pre-existing, belong to
other batches, and none of the ten edited items appears among them.

## Verdict by page

- Page 505 `highest-weight-theory-for-complex-semisimple-lie-algebras` (A): **pass after repair**
  (6 items edited: `def-weight-and-weight-space-of-a-lie-algebra-representation`,
  `lem-simple-reflections-preserve-weight-multiplicities`,
  `lem-simple-root-integrability-bounds-the-dominant-cyclic-module`,
  `lem-highest-weight-modules-have-weights-below-the-top-weight`,
  `prop-top-highest-weight-summand-in-a-tensor-product`,
  `prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one`).
  The classification chain (weights → triangular decomposition → highest line → dominant/cyclic
  quotient → PBW survival → finite-dimensionality → unique simple quotient → classification →
  dual/tensor/adjoint) is correctly ordered and each step's hypotheses are met; page summary
  matches the item list.
- Page 506 `...-examples` (B): **pass after repair** (3 items edited: `ex-verma-modules-for-sl-two`,
  `ex-the-adjoint-representation-and-the-highest-root`,
  `fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition`).
  The explicit $\mathfrak{sl}_2$ and $\mathfrak{sl}_n$ computations (weight strings, Clebsch–Gordan
  count, character/dimension telescoping, adjoint highest roots, $\Lambda^k$ and $\mathrm{Sym}^k$
  irreducibility) check out; the two counterexamples have valid witnesses.
- Page 507 `compact-lie-groups-maximal-tori-and-peter-weyl-theory` (A): **pass after repair**
  (page prose repaired; 1 item edited:
  `prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t`).
  Independently verified: the SU(2) normalisation of the Weyl integration formula
  ($\int_{S^1}|1-z^{-2}|^2dz=2=|W|$), Schur orthogonality, the Peter–Weyl argument through
  compact self-adjoint spectral theory, the denominator/numerator chain of the Weyl character
  formula, and the root-lattice/weight-lattice sandwich.
- Page 508 `...-examples` (B): **pass, no edits**. The Weyl-integration, character-lattice and
  Peter–Weyl examples reproduce the page-507 theorems with the stated conventions; the two
  counterexamples ($SU(2)$ vs $SO(3)$; a reflection in $O(2)$) have valid witnesses.

## Blockers

None. All repairs are local, verified by reflow/precheck/rendercheck/contract regeneration, and no
unresolved mathematics, missing supplier, or cross-batch conflict was found in this batch.

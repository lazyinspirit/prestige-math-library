# Step 3b helper c-2 — authoring checkpoint

- Run: `phase-2-next-21`
- Pair: `tempered-distributions-and-the-fourier-transform` and its examples companion
- Exclusive files: the two pair pages, the 33 dispatched items, and this report

## Controlling evidence recovered

Read completely: `CLAUDE.md`, `README.md`, `SCHEMA.md`, the helper task and
helper brief, both current manifest rows, Batch-3 notes and coverage, the
Step-3a scope review/receipt, the owner Step-1 integration reconciliation, the
FA-25 design at current lines 1863–1915 and binding FA-24/FA-25 amendment at
lines 3232–3240, and all 35 external direct-prerequisite statements.  The
current owner readiness rows mark all 33 items ready after the simple-integral
and complex-$L^p$ repairs; no prior A/B page or item file existed.

Authoritative source text read in full for the relevant passages:

- Semyon Dyatlov, *18.155 Differential Analysis*, Chapter 11
  §§11.1.2–11.2.6, PDF pp. 120–135, especially Definition 11.19, Remarks
  11.20–11.21, Definition 11.22, Propositions 11.23, 11.25–11.28, Theorem
  11.29, and Theorem 11.32.  The source uses the unnormalized exponential;
  every authored formula is independently converted to the repository's
  $e^{-2\pi i x\cdot\xi}$ convention.
- Radu Gelca, *Functional Analysis*, §8.4, PDF pp. 128–132, including
  Theorems 8.4.1–8.4.5 and the complete displayed convolution argument.

Conventions fixed for every item: $n\geq1$; complex-linear distributions with
bilinear test pairing; no conjugation in distributional transposition;
$\widehat f(\xi)=\int f(x)e^{-2\pi i x\cdot\xi}\,dx$; and Countable Choice is
stated exactly on items whose cited published Fourier/Lebesgue interface
assumes it.  Arbitrary products and arbitrary tempered-tempered convolutions
remain undefined.

## Page checkpoint

Both pair pages were created from the current manifest.  The A page lists the
24 ordered theory items and the B page lists the nine ordered examples and
boundary items.  No shared manifest, coverage, decision, contract, plan, or
group report was changed.

## Item checkpoints

### `def-tempered-distribution`

- Claim/conventions: $\mathcal S'(\mathbb R^n)$ is the continuous
  complex-linear dual of Schwartz space for $n\geq1$; pairing is bilinear with
  no conjugation.  Zero and sequential/topological continuity are explicit.
- Source: Dyatlov Definition 11.19 and Remark 11.20, PDF p. 126.
- Dependencies checked: `def-schwartz-space-and-its-seminorms` and
  `def-schwartz-topology-and-convergence`.
- Choice/boundaries: choice-free; the countable seminorm family justifies the
  sequential reformulation.
- Checks/open obligations: authored; pair-wide checks remain pending.

Next: `thm-finite-seminorm-bound-characterizes-tempered-distributions`.

### `thm-finite-seminorm-bound-characterizes-tempered-distributions`

- Claim: continuity is equivalent to one rectangular finite Schwartz-seminorm
  estimate with explicit $C,N,M$.
- Source: Dyatlov Remark 11.20 and equations (11.5), (11.28), pp. 120, 126.
- Dependency checked: `def-tempered-distribution`.
- Proof: scale one finite basic neighborhood; separately handle an empty
  defining family and the common seminorm kernel; dominate the finite family
  by one rectangle.  The converse constructs an explicit zero-neighborhood.
- Boundaries/choice: $u=0$ and $C=0$ are covered; choice-free.
- Checks/open obligations: authored; pair-wide checks remain pending.

Next: `def-weak-and-strong-topologies-on-tempered-distributions`.

### `def-weak-and-strong-topologies-on-tempered-distributions`

- Claim: weak convergence is pointwise on $\mathcal S$; strong convergence is
  uniform on sets bounded in every Schwartz seminorm.
- Source: Dyatlov Definition 11.19 and Remark 11.21, p. 126, with the standard
  bounded-set strong-dual formulation made explicit.
- Dependency checked: `def-tempered-distribution`.
- Well-definedness/boundaries: a continuity neighborhood proves every strong
  dual seminorm finite; the empty bounded set, singleton tests, nets, and
  Hausdorffness are explicit.  Strong implies weak, but no false topological
  identification with $\mathcal D'$ is made.
- Choice/checks: choice-free; authored, pair-wide checks pending.

Next: `thm-polynomial-growth-functions-define-tempered-distributions`.

### `thm-polynomial-growth-functions-define-tempered-distributions`

- Claim: the exact weighted-$L^1$ condition yields a finite Schwartz-seminorm
  bound; pointwise polynomial growth and all complex $L^p$, $1\leq p\leq
  \infty$, are consequences, not a characterization.
- Sources: Dyatlov §11.2.1, p. 126; Gelca §8.4, p. 128.
- Dependencies checked: the finite-seminorm criterion, regular/local-$L^1$
  definitions, real Hölder applied to moduli, complex-$L^p$ conventions, and
  the real $p$-series theorem.
- Proof/boundaries: weighted pairing estimate, lattice-shell integrability,
  separate $p=1$, $1<p<\infty$, and $p=\infty$ branches, and the sharp local
  condition $|x|^r\in L^1_{\rm loc}$ iff $r>-n$.
- Contract repair proposed: add `thm-p-series-real-exponents` to the shared
  manifest dependency row; the shell proof genuinely uses it.  I added it
  only to the owned item file, not the read-only manifest.
- Choice/checks: no new choice use; authored, pair-wide checks pending.

Next: `def-fourier-transform-of-a-tempered-distribution`.

### `def-fourier-transform-of-a-tempered-distribution`

- Claim/conventions: $\langle\mathcal Fu,\varphi\rangle=\langle
  u,\mathcal F\varphi\rangle$ for the negative-sign $2\pi$ transform, with a
  bilinear pairing and neither conjugation nor inverse transform.
- Source: Dyatlov Definition 11.22 and (11.33), p. 127, rescaled to the
  repository normalization.
- Dependencies checked: tempered dual, Schwartz Fourier automorphism, and
  `def-countable-choice`.
- Well-definedness/choice: composition with the continuous Schwartz operator
  is a tempered functional.  Countable Choice enters only through the
  published Schwartz Fourier theorem; transpose algebra adds none.
- Checks/open obligations: authored; pair-wide checks remain pending.

Next: `lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous`.

### `lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous`

- Claim: the transpose is a complex-linear endomorphism of $\mathcal S'$ and
  is continuous in both weak and bounded-set strong dual topologies.
- Source: Dyatlov Definition 11.22 and following paragraph, p. 127.
- Dependencies checked: the local transform definition, both local dual
  topologies, the published Schwartz automorphism, and Countable Choice.
- Proof: compute $p_\varphi(\mathcal Fu)=p_{\mathcal F\varphi}(u)$ and
  $p_B(\mathcal Fu)=p_{\mathcal F(B)}(u)$; continuity of the Schwartz operator
  sends bounded sets to bounded sets.
- Boundaries/choice: empty bounded sets are harmless; Countable Choice occurs
  only in the published Fourier supplier.
- Checks/open obligations: authored; pair-wide checks pending.

Next: `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions`.

### `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions`

- Claim: $\mathcal F^2=R$ and $\mathcal F^{-1}=R\mathcal F=\mathcal FR$ on
  $\mathcal S'$, with continuous inverse in both local dual topologies.
- Sources: Dyatlov §11.2.2, p. 128; Gelca Theorem 8.4.3(a), p. 129.
- Dependencies checked: local Fourier continuity, the exact Schwartz
  inversion/reflection identities, and Countable Choice.
- Proof/boundaries: transpose $\mathcal F^2=R$ test by test, derive the inverse
  algebraically, and obtain its continuity as $\mathcal F^3$.  No unsupported
  density of $\mathcal S$ in $\mathcal S'$ is used.
- Choice/checks: choice only through the Fourier suppliers; authored,
  pair-wide checks pending.

Next: `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`.

### `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`

- Claim: the distributional transpose commutes with both the $L^1$ regular
  embedding and the unitary $L^2$ extension.
- Source: Dyatlov Definition 11.22 and Theorem 11.29, pp. 127, 131–132,
  converted to $2\pi$ normalization.
- Dependencies checked: local regular-tempered theorem and transform
  definition; Plancherel; $L^1/L^2$ agreement; Schwartz $L^2$ density;
  absolute Fubini; Hölder on moduli; Countable Choice.
- Proof: absolute Fubini proves $L^1$ agreement.  Schwartz approximation and
  two Cauchy–Schwarz/Hölder estimates pass the identity to $L^2$.
- Boundaries/choice: class invariance is explicit; Countable Choice is used
  only through the cited published integration/Fourier interfaces.
- Checks/open obligations: authored; pair-wide checks pending.

Next: `def-convolution-of-a-tempered-distribution-with-a-schwartz-function`.

### `def-convolution-of-a-tempered-distribution-with-a-schwartz-function`

- Claim/conventions: $(u*\varphi)(x)=\langle u_y,\varphi(x-y)\rangle$ is an
  initially scalar-valued operation for $u\in\mathcal S'$ and
  $\varphi\in\mathcal S$.
- Sources: Dyatlov (11.31), p. 127; Gelca definition before Theorem 8.4.4,
  p. 130.
- Dependencies checked: tempered dual and continuous Schwartz
  translation/reflection.
- Boundaries/choice: zero arguments are explicit; smoothness is deferred to
  its theorem; no arbitrary $\mathcal S'*\mathcal S'$ operation is implied;
  choice-free.
- Checks/open obligations: authored; pair-wide checks pending.

Next: `def-dirac-comb`.

### `def-dirac-comb`

- Claim: the unit-lattice comb acts by an absolutely convergent lattice sum
  and satisfies one finite Schwartz-seminorm estimate; on compact tests it is
  the locally finite sum of Dirac distributions.
- Source: Dyatlov Theorem 11.32 and (11.52)–(11.54), pp. 133–134, rescaled to
  the unit lattice under the repository convention.
- Dependencies checked: finite-seminorm characterization, Dirac definition,
  and real $p$-series convergence.
- Proof/boundaries: shell count $(2m+3)^n$, decay order $L>n+1$, absolute
  convergence, compact-test local finiteness, and the zero test are explicit.
- Choice/checks: canonical shells make the construction choice-free;
  authored, pair-wide checks pending.

Next: `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions`.

### `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions`

- Claim: the unit-lattice comb is fixed by the $2\pi$-normalized transform in
  $\mathcal S'$.
- Source: Dyatlov Theorem 11.32 and (11.54), pp. 133–134, after the precise
  lattice/frequency rescaling.
- Dependencies checked: local comb and Fourier definitions, published Poisson
  summation for Schwartz functions, and Countable Choice.
- Proof: test the transpose, obtain $\sum\widehat\varphi(k)$, and apply Poisson
  at zero; both series are absolutely convergent.
- Choice/checks: Countable Choice only through published Fourier/Poisson
  interfaces; authored, pair-wide checks pending.

Next: `lem-test-function-inclusion-in-schwartz-space-is-continuous`.

### `lem-test-function-inclusion-in-schwartz-space-is-continuous`

- Claim: $\mathcal D(\mathbb R^n)\to\mathcal S(\mathbb R^n)$ is continuous
  with dense image.
- Sources: Gelca Theorem 8.4.1, p. 128; Dyatlov Remark 11.5 and Exercise 11.1,
  pp. 120, 135.
- Dependencies checked: LF universal property, Schwartz seminorm/topology
  definitions, and cutoff density.
- Proof/boundaries: on each $\mathcal D_K$, polynomial weights are bounded;
  LF then gives continuity, while the separate cutoff theorem gives density.
  Empty $K$ is explicit.
- Choice/checks: choice-free; authored, pair-wide checks pending.

Next: `thm-compactly-supported-distributions-are-tempered`.

### `thm-compactly-supported-distributions-are-tempered`

- Claim: every compactly supported $\mathcal D'$ distribution extends
  uniquely to $\mathcal S'$, compatibly with restriction.
- Sources: Dyatlov (11.30) and §11.2.3, pp. 126, 129; Gelca compact-support
  example, p. 128.
- Dependencies checked: smooth cutoff extension, finite Schwartz-seminorm
  characterization, and continuous dense test inclusion.
- Proof/boundaries: restrict the smooth extension, derive an unweighted finite
  derivative bound, check agreement, and use density for uniqueness.  Zero
  distribution and empty support are included.
- Choice/checks: choice-free; authored, pair-wide checks pending.

Next: `thm-tempered-distributions-embed-continuously-in-distributions`.

### `thm-tempered-distributions-embed-continuously-in-distributions`

- Claim: restriction gives a weakly and strongly continuous injection
  $\mathcal S'\to\mathcal D'$, without claiming a topological embedding.
- Sources: Dyatlov (11.30), p. 126; Gelca Theorem 8.4.1 and discussion,
  p. 128.
- Dependencies checked: continuous dense $\mathcal D\to\mathcal S$ and the
  exact weak/strong topology definitions on both duals.
- Proof: transpose point tests and bounded sets; continuous inclusion carries
  bounded sets to bounded sets; density, not continuity, proves injectivity.
- Boundaries/choice: zero functional included; choice-free.
- Checks/open obligations: authored; pair-wide checks pending.

Next: `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space`.

### `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space`

- Claim: derivative-by-derivative polynomial growth makes multiplication a
  continuous $\mathcal S$ endomorphism and its transpose weakly/strongly
  continuous on $\mathcal S'$.
- Sources: Dyatlov §11.2.1(2) and Exercise 11.3, pp. 127, 135; Gelca Theorem
  8.4.2, pp. 128–129.
- Dependencies checked: Schwartz seminorm/topology, multi-index convention,
  tempered dual, and both dual topologies.
- Proof/boundaries: finite Leibniz expansion, explicit polynomial-weight
  absorption, bounded-set transport, polynomial/Schwartz special cases, and
  $e^{|x|^2}$ as a boundary warning.
- Choice/checks: choice-free; authored, pair-wide checks pending.

Next: `thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions`.

### `thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions`

- Claim: distributional derivatives and fixed polynomial multipliers preserve
  $\mathcal S'$, are weakly/strongly continuous, and agree after restriction
  with the published $\mathcal D'$ operations.
- Sources: Dyatlov §11.2.1(1)–(2), pp. 126–127; Gelca Theorem 8.4.2,
  pp. 128–129.
- Dependencies checked: local dual/topologies and multiplier lemma, continuous
  Schwartz operations, and exact $\mathcal D'$ derivative/multiplier formulas.
- Proof/boundaries: transposition, singleton/bounded-set seminorm calculations,
  restriction compatibility, $\alpha=0$, constant/zero polynomials and zero
  distributions.
- Choice/checks: choice-free; authored, pair-wide checks pending.

Next: `thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions`.

### `thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions`

- Claim: $\mathcal F(\partial^\alpha u)=(2\pi i\xi)^\alpha\mathcal Fu$ and
  $\mathcal F(x^\alpha u)=(-1/(2\pi i))^{|\alpha|}\partial^\alpha\mathcal Fu$.
- Sources: Dyatlov (11.36)–(11.37), p. 128, converted from $D=-i\partial$;
  Gelca Theorem 8.4.3(b), p. 129.
- Dependencies checked: exact local transpose/derivative definitions and the
  two published Schwartz identities under Countable Choice.
- Proof/boundaries: both first-order pairing calculations retain the
  distributional minus sign, then commute and iterate coordinate operations;
  $\alpha=0$ is explicit.
- Choice/checks: choice only through published Fourier calculus; authored,
  pair-wide checks pending.

Next: `thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials`.

### `thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials`

- Claim: exact transforms of $\delta_a$, $1$, positive-sign plane waves,
  delta derivatives, monomials, and hence polynomials under the fixed
  normalization.
- Sources: Dyatlov Proposition 11.23 and (11.34)–(11.37), p. 128; Gelca
  pp. 129–130, with all constants independently converted.
- Dependencies checked: delta/compact support, polynomial-growth regular
  embedding, Fourier automorphism/calculus, translation-modulation sign check,
  and Countable Choice.
- Proof/boundaries: direct delta evaluation fixes the frequency sign;
  $\mathcal F^2=R$ yields constants and positive plane waves; calculus gives
  derivatives/monomials; zero multi-index and finite polynomial linearity are
  explicit.
- Choice/checks: choice only through Fourier suppliers; authored, pair-wide
  checks pending.

Next: `thm-constant-coefficient-differential-operators-become-polynomial-multipliers`.

### `thm-constant-coefficient-differential-operators-become-polynomial-multipliers`

- Claim: $\mathcal F(P(\partial)u)=P(2\pi i\xi)\mathcal Fu$ for a finite
  constant-coefficient polynomial operator.
- Source: Dyatlov Chapter 11 introduction and (11.36), pp. 119, 128, rescaled
  to $2\pi$.
- Dependencies checked: local Fourier derivative identity and Countable Choice.
- Proof/boundaries: finite linearity and factorization; zero and constant
  polynomials are included.  No Fourier-symbol division, PDE existence, or
  regularity is claimed.
- Choice/checks: choice only through the Fourier identity; authored,
  pair-wide checks pending.

Next: `lem-schwartz-parameter-pairing-and-integral-interchange`.

### `lem-schwartz-parameter-pairing-and-integral-interchange`

- Claim: translated-reflected Schwartz tests depend smoothly in every
  seminorm (ZF); a seminorm-continuous $\mathcal S$-valued family dominated by
  an $L^1$ majorant in every seminorm has a Schwartz integral and commutes with
  every tempered pairing (under Countable Choice).
- Sources: Dyatlov proofs of Propositions 11.26 and 11.28, pp. 129–131, and
  (11.31), p. 127; Gelca translation lemma and Theorem 8.4.4 proof,
  pp. 130–131.
- Dependencies checked: finite-seminorm bound, continuous Schwartz operations,
  DCT, complex integral triangle inequality, and Countable Choice.
- Proof/boundaries: weighted Taylor remainders; derivative-by-derivative DCT;
  canonical box-mesh finite sums; finite controlling seminorms for $u$; and
  $L^1$ tail control.  The zero family/test is included.
- Contract repair proposed: add `thm-integral-triangle-inequality` to the
  shared manifest dependency row.  Uniform seminorm estimates genuinely use
  it; I changed only the owned item dependency.
- Choice/checks: the translation clause is ZF; Countable Choice is confined to
  the Lebesgue clause; authored, pair-wide checks pending.

Next: `thm-tempered-convolution-is-smooth-with-polynomial-growth`.

### `thm-tempered-convolution-is-smooth-with-polynomial-growth`

- Claim: $u*\varphi$ is smooth, all derivatives grow polynomially,
  $\partial^\gamma(u*\varphi)=(\partial^\gamma u)*\varphi=
  u*(\partial^\gamma\varphi)$, and the resulting regular distribution is
  tempered.
- Sources: Dyatlov (11.31) and §11.2.1(5), p. 127; Gelca Theorem 8.4.4(a)–(b),
  pp. 130–131.
- Dependencies checked: convolution definition, finite-seminorm bound,
  continuous Schwartz operations, and regular polynomial-growth embedding.
- Proof/boundaries: Schwartz-seminorm Taylor difference quotients, cancellation
  of the two derivative signs, translated polynomial-weight estimate, zero
  arguments, and no parameter integral.
- Choice/checks: choice-free; authored, pair-wide checks pending.

Next: `thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier`.

### `thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier`

- Claim: a compactly supported distribution has the cutoff-independent smooth
  Fourier representative $V(\xi)=\langle v,\chi e^{-2\pi ix\cdot\xi}\rangle$;
  every derivative grows polynomially, so $V$ is a Schwartz multiplier.
- Source: Dyatlov Proposition 11.26 and (11.42)–(11.44), pp. 129–130,
  converted to $2\pi$.
- Dependencies checked: compact smooth/tempered extensions, smooth parameter
  pairing, local Schwartz integral interchange, Fourier transpose, multiplier
  lemma, and Countable Choice.
- Proof/boundaries: cutoff independence, explicit derivative formula, fixed
  compact finite-order estimate, fully dominated Fourier-integral interchange,
  zero distribution and empty support.
- Choice/checks: Countable Choice only through Fourier/Lebesgue suppliers;
  authored, pair-wide checks pending.

Next: `lem-compact-distribution-convolution-preserves-schwartz-and-tempered-spaces`.

### `lem-compact-distribution-convolution-preserves-schwartz-and-tempered-spaces`

- Claim: fixed compact $v$ gives a continuous $C_v:\mathcal S\to\mathcal S$;
  transposing the reflected operator defines $u*v\in\mathcal S'$ and agrees
  after restriction with the published support-conditioned $\mathcal D'$
  convolution.
- Source: Dyatlov §11.2.1(6), p. 127, and Proposition 11.28, pp. 130–131.
- Dependencies checked: compact smooth extension/finite order, Schwartz
  topology, ZF smooth parameter pairing, the exact compact-support convolution
  definition/well-definedness lemma, tempered dual, and restriction embedding.
- Proof/boundaries: explicit weighted derivative estimate over one fixed
  compact, reflected transpose, iterated addition-map pairing, zero factors and
  empty support.
- Choice/checks: only the supplier's ZF smooth clause is used; authored,
  pair-wide checks pending.

Next: `thm-fourier-transform-converts-allowed-tempered-convolutions-to-products`.

### `thm-fourier-transform-converts-allowed-tempered-convolutions-to-products`

- Claim: the transform converts $\mathcal S'*\mathcal S$ and
  $\mathcal S' * \mathcal E'$ convolution to products, and converts a
  Schwartz multiplier times a tempered distribution to the corresponding
  allowed convolution.
- Sources: Dyatlov Propositions 11.25 and 11.28, pp. 129–131; Gelca Theorem
  8.4.4(c),(e), pp. 130–131; all constants checked at $2\pi$.
- Dependencies checked: regularity of $\mathcal S'*\mathcal S$, local
  multiplier/integral-interchange lemmas, compact-support Fourier multiplier
  and convolution lemmas, Fourier automorphism, Schwartz product/convolution
  laws, and Countable Choice.
- Proof/boundaries: two direct test-pairing interchanges identify the relevant
  inner Fourier transforms; the product-to-convolution identity follows from
  $\mathcal F^2=R$.  Zero factors are included.  Neither an arbitrary
  distribution product nor arbitrary $\mathcal S'*\mathcal S'$ convolution is
  used.
- Choice/checks: choice only through Fourier/Lebesgue suppliers; authored,
  pair-wide checks pending.

A-page item draft set is complete.  Next: B-page item
`ex-fourier-transform-of-dirac-and-one`.

### `ex-fourier-transform-of-dirac-and-one`

- Claim: $\mathcal F\delta_0=1$ and $\mathcal F1=\delta_0$ with no residual
  $(2\pi)^n$ factor.
- Source: Dyatlov Proposition 11.23, p. 128, converted to the repository
  normalization.
- Dependencies checked: local elementary-transform theorem and Countable
  Choice.
- Verification: evaluate $\widehat\varphi(0)$, then square the transform and
  use reflection invariance of $\delta_0$.
- Choice/checks: choice only through the supplier; authored, pair-wide checks
  pending.

Next: `ex-fourier-transform-of-a-plane-wave`.

### `ex-fourier-transform-of-a-plane-wave`

- Claim: $\mathcal F(e^{2\pi ib\cdot x})=\delta_b$.
- Source: Dyatlov Proposition 11.23 and distributional Fourier discussion,
  p. 128, with sign/scale converted.
- Dependencies checked: local elementary-transform theorem and Countable
  Choice.
- Verification/boundaries: transform $\delta_{-b}$ and apply $\mathcal F$
  again; reflection changes $-b$ to $b$.  The case $b=0$ recovers the
  constant example.
- Choice/checks: choice only through the supplier; authored, pair-wide checks
  pending.

Next: `ex-fourier-transform-of-delta-derivatives-and-monomials`.

### `ex-fourier-transform-of-delta-derivatives-and-monomials`

- Claim: in one dimension, $\mathcal F\delta_0'=2\pi i\xi$ and
  $\mathcal Fx=-(2\pi i)^{-1}\delta_0'$.
- Source: Dyatlov (11.36)–(11.37), p. 128, converted to $2\pi$.
- Dependencies checked: local elementary-transform theorem and Countable
  Choice.
- Verification: direct pairing tracks both minus signs; Fourier squaring and
  oddness of $\delta_0'$ yield the monomial formula.
- Choice/checks: choice only through the supplier; authored, pair-wide checks
  pending.

Next: `ex-principal-value-one-over-x-is-tempered-and-its-fourier-transform`.

### `ex-principal-value-one-over-x-is-tempered-and-its-fourier-transform`

- Claim: the symmetric principal value is tempered and transforms to
  $-i\pi\operatorname{sgn}$ under the negative-sign $2\pi$ convention.
- Source: Dyatlov §5.2.3, (5.26)–(5.29), pp. 64–65, plus the Fourier calculus
  (11.36)–(11.37), p. 128.
- Dependencies checked: finite/local order, smooth multiplication, exact
  Fourier calculus and elementary transforms, tempered restriction,
  zero-derivative theorem, complex integration by parts, integral triangle,
  and Countable Choice.
- Verification: cancellation rewrites the limit as two absolute integrals and
  gives $2p_{0,1}+p_{2,0}$; $x\,\mathrm{pv}(1/x)=1$ gives a Fourier ODE;
  $(\operatorname{sgn})'=2\delta_0$ gives a candidate; the difference is
  constant and odd, hence zero.  Injective restriction lifts the conclusion
  back to $\mathcal S'$.
- Choice/checks: choice only through cited published interfaces; authored,
  pair-wide checks pending.

Next: `ex-dirac-comb-and-poisson-summation`.

### `ex-dirac-comb-and-poisson-summation`

- Claim: comb invariance is Poisson summation at zero for every Schwartz test;
  Gaussian evaluation gives the $n$-dimensional theta transformation.
- Source: Dyatlov Theorem 11.32 and (11.52)–(11.54), pp. 133–134.
- Dependencies checked: local comb invariance, the published Euclidean
  Gaussian transform with the exact $2\pi$ normalization, and Countable
  Choice.
- Verification/boundaries: arbitrary tests establish equivalence with Poisson;
  $g_t$ gives the explicit $t\leftrightarrow1/t$ formula; $t=1$ and absolute
  convergence are explicit.
- Contract repair proposed: add
  `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization` to the
  shared manifest row; the promised Gaussian evaluation genuinely uses it.  I
  changed only the owned item dependency.
- Choice/checks: choice only through the two suppliers; authored, pair-wide
  checks pending.

Next: `ex-fundamental-solution-by-division-of-a-fourier-symbol`.

### `ex-fundamental-solution-by-division-of-a-fourier-symbol`

- Claim: $E=e^{-|x|}/2$ has transform $(1+4\pi^2\xi^2)^{-1}$ and satisfies
  $(1-D^2)E=\delta_0$, where $D=d/dx$.
- Source: Dyatlov Chapter 11 introduction and (11.34)–(11.37), pp. 119, 128;
  the elementary integral was computed directly at $2\pi$.
- Dependencies checked: $L^1$ Fourier agreement, polynomial-symbol identity,
  Fourier automorphism/injectivity, delta transform, and Countable Choice.
- Verification/boundaries: split the exponential integral at zero, multiply
  by the nonvanishing symbol, and use Fourier injectivity.  No general symbol
  division, existence, or regularity claim is made.
- Contract repair proposed: add
  `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions`
  and `thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials`
  to the shared manifest row; the promised injectivity proof and comparison
  with $\delta_0$ genuinely use them.  Only the item file was changed.
- Choice/checks: choice only through Fourier suppliers; authored, pair-wide
  checks pending.

Next: `cex-product-of-two-distributions-is-not-canonically-defined`.

### `cex-product-of-two-distributions-is-not-canonically-defined`

- Claim: no associative commutative differential algebra can both embed all
  distributions injectively, preserve distributional differentiation, and
  extend every pointwise product of locally integrable piecewise smooth
  functions.
- Source: Dyatlov §3.1.2, equations (3.3)–(3.4), pp. 39–40, for the exact
  Heaviside derivative calculation; the algebraic contradiction is written
  out in full.
- Dependencies checked: distributional derivative, Dirac delta, locally
  integrable regular distributions and their injectivity, smooth-factor
  multiplication as the positive boundary, complex integration by parts, and
  Countable Choice.
- Verification/boundaries: $H'=\delta_0$, while $H^2=H$ and $H^3=H$ force
  $2H\delta=\delta$ and $3H^2\delta=\delta$ in the hypothetical algebra;
  associativity yields $\delta=0$, contradicting injectivity.  Special
  products and chosen regularizations are not ruled out.
- Choice/checks: choice only through the regular-distribution and integration
  suppliers; authored, pair-wide checks pending.

Next: `cex-convolution-of-two-tempered-distributions-need-not-exist`.

### `cex-convolution-of-two-tempered-distributions-need-not-exist`

- Claim: for $n\ge1$, the two constant tempered distributions have no
  ordinary convolution.
- Source: Dyatlov §8.2, Proposition 8.6 and its examples, pp. 105–106, for the
  support condition and a parallel divergent convolution.
- Dependencies checked: polynomial-growth regular tempered distributions and
  convolution when one factor has compact support.
- Verification/boundaries: a nonnegative positive-mass test pulled back by
  addition has truncated pairing $(2R)^nc\to\infty$; neither constant has
  compact support.  Separately selected regularizations are not excluded.
- Checks: authored, pair-wide checks pending.

Next: `rem-paley-wiener-and-microlocal-analysis`.

### `rem-paley-wiener-and-microlocal-analysis`

- Claim: Paley-Wiener characterization, wavefront sets,
  pseudodifferential calculus, and propagation results remain beyond the
  foundational pair and are not available as suppliers.
- Source: Dyatlov §11.2.5, Theorem 11.31, pp. 132–133, and §14.3, printed
  p. 196 and following.
- Dependencies: none; the item is orientation only.
- Boundary/checks: it carefully distinguishes the proved real-frequency
  compact-support multiplier result from unproved complex-frequency and
  microlocal results; authored, pair-wide checks pending.

All 33 pair items are now drafted.  Next: explicit-path precheck and
rendercheck for the two pages and all owned items, followed by repairs and the
final handoff.

## Final handoff

- Deliverables: the A page contains its 24 manifest items in exact order; the
  B page contains its nine manifest examples in exact order.  All 33 item
  files are complete drafts with manifest-matching IDs, kinds, titles, and
  provenance.  No additional local lemma was needed.
- Conventions: throughout, the distribution pairing is complex-bilinear and
  the Fourier transform is
  $\widehat\varphi(\xi)=\int_{\mathbb R^n}\varphi(x)e^{-2\pi i x\cdot\xi}\,dx$.
  All signs, reflection identities, constants, and scaling factors were
  checked under this convention.  Every Countable Choice assumption is stated
  and confined to a cited Fourier or Lebesgue-integration supplier; the
  remaining algebraic and topological arguments add no stronger choice.
- Mathematical boundary: the pair defines only convolutions for
  $\mathcal S' * \mathcal S$ and for a tempered distribution with a compactly
  supported distribution.  It neither defines arbitrary products or
  convolutions of distributions nor claims general Fourier-symbol division,
  Paley--Wiener theory, or microlocal results.
- Exact-path precheck: PASS on all 27 proof-bearing owned items
  (`27 checked, 0 failing — all clean`).
- Exact-path rendercheck: PASS on all 33 owned item files and both owned page
  files (`OK — 35 file(s)`), including YAML and KaTeX parsing.
- Exact-path citecheck: PASS on all 33 owned items; every recognized elementary
  move cites a statement that supplies it.
- Owned structural check: PASS.  Both page orders match their current manifest
  rows; every item ID, kind, title, and existing manifest dependency matches;
  every dependency and wikilink resolves; and no wikilink is omitted from the
  corresponding item dependency list.
- Shared-manifest integration required: copy the following already-authored
  item dependency additions into the read-only batch manifest:
  - `thm-polynomial-growth-functions-define-tempered-distributions` ->
    `thm-p-series-real-exponents`;
  - `lem-schwartz-parameter-pairing-and-integral-interchange` ->
    `thm-integral-triangle-inequality`;
  - `ex-dirac-comb-and-poisson-summation` ->
    `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`;
  - `ex-fundamental-solution-by-division-of-a-fourier-symbol` ->
    `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions`
    and
    `thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials`.
  These are proof dependencies, not optional cross-references.
- Repository-wide depcheck was also run read-only during this task.  It failed
  on 43 errors in an unrelated concurrently authored differential-geometry
  pair; no owned file from this helper scope appeared in those errors.  The
  explicit owned dependency/link check above is clean.
- Open obligations: none within the owned mathematics.  The group lead must
  inspect and certify the drafts, integrate the five dependency edges above,
  and run the shared batch gates.  Next item: none; handoff complete.

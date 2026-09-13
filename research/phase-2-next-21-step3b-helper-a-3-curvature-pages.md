# Step 3b helper a-3 curvature-page checkpoint — phase-2-next-21

Pair: `riemann-curvature-and-riemannian-submanifolds` /
`riemann-curvature-and-riemannian-submanifolds-examples`  
Exclusive owner for this continuation: helper a-3; group lead: a

This is a page-composition handoff, not an item acceptance or a group
certification. I edited only the two dispatched page files and this report. I
did not edit the 65 lead-owned item files or any manifest, coverage,
dependency, contract, decision, plan, published file, ledger, or group report.

## Controlling inputs and scope

- Read in full: `CLAUDE.md`, `README.md`, `SCHEMA.md`, the dedicated helper
  task, and the current owner authoring direction.
- Read the two curvature rows in
  `research/phase-2-next-21-batch-7.pages.json`, the curvature section of
  `research/phase-2-next-21-batch-7.coverage.json`, and the Batch-7 notes.
- Read all 65 selected item files, including each complete statement, proof or
  verification, dependency array, boundary clause, choice clause, and source
  locator. I also read the exact statements of all 76 direct external
  prerequisites; each is currently `published`.
- Read all seven required prerequisite pages. In exact current manifest order
  they are:
  `rank-theorems-and-embedded-submanifolds`,
  `smooth-vector-bundles-and-sections`,
  `tensor-fields-exterior-algebra-and-differential-forms`,
  `riemannian-metrics-length-distance-and-volume`,
  `connections-levi-civita-and-parallel-transport`,
  `geodesics-the-exponential-map-completeness-and-hopf-rinow`, and
  `the-spectral-theorem-and-singular-value-decomposition`.
- The A page now lists exactly the manifest's 53 item IDs in manifest order
  and has `examples: []`. The B page lists exactly the manifest's 12 example
  IDs in manifest order and has `items: []`. The B page is a leaf whose only
  page prerequisite is A; no A item depends on a B item.

## Conventions preserved in the pages

- Curvature sign:
  $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$.
- Four-tensor order:
  $\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$, so the round sphere has positive
  sectional curvature and
  $K(\sigma)=\operatorname{Rm}(X,Y,Y,X)/\det\operatorname{Gram}(X,Y)$.
- Bundle-frame structure equation:
  $\Omega=d\omega+\omega\wedge\omega$, with ordered matrix multiplication.
- Shape convention:
  $S_\nu X=-(\overline\nabla_X\nu)^\top$.
- Hypersurface scalar mean curvature and immersed mean-curvature vector are
  averaged traces. Thus
  $H_\nu=m^{-1}\operatorname{tr}S_\nu$ and
  $\mathbf H=m^{-1}\operatorname{tr}_g\mathrm{II}$, and the first variation
  has the compensating factor
  $A'_K(0)=-m\int_K\langle V,\mathbf H\rangle\,d\mu$.
- Local flatness conclusions are stated locally. The pages make no global
  trivialization or holonomy claim. Total-geodesic equivalences and the
  arbitrary-variation form of first variation retain their boundaryless
  hypotheses.
- Item-level `AC_omega` qualifications are not collapsed into a global page
  assumption. The prose says only that selected statements retain their
  explicit choice interfaces.

## Authoritative passages read

- Ved Datar, *Lectures on Riemannian Geometry*,
  <https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf>:
  Lecture 6 §6.1, Lemma 6.1.2 and Propositions 6.1.3/6.1.5, printed pp. 37–40;
  Example 8.2.6, printed p. 49; Lectures 11–14, especially Proposition 11.2.1,
  Lemma 11.2.3, Propositions 11.3.2–11.3.3, Proposition 12.1.6 and Corollary
  12.1.7, Definitions/Propositions in §§12.2–13.2, and Propositions
  14.1.1–14.2.12, printed pp. 71–108; Proposition 15.3.1 and complete proof,
  printed pp. 117–118.
- John M. Lee, *Riemannian Manifolds: An Introduction to Curvature*,
  <https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf>: Chapter 1
  plane-to-half-cylinder isometry, printed pp. 5–6; Chapter 3, Proposition
  3.5(c), printed pp. 38–42; Chapter 5, Propositions 5.11 and 5.13, printed
  pp. 77–83; Chapter 7, equations (7.3)–(7.4), Theorem 7.3, Propositions
  7.4–7.5 and Lemmas 7.6–7.7, printed pp. 117–126; Chapter 8, Lemmas 8.1/8.3,
  Theorems 8.2/8.4/8.6, equations (8.1)–(8.4), and curvature examples,
  printed pp. 133–151.
- Will J. Merry, *Differential Geometry (2021)*,
  <https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf>:
  Theorem 33.9; Lecture 35 curvature of a connection; Lecture 36, Definition
  36.18, Examples 36.11, and Theorems 36.19/36.21; Theorem 48.12 and complete
  proof.
- Chuu-Lian Terng, *Lecture Notes on Curves and Surfaces in R^3 and Riemannian
  Geometry*, <https://www.math.uci.edu/~cterng/LectureNotes1353.pdf>:
  Chapter 2 §2.1, the shape operator and Proposition 2.1.1, adapted-frame
  equations (2.1.1)–(2.1.6), Gauss/Codazzi/Ricci equations
  (2.1.7)–(2.1.18), and the mean-curvature/variation discussion through
  (2.1.22), printed pp. 23–31.
- Danny Calegari, *Minimal Surfaces*,
  <https://web.archive.org/web/20190618171523if_/http://math.uchicago.edu/~dannyc/courses/minimal_surfaces_2014/minimal_surfaces_notes.pdf>:
  Chapter 3 §1.2 and Example 1.6, printed pp. 4–7; §2.2, the complete density
  calculation and first-variation Proposition 2.1, Definition 2.2, Example
  2.3, and normalization Warning 2.4, printed pp. 12–14.

The five complete PDFs were locally downloaded and text-extracted for bounded
source reading. The relevant arguments, not merely search snippets, were read.

## Dependency and proof-structure checkpoint

The internal A-page spine is coherent in the displayed order:

1. affine curvature is defined, proved tensorial, and put in coordinates;
2. bundle curvature is defined, identified as an endomorphism-valued two-form,
   expressed by the structure equation, constrained by Bianchi, and used for
   local flat transport/frames;
3. Levi–Civita curvature is lowered to `Rm`, then first Bianchi precedes the
   full algebraic symmetries, after which differential Bianchi is stated;
4. sectional curvature, constant-curvature tensors, Ricci/scalar traces,
   Ricci decomposition, contracted Bianchi, Schur, and local Euclidean
   flatness follow in dependency order;
5. tangent/normal projection precedes induced connection and `II`; induced
   Levi–Civita and symmetry precede normal connection, shape, Weingarten,
   Gauss, Codazzi, and Ricci;
6. total geodesy precedes its characterizations; the spectral theorem is used
   only after its prerequisite page for principal curvatures; Gauss precedes
   the hypersurface and Theorema Egregium consequences; and `II` precedes mean
   curvature and first variation;
7. all six false statements come after the positive results that refute them.

The B examples form a leaf. Euclidean, sphere, hyperbolic, and product
curvature precede the scalar-flat product counterexample; the shape examples
precede the cylinder, catenoid, great-sphere, and bending comparisons. The
last trivial-bundle calculation depends on A-page connection-curvature items,
not another B item.

No item-contract change is proposed by this page-only helper. Exact dependency
arrays remain in the lead-owned item front matter. The following is an
item-by-item inclusion checkpoint, not a substitute for the lead's proof
contracts.

## A-page item-by-item checkpoint

| # | Item | Claim and page role | Boundary/choice or contract note |
| ---: | --- | --- | --- |
| 1 | `def-curvature-of-an-affine-connection` | Fixes the bracket-corrected curvature and sign. | Definition precedes every identity. |
| 2 | `lem-curvature-is-c-infinity-linear-in-all-three-vector-fields` | Cancels derivative terms to prove tensoriality in all three slots. | Local algebra; no stronger commutation claim. |
| 3 | `thm-curvature-is-a-type-one-three-tensor` | Packages the trilinear operation as a smooth `(1,3)` tensor. | Uses the exact tensor-field supplier interface. |
| 4 | `prop-curvature-is-skew-in-its-first-two-arguments` | Establishes first-pair skewness. | Includes low-dimensional/vacuous cases. |
| 5 | `prop-coordinate-formula-for-the-curvature-tensor` | Gives the Christoffel-symbol coordinate formula with the fixed sign. | Vanishing Christoffel symbols at one point do not remove their derivatives. |
| 6 | `def-curvature-of-a-vector-bundle-connection` | Defines bracket-corrected bundle curvature. | Does not assume a metric connection. |
| 7 | `prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form` | Proves section-linearity and alternating base slots. | Fibrewise endomorphism formulation only. |
| 8 | `thm-curvature-two-form-structure-equation` | Proves `Omega=d omega+omega wedge omega`. | Matrix-product order is essential. |
| 9 | `thm-second-bianchi-identity-for-a-bundle-connection` | Proves the covariant exterior identity `d_nabla Omega=0`. | Not the later componentwise Levi–Civita identity. |
| 10 | `prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball` | Derives local path independence on a sufficiently small coordinate ball. | Local and contractible; no global holonomy conclusion. |
| 11 | `thm-a-flat-connection-admits-local-parallel-frames` | Constructs local parallel frames for a flat connection. | Local triviality only. |
| 12 | `def-riemann-curvature-four-tensor` | Lowers the curvature output with the metric in the declared argument order. | Applies at boundary points; low dimensions handled in the item. |
| 13 | `thm-first-bianchi-identity` | Proves the cyclic identity from torsion freeness and Jacobi. | Choice-interface issue is recorded below for the lead. |
| 14 | `thm-algebraic-symmetries-of-the-riemann-tensor` | Collects pair skewness, cyclic Bianchi, and pair interchange. | Does not presuppose sectional curvature. |
| 15 | `thm-differential-second-bianchi-identity` | Gives the covariant cyclic derivative identity. | Distinct from bundle-form Bianchi above. |
| 16 | `def-sectional-curvature` | Defines normalized `Rm(X,Y,Y,X)` on a tangent two-plane. | Empty domain in dimensions below two. |
| 17 | `lem-sectional-curvature-is-independent-of-the-basis-of-the-plane` | Proves invariance under every ordered basis change. | Refutes orientation/order dependence. |
| 18 | `thm-sectional-curvatures-determine-the-riemann-tensor` | Recovers the algebraic curvature tensor by polarization. | Pointwise finite-dimensional statement. |
| 19 | `def-constant-sectional-curvature-and-space-form` | Defines constant sectional curvature and complete connected space forms. | Completeness/choice qualification is item-level. |
| 20 | `prop-curvature-tensor-of-constant-sectional-curvature` | Identifies the standard constant-curvature four-tensor. | Uses the page's `Rm` sign/order. |
| 21 | `def-ricci-curvature` | Traces `Z -> R(Z,X)Y`. | Basis independence is proved next. |
| 22 | `lem-ricci-curvature-is-symmetric-and-basis-independent` | Proves contraction invariance and symmetry. | Includes the low-dimensional zero cases. |
| 23 | `def-scalar-curvature` | Traces Ricci with the metric. | No claim that it determines `Rm`. |
| 24 | `prop-scalar-curvature-is-twice-the-sum-of-sectional-curvatures-of-coordinate-planes` | Computes scalar curvature in an orthonormal basis. | Sum is empty below dimension two. |
| 25 | `def-kulkarni-nomizu-product-trace-free-ricci-and-weyl-curvature` | Defines the algebraic product and trace decompositions. | Dimension qualifications remain explicit. |
| 26 | `prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three` | Proves scalar/trace-free-Ricci/Weyl decomposition; records the dimension-two formula. | `W=0` in dimension three, not in all dimensions. |
| 27 | `thm-contracted-second-bianchi-identity` | Contracts differential Bianchi to `div Ric=(1/2)dS` and divergence-free Einstein tensor. | A TeX typo in the displayed statement is recorded below. |
| 28 | `thm-schurs-lemma-for-pointwise-constant-sectional-curvature` | Makes the pointwise curvature function constant on connected components for `n>=3`. | Dimension and connected-component boundary are essential. |
| 29 | `thm-a-riemannian-manifold-is-flat-iff-it-is-locally-isometric-to-euclidean-space` | Equates vanishing curvature with local Euclidean isometries. | Explicitly boundaryless; local, not global. |
| 30 | `def-tangential-and-normal-projections-along-a-riemannian-submanifold` | Defines smooth orthogonal splitting along an embedding. | Propagates the stated projection choice interface. |
| 31 | `def-induced-connection-and-second-fundamental-form` | Splits the ambient derivative into tangential connection and normal `II`. | Uses a point-local extension argument, not the defective global extension supplier. |
| 32 | `thm-the-induced-connection-is-levi-civita` | Proves metric compatibility and torsion freeness. | Uses the induced metric and exact projection conventions. |
| 33 | `lem-the-second-fundamental-form-is-a-symmetric-normal-bundle-valued-two-tensor` | Proves bilinearity, smoothness, normality, and symmetry of `II`. | `II` remains extrinsic. |
| 34 | `def-normal-connection` | Defines the normal projection of the ambient derivative. | Normal-bundle construction retains its explicit choice assumption. |
| 35 | `def-shape-operator` | Defines `S_nu X=-(bar nabla_X nu)^top`. | Sign fixed before every hypersurface formula. |
| 36 | `thm-weingarten-equation-and-adjointness-of-the-shape-operator` | Decomposes ambient normal derivatives and proves `S_nu` is adjoint to `II`. | Self-adjointness enables the later spectral step. |
| 37 | `thm-gauss-equation-for-a-riemannian-submanifold` | Relates intrinsic and ambient `Rm` by the two quadratic `II` terms. | Signs match the fixed shape and `Rm` conventions. |
| 38 | `thm-codazzi-equation-for-a-riemannian-submanifold` | Identifies the normal ambient curvature with the antisymmetry of `nabla II`. | Tangent/normal connections are both explicit. |
| 39 | `thm-ricci-equation-for-the-normal-connection` | Relates ambient normal curvature, normal-connection curvature, and shape commutators. | Ordered commutator sign retained. |
| 40 | `def-totally-geodesic-submanifold` | Defines total geodesy by `II=0`. | Stronger than zero mean curvature. |
| 41 | `thm-equivalent-characterizations-of-a-totally-geodesic-submanifold` | Relates `II=0`, preserved connection, and ambient/intrinsic geodesics. | Boundaryless qualification is retained. |
| 42 | `def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface` | Uses the spectral theorem to define unordered principal curvatures, determinant, and averaged trace. | Supplied unit normal; no global eigenframe or smooth ordering. |
| 43 | `prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures` | Gives `K(e_i wedge e_j)=kappa_i kappa_j` for orthonormal principal directions. | Requires dimension at least two; prose typo recorded below. |
| 44 | `thm-gausss-theorema-egregium` | In dimension two, identifies intrinsic Gaussian curvature with `det S_nu` in Euclidean three-space. | Local normal sign cancels; TeX typo recorded below. |
| 45 | `def-mean-curvature-vector` | Defines the normal averaged trace of `II` for positive-dimensional immersions. | No orientation needed; excludes dimension zero. |
| 46 | `prop-first-variation-of-volume-for-a-normal-variation` | Proves the compact-support variation formula with factor `m`; extends to arbitrary variations when boundaryless. | Eligible compact domain and support hypotheses are explicit. |
| 47 | `rem-mean-curvature-and-minimal-submanifolds` | Defines minimality as `H=0` and separates stationary from minimizing. | Total geodesy implies minimality, not conversely. |
| 48 | `fs-curvature-is-obtained-by-commuting-two-covariant-derivatives-without-a-bracket-correction` | Refutes the raw-commutator claim. | Bracket correction is necessary for tensoriality. |
| 49 | `fs-christoffel-symbols-vanishing-at-one-point-implies-curvature-vanishes-there` | Refutes the normal-coordinate inference. | Derivatives of Christoffel symbols survive. |
| 50 | `fs-sectional-curvature-depends-on-an-ordered-basis-of-the-plane` | Refutes ordered-basis dependence. | Uses the preceding basis-invariance lemma. |
| 51 | `fs-ricci-curvature-and-scalar-curvature-determine-the-full-riemann-tensor-in-every-dimension` | Refutes universal determination by exhibiting Weyl freedom in higher dimension. | Does not contradict the special low-dimensional formulas. |
| 52 | `fs-the-second-fundamental-form-is-intrinsic-to-the-abstract-riemannian-manifold` | Refutes intrinsicity by isometric bendings with different `II`. | Exact bending example appears on B. |
| 53 | `fs-zero-mean-curvature-implies-a-submanifold-is-totally-geodesic` | Refutes the trace-zero-to-tensor-zero implication. | Catenoid witness appears on B. |

## B-page item-by-item checkpoint

| # | Item | Claim, computation, and dependency role | Boundary/choice note |
| ---: | --- | --- | --- |
| 1 | `ex-euclidean-space-has-zero-curvature` | Constant coordinate fields give zero connection and curvature. | Calibrates the sign and supplies later flat/product comparisons. |
| 2 | `ex-the-round-sphere-has-positive-constant-sectional-curvature` | Gauss plus `S=-r^{-1}I` gives `K=+r^{-2}`. | Outward-normal sign changes principal curvatures but not sectional curvature. |
| 3 | `ex-hyperbolic-space-has-negative-constant-sectional-curvature` | Upper-half-space calculation gives `K=-r^{-2}`. | Positive scale `r`; complete model qualification retained. |
| 4 | `ex-curvature-of-a-riemannian-product` | Curvature splits by factors and mixed planes have zero curvature. | Used by the later scalar-flat counterexample. |
| 5 | `ex-gaussian-curvature-of-a-surface-of-revolution` | In meridian arclength coordinates, `K=-r''/r`. | Assumes the stated regular positive radius. |
| 6 | `ex-principal-curvatures-of-a-round-sphere` | Outward normal gives every principal curvature `-1/r`. | Matches `S_nu=-(bar nabla nu)^top`. |
| 7 | `ex-the-cylinder-has-zero-gaussian-curvature-but-nonzero-second-fundamental-form` | Principal curvatures `-1/r,0` give zero Gaussian curvature and nonzero `II`. | Separates intrinsic flatness from extrinsic bending. |
| 8 | `ex-the-catenoid-has-zero-mean-curvature-but-is-not-totally-geodesic` | Opposite nonzero principal curvatures `+/-1/(a cosh^2(v/a))` average to zero. | Direct witness for minimal but not totally geodesic. |
| 9 | `ex-a-great-sphere-is-totally-geodesic` | Ambient derivative/projection gives `II=0`. | Stronger than merely minimal. |
| 10 | `cex-same-intrinsic-plane-with-different-extrinsic-curvature-after-bending` | Plane strip and half-cylinder are isometric but have different shape data. | Makes `II`'s extrinsic dependence explicit. |
| 11 | `cex-zero-scalar-curvature-does-not-imply-flatness` | `S^2(r) x H^2(r)` has cancelling scalar curvatures but nonzero factor sectional curvatures. | Relies on examples 2–4; dimension four is intentional. |
| 12 | `ex-curvature-two-form-of-a-connection-on-a-trivial-plane-bundle` | For `omega=By dx+Ax dy`, direct calculation yields `(A-B+xy(BA-AB)) dx wedge dy`. | Matrix order and the noncommutative witness are explicit. |

## Defects and open owner decisions

I did not edit any of the following lead-owned or published files.

1. Draft display typo in
   `items/thm-contracted-second-bianchi-identity.md:32`: the statement reads
   `\frac12,dS`. The proof derives the intended
   `\operatorname{div}\operatorname{Ric}=\frac12 dS`, so this appears to be a
   TeX punctuation typo, not a mathematical gap.
2. Draft prose typo in
   `items/prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures.md:64`:
   the prose has raw `kappa_ikappa_j`. The displayed equation immediately
   following correctly says `\kappa_i\kappa_j`.
3. Draft TeX style defects in
   `items/thm-gausss-theorema-egregium.md:72`: two occurrences of raw `det`
   should be `\det`. The determinant parity argument itself is correct.
4. Published interface defect already recorded in the group lead's report:
   `items/thm-vector-fields-form-a-lie-algebra.md:35-36` states a theorem about
   smooth vector fields with no `AC_omega` assumption, while its dependency
   chain reaches
   `items/def-smooth-vector-field-as-a-tangent-bundle-section.md:34-35`, whose
   definition explicitly assumes `AC_omega`; the direct bridge is
   `items/thm-derivations-of-smooth-functions-are-smooth-vector-fields.md:10`.
   The published file and canonical ledger are outside this helper's scope.
5. The current owner report is internally inconsistent about the selected
   consumer `thm-first-bianchi-identity`: its published-defect discussion says
   the consumer will use the algebraic conclusion under an explicit
   `AC_omega` assumption, but the current item statement and dependency list
   (`items/thm-first-bianchi-identity.md:7,24-32`) contain no such assumption,
   while the later checkpoint says no choice occurs. The mathematical Jacobi
   calculation is complete, but the repository-level choice contract needs a
   single lead decision. I avoided resolving that policy conflict in either
   page.

No other mathematical gap was found in the page narrative or in the selected
item order. This is not a claim that the item batch is accepted: the lead must
inspect the pages, decide the choice-interface issue, repair or waive the
three draft typesetting defects, and run the shared certification gates.

## Validation checkpoint and next action

- Explicit-path frontmatter/order/uniqueness/existence audit: exit 0. Both page
  IDs, titles, statuses, item/example arrays, item-file existence checks, and
  the A-to-B leaf check passed; reported `failures=0`.
- Explicit-path rendercheck first passed on the two page files, then passed
  again on all three helper-owned files after this report was written. The
  final run checked three files and reported valid renderer YAML, balanced
  delimiters, no wikilinks in math, and successful real-KaTeX parsing of every
  math span.
- Explicit-path precheck on all three helper-owned files: exit 0 with
  `0 checked, 0 failing — all clean`. This is an applicability result, not a
  proof certification: page files contain no phase-format proof body.
- The repository-wide dependency checker has no explicit-path mode. I did not
  run that shared integration gate while other live-run files are changing;
  the scoped audit instead compared the exact arrays to the current manifest,
  verified all selected files exist, checked every within-pair dependency is
  backward in manifest order, checked all 76 direct external prerequisites
  are published, and traversed the full 1,548-item A dependency closure. It
  reported zero forward, self, A-to-B, or unpublished-prerequisite failures.
- Next action: group lead a should inspect the two pages, decide the exact
  `AC_omega` interface for First Bianchi, repair or waive the three draft
  typesetting defects, and run the shared manifest/dependency/contract and
  certification gates. These obligations remain open; this report does not
  record acceptance.

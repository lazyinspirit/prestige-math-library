# Step 3b — complex topological K-theory and Bott periodicity

Run: `phase-2-next-18`
Role: `alpha-high`
Owned pair: `complex-topological-k-theory-and-bott-periodicity` / `complex-topological-k-theory-and-bott-periodicity-examples`
Shared output: `research/phase-2-next-18-batch-4.pages.json`

## Audit checkpoint

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the relevant workflow rules, the complete owned scaffold and coverage rows, `research/plan-algebraic-topology-track.md` at AT-17 and its prerequisite table, the current plan, current Step 3a decision, the frontier dependency ledger, and the completed same-batch vector-bundle supplier records.
- No `research/phase-2-next-18-owner-authoring-direction.md` exists.
- Primary source checked: Allen Hatcher, *Vector Bundles and K-Theory*, version 2.2 (2017), Chapter 2 §§2.1–2.2, pp. 39–58, including the complete proofs of Propositions 2.6, 2.7, 2.9, the product theorem, and Bott periodicity, together with Proposition 2.24 and its proof on pp.66–68. The downloaded source hash begins `04282b30dfa63051`, matching the coverage record. May, *A Concise Course in Algebraic Topology*, Chapter 24 §§1–3, pp.203–210, was also checked; source hash begins `6724f02748ed1f2f`.
- Confirmed scaffold repair: `lem-polynomial-clutching-families-stabilize-to-linear-clutching` must conclude with a general linear family `a(x)z+b(x)`. The subsequent Möbius homotopy to `zI-A(x)` is part of `lem-linear-clutching-splits-into-eigenbundles`, not Hatcher Proposition 2.6.
- Confirmed scaffold repair: the rank map lands in singular `H^0(X;\mathbb Z)`, whose elements are integer-valued functions constant on path components. The bundle-rank function is topologically locally constant and therefore gives such a class; arbitrary compact Hausdorff spaces need not have open path components.
- AC propagation repairs required for the reduced external product, negative-Laurent stabilization, linear spectral splitting, and the periodic portions of the point, two-sphere, and sphere examples. The exact-sequence and Laurent arguments will explicitly obtain dependent choice from the same-batch supplier `lem-ac-supplies-dependent-choice-for-vector-bundle-constructions`.
- Dependency repair: the cofibration exact-sequence proof will be direct at each mapping-cone stage and will not cite representable-cohomology exactness, which would be circular here. The polynomial linearization lemma will use clutching and Whitney-sum data directly, keeping that algebraic reduction choice-free.
- The fundamental product theorem will include the inverse map and its degree, Laurent-shift, homotopy, and additivity checks from Hatcher pp.49–51. The projective-space computation will include the relative cover and product calculation from Hatcher Proposition 2.24 rather than referring only to the affine top cell.
- No confirmed defect in an already published item has been found. The defects above are confined to this unpublished scaffold.
- Cross-batch input remains empty: every new dependency is published or within batch 4. The sibling pair's rows and files will be preserved.

## Work checkpoints

### `def-whitney-sum-monoid-of-complex-vector-bundles`

- Claim/conventions: isomorphism classes of finite-rank complex bundles with componentwise locally constant rank; Whitney sum, zero bundle, and the empty-base one-element monoid are explicit.
- Sources: Hatcher §2.1, printed pp.39–40; May Chapter 24 §1, printed pp.203–204.
- Dependencies checked: `def-real-and-complex-topological-vector-bundle`, `def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles`, `def-vector-bundle-map-section-subbundle-and-isomorphism`.
- Decision: `accept`, confidence 1. Focused precheck, rendercheck, and strict proof-contract checks pass. No AC is used and no gap remains.

### `def-complex-topological-k-zero-by-grothendieck-completion`

- Claim/conventions: the common-summand quotient of pairs of bundle classes, with explicit addition, inverse, canonical map, and universal formula.
- Sources: Hatcher §2.1, printed pp.39–40; May Chapter 24 §1, printed pp.203–204.
- Dependency checked: `def-whitney-sum-monoid-of-complex-vector-bundles`.
- Decision: `accept`, confidence 1. Focused precheck, rendercheck, and strict proof-contract checks pass. Empty and noncancellative monoids are covered; no AC is used.

### `prop-equality-in-k-zero-is-stable-isomorphism-over-compact-bases`

- Claim/conventions: equality of arbitrary virtual differences is equivalent first to stabilization by a finite bundle and, under AC on a compact Hausdorff base, to stabilization by the same trivial bundle; both iff directions and $N=0$ are proved.
- Sources: Hatcher Proposition 2.1 and following construction, printed pp.39–40; May Chapter 24 §1, printed pp.203–204.
- Dependencies checked: `def-complex-topological-k-zero-by-grothendieck-completion`, `thm-finite-rank-complement-theorem-over-compact-hausdorff-bases`, `def-axiom-of-choice`.
- Decision: `accept`, confidence 1. Focused precheck, rendercheck, and regenerated strict proof-contract checks pass. AC is used only to complement $H$.

### `def-grothendieck-ring-structure-and-rank-map`

- Claim/conventions: explicit virtual tensor-product formula, trivial-line unit, and rank map to singular $H^0$ as functions constant on paths. The bundle-rank function is topologically locally constant; no openness of path components is assumed.
- Sources: Hatcher §2.1, printed pp.40–41; May Chapter 24 §1, printed pp.203–204.
- Dependencies checked: `def-complex-topological-k-zero-by-grothendieck-completion`, `def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles`, `def-singular-cohomology-ring`.
- Decision: `repaired`, confidence 1. The scaffold's imprecise $H^0$ wording was corrected. Focused precheck, rendercheck, and strict contract checks pass; no AC is used.

### `def-reduced-complex-k-theory`

- Claim/conventions: based kernel of the fiber restriction to $K^0(*)\cong\mathbb Z$, an ideal; zero rank is required only on the basepoint component, and the empty unbased space is excluded.
- Sources: Hatcher §2.1, printed pp.40–41; May Chapter 24 §1, printed pp.203–204.
- Dependency checked: `def-grothendieck-ring-structure-and-rank-map`.
- Decision: `accept`, confidence 1. Focused precheck, rendercheck, and strict contract checks pass; no AC is used.

### `prop-k-zero-is-contravariantly-functorial-and-homotopy-invariant`

- Claim/conventions: pullback extends to contravariant unital ring maps, satisfies identity/composition, is homotopy invariant, and preserves the based reduced kernel.
- Sources: Hatcher §2.1, printed pp.40–42; May Chapter 24 §1, printed pp.203–204.
- Dependencies checked: the three preceding K-theory definitions plus the bundle pullback functoriality and homotopy-invariance suppliers and `def-axiom-of-choice`.
- Decision: `accept`, confidence 1. Focused precheck, rendercheck, and regenerated strict contract checks pass. AC is used only through endpoint bundle isomorphism.

### `thm-reduced-k-theory-exact-sequence-of-a-cofibration`

- Claim/conventions: exactness of $\widetilde K^0(X/A)\to\widetilde K^0(X)\to\widetilde K^0(A)$ and at every successive mapping-cone stage, with the established suspension reflection signs.
- Argument: represent a kernel class by $[E]-[\varepsilon^n]$, stabilize its restriction to an actual trivialization, extend the frame to a neighborhood, descend $E$ across $X\to X/A$, and repeat this direct construction on the rotated cones.
- Sources: Hatcher Proposition 2.9, printed pp.51–53; May Chapter 24 §§1–2, printed pp.203–208.
- Dependencies checked: the reduced/functorial K items, stable equality and finite complementation, reduced cofiber conventions, Tietze, compact partitions, the same-batch AC-to-DC lemma, and AC.
- Decision: `repaired`, confidence 1. Removed the circular representability-exactness dependency and added the actual stable and choice suppliers. Focused precheck, rendercheck, and regenerated strict contract checks pass.

### `def-external-product-in-complex-k-theory`

- Claim/conventions: the unreduced external product is the choice-free pullback/tensor formula. Under AC, reduced factors descend uniquely from $X\times Y$ to $X\wedge Y$; uniqueness uses surjectivity of wedge restriction supplied by the two projections.
- Sources: Hatcher §2.1, printed pp.41–42; May Chapter 24 §2, printed pp.205–208.
- Dependencies checked: ring and pullback, reduced exactness, smash product, and AC.
- Decision: `repaired`, confidence 1. The scaffold now states and propagates AC only for the reduced clause. Focused precheck, rendercheck, and strict contract checks pass.

### `lem-determinant-classifies-loops-in-complex-general-linear-groups`

- Claim/conventions: for every $n\geq1$, determinant is an isomorphism on based fundamental groups, and winding $k$ has representative $\operatorname{diag}(z^k,1,\ldots,1)$.
- Argument: continuous QR deformation to $U(n)$; locally trivial last-column fibrations and simultaneous connected/simple-connected induction for $SU(n)$; determinant fibration with its diagonal section.
- Sources: Hatcher proof of Proposition 1.11, printed pp.23–24; MIT 18.906, Lectures 18 and 21.
- Dependencies checked: general linear groups, the fibration homotopy sequence, sphere simple connectivity, and winding classification.
- Decision: `accept`, confidence 1. Focused precheck, rendercheck, and regenerated strict contract checks pass; the proof is choice-free.

### `thm-hopf-line-calculation-of-k-zero-of-the-two-sphere`

- Claim/conventions: with $\gamma$ clutched by $z$ and $\beta=[\gamma]-1$, $K^0(S^2)=\mathbb Z[\beta]/(\beta^2)$ and the reduced group is $\mathbb Z\beta$; reversing the hemispheres sends $\beta$ to $-\beta$.
- Argument: determinant normal forms generate; $\operatorname{diag}(z^2,1)\simeq\operatorname{diag}(z,z)$ yields $\beta^2=0$; stable determinant winding proves independence.
- Sources: Hatcher Corollary 2.3 and Example 1.13, printed pp.27 and 49–50; May Chapter 24 §2.
- Dependencies checked: clutching/classification, determinant lemma, tautological bundle, stable equality, product, and AC.
- Decision: `accept`, confidence 1. Focused precheck, rendercheck, and regenerated strict contract checks pass. AC is inherited only through stable equality/product.

### `lem-normalized-clutching-data-for-bundles-over-x-times-s-two`

- Claim/conventions: stabilized bundles on $X\times S^2$ have common-hemisphere data $[E,f]$ with $f(x,1)=I$; the typed normalization is $f(x,1)^{-1}f(x,z)$. Normalized homotopies preserve the stabilized class.
- Sources: Hatcher proof of Theorem 2.2, printed pp.42–43.
- Dependencies checked: finite complement, bundle homotopy invariance, clutching, stable equality, and AC.
- Decision: `accept`, confidence 1. Focused precheck, rendercheck, and regenerated strict contract checks pass. AC is used only by the cited stabilization and endpoint suppliers.

Product-theorem prerequisite refresh: reopened this item and added the required uniqueness statement. Ratios of two normalized hemisphere trivializations are disk maps into $\operatorname{Aut}(E)$ equal to $I$ at $z=1$; contracting each disk to $1$ gives the normalized homotopy. The refreshed decision is `repaired`, confidence 1, and all focused checks pass.

### `lem-uniform-laurent-approximation-through-bundle-automorphisms`

- Claim/conventions: a normalized clutching automorphism is joined through normalized automorphisms to a finite Laurent family with continuous coefficient endomorphisms.
- Argument: explicit Fejér coefficients; uniform convergence from a short-arc/tail estimate; finite partition patching; openness of the automorphism bundle; normalization $q(z)=p(z)p(1)^{-1}$ and straight-line homotopy.
- Source: Hatcher proof of Theorem 2.2, printed pp.43–44.
- Dependencies checked: normalized data, compact uniform continuity, Riemann integration, compact partitions, AC-to-DC, and AC.
- Decision: `repaired`, confidence 1. Added the DC supplier used by the published partition theorem. Focused precheck, rendercheck, and regenerated strict contract checks pass.

Product-theorem prerequisite refresh: reopened this item and proved the relative clause from Hatcher Proposition 2.4. A normalized clutching homotopy is approximated over $X\times I$ and joined to prescribed Laurent endpoints by normalized straight segments inside the open automorphism neighborhood. The refreshed decision remains `repaired`, confidence 1, and all focused checks pass.

### `lem-negative-laurent-powers-are-cleared-by-hopf-line-stabilization`

- Claim/conventions: multiplying Laurent clutching data by $z^r$ clears negative powers and tensors by the pulled-back $\gamma^r$; multiplication by $[\gamma]^{-r}=1-r\beta$ recovers the original class.
- Source: Hatcher proof of Theorem 2.2, printed p.44.
- Dependencies checked: Laurent approximation, clutching, external product, the Hopf calculation, and AC.
- Decision: `repaired`, confidence 1. Added the required AC statement/dependency and proved the $r=0$ boundary. Focused precheck, rendercheck, and regenerated strict contract checks pass.

### `lem-polynomial-clutching-families-stabilize-to-linear-clutching`

- Claim/conventions: degree-at-most-$n$ polynomial data becomes a general linear family $a(x)z+b(x)$ after adding $n$ identity summands; it does not yet become monic $zI-A$.
- Argument: Hatcher's explicit $(n+1)$-block matrix, column operations accumulating $q(z)$, row clearings to $\operatorname{diag}(I,\ldots,I,q)$, and reversible elementary homotopies.
- Source: Hatcher Proposition 2.6, printed pp.45–46.
- Dependencies checked: clutching and Whitney-sum block operations only.
- Decision: `repaired`, confidence 1. Corrected the scaffold's conflation with Proposition 2.7 and removed unnecessary AC-bearing dependencies. Focused precheck, rendercheck, and regenerated strict contract checks pass; the item is choice-free.

### `lem-linear-clutching-splits-into-eigenbundles`

- Claim/conventions: a general $az+b$ family first becomes $zI-A$ by Hatcher's disk-automorphism homotopy and constant frame change; its outside/inside generalized eigenspaces are continuous complementary subbundles and give $[E_>,I]\oplus[E_<,z]$.
- Argument: explicit fractional-linear formula; Bézout/Cayley–Hamilton splitting; continuity of inside/outside characteristic factors by root-count winding; two explicit spectral homotopies; uniqueness gives direct-sum compatibility.
- Source: Hatcher Proposition 2.7 and Lemma 2.8, printed pp.46–49.
- Dependencies checked: polynomial linearization, clutching gauge changes, winding, external product, Hopf calculation, and AC.
- Decision: `repaired`, confidence 1. Replaced the unused metric dependency with the actual winding/clutching suppliers and corrected the proposition boundary. Focused precheck, rendercheck, and regenerated strict contract checks pass.

### `thm-fundamental-product-theorem-for-complex-k-theory`

- Claim/conventions: external product is a natural ring isomorphism and gives the unique $a+b\beta$ normal form.
- Surjectivity: normalized Laurent data, clearing, block linearization, and spectral splitting give an explicit product expression.
- Injectivity: defined $\nu([E,z^{-m}q])=[M_-(n,q)]\otimes\beta+[E]\otimes\gamma^{-m}$; proved independence of degree bound, Laurent shift, Möbius parameter, normalized presentation, Laurent approximation, and isomorphic representative; proved additivity and $\nu\mu=I$ on the generators $[E]\otimes\gamma^{-m}$.
- Sources: Hatcher Theorem 2.2 and complete proof, printed pp.41–51, especially pp.49–51; May Chapter 24 §2.
- Dependencies checked: all five clutching reductions, external product, Hopf calculation, endpoint bundle invariance, and AC.
- Decision: `repaired`, confidence 1. Replaced the scaffold's functorial-repeat sketch with the complete inverse and registered the direct suppliers. Focused precheck, rendercheck, and regenerated strict contract checks pass.

### `def-negative-degree-complex-k-groups`

- Claim/conventions: absolute, based reduced, and relative negative groups are defined by reduced suspensions; $n=0$ agrees canonically with unreduced $K^0$ through the added-basepoint splitting.
- Sources: Hatcher §2.2, printed pp.56–57; May Chapter 24 §2.
- Dependencies checked: reduced K-theory, reduced cone/suspension, and based CGWH conventions.
- Decision: `accept`, confidence 1. Focused precheck, rendercheck, and strict contract checks pass; empty, $n=0$, and $A=X$ are explicit and no AC is used.

### `thm-complex-bott-periodicity`

- Claim/conventions: reduced external product with $\beta$ gives $\widetilde K^{-n}(X)\cong\widetilde K^{-n-2}(X)$, including compact pairs, and uniquely extends the grading to every integer.
- Argument: in the product theorem's $a+b\beta$ form, vanishing on both wedge axes is exactly $a=0$ and $b\in\widetilde K^0(X)$; reduced descent identifies this with $b\boxtimes\beta$. Suspend and pass to quotients, then define positive degrees by inverse periodic transport.
- Sources: Hatcher Theorem 2.11, printed pp.54–55; May Chapter 24 §2.
- Dependencies checked: product theorem, negative grading, reduced external product, exactness, and AC.
- Decision: `accept`, confidence 1. Focused precheck, rendercheck, and regenerated strict contract checks pass, with AC propagated through the product/exactness suppliers.

### `cor-complex-k-theory-of-spheres`

- Claim/conventions: reduced even spheres have group $\mathbb Z$ with the iterated Bott generator, odd spheres have zero, and the all-degree formula is controlled by the parity of $q-n$.
- Argument: computed the based $S^0$ rank-difference group and used complex clutching to prove every bundle on $S^1$ trivial, then iterated Bott; $m=0$ is the empty Bott product.
- Sources: Hatcher Corollary 2.12, printed p.55; May Chapter 24 §2.
- Dependencies checked: Bott, stable sphere clutching, Hopf, and AC.
- Decision: `accept`, confidence 1. Focused precheck, rendercheck, and regenerated strict contract checks pass; AC is propagated only from Bott/Hopf.

### `thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory`

- Claim/conventions: on finite CW pairs, the integer-graded theory is contravariant, homotopy invariant, exact on cofibers, suspended, finite-wedge additive, multiplicative, and two-periodic, with coefficients $\mathbb Z$ in even degrees and zero in odd degrees.
- Argument: suspend the degree-zero functor and exact sequence, transport through Bott, construct the finite-wedge inverse using collapse maps, build graded products from reduced external products and suspension-smash identifications, and use the sphere calculation at $S^0$.
- Sources: Hatcher §§2.1–2.2, printed pp.51–58; May Chapter 24 §2.
- Dependencies checked: functoriality, exactness, external product, negative grading, Bott, spheres, prespectrum pairing convention, and AC.
- Decision: `repaired`, confidence 1. A premature decision written while precheck still requested canonical numbering was superseded after repair; focused precheck, rendercheck, and regenerated strict contract checks now all pass.

A page item inventory complete. Next action: author `ex-k-theory-of-a-point-and-the-empty-space`.

### `ex-k-theory-of-a-point-and-the-empty-space`

- Claim/conventions: choice-free $K^0(*)\cong\mathbb Z$, $K^0(\varnothing)=0$, and $\widetilde K^0(*)=0$; assuming AC, $K^{2k}(*)\cong\mathbb Z$ and $K^{2k+1}(*)=0$ for every $k\in\mathbb Z$.
- Argument: dimension identifies the point's bundle monoid with $\mathbb N$; the empty-space monoid is terminal; the point restriction has zero kernel; Bott periodicity propagates the coefficients.
- Sources: Hatcher §§2.1–2.2, printed pp.39–40 and 54–58; May Chapter 24 §§1–2, printed pp.203–208.
- Dependencies checked: Grothendieck completion, reduced $K^0$, Bott periodicity, the sphere calculation for $\widetilde K^0(S^1)=0$, and `def-axiom-of-choice`.
- Decision: `repaired`, confidence 1. The scaffold now limits and propagates AC exactly to the graded clause. A final prerequisite audit added the sphere supplier that Bott periodicity alone cannot replace. Focused precheck, rendercheck, and regenerated strict contract checks pass.

Next action: author `ex-complex-k-ring-of-the-two-sphere`.

### `ex-complex-k-ring-of-the-two-sphere`

- Claim/conventions: under AC, $K^0(S^2)=\mathbb Z\oplus\mathbb Z\beta=\mathbb Z[\beta]/(\beta^2)$ for $\beta=[\gamma]-1$; reversing hemispheres replaces $\beta$ by $[\gamma^*]-1=-\beta$.
- Calculation: $(1+\beta)(1-\beta)=1$ because $\beta^2=0$, so $[\gamma^*]=[\gamma]^{-1}=1-\beta$; reversing clutching charts inverts $z$.
- Sources: Hatcher Corollary 2.3, printed pp.49–50; May Chapter 24 §2, printed pp.205–208.
- Dependencies checked: Hopf-line ring calculation, clutching convention, and `def-axiom-of-choice`.
- Decision: `accept`, confidence 1. Focused precheck, rendercheck, and regenerated strict contract checks pass.

Next action: author `ex-complex-k-theory-of-even-and-odd-spheres`.

### `ex-complex-k-theory-of-even-and-odd-spheres`

- Claim/conventions: for $n\geq1$, $K^0(S^{2n})\cong\mathbb Z\oplus\mathbb Z$ and $K^0(S^{2n+1})\cong\mathbb Z$; for $n\geq0$, $\widetilde K^q(S^n)$ is $\mathbb Z$ exactly in even parity $q-n$ and zero in odd parity.
- Argument: the basepoint restriction splits via the collapse to a point, adding the rank summand to the reduced calculation; suspension shifts to the coefficient group; $S^0$ is checked separately.
- Sources: Hatcher §2.2, printed pp.54–58; May Chapter 24 §2, printed pp.205–208.
- Dependencies checked: sphere corollary, point coefficients, and `def-axiom-of-choice`.
- Decision: `repaired`, confidence 1. Canonical numbering was adopted after precheck; focused precheck, rendercheck, and regenerated strict contract checks pass.

Next action: reread Proposition 2.24 and author `ex-complex-k-ring-of-complex-projective-space`.

### `ex-complex-k-ring-of-complex-projective-space`

- Claim/conventions: under AC, for $x=[\gamma]-1$, $K^0(\mathbb{CP}^n)=\mathbb Z[x]/(x^{n+1})$ with basis $1,x,\ldots,x^n$, including $n=0$.
- Argument: even-cell filtration gives a short exact restriction sequence; Hatcher's cover by balls $C_i$ supplies relative lifts $x_i$ whose product is the iterated Bott generator on the top-cell quotient; hence $x^r$ generates the kernel. Applying this independently at $r+1$ gives $x^{r+1}=0$ after restriction, and induction proves the presentation.
- Sources read: Hatcher Proposition 2.24 and complete proof, printed pp.66–68 (PDF pages 70–72); May Chapter 24 §3, printed pp.209–210.
- Dependencies checked: K exactness, Bott, external/relative products, the $S^2$ convention, the preceding sphere calculation, Schubert cells, and `def-axiom-of-choice`.
- Decision: `repaired`, confidence 1. Replaced the scaffold's unsupported filtration heuristic with the relative-product proof and registered the sphere supplier. Focused precheck, rendercheck, and regenerated strict contract checks pass; current pair scope was re-recorded `sufficient`.

Next action: author `ex-rank-map-on-a-disconnected-compact-space`.

### `ex-rank-map-on-a-disconnected-compact-space`

- Claim/conventions: on $X=X_1\amalg X_2$ with both pieces nonempty compact and open, the product bundles of ranks one and two glue to a bundle with rank class $(1_{X_1},2_{X_2})\in H^0(X_1;\mathbb Z)\times H^0(X_2;\mathbb Z)$; this is not one global integer.
- Argument: explicit disjoint-union bundle, direct fiber-dimension calculation, and restriction to the two nonempty pieces yields the contradiction $m=1=2$ for a hypothetical constant rank.
- Sources: May Chapter 24 §1, printed pp.203–204; Hatcher §2.1, printed pp.39–40.
- Dependencies checked: the Grothendieck rank map and the locally constant-rank Whitney monoid.
- Decision: `accept`, confidence 1. Focused precheck, rendercheck, and regenerated strict contract checks pass; no choice is used.

Next action: author `cex-stable-isomorphism-does-not-imply-actual-bundle-isomorphism`.

### `cex-stable-isomorphism-does-not-imply-actual-bundle-isomorphism`

- Claim/conventions: the real bundle $TS^2$ is nontrivial although $TS^2\oplus\varepsilon_{\mathbb R}^1\cong\varepsilon_{\mathbb R}^3$; this is a cancellation boundary example, not a complex-bundle equality in $K^0$.
- Witness/calculation: $((x,v),(x,t))\mapsto(x,v+tx)$ has inverse $(x,w)\mapsto((x,w-\langle w,x\rangle x),(x,\langle w,x\rangle))$. An actual trivialization of $TS^2$ would carry the constant section $(1,0)$ to a nowhere-zero tangent field, contradicting hairy ball.
- Sources: Hatcher §1.1, printed pp.9–10; Milnor–Stasheff §2, printed pp.14–19.
- Dependencies checked: bundle isomorphism/section definitions, Whitney sum, and the published even-sphere hairy-ball theorem.
- Decision: `accept`, confidence 1. Focused precheck, rendercheck, and regenerated strict contract checks pass; no choice is used.

All 26 assigned items are authored. Next action: compose the A and B pages, then run whole-pair and whole-batch gates.

## Dispatch handoff

### Completed inventory

The A page and all twenty promised items are complete:

- `def-whitney-sum-monoid-of-complex-vector-bundles`
- `def-complex-topological-k-zero-by-grothendieck-completion`
- `prop-equality-in-k-zero-is-stable-isomorphism-over-compact-bases`
- `def-grothendieck-ring-structure-and-rank-map`
- `def-reduced-complex-k-theory`
- `prop-k-zero-is-contravariantly-functorial-and-homotopy-invariant`
- `thm-reduced-k-theory-exact-sequence-of-a-cofibration`
- `def-external-product-in-complex-k-theory`
- `lem-determinant-classifies-loops-in-complex-general-linear-groups`
- `thm-hopf-line-calculation-of-k-zero-of-the-two-sphere`
- `lem-normalized-clutching-data-for-bundles-over-x-times-s-two`
- `lem-uniform-laurent-approximation-through-bundle-automorphisms`
- `lem-negative-laurent-powers-are-cleared-by-hopf-line-stabilization`
- `lem-polynomial-clutching-families-stabilize-to-linear-clutching`
- `lem-linear-clutching-splits-into-eigenbundles`
- `thm-fundamental-product-theorem-for-complex-k-theory`
- `def-negative-degree-complex-k-groups`
- `thm-complex-bott-periodicity`
- `cor-complex-k-theory-of-spheres`
- `thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory`

The B page and all six promised examples/counterexamples are complete:

- `ex-k-theory-of-a-point-and-the-empty-space`
- `ex-complex-k-ring-of-the-two-sphere`
- `ex-complex-k-theory-of-even-and-odd-spheres`
- `ex-complex-k-ring-of-complex-projective-space`
- `ex-rank-map-on-a-disconnected-compact-space`
- `cex-stable-isomorphism-does-not-imply-actual-bundle-isomorphism`

Both page files are composed with these exact inventories. The batch manifest retains the sibling vector-bundle pair and now has sixty total items; its proof-contract file has sixty strict entries. No new item ID was needed. The local supplier repairs instead strengthened the existing normalized-clutching uniqueness clause and the Laurent lemma's relative-homotopy clause before their product-theorem consumer.

### Material scaffold repairs

- Corrected the singular-$H^0$ rank convention and separated the topologically locally constant bundle-rank function from any assertion that path components are open.
- Replaced circular representability exactness with the actual stable trivialization, frame extension, quotient descent, and mapping-cone argument, propagating AC and its dependent-choice consequence.
- Made the unreduced product choice-free and isolated AC in reduced descent.
- Separated Hatcher's general linear form $az+b$ from the subsequent Möbius reduction to $zI-A$, then supplied the spectral splitting argument.
- Replaced the product theorem's strategy placeholder with an explicit inverse and its degree-bound, Laurent-shift, homotopy, representative, additivity, and two-sided-inverse checks.
- Replaced the projective-space filtration heuristic with Hatcher's relative-cover/product proof; added the preceding sphere example as an explicit local prerequisite.
- Propagated AC exactly to the affected periodic examples and left the disconnected-rank and real tangent-bundle examples choice-free.
- Added `cor-complex-k-theory-of-spheres` to the point example: period two does not by itself compute the odd coefficient, whereas the sphere supplier proves $K^{-1}(*)=\widetilde K^0(S^1)=0$.

### Sources and coverage

The relevant Hatcher arguments were read in full from the fetched PDF whose SHA-256 prefix is `04282b30dfa63051`: Theorem 2.2 and proof on printed pp.41–51, exactness on pp.51–53, Bott periodicity on pp.54–55, negative grading on pp.56–57, and Proposition 2.24 on pp.66–68. May Chapter 24 §§1–3 was read through the projective-bundle theorem on printed pp.203–210 from the PDF whose hash prefix is `6724f02748ed1f2f`. Coverage locators were corrected to these complete ranges. The coverage checklist reports two pages, 52 harvested entries, zero errors, and zero warnings.

### Integration checks

- Every item was checked immediately after authoring and checkpointed. The final explicit-path precheck evaluated all twenty proof-bearing owned items with zero failures; the six definitions were correctly skipped as non-proof items.
- Explicit-path rendercheck passed all 26 items and both pages: 28 files, zero errors.
- Batch content policy passed 60 scoped items with zero errors and warnings.
- Strict proof contracts passed 60 of 60 items with zero errors and warnings.
- Batch author-check exited successfully.
- `validate-plan` with `research/plan-spec.json`, `--repo .`, and `--max-items 60` exited successfully: declared page order is acyclic and there are no unresolved IDs, item-level cycles, forward references, or B-page dependencies among pages with item lists.
- The frontier dependency ledger was refreshed and deduplicated. Batch 4's cross-batch input remains the exact empty array; all prerequisites are published or in the same batch.
- After refreshing every changed-input hash in prerequisite order, the final Step 3 decision check reports 26 owned items and no owned open decision. The global run remains open only because other dispatched pairs are unfinished or owner-held.

### Published concerns and open obligations

No suspected or confirmed defect was found in a published item used by this pair. In particular, the published hairy-ball supplier used by the real boundary counterexample has the required $S^2$ statement and proof. No canonical published-consumer ledger was edited.

There is no mathematical, source, contract, rendering, dependency, or owner-held escalation remaining for this pair. The sole serial Step 4 obligation is the expected pre-splice plan update: both `complex-topological-k-theory-and-bott-periodicity` entries in `research/plan-spec.json` still have empty `items` arrays even though the batch manifest and page files contain the complete 20/6 inventories. Step 4 must splice those inventories and any shared prose amendment; this dispatch did not edit the shared plan.

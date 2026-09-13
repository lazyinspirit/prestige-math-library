# Step 3b helper handoff — group a, helper 3

Run: `phase-2-next-21`

Owned pairs: DG-35 symplectic manifolds/Moser/Darboux--Weinstein and DG-36
Hamiltonian mechanics/completely integrable systems.

## Verified starting state

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the helper task, owner direction,
  Step-3a scope decisions, both complete design sections, all 122 batch-10
  manifest rows, batch notes/coverage, and the exact statements of all 25
  external prerequisite items.
- Both owned A/B page files and all 122 owned item files were absent at start.
- The current manifest inventory is scope-approved but no individual proof is
  approved by Step 3a. Shared manifests, coverage, contracts, receipts, plans,
  and the canonical published-defect ledger remain read-only to this helper.
- Conventions fixed throughout: `omega_can=-d lambda`,
  `iota_(X_H) omega=dH`, `{F,G}=omega(X_F,X_G)=X_G(F)=-X_F(G)`, and
  `[X_F,X_G]=-X_{ {F,G} }`.
- Sources actually read: Cannas da Silva, *Lectures on Symplectic Geometry*,
  Lectures 1--3, 7--9, and 18--20 (archived complete PDF); Meinrenken,
  *Symplectic Geometry*, §§2.1--2.5, 3.1--3.5, 4.1--4.2, 5.1--5.3, and
  6.1--6.3 (archived Fall 2024 notes); Martynchuk--Broer--Efstathiou,
  *Hamiltonian Monodromy and Morse Theory*, Theorem 2.7 and §3.1, PDF
  pp. 5--11.

## Item checkpoints and proposed contracts

Each row records the exact authored claim, direct dependencies, proof spine,
boundary/choice treatment, and local check state. Source locators are the item
frontmatter locators unless expanded here.

| Item | Claim and proof contract | Boundary / choice / checks |
| --- | --- | --- |
| `def-symplectic-vector-space` | Finite-dimensional real `V` with alternating `omega` and isomorphism `omega-flat`; cites the published alternating normal form and includes the zero space. | Zero-dimensional case explicit; no choice. Definition/render check pending. |
| `prop-symplectic-vector-spaces-have-even-dimension` | Apply the exact published normal form; nondegeneracy kills the radical, leaving symplectic pairs and a standard basis. | Includes dimension zero; no choice. Precheck pass after canonical final-phase repair; render pending. |
| `def-symplectic-orthogonal-complement` | Defines `W^omega=(omega-flat)^{-1}(ann W)` and hence a linear subspace. | Works for `W=0,V`; no choice. Definition/render check pending. |
| `prop-symplectic-double-orthogonal-and-dimension-identities` | Transport annihilator dimension through `omega-flat`; inclusion `W subset (W^omega)^omega` plus equal dimensions gives equality. | Checks `W=0,V`; no choice. Precheck pass after canonical final-phase repair; render pending. |
| `def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces` | Literal inclusion/equality definitions; symplectic means zero intersection with the orthogonal. | Zero subspace allowed; no choice. Definition/render check pending. |
| `thm-equivalent-characterizations-of-lagrangian-subspaces` | Proves equivalence of self-orthogonal, isotropic dimension `n`, coisotropic dimension `n`, and maximal isotropic; maximality is handled by adjoining a vector from `L^omega\\L`. | Covers `n=0`; both directions and maximality explicit; no choice. Precheck pass after removing an orphan strategy tag; render pending. |
| `prop-symplectic-reduction-of-a-coisotropic-vector-subspace` | Defines the quotient form; checks representatives and identifies its radical with the zero coset. | Includes `W=V` and Lagrangian `W`; no choice. Precheck pass after canonical final-phase repair; render pending. |
| `prop-graphs-of-linear-maps-and-lagrangian-relations` | Restriction of `-omega_V plus omega_W` to graph is `A^*omega_W-omega_V`; Lagrangianity forces equal dimensions and hence a symplectic isomorphism, with the converse verified. | Zero spaces included; both iff directions explicit; no choice. Precheck pass after canonical final-phase repair; render pending. |
| `def-symplectic-form-and-symplectic-manifold` | Smooth closed two-form with pointwise `omega-flat` isomorphism; includes dimension zero. | Closedness is not inferred from nondegeneracy; no choice. Definition/render check pending. |
| `thm-nondegeneracy-is-equivalent-to-a-nonvanishing-top-wedge` | Normal form computes `omega^n`; conversely a radical vector annihilates the top form, contradicting injectivity of contraction by a nonzero top covector. | Proves both directions and `n=0`; no choice. Precheck pass after canonical final-phase repair; render pending. |
| `cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form` | The nowhere-zero `omega^n/n!` selects a smooth positive determinant ray and defines symplectic volume. | Includes `n=0`; no choice. Check pending. |
| `def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding` | Defines the three map classes by the appropriate map condition plus exact pullback equality. | Empty-source and zero-dimensional cases harmless; no choice. Check pending. |
| `prop-products-and-opposites-of-symplectic-manifolds` | Uses pullback--`d` commutation for closedness and tangent-product splitting for nondegeneracy. | Adds missing direct dependency `thm-the-exterior-derivative-commutes-with-pullback`; zero-dimensional factors covered. Check pending. |
| `def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds` | Applies the four linear notions to every tangent space of an embedded submanifold. | Constant dimension is explicit; no choice. Check pending. |
| `prop-lagrangian-submanifolds-have-half-dimension` | Applies the linear Lagrangian dimension theorem at one tangent space and constant dimension propagates it. | Includes zero dimension; no choice. Check pending. |
| `def-tautological-one-form-on-a-cotangent-bundle` | Under `AC_omega`, defines `lambda_(q,p)(xi)=p(d pi xi)` and `omega_can=-d lambda`. | Adds `def-countable-choice` because its published cotangent-bundle supplier assumes it. Check pending. |
| `lem-the-tautological-one-form-is-intrinsic-and-smooth` | Projection/evaluation is coordinate-free; cotangent coordinates give `lambda=sum p_i dq^i`. | Propagates exact `AC_omega` supplier assumption. Check pending. |
| `thm-the-canonical-cotangent-two-form-is-symplectic` | Computes `-d lambda=sum dq^i wedge dp_i`; `d^2=0` and contraction prove symplecticity. | Propagates `AC_omega`; includes rank zero. Check pending. |
| `prop-cotangent-lifts-are-symplectomorphisms` | Defines inverse-transpose lift, proves commuting projection identity, preserves `lambda`, then differentiates. | Adds missing pullback--`d` dependency and propagates `AC_omega`; inverse direction explicit. Check pending. |
| `prop-graph-of-a-one-form-is-lagrangian-iff-the-one-form-is-closed` | Pullback by graph gives `s_alpha^*lambda=alpha` and `s_alpha^*omega=-d alpha`; half dimension converts isotropy to Lagrangianity. | Adds missing pullback--`d` and linear Lagrangian dependencies; propagates `AC_omega`; both iff cases explicit. Check pending. |
| `def-compatible-complex-structure-on-a-symplectic-vector-space` | Defines $J^2=-I$ and compatibility by positivity and symmetry of $g_J=\omega(\cdot,J\cdot)$; records preservation identities. | Includes rank zero; no choice. Rendercheck pass. |
| `thm-compatible-complex-structures-exist-on-symplectic-vector-spaces` | From an arbitrary inner product constructs the skew-adjoint $A$, $P=(-A^2)^{1/2}$, and $J=AP^{-1}$; the spectral decomposition of $-A^2$ proves $A$ commutes with $P$. | Includes rank zero; no choice. Precheck/rendercheck pass after canonical phase repair. |
| `lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots` | Fibrewise roots are smooth by the parametrized IFT; $D(R\mapsto R^2)_S(H)=SH+HS$ is invertible because its eigenvalues are $s_i+s_j>0$. | Adds missing direct dependency `thm-parametrized-implicit-function-theorem-with-higher-regularity`; rank zero included; precheck/rendercheck pass. |
| `thm-every-symplectic-manifold-admits-a-compatible-almost-complex-structure` | Under `AC_omega`, choose a Riemannian metric and apply the smooth polar construction fibrewise. | Choice is spent exactly through Riemannian-metric existence; empty/rank-zero cases explicit; precheck/rendercheck pass after canonical phase repair. |
| `def-compatible-almost-kahler-metric` | Defines the almost-Kähler metric $g_J=\omega(\cdot,J\cdot)$ and explicitly does not assume integrability. | Replaces the manifest's theorem dependency by the actual definition dependency; rendercheck pass. |
| `rem-compatible-almost-complex-structures-and-kahler-geometry` | Distinguishes almost-Kähler compatibility from Kähler integrability and records the metric/form/complex-structure identities. | No proof or choice claim; rendercheck pass. |

Validation update: explicit-path precheck and rendercheck pass for items 1--26;
the stale word "pending" in rows 1--20 is superseded by this observed result.

### Symplectic items 27--59

Source abbreviations below are exact locators copied into the item
frontmatter: **C7--C9** = Cannas da Silva, Lectures 7--9, pp. 43--55;
**M5** = Meinrenken, ``5.1--5.3, pp. 56--65. All rows passed explicit-path
precheck where proof-bearing and rendercheck.

| Item | Claim, dependencies, and proof spine | Boundary / source / check |
| --- | --- | --- |
| `lem-moser-pullback-differentiation-equation` | Pullback differentiation plus Cartan gives the Moser equation. Deps: `def-countable-choice`, pulled-back-form differentiation, Cartan. | Propagates the time-dependent-flow supplier's `AC_omega`; local flow domain explicit. C7/M5; pass. |
| `lem-smooth-parametric-primitives-for-a-smooth-exact-family-on-a-compact-manifold` | Under `AC_omega`, a finite strongly-convex good cover, fixed local homotopies, finite Čech descent, and a fixed finite-dimensional solver give one linear right inverse to `d` on exact forms, preserving parameter smoothness. Deps: countable choice, Riemannian-metric existence, geodesically-convex-neighbourhood theorem, compact-set bump, de Rham homotopy. | Corrects the scaffold's omitted choice edge: the exact published convex-neighbourhood supplier assumes `AC_omega`. Empty case included; all later selections finite. C7 plus DG-20 supplier; pass. |
| `thm-moser-stability-theorem` | Constant cohomology gives the exact family `dot omega_t`; the preceding lemma chooses smooth primitives, nondegeneracy solves the Moser field, and compactness supplies full-time flow. Deps: countable choice, items 27--28, time-dependent flow theorem. | Compactness and all-time interval explicit; `AC_omega` propagated. C7/M5; pass. |
| `thm-compact-support-moser-stability-on-a-noncompact-manifold` | A uniformly compactly supported primitive produces a compactly supported Moser field and hence global evolution on `[0,1]`. Deps: countable choice, item 27, compact-support evolution theorem. | Does not infer compact support from cohomology; possibly noncompact `M`; pass. C7/M5. |
| `lem-relative-poincare-primitive-near-a-submanifold` | Tubular radial homotopy turns a closed tensor-vanishing family into primitives whose first jets vanish along the closed submanifold. Deps: countable choice, tubular theorem, de Rham homotopy. | Tensor vanishing, not merely tangential pullback, is required; `O(|v|^2)` proves the first-jet clause. M5; pass. |
| `thm-relative-moser-theorem` | Apply item 31 to `omega_1-omega_0`, solve the Moser field, and use its vanishing first jet so the flow fixes `S` and has identity derivative there. Deps: countable choice, items 27/31, time-dependent flow theorem. | Closed embedded `S`, fibrewise agreement along all of `TM|S`, and nondegenerate interpolation are explicit. M5; pass. |
| `thm-darboux-theorem` | Linear normal form matches `omega_p` to the standard form; relative Moser corrects the two germs. Deps: relative Moser, alternating-form normal form. | `AC_omega` inherited; rank zero included; local only. C8/M5; pass. |
| `cor-symplectic-manifolds-have-no-local-invariants-beyond-dimension` | Compose two Darboux charts to match pointed germs of equal dimension. Dep: Darboux. | Local neighbourhoods only; `AC_omega`; pass. |
| `def-symplectic-normal-bundle-of-a-symplectic-submanifold` | Defines `(TS)^omega`, with its restricted symplectic form, and identifies it with the quotient normal bundle. Deps: submanifold notions and symplectic orthogonal. | Supplied symplectic embedded submanifold; no choice. M5; pass. |
| `thm-symplectic-neighborhood-theorem` | A prescribed symplectic normal-bundle map plus `df` gives a symplectic map on ambient tangent bundles; tubular extension and relative Moser produce the germ symplectomorphism with prescribed first derivative. Deps: countable choice, item 35, tubular theorem, relative Moser. | Both submanifolds closed; derivative matching retained by the first-jet primitive. M5, Thm. 5.12 specialization; pass. |
| `def-canonical-symplectic-model-near-the-zero-section-of-t-star-l` | Defines the zero-section germ of `(T*L,-d lambda)`. Deps: countable choice and canonical cotangent theorem. | Explicit `AC_omega` and sign; pass. |
| `thm-weinstein-lagrangian-neighborhood-theorem` | Compatible `J` gives a Lagrangian complement and the symplectic identification `TM|L ≅ TL⊕T*L`; tubular extension plus relative Moser gives a zero-section-fixing symplectomorphism. Deps: countable choice, item 37, compatible-`J` existence, tubular theorem, relative Moser. | Replaces invalid scaffold reduction to the symplectic-submanifold theorem: a Lagrangian is not a symplectic submanifold except in dimension zero. Closed embedding and `AC_omega` explicit. M5, Thm. 5.14; pass. |
| `prop-lagrangian-neighborhood-germ-is-not-canonical` | On `T*R`, the shear `F(q,p)=(q+p,p)` is a nonidentity symplectomorphism fixing the zero section pointwise; conjugating its germ by a Weinstein chart proves nonuniqueness whenever the Lagrangian has positive dimension. Dep: item 38. | The zero-dimensional exception is separated; existence does not imply uniqueness. Direct pullback calculation; M5 context; pass. |
| `prop-characteristic-distribution-of-a-coisotropic-submanifold-is-involutive` | Constant-rank kernel equals `(TC)^omega`; closedness and Cartan show brackets remain in the kernel. Deps: coisotropic-submanifold definition, Cartan. | Smoothness/rank proved pointwise; no integrability assumed. M5; pass. |
| `thm-local-normal-form-near-a-coisotropic-submanifold` | Restricted-form equality identifies characteristic distributions. Choose `E` complementary to the kernel in `TC`, put `S=E^omega`, choose a complement `G` to the Lagrangian `K` in `S`, and correct `G` by an explicit graph map so it becomes Lagrangian. The resulting dual pairing extends `df` to a symplectic ambient bundle map; tubular extension and relative Moser identify germs. Deps: countable choice, item 40, smooth bundle-complement corollary, Frobenius, tubular theorem, relative primitive/Moser. | Repairs the impossible scaffold instruction to complement `K` inside `(TC)^omega=K`. Closed embeddings and `AC_omega`; characteristic foliation is derived, not additional data. M5, Thm. 5.18/Cor. 5.19; pass. |
| `fs-every-nondegenerate-two-form-is-symplectic` | Refuted by the explicit nonclosed nondegenerate four-dimensional form supplied on the B page. Dep: symplectic definition. | Closedness is independent. C1; pass. |
| `fs-symplectic-manifolds-can-have-odd-dimension` | Pointwise even-dimension theorem refutes the claim. Dep: item 2. | Empty manifold caveat stated; pass. |
| `fs-every-half-dimensional-submanifold-is-lagrangian` | A half-dimensional plane with nonzero restricted standard form refutes the claim. Dep: submanifold definition. | Dimension alone does not imply isotropy; pass. |
| `fs-the-canonical-cotangent-symplectic-form-is-d-lambda-under-the-library-convention` | Refuted directly by the fixed definition `omega_can=-d lambda`. Deps: countable choice and tautological definition. | Exact sign and `AC_omega`; pass. |
| `fs-cohomologous-symplectic-forms-on-a-noncompact-manifold-are-always-isotopic` | Standard area and finite-total-area Gaussian area on `R^2` are exact but cannot be symplectomorphic because total area differs. Deps: compact and compact-support Moser statements. | Shows the missing support/end-control hypothesis; no incomplete Moser strategy claimed. C7/M5; pass. |
| `fs-darboux-theorem-makes-all-symplectic-manifolds-globally-symplectomorphic` | `R^2` and `S^2` are locally Darboux-equivalent but not diffeomorphic, so not globally symplectomorphic. Dep: Darboux. | Local/global distinction exact; pass. |
| `ex-the-standard-symplectic-vector-space` | Contraction with `sum dq^i wedge dp_i` has zero kernel. Dep: symplectic-vector-space definition. | Includes `n=0`; C1; pass. |
| `ex-isotropic-coisotropic-and-lagrangian-coordinate-subspaces` | Direct orthogonal calculations in standard `R^4` exhibit all four types. Dep: subspace definitions. | Boundary dimensions explicit; C1; pass. |
| `ex-the-cotangent-bundle-of-a-circle-as-a-symplectic-cylinder` | Computes `lambda=p dtheta` and `omega=dtheta wedge dp` on `S1×R`. Deps: countable choice, canonical cotangent theorem. | Sign and global periodic coordinate handled; `AC_omega`; C2; pass. |
| `ex-graphs-of-exact-and-closed-one-forms-as-lagrangians` | Applies the graph criterion to `df` and to a nonexact closed angular form on `S1`. Deps: countable choice and graph theorem. | Separates closed from exact; `AC_omega`; C2; pass. |
| `ex-product-and-opposite-symplectic-manifolds` | Pullback of `-omega⊕omega` to the diagonal is zero and dimension is half. Deps: product/opposite proposition and Lagrangian dimension. | Empty/zero dimension harmless; C1; pass. |
| `ex-a-compatible-complex-structure-on-standard-symplectic-space` | For `J(q,p)=(-p,q)`, direct calculation gives `J²=-1` and `omega(u,Ju)=|u|²`. Dep: compatible-complex definition. | All dimensions including zero; C2; pass. |
| `ex-moser-isotopy-for-area-forms-on-a-compact-surface` | Equal integrals identify top de Rham classes; convex interpolation stays positive; Moser gives an isotopy. Deps: countable choice, compact Moser, top compact-support integration isomorphism. | Nonempty compact connected oriented boundaryless surface; C7; pass. |
| `ex-darboux-coordinates-for-a-nonconstant-area-form` | `Q=x`, `P=integral f(x,s)ds` gives `dQ wedge dP=f dx wedge dy`; inverse function theorem gives local coordinates. Dep: Darboux theorem. | Requires `f>0`; lower limit fixed; C8; pass. |
| `ex-the-zero-section-and-cotangent-fibres-as-lagrangians` | Canonical coordinate restrictions vanish and both have half dimension. Deps: countable choice, cotangent theorem, Lagrangian dimension. | Both zero section and every fibre; `AC_omega`; C2; pass. |
| `cex-a-nondegenerate-nonclosed-two-form-in-dimension-at-least-four` | `eta=dx1∧dy1+e^{x1}dx2∧dy2` has nonzero square but nonzero derivative. Dep: symplectic definition. | Products extend to all even dimensions at least four. C1; pass. |
| `cex-cohomology-class-obstructs-a-global-symplectomorphism` | `(S2,omega)` and `(S2,2omega)` have unequal total symplectic area, contradicting pullback integration under any symplectomorphism. Deps: symplectomorphism definition and top integration isomorphism. | Orientation sign controlled by symplectic pullback. C7; pass. |
| `cex-a-compatible-almost-complex-structure-that-is-not-integrable` | A symplectic conjugate of standard `J` depending on `x2` stays compatible; explicit brackets give `N_J(partial_x1,partial_x2)=2 partial_x1`. Deps: Kähler remark and compatible definition. | Four-dimensional explicit witness; integrability is genuinely absent. M2; pass. |

Symplectic pair checkpoint: 59/59 item files and both page files authored;
explicit-path precheck passed on all 47 proof-bearing items, and rendercheck
passed on all 59 items and both pages.

Next item at that checkpoint: `def-symplectic-vector-field`.

## Hamiltonian item checkpoints

Source abbreviations: **C18** = Cannas Lecture 18, pp. 105--111;
**C19** = Lecture 19, pp. 113--120; **Me6** = Meinrenken ``6.1--6.3,
pp. 66--75; **MBE** = Martynchuk--Broer--Efstathiou, Theorem 2.7 and
`3.1, PDF pp. 5--11. Every proof-bearing row passed precheck and every row
passed rendercheck.

| Item | Claim, dependencies, and proof spine | Boundary / source / check |
| --- | --- | --- |
| `def-symplectic-vector-field` | Defines `L_X omega=0`. Dep: symplectic-manifold definition. | Flow need not be complete; C18; pass. |
| `prop-a-vector-field-is-symplectic-iff-iota-x-omega-is-closed` | Cartan reduces `L_X omega` to `d iota_X omega`. Deps: preceding definition, Cartan. | Both directions; C18; pass. |
| `def-hamiltonian-vector-field-and-hamiltonian-function` | Fixes `iota_XH omega=dH` and distinguishes functions from fields. Dep: symplectic definition. | No completeness; constants/components explicit; C18; pass. |
| `thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions` | Invert `omega-flat` pointwise and use its smooth bundle inverse. Dep: Hamiltonian definition. | Empty/rank-zero cases included; C18; pass. |
| `prop-hamiltonian-vector-fields-are-symplectic-and-symplectic-fields-are-locally-hamiltonian` | Exact implies closed; Poincaré lemma supplies local primitives. Deps: item 2 and star-shaped Poincaré lemma. | Local converse only; C18; pass. |
| `prop-hamiltonians-for-a-fixed-vector-field-differ-by-a-locally-constant-function` | Equality of differentials is equivalent to componentwise constant difference. Dep: Hamiltonian definition. | Disconnected case explicit; C18; pass. |
| `thm-symplectic-vector-fields-modulo-hamiltonian-vector-fields-are-first-de-rham-cohomology` | `omega-flat` identifies symplectic fields with closed forms and Hamiltonian fields with exact forms, then quotient. Deps: items 2/3. | Vector-space quotient, all components; C18; pass. |
| `thm-hamiltonian-flows-preserve-the-symplectic-form` | Vanishing Lie derivative is equivalent to invariance on the local flow domain. Deps: item 2 and tensor-flow invariance theorem. | Explicitly no completeness; C18; pass. |
| `prop-a-hamiltonian-is-conserved-along-its-own-flow` | `dH(X_H)=omega(X_H,X_H)=0`. Dep: Hamiltonian definition. | Every connected maximal time interval; C18; pass. |
| `def-poisson-bracket-on-a-symplectic-manifold` | Defines `{F,G}=omega(X_F,X_G)=X_G(F)=-X_F(G)`. Dep: Hamiltonian existence. | Library sign fixed; C18; pass. |
| `prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry` | Linearity of `H↦X_H`, alternating `omega`, and vector-field Leibniz prove the identities. Dep: bracket definition. | Both entries; C18; pass. |
| `thm-hamiltonian-vector-field-map-is-a-lie-antihomomorphism` | Cartan computes `iota_[XF,XG] omega=-d{F,G}`. Deps: bracket, item 2, Cartan. | Sign checked against fixed convention; C18; pass. |
| `thm-poisson-bracket-satisfies-the-jacobi-identity` | Apply the antihomomorphism identity and vector-field commutator action; cyclic terms cancel. Deps: bracket algebra and item 12. | Full cyclic identity; C18; pass. |
| `thm-smooth-functions-form-a-poisson-algebra` | Packages commutative multiplication, Lie bracket, and Leibniz. Deps: items 11/13. | No extra assumptions; C18; pass. |
| `prop-observable-evolution-equation` | Chain rule gives `d/dt F(gamma) = X_HF={F,H}`. Dep: bracket definition. | Local trajectories sufficient; C18; pass. |
| `def-first-integral-and-poisson-commuting-functions` | Defines first integrals along maximal curves and involution. Dep: bracket. | No completeness presumed; C18; pass. |
| `prop-f-is-a-first-integral-of-h-iff-f-and-h-poisson-commute` | Use the evolution equation in both directions, including evaluation at time zero. Deps: items 15/16. | All points/maximal curves; C18; pass. |
| `thm-hamiltonian-flows-commute-iff-their-hamiltonians-poisson-commute-up-to-locally-constant-bracket` | Local flows commute iff field bracket vanishes; antihomomorphism and Hamiltonian uniqueness identify this with locally constant `{F,G}`. Deps: item 12, local-flow commutation, item 6. | Zero bracket is sufficient but not necessary on disconnected manifolds; C18; pass. |
| `thm-hamilton-equations-in-canonical-cotangent-coordinates` | Contract a general vector field with `sum dq wedge dp` and compare with `dH`. Deps: countable choice, canonical cotangent theorem, Hamiltonian definition. | Propagates `AC_omega`; C18 `18.2; pass. |
| `prop-coordinate-formula-for-the-poisson-bracket` | Apply `X_G` from Hamilton equations to `F`. Deps: countable choice, item 19, bracket definition. | Library sign explicit; `AC_omega`; C18; pass. |
| `prop-cotangent-lift-of-a-vector-field-is-hamiltonian` | Differentiate the inverse-transpose lift and verify contraction equals `d[p(Y)]`. Deps: countable choice, cotangent-lift theorem, Hamiltonian definition. | Local base flow sufficient; `AC_omega`; C18 p.106; pass. |
| `def-time-dependent-hamiltonian-vector-field-and-flow` | Defines slices `X_{H_t}` and their evolution operator. Deps: countable choice, published time-dependent-field definition, Hamiltonian existence. | Propagates supplier's `AC_omega`; domains explicit; pass. |
| `prop-time-dependent-hamiltonian-evolution-is-symplectic` | Pullback differentiation and `d²H_t=0` give constant pulled-back form. Deps: countable choice, item 22, pullback differentiation. | Every defined time slice; `AC_omega`; pass. |
| `def-canonical-transformation` | Defines canonical transformations as (local) symplectomorphisms. Dep: symplectomorphism definition. | No Hamiltonian-generation claim; C18; pass. |
| `thm-liouville-volume-preservation` | Wedge the flow identity to obtain preservation of `omega^n/n!`. Deps: canonical volume and Hamiltonian-flow preservation. | Local domains; C18; pass. |
| `cor-hamiltonian-flow-has-zero-divergence-with-respect-to-symplectic-volume` | Differentiate volume preservation at zero. Deps: item 25 and divergence definition. | Includes dimension zero; pass. |
| `def-liouville-vector-field-on-an-exact-symplectic-manifold` | For `omega=dalpha`, defines `iota_Z omega=alpha` and derives `L_Z omega=omega`. Deps: symplectic definition, Cartan. | Primitive-dependent; no completeness. pass. |
| `prop-canonical-liouville-vector-field-on-a-cotangent-bundle-is-radial-in-momenta` | Since `omega_can=d(-lambda)`, solve `iota_Z omega_can=-lambda` to get `sum p_i partial_pi`. Deps: countable choice, item 27, tautological definition. | Sign checked; `AC_omega`; pass. |
| `cor-poincare-recurrence-for-finite-volume-hamiltonian-invariant-regions` | Apply discrete recurrence to a nonzero time map preserving finite symplectic measure. Deps: Liouville volume and published recurrence theorem. | Invariant measurable finite-volume region; iterates defined; almost every point, not every point. pass. |
| `def-lagrangian-action-functional-on-curves` | Defines `S_L(q)=integral L(q,dot q)dt` on fixed-endpoint piecewise-`C1` curves and admissible variations. | No deps; endpoints and regularity explicit. C19; pass. |
| `thm-euler-lagrange-equations` | Differentiate the action, integrate by parts, and use compactly supported coordinate variations for the converse. Deps: action definition and integration by parts. | `C2` curves, fixed endpoints; all chart intervals. C19; pass. |
| `def-fibre-derivative-and-legendre-transform-of-a-lagrangian` | Defines `FL(q,v)(w)=d/ds L(q,v+sw)|0` and coordinates `p=L_v`. | No deps; coordinate independence encoded fibrewise. C19; pass. |
| `def-regular-and-hyperregular-lagrangian` | Regular means nonsingular fibre Hessian/local diffeomorphism; hyperregular means global fibre diffeomorphism. Dep: item 32. | Local invertibility distinguished from global bijectivity. C19; pass. |
| `def-energy-and-hamiltonian-of-a-hyperregular-lagrangian` | Defines `E_L=p(v)-L` and `H=E_L∘(FL)^{-1}`. Dep: item 33. | Hyperregularity is what makes `H` global. C19; pass. |
| `thm-equivalence-of-euler-lagrange-and-hamilton-equations-for-hyperregular-lagrangians` | Differentiate `H=pv-L`; cancellation gives `H_p=v`, `H_q=-L_q`, proving both trajectory directions. Deps: countable choice, Euler–Lagrange, energy/Hamiltonian definition, Hamilton equations. | Corrected to state `AC_omega`, inherited from its exact Hamilton-equation supplier. C19; pass. |
| `prop-natural-mechanical-lagrangian-gives-kinetic-plus-potential-hamiltonian` | Fibre derivative is `g-flat`; invert and compute `E_L` to obtain `H=1/2 g^{-1}(p,p)+V`. Dep: item 34. | Supplied positive metric; no metric-existence choice. C19; pass. |
| `def-completely-integrable-hamiltonian-system` | Requires `n` pairwise commuting integrals whose differentials are independent on a dense open subset; the rank-`n` set is defined as the regular locus and is therefore open as well as dense. Dep: first-integral definition. | Involution and independence are separate requirements; C18/Me6; pass. |
| `prop-regular-common-level-sets-are-lagrangian-submanifolds` | Regular-level theorem gives dimension/kernel; Hamiltonian fields lie in and span the kernel, whose pairings vanish. Deps: item 37, Lagrangian-submanifold definition, regular-level and tangent-kernel theorems. | Nonempty regular fibre; C18/Me6; pass. |
| `prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action` | Commuting local flows define the local action; compactness makes restricted fields complete and the fibre action global. Deps: items 18/38 and published flow-commutation theorem. | Local without compactness, global only on compact fibre. C18/Me6; pass. |
| `lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice` | Compactness makes each restricted Hamiltonian vector field complete, so their commuting flows give a global `R^n`-action. Orbits are open, hence connectedness gives transitivity; compact quotient forces the discrete stabilizer to span, uniform separation makes the fundamental-parallelepiped intersection finite, and finitely-generated-abelian classification gives a rank-`n` lattice. Deps: items 38/39, the published compact-manifold completeness corollary, and published finitely-generated-abelian classification. | Records rather than assumes the completeness step required by owner direction; compact/connected/nonempty explicit. Me6 Prop. 6.10; pass. |
| `thm-compact-connected-regular-fibres-are-tori` | Choose a lattice basis to identify `R^n/Gamma` with `R^n/Z^n`. Dep: item 40. | Diffeomorphism, not canonical identification; C18/Me6; pass. |
| `def-action-and-angle-coordinates` | Defines period-one angles with `omega=sum dtheta_i wedge dI_i`. Dep: symplectic definition. | Sign is corrected to match `iota_XH omega=dH` and positive angular velocity; Me6 convention translated as a unit; pass. |
| `thm-liouville-arnold-action-angle-theorem` | After shrinking to a relatively compact regular-value ball, properness makes all nearby fibres compact and their vertical Hamiltonian fields complete. A local section and the cotangent action produce the period-lattice covering. Continued central periods generate every nearby lattice: an extra period can be reduced into the varying compact fundamental parallelepiped; a convergent subsequence and subtraction of the corresponding central sheet would yield nonzero periods tending to zero, contradicting uniform local injectivity of the action near zero. Cartan makes the period one-forms closed, Poincaré produces actions, a translated local section becomes Lagrangian, and the action map yields the stated symplectic coordinates. Deps: complete-integrability, torus theorem, item 42, compact-manifold completeness, submersion normal form, Cartan, Poincaré, smooth inverse-function theorem. | Implements the owner-required full-lattice argument rather than merely asserting smoothness of the lattice. Compact connected regular fibre plus an explicit locally proper saturated fibration; no global chart and no added choice. C18 Thm. 18.12/Me6 Thm. 6.21; pass. |
| `cor-motion-of-a-completely-integrable-hamiltonian-is-linear-on-invariant-tori` | Direct contraction with `sum dtheta wedge dI` gives `dot I=0`, `dot theta=grad h`. Deps: item 43 and Hamiltonian definition. | Avoids the cotangent theorem's unrelated choice assumption; period one explicit. Me6; pass. |
| `prop-period-lattice-monodromy-obstructs-global-action-angle-coordinates` | Overlap bases differ by `GL(n,Z)`; a global angle labelling would trivialize their monodromy. Dep: item 43. | Trivial monodromy is necessary, not sufficient; Me6 §6.2; pass. |
| `fs-every-symplectic-vector-field-has-a-global-hamiltonian-function` | Torus translation has contraction `dy` with nonzero period. Dep: item 7. | Global cohomology obstruction; C18; pass. |
| `fs-hamiltonian-functions-for-one-vector-field-differ-by-one-global-constant-on-a-disconnected-manifold` | A function taking different constants on two components has zero field but is not one global constant. Dep: item 6. | Locally constant is exact conclusion; pass. |
| `fs-h-to-x-h-is-a-lie-homomorphism-under-the-library-poisson-convention` | On `R2`, `F=q²/2`, `G=p²/2` have `{F,G}=qp` with nonzero field, so the minus sign in item 12 is real. Dep: item 12. | Coordinate calculation done directly, avoiding cotangent choice leakage. C18; pass. |
| `fs-hamiltonian-flows-are-complete-on-every-symplectic-manifold` | `H=q²p` has solution `q=1/(1-t), p=0` from `(1,0)`, blowing up at time one. Deps: flow preservation and Hamiltonian definition. | Smooth field on noncompact `R2`; direct contraction avoids choice leakage. C18; pass. |
| `fs-n-independent-first-integrals-automatically-form-a-completely-integrable-system` | For zero Hamiltonian on `R4`, `q1,p1` are independent first integrals but bracket to one. Deps: item 37 and bracket/Hamiltonian definitions. | Shows independence does not imply involution; direct computation. C18; pass. |
| `fs-liouville-arnold-gives-global-action-angle-coordinates-on-the-entire-manifold` | Spherical-pendulum monodromy refutes globalization while local charts persist. Deps: items 43/45. | Singular fibres and global monodromy outside local theorem. Me6/MBE; pass. |
| `ex-free-particle-hamiltonian-flow` | Solve `dot q=p/m`, `dot p=0`. Deps: countable choice and Hamilton equations. | `m>0`, all real time; `AC_omega`; C18; pass. |
| `ex-harmonic-oscillator-and-elliptic-phase-curves` | Solve the linear system, verify period `2pi/Omega`, energy ellipses, and zero equilibrium. Deps: countable choice and Hamilton equations. | `m,Omega>0`; `AC_omega`; C18; pass. |
| `ex-simple-pendulum-phase-portrait` | Analyze `p²=2(E-1+cos q)` in exhaustive cases: oscillation, two rotation components, separatrix, equilibrium/empty levels. Deps: countable choice and Hamilton equations. | `q mod 2pi`; critical energy exactly two; C18/Homework 13 p.112; pass. |
| `ex-geodesic-flow-as-a-hamiltonian-flow-on-the-cotangent-bundle` | Kinetic Lagrangian has Legendre map `g-flat`; Euler–Lagrange is the Levi–Civita geodesic equation; hyperregular equivalence transfers trajectories. Deps: countable choice, natural-mechanical proposition, EL/Hamilton equivalence, fundamental theorem of Riemannian geometry. | No geodesic completeness asserted; `AC_omega`; C3/C19; pass. |
| `ex-angular-momentum-as-a-cotangent-lift-hamiltonian` | Insert `Y_a=a×q` into `p(Y)` and use the scalar triple product to obtain `a·(q×p)`. Deps: countable choice and cotangent-lift Hamiltonian proposition. | Euclidean covector identification explicit; C18/Lecture 22 pp.137--138; pass. |
| `ex-poisson-brackets-in-canonical-coordinates` | Substitute coordinate functions to get `{q,q}=0`, `{p,p}=0`, `{q^i,p_j}=delta^i_j`. Deps: countable choice and coordinate bracket formula. | Reverse bracket sign stated; `AC_omega`; C18; pass. |
| `ex-a-symplectic-nonhamiltonian-vector-field-on-the-two-torus` | `iota_partial_x(dx wedge dy)=dy`; its unit vertical circle period proves nonexactness. Dep: item 7. | Global quotient forms explicit; C18 p.106; pass. |
| `ex-legendre-transform-of-a-natural-mechanical-lagrangian` | Computes `p=g-flat(v)`, inverse `g-sharp`, energy and Hamiltonian. Dep: natural-mechanical proposition. | Supplied metric/potential; C19; pass. |
| `ex-action-angle-coordinates-for-the-harmonic-oscillator` | Elliptic polar substitution gives `dq wedge dp=dphi wedge dJ`, `J=H/Omega`; for period one, `theta=phi/(2pi)` and `I=2pi H/Omega`. Deps: action-angle definition and theorem. | Corrects scaffold normalization: `H/Omega` is the action only for a `2pi`-period radian angle. C18/Me6; pass. |
| `ex-spherical-pendulum-monodromy-obstructs-global-action-angle-coordinates` | For `H=|p|²/2+z`, `J=xp_y-yp_x`, import Takens's Chern jump and solid-torus gluing to get `[[1,1],[0,1]]`, then apply item 45. Dep: item 45. | Explicitly source-stated at the advanced index/gluing step; loop/basis reversal changes sign/conjugacy, not nontriviality. MBE exact locator; pass. |
| `cex-a-singular-common-level-need-not-be-a-torus` | Oscillator zero fibre is one point although the system is integrable on the dense regular locus. Dep: complete-integrability definition. | Shows regular-value hypothesis is essential. C18; pass. |
| `cex-poisson-commuting-functions-with-dependent-differentials-do-not-give-liouville-arnold-coordinates` | `F1=q1`, `F2=(q1)²` commute but have dependent differentials everywhere. Dep: complete-integrability definition. | Rank never reaches two; no Liouville–Arnold chart. C18; pass. |

Hamiltonian pair checkpoint: 63/63 item files and both page files authored;
explicit-path precheck passed on all 50 proof-bearing items, and rendercheck
passed on all 63 items and both pages.

Next item: none; owned authoring scope is complete.

## Proposed contract corrections and lead actions

- **Published choice propagation:**
  `ex-the-tangent-and-cotangent-bundles-as-vector-bundles` explicitly assumes
  `AC_omega`; therefore the authored cotangent items and their direct
  Hamiltonian/example consumers state it and depend on `def-countable-choice`.
  Likewise `def-time-dependent-vector-field-and-evolution-operator` explicitly
  assumes `AC_omega`, so the two owned time-dependent items propagate it. The
  owned Euler–Lagrange/Hamilton equivalence was also corrected to state the
  assumption inherited through the canonical Hamilton-equations supplier.
  No published file was edited.
- **Parametric primitive choice edge:** the manifest promised an entirely
  finite-choice construction via DG-20 convex neighbourhoods, but the exact
  published statement `thm-existence-of-geodesically-convex-neighborhoods`
  assumes `AC_omega`. The item now honestly assumes it, obtains one metric, and
  makes only finite choices thereafter. The lead must decide whether shared
  contracts should propagate this assumption or supply a choice-free compact
  good-cover theorem.
- **Action–angle scaffold sign defect:** the manifest wrote
  `omega=sum dI_i wedge dtheta_i` while simultaneously promising
  `dot theta=+partial h/partial I` under the fixed convention
  `iota_XH omega=dH`. These are incompatible: contraction gives the promised
  positive velocity for `omega=sum dtheta_i wedge dI_i`. The definition,
  theorem, corollary, oscillator example, and both page summaries use that
  corrected order. Meinrenken's displayed order belongs to his opposite flow
  convention and cannot be copied without translating the whole sign unit.
- **Weinstein scaffold proof defect:** the proposed reduction through the
  symplectic-submanifold neighbourhood theorem is invalid for a positive-
  dimensional Lagrangian, whose restricted form is zero. The authored proof
  instead builds the standard symplectic bundle identification from a
  compatible `J`, applies a tubular extension, and then relative Moser.
- **Added direct logical edges:** pullback/exterior-derivative commutation for
  products, cotangent lifts, and one-form graphs; the linear Lagrangian
  criterion for the graph theorem; parametrized IFT for smooth bundle square
  roots; finitely-generated-abelian classification for the full-lattice
  lemma; Cartan, Poincaré, and the smooth inverse-function theorem for the
  action–angle construction; and the EL/Hamilton equivalence for geodesic
  flow. `def-compatible-almost-kahler-metric` instead depends on the actual
  compatible-structure definition, not on the global existence theorem.
- **No open mathematical obligation is concealed.** The spherical-pendulum
  Chern jump and gluing are deliberately imported from MBE and marked as such;
  the local Liouville–Arnold theorem is not claimed to prove them. Shared
  manifest, coverage, proof-contract, choice, dependency, plan/prose, and
  Step-3b report updates remain for the group lead.

## Final mathematical audit amendment

- Rechecked the owner direction at
  `research/phase-2-next-21-owner-authoring-direction.md`, in particular its
  Batch-10 demand that action--angle Step 2.1 prove that the continued central
  periods generate the *full* nearby lattice. The authored theorem now gives
  the requested compact-parallelepiped/subsequence contradiction and the
  uniform zero-free neighbourhood supplied by local injectivity of the action.
- Rechecked the exact published prerequisites
  `cor-every-smooth-vector-field-on-a-compact-manifold-is-complete`,
  `cor-local-normal-form-for-submersions`, and
  `cor-every-vector-subbundle-has-a-smooth-complement`; the three audited
  proofs above now cite and use those statements directly.
- Corrected this handoff's earlier description of the noncanonical
  Lagrangian-neighbourhood germ: the actual authored witness is the shear
  `F(q,p)=(q+p,p)`, not a cotangent translation. The shear fixes the zero
  section pointwise and preserves `dq wedge dp` by direct calculation.
- Final validation below supersedes every earlier per-row word `pending`.
  Next item: none; all owned items and pages are authored.
- Final explicit-path validation: each of the four page arrays agrees exactly
  with its current batch-manifest row and order (47/12/51/12); precheck passes
  all 97 proof-bearing files among the 122 owned items; rendercheck passes all
  122 items and four pages; and the trailing-whitespace check passes all 127
  owned output paths, including this report.

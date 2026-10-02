# Step 3b — authoring log and handoff, pair `elliptic-functions-and-complex-tori`

- Run: `frontier-37-owner-30`, batch 27, pages 845–846 (`complex-analysis`).
- Dispatch labels: `step3b-pair-elliptic-functions-and-complex-tori-0b3cbc2e52b461e2`
  and the provider-recovery resume `step3b-pair-elliptic-functions-and-complex-tori-a0db9b79dc042904`.
- Scope carrier: `research/frontier-37-owner-30-batch-27.pages.json` (owner
  `proceed` on scope hash `19ef48c1…3b5`, receipt
  `research/frontier-37-owner-30-step3a-owner-elliptic-functions-and-complex-tori.json`,
  integrated report `research/frontier-37-owner-30-scope-repair-elliptic.md`).
- Step 3a review: `research/frontier-37-owner-30-step3a-pair-elliptic-functions-and-complex-tori.md`
  (insufficient before enrichment; the four enrichment items are now in the
  manifest and in this dispatch).
- `research/frontier-37-owner-30-pre-splice-plan-findings.json`: no finding for
  this pair (checked by item/page id).
- Provider-recovery owner direction
  `research/frontier-37-owner-30-owner-authoring-direction.md` exists (owner
  "I topped up, try again", 2026-09-30): resume using the CURRENT draft items
  and carriers, preserve completed valid work, finish missing arguments and
  carriers, and independently reconcile each actual supplier use. It is
  transport-only and supplies no proof acceptance or gate pass; it does not
  name this pair's items beyond "all original scaffold IDs require ordinary
  current audit receipts".

## Conventions fixed for the pair

- Lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ with oriented basis
  $\operatorname{Im}(\omega_2/\omega_1)>0$; $T_\Lambda=\mathbb C/\Lambda$.
- $\wp_\Lambda(z)=z^{-2}+\sum_{\omega\in\Lambda\setminus\{0\}}((z-\omega)^{-2}-\omega^{-2})$
  as a finite-subset (absolutely convergent) sum.
- $G_k=\sum_{\omega\ne0}\omega^{-k}$, $g_2=60G_4$, $g_3=140G_6$,
  $\Delta=g_2^3-27g_3^2$ (the cubic $4x^3-g_2x-g_3$ has discriminant
  $16\Delta$).
- $\zeta$ and $\sigma$ with the full-period quasi-periods
  $\eta_j=2\zeta(\omega_j/2)$: $\zeta(z+\omega_j)=\zeta(z)+\eta_j$ and
  $\sigma(z+\omega_j)=-e^{\eta_j(z+\omega_j/2)}\sigma(z)$, and
  $\eta_1\omega_2-\eta_2\omega_1=2\pi i$ (DLMF §23.2 half-period notation
  doubled).

## Item log (dependency-level order; one item at a time)

| # | level | item | state | notes |
|---:|---:|---|---|---|
| 1 | 0 | `def-complex-lattice-and-complex-torus` | authored | Definition + basis-change remark; `proof: not-applicable`; `precheck: n/a`. |
| 2 | 0 | `ex-rank-one-cotangent-uniformization` | authored (repaired) | Added in-run deps: `thm-chain-rule-for-complex-derivatives`, `thm-algebra-of-complex-derivatives`, `def-complex-exponential`, `thm-complex-exponential-addition-and-real-extension`, `thm-kernel-and-fibres-of-complex-exponential`, `thm-complex-exponential-surjects-onto-the-punctured-plane` (all published), plus the trigonometric/cotangent/Mittag-Leffler suppliers `def-complex-trigonometric-and-hyperbolic-functions`, `def-tangent-cotangent-secant-cosecant`, `cor-complex-trigonometric-and-hyperbolic-derivatives`, `thm-complex-sine-and-cosine-zero-sets`, `thm-mittag-leffler-expansion-of-pi-cotangent`. `precheck` pass. |
| 3 | 1 | `def-weierstrass-elliptic-p-function` | authored | Definition; `justified_by: thm-weierstrass-p-normal-convergence-and-periodicity`; `precheck` n/a (definition). |
| 4 | 1 | `thm-complex-torus-quotient-is-well-defined` | authored (repaired) | Full proof (uniform gap from the positive definite form, covering-space action, charts, Hausdorff, second countable, compact, holomorphic covering). Published deps: `lem-complex-conjugation-and-modulus-laws`, `def-complex-metric-convergence-and-continuity`, `thm-all-norms-on-rn-are-equivalent`, `thm-heine-borel-rn`, `thm-rational-points-and-boxes-in-rn`, `thm-complex-numbers-are-the-real-coordinate-plane`, `cor-independent-set-is-no-larger-than-a-finite-spanning-set`, `cor-convex-subsets-of-rn-are-contractible`, `cor-contractible-spaces-are-path-connected`, `thm-continuous-image-of-a-connected-space`, `def-homeomorphism-and-open-maps`, `thm-metric-hausdorff-separation`. Repaired in authoring: the B-example convexity supplier was replaced by the published `cor-convex-subsets-of-rn-are-contractible` and the unused B-leaf `ex-basic-riemann-surface-atlases` was dropped. `precheck` pass; `rendercheck` clean. |
| 5 | 1 | `ex-canonical-basis-of-complex-lattice` | authored (repaired) | Full existence/uniqueness of the reduced ratio plus stabiliser count 2/4/6; added published deps `lem-complex-conjugation-and-modulus-laws`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `lem-integer-part`. `precheck` pass. |
| 6 | 2 | `def-elliptic-function-for-a-lattice` | authored | Definition of Λ-elliptic meromorphic function and of the equivalent torus picture; `proof: not-applicable`; `precheck: n/a`. |
| 7 | 2 | `def-weierstrass-zeta-and-sigma-functions` | authored | Definitions of ζ and σ with the E₂ elementary factor; quasi-period claims deferred to `justified_by: thm-weierstrass-zeta-sigma-quasi-periodicity`; `precheck: n/a`. |
| 8 | 2 | `ex-oriented-lattice-bases-and-sl2z` | authored | Explicit bases (1,i), (1+i,i), (i,1) of Z+iZ with change-of-basis matrices and orientations; `precheck` pass after canonical-form repair; `rendercheck` clean. |
| 9 | 3 | `thm-elliptic-function-divisor-laws` | authored | Argument principle and residue theorem on the parallelogram; opposite-side cancellation by periodicity; index of the graph-bounded parallelogram (`lem-index-of-graph-bounded-region-boundary`); fundamental-domain correspondence for independence; Liouville for pole-free constancy; simple-pole residue for \(\ge2\) poles. 17 steps; `precheck` pass; `rendercheck` clean. |
| 10 | 3 | `thm-weierstrass-p-normal-convergence-and-periodicity` | authored | Uniform gap and lattice count, absolute/local-uniform convergence of the \(\wp\) net, termwise differentiation, double poles via holomorphic extension of \(\wp-(z-\lambda)^{-2}\), evenness by reindexing, path-connectedness of \(\mathbb C\setminus\Lambda\), periodicity via \(\wp'\) periodic + constant evaluated at \(-\omega_j/2\), oddness/ellipticity of \(\wp'\). `precheck` pass; `rendercheck` clean. |
| 11 | 4 | `lem-weierstrass-p-degree-two-and-half-periods` | authored (repaired) | Degree theorem on the proper map \(\bar\wp:T_\Lambda\to\hat{\mathbb C}\): chart \(1/\wp=z^2u(z)\) gives \(e_{[0]}=2\), so \(d=2\); evenness gives the fibre dichotomy; \(\wp'=0\) at half-periods via the even translate identity; the fibre over each \(e_j\) is the single class \([h_j]\) with index 2; zeros of \(\wp'\) are exactly the three half-period classes and are simple. Repaired: dropped the unused divisor-law/local-normal-form entries and the B-leaf `ex-basic-riemann-surface-atlases`; added the degree, compactness, second-countability and sphere suppliers (`thm-proper-holomorphic-map-riemann-surfaces-has-degree`, `thm-closed-subspace-of-a-compact-space-is-compact`, `thm-compact-subset-of-a-hausdorff-space-is-closed`, `thm-stereographic-projection-riemann-sphere-homeomorphism`, `cor-euclidean-spheres-are-path-connected`, `thm-rational-points-and-boxes-in-rn`, `prop-second-countability-is-hereditary`, `def-second-countable-space`, `def-topology-basis-subbasis`, `def-riemann-surface-and-holomorphic-atlas`), and wrote step 1.7 proving the Riemann sphere is a connected compact Riemann surface locally. `precheck` pass; `rendercheck` clean; `depcheck` no longer reports `b-leaf-content` for this item. |
| 12 | 4 | `thm-weierstrass-p-differential-equation` | authored | Gap/shell count for \(\sum|\omega|^{-3}\); uniform convergence of the corrected summands with \(r=\delta/2\); termwise derivatives via an enumeration; Laurent expansions of \(\wp,\wp'\) to order \(z^4\); the difference \((\wp')^2-4\wp^3+g_2\wp+g_3\) has vanishing principal terms, hence is a pole-free elliptic function and vanishes. Deps in file (15) include the removable-singularity, Taylor, locally-uniform-holomorphic-series, countability and conjugation-modulus suppliers; `precheck` pass; `rendercheck` clean. |
| 13 | 4 | `thm-weierstrass-zeta-sigma-quasi-periodicity` | authored | Uniform gap and disc finiteness; summability of \(\sum|\omega|^{-3}\) with tail control (from absolute convergence of the \(\wp\)-series at \(z=1\)); normal convergence of the corrected \(\zeta\)-series and of the \(E_2\)-product with the uniform lower bound on the product; entire correction \(E\) with \(\zeta=1/z+E\), simple residues \(1\), \(\zeta'=-\wp\), oddness by reindexing; simple lattice zeros of \(\sigma\), \(\sigma'(0)=1\), \(\sigma'/\sigma=\zeta\) via the cofinal exhaustion \(F_n=\{\omega:|\omega|\le n\}\) and the Weierstrass derivative theorem; \(\zeta\)-quasi-periodicity by the dense complement \(\lambda+\omega_1/k\); \(\sigma\)-quasi-periodicity from the entire zero-free quotient with \(H_j'/H_j=\eta_j\); Legendre relation by the residue theorem on the translated parallelogram with residue \(1\) at \(0\) and opposite-side cancellation. 36 deps. `precheck` pass; `rendercheck` clean after joining the two-line display in clause (3). |
| 14 | 4 | `ex-boundary-free-fundamental-parallelogram` | authored | Explicit shift \(a=(1+i)/4\): boundary points have real or imaginary part \(1/4\) or \(5/4\), never integral, so \(\wp\) has no pole there, while the unshifted \(P_0\) has the four lattice vertices on its boundary. For a nonzero elliptic \(f\): pole/zero sets closed and \(1\)-point-locally-finite, compact \(P_0\) gives finitely many classes \(Z=\cup_j(z_j+\Lambda)\); bad basepoints in a ball form a finite union of translated parallelogram boundaries, no finite union of which fills a ball, so an admissible translate exists. 11 deps. `precheck` pass; `rendercheck` clean after joining the display. |

| 15 | 5 | `thm-field-of-elliptic-functions-is-generated-by-p-and-p-prime` | authored (repaired) | Canonical single-line step form (7 steps, layers 1.1, 1.2, 2.1, 3.1, 4.1, 5.1, 6.1). Even/odd splitting as field operations; an even meromorphic function of a local coordinate is a function of its square (Laurent coefficients, Taylor at the killed pole); descent \(F(\wp(z))=h(z)\) well defined and meromorphic at generic values, at \(e_j\) (local normal form \(\eta_j=w r_j(w)\), biholomorphic) and at \(\infty\) (chart \(1/F(1/w)\), \(1/\wp=\eta_0(z^2)\)); rational via `thm-meromorphic-functions-riemann-sphere-are-rational` and continuity; odd case \(k/\wp'\) even elliptic (no half-period holomorphy needed); assembly and cubic relation. Deps repaired to 20 (added Taylor, pole-discreteness and isolated-singularity suppliers). `precheck` pass; `rendercheck` clean. |
| 16 | 5 | `thm-weierstrass-lattice-discriminant-is-nonzero` | authored (repaired) | 5 steps (1.1, 1.2, 2.1, 3.1, 4.1). Half-period values \(e_j\) are roots of \(4x^3-g_2x-g_3\) (evaluate the differential equation at \(h_j\), where \(\wp'(h_j)=0\)); distinctness from the degree-two lemma; \(\operatorname{Disc}(x^3-(g_2/4)x-(g_3/4))=\Delta/16\) by the root formula and the depressed-cubic formula, so \(\Delta\ne0\); smoothness in the Jacobian-rank sense in the two charts meeting the cubic: \(\{Z\ne0\}\) via \(\nabla f\ne0\) (no repeated root) and the unique point at infinity \(O=[0:1:0]\) in the chart \(\{Y\ne0\}\) via \(G_v(0,0)=1\) and the implicit function theorem. Repaired: the B-leaf dependency `ex-depressed-cubic-discriminant` was removed — step 2.1 derives \(\operatorname{Disc}(q)=-4P^3-27Q^2\) from the three distinct roots by coefficient comparison (\(u=e_1+e_2\), \(v=e_1e_2\)) instead of citing the leaf, and [F4](b) now cites the FTA factorization item `thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity`. Deps: 10 (dropped the unused divisor-law entry and the B leaf; kept the discriminant, polynomial-roots and projective-chart suppliers). `precheck` pass; `rendercheck` clean; `depcheck` no longer reports `b-leaf-content` for this item. |
| 17 | 5 | `thm-weierstrass-p-addition-formula` | authored (repaired) | 6 steps (1.1–6.1). Generic \(w\) with \(2w\notin\Lambda\); expansions \(\wp=z^{-2}+a_2z^2+O(z^4)\) (with \(a_0=0\) read off from the differential equation) and \(\wp'=-2z^{-3}+2a_2z+O(z^3)\); \(\Phi_w\) entire by removable singularities at \(\Lambda\), \(\pm w+\Lambda\) with explicit Laurent computations; Liouville and the limit at \(0\) force \(\Phi_w\equiv0\); meromorphic continuation in \(w\) over the dense open set; symmetry plus meromorphy in \(z\) gives all degenerate cases as a meromorphic identity. 21 deps completed during authoring to the suppliers actually used (Laurent expansion/coefficient, removable-singularity, Taylor, Liouville, isolated-zeros and pole-discreteness items among them). `precheck` pass; `rendercheck` clean. |
| 18 | 5 | `ex-sigma-simple-lattice-zero` | authored | Square lattice \(\Lambda=\mathbb Z+i\mathbb Z\), \(\omega_1=1\), \(\omega_2=i\). \(0,1\in\Lambda\) so \(\sigma(0)=0\) with \(\sigma'(0)=1\) and \(\zeta\) has residue \(1\) at both points; the sigma quasi-period law at \(z=0\) gives \(\sigma(1)=-\exp(\eta_1/2)\sigma(0)=0\), and differentiating that law at \(z=0\) gives \(\sigma'(1)=-\exp(\eta_1/2)\ne0\), so the zero at \(1\) is simple as well. Deps (7) are published/in-pair and earlier. `precheck` pass; `rendercheck` clean. |
| 19 | 6 | `ex-rectangular-weierstrass-function-and-elliptic-integral` | authored | 14 canonical steps in 7 layers. (1) \(\wp(\overline z)=\overline{\wp(z)}\), real locus \(=\) lines \(\operatorname{Re}\in\frac\alpha2\mathbb Z\), \(\operatorname{Im}\in\frac b2\mathbb Z\); (2) injectivity on the half-period rectangle \(S\), no poles/critical points; monotonicity along the four edges and the order \(e_2<e_3<e_1\) from second-order expansions at \(c_1,c_2\); (3) boundary image \(=\mathbb R\cup\{\infty\}\); (4) \(\wp(S^\circ)\) is exactly a half-plane and \(\wp|_S\) conformal; (5) inverse branch \(f'=(4\zeta^3-g_2\zeta-g_3)^{-1/2}\); (6) the four period integrals with positive roots as edge displacements. Jacobi clause: \(H\) is homologically simply connected, a normalized square root \(q\) of \((1-\zeta^2)(1-k^2\zeta^2)\) is built, all boundary signs at \(\pm1,\pm1/k\) are computed by a continuous-argument local analysis (values \(-i\sqrt{|P|}\), \(+i\sqrt{|P|}\), \(-\sqrt{P}\)), \(I_k(1/k)=K+iK'\), both tails \(\to iK'\), the argument principle gives \(I_k:H\to\operatorname{int}R\) biholomorphic, and iterated Schwarz reflection gives sn with periods \(4K,2iK'\). 27 deps. `precheck` pass (after adopting the canonical layer-renumbered form); `rendercheck` clean. |
| 20 | 6 | `thm-complex-torus-weierstrass-cubic-isomorphism` | authored (repaired) | 14 canonical steps in layers 1.1–7.1. Affine image on \(C_\Lambda\) via the differential equation; injectivity by the degree-two fibre dichotomy and the parity of \(\wp'\); surjectivity using that every finite value of \(\wp\) is attained and \(\wp'\mapsto\pm y\) switches by \(z\mapsto-z\); extension across \(z=0\) in the chart \(\{Y\ne0\}\) via \(\wp/\wp'=-z/2+O(z^3)\), \(1/\wp'=-z^3/2+O(z^7)\); local biholomorphy at \(O\) (\(G_v(0,0)=1\)) and at the three branch points (\(y\) a local parameter, \(\wp''(h_j)\ne0\)); inverse holomorphic from the local normal form. Repaired: dropped the unused A-page supplier `thm-local-normal-form-holomorphic-map-riemann-surfaces` from the declared set and removed the B-leaf citation `ex-nonsingular-algebraic-curve-charts`, replacing the chart input by the published `lem-nonsingular-complex-algebraic-curve-holomorphic-charts`; added the in-pair `def-ramification-index-and-branch-value` and the published projective-chart, biholomorphic-map, homeomorphism/open-map, second-countability/basis, holomorphic-inverse-function and convergence suppliers; newly written step 7.1 proves \(\Phi\) is a homeomorphism by locality plus bijectivity and derives compactness, connectedness, Hausdorff, second countability and the Riemann-surface structure of \(C_\Lambda\), with steps 5.1, 6.1 and 8.1 rewired to it. `precheck` pass; `rendercheck` clean; strict contract 0 errors for this item. |
| 21 | 6 | `ex-singular-cubic-degeneration` | authored (repaired) | \(g_2=3,g_3=1\): \(\Delta=27-27=0\); affine chart \(y^2=4x^3-3x-1\) with \(F(p)=0\) and \(dF(p)=0\) at \(p=(-1/2,0)\); factorisation \((x-1)(2x+1)^2\), shift \(s=x+1/2\), IFT unit \(u(s)^2=4s-6\), \(u(0)=i\sqrt6\ne0\) gives the two branch graphs \(y=\pm s\,u(s)\) crossing transversally, and the node germ is not a holomorphic graph in either coordinate, so \(p\) is not Jacobian-rank nonsingular; no lattice has \((g_2,g_3)=(3,1)\) by either the nonsingularity or the \(\Delta\ne0\) clause of the supplier. Terminal example: no in-pair item cites it. Published deps added: `lem-nonsingular-complex-algebraic-curve-holomorphic-charts`, `thm-holomorphic-implicit-function-theorem`, `def-projective-space-points`, `cor-complex-differentiability-implies-continuity`, `lem-complex-conjugation-and-modulus-laws`. Steps 1.1–1.4, 2.1, 3.1, 4.1, 5.1 (canonical numbering). `precheck` pass; `rendercheck` clean. |
| 22 | 6 | `ex-square-and-hexagonal-lattice-invariants` | authored (repaired) | Symmetry computation, no numerical invariant evaluated. Steps 1.1–5.1: \(\rho=e^{2\pi i/3}\) is a non-real unit root with \(\rho^{-2}=\rho^3\rho^{-2}=\rho\); scaling identity \(G_k(c\Lambda)=c^{-k}G_k(\Lambda)\) for \(c\ne0\) (finite-subset absolute convergence, reindexing by \(\omega\mapsto c\omega\)); \(i\Lambda_{\mathrm{sq}}=\Lambda_{\mathrm{sq}}\) gives \(G_6(\Lambda_{\mathrm{sq}})=i^{-6}G_6(\Lambda_{\mathrm{sq}})=G_6\), no constraint, then \(G_4=-G_4\) from \(i^{-4}=-1\), so \(g_3=140G_6=0\); \(\rho\Lambda_{\mathrm{hex}}=\Lambda_{\mathrm{hex}}\) gives \(G_4=\rho^{-4}G_4=\rho G_4\) with \(\rho\ne1\), so \(g_2=60G_4=0\); \(\Delta\ne0\) supplies \(g_2(\Lambda_{\mathrm{sq}})\ne0\) and \(g_3(\Lambda_{\mathrm{hex}})\ne0\). Deps added: exponential cartesian form, complex field, conjugation/modulus laws, real/imaginary parts, integer powers. `precheck` pass (canonical renumber adopted); `rendercheck` clean. |
| 23 | 6 | `ex-weierstrass-addition-and-duplication` | authored (repaired) | Steps 1.1–4.1: differentiate \((\wp')^2=4\wp^3-g_2\wp-g_3\) to get \(\wp''=6\wp^2-\tfrac12g_2\) on \(\mathbb C\setminus\Lambda\) (division points handled by continuity as in the parent identity); eliminate \(\wp'(z)^2\) and \(\wp''(z)\) in the addition formula at \(w=z\) to obtain the duplication formula \(\wp(2z)=-2\wp(z)+\tfrac14\bigl((6\wp^2-\tfrac12g_2)/\wp'\bigr)^2\) wherever \(\wp'(z)\ne0\); meromorphic extension to all of \(\mathbb C\setminus\Lambda\) by the identity theorem (pole-free difference, discrete zero set of \(\wp'\)); pole set of \(F(z)=\wp(2z)\) computed as \(\tfrac12\Lambda\setminus\Lambda\) using the degree-two lemma, so all half-period classes are accounted for. `precheck` pass (canonical numbering adopted); `rendercheck` clean. |
| 24 | 7 | `thm-elliptic-cubic-chord-tangent-group-law` | authored (repaired) | 12 canonical steps in six layers. \(G=\oplus\) transported from \(T_\Lambda\) through the bijection \(\Phi\) of `thm-complex-torus-weierstrass-cubic-isomorphism` (associativity/identity/inverse free); \(\wp''=6\wp^2-\tfrac12g_2\) on \(\mathbb C\setminus\Lambda\) by differentiating the cubic relation and passing to \(\wp'\)-zeros through continuity; affine chart \(y^2=p(x)\) with local parameters \(x\) (at \(y\ne0\)) and \(y\) (at \((e_j,0)\), \(h(y)-e_j=\tfrac1{p'(e_j)}y^2+O(y^3)\)); chart \((u,v)\) at \(O\) with \(\varphi(u)=4u^3-g_2u\varphi(u)^2-g_3\varphi(u)^3\) and \(\varphi(u)=O(u^2)\) hence the line at infinity vanishes to order \(3\) at \(O\) and verticals to order \(1\); multiplicity convention invariant under local parameters. Differentiated addition identity \(\wp'(z+w)=-y+m(x-t)\) where \(t=\wp(z+w)=-x-u+\tfrac14m^2\) (division-free derivation from the addition formula plus Vieta); vertical lines \(P_+-P_-+O\) via \(z\mapsto-z\); line at infinity \(3O\); diagonal case by continuity of filled difference quotients (`lem-holomorphic-difference-quotient-is-jointly-continuous`); nonvertical three-distinct case: third \(x\)-coordinate \(m^2/4-x_1-x_2=\wp(z_1+z_2)\), third \(y\)-coordinate \(-\wp'(z_1+z_2)\); tangent case \(2P+R\) with \(R=\Phi([-2z])\); assembly over the four line types \(\beta=0\) and \(\beta\ne0\). Deps: added `def-projective-space-points`, `lem-nonsingular-complex-algebraic-curve-holomorphic-charts`, the difference-quotient, continuity, modulus, polynomial-roots and Vieta suppliers. `precheck` pass (canonical renumber 3.2→4.1, 4.1→5.1, 5.1→6.1 adopted); `rendercheck` clean. |
| 25 | 7 | `ex-half-period-values-and-branching` | authored (repaired) | Square lattice \(\Lambda_{\mathrm{sq}}=\mathbb Z+i\mathbb Z\), \(h=(1+i)/2\). 8 canonical steps in six layers. Local scaling identity \(\wp_{c\Lambda}(cz)=c^{-2}\wp_\Lambda(z)\) for every full lattice and \(c\in\mathbb C^\times\) by reindexing the finite-subset net (absolute convergence from the convergence theorem; \(c\Lambda\) full because \(c\ne0\)); at \(c=i\) this gives \(\wp(iz)=-\wp(z)\) using \(i\Lambda_{\mathrm{sq}}=\Lambda_{\mathrm{sq}}\) proved locally (\(i\cdot1=i\), \(i\cdot i=-1\), inverse multiplication by \(-i\)); \(h=ih+1\) and periodicity give \(\wp(h)=-\wp(h)\), so \(\wp(h)=0=e_3\); evaluating the differential equation at \(h_j\) where \(\wp'(h_j)=0\) and \(g_3=0\) gives \(e_j(4e_j^2-g_2)=0\); distinctness of \(e_1,e_2,e_3\) with \(e_3=0\) gives \(e_1,e_2\ne0\), hence \(g_2=4e_1^2=4e_2^2\), so \((e_1-e_2)(e_1+e_2)=0\) and \(e_2=-e_1\), and \(4x^3-g_2x=4x(x-e_1)(x+e_1)\); with \(\sqrt{g_2}:=2e_1\) the two nonzero half-period values are \(\pm\sqrt{g_2}/2\) and \(g_2\ne0\). Branch clause from the degree-two lemma: critical points \([0],[h_1],[h_2],[h_3]\), branch values \(\infty,e_1,e_2,e_3\), so branch locus \(\{0,\pm\sqrt{g_2}/2,\infty\}\). Deps added: `thm-complex-numbers-form-a-field`, `def-ramification-index-and-branch-value` (both published). `precheck` pass (canonical renumber 1.3→2.1, 2.1→3.1, 3.1→4.1, 4.1→5.1, 5.1→6.1 with the fact-only cubic step hoisted to 2.2); `rendercheck` clean. |

## Open obligations / escalations

- **No unfinished in-run supplier is consumed by this pair.** Every one of the
  25 items cites only published items or level-≤ items of this pair, and every
  cited in-pair supplier was authored and receipted before its consumer was
  closed. There is therefore no `supplier ID / consumer ID / consuming proof
  step` flag to file, and no item was left escalated: all 25 Step-3b decisions
  were recorded (`accept` 12, `repaired` 13) with confidence 1, the examined
  dependency IDs and an item-specific evidence reason, and each re-reads as
  `closed: true`. A direct `dependencyLevels` recomputation on the batch-27
  manifest confirms all 25 `dependency_level` labels equal their computed
  levels 0–7 in the dispatch order.
- **No item is owner-held, and no owner action is requested for this pair
  beyond reconciling the published concerns below in the serial ledger.**
- **Scope carrier is current.** The A-page owner `proceed` receipt on scope
  hash `19ef48c1…3b5` remains valid: the audit/authoring repairs changed proof
  text and dependency declarations, never a page or item `statement`, title or
  kind. `step3-decisions check --phase scope` lists this pair as closed; the
  only open scope rows run-wide are four foreign pairs (Hochschild
  hyperhomology, Minkowski theory, logarithmic potential/capacity,
  Cartier–Weil divisors), which are outside this dispatch's write scope.
- **Source obligations carried from the Step-3a review, resolved or bounded.**
  The review's three stated uncertainties were addressed in the scope-repair
  record (`research/frontier-37-owner-30-batch-27.notes.md`, "Step 3a scope
  repair" and "Full-text retrieval evidence", with SHA-256 stamps): the
  December 2025 McMullen notes (§§5.2–5.4) were fetched and read for the
  enrichment items; Ahlfors Ch. 7 §2.3 Theorem 2 and its proof were read for
  `ex-canonical-basis-of-complex-lattice`; and the DLMF stamp remains
  content-complete but not byte-reproducible, which affects evidence
  reproduction only. The authored items carry these locators in their
  `sources` blocks. The only carried qualification is the non-reproducible
  DLMF byte hash.
- **Contract warning deliberately carried.** Strict proof-contract reports one
  `shotgun-bracket` warning on `ex-weierstrass-addition-and-duplication`
  (step 1.1 cites six of the eight declared facts while two later steps cite
  none). Every declared fact is cited at the step that actually uses it; the
  warning is a citation-distribution heuristic, not a mathematical or contract
  error, and re-cutting verified steps to satisfy it was judged to risk more
  than it repairs. Recorded for Step 4/owner visibility only (0 errors).
- **Published concern (carried from the batch-27 scaffold record; author-level
  audit, not an independent Step-5 finding).** Published
  `def-standard-topologies` states the cocountable family as a topology on an
  arbitrary set `X` with no axiom hypothesis; its proof's finite-intersection
  step cites published `thm-countable-union-of-countable`, whose statement
  assumes Countable Choice via `def-countable-choice`, so that citation does
  not establish the unqualified claim. Confidence: high that the citation is
  not faithful (I read the statement, proof clause and cited statements in the
  library). The two-set union is provable in ZF by interleaving two
  enumerations (`lem-countable-iff-surjection-from-n`, `lem-subset-of-countable`).
  Required suppliers: none new. Repair strategy: replace the
  `thm-countable-union-of-countable` citation by the ZF interleaving argument
  (or state the axiom hypothesis); the canonical ledger
  `research/published-consumer-supplier-ledger.md` is serial-reconciler-owned
  and was not touched. This pair consumes only the discrete/indiscrete
  degenerate case of that definition through the quotient/final-topology
  route, so it is not a prerequisite of any pair-845/846 claim.
- **Foreign run-wide debt, reported and not repaired (outside the assigned
  pair).** Repo-wide `depcheck` fails with 75 errors, none of them a
  pair-845/846 file: the Cartier–Weil / line-bundle group's
  `dep-unresolved`+`link-unresolved` family
  (`thm-cartier-weil-divisors-curves-agree`,
  `thm-degree-positive-line-bundle-sections-zero-bound`, the
  divisor/curve/nonsingularity items), one `link-unresolved` in
  `items/thm-principle-of-descent-and-domination.md`, and three foreign
  `b-leaf-content` errors (a braid-group pair and a monoid pair). Repo-wide
  `fwdcheck` fails only on those same foreign `link-unplanned` links; no
  failure line names a pair-845/846 file. Run-wide
  `item-dependency-levels check` reports exactly one error, foreign:
  `thm-principle-of-descent-and-domination: dependency_level 3 differs from
  computed 2` (batch 24). The run-wide final `step3-decisions check` exits 1
  with open rows only in other pairs (410 at the handoff snapshot — sibling
  groups were still recording decisions concurrently, so the run-wide count
  moves), none for this pair. These are Step-4/owner reconciliation items and
  blockers for the run-wide gate, not for this pair's handoff.
- **Plan splice.** `research/plan-spec.json` still carries empty item
  inventories for both pages;
  `research/frontier-37-owner-30-pre-splice-plan-findings.json` contains no
  finding for this pair (re-checked by item and page id), so there is no
  pre-splice finding to repair. `validate-plan` passes: declared page order
  acyclic and consistent, no item-level cycle, forward reference, B-page
  dependency or unresolved id among the 1300 pages with item lists (the
  run-wide advisory that 367 planned pages carry no item list yet is a
  Step-4 splice note, not a pair defect). `splice-plan --run
  frontier-37-owner-30 --verify` reports 144 pages where plan and manifest
  disagree, ours included (`elliptic-functions-and-complex-tori`: manifest 15
  vs plan 0; `-examples`: manifest 10 vs plan 0) — the expected in-flight
  splice state for every authored batch, applied in Step 4 with the licensed
  `splice-plan --batch <i> --update`. The same run also prints 84
  `undeclared prerequisite` rows and one batch-8 `deps ... on UNBUILT page
  cartier-and-weil-divisors-line-bundles-and-picard-groups` row; none names a
  pair-845/846 page or item.
- **Choice / axiom branches.** No item of this pair declares AC, and the
  authored proofs consume no AC-spending clause (the scaffold's transitive
  metadata-only paths to `def-axiom-of-choice` noted in
  `research/frontier-37-owner-30-batch-27.notes.md` are not used by any proof
  step here). No incompatible-axiom branch is collapsed and the choice-free
  arguments stay choice-free.

## Checks run

All checks below were run on the final file set of this dispatch; none was
reused from an earlier attempt without being re-run.

- `node tools/tsx-run.mjs tools/precheck.mts <25 explicit item paths>` —
  21 checked, 0 failing (the four definitions are `precheck: n/a`).
- `node tools/rendercheck.mjs <25 items + both pages>` — OK over 27 files
  (every math span parses under KaTeX, no wikilink inside math, every
  frontmatter block parses).
- `node tools/content-policy.mjs research/frontier-37-owner-30-batch-27.pages.json`
  — 25 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-27.proof-contracts.json --strict`
  — 25/25 items checked, 0 errors, 1 warning (the deliberate
  `shotgun-bracket` note above).
- `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-27.pages.json`
  — 25 items, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-27.coverage.json --require-destination`
  — 1 page, 50 harvested rows, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — OK (details in the
  bullet above).
- `node tools/depcheck.mjs` — repo-wide FAIL with 75 errors, zero naming a
  pair-845/846 file (foreign list above). The earlier `b-leaf-content`
  findings on `lem-weierstrass-p-degree-two-and-half-periods` and
  `thm-weierstrass-lattice-discriminant-is-nonzero` are gone.
- `node tools/fwdcheck.mjs` — repo-wide FAIL on the foreign `link-unplanned`
  links only; no pair-845/846 item appears in any failure line (pair items
  appear only as declared forward-reference targets in the "inherited"
  listing).
- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` —
  exit 1 with exactly the one foreign level error above; the batch-27
  recomputation (`dependencyLevels` on the batch-27 manifest) shows all 25
  labels equal to the computed levels 0–7.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30`
  — refreshed and deduplicated; the derived
  `research/frontier-37-owner-30-batch-27.cross-batch-dependencies.json`
  remains `[]` (no cross-batch item edge to reconcile for this pair).
- `node tools/prosecheck.mjs` — OK (no positional claim contradicts the
  spec); no pair-845/846 item appears in its output.
- `node tools/depsource.mjs` — OK, 0 unresolved (4 dep(s) link to neither a
  published nor an earlier planned page, all foreign).
- `node tools/extcheck.mjs` — OK (every recorded-not-proved statement is a
  cited remark with no proof); its warnings concern other pages, including a
  name-coincident `rem-hausdorff-dimension-orients-the-weierstrass-graph`.
- `node tools/pathcheck.mjs` — OK, 0 errors (35 foreign pathway warnings for
  representation theory and scheme theory).
- `node tools/step3-decisions.mjs record-item …` ×25 — 25 receipts written
  under `research/frontier-37-owner-30-step3b-review-<item>.json`; 12
  `accept`, 13 `repaired`, each with confidence 1, its examined dependency
  IDs and an item-specific evidence reason; every receipt re-reads as
  `closed: true`.
- `node tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase scope`
  — 4 open rows, all foreign (listed above); this pair current.
- `node tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase final`
  — run-wide exit 1 with open rows only in other pairs (410 at the handoff
  snapshot; sibling groups were still recording concurrently); zero open rows
  for pair 845–846 (all 25 items accepted or repaired).

## Handoff summary

- **Completed IDs (25/25):** `def-complex-lattice-and-complex-torus`,
  `ex-rank-one-cotangent-uniformization`, `def-weierstrass-elliptic-p-function`,
  `thm-complex-torus-quotient-is-well-defined`,
  `ex-canonical-basis-of-complex-lattice`, `def-elliptic-function-for-a-lattice`,
  `def-weierstrass-zeta-and-sigma-functions`, `ex-oriented-lattice-bases-and-sl2z`,
  `thm-elliptic-function-divisor-laws`,
  `thm-weierstrass-p-normal-convergence-and-periodicity`,
  `lem-weierstrass-p-degree-two-and-half-periods`,
  `thm-weierstrass-p-differential-equation`,
  `thm-weierstrass-zeta-sigma-quasi-periodicity`,
  `ex-boundary-free-fundamental-parallelogram`,
  `thm-field-of-elliptic-functions-is-generated-by-p-and-p-prime`,
  `thm-weierstrass-lattice-discriminant-is-nonzero`,
  `thm-weierstrass-p-addition-formula`, `ex-sigma-simple-lattice-zero`,
  `thm-complex-torus-weierstrass-cubic-isomorphism`,
  `ex-rectangular-weierstrass-function-and-elliptic-integral`,
  `ex-singular-cubic-degeneration`, `ex-square-and-hexagonal-lattice-invariants`,
  `ex-weierstrass-addition-and-duplication`,
  `thm-elliptic-cubic-chord-tangent-group-law`,
  `ex-half-period-values-and-branching`; both pages
  (`library/complex-analysis/elliptic-functions-and-complex-tori.md`,
  `library/complex-analysis/elliptic-functions-and-complex-tori-examples.md`)
  are written and registered in the manifest, coverage and contracts.
- **Local suppliers added:** none beyond the four Step-3a enrichment items
  already in the scope carrier (`ex-rank-one-cotangent-uniformization`,
  `ex-canonical-basis-of-complex-lattice`,
  `ex-rectangular-weierstrass-function-and-elliptic-integral`,
  `thm-elliptic-cubic-chord-tangent-group-law`); all other suppliers are
  published items. No promised claim was dropped, no pair was added and no
  Recorded result is consumed.
- **Published concerns:** `def-standard-topologies` as detailed above; plus
  the foreign run-wide depcheck/fwdcheck/level/decision debt, which the
  owner/serial reconciler should route to the owning groups. No other
  potentially defective published item was identified during this
  author-level audit.
- **Open obligations:** the `shotgun-bracket` warning (deliberate, advisory);
  Step-4 splicing of the two page inventories into `plan-spec.json`; the
  run-wide gates blocked by foreign pairs. Nothing in this pair requires an
  owner decision before Step 4.

---
id: thm-cft-c2-pseudotrace-modularity
kind: theorem
title: Modular invariance for C2-cofinite pseudo-traces
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
deps:
  - def-cft-genus-one-pseudotrace-correlation-function
  - lem-cft-nonnegative-c2-mode-window-finiteness
  - lem-cft-c2-finite-projective-generator-and-weight-projectivity
  - lem-cft-nonnegative-c2-sphere-and-cylinder-sewing
  - lem-cft-torus-blocks-as-projective-pseudotrace-sewings
  - lem-cft-torus-ward-connection-and-pseudotrace-continuation
  - def-cft-pseudotrace
  - lem-cft-pseudotrace-basis-independent
  - def-c2-cofinite-vertex-algebra
  - def-cft-logarithmic-intertwining-operator
dependency_roles:
  def-cft-genus-one-pseudotrace-correlation-function: mathematical-premise
  lem-cft-nonnegative-c2-mode-window-finiteness: mathematical-premise
  lem-cft-c2-finite-projective-generator-and-weight-projectivity: mathematical-premise
  lem-cft-nonnegative-c2-sphere-and-cylinder-sewing: mathematical-premise
  lem-cft-torus-blocks-as-projective-pseudotrace-sewings: mathematical-premise
  lem-cft-torus-ward-connection-and-pseudotrace-continuation: mathematical-premise
  def-cft-pseudotrace: mathematical-premise
  lem-cft-pseudotrace-basis-independent: mathematical-premise
  def-c2-cofinite-vertex-algebra: mathematical-premise
  def-cft-logarithmic-intertwining-operator: mathematical-premise
domain: mathematics
library: mathematics
proof_strategy: direct
axiom_use: Full AC is inherited by the C2-cofinite analytic conclusion from the geometric sphere/cylinder sewing constructions; the finite dual-basis formulas require no additional physical premise.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yi-Zhi Huang, Modular invariance of (logarithmic) intertwining operators"
      url: "https://arxiv.org/pdf/2305.15152v3"
      locator: "§5, Proposition 5.2 and Theorems 5.4–5.5; proof of the n-point reduction and the one-point conformal-block result."
    - title: "Masahiko Miyamoto, Modular invariance of vertex operator algebras satisfying C2-cofiniteness"
      url: "https://arxiv.org/pdf/math/0209101v2"
      locator: "§§2.5, 3–5, pseudo-trace modular-invariance hypotheses and proof route."
verification:
  precheck: pending
---

## Statement

Let $V$ be a $C_2$-cofinite VOA with no nonzero negative-weight states; its weight-zero space need not equal $\mathbb C\mathbf1$. Fix $n\ge1$, external grading-restricted generalized modules $W_1,\ldots,W_n$, and intermediate grading-restricted generalized modules $\widetilde W_1,\ldots,\widetilde W_{n-1}$. Let $P$ be a finite-dimensional unital associative algebra with symmetric functional $\phi$, and let the loop module $\widetilde W_0=\widetilde W_n$ be a grading-restricted generalized $V$-$P$-bimodule, projective as a right $P$-module. Choose cyclic logarithmic intertwiners
$$Y_i:\binom{\widetilde W_{i-1}}{W_i\ \widetilde W_i},\qquad 1\le i\le n,$$
whose full product is compatible with P for every external input, as in [[def-cft-genus-one-pseudotrace-correlation-function]]. For every $w_i\in W_i$ and
$$\gamma=\begin{pmatrix}\alpha&\beta\\ \gamma_0&\delta\end{pmatrix}\in SL_2(\mathbb Z),\qquad s=\gamma_0\tau+\delta,\qquad\tau'=\frac{\alpha\tau+\beta}{s},$$
the transformed correlation function
$$F^\phi_{Y_1,\ldots,Y_n}\left( s^{-L_{W_1}(0)}w_1,\ldots,s^{-L_{W_n}(0)}w_n;\ z_1/s,\ldots,z_n/s;\ \tau'\right)$$
belongs to the span $\mathcal F_{w_1,\ldots,w_n}$ of that interface, with its fixed logarithm branches. This is closure of the specified function space under modular transformation, not a rationality assertion. The external labels and the intermediate loop labels are separate, as in Huang Theorem 5.5.

## Facts & Assumptions

**Given:** Exactly the nonnegative C2-cofinite VOA, external and intermediate modules, finite algebra, symmetric functional, right-projective loop and full-product compatibility in the Statement. Nonnegative VOA is defined explicitly in the sphere/cylinder supplier and does not impose V0=C1.

[F1] [[lem-cft-nonnegative-c2-mode-window-finiteness]] proves strict-index spanning with nonvacuum weight-zero representatives, finite higher-mode vector quotients and finite universal Omega-image algebras. [[lem-cft-c2-finite-projective-generator-and-weight-projectivity]] constructs actual finite projective generators, finite module categories and finite-projective right endomorphism-algebra weight spaces in this full scope.

[F2] [[lem-cft-nonnegative-c2-sphere-and-cylinder-sewing]] proves sphere dual-fusion representability, generalized-module ordinary sewing, genus-zero fixed factorization and the full torus cylinder inverse with this same nonnegative scope. Narrower CFT-only statements are not invoked outside their hypotheses.

[F3] [[lem-cft-torus-blocks-as-projective-pseudotrace-sewings]] identifies every fixed torus block with a symmetric functional on a finite A-bimodule and realizes it by an ACTUAL VOA loop module, right-projective over a finite algebra, and a compatible sphere block. Its explicit dual-basis tensor trace calculation and ordinary two-pair sewing prove that this is its pseudotrace, including every nilpotent logarithmic term.

[F4] [[lem-cft-torus-ward-connection-and-pseudotrace-continuation]] constructs the exact finite flat genus-one Ward connection, regular-singular cusp system, full analytic continuation, and modular covariance with the actual generalized L0 powers. It proves horizontal uniqueness from a full fiber block and supplies cyclic intertwiner factorizations of the sewings in F3.

[F5] [[def-cft-genus-one-pseudotrace-correlation-function]], [[def-cft-pseudotrace]] and [[lem-cft-pseudotrace-basis-independent]] fix the geometric modification, shifted q-trace, finite dual bases, prescribed branches and the external-label span.

## Proof


1.1 The given product has a well-defined formal shifted pseudotrace. The right P-action commutes with L0 and all its generalized-weight projections; each finite weight space is a P-summand of the projective loop and hence finite projective. Every product coefficient is P-linear by the hypothesis for all external states. F5 therefore makes each finite coefficient independent of its dual basis. F4 identifies the chain with a sphere block and realizes the pseudotrace as an ordinary two-pair sewing on the finite-support P-linear endomorphism joint module. F2 gives its absolute/local-uniform convergence in the full preferred nested radial region and F4 gives continuation on the universal cover of the collision-free elliptic configuration space. These are actual analytic functions, not formal q-series to which modularity is assigned. Faithfulness of the original P-action is not assumed or needed by the two-pair proof. [given, F2, F4, F5, algebra]

1.2 Fix a reference point in the preferred radial region, with distinct points on the torus. Its block fiber is finite dimensional and F3 describes it as SLF_A(B_F), for an actual finite fusion/mode bimodule B_F. Every symmetric functional is realized explicitly by R=A plus B_F with square-zero multiplication, phi_R(a,b)=psi(b), U=R, M=P_gen tensor_A U, and f(b tensor u)=(0,b)u. Here P_gen is the constructed VOA projective generator and is unrelated to the originally supplied algebra P. F1 proves M is a true grading-restricted generalized V-module, its finite weight pieces are projective right R and its whole R-action is projective. F3 lifts f to a sphere block, verifies the finite coefficient trace identity, and uses its cylinder inverse to show that these blocks exhaust the entire reference fiber. This discharges the nonsemisimple symmetric-functional realization step on actual VOA modules, rather than assuming a finite-algebra module automatically lifts. [F1, F2, F3, algebra]

2.1 The continued function is a flat torus block for the connection in F4. Its position derivatives are the actual L(-1) insertions, by U T U^{-1}=2pi i(T+L0). The tau derivative is obtained from projective trace cyclicity and the stress-field contour with h_tau; the identity U omega=(2pi i)^2(omega-c1/24) supplies precisely the shift in the Statement. In particular no assertion about ordinary character completeness, semisimplicity, or an unproved higher-Zhu induction is used to put this pseudotrace in the block space. [F4, F5, step 1.1, algebra]

2.2 Factor each of those R-linear sphere blocks along successive three-point separating cuts at the reference radial configuration. F2's actual fixed genus-zero sewing inverse gives intermediate grading-restricted modules and fixed-parameter maps; reconstruction gives logarithmic intertwiners of the required cyclic types with exactly the original external W_i. Naturality carries the right R-action through the intermediate objects and makes the final full chain R-compatible. F4 proves convergence and continuation of each new pseudotrace chain and identifies its value with the original fiber block. Choose finitely many such chains whose fiber values are a basis. Their flat continuations form a basis of the full flat-section space, by F4's uniqueness. No replacement of the intermediate generalized category by a simple-object sum has been made. [F2, F3, F4, step 1.2, algebra]

3.1 Apply the modular coordinate map (z,tau)->(z/s,tau') with the specified logarithm of s and the external state operator s^{-sum L_i(0)}. F4 proves that its pullback is again a flat block, by lattice reindexing, the exact G2 anomalous term and the explicit h_tau operator identity. That calculation includes all generalized nilpotent L0 terms and uses the linear coordinate map's zero Schwarzian. Thus the transformed given pseudotrace has some reference fiber value in the same finite block fiber. Express it in the basis of step 2.2 with constant complex coefficients. The difference of the resulting finite combination and the transformed function is a flat section with zero entire fiber functional, so F4 makes it zero as a germ and throughout its common analytic continuation domain. [F4, step 2.1, step 2.2, algebra]

4.1 Evaluate this equality on the fixed insertion states w_1,...,w_n. Every basis function used on the right is a correlation function permitted in F5: its finite algebra, symmetric functional, right-projective loop, intermediate generalized modules and product-compatible cyclic intertwiners have just been constructed, with the same external W_i. Its scalar value therefore lies in the defined span mathcal F_{w_1,...,w_n}. The left side is exactly the modularly transformed expression in the Statement. This proves the full asserted closure for every n and every gamma. It does not assert a branch-independent honest SL2 representation for arbitrary external weights or rationality of V, and none is needed for this membership assertion. [F3, F4, F5, step 2.2, step 3.1, algebra] ∎

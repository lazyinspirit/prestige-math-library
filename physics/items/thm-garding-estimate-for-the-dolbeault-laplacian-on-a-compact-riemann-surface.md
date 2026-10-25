---
id: thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface
kind: theorem
title: "Gårding estimates for the Dolbeault Laplacian on a compact Riemann surface"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-hk-and-hk-zero-notation
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-local-weak-solution-for-a-divergence-form-operator
  - def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
  - def-sobolev-space-wkp-and-its-norm
  - def-uniformly-elliptic-divergence-form-operator
  - def-wirtinger-derivatives
  - lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces
  - lem-complex-lp-completeness-density-and-inner-product
  - lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas
  - thm-interior-h-k-plus-two-elliptic-regularity
  - thm-leibniz-rule-for-distributions
  - thm-local-smooth-approximation-in-wkp
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
  - thm-riesz-representation-for-hilbert-space
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-chain-rule-for-differentials-of-smooth-maps
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VI §2, (2.3)–(2.4), printed pp. 289–290: for an elliptic operator P of order d on a compact manifold, P̃u in W^k and u in W^0 imply u in W^{k+d} with the Gårding estimate; the corollary derives finite-dimensional kernel and closed range. The text cites Hörmander for the general elliptic PDE facts."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Ch. 4 §4.11, Theorem 4.27 and Theorem 4.28, printed pp. 112–114: interior H² and higher H^{k+2} regularity for weak solutions of uniformly elliptic divergence-form equations; Theorem 4.28 refers to [9] for its detailed proof."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice, used through the Sobolev restriction and cutoff-localisation interface; the mollification, Hilbert-space, partition, and interior-regularity interfaces use its countable instances ([[def-axiom-of-choice]], [[def-countable-choice]], [[lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]]). Let $X$ be a nonempty compact Riemann surface, $E\to X$ a holomorphic line bundle with Hermitian metric $h$, and $g$ a compatible Riemannian metric. Use the maximal Dolbeault operator $\bar D:L^2_0\to L^2_1$, its Hilbert adjoint $\bar D^*:L^2_1\to L^2_0$, and the block Dolbeault Laplacian $\Delta''$ from [[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]. Write a total form as $u=u_0+u_1$, with $u_q\in L^2_q$, and set
$$\mathcal V:=\operatorname{dom}\bar D\oplus\operatorname{dom}\bar D^*,\qquad \|u\|_{\mathcal V}^2:=\|u\|_{L^2}^2+\|\bar D u_0\|_{L^2}^2+\|\bar D^*u_1\|_{L^2}^2.$$
For each integer $k\ge0$, $H^k(X,\Lambda^{0,\bullet}T^*X\otimes E)$ denotes the finite-chart Sobolev completion using the same norm formula as in the preceding item, for the fixed finite chart/frame cover and partition used there. For $k=1,2$ this is exactly its convention.

1. **First-order estimate and domain.** One has
$$\mathcal V=H^1(X,\Lambda^{0,\bullet}T^*X\otimes E),\qquad \|u\|_{H^1}\le C\bigl(\|\bar D u_0\|_{L^2}+\|\bar D^*u_1\|_{L^2}+\|u\|_{L^2}\bigr).$$
The displayed right-hand norm is equivalent to the $H^1$ norm. In particular, $\mathcal V$ is a Hilbert space in its graph norm and smooth forms are dense in it in that norm.

2. **Second-order and higher estimates.** Suppose $u\in H^1(X,\Lambda^{0,\bullet}T^*X\otimes E)$ and $\Delta''u=f$ distributionally, where $f\in H^k(X,\Lambda^{0,\bullet}T^*X\otimes E)$ and $k\ge0$. Then $u\in H^{k+2}$ and for a constant $C_k$, depending on $k,X,g,h$ and the fixed finite-chart norms,
$$
\|u\|_{H^{k+2}}\le C_k\bigl(\|f\|_{H^k}+\|u\|_{L^2}\bigr).
$$
For $k=0$ this is the second-order Gårding estimate. In particular it applies to every $u\in\operatorname{dom}\Delta''$, with $f=\Delta''u$. Distributionally means that the local scalar differential expressions of the two Laplacian blocks equal the local coefficients of $f$. Equivalently, for all smooth test forms $v=v_0+v_1$,
$$
\langle\bar D u_0,\bar D v_0\rangle_{L^2}+\langle\bar D^*u_1,\bar D^*v_1\rangle_{L^2}=\langle f,v\rangle_{L^2}.
$$
The form inner product with the additional term $\langle u,v\rangle_{L^2}$ represents $I+\Delta''$, not $\Delta''$.

## Facts & Assumptions

**Given:** the metrics, maximal operators, Sobolev conventions and choice assumptions in the Statement.

[F1] In a holomorphic chart $z=x+iy$ and holomorphic frame $e$ with $g=\rho(dx^2+dy^2)$ and $h(e,e)=\psi>0$, the local formulas are
$$\bar\partial_E(fe)=(\partial_{\bar z}f)d\bar z\otimes e,\qquad \bar\partial_E^*(a\,d\bar z\otimes e)=-\frac{2}{\rho\psi}\partial_z(\psi a)e,$$
and
$$\Delta''_0 f=-\frac{2}{\rho\psi}\partial_z(\psi\partial_{\bar z}f),\qquad \Delta''_1(a\,d\bar z\otimes e)=-2\partial_{\bar z}\!\left((\rho\psi)^{-1}\partial_z(\psi a)\right)d\bar z\otimes e.$$
The formulas agree with the Hilbert adjoint on smooth tests ([[lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas]]).

[F2] The weak maximal domain records the distributional $\bar\partial$ derivative, the Hilbert-adjoint domain records the distributional formal-adjoint expression, the Laplacian is the stated nonnegative block operator, and its energy pairing with smooth tests is the sum in the Statement ([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]).

[F3] The $L^2$ pairing is first-variable-linear; $C_c^\infty(\mathbb R^2;\mathbb C)$ is dense in complex $L^2(\mathbb R^2)$, and $L^2$ is a Hilbert space ([[lem-complex-lp-completeness-density-and-inner-product]]). A bounded linear functional on a Hilbert space has a Riesz representative ([[thm-riesz-representation-for-hilbert-space]]).

[F4] The Wirtinger derivatives satisfy $\partial_{\bar z}=\tfrac12(\partial_x+i\partial_y)$ and $\partial_z=\tfrac12(\partial_x-i\partial_y)$ ([[def-wirtinger-derivatives]]).

[F5] Multiplication of distributions by a smooth cutoff obeys the Leibniz rule ([[thm-leibniz-rule-for-distributions]]).

[F6] Interior mollification approximates $L^2$ classes locally and commutes distributionally with constant-coefficient derivatives; Meyers–Serrin gives smooth approximation in finite-order Sobolev spaces ([[thm-local-smooth-approximation-in-wkp]], [[thm-meyers-serrin-density-on-an-arbitrary-open-set]]).

[F7] Restriction and smooth cutoffs are bounded on Sobolev spaces ([[lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]]).

[F8] A smooth partition of unity subordinate to a finite chart cover exists ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F9] On a relatively compact chart domain the scalar divergence operator with principal coefficients $a^{ij}=(2\rho)^{-1}\delta_{ij}$, smooth lower-order coefficients, and an $H^1$ weak solution with datum in $H^k$ is uniformly elliptic and satisfies the interior $H^{k+2}$ estimate ([[def-local-weak-solution-for-a-divergence-form-operator]], [[def-uniformly-elliptic-divergence-form-operator]], [[thm-interior-h-k-plus-two-elliptic-regularity]]).

[F10] The Axiom of Choice supplies Countable Choice. Full AC enters this item only through the Sobolev cutoff-localisation interface; its countable instances enter through mollification, Hilbert representation and density, partitions and interior elliptic regularity ([[def-axiom-of-choice]], [[def-countable-choice]], [[lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]]).

[F11] On a Euclidean chart, $H^k=W^{k,2}$ with the norm made from the $L^2$ classes of weak derivatives. The finite-chart global norms in the Statement use these local norms; for $k=1,2$ they are the preceding item’s completed spaces ([[def-hk-and-hk-zero-notation]], [[def-sobolev-space-wkp-and-its-norm]], [[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]).

[F12] The $L^2$ pairing integrates the pointwise Hermitian pairing against the Riemannian volume form ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

[F13] A compact set inside an open set admits a smooth cutoff equal to one near it, supported in that open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F14] Differentials of smooth composites obey the chain rule ([[thm-chain-rule-for-differentials-of-smooth-maps]]); repeated application gives the finite-order coordinate formulas used below.

## Proof

**Proof technique:** derive the local first-order estimate and divergence-form expressions, then assemble them on a finite chart cover.

1.1 Let $w\in C_c^\infty(\mathbb R^2;\mathbb C)$. Expanding with [F4] gives $4|\partial_{\bar z}w|^2=|w_x|^2+|w_y|^2+i(w_y\overline{w_x}-w_x\overline{w_y})$. Integration by parts shows $\int w_x\overline{w_y}=\int w_y\overline{w_x}$, so this integral is real and the cross term integrates to zero. Hence $\|\nabla w\|_{L^2}=2\|\partial_{\bar z}w\|_{L^2}$; the identical calculation gives $\|\nabla w\|_{L^2}=2\|\partial_z w\|_{L^2}$. Now let $w\in L^2(\mathbb R^2)$ have compact support and distributional $\partial_{\bar z}w=h\in L^2$. Choose a nonnegative smooth bump supported in the unit ball and positive near zero by [F13], and normalize its positive integral to one. Mollify $w$ with its rescalings $\rho_\epsilon$. Testing the weak derivative against the translated smooth kernel gives $\partial_{\bar z}w_\epsilon=h*\rho_\epsilon$. Both convolutions converge in $L^2$ by the $k=0$ case of [F6]: for $\epsilon\le1$ their supports lie in one fixed compact set, so local convergence is global. The smooth identity uniformly bounds each $\partial_jw_\epsilon$. For every test $\varphi$, integration by parts and Cauchy–Schwarz therefore bound $\varphi\mapsto-\int w\,\partial_j\varphi$ by $2\|h\|_2\|\varphi\|_2$. Density [F3] and Riesz [F3] represent each functional by an $L^2$ function (conjugating the representative for the bilinear weak-derivative convention); thus $w\in H^1$ and $\|\nabla w\|_2\le2\sqrt2\|h\|_2$. Conjugation gives the same conclusion when $\partial_z w\in L^2$. For a local $L^2$ coefficient with derivative $h$, apply this compact-support result to $\eta w$ extended by zero, retaining $\partial_{\bar z}(\eta w)=\eta h+(\partial_{\bar z}\eta)w$; both terms are $L^2$ on the compact support. [F3, F4, F5, F6, F13, algebra]

1.2 Expanding [F1] in $x,y$, each local Laplacian block has principal part $-\tfrac{1}{2\rho}(\partial_x^2+\partial_y^2)$; derivatives of $\rho$ and $\psi$ contribute only smooth lower-order terms. Put $a^{ij}=(2\rho)^{-1}\delta_{ij}$. Then the block is $-\partial_i(a^{ij}\partial_j\cdot)+b^i\partial_i+c\cdot$ for smooth $b^i,c$, after absorbing the derivatives of $a^{ij}$ into $b^i$. On every relatively compact chart subdomain, positivity of $\rho$ gives a positive lower bound for $a^{ij}\xi_j\overline{\xi_i}/|\xi|^2$, and all coefficient derivatives are bounded there. The distributional equation in the Statement and integration by parts against compactly supported tests make each local coefficient a weak solution in the sense of [F9]. [F1, F4, F9, algebra]

2.1 In a chart/frame let $u_0=fe$ and $u_1=a\,d\bar z\otimes e$. The weak maximal-domain identity [F2] gives $\partial_{\bar z}f\in L^2_{\mathrm{loc}}$. For $u_1\in\operatorname{dom}\bar D^*$, test the adjoint identity against compactly supported smooth sections $\phi e$. The $L^2$ pairing [F12] and the formal adjoint formula [F1], interpreted distributionally by integration by parts, give $\bar D^*u_1=-2(\rho\psi)^{-1}\partial_z(\psi a)$; hence $\partial_z(\psi a)\in L^2_{\mathrm{loc}}$. Choose a partition cutoff $\chi$ with compact support in the chart, using [F8]. The distributional product rule [F5] gives $\partial_{\bar z}(\chi f)=\chi\partial_{\bar z}f+(\partial_{\bar z}\chi)f$ and $\partial_z(\chi\psi a)=\chi\partial_z(\psi a)+(\partial_z\chi)\psi a$. Apply step 1.1 to $\chi f$ and, by conjugation, to $\chi\psi a$. Since $\rho,\psi$ and their inverses and first derivatives are bounded on the compact support, [F1, F12] then bounds the local $H^1$ norms of both coefficients by their local $L^2$ norms and the corresponding coefficients of $\bar D u_0$ and $\bar D^*u_1$. [F1, F2, F5, F8, F12, step 1.1]

2.2 Fix $k\ge0$ and let $(\chi_j)$ be the fixed partition used in the finite-chart norm of the Statement. Choose nested chart subdomains $U'_j\Subset U''_j\Subset U_j$ with $\operatorname{supp}\chi_j\subset U'_j$; the $U'_j$ cover $X$ because $\sum_j\chi_j=1$. Apply the interior estimate [F9] to each local equation from step 1.2, for both $q=0,1$. It gives $H^{k+2}(U'_j)$ regularity and bounds each local norm by $C_j(\|f\|_{H^k(U''_j)}+\|u\|_{L^2(U''_j)})$. To compare these local norms with the fixed global norms at any finite order $r$, write each coefficient as the finite sum of the partitioned coefficients in the other frames. Repeated chain [F14] and Leibniz rules express each derivative through order $r$ as a finite sum of transformed derivatives through order $r$, multiplied by smooth transition derivatives. On compact overlaps those factors and coordinate Jacobians are bounded, with the Jacobians bounded away from zero. Changing variables therefore bounds each local $H^r$ norm on a relatively compact set by the global $H^r$ norm; restriction and [F7] give the converse bounds for partitioned coefficients. These inequalities extend from smooth forms to the completions by testing weak derivatives. Apply this with $r=k$ to control $\|f\|_{H^k(U''_j)}$, and use [F7] to bound $\chi_j u$ in $H^{k+2}$ by the local estimate. Each such coefficient is a compactly supported $H^{k+2}$ class; by [F6], approximate it smoothly in its chart, multiply by a cutoff equal to one near its support from [F13], extend by zero and sum. The comparison just proved makes these global smooth forms converge in the defining $H^{k+2}$ norm, placing $u$ in that completion. Summing the finite estimates now proves the asserted global bound, including $k=0$. The same norm comparison in order $r$ gives a continuous injective inclusion $H^r\to L^2$: if a smooth Cauchy sequence has zero $L^2$ limit, testing every local derivative against compactly supported tests forces all its derivative limits to zero. [F3, F6, F7, F8, F9, F11, F13, F14, step 1.2, algebra]

3.1 Choose a finite holomorphic chart/frame cover and a subordinate partition of unity as in [F8]. Summing the finitely many local estimates of step 2.1, and using equivalence of the positive smooth metric and volume weights with Euclidean norms on each compact support, gives $\|u\|_{H^1}\le C(\|\bar D u_0\|_{L^2}+\|\bar D^*u_1\|_{L^2}+\|u\|_{L^2})$. The local formulas [F1] also give the reverse bound of the graph norm by the $H^1$ norm. [F1, F8, step 2.1, algebra]

4.1 Step 2.1 shows every $u\in\mathcal V$ has local $H^1$ coefficients, in the finite-chart norm of [F11]. For each of the finitely many partitioned coefficients, Meyers–Serrin [F6] gives smooth approximants in its chart; multiplying them by a compactly supported cutoff equal to one near the coefficient's support preserves convergence by [F7]. Converting these compactly supported coefficients back to sections and summing gives smooth global forms converging to $u$ in the finite-chart $H^1$ norm, so $u\in H^1(X,\Lambda^{0,\bullet}\otimes E)$. Conversely, if $u\in H^1$, choose smooth $u_n\to u$ in that norm by its completion definition. The first-order formulas [F1] make $\bar Du_{n,0}$ and $\bar D^*u_{n,1}$ converge in $L^2$; closedness of the operators [F2] gives $u\in\mathcal V$. Together with step 3.1 this proves equality of the spaces, equivalence and completeness of their norms, and density of smooth forms in the graph norm. [F1, F2, F6, F7, F11, step 2.1, step 3.1]

5.1 If $u\in\operatorname{dom}\Delta''$, [F2] gives $u\in\mathcal V=H^1$. For every smooth test $v$, the Hilbert-adjoint identities yield $\langle\Delta''u,v\rangle=\langle\bar D u_0,\bar Dv_0\rangle+\langle\bar D^*u_1,\bar D^*v_1\rangle$; hence the operator equation is the distributional equation used in step 2.2. Taking $f=\Delta''u$ proves the domain corollary. Finally, the first-order form inner product adds $\langle u,v\rangle_{L^2}$, so it represents $I+\Delta''$, as claimed. [F2, step 4.1, step 2.2]

6.1 Steps 1.1–5.1 prove the graph-domain $H^1$ estimate, smooth graph-norm density, and the $H^{k+2}$ estimates for distributional and Hilbert-domain solutions. Full AC is spent only through Sobolev cutoff localisation; the remaining Countable Choice instances are inherited from the cited analytic and Hilbert-space interfaces. [F10, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1] ∎

## Source notes

Demailly's compact-manifold estimate is stated for a general elliptic operator and explicitly cites Hörmander for the underlying elliptic PDE theory. Hunter's Theorem 4.28 gives the corresponding interior higher-regularity theorem and refers to another source for its detailed proof. Here the higher-order estimate is proved by the finite chart reduction and the library's interior $H^{k+2}$ theorem; the first-order graph estimate is derived directly from the local Cauchy–Riemann formulas. No claim is made that the cited source passages alone prove the bundle-valued domain statement.

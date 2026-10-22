---
id: lem-qftx-wavefront-chart-invariance
kind: lemma
title: Wavefront sets are invariant under smooth coordinate changes
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-qftx-distributions-on-smooth-manifolds
  - def-qftx-local-wavefront-set
  - def-qftx-wavefront-hadamard
  - def-countable-choice
  - thm-local-finite-order-characterization-of-distributions
  - thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier
  - thm-fourier-inversion-on-schwartz-space
  - lem-schwartz-parameter-pairing-and-integral-interchange
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian
  - lem-test-function-cutoffs-and-euclidean-localization
dependency_roles:
  def-qftx-distributions-on-smooth-manifolds: mathematical-premise
  def-qftx-local-wavefront-set: mathematical-premise
  def-qftx-wavefront-hadamard: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-local-finite-order-characterization-of-distributions: mathematical-premise
  thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  lem-schwartz-parameter-pairing-and-integral-interchange: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, Appendix A
      url: https://arxiv.org/html/1208.1428
      locator: Full-text Appendix A.5–A.7, Fourier characterization and the chart-independent cotangent formulation; Appendix A.7 gives a proof outline, with the estimates made explicit here.
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Full 38-page paper, printed pp. 7–8, Section 2.1, local Fourier definition and lift to manifolds.
verification:
  precheck: pending
---

## Statement

For a distribution $u$ on a smooth manifold, the chartwise rapid-decay definition of its wavefront set is independent of the chart: if $y=\psi(x)$, its covector coordinates satisfy $\eta=(D\psi(x))^{-T}\xi$. The resulting $\operatorname{WF}(u)$ is closed and conic in $T^*M\setminus0$. For distributions $u,v$ and a smooth diffeomorphism $\psi$, one has $\operatorname{WF}(u+v)\subseteq\operatorname{WF}(u)\cup\operatorname{WF}(v)$ and $\operatorname{WF}(\psi^*u)=\psi^*\operatorname{WF}(u)$. Finally, $\operatorname{WF}(u)=\varnothing$ exactly when $u$ is represented by a smooth scalar function in every chart.

## Statement references

[[def-qftx-wavefront-hadamard]]

## Facts & Assumptions

**Given:** Countable Choice, a smooth manifold $M$, and distributions $u,v\in\mathcal D'(M)$.

[A1] Assume only the Axiom of Countable Choice $\mathrm{AC}_\omega$ [[def-countable-choice]], used for the Schwartz Fourier inversion supplier in step 4.1.

[F1] A manifold distribution is a continuous bilinear-functional dual to compactly supported smooth densities; its chart representatives transform by the density Jacobian ([[def-qftx-distributions-on-smooth-manifolds]]).

[F2] In each chart, the local wavefront set is the complement of pairs where a localized Fourier transform decays faster than every power in an open cone; the global set is the union of chartwise cotangent images ([[def-qftx-local-wavefront-set]], [[def-qftx-wavefront-hadamard]]).

[F3] On each compact support, a distribution has a finite derivative-order bound, with its own order and constant ([[thm-local-finite-order-characterization-of-distributions]]).

[F4] A compactly supported distribution has a smooth polynomially bounded localized Fourier transform with the cutoff-pairing formula in the stated $2\pi$ convention ([[thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier]]).

[F5] For a Schwartz test, the $2\pi$ Fourier convention is $\widehat f(\xi)=\int f(x)e^{-2\pi i x\cdot\xi}\,dx$, with inverse $f(x)=\int\widehat f(\xi)e^{2\pi i x\cdot\xi}\,d\xi$ under $\mathrm{AC}_\omega$ ([[thm-fourier-inversion-on-schwartz-space]]).

[F6] A Schwartz-parameter family with integrable seminorm majorants may be integrated through a tempered-distribution pairing under $\mathrm{AC}_\omega$ ([[lem-schwartz-parameter-pairing-and-integral-interchange]]).

[F7] Cotangent coordinates transform by the inverse transpose Jacobian ([[lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian]]).

[F8] A compact subset of a coordinate domain admits smooth compactly supported cutoffs equal to one near it ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F9] Absolutely integrable Fourier convolution integrands may be reordered by Fubini under $\mathrm{AC}_\omega$ ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

**Given:** [A1] and [F1]–[F9].

1.1 In a chart, localize $u$ by a cutoff $\chi$ and write $\widehat{\chi u}(\xi)=\langle u,\chi(x)e^{-2\pi i x\cdot\xi}|dx|\rangle$. The finite-order bound [F3] gives polynomial growth in $\xi$ by differentiating the test at most its fixed order; parameter derivatives multiply it by powers of $x$, which remain bounded on the fixed compact support. Difference quotients converge in each fixed-support test seminorm by the Taylor remainder bound, so pairing shows that $\widehat{\chi u}$ is smooth. This is also the localized Fourier transform in [F4]. [A1, F1, F2, F3, F4, algebra]

2.1 Suppose $(p,\xi_0)$ is regular for $u$ in the $x$ chart, witnessed by a cutoff $\chi_x$ and an open cone $\Gamma_x$. Let $y=\psi(x)$ be a smooth coordinate change, restrict to a compact patch about $p$, and put $\eta_0=(D\psi(p))^{-T}\xi_0$. Shrink the patch and choose nested cones $\Gamma_0\Subset\Gamma_1\Subset\Gamma_x$ around $\xi_0$ and a target cone $V$ around $\eta_0$ so that $D\psi(x)^TV\subset\Gamma_0$ throughout the patch. Choose a target cutoff $\chi_y$ equal to one near $p$ and supported where $\chi_x=1$, using [F8]. The target localized Fourier value is the source distribution paired with $a_\eta(x)=\chi_y(\psi(x))|\det D\psi(x)|e^{-2\pi i\psi(x)\cdot\eta}$; because $\chi_x=1$ on its support this is also the pairing with $\chi_xu$. Fourier inversion [F5], passed through this compactly supported distribution by [F6], expresses the value as $\int\widehat{\chi_xu}(\xi)\widehat{a_\eta}(-\xi)\,d\xi$. The phase in $\widehat{a_\eta}(-\xi)$ is $2\pi(x\cdot\xi-\psi(x)\cdot\eta)$, with gradient $2\pi(\xi-D\psi(x)^T\eta)$. In the near-stationary region $|\xi-D\psi(x)^T\eta|\le c(|\xi|+|\eta|)$, for sufficiently small $c>0$, cone separation gives $\xi\in\Gamma_x$ and $|\xi|\asymp|\eta|$; there $\widehat{\chi_xu}(\xi)$ decreases faster than every power, while $|\widehat{a_\eta}(-\xi)|\le\|a_\eta\|_1$ is uniformly bounded, and the region has only polynomial volume in $|\eta|$. On the complementary region the phase gradient is bounded below by $c(|\xi|+|\eta|)$; repeated integration by parts gives arbitrary powers of joint decay for $\widehat{a_\eta}(-\xi)$. The polynomial bound [F3] for $\widehat{\chi_xu}$ then makes this part rapidly decreasing after integration. This proves regularity in the target chart. [A1, F1, F3, F4, F5, F6, F7, F8, step 1.1, construct]

3.1 Applying step 2.1 also to $\psi^{-1}$ proves equivalence of regularity in both charts, and [F7] gives exactly $\eta=(D\psi)^{-T}\xi$. Regularity is open because the same cutoff and a smaller cone work for nearby base points; positive rescaling of a covector does not change rapid decay. Hence its complement is closed and conic. [F2, F7, step 2.1]

3.2 Suppose $\chi_1$ is a regularity witness for $u$ on an open cone $\Gamma$, and let $\rho\in C_c^\infty$ have support where $\chi_1=1$. If $\Gamma'$ is an open cone whose closure of directions on the unit sphere is contained in $\Gamma$, then $\widehat{\rho u}$ is rapidly decreasing on $\Gamma'$. Indeed, $\rho u=\rho(\chi_1u)$ and Fourier inversion gives $\widehat{\rho u}=\widehat\rho*\widehat{\chi_1u}$; passing the Schwartz integral through the compactly supported distribution uses [F6]. Repeated integration by parts makes $\widehat\rho$ rapidly decreasing, and [F3] bounds $\widehat{\chi_1u}$ polynomially. Choose an intermediate cone with closure of directions between those of $\Gamma'$ and $\Gamma$. In the convolution, for frequencies $\eta$ in this intermediate cone with $|\eta|\ge|\xi|/2$, the second factor is rapidly decreasing at frequency comparable to $|\xi|$. If $|\eta|<|\xi|/2$, then $|\xi-\eta|>|\xi|/2$; for the remaining frequencies, $\eta$ lies outside the intermediate cone and $|\eta|\ge|\xi|/2$, so angular separation gives $|\xi-\eta|\ge c(|\xi|+|\eta|)$ for some $c>0$. In these latter regions the first factor is rapidly decreasing, while [F3] bounds the other factor polynomially. These estimates give the arbitrary-power bound for $|\xi|\ge1$ on $\Gamma'$, and [F4] gives boundedness on bounded sets. The convolution is absolutely integrable by the same estimates, and [F9] justifies its Fourier-integral identity. Applying this cutoff transfer to a common $\rho$ for witnesses for $u$ and $v$, and intersecting their smaller cones, gives rapid decay for $\widehat{\rho(u+v)}=\widehat{\rho u}+\widehat{\rho v}$. This proves $\operatorname{WF}(u+v)\subseteq\operatorname{WF}(u)\cup\operatorname{WF}(v)$. For a diffeomorphism, step 2.1 gives the cotangent image inclusion for pullback; applying the same argument to $\psi^{-1}$ gives the reverse inclusion. [A1, F2, F3, F4, F5, F6, F8, F9, step 2.1, algebra]

4.1 If $u$ is smooth, integration by parts in a compact chart cutoff gives rapid decay in every cone. Conversely, suppose $\operatorname{WF}(u)=\varnothing$ and fix a point $p$ in a chart. In dimension zero every distribution is locally a scalar function, so assume the chart dimension is at least one. Form the set of all open cones $\Gamma'$ for which there exist a regularity witness $(\chi,\Gamma)$ at $p$ with the closure of the directions of $\Gamma'$ on the unit sphere contained in $\Gamma$. This set covers the unit covector sphere: every direction has a witness by emptiness of the local wavefront set, and its open cone contains a smaller cone about that direction. Compactness gives a finite subcover $\Gamma'_1,\ldots,\Gamma'_m$. For each member of this finite family, take a corresponding witness $\chi_j,\Gamma_j$; finite choice suffices. Their witness cutoffs all equal one on a neighborhood of $p$. By [F8], choose one cutoff $\rho$ equal to one near $p$ and supported in the intersection of those neighborhoods. Step 3.2 shows that the single localization $\rho u$ has rapidly decreasing Fourier transform on each $\Gamma'_j$. Since these finitely many cones cover the unit sphere, $\widehat{\rho u}$ is rapidly decreasing in every direction: for each $N$, take the maximum of the finitely many cone bounds outside a bounded ball. Therefore every differentiated inverse Fourier integral is absolutely convergent and defines a smooth function. Fourier inversion [F5] and the pairing interchange [F6], applied after a cutoff equal to one near $\operatorname{supp}(\rho u)$, identify this function with the compactly supported distribution $\rho u$. Hence $u$ is smooth near $p$; as $p$ was arbitrary, it is smooth in every chart. [A1, F2, F5, F6, F8, step 3.2, algebra] ∎

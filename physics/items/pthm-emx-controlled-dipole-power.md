---
id: pthm-emx-controlled-dipole-power
kind: physics-theorem
title: "Finite multipole expansion with an absolute dipole-power error"
domain: physics
status: published
origin: pipeline
dependency_level: 3
deps:
  - def-countable-choice
  - def-em-electric-moments
  - def-em-si-conventions
  - def-factorial-and-falling-factorial
  - def-finite-sum
  - def-cross-product-in-r3
  - def-euclidean-inner-product
  - def-integrable-real-and-complex-functions-and-their-integrals
  - lem-bochner-integral-norm-inequality
  - lem-em-parameter-integrals
  - lem-em-sphere-zonal-moments
  - lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves
  - lem-finite-sum-laws
  - lem-cross-product-is-bilinear-alternating-and-orthogonal
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - pthm-emx-transverse-radiation-data
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - thm-extreme-value-metric
  - thm-heine-cantor-metric
  - thm-integral-triangle-inequality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-cross-product-norm-is-the-two-vector-gram-determinant
dependency_roles:
  def-countable-choice: mathematical-premise
  def-em-electric-moments: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-factorial-and-falling-factorial: mathematical-premise
  def-finite-sum: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  lem-em-parameter-integrals: mathematical-premise
  lem-em-sphere-zonal-moments: mathematical-premise
  lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  pthm-emx-transverse-radiation-data: physical-result
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Finite Taylor truncations of the retarded current moment and their far-field and radiated-power errors for smooth conserved volume sources supported in a fixed spatial ball. The first truncation is the electric-dipole term and has an explicit absolute source-time-variation error. No relative estimate at angular nodes, unconditional frequency or ka approximation, empirical measurement, point-source field, self-force or radiation-reaction claim is made."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Niklas Beisert, Elektrodynamik, Vorlesungsskript, ETH Zürich 2024 FS, complete 176-page course script"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§11.3, printed pp. 11.10–11.13 (PDF pp. 130–133): the Taylor expansion of the retarded phase into electric and magnetic multipole moments, the electric-dipole angular pattern and the source-size-versus-wavelength qualification."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin, complete author-hosted HTML lecture notes"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node94.html"
      locator: "Chapter 9, node 94, “The Hertzian dipole”: the short-source condition, retarded current integral, transverse far field, angular pattern and radiated power; the finite-derivative remainder here is proved independently."
---

## Statement

Assume Countable Choice and the source, SI and retarded-field hypotheses of the preceding transverse-radiation theorem on a nondegenerate compact retarded-time interval $K$. Fix an integer $N\ge0$. Define the $N$th finite retarded-current Taylor coefficient by

$$\mathcal J_N(n,u):=\sum_{k=0}^{N}\frac{1}{k!\,c^k}\int_{B_a}(n\cdot y)^k\,\partial_t^{k+1}J(y,u)\,dy,$$

and define the source-scale remainder

$$\mathcal R_N(u):=\frac{a^{N+1}}{(N+1)!\,c^{N+1}}\int_{B_a}\sup_{|s-u|\le a/c}\left|\partial_t^{N+2}J(y,s)\right|\,dy.$$

The coefficient $\mathcal J_N$ and the remainder $\mathcal R_N$ both have units $\mathrm A\,\mathrm m\,\mathrm s^{-1}$. The supremum is finite and integrable in $y$. Let

$$A_N(u):=\sup_{n\in S^2}|\mathcal J_N(n,u)|,\qquad P(u):=\lim_{r\to\infty}\int_{S^2}r^2n\cdot S(rn,u+r/c)\,d\Omega(n),$$

where $P(u)$ exists by the preceding theorem. Then uniformly for $n\in S^2$ and $u\in K$,

$$|V(n,u)-\mathcal J_N(n,u)|\le\mathcal R_N(u),$$

$$\left|E(rn,u+r/c)-\frac{\mu_0}{4\pi r}n\times(n\times\mathcal J_N(n,u))\right|\le\frac{\Gamma_E}{r^2}+\frac{\mu_0\mathcal R_N(u)}{4\pi r}\qquad(r\ge2a),$$

$$\left|P(u)-\frac{\mu_0}{16\pi^2c}\int_{S^2}|n\times\mathcal J_N(n,u)|^2\,d\Omega(n)\right|\le\frac{\mu_0}{4\pi c}\bigl(2A_N(u)+\mathcal R_N(u)\bigr)\mathcal R_N(u).$$

For $N=0$, $\mathcal J_0(n,u)=p''(u)$ for the time-dependent electric dipole moment $p(u):=\int_{B_a}y\rho(y,u)\,dy$, and $\mathcal R_0(u)=\frac ac\int_{B_a}\sup_{|s-u|\le a/c}|J_{tt}(y,s)|\,dy$. Consequently

$$\left|P(u)-\frac{\mu_0}{6\pi c}|p''(u)|^2\right|\le\frac{\mu_0}{4\pi c}\left(2|p''(u)|\mathcal R_0(u)+\mathcal R_0(u)^2\right).$$

Every finite truncation has its own explicit derivative remainder. No convergence of the infinite Taylor series and no relative error at an angular node are asserted.

## Statement references

[[pthm-emx-transverse-radiation-data]]

[[def-em-electric-moments]]

[[def-em-si-conventions]]

[[def-factorial-and-falling-factorial]]

[[def-finite-sum]]

## Facts & Assumptions

**Given:** Countable Choice; $a,c,\mu_0>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$; the smooth conserved spatially compact source of the preceding theorem; an integer $N\ge0$; and the displayed source moments on the fixed time interval $K$.

[A1] Assume $\mathrm{AC}_\omega$ for the source integrals, surface integrals and the Banach-valued Taylor remainder supplier. ([[def-countable-choice]])

[F1] The preceding theorem proves that $V(n,u)=\int_{B_a}J_t(y,u+n\cdot y/c)\,dy$ and that the exact retarded-time flux is $\frac{\mu_0}{16\pi^2c}\int_{S^2}|n\times V(n,u)|^2\,d\Omega$. ([[pthm-emx-transverse-radiation-data]])

[F2] The time-dependent electric dipole moment is the fixed-time source moment $p(u)=\int_{B_a}y\rho(y,u)\,dy$ about the chart origin; its units are $\mathrm C\,\mathrm m$. ([[def-em-electric-moments]] (a))

[F3] On a fixed compact measurable set, differentiation under the integral is valid for a smooth integrand; the divergence theorem gives $\int_\Omega\operatorname{div}F=\int_{\partial\Omega}F\cdot\nu$ for a $C^1$ field on a bounded $C^1$ domain. ([[lem-em-parameter-integrals]], [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]])

[F4] For a $C^{N+1}$ curve $f$ in the Banach space $\mathbb R^3$, Taylor's formula has an integral remainder, including negative increments; the norm of a Bochner integral is at most the integral of the norm. ([[lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves]], [[lem-bochner-integral-norm-inequality]])

[F5] Factorials and finite sums use the canonical factorial and finite-sum definitions, with the standard finite-sum algebra. ([[def-factorial-and-falling-factorial]], [[def-finite-sum]], [[lem-finite-sum-laws]])

[F6] The Lebesgue integral is linear and satisfies $|\int f|\le\int|f|$; the nonnegative integral is monotone. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[F7] The cross product is bilinear; for $n\in S^2$, $|n\times w|\le|w|$ and $\int_{S^2}|n\times w|^2\,d\Omega=(8\pi/3)|w|^2$. ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]], [[lem-em-sphere-zonal-moments]] (d))

[F8] Continuous functions on the compact products used below are bounded and uniformly continuous; a smooth function supported in $\overline B_a$ and its derivatives vanish outside that ball. ([[thm-extreme-value-metric]], [[thm-heine-cantor-metric]])

## Proof

**Proof technique:** identify the dipole coefficient by differentiating its source moment and integrating continuity by parts, apply vector-valued Taylor's theorem pointwise in the source position, then propagate the absolute remainder through the transverse field and power formulas.

1.1 Dipole moment identities. The compact-ball verification in the preceding transverse-radiation theorem [F1] applies to the same $a>0$ and Countable Choice hypothesis: $\overline B_a$ is closed and bounded, hence compact; it is Borel and Lebesgue measurable; and $\lambda_3(\overline B_a)\le\lambda_3(B_{2a})<\infty$. Thus it is an admissible fixed integration set for [F3]. For each $i\in\{1,2,3\}$ put $p_i(u)=\int_{B_a}y_i\rho(y,u)\,dy$. Smoothness and vanishing of $\rho,J$ for $|y|>a$ imply that $\rho$, $J_i$ and their time derivatives vanish on $\partial B_a$. Thus the integrals of $y_i\rho$ and $y_i\rho_t$ over $B_a$ agree with those over that compact measurable finite-measure set $\overline B_a$. Apply the set form of [F3] with integration set $\overline B_a$ and parameter $u$ to $f_i(y,u)=y_i\rho(y,u)$; its parameter derivative is $y_i\rho_t(y,u)$, and both are continuous on a neighborhood of $\overline B_a$ times any compact time interval. This gives $p_i'(u)=\int_{B_a}y_i\rho_t(y,u)\,dy$. Fix $R_0>a$ and apply the divergence theorem to $y\mapsto y_iJ(y,u)$ on $B_{R_0}$. The boundary flux is zero because $J=0$ near $\partial B_{R_0}$, while $\operatorname{div}(y_iJ)=J_i+y_i\operatorname{div}J$. Using $\rho_t=-\operatorname{div}J$ and the vanishing of the source outside $B_a$ gives $p_i'(u)=\int_{B_a}J_i(y,u)\,dy$. For each $i$, the integrals of $J_i$ and $J_{i,t}$ over $B_a$ agree with those over $\overline B_a$; the closed ball has the compactness, measurability and finite measure just verified using [F1]. Both integrands are continuous on a neighborhood of $\overline B_a$ times any compact time interval. Apply the set form of [F3] on $\overline B_a$ separately to each component $J_i$ with parameter $u$; differentiating the preceding identity gives $p_i''(u)=\int_{B_a}J_{i,t}(y,u)\,dy$. Collecting the three component identities yields $p''(u)=\int_{B_a}J_t(y,u)\,dy$. [given, F1, F2, F3, algebra, A1]

1.2 Finiteness of the remainder. For fixed $u$, define $g_u(y):=\max_{|s-u|\le a/c}|\partial_t^{N+2}J(y,s)|$. The maximum exists and is finite by [F8]. For $y,y'\in\overline B_a$, $\displaystyle |g_u(y)-g_u(y')|\le\sup_{|s-u|\le a/c}\left||\partial_t^{N+2}J(y,s)|-|\partial_t^{N+2}J(y',s)|\right|\le\sup_{|s-u|\le a/c}|\partial_t^{N+2}J(y,s)-\partial_t^{N+2}J(y',s)|.$ Uniform continuity in [F8] makes the last expression tend to zero as $y'\to y$. Thus $g_u$ is continuous and bounded on $\overline B_a$, hence integrable on $B_a$; this proves that $\mathcal R_N(u)$ is finite. [given, F6, F8, A1]

2.1 Finite Taylor expansion. Fix $n\in S^2$, $u\in K$, and $y\in B_a$, and put $\tau=n\cdot y/c$, so $|\tau|\le a/c$. Apply [F4] to the curve $s\mapsto J_t(y,s)$ with Taylor order $N$ at $u$ and increment $\tau$. It gives $\displaystyle J_t(y,u+\tau)=\sum_{k=0}^{N}\frac{\tau^k}{k!}\partial_t^{k+1}J(y,u)+R_{N+1}(y),\qquad |R_{N+1}(y)|\le\frac{|\tau|^{N+1}}{(N+1)!}\sup_{|s-u|\le a/c}|\partial_t^{N+2}J(y,s)|.$ Integrate this identity over $B_a$. Linearity identifies the left integral with $V(n,u)$ and the polynomial integral with $\mathcal J_N(n,u)$. The integral triangle inequality and $|\tau|\le a/c$ then give $|V(n,u)-\mathcal J_N(n,u)|\le\mathcal R_N(u)$. Since $\mathcal J_N$ is a finite polynomial in $n$ with finite source moments, it is continuous on the compact sphere and $A_N(u)<\infty$. [step 1.2, F1, F4, F5, F6, F8, A1]

3.1 Field remainder. By the transverse estimate of [F1], $\displaystyle \left|E(rn,u+r/c)-\frac{\mu_0}{4\pi r}n\times(n\times V(n,u))\right|\le\frac{\Gamma_E}{r^2}.$ Subtract the same leading expression with $V$ replaced by $\mathcal J_N$. The triangle inequality, $|n\times(n\times w)|=|n\times w|\le|w|$ from [F7], and step 2.1 give $\displaystyle \left|E(rn,u+r/c)-\frac{\mu_0}{4\pi r}n\times(n\times\mathcal J_N(n,u))\right|\le\frac{\Gamma_E}{r^2}+\frac{\mu_0}{4\pi r}|V(n,u)-\mathcal J_N(n,u)|\le\frac{\Gamma_E}{r^2}+\frac{\mu_0\mathcal R_N(u)}{4\pi r}.$ [step 2.1, F1, F6, F7, algebra, A1]

3.2 Power remainder. The exact flux formula [F1] and step 2.1 give, pointwise in $n$, $\displaystyle \left||n\times V|^2-|n\times\mathcal J_N|^2\right|\le(|n\times V|+|n\times\mathcal J_N|)\,|n\times(V-\mathcal J_N)|\le(|V|+|\mathcal J_N|)\mathcal R_N.$ Since $|V|\le|\mathcal J_N|+\mathcal R_N$ by step 2.1, the right side is at most $(2|\mathcal J_N|+\mathcal R_N)\mathcal R_N\le(2A_N+\mathcal R_N)\mathcal R_N$. Integrating over the sphere, whose area is $4\pi$ by [F7], and multiplying by $\mu_0/(16\pi^2c)$ gives the stated power error. [step 2.1, F1, F6, F7, algebra, A1]

4.1 Dipole specialization. At $N=0$, $\mathcal J_0(n,u)=\int_{B_a}J_t(y,u)\,dy=p''(u)$ by step 1.1 and $\mathcal R_0(u)=\frac ac\int_{B_a}\sup_{|s-u|\le a/c}|J_{tt}(y,s)|\,dy$ by its definition. It is independent of $n$; the exact sphere moment [F7] therefore gives $\displaystyle \frac{\mu_0}{16\pi^2c}\int_{S^2}|n\times p''(u)|^2\,d\Omega=\frac{\mu_0}{16\pi^2c}\frac{8\pi}{3}|p''(u)|^2=\frac{\mu_0}{6\pi c}|p''(u)|^2.$ Substitution in step 3.2 gives the displayed absolute dipole-power error. It gives no relative bound when the leading amplitude vanishes. [step 1.1, step 3.2, F2, F6, F7, algebra, A1] ∎

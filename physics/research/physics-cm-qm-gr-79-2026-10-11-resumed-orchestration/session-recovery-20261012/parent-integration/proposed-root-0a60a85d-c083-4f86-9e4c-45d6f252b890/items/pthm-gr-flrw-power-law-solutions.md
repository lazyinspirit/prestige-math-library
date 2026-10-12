---
id: pthm-gr-flrw-power-law-solutions
kind: physics-theorem
title: "The flat barotropic power-law solutions of the homogeneous cosmological field equations"
status: draft
origin: session
domain: physics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [post-gr-flrw-homogeneous-cosmological-model, pthm-gr-flrw-field-equations-reduction, def-gr-flrw-model-data, def-gr-flrw-friedmann-system, def-gr-flrw-spatial-model, def-gr-perfect-fluid-matter-model, def-gr-si-unit-and-coordinate-conventions, def-derivative, thm-algebra-of-derivatives, thm-chain-rule, def-real-power, thm-real-power-continuity-and-derivatives, thm-real-power-laws]
dependency_roles:
  def-real-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-real-power-laws: mathematical-premise
  post-gr-flrw-homogeneous-cosmological-model: physical-assumption
  pthm-gr-flrw-field-equations-reduction: physical-result
  def-gr-flrw-model-data: mathematical-premise
  def-gr-flrw-friedmann-system: mathematical-premise
  def-gr-flrw-spatial-model: mathematical-premise
  def-gr-perfect-fluid-matter-model: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
physical_scope: "Explicit exact solutions of the adopted field law for the flat (k=0), Lambda=0 homogeneous model with a comoving perfect fluid whose equation of state is p = w epsilon with a constant w > -1, on a open half-line: the expanding power-law scale factors and their energy densities. The statement is a conditional verification inside the adopted model; it asserts no uniqueness, no extension beyond the displayed interval, no value of the constants, and no comparison with observations."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8 (8.21)-(8.23) and (8.49): the equation of state p = w rho, rho proportional to a^{-3(1+w)} and the flat dust solution a proportional to t^{2/3}, printed pp. 221-222 and 226 (PDF pp. 228-229 and 233); (8.53): the flat radiation solution a proportional to t^{1/2}, printed p. 227 (PDF p. 234)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.6.2: the flat single-fluid power-law solutions a(t) = (t/t_0)^{2/(3+3w)} and the dust and radiation exponents, printed p. 203 (PDF p. 210)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019 revision), sections 1.2.2, 1.2.3 and 1.3.1: the density scaling rho proportional to a^{-3(1+w)} and the Einstein-de Sitter universe, printed pp. 28-29 and 33-34 (PDF pp. 34-35 and 39-40)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/cosmo/cosmo.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the homogeneous cosmological model of
[[post-gr-flrw-homogeneous-cosmological-model]] with the flat standard spatial
model ($k=0$, Euclidean space), the field law of the model with
$\Lambda=0$, conversion constant $c>0$ and the framework's $G_N>0$, and a
comoving perfect-fluid matter sector whose equation of state is
$p=w\varepsilon$ for a real constant $w>-1$
([[def-gr-flrw-spatial-model]] clause (d),
[[def-gr-perfect-fluid-matter-model]],
[[def-gr-si-unit-and-coordinate-conventions]]).

**(a)** Let $t_0\in\mathbb R$, let $t_*>0$ be a reference time, let $A>0$ be a
reference length, and put

$$q:=\frac{2}{3(1+w)},\qquad I:=(t_0,\infty),\qquad a(t):=A\left(\frac{t-t_0}{t_*}\right)^{q},\qquad \varepsilon(t):=\frac{3c^2q^2}{8\pi G_N\,(t-t_0)^2},$$

with $p(t):=w\varepsilon(t)$. Then the data
$(c,G_N,0,I,0,a,\varepsilon,p)$ satisfy the Friedmann equation (F) and the
acceleration equation (A) on $I$
([[def-gr-flrw-friedmann-system]]), so by
[[pthm-gr-flrw-field-equations-reduction]] the adopted field equations hold on
the spacetime $I\times\Sigma$. In particular:

- for $w=0$ (dust) one has $q=\tfrac23$ and
  $a(t)=A\bigl((t-t_0)/t_*\bigr)^{2/3}$;
- for $w=\tfrac13$ (radiation) one has $q=\tfrac12$ and
  $a(t)=A\bigl((t-t_0)/t_*\bigr)^{1/2}$.

**(b)** On $I$ the density scales as
$\varepsilon(t)=C\,a(t)^{-3(1+w)}$ with the positive constant
$C=A^{3(1+w)}\dfrac{3c^2q^2}{8\pi G_Nt_*^2}$, and the continuity
equation (C) holds.

The theorem asserts no uniqueness of solutions of the reduced system for the
stated equation of state, no extension of the solutions beyond the displayed
interval, and no value of $A,t_*,t_0$ or of the constants.

## Facts & Assumptions

**Given:** The adopted model with the flat standard spatial model, $\Lambda=0$, the field law, a comoving perfect fluid with equation of state $p=w\varepsilon$, a real constant $w>-1$, and the data $q,t_*,A,I,a,\varepsilon,p$ displayed in the statement.

[L1] The spatial model with $k=0$ is the Euclidean standard model and satisfies the curvature condition of [[def-gr-flrw-spatial-model]]; the metric, comoving congruence and Hubble parameter are those of [[def-gr-flrw-model-data]], and the model's geometry and matter content are the adopted assumptions of [[post-gr-flrw-homogeneous-cosmological-model]].

[L2] For $a(t)=A\bigl((t-t_0)/t_*\bigr)^{q}$ on $I$ with $q\neq0$: the function is smooth and strictly positive, $H(t)=\dot a/a=q/(t-t_0)$, and $\ddot a(t)/a(t)=q(q-1)/(t-t_0)^2$ ([[def-real-power]], [[thm-real-power-continuity-and-derivatives]], [[thm-real-power-laws]], [[def-derivative]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]]).

[L3] The equations (F) and (A) of [[def-gr-flrw-friedmann-system]] read, for $k=\Lambda=0$, $H^2=\frac{8\pi G_N}{3c^2}\varepsilon$ and $\frac{\ddot a}{a}=-\frac{4\pi G_N}{3c^2}(\varepsilon+3p)$, and (C) reads $\dot\varepsilon+3H(\varepsilon+p)=0$; under [[pthm-gr-flrw-field-equations-reduction]], a datum satisfying (F) and (A) satisfies the adopted field law on the spacetime.

[L4] For the displayed data, $\varepsilon(t)=\frac{3c^2q^2}{8\pi G_N}(t-t_0)^{-2}$ and $p=w\varepsilon$, so $\varepsilon+3p=(1+3w)\varepsilon$ and $\varepsilon+p=(1+w)\varepsilon$; moreover $q\cdot3(1+w)=2$ by the definition of $q$, which gives $3(1+w)q=2$ and $\frac{2}{3q}=1+w$.

## Proof

**Proof technique:** verify the two reduced equations by direct substitution in the displayed data.

1.1 (Smoothness and derivatives.) The function $a$ is smooth and strictly positive on $I$ because $t-t_0>0$, $t_*>0$, $A>0$ and a positive power of a positive number is positive; $\varepsilon$ is smooth and strictly positive on $I$. By [L2], $H=q/(t-t_0)$ and $\ddot a/a=q(q-1)/(t-t_0)^2$; by [L4], $p=w\varepsilon$ with $w>-1$, so $q=2/(3(1+w))$ is a positive real number. In particular all the data of a Friedmann-system datum are present, and $\varepsilon>0$ on $I$. [L1, L2, L4, algebra]

2.1 (Friedmann equation.) Since $k=0$, (F) is $H^2=\frac{8\pi G_N}{3c^2}\varepsilon$. By step 1.1, $H^2=q^2/(t-t_0)^2$, while the right-hand side is $\frac{8\pi G_N}{3c^2}\cdot\frac{3c^2q^2}{8\pi G_N(t-t_0)^2}=q^2/(t-t_0)^2$. The two sides agree identically on $I$; the cancellation of $G_N$, $c$ and the numerical constants is exact, and no choice of $A$ or $t_*$ enters (F). [L3, step 1.1, algebra]

2.2 (Acceleration equation.) Since $\Lambda=0$, (A) is $\frac{\ddot a}{a}=-\frac{4\pi G_N}{3c^2}(\varepsilon+3p)$. By steps 1.1 and [L4], the left-hand side is $q(q-1)/(t-t_0)^2$ and the right-hand side is $-\frac{4\pi G_N}{3c^2}(1+3w)\,\frac{3c^2q^2}{8\pi G_N(t-t_0)^2}=-\frac{(1+3w)q^2}{2(t-t_0)^2}$. The two agree exactly when $q(q-1)=-\tfrac12(1+3w)q^2$; since $q>0$, this is equivalent to $q-1=-\tfrac12(1+3w)q$, that is, to $2q-2=-(1+3w)q$, that is, to $3(1+w)q=2$, which is exactly the defining relation for $q$ by [L4]. Hence (A) holds on $I$. [L3, L4, step 1.1, algebra]

3.1 (Conclusion: field equations, density scaling and continuity.) By steps 2.1 and 2.2 the datum satisfies (F) and (A) on $I$, so by [L3] and [[pthm-gr-flrw-field-equations-reduction]] the adopted field equations hold on the spacetime, which is the first part of claim (a); the special values $w=0$ and $w=\tfrac13$ give $q=\tfrac23$ and $q=\tfrac12$ by [L4], which is the rest of claim (a). For claim (b), compute $\varepsilon(t)a(t)^{3(1+w)}=\frac{3c^2q^2}{8\pi G_N}(t-t_0)^{-2}A^{3(1+w)}\bigl(\frac{t-t_0}{t_*}\bigr)^{3(1+w)q}$; by [L4], $3(1+w)q=2$, so the power of $(t-t_0)$ is $-2+2=0$ and the product equals the constant $C=A^{3(1+w)}\frac{3c^2q^2}{8\pi G_Nt_*^2}$, which is positive; the exponent of $t_*$ is $3(1+w)q=2$. Differentiating $\varepsilon=Ca^{-3(1+w)}$ with respect to $t$ and using $\dot a=Ha$ gives $\dot\varepsilon=-3(1+w)H\varepsilon=-3H(\varepsilon+p)$, which is the continuity equation (C). [L2, L3, L4, step 2.1, step 2.2, algebra] ∎

## Remarks

- **What the solutions are and are not.** The theorem verifies a family of
  exact solutions of the flat, $\Lambda=0$ barotropic branch; it does not claim
  that these are the only solutions with the stated equation of state, and it
  makes no statement about the behaviour of the scale factor as
  $t\downarrow t_0$, about spacetime singularities, about the physical
  interpretation of the coordinates, or about any observation.

- **Values of the constants.** $A$, $t_*$ and $t_0$ are arbitrary model data;
  the density at a reference time determines the combination $C$, and the
  expansion rate at a reference time determines $t-t_0$ there. No numerical
  value of $H$, of a density or of an age is asserted; any such value would be
  an empirical premise requiring a source-backed measurement.

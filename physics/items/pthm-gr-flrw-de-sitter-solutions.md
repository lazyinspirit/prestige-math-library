---
id: pthm-gr-flrw-de-sitter-solutions
kind: physics-theorem
title: "An expanding flat vacuum solution for positive cosmological parameter and non-existence for negative parameter"
status: published
origin: session
domain: physics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [post-gr-flrw-homogeneous-cosmological-model, pthm-gr-flrw-field-equations-reduction, def-gr-flrw-friedmann-system, def-gr-flrw-spatial-model, def-gr-si-unit-and-coordinate-conventions, def-derivative, def-rational-power, def-real-exponential-function-and-e, cor-exponential-reciprocal-and-positivity, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives]
dependency_roles:
  post-gr-flrw-homogeneous-cosmological-model: physical-assumption
  pthm-gr-flrw-field-equations-reduction: physical-result
  def-gr-flrw-friedmann-system: mathematical-premise
  def-gr-flrw-spatial-model: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-derivative: mathematical-premise
  def-rational-power: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
physical_scope: "Exact vacuum solutions of the adopted field law for the flat (k=0) homogeneous model: the exponentially expanding solution for a positive cosmological parameter, and the non-existence of any flat vacuum solution for a negative cosmological parameter. The claims are conditional on the adopted model, field law and parameter sign; no numerical value of Lambda or of the expansion rate, no assertion about singularities, global structure or observations, and no claim that the model describes nature is made."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8 (8.58): a flat vacuum-dominated universe must have Lambda > 0 and a is proportional to exp(+/- sqrt(Lambda/3) t), printed p. 227 (PDF p. 234); (8.29)-(8.31): the vacuum energy-momentum tensor as a perfect fluid with rho = -p = Lambda/(8 pi G), printed p. 222 (PDF p. 229)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.2 and section 4.6.2: the cosmological-constant term in the field equation and the flat single-fluid solutions, printed pp. 182-183 and 201-203 (PDF pp. 189-190 and 208-210)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019 revision), section 1.3.3: the de Sitter universe as the vacuum-dominated solution, printed pp. 40-43 (PDF pp. 46-49)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/cosmo/cosmo.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the homogeneous cosmological model of
[[post-gr-flrw-homogeneous-cosmological-model]] with the flat standard spatial
model ($k=0$, Euclidean space), the field law with the framework's constants
$c>0$, $G_N>0$ and a cosmological parameter $\Lambda\in\mathbb R$, and the
vacuum matter sector, so that $T_{ab}=0$ and $\varepsilon=p=0$
([[def-gr-flrw-spatial-model]] clause (d),
[[def-gr-si-unit-and-coordinate-conventions]]). Then:

**(a)** If $\Lambda>0$, then for every $t_0\in\mathbb R$ and every $A>0$ the
datum with $I:=\mathbb R$,

$$H_\Lambda:=c\sqrt{\frac{\Lambda}{3}},\qquad a(t):=A\exp\bigl(H_\Lambda(t-t_0)\bigr),\qquad \varepsilon(t):=0,\qquad p(t):=0$$

satisfies the Friedmann equation (F) and the acceleration equation (A) on
$\mathbb R$ ([[def-gr-flrw-friedmann-system]]), so by
[[pthm-gr-flrw-field-equations-reduction]] the field equations hold on the
spacetime $\mathbb R\times\Sigma$ with the metric
$g=-c^2dt^2+a(t)^2\gamma$.

**(b)** If $\Lambda<0$, then there is no nonempty open interval $I$ and no
smooth function $a:I\to(0,\infty)$ such that the datum
$(c,G_N,\Lambda,I,0,a,0,0)$ satisfies the Friedmann equation (F); consequently
the flat vacuum model has no solution of the field equations for $\Lambda<0$.

No uniqueness of the solutions of (a) is asserted, no numerical value of
$\Lambda,H_\Lambda,A$ or $t_0$ is asserted, and nothing is claimed about the
limit $t\to-\infty$, about singularities or about global structure.

## Facts & Assumptions

**Given:** The adopted model with the flat standard spatial model, the field law with parameters $c,G_N,\Lambda$, the vacuum matter sector $\varepsilon=p=0$, and the datum $H_\Lambda,A,t_0,a$ of the statement.

[L1] The flat spatial model is the Euclidean standard model of [[def-gr-flrw-spatial-model]], and the model's geometry, matter sector and field law are the adopted assumptions of [[post-gr-flrw-homogeneous-cosmological-model]] used together with [[pthm-gr-flrw-field-equations-reduction]], which states: on the spacetime the field equation holds if and only if (F) and (A) hold for the model data, and the vacuum sector is the case $\varepsilon=p=0$ with $T=0$.

[L2] For every real $x$, $\exp(x)>0$ ([[cor-exponential-reciprocal-and-positivity]]); the real exponential function is $C^\infty$ with $\exp'=\exp$, and for constants $\alpha,\beta$ the function $t\mapsto\beta\exp(\alpha t)$ satisfies $\frac{d}{dt}\bigl(\beta\exp(\alpha t)\bigr)=\alpha\beta\exp(\alpha t)$ and $\frac{d^2}{dt^2}\bigl(\beta\exp(\alpha t)\bigr)=\alpha^2\beta\exp(\alpha t)$ ([[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[L3] For $\Lambda>0$ the real number $H_\Lambda=c\sqrt{\Lambda/3}$ is positive and satisfies $H_\Lambda^2=c^2\Lambda/3$ ([[def-rational-power]]); for $\Lambda<0$ the real number $\Lambda c^2/3$ is negative.

[L4] The equations (F) and (A) of [[def-gr-flrw-friedmann-system]] with $k=0$ and $\varepsilon=p=0$ read $H(t)^2=\Lambda c^2/3$ and $\ddot a(t)/a(t)=\Lambda c^2/3$. Every real number $H(t)$ satisfies $H(t)^2\ge0$.

## Proof

**Proof technique:** direct verification for part (a) and a sign contradiction for part (b).

1.1 (Part (a): the exponential datum satisfies the reduced equations.) The function $a(t)=A\exp(H_\Lambda(t-t_0))$ is smooth and strictly positive on $\mathbb R$ because $A>0$ and $\exp>0$; its logarithmic derivative is $H(t)=\dot a/a=H_\Lambda$ by [L2], and $\ddot a/a=H_\Lambda^2$. The Friedmann equation with $k=\varepsilon=0$ is $H^2=\Lambda c^2/3$, and it holds because $H^2=H_\Lambda^2=c^2\Lambda/3$ by [L2] and [L3]; the acceleration equation with $\varepsilon=p=0$ is $\ddot a/a=\Lambda c^2/3$, and it holds for the same reason. Hence (F) and (A) hold on $\mathbb R$, and by [L1] the field equations hold on the spacetime. [L1, L2, L3, L4, algebra]

1.2 (Part (b): negative $\Lambda$ is impossible.) Suppose $\Lambda<0$ and suppose a nonempty open interval $I$ and a smooth $a:I\to(0,\infty)$ are given such that $(c,G_N,\Lambda,I,0,a,0,0)$ satisfies (F). By [L4] the Friedmann equation with $k=0$ and $\varepsilon=0$ reads $H(t)^2=\Lambda c^2/3$ for every $t\in I$. By [L3] the right-hand side is a negative real number, while the left-hand side is a square of a real number and hence is nonnegative by [L4]; this is a contradiction. Therefore no such datum satisfies (F); since by [L1] any solution of the field equations in the vacuum flat sector would produce such a datum satisfying (F), no solution exists for $\Lambda<0$. [L1, L3, L4]

2.1 (Conclusion.) Step 1.1 proves claim (a) for every $t_0$ and $A$ and every $\Lambda>0$, and step 1.2 proves the non-existence claim (b) for $\Lambda<0$. The argument used only the reduction theorem, the pointwise signs of the reduced equations and the elementary properties of the exponential function; no uniqueness, no asymptotic statement and no observational input was used. [step 1.1, step 1.2] ∎

## Remarks

- **The flat $\Lambda=0$ case.** For $\Lambda=0$ the constant scale factor $a\equiv A$ satisfies (F) and (A) with $\varepsilon=p=0$ trivially ($H=\ddot a=0$), so it is a further vacuum solution of the reduced system; the lemma makes no claim that it is isometric to Minkowski space, and no statement about which of the vacuum solutions a physical cosmology selects.

- **No empirical content.** The parameter $\Lambda$ is model data; the theorem is a conditional statement about the adopted field law. In particular the observed accelerated expansion of the universe is not used, asserted or explained here, and associating $\Lambda$ with a measured dark-energy density requires a separate, source-backed empirical premise and analysis.

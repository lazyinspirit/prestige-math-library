---
id: def-se-trajectory-remainder
kind: definition
domain: mathematics
title: Quadratic-cubic remainder after subtracting a trajectory
status: published
deps:
  - def-se-trajectory
  - def-se-linearized-pair
  - def-se-internal-systems
  - def-se-foundation-distributional-equation
  - math:def-complex-conjugate-real-imaginary-part-and-modulus
  - math:lem-complex-conjugation-and-modulus-laws
  - math:def-axiom-of-choice
  - math:def-locally-integrable-function-as-a-regular-distribution
dependency_roles:
  def-se-trajectory: mathematical-premise
  def-se-linearized-pair: mathematical-premise
  def-se-internal-systems: mathematical-premise
  def-se-foundation-distributional-equation: mathematical-premise
  math:def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  math:lem-complex-conjugation-and-modulus-laws: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-locally-integrable-function-as-a-regular-distribution: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 10
---

## Definition

Assume the Axiom of Choice. Let $T>0$, let $\Omega\subset\mathbb R^n$ and $\lambda\in\mathbb R\setminus\{0\}$ be as in the reference trajectory hypothesis (W), and let $w$ satisfy (W). Thus $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ and $i\partial_t w+\Delta w+\lambda|w|^2w=0$ in distributions. Let $\varphi$ be the control cutoff and put $V_1=2\lambda|w|^2$ and $V_2=\lambda w^2$.

For a complex-valued state $v$, set $z=v-w$. The **trajectory remainder** is the pointwise expression

$$F(w,z)=\lambda\bigl(2w|z|^2+\overline w z^2+|z|^2z\bigr).$$

Here $\overline w$ is complex conjugation and $|z|$ is the complex modulus. If $v$ and $w$ have endpoint values and $v(0)=v_0$, $v(T)=v_T$, define $z_0=v_0-w(0)$ and $z_T=v_T-w(T)$.

For this distributional interpretation put $Q=(0,T)\times\Omega$. Write $u\in L^3_{\mathrm{loc}}(Q)$ when $u:Q\to\mathbb C$ is Lebesgue measurable and $\int_K|u|^3\,dt\,dx<\infty$ for every compact $K\subset Q$; functions equal almost everywhere are identified. A measurable function $f$ is locally integrable on $Q$ when $\int_K|f|\,dt\,dx<\infty$ for every such $K$. Each locally integrable term $f$ is interpreted as the regular distribution $\langle T_f,\eta\rangle=\int_Q f\eta\,dt\,dx$ for $\eta\in C_c^\infty(Q;\mathbb C)$, with no conjugation.

For example, if $v\in L^3_{\mathrm{loc}}((0,T)\times\Omega)$ and $\varphi h$ is locally integrable, the cubic controlled equation for $v$ is equivalent, in space-time distributions, to

$$i\partial_t z+\Delta z+V_1z+V_2\overline z+F(w,z)=\varphi h.$$

When the chosen solution class also provides homogeneous Dirichlet traces and endpoint values, subtracting $w$ gives the same homogeneous boundary condition for $z$ and the endpoint conditions $z(0)=z_0$, $z(T)=z_T$. The distributional interior equation alone does not assert the existence of those traces or of a solution.

## Definition references

[[def-se-trajectory]]

[[def-se-linearized-pair]]

[[def-se-internal-systems]]

[[def-se-foundation-distributional-equation]]

[[math:def-complex-conjugate-real-imaginary-part-and-modulus]]

[[math:lem-complex-conjugation-and-modulus-laws]]

[[math:def-axiom-of-choice]]

[[math:def-locally-integrable-function-as-a-regular-distribution]]

## Justification

The reference trajectory, its equation, and the inherited Choice assumption are specified by [[def-se-trajectory]] and [[math:def-axiom-of-choice]]. The cutoff and controlled cubic equation are those of [[def-se-internal-systems]], while [[def-se-linearized-pair]] supplies the coefficients $V_1$ and $V_2$.

The conjugation and modulus conventions are those of [[math:def-complex-conjugate-real-imaginary-part-and-modulus]]. Using the laws in [[math:lem-complex-conjugation-and-modulus-laws]] and ordinary complex multiplication, expansion gives $|w+z|^2(w+z)=|w|^2w+2|w|^2z+w^2\overline z+2w|z|^2+\overline w z^2+|z|^2z$. Hence the definition is precisely the part left after subtracting the trajectory cubic term and the terms real-linear in $z$.

The compact-local convention above defines $L^3_{\mathrm{loc}}(Q)$ directly using measurable representatives and the complex modulus. The meaning of local integrability and the regular-distribution construction are supplied by [[math:def-locally-integrable-function-as-a-regular-distribution]] and its defining regular-functional prerequisite. The assumed Axiom of Choice covers that supplier's Countable Choice hypothesis; its construction and linearity themselves require no choice.

Under the displayed local integrability assumption, $w$ is locally bounded by [[def-se-trajectory]]. For each compact $K\subset Q$, the bound $|z|^3\le4(|v|^3+|w|^3)$ implies $\int_K|z|^3<\infty$. The inequalities $|z|^j\le1+|z|^3$ for $j=1,2$, the finite measure of $K$, and the local boundedness of $w$ show that every term of the expansion is locally integrable. By [[math:def-locally-integrable-function-as-a-regular-distribution]], these terms and the forcing define distributions through the complex-linear map $f\mapsto T_f$. Linearity of distributional derivatives and subtraction of the equation for $w$ yield the displayed remainder equation; reversing the same calculation recovers the equation for $v$. The interpretation of distributional equality and the limitation on endpoint and boundary traces are those of [[def-se-foundation-distributional-equation]]. In a class with linear trace and endpoint maps, subtracting the corresponding values gives the stated conditions for $z$.

## Source notes

Equation (4.6) on PDF page 20 of the original article supplies the attribution and notation. The algebraic calculation above uses the named mathematical suppliers; the article is not used as proof of its own claim.

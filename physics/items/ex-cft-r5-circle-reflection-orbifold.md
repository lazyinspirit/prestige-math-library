---
id: ex-cft-r5-circle-reflection-orbifold
kind: example
title: The compact-boson reflection orbifold and $c=1$ moduli branch
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: physics
library: physics
physical_scope: "Mathematical compact-boson/orbifold CFT example; any statistical-mechanical interpretation is limited to a separately specified critical scaling model."
deps:
  - def-cft-r5-finite-group-orbifold
  - def-cft-r5-compact-boson-full-theory
  - def-cft-r5-compact-boson-charge-lattice-and-cocycle
  - lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local
  - def-cft-r5-circle-reflection-orbifold-sectors
  - thm-cft-r5-compact-boson-spectrum-modular-duality
  - def-countable-choice
  - lem-jacobi-theta-transformation-laws
  - thm-jacobi-theta-triple-product
dependency_roles:
  def-cft-r5-finite-group-orbifold: mathematical-premise
  def-cft-r5-compact-boson-full-theory: mathematical-premise
  def-cft-r5-compact-boson-charge-lattice-and-cocycle: mathematical-premise
  lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local: mathematical-premise
  def-cft-r5-circle-reflection-orbifold-sectors: mathematical-premise
  thm-cft-r5-compact-boson-spectrum-modular-duality: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-jacobi-theta-transformation-laws: mathematical-premise
  thm-jacobi-theta-triple-product: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, arXiv:hep-th/9108028v1"
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§§8.3–8.6, printed pp. 118–130: Z2 reflection projection, fixed points and twisted sectors, torus traces, and the current-current radius deformation."
    - title: "Chongying Dong, Haisheng Li, and Geoffrey Mason, Modular-invariance of trace functions in orbifold theory, arXiv:q-alg/9703016v2"
      url: https://arxiv.org/pdf/q-alg/9703016
      locator: "Introduction and Theorems 1 and 3; used only as a scope comparison for the additional hypotheses in rigorous chiral-VOA orbifold results."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Let $\mathcal H:=\{\tau\in\mathbb C:\operatorname{Im}\tau>0\}$, $q:=e^{2\pi i\tau}$, and $\eta(\tau):=q^{1/24}\prod_{n\ge1}(1-q^n)$, with $q^\alpha=e^{2\pi i\tau\alpha}$. Let $r\in(0,\infty)$ be the dimensionless Ginsparg radius. Assume a radius-parametrized family $(\mathcal O_r)_{r>0}$ of compatible anomaly-free bosonic $\mathbb Z_2$ orbifold completions of the compact-boson full-local data. For each $r$, the reflection action and two twisted sectors have the labels and oscillator data described in the circle-reflection sector specification listed under Example references. The family hypothesis means that, after specified identifications of the untwisted and twisted algebraic state domains and field-label sets for all $r$, every OPE coefficient and every matrix coefficient $\langle\xi,Y(a;z,\bar z)\zeta\rangle$ for fixed domain vectors $\xi,\zeta$ (and the corresponding sector-transport matrix coefficients and torus traces) is $C^1$ in $r$ on its common declared domain. The genus-zero associativity, crossing, locality, anomaly-lift, and torus-covariance equations hold for every $r$. The common radial domains and trace convergence are locally uniform in $r$. Let $\Omega_r$ be the parent compact-boson vacuum and write $Y_r^{\rm circ}$ and $\sigma_r^{\rm circ}$ for its field map and state-field bijection. Define the parent weak current fields $J(z,\bar z)=Y_r^{\rm circ}((\sigma_r^{\rm circ})^{-1}(a_{-1}\Omega_r);z,\bar z)$ and $\bar J(z,\bar z)=Y_r^{\rm circ}((\sigma_r^{\rm circ})^{-1}(\bar a_{-1}\Omega_r);z,\bar z)$ from the left and right level-one Heisenberg states. The individual odd currents are parent fields; $J\bar J$ denotes the field of the invariant state $a_{-1}\bar a_{-1}\Omega_r$, retained in the projected untwisted orbifold sector with the field maps supplied by the compatible completion. In this item, an **exactly marginal radius direction** means the tangent to this $C^1$ family of conformal full-local data, represented in the chosen Gaussian action coordinate by the invariant field $J\bar J$. This representation is part of the conditional family hypothesis, not a conclusion from the pointwise untwisted spectrum. Then at every $r>0$ the orbifold has the projected untwisted sector and two fixed-point twist sectors, its torus partition function is modular invariant with $c_L=c_R=1$, and its radius tangent is exactly marginal in this stated sense.

## Example references

[[def-cft-r5-finite-group-orbifold]]

[[def-cft-r5-compact-boson-full-theory]]

[[def-cft-r5-circle-reflection-orbifold-sectors]]

[Ginsparg, §§8.3–8.6](https://arxiv.org/pdf/hep-th/9108028v1)

## Facts & Assumptions

**Given:** $r>0$, $\tau\in\mathcal H$, the compact-boson full-local package, and the all-radius $C^1$ family hypothesis in the Statement. The existence of the genus-zero twisted OPE/crossing data and their persistence for every radius are conditional inputs; higher-genus sewing is not asserted. This example does not construct the twisted data from the untwisted spectrum.

[F1] [[def-cft-r5-compact-boson-full-theory]] fixes $p_L=m/(2r)+nr$, $p_R=m/(2r)-nr$, weights $(p_L^2/2+N,p_R^2/2+\bar N)$ for oscillator levels $N,\bar N\in\mathbb Z_{\ge0}$, and $c_L=c_R=1$.

[F2] [[def-cft-r5-compact-boson-charge-lattice-and-cocycle]] uses the charge label $Q=(m,n)\in\mathbb Z^2$ and cocycle $\epsilon(Q,Q')=(-1)^{mn'}$; $Q$ is distinct from the modular nome $q=e^{2\pi i\tau}$ in the Statement.

[F3] [[lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local]] proves the charge-field OPE and its cocycle locality under the Ginsparg convention.

[F4] [[def-cft-r5-finite-group-orbifold]] defines a conditional genus-zero full-local orbifold completion with specified twisted sector-field maps, centralizer projections, associativity/crossing conditions, phase lifts, and commuting-pair torus covariance/sum. It does not include higher-genus sewing, prove that an action admits a completion, or show that a completion persists under varying $r$.

[F5] [[def-cft-r5-circle-reflection-orbifold-sectors]] specifies the reflection action, untwisted invariant sector, fixed-point labels $j=0,1$, half-integer twisted oscillators, ground weights $(1/16,1/16)$, and trace conventions. For the centralizer lift used here, take the order-two action that fixes each twisted ground state and sends every half-integer oscillator creation operator to its negative; on a monomial with $N$ oscillator factors it acts by $(-1)^N$. Here $N$ counts creation operators, not the sum of their half-integer mode indices. This explicit lift is part of the compatible orbifold data assumed in [F4]. It is a sector-data definition, not a proof of twisted OPE sewing.

[F6] [[thm-cft-r5-compact-boson-spectrum-modular-duality]] proves convergence and $S/T$ invariance of the untwisted circle trace, under its stated Axiom of Countable Choice.

[F7] [[lem-jacobi-theta-transformation-laws]] gives the $S/T$ transformations of the theta functions used below, assuming countable choice.

[F8] [[def-countable-choice]] is the Axiom of Countable Choice; no stronger choice principle is used.

[F9] For $\tau\in\mathcal H$, define $\Theta(z\mid\tau):=\sum_{n\in\mathbb Z}e^{\pi i n^2\tau+2\pi i nz}$ and $\theta_3(\tau):=\Theta(0\mid\tau)$, $\theta_4(\tau):=\Theta(1/2\mid\tau)$, $\theta_2(\tau):=e^{\pi i\tau/4}\Theta(\tau/2\mid\tau)=\sum_{n\in\mathbb Z}e^{\pi i\tau(n+1/2)^2}$. [[thm-jacobi-theta-triple-product]] proves the locally uniform product formula for $\Theta$; its substitutions at $z=0,1/2,\tau/2$ give the three theta-constant products used below.

[F10] For this example, the radius-family regularity and compatibility conditions in the Statement are assumed data: the common domains, sector labels, OPE maps, tested field matrix coefficients, and trace functions vary $C^1$ with $r>0$, and every member satisfies [F4] and the sector data of [F5]. This supplies persistence at every radius as a hypothesis, not as a consequence of [F4], [F5], or [F6].

## Verification

1.1 Let $\rho$ send the charge label $Q=(m,n)$ to $-Q$ and every left/right oscillator mode to its negative. By [F1], the charges and quadratic stress tensors are fixed up to sign reversal, so $\rho^2=1$ and both stress tensors are invariant. By [F2], $\epsilon(-Q,-Q')=(-1)^{(-m)(-n')}=\epsilon(Q,Q')$. The OPE in [F3] has unchanged exponents because each is a product of two sign-reversed charges; descendant oscillator signs are likewise preserved in every normal-ordered product. Since the compact-boson fields are generated by these charge fields and oscillators, $\rho$ is an order-two stress-preserving automorphism of the complete compact-boson OPE data. [given, F1, F2, F3, algebra]

1.2 By [F1], the target coordinate has period $2\pi r$. Reflection fixed points satisfy $x\equiv-x\pmod{2\pi r}$, hence $2x\in2\pi r\mathbb Z$. Modulo $2\pi r$, exactly $x=0$ and $x=\pi r$ solve this equation; they are the two twisted ground-state labels in [F5]. [given, F1, F5, algebra]

1.3 The commuting-pair formula in [F4] gives
$$Z_{\rm orb}(r;\tau)=\frac12\bigl(Z_{1,1}+Z_{1,\rho}+Z_{\rho,1}+Z_{\rho,\rho}\bigr).$$
Here $Z_{1,1}=Z_{\rm circ}(r;\tau)$. By [F2] and [F5], reflection exchanges every nonzero charge sector with its distinct negative-charge sector, so each such pair contributes zero to $Z_{1,\rho}$. Only the zero-charge oscillator space remains; [F5] makes reflection multiply each level-$n$ oscillator by $-1$, so its chiral trace is $t(q)=q^{-1/24}\prod_{n\ge1}(1+q^n)^{-1}$. The product identity from [F9] is $2\eta/\theta_2=q^{-1/12}\prod_{n\ge1}(1+q^n)^{-2}=t(q)^2$. The independent right-moving trace is $\overline{t(q)}$, hence $Z_{1,\rho}=|t(q)|^2=2|\eta/\theta_2|$. [given, F2, F4, F5, F9, algebra]

1.4 By [F5], each of the two twisted sectors has half-integer oscillators and ground weight $1/16$ in each chirality. Its chiral vacuum exponent is $1/16-1/24=1/48$. Summing the geometric oscillator towers gives $u_-(q)=q^{1/48}\prod_{n\ge1}(1-q^{n-1/2})^{-1}$ without insertion and $u_+(q)=q^{1/48}\prod_{n\ge1}(1+q^{n-1/2})^{-1}$ with the centralizer insertion from [F5]. The product identities $\eta/\theta_4=q^{1/24}\prod_{n\ge1}(1-q^{n-1/2})^{-2}=u_-(q)^2$ and $\eta/\theta_3=q^{1/24}\prod_{n\ge1}(1+q^{n-1/2})^{-2}=u_+(q)^2$ follow from [F9]. The right-moving chiral factors are their complex conjugates, so one fixed point contributes $|u_-|^2=|\eta/\theta_4|$ without insertion and $|u_+|^2=|\eta/\theta_3|$ with insertion. The two fixed points therefore yield $Z_{\rho,1}=2|\eta/\theta_4|$ and $Z_{\rho,\rho}=2|\eta/\theta_3|$. The insertion sign in the latter trace is $(-1)^N$ from [F5], so each occupation-number sum has denominator $1+q^{n-1/2}$. Thus
$$Z_{\rm orb}=\frac12Z_{\rm circ}+|\eta/\theta_2|+|\eta/\theta_3|+|\eta/\theta_4|.$$
All products converge absolutely for $\operatorname{Im}\tau>0$. [given, F5, F9, algebra]

2.1 The family hypothesis [F10] supplies at every radius the exact torus covariance of [F4]. With $G=\{1,\rho\}$ and $\rho^2=1$, all four pairs $(g,h)\in G^2$ commute. Under $S$, the covariance sends $(g,h)$ to $(h,g^{-1})=(h,g)$, a permutation of these four pairs; under $T$ it sends $(g,h)$ to $(g,gh)$, also a permutation. Therefore the finite sum $\frac12\sum_{(g,h)\in G^2}Z_{g,h}$ in Step 1.3 is invariant under both generators and hence under $SL(2,\mathbb Z)$. Applying the explicit equality in Step 1.4 identifies that invariant sum with the displayed orbifold partition function. This argument uses the exact covariance already assumed for the compatible completion, not the countable-choice-dependent theta or circle transformation results [F6, F7]. [given, F4, F10, step 1.3, step 1.4, algebra]

3.1 By [F1], the parent compact-boson state-field bijection sends the left and right level-one oscillator states to the parent current fields in the Statement. The action in [F5] negates each corresponding oscillator state; the equivariance clause in [F4] therefore negates each parent current field and fixes the product state. The latter lies in the projected untwisted domain and has the invariant field $J\bar J$ in the compatible orbifold completion. Its weights are $(1,1)$ because its state has one left and one right oscillator excitation. Since [F4] requires the group action to preserve the Virasoro fields and the sector data use the same $c_L=c_R=1$ stress tensors from [F1], projection and twisting retain these central charges. On a Euclidean worldsheet patch $\Sigma\subset\mathbb C$ with coordinate $z=\sigma+i t$, a smooth classical configuration used to specify the normalization is a map $X_{\rm cl}:\Sigma\to\mathbb R/(2\pi r\mathbb Z)$ with local real lifts $\widetilde X_{\rm cl}$. Set $S_g[\widetilde X_{\rm cl}]=(g/(2\pi))\int_\Sigma\partial\widetilde X_{\rm cl}\,\bar\partial\widetilde X_{\rm cl}\,d\sigma dt$, where $\partial=(\partial_\sigma-i\partial_t)/2$ and $\bar\partial=(\partial_\sigma+i\partial_t)/2$. Restrict to configurations with finite Dirichlet integral and to $g>0$, so this functional and its coupling derivative are finite. This classical functional fixes a coupling convention only; it does not assert that quantum fields are smooth or construct a path integral. Put $j_{\rm cl}=i\partial\widetilde X_{\rm cl}$ and $\bar j_{\rm cl}=i\bar\partial\widetilde X_{\rm cl}$. Then $\partial_gS_g|_{g=1}=(1/(2\pi))\int_\Sigma\partial\widetilde X_{\rm cl}\,\bar\partial\widetilde X_{\rm cl}\,d\sigma dt=-(1/(2\pi))\int_\Sigma j_{\rm cl}\bar j_{\rm cl}\,d\sigma dt$. By the Gaussian action-coordinate convention stipulated in the Statement, the corresponding infinitesimal CFT-data deformation is represented by the state field $J\bar J$; this is a model assumption, not an inference from a formal path integral. Rescaling $Y=\sqrt g X$ changes the period from $2\pi r$ to $2\pi\sqrt g r$. The resulting radius $r_g=\sqrt g r$ satisfies $dr_g/dg|_{g=1}=r/2$, so this action-coordinate tangent is a nonzero scalar multiple of the radius tangent of the untwisted Gaussian family. By [F10], compatible completions with the same fixed labels, domains, and consistency equations are supplied at every positive radius. Thus the tangent lies in the projected orbifold family and is exactly marginal under the definition in the Statement. The all-radius persistence uses [F10] as an explicit model hypothesis. [given, F1, F4, F5, F10, step 1.1, algebra] ∎

## Remarks

The explicit torus formula verifies the genus-one trace and modular permutation once the twisted-sector data exist. Genus-zero twisted OPE and crossing consistency are conditional inputs in [F4]; this item neither proves them nor asserts higher-genus sewing. The result is mathematical CFT data. Any statistical-mechanical interpretation requires a separately specified critical scaling model and is outside this example.

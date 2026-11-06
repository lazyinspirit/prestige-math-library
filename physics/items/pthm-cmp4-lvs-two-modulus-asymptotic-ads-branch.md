---
id: pthm-cmp4-lvs-two-modulus-asymptotic-ads-branch
kind: physics-theorem
title: Unique negative stationary point and positive-definite coordinate Hessian of the exact two-variable function
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 16
domain: physics
library: physics
category: string-theory
deps:
  - def-cmp-cy3-kahler-moduli-and-divisor-volumes
  - def-cmp4-compactification-derived-moduli-eft-data
  - def-cmp4-moduli-mass-matrix-and-evolution-cutoff
  - def-cmp4-nonperturbative-moduli-superpotential-sector
  - pthm-r2-gkp-no-scale-flux-potential
  - pthm-four-dimensional-n1-fd-scalar-potential
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-derivative-of-exponential
  - thm-real-power-continuity-and-derivatives
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-algebra-of-continuous-functions
  - cor-mean-value-theorem
  - thm-intermediate-value
  - def-hessian-of-a-function-at-a-critical-point
  - lem-coordinate-change-congruence-for-the-critical-hessian
dependency_roles:
  def-cmp-cy3-kahler-moduli-and-divisor-volumes: formulation-prerequisite
  def-cmp4-compactification-derived-moduli-eft-data: formulation-prerequisite
  def-cmp4-moduli-mass-matrix-and-evolution-cutoff: formulation-prerequisite
  def-cmp4-nonperturbative-moduli-superpotential-sector: formulation-prerequisite
  pthm-r2-gkp-no-scale-flux-potential: formulation-prerequisite
  pthm-four-dimensional-n1-fd-scalar-potential: formulation-prerequisite
  def-real-exponential-function-and-e: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-intermediate-value: mathematical-premise
  def-hessian-of-a-function-at-a-critical-point: mathematical-premise
  lem-coordinate-change-congruence-for-the-critical-hessian: mathematical-premise
physical_scope: "Conditional exact finite-dimensional two-radial-coordinate four-dimensional Einstein-frame EFT function in Planck units. The theorem proves the unique negative-energy radial stationary point and its coordinate Hessian signature only; it does not derive the function from a string compactification, test axions or other fields, or establish physical mass, correction-control, or scale-separation claims."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Vijay Balasubramanian, Per Berglund, Joseph P. Conlon, and Fernando Quevedo, Systematics of Moduli Stabilisation in Calabi-Yau Flux Compactifications, arXiv:hep-th/0502058v2"
      url: "https://arxiv.org/pdf/hep-th/0502058v2"
      locator: "§2, equations (9)–(17), and §3.1, equations (19)–(33), printed pp. 4–12; potential terms, scaling assumptions, and the authors' explicit heuristic boundary for the general existence argument."
    - title: "Jan Louis, Introduction to String Phenomenology, University of Hamburg preliminary lecture notes"
      url: "https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-14-15/ws-14-15-lecture-notes.pdf"
      locator: "Full 89-page PDF; §8.3, printed pp. 42–43; independent KKLT/LVS overview and two-modulus large-volume potential assumptions."
    - title: "Liam McAllister and Fernando Quevedo, Moduli Stabilization in String Theory, arXiv:2310.20559v1"
      url: "https://arxiv.org/pdf/2310.20559v1"
      locator: "§4.2, printed pp. 29–32; LVS EFT hierarchy and its model-specific assumptions and limitations."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
empirical_premises: []
---
## Statement

In Planck units, let $\tau>0$ and $\mathcal V>0$ be independent dimensionless radial coordinates, and let $A_1,B_1,C_1,a$ be fixed positive dimensionless constants. For the exact scalar function

$$
V_{\mathrm{3term}}(\tau,\mathcal V)=\frac{A_1\sqrt{\tau}\,e^{-2a\tau}}{\mathcal V}-\frac{B_1\tau e^{-a\tau}}{\mathcal V^2}+\frac{C_1}{\mathcal V^3},
$$

there is exactly one stationary point in $(0,\infty)^2$. Its value is negative and the Hessian matrix of $V_{\mathrm{3term}}$ in the two radial coordinates is positive definite. The theorem concerns this exact finite-dimensional function. A type-IIB large-volume interpretation requires a separate $K,W$-to-coefficient map, a Kähler-cone check, analysis of axion and other retained directions, and quantitative control of omitted corrections; none is asserted here.

## Statement references

[Balasubramanian, Berglund, Conlon, and Quevedo, §2 and §3.1](https://arxiv.org/pdf/hep-th/0502058v2)

[Louis, §8.3](https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-14-15/ws-14-15-lecture-notes.pdf)

[McAllister and Quevedo, §4.2](https://arxiv.org/pdf/2310.20559v1)

## Facts & Assumptions

**Given:** The exact function in the Statement, with independent positive real coordinates $\tau,\mathcal V$ and fixed constants $A_1,B_1,C_1,a>0$.

[F1] [[def-cmp-cy3-kahler-moduli-and-divisor-volumes]] defines the dimensionless total Calabi–Yau volume $\mathcal V=\frac16\kappa_{abc}v^av^bv^c$ and dual divisor coordinates $\tau_a=\frac12\kappa_{abc}v^bv^c$ in its declared $\alpha'=1$ convention. The theorem uses only the positive quadrant and does not assert that every point lies in a given Kähler cone.

[F2] [[def-cmp4-compactification-derived-moduli-eft-data]] defines the declared four-dimensional Einstein-frame EFT data and Planck units; the data tuple alone does not establish a critical point or a valid compactification truncation. Its current Step 1 readiness record is missing, so this interface is used conditionally.

[F3] [[def-cmp4-moduli-mass-matrix-and-evolution-cutoff]] defines physical scalar masses using the field-space metric and distinguishes them from coordinate-Hessian eigenvalues. Its current Step 1 readiness record is missing; this theorem makes no physical mass or omitted-mode claim.

[F4] [[def-cmp4-nonperturbative-moduli-superpotential-sector]] states sector-specific conditions for a candidate $A e^{-aT}$ term and does not infer it from divisor rigidity alone. Its current Step 1 readiness record is missing; the theorem does not assert that such a sector exists in a compactification.

[F5] [[pthm-r2-gkp-no-scale-flux-potential]] proves conditionally that the single-overall-modulus tree-level flux F-term leaves that modulus unfixed on the stated flux F-flat locus. Its actual hypotheses exclude nonperturbative, $\alpha'$, loop, uplift, and multifield no-scale conclusions. Its current Step 1 readiness record is missing; it is used only as single-modulus background context, not as a two-modulus identity or as proof of the displayed function.

[F6] [[pthm-four-dimensional-n1-fd-scalar-potential|Four-Dimensional $N=1$ F- and D-Term Scalar Potential]] states the conditional Einstein-frame F-term potential and its auxiliary-square proof is complete under the old-minimal conventions adopted by its Postulate. This item uses only that formula as model context; the exact function here is an input, not a derivation from $K,W$.

[F7] [[def-real-exponential-function-and-e]] defines the real exponential by its convergent power series.

[F8] [[cor-exponential-reciprocal-and-positivity]] gives $e^x>0$ and $e^{-x}=1/e^x$.

[F9] [[thm-derivative-of-exponential]] gives $(e^x)'=e^x$ and smoothness.

[F10] [[thm-real-power-continuity-and-derivatives]] gives continuity and $(x^\alpha)'=\alpha x^{\alpha-1}$ for $x>0$ and $\alpha\in\mathbb R$.

[F11] [[thm-chain-rule]] gives the derivative of a composition of differentiable real functions at a point where both limit-point hypotheses hold.

[F12] [[thm-algebra-of-derivatives]] gives the product and quotient rules for differentiable real functions.

[F13] [[thm-algebra-of-continuous-functions]] gives continuity of sums, products, and scalar multiples of continuous real functions.

[F14] [[cor-mean-value-theorem]]: for a function continuous on a closed interval and differentiable on its interior, its endpoint difference equals its derivative at some interior point times the interval length.

[F15] [[thm-intermediate-value]]: a continuous real function on a closed interval takes each value between its endpoint values.

[F16] [[def-hessian-of-a-function-at-a-critical-point]] defines the intrinsic Hessian from the second coordinate derivatives at a critical point and makes it independent of chart.

[F17] [[lem-coordinate-change-congruence-for-the-critical-hessian]] gives the exact chart-change law $H_y=J^{\mathsf T}H_xJ$ at a critical point.

[A1] The scalar function displayed in the Statement is exact on $(0,\infty)^2$, and all four coefficients are independent positive constants; no parameter relation is assumed.

[A2] No $K,W$-to-coefficient derivation, flux choice, tadpole solution, instanton determinant, axion potential, or estimate for omitted terms is part of the hypotheses.

[A3] Positivity of this coordinate Hessian is a property of the exact two-variable function. It is not by itself a full compactification stability, canonical-mass, or EFT scale-separation claim.

## Proof

1.1 For scope, [F1] fixes the Calabi–Yau volume-coordinate convention, [F2] records the four-dimensional Einstein-frame EFT data, and [F3] distinguishes a coordinate Hessian from physical scalar masses. [F4]–[F6] provide only conditional one-sector/single-modulus model context: they do not derive the exact two-variable function, which is input [A1]. Put $x=a\tau>0$, $q=\mathcal V e^{-x}\tau^{-1/2}>0$, $c=C_1\tau^{-3/2}>0$, and $E=e^{-3x}q^{-3}>0$. The inverse change is $\tau=x/a$, $\mathcal V=q e^x\tau^{1/2}$, so $(\tau,\mathcal V)\mapsto(\tau,q)$ is a smooth coordinate change with $\partial q/\partial\mathcal V=e^{-x}\tau^{-1/2}>0$. Substitution into the exact function gives $V=E p$ with $p=A_1q^2-B_1q+c$. [given, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, A1, algebra]

1.2 Define $L(x)=C_1a^{3/2}x^{-3/2}$ and $R(x)=(B_1^2/A_1)4x(x-1)/(4x-1)^2$ on $[1,\infty)$. Their derivatives on $x>1$ are $L'(x)=-(3/2)C_1a^{3/2}x^{-5/2}<0$ and $R'(x)=(B_1^2/A_1)4(2x+1)/(4x-1)^3>0$, so [F14] makes $L$ strictly decreasing and $R$ strictly increasing. Also $L(1)=C_1a^{3/2}>0=R(1)$, while $L(x)\to0$ and $R(x)\to B_1^2/(4A_1)>0$ as $x\to\infty$. The first limit follows from $x^{-3/2}\le x^{-1}$ for $x\ge1$; the second follows by dividing numerator and denominator by $x^2$. [F10, F11, F12, F14, A1, algebra]

2.1 Holding $\tau$ fixed, $E_q=-3E/q$ and $p_q=2A_1q-B_1$, hence $\partial_qV=E(p_q-3p/q)$. Since $E,q>0$, $\partial_qV=0$ is equivalent to $A_1q^2-2B_1q+3c=0$. [step 1.1, F10, F11, F12, algebra]

2.2 Holding $q$ fixed, $E_\tau=-3aE$ and $c_\tau=-3c/(2\tau)$, so $\partial_\tau V=E(-3ap-3c/(2\tau))$. Thus $\partial_\tau V=0$ is equivalent to $p=-c/(2a\tau)=-c/(2x)$. [step 1.1, F9, F10, F11, F12, algebra]

2.3 The continuous difference $L-R$ is positive at $1$ and is negative for some sufficiently large finite $x$, by step 1.2. Applying [F15] on that finite interval gives a root in $(1,\infty)$. Since $L-R$ is strictly decreasing by step 1.2, this root is unique. [step 1.2, F13, F14, F15, A1, choose]

3.1 Combining $p=A_1q^2-B_1q+c=-c/(2x)$ with the equation in step 2.1 gives $B_1q=c(2-1/(2x))$ and $A_1q^2=c(1-1/x)$. Positivity of $A_1,q,c$ forces $x>1$. Dividing the square of the first equality by the second yields $$ C_1a^{3/2}x^{-3/2}=\frac{B_1^2}{A_1}\frac{4x(x-1)}{(4x-1)^2}. $$ This scalar equation is necessary for stationarity. [step 2.1, step 2.2, A1, algebra]

4.1 Conversely, let $x>1$ solve the scalar equation in step 3.1, put $\tau=x/a$, $c=C_1a^{3/2}x^{-3/2}$, and set $q=(c/B_1)(2-1/(2x))=(c/B_1)(4x-1)/(2x)>0$. The scalar equation says $c=(B_1^2/A_1)4x(x-1)/(4x-1)^2$, so direct substitution gives $ A_1q^2=\frac{A_1c^2}{B_1^2}\frac{(4x-1)^2}{4x^2}=c\frac{x-1}{x}. $ Also $B_1q=c(2-1/(2x))$, whence $p=A_1q^2-B_1q+c=-c/(2x)$ and $A_1q^2-2B_1q+3c=0$. Steps 2.1–2.2 then give both partial derivatives zero. For this $x$, $q$ is uniquely fixed, and the inverse coordinate change in step 1.1 uniquely fixes $\mathcal V$. Thus stationary points correspond one-to-one to roots of the scalar equation. [step 1.1, step 2.1, step 2.2, step 3.1, A1, algebra]

5.1 At a stationary point, $h_q:=p_q-3p/q=0$ and $h_\tau:=-3ap+c_\tau=0$. Differentiating $V_q=Eh_q$ and $V_\tau=Eh_\tau$, the terms involving $E_q$ or $E_\tau$ vanish there. Since $c_\tau=-3c/(2\tau)$ and $c_{\tau\tau}=15c/(4\tau^2)$, this gives $ V_{\tau\tau}=E(-3ac_\tau+c_{\tau\tau})=E\left(\frac{9ac}{2\tau}+\frac{15c}{4\tau^2}\right). $ For the other entries, $V_{qq}=E(p_{qq}-3p_q/q+3p/q^2)$ and $V_{\tau q}=-3aE p_q$. Using $p_{qq}=2A_1$, $p_q=2A_1q-B_1$, and $p_q=3p/q$ at stationarity reduces the first expression to $E\,2(B_1-A_1q)/q$ and the second to $3aE(B_1-2A_1q)$. [step 2.1, step 2.2, step 4.1, step 2.3, F10, F11, F12, algebra]

6.1 From step 3.1, $A_1q/B_1=2(x-1)/(4x-1)$, so $0<A_1q/B_1<1$, $1-A_1q/B_1=(2x+1)/(4x-1)$, and $1-2A_1q/B_1=3/(4x-1)$. Using also $A_1q^2=c(x-1)/x$ and $B_1q=c(4x-1)/(2x)$ gives $ V_{\tau\tau}=\frac{3Ea^2c(6x+5)}{4x^2},\qquad V_{qq}=\frac{EA_1(2x+1)}{x-1},\qquad V_{\tau q}=\frac{9aEc}{2xq}. $ Thus both diagonal entries are positive, and direct multiplication yields $ \begin{aligned} \det D^2_{(\tau,q)}V &=\frac{E^2a^2cA_1}{4x^2(x-1)}\bigl(3(6x+5)(2x+1)-81x\bigr)\\ &=\frac{E^2a^2cA_1}{4x^2(x-1)}\,3(12x^2-11x+5). \end{aligned} $ By the scalar equation in step 3.1, $cA_1/[4x^2(x-1)]=B_1^2/[x(4x-1)^2]$. Hence $ \det D^2_{(\tau,q)}V=E^2\frac{B_1^2a^2}{x(4x-1)^2}\,3(12x^2-11x+5)>0, $ since $12x^2-11x+5=12(x-11/24)^2+119/48$. [step 5.1, step 3.1, A1, algebra]

7.1 The symmetric $2\times2$ Hessian in step 6.1 is positive definite: for coordinates $(u,v)$ its quadratic form is $V_{\tau\tau}(u+V_{\tau q}v/V_{\tau\tau})^2+(\det D^2V/V_{\tau\tau})v^2$, positive unless $(u,v)=(0,0)$. The change from $(\tau,\mathcal V)$ to $(\tau,q)$ is a smooth chart change with invertible Jacobian by step 1.1, so [F16]–[F17] preserve the Hessian's positive-definite signature at this critical point. [step 1.1, step 6.1, F16, F17, algebra]

8.1 At the stationary point, step 2.2 gives $p=-c/(2x)$, so $V=Ep=-Ec/(2x)<0$. This is the negative value of the exact radial function; [F3] and [A3] do not permit interpreting the coordinate Hessian alone as a physical mass or full compactification stability result. [step 1.1, step 2.2, F3, F7, F8, A1, A3, algebra] ∎

## Unresolved supplier

The exact radial-function proof is complete, but readiness remains escalated on current supplier records:

- def-cmp-cy3-kahler-moduli-and-divisor-volumes has a stored ready decision, but step1Decision reports “Item or dependency changed; record current readiness”; its recorded hash does not match the current closure. This is a stale record, not a pending-precheck issue.
- def-cmp4-compactification-derived-moduli-eft-data, def-cmp4-moduli-mass-matrix-and-evolution-cutoff, def-cmp4-nonperturbative-moduli-superpotential-sector, and pthm-r2-gkp-no-scale-flux-potential have existing escalated records with stale stored hashes. Their current reasons identify unresolved O3/O7/Kähler-coordinate and $N=2$ period inputs, IIB pseudoaction/five-form inputs, and an unused extreme-value dependency routed to the separate uplift-stability page.
- pthm-four-dimensional-n1-fd-scalar-potential has an existing escalated record with a stale hash; its stored reason says the supergravity-conventions carrier is absent. The carrier, def-supergravity-conventions-and-normalizations, is now present at level 5 and ready-current. The existing escalation is retained for owner refresh.

The current supplier statements and available proofs were inspected. The exact function is proved without deriving it from those physical inputs; they remain conditional model context. This theorem makes no K,W-to-coefficient, Kähler-cone, axion, full-compactification mass, or omitted-correction-control claim. It cannot be marked ready until its direct readiness records are current.

---
id: pthm-emx-weak-poynting-uniqueness
kind: physics-theorem
title: "Energy balance and zero-data forward uniqueness for admissible weak Maxwell fields"
status: published
origin: pipeline
domain: physics
dependency_level: 1
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emx-finite-energy-boundary-model
  - def-na-hcurl-space
  - def-na-zero-tangential-hcurl
  - cor-cauchy-schwarz-inequality-for-l-two
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emx-finite-energy-boundary-model: formulation-prerequisite
  def-na-hcurl-space: mathematical-premise
  def-na-zero-tangential-hcurl: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An a-priori energy identity and homogeneous zero-data forward uniqueness for the explicitly defined finite-energy Maxwell curl-evolution model with bounded static symmetric uniformly positive coefficients. The identity applies to the closure-defined PEC branch or to the impedance branch only when its Green-compatible L2 tangential boundary pair exists. Two-solution uniqueness follows in the PEC branch, or in the impedance branch when the difference has a Green-compatible boundary pair. No Gauss constraint is inferred. It establishes no existence theorem, no general trace regularity, no conservation without the stated work and boundary terms, and no empirical claim."
sources:
  references:
    - title: "Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS lecture notes, 176 pp."
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "Section 8.2, printed pp. 8.1-8.2 (PDF pp. 86-87), equations (8.3)-(8.9): smooth vacuum energy density, Poynting identity and fixed-volume energy flux. The present proof derives the conditional heterogeneous H(curl) identity from its exact weak model."
    - title: "Long Chen, Variational Formulation of Maxwell Equations, University of California, Irvine lecture note, updated May 12 2024, 8 pp."
      url: "https://www.math.uci.edu/~chenlong/226/Maxwellweakform.pdf"
      locator: "Sections 1-3.2, PDF pp. 1-5: H(curl) graph space, Green integration-by-parts formulas, PEC and impedance boundary conventions, and the distinction between weak trace spaces and ordinary L2 boundary fields."
---

## Statement

Use the finite-energy boundary model defined earlier on the nonempty open time interval $I$ and bounded Lipschitz polyhedron $\Omega$. Thus $\varepsilon,\mu$ are time-independent real symmetric essentially bounded coefficient fields with uniform positive lower bounds, $E,H\in C^1(I;L^2(\Omega;\mathbb R^3))\cap C(I;H(\operatorname{curl};\Omega))$, $J\in C(I;L^2(\Omega;\mathbb R^3))$, and

$$\varepsilon\partial_tE=\operatorname{curl}H-J,\qquad\mu\partial_tH=-\operatorname{curl}E$$

hold as $L^2$ identities for every $t\in I$. Define

$$W(t):=\frac12\int_\Omega\bigl(E\cdot\varepsilon E+H\cdot\mu H\bigr)\,d\lambda_3.$$

For every $s<t$ in $I$, the closure-defined PEC branch satisfies

$$W(t)-W(s)=-\int_s^t\int_\Omega E\cdot J\,d\lambda_3\,dr.$$

For the Green-compatible impedance branch, where $H_\tau=Y(n\times E_\tau)$, it satisfies

$$W(t)-W(s)=-\int_s^t\int_\Omega E\cdot J\,d\lambda_3\,dr-\int_s^t\int_{\partial\Omega}Y|E_\tau|^2\,dS\,dr.$$

Here $E_\tau,H_\tau$ and the Green identity are exactly the $L^2$ boundary data and admissibility condition in the model definition; no trace is inferred from H(curl) membership alone. The work density $E\cdot J$ has SI units $\mathrm{W\,m^{-3}}$; the boundary term has units $\mathrm{W\,m^{-2}}$ per unit area and is nonnegative in the impedance branch. If $J=0$ and $E(t_0)=H(t_0)=0$ in $L^2$, the only admissible solution is zero for $t\ge t_0$. For two solutions with the same coefficients, current and initial data, forward equality follows in the PEC branch. In the impedance branch it follows if the difference fields, with the difference boundary pair and the same $Y$, also satisfy the model's Green compatibility identity. This difference-pair identity is an explicit hypothesis here; no inference from the two separate energy-pair identities alone is used. These conclusions concern the curl-evolution class and infer no Gauss constraint. Uniqueness is forward from the specified initial time; no backward uniqueness is asserted for a dissipative boundary.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the coefficient fields and their uniform positive bounds, the time regularity of $E,H,J$, the two $L^2$ evolution identities, and either the PEC closure condition or the impedance trace pair and Green identity of the Statement.

[A1] The finite-energy boundary model defines the real H(curl) fields, the closure-defined PEC space, the bounded static coefficient maps, the $L^2$ time regularity, the impedance boundary pair, its Green compatibility identity, and the PDEs used here. The variable-coefficient branch is explicit model data; the earlier homogeneous material postulate supplies only its constant-coefficient special case. [[def-emx-finite-energy-boundary-model]]

[F1] $H(\operatorname{curl};\Omega)$ consists of real $L^2$ vector fields whose distributional curl is represented by an $L^2$ vector field, with the graph norm $\|u\|_2^2+\|\operatorname{curl}u\|_2^2$. [[def-na-hcurl-space]]

[F2] $H_0(\operatorname{curl};\Omega)$ is the graph-norm closure of $C_c^\infty(\Omega;\mathbb R^3)$; the closure definition does not assert equality with the kernel of an arbitrary boundary trace map. [[def-na-zero-tangential-hcurl]]

[F3] The real vector-valued $L^2$ pairing is $(f,g)_{L^2}:=\sum_{i=1}^3\int_\Omega f_i g_i\,d\lambda_3$ and $\|f\|_2^2=\sum_{i=1}^3\|f_i\|_2^2$, as in the graph-space convention. For each component, the scalar supplier gives $|\int_\Omega f_i g_i\,d\lambda_3|\le\|f_i\|_2\|g_i\|_2$. Put $a_i=\|f_i\|_2$ and $b_i=\|g_i\|_2$. If $\sum_i b_i^2=0$, then $\sum_i a_ib_i=0$; otherwise, nonnegativity of $\sum_i(a_i-\lambda b_i)^2$ for $\lambda=(\sum_i a_ib_i)/(\sum_i b_i^2)$ gives $(\sum_i a_ib_i)^2\le(\sum_i a_i^2)(\sum_i b_i^2)$. Therefore $|(f,g)_{L^2}|\le\sum_i a_ib_i\le\|f\|_2\|g\|_2$. [[def-na-hcurl-space]] [[cor-cauchy-schwarz-inequality-for-l-two]]

[F4] The boundary cross product uses the right-handed coordinate formula in [A1]. If $n=(n_1,n_2,n_3)$ and $e=(e_1,e_2,e_3)$, substituting that formula twice gives $e\times(n\times e)=\bigl(n_1(e_2^2+e_3^2)-e_1(n_2e_2+n_3e_3),\ n_2(e_3^2+e_1^2)-e_2(n_3e_3+n_1e_1),\ n_3(e_1^2+e_2^2)-e_3(n_1e_1+n_2e_2)\bigr)=n|e|^2-e(e\cdot n)$.

[A2] Countable Choice permits selection of one smooth compactly supported graph-norm approximant at each accuracy $1/n$; only this countable family is selected in the PEC argument. [[def-countable-choice]]

## Proof

**Proof technique:** differentiate the bounded symmetric quadratic form in the $L^2$ norm, substitute the evolution equations, then use either the closure definition or the model's explicit Green-compatible impedance identity.

1.1 The coefficient fields define bounded symmetric multiplication operators on $L^2$, so $W(t)$ is finite. For a real Hilbert-space vector $u\in C^1(I;L^2)$ and a bounded symmetric operator $M$, expand $u(t+h)=u(t)+h u'(t)+o(h)$ in the $L^2$ norm in $Q(t)=\tfrac12(u(t),Mu(t))$. Bilinearity and symmetry give $ \frac{Q(t+h)-Q(t)}h=\frac12\left(\frac{u(t+h)-u(t)}h,Mu(t+h)\right)+\frac12\left(Mu(t),\frac{u(t+h)-u(t)}h\right)\longrightarrow (u'(t),Mu(t)). $ Applying this calculation to $E,\varepsilon$ and $H,\mu$ yields $W'(t)=(\partial_tE,\varepsilon E)_{L^2}+(\partial_tH,\mu H)_{L^2}$. [given, A1, algebra]

2.1 Substitute the two $L^2$ evolution identities from [A1] into the derivative of step 1.1 and use symmetry of the real $L^2$ pairing: $ W'(t)=(\operatorname{curl}H,E)_{L^2}-(J,E)_{L^2}-(\operatorname{curl}E,H)_{L^2}. $ All three pairings are finite by the H(curl) and $L^2$ hypotheses and [F3]. [step 1.1, A1, F1, F3, algebra]

3.1 In the PEC branch, [F2] and [A2] provide $E_n\in C_c^\infty(\Omega;\mathbb R^3)$ with $E_n\to E(t)$ and $\operatorname{curl}E_n\to\operatorname{curl}E(t)$ in $L^2$. For every $n$, the distributional-curl definition in [F1], tested against $E_n$, gives $(\operatorname{curl}H,E_n)_{L^2}=(H,\operatorname{curl}E_n)_{L^2}$. By [F3], the left side converges to $(\operatorname{curl}H,E)_{L^2}$ and the right side to $(H,\operatorname{curl}E)_{L^2}$. Hence the first and third terms in step 2.1 cancel, and $W'(t)=-(J,E)_{L^2}$. [step 2.1, A2, F1, F2, F3, algebra]

3.2 In the impedance branch, the Green compatibility identity in [A1] gives $(\operatorname{curl}H,E)_{L^2}-(H,\operatorname{curl}E)_{L^2}=-\int_{\partial\Omega}n\cdot(E_\tau\times H_\tau)\,dS$. The boundary law and $n\cdot E_\tau=0$ imply $ n\cdot(E_\tau\times H_\tau)=Y\,n\cdot\bigl(E_\tau\times(n\times E_\tau)\bigr)=Y|E_\tau|^2\ge0, $ since [F4] gives $E_\tau\times(n\times E_\tau)=n|E_\tau|^2-E_\tau(E_\tau\cdot n)$ and $|n|=1$. Substitution in step 2.1 gives $W'(t)=-(J,E)_{L^2}-\int_{\partial\Omega}Y|E_\tau|^2\,dS$ for almost every $t$; the boundary integrand is time-integrable by the $L^2$ trace and bounded-Y assumptions. [step 2.1, A1, F4, algebra]

4.1 In either branch, $W$ is continuously differentiable by step 1.1, the volume work is integrable, and the impedance power is integrable when present. Integrating the derivative identities of steps 3.1 or 3.2 on $[s,t]\subset I$ gives exactly the two energy balances in the Statement. [step 3.1, step 3.2, A1, algebra]

5.1 Consider a single admissible solution with $J=0$ and $E(t_0)=H(t_0)=0$. The coefficient lower bounds give $W(t)\ge\frac12\min(a_\varepsilon,a_\mu)(\|E(t)\|_2^2+\|H(t)\|_2^2)\ge0$. By step 4.1, $W(t)=0$ for PEC and $W(t)\le0$ for impedance whenever $t\ge t_0$; thus $W(t)=0$, and the lower bound gives $E(t)=H(t)=0$ in $L^2$ for every such $t$. This proves the homogeneous zero-data conclusion. For two solutions with the same current and initial data, their difference has the required time regularity and homogeneous evolution by linearity. The PEC closure is a vector space, so their difference is PEC-admissible. In the impedance case the difference tangential pair is $L^2$, tangential and satisfies the same linear boundary law. Subtracting the respective smooth-test identities shows that its two fields are weak tangential traces of the difference bulk fields outside the union of the two null sets of times. Its energy-pair Green identity is additionally assumed here, as in the Statement. Under that assumption step 4.1 applies to the difference and proves equality forward in time. No existence is asserted. [step 4.1, A1, algebra] ∎


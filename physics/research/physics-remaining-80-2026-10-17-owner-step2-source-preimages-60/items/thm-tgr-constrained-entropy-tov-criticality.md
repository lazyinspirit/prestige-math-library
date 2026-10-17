---
id: thm-tgr-constrained-entropy-tov-criticality
kind: theorem
title: "Constrained entropy criticality and TOV equivalence"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps:
  - def-tgr-spherical-static-state-domain
  - def-countable-choice
  - def-tgr-spherical-entropy-constraint-functional
  - lem-tgr-spherical-einstein-tov-reduction
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - thm-integration-by-parts
  - thm-continuous-implies-integrable
  - thm-real-power-continuity-and-derivatives
  - thm-algebra-of-derivatives
dependency_roles:
  def-tgr-spherical-static-state-domain: mathematical-premise
  def-countable-choice: mathematical-premise
  def-tgr-spherical-entropy-constraint-functional: mathematical-premise
  lem-tgr-spherical-einstein-tov-reduction: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.E, Eqs. (138)–(163)"
      url: "https://arxiv.org/pdf/1908.10806"
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lectures 21–22, PDF pp. 7–9"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
---

## Statement

Assume $\mathrm{ZF}+\mathrm{AC}_\omega$ as in [[def-countable-choice]]. Fix $R>0$, a state chart and positive even $C^2$ profiles $(\epsilon,n)$ with compact range and $b\ge b_*>0$ as in [[def-tgr-spherical-entropy-constraint-functional]]. Let $\Theta,\mu,p,S,N_b,E$ be the functions and functionals defined there. Define the lapse by
$$\phi(r)=\frac12\log b(R)-\int_r^R\frac{GM(t)/c^2+4\pi Gt^3p(t)/c^4}{t^2b(t)}\,dt,$$
whose integrand extends continuously to $0$ because $M(t)=O(t^3)$, so it solves the lapse equation of [[lem-tgr-spherical-einstein-tov-reduction]] with boundary normalization
$$\phi(R)=\frac12\log b(R).$$
An admissible profile curve is a map $\lambda\mapsto(\epsilon_\lambda,n_\lambda)$ on an open interval about $0$, $C^1$ in the sup-norm space $C^0([0,R])^2$, whose values are even $C^2$ profiles in the stated compactly-contained state chart and positive-$b$ domain, and whose derivative at $0$ is a smooth pair compactly supported in $(0,R)$ (extended evenly at the center). Define constrained stationarity to mean that $S$ has zero derivative at the base profile along every such curve on which both $E$ and $N_b$ are constant. Then constrained stationarity is equivalent to the existence of constants $\alpha\in\mathbb R$ and $\beta\in\mathbb R$ such that
$$\frac{\mu(r)}{\Theta(r)}=\alpha,\qquad \Theta(r)e^{\phi(r)}=\Theta_K,\qquad \mu(r)e^{\phi(r)}=\mu_K$$
are constant on $(0,R)$. In that case the profile satisfies
$$p'(r)=-(\epsilon(r)+p(r))\phi'(r) =-\frac{G(\epsilon(r)+p(r))(M(r)+4\pi r^3p(r)/c^2)}{c^2r^2b(r)},$$
the Tolman and Klein products are $\Theta_K=\Theta(R)\sqrt{b(R)}$ and $\mu_K=\mu(R)\sqrt{b(R)}$, and the two multipliers are $\alpha=\mu/\Theta$ and $\beta=1/\Theta_K$. The conclusion is a first-variation criticality statement only; it proves neither a local or global entropy maximum nor existence or dynamical stability of a physical fluid.

## Facts & Assumptions

**Given:** The state chart, positive profiles, fixed radius, uniform positive lower bound on $b$, and functionals of [[def-tgr-spherical-entropy-constraint-functional]], together with the conditional mass/lapse equations of [[lem-tgr-spherical-einstein-tov-reduction]].

[F1] The static geometry, signature, and formal SI convention are those of [[def-tgr-spherical-static-state-domain]]. The functional derivatives are computed on the fixed-radius profile domain with $b=1-\frac{2K}{r}\int_0^r\epsilon(t)t^2dt$, $K=4\pi G/c^4$, $S=4\pi\int_0^R s r^2b^{-1/2}dr$, $N_b=4\pi\int_0^R n r^2b^{-1/2}dr$, and $E=4\pi\int_0^R\epsilon r^2dr$ ([[def-tgr-spherical-entropy-constraint-functional]]).

[F2] The local state chart obeys $d\epsilon=\Theta\,ds+\mu\,dn$ and $\epsilon+p=\Theta s+\mu n$ by the definitions in [[def-tgr-spherical-entropy-constraint-functional]].

[F3] The spherical mass and lapse equations are $M'=4\pi r^2\epsilon/c^2$ and $\phi'=(GM/c^2+4\pi Gr^3p/c^4)/(r^2b)$ ([[lem-tgr-spherical-einstein-tov-reduction]]).

[F4] A smooth map in finite-dimensional Euclidean spaces with invertible derivative has a local smooth inverse, with no choice axiom ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]).

[F5] For any nonempty interval there is a smooth nonnegative bump supported in a smaller interval and positive on its interior ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F6] Continuous parameter derivatives pass through these compact profile integrals ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]), and the integration-by-parts identity holds for differentiable factors with integrable derivatives ([[thm-integration-by-parts]]).

[F7] On a positive interval the real-power rules give $(b^{-1/2})'=-(1/2)b^{-3/2}b'$, and product, quotient and chain rules hold ([[thm-real-power-continuity-and-derivatives]], [[thm-algebra-of-derivatives]]).

[F8] Each continuous integrand on a compact interval is Riemann integrable in the Darboux convention ([[thm-continuous-implies-integrable]]).

[A1] The countable-choice assumption is inherited from the geometric supplier chain through [[def-countable-choice]]; the finite-dimensional correction theorem used in the variational argument is choice-free.

## Proof

1.1 For a smooth compactly supported variation $(\dot\epsilon,\dot n)$ in $(0,R)$, differentiating the mass definition and $b=1-2GM/(c^2r)$ gives $$\dot E=4\pi\int_0^R\dot\epsilon r^2dr,\quad \dot b(r)=-\frac{2K}{r}\int_0^r t^2\dot\epsilon(t)dt,\quad \frac{d}{d\lambda}\bigg|_0 b_\lambda(r)^{-1/2} =\frac{K}{r}b(r)^{-3/2}\int_0^r t^2\dot\epsilon(t)dt.$$ The compact-range and positive-$b$ hypotheses give uniform differentiability under the integrals by [F6]. Small multiples of these variations remain admissible because the profile range is compactly contained in the open chart and $b\ge b_*>0$. [given, F1, F6, F7, F8, algebra]

2.1 Using $s_\epsilon=1/\Theta$ and $s_n=-\mu/\Theta$, the first variations are $$\dot S=4\pi\int_0^Rr^2\left[b^{-1/2}\left(\frac{\dot\epsilon}{\Theta}-\frac{\mu}{\Theta}\dot n\right)+s\,\frac{d}{d\lambda}\bigg|_0b_\lambda^{-1/2}\right]dr,\quad \dot N_b=4\pi\int_0^Rr^2\left[b^{-1/2}\dot n+n\,\frac{d}{d\lambda}\bigg|_0b_\lambda^{-1/2}\right]dr.$$ For a nonnegative bump $\eta_n\not\equiv0$, the variation $(0,\eta_n)$ has $\dot E=0$ and $\dot N_b=4\pi\int\eta_n r^2b^{-1/2}dr>0$. For another nonnegative bump $\eta_\epsilon\not\equiv0$, $(\eta_\epsilon,0)$ has $\dot E=4\pi\int\eta_\epsilon r^2dr>0$. Hence the derivative map $(\dot\epsilon,\dot n)\mapsto(\dot E,\dot N_b)$ is onto $\mathbb R^2$. [F1, F2, F5, step 1.1, algebra]

3.1 Fix any tangent variation $(\dot\epsilon,\dot n)$ with $\dot E=\dot N_b=0$, and choose the two bump directions from step 2.1 whose constraint derivative columns are linearly independent. Apply [F4] to the finite-dimensional correction map $$(a_\epsilon,a_n,\lambda)\longmapsto\bigl(E[\epsilon+\lambda\dot\epsilon+a_\epsilon\eta_\epsilon,n+\lambda\dot n+a_n\eta_n],\, N_b[\epsilon+\lambda\dot\epsilon+a_\epsilon\eta_\epsilon,n+\lambda\dot n+a_n\eta_n],\,\lambda\bigr).$$ Its Jacobian at $(0,0,0)$ is invertible: the upper-left $2\times2$ block has independent constraint columns and the last row is $(0,0,1)$. The local inverse yields differentiable corrections $a_\epsilon(\lambda),a_n(\lambda)$ keeping both constraints fixed. Since the original tangent has zero constraint derivative, differentiating the constraint equations at zero and using the same invertible block gives $a_\epsilon'(0)=a_n'(0)=0$. The correction path remains admissible for small $\lambda$ by the compact-in-chart and positive-$b$ hypotheses. Therefore constrained stationarity implies $\dot S=0$ for every tangent variation in the kernel of $(\dot E,\dot N_b)$. [given, F4, step 2.1, algebra]

3.2 Put $q=b^{-1/2}$ and $\mathcal L=S+\alpha N_b-\beta E$. Substituting the variations from steps 1.1–1.2 and integrating by parts in the single radial variable gives $$\dot{\mathcal L} =4\pi\int_0^Rr^2\left[ q\left(\alpha-\frac{\mu}{\Theta}\right)\dot n+ \left\{\frac q\Theta+ K\int_r^R\frac{t(s+\alpha n)}{b(t)^{3/2}}dt-\beta\right\}\dot\epsilon \right]dr.$$ For the nonlocal term, set $Q(r)=\int_0^r t^2\dot\epsilon(t)dt$ and $H(r)=K\int_r^R t(s+\alpha n)b^{-3/2}dt$. Then $H(R)=Q(0)=0$, $H'=-Kr(s+\alpha n)b^{-3/2}$, and integration by parts gives $K\int_0^Rr(s+\alpha n)b^{-3/2}Q(r)dr=\int_0^Rr^2H(r)\dot\epsilon(r)dr$. Thus the displayed formula has no omitted boundary term. [F1, F2, F6, step 1.1, step 2.1, algebra]

4.1 Because the constraint derivative is onto and $\dot S$ vanishes on its kernel, finite-dimensional linear algebra gives constants $\alpha,\beta$ such that $\dot S+\alpha\dot N_b-\beta\dot E=0$ for every compactly supported variation. Conversely, if such multipliers exist, then $\dot S=0$ for every variation with $\dot E=\dot N_b=0$. The multiplier argument uses only the two bump directions and finite-dimensional algebra. [step 2.1, step 3.1, algebra]

4.2 The two bracket coefficients in step 3.2 are continuous. Each can be tested against every smooth compactly supported variation; if a coefficient were positive or negative at an interior point, continuity and [F5] would give a nonnegative bump supported where it keeps that sign, contradicting the vanishing integral. Since $q>0$, this gives $\mu/\Theta=\alpha$ and $$\frac q\Theta+K\int_r^R\frac{t(s+\alpha n)}{b(t)^{3/2}}dt=\beta.$$ By the Euler identity in [F2], $s+\alpha n=(\epsilon+p)/\Theta$. [F2, F5, step 3.2]

5.1 Differentiate the last identity on $(0,R)$; using $q=b^{-1/2}$ and the derivative rules [F7] gives $$\frac{\Theta'}{\Theta}=-\frac{b'}{2b}-\frac{Kr(\epsilon+p)}b.$$ The mass equation in [F3] and the definition of $b$ give $b'=2GM/(c^2r^2)-2Kr\epsilon$, so $$\frac{\Theta'}{\Theta}=-\frac{GM/(c^2r^2)+Kr p}{b}=-\phi'.$$ Thus $\Theta e^\phi$ is constant. Since $\mu/\Theta=\alpha$, $\mu e^\phi=\alpha\Theta e^\phi$ is constant as well. At $r=R$, the boundary normalization makes $e^{\phi(R)}=\sqrt{b(R)}$, and the energy bracket has integral zero there; hence $\beta=1/(\Theta(R)\sqrt{b(R)})=1/\Theta_K$. [A1, F1, F2, F3, F7, step 4.2, algebra]

6.1 Differentiating $\epsilon+p=\Theta s+\mu n$ using the calculus rules [F7] and substituting $d\epsilon=\Theta ds+\mu dn$ gives $dp=s\,d\Theta+n\,d\mu$. Since $\mu/\Theta=\alpha$, $\mu'=\alpha\Theta'$, so $$p'=s\Theta'+n\mu'=(s+\alpha n)\Theta'=\frac{\epsilon+p}{\Theta}\Theta'=-(\epsilon+p)\phi'.$$ Substituting the lapse equation from [F3] gives the TOV pressure equation. [A1, F2, F3, F7, step 5.1, algebra]

7.1 Conversely, suppose the stated Tolman and Klein products are constant with the boundary normalization. Then $\mu/\Theta$ is constant. The Euler and differential identities in [F2] imply $p'=-(\epsilon+p)\phi'$, so the TOV pressure equation follows from [F3]. Reversing the algebra in step 5.1 shows that the energy bracket in step 4.2 has derivative zero; its boundary value at $R$ is $\beta=1/\Theta_K$, so it equals $\beta$ throughout. The number bracket vanishes because $\mu/\Theta=\alpha$. Therefore step 3.2 gives $\dot{\mathcal L}=0$ for every variation, and any constraint-preserving variation has $\dot S=0$. This proves constrained stationarity and both directions. [A1, F2, F3, step 3.2, step 4.2, step 5.1] ∎

## Remarks

The variations establish a first-order critical-point equivalence only. Neither the source derivation nor this proof establishes a maximum, a second-variation sign, existence of a critical profile, a general equation of state, or dynamical stability. In the formal SI bookkeeping, $\alpha=\mu/\Theta$ has units $\mathrm J\,\mathrm K^{-1}$, $\Theta_K$ has units $\mathrm K$, $\mu_K$ has units $\mathrm J$, and $\beta=1/\Theta_K$ has units $\mathrm K^{-1}$. The boundary normalization is a clock convention for this fixed-radius calculation, not a vacuum-matching assumption.



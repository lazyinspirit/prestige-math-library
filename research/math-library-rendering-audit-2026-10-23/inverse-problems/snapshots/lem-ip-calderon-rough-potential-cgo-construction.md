---
id: lem-ip-calderon-rough-potential-cgo-construction
kind: lemma
title: Quantitative CGO construction for C1alpha conductivity potentials
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-ip-calderon-bourgain-cutoff-estimates
  - lem-ip-calderon-averaged-negative-bourgain-estimate
  - thm-plancherel
  - thm-young-convolution-inequality
  - def-distributional-derivative
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Haberman and Tataru, Uniqueness in Calderón's problem with Lipschitz conductivities"
      url: "https://arxiv.org/pdf/1108.6068"
      locator: "Theorem 2.1 and proof, printed pp. 8–9; Section 4, Theorem 4.1 and contraction proof, printed pp. 13–14."
    - title: "Caro, García and Reyes, Stability of the Calderón problem for less regular conductivities"
      url: "https://arxiv.org/pdf/1205.2487"
      locator: "Section 3, equations (3.7)–(3.17), printed pp. 10–14."
dependency_level: 2
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume Countable Choice. Fix $d\ge3$, $0<\alpha<1$, a ball $B\subset\mathbb R^d$, and $K>0$. Let $\gamma\in C^{1,\alpha}(\mathbb R^d)$ be real and positive, equal to $1$ outside $B$, and put $a=\nabla\log\gamma$. Suppose
$$\|a\|_\infty+[a]_{C^{0,\alpha}(\mathbb R^d)}\le K.$$
Define the compactly supported distribution $q$ and its multiplication form by
$$\langle q,v\rangle=-\frac12\int a\cdot\nabla v+\frac14\int |a|^2v,\qquad \langle m_q u,v\rangle=-\frac12\int a\cdot\nabla(uv)+\frac14\int |a|^2uv.$$
These pairings are complex bilinear. For the angular Fourier norms with $p_\zeta(\xi)=-|\xi|^2+2i\zeta\cdot\xi$, there are constants $C,s_0\ge1$, depending only on $d,\alpha,B,K$, such that for every null phase $\zeta$ of length $\sqrt2s$ with $s\ge s_0$,
$$\|m_q\|_{\dot X_\zeta^{1/2}\to\dot X_\zeta^{-1/2}}\le Cs^{-\alpha/(1+\alpha)}\le\frac12.$$
There is $r_\zeta\in\dot X_\zeta^{1/2}\cap H^1_{\mathrm{loc}}(\mathbb R^d)$ such that
$$U_\zeta(x)=e^{x\cdot\zeta}(1+r_\zeta(x)),\qquad (-\Delta+q)U_\zeta=0,\qquad \|r_\zeta\|_{\dot X_\zeta^{1/2}}\le2\|q\|_{\dot X_\zeta^{-1/2}}.$$
The equation uses the multiplication form above against compactly supported smooth tests. For the phases $\zeta_\pm(s,\eta)$ associated to $k$ and $P\perp k$, if $\lambda\ge\max\{s_0,100\sqrt{1+|k|^2}\}$, then for either sign,
$$\frac1\lambda\int_{S^1(P)}\int_\lambda^{2\lambda}\left(\|q\|_{\dot X_{\zeta_\pm}^{-1/2}}^2+\|r_{\zeta_\pm}\|_{\dot X_{\zeta_\pm}^{1/2}}^2\right)ds\,d\eta\le C\left(1+\frac{1+|k|^2}{\lambda}\right)\lambda^{-\alpha/(1+\alpha)}.$$

## Statement references

[[lem-ip-calderon-bourgain-cutoff-estimates|The localized Fourier spaces and norms.]]

[[lem-ip-calderon-averaged-negative-bourgain-estimate|The paired null phases and the circle-and-scale average.]]

[[def-distributional-derivative|Distribution derivatives use bilinear test pairings.]]

## Facts & Assumptions

**Given:** Countable Choice and the domain, exponent and conductivity in the statement.

[F1] For every fixed smooth compactly supported $\phi$, the cutoff estimates give $\|\phi u\|_2\le C s^{-1/2}\|u\|_{\dot X^{1/2}_\zeta}$ and $\|\nabla(\phi u)\|_2\le Cs^{1/2}\|u\|_{\dot X^{1/2}_\zeta}$. Also $\|\phi f\|_{\dot X^{-1/2}_\zeta}\le C\|f\|_{X^{-1/2}_\zeta}$. ([[lem-ip-calderon-bourgain-cutoff-estimates]])

[F2] For a compactly supported vector field $f\in L^2$, the average of $\|\phi\operatorname{div}f\|_{\dot X^{-1/2}}^2$ is at most $C[(\lambda h^2)^{-1}\|f\|_2^2+(1+(1+|k|^2)/\lambda)\omega_2(f,h)^2]$. ([[lem-ip-calderon-averaged-negative-bourgain-estimate]])

[F3] Fourier transformation is unitary, and convolution maps $L^1\times L^2$ into $L^2$ with the product norm bound. ([[thm-plancherel]], [[thm-young-convolution-inequality]])

[F4] Distributional differentiation is defined by negative transposition on test functions, with complex bilinear pairing. ([[def-distributional-derivative]])

[A1] Countable Choice is assumed at the Fourier, completion and integration interfaces. ([[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Fix $\phi\in C_c^\infty$ equal to $1$ on the ball consisting of points of distance at most $2$ from $B$. For Schwartz $u,v$, the integrands defining $m_q$ are supported where $\phi=1$, so they can be written using $u_B=\phi u,v_B=\phi v$. By [F1], $\|u_Bv_B\|_1\le Cs^{-1}\|u\|_{\dot X^{1/2}_\zeta}\|v\|_{\dot X^{1/2}_\zeta}$ and $\|\nabla(u_Bv_B)\|_1\le C\|u\|_{\dot X^{1/2}_\zeta}\|v\|_{\dot X^{1/2}_\zeta}$, the latter from the product rule and the two combinations $s^{1/2}s^{-1/2}$. Thus a bounded coefficient multiplying $u_Bv_B$ costs $Cs^{-1}$, whereas a bounded vector coefficient multiplying its gradient costs $C$. The same estimates hold when $u,v$ have any two null phases of the same length, because [F1] is uniform in the phase directions. These bounds also prove continuity of the bilinear form on the weighted completions and local $H^1$ representatives. [A1, F1, given, algebra]

2.1 Choose a nonnegative smooth mollifier $\rho$ of integral $1$ supported in the unit ball and put $a_h=\rho_h*a$ for $0<h\le1$. The bounds $\|\operatorname{div}a_h\|_\infty\le C_\rho h^{-1}\|a\|_\infty$ and $\|a-a_h\|_\infty\le[a]_{C^{0,\alpha}}h^\alpha$ follow, respectively, by differentiation of the kernel and integration of $|a(x)-a(x-y)|\le K|y|^\alpha$. The support of $a_h$ stays inside the region where $\phi=1$. Split the derivative term of $m_q$ into $a_h$ and $a-a_h$, and integrate the former by parts. Step 1.1 gives $|\langle m_qu,v\rangle|\le C[s^{-1}K^2+s^{-1}h^{-1}K+Kh^\alpha]\|u\|_{\dot X^{1/2}}\|v\|_{\dot X^{1/2}}$. Take $h=s^{-1/(1+\alpha)}$; since $s\ge1$, this is bounded by $Cs^{-\alpha/(1+\alpha)}$ times the product of norms. Weighted Fourier duality identifies the bounded bilinear form with a map to $\dot X^{-1/2}$: in Fourier coordinates the dual weight is $|p_\zeta(-\xi)|^{-1}$ for a bilinear pairing, and reflection changes the test phase to $-\zeta$; the cutoff bounds of step 1.1 are identical for $\zeta$ and $-\zeta$. Therefore the same proof with $v$ measured in $\dot X_{-\zeta}^{1/2}$ gives exactly the asserted map norm. Enlarge $s_0$ until this norm is at most $1/2$. [F1, F3, F4, step 1.1, algebra]

3.1 The weighted completions are realized as the Fourier $L^2$ spaces with weights $|p_\zeta|^{\pm1}$: smooth functions supported away from the characteristic set and inside a bounded frequency ball are dense by truncation and ordinary $L^2$ approximation there. They define tempered distributions because reciprocal-weight Cauchy–Schwarz controls their pairing with a Schwartz test; the only new local singularity is $|p_\zeta|^{-1}$, integrable by the codimension-two computation in [F1]. Multiplication of the Fourier transform by $p_\zeta^{-1}$ is consequently an isometry $G_\zeta:\dot X^{-1/2}_\zeta\to\dot X^{1/2}_\zeta$ and is a distributional right inverse of $\Delta+2\zeta\cdot\nabla$. The characteristic set has measure zero, so its values need not be assigned. Also $q\in\dot X^{-1/2}_\zeta$: its compactly supported divergence part follows from [F1] applied to $\operatorname{div}a\in X^{-1/2}_\zeta$, and its bounded compactly supported zero-order part follows from the same cutoff bound. For the former, $|\xi|^2/(s+|p_\zeta(\xi)|)$ is bounded for fixed $s$, so $a\in L^2$ suffices; for the latter, the inhomogeneous negative norm is at most $s^{-1/2}$ times its $L^2$ norm. [F1, F3, F4, step 2.1, algebra]

4.1 By steps 2.1–3.1, the series $r_\zeta=\sum_{j=0}^\infty(G_\zeta m_q)^jG_\zeta q$ converges in $\dot X^{1/2}_\zeta$, has norm at most $2\|q\|_{\dot X^{-1/2}_\zeta}$, and satisfies $(\Delta+2\zeta\cdot\nabla)r_\zeta=q+m_qr_\zeta$. For a cutoff equal to $1$ on any fixed compact set, [F1] gives convergence in $H^1$ there, so $r_\zeta\in H^1_{\mathrm{loc}}$. The product-form definition agrees with the distributional equation by this local convergence. Conjugating $-\Delta$ by $e^{x\cdot\zeta}$ gives $-\Delta-2\zeta\cdot\nabla-\zeta\cdot\zeta$; the last term vanishes. Hence the displayed remainder equation is exactly $(-\Delta+q)e^{x\cdot\zeta}(1+r_\zeta)=0$. This proves existence and the remainder bound. [F1, F4, step 2.1, step 3.1, algebra, construct]

5.1 Since $a$ is supported in $\overline B$, for $0<h\le1$ its translation difference has support in a fixed bounded ball and absolute value at most $Kh^\alpha$. Consequently $\omega_2(a,h)\le C_BKh^\alpha$ and $\|a\|_2\le C_BK$. Apply [F2] to $a$ with a cutoff equal to $1$ near its support. The zero-order part $|a|^2$ has squared negative-half norm at most $Cs^{-1}\||a|^2\|_2^2\le Cs^{-1}C_BK^4$ by [F1]. The inequality $\|v+w\|^2\le2\|v\|^2+2\|w\|^2$ therefore bounds the average squared norm of $q$ by $C[\lambda^{-1}+\lambda^{-1}h^{-2}+(1+(1+|k|^2)/\lambda)h^{2\alpha}]$. Set $h=\lambda^{-1/(2+2\alpha)}$. Both $\lambda^{-1}h^{-2}$ and $h^{2\alpha}$ equal $\lambda^{-\alpha/(1+\alpha)}$, and $\lambda^{-1}$ is no larger. The pointwise remainder bound from step 4.1 then gives the asserted average for $q$ and $r$ together. The parameterized norms and integrals are measurable: first for Fourier-truncated smooth data this follows directly from the measurable weights; the Neumann partial sums are measurable as iterated multipliers and fixed coefficient forms, and their norm limits retain measurability. [F1, F2, F3, step 4.1, algebra] ∎

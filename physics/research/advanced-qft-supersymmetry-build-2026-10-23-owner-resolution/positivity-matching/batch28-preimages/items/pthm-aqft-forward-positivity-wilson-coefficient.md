---
id: pthm-aqft-forward-positivity-wilson-coefficient
kind: physics-theorem
title: Forward positivity for a matched scalar EFT coefficient
status: draft
origin: pipeline
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
dependency_level: 3
deps:
  - def-aqft-eft-scattering-channel
  - thm-aqft-gapped-scalar-forward-positivity
dependency_roles:
  def-aqft-eft-scattering-channel: formulation-prerequisite
  thm-aqft-gapped-scalar-forward-positivity: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
physical_scope: >-
  Conditional sign constraint on the matched on-shell coefficient combination
  of one four-dimensional gapped identical-real-scalar channel satisfying the
  exact analyticity, crossing, high-energy, pole-subtraction, spectral, and
  matching inputs stated here. It establishes neither amplitude existence nor a
  universal sign for arbitrary off-shell Wilson coefficients.
sources:
  references:
    - title: Allan Adams et al., Causality, Analyticity and an IR Obstruction to UV Completion
      url: https://arxiv.org/pdf/hep-th/0602178
      locator: Section 4, PDF pp. 14–20, forward contour, pole subtraction, mass gap, and optical-theorem positivity.
    - title: Claudia de Rham et al., Positivity Bounds for Scalar Theories
      url: https://arxiv.org/pdf/1702.06134
      locator: Full five-page paper; §§2.1–2.2, equations (1)–(15), PDF pp. 1–3.
    - title: Ivano Basile et al., Lectures in Quantum Gravity
      url: https://arxiv.org/pdf/2412.08690.pdf
      locator: Full 303-page lecture-notes PDF; §§3.2.1–3.3.1, printed pp. 90–98.
    - title: C. P. Burgess, Introduction to Effective Field Theory
      url: https://arxiv.org/pdf/hep-th/0701053
      locator: Full 55-page review; §§2.2.1, 2.2.3–2.2.4, and the opening of §2.2.5, printed pp. 20–25, Wilson action and matching context.
---

## Statement

Let $m>0$, $\Lambda>2m$, and $0<\mu_*<\Lambda$. Use natural units and the four-dimensional Minkowski metric $\eta=\operatorname{diag}(-1,1,1,1)$. Let $\phi$ be a real scalar of engineering dimension one with a stable one-particle pole of mass $m$, where stable means an isolated real mass pole with zero decay width. In the convention $S=1+i(2\pi)^4\delta^4(p_{\mathrm{out}}-p_{\mathrm{in}})\mathcal A+\cdots$, let $A(s)=\mathcal A(s,0,4m^2-s)$ be the forward amplitude for identical on-shell external momenta $p_j^2=-m^2$, $p_1+p_2=p_3+p_4$, with $s=-(p_1+p_2)^2$, $t=-(p_1-p_3)^2$, $u=-(p_1-p_4)^2$, $s+t+u=4m^2$, and crossing $A(s)=A(4m^2-s)$. For a finite crossing-paired sum containing every stable variable simple pole in the open subthreshold interval

$$P(s)=\sum_j\left(\frac{r_j}{s-p_j}+\frac{r_j}{4m^2-p_j-s}\right),\qquad r_j\in\mathbb R,\quad p_j\in(0,4m^2)\setminus\{2m^2\},$$

Put $\nu_0=2m^2$, $v=s-2m^2$, and $B(v)=A(2m^2+v)-P(2m^2+v)$. Require $B(-v)=B(v)$, $B(\overline v)=\overline{B(v)}$, and holomorphy on $\mathbb C\setminus(( -\infty,-\nu_0]\cup[\nu_0,\infty))$. Require finite upper and lower cut-boundary values except at $\pm\nu_0$, and require $B$ to extend continuously from each open half-plane onto every compact cut-bank segment avoiding $\pm\nu_0$. This compact-bank continuity is an explicit admissibility input. Also require vanishing endpoint arcs and $B(w)=o(|w|^2)$ uniformly as $|w|\to\infty$ in the closed upper half-plane including upper cut-bank limits. Let $\rho(\nu)=\operatorname{Im}B(\nu+i0)$ be nonnegative and Riemann integrable on every compact subinterval of $[\nu_0,\infty)$, with finite $\int_{\nu_0}^{\infty}\rho(\nu)\nu^{-3}\,d\nu$. For every real $|v|<\nu_0$, require the upper/lower boundary-bank integrals of $[B(x)-B(0)]/[x^2(x-v)]$ to exist as finite improper Riemann limits. Assume no massless pole or cut reaches $t=0$. Define $c_1=B''(0)/2!$.

At the fixed matching scale $\mu_*$, suppose the selected local representative contains the real dimension-eight interaction $C_8(\mu_*)(\partial_\mu\phi\,\partial^\mu\phi)^2/\Lambda^4$, with $C_8(\mu_*)$ dimensionless, and the exact matched coefficient identity is $c_1=4C_8(\mu_*)/\Lambda^4+\Delta_{\mathrm{match}}$, where $\Delta_{\mathrm{match}}$ has mass dimension $-4$ and includes every other contribution to the exact $v^2$ coefficient. Then

$$C_8(\mu_*)+\frac{\Lambda^4}{4}\Delta_{\mathrm{match}}\ge0.$$

If the exact retained-order matching condition additionally gives $\Delta_{\mathrm{match}}=0$, then $C_8(\mu_*)\ge0$. The result is only a necessary bound on this specified matched channel combination; it asserts neither that a full amplitude exists for every coefficient passing the bound nor that every off-shell operator coefficient has a universal sign.

## Statement references

[[def-aqft-eft-scattering-channel]]

[[thm-aqft-gapped-scalar-forward-positivity]]

[Adams et al., *Causality, Analyticity and an IR Obstruction to UV Completion*, § 4](https://arxiv.org/pdf/hep-th/0602178)

[de Rham et al., *Positivity Bounds for Scalar Theories*, §§ 2.1–2.2](https://arxiv.org/pdf/1702.06134)

[Basile et al., *Lectures in Quantum Gravity*, §§ 3.2.1–3.3.1](https://arxiv.org/pdf/2412.08690.pdf)

[Burgess, *Introduction to Effective Field Theory*, §§ 2.2.1, 2.2.3–2.2.4, and opening § 2.2.5](https://arxiv.org/pdf/hep-th/0701053)

## Facts & Assumptions

**Given:** A gapped scalar forward-amplitude input with $m>0$, the stated crossing-even pole subtraction and analytic/spectral hypotheses, a fixed EFT representative and matching scale, and the exact coefficient identity $c_1=4C_8(\mu_*)/\Lambda^4+\Delta_{\mathrm{match}}$.

[A1] [[def-aqft-eft-scattering-channel]]: the supplied amplitude has the stated $m>0$ gap, forward crossing, complete specified pole subtraction, two-cut holomorphic domain, real analyticity, uniform $o(|v|^2)$ high-energy condition, nonnegative locally integrable $\rho$ with finite $\rho/\nu^3$ moment, and boundary/endpoint integral conditions. The same definition fixes $c_1=B''(0)/2!$ and the exact match $c_1=4C_8(\mu_*)/\Lambda^4+\Delta_{\mathrm{match}}$ for the displayed dimension-eight local representative.

[A2] [[def-aqft-eft-scattering-channel]]: the fixed local representative contains $\mathcal O_8=(\partial_\mu\phi\,\partial^\mu\phi)^2$ with interaction density $+C_8(\mu_*)\mathcal O_8/\Lambda^4$, using the stated mostly-plus metric, identical external scalar, and Mandelstam conventions.

[A3] [[def-aqft-eft-scattering-channel]]: $B$ extends continuously from each open half-plane onto every compact segment of either real cut bank avoiding $\pm\nu_0$; this is an explicit admissibility assumption on the supplied data.

[F1] [[thm-aqft-gapped-scalar-forward-positivity]]: for the specified gapped identical-scalar data, $B^{(2n)}(0)/(2n)!=(2/\pi)\int_{\nu_0}^{\infty}\rho(\nu)\nu^{-(2n+1)}\,d\nu\ge0$ for every integer $n\ge1$. Only $n=1$ is used.

## Proof

1.1 The channel assumptions in [A1] and [A3] give the exact hypotheses of [F1], including $m>0$, crossing evenness, complete subtraction of the specified variable poles, the two-cut analytic domain, the uniform high-energy bound, nonnegative $\rho$, compact cut-bank continuity, and the boundary and convergence conditions. Taking $n=1$ in [F1] and using $c_1=B''(0)/2!$ yields $c_1\ge0$. This is a conditional deduction from the supplied amplitude data, not a construction of an amplitude. [given, A1, A3, F1]

1.2 For the displayed interaction, take all four external momenta incoming, $k=(p_1,p_2,-p_3,-p_4)$. For each unordered pairing, the two identical bilinears can be assigned in $2!$ ways and each bilinear's two fields can be ordered in $2!$ ways, giving $2!\,2!\,2!=8$ assignments. Hence the contact amplitude is $8C_8(\mu_*)/\Lambda^4$ times $\sum_{\rm pairings}(k_i\cdot k_j)(k_k\cdot k_l)$. From $p_i^2=-m^2$ and the definitions, $p_1\cdot p_2=p_3\cdot p_4=m^2-s/2$, $p_1\cdot p_3=p_2\cdot p_4=(t-2m^2)/2$, and $p_1\cdot p_4=p_2\cdot p_3=(u-2m^2)/2$. The incoming convention changes the sign of each dot product involving one outgoing leg, so the three pairing products are $(s-2m^2)^2/4$, $(t-2m^2)^2/4$, and $(u-2m^2)^2/4$. Therefore $\mathcal A_8=2C_8(\mu_*)/\Lambda^4[(s-2m^2)^2+(t-2m^2)^2+(u-2m^2)^2]$. At $t=0$, $u-2m^2=-v$, so $\mathcal A_8=8C_8(\mu_*)m^4/\Lambda^4+4C_8(\mu_*)v^2/\Lambda^4$; its $v^2$ coefficient is $4C_8(\mu_*)/\Lambda^4$. [A2, algebra]

2.1 By the exact matching identity in [A1], the full coefficient is $c_1=4C_8(\mu_*)/\Lambda^4+\Delta_{\mathrm{match}}$. Combining this with step 1.1 gives $4C_8(\mu_*)/\Lambda^4+\Delta_{\mathrm{match}}\ge0$. Multiplying by $\Lambda^4/4>0$ proves the claimed matched-coefficient inequality. [A1, step 1.1, algebra]

3.1 If the additional matching condition is $\Delta_{\mathrm{match}}=0$, step 2.1 reduces to $C_8(\mu_*)\ge0$. Equality is permitted because [F1] supplies a nonnegative, not strictly positive, moment. [given, F1, step 2.1, algebra] ∎

## Remarks

The positivity input concerns the exact pole-subtracted on-shell amplitude coefficient. The local contact vertex contributes $4C_8/\Lambda^4$ in the stated convention, while other terms at the same $v^2$ order remain in $\Delta_{\mathrm{match}}$. A finite-order EFT calculation sets that remainder to zero only if the exact matching data explicitly say so. Massless forward exchange, gravitational poles, non-polynomial high-energy growth, or an unproved matching identity fall outside this theorem's hypotheses.

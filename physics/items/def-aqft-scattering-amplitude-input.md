---
id: def-aqft-scattering-amplitude-input
kind: definition
title: Gapped identical-scalar forward-amplitude data
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: 'Allan Adams, Nima Arkani-Hamed, Sergei Dubovsky, Alberto Nicolis, and Riccardo Rattazzi, Causality, Analyticity and an IR Obstruction to UV Completion'
      url: https://arxiv.org/pdf/hep-th/0602178
      locator: 'Section 4, PDF pp. 14–19: massive IR regulation, forward crossing, cuts, polynomial growth, contour closure, and the optical-theorem sign.'
    - title: 'Claudia de Rham, Scott Melville, Andrew J. Tolley, and Shuang-Yong Zhou, Positivity Bounds for Scalar Theories'
      url: https://arxiv.org/pdf/1702.06134
      locator: 'Full five-page paper; §§2.1–2.2, equations (1)–(15), PDF pp. 1–3: partial-wave convention, unitarity, analyticity, two subtractions, pole removal, and the forward crossing variable.'
    - title: 'Ivano Basile, Luca Buoninfante, Francesco Di Filippo, Benjamin Knorr, Alessia Platania, and Anna Tokareva, Lectures in Quantum Gravity'
      url: https://arxiv.org/pdf/2412.08690.pdf
      locator: 'Full 303-page lecture-notes PDF; §§3.2.1–3.2.3 and 3.3.1, printed pp. 90–98: analyticity, high-energy growth, contour deformation, subtractions, optical theorem, and the forward scalar bound.'
---

## Definition

Use natural units $c=\hbar=1$ and metric $\eta=\operatorname{diag}(-1,1,1,1)$. An external scalar datum consists of a spin-zero species assigned a mass $m>0$ and elastic two-particle threshold $s=4m^2$. This is a mathematical input package; it does not construct a one-particle scattering state or a scattering matrix. For real on-shell momenta $p_1,p_2$ incoming and $p_3,p_4$ outgoing, with $p_j^2=-m^2$ and $p_1+p_2=p_3+p_4$, define

$$s=-(p_1+p_2)^2,\qquad t=-(p_1-p_3)^2,\qquad u=-(p_1-p_4)^2.$$

Then $s+t+u=4m^2$. The forward slice is the complex-valued function $A(s)=\mathcal A(s,0,4m^2-s)$ obtained by analytically continuing the identical-scalar $2\to2$ amplitude to $t=0$. The crossing action on this slice is $s\mapsto4m^2-s$, which exchanges $s$ and $u$. Assume $A(s)=A(4m^2-s)$ wherever both sides are defined.

For context, define the physical elastic kinematic region

$$\mathscr P_m=\{(s,t,u)\in\mathbb R^3:s>4m^2,\;-(s-4m^2)\le t\le0,\;u=4m^2-s-t\}.$$

When supplied, the full physical amplitude is a map $\mathcal A_{\mathrm{phys}}:\mathscr P_m\to\mathbb C$; its analytic continuation used in the forward data above is a separate supplied part of the input, with upper boundary value $A(s+i0)=\mathcal A_{\mathrm{phys}}(s,0,4m^2-s)$ for $s>4m^2$. For $(s,t,u)\in\mathscr P_m$, put $x=1+2t/(s-4m^2)\in[-1,1]$. For each integer $\ell\ge0$, define the normalized Legendre polynomial $P_\ell:\mathbb C\to\mathbb C$ by

$$P_\ell(x)=\frac{1}{2^\ell\ell!}\frac{d^\ell}{dx^\ell}(x^2-1)^\ell,$$

and let $a_\ell:(4m^2,\infty)\to\mathbb C$ be the complex partial-wave coefficient function in this channel. When a full partial-wave expansion is asserted on the physical angular interval, require the partial sums of the right-hand side below to converge uniformly in $x\in[-1,1]$ for each fixed $s>4m^2$ to the supplied physical amplitude. Use the normalization

$$\mathcal A_{\mathrm{phys}}(s,t,u)=16\pi\sqrt{\frac{s}{s-4m^2}}\sum_{\ell=0}^{\infty}(2\ell+1)P_\ell\!\left(1+\frac{2t}{s-4m^2}\right)a_\ell(s),\qquad P_\ell(1)=1.$$

For the forward sign alone, convergence of the series at $x=1$ suffices. The downstream forward-positivity result uses the optical-theorem sign $\operatorname{Im}A(s+i0)\ge0$ for $s>4m^2$ as input; a full partial-wave realization is not inferred from this definition. In the displayed normalization, the sign follows if the forward series converges and the supplied partial waves obey $\operatorname{Im}a_\ell(s)\ge|a_\ell(s)|^2\ge0$ for every $s>4m^2$ and every $\ell$.

Put $\nu_0=2m^2$ and $v=s-2m^2$, so $u-2m^2=-v$. Choose finitely many real numbers $p_j\in(0,4m^2)\setminus\{2m^2\}$ and real residues $r_j$, and set

$$P(s)=\sum_j\left(\frac{r_j}{s-p_j}+\frac{r_j}{4m^2-p_j-s}\right).$$

Each summand pair is the real simple-pole principal part at $s=p_j$ and its $s\leftrightarrow u$ crossing partner; hence $P(4m^2-s)=P(s)$. These poles lie off the two-particle cuts. Define the pole-subtracted forward function $B(v)=A(2m^2+v)-P(2m^2+v)$. Assume $B$ is holomorphic on

$$\Omega_{\nu_0}=\mathbb C\setminus\bigl((-\infty,-\nu_0]\cup[\nu_0,\infty)\bigr),$$

real analytic there, meaning $B(\overline v)=\overline{B(v)}$, and has finite upper and lower boundary values on both cuts except at their endpoints. Here the two-particle gap is the open interval $(-\nu_0,\nu_0)$ in the $v$ variable; no massless pole or cut reaches the forward point $t=0$.

Require additionally that $B$ extends continuously from each open half-plane onto every compact segment of either real cut bank avoiding $\pm\nu_0$. This is an extra admissibility assumption on the supplied data, not a consequence of finite pointwise boundary values or a claim about every quantum field theory. 

Assume the exact high-energy condition $B(w)=o(|w|^2)$ uniformly as $|w|\to\infty$ in the closed upper half-plane, including upper cut-bank limits. In particular this holds on the large upper semicircles after any fixed bounded horizontal translation. For $\nu\ge\nu_0$, define the absorptive density $\rho(\nu)=\operatorname{Im}B(\nu+i0)$. Require $\rho$ to be nonnegative and Riemann integrable on every compact subinterval of $[\nu_0,\infty)$, and require $\int_{\nu_0}^{\infty}\rho(\nu)\nu^{-3}\,d\nu$ to converge as a finite improper Riemann integral. For every real $v$ with $|v|<\nu_0$, require the integrals along both sides of the two cuts of $[B(x)-B(0)]/[x^2(x-v)]$, with boundary values taken from the upper and lower half-planes, to exist as finite improper Riemann limits. Require also that the small endpoint arcs at $\pm\nu_0$ for this integrand vanish in the contour limit. Since $P$ is real off its poles, $\rho(\nu)=\operatorname{Im}A(2m^2+\nu+i0)$ for $\nu>\nu_0$ on the right cut.

The normalized forward Taylor coefficients are $c_n=B^{(2n)}(0)/(2n)!$ for integers $n\ge1$. They have units $(\text{mass})^{-4n}$; $\nu_0$ has units $(\text{mass})^2$. No sign is assigned here to a generic off-shell Lagrangian coefficient.

## Definition references

[Adams et al., *Causality, Analyticity and an IR Obstruction to UV Completion*, §4](https://arxiv.org/pdf/hep-th/0602178)

[de Rham et al., *Positivity Bounds for Scalar Theories*, §§2.1–2.2](https://arxiv.org/pdf/1702.06134)

[Basile et al., *Lectures in Quantum Gravity*, §§3.2.1–3.3.1](https://arxiv.org/pdf/2412.08690.pdf)

## Remarks

This definition treats analyticity, crossing, growth, pole subtraction, and the forward optical-theorem sign as supplied amplitude data. It proves no physical model exists and no full unitary $S$-matrix realizes arbitrary such data. It excludes massless forward poles/cuts, massless gauge or gravitational exchange, and nonlocal amplitudes with different high-energy growth.

For completeness, changing a finite value at one endpoint preserves Riemann integrability and the integral: for any partition isolate that endpoint in an interval of length $h$; the possible change in upper and lower sums is bounded by a fixed finite bound times $h$, which tends to zero. The same equality holds on every finite truncation, and hence on each existing improper limit. This convention does not require a limit of $B$ or of its absorptive part at threshold.

---
id: thm-csm-frontier-two-velocity-heat-limit
kind: theorem
title: Periodic two-velocity heat limit for well-prepared data
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-frontier-two-velocity-scaling
  - lem-csm-frontier-two-velocity-contraction
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - def-countable-choice
  - thm-ftc-second-part
dependency_roles:
  def-csm-frontier-two-velocity-scaling: mathematical-premise
  lem-csm-frontier-two-velocity-contraction: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-ftc-second-part: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Thomas Hillen and Amanda Swan, The Diffusion Limit of Transport Equations in Biology, Lecture Notes in Mathematics 2167, 2016"
      url: "https://www.math.ualberta.ca/~thillen/paper/HillenSwan12withStyle.pdf"
      locator: "§2.1, equations (8)–(13), for the telegraph model and diffusivity convention; §4.1–4.2, equations (21)–(25), for the formal parabolic scaling and diffusion coefficient."
    - title: "Thomas Hillen and Hans G. Othmer, The Diffusion Limit of Transport Equations Derived from Velocity-Jump Processes, SIAM Journal on Applied Mathematics 61(3), 2000"
      url: "https://www-users.cse.umn.edu/~othmer/papers/hill1.pdf"
      locator: "§1, equations (1.2)–(1.4), pp. 752–753; §4, Theorem 4.1 and proof, pp. 768–771. The general estimate has different domain, regularity and initial-time hypotheses."
    - title: "Edward A. Codling, Michael J. Plank and Simon Benhamou, Random Walk Models in Biology, Journal of the Royal Society Interface 5(25), 2008"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2504494/"
      locator: "§2.7, equations (2.23)–(2.28), and §2.8, equation (2.29), for the two-state telegraph model and the effective diffusivity; the limit discussion is a scaling argument."
---

## Statement

Assume $\mathrm{AC}_\omega$. Fix $L>0$, $c,\lambda>0$, and a nonnegative $\rho_0\in C^\infty(\mathbb T_L)$. For each $\epsilon>0$, let $(f_+^\epsilon,f_-^\epsilon)$ solve the two-velocity periodic model with well-prepared initial data $f_+^\epsilon(\cdot,0)=f_-^\epsilon(\cdot,0)=\rho_0/2$, and put $\rho^\epsilon=f_+^\epsilon+f_-^\epsilon$. Let $D:=c^2/(2\lambda)$, which has units $\mathrm{m^2\,s^{-1}}$, and define the heat evolution

$$u(t,x):=\sum_{n\in\mathbb Z}\widehat{\rho_0}(n)e^{-D\kappa_n^2t}e_n(x).$$

Then $u$ is the smooth periodic solution of $\partial_tu=D\partial_x^2u$ with $u(0)=\rho_0$, and for every finite $T>0$,

$$\lim_{\epsilon\downarrow0}\sup_{0\le t\le T}\|\rho^\epsilon(t)-u(t)\|_{2,L}=0.$$

This conclusion concerns only the density of the stated linear two-velocity model with well-prepared data.

## Statement references

[[def-csm-frontier-two-velocity-scaling]]

[[lem-csm-frontier-two-velocity-contraction]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the scaling and Fourier conventions of [[def-csm-frontier-two-velocity-scaling]], $c,\lambda,L>0$, and $\rho_0\in C^\infty(\mathbb T_L)$ with $\rho_0\ge0$.

[A1] Assume the Axiom of Countable Choice, $\mathrm{AC}_\omega$ ([[def-countable-choice]]), as required by the Fourier basis supplier.

[F1] [[def-csm-frontier-two-velocity-scaling]]: $e_n(x)=e^{i\kappa_nx}$, $\kappa_n=2\pi n/L$, $\widehat g(n)=\int g\overline{e_n}\,dm_L$, and $f_\pm^\epsilon$ obey the two displayed transport/switching equations.

[F2] [[lem-csm-frontier-two-velocity-contraction]]: for these data the unique global smooth solution exists, and the two-component evolution contracts the $L^2(dm_L;\mathbb C^2)$ norm.

[F3] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: under $\mathrm{AC}_\omega$, the characters $e^{2\pi iny}$ form an orthonormal basis of $L^2(\mathbb R/\mathbb Z,dy)$, so Fourier expansions and Parseval hold. The change of variable $y=x/L$ transfers this statement to $\mathbb T_L$ with normalized measure $dm_L=dx/L$ and coefficients $\widehat g(n)=\int g\overline{e_n}\,dm_L$.

[F4] [[thm-ftc-second-part]]: integration of a continuous derivative on a compact interval gives the endpoint difference. Applied repeatedly to periodic smooth initial data, it gives rapid decay of their Fourier coefficients by integration by parts.

## Proof

**Proof technique:** direct.

1.1 Define $j^\epsilon=(c/\epsilon)(f_+^\epsilon-f_-^\epsilon)$. Adding the two equations in [F1] gives $\partial_t\rho^\epsilon+\partial_xj^\epsilon=0$. Subtracting them and multiplying by $c/\epsilon$ gives $\epsilon^2\partial_tj^\epsilon+2\lambda j^\epsilon=-c^2\partial_x\rho^\epsilon$. The initial condition implies $j^\epsilon(\cdot,0)=0$. [F1, given, algebra]

2.1 Under [A1], take Fourier coefficients in $x$ in these two identities, with $\kappa_n$ and $\widehat{\cdot}(n)$ from [F1]; differentiate under the compact spatial integral using the smooth solution [F2], and integrate by parts in real and imaginary parts separately using [F4] after the measure-preserving rescaling $y=x/L$. Then $y_n^\epsilon(t):=\widehat{\rho^\epsilon(t)}(n)$ satisfies $\epsilon^2(y_n^\epsilon)''+2\lambda(y_n^\epsilon)'+c^2\kappa_n^2y_n^\epsilon=0$, $y_n^\epsilon(0)=\widehat{\rho_0}(n)$, and $(y_n^\epsilon)'(0)=0$. The heat series in the Statement has coefficients $y_n(t)=\widehat{\rho_0}(n)e^{-D\kappa_n^2t}$. [A1, F1, F2, F3, F4, step 1.1]

3.1 Repeated integration by parts in the real and imaginary parts using [F4] gives $\sum_n(1+|\kappa_n|)^r|\widehat{\rho_0}(n)|<\infty$ for every integer $r\ge0$; convergence follows by grouping $2^j\le|n|<2^{j+1}$ after choosing more than $r+1$ derivatives. Therefore the heat series and every differentiated series converge uniformly on compact time intervals, and its coefficient equation $y_n'=-D\kappa_n^2y_n$ proves $\partial_tu=D\partial_x^2u$ with $u(0)=\rho_0$. For any other smooth periodic solution $w$, integration by parts in its Fourier coefficients gives $\widehat w(n)'=-D\kappa_n^2\widehat w(n)$ with initial value $\widehat{\rho_0}(n)$. Multiplying by $e^{D\kappa_n^2t}$ shows that $e^{D\kappa_n^2t}\widehat w(n,t)$ has zero derivative, so $\widehat w(n,t)=\widehat{\rho_0}(n)e^{-D\kappa_n^2t}$ for every $n$ and $t$. Fourier completeness [F3] therefore gives $w(t)=u(t)$ as $L^2(\mathbb T_L,dm_L)$ classes for each fixed $t$, hence almost everywhere. Both are continuous in $x$; if they differed at a point, their difference would be bounded away from zero on some nonempty open arc, which has positive normalized Lebesgue measure $dm_L$. This contradicts equality almost everywhere, so $w(t,x)=u(t,x)$ pointwise for every $t,x$. [A1, F3, F4, step 2.1, algebra]

3.2 For $n=0$, the mass mode is constant and equals the heat mode. Fix $n\ne0$. For all sufficiently small $\epsilon>0$ with $\epsilon c|\kappa_n|<\lambda$, set $s_n^\epsilon=(-\lambda+\sqrt{\lambda^2-\epsilon^2c^2\kappa_n^2})/\epsilon^2$ and $r_n^\epsilon=(-\lambda-\sqrt{\lambda^2-\epsilon^2c^2\kappa_n^2})/\epsilon^2$. The solution of the scalar mode equation is $y_n^\epsilon(t)=\widehat{\rho_0}(n)\bigl(A_n^\epsilon e^{s_n^\epsilon t}+B_n^\epsilon e^{r_n^\epsilon t}\bigr)$, where $A_n^\epsilon=\frac12\bigl(1+\lambda/\sqrt{\lambda^2-\epsilon^2c^2\kappa_n^2}\bigr)$ and $B_n^\epsilon=\frac12\bigl(1-\lambda/\sqrt{\lambda^2-\epsilon^2c^2\kappa_n^2}\bigr)$; these coefficients solve $A+B=1$ and $As+Br=0$. Rationalizing the slow root gives $s_n^\epsilon=-c^2\kappa_n^2/(\lambda+\sqrt{\lambda^2-\epsilon^2c^2\kappa_n^2})\to-D\kappa_n^2$, while $r_n^\epsilon\to-\infty$, $A_n^\epsilon\to1$, and $B_n^\epsilon\to0$. Put $q=D\kappa_n^2\ge0$; both $s_n^\epsilon$ and $-q$ are nonpositive, so integrating the derivative of $s\mapsto e^{st}$ with [F4] gives $|e^{s_n^\epsilon t}-e^{-qt}|\le t|s_n^\epsilon+q|\le T|s_n^\epsilon+q|$ on $[0,T]$. Since both exponentials have modulus at most one, $|A_n^\epsilon e^{s_n^\epsilon t}+B_n^\epsilon e^{r_n^\epsilon t}-e^{-qt}|\le|A_n^\epsilon-1|+T|s_n^\epsilon+q|+|B_n^\epsilon|$. The right side tends to zero independently of $t\in[0,T]$, proving uniform convergence of this Fourier mode. [F4, step 2.1, algebra]

3.3 Let $P_{>K}$ denote the Fourier projection onto $|n|>K$, applied componentwise to pairs. The mode equations from step 2.1 are decoupled, so the projected pair solves the same system with initial pair $P_{>K}(\rho_0/2,\rho_0/2)$; uniqueness in [F2] identifies it with that evolution. Applying [F2] gives $\|P_{>K}(f_+^\epsilon,f_-^\epsilon)(t)\|_{2,L}\le\|P_{>K}(\rho_0/2,\rho_0/2)\|_{2,L}=\|P_{>K}\rho_0\|_{2,L}/\sqrt2$. Since $\|a+b\|_{2,L}^2\le2(\|a\|_{2,L}^2+\|b\|_{2,L}^2)$, it follows that $\|P_{>K}\rho^\epsilon(t)\|_{2,L}\le\|P_{>K}\rho_0\|_{2,L}$. The heat multiplier has modulus at most one, hence $\|P_{>K}u(t)\|_{2,L}\le\|P_{>K}\rho_0\|_{2,L}$. [A1, F2, F3, step 2.1, algebra]

4.1 By Parseval [F3], $\|P_{>K}\rho_0\|_{2,L}\to0$ as $K\to\infty$. Given $\eta>0$, choose $K$ so that twice this tail is below $\eta/2$. The finitely many modes $|n|\le K$ converge uniformly on $[0,T]$ by step 3.2, so for all sufficiently small $\epsilon$ their combined $L^2$ error is below $\eta/2$. Step 3.3 bounds the remaining density difference by twice the chosen tail, uniformly in $t$ and $\epsilon$. Therefore $\sup_{0\le t\le T}\|\rho^\epsilon(t)-u(t)\|_{2,L}<\eta$ for all sufficiently small $\epsilon$, proving the claim. [A1, F3, step 3.2, step 3.3, algebra] ∎

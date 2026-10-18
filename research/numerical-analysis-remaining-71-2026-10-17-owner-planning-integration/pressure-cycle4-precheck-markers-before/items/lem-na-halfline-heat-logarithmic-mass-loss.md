---
id: lem-na-halfline-heat-logarithmic-mass-loss
kind: lemma
title: "Logarithmic halfline heat mass loss at the pressure endpoint"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, lem-heat-kernel-normalisation-scaling-and-derivatives, lem-gaussian-kernels-form-an-approximate-identity, thm-l-one-approximate-identities-converge-in-l-p, thm-young-convolution-inequality, thm-dominated-convergence, thm-holder-inequality-for-integrals]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Heat-kernel context; the logarithmic datum and mass-loss endpoint calculation are derived locally."
---

## Statement

Assume the Axiom of Choice. Fix $\nu>0$, $1/2<\alpha\le3/4$, and nonnegative $\eta\in C^\infty([0,\infty))$ supported in $[0,1/16)$ and equal to $1$ on $[0,1/32]$. Define $w_0(y)=\eta(y)y^{-1/2}(\log(1/y))^{-\alpha}$ for $0<y<1/16$, and $w_0(y)=0$ for $y\ge1/16$. Put
$$G_t(s)=(4\pi\nu t)^{-1/2}e^{-s^2/(4\nu t)},$$
$$w(t,y)=\int_0^\infty[G_t(y-z)-G_t(y+z)]w_0(z)\,dz.$$
Then $w_0\in L^1\cap L^2(0,\infty)$, $w\ge0$, $w(t,0)=0$, $w_t=\nu w_{yy}$, and $w$ is smooth for positive time, including at $y=0$. Moreover
$$\sup_{t>0}\|w(t)\|_j\le\|w_0\|_j\quad(j=1,2),\qquad w(t)\to w_0\text{ in }L^2\text{ as }t\downarrow0,$$
$$\int_0^T\|w_y(t)\|_2^2\,dt\le(2\nu)^{-1}\|w_0\|_2^2,\qquad \int_0^T\|w(t)\|_4^4\,dt<\infty.$$
Write $M(t)=\int_0^\infty w(t,y)\,dy$, $M_0=\int_0^\infty w_0$, $m(t)=M(t)-M_0$, and $h(t,y)=-\int_y^\infty w(t,z)\,dz$. Then $h_y=w$, $h_t=\nu h_{yy}$, $h(t,0)=-M(t)$, and $m(0)=0$. For some $t_*>0$ and $c,C>0$, writing $L(t)=\log(1/t)$,
$$c t^{-3/4}L(t)^{-\alpha}\le -m'(t)\le C t^{-3/4}L(t)^{-\alpha},\qquad |m(t)|\le C t^{1/4}L(t)^{-\alpha}\quad(0<t<t_*).$$
Consequently $m'\in L^1(0,T)\setminus L^{4/3}(0,T)$ and
$$\int_0^T\bigl(|m'(t)|t^{1/4}+|m(t)|t^{-3/4}\bigr)^2\,dt<\infty$$
for every finite $T>0$. On each bounded $y$ interval, $h(t,\cdot)\to h_0(\cdot)=-\int_{\cdot}^\infty w_0$ uniformly as $t\downarrow0$. On each closed interval separated from $\operatorname{supp}w_0$, all spatial derivatives of $w$ are bounded for small positive time by $C_Nt^{-N}e^{-c/t}$, with constants allowed to depend on the derivative.

## Facts & Assumptions

**Given:** The Axiom of Choice and the data in the Statement.

[A1] The Axiom of Choice supplies the Countable and Dependent Choice hypotheses of the integration and approximation suppliers. ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]])

[F1] Gaussian kernels have unit mass, solve the heat equation, and have Gaussian spatial derivative bounds. They form an approximate identity, which converges in $L^2$; convolution obeys Young's inequality. ([[lem-heat-kernel-normalisation-scaling-and-derivatives]], [[lem-gaussian-kernels-form-an-approximate-identity]], [[thm-l-one-approximate-identities-converge-in-l-p]], [[thm-young-convolution-inequality]])

[F2] Dominated convergence and Holder's inequality apply to the displayed Lebesgue integrals. ([[thm-dominated-convergence]], [[thm-holder-inequality-for-integrals]])

## Proof

1.1 The square of $w_0$ near zero is $y^{-1}(\log(1/y))^{-2\alpha}$, integrable because $2\alpha>1$; its first power is also integrable. For $y,z>0$, $G_t(y-z)\ge G_t(y+z)$, proving positivity. Its integral in either positive variable is at most $1$. Thus the positive kernel is an $L^1$ contraction; Jensen's inequality in its subprobability measure, followed by integration in $y$, proves the $L^2$ contraction. Equivalently the latter follows by Young applied to the odd extension $\widetilde w_0$ on the line, whose heat evolution remains odd; restricting the equal two halfline norms gives the same bound. The Gaussian derivative bounds justify differentiating the convolution for every $t>0$, and give $w_t=\nu w_{yy}$ and the zero boundary value. Approximate-identity convergence applied to $\widetilde w_0$ gives strong $L^2$ initial convergence. [A1, F1, F2, given, algebra]

2.1 Fix a smooth $\beta:[0,\infty)\to[0,1]$ equal to $0$ on $[0,1]$ and $1$ on $[2,\infty)$. The explicit $w_{0,j}(y)=\beta(jy)w_0(y)$ are smooth and compactly supported away from zero and converge to $w_0$ in $L^2$ by dominated convergence. Evolve their odd extensions. Integration by parts on the line, with Gaussian tails, gives $\|w(t)\|_2^2+2\nu\int_0^t\|w_y\|_2^2=\|w_0\|_2^2$ for each approximant. Applying this identity to differences makes the evolutions Cauchy in $L^\infty_tL^2_y$ and their derivatives Cauchy in $L^2_{t,y}$. Their limit is the kernel evolution by its contraction, and its weak derivative is the derivative limit by integration against compactly supported tests. This gives the stated energy inequality. For a smooth halfline function vanishing at zero and decaying at infinity, the fundamental theorem gives $\|w\|_\infty^2\le2\|w\|_2\|w_y\|_2$, hence $\|w\|_4^4\le2\|w\|_2^3\|w_y\|_2$. Time integration, the energy bound and Holder prove the $L^4$ assertion; approximation passes the inequality to this $w$. [F1, F2, step 1.1, construct]

2.2 Integrating the Gaussian kernel first in $y$ gives $M(t)=\int_0^\infty\operatorname{erf}(z/(2\sqrt{\nu t}))w_0(z)\,dz$, where $\operatorname{erf}(r)=2\pi^{-1/2}\int_0^r e^{-s^2}\,ds$. Dominated convergence gives $M(t)\to M_0$, and differentiation for positive time gives $$m'(t)=-\frac{t^{-3/2}}{2\sqrt{\pi\nu}}\int_0^\infty z e^{-z^2/(4\nu t)}w_0(z)\,dz.$$ After $z=\sqrt t\,r$, the prefactor is $t^{-3/4}$. The integral on $1\le r\le2$ is bounded below by $cL(t)^{-\alpha}$ for small $t$. For $r\le t^{-1/4}$, $\log(1/(\sqrt t r))\ge L(t)/4$, so the integral is bounded above by $CL(t)^{-\alpha}\int_0^\infty r^{1/2}e^{-r^2/(4\nu)}\,dr$. For $r>t^{-1/4}$ the Gaussian tail is exponentially small; on the support of $\eta(\sqrt t r)$ the logarithmic factor is uniformly bounded above, which gives the same upper bound. This proves both derivative bounds. Integrating the upper bound from zero gives $|m(t)|\le Ct^{1/4}L(t)^{-\alpha}$. [F1, F2, step 1.1, algebra]

3.1 The upper derivative bound is integrable. The lower bound gives $\int_0^{t_*}|m'|^{4/3}\ge c\int_0^{t_*}t^{-1}L(t)^{-4\alpha/3}\,dt=\infty$, since $4\alpha/3\le1$. In contrast the squared critical-corrector expression is at most $Ct^{-1}L(t)^{-2\alpha}$, which is integrable since $2\alpha>1$. Away from time zero every quantity is smooth, proving all stated time-integral conclusions. [step 2.2, algebra]

4.1 Differentiating the tail integral gives $h_y=w$ and $h_t=\nu w_y=\nu h_{yy}$; the boundary term at infinity vanishes by Gaussian decay. Also $h(t,y)=\int_0^yw(t,z)\,dz-M(t)$. Thus on $[0,B]$ its difference from $h_0$ is at most $\sqrt B\|w(t)-w_0\|_2+|M(t)-M_0|$, which tends to zero. Finally a positive separation between $y$ and $\operatorname{supp}w_0$ puts every differentiated Gaussian convolution under the bound $C_Nt^{-N}e^{-c/t}\|w_0\|_1$. These arguments prove the remaining assertions. [F1, F2, step 1.1, step 2.2, algebra] ∎


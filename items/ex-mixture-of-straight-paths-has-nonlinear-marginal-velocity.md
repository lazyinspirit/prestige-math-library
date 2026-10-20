---
id: ex-mixture-of-straight-paths-has-nonlinear-marginal-velocity
kind: example
title: A mixture of straight Gaussian paths has a nonlinear marginal velocity
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-probability-path-and-velocity-field
  - lem-conditional-mixture-is-a-probability-path
  - lem-conditional-to-marginal-continuity-equation
  - thm-gaussian-conditional-optimal-transport-map
  - def-axiom-of-choice
  - thm-extreme-value-metric
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
justified_by: []
axiom_use: AC is used by the Gaussian-law and density interfaces consumed by the Gaussian conditional optimal-transport theorem.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yaron Lipman et al., Flow Matching for Generative Modeling, §4.1 Example II and the note on marginal optimal transport"
      url: "https://arxiv.org/html/2210.02747"
    - title: "Peter Holderrieth and Ezra Erives, Introduction to Flow Matching and Diffusion Models, §§3.2–3.3"
      url: "https://arxiv.org/html/2506.02070"
---

## Example

Assume the Axiom of Choice and fix $a>0$ and $\sigma_{\min}>0$. Let the endpoint law assign probability $1/2$ to each endpoint $x_1=-a$ and $x_1=a$. For each endpoint, use the one-dimensional Gaussian path with
$$\sigma_t=1-(1-\sigma_{\min})t,\qquad X_t=\sigma_t Z+t x_1,\qquad Z\sim N(0,1).$$
For either endpoint and each fixed $Z=z$, the conditional particle trajectory is a straight line. The marginal density is
$$p_t(x)=\frac{1}{2\sqrt{2\pi}\,\sigma_t}\left[ \exp\!\left(-\frac{(x-ta)^2}{2\sigma_t^2}\right)+ \exp\!\left(-\frac{(x+ta)^2}{2\sigma_t^2}\right) \right],$$
and its marginal velocity field, defined by averaging the conditional velocity against the endpoint density at fixed $(t,x)$, is
$$u^m_t(x)=\frac{\sigma_{\min}-1}{\sigma_t}x+ \frac{a}{\sigma_t}\tanh\!\left(\frac{atx}{\sigma_t^2}\right), \qquad \tanh(y):=\frac{\exp(y)-\exp(-y)}{\exp(y)+\exp(-y)}.$$
The denominator in the definition of $\tanh$ is positive for every real input. The density is strictly positive, and $\partial_tp_t(x)+\partial_x(p_t(x)u^m_t(x))=0$ on $(0,1)\times\mathbb R$. For every $t\in(0,1)$, $x\mapsto u^m_t(x)$ is nonlinear.

## Example references

[Lipman et al., §4.1 Example II and the qualification that a conditional OT path does not make the marginal field optimal](https://arxiv.org/html/2210.02747)

[Holderrieth and Erives, §§3.2–3.3](https://arxiv.org/html/2506.02070)

## Facts & Assumptions

**Given:** AC, $a>0$, $\sigma_{\min}>0$, the two-point endpoint law, and the Gaussian conditional path in the Example.

[A1] The Axiom of Choice is the assertion that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); it is required by the Gaussian-law and density suppliers used by [F1].

[F1] [[thm-gaussian-conditional-optimal-transport-map]]: under AC, for each fixed endpoint $x_1$ the mean-linear Gaussian path has the displayed density and affine conditional velocity, and its density and flux satisfy the conditional continuity equation.

[F2] [[def-probability-path-and-velocity-field]]: the marginal density is $p_t(x)=\int\rho_t(x\mid x_1)\,\pi(dx_1)$ and its velocity, where $0<p_t(x)<\infty$ and the flux is finite, is $u^m_t(x)=\int\rho_tu^c_t\,d\pi/p_t(x)$.

[F3] [[lem-conditional-mixture-is-a-probability-path]]: the endpoint mixture of normalized conditional densities is a probability density at each time.

[F4] [[thm-extreme-value-metric]]: a continuous real-valued function on a compact metric space is bounded.

[F5] [[lem-conditional-to-marginal-continuity-equation]]: if the conditional PDE derivatives admit the stated local integrable endpoint majorant, then the marginal density and flux satisfy the continuity equation.

[F6] [[def-real-exponential-function-and-e]]: the real exponential is defined on every real input by its convergent power series.

[F7] [[thm-exponential-addition-formula]]: $\exp(r+s)=\exp(r)\exp(s)$ for all real $r,s$.

[F8] [[thm-exponential-is-strictly-increasing]]: $r<s$ implies $\exp(r)<\exp(s)$.

[F9] [[cor-exponential-reciprocal-and-positivity]]: $\exp(-r)=1/\exp(r)$ and $\exp(r)>0$ for every real $r$.

## Verification

**Given:** The hypotheses in the Example.

1.1 Apply [F1] to the two endpoints $x_1=a$ and $x_1=-a$. Their conditional densities are positive and continuous in $(t,x)$, as are their time derivatives, fluxes, and spatial flux derivatives; $\sigma_t>0$ throughout $[0,1]$. Hence for each compact $K\subset(0,1)\times\mathbb R$ the finitely many such functions are bounded on $K$ by [F4]. Taking a common bound as the constant function $G_K$ gives an element of $L^1(\pi)$ because $\pi$ has total mass one. Thus [F5] applies. The mixture density is normalized by [F3] and is strictly positive because it is a sum of two positive Gaussian densities. [given, A1, F1, F3, F4, F5]

1.2 Put $$A_+(t,x):=\exp\!\left(-\frac{(x-ta)^2}{2\sigma_t^2}\right),\qquad A_-(t,x):=\exp\!\left(-\frac{(x+ta)^2}{2\sigma_t^2}\right).$$ The common Gaussian normalizing factor cancels in the endpoint-weighted mean, so [F2] gives $$m_t(x):=\frac{\int x_1\rho_t(x\mid x_1)\,\pi(dx_1)}{p_t(x)} =a\frac{A_+(t,x)-A_-(t,x)}{A_+(t,x)+A_-(t,x)}.$$ Expanding the two squares gives $A_+/A_-=\exp(2atx/\sigma_t^2)$ by [F7] and [F9]. Multiplying numerator and denominator by $\exp(-atx/\sigma_t^2)$ therefore yields $m_t(x)=a\tanh(atx/\sigma_t^2)$. [given, F2, F6, F7, F9, algebra]

2.1 For endpoint $x_1\in\{-a,a\}$, [F1] gives $$u^c_t(x\mid x_1)=cx+(1-tc)x_1, \qquad c:=\frac{\sigma_{\min}-1}{\sigma_t}.$$ Taking the endpoint-weighted mean and using step 1.2 gives $u^m_t(x)=cx+(1-tc)m_t(x)$. Since $\sigma_t=1+t(\sigma_{\min}-1)$, we have $\sigma_t-t(\sigma_{\min}-1)=1$ and hence $1-tc=1/\sigma_t$. Substitution gives the marginal velocity formula in the Example. [step 1.2, F1, F2, algebra]

3.1 Fix $t\in(0,1)$ and put $\beta:=a/\sigma_t>0$ and $k:=at/\sigma_t^2>0$. The formula for $\tanh$, the addition formula [F7], and the reciprocal identity [F9] give $\tanh(-y)=-\tanh(y)$, so $u^m_t$ is odd. For $y>0$, [F7] gives $\exp(0)=\exp(0)^2$, and positivity [F9] therefore gives $\exp(0)=1$; strict increase [F8] now yields $r:=\exp(2y)>1$. Put $s:=(r-1)/(r+1)\in(0,1)$. Rewriting $\tanh(y)$ and $\tanh(2y)$ using [F7, F9] gives $$\tanh(y)=s,\qquad \tanh(2y)=\frac{r^2-1}{r^2+1}=\frac{2s}{1+s^2}<2s.$$ Thus for every $x>0$, step 2.1 gives $$u^m_t(2x)-2u^m_t(x)=\beta\bigl(\tanh(2kx)-2\tanh(kx)\bigr)<0.$$ An odd affine function must be linear through the origin, and every such function has $u(2x)-2u(x)=0$. Hence $u^m_t$ is not affine and is nonlinear. [step 2.1, F6, F7, F8, F9, algebra] ∎

## Source notes

The cited sources give the straight conditional Gaussian paths and the conditional-to-marginal velocity formula. The explicit two-endpoint mixture calculation is local. Its conclusion concerns nonlinearity of the marginal velocity; it makes no claim that the marginal field is a globally optimal transport field.

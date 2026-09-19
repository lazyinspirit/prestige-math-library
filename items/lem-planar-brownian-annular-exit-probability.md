---
id: lem-planar-brownian-annular-exit-probability
kind: lemma
title: "Planar Brownian annular exit probability"
status: draft
origin: pipeline
deps: [def-d-dimensional-brownian-motion, def-brownian-motion-started-at-x, def-brownian-motion, lem-conditioning-a-known-state-and-independent-noise, cor-one-dimensional-brownian-motion-hits-every-point-almost-surely, def-continuous-time-stopping-time, def-continuous-time-filtration-and-all-pairs-martingale, def-martingale-submartingale-and-supermartingale, thm-optional-sampling-for-bounded-stopping-times, thm-integration-by-parts, thm-chain-rule, thm-continuous-partial-derivatives-imply-total-differentiability, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-ftc-second-part, thm-measurability-of-integration-against-a-kernel, def-measure-kernel-and-probability-kernel, def-multivariate-normal-law, def-standard-normal-and-normal-laws, def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Section 6.7 and printed pp. 63-64"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.4"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume the Axiom of Choice. Let $W$ be a standard two-dimensional Brownian
motion [[def-d-dimensional-brownian-motion]], let $x,y\in\mathbb R^2$ with
$x\ne y$ and let $0<\varepsilon<|x-y|<R$. Let $P_x$ be the shifted planar law
[[def-brownian-motion-started-at-x]], let
$$S_\varepsilon:=\inf\{t\ge0:|W_t-y|=\varepsilon\},\qquad T_R:=\inf\{t\ge0:|W_t-y|=R\},$$
and let $H:=\inf\{t\ge0:|W_t-y|\notin(\varepsilon,R)\}$. Then
$$P_x(S_\varepsilon<T_R)=\frac{\log R-\log|x-y|}{\log R-\log\varepsilon}.$$

## Facts & Assumptions

**Given:** AC, a standard planar Brownian motion $W$, $x\ne y$ in $\mathbb R^2$ and $0<\varepsilon<|x-y|<R$.

[F1] Each coordinate of a standard $d$-dimensional Brownian motion is a standard one-dimensional Brownian motion, and the increments of $W$ over $[s,t]$ have law $N_2(0,(t-s)I_2)$ and are independent of the past; the shifted law $P_x$ is the law of $x+W$. [[def-d-dimensional-brownian-motion]] [[def-brownian-motion-started-at-x]]

[F2] One-dimensional Brownian motion hits every level almost surely, and closed-set hitting times are stopping times. The conditioning lemma gives $E[h(X,Y)|\mathcal G]=H(X)$ for a known state $X$ and independent noise $Y$, $H(x)=\int h(x,y)\mu(dy)$. [[cor-one-dimensional-brownian-motion-hits-every-point-almost-surely]] [[lem-conditioning-a-known-state-and-independent-noise]] [[def-continuous-time-stopping-time]]

[F3] $N_2(0,I_2)$ is the law of a pair of independent standard normal coordinates, whose one-dimensional density $\varphi$ is positive with $\int\varphi=1$ and all moments. [[def-multivariate-normal-law]] [[def-standard-normal-and-normal-laws]]

[F4] Compact integration by parts, the chain rule, the fundamental theorem of calculus for a differentiable primitive, dominated and monotone convergence, and Tonelli/Fubini for bounded or integrable product integrands. [[thm-integration-by-parts]] [[thm-chain-rule]] [[thm-ftc-second-part]] [[thm-dominated-convergence]] [[thm-monotone-convergence-for-the-integral]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] [[thm-continuous-partial-derivatives-imply-total-differentiability]]

[F5] Optional sampling for bounded discrete stopping times: for a martingale $Y$ with $E[Y_{k+1}|\mathcal G_k]=Y_k$ and stopping times $0\le\sigma\le\tau$ bounded by $N$, $\mathbb E[Y_\tau]=\mathbb E[Y_\sigma]$; a discrete martingale is defined by its adjacent conditional means, and the discrete stopped sigma-algebra is defined by the events $\{\tau\le k\}$. [[def-martingale-submartingale-and-supermartingale]] [[thm-optional-sampling-for-bounded-stopping-times]] [[def-continuous-time-filtration-and-all-pairs-martingale]]

[F6] Conditional expectations are unique almost surely and are additive on bounded inputs. [[def-conditional-expectation-as-an-ae-class]] [[lem-conditional-expectation-is-unique-almost-surely]] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]] [[thm-measurability-of-integration-against-a-kernel]] [[def-measure-kernel-and-probability-kernel]]

[F7] AC is the ambient assumption of the Brownian and conditional-expectation interfaces. [[def-axiom-of-choice]] [[def-brownian-motion]]

## Proof

**Proof technique:** direct.

1.1 For $t\ge0$ the event $\{H\le t\}$ equals $\bigcap_{n\ge1}\bigcup_{q\in\mathbb Q\cap[0,t]}\{|W_q-y|\le\varepsilon+n^{-1}\ \text{or}\ |W_q-y|\ge R-n^{-1}\}$. Indeed, if $H\le t$ then $|W_H-y|\notin(\varepsilon,R)$; if $|W_H-y|\le\varepsilon$, continuity of the path at $H$ gives for every $n$ a rational $q\in[0,t]$ with $|W_q-y|\le\varepsilon+n^{-1}$, and if $|W_H-y|\ge R$ it gives a rational $q\in[0,t]$ with $|W_q-y|\ge R-n^{-1}$, the point $q$ being chosen on the side of $H$ that lies in $[0,t]$, which is possible because $H\le t$ and the rationals are dense; conversely, if for every $n$ some rational $q_n\in[0,t]$ satisfies one of the two displayed inequalities, then a subsequence $q_{n_k}$ converges to some $q^\ast\in[0,t]$ and continuity gives $|W_{q^\ast}-y|\le\varepsilon$ or $|W_{q^\ast}-y|\ge R$, whence $H\le q^\ast\le t$. Each inner event is in the raw natural filtration at $t$, so $H$ is a stopping time; by continuity of the path one also has $H=S_\varepsilon\wedge T_R$ and $|W_H-y|\in\{\varepsilon,R\}$ whenever $H<\infty$, and $|W_t-y|\in(\varepsilon,R)$ for every $t<H$. [F2, given]

1.2 Define $\psi(r):=\log r$ for $r\in[\varepsilon,R]$ and extend it to a $C^2$ function on $[0,\infty)$ with $\psi\equiv\log\varepsilon$ on $[0,\varepsilon/2]$, $\psi\equiv\log R$ on $[2R,\infty)$, and quintic Hermite splices on $[\varepsilon/2,\varepsilon]$ and $[R,2R]$ that match value, first and second derivative at both joints: on $[\varepsilon/2,\varepsilon]$ use $s\mapsto\log\varepsilon+(\log s-\log\varepsilon)\,h(2s/\varepsilon-1)$ and on $[R,2R]$ use $s\mapsto\log R+(\log s-\log R)\,(1-h(s/R-1))$, where $h(\theta)=6\theta^5-15\theta^4+10\theta^3$ satisfies $h=h'=h''=0$ at $\theta=0$ and $h=1$, $h'=h''=0$ at $\theta=1$. Each splice agrees with the neighbouring branches in value and in its first two derivatives at both endpoints, so the resulting $\psi$ is $C^2$ with bounded first and second derivatives, and $\Phi(z):=\psi(|z-y|)$ is then a bounded $C^2$ function of $z\in\mathbb R^2$, constant near $y$ and outside the disc of radius $2R$, with $\Phi(z)=\log|z-y|$ for $|z-y|\in[\varepsilon,R]$; its Laplacian $\Delta\Phi(z)=\psi''(r)+\psi'(r)/r$ at $r=|z-y|>0$ is continuous and bounded, and it vanishes on $\{\varepsilon\le|z-y|\le R\}$ because $\Delta\log|z-y|=0$ there. [F4, algebra]

1.3 For the standard normal pair $Z=(Z_1,Z_2)$ of [F3], every bounded $C^2$ function $f$ with bounded derivatives satisfies $\mathbb E[\partial_if(z+\sqrt rZ)Z_i]=\sqrt r\,\mathbb E[\partial_i^2f(z+\sqrt rZ)]$ for $i=1,2$ and $r>0$. Indeed, the law of $Z$ is the product of the two standard normal laws by [F3], so the expectation factors, and for the one-dimensional marginal one integrates by parts on $[-L,L]$ with the compact theorem of [F4] using $\varphi'=-u\varphi$ and the bounded factor $\partial_if(z+\sqrt r u)$; the boundary terms vanish as $L\to\infty$ because $\varphi$ decays rapidly and the derivative factor is bounded, and dominated convergence identifies the limit. Summing the two coordinates gives $\mathbb E[\nabla f(z+\sqrt rZ)\cdot Z]=\sqrt r\,\mathbb E[\Delta f(z+\sqrt rZ)]$. [F3, F4]

1.4 Let $\mathcal G_s:=\sigma(W_u:0\le u\le s)$ be the raw natural filtration of $W$. For every bounded Borel $g:\mathbb R^2\to\mathbb R$ and $0\le s\le t$ one has $\mathbb E[g(W_t)|\mathcal G_s]=Q_{t-s}g(W_s)$ almost surely: apply the conditioning lemma of [F2] to the $\mathcal G_s$-measurable state $X=W_s$ and the noise $Y=W_t-W_s$, which is independent of $\mathcal G_s$ with law $N_2(0,(t-s)I_2)$ by [F1], and to $h(x,y):=g(x+y)$; the resulting function $H(x)=\int g(x+y)\mu_{t-s}(dy)=Q_{t-s}g(x)$ is the one displayed. [F1, F2, given]

2.1 The first coordinate process $t\mapsto W^{(1)}_t$ is a standard one-dimensional Brownian motion by [F1], so by [F2] its hitting time of the level $y_1+R$ is finite almost surely; at that time $|W_t-y|\ge|W^{(1)}_t-y_1|=R$, so $H$ is at most that finite time. Hence $H<\infty$ almost surely, and $P_x$ is the law of $x+W$ by [F1], so every statement below holds for the shifted law as well. [F1, F2, step 1.1]

2.2 Fix a bounded $C^2$ function $f$ with bounded first and second derivatives and put $Q_rf(z):=\mathbb E[f(z+\sqrt rZ)]=\int f(z+u)\mu_r(du)$ with $\mu_r$ the law of $\sqrt rZ$. Then $r\mapsto Q_rf(z)$ is differentiable on $(0,\infty)$ with $\frac{d}{dr}Q_rf(z)=\frac12Q_r\Delta f(z)$: differentiating the expectation is licensed by the mean value theorem and dominated convergence, because $\nabla f$ is bounded and $|Z|$ is integrable, and the resulting expression $\mathbb E[\nabla f(z+\sqrt rZ)\cdot Z/(2\sqrt r)]$ is $\frac12\mathbb E[\Delta f(z+\sqrt rZ)]$ by step 1.3. [F4, step 1.3]

3.1 Let $f$ and $Q$ be as in step 2.2. For $0<\delta<h$, the fundamental theorem of calculus applied to the continuous integrand $r\mapsto\frac12Q_r\Delta f(z)$ on $[\delta,h]$ gives $\frac12\int_\delta^hQ_r\Delta f(z)\,dr=Q_hf(z)-Q_\delta f(z)$ by step 2.2. Letting $\delta\downarrow0$, dominated convergence gives $Q_\delta f(z)\to f(z)$ because $f$ is continuous and bounded, and the integrals converge by monotone convergence on the nonnegative and negative parts; hence $Q_hf(z)-f(z)=\frac12\int_0^hQ_r\Delta f(z)\,dr$ for every $h>0$. [F4, step 2.2]

4.1 Define $M_t:=\Phi(W_t)-\Phi(W_0)-\frac12\int_0^t\Delta\Phi(W_r)\,dr$, a bounded adapted process: $\Phi$ is bounded with bounded derivatives by step 1.2 and $(t,\omega)\mapsto\Delta\Phi(W_t(\omega))$ is jointly measurable as a pointwise limit of the dyadic piecewise-constant approximations, so the integral is a measurable bounded function. $M$ is a martingale relative to $(\mathcal G_s)$: for $s\le t$ and $A\in\mathcal G_s$, Tonelli's theorem for the bounded integrand on $A\times[s,t]$ gives $\int_A\int_s^t\Delta\Phi(W_r)\,dr\,dP=\int_s^t\int_A\mathbb E[\Delta\Phi(W_r)|\mathcal G_s]\,dP\,dr=\int_s^t\int_AQ_{r-s}\Delta\Phi(W_s)\,dP\,dr=\int_A\int_0^{t-s}Q_u\Delta\Phi(W_s)\,du\,dP$ by step 1.4 applied to the bounded Borel function $\Delta\Phi$; by step 3.1 applied pointwise to $f:=\Phi$ at $z=W_s$ the inner integral equals $2\bigl(Q_{t-s}\Phi(W_s)-\Phi(W_s)\bigr)$, while step 1.4 gives $\int_A\Phi(W_t)\,dP=\int_AQ_{t-s}\Phi(W_s)\,dP$. Subtracting, $\int_A(M_t-M_s)\,dP=0$ for every $A\in\mathcal G_s$, so $M$ is a martingale by [F6]. [F4, F6, step 1.2, step 3.1, step 1.4]

5.1 Fix $n\ge1$ and let $H_n:=H\wedge n$. For each $m\ge1$ put $\delta:=2^{-m}$, define the discrete filtration $\mathcal D_k:=\mathcal G_{k\delta}$ and the discrete martingale $Y_k:=M_{k\delta}$, which satisfies $\mathbb E[Y_{k+1}|\mathcal D_k]=Y_k$ by [F5] and step 4.1. The integer-valued ceiling $\rho_m:=\lceil2^mH_n\rceil$ is a stopping time for $(\mathcal D_k)$, since $\{\rho_m\le k\}=\{H_n\le k\delta\}\in\mathcal G_{k\delta}=\mathcal D_k$ by step 1.1, and it is bounded by $\lceil2^mn\rceil$. Applying [F5] with $\sigma=0$ and $\tau=\rho_m$ gives $\mathbb E[M_{\rho_m\delta}]=0$. [F5, step 1.1, step 4.1]

6.1 Expanding the identity of step 5.1 and letting $m\to\infty$: $0=\mathbb E[\Phi(W_{\rho_m\delta})]-\Phi(x)-\frac12\mathbb E\bigl[\int_0^{\rho_m\delta}\Delta\Phi(W_r)\,dr\bigr]$, and $\rho_m\delta\downarrow H_n$ with $W_{\rho_m\delta}\to W_{H_n}$ almost surely by continuity. Dominated convergence for the bounded $\Phi$ and for the bounded integrand $\Delta\Phi$ on the finite time interval $[0,n+1]$ gives $\mathbb E[\Phi(W_{H_n})]=\Phi(x)+\frac12\mathbb E\bigl[\int_0^{H_n}\Delta\Phi(W_r)\,dr\bigr]$. Since $|W_r-y|\in(\varepsilon,R)$ for every $r<H$ by step 1.1, the integrand vanishes identically on $[0,H_n)$, so the second term is zero and $\mathbb E[\Phi(W_{H_n})]=\Phi(x)=\log|x-y|$. [F4, step 1.1, step 5.1]

7.1 Letting $n\to\infty$ in step 6.1, $H_n\uparrow H$ and $W_{H_n}\to W_H$ almost surely by step 2.1, while $\Phi$ is bounded and continuous, so dominated convergence gives $\mathbb E[\Phi(W_H)]=\log|x-y|$. On the other hand $H=S_\varepsilon\wedge T_R$ and $|W_H-y|\in\{\varepsilon,R\}$ by step 1.1, so $\Phi(W_H)=\log\varepsilon$ on the event $\{S_\varepsilon\le T_R\}$ and $=\log R$ on $\{T_R<S_\varepsilon\}$; these two events are disjoint and their union is almost surely the whole space, because $H<\infty$ almost surely and $|W_H-y|$ cannot equal both $\varepsilon$ and $R$. [step 1.1, step 2.1, step 6.1]

8.1 Therefore $\log|x-y|=\log\varepsilon\,P_x(S_\varepsilon\le T_R)+\log R\,(1-P_x(S_\varepsilon\le T_R))$, and solving gives $P_x(S_\varepsilon\le T_R)=(\log R-\log|x-y|)/(\log R-\log\varepsilon)$. The event $\{S_\varepsilon\le T_R\}$ differs from $\{S_\varepsilon<T_R\}$ only by the event $\{S_\varepsilon=T_R\}$, on which $|W_H-y|$ would equal both $\varepsilon$ and $R$; that event is empty because $\varepsilon<R$. Hence the formula holds with the strict inequality as stated. [step 1.2, step 7.1]

9.1 The hypotheses are exactly those used: $0<\varepsilon<|x-y|<R$ makes $\log$ finite and the end annulus nondegenerate, the case $x=y$ is excluded, the degenerate case $\varepsilon=R$ is excluded because the formula's denominator vanishes there, and the truncated times $H_n$ are bounded so that the discrete optional sampling theorem applies. AC is used only through [F7] in the Brownian and conditional-expectation interfaces, and no countable or dependent choice beyond AC is spent: the integration by parts, the fundamental theorem of calculus and the optional sampling theorem used here are the compact and discrete statements cited in [F4]-[F5]. [F4, F5, F7, given, step 8.1] ∎

## Source notes

On the source side, Sousi, Section 6.7 and printed pp. 63-64, computes the annular exit probability from the bounded harmonic function $\log|z-y|$, and the Durrett discussion in Section seven point four uses the same logarithm for the two-dimensional recurrence. The proof above makes the harmonic martingale rigorous with an explicitly spliced bounded $C^2$ extension, a Gaussian integration-by-parts identity for the heat identity, and the discrete optional sampling theorem at dyadic ceilings, so no It\^o calculus and no continuous-time optional stopping theorem is assumed.

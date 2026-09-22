---
id: lem-planar-brownian-annular-exit-probability
kind: lemma
title: "Planar Brownian annular exit probability"
status: published
origin: pipeline
deps: [cor-mean-value-theorem, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-extreme-value-r, thm-heine-borel-r, thm-intermediate-value, lem-gaussian-even-moment-bound-for-brownian-increments, def-d-dimensional-brownian-motion, def-brownian-motion-started-at-x, def-brownian-motion, lem-conditioning-a-known-state-and-independent-noise, cor-one-dimensional-brownian-motion-hits-every-point-almost-surely, def-continuous-time-stopping-time, def-continuous-time-filtration-and-all-pairs-martingale, def-martingale-submartingale-and-supermartingale, thm-optional-sampling-for-bounded-stopping-times, thm-integration-by-parts, thm-chain-rule, thm-continuous-partial-derivatives-imply-total-differentiability, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-ftc-second-part, thm-measurability-of-integration-against-a-kernel, def-measure-kernel-and-probability-kernel, def-multivariate-normal-law, def-standard-normal-and-normal-laws, def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Section 6.7 and printed pp. 63-64"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 9.1.1, Lemma 9.1.3 and formula (9.1.2)"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $P_x$ be the shifted planar Brownian law on
canonical continuous path space [[def-brownian-motion-started-at-x]], and let
$Z$ be its coordinate process. For $x,y\in\mathbb R^2$ with $x\ne y$ and
$0<\varepsilon<|x-y|<R$, let
$$S_\varepsilon:=\inf\{t\ge0:|Z_t-y|=\varepsilon\},\qquad T_R:=\inf\{t\ge0:|Z_t-y|=R\},$$
and let $H:=\inf\{t\ge0:|Z_t-y|\notin(\varepsilon,R)\}$. Then
$$P_x(S_\varepsilon<T_R)=\frac{\log R-\log|x-y|}{\log R-\log\varepsilon}.$$

## Facts & Assumptions

**Given:** AC, the continuous coordinate process $Z$ under $P_x$, $x\ne y$ in $\mathbb R^2$ and $0<\varepsilon<|x-y|<R$.

[F1] Under $P_x$, $Z_0=x$ almost surely, the increments of $Z$ over $[s,t]$ have law $N_2(0,(t-s)I_2)$ and are independent of the raw coordinate past, and each process $Z^i-Z^i_0$ is a standard one-dimensional Brownian motion. Every coordinate path is continuous. [[def-d-dimensional-brownian-motion]] [[def-brownian-motion-started-at-x]]

[F2] One-dimensional Brownian motion hits every level almost surely. The stopping-time definition uses exact events; the required event identities are proved in step 1.1. The conditioning lemma gives $E[h(X,Y)|\mathcal G]=H(X)$ for a known state $X$ and independent noise $Y$, $H(x)=\int h(x,y)\mu(dy)$. [[cor-one-dimensional-brownian-motion-hits-every-point-almost-surely]] [[lem-conditioning-a-known-state-and-independent-noise]] [[def-continuous-time-stopping-time]]

[F3] $N_2(0,I_2)$ is the law of a pair of independent standard normal coordinates, whose one-dimensional density $\varphi$ is positive with $\int\varphi=1$ and finite second moment. In particular $E|G_i|<\infty$ follows from $|u|\le1+u^2$. [[lem-gaussian-even-moment-bound-for-brownian-increments]] [[def-multivariate-normal-law]] [[def-standard-normal-and-normal-laws]]

[F4] Compact integration by parts, the chain rule, the fundamental theorem of calculus for a differentiable primitive, dominated and monotone convergence, and Tonelli/Fubini for bounded or integrable product integrands. [[thm-integration-by-parts]] [[thm-chain-rule]] [[thm-ftc-second-part]] [[thm-dominated-convergence]] [[thm-monotone-convergence-for-the-integral]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] [[thm-continuous-partial-derivatives-imply-total-differentiability]]

[F8] Continuous real functions on compact intervals attain their extrema and take all intermediate values. The mean value theorem bounds difference quotients. Under AC, the Countable Choice Riemann-to-Lebesgue bridge identifies the compact calculus integrals in [F4] with Lebesgue integrals. [[thm-extreme-value-r]] [[thm-heine-borel-r]] [[thm-intermediate-value]] [[cor-mean-value-theorem]] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]

[F5] Optional sampling for bounded discrete stopping times: for a martingale $Y$ with $E[Y_{k+1}|\mathcal G_k]=Y_k$ and stopping times $0\le\sigma\le\tau$ bounded by $N$, $\mathbb E[Y_\tau]=\mathbb E[Y_\sigma]$; a discrete martingale is defined by its adjacent conditional means, and the discrete stopped sigma-algebra is defined by the events $\{\tau\le k\}$. [[def-martingale-submartingale-and-supermartingale]] [[thm-optional-sampling-for-bounded-stopping-times]] [[def-continuous-time-filtration-and-all-pairs-martingale]]

[F6] Conditional expectations are unique almost surely and are additive on bounded inputs. [[def-conditional-expectation-as-an-ae-class]] [[lem-conditional-expectation-is-unique-almost-surely]] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]] [[thm-measurability-of-integration-against-a-kernel]] [[def-measure-kernel-and-probability-kernel]]

[F7] Full AC supplies the Brownian and conditional-expectation interfaces and the inherited Countable Choice in the compact Riemann-to-Lebesgue bridge. [[def-axiom-of-choice]] [[def-brownian-motion]]

## Proof

**Proof technique:** direct.

1.1 Put $a_s=|Z_s-y|$. Every path is continuous. For $t\ge0$, compact attainment and rational approximation give
$$\{H\le t\}=\bigcap_{m\ge1}\bigcup_{q\in(\mathbb Q\cap[0,t])\cup\{t\}}\{a_q<\varepsilon+1/m\ \text{or}\ a_q>R-1/m\}.$$
The reverse inclusion follows since the continuous nonnegative distance of $a_s$ to the closed set $(-\infty,\varepsilon]\cup[R,\infty)$ then has minimum zero on $[0,t]$. Similarly, for $c=\varepsilon$ or $R$, its circle hitting time has event
$$\bigcap_{m\ge1}\bigcup_{q\in(\mathbb Q\cap[0,t])\cup\{t\}}\{|a_q-c|<1/m\}.$$
These countable events are in the raw coordinate past, so all three times are stopping times and their comparisons are measurable. On the common probability-one event $Z_0=x$, the initial radius is strictly between the boundaries. Continuity and the intermediate value theorem give $H=S_\varepsilon\wedge T_R$, the boundary value $|Z_H-y|\in\{\varepsilon,R\}$ when $H<\infty$, and $|Z_s-y|\in(\varepsilon,R)$ for $s<H$. These last claims are used only on that event. [F1, F2, F8, given]

1.2 Define $\psi(r):=\log r$ for $r\in[\varepsilon,R]$ and extend it to a $C^2$ function on $[0,\infty)$ with $\psi\equiv\log\varepsilon$ on $[0,\varepsilon/2]$, $\psi\equiv\log R$ on $[2R,\infty)$, and quintic Hermite splices on $[\varepsilon/2,\varepsilon]$ and $[R,2R]$ that match value, first and second derivative at both joints: on $[\varepsilon/2,\varepsilon]$ use $s\mapsto\log\varepsilon+(\log s-\log\varepsilon)\,h(2s/\varepsilon-1)$ and on $[R,2R]$ use $s\mapsto\log R+(\log s-\log R)\,(1-h(s/R-1))$, where $h(\theta)=6\theta^5-15\theta^4+10\theta^3$ satisfies $h=h'=h''=0$ at $\theta=0$ and $h=1$, $h'=h''=0$ at $\theta=1$. Each splice agrees with the neighbouring branches in value and in its first two derivatives at both endpoints, so the resulting $\psi$ is $C^2$ with bounded first and second derivatives, and $\Phi(z):=\psi(|z-y|)$ is then a bounded $C^2$ function of $z\in\mathbb R^2$, constant near $y$ and outside the disc of radius $2R$, with $\Phi(z)=\log|z-y|$ for $|z-y|\in[\varepsilon,R]$; its Laplacian $\Delta\Phi(z)=\psi''(r)+\psi'(r)/r$ at $r=|z-y|>0$ is continuous and bounded, and it vanishes on $\{\varepsilon\le|z-y|\le R\}$ because $\Delta\log|z-y|=0$ there. [F4, algebra]

1.3 For the standard normal pair $G=(G_1,G_2)$ of [F3], every bounded $C^2$ function $f$ with bounded derivatives satisfies $\mathbb E[\partial_if(z+\sqrt rG)G_i]=\sqrt r\,\mathbb E[\partial_i^2f(z+\sqrt rG)]$ for $i=1,2$ and $r>0$. Indeed, the law of $G$ is the product of the two standard normal laws by [F3], so Fubini expresses the expectation as an iterated integral. Fix the other coordinate and integrate by parts in the chosen one-dimensional coordinate on $[-L,L]$ with the compact theorem of [F4] using $\varphi'=-u\varphi$ and the bounded factor $u\mapsto\partial_if(z+\sqrt r(u e_i+v e_j))$, where $j\ne i$ and the other Gaussian coordinate $v$ is fixed; the boundary terms vanish as $L\to\infty$ because $\varphi$ decays rapidly and the derivative factor is bounded, and dominated convergence identifies the limit. On each finite interval the integrands are continuous, so [F8] identifies the compact integration-by-parts identity with its Lebesgue version. The bounds are independent of the fixed other coordinate; Fubini completes that coordinate integration. Summing the two coordinates gives $\mathbb E[\nabla f(z+\sqrt rG)\cdot G]=\sqrt r\,\mathbb E[\Delta f(z+\sqrt rG)]$. [F3, F4, F8]

1.4 Let $\mathcal G_s:=\sigma(Z_u:0\le u\le s)$ be the raw coordinate filtration. For every bounded Borel $g:\mathbb R^2\to\mathbb R$ and $0\le s\le t$ one has $E_x[g(Z_t)|\mathcal G_s]=Q_{t-s}g(Z_s)$ almost surely: apply the conditioning lemma to the known state $Z_s$ and independent noise $Z_t-Z_s$. [F1, F2, given]

2.1 The standard one-dimensional Brownian motion $Z^{(1)}-x_1$ (zero-start almost surely) hits the level $y_1+R-x_1$ almost surely. At that time $|Z_t-y|\ge|Z^{(1)}_t-y_1|=R$, so $H$ is no larger and is finite $P_x$-almost surely. [F1, F2, step 1.1]

2.2 Fix a bounded $C^2$ function $f$ with bounded first and second derivatives and put $Q_rf(z):=\mathbb E[f(z+\sqrt rG)]=\int f(z+u)\mu_r(du)$ with $\mu_r$ the law of $\sqrt rG$. Then $r\mapsto Q_rf(z)$ is differentiable on $(0,\infty)$ with $\frac{d}{dr}Q_rf(z)=\frac12Q_r\Delta f(z)$: differentiating the expectation is licensed by the mean value theorem in [F8] and dominated convergence on a neighborhood bounded away from $r=0$, because $\nabla f$ is bounded and $|G|$ is integrable, and the resulting expression $\mathbb E[\nabla f(z+\sqrt rG)\cdot G/(2\sqrt r)]$ is $\frac12\mathbb E[\Delta f(z+\sqrt rG)]$ by step 1.3. [F4, F8, step 1.3]

3.1 Let $f$ and $Q$ be as in step 2.2. Continuity of $\Delta f$ and bounded convergence imply that $r\mapsto Q_r\Delta f(z)$ is continuous, including at zero. For $0<\delta<h$, the fundamental theorem of calculus applied to the continuous integrand $r\mapsto\frac12Q_r\Delta f(z)$ on $[\delta,h]$ gives $\frac12\int_\delta^hQ_r\Delta f(z)\,dr=Q_hf(z)-Q_\delta f(z)$ by step 2.2; [F8] identifies this compact calculus integral with the Lebesgue integral. Letting $\delta\downarrow0$, dominated convergence gives $Q_\delta f(z)\to f(z)$ because $f$ is continuous and bounded, and the integrals converge by monotone convergence on the nonnegative and negative parts; hence $Q_hf(z)-f(z)=\frac12\int_0^hQ_r\Delta f(z)\,dr$ for every $h>0$. [F4, F8, step 2.2]

4.1 Define $M_t:=\Phi(Z_t)-\Phi(Z_0)-\frac12\int_0^t\Delta\Phi(Z_r)\,dr$. The map $(r,\omega)\mapsto Z_r(\omega)$ restricted to $[0,t]$ is $\mathcal B([0,t])\otimes\mathcal G_t$-measurable: finite deterministic grid approximations to the continuous paths, using only coordinates at times at most $t$, converge pointwise. Parameter integration therefore makes the drift integral $\mathcal G_t$-measurable. Thus $M$ is adapted, continuous on every path and integrable on each finite horizon, with $|M_t|\le2\|\Phi\|_\infty+(t/2)\|\Delta\Phi\|_\infty$. For $s\le t$ and $A\in\mathcal G_s$, Fubini on the bounded finite-time integrands and step 1.4 give $$\int_A\int_s^t\Delta\Phi(Z_r)\,dr\,dP_x =\int_A\int_0^{t-s}Q_u\Delta\Phi(Z_s)\,du\,dP_x.$$ By step 3.1 the inner integral is $2(Q_{t-s}\Phi(Z_s)-\Phi(Z_s))$, while step 1.4 gives $\int_A\Phi(Z_t)dP_x=\int_AQ_{t-s}\Phi(Z_s)dP_x$. Thus $\int_A(M_t-M_s)dP_x=0$, and $M$ is a martingale. [F4, F6, step 1.2, step 3.1, step 1.4]

5.1 Fix $n\ge1$ and let $H_n:=H\wedge n$. For each $m\ge1$ put $\delta:=2^{-m}$, define the discrete filtration $\mathcal D_k:=\mathcal G_{k\delta}$ and the discrete martingale $Y_k:=M_{k\delta}$, which satisfies $\mathbb E[Y_{k+1}|\mathcal D_k]=Y_k$ by [F5] and step 4.1. The integer-valued ceiling $\rho_m:=\lceil2^mH_n\rceil$ is a stopping time for $(\mathcal D_k)$, since $\{\rho_m\le k\}=\{H_n\le k\delta\}\in\mathcal G_{k\delta}=\mathcal D_k$ by step 1.1, and it is bounded by $\lceil2^mn\rceil$. Applying [F5] with $\sigma=0$ and $\tau=\rho_m$ gives $\mathbb E[M_{\rho_m\delta}]=0$. [F5, step 1.1, step 4.1]

6.1 Expanding step 5.1 and letting $m\to\infty$, $\rho_m\delta\downarrow H_n$ and $Z_{\rho_m\delta}\to Z_{H_n}$ by continuity. Dominated convergence on $[0,n+1]$ gives $$E_x[\Phi(Z_{H_n})]=\Phi(x)+\frac12E_x\int_0^{H_n}\Delta\Phi(Z_r)\,dr.$$ Since $|Z_r-y|\in(\varepsilon,R)$ for $r<H$, the integral vanishes, and $E_x[\Phi(Z_{H_n})]=\log|x-y|$. [F4, step 1.1, step 5.1]

7.1 Define $Z_H$ by literal evaluation when $H<\infty$ and as $y$ otherwise. This is measurable by finite-grid approximation to $Z_{H\wedge n}$ and passage to the limit on $\{H<\infty\}$. Letting $n\to\infty$, continuity and bounded convergence give $E_x[\Phi(Z_H)]=\log|x-y|$. Moreover $H=S_\varepsilon\wedge T_R$ and $|Z_H-y|\in\{\varepsilon,R\}$ almost surely, so $\Phi(Z_H)=\log\varepsilon$ on $\{S_\varepsilon<T_R\}$ and $\log R$ on $\{T_R<S_\varepsilon\}$. The tie event can include paths with both times infinite, but it has $P_x$-probability zero because $H<\infty$ almost surely; a finite tie is impossible when $\varepsilon<R$. [step 1.1, step 2.1, step 6.1]

8.1 Therefore $\log|x-y|=\log\varepsilon\,P_x(S_\varepsilon<T_R)+\log R\,P_x(T_R<S_\varepsilon)$, and the two probabilities sum to one by step 7.1. Solving gives the stated formula. [step 1.2, step 7.1]

9.1 The hypotheses are exactly those used: $0<\varepsilon<|x-y|<R$ makes $\log$ finite and the end annulus nondegenerate, the case $x=y$ is excluded, the degenerate case $\varepsilon=R$ is excluded because the formula's denominator vanishes there, and the truncated times $H_n$ are bounded so that the discrete optional sampling theorem applies. AC covers [F7] and the Countable Choice bridge in [F8], and no countable or dependent choice beyond AC is spent: the integration by parts, the fundamental theorem of calculus and the optional sampling theorem used here are the compact and discrete statements cited in [F4]-[F5]. [F4, F5, F7, given, step 8.1] ∎

## Source notes

Sousi, Section 6.7 and printed pp. 63--64, computes the annular exit probability from $\log|z-y|$. Durrett, Theorem 9.1.1, Lemma 9.1.3 and formula (9.1.2), gives the same harmonic-martingale calculation and planar formula. The proof above makes the harmonic martingale rigorous with an explicitly spliced bounded $C^2$ extension, a Gaussian integration-by-parts identity and discrete optional sampling at dyadic ceilings.

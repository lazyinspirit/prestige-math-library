---
id: lem-finite-horizon-girsanov-and-relative-entropy-for-lipschitz-drifts
kind: lemma
title: Finite-horizon Brownian change of drift and relative entropy
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
axiom_base: Full AC
deps:
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - cor-vector-levy-characterization
  - thm-localized-ito-integral
  - thm-stopping-an-ito-integral
  - thm-ito-integral-process-has-a-continuous-martingale-version
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - thm-doob-maximal-bound-for-the-ito-integral
  - def-progressively-measurable-and-predictable-process
  - lem-adapted-continuous-processes-are-progressively-measurable
  - thm-optional-sampling-for-bounded-stopping-times
  - thm-uniform-integrability-of-conditional-expectations-of-one-variable
  - thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - def-conditional-expectation-as-an-ae-class
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-tower-property-of-conditional-expectation
  - thm-likelihood-ratio-change-of-measure
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - def-kullback-leibler-divergence
  - thm-fatou-lemma
  - thm-dominated-convergence
  - thm-monotone-convergence-for-the-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - cor-cauchy-schwarz-for-random-variables
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A.W. van der Vaart, Martingales, Diffusions and Financial Mathematics, Sections 6.3–6.4, Theorem 6.9 and Theorem 6.14"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
    - title: "Alain Durmus and Eric Moulines, Nonasymptotic convergence analysis for the unadjusted Langevin algorithm, v3, proof of Proposition 2"
      url: "https://arxiv.org/abs/1507.05021v3"
---

## Statement

Assume AC. Let $T>0$, let $W$ be a standard $d$-dimensional Brownian
motion on a complete usual filtered probability space, with increments after
$s$ independent of $\mathcal F_s$, and let $\theta$ be predictable with
$A_T:=\int_0^T|\theta_s|^2ds<\infty$ almost surely. Set
$$M_t=\int_0^t\theta_s\cdot dW_s,\qquad A_t=\int_0^t|\theta_s|^2ds,\qquad Z_t=\exp(M_t-A_t/2).$$
If $Z$ is a true martingale on $[0,T]$, then $Q=Z_TP$ is equivalent to $P$,
its restriction to $\mathcal F_0$ equals that of $P$, and
$$B_t=W_t-\int_0^t\theta_sds$$
is standard Brownian motion under $Q$ relative to the same filtration.
If $A_T$ is bounded by a deterministic constant, $Z$ is a true martingale.
If additionally $E_PA_T<\infty$, then
$$D(P\|Q)=\frac12E_PA_T.$$

Here is a sufficient condition that permits unbounded $A_T$. Fix a globally
Lipschitz vector field $b:\mathbb R^d\to\mathbb R^d$, a finite deterministic
grid $0=t_0<\cdots<t_N=T$, and $\eta(t)=t_k$ for
$t_k\le t<t_{k+1}$. Let each of the two path drifts $a,c$ be one of
$0$, $b(X_t)$, or $b(X_{\eta(t)})$. Suppose
$$X_t=X_0+\int_0^ta_s(X)ds+\sqrt2W_t,\qquad E|X_0|^2<\infty,$$
where $X_0$ is $\mathcal F_0$-measurable. For
$\theta_t=(c_t(X)-a_t(X))/\sqrt2$, the exponential $Z$ above is a true
martingale, and under $Q$ the process $X$ has the unique path law with
initial law $\mathcal L_P(X_0)$ and drift $c$ and dispersion $\sqrt2I_d$.
Moreover $E_PA_T<\infty$, so the entropy identity applies. Values of the
piecewise coefficients at grid points do not affect any integral.

Finally, for any probability measures $R\ll S$ and measurable statistic
$F$, relative entropy decreases under pushforward:
$$D(F_\#R\|F_\#S)\le D(R\|S).$$
All equivalence and entropy assertions concern this finite horizon.

## Facts & Assumptions

**Given:** AC and the filtered Brownian data, integrand, horizon and, for
the sufficient condition, the vector field, grid, initial value and solution
specified in the Statement.

[F1] Localized predictable Brownian integrals exist; stopping commutes with
integration; finite-energy integrals are continuous square-integrable
mean-zero martingales and obey their isometry. The multidimensional Itô
formula applies to Brownian Itô processes with locally integrable drift and
locally square-integrable diffusion. In particular it applies to exponentials
of $(M,A)$ and products of two such processes.
[[thm-localized-ito-integral]] [[thm-stopping-an-ito-integral]]
[[thm-ito-integral-process-has-a-continuous-martingale-version]]
[[thm-ito-isometry-and-linearity-in-predictable-l2]]
[[thm-multidimensional-ito-formula-for-brownian-driven-processes]]

[F2] A continuous vector local martingale starting at zero with covariation
matrix $tI_d$ is Brownian relative to its filtration; its increments are
independent of the earlier sigma-algebra. [[cor-vector-levy-characterization]]

[F3] Conditional expectations are characterized by event integrals and
preserve order; the tower property holds. Conditional expectations of a fixed
integrable terminal variable are UI; UI and convergence in probability imply
$L^1$ convergence. Bounded optional sampling applies to the finite discrete-time martingale
obtained by sampling a continuous martingale on a deterministic grid; the
continuous-time extension is proved in step 1.2 below.
[[def-conditional-expectation-as-an-ae-class]]
[[thm-basic-algebra-and-order-properties-of-conditional-expectation]]
[[thm-tower-property-of-conditional-expectation]]
[[thm-uniform-integrability-of-conditional-expectations-of-one-variable]]
[[thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence]]
[[thm-optional-sampling-for-bounded-stopping-times]]

[F4] Each Brownian coordinate satisfies $E\sup_{t\le T}|W_t^i|^2\le4T$.
The globally Lipschitz diffusion has a unique strong solution with finite
second path moment, constructed by Picard iteration.
[[thm-doob-maximal-bound-for-the-ito-integral]]
[[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

[F5] Continuous adapted processes are predictable; interval step processes
with coefficients measurable at the left endpoint have predictable versions.
[[lem-adapted-continuous-processes-are-progressively-measurable]]
[[def-progressively-measurable-and-predictable-process]]

[F6] Fatou, dominated convergence, monotone convergence, Tonelli and
Cauchy–Schwarz apply to the displayed integrable or nonnegative quantities.
Radon–Nikodym densities are determined by their event integrals and change
measure in integrals. Relative entropy is directional, and
$x\log x\ge-1/e$ for $x\ge0$, with $0\log0=0$.
[[thm-fatou-lemma]] [[thm-dominated-convergence]]
[[thm-monotone-convergence-for-the-integral]]
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]
[[cor-cauchy-schwarz-for-random-variables]]
[[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]
[[thm-likelihood-ratio-change-of-measure]] [[def-kullback-leibler-divergence]]

[A1] AC is inherited from the Brownian Itô, conditional-expectation, Levy,
and SDE suppliers; the integer localizers and deterministic meshes below
require no additional choice principle. [[def-axiom-of-choice]]

## Proof

1.1 By [F1], applied to $f(m,a)=e^{m-a/2}$, $dZ_t=Z_t\theta_t\cdot dW_t$. Stopping at integer levels of $A$, $|M|$ and $Z$ makes the integral finite-energy, so $Z$ is a positive continuous local martingale. All these stops tend beyond every time strictly less than $T$, and stabilize at $T$, because the paths and energy are bounded on $[0,T]$. A nonnegative local martingale $N$ is a supermartingale: Fatou first gives integrability, and conditional Fatou gives $E[N_t\mid\mathcal F_s]\le\liminf_jE[N_{t\wedge\rho_j}\mid\mathcal F_s]=\liminf_jN_{s\wedge\rho_j}=N_s$ for a localizing sequence. The conditional Fatou assertion follows by taking the increasing infima of the tails, using conditional order and monotone convergence; conditional monotone convergence follows by ordinary monotone convergence in the defining event integrals. Thus $E Z_t\le1$, and the same assertion applies to the stopped exponential for every scalar multiple of $\theta$. [F1, F3, F5, F6, given]

1.2 We record the continuous stopping consequence needed below. Let $V$ be a continuous true martingale on $[0,T]$. For $\rho\le T$, round $\rho$ upward to stopping times $\rho_j$ on finite grids whose meshes tend to zero. Discrete bounded optional sampling in [F3] gives $V_{\rho_j}=E[V_T\mid\mathcal F_{\rho_j}]$. This family is UI and converges almost surely to $V_\rho$, hence in $L^1$. If $A\in\mathcal F_\rho$, then $A\in\mathcal F_{\rho_j}$, as is checked by the defining stopped-event tests, so passage in those tests gives $V_\rho=E[V_T\mid\mathcal F_\rho]$. In particular the family of all $V_\rho$, $\rho\le T$, is UI. Stopping preserves true martingality: for fixed $s<t$, choose the grids on $[0,t]$ to contain $s$; the finite-grid identity $E[1_AV_{t\wedge\rho_j}]=E[1_AV_{s\wedge\rho_j}]$ for $A\in\mathcal F_s$ follows by telescoping grid increments with the left-endpoint measurable stopping indicators. Continuity and the preceding UI argument pass it to $V^\rho$. Thus both continuous stopping facts used below have been derived from the discrete supplier. [F3, F6]

1.3 To prove data processing, write $r=dR/dS$, and let $u$ be the density of $F_\#R$ relative to $F_\#S$; absolute continuity follows immediately by taking inverse images of null sets. Testing events in $\sigma(F)$ gives $u\circ F=E_S[r\mid\sigma(F)]$. If $D(R\|S)=\infty$ the desired inequality is immediate. Otherwise $\phi(r)$ is integrable, where $\phi(x)=x\log x$ on $x>0$ and $\phi(0)=0$, since its negative part is bounded by $1/e$. For positive rational $a$, the tangent line $\ell_a(x)=(1+\log a)x-a$ lies below $\phi(x)$ on $x\ge0$, by differentiating their difference, and $\phi(x)=\sup_{a\in\mathbb Q,\ a>0}\ell_a(x)$, including $x=0$ by $a\downarrow0$. Conditional order gives $\ell_a(E_S[r\mid\sigma(F)])\le E_S[\phi(r)\mid\sigma(F)]$. Intersect these countably many full events, take the supremum and then expectations. This yields $D(F_\#R\|F_\#S)\le D(R\|S)$, with left integrability following from the lower bound $-1/e$ and the displayed conditional upper bound. [F3, F6, algebra]

2.1 If $A_T\le n$, then at every stopping time $\rho\le T$, $Z_\rho^2=\exp(2M_\rho-2A_\rho)\exp(A_\rho)$, whence $E Z_\rho^2\le e^n$ by step 1.1 applied to the stopped integrand $2\theta1_{[0,\rho]}$. Apply this bound to localizing stops for $Z$. Their terminal values are UI, since their tail integrals are at most $e^n/R$ above level $R$. They converge almost surely, and hence in $L^1$, to $Z_T$. The same holds at every earlier time, so passage in martingale event tests proves true martingality. In particular $Z_t=E[Z_T\mid\mathcal F_t]$. [F1, F3, step 1.1, algebra]

2.2 Suppose $Z$ is true and put $Q=Z_TP$. Since $0<Z_T<\infty$ almost surely, these probabilities are equivalent. For $A\in\mathcal F_t$, $Q(A)=E_P[Z_T1_A]=E_P[Z_t1_A]$ by [F3], so $Q|\mathcal F_t=Z_tP|\mathcal F_t$; at $t=0$ this is $Q|\mathcal F_0=P|\mathcal F_0$. The measures have identical null sets, so completeness and the usual filtration conditions persist. Let $B=W-\int\theta ds$, whose drift has finite total variation by pathwise Cauchy–Schwarz. For a coordinate $i$, let $\sigma_r$ be the first time $|B^i|$ reaches $r$, capped at $T$. These are stopping times because continuous adapted path suprema are measurable by their rational-time suprema. Product Itô gives $$d(Z_tB^i_{t\wedge\sigma_r})=Z_t1_{[0,\sigma_r]}(t)dW_t^i+B^i_{t\wedge\sigma_r}Z_t\theta_t\cdot dW_t.$$ The finite-variation terms cancel against $d[Z,W^i]_t=Z_t\theta_t^idt$. The right side is locally square integrable, so the product is a $P$-local martingale. [F1, F3, F5, F6, step 1.1]

3.1 For every $\rho\le T$, $|Z_\rho B^i_{\rho\wedge\sigma_r}|\le rZ_\rho$. By step 1.2, $Z_\rho=E[Z_T\mid\mathcal F_\rho]$, and these random variables form a UI family. Hence the localizing stopped products in step 2.2 are UI. Passing their event tests in $L^1$ makes $ZB^{i,\sigma_r}$ a true $P$-martingale. For $A\in\mathcal F_s$, change of measure at times $s,t$ now gives $E_Q[1_AB^i_{t\wedge\sigma_r}]=E_P[1_AZ_tB^i_{t\wedge\sigma_r}]=E_P[1_AZ_sB^i_{s\wedge\sigma_r}]=E_Q[1_AB^i_{s\wedge\sigma_r}]$. Thus $B^i$ is a $Q$-local martingale. Its localizers increase to the horizon because continuous paths are bounded on each compact interval. [F3, F6, step 1.2, step 2.2]

3.2 If $E_PA_T<\infty$, [F1] gives $E_PM_T=0$ and $E_PM_T^2=E_PA_T$. Since $dQ/dP=Z_T>0$, $dP/dQ=1/Z_T$ and $-\log Z_T=-M_T+A_T/2$ is $P$-integrable. The definition of relative entropy therefore gives $D(P\|Q)=E_P[-\log Z_T]=E_PA_T/2$. This establishes the asserted identity whenever $Z$ is true; it does not yet presume true martingality in the unbounded-energy sufficient condition. [F1, F6, step 2.2]

4.1 Subtracting a continuous finite-variation path preserves quadratic covariations: its squared-increment sum is at most its largest increment times its total variation, and its mixed-increment sum with $W^i$ is at most the largest Brownian increment times that variation. Both errors tend to zero pathwise along every vanishing-mesh partition. The Brownian covariation limits also hold in $Q$-probability: $P(E_n)\to0$ implies $Q(E_n)=E_P[Z_T1_{E_n}]\to0$ by integrability of $Z_T$. Consequently $[B^i,B^j]_t=\delta_{ij}t$ under $Q$, and [F2] proves that $B$ is $Q$-Brownian. The cited proof applies on $[0,T]$ because it uses only finite pairs of times. Equivalently, if the Brownian space is defined for all times, set $\theta=0$ after $T$ and keep $Z$ constant; the argument applies on every horizon and uses [F2] literally. A space defined only up to $T$ can first be extended by an independent Brownian continuation. [F1, F2, F6, step 3.1]

5.1 Consider that sufficient condition. The three candidate drifts are predictable by [F5] and obey $|v_t(X)|\le K(1+\sup_{u\le t}|X_u|)$ for some common $K$. The base Brownian and Euler equations are explicit, and the diffusion equation is covered by [F4]. Their solutions have finite second path moment: for Euler this follows immediately from its finite recursion and the Brownian maximal bound. Pathwise boundedness gives $A_T<\infty$. Set $\tau_n=\inf\{t:A_t\ge n\}\wedge T$ and $Z^n_t=\exp(M_{t\wedge\tau_n}-A_{t\wedge\tau_n}/2)$. By step 2.1 it is a true martingale. Under $Q_n=Z^n_TP$, step 4.1 gives Brownian motion $B^n=W-\int_0^{\cdot\wedge\tau_n}\theta_sds$, and substitution in the additive equation gives $$dX_t=\bigl(1_{[0,\tau_n]}(t)c_t(X)+1_{(\tau_n,T]}(t)a_t(X)\bigr)dt+\sqrt2dB^n_t.$$ The initial law is unchanged and the switched drift obeys the same $K$ bound. [F4, F5, step 2.1, step 4.1, given]

6.1 Uniformly in $n$, $$E_{Q_n}\sup_{t\le T}|X_t|^2\le C_T:=(1+3E|X_0|^2+24dT)e^{6K^2T^2}-1.$$ To establish finiteness without assuming it, first stop $X$ at its first exit from a ball of radius $R$. If $|X_0|\ge R$ the stop is zero and the stopped path is $X_0$, which retains its integrable second moment. Before stopping, the drift bound uses the corresponding stopped path supremum. Cauchy–Schwarz, $|x+y+z|^2\le3(|x|^2+|y|^2+|z|^2)$, and [F4] therefore bound its expected squared supremum $q_{n,R}(t)$ by $3E|X_0|^2+24dT+6K^2T\int_0^t(1+q_{n,R}(s))ds$. These quantities are finite for fixed $R$. Put $H(t)=1+3E|X_0|^2+24dT+6K^2T\int_0^t(1+q_{n,R}(s))ds$; then $1+q_{n,R}\le H$ and $H'\le6K^2TH$ almost everywhere, so the integrating factor gives $q_{n,R}(T)\le C_T$. The ball stops tend to $T$ on every bounded continuous path; Fatou proves the displayed bound. [F4, F6, step 5.1, algebra]

7.1 For the integrands used here, elementary left-endpoint sums on deterministic partitions refining the Euler grid give the identity $$M_{T\wedge\tau_n}=\int_0^T1_{[0,\tau_n]}(s)\theta_s\cdot dB_s^n+A_{T\wedge\tau_n}.$$ Here is a direct justification across the measure change. All path coefficients are continuous on each of finitely many open mesh intervals; multiplying by the stopping indicator adds at most one discontinuity. Stop further on bounded path and coefficient levels. Their left-endpoint staircases converge for almost every time on each path, are bounded, and hence converge in predictable $L^2$ under both equivalent measures by dominated convergence. Both Brownian integrals converge by their respective isometries, while the drift integral converges by Cauchy–Schwarz. For each elementary sum the identity follows by substituting $dW=dB^n+1_{[0,\tau_n]}\theta ds$. Equivalence identifies the probability limits; removing the extra increasing stops proves the displayed identity. The $Q_n$-Brownian integral has mean zero since its energy is at most $n$. As $|\theta_t|^2\le4K^2(1+\sup_{u\le t}|X_u|^2)$, step 6.1 yields $$E_P[Z^n_T\log Z^n_T]=\tfrac12E_{Q_n}A_{T\wedge\tau_n}\le2K^2T(1+C_T).$$ [F1, F5, F6, step 4.1, step 5.1, step 6.1]

8.1 Since $z\log z\ge-1/e$, step 7.1 gives, for $R>1$, $E_P[Z^n_T1_{\{Z^n_T>R\}}]\le(2K^2T(1+C_T)+1/e)/\log R$. Thus $(Z^n_T)$ is UI. On every path with $A_T<\infty$, $\tau_n=T$ for all sufficiently large $n$, so $Z^n_T\to Z_T$ almost surely and in $L^1$. In particular $E Z_T=1$. Step 1.1 gives a supermartingale with initial mean one and terminal mean one, so every intermediate mean equals one; the nonnegative conditional supermartingale deficit has mean zero, proving true martingality of $Z$. Apply step 4.1 without stops to get the target equation. The base finite second path moment in step 5.1 and the coefficient bound imply $E_PA_T<\infty$, so step 3.2 applies. [F3, F6, step 1.1, step 3.2, step 5.1, step 7.1]

9.1 The target path law is uniquely determined, as follows. For target zero it is $X_0+\sqrt2B$; for Euler target it is the finite mesh recursion, a Borel function of $(X_0,B)$. For target $b(X_t)$, use the Picard recursion $X^{m+1}=X_0+\int_0^{\cdot}b(X_s^m)ds+\sqrt2B$ starting with $X^0_t=X_0$. Its iterates are Borel functions on $\mathbb R^d\times C([0,T],\mathbb R^d)$: integration of a continuous path is a uniform limit of its deterministic Riemann sums. For every fixed input $(x,w)$, put $C=T|b(x)|+\sqrt2\sup|w|$. The first iterate difference has supremum at most $C$, and induction in the Lipschitz integral inequality bounds the $m$th difference up to time $t$ by $CL^{m-1}t^{m-1}/(m-1)!$. Their uniformly summable majorant proves uniform convergence for every continuous input. The limit is consequently a Borel function of that input. The deterministic Lipschitz integral inequality makes any solution with the same input agree with this limit: if $h(t)$ is the path supremum of their difference, $h(t)\le L\int_0^th(s)ds$, and the integrating factor forces $h=0$. Under the changed measure, $B$ has Wiener law and is independent of $X_0$, because its future increments are independent of $\mathcal F_0$; independence of the entire path follows first on finite-time cylinder events and then on their generated sigma-algebra. Thus $(X_0,B)$ has the same product law on every such space, and its Borel solution map proves the asserted uniqueness in law. [F2, F4, F6, step 4.1, step 8.1]

10.1 If $\theta=0$, then $Z=1$, $Q=P$ and the entropy is zero. A zero mesh interval is omitted; the stated grid has strictly positive lengths, and no lower bound on those lengths is needed. At time zero all integrals vanish and the initial law is preserved. The excluded horizon $T=0$ has the same trivial conclusions. AC has exactly the inherited uses in [A1]. [A1, step 2.1, step 4.1, step 3.2, step 8.1, step 9.1, step 1.3] ∎

## Source notes

Van der Vaart, Theorem 6.9 and Theorem 6.14 with their proofs, supply the
exponential/product route and its source provenance. The bounded-energy
argument above replaces the source's general Novikov/time-change argument.
The entropy localization is supplied explicitly for the required linear-growth
path drifts. No general Girsanov, Novikov, semimartingale measure-invariance,
or weak-uniqueness theorem is taken as an unproved premise.

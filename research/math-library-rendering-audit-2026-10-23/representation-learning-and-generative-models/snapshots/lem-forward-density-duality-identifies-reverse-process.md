---
id: lem-forward-density-duality-identifies-reverse-process
kind: lemma
title: Forward density duality identifies an auxiliary reverse process
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-continuous-brownian-ito-process
  - lem-continuous-local-martingale-quadratic-variation
  - def-reversed-transition-kernels-for-diffusions
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - thm-conditional-fatou-and-dominated-convergence
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-dominated-convergence
  - cor-conditional-lp-contraction
  - thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures
  - lem-test-function-cutoffs-and-euclidean-localization
  - thm-dynkin-pi-lambda
  - lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "B. D. O. Anderson, Reverse-time diffusion equation models, Section 5: forward density duality"
      url: "https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf"
    - title: "N. V. Krylov, On time inhomogeneous stochastic Ito equations with drift in Ld+1, Lemma 4.1: occupation estimate context"
      url: "https://arxiv.org/pdf/2005.08831"
---

## Statement

Assume AC. Let $X$ be a continuous Markov process on $[0,T]$ in $\mathbb R^d$, with positive $C^{1,2}$ marginal densities $p_r$ and positive transition densities $q(s,x;r,y)$ satisfying the marginal and Chapman–Kolmogorov identities. For each fixed $(s,x)$, suppose the forward density equation for $q(s,x;\cdot,\cdot)$ holds classically in the evolving time and state variables on $(s,T]\times\mathbb R^d$, and suppose the forward equation for $p$ holds classically, for $L_rf=b_r\cdot\nabla f+\tfrac12a_r:D^2f$ and its formal adjoint $L_r^*$. Put
$$D_rf=p_r^{-1}\{L_r^*(p_rf)-fL_r^*p_r\}=c_r\cdot\nabla f+\tfrac12a_r:D^2f,\qquad c_r=-b_r+p_r^{-1}\nabla\!\cdot(p_ra_r).$$
Assume the displayed coefficients are Borel. On an auxiliary usual filtered probability space, let $Z$ be a continuous Brownian Itô process with initial law $p_T(y)dy$, drift $c_{T-u}(Z_u)$ and bracket density $a_{T-u}(Z_u)$; its drift and diffusion energy integrals are pathwise finite on $[0,T]$. Suppose there are stopping times $\tau_n\uparrow T$ almost surely such that the finite measures
$$\mu_n(E)=E\int_0^{\tau_n}1_E(u,Z_u)du$$
are absolutely continuous with respect to spacetime Lebesgue measure. No marginal law of $Z$ after time zero is assumed.

Then $Z$ has the same path law as $Y_u=X_{T-u}$. In particular its marginal at $u$ is $p_{T-u}$ and its transition kernel from $u$ to $v>u$ is
$$K_{u,v}(y,dx)=\frac{p_{T-v}(x)q(T-v,x;T-u,y)}{p_{T-u}(y)}dx.$$
Consequently $Y$ solves the local martingale problem for $D_{T-u}$ in its natural reversed filtration. The occupation condition is an explicit hypothesis of this intermediate lemma; its applicability must be proved, not inferred from density notation.

## Statement references

[Anderson, Section 5, printed pp. 322–324](https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf): density-duality context; the positive-mixture and occupation argument is given in full below.

[Krylov, Lemma 4.1, PDF pp. 6–8](https://arxiv.org/pdf/2005.08831): a stronger sufficient occupation estimate. That estimate is not used without proof as a supplier here; occupation absolute continuity is a stated hypothesis.

## Facts & Assumptions

**Given:** the original forward process and a separate auxiliary Itô process $Z$, with the hypotheses of the Statement.

[A1] AC supplies conditional expectation and the Itô interfaces. [[def-axiom-of-choice]]

[F1] The forward marginal and Chapman–Kolmogorov identities give the Bayes-reversed Markov kernels. [[def-reversed-transition-kernels-for-diffusions]]

[F2] The auxiliary Brownian Itô process is relative to its displayed filtration, so its adapted Brownian driver has increments independent of the earlier filtration with the standard covariance. [[def-continuous-brownian-ito-process]] The time-dependent Itô formula applies after compact time-state localization to a $C^{1,2}$ function of a continuous Brownian Itô process. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]

[F3] A nonnegative local martingale with integrable initial value is a supermartingale: conditional Fatou applied to its stopped martingale identities proves the conditional inequality, and ordinary Fatou bounds every expectation by its initial expectation. A bounded stopped continuous local martingale is a true martingale. Tonelli transfers nonnegative event-integral inequalities to positive mixtures. [[lem-continuous-local-martingale-quadratic-variation]] [[thm-conditional-fatou-and-dominated-convergence]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F4] For a finite measure $\nu$ absolutely continuous with respect to Lebesgue measure on a bounded cylinder, bounded functions tending to zero in Lebesgue $L^1$ tend to zero in $L^1(\nu)$. Indeed, their level sets have Lebesgue measure tending to zero, the finite-measure epsilon-delta absolute-continuity condition makes their $\nu$ measures tend to zero, and splitting at a fixed small level proves the integral convergence. [[thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures]]

[F5] Dominated convergence, absolutely integrable Fubini, and the $L^1$ conditional-expectation contraction justify limits of bounded event tests and integrable conditional identities. [[thm-dominated-convergence]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] [[cor-conditional-lp-contraction]]

[F6] Compact smooth cutoffs exhaust open sets; the pi-lambda theorem then extends equality of their finite-measure integrals to Borel sets. [[lem-test-function-cutoffs-and-euclidean-localization]] [[thm-dynkin-pi-lambda]]

[F7] The Borel sigma-algebra of continuous path space is generated by coordinate evaluations. The supplied scalar infinite-horizon result gives the finite-horizon vector version by constant extension after $T$ and by taking finitely many coordinate components. Thus equal finite-dimensional laws of continuous processes imply equal path laws. [[lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates]]

## Proof
**Given:** all hypotheses and notation in the Statement. Use forward-clock notation $B_{r,s}(y,dx)=p_s(x)q(s,x;r,y)p_r(y)^{-1}dx$ for $s<r$.

1.1 Fix $0\le s<T$ and $x$. Set $h_{s,x}(r,y)=q(s,x;r,y)/p_r(y)$ for $r>s$. The two classical forward equations and the exact adjoint product identity give $\partial_rh_{s,x}=D_rh_{s,x}$. This is $C^{1,2}$ in the evolving variables, because $p>0$ and both density solutions are classical; it requires no joint coefficient-derivative bound. On every closed interval $0\le u\le T-s-\delta$, [F2] applied after spatial localization gives $H^x_u=h_{s,x}(T-u,Z_u)$ a nonnegative local martingale. Its initial expectation is $\int q(s,x;T,y)dy=1$, since $Z_0$ has density $p_T$. Thus it is a supermartingale before $T-s$ by [F3]. This also applies at $s=0$, using the assumed transition density from forward time zero. [A1, F2, F3, given, algebra]

2.1 For any Borel $0\le f\le1$, put $H^f_u=\int p_s(x)f(x)H^x_u dx=B_{T-u,s}f(Z_u)$. Integrate each fixed-$x$ supermartingale inequality against $p_s(x)f(x)dx$, first tested on an arbitrary nonnegative bounded earlier-filtration event variable. Tonelli in [F3] proves the mixture supermartingale inequality without a common choice of conditional versions in $x$. The mixture lies in $[0,1]$. The complementary mixture $H^{1-f}$ is also a supermartingale and $H^f+H^{1-f}=1$ by the marginal identity, so both inequalities must be equalities. Hence $H^f$ is a true martingale on $[0,T-s)$, and $\displaystyle E B_{r,s}f(Z_{T-r})=\int p_s f\,dx$ for $s<r\le T$. Linearity extends this identity to bounded real Borel $f$. [F1, F3, step 1.1]

3.1 Fix a compact smooth $f$ and put $F_\delta(r,y)=|B_{r,r-\delta}f(y)-f(y)|$. It is bounded by $2\|f\|_\infty$, and $\int p_rF_\delta(r,\cdot)\le E|f(X_{r-\delta})-f(X_r)|$. Integrating over any compact interior time interval and using continuity of $X$ and [F5] makes this tend to zero. On every compact time-state cylinder $p$ has a positive minimum, so $F_\delta\to0$ in local Lebesgue $L^1$. Apply [F4] to the occupation measure $\mu_n$ and the time-reversed function $F_\delta(T-u,y)$, first on a bounded state cylinder and then exhausting state balls; boundedness controls the tails of the finite measure $\mu_n$. Thus $\displaystyle E\int_a^bF_\delta(T-u,Z_u)1_{u\le\tau_n}du\to0$ for every compact interior $[a,b]$. Since $E(T-\tau_n)\to0$ and $F_\delta$ is uniformly bounded, [F5] removes stopping. No unknown marginal of $Z$ has been replaced by $p$ in this argument. [F1, F4, F5, step 2.1]

4.1 In the expectation identity in step 2.1 take $r=s+\delta$, multiply by any continuous time test $\zeta$ compactly supported in $(0,T)$, and integrate over $s$. Step 3.1, with $u=T-s-\delta$, permits replacement of $B_{s+\delta,s}f(Z_{T-s-\delta})$ by $f(Z_{T-s-\delta})$. Continuity of $Z$ and boundedness of $f$ then let $\delta\downarrow0$, giving $\int\zeta(s)E f(Z_{T-s})ds=\int\zeta(s)\int p_sf\,dxds$. Both integrands are continuous in $s$, the second because it equals $E f(X_s)$, so they agree at every interior time. Compact smooth tests determine finite Borel measures by [F6]. Continuity of both processes extends the equality to $s=0,T$. Thus $\operatorname{Law}(Z_{T-s})=p_s dx$ for every $s$. [F5, F6, step 2.1, step 3.1]

5.1 Fix $0\le s<r\le T$. The conditional martingale identity of step 2.1 gives $\displaystyle E[B_{s+\delta,s}f(Z_{T-s-\delta})\mid\mathcal F^Z_{T-r}]=B_{r,s}f(Z_{T-r})$. Now step 4.1 supplies the law $p_{s+\delta}$ for the random argument on the left, so $\displaystyle E|B_{s+\delta,s}f(Z_{T-s-\delta})-f(Z_{T-s-\delta})|\le E|f(X_s)-f(X_{s+\delta})|\to0$. Continuity of $Z$ and the $L^1$ contraction in [F5] therefore prove $\displaystyle E[f(Z_{T-s})\mid\mathcal F^Z_{T-r}]=B_{r,s}f(Z_{T-r})$. First use compact smooth $f$, then [F6] extends to bounded Borel tests. The endpoint limit uses the marginal identity only after it has been proved in step 4.1. [F1, F5, F6, step 2.1, step 4.1]

6.1 Step 5.1 identifies all Bayes transitions of $Z$, and its initial law is $p_T$. The actual reversed process $Y$ has those kernels by [F1]. Iterated conditioning gives the same finite-dimensional laws; [F7] gives the same continuous path law. It remains to transfer compact-test local martingales without completing the natural filtration $\mathcal G_u=\sigma(Y_r:0\le r\le u)$. We specify raw-progressive compensated-test representatives below; their identities with the usual pathwise expressions hold simultaneously in time on a probability-one event. No assertion about arbitrary exceptional-path modifications of stopped processes is needed. [F1, F7, step 5.1]

7.1 For either process $V=Y$ or $V=Z$, take its past dyadic step approximants, equal to $V_{kT/2^m}$ on $(kT/2^m,(k+1)T/2^m]$ and to $V_0$ at zero. Define $\widehat V_u$ as their finite vector limit when it exists, and zero otherwise. Each step process is progressive for the raw natural filtration: on $[0,t]$ its rectangles use only coordinates at times at most $t$. The limit rule preserves this measurability and adaptedness. On the common continuity event, $\widehat V=V$ at every time, including the endpoints. For $\phi\in C_c^\infty$, define $J^\phi_u(V)=\int_0^uD_{T-r}\phi(\widehat V_r)dr$ when the positive and negative integrals are both finite, and zero otherwise; parameter integration in [F3] makes this a finite progressive process, as in the drift convention of [F2]. Use the progressive compensated representative $M^\phi_u(V)=\phi(\widehat V_u)-\phi(V_0)-J^\phi_u(V)$. [F2, F3, step 6.1, construct]

8.1 The following finite-prefix construction supplies literal raw stopping times even on exceptional paths. Put $g(r,x)=|c_{T-r}(x)|+\sum_{i,j}|a_{T-r,ij}(x)|$ and $A_u(V)=\int_0^u g(r,\widehat V_r)dr\in[0,\infty]$. It is adapted by parameter integration. Define $K_u(V)$ as the supremum of $0$, all finite $A_q(V)$ with rational $0\le q\le u$, and $A_u(V)$ if finite. This is adapted, using only countably many past coordinates of $A$ and its current value. Pathwise, $\{u:A_u<\infty\}$ is an initial interval containing zero. If its supremum is $\zeta>0$, then $A$ is continuous before $\zeta$, and Tonelli over disjoint time intervals tending to $\zeta$ gives $A_\zeta=\lim_{u\uparrow\zeta}A_u=\ell$, possibly infinite (the endpoint singleton has zero time measure). If $\ell<\infty$, $K$ follows $A$ up to $\zeta$ and then stays equal to $\ell$; if $\ell=\infty$, it tends continuously to infinity there and stays infinite. If $\zeta=0$, every positive-time $A$ is infinite and $K\equiv0$. The same argument includes $\zeta=T$ and the case of finite $A_T$. Consequently $K\wedge n$ is everywhere continuous and nondecreasing, with initial value zero, for every finite $n$. [F3, step 7.1, construct]

9.1 Set $\rho_n(V)=\inf\{u\in[0,T]:K_u(V)\ge n\}\wedge T$, with empty infimum infinite. For $u<T$, continuity and monotonicity proved in step 8.1 give exactly $\{\rho_n(V)\le u\}=\{K_u(V)\ge n\}$; at $T$ the stopping event is the whole space. Thus these are increasing raw-natural-filtration stopping times. For $Z$, its finite drift and diffusion energy imply $A_T(Z)<\infty$ almost surely: its bracket density is positive semidefinite for almost every time along almost every path, so $\sum_{i,j}|a_{ij}|\le d\operatorname{tr}a$ there. Equal continuous path laws give $A_T(Y)<\infty$ almost surely as well. On those continuity and finite-energy events, $K=A$, $A_{u\wedge\rho_n}\le n$, and $\rho_n=T$ eventually. Bounded derivatives of $\phi$ give $|D_{T-r}\phi(x)|\le C_\phi g(r,x)$, hence $|M^\phi_{u\wedge\rho_n}(V)|\le2\|\phi\|_\infty+C_\phi n$ almost surely. The stopped values are raw-adapted and measurable: compose the progressive restriction of $M^\phi$ on $[0,u]$ with the measurable map $\omega\mapsto(u\wedge\rho_n(\omega),\omega)$. [F2, F3, F7, step 6.1, step 7.1, step 8.1]

10.1 In the auxiliary usual filtration, [F2] makes $M^\phi(Z)$ a continuous local martingale up to indistinguishability. Normalize its continuity exceptional set in that initial sigma-algebra before applying [F3]. Its stop at the already constructed $\rho_n(Z)$ is bounded almost surely by step 9.1, hence a true martingale. The path integrals, clocks and stopping times above are Borel functions of a continuous coordinate path: parameter integration gives the integrals, countable suprema give $K$, and $\{\rho_n\le u\}=\{K_u\ge n\}$ for $u<T$ gives measurability of $\rho_n$; evaluation of a continuous path at a measurable time is Borel. The finite-integral convention also makes the stopped compensated functionals Borel. Equal path laws therefore transfer their event-integral martingale identities to every cylinder event $\{(Y_{r_1},\ldots,Y_{r_k})\in H\}$ with $r_i\le s$, $H$ Borel, and $s\le t$. For fixed $s,t,n,\phi$, the events for which the identity holds form a lambda-system, because the stopped variables are integrable; these cylinders form a pi-system generating the original $\mathcal G_s$. Thus [F6] extends the identity to every $\mathcal G_s$ event, without replacing that filtration by the one generated by $\widehat Y$. Hence each $M^\phi(Y)^{\rho_n(Y)}$ is a raw martingale. Exhaustion in step 9.1 proves the local martingale problem in the stated raw natural filtration, using the specified progressive compensated representatives and no additional coefficient or filtration assumptions. [F2, F3, F6, F7, step 6.1, step 7.1, step 8.1, step 9.1] ∎

---
id: lem-baoab-one-step-error-moment-bounds
kind: lemma
title: "Moment-weighted local defect bounds for BAOAB"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-underdamped-langevin-equation-and-canonical-gibbs-density
  - alg-baoab-underdamped-langevin-splitting
  - lem-exact-ornstein-uhlenbeck-momentum-substep
  - def-axiom-of-choice
  - def-ito-sde-and-strong-solution
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - cor-deterministic-ito-integrals-are-gaussian
proof_strategy: direct
axiom_base: Full AC
axiom_use: "AC is inherited from the Brownian, strong-solution, Itô, and deterministic Itô-integral suppliers; the displayed estimates use no further choice."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Adam Telatovich and Xiantao Li, Strong Convergence Analysis for Numerical Methods for the Langevin Dynamics Model and Higher-order Operator-splitting Schemes, §§2–3 and 5.2"
      url: "https://arxiv.org/pdf/1706.04237v2"
    - title: "Jean-Noël Roux, Stéphane Rodts, and Gabriel Stoltz, Introduction à la physique statistique et à la physique quantique, §§5.2.1–5.2.2"
      url: "https://cermics.enpc.fr/~stoltz/poly_phys_stat_quantique.pdf"
    - title: "Benedict Leimkuhler and Charles Matthews, Rational Construction of Stochastic Numerical Methods for Molecular Sampling, §2 and Appendix"
      url: "https://arxiv.org/pdf/1203.5428"
---

## Statement

Let $F=-\nabla V:\mathbb R^d\to\mathbb R^d$ be globally Lipschitz, have linear growth $|F(q)|\le C(1+|q|)$, and have bounded first and second derivatives. Fix the model data in [[def-underdamped-langevin-equation-and-canonical-gibbs-density]], a finite starting state $Z_t=(q,p)$, and $0<h\le1$. Couple the exact SDE and one BAOAB step by the same Brownian increment, taking the BAOAB OU noise to be the standardized exact OU integral from [[lem-exact-ornstein-uhlenbeck-momentum-substep]]. Put $b(q,p)=(M^{-1}p,F(q)-\gamma p)$ and $G=(0,S)^T$ with $S=\sqrt{2\gamma\beta^{-1}}M^{1/2}$. There are remainders $R^B,R^E$ such that
$$Z^B_{t+h}=Z_t+h b(Z_t)+G(W_{t+h}-W_t)+R^B,\qquad Z_{t+h}=Z_t+h b(Z_t)+G(W_{t+h}-W_t)+R^E,$$
and, conditionally on the starting sigma algebra,
$$|\mathbb E[R^B\mid\mathcal F_t]|+|\mathbb E[R^E\mid\mathcal F_t]|\le C h^2(1+|Z_t|),\qquad \mathbb E[|R^B|^2+|R^E|^2\mid\mathcal F_t]\le C h^3(1+|Z_t|^2).$$
For fixed Brownian noise in the step, the BAOAB residual also satisfies $|R^B(z)-R^B(\tilde z)|\le Ch|z-\tilde z|$ for all starting states $z,\tilde z$. Constants depend on the model parameters and force bounds, not on the starting state or $h$.

## Facts & Assumptions

**Given:** The model and BAOAB definitions, a finite starting state measurable at time $t$, $0<h\le1$, and a Brownian motion relative to the filtration.

[F1] [[def-underdamped-langevin-equation-and-canonical-gibbs-density]] and [[def-ito-sde-and-strong-solution]]: $b(q,p)=(M^{-1}p,F(q)-\gamma p)$, the diffusion matrix is the constant $G$, and the solution has the usual adapted It\^o integral representation.

[F2] [[alg-baoab-underdamped-langevin-splitting]]: the B/A/O/A/B step consists of two force kicks, two linear drifts, and the exact OU update.

[F3] [[lem-exact-ornstein-uhlenbeck-momentum-substep]]: with $a=e^{-\gamma h}$, the OU noise is $\eta=\int_0^h e^{-\gamma(h-s)}S\,dW_{t+s}$, independent of $\mathcal F_t$, and has second moment $O(h)$.

[F4] [[cor-deterministic-ito-integrals-are-gaussian]]: deterministic It\^o integrals are centered Gaussian with covariance equal to the integral of the product of their integrands; in particular $\eta-S\Delta W=\int_0^h(e^{-\gamma(h-s)}-1)S\,dW_{t+s}$ has mean zero and second moment at most $Ch^3$.

[F5] [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]: for a square-integrable initial state measurable at the starting time and independent of future Brownian increments, globally Lipschitz, linearly growing coefficients give a unique global strong solution and finite second moments on finite intervals.

[F6] [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]: It\^o's formula applies to linear momentum coordinate functions; the position path is continuously differentiable with $dQ_r=M^{-1}P_r\,dr$, so the ordinary chain rule applies to $F(Q_r)$ when $F\in C^1$.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F1]–[F6]; the estimates use no new selection.

## Proof

**Given:** The assumptions above.

1.1 First suppose $\mathbb E|Z_t|^2<\infty$. Shift time to $t$ and use $W_{t+u}-W_t$ with filtration $\mathcal F_{t+u}$. Brownian motion relative to this filtration has future increments independent of $\mathcal F_t$, so the initial state has the independence required in [F5]. The drift $b$ is globally Lipschitz with linear growth and $G$ is constant; [F5] therefore supplies the exact solution and finite second moments used in the following estimates. We first establish the estimates under this extra integrability condition, then remove it. [A1, F1, F5, given, algebra]

1.2 Set $s=h/2$, $a=e^{-\gamma h}$, $\Delta W=W_{t+h}-W_t$, and $\eta=\int_0^h e^{-\gamma(h-r)}S\,dW_{t+r}$. Writing the BAOAB stages from [F2] gives [F1, F2, F3, F4, given, algebra]
$$q'=q+s(1+a)M^{-1}p+s^2(1+a)M^{-1}F(q)+sM^{-1}\eta,\qquad p'=ap+asF(q)+\eta+sF(q').$$
Subtracting $z+h b(z)+G\Delta W$ yields
$$R_q^B=s(a-1)M^{-1}p+s^2(1+a)M^{-1}F(q)+sM^{-1}\eta,$$
$$R_p^B=(a-1+\gamma h)p+s\bigl((a-1)F(q)+F(q')-F(q)\bigr)+\eta-S\Delta W.$$
Since $|a-1|\le Ch$ and $|a-1+\gamma h|\le Ch^2$, the deterministic terms have size at most $Ch^2(1+|z|)$. The displayed formula and linear growth give $\mathbb E[|q'-q|\mid\mathcal F_t]\le Ch(1+|z|)$ and $\mathbb E[|q'-q|^2\mid\mathcal F_t]\le Ch^2(1+|z|^2)$. Lipschitz continuity of $F$ and [F4] therefore give $|\mathbb E[R^B\mid\mathcal F_t]|\le Ch^2(1+|z|)$ and $\mathbb E[|R^B|^2\mid\mathcal F_t]\le Ch^3(1+|z|^2)$. [F1, F2, F3, F4, given, algebra]

2.1 For two starting states driven by the same $\eta$, subtract the expression for $q'$ in step 1.2. The result and the Lipschitz bound on $F$ give $|q'(z)-q'(\tilde z)|\le C|z-\tilde z|$. Subtracting the two $R_q^B$ formulas then gives $|R_q^B(z)-R_q^B(\tilde z)|\le Ch^2|z-\tilde z|$. The $R_p^B$ formula gives the same bound for its linear and $(a-1)F$ terms; its last force difference is bounded by $sL(|q'(z)-q'(\tilde z)|+|q-\tilde q|)\le Ch|z-\tilde z|$. Combining components proves $|R^B(z)-R^B(\tilde z)|\le Ch|z-\tilde z|$. [F1, F2, step 1.2, algebra]

2.2 With $b,G$ from step 1.2, the exact residual is $R^E=\int_t^{t+h}(b(Z_r)-b(Z_t))dr$. For $0\le u\le h$, the integral equation, linear growth of $b$, Cauchy–Schwarz in time, and [F4] give, with $m(u)=\mathbb E[1+|Z_{t+u}|^2\mid\mathcal F_t]$, [A1, F1, F4, F5, F6, step 1.2]
$$m(u)\le C(1+|Z_t|^2)+C\int_0^u m(v)dv.$$
Set $M(u)=C(1+|Z_t|^2)+C\int_0^u m(v)dv$ with the constant enlarged so $m\le M$. Then $M'(u)=Cm(u)\le CM(u)$ almost everywhere, so $(e^{-Cu}M(u))'\le0$ and $m(u)\le C(1+|Z_t|^2)$ for $u\le1$. Substitution in the integral equation gives $\mathbb E[|Z_{t+u}-Z_t|^2\mid\mathcal F_t]\le Cu(1+|Z_t|^2)$, and Cauchy–Schwarz in time gives $\mathbb E[|R^E|^2\mid\mathcal F_t]\le Ch^3(1+|Z_t|^2)$. For its mean, the existence of the second derivative makes $DF$ continuous, so $F\in C^1$. The ordinary chain rule along $Q$ and the linear momentum equation [F6] give $db(Z_r)=a(Z_r)dr+\widehat G\,dW_r$, where $a(q,p)=(M^{-1}(F(q)-\gamma p),DF(q)M^{-1}p-\gamma(F(q)-\gamma p))$ and $\widehat G=(M^{-1}S,-\gamma S)^T$. Bounded $DF$ and linear growth of $F$ give $|a(z)|\le C(1+|z|)$. The constant-diffusion integral has conditional mean zero, so the preceding moment bound yields $|\mathbb E[b(Z_{t+u})-b(Z_t)\mid\mathcal F_t]|\le Cu(1+|Z_t|)$; integration yields $|\mathbb E[R^E\mid\mathcal F_t]|\le Ch^2(1+|Z_t|)$. [A1, F1, F4, F5, F6, step 1.2]

3.1 To remove the temporary $L^2$ assumption, put $D_n=\{|Z_t|\le n\}\in\mathcal F_t$ and $Z_t^{(n)}=1_{D_n}Z_t$. Apply [F5] to each bounded start with the same Brownian driver, obtaining $Z^{(n)}$. On $D_n$, for $m\ge n$ the two initial values agree and the constant diffusion cancels from their integral equations. Thus $|Z^{(n)}_{t+u}-Z^{(m)}_{t+u}|\le L\int_0^u|Z^{(n)}_{t+v}-Z^{(m)}_{t+v}|dv$; the integrating-factor argument of step 2.2 with zero initial bound gives equality throughout the interval. Intersect the countably many full events and paste the paths on $D_n\setminus D_{n-1}$, with $D_0=\varnothing$. These starting-time measurable events cover almost surely, so the pasted process is adapted and continuous and satisfies the additive-noise integral equation. The same difference argument proves uniqueness. The BAOAB outputs and both residuals likewise agree on $D_n$ with their truncated-start versions. Multiplying their conditional estimates from steps 1.2 and 2.2 by $1_{D_n}$ therefore gives the stated bounds on $D_n$ with the original $Z_t$ and the same constants; let $n\to\infty$. For a merely finite random start, a signed conditional mean here denotes the consistent pasting of $\mathbb E[1_{D_n}R\mid\mathcal F_t]$ on $D_n$; each truncated residual is integrable by the bounds already proved. Conditional second moments are the corresponding nonnegative conditional expectations and are finite almost surely by the displayed bounds. No unconditional moment is asserted for a start outside $L^2$. Step 2.1 gives the pathwise Lipschitz estimate for all finite starting states. Time homogeneity makes all constants uniform in $t$. [A1, F1, F2, F5, step 1.1, step 1.2, step 2.1, step 2.2, algebra] ∎

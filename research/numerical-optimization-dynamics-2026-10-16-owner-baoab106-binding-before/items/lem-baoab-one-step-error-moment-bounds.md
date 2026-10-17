---
id: lem-baoab-one-step-error-moment-bounds
kind: lemma
title: "Moment-weighted local defect bounds for BAOAB"
status: draft
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

[F5] [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]: globally Lipschitz, linearly growing coefficients give a unique global strong solution and finite second moments on finite intervals.

[F6] [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]: It\^o's formula applies componentwise to the $C^2$ drift $b$; its generator applied to $b$ has linear growth under the stated derivative bounds.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F1]–[F6]; the estimates use no new selection.

## Proof

**Given:** The assumptions above.

1.1 Set $s=h/2$, $a=e^{-\gamma h}$, $\Delta W=W_{t+h}-W_t$, and $\eta=\int_0^h e^{-\gamma(h-r)}S\,dW_{t+r}$. Writing the BAOAB stages from [F2] gives [F1, F2, F3, F4, given, algebra]
$$q'=q+s(1+a)M^{-1}p+s^2(1+a)M^{-1}F(q)+sM^{-1}\eta,\qquad p'=ap+asF(q)+\eta+sF(q').$$
Subtracting $z+h b(z)+G\Delta W$ yields
$$R_q^B=s(a-1)M^{-1}p+s^2(1+a)M^{-1}F(q)+sM^{-1}\eta,$$
$$R_p^B=(a-1+\gamma h)p+s\bigl((a-1)F(q)+F(q')-F(q)\bigr)+\eta-S\Delta W.$$
Since $|a-1|\le Ch$ and $|a-1+\gamma h|\le Ch^2$, the deterministic terms have size at most $Ch^2(1+|z|)$. The displayed formula and linear growth give $\mathbb E[|q'-q|\mid\mathcal F_t]\le Ch(1+|z|)$ and $\mathbb E[|q'-q|^2\mid\mathcal F_t]\le Ch^2(1+|z|^2)$. Lipschitz continuity of $F$ and [F4] therefore give $|\mathbb E[R^B\mid\mathcal F_t]|\le Ch^2(1+|z|)$ and $\mathbb E[|R^B|^2\mid\mathcal F_t]\le Ch^3(1+|z|^2)$. [F1, F2, F3, F4, given, algebra]

2.1 For two starting states driven by the same $\eta$, subtract the expression for $q'$ in step 1.1. The result and the Lipschitz bound on $F$ give $|q'(z)-q'(\tilde z)|\le C|z-\tilde z|$. Subtracting the two $R_q^B$ formulas then gives $|R_q^B(z)-R_q^B(\tilde z)|\le Ch^2|z-\tilde z|$. The $R_p^B$ formula gives the same bound for its linear and $(a-1)F$ terms; its last force difference is bounded by $sL(|q'(z)-q'(\tilde z)|+|q-\tilde q|)\le Ch|z-\tilde z|$. Combining components proves $|R^B(z)-R^B(\tilde z)|\le Ch|z-\tilde z|$. [F1, F2, step 1.1, algebra]

2.2 With $b,G$ from step 1.1, the exact residual is $R^E=\int_t^{t+h}(b(Z_r)-b(Z_t))dr$. For $0\le u\le h$, the integral equation, linear growth of $b$, Cauchy–Schwarz in time, and [F4] give, with $m(u)=\mathbb E[1+|Z_{t+u}|^2\mid\mathcal F_t]$, [A1, F1, F4, F5, F6, step 1.1]
$$m(u)\le C(1+|Z_t|^2)+C\int_0^u m(v)dv.$$
Set $M(u)=C(1+|Z_t|^2)+C\int_0^u m(v)dv$ with the constant enlarged so $m\le M$. Then $M'(u)=Cm(u)\le CM(u)$ almost everywhere, so $(e^{-Cu}M(u))'\le0$ and $m(u)\le C(1+|Z_t|^2)$ for $u\le1$. Substitution in the integral equation gives $\mathbb E[|Z_{t+u}-Z_t|^2\mid\mathcal F_t]\le Cu(1+|Z_t|^2)$, and Cauchy–Schwarz in time gives $\mathbb E[|R^E|^2\mid\mathcal F_t]\le Ch^3(1+|Z_t|^2)$. For its mean, [F6] gives $Lb=Db\,b+\tfrac12(GG^T):D^2b$, which has linear growth because $Db,D^2b$ are bounded and $b$ has linear growth. Conditional expectation removes the martingale integral, so $|\mathbb E[b(Z_{t+u})-b(Z_t)\mid\mathcal F_t]|\le Cu(1+|Z_t|)$; integration yields $|\mathbb E[R^E\mid\mathcal F_t]|\le Ch^2(1+|Z_t|)$. [A1, F1, F4, F5, F6, step 1.1]

3.1 Steps 1.1 and 2.2 establish both residual decompositions and their conditional bounds, and step 2.1 gives the same-noise Lipschitz estimate. Time homogeneity makes the constants uniform in $t$; they depend only on the fixed coefficient bounds. [F1, F2, F5, step 1.1, step 2.1, step 2.2] ∎

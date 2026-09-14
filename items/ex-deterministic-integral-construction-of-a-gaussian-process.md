---
id: ex-deterministic-integral-construction-of-a-gaussian-process
kind: example
title: "A deterministic integral construction of a Gaussian process"
status: draft
origin: pipeline
deps: [def-brownian-motion, def-gaussian-process, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, thm-continuous-implies-integrable, thm-darboux-equals-riemann, thm-continuous-on-a-rectangle-is-riemann-integrable, thm-multidimensional-darboux-equals-riemann, thm-riemann-fubini-on-product-rectangles, thm-covariance-bilinearity-and-symmetry, def-characteristic-function-of-a-real-random-variable, lem-characteristic-function-of-a-normal-law, thm-dominated-convergence, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-uniqueness-of-a-law-from-its-characteristic-function, def-standard-normal-and-normal-laws, thm-ftc-second-part, lem-derivative-of-a-power, thm-algebra-of-derivatives, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Nobuaki Yoshida, Probability Theory, Sections 6.1--6.3"
      url: "https://www.math.nagoya-u.ac.jp/~noby/pdf/prob.pdf"
---

## Example

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion and fix the
measurable probability-one event $A$ from its continuity clause. Define the
zero-repaired pathwise integral

$$X_t(\omega)=\begin{cases}\displaystyle\int_0^t B_r(\omega)\,dr,&\omega\in A,\\[4pt]0,&\omega\notin A,\end{cases}\qquad t\ge0,$$

where the integral on $A$ is the deterministic Riemann integral. Then $X$ is a
centered Gaussian process and

$$\operatorname{Cov}(X_s,X_t)=\int_0^s\int_0^t\min(u,v)\,dv\,du.$$

For $0\le s\le t$, this covariance equals

$$\frac{s^2(3t-s)}6.$$

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, and its specified measurable probability-one continuity event $A$.

[F1] Brownian motion is a centered Gaussian process with covariance $\min(s,t)$, and every path indexed by $A$ is continuous. [[def-brownian-motion]], [[def-gaussian-process]].

[F2] Finite arithmetic combinations and sequential pointwise limits of measurable real functions are measurable. [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]].

[F3] A continuous function on a compact interval is Riemann integrable, and all tagged sums with mesh tending to zero converge to its integral. [[thm-continuous-implies-integrable]], [[thm-darboux-equals-riemann]].

[F4] A continuous function on a nondegenerate compact rectangle is Riemann integrable, all tagged product-grid sums converge with mesh, and its multiple integral equals either ordinary iterated integral. [[thm-continuous-on-a-rectangle-is-riemann-integrable]], [[thm-multidimensional-darboux-equals-riemann]], [[thm-riemann-fubini-on-product-rectangles]].

[F5] Covariance is bilinear in finite linear combinations. [[thm-covariance-bilinearity-and-symmetry]].

[F6] Characteristic functions are expectations of complex exponentials; $N(m,\sigma^2)$ has characteristic function $e^{imz-\sigma^2z^2/2}$ and the specified mean and variance. [[def-characteristic-function-of-a-real-random-variable]], [[lem-characteristic-function-of-a-normal-law]].

[F7] Dominated convergence applies to integrable complex random variables, and $|e^{iy}|=1$ for real $y$. [[thm-dominated-convergence]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]].

[F8] Under AC, a real probability law is determined by its characteristic function, and $N(0,q)$ exists for every $q\ge0$, including $q=0$. [[thm-uniqueness-of-a-law-from-its-characteristic-function]], [[def-standard-normal-and-normal-laws]].

[F9] The fundamental theorem, the derivative power rule, and derivative algebra evaluate the compact polynomial integrals used below. [[thm-ftc-second-part]], [[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]].

[F10] AC is used through the Brownian, deterministic-integration, normal-law,
and characteristic-function uniqueness suppliers. [[def-axiom-of-choice]].

## Verification

**Proof technique:** direct.

1.1 For $m\ge1$ and $t\ge0$, put $$R_m(t)=\frac tm\sum_{k=0}^{m-1}B_{kt/m}.$$ This is a measurable random variable by [F2]. On $A$, [F3] makes $R_m(t)(\omega)$ converge to the displayed Riemann integral as $m\to\infty$; for $t=0$, every sum and the integral are zero. Define $X_t$ by this limit on $A$ and by zero on $A^c$. It is measurable: the convergence set and limsup of the measurable sequence are measurable by [F2], and pasting that finite limit on the measurable set $A$ with zero on its complement preserves every Borel inverse image. Thus the statement defines a real stochastic process rather than an integral that might be undefined on exceptional paths. [F1, F2, F3, construct]

1.2 For $s,t>0$, covariance bilinearity and [F1] give $$C_m(s,t):=\operatorname{Cov}(R_m(s),R_m(t))=\frac{st}{m^2}\sum_{k,\ell=0}^{m-1}\min(ks/m,\ell t/m).$$ This is the lower-corner product-grid Riemann sum for the continuous function $(u,v)\mapsto\min(u,v)$ on $[0,s]\times[0,t]$. Its mesh tends to zero, so [F4] gives $$C_m(s,t)\longrightarrow C(s,t):=\int_0^s\int_0^t\min(u,v)\,dv\,du.$$ If $s=0$ or $t=0$, both $C_m(s,t)$ and the declared degenerate-rectangle integral are zero, so the same conclusion holds. [F1, F4, F5, algebra]

2.1 Fix $n\ge1$, times $t_1,\ldots,t_n\ge0$, coefficients $a_1,\ldots,a_n$, and set $Y_m=\sum_i a_iR_m(t_i)$ and $Y=\sum_i a_iX_{t_i}$. By [F1], $Y_m$ is centered normal. Step 1.2 and covariance bilinearity show that its variance $$V_m=\sum_{i,j=1}^na_ia_jC_m(t_i,t_j)$$ converges to $$V=\sum_{i,j=1}^na_ia_jC(t_i,t_j).$$ On $A$, step 1.1 gives $Y_m\to Y$, hence the convergence is almost sure. In particular, $V=\lim_mV_m\ge0$. [step 1.1, step 1.2, F1, F5, algebra]

2.2 Now let $0<s\le t$. Every section of $\min(u,v)$ is continuous, so [F4] writes $$C(s,t)=\int_0^s\left(\int_0^u v\,dv+\int_u^t u\,dv\right)du=\int_0^s\left(ut-\frac{u^2}{2}\right)du.$$ The polynomial antiderivatives justified by [F9] give $$C(s,t)=\frac{ts^2}{2}-\frac{s^3}{6}=\frac{s^2(3t-s)}6.$$ For $s=0$ both the double integral and polynomial are zero by their endpoint conventions. [step 1.2, F4, F9, algebra]

3.1 For each real $z$, [F6] gives $E[e^{izY_m}]=e^{-z^2V_m/2}$. The left side converges to $E[e^{izY}]$ by [F7], because $e^{izY_m}\to e^{izY}$ almost surely and every modulus is one; the right side converges to $e^{-z^2V/2}$. By [F8], $Y\sim N(0,V)$. Since the finite list and coefficients were arbitrary, $X$ is a centered Gaussian process. This argument proves Gaussian closure from the actual almost-sure Riemann-sum limit; it does not assume that arbitrary pointwise limits of Gaussian variables remain Gaussian. [step 2.1, F6, F7, F8]

4.1 Apply step 3.1 to the singleton coefficients and to $(X_s+X_t)$. It gives $\operatorname{Var}(X_r)=C(r,r)$ and $\operatorname{Var}(X_s+X_t)=C(s,s)+2C(s,t)+C(t,t)$. Covariance bilinearity also gives $\operatorname{Var}(X_s+X_t)=\operatorname{Var}(X_s)+2\operatorname{Cov}(X_s,X_t)+\operatorname{Var}(X_t)$. Comparing and cancelling proves $\operatorname{Cov}(X_s,X_t)=C(s,t)$, including $s=0$ or $t=0$. [step 3.1, F5, F6, algebra]

5.1 Steps 1.1--4.1 prove every claim. Repeated times, zero coefficients, and singular linear combinations are retained in steps 2.1 and 3.1; $t=0$ is handled without a nondegenerate rectangle, and the empty finite list has the unique empty-tuple law. Changing the chosen probability-one continuity event changes $X_t$ only on a null set for each $t$, so the asserted finite laws and covariance are unaffected. AC is used exactly through [F1], [F3], [F6], and [F8], including the countable-choice input inherited by the continuous-integrability interface in [F3]; the fixed uniform left-endpoint sums, pasting, and finite algebra require no further choices. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 2.2, F1, F3, F6, F8, F10] ∎

## Source notes

Yoshida, Section 6.1, Lemma 6.1.3 and equation (6.5), printed
pp. 174--175, supplies the Gaussian finite-combination and Brownian covariance
inputs; Section 6.3 supplies Brownian path regularity context. The zero repair,
Riemann-sum characteristic-function passage, double-integral covariance, and
polynomial evaluation are derived in full above.

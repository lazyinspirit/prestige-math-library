---
id: lem-qsmx-gaussian-ground-correlation-filter
kind: lemma
title: "Gaussian frequency separation of connected ground correlations"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
physical_scope: null
dependency_level: 1
deps:
  - def-countable-choice
  - lem-qsmx-separable-positive-generator-spectral-measures
  - lem-fourier-transform-of-a-gaussian
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-dominated-convergence
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-derivative-of-exponential
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
  - thm-complex-exponential-is-entire-with-derivative-itself
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-qsmx-separable-positive-generator-spectral-measures: mathematical-premise
  lem-fourier-transform-of-a-gaussian: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Bruno Nachtergaele and Robert Sims, Lieb–Robinson Bounds and the Exponential Clustering Theorem, arXiv:math-ph/0506030v3; section 3.2, PDF pp. 7–10, Gaussian separation and Lemma 1; the scalar regularization proof is reconstructed locally. Full 12-page article retrieved and read."
      url: "https://arxiv.org/pdf/math-ph/0506030v3"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume Countable Choice. Let $\mathcal A$ be a unital complex $C^*$-algebra with a strongly continuous automorphism group $\alpha_t$. Let $\pi:\mathcal A\to\mathcal B(\mathcal H)$ be a contractive unital $*$-representation on a separable Hilbert space, with linear-first inner product, and let $\Omega$ be a unit vector. Suppose a strongly continuous unitary group $U_t$ implements $\pi(\alpha_t(A))=U_t\pi(A)U_t^*$, fixes $\Omega$, and has positive self-adjoint generator $iK$ satisfying

$$\ker K=\mathbb C\Omega,\qquad \sigma(K)\subseteq\{0\}\cup[g,\infty),\qquad g>0.$$

Write $\omega(A)=\langle\pi(A)\Omega,\Omega\rangle$. Let $A,B\in\mathcal A$ commute, put $f(t)=\omega([A,\alpha_t(B)])$, and suppose $|f(t)|\le L|t|$ for $|t|\le\eta$, for some finite $L$ and $\eta>0$. For every $q>0$, the scalar integral

$$I_q(A,B):=\int_{\mathbb R}\frac{e^{-qt^2}}{2\pi it}\,f(t)\,dt$$

is absolutely convergent, with any value assigned to its integrand at $t=0$, and satisfies

$$\left|\omega(AB)-\omega(A)\omega(B)-I_q(A,B)\right|\le\|A\|\,\|B\|e^{-g^2/(4q)}.$$

The gap is that of this infinite- or finite-dimensional representation; no finite-volume approximating gaps are assumed.

## Statement references

[[lem-qsmx-separable-positive-generator-spectral-measures]]

## Facts & Assumptions

**Given:** The covariant positive-energy representation, its simple ground vector and frequency gap, the commuting observables and the stated $O(t)$ bound.

[A1] Countable Choice is assumed. [[def-countable-choice]]

[F1] The preceding scalar spectral-measure lemma gives the Fourier pairings, support above $g$ for vectors orthogonal to the ground vector, and mixed-measure total variation bounded by the product of the vector norms. [[lem-qsmx-separable-positive-generator-spectral-measures]]

[F2] The Gaussian Fourier transform, after the change from the $2\pi$-normalized convention to angular frequency, is $\int_{\mathbb R}e^{-qt^2}e^{itE}dt=\sqrt{\pi/q}\,e^{-E^2/(4q)}$. [[lem-fourier-transform-of-a-gaussian]]

[F3] Scalar Fubini and dominated convergence apply to absolutely integrable product integrands and to dominated sequences, respectively. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] [[thm-dominated-convergence]]

[F4] Scalar changes of variables below are $C^1$ affine diffeomorphisms (the nonnegative formula extends to absolutely integrable complex functions by four signed parts). The real and complex exponential derivatives and the continuous-curve fundamental theorem evaluate the scalar exponential primitive on finite intervals, followed by its decaying endpoint limit. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] [[thm-derivative-of-exponential]] [[thm-complex-exponential-is-entire-with-derivative-itself]] [[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]

## Proof

**Given:** [A1], [F1]–[F4] and the Statement hypotheses; put $Q=I-|\Omega\rangle\langle\Omega|$ and abbreviate $\pi(A),\pi(B)$ by $a,b$.

1.1 The positive and negative frequency measures $$\mu_+=\mu_{Qb\Omega,Qa^*\Omega},\qquad \mu_-=\mu_{Qa\Omega,Qb^*\Omega}$$ are carried by $[g,\infty)$ and each has total variation at most $\|A\|\|B\|$, since $\pi$ and $Q$ are contractions. Using $U_t\Omega=\Omega$ and the linear-first pairing gives $$\omega(AB)-\omega(A)\omega(B)=\mu_+([g,\infty)),\qquad f(t)=\int e^{itE}d\mu_+(E)-\int e^{-itE}d\mu_-(E).$$ Indeed $\omega(A\alpha_t(B))=\langle U_tb\Omega,a^*\Omega\rangle$ and $\omega(\alpha_t(B)A)=\langle U_{-t}a\Omega,b^*\Omega\rangle$. Their ground-vector terms are both $\omega(A)\omega(B)$ and cancel. Commutativity also gives $f(0)=0$. [A1, F1, given, algebra]

1.2 For $\varepsilon>0$, the exponential primitive and its limit at infinity in [F4] give $1/(\varepsilon+it)=\int_0^\infty e^{-\varepsilon w}e^{-itw}dw$. The Gaussian factor makes the resulting double integral absolutely integrable, with majorant $e^{-qt^2}e^{-\varepsilon w}$ of finite integral. Hence [F2] and [F3] give $$h_{q,\varepsilon}(E):=\int_{\mathbb R}\frac{e^{-qt^2}e^{itE}}{2\pi(\varepsilon+it)}dt=\frac{1}{2\sqrt{\pi q}}\int_0^\infty e^{-\varepsilon w}e^{-(E-w)^2/(4q)}dw.$$ It lies between zero and one and converges as $\varepsilon\downarrow0$ to $h_q(E)$ given by the same right side without $e^{-\varepsilon w}$. For $E\ge g$, substituting $u=(E-w)/(2\sqrt q)$ in its complementary Gaussian tail gives $$0\le1-h_q(E)=h_q(-E)\le\tfrac12 e^{-E^2/(4q)}\le\tfrac12 e^{-g^2/(4q)}.$$ For completeness, the tail estimate is $\int_z^\infty e^{-u^2}du\le e^{-z^2}\int_0^\infty e^{-v^2}dv$ for $z\ge0$, obtained by $u=z+v$ and $(z+v)^2\ge z^2+v^2$; the Gaussian integral in [F2] normalizes the final half. [F2, F3, F4, given, construct, algebra]

1.3 The unregularized time integrand is integrable near zero because $|f(t)|/|t|\le L$ there. Away from zero, $|f(t)|\le2\|A\|\|B\|$, so the Gaussian divided by $|t|$ is an integrable majorant on each tail. For $t\ne0$ one has $|\varepsilon+it|\ge|t|$. Dominated convergence in time thus proves $I_{q,\varepsilon}\to I_q(A,B)$, and also establishes the asserted absolute convergence without a principal-value convention. [F3, given, algebra]

2.1 Insert the two measures of step 1.1 into the regularized integral $I_{q,\varepsilon}=\int e^{-qt^2}f(t)/(2\pi(\varepsilon+it))dt$. Scalar Fubini is legitimate at fixed $\varepsilon>0$: their finite variations and the integrable Gaussian divided by $\varepsilon$ give an absolute majorant. Equivalently apply it to the four positive measures in each polarization formula of [F1]. Therefore $$I_{q,\varepsilon}=\int h_{q,\varepsilon}(E)d\mu_+(E)-\int h_{q,\varepsilon}(-E)d\mu_-(E).$$ The bound $0\le h_{q,\varepsilon}\le1$ and finite variations permit dominated convergence on these measures. Its limit is $\int h_q(E)d\mu_+-\int h_q(-E)d\mu_-$. [F1, F3, step 1.1, step 1.2, algebra]

3.1 By steps 1.1, 2.1 and 1.3, the difference from the connected correlation is the sum of an integral of $1-h_q(E)$ against $\mu_+$ and an integral of $h_q(-E)$ against $\mu_-$. Both measures are carried by $E\ge g$. Step 1.2 bounds each multiplier by $\tfrac12e^{-g^2/(4q)}$, and step 1.1 bounds each variation by $\|A\|\|B\|$. The two halves give exactly the stated estimate, with no factor from replacing $A,B$ by centered operators. [step 1.1, step 1.2, step 2.1, step 1.3, algebra] ∎

## Remarks

The source's Gaussian separation argument motivates this local real-time estimate. Here the spectral measures are constructed by the preceding Countable-Choice lemma, and the regularized integral and both limiting operations are proved explicitly. No external clustering theorem is used as a premise.

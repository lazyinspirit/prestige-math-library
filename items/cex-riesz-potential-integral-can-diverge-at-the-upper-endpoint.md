---
id: cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint
kind: counterexample
title: "The critical Riesz potential can diverge and be essentially unbounded"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-riesz-potential-of-order-alpha, def-complex-lp-and-euclidean-test-function-conventions, thm-polar-coordinates-formula-for-lebesgue-measure, lem-euclidean-balls-have-positive-finite-lebesgue-measure, def-countable-choice, thm-improper-p-test-rational, thm-comparison-test-for-improper-integrals, thm-substitution-for-improper-integrals, thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line, thm-logarithm-derivative-and-integral, def-natural-logarithm, thm-derivative-of-exponential, def-integral-over-a-measurable-set, prop-order-and-scalar-rules-for-the-nonnegative-integral, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integral-of-a-nonnegative-simple-function, thm-lebesgue-measure-of-a-box-of-every-kind, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, def-ck-euclidean-maps-and-diffeomorphisms, thm-determinant-of-a-triangular-matrix, cor-continuous-functions-are-borel-measurable, thm-borel-sets-are-lebesgue-measurable, def-borel-and-lebesgue-measurable-function-on-rn, thm-arithmetic-and-lattice-operations-preserve-measurability]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Eleonor Harboure, Spaces of Smooth Functions, critical radial example, printed p. 5"
      url: "https://congreso.us.es/cidama/activos/cursos/EHarbourefull.pdf"
      locator: "§1, printed p. 5: for $1<r\\le n/\\alpha$ the function $f(x)=|x|^{-\\alpha}(\\log 1/|x|)^{-r\\alpha/n}\\chi_{B(0,1/2)}(x)$ belongs to $L^{n/\\alpha}$ and $\\lim_{x\\to0}I_\\alpha f(x)=\\int_{|y|\\le1/2}(\\log1/|y|)^{-r\\alpha/n}|y|^{-n}dy=\\infty$, so $I_\\alpha f$ is not essentially bounded."
---

## Statement refuted

Assume the Axiom of Countable Choice. Let $n\ge1$, $0<\alpha<n$ and
$p_0:=n/\alpha>1$. Define $f(0):=0$ and
$$f(y):=|y|^{-\alpha}\Bigl(\log\frac{e}{|y|}\Bigr)^{-1}\quad(0<|y|<e^{-1}), \qquad f(y):=0\quad(|y|\ge e^{-1}).$$
Then $f$ belongs to $L^{p_0}(\mathbb R^n;\mathbb C)$, while the defining
absolute integral of the Riesz potential of [[def-riesz-potential-of-order-alpha]]
diverges at the origin, $I_\alpha f(0)=+\infty$ in the sense that the defining
absolute integral is infinite there, and $I_\alpha f$ is not essentially
bounded: for every threshold $T>0$ and some $\delta=\delta(T)>0$ the
superlevel set $\{|I_\alpha f|>T\}$ contains the punctured ball
$B(0,\delta)\setminus\{0\}$, which has positive Lebesgue measure. Hence the raw Riesz integral
is not a bounded map from $L^{p_0}(\mathbb R^n;\mathbb C)$ to
$L^\infty(\mathbb R^n;\mathbb C)$, and the critical exponent cannot be added to
the strict-range strong theorem.


The function is nonnegative and finite-valued: it vanishes at the origin and
off the punctured ball of radius $e^{-1}$, and on $\{0<|y|<e^{-1}\}$ it is the
continuous radial expression $|y|^{-\alpha}(\log(e/|y|))^{-1}$, which is
positive there. Polar integration converts its $L^{p_0}$ integral into the
half-line integral $\sigma(S^{n-1})\int_2^\infty u^{-p_0}du$, finite exactly
because $p_0>1$; for the origin integral, polar coordinates and the Lebesgue change of variables give the integral of u^-1 over [2,infinity), which diverges because each half-open dyadic interval [2^j,2^(j+1)), j>=1, contributes at least 1/2. Finally,
on the annulus $2|x|<|y|<e^{-1}$ the kernel obeys
$|x-y|^{\alpha-n}\ge(3|y|/2)^{\alpha-n}$, so the potential at $x\ne0$ is
bounded below by a positive constant times $\log\log(e/(2|x|))-\log 2$, which tends to
infinity as $x\to0$; every sufficiently small punctured ball is therefore a
superlevel set, and punctured balls have positive measure.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<\alpha<n$, $p_0=n/\alpha>1$, and the function $f$ displayed in the statement.

[F1] The unit Riesz potential is $I_\alpha f(x)=\int K_\alpha(x-y)f(y)\,dy$, with $K_\alpha(z)=|z|^{\alpha-n}$ for $z\neq0$, at every point where the absolute integral is finite; where the defining absolute integral is infinite no finite value is assigned. ([[def-riesz-potential-of-order-alpha]])

[F2] Complex $L^p$ classes for finite $p$, their norms, the modulus of a complex measurable function, and the convention that finite-valued complex functions are integrated componentwise. ([[def-complex-lp-and-euclidean-test-function-conventions]])

[F3] Under Countable Choice, for every nonnegative Borel $h$, $\int_{\mathbb R^n}h\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}h(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$ with $\sigma$ a finite Borel measure, and $\sigma(S^{n-1})=n\lambda(B(0,1))>0$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]])

[F4] The improper $p$-test for rational exponents: $\int_1^\infty u^{-p}du$ converges exactly when $p>1$; in particular $\int_2^\infty u^{-1}du$ diverges. Comparison: if $0\le f\le g$ eventually at a singular end and $\int g$ converges, then $\int f$ converges. Substitution: a monotone differentiable surjection between intervals, with locally integrable derivative and proper change-of-variable hypotheses on compact truncations, transports convergence and the value of an improper integral, with orientation retained for decreasing parametrizations. A nonnegative improper Riemann integral on a half-line that converges agrees with the Lebesgue integral. ([[thm-improper-p-test-rational]], [[thm-comparison-test-for-improper-integrals]], [[thm-substitution-for-improper-integrals]], [[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]])

[F5] For $x>0$, $\log x=\int_1^x dt/t$, so $\int_1^L u^{-1}du=\log L$ for every $L>1$. ([[thm-logarithm-derivative-and-integral]])

[F6] The integral over a measurable set is the integral of the product with its indicator; the nonnegative Lebesgue integral is monotone and homogeneous for nonnegative scalars. ([[def-integral-over-a-measurable-set]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[F7] Continuous real functions on Euclidean space are Borel measurable; sums, products, scalar multiples and absolute values of Borel measurable real functions are Borel measurable; a function that agrees on an open set with a continuous function and is constant on the complementary closed set is Borel measurable; every Borel subset of Euclidean space is Lebesgue measurable. ([[cor-continuous-functions-are-borel-measurable]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-borel-sets-are-lebesgue-measurable]], [[def-borel-and-lebesgue-measurable-function-on-rn]])

[F8] Countable Choice is the choice principle assumed by the polar and measure interfaces used here. ([[def-countable-choice]])

[F9] For a $C^1$ diffeomorphism $T:U\to V$ between open Euclidean sets and nonnegative Lebesgue-measurable $h$, $\int_V h=\int_U(h\circ T)|\det DT|$. In particular $y\mapsto x-y$ is a diffeomorphism with absolute Jacobian $1$, and $T(r)=\log(e/r)$ maps $(0,e^{-1})$ diffeomorphically onto $(2,\infty)$ with $|T'(r)|=1/r$: its inverse is $u\mapsto e^{1-u}$ by the definition of $\log$, while the logarithm and exponential are $C^1$. ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], [[thm-derivative-of-exponential]]) ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-determinant-of-a-triangular-matrix]])

[F10] Every half-open interval $[a,b)\subset\mathbb R$ is Lebesgue measurable with measure $b-a$; the integral of a nonnegative simple function equals its simple integral; and the nonnegative Lebesgue integral is additive, monotone, and homogeneous for nonnegative scalars. ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[def-integral-of-a-nonnegative-simple-function]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[def-integral-over-a-measurable-set]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]])





## Counterexample

**Proof technique:** direct; establish $L^{p_0}$ membership by substitution and prove origin divergence by Lebesgue change of variables and dyadic shells, then lower-bound the potential on a punctured annulus and read off essential unboundedness.

1.1 Measurability and nonnegativity. On the open set $U=\{0<|y|<e^{-1}\}$ the function $y\mapsto|y|^{-\alpha}(\log(e/|y|))^{-1}$ is continuous and positive, since $|y|\mapsto|y|$ and the logarithm are continuous and $\log(e/|y|)>0$ for $|y|<e^{-1}$; on the closed complement $\mathbb R^n\setminus U=\{0\}\cup\{|y|\ge e^{-1}\}$ the function $f$ is the constant $0$. By [F7] the function $f$ is Borel and Lebesgue measurable, nonnegative, and finite-valued, with $f(0)=0$. [F7]

1.2 Substitution for the radial profiles. The map $T(r)=\log(e/r)$ is a decreasing $C^1$ diffeomorphism from $(0,e^{-1})$ onto $(2,\infty)$, with $|T'(r)|=1/r$. Applying [F9] to the nonnegative function $u\mapsto u^{-s}$ gives, for every real $s$, the equality of extended nonnegative Lebesgue integrals $$\int_0^{e^{-1}}r^{-1}\bigl(\log(e/r)\bigr)^{-s}dr=\int_2^\infty u^{-s}du .$$ Here $T(e^{-1})=2$ at the limiting endpoint. [F9, algebra]

1.3 Absolute convergence at every nonzero point. Fix $x\neq0$. Since $(\log(e/|y|))^{-1}<1$ for $0<|y|<e^{-1}$, the function satisfies $|f(y)|\le|y|^{-\alpha}$ on its support, so $K_\alpha(x-y)|f(y)|\le|x-y|^{\alpha-n}|y|^{-\alpha}$ there. On the measurable set $\{|x-y|<|x|/2\}$ one has $|y|>|x|/2$, so $|y|^{-\alpha}<(|x|/2)^{-\alpha}$, and [F9] applied to the change of variables $z=x-y$ together with the polar formula [F3] gives $$\int_{|x-y|<|x|/2}|x-y|^{\alpha-n}|y|^{-\alpha}dy\le\Bigl(\frac{|x|}{2}\Bigr)^{-\alpha}\int_{|z|<|x|/2}|z|^{\alpha-n}dz=\Bigl(\frac{|x|}{2}\Bigr)^{-\alpha}\sigma(S^{n-1})\int_0^{|x|/2}s^{\alpha-1}ds<\infty,$$ because $\alpha>0$. On the complementary set, $|x-y|\ge|x|/2>0$ gives $|x-y|^{\alpha-n}\le(|x|/2)^{\alpha-n}$, and [F3] gives $$\int_{\{|y|<e^{-1}\}}|y|^{-\alpha}dy=\sigma(S^{n-1})\int_0^{e^{-1}}s^{n-1-\alpha}ds<\infty,$$ because $n-\alpha>0$. The two regions together cover the support of $f$, so the defining absolute integral of $I_\alpha f$ at $x$ is finite: $I_\alpha f(x)$ is defined by [F1] at every $x\neq0$. [F1, F2, F3, F6, F9, given, algebra]

1.4 Divergence at the origin. At $x=0$ the absolute integrand is $|y|^{-n}(\log(e/|y|))^{-1}$ on $0<|y|<e^{-1}$, a nonnegative Borel radial function. Polar coordinates [F3] and Lebesgue change of variables [F9] with $u=\log(e/r)$ give $$\int_{\mathbb R^n}K_\alpha(-y)|f(y)|\,d\lambda_n(y)=\sigma(S^{n-1})\int_2^\infty u^{-1}\,d\lambda_1(u).$$ For $j\ge1$ and $J_j=[2^j,2^{j+1})$, one has $u^{-1}\ge2^{-j-1}$ on $J_j$ and $\lambda_1(J_j)=2^j$ by [F10], so $\int_{J_j}u^{-1}\,d\lambda_1\ge1/2$. Additivity and monotonicity in [F10] show the integral over $[2,\infty)$ is at least $N/2$ for every positive integer $N$, hence it is infinite. Since $\sigma(S^{n-1})>0$ by [F3], the defining absolute integral diverges and no finite value of $I_\alpha f(0)$ is assigned by [F1]. [F1, F3, F9, F10]

2.1 The function lies in $L^{p_0}$. Since $\alpha p_0=n$, the nonnegative Borel function $|f|^{p_0}$ is radial with profile $r^{n-1}r^{-\alpha p_0}(\log(e/r))^{-p_0}=r^{-1}(\log(e/r))^{-p_0}$ on $(0,e^{-1})$ and $0$ elsewhere, so [F3] and step 1.2 give $$\int_{\mathbb R^n}|f|^{p_0}d\lambda=\sigma(S^{n-1})\int_0^{e^{-1}}r^{-1}\bigl(\log(e/r)\bigr)^{-p_0}dr=\sigma(S^{n-1})\int_2^\infty u^{-p_0}du .$$ Choose a rational $q$ with $1<q<p_0$, possible because $p_0>1$; then $0\le u^{-p_0}\le u^{-q}$ for $u\ge1$, and $\int_1^\infty u^{-q}du$ converges by [F4], so the comparison principle of [F4] makes $\int_2^\infty u^{-p_0}du$ converge. Its value is finite and $\sigma(S^{n-1})$ is finite by [F3], so $f\in L^{p_0}(\mathbb R^n;\mathbb C)$. [F2, F3, F4, step 1.1, step 1.2, algebra]

2.2 Lower bound on a punctured annulus. Let $0<|x|<e^{-1}/2$ and suppose $y$ satisfies $2|x|<|y|<e^{-1}$. Then $|x|<|y|/2$, so the triangle inequality gives $|x-y|\le|x|+|y|<3|y|/2$; because $\alpha-n<0$, raising the positive quantities to the power $\alpha-n$ reverses the inequality and $$K_\alpha(x-y)\ge(3|y|/2)^{\alpha-n}=\Bigl(\frac32\Bigr)^{\alpha-n}|y|^{\alpha-n}.$$ Step 1.3 makes the defining integral at $x$ absolutely convergent, so integrating this lower bound against the nonnegative function $f$ on the measurable annulus $A_x:=\{2|x|<|y|<e^{-1}\}$ and using monotonicity and the scalar rule of [F6] is legitimate and gives $$I_\alpha f(x)\ge\Bigl(\frac32\Bigr)^{\alpha-n}\int_{A_x}|y|^{\alpha-n}|f(y)|\,dy=\Bigl(\frac32\Bigr)^{\alpha-n}\int_{A_x}|y|^{-n}\bigl(\log(e/|y|)\bigr)^{-1}dy .$$ [F1, F6, step 1.1, step 1.3, algebra]

3.1 Evaluation of the annular integral. The integrand in step 2.2 is a nonnegative Borel radial function equal to $r^{-1}(\log(e/r))^{-1}$ in the radial variable, so [F3] and step 1.2 give $$\int_{A_x}|y|^{-n}\bigl(\log(e/|y|)\bigr)^{-1}dy=\sigma(S^{n-1})\int_{2|x|}^{e^{-1}}r^{-1}\bigl(\log(e/r)\bigr)^{-1}dr=\sigma(S^{n-1})\int_2^{\log(e/(2|x|))}u^{-1}du .$$ The upper limit exceeds $2$ because $|x|<e^{-1}/2$, so [F5] evaluates the last integral as $\log\bigl(\log(e/(2|x|))\bigr)-\log 2$, and the lower bound of step 2.2 reads $$I_\alpha f(x)\ge\Bigl(\frac32\Bigr)^{\alpha-n}\sigma(S^{n-1})\Bigl[\log\Bigl(\log\frac{e}{2|x|}\Bigr)-\log 2\Bigr].$$ [F3, F5, step 1.2, step 2.2]

4.1 Essential unboundedness. Fix $T>0$. Since $\log\log(e/(2r))\to+\infty$ as $r\to0^+$ and $\left(\frac32\right)^{\alpha-n}\sigma(S^{n-1})>0$ by [F3], there is $\delta\in(0,e^{-1}/2)$ with $\left(\frac32\right)^{\alpha-n}\sigma(S^{n-1})[\log\log(e/(2\delta))-\log 2]>T$. Step 3.1 then gives $I_\alpha f(x)>T$ for every $x$ with $0<|x|<\delta$, so the superlevel set $\{|I_\alpha f|>T\}$ contains the punctured ball $B(0,\delta)\setminus\{0\}$. That punctured ball contains the annulus $\{\delta/2<|x|<\delta\}$, a Borel set whose measure $\sigma(S^{n-1})\int_{\delta/2}^{\delta}s^{n-1}ds>0$ is positive by [F3]; at $x=0$ the defining absolute integral is $+\infty$ by step 1.4, so $I_\alpha f(0)$ is not assigned a finite value. Hence $\{|I_\alpha f|>T\}$ is not a null set for any $T$, and no constant $T$ can bound $|I_\alpha f|$ almost everywhere. [F3, step 1.4, step 3.1]

5.1 Conclusion. Steps 2.1, 1.4 and 4.1 exhibit a function $f\in L^{p_0}(\mathbb R^n;\mathbb C)$ whose Riesz integral diverges at the origin and whose finite values are essentially unbounded on every neighbourhood of the origin, so the critical case $p_0=n/\alpha$ admits neither a finite raw potential at every point nor a bounded $L^{p_0}\to L^\infty$ estimate. This shows the necessity of the strict range $1<p<n/\alpha$ in the strong theorem of this pair. Countable Choice is used only through the polar, measure, and Lebesgue change-of-variables interfaces [F3]-[F4] and [F8]-[F10]; no other choice principle is invoked. [F8, step 2.1, step 1.4, step 4.1] ∎

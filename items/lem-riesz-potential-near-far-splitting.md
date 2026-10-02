---
id: lem-riesz-potential-near-far-splitting
kind: lemma
title: "Near and far bounds for a Riesz potential"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-riesz-potential-of-order-alpha, def-complex-lp-and-euclidean-test-function-conventions, def-locally-integrable-function-on-r-n, def-centered-and-uncentered-hardy-littlewood-maximal-functions, lem-euclidean-balls-have-positive-finite-lebesgue-measure, thm-complex-holder-minkowski-and-the-quotient-norm, thm-polar-coordinates-formula-for-lebesgue-measure, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, def-countable-choice, thm-lebesgue-measure-of-a-box-of-every-kind, prop-measure-monotonicity, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, cor-additivity-of-the-nonnegative-lebesgue-integral, thm-monotone-convergence-for-the-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, cor-continuous-functions-are-borel-measurable, thm-composition-with-borel-functions-preserves-measurability, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-borel-sets-are-lebesgue-measurable, def-borel-and-lebesgue-measurable-function-on-rn, def-metric-ball, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-ck-euclidean-maps-and-diffeomorphisms, thm-determinant-of-a-triangular-matrix]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis, Proposition 11.4, printed p. 73"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proof of Proposition 11.4, printed p. 73: the near part is bounded by $R^\\alpha Mf(x)$ and the far part by H\\\"older with $(n-\\alpha)p'=n+p'n/q>n$ and $R^{-n/q}\\|f\\|_p$."
    - title: "Larry Guth, Hardy–Littlewood–Sobolev Inequality, §3, printed p. 3"
      url: "https://ocw.mit.edu/courses/18-s997-the-polynomial-method-fall-2012/214a7e215cfb9c3bdd3507e528b8db3c_MIT18_S997F12_lec30.pdf"
      locator: "§3 Step 2: the ball average is at most $Mf(x)$ and at most $r^{-n/p}\\|f\\|_p$ by H\\\"older; the two regimes are cut at a critical radius."
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$n\ge1$, $0<\alpha<n$, $1<p<n/\alpha$, and let $f$ be an element of the
complex Lebesgue space $L^p(\mathbb R^n;\mathbb C)$
([[def-complex-lp-and-euclidean-test-function-conventions]]). Every measurable
representative of $f$ is locally integrable
([[def-locally-integrable-function-on-r-n]]).

At every $x$ with $Mf(x)<\infty$, where $M$ is the centered Hardy-Littlewood
maximal operator ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]]),
and for every $R>0$, the two absolute integrals
$$N_R(x):=\int_{|x-y|<R}|x-y|^{\alpha-n}|f(y)|\,dy,\qquad F_R(x):=\int_{|x-y|\ge R}|x-y|^{\alpha-n}|f(y)|\,dy$$
are finite and satisfy
$$N_R(x)\le C_{n,\alpha}R^{\alpha}Mf(x),\qquad F_R(x)\le C_{n,\alpha,p}R^{\alpha-n/p}\|f\|_p .$$
The far bound holds at every $x\in\mathbb R^n$. Each convergent integral is
independent of the measurable representative of the class $f$: if two
representatives agree almost everywhere, then at every point $x$ the integrals
$N_R$ and $F_R$ coincide, and at every point where both are finite the total
potential $I_\alpha f(x)$ of [[def-riesz-potential-of-order-alpha]] is defined
and likewise independent of the representative.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<\alpha<n$, $1<p<n/\alpha$, and a
class $f\in L^p(\mathbb R^n;\mathbb C)$ with a fixed measurable representative,
also written $f$.

[F1] The unit-normalized Riesz potential is $I_\alpha f(x)=\int K_\alpha(x-y)f(y)\,dy$ at exactly those points where $\int K_\alpha(x-y)|f(y)|\,dy<\infty$, with $K_\alpha(z)=|z|^{\alpha-n}$ for $z\neq0$ and $K_\alpha(0)=0$.
([[def-riesz-potential-of-order-alpha]])

[F2] Complex $L^p$ classes, the seminorm $N_p(g)=(\int|g|^p)^{1/p}$, the set quotient by almost-everywhere equality, the convention that a complex function is measurable when its real and imaginary parts are, and the Euclidean conventions for $C_c^\infty(\mathbb R^n;\mathbb C)$; local integrability means finite absolute integral over every Euclidean ball.
([[def-complex-lp-and-euclidean-test-function-conventions]], [[def-locally-integrable-function-on-r-n]])

[F3] Under Countable Choice the centered maximal function of a locally integrable $f$ is $Mf(x)=\sup_{r>0}\lambda(B(x,r))^{-1}\int_{B(x,r)}|f|$, with values in $[0,\infty]$; every finite value bounds every ball average.
([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]])

[F4] For conjugate exponents $p,p'\in(1,\infty)$ and measurable representatives $g\in L^p(\mathbb R^n;\mathbb C)$, $h\in L^{p'}(\mathbb R^n;\mathbb C)$, $\int|gh|\le\|g\|_p\|h\|_{p'}$ and $|\int gh|\le\|g\|_p\|h\|_{p'}$.
([[thm-complex-holder-minkowski-and-the-quotient-norm]])

[F5] Every ball $B(x,r)$ is Lebesgue measurable with $0<\lambda(B(x,r))<\infty$; every box between its open and closed forms is Lebesgue measurable with its usual volume; Lebesgue measure is monotone on measurable sets.
([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[prop-measure-monotonicity]])

[F6] Under Countable Choice a $C^1$ diffeomorphism $T:U\to V$ satisfies $\int_V h\,d\lambda_n=\int_U h\circ T\,|\det DT|\,d\lambda_n$ for every nonnegative Lebesgue measurable $h$; an affine map $y\mapsto y-x$ is a $C^1$ diffeomorphism of $\mathbb R^n$ with derivative the identity, whose determinant is $1$.
([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-determinant-of-a-triangular-matrix]])

[F7] Under Countable Choice, polar coordinates express the integral of a nonnegative Borel function $h$ on $\mathbb R^n$ as $\int_0^\infty\int_{S^{n-1}}h(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$ with $\sigma$ a finite Borel measure on $S^{n-1}$.
([[thm-polar-coordinates-formula-for-lebesgue-measure]])

[F8] Continuous maps on Euclidean space are Borel measurable; the composition of a measurable map with a Borel measurable function of its codomain is measurable; sums, products, scalar multiples and absolute values of measurable real functions are measurable; every Borel subset of $\mathbb R^n$ is Lebesgue measurable under Countable Choice, so a Borel measurable function into $[0,\infty]$ is Lebesgue measurable.
([[cor-continuous-functions-are-borel-measurable]], [[thm-composition-with-borel-functions-preserves-measurability]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-borel-sets-are-lebesgue-measurable]], [[def-borel-and-lebesgue-measurable-function-on-rn]])

[F9] For nonnegative measurable functions the Lebesgue integral is additive, monotone, homogeneous for nonnegative scalars, and computes the integral of an increasing pointwise limit as the limit of the integrals; the integral of the zero function is zero.
([[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[thm-monotone-convergence-for-the-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[F10] A nonnegative measurable function has integral zero if and only if it vanishes almost everywhere; two integrable real or complex functions that agree almost everywhere have equal integrals over every measurable set.
([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]])

[F11] Countable Choice says that every sequence of nonempty sets has a choice function; it is the choice principle assumed by the maximal-function, polar, change-of-variables and measurability interfaces used below, and no other choice principle is invoked.
([[def-countable-choice]])

[F12] $B(x,r)=\{y:\|y-x\|_2<r\}$ and $\|v\|_2^2=\sum_i v_i^2$, so $\|v\|_2<r$ forces $|v_i|<r$ for every coordinate; the published Euclidean metric is induced by this norm.
([[def-metric-ball]], [[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]])



## Proof

**Proof technique:** direct; split the kernel integral at $R$, bound the near part by the maximal function on dyadic shells and the far part by Hölder after translating, then transfer to representatives.

1.1 Local integrability. Let $f$ be a measurable representative of the class with $N_p(f)=\|f\|_p<\infty$, and let $B(x,r)$ be any Euclidean ball. By [F4] with the conjugate pair $p,p'$, whose second exponent is finite because $p>1$, $$\int_{B(x,r)}|f|\le\|f\cdot 1_{B(x,r)}\|_p\|1_{B(x,r)}\|_{p'}\le\|f\|_p\,\lambda(B(x,r))^{1/p'}<\infty,$$ the last inequality using $\lambda(B(x,r))<\infty$ from [F5]. Hence every measurable representative is locally integrable, and [F3] defines $Mf(x)\in[0,\infty]$ at every $x$. [F2, F3, F4, F5, given]
1.2 Ball bounds. For every $x$ and $r>0$, the inclusion $B(x,r)\subseteq x+(-r,r)^n$ holds by [F12], and the open cube is Lebesgue measurable with measure $(2r)^n$ by [F5]; monotonicity in [F5] gives $$\lambda(B(x,r))\le(2r)^n .$$ Combining with the averaging inequality of [F3], for every $r>0$, $$\int_{B(x,r)}|f|\le\lambda(B(x,r))\,Mf(x),\qquad \lambda(B(x,r))^{-1}\int_{B(x,r)}|f|\le Mf(x).$$ [F3, F5, F12, algebra]
1.3 Measurability of the integrands. Fix $x$. The map $y\mapsto x-y$ is continuous, hence Borel measurable, and $K_\alpha$ is Borel measurable because it is continuous off the origin and takes the finite value $0$ there; by the composition clause of [F8] the map $y\mapsto K_\alpha(x-y)$ is Borel measurable, hence Lebesgue measurable by the Borel-containment clause of [F8]. The modulus $|f|$ and the components of $f$ are measurable by [F2], so the product clause of [F8] makes $y\mapsto K_\alpha(x-y)|f(y)|$ and each component of $y\mapsto K_\alpha(x-y)f(y)$ Lebesgue measurable. [F2, F8]
1.4 Far kernel integral. Fix $x$ and $R>0$, and define $h_R(z):=|z|^{(\alpha-n)p'}1_{\{|z|\ge R\}}$. The function $z\mapsto|z|$ is continuous and $t\mapsto t^{(\alpha-n)p'}1_{\{t\ge R\}}$ is Borel, so $h_R$ is Borel, nonnegative and hence Lebesgue measurable by [F8]. The affine map $T(y):=y-x$ has $T(T^{-1})$ equal to the identity with inverse $y\mapsto y+x$, identity derivative and determinant $1$, so it is a $C^1$ diffeomorphism of $\mathbb R^n$ by [F6]; applying the change-of-variables formula of [F6] to $h_R$ gives $$\int_{\mathbb R^n}|y-x|^{(\alpha-n)p'}1_{\{|y-x|\ge R\}}\,dy=\int_{\mathbb R^n}h_R(z)\,dz .$$ The right-hand integral is radial and $h_R$ is Borel, so the polar formula [F7] computes it as $$\sigma(S^{n-1})\int_R^\infty r^{(\alpha-n)p'+n-1}\,dr =\sigma(S^{n-1})\frac{R^{(\alpha-n)p'+n}}{(n-\alpha)p'-n},$$ where the antiderivative is evaluated at the convergent upper end because the exponent $(\alpha-n)p'+n-1<-1$; that inequality is equivalent to $(n-\alpha)p'>n$, which in turn is equivalent to $p<n/\alpha$, the hypothesis. [F6, F7, F8, given, algebra]
2.1 Near shell estimate. Fix $x$ with $Mf(x)<\infty$ and $R>0$. For $j\ge0$ put $$S_j:=\{\,y:2^{-j-1}R\le|x-y|<2^{-j}R\,\}.$$ The sets $S_j$ are pairwise disjoint Lebesgue measurable sets with union $B(x,R)\setminus\{x\}$: a point $y$ lies in exactly one shell according to the dyadic size of $|x-y|\in(0,R)$, and the excluded point is exactly $x$. On $S_j$ one has $|x-y|<2^{-j}R$, so the ball $B(x,2^{-j}R)$ contains $S_j$, and since $\alpha-n<0$ reverses the inequality at the positive lower endpoint $2^{-j-1}R\le|x-y|$, $$K_\alpha(x-y)=|x-y|^{\alpha-n}\le\bigl(2^{-j-1}R\bigr)^{\alpha-n}\quad(y\in S_j).$$ Therefore, by monotonicity and the averaging bound of step 1.2, $$\int_{S_j}K_\alpha(x-y)|f(y)|\,dy\le\bigl(2^{-j-1}R\bigr)^{\alpha-n}\int_{B(x,2^{-j}R)}|f| \le\bigl(2^{-j-1}R\bigr)^{\alpha-n}\bigl(2\cdot 2^{-j}R\bigr)^{n}Mf(x) =2^{\,2n-\alpha}R^{\alpha}2^{-j\alpha}Mf(x).$$ [F1, F3, F5, F9, step 1.2, step 1.3, algebra]
2.2 Far bound. The $p'$-th root of the value in step 1.4 is $$C'R^{\alpha-n/p},\qquad C':=\sigma(S^{n-1})^{1/p'}\bigl((n-\alpha)p'-n\bigr)^{-1/p'},$$ using $(\alpha-n)p'+n=(\alpha-n+n/p')p'$ and $\alpha-n+n/p'=\alpha-n/p$; the constant $C'$ is finite and positive because $\sigma(S^{n-1})$ is finite by [F7] and $(n-\alpha)p'-n>0$. Hence $$F_R(x)=\int_{\mathbb R^n}|y-x|^{\alpha-n}1_{\{|y-x|\ge R\}}|f(y)|\,dy \le\Bigl(\int_{\mathbb R^n}\bigl(|y-x|^{\alpha-n}1_{\{|y-x|\ge R\}}\bigr)^{p'}dy\Bigr)^{1/p'}\|f\|_p \le C'R^{\alpha-n/p}\|f\|_p<\infty,$$ where the first inequality is Hölder [F4] applied to the pair $|f|$ and the radial weight, and the weight's exact $L^{p'}$ norm is the quantity computed in step 1.4. The estimate uses no hypothesis on $Mf(x)$, so it holds at every $x$ and every $R>0$, and in particular proves finiteness of $F_R(x)$ everywhere. [F4, step 1.4, given, algebra]
2.3 Representative independence of the absolute integrals. Let $f$ and $g$ be measurable representatives of the same class, so that $f=g$ almost everywhere, and fix $x$. The two nonnegative measurable integrands $h_f:=K_\alpha(x-\cdot)|f|$ and $h_g:=K_\alpha(x-\cdot)|g|$ of step 1.3 are equal off the null set $\{f\neq g\}$; hence $|h_f-h_g|=0$ almost everywhere and [F10] gives $\int|h_f-h_g|=0$. Since $h_f\le h_g+|h_f-h_g|$ and $h_g\le h_f+|h_f-h_g|$ pointwise, additivity and monotonicity in [F9] give $$\int h_f\le\int h_g+0,\qquad \int h_g\le\int h_f+0,$$ so the two extended nonnegative integrals are equal; in particular one is finite if and only if the other is. Applying this to the restrictions $\{|x-y|<R\}$ and $\{|x-y|\ge R\}$ (each restriction has the same form with the additional indicator) shows that $N_R(x)$ and $F_R(x)$ are independent of the representative, as functions of $x$. [F9, F10, step 1.3]
3.1 Near bound and finiteness. Since $K_\alpha(0)=0$ by [F1], the integrand $K_\alpha(x-\cdot)|f|\cdot 1_{\{x\}}$ vanishes identically, so the pointwise identity $$K_\alpha(x-y)|f(y)|\,1_{B(x,R)}(y)=\sum_{j\ge0}K_\alpha(x-y)|f(y)|\,1_{S_j}(y)$$ holds; the partial sums increase to the left-hand side, so [F9] (additivity followed by monotone convergence) gives $$N_R(x)=\int_{B(x,R)}K_\alpha(x-\cdot)|f|=\sum_{j\ge0}\int_{S_j}K_\alpha(x-\cdot)|f| \le 2^{\,2n-\alpha}R^{\alpha}Mf(x)\sum_{j\ge0}2^{-j\alpha} =\frac{2^{\,2n-\alpha}}{1-2^{-\alpha}}\,R^{\alpha}Mf(x)<\infty,$$ because $\alpha>0$ makes the geometric series converge and $Mf(x)<\infty$. This proves the near bound and the finiteness of $N_R(x)$ with $C_{n,\alpha}=2^{2n-\alpha}/(1-2^{-\alpha})$, a constant depending only on $n$ and $\alpha$. [F1, F9, step 2.1, algebra]
3.2 Representative independence of the complex integrals and of the potential. Keep the notation of step 2.3 and suppose now that the common absolute integral is finite at $x$. Then the complex functions $K_\alpha(x-\cdot)f$ and $K_\alpha(x-\cdot)g$ are both integrable, and they agree almost everywhere, so [F10] applied to their real and imaginary parts gives $\int K_\alpha(x-\cdot)f=\int K_\alpha(x-\cdot)g$. Consequently the convergence set of the defining integral and its value at every convergent point depend only on the class $f$, and if $N_R(x)$ and $F_R(x)$ are both finite, then additivity in [F9] applied on the complementary measurable sets $B(x,R)$ and its complement gives $$\int K_\alpha(x-\cdot)|f|=N_R(x)+F_R(x)<\infty,$$ so $I_\alpha f(x)$ is defined by [F1] and is representative-independent. [F1, F9, F10, step 2.3]
4.1 Conclusion. The local-integrability assertion is step 1.1; the finiteness and the bound for $N_R$ are step 3.1; the finiteness and the bound for $F_R$ at every point are step 2.2; and representative independence of the convergent integrals and of the total potential is steps 2.3 and 3.2. Countable Choice is used exactly through the maximal-function interface [F3], the ball, box, change-of-variables and polar interfaces [F5]-[F7], the measurability interfaces [F8] and the integral-lattice facts [F9]-[F10], all of which are stated under Countable Choice; no full Axiom of Choice is used. No estimate is asserted at a point with $Mf(x)=\infty$, and no endpoint case $p=1$ or $p=n/\alpha$ is claimed. [F11, step 1.1, step 3.1, step 2.2, step 2.3, step 3.2] ∎

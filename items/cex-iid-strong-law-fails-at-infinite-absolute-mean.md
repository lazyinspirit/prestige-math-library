---
id: cex-iid-strong-law-fails-at-infinite-absolute-mean
kind: counterexample
title: Iid strong law fails at infinite absolute mean
deps: ["cor-countable-independent-copies-exist", "thm-integrability-is-necessary-for-an-iid-finite-mean-strong-law", "thm-independent-random-elements-have-product-joint-law", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-change-of-variables-for-expectation", "thm-probability-law-and-distribution-function-correspondence", "thm-principal-inverse-tangent-calculus", "thm-substitution-for-improper-integrals", "thm-logarithm-derivative-and-integral", "thm-natural-logarithm-laws", "def-countable-choice", "def-axiom-of-choice", "thm-ftc-second-part", "thm-continuous-implies-integrable", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "thm-monotone-convergence-for-the-integral", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "thm-measure-uniqueness-on-a-sigma-finite-pi-system", "def-dependent-choice", "thm-recursion", "def-principal-inverse-tangent", "thm-lebesgue-measure-of-a-box-of-every-kind"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, Example 2.2.15 p.65 and Theorem 2.3.8 pp.70–71; convolution evaluated locally without characteristic functions
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement refuted

Assume AC. IID standard Cauchy variables have standard Cauchy sample means for every positive n. Their averages cannot converge in probability to a finite constant, and cannot converge almost surely to any finite random limit. Here the standard Cauchy law has CDF $F(x)=1/2+\arctan(x)/\pi$.

## Facts & Assumptions

[F1] [[thm-principal-inverse-tangent-calculus]]: For every $x\in\mathbb R$,

$$\frac{d}{dx}\arctan x=\frac1{1+x^2},\qquad \arctan x=\int_0^x\frac{dt}{1+t^2}.$$

For $|x|<1$,

$$\arctan x=\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{2n+1}.$$

At the endpoint, the ordinarily convergent alternating series satisfies

$$\frac\pi4=1-\frac13+\frac15-\frac17+\cdots.$$

[F2] [[thm-probability-law-and-distribution-function-correspondence]]: Assume the Axiom of Countable Choice.

1. Let $X$ be a real random variable, let $\mathbb P_X$ be its law, and let
   $F_X(x)=\mathbb P(X\le x)$. Then $F_X$ is nondecreasing and right-continuous,
   satisfies
   $$\lim_{x\to-\infty}F_X(x)=0,\qquad \lim_{x\to+\infty}F_X(x)=1,$$
   and obeys
   $$\mathbb P_X((a,b])=F_X(b)-F_X(a)\qquad(a<b).$$
2. Conversely, if $F:\mathbb R\to\mathbb R$ is nondecreasing and
   right-continuous with
   $$\lim_{x\to-\infty}F(x)=0,\qquad \lim_{x\to+\infty}F(x)=1,$$
   then there is a unique Borel probability measure $\mu$ on $\mathbb R$ such
   that
   $$\mu((a,b])=F(b)-F(a)\qquad(a<b),$$
   equivalently
   $$F(x)=\mu((-\infty,x])\qquad(x\in\mathbb R).$$

[F3] [[thm-recursion]]: Let $(N,0,\sigma)$ be a Peano system (def-peano-system), in particular the natural numbers $\mathbb{N}$ (def-natural-numbers). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

[F4] [[cor-countable-independent-copies-exist]]: Assume countable choice and dependent choice. Every probability measure $\nu$
on $(S,\Sigma)$ is the common law of a countable independent family of
$S$-valued random elements.

[F5] [[thm-continuous-implies-integrable]]: Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be continuous on $[a,b]$
(def-continuity-real). Then $f$ is bounded (def-bounded-set) and Riemann
integrable on $[a,b]$ (def-darboux-integral).

**The proof gives more than integrability: it gives a partition that works.** For
every real $\varepsilon > 0$ the uniform partition into $N$ parts already
satisfies $U(f,P) - L(f,P) < \varepsilon$, as soon as $N$ is large enough that
$(b-a)/N$ is below the $\delta$ that uniform continuity supplies for
$\varepsilon/\bigl(2(b-a)\bigr)$. Uniform continuity is exactly what makes one
$\delta$ serve all $N$ subintervals at once, and it is the only place where the
compactness of $[a,b]$ is used.

[F6] [[thm-ftc-second-part]]: Let $a < b$ be reals, let $G : [a,b] \to \mathbb{R}$ be differentiable at every
point of $[a,b]$ as a function on $[a,b]$ (def-derivative; at $a$ and $b$
this is the one-sided derivative), let $f := G'$, and suppose $f$ is integrable
on $[a,b]$ (def-darboux-integral). Then

$$\int_a^b f \;=\; G(b) - G(a) .$$

**Both hypotheses are needed and neither is removable.** A function may be
differentiable everywhere with $G'$ not integrable — then the left-hand side does
not exist (an everywhere differentiable function with unbounded derivative) — and an
integrable $f$ need not be the derivative of anything
(the sign function); both witnesses are on the
companion page.

**No continuity of $f$ is assumed**, which is what makes this the working form:
the theorem evaluates $\int_a^b f$ for every integrable derivative, not only for
continuous integrands.

[F7] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: Assume the Axiom of Countable Choice. Let $a<b$ and let $f:[a,b]\to\mathbb R$ be
bounded and Riemann integrable. Then $f$ is Lebesgue measurable on $[a,b]$ and
is integrable there, and its Lebesgue integral equals its Riemann integral:
$$\int_{[a,b]} f\,d\lambda_1=\int_a^b f(x)\,dx.$$

This is the point at which the completeness of Lebesgue measure is used
essentially: the proof obtains a Borel function equal to $f$ almost everywhere,
and measurability of $f$ itself is then a completeness statement.

[F8] [[thm-monotone-convergence-for-the-integral]]: Let $0\le f_1\le f_2\le\cdots$ be measurable and suppose $f_n(x)\uparrow f(x)$
for every $x$. Then
$$\int f_n\,d\mu\uparrow\int f\,d\mu.$$

[F9] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]: Let $f:X\to[0,+\infty]$ be measurable and define
$$\nu_f(A):=\int_A f\,d\mu \qquad (A\in\mathcal A).$$
Then $\nu_f$ is a measure on $(X,\mathcal A)$.

[F10] [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]: Let $\mathcal P$ be a $\pi$-system on $X$ generating $\mathcal A$, and let $\mu,\nu$ be measures on $(X,\mathcal A)$ that agree on $\mathcal P$. Suppose there is an increasing sequence $(P_n)$ in $\mathcal P$ with

$$X=\bigcup_nP_n,\qquad \mu(P_n)=\nu(P_n)<+\infty\quad(n\in\mathbb N).$$

Then $\mu=\nu$ on $\mathcal A$.

[F11] [[thm-logarithm-derivative-and-integral]]: For $x>0$, $\log$ is differentiable and
$$\log'(x)=\frac1x,\qquad \log x=\int_1^x\frac{dt}{t}.$$

[F12] [[thm-natural-logarithm-laws]]: The function $\log:(0,\infty)\to\mathbb R$ is continuous and strictly increasing, is onto $\mathbb R$, and satisfies, for $x,y>0$,
$$\log(xy)=\log x+\log y,\qquad \log(x/y)=\log x-\log y,\qquad \log(1/x)=-\log x.$$
Also $\log 1=0$.

[F13] [[thm-integrability-is-necessary-for-an-iid-finite-mean-strong-law]]: If IID real $(X_n)$ have $S_n/n$ converging almost surely to a finite, possibly random, limit $L$, then $\mathbb E|X_1|<\infty$ and $L=\mathbb EX_1$ almost surely.

[F14] [[thm-independent-random-elements-have-product-joint-law]]: Let $n\ge1$, and let
$X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$ for $i<n$ be independent
random elements. Define

$$X=(X_0,\dots,X_{n-1}):\Omega\to\prod_{i<n}S_i.$$

Then $X$ is a random element of
$\left(\prod_{i<n}S_i,\bigotimes_{i<n}\Sigma_i\right)$, and its law is the
finite product of the marginal laws:

$$\mathbb P_X=\bigotimes_{i<n}\mathbb P_{X_i}.$$

[F15] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: Let $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be $\sigma$-finite measure
spaces, and let $f : X \times Y \to [0,\infty]$ be product-measurable. Then
$x \mapsto \int_Y f_x\,d\nu$ and $y \mapsto \int_X f^y\,d\mu$ are measurable,
and

$$\int_{X \times Y} f\,d(\mu \times \nu) = \int_X \left(\int_Y f_x\,d\nu\right)d\mu = \int_Y \left(\int_X f^y\,d\mu\right)d\nu.$$

[F16] [[def-principal-inverse-tangent]]: By lem-tangent-principal-branch-is-bijective, tangent restricts to a
continuous strictly increasing bijection

$$\tan:(-\pi/2,\pi/2)\longrightarrow\mathbb R.$$

Its inverse is the **principal inverse tangent**

$$\arctan:\mathbb R\longrightarrow(-\pi/2,\pi/2).$$

Thus $\tan(\arctan y)=y$ for every real $y$, while
$\arctan(\tan x)=x$ precisely for $x$ in the displayed principal interval.
The inverse is continuous and strictly increasing by thm-continuous-inverse.

[F17] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: Let $n \ge 1$, **assume the Axiom of Countable Choice**
(def-countable-choice), and let $a_i \le b_i$ be reals for $i<n$. Write

$$R^{\circ} := \{\, x \in \mathbb{R}^n : a_i < x_i < b_i \text{ for every } i<n \,\}, \qquad \overline{R} := [a,b] = \{\, x \in \mathbb{R}^n : a_i \le x_i \le b_i \text{ for every } i<n \,\}$$

(def-multidimensional-rectangle-and-volume). Then $R^{\circ}$ is open and
$\overline{R}$ is closed, so both are Borel and Lebesgue measurable, and **every**
set $R$ with $R^{\circ} \subseteq R \subseteq \overline{R}$ is Lebesgue
measurable with

$$\lambda_n(R) \;=\; \prod_{i<n}(b_i-a_i).$$

In particular this covers the four one-dimensional face conventions in each
coordinate — the open box, the closed box $[a,b]$, the half-open box
$B(a,b) = \prod_{i<n}(a_i,b_i]$ of def-half-open-box, and every mixture of
them, in any combination of coordinates — and it gives measure $0$ to all of them
whenever $a_i = b_i$ for some $i<n$. For a half-open box with infinite
parameters the value is already
$\lambda_n(B) = \operatorname{vol}(B)$ (thm-lebesgue-measure-is-a-complete-measure).

## Counterexample

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 The inverse in F16 is increasing onto $(-\pi/2,\pi/2)$. Its limit at positive infinity is the supremum of that range, $\pi/2$: for each $u<\pi/2$ in the range, $x>\tan u$ implies $\arctan x>u$. The analogous argument at negative infinity gives $-\pi/2$. Inverse-tangent calculus F1 gives derivative $1/(1+x^2)>0$. Thus F is increasing, continuous and has limits 0 and 1. AC gives CC by restriction to any countable family of nonempty sets, so F2 constructs the law. For a serial relation, AC selects a successor map; F3 iterates it, giving DC and licensing the IID construction in F4. [F1, F2, F3, F4, F16]

1.2 For $a>0$ set $f_a(x)=a/[\pi(a^2+x^2)]$. Its primitive is $\arctan(x/a)/\pi$. Continuous integrability F5, F6, and the CC-qualified compact comparison F7 therefore evaluate its Lebesgue integral on every compact interval. F8 and the primitive limits give total mass one. F9 makes this a measure; equality of finite-interval increments and F10 identify its CDF as $1/2+\arctan(x/a)/\pi$. In particular $f_1$ is the standard density. [F5, F6, F7, F8, F9, F10]

1.3 For fixed real x and a,$b>0$ put $q=x^2+b^2-a^2$ and $H=q^2+4a^2x^2=(x^2+(a+b)^2)(x^2+(a-b)^2)$. If $H>0$, multiplication by the two denominators verifies the identity $\frac1{(y^2+a^2)((y-x)^2+b^2)}=\frac{Ay+B}{y^2+a^2}+\frac{-A(y-x)+D}{(y-x)^2+b^2}$, where $A=2x/H$, $B=q/H$, $D=(x^2+a^2-b^2)/H$. The cubic coefficient cancels; the quadratic and linear coefficients are zero; the constant is one. [given, algebra]

2.1 For $R>0$, F11 gives $2\int_0^R x f_1(x)\,dx=\log(1+R^2)/\pi$. This tends to infinity by F12. The compact comparison and nonnegative MCT in step 1.2 show $\mathbb E|X_1|=\infty$. Consequently F13 excludes any finite almost-sure limit of the sample means. [F11, F12, F13, step 1.2]

2.2 For independent variables with densities $f_a$ and $f_b$, F14 and F15 give, on an interval (u,v], probability $\int f_a(y)\int_{u-y}^{v-y}f_b(z)\,dz\,dy$. For fixed y, the affine substitution z=x-y on the finite interval is justified by the continuous primitive in step 1.2, and changes the inner integral to $\int_u^v f_b(x-y)\,dx$. Tonelli then gives interval probability $\int_u^v(f_a*f_b)(x)\,dx$. This defines a mass-one density measure; interval uniqueness extends the equality to all Borel sets. [F14, F15, step 1.2]

3.1 A singleton is a degenerate closed box of length zero by F17. Integrate step 1.3 on [-R,R] using the logarithm and inverse-tangent primitives in step 1.2 and step 2.1. The logarithmic contribution is $-(A/2)\log(((R-x)^2+b^2)/((R+x)^2+b^2))$, which tends to zero, while the arctangent contributions tend to $\pi(B/a+D/b)$. Since $bq+a(x^2+a^2-b^2)=(a+b)(x^2+(a-b)^2)$, the limit is $\pi(a+b)/(ab(x^2+(a+b)^2))$. Multiplying by ab/$\pi$^2 gives $(f_a*f_b)(x)=f_{a+b}(x)$. The only excluded case is a=b and $x=0$. A singleton is Lebesgue-null, so this almost-everywhere equality suffices for the density measures; no subtraction of divergent integrals was made. [step 1.3, step 1.2, step 2.1, F17]

4.1 Induction with step 2.2 and step 3.1 gives density $f_n$ for $S_n$. Its CDF at nx is $1/2+\arctan(nx/n)/\pi=F(x)$, so $S_n$/n has density $f_1$ for every n. For any finite c, this law gives $P(|S_n/n-c|>1)=1-(\arctan(c+1)-\arctan(c-1))/\pi>0$, independently of n, since the arctangent difference is strictly less than $\pi$. Thus convergence in probability to c fails. Step 2.1 supplies the stronger obstruction to finite random almost-sure limits. [step 2.2, step 3.1] ∎

---
id: thm-standard-maclaurin-expansions
kind: theorem
title: "Standard Maclaurin expansions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-taylor-and-maclaurin-series, thm-geometric-series, def-real-exponential-function-and-e, def-sine-and-cosine-by-power-series, thm-log-one-plus-x-power-series, thm-principal-inverse-tangent-calculus, thm-real-power-continuity-and-derivatives, def-factorial-and-falling-factorial, thm-binomial-theorem, thm-binomial-closed-formula, def-binomial-coefficient, thm-ratio-test, thm-termwise-differentiation-of-a-real-power-series, thm-algebra-of-derivatives, lem-derivative-of-a-power, thm-chain-rule, cor-differentiable-implies-continuous, def-real-power, def-natural-logarithm, thm-real-power-laws, def-integer-power, cor-zero-derivative-implies-constant, cor-exponential-is-a-bijection-onto-positive-reals, def-real-power-series-and-radius-of-convergence, cor-power-series-convergence-dichotomy, def-series, def-higher-derivatives-and-smoothness, lem-series-linearity, thm-convergence-iff-limsup-equals-liminf, thm-algebra-of-limits, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, §4.5, pp. 265–267"
      url: "https://digitalcommons.trinity.edu/mono/7/"
    - title: "MIT OpenCourseWare 18.100C Real Analysis, Lecture 23"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/381efa3847b9801fc7a7bfe520018bd7_MIT18_100CF12_l23sum.pdf"
pipeline_run: null
---

## Statement

The standard Maclaurin expansions are

$$\frac1{1-x}=\sum_{n=0}^{\infty}x^n\qquad(|x|<1),$$

$$e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!},\qquad \sin x=\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!},\qquad \cos x=\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n}}{(2n)!}\qquad(x\in\mathbb R),$$

$$\log(1+x)=\sum_{n=1}^{\infty}\frac{(-1)^{n+1}x^n}{n}\qquad(-1<x\le1),$$

and

$$\arctan x=\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{2n+1}\qquad(|x|<1),$$

with value $\pi/4$ at $x=1$. For every real $\alpha$,

$$(1+x)^\alpha=\sum_{n=0}^{\infty}\binom{\alpha}{n}x^n\qquad(|x|<1),$$

where

$$\binom{\alpha}{0}=1,\qquad \binom{\alpha}{n+1}=\binom{\alpha}{n}\frac{\alpha-n}{n+1}.$$

## Facts & Assumptions

**Given:** The functions and power series displayed in the statement, and an arbitrary real parameter $\alpha$ for the generalized-binomial family.

[L1] The Maclaurin series of a smooth function $f$ is
$\sum_{n\ge0}f^{(n)}(0)x^n/n!$
([[def-taylor-and-maclaurin-series]]).

[L2] For $|x|<1$, the geometric series satisfies
$\sum_{n\ge0}x^n=1/(1-x)$ ([[thm-geometric-series]]).

[L3] For every real $x$, $\exp(x)=\sum_{n\ge0}x^n/n!$, and $e:=\exp(1)$
([[def-real-exponential-function-and-e]]); and
$\sin x=\sum_{n\ge0}(-1)^nx^{2n+1}/(2n+1)!$,
$\cos x=\sum_{n\ge0}(-1)^nx^{2n}/(2n)!$
([[def-sine-and-cosine-by-power-series]]). The first definition names $\exp$
and names $e$ only as $\exp(1)$; it does not name $e^x$.

[L4] For $-1<x\le1$,
$\log(1+x)=\sum_{n\ge1}(-1)^{n+1}x^n/n$; at $x=1$ the sum is $\log2$,
and at $x=-1$ the series diverges ([[thm-log-one-plus-x-power-series]]).

[L5] For $|x|<1$,
$\arctan x=\sum_{n\ge0}(-1)^nx^{2n+1}/(2n+1)$, and the series at $x=1$
converges to $\pi/4$ ([[thm-principal-inverse-tangent-calculus]]).

[L6] For every real $\beta$, $x\mapsto x^\beta$ is continuous on
$(0,\infty)$ and has derivative $\beta x^{\beta-1}$ there
([[thm-real-power-continuity-and-derivatives]]).

[L7] Factorials satisfy $(n+1)!=(n+1)\,n!$
([[def-factorial-and-falling-factorial]]), and for reals $u,v$ and a natural
number $m$ the finite binomial theorem is
$$(u+v)^m=\sum_{k=0}^{m}\binom mk\,u^{k}\,v^{\,m-k}$$
([[thm-binomial-theorem]]), the coefficients being the natural numbers
$\binom mk$ read in $\mathbb R$ through the canonical embedding. The exponents
there are the natural-number ones: for every real $a$, $n\mapsto a^n$
is the unique function on $\mathbb N$ with $a^0=1$ and $a^{n+1}=a^n\cdot a$
([[def-integer-power]]).

[L8] If a sequence has no zero terms and
$\limsup_{n\to\infty}|a_{n+1}/a_n|<1$, then $\sum a_n$ converges absolutely
([[thm-ratio-test]]).

[L9] A real power series may be differentiated term by term at every point
inside its radius of convergence, and the differentiated series has the same
radius ([[thm-termwise-differentiation-of-a-real-power-series]]).

[L10] Sums and products of differentiable functions satisfy the sum and
product rules ([[thm-algebra-of-derivatives]]).

[L11] If a real-valued function is continuous on an order-convex interval and
has derivative zero at every interior point, then it is constant
([[cor-zero-derivative-implies-constant]]).

[L12] For naturals $k\le n$, $\binom nk\,k!\,(n-k)!=n!$; consequently, as a
real number, $\binom nk=n!/\bigl(k!\,(n-k)!\bigr)$
([[thm-binomial-closed-formula]]).

[L13] If $g$ is differentiable at a limit point $c$ of its domain and $h$ is
differentiable at $g(c)$, itself a limit point of the domain of $h$, then
$h\circ g$ is differentiable at $c$ and
$(h\circ g)'(c)=h'\bigl(g(c)\bigr)g'(c)$ ([[thm-chain-rule]]).

[L14] For a natural $n\ge1$ the function $x\mapsto x^n$ is differentiable at
every real with derivative $nx^{n-1}$, and for $n=0$ it is the constant $1$,
with derivative $0$; consequently every polynomial function is differentiable
at every real, with the derivative computed term by term
([[lem-derivative-of-a-power]]).

[L15] A function differentiable at a limit point $c$ of its domain is
continuous at $c$ ([[cor-differentiable-implies-continuous]]).

[L16] For $a>0$ and $x\in\mathbb R$, $a^x=\exp(x\log a)$ ([[def-real-power]]);
$\log$ is the inverse of $\exp$, so $\log(\exp y)=y$ for every real $y$ and
$\exp(\log w)=w$ for every $w>0$ ([[def-natural-logarithm]]); and for $a,b>0$
and $r,s\in\mathbb R$, $a^{r+s}=a^ra^s$ ([[thm-real-power-laws]]).

[L17] $\exp:\mathbb R\to(0,\infty)$ is a bijection
([[cor-exponential-is-a-bijection-onto-positive-reals]]); in particular every
value of $\exp$ is positive.

[L18] A real power series about the centre $c$ is $\sum_{n\ge0}a_n(x-c)^n$,
where the powers are those of [[def-integer-power]] and convergence is that of
[[def-series]]; at $x=c$ it always converges to $a_0$, the $n=0$ term being
$a_0$ because $0^0=1$ and every later term being $0$; and its radius of
convergence is the supremum, in $[0,+\infty]$, of the $r\ge0$ such that the
series converges absolutely at every $x$ with $|x-c|<r$
([[def-real-power-series-and-radius-of-convergence]]).

[L19] $f^{(0)}:=f$, and $f^{(j+1)}:=(f^{(j)})'$ wherever $f^{(j)}$ is
differentiable; $f$ is smooth, that is $C^\infty$, on an interval when every
$f^{(j)}$ exists there and is continuous there
([[def-higher-derivatives-and-smoothness]]).

[L20] For naturals $n,k$, $\binom nk$ is the number of $k$-element subsets of
$n$; in particular $\binom n0=1$ for every $n$, and $\binom nk=0$ for $k>n$
([[def-binomial-coefficient]]).

[L21] If $\sum a_k$ and $\sum b_k$ converge and $c$ is real, then
$\sum(a_k+b_k)$ converges to $\sum a_k+\sum b_k$, and $\sum ca_k$ converges to
$c\sum a_k$ ([[lem-series-linearity]]).

[L22] A real sequence converges to a real $L$ if and only if its limit inferior
and its limit superior are both $L$
([[thm-convergence-iff-limsup-equals-liminf]]).

[L23] If $x_k\to x$ and $y_k\to y$ then $x_k+y_k\to x+y$, $cx_k\to cx$,
$x_k-y_k\to x-y$ and $x_ky_k\to xy$ ([[thm-algebra-of-limits]]); and for every
$\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$
([[cor-archimedean-reciprocal]]).

[L24] A real power series $\sum a_n(x-c)^n$ of radius $R$ converges absolutely
at every $x$ with $|x-c|<R$ and diverges at every $x$ with $|x-c|>R$
([[cor-power-series-convergence-dichotomy]]).

## Proof

**Proof technique:** direct.

1.1 The geometric, sine, cosine, logarithmic, and inverse-tangent identities, with exactly the displayed domains and endpoint assertions, are [L2]–[L5]. The exponential identity needs one further move, because the statement writes $e^x$, the real power of the base $e$ in the sense of [L16], while [L3] defines $\exp$ and defines $e$ only as $\exp(1)$. By [L17] every value of $\exp$ is positive, so $e=\exp(1)>0$ and [L16] assigns $e^x$ the value $\exp(x\log e)$. Since $\log$ is the inverse of $\exp$ [L16], $\log e=\log(\exp1)=1$, so $$e^x=\exp(x\cdot1)=\exp(x)\qquad(x\in\mathbb R),$$ and the series [L3] gives for $\exp(x)$ is therefore the series of $e^x$. [L2, L3, L4, L5, L16, L17, algebra]

1.2 Suppose $f(x)=\sum_{n\ge0}a_nx^n$ for $|x|<R$ with $R>0$; this is a power series about $0$ in the sense of [L18], and the hypothesis is exactly that it converges, with sum $f(x)$, at every $x$ with $|x|<R$. Its radius of convergence $\rho$ is therefore at least $R$: by [L24] a power series diverges at every point farther from its centre than its radius, so a point of convergence $x$ has $|x|\le\rho$, and letting $|x|$ run over $[0,R)$ gives $\rho\ge R$. Every point of $(-R,R)$ thus lies strictly inside the radius, so by [L9] the sum is differentiable there and its derivative is again a power series of radius $\rho$; induction on $k$, using $(n+1)!=(n+1)n!$ from [L7] at each step, gives $$f^{(k)}(x)=\sum_{n\ge0}\frac{(n+k)!}{n!}a_{n+k}x^n\qquad(|x|<R)$$ for every $k\ge0$, each again a power series about $0$ of radius $\rho$. Evaluating at the centre, [L18] gives $f^{(k)}(0)=k!\,a_k$. Every $f^{(k)}$ is differentiable on $(-R,R)$, hence continuous there by [L15], so $f$ is smooth on $(-R,R)$ in the sense of [L19] and [L1] applies at $a=0$: the Maclaurin series of $f$ is $\sum_{k\ge0}f^{(k)}(0)x^k/k!=\sum_{k\ge0}a_kx^k$. A power series representing $f$ near $0$ is therefore its Maclaurin series. [L1, L7, L9, L15, L18, L19, L24, algebra]

1.3 Fix $\alpha\in\mathbb R$ and define $c_0=1$ and $c_{n+1}=c_n(\alpha-n)/(n+1)$ for $n\ge0$. [L7, choose]

1.4 On $(-1,1)$, the function $x\mapsto(1+x)^{-\alpha}$ is differentiable and has derivative $-\alpha(1+x)^{-\alpha-1}$. The inner map $x\mapsto1+x$ is a polynomial, so by [L14] it is differentiable with derivative $1$ at every point of $(-1,1)$, each of which is a limit point of $(-1,1)$; its value $1+x$ lies in $(0,\infty)$ and is a limit point of $(0,\infty)$, where by [L6] the outer map $u\mapsto u^{-\alpha}$ is differentiable with derivative $-\alpha u^{-\alpha-1}$. The chain rule [L13] therefore gives the composite derivative $-\alpha(1+x)^{-\alpha-1}\cdot1$. [L6, L13, L14, algebra]

2.1 If $\alpha=m$ is a nonnegative integer, the recurrence of step 1.3 gives $c_n=\binom mn$ for $0\le n\le m$ and $c_n=0$ for $n>m$. Indeed $c_0=1=\binom m0$ by [L20]; and if $n<m$ and $c_n=\binom mn=m!/(n!\,(m-n)!)$ as a real number by [L12], then, since $(n+1)!=(n+1)n!$ and $(m-n)!=(m-n)(m-n-1)!$ with $m-n\ge1$, $$c_{n+1}=\frac{m!}{n!\,(m-n)!}\cdot\frac{m-n}{n+1}=\frac{m!}{(n+1)!\,\bigl(m-(n+1)\bigr)!}=\binom m{n+1};$$ while $c_{m+1}=c_m(m-m)/(m+1)=0$, after which the recurrence keeps every term $0$. Taking $u=x$ and $v=1$ in the finite binomial theorem of [L7] then gives $$(1+x)^m=(x+1)^m=\sum_{k=0}^{m}\binom mk\,x^k\,1^{\,m-k}=\sum_{k=0}^{m}\binom mk\,x^k=\sum_{n\ge0}c_nx^n,$$ using $1^j=1$ for every natural $j$, which the recursion $1^0=1$, $1^{j+1}=1^j\cdot1$ of [L7] gives by induction, and using $c_n=0$ for $n>m$. The exponent in $(1+x)^m$ is there the natural-number one of [L7]. For $|x|<1$ that value is also the real power $(1+x)^m$ of [L16]: since $1+x>0$, the real powers $(1+x)^n$ with $n\in\mathbb N$ satisfy $(1+x)^0=\exp\bigl(0\cdot\log(1+x)\bigr)=\exp0=1$, the value $\exp0=1$ being the value at the centre of the series [L3] gives for $\exp$, by [L18]; and, by the addition law of [L16] together with $(1+x)^1=\exp\bigl(\log(1+x)\bigr)=1+x$, also $(1+x)^{n+1}=(1+x)^n(1+x)^1=(1+x)^n(1+x)$. That is the recursion determining the natural-number powers in [L7], so the two readings of $(1+x)^m$ agree. [L3, L7, L12, L16, L18, L20, step 1.3, algebra]

2.2 Suppose $\alpha$ is not a nonnegative integer and $0<|x|<1$. Then, by step 1.3, $c_0=1$ and no factor $\alpha-n$ of the recurrence vanishes, so every $c_n$ is nonzero, and $x^n\ne0$; the ratios $q_n:=\bigl|c_{n+1}x^{n+1}/(c_nx^n)\bigr|=|x|\,|\alpha-n|/(n+1)$ are therefore defined. For every $n>|\alpha|$ one has $|\alpha-n|=n-\alpha$ and hence $$q_n=|x|\Bigl(1-\frac{\alpha+1}{n+1}\Bigr),$$ so, since $1/(n+1)\to0$ by [L23] and convergence of a sequence is a condition on its tails, [L23] gives $q_n\to|x|$. By [L22] the limit superior is that same limit, so $\limsup_n q_n=|x|<1$ and [L8] makes $\sum_{n\ge0}c_nx^n$ converge absolutely. [L8, L22, L23, step 1.3, algebra]

2.3 Thus the six series in step 1.1 are precisely the asserted Maclaurin expansions; the logarithmic and inverse-tangent endpoint values are values of the same series, not claims of an open interval beyond its radius. [step 1.1, step 1.2]

3.1 Therefore, for every real $\alpha$, the power series $B(x):=\sum_{n\ge0}c_nx^n$ built from step 1.3 converges absolutely at every $x$ with $|x|<1$: when $\alpha=m$ is a nonnegative integer every term past index $m$ vanishes by step 2.1 and the series is a finite sum; at $x=0$ it converges to $c_0$ by [L18]; and every remaining case is step 2.2. Its radius of convergence in the sense of [L18] is therefore at least $1$. [L18, step 1.3, step 2.1, step 2.2, algebra]

4.1 By [L9] and step 3.1, $B$ is differentiable on $(-1,1)$ with $B'(x)=\sum_{n\ge0}(n+1)c_{n+1}x^n$, again a power series of radius at least $1$. The recurrence of step 1.3 gives $(n+1)c_{n+1}=(\alpha-n)c_n$, so $B'(x)=\sum_{n\ge0}(\alpha-n)c_nx^n$ for $|x|<1$. Both $\sum_{n\ge0}\alpha c_nx^n$ and $\sum_{n\ge0}nc_nx^n=x\sum_{n\ge0}(n+1)c_{n+1}x^{n}$ converge there, the first by step 3.1 and the second because it is $xB'(x)$, so [L21] splits the sum termwise into $\alpha B(x)-xB'(x)$. Hence $B'(x)=\alpha B(x)-xB'(x)$, that is $(1+x)B'(x)=\alpha B(x)$, for $|x|<1$. [L9, L21, step 1.3, step 3.1, algebra]

5.1 For $G(x):=(1+x)^{-\alpha}B(x)$, both factors are differentiable on $(-1,1)$ by step 1.4 and step 4.1, so the product rule gives $G'(x)=-\alpha(1+x)^{-\alpha-1}B(x)+(1+x)^{-\alpha}B'(x)$ there. On $(-1,1)$ the base $1+x$ is positive, so $(1+x)^1=\exp\bigl(\log(1+x)\bigr)=1+x$ and the addition law at the real exponents $-\alpha-1$ and $1$ gives $(1+x)^{-\alpha-1}(1+x)=(1+x)^{-\alpha}$, both by [L16]. Multiplying the displayed derivative by $1+x$ and using $(1+x)B'(x)=\alpha B(x)$ from step 4.1 therefore gives $(1+x)G'(x)=-\alpha(1+x)^{-\alpha}B(x)+\alpha(1+x)^{-\alpha}B(x)=0$; since $1+x\ne0$, $G'(x)=0$ throughout $(-1,1)$. [L10, L16, step 1.4, step 4.1, algebra]

6.1 Step 5.1 makes $G$ differentiable at every point of $(-1,1)$, and every such point is a limit point of $(-1,1)$, so [L15] makes $G$ continuous on $(-1,1)$. [L15, step 5.1]

7.1 The interval $(-1,1)$ is order-convex, so [L11] and step 6.1 make $G$ constant there, and its constant value is $G(0)=1^{-\alpha}B(0)$. Here $B(0)=c_0$ by [L18], the value of a power series at its centre being its constant coefficient, and $c_0=1$ by step 1.3. And $1^{-\alpha}$ is a real power of the base $1>0$, so [L16] makes it $\exp(-\alpha\log1)$, where $\exp0=1$ is the value at the centre of the series [L3] gives for $\exp$, by [L18], hence $\log1=\log(\exp0)=0$ and $1^{-\alpha}=\exp0=1$. The constant value is therefore $1$, that is $(1+x)^{-\alpha}B(x)=1$ for every $|x|<1$. Multiplying by the real power $(1+x)^{\alpha}$ and using the addition law of [L16] at the real exponents $\alpha$ and $-\alpha$, which gives $(1+x)^{\alpha}(1+x)^{-\alpha}=(1+x)^0=\exp\bigl(0\cdot\log(1+x)\bigr)=1$, yields $B(x)=(1+x)^\alpha$ for every $|x|<1$. [L3, L11, L16, L18, step 1.3, step 6.1, algebra]

8.1 By step 1.2, applied to $B$ on $(-1,1)$, this is the Maclaurin expansion of $(1+x)^\alpha$; its coefficients are the recursively defined numbers $\binom{\alpha}{n}=c_n$ of the statement. That notation extends the library's binomial coefficient rather than clashing with it: when $\alpha=m$ is a nonnegative integer, step 2.1 identifies $c_n$ with the count $\binom mn$ of [L20]. The argument makes no assertion at $x=1$ or $x=-1$. [L1, L20, step 1.2, step 2.1, step 3.1, step 7.1]

9.1 Combining steps 2.3 and 8.1 proves all the displayed expansions with no additional endpoint claims. [step 2.3, step 8.1] ∎

## Remarks

**Which symbol is which.** Three symbols in the statement name objects the
library builds separately, and each is matched to its own definition rather than
to a near neighbour.

$e^x$ is the real power of [[def-real-power]], not the series that defines
$\exp$: [[def-real-exponential-function-and-e]] defines $\exp$ and defines $e$
only as $\exp(1)$. Step 1.1 supplies the bridge, from $\log e=1$.

The exponent in $(1+x)^\alpha$ is real, so that power too is
$\exp\bigl(\alpha\log(1+x)\bigr)$, whereas the exponent in the finite binomial
theorem is a natural number and the $(1+x)^m$ appearing there is the integer
power of [[def-integer-power]]. Step 2.1 proves the two readings agree on
$(-1,1)$; without that they are different functions with the same name.

For real $\alpha$ the symbol $\binom{\alpha}{n}$ is defined by the recurrence in
the statement, while $\binom nk$ elsewhere in the library is a count
([[def-binomial-coefficient]]). Step 2.1 proves the recurrence reproduces the
count at a nonnegative integer $\alpha$, so the notation extends rather than
overloads.

Two power conventions coexist here without conflict, and it is worth saying
which is used where. The integer power fixes $0^0=1$, which is what makes a
power series equal its constant coefficient at the centre; the real power leaves
$0^0$ undefined and is only ever applied above to bases $1+x>0$, $1$, and $e$.

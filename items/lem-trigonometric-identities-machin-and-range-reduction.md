---
id: lem-trigonometric-identities-machin-and-range-reduction
kind: lemma
title: Trigonometric identities, Machin's formula and reduced Taylor tails
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-real-elementary-functions-and-domains, lem-mean-value-theorem-on-closed-interval, lem-range-reduced-exp-log-and-arctan-series-enclosures, lem-derivative-algebra-and-chain-rules, lem-power-series-termwise-differentiation, lem-archimedean-property-from-completeness, lem-real-and-complex-modulus-rules, lem-elementary-power-series-converge-uniformly-on-bounded-sets, lem-absolutely-convergent-series-cauchy-product]
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Rump, Rigorous and Portable Standard Functions, §7"
      url: "https://www.tuhh.de/ti3/paper/rump/Ru01b.pdf"
    - title: "Michael C. Colding, MIT 18.100B Real Analysis, Lecture 15: Derivatives; Laws for Differentiation"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec15.pdf"
    - title: "Michael C. Colding, MIT 18.100B Real Analysis, Lecture 22: Differentiating and Integrating Power Series"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec22.pdf"
    - title: "Kearfott, Interval Computations: Introduction, Uses, and Resources, §1"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
---

## Statement

The power-series sine and cosine satisfy the addition identities and
$\sin^2x+\cos^2x=1$. For $A(t)=\arctan t$ from
[[def-real-elementary-functions-and-domains]],
$$
\sin(A(t))=t\cos(A(t)),\qquad \cos(A(t))>0,
$$
so $A(t)$ is the inverse tangent with values in $(-\pi/2,\pi/2)$ when
$\pi=4A(1)$. It is odd; for $u,v\ge0$ with $uv<1$,
$A(u)+A(v)=A((u+v)/(1-uv))$; and for $t>0$,
$A(t)=\pi/2-A(1/t)$. In particular $\sin(\pi/2)=1$ and
$\cos(\pi/2)=0$. Also,
$$
\pi=16\arctan(1/5)-4\arctan(1/239).
$$
For every real $x$ there is an integer $k$ and $r=x-k\pi/2$ with
$|r|\le\pi/4$; the sine and cosine of $x$ are obtained from those of $r$ by
the quarter-period identities. For every real $r$ with $|r|\le1$ and every
$N\ge0$, truncating sine
through degree $2N+1$ and cosine through degree $2N$ gives absolute tail bounds
$$
T_s=\frac{|r|^{2N+3}}{(2N+3)!(1-|r|^2/((2N+4)(2N+5)))}
$$
and
$$
T_c=\frac{|r|^{2N+2}}{(2N+2)!(1-|r|^2/((2N+3)(2N+4)))}.
$$

## Facts & Assumptions

**Given:** The power-series definitions in
[[def-real-elementary-functions-and-domains]], the arctangent tail in
[[lem-range-reduced-exp-log-and-arctan-series-enclosures]], and the mean value
theorem in [[lem-mean-value-theorem-on-closed-interval]].

[L1] [[def-real-elementary-functions-and-domains]]: sine and cosine are the
factorial-denominator power series; $A(t)=\int_0^t du/(1+u^2)$; and
$\pi=4A(1)$. The integral has the local Darboux constant-comparison and
average-value derivative properties.

[L2] [[lem-range-reduced-exp-log-and-arctan-series-enclosures]]: the
arctangent series on $[-1/2,1/2]$ has a remainder tending to zero with its
truncation order.

[L3] [[lem-mean-value-theorem-on-closed-interval]]: for $u<v$ a continuous
$h$ differentiable on $(u,v)$ has $w\in(u,v)$ with
$h(v)-h(u)=h'(w)(v-u)$.

[L4] [[lem-derivative-algebra-and-chain-rules]]: differentiability implies
continuity, and sum, product, quotient and composition derivatives follow
from the difference-quotient definition.

[L5] [[lem-power-series-termwise-differentiation]]: inside its radius of
convergence, a power series with absolutely convergent derivative series has
the termwise derivative.

[L6] [[lem-archimedean-property-from-completeness]]: the natural numbers are
unbounded above.

[L7] [[lem-real-and-complex-modulus-rules]]: real absolute value is
multiplicative, satisfies the triangle inequality, and is nonnegative.

[L8] [[lem-elementary-power-series-converge-uniformly-on-bounded-sets]]:
the factorial series and their derivative series converge absolutely and
uniformly on bounded intervals, and geometric tails have finite bounds.

[L9] [[lem-absolutely-convergent-series-cauchy-product]]: the product of two
absolutely convergent series equals their Cauchy product, grouped by total
degree.

## Proof

1.1 On each bounded square, the factorial series and their tails converge uniformly by [L8]. Their Cauchy products are absolutely convergent and can be grouped by total degree by [L9]. For sine, the coefficient of $x^r y^s$ in $\sin(x+y)$ vanishes when $r+s$ is even and otherwise equals $(-1)^{(r+s-1)/2}/(r!s!)$, by the binomial theorem; the same coefficient appears in $\sin x\cos y+\cos x\sin y$. For cosine, the coefficient in $\cos(x+y)$ vanishes when $r+s$ is odd and otherwise equals $(-1)^{(r+s)/2}/(r!s!)$, matching $\cos x\cos y-\sin x\sin y$. Thus both addition identities hold. [given, L1, L7, L8, L9, algebra]

1.2 On every bounded interval, [L8] gives absolute convergence of the factorial coefficient series and their derivative series. Applying [L5] to the two power series gives $\sin'=\cos$ and $\cos'=-\sin$. By the product rule in [L4], the derivative of $\sin^2x+\cos^2x$ is zero; [L3] and its value $1$ at zero give $\sin^2x+\cos^2x=1$. [given, L1, L3, L4, L5, L7, L8, algebra]

2.1 Write $A(t)=\arctan t$, $S(t)=\sin A(t)$ and $C(t)=\cos A(t)$. From [L1], the difference quotient for $A$ is the average of the continuous integrand $1/(1+u^2)$ over the interval from $t$ to $t+h$, so $A'(t)=1/(1+t^2)$. By the preceding sine and cosine identity and the chain and product rules [L4], $g(t)=S(t)-tC(t)$ satisfies $g'(t)=t g(t)/(1+t^2)$ and $g(0)=0$. The quotient rule [L4] gives $(g(t)^2/(1+t^2))'=0$. By [L3], this quotient is constant on every interval between $0$ and $t$, hence zero; therefore $g(t)=0$. Now $C(t)^2=1/(1+t^2)$ by the preceding sine and cosine identity, and $C'(t)=-tC(t)/(1+t^2)$. Put $q(t)=\sqrt{1+t^2}$. Since $q(t)\ge0$ and $q(t)^2\ge1$, it follows that $q(t)\ge1$: otherwise $(1-q(t))(1+q(t))>0$ would imply $q(t)^2<1$. The same holds at $t+h$. For $h$ near zero, rationalization gives $$|q(t+h)-q(t)| =\frac{|h|\,|2t+h|}{q(t+h)+q(t)} \le\frac{|h|(2|t|+|h|)}2\longrightarrow0.$$ Thus $q$ is continuous, and the rationalized difference quotient $(q(t+h)-q(t))/h=(2t+h)/(q(t+h)+q(t))$ tends to $t/q(t)$; hence $q'(t)=t/q(t)$. The product rule [L4] gives $(q(t)C(t))'=0$, so [L3] implies $q(t)C(t)$ is constant on every segment between $0$ and $t$. Its value at zero is $1$, hence $C(t)=1/q(t)>0$. For $t>0$ and $0\le u\le t$, the integrand satisfies $1/(1+u^2)\ge1/(1+t^2)$. Constant comparison for the integral [L1] gives $A(t)\ge t/(1+t^2)>0$. Also $A'(t)=1/(1+t^2)$, so $H(t)=A(t)+A(1/t)$ has derivative $$ H'(t)=\frac1{1+t^2}-\frac1{t^2}\frac1{1+1/t^2}=0. $$ By [L3], $H$ is constant on the positive segment between $1$ and $t$; $H(1)=2A(1)$. Therefore $A(t)=2A(1)-A(1/t)$ for every $t>0$, and the positivity just proved shows $0<A(t)<2A(1)$. Similarly, the derivative of $A(-t)+A(t)$ is zero and its value at zero is zero, so [L3] gives $A(-t)=-A(t)$ for every real $t$. Since $\pi/2=2A(1)$, these bounds yield $A(t)\in(-\pi/2,\pi/2)$ for all real $t$ and $\tan A(t)=t$. At $t=1$, $S(1)=C(1)>0$ and step 1.2 gives both equal $1/\sqrt2$; the addition identities yield $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$. [given, L1, L3, L4, L7, step 1.2, algebra]

3.1 For $u,v\ge0$ with $uv<1$, define $H(v)=A(u)+A(v)-A((u+v)/(1-uv))$. Differentiating with the inverse-tangent derivative formula and the chain rule [L4], the derivative of the last term is $$ \frac{(1+u^2)/(1-uv)^2}{1+((u+v)/(1-uv))^2}=\frac1{1+v^2}, $$ which is also $A'(v)$. Thus $H'(v)=0$ and $H(0)=0$; [L3] gives $A(u)+A(v)=A((u+v)/(1-uv))$. Set $\alpha=A(1/5)$ and $\beta=A(1/239)$. This identity gives $2\alpha=A(5/12)$, then $4\alpha=A(120/119)$, and also $\beta+A(1)=A(120/119)$. Hence $4\alpha=\beta+A(1)$ and $16\alpha-4\beta=4A(1)=\pi$. [step 2.1, L3, L4, L7, algebra]

3.2 Put $q=2x/\pi$. By [L6], choose an integer $n>|q|+1$. Among the finite ordered list $-n,-n+1,\ldots,n$, take its greatest member $k_0\le q$; then $k_0\le q<k_0+1$. At least one of $k_0,k_0+1$ is within $1/2$ of $q$; call it $k$. Since $0<1/(1+u^2)\le1$ on $[0,1]$, integral comparison [L1] and step 2.1 give $0<A(1)\le1$, hence $\pi/4=A(1)\le1$. Therefore the residual $r=x-k\pi/2$ satisfies $|r|\le\pi/4\le1$. Repeated application of the addition identities in step 1.1 and the values proved in step 2.1 gives the quarter-period sign and swap formulas. [L1, L6, L7, step 1.1, step 2.1, choose, algebra]

4.1 Since $1/5$ and $1/239$ lie in $[0,1/2]$, [L2] gives rational intervals for $\alpha$ and $\beta$ with the displayed tail widths. Multiplying those intervals by $16$ and $4$ and using the exact identity in step 3.1 gives a certified rational interval for $\pi$; increasing the truncation count decreases both tail bounds. [step 3.1, L2, construct]

5.1 Fix any $|r|\le1$ and $N\ge0$. The sine terms after degree $2N+1$ have first omitted magnitude $|r|^{2N+3}/(2N+3)!$ and each later ratio is at most $|r|^2/((2N+4)(2N+5))<1$. Summing this geometric majorant gives $T_s$. The cosine terms after degree $2N$ have first omitted magnitude $|r|^{2N+2}/(2N+2)!$ and ratio at most $|r|^2/((2N+3)(2N+4))<1$, giving $T_c$. [given, L7, L8, algebra] ∎


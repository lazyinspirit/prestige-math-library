---
id: lem-clarkson-inequalities-for-real-and-complex-lp
kind: lemma
title: Clarkson inequalities in both exponent ranges
status: draft
origin: pipeline
deps: [def-conjugate-exponents, def-real-power, def-natural-logarithm, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, thm-real-power-laws, thm-real-power-continuity-and-derivatives, thm-natural-logarithm-laws, thm-logarithm-derivative-and-integral, thm-algebra-of-derivatives, thm-chain-rule, thm-monotonicity-from-the-derivative, thm-intermediate-value, thm-holder-finite-real-exponents, def-calligraphic-l-p-on-a-measure-space, def-complex-lp-and-euclidean-test-function-conventions, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, thm-complex-holder-minkowski-and-the-quotient-norm, prop-order-and-scalar-rules-for-the-nonnegative-integral, cor-additivity-of-the-nonnegative-lebesgue-integral]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Kuriyama, Miyagi, Okada and Miyoshi, Elementary proof of Clarkson's inequalities and their generalization"
      url: "https://petit.lib.yamaguchi-u.ac.jp/15815/files/149739"
      locator: "Lemmas 2.1–2.4 and Theorem 2.5, pp. 120–121; Lemma 3.1 and Theorems 3.2 and 3.4, pp. 122–124"
---

## Statement

Let $(S,\mathcal A,\mu)$ be a measure space, let $1<p<\infty$, and let
$f,g\in L^p(\mu)$ over either $\mathbb R$ or $\mathbb C$.

1. If $p\ge2$, then
   $$\left\|\frac{f+g}{2}\right\|_p^p+\left\|\frac{f-g}{2}\right\|_p^p\le \frac{\|f\|_p^p+\|g\|_p^p}{2}.$$
2. If $1<p\le2$ and $q=p/(p-1)$, then
   $$\left\|\frac{f+g}{2}\right\|_p^q+\left\|\frac{f-g}{2}\right\|_p^q\le\left(\frac{\|f\|_p^p+\|g\|_p^p}{2}\right)^{q/p}.$$

At $p=2$ both formulas are the same equality.

## Facts & Assumptions

**Given:** A measure space $(S,\mathcal A,\mu)$, a real number $1<p<\infty$, and $f,g\in L^p(\mu;\mathbb K)$ for $\mathbb K=\mathbb R$ or $\mathbb C$.

[F1] For $1<p<\infty$, the conjugate exponent is $q=p/(p-1)$ and satisfies $1/p+1/q=1$ ([[def-conjugate-exponents]]).

[F2] Real powers on positive bases obey the product, quotient, and iterated power laws; $x\mapsto x^a$ is continuous and differentiable on $(0,\infty)$ with derivative $ax^{a-1}$ ([[def-real-power]], [[thm-real-power-laws]], [[thm-real-power-continuity-and-derivatives]]).

[F3] The natural logarithm is the inverse of the exponential, is continuous and strictly increasing, obeys the product and quotient laws, and has derivative $1/x$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]]).

[F4] The sum, product, quotient, and chain rules compute derivatives; the sign of a derivative on an interval gives the corresponding monotonicity, and a continuous real function takes every intermediate value ([[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[thm-monotonicity-from-the-derivative]], [[thm-intermediate-value]]).

[F5] For conjugate finite exponents $r,s>1$, two-term Hölder gives $$|a_1b_1|+|a_2b_2|\le (|a_1|^r+|a_2|^r)^{1/r}(|b_1|^s+|b_2|^s)^{1/s}.$$ ([[thm-holder-finite-real-exponents]])

[F6] For $z=a+ib$, one has $|z|=(a^2+b^2)^{1/2}$, $|zw|=|z||w|$, and $|z|=0$ exactly when $z=0$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]).

[F7] Real and complex $L^p$ consist of a.e. classes of measurable representatives with $$\|h\|_p^p=\int_S|h|^p\,d\mu\qquad(1\le p<\infty),$$ and addition, subtraction, scalar multiplication, and the norm are representative-independent ([[def-calligraphic-l-p-on-a-measure-space]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]], [[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F8] The nonnegative integral is order preserving and positively homogeneous, and it is additive on two nonnegative measurable functions ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

## Proof

**Proof technique:** prove the two scalar Clarkson estimates, then integrate; in the lower exponent range a two-coordinate Hölder calculation replaces an undeclared vector-valued Minkowski theorem.

1.1 Suppose $p\ge2$ and let $r=p/2\ge1$.  For $u,v\ge0$, first $u^r+v^r\le(u+v)^r$: if $u+v>0$, divide by $(u+v)^r$ and use $0\le t\le1\Rightarrow t^r\le t$ for $t=u/(u+v)$ and $1-t=v/(u+v)$; the zero case is equality.  Also $(u+v)^r\le2^{r-1}(u^r+v^r)$. For $r=1$ this is equality.  For $r>1$, apply [F5] with conjugate $r$ and $r/(r-1)$ to $(u,v)$ and $(1,1)$, then raise to the $r$th power. [F2, F4, F5]

1.2 Suppose $1<p<2$ and put $q=p/(p-1)>2$.  For $0\le t\le1$, define $$\Phi(t)=\frac{\big((1+t)^q+(1-t)^q\big)^{1/q}}{(1+t^p)^{1/p}}.$$ We will prove $\Phi(t)\le2^{1/q}$.  Set $\alpha=p-1$ and $\beta=1/(q-1)$; by [F1], $0<\alpha=\beta<1$.  For $0<t<1$, put $$G_1(t)=1-t^{2\alpha}-\alpha\beta t^{\alpha-1}+\alpha\beta t^{\alpha+1}$$ and $$H(t)=(\alpha+1)\beta t^2-2t^{\alpha+1}+(1-\alpha)\beta.$$ Direct differentiation gives $$G_1'(t)=\alpha t^{\alpha-2}H(t),\qquad H'(t)=2(\alpha+1)t(\beta-t^{\alpha-1})<0. \tag{2}$$ because $t^{\alpha-1}>1>\beta$.  The estimate $H(t)>0$ holds whenever $2t^{\alpha+1}<(1-\alpha)\beta$, while $H(1)=2(\beta-1)<0$.  Continuity, [F4], and strict decrease therefore give a unique $t_0\in(0,1)$ at which $H$ vanishes.  Thus $G_1$ increases before $t_0$ and decreases after it. [F1, F2, F4]

1.3 Suppose $1<p<2$, put $q=p/(p-1)$, $r=q/p>1$, and $s=r/(r-1)$.  For measurable representatives of $f,g$, let $$A=|f+g|^p,\quad B=|f-g|^p,\quad U=\int_S A\,d\mu,\quad V=\int_S B\,d\mu,$$ and $M=(U^r+V^r)^{1/r}$.  These numbers are finite by [F7].  If $M=0$, the inequality below is immediate.  If $M>0$, set $$\lambda=(U/M)^{r-1},\qquad \eta=(V/M)^{r-1}.$$ Then $\lambda^s+\eta^s=1$ and $M=\lambda U+\eta V$.  Two-term Hölder [F5], applied pointwise to $(\lambda,\eta)$ and $(A,B)$, gives $$M=\int_S(\lambda A+\eta B)\,d\mu\le\int_S(A^r+B^r)^{1/r}\,d\mu. \tag{7}$$ [F1, F2, F5, F7, F8]

2.1 For real or complex scalars $a,b$, [F6] and coordinate expansion give the scalar parallelogram identity $$|a+b|^2+|a-b|^2=2(|a|^2+|b|^2).$$ Apply both inequalities of step 1.1, first to $u=|a+b|^2,v=|a-b|^2$ and then to $u=|a|^2,v=|b|^2$.  Since $2r=p$, this yields $$|a+b|^p+|a-b|^p\le2^{p-1}(|a|^p+|b|^p). \tag{1}$$ [step 1.1, F2, F6]

2.2 For every sufficiently small $t>0$, $$G_1(t)\le1+\alpha\beta-\alpha\beta t^{\alpha-1}<0;$$ for example the final inequality holds whenever $t^{1-\alpha}<\alpha\beta/(1+\alpha\beta)$.  On the other hand $G_1(1)=0$, and strict decrease on $(t_0,1)$ gives $G_1(t)>0$ there. Consequently continuity and the monotonicity from step 1.2 give a unique $t_1\in(0,t_0)$ such that $G_1<0$ on $(0,t_1)$ and $G_1>0$ on $(t_1,1)$. [step 1.2, F2, F4]

3.1 Define, for $0<t<1$, $$G_2(t)=\log(1+t)+\beta\log(1-t^\alpha)-\log(1-t)-\beta\log(1+t^\alpha).$$ Using [F2]–[F4] and simplifying over the positive common denominator gives $$G_2'(t)=\frac{2G_1(t)}{(1-t^2)(1-t^{2\alpha})}. \tag{3}$$ For every $\varepsilon>0$, $0<t<\varepsilon^{1/\alpha}$ implies $0<t^\alpha<\varepsilon$; hence $t^\alpha\to0$ as $t\downarrow0$, and logarithm continuity proves that $G_2$ extends continuously by $G_2(0)=0$.  By step 2.2 it first strictly decreases and then strictly increases.  It eventually becomes positive: the derivative test applied to $1-t^\alpha-\alpha(1-t)$ gives $1-t^\alpha\ge\alpha(1-t)$, while $1+t^\alpha\le2$; hence $$\frac{1+t}{1-t}\left(\frac{1-t^\alpha}{1+t^\alpha}\right)^\beta\ge \left(\frac\alpha2\right)^\beta(1-t)^{\beta-1}>1$$ whenever $0<1-t<(\alpha/2)^{\beta/(1-\beta)}$.  By the logarithm and real-power laws, the logarithm of the left side is $G_2(t)$, so it is positive there. Thus [F4] gives a unique $t_2\in(t_1,1)$ such that $G_2<0$ on $(0,t_2)$ and $G_2>0$ on $(t_2,1)$. [step 2.2, F2, F3, F4]

3.2 Choose measurable representatives of $f$ and $g$; every pointwise inequality below is unchanged by modifying them on a null set.  If $p\ge2$, integrate (1), use [F7]–[F8], and divide by $2^p$: $$\left\|\frac{f+g}{2}\right\|_p^p+\left\|\frac{f-g}{2}\right\|_p^p\le\frac{\|f\|_p^p+\|g\|_p^p}{2}.$$ The integrals are finite because $f\pm g\in L^p$ by the normed-space structure in [F7]. [step 2.1, F7, F8]

4.1 Put $$G_3(t)=(1+t)^{q-1}(1-t^{p-1})-(1-t)^{q-1}(1+t^{p-1}).$$ The two terms are positive.  Since $\log$ is strictly increasing, the sign of $G_3$ is the sign of the logarithm of their ratio, namely $$ (q-1)\log(1+t)+\log(1-t^{p-1})-(q-1)\log(1-t)-\log(1+t^{p-1})=(q-1)G_2(t). $$ Another direct differentiation gives $$\Phi'(t)=\frac{\big((1+t)^q+(1-t)^q\big)^{1/q-1}}{(1+t^p)^{1+1/p}}G_3(t). \tag{4}$$ The prefactor is positive.  Step 3.1 therefore shows that $\Phi$ decreases and then increases, so its maximum on $[0,1]$ is at an endpoint.  Finally $$\Phi(0)=2^{1/q},\qquad \Phi(1)=\frac2{2^{1/p}}=2^{1-1/p}=2^{1/q}.$$ This proves $$\big((1+t)^q+(1-t)^q\big)^{1/q}\le2^{1/q}(1+t^p)^{1/p}. \tag{5}$$ [step 3.1, F1, F2, F3, F4]

5.1 For arbitrary real $a,b$, the unordered pair $\{|a+b|,|a-b|\}$ equals $\{|a|+|b|,\,||a|-|b||\}$.  After swapping the two moduli and, when the larger one is nonzero, dividing by it, (5) gives $$ (|a+b|^q+|a-b|^q)^{1/q}\le2^{1/q}(|a|^p+|b|^p)^{1/p}. \tag{6}$$ The case $a=b=0$ is immediate. [step 4.1, F2]

5.2 The same estimate holds for complex $a,b$.  The case where either is zero follows directly, so swap them if necessary and suppose $|a|\ge|b|>0$.  Put $w=b/a$, $r=|w|\le1$, and $x=|\operatorname{Re}w|\le r$; the last inequality follows from $r^2=(\operatorname{Re}w)^2+(\operatorname{Im}w)^2$. The two terms below swap if $\operatorname{Re}w$ changes sign, so $$|1+w|^q+|1-w|^q=(1+r^2+2x)^{q/2}+(1+r^2-2x)^{q/2}.$$ For $0\le c\le1$, let $$K(c)=(1+r^2+2rc)^{q/2}+(1+r^2-2rc)^{q/2}.$$ Its derivative is $$K'(c)=qr\left((1+r^2+2rc)^{q/2-1}-(1+r^2-2rc)^{q/2-1}\right)\ge0.$$ Thus $K(x/r)\le K(1)=(1+r)^q+(1-r)^q$.  Apply (5) to $r$, then multiply by $|a|$ using [F6], to obtain (6) over $\mathbb C$ as well. [step 4.1, F2, F4, F6]

6.1 Raise the complex-or-real scalar estimate (6) to the $p$th power. Since $pr=q$, it says pointwise that $$ (A^r+B^r)^{1/r}\le2^{p/q}(|f|^p+|g|^p). $$ Use this in (7), then use [F7]–[F8]: $$\big(\|f+g\|_p^q+\|f-g\|_p^q\big)^{p/q}\le2^{p/q}(\|f\|_p^p+\|g\|_p^p).$$ Raising to $q/p$ gives a factor $2$.  Dividing by $2^q$ and using $1-q=-q/p$ yields $$\left\|\frac{f+g}{2}\right\|_p^q+\left\|\frac{f-g}{2}\right\|_p^q\le\left(\frac{\|f\|_p^p+\|g\|_p^p}{2}\right)^{q/p}.$$ [step 1.3, step 5.1, step 5.2, F1, F2, F7, F8]

7.1 Step 3.2 proves the first claim, and step 6.1 proves the second for $1<p<2$.  At $p=2$ one has $q=2$, and the scalar parallelogram identity in step 2.1 integrates to equality, so the overlapping endpoint belongs to both claims and the two displayed formulas coincide.  The empty measure space, zero measure, and zero functions cause no exception: all their norms and all terms above are zero. [step 2.1, step 3.2, step 6.1, F1, F7, F8] ∎

## Source notes

Kuriyama–Miyagi–Okada–Miyoshi prove the real one-variable maximum through their Lemmas 2.1–2.4 and Theorem 2.5, then pass to complex scalars and $L^p$ in Theorems 3.2 and 3.4.  Steps 1.2, 2.2, 3.1, and 4.1 reproduce the derivative-sign argument rather than treating that strategy as proof text.  Step 5.2 rewrites their phase calculation using $|\operatorname{Re}w|/|w|$, and step 1.3 spells out the two-coordinate Hölder duality behind the required integral inequality.

---
id: lem-ip-sparse-gaussian-extremal-profile
kind: lemma
title: Sparse Gaussian scalar certificate and extremal profile
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-real-exponential-function-and-e
  - def-hyperbolic-functions
  - lem-exponential-series-has-infinite-radius
  - thm-termwise-differentiation-of-a-real-power-series
  - thm-hyperbolic-identities-and-derivatives
  - thm-real-power-laws
  - thm-real-power-continuity-and-derivatives
  - thm-intermediate-value
  - lem-continuous-functions-riemann-integrable
  - thm-cauchy-schwarz-finite
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: No choice principle is used. The inverse is unique, and the upper bound uses fixed finite coordinate windows before taking numerical limits.
sources:
  references:
    - title: "Yuri I. Ingster and Irina A. Suslina, Minimax nonparametric hypothesis testing for ellipsoids and Besov bodies, ESAIM Probability and Statistics 4 (2000), pp. 87–100"
      url: https://www.numdam.org/article/PS_2000__4__53_0.pdf
---

## Statement

Let $0<q<2$, $\alpha,\beta>0$, $s=\alpha+\beta$, $L=qs-2\beta>0$, and $\kappa=L/(2-q)$. For $z>0$ define
$$a(z)=\frac{z^2\sinh(z^2)-q(\cosh(z^2)-1)}{(2-q)z^2},\qquad b(z)=\frac{z^2\sinh(z^2)-2(\cosh(z^2)-1)}{(2-q)z^q},\qquad \phi(z)=\frac{b(z)}{a(z)}.$$
Both $a$ and $b$ are positive, and for every $v\in\mathbb R$,
$$\cosh(zv)-1\ge a(z)v^2-b(z)|v|^q,$$
with equality at $v=0,z,-z$. The function $\phi:(0,\infty)\to(0,\infty)$ is continuous and strictly increasing onto its target. Put
$$z(x)=\phi^{-1}(x^L),\qquad \psi(z)=\frac1{2a(z)},\qquad d(x)=x^{2\beta}\psi(z(x))\quad(x>0).$$
For $C=[6(2-q)]^{1/(6-q)}$, its endpoint asymptotics are
$$z(x)\sim Cx^{L/(6-q)},\quad \psi(z)\sim z^{-2}\ (z\downarrow0),\quad d(x)\sim C^{-2}x^{2\beta-2L/(6-q)}\quad(x\downarrow0),$$
$$z(x)\sim x^\kappa,\quad \psi(z)\sim(2-q)e^{-z^2}\ (z\to\infty),\quad d(x)\sim(2-q)x^{2\beta}e^{-z(x)^2}\quad(x\to\infty).$$
There is a constant $C_1$ depending only on the parameters such that
$$\psi(z)z^2\le C_1,\quad \psi(z)(e^{z^2}-1)\le C_1\quad(z>0),\qquad \psi(z)^2(e^{z^2}-1)\le C_1e^{-z^2}\quad(z\ge1).$$
The following improper integrals are finite and positive:
$$c_0=\int_0^\infty d(x)^2(\cosh(z(x)^2)-1)\,dx,\quad c_1=\int_0^\infty d(x)z(x)^2x^{2\beta}\,dx,\quad c_2=\int_0^\infty d(x)z(x)^qx^{qs}\,dx,$$
$$M_1=\int_0^\infty x^{4\beta}d(x)z(x)^4\,dx,\qquad M_2=\int_0^\infty x^{2qs}d(x)z(x)^{2q}\,dx,$$
and $c_0=(c_1-c_2)/2$.

For positive real $n,h_0$, set $z_i=z(i/n)$ and $h_i=h_0d(i/n)$. Then $\sum_i h_i<\infty$, and for every finite real vector $(v_i)_{i\le m}$,
$$\sum_{i\le m}h_i(\cosh(z_iv_i)-1)\ge\frac{h_0}2\left(n^{-2\beta}\sum_{i\le m}i^{2\beta}v_i^2-n^{-qs}\sum_{i\le m}i^{qs}|v_i|^q\right).$$
As $n\to\infty$, the Riemann sums of the five displayed integral integrands, divided by $n$, converge to their respective integrals. In particular,
$$\sum_i h_i^2(\cosh(z_i^2)-1)\sim c_0h_0^2n,\quad \sum_i i^{2\beta}h_iz_i^2\sim c_1h_0n^{2\beta+1},\quad \sum_i i^{qs}h_iz_i^q\sim c_2h_0n^{qs+1},$$
$$\sum_i i^{4\beta}h_iz_i^4\sim M_1h_0n^{4\beta+1},\qquad \sum_i i^{2qs}h_iz_i^{2q}\sim M_2h_0n^{2qs+1}.$$

Let $\varepsilon>0$, $r>0$, and define the relaxed extremal value
$$J_\varepsilon(r)=\inf\left\{\sum_{i\ge1}g_i^2(\cosh(w_i^2)-1):\ 0\le g_i\le1,\ w_i\ge0,\ \sum_i i^{2\beta}g_iw_i^2\ge r^2\varepsilon^{-2},\ \sum_i i^{qs}g_iw_i^q\le\varepsilon^{-q}\right\}.$$
Choose $n,h_0>0$ by
$$c_1h_0n^{2\beta+1}=r^2\varepsilon^{-2},\qquad c_2h_0n^{qs+1}=\varepsilon^{-q},\qquad U^2=c_0h_0^2n.$$
Whenever $\varepsilon\downarrow0$, $r\to0$, $n\to\infty$, and $h_0\to0$, one has $J_\varepsilon(r)\sim U^2$. Writing
$$A=2\alpha+1/q-1/2,\qquad B=2s+1/q,\qquad D=\alpha+\beta(1-2/q)=L/q,$$
this gives
$$\sqrt{J_\varepsilon(r)}\sim c\varepsilon^{-A/D}r^{B/D},\qquad c=\frac{\sqrt{c_0}}{c_1}\left(\frac{c_1}{c_2}\right)^{-(2\beta+1/2)/L}>0.$$
The sufficient condition $n\to\infty$, $h_0\to0$ is equivalent to
$$r=o(\varepsilon^{a_c}),\qquad a_c=\frac{q\alpha+1-q/2}{q(\alpha+\beta)+1}.$$
The free coefficients $h_i$ need not be at most one. The upper bound on $J_\varepsilon$ is realized asymptotically by finitely supported feasible pairs, constructed by truncating the profile to compact coordinate windows and adjusting $n,h_0$. No probability statement or unrestricted all-radius power asymptotic is asserted.

## Statement references

[Ingster and Suslina, *Minimax nonparametric hypothesis testing for ellipsoids and Besov bodies*, scalar and profile calculations in §§6.2–6.5](https://www.numdam.org/article/PS_2000__4__53_0.pdf)

## Facts & Assumptions

**Given:** The positive parameters, scalar functions, profiles, integrals, and extremal problem in the Statement. All improper integrals and nonnegative series are interpreted as increasing limits of finite truncations.

[F1] [[def-real-exponential-function-and-e]], [[lem-exponential-series-has-infinite-radius]], and [[def-hyperbolic-functions]] give absolutely convergent exponential and hyperbolic series. [[thm-termwise-differentiation-of-a-real-power-series]] permits their differentiation on compact real intervals.

[F2] [[thm-hyperbolic-identities-and-derivatives]] gives the hyperbolic identities, derivatives, and exponential representations. [[thm-real-power-laws]] and [[thm-real-power-continuity-and-derivatives]] give positive-base real-power arithmetic, continuity, and differentiation.

[F3] [[thm-intermediate-value]] supplies values of a continuous function between its endpoint values, without an additional choice assumption.

[F4] [[lem-continuous-functions-riemann-integrable]] supplies the Riemann integral, comparison, and compact-interval upper and lower sums for continuous functions.

[F5] [[thm-cauchy-schwarz-finite]] supplies Cauchy–Schwarz for every finite real array; inequalities for nonnegative infinite series follow by increasing finite truncations.

## Proof

1.1 Put $w=z^2$. The hyperbolic series give $$w\sinh w-q(\cosh w-1)=\sum_{k\ge1}\frac{(2k-q)w^{2k}}{(2k)!}.$$ Every coefficient is positive because $q<2$. Replacing $q$ by $2$ makes only the first coefficient zero and leaves every later coefficient positive. The positive denominators in $a,b$ therefore prove $a(z),b(z)>0$. [F1, given, algebra]

2.1 For fixed $z>0$ and $v>0$, put $f(v)=(\cosh(zv)-1-a(z)v^2)/v^q$. Differentiation and the absolutely convergent series show that $$\frac{f'(v)}{v^{1-q}}=\sum_{k\ge1}\frac{(2k-q)z^{2k}v^{2k-2}}{(2k)!}-(2-q)a(z).$$ This expression is strictly increasing in $v$: its terms with $k\ge2$ have strictly positive coefficients and positive powers. It is zero at $v=z$ by the definition of $a$. Consequently $f$ decreases to $z$ and increases after $z$. Direct substitution gives $f(z)=-b(z)$, so $\cosh(zv)-1\ge a(z)v^2-b(z)v^q$. Evenness proves the assertion for negative $v$, and direct substitution proves equality at $0,z,-z$. [F1, F2, step 1.1, algebra]

2.2 The quotient representation of $\phi$ in the Statement is continuous. To prove strict increase, write its numerator series before the factor $z^{2-q}$ as $P(w)=\sum_{k\ge1}p_kw^{2k}$ and its denominator as $Q(w)=\sum_{k\ge1}q_kw^{2k}$, where $p_k=(2k-2)/(2k)!$ and $q_k=(2k-q)/(2k)!$. The ratios $p_k/q_k=(2k-2)/(2k-q)$ strictly increase with $k$. Pairing terms with indices $k>\ell$ in $P'Q-PQ'$ gives positive multiples of $(k-\ell)(p_kq_\ell-p_\ell q_k)w^{2k+2\ell-1}$, so this derivative numerator is positive for $w>0$. The products and paired sums are justified first for finite partial sums and then by absolute convergence on compact intervals. Thus $P/Q$ is strictly increasing; multiplying it by the positive strictly increasing function $z^{2-q}$ proves that $\phi$ is strictly increasing. [F1, F2, step 1.1, algebra]

3.1 The first nonzero numerator and denominator terms are $w^4/12$ and $(2-q)w^2/2$, respectively. Hence $$\phi(z)\sim\frac{z^{6-q}}{6(2-q)}\quad(z\downarrow0).$$ The exponential representations instead give $\phi(z)\sim z^{2-q}$ as $z\to\infty$, since the ratio of its two bracketed expressions tends to one. Thus its endpoint limits are zero and infinity. Strict increase and [F3] give exactly one inverse value at each positive target. The inverse is continuous: values on either side of its value have images on either side of the target, which is the epsilon-delta criterion for the inverse at that target. The inverse power asymptotics follow by trapping $\phi(z)$ between $(1\pm\eta)$ times its stated positive leading power and then taking the corresponding positive roots. [F1, F2, F3, step 2.2, algebra]

4.1 Expanding $a$ at zero gives $a(z)\sim z^2/2$, so $\psi(z)\sim z^{-2}$. At infinity, $a(z)\sim e^{z^2}/[2(2-q)]$, so $\psi(z)\sim(2-q)e^{-z^2}$. Combining these with the inverse asymptotics in step 3.1 proves all endpoint formulas for $z(x)$ and $d(x)$. In particular $z(x)$ is comparable to $x^\kappa$ at infinity. The functions $\psi(z)z^2$ and $\psi(z)(e^{z^2}-1)$ have finite limits at zero and infinity; continuity bounds them also on the intervening compact interval. Similarly $e^{z^2}\psi(z)^2(e^{z^2}-1)$ is bounded for $z\ge1$, proving the three global bounds. [F1, F2, F4, step 3.1, algebra]

5.1 The definitions give $d(x)a(z(x))=x^{2\beta}/2$ and $d(x)b(z(x))=x^{qs}/2$, since $\phi(z(x))=x^L$ and $L+2\beta=qs$. Also $a(z)z^2-b(z)z^q=\cosh(z^2)-1$. Thus $$d(x)^2(\cosh(z(x)^2)-1)=\frac12\left(d(x)z(x)^2x^{2\beta}-d(x)z(x)^qx^{qs}\right).$$ Near zero the integrands for $c_1,c_2,c_0$ are asymptotic to positive constants times $x^{4\beta}$, $x^{4\beta+4L/(6-q)}$, and $x^{4\beta}$, respectively; those for $M_1,M_2$ have respective exponents $6\beta+2L/(6-q)$ and $6\beta+10L/(6-q)$. All these exponents exceed $-1$. At infinity each integrand is bounded by $C x^m e^{-c x^{2\kappa}}$ for suitable positive $C,c$ and some nonnegative $m$. This envelope is integrable: choosing an integer $k$ with $2\kappa k>m+2$ and using $e^{cx^{2\kappa}}\ge (cx^{2\kappa})^k/k!$ bounds it by a constant times $x^{-2}$ for large $x$. The integral of $x^{-2}$ on $[b,R]$ is $1/b-1/R$ by the compact fundamental theorem in [F4], and is bounded as $R\to\infty$. The small-$x$ power bounds likewise integrate to $a^{p+1}/(p+1)$ when $p>-1$. Compact intervals are covered by [F4]. The five improper integrals therefore exist, are finite, and are positive. Integrating the pointwise identity proves $c_0=(c_1-c_2)/2>0$. [F1, F2, F4, step 4.1, algebra]

6.1 For fixed $n,h_0>0$, the large-$x$ bound $d(x)\le Cx^{2\beta}e^{-cx^{2\kappa}}$ makes $\sum_i h_0d(i/n)$ finite by comparison with a convergent power tail. There are only finitely many remaining indices, including those close to zero. Multiplying the pointwise inequality of step 2.1 by $h_i$ and using $h_ia(z_i)=h_0(i/n)^{2\beta}/2$ and $h_ib(z_i)=h_0(i/n)^{qs}/2$ proves the finite-vector scalar certificate in the Statement. This argument places no upper bound on the score coefficient $h_i$. [step 2.1, step 4.1, step 5.1, algebra]

6.2 Let $f$ be any of the five integral integrands in step 5.1. On a fixed $[a,b]\subset(0,\infty)$, its mesh-$1/n$ sums converge to its integral by trapping the sums between compact-interval upper and lower sums from [F4]; the two endpoint pieces have lengths at most $1/n$ and bounded values. For small $x$, $f(x)\le Cx^p$ with one of the positive exponents $p$ in step 5.1, so $$\frac1n\sum_{i/n<a}f(i/n)\le C\left(a^{p+1}+\frac{a^p}{n}\right).$$ At infinity use the envelope $g(x)=Cx^m e^{-cx^{2\kappa}}$, increasing $m,C$ if necessary. Its derivative has the sign of $m-2c\kappa x^{2\kappa}$, so it is eventually decreasing. Consequently its discrete tail is bounded by its integral tail plus one mesh term. First let $n\to\infty$, then $a\downarrow0$ and $b\to\infty$. These two tail bounds prove the five full Riemann limits. Substituting $h_i=h_0d(i/n)$ gives all five scaled sum equivalents, irrespective of how the positive factor $h_0$ varies with $n$. [F2, F4, step 5.1, algebra]

7.1 The two scaling equations have the unique positive solution $$n^L=\frac{c_1}{c_2}\frac{\varepsilon^{2-q}}{r^2},\qquad h_0=\frac{r^2\varepsilon^{-2}}{c_1n^{2\beta+1}}.$$ Let $V=\sum_i h_i^2(\cosh(z_i^2)-1)$. Step 6.2 gives $V\sim U^2=c_0h_0^2n$ whenever $n\to\infty$. For any feasible relaxed pair $(g_i,w_i)$ of finite cost $W$, expansion of the positive kernel gives $$\cosh(zw)-1=\sum_{k\ge1}\frac{z^{2k}w^{2k}}{(2k)!}.$$ Apply [F5] to the arrays with entries $h_i z_i^{2k}/\sqrt{(2k)!}$ and $g_i w_i^{2k}/\sqrt{(2k)!}$ for finitely many $i,k$, and increase the truncations. It follows that $$\sum_i h_ig_i(\cosh(z_iw_i)-1)\le\sqrt{VW}.$$ This is a deterministic kernel inequality, with no Gaussian probability space. [F1, F5, step 5.1, step 6.2, algebra]

8.1 Multiply the scalar certificate in step 2.1 at $v=w_i$ by $h_ig_i$ and sum up to an index $m$. Step 7.1 bounds the left side by $\sqrt{VW}$, and the partial budget is at most $\varepsilon^{-q}$. The partial energy is therefore bounded above independently of $m$ by the resulting inequality, so its full sum is finite. Increasing $m$ now yields $$\sqrt{VW}\ge\frac{h_0}2\left(n^{-2\beta}r^2\varepsilon^{-2}-n^{-qs}\varepsilon^{-q}\right)=\frac{h_0^2n}2(c_1-c_2)=U^2.$$ Thus every finite-cost feasible pair has $W\ge U^4/V$, and infinite-cost pairs do not lower the infimum. Hence $J_\varepsilon(r)\ge U^4/V\sim U^2$. [step 2.1, step 5.1, step 7.1, given, algebra]

8.2 Fix numbers $0<a<b<\infty$ and $0<\eta<1$. Write $c_{j,[a,b]}$ for the integral defining $c_j$ restricted to $[a,b]$, for $j=0,1,2$. These constants are positive. Choose $n',h_0'>0$ from $$c_{1,[a,b]}h_0'(n')^{2\beta+1}=(1+\eta)r^2\varepsilon^{-2},\qquad c_{2,[a,b]}h_0'(n')^{qs+1}=(1-\eta)\varepsilon^{-q}.$$ Division gives $$\frac{n'}n=\left(\frac{c_{1,[a,b]}/c_{2,[a,b]}}{c_1/c_2}\frac{1-\eta}{1+\eta}\right)^{1/L},\qquad \frac{h_0'}{h_0}=(1+\eta)\frac{c_1}{c_{1,[a,b]}}\left(\frac n{n'}\right)^{2\beta+1}.$$ For this fixed window and margin these ratios are fixed positive constants. Hence $n'\to\infty$ and $h_0'\to0$ under the claimed hypotheses. [F2, F4, step 7.1, construct, algebra]

9.1 Put $g_i=h_0'd(i/n')$ and $w_i=z(i/n')$ when $a\le i/n'\le b$, and set both to zero otherwise. There are finitely many nonzero coordinates. The compact-window maximum of $d$ is finite, so eventually $0\le g_i\le1$. Compact Riemann convergence gives actual energy $(1+\eta+o(1))r^2\varepsilon^{-2}$ and actual budget $(1-\eta+o(1))\varepsilon^{-q}$, hence eventual feasibility. Its cost divided by $U^2$ tends to $$\frac{c_{0,[a,b]}}{c_0}\left(\frac{h_0'}{h_0}\right)^2\frac{n'}n.$$ As $a\downarrow0$, $b\to\infty$, and $\eta\downarrow0$, this expression tends to one by step 5.1 and the explicit ratios in step 8.2. For any fixed positive tolerance one may first fix a sufficiently wide window and small margin, and then take sufficiently small $\varepsilon$. This proves $\limsup J_\varepsilon(r)/U^2\le1$ without choosing an infinite family of windows. With step 8.1 it proves $J_\varepsilon(r)\sim U^2$. In particular, no untruncated claim that $h_0d(i/n)\le1$ has been used. [F4, step 5.1, step 6.2, step 8.1, step 8.2, construct, algebra]

10.1 Substituting the value of $n$ from step 7.1 into $U=\sqrt{c_0}h_0\sqrt n$ gives $$U=\frac{\sqrt{c_0}}{c_1}\left(\frac{c_1}{c_2}\right)^{-(2\beta+1/2)/L}\varepsilon^{-[2q\alpha+1-q/2]/L}r^{(2qs+1)/L}.$$ Since $D=L/q$, this is precisely the stated power with exponents $A/D$ and $B/D$. Similarly $$h_0^L=C_2r^{2(qs+1)}\varepsilon^{-(2q\alpha+2-q)}$$ for a parameter-only $C_2>0$, so $h_0\to0$ is equivalent to $r=o(\varepsilon^{a_c})$. Finally $$a_c-\frac{2-q}2=\frac{qL}{2(qs+1)}>0.$$ Thus this condition also forces $n\to\infty$ by the formula for $n^L$, while $n\to\infty$ and $h_0\to0$ plainly include $h_0\to0$. This proves the asserted equivalence, the restricted power asymptotic, and all remaining claims. [F2, step 6.1, step 7.1, step 9.1, algebra] ∎

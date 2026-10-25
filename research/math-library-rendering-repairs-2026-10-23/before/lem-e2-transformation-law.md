---
id: lem-e2-transformation-law
kind: lemma
title: "The transformation law of the weight-two Eisenstein series E_2"
status: published
origin: pipeline
deps:
  - def-level-one-eisenstein-series
  - lem-lipschitz-formula-for-the-lattice-sum
  - lem-lattice-eisenstein-sums-converge
  - thm-mittag-leffler-expansion-of-pi-cotangent
  - thm-complex-trigonometric-and-hyperbolic-power-series
  - thm-double-series-fubini
  - thm-direct-comparison-test
  - thm-nonnegative-series-bounded-partial-sums
  - thm-p-series-rational
  - thm-complex-exponential-is-entire-with-derivative-itself
  - lem-absolute-convergence-implies-convergence
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - thm-weierstrass-m-test-for-complex-function-series
  - thm-ftc-second-part
  - thm-ratio-test
  - thm-differentiation-under-dominated-improper-multiple-integrals
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-21.md"
      - "research/frontier-38-owner-30-alpha-batch-21-5a.md"
      - "research/frontier-38-owner-30-step5-hash-21-post-5a.json"
    content_sha256: "3a65272348a7ae7c0f7ffec5ced6993ab92490599e5358721b3324ece0956866"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Proposition 6, equations (18)-(21), printed pp. 19-20; full proof including the sum-minus-integral estimate and I'(0)=-pi."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Section 5.4, printed pp. 98–104: background on modular forms. These notes do not supply the E2 regularisation law; that argument is Zagier Proposition 6."
proof_strategy: direct
---

## Statement

The weight-two Eisenstein series $E_2(\tau)=1-24\sum_{n\ge1}\sigma_1(n)q^n$ satisfies $E_2(\tau+1)=E_2(\tau)$ and, for every $\gamma=\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)\in SL_2(\mathbb Z)$,
$$E_2\!\left(\frac{a\tau+b}{c\tau+d}\right)=(c\tau+d)^2E_2(\tau)-\frac{6ic}{\pi}(c\tau+d).$$
In particular $E_2(-1/\tau)=\tau^2E_2(\tau)-\frac{6i}{\pi}\tau$, so $E_2$ is not a modular form of weight $2$.

## Facts & Assumptions

**Given:** The series $E_2=1-24\sum_{n\ge1}\sigma_1(n)q^n$, $q=e^{2\pi i\tau}$, and its half-normalisation $H:=(\pi^2/6)E_2$, all on $\mathfrak H$ ([[def-level-one-eisenstein-series]], [[def-unit-disc-upper-half-plane-and-blaschke-factor]]).

[F1] $\pi\cot(\pi z)=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2}$ with local uniform convergence on $\mathbb C\setminus\mathbb Z$ ([[thm-mittag-leffler-expansion-of-pi-cotangent]]), and $\sin w=w-\frac{w^3}{6}+O(w^5)$, $\cos w=1-\frac{w^2}{2}+O(w^4)$ ([[thm-complex-trigonometric-and-hyperbolic-power-series]]).

[F2] Lipschitz: for $\tau\in\mathfrak H$, $\sum_{n\in\mathbb Z}(\tau+n)^{-2}=(-2\pi i)^2\sum_{r\ge1}rq^r=-4\pi^2\sum_{r\ge1}rq^r$, absolutely on the left ([[lem-lipschitz-formula-for-the-lattice-sum]]).

[F3] On every compact $K\subseteq\mathfrak H$ there is $c_K>0$ with $|mz+n|\ge c_K\max(|m|,|n|)$ for all $(m,n)\ne(0,0)$ and $z\in K$ This estimate is derived locally: if $\Im z\ge y_0>0$, $|\Re z|\le X$, then $|m|\le|mz+n|/y_0$ and $|n|\le|mz+n|+X|m|\le(1+X/y_0)|mz+n|$, so one may take $c_K=\min(y_0,(1+X/y_0)^{-1})$.

[F4] The $M$-test gives uniform convergence of a series dominated by a summable real majorant, which may depend on a parameter ([[thm-weierstrass-m-test-for-complex-function-series]]); comparison with a convergent $p$-series and bounded monotone partial sums give convergence of positive series ([[thm-direct-comparison-test]], [[thm-p-series-rational]], [[thm-nonnegative-series-bounded-partial-sums]]); an absolutely summable double family may be regrouped and reindexed ([[thm-double-series-fubini]], [[lem-absolute-convergence-implies-convergence]]).

[F5] If $G$ is differentiable on $[n,n+1]$ with integrable $G'=f$, then $\int_n^{n+1}f=G(n+1)-G(n)$; consequently $|f(n)-\int_n^{n+1}f|\le2\sup_{[n,n+1]}|f'|$ ([[thm-ftc-second-part]]).

[F6] If $\varphi(t,\varepsilon)$ and $\partial_\varepsilon\varphi(t,\varepsilon)$ are continuous on $\mathbb R\times I$, one slice is absolutely integrable, and $\partial_\varepsilon\varphi$ is dominated on each compact interval of $\varepsilon$ by a $t$-integrable function, then $\Phi(\varepsilon)=\int_{\mathbb R}\varphi(t,\varepsilon)dt$ is differentiable with $\Phi'(\varepsilon)=\int_{\mathbb R}\partial_\varepsilon\varphi(t,\varepsilon)dt$ ([[thm-differentiation-under-dominated-improper-multiple-integrals]]).

## Proof

1.1 We first record $\zeta(2)=\pi^2/6$. By [F1], $\pi\cot(\pi z)=\frac1z-2z\sum_{n\ge1}\frac{1}{n^2-z^2}$ for $z\notin\mathbb Z$; for $|z|\le1/2$ one has $\frac{1}{n^2-z^2}=\frac1{n^2}+\frac{z^2}{n^2(n^2-z^2)}$ with $\frac{|z|^2}{n^2|n^2-z^2|}\le\frac{2|z|^2}{n^4}$, so $\sum_{n\ge1}\frac{2z}{z^2-n^2}=-2z\sum_{n\ge1}\frac1{n^2}+O(z^3)$ by [F4] and $\pi\cot(\pi z)=\frac1z-2z\sum_{n\ge1}n^{-2}+O(z^3)$. On the other hand [F1] gives $\pi\cot(\pi z)=\pi\frac{\cos\pi z}{\sin\pi z}=\pi\frac{1-(\pi z)^2/2+O(z^4)}{\pi z-(\pi z)^3/6+O(z^5)}=\frac1z-\frac{\pi^2}{3}z+O(z^3)$. Comparing coefficients of $z$ and using $\sum n^{-2}>0$ gives $\sum_{n\ge1}n^{-2}=\pi^2/6$. [F1, F4, given, algebra]

2.1 With $q=e^{2\pi i\tau}$ and $|q|<1$, [F2] gives $\sum_{n\in\mathbb Z}(m\tau+n)^{-2}=-4\pi^2\sum_{r\ge1}rq^{mr}$ for each $m\ge1$, so $\sum_{m\ge1}\sum_{n\in\mathbb Z}(m\tau+n)^{-2}=-4\pi^2\sum_{m,r\ge1}rq^{mr}=-4\pi^2\sum_{n\ge1}\sigma_1(n)q^n$, the last step regrouping the absolutely summable family $(r q^{mr})_{m,r\ge1}$ by $n=mr$ [F4]. Hence, by 1.1, $$H(\tau)=\zeta(2)+\sum_{m\ge1}\sum_{n\in\mathbb Z}(m\tau+n)^{-2}.$$ For $\varepsilon>0$ define the regularised series $H_\varepsilon(z):=\frac12\sum'_{(m,n)\ne(0,0)}(mz+n)^{-2}|mz+n|^{-2\varepsilon}$; pairing $(m,n)$ with $(-m,-n)$ and writing $f_{m,\varepsilon}(t):=(mz+t)^{-2}|mz+t|^{-2\varepsilon}$, we have $H_\varepsilon(z)=\zeta(2+2\varepsilon)+\sum_{m\ge1}\sum_{n\in\mathbb Z}f_{m,\varepsilon}(n)$, and this family is absolutely summable for $\varepsilon>0$: on a compact $K$ with $c=c_K$, the shell of pairs with $\max(|m|,|n|)=j$ has $8j$ elements each bounded by $(cj)^{-2-2\varepsilon}$, so the shell sum is $8c^{-2-2\varepsilon}j^{-1-2\varepsilon}$, summable: compare with $j^{-1-r}$ for a rational $0<r<2\varepsilon$ and apply [F4]. [F2, F3, F4, step 1.1, given, algebra]

3.1 The regularised series satisfies $H_\varepsilon(\gamma\tau)=(c\tau+d)^2|c\tau+d|^{2\varepsilon}H_\varepsilon(\tau)$ for every $\gamma=\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)\in SL_2(\mathbb Z)$. Indeed $m\gamma\tau+n=\frac{m'\tau+n'}{c\tau+d}$ with $(m',n')=(ma+nc,\,mb+nd)$, and $(m,n)\mapsto(m',n')$ is a bijection of $\mathbb Z^2$ because its matrix $\bigl(\begin{smallmatrix}a&c\\b&d\end{smallmatrix}\bigr)$ has determinant $ad-bc=1$; since $(m\gamma\tau+n)^{-2}|m\gamma\tau+n|^{-2\varepsilon}=(c\tau+d)^2|c\tau+d|^{2\varepsilon}(m'\tau+n')^{-2}|m'\tau+n'|^{-2\varepsilon}$, the absolutely summable family of 2.1 may be reindexed and regrouped by [F4], giving the displayed law. [F3, F4, step 2.1, given, algebra]

4.1 Fix $\tau\in\mathfrak H$, $y:=\operatorname{Im}\tau>0$, and $m\ge1$. Set $I_\varepsilon(m\tau):=\int_{\mathbb R}f_{m,\varepsilon}(t)\,dt$ and $A_m(\varepsilon):=\sum_{n\in\mathbb Z}\bigl[f_{m,\varepsilon}(n)-\int_n^{n+1}f_{m,\varepsilon}(t)\,dt\bigr]$. The improper integral $I_\varepsilon(m\tau)$ is the sum over $n\in\mathbb Z$ of $\int_n^{n+1}f_{m,\varepsilon}$, so $\sum_nf_{m,\varepsilon}(n)=I_\varepsilon(m\tau)+A_m(\varepsilon)$, and summing over $m$ gives the exact identity $H_\varepsilon(\tau)=\zeta(2+2\varepsilon)+\sum_{m\ge1}A_m(\varepsilon)+\sum_{m\ge1}I_\varepsilon(m\tau)$ for $\varepsilon>0$. The substitution $m\tau+t=my(u+i)$ shows $I_\varepsilon(m\tau)=(my)^{-1-2\varepsilon}I(\varepsilon)$ with $I(\varepsilon):=\int_{\mathbb R}(u+i)^{-2}(1+u^2)^{-\varepsilon}du$. Finally $\sum_{m\ge1}A_m(\varepsilon)$ converges uniformly for $\varepsilon\in[-1/4,1/4]$: by [F5], $|f_{m,\varepsilon}(n)-\int_n^{n+1}f_{m,\varepsilon}|\le2\sup_{[n,n+1]}|f'_{m,\varepsilon}|$, and differentiating the product gives $|f'_{m,\varepsilon}(t)|\le(2+2|\varepsilon|)|m\tau+t|^{-3-2\varepsilon}$; on $[n,n+1]$ the quantity $|m\tau+t|$ is comparable to $|m\tau+n|$ (their difference has modulus at most $1$, and $|m\tau+t|\ge\operatorname{Im}m\tau=my$; for $|m\tau+n|>2$ this gives comparison, and only finitely many $n$ fail it for a given $m$, none at all once $my>2$), so the absolute sum of all row differences is dominated uniformly in $\varepsilon$ by a constant times $\sum_{j\ge1}8j\,j^{-5/2}<\infty$ using [F3] and [F4]. The double series is thus uniformly convergent by the M-test; each row difference is continuous in $\varepsilon$, and regrouping into $A_m$ preserves the limit. [F3, F4, F5, step 3.1, given, algebra]

5.1 We let $\varepsilon\to0^+$. First, $\zeta(2+2\varepsilon)\to\zeta(2)$: for $0<\varepsilon\le1/4$ and every $N$, $|\sum_n n^{-2-2\varepsilon}-\sum_nn^{-2}|\le\sum_{n\le N}|n^{-2-2\varepsilon}-n^{-2}|+2\sum_{n>N}n^{-2}$, and the inner estimate is as small as desired for $N$ large and then $\varepsilon$ small. Second, $\sum_{m\ge1}A_m(\varepsilon)\to\sum_{m\ge1}A_m(0)$ because the convergence is uniform on $[-1/4,1/4]$ by 4.1 and each $A_m$ is continuous in $\varepsilon$; and $A_m(0)=\sum_{n\in\mathbb Z}(m\tau+n)^{-2}$ because $I_0(m\tau)=\int_{\mathbb R}(m\tau+t)^{-2}dt=0$, the primitive being $-(m\tau+t)^{-1}$. Third, $I(0)=\int_{\mathbb R}(u+i)^{-2}du=0$ (same primitive) and $I'(0)=-\int_{\mathbb R}(u+i)^{-2}\log(1+u^2)\,du=-\pi$: the differentiation is licensed by [F6] separately on real and imaginary parts, with base slice $\varepsilon=0$ absolutely integrable (its modulus is $(1+u^2)^{-1}$), since for $|\varepsilon|\le1/4$ the $\varepsilon$-difference quotients of $(u+i)^{-2}(1+u^2)^{-\varepsilon}$ are bounded by $(1+u^2)^{-3/4}\log(1+u^2)$, which is integrable on $\mathbb R$, and a primitive of $-\log(1+t^2)/(t+i)^2$ is $\frac{1+\log(1+t^2)}{t+i}-\arctan t$, whose endpoint difference is $-\pi$. Fourth, by [F5] and [F4] the decreasing function $t\mapsto t^{-1-2\varepsilon}$ satisfies $\int_1^\infty t^{-1-2\varepsilon}dt\le\sum_{m\ge1}m^{-1-2\varepsilon}\le1+\int_1^\infty t^{-1-2\varepsilon}dt$, that is $\sum_{m\ge1}m^{-1-2\varepsilon}=\frac1{2\varepsilon}+O(1)$. Hence $\sum_{m\ge1}I_\varepsilon(m\tau)=y^{-1-2\varepsilon}I(\varepsilon)\sum_{m\ge1}m^{-1-2\varepsilon}\to\frac1y\cdot(-\frac{\pi}{2})=-\frac{\pi}{2y}$ as $\varepsilon\to0^+$, and therefore $H_\varepsilon(\tau)\to H(\tau)-\frac{\pi}{2y}$, using 2.1, 4.1 and $2\varepsilon\to0$. [F4, F5, F6, step 2.1, step 4.1, given, algebra]

6.1 Taking $\varepsilon\to0^+$ in 3.1 and using 5.1 with $|c\tau+d|^{2\varepsilon}\to1$, $$H(\gamma\tau)-\frac{\pi}{2\operatorname{Im}(\gamma\tau)}=(c\tau+d)^2\Bigl(H(\tau)-\frac{\pi}{2y}\Bigr).$$ Since $\operatorname{Im}(\gamma\tau)=y/|c\tau+d|^2$, this rearranges to $H(\gamma\tau)=(c\tau+d)^2H(\tau)+\frac{\pi}{2y}\bigl(|c\tau+d|^2-(c\tau+d)^2\bigr)$. Writing $w:=c\tau+d$ we have $w^2-|w|^2=w(w-\overline w)=2ic y\,w$, so the correction is $-\pi ic(c\tau+d)$ and $H(\gamma\tau)=(c\tau+d)^2H(\tau)-\pi ic(c\tau+d)$. Multiplying by $6/\pi^2$ proves the stated transformation law; $E_2(\tau+1)=E_2(\tau)$ is immediate from $E_2(\tau+1)=1-24\sum\sigma_1(n)q^n=E_2(\tau)$; and at $\gamma=S$, where $c=1$ and $d=0$, the law reads $E_2(-1/\tau)=\tau^2E_2(\tau)-\frac{6i}{\pi}\tau$, which differs from $\tau^2E_2(\tau)$ for $\tau\ne0$, so $E_2$ is not a modular form of weight $2$. [step 3.1, step 5.1, given, algebra] ∎

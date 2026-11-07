---
id: lem-hecke-prime-zero-detector-with-padded-offset
kind: lemma
title: An exact prime-ideal zero detector with a padded Kolesnik–Straus offset
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-hecke-local-zero-mass-and-higher-logarithmic-derivatives
- lem-kolesnik-straus-offset-power-sum-lower-bound
- def-complex-exponential
- def-real-exponential-function-and-e
- thm-complex-exponential-addition-and-real-extension
- thm-natural-logarithm-laws
- thm-logarithm-derivative-and-integral
- thm-real-power-continuity-and-derivatives
- thm-real-power-laws
- thm-ftc-second-part
- lem-continuous-functions-riemann-integrable
- lem-riemann-integral-linearity
- thm-geometric-series
- def-axiom-of-choice
- def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: AC and CountableChoice retain the actual Hecke/canonical-product branch;
  finite prime pieces and explicitly bounded scalar tails suffice for integrations.
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the
      Chebotarev density theorem
    url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
    locator: §5C–5E, printed1162–1167, full cached proof read. Local reconstruction
      uses a padded exact offset to handle rounding and all positive scaled distances
      above a fixed absolute minimum without invoking an unproved Weiss-density shortcut.
---

## Statement

Assume AC and Countable Choice. Set $\alpha=3/20$, $\eta=1/1000$, $b=\alpha/[4e(1+\alpha)]$, $A_1=2b^{-\alpha}(1+\eta)$, $A=\sqrt{A_1^2-1}$, $K_0=100$, and $\lambda_0=1/16{,}000{,}000$. Put
$$B=4A\log\left(\frac{8e(1+\alpha)}\alpha\,2^{1/\alpha}\right).$$
Let $K,n,D,Q,T,\chi,\delta_\chi,\Theta,\mathcal L$ satisfy the local Hecke zero-mass lemma, in particular $\Theta\ge100$. For $0<r\le1/(20A_1)$ set $\lambda=r\mathcal L$ and assume $\lambda\ge\lambda_0$. Define
$$L_0=2A\lambda+8,\quad k_- =L_0/\alpha+K_0,\quad k_+=(1+\alpha)L_0/\alpha+K_0,\quad Y_\lambda=\frac{k_-}{eA_1\lambda},\quad X_\lambda=4\log(4A_1)\frac{k_+}{\lambda},\quad y=e^{Y_\lambda\mathcal L},\quad x=e^{X_\lambda\mathcal L}.$$
There is an absolute effective $c_0>0$ such that whenever $|t|\le T$ and $L(s,\chi)$ has a nontrivial zero $\rho$ with $|1+it-\rho|\le r$,
$$r^4\log(x/y)\int_y^x\left|\sum_{y\le N\mathfrak p<u}\frac{\chi(\mathfrak p)\log N\mathfrak p}{(N\mathfrak p)^{1+it}}\right|^2\frac{du}{u}+\delta_\chi\mathbf1_{|t|<Ar}\ge c_0e^{-B\lambda}.$$
The integral is a finite-piece compact Riemann integral. Uniformly for $\lambda\ge\lambda_0$, $X_\lambda,Y_\lambda$ are bounded above by absolute effective constants and $X_\lambda>Y_\lambda>4.7$. Also $A_1<3.89$, $A<3.76$, $(1001/1000)A_1<4$, and $(1001/1000)B<146.7$. No successful derivative index is selected as a function of $t$.

## Facts & Assumptions

**Given:** The fixed constants and actual primitive-character data in the Statement. Write $F=L'/L$ and $E_k(v)=v^k/k!$.

[F1] The preceding local Hecke lemma supplies the completed-zero count $N_\chi(u;1+r+it)\le2u\mathcal L+4$, exact derivative localization with error $32\,2^k\mathcal L$, the absolutely convergent Euler derivative identity, and $P_1(w)=\sum_{N\mathfrak p\le w}\log N\mathfrak p/N\mathfrak p\le3(\log w+\mathcal L)$ for $w\ge e$. [[lem-hecke-local-zero-mass-and-higher-logarithmic-derivatives]]

[F2] For an integer offset $m\ge0$ and a specified finite list of $N\ge1$ complex nodes, the exact Kolesnik–Straus lemma gives an integer $h\in[m+1,m+N]$ with $|\sum z_j^h|\ge1.007(N/[4e(m+N)])^N(\max|z_j|)^h$, including repetitions. [[lem-kolesnik-straus-offset-power-sum-lower-bound]]

[F3] Exponential is its factorial power series with its real addition law; real positive powers, logarithmic laws and logarithmic differentiation apply. Geometric sums have their scalar tails. [[def-complex-exponential]] [[def-real-exponential-function-and-e]] [[thm-complex-exponential-addition-and-real-extension]] [[thm-natural-logarithm-laws]] [[thm-logarithm-derivative-and-integral]] [[thm-real-power-continuity-and-derivatives]] [[thm-real-power-laws]] [[thm-geometric-series]]

[F4] Continuous compact functions have linear Riemann integrals, order and FTC. Finite step discontinuities are handled by subdivision into their continuous pieces and arbitrarily short endpoint intervals. [[thm-ftc-second-part]] [[lem-continuous-functions-riemann-integrable]] [[lem-riemann-integral-linearity]]

[A1] AC and CC retain the actual Hecke and zero-product branch; no successful index is chosen as a function of the ordinate. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 We bind the fixed numerical constants by explicit elementary inequalities. The exponential series gives $163/60<e<87/32$. Since $1/b=(92/3)e$, this places it between $3749/45$ and $667/8$. The rational inequalities $(1940/1001)^{20}<(3749/45)^3$ and $(667/8)^3<(1945/1001)^{20}$ then give $3.88<A_1<3.89$, by monotonicity of positive powers. Squaring gives $3.74<A<3.76$. Also $\log(1/b)<553/125$: the positive sum $\sum_{j=0}^{20}(553/125)^j/j!$ is greater than $667/8$. Finite integration of the geometric series for $2/(1-v^2)$ on $[0,1/3]$ gives $$\log2\le2\sum_{j=0}^6\frac{(1/3)^{2j+1}}{2j+1}+\frac{2(1/3)^{15}}{15(1-1/9)}<\frac{1733}{2500}.$$ These displayed rational comparisons are exact finite integer comparisons after clearing denominators. Hence $\log(1/b)+(23/3)\log2<9.74$ and $$\frac{1001}{1000}B<4\frac{94}{25}\frac{1001}{1000}\frac{487}{50}<146.7.$$ Likewise $2A/(\alpha eA_1)>2(187/50)/[(3/20)(87/32)(389/100)]>4.7$ and $(1001/1000)A_1<4$. Thus $Y_\lambda>4.7$. The ratio $X_\lambda/Y_\lambda=4eA_1\log(4A_1)k_+/k_->1$, and both cutoffs are bounded above for $\lambda\ge\lambda_0$, since $k_\pm$ are affine functions of $\lambda$. All constants and their bounds are effective. [F3, F4, given, algebra]

2.1 Put $w=1+it$, $z=1+r+it$ and let $\mathcal B=\{\rho\in\mathcal Z_\chi:|w-\rho|\le Ar\}$. Its occurrence count $N$ is positive, since $A>1$ and the target nontrivial zero is in the disc; it is at most $2A\lambda+4\le L_0$ by [F1]. Take $m=\lceil L_0/\alpha\rceil+K_0$. Apply [F2] to the finite nodes $(z-\rho)^{-1}$, with multiplicity, and put $k=h-1$. Then $k_-\le k\le k_+$, including the ceiling errors exactly. The target supplies a node of modulus at least $1/(2r)$. For fixed $m$, the function $(v/[4e(m+v)])^v$ decreases for $v>0$, since its logarithmic derivative is $-\log(4e)-\log(1+m/v)+m/(m+v)<0$. Using $N\le L_0$, $m\le L_0/\alpha+K_0+1$ and $\log(1+x)\le x$, we obtain $$\left|\sum_{\rho\in\mathcal B}\frac{r^{k+1}}{(z-\rho)^{k+1}}\right|\ge c_K b^{L_0}2^{-k-1},\qquad c_K=1.007\exp\left(-\frac{(K_0+1)\alpha}{1+\alpha}\right).$$ No offset rounding is dropped, and the cost $c_K$ is independent of $\lambda$. [A1, F1, F2, F3, step 1.1, construct, algebra]

3.1 The remaining zeros with $Ar<|w-\rho|<1/2$ satisfy $|z-\rho|>A_1r$, because $|z-\rho|^2=|w-\rho|^2+r^2+2r(1-\operatorname{Re}\rho)$. Their distances from $z$ are all less than $1/2+r<3/4$. For this finite submultiset its counting function at distance $u$ is at most $4u\mathcal L+8$ for every $u\ge A_1r$: below $3/4$ this follows from [F1], and above it extend the count constantly. The identity $d^{-k-1}=(k+1)\int_d^\infty u^{-k-2}du$ and finite summation therefore bound their normalized absolute power sum by $[4(1+1/k)A_1\lambda+8]A_1^{-k-1}$. The far/gamma error in [F1], multiplied by $r^{k+1}$, is at most $32\lambda(2r)^k\le32\lambda A_1^{-k}$, since $2rA_1\le1/10$. The normalized principal pole is at most one if $|t|<Ar$, and otherwise at most $A_1^{-k-1}$. Thus the combined localization, intermediate-zero and outside-pole errors are at most $50(\lambda+1)A_1^{-k}$. [F1, F3, F4, step 2.1, algebra]

3.2 If $\delta_\chi\mathbf1_{|t|<Ar}=1$, the final lower bound is immediate once $c_0\le1$, so assume it is zero. Use [F1]'s Euler derivative identity and split its ideal sum into primes below $y$, primes in $[y,x)$, primes at least $x$, and proper prime powers. The factorial lower bound $k!\ge(k/e)^k$ follows by comparing $\sum_{j=1}^k\log j$ with $\int_1^k\log u\,du$. Hence $E_k(v)\le A_1^{-k}e^v$ for $v\le k/(eA_1)$. For $v\ge4\log(4A_1)k$, use $1+\log s-s/4\le\log4$ (its maximum occurs at $s=4$) to obtain $E_k(v)\le A_1^{-k}e^{v/2}$. The definitions of $Y_\lambda,X_\lambda$ ensure these respective conditions for primes below $y$ and at least $x$. The bound $P_1(u)\le3(\log u+\mathcal L)$ of [F1] then gives errors at most $3\lambda(Y_\lambda+1)A_1^{-k}$ and $3[\lambda(X_\lambda+1)+2]A_1^{-k}$: for the second, finite Abel summation followed by its explicit power tail gives $\sum_{N\mathfrak p\ge x}(\log N\mathfrak p)(N\mathfrak p)^{-1-r/2}\le3x^{-r/2}(\log x+\mathcal L+2/r)$. All cutoffs exceed $e$ by step 1.1 and $\mathcal L\ge100$. [F1, F3, F4, step 1.1, step 2.1, construct, algebra]

4.1 For proper prime powers, $E_k(r\log N\mathfrak a)\le(2r)^k(N\mathfrak a)^{1/2}$ follows by comparing one term with the exponential series. The geometric sum over exponents $j\ge2$ is at most $4(N\mathfrak p)^{-1-2r}$, since $1-2^{-1/2}>1/4$. The positive Euler series and the trivial bound in the proof of [F1] therefore give a total at most $4(\lambda+1)(2r)^k\le4(\lambda+1)A_1^{-k}$. For the middle primes put $W(u)=\sum_{y\le N\mathfrak p<u}\chi(\mathfrak p)\log N\mathfrak p/(N\mathfrak p)^{1+it}$. Finite Abel summation with $f(v)=e^{-v}E_k(v)$ gives an absolute bound $r^2\int_y^x|W(u)|du/u$ plus the boundary term $r|W(x)|x^{-r}E_k(r\log x)$. Here $|f'(v)|\le e^{-v}(E_{k-1}(v)+E_k(v))\le1$, and the boundary term is at most $3\lambda(X_\lambda+1)A_1^{-k}$. No endpoint prime is lost: the middle interval is $[y,x)$, the large-prime interval includes $x$, and $W(y)=0$. [F1, F3, F4, step 3.2, algebra]

5.1 We give a uniform numerical error ledger. Since $A<4$, $eA_1>10$ and $4\log(4A_1)<12$, one has $\lambda Y_\lambda\le(54\lambda+54+K_0)/10$ and $\lambda X_\lambda<12(62\lambda+62+K_0)$. Thus the two errors of step 3.2 are at most $20(\lambda+K_0+1)A_1^{-k}$ and $2250(\lambda+K_0+1)A_1^{-k}$; the middle boundary in step 4.1 is at most the latter bound. Together with step 3.1 and the prime-power error, their sum is less than $10000(\lambda+K_0+1)A_1^{-k}$. Relative to the lower bound in step 2.1, this is at most $$\frac{20000}{1.007}e^{\alpha/(1+\alpha)}e^{-\kappa K_0}(\lambda+K_0+1)e^{-c\lambda},\quad\kappa=-\alpha\log b-\frac\alpha{1+\alpha},\quad c=\frac{2A}\alpha\log(1+\eta).$$ The fixed bounds give $\kappa>23/50$: $1/b>80$, $e^4<(11/4)^4<80$, and $\alpha/(1+\alpha)=3/23<7/50$. Also $c>49/1001$, because $2A/\alpha>49$ and $\log(1+1/1000)>1/1001$. Therefore $1/c<21$ and $(\lambda+K_0+1)e^{-c\lambda}\le K_0+1+1/c<122$. With $K_0=100$ the ratio is less than $60000\cdot122\,e^{-46}<1/2$, using $e>2$ and $2^{24}=16777216>2\cdot60000\cdot122$. Every bound is independent of the field and the ordinate. [F3, F4, step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, algebra]

6.1 Combine steps 2.1–5.1 in the non-pole branch to obtain $r^2\int_y^x|W(u)|du/u\ge c_Kb^{L_0}2^{-k-2}$. Compact weighted Cauchy–Schwarz follows by integrating $(|W|-v)^2/u\ge0$ and using the discriminant; all functions are continuous on finitely many prime-norm pieces. It gives the stated squared-integral lower bound with $$c_0=c_K^2\,2^{-2K_0-4}d^{16},\qquad d=b\,2^{-(1+\alpha)/\alpha},$$ since $k\le(1+\alpha)L_0/\alpha+K_0$, $L_0=2A\lambda+8$ and $B=4A\log(1/d)$. This positive effective $c_0$ is less than one, so the pole branch excluded in step 3.2 satisfies the same conclusion by its indicator alone. All prime sums are finite, and every improper Euler or scalar tail was explicitly bounded before use. The successful $k$ has been eliminated from a pointwise scalar inequality; no function $t\mapsto k(t)$ is chosen for subsequent integration. [F1, F3, F4, step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, step 5.1, algebra] ∎

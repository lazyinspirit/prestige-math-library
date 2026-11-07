---
id: lem-bilinear-bv-for-interval-stable-coefficients-and-product-cutoffs
kind: lemma
title: Bilinear BV with interval-stable coefficients and sharp product cutoffs
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps: [thm-multiplicative-large-sieve-inequality, thm-dirichlet-character-orthogonality, thm-dirichlet-character-primitive-induction, lem-dirichlet-character-values, thm-euler-totient-product-formula, lem-truncated-perron-kernel, thm-siegel-walfisz-for-heath-brown-coefficients]
justified_by: []
proof_strategy: direct
axiom_use: Finite sums and proper integrals of specified continuous finite Dirichlet polynomials; no choice hypothesis.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Kiran Kedlaya, Notes on Analytic Number Theory, Chapter18
      url: https://kskedlaya.org/ant/chap-bombieri2.html
      locator: Section18.1, full character/large-sieve bilinear proof; sharp-product localization reconstructed using the exact local Perron kernel.
    - title: D.H.J. Polymath, New equidistribution estimates of Zhang type
      url: https://arxiv.org/pdf/1402.0811v3
      locator: Definition2.5 and Theorem2.9, coefficient-family context; present interval-stable formulation is an explicit local adaptation.
---

## Statement

Fix $\eta,c,C,C_0>0$, with $c<C$. For real $x>1$, let $M,N\ge x^\eta$ satisfy $MN\le C_0x$. Let complex coefficient families $\alpha,\beta$ be supported in $[cM,CM]$ and $[cN,CN]$, respectively, with a fixed divisor/logarithmic bound $|\alpha(n)|+|\beta(n)|\le C_1\tau(n)^{B_0}(1+\log x)^{B_0}$, where $C_1,B_0$ are fixed. Suppose $\beta$ has INTERVAL-STABLE SW: there is a fixed $b>0$ such that, for every fixed $H>1$, every real interval $I$, positive integers $q,r$ and $(a,q)=1$,
$$\left|\sum_{\substack{n\equiv a\ (q)\\(n,r)=1}}\beta(n)1_I(n)-\frac1{\varphi(q)}\sum_{(n,qr)=1}\beta(n)1_I(n)\right|\ll_H\tau(qr)^b N(\log(3x))^{-H},$$
with a constant uniform in $I,x,q,r,a$ and all family values satisfying the fixed bounds. For arbitrary real $A\le B$, define
$$\gamma_{A,B}(n)=1_{[A,B]}(n)(\alpha*\beta)(n),\quad \Delta(\gamma;a,q)=\sum_{n\equiv a\ (q)}\gamma(n)-\frac1{\varphi(q)}\sum_{(n,q)=1}\gamma(n).$$
Then for every fixed $D>0$ there is a fixed $E>0$ such that
$$\sum_{q\le x^{1/2}(\log(3x))^{-E}}\max_{(a,q)=1}|\Delta(\gamma_{A,B};a,q)|\ll_D x(\log(3x))^{-D},$$
uniformly in BOTH interval endpoints, including empty support or intervals containing the full support. Constants may depend on all fixed structural and SW parameters, never on $A,B$ or sequence values. In particular this applies to the positive-power-scale grouped coefficient families in [[thm-siegel-walfisz-for-heath-brown-coefficients]] when the other factor satisfies the displayed bounds and the two scales meet these polynomial lower bounds.

## Facts & Assumptions

**Given:** The explicit coefficient and interval-stable SW hypotheses in the Statement. Put $L=\log(3x)$.

[F1] [[thm-dirichlet-character-orthogonality]], [[thm-dirichlet-character-primitive-induction]] and [[lem-dirichlet-character-values]] give the finite nonprincipal-character expansion, unique primitive ancestor and $|\chi|\le1$.

[F2] [[thm-multiplicative-large-sieve-inequality]] gives the actual UNWEIGHTED primitive-character square-sum estimate on any integer interval.

[F3] [[thm-euler-totient-product-formula]] gives the finite product for $\varphi$ and $\varphi(1)=1$.

[F4] [[lem-truncated-perron-kernel]]: for $c_1,y,T>0$, the vertical integral of $y^s/s$ approximates the indicator at $y>1$, with half weight at $y=1$, by $O(y^{c_1}\min(1,(T|\log y|)^{-1}))$ away from1.

[F5] [[thm-siegel-walfisz-for-heath-brown-coefficients]] gives its arbitrary-interval grouped SW bound, uniform in the weights/scales/interval, with fixed divisor exponent2.

## Proof

1.1 There is a fixed $K_0$ for which the coefficient bounds imply $\sum|\alpha|\ll ML^{K_0}$, $\sum|\alpha|^2\ll ML^{K_0}$ and $\sum|\beta|^2\ll NL^{K_0}$. For completeness, for an integer $j\ge1$ each tuple of $j$ divisors of a prime power $p^a$ injects into a tuple of $2^j$ exponents summing to $a$: count the levels where the same subset of those divisors has exponent at least that level. Thus $\tau(n)^j\le\tau_{2^j}(n)$. Expanding the ordered-factor count and summing all but its last factor gives $\sum_{n\le Y}\tau(n)^j\le Y(1+\log Y)^{2^j-1}$. Apply this at the fixed support bounds, using $M,N\le C_0x$ and rounding the fixed coefficient powers upward. These norm bounds also hold after any coprimality restriction or multiplication by a unit-modulus phase. [given, algebra]

2.1 The product formula [F3] gives $n/\varphi(n)\le\prod_{p\mid n}(1+2/p)\le\sum_{d\le n}\tau(d)/d\le(1+\log(2n))^2$. It also gives $\varphi(rs)\ge\varphi(r)\varphi(s)$. Therefore, for each fixed integer $j\ge1$, [F3, step 1.1, algebra]
$$\sum_{s\le Q}\frac{\tau(s)^j}{\varphi(s)}\ll_j(1+\log(2Q))^{2^j+2},\quad\sum_{s\le Q}\frac1{\varphi(s)}\ll(1+\log(2Q))^3,\quad\sum_{s\ge1}\frac1{s\varphi(s)}\ll1.$$
The last series is bounded by $\sum_s(1+\log(2s))^2/s^2$, convergent by grouping $2^t\le s<2^{t+1}$. These prove all subsequent totient-weight losses. [F3, step 1.1, algebra]

3.1 It is enough to handle one prefix $mn<Y$ and subtract two of them: replace the interval endpoints by the half-integers $Y_-=\lceil A\rceil-1/2$, $Y_+=\lfloor B\rfloor+1/2$. If $Y_-\ge Y_+$ the interval has no integer in its support. Otherwise $1_{[A,B]}(mn)=1_{mn<Y_+}-1_{mn<Y_-}$ for positive integer products. For either prefix, [F1] expresses its discrepancy as a finite sum over nonprincipal characters. Write the primitive conductor as $r>1$, the original modulus as $rs$, and insert $1_{(m,s)=1}1_{(n,s)=1}$ for induction. Put [F1, F3, step 2.1, algebra]
$$H_{r,s}(Y,\chi)=\sum_{\substack{(m,s)=(n,s)=1\\mn<Y}}\alpha(m)\beta(n)\chi(m)\chi(n),$$
its modulus-averaged absolute discrepancy is at most [F1, F3, step 2.1, algebra]
$$\sum_{s\le Q}\frac1{\varphi(s)}\sum_{1<r\le Q/s}\frac1{\varphi(r)}\sum_{\chi\bmod r}^{*}|H_{r,s}(Y,\chi)|.$$
The conductor1 character was principal and is absent; hence $q=1$ contributes zero. No endpoint maximum is substituted for the explicit interval hypothesis. [F1, F3, step 2.1, algebra]

4.1 Choose $R\ge2$. For $1<r\le R$, sum first over $n<Y/m$. The interval-stable SW hypothesis with interval $(-\infty,Y/m)$ and extra cutoff $s$ gives, by multiplying its residue discrepancies by $\chi$, [F1, step 3.1, given, algebra]
$$\left|\sum_{\substack{(n,s)=1\\n<Y/m}}\beta(n)\chi(n)\right|\ll_H\varphi(r)\tau(rs)^b NL^{-H}.$$
This is uniform in $m,Y$. Use the mass bound in step1.1, $\tau(rs)\le\tau(r)\tau(s)$, the number of primitive characters at most $\varphi(r)$ and the totient bound in step2.1. For a fixed integer $b'\ge\max(b,1)$, the small-conductor contribution is at most [F1, step 1.1, step 2.1, step 3.1, algebra]
$$xL^{K_1-H}R^{b'+2}.$$
We used $MN\le C_0x$ and $\sum_{r\le R}\varphi(r)\tau(r)^{b'}\le R^{b'+2}$. Unlike whole-support SW, the actual hypothesis permits all the different cutoffs $Y/m$ appearing here. [F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 For large conductors use [F4] with $c_1=1/L$ and $T=x^4$. If a prefix endpoint is outside the product support $[c^2MN,C^2MN]$, it is identically zero or the full product, for which separation is exact without a kernel. Otherwise $Y\asymp MN\le C_0x$ and $Y$ is a half-integer. Since $mn$ is an integer, $|Y-mn|\ge1/2$, so $|\log(Y/(mn))|\gg1/x$ uniformly on the support. Also $(Y/(mn))^{c_1}\ll1$. Thus the kernel error per product is $O(x/T)$. By step1.1 its total coefficient error is $O(x^2L^{K_0}/T)$. Summing absolute errors over $q\le Q\le\sqrt x$, including the coprime mean, costs at most $O(x^{5/2}L^{K_0}/T)$, which is smaller than $xL^{-D}$ for EVERY fixed $D$ when $x$ is large. After primitive lifting the same error estimate follows from $\#\{\chi\bmod r\text{ primitive}\}\le\varphi(r)$ and $\sum_{s\le Q}\varphi(s)^{-1}\sum_{r\le Q/s}1\le Q\sum_s(s\varphi(s))^{-1}\ll Q$ by step2.1. Thus it controls the large-conductor part even after the positive majorization. The exact endpoint prescription avoids the half-weight at equality. The separated kernel is [F4, step 1.1, step 4.1, algebra]
$$\frac1{2\pi}\int_{-T}^T\frac{Y^{c_1+it}}{c_1+it}\left(\sum_{(m,s)=1}\alpha(m)m^{-c_1-it}\chi(m)\right)\left(\sum_{(n,s)=1}\beta(n)n^{-c_1-it}\chi(n)\right)dt.$$
Every integrand is a specified continuous finite Dirichlet polynomial; the integrals are proper, and only finite sums are interchanged. [F4, step 1.1, step 4.1, algebra]

6.1 On a conductor block $P<r\le2P$, $P\ge R$, use step2.1 and Cauchy–Schwarz with the actual [F2] on the two twisted coefficient arrays. Their square norms are at most those in step1.1, because $m^{-c_1},n^{-c_1}\le1$. Uniformly in $t,s$ this gives [F2, step 1.1, step 2.1, step 5.1, algebra]
$$\sum_{P<r\le2P}\frac1{\varphi(r)}\sum_{\chi}^{*}|A_{s,t}(\chi)B_{s,t}(\chi)|\ll\sqrt{MN}L^{K_0+2}\left(P+\sqrt M+\sqrt N+\frac{\sqrt{MN}}P\right).$$
Here $1/\varphi(r)\ll L^2/P$ supplies the totient weight; no weighted version of [F2] is assumed. The factor $Y^{c_1}$ is bounded because $Y\ll x$, and $\int_{-T}^T|c_1+it|^{-1}dt\ll\log(T/c_1+2)\ll L$. Taking the triangle inequality in the proper integral therefore costs only another factor $L$. For the identically full prefix there is no integral and the same bound holds. Summing conductor blocks gives $\sum P\ll Q/s$, $\sum1/P\ll1/R$ and $O(L)$ blocks; summing $s$ with step2.1 and using $MN\le C_0x$ gives a fixed $K_2$ and large-conductor bound [F2, step 1.1, step 2.1, step 5.1, algebra]
$$xL^{K_2}\left(\frac Q{\sqrt x}+M^{-1/2}+N^{-1/2}+R^{-1}\right).$$
In particular $\sqrt{MN}\sqrt M=MN/\sqrt N\le C_0x/\sqrt N$ and $Q\sqrt{MN}\le\sqrt{C_0x}Q$, so no lower bound $MN\asymp x$ was needed. [F2, step 1.1, step 2.1, step 5.1, algebra]

7.1 Fix $K\ge\max(K_1,K_2,1)$. Take $R=L^{D+K+3}$, choose $H>D+K+(D+K+3)(b'+2)+3$, and take $Q=\sqrt x L^{-E}$ with $E>D+K+3$. For sufficiently large $x$, $2\le R\le Q$. Step4.1, step6.1 and the kernel error in step5.1 then give $O_D(xL^{-D})$: the two short-factor terms are at most $2x^{1-\eta/2}L^K$, absorbed by every fixed logarithmic saving. If $Q<2$, only the principal moduli can occur and the discrepancy is zero; the remaining bounded-$x$ range is absorbed in the fixed constants by the coefficient bounds. Subtracting the two prefixes in step3.1 proves the estimate uniformly in $A,B$, including cutoffs beyond the support and empty intervals. [step 3.1, step 4.1, step 5.1, step 6.1, algebra]

8.1 Finally the grouped families of [F5] satisfy precisely the interval-stable hypothesis with fixed divisor exponent2, uniformly in all their permitted scales and weights. They also satisfy a fixed divisor/logarithmic bound: each selected one-variable factor is $O(L^{B+1})$ on a polynomial-size scale, and a convolution of $d$ factors has at most $\tau_d(n)\le\tau(n)^{d-1}$ contributing tuples, since its first $d-1$ prime exponents determine the last. Both $d$ and the norm/variation exponents in [F5] are fixed. Thus whenever the two factor scales meet the stated polynomial lower bounds, step7.1 applies to these actual families and ANY sharp product interval. No whole-support hypothesis has been used as if it were interval-stable, and no theorem about prime patterns is inferred here. [F5, step 1.1, step 7.1, algebra] ∎

## Source notes

**Statement adaptation:** This makes explicit the sharp-product localization needed in bilinear uses of the full-support estimate. The new premise is a genuinely uniform interval-SW property, already supplied for the named Heath–Brown grouped families by the actual local provider, rather than an unsupported consequence of whole-support SW. The proof is a direct finite-character argument and a proper truncated Perron integral. The already accepted corrected full-support bilinear theorem remains unchanged and is not re-audited. This lemma does not prove the deeper smooth-modulus dispersion, rational-phase or TypeIII correlation estimates, or the specialized Chen constants.

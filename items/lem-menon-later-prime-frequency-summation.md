---
id: lem-menon-later-prime-frequency-summation
kind: lemma
title: Later prime-frequency summation at Menon's exponents
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
proof_strategy: direct
axiom_use: No choice axiom is used; all bin sums and interval covers are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - lem-menon-arbitrary-width-bin-factorization
  - lem-prime-power-product-moment-by-positive-divisor-convolution
sources:
  references:
    - title: Siddarth Menon, Improved bounds for multiplicative functions in almost all short intervals
      url: https://arxiv.org/pdf/2607.15574v1
      locator: Section 2.2 spacing conditions; Section 2.3 exponents; Proposition 3.1 equation (3.5), printed pp. 26–28
    - title: Kaisa Matomäki and Maksym Radziwiłł, Multiplicative functions in short intervals
      url: https://arxiv.org/pdf/1501.04585v4
      locator: Section 8.2, printed pp. 25–27; adapted below with real bin widths and matching endpoints
---

## Statement

Put $\kappa=(2^{25}-2)^{-1}$, $\varepsilon=\kappa/2$, $\eta=\kappa/8$, $\alpha_j=\varepsilon/2-\eta(1+1/(2j))$. Let $X\ge10$, $1\le T\le X$, $2\le c\le3$, and let $J\ge2$ be an integer. Let
$$3\le P_1<Q_1<P_2<Q_2<\cdots<P_J<Q_J\le3X.$$
For every $2\le j\le J$, assume the two spacing conditions
$$\frac{\log\log Q_j}{\log P_{j-1}-1}\le\frac{\eta}{4j^2},\qquad \frac{\eta}{j^2}\log P_j\ge8\log Q_{j-1}+16\log j.$$
Define the real, unrounded widths
$$D=\frac{P_1^{\varepsilon/3-\eta}}{(\log Q_1)^{1/3}}=\frac{P_1^{\eta/3}}{(\log Q_1)^{1/3}},\qquad H_j=j^2D.$$
Let $|a_n|,|b_{j,m}|,|c_{j,p}|\le1$, and let $\omega_j(n)$ count distinct prime factors in $[P_j,Q_j]$. Suppose $a_n=0$ whenever $\omega_j(n)=0$ for any $j$, and $a_{mp}=b_{j,m}c_{j,p}$ whenever $p\in[P_j,Q_j]$ and $p\nmid m$. Put
$$F(s)=\sum_{X\le n\le cX}a_nn^{-s},\qquad Q_{j,v}(s)=\sum_{\substack{P_j\le p\le Q_j\\e^{v/H_j}\le p<e^{(v+1)/H_j}}}c_{j,p}p^{-s}.$$
Only integer indices of nonempty prime bins are used. For each $2\le j\le J$, let $E_j\subset[-T,T]$ be a finite union of compact intervals and points such that, at every $t\in E_j$, all current bins satisfy $|Q_{j,v}(1+it)|\le e^{-\alpha_jv/H_j}$ and at least one preceding bin satisfies $|Q_{j-1,r}(1+it)|\ge e^{-\alpha_{j-1}r/H_{j-1}}$. Then
$$\int_{E_j}|F(1+it)|^2dt\ll \frac{1+T/X}{j^2P_1}+\frac1{H_j}+\frac1{P_j},$$
and
$$\sum_{j=2}^J\int_{E_j}|F(1+it)|^2dt\ll\frac{1+T/X}{P_1}+\frac{(\log Q_1)^{1/3}}{P_1^{\varepsilon/3-\eta}}.$$
The implied constants are absolute. The conclusions also hold on subsets of these $E_j$ which are finite unions of intervals with any endpoint inclusions. For $J=1$ the sum over later regimes is empty and equals zero.

## Statement references

[[lem-menon-arbitrary-width-bin-factorization|matching-endpoint factorization argument]]

[[lem-prime-power-product-moment-by-positive-divisor-convolution|prime-power product moment]]

## Facts & Assumptions

**Given:** The parameters, spacing conditions, coefficients and finite frequency sets in the Statement.

[F1] The arbitrary-width factorization establishes the following estimate without any bin smallness: for any $1\le H\le X$, $2\le c\le3$, and matching remainders $R_v(s)=\sum_{Xe^{-v/H}\le m\le cXe^{-v/H}}b_m(1+\omega(m))^{-1}m^{-s}$, the coefficient relation in that lemma gives $\int_E|F|^2\ll H\log(2Q/P)\sum_v\int_E|Q_vR_v|^2+H^{-1}+P^{-1}$. [[lem-menon-arbitrary-width-bin-factorization]]

[F2] If $k=\lceil\log Y_2/\log Y_1\rceil$, $Y_1\ge2$, $Y_2\ge1$, $Z\ge1$, and $A$ has coefficients of modulus at most one supported in $[Z/Y_2,2Z/Y_2]$, then a prime polynomial $Q$ supported in $[Y_1,2Y_1]$ with coefficients of modulus at most one satisfies $\int_{-T}^T|Q(1+it)^kA(1+it)|^2dt\ll(T/Z+2^kY_1)(k!)^2$. [[lem-prime-power-product-moment-by-positive-divisor-convolution]]

## Proof

1.1 First all the real widths are admissible. The first spacing condition for $j=2$ gives $\log P_1-1\ge(16/\eta)\log\log Q_2$. Since $Q_2>Q_1\ge3$ and $\eta<1/100$, this forces $\log Q_1>2$: otherwise the left side is at most one, whereas the right side exceeds $(16/\eta)\log\log3>1$. Consequently $\log D=(\eta\log P_1-\log\log Q_1)/3\ge5\log\log Q_1+\eta/3$, so $D>2$. Also $D\le(3X)^{\eta/3}\le\sqrt X$ for $X\ge10$. The second spacing condition gives $j^2\le\eta\log(3X)/(8\log3)\le\log(3X)/8\le\sqrt X$ for $j\ge2$; the last inequality follows, for example, by differentiating $8\sqrt X-\log(3X)$ on $[10,\infty)$. Thus $2\le H_j\le X$ for every $j$, including $j=1$, without rounding. All earlier bin lower endpoints have logarithm greater than $\log P_1-1>2$. [given, algebra]

2.1 Fix $j\ge2$ and put $\alpha=\alpha_j$, $\beta=\alpha_{j-1}$. Set $R_{j,v}(s)=\sum_{Xe^{-v/H_j}\le m\le cXe^{-v/H_j}}b_{j,m}(1+\omega_j(m))^{-1}m^{-s}$. By [F1], $$\int_{E_j}|F|^2\ll H_j\log Q_j\sum_v\int_{E_j}|Q_{j,v}R_{j,v}|^2+H_j^{-1}+P_j^{-1}.$$ For every earlier bin let $E_{j,r}=E_j\cap\{t:|Q_{j-1,r}(1+it)|\ge e^{-\beta r/H_{j-1}}\}$. These closed sets cover $E_j$. To use the finite-interval interface without making any regularity claim about individual $E_{j,r}$, one can instead majorize on $E_j$ pointwise by the sum over $r$ of the corresponding full-interval moments, by inserting an earlier-bin power wherever that bin is large. [F1, step 1.1, given, algebra]

3.1 For a fixed pair $(v,r)$ write $L=v/H_j$, $M=r/H_{j-1}$ and $k=\lceil L/M\rceil$. Spacing implies $\log P_j-1>\log Q_{j-1}$, so $L>M>2$ and $k\ge1$. On $E_{j,r}$ the bin hypotheses imply $$|Q_{j,v}R_{j,v}|^2\le e^{-2\alpha L+2\beta kM}|Q_{j-1,r}^{\,k}R_{j,v}|^2.$$ More precisely, at every point of $E_j$ at least one $r$ has this inequality, hence $|Q_{j,v}R_{j,v}|^2\le\sum_r e^{-2\alpha L+2\beta kM}|Q_{j-1,r}^{\,k}R_{j,v}|^2$ there. Every summand is a continuous nonnegative function on $[-T,T]$. This proves the integral bound directly on the original finite intervals. The prime support of $Q_{j-1,r}$ is contained in $[e^M,2e^M]$ since $H_{j-1}\ge2$. Split $R_{j,v}$ into its terms with $m\le2Xe^{-L}$ and $m>2Xe^{-L}$. The first piece is supported in $[Xe^{-L},2Xe^{-L}]$ and the second in $[(3X/2)e^{-L},3Xe^{-L}]$. Apply [F2] with $Y_1=e^M$, $Y_2=e^L$, and respectively $Z=X$ and $Z=3X/2$. The inequality $|A+B|^2\le2|A|^2+2|B|^2$ gives $$\int_{-T}^T|Q_{j-1,r}^{\,k}R_{j,v}|^2dt\ll(T/X+2^ke^M)(k!)^2.$$ Thus the upper support is $cX$ throughout; no $2X$ endpoint is substituted for $3X$. [F2, step 1.1, step 2.1, given, algebra]

4.1 We record explicit uniform factorial bounds. Since at least $\lfloor k/2\rfloor$ factors of $k!$ are at most $k/2$, $2^k(k!)^2\le2k^{2k}$. With $u=L/M>1$, $k\le u+1\le L$, and integration of the derivative of $u\log u$ gives $$k\log k\le u\log u+\log L+1\le L\frac{\log\log Q_j}{\log P_{j-1}-1}+\log\log Q_j+1.$$ Here $L\le\log Q_j$, $M>\log P_{j-1}-1$, and the spacing condition makes the first term at most $\eta L/(4j^2)$. Therefore $$ (T/X+2^ke^M)(k!)^2\ll(1+T/X)e^M(\log Q_j)^2e^{\eta L/(2j^2)}.$$ This includes $k=1$ and has an absolute constant. [step 3.1, given, algebra]

5.1 Since $kM\le L+M$ and $\alpha_j-\alpha_{j-1}=\eta/(2j(j-1))$, the product of the threshold weight in step 3.1 and the bound in step 4.1 is at most $$C(1+T/X)(\log Q_j)^2e^{(1+2\beta)M}\exp\left(-\frac{\eta L}{2j^2}\right).$$ Indeed its coefficient of $L$ is at most $-\eta/(j(j-1))+\eta/(2j^2)\le-\eta/(2j^2)$. Each bin count is at most $C H_i\log Q_i$. As $H_{j-1}\le H_j$ and $Q_{j-1}<Q_j$, step 2.1 and the finite sum over pairs give a main term at most $$C(1+T/X)H_j^3(\log Q_j)^5Q_{j-1}^{1+2\beta}\exp\left(-\frac{\eta}{2j^2}(\log P_j-1)\right).$$ We used $L>\log P_j-1$ and $M\le\log Q_{j-1}$, thereby retaining both partial endpoint bins. [step 2.1, step 3.1, step 4.1, given, algebra]

6.1 The prefactor in step 5.1 is small enough uniformly in $j$. We have $D^3=P_1^\eta/\log Q_1\le Q_{j-1}^\eta$ and, by the first spacing condition, $(\log Q_j)^5\le Q_{j-1}^{5\eta/(4j^2)}$. Also $0<\beta<\varepsilon/2=2\eta$. Since $1+2\beta+\eta+5\eta/(4j^2)<2$, $$H_j^3(\log Q_j)^5Q_{j-1}^{1+2\beta}\le j^6Q_{j-1}^{2}.$$ The discarded endpoint factor $e^{\eta/(2j^2)}$ is bounded absolutely. By the second spacing condition, $e^{-\eta\log P_j/(2j^2)}\le Q_{j-1}^{-4}j^{-8}$. Hence the main term is at most $C(1+T/X)/(j^2Q_{j-1}^2)\le C(1+T/X)/(j^2P_1)$. Together with step 2.1 this proves the individual estimate. [step 2.1, step 5.1, given, algebra]

7.1 Finally $\sum_{j\ge2}j^{-2}\le1$, and the second spacing condition implies $P_j\ge P_1^{j^2}$ for $j\ge2$. Thus $\sum_{j=2}^JH_j^{-1}\le D^{-1}$ and $\sum_{j=2}^JP_j^{-1}\le\sum_{j\ge2}P_1^{-j}\le P_1^{-1}$, since $P_1\ge3$. Sum the individual estimates to obtain the stated later-range sum. Subsets with arbitrary endpoint inclusions have smaller nonnegative integrals; isolated points have zero integral. All index sets are finite, so no choice principle is used. [step 6.1, given, algebra] ∎

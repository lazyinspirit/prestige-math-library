---
id: lem-mobius-type-i-ii-inverse-decomposition
kind: lemma
title: Möbius Type I/II inverse decomposition
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-theoretic-mobius-function
  - cor-classical-mobius-inversion
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, Quadratic uniformity of the Möbius function
      url: https://www.numdam.org/article/AIF_2008__58_6_1863_0.pdf
      locator: Lemma 4.1 and Proposition 4.2, printed pp. 1876–1879
    - title: Terence Tao, 254A Notes 8, The Hardy–Littlewood circle method and Vinogradov’s theorem
      url: https://terrytao.wordpress.com/2015/03/30/254a-notes-8-the-hardy-littlewood-circle-method-and-vinogradovs-theorem/
      locator: Vaughan identity and Type I/II discussion, Sections 4–5
---

## Statement

For every integer $N\geq8$, every $0<\eta<1/2$, and every real-valued
function $f:\mathbb N\to\mathbb R$ supported on $(N,2N]$ with
$|f(n)|\leq1$, suppose
$$\left|\frac1N\sum_{N<n\leq2N}\mu(n)f(n)\right|\geq\eta.$$
For a finite nonempty set $S$ of integers, write
$\mathbb E_{x\in S}u(x)=|S|^{-1}\sum_{x\in S}u(x)$. Then one of the
following alternatives holds, with an absolute constant $c>0$.

1. **Type I.** There is a power of two $K$ with $1\leq K\leq N^{2/3}$
such that for at least $c\eta^2K(\log(2N))^{-5}$ integers
$k\in[K,2K)$,
$$\left|\mathbb E_{N/k<w\leq2N/k} f(kw)\right| \geq c\eta(\log(2N))^{-5/2}.$$

2. **Type II.** There are powers of two $K,W$ with
$$\tfrac14N^{1/3}\leq K\leq4N^{2/3}, \qquad N/4<KW<2N,$$
such that
$$\left|\mathbb E_{\substack{K\leq k,k'<2K\\W\leq w,w'<2W}} f(kw)f(k'w)f(kw')f(k'w')\right| \geq c\eta^4(\log(2N))^{-14}.$$

## Statement references

[Green and Tao, Lemma 4.1 and Proposition 4.2](https://www.numdam.org/article/AIF_2008__58_6_1863_0.pdf)

[Tao, 254A Notes 8](https://terrytao.wordpress.com/2015/03/30/254a-notes-8-the-hardy-littlewood-circle-method-and-vinogradovs-theorem/)

## Facts & Assumptions

**Given:** The hypotheses in the Statement. Put
$U=V=\lfloor N^{1/3}\rfloor$.

[F1] Classical Möbius inversion says
$g(n)=\sum_{d\mid n}f(d)$ for all $n$ if and only if
$f(n)=\sum_{d\mid n}\mu(n/d)g(d)$ for all $n$.
[[cor-classical-mobius-inversion]]

[F2] The number-theoretic Möbius function is zero on integers divisible
by a prime square, has value $(-1)^r$ on a product of $r$ distinct primes,
and has $\mu(1)=1$. [[def-number-theoretic-mobius-function]]

[F3] Let $\tau(n)$ count divisors of $n$, and let $d_4(n)$ count ordered
factorizations into four positive factors. Both are multiplicative.

## Proof

**Given:** The same data as in the Statement. All constants below are
absolute and can be changed by fixed factors.

1.1 Define $\epsilon(1)=1$ and $\epsilon(n)=0$ for $n>1$. Since $\sum_{d\mid n}\epsilon(d)=1$ for every $n$, apply Möbius inversion [F1] with $f=\epsilon$ and $g=\mathbf1$, where $\mathbf1(n)=1$. It follows that $\epsilon(n)=\sum_{d\mid n}\mu(n/d)=\sum_{d\mid n}\mu(d)$, the second equality using the divisor bijection $d\mapsto n/d$. Thus $\mu*\mathbf1=\epsilon$, and associativity of the finite divisor convolutions gives $$\mu(n)=\sum_{bc\mid n}\mu(b)\mu(c).$$ For $n>UV$, split the pairs $(b,c)$ according to whether $b\leq U$ and $c\leq V$. For fixed $c\leq V$, one has $n/c>U\geq1$, so $n/c>1$ and $$\sum_{\substack{b\mid n/c\\b>U}}\mu(b) =-\sum_{\substack{b\mid n/c\\b\leq U}}\mu(b)$$ by [F1]. The region $b>U,c\leq V$ therefore cancels the negative of the region $b\leq U,c\leq V$. Interchanging $b,c$ gives the same cancellation for the other mixed region. Consequently $$\mu(n)= -\sum_{\substack{bc\mid n\\b\leq U,\ c\leq V}}\mu(b)\mu(c) +\sum_{\substack{bc\mid n\\b>U,\ c>V}}\mu(b)\mu(c).$$ [F1, F2, given, algebra]

1.2 For a prime power $p^e$, $(e+1)^2\leq\binom{e+3}{3}$: after cancelling $e+1$, this is $6(e+1)\leq(e+2)(e+3)$, equivalent to $e(e-1)\geq0$. Multiplicativity gives $\tau(n)^2\leq d_4(n)$. Summing ordered four-factor tuples gives $$\sum_{n\leq Y}\frac{\tau(n)^2}{n} \leq\sum_{n_1,\ldots,n_4\leq Y}\frac1{n_1n_2n_3n_4} \leq\left(\sum_{j\leq Y}\frac1j\right)^4.$$ For the unweighted sum, after fixing the first three factors, the fourth has at most $Y/(n_1n_2n_3)$ choices, so $$\sum_{n\leq Y}\tau(n)^2 \leq Y\left(\sum_{j\leq Y}\frac1j\right)^3.$$ The harmonic sum is at most $1+\log Y$, proving both bounds in [F3]. [F3, algebra]

2.1 Sum the identity in step 1.1 against $f(n)/N$ for $N<n\leq2N$. In the first sum put $d=bc$ and define $a_d=\sum_{bc=d,\ b\leq U,\ c\leq V}\mu(b)\mu(c)$; then $|a_d|\leq\tau(d)$ and $$T_I=\frac1N\sum_{d\leq UV}a_d \sum_{N/d<w\leq2N/d}f(dw).$$ In the second sum put $d=cr$ when $n=cbr$, $w=b$, and $b_d=\sum_{c\mid d,\ c>V}\mu(c)$. Then $|b_d|\leq\tau(d)$ and $$T_{II}=\frac1N\sum_{V<d\leq2N/U}b_d \sum_{\substack{w>U\\N<dw\leq2N}}\mu(w)f(dw).$$ The correlation equals $-T_I+T_{II}$, so at least one of $|T_I|,|T_{II}|$ is at least $\eta/2$. [step 1.1, given, algebra]

3.1 Suppose $|T_I|\geq\eta/2$, and put $A_d=\mathbb E_{N/d<w\leq2N/d}f(dw)$. For $d\leq UV\leq N^{2/3}$, the averaging interval has $\asymp N/d$ integers. Thus $$|T_I|\ll\sum_{d\leq UV}\frac{\tau(d)}d|A_d| \leq \left(\sum_{d\leq UV}\frac{\tau(d)^2}d\right)^{1/2} \left(\sum_{d\leq UV}\frac{|A_d|^2}d\right)^{1/2}.$$ By step 1.2, $\sum_{d\leq UV}|A_d|^2/d\gg\eta^2(\log(2N))^{-4}$. Partition the positive integers into dyadic blocks $[K,2K)$ with $K$ a power of two. There are $O(\log(2N))$ relevant blocks; on one block, $$\sum_{K\leq d<2K}|A_d|^2\gg \eta^2K(\log(2N))^{-5}.$$ Since $|A_d|\leq1$, choosing a sufficiently small absolute $c$ in the threshold $\theta=c\eta(\log(2N))^{-5/2}$ forces at least $c\eta^2K(\log(2N))^{-5}$ indices to exceed it: if $E$ is the sum of $|A_d|^2$ on the block and $J$ is the set with $|A_d|\geq\theta$, then $E\leq |J|+K\theta^2$, while $E\gg\eta^2K(\log(2N))^{-5}$; choose $c$ so $K\theta^2\leq E/2$. This is Type I, and its block has $K\leq UV\leq N^{2/3}$. [step 1.2, step 2.1, algebra]

3.2 Suppose $|T_{II}|\geq\eta/2$. Partition the $d$ and $w$ ranges into dyadic blocks $[K,2K)$ and $[W,2W)$. There are $O((\log(2N))^2)$ boxes. Consider only boxes with nonzero weighted contribution. Each contains a term with $b_d\mu(w)\mathbf1_{w>U}f(dw)\ne0$, so $N<dw\leq2N$ implies $KW\leq2N$ and $4KW>N$. Equality $KW=2N$ would force $d=K$ and $w=W$. But then $W>U\geq2$; as $W$ is a power of two, $4\mid W$ and $\mu(W)=0$ by [F2], contradicting the nonzero term. Hence these boxes satisfy $N/4<KW<2N$. Also $d>V$ and $w>U$ imply $K>V/2\geq N^{1/3}/4$, while $d\leq2N/U$ and $U\geq N^{1/3}/2$ imply $K\leq4N^{2/3}$. By the triangle inequality some such box has an unnormalized sum of magnitude $\gg\eta N(\log(2N))^{-2}$. Dividing by its $KW<2N$ terms therefore gives $\left|\mathbb E_{\substack{K\leq d<2K\\W\leq w<2W}} b_d\mu(w)\mathbf1_{w>U}f(dw)\right| \gg\eta(\log(2N))^{-2}.$ The cutoff $w>U$ is retained even on a block straddling $U$. The coefficient $b_d$ vanishes for $d\leq V$, and $w>U$ together with the support of $f(dw)$ makes the upper cutoff $d\leq2N/U$ automatic. Thus no other boundary term has been added to this box. Furthermore step 1.2 gives $\mathbb E_{K\leq d<2K}|b_d|^2\ll(\log(2N))^3$. [F2, step 1.2, step 2.1, construct, algebra]

4.1 For real arrays $z_{d,w}$ and coefficients $b_d,a_w$ with $|a_w|\leq1$, two Cauchy–Schwarz applications give $$\left|\mathbb E_{d,w}b_da_wz_{d,w}\right|^4 \leq \left(\mathbb E_d|b_d|^2\right)^2 \mathbb E_{d,d',w,w'} z_{d,w}z_{d',w}z_{d,w'}z_{d',w'}.$$ Indeed, write $B_w=\mathbb E_d b_dz_{d,w}$. Cauchy–Schwarz in $w$ gives $|\mathbb E_w a_wB_w|^2\leq\mathbb E_w|B_w|^2$, since $\mathbb E_w|a_w|^2\leq1$. Expanding gives $\mathbb E_{d,d'}b_d b_{d'}\mathbb E_w z_{d,w}z_{d',w}$. Cauchy–Schwarz in $(d,d')$ after squaring contributes $(\mathbb E_d|b_d|^2)^2$; expanding the remaining squared $w$-average is the displayed fourfold average. By [F2], $|\mu(w)|\leq1$. Apply this with $a_w=\mu(w)\mathbf1_{w>U}$ and $z_{d,w}=f(dw)$ on the box from step 3.2. Its lower bound and the coefficient estimate give a fourfold average $\gg\eta^4(\log(2N))^{-8-6}$, which is Type II. Thus one alternative always holds. [F2, step 3.2, algebra] ∎

## Source notes

The divisor convolution identity and cutoff cancellations are proved
locally from the classical inversion supplier. The dyadic and
Cauchy–Schwarz estimates make the logarithmic powers explicit; the
published source suppresses those powers.

The decomposition above is proved locally from Möbius inversion. It gives
the explicit logarithmic exponents used by the later nilsequence argument;
the cited Green–Tao result states the same reduction with unspecified
absolute powers.

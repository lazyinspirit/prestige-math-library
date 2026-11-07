---
dependency_level: 3
id: cor-gowers-uniformity-implies-k-progression
kind: corollary
title: "Higher-order uniformity forces an ordinary long progression"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-gowers-uniformity-norm-on-finite-cyclic-groups
  - lem-gowers-norm-monotonicity
  - thm-generalized-von-neumann-for-k-term-progressions
  - def-unitary-discrete-fourier-transform-on-z-mod-n
  - thm-finite-parseval-and-plancherel
  - lem-orthogonality-of-characters-on-a-finite-cyclic-group
  - lem-sine-chord-and-lipschitz-bounds
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-holder-inequality-for-integrals
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "W. T. Gowers, A new proof of Szemeredi theorem, Corollary 3.6 and Lemmas 3.4--3.5, printed pp.481--482"
      url: https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf
---

## Statement

Let $k\ge3$, let $p>2k$ be prime, and let $A\subseteq\mathbb Z/p\mathbb Z$ have density $\delta=|A|/p>0$. Put $f=1_A-\delta$, and use normalized Gowers norms. If
$$\|f\|_{U^{k-1}}^{2^{k-1}}\le(\delta/2)^{k2^k},\qquad p\ge32k^2\delta^{-k},$$
then the standard integer representatives of $A$ contain a $k$-term arithmetic progression of nonzero integer difference, all of whose terms lie strictly between $0$ and $p$. Reversing a negative-difference progression gives positive difference. Thus the conclusion is an ordinary integer progression, not merely a possibly wrapping cyclic one.

## Statement references

[Gowers, Corollary 3.6 and Lemmas 3.4--3.5](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

## Facts & Assumptions

**Given:** The prime cyclic group, set, density, uniformity and length hypotheses of the Statement. Write $u=\|f\|_{U^{k-1}}$.

[F1] The normalized cube norms have the conventions in [[def-gowers-uniformity-norm-on-finite-cyclic-groups]], and $\|f\|_{U^2}\le\|f\|_{U^{k-1}}$ by [[lem-gowers-norm-monotonicity]].

[F2] For prime $p>2k$, any progression average of $k$ complex functions bounded by one is at most the $U^{k-1}$ norm of any chosen factor, in absolute value; the average includes zero difference ([[thm-generalized-von-neumann-for-k-term-progressions]]).

[F3] Write $\widetilde h(r)=\sum_xh(x)e^{-2\pi irx/p}=\sqrt p\,\mathcal F_ph(r)$. Finite Parseval and character orthogonality hold with this scaling ([[def-unitary-discrete-fourier-transform-on-z-mod-n]], [[thm-finite-parseval-and-plancherel]], [[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

[F4] The exponential has the usual Cartesian form, and $\sin t\ge2t/\pi$ for $0\le t\le\pi/2$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[lem-sine-chord-and-lipschitz-bounds]]).

[F5] Holder's inequality applies to finite counting sums with exponents $4$ and $4/3$ ([[thm-holder-inequality-for-integrals]]).

## Proof

1.1 The uniformity hypothesis gives $u\le(\delta/2)^{2k}$. Expanding the fourth Fourier moment and applying character orthogonality gives $\sum_r|\widetilde f(r)|^4=p^4\|f\|_{U^2}^4$. Indeed the left side is $p$ times the sum of $f(a)f(b)\overline{f(c)f(d)}$ over $a+b=c+d$. The substitution $(x,h_1,h_2)\mapsto(a=x,b=x+h_1+h_2,c=x+h_1,d=x+h_2)$ bijects triples with those quadruples, so that sum is $p^3$ times the normalized $2$-cube average. Also $\widetilde f(0)=0$, since $f$ is balanced. [given, F1, F3, algebra]

1.2 For any interval $I$ of consecutive integer representatives and any centered nonzero frequency with $1\le|r|\le(p-1)/2$, the geometric sum and [F4] give $|\widetilde{1_I}(r)|\le2/|1-e^{2\pi ir/p}|\le p/(2|r|)$. Since $\sum_{j\ge1}j^{-4/3}\le1+\int_1^\infty x^{-4/3}\,dx=4$, it follows that $\sum_{r\ne0}|\widetilde{1_I}(r)|^{4/3}\le8p^{4/3}$. [F3, F4, algebra]

2.1 Holder, Parseval and steps 1.1 and 1.2 imply $|\sum_{x\in I}f(x)|\le p^{-1}(\sum|\widetilde f|^4)^{1/4}(\sum_{r\ne0}|\widetilde{1_I}|^{4/3})^{3/4}\le5p\|f\|_{U^2}\le5pu$, using $8^{3/4}<5$. The empty interval case also satisfies this inequality. [F1, F3, F5, step 1.1, step 1.2, algebra]

3.1 Take $I=[(k-2)p/(2k-3),(k-1)p/(2k-3)]\cap\mathbb Z$ and $B=A\cap I$. Its integer size is at least $p/(2k-3)-1$. The elementary inequalities $5k(2k-3)\le4^k$ and $6k^2(k-2)\le4^k$ hold for every $k\ge3$: check $45,54\le64$ at $k=3$; each left-hand side grows by a factor less than $4$ on increasing $k$, because $4k(2k-3)-(k+1)(2k-1)=6k^2-13k+1>0$ and $4k^2(k-2)-(k+1)^2(k-1)=3k^2(k-3)+k+1>0$. By step 2.1, $|B|/p\ge\delta/(2k-3)-\delta/p-5u$. As $5u/\delta\le5/4^k\le1/[k(2k-3)]$ and $1/p\le1/(32k^2)\le1/[2k(2k-3)]$, this gives $|B|/p\ge\delta/(2k)$. [given, step 1.1, step 2.1, construct, algebra]

4.1 Count cyclic progressions whose first two terms lie in $B$ and remaining terms lie in $A$. Telescope the last $k-2$ factors from $1_A$ to their constant mean $\delta$. In each difference there is one balanced factor $f$, and all other factors have magnitude at most one. By [F2] each normalized error is at most $u$. The constant-factor count is $\delta^{k-2}(|B|/p)^2$, because $(x,r)\mapsto(x,x+r)$ is a bijection. The normalized count is therefore at least $\delta^k/(4k^2)-(k-2)u\ge\delta^k/(12k^2)$, using $u\le\delta^{2k}/4^k\le\delta^k/4^k$ and the second inequality in step 3.1. Zero-difference progressions contribute at most $\delta/p\le\delta^{k+1}/(32k^2)\le\delta^k/(32k^2)$, strictly smaller than that lower bound. Hence some counted progression has nonzero difference. [F2, step 1.1, step 3.1, algebra]

5.1 Let $a,b\in I$ be its first two standard representatives, and put $d=b-a$. Since $p>2k$ is prime, the positive integer $2k-3$ is smaller than $p$ and coprime to $p$. Neither $k-2$ nor $k-1$ is divisible by $2k-3$, so neither endpoint of $I$ is an integer. Thus $a,b$ lie strictly inside the displayed real interval. The extreme possible values of $a+(k-1)(b-a)=(2-k)a+(k-1)b$ are strictly between $0$ and $p$: substituting opposite endpoints gives exactly $0$ and $p$. Every intermediate term lies between the first and last terms. Therefore the original cyclic progression has precisely the integer representatives $a,a+d,\ldots,a+(k-1)d$ strictly inside $(0,p)$. The nonzero cyclic difference makes $d\ne0$. Reversing if needed proves the stated ordinary positive-difference progression. [step 3.1, step 4.1, algebra] ∎

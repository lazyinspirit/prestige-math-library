---
dependency_level: 5
id: lem-quantitative-polynomial-weyl-and-recurrence
kind: lemma
title: Quantitative polynomial Weyl criterion and recurrence
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-quantitative-torus-fourier-and-linear-recurrence
  - def-polynomial-sequence-on-a-filtered-group
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Section 4, Lemma 4.1, Corollary 4.2, Proposition 4.3 and Lemmas 4.4–4.5; corrected small-N alternatives
---

## Statement

Write $e(t)=\exp(2\pi it)$, $\mathbb T=\mathbb R/\mathbb Z$, $[N]=\{1,\ldots,N\}$ and $\|t\|_{\mathbb T}=\min_{a\in\mathbb Z}|t-a|$. For a real polynomial $p(n)=\sum_{j=0}^d\alpha_j\binom nj$, define $\|p\|_{C^\infty[N]}=\max_{1\leq j\leq d}N^j\|\alpha_j\|_{\mathbb T}$, with value zero for $d=0$. The following uniform assertions hold.

For any complex sequence $a_n$ supported on $[N]$, extended by zero to all integers, and any positive integer $H$,

$$\left|\frac1N\sum_na_n\right|^2\leq\frac{N+H}{HN}\sum_{|h|<H}\left(1-\frac{|h|}{H}\right)\frac1N\sum_na_{n+h}\overline{a_n}.$$

If $|a_n|\leq1$ and its average has modulus at least $\sigma$, where $0<\sigma<1$, then either $N\leq8\sigma^{-2}$ or at least $\sigma^2N/16$ positive integers $h\in[N]$ have normalized correlation of modulus at least $\sigma^2/16$.

For each integer $d\geq1$ there are constants $C_d,A_d\geq1$ such that for every $N\geq1$, $0<\sigma<1/2$, and real polynomial $p$ of degree at most $d$, a phase average $|N^{-1}\sum_{n=1}^Ne(p(n))|\geq\sigma$ implies that an integer $1\leq q\leq C_d\sigma^{-A_d}$ simultaneously satisfies

$$\|qa_d\|_{\mathbb T}\leq C_d\sigma^{-A_d}N^{-d},\qquad \|qp\|_{C^\infty[N]}\leq C_d\sigma^{-A_d},$$

where $a_d$ is the coefficient of $n^d$ in ordinary powers. For each $r\geq1$ and $d\geq0$ there are constants $C_{r,d},A_{r,d}\geq1$ such that, if a polynomial orbit $p(n)\bmod\mathbb Z^r$ in $\mathbb T^r$ of degree at most $d$ fails $\delta$-equidistribution in the quotient maximum metric and Lipschitz norm $\|F\|_\infty+\operatorname{Lip}(F)$, with $0<\delta<1/2$, then some nonzero $k\in\mathbb Z^r$ satisfies

$$|k|_\infty\leq C_{r,d}\delta^{-A_{r,d}},\qquad \|k\cdot p\|_{C^\infty[N]}\leq C_{r,d}\delta^{-A_{r,d}}.$$

Finally, for each $d\geq1$ there are constants $C_d,A_d\geq1$ such that if $0<\delta<1/2$, $0<\epsilon\leq\delta/2$, and $p(n)\bmod1$ belongs to a fixed circle interval of length $\epsilon$ for at least $\delta N$ integers in $[N]$, then either $N\leq C_d\delta^{-A_d}$ or an integer $1\leq q\leq C_d\delta^{-A_d}$ satisfies

$$\|qp\|_{C^\infty[N]}\leq C_d\epsilon\delta^{-A_d}.$$

For $d=0$ the seminorm conclusions hold unconditionally with multiplier one, and for the torus assertion with any coordinate unit vector. Constants in the several assertions can be enlarged to agree; they depend only on the indicated fixed dimension and degree, independently of coefficients, $N$ and $\epsilon$.

## Statement references

[[lem-quantitative-torus-fourier-and-linear-recurrence]]

[[def-polynomial-sequence-on-a-filtered-group]]

[Green and Tao, Section 4](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

## Facts & Assumptions

[F1] The Fourier criterion, geometric-sum consequence, and strong linear recurrence with its small-length alternative are proved in [[lem-quantitative-torus-fourier-and-linear-recurrence]].

[F2] The polynomial $C^\infty[N]$ seminorm and difference convention are those of [[def-polynomial-sequence-on-a-filtered-group]]. Since $\Delta\binom nj=\binom n{j-1}$, the coefficient $\alpha_j$ equals $\Delta^jp(0)$, so the displayed binomial-coefficient seminorm is exactly that convention.

## Proof

**Given:** The data in the statement. In this proof $P_d(t)$ denotes a bound $C_dt^{-A_d}$, with positive constants depending only on $d$, enlarged when needed. Such enlargement means a finite sum, product, fixed power or substitution into an earlier bound. There are at most $d$ induction stages, so a single final pair $C_d,A_d$ majorizes every occurrence. A restriction $N>P_d(t)$ includes every power threshold required later in that argument.

1.1 Each $a_j$ occurs exactly $H$ times in $\sum_{n=2-H}^N\sum_{u=0}^{H-1}a_{n+u}$. Cauchy--Schwarz, using at most $N+H$ outer terms, gives $|\sum_ja_j|^2\leq(N+H)H^{-2}\sum_n|\sum_{u=0}^{H-1}a_{n+u}|^2$. Expand the square and group the pairs of indices by their difference $h$. For each $|h|<H$ there are $H-|h|$ pairs. Division by $N^2$ proves the finite van der Corput inequality in the statement. Its right-hand side is real and nonnegative, as the expansion also shows. [given, algebra]

2.1 Let $C_h=N^{-1}\sum_na_{n+h}\overline{a_n}$. If $H=N$, $|a_n|\leq1$, and the phase average has modulus at least $\sigma$, the preceding inequality gives $\sigma^2\leq(2/N)(1+2\sum_{h=1}^{N-1}|C_h|)$, since $C_0\leq1$ and $C_{-h}=\overline{C_h}$. If fewer than $\sigma^2N/16$ positive shifts have $|C_h|\geq\sigma^2/16$, then $\sum_{h=1}^{N-1}|C_h|\leq\sigma^2N/8$, bounding the right-hand side by $2/N+\sigma^2/2$. For $N>8\sigma^{-2}$ this is less than $\sigma^2$, a contradiction. This proves the correlation alternative including its short-length branch. [step 1.1, algebra]

3.1 First prove the leading-coefficient estimate by induction on $d$. The case $d=1$ is the geometric-sum estimate in F1. If the actual degree is smaller than $d$, its coefficient $a_d$ is zero. At any induction stage bounded $N\leq P_d(\sigma)$ is harmless: take multiplier one and enlarge the final power until $P_d(\sigma)/N^d\geq1/2$. Assume therefore that $N$ exceeds a sufficiently large fixed power of $\sigma^{-1}$. Apply the correlation conclusion to $a_n=e(p(n))$ on $[N]$ and zero outside. For at least $c\sigma^2N$ positive shifts $h$, the correlation has modulus at least $c\sigma^2$, for an absolute $c>0$. Its nonzero support is $[M]$ with $M=N-h$, and therefore $M\geq c\sigma^2N$. The average over $[M]$ of $e(p(n+h)-p(n))$ has modulus at least $c\sigma^2$, since its unnormalized sum has modulus at least $c\sigma^2N$ and $M\leq N$. This polynomial has degree $d-1$ and leading coefficient $dh a_d$. The induction hypothesis at length $M$ gives an integer $1\leq q_h\leq P_d(\sigma)$ such that $\|q_hdh a_d\|_{\mathbb T}\leq P_d(\sigma)N^{-(d-1)}$, absorbing $M/N\geq c\sigma^2$ into the power. [F1, step 2.1, algebra]

4.1 Pigeonhole the integers $q_h$ to obtain a single $q$ and at least $\rho N$ shifts with $\|hqd a_d\|_{\mathbb T}\leq E$, where $\rho\geq1/P_d(\sigma)$, $0<\rho<1/2$, and $E=P_d(\sigma)N^{-(d-1)}$. For $d\geq2$, our large-$N$ assumption ensures $2E\leq\rho/2$ and $N>C\rho^{-A}$, where $C,A$ are the absolute recurrence constants in F1. Thus F1 applied to $h(qd a_d)$ in the circle interval $\{x:\|x\|_{\mathbb T}\leq E\}$ of length $2E$ gives an integer $1\leq q'\leq P_d(\sigma)$ with $\|q'qd a_d\|_{\mathbb T}\leq P_d(\sigma)E/N\leq P_d(\sigma)N^{-d}$. The multiplier $q'qd$ has the required power bound. This closes the induction, with both the interval-length condition and the small-length alternative discharged at its only recurrence invocation. [F1, step 3.1, algebra]

5.1 Recover all binomial coefficients successively for a polynomial whose phase average has modulus at least $\sigma$. Again bounded $N$ is handled by multiplier one, since $N^j\|\alpha_j\|_{\mathbb T}\leq N^d/2$ for $1\leq j\leq d$. The leading estimate just proved, applied to $a_d=\alpha_d/d!$ and followed by multiplication by $d!$, recovers $\alpha_d$. Suppose the higher coefficients $\alpha_i$ for $i>j$ have already been recovered with one common integer $q\leq P_d(\sigma)$. Choose nearest integers $b_i$ and write the exact real identities $\alpha_i=b_i/q+\theta_i$, where $|\theta_i|\leq P_d(\sigma)N^{-i}$. Set $Q=qd!$ and $p_{\mathrm{low}}(n)=p(n)-\sum_{i>j}\alpha_i\binom ni$. The rational part $\sum_{i>j}(b_i/q)\binom ni$ is constant modulo one on residue classes modulo $Q$: Vandermonde's identity gives $\binom{x+Q}{i}-\binom xi=\sum_{t=1}^i\binom Qt\binom x{i-t}$, and $\binom Qt=(Q/t)\binom{Q-1}{t-1}$ is divisible by $q$ because $t\mid d!$. This holds for integer $x$, and iteration covers every multiple of $Q$. [F2, step 4.1, algebra]

6.1 Let $B=P_d(\sigma)\geq1$ majorize the errors $N^i|\theta_i|$ in the preceding step, and choose the integer $L=\lfloor\sigma N/(K_dQB)\rfloor$, where $K_d$ is a sufficiently large constant depending only on $d$. Partition each residue progression modulo $Q$ in $[N]$ into full consecutive blocks of $L$ terms and a final leftover. Their combined leftovers have at most $QL\leq\sigma N/4$ terms. The unnormalized phase sum on full blocks thus has modulus at least $3\sigma N/4$, so some full block has average of modulus at least $3\sigma/4$: otherwise the sum of the absolute block sums would be smaller than this. For sufficiently large $N>P_d(\sigma)$, the selected $L$ satisfies $L\geq1$ and $L\geq N/P_d(\sigma)$. Write the selected block as $n=a+Qt$, $1\leq t\leq L$, with all its entries in $[N]$. On $[0,N+1]$, differentiation of the fixed polynomial $\binom xi$ bounds its derivative by $C_dN^{i-1}$. Hence the variation of $\sum_{i>j}\theta_i\binom ni$ on the block is at most $C_dBQL/N\leq\sigma/(16\pi)$ if $K_d$ is chosen large enough. Since $|e(x)-e(y)|\leq2\pi|x-y|$, its phase differs from a fixed unit scalar by at most $\sigma/8$. The rational high-degree part is exactly constant modulo one on the block. Removing these two high-degree parts therefore leaves $|L^{-1}\sum_{t=1}^Le(p_{\mathrm{low}}(a+Qt))|\geq\sigma/2$. [step 5.1, algebra]

7.1 This last polynomial has degree at most $j$, with leading coefficient $\alpha_jQ^j/j!$. The leading-coefficient estimate at length $L$ yields $1\leq u\leq P_d(\sigma)$ such that $\|uQ^j\alpha_j/j!\|_{\mathbb T}\leq P_d(\sigma)L^{-j}\leq P_d(\sigma)N^{-j}$. Multiply its argument by $j!$ to obtain the estimate for multiplier $uQ^j$. Taking the product of this multiplier with the earlier $q$ preserves all previously recovered coefficients and recovers $\alpha_j$, with only power losses. At most $d$ such stages give one multiplier $q\leq P_d(\sigma)$ and $N^j\|q\alpha_j\|_{\mathbb T}\leq P_d(\sigma)$ for every $j\geq1$. If simultaneous control of the ordinary coefficient $a_d$ in the statement is needed, multiply this common multiplier by the leading-coefficient multiplier from step 4.1. This preserves all estimates with another power loss and proves the stated simultaneous conclusion. [step 4.1, step 6.1, algebra]

8.1 If the torus polynomial orbit fails $\delta$-equidistribution, F1 supplies a nonzero vector $k$ with $|k|_\infty\leq P_{r,d}(\delta)$ and a scalar phase $e(k\cdot p(n))$ whose average has modulus at least $1/P_{r,d}(\delta)$. Apply the coefficient result just proved to the scalar polynomial $k\cdot p$, and multiply $k$ by its positive integer multiplier. The result stays nonzero, has norm at most a fixed power of $\delta^{-1}$, and has the claimed $C^\infty[N]$ bound. This includes $r=1$ and every $N\geq1$. When $d=0$, the seminorm is zero by definition, so take any coordinate unit vector. [F1, F2, step 7.1, algebra]

9.1 For the epsilon-sensitive recurrence assertion, put $L=\lfloor\delta/(2\epsilon)\rfloor\geq1$. For every integer $1\leq\lambda\leq L$, the $\lambda$-fold image of the occupied interval is contained in a circle interval of length $\lambda\epsilon\leq\delta/2$. The bump test $H(x)=\max(1-\operatorname{dist}(x,I_\lambda)/(\delta/16),0)$ has empirical average at least $\delta$, integral at most $5\delta/8$, and Lipschitz norm at most $1+16/\delta$. Thus the orbit $\lambda p$ fails $c\delta^2$-equidistribution for an absolute $c>0$. Step 8.1 gives a single integer upper bound $B=\lceil P_d(\delta)\rceil$, independent of $\lambda$ and $L$, such that for every $\lambda$ there is $1\leq q_\lambda\leq B$ satisfying $\|q_\lambda\lambda\alpha_i\|_{\mathbb T}\leq B/N^i$ for all $1\leq i\leq d$. No estimate on the constant coefficient is claimed or needed. [step 8.1, algebra]

10.1 Let $\rho=1/(2B)$, and let $T=C\rho^{-A}$ be the short-length threshold in F1. If $L\leq T$, the inequality $L\geq\delta/(4\epsilon)$ shows $1/\epsilon\leq4T/\delta=P_d(\delta)$. The coefficient estimates at $\lambda=1$ therefore already imply $\|q_1p\|_{C^\infty[N]}\leq B\leq\epsilon P_d(\delta)$, with the required multiplier bound, for every $N$. If $L>T$, pigeonhole $q_\lambda$ to find a common $q_*$ for at least $L/B\geq\rho L$ values of $\lambda$. For each $i\geq1$ they satisfy $\|\lambda q_*\alpha_i\|_{\mathbb T}\leq B/N^i$. Provided $N>P_d(\delta)$, the interval length $\eta_i=2B/N^i$ is at most $\rho/2$. Apply F1 to these $\lambda$ in $[L]$ with frequency $q_*\alpha_i$, density $\rho$, and interval $\{x:\|x\|_{\mathbb T}\leq B/N^i\}$. Its short-length alternative is excluded because $L>T$. For each $i$ it supplies $1\leq v_i\leq P_d(\delta)$ and $\|v_iq_*\alpha_i\|_{\mathbb T}\leq P_d(\delta)/(N^iL)\leq\epsilon P_d(\delta)/N^i$, using $1/L\leq4\epsilon/\delta$. Taking $q=q_*\prod_{i=1}^dv_i$ proves all coefficient bounds simultaneously, with at most another fixed power loss. If $N$ does not exceed the required power threshold, retain exactly the small-$N$ alternative in the statement. For $d=0$, the seminorm is zero and multiplier one works. This completes all assertions. [F1, F2, step 9.1, algebra] ∎

## Remarks

The reconstruction used the complete statements and proofs in Section 4 of Green and Tao in the local full-text extraction, and Section 3 through Lemma 3.2 for its prerequisite. It is no claim of reading the complete paper or independently checking its PDF pages. Every analytic reduction used here is proved locally or in the stated local supplier; no external theorem or choice principle is imported.

Both small-length alternatives matter. Printed Corollary 4.2 cannot hold for $N=1$ with only positive shifts, since its sole positive-shift correlation vanishes. Printed Lemma 4.5 likewise cannot give an arbitrarily small epsilon-sensitive estimate at $N=1$ for an arbitrary irrational linear coefficient. The ordinary Weyl criterion is valid for every $N$, because its bounded-$N$ case needs only the epsilon-independent estimate $N^j\|\alpha_j\|_{\mathbb T}\leq N^d/2$. A later epsilon-sensitive use must retain the alternative or explicitly discharge it. In the leading-coefficient induction the large-$N$ restriction discharges it; in the amplified recurrence argument the short $\lambda$ range is treated separately, and the long range satisfies the linear supplier's threshold.

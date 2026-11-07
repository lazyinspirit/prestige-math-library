---
dependency_level: 7
id: lem-vertical-fourier-and-bracket-polynomial-reductions
kind: lemma
title: Vertical Fourier and bracket polynomial reductions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-quantitative-malcev-metric-and-subgroup-comparisons
  - lem-quantitative-torus-fourier-and-linear-recurrence
  - def-total-equidistribution-of-a-nil-orbit
  - def-malcev-basis-and-rationality
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Lemma 3.7, Proposition 5.3 and Claim 7.7, printed pp. 485–486, 495–496 and 511
    - title: Ben Green and Terence Tao, On the quantitative distribution of polynomial nilsequences, erratum
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v179-n3-p08-p.pdf
      locator: Section 4, printed pp. 1182–1183
---

## Statement

Let $G/\Gamma$ have an adapted Mal’cev basis, a filtration of degree $d\geq1$ and normalized Haar probability measure, and let $r=\dim G_d$. Identify the central vertical torus $G_d/(G_d\cap\Gamma)$ with $\mathbb T^r=\mathbb R^r/\mathbb Z^r$ by the last $r$ basis coordinates. For a finite sequence $x_1,\ldots,x_N$ which is not $\delta$-equidistributed, where $0<\delta<1/2$, there are $k\in\mathbb Z^r$ with $\|k\|_\infty\leq C_r\delta^{-2}$ and a Lipschitz function $F_k$ such that

$$F_k(zx)=e(k\cdot z)F_k(x),\qquad \left|\frac1N\sum_{n=1}^NF_k(x_n)-\int F_k\right|\geq c_r\delta^{2r+1}\|F_k\|_{\mathrm{Lip}},$$

where $e(t)=\exp(2\pi it)$. The function can be chosen nonzero; the zero frequency is allowed. When $r=0$, the assertion means the original witnessing function and the zero character.

The following bracket conclusion also holds. Let $m\geq0$, $0<\delta<1/2$, $N\geq1$, $\alpha,\beta\in\mathbb R$, $\gamma\in\mathbb T^m$ and $\zeta\in\mathbb R^m$, with $|\alpha|\leq(\delta N)^{-1}$ and $\|\zeta\|_\infty\leq\delta^{-1}$. Braces denote representatives in $[0,1)^m$. If

$$\|\beta+\alpha h+\zeta\cdot\{\gamma h\}\|_{\mathbb R/\mathbb Z}\leq(\delta N)^{-1}$$

for at least $\delta N$ integers $h\in[N]$, then either $\|\zeta\|_\infty\leq C_m\delta^{-c_m}/N$, or some $0\neq k\in\mathbb Z^m$ satisfies $\|k\|_\infty\leq C_m\delta^{-c_m}$ and $\|k\cdot\gamma\|_{\mathbb R/\mathbb Z}\leq C_m\delta^{-c_m}/N$.

Finally, fix $a,b\geq1$. If $\|\zeta\|_\infty\leq\delta^{-b}$ and

$$\|\beta+Ah+\zeta\cdot\{\gamma h\}\|_{\mathbb R/\mathbb Z}\leq\delta^{-b}/N$$

for at least $\delta^aN$ integers $h\in[N]$, with no bound on $A\in\mathbb R$, then either there is an integer $1\leq q\leq C\delta^{-c}$ such that $\|q\zeta_i\|_{\mathbb R/\mathbb Z}\leq C\delta^{-c}/N$ for every $i$, or there is $0\neq k\in\mathbb Z^m$ with $\|k\|_\infty\leq C\delta^{-c}$ and $\|k\cdot\gamma\|_{\mathbb R/\mathbb Z}\leq C\delta^{-c}/N$. Here $C,c$ depend only on $m,a,b$. All constants are independent of $N$, the sequence and the displayed real coefficients.

## Statement references

[Green and Tao, Lemma 3.7, Proposition 5.3 and Claim 7.7](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

[Green and Tao, erratum, Section 4](https://annals.math.princeton.edu/wp-content/uploads/annals-v179-n3-p08-p.pdf)

## Facts & Assumptions

**Given:** The nilmanifold, adapted basis and finite sequence, or the bracket data, under the respective hypotheses of the statement.

[F1] Coordinate-chain metrics, bounded fundamental representatives, bounded left translations, central quotient metrics and invariant normalized Haar probabilities have the asserted quantitative bounds. [[lem-quantitative-malcev-metric-and-subgroup-comparisons]]

[F2] On $\mathbb T^m$, failure of $\varepsilon$-equidistribution of a linear orbit on an integer interval of length $L$ gives $0<\|k\|_\infty\leq C_m\varepsilon^{-c_m}$ and $\|k\cdot\gamma\|_{\mathbb R/\mathbb Z}\leq C_m\varepsilon^{-c_m}/L$. The same Fourier and geometric-sum proof applies to a translated linear orbit. [[lem-quantitative-torus-fourier-and-linear-recurrence]]

[F3] The Lipschitz norm is the sum of the sup norm and the Lipschitz seminorm, and equidistribution is tested by discrepancy against this norm. [[def-total-equidistribution-of-a-nil-orbit]]

[F4] The adapted Mal’cev basis identifies the final central subgroup and its lattice with $\mathbb R^r$ and $\mathbb Z^r$; its group metric is the right-invariant coordinate-chain metric. [[def-malcev-basis-and-rationality]]

## Proof

**Proof technique:** direct.

1.1 Write $D(F)=N^{-1}\sum_nF(x_n)-\int F$. Choose a witness $F$ with $\|F\|_{\mathrm{Lip}}=1$ and $|D(F)|>\delta$. Central vertical translation is an isometry: right invariance and centrality give $d^G(zx,zy)=d^G(x,y)$, and taking infima over lattice translates gives the same equality on $G/\Gamma$. If $z$ has vertical coordinates $\theta\in[-1/2,1/2]^r$, a single chain edge gives $d(zx\Gamma,x\Gamma)\leq d^G(z,e)\leq\|\theta\|_\infty$. For $k\in\mathbb Z^r$, define $F_k(x)=\int_{\mathbb T^r}F(\theta x)e(-k\cdot\theta)\,d\theta$. Change of variable in $\theta$ proves $F_k(zx)=e(k\cdot z)F_k(x)$. The isometry proves $\|F_k\|_{\mathrm{Lip}}\leq1$. Invariant Haar integration gives $\int F_k=0$ for $k\neq0$. [given, F1, F3, F4, algebra]

1.2 We first establish an affine recurrence estimate used in the bracket proof. If $0<\rho<1/2$, $0<\varepsilon\leq\rho/2$ and $\beta+n\alpha$ visits a circle interval $I$ of length $\varepsilon$ at least $\rho N$ times, then either $N\leq C\rho^{-c}$ or there is $1\leq q\leq C\rho^{-c}$ with $\|q\alpha\|\leq C\varepsilon\rho^{-c}/N$. Indeed the tent $H(x)=\max(1-16\operatorname{dist}(x,I)/\rho,0)$ has integral at most $\varepsilon+\rho/8\leq5\rho/8$, empirical mean at least $\rho$, and Lipschitz norm at most $1+16/\rho$. Apply the one-dimensional torus Fourier criterion and geometric-sum bound; the phase $e(k\beta)$ does not affect the modulus of a sum. This supplies $q\leq D\rho^{-u}$ and $v=\|q\alpha\|\leq D\rho^{-u}/N$. If $v=0$ the conclusion follows. Otherwise divide each residue progression modulo $q$ into blocks of $\lfloor1/v\rfloor$ terms and a final shorter block. There are at most $2q+2vN$ blocks, and each has at most $2+\varepsilon/v$ visits to $I$, since its lift traverses an arc of length less than one in steps $v$. Hence $\rho N\leq4q+2\varepsilon q/v+4vN+2\varepsilon N$. For $\varepsilon\leq\rho/8$ and $N$ larger than a sufficiently large fixed multiple of $\rho^{-u-1}$, all terms other than $2\varepsilon q/v$ total at most $\rho N/2$, giving $v\leq4\varepsilon q/(\rho N)$. For $\rho/8<\varepsilon\leq\rho/2$, the initial bound on $v$ already gives the desired estimate after enlarging its exponent. This proves the alternative, retaining the bounded-$N$ case. [F2, F3, algebra, construct]

2.1 For $L\geq2$, set $J_L(t)=L^{-1}|\sum_{j=0}^{L-1}e(jt)|^2$ and $K_L(\theta)=\prod_{j=1}^rJ_L(\theta_j)$. Each factor is nonnegative, has integral one and Fourier coefficients $(1-|k|/L)_+$ supported on $|k|<L$. Summing the geometric series gives $J_L(t)\leq\min(L,(4L\|t\|^2)^{-1})$, whence integration over $0<\|t\|\leq1/2$ gives $\int\|t\|J_L(t)\,dt\leq C\log(2L)/L\leq C'/\sqrt L$. Therefore $\|F-\int F(\theta\,\cdot)K_L(\theta)\,d\theta\|_\infty\leq Cr/\sqrt L$. Choose $L=\max(2,\lceil(8Cr/\delta)^2\rceil)$. The convolution is exactly the finite sum $\sum_{\|k\|_\infty<L}a_kF_k$ with $0\leq a_k\leq1$. Since $\|D\|_{L^\infty\to\mathbb C}\leq2$, this sum has discrepancy greater than $3\delta/4$. One of its at most $(2L-1)^r$ terms has $|D(F_k)|\geq3\delta/[4(2L-1)^r]\geq c_r\delta^{2r+1}\|F_k\|_{\mathrm{Lip}}>0$. This proves the vertical conclusion for $r>0$; for $r=0$ retain the original witness. [step 1.1, algebra, choose]

2.2 We prove the bracket conclusion. For $m=0$ its first outcome is vacuous. Suppose $m\geq1$ and put $Z=\|\zeta\|_\infty$. The case $Z\leq1/(\delta N)$ is already the first outcome. Any bounded range $N\leq C\delta^{-c}$ is also harmless for this conclusion: a unit integer vector $k$ satisfies the second outcome after enlarging $C,c$ until its right-hand side is at least $1/2$. If $Z>\delta/[16(m+1)]$, the assumption $|\alpha|\leq1/(\delta N)$ directly implies $|\alpha|\leq C_m Z\delta^{-c_m}/N$. If $0<Z\leq\delta/[16(m+1)]$, each good $h$ has $\|\beta+\alpha h\|\leq(m+1)Z$, an interval of length $2(m+1)Z\leq\delta/8$. Apply the affine recurrence estimate with $\rho=\delta$. Outside its bounded-$N$ alternative, it gives $q\leq C\delta^{-c}$ and $\|q\alpha\|\leq C_mZ\delta^{-c}/N$. Excluding a further bounded-$N$ range ensures $|q\alpha|<1/2$ by the original assumption on $\alpha$, so its nearest integer is zero. In both branches we have $|\alpha|\leq C_m Z\delta^{-c_m}/N$. [given, step 1.2, algebra]

3.1 Choose small positive constants $u_m,v_m$, with $v_m$ sufficiently small relative to $u_m$, and put $t=u_m\delta\min(Z,1)$ and $s=v_m\delta\min(1,1/Z)$, so $mZs\leq t/2$. If $1/(\delta N)>t/4$, then $Z\leq1$ gives $Z<4/(u_m\delta^2N)$, the first outcome, while $Z>1$ gives the bounded-$N$ range $N<4/(u_m\delta^2)$. Otherwise partition $[N]$ into intervals whose lengths lie between $\ell$ and $2\ell$, with $\ell\geq c_m\delta^{C_m}N$, such that $\alpha h$ varies by at most $t/4$ on each. The bound from step 2.2 permits this choice, since $t/Z\geq u_m\delta^2$ for $Z\leq\delta^{-1}$; enlarge the excluded bounded-$N$ range to ensure $\ell\geq1$. One interval $I$ contains at least $\delta|I|$ good integers. Absorb $\alpha h_0$ at one endpoint into $\theta$. Each good integer of $I$ then satisfies $\|\theta+\zeta\cdot\{\gamma h\}\|\leq t/2$. [step 2.2, algebra, choose]

4.1 Let $\Omega=\{x\in\mathbb T^m:\|\theta+\zeta\cdot\{x\}\|\leq t/2\}$. Outside the width-$s$ neighborhoods of the coordinate seams $x_j=0$, moving a distance less than $s$ changes $\zeta\cdot\{x\}$ by at most $mZs\leq t/2$. Therefore the $s$-neighborhood of $\overline\Omega$ lies in the seam set, of measure at most $2ms$, together with $\{x:\|\theta+\zeta\cdot\{x\}\|\leq t\}$. Choose $i$ with $|\zeta_i|=Z$. On each slice in coordinate $i$, an interval of length $Z$ intersects at most $Z+3$ integer translates of $[-t,t]$, so the slice measure is at most $2t(1+3/Z)$. Consequently the neighborhood has measure at most $2ms+2t(1+3/Z)\leq\delta/4$ when $u_m,v_m$ are chosen small enough. The tent $H(x)=\max(1-\operatorname{dist}(x,\overline\Omega)/s,0)$ thus has empirical mean at least $\delta$ on $I$, integral at most $\delta/4$, and Lipschitz norm at most $1+1/s\leq C_m\delta^{-2}$. The linear torus orbit on $I$ fails $c_m\delta^3$-equidistribution. The torus criterion supplies a nonzero $k$ of power-bounded size with $\|k\cdot\gamma\|\leq C_m\delta^{-c_m}/|I|\leq C_m\delta^{-c'_m}/N$. This proves the bracket conclusion, with scalar stripe width $\delta\min(Z,1)$ and spatial smoothing radius $\delta\min(1,1/Z)$ controlling both small and large $Z$. [F2, F3, step 3.1, algebra, construct]

5.1 A version of the proved bracket conclusion with good-set density at least $\delta^a$, error at most $\delta^{-b}/N$, and $|\alpha|,\|\zeta\|_\infty\leq\delta^{-b}/N,\delta^{-b}$ respectively follows by replacing its parameter by $c\delta^B$, for fixed sufficiently large $B$ and sufficiently small $c>0$. All its hypotheses then hold simultaneously; its conclusions remain fixed powers of $\delta$, with constants depending only on the specified exponents and dimension. Apply this version in dimension $m+1$ with $\zeta'=(\zeta,1)$, $\gamma'=(\gamma,A)$ and $\alpha'=0$. The congruence in the final assertion is unchanged because $Ah=\{Ah\}$ modulo integers. The first outcome bounds each $|\zeta_i|$ by $C\delta^{-c}/N$, giving the desired conclusion with $q=1$. Otherwise there are integers $(k,q)\neq0$ of power-bounded size with $\|k\cdot\gamma+qA\|\leq C\delta^{-c}/N$. If $q=0$, then $k\neq0$ is the desired obstruction. [given, step 4.1, algebra]

6.1 If $q\neq0$, let $\widetilde A$ be the representative of $k\cdot\gamma+qA$ of absolute value at most $C\delta^{-c}/N$. Multiply the original congruence by $q$ and use $k\cdot\{\gamma h\}=h k\cdot\gamma$ modulo integers. The resulting congruence is $\|q\beta+\widetilde A h+(q\zeta-k)\cdot\{\gamma h\}\|\leq C\delta^{-c}/N$ on the same good set. Apply the rescaled bracket conclusion once more. Its first outcome bounds every $|q\zeta_i-k_i|$ by $C\delta^{-c}/N$; replace $q$ by $|q|$ to obtain the stated simultaneous approximation. Its second outcome is the required nonzero character obstruction for $\gamma$. If $m=0$ the simultaneous approximation outcome is vacuous and one can take $q=1$. These arguments prove all assertions. [step 5.1, step 4.1, algebra] ∎

## Remarks

The local reconstruction uses the targeted full-text passages in the two cited papers: GT12 Lemma 3.7, Proposition 5.3 and Claim 7.7, and GT14 Section 4. No reading of the whole papers or visual inspection of the PDFs is asserted. The large-$Z$ branch before applying recurrence is the erratum's correction; the scalar stripe width and spatial smoothing radius in the proof make the later volume and Lipschitz estimates uniform. The affine recurrence argument retains its bounded-$N$ alternative. Neither a multiparameter theorem nor an external theorem import is used.

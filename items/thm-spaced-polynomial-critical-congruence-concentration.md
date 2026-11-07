---
dependency_level: 3
id: thm-spaced-polynomial-critical-congruence-concentration
kind: theorem
title: "Critical Concentration for Spaced Polynomial Congruences"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-spaced-polynomial-weighted-congruence-mean-values
  - lem-spaced-polynomial-congruence-family-rescaling
  - lem-spaced-polynomial-critical-congruence-conditioning
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Wooley, Nested efficient congruencing and relatives of Vinogradov's mean value theorem, arXiv:1708.01220v2, Theorem 3.1 and §§3–10"
      url: "https://arxiv.org/pdf/1708.01220v2"
---

## Statement

For every $k\ge1$, with $s=k(k+1)/2$, the universal concentration exponent
of the weighted congruence mean-value definition satisfies
$\Lambda_{s,k}=0$. The supremum here includes both $\mathbb Z$ at every
prime $p>k$ and every $\mathbb F_q[t]$ of characteristic greater than $k$
at every monic irreducible $\pi$.

## Statement references

[[def-spaced-polynomial-weighted-congruence-mean-values]]

## Facts & Assumptions

**Given:** The ranks, admissible places, finite complex sequences and parameter hypotheses in the Statement.

[F1] All means, admissible places and limiting exponents are defined in
[[def-spaced-polynomial-weighted-congruence-mean-values]].

[F2] Uniform rescaling, its sharp mixed bound, refinement and finite-character
orthogonality are proved in
[[lem-spaced-polynomial-congruence-family-rescaling]].

[F3] The rank-one base and critical conditioning inequality are proved in
[[lem-spaced-polynomial-critical-congruence-conditioning]].

[F4] All subsequent Hölder inequalities are on finite probability spaces and
follow from [[thm-holder-inequality-for-integrals]].

## Proof

1.1 Proceed by induction on $k$. The case $k=1$ is [F3]. At any rank $j$, the equality $\Lambda_{T_j,j}=0$, by the definition of limsup and its supremum over all places, implies: for each $\tau,e>0$, for all sufficiently large $D$, every $\pi^d$-spaced rank-$j$ system with $d\ge\tau D$ and every finite complex coefficient sequence satisfy $U^D_{T_j,j}\le Q^{eD}U^{D,\lceil D/j\rceil}_{T_j,j}$. Indeed $\lambda_{T_j,j}(\tau)=0$, so eventually its defining quotient is at most $e$, and $\lceil D/j\rceil\le D$. The threshold is independent of the place and all data. Thus the induction hypothesis supplies precisely this finite estimate at each $1\le j<k$. [F1, F3]

2.1 Fix $k\ge2$ and suppose for contradiction that $0<\Lambda=\Lambda_{s,k}\le s$, where $s=T_k$. Put $N=\lceil16sk/\Lambda\rceil$. Choose $0<\mu<(16k^{2N+4})^{-1}$ and $0<\delta<(8k^2)^{-1}$. Choose $\epsilon>0$ so small that $$ \epsilon<\min\left\{\frac\Lambda4,\frac\mu{100}, \frac{\delta\mu\Lambda}{100k}, \frac{\delta\mu\Lambda^2}{100k^3}, \frac1{k(\Lambda+1)}\right\}. \tag{4} $$ Choose $0<\tau<\delta\mu/(8k)$ such that $\lambda_{s,k}(\tau)>\Lambda-\epsilon/3$; this is possible by monotonicity and the supremum defining $\Lambda$. By [F3] choose arbitrarily large witnesses with $U^{B,H}>0$ and $U^B\ge Q^{(\Lambda-\epsilon)H}U^{B,H}$. Set $\nu=\lceil4\epsilon H/\Lambda\rceil$, $\theta=\lceil\mu H\rceil$ and write $\mathcal K^r_{a,b}=\mathcal K^r_{a,b}(\Lambda)$. For all sufficiently large witness values $B$, (4) ensures $$ \nu\le\delta\theta,\quad k\nu\le\delta\theta/4,\quad \epsilon H\le\theta,\quad k^{2N+2}\theta<H/2,\quad 2k^3\nu<\delta\theta\Lambda,\quad \epsilon^2B\le\nu. \tag{5} $$ For example $\nu\le8\epsilon H/\Lambda$ and $\mu H\le\theta\le2\mu H$ for large $H$ give every inequality except the last immediately from (4); the last follows from $B\le kH$ and $\nu\ge4\epsilon H/\Lambda$. All thresholds are uniform in the place. Also $a-(k-r)\gamma\ge3\delta\theta/4>\tau B$ whenever $a\ge\delta\theta$ and $0\le\gamma<\nu$. The rescaling estimate [F2], with error $\epsilon$, is available at all exponents at most $H/2$. [F1, F2, F3, step 1.1]

3.1 We first prove a rank-lowering inequality. Suppose $1\le r\le k-1$, $a,b\ge\delta\theta$ and $ra\le L=(k-r+1)b\le B$, and put $b'=\lceil L/r\rceil$. Then $$ K^r_{a,b}\le Q^{k^2\nu}K^r_{b',b}. \tag{6} $$ Fix a separated residue pair and choose representatives $\xi,\eta\in R$. Write $z=\xi-\eta=\pi^\gamma\omega$, where $0\le\gamma<\nu$ and $\omega$ is a unit at $\pi$. Set $D=L-ra-(k-r)\gamma$. If $D\le\nu$, then $b'-a\le1+(\nu+(k-r)\gamma)/r$, so $T_r(b'-a)\le k^2\nu$ for large $B$. The refinement inequality [F2] with moment $T_r$ proves (6) for the contribution of these pairs. The exponent $b'$ is common to all pairs; separation modulo $\pi^\nu$ is preserved under refinement. [F1, F2, step 2.1]

4.1 Now suppose $D>\nu$. Expand the mixed mean into congruences. The large block lies in $\eta+\pi^bR$. Normalize low coefficients and translate by $\eta$ as in [F2], obtaining polynomials $\Phi_j(X)=X^j+\pi^cX^{k+1}P_j(X)$ modulo $\pi^B$. Its $j$th large-block difference is divisible by $\pi^{jb}$. Consequently the small-block variables $\xi+\pi^a u_i$, $\xi+\pi^a v_i$ obey $$ \sum_{i=1}^{T_r}\bigl(\Phi_{j_\ell}(z+\pi^au_i) -\Phi_{j_\ell}(z+\pi^av_i)\bigr)\equiv0\pmod{\pi^L}, \qquad j_\ell=k-r+\ell,\quad1\le\ell\le r. \tag{7} $$ Let $d_{i\ell}$ be the coefficient of $X^i$ in $\Phi_{j_\ell}(z+X)-\Phi_{j_\ell}(z)$. For $1\le i\le r$ write $d_{i\ell}=z^{j_\ell-i}A_{i\ell}$ in the fraction field. These $A_{i\ell}$ are integral: if the coefficient of $X^m$ in $P$'s high-degree part is $\pi^c c_{m\ell}$, then explicitly $$ A_{i\ell}=\binom{j_\ell}{i} +\pi^c\sum_{m\ge k+1}c_{m\ell}\binom mi z^{m-j_\ell}. \tag{8} $$ The binomial term is zero for $i>j_\ell$, so (8) is valid also in that case. Modulo $\pi$, $A$ is the binomial matrix. Multiplication of row $i$ by $i!$ gives evaluation of the falling-factorial polynomial of degree $i$ at the distinct nonzero integers $j_1,\ldots,j_r$. Factoring $j_\ell$ from column $\ell$ leaves monic polynomials of degrees $0,\ldots,r-1$; subtracting lower rows converts their determinant to the Vandermonde determinant. Thus $\det A$ is a unit: every integer factor is nonzero in residue characteristic greater than $k$. [F2, step 3.1, algebra]

5.1 Multiply equation $\ell$ of (7) by the integral factor $z^{r-\ell}$. Its low terms are $\sum_{i=1}^r A_{i\ell}z^{k-i}\pi^{ai}S_i$, where $S_i=\sum(u_j^i-v_j^i)$. All remaining terms have degree $m>r$ and are integral multiples of $\pi^{am}S_m$. Apply an integral inverse of $A$ modulo $\pi^L$. For each $i$ this gives $$ z^{k-i}\pi^{ai}S_i+ \sum_{m>r}C_{mi}\pi^{am}S_m\equiv0\pmod{\pi^L},\qquad C_{mi}\in R. \tag{9} $$ Divide by $\pi^{ai+(k-i)\gamma}$ and multiply by an inverse of $\omega^{k-i}$ modulo the remaining modulus. These divisions are legitimate for every coefficient because, for $m>r$, $$ (m-i)a-(k-i)\gamma\ge a-(k-r)\gamma>0. $$ The remaining modulus is at least $D$, since $ra+(k-r)\gamma-ia-(k-i)\gamma=(r-i)(a-\gamma)\ge0$. Thus integral rank-$r$ polynomials $\Psi_i(Y)=Y^i+\pi^d\Xi_i(Y)$, $d=a-(k-r)\gamma>\tau B\ge\tau D$, give implied congruences $\sum(\Psi_i(u_j)-\Psi_i(v_j))\equiv0\pmod{\pi^D}$. In constructing them, choose unit inverses modulo a large enough power of $\pi$; all coefficient errors then vanish modulo $\pi^D$. No inverse of the nonunit $z$ in $R$ was used. [step 2.1, step 4.1, algebra]

6.1 For fixed original character tuple, twist the small-block coefficient sequence to $c_y=a_{\xi+\pi^ay}\chi_\phi(\xi+\pi^ay)$. Insert an extra rank-$r$ character average modulo $\pi^D$ imposing the congruences from step 5.1. By [F2] this insertion is exact after the original character average; the same remains true after any residue restriction. Since $D>\nu\to\infty$, the rank-$r$ induction hypothesis from step 1.1 applies uniformly, with error $e=\epsilon^2$. It restricts $y$ to a common class modulo $\pi^{H'}$, $H'=\lceil D/r\rceil$, at cost $Q^{\epsilon^2D}$. Remove the redundant extra congruences by orthogonality. The original small block is now in one class modulo $\pi^{a+H'}$. Its squared mass is exactly the mass of the twisted sequence in that class; all twists have modulus one. Refine further to $\pi^{b'}$ using [F2]. This is legitimate since $$ 0\le b'-a-H' =\lceil L/r\rceil-\lceil(L-(k-r)\gamma)/r\rceil \le1+(k-r)\gamma/r. $$ It costs $Q^{T_r(b'-a-H')}$. Summing the mass-weighted inequalities over the original residue pairs preserves separation and gives $K^r_{a,b}\le Q^{\epsilon^2D+T_r(b'-a-H')}K^r_{b',b}$. Because $\gamma\le\nu-1$, the second exponent is at most $k^2\nu/2$; by (5) the first is at most $\nu$. Their sum is at most $k^2\nu$ for $k\ge2$. This proves (6) also for these pairs, and hence globally. The inequalities are valid for complex coefficients because only the nonnegative character moments were compared; inserted congruences were removed by exact expansion, not by dropping complex weights. [F2, step 1.1, step 2.1, step 3.1, step 5.1]

7.1 Continue with the hypotheses of (6). Hölder, first in the characters and then in the mass-weighted separated residue pairs, gives for $r\ge2$ $$ K^r_{b',b}\le (K^{k-r}_{b,b'})^{1/(k-r+1)} (K^{r-1}_{b',b})^{(k-r)/(k-r+1)}. \tag{10} $$ Indeed the exponents of $|f_{b'}|$ in the two factors are $2s-(k-r)(k-r+1)$ and $r(r-1)$; their indicated convex combination is $r(r+1)$. The corresponding exponents of $|f_b|$ sum to the complementary value $2s-r(r+1)$. On dividing by $Q^{\Lambda H}U^{B,H}$ and raising to $q_r$, (6) and (10) yield $$ \mathcal K^r_{a,b}\le Q^{k^2\nu} (\mathcal K^{k-r}_{b,b'})^{1/(k-r+1)} (\mathcal K^{r-1}_{b',b})^{1-1/r}. \tag{11} $$ Here $q_r\le1$ and $q_r(k-r)/(k-r+1)=(1-1/r)q_{r-1}$. When $r=1$, (10) instead has $K^0_{kb,b}\le U^{B,b}$: the omitted residue restriction only decreases this nonnegative outer sum. If $b\le H/2$, [F2] gives $U^{B,b}/(Q^{\Lambda H}U^{B,H})\le Q^{\epsilon H-\Lambda b}$. Since $\epsilon H\le\Lambda\nu\le s\nu$, it follows that $$ \mathcal K^1_{a,b}\le Q^{2k^2\nu} (\mathcal K^{k-1}_{b,kb})^{1/k}Q^{-b\Lambda(1-1/k)}. \tag{12} $$ Equations (11)–(12) are used only in the stated safe cutoff range. [F1, F2, F4, step 6.1]

8.1 Put $\rho_j=j/(k-j+1)$ and $b_j=\lceil b/\rho_j\rceil$. If $a\ge\delta\theta$, $b\ge k\delta\theta$, $b\le H/2$, $ra\le(k-r+1)b$, and $kb\le B$, induction on $r$ in (11)–(12) gives $$ \mathcal K^r_{a,b}\le Q^{(r+1)k^2\nu-b(1-1/k)\Lambda/r} \prod_{j=1}^r(\mathcal K^{k-j}_{b,b_j})^{\rho_j/r}. \tag{13} $$ For $r=1$ this is (12). For $r=P\ge2$, apply (11) and use the induction hypothesis on $\mathcal K^{P-1}_{b_P,b}$. Its first exponent satisfies $b_P\ge2b/k\ge\delta\theta$; its shape condition follows from $(P-1)b_P\le(P-1)((k-P+1)b/P+1)<(k-P+2)b$ for all sufficiently large $B$ (then $b\ge k^2$). Its second exponent remains $b$, so the cutoff $b\le H/2$ persists throughout this induction. The power $1-1/P$ converts the product powers $\rho_j/(P-1)$ to $\rho_j/P$, and the error powers total at most $(P+1)k^2\nu$. This proves (13). [step 7.1, algebra]

9.1 The product in (13) is at most $\max_{1\le j\le r}(\mathcal K^{k-j}_{b,b_j})^{\rho_j}$. Since $(1-1/k)/r\ge1/k$, (5) and $b\ge k\delta\theta$ imply $(r+1)k^2\nu\le b\Lambda/(2k)$. Consequently some $1\le j\le r$ satisfies $$ \mathcal K^r_{a,b}\le (\mathcal K^{k-j}_{b,b_j})^{\rho_j}Q^{-b\Lambda/(2k)}. \tag{14} $$ The maximum is over a finite nonempty set, so it is attained, also when some means vanish. [step 2.1, step 8.1]

10.1 Suppose now $a\ge\delta\theta$, $b\ge k^2\delta\theta$, $ra\le(k-r+1)b$, and $\max(a,k^2b)\le H/2$. Apply (14), choosing $j=r_1\le r$ and writing $b_1=\lceil(k-r_1+1)b/r_1\rceil$. It gives $\mathcal K^r_{a,b}\le (\mathcal K^{k-r_1}_{b,b_1})^{\rho_{r_1}}Q^{-b\Lambda/(2k)}$. Here $b/k\le b_1\le kb$, so $b_1\ge k\delta\theta$ and $b_1\le H/2$, and $kb_1\le k^2b\le B$. Also $(k-r_1)b\le(r_1+1)b_1$, which is the required shape inequality. Thus apply (14) a second time with rank $k-r_1$, obtaining a selection $r_2\le k-r_1$. Put $$ a'=b_1,\quad b'=\left\lceil\frac{k-r_2+1}{r_2}b_1\right\rceil, \quad r'=k-r_2,\quad \rho=\rho_{r_1}\rho_{r_2}. $$ Combining the two estimates and discarding only an extra factor at most $1$ gives $$ \mathcal K^r_{a,b}\le(\mathcal K^{r'}_{a',b'})^\rho Q^{-b\Lambda/(2k)}. \tag{15} $$ Both uses have the safe cutoff required in step 7.1. [step 9.1]

11.1 These explicit parameters satisfy $$ \begin{gathered} 1\le r'\le k-1,\quad a'\ge\delta\theta,\quad b'\ge k^2\delta\theta, \quad r'a'\le(k-r'+1)b',\\ 0<\rho\le(1-1/k)^2<1,\quad (1+2/k)b\le b'\le k^2b,\quad \rho b'\ge b,\quad a'\le kb. \end{gathered}\tag{16} $$ For the bound on $\rho$, use $r_2\le k-r_1$ to bound it by $r_1/(r_1+1)\cdot(k-r_1)/(k-r_1+1)$; each factor is at most $(k-1)/k$. Equality in this last bound is allowed when $k=2$. For growth, dropping the ceilings gives $b'/b\ge(r_1+1)/r_1\cdot(k-r_1+1)/(k-r_1) \ge(k/(k-1))^2>1+2/k$. The upper bound uses each ceiling $\lceil(k-j+1)b/j\rceil\le kb$ for integer $b\ge1$. Dropping the same ceilings gives $\rho b'\ge b$. The remaining inequalities follow from $a'=b_1\ge b/k$ and $b'\ge(k-r_2+1)a'/r_2$; in particular the latter implies the shape inequality with $r'=k-r_2$. [step 10.1, algebra]

12.1 Start at $a_0=b_0=\theta$, $r_0=1$. By [F3] and $\epsilon H\le\theta$, $\mathcal K^1_{\theta,\theta}\ge2^{-s}Q^{-2s\theta}$. Iterate (15) exactly $N$ times, obtaining $a_n,b_n,r_n,\rho_n$. The hypotheses persist: lower bounds and shape follow from (16), $b_n\le k^{2n}\theta$, $a_n\le k^{2n-1}\theta$ for $n\ge1$, and (5) ensures $\max(a_n,k^2b_n)<H/2$ whenever another step is needed. Let $P_n=\rho_1\cdots\rho_n$ and $P_0=1$. From $\rho_n b_n\ge b_{n-1}$, induction gives $P_nb_n\ge\theta$. Successive substitution into (15) therefore yields $$ \mathcal K^1_{\theta,\theta} \le(\mathcal K^{r_N}_{a_N,b_N})^{P_N} Q^{-\Lambda\sum_{n=0}^{N-1}P_nb_n/(2k)} \le(\mathcal K^{r_N}_{a_N,b_N})^{P_N}Q^{-N\Lambda\theta/(2k)}. \tag{17} $$ Here $0<P_N\le1$; no assertion that it is bounded away from zero is needed. [F3, step 2.1, step 10.1, step 11.1]

13.1 The terminal exponents $a_N,b_N$ are at most $H/2$. The sharp mixed bound [F2] gives $K^{r_N}_{a_N,b_N}/U^{B,H}\le Q^{(\Lambda+\epsilon)H}$. Since $q_{r_N}\le1$, its normalized form satisfies $\mathcal K^{r_N}_{a_N,b_N}\le Q^{q_{r_N}\epsilon H}\le Q^\theta$. Combine this with (17) and the lower bound in step 12.1 to obtain $2^{-s}\le Q^{(2s+1-N\Lambda/(2k))\theta}$. But $N\Lambda/(2k)\ge8s$, so the right side is at most $2^{(1-6s)\theta}$, which tends to zero along the arbitrarily large witnesses. This contradiction proves $\Lambda_{s,k}=0$. It also supplies the uniform finite estimate at rank $k$ by step 1.1, closing the induction. [F2, step 1.1, step 2.1, step 12.1] ∎

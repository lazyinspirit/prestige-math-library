---
dependency_level: 6
id: lem-polynomial-coefficient-recovery-and-affine-extrapolation
kind: lemma
title: "Polynomial coefficient recovery and affine extrapolation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-quantitative-polynomial-weyl-and-recurrence
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
      locator: Lemma 7.6 and Lemmas 7.10, 8.4, printed pp. 509–510, 516, 519
---

## Statement

For a polynomial $p:\mathbb Z\to\mathbb R/\mathbb Z$, write $p(n)=\sum_{i=0}^d\alpha_i\binom ni$ and $\|p\|_{C^\infty[N]}=\max_{1\leq i\leq d}N^i\|\alpha_i\|_{\mathbb R/\mathbb Z}$, with value zero in degree zero. The following two assertions hold.

For fixed $d,a,b$ there is $C$ such that, if $0<\delta<1/2$, $N\geq1$, $P,Q$ have degree at most $d$, $P(0)=0$, $Q(0)=Q(1)=0$, $H\subseteq[N]$ has size at least $\delta^aN$, and $\sigma:[N]\to\mathbb R/\mathbb Z$ satisfies $\|P(n)+Q(n+h)-Q(n)+\sigma(h)n\|_{C^\infty[N]}\leq\delta^{-b}$ for every $h\in H$, then, with $\alpha=\Delta^2Q(0)$, there is one integer $1\leq q\leq C\delta^{-C}$ such that $\|q\Delta^iQ(0)\|\leq C\delta^{-C}N^{-i}$ for $3\leq i\leq d$ and $\|q(P(1)+\alpha h+\sigma(h))\|\leq C\delta^{-C}N^{-1}$ for every $h\in H$.

For fixed $d$ there is $C_d$ such that, if $B\geq2$, $N\geq1$, $a,b$ are rational, $b\neq0$, $\operatorname{height}(b)\leq B$, the denominator of $a$ is at most $B$, and $|a|\leq BN$, then for every real polynomial lift of a circle polynomial $p$ of degree at most $d$, with $\widetilde p(x)=p(a+bx)$, some integer $1\leq q\leq C_dB^{C_d}$ satisfies $\|qp\|_{C^\infty[N]}\leq C_dB^{C_d}\|\widetilde p\|_{C^\infty[N]}$. Rational evaluation uses the chosen lift. In particular a bounded obstruction on a progression in $[N]$ of length at least $\delta N$ extrapolates to one on $[N]$ with losses bounded by fixed powers of $\delta^{-1}$.

## Statement references

[Green and Tao, Lemma 7.6 and single-parameter extrapolation](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

## Facts & Assumptions

[F1] Epsilon-sensitive polynomial recurrence, with its explicit bounded-length alternative, is proved in [[lem-quantitative-polynomial-weyl-and-recurrence]].

[F2] The binomial finite-difference convention is that of [[def-polynomial-sequence-on-a-filtered-group]]; circle polynomial coefficients are considered modulo integers.

## Proof

**Given:** The hypotheses of each assertion. Constants may depend on the fixed degrees and, in the first assertion, $a,b$.

1.1 If $d\leq1$, the hypotheses $Q(0)=Q(1)=0$ force the circle polynomial $Q$ to vanish identically, and $P(0)=0$ gives $P(n)=P(1)n$ in $\mathbb R/\mathbb Z$. Thus $\alpha=\Delta^2Q(0)=0$, and for each $h$ the polynomial in the first seminorm hypothesis is the degree-at-most-one polynomial $n(P(1)+\sigma(h))$. Its first binomial coefficient is $P(1)+\sigma(h)$; if the tested polynomial is constant, this coefficient is zero and the same estimate holds. Therefore $N\|P(1)+\alpha h+\sigma(h)\|\leq K$ for every $h\in H$. Taking $q=1$ gives all conclusions, since the range $3\leq i\leq d$ is empty. In what follows assume $d\geq2$. Put $K=\delta^{-b}$ and $\rho=\min(\delta^a,1/4)$. The second binomial coefficient in the first hypothesis gives $\|r(h)\|\leq K/N^2$ on $H$, where $r(h)=\Delta^2(P-Q)(0)+\Delta^2Q(h)$. Choose a large fixed exponent $C_0$. If $N\leq C\delta^{-C_0}$, every conclusion follows with $q=1$ by increasing the final exponent until $C\delta^{-C}N^{-i}\geq1/2$ for $1\leq i\leq d$. Otherwise the occupied circle interval has length $2K/N^2<\rho/2$, and $N$ exceeds the bounded-length threshold for the recurrence supplier at density $\rho$. That supplier gives a common $q_0\leq C\delta^{-C}$ with $\|q_0r\|_{C^\infty[N]}\leq C\delta^{-C}/N^2$. The thresholds are fixed powers because $\rho$ is bounded below by a fixed power of $\delta$. [F1, F2, given, algebra]

1.2 For the affine assertion expand $\binom{(x-a)/b}{j}=\sum_{i=0}^jc_{ij}\binom xi$. Expanding its product of $j$ affine factors gives the coefficient of $x^l$ bounded by $B^{C_d}(1+|a|)^{j-l}$. Conversion from ordinary powers to binomial powers is a fixed rational matrix, with only $l\geq i$ contributing. Thus $|c_{ij}|\leq C_dB^{C_d}N^{j-i}$ for $i\geq1$. One integer $q\leq C_dB^{C_d}$ clears all $c_{ij}$: their denominators use only the denominator of $a$, the numerator of $b$, and the fixed factorials. In particular the large numerator of $a$ does not enter that denominator bound. [F2, given, algebra]

2.1 The coefficient of $\binom hj$ in $r(h)$, for $j\geq1$, is $\Delta^{j+2}Q(0)$. Thus $\|q_0\Delta^iQ(0)\|\leq C\delta^{-C}N^{-i}$ for $i\geq3$. Put $R(n)=Q(n)-\alpha\binom n2$. Its first three binomial coefficients vanish. Select lifts modulo integers of each coefficient of $q_0R$ in degree $i\geq3$ with magnitude at most $C\delta^{-C}N^{-i}$. Since $\Delta\binom hi=\binom h{i-1}$, for $h\in[N]$ these lifts give $\|q_0\Delta R(h)\|\leq C_d\delta^{-C}/N$. The first binomial coefficient in the hypothesis is $P(1)+\alpha h+\sigma(h)+\Delta R(h)$ and has norm at most $K/N$. Multiplying by $q_0$ proves the remaining conclusion on all of $H$. Together with the bounded-$N$ branch this proves the first assertion for every $N$. [F2, step 1.1, algebra]

2.2 Write $\widetilde p(x)=\sum_j\beta_j\binom xj$ and $S=\|\widetilde p\|_{C^\infty[N]}$. Choose integers $z_j$ with $|\beta_j-z_j|\leq S/N^j$ for $j\geq1$. Since $p(x)=\sum_j\beta_j\binom{(x-a)/b}{j}$, its $i$th coefficient after multiplication by $q$ differs from the integer $\sum_{j\geq i}qc_{ij}z_j$ by at most $\sum_{j\geq i}C_dB^{C_d}N^{j-i}S/N^j\leq C_dB^{C_d}S/N^i$. The constant coefficient contributes nothing when $i\geq1$. Taking the maximum proves the affine bound. The argument works for every chosen real lift; integer affine substitution is intrinsically defined on circle polynomials. [step 1.2, algebra]

3.1 For a progression $\{a+bn:1\leq n\leq L\}\subseteq[N]$ with $L\geq\delta N$ and $L\geq2$, take positive integral $b\leq2/\delta$ and $|a|\leq3N/\delta$. Also $\|\widetilde p\|_{C^\infty[N]}\leq\delta^{-d}\|\widetilde p\|_{C^\infty[L]}$. Applying step 2.2 with $B=3/\delta$ gives the stated fixed-power extrapolation. If $L=1$, then $N\leq\delta^{-1}$ and the universal bound $\|p\|_{C^\infty[N]}\leq N^d/2$ is already a fixed power of $\delta^{-1}$. Degree-zero polynomials have seminorm zero throughout. This completes the proof. [F2, step 2.2, algebra] ∎

## Source notes

Read the local full-text proof of GT12 Lemma 7.6, Lemma 7.10 and the change-of-binomial-basis portion of Lemma 8.4. The affine proof above retains the scale of $a$, which can be of size $N$ at progression use sites; no unequal-sides multiparameter theorem is used. The small-$N$ recurrence branch is explicitly discharged rather than deleting the supplier's alternative.

---
id: thm-montgomery-vaughan-zero-density-n1-and-n2
kind: theorem
title: Ingham–Huxley zero-density estimates for Dirichlet L-functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-dirichlet-l-zero-density-counting-functions
- lem-primitive-dirichlet-l-zero-count-in-unit-window
- def-natural-logarithm
- lem-dirichlet-exponential-zero-detector
- lem-dirichlet-character-hybrid-mean-square-and-separated-sampling
- lem-dirichlet-character-hybrid-sampling-with-varying-real-parts
- lem-dirichlet-l-family-fourth-moment-and-separated-sampling
- thm-dirichlet-character-primitive-induction
- def-primitive-dirichlet-character-and-conductor
- def-dirichlet-character-modulo-q
- def-number-theoretic-mobius-function
- def-divisor-counting-function
- thm-canonical-prime-factorisation
- thm-dirichlet-l-euler-product
- thm-ftc-second-part
- lem-continuous-functions-riemann-integrable
- lem-riemann-integral-linearity
- thm-logarithm-derivative-and-integral
- def-induced-dirichlet-character
- thm-dirichlet-character-orthogonality
- lem-dirichlet-character-hybrid-reflection-large-values
- lem-dirichlet-log-gaussian-short-zero-detector
justified_by: []
aliases: []
forward_refs: []
dependency_level: 4
sources:
  references:
  - title: Montgomery–Vaughan, Multiplicative Number Theory III, Chapter 28 §28.4
    url: https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf
    locator: Theorems 28.4 and 28.6, Corollaries 28.5 and 28.7, printed pp. 192–201.
proof_strategy: direct
axiom_use: None. The proof uses finite indexed character sums, compact Riemann and contour calculus and explicit absolute tails.
---

## Statement

Let $q,Q$ be positive integers, let $T\ge1$, and let $1/2\le\sigma\le1$. Define $N_1(\sigma,q,T)$ as the sum, over all Dirichlet characters modulo $q$, of the number of zeros with multiplicity of the Dirichlet $L$-function of each character\u2019s unique primitive inducing character in $\operatorname{Re}s\ge\sigma$, $|\operatorname{Im}s|\le T$. Define $N_2(\sigma,Q,T)$ as the sum of these zero counts over primitive Dirichlet characters of conductor at most $Q$. The logarithms below are natural. There is an absolute constant $C>0$ such that, uniformly over these ranges,
$$N_1(\sigma,q,T)\le C(qT)^{3(1-\sigma)/(2-\sigma)}\bigl(\log(2qT)\bigr)^6,$$
and
$$N_2(\sigma,Q,T)\le C(Q^2T)^{3(1-\sigma)/(2-\sigma)}\bigl(\log(2QT)\bigr)^6.$$
For every $\eta>0$ there are constants $C_\eta>0$ and $B_\eta>0$ such that, uniformly for $2/3\le\sigma\le1$,
$$N_1(\sigma,q,T)\le C_\eta\bigl(\log(2qT)\bigr)^{B_\eta}\left((qT)^{(2+\eta)(1-\sigma)}+(qT)^{3(1-\sigma)/(3\sigma-1)}\right),$$
and
$$N_2(\sigma,Q,T)\le C_\eta\bigl(\log(2QT)\bigr)^{B_\eta}\left((QT)^{(2+\eta)(1-\sigma)}+(Q^2T)^{3(1-\sigma)/(3\sigma-1)}\right).$$
Consequently, for some absolute $c>0$, uniformly for $1/2\le\sigma\le1$,
$$N_1(\sigma,q,T)\le C(qT)^{(12/5)(1-\sigma)}\bigl(\log(2qT)\bigr)^c,\qquad N_2(\sigma,Q,T)\le C(Q^2T)^{(12/5)(1-\sigma)}\bigl(\log(2QT)\bigr)^c.$$
The constants with subscripts may depend only on the indicated positive parameter; the estimates are uniform in the remaining displayed variables.

## Statement references

[Montgomery–Vaughan, Theorem 28.4 and Corollary 28.5](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

[Montgomery–Vaughan, Theorem 28.6 and Corollary 28.7](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Remarks

The local proofs below retain the actual-modulus primitive-ancestor convention, all stated parameter ranges, multiplicities, both height signs and conductor one. The short detector uses log-Gaussian smoothing derived locally; it is not a literal copy of the source’s general smoothing theorem. Log-free density, zero repulsion and Guth–Maynard estimates require separate arguments.


## Facts & Assumptions

**Given:** The original parameters and zero-counting conventions.

[F1] $N_1,N_2$ count zero occurrences with multiplicity in the displayed regions. Every actual character modulo $q$ has a unique primitive ancestor, and each primitive character of conductor dividing $q$ induces exactly one character modulo $q$. The conductor-one character is included. The numbers of labels in the two families are at most $q$ and $Q^2$, respectively ([[def-dirichlet-l-zero-density-counting-functions]], [[thm-dirichlet-character-primitive-induction]], [[def-primitive-dirichlet-character-and-conductor]], [[def-dirichlet-character-modulo-q]], [[def-induced-dirichlet-character]], [[thm-dirichlet-character-orthogonality]]).

[F2] Primitive conductor-$d$ $L$-functions have at most $C\log(d(|t|+3))$ zero occurrences in $1/2\le\beta\le1$, $|\gamma-t|\le1$. The Euler product is nonzero for $\operatorname{Re}s>1$ ([[lem-primitive-dirichlet-l-zero-count-in-unit-window]], [[thm-dirichlet-l-euler-product]]).

[F3] The exponential detector, with its literal parameter restrictions, coefficient $a_K(n)=\sum_{l\mid n,l\le K}\mu(l)$, finite polynomial, factor $\log H$, conductor-one exclusion $|\gamma|>(\log H)^2$ and absolutely convergent critical-line integral ([[lem-dirichlet-exponential-zero-detector]]).

[F4] For both the actual-modulus primitive-ancestor family and the primitive conductor-at-most-$Q$ family, indexed separated real-time sampling bounds a polynomial's second moment by $C(\delta^{-1}+\log(2N))\sum b_n|c_n|^2$, on every real interval of length $U\ge2$. In the ancestor branch $b_n=qU+n$, with weight one; in the primitive branch $b_n=Q^2U+n$ and label weight $d/\varphi(d)\ge1$ ([[lem-dirichlet-character-hybrid-mean-square-and-separated-sampling]]).

[F5] The corresponding varying-nonnegative-real-part sampling estimate has the additional coefficient weight $W_N(n)=1+\log(\log(2N)/\log(2n))$. For $H\ge\exp(64)$, $H\le Y\le H^{3/2}$ and $N=\lfloor Y(\log H)^2\rfloor$, it satisfies $W_N(n)\le1+\log2$ on the integer support $H<n\le N$ ([[lem-dirichlet-character-hybrid-sampling-with-varying-real-parts]]).

[F6] For either of these two weight-one families, with $\kappa=q$ or $Q^2$, $V\ge1$, $H_V=\kappa(V+4)$, $B_V=\log H_V$, and one fixed $|\sigma_0-1/2|\le1/(64B_V)$, the sum of $|L(\sigma_0+it,\psi)|^4$ at finite indexed same-label $\delta$-separated times in $[-V,V]$ is at most $C(\delta^{-1}+B_V)H_VB_V^4$. This includes conductor one, both height signs, and repeated labels with separated samples ([[lem-dirichlet-l-family-fourth-moment-and-separated-sampling]]).

[F7] Möbius and divisor counting are defined by finite canonical prime factorisation; the former is bounded by one in modulus ([[def-number-theoretic-mobius-function]], [[def-divisor-counting-function]], [[thm-canonical-prime-factorisation]]).

[F8] Compact continuous Riemann integrals are linear and obey the fundamental theorem; $\log x=\int_1^xdt/t$ ([[thm-ftc-second-part]], [[lem-continuous-functions-riemann-integrable]], [[lem-riemann-integral-linearity]], [[thm-logarithm-derivative-and-integral]]).


[F9] For the exact weight-one ancestor or primitive-conductor family, $U\ge2$, $H=E(U+2)$ with $E=q$ or $Q^2$, arbitrary indexed nonnegative sample real parts, and one-separated same-label times in any interval of length $U$, the hybrid reflection bound is $C[NG+R^{2/3}(NH)^{1/3}G^{2/3}G_2^{1/3}\log(2H)]$, with $G=\sum|c_n|^2$, $G_2=\sum\tau(n)|c_n|^2$, and no restriction $N\le H$ ([[lem-dirichlet-character-hybrid-reflection-large-values]]).

[F10] For $0<\alpha\le1/8$, $P=C_\alpha R_0(T+4)\ge P_\alpha$, $\epsilon=\alpha/100$, $\kappa=\alpha/20$, $Y=P^{1/2+\epsilon}$, $X=P^{1/2+2\epsilon}$, $Z=P^{1/2}$ and $K=\lfloor P^\kappa\rfloor$, every primitive zero with $d\le R_0$, $|\gamma|\le T$ and $3/4\le\theta\le\beta\le1$ satisfies the short detector. Its direct and Gaussian-integrated dual polynomial coefficients are common to all zeros and characters, bounded by $\tau(n)$, and supported on $K<n\le KX$. Conductor one excludes $|\gamma|\le\log^2P$; the integral is absolutely convergent improper Riemann ([[lem-dirichlet-log-gaussian-short-zero-detector]]).

## Proof

**Proof scope:** Steps 1.1 through 8.1 prove the two Ingham inequalities. The remaining Huxley inequalities and full-range $12/5$ consequences are proved in Verification, steps 9.1 through 16.1.

1.1 Write $\theta$ for the Statement's $\sigma$. In the $N_1$ family label by each actual character modulo $q$ and evaluate at its primitive ancestor; put $\kappa=q$. In the $N_2$ family label by $(d,\psi)$, with $d\le Q$ and $\psi$ primitive; put $\kappa=Q^2$. There is exactly one conductor-one label in either case, every conductor is at most $\kappa$, and there are at most $\kappa$ labels: orthogonality at the identity gives exactly $\varphi(d)\le d$ characters modulo $d$, and $\sum_{d\le Q}d\le Q^2$. Choose one absolute $C_0$ so large that $H=C_0\kappa(T+4)\ge H_0$ from [F3] and $H\ge\exp(64)$. Put $L=\log H$, $K=\lfloor H\rfloor$, $A=3(1-\theta)/(2-\theta)$, $Y=H^{3/(4-2\theta)}$, $Z=YL^2$ and $N=\lfloor Z\rfloor$. Then $0\le A\le1$ and $H\le Y\le H^{3/2}$. We prove the bound $CH^AL^6$ with absolute constants. [given, F1, F3, algebra]

1.2 Every compact integral inequality below is a Riemann inequality. Integrating a nonnegative real function preserves order, as follows from upper and lower sums; rotating a complex integral gives $|\int f|\le\int|f|$. The same sum definitions show that piecewise-continuous bounded functions with finitely many breaks are integrable, by isolating each break in intervals of arbitrarily small total length. We use finite sums and these compact inequalities followed only by the explicit tails stated below. Finite weighted Cauchy–Schwarz follows by expanding $\sum w_j|a_j-\lambda b_j|^2\ge0$ and minimizing in $\lambda$, with the zero-denominator case handled directly. [F8, construct, algebra]

1.3 Define $d_4(n)$ as the number of ordered positive quadruples of product $n$. At a prime power $p^j$, $(j+1)^2\le\binom{j+3}{3}$, since their difference is $(j+1)j(j-1)/6\ge0$; multiplicativity gives $d(n)^2\le d_4(n)$. Counting quadruples of product at most $x$, summing the fourth variable first and then three harmonic sums, gives $\sum_{n\le x}d_4(n)\le Cx\log^3(2x)$. Also $\sum_{n\le x}d_4(n)/n\le(\sum_{a\le x}1/a)^4\le C\log^4(2x)$, by dropping the product restriction in the four reciprocal variables. The harmonic bound is $\sum_{a\le x}1/a\le1+\log x$ by integral comparison. All these are finite combinatorial inequalities. [F7, F8, algebra]

2.1 By [F2] there are no zeros with $\beta>1$, and the finite unit-window covering of $[-T,T]$ makes the zero-occurrence lists finite. If $1/2\le\theta<1/2+1/L$, sum [F2] over all labels and those windows to get at most $CHL$ occurrences. Since $1-A=(2\theta-1)/(2-\theta)\le2/L$ in this interval, $H^A\ge e^{-2}H$, so $CHL\le CH^AL^6$. This proves this entire small-$\theta$ branch, including $\theta=1/2$, without a zero-free-region cutoff. Henceforth $\theta\ge1/2+1/L$. [F1, F2, step 1.1, algebra]

3.1 Remove the zeros of the unique conductor-one label with $|\gamma|\le L^2$. The unit-window bound gives at most $CL^2\log(L+3)\le CL^3$ such occurrences; it is legitimate to cover the whole interval $[-L^2,L^2]$ even if $T<L^2$. Do not multiply this error by the family size. On every remaining label order the finite occurrences by $(\gamma,\beta,j)$, where $j$ is its multiplicity index. Join two occurrences if their ordinates differ by less than one. [F2] bounds the degree by $CL$, since $d\le\kappa$ and $|\gamma|\le T$. Greedy first-available coloring uses at most $CL$ colors. Each color is one-separated on each label, including at multiple zeros; different labels may have coincident ordinates. This is a deterministic finite construction and uses no infinite choice. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 Fix one color. For each of its zero occurrences put $P_\rho=\sum_{K<n\le Z}a_K(n)\psi(n)n^{-\rho}e^{-n/Y}$ and use $M$ from [F3]. The full hypotheses of [F3] hold: $K\le H$, $Y\le H^2$, $d,|\gamma|\le H$ and $\beta\ge\theta\ge1/2+1/L$, with the conductor-one exclusion secured by step 3.1. Thus $1\le C(|P_\rho|+LY^{1/2-\beta}\int_{\mathbb R}|LM|(1/2+i\gamma+iv)e^{-|v|}dv)$. Split the color into Type I where $|P_\rho|\ge1/(2C)$ and Type II otherwise. The latter then has $1\le2CLY^{1/2-\theta}\int|LM|e^{-|v|}dv$, since $Y\ge1$ and $\beta\ge\theta$. Empty parts require no separate selection. [F3, step 1.1, step 3.1, construct, algebra]

5.1 For Type I apply [F5] with coefficients $c_n=a_K(n)n^{-\theta}e^{-n/Y}$ on $K<n\le N$, zero elsewhere, sample real parts $\beta-\theta\ge0$, times $\gamma\in[-T,T]$, interval length $2T\ge2$, and separation one. Integer $n>K=\lfloor H\rfloor$ implies $n>H$, so the literal weight $W_N(n)$ is bounded by $1+\log2$ on this support and $\log(2N)\le CL$. For the ancestor family the coefficient weight is $2qT+n\le C(H+n)$. For the primitive family apply its displayed positive label weight $d/\varphi(d)\ge1$ and then drop it; this dominates the desired weight-one sum. Since $|a_K(n)|\le d(n)$ by the finite divisor definition, the Type-I count obeys $$R_I\le CL\sum_{n>K}(H+n)d(n)^2n^{-2\theta}e^{-2n/Y}.$$ There is no assertion of a constant-weight varying-real-part theorem outside this support. [F5, F7, step 1.1, step 4.1, algebra]

5.2 On the Type-II subfamily, for every fixed real $v$, apply the fixed-real-part sampler [F4] to $M(1/2+i\gamma_r+iv,\psi_r)$ with coefficients $\mu(n)n^{-1/2}$, on the real interval $[-T+v,T+v]$ of length $2T$, and separation one. The coefficients could equivalently be twisted by $n^{-iv}$ on the original interval. The ancestor coefficient weight is $2qT+n\le C(H+n)$; for the primitive branch drop its positive label weights $d/\varphi(d)\ge1$. Therefore $$M_2(v):=\sum_r|M(1/2+i\gamma_r+iv,\psi_r)|^2\le CL\sum_{n\le K}(H+n)/n\le CHL^2.$$ This bound is uniform in $v$ and requires no varying-real-part harmonic weight. [F4, F7, F8, step 1.1, step 3.1, step 4.1, algebra]

5.3 The times $\gamma_r+v$ lie in $[-V,V]$ for $V=T+|v|\ge1$ and remain one-separated per label. Apply [F6] at the single fixed real part $1/2$. Its parameter $H_V=\kappa(V+4)$ is at most $CH(1+|v|)$ and $B_V\le C[L+\log(1+|v|)]$. Hence $$A_4(v):=\sum_r|L(1/2+i\gamma_r+iv,\psi_r)|^4\le CH(1+|v|)[L+\log(1+|v|)]^5.$$ This uses the accepted helper's actual derivative/Cauchy margins internally; neither varying real parts nor a weighted fourth moment is asserted. [F6, step 1.1, step 3.1, step 4.1, algebra]

6.1 Set $\epsilon=2\theta-1\ge2/L$. Dyadic intervals $2^jK<n\le2^{j+1}K$ and step 1.3 bound the $H$ part of the sum in step 5.1, before its leading $L$, by $$CH K^{1-2\theta}\sum_{j\ge0}2^{-j\epsilon}(L+j)^3\le CH K^{1-2\theta}L^4.$$ For the last inequality expand $(L+j)^3$; for $0<\epsilon\le1$, $\sum_{j\ge0}j^r2^{-j\epsilon}\le C_r\epsilon^{-r-1}$ for $0\le r\le3$, by comparing with consecutive intervals in $\int_0^\infty(x+1)^re^{-\epsilon(\log2)x}dx$. Each resulting $L^{3-r}\epsilon^{-r-1}$ is at most $CL^4$. For the $n$ part set $b=2-2\theta\in[0,1]$. Up to $Y$, $n^{b-1}\le Y^b/n$ and step 1.3 gives $CY^bL^4$. Above $Y$ the intervals $2^jY<n\le2^{j+1}Y$ give at most $CY^b\sum_{j\ge0}2^{(j+1)b}(L+j+1)^3e^{-2^{j+1}}\le CY^bL^4$. The exponential majorant proves convergence directly. Thus, uniformly even at $\theta=1$, $$R_I\le CL^5\bigl(Y^{2-2\theta}+HK^{1-2\theta}\bigr)\le CH^AL^5.$$ Indeed $Y^{2-2\theta}=H^A$, $K\ge H/2$, and $HK^{1-2\theta}\le2H^{2-2\theta}\le2H^A$. No division by $1-\theta$ is used. [F8, step 1.1, step 2.1, step 5.1, step 1.3, algebra]

6.2 Raise the Type-II inequality in step 4.1 to the power $4/3$. Weighted scalar Hölder on each compact $v$ interval and then its absolute tails gives $(\int e^{-|v|}|LM|dv)^{4/3}\le2^{1/3}\int e^{-|v|}|L|^{4/3}|M|^{4/3}dv$. Summing over the finite occurrences and using finite Hölder with exponents $3$ and $3/2$ gives $$R_{II}\le CL^{4/3}Y^{(2-4\theta)/3}\int_{\mathbb R}e^{-|v|}A_4(v)^{1/3}M_2(v)^{2/3}dv.$$ Here the scalar Hölder inequality is proved by normalization and Young's inequality $3x^4+y^4\ge4x^3y$, whose difference is $(x-y)^2(3x^2+2xy+y^2)$; use it with the weights $e^{-|v|}dv$. Zero normalizers follow by adding positive scalars and taking their scalar limits. Finite Hölder follows from $x^3+2y^3\ge3xy^2$, whose difference is $(x-y)^2(x+2y)$. Thus these are compact Riemann inequalities rather than an imported measure-space theorem. The tails and the finite-sum exchange are justified as follows: steps 5.2 and 5.3, together with the pointwise finite Hölder inequality just proved, bound the finite sum of $|L|^{4/3}|M|^{4/3}$ by $A_4(v)^{1/3}M_2(v)^{2/3}$, an explicit polynomial-logarithmic function of $|v|$. Every individual nonnegative summand is bounded by that same function. The original first-power integral is absolutely convergent by [F3]. Thus all integrands needed in this passage have explicit exponential times polynomial-logarithmic tails; on compact intervals they are continuous. First use finite sums and compact intervals, then these tail bounds. [F3, F8, step 1.2, step 4.1, step 5.2, step 5.3, algebra]

7.1 Insert steps 5.2 and step 5.3 into step 6.2. Inside the integral the powers of $L$ are $5/3+4/3=3$, and the factor outside adds $4/3$. Since $L\ge1$, the remaining integral is bounded by the absolute constant $\int_{\mathbb R}e^{-|v|}(1+|v|)^{1/3}[1+\log(1+|v|)]^{5/3}dv<\infty$, by elementary comparison with an exponentially decreasing function. Thus $$R_{II}\le CHY^{(2-4\theta)/3}L^{13/3}=CH^AL^{13/3},$$ since $1+(2-4\theta)/(4-2\theta)=A$. Summing Type I and Type II over at most $CL$ colors gives at most $CH^AL^6$, because $16/3<6$. Restore the at most $CL^3$ conductor-one low zeros; they are absorbed since $A\ge0$. Together with step 2.1 this proves $CH^AL^6$ for all original $\theta\in[1/2,1]$. [F8, step 1.1, step 2.1, step 3.1, step 6.1, step 5.2, step 5.3, step 6.2, algebra]

8.1 Finally $H=C_0\kappa(T+4)$ is between fixed positive multiples of $\kappa T$ for $T\ge1$. Since $0\le A\le1$, $H^A\le C(\kappa T)^A$. In the ancestor family $\log H\le C\log(2qT)$, and in the primitive family $\log H\le C\log(2QT)$, using $\log(Q^2T)\le2\log(QT)$ for $Q,T\ge1$ and absorbing the fixed $C_0$. These comparisons remain valid at $q=Q=T=1$, since the right logarithms are positive. We obtain exactly the first and second inequalities of the original Statement, uniformly and with multiplicity. This closes only those two branches; no Huxley estimate or whole-item acceptance follows from this proof. [F8, step 1.1, step 7.1, algebra] ∎

## Verification

9.1 We now prove the remaining Huxley claims. Fix $\eta>0$, put $\alpha=\min(\eta,1/8)$, $\epsilon=\alpha/100$, $\kappa=\alpha/20$, and use $R_0=q$, $E=q$ for $N_1$, or $R_0=Q$, $E=Q^2$ for $N_2$. Set $P=C_\alpha R_0(T+4)$ with the constant from [F10], $H_*=E(2T+2)$ and $L_*=\log(2H_*)$. Then $P\le C_\eta H_*$ and $H_*\le P^2$, so their logarithms are comparable with constants depending only on $\eta$. On $2/3\le\theta\le3/4$, step 8.1 already gives the Huxley second term, since $2-\theta\ge3\theta-1>0$; its first term is nonnegative. Thus assume $3/4\le\theta\le1$. Choose a threshold $P_{0,\eta}\ge P_\alpha$ so large that $K=\lfloor P^\kappa\rfloor$ obeys $\log(K/2)\ge(\kappa/2)\log P$ whenever $P\ge P_{0,\eta}$. If $P<P_{0,\eta}$, $H_*\le P^2$ bounds $E(T+4)$ in terms of $\eta$; summing the Jensen windows over all at most $E$ labels gives $O_\eta(1)$ zeros. Every original RHS has base at least one and logarithm at least $\log2$, so increasing $C_\eta$ covers this entire small-parameter branch, uniformly in $\theta$. Henceforth $P\ge P_{0,\eta}$. [F1, F2, F8, F10, step 8.1, construct, algebra]

10.1 Remove the unique conductor-one label's zeros with $|\gamma|\le\log^2P$. The Jensen unit-window bound gives $O(\log^3P)=O_\eta(L_*^3)$ occurrences; there is no family-size factor. As in step 3.1, use deterministic greedy coloring of the finite zero-OCCURRENCE lists, retaining each multiplicity index. Since $d(T+3)\le H_*$, at most $CL_*$ colors suffice, and each color has one-separated times for each actual label. Different labels may coincide. For a fixed color all [F10] hypotheses now hold. Its coefficients $a(n),b(n;v)$ are common to every occurrence in that color and supported on $K<n\le KX$. Partition this support into blocks $V_j<n\le2V_j$, starting at $V_0=K$ and doubling, truncating the last at $KX$. There are $J\le C_\eta L_*$ blocks, all with $K\le V_j\le KX$; for each block let $A_j(s)$ and $B_j(s;v)$ be the corresponding polynomials. At every zero, [F10] and the triangle inequality give $1\le C_\alpha\sum_j[|A_j(\rho)|+\int e^{-v^2/2}|B_j(\rho;v)|dv]$. Assign each occurrence to the FIRST block whose bracket is at least $1/(C_\alpha J)$. The assigned subset remains one-separated per label; denote its size by $R_j$. This is a finite deterministic assignment, with no selection of $v$. [F1, F2, F8, F10, step 3.1, step 9.1, construct, algebra]

11.1 For a positive integer $k$, raising the assigned detector to power $2k$ gives $$R_j\le C_{\alpha,k}J^{2k}\left(\sum_r|A_j(\rho_r)|^{2k}+\int_{\mathbb R}e^{-v^2/2}\sum_r|B_j(\rho_r;v)|^{2k}dv\right).\tag{7}$$ Here is the needed compact-Riemann inequality in full. For $p=2k$, $x^p-px+(p-1)\ge0$ for $x\ge0$, because its derivative $p(x^{p-1}-1)$ has the appropriate signs on either side of its minimum at one; FTC proves the minimum is zero. Normalize a nonnegative compact integrand by its positive weighted mean and integrate this scalar inequality to get $(\int w x)^p\le(\int w)^{p-1}\int w x^p$. Zero mean is immediate by nonnegativity and continuity; alternatively add a positive scalar and take its scalar limit. The same inequality at two equally weighted points gives $(a+b)^p\le2^{p-1}(a^p+b^p)$. Apply these with $w=e^{-v^2/2}$, first on compact intervals, and then use the finite coefficient bounds to control every Gaussian tail. The total weight mass is an absolute finite positive constant. Summation is over finitely many assigned occurrences. These arguments prove (7) without a measure-space Hölder/Jensen theorem. [F7, F8, F10, step 1.2, step 10.1, algebra]

12.1 Define $\tau_m(n)$ to be the number of ordered positive $m$-tuples of product $n$. Complete multiplicativity, including all zero character values, expands each $k$th power in (7) into one polynomial in $\psi_r$, supported on $M<n\le2^kM$ with $M=V_j^k$. At sample $s_r=\rho_r-\theta$ its common coefficients have modulus at most $\tau_{2k}(n)n^{-\theta}$: the convolution of $k$ copies of $\tau=\tau_2$ is $\tau_{2k}$, and $\prod n_i^{-\theta}=n^{-\theta}$, not $n^{-k\theta}$. For completeness, counting ordered products gives $\sum_{n\le x}\tau_m(n)\le x(1+\log x)^{m-1}$. Also $\tau_m(n)^2\le\tau_{m^2}(n)$: at a prime power any pair of compositions of its exponent into $m$ parts is the row and column margin of a nonnegative integer $m$-by-$m$ matrix. A deterministic filling procedure repeatedly puts the smaller remaining row/column total into its first available entry and removes a completed row or column. Thus the pair count is at most the matrix count. The same rectangular argument gives $\tau(n)\tau_m(n)^2\le\tau_{2m^2}(n)$. Multiply over the finite prime factorisation. Therefore the two coefficient norms in [F9] satisfy $$G,G_2\le C_kM^{1-2\theta}\log^{C_k}(2M).\tag{8}$$ Use $n^{-2\theta}\le M^{-2\theta}$ on the support and its fixed ratio $2^k$; no division by $1-\theta$ occurs, including at $\theta=1$. All coefficients in (8) are uniform in $v$ for the dual polynomial. [F1, F7, F8, F10, step 1.3, step 11.1, algebra]

13.1 Apply [F9] to both powered polynomials on the original interval $[-T,T]$, of length $2T\ge2$, separation one and sample real parts $\beta_r-\theta\ge0$. Its parameter is exactly $H_*=E(2T+2)$ and all label weights are one, with actual-modulus labels in the ancestor branch. The polynomial length is at most $\lfloor2^kM\rfloor$, so it changes the estimate only by a $k$-dependent constant. For each fixed $v$ its coefficients remain independent of $r$. Since $V_j\le KX\le P^{1/2+7\alpha/100}\le P$, $\log(2M)\le C_kL_*$; constants may depend on $\eta,k$, never on the other parameters. Substitute (8) in (7), integrate only the fixed Gaussian weight, and obtain $$R_j\le C_{\eta,k}L_*^{C_{\eta,k}}\left(M^{2-2\theta}+R_j^{2/3}H_*^{1/3}M^{4/3-2\theta}\right).$$ All improper exchanges are finite sums first, with uniform finite coefficient bounds giving explicit Gaussian tails. If $x\le A+Bx^{2/3}$, then $x\le2A$ or $x\le(2B)^3$, including $x=0$. Consequently $$R_j\le C_{\eta,k}L_*^{C_{\eta,k}}\left(M^{2-2\theta}+H_*M^{4-6\theta}\right).\tag{9}$$ [F8, F9, F10, step 9.1, step 10.1, step 11.1, step 12.1, algebra]

14.1 Put $a=3\theta-1\in[5/4,2]$. If $V_j\le H_*^{1/(2a)}$, choose the least positive integer $k$ with $V_j^k\ge H_*^{1/a}$. It exists because $V_j\ge K>1$, and $H_*^{1/a}\le M\le H_*^{3/(2a)}$. Moreover $k\le1+\log H_*/(a\log V_j)\le C_\eta$, using $H_*\le P^2$ and $\log V_j\ge(\kappa/2)\log P$. In (9) the first exponent $2-2\theta$ is nonnegative, and the second $4-6\theta$ is negative. Thus both terms are at most $H_*^{3(1-\theta)/a}$. If $V_j>H_*^{1/(2a)}$, choose $k=2$. The same negative-exponent comparison bounds the second term by $H_*^{1+(4-6\theta)/a}=H_*^{3(1-\theta)/a}$, while $$V_j^{4(1-\theta)}\le(KX)^{4(1-\theta)}\le P^{(2+28\alpha/100)(1-\theta)}\le P^{(2+\eta)(1-\theta)}.$$ No positive power loss is hidden inside a logarithm. At $\theta=1$ the zero first exponent and the negative second exponent retain these inequalities. Since $k$ ranges over a finite set depending only on $\eta$, one common $C_\eta,B_\eta$ bounds all constants and logarithmic powers in (9). [F8, F10, step 9.1, step 10.1, step 12.1, step 13.1, choose, algebra]

15.1 Sum the last bound over at most $C_\eta L_*$ assigned blocks and at most $CL_*$ colors, then restore the unique conductor-one error $O_\eta(L_*^3)$. Absorb these only into the permitted logarithmic power, since both base exponents are nonnegative. Thus the two families obey $C_\eta L_*^{B_\eta}[P^{(2+\eta)(1-\theta)}+H_*^{3(1-\theta)/(3\theta-1)}]$. For $N_1$, $P$ and $H_*$ are fixed $\eta$-dependent multiples of $qT$; for $N_2$ they are such multiples of $QT$ and $Q^2T$, respectively. Their logarithms compare with exactly $\log(2qT)$ and $\log(2QT)$, including $q=Q=T=1$. All displayed exponents are bounded, so the fixed scale constants are absorbed into $C_\eta$. Step 9.1 already covered the small-$P$ and $2/3\le\theta\le3/4$ branches. This proves BOTH original Huxley inequalities on their entire original ranges, with both height signs, primitive ancestors and multiplicities. [F1, F2, F8, step 8.1, step 9.1, step 10.1, step 13.1, step 14.1, algebra]

16.1 Finally fix $\eta=1/10$. For $1/2\le\theta\le3/4$, the accepted Ingham exponent has coefficient $3/(2-\theta)\le12/5$. For $3/4\le\theta\le1$, the Huxley second coefficient $3/(3\theta-1)\le12/5$, and $2+\eta<12/5$. Also $QT\le Q^2T$ and every base is at least one. Choose one absolute $c>0$ at least six and at least the fixed $B_{1/10}$, enlarging absolute constants to compare these positive logarithms at their lower endpoint. Steps 8.1 and 15.1 therefore imply exactly the two original full-range $12/5$ consequences. This completes the proof of the full original Statement. [F8, step 8.1, step 15.1, algebra] ∎


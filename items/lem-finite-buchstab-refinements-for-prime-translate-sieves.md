---
id: lem-finite-buchstab-refinements-for-prime-translate-sieves
kind: lemma
title: Finite Buchstab refinements with Selberg–Dickman envelopes for prime translates
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps: [lem-selberg-optimized-upper-sieve-for-declared-local-densities, lem-squarefree-multiplicative-logarithmic-sums, lem-dickman-smooth-density-for-bounded-parameters, lem-dickman-method-of-steps-existence-uniqueness-and-positivity, lem-dickman-entire-laplace-transform, thm-linear-sieve-fundamental-lemma, thm-third-mertens-theorem-for-primes, thm-first-mertens-theorem-for-primes, thm-choice-free-siegel-walfisz-from-mobius-cancellation, thm-choice-free-bombieri-vinogradov-and-prime-level, lem-chen-singular-series-specialization, thm-fundamental-theorem-of-arithmetic]
justified_by: []
proof_strategy: direct
axiom_use: Explicit finite sieve weights, finite Buchstab identities, proper Riemann integrals and convergent factorial tails; no choice axiom.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: H.-E. Richert, Lectures on Sieve Methods
      url: https://www.math.utoledo.edu/~codenth/Spring_13/3200/NT-books/Lectures_on_Sieve_Methods-Richert.pdf
      locator: Chapter11 finite Buchstab mechanism and equations(11.48),(11.59),(11.88). Only a FIXED number of refinements is asserted; the omitted optimal-limit convergence preceding Theorem11.12 is not used.
    - title: D. Koukoulopoulos, The Distribution of Prime Numbers
      url: https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf
      locator: Chapters18–19 for the locally proved large-u anchor. Sharp beta-sieve asymptotics cited on pp200–202 are not imported.
---

## Statement

Let $\rho$ be the Dickman function, put $c=\int_0^\infty\rho(t)\,dt=e^\gamma$ and $E(v)=\int_0^v\rho(t)\,dt$, and define functions on $s>0$ by
$$F_0(s)=c/E(s/2),\qquad f_0(s)=0.$$
Recursively, for each integer $j\ge1$, set $f_j(s)=0$ for $s\le2$, and for $s>2$ put
$$f_j(s)=\max\left(f_{j-1}(s),0,1-\frac1s\int_s^\infty(F_{j-1}(t-1)-1)\,dt\right),$$
$$F_j(s)=\min\left(F_{j-1}(s),1+\frac1s\int_s^\infty(1-f_j(t-1))\,dt\right),$$
where $f_j(u)=0$ for $u\le0$. Every displayed improper integral converges. These are finite refinements, not an assertion that $F_j,f_j$ converge to the optimal linear-sieve functions.

Fix $0<\alpha<1/2$. For $x\to\infty$, nonzero even integers $h$ with $|h|\le x$, squarefree $q$ coprime to $h$, and $z=x^\beta$, put $D=x^\alpha$, $X=\operatorname{li}(x)=\int_2^xdt/\log t$,
$$P_h(z)=\prod_{\substack{p<z\\p\nmid h}}p,\quad V_h(z)=\prod_{\substack{p<z\\p\nmid h}}\left(1-\frac1{p-1}\right),\quad A_d=\#\{p\le x: p {\rm prime}, p+h\ne0, d\mid p+h\},\quad r_d=A_d-X/\varphi(d),$$
$$S_h(q,z)=\#\{p\le x: p {\rm prime}, p+h\ne0, q\mid p+h, (p+h,P_h(z))=1\},$$
$$\mathcal R_q(C,D;z)=\sum_{\substack{d\mid P_h(z)\\qd\le D}}\tau(d)^C|r_{qd}|,\qquad s=\frac{\log(D/q)}{\log z}.$$
Assume every prime divisor of $q$ is at least $z$ (the condition is empty for $q=1$). Let $\beta$ and $s$ range over fixed compact subintervals of $(0,\infty)$. For each fixed $j\ge0$ there are fixed constants $C_j,M_j$ such that
$$S_h(q,z)\le\frac{X}{\varphi(q)}V_h(z)\bigl(F_j(s)+o(1)\bigr)+M_j\mathcal R_q(C_j,D;z).$$
For $s$ in any fixed compact subinterval of $(2,\infty)$ one also has
$$S_h(q,z)\ge\frac{X}{\varphi(q)}V_h(z)\bigl(f_j(s)-o(1)\bigr)-M_j\mathcal R_q(C_j,D;z).$$
The errors tend to zero uniformly in all these $q,h,z$. For $s\le2$ the lower envelope is the valid trivial bound zero. One may take $C_j=4j+6$. In the same ranges, uniformly in $h$, $V_h(z)=2C(h)/(c\log z)(1+o(1))$. Moreover, for every fixed $C,A>0$,
$$\sum_{\substack{d\le D\\d {\rm squarefree}\\(d,h)=1}}\tau(d)^C|r_d|\ll_{\alpha,C,A}x(\log x)^{-A}$$
uniformly in $h$. No optimal-limit theorem or choice-qualified distribution estimate is a premise.

## Facts & Assumptions

**Given:** The parameters, ranges and finite arithmetic data in the Statement. All sums over divisors are finite, and $\operatorname{li}$ is the proper integral above.

[F1] [[lem-selberg-optimized-upper-sieve-for-declared-local-densities]] gives its finite declared-density optimizer with $\rho(1)=1$, $|\rho(d)|\le1$, lcm coefficients bounded by $3^{\omega(d)}$, support below the declared level, and main quadratic factor $1/H$.

[F2] [[lem-squarefree-multiplicative-logarithmic-sums]] gives the exact product constant $c_b(Q)$, the uniform squarefree logarithmic sum and $K(Q)\ll(1+\log\log(3Q))^2$ for $b_2=0,b_p=1/(p-2)$.

[F3] [[lem-dickman-smooth-density-for-bounded-parameters]] gives $\Psi(y^u,y)=y^u\rho(u)+O_U(y^u/\log y+1)$ uniformly for $0<u\le U$. [[lem-dickman-method-of-steps-existence-uniqueness-and-positivity]] gives positivity, the delay equation and $u\rho(u)=\int_{u-1}^u\rho$. [[lem-dickman-entire-laplace-transform]] gives the convergent integral $c=e^\gamma$.

[F4] [[thm-linear-sieve-fundamental-lemma]] supplies its large-$u$ relative error $O(u^{-u/2})$ with its actual summed-remainder error over squarefree moduli at most the declared level. The local-product condition must be checked, not assumed from a slogan about dimension one.

[F5] [[thm-third-mertens-theorem-for-primes]] gives $\prod_{p\le y}(1-1/p)=e^{-\gamma}(\log y)^{-1}(1+O(1/\log y))$. [[thm-first-mertens-theorem-for-primes]] gives the corresponding elementary reciprocal-prime partial-summation bounds. [[thm-choice-free-siegel-walfisz-from-mobius-cancellation]] supplies unqualified modulus-one prime distribution with all fixed logarithmic savings.

[F6] [[thm-choice-free-bombieri-vinogradov-and-prime-level]] supplies its unqualified full-von-Mangoldt endpoint average, with every fixed logarithmic saving, at every fixed level below $1/2$. No maximum over endpoints is supplied or needed.

[F7] [[lem-chen-singular-series-specialization]] gives the positive product $C(h)$ in its literal formula. [[thm-fundamental-theorem-of-arithmetic]] gives unique finite prime factorization and the finite squarefree expansions.

## Proof

1.1 The given evenness excludes prime2 from $P_h(z)$, so $g(p)=1/(p-1)<1$ at every sieve prime. For every squarefree $d$ coprime to $h$, the condition $d\mid p+h$ is the reduced progression $p\equiv-h\pmod d$. At most one excluded prime has $p+h=0$, so its removal changes each count by at most one. Unique factorization gives $g(qd)=g(q)g(d)$ whenever $d\mid P_h(z)$, because the given lower bound on the prime factors of $q$ makes $(q,d)=1$. The nonnegative sequence indexed by $n=|p+h|$ is supported on $1\le n\le2x$ and has exactly this local model; no negative or zero index is fed into a sieve theorem. [F7, given, algebra]

2.1 We need a smooth version of the declared Selberg denominator, and derive it here. Set $b_2=0,b_p=1/(p-2)$, and $b_Q(n)=\mu(n)^21_{(n,Q)=1}\prod_{p\mid n}b_p$. Define multiplicative $a_Q$ by the local polynomials $a_Q(p)=b_p-1/p$, $a_Q(p^2)=-b_p/p$, $a_Q(p^k)=0$ for $k\ge3$ off $Q$, and $a_Q(p)=-1/p,a_Q(p^k)=0$ for $k\ge2$ on $Q$. Multiplication of these polynomials by $(1-u/p)^{-1}$ proves the exact finite convolution $b_Q=a_Q*(n\mapsto1/n)$. Off $Q$, the absolute Euler mass is $1+O(p^{-2})$ and its logarithmic moment is $O((\log p)/p^2)$; on $Q$ they are $1+1/p$ and $(\log p)/p$. Expanding finite products and bounding their tails by the convergent numerical series therefore gives [F2, F7, step 1.1, algebra]
$$\sum_d|a_Q(d)|(1+\log d)\ll K(Q),\qquad \sum_da_Q(d)=c_b(Q).$$
The signed sum converges absolutely, and its Euler factors are exactly those in [F2]. This establishes the additional convolution interface rather than assuming it from an unrestricted logarithmic sum. [F2, F7, step 1.1, algebra]

3.1 For $v$ in a fixed bounded interval, finite partial summation of [F3] gives [F3, step 2.1, algebra]
$$\sum_{\substack{m\le y^v\\P^+(m)<y}}\frac1m=(\log y)E(v)+O_U(1).$$
Replacing $<y$ by $\le y$ at a prime endpoint changes the sum by $O_U((\log y)/y)$, absorbed by the error. Indeed sum over the possible powers of that single prime and use the unrestricted harmonic bound. In the partial-summation formula, the density error integrates to $O_U(1)$ and its endpoint is also $O_U(1)$; the main endpoint $\rho(v)$ is bounded by one. Insert the convolution in step2.1 and restrict both factors to $y$-smooth integers. The function $E$ is one-Lipschitz because $0<\rho\le1$, so shifting its argument by $\log d/\log y$ costs at most $\log d$ after multiplication by $\log y$. The omitted $d>y^v$ have $\log d>v\log y$, and the omitted nonsmooth $d$ have $\log d\ge\log y$. Their contributions are bounded by the same logarithmic moment in step2.1. Consequently, uniformly in $Q$ and in $v$ in a fixed compact subset of $(0,\infty)$, [F2, F3, step 2.1, algebra]
$$\sum_{\substack{d\le y^v\\P^+(d)<y}}b_Q(d)=c_b(Q)(\log y)E(v)+O_U(K(Q)).$$
Here and below $P^+(1)=1$. All infinite tails were bounded by explicit absolutely convergent numerical sums. [F2, F3, step 2.1, algebra]

4.1 Direct multiplication of the Euler factors, with $Q=|h|$ even, gives $c_b(|h|)=1/(2C(h))$. Also [F5] and the convergent twin-prime product give [F2, F5, F7, step 3.1, algebra]
$$V_h(y)=\frac{2e^{-\gamma}C(h)}{\log y}(1+o(1))$$
uniformly for $|h|\le x$ and $y\ge x^\eta$, for each fixed $\eta>0$. The factors at primes dividing $h$ but at least $y$ differ from one by a total $O(\log(2|h|)/(y\log y))$: there are at most $\log|h|/\log y$ such primes and each reciprocal is at most $1/y$. For each odd prime, $(p-1)/(p-2)\le(1+1/p)^3$, so $C(h)\ll K(|h|)^3\ll(1+\log\log(3x))^6$. Thus the error $K(|h|)$ in step3.1 is relatively $o(1)$ compared with $c_b(|h|)\log y$, uniformly in the same ranges. The unrestricted prime-product ratio from [F5] also proves [F4]'s corrected $(w,z]$ dimension-one condition, with one absolute constant: its inverse factor is the usual Mertens ratio times an absolutely convergent product whose tail is $1+O(1/w)$. Removing primes dividing $h$ only decreases that inverse product. Small bounded $w$ are absorbed by enlarging that fixed constant. [F2, F5, F7, step 3.1, algebra]

5.1 Apply [F1] to the sequence with the fixed factor $q$, sieve primes below $z$ and declared density $g(p)=1/(p-1)$. Choose its cutoff a half-integer below $\sqrt{D/q}$, so every resulting modulus $qd$ is at most $D$. Its denominator is the sum in step3.1 at $y=z$, $v=s/2+o(1)$ and $Q=|h|$. Steps3.1–4.1 give $H V_h(z)=e^{-\gamma}E(s/2)(1+o(1))$. Hence [F1, F2, F3, step 3.1, step 4.1, algebra]
$$S_h(q,z)\le \frac{X}{\varphi(q)}V_h(z)(F_0(s)+o(1))+O(\mathcal R_q(2,D;z)).$$
The cutoff rounding is uniform because $D/q=z^s$ is a fixed positive power of $x$. The coefficient bound $3^{\omega(d)}\le\tau(d)^2$ is valid for every squarefree remainder modulus. This proves the upper base; nonnegativity supplies the lower base $f_0=0$. [F1, F2, F3, step 3.1, step 4.1, algebra]

6.1 We establish convergence of the displayed FUNCTION integrals, not convergence of an optimal sieve iteration. By [F3], $u\rho(u)\le\rho(u-1)$ and thus $\rho(u)\le1/\lfloor u\rfloor!$. Therefore $0\le F_0(s)-1\le2/\lfloor s/2\rfloor!$ for $s\ge4$: the omitted tail of $E$ is at most twice its first factorial term and $E(s/2)\ge1$. In particular [F3, step 5.1, algebra]
$$\int_s^\infty(F_0(t-1)-1)\,dt\le\frac8{\lfloor(s-1)/2\rfloor!}\quad(s\ge4).$$
The first lower refinement has $0\le1-f_1(s)\le8/[s\lfloor(s-1)/2\rfloor!]$ there. The recursive minima and maxima give $1\le F_j\le F_0$ and $0\le f_1\le f_j\le1$ for $j\ge1$. These factorial bounds prove all subsequent absolute convergence and give the same uniform tail majorants at every fixed depth. Moreover $F_j$ is nonincreasing and $f_j$ nondecreasing: the derivative of an upper candidate $1+J(s)/s$ is nonpositive since $J\ge0$ and $J'=-(1-f_j(s-1))\le0$; a positive lower candidate $1-I(s)/s$ has derivative $I/s^2+(F_{j-1}(s-1)-1)/s\ge0$. Minima and maxima preserve these monotonicities, including the possible boundary at two. [F3, step 5.1, algebra]

7.1 The finite Buchstab identity is [F7, step 1.1, step 6.1, algebra]
$$S_h(q,z)=S_h(q,z_0)-\sum_{\substack{z_0\le p<z\\p\nmid h}}S_h(qp,p).$$
Every integer lost from the left sift has a UNIQUE least prime divisor in that interval; this proves the identity without assuming squarefreeness of its translate. The new fixed factor $qp$ is squarefree and all its primes are at least the new cutoff $p$. Put $D_q=D/q$, $z_0=D_q^{1/U}$ with fixed $U>s$. The fundamental lemma [F4], whose actual product condition was verified in step4.1, bounds the anchor by $(X/\varphi(q))V_h(z_0)(1+O(U^{-U/2}))$ plus its level-supported remainders. Its remainder error is a fixed constant times the sum over the declared remaining level. The anchor sieve set is nonempty for large $x$: otherwise every odd prime below $z_0$, whose product has logarithm $(1+o(1))z_0$ by [F5], would divide $h$, contradicting $\log|h|\le\log x$ and the fixed positive-power size of $z_0$. The ambient nonnegative sequence remains supported below $2x/q$, and its main parameter is greater than a fixed positive power of $x$ in each compact range used here; hence every large-parameter requirement is met uniformly. [F4, F5, F7, step 1.1, step 6.1, algebra]

8.1 In a fixed compact positive-power range of the prime variable $p$, [F5] and finite partial summation give, uniformly in the even integer $h$, the density $g(p)=1/(p-1)$ the limiting logarithmic measure $dt/t$, where $t=\log D_q/\log p$. Deleting primes dividing $h$ costs $O(x^{-\eta}/\eta)$ when $p\ge x^\eta$, and replacing $1/(p-1)$ by $1/p$ costs the same kind of error. Step4.1 gives $V_h(p)/V_h(z)=(t/s)(1+o(1))$. Thus for each bounded Riemann-integrable envelope $B$ on a fixed compact interval, [F5, step 4.1, step 7.1, algebra]
$$\frac1{V_h(z)}\sum_{\substack{D_q^{1/U}\le p<z\\p\nmid h}}g(p)V_h(p)B(t-1)=\frac1s\int_s^U B(t-1)\,dt+o(1).$$
For the envelopes here, monotonicity from step6.1 gives bounded variation; finite summation by parts proves the assertion directly, including their finitely many clipping points, rather than requiring a probability-space limit. The anchor ratio is $V_h(z_0)/V_h(z)=U/s+o(1)$. [F5, step 4.1, step 7.1, algebra]

9.1 Suppose the upper envelope $F_{j-1}$ has been proved. For a lower bound with $s>2$, substitute its UPPER bounds for the subtracted terms in step7.1 and the LOWER fundamental anchor. Equations7.1–8.1 give, after normalization, [F4, step 5.1, step 6.1, step 7.1, step 8.1, algebra]
$$\frac Us-\frac1s\int_s^U F_{j-1}(t-1)\,dt-O(U^{1-U/2})+o(1)=1-\frac1s\int_s^U(F_{j-1}(t-1)-1)\,dt-O(U^{1-U/2})+o(1).$$
First let $x\to\infty$ with $U$ fixed, then let $U\to\infty$. Step6.1 proves exactly the lower candidate defining $f_j$. The old lower bound and zero are also valid, so their maximum is valid. Uniformity on a compact $s$ interval follows by choosing ONE sufficiently large integer $U$ using the common factorial tail bound, before taking the uniform large-$x$ threshold. This finite quantifier argument uses no sequence of choices. [F4, step 5.1, step 6.1, step 7.1, step 8.1, algebra]

10.1 Conversely use the newly proved LOWER envelope $f_j$ for the subtracted terms and the UPPER anchor in step7.1. The identical calculation gives [F4, step 6.1, step 7.1, step 8.1, step 9.1, algebra]
$$1+\frac1s\int_s^U(1-f_j(t-1))\,dt+O(U^{1-U/2})+o(1).$$
Below $t=3$ the lower envelope is zero and requires no subsidiary sieve estimate. First omit also the strip $3<t<3+\delta$ for a fixed positive $\delta$, using the valid bound zero there. Its lost normalized integral is at most $\delta/s$ because $0\le f_j\le1$. On the remainder the lower argument lies in a compact subset of $(2,\infty)$, so the induction hypothesis is uniform; after the large-$x$ limit let $\delta\downarrow0$. Where a positive lower bound is used, its argument $t-1$ therefore exceeds two. Letting $U$ tend to infinity as in step9.1 gives the upper candidate defining $F_j$; taking its minimum with the old bound is valid. At any fixed refinement depth, all subsidiary main-parameter exponents stay uniformly positive. Indeed each ACTIVE lower refinement has $t>2$, and each use of a positive lower bound inside an upper refinement has $t>3$. Passing from $D_q$ to $D_q/p$ therefore retains at least half its logarithm. After at most $2j$ steps a fixed positive fraction remains; with $t\le U$ every prime cutoff is still a fixed positive power of $x$. This justifies all uniform asymptotics used in steps5.1–9.1 at subsidiary nodes. [F4, step 6.1, step 7.1, step 8.1, step 9.1, algebra]

11.1 We give the remainder ledger explicitly. At each finite truncation $U$, a base Selberg modulus is below its remaining level and has coefficient at most $3^{\omega(d)}$; a fundamental-anchor error carries at most a fixed absolute constant times each $|r_{qd}|$, by [F4]. A Buchstab step adds exactly one distinct prime to the fixed prefix and has coefficient one. Every resulting product is squarefree, consists of sieve primes below the original cutoff, and satisfies $qd\le D$. For a given $d$, choices of its at most $2j$ prefix primes are at most $\tau(d)^{2j}$, even after dropping their decreasing-order and cutoff restrictions. The final Selberg coefficient is at most $\tau(d)^2$. Choosing between the old and refined bound uses one array, not their sum; a fixed absolute factor per depth covers the anchor error constants. Thus $M_j\tau(d)^{4j+6}$ bounds the absolute combined coefficient, independently of the truncation $U$. There are NO moduli beyond $D$. This proves the claimed remainder term, permits the limit in steps9.1–10.1 without its constant growing with $U$, and completes induction on the FIXED integer $j$. [F1, F4, F7, step 7.1, step 9.1, step 10.1, algebra]

12.1 Finally we verify the unqualified distribution ledger at this precise level. Choose $\alpha<\nu/2<1/2$. For endpoints $t\ge x^\nu$, [F6] applies uniformly to all $d\le x^\alpha$ with any desired saving, because its logarithmic cutoff is larger than $x^\alpha$ for large $x$. Remove proper prime powers using the bound $O(\sqrt t\log^2(2t))$ at each modulus; even summing this crudely over $d\le D$ costs $O(x^{\alpha+1/2}\log^2x)$, a power saving. Finite Abel summation with $1/\log t$ gives the unweighted prime-count discrepancy, with main term $\operatorname{li}(x)/\varphi(d)$. The initial endpoints $t<x^\nu$ contribute at most $O((x^\nu+D)\log^Kx)$ by integer progression counts and the totient bound $d/\varphi(d)\le\tau(d)$; this too is a power saving. For the Abel integral use the endpoint estimate at each real $t$, then integrate its finite modulus sum; no maximum over endpoints is inserted. We have proved $\sum_{d\le D}e(d)\ll_A x(\log x)^{-A}$, where $e(d)$ is the maximum reduced prime-count discrepancy. [F5, F6, F7, step 11.1, algebra]

13.1 For completeness, the divisor-weight upgrade does not follow by taking a maximum divisor bound. Positivity of the prime indicator gives $e(d)\ll x/d+1+x/\varphi(d)$. For each fixed integer $k$, $\tau(n)^k\le\tau_{2^k}(n)$ by assigning each level of $k$ divisor exponents to its membership subset; summing ordered factorizations gives $\sum_{n\le Y}\tau_\ell(n)/n\le(1+\log Y)^\ell$ and $\sum_{n\le Y}\tau_\ell(n)\le Y(1+\log Y)^{\ell-1}$. Hence $\sum_{d\le D}\tau(d)^{2C}e(d)\ll_C x\log^{K_C}x$. Cauchy–Schwarz against the unweighted sum in step12.1, taken with saving larger than $2A+K_C+2$, proves $\sum_{d\le D}\tau(d)^C e(d)\ll x\log^{-A}x$. Removing the possible single prime $p+h=0$ adds at most $\sum_{d\le D}\tau(d)^C\ll D\log^{K_C}x$, also a power saving. The maximum over residue classes in $e(d)$ makes the result uniform in every eligible $h$. This is the last displayed Statement bound and proves every assertion, while making no claim about the infinite optimal-sieve limit. [F6, F7, step 11.1, step 12.1, algebra] ∎

## Use and reading limits

The sharp functions in Richert's Theorem11.12 require an additional convergence argument, explicitly omitted just before that theorem. They are not imported here. This lemma proves only every specified FINITE refinement, with all integral tails and arithmetic remainder supports derived. Its base uses the literal accepted bounded-parameter Dickman estimate and the actual declared-density Selberg optimizer, not a new smooth-number asymptotic or a residue-density substitution. The full optimal Kuhn bracket and its explicit logarithmic error rate remain separate; a strict numerical Chen bound can use a fixed finite depth.

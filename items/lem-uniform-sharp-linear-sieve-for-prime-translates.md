---
id: lem-uniform-sharp-linear-sieve-for-prime-translates
kind: lemma
title: Uniform sharp dimension-one sieve bounds for prime translates
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps: [lem-geometric-convergence-to-the-optimal-linear-sieve-functions, lem-finite-buchstab-refinements-for-prime-translate-sieves, lem-selberg-optimized-upper-sieve-for-declared-local-densities, thm-linear-sieve-fundamental-lemma, lem-squarefree-multiplicative-logarithmic-sums, lem-dickman-smooth-density-for-bounded-parameters, thm-third-mertens-theorem-for-primes, thm-first-mertens-theorem-for-primes, thm-choice-free-bombieri-vinogradov-and-prime-level, thm-choice-free-siegel-walfisz-from-mobius-cancellation, lem-chen-singular-series-specialization, thm-logarithm-slower-than-every-positive-power]
justified_by: []
proof_strategy: direct
axiom_use: Specified finite depth, level-supported finite sieve arrays, exact least-prime identities, proper integrals and explicit uniform bounds; no choice hypothesis.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: H.-E. Richert, Lectures on Sieve Methods
      url: https://www.math.utoledo.edu/~codenth/Spring_13/3200/NT-books/Lectures_on_Sieve_Methods-Richert.pdf
      locator: Chapter11 Theorems11.5–11.13 and finite Buchstab mechanism, printed pp137–149. The explicit geometric contraction and growing-depth estimates here supply the omitted step; the source sharp-sieve theorem is not imported.
---

## Statement

Use the prime-translate notation $A_d,r_d,S_h(q,z),V_h(z)$ and $X=\operatorname{li}(x)$ from [[lem-finite-buchstab-refinements-for-prime-translate-sieves]], and the sharp functions $F,f$ from [[lem-geometric-convergence-to-the-optimal-linear-sieve-functions]]. Set
$$L=\log x,\qquad D=x^{1/2}L^{-1000},\qquad \mathcal E_q(D;z)=\sum_{\substack{d\mid P_h(z)\\qd\le D}}3^{\omega(d)}|r_{qd}|.$$
Fix positive $\beta_0,\beta_1,s_0,s_1,\delta_0$ with $\beta_0\le\beta_1$, $s_0\le s_1$. Uniformly for nonzero even $h$ with $|h|\le x$, squarefree $q$ coprime to $h$ whose prime factors are at least $z=x^\beta$, and
$$\beta_0\le\beta\le\beta_1,\qquad \log(D/q)\ge\delta_0L,\qquad s=\log(D/q)/\log z\in[s_0,s_1],$$
there are fixed $K,M>0$ such that, for sufficiently large $x$,
$$S_h(q,z)\le\frac X{\varphi(q)}V_h(z)\left(F(s)+K L^{-1/15}\right)+M\mathcal E_q(D;z),$$
$$S_h(q,z)\ge\frac X{\varphi(q)}V_h(z)\left(f(s)-K L^{-1/15}\right)-M\mathcal E_q(D;z).$$
Here $f(s)=0$ for $s\le2$, where nonnegativity already gives the lower bound. Constants depend only on the fixed displayed range parameters and the standing absolute sieve constants. They do not depend on $q,h,x$.

Moreover
$$\sum_{\substack{d\le D\\d\ {\rm squarefree}\\(d,h)=1}}\tau(d)^3|r_d|\ll xL^{-20}$$
uniformly in the same $h$. The normalization is
$$V_h(z)=\frac{2e^{-\gamma}C(h)}{\log z}\left(1+O_{\beta_0,\beta_1}(L^{-1})\right).$$
No sharp-sieve theorem is assumed; all weights below have the stated level and a remainder factor independent of their growing depth.

## Facts & Assumptions

**Given:** The precise ranges and arithmetic data in the Statement.

[F1] [[lem-geometric-convergence-to-the-optimal-linear-sieve-functions]] supplies the constructed sharp $F,f$, the Selberg barrier, their factorial difference, and the explicit contraction $q_*<2987/3264<11/12$ against $\phi(s)=(s+100)^{-103}$, for every admissible initial upper base.

[F2] [[lem-finite-buchstab-refinements-for-prime-translate-sieves]] supplies the literal arithmetic notation, finite recurrences and fixed-depth model. Only those interfaces are used; its accepted fixed-depth proof is not re-reviewed or treated as uniform in an unbounded depth.

[F3] [[lem-selberg-optimized-upper-sieve-for-declared-local-densities]] gives the finite declared-density optimizer and coefficient bound $3^{\omega(d)}$. [[thm-linear-sieve-fundamental-lemma]] gives the relative $O(u^{-u/2})$ main error and the level-supported absolute remainder sum, with constants depending only on the dimension and its local-product constant.

[F4] [[lem-squarefree-multiplicative-logarithmic-sums]] gives its exact logarithmic-sum constant $c_b(Q)$ and uniform bound for $K(Q)$. [[lem-dickman-smooth-density-for-bounded-parameters]] gives its explicit $O_T(1/\log y)$ density error for every FIXED bounded-parameter range.

[F5] [[thm-third-mertens-theorem-for-primes]] gives its $O(1/\log y)$ product error. [[thm-first-mertens-theorem-for-primes]] gives the reciprocal-prime finite partial-summation bounds. [[thm-choice-free-siegel-walfisz-from-mobius-cancellation]] gives unqualified prime distribution at modulus one with every saving.

[F6] [[thm-choice-free-bombieri-vinogradov-and-prime-level]] gives the unqualified full-von-Mangoldt endpoint estimate with saving $A$ at cutoff $x^{1/2}(\log x)^{-2A-6}$, including modulus one. No maximum over endpoints is supplied.

[F7] [[lem-chen-singular-series-specialization]] gives $C(h)\ge C(2)>0$ and its product formula. [[thm-logarithm-slower-than-every-positive-power]] absorbs every fixed power of $\log\log x$ into every fixed positive power of $\log x$.

## Proof

1.1 Fix once a sufficiently large integer $T_0>4$. The dimension-one product constant for the prime densities $g(p)=1/(p-1)$, excluding primes dividing $h$, is absolute by [F5]; deletion of primes only decreases its inverse product. Choose an absolute $A_0$ at least the fundamental-lemma constant in [F3] and so large that $1+A_0s^{-s/2}\ge F(s)$ for all $s\ge T_0$. Such a constant exists because [F1] bounds $F-1$ by the factorial tail $2e^\gamma\rho(s-1)/s$. Define the ONE fixed nonincreasing base [F1, F3, F5, given, construct, algebra]
$$B(s)=F_0(s)\ (s\le T_0),\qquad B(s)=\min\bigl(F_0(T_0),1+A_0s^{-s/2}\bigr)\ (s>T_0).$$
It majorizes $F$, agrees with it below two, and has finite weighted initial norm in [F1]. For $s>T_0$, the constant $F_0(T_0)$ is an admissible Selberg bound by using only the smaller remaining level $z^{T_0}$; the other bound is the actual fundamental lemma at the full remaining level; its actual maximum sieve prime is at most the named cutoff, so its parameter is at least $s$ and its decreasing error is no larger than the chosen allowance. Thus both branches are legitimate and neither has an unspecified growing bounded-Dickman constant. [F1, F3, F5, given, construct, algebra]


2.1 We quantify the BASE and the elementary prime calculus used below. Put $H_x=1+\log L$. If every sieve cutoff involved has logarithm at least $R$, then the convolution in [F2], used only for the fixed parameter range at most $T_0/2$, gives a Selberg relative main error at most $C_{T_0}H_x^8/R$. Here is the additional quantitative denominator calculation. Set $b_p=1/(p-2)$ at odd primes and $b_2=0$. The convolution factor has local coefficients $a_Q(p)=b_p-1/p$, $a_Q(p^2)=-b_p/p$ off $Q$, and $a_Q(p)=-1/p$, all higher coefficients zero, on $Q$. Multiplying local polynomials gives $\mu(n)^21_{(n,Q)=1}\prod_{p\mid n}b_p=a_Q*(1/n)$. Off $Q$ its absolute Euler mass and logarithmic moment have convergent $O(p^{-2})$ and $O((\log p)/p^2)$ sums; on $Q$ they give $1+1/p$ and $(\log p)/p$. Thus $\sum|a_Q(d)|(1+\log d)\ll K(Q)$. Partial summation of [F4] on the FIXED range at most $T_0/2$ gives the smooth harmonic sum $(\log y)E(v)+O_{T_0}(1)$. Insert the convolution; the one-Lipschitz function $E$ makes each logarithmic shift cost at most $\log d$, and the nonsmooth or omitted factors cost at most the same logarithmic moment. Hence the denominator is $c_b(Q)(\log y)E(v)+O_{T_0}(K(Q))$. Finally $c_b(|h|)=1/(2C(h))$ and $C(h)K(|h|)\ll H_x^8$ by the exact Euler products and [F4]. This derives its rate rather than treating an unquantified $o(1)$ as uniform in depth. The fundamental branch in step1.1 already includes its relative main allowance $A_0s^{-s/2}$ and adds no asymptotic base error. Further, [F5] and the product formula give [F2, F4, F5, F7, step 1.1, algebra]
$$V_h(y)=2e^{-\gamma}C(h)(\log y)^{-1}\bigl(1+O(R^{-1})\bigr)$$
when $\log y\ge R$ and $e^R\gg L^2$. The omitted prime divisors of $h$ at least $y$ have reciprocal sum at most $L/(y\log y)$. The same bound controls their deletion from prime partial summation. All constants here are independent of the number of later refinements. [F2, F4, F5, F7, step 1.1, algebra]


3.1 Write $D_a=D/a$ at a node with fixed squarefree prefix $a$. Partition the positive translates lost from the coarser sift according to their UNIQUE least prime divisor in $[z_0,z)$. This proves the exact identity $S_h(a,z)=S_h(a,z_0)-\sum_{z_0\le p<z,p\nmid h}S_h(ap,p)$, with $z_0=D_a^{1/U}$. The main-density operator, after division by $(X/\varphi(a))V_h(z)$, is the positive prime sum with coefficient $g(p)V_h(p)/V_h(z)$ and new argument $t-1$, $t=\log D_a/\log p$. For an envelope of bounded variation on $[1,U]$, finite partial summation replaces it by $s^{-1}\int_s^U B(t-1)\,dt$. Here is a uniform error bound, rather than a fixed-depth assertion: all actual upper envelopes are bounded by the FIXED base on $[1,\infty)$ and all lower envelopes by one, so their suprema and total variations there are bounded by one fixed constant. Multiplication by $t$ costs at most $C(U+1)^2$ in total variation. The cumulative prime-measure error is $O(R^{-1})$ by [F5], and the product-ratio error in step2.1 costs another $O((U+1)^2/R)$. The anchor ratio is $U/s$ with error $O((U+1)^2/R)$. Thus each unnormalized main-calculus error is at most $C(U+1)^2H_x^8/R$, uniformly in every node and every envelope depth. Original arguments below one are in the fixed range $[s_0,1]$ and are handled by the same bound with a range-dependent constant; positive lower envelopes are used only above two. [F2, F5, step 1.1, step 2.1, algebra]

4.1 For every depth, $B_j\le B$ and $b_j\ge b_1$. Consequently their tails, uniformly in that depth, satisfy $B_j(s)-1\ll s^{-s/2}$ and $1-b_j(s)\ll s^{-s/3}$ for all sufficiently large $s$, with fixed constants. The latter follows directly by integrating $B(t-1)-1$ in the first lower candidate; geometric comparison over integer intervals bounds its tail. The omitted integrals beyond $U$ are therefore $O(U^{-U/4})$. The fundamental anchor's main error is $O(U^{1-U/2})$, smaller than this allowance. Passing to the weighted norm against $\phi(s)$ for $s\le U$ costs at most $(U+100)^{103}$. Combining the base, prime-calculus, anchor and tail terms, ONE conservative bound for every local error in that norm is [F1, F2, F3, step 2.1, step 3.1, algebra]
$$\epsilon_x=C(U+101)^{200}H_x^8\left(R^{-1}+U^{-U/4}\right).$$
The exponent200 covers the displayed powers2 and103 with room; there is no hidden constant depending on the depth or on $U$. Constants from the bounded-Dickman base depend on the fixed $T_0$ only. [F1, F2, F3, step 2.1, step 3.1, algebra]


5.1 Choose explicitly [F2, F3, F5, F7, step 4.1, construct, algebra]
$$J=\left\lfloor\frac25\log L\right\rfloor,\qquad U=\lceil\log L\rceil.$$
At each node select its old, zero or refined branch by comparison of the specified IDEAL envelope values, taking the first branch in a tie; this defines a finite deterministic inequality tree. Use exactly $J$ upper/lower refinements, each with this finite anchor cutoff; keep the base upper bound at arguments at most two and use the exact lower bound zero there. All ideal upper functions equal $F_0=F$ there by [F1], so this convention does not change their ideal values. A lower refinement is active only when its argument exceeds two, and a positive lower bound in an upper refinement is used only when $t>3$. Each ACTIVE Buchstab edge retains at least half the logarithm of its remaining level. Thus every node in the at-most-$2J$-edge tree has remaining-level logarithm at least $\delta_0 L\,2^{-2J}$, and every current or anchor cutoff has logarithm at least
$$R=\delta_0L\,2^{-2J}/U\ge c_{\delta_0}L^{2/5}/U.$$
The last inequality uses $\log2<3/4$, obtained by integrating $1/t<(3-t)/2$ on $1<t<2$. For large $x$ this also gives $e^R\gg L^2$, as required in step2.1; the anchor prime set cannot be empty, since the product of all its small odd primes would exceed $|h|\le x$. Formula4.1 then gives $\epsilon_x=O(L^{-1/3})$: its other factors are fixed powers of $\log L$, and $U^{-U/4}$ beats every fixed negative power of $L$. This proves actual positive lower scales throughout the growing tree. [F2, F3, F5, F7, step 4.1, construct, algebra]


6.1 We show that local errors do not accumulate by a factor $U$ at every depth. For functions vanishing below two, [F1]'s positive limiting operator has norm at most $q_*<2987/3264$. Applying the SAME partial-summation estimate in step3.1 to $t\phi(t-1)$ shows that the truncated arithmetic operator has norm at most $q_*+\epsilon_x$. Hence for large $x$ it is at most $q_1=11/12$, using the fixed gap $5/3264$. Boundary upper errors at arguments at most two come only from the base and have norm at most $\epsilon_x$; lower errors there are zero. Their contribution to a lower step is at most $100\epsilon_x$: only $2\le s\le3$ can see them, and $\phi(u)/\phi(s)\le(103/101)^{103}<e^3<27$ for $1\le u\le2$. If $a_j^\pm$ bound the interior upper/lower arithmetic errors in that norm, positivity and the pointwise minimum/maximum rules therefore give [F1, F2, step 3.1, step 4.1, step 5.1, algebra]
$$a_j^-\le q_1a_{j-1}^++101\epsilon_x,\qquad a_j^+\le q_1a_j^-+\epsilon_x,\qquad a_0^+\le\epsilon_x.$$
These are bounds for the fully specified finite construction; selecting a minimum or maximum uses its selected branch only. Summing the resulting geometric series bounds every $a_j^\pm$ by a fixed multiple of $\epsilon_x$, independently of $j\le J$. The tail and anchor perturbations were already included in $\epsilon_x$. [F1, F2, step 3.1, step 4.1, step 5.1, algebra]


7.1 We give the depth-INDEPENDENT arithmetic remainder count. At any terminal Selberg node the residual modulus has coefficient at most $3^{\omega(e)}$; at a fundamental anchor each absolute remainder has at most a fixed constant coefficient. Every descending Buchstab prefix is a list of DISTINCT decreasing primes, all larger than every prime in its residual sieve modulus. For a fixed final relative modulus $d$ with $m=\omega(d)$, its prefix of length $r$ therefore MUST be its $r$ largest primes, with a unique order. There is at most one terminal/anchor contribution for each $r$: choosing an old rather than a refined envelope does not add a second branch. The sum of absolute coefficients is bounded by [F2, F3, step 3.1, step 5.1, step 6.1, algebra]
$$C\sum_{r=0}^{m}3^{m-r}\le\frac{3C}{2}3^m,$$
independently of $J$. Every base or anchor uses its remaining level at most $D/a$, so the final modulus is always $qd\le D$. This proves a fixed multiple of $\mathcal E_q(D;z)$, not a growing divisor exponent or an unproved well-factorability assertion. The zero translate was excluded in the definition of $r_d$ throughout. [F2, F3, step 3.1, step 5.1, step 6.1, algebra]


8.1 The ideal finite envelopes converge geometrically by [F1], with an initial norm depending only on the fixed base of step1.1. Thus their difference from $F,f$ is $O(q_1^{2J})$ in every fixed argument range. Since $\log(12/11)>1/12$ by integrating $1/t$ on $[11,12]$, one has [F1, F2, F7, step 5.1, step 6.1, step 7.1, algebra]
$$q_1^{2J}\ll L^{-(4/5)\log(12/11)}\ll L^{-1/15}.$$
Combining this with $a_j^\pm=O(\epsilon_x)=O(L^{-1/3})$ from steps5.1–6.1 and the actual remainder ledger in step7.1 proves both sharp sieve inequalities. For arguments at most two the lower estimate follows from nonnegativity directly. The constants are uniform in $h,q$ because every preceding main and remainder bound was uniform in those parameters. [F1, F2, F7, step 5.1, step 6.1, step 7.1, algebra]


9.1 The final normalization in the Statement is the quantitative version already derived in step2.1 with $z=x^\beta$. The prime factors of $h$ at least $z$ cost $O(L/(z\log z))$, absorbed in $O(L^{-1})$ uniformly for $\beta\ge\beta_0$. The usual Mertens product has its stated $O(1/\log z)$ error; the convergent twin-prime correction has an $O(1/z)$ tail. Thus no growing-shift asymptotic has been inferred from a fixed-shift theorem. It remains to prove the claimed absolute remainder bound at this logarithmically deflated square-root level. [F5, F7, step 2.1, step 8.1, algebra]

10.1 Use [F6] with saving200 at every real endpoint $t\in[xL^{-300},x]$. Its cutoff $t^{1/2}(\log t)^{-406}$ contains $D=x^{1/2}L^{-1000}$ for large $x$. Removing all proper prime powers, even crudely at each modulus, costs at most $D\sqrt x\,L^2=xL^{-998}$. Finite partial summation with $1/\log t$ then gives the unweighted prime-count discrepancy. The initial endpoints below $xL^{-300}$ cost at most $O(xL^{-298}+DL^2)$ after finite modulus summation, by integer progression counts and $d/\varphi(d)\le\tau(d)$. Integrate the endpoint estimate at each literal $t$; do not insert a maximum over endpoints. We obtain $\sum_{d\le D}e(d)\ll xL^{-190}$, where $e(d)$ is the maximum reduced prime-count discrepancy from $\operatorname{li}(x)/\varphi(d)$. Boundary constants at the prime2 add only $O(D)$ and are covered. [F5, F6, step 9.1, algebra]

11.1 Positivity gives $e(d)\ll x/d+1+x/\varphi(d)$. The finite ordered-factor bound $\tau(n)^k\le\tau_{2^k}(n)$ and its harmonic sums give [F5, F6, F7, step 9.1, step 10.1, algebra]
$$\sum_{d\le D}\tau(d)^6e(d)\ll xL^{130}.$$
Indeed $d/\varphi(d)\le\tau(d)$ reduces the main sum to the harmonic moment $\tau^7\le\tau_{128}$; the remaining ordinary $\tau^6$ sum has exponent at most63. Cauchy–Schwarz with step10.1 yields $\sum_{d\le D}\tau(d)^3e(d)\ll xL^{-30}$. The possible excluded prime $p+h=0$ adds at most $\sum_{d\le D}\tau(d)^3\ll DL^7$, a power saving. This proves the displayed $xL^{-20}$ bound with room, uniformly in every permitted $h$. All standing distribution inputs were unqualified and the logarithmic budgets were fixed before the construction. The original sharp sieve and all claimed quantitative errors are now proved without a source-theorem import. [F5, F6, F7, step 9.1, step 10.1, algebra] ∎


## Source limits

The accepted finite-depth packet is unchanged; it was not presumed uniform in depth. Steps2–8 supply that missing uniformity explicitly, using a fixed bounded-Dickman base and a large-u tail branch, the explicit weighted contraction, and the unique-largest-prefix remainder count. The source's optimal linear-sieve theorem is not an input. No arithmetic progression estimate with an extra choice hypothesis is used as an unqualified premise.

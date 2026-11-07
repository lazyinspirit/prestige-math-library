---
id: lem-geometric-convergence-to-the-optimal-linear-sieve-functions
kind: lemma
title: Explicit geometric convergence to the optimal dimension-one sieve functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps: [lem-dickman-method-of-steps-existence-uniqueness-and-positivity, lem-dickman-entire-laplace-transform, def-euler-mascheroni-constant, lem-exponential-factorial-tail-bound, def-real-exponential-function-and-e, thm-logarithm-derivative-and-integral, thm-natural-logarithm-laws, thm-integration-by-parts-with-interior-derivatives, lem-finite-buchstab-refinements-for-prime-translate-sieves]
justified_by: []
proof_strategy: direct
axiom_use: Compatible method-of-steps functions, proper Riemann integrals, explicit absolutely convergent numerical tails and a positive weighted operator; no choice axiom.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: H.-E. Richert, Lectures on Sieve Methods
      url: https://www.math.utoledo.edu/~codenth/Spring_13/3200/NT-books/Lectures_on_Sieve_Methods-Richert.pdf
      locator: Chapter11 equations(11.48)–(11.76), printed pp143–148; the omitted convergence beforeTheorem11.12 is proved here by an explicit contraction, not imported.
---

## Statement

Write $c=e^\gamma=\int_0^\infty\rho(t)\,dt$, $E(v)=\int_0^v\rho(t)\,dt$. There are continuous functions $F,f$ on $(0,\infty)$ with
$$F(s)=2c/s,\quad f(s)=0\quad(0<s\le2),\qquad (sF(s))'=f(s-1),\quad(sf(s))'=F(s-1)\quad(s>2).$$
Extend $f$ by zero on nonpositive arguments when it occurs in a delayed integral. They satisfy $F\downarrow1$, $f\uparrow1$ on $[2,\infty)$ and
$$F(s)-f(s)=2c\,\rho(s-1)/s\quad(s\ge1).$$
In particular,
$$F(s)=2c/s\quad(0<s\le3),\qquad f(s)=2c\log(s-1)/s\quad(2\le s\le4).$$
Also $0\le F(s)-1,1-f(s)\le2c\rho(s-1)/s$ for $s\ge2$, and $\rho(u)\le1/\lfloor u\rfloor!$ for $u\ge1$. The Selberg base $F_0(s)=c/E(s/2)$ majorizes $F(s)$ everywhere.

More generally let $B$ be any nonincreasing function with $B=F$ on $(0,2]$, $B\ge F$ and
$$M:=\sup_{s>2}(s+100)^{103}(B(s)-F(s))<\infty.$$
Start $B_0=B$, $b_0=0$ and apply the finite recurrence in [[lem-finite-buchstab-refinements-for-prime-translate-sieves]], with $B$ replacing its initial upper base: $b_j=0$ for $s\le2$,
$$b_j(s)=\max\left(b_{j-1}(s),0,1-\frac1s\int_s^\infty(B_{j-1}(t-1)-1)\,dt\right)\quad(s>2),$$
$$B_j(s)=\min\left(B_{j-1}(s),1+\frac1s\int_s^\infty(1-b_j(t-1))\,dt\right).$$
All integrals converge, all upper functions decrease in $s$, all lower functions increase, and for $j\ge1$,
$$0\le B_j(s)-F(s)\le M q^{2j}(s+100)^{-103},\qquad 0\le f(s)-b_j(s)\le M q^{2j-1}(s+100)^{-103},$$
where $q=(103/102)^{103}/3<2987/3264<11/12$. Both errors are zero for $s\le2$. The initial Selberg base satisfies the finite-$M$ condition.

## Facts & Assumptions

**Given:** The Dickman function and the displayed real function recurrences.

[F1] [[lem-dickman-method-of-steps-existence-uniqueness-and-positivity]] gives the unique positive continuous $\rho$, its delay equation and $u\rho(u)=\int_{u-1}^u\rho$. [[lem-dickman-entire-laplace-transform]] gives its entire Laplace transform, its formula and $\int\rho=c=e^\gamma$.

[F2] [[def-euler-mascheroni-constant]] defines $\gamma=\lim_n(H_n-\log n)$. [[def-real-exponential-function-and-e]] and [[lem-exponential-factorial-tail-bound]] give the exponential series and its finite factorial-tail bound.

[F3] [[thm-logarithm-derivative-and-integral]] and [[thm-natural-logarithm-laws]] give the real logarithm derivative, integral, monotonicity and product laws. [[thm-integration-by-parts-with-interior-derivatives]] gives proper Riemann integration by parts, permitting one-sided step endpoints.

[F4] [[lem-finite-buchstab-refinements-for-prime-translate-sieves]] defines the finite envelope recurrence. Only that literal recurrence is used here; its accepted arithmetic proof is not re-reviewed.

## Proof

1.1 On $(0,2]$ set $F=2c/s$, $f=0$, and extend successively by $sF(s)=2c+\int_2^s f(t-1)\,dt$ and $sf(s)=\int_2^s F(t-1)\,dt$. Each next unit interval uses only previously specified functions; these compatible definitions give the unique continuous pair and the displayed derivatives. Positivity follows at each step from the nonnegative integrands. For $s\ge1$ the difference $d(s)=s(F(s)-f(s))$ equals $2c$ on $[1,2]$ and has $d'(s)=-d(s-1)/(s-1)$ above two. Uniqueness of the same step construction in [F1] proves $d(s)=2c\rho(s-1)>0$. In particular $F>f\ge0$. [F1, F3, given, construct, algebra]

2.1 The delay equations also imply $F'<0$ and $f'>0$ above two. If either sign first failed on a compact interval, the preceding monotonicities would give $f(s-1)\le f(s)<F(s)\le F(s-1)$ at that first point, so both derivatives would still have their strict required signs. Continuity of the delayed functions supplies the same conclusion at integer boundaries. Thus $F$ decreases, $f$ increases, and both have finite limits; their difference tends to zero because [F1] gives $\rho(u)\le1/\lfloor u\rfloor!$. Call their common limit $\ell$. Put $\omega(s)=(F(s)+f(s))/(2c)$ for $s\ge1$, and zero below one. Then $0\le\omega\le1$, $\omega(s)=1/s$ on $[1,2]$, and $(s\omega(s))'=\omega(s-1)$ on each open step interval above one, with the jump $s\omega(s)=1$ at $s=1$. [F1, F3, step 1.1, algebra]

3.1 We identify the limit without a Tauberian import. For real $z>0$ let $W(z)=\int_1^\infty\omega(u)e^{-zu}\,du$ and $R(z)=\int_0^\infty\rho(u)e^{-zu}\,du$. Both converge, and their derivatives are justified by explicit exponential tails. Piecewise integration by parts of the preceding delay equation, splitting at the integer endpoints and cancelling their continuous internal boundary terms, gives $zW'(z)=-e^{-z}(1+W(z))$. The formula in [F1] gives $R'(z)/R(z)=-(1-e^{-z})/z$. Hence the derivative of $\log[zR(z)(1+W(z))]$ is zero. As $z\to\infty$, $zR(z)\to1$ because $\rho=1$ on $[0,1]$, and $W(z)\to0$ because $\omega\le1$; the constant is therefore one. As $z\downarrow0$, $R(z)\to c$ and $zW(z)\to\ell/c$ by splitting the bounded $\omega$ integral at a large fixed endpoint, using its limit there, and evaluating the remaining exponential mass. Thus $\ell=1$. This proves all monotone limits. It also gives $0\le F-1,1-f\le F-f$ above two. [F1, F3, step 1.1, step 2.1, algebra]

4.1 All differences just bounded have factorial tails. Integrating their delay derivatives from $s$ to infinity therefore gives [F1, F3, step 3.1, algebra]
$$F(s)=1+\frac1s\int_s^\infty(1-f(t-1))\,dt\quad(s>0),\qquad f(s)=1-\frac1s\int_s^\infty(F(t-1)-1)\,dt\quad(s\ge2).$$
For the first identity below two, extend from two using $f=0$ on the missing interval. Direct integration of the original step equations gives $F=2c/s$ up to three and $f=2c\log(s-1)/s$ from two to four. No limit of arithmetic sieve weights has been asserted to establish these purely functional identities. [F1, F3, step 3.1, algebra]

5.1 We prove the necessary Selberg barrier. First $1<c<2$ follows from elementary bounds on $\gamma$: integral comparison gives $0<1-\log2\le\gamma\le H_8-\log8$, while $\log2\ge2(1/3+(1/3)^3/3)=56/81$ by integrating the finite geometric identity for $2/(1-t^2)$. Since $H_8=761/280<4(56/81)$, one has $\gamma<\log2$. For $2\le s\le3$, $E(s/2)\le s/2$ proves $F_0\ge F$. On $3\le s\le4$ the explicit formula in step4.1 gives $F(s)\le(2c/s)(1+(s-3)^2/4)$, since $\log(t-2)\le t-3$ and $t-1\ge2$. Also $E(v)=2v-v\log v-1$ for $1\le v\le2$. The bound $\log u\ge2(u-1)/(u+1)$, and its additional positive cubic term at $u=2$, yield [F1, F2, F3, step 4.1, algebra]
$$E(13/8)\le31/21<3/2,\quad E(7/4)\le17/11<8/5,\quad E(2)\le131/81<28/17.$$
On $[3,13/4]$, compare $F\le2c/3$ with $F_0\ge c/E(13/8)$; on $[13/4,7/2]$ compare $F\le5c/8$ with $F_0\ge c/E(7/4)$; and on $[7/2,4]$ compare $F\le17c/28$ with $F_0\ge c/E(2)$. Every comparison is in the required direction. [F1, F2, F3, step 4.1, algebra]

6.1 For $s\ge4$, let $v=s/2$. The Dickman integral identity gives $\int_v^{v+1}\rho=(v+1)\rho(v+1)$, and monotonicity gives $\rho(v+1)\ge\rho(s-1)$. Hence [F1, step 3.1, step 5.1, algebra]
$$F_0(s)-1=\frac{\int_v^\infty\rho}{E(v)}\ge\frac{(s/2+1)\rho(s-1)}c\ge\frac{2c\,\rho(s-1)}s\ge F(s)-1.$$
The middle inequality uses $s(s/2+1)\ge12>2c^2$. Below two, $F_0=2c/s=F$. This completes the barrier everywhere. The factorial bound for $\rho$ also bounds $F_0-1$ by $2/\lfloor s/2\rfloor!$ for $s\ge4$, so $\sup_{s>2}(s+100)^{103}(F_0-F)<\infty$. [F1, step 3.1, step 5.1, algebra]

7.1 Consider the general base $B$. Its weighted difference from $F$ is integrable, and $F-1$ has a factorial tail, so the first lower candidate is defined. The lower candidate is at most $f$ by step4.1; taking its maximum with zero and the old lower bound preserves $0\le b_j\le f$. The new upper candidate is at least $F$, so taking the minimum with the old upper bound preserves $F\le B_j\le B$. On $s\le2$ this forces $B_j=F=B$ and $b_j=0=f$. The first lower deficit is bounded by $s^{-1}\int_s^\infty(B(t-1)-1)\,dt$, an integrable polynomial tail plus a factorial tail; every subsequent lower deficit is smaller. This proves convergence of each next upper integral. Each positive tail integral decreases as its lower endpoint increases, so its quotient by $s$ decreases. Thus the upper candidates decrease and the lower candidates increase directly, and finite minima/maxima preserve these monotonicities, without differentiability at clipping points. This induction uses only specified function operations and absolutely convergent real integrals. [F3, F4, step 4.1, step 6.1, algebra]

8.1 Set $\phi(s)=(s+100)^{-103}$ and, for functions extended by zero below two, define [F3, step 7.1, construct, algebra]
$$Tg(s)=\frac1s\int_{\max(s-1,2)}^\infty g(u)\,du\quad(s>2).$$
A direct integral gives $T\phi(s)/\phi(s)=(s+100)^{103}/[102s(\max(s-1,2)+100)^{102}]$. On $2\le s\le3$ its logarithmic derivative is $103/(s+100)-1/s>0$; above three it is $(s-3)/[(s+100)(s+99)]-1/s<0$. Its maximum is therefore at three, with value $q=(103/102)^{103}/3$. Finally $(103/102)^{102}<e$ by $\log(1+t)<t$. The exponential series and its factorial-tail bound give $e\le\sum_{k=0}^6 1/k!+2/7!<87/32$. Consequently [F2, F3, step 7.1, construct, algebra]
$$q<\frac{103\cdot87}{102\cdot32\cdot3}=\frac{2987}{3264}<\frac{11}{12}.$$
These are exact rational inequalities, not an experimentally selected spectral radius. [F2, F3, step 7.1, construct, algebra]

9.1 Put $E_j^+=B_j-F$ and $E_j^-=f-b_j$. Both are nonnegative and zero below two. Step4.1 and the clipping rules give pointwise $E_j^-\le T E_{j-1}^+$ and $E_j^+\le T E_j^-$. For the norm $\|g\|_\phi=\sup_{s>2}|g(s)|/\phi(s)$, positivity and step8.1 imply $\|Tg\|_\phi\le q\|g\|_\phi$. Starting with $\|E_0^+\|_\phi=M$, induction gives exactly the two displayed geometric estimates. There is no need for a finite norm of the initial lower error $f-b_0$; the first lower step is controlled by the finite upper norm. This closes the formerly missing convergence argument and proves the complete Statement. [F3, F4, step 4.1, step 7.1, step 8.1, algebra] ∎

## Source limits

Richert's printed limit assertions are not used as inputs. The sharp functions, their normalization at infinity, the Selberg barrier and the contraction are all reconstructed above. The already recorded finite arithmetic sieve lemma is used only for the literal recurrence and is unchanged. This functional result alone does not supply growing-depth arithmetic error bounds; those must still be proved before an optimal sieve theorem is claimed.

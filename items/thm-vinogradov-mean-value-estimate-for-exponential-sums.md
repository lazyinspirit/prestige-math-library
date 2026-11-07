---
id: thm-vinogradov-mean-value-estimate-for-exponential-sums
kind: theorem
title: "A Vinogradov mean-value bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-vinogradov-mean-value-Jsk
  - thm-vinogradov-mean-value-is-solution-count
  - lem-continuous-torus-orthogonality-for-integer-frequencies
  - lem-vinogradov-local-congruence-toolkit
  - cor-prime-number-theorem
  - thm-holder-finite-real-exponents
  - def-exponential-character-e
  - def-factorial-and-falling-factorial
  - thm-binomial-theorem-over-a-commutative-ring
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24, Theorem 24.5"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 46–51, complete proof of Theorem 24.5."
---

## Statement

There is an absolute constant $C>0$ such that for every integer $k\ge2$, every integer $r\ge1$, and every real $X\ge1$,
$$J_{kr,k}(X)\le \exp(Crk^2\log k)\,X^{2kr-\frac12k(k+1)+\eta(k,r)},\qquad \eta(k,r):=\frac12k^2\left(1-\frac1k\right)^r.$$
Here $J_{s,k}(X)$ is the $2s$-th torus mean of the degree-$k$ exponential sum, equivalently the number of equal-power-sum solutions.

## Statement references

[Montgomery–Vaughan, Theorem 24.5 and complete proof](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)


## Facts & Assumptions

**Given:** Integers $k\ge2$, $r\ge1$, and real $X\ge1$.

[F1] $J_{s,k}(X)$ counts the tuples of integers in $[1,X]$ whose first $k$ power sums agree ([[def-vinogradov-mean-value-Jsk]], [[thm-vinogradov-mean-value-is-solution-count]]).

[F2] For $b\le k$, $J_{b,k}(X)\le b!X^b$; for $b\ge k$, $J_{b,k}(X)\le k!X^{2b-k}$; the prime-power congruence count is at most $k!p^{k(k-1)/2}$; and a fixed power-sum difference vector on an interval of at most $\lfloor X\rfloor$ integers has at most $J_{b,k}(X)$ representations ([[lem-vinogradov-local-congruence-toolkit]]).

[F3] For integer frequencies, the normalized torus integral of the character is $1$ at frequency $0$ and $0$ otherwise ([[lem-continuous-torus-orthogonality-for-integer-frequencies]]).

[F4] The prime number theorem gives $\pi(2y)-\pi(y)\sim y/\log y$ ([[cor-prime-number-theorem]]).

[F5] Finite Hölder inequality applies to the sums below ([[thm-holder-finite-real-exponents]]).

[F6] $e(t)=\exp(2\pi it)$ has modulus $1$ and $e(u+v)=e(u)e(v)$ ([[def-exponential-character-e]]).

[F7] The factorial is $k!=1\cdot2\cdots k$ for the corresponding natural number ([[def-factorial-and-falling-factorial]]).

[F8] In a commutative ring, $(x+y)^j=\sum_{u=0}^j\binom ju x^uy^{j-u}$ ([[thm-binomial-theorem-over-a-commutative-ring]]).

## Proof

**Proof technique:** induction on $r$, splitting solutions according to local distinctness.

1.1 For $r=1$, [F2] with $b=k$ gives $J_{k,k}(X)\le k!X^k$. Since $2k-\tfrac12k(k+1)+\eta(k,1)=k$ and [F7] gives $k!\le k^k\le\exp(Ck^2\log k)$ for $C\ge1$, the assertion holds. [base, given, F2, F7, algebra]

1.2 Assume $r\ge2$ and the bound holds for $r-1$. The elementary inequality $1-(1-1/k)^r\le r/k$ implies $\tfrac12k(k+1)-\eta(k,r)\le C_1\min(k^2,rk)$. If $X\le\exp(C_2\max(k,r)\log k)$, then the trivial $J_{kr,k}(X)\le X^{2kr}$ and this exponent bound imply the desired result after increasing the absolute $C$. We may therefore assume $X>\exp(C_2\max(k,r)\log k)$. [IH, given, F1, algebra]

2.1 Put $y=X^{1/k}$ and choose $M=k(k^2-1)/2$ distinct primes in $(y,2y]$; [F4] and the lower bound on $X$ ensure their existence. Put $b=kr$. For a power-sum vector $h$, let $R_1(h)$ count solutions with the first $k$ coordinates pairwise distinct, and let $R_2(h)$ count the remaining solutions. By [F1], $$J_{kr,k}(X)=\sum_h(R_1(h)+R_2(h))^2\le2(S_1+S_2),\qquad S_i:=\sum_hR_i(h)^2.$$ [step 1.2, F1, F4]

3.1 If $S_2\ge S_1$, every tuple counted by $R_2(h)$ has a colliding pair among its first $k$ coordinates. For each pair $u<v$, let $R_{u,v}(h)$ count solutions with those coordinates equal. Then $R_2(h)\le\sum_{u<v}R_{u,v}(h)$, and Cauchy gives $S_2\le\binom{k}{2}\sum_{u<v}\sum_hR_{u,v}(h)^2$. By symmetry and orthogonality [F3], each inner sum is the same integral with the colliding coordinate repeated, so $$S_2\le k^4\int_{[0,1]^k}|f(2\alpha)|^2|f(\alpha)|^{2b-4}\,d\alpha,$$ where $f(\alpha)=\sum_{n\le X}e(\sum_{j=1}^k\alpha_jn^j)$. Apply three-factor finite Hölder [F5] to equal-grid Riemann sums with exponents $b$, $b/(b-2)$, and $b$ on $|f(2\alpha)|^2$, $|f(\alpha)|^{2b-4}$, and $1$, then pass to the limit; the integrands are continuous and $b=kr\ge4$. The map $\alpha\mapsto2\alpha$ preserves the torus integral because in each coordinate $\int_0^1g(2x)dx=\frac12\int_0^2g(u)du=\int_0^1g(u)du$ for a continuous 1-periodic $g$. Therefore $$S_2\le k^4J_{b,k}(X)^{1/b}J_{b,k}(X)^{(b-2)/b}=k^4J_{b,k}(X)^{1-1/b}.$$ Thus $J_{b,k}(X)\le4k^4J_{b,k}(X)^{1-1/b}$. The diagonal tuple gives $J_{b,k}(X)\ge1$, so division by $J_{b,k}(X)^{1-1/b}$ yields $J_{b,k}(X)\le(4k^4)^b$, which is bounded by the claimed right side after increasing $C$. [step 2.1, F1, F3, F5, F6, algebra]

3.2 It remains to consider $S_2<S_1$, so $J_{b,k}(X)\le4S_1$. For each tuple $m_1,\ldots,m_k$ counted by $R_1(h)$, the product $P=\prod_{i<j}(m_i-m_j)$ is a nonzero integer and $|P|\le X^{k(k-1)/2}$. It has fewer than $k^2(k-1)/2<M$ prime divisors exceeding $y$, because $\log X=k\log y$. Therefore one of the selected primes $p\in(y,2y]$ does not divide $P$. For that prime the first $k$ coordinates are distinct modulo $p$. If $R_4(h,p)$ counts solutions with this extra condition, then $R_1(h)\le\sum_pR_4(h,p)$ and Cauchy gives $$J_{b,k}(X)\le4S_1\le4M\sum_p I(p),\qquad I(p):=\sum_hR_4(h,p)^2.$$ [step 2.1, F1, algebra]

4.1 For a residue $a\pmod p$, put $g_a(\alpha)=\sum_{n\le X,\ n\equiv a\ (p)}e(\sum_{j=1}^k\alpha_jn^j)$, and let $\mathcal A$ be the set of ordered $k$-tuples of pairwise distinct residues modulo $p$. Orthogonality [F3] writes $$I(p)=\int_{[0,1]^k}\left|\sum_{\mathbf a\in\mathcal A}\prod_{i=1}^kg_{a_i}(\alpha)\right|^2\left|\sum_{a\bmod p}g_a(\alpha)\right|^{2b-2k}d\alpha.$$ Finite Hölder [F5] gives $|\sum_a g_a|^{2b-2k}\le p^{2b-2k-1}\sum_a|g_a|^{2b-2k}$. Expanding each resulting integral by [F3] shows it counts pairs with the first $k$ coordinates distinct modulo $p$ and with every remaining coordinate in the same residue class $a$. Call this count $I_1(p,a)$. Consequently $I(p)\le p^{2b-2k}\max_{a\bmod p}I_1(p,a)$. [step 3.2, F3, F5, F6, algebra]

5.1 Fix the scalar residue $a$ in $I_1(p,a)$. Write the remaining coordinates as $pu_r+a$ and $pv_r+a$. Translating all $b$ coordinates in each tuple by $-a$ preserves equality of every power sum by [F8]. Therefore, for the first $k$ coordinates $m,n$, $$\sum_{i=1}^k(m_i-a)^j\equiv\sum_{i=1}^k(n_i-a)^j\pmod {p^j}\quad(1\le j\le k),$$ and the residual variables satisfy a fixed difference system $\sum_r u_r^j-\sum_rv_r^j=h_j$. Since $p^k>X$, the translated first-coordinate interval has diameter less than $p^k$, so [F2] bounds the number of $n$ for each $m$ by $k!p^{k(k-1)/2}$; there are at most $X^k$ choices of $m$. Each residual coordinate $u_r,v_r$ lies in a common interval of at most $\lfloor1+X/p\rfloor$ integers, so the fixed-difference bound [F2] gives at most $J_{(r-1)k,k}(1+X/p)$ completions. Hence $$I_1(p,a)\le X^k k!p^{k(k-1)/2}J_{(r-1)k,k}(1+X/p).$$ [step 4.1, F2, F3, F8, algebra]

6.1 Apply the induction hypothesis at $1+X/p$ and write $E=2(r-1)k-\tfrac12k(k+1)+\eta(k,r-1)$. Since $p> X^{1/k}$, $$1+X/p\le X^{1-1/k}(1+X^{-(1-1/k)}),$$ while $p\le2X^{1/k}$. Combining steps 4.1 and 5.1 yields $$J_{kr,k}(X)\le \max_{y<p\le2y}\lambda\,p^{k^2-\eta(k,r-1)}X^{2rk-k-\frac12k(k+1)+\eta(k,r-1)},$$ where $$\lambda:=C_3k^6k!\left(1+2X^{1/k-1}\right)^E\exp(C(r-1)k^2\log k).$$ The power of $p$ is obtained by subtracting $E$ from $2b-2k+k(k-1)/2$, giving $k^2-\eta(k,r-1)$. [step 4.1, step 5.1, step 1.2, F1, F2, algebra]

7.1 Using $p\le2X^{1/k}$, the exponent of $X$ in step 6.1 becomes $$2rk-\tfrac12k(k+1)+(1-1/k)\eta(k,r-1)=2rk-\tfrac12k(k+1)+\eta(k,r).$$ Also $E\le2rk$ and $X^{1/k-1}\le X^{-1/2}$, so $\left(1+2X^{1/k-1}\right)^E\le\exp(4rkX^{-1/2})\le e$ by the large-$X$ assumption after fixing $C_2$. Use $p^{k^2-\eta(k,r-1)}\le2^{k^2}X^{k-\eta(k,r-1)/k}$. After this $X$-power and the induction factor $\exp(C(r-1)k^2\log k)$ are extracted, the remaining numerical factor is at most $C_3k^6k!e\,2^{k^2}\le\exp(C_4k^2\log k)$ with $C_4$ absolute and independent of $r$, by [F7]. Choosing the same induction constant $C\ge C_4$ therefore gives $\exp(Crk^2\log k)$ and proves the induction step. Steps 3.1 and 3.2 exhaust the cases, completing the induction. [step 6.1, step 3.1, F1, F7, discharge-induction] ∎


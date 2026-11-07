---
dependency_level: 2
id: lem-dnl-partitioned-strip-intersection-estimate
kind: lemma
title: "Partitioned primitive strip masses, overlaps and positive measure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-partitioned-primitive-linear-form-condition
  - def-number-theoretic-mobius-function
  - thm-euler-totient-product-formula
  - thm-fundamental-theorem-of-arithmetic
  - thm-bezout-identity
  - lem-khintchine-groshev-torus-event-measure-and-independence
  - lem-parallel-integer-vectors-share-a-primitive-direction
  - lem-second-moment-limsup-positive-measure
  - def-countable-choice
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-lebesgue-measure-of-a-box-of-every-kind
proof_strategy: direct
sources:
  references:
    - title: "Dani, Laurent and Nogueira, Multi-dimensional metric approximation by primitive points, §§4–6; the elementary arithmetic and exceptional scalar product argument are supplied in full locally"
      url: "https://arxiv.org/pdf/1310.5535v2"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$ with $n+m\ge3$, let $\pi$ partition $(p_1,\ldots,p_m,q_1,\ldots,q_n)$ into blocks of size at least two, and let $0<\psi(h)<1/2$ with $f(h)=h^{n-1}\psi(h)^m$ non-increasing and $\sum_h f(h)=\infty$. Let $I=[-1/2,1/2]^{m\times n}$. For fixed $y\in\mathbb R^m$, let $E_q(y)$ be the union, over offsets $p$ for which $(p,q)$ is primitive in every block, of the strips $\|\Theta q+p-y\|_\infty\le\psi(\|q\|_\infty)$. There are positive constants depending only on $n,m,\pi$ such that, with $A_Q=\sum_{h\le Q}f(h)$,

$$\sum_{0<\|q\|\le Q}|E_q(y)\cap I|\ge c A_Q\quad(Q\text{ sufficiently large}),\qquad \sum_{0<\|q\|,\|q'\|\le Q}|E_q(y)\cap E_{q'}(y)\cap I|\le C(A_Q^2+A_Q).$$

In particular $|I\cap\limsup_qE_q(y)|\ge\delta>0$, uniformly in the function and target. Separately, when $n=m=1$, for the single block $\{p,q\}$ and any positive non-increasing $\psi<1/2$ with $\sum_q\psi(q)=\infty$, the corresponding primitive approximation limsup in the product $(x,y)\in[0,1]^2$ has measure at least an absolute $\delta_0>0$.

## Statement references

[Dani–Laurent–Nogueira, §§4–6, Lemmas 4.1–5.3 and Theorem 5.1](https://arxiv.org/pdf/1310.5535v2)

## Facts & Assumptions

**Given:** Countable Choice, dimensions, partition and function as in the Statement, and the fixed target in its first assertion.

[A1] Countable Choice supports Lebesgue product integration and the indicator second-moment argument. ([[def-countable-choice]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[lem-second-moment-limsup-positive-measure]])

[F1] A nonzero integer row maps the unit torus measure to uniform measure; two linearly independent rows give the uniform product measure. ([[lem-khintchine-groshev-torus-event-measure-and-independence]])

[F2] Parallel integer vectors are integer multiples of a primitive direction; Bézout controls the coprime scalar multiples. ([[lem-parallel-integer-vectors-share-a-primitive-direction]], [[thm-bezout-identity]])

[F3] A tuple is primitive precisely when no prime divides all its coordinates; the Möbius inclusion-exclusion formula and totient product formula follow from prime factorization. ([[def-partitioned-primitive-linear-form-condition]], [[def-number-theoretic-mobius-function]], [[thm-fundamental-theorem-of-arithmetic]], [[thm-euler-totient-product-formula]])

## Proof

1.1 We first give the arithmetic lower bounds with no prime-distribution input. If $d\ge2$ and $L$ is a positive integer, among $\{1,\ldots,L\}^d$ the nonprimitive tuples number at most $\sum_{p\le L}\lfloor L/p\rfloor^d\le L^d\sum_{k\ge2}k^{-2}\le3L^d/4$. Thus at least $L^d/4$ are primitive. In particular the number of coprime pairs in the $L$-square is $2\sum_{j\le L}\varphi(j)-1$, so $\sum_{j\le L}\varphi(j)/j\ge L/8$. For fixed $\beta>0$, $1\le u\le L$, inclusion-exclusion gives $\#\{1\le v\le\beta L:\gcd(v,u)=1\}=\beta L\varphi(u)/u+O(2^{\omega(u)})$. Uniformly in $u\le L$, this is at least $\beta L\varphi(u)/(2u)$ for large $L$. Indeed for any $\epsilon>0$, splitting the finitely many small primes from the others gives $2^{\omega(u)}\le C_\epsilon u^\epsilon$ and $u/\varphi(u)\le C_\epsilon u^\epsilon$, because $2\le p^\epsilon$ and $(1-1/p)^{-1}\le p^\epsilon$ for all sufficiently large primes. With $\epsilon=1/4$ the relative error is $O_\beta(L^{-1/2})$. [given, F3, algebra]

1.2 For the upper bounds discard primitivity. By [F1], a row event has measure $(2\psi(\|q\|))^m$ in $I$, and two linearly independent rows have intersection measure $4^m\psi(\|q\|)^m\psi(\|q'\|)^m$. The centered cube is a fundamental torus cube; translating it does not change these unrestricted periodic event measures. For dependent rows write $q=a v$, $q'=b v$ with $a\ge1$, $0<|b|\le a$, $\gcd(a,b)=1$ and integer $v\ne0$. Multiplication by the integer row $v$ preserves torus measure, so it suffices to bound in each coordinate the intersections of $\|a z-y_i\|\le\alpha$ and $\|b z-y_i\|\le\beta$, where $\alpha=\psi(\|q\|)\le\beta=\psi(\|q'\|)$. The interval centers indexed by $p,p'$ can meet only if $|ap'-bp-(a-b)y_i|\le |b|\alpha+a\beta\le2a\beta$. There are at most $4a\beta+2$ possible integers $ap'-bp$; by Bézout each determines one pair modulo the simultaneous translation $(p,p')\mapsto(p+a k,p'+b k)$ and hence just one interval intersection on the torus. Each has length at most $2\alpha/a$. Taking products proves the bound $K_m\alpha^m(\beta^m+a^{-m})$. This includes negative $b$ and coincident rows. [given, A1, F1, F2, algebra]

2.1 Relabel within the $p$ and $q$ coordinates so that each mixed block has a distinguished pair $(p_j,q_j)$, $1\le j\le a$; the remaining blocks are pure $p$ blocks or pure $q$ blocks. Set $L=\|q\|_\infty$ and restrict to positive $q$ primitive on every pure $q$ block. To obtain offsets with $1\le p_i\le L/8$, require $\gcd(p_j,q_j)=1$ in every mixed block, require primitive tuples on the pure $p$ blocks, and leave all other $p$ coordinates free. These conditions suffice for primitivity in every block and concern disjoint coordinates. Step 1.1, with $\beta=1/8$, therefore gives at least $c_1L^m\prod_{j=1}^a\varphi(q_j)/q_j$ such offsets for all sufficiently large $L$, uniformly over these $q$. [step 1.1, F3, algebra]

2.2 The sup-norm shell in $\mathbb Z^n$ has at most $C_n h^{n-1}$ points, by expanding $(2h+1)^n-(2h-1)^n$. Thus all the product terms in step 1.2 sum to at most $C' A_Q^2$. For the arithmetic errors, each ordered dependent pair with $\|q\|\ge\|q'\|$ has the unique coprime scalars $a>0,b$ just used; $v$ need not itself be primitive. For fixed $a$, there are $2\varphi(a)$ possible $b$ with $0<|b|\le a$ and $\gcd(a,b)=1$, including $a=1$. After allowing both orders, the error sum is bounded by $C''\sum_{a\le Q}\varphi(a)a^{-m}\sum_{0<\|v\|\le Q/a}\psi(a\|v\|)^m\le C_3\sum_{a\le Q}\varphi(a)a^{-(m+n-1)}\sum_{h\le Q,\ a\mid h}f(h)$. Monotonicity gives $\sum_{a\mid h\le Q}f(h)\le A_Q/a$ by comparing each $f(aj)$ with the preceding block of $a$ terms. Consequently this error is at most $C_3A_Q\sum_{a\ge1}\varphi(a)/a^{m+n}$, a convergent series since $m+n\ge3$, $\varphi(a)\le a$, and a dyadic comparison proves convergence of $\sum a^{-2}$. This proves the second-moment bound. [step 1.2, algebra]

3.1 Each of these offset strips has volume at least $c_2(\psi(L)/L)^m$ in $I$ once $L$ is large relative to the fixed $y$. For each row of $\Theta$, choose a coordinate $j$ with $|q_j|=L$ and restrict the other $n-1$ row coordinates to $[-1/(16n),1/(16n)]$. Their contribution has magnitude less than $L/16$. For $|p_i|\le L/8$ and $|y_i|\le L/16$, the center solving the remaining coordinate equation has modulus at most $1/4$, and its interval of radius $\psi(L)/L$ lies in $[-1/2,1/2]$ for large $L$. Its length is $2\psi(L)/L$. Taking the product over rows proves the volume bound, including $n=1$ with no other coordinates. Distinct offsets for a fixed row $q$ give disjoint strips since $\psi(L)<1/2$. Consequently $|E_q(y)\cap I|\ge c_3\psi(L)^m\prod_{j=1}^a\varphi(q_j)/q_j$. [step 2.1, A1, algebra]

4.1 Sum this lower bound over the face $q_1=L$, $1\le q_i\le L$ for the other coordinates. If $a\ge1$, take $q_1$ to be the distinguished coordinate of the first mixed block. Its weight is $\varphi(L)/L$; each remaining distinguished coordinate has total weight at least $L/8$ by step 1.1, each pure $q$ block contributes at least a constant times $L$ to the power of its size, and each remaining free coordinate contributes $L$. Thus the weighted number on this face is at least $c_4\varphi(L)L^{n-2}$. If $a=0$, some pure $q$ block contains $q_1$ and has size at least two. Require a second coordinate in it to be coprime to $L$, giving $\varphi(L)$ choices, and leave its other coordinates free; the other pure blocks have the same primitive-box lower bounds. This gives the identical estimate. Hence the first-moment sum is at least $c_5\sum_{L_0\le h\le Q}(\varphi(h)/h)f(h)$. The prefix bound $\sum_{j\le L}\varphi(j)/j\ge L/8$ from step 1.1 and Abel summation give $\sum_{h\le Q}(\varphi(h)/h)f(h)\ge A_Q/8$, since $f$ is non-increasing. Removing the fixed prefix costs a finite constant; $A_Q\to\infty$ proves the stated lower bound for all large $Q$. [step 1.1, step 3.1, algebra]

5.1 For a fixed initial row-norm cutoff $M$, let $Z_{M,Q}$ be the sum of the remaining event indicators on the probability cube $I$. Its first moment is at least $c A_Q-O_M(1)$ by step 4.1, while its second moment is at most $C(A_Q^2+A_Q)$ by step 2.2. Cauchy–Schwarz gives $|\bigcup_{\|q\|>M}(E_q(y)\cap I)|\ge c^2/C$ on letting $Q\to\infty$. Continuity from above as $M\to\infty$ yields the uniform positive limsup measure, with for instance any $\delta<c^2/C$. Bounded row norm allows only finitely many relevant offsets on $I$ for the fixed target, so this limsup is also the infinitely-many-pairs set. [step 4.1, step 2.2, A1, algebra]

6.1 For the separate scalar doubly metric assertion, take positive $q\ge2$, let $D_q$ be the primitive event in $(x,y)\in[0,1]^2$, and put $w_q=\psi(q)$. For every $a\in\{1,\ldots,q-1\}$ coprime to $q$, the interval $|qx-a-y|\le w_q$ has length at least $w_q/q$ in $x\in[0,1]$ for each fixed $y\in[0,1]$: its center is $(a+y)/q\in[1/q,1]$ and a truncation at the upper endpoint retains at least half its full length. These intervals are disjoint, so $|D_q|\ge\varphi(q)w_q/q$. They are subsets of the unrestricted torus events with rows $(q,-1)$ on $(x,y)$, which have measure $2w_q$ and are pairwise independent for distinct $q$ by [F1]. Therefore $\sum_{q,r\le Q}|D_q\cap D_r|\le4(\sum_{q\le Q}w_q)^2+2\sum_{q\le Q}w_q$. Step 1.1 and Abel summation give $\sum_{q\le Q}|D_q|\ge(1/8)\sum_{q\le Q}w_q-O(1)$. The tail Cauchy–Schwarz and continuity argument in step 5.1 yields an absolute positive lower bound $\delta_0$. This is a statement in the product space and makes no fixed-target primitive assertion in the exceptional scalar dimension. [step 1.1, step 5.1, A1, F1, F3, algebra] ∎

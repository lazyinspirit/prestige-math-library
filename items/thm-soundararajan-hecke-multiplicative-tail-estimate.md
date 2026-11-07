---
id: thm-soundararajan-hecke-multiplicative-tail-estimate
kind: theorem
title: "Soundararajan tail estimate for Hecke-multiplicative sequences"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-hecke-multiplicative-maass-eigenvalue-sequence
  - lem-soundararajan-primes-in-square-root-window
  - lem-soundararajan-pointwise-prime-coefficient-bounds
  - prop-soundararajan-divisibility-mass-bounds
  - prop-soundararajan-prime-block-mass-bounds
  - def-real-exponential-function-and-e
  - thm-logarithm-derivative-and-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "Theorem 3 and complete proof in §§3–4, printed pp. 4–10."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "§2, discussion of Hecke eigenvalues and escape of mass, pp. 11–14."
---

## Statement

Let $f:\mathbb N\to\mathbb C$ satisfy $f(1)=1$ and
$f(m)f(n)=\sum_{d\mid\gcd(m,n)}f(mn/d^2)$ for all positive integers $m,n$.
For real $x\ge1$ define
$$S_f(x)=\sum_{n\le x}|f(n)|^2.$$
Then for all real $1\le y\le x$,
$$\sum_{n\le x/y}|f(n)|^2
\le10^8\frac{1+\log y}{\sqrt y}\,S_f(x).$$

## Statement references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, Theorem 3 and §§3–4, printed pp. 4–10.](https://arxiv.org/pdf/0901.4060v1)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, §2, pp. 11–14.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

## Facts & Assumptions

**Given:** A Hecke-multiplicative sequence $f$ and real numbers $1\le y\le x$.

[F1] $f(1)=1$ and $f(m)f(n)=\sum_{d\mid\gcd(m,n)}f(mn/d^2)$ ([[def-hecke-multiplicative-maass-eigenvalue-sequence]]).

[F2] At least $\frac7{1000}\frac{\sqrt y}{\log y}$ primes satisfy $\sqrt y/23<p\le\sqrt y$ when $y\ge10^{16}$ ([[lem-soundararajan-primes-in-square-root-window]]).

[F3] For $F_x(t)=S_f(x)^{-1}\sum_{n\le x/t}|f(n)|^2$, the prime bounds
$|f(p)|\le2F_x(p)^{-1/2}$ and $|f(p)|\le2F_x(p^2)^{-1/4}$ hold when their denominators are positive ([[lem-soundararajan-pointwise-prime-coefficient-bounds]]).

[F4] The square-free divisibility sums are bounded by the two inequalities in the divisibility-mass proposition ([[prop-soundararajan-divisibility-mass-bounds]]).

[F5] The prime-block sums over $N_0(k)$ and $N_j(k)$ satisfy the bounds in the prime-block proposition ([[prop-soundararajan-prime-block-mass-bounds]]).

[F6] The real exponential and $e$ are defined by $\exp(x)=\sum_{k\ge0}x^k/k!$ and $e=\exp(1)$ ([[def-real-exponential-function-and-e]]).

[F7] For $x>0$, $\log'(x)=1/x$ and $\log x=\int_1^x dt/t$ ([[thm-logarithm-derivative-and-integral]]).

## Proof

1.1 From [F6], $e=\sum_{k\ge0}1/k!<3$: induction gives $k!\ge2^{k-1}$ for $k\ge2$, strictly for $k\ge3$, and hence $\sum_{k\ge2}1/k!<\sum_{k\ge2}2^{-(k-1)}=1$. Write $S=S_f(x)$ and, for $1\le t\le x$, put
$$F(t)=\frac1S\sum_{n\le x/t}|f(n)|^2,$$
with $F(t)=0$ for $t>x$. Since $f(1)=1$, $S>0$, and $0\le F(t)\le1$ while $F$ is nonincreasing. If $y\le10^{16}$, then $\log y\ge0$ and $\sqrt y\le10^8$, so $10^8(1+\log y)/\sqrt y\ge1$; the theorem is immediate. [F1, F6, given, algebra]

1.2 Suppose the assertion fails at some $y$. Then $F(y)>10^8(1+\log y)/\sqrt y$. Let $E$ be the set of $t\in[1,x]$ where this strict inequality holds, and choose $y\in E$ with $y>\sup E-1$. This is possible by the definition of supremum; it ensures $F(t)\le10^8(1+\log t)/\sqrt t$ for every $t\ge y+1$. We may assume $y>10^{16}$ by step 1.1. Write $L=\log y$, $z=\sqrt y$, and $C=10^8$. Then
$$F(y)z>C(1+L),\qquad z>C(1+L),\qquad
J:=\left\lceil2+\frac{\log(1/F(y))}{4\log2}\right\rceil
\le3+\frac{3L}{16}.$$
The second inequality follows from $F(y)\le1$ and the first. By [F7], the substitution $t=(1+u)/(1-u)$ gives $\log2=2\int_0^{1/3}(1-u^2)^{-1}\,du>2/3$, since the integrand is strictly greater than one on $(0,1/3)$. The bound for $J$ now follows from $\log(1/F(y))<\log z=L/2$ and $\lceil t\rceil\le t+1$. [F1, F7, step 1.1, choose, algebra]

2.1 Let $P$ be the primes in $(z/23,z]$. Since $F(y)>0$, [F3] applies to each $p\in P$: $p^2\le y$ and $F(p^2)\ge F(y)$, so $|f(p)|\le2F(y)^{-1/4}$. Put the primes with $|f(p)|\le1/2$ in $P_0$; for $1\le j\le J$, put those with $2^{j-2}<|f(p)|\le2^{j-1}$ in $P_j$. These disjoint sets cover $P$ by the bound just proved. The prime-window estimate [F2] gives
$$|P|F(y)\ge\frac7{1000}\frac{z}{L}F(y)>\frac7{1000}C.$$
If $|P_0|\ge|P|/2$, use Case 1 below. Otherwise, some $j\ge1$ has $|P_j|\ge|P|/(2J)$; use Case 2. [F2, F3, given, construct]

3.1 In Case 1, write $q=|P_0|$ and take $K=\lfloor qF(y)/8\rfloor$, $h=K+1$. The preceding lower bound gives $qF(y)>350000$, so $K\ge2$; also $K\le q/8$. The first bound in [F5] gives
$$\sum_{\substack{n\le x/y\\n\in N_0(K)}}|f(n)|^2
\le\frac{4K}{q}S\le\frac12F(y)S.$$
Thus the complementary sum is at least $F(y)S/2$. We have $q\ge16$, so $h=K+1\le q$. Every integer in that complement is divisible by $p^2$ for some $K+1$ distinct primes of $P_0$. Let $d$ be their product and $Y=y(y/529)^h$. Since every such prime exceeds $z/23$, $yd^2\ge Y>y+1$. By [F4], summing over the $\binom qh$ possible square-free $d$ bounds the complementary sum by
$$\binom qh\,12^h F(Y)S.$$
Indeed, $\tau_3(d)=3^h$, and for $p\in P_0$,
$2+|f(p^2)|^2\le2+(|f(p)|^2+1)^2\le57/16<4$, so the second divisibility bound contributes at most $12^hF(yd^2)S\le12^hF(Y)S$. [F1, F4, F5, step 2.1, cases]

3.2 The elementary estimate $\binom qh\le(eq/h)^h$ follows from
$h!\ge(h/e)^h$, obtained by summing $\log k$ and comparing with
$\int_1^h\log t\,dt$. Since $h>qF(y)/8$ and $e<3$ by [F6],
$\binom qh12^h<(288/F(y))^h$. Moreover $F(Y)\le C(1+\log Y)/\sqrt Y$ by the choice of $y$ in step 1.2, and
$$\frac{F(Y)}{F(y)}\le(h+1)(23/z)^h.$$
This follows from $\log Y\le(h+1)L$ and $F(y)>C(1+L)/z$. Therefore the complementary sum divided by $F(y)S$ is less than
$$ (h+1)\left(\frac{6624}{F(y)z}\right)^h
<(h+1)(7\cdot10^{-5})^h<\frac12,$$
contradicting its lower bound. The last inequality holds for every integer $h\ge1$, since the expression decreases with $h$ and its value at $h=1$ is below $1/2$. [F4, F6, step 1.2, step 3.1, algebra]

4.1 In Case 2, put $q=|P_j|$ and take
$$K=\left\lfloor2^{2j-9}q\sqrt{F(y)}\right\rfloor,\qquad h=K+1.$$
We first verify the range required in [F5]. Write $L=\log y$. Since $y>10^{16}$ and step 1.1 gives $e<3$, we have $e^2<9<10$, hence $\log10>2$ and $L>32$. If $32<L\le48$, then $J\le12$, $z>10^8$, and
$$q\sqrt{F(y)}
\ge\frac{35}{JL}\sqrt{z(1+L)}
>\frac{35}{12\cdot48}\,57000>1280.$$
If $L\ge48$, then $J\le L/4$ and
$$q\sqrt{F(y)}
\ge\frac{140}{L^2}e^{L/4}\sqrt{1+L}
\ge\frac{140\cdot2^{12}\cdot7}{48^2}>1280.$$
Here $e^{L/4}\sqrt{1+L}/L^2$ is increasing for $L\ge48$, as its logarithmic derivative is $1/4+1/(2(1+L))-2/L>0$. Since $2^{2j-9}\ge2^{-7}$, these bounds imply $K\ge10$. Also $2^{j-2}<|f(p)|\le2F(y)^{-1/4}$ for $p\in P_j$, so $2^{2j-9}\sqrt{F(y)}<1/8$ and $K\le q/8$. Since $K\ge10$, this implies $q\ge80$, $h\le q$, and $K\le q/4-1$. The second bound in [F5] now gives
$$\sum_{\substack{n\le x/y\\n\in N_j(K)}}|f(n)|^2
\le\frac{2^{12}K^2}{2^{4j}q^2}S
\le\frac1{64}F(y)S<\frac12F(y)S.$$
Thus the complementary sum is at least $F(y)S/2$. [F2, F3, F5, F6, step 1.2, step 2.1, algebra]

4.2 Each integer in the complement is divisible by a product $d$ of $h=K+1$ distinct primes from $P_j$. Put $Y=y(z/23)^h>y+1$. The first inequality in [F4], summed over the $\binom qh$ possibilities, bounds the complementary sum by
$$\binom qh\,2^{2jh}F(Y)S,$$
because $\tau(d)=2^h$ and $1+|f(p)|^2\le2^{2j-1}$ on $P_j$. Since
$h>2^{2j-9}q\sqrt{F(y)}$ and $e<3$,
$$\binom qh\,2^{2jh}<\left(\frac{1536}{\sqrt{F(y)}}\right)^h.$$
The maximality choice in step 1.2 gives
$$\frac{F(Y)}{F(y)}\le\left(\frac h2+2\right)(23/z)^{h/2}.$$
Consequently the complementary sum divided by $F(y)S$ is less than
$$\left(\frac h2+2\right)
\left(1536\sqrt{\frac{23}{F(y)z}}\right)^h
<\left(\frac h2+2\right)(3/4)^h<\frac12,$$
since $F(y)z>C(1+L)>10^8$ and $h\ge11$. Indeed,
$1536^2\cdot23=54{,}263{,}808<56{,}250{,}000=(3/4)^2\cdot10^8$,
and $(h/2+2)(3/4)^h$ decreases for integer $h\ge11$ and has value
$7.5(3/4)^{11}<1/2$ at $h=11$. This contradicts the lower bound in step 4.1. [F4, F6, step 1.2, step 4.1, algebra]

5.1 Both alternatives for the prime partition lead to contradictions. Hence no $y$ can violate the claimed inequality, proving the theorem for every $1\le y\le x$. [step 3.2, step 4.2, algebra] ∎

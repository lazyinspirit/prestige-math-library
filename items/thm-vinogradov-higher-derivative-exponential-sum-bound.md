---
id: thm-vinogradov-higher-derivative-exponential-sum-bound
kind: theorem
title: "Vinogradov's higher-derivative exponential-sum bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - thm-vinogradov-rational-derivative-sum-estimate
  - thm-dirichlet-rational-approximation-with-denominator-range
  - lem-taylor-lagrange-remainder-from-mean-value
  - def-exponential-character-e
  - def-natural-logarithm
  - def-complex-exponential
  - thm-logarithm-derivative-and-integral
  - thm-chain-rule-for-total-derivatives
  - lem-derivative-of-a-power
  - def-factorial-and-falling-factorial
  - lem-integer-part
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24, Theorem 24.13"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 62–64, complete proof of Theorem 24.13."
    - title: "N. Assing, The Circle Method and Waring's Problem (2022 lecture notes)"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "Exercise Block 4(a), printed pp. 103–104, denominator-range form of Dirichlet approximation used in the proof."
---

## Statement

There is an absolute constant $C>0$ such that for every real $t$, every integer $r\ge1$, every integer $N\ge2$ with $t>N^{1/9}$ and $N^{r-1}<t\le N^r$, every integer $N<N'\le2N$, and every $\alpha\in[0,1]$,
$$\sum_{N<n\le N'}(n+\alpha)^{it}\ll N^{1-C/r^2},\qquad (n+\alpha)^{it}:=\exp(it\log(n+\alpha)).$$

## Statement references

[Montgomery–Vaughan, Theorem 24.13 and complete proof](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

[Assing, Exercise Block 4(a)](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

[[def-factorial-and-falling-factorial]]

[[lem-integer-part]]

## Facts & Assumptions

**Given:** $t,N,N',r,\alpha$ in the statement.

[F1] The rational-derivative estimate gives a power saving when many derivative denominators exceed prescribed powers of $Q$ ([[thm-vinogradov-rational-derivative-sum-estimate]]).

[F2] For each real $\theta$ and integer $Q\ge1$, there are coprime integers $a,q$ with $1\le q\le Q$ and $|\theta-a/q|\le1/(qQ)$ ([[thm-dirichlet-rational-approximation-with-denominator-range]]).

[F3] Taylor's theorem with Lagrange remainder applies to $C^{k+1}$ functions ([[lem-taylor-lagrange-remainder-from-mean-value]]).

[F4] $e(x)=\exp(2\pi ix)$, so $e(f(n))=(n+\alpha)^{it}$ when $f(x)=t\log(x+\alpha)/(2\pi)$ ([[def-exponential-character-e]]).

[F5] $d(\log x)/dx=1/x$ for $x>0$, the chain rule holds, and derivatives of integer powers obey the power rule ([[thm-logarithm-derivative-and-integral]], [[thm-chain-rule-for-total-derivatives]], [[lem-derivative-of-a-power]]).

[F6] The floor is the greatest integer at most its argument; the ceiling is the least integer at least its argument, with $x\le\lceil x\rceil<x+1$ and $\lceil x\rceil=-\lfloor-x\rfloor$ ([[lem-integer-part]]).

[F7] For a natural $j$, $j!=1\cdot2\cdots j$ ([[def-factorial-and-falling-factorial]]).

## Proof

**Proof technique:** apply the rational-derivative estimate to the logarithmic phase.

1.1 Fix an absolute threshold $N_0$ large enough that $Q=N^{0.49}\ge3$ and the interval estimates below hold whenever $N\ge N_0$; the range $2\le N<N_0$ is treated at the end. Assume $N\ge N_0$. Put $f(x)=\frac{t}{2\pi}\log(x+\alpha)$. Repeated differentiation using [F5] gives, for $j\ge1$, $$\frac{f^{(j)}(x)}{j!}=(-1)^{j-1}\frac{t}{2\pi j(x+\alpha)^j}.$$ The hypotheses imply $t>N^{r/9}$: for $r=1$ this is given, and for $r\ge2$ it follows from $t>N^{r-1}\ge N^{r/9}$. At the approximation integers $n\in[N+Q^2,2N+2Q^2]$, one has $N\le n+\alpha\le4N$. On the full differentiability interval, the separate variable $u$ instead satisfies $u+\alpha\ge N/4$ when $Q\le N^{1/2}/2$. Consequently, for sufficiently large absolute $N$, the respective bounds are $$\frac{t}{2\pi j(4N)^j}\le\left|\frac{f^{(j)}(n)}{j!}\right|\le\frac{t}{2\pi jN^j},\qquad \frac{|f^{(k+1)}(u)|}{(k+1)!}\le C4^{k+1}N^{r-k-1}.$$ [F1, F4, F5, F7, algebra]

2.1 Set $\delta=1/100$, $k=100r$, $Q=N^{1/2-\delta}$ and $R=N^\delta$. Let $\mathcal J=\{j\in\mathbb Z: \lceil1.03r\rceil\le j\le3r\}$. For $j\in\mathcal J$, the upper derivative bound and $j>r$ give $|f^{(j)}(n)/j!|<1$ once $N\ge N_0$. For each such $j$ and each required $n$, apply [F2] with the integer cutoff $Q_j=\lceil2/|f^{(j)}(n)/j!|\rceil$, which is a positive integer by [F6]. The resulting reduced fraction satisfies $$q_j\ge\frac{1}{2|f^{(j)}(n)/j!|}\gg N^{j-r},\qquad q_j\le Q_j\ll (16\pi N)^jN^{-r/9},\qquad \left|\frac{f^{(j)}(n)}{j!}-\frac{a_j}{q_j}\right|\le q_j^{-2}.$$ The lower bound follows because a zero numerator would contradict the approximation error and the choice of $Q_j$: since $|f^{(j)}(n)/j!|<1$, the error $1/(q_jQ_j)$ is at most $1/Q_j\le |f^{(j)}(n)/j!|/2$; thus $|a_j|\ge1$, and $1\le q_j|f^{(j)}(n)/j!|+1/Q_j$ implies $q_j\ge1/(2|f^{(j)}(n)/j!|)$. The upper bound follows from $q_j\le Q_j$ and the lower estimate for $t$. For $j\notin\mathcal J$, take $q_j=1$ and set $a_j=\lfloor f^{(j)}(n)/j!+1/2\rfloor$; [F6] gives an integer with approximation error at most $1/2$. [given, F2, F6, F7, step 1.1, algebra]

3.1 For $j\in\mathcal J$, set $R_j=N^{j/100}$; for $j\notin\mathcal J$, set $R_j=1$. For selected $j$, the lower bound in step 2.1 gives $q_j\ge R_j$ and the upper bound gives $q_j\le Q^{2j}R_j^{-1}$ once $N\ge N_0$: the exponent margins are $0.99j-r\ge0.0197r$ and $r/9-0.03j\ge r/90$, respectively, which absorb the fixed factors $2$ and $(16\pi)^j$. For unselected $j$, $q_j=1$ satisfies both bounds. Every $R_j\le Q^j$, and selected indices have $R_j\ge Q^{\delta j}$. There are at least $r=\delta k$ selected indices since $|\mathcal J|=3r-\lceil1.03r\rceil+1\ge1.97r$. The derivative remainder from step 1.1 is at most $C4^{k+1}N^{r-k-1}$. Dividing by $(2Q)^{-2k-2}R^{-1}$ gives at most $C16^{k+1}N^{-r-1/100}$, which is at most $1$ for $N\ge N_0$ after choosing an absolute $N_0$. Thus [F1] applies. [step 1.1, step 2.1, F1, algebra]

4.1 Apply [F1] with these choices. Since $Q=N^{0.49}$, $R=N^{0.01}$, and $k=100r$, its bound is $$\ll N^{1-0.49\lambda/(10^4r^2)}+N^{0.995}.$$ Choose $0<C\le\min(0.49\lambda/10^4,0.005)$ to obtain $\ll N^{1-C/r^2}$. For $2\le N<N_0$, the trivial bound $|\sum|\le N$ is absorbed into the implied constant after reducing $C$ if necessary. Finally [F4] identifies the sum with the one in the statement. [step 3.1, F1, F4, algebra] ∎


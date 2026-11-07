---
id: lem-w-tricked-prime-weight-mean
kind: lemma
title: "Mean of the prime-supported W-tricked weight"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - thm-siegel-walfisz-prime-distribution
  - def-prime-progression-discrepancy
  - def-w-tricked-von-mangoldt-function
  - def-unit-group-modulo-n-and-euler-totient
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§9, proof of Theorem 1.1, printed pp. 523–524; prime-weight mean from the Siegel–Walfisz estimate"
    - title: "David Conlon, Jacob Fox, and Yufei Zhao, The Green–Tao theorem: an exposition"
      url: "https://arxiv.org/pdf/1403.2957"
      locator: "§8, proof of Theorem 1.1, printed p. 22; prime-weight normalization"
---
## Statement

Let $\mathbb P$ be the set of integers $m>1$ whose only positive divisors are $1$ and $m$. Here $\log$ denotes the natural logarithm. For sufficiently large primes $N$, put

$$w(N)=\max\left(2,\left\lfloor\sqrt{\log\log\log N}\right\rfloor\right),\qquad W(N)=\prod_{\substack{q\le w(N)\\q\in\mathbb P}}q,$$

and, for a fixed real $0<\epsilon<1/2$, let $I_N=[\epsilon N,2\epsilon N]\cap\mathbb Z$. For every positive integer $m$, define

$$\varphi(m)=\left|\left\{r\in\{0,1,\ldots,m-1\}:\text{there is }s\in\{0,1,\ldots,m-1\}\text{ with }rs\equiv1\pmod m\right\}\right|.$$

For a condition $E$, let $\mathbf1_E$ equal $1$ when $E$ holds and $0$ otherwise. For every integer $n$ with $Wn+1>1$, define

$$\widetilde\Lambda_W(n)=\frac{\varphi(W)}{W}\log(Wn+1)\,\mathbf1_{\{Wn+1\in\mathbb P\}}.$$

For a positive integer $m$, define $\Lambda(m)=\log q$ if $m=q^a$ for some $q\in\mathbb P$ and integer $a\ge1$, and define $\Lambda(m)=0$ otherwise. Assume that for every fixed $A,B>0$ there is $C_{A,B}>0$ such that for all real $x\ge3$, all integers $1\le q\le(\log x)^A$, and all $a$ coprime to $q$,

$$\left|\sum_{\substack{m\ge1\\m\le x\\m\equiv a\pmod q}}\Lambda(m)-\frac{x}{\varphi(q)}\right|\le C_{A,B}x(\log x)^{-B}.$$

Then, as $N\to\infty$ through primes,

$$\frac1N\sum_{n\in I_N}\widetilde\Lambda_W(n)=\epsilon+o(1).$$

## Statement references

[Green and Tao, §9, proof of Theorem 1.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Conlon, Fox, and Zhao, §8](https://arxiv.org/pdf/1403.2957)

## Facts & Assumptions

**Given:** The fixed $\epsilon$, primes $N\to\infty$, the displayed weight and full von Mangoldt function, and the displayed uniform discrepancy estimate.

[F1] [[thm-siegel-walfisz-prime-distribution]]: Under its stated choice-axiom hypotheses, for each fixed $A,B>0$ the full-weighted discrepancy $|E_\psi(x;q,a)|$ is at most $C_{A,B}x(\log x)^{-B}$ for $q\le(\log x)^A$ and reduced $a\pmod q$. The supplier now has a complete independently reviewed local proof at its original AC/CC/DC scope; this lemma still uses the displayed estimate as an explicit hypothesis, and its implication from that hypothesis is choice-free.

[F2] [[def-prime-progression-discrepancy]]: $E_\psi(x;q,a)=\psi(x;q,a)-x/\varphi(q)$, where $\psi$ sums the full von Mangoldt weight over positive integers $m\le x$ in the residue class; prime powers carry their full weight.

[F3] [[def-w-tricked-von-mangoldt-function]]: For $b=1$, $\widetilde\Lambda_W(n)=\frac{\varphi(W)}W\log(Wn+1)$ when $Wn+1$ is prime, and it is zero otherwise.

[F4] [[def-unit-group-modulo-n-and-euler-totient]]: $\varphi(W)$ is the cardinality of the unit classes modulo $W$, so $0<\varphi(W)\le W$ for $W\ge1$.

[F5] [[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]]: $\log$ is the natural logarithm and $\log'(x)=1/x$ for $x>0$; consequently $\log T=\int_1^T ds/s$ for $T\ge1$.

[F6] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing and satisfies $\log(xy)=\log x+\log y$ for positive $x,y$.

## Proof

1.1 Set $T=\log\log\log N$. For all sufficiently large $N$, $w(N)\le\sqrt T$ and $\log w(N)\le\log T$. By [F5], $\log T\le4T^{1/4}$ for $T\ge1$, since $s^{-1}\le s^{-3/4}$ on $[1,T]$. Hence $w\log w\le4T^{3/4}=o(T)$. The product defining $W$ has at most $w$ factors, each at most $w$, so $\log W\le w\log w=o(T)$ and $W=(\log\log N)^{o(1)}=o(\log N)$. Put $n_0=\lceil\epsilon N\rceil$, $n_1=\lfloor2\epsilon N\rfloor$, $x_0=Wn_0$, and $x_1=Wn_1+1$. Then $x_0,x_1\asymp WN$ and $\log x_i\sim\log N$. In particular $W\le\log x_i$, so [F1] applies at modulus $q=W$ and reduced class $a=1$ with fixed exponents $A=1$ and $B=4$. [given, F1, F5, algebra]

1.2 By [F2], subtracting the estimates for $\psi(x_1;W,1)$ and $\psi(x_0;W,1)$ gives exactly $S_N=\sum_{n=n_0}^{n_1}\Lambda(Wn+1)$. The main terms differ by
$$\frac{x_1-x_0}{\varphi(W)}=\frac{W(n_1-n_0)+1}{\varphi(W)}=\frac{W\epsilon N}{\varphi(W)}+O\!\left(\frac W{\varphi(W)}\right).$$
The two discrepancy errors are $O(WN(\log N)^{-4})$, because $x_i\asymp WN$ and $\log x_i\sim\log N$. Therefore
$$S_N=\frac{W\epsilon N}{\varphi(W)}+O\!\left(\frac W{\varphi(W)}+\frac{WN}{(\log N)^4}\right).$$
[given, F1, F2, F4, step 1.1, algebra]

2.1 Let $Q_N$ be the part of $S_N$ from prime powers of exponent at least $2$. Every such power below $x_1=O(WN)$ has base at most $\sqrt{x_1}$ and exponent at most $\log x_1/\log2$ by [F6]; each term has weight at most $\log x_1$. Counting bases by all integers gives $0\le Q_N=O(\sqrt{WN}(\log N)^2)$. The remaining terms are exactly the primes in the definition of $\widetilde\Lambda_W$. Thus
$$\frac1N\sum_{n\in I_N}\widetilde\Lambda_W(n)=\frac{\varphi(W)}{WN}(S_N-Q_N).$$
Using [F3], [F4], and step 1.2, the main term is $\epsilon$, the discrepancy error contributes $O(W(\log N)^{-4}+N^{-1})=o(1)$, and the prime-power error is at most $O(\sqrt{W/N}(\log N)^2)=o(1)$ because $W\le\log N$. This proves the claimed asymptotic. [given, F3, F4, F6, step 1.2, algebra] ∎
## Proof status

The implication from the displayed uniform discrepancy estimate to the prime-weight mean is proved locally. The estimate now has a complete independently reviewed local proof under the supplier’s original AC/CC/DC assumptions, using its actual accepted zero-free/Siegel/explicit-formula inputs. The implication here remains choice-free given the displayed estimate; those supplier axioms cannot silently be dropped from a use that discharges that hypothesis.

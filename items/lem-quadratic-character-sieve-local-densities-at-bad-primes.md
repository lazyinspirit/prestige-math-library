---
id: lem-quadratic-character-sieve-local-densities-at-bad-primes
kind: lemma
title: "Correct sieve local densities for a quadratic character with bad primes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-dirichlet-character-modulo-q]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits"
      url: "https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf"
      locator: "Section 5, proof of Theorem 5.1, equations (5.8)–(5.9); this local lemma corrects the bad-prime density and indicator sign."
---

## Statement

Let $M\ge1$, let $\mathcal Q$ be its finite set of prime divisors, and put $m=\prod_{p\in\mathcal Q}p$. Let $q\mid M$ and let $\chi$ be a Dirichlet character modulo $q$ taking values in $\{-1,0,1\}$. Let $N\ge1$ be an integer. Put
\[
\mathcal A=\{1\le n\le N:(n,M)=1,\ \chi(n)=-1\},\quad
X=\frac N2\prod_{p\mid M}(1-p^{-1}),\quad
w(p)=\begin{cases}0&p\mid M,\\1&p\nmid M.\end{cases}
\]
Extend $w$ multiplicatively on squarefree integers, with $w(1)=1$, and let $A_d=\#\{n\in\mathcal A:d\mid n\}$. For squarefree $d$, write $A_d=Xw(d)/d+R_d$. If $(d,M)>1$, then $R_d=0$. If $(d,M)=1$, write $\epsilon(e)=(-1)^{\#\{p:p\mid e\}}$ for $e\mid m$ and $C(L)=\sum_{j=1}^L\chi(j)$, including $C(0)=0$. Then exactly
\[
R_d=\frac12\sum_{e\mid m}\epsilon(e)\left(\left\lfloor\frac N{de}\right\rfloor-\frac N{de}-\chi(de)C\!\left(\left\lfloor\frac N{de}\right\rfloor\right)\right).
\]
In particular, if $|C(L)|\le B(L)$ for integers $L\ge0$, with $B(L)\ge0$, then
\[
|R_d|\le\frac12\sum_{e\mid m}\left(1+|\chi(de)|B\!\left(\left\lfloor\frac N{de}\right\rfloor\right)\right).
\]
These formulas retain primes dividing $M$ as zero-density sieve primes; equivalently one can sieve only by the other primes.

## Statement references

[Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits, §5, (5.8)–(5.9). The local proof corrects the local-density choice in that argument.](https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf)

## Facts & Assumptions

**Given:** The finite prime divisor set, character, integer parameters and sums in the Statement. No character-sum estimate is asserted here.

[F1] [[def-dirichlet-character-modulo-q]]: a Dirichlet character is a homomorphism on the units modulo its modulus, extended by zero on nonunits.

## Proof

**Proof technique:** direct.

1.1 For every integer $n$, finite expansion gives $1_{(n,M)=1}=\prod_{p\mid M}(1-1_{p\mid n})=\sum_{e\mid m}\epsilon(e)1_{e\mid n}$. If $(n,M)=1$, then $(n,q)=1$, so $\chi(n)=\pm1$ and $1_{\chi(n)=-1}=(1-\chi(n))/2$. Hence the indicator of $\mathcal A$ on $1\le n\le N$ is exactly $\tfrac12 1_{(n,M)=1}(1-\chi(n))$. The indicator uses a minus sign. [given, F1, algebra]

1.2 If $(d,M)>1$, no multiple of $d$ belongs to $\mathcal A$, so $A_d=0$. Since $d$ has a prime factor dividing $M$, $w(d)=0$ and consequently $R_d=0$. [given, step 1.1, algebra]

1.3 Suppose $(d,M)=1$. Set $n=dj$ in the count. Since $(d,q)=1$, multiplicativity gives $\chi(dj)=\chi(d)\chi(j)$, including nonunits $j$ where both sides are zero. Expanding the coprimality indicator in step 1.1 and then setting $j=ek$ yields
\[
A_d=\frac12\sum_{e\mid m}\epsilon(e)\left(\left\lfloor\frac N{de}\right\rfloor-\chi(de)\sum_{k=1}^{\lfloor N/(de)\rfloor}\chi(k)\right).
\]
Multiplicativity at all integers follows directly from [F1]: products of units multiply as homomorphisms, and if one factor is a nonunit then both its product and its character value are zero. All sums are finite. [step 1.1, F1, construct, algebra]

1.4 The finite product expansion also gives $\sum_{e\mid m}\epsilon(e)/e=\prod_{p\mid M}(1-1/p)$. Subtracting $X/d$ from step 1.3 therefore proves the exact expression for $R_d$. Apply the triangle inequality, $|\lfloor t\rfloor-t|<1$, and the assumed bounds for $C$ to obtain its upper bound. Empty prime products, $M=1$, and zero-length inner sums obey the same identities. [given, step 1.3, algebra] ∎

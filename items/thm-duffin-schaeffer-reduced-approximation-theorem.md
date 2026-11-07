---
dependency_level: 6
id: thm-duffin-schaeffer-reduced-approximation-theorem
kind: theorem
title: Duffin–Schaeffer theorem for reduced rational approximations
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-countable-choice
- thm-lebesgue-measure-is-a-complete-measure
- thm-lebesgue-measure-of-a-box-of-every-kind
- thm-finite-and-countable-subadditivity-of-measures
- def-probability-measure
- def-reduced-rational-approximation-limsup-set
- def-unit-group-modulo-n-and-euler-totient
- thm-unit-criterion-modulo-n
- thm-standard-representatives-modulo-n
- cor-first-borel-cantelli-lemma-for-events
- lem-reduced-approximation-zero-one-law
- lem-duffin-schaeffer-large-gauge-divergence
- lem-duffin-schaeffer-reduced-event-overlap
- lem-good-gcd-subgraph-and-weighted-edge-bound
- def-finite-weighted-gcd-graph
- lem-reciprocal-prime-sum-from-mertens-first-theorem
- thm-cauchy-schwarz-and-the-euclidean-norm
- thm-continuity-from-above-for-measures
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
  - title: Dimitris Koukoulopoulos and James Maynard, On the Duffin–Schaeffer conjecture,
      Theorem 1
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf
  - title: 'Victor Beresnevich, Felipe Ramírez, and Sanju Velani, Metric Diophantine
      Approximation: Aspects of Recent Work, §2.2'
    url: https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf
---

## Statement

Assume the Axiom of Countable Choice. Let $\psi:\mathbb N\to[0,\infty)$ be arbitrary, and let $A(\psi)$ be the reduced rational-approximation limsup set. The Duffin–Schaeffer theorem states that

$$\lambda(A(\psi))=\begin{cases}0,&\sum_{q=1}^{\infty}\dfrac{\varphi(q)\psi(q)}q<\infty,\\1,&\sum_{q=1}^{\infty}\dfrac{\varphi(q)\psi(q)}q=\infty.\end{cases}$$

## Statement references

[[def-reduced-rational-approximation-limsup-set|Reduced rational-approximation limsup set]]

[[def-countable-choice|Axiom of Countable Choice]]

[[thm-lebesgue-measure-is-a-complete-measure|Lebesgue measure under countable choice]]

[[def-probability-measure|Probability measure on the unit interval]]

[Koukoulopoulos and Maynard, *On the Duffin–Schaeffer conjecture*, Theorem 1](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

[Beresnevich, Ramírez, and Velani, *Metric Diophantine Approximation: Aspects of Recent Work*, §2.2](https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf)

## Facts & Assumptions

**Given:** Countable Choice and the arbitrary function $\psi$ in the Statement. We prove both alternatives.

[A1] The Axiom of Countable Choice is assumed for the existence of Lebesgue measure as a complete countably additive measure. ([[def-countable-choice]], [[thm-lebesgue-measure-is-a-complete-measure]])

[F1] $A(\psi)=\limsup_q A_q(\psi)$, where $A_q(\psi)$ is the union of intervals of radius $\psi(q)/q$ about the reduced fractions $a/q$ with $1\le a\le q$. ([[def-reduced-rational-approximation-limsup-set]])

[F2] For $q\ge1$, the unit classes modulo $q$ correspond exactly to the residue classes represented by $a$ with $1\le a\le q$ and $\gcd(a,q)=1$. ([[thm-unit-criterion-modulo-n]], [[thm-standard-representatives-modulo-n]])

[F3] If measurable sets $E_q$ satisfy $\sum_q\lambda(E_q)<\infty$, then $\lambda(\limsup_q E_q)=0$. ([[cor-first-borel-cantelli-lemma-for-events]])

[F4] Under the assumed axiom, every closed interval is Lebesgue measurable and has measure equal to its length. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F5] For finitely many measurable sets, the measure of their union is at most the sum of their measures. ([[thm-finite-and-countable-subadditivity-of-measures]])

[F6] Restricting $\lambda$ to Lebesgue measurable subsets of $[0,1]$ gives a probability measure because $\lambda([0,1])=1$. ([[def-probability-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])


[F7] The full local zero–one law holds for arbitrary finite-valued gauges ([[lem-reduced-approximation-zero-one-law]]).

[F8] Gauges supported on values at least $1/2$ satisfy the divergence conclusion ([[lem-duffin-schaeffer-large-gauge-divergence]]).

[F9] The local reduced-event overlap estimate uses the necessary condition $2M\ge\gcd(q,r)$, and the product over primes $p\mid qr/\gcd(q,r)^2$ with $p>M/\gcd(q,r)$ ([[lem-duffin-schaeffer-reduced-event-overlap]]).

[F10] If $\mu(v)=\eta(v)\varphi(v)/v$, $\mu(V)\le2$, and the finite graph edges satisfy $M(v,w)\le t\gcd(v,w)$ and $L_t(v,w)\ge10$, then their product-weight mass is $O(1/t)$ ([[lem-good-gcd-subgraph-and-weighted-edge-bound]], [[def-finite-weighted-gcd-graph]]).

[F11] Reciprocal primes satisfy $\sum_{p\le u}1/p=\log\log u+O(1)$ ([[lem-reciprocal-prime-sum-from-mertens-first-theorem]]).

[F12] Finite Cauchy–Schwarz and continuity from above for finite measures hold ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[thm-continuity-from-above-for-measures]]).

## Proof

1.1 Suppose first that $\sum_q\varphi(q)\psi(q)/q<\infty$. By [F2], there are $\varphi(q)$ reduced numerators in the defining union for $A_q(\psi)$. Each interval after intersection with $[0,1]$ is empty or a closed interval of length at most $2\psi(q)/q$, hence is measurable with at most that measure by [F4] under [A1]. Finite subadditivity [F5] gives $\lambda(A_q(\psi))\le2\varphi(q)\psi(q)/q$. [given, A1, F1, F2, F4, F5, algebra]

2.1 The assumed series is finite, so step 1.1 makes $\sum_{q=1}^{\infty}\lambda(A_q(\psi))$ finite. Reindexing by $q=k+1$, [F6] makes the events a probability-space sequence and [F3] yields $\lambda(A(\psi))=0$. [given, A1, F1, F3, F4, F6, step 1.1]


3.1 Now suppose $\sum_q\varphi(q)\psi(q)/q=\infty$. Split $\psi=\psi_1+\eta$, where $\psi_1(q)=\psi(q)$ if $\psi(q)>1/2$ and is zero otherwise. If the weighted series for $\psi_1$ diverges, [F8] gives the conclusion by inclusion. Otherwise the weighted series for $\eta$ diverges; it suffices to prove full measure for $\eta$, since $\eta\le\psi$ and $0\le\eta(q)\le1/2$. Write $w_q=\eta(q)\varphi(q)/q$ and $E_q=A_q(\eta)$. We may discard $q=1$. For $q\ge2$ the same-denominator intervals have disjoint interiors and do not wrap, so $\lambda(E_q)=2w_q$. [given, A1, F1, F2, F4, F8, construct, algebra]

3.2 For every integer $X\ge2$, choose $Y\ge X$ minimal with $1\le\sum_{X\le q\le Y}w_q\le2$. This exists by divergence and $w_q\le1/2$. Put $V=\{q\in[X,Y]\cap\mathbb N:w_q>0\}$ and $M(q,r)=\max(r\eta(q),q\eta(r))$. In [F10] use this $V$ and $\mu(q)=w_q$. Then $1\le\mu(V)\le2$. For each $t\ge1$, the set
$$ \mathcal E_t:=\{(q,r)\in V^2:M(q,r)\le t\gcd(q,r),\ L_t(q,r)\ge10\} $$
has $\sum_{(q,r)\in\mathcal E_t}w_qw_r\ll1/t$. [F10, step 3.1, construct, algebra]

4.1 By [F9], the off-diagonal second moment is bounded by an absolute constant times $\sum_{q\ne r}w_qw_r P(q,r)$, with the sum restricted to $D:=M(q,r)/\gcd(q,r)\ge1/2$ and
$$ P(q,r):=\prod_{\substack{p\mid qr/\gcd(q,r)^2\\p>D}}(1+1/p). $$
Pairs with $P<e^{100}$ contribute $O((\sum w_q)^2)=O(1)$. For every other pair, the total reciprocal sum over prime factors of $qr/\gcd(q,r)^2$ is at least $100$, since $\log(1+1/p)\le1/p$. Therefore $L_e(q,r)\ge99$, because only the prime $2<e$ has been removed. There is a largest integer $j\ge0$ with $L_{t_j}(q,r)\ge10$, where $t_j=\exp(\exp j)$: the prime-factor set is finite, so its far tail vanishes. [F9, F11, step 3.2, algebra]

4.2 Maximality of $j$ and [F11] give $L_{t_j}(q,r)\le\sum_{t_j\le p<t_{j+1}}1/p+10\ll1$, uniformly in $j$. If $D\ge t_j$, this implies $P(q,r)\ll1$. If $D<t_j$, it implies
$$ P(q,r)\ll\prod_{p\le t_j}(1+1/p)\ll\log t_j=e^j. $$
The latter pair belongs to $\mathcal E_{t_j}$ from step 3.2, because $D<t_j$ and $L_{t_j}\ge10$. Thus all off-diagonal contributions are bounded by
$$ \ll1+\sum_{j\ge0}e^j\sum_{(q,r)\in\mathcal E_{t_j}}w_qw_r\ll1+\sum_{j\ge0}\frac{e^j}{\exp(\exp j)}\ll1. $$
The final series converges, for example its terms are at most $e^{-j}$ for all sufficiently large $j$. The diagonal contribution $\sum_q\lambda(E_q)=2\sum_qw_q\le4$ is bounded too. [F10, F11, step 3.2, step 4.1, algebra]

5.1 Put $Q=\sum_{X\le q\le Y}\mathbf1_{E_q}$ and $U=\bigcup_{X\le q\le Y}E_q$. Then $\int Q=2\sum w_q\ge2$ and $\int Q^2\ll1$ by steps 4.1–4.2. Partition $U$ into the finitely many membership-pattern atoms and apply finite Cauchy–Schwarz to their measures and the constant values of $Q$; this gives $(\int Q)^2\le\lambda(U)\int Q^2$, hence $\lambda(U)\ge c>0$ uniformly in $X$. Every tail union therefore has measure at least $c$. By [F12] and finite unit-interval measure, its decreasing intersection $A(\eta)$ has positive measure. [F7] forces $\lambda(A(\eta))=1$, and $A(\eta)\subseteq A(\psi)\subseteq[0,1]$ gives the stated full-measure conclusion. This closes the divergent branch; steps 1.1–2.1 close convergence. [A1, F1, F4, F7, F12, step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, step 4.2, algebra] ∎

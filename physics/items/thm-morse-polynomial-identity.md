---
id: thm-morse-polynomial-identity
kind: theorem
title: "Morse polynomial identity"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-morse-numbers-and-morse-polynomial, def-poincare-polynomial-over-a-field, lem-exact-sequence-dimension-inequality, lem-one-handle-changes-relative-homology-in-one-degree, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, thm-long-exact-sequence-of-a-pair-in-singular-homology, def-closed-sublevel-and-level-set-of-a-smooth-function, cor-regular-sublevels-are-diffeomorphic, thm-regular-interval-diffeomorphism, def-relative-singular-homology, def-polynomial-evaluation-and-root, def-field, def-compact-space, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: filtration-telescoping
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.), Chapter 2 Section 2.3, printed pp. 46-53 (PDF pp. 56-63)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Chapter 12 Section 5, printed pp. 489-493 (PDF pp. 501-505)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
    - title: "Alexander Ritter, Morse Homology (Cambridge Part III lecture notes), Lecture 21, PDF pp. 96-101"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
dependency_level: 1
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed smooth $n$-manifold
([[def-compact-space]]), let $f:M\to\mathbb R$ be a Morse function and let $F$
be a field ([[def-field]]). Then there is a unique polynomial
$Q(t)=\sum_{k\ge0}q_kt^k\in\mathbb Z[t]$ with $q_k\ge0$ for all $k$ such that
$$M_f(t)=P_{M,F}(t)+(1+t)Q(t).$$
Equivalently, for every $k$
$$\sum_{i=0}^{k}(-1)^{k-i}m_i(f)\ \ge\ \sum_{i=0}^{k}(-1)^{k-i}b_i(M;F),$$
with equality of the total alternating sums; here $M_f$ is the Morse polynomial
([[def-morse-numbers-and-morse-polynomial]]) and $P_{M,F}$ is the Poincare
polynomial over $F$ ([[def-poincare-polynomial-over-a-field]]), which is well
defined because all $b_k(M;F)$ are finite and vanish for $k>n$.

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$, a Morse function $f:M\to\mathbb R$, a field $F$, and the sublevel notation $M^t=f^{-1}((-\infty,t])$ ([[def-closed-sublevel-and-level-set-of-a-smooth-function]]).

[F1] Finite exact vector-space sequences give the rank bookkeeping: if $A_k,C_k$ are finite-dimensional and vanish for $k<0$ and $k>N$, so are the $B_k$ of a long exact sequence $\cdots\to A_k\to B_k\to C_k\to A_{k-1}\to\cdots$, and there is a unique $Q\in\mathbb Z[t]$ with nonnegative coefficients such that $P_A+P_C=P_B+(1+t)Q$, with $q_k=\dim\ker(A_k\to B_k)\ge0$ and $\sum_{i=0}^{k}(-1)^{k-i}(\dim A_i+\dim C_i-\dim B_i)=q_k$ ([[lem-exact-sequence-dimension-inequality]]).

[F2] Let $f$ be smooth on a boundaryless manifold with regular values $a<b$ and $f^{-1}([a,b])$ compact. If every critical point in $f^{-1}([a,b])$ is nondegenerate and all have one common value $c\in(a,b)$, then $\dim_FH_i(M^b,M^a;F)=\#\{p\in f^{-1}([a,b]):\operatorname{ind}(p)=i\}$ ([[lem-one-handle-changes-relative-homology-in-one-degree]], part (b)).

[L1] A Morse function on a compact manifold has only finitely many critical points ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).

[L2] For every $A\subseteq X$ the pair sequence $\cdots\to H_n(A;G)\to H_n(X;G)\to H_n(X,A;G)\xrightarrow{\delta}H_{n-1}(A;G)\to\cdots$ is exact ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[F3] The Morse polynomial is $M_f(t)=\sum_{k=0}^nm_k(f)t^k$ with $m_k(f)=\#\{p\in\operatorname{Crit}(f):\operatorname{ind}(p)=k\}$ ([[def-morse-numbers-and-morse-polynomial]]).

[F4] The Poincare polynomial over $F$ is $P_{X,A}(t)=\sum_k\dim_FH_k(X,A;F)t^k$ whenever the dimensions are finite and vanish for large $k$ ([[def-poincare-polynomial-over-a-field]]).

[F5] Evaluation of a polynomial at a ring element is additive and multiplicative: $(P+Q)(a)=P(a)+Q(a)$ and $(PQ)(a)=P(a)Q(a)$ ([[def-polynomial-evaluation-and-root]]).

## Proof

**Proof technique:** filtration-telescoping.

1.1 If $M=\varnothing$, every chain group and Morse number is zero, so the identity holds with $Q=0$, uniquely by coefficient comparison. Suppose $M\ne\varnothing$. Its minimum and maximum are critical, so by [L1] there are finitely many distinct critical values $c_1<\cdots<c_\nu$ with $\nu\ge1$. Choose $t_0<\min f$, $t_\nu>\max f$, and $c_i<t_i<c_{i+1}$ for $1\le i<\nu$. These are regular values, $M^{t_0}=\varnothing$, and $M^{t_\nu}=M$. [L1, given, construct]

2.1 For each $1\le i\le\nu$ the slab $f^{-1}([t_{i-1},t_i])$ is compact, as a closed subset of the compact $M$, and the critical points it contains are exactly the critical points of value $c_i$; they are nondegenerate and share the value $c_i$, and $t_{i-1}<c_i<t_i$ are regular values. Hence [F2] gives, for every $i$ and $j$, $$\dim_FH_j(M^{t_i},M^{t_{i-1}};F)=m^{(i)}_j:=\#\{p:f(p)=c_i,\ \operatorname{ind}(p)=j\}.$$ [F2, step 1.1]

3.1 Induction on $i$: the graded vector space $H_*(M^{t_i};F)$ is finite-dimensional in every degree and vanishes in degrees below $0$ and above $n$. For $i=0$ this is $H_*(\varnothing;F)=0$. For the step, apply [F1] to the long exact sequence of the pair $(M^{t_i},M^{t_{i-1}})$ from [L2] with $A_k=H_k(M^{t_{i-1}};F)$, $B_k=H_k(M^{t_i};F)$ and $C_k=H_k(M^{t_i},M^{t_{i-1}};F)$: the hypothesis on $A$ is the induction hypothesis, the hypothesis on $C$ is step 2.1 (the sum of the $m^{(i)}_j$ over $j\le n$ is finite and the groups vanish in negative degrees), and [F1] concludes that $B$ is finite-dimensional in each degree. [F1, L2, step 2.1]

4.1 The same application of [F1] gives, for each $i$, the identity $$P_{M^{t_{i-1}}}(t)+P_{M^{t_i},M^{t_{i-1}}}(t)=P_{M^{t_i}}(t)+(1+t)Q_i(t)$$ with $Q_i(t)=\sum_jq^{(i)}_jt^j\in\mathbb Z[t]$, $q^{(i)}_j=\dim_F\ker\bigl(H_j(M^{t_{i-1}};F)\to H_j(M^{t_i};F)\bigr)\ge0$, and $P_{M^{t_i},M^{t_{i-1}}}(t)=\sum_jm^{(i)}_jt^j$ by step 2.1. [F1, step 2.1, step 3.1]

5.1 Summing the identities of step 4.1 over $i=1,\dots,\nu$ telescopes: $\sum_iP_{M^{t_{i-1}}}-\sum_iP_{M^{t_i}}=P_{M^{t_0}}-P_{M^{t_\nu}}=-P_{M,F}$, since $M^{t_0}=\varnothing$ and $M^{t_\nu}=M$. Hence $$\sum_{i=1}^\nu P_{M^{t_i},M^{t_{i-1}}}(t)=P_{M,F}(t)+(1+t)Q(t),\qquad Q:=\sum_{i=1}^\nu Q_i\in\mathbb Z[t],$$ and $Q$ has nonnegative coefficients, being a sum of polynomials with nonnegative coefficients. [F4, step 1.1, step 4.1, algebra]

6.1 The left side equals $M_f(t)$: by step 2.1 and [F4], $\sum_iP_{M^{t_i},M^{t_{i-1}}}(t)=\sum_{i,j}m^{(i)}_jt^j$, and the numbers $m^{(i)}_j$ partition the critical points by critical value and index, so $\sum_im^{(i)}_j=m_j(f)$ and, by [F3], $\sum_jm_j(f)t^j=M_f(t)$. Therefore $M_f(t)=P_{M,F}(t)+(1+t)Q(t)$ with $Q\in\mathbb Z[t]$ of nonnegative coefficients. [F3, F4, step 2.1, step 5.1]

7.1 Uniqueness of $Q$: if $Q,Q'\in\mathbb Z[t]$ satisfy $(1+t)Q=(1+t)Q'$, then $(1+t)(Q-Q')=0$ and, comparing coefficients, $q_0-q'_0=0$ and $(q_k-q'_k)=-(q_{k-1}-q'_{k-1})$ for $k\ge1$, so all coefficients vanish and $Q=Q'$. [step 6.1, algebra]

8.1 The partial-sum form: writing $M_f-P_{M,F}=(1+t)Q=\sum_k(q_k+q_{k-1})t^k$ with $q_{-1}:=0$, the coefficient at $t^k$ is $m_k(f)-b_k(M;F)=q_k+q_{k-1}$. Hence for every $k$ $$\sum_{i=0}^{k}(-1)^{k-i}\bigl(m_i(f)-b_i(M;F)\bigr)=\sum_{i=0}^{k}(-1)^{k-i}(q_i+q_{i-1})=q_k\ge0,$$ by telescoping; in particular the weak and strong inequalities hold coefficientwise. Evaluating at $t=-1$ using [F5] gives $\bigl(M_f-P_{M,F}\bigr)(-1)=0\cdot Q(-1)=0$, which is the equality of the total alternating sums. [F5, step 6.1, algebra] ∎

## Remarks

- **Where compactness enters.** Compactness of $M$ gives finiteness of the critical set [L1]; each slab $f^{-1}([t_{i-1},t_i])$ is then compact, which is exactly the hypothesis of the one-level computation [F2]. No global compactness of a band is assumed beyond this, and the empty manifold satisfies the statement with all polynomials zero.
- **Both coefficientwise and partial-sum forms.** The polynomial identity and the alternating partial-sum inequalities are equivalent: the coefficients of $(1+t)Q$ are $q_k+q_{k-1}\ge0$, and the partial sums recover $q_k$.
- **Choice.** The handle-theoretic input [F2] carries $\mathrm{AC}_\omega$; all remaining steps are finite algebra.

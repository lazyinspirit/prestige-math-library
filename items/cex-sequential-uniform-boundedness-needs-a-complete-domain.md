---
id: cex-sequential-uniform-boundedness-needs-a-complete-domain
kind: counterexample
title: "A complete domain is necessary for sequential uniform boundedness"
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
deps: [def-c-zero-and-ell-infinity, def-normed-subspace, def-bounded-linear-operator, def-operator-norm, def-banach-space, cor-cauchy-reals-lub-complete, thm-of-archimedean, cor-archimedean-reciprocal, def-countable, def-nat-order, lem-nat-trichotomy, thm-induction-principle, thm-subset-of-a-finite-set, rem-real-and-complex-normed-space-convention, lem-complex-conjugation-and-modulus-laws]
justified_by: []
forward_refs: []
external_refs: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Lin and Rodriguez, MIT 18.102 Complete Lecture Notes"
      url: "https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement refuted

Every pointwise bounded sequence of bounded linear operators between normed spaces has uniformly bounded operator norms, even when the domain is not assumed complete.

## Facts & Assumptions

**Given:** $\mathbb K\in\{\mathbb R,\mathbb C\}$ and $\mathbb N=\{0,1,\ldots\}$. We construct the domain and operators below in ZF, without choice.

[F1] $c_0(\mathbb K)$ is the normed space of bounded null sequences with coordinatewise operations and supremum norm ([[def-c-zero-and-ell-infinity]]).

[F2] A linear subspace carries the restriction of the ambient norm ([[def-normed-subspace]]).

[F3] The real field has the least-upper-bound property and is a complete ordered field ([[cor-cauchy-reals-lub-complete]]).

[F4] A finite set admits a bijection from a von Neumann natural $m=\{0,\ldots,m-1\}$ ([[def-countable]]); a subset of a finite set is finite ([[thm-subset-of-a-finite-set]], clause 1).

[F5] The natural order is defined additively and has trichotomy ([[def-nat-order]], [[lem-nat-trichotomy]]).

[F6] The zero base and successor implication prove a property for every natural ([[thm-induction-principle]]).

[F7] Complex norm terminology uses modulus and the same norm metric ([[rem-real-and-complex-normed-space-convention]]); scalar modulus is multiplicative and subadditive ([[lem-complex-conjugation-and-modulus-laws]]).

[F8] A bound $\|Tx\|\le C\|x\|$ makes a linear map bounded ([[def-bounded-linear-operator]]), and its operator norm is the unit-ball supremum ([[def-operator-norm]]).

[F9] The naturals are cofinal in a complete ordered field, and their positive reciprocals get below every positive bound ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

[F10] Banach means that every norm-Cauchy sequence converges in the space ([[def-banach-space]]).

## Counterexample

1.1 Define $c_{00}=\{x\in c_0:\exists M\in\mathbb N\ \forall j\ge M,\ x_j=0\}$. Its zero vector has cutoff $M=0$. If $x,y$ have cutoffs $M,N$ and $a,b\in\mathbb K$, then $ax+by$ vanishes for $j\ge M+N$, since $M+N\ge M,N$. It is therefore a vector subspace of $c_0$, normed by the inherited supremum norm. The same argument is valid over $\mathbb C$, using the modulus convention. [F1, F2, F5, F7, given, algebra]

2.1 This is exactly the finite-support space. If $x$ has cutoff $M$, its support $\{j:x_j\ne0\}$ is a subset of the finite natural $M$, hence finite. Conversely, every finite support $F$ has a bijection $f:m\to F$. We prove the range of every map $f:m\to\mathbb N$ has a natural upper bound by induction on $m$. At $m=0$, use bound $0$. At $m=r+1$, the restriction to $r$ has a bound $L$ by the induction hypothesis; choose the larger of $L$ and $f(r)$ by trichotomy. This bounds the old values and the one new value at $r$, hence the whole range. Induction gives a bound $L$ for $F$, so $x_j=0$ for $j\ge L+1$. A scalar sequence with finite support is bounded as well: successively taking the maximum of $0$ and the finitely many $|x_{f(i)}|$ gives a real bound, and the cutoff makes it null. Thus this converse applies to arbitrary finite-support scalar sequences, not only those already presented in $c_0$. [F1, F4, F5, F6, step 1.1]

2.2 For each $n\ge0$ define $T_n:c_{00}\to\mathbb K$ by $T_nx=nx_n$. For scalars $a,b$, $T_n(ax+by)=n(ax_n+by_n)=aT_nx+bT_ny$. Also $|T_nx|=n|x_n|\le n\|x\|_\infty$, so $T_n$ is bounded and its unit-ball supremum is at most $n$. For $n\ge1$, let $e_n$ have coordinate $1$ at $n$ and zero elsewhere. It belongs to $c_{00}$, has norm $1$, and $|T_ne_n|=n$, giving $\|T_n\|=n$. At $n=0$, $T_0=0$ and its norm is zero; at $n=1$, $T_1e_1=1$. [F3, F7, F8, step 1.1, algebra]

3.1 For $x$ with cutoff $M$, $T_nx=0$ when $n\ge M$. For $n<M$, $|T_nx|\le n\|x\|_\infty\le M\|x\|_\infty$. Thus $M_x=M\|x\|_\infty$ bounds the entire orbit, also when $M=0$ and $x=0$. On the other hand, given any real $C$, Archimedean cofinality gives $n>C$, and $\|T_n\|=n>C$. The sequence is pointwise bounded but its operator norms are unbounded. [F3, F9, step 1.1, step 2.2, algebra]

3.2 For $N\ge0$, let $z^{(N)}_j=1/(j+1)$ if $j\le N$ and $z^{(N)}_j=0$ otherwise. Its support is $\{0,\ldots,N\}$, so it lies in $c_{00}$. For $M>N$, the difference has nonzero coordinates precisely $N<j\le M$, where its magnitude is $1/(j+1)\le1/(N+2)$. Equality is attained at $j=N+1$. Hence $\|z^{(M)}-z^{(N)}\|_\infty=1/(N+2)$; for $M=N$ it is zero. Given $\varepsilon>0$, take $K\ge1$ with $1/K<\varepsilon$ using the reciprocal property in the real field. For any $M,N\ge K$, symmetry and the displayed formula bound the distance by $1/(K+2)<\varepsilon$. Thus this sequence is norm-Cauchy. [F1, F3, F9, step 2.1, algebra]

4.1 If it had norm limit $z\in c_{00}$, then for each fixed $j$ and every $N\ge j$, $|z_j-1/(j+1)|=|z_j-z^{(N)}_j|\le\|z-z^{(N)}\|_\infty\to0$. A constant nonnegative real bounded by a null sequence is zero: if positive, eventually that upper bound is smaller than half the constant. Therefore $z_j=1/(j+1)\ne0$ for every $j$. This contradicts the cutoff of $z$ established in step 1.1. The Cauchy sequence has no limit in $c_{00}$, so the domain is not Banach. Together with step 3.1 this exhibits exactly the failure when completeness of the domain is omitted. [F10, step 1.1, step 3.1, step 3.2, algebra] ∎

## Remarks

The witness $T_nx=nx_n$ and its verification are library-generated as specified by the design. [MIT 18.102 notes, printed pp.5–6, Definition 14 and the discussion following Theorem 16](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf) provide the completeness and sequence-space setting, not attribution of this exact counterexample. All operators, vectors, and finite-support bounds above are explicit; the example makes no claim about failure of a choice principle.

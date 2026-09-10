---
id: thm-sequential-uniform-boundedness-under-countable-choice
kind: theorem
title: "Sequential uniform boundedness under countable choice"
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
deps: [lem-two-signs-detect-an-operator-increment, cor-cauchy-reals-lub-complete, def-operator-norm, def-banach-space, def-countable-choice, thm-well-ordering-principle, thm-recursion, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, def-integer-power, lem-power-laws, thm-of-archimedean, cor-archimedean-reciprocal]
justified_by: []
forward_refs: []
external_refs: []
landmark: false
proof_strategy: contradiction
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Sokal, A really simple elementary proof of the uniform boundedness theorem"
      url: "https://staff.fnwi.uva.nl/r.p.stevenson/1005.1585.pdf"
    - title: "Lin and Rodriguez, MIT 18.102 Complete Lecture Notes"
      url: "https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Work in ZF and assume $\mathrm{AC}_\omega$. Let $X$ be Banach and $Y$ normed over the same field $\mathbb K\in\{\mathbb R,\mathbb C\}$. Let $(T_k)_{k\in\mathbb N}$, with $\mathbb N=\{0,1,\ldots\}$, be a given sequence of bounded linear maps $X\to Y$. If
$$\forall x\in X\ \exists M_x\in[0,\infty)\ \forall k\in\mathbb N:\quad\|T_kx\|\le M_x,$$
then there is $M\in[0,\infty)$ with $\|T_k\|\le M$ for every $k$. Completeness of $Y$, Hahn–Banach, Dependent Choice, and full Choice are not hypotheses.

## Facts & Assumptions

**Given:** The spaces, sequence, pointwise bounds, and $\mathrm{AC}_\omega$ in the statement.

[F1] The library's reals have the least-upper-bound property and form a complete ordered field ([[cor-cauchy-reals-lub-complete]]).

[F2] The operator norm is the unit-ball supremum; the zero-domain norm is zero ([[def-operator-norm]]).

[F3] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[F4] Countable Choice selects one member from each nonempty set in a given $\mathbb N$-indexed family ([[def-countable-choice]]); only this defining clause is assumed.

[F5] A fixed total map $A\to A$ and starting element determine a unique recursive sequence ([[thm-recursion]]).

[F6] Properties with a zero base and a successor step hold for all naturals ([[thm-induction-principle]]).

[F7] The two-sign bound applies to any bounded linear $S:X\to Y$ and any two domain vectors ([[lem-two-signs-detect-an-operator-increment]]).

[F8] Real finite sums include empty sums and obey scaling, splitting, and telescoping ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[F9] Integer powers of nonzero reals are defined and obey addition-of-exponents and product laws ([[def-integer-power]], [[lem-power-laws]]).

[F10] In a complete ordered field, natural numbers are cofinal, and for each $\eta>0$ some positive natural has reciprocal less than $\eta$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

[F11] Banach completeness gives a limit in $X$ for every norm-Cauchy sequence ([[def-banach-space]]).

## Proof

**Proof technique:** contradiction.

1.1 By the real least-upper-bound property the nonempty unit-ball image sets of each bounded $T_k$ have finite suprema. For any bounded $S$ and $z\ne0$, $z/\|z\|$ is in the unit ball, so $\|Sz\|=\|z\|\|S(z/\|z\|)\|\le\|S\|\|z\|$; for $z=0$ both sides vanish. If $X=\{0\}$ or $Y=\{0\}$ all operators are zero and $M=0$ works. [F1, F2, given, algebra]

1.2 The inequality $3^n\ge n+1$ holds at $n=0$; if it holds at $n$, then $3^{n+1}\ge3(n+1)\ge n+2$. Induction proves it for all $n$, and hence $3^{-n}\le1/(n+1)$. Given $\eta>0$, the reciprocal Archimedean assertion gives $N\ge1$ with $1/N<\eta$; for all $n\ge N$, $3^{-n}\le1/(n+1)\le1/N<\eta$. Thus $3^{-n}\to0$. [F1, F6, F9, F10, algebra]

2.1 Suppose instead that the operator norms have no finite upper bound. For every integer $n\ge1$, the set $\{k\in\mathbb N:\|T_k\|\ge4^n\}$ is nonempty. Let $k_n$ be its unique least element and set $S_n=T_{k_n}$. These uniquely specified indices define a sequence in ZF, with $\|S_n\|\ge4^n>0$. They need not be strictly increasing. [assume-contra, F3, F9, step 1.1]

3.1 Fix $n\ge1$ and put $a=\|S_n\|>0$. Since $2a/3<a$, the unit-ball supremum supplies $w$ with $\|w\|\le1$ and $\|S_nw\|>2a/3$. This $w$ is nonzero. Thus $v=w/\|w\|$ satisfies $\|v\|=1$ and $\|S_nv\|=\|S_nw\|/\|w\|>2a/3$. Hence the explicitly specified set $E_n=\{v\in X:\|v\|=1,\ \|S_nv\|>2\|S_n\|/3\}$ is nonempty. This establishes nonemptiness separately for arbitrary $n$, without selecting all such $w$. [F2, step 1.1, step 2.1, algebra]

4.1 Apply $\mathrm{AC}_\omega$ once to the family $(E_{r+1})_{r\in\mathbb N}$, obtaining $v_n\in E_n$ for every $n\ge1$. All these vectors are now fixed independently of subsequent partial sums. Set $u_n=3^{-n}v_n$; then $\|u_n\|=3^{-n}$. [F4, F9, step 3.1, algebra]

5.1 For $n\ge1$ and $z\in X$, define $e(n,z)=1$ if $\|S_n(z+u_n)\|\ge\|S_n(z-u_n)\|$, and $e(n,z)=-1$ otherwise. In particular ties take $1$. The function $f:\mathbb N\times X\to\mathbb N\times X$ given by $f(r,z)=(r+1,z+e(r+1,z)u_{r+1})$ is total and single-valued. Recursion from $(0,0)$ gives $g$; its first coordinate is $r$ at stage $r$, because it starts at zero and increases by one. Induction therefore allows us to write $g(r)=(r,x_r)$, where $x_0=0$ and $x_n=x_{n-1}+e(n,x_{n-1})u_n$. This construction uses no Dependent Choice. [F5, F6, step 4.1]

6.1 The sign rule and the two-sign lemma give $\|S_nx_n\|\ge\|S_nu_n\|=3^{-n}\|S_nv_n\|>(2/3)3^{-n}\|S_n\|$, and $\|x_n-x_{n-1}\|=3^{-n}$, for every $n\ge1$. [F7, step 4.1, step 5.1, algebra]

7.1 For $m>n\ge0$, repeated triangle inequalities give $\|x_m-x_n\|\le\sum_{j=n+1}^{m}3^{-j}$: the one-term case is step 6.1, and adjoining the next increment adds at most its norm, proving the assertion by induction on $m-n$. If $q=\sum_{j=n+1}^{m}3^{-j}$, scaling and cancelling the common terms in $3q-q$ gives $2q=3^{-n}-3^{-m}$. Consequently $q=(3^{-n}/2)(1-3^{-(m-n)})\le3^{-n}/2$. For $m=n$ the sum and the distance are both zero. [F6, F8, F9, step 6.1, algebra]

8.1 Given $\eta>0$, choose $N$ so that $3^{-N}/2<\eta$. For $m,n\ge N$, step 7.1, symmetry, and the decreasing powers bound $\|x_m-x_n\|$ by $3^{-N}/2<\eta$. Thus $(x_n)$ is Cauchy, and the stated completeness of $X$ gives one $x\in X$ with $\|x-x_m\|\to0$. [F11, step 7.1, step 1.2, given]

9.1 For fixed $n$ and every $m>n$, $\|x-x_n\|\le\|x-x_m\|+3^{-n}/2$. Therefore $\|x-x_n\|\le3^{-n}/2$: a positive excess $d$ would be contradicted by taking $m>n$ with $\|x-x_m\|<d/2$. [step 7.1, step 8.1, algebra]

10.1 For every $n\ge1$, the triangle inequality applied to $S_nx_n=S_nx+S_n(x_n-x)$ gives $\|S_nx\|\ge\|S_nx_n\|-\|S_n\|\|x_n-x\|>(1/6)3^{-n}\|S_n\|\ge(1/6)(4/3)^n$. [F9, step 1.1, step 2.1, step 6.1, step 9.1, algebra]

11.1 Induction gives $(4/3)^n\ge1+n/3$: equality holds at zero, and multiplication by $4/3$ sends $1+n/3$ to $1+(n+1)/3+n/9\ge1+(n+1)/3$. For the given bound $M_x$, Archimedean cofinality supplies a natural $n\ge1$ with $n>18M_x$. Then step 10.1 yields $\|T_{k_n}x\|>(1/6)(1+n/3)>M_x$, contradicting the pointwise bound. Thus a finite uniform bound exists. [F1, F6, F9, F10, step 10.1, given, discharge-contradiction] ∎

## Remarks

The estimates adapt [Sokal, printed p.2, equation (2) and the following proof](https://staff.fnwi.uva.nl/r.p.stevenson/1005.1585.pdf). Selecting independent near-norming vectors before the deterministic sign recursion is the library's refinement; the precise axiom audit is not attributed to Sokal. [MIT notes, Theorem 36, printed p.17](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf) corroborate the sequence statement, and [Teschl, §4.1, Corollary 4.4, printed p.103](https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf) gives the family formulation. Their Baire proofs are comparison material, not premises of this choice audit.

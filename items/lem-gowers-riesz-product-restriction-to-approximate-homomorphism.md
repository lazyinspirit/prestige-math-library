---
dependency_level: 0
id: lem-gowers-riesz-product-restriction-to-approximate-homomorphism
kind: lemma
title: "Riesz-product restriction gives an approximate order-eight homomorphism"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-orthogonality-of-characters-on-a-finite-cyclic-group
  - def-unitary-discrete-fourier-transform-on-z-mod-n
  - thm-binomial-theorem
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "W. T. Gowers, A new proof of Szemeredi theorem, Lemma 9.3, printed pp.516--518, with composite-modulus degeneracy handled locally"
      url: https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf
---

## Statement

Fix $0<\alpha,\beta\le1$ and $0<\eta<1$. There is an integer $N_0(\alpha,\beta,\eta)$ such that the following holds for every $N\ge N_0$, including composite $N$. Let $G=\mathbb Z/N\mathbb Z$, let $B\subseteq G$ have size $\beta N$, and let $\phi:B\to G$. Suppose at least $\alpha\beta^{15}N^{15}$ ordered tuples in $B^{16}$ satisfy both
$$a_1+\cdots+a_8=a_9+\cdots+a_{16},\qquad \phi(a_1)+\cdots+\phi(a_8)=\phi(a_9)+\cdots+\phi(a_{16}).$$
Put $c=(\alpha\eta/4)^{2^{19}}$. There is $B'\subseteq B$ with at least $c\beta^{15}N^{15}$ ordered tuples satisfying the first equation, of which a proportion at least $1-\eta$ also satisfy the second.

## Statement references

[Gowers, Lemma 9.3, printed pp.516--518, with composite-modulus degeneracy handled locally](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

## Facts & Assumptions

**Given:** The three fixed positive parameters, group, subset and map in the Statement. Put $w=(1,\ldots,1,-1,\ldots,-1)\in\mathbb Z^{16}$ with eight signs of each type.

[F1] The characters $e_N$ are well-defined on residues, have modulus one, and obey $N^{-1}\sum_re_N(rx)=\mathbf1_{x=0}$ ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]], [[def-unitary-discrete-fourier-transform-on-z-mod-n]]).

[F2] The finite binomial theorem is [[thm-binomial-theorem]]. A finite product of the explicitly specified two-point probability laws defines independent finite random choices; all expectations below are finite sums.

## Proof

1.1 Call a tuple $a\in G^{16}$ with $w\cdot a=0$ degenerate if $\epsilon\cdot a=0$ for some $\epsilon\in\{-1,0,1\}^{16}\setminus\{0,w,-w\}$. For $N\ge3$, each additional equation has at most $2N^{14}$ solutions jointly with $w\cdot a=0$. Indeed eliminate $a_{16}$ using its coefficient $-1$ in $w$. The remaining equation has a nonzero integer coefficient among $-2,-1,1,2$; otherwise $\epsilon$ would be an integer multiple $0,w,-w$. Fix the other fourteen variables. Multiplication by a coefficient $\pm1$ has at most one preimage in $G$, and multiplication by $\pm2$ at most two: if $2x=2y$, their difference is zero or, for even $N$, the class $N/2$. Thus the total number of degenerate tuples is at most $D=2\cdot3^{16}N^{14}$. Every tuple with a repeated coordinate is degenerate, using the coefficient vector with one $1$ and one $-1$. [given, F1, construct, algebra]

1.2 Put $h=2^{15}$ and $P=16h=2^{19}$. Choose the least integer $m\ge0$ such that $t=2^{-16m}\le(\alpha\eta/2)^P$, and put $g=(1+1/h)^m$. Then $m\ge1$, and minimality gives $t>2^{-16}(\alpha\eta/2)^P=2^{P-16}c>2c$. By [F2], $(1+1/h)^h\ge1+h/h=2$, so $g\ge2^{m/h}=t^{-1/P}\ge2/(\alpha\eta)$. All these quantities depend only on the fixed parameters, not on $N$ or on the map. [F2, choose, algebra]

2.1 Choose independent uniform frequencies $r_1,s_1,\ldots,r_m,s_m\in G$. Conditional on them, include each $x\in B$ independently with probability $p_x=2^{-m}\prod_{i=1}^m\left(1+\operatorname{Re}e_N(r_ix+s_i\phi(x))\right).$ Each factor after division by $2$ lies in $[0,1]$, so these are valid probabilities. For a nondegenerate tuple the sixteen coordinates are distinct, so its inclusion probability is the product of the sixteen corresponding $p_x$. Expand $1+\operatorname{Re}z=1+(z+\overline z)/2$ and average over one pair $r_i,s_i$. A term with exponent vector $\epsilon$ survives precisely when $\epsilon\cdot a=\epsilon\cdot\phi(a)=0$, by [F1]. Nondegeneracy leaves only $\epsilon=0,w,-w$. The constant term has coefficient $1$, and the two latter terms each have coefficient $2^{-16}$. Hence a nondegenerate tuple satisfying both equations is selected with probability $t(1+2^{-15})^m=tg$, whereas a nondegenerate tuple failing the second equation is selected with probability $t$. This calculation is exact and uses no independence assumption for repeated coordinates, since they were removed in step 1.1. [F1, F2, step 1.1, step 1.2, construct, algebra]

3.1 Write $H=\beta^{15}N^{15}$. There are at most $H$ additive tuples in $B^{16}$: choose their first fifteen coordinates in $B$, and their last is uniquely determined in $G$. Let $X,Y$ count respectively the selected nondegenerate tuples satisfying and failing the second equation. The hypothesis and step 1.1 give $\mathbb E X\ge tg(\alpha H-D)$ and $\mathbb E Y\le tH$. Take $N_0\ge3$ large enough that $D<\frac{cH}{\eta tg+1}$ for every $N\ge N_0$; this is possible because $D/H=2\cdot3^{16}/(\beta^{15}N)$. Then $\mathbb E(\eta X-Y-D)\ge tH-(\eta tg+1)D>(t-c)H>cH,$ using $\eta g\alpha\ge2$. A finite random experiment has an outcome at least as large as its mean, so some selected set $B'$ has $\eta X-Y-D>cH$. [step 1.1, step 1.2, step 2.1, choose, algebra]

4.1 Let $Z$ be the number of degenerate additive tuples in that $B'$; then $Z\le D$. Step 3.1 gives $Y+Z<\eta X$. The total additive count is $T'=X+Y+Z\ge X>cH/\eta\ge cH$, and its proportion satisfying the second equation is at least $X/T'>1/(1+\eta)\ge1-\eta$. This proves both conclusions. All choices take place in explicit finite sets or in the least suitable integer threshold; no choice axiom or prime-modulus hypothesis is used. [step 3.1, algebra] ∎

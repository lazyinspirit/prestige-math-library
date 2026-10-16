---
id: lem-qc-vmw-fh-density-and-base-net
kind: lemma
title: The VMW F/H Alphabet Has an Algebraic Dense SU(2) Lift and a Fixed Base Net
status: draft
origin: pipeline
dependency_level: 6
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - lem-qc-irrational-rotation-dense-on-circle
  - lem-qc-two-axis-su2-generation
  - def-qc-inverse-closed-dense-su2-gate-set
  - lem-qc-fixed-dimension-interval-arithmetic
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Van Melkebeek and Watson, A Quantum Time-Space Lower Bound for the Counting Hierarchy"
      url: https://arxiv.org/pdf/0712.2545
      locator: Section 3.2, PDF pages 12–13
    - title: "Dawson and Nielsen, The Solovay–Kitaev Algorithm"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: Sections 2–3, fixed alphabet and base preprocessing
---

## Statement

Put $w=(2+i)/\sqrt5$, $F=\operatorname{diag}(1,w^2)$ and $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$. The alphabet
$$G=\{D,D^*,J,J^*\},\qquad D=\operatorname{diag}(\overline w,w),\quad J=iH$$
is an inverse-closed subset of $SU(2)$ whose generated subgroup is dense, with algebraic coordinates admitting fixed minimal-polynomial and rational-isolating-interval descriptions. For every fixed rational $0<\eta_0<1/4096$, it has a fixed finite base-net certificate of radius $\eta_0/4$ as in [[def-qc-inverse-closed-dense-su2-gate-set]]. Erasing scalar phases maps its letters respectively to $F,F^*,H,H$ and preserves word length.

## Facts & Assumptions

**Given:** The four displayed exact matrices and a fixed rational $0<\eta_0<1/4096$.

[F1] Powers of a circle element with irrational angle are dense on the circle ([[lem-qc-irrational-rotation-dense-on-circle]]).

[F2] The closure of the subgroup containing two nonparallel Pauli-axis one-parameter subgroups is $SU(2)$ ([[lem-qc-two-axis-su2-generation]]).

[F3] [[def-qc-inverse-closed-dense-su2-gate-set]] specifies the required finite word certificate.

[F4] Fixed algebraic coordinates, sums, products and square roots can be enclosed by dyadic intervals to arbitrary precision, with polynomial bit cost ([[lem-qc-fixed-dimension-interval-arithmetic]]).

## Proof


1.1 We have $|w|=1$, $w^2=(3+4i)/5$, $D=\overline wF$, and $J=iH$. Direct multiplication gives $D^*D=J^*J=I$, $\det D=\det J=1$, and $JZJ^*=X$, where $Z=\operatorname{diag}(1,-1)$ and $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$. The alphabet contains each adjoint. Its nonzero coordinate values are among $\pm1/\sqrt5,\pm2/\sqrt5,\pm1/\sqrt2$ and their imaginary multiples, hence have fixed square-free rational polynomial descriptions and isolating rational intervals. [given, algebra]

1.2 The number $z=w^2$ is not a root of unity. Indeed, define integer monic polynomials $P_1(T)=T$, $P_2(T)=T^2-2$, and $P_{m+1}(T)=TP_m(T)-P_{m-1}(T)$ for $m\ge2$. Then $P_m(z+z^{-1})=z^m+z^{-m}$ by induction. If $z^m=1$, the rational number $z+z^{-1}=6/5$ would be a root of the monic integer polynomial $P_m(T)-2$. A reduced rational root $a/b$ of a monic integer polynomial must have $b=1$: multiply the equation by $b$ to its degree and reduce modulo any prime divisor of $b$, which would force that prime to divide $a$. This contradicts $6/5$. Thus $w$ is not a root of unity either. Write $w=e^{i\phi}$; then $\phi/(2\pi)$ is irrational. [given, algebra, contradiction]

1.3 Here is a finite certificate whose existence does not require an accuracy-dependent search. Identify $SU(2)$ with the unit sphere in $\mathbb R^4$ by $Q(a,b,c,d)=\begin{pmatrix}a+ib&c+id\\-c+id&a-ib\end{pmatrix}$. Direct multiplication gives $Q(q)^*Q(q)=\|q\|_2^2I$, and therefore $\|Q(q)-Q(r)\|=\|q-r\|_2$. Fix a positive dyadic mesh $h<\eta_0/1024$. Form all mesh points $q\in[-1,1]^4$ with $\|q\|_2\ge1/2$, and normalize each to $r_q=q/\|q\|_2$. Rounding the four coordinates of any unit vector $u$ to the nearest mesh point gives $\|q-u\|_2\le h$, $\|q\|_2\ge1-h>1/2$, and $\|r_q-u\|_2\le2h$. Thus the finitely many algebraic matrices $Q(r_q)$ form a $2h$-net. [given, algebra, construct]

2.1 By [F1], the closure of the powers of $D=\operatorname{diag}(e^{-i\phi},e^{i\phi})$ contains every $Z$-axis one-parameter rotation. Conjugating these powers by $J$ and using $JZJ^*=X$ gives every $X$-axis rotation in the closed generated subgroup. These axes are nonparallel, so [F2] makes that closure all of $SU(2)$. [F1, F2, step 1.1, step 1.2]

3.1 Density supplies, for each of these finitely many centers, a word in $G$ at distance less than $\eta_0/64$. A finite word product has algebraic coordinates, so [F4] eventually certifies that its Frobenius distance to the center is less than $\eta_0/32$: the strict operator-distance margin gives Frobenius distance less than $\sqrt2\eta_0/64<\eta_0/32$. For each center, enumeration of words together with increasing certified precision therefore terminates. Fix the resulting finite word list, all its strict rational interval certificates, and its maximum word length. Every $U\in SU(2)$ is within $2h+\eta_0/32<\eta_0/4$ of a listed word, as required by [F3]. This preprocessing depends only on the fixed alphabet and fixed radius. Finally, replacing each $D,D^*,J,J^*$ by $F,F^*,H,H$ multiplies each letter by a scalar of modulus one; their product is one global scalar, so length and projective error are preserved. [F3, F4, step 1.1, step 2.1, step 1.3, construct] ∎


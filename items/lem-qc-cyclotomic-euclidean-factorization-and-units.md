---
id: lem-qc-cyclotomic-euclidean-factorization-and-units
kind: lemma
title: Constructive cyclotomic factorization and real unit squares
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-dyadic-cyclotomic-ring
  - def-qc-cyclotomic-bullet-automorphism
  - lem-qc-dyadic-coefficient-encoding
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations, Appendix C
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 2
---

## Statement

Put $R=\mathbb Z[\sqrt2]$, $O=\mathbb Z[\omega]$, and
$\lambda=1+\sqrt2$. Both rings are norm-Euclidean domains and hence unique
factorization domains with effective gcd and associate tests. There is a
terminating finite-search algorithm factoring every nonzero element of $O$
into primes and a unit. The units of $R$ are exactly $\pm\lambda^j$
($j\in\mathbb Z$); a unit is positive at both real embeddings if and only
if it is a square of a unit of $R$. These assertions include effective square
root recovery. No polynomial runtime bound is asserted for finite-search
factorization.

## Facts & Assumptions

**Given:** $\omega=e^{i\pi/4}$, $i=\omega^2$, and $\bullet$ sends
$\omega$ to $-\omega$ and fixes $i$; $\dagger$ is complex conjugation.

[F1] [[lem-qc-dyadic-coefficient-encoding]] supplies unique power-basis
coordinates and exact arithmetic. The automorphisms in
[[def-qc-cyclotomic-bullet-automorphism]] commute with conjugation.

## Proof


1.1 For $x=a+b\sqrt2\in\mathbb Q(\sqrt2)$ put $N_R(x)=|a^2-2b^2|$. For $z=A+B\omega$ with $A,B\in\mathbb Q(i)$ put $N_O(z)=|A^2-iB^2|^2=|z|^2|z^\bullet|^2$. These functions are multiplicative, positive on nonzero elements, and take positive integer values on nonzero elements of their respective rings: $A,B\in\mathbb Z[i]$ for $z\in O$, and $z z^\bullet=A^2-iB^2\in\mathbb Z[i]$. Integer norm one is equivalent to being a unit: the converse follows by multiplicativity, and the forward implication follows by taking the product of the other conjugates divided by the norm (with a sign in $R$). All coordinates of that inverse remain in the ring. [F1, given, algebra]

1.2 The real elements of $O$ are exactly $R$. Indeed, for $z=a_0+a_1\omega+a_2 i+a_3\omega^3$, its imaginary part is $a_2+(a_1+a_3)/\sqrt2$; irrationality of $\sqrt2$ makes this zero exactly when $a_2=0$ and $a_3=-a_1$. The real part is then $a_0+a_1\sqrt2$. A real unit of $O$ consequently is a unit of $R$, since its inverse is real too. Also $\lambda^{-1}=\sqrt2-1\in R$ and $\lambda^\bullet=-\lambda^{-1}$. [F1, given, algebra]

2.1 To divide in $R$, round the rational coefficients of a quotient to nearest integers. Its error $e=a+b\sqrt2$ has $|a|,|b|\le1/2$, so $N_R(e)=|a^2-2b^2|\le1/2<1$. To divide in $O$, express a quotient as $A+B\omega$ and round $A,B$ to Gaussian integers. For the errors $C,D$, $|C|^2,|D|^2\le1/2$, whence $N_O(C+D\omega)=|C^2-iD^2|^2\le(|C|^2+|D|^2)^2\le1$. If the last upper bound equals one, all four real coordinates of $C,D$ are $\pm1/2$. Then $C^2,D^2$ are purely imaginary of magnitude $1/2$, so $C^2$ and $-iD^2$ are perpendicular and the actual norm is $1/2$. Otherwise the displayed bound is already strict. Multiplicativity therefore gives a remainder of norm strictly below that of the divisor in both rings. This proves the Euclidean assertions, including ties in rounding. [step 1.1, algebra, construct]

2.2 If $u\in R$ is a unit, choose a sign and an integer power of $\lambda$ to make $v=\pm\lambda^j u$ lie in $[1,\lambda)$. Such a power exists because $\lambda>1$. Write $v=a+b\sqrt2$. Its signed field norm is $\pm1$, so $v^\bullet=\pm1/v$. For norm $+1$, $a=(v+1/v)/2\in[1,\sqrt2)$, hence $a=1$; the equation $a^2-2b^2=1$ forces $b=0$ and $v=1$. For norm $-1$, $a=(v-1/v)/2\in[0,1)$, hence $a=0$, incompatible with $-2b^2=-1$. This proves $u=\pm\lambda^m$. Its two embeddings are positive exactly when the sign is positive and $m$ is even. In this case $\lambda^{m/2}$ is the required real unit square root. Enumerating integer powers until the exact coefficients agree recovers $m$ in finite time. Signs and comparisons of $a+b\sqrt2$ are decided by signs of the rational coefficients and, when necessary, comparing $a^2$ and $2b^2$. [step 1.1, step 1.2, algebra, construct]

3.1 Repeated division terminates because nonzero remainder norms strictly decrease through positive integers. Back substitution expresses the gcd as a linear combination. If an irreducible $p$ does not divide $a$, the gcd of $p,a$ is a unit, so multiplying a Bezout identity by $b$ shows that $p\mid ab$ implies $p\mid b$. Thus irreducibles are prime. A nonunit has a factorization into irreducibles by induction on its norm: a proper factorization has two factors of norm at least two, each of smaller norm. The prime-divisor property and cancellation give uniqueness up to ordering and units. Divisibility is decidable by computing the quotient in the field and checking its integral coordinates; two elements are associates exactly when their quotient has integral coordinates and norm one. [step 1.1, step 2.1, algebra, construct]

4.1 Here is an explicit finite factor search, which makes the existence proof algorithmic without a primality oracle for $O$. For a nonunit $\alpha\in O$ put $M=N_O(\alpha)\ge2$ and enumerate all power-basis integer tuples with coefficients between $-(M+3)$ and $M+3$. Test whether such an element $d$ divides $\alpha$ and $1<N_O(d)<M$; any successful $d$ splits $\alpha$ into smaller-norm factors. If $\alpha$ is reducible, choose a nonunit proper divisor and multiply it by a power of the unit $\lambda$ so $1\le|d|<\lambda$. Its norm is unchanged and less than $M$, and $|d^\bullet|=\sqrt{N_O(d)}/|d|\le\sqrt M$. Recovering power-basis coefficients from the two complex embeddings gives $|a_0|,|a_2|\le(|d|+|d^\bullet|)/2$ and $|a_1|,|a_3|\le(|d|+|d^\bullet|)/\sqrt2$. They are all below $\lambda+\sqrt M<M+3$, so the list contains this normalized proper divisor. Failure of the finite search therefore certifies irreducibility. Recursing on successful factors terminates by strict norm descent, and the residual norm-one elements supply the unit. [step 1.1, step 3.1, step 1.2, algebra, construct] ∎


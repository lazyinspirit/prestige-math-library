---
dependency_level: 13
id: lem-w-trick-positive-box-lifts-and-linear-forms-condition
kind: lemma
title: "Positive integer box lifts and the W-trick linear-forms condition"
status: draft
origin: session
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - alg-goldston-yildirim-pseudorandom-majorant
  - thm-goldston-yildirim-linear-forms-asymptotic
  - def-linear-forms-condition-for-a-measure
  - thm-standard-representatives-modulo-n
  - thm-z-mod-p-is-a-field
  - def-addition-and-multiplication-modulo-n
  - def-factorial-and-falling-factorial
  - lem-integer-part
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-slower-than-every-positive-power
  - def-real-power
  - def-goldston-yildirim-truncated-divisor-sum
  - def-unit-group-modulo-n-and-euler-totient
  - def-w-trick-prime-modulus
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Green and Tao, The primes contain arbitrarily long arithmetic progressions, Annals167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§9, Proposition9.8; local positive-box reconstruction using the actual accepted unqualified boxed supplier; existing full-text reading history preserved"
---

## Statement

Fix positive integers $m,t,A$ and $0<\epsilon<1/4$. For sufficiently large integers $N$, put $Q=\lfloor\sqrt N\rfloor$, $a=\lceil\epsilon N\rceil$, $b=\lfloor2\epsilon N\rfloor$, $I=[a,b]\cap\mathbb Z$, and $V_N=tA\lceil N/Q\rceil$. Partition $\{0,\ldots,N-1\}^t$ into
$$B_u=\prod_{j=1}^t[\lfloor u_jN/Q\rfloor,\lfloor(u_j+1)N/Q\rfloor-1]\cap\mathbb Z^t,\qquad 0\le u_j<Q.$$
Let $\ell_i(x)=\sum_jL_{ij}x_j+\beta_i$ have nonzero integer coefficient rows with $|L_{ij}|\le A$, and arbitrary integer constants $\beta_i$. Write $\operatorname{rep}_N$ for the standard residue representative. Call form $i$ active on $B$ if $\operatorname{rep}_N\ell_i(x)\in I$ for some $x\in B$. Each active form has a unique integer $r_i(B)$ such that $\ell_i(B)$ meets $I+r_i(B)N$, and its lift $\psi_i=\ell_i-r_i(B)N$ satisfies, on the whole box,
$$0<a-V_N\le\psi_i(x)\le b+V_N<N,\qquad \psi_i(x)=\operatorname{rep}_N\ell_i(x).$$
A box is bad if some form's representatives meet both $I$ and its complement on that box. There are $O_{m,t,A}(Q^{t-1})$ bad boxes, uniformly in all constants, containing $O_{m,t,A}(Q^{-1})$ of the normalized lattice-point mass.

For fixed $k\ge3$, the functions $\nu_N$ of [[alg-goldston-yildirim-pseudorandom-majorant]], on sufficiently large primes where the construction is defined, are nonnegative, have mean $1+o_k(1)$, and satisfy the exact $(k2^{k-1},3k-4,k)$ linear-forms condition of [[def-linear-forms-condition-for-a-measure]], uniformly in all permitted rational coefficient systems and residue shifts. No choice axiom is assumed.

## Facts & Assumptions

**Given:** The finite integer forms, boxes and cutoff above; for the application use exactly the fixed-$w$, residue-$1$ algorithm in the Statement. Conditions on a family indexed by sufficiently large primes concern its asymptotic tail; assigning any nonnegative values at finitely many additional primes does not change the mean or linear-forms asymptotics.

[F1] [[thm-standard-representatives-modulo-n]] gives the unique representative in $\{0,\ldots,N-1\}$. [[def-addition-and-multiplication-modulo-n]] gives the representative arithmetic, and [[thm-z-mod-p-is-a-field]] makes multiplication by a nonzero element bijective at prime modulus. [[lem-integer-part]] supplies floors and ceilings.

[F2] [[alg-goldston-yildirim-pseudorandom-majorant]] defines $w=\max(2,\lfloor\sqrt{\log\log\log N}\rfloor)$, $R=N^{1/(k2^{k+4})}$, $\epsilon_k=1/[2^k(k+4)!]$, $c=\varphi(W)/(W\log R)$, and $\nu=1-\mathbf1_I+c\Lambda_R(Wn+1)^2\mathbf1_I$ on standard representatives. [[def-w-trick-prime-modulus]] defines the finite prime product $W$. [[def-goldston-yildirim-truncated-divisor-sum]] defines its sum only at positive integer arguments; [[def-unit-group-modulo-n-and-euler-totient]] gives $0<\varphi(W)\le W$.

[F3] [[thm-goldston-yildirim-linear-forms-asymptotic]] supplies the unqualified asymptotic on boxes with at least $R^{10r}$ consecutive integers in each coordinate, for nonzero pairwise nonparallel integer rows bounded by $\sqrt w/2$, provided ALL arguments are positive on the whole box. It is uniform in constants and boxes for fixed coefficients.

[F4] [[def-linear-forms-condition-for-a-measure]] requires nonnegativity and mean $1+o(1)$, and uniform averages $1+o(1)$ over every allowed rational nonparallel coefficient system and all shifts. [[def-factorial-and-falling-factorial]] defines $k!$ as the product of the positive integers through $k$.

[F5] [[def-natural-logarithm]], [[thm-natural-logarithm-laws]] and [[def-real-power]] give the logarithmic identities and positive-base powers. [[thm-logarithm-slower-than-every-positive-power]] gives $\log T=o(T^{1/2})$.

## Proof

1.1 Within one box, $|\ell_i(x)-\ell_i(y)|\le V_N$. Eventually $V_N<\epsilon N/4$ and $V_N<N-(b-a)$. Distinct intervals $I+rN$ are separated by at least $N-(b-a)$, so at most one meets the values of an active form on the box; activity supplies one. Subtract its unique $rN$. A point in $I$ and the oscillation bound show that all lifted values lie in $[a-V_N,b+V_N]\subset(0,N)$. Uniqueness of representatives proves their whole-box identity. The uniquely specified finitely many integers $r$ require no choice. [F1, given, algebra]

1.2 For the application put $T=\log\log\log N$. Eventually $w\le\sqrt T$, and [F5] gives $w\log w\le\sqrt T\log T=o(T)$; also $w\to\infty$. The finite prime product gives $\log W\le w\log w$, so $W\le N/2$ eventually. Every coordinate box has at least $\lfloor N/Q\rfloor\ge\sqrt N/2$ integer points for large $N$. For $m\le k2^{k-1}$, $$\frac{10m}{k2^{k+4}}\le\frac5{16}<\frac12,$$ so each such cardinality exceeds $R^{10m}$ eventually and hence exceeds $R^{10r}$ for every nonempty $r$-form subfamily. [F1, F2, F5, algebra]

2.1 If a box is bad for form $i$, its lifted minimum and maximum straddle $a$ or $b+1$. At the lower-left corner $c_u$, $\ell_i(c_u)$ is consequently within $V_N+1$ of $a+rN$ or $b+1+rN$. Fix the least $j$ with $L_{ij}\ne0$, and fix the other $t-1$ box indices. Then $\ell_i(c_u)=L_{ij}u_jN/Q+C+e(u_j)$ with $|e(u_j)|\le A$. For each fixed boundary and $r$, its condition confines $u_j$ to an interval of length at most $2(V_N+1+A)Q/(|L_{ij}|N)=O_{t,A}(1)$. As $u_j$ varies, the corner values range over an interval of length at most $AN$; only $O_{t,A}(1)$ integers $r$ can have a boundary within $V_N+1$ of this interval, independently of its translate $C$. Thus only $O_{t,A}(1)$ indices $u_j$ are bad for each choice of the other indices. Sum over $Q^{t-1}$ choices, two boundaries and $m$ forms. Each box has at most $\lceil N/Q\rceil^t$ points, so the bad fraction is at most $O(Q^{t-1})\lceil N/Q\rceil^t/N^t=O(1/Q)$. These are exact integer boxes, not assumed equal in size. [F1, step 1.1, algebra]

2.2 Fix an allowed rational system in [F4]. Put $D=k!$. Every positive denominator divides $D$, so the substitution $x_j=Dy_j$ is a field bijection for primes $N>D$, and turns its coefficients into integers $L_{ij}=D\alpha_{ij}$ of absolute value at most $A_k=kk!$. The rows remain nonzero and pairwise nonparallel. Choose integer representatives of all constants and use the partition above with $A=A_k$, $\epsilon=\epsilon_k$. Eventually $A_k\le\sqrt w/2$. For every active form, step 1.1 supplies a positive representative lift on the WHOLE box, so $W\psi_i(x)+1\ge1$ there. Thus each nonempty active subfamily meets every hypothesis of [F3], including the side lengths from step 1.2. The field substitution asserts no integer period for a divisor sum. [F1, F2, F3, F4, step 1.1, step 1.2, algebra]

3.1 On a good box, active forms are wholly inside $I$ and inactive forms wholly outside. Their product of $\nu$ values equals $c^r\prod_i\Lambda_R(W\psi_i+1)^2$ over the active subfamily, with average $1+o(1)$ by [F3], or exactly1 if the subfamily is empty. On a bad box an inactive form is still exactly1; for an active form the whole-box representative identity gives $\nu(\ell_i(x))\le1+c\Lambda_R(W\psi_i(x)+1)^2$. Expand these upper bounds over all subfamilies. Each nonempty term again satisfies [F3], so the bad-box average is $O_m(1)$; all terms are nonnegative. For fixed $k$ there are finitely many permitted rational coefficient arrays, $m,t$, and subfamilies. Taking the maximum of their finitely many error functions yields one error tending tozero uniformly in ALL allowed coefficients and shifts. This uses the source's actual constant/box uniformity, not an extra unstated coefficient-uniform theorem. [F2, F3, F4, step 2.2, algebra]

4.1 Weight every box by its exact cardinality divided by $N^t$. The bad weights total $O(1/Q)$ by step 2.1. Step3.1 and nonnegativity therefore give the global average $1+o_k(1)$, uniformly for every allowed system and shift. Nonnegativity is immediate from [F2]. The permitted one-form test $m=t=1$, coefficient1 and shift0 gives the mean $1+o_k(1)$. These are precisely all the clauses of [F4]. No SW or choice input was used. [F2, F4, step 2.1, step 3.1, algebra] ∎

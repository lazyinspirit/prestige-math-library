---
id: thm-qc-solovay-kitaev-bit-complexity
kind: theorem
title: Finite-Precision Bit Complexity of the SU(2) Solovay–Kitaev Compiler
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-qc-effective-unitary-matrix-input
  - def-qc-inverse-closed-dense-su2-gate-set
  - alg-qc-solovay-kitaev-unitary-compiler
  - thm-qc-solovay-kitaev-error-and-resource-bound
  - lem-qc-fixed-dimension-interval-arithmetic
  - lem-qc-su2-near-identity-logarithm
  - lem-qc-pauli-vector-multiplication
  - lem-qc-su2-balanced-commutator
  - lem-qc-commutator-error-cancellation
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-sine-and-cosine-derivatives
  - cor-mean-value-theorem
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - lem-integer-part
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: Dieter van Melkebeek and Thomas Watson, Time-Space Efficient Simulations of Quantum Computations
      url: https://theoryofcomputing.org/articles/v008a001/v008a001.pdf
      locator: Theorem 4.3 and §4.3, PDF pp. 25–42; finite-precision Solovay–Kitaev compilation
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm, arXiv:quant-ph/0505030v2"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: §4, exact-real recurrence and explicit note that bit arithmetic is uncharged, PDF pp. 6–10
---

## Statement

Fix a finite inverse-closed dense $G\subset SU(2)$ whose real and imaginary
gate-entry coordinates are algebraic numbers supplied by their minimal
polynomials over $\mathbb Q$ and rational isolating intervals with opposite
endpoint signs and exactly one real root, and fix a
rational certified base-net radius
$0<\eta_0<64^{-2}$. Let the finite base-net certificate be fixed. Suppose
$U\in SU(2)$ is given by a Cauchy name whose query on unary input $1^b$ takes
at most $(b+1)^c$ bit operations for a fixed integer $c\ge1$. Given rational
$0<\varepsilon\le\eta_0$ encoded as $\varepsilon=p/q$ by positive binary
integers $p,q$ with a fixed delimiter (not necessarily reduced), there is a
deterministic Turing implementation of the Solovay–Kitaev recursion that outputs a gate word $W$
with $\|U-W\|\le\varepsilon$ and length
$O(\log^{\log_{3/2}5}(1/\varepsilon))$. If $s_\varepsilon$ is the binary
encoding length of $\varepsilon$ and
$N=\lceil\log_2(2/\varepsilon)\rceil$, its bit time, including reading
$\varepsilon$ and printing the expanded word, is
$$O\bigl((N+s_\varepsilon)^{c+10}\bigr).$$
Here $s_\varepsilon$ is the total bit length of this numerator/denominator
encoding. The constants depend on $G$, the fixed base-net certificate, and the fixed
algebraic descriptions. This is distinct from the exact-real arithmetic
count in [[thm-qc-solovay-kitaev-error-and-resource-bound]].

## Facts & Assumptions

**Given:** The fixed gate package and base-net certificate, a target Cauchy name of the stated polynomial query time, and rational $0<\varepsilon\le\eta_0<64^{-2}$ encoded as $\varepsilon=p/q$ by positive binary integers $p,q$ with a fixed delimiter (the fraction need not be reduced). Its length $s_\varepsilon$ is the total bit length of this encoding, which can be parsed in $O(s_\varepsilon)$ bit operations.

[F1] A Cauchy name returns rational matrix entries with error at most $2^{-b}$ on query $1^b$, and the requested rational tolerance is encoded in binary under the effective encoding convention ([[def-qc-effective-unitary-matrix-input]]).

[F2] The ideal recursion uses a level-zero base-net word and at each later level one lower-level approximation to the target plus two approximations to balanced commutator factors ([[alg-qc-solovay-kitaev-unitary-compiler]]).

[F3] For residual radius $\eta\le1/16$, suitable balanced factors exist with commutator error at most $40\eta^{3/2}$ ([[lem-qc-su2-balanced-commutator]]). For any $V,W\in SU(2)$ within $\sqrt\eta$ of $I$, replacing each by an $SU(2)$ word within $\eta$ adds at most $5\eta^{3/2}$ to the commutator error ([[lem-qc-commutator-error-cancellation]]). Step 4.1 establishes the required bounds for the particular factors constructed here.

[F4] For fixed dimension, dyadic interval routines compute sums, products, quotients, normalizations, square roots, matrix logarithms and exponentials with cost $O((p+B+1)^{\max(c,3)})$ under the stated denominator bounds ([[lem-qc-fixed-dimension-interval-arithmetic]]).

[F5] The logarithm of a near-identity $SU(2)$ matrix is traceless and skew-Hermitian, and its operator norm is its Pauli-vector length ([[lem-qc-su2-near-identity-logarithm]], [[lem-qc-pauli-vector-multiplication]]).

[F6] [[def-qc-inverse-closed-dense-su2-gate-set]]: each gate label denotes an exact matrix in $SU(2)$, and the fixed base-net certificate places a listed word within $\eta_0/4$ of every target in $SU(2)$.

[F7] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: for real $t$, $e^{it}=\cos t+i\sin t$ and $\cos^2t+\sin^2t=1$.

[F8] Sine is differentiable with derivative cosine and $\sin0=0$ ([[thm-sine-and-cosine-derivatives]]), hence it is continuous; the mean value theorem applies on a closed interval to a function continuous there and differentiable inside ([[cor-mean-value-theorem]]).

[F9] The operator norm is the maximum over unit vectors ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F10] For $b>0$, $b\ne1$, $\log_b x:=\log x/\log b$; for $x>0$ and real $t$, $x^t:=\exp(t\log x)$, so $(xy)^t=x^ty^t$ and $(x^s)^t=x^{st}$ by the logarithm product law and inverse relation; and $\lceil y\rceil:=-\lfloor-y\rfloor$, with floor supplied by [[lem-integer-part]]. The natural logarithm is strictly increasing and obeys $\log1=0$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

## Proof

1.1 Set $q_0=4096\eta_0<1$. The exact error recurrence is $\eta_{j+1}=64\eta_j^{3/2}$, so for $q_j=4096\eta_j$ we have $q_{j+1}=q_j^{3/2}$ and $\eta_j=2^{-12}q_0^{(3/2)^j}$. Choose fixed integers $K,A$ with $q_0^{(3/2)^K}<1/2$ and $2^Aq_0\ge1$. Let $j_N$ be the least integer with $(3/2)^{j_N}\ge N$ and set $J=K+j_N$. Then $q_J\le2^{-N}\le\varepsilon/2$, hence $\eta_J\le\varepsilon$. Write the encoded rational tolerance as $\varepsilon=p/q$ with positive integers $p,q$. Since $q<2^{s_\varepsilon}$ and $p\ge1$, we have $N\le s_\varepsilon+1$; binary search over integers $0,\ldots,s_\varepsilon+1$ using exact comparisons $2^N p\ge2q$ computes $N$ in time polynomial in $s_\varepsilon$. The integer $j_N$ is found by repeated rational multiplication by $3/2$; $J=O(\log N)$. Put $B=12+A\lceil(3/2)^J\rceil$, $L_J=L_0 5^J$, and $P=64(B+\lceil\log_2(L_J+1)\rceil+32)$. For every $j\le J$, $\eta_j\ge2^{-B}$; also $B=O(N)$, $\log_2(L_J+1)=O(\log N)$, and $P=O(N)$. Each routine is requested at precision $P$ or higher, so word-product errors and interval widths are below $2^{-B-20}$; in particular, an interval for $\tau_j:=\eta_j/128$ has width at most $\tau_j/4$. Compute these recurrence intervals from the rational $\eta_0$ using certified square-root and multiplication calls at precision $P$; since $2^{-P}\le2^{-B-9}$, each resulting interval is narrower than $\eta_j/512$. [F1, F2, F10, given, algebra]

1.2 At level zero, compute certified Frobenius-distance intervals from the target to each word in the fixed base net, and return the first word whose upper endpoint is at most $\eta_0$. By the base-net certificate in [F6], some word is at operator-norm distance at most $\eta_0/4$; its Frobenius distance is at most $\sqrt2\,\eta_0/4$. Since the fixed dimension is two, the chosen precision $P$ makes the Frobenius-distance interval error less than $\eta_0/8$, so this word's upper endpoint is below $\eta_0$. For the selected word, operator norm is bounded by Frobenius norm, giving actual error at most $\eta_0$. [F1, F4, F6, given, construct]

2.1 At a nonbase node of level $j$, recursively obtain the exact gate word $A$ for the lower-level call and set $D=UA^*$. Inductively, by [F9], for any unitary $Q$ one has $\|XQ\|=\max_{\|v\|=1}\|XQv\|=\max_{\|w\|=1}\|Xw\|=\|X\|$ because $Q$ maps the unit sphere bijectively to itself; thus $\|D-I\|=\|(U-A)A^*\|=\|U-A\|\le\eta_{j-1}<1/2$. Use interval routines to enclose $X=\log D$ and $r=\|X\|$ by rational intervals $[r_-,r_+]$ of width at most $\tau_j/4$, and compute a rational interval $[\tau_j^-,\tau_j^+]$ for $\tau_j=\eta_j/128$ of width at most $\tau_j/4$. These intervals are certified; branch by comparing rational endpoints: if $r_+\le2\tau_j^-$, return $A$ with no correction. Then $r\le r_+\le2\tau_j^-\le2\tau_j$. Since the eigenvalues of the traceless skew-Hermitian $X$ are $ir,-ir$ and $D=e^X$, $\|D-I\|=2|\sin(r/2)|\le r\le2\tau_j<\eta_j$; here $|\sin t|\le|t|$ follows from [F8], the mean value theorem, and [F7]. Otherwise, $r_+>2\tau_j^-$. The interval widths imply $\tau_j^-\ge3\tau_j/4$ and $r_-\ge r_+-\tau_j/4$, hence $r\ge r_->2\tau_j^- -\tau_j/4\ge5\tau_j/4>\tau_j$. Thus the balanced branch has the certified denominator lower bound it needs. The branch comparison uses only rational interval endpoints, not an exact-real comparison with $\tau_j$ or an exact-zero test. [F4, F5, F7, F8, F9, step 1.1, construct]

3.1 In the balanced branch write $X=i\,v\cdot\sigma$, so $|v|=r$ by [F5], and set $u=v/r$. At least one coordinate satisfies $|u_k|\le1/\sqrt3$. Compute intervals for $|u_1|,|u_2|,|u_3|$ of width at most $1/16$, and choose the first whose certified upper endpoint is at most $3/4$; one exists since $1/\sqrt3+1/16<3/4$. For its coordinate vector $e_k$, set $e=(u\times e_k)/|u\times e_k|$, $a=\sqrt{r/2}\,e$, and $b=-\sqrt{r/2}\,(u\times e)$. The denominator is at least $\sqrt7/4>1/2$, so interval normalization is conditioned; also $e\perp u$, $|u\times e|=1$, and $a\times b=-(r/2)u=-v/2$. Thus, for $A_0=i\,a\cdot\sigma$ and $B_0=i\,b\cdot\sigma$, the Pauli commutator identity gives $[A_0,B_0]=X$. The near-identity bound gives $r\le2\eta_{j-1}$, hence $\|a\|=\|b\|=\sqrt{r/2}\le\sqrt{\eta_{j-1}}$. Exponentiating defines exact $V=e^{A_0},W=e^{B_0}$; interval routines provide Cauchy names for these exact child targets. The lower bound $r>\tau_j\ge2^{-B-7}$ from step 2.1 and the cross-product bound show every denominator has at most $B+O(1)$ conditioning bits. For example, with $Q_a=(a\cdot\sigma)/|a|$, [F5] gives $Q_a^*=Q_a$, $Q_a^2=I$, and $\operatorname{tr}(Q_a)=0$. Grouping the even and odd terms of the exponential series gives $V=\cos|a|I+i\sin|a|Q_a$ by [F7]. This formula implies $V^*V=I$; writing $Q_a=\begin{pmatrix}x&z\\\overline z&-x\end{pmatrix}$, the identity $Q_a^2=I$ gives $x^2+|z|^2=1$, and direct determinant calculation then gives $\det V=\cos^2|a|+\sin^2|a|=1$. The same calculation gives $W\in SU(2)$. [F4, F5, F7, step 2.1, algebra]

4.1 Put $s=\|A_0\|=\|B_0\|=\sqrt{r/2}\le\sqrt{\eta_{j-1}}<1/64$. The Hermitian involution $Q_a$ in step 3.1 has eigenvalues $1,-1$, so its displayed exponential formula gives $\|V-I\|=|e^{is}-1|=2|\sin(s/2)|\le s$, and likewise $\|W-I\|\le s$. Here the scalar exponential product identity follows by multiplying its absolutely convergent series; together with [F7] it gives the sine expression, and [F8] gives the last inequality as in step 2.1. From [F9], applying the vector triangle inequality to unit inputs gives the operator-norm triangle inequality, and $\|YZv\|\le\|Y\|\|Zv\|\le\|Y\|\|Z\|$ gives submultiplicativity. Expand $e^{A_0}e^{B_0}e^{-A_0}e^{-B_0}$ in homogeneous degrees: degrees zero, one and two sum to $I+[A_0,B_0]=I+X$, and the sum of norms in degree $n$ is at most $(4s)^n/n!$ by the multinomial identity. Its remaining tail is therefore at most $(4s)^3e^{4s}/6<32s^3$, since $4s<1$ and $e=\sum_{n\ge0}1/n!<3$. Also $\|X\|=\|[A_0,B_0]\|\le2s^2$, so $\|e^X-I-X\|\le2s^4e^{2s^2}\le s^3$; indeed $e^{2s^2}\le(1-2s^2)^{-1}$ and $2s/(1-2s^2)<1$. Since $D=e^X$ and $V^*=e^{-A_0},W^*=e^{-B_0}$, these estimates give $\|D-VWV^*W^*\|\le33s^3\le40\eta_{j-1}^{3/2}$ for these exact factors, independently of the existential clause of [F3]. [F3, F5, F7, F8, F9, step 2.1, step 3.1, algebra]

5.1 Recursively compile these exact $V,W$ at level $j-1$, obtaining words $\widetilde V,\widetilde W$ within $\eta_{j-1}$ of them. Step 4.1 approximates $D$ by $VWV^*W^*$ within $40\eta_{j-1}^{3/2}$ and verifies both factor distances required by the cancellation bound in [F3], which adds at most $5\eta_{j-1}^{3/2}$ when $V,W$ are replaced by $\widetilde V,\widetilde W$. Since $U-(\widetilde V\widetilde W\widetilde V^*\widetilde W^*A)=(D-\widetilde V\widetilde W\widetilde V^*\widetilde W^*)A$ and $A$ is unitary, [F9] right-multiplication invariance gives the same error norm. Thus the returned word $\widetilde V\widetilde W\widetilde V^*\widetilde W^*A$ approximates $U$ within $45\eta_{j-1}^{3/2}\le\eta_j$. Together with the small-residual branch and step 1.2, induction proves the claimed error. The recursion has at most three calls per node and each output length satisfies $L_j\le5L_{j-1}$, so its expanded length is at most $L_0 5^J$. [F2, F3, F9, step 1.2, step 2.1, step 4.1]

6.1 Every exact target in a recursive call is represented by a Cauchy name obtained from its parent using matrix products, logarithms, Pauli coordinates, division by $r\ge\tau_j$, normalization, square roots and exponentials. In the balanced branch the only small square-root radicand is $x=r/2>\tau_j/2$. Request an enclosing interval of width at most $2^{-b}\sqrt{\tau_j}/16$ and at most $\tau_j/4$; its endpoints are then at least $\tau_j/4$. The identity $|\sqrt{x}-\sqrt{y}|=|x-y|/(\sqrt{x}+\sqrt{y})$ bounds the spread of their square roots by $2^{-b}/16$. Both width requirements follow from $b+O(1+\log_2(1/\tau_j))$ input bits, using the levelwise dyadic lower bound $\tau_j\ge2^{-19-A\lceil(3/2)^j\rceil}$ from step 1.1; no exact square-root comparison is needed to select the precision. Bisect the rational endpoints to $b+O(1)$ output bits as in [F4], costing cubic bit time in the working precision. Use this conditioned routine for $\sqrt{r/2}$. For norms used in normalization, the Lipschitz estimate $|\|v\|-\|v'\||\le\|v-v'\|$ in [F4] likewise permits additive input precision; computing the norm of the rational midpoint by square-root bisection needs no further parent query. Each such query uses one parent matrix query at the required guard precision; the query returns all entries together, which the routines reuse. The interval routines have conditioning-bit bound $O(1+\log_2(1/\eta_j))$. The sum of these bounds along a branch is $O(B)$, because $\log_2(1/\eta_j)\le12+A(3/2)^j$ is geometric. Put $r_0=\max(c,3)$. Induction through the at most $J$ derived-name layers therefore bounds a query at precision $b$ by $O(J(b+B+\log L_J+1)^{r_0})$. At requested precision $P=O(N)$, this is polynomial in $N$ for every node. The finitely many algebraic gate entries are enclosed once by the minimal-polynomial bisection in [F4], in $O(P^3)$ time. The recursion tree has at most $3^J$ nodes. After this precomputation, direct evaluation of all word matrices costs at most $O(3^J J L_J P^2)$ bit operations; the remaining fixed-dimensional interval routines and derived target-name evaluations cost at most $O(3^J J(P+B+\log L_J+1)^{r_0})$. Since $J=O(\log N)$, $5^J=O(N^{\log_{3/2}5})$ and $3^J=O(N^{\log_{3/2}3})$, each of these costs, together with reading $\varepsilon$ and printing the expanded output, is bounded by $O((N+s_\varepsilon)^{c+10})$. [F1, F2, F4, step 1.1, step 5.1, algebra] ∎

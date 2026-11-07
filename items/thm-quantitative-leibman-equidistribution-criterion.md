---
dependency_level: 9
id: thm-quantitative-leibman-equidistribution-criterion
kind: theorem
title: Quantitative Leibman equidistribution criterion
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-total-equidistribution-of-a-nil-orbit
  - def-malcev-basis-and-rationality
  - def-polynomial-sequence-on-a-filtered-group
  - lem-finite-nilpotent-exponential-and-bch-calculus
  - lem-quantitative-malcev-polynomial-coordinate-calculus
  - lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates
  - lem-rational-subgroups-have-quantitatively-adapted-malcev-bases
  - lem-quantitative-malcev-metric-and-subgroup-comparisons
  - lem-quantitative-torus-fourier-and-linear-recurrence
  - lem-quantitative-polynomial-weyl-and-recurrence
  - lem-vertical-fourier-and-bracket-polynomial-reductions
  - lem-rational-polynomial-nil-orbits-have-bounded-period
  - lem-relative-square-polynomial-orbits-have-lower-degree
  - lem-polynomial-coefficient-recovery-and-affine-extrapolation
  - lem-finer-filtration-factorization-from-a-quadratic-character-obstruction
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ben Green and Terence Tao, On the quantitative distribution of polynomial nilsequences – erratum
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v179-n3-p08-p.pdf
      locator: Introduction and Section 4 minor errata, printed pp. 1175–1176 and 1182–1183
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Theorem 1.16, printed p. 473; Theorem 2.9, printed p. 480; proof in Section 7
    - title: Bob Hough, Math 639 Lecture 16, Equidistribution on nilmanifolds
      url: https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf
      locator: Quantitative Leibman theorem statement, pp. 21–22; proof scope noted in batch evidence
---

## Statement

Let $m,d\geq0$, $N\geq1$, and $0<\delta<1/2$. Let $G/\Gamma$ be an
$m$-dimensional nilmanifold with a filtration of degree $d$ and a
$1/\delta$-rational Mal’cev basis $X$ adapted to that filtration. If
$g\in\operatorname{poly}(\mathbb Z,G_\bullet)$ and
$(g(n)\Gamma)_{n\in[N]}$ is not $\delta$-equidistributed, then there are
constants $C,c>0$ depending only on $m,d$ and a nontrivial horizontal
character $\eta:G\to\mathbb R/\mathbb Z$ such that

$$0<|\eta|\leq C\delta^{-c}\qquad\text{and}\qquad \|\eta\circ g\|_{C^\infty[N]}\leq C\delta^{-c}.$$

## Statement references

[Green and Tao, Theorems 1.16 and 2.9](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

[Hough, Math 639 Lecture 16](https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf)

## Facts & Assumptions

**Given:** The nilmanifold, filtration, supplied adapted $\delta^{-1}$-rational basis, polynomial sequence and failure of equidistribution in the Statement.

[F1] The supplied global chart gives finite exponential/BCH calculus, exponential subalgebras and central quotients without a choice assumption. [[lem-finite-nilpotent-exponential-and-bch-calculus]]

[F2] Coordinate operations and rational basis changes have uniformly bounded degree and polynomially bounded rational coefficients; in positive dimension there is a nonzero horizontal character of modulus at most a fixed power of the rationality bound. [[lem-quantitative-malcev-polynomial-coordinate-calculus]]

[F3] Polynomial sequences form a group, permit integer affine substitution and have weighted coordinates and an ordered group-valued Newton expansion. [[lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates]]

[F4] Rational subalgebras and filtrations have lattice intersections and quantitatively adapted Mal’cev bases. [[lem-rational-subgroups-have-quantitatively-adapted-malcev-bases]]

[F5] Coordinate, group, subgroup and quotient metrics obey the stated polynomial comparisons; bounded-coordinate left translation has polynomial Lipschitz loss. Central quotients preserve the normalized invariant probability and allow descent of invariant Lipschitz functions. [[lem-quantitative-malcev-metric-and-subgroup-comparisons]]

[F6] The linear torus criterion and strong linear recurrence, with its explicit bounded-length alternative, have uniform power bounds. [[lem-quantitative-torus-fourier-and-linear-recurrence]]

[F7] Finite van der Corput applies to the zero-extended sequence, retaining its interval boundaries; polynomial recurrence has the stated uniform powers and explicit bounded-length alternative. [[lem-quantitative-polynomial-weyl-and-recurrence]]

[F8] Vertical Fourier reduction, the corrected bracket-polynomial lemma and its unrestricted-linear-coefficient alternative have the stated uniform powers. [[lem-vertical-fourier-and-bracket-polynomial-reductions]]

[F9] Rational polynomial sequences have bounded right-coset periods and, by finitely many interpolation samples, polynomially bounded common coordinate-coefficient denominators. [[lem-rational-polynomial-nil-orbits-have-bounded-period]]

[F10] The relative square has the corrected lower-degree polynomial filtration, a bounded rational adapted basis, uniformly Lipschitz tests and the character decomposition described below. [[lem-relative-square-polynomial-orbits-have-lower-degree]]

[F11] Polynomial coefficient recovery and scale-aware affine extrapolation have the stated fixed-power bounds; the latter permits a progression start of size comparable to $N$. [[lem-polynomial-coefficient-recovery-and-affine-extrapolation]]

[F12] A nonzero bounded real character on $G_2$ annihilating $[G,G]$, with small composition on the nonlinear part, gives the corrected finer-filtration factorization, strict nonlinearity decrease, horizontal smooth-factor control and a rational periodic factor. [[lem-finer-filtration-factorization-from-a-quadratic-character-obstruction]]

[F13] Equidistribution uses the full Lipschitz norm and normalized invariant probability. [[def-total-equidistribution-of-a-nil-orbit]]

[F14] Right differences, the circle binomial coefficients and their $C^\infty[N]$ seminorm use the stated conventions. [[def-polynomial-sequence-on-a-filtered-group]]

[F15] Horizontal characters annihilate the lattice and have integral coordinate vectors; rationality and the coordinate-chain metrics use the supplied adapted basis. [[def-malcev-basis-and-rationality]]

## Proof

1.1 Write $P(\delta)=C\delta^{-c}$, allowing its positive constants to increase finitely many times in this proof, with dependence only on dimension and degree. In positive dimension the nilpotence step is at most $m$: equality of two successive nonzero lower central terms would force equality thereafter, so a terminating lower central series strictly drops dimension at every nonzero step. Thus the step dependence of the local coordinate suppliers is also controlled by $m$. Products, fixed powers, maxima and substitution of a fixed power of $\delta$ retain this form. Prove the assertion by outer induction on degree, simultaneously for all dimensions, and inner induction on $s=\dim\operatorname{Lie}(G_2)-\dim[\mathfrak g,\mathfrak g]$, where the latter is the linear span of Lie brackets. The filtration and the degree-two term of finite BCH put this bracket span inside $\operatorname{Lie}(G_2)$, so $0\leq s\leq m$. A relative-square quotient has dimension at most $2m$ and smaller degree; its dimension increase is allowed by the outer hypothesis. The inner induction keeps $G$ and $\Gamma$ fixed and has at most $m$ steps. Thus all exponents ultimately depend only on $m,d$. [given, F1, algebra]

2.1 Dimension zero and degree zero admit no failure of equidistribution. For $d=1$, the filtration makes $G$ abelian; its supplied coordinates identify the quotient with the standard torus, and [F3] makes the orbit affine linear. Apply [F6], removing its constant phase, to prove the claim. In every remaining positive dimension, first dispose of $N\leq P(\delta)$, choosing the threshold large enough for every bounded-length branch used later. By [F2] choose a nonzero horizontal character of modulus at most $P(\delta)$. Its composition has degree at most $d$ by [F3], and each nonconstant binomial coefficient has circle norm at most $1/2$. Hence its seminorm is at most $N^d/2\leq P(\delta)$ after increasing the final fixed power. Below assume $d\geq2$ and $N$ exceeds these finitely prescribed power thresholds. This proves the required coarse obstruction in the bounded-length branch, without asserting an epsilon-sensitive recurrence conclusion there. [F2, F3, F6, F13, F14, step 1.1, algebra]

2.2 Vertical reduction [F8] gives a vertical frequency $\xi$, $|\xi|\leq P(\delta)$, and a test of Lipschitz norm at most one with discrepancy at least $1/P(\delta)$. If $\xi=0$, the test descends to $G/G_d$. By [F1], [F4] and [F5], the truncated quotient has an adapted rational basis, degree at most $d-1$, and the descended test has the required controlled norm and Haar integral. The outer induction, with a smaller fixed power of $\delta$, supplies a nonzero bounded horizontal character on that quotient. Pulling it back preserves its composed circle polynomial and gives the desired bounds on $G$. Hence assume $\xi\ne0$; invariance of Haar probability under a vertical translation of nontrivial phase forces the test's integral to vanish, so its orbit average has modulus at least $1/P(\delta)$. [F1, F4, F5, F8, F13, step 1.1, algebra]

3.1 Write $g(0)=u\lambda$ with $u$ in the bounded fundamental domain and $\lambda\in\Gamma$. Replace $g(n)$ by $u^{-1}g(n)\lambda^{-1}$ and the test $F(x)$ by $F(ux)$. Polynomiality follows from [F3]; bounded left translation costs only $P(\delta)$ by [F5] and preserves the nontrivial vertical frequency by centrality. The new sequence is identity at zero, and horizontal compositions differ only by constants. Next write its value at one as $v\mu$ with $v$ bounded and $\mu\in\Gamma$, and replace the sequence by $g(n)\mu^{-n}$. This is polynomial, has the same right cosets, and changes each horizontal composition by the zero circle polynomial $n\eta(\mu)$. After renaming and normalizing the test, we have $g(0)=e$, $b=g(1)$ with $|\psi(b)|\leq1$, $F$ of nonzero vertical frequency, zero Haar mean, controlled Lipschitz norm and a power-sized nonzero orbit average. All losses are absorbed by shrinking $\delta$ by a fixed power. [F3, F5, F13, F15, step 2.2, algebra]

4.1 Apply the truncated van der Corput assertion [F7] to $F(g(n)\Gamma)$, zero outside $[N]$. It gives a power-density set of positive shifts $h$ with a power-sized correlation on $[N-h]$. Its length $N-h$ is at least $N/P(\delta)$ because the summands are bounded. Put $f(n)=g(n)b^{-n}$ and $a_h=\{b^h\}$, the bounded fundamental representative. The correlation is the average, on that same interval, of the relative-square sequence and test $v_h(n)=(a_h^{-1}f(n+h)b^na_h,f(n)b^n),\qquad T_h(x,y)=F(a_hx\Gamma)\overline{F(y\Gamma)}.$ Indeed $a_h[b^h]=b^h$, so the first tested coset is $g(n+h)\Gamma$ and the second is $g(n)\Gamma$. No unrestricted average over all of $[N]$ is substituted for the truncated correlation. [F3, F5, F7, step 3.1, algebra]

5.1 By [F10], $v_h$ is polynomial in $H=G\times_{G_2}G$ for $H_i=G_i\times_{G_{i+1}}G_i$, and then on $H/D$, where $D=\{(z,z):z\in G_d\}$, with degree at most $d-1$. Its adapted rational basis and $\|T_h\|_{\mathrm{Lip}}\leq P(\delta)$ are uniform in $h$. The order-zero assertion uses $f(0)=f(1)=e$. Since $d\geq2$, $(z,e)\in H$ for $z\in G_d$; its action multiplies $T_h$ by $e(\xi(z))$. Choosing a nontrivial phase and using Haar invariance shows the test has mean zero, before and after quotienting by $D$. Thus its nonzero average is a genuine discrepancy. Apply outer degree induction at length $N-h$, and enlarge the seminorm scale to $N$ at fixed-power cost. Pigeonholing the at most $P(\delta)$ integral character vectors of bounded size leaves one nonzero character $\eta$ of $H/D$ and a power-density set of shifts with $\|\eta\circ v_h\|_{C^\infty[N]}\leq P(\delta)$. [F4, F5, F10, step 1.1, step 2.1, step 4.1, algebra]

6.1 Pull $\eta$ back to $H$. Its decomposition in [F10] is $\eta(x,y)=\eta_1(y)+\eta_2(xy^{-1})$, where $\eta_1$ is horizontal on $G$, $\eta_2$ is horizontal on $G_2$ and annihilates $[G,G_2]$, and both moduli are at most $P(\delta)$. If $\eta_2=0$, then $\eta_1\ne0$ and the preceding bound is already the required bound for $\eta_1\circ g$. Otherwise the commutator identities, modulo the subgroup annihilated by $\eta_2$, give $\eta(v_h(n))=P(n)+Q(n+h)-Q(n)+\sigma(h)n,$ where $P=\eta_1\circ g$, $Q=\eta_2\circ f$, and $\sigma(h)=\eta_2([b,a_h])$. Here $P(0)=0$ and $Q(0)=Q(1)=0$. This notation $P(n)$ for a circle polynomial is separate from the bound $P(\delta)$. [F10, step 5.1, algebra]

7.1 Coefficient recovery [F11], using polynomial recurrence [F7], supplies one positive multiplier at most $P(\delta)$ such that all coefficients $\Delta^iQ(0)$, $i\geq3$, have weighted circle norms at most $P(\delta)$, and, on the retained shifts, $\|\beta+\alpha h+\sigma(h)\|_{\mathbb R/\mathbb Z}\leq P(\delta)/N,\qquad \beta=P(1),\quad\alpha=\Delta^2Q(0).$ Absorb its common multiplier into $\eta_1,\eta_2,P,Q$; nonzero $\eta_2$ stays nonzero and all moduli retain their power bounds. The coordinate formula for the circle character $\eta_2$ supplies a continuous real lift $\ell(u)=k\cdot\psi(u)$ on $G_2$, vanishing at the identity. Its additive defect is continuous and integer-valued on the connected space $G_2\times G_2$, hence zero; thus $\ell$ is a real homomorphism. For each $x\in G,u\in G_2$, $\ell([x,u])$ is an integer since $\eta_2$ annihilates $[G,G_2]$; its continuity and value zero at the identity make it zero. Commutator identities now make $x\mapsto\ell([b,x])$ a real homomorphism, zero on $G_2$. In coordinates it is $\zeta\cdot\psi(x)$, $|\zeta|\leq P(\delta)$, by [F2] and the bound on $b$. The first $m-\dim G_2$ coordinates of $a_h$ are the fractional parts of $h\gamma$, where $\gamma$ is the corresponding coordinate vector of $b$, since $G/G_2$ is additive and lattice reduction subtracts integral coordinates. Consequently the displayed inequality is $\|\beta+\alpha h+\zeta\cdot\{h\gamma\}\|\leq P(\delta)/N$. [F2, F7, F11, F15, step 6.1, algebra]

8.1 Apply the unrestricted-linear-coefficient bracket alternative [F8]. If it yields a nonzero bounded integral vector $k$ with $\|k\cdot\gamma\|\leq P(\delta)/N$, the corresponding horizontal character on $G/G_2$ has composition $nk\cdot\gamma$ with $g$, since $f(n)\in G_2$. This proves the criterion. In the other outcome there is $1\leq r\leq P(\delta)$ with $\|r\zeta_i\|\leq P(\delta)/N$ for all $i$. Define $\tau_i(x)=r\eta_2([x,\exp(X_i)])$. Each is a horizontal character annihilating $G_2$: additivity follows from the commutator identities and $\eta_2([G,G_2])=0$, and lattice annihilation follows from $\exp(X_i)\in\Gamma$. Its modulus is at most $P(\delta)$ by [F2]. Its composition with $g$ is linear with slope $r\zeta_i$ modulo integers. Any nonzero $\tau_i$ therefore proves the criterion. [F2, F8, F15, step 7.1, algebra]

9.1 Suppose all $\tau_i$ vanish identically. For fixed $i$, $r\ell([x,\exp(X_i)])$ is a continuous integer-valued function of $x\in G$, zero at the identity, and therefore zero everywhere. For any fixed $x$, the commutator identities and $\ell([G,G_2])=0$ make $y\mapsto\ell([x,y])$ additive. On the one-parameter subgroup $\exp(tX_i)$ it is consequently $t\ell([x,\exp(X_i)])=0$. Every $y$ is an ordered product of these one-parameter factors, so $\ell([x,y])=0$ for all $x,y$. Thus $\ell$ annihilates $[G,G]$ as a real homomorphism, and differentiating the two-parameter commutator identity also annihilates the Lie bracket span. The nonzero circle character $\eta_2$ has nonzero real lift $\ell$. In particular $\zeta=0$. Since $\ell$ is nonzero on $\operatorname{Lie}(G_2)$, this branch has $s\geq1$. Strong linear recurrence [F6] applied to $\beta+\alpha h$ gives $\|q\alpha\|\leq P(\delta)/N^2$ for a positive bounded multiplier; its bounded-length alternative was excluded in step 2.1. Combining with the higher coefficients from step 7.1, and using a common positive multiplier, gives $\|\ell\circ f\pmod{\mathbb Z}\|_{C^\infty[N]}\leq P(\delta)$. Apply [F12] to obtain $g=\varepsilon g'\gamma$, where $g'$ is polynomial for $G'_0=G'_1=G$, $G'_i=G_i\cap\ker\ell$ for $i\geq2$. This is a rational filtration of degree at most $d$, with nonlinearity index $s-1$ and a bounded rational adapted basis. The smooth factor is $(P(\delta),N)$-smooth and has bounded horizontal compositions; the rational factor has right-coset period $q\leq P(\delta)$. [F4, F6, F12, step 1.1, step 2.1, step 7.1, step 8.1, algebra]

10.1 First discard the initial term of each residue progression modulo $q$, then split the remaining terms into blocks of $L=\lfloor N/P_1(\delta)\rfloor$ terms and a shorter final block, where the fixed power $P_1$ is sufficiently large. The total omitted portion is at most $q(L+1)$, hence contributes less than a quarter of the nonzero mean from step 3.1. The variation of $\varepsilon$ over each block is at most $qL P(\delta)/N$ by smoothness and the triangle inequality. Choose $P_1$ also to make the corresponding test error less than a quarter of that mean. Weighted pigeonholing gives a block $n=n_0+qt$, $1\leq t\leq L$, whose predecessor $n_0$ belongs to $[N]$ because the first residue term was discarded. Every successive comparison from this predecessor to a block term lies in the smoothness interval. On this block freezing $\varepsilon$ at $n_0$ leaves a power-sized nonzero average. Large $N$ ensures $L\geq N/P_2(\delta)\geq1$. The rational factor has constant right coset there; replace its value by $v=\{\gamma(n_0)\}$ in the bounded fundamental domain. Put $u=\{g(n_0)\}$, $w(t)=u^{-1}\varepsilon(n_0)g'(n_0+qt)v,\qquad \widetilde F(x)=F(ux).$ The frozen average is exactly that of $\widetilde F(w(t)\Gamma)$. The test has mean zero and controlled Lipschitz norm by [F5]. Constants are polynomial for the finer filtration because its first two terms are $G$; [F3] therefore puts $w$ in that polynomial group. No assertion that $w(0)=e$ is needed. [F3, F5, F12, step 3.1, step 9.1, construct, algebra]

11.1 Apply inner induction at $s-1$, or outer induction if the degree decreased, to this discrepancy. It gives a nonzero horizontal character $\theta$ of bounded modulus in the new basis and $\|\theta\circ w\|_{C^\infty[L]}\leq P(\delta)$. Basis conversion [F2] bounds its modulus in the original basis. Constant factors in $w$ only add a constant circle value; enlarge the scale from $L$ to $N$ and apply scale-aware extrapolation [F11] with $|n_0|\leq C N$ and step $q\leq P(\delta)$. After a positive bounded multiplier, $\|\theta\circ g'\|_{C^\infty[N]}\leq P(\delta)$. Finite-sample interpolation [F9] supplies a common polynomially bounded denominator for every coordinate coefficient of $\gamma$. Multiplying $\theta$ by it makes $\|\theta\circ\gamma\|_{C^\infty[N]}=0$ and preserves nonzero status. The horizontal control in [F12] also gives $\|\theta\circ\varepsilon\|_{C^\infty[N]}\leq P(\delta)$. Additivity and the circle triangle inequality now yield $\|\theta\circ g\|_{C^\infty[N]}\leq\|\theta\circ\varepsilon\|_{C^\infty[N]}+\|\theta\circ g'\|_{C^\infty[N]}+\|\theta\circ\gamma\|_{C^\infty[N]}\leq P(\delta).$ Undoing the normalizations of step 3.1 preserves this seminorm. All nonzero character moduli and all losses are fixed powers of $\delta^{-1}$ depending only on $m,d$, proving the complete claim. [F2, F9, F11, F12, F14, step 1.1, step 9.1, step 10.1, algebra] ∎

## Remarks

The local proof reconstructs the one-variable induction in Green–Tao Section 7, using the corrections in the 2014 erratum at Proposition 5.3, Proposition 7.2 and Lemma 7.8. It handles degree one separately, retains the actual truncated correlation interval and proves the relative-square test has mean zero. The scaled extrapolation, real kernel, nonzero-character and bounded-length branches are explicit. No unequal-sides multiparameter assertion is used. The actual targeted source-reading limits are recorded in the batch source evidence; this proof does not claim the entire paper or lecture was independently read.

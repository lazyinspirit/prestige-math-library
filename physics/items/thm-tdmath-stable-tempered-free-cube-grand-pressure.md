---
id: thm-tdmath-stable-tempered-free-cube-grand-pressure
kind: theorem
title: "Finite free-cube grand pressure for stable power-tempered pair potentials"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: [def-tdmath-stable-power-tempered-particle-model, lem-tdmath-particle-exponential-cutoff, lem-tdmath-separated-cube-tail-bound, lem-tdmath-measure-integral-agrees-with-root-lebesgue-integral, def-tdmath-measure-integral, def-countable-choice, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-lebesgue-measure-of-a-box-of-every-kind, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-borel-products-of-euclidean-spaces-are-euclidean-borel, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-real-power, thm-real-power-laws, thm-real-power-continuity-and-derivatives, def-natural-logarithm, thm-natural-logarithm-laws, thm-exponential-limits-and-range, lem-integer-part, def-factorial-and-falling-factorial]
dependency_roles:
  def-tdmath-stable-power-tempered-particle-model: mathematical-premise
  lem-tdmath-particle-exponential-cutoff: mathematical-premise
  lem-tdmath-separated-cube-tail-bound: mathematical-premise
  lem-tdmath-measure-integral-agrees-with-root-lebesgue-integral: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
  def-countable-choice: mathematical-premise
  prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  def-real-power: mathematical-premise
  thm-real-power-laws: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-exponential-limits-and-range: mathematical-premise
  lem-integer-part: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Stefan Adams, Mathematical Statistical Mechanics, MPI Lecture Note 30, §5.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-3006.pdf"
    - title: "M. E. Fisher and J. L. Lebowitz, Asymptotic Free Energy of a System with Periodic Boundary Conditions, §§II–III, VI"
      url: "https://cmsr.rutgers.edu/images/people/lebowitz_joel/publications-archived/jll.pub_69.pdf"
    - title: "D. Ruelle, Classical Statistical Mechanics of a System of Particles"
      url: "https://www.e-periodica.ch/cntmng?pid=hpa-001%3A1963%3A36%3A%3A1128&bot=1"
---

## Statement

Assume $\mathrm{AC}_\omega$ and let $d\ge1$. Let $\phi$ be a stable,
power-tempered pair potential as in
[[def-tdmath-stable-power-tempered-particle-model]], with constants
$B,C,R,\epsilon$ as there. Fix activity $a>0$ and inverse-energy parameter
$\beta>0$ in fixed reference units. Use the free-boundary grand partition sums
$\Xi_L(a,\beta)$ defined in
[[lem-tdmath-particle-exponential-cutoff]]. For $L\ge1$, put
$$p_L(a,\beta):=L^{-d}\log\Xi_L(a,\beta).$$
Then the limit
$$p(a,\beta):=\lim_{L\to\infty}p_L(a,\beta)$$
exists as a finite real number. The assertion is for cubes with free boundary
and the displayed power-tail hypothesis.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $d\ge1$, a stable power-tempered pair potential, $a,\beta>0$, and the free-cube partitions in [[lem-tdmath-particle-exponential-cutoff]].

[F1] [[def-tdmath-stable-power-tempered-particle-model]] defines $U_N$, stability, and the power-tail bound: for $\|x\|_2\ge R$, $\phi(x)$ is real and its real absolute value $|\phi(x)|$ is at most $C\|x\|_2^{-d-\epsilon}$.

[F2] [[lem-tdmath-particle-exponential-cutoff]] gives the exact grand partition definition, $1\le\Xi_L\le e^{QL^d}$, and the particle-cutoff lower bound, where $Q=ae^{\beta B}$.

[F3] [[lem-tdmath-separated-cube-tail-bound]] gives the uniform bound $D\le(C/2)Mn^2S_{d,\epsilon}g^{-d-\epsilon}$ on all cross-cube energies.

[F4] [[def-tdmath-measure-integral]] defines the local nonnegative integral as the supremum over simple minorants; that current batch-11 carrier is a draft definition with its interface inspected. The local bridge [[lem-tdmath-measure-integral-agrees-with-root-lebesgue-integral]] proves that this integral agrees with the shared nonnegative Lebesgue integral. This is the interface needed to apply the published Tonelli theorem to the partition integrals.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] states that for sigma-finite measure spaces and a nonnegative product-measurable function, the product integral equals either iterated integral. The Euclidean product Borel theorem [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]] ensures the finite-configuration integrand is product-measurable.

[F6] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] supplies the rectangle formula and uniqueness for the finite product measures; the Lebesgue factors are sigma-finite by [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]].

[F7] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]] preserves each cube integral under a common translation of its particle coordinates. The corresponding finite product measure is translation-invariant by the rectangle formula and uniqueness in [F6].

[F8] [[def-countable-choice]] is the exact $\mathrm{AC}_\omega$ assumption used by the Lebesgue-measure suppliers [[thm-lebesgue-measure-of-a-box-of-every-kind]] and [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]. No full arbitrary-index choice is used in the block construction.

[F9] Positive real powers obey the exponent laws and are continuous on positive bases ([[def-real-power]], [[thm-real-power-laws]], [[thm-real-power-continuity-and-derivatives]]). The natural logarithm is continuous, strictly increasing and onto $\mathbb R$ on $(0,\infty)$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]); together with [[thm-exponential-limits-and-range]], this gives $\ell^\gamma\to0$ for every $\gamma<0$ and $\ell^\gamma\to\infty$ for every $\gamma>0$.

[F10] [[lem-integer-part]] gives an integer $m$ with $m\le x<m+1$ for every real $x$.

[F11] Factorials satisfy $0!=1$ and the recursion $(N+1)!=(N+1)N!$ ([[def-factorial-and-falling-factorial]]).

[A1] Since $p_L$ is defined for $L\ge1$, write
$$\limsup_{L\to\infty}p_L:=\inf_{T\ge1}\sup_{L\ge T}p_L,\qquad \liminf_{L\to\infty}p_L:=\sup_{T\ge1}\inf_{L\ge T}p_L.$$
These are finite because [F2] bounds $p_L$ in $[0,Q]$.

## Proof

1.1 Set $\alpha:=\frac12\bigl(1+d/(d+\epsilon)\bigr)$ and
$g_\ell:=\ell^\alpha$. Then $d/(d+\epsilon)<\alpha<1$ and
$\ell^d g_\ell^{-d-\epsilon}=\ell^{d-\alpha(d+\epsilon)}\to0$ while
$g_\ell/\ell\to0$. Fix a sufficiently large $\ell\ge1$ so that
$g_\ell\ge R$. For $L\ge\ell+g_\ell$, set
$m_L:=\lfloor L/(\ell+g_\ell)\rfloor$. Since $L/(\ell+g_\ell)\ge1$, [F10]
gives $m_L\ge1$ and
$m_L(\ell+g_\ell)\le L<(m_L+1)(\ell+g_\ell)$. Place $M_L=m_L^d$ cubes
$$C_j=(\ell+g_\ell)j+[0,\ell]^d,\qquad j\in\{0,\ldots,m_L-1\}^d.$$
They lie inside $[0,L]^d$ and have pairwise gaps at least $g_\ell$.
[given, F9, F10, construct]

2.1 First, if $T$ is a bijection whose map and inverse are measurable and that preserves measure, meaning $\mu(T^{-1}A)=\mu(A)$ for every measurable $A$, then $\mu(TA)=\mu(A)$ as well by applying this identity to $TA$; thus $T^{-1}$ also preserves measure. Such a map preserves nonnegative integrals: for an indicator $\mathbf1_A$, $\int\mathbf1_A\circ T\,d\mu=\mu(T^{-1}A)=\mu(A)=\int\mathbf1_A\,d\mu$; finite sums give the same equality for simple functions. If $f\ge0$ is measurable, composition with $T$ sends every simple minorant of $f$ to a simple minorant of $f\circ T$ with the same simple integral. Taking the supremum in [F4] gives $\int f\,d\mu\le\int f\circ T\,d\mu$, and applying this inequality to $T^{-1}$ and $f\circ T$ gives equality. The same supremum definition shows monotonicity: $f\le h$ implies $\int f\,d\mu\le\int h\,d\mu$. For $N\ge1$ identical Lebesgue factors, a coordinate permutation preserves the finite product measure: the permutation is a Borel isomorphism, so its push-forward is sigma-finite, and that push-forward agrees with the original measure on rectangles by the rectangle formula in [F6]; finite-product uniqueness, obtained by iterating the uniqueness clause in [F6], makes the measures equal. When $N=0$, there is one empty configuration and one empty assignment, so the equality is immediate. Now fix occupancies $0\le N_j\le n_\ell$ with total $N=\sum_jN_j$. The ordered configurations in the disjoint cubes with exactly these occupancies are partitioned by assignments of the $N$ particle labels to cubes. The number of assignments is $N!/(\prod_jN_j!)$: order all $N$ labels, then note that each assignment occurs exactly $\prod_jN_j!$ times from within-cube reorderings. Any two such assignments differ by a permutation of the $N$ labels, and the corresponding coordinate permutation maps one assignment domain to the other. The potential is even, so $U_N$ is invariant under particle-coordinate permutations. The integral invariance just proved therefore makes the assignment-domain integrals equal. [F1, F4, F6, F11, given, step 1.1, algebra]

2.2 Restrict the grand partition sum in $[0,L]^d$ to configurations with no
particles outside these cubes and at most $n_\ell$ particles in each cube,
where $n_\ell$ is the cutoff from [F2]. If two cubes have index difference
$k\ne0$, the coordinate gap in a coordinate attaining $\|k\|_\infty$ is at
least $\|k\|_\infty g_\ell$; [F3] therefore bounds the total absolute
inter-cube energy by
$$D_L\le\frac C2M_Ln_\ell^2S_{d,\epsilon}g_\ell^{-d-\epsilon}.$$
Thus $U_N=\sum_jU_{N_j}^{(j)}+U_{\mathrm{cross}}$ with
$U_{\mathrm{cross}}\le D_L$, and
$e^{-\beta U_N}\ge e^{-\beta D_L}\prod_j e^{-\beta U_{N_j}^{(j)}}$;
this remains true when an internal energy is $+\infty$, since both sides then
vanish. [F1, F2, F3, given, step 1.1, algebra]

3.1 On each assignment domain from step 2.1, the pointwise lower bound in
step 2.2 factors into nonnegative within-cube integrands. Monotonicity from
step 2.1 and repeated application of [F5] and the rectangle formula in [F6]
factor the resulting lower bound's integral into the product of the translated
one-cube integrals. For a cube indexed by $j$ with $N_j\ge1$, common
translation by $(\ell+g_\ell)j$ is a Borel isomorphism mapping
$[0,\ell]^{dN_j}$ onto $C_j^{N_j}$ and preserves its finite product measure:
the push-forward is sigma-finite and, on rectangles, this follows from
single-coordinate translation invariance [F7] and the rectangle formula [F6];
uniqueness in [F6] gives equality of the product measures. Pair differences,
hence the within-cube integrand, are
unchanged by this translation, so the integral invariance proved in step 2.1
identifies the integral over $C_j^{N_j}$ with its origin-centered integral over
$[0,\ell]^{dN_j}$. When $N_j=0$, the corresponding factor is $Z_{\ell,0}=1$.
Multiplying by
$a^N/N!$ cancels the label count from step 2.1, leaving
$e^{-\beta D_L}\prod_j Z_{\ell,N_j}$. Summing over the finitely many
occupancy vectors and expanding the finite product of cutoff sums from [F2]
gives
$$\Xi_L\ge e^{-\beta D_L}(\Xi_\ell^{\mathrm{cut}})^{M_L}.$$
[F2, F4, F5, F6, F7, F8, step 2.1, step 2.2, algebra]

4.1 The integer-part bounds in step 1.1 give
$L/(\ell+g_\ell)-1<m_L\le L/(\ell+g_\ell)$, so
$m_L/L\to(\ell+g_\ell)^{-1}$ and $M_L/L^d\to(\ell+g_\ell)^{-d}$.
By [F2], $\Xi_\ell^{\mathrm{cut}}\ge(1-e^{-\ell^d})\Xi_\ell$, so
$\log\Xi_\ell^{\mathrm{cut}}\ge\ell^dp_\ell+\log(1-e^{-\ell^d})$.
Taking logarithms in step 3.1, dividing by $L^d$, and using step 2.2 gives
$$p_L\ge\frac{M_L}{L^d}\left(\ell^dp_\ell+\log(1-e^{-\ell^d})-\frac{\beta C}{2}n_\ell^2S_{d,\epsilon}g_\ell^{-d-\epsilon}\right).$$
Taking the lower limit and using the volume ratio above yields the same bound
with $M_L/L^d$ replaced by $(\ell+g_\ell)^{-d}$. The cutoff definition [F2]
and $\ell\ge1$ give
$n_\ell\le K\ell^d+1\le(K+1)\ell^d$. Factoring
$(\ell/(\ell+g_\ell))^d$ and using this estimate in the negative error term
therefore gives
$$\liminf_{L\to\infty}p_L\ge\left(\frac{\ell}{\ell+g_\ell}\right)^d\left[p_\ell+\ell^{-d}\log(1-e^{-\ell^d})-\frac{\beta C}{2}(K+1)^2S_{d,\epsilon}\ell^dg_\ell^{-d-\epsilon}\right].$$
[A1, F2, F9, step 1.1, step 2.2, step 3.1, algebra]

5.1 As $\ell\to\infty$, the prefactor tends to $1$. Also $e^{-\ell^d}\to0$, so continuity of $\log$ at $1$ gives $\log(1-e^{-\ell^d})\to0$; since $\ell^{-d}\to0$, their product $\ell^{-d}\log(1-e^{-\ell^d})$ tends to zero. The cross-energy error tends to zero because $d-\alpha(d+\epsilon)<0$ by step 1.1. The replacement of the prefactor times $p_\ell$ by $p_\ell$ has error at most $Q\bigl[1-(\ell/(\ell+g_\ell))^d\bigr]\to0$ by [F2]. Thus for every $\eta>0$ there is $T$ such that every $\ell\ge T$ makes the right side of step 4.1 at least $p_\ell-\eta$. [F2, F9, step 1.1, step 4.1, algebra]

6.1 Let $\overline p=\limsup_{\ell\to\infty}p_\ell$. By [A1], for every $\eta>0$ and every $T\ge1$ there is an $\ell\ge T$ with $p_\ell>\overline p-\eta$; otherwise the tail supremum from $T$ onward would be at most $\overline p-\eta$, contradicting the infimum defining $\overline p$. Choose $T$ large enough for step 5.1. Then $\liminf_{L\to\infty}p_L\ge\overline p-2\eta$. Letting $\eta\downarrow0$ shows $\liminf p_L\ge\limsup p_L$. [A1, step 5.1, choose, algebra]

7.1 For any $S,T\ge1$, choose $L\ge\max(S,T)$. Then $\inf_{x\ge S}p_x\le p_L\le\sup_{x\ge T}p_x$. Taking the supremum over $S$ and then the infimum over $T$ proves $\liminf p_L\le\limsup p_L$ by [A1]. Together with step 6.1, the two finite tail bounds equal a number $p$. For every $\eta>0$, their definitions give tail thresholds with $\inf_{L\ge T_-}p_L>p-\eta$ and $\sup_{L\ge T_+}p_L<p+\eta$; hence $|p_L-p|<\eta$ for all sufficiently large $L$. The limit is finite by [F2]. This proves existence for the specified free-cube reduced grand pressure. [A1, F2, step 6.1, algebra] ∎

## Remarks

The proof uses fixed free-boundary cubes. It does not establish a canonical fixed-density limit, arbitrary-boundary independence, or the corresponding result for every decreasing integrable tail. In particular, stability alone does not enter as a claim about arbitrary van Hove shapes; those are separate interfaces with additional hypotheses. The displayed pressure is per reference volume and is the reduced pressure (the classical pressure multiplied by $\beta$). If $L$ is measured in units of a reference length $\ell_0$ and $\beta$ is the numerical inverse temperature in units $E_0^{-1}$, then the physical pressure is $P=E_0p/(\beta\ell_0^d)$. Without that specified classical interpretation, this theorem asserts only the mathematical existence of the reduced limit.

---
id: lem-mobius-rational-conjugation-preserves-total-equidistribution
kind: lemma
title: Total equidistribution under rational conjugation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-total-equidistribution-of-a-nil-orbit
  - def-malcev-basis-and-rationality
  - def-polynomial-sequence-on-a-filtered-group
  - lem-quantitative-malcev-polynomial-coordinate-calculus
  - lem-rational-subgroups-have-quantitatively-adapted-malcev-bases
  - lem-quantitative-malcev-metric-and-subgroup-comparisons
  - lem-quantitative-polynomial-weyl-and-recurrence
  - thm-quantitative-leibman-equidistribution-criterion
  - lem-polynomial-coefficient-recovery-and-affine-extrapolation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, The Möbius function is strongly orthogonal to nilsequences
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf
      locator: Section 2, printed pp. 546–547
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Appendix A.9, A.13, A.16–A.17
---

## Statement

Fix a dimension $m$ and filtration degree $d$. There are constants
$C\geq1$ and $0<c<1$, depending only on $m,d$, with the following
property. Let $G/\Gamma$ have an $M$-rational adapted Mal’cev basis $X$,
$M\geq2$. Let $G'\leq G$ be rational, put $\Gamma'=G'\cap\Gamma$, and
supply an adapted Mal’cev basis $X'$ for $G'/\Gamma'$ whose vectors
have rational $X$-coordinates of height at most $M$. Let
$g'\in\operatorname{poly}(\mathbb Z,G'_\bullet)$ be totally
$\delta$-equidistributed on $[N]$, $0<\delta<1/2$. Let $\gamma\in G$
be $M$-rational, and put
$$H=\gamma^{-1}G'\gamma,\qquad \Lambda=H\cap\Gamma, \qquad h(n)=\gamma^{-1}g'(n)\gamma.$$
Then $\Lambda$ is a lattice and $H/\Lambda$ has an adapted Mal’cev
basis of rationality complexity at most $CM^C$ in which
$(h(n)\Lambda)_{n\in[N]}$ is totally $E$-equidistributed, where
$$E=CM^C\delta^c.$$ The bound is a weakening of the original parameter.
If $\gamma$ also has $X$-coordinates of height at most $M$, the new
basis vectors have rational $X$-coordinates of height at most $CM^C$.
For unrestricted rational $\gamma$, no bound on those ambient coordinate
numerators is asserted.

## Statement references

[Green and Tao, Section 2](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf)

[Green and Tao, Appendix A](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

## Facts & Assumptions

[F1] Rational coordinate calculus, conjugation, rational subgroups, lattice
intersections and adapted bases have fixed-power bounds in the supplied
rationality and coordinate heights.
[[lem-quantitative-malcev-polynomial-coordinate-calculus]]
[[lem-rational-subgroups-have-quantitatively-adapted-malcev-bases]]

[F2] Bounded rational basis changes and quotient metrics have fixed-power
comparisons; Haar probability is the normalized invariant probability.
[[lem-quantitative-malcev-metric-and-subgroup-comparisons]]

[F3] Failure of equidistribution produces a bounded nonzero horizontal
character and a bounded composed $C^\infty$ seminorm.
[[thm-quantitative-leibman-equidistribution-criterion]]

[F4] A character obstruction on a long affine progression extrapolates to
$[N]$ with fixed-power losses, including a progression start of size $N$.
[[lem-polynomial-coefficient-recovery-and-affine-extrapolation]]

[F5] Polynomiality and total-equidistribution conventions are those of
[[def-polynomial-sequence-on-a-filtered-group]] and
[[def-total-equidistribution-of-a-nil-orbit]].

## Proof

**Given:** The data in the Statement. Fixed-power bounds in this proof
depend only on $m,d$.

1.1 First suppose $\gamma$ has rational coordinates of height at most a fixed power of $M$. Conjugation has bounded rational coordinate polynomials by F1. Hence $H$ is rational and F1 supplies its lattice and an adapted basis $Y$ of fixed-power complexity and ambient coordinate heights. The differential of $T:G'\to H$, $T(x)=\gamma^{-1}x\gamma$, is a bounded rational linear isomorphism in the supplied adapted bases. If $\eta$ is horizontal on $H/\Lambda$, its real homomorphism lift pulls back to a rational coefficient vector on $G'$. One positive integer $v\leq CM^C$, independent of $\eta$, clears that matrix's denominators. Then $\theta=v\eta\circ T$ is horizontal on $G'/\Gamma'$ and $|\theta|\leq CM^C|\eta|$; if $\eta\ne0$, then $\theta\ne0$. To check lattice annihilation, write elements of $\Gamma'$ as products of the integer powers of the supplied basis exponentials; the cleared real character takes integer values on each such generator, hence on their products. This uses rational coefficient matrices, not an assertion that conjugation descends between the two quotients. [F1, F2, algebra]

2.1 Let $0<E<2$, and suppose total $E$-equidistribution of $h$ fails. There are a progression $P\subseteq[N]$, $L=|P|\geq EN$, and a Lipschitz test with discrepancy greater than $E$ times its norm. Write $P=\{a+bt:1\leq t\leq L\}$. Apply F3 to this polynomial orbit, using discrepancy parameter $\tau=c_1\min(E,M^{-D},1)$, where $D$ is large enough for the basis rationality and $c_1$ is small. Thus $\tau^{-1}$ majorizes that rationality and $\tau<1/2$. The resulting nonzero $\eta$ has modulus and composed seminorm at most $CM^D E^{-D}$. Step 1.1 supplies a nonzero $\theta$ with the same form of bound on $P$. If $L\geq2$, F4 extrapolates to $[N]$, since $b\leq2/E$ and $|a|\leq3N/E$. If $L=1$, then $N\leq E^{-1}$ and $N^j\|\alpha_j\|\leq N^d/2$ bounds every composed seminorm directly. In both cases, increasing $D$ once gives $$0<|\theta|\leq B,\qquad \|\theta\circ g'\|_{C^\infty[N]}\leq B, \qquad B=C_1M^D E^{-D}.$$ [F3, F4, F5, step 1.1, algebra]

3.1 The test $e(\theta(x))$ has Haar integral zero, since $\theta$ is nonzero and translation invariance forces its integral to be its product with some unit scalar different from one. Its Lipschitz norm is at most $C_2M^DB$. Lifts of the nonconstant binomial coefficients of $\theta\circ g'$ have size at most $B/N^j$. On $[L_0]$, $L_0=\max(1,\lfloor N/(C_dB)\rfloor)$, its average has modulus at least $1/2$: if $L_0\geq2$ the phase varies by less than $1/10$ after choosing $C_d$ large, and if $L_0=1$ the modulus is one. Also $L_0\geq N/(2C_dB)$. Total $\delta$-equidistribution is therefore contradicted whenever $\delta C_3M^DB<1/4$. [F2, F5, step 2.1, algebra, construct]

4.1 Choose $c>0$ so small that $cD<1/2$, enlarge the final exponent $C$ so that $C>3D$, and enlarge its leading constant. With $E=CM^C\delta^c<2$, substitution in step 2.1 gives $\delta M^DB\leq C_4 M^{2D-CD}\delta^{1-cD}$, which is as small as required after the final leading constant is increased. Thus the contradiction in step 3.1 excludes every failure. If $E\geq2$, any probability average and Haar integral differ by at most $2\|F\|_\infty$, so total $E$ holds trivially. This proves the claimed transfer for bounded-height $\gamma$. [step 2.1, step 3.1, algebra]

5.1 For an arbitrary $M$-rational $\gamma$, write $\gamma=\gamma_0\lambda$ with $\lambda\in\Gamma$ and $\gamma_0$ in the supplied fundamental domain. The rational coordinate calculus and fundamental reduction in F1–F2 give bounded rational coordinates for $\gamma_0$: if $\gamma^r\in\Gamma$, $r\leq M$, triangular power formulas recover the coordinates of $\gamma$ with common bounded denominators independently of their numerators; reduction by integer-coordinate lattice elements preserves boundeddenominators. Now $H=\lambda^{-1}(\gamma_0^{-1}G'\gamma_0)\lambda$ and $\Lambda=\lambda^{-1}((\gamma_0^{-1}G'\gamma_0)\cap\Gamma)\lambda$, because $\lambda\in\Gamma$. Transport the basis from step 4.1 by $\operatorname{Ad}(\lambda^{-1})$. Its structure constants and lattice coordinates are unchanged, and its coordinate-chain metric, quotient metric and Haar probability are transported exactly. Thus the same total-equidistribution bound and internal rationality complexity hold. Its ambient coordinate numerators may be large, as the Statement allows. If the original $\gamma$ already has height at most $M$, step 1.1 supplies the additional ambient height conclusion directly. This proves all assertions. [F1, F2, step 4.1, algebra] ∎
## Source notes

GT Section2, printed p547, transfers total $M^{-B}$ to total
$M^{-cB+O(1)}$. This is the direction $M^C\delta^c$ proved here.
The former $M^{-C}\delta^C$, $C\geq1$, would strengthen even identity
conjugation and is false: on the circle take $g(n)=n/r$, prime $r$,
$\delta=2/r$, $M=2$, and a sufficiently large multiple $N$ of $r$.
Every progression of length at least $2N/r$ has step less than $r$;
its grid discrepancy is at most $\operatorname{Lip}(F)/(2r)$ plus
$2r\|F\|_\infty/|P|$, so the orbit is totally $2/r$-equidistributed.
But $M^{-C}\delta^C\leq1/r$ admits a step-$r$ progression of length
$N/r$, on which the orbit is constant. The cosine test violates that
smaller parameter for sufficiently large $r$. This correction preserves
the source's conjugation scope used by the final Möbius theorem.

---
dependency_level: 11
id: thm-green-tao-quantitative-nil-orbit-factorization
kind: theorem
title: Green–Tao quantitative nil-orbit factorization
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-smooth-and-rational-polynomial-nilsequences
  - thm-quantitative-leibman-equidistribution-criterion
  - lem-quantitative-malcev-polynomial-coordinate-calculus
  - lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates
  - lem-rational-subgroups-have-quantitatively-adapted-malcev-bases
  - lem-quantitative-malcev-metric-and-subgroup-comparisons
  - lem-rational-polynomial-nil-orbits-have-bounded-period
  - lem-poorly-equidistributed-one-parameter-nil-orbits-factor-through-a-proper-rational-subgroup
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, On the quantitative distribution of polynomial nilsequences – erratum
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v179-n3-p08-p.pdf
      locator: Introduction and Section 4, printed pp. 1175–1176 and 1182–1183
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Theorem 1.19, printed pp. 476–477; proof route in Sections 8–10
    - title: Bob Hough, Math 639 Lecture 16, Equidistribution on nilmanifolds
      url: https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf
      locator: Factorization theorem statement, pp. 26–28; proof scope noted in batch evidence
---

## Statement

Let $m,d\geq0$, $M_0,N\geq1$, and $A>0$. Let $G/\Gamma$ be an
$m$-dimensional nilmanifold with a filtration of degree $d$, and let $X$ be
an $M_0$-rational Mal’cev basis adapted to it. For every
$g\in\operatorname{poly}(\mathbb Z,G_\bullet)$ there are constants $C,c>0$
depending only on $A,m,d$, an integer $M$ with
$M_0\leq M\leq C M_0^c$, a rational subgroup $G'\leq G$ with
$\Gamma'=G'\cap\Gamma$, a Mal’cev basis $X'$ for $G'/\Gamma'$ whose elements
are rational combinations of $X$ with coefficient heights at most $M$, and
polynomial sequences
$\varepsilon,g',\gamma\in\operatorname{poly}(\mathbb Z,G_\bullet)$ such that
$g(n)=\varepsilon(n)g'(n)\gamma(n)$ for every
$n\in\mathbb Z$, $\varepsilon$ is $(M,N)$-smooth on $[N]$, $g'(n)\in G'$ and
$(g'(n)\Gamma')_{n\in[N]}$ is totally $M^{-A}$-equidistributed in
$G'/\Gamma'$ using $d_{X'}$, and $\gamma$ is $M$-rational with
$(\gamma(n)\Gamma)_{n\in\mathbb Z}$ periodic with a period at most $M$.

## Statement references

[Green and Tao, Theorem 1.19](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

[Hough, Math 639 Lecture 16](https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf)

## Facts & Assumptions

[F1] Smoothness, rationality and the right-coset convention are those of [[def-smooth-and-rational-polynomial-nilsequences]].

[F2] Failure of total equidistribution gives a proper connected rational subgroup factorization, with fixed-power bounds, by [[lem-poorly-equidistributed-one-parameter-nil-orbits-factor-through-a-proper-rational-subgroup]]. Its obstruction supplier is [[thm-quantitative-leibman-equidistribution-criterion]].

[F3] Coordinate multiplication, inversion, rational basis changes and their denominator bounds are supplied by [[lem-quantitative-malcev-polynomial-coordinate-calculus]]. Polynomial maps form a group and have the weighted coordinate description in [[lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates]].

[F4] Intersection filtrations have quantitatively adapted rational bases by [[lem-rational-subgroups-have-quantitatively-adapted-malcev-bases]]. Metric comparisons, coordinate-ball estimates and bounded left-translation estimates are supplied by [[lem-quantitative-malcev-metric-and-subgroup-comparisons]].

[F5] Rational products, inverses and the bounded period of an entire polynomial rational coset sequence are proved in [[lem-rational-polynomial-nil-orbits-have-bounded-period]].

## Proof

**Given:** The nilmanifold, filtration, adapted basis and polynomial sequence in the statement, and the real parameters $M_0,N\geq1$, $A>0$. All constants below depend only on $A,m,d$. We may use the integer interval length $N_*=\lfloor N\rfloor\geq N/2$; a smoothness bound $T/N_*$ is at most $2T/N$, and this factor of two is included in every accumulated complexity bound below. Total equidistribution at a progression threshold for $N_*$ implies the required bound for progressions of the same proportional threshold relative to $N$, since the latter collection is smaller.

1.1 We first record the fixed-power bookkeeping used by the descent. With respect to a rational adapted basis, suppose two sequences $e_1,e_2$ are $(T,N_*)$-smooth and the basis complexity is at most $T$, $T\geq2$. At each $n\in[N_*]$, right invariance, the triangle inequality and bounded left translation give
$ d(e_1(n)e_2(n),e_1(n-1)e_2(n-1))\leq d(e_1(n),e_1(n-1))+T^C d(e_2(n),e_2(n-1))\leq T^C/N_*.$
The left multiplier $e_1(n-1)$ has distance at most $2T$ from identity, including $n=1$, because the given adjacent-step bound also controls $e_1(0)$. Coordinate-ball and metric estimates supply the indicated fixed-power Lipschitz constant on these bounded balls. Also $d(e_1(n)e_2(n),e)\leq d(e_1(n),e)+d(e_1(n)e_2(n),e_1(n))\leq T^C$. Thus a product of smooth sequences is smooth with a fixed-power loss. Changing from a subgroup basis to the original basis has a fixed-power loss as well: the subgroup smoothness bound gives a polynomial coordinate ball, the rational coordinate conversion is polynomial on that ball, and group metric comparison then bounds both displacement and adjacent steps in the original metric. [F3, F4, algebra]

1.2 A rational sequence in a subgroup basis also becomes rational in the original basis with a fixed-power loss independent of its coordinate numerators. Indeed the rational-point lemma gives per-point coordinate denominators, polynomial basis conversion preserves bounded denominators, and the rational-point converse gives bounded powers in the original lattice. For an accumulated product of a bounded number of such sequences, the rational-product lemma gives the same type of bound. The product remains polynomial by the polynomial group property. Its weighted coordinate degree is bounded by $d$, so the rational-period lemma gives a bounded period for this entire accumulated product. Individual right-coset periods are not multiplied or combined without this lemma. [F3, F4, F5, algebra]

2.1 Initialize $H_0=G$, $f_0=g$ and $E_0=R_0=e$. At stage $k$ maintain $g=E_kf_kR_k$, with $H_k$ a connected rational subgroup, $\Lambda_k=H_k\cap\Gamma$, and $f_k$ polynomial for the intersection filtration $H_k\cap G_\bullet$. Choose a bound $B_k\geq2$ that includes the adapted basis heights relative to the original basis, structure constants, defining rational equations, group and quotient metric comparison constants, the smoothness bound for $E_k$ in the original metric (including the factor two for $N/N_*$), and rationality of $R_k$ in the original group. Taking $B_0=(4\max(2,M_0))^{c_0}$ with fixed sufficiently large $c_0$ establishes these assertions at stage zero. There are constants $c,b\geq1$ depending only on $m,d$ with the following uniform properties: the final period and all desired final bounds at complexity $B$ are at most $B^b$; and a proper-subgroup step at parameter $\delta$ with $\delta^{-1}\geq B$ has new accumulated complexity at most $(B\delta^{-1})^c$. To verify the latter, apply the proper-subgroup lemma in the current basis, then the rational-basis theorem to its intersection filtration. Each new basis coefficient has height at most a fixed power of $\delta^{-1}$ relative to the previous basis. Composition with the old coefficients costs a fixed power of $B\delta^{-1}$. Polynomial coordinate conversion and the metric estimates give the same bound for all group and quotient comparisons. Step 1.1 bounds the new accumulated smooth factor, and step 1.2 bounds the new rational factor. These are finitely many fixed-degree arithmetic operations and minors in dimension at most $m$; choose $c$ uniformly over these dimensions. Choose $b$ uniformly for the period estimate of step 1.2 and all final bounds. [F2, F3, F4, F5, step 1.1, step 1.2, construct]

3.1 Choose a fixed $L\geq b+3$, increasing it for any fixed metric exponent not already absorbed into $B_k$, and choose $J\geq2c(1+L(A+1))$. Prescribe $B_{k+1}=B_k^J$ and $\delta_k=B_k^{-L(A+1)}$. At stage $k$, if the orbit of $f_k$ is totally $\delta_k$-equidistributed in its current adapted intrinsic basis metric on $[N_*]$, stop. Otherwise the proper-subgroup lemma applies, since the current basis complexity is at most $B_k\leq\delta_k^{-1}$. It gives $f_k=e_{k+1}f_{k+1}r_{k+1}$, where $f_{k+1}$ takes values in a proper connected rational subgroup $H_{k+1}\leq H_k$. Set $E_{k+1}=E_ke_{k+1}$ and $R_{k+1}=r_{k+1}R_k$. These orders preserve $g=E_{k+1}f_{k+1}R_{k+1}$. The new complexity is at most $(B_k\delta_k^{-1})^c=B_k^{c(1+L(A+1))}\leq B_{k+1}$, by step 2.1. The sequence $f_{k+1}$ is polynomial for the intersection filtration: every derivative is in $H_{k+1}$, since all its values are there, and in the corresponding old filtration group by its old polynomiality. Thus all inductive assertions persist. [F2, F3, F4, step 2.1, construct, algebra]

4.1 Every failure lowers dimension. After at most $m$ failures the subgroup is trivial, on which every orbit is totally equidistributed with every positive tolerance. Hence there is a stopping stage $0\leq k\leq m$. Put $M=\lceil B_k^b\rceil$, $G'=H_k$, $g'=f_k$, $\varepsilon=E_k$, and $\gamma=R_k$, with $X'$ its current adapted basis. The maintained bounds and the choice of $b$ give all coefficient heights at most $M$, $(M,N)$-smoothness, $M$-rationality and a right-coset period at most $M$. Polynomiality of each accumulated factor follows from the polynomial group property and the inclusion of intersection filtrations in the original one. The products have the correct order: after two failures the identity is $g=e_1e_2f_2r_2r_1$. Since $B_k=B_0^{J^k}$ and $k\leq m$, the size satisfies $M_0\leq M\leq C_{A,m,d}M_0^{c_{A,m,d}}$. [F1, F3, F4, F5, step 2.1, step 3.1, algebra]

5.1 It remains to check the final tolerance after all bounds, including the period, have been absorbed in $M$. Since $B_k\geq2$ and $M\leq2B_k^b$, the choice $L\geq b+3$ gives $\delta_k=B_k^{-L(A+1)}\leq(2B_k^b)^{-A}\leq M^{-A}$. A progression in $[N]$ of length at least $M^{-A}N$ is therefore also a progression in $[N_*]$ of length at least $\delta_kN_*$. The stopping test gives error at most $\delta_k\|F\|_{\mathrm{Lip}}\leq M^{-A}\|F\|_{\mathrm{Lip}}$ for every test in the chosen metric $d_{X'}$. This proves total $M^{-A}$-equidistribution in precisely the metric required in the statement. The tolerance was prescribed before the period enlargement through the exponent $b$, so no weakening from a later enlargement of $M$ is being assumed. All assertions of the factorization follow. [F1, step 3.1, step 4.1, algebra] ∎

## Source notes

Read the complete local extracted proofs of GT12 Proposition 9.2, Lemma 10.1 and Theorem 10.2, and the statement of Theorem 1.19; read the GT14 erratum, which states that the one-variable results are unaffected by its multiparameter issue. The proof here uses only the one-variable proper-subgroup supplier. It explicitly preserves the noncommutative factor order, applies periodicity to the whole accumulated rational product, and prescribes the stronger stopping tolerance before selecting the final $M$. No source-reading claim concerning Hough's proof is made.

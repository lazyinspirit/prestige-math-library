---
dependency_level: 10
id: lem-poorly-equidistributed-one-parameter-nil-orbits-factor-through-a-proper-rational-subgroup
kind: lemma
title: "Poorly equidistributed one parameter nil orbits factor through a proper rational subgroup"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates
  - lem-rational-subgroups-have-quantitatively-adapted-malcev-bases
  - lem-quantitative-malcev-metric-and-subgroup-comparisons
  - lem-rational-polynomial-nil-orbits-have-bounded-period
  - lem-polynomial-coefficient-recovery-and-affine-extrapolation
  - lem-finite-nilpotent-exponential-and-bch-calculus
  - lem-quantitative-malcev-polynomial-coordinate-calculus
  - thm-quantitative-leibman-equidistribution-criterion
  - def-smooth-and-rational-polynomial-nilsequences
  - def-polynomial-sequence-on-a-filtered-group
  - def-malcev-basis-and-rationality
  - def-total-equidistribution-of-a-nil-orbit
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Proposition 9.2, one-parameter case, printed pp. 522–523
---

## Statement

Fix $m,d$. There are constants $C,c>0$ depending only on $m,d$ such that, whenever $0<\delta<1/2$, $N\geq1$, $G/\Gamma$ is an $m$-dimensional nilmanifold with a $\delta^{-1}$-rational Mal’cev basis adapted to a degree-$d$ filtration, and $g\in\operatorname{poly}(\mathbb Z,G_\bullet)$ fails total $\delta$-equidistribution on $[N]$, there is a factorization $g=\varepsilon g'\gamma$ into polynomial maps for the same filtration. Here $\varepsilon$ is $(C\delta^{-c},N)$-smooth, $\gamma$ is $C\delta^{-c}$-rational, and $g'$ takes values in a connected proper $C\delta^{-c}$-rational subgroup $H\leq G$. No bound on the coordinates of $g(0)$ or other orbit values is assumed.

## Statement references

[Green and Tao, Proposition 9.2, specialized to one parameter](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

## Facts & Assumptions

[F1] The one-variable obstruction theorem is [[thm-quantitative-leibman-equidistribution-criterion]].

[F2] Polynomial maps form a group and have weighted coordinate coefficients by [[lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates]].

[F3] Real exponential kernels, finite rational coordinate formulas and bounded rational bases are supplied by [[lem-finite-nilpotent-exponential-and-bch-calculus]], [[lem-quantitative-malcev-polynomial-coordinate-calculus]] and [[lem-rational-subgroups-have-quantitatively-adapted-malcev-bases]].

[F4] Fundamental-domain reduction, quotient left-translation bounds, invariant probability and metric estimates are supplied by [[lem-quantitative-malcev-metric-and-subgroup-comparisons]].

[F5] Rational products and periodicity are proved in [[lem-rational-polynomial-nil-orbits-have-bounded-period]].

[F6] The affine extrapolation estimate, including starts of size $O(N)$, is [[lem-polynomial-coefficient-recovery-and-affine-extrapolation]].

[F7] The conventions are in [[def-smooth-and-rational-polynomial-nilsequences]], [[def-polynomial-sequence-on-a-filtered-group]], [[def-malcev-basis-and-rationality]] and [[def-total-equidistribution-of-a-nil-orbit]].

## Proof

**Given:** The hypotheses in the statement. Write $P(\delta)$ for a fixed-power bound $C\delta^{-c}$ whose constants depend only on $m,d$; finitely many enlargements below can be covered by one such bound.

1.1 Reduce $g(0)=u\lambda$ with $\psi(u)\in[0,1)^m$ and $\lambda\in\Gamma$, and put $f(n)=u^{-1}g(n)\lambda^{-1}$. Then $f(0)=e$ and $f$ is polynomial. A test $F$ witnessing failure for $g$ on a progression of size at least $\delta N$ becomes the test $x\mapsto F(ux)$ for $f$. Haar probability is unchanged, and its Lipschitz norm increases by at most $P(\delta)$, because $u$ has bounded coordinates. Thus $f$ fails total $\delta_0$-equidistribution for some $\delta_0\geq P(\delta)^{-1}$, with $\delta_0\leq\delta$: the old progression remains admissible at the smaller threshold. If the assertion is proved for $f$ at $\delta_0$, restore the factors by $\varepsilon=u\varepsilon_0$ and $\gamma=\gamma_0\lambda$. Left-translation bounds prove the new smoothness. Rational products prove the new rationality, independently of the unbounded integer coordinates of $\lambda$. Hence it suffices to prove the assertion with $g(0)=e$, renaming $\delta_0$ as $\delta$. [F2, F4, F5, F7, given]

2.1 Choose a witnessing progression $P=\{a+bn:1\leq n\leq L\}\subseteq[N]$ with $L\geq\delta N$ and positive integral step. If $N>2/\delta$, then $L\geq2$, $b\leq2/\delta$ and $|a|\leq3N/\delta$. Polynomiality of $g(a+bn)$ and the criterion yield a nonzero horizontal character $\widetilde\eta$ of modulus at most $P(\delta)$ with $\|\widetilde\eta\circ g(a+bn)\|_{C^\infty[L]}\leq P(\delta)$. Enlarge the scale to $N$ using $N/L\leq\delta^{-1}$, and apply affine extrapolation with the displayed bound on $a$. Multiplying the character by the resulting positive integer gives a nonzero $\eta$ with $|\eta|\leq P(\delta)$ and $\|\eta\circ g\|_{C^\infty[N]}\leq P(\delta)$. [F1, F2, F6, F7, step 1.1]

3.1 If $N\leq2/\delta$, construct a bounded nonzero horizontal character directly as follows. In the basis $X$, the finitely many bracket vectors $[X_i,X_j]$ have rational coordinates of height at most $\delta^{-1}$. Their linear span has rank less than $m$ when $m>0$: otherwise $[\mathfrak g,\mathfrak g]=\mathfrak g$, and every lower central term would equal $\mathfrak g$, contradicting nilpotence. Clear denominators and solve the transpose nullspace by minors to obtain a nonzero integer vector $k$ of size at most $P(\delta)$ annihilating the bracket span. Finite BCH implies $\eta(\exp v)=k\cdot v\bmod\mathbb Z$ is a character, with $\eta(x)=k\cdot\psi(x)\bmod\mathbb Z$, and it vanishes on $\Gamma$. The polynomial coordinate theorem gives degree at most $d$ for $\eta\circ g$, so $\|\eta\circ g\|_{C^\infty[N]}\leq N^d/2\leq P(\delta)$. If $m=0$, no sequence fails total equidistribution, so the assertion is vacuous. Thus in all cases the obstruction obtained in step 2.1 is available. [F2, F3, F7, algebra]

4.1 The horizontal character has the form $\eta(x)=k\cdot\psi(x)\bmod\mathbb Z$, for an integral nonzero $k$ with $|k|\leq P(\delta)$. Its real lift $\ell(x)=k\cdot\psi(x)$ is additive: the defect $\ell(xy)-\ell(x)-\ell(y)$ is continuous and integer-valued on the connected space $G\times G$, and is zero at $(e,e)$. The functional $\ell\circ\exp$ is therefore linear. Its kernel defines a codimension-one rational Lie subalgebra, with rational height bounded by $P(\delta)$ by pivot elimination. Its exponential $H=\ker\ell$ is a closed connected proper subgroup; the rational-subgroup theorem proves it has lattice intersection and rational complexity at most $P(\delta)$. Using a real kernel is essential here; the circle kernel itself can be disconnected. [F3, step 2.1, step 3.1, algebra]

5.1 Write $\psi(g(n))=\sum_{i=1}^dt_i\binom ni$; the zero constant term follows from $g(0)=e$. Each $t_i$ is supported on the $G_i$ tail, and $\|k\cdot t_i\|\leq P(\delta)/N^i$. If $k$ is zero on a tail, put $u_i=t_i$, $v_i=0$. Otherwise choose a nonzero pivot $k_j$ on that tail and an integer $z_i$ nearest to $k\cdot t_i$, and put $u_i=t_i+(z_i-k\cdot t_i)e_j/k_j$, $v_i=z_ie_j/k_j$. Thus $|t_i-u_i|\leq P(\delta)/N^i$, $k\cdot u_i=k\cdot v_i$, both vectors retain the tail support, and all $v_i$ have one denominator bounded by $P(\delta)$. Their numerators need not be bounded. [F2, F6, step 4.1, algebra]

6.1 Define $\psi(\varepsilon(n))=\sum_{i=1}^d(t_i-u_i)\binom ni$, $\psi(\gamma(n))=\sum_{i=1}^dv_i\binom ni$, and $g'=\varepsilon^{-1}g\gamma^{-1}$. The weighted characterization and polynomial group property prove polynomiality of all factors. By real additivity, $\ell(g'(n))=\sum_i k\cdot(-t_i+u_i+t_i-v_i)\binom ni=0$, so $g'$ takes values in $H$. On $0\leq n\leq N$ the epsilon coordinates are bounded by $P(\delta)$ and adjacent differences by $P(\delta)/N$, using the binomial difference identity. Metric estimates therefore prove $(P(\delta),N)$-smoothness. The gamma coordinates have a common denominator bounded by $P(\delta)$ after including the fixed factorials; the rational-point lemma proves its $P(\delta)$-rationality without a numerator bound. [F2, F4, F5, step 5.1, algebra]

7.1 If $d=0$, the normalized sequence is identity, the sums in step 6.1 are empty, and any proper rational real character kernel from step 3.1 contains it. Otherwise steps 4.1–6.1 give the normalized assertion directly. Restoring the initial value as in step 1.1 preserves polynomiality, smoothness, rationality and the same subgroup-valued middle factor, with a further fixed-power loss. All arithmetic constructions use only a bounded number of coefficients, minors and products, so one uniform choice of $C,c$ covers them. This proves the assertion. [F2, F3, F4, F5, step 1.1, step 3.1, step 6.1, algebra] ∎

## Source notes

Read the full local extracted proof of GT12 Proposition 9.2. This proof specializes to one variable and uses the one-variable criterion, not the unequal-sides multiparameter theorem. Its normalization, real kernel, bounded-$N$ branch and extrapolation with a long progression start are explicit.

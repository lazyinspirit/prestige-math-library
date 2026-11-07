---
dependency_level: 7
id: lem-finer-filtration-factorization-from-a-quadratic-character-obstruction
kind: lemma
title: "Finer filtration factorization from a quadratic character obstruction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-quantitative-malcev-polynomial-coordinate-calculus
  - lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates
  - lem-rational-subgroups-have-quantitatively-adapted-malcev-bases
  - lem-quantitative-malcev-metric-and-subgroup-comparisons
  - lem-rational-polynomial-nil-orbits-have-bounded-period
  - lem-polynomial-coefficient-recovery-and-affine-extrapolation
  - lem-finite-nilpotent-exponential-and-bch-calculus
  - def-smooth-and-rational-polynomial-nilsequences
  - def-polynomial-sequence-on-a-filtered-group
  - def-malcev-basis-and-rationality
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, On the quantitative distribution of polynomial nilsequences – erratum
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v179-n3-p08-p.pdf
      locator: Introduction and Section 4, printed pp. 1175–1176 and 1182–1183
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Lemmas 7.8–7.9, printed pp. 513–515; corrected bracket hypothesis
---

## Statement

Fix $m,d$ and let $B\geq2$. Let $G/\Gamma$ have a $B$-rational Mal’cev basis $X$ adapted to a filtration $G_0=G_1=G$, of degree at most $d$. Let $\psi$ denote second-kind coordinates. Suppose $\ell:G_2\to\mathbb R$ is a nonzero continuous real homomorphism, $\ell(x)=k\cdot\psi(x)$ on $G_2$, where $k$ is integral, supported on its coordinate tail, and $|k|\leq B$. Assume explicitly $[G,G]\subseteq\ker\ell$. Put $G'_0=G'_1=G$ and $G'_i=G_i\cap\ker\ell$ for $i\geq2$. This is a closed connected rational filtration of degree at most $d$, with adapted basis complexity at most $CB^C$, and

$$\dim\operatorname{Lie}(G'_2)-\dim[\mathfrak g,\mathfrak g]=\dim\operatorname{Lie}(G_2)-\dim[\mathfrak g,\mathfrak g]-1,$$

where $[\mathfrak g,\mathfrak g]$ is the linear span of Lie brackets. Suppose in addition $g\in\operatorname{poly}(\mathbb Z,G_\bullet)$, $g(0)=e$, $a=g(1)$, and $g_2(n)=g(n)a^{-n}$ is polynomial, takes values in $G_2$, has $g_2(0)=g_2(1)=e$, and $\|\ell\circ g_2\bmod\mathbb Z\|_{C^\infty[N]}\leq B$. Then $g=\varepsilon g'\gamma$, with old-filtered polynomial factors, $\varepsilon(0)=e$, $\varepsilon$ $(CB^C,N)$-smooth, $g'\in\operatorname{poly}(\mathbb Z,G'_\bullet)$, and $\gamma$ $CB^C$-rational with right-coset period at most $CB^C$. For every horizontal character $\eta$, $\|\eta\circ\varepsilon\|_{C^\infty[N]}\leq CB^C\max(1,|\eta|)$. Constants depend only on $m,d$.

## Statement references

[Green and Tao, Lemmas 7.8–7.9](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

[Green and Tao, Erratum, Section 4](https://annals.math.princeton.edu/wp-content/uploads/annals-v179-n3-p08-p.pdf)

## Facts & Assumptions

[F1] Finite exponential calculus and rational polynomial coordinate changes are provided by [[lem-finite-nilpotent-exponential-and-bch-calculus]] and [[lem-quantitative-malcev-polynomial-coordinate-calculus]].

[F2] Polynomial maps form a group and have the weighted coordinate characterization in [[lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates]].

[F3] Rational subalgebras have lattices and quantitatively adapted bases by [[lem-rational-subgroups-have-quantitatively-adapted-malcev-bases]].

[F4] Coordinate-ball estimates and metric comparisons are proved in [[lem-quantitative-malcev-metric-and-subgroup-comparisons]].

[F5] Rational coordinate denominators and right-coset periodicity are proved in [[lem-rational-polynomial-nil-orbits-have-bounded-period]].

[F6] The $C^\infty$ convention and coefficient tools are those of [[lem-polynomial-coefficient-recovery-and-affine-extrapolation]]. The other conventions are in [[def-smooth-and-rational-polynomial-nilsequences]], [[def-polynomial-sequence-on-a-filtered-group]] and [[def-malcev-basis-and-rationality]].

## Proof

**Given:** The hypotheses in the statement, including nonzero $\ell$ and $[G,G]\subseteq\ker\ell$. Constants depend only on $m,d$.

1.1 The functional $\lambda=\ell\circ\exp$ on $\operatorname{Lie}(G_2)$ is real linear: on each one-parameter subgroup it is continuous additive, and applying the finite product formula and differentiating at zero gives the derivative of $\ell$ on every vector; higher bracket terms are annihilated by this derivative. Its value at $X_j$ on the $G_2$ tail is $k_j$. Consequently each $\operatorname{Lie}(G_i)\cap\ker\lambda$ is a rational subalgebra defined by a coordinate tail and one integral equation. If the equation is nonzero there, choose a pivot $k_j\neq0$; the vectors $X_l-(k_l/k_j)X_j$, $l\neq j$ on that tail, span its kernel with heights at most $B^C$. If the equation vanishes there, retain the whole tail. Its exponential is exactly $G_i\cap\ker\ell$, since $\ell(\exp v)=\lambda(v)$. Finite exponential calculus and the rational-basis theorem prove closed connected rationality, lattice intersection, and bounded adapted bases. [F1, F3, given, algebra]

1.2 The weighted coordinate theorem and $g_2(0)=g_2(1)=e$ give $\psi(g_2(n))=\sum_{i=2}^dt_i\binom ni$, with $t_i$ supported on the $G_i$ coordinate tail. The obstruction bound gives $\|k\cdot t_i\|\leq B/N^i$. If $k$ vanishes on that tail, set $u_i=t_i$, $v_i=0$. Otherwise choose a pivot $j_i$ there with $k_{j_i}\neq0$, choose an integer $z_i$ nearest to $k\cdot t_i$, and put $u_i=t_i+(z_i-k\cdot t_i)e_{j_i}/k_{j_i}$ and $v_i=z_i e_{j_i}/k_{j_i}$. Then $|t_i-u_i|\leq B/N^i$, $k\cdot u_i=k\cdot v_i$, and all supports are retained. The finitely many $v_i$ share a denominator at most $B^C$, although their numerators can be arbitrarily large. [F2, F6, given, algebra]

2.1 The new groups decrease. For the essential pair of indices $1,1$, the old inclusion $[G,G]\subseteq G_2$ and the explicit hypothesis give $[G'_1,G'_1]\subseteq G'_2$. For any other positive indices $i,j$, the old bracket lies in $G_{i+j}$ and every such commutator belongs to $[G,G]\subseteq\ker\ell$ whenever $i+j\geq2$. The index-zero cases follow because $G_i$ is normal in $G$ and $\ell$ annihilates the required commutators. Thus this is a filtration. Differentiating the commutator identity on $\exp(tU),\exp(sV)$ at $s=t=0$ shows that $\lambda$ annihilates the linear bracket span $[\mathfrak g,\mathfrak g]$. Nonzero $\ell$ lowers $\dim\operatorname{Lie}(G_2)$ by exactly one, while $G$ and that linear bracket span do not change. This proves the stated strict drop without invoking a theorem identifying an abstract commutator subgroup with a closed Lie subgroup. [F1, step 1.1, given, algebra]

2.2 Define $\psi(\varepsilon(n))=\sum_{i=2}^d(t_i-u_i)\binom ni$, $\psi(\gamma(n))=\sum_{i=2}^dv_i\binom ni$, and $g'=\varepsilon^{-1}g\gamma^{-1}$. All three are old-filtered polynomial maps. On $0\leq n\leq N$ the epsilon coordinates have size at most $C_dB$ and adjacent differences at most $C_dB/N$, since $\binom ni-\binom{n-1}i=\binom{n-1}{i-1}$. The coordinate metric estimates give $(B^C,N)$-smoothness, including the value at zero, and $\varepsilon(0)=e$. A horizontal character is an integral coordinate functional; its integer coefficients have size bounded by its modulus. Applying it to this coordinate sum gives $C^\infty[N]$ seminorm at most $C_dB|\eta|$ for every horizontal character $\eta$, proving the asserted uniform character bound without fixing its modulus in advance. The common denominator of the gamma coordinates is at most $B^C$ after including the fixed factorials, so the rational-period lemma gives its rationality and correctly ordered right-coset period. [F2, F4, F5, F6, step 1.2, algebra]

3.1 Set $h=\varepsilon^{-1}g_2\gamma^{-1}$. This is old-filtered polynomial and takes values in $G_2$. Additivity of the real homomorphism gives $\ell(h(n))=\sum_{i=2}^dk\cdot(-t_i+u_i+t_i-v_i)\binom ni=0$ in $\mathbb R$, not just modulo integers. Thus it takes values in the subgroup $G_2\cap\ker\ell$. Every iterated derivative of a sequence valued in a subgroup remains in that subgroup, since it is a finite product of values and their inverses. Its order-$r$ derivative also lies in $G_r$ by old polynomiality. These two facts give polynomiality for the new filtration. [F2, step 1.2, step 2.2, algebra]

4.1 The sequence $c(n)=\gamma(n)a^n\gamma(n)^{-1}a^{-n}$ is old-filtered polynomial by the polynomial group property, and takes values in the subgroup $[G,G_2]\subseteq G_2\cap\ker\ell$. The same derivative argument makes it new-filtered polynomial. The linear sequence $a^n$ is also new-filtered polynomial because all derivatives of order at least two are identity. Finally $h(n)c(n)a^n=\varepsilon(n)^{-1}g_2(n)a^n\gamma(n)^{-1}=g'(n)$. The new polynomial group property therefore proves the required polynomiality of $g'$. The empty coefficient sum covers the vacuous low-degree cases. All constructions use only boundedly many arithmetic operations, so the stated powers are uniform. [F2, step 2.1, step 3.1, algebra] ∎

## Source notes

Read the complete local extracted proofs of GT12 Lemmas 7.8–7.9 and the GT14 erratum. The required bracket hypothesis is $[G,G]\subseteq\ker\ell$; reversing this inclusion would not prove the filtration condition. The strict invariant is formulated using the linear Lie bracket span. Producing a nonzero obstruction satisfying this hypothesis is a separate use of this lemma in the criterion, not an assumption silently supplied by the proof.

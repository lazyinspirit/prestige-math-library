---
id: thm-cherednik-localized-monodromy-is-fully-faithful-with-subquotient-closed-image
kind: theorem
title: "Localized Cherednik monodromy is fully faithful and its image is closed under subquotients"
status: draft
dependency_level: 13
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - lem-cherednik-nilpotent-induced-connections-have-moderate-growth
  - lem-bounded-separate-rationality-is-rational
  - lem-rational-cherednik-dunkl-localization-and-flat-connection
  - def-rational-cherednik-kz-functor-and-finite-hecke-algebra
  - cor-finite-variable-polynomial-ring-noetherian
  - lem-finite-modules-over-noetherian-rings-are-noetherian
  - thm-laurent-expansion-annulus
  - thm-laurent-coefficient-formula-and-uniqueness
  - thm-cauchy-integral-formula-circle
  - thm-meromorphic-functions-riemann-sphere-are-rational
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - thm-fundamental-theorem-of-algebra-liouville-proof
  - lem-finite-modules-with-connection-over-a-polynomial-open-are-locally-free
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ginzburg, Guay, Opdam and Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "Sections 5.1–5.4, especially Proposition 5.7 and Theorems 5.13–5.15; elementary analytic details supplied locally."
---

## Statement

Let $\mathcal T=\{M\in\mathcal O_c:M_{\rm reg}=0\}$. Localization identifies $\mathcal O_c/\mathcal T$ fully faithfully with a full subcategory of algebraic $W$-equivariant vector bundles with integrable connection on $\mathfrak h_{\rm reg}$. Monodromy on this subcategory is fully faithful, and its essential image in finite-dimensional $\mathbb C[B_W]$-modules is closed under subobjects and quotients. These assertions hold for every parameter $c$ and finite complex reflection group; they do not assert that every braid-group module comes from $\mathcal O_c$.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

[F1] [[lem-rational-cherednik-dunkl-localization-and-flat-connection]]: exact localization produces finite vector bundles with integrable connection. [[lem-finite-modules-with-connection-over-a-polynomial-open-are-locally-free]] proves the required stronger interface for every finite module with a connection, including stable submodules and quotients beyond category O.

[F2] [[lem-cherednik-nilpotent-induced-connections-have-moderate-growth]]: horizontal sections, duals and exterior powers of localized objects have uniformly bounded power growth on generic affine coordinate lines, including infinity, in rational frames.

[F3] [[lem-bounded-separate-rationality-is-rational]]: a meromorphic function rational with uniformly bounded degrees on generic coordinate lines is rational in all variables.

[F4] [[thm-laurent-expansion-annulus]], [[thm-laurent-coefficient-formula-and-uniqueness]], [[thm-cauchy-integral-formula-circle]] and [[thm-meromorphic-functions-riemann-sphere-are-rational]]: a single-valued holomorphic punctured-disc function bounded by $|z|^{-N}$ has a pole of finite order (bound its Laurent coefficients by circle integrals); a meromorphic function on the sphere is rational.

[F5] [[cor-finite-variable-polynomial-ring-noetherian]] and [[lem-finite-modules-over-noetherian-rings-are-noetherian]]: submodules of polynomial-finite modules are finite. Localizations retain this property by clearing finitely many generator denominators.

[F6] [[def-rational-cherednik-kz-functor-and-finite-hecke-algebra]] defines equivariant monodromy by paths with their endpoint group identifications. A subspace invariant under this representation transports to an equivariant flat analytic subbundle.

[F7] [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]] gives unique factorization and prime irreducibles. [[thm-fundamental-theorem-of-algebra-liouville-proof]] supplies a complex root of every nonconstant one-variable polynomial.

## Proof

**Proof technique:** direct.

**Given:** The stated data and Facts.

1.1 Local holomorphic horizontal frames exist for every integrable algebraic connection: on a small polydisc solve the coordinate linear systems successively with initial matrix $I$. Their Picard series converge normally on smaller polydiscs, because the length-$j$ iterated integral is bounded by $(C\ell)^j/j!$. Integrability implies that after solving a new coordinate the previous horizontal equations still hold: their errors satisfy the homogeneous new-coordinate equation with zero initial values, hence vanish by uniqueness. Invertibility follows by solving the inverse equation. Thus an intertwiner of monodromy extends uniquely by parallel transport to a single-valued equivariant holomorphic horizontal map $F$; two paths give the same map because their monodromies are intertwined. [F1, F6, construct, algebra]

1.2 Let $S_b$ be a monodromy-invariant $r$-plane in a localized fiber. For $r=0$ or full rank there is nothing to prove. Otherwise parallel transport gives an analytic flat subbundle $S$. Its determinant line in $\bigwedge^r M_{\rm reg}$ has scalar monodromy. On a punctured transverse disc choose a nonzero horizontal determinant section $s$ and $\lambda$ with $e^{2\pi i\lambda}=\mu$, its scalar monodromy. Then $z^{-\lambda}s$ is single-valued and has power growth on a bounded-angle sector by [F2]. Its coordinates are meromorphic by [F4], so their Pluecker ratios are meromorphic. This uses scalar twisting before taking ratios; it does not infer a bound on a quotient merely from separate bounds on numerator and denominator. [F2, F4, F6, choose, construct, algebra]

2.1 Choose rational frames of source and target using nonzero generating minors. On a fixed Zariski open set the entries of $F$ are holomorphic. On each generic affine coordinate line they are linear combinations of products of target horizontal sections and source dual horizontal sections. [F2] bounds these entries by a fixed inverse power at each finite puncture and at infinity; the number of punctures is uniformly bounded. By [F4] each entry on that line is rational of uniformly bounded degree: clearing its bounded finite principal parts leaves a polynomial of degree bounded by the infinity pole order. [F3] therefore makes every entry rational in all variables. [F2, F3, F4, step 1.1, algebra]

2.2 On a generic affine coordinate line twist $s$ simultaneously by $\prod_j(t-a_j)^{-\lambda_j}$ at its finite punctures. The resulting vector is single-valued, including near infinity, since its total scalar monodromy cancels; it has power growth there and at all finite punctures. The exponents can be bounded uniformly: choose $\operatorname{Re}\lambda_j\in[0,1)$; their imaginary parts are determined by the finitely many possible eigenvalues of the local exterior-power monodromy matrices. These eigenvalue sets are fixed at reflecting divisors; at infinity the triangular system in [F2] has fixed diagonal residues, so its monodromy eigenvalues are fixed too. Artificial rational-frame divisors have trivial monodromy. Thus [F2] and [F4] make these twisted coordinates rational with uniformly bounded degrees. Their ratios consequently have uniformly bounded degrees even if some coordinates have zeros. The Pluecker coordinate ratios are globally meromorphic on the Zariski open set where the rational bundle frame is defined: locally they are ratios of holomorphic coordinates of any nonzero determinant section, and the scalar changes cancel. Their restrictions satisfy the preceding line bounds wherever defined. Thus [F3] makes these meromorphic ratios rational in all variables. They satisfy the Pluecker equations, since they do so analytically, and define an $r$-dimensional subspace $S_K$ over $K=\mathbb C(\mathfrak h)$. [F2, F3, F4, step 1.2, algebra]

3.1 Write $R=\mathbb C[\mathfrak h]$. First, $R[\delta^{-1}]$ is a UFD: factor a numerator in the UFD $R$ from [F7]; irreducible factors dividing $\delta$ become units, and every other irreducible $p$ remains prime after localization because $p\nmid\delta$. Indeed, if $p$ divides a product in $R[\delta^{-1}]$, clearing powers of $\delta$ and using primality of $p$ in $R$ shows it divides one numerator. Existence and uniqueness of factorization in $R$ therefore give factorization and uniqueness in $R[\delta^{-1}]$. The rational horizontal map constructed above is regular on all of $\mathfrak h_{\rm reg}$. Indeed use local algebraic bundle frames; its entries remain rational and are analytically holomorphic. A reduced denominator in this localized polynomial UFD cannot have a noninvertible irreducible factor: at a smooth point of its hypersurface away from the numerator's zero set it would give an analytic pole. Represent such a denominator factor, up to a unit, by an irreducible polynomial $p\in R$ with $p\nmid\delta$. Choose an algebraic bundle-frame open meeting the generic point of $V(p)$; its defining factors are not divisible by $p$. After clearing powers of $\delta$, combine the reduced numerator and these finitely many factors to avoid into a nonzero polynomial $q\in R$ with $p\nmid q$. Choose a variable $x$ in which $p$ has positive degree, put $S=\mathbb C[\text{the other variables}]$, and let $K=\operatorname{Frac}(S)$. The polynomial $p$ is primitive over $S$ (otherwise its nonunit content would factor $p$ in $R$), so the Gauss-lemma argument in [F7] makes it irreducible in $K[x]$. Its derivative $\partial_xp$ is nonzero in characteristic zero and has smaller $x$-degree, hence $p$ is coprime to $\partial_xp$ in $K[x]$. By the choice of $q$, $p$ is also coprime to $q$, so it is coprime to $q\partial_xp$. Bezout in that one-variable polynomial ring, followed by clearing denominators, gives $A p+B q\partial_xp=D$ with a nonzero polynomial $D$ in the other variables. Choose these variables with $D$ and the leading coefficient of $p$ nonzero; [F7] gives a root of the specialized $p$, at which $q\partial_xp$ is nonzero. This is a smooth pole point in the required open neighborhood. Thus the denominator factors cancel or are units locally. This proves algebraicity. Horizontal continuation gives faithfulness, so monodromy is fully faithful on localized bundles. [F7, step 1.1, step 2.1, algebra]

3.2 Inside $M_{\rm reg}\otimes K$ set $S_{\rm alg}=M_{\rm reg}\cap S_K$. It is finite over $P[\delta^{-1}]$ by [F5]. Horizontal stability on a dense open set is a rational identity, so this intersection and its quotient are stable under the connection. By [F1] they are locally free. They analytically coincide with $S$ and its quotient: agreement on a dense open set propagates along horizontal frames. The inverse image $N=\{m\in M:m|_{\rm reg}\in S_{\rm alg}\}$ is an $H_{1,c}$-submodule, finite over $P$ by [F5], and inherits local nilpotence of $\mathfrak h$; hence $N\in\mathcal O_c$. Clearing a power of $\delta$ for each localized element shows $N_{\rm reg}=S_{\rm alg}$. The object $M/N$ realizes the quotient representation. This proves closure under subobjects and quotients. [F1, F5, step 2.2, algebra]

4.1 For completeness, any algebraic localized map $f:M_{\rm reg}\to N_{\rm reg}$ gives an explicit roof in the torsion quotient. Take the inverse image $G$ of its graph under $M\oplus N\to M_{\rm reg}\oplus N_{\rm reg}$. This is an $H$-submodule and belongs to $\mathcal O_c$ by [F5]. Projection $G\to M$ becomes an isomorphism after localization, so has torsion kernel and cokernel; the other projection gives $M\leftarrow G\to N$. Conversely a map that localizes to zero has torsion image and is zero in the quotient. Two roofs with identical localization agree after this same torsion identification. Exact localization makes $\mathcal T$ Serre and proves that this is precisely the Serre quotient. Combining these roofs, full faithfulness from the earlier steps and subquotient closure proves every assertion. [F1, F5, step 3.1, step 3.2, algebra] ∎

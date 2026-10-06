---
id: def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series
kind: definition
title: "The normalized Khovanov-Rozansky HOMFLYPT Euler series"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 10
deps: [thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift, def-braid-group-by-the-artin-presentation, def-closure-of-a-geometric-braid, def-markov-conjugation-and-stabilization-moves, def-khovanov-rozansky-complex-and-trigraded-braid-homology, def-axiom-of-choice, thm-hilbert-serre-theorem, cor-finite-variable-polynomial-ring-noetherian, thm-finitely-generated-modules-over-noetherian-rings-are-noetherian, lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), section 1, the normalized series before formula (7), printed p. 10, and section 2, subsection 7, printed p. 36; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, Geom. Topol. 12 (2008) 1387-1425 (published version of record), the half-integer regrading of Wu and formula (20), printed pp. 1389 and 1397-1398"
      url: "https://msp.org/gt/2008/12-3/gt-v12-n3-p04-p.pdf"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the rationality
identification via [[thm-hilbert-serre-theorem]] below. The diagram-wise
formal-series construction itself requires no choice. For a braid diagram $D$ on $s(D)\ge1$ strands, whose closure is nonempty
([[def-braid-group-by-the-artin-presentation]],
[[def-closure-of-a-geometric-braid]]) let $|D|_+$ and $|D|_-$ be its numbers
of positive and negative crossings (the source's convention: $\sigma_i$ is
positive, $\sigma_i^{-1}$ negative, and the braid is clockwise oriented), and
let $\langle D\rangle$ be the Euler characteristic of
[[def-khovanov-rozansky-complex-and-trigraded-braid-homology]]. Put
$\alpha:=-t^{-1}q^{-1}$ in $\mathbb Z[q^{\pm1},t^{\pm1}]$ and let
$\sqrt\alpha$ denote a fixed formal square root in
$T_0:=\mathbb Z[q^{\pm1},t^{\pm1},\alpha^{\pm1/2},(1-q^2)^{-1}]$ (with $\alpha^{-1/2}$ the
inverse of the chosen root). The **normalized Khovanov-Rozansky HOMFLYPT Euler
series** of $D$ is
$$\widetilde F(D):=\sqrt\alpha^{\,|D|_+-|D|_--s(D)+1}\,\langle D\rangle\in T_0.$$

This is the normalization displayed immediately before formula (7) of
Khovanov-Rozansky II (printed p. 10), designed to remove the positive and
negative stabilization factors of the unnormalized Euler series.

Caveats: $\widetilde F$ is here a function of braid diagrams, and its Markov
invariance is not asserted in this definition (it is the content of the
categorification theorem at the end of the page, which uses the Markov moves of
[[def-markov-conjugation-and-stabilization-moves]]); the square root is formal
and the exponent may be negative, so all inverses of $\alpha$ are used; the
whole expression depends on the source's clockwise-braid and crossing
conventions, which must be kept fixed. The displayed normalization is the arXiv
v2 one; the published version of the same construction replaces it by Wu's
half-integer regrading so that the invariant is defined without an overall
shift, and the comparison between the two normalizations is part of
the categorification theorem at the end of this page.

## Facts & Assumptions

**Given:** a braid diagram $D$ on $s(D)$ strands with $|D|_+$ positive and $|D|_-$ negative crossings, the Euler characteristic $\langle D\rangle$ of its trigraded homology, and AC and the ring $T_0=\mathbb Z[q^{\pm1},t^{\pm1},\alpha^{\pm1/2},(1-q^2)^{-1}]$ with a fixed square root $\sqrt\alpha$ of $\alpha=-t^{-1}q^{-1}$.

[F1] The Euler characteristic $\langle D\rangle=\sum_{j,k,l}(-1)^jt^kq^l\dim_{\mathbb Q}H^j_{k,l}(D)$ is defined for every braid diagram, and, under AC, the trigraded groups are well defined up to an overall shift under change of braid representative ([[def-khovanov-rozansky-complex-and-trigraded-braid-homology]], [[thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift]]).

[F2] In the braid group $B_n$ the generators are $\sigma_1,\dots,\sigma_{n-1}$; a positive crossing is an occurrence of some $\sigma_i$ and a negative crossing an occurrence of some $\sigma_i^{-1}$, so $|D|_+$ and $|D|_-$ depend only on the braid word presented by the diagram ([[def-braid-group-by-the-artin-presentation]]).

[F3] Eliminating an internal linear row substitutes its variable in all other rows and retains the remaining quadratic relations. A closed nonempty resolution reduces to a finite Koszul complex over a polynomial ring in finitely many remaining mark variables, all of second internal degree $2$ ([[lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type]]).

[F4] Finite-variable polynomial rings over a Noetherian ring are Noetherian; finite modules over them are Noetherian. Under AC, the Hilbert series of a finite graded module over a standard graded polynomial algebra over $\mathbb Q$ has Laurent-polynomial numerator and denominator a power of $1-z$ ([[cor-finite-variable-polynomial-ring-noetherian]], [[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]], [[thm-hilbert-serre-theorem]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** verification of well-definedness of the exponent, of the coefficient ring, and of the unknot value.

1.1 *The exponent is well defined.* The numbers $|D|_+$ and $|D|_-$ are determined by the braid word of $D$ by [F2] and depend only on the diagram, and $s(D)=n$ for $D\subset B_n$; hence the integer $|D|_+-|D|_--s(D)+1$ is a well-defined function of the braid diagram. The power $\sqrt\alpha^{m}$ is defined for every $m\in\mathbb Z$ because $\alpha$ is invertible in $\mathbb Z[q^{\pm1},t^{\pm1}]$ and $\sqrt\alpha$ and $\alpha^{-1/2}$ are units of $T_0$ by construction. The remaining issue is that the Euler series is in this localized ring, proved next. [F1, F2, algebra]

1.2 *The two stabilizations move the exponent controllably.* For the positive stabilization $D\sigma_n$ of a diagram on $n$ strands one has $|D\sigma_n|_+=|D|_++1$ and $s=n+1$, so the exponent $|D|_+-|D|_--s+1$ is unchanged; for the negative stabilization $D\sigma_n^{-1}$ one has $|D\sigma_n^{-1}|_-=|D|_-+1$ and the exponent decreases by $2$. This is the arithmetic reason for the choice of normalization, and it is used in the categorification theorem together with the stabilization values of the Euler series, not asserted as invariance here. [F2, algebra]

2.1 *The rational coefficient ring.* For a nonempty braid closure, the finitely many resolution complexes in [F3] are finite complexes of finite free modules over $\mathbb Q[x_1,\ldots,x_N]$, after the universal $(a,0)$ row is removed. Only finitely many first internal degrees occur. This polynomial ring is Noetherian by [F4], since $\mathbb Q$ has only the ideals $0,\mathbb Q$; thus their kernels, images and cohomology, and then the cohomology of the finite crossing cube, are finitely generated in each first internal degree. Split each second internal grading into its two parity classes and set $z=q^2$. Regrading a parity class to integer degrees makes it a finite standard graded polynomial module. Hilbert-Serre [F4], under AC, writes each such series as a Laurent polynomial in $q$ divided by a power of $1-q^2$. There are finitely many cochain and first internal degrees, so their signed $t$-weighted sum is in $\mathbb Z[t^{\pm1},q^{\pm1},(1-q^2)^{-1}]$. Multiplication by the specified root power yields $\widetilde F(D)\in T_0$. The rational expressions are expanded using $(1-q^2)^{-1}=\sum_{d\ge0}q^{2d}$ when read as formal series. The zero-strand empty diagram is excluded from this normalized-link definition: its raw complex is $\mathbb Q[a]$, with $\deg a=(2,0)$, and its raw v2 Euler is $(1-t^2)^{-1}$. Substituting $s=e=0$ into the normalization expression would formally give $\sqrt\alpha/(1-t^2)$ in the larger localization adjoining $(1-t^2)^{-1}$; this is not identified with an empty-link HOMFLYPT value. [F1, F3, F4, step 1.1, algebra]

3.1 *The unknot value.* For the one-strand diagram $D$ of the unknot one has $|D|_+=|D|_-=0$ and $s(D)=1$, so the exponent is $0$ and $\widetilde F(D)=\langle D\rangle$. The direct computation of the one-mark circle gives $H(D)\cong\mathbb Q[x]\{-1,1\}$ and $\langle D\rangle=\sum_{m\ge0}t^{-1}q^{1+2m}=t^{-1}q/(1-q^2)=t^{-1}/(q^{-1}-q)$; with $\alpha=-t^{-1}q^{-1}$ one has $\alpha/(1-q^{-2})=-t^{-1}q^{-1}q^2/(q^2-1)=t^{-1}q/(1-q^2)$, so $\widetilde F(D)=\alpha/(1-q^{-2})$, the normalization recorded in section 7 of the source. [F1, step 1.1, step 2.1, algebra] ∎

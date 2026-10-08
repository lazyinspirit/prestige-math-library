---
id: thm-zero-length-sets-and-quasicircles-are-conformally-removable
kind: theorem
title: Zero-length compact sets and quasicircles are conformally removable
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 13
deps:
  - cor-injective-holomorphic-derivative-nonzero
  - def-axiom-of-choice
  - def-chordal-metric-riemann-sphere
  - def-conformal-removable-compact-set
  - def-countable-choice
  - def-hausdorff-measure
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-mobius-transformation
  - def-quasicircle
  - def-riemann-sphere-holomorphic-charts
  - thm-stereographic-projection-riemann-sphere-homeomorphism
  - lem-conformal-removability-is-quasiconformally-invariant
  - lem-round-circles-are-conformally-removable
  - lem-zero-length-sets-are-removable-for-continuous-analytic-functions
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-mobius-group-and-projective-linear-identification
  - thm-mobius-transformations-biholomorphic-sphere
axiom_use: >-
  Assume AC for the round-circle and quasiconformal-invariance suppliers and the
  quasiconformal convention in the quasicircle definition. Countable Choice is
  used by the finite-Hausdorff-length continuous-analytic-removability supplier;
  it follows from AC by [[thm-choice-implies-dependent-implies-countable-choice]].
  The normalization and quotient argument in part (a) uses no choice beyond
  that supplier's Countable Choice assumption.
sources:
  scraped: []
  references:
    - title: "Malik Younsi, On removable sets for holomorphic functions, EMS Surveys in Mathematical Sciences 2 (2015), 219–254"
      url: "https://ems.press/content/serial-article-files/36977?nt=1"
      locator: "§3.2, Theorem 3.5, printed pp. 232–233: finite-H¹ sets are removable for continuous analytic functions, but the paper explicitly gives only a proof sketch and points to Garnett, Chapter III, §II for details; §5.1 Proposition 5.1 and Proposition 5.3, printed pp. 241–242, give A-removable ⇒ CH-removable and quasiconformal invariance. The quotient proof cited by Proposition 5.1 is Proposition 4.3, printed pp. 235–236. The complete available arguments were read; the finite-length covering proof remains an open source obligation."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §16.3, printed pp. 215–217, Lemma 16.3: quasicircles are removable; its stated route uses equivalence with quasiconformal removability and quasiconformal invariance. Section 16.1 uses a neighborhood-local formulation, while this item uses the library's explicitly global sphere formulation."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes, 164 pp.)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §7, Corollary 7.7, printed p. 76: in the section on quasiconformal removability, the quasicircle case is reduced to quasiconformal removability of the line by pre- and post-composition. This corroborates the QC-removability input only; the present proof uses the global CH-removability and QC-invariance suppliers."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $\mathcal H^1_\chi$ denote one-dimensional Hausdorff measure for the chordal metric on $\widehat{\mathbb C}$. Every compact set $K\subseteq\widehat{\mathbb C}$ with $\mathcal H^1_\chi(K)=0$ is globally conformally removable; the same proof shows this for every compact $K$ with $\mathcal H^1_\chi(K)<\infty$ ([[def-conformal-removable-compact-set]]).

Every quasicircle is globally conformally removable ([[def-quasicircle]]).

No converse and no Hausdorff-dimension threshold are asserted.

## Facts & Assumptions

**Given:** AC and a compact set $K\subseteq\widehat{\mathbb C}$ with finite chordal one-dimensional Hausdorff measure.

[F1] The chordal metric is Euclidean distance after stereographic projection. The finite-coordinate formula
$$\chi(z,w)=\frac{2|z-w|}{\sqrt{(1+|z|^2)(1+|w|^2)}}$$
follows by expanding the squared distance between the coordinate images in [[thm-stereographic-projection-riemann-sphere-homeomorphism]]; it gives bi-Lipschitz equivalence to Euclidean distance on bounded chart disks ([[def-chordal-metric-riemann-sphere]]). Hausdorff measure is defined by small-diameter covers; planar Lebesgue outer measure is countably subadditive and a square has its positive Euclidean area ([[def-hausdorff-measure]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F2] Hausdorff measure is monotone and is multiplied by at most $L$ under an $L$-Lipschitz map; the latter follows directly by mapping the covers in [[def-hausdorff-measure]]. Every Möbius map is chordally Lipschitz: if $M(z)=(az+b)/(cz+d)$ has coefficient matrix $A$, then
$$\chi(Mz,Mw)=\frac{2|\det A|\,|z-w|}{\|A(z,1)\|_2\,\|A(w,1)\|_2},$$
with the formula extended continuously at poles and infinity. If $s_{\min}>0$ is the smallest singular value of $A$, comparison with [F1] gives $\chi(Mz,Mw)\le |\det A|s_{\min}^{-2}\chi(z,w)$.

[F3] Möbius transformations are biholomorphic in the sphere charts and form a group under composition ([[thm-mobius-transformations-biholomorphic-sphere]], [[thm-mobius-group-and-projective-linear-identification]], [[def-riemann-sphere-holomorphic-charts]]).

[F4] If a compact $E\subseteq\widehat{\mathbb C}$ has finite chordal $\mathcal H^1_\chi$ and $u:\widehat{\mathbb C}\to\mathbb C$ is continuous and holomorphic off $E$, then $u$ is constant ([[lem-zero-length-sets-are-removable-for-continuous-analytic-functions]]). This supplier states the required finite-length result. Its square-covering proof is provisional: Younsi's Theorem 3.5 gives only a sketch and refers to Garnett, Chapter III, §II, whose full argument has not been verified. The use in part (a) remains open until that supplier proof is reconciled.

[F5] Global conformal removability means that every sphere homeomorphism conformal off the compact set is Möbius ([[def-conformal-removable-compact-set]]). That definition records the neighborhood-local formulation separately and does not assert its equivalence with the global one; this theorem uses only the global formulation.

[F6] The round circle $\mathbb S^1$ is globally conformally removable ([[lem-round-circles-are-conformally-removable]]). This supplier remains provisional: its proof uses the round-circle gluing item and the one-quasiconformal criterion, whose source and batch-12 interfaces are still open.

[F7] Global conformal removability is invariant under quasiconformal sphere homeomorphisms ([[lem-conformal-removability-is-quasiconformally-invariant]]). This supplier remains provisional pending its batch-12 QC/Beltrami interfaces and the absent batch-13 measurable-Riemann-mapping proof.

[F8] By definition, a quasicircle is the image of $\mathbb S^1$ under a quasiconformal sphere homeomorphism ([[def-quasicircle]]). This definition's batch-12 analytic and geometric QC conventions are still under review; its use here is provisional.

[F9] AC implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F10] An injective holomorphic map on a complex domain has nonzero derivative ([[cor-injective-holomorphic-derivative-nonzero]]).

## Proof

**Proof technique:** normalize the exceptional set away from infinity, form a continuous holomorphic quotient, and apply finite-length removability; transport round-circle removability to quasicircles by quasiconformal invariance.

1.1 Every nonempty open subset of the sphere has infinite chordal $\mathcal H^1_\chi$. Indeed, it contains a closed Euclidean square in a finite chart, and [F1] compares the two metrics there. If sets of Euclidean diameters $d_j\le\delta$ cover that square, each has planar outer area at most $\pi d_j^2\le\pi\delta d_j$; countable subadditivity gives $|Q|\le\pi\delta\sum_j d_j$, so the covering sums tend to infinity as $\delta\downarrow0$. Thus $K$ has empty interior and in particular is not the whole sphere. [F1, F9, algebra]

2.1 Choose $p\in\widehat{\mathbb C}\setminus K$, and let $T$ be the identity if $p=\infty$ and $T(z)=1/(z-p)$ otherwise. Then $T$ is Möbius, $K':=T(K)$ is compact in $\mathbb C$, and [F2] gives $\mathcal H^1_\chi(K')<\infty$. [F2, F3, step 1.1, construct]

3.1 Let $F$ be any sphere homeomorphism conformal off $K$. Define $S$ to be the identity if $(T\circ F\circ T^{-1})(\infty)=\infty$ and otherwise set $S(z)=1/(z-(T\circ F\circ T^{-1})(\infty))$. The map $F_0:=S\circ T\circ F\circ T^{-1}$ fixes infinity and is conformal off $K'$. Since $K'$ is compact in $\mathbb C$, $F_0$ is conformal near infinity. In the local coordinate $w=1/z$, the chart expression $H(w)=1/F_0(1/w)$ is holomorphic, injective, and vanishes at $0$. By [F10], $H'(0)=c\ne0$; its Taylor expansion $H(w)=cw+dw^2+O(w^3)$ therefore yields $F_0(z)=az+b+O(1/z)$ near infinity, with $a=c^{-1}\ne0$. [F3, F10, step 2.1, algebra]

4.1 Choose a finite $z_0\notin K'$ and define $G(z)=(F_0(z)-F_0(z_0))/(z-z_0)$ for $z\ne z_0$, $G(z_0)=F_0'(z_0)$, and $G(\infty)=a$. Because $F_0$ is holomorphic near $z_0$ and has the expansion in step 3.1 near infinity, these values make $G$ continuous on the sphere and holomorphic near both $z_0$ and infinity. On $K'$, the denominator is nonzero and $F_0$ is finite because $F_0^{-1}(\infty)=\infty$; hence $G$ is continuous there as well. Thus $G$ is holomorphic on $\widehat{\mathbb C}\setminus K'$. [step 2.1, step 3.1, algebra]

5.1 By [F9], the Countable Choice hypothesis of [F4] follows from AC. Apply [F4] to $G$ and $K'$; then $G$ is constant, with value $a\ne0$. For every finite $z\ne z_0$, including points of $K'$, the quotient identity gives $F_0(z)=F_0(z_0)+a(z-z_0)$; continuity gives the same identity at $z_0$. Therefore $F_0$ is an affine Möbius transformation. Since $F=T^{-1}\circ S^{-1}\circ F_0\circ T$ and Möbius maps form a group, $F$ is Möbius. As $F$ was arbitrary, [F5] proves that $K$ is globally conformally removable. [F3, F4, F5, F9, step 3.1, step 4.1, algebra]

6.1 Let $\Gamma$ be a quasicircle. By [F8], $\Gamma=h(\mathbb S^1)$ for a quasiconformal sphere homeomorphism $h$. The round circle is globally conformally removable by [F6], so [F7] makes $\Gamma$ globally conformally removable. The two provisional supplier chains and their exact consuming use in this step are recorded in [F6]–[F8]. [F6, F7, F8, given] ∎

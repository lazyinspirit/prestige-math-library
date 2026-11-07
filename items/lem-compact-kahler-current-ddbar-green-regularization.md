---
id: lem-compact-kahler-current-ddbar-green-regularization
kind: lemma
title: "Current regularization and the separated Dolbeault quotient on a compact Kähler manifold"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-compact-kahler-manifold-and-hodge-polarization-conventions
  - lem-kahler-commutators-and-laplacian-type-preservation
  - thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Henri Gillet and Christophe Soulé, Arithmetic intersection theory"
      url: "https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf"
      locator: "§1.2.2(i)–(iii), printed pp. 101–102, compact Kähler case; separated quotient in §2.2.12, printed p. 122"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a compact Kähler manifold of complex dimension $n\ge0$. Write $E^{p,q}$ for its smooth $(p,q)$-forms with the Fréchet topology of uniform derivatives in finitely many compact charts. Realize its currents $D^{p,q}$ as the continuous conjugate-linear dual of $E^{p,q}$, using the first-variable-linear integral Hermitian pairing to embed smooth forms. Equivalently, the usual linear-functional realization on complementary-degree test forms is obtained by the Hodge-star/conjugation identification. Give currents either their weak topology or their strong topology of uniform convergence on bounded sets of smooth test forms. Terms outside $0\le p,q\le n$ are zero.

Put $A=\partial$, $B=\bar\partial$, let $A^*,B^*$ be their formal Hermitian adjoints, and let $H,G$ be the harmonic projection and Green inverse of $\Delta_d$ on smooth forms, extended to currents by transposition. For $n=0$ put $H=I$, $G=0$. Define
$$\alpha(T)=4A^*(BB^*+B^*B)G^2T,\qquad \beta(T)=4A^*AB^*G^2T,\qquad K(T)=HT-4A^*B^*G^2ABT.$$
These are continuous current operators, of bidegrees $(-1,0)$, $(0,-1)$ and $(0,0)$ respectively, and preserve smoothness. They satisfy
$$T=K(T)+A\alpha(T)+B\beta(T).$$
The operator $K$ is a continuous projection with kernel $\operatorname{im}\partial+\operatorname{im}\bar\partial$. Consequently the current quotient by this sum is Hausdorff for either topology. If $\partial\bar\partial T$ is smooth, then $K(T)$ is smooth; if it is zero, $K(T)=HT$ is harmonic. If a smooth form $u$ is a sum of a $\partial$-boundary and a $\bar\partial$-boundary of currents, then $u=\partial\alpha(u)+\bar\partial\beta(u)$ has smooth primitives. The individual boundary spaces are also closed, with
$$\operatorname{im}\partial=\ker\partial\cap\ker H,\qquad \operatorname{im}\bar\partial=\ker\bar\partial\cap\ker H.$$

## Statement references

[Gillet–Soulé, *Arithmetic intersection theory*, §§1.2.2 and 2.2.12](https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, $X$, its metric and current spaces, and the operators in the Statement.

[A1] The Axiom of Choice is assumed by the compact elliptic/Hodge suppliers ([[def-axiom-of-choice]]).

[F1] The compact Kähler conventions supply the bidegrees, integral Hermitian pairing, formal adjoints and dimension-zero convention ([[def-compact-kahler-manifold-and-hodge-polarization-conventions]]).

[F2] The Kähler identities give $\Delta_d=2(AA^*+A^*A)=2(BB^*+B^*B)$, $AB+BA=0$, $AB^*+B^*A=0$, $A^*B+BA^*=0$, and commutation of $\Delta_d$ with $A,B$ and preservation of bidegree ([[lem-kahler-commutators-and-laplacian-type-preservation]]).

[F3] The form Laplacians have the compact Laplace-type hypotheses, nonnegative selfadjoint realizations, finite-dimensional smooth harmonic spaces and the smooth energy and commutation identities ([[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]]).

[F4] The Green inverse is selfadjoint, bounded $H^k\to H^{k+2}$ for every nonnegative integer $k$, and preserves smooth forms. The harmonic projection is finite-rank smoothing and $\Delta_dG=G\Delta_d=I-H$, $GH=HG=0$ ([[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]).

[F5] The compact Sobolev norms are defined in finitely many charts, and $H^k\hookrightarrow C^r$ continuously if $k>r+n$ on a real $2n$-dimensional manifold ([[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]]).

## Proof

1.1 Suppose first $n\ge1$. By [F2]–[F3], a smooth harmonic form $h$ satisfies $Ah=A^*h=Bh=B^*h=0$, since its energy for each of the two equal Laplacians is zero. Formal adjunction therefore gives $DH=HD=0$ for $D\in\{A,A^*,B,B^*\}$. Each $D$ commutes with $\Delta_d$, by [F2] and adjunction. For smooth $u$, the form $DGu$ is orthogonal to harmonics and satisfies $\Delta_dDGu=Du$, so uniqueness of the orthogonal solution in [F4] gives $DG=GD$. The same uniqueness gives preservation of bidegree by $G$ and $H$. All these identities are initially identities on smooth forms, without an assertion about domains of unbounded operators on arbitrary $L^2$ forms. [given, A1, F1, F2, F3, F4]

2.1 For every $r$, choose an integer $k\ge2$ with $k>r+n$. By [F4]–[F5], $\|Gu\|_{C^r}\le C\|Gu\|_{H^k}\le C'\|u\|_{H^{k-2}}\le C''\|u\|_{C^{k-2}}$ for smooth $u$; the last estimate uses finitely many compact chart volumes and a fixed partition in the Sobolev norm. Thus $G:C^\infty\to C^\infty$ is continuous. Differential operators are continuous by their finite derivative formulas. If $h_1,\ldots,h_N$ is an orthonormal harmonic basis, then $Hu=\sum_j\langle u,h_j\rangle h_j$, so $H$ is continuous too. Define $(GT)(\phi)=T(G\phi)$ and $(HT)(\phi)=T(H\phi)$, and for a differential operator define $(DT)(\phi)=T(D^*\phi)$. These agree with the smooth operators by selfadjointness/formal adjunction. In particular $HT=\sum_jT(h_j)h_j$ is smooth. A continuous map of smooth test spaces sends bounded sets to bounded sets, so its transpose is continuous both weakly and strongly: the strong seminorm over a bounded set $C$ becomes the seminorm over its bounded image. Transposing the smooth identities of step 1.1 now proves those same operator identities on currents, including $DG=GD$, $DH=HD=0$, $\Delta_dG=G\Delta_d=I-H$ and $H^2=H$. [F1, F4, F5, step 1.1, choose, algebra]

3.1 Expand the equal Kähler Laplacians, retaining every boundary term. The anticommutators in [F2] give $A^*ABB^*=BA^*AB^*$ and $A^*AB^*B=-A^*B^*AB$. Hence, on smooth forms and by step 2.1 on currents,
$$\frac{\Delta_d^2}{4}=(AA^*+A^*A)(BB^*+B^*B)=A\bigl[A^*(BB^*+B^*B)\bigr]+B\bigl[A^*AB^*\bigr]-A^*B^*AB.$$
Apply this to $G^2T$. Step 2.1 gives $\Delta_d^2G^2=(I-H)^2=I-H$, and $G$ commutes with $A,B$. Multiplying by four gives $T-HT=A\alpha(T)+B\beta(T)-4A^*B^*G^2ABT$, which is the asserted decomposition. The displayed compositions have the stated bidegrees and are continuous by step 2.1. [F2, F4, step 2.1, algebra]

3.2 The inclusion $\operatorname{im}A\subseteq\ker A\cap\ker H$ follows from $A^2=0$ and step 2.1. If $AT=HT=0$, then $T=\Delta_dGT=2(AA^*+A^*A)GT=2AA^*GT$, since $AGT=GAT=0$. Thus $T$ belongs to $\operatorname{im}A$. The identical calculation with $B$ gives its asserted image. Each is an intersection of kernels of continuous operators into Hausdorff spaces and is closed. [F2, step 2.1, algebra]

4.1 If $T=AU+BV$, then $ABT=0$ by $A^2=B^2=0$ and $AB=-BA$, while $HT=0$ by step 2.1. Thus $K(T)=0$. Conversely if $K(T)=0$, step 3.1 expresses $T$ in $\operatorname{im}A+\operatorname{im}B$. This identifies the kernel. Since $T-K(T)$ lies in this kernel, $K^2=K$. A continuous idempotent has closed image $\ker(I-K)$ and closed kernel. The map induced by $K$ from the quotient to its image has continuous inverse given by inclusion followed by the quotient map. Consequently the quotient is Hausdorff in either current topology. The current spaces themselves are Hausdorff because distinct functionals differ on a test form. [F1, F2, step 2.1, step 3.1, algebra]

5.1 If $ABT$ is smooth, then $G^2ABT$ and $A^*B^*G^2ABT$ are smooth by [F4], while $HT$ is smooth by step 2.1. Therefore $K(T)$ is smooth, and the decomposition in step 3.1 supplies the claimed representative. If $ABT=0$ it gives $K(T)=HT$. If smooth $u$ is a current boundary, step 4.1 gives $K(u)=0$ and step 3.1 gives $u=A\alpha(u)+B\beta(u)$; both primitives are smooth because every constituent operator preserves smoothness. [F4, step 2.1, step 3.1, step 4.1]

6.1 Every out-of-range operator is zero on the finite bigraded exterior bundle, so the identities hold also at $p=0$, $q=0$, $p=n$ or $q=n$. If $n=0$, [F1] makes $X$ a finite discrete space; its test space is finite dimensional, so every current is smooth, all differentials vanish, and $H=I$, $G=0$ give $K=I$ and $\alpha=\beta=0$. If $X$ is empty all spaces are zero. These cases prove the remaining assertions. [given, F1, step 3.1, step 4.1, step 3.2, step 5.1] ∎

## Remarks

With $dd^c=(i/2\pi)\partial\bar\partial$, smoothness of $dd^cT$ is the smoothness hypothesis used above. For a real or arithmetic parity condition, a representative and its primitives can be averaged with their conjugates: if a continuous involution $C$ exchanges $A,B$, preserves smooth forms and satisfies $CT=\varepsilon T$, average the decomposition $T=w+A\alpha+B\beta$ to obtain $w'=(w+\varepsilon Cw)/2$, $\alpha'=(\alpha+\varepsilon C\beta)/2$, $\beta'=(\beta+\varepsilon C\alpha)/2$. This preserves the required parity without assuming that the original metric is invariant under $C$.

This is the compact Kähler regularization and separated-quotient prerequisite. It does not assert logarithmic representatives on a noncompact complex variety, the residue or cutoff convergence identities for Green star products, or the full arithmetic Chow product.

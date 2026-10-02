---
id: thm-weierstrass-finite-projection-hypersurface-germ
kind: theorem
title: "Finite local projection of a reduced hypersurface germ"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-discriminant-of-a-monic-polynomial
  - def-reduced-holomorphic-germ-for-hypersurface
  - def-weierstrass-polynomial
  - lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular
  - lem-reduced-prepared-polynomial-has-nonzero-discriminant
  - lem-stability-of-slice-zero-count-under-holomorphic-parameters
  - lem-weierstrass-quotient-is-a-finite-module
  - prop-units-in-the-holomorphic-germ-ring
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - thm-discriminant-root-formula-and-repeated-root-criterion
  - thm-holomorphic-implicit-function-theorem
  - thm-weierstrass-preparation-theorem
justified_by: []
landmark: true
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "Theorem 6.2.3 Weierstrass preparation (p. 176); Theorem 6.3.3 dependence of zeros and the discriminant set (p. 178); §6.6 hypervariety germs (p. 188)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (4.19) finite integral extension, degree and discriminant of a germ parametrisation (p. 95)."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $n\ge1$, let $p\in\mathbb C^n$ and let $f\in\mathcal O_{\mathbb C^n,p}$ be a
reduced nonzero nonunit germ. Center coordinates at $p$, so the germ is
$\widetilde f(z):=f(p+z)\in\mathcal O_{\mathbb C^n,0}$. Then there are an
invertible complex-linear change of these centered coordinates $T$ supplied
by the generic-linear-coordinate lemma, a monic Weierstrass polynomial $W$ of
some degree $d\ge1$ in the new last variable, and a product neighbourhood
$V\times D\subseteq\mathbb C^{n-1}\times\mathbb C$ of the origin on which the
zero sets agree:

$$Z(\widetilde f\circ T)=Z(W)\quad\text{on }V\times D .$$

The resulting local projection in the original coordinates is transported by
the affine coordinate map $z\mapsto p+Tz$.

For this $W$ on the chosen product representative, put $X_W:=Z(W)\cap(V\times D)$. Then:

1. the projection $\pi:X_W\to V$, $(z',T)\mapsto z'$, is proper, surjective
   and has finite fibres;
2. the quotient algebra $\mathcal O_{n,0}/(W)$ is a finitely generated
   $\mathcal O_{n-1,0}$-module;
3. with $D_W:=\operatorname{Disc}_T(W)$, the restriction of $\pi$ over
   $V\setminus\{D_W=0\}$ is a $d$-sheeted holomorphic covering.

When $n=1$ the base $V$ is a point.

## Facts & Assumptions

**Given:** A reduced nonzero nonunit germ $f\in\mathcal O_{\mathbb C^n,p}$ with $n\ge1$.

[F1] Reducedness means that no irreducible germ divides $f$ twice ([[def-reduced-holomorphic-germ-for-hypersurface]]).

[F2] The centered germ $\widetilde f(z)=f(p+z)$ becomes regular in the last variable of some order $d$ after an invertible complex-linear coordinate change $T$ ([[lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular]]).

[F3] A germ regular in the last variable of order $d$ is a unit times a Weierstrass polynomial $W$ of degree $d$, which is monic with lower coefficients vanishing at the origin ([[thm-weierstrass-preparation-theorem]], [[def-weierstrass-polynomial]]).

[F4] A unit of the germ ring is exactly a germ with nonzero value at the origin, so a unit has no zeros on a sufficiently small neighbourhood ([[prop-units-in-the-holomorphic-germ-ring]]).

[F5] A germ regular in the last variable of order $d$ has a representative and radii such that, over a neighbourhood $V$ of the origin, every slice has no zero on $|\zeta|=r$ and exactly $d$ zeros in $|\zeta|<r$, counted with multiplicity ([[lem-stability-of-slice-zero-count-under-holomorphic-parameters]]).

[F6] The quotient $\mathcal O_{n,0}/(W)$ of a degree-$d$ Weierstrass polynomial is generated as an $\mathcal O_{n-1,0}$-module by the classes of $1,T,\dots,T^{d-1}$ ([[lem-weierstrass-quotient-is-a-finite-module]]).

[F7] If $W(z_0',\cdot)$ has a simple zero $\tau$ at a base point $z_0'$, then near $(z_0',\tau)$ the zero set of $W$ is the graph of the unique holomorphic solution supplied by the implicit function theorem, since $\partial_TW(z_0',\tau)\ne0$ ([[thm-holomorphic-implicit-function-theorem]]).

[F8] If $f$ is reduced and regular of order $d$, then the prepared $W$ is square-free over $K=\operatorname{Frac}(\mathcal O_{n-1,0})$ and $D_W=\operatorname{Disc}_T(W)$ is a nonzero base germ ([[lem-reduced-prepared-polynomial-has-nonzero-discriminant]]).

[F9] The discriminant is a coefficient expression, and for a monic one-variable polynomial it vanishes exactly when the polynomial has a repeated root ([[def-discriminant-of-a-monic-polynomial]], [[thm-discriminant-root-formula-and-repeated-root-criterion]]).

[F10] A monic polynomial of degree $d\ge1$ over $\mathbb C$ has exactly $d$ roots counted with multiplicity, so it has at most $d$ distinct roots ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]).

[F11] A covering map has fibres whose points lie in pairwise disjoint sheets mapped homeomorphically onto evenly covered open sets ([[def-covering-map-and-evenly-covered-neighbourhoods]]).



**Proof technique:** direct — prepare in generic coordinates, shrink by the stable slice count, and read properness, finiteness and the unramified covering off the monic model.

## Proof
1.1 Center at $p$ by writing $\widetilde f(z)=f(p+z)$. By [F2] choose an invertible complex-linear map $T$ with $\widetilde f\circ T$ regular in the last variable of order $d$, and by [F3] prepare $\widetilde f\circ T=uW$ with $W$ a Weierstrass polynomial of degree $d$. Since $f$ is a nonunit, $d>0$. Shrinking to a neighbourhood on which $u$ has no zeros, which [F4] permits, gives $Z(\widetilde f\circ T)=Z(W)$ there; the map $z\mapsto p+Tz$ transports this local model to the original germ. [given, F1, F2, F3, F4]

2.1 Apply [F5] to $W$ and shrink further: there are a base polydisc $V$ about $0\in\mathbb C^{n-1}$ and a radius $r>0$ such that for every $z'\in V$ the slice $T\mapsto W(z',T)$ has no zero on $|T|=r$ and exactly $d$ zeros in $D=\{T:|T|<r\}$, counted with multiplicity. [step 1.1, F5]

2.2 By [F6], the classes of $1,T,\dots,T^{d-1}$ generate $\mathcal O_{n,0}/(W)$ as an $\mathcal O_{n-1,0}$-module, so this quotient is finite. [step 1.1, F6]

3.1 The projection $\pi:Z(W)\cap(V\times D)\to V$ is surjective: for each $z'\in V$, the slice $W(z',\cdot)$ is monic of degree $d\ge1$, hence has a root by [F10], and all its roots lie in $D$ by step 2.1. Each fibre is finite, with at most $d$ points by [F10]. [step 1.1, step 2.1, F10]

3.2 Let $z_0'\in V$ with $D_W(z_0')\ne0$. By [F9], $W(z_0',\cdot)$ has $d$ distinct roots $\tau_1,\dots,\tau_d$, each simple. For each root [F7] gives a local holomorphic graph $T=\varphi_k(z')$ with $\varphi_k(z_0')=\tau_k$. Intersecting the finitely many base neighbourhoods and shrinking so the differences $\varphi_k-\varphi_l$ remain nonzero gives a common neighbourhood $U$ on which the graphs are defined and pairwise disjoint. [step 2.1, F7, F9, choose]

3.3 For compact $K\subseteq V$, let $E_K:=\{(z',T)\in K\times\overline D:W(z',T)=0\}$. Continuity of $W$ makes $E_K$ closed in the compact set $K\times\overline D$. By step 2.1 no slice has a zero on $\partial D$, so $E_K=\pi^{-1}(K)$ for $\pi:Z(W)\cap(V\times D)\to V$. Therefore $\pi^{-1}(K)$ is compact and $\pi$ is proper. [step 2.1, F10]

4.1 For $z'\in U$ the degree-$d$ polynomial $W(z',\cdot)$ vanishes at the $d$ distinct points $\varphi_1(z'),\dots,\varphi_d(z')$ from step 3.2, so these are all its roots by [F10]. Thus $\pi^{-1}(U)=\bigcup_{k=1}^d\{(z',\varphi_k(z')):z'\in U\}$ is a disjoint union of graphs, each mapped biholomorphically onto $U$. [step 3.2, F10]

5.1 By [F8] the discriminant is not the zero germ, and by [F9] its complement is exactly the set of base points with distinct roots. For each such point step 4.1 gives a neighbourhood with $d$ disjoint sheets, so the restriction of $\pi$ over $V\setminus\{D_W=0\}$ is a $d$-sheeted holomorphic covering as defined in [F11]. [step 4.1, F8, F9, F11]

6.1 If $n=1$, the base $V$ is a point. Steps 3.1 and 3.3 give surjectivity, finite fibres and properness; step 2.2 gives the finite quotient module. By [F8] and [F9] the reduced one-variable polynomial has nonzero discriminant and therefore $d$ distinct roots, so its finite zero set is a $d$-sheeted covering of the point. [step 2.2, step 3.1, step 3.3, F8, F9, F11] ∎

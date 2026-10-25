---
id: ex-qftx-gaga-analytic-untwisted-obstruction
kind: example
title: Failure of global generation for $\mathcal O(-1)$ and top cohomology of $\mathcal O(-r-1)$
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-axiom-of-choice
  - def-complex-projective-space-and-holomorphic-charts
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-qftx-gaga-projective-twisting-line-bundles
  - lem-qftx-gaga-projective-cover-laurent-cohomology
  - thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-projective-space-and-holomorphic-charts: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-qftx-gaga-projective-twisting-line-bundles: mathematical-premise
  lem-qftx-gaga-projective-cover-laurent-cohomology: mathematical-premise
  thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology: mathematical-premise
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 3
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables: A Whirlwind Tour of
        the Subject, version 4.4"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Chapter 1, §1.2, printed pp. 20–23: Laurent expansions; the projective
        degree-weighted mode calculation is proved here."
    - title: MIT OpenCourseWare 18.117 Topics in Several Complex Variables, Spring
        2005, lecture notes prepared by Jonathan Campbell
      url: https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf
      locator: "Lectures 7–9 and 11, PDF pp. 18–25: projective charts and Čech
        framework; the weighted Laurent mode calculation is supplied locally."
    - title: R. Dervan, lectures; Qiangru Kuang, notes, University of Cambridge
        Mathematics Tripos Part III, Complex Manifolds, Lent 2019
      url: https://qk206.user.srcf.net/notes/complex_manifolds.pdf
      locator: "§4.4–4.5 and §5, printed pp. 23–29: Čech comparison and line-bundle
        transition conventions; the negative-twist computation is proved here."
    - title: Jean-Pierre Serre, Géométrie algébrique et géométrie analytique, Annales
        de l'Institut Fourier 6 (1956), 1–42
      url: https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf
      locator: §13, Lemma 4 and footnote 4, printed pp. 20–21; historical context
        only, not used as a proof of the Laurent calculation.
verification:
  precheck: pending
generation:
  role: example
---

## Example

Assume full AC. For each integer $1\le r\le3$, let $X$ be the set of complex
lines in $\mathbb C^{r+1}$, equivalently
$X=\mathbb P^r(\mathbb C)=(\mathbb C^{r+1}\setminus\{0\})/\mathbb C^\times$,
with standard cover $U_i=\{[Z_0:\cdots:Z_r]:Z_i\ne0\}$ and twisting line bundle
$\mathcal O(k)$ defined by $e_j^{(k)}=(Z_j/Z_i)^k e_i^{(k)}$.
For every nonempty $I\subseteq\{0,\ldots,r\}$ write $U_I=\bigcap_{i\in I}U_i$.
For $0\le p\le r$ set $C^p(k)=\prod_{|I|=p+1}\mathcal O(k)(U_I)$ and put
$C^p(k)=0$ outside this range. Use the increasing-index alternating
restriction differential; $\check H^p(\mathcal U,\mathcal O(k))$ denotes the
cohomology of this complex. For a degree-$k$
Laurent mode $m=(m_0,\ldots,m_r)\in\mathbb Z^{r+1}$, write
$N(m)=\{i:m_i<0\}$. A mode can represent a global section only if
$N(m)=\varnothing$, and it can survive in top Čech degree only if
$N(m)=\{0,\ldots,r\}$. The degree constraints $\sum_i m_i=-1$ and
$\sum_i m_i=-r-1$ therefore give, respectively,
$$H^0(X,\mathcal O(-1))=0,\qquad H^r(X,\mathcal O(-r-1))\cong\mathbb C.$$
For a holomorphic line bundle $L$, let $\mathcal A^{0,q}(L)$ for $0\le q\le r$
be the sheaf of smooth sections of $\Lambda^{0,q}T^*X\otimes L$, set the terms
to zero for $q>r$, and define $\bar\partial_L$ coefficientwise in holomorphic
local frames. Write $H^q_{\bar\partial}(X,L)$ for the cohomology of the global
complex. The canonical projective Dolbeault
comparison identifies the displayed sheaf groups with the corresponding
global Dolbeault groups.
Every fiber of the line bundle $\mathcal O(-1)$ is one-dimensional. A line
bundle is globally generated when its global sections evaluate surjectively
onto each fiber; since $H^0(X,\mathcal O(-1))=0$, its evaluation map is zero
and is not surjective. These are analytic cohomology calculations by
degree-weighted Laurent modes and the ordered-cover Čech comparison; no GAGA
identification is used.

## Example references

[Lebl, *Tasty Bits of Several Complex Variables*, §1.2](https://www.jirka.org/scv/scv.pdf)

[MIT OpenCourseWare 18.117 lecture notes](https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf)

[Dervan–Kuang, *Complex Manifolds*, §§4–5](https://qk206.user.srcf.net/notes/complex_manifolds.pdf)

[Serre, *Géométrie algébrique et géométrie analytique*, §13](https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf)

## Facts & Assumptions

**Given:** Full AC; $1\le r\le3$; the standard ordered projective-coordinate cover; and the twisting line bundles $\mathcal O(-1)$ and $\mathcal O(-r-1)$.

[A1] Full AC means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] The standard charts of $\mathbb P^r$ have coordinates $Z_j/Z_i$ ([[def-complex-projective-space-and-holomorphic-charts]]).

[F2] Holomorphic vector bundles are locally trivial with holomorphic transition functions; a line-bundle fiber has complex dimension one ([[def-complex-manifolds-and-holomorphic-vector-bundles]]).

[F3] The line bundle $\mathcal O(k)$ has frames $e_j^{(k)}=(Z_j/Z_i)^k e_i^{(k)}$ and $\mathcal O(0)$ is the structure sheaf ([[def-qftx-gaga-projective-twisting-line-bundles]]).

[F4] Under full AC, on the standard cover each section has unique normally convergent degree-$k$ Laurent–Taylor modes; the coefficient occurs on $U_I$ exactly when $N(m)\subseteq I$, restrictions preserve it, every nonempty proper negative set contracts with locally uniform convergence, and the fixed-cover Čech cohomology is analytic sheaf cohomology ([[lem-qftx-gaga-projective-cover-laurent-cohomology]]).

[F5] Under full AC, for every holomorphic vector bundle on $\mathbb P^r$ with $0\le r\le3$, analytic sheaf cohomology is canonically the cohomology of the global smooth Dolbeault complex ([[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]).

## Proof

**Proof technique:** direct.

1.1 For a degree-$-1$ mode, $N(m)$ cannot be empty because then every $m_i\ge0$ and $\sum_i m_i\ge0$; it cannot be all of $J:=\{0,\ldots,r\}$ because then $\sum_i m_i\le-(r+1)\le-2$. Thus every mode has nonempty proper negative support. If $|N(m)|\ge2$, that mode occurs in no singleton-chart term of $C^0$. If $N(m)=\{i\}$, it occurs only in the $U_i$ term of $C^0$, while it occurs on $U_{ij}$ for any $j\ne i$; the $0$-cocycle condition on that overlap forces its coefficient in the $U_i$ term to be zero because the $U_j$ term has no such mode. Hence every degree-zero Čech cocycle has zero coefficient in every mode. The normal-convergence and coefficient-uniqueness clauses of [F4] make this coefficientwise conclusion valid for analytic sections, and the fixed-cover comparison in [F4] gives $H^0(X,\mathcal O(-1))=0$. [A1, F1, F3, F4, given, algebra]

1.2 The top Čech cochains have the single index set $J=\{0,\ldots,r\}$. Write $Z^m$ for the degree-$k$ monomial section whose coefficient in frame $e_i^{(k)}$ is $\prod_{\ell\ne i}(Z_\ell/Z_i)^{m_\ell}$. A mode with $N(m)=J$ is absent from every codimension-one face, so it has zero coefficient in every top coboundary. If $\varnothing\ne N(m)\ne J$, the convergent contraction in [F4] supplies a primitive. If $N(m)=\varnothing$, all exponents are nonnegative, so $Z^m$ is holomorphic on every chart by [F3]. Set $b_{J\setminus\{0\}}=Z^m$ and all other components of $b\in C^{r-1}(k)$ to zero; the ordered differential gives $(\delta b)_J=(-1)^0Z^m=Z^m$. There are only finitely many such nonnegative exponent tuples of any fixed total degree $k$ (none for $k<0$). Their primitives therefore sum finitely; [F4] handles the normally convergent sums with nonempty proper negative support. Thus top cohomology has exactly the modes with $N(m)=J$. [A1, F3, F4, given, construct, algebra]

2.1 For $k=-r-1$, if every $m_i<0$, write $m_i=-1-n_i$ with integers $n_i\ge0$. The total-degree equation becomes $-(r+1)-\sum_i n_i=-(r+1)$, so $\sum_i n_i=0$ and every $n_i=0$. Thus the only surviving mode is $m=(-1,\ldots,-1)$, and its coefficient space is $\mathbb C$. The normal convergence and analytic cochain contraction in [F4] show that this coefficient quotient is the actual analytic Čech quotient. The comparison in [F4] now gives $H^r(X,\mathcal O(-r-1))\cong\mathbb C$. [A1, F4, step 1.2, algebra]

3.1 Apply [F5] to both holomorphic line bundles $\mathcal O(-1)$ and $\mathcal O(-r-1)$. The canonical isomorphisms identify their global Dolbeault cohomology with the sheaf groups computed in steps 1.1 and 2.1, so the Dolbeault values are zero in degree zero for $\mathcal O(-1)$ and $\mathbb C$ in degree $r$ for $\mathcal O(-r-1)$. [A1, F3, F5, step 1.1, step 2.1]

4.1 By [F2], each fiber $\mathcal O(-1)_p$ is a one-dimensional complex vector space. Evaluation at any $p\in X$ is the zero map from $H^0(X,\mathcal O(-1))=0$ to this nonzero fiber, so it is not onto. This violates the defining fiberwise condition for global generation, proving that $\mathcal O(-1)$ is not globally generated. [F2, step 1.1, def. global generation] ∎

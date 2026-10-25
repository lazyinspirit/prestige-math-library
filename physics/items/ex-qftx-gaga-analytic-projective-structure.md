---
id: ex-qftx-gaga-analytic-projective-structure
kind: example
title: Scalar structure-sheaf cohomology of $\mathbb P^2$
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-axiom-of-choice
  - def-complex-projective-space-and-holomorphic-charts
  - def-qftx-gaga-projective-twisting-line-bundles
  - lem-qftx-gaga-projective-cover-laurent-cohomology
  - thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-projective-space-and-holomorphic-charts: mathematical-premise
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
      locator: "Chapter 1, §1.2, and Chapter 4, §4.4, printed pp. 20–23 and 142–145:
        Cauchy/Laurent methods and Dolbeault context; the three-chart mode
        contraction is computed here."
    - title: MIT OpenCourseWare 18.117 Topics in Several Complex Variables, Spring
        2005, lecture notes prepared by Jonathan Campbell
      url: https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf
      locator: "Lectures 7–9 and 11, PDF pp. 18–25: standard projective charts and
        Čech cohomology context; the direct contraction is displayed here."
    - title: R. Dervan, lectures; Qiangru Kuang, notes, University of Cambridge
        Mathematics Tripos Part III, Complex Manifolds, Lent 2019
      url: https://qk206.user.srcf.net/notes/complex_manifolds.pdf
      locator: "§4.4–4.5, printed pp. 23–26: comparison under acyclic-intersection
        hypotheses; this example uses the locally proved projective-intersection
        result."
    - title: Jean-Pierre Serre, Géométrie algébrique et géométrie analytique, Annales
        de l'Institut Fourier 6 (1956), 1–42
      url: https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf
      locator: §13, Lemma 4 and footnote 4, printed pp. 20–21; historical context
        only, not a proof of the displayed contraction.
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
generation:
  role: example
---

## Example

Assume full AC and let $X$ be the complex lines in $\mathbb C^3$, equivalently
$X=\mathbb P^2(\mathbb C)=(\mathbb C^3\setminus\{0\})/\mathbb C^\times$.
Use the standard charts $U_i=\{[Z_0:Z_1:Z_2]:Z_i\ne0\}$ for $i=0,1,2$,
ordered $0<1<2$. Let $\mathcal O_X$ be the sheaf of holomorphic functions on
$X$. For each nonempty $I\subseteq\{0,1,2\}$ set
$U_I=\bigcap_{i\in I}U_i$ and define
$$C^p=\prod_{|I|=p+1}\mathcal O_X(U_I)\quad(0\le p\le2),\qquad (\delta c)_{i_0\cdots i_{p+1}}=\sum_{\nu=0}^{p+1}(-1)^\nu c_{i_0\cdots\widehat{i_\nu}\cdots i_{p+1}}|_{U_{i_0\cdots i_{p+1}}},$$
with increasing indices, and $C^p=0$ for $p<0$ or $p>2$; Čech cohomology
means the cohomology of this complex.
For $m=(m_0,m_1,m_2)\in\mathbb Z^3$ with
$m_0+m_1+m_2=0$, write $N(m)=\{i:m_i<0\}$ and call the degree-zero
homogeneous Laurent monomial the mode $m$; in frame $e_i^{(0)}$ its coefficient
is $\prod_{j\ne i}(Z_j/Z_i)^{m_j}$. A mode occurs in the Čech component on
$U_I$ exactly when $N(m)\subseteq I$. The zero mode contributes one copy of
$\mathbb C$ in degree zero, every nonzero mode contracts, and therefore
$$H^0(X,\mathcal O_X)=\mathbb C,\qquad H^q(X,\mathcal O_X)=0\quad(q>0).$$
The contraction is the ordered three-chart Laurent calculation and its
subseries converge locally uniformly on every output intersection.
For $0\le q\le2$, let $\mathcal A_X^{0,q}$ be the sheaf of smooth
antiholomorphic $q$-forms, with differential the $\bar\partial$ part of the
exterior derivative, and set the terms to zero for $q>2$. The same groups are
the cohomology of the global complex $\Gamma(X,\mathcal A_X^{0,\bullet})$ by
the canonical projective Dolbeault comparison.

## Example references

[Lebl, *Tasty Bits of Several Complex Variables*, §§1.2 and 4.4](https://www.jirka.org/scv/scv.pdf)

[MIT OpenCourseWare 18.117 lecture notes](https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf)

[Dervan–Kuang, *Complex Manifolds*, §4](https://qk206.user.srcf.net/notes/complex_manifolds.pdf)

[Serre, *Géométrie algébrique et géométrie analytique*, §13](https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf)

## Facts & Assumptions

**Given:** Full AC; the standard ordered three-chart cover of $\mathbb P^2$; and the structure sheaf $\mathcal O_X$.

[A1] Full AC means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] The standard projective charts have coordinates $Z_j/Z_i$ and cover the complex lines in $\mathbb C^3\setminus\{0\}$ ([[def-complex-projective-space-and-holomorphic-charts]]).

[F2] The line bundle $\mathcal O(0)$ has identical transition factors and is the trivial line bundle; its holomorphic-section sheaf is $\mathcal O_X$ ([[def-qftx-gaga-projective-twisting-line-bundles]]).

[F3] Under full AC, on each nonempty standard-cover intersection, sections of $\mathcal O(k)$ have unique normally convergent mixed Laurent–Taylor modes; modes occur exactly for $N(m)\subseteq I$, restrictions preserve the coefficient, every proper nonempty $N(m)$ mode contracts by the stated insertion formula with locally uniform convergence, and the fixed-cover Čech cohomology computes analytic sheaf cohomology ([[lem-qftx-gaga-projective-cover-laurent-cohomology]]).

[F4] Under full AC and for $0\le r\le3$, sheaf cohomology of a holomorphic vector bundle is canonically the cohomology of its global smooth Dolbeault complex ([[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]).

## Proof

**Proof technique:** direct.

1.1 The degree-zero exponents satisfy $m_0+m_1+m_2=0$. If $N(m)=\varnothing$, all three exponents are nonnegative, so their sum is zero only for $m=(0,0,0)$. If $N(m)=\{0,1,2\}$, all three are negative and their sum is negative, impossible. Thus every other mode has nonempty proper negative set, one of the six sets $\{0\},\{1\},\{2\},\{0,1\},\{0,2\},\{1,2\}$. The least vertex outside these sets is respectively $1,0,0,2,1,0$. [F1, given, algebra]

2.1 For each nonzero mode choose its least $j\notin N(m)$. On an increasing output index $I$ of size $p$, put $(h_mc)_I=0$ if $j\in I$ and otherwise put $(h_mc)_I=(-1)^{\#\{i\in I:i<j\}}c_{I\cup\{j\}}$. For an input index $I$ of size $p+1$ with $j\notin I$, the term of $h_m\delta c$ deleting $j$ has the same sign as the insertion sign, hence contributes $+c_I$; for every $i\in I$, the term deleting $i$ in $h_m\delta c$ and the term deleting $i$ in $\delta h_mc$ have opposite signs because the order of inserting $j$ and deleting $i$ is reversed. If $j\in I$, then $h_m\delta c$ vanishes and the only nonzero term in $\delta h_mc$ deletes $j$; its two signs agree and give $+c_I$. Terms deleting a vertex of $N(m)$ vanish because the resulting index does not contain $N(m)$. Therefore $\delta h_m+h_m\delta=\mathrm{id}$ in every degree for all six possible $N(m)$. [A1, F3, step 1.1, algebra]

2.2 By [F2], the zero mode of the structure sheaf is a scalar constant on each nonempty intersection. Its Čech complex is $C^0=\mathbb C^3$, $C^1=\mathbb C^3$, $C^2=\mathbb C$, with maps $\delta^0(c_0,c_1,c_2)=(c_1-c_0,c_2-c_0,c_2-c_1)$ and $\delta^1(a_{01},a_{02},a_{12})=a_{12}-a_{02}+a_{01}$. The kernel of $\delta^0$ consists exactly of $(c,c,c)$, hence is $\mathbb C$. The image of $\delta^0$ is the plane $a_{02}=a_{01}+a_{12}$, which is exactly the kernel of $\delta^1$; $\delta^1$ is onto because $(0,0,1)$ maps to $1$. Thus this mode has $H^0=\mathbb C$ and $H^1=H^2=0$. [F2, step 1.1, algebra]

3.1 The modewise formula defines a homotopy on actual holomorphic cochains: by [F3], each output component is a sum of subseries grouped by at most the three choices of $j\notin I$, each retained mode has no negative exponent at the added coordinate, and the subseries converge locally uniformly on $U_I$. Consequently their sums are holomorphic on $U_I$, including across the added coordinate hyperplane, and the coefficient identity in step 2.1 is an identity of analytic cochains. [A1, F3, step 2.1]

4.1 Every nonzero mode is contractible by steps 1.1, 2.1 and 3.1, while the zero mode has the cohomology computed in step 2.2. The unique normally convergent coefficient expansions and their cochain homotopies make this coefficientwise computation valid for holomorphic sections, and [F3] identifies the resulting fixed-cover Čech cohomology with analytic sheaf cohomology. Hence the displayed sheaf-cohomology values follow. [A1, F3, step 1.1, step 2.1, step 3.1, step 2.2, algebra]

5.1 Apply [F4] to the trivial line bundle $E=\mathcal O_X$. Its global smooth Dolbeault complex has the same cohomology as the sheaf groups computed in step 4.1, giving the asserted Dolbeault-cohomology values. [A1, F4, step 4.1, algebra] ∎

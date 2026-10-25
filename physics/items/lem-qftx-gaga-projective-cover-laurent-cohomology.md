---
id: lem-qftx-gaga-projective-cover-laurent-cohomology
kind: lemma
title: Laurent–Čech cohomology of the projective coordinate cover
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-axiom-of-choice
  - def-complex-projective-space-and-holomorphic-charts
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-qftx-gaga-projective-twisting-line-bundles
  - def-polydisc-boundary-radius
  - def-plurisubharmonic-function
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
  - def-sheaf-cohomology-derived-global-sections
  - def-bigraded-complex-differential-forms
  - thm-dolbeault-lemma-polydisc
  - thm-cauchy-riemann-characterization-in-several-complex-variables
  - thm-dolbeault-cohomology-polydisc-vanishes-positive-q
  - thm-smooth-function-module-sheaves-are-acyclic
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-cauchy-integral-formula-on-a-polydisc
  - thm-laurent-expansion-annulus
  - prop-holomorphic-functions-are-continuous-and-separately-holomorphic
  - thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
  - thm-leray-acyclic-cover-theorem
  - thm-cech-to-sheaf-cohomology-comparison
  - cor-dolbeault-vanishing-pseudoconvex-domain
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-projective-space-and-holomorphic-charts: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-qftx-gaga-projective-twisting-line-bundles: mathematical-premise
  def-polydisc-boundary-radius: mathematical-premise
  def-plurisubharmonic-function: mathematical-premise
  def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity: mathematical-premise
  def-sheaf-cohomology-derived-global-sections: mathematical-premise
  def-bigraded-complex-differential-forms: mathematical-premise
  thm-dolbeault-lemma-polydisc: mathematical-premise
  thm-cauchy-riemann-characterization-in-several-complex-variables: mathematical-premise
  thm-dolbeault-cohomology-polydisc-vanishes-positive-q: mathematical-premise
  thm-smooth-function-module-sheaves-are-acyclic: mathematical-premise
  thm-acyclic-resolution-theorem-for-right-derived-functors: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  thm-cauchy-integral-formula-on-a-polydisc: mathematical-premise
  thm-laurent-expansion-annulus: mathematical-premise
  prop-holomorphic-functions-are-continuous-and-separately-holomorphic: mathematical-premise
  thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables: mathematical-premise
  thm-leray-acyclic-cover-theorem: mathematical-premise
  thm-cech-to-sheaf-cohomology-comparison: mathematical-premise
  cor-dolbeault-vanishing-pseudoconvex-domain: mathematical-premise
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables: A Whirlwind Tour of
        the Subject, version 4.4"
      url: https://www.jirka.org/scv/scv.pdf
      locator: §1.1 Theorem 1.1.4, §1.2, §2.5, and §4.4 Lemma 4.4.7 and Theorem 4.4.5,
        printed pp. 15–16, 20–23, 90–101 and 142–145; Exercise 1.2.4 is only a
        prompt, so the multivariable Laurent reconstruction is proved here.
    - title: MIT OpenCourseWare 18.117 Topics in Several Complex Variables, Spring
        2005, lecture notes prepared by Jonathan Campbell
      url: https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf
      locator: "Lectures 7–9 and 11, PDF pp. 18–23 and 23–25: standard projective
        charts, Čech cochains, and a sketched Čech–Dolbeault comparison; the
        local argument supplies its acyclic-intersection hypotheses."
    - title: R. Dervan, lectures; Qiangru Kuang, notes, University of Cambridge
        Mathematics Tripos Part III, Complex Manifolds, Lent 2019
      url: https://qk206.user.srcf.net/notes/complex_manifolds.pdf
      locator: "§3.1–3.2 and §4.4–4.5, printed pp. 9–11 and 23–26: Dolbeault and Čech
        comparison under acyclic-intersection hypotheses; the stated polydisc
        remark does not cover the projective intersections used here."
    - title: Jean-Pierre Serre, Géométrie algébrique et géométrie analytique, Annales
        de l'Institut Fourier 6 (1956), 1–42
      url: https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf
      locator: §13, Lemma 4 and footnote 4, printed pp. 20–21; the footnote mentions
        J. Frenkel's unpublished direct Laurent computation without proving it,
        so it is not used as a proof input.
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume the full Axiom of Choice. For $0\le r\le3$, let $P^r$ be the complex
projective space $(\mathbb C^{r+1}\setminus\{0\})/\mathbb C^\times$ with its
quotient complex-manifold structure; for $r=0$, $P^0$ is a point. For $r\ge1$ use the
standard homogeneous-coordinate cover $U_i=\{[Z_0:\cdots:Z_r]:Z_i\ne0\}$,
$0\le i\le r$. For nonempty $I\subseteq\{0,\ldots,r\}$ write
$U_I=\bigcap_{i\in I}U_i$. For $r\ge1$ and $k\in\mathbb Z$, let
$\mathcal O(k)$ be the line bundle with local frames satisfying
$e_j^{(k)}=(Z_j/Z_i)^k e_i^{(k)}$ on $U_i\cap U_j$; write
$\mathcal O=\mathcal O(0)$ and $\mathbb C^*=\mathbb C\setminus\{0\}$. Analytic
sheaf cohomology $H^q(X,\mathcal F)$ is the $q$th right-derived
global-sections group of the abelian sheaf $\mathcal F$. For this ordered cover
and a sheaf $\mathcal G$, define
$$C^p(\mathcal U,\mathcal G)=\prod_{|I|=p+1}\mathcal G(U_I),\qquad (\delta c)_{i_0\cdots i_{p+1}}=\sum_{\nu=0}^{p+1}(-1)^\nu c_{i_0\cdots\widehat{i_\nu}\cdots i_{p+1}}|_{U_{i_0\cdots i_{p+1}}},$$
for $0\le p\le r$, with $C^p=0$ otherwise and increasing indices;
fixed-cover Čech cohomology is the cohomology of this complex. A mixed
Laurent–Taylor series is **normally convergent** when it
converges absolutely and uniformly on every compact product subset of its
domain. For $r\ge1$, every
$U_I$ is biholomorphic to
$\mathbb C^{r+1-|I|}\times(\mathbb C^*)^{|I|-1}$. For every integer $k$,
each section on $U_I$, in a standard local frame, has a unique normally
convergent mixed Laurent–Taylor expansion indexed by exponent tuples
$m=(m_0,\ldots,m_r)\in\mathbb Z^{r+1}$ with $\sum_i m_i=k$; its coefficient
occurs on $U_I$ exactly when $N(m):=\{i:m_i<0\}\subseteq I$. Restrictions
preserve each coefficient. In the ordered-cover Čech complex, every mode with
nonempty proper $N(m)$ has the cochain contraction, for $c\in C^p$ and an
output index $I$ of size $p$, given by $(h_mc)_I=0$ if $j\in I$ and
$(h_mc)_I=(-1)^{\#\{i\in I:i<j\}}c_{I\cup\{j\}}$ if $j\notin I$, where
$j$ is the least index outside $N(m)$; the resulting subseries converge
locally uniformly on the output intersections. The fixed-cover Čech cohomology
is canonically the analytic sheaf cohomology whenever that cover is acyclic for
the coefficient sheaf. For $k\in\{0,-1,-r-1\}$, the restricted sheaf
$\mathcal O(k)|_{U_I}$ has $H^q(U_I,\mathcal O(k)|_{U_I})=0$ for every integer
$q>0$, so the cover is acyclic for these three sheaves and the comparison
applies. Consequently, for $0\le r\le3$,
$$H^0(P^r,\mathcal O)=\mathbb C,\qquad H^q(P^r,\mathcal O)=0\quad(q>0),$$
and for $1\le r\le3$,
$$H^0(P^r,\mathcal O(-1))=0,\qquad H^r(P^r,\mathcal O(-r-1))\cong\mathbb C.$$

## Statement references

[Lebl, *Tasty Bits of Several Complex Variables*, version 4.4](https://www.jirka.org/scv/scv.pdf)

[MIT OpenCourseWare 18.117 lecture notes](https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf)

[Dervan–Kuang, *Complex Manifolds*](https://qk206.user.srcf.net/notes/complex_manifolds.pdf)

[Serre, *Géométrie algébrique et géométrie analytique*](https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf)

## Facts & Assumptions

**Given:** Full AC; an integer $0\le r\le3$; $P^r$ and, for $r\ge1$, its standard ordered cover and twisting sheaves $\mathcal O(k)$; and a positive integer $q$ when a positive-degree cohomology group is considered.

[A1] Full AC means every family of nonempty sets has a choice function, and full AC implies DC ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] For $r\ge1$, $P^r$ is the quotient of $\mathbb C^{r+1}\setminus\{0\}$ by nonzero scalar multiplication, with $U_i=\{Z_i\ne0\}$ and coordinates $Z_j/Z_i$ ([[def-complex-projective-space-and-holomorphic-charts]]).

[F2] A holomorphic vector bundle is locally trivial with holomorphic transition matrices; a line bundle is the rank-one case ([[def-complex-manifolds-and-holomorphic-vector-bundles]]). The new local definition gives $\mathcal O(k)$ by the stated coordinate transitions ([[def-qftx-gaga-projective-twisting-line-bundles]]).

[F3] The equal-radius polydisc boundary function is $\delta_\Omega(a)=\sup\{s>0:\Delta_s(a)\subseteq\Omega\}$ ([[def-polydisc-boundary-radius]]).

[F4] A plurisubharmonic function is upper semicontinuous and restricts to a subharmonic function, or $-\infty$, on each connected complex-line slice ([[def-plurisubharmonic-function]]).

[F5] A domain in $\mathbb C^n$ is Hartogs pseudoconvex when $-\log\delta_\Omega$ is plurisubharmonic; $\mathbb C^n$ is included by the empty-complement convention ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[F6] On a Hartogs-pseudoconvex domain in $\mathbb C^n$, under AC every smooth $\bar\partial$-closed $(0,q)$-form for $1\le q\le n$ is globally $\bar\partial$-exact ([[cor-dolbeault-vanishing-pseudoconvex-domain]]).

[F7] Complex differential forms split into $(p,q)$-types, and $\bar\partial$ raises the second degree by one with $\bar\partial^2=0$ ([[def-bigraded-complex-differential-forms]]).

[F8] Under full AC, on nested polydiscs a smooth $\bar\partial$-closed $(p,q)$-form with $q>0$ has a smooth primitive on the smaller polydisc ([[thm-dolbeault-lemma-polydisc]]).

[F9] A $C^1$ function on a domain in $\mathbb C^n$ whose coordinate derivatives satisfy the Cauchy–Riemann equations is holomorphic ([[thm-cauchy-riemann-characterization-in-several-complex-variables]]).

[F10] Under full AC, positive-degree Dolbeault cohomology of smooth forms vanishes on a product of finite discs and/or $\mathbb C$ ([[thm-dolbeault-cohomology-polydisc-vanishes-positive-q]]).

[F11] Under AC, a sheaf of modules over the sheaf of smooth functions on a smooth manifold is acyclic for global sections on every open subset ([[thm-smooth-function-module-sheaves-are-acyclic]]).

[F12] An exact resolution by $\Gamma$-acyclic objects computes right-derived functors when the resolution cycles lie in the supplied injective-data domain ([[thm-acyclic-resolution-theorem-for-right-derived-functors]]).

[F13] Under AC, $H^q(X,\mathcal F)$ is the right-derived global-sections group using a supplied injective resolution defined for every abelian sheaf on $X$ ([[def-sheaf-cohomology-derived-global-sections]]).

[F14] For a linearly ordered open cover whose every nonempty finite intersection is acyclic for a sheaf $\mathcal F$, the fixed-cover Čech-to-sheaf comparison is an isomorphism in every degree under AC ([[thm-leray-acyclic-cover-theorem]], [[thm-cech-to-sheaf-cohomology-comparison]]).

[F15] On a polydisc, the iterated Cauchy integral formula holds for a continuous separately holomorphic function; the contour order is fixed ([[thm-cauchy-integral-formula-on-a-polydisc]]).

[F16] A one-variable holomorphic function on an annulus has a unique Laurent expansion converging locally uniformly ([[thm-laurent-expansion-annulus]]).

[F17] A holomorphic function of several variables is continuous and separately holomorphic ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]).

[F18] Locally uniform limits of holomorphic functions on an open subset of $\mathbb C^m$ are holomorphic ([[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]]).

## Proof

**Proof technique:** direct.

1.1 Assume $r\ge1$ and fix a nonempty index set $I\subseteq\{0,\ldots,r\}$. Choose $i_0\in I$ and use $w_j=Z_j/Z_{i_0}$ for $j\ne i_0$ on $U_I$. The coordinates with $j\in I\setminus\{i_0\}$ are nonzero and all remaining coordinates range over $\mathbb C$, so $U_I\cong\mathbb C^{r+1-|I|}\times(\mathbb C^*)^{|I|-1}$; this product is open and connected. Write $b=|I|-1$. [F1, given, construct]

1.2 The local Dolbeault lemma [F8], applied coefficientwise in a holomorphic frame on coordinate polydiscs in $U_I$, gives local exactness in every positive degree. In degree zero, a smooth function killed by $\bar\partial$ satisfies the Cauchy–Riemann equations and is holomorphic by [F9]. By [F7] the operators form a complex, so $0\to\mathcal O\to\mathcal A^{0,0}\xrightarrow{\bar\partial}\cdots\xrightarrow{\bar\partial}\mathcal A^{0,r}\to0$ is an exact sheaf resolution. The whole-polydisc statement [F10] also gives positive-degree exactness on each coordinate polydisc. Each $\mathcal A^{0,j}$ is a module over smooth functions, hence is $\Gamma(U_I,-)$-acyclic by [F11]. The resolution cycles lie in the supplied injective-data domain [F13], and [A1] supplies the DC required by [F12]. Applying [F12] identifies $H^q(U_I,\mathcal O)$ with the cohomology of the global Dolbeault complex on $U_I$. [A1, F7, F8, F9, F10, F11, F12, F13, given]

1.3 For a section of $\mathcal O(k)$ on $U_I$, write its coefficient in frame $e_{i_0}^{(k)}$ as a holomorphic function $f$ on $\mathbb C^a\times(\mathbb C^*)^b$, where $a=r+1-|I|$ and $b=|I|-1$. By [F17], $f$ is continuous and separately holomorphic. Iterating the one-variable Cauchy expansions on the $\mathbb C$ factors and Laurent expansions on the $\mathbb C^*$ factors gives a mixed series indexed by $m_j\in\mathbb N$ for coordinates that may vanish and $m_j\in\mathbb Z$ for the nonzero coordinates. To prove holomorphy of each coefficient in the remaining variables, fix the Laurent contour radii and a closed parameter polydisc compactly contained in the remaining coordinates. For each fixed point $\zeta$ of the contour product, apply the iterated Cauchy formula [F15] to the remaining variables. Since $f$ is bounded on the compact product of the contours and that polydisc, the Taylor coefficient estimates are uniform in $\zeta$. On a smaller concentric polydisc, the Taylor series therefore converges absolutely and uniformly in $\zeta$. The estimate $|\int_\Gamma g|\le L_\Gamma\sup_\Gamma|g|$ allows termwise integration in the already fixed contour order, so the Laurent coefficient has a convergent power series in all remaining variables. Thus it is holomorphic. Define $m_{i_0}=k-\sum_{j\ne i_0}m_j$ and write $Z^m$ for the homogeneous Laurent monomial section whose coefficient in frame $e_{i_0}^{(k)}$ is $\prod_{j\ne i_0}(Z_j/Z_{i_0})^{m_j}$; its total degree is $\sum_i m_i=k$. Every negative exponent is among coordinates indexed by $I$. [F2, F15, F16, F17, given, construct]

2.1 If $b=0$, then $U_I\cong\mathbb C^r$ and $\delta_{U_I}=+\infty$ by [F5]. If $b>0$, an equal-radius polydisc of radius $s$ around $w$ is contained in $U_I$ exactly when $s\le\min_{j\in I\setminus\{i_0\}}|w_j|$: smaller radii cannot reach a forbidden coordinate hyperplane, while any larger radius includes zero in a coordinate disk attaining the minimum. Hence $\delta_{U_I}(w)=\min_j|w_j|$ and $-\log\delta_{U_I}=\max_j(-\log|w_j|)$. Each $-\log|w_j|$ is harmonic on $\mathbb C^*$ because it is locally the real part of a holomorphic logarithm. Their finite maximum is continuous and subharmonic on each complex line: at a point choose an index attaining the maximum, apply the submean inequality for that harmonic function, and bound its boundary values by the maximum. Thus $-\log\delta_{U_I}$ is plurisubharmonic by [F4], so $U_I$ is Hartogs pseudoconvex by [F5]. [F3, F4, F5, step 1.1]

2.2 The domain $U_I$ has complex dimension $r$, so [F6] makes its global Dolbeault cohomology zero for $1\le q\le r$; for $q>r$ the complex has no terms in degree $q$, hence its cohomology is zero as well. The frame $e_{i_0}^{(k)}$ trivializes $\mathcal O(k)$ on $U_I$, so its restricted holomorphic-section sheaf is isomorphic to $\mathcal O$ and has the same positive-degree sheaf cohomology. [F2, F6, step 1.2]

2.3 Let $K$ be a compact product with $|w_j|\le S_j$ on each $\mathbb C$ coordinate and $\rho_j\le|w_j|\le R_j$ on each $\mathbb C^*$ coordinate. Choose $S'_j>S_j$, $R'_j>R_j$ and $0<\rho'_j<\rho_j$; the corresponding Cauchy and Laurent circles stay in the domain. The iterated coefficient-integral bounds give geometric factors $(S_j/S'_j)^{m_j}$ for a Taylor coordinate, $(R_j/R'_j)^{m_j}$ for a nonnegative Laurent exponent, and $(\rho'_j/\rho_j)^{|m_j|}$ for a negative Laurent exponent. The remaining factor is bounded by the supremum of $f$ on the finite product of chosen circles, times fixed contour-length factors. There are finitely many choices of signs, and each product of geometric series converges; hence the mixed series converges absolutely and uniformly on $K$. [F15, F16, step 1.3, algebra]

2.4 Define $C^p=\prod_{|I|=p+1}\mathcal O(k)(U_I)$, with the ordered Čech differential $(\delta c)_{i_0\cdots i_{p+1}}=\sum_{\nu=0}^{p+1}(-1)^\nu c_{i_0\cdots\widehat{i_\nu}\cdots i_{p+1}}|_{U_{i_0\cdots i_{p+1}}}$. For a multi-index $m$ of total degree $k$, set $N(m)=\{i:m_i<0\}$. By step 1.3, its coefficient occurs in the component indexed by $I$ exactly when $N(m)\subseteq I$. The frame transition rule in [F2] changes the local coefficient by $(Z_i/Z_j)^k$, exactly the change between the two local expressions of the same degree-$k$ monomial $Z^m$; restrictions consequently preserve $m$. Thus the differential acts on each coefficient by the finite alternating-subset complex whose degree-$p$ entries are scalars indexed by subsets $I$ of size $p+1$ containing $N(m)$. [F2, step 1.3, given, construct]

3.1 Give the cover $U_0,\ldots,U_r$ its natural order. Step 2.2 proves that every nonempty finite intersection is acyclic for each coefficient sheaf $\mathcal O(k)$ under consideration. Therefore [F14] identifies its analytic sheaf cohomology with the fixed-cover Čech cohomology of the ordered cover. [F14, step 2.2, given]

3.2 Each mixed coefficient is given by its fixed iterated Cauchy or Laurent contour integral. Applying these same integrals in the same order to the uniformly convergent series on a compact polyannulus recovers that coefficient; the uniqueness of the one-variable Cauchy and Laurent coefficients therefore proves uniqueness of the mixed coefficients. [F15, F16, step 1.3, step 2.3]

3.3 If $N(m)$ is nonempty and proper, choose the least $j\notin N(m)$. For an increasing output index $I$ of size $p$ containing $N(m)$, define $(h_mc)_I=0$ when $j\in I$, and otherwise define $(h_mc)_I=(-1)^{\#\{i\in I:i<j\}}c_{I\cup\{j\}}$; this maps degree $p$ to degree $p-1$ for $p\ge1$. Put $C^{-1}=0$ and define $h_m:C^0\to C^{-1}$ to be zero. In degree zero, if $|N(m)|>1$, then $C^0$ for this mode is zero. If $N(m)=\{i\}$, the only possibly nonzero degree-zero coefficient is $c_{\{i\}}$. For the chosen $j\ne i$, the face of $\{i,j\}$ deleting $i$ is indexed by $\{j\}$, which omits $N(m)$ and hence has coefficient zero. The face deleting $j$ has sign $\epsilon=(-1)^{\#\{k\in\{i\}:k<j\}}$, so $(\delta c)_{\{i,j\}}=\epsilon c_{\{i\}}$ in increasing order and $(h_m\delta c)_{\{i\}}=\epsilon^2c_{\{i\}}=c_{\{i\}}$. Since $\delta h_m c=0$, the contraction identity holds in degree zero, including its minimal index. To check the identity in positive degrees at an input index $I$ of size $p+1$, first suppose $j\notin I$. In $h_m\delta c$, the face obtained by deleting $j$ from $I\cup\{j\}$ has sign $(-1)^{\#\{i\in I:i<j\}}$; multiplication by the same sign in $h_m$ leaves $c_I$ with coefficient $+1$. For each $i\in I$, the other term obtained by deleting $i$ occurs also in $\delta h_m c$, and its two signs differ by one because inserting $j$ and deleting $i$ reverse order; those terms cancel pairwise. If $j\in I$, then $h_m\delta c$ is zero at $I$, all terms of $\delta h_m c$ vanish except the face deleting $j$, and its two equal signs again multiply to $+1$, leaving $c_I$. Faces that delete an element of $N(m)$ have zero coefficient because the resulting index no longer contains $N(m)$. Thus $\delta h_m+h_m\delta=\mathrm{id}$ in every degree, including the minimal index $I=N(m)$. [step 2.4, algebra]

4.1 For $k=0$, the only multi-index with $N(m)=\varnothing$ is $m=(0,\ldots,0)$; its coefficient complex is the full simplex complex. Its degree-zero kernel is the constant tuples $\mathbb C$. For positive degree define $h c_I=0$ when $0\in I$ and $h c_I=c_{I\cup\{0\}}$ when $0\notin I$; inserting the least vertex $0$ gives positive sign, and the insertion/deletion identity proved in step 3.3 gives $\delta h+h\delta=\mathrm{id}$. Every other degree-zero mode has nonempty proper $N(m)$ and is contracted by step 3.3. For $k=-1$ and $r\ge1$, no mode has empty or full negative set: all-nonnegative exponents cannot sum to $-1$, and all-negative exponents sum to at most $-(r+1)$. Thus step 3.3 contracts every mode and degree-zero cohomology is zero. For $k=-r-1$, the unique mode with full negative set is $m=(-1,\ldots,-1)$: writing each $m_i=-1-n_i$ with $n_i\ge0$, the total-degree equation gives $\sum_i n_i=0$, hence every $n_i=0$. This mode occurs only in top degree $r$, has no incoming or outgoing Čech term, and contributes one copy of $\mathbb C$. All other modes have nonempty proper negative set and contract. [step 2.4, step 3.3, algebra]

4.2 The coefficient homotopy of step 3.3 defines an analytic cochain homotopy, not just a formal one. In an output component indexed by $I$, group terms by the finitely many possible selected vertices $j\notin I$. Each retained mode has $N(m)\subseteq I$ and hence $m_j\ge0$. For any compact product in $U_I$, choose outer Cauchy circles beyond its bounded coordinates and inner Laurent circles below the positive minimum of each nonzero coordinate. The estimates of step 2.3 then give absolute locally uniform convergence of each retained subseries on that compact set. Each partial sum is holomorphic there, so its limit is holomorphic by [F18]; the nonnegative $m_j$ powers extend the subseries across the coordinate hyperplane $Z_j=0$. Thus $h$ maps holomorphic Čech cochains to holomorphic Čech cochains, and the coefficient identity of step 3.3 holds for the analytic sums. [F18, step 1.3, step 2.3, step 3.3]

5.1 The Čech computation in step 4.1 is therefore valid for analytic sections. By the comparison of step 3.1 it gives $H^0(P^r,\mathcal O)=\mathbb C$ and $H^q(P^r,\mathcal O)=0$ for $q>0$, together with $H^0(P^r,\mathcal O(-1))=0$ and $H^r(P^r,\mathcal O(-r-1))\cong\mathbb C$ for $1\le r\le3$. For $r=0$, $P^0$ is a point, so its structure-sheaf global sections are $\mathbb C$ and its higher sheaf cohomology groups vanish. [step 3.1, step 4.1, step 4.2, given] ∎

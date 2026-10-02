---
id: thm-logarithmic-unit-image-is-a-full-lattice
kind: theorem
title: The logarithmic unit image is a full lattice
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-double-orthogonal-complement-and-dimension
  - cor-minkowski-convex-body-theorem-at-equality
  - cor-trace-and-norm-of-an-algebraic-integer
  - def-archimedean-embeddings-and-number-field-signature
  - def-axiom-of-choice
  - def-discriminant-of-a-number-field-basis-and-order
  - def-generated-and-principal-ideals
  - def-logarithmic-unit-embedding
  - def-minkowski-embedding-of-a-number-field
  - def-orthogonal-complement
  - def-pi-via-first-positive-cosine-zero
  - lem-complex-conjugation-and-modulus-laws
  - lem-discrete-subgroups-of-real-vector-spaces-are-lattices
  - lem-finitely-many-number-field-ideals-of-bounded-norm
  - lem-logarithmic-unit-image-is-discrete
  - lem-unit-logarithms-lie-in-the-product-formula-hyperplane
  - cor-disc-jordan-content-is-pi-r-squared
  - prop-riemann-graph-area-equals-jordan-content
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-covolume-of-an-ideal-lattice
  - thm-field-norm-and-trace-by-embeddings
  - thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-natural-logarithm-laws
  - thm-number-field-discriminant-is-well-defined-and-nonzero
  - thm-principal-ideal-norm-is-absolute-field-norm
  - thm-ring-of-integers-and-ideals-are-full-lattices
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-of-square-roots
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§8.1 proof of Thm. 8.1.2 pp.90-93 (Blichfeldt/Minkowski with volume 2^n·covol)."
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 Thm. 5.9 and Lemma 5.10 pp.88-89."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "Prop. 15.11(2) pp.6-8 (Arakelov-divisor form of the same covering argument)."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "Ch. 29 pp.149-153 (Minkowski step; compactness)."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a number field
of signature $(r_1,r_2)$ with logarithmic embedding $\lambda$ and hyperplane
$H=\{(x_i):\sum_ix_i=0\}$ ([[def-logarithmic-unit-embedding]]). The discrete
subgroup $\lambda(\mathcal O_K^\times)\subset H$ spans $H$ over $\mathbb R$;
hence it is a full lattice in $H$ of rank $r_1+r_2-1$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$ of degree $n=r_1+2r_2$ and signature $(r_1,r_2)$, its logarithmic embedding $\lambda$ and hyperplane $H$ ([[def-logarithmic-unit-embedding]]), the subspace $W:=\operatorname{span}_{\mathbb R}\lambda(\mathcal O_K^\times)\subseteq H$, and the fixed constant $A:=\sqrt{|d_K|}\,(2/\pi)^{r_2}$.

[F1] $\lambda(x)=(\log|\sigma_1x|,\dots,\log|\sigma_{r_1}x|,2\log|\tau_1x|,\dots,2\log|\tau_{r_2}x|)$ for the real embeddings $\sigma_1,\dots,\sigma_{r_1}$ and one chosen embedding $\tau_1,\dots,\tau_{r_2}$ from each complex conjugate pair, and $H=\{(x_i)\in\mathbb R^{r_1+r_2}:\sum_ix_i=0\}$ is a hyperplane of dimension $r_1+r_2-1$ ([[def-logarithmic-unit-embedding]], [[def-archimedean-embeddings-and-number-field-signature]]).

[F2] $\lambda(u)\in H$ for every unit $u\in\mathcal O_K^\times$ ([[lem-unit-logarithms-lie-in-the-product-formula-hyperplane]]), so both $\lambda(\mathcal O_K^\times)$ and $W$ lie in $H$.

[F3] $\lambda(\mathcal O_K^\times)$ is discrete ([[lem-logarithmic-unit-image-is-discrete]]).

[F4] For a subgroup $\Gamma$ of a finite-dimensional real vector space: if every bounded set meets $\Gamma$ in a finite set, then there are $\mathbb R$-linearly independent $v_1,\dots,v_s\in\Gamma$ with $\Gamma=\mathbb Zv_1\oplus\cdots\oplus\mathbb Zv_s$ and $\operatorname{span}_{\mathbb R}\Gamma=\mathbb Rv_1\oplus\cdots\oplus\mathbb Rv_s$; conversely such a subgroup is discrete ([[lem-discrete-subgroups-of-real-vector-spaces-are-lattices]]).

[F5] Orthogonal complements are taken in the standard inner product on $\mathbb R^{r_1+r_2}$: $U^\perp=\{v:\langle v,u\rangle=0$ for all $u\in U\}$, one has $W^{\perp\perp}=W$ for every subspace $W$, and $U_1\subseteq U_2$ implies $U_2^\perp\subseteq U_1^\perp$. Since $H=\{x:\langle x,(1,\dots,1)\rangle=0\}$, we have $H^\perp=\mathbb R(1,\dots,1)$; hence $z\notin H^\perp$ exactly when the coordinates of $z$ are not all equal ([[def-orthogonal-complement]], [[cor-double-orthogonal-complement-and-dimension]]).

[F6] The Minkowski embedding $\sigma:K\to\mathbb R^{r_1}\times\mathbb R^{2r_2}=\mathbb R^n$ is injective, sends $x$ to $(\sigma_1x,\dots,\sigma_{r_1}x,\operatorname{Re}\tau_1x,\operatorname{Im}\tau_1x,\dots,\operatorname{Re}\tau_{r_2}x,\operatorname{Im}\tau_{r_2}x)$, is additive, and in the complex coordinate pairs $|\tau_jx|^2=(\operatorname{Re}\tau_jx)^2+(\operatorname{Im}\tau_jx)^2$ ([[def-minkowski-embedding-of-a-number-field]]).

[F7] The image $\sigma(\mathcal O_K)$ is a full lattice in $\mathbb R^n$, and its covolume, for the Lebesgue volume on $\mathbb R^{r_1}\times\mathbb R^{2r_2}$ induced by the identification $\mathbb C\cong\mathbb R^2$ just fixed, is $\operatorname{covol}(\sigma(\mathcal O_K))=2^{-r_2}\sqrt{|d_K|}$, where $d_K=\operatorname{disc}(\mathcal O_K)$ is the nonzero field discriminant ([[thm-ring-of-integers-and-ideals-are-full-lattices]], [[thm-covolume-of-an-ideal-lattice]], [[def-discriminant-of-a-number-field-basis-and-order]], [[thm-number-field-discriminant-is-well-defined-and-nonzero]]).

[F8] Equality case of the lattice point principle: if $\Lambda\subseteq\mathbb R^n$ is a full lattice and $S\subseteq\mathbb R^n$ is closed, bounded, convex and centrally symmetric with $\operatorname{Vol}(S)\ge2^n\operatorname{covol}(\Lambda)$, then $S\cap\Lambda$ contains a nonzero point ([[cor-minkowski-convex-body-theorem-at-equality]]).

[F9] For every real $B\ge1$ only finitely many nonzero integral ideals $\mathfrak a\subseteq\mathcal O_K$ satisfy $N\mathfrak a\le B$ ([[lem-finitely-many-number-field-ideals-of-bounded-norm]]).

[F10] For $0\ne a\in\mathcal O_K$ the principal ideal $(a)=a\mathcal O_K=\{ca:c\in\mathcal O_K\}$ satisfies $N((a))=|N_{K/\mathbb Q}(a)|$; if $(a)\subseteq(b)$ then $a=cb$ for some $c\in\mathcal O_K$, so $(a)=(b)$ gives $a=ub$ and $b=va$ with $u,v\in\mathcal O_K$ and $uv=1$, that is, $u\in\mathcal O_K^\times$ ([[thm-principal-ideal-norm-is-absolute-field-norm]], [[def-generated-and-principal-ideals]]).

[F11] If $0\ne a\in\mathcal O_K$ then $N_{K/\mathbb Q}(a)=\prod_{i=1}^{r_1}\sigma_i(a)\cdot\prod_{j=1}^{r_2}|\tau_j(a)|^2$ and $N_{K/\mathbb Q}(a)\in\mathbb Z$; consequently $N_{K/\mathbb Q}(a)\ne0$ and $|N_{K/\mathbb Q}(a)|\ge1$ ([[thm-field-norm-and-trace-by-embeddings]], [[cor-trace-and-norm-of-an-algebraic-integer]], [[lem-complex-conjugation-and-modulus-laws]]).

[F12] AC implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]). Under Countable Choice, each closed real interval $[-c,c]$ has Lebesgue measure $2c$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]). Each closed disc of radius $c>0$ is a bounded Jordan-measurable region between continuous graphs ([[prop-riemann-graph-area-equals-jordan-content]]) with Jordan content $\pi c^2$ ([[cor-disc-jordan-content-is-pi-r-squared]]), so its Lebesgue measure is $\pi c^2$ ([[thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content]]). Each Euclidean Lebesgue measure $\lambda_d$ is sigma-finite, since the cubes $[-N,N]^d$ exhaust $\mathbb R^d$ and have finite measure by the box formula. For Borel sets $E_i\subseteq\mathbb R^{d_i}$ with $d_i\in\{1,2\}$, the measure of a finite Cartesian product is the product of the factor measures: iterate the rectangle formula for sigma-finite product measures and the agreement of product measure with Euclidean Lebesgue measure on Borel sets ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]). Therefore the Euclidean volume of the product of these intervals and discs is the product of their Lebesgue measures.

[F13] The natural logarithm is strictly increasing, maps $(0,\infty)$ onto $\mathbb R$, satisfies $\log(xy)=\log x+\log y$ and $\log1=0$, so $\log t\to\infty$ as $t\to\infty$ and $\log(s/t)=\log s-\log t$ for $s,t>0$ ([[thm-natural-logarithm-laws]]).

[F14] Since $d_K\ne0$ by [F7], $|d_K|>0$ and its nonnegative square root is positive; also $\pi>0$. Thus the fixed constant $A:=\sqrt{|d_K|}(2/\pi)^{r_2}$ is positive ([[thm-of-square-roots]], [[def-pi-via-first-positive-cosine-zero]]).

[A1] The Axiom of Choice is assumed; it is used through the equality-case lattice point principle [F8], the discreteness input [F3] whose own AC use is inherited, and the Countable Choice measure interfaces in [F12]. AC supplies Countable Choice by [F12] ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** contraposition on a linear functional. If some $z$ is not orthogonal to $H$, products of intervals and discs of fixed volume produce, through the equality case of the lattice point principle, an algebraic integer of bounded norm; the finite list of principal ideals of bounded norm converts it to a unit $u$ with $f(u)$ bounded away from a tunable number $t_c$, and rescaled logarithms make $|t_c|$ exceed that bound, forcing $f(u)\ne0$.

1.1 The image $\lambda(\mathcal O_K^\times)$ is a subgroup of $\mathbb R^{r_1+r_2}$ contained in $H$, so $W$ is a subspace of $H$; also $H^\perp=\mathbb R(1,\dots,1)$. [F1, F2, F5]

1.2 If $r_1+r_2=1$ then $H=\{0\}$ by [F1], so $\lambda(\mathcal O_K^\times)=\{0\}=H$ by [F2], and the image is a full lattice of rank $0$ in $H$; hence assume $r_1+r_2\ge2$ from now on. [F1, F2, F4]

1.3 Fix $z\in\mathbb R^{r_1+r_2}$ with $z\notin H^\perp$; then the coordinates $z_1,\dots,z_{r_1+r_2}$ of $z$ are not all equal, by [F5]. [F5]

1.4 Define $f(x):=\langle z,\lambda(x)\rangle=\sum_{i=1}^{r_1}z_i\log|\sigma_ix|+\sum_{j=1}^{r_2}2z_{r_1+j}\log|\tau_jx|$ for $x\in K^\times$, a group homomorphism $K^\times\to(\mathbb R,+)$; since $\lambda(\mathcal O_K^\times)$ spans $W$ and $\langle z,\cdot\rangle$ is linear, $f(u)=0$ for every $u\in\mathcal O_K^\times$ exactly when $z\in W^\perp$, so it suffices to exhibit one unit $u$ with $f(u)\ne0$. [F1, algebra]

1.5 Let $c_1,\dots,c_{r_1+r_2}$ be positive reals with $\prod_{i=1}^{r_1}c_i\cdot\prod_{j=1}^{r_2}c_{r_1+j}^2=A$, and let $S_c\subseteq\mathbb R^n$ be the set of points whose first $r_1$ coordinates $y_i$ satisfy $|y_i|\le c_i$ and whose $j$-th complex pair $(u_j,v_j)$ satisfies $u_j^2+v_j^2\le c_{r_1+j}^2$; then $S_c$ is closed, bounded, convex and centrally symmetric. Positivity of $A$ is established in [F14]. By [F12], its volume is $\prod_{i=1}^{r_1}(2c_i)\cdot\prod_{j=1}^{r_2}\pi c_{r_1+j}^2=2^{r_1}\pi^{r_2}A=2^n\cdot2^{-r_2}\sqrt{|d_K|}$. [F12, F14, algebra]

1.6 The fixed positive constant $A$ depends only on $K$, as recorded in [F14]. [F14]

2.1 By [F7] we have $\operatorname{covol}(\sigma(\mathcal O_K))=2^{-r_2}\sqrt{|d_K|}$, so $\operatorname{Vol}(S_c)=2^n\operatorname{covol}(\sigma(\mathcal O_K))$; applying [F8] to the full lattice $\sigma(\mathcal O_K)$ and the set $S_c$ produces a nonzero point $x\in S_c\cap\sigma(\mathcal O_K)$. [F7, F8, step 1.5]

3.1 Write $x=\sigma(a)$ with $a\in\mathcal O_K$; then $a\ne0$ and the coordinates of $a$ satisfy $|\sigma_i(a)|\le c_i$ for $i\le r_1$ and $(\operatorname{Re}\tau_ja)^2+(\operatorname{Im}\tau_ja)^2\le c_{r_1+j}^2$, that is $|\tau_j(a)|^2\le c_{r_1+j}^2$. [F6, step 2.1]

4.1 By [F11], $|N_{K/\mathbb Q}(a)|=\prod_{i=1}^{r_1}|\sigma_i(a)|\cdot\prod_{j=1}^{r_2}|\tau_j(a)|^2\le\prod_{i=1}^{r_1}c_i\cdot\prod_{j=1}^{r_2}c_{r_1+j}^2=A$; since also $a\ne0$ and $N_{K/\mathbb Q}(a)\in\mathbb Z\setminus\{0\}$, we get $1\le|N(a)|\le A$, and in particular $A\ge1$. [F11, step 3.1]

5.1 If for some $i\le r_1$ one had $|\sigma_i(a)|<c_i/A$, then the remaining factors of $|N(a)|$ being bounded by $A/c_i$ would give $|N(a)|<(c_i/A)(A/c_i)=1$, contradicting $|N(a)|\ge1$; hence $|\sigma_i(a)|\ge c_i/A$. Likewise, if $|\tau_j(a)|^2<c_{r_1+j}^2/A$ for some $j\le r_2$, then $|N(a)|<(c_{r_1+j}^2/A)(A/c_{r_1+j}^2)=1$, again a contradiction, so $|\tau_j(a)|^2\ge c_{r_1+j}^2/A$. [step 4.1, algebra]

5.2 Let $B_0:=\max\{1,A\}\ge1$; by [F9] only finitely many nonzero integral ideals of $\mathcal O_K$ have norm at most $B_0$, hence only finitely many have norm at most $A$. The finite subcollection of principal ideals is nonempty because $(1)$ has norm $1\le A$ by [F10] and step 4.1. Choose generators $0\ne b_1,\dots,b_m\in\mathcal O_K$ for these principal ideals, so that $(b_1),\dots,(b_m)$ are exactly the principal ideals of norm at most $A$; choosing these $m$ generators is a selection from finitely many nonempty sets. Since $N((a))=|N(a)|\le A$ by [F10], $(a)=(b_j)$ for some $j$, and then $a=ub_j$ with $u\in\mathcal O_K^\times$. [F9, F10, step 4.1]

6.1 Put $t_c:=\sum_{i=1}^{r_1}z_i\log c_i+\sum_{j=1}^{r_2}z_{r_1+j}\log(c_{r_1+j}^2)$; the finite numbers $f(b_j)=\langle z,\lambda(b_j)\rangle$ being fixed, $B:=\max_j|f(b_j)|+\log A\cdot\sum_{i=1}^{r_1+r_2}|z_i|$ is a real number depending only on $z$, on $K$ and on the chosen list, not on $c$. [F13, step 4.1, step 5.2]

7.1 For the unit $u$ of step 5.2 we have $|f(u)-t_c|=|f(a)-f(b_j)-t_c|\le|f(b_j)|+|f(a)-t_c|$, and expanding $f(a)-t_c=\sum_{i=1}^{r_1}z_i\log(|\sigma_i(a)|/c_i)+\sum_{j=1}^{r_2}z_{r_1+j}\log(|\tau_j(a)|^2/c_{r_1+j}^2)$ shows, by step 5.1 and by $|\sigma_i(a)|\le c_i$, $|\tau_j(a)|^2\le c_{r_1+j}^2$, that each logarithm lies in $[-\log A,0]$; hence $|f(a)-t_c|\le\log A\cdot\sum_i|z_i|$ and $|f(u)-t_c|\le B$. [F13, step 5.1, step 5.2, step 6.1]

7.2 Choose indices $p<q$ with $z_p\ne z_q$, possible by step 1.3. Since $\log d\to\infty$ as $d\to\infty$ and $z_p-z_q\ne0$, the absolute value of $(z_p-z_q)\log d+z_q\log A$ tends to infinity; hence choose $d>0$ with $|(z_p-z_q)\log d+z_q\log A|>B$. [F13, step 1.3, step 6.1]

8.1 Set $d_p:=d$, $d_q:=A/d$ and $d_i:=1$ for the remaining indices $i$; then $\prod_{i=1}^{r_1+r_2}d_i=A$ and $\sum_i z_i\log d_i=z_p\log d+z_q\log(A/d)=(z_p-z_q)\log d+z_q\log A$, so this $d$ can be chosen with $|\sum_iz_i\log d_i|>B$. [F13, step 7.2]

9.1 Define the admissible tuple $c$ by $c_i:=d_i$ for $i\le r_1$ and $c_{r_1+j}:=\sqrt{d_{r_1+j}}$ for $1\le j\le r_2$; then $\prod_{i=1}^{r_1}c_i\cdot\prod_{j=1}^{r_2}c_{r_1+j}^2=\prod_i d_i=A$ and $t_c=\sum_i z_i\log d_i$, so $|t_c|>B$. [step 8.1, algebra]

10.1 Applying the fixed-product construction and bounded-norm argument of steps 1.5 through 5.2 to the admissible tuple $c$ from step 9.1 yields a unit $u\in\mathcal O_K^\times$ with $|f(u)-t_c|\le B$; since $|t_c|>B$, the triangle inequality gives $|f(u)|\ge|t_c|-|f(u)-t_c|>0$, so $f(u)\ne0$ and therefore $z\notin W^\perp$ by step 1.4. [step 1.4, step 1.5, step 5.2, step 7.1, step 9.1]

11.1 As $z\notin H^\perp$ was arbitrary, every $z$ outside $H^\perp$ lies outside $W^\perp$, which means $W^\perp\subseteq H^\perp$. [step 1.3, step 10.1]

12.1 Since $W\subseteq H$ we have $H^\perp\subseteq W^\perp$, and with step 11.1 this gives $H^\perp=W^\perp$; taking orthogonal complements and using $W^{\perp\perp}=W$ and $H^{\perp\perp}=H$ yields $W=H$, so $\lambda(\mathcal O_K^\times)$ spans $H$ over $\mathbb R$. [F5, step 1.1, step 11.1]

13.1 By the discreteness of $\lambda(\mathcal O_K^\times)$ and [F4], there are $\mathbb R$-linearly independent $v_1,\dots,v_s\in\lambda(\mathcal O_K^\times)$ with $\lambda(\mathcal O_K^\times)=\mathbb Zv_1\oplus\cdots\oplus\mathbb Zv_s$ and $\operatorname{span}_{\mathbb R}\lambda(\mathcal O_K^\times)=\mathbb Rv_1\oplus\cdots\oplus\mathbb Rv_s$; this span is $H$ by step 12.1, so $s=\dim_{\mathbb R}H=r_1+r_2-1$ and $\lambda(\mathcal O_K^\times)$ is a full lattice in $H$ of rank $r_1+r_2-1$. [F1, F3, F4, step 12.1]

14.1 Choice accounting: AC is invoked through [F8], the discreteness input [F3], and the Countable Choice measure interfaces in [F12]. The only other selections are the finitely many generators $b_1,\dots,b_m$ of step 5.2 and the single positive real $d$ of step 7.2; the rank-zero case of step 1.2 is choice-free. [A1, F3, F8, F9, F12, step 1.2, step 5.2, step 7.2] ∎

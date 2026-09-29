---
id: cex-green-functions-need-not-exist-with-the-naive-boundary-regularity
kind: counterexample
title: An isolated boundary point obstructs pointwise-zero Green data
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-archimedean-reciprocal
  - cor-regular-level-set-local-graph-theorem
  - cor-removable-singularity-for-bounded-harmonic-functions
  - def-countable-choice
  - def-ck-and-multi-index-notation-in-several-variables
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-convex-subset-of-euclidean-space
  - def-dirichlet-green-function-for-minus-laplacian
  - def-euclidean-inner-product
  - def-euclidean-spheres-and-closed-balls
  - def-euclidean-submersions-and-immersions
  - def-jacobian-matrix-and-gradient
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-laplacian-of-a-c2-function
  - def-metric-ball
  - def-metric-bounded-diameter
  - def-metric-interior-closure-boundary
  - def-norm-and-normed-space
  - def-path-connected
  - def-polygonal-path-and-polygonal-connectedness
  - def-p-norms-on-rn
  - def-regular-critical-points-values-and-level-sets
  - lem-derivative-of-a-power
  - lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
  - lem-euclidean-polygonal-paths-are-continuous
  - lem-dirichlet-green-function-is-unique-and-positive
  - lem-laplace-fundamental-solution-is-harmonic-off-its-pole
  - lem-metrics-on-rn
  - lem-p-norms-are-norms-and-induce-the-published-metrics
  - lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness
  - lem-smooth-sphere-data-have-a-harmonic-replacement
  - thm-algebra-of-derivatives
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-chain-rule-for-total-derivatives
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-metric-open-set-algebra
  - thm-path-connected-implies-connected
  - thm-weak-maximum-principle-for-the-laplacian
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf
      locator: "§2.10, remark (3), isolated boundary points are irregular, printed p.68; §2.8, Green-function definition and remarks (0)–(1), printed pp.44–45"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: "§5.4, existence warning after Lemma 5.22, printed p.126"
---

## Statement

Assume Countable Choice and $n\ge2$. Let
$B=B_1(0)=\{x\in\mathbb R^n:\lVert x\rVert_2<1\}$ and
$\Omega=B\setminus\{0\}$. For every pole $y\in\Omega$, there is no harmonic
corrector $H_y\in C^2(\Omega)\cap C(\overline\Omega)$ whose boundary values
satisfy $H_y(z)=\Phi(z-y)$ for every $z\in\partial\Omega$. In particular,
there is no Dirichlet Green function on $\Omega$ in the pointwise-zero-boundary
sense of [[def-dirichlet-green-function-for-minus-laplacian]]. The argument
uses the isolated boundary point $0$ and does not rule out weaker
potential-theoretic Green kernels.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, the normalized kernel $\Phi$ of
[[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], and
the Euclidean metric, norm, balls and spheres of
[[lem-metrics-on-rn]], [[def-norm-and-normed-space]],
[[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]],
[[def-metric-ball]] and [[def-euclidean-spheres-and-closed-balls]].

[A1] Countable Choice, written $\mathrm{AC}_\omega$, is the exact assumption
used by the kernel convention and the named harmonic-replacement, removability
and Green-positivity results below ([[def-countable-choice]]). The explicit
Poisson formula defines the ball corrector family; no full Axiom of Choice is
used.

[F1] For the Euclidean norm, $d_2(x,z)=\lVert x-z\rVert_2$, and the Euclidean
sphere is $S_2(0,1)=\{z:\lVert z\rVert_2=1\}$; the standard vector
$e_1=(1,0,\ldots,0)$ has norm $1$
([[lem-metrics-on-rn]], [[def-euclidean-inner-product]],
[[def-euclidean-spheres-and-closed-balls]]).

[F2] Every norm satisfies the reverse triangle inequality
$|\lVert u\rVert-\lVert v\rVert|\le\lVert u-v\rVert$
([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[F3] Metric balls are open, and $\overline A$ and $\partial A$ mean the
adherent points and $\overline A\setminus\operatorname{int}(A)$, respectively
([[thm-metric-open-set-algebra]], [[def-metric-interior-closure-boundary]]).

[F14] For every $r>0$ there is $N\ge1$ with $1/N<r$
([[cor-archimedean-reciprocal]]); consequently $t=1/(N+1)$ satisfies
$0<t<\min\{r,1\}$.

[F4] A set is bounded when it lies in a metric ball; $B_1(0)$ is nonempty and
bounded. Every Euclidean
ball is convex: for $x,v\in B_2(a,r)$ and $t\in[0,1]$, the triangle inequality
and positive homogeneity of the norm give
$\lVert(1-t)x+tv-a\rVert\le(1-t)\lVert x-a\rVert+t\lVert v-a\rVert<r$. Its
segment $t\mapsto(1-t)x+tv$ is a continuous polygonal path in the ball, so the
ball is path-connected, and a path-connected space is connected
([[def-metric-bounded-diameter]], [[def-metric-ball]],
[[def-norm-and-normed-space]],
[[def-convex-subset-of-euclidean-space]],
[[lem-euclidean-polygonal-paths-are-continuous]],
[[def-polygonal-path-and-polygonal-connectedness]], [[def-path-connected]],
[[thm-path-connected-implies-connected]]).

[F5] If $n\ge2$ and $U\subseteq\mathbb R^n$ is nonempty, open and connected,
then $U\setminus\{p\}$ is nonempty, open, connected and path-connected for
every $p\in U$ ([[lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness]]).

[F6] The unit sphere is a smooth regular level set and has local $C^\infty$
graph charts. The level map $F(z)=\langle z,z\rangle=\sum_i z_i^2$ has
continuous coordinate partials $\partial_iF(z)=2z_i$ whose further derivatives
are constant, so it is $C^k$ for every $k$; the continuous-partials theorem
identifies its total derivative $DF(z)h=2\langle z,h\rangle$, and on the unit
sphere $DF(z)z=2\ne0$, so $1$ is a regular value and the regular-level graph
theorem supplies local $C^k$ graph charts for every $k$
([[def-euclidean-inner-product]],
[[def-ck-and-multi-index-notation-in-several-variables]],
[[def-ck-euclidean-maps-and-diffeomorphisms]],
[[cor-regular-level-set-local-graph-theorem]],
[[def-regular-critical-points-values-and-level-sets]],
[[def-euclidean-submersions-and-immersions]],
[[def-jacobian-matrix-and-gradient]],
[[thm-continuous-partial-derivatives-imply-total-differentiability]],
[[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]]). Smooth
Euclidean maps remain smooth under composition
([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]],
[[thm-chain-rule-for-total-derivatives]]).

[F7] The normalized kernel is
$\Phi(x)=|x|^{2-n}/((n-2)\omega_{n-1})$ for $n\ge3$ and
$\Phi(x)=-(2\pi)^{-1}\log|x|$ for $n=2$, and its translates are smooth away
from their poles ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]],
[[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]]).

[F8] Smooth real data $g$ on $\partial B_1$ have a harmonic replacement
$h\in C^\infty(B_1)\cap C(\overline B_1)$ equal to $g$ on the sphere; it is
given by the displayed Poisson integral, so uniqueness makes the family
parameterized by its data ([[lem-smooth-sphere-data-have-a-harmonic-replacement]]).

[F9] A Dirichlet Green function is built from correctors
$H_p\in C^2(U)\cap C(\overline U)$ with $H_p(z)=\Phi(z-p)$ on $\partial U$
and $G_U(x,p)=\Phi(x-p)-H_p(x)$ ([[def-dirichlet-green-function-for-minus-laplacian]]).

[F10] On a bounded, nonempty, open, connected set, any existing Dirichlet
Green function satisfies $G_U(x,p)>0$ for distinct $x,p$
([[lem-dirichlet-green-function-is-unique-and-positive]]).

[F11] A bounded harmonic function on a punctured neighborhood in dimension
$n\ge2$ has a unique harmonic extension across the puncture
([[cor-removable-singularity-for-bounded-harmonic-functions]]).

[F12] If $u\in C^2(U)\cap C(\overline U)$ on a bounded nonempty open set and
$\Delta u\ge0$, then $\max_{\overline U}u=\max_{\partial U}u$
([[thm-weak-maximum-principle-for-the-laplacian]]).

[F13] The Laplacian is the sum of pure second derivatives; coordinate
derivatives are linear, so the Laplacian of the difference of two harmonic
$C^2$ functions is zero ([[def-laplacian-of-a-c2-function]],
[[thm-algebra-of-derivatives]]).

## Counterexample

**Proof technique:** direct.

1.1 By [F1] and [F3], $B_1(0)$ is open. It is nonempty since it contains $0$, and it is bounded because $B_1(0)\subset\{x:\lVert x\rVert_2<2\}$; it is connected by [F4]. For $\lVert z\rVert_2=1$ and every $r>0$, [F14] gives $N\ge1$ with $1/N<r$; putting $t=1/(N+1)$ gives $0<t<\min\{r,1\}$. Then $(1-t)z\in B_1(0)$ and $\lVert(1-t)z-z\rVert_2=t<r$, so every ball about $z$ meets $B_1(0)$; $B_1(0)$ is open, hence $z\in\partial B_1(0)$. If $\lVert z\rVert_2>1$, then [F2] gives $\lVert x\rVert_2\ge\lVert z\rVert_2-\lVert x-z\rVert_2>1$ whenever $\lVert x-z\rVert_2<\lVert z\rVert_2-1$, so such $z$ lies outside $\overline{B_1(0)}$. Thus $\overline{B_1(0)}=\overline B_2(0,1)$ and $\partial B_1(0)=S_2(0,1)$. The puncturing result [F5] makes $\Omega=B_1(0)\setminus\{0\}$ nonempty, open and connected, and it remains bounded as a subset of $B_1(0)$. Every point of $S_2(0,1)$ is adherent to $\Omega$ by the same radial approximation, and $0$ is adherent because $te_1\in\Omega$ for the positive $t<\min\{r,1\}$ supplied by [F14] in every ball of radius $r$ about $0$. Points of norm greater than $1$ have the disjoint neighborhoods just proved. Since $\Omega$ is open, [F3] gives $\overline\Omega=\overline B_2(0,1)$ and $\partial\Omega=S_2(0,1)\cup\{0\}$; in particular $0$ is an isolated boundary point, with $B_2(0,1/2)\cap\partial\Omega=\{0\}$. [F1, F2, F3, F4, F5, F14, choose, algebra]

2.1 For each $p\in B_1(0)$, the reverse triangle inequality [F2] gives $\lVert z-p\rVert_2\ge1-\lVert p\rVert_2>0$ on $S_2(0,1)$. Thus $g_p(z)=\Phi(z-p)$ is defined and smooth there: [F7] gives smoothness in an ambient neighborhood of every sphere point, and [F6] gives smoothness after restriction to the sphere's local graph charts. Apply [F8] to obtain the unique harmonic replacement $H^B_p$ for each $p$; its explicit Poisson formula defines this family without a choice function. By [F9] and $\partial B_1(0)=S_2(0,1)$ from step 1.1, the function $G_B(x,p):=\Phi(x-p)-H^B_p(x)$ is a Dirichlet Green function on $B_1(0)$. The boundedness, nonemptiness, openness and connectedness required by [F10] were verified in step 1.1, so for every $y\in\Omega$ one has $G_B(0,y)=\Phi(-y)-H^B_y(0)>0$, because $0\ne y$. [A1, F2, F6, F7, F8, F9, F10, step 1.1, construct]

2.2 Fix any $y\in\Omega$ and suppose a corrector $H_y$ on $\Omega$ with the stated pointwise boundary values exists. Set $w=H_y-H^B_y$ on $B_1(0)\setminus\{0\}$. Both terms are $C^2$ and harmonic there; [F13] therefore gives that $w$ is harmonic. Step 1.1 identifies $\overline\Omega$ with the closed unit ball, so the assumed continuous extension of $H_y$ and the replacement's continuous extension make $w$ continuous on that closed ball. It is bounded near $0$ by this continuity, and the removable-singularity result [F11] extends it harmonically to $\widetilde w$ on $B_1(0)$. The extension agrees at $0$ with the continuous trace $w(0)$, since both are continuous and agree on the punctured ball. On the outer sphere the two correctors have the same boundary data $\Phi(z-y)$, so $\widetilde w=0$ there. Apply [F12] to $\widetilde w$ and $-\widetilde w$ on $B_1(0)$; both are harmonic, continuous on the closed ball and zero on its boundary. Hence $\widetilde w\equiv0$. [F9, F11, F12, F13, step 1.1, algebra]

3.1 But $0\in\partial\Omega$ by step 1.1, so the assumed boundary condition gives $H_y(0)=\Phi(-y)$. Consequently $\widetilde w(0)=w(0)=H_y(0)-H^B_y(0)=G_B(0,y)>0$ by step 2.1, contradicting $\widetilde w\equiv0$. This contradiction holds for every $y\in\Omega$; the Green definition [F9] requires such a corrector for every pole, so no Green function exists in that pointwise-zero-boundary sense. The proof uses $n\ge2$ for the puncture and removability results; the pole is always distinct from $0$, both boundary pieces are treated, and there is no iff assertion. Its only choice assumption is $\mathrm{AC}_\omega$ from [A1], the kernel convention and [F8], [F10], [F11]; the ball family itself is given by the explicit formula. [A1, F8, F9, F10, F11, step 1.1, step 2.1, step 2.2, algebra, assume-contra, contradiction, discharge-contradiction] ∎

## Source notes

Schmidt, *Partial Differential Equations I* (2026), §2.10 remark (3), printed
p.68, lists isolated boundary points among irregular points. The preceding
discussion says that the section omits detailed proofs, so this is context only;
the obstruction above is proved from the ball replacement, positivity,
removability and weak maximum principle with their hypotheses checked.
Schmidt's §2.8 Green definition and remarks (0)–(1), printed pp.44–45, use a
harmonic corrector and zero boundary values; his kernel convention has the
opposite sign, translated here as $\Phi=-F$ and $G_{here}=-G_{Schmidt}$.
Teschl, §5.4, printed p.126, notes after Lemma 5.22 that a Green representation
formula alone does not establish Dirichlet solvability; it is contextual and
does not prove this counterexample.

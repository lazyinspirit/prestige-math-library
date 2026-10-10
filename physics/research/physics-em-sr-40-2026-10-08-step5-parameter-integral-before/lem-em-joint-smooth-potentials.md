---
id: lem-em-joint-smooth-potentials
kind: lemma
title: "Joint regularity of the radial vector and scalar potentials on a star-shaped domain"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential, thm-poincare-lemma-for-star-shaped-domains, def-star-shaped-open-subset-of-rn, def-vector-potential-of-a-c1-vector-field, def-closed-and-exact-c1-vector-fields, def-divergence-and-curl-of-a-c1-vector-field, def-cross-product-in-r3, def-euclidean-inner-product, def-ck-euclidean-maps-and-diffeomorphisms, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, lem-em-parameter-integrals, thm-heine-borel-rn, thm-heine-cantor-metric, lem-uniform-integral-error-bound, thm-newton-leibniz-with-interior-derivative, def-directional-and-partial-derivatives]
dependency_roles:
  thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential: mathematical-premise
  thm-poincare-lemma-for-star-shaped-domains: mathematical-premise
  def-star-shaped-open-subset-of-rn: mathematical-premise
  def-vector-potential-of-a-c1-vector-field: mathematical-premise
  def-closed-and-exact-c1-vector-fields: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  lem-em-parameter-integrals: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  lem-uniform-integral-error-bound: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Feldman, A. Rechnitzer, E. Yeager, CLP-4 Vector Calculus (UBC), §4.1 (Theorems 4.1.4-4.1.16)"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/sec_graadDivCurl.html"
    - title: "J. Lebl, Basic Analysis II, §9.1 (Leibniz integral rule), Theorem 9.1.1"
      url: "https://www.jirka.org/ra/realanal2.pdf"
verification:
  precheck: pass
---

## Statement

**Regularity convention for a possibly non-open parameter interval.** Let $U\subseteq\mathbb R^3$ be open, let $I\subseteq\mathbb R$ be an interval and let $k\in\mathbb N$. A map on $U\times I$ is **jointly $C^k$** when it is the restriction of a $C^k$ map on some open neighbourhood $N\subseteq\mathbb R^4$ of $U\times I$, in the sense of [[def-ck-euclidean-maps-and-diffeomorphisms]]; it is **jointly $C^\infty$** when it is the restriction of one smooth map on such an open neighbourhood. For open $I$ these are exactly the usual open-domain classes; at included endpoints of a nondegenerate interval, time derivatives are the corresponding relative one-sided derivatives. For empty or singleton $I$ the convention still asserts extension existence and the spatial identities below, but it does not determine time jets uniquely from the restricted values alone. The convention does not require a fixed uniform enlargement of an unbounded $I$.

**Vector witness.** Let $U\subseteq\mathbb R^3$ be open and star-shaped with centre $a\in U$ ([[def-star-shaped-open-subset-of-rn]]), let $I\subseteq\mathbb R$ be an interval, let $k\ge1$, and let $B:U\times I\to\mathbb R^3$ be jointly $C^k$ with $\operatorname{div}B(\cdot,t)=0$ on $U$ for every $t\in I$ ([[def-divergence-and-curl-of-a-c1-vector-field]]). Then

$$A(x,t):=\int_0^1s\,B\bigl(a+s(x-a),t\bigr)\times(x-a)\,ds$$

is jointly $C^k$ on $U\times I$ and

$$\operatorname{curl}A(\cdot,t)=B(\cdot,t)\qquad(t\in I),$$

the curl being taken in the spatial variables and the cross product being that of [[def-cross-product-in-r3]].

**Scalar witness.** If in addition $C:U\times I\to\mathbb R^3$ is jointly $C^k$ with $\operatorname{curl}C(\cdot,t)=0$ on $U$ for every $t\in I$, then

$$\phi(x,t):=-\int_0^1\bigl\langle C\bigl(a+s(x-a),t\bigr),\,x-a\bigr\rangle\,ds$$

is jointly $C^k$ on $U\times I$ and

$$\nabla\phi(\cdot,t)=-C(\cdot,t)\qquad(t\in I),$$

the gradient and inner product being those of [[def-directional-and-partial-derivatives]] and [[def-euclidean-inner-product]]. For jointly $C^\infty$ data both potentials are jointly $C^\infty$. No global potential on a non-star-shaped open set is claimed, and the restrictions are continuous at included endpoints by joint regularity.

## Facts & Assumptions

**Given:** An open star-shaped $U\subseteq\mathbb R^3$ with centre $a$; an interval $I\subseteq\mathbb R$; an integer $k\ge1$; a jointly $C^k$ field $B:U\times I\to\mathbb R^3$ with $\operatorname{div}B(\cdot,t)=0$ for every $t$; and, for the scalar witness, a jointly $C^k$ field $C:U\times I\to\mathbb R^3$ with $\operatorname{curl}C(\cdot,t)=0$ for every $t$.

[F1] Star-shapedness: $a+s(x-a)\in U$ for every $x\in U$ and $0\le s\le1$ ([[def-star-shaped-open-subset-of-rn]]).

[F2] Radial vector potential: if $U\subseteq\mathbb R^3$ is open and star-shaped with centre $a$ and $B:U\to\mathbb R^3$ is $C^1$ divergence-free, then $A(x)=\int_0^1t\,B(a+t(x-a))\times(x-a)\,dt$ is a vector potential for $B$ in the sense of [[def-vector-potential-of-a-c1-vector-field]]: it is $C^1$ and $\operatorname{curl}A=B$ ([[thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential]]).

[F3] Poincaré lemma and closedness: on a star-shaped open set every closed $C^1$ field $F$ (that is, $\partial_jF_i=\partial_iF_j$) is exact, with $C^2$ potential $\phi(x)=\int_0^1\langle F(a+t(x-a)),x-a\rangle\,dt$; exactness means $F=\nabla\phi$ ([[thm-poincare-lemma-for-star-shaped-domains]], [[def-closed-and-exact-c1-vector-fields]]).

[F4] $C^k$ calculus: the $C^k$ class on open Euclidean sets is closed under sums, products and composition, with the chain and product rules for total derivatives ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]]).

[F5] Differentiation under the integral over a compact parameter interval: if $g,h:[c,d]\times[\alpha,\beta]\to\mathbb R$ are continuous and $g(\cdot,s)$ is differentiable with derivative $h(\cdot,s)$ for each $s$, then $x\mapsto\int_\alpha^\beta g(x,s)\,ds$ is differentiable with derivative $\int_\alpha^\beta h(x,s)\,ds$, relative and one-sided at the endpoints ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]); the proof method is that of [[lem-em-parameter-integrals]].

[F6] Uniform bounds: continuous real functions on compact metric spaces are uniformly continuous ([[thm-heine-cantor-metric]]), closed bounded subsets of $\mathbb R^m$ are compact ([[thm-heine-borel-rn]]), and $\lvert\int_u^vf-\int_u^vg\rvert\le\eta\lvert v-u\rvert$ when $\lvert f-g\rvert\le\eta$ on the interval ([[lem-uniform-integral-error-bound]]).

[F7] Fundamental theorem: if $G$ is continuous on $[u,v]$ and differentiable on $(u,v)$ with Riemann integrable derivative, then $\int_u^vG'=G(v)-G(u)$ ([[thm-newton-leibniz-with-interior-derivative]]).

## Proof

**Proof technique:** direct; extend the data to a neighbourhood of $U\times I$, prove joint regularity of the radial integrals on an open radial-admissibility set by induction on the derivative order using differentiation under the integral sign, and verify the spatial field identities slice by slice.

1.1 Extension and radial-admissibility. By the joint $C^k$ convention there are an open neighbourhood $N\subseteq\mathbb R^4$ of $U\times I$ and a $C^k$ map $\widetilde B:N\to\mathbb R^3$ with $\widetilde B|_{U\times I}=B$; for the scalar witness take $N$ to be the intersection of the two neighbourhoods and let $\widetilde C$ be the corresponding $C^k$ extension, which exists on that intersection. Put $P:=\{(x,t)\in N:\ (a+s(x-a),t)\in N\text{ for every }s\in[0,1]\}$; then $U\times I\subseteq P$ by [F1], and $P$ is open: if $(x,t)\in P$, the radial image $R:=\{(a+s(x-a),t):0\le s\le1\}$ is compact and contained in the open set $N$, use the indexed cover of all balls $B(q,\varepsilon)$ with $q\in R$, $\varepsilon>0$ and $B(q,2\varepsilon)\subseteq N$. Openness supplies at least one at each point, without selecting a radius function. Take a finite subcover and put $\rho$ equal to the minimum of its finitely many positive radii. Every point within distance $\rho$ of a point of $R$ then belongs to $N$. The map $\Phi(x',t',s)=(a+s(x'-a),t')$ satisfies $\lVert\Phi(x',t',s)-\Phi(x,t,s)\rVert_2\le\lVert x'-x\rVert_2+\lvert t'-t\rvert$ uniformly in $s$, so for $\lVert x'-x\rVert_2+\lvert t'-t\rvert<\rho$ every point of the radial image of $(x',t')$ lies within distance $\rho$ of $R$, hence in $N$, and $(x',t')\in P$. [given, F1, F4, F6, algebra]

2.1 Joint regularity of the radial integrals on $P$: for every compact box $Q\times J\subseteq P$ and every multi-index $\alpha$ in the variables $(x,t)$ with $\lvert\alpha\rvert\le k$, the partial derivative $\partial^\alpha$ of the integral $\widetilde A(x,t):=\int_0^1s\,\widetilde B(a+s(x-a),t)\times(x-a)\,ds$ exists on $Q\times J$ and equals $\int_0^1\partial^\alpha\bigl[s\,\widetilde B(a+s(x-a),t)\times(x-a)\bigr]ds$, and this is jointly continuous on $Q\times J$; the same holds for $\widetilde\Psi(x,t):=\int_0^1\langle\widetilde C(a+s(x-a),t),x-a\rangle\,ds$. Indeed, on the compact set $(Q\times J)\times[0,1]$ every radial argument $(a+s(x-a),t)$ lies in a compact subset of $N$, and each integrand is a sum of products of the $C^k$ functions $\widetilde B$, $\widetilde C$ composed with the smooth map $(x,t,s)\mapsto(a+s(x-a),t)$, the polynomial factor $s$ and the polynomial vector $x-a$, hence is $C^k$ jointly in $(x,t,s)$ by [F4]. Induction on $\lvert\alpha\rvert$: for $\lvert\alpha\rvert=0$ joint continuity of the $s$-integral follows from uniform continuity of the integrand on the compact product and [F6]; if the claim holds for $\alpha$, then differentiating the integral in one further spatial or time variable under the integral sign is legitimate by [F5] applied with parameter $s\in[0,1]$ and the other variables frozen at values in $Q\times J$, and the resulting integral is again jointly continuous by the same uniform-continuity argument; at an included endpoint of a nondegenerate $J$ this gives the relative derivative, as stated there. [step 1.1, F4, F5, F6, algebra]

3.1 Restriction to $U\times I$: since $U\times I\subseteq P$ and the extensions agree with $B$ and $C$ there, the maps $A=\widetilde A|_{U\times I}$ and $-\widetilde\Psi|_{U\times I}$ are the restrictions of the $C^k$ maps $\widetilde A$ and $-\widetilde\Psi$ on the open set $P$, hence are jointly $C^k$ on $U\times I$; the restricted integrals are exactly the formulas displayed in the Statement because $\widetilde B|_{U\times I}=B$ and $\widetilde C|_{U\times I}=C$. [step 1.1, step 2.1, algebra]

4.1 Field identities at each fixed time. Fix $t\in I$. The slice $B(\cdot,t)$ is $C^1$ on $U$ (as $k\ge1$) and divergence-free, and $A(\cdot,t)$ coincides with the radial witness of [F2] for that slice; hence $\operatorname{curl}A(\cdot,t)=B(\cdot,t)$ by [F2]. For the scalar witness put $\Psi_C(x,t):=\int_0^1\langle C(a+s(x-a),t),x-a\rangle\,ds$, so that $\phi=-\Psi_C$; the slice $C(\cdot,t)$ is $C^1$ and closed on $U$. Differentiating $\Psi_C$ in $x_j$ under the integral sign, legitimate by step 2.1 with $\lvert\alpha\rvert=1$, gives $\partial_j\Psi_C(x,t)=\int_0^1\bigl[C_j(a+s(x-a),t)+s\sum_i(x-a)_i\,\partial_jC_i(a+s(x-a),t)\bigr]ds$; closedness of the slice replaces $\partial_jC_i$ by $\partial_iC_j$, so the integrand is $\frac{d}{ds}\bigl[s\,C_j(a+s(x-a),t)\bigr]$ by the chain and product rules [F4], and the fundamental theorem [F7] gives $\partial_j\Psi_C(x,t)=C_j(x,t)-0\cdot C_j(a,t)=C_j(x,t)$; hence $\nabla\phi(\cdot,t)=-C(\cdot,t)$. [step 3.1, F2, F3, F4, F5, F7, algebra]

5.1 Jointly $C^\infty$ data: if $B$ and $C$ are jointly $C^\infty$, choose one smooth extension of each on a common neighbourhood, repeat steps 1.1 through 4.1 for every $k$, and conclude that the same radial integrals are jointly $C^k$ on $U\times I$ for every $k$, hence jointly $C^\infty$, with the same field identities at every $t$. [step 4.1, algebra]

6.1 Degenerate and unbounded time domains: for $I=\varnothing$ the statements over $U\times I$ are vacuous; for $I=\{t_0\}$ the constant-in-time extensions $\widetilde B(x,t)=B(x,t_0)$ and $\widetilde C(x,t)=C(x,t_0)$ are $C^k$ on $U\times\mathbb R$ and the construction of steps 1.1 through 4.1 produces the two potentials with the stated spatial identities at $t_0$, while the values of the extension away from $t_0$ are not determined by the original data, so no unique time jets are asserted; for unbounded $I$ the set $P$ is constructed from the given neighbourhood $N$ of $U\times I$ without any fixed uniform enlargement, and the argument applies verbatim. Hence both witnesses are jointly $C^k$ with the stated identities, which is the Statement. [step 3.1, step 4.1, step 5.1, algebra] ∎

## Remarks

- The corrected sign convention is the one proved here: the positive radial integral $\int_0^1\langle C,x-a\rangle\,ds$ has gradient $+C$, so the scalar witness is its negative; the vector identity $\operatorname{curl}A=B$ keeps the positive sign because the cross product and curl conventions are the ones of the cited definitions. For $C=e_1$ the formula gives $\phi=-(x_1-a_1)$ and $\nabla\phi=-e_1$, as required.
- The construction is local on a star-shaped $U$ even when the surrounding open set has holes: on a ball the radial segment stays inside the ball. No global potential on an arbitrary open set and no uniqueness of the potentials are asserted.

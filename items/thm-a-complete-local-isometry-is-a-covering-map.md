---
id: thm-a-complete-local-isometry-is-a-covering-map
kind: theorem
title: A complete local isometry is a covering map
status: draft
origin: pipeline
deps:
  - def-riemannian-isometry-and-local-isometry
  - thm-hopf-rinow
  - def-covering-map-and-evenly-covered-neighbourhoods
  - lem-local-isometries-send-geodesics-to-geodesics
  - thm-existence-of-normal-neighborhoods
  - thm-radial-geodesics-minimize-length-in-a-normal-neighborhood
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - def-geodesically-complete-riemannian-manifold
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Theorem 20.1.1 and Lemma 20.1.2 with their proofs, §20.1, printed pp.147–149: complete local isometry is a covering; the target is complete"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§5, pp.17–19: the covering property used in the Cartan–Hadamard route"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$F:(N,\hat g)\to(M,g)$ be a local isometry between connected, boundaryless
Riemannian manifolds, and suppose that $N$ is complete and nonempty. Then:

1. $F$ is an open map and surjective;
2. $F$ is a smooth covering map in the sense of
   [[def-covering-map-and-evenly-covered-neighbourhoods]];
3. $(M,g)$ is complete.

Completeness of $N$ is essential and is not automatic; the conclusion can fail
for an incomplete source even when $F$ is a local isometry (the flat punctured
plane over the flat plane, or a nontrivial covering with an incomplete lifted
metric, are the standard witnesses). No compactness, no simple connectedness of
$M$ and no incompleteness of $M$ is assumed.

## Facts & Assumptions

**Given:** The local isometry $F:(N,\hat g)\to(M,g)$ of connected boundaryless
Riemannian manifolds with $N$ complete and nonempty, and the inherited
$\mathrm{AC}_\omega$ of the exponential, Hopf–Rinow and normal-neighbourhood
suppliers recorded in [A1].

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the Hopf–Rinow, geodesic-existence and
normal-neighbourhood suppliers used below; no additional selection is made.

[F1] A local isometry is a smooth local diffeomorphism with
$F^*g=\hat g$ ([[def-riemannian-isometry-and-local-isometry]]); in particular
$dF_x:T_xN\to T_{F(x)}M$ is a linear isometry onto its image, and a local
diffeomorphism has an open image on every open set.

[F2] A local Riemannian isometry commutes with covariant derivatives along
curves, and therefore carries affinely parametrized geodesics to affinely
parametrized geodesics
([[lem-local-isometries-send-geodesics-to-geodesics]]).

[F3] For every initial vector there is a unique maximal geodesic with those
initial data; its domain is an open interval containing the initial time, and
the geodesic flow is smooth in its arguments
([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]).

[F4] Hopf–Rinow: for a nonempty connected boundaryless Riemannian manifold,
metric completeness, geodesic completeness, the global definition of
$\exp_p$ on $T_pM$ for one (equivalently every) $p$, and the compactness of
closed bounded subsets are equivalent
([[thm-hopf-rinow]]). Geodesic completeness means that every maximal geodesic
has domain $\mathbb R$ ([[def-geodesically-complete-riemannian-manifold]]).

[F5] Normal neighbourhoods: for $q\in M$ there is a star-shaped open
$V\subseteq T_qM$ containing $0$ such that $\exp_q:V\to U:=\exp_q(V)$ is a
diffeomorphism onto an open neighbourhood of $q$; for $v\in V$ the radial
curve $\gamma_v(t)=\exp_q(tv)$, $0\le t\le1$, is an affinely parametrized
geodesic of length $|v|$ minimizing among curves in $U$ from $q$ to
$\exp_q(v)$
([[thm-existence-of-normal-neighborhoods]],
[[thm-radial-geodesics-minimize-length-in-a-normal-neighborhood]]).

[F6] A covering map is a continuous surjection $p:E\to B$ such that every
$b\in B$ has an open neighbourhood $U$ whose preimage is a disjoint union of
open sets mapped homeomorphically onto $U$
([[def-covering-map-and-evenly-covered-neighbourhoods]]).

## Proof

1.1 $F$ is an open map. [F1, given]
Let $O\subseteq N$ be open and let $x\in O$. By [F1] there are open
neighbourhoods $W\subseteq O$ of $x$ and $W'$ of $F(x)$ such that
$F|_W:W\to W'$ is a diffeomorphism; then $F(W)\subseteq F(O)$ is an open
neighbourhood of $F(x)$. Hence every point of $F(O)$ is interior, so $F(O)$
is open. [F1, given]

1.2 Naturality of the exponential map. [F2, F3, F4, given]
For $x\in N$ and $w\in T_xN$, the curve $t\mapsto F(\exp_x(tw))$ is an
affinely parametrized geodesic of $M$ by [F2], with initial data $F(x)$ and
$dF_xw$. The maximal geodesic of $M$ with those initial data is unique by
[F3]. Since $N$ is complete, [F4] gives $\mathcal E_x=T_xN$, so
$\exp_x(tw)$ is defined for every $t\in\mathbb R$; consequently
$$F\bigl(\exp_x(tw)\bigr)=\exp_{F(x)}(t\,dF_xw)$$
for every $t$ for which the right-hand side is defined, and in particular for
all $t$ with $|t|\le1$ once $|dF_xw|$ is small enough that
$\exp_{F(x)}$ is defined on the radial segment up to time $1$. [F2, F3, F4, given]

2.1 Geodesic lifting. [F1, F3, step 1.2]
Let $\gamma:I\to M$ be an affinely parametrized geodesic, $t_0\in I$ and
$p\in F^{-1}(\gamma(t_0))$. By [F1], $(dF_p)^{-1}$ is defined on the image of
$dF_p$; put $w:=(dF_p)^{-1}\dot\gamma(t_0)$ and
$\widetilde\gamma(t):=\exp_p\bigl((t-t_0)w\bigr)$. This is defined for all
$t\in\mathbb R$ and is a geodesic of $N$ by [F4] and the definition of the
exponential; by step 1.2 applied at $x=p$,
$F(\widetilde\gamma(t))=\exp_{\gamma(t_0)}\bigl((t-t_0)\dot\gamma(t_0)\bigr)=\gamma(t)$
for $t\in I$, the last equality by uniqueness of the geodesic with prescribed
initial data [F3]. If $\widetilde\gamma_1$ is any other geodesic lift of
$\gamma$ with $\widetilde\gamma_1(t_0)=p$, then
$dF_p\dot{\widetilde\gamma}_1(t_0)=\dot\gamma(t_0)=dF_pw$ and $dF_p$ is
injective, so $\dot{\widetilde\gamma}_1(t_0)=w$; uniqueness of the geodesic
with initial data $(p,w)$ [F3] gives $\widetilde\gamma_1=\widetilde\gamma$.
Thus geodesics lift uniquely through any point of the fibre and lift over the
whole interval of definition. [F1, F3, step 1.2]

3.1 $F$ is surjective. [F5, step 1.1, step 2.1]
By step 1.1 the image $F(N)$ is open, and it is nonempty because $N$ is. If
$F(N)\neq M$, then since $M$ is connected and $F(N)$ is a nonempty proper
open subset, $F(N)$ is not closed, so there is $p\in\overline{F(N)}\setminus
F(N)$. By [F5] choose a normal neighbourhood $U_p=\exp_p(V)$ of $p$; since
$p$ is a limit point of $F(N)$, and $U_p$ is a neighbourhood of $p$, there is
$q\in F(N)\cap U_p$, say $q=\exp_p(v)$ with $v\in V$. The radial curve
$\gamma(t):=\exp_p(tv)$, $t\in[0,1]$, is an affinely parametrized geodesic from
$p$ to $q$ by [F5]. Choose $p_0\in F^{-1}(q)$, which exists because
$q\in F(N)$, and lift $\gamma$ through $p_0$ by step 2.1; the lift is defined
on $[0,1]$, so $p=\gamma(0)=F(\widetilde\gamma(0))$ lies in $F(N)$, a
contradiction. Hence $F(N)=M$. [F5, step 1.1, step 2.1]

3.2 The sheets over a normal ball. [F5, step 1.2, step 2.1]
Fix $q\in M$ and a normal neighbourhood $U=\exp_q(V)$ as in [F5], with $V$
star-shaped, $\exp_q:V\to U$ a diffeomorphism. For $y\in U$ write
$v_y:=\exp_q^{-1}(y)\in V$ and let $\gamma_y(t):=\exp_q(tv_y)$ for
$t\in[0,1]$, a geodesic from $q$ to $y$ by [F5]. For $p\in F^{-1}(q)$ define
$$\varphi_p:U\longrightarrow N,\qquad \varphi_p(y):=\exp_p\bigl((dF_p)^{-1}v_y\bigr),$$
the endpoint of the unique geodesic lift of $\gamma_y$ through $p$ furnished by
step 2.1. Then:

(i) $F\circ\varphi_p=\operatorname{id}_U$: this is step 1.2 applied to
$x=p$ and $w=(dF_p)^{-1}v_y$ together with the lift identity
$F(\exp_p(\,\cdot\,))=\exp_q(dF_p(\,\cdot\,))$ of that step;
(ii) $\varphi_p$ is smooth: $y\mapsto v_y$ is smooth because $\exp_q$ is a
diffeomorphism on $V$, $dF_p$ is linear, and $\exp_p$ is smooth on $T_pN$ by
[F4];
(iii) $\varphi_p$ is injective, since $F\circ\varphi_p=\operatorname{id}_U$;
so $V_p:=\varphi_p(U)$ is diffeomorphic to $U$ with inverse $F|_{V_p}$.

Moreover $F^{-1}(U)=\bigsqcup_{p\in F^{-1}(q)}V_p$. The inclusion $\supseteq$
is (i). Conversely, let $x\in F^{-1}(U)$ and $y:=F(x)$. The reversed radial
geodesic $t\mapsto\exp_q((1-t)v_y)$, $t\in[0,1]$, is a geodesic from $y$ to
$q$; lift it through $x$ by step 2.1, obtaining a geodesic $c$ with $c(0)=x$,
$c(1)=p\in F^{-1}(q)$ and $F\circ c$ contained in $U$. Reversing $c$ gives a
geodesic lift of $\gamma_y$ through $p$, which is the unique one by step 2.1;
hence $x=c(0)=\varphi_p(y)\in V_p$. Finally the $V_p$ are pairwise disjoint.
Suppose $x\in V_p\cap V_{p'}$ and put $y:=F(x)$; then $x=\varphi_p(y)$ and
$x=\varphi_{p'}(y)$ are the endpoints at time $1$ of geodesic lifts
$c$, $c_d$ of $\gamma_y$ with $c(0)=p$ and $c_d(0)=p'$. The reversed curves
$\bar c(t):=c(1-t)$ and $\bar c_d(t):=c_d(1-t)$, $t\in[0,1]$, are geodesics
of $N$ with $\bar c(0)=\bar c_d(0)=x$ that both project under $F$ to the
reversed radial geodesic $t\mapsto\gamma_y(1-t)$ from $y$ to $q$; both are
therefore geodesic lifts of one and the same geodesic through the point $x$,
so the uniqueness half of step 2.1 applied with $t_0=0$ gives
$\bar c=\bar c_d$. Evaluating at $t=1$ yields
$p=c(0)=\bar c(1)=\bar c_d(1)=c_d(0)=p'$, so $x\in V_p\cap V_{p'}$ forces
$p=p'$; equivalently, the sets $V_p$ belonging to distinct points $p\ne p'$
of $F^{-1}(q)$ are disjoint. [F5, step 1.2, step 2.1]

4.1 $F$ is a covering map. [F6, step 3.1, step 3.2]
For every $q\in M$ the normal ball $U$ of step 3.2 satisfies: each
$V_p=\varphi_p(U)$ is open (by smoothness of $\varphi_p$ and (i) there), the
restriction $F|_{V_p}:V_p\to U$ is a homeomorphism (indeed a diffeomorphism,
by (i) and (ii) there), and the sets $V_p$, $p\in F^{-1}(q)$, are pairwise
disjoint with union $F^{-1}(U)$ (step 3.2). This is exactly the evenly covered
condition of [F6], and $F$ is surjective by step 3.1. Hence $F$ is a covering
map. [F6, step 3.1, step 3.2]

4.2 $M$ is complete. [F4, step 2.1, step 3.1]
Let $\gamma:I\to M$ be a maximal geodesic of $M$; by step 3.1 and step 2.1 it
has a geodesic lift $\widetilde\gamma:I\to N$, and step 2.1 in fact produces
that lift as $\widetilde\gamma(t)=\exp_p((t-t_0)w)$ on all of $\mathbb R$.
Composing with $F$ recovers the maximal geodesic $\gamma$ (both are geodesics
with the same initial data, and $\gamma$ is maximal), so $\gamma$ is defined at
every real time; hence $I=\mathbb R$. Every maximal geodesic of $M$ has domain
$\mathbb R$, so $M$ is geodesically complete, and [F4] makes $(M,g)$ complete.
[F4, step 2.1, step 3.1]

5.1 Boundary and choice audit. [A1, F1, F2, F3, F4, F5, step 1.2, step 4.1, step 4.2]
Completeness of $N$ is used exactly twice: in step 1.2 to make the source
exponential globally defined, and in step 2.1 to make the geodesic lift exist
on the whole interval. The local isometry hypothesis is used for the injective
differential in step 2.1, for the open-image step 1.1 and for the geodesic
transport of step 1.2. Surjectivity is proved in step 3.1 before it is used in
steps 4.1 and 4.2. For $n=0$ both manifolds are discrete and $F$ is a
bijection of discrete sets, so the claims are immediate from those two steps;
a constant geodesic or the zero vector is covered by steps 1.2 and 2.1
(the lifted geodesic is then constant). Exactly the inherited [A1] is used;
no family of geodesics is selected, since each lift is produced from a
prescribed initial vector. $\square$

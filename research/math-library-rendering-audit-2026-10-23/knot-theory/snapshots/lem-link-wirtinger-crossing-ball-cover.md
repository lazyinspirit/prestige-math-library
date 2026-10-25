---
id: lem-link-wirtinger-crossing-ball-cover
kind: lemma
title: A punctured-sphere cover from a labeled link diagram
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-based-string-link-and-labeled-link-peripheral-system
  - def-regular-oriented-link-diagram
  - thm-seifert-van-kampen
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Stefan Friedl, Knot Theory, §5.3, proof of the Wirtinger Presentation
        Proposition
      url: https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf
      locator: Chapter 5, §5.3, printed pp. 69–72, PDF pp. 70–73
    - title: John Milnor, Link Groups
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf
      locator: §§1–2, PDF pp. 1–6, for the link-complement and meridian conventions
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $D$ be a finite regular oriented diagram of a nonempty labeled link with labeled components $K_1,\ldots,K_r$, where $r$ is positive, and with
$n\geq1$ crossings and at least one underpassing point on each component. Fix a
smooth height realization $L_D=\{(\gamma(s),\eta(s))\}\subset\mathbb R^2\times[-1,0]$
such that $\eta(s)=-1$ exactly at the $n$ underpassing points and
$\eta(s)>-1$ elsewhere; at each crossing the overpassing point has height
strictly greater than $-1$. Choose pairwise-disjoint closed product tubes $N(K_i)$ about the components of $L_D$, and let $E_L=S^3\setminus\operatorname{int}\bigl(\bigcup_iN(K_i)\bigr)$ be their compact exterior. Put
$$A=(\mathbb R^2\times[-1,\infty))\cup\{\infty\},\quad B=(\mathbb R^2\times(-\infty,-1])\cup\{\infty\},\quad \Sigma=(\mathbb R^2\times\{-1\})\cup\{\infty\},$$
and write $X=S^3\setminus L_D$, $A_L=A\cap X$, $B_L=B\cap X$,
and $\Sigma_L=\Sigma\cap X$. Also put
$A_L^\circ=((\mathbb R^2\times(-1,\infty))\cup\{\infty\})\cap X$.
Then $\Sigma_L$ is a path-connected sphere
with $n$ punctures, $A_L\cup B_L=X$, and $A_L\cap B_L=\Sigma_L$. There are
path-connected open sets $U,V\subset X$ such that $X=U\cup V$, $U$ deformation
retracts onto $A_L$, $V$ deformation retracts onto $B_L$, and $U\cap V$
deformation retracts onto $\Sigma_L$. The set $B_L$ is contractible. The small
circles in $\Sigma_L$ around the $n$ punctures normally generate
$\pi_1(\Sigma_L)$, and they still normally generate after any one circle is
omitted. The inclusion $A_L^\circ\hookrightarrow A_L$ is a homotopy
equivalence. Radial retraction in each chosen product tube identifies
$\pi_1(X)$ with the fundamental group of the chosen exterior $E_L$.

## Statement references

[Friedl, §5.3, punctured-sphere cover and Claims 0–1](https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf)

[Milnor, *Link Groups*, §§1–2](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf)

## Facts & Assumptions

**Given:** The regular diagram, height realization, labels, and product-tube data in the statement.

[F1] A regular diagram has finitely many transverse double points, no triple points, and finite oriented over/under data. [[def-regular-oriented-link-diagram]]

[F2] The link exterior is formed from pairwise disjoint product tubes; positive meridians are oriented boundaries of normal disks. [[def-based-string-link-and-labeled-link-peripheral-system]]

[F3] Attaching disks along loops in a path-connected space kills exactly their normal closure in the fundamental group. [[thm-seifert-van-kampen]]

## Proof

1.1 The height condition says that the link meets the level sphere $\Sigma$ exactly at the $n$ underpassing points. Hence $A_L\cup B_L=X$ and $A_L\cap B_L=\Sigma_L$. The one-point compactification of the plane $\mathbb R^2\times\{-1\}$ is a sphere, so removing those $n$ points gives the stated punctured sphere. The punctured sphere is path connected: remove one puncture to obtain a plane, in which a polygonal path detours around the remaining finite points. [F1, given, construct]

1.2 Because the crossing set is finite, choose pairwise disjoint coordinate balls about its points, then shrink the product tubes so each crossing ball meets precisely the two prescribed local branches and contains no other tube. Shrinking a product tube radially is an isotopy of its boundary and leaves the exterior homeomorphic. Use the unit-sphere stereographic coordinates $(u_1,u_2,u_3,u_4)=(2x,2y,2z,x^2+y^2+z^2-1)/(1+x^2+y^2+z^2)$. Here $\Sigma$ is $h\cdot u=c$, with $h=(0,0,1,-1)/\sqrt2$, $c=-1/\sqrt2$. Write $q=c h+\sin(3\pi/4)w$, $w\perp h$, $|w|=1$. Its explicit unit-speed normal collar is $\cos(3\pi/4-t)h+\sin(3\pi/4-t)w$, for $|t|<\rho=\pi/8$; it is injective since its angle stays in $(0,\pi)$, and positive $t$ is the $A$ side. In particular no general tubular-neighborhood or choice theorem is required. For $q\in\Sigma_L$, set $\epsilon(q)=\min\{\rho/4,d(q,L)/4\}$. This is positive and continuous. The points $\exp_q(t\nu_q)$ with $|t|<\epsilon(q)$ avoid $L$, since their distance from $q$ is less than $d(q,L)$. The variable-width collar $C=\{\exp_q(t\nu_q):q\in\Sigma_L,\ |t|<\epsilon(q)\}$ is embedded and open in $X$. Set $U=A_L\cup C_{<0}$ and $V=B_L\cup C_{>0}$, where $C_{<0}$ and $C_{>0}$ are its negative and positive normal halves. Then $U,V$ are open, cover $X$, and $U\cap V=C$. Clamping the normal coordinate to $0$ retracts $U$ to $A_L$ and $V$ to $B_L$, while the collar itself retracts to $\Sigma_L$. For the final assertion, choose a continuous function $\chi:[0,1]\to[0,1]$ equal to $1$ on $[0,1/4]$ and $0$ on $[1/2,1]$. On the positive collar of $A_L$, the homotopy $t\mapsto t+s\epsilon(q)\chi(t/\epsilon(q))/4$ ($0\le s\le1$) pushes every boundary point into $A_L^\circ$, fixes points outside the collar, and stays below $\epsilon(q)$; it stays in $X$ by the distance bound. It maps $A_L^\circ$ to itself, so the inclusion $A_L^\circ\hookrightarrow A_L$ is a homotopy equivalence. [F1, F2, given, construct]

1.3 Every finite point of $B_L$ has height at most $-1$. For $0\leq t<1$, move $(x,y,z)$ vertically to $(x,y,z-t/(1-t))$, and send $\infty$ to itself; at $t=1$ send every point to $\infty$. This is continuous in the one-point compactification, avoids $L_D$ because the link lies in $z\geq-1$, and contracts $B_L$ to $\infty$. [given, construct]

1.4 Choose disjoint small coordinate disks about the punctures on $\Sigma$. Within each punctured disk, the radial homotopy $r\mapsto(1-t)r+t\max\{r,\varepsilon\}$ pushes its punctured cap onto its boundary collar, fixing points outside the cap. Thus $\Sigma_L$ retracts to the compact sphere with $n$ open disks removed. Base the $n$ boundary circles along any specified accesses. Filling all $n$ boundary circles by disks gives $S^2$, which is simply connected: two slightly enlarged hemispheres are contractible with path-connected annular overlap, so [F3] gives the trivial group. Filling all but the $j$th boundary circle gives a disk, also simply connected. The radial retraction extends by the identity on the newly attached disks. Consequently attaching disks to the original noncompact punctured sphere gives spaces homotopy equivalent to these filled compact models, rather than literally the compact models. The van Kampen quotient in [F3] proves that all the based puncture circles normally generate, and that the $n-1$ circles other than $c_j$ still normally generate. For $n=1$ the omitted list is empty and $\Sigma_L\cong\mathbb R^2$ is contractible, as required. Independent access changes conjugate each relator, leaving its normal closure unchanged. [F1, F3, given, construct, algebra]

2.1 The lower piece is contractible by step 1.3. For the upper piece, a finite point outside the link has a small relative ball disjoint from the link. Move within that ball to a point whose plane projection misses the whole projected diagram; such projections are dense because a finite regular immersed compact curve has locally finitely many one-dimensional graph branches and empty interior. The vertical path from that point to height $1$ now avoids the link. The height-$1$ plane is connected. The point at infinity first moves into this finite upper piece along the explicit positive collar in step 1.2. Thus the upper piece too is path connected. This uses explicit paths rather than a general-position theorem for arbitrary arcs. The retractions of step 1.2 now show that $U,V,U\cap V$ are path connected as well: any point is joined to its retraction image by that retraction path. [F1, step 1.1, step 1.2, step 1.3, construct, algebra]

3.1 In a product tube $S^1\times D^2$, the punctured tube $S^1\times(D^2\setminus\{0\})$ retracts radially onto $S^1\times\partial D^2$. Applying this on each of the finitely many disjoint tubes and fixing the exterior gives a deformation retraction of $X$ onto the chosen exterior. Thus the induced map on fundamental groups is an isomorphism. [F2, given, construct] ∎

## Remarks

The proof uses the height realization as explicit input. For any finite diagram with a component having no underpass, inserting a small type-I curl creates one underpass on that component and is realized by an isotopy supported in a disk; the link-presentation theorem applies to the resulting diagram.

---
id: lem-based-loop-spaces-of-cw-complexes-have-cw-homotopy-type
kind: lemma
title: Based loop spaces of CW complexes have CW homotopy type
status: draft
origin: session
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-cw-complex-with-closure-finiteness-and-weak-topology
  - def-geometric-realization-of-an-abstract-simplicial-complex
  - lem-finite-relative-homotopy-lifting-across-a-weak-equivalence
  - prop-relative-cw-inclusions-are-cofibrations
  - lem-interval-exponential-law-and-quotient-homotopies
  - thm-cw-approximation-of-an-arbitrary-space
  - thm-whitehead-theorem
  - lem-compact-cw-images-have-finite-cell-support-without-choice
  - lem-finite-simplicial-approximation-for-homology-comparison
  - lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts
  - thm-stone-metric-spaces-are-paracompact
  - thm-subordinate-partitions-of-unity-exist
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Milnor, On spaces having the homotopy type of a CW-complex
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/milnorcw.pdf
      locator: Theorem 2, Theorem 3, Corollary 3 and Lemmas 2–4, printed pp.273–280
    - title: Allen Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Theorem 2C.5, simplicial replacement construction
---

## Statement

Assume AC. If $X$ is a nonempty connected CW complex and $x\in X$ is any
basepoint, the based loop space $\Omega(X,x)$ has the homotopy type of a CW
complex. This holds for the ordinary compact-open loop topology and for its
compactly generated refinement. There is no restriction on the cardinality,
dimension or local finiteness of $X$, and the basepoint need not be a vertex.

## Facts & Assumptions

**Given:** AC, a nonempty connected CW complex $X$ and $x\in X$.

[A1] [[def-axiom-of-choice]] is assumed. It implies the form of DC in
[[def-dependent-choice]]: select one successor for each element of the set
carrying the entire relation and iterate that selected function from the
prescribed starting element. Thus both choice hypotheses of [F7] below hold.

[F1] [[lem-finite-relative-homotopy-lifting-across-a-weak-equivalence]] applies
to weak equivalences of arbitrary spaces and finite relative source CW pairs.
Its output extends the prescribed source map and replaces a prescribed
boundary homotopy $T(l,t)$ by $T(l,\min(4t,1))$.

[F2] [[prop-relative-cw-inclusions-are-cofibrations]] gives HEP with arbitrary
target. [[lem-interval-exponential-law-and-quotient-homotopies]] gives the
ordinary compact-open interval exponential law, its compactly generated
version, and preservation of arbitrary quotient maps under product with $I$.
A CW characteristic-disk quotient therefore still tests continuity after
product with $I$.

[F3] [[thm-cw-approximation-of-an-arbitrary-space]] provides a weak equivalence
from a CW complex to any space. [[thm-whitehead-theorem]] makes a weak
equivalence between CW complexes a homotopy equivalence under AC.

[F4] [[lem-compact-cw-images-have-finite-cell-support-without-choice]] puts
each compact-source image in a CW complex inside a finite subcomplex.
[[lem-finite-simplicial-approximation-for-homology-comparison]] approximates
maps of finite simplicial pairs by simplicial maps after finite subdivision.

[F5] [[lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts]]
makes an inclusion of finite CW complexes that is a homotopy equivalence a
strong deformation retract inclusion. Its adjunction argument uses the
explicit disk-prism retractions fixing the side and one end.

[F6] A simplicial realization with its weak topology is CW: its open simplices
are cells, simplex closures have finitely many faces, and the closed-simplex
weak topology is precisely the CW topology. Coordinate functions separate
points, so the space is Hausdorff. These are the conventions in
[[def-geometric-realization-of-an-abstract-simplicial-complex]] and
[[def-cw-complex-with-closure-finiteness-and-weak-topology]].

[F7] [[thm-stone-metric-spaces-are-paracompact]] supplies a locally finite open
refinement of any metric open cover under AC.
[[thm-subordinate-partitions-of-unity-exist]] supplies a subordinate locally
finite partition of unity on a paracompact Hausdorff space under AC and DC.

## Proof

**Proof technique:** Construct a metric simplicial homotopy model, put an
explicit local convexity operation on its loop space, construct a CW
homotopy domination by a nerve, and turn that domination into CW homotopy
type by relative homotopy lifting. All auxiliary assertions are proved below.

1.1 We first extend [F1] to arbitrary relative CW source pairs under AC,
retaining the exact prescribed boundary homotopy. For one relative disk
$(D^d,S^{d-1})$, [F1] supplies $w$ and $J$ with boundary
$T(z,\lambda(t))$, where $\lambda(t)=\min(4t,1)$. On
$B=(S^{d-1}\times I)\cup(D^d\times\{0,1\})\subset D^d\times I$
change this boundary homotopy through
$T(z,(1-s)\lambda(t)+st)$, leaving the two end-disk maps unchanged.
These prescriptions agree at their intersections. The finite CW inclusion
$B\subset D^d\times I$ has HEP by [F2]; applying it with initial map $J$
produces, at $s=1$, a homotopy with the same end maps and boundary exactly
$T(z,t)$. For a zero-cell [F1] simply chooses a source point and a path from
its image to the prescribed target point, with the direction reversed if
necessary. Now extend a given source map and target homotopy over all cells
of a relative CW pair, in increasing dimension, using this corrected disk
assertion on each cell. AC selects all disk witnesses at each stage; recursion
on dimensions gives maps and homotopies agreeing literally on the preceding
stage and on the prescribed subcomplex. The CW quotient test and its product
with $I$ in [F2] prove continuity of their unions. Thus for any weak
equivalence $f:P\to Y$ and any CW pair $(K,L)$, a source map on $L$, a target
map on $K$ and an exact boundary homotopy extend to a source map on $K$ and a
target homotopy with exactly that boundary homotopy. [A1, F1, F2]

1.2 Consequently postcomposition by a weak equivalence $f:P\to Y$ induces a
bijection $[K,P]\to[K,Y]$ on unbased homotopy classes for every CW complex
$K$. Surjectivity is step 1.1 with empty fixed subcomplex. For injectivity,
given a homotopy $K\times I\to Y$ between $fa_0$ and $fa_1$, use step 1.1
on the CW pair $(K\times I,K\times\{0,1\})$, the prescribed end maps
$a_0,a_1$ and the constant end homotopies. The resulting map
$K\times I\to P$ is a homotopy between those end maps. The interval has its
finite CW structure, so the cylinder pair is a CW pair; equivalently its
cell prisms attach by the characteristic-disk quotient in [F2]. [F2, step 1.1]

1.3 Any space $Z$ homotopy dominated by a CW complex has CW homotopy type.
Indeed, write the domination as $p:Z\to N$, $q:N\to Z$ with
$qp\simeq\operatorname{id}_Z$ and $N$ CW. Choose a CW approximation
$c:C\to Z$ by [F3]. By step 1.2 lift $q$ up to homotopy to $q':N\to C$,
so $cq'\simeq q$. Put $r=q'p:Z\to C$. Then
$cr\simeq qp\simeq\operatorname{id}_Z$. Further,
$c(r c)\simeq c$; injectivity in step 1.2, now with CW source $C$, gives
$r c\simeq\operatorname{id}_C$. These are both inverse identities, so
$c$ is a homotopy equivalence. This argument places no separation or CW
hypothesis on the dominated target $Z$. [F3, step 1.2]

2.1 We next construct a simplicial homotopy model of an arbitrary CW complex,
with no finiteness hypothesis. Here is the finite building block, with its
target triangulation retained. For a simplicial map $f:P\to Q$ of finite
complexes, construct a simplicial complex $M(f)$ inductively over source
simplices. Start with the target $Q$. For each source simplex $\sigma$ with
image face $\tau=f(\sigma)$, the already constructed boundary part
$M(f|_{\partial\sigma}:\partial\sigma\to\tau)$ includes $\tau$; adjoin
the cone on that boundary part with a fresh apex $b_\sigma$. Use the same
previously constructed pieces on common faces. The cones on the subdivided
source boundaries form a copy of $\operatorname{sd}P$, disjoint from $Q$.
Each boundary part strongly deformation retracts onto $\tau$, by induction,
so both it and its cone are contractible. Its inclusion in its cone is a
finite CW homotopy equivalence, and [F5] gives a strong deformation retraction
of the cone onto its base. Apply these retractions in decreasing source
simplex dimension, simultaneously on pieces of the same dimension; each fixes
the shared boundary pieces. The result strongly deformation retracts
$M(f)$ onto $Q$. Each source simplex stays in its image face under the
endpoint retraction $r$, so $r|_{\operatorname{sd}P}$ is homotopic to
$f$ there by the straight-line homotopy in that face. Use finite HEP [F2]
on the disjoint subcomplexes $Q$ and $\operatorname{sd}P$ to extend this
endpoint adjustment over $M(f)$, keeping $Q$ fixed. Concatenating with the
first retraction gives a strong deformation from
$\operatorname{id}_{M(f)}$ to a retraction whose restriction to the source
is exactly $f$. In particular the source inclusion is homotopic in $M(f)$
to the map $f$ into $Q$. Finally $M(f)\cup_{\operatorname{sd}P}C(\operatorname{sd}P)$
is simplicial. Fresh apex and source vertices and the common-face
construction make every intersection an actual subcomplex. [F2, F5, F6]

2.2 Starting with $K_0=X^0$ and a common space $Z_0=X^0$, construct simplicial
complexes $K_d$ and common spaces $Z_d$ containing both $X^d$ and $|K_d|$,
with strong deformation retractions onto each, whose endpoint retractions
restrict to the preceding endpoint retractions on $Z_{d-1}$. Suppose these
data are available through $d-1$. For every $d$-cell of $X$, compose its
attaching map $a_e:S^{d-1}\to X^{d-1}\subset Z_{d-1}$ with the endpoint
retraction to $K_{d-1}$. Its compact image lies in a finite subcomplex by
[F4]. Give the sphere a finite triangulation and approximate this map by a
simplicial $f_e:P_e\to Q_e\subset K_{d-1}$ after a finite subdivision,
using [F4]. AC selects this finite data for all cells. Attach the finite
complexes $M(f_e)$ from step 2.1 to $Z_{d-1}$ along their targets $Q_e$;
call the resulting space $W$. Their retractions onto their targets glue to a
strong deformation retraction $W\to Z_{d-1}$ fixing $Z_{d-1}$, because their
interiors and source copies are disjoint and each homotopy fixes its target.
The old retraction homotopy, the simplicial approximation homotopy and the
source homotopy in step 2.1 concatenate to a homotopy in $W$ from $a_e$ to
the new source-sphere inclusion $j_e$. [A1, F2, F4, step 2.1]

2.3 Attach one $D^d\times I$ to $W$ along each of these side homotopies
$S^{d-1}\times I\to W$, retaining its bottom and top disks, and call the
result $Z_d$. The radial retraction of the disk prism onto its side and
bottom, respectively side and top, fixes that subset throughout and descends
through this attachment. Explicitly project from $(0,-1)$ to the side and
top of $D^d\times[0,1]$ and interpolate linearly; reflect the interval for
the other end. The resulting retractions are continuous by the quotient
product assertion [F2], also for an arbitrary disjoint family of prisms.
On the bottom end, first retract the $M(f_e)$ pieces onto their targets,
then use the old strong retraction $Z_{d-1}\to X^{d-1}$, extending both
homotopies by the identity on the new bottom disks; their attaching
boundaries lie in the fixed old $X^{d-1}$. This gives a strong retraction
onto $X^d$. On the top end extend the old strong retraction
$Z_{d-1}\to K_{d-1}$ by the identity on the $M(f_e)$ pieces and top disks;
it fixes each attaching target $Q_e\subset K_{d-1}$. This gives a strong
retraction onto the simplicial complex
$K_d=K_{d-1}\cup_e(M(f_e)\cup C(\operatorname{sd}P_e))$.
These endpoint retractions restrict on $Z_{d-1}$ to their old endpoints,
as required. The common spaces $Z_d$ need not themselves be CW: only their
explicit quotient homotopies, and the CW structures on the two retracts, are
used. [F2, F6, step 2.1, step 2.2]

2.4 Each new finite piece in $K_d$ has dimension at most $d$: in step 2.1 the
piece over a source $k$-simplex is a cone on a complex of dimension at most
$k$, since its image face has dimension at most $k$, and $k\le d-1$.
Thus $K=\bigcup_d K_d$ is a simplicial complex with $K_d$ a subcomplex,
using the weak realization topology. Restrict the retraction to $X^d$ in
step 2.3 to $K_d$ to obtain compatible maps $r_d:|K_d|\to X^d$.
They are homotopy equivalences, as both inclusions into $Z_d$ have strong
retractions. Their union $r:|K|\to X$ is continuous by the weak simplex
topology. It is a weak equivalence: any sphere, path or disk map into either
CW complex has finite cell support by [F4] and hence lies in a finite stage;
any nullhomotopy also has finite support and lies in some larger stage.
Surjectivity and injectivity at every source basepoint therefore follow from
the homotopy equivalence $r_d$ at a common sufficiently large stage. The same
argument with points and paths gives component bijectivity. By [F3], $r$ is
a homotopy equivalence. This proves the simplicial-model assertion for
arbitrary sets of cells and unbounded dimension. [F3, F4, F6, step 2.3]

3.1 Give the same simplicial realization $K$ the metric
$d(a,b)=\sum_v|a_v-b_v|$ on its finite barycentric coordinate vectors;
write it as $K_s$, and write $K_w$ for its weak realization. The identity
$i:K_w\to K_s$ is continuous simplexwise. Put
$m(a)=\max_v a_v$ and
$w_v(a)=\max(a_v-m(a)/2,0)$, and define
$p(a)_v=w_v(a)/(\sum_u w_u(a))$.
The denominator is positive since a maximal coordinate is retained.
The functions $m,w_v$ are continuous in the metric (the maximum is
1-Lipschitz), and their nonzero sets form a locally finite family: at a point
$a$ its finite support $S$ has $m(a)>0$, and in a sufficiently small metric
neighborhood every coordinate outside $S$ is smaller than half the nearby
maximum. Thus $p:K_s\to K_w$ is continuous: locally it lands in the finite
simplex on a subset of $S$ and has continuous coordinates. Its support is
contained in the support of $a$. The straight-line paths from $a$ to $p(a)$
therefore stay in that simplex. They give $ip\simeq\operatorname{id}_{K_s}$
by the metric formulas, and $pi\simeq\operatorname{id}_{K_w}$ by the weak
simplex product test [F2]. Both maps and homotopies fix every vertex. Hence
$K_s$ is a metric simplicial homotopy model for $X$. [F2, F6, step 2.4]

3.2 On $K_s$ let $V_v=\{a:a_v>0\}$ be the open vertex stars and
$U=\bigcup_v V_v\times V_v$. For $(a,b)\in U$ put
$c(a,b)_v=\min(a_v,b_v)/(\sum_u\min(a_u,b_u))$.
The denominator is positive. Coordinatewise minimum is Lipschitz in the
$\ell^1$ norm, so $c$ is continuous on $U$; its support lies in the
intersection of the two supports and hence is a face of both simplices.
Define $\Lambda(a,b,t)$ by the line segment from $a$ to $c(a,b)$ during
the first half-interval and from $c(a,b)$ to $b$ during the second half.
This is continuous, starts at $a$, ends at $b$, and satisfies
$\Lambda(a,a,t)=a$. Moreover if $a,b\in V_v$, then $c(a,b)_v>0$, so the
entire path stays in $V_v$. We call such sets convex for this operation:
$V_v\times V_v\subset U$ and
$\Lambda(V_v\times V_v\times I)\subset V_v$.
No linear convexity across different simplices is being assumed. [step 3.1]

3.3 Fix a vertex $b$ of $K$ and let $Z=\Omega(K_s,b)$ with the ordinary
compact-open topology. This topology is the uniform metric topology, for the
bounded target metric of step 3.1: a uniform ball contains a finite
intersection of compact-open neighborhoods, by a finite subdivision of the
compact interval and continuity of the given loop; conversely each
compact-open neighborhood contains a sufficiently small uniform ball by a
finite subcover of its compact test set. Put
$U_Z=\{(\alpha,\beta):(\alpha(t),\beta(t))\in U\text{ for every }t\in I\}$.
It is open: the adjoint evaluation map is continuous by [F2], and a tube
about the compact parameter $I$ gives the required neighborhood of any such
pair. Define
$\Lambda_Z(\alpha,\beta,s)(t)=\Lambda(\alpha(t),\beta(t),s)$.
The interval exponential law [F2] proves continuity. The resulting path is
based since $\Lambda(b,b,s)=b$, and it fixes equal loops. Every loop
$\alpha$ has a finite subdivision into closed intervals $J_1,\ldots,J_k$
with $\alpha(J_i)\subset V_{v_i}$: pull the stars back to an open cover
of $I$, take a finite subcover and a sufficiently fine subdivision using the
usual positive Lebesgue number for a finite interval cover (otherwise a
sequence of uncovered shrinking intervals has a convergent subsequence and
contradicts openness at its limit). The open neighborhood
$\{\beta:\beta(J_i)\subset V_{v_i}\text{ for all }i\}$ is convex for
$\Lambda_Z$, by the corresponding star property in step 3.2. Thus the
metric space $Z$ has an open cover by convex sets for a single continuous
operation on a neighborhood of its diagonal. [F2, step 3.2]

4.1 We prove directly that every metric space $Z$ with this structure is CW
dominated. Let $\mathcal V$ be its cover by convex open sets and use any
bounded compatible metric $d$. Define the positive 1-Lipschitz function
$\rho(z)=\sup_{V\in\mathcal V}\min(1,d(z,Z\setminus V))$,
where the contribution for $V=Z$ is defined to be $1$.
The cover $\mathcal B=\{B(z,\rho(z)/8):z\in Z\}$ has the property that
the union of its members containing any fixed $a$ lies in a convex set:
if $a\in B(z,\rho(z)/8)$, the Lipschitz inequality gives
$\rho(z)<8\rho(a)/7$, so this ball lies in
$B(a,2\rho(a)/7)$. Some $V\in\mathcal V$ has
$d(a,Z\setminus V)>\rho(a)/2$ (or is $Z$), by the definition of the
supremum, and contains that larger ball. Take a locally finite open refinement
$\mathcal W$ of $\mathcal B$ by [F7]. For every $a$, the union of all
$W\in\mathcal W$ containing $a$ still lies in one such convex $V$.
Discard empty members. This supplies the precise refinement property needed
below without invoking an unproved star-refinement theorem. [A1, F7]

4.2 Let $N$ be the nerve of $\mathcal W$, with its weak simplicial topology.
Choose by [F7] a locally finite subordinate partition of unity
$(p_W)_{W\in\mathcal W}$ on $Z$. If an initial partition is indexed by a
refinement, group the functions according to their assigned $W$; local
finiteness makes each grouped sum continuous and the grouped cozero family
locally finite. The positive-coordinate members at $a$ all contain $a$, so
$(p_W(a))_W$ defines a point $p(a)\in |N|$. Locally only finitely many
coordinates occur, proving continuity to the weak realization. Select
$z_W\in W$ for each $W$ and well-order the vertices, using AC. Define
$q:|N|\to Z$ recursively over simplices: on a vertex put $q(W)=z_W$;
if the ordered simplex has first vertex $W_0$ and opposite face $F$, put
$q((1-t)W_0+t y)=\Lambda_Z(z_{W_0},q(y),t)$ for $y\in F$.
For a simplex choose just one point $a$ in its nonempty intersection.
Every representative $z_W$ of its vertices lies in the union of the cover
members containing $a$, hence in a convex $V$ from step 4.1. Induction
therefore shows all expressions are defined and all face images stay in
$V$. The formula agrees on faces by the vertex ordering. At the first vertex
continuity follows from continuity of $\Lambda_Z$ on the compact opposite
face times the interval and its value independent of $y$ at $t=0$; thus the
cone formula descends continuously. Continuity over all of $|N|$ follows
from its weak simplex topology. [A1, F6, F7, step 4.1]

4.3 For each $a\in Z$, the simplex supporting $p(a)$ uses only $W$ that
contain $a$. Choose the convex $V$ from step 4.1 for that point. Its
representatives and $a$ lie in $V$; the recursive formula in step 4.2
therefore gives $q p(a)\in V$. Hence $(a,q p(a))$ lies in the domain of
$\Lambda_Z$, and $H(a,t)=\Lambda_Z(a,q p(a),t)$ is a continuous homotopy
from $\operatorname{id}_Z$ to $qp$. The single continuous operation, rather
than the pointwise choice of $V$, defines this homotopy; no continuous choice
of cover members is needed. Thus $Z$ is homotopy dominated by the CW complex
$|N|$. Step 1.3 makes it homotopy equivalent to a CW complex. Applying this
to step 3.3 proves CW homotopy type for $\Omega(K_s,b)$. [step 1.3, step 3.3, step 4.1, step 4.2]

5.1 Finally based loop homotopy type is preserved by an unbased homotopy
equivalence between connected spaces, without any cofibration hypothesis
on their basepoints. Here are the details needed for the possibly
nonvertex basepoint $x$. Given $f:X\to Y$, inverse $g$, homotopies
$H:gf\simeq\operatorname{id}_X$ and
$T:fg\simeq\operatorname{id}_Y$, chosen basepoints $x,y$, and a path
$a:y\to f(x)$, define $L(\gamma)=a*(f\gamma)*a^{-1}$. Put
$b=H_x^{-1}*(ga)^{-1}:x\to g(y)$ and
$G(\delta)=b*(g\delta)*b^{-1}$. Use fixed lengths for finite path
concatenations; reparametrizing between different parenthesizations gives
continuous homotopies. The square $H(\gamma(t),s)$ shows that
$H_x^{-1}*(gf\gamma)*H_x$ is homotopic through loops to $\gamma$;
insert or delete the backtracking paths $ga*(ga)^{-1}$ to conclude
$GL\simeq\operatorname{id}$. The square $T(\delta(t),s)$ similarly gives
$LG\simeq C_c$, where $C_c(\delta)=c*\delta*c^{-1}$ and
$c=a*(fb)*T_y$ is a fixed loop at $y$. Backtracking cancellation makes
$C_c$ a homotopy equivalence with inverse $C_{c^{-1}}$.
Consequently $R=G C_{c^{-1}}$ is a right homotopy inverse of $L$, while $G$
is a left homotopy inverse; the identities
$G\simeq G L R\simeq R$ show that either is a two-sided homotopy inverse.
For completeness, a path followed by its reverse contracts by replacing
its triangular traversal parameter $\min(2t,2-2t)$ by
$(1-s)\min(2t,2-2t)$; this depends continuously on the path. The displayed
squares, this formula and the interval exponential law [F2] make all these
homotopies continuous in the variable loop. [F2]

5.2 The connected CW complex $X$ is path connected: each characteristic
closed disk has path connected image, so the inverse image of any path
component under each characteristic map is either the entire disk or empty.
The weak topology therefore makes every path component open. Connectedness
forces there to be only one. Step 2.4 gives a bijection on path components,
so $K_w$ is also path connected; its surjective continuous identity map to
$K_s$ makes $K_s$ path connected. Steps 2.4 and 3.1 give a homotopy
equivalence between $X$ and $K_s$. Pick a vertex $b$ in the latter and a path
from $b$ to the image of $x$; path connectedness supplies the path.
Step 5.1 compares their based loop spaces by a homotopy equivalence.
Together with step 4.3 this proves the ordinary compact-open assertion.
For the compactly generated refinement, all displayed loop maps and
homotopies also lift to the refinements by [F2]. A metric space is already
compactly generated: if a subset is not closed, choose a sequence in it
converging to a point outside it, using balls of radii $1/n$ and AC; that
convergent sequence with its limit is a compact Hausdorff test space and
detects the failure of closedness. Thus the metric loop space in step 3.3
is unchanged by refinement. It follows that its CW-type conclusion also
holds for the refined loop space of $X$. No countability or local finiteness
of the original CW structure was used; AC was spent on cellwise lifts,
finite approximations for arbitrary families, Whitehead, metric refinement
and partition witnesses, and vertex representatives and ordering in the
nerve. [A1, F2, step 2.4, step 3.1, step 3.3, step 4.3, step 5.1] ∎

## Source notes

The source is Milnor's 1959 article, not an ANR theorem or a bare citation to
Schön. The proof of Milnor's Theorem 3 uses Lemmas 2–4. Steps 3.2–4.3 above
supply their single-space and based-loop specializations explicitly. Step 4.1
replaces Milnor's reference to full normality by a metric-radius construction
and the already authored Stone and partition-of-unity suppliers. Steps
1.1–1.3 replace the external domination theorem in Milnor's Theorem 2 by
relative lifting using existing local suppliers. Steps 2.1–2.4 supply the
arbitrary CW-to-simplicial replacement, rather than assuming a locally finite
or countable simplicial model.

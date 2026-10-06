# Batch 23 Step 8 repair outline: Novikov §§8.1–8.2

Run: `frontier-41-ha-dt-29`

Scope: a proof-repair outline for the existing Novikov pair only; this does not add a pair or change any controller, manifest, coverage, cross-batch, or readiness record.

## Current proof carrier and hypotheses

The only local batch-23 carrier for the conclusion of Novikov §§8.1–8.2 is
`lem-the-compact-leaf-produced-by-a-vanishing-cycle-bounds-a-reeb-component`.
Its current strategy cites Novikov Theorem 8.1, Corollary 8.1, and Theorem 8.2,
then summarizes their conclusions. Batch 23 contains no separate local items
for the unique-boundary/limit-set argument, the primitive-root reduction,
embedded disk exhaustion, or the topological conjugacy to the standard Reeb
foliation.

The intended input to §8 should be recorded precisely in the preceding
compact-leaf item. Let $M$ be a closed oriented smooth $3$-manifold and
$F$ a $C^2$, cooriented codimension-one foliation. Let $A_0$ be the
compact leaf obtained on the boundary of a component $C$ by the fully proved
§7 argument. Fix the side of $A_0$ containing $C$. The §7 output used
below must include its compact normal fence, a nonzero one-sided
limitwise-null class, the normal-flow disk family, and the separation and
nesting facts proved there. Novikov's source is *The Topology of Foliations*,
§7, printed pp. 20–25 for Lemmas 7.1–7.9 and Theorem 7.1. A source citation
alone does not discharge those inputs locally.

The notation must keep the two Novikov groups distinct. In §2, pp. 4–6,
$N_j(A_0)$ is the subgroup of one-sided nonlimit cycles and
$P_j(A_0)=\pi_1(A_0)/N_j(A_0)$ is the limit-cycle quotient. In §3, p. 10,
$\Pi^j_1(A_0)\subseteq N_j(A_0)$ is the subgroup of classes limitwise
homotopic to zero. §7 Theorem 7.1 assumes a nonzero element of
$\Pi^j_1(A_0)$, not merely a nonzero element of $P_j(A_0)$.
`def-limit-cycle-of-a-codimension-one-foliation` must not identify these two
objects.

## 1. Nearby leaves and their limit sets

Novikov's §8.1, printed pp. 26–27, has three distinct obligations: Lemma 8.1
constructs disk exhaustions and makes $A_0$ a limit leaf; Lemma 8.2 excludes
other limit leaves for every nearby leaf; Theorem 8.1 uses that exclusion to
show the adjacent foliation component has no second boundary leaf. These
claims should be split into local lemmas or into separately numbered parts of
the final proof.

### 1.1 Disk continuation across normal-flow times

**Proposed lemma.** Suppose the §7 data provide a regular normal-motion disk family

\[
G:D^2\times[0,\infty)\longrightarrow M,
\]

whose positive-time image lies on the chosen side of $A_0$, together with
the associated transverse fence curves, and two times $s_n<s_m$ for which
the disk at $s_n$ lies inside the disk at $s_m$ on their common leaf, as in
Novikov Lemma 7.8. Assume the translated boundary curves remain disjoint as
the pair is moved through the normal flow, and their transverse parameters
$\mu(y_0,s)$ tend to $0$ as $s\to\infty$. Then the inclusions persist for
all later paired times and, for each sufficiently close leaf $A_t$, one gets
an increasing sequence of compact disk images whose boundary curves tend to
the curve on $A_0$.

**Proof route.** Between two consecutive paired times, containment can change
only when the two boundary images first meet. Both boundaries lie in the
normal fence. Lemma 7.1's uniform separation of the compact boundary curve
from its positive normal displacements rules out that meeting. Repeating the
argument gives monotone containment. The parameter limit $\mu\to0$ makes
the boundary curves converge to the compact curve on $A_0$, so $A_0$ is
in the limit set of the relevant leaves.

**Remaining gap.** This proves nesting only after “disk” and “lies inside”
have a precise meaning. Novikov Lemma 7.2 initially supplies regular disk
maps, not necessarily embeddings. Either prove that the map-level nesting
argument is valid for these immersed images, or replace the disks by
embedded fillings with a compatibility proof. The source's sentence “we
thus obtain ... disks ... exhausting the leaf” does not itself show that
every point of a nearby leaf is covered. Do not claim embeddedness at this
stage: Novikov only makes that upgrade later, after the torus and primitive
class arguments in Theorem 8.2.

### 1.2 No additional limit leaves

**Proposed lemma.** Under the same §7 hypotheses, and assuming $A_0$ is
compact, every limit point of a fixed sufficiently near leaf $A_t$ that is
not in $A_t$ lies in $A_0$. Conversely every point of $A_0$ is a limit
point of $A_t$. Thus the leaf limit set is exactly $A_0$.

**Proof route.** Put a Riemannian metric on $A_0$ and choose a finite
triangulation. In each closed simplex $K_j$, fix a vertex $v_j$ and a
piecewise-smooth path from a base point $x_0$ to $v_j$. For each $x\in K_j$,
concatenate that fixed path, a path inside the simplex from $v_j$ to $x$,
the reverse path from $x$ to $v_j$, and the reverse of the fixed path from
$v_j$ to $x_0$. This gives a based loop
$\ell_{j,x}$ through $x$. The finitely many parameterized families
$x\mapsto\ell_{j,x}$ cover $A_0$ and have a common length bound. Subdivide
their parameter domains and paths using a finite cover by foliated charts so
each segment lies in one chart. Plaque transport then gives a uniform
transverse continuation estimate for these parameterized families. Combine
this with the fence-boundary separation from §7: a point outside the disk
image can be followed along the bounded path family until its transverse
coordinate is uniformly close to the $A_0$ side. If transport returns at a
closer fence parameter, iterate toward $A_0$; if it returns farther, use
the reversed path and iterate. The fence separation prevents a nonzero
transverse gap from persisting. Therefore any escaping sequence in $A_t$
has distance to $A_0$ tending to zero. The disk-boundary convergence from
1.1 supplies the converse inclusion.

**Remaining gap.** Novikov Lemma 8.2, p. 26, says that the transported path
returns either at the same point or at a closer/farther point and then calls
the rest “obvious.” A final proof must quantify the uniform chart subdivision,
show the iteration cannot stop at a positive transverse distance, and show
that it covers all points outside the disk image. These are the geometric
content of this lemma, not formal consequences of compactness alone.

### 1.3 Excluding a second boundary leaf

**Proposed bridge lemma.** If a connected saturated component $C$ has two
distinct boundary leaves $A_0$ and $B$, then some leaf $L\subset C$ has both
$A_0$ and $B$ in its limit set. Combined with 1.2, this rules out a second
boundary leaf.

**Proof obligation.** Novikov's final paragraph in Theorem 8.1, p. 27,
asserts the bridge leaf without constructing it. It is valid that leaf
closures are saturated: if a leaf $L'$ meets $\overline L$, a foliated box
at a meeting point shows a plaque of $L'$ lies in $\overline L$; saturation
then gives $L'\subseteq\overline L$, and hence
$\overline{L'}\subseteq\overline L$. But connectedness of $C$ alone does
not produce a finite chain of such closure relations. A proposed local route
is to take a compact path between the two boundary collars, cover it by
finitely many foliation boxes, and use first/last transition parameters plus
subsequence compactness to construct a leaf closure containing both ends.
The proof must show that the transition relation is closed at each box
boundary and that the resulting finite chain has a single common limit leaf;
the source does not supply those steps. Until this bridge lemma is proved,
uniqueness of the boundary leaf remains open.

Once 1.3 is proved, set $W=\overline C$. Since $M$ is compact, $W$ is
compact. Every point of $\partial W$ lies on a boundary leaf of $C$, so
the unique-boundary result gives $\partial W=A_0$. A finite foliation-chart
cover of the compact embedded leaf $A_0$ gives a product collar on the
chosen side; hence $W$ is a compact smooth $3$-manifold with boundary
$A_0$, rather than merely a compact subset. This collar conclusion and the
claim that all of $\overline C\setminus C$ is exactly $A_0$ should be
explicitly proved from the boundary-leaf definition used in the pair.

There is no published local foliation theorem that supplies 1.1–1.3. Local
Reeb stability is not a substitute: its usual compact-leaf/finite-holonomy
hypotheses do not hold at the leaf whose one-sided component is being
constructed. The compact-manifold collar theorem and local foliation charts
can support the last passage from a proved unique boundary leaf to $W$.

## 2. Vanishing Euler characteristic and the torus

The bundle argument avoids needing a separate Poincaré–Hopf theorem.

**Proposed lemma.** Let $W$ be a compact connected oriented smooth
$3$-manifold whose entire boundary is a compact connected leaf $A_0$ of a
cooriented codimension-one foliation $F$ defined on a neighborhood of
$W$. Then $\chi(A_0)=0$.

**Proof.** The oriented rank-two bundle $E=TF|_W\to W$ restricts to
$E|_{A_0}=TA_0$. Write $i:A_0\hookrightarrow W$. The relative
fundamental class has boundary $\partial[W,A_0]=[A_0]$, so
$i_*[A_0]=0\in H_2(W;\mathbb Z)$. Orient $A_0$ by this boundary
class for the pairing; reversing to the foliation orientation changes only
a sign. Naturality of the Thom-defined Euler
class gives
\[
\left\langle e(TA_0),[A_0]\right\rangle
=\left\langle i^*e(E),[A_0]\right\rangle
=\left\langle e(E),i_*[A_0]\right\rangle=0.
\]
After the regularity adapter below, choose a compatible metric and
Levi-Civita connection on $TA_0$. The rank-two Euler form is
$K\,dA/(2\pi)$, up to the global sign fixed by the chosen
orientation convention. The published Chern–Weil comparison identifies its
real cohomology class with the image of $e(TA_0)$, and global
Gauss–Bonnet gives
\[
\frac1{2\pi}\int_{A_0}K\,dA=\chi(A_0).
\]
Thus the real image of the integral Euler number is $\pm\chi(A_0)$. Since
\(\mathbb Z\hookrightarrow\mathbb R\) is injective and the Euler number is
zero, $\chi(A_0)=0$.

**Published suppliers.** The local library has
`def-euler-class-by-zero-section-pullback-of-the-thom-class`,
`thm-naturality-orientation-sign-and-whitney-product-for-euler-classes`,
`thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals`,
`thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces`, the
`def-relative-fundamental-class-and-boundary-orientation`,
`thm-long-exact-sequence-of-a-pair-in-singular-homology`,
`def-kronecker-evaluation-pairing`, and
`lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives`.
These support the displayed bundle naturality and boundary-pairing argument.
No single published item states the tangent Euler-number identity in this
exact form; the two-supplier Chern–Weil/Gauss–Bonnet derivation should be
included locally.

**Regularity adapter still needed.** A leaf of a $C^2$ foliation is a
$C^2$ surface, whereas the cited Chern–Weil and Gauss–Bonnet items are
stated for smooth surfaces. Before using them, prove a smoothing/approximation
lemma identifying the continuous oriented tangent bundle and its Euler class
with those of a compatible smooth structure on the compact surface; or prove
directly that the topological tangent Euler number equals $\chi$ by the
cellular obstruction definition. The current published list has no explicit
item for this $C^2$-to-smooth interface.

Because $M$ is oriented and $F$ cooriented, $TA_0$ is oriented. The
published
`cor-orientability-and-euler-characteristic-determine-a-compact-connected-surface`
(or `thm-classification-of-compact-connected-surfaces`) now applies to
$A_0$: a nonempty compact connected boundaryless orientable surface with
$\chi=0$ is $T^2$. The classification theorem discharges the torus
identification; the proof that its hypotheses hold belongs in this pair.

## 3. Primitive root and torsion-free inputs

Let $j\in\{1,2\}$ denote the side on which the §7 disk displacements are
limitwise null. By §7, choose a nonzero class
$\alpha\in\Pi^j_1(A_0)$. Use
`cor-fundamental-group-of-two-dimensional-torus` to identify
$\pi_1(A_0)\cong\mathbb Z^2$.
In additive vector notation write $\alpha=m\beta$, where $m\ge1$ and
$\beta=(p,q)$ is primitive, $\gcd(p,q)=1$; in fundamental-group notation
this is $\alpha=\beta^m$.

Two torsion-freeness facts are required and are not local batch-23 items:

1. **Holonomy image.** $P_j(A_0)=\pi_1(A_0)/N_j(A_0)$ is the image of the
   one-sided holonomy representation in orientation-preserving germs of
   one-variable local diffeomorphisms. A finite-order increasing germ is the
   identity: if $g^r=\mathrm{id}$ and $g(x)>x$ at any sufficiently small
   $x$, strict increase gives $x<g(x)<\cdots<g^r(x)=x$, impossible; the
   case $g(x)<x$ is the reverse chain. Hence $P_j(A_0)$ is torsion-free.
   Since $\alpha\in N_j(A_0)$, the image of $\beta^m$ in $P_j$ is
   trivial. Torsion-freeness implies $\beta\in N_j(A_0)$.

2. **Nearby leaf groups.** If $g_t$ is the fence displacement of \(\beta\),
   its $m$-fold concatenation is leafwise homotopic to the displacement
   $f_t$ of $\alpha$. Since each $f_t$ bounds a disk, $[g_t]^m=1$ in
   \(\pi_1(A_t)\). A local theorem that fundamental groups of connected
   orientable surfaces are torsion-free gives $[g_t]=1$, so \(\beta\) is
   itself limitwise null on side $j$ and can replace \(\alpha\) in the
   disk-family construction.

   A viable local proof of the surface-group fact is: put a compatible
   Riemann-surface structure on the oriented smooth surface $A_t$; its
   universal cover is one of $S^2,\mathbb C,\mathbb D$ by the published
   `cor-universal-cover-classification-riemann-surfaces`. The deck group acts
   freely and is isomorphic to $\pi_1(A_t)$. Every finite-order
   automorphism of each simply connected model has a fixed point (Möbius
   classification on $S^2$, the affine form on $\mathbb C$, and the
   elliptic classification of disk automorphisms). Freeness therefore
   excludes torsion. The current library supplies the universal-cover
   classification and deck-group identification, but it has no explicit
   adapter from an arbitrary oriented smooth surface to a Riemann surface and
   no single theorem on finite-order automorphisms of the three models.
   Either prove those short adapters locally or use a self-contained
   topological surface-group proof; do not cite “surface groups are
   torsion-free” without supplying it.

Represent $\beta=(p,q)$ by the slope loop
$\gamma_\beta(t)=(pt,qt)\pmod{\mathbb Z^2}$ on
$T^2=\mathbb R^2/\mathbb Z^2$. It is an immersion because
$(p,q)\ne(0,0)$. If two parameters have the same image, both
\(p(t-s)\) and \(q(t-s)\) are integers; Bézout coefficients for $(p,q)$
then imply $t-s\in\mathbb Z$. Thus the loop is an embedding. It generates a
direct infinite cyclic summand, not all of \(\mathbb Z^2\) in general. A
short embedded normal fence of this representative gives embedded boundary
curves. The homotopy transporting the original fence to this representative
must also transport its leafwise null disks; compact chart subdivision along
the homotopy supplies this comparison.

The published torus fundamental-group computation supports the integer
coordinates, but it does not prove the slope-embedding claim. Include the
two-line Bézout argument above in the local item.

## 4. Embedded fillings and exhaustion by planes

**Proposed surface lemma.** In a connected orientable smooth surface $S$,
every smoothly embedded nullhomotopic circle bounds a compact smoothly
embedded disk. If $S$ is noncompact, this is the unique relatively compact
disk side. On the sphere there are two disk sides; the §7 disk family must
specify which one is used. The published
`thm-brouwer-fixed-point-theorem-for-the-disk` supplies the fixed point used
in the innermost-translate descent below.

**Proof route and suppliers.** Lift the simple loop to a closed Jordan curve
in the universal cover. For a Riemann-surface realization, the published
`cor-universal-cover-classification-riemann-surfaces` reduces the cover to
the sphere, plane, or disk (the disk is homeomorphic to the plane).
`lem-jordan-schoenflies-extension-for-plane-curves` supplies a compact disk
for a Jordan curve in the plane; the sphere case follows by deleting a point
off the curve. To descend a disk, make the lift disk innermost among its deck
translates. Proper discontinuity leaves only finitely many translates meeting
the chosen compact disk; disjoint lifted boundary curves imply overlapping
Jordan disks are nested. Choose an inclusion-minimal one among these finitely
many translates. If a nonidentity deck map preserved that disk, its
restriction would be a self-homeomorphism of a closed disk and hence have a
fixed point by the Brouwer fixed-point theorem, contradicting the free deck
action. The disk therefore
projects injectively. Smooth the boundary collar in surface charts. This
standard innermost-translate lemma still needs a written proof in the pair;
the cited plane Schoenflies result alone does not prove its quotient step.

Apply the lemma to the primitive fence curves $f_t\subset A_t$. Choose the
filling disk $B_t\subset A_t$ on the side specified by the §7 disk maps; once
noncompactness is known, it is the unique relatively compact side. The finite normal-fence
chart cover and the §7 no-crossing/separation property make the boundaries
pairwise disjoint whenever they lie on the same leaf. The disk family from
§7 specifies which side is selected, so for repeated returns to one leaf the
chosen $B_t$'s are nested. A final proof must check this compatibility: it
cannot choose each disk independently and then infer nesting.

For every sufficiently near leaf $A_t$, take the resulting sequence
\[
B_1\subset\operatorname{int}B_2\subset\operatorname{int}B_3\subset\cdots,
\qquad \partial B_n=f_{t_n},\quad t_n\to0.
\]
Every limit of points on \(\partial B_n\) lies on $A_0$, because the
fence is a compact embedded annulus and its $t_n$-level curves converge to
its base curve. Set
$U=\bigcup_n\operatorname{int}B_n$. If $U\ne A_t$, choose
$x\in A_t\setminus U$ and a point $y\in\operatorname{int}B_1$. A path in
the connected leaf $A_t$ from $y$ to $x$ meets every $\partial B_n$, since
$B_n\subset U$ and $x\notin B_n$. Choose $z_n$ on that path and on
$\partial B_n$. Compactness of the path image gives a convergent subsequence
$z_{n_k}\to z\in A_t$. The fence curves $\partial B_{n_k}$ converge to the
base curve on $A_0$, so $z\in A_0$, contradicting that distinct leaves are
disjoint. Thus $U=A_t$.

An increasing exhaustion by closed disks, each in the interior of the next,
makes $A_t\cong\mathbb R^2$: choose a homeomorphism on the first disk and
extend it over each successive annulus using a collar of its two boundary
circles. The extensions can be chosen to match the preceding boundary map;
their union is a homeomorphism from the plane's nested round-disk exhaustion
onto $A_t$. The library's plane Jordan–Schönflies result supplies each
disk/collar step. The critical remaining obligation is to prove that the §7
normal-flow family really yields these nested embedded disks and that their
union covers the entire leaf, not merely a proper open subset.

## 5. From the disk sweep to the standard Reeb component

Novikov Theorem 8.2, printed pp. 27–28, says that the side component is a
solid torus and its foliation is homeomorphic to the standard Reeb foliation.
The source's last paragraph compresses both facts into “as an imbedding” and
“constructed in exactly the same way”; both need a local carrier.

**Proposed return-chart lemma.** Suppose a compact saturated region $W$ is
built from a fundamental block $D^2\times[0,1]$ with disk plaques and a
transverse annular return chart. Assume the only transverse gluing datum is
an increasing embedding of a half-interval into itself,
$h:[0,a]\to[0,a]$, with image $[0,h(a)]$ and
$h(0)=0$ and $0<h(t)<t$ for every $0<t\le a$ (or the reversed
inequality, handled by reversing the interval). Assume the swept blocks cover
the whole adjacent component and that the interior leaves are exactly the
plane exhaustions proved in Section 4. Then $W\cong D^2\times S^1$, its
boundary is $A_0$, and its foliation is topologically conjugate to the
standard Reeb foliation.

**Explicit conjugacy on the transversal.** Fix $a_0\in(0,a]$. The intervals
\([h^{n+1}(a_0),h^n(a_0)]\), $n\ge0$, cover $(0,a_0]$: the iterates
decrease to a fixed point of $h$, and the only fixed point is $0$. Choose
an increasing homeomorphism on the fundamental interval
\([h(a_0),a_0]\) to \([1/2,1]\), matching endpoints. Extend it to every
iterate by
\[
\psi(h^n(t))=2^{-n}\psi(t).
\]
The endpoint matching makes $\psi$ well-defined and continuous; since
$h^n(a_0)\to0$, it extends continuously by $\psi(0)=0$. It is a
strictly increasing homeomorphism satisfying
\(\psi\circ h(t)=\tfrac12\psi(t)\). Apply the same map on each transverse
return chart and extend along the disk plaques. The relation above ensures
the extensions agree on the glued faces. Continuity at the boundary torus
follows from $\psi(h^n(a_0))=2^{-n}\psi(a_0)\to0$; the inverse has the
same property. This supplies an explicit homeomorphism to the standard
Reeb return model and explains why different contraction rates do not
change its topological foliation type.

**Remaining gaps.** The current carrier does not establish the return-chart
hypotheses from Novikov's map \(\bar G_{m,n}\). It must prove: (i) the
quotient map from $D^2\times S^1$ is injective, not merely regular; (ii) its
image is the whole closure $W$, rather than a proper subregion; (iii) the
gluing has a globally defined monotone return map with a single fixed
boundary point and no interior fixed point; and (iv) every interior leaf is
the plane exhaustion of Section 4. If a fixed point occurred in the interior,
the associated closed leafwise loop on a plane has trivial holonomy germ,
so the return map is locally the identity there; one must use the disk
exhaustion and the §7 one-sided class to rule out such an interval and prove
the strict contraction hypothesis. The interval conjugacy above proves the
last step once those hypotheses are established; it does not prove them.

No currently published local foliation theorem supplies this global
classification. The in-run `thm-local-reeb-stability` is only finite-holonomy
stability of a compact leaf and does not imply a Reeb component or its
foliated homeomorphism type.

## Step-1 repair checklist

Before calling the Step-3 proof complete, the authored proof should contain
all of the following, with the indicated order respected:

1. A precise map-level §7 disk/fence input and the Lemma 8.1 nesting argument;
   resolve whether the maps are embedded before treating their images as
   planar regions.
2. The bounded-path transport estimate and the complete proof that the limit
   set of each nearby leaf is exactly $A_0$.
3. The finite-box closure-chain argument excluding a second boundary leaf,
   followed by the collar proof that $W=\overline C$ is a compact manifold
   with boundary exactly $A_0$.
4. The oriented plane-bundle Euler pairing over $W$, using the published
   naturality/Chern–Weil/Gauss–Bonnet suppliers, and the published compact
   surface classification to identify $A_0\cong T^2$.
5. Correct definitions for $(N_j,P_j,\Pi^j_1)$; proofs that $P_j$ and
   $\pi_1(A_t)$ are torsion-free; the primitive-root implication; and the
   explicit primitive slope embedding on $T^2$.
6. A local simple-null-loop filling lemma on leaves, its innermost deck
   translate descent, compatibility of the chosen disks, and the exhaustive
   nested embedded-disk argument proving each nearby leaf is a plane.
7. An injective global disk-sweep quotient onto all of $W$, the resulting
   transverse return model, proof of its strict one-sided contraction, and
   the fundamental-interval conjugacy to the standard Reeb foliation.

Published local suppliers can discharge only portions: surface classification
and $\pi_1(T^2)$, oriented Euler-class naturality, Chern–Weil comparison,
Gauss–Bonnet, universal covers of Riemann surfaces, and plane
Jordan–Schönflies. The foliation-specific continuation, uniqueness,
exhaustion, and return-model lemmas remain to be proved within this pair.

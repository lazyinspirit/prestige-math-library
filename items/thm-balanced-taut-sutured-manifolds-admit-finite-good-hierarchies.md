---
id: thm-balanced-taut-sutured-manifolds-admit-finite-good-hierarchies
kind: theorem
title: Balanced taut sutured manifolds admit finite good hierarchies
status: draft
origin: session
proof_strategy: direct
deps:
  - def-balanced-taut-sutured-manifold-and-product-region
  - lem-essential-proper-haken-cuts-have-finite-sequential-length
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Scharlemann Sutured manifolds and generalized Thurston norms sections0–4
      url: https://web.math.ucsb.edu/~mgscharl/papers/suturedman.pdf
    - title: Jaco Lectures on Three-Manifold Topology IV.7–IV.13
      url: https://www.maths.gla.ac.uk/~mpowell/Lectures-3-mfld-topology_Jaco.pdf
---

## Statement

Let $(M,\gamma)$ be a compact orientable finite PL balanced taut sutured three-manifold. There is a finite sequence of balanced taut sutured decompositions terminating in product balls. Each decomposing surface may be chosen open, with every boundary component meeting both signed boundary regions after positive boundary fingers; in each signed boundary component its closed intersection curves are parallel coherently oriented boundary-coherent curves. Product disk cuts may be interspersed. No closed cut is required.

## Facts & Assumptions

[F1] Balanced, taut and product use the conventions of [[def-balanced-taut-sutured-manifold-and-product-region]].

[F2] The finite sequential length and its strict decrease for essential incompressible boundary-incompressible nondisk cuts are supplied by [[lem-essential-proper-haken-cuts-have-finite-sequential-length]].

## Proof

**Given:** A balanced taut finite PL sutured manifold in the convention F1, and the precise sequential rank supplied by F2. All surgeries and choices in the proof concern finite complexes and nonnegative integer minima.

### Norm construction needed for the taut cut

1.1 For a properly embedded oriented surface $T$ and a finite collection $\delta$ of auxiliary properly embedded arcs, define $$x_\delta(T)=\sum_{T_i}\max\{0,|T_i\cap\delta|-\chi(T_i)\}.$$ [given, construct]

1.2 The empty-arc version is the ordinary Thurston complexity. For a relative homology class $a$, minimize this nonnegative integer over representatives. The minimum exists whenever the class has a representative. Compression and the removal of intersection pairs of opposite sign never increase the value: a compression raises Euler characteristic by two, and tubing opposite intersections together removes two marked intersections at exactly that Euler cost. Thus a minimum can be chosen incompressible and with coherent intersections on each auxiliary arc. [step 1.1, construct]

1.3 The homogeneity needed here has a direct geometric proof. If an embedded oriented $T$ represents $na$, color the components of its complement by $\mathbb Z/n$, assigning a color by intersection number of a path with $T$. This is well-defined because every closed test loop has intersection divisible by $n$. For relative homology use also paths with endpoints on the complementary boundary; their colors are normalized to zero there, since the relative dual class of $T$ is divisible by $n$. Crossing a positive normal increases the color by one. Each connected component of $T$ has two fixed adjacent colors, so partition the whole components into $T_0,\ldots,T_{n-1}$ according to the transition $j\to j+1$. [step 1.2, construct]

1.4 Every closed or relative test path crosses each such transition with the same algebraic total: its sequence of colors is a walk on the cyclic color graph, and the difference of two transition counts is its net occupancy change at a vertex, which is zero. Its total intersection with $T$ is consequently $n$ times its intersection with each $T_j$. Relative Poincaré duality gives $[T_j]=a$. The norm adds over this partition of whole components, so $x_\delta(T)\ge n x_\delta(a)$. Conversely $n$ parallel minimizing representatives give the opposite inequality. Hence $x_\delta(na)=n x_\delta(a)$. [step 1.3, construct]

1.5 For subadditivity, put two minimizing representatives in general position. Eliminate inessential intersection circles and arcs by innermost/outermost compression and boundary surgery. The remaining intersections are essential in both surfaces. Their oriented double-curve sum preserves total Euler characteristic and marked intersection count. None of its zero-complexity components introduces a negative correction to the inequality. Thus $x_\delta(a+b)\le x_\delta(a)+x_\delta(b)$. Integer homogeneity and this inequality give convexity on rational classes; a bound on a homology basis gives the continuous extension if desired. [step 1.4, construct]

1.6 For fixed integral classes $a,b$, the integers $$d_n=x_\delta(a+(n+1)b)-x_\delta(a+nb)$$ [step 1.5, construct]

1.7 are nondecreasing by convexity and at most $x_\delta(b)$ by subadditivity. They are therefore eventually constant. Homogeneity shows that their eventual value is $x_\delta(b)$, by dividing $x_\delta(a+nb)$ by $n$ and using the two triangle bounds with $\pm a$. Consequently for some $m$, $$x_\delta(a+(m+k)b)=x_\delta(a+mb)+k x_\delta(b),\qquad k\ge0.$$ [step 1.6, construct]

1.8 This proves the eventual linearity used to choose the cut; it is not imported as an unexplained property of a named norm. [step 1.7, construct]

### Constructing a taut decomposing surface with prescribed boundary

1.9 Let $(M,\gamma)$ be taut, and let $y\ne0$ in $H_2(M,\partial M)$. Choose an oriented boundary representative $C$ of $\partial y$, in the complement of small collars of the boundary sutures. Let $R$ be the signed boundary surfaces, pushed slightly into $M$. Put $N=\nu(\partial R\cup C)$ in $\partial M$ and choose disjoint arcs $\delta$ in $N$ whose complement retracts to the individual boundary circles of $R$ and the closed components of $C$. Push those arcs slightly into $M$. [step 1.8, construct]

1.10 This choice has two concrete consequences. A representative of $[R]$ minimizing the marked norm can be made disjoint from $\delta$ and then has boundary exactly $\partial R$, by adding boundary annuli. Tautness of $R$ therefore shows that $R$ also minimizes the marked norm in $H_2(M,N)$. Also $R$ is incompressible relative to $N\setminus\delta$: an essential boundary compression would lower the marked norm except for an annulus; that annulus would connect two boundary circles in a single component of $N\setminus\delta$, excluded by construction. A disk exception cannot have an essential compressing arc. [step 1.9, construct]

1.11 Lift $y$ to $H_2(M,N)$ and choose $z=y+m[R]$ in the eventual linear range just proved. Choose a marked-norm-minimizing representative $S$. Oppositely oriented intersection circles in $R$ can be removed by cutting and regluing along their annulus. Innermost-circle and outermost-arc surgeries make all intersections with $R$ essential in both surfaces. Compress further away from $R$ to make $S$ incompressible; incompressibility of $R$ and irreducibility of $M$ allow those compressions without reintroducing inessential intersections. Its boundary outside $\nu\partial R$ is exactly $C$. [step 1.10, construct]

1.12 For any subcollection $R'$ of parallel copies of the components of $R$, choose a large parallel multiple $kR$ containing it. The inequalities $$x_\delta(z)+k x_\delta(R) =x_\delta(z+kR) \le x_\delta(z+R')+x_\delta(kR-R') \le x_\delta(z)+x_\delta(R')+x_\delta(kR-R')$$ [step 1.11, construct]

1.13 have equal endpoints, since subcollections of a taut surface minimize their classes. Thus equality holds throughout. Essential double-curve summing gives an actual minimizing representative $S\mathbin{\#}R'$. [step 1.12, construct]

1.14 Its incompressibility needs the zero-norm case as well as the numerical equality. A compressible component of a minimizing sum must have zero norm. A disk or punctured sphere then compresses a piece of $S$ or $R'$, impossible. A compressible annulus contradicts essentiality of its boundary intersection circles. A compressible torus bounds a solid torus by irreducibility. An intersecting annular piece of $R'$ inside that solid torus has two oppositely oriented boundary circles in $R'$, exactly the antiparallel pair already eliminated. A torus lying wholly in one input is excluded by its incompressibility. These exhaust the zero-norm possibilities. Hence the sums are taut, not merely numerically minimizing. [step 1.13, construct]

1.15 Removing the auxiliary arcs does not destroy tautness: a candidate with lower unmarked norm can be made to have the same prescribed boundary, so its extra marked intersections are the same boundary contribution; compressing it cannot increase that contribution. It would then contradict the marked minimum. This is the only use of those arcs, which are not part of the eventual sutured manifold. [step 1.14, construct]

1.16 Cap opposite boundary curves in the annular suture collars by annuli, and discard closed separating components. Because $R$ is boundary-parallel, its class vanishes in $H_2(M,\partial M)$; thus the resulting surface still represents $y$. The new signed boundaries of the cut manifold are the actual oriented sums $R_+\mathbin{\#}S$ and $R_-\mathbin{\#}S$. They are taut by the construction. A reducing sphere in the cut manifold bounds a ball in $M$; incompressibility removes its intersections with $S$, so its ball stays in the cut manifold. This proves tautness after cutting. [step 1.15, construct]

### Positive boundary fingers

1.17 Write an annular suture as $[-1,1]\times S^1$ and its oriented core as $\{0\}\times S^1$. A positive tangency is one at which the oriented boundary curve of the decomposing surface and the oriented suture have the same tangent direction. In a small oriented boundary chart take the core to be $y=0$, directed by $\partial_x$, and the moving boundary arc to be $y=x^2-t$, also directed by increasing $x$. Passing through $t=0$ creates the required pair of transverse intersections with the core. [step 1.16, construct]

1.18 Keep track of the actual surface during this move by attaching the collar $\partial M\times[0,1]$ and adding the trace annulus of its moving boundary. The trace annulus has its old boundary on level zero and its moved boundary on level one; glue its old boundary to the original surface. Cutting the collar along this annulus gives the old cut manifold with an attached boundary collar. At the tangency the two new corners bound a three-ball whose incoming and outgoing face are disks; sliding one disk across that ball removes the two corners. Their suture orientations agree precisely for the positive tangency. Thus the sutured cut manifold is unchanged up to diffeomorphism. A negative tangency has the opposite suture attachment and is not included in this assertion. [step 1.17, construct]

1.19 Here is a terminating normalization for a boundary-coherent family. First move any closed curves lying in an annular suture into its adjacent negative boundary region, with the normal of the decomposing surface pointing out of the manifold. An arc transverse to all those parallel curves, continued across the suture to the positive region, gives simultaneous positive fingers because the curves have the same orientation. [step 1.18, construct]

1.20 Next let $C_1,\ldots,C_k$ be the parallel oriented closed intersection curves in a component $V$ of the positive or negative boundary. A short transverse arc crosses each once. If their homology class in $H_1(V)$ is nonzero, the two sides of this family can be connected to the sutures without crossing the family: the family does not cut off a compact subsurface away from the boundary. Continue the transverse arc on its two sides to obtain the finger path. Exactly one orientation of that path gives positive tangencies for every curve, since all their orientations agree. [step 1.19, construct]

1.21 If their homology class is zero, boundary coherence says that each is the oriented boundary of the compact side it cuts off. Continue the transverse arc from its exterior side to a suture. This gives a one-ended finger path. The boundary orientation of that compact side and the boundary orientation of $V$ again give positive tangencies. No assertion for oppositely oriented boundaries of compact sides is needed. [step 1.20, construct]

1.22 Choose the continuation arcs successively in the complement of the other boundary arcs. At each stage use an outermost parallel family. The components already meeting both signed boundary regions need not be moved. Each operation reduces the number of boundary components lying wholly in one signed region; no new wholly contained component is created. Hence finitely many moves give a good decomposing surface: every component of its boundary meets both signed regions. The actual cut sutured manifold is preserved by the collar-and-ball construction at every move. This establishes the normalization step rather than treating boundary coherence as an analytic nonvanishing theorem. [step 1.21, construct]

1.23  ## Keeping the cuts open and boundary coherent [step 1.22, construct]

1.24 For the balanced application, no closed boundary component is allowed to lose all sutures. If a nonterminal component has boundary of positive genus, the kernel of $H_1(\partial M;\mathbb Q)\to H_1(M;\mathbb Q)$ is a Lagrangian of half the boundary rank, by the long exact sequence and intersection duality. Choose $y$ with nonzero $\partial y$ in this kernel. Thus a representative has a proper component with nonzero relative class. [step 1.23, construct]

1.25 The boundary representative can be chosen with the needed parallel-curve condition on each signed region $V$. Represent its relative class by disjoint arcs and curves. If there is an arc, band each closed curve to an arc along a path in their complement; the band replaces the pair by a single arc and preserves the relative class. Repeat until no closed curve remains. If there are no arcs, the class modulo boundary circles is an element of the symplectic integral homology of $V$. Write it as a positive multiple of a primitive vector. Euclidean elementary changes of a handle basis, realized by twists and band sums, carry that primitive vector to one handle core. Pulling that core back gives a nonseparating simple closed curve; take the indicated number of oriented parallel copies. Boundary-parallel homology terms can be moved into the annular sutures. Thus the closed curves in $V$ may be chosen parallel, coherently oriented and nonseparating. The taut-cut construction above preserves this chosen boundary outside the suture collars. [step 1.24, construct]

1.26 The strong norm equalities also allow one to keep a proper component rather than all components of $S$. Write $S=S_0\sqcup T$. Each is minimizing, since they are component subcollections. The two triangle inequalities for $[S_0]+[R']+[T]$, together with equality for $S+R'$, force equality for $S_0+R'$. The essential-intersection and zero-norm incompressibility argument restricts to that subcollection. Thus its two signed boundary sums remain taut. Choose a proper $S_0$ whose boundary class is nonzero. It is connected, open, and has nonzero relative class. The positive boundary fingers just constructed make it good without changing the cut sutured manifold. [step 1.25, construct]

1.27 Cutting an open good surface preserves balance: every boundary circle alternates the signed boundary regions when passing through sutures. The numbers of boundary arcs glued into $R_+$ and $R_-$ are equal. Both new signed surfaces acquire the same $\chi(S_0)$ contribution and the same arc subtraction, so their Euler characteristics remain equal. Every new boundary component has an old or a new annular suture, because every side of the cut surface reaches its nonempty boundary. Closed pieces are not produced. This identifies the version needed by the sutured instanton consumer, rather than silently treating a closed cut as balanced. [step 1.26, construct]

### The finite complexity decrease, at empty marking

1.28 A boundary-compressing disk $D$ has index $I(D)=v(D)-2$, where $v(D)$ counts its passages through annular sutures. Tautness excludes negative-index essential disks. Index-zero disks are exactly product disks and can first be eliminated, preserving tautness by the literal signed-boundary cut-and-reglue argument. [step 1.27, construct]

1.29 Choose a maximal compression system $D_i$ cutting $M$ into boundary-irreducible pieces $M_k$, closed-surface products $P_\mu$, and handlebodies. Choose further meridian disks $E_j$ cutting each handlebody into balls meeting at most three disk faces. Write $d_k$ for the number of $D_i$ faces on $M_k$, and $d'_\mu$ for the number on $P_\mu$. The exact ordered complexity is $$\left(\sum_k\ell(M_k),\ \sum_i I(D_i)^2, \ \sum_k d_k,\ m+\sum_\mu(d'_\mu)^2, \ \{I(D_i)>0\}\cup\{I(E_j)>0\}\right).$$ [step 1.28, construct]

1.30 The last entry is a descending finite multiset, ordered lexicographically. Replace positive entries by positive proper parts only decreases it. For a precise well-order, encode a multiset by $\sum_n a_n\omega^n$, with coefficient $a_n$ its multiplicity. The first four entries are nonnegative integers. Minimize this tuple over disk systems, and then minimize it after eliminating product disks; this is the reduced complexity. [step 1.29, construct]

1.31 Here $\ell(M_k)$ is the finite essential-Haken-length rank of F2, which strictly decreases on an essential boundary-incompressible nondisk cut. Its precise scope matches case(1) below; merely incompressible cuts are not admitted to that rank. [step 1.30, construct]

1.32 Put a connected taut nonzero cut surface in minimal position with these disks. Innermost-circle isotopy removes intersection circles. At an outermost arc, a nonpositive-index disk performs a boundary compression or a product-disk cut after the surface cut; this preserves the resulting reduced complexity and tautness. Repeating leaves only positive outermost pieces. Under a disk cut the sum of the indices of all resulting disks equals its original index: the two new endpoints increase the total suture-passage count by two and the number of disks by one. [step 1.31, construct]

1.33 There are six exhaustive locations for the remaining surface. (1) An essential piece in $M_k$ strictly lowers $\ell(M_k)$, the first coordinate. (2) Intersection with some $D_i$ splits its positive index into at least two positive parts, so the sum of squares strictly drops. (3) A surface parallel into the boundary of $M_k$ either is parallel into the boundary of all of $M$, or cuts off at least one $D_i$ face and lowers $\sum d_k$. (4) In a product piece $P_\mu$, an essential cut partitions its $D_i$ faces between two nonempty pieces: a new product piece adds one, while $a^2+b^2\le(a+b)^2-2$ offsets that increase and strictly lowers the fourth coordinate. A proper boundary cut instead removes faces and also lowers it. (5) In a handlebody, intersection with $E_j$ splits its positive index into proper positive indices and decreases the final multiset. To retain ball pieces with at most three disk faces, take parallel levels of $E_j$ separating successive saddle heights of the surface; each complementary piece is a ball with at most three faces. (6) If the surface misses all those disks, it is parallel to one of them; remove that disk from the system and decrease the last multiset. The only exceptional nondecreasing case is a surface parallel into $\partial M$, whose relative class is zero and which our chosen cut excludes. [step 1.32, construct]

1.34 Thus the chosen nonzero component is replaced by finitely many components of strictly lower reduced complexity. Other components can be left in a work queue. The finite-tree descending-rank argument terminates: an infinite finitely branching cut tree would have an infinite branch, contradicting the well-order. Repeat the taut-cut construction only when $H_2(M,\partial M)\ne0$. [step 1.33, construct]

1.35 At termination, Poincaré–Lefschetz duality gives $b_1(M)=0$. The half-lives/half-dies boundary sequence then gives boundary genus zero. Irreducibility forces a connected component with spherical boundary to be a ball: push one boundary sphere slightly into its interior; the ball it bounds leaves only its boundary collar on the other side. Multiple boundary spheres would contradict that same assertion. On a ball, incompressible signed boundary regions must be disks, and their connected sutured partition has exactly one annular suture; any additional suture would enclose an annular signed region with a compressing disk. Thus each terminal component is a product disk times an interval. This supplies the actual terminal product topology at empty marking. [step 1.34, construct] ∎

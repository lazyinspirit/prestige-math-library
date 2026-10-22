# The actual finite taut hierarchy operation: construction and remaining foundation

Primary source actually read: Martin Scharlemann, *Sutured manifolds and generalized Thurston norms*, JDG29(1989),557–614, author-hosted `https://web.math.ucsb.edu/~mgscharl/papers/suturedman.pdf`. PDF pages1–32 (printed557–588), containing §§0–4, were read from pagewise OCR; the formulas and termination argument were also inspected in page images27,31,32. The PDF and durable page texts are in `primary/`. No assertion about the unread remaining sections is made. This supplies actual cut and complexity arguments below rather than using Theorem4.19 as a theorem-name substitute.

The initially outstanding sequential-rank interface is stated at the end and is now supplied by the subsequent new construction `sequential-haken-length-from-closed-compression-frontiers.md`. This does not declare the original KHI rank detector closed; its separate all-genus instanton input remains pending.

## Norm construction needed for the taut cut

For a properly embedded oriented surface $T$ and a finite collection $\delta$ of auxiliary properly embedded arcs, define

$$x_\delta(T)=\sum_{T_i}\max\{0,|T_i\cap\delta|-\chi(T_i)\}.$$

The empty-arc version is the ordinary Thurston complexity. For a relative homology class $a$, minimize this nonnegative integer over representatives. The minimum exists whenever the class has a representative. Compression and the removal of intersection pairs of opposite sign never increase the value: a compression raises Euler characteristic by two, and tubing opposite intersections together removes two marked intersections at exactly that Euler cost. Thus a minimum can be chosen incompressible and with coherent intersections on each auxiliary arc.

The homogeneity needed here has a direct geometric proof. If an embedded oriented $T$ represents $na$, color the components of its complement by $\mathbb Z/n$, assigning a color by intersection number of a path with $T$. This is well-defined because every closed test loop has intersection divisible by $n$. For relative homology use also paths with endpoints on the complementary boundary; their colors are normalized to zero there, since the relative dual class of $T$ is divisible by $n$. Crossing a positive normal increases the color by one. Each connected component of $T$ has two fixed adjacent colors, so partition the whole components into $T_0,\ldots,T_{n-1}$ according to the transition $j\to j+1$.

Every closed or relative test path crosses each such transition with the same algebraic total: its sequence of colors is a walk on the cyclic color graph, and the difference of two transition counts is its net occupancy change at a vertex, which is zero. Its total intersection with $T$ is consequently $n$ times its intersection with each $T_j$. Relative Poincaré duality gives $[T_j]=a$. The norm adds over this partition of whole components, so $x_\delta(T)\ge n x_\delta(a)$. Conversely $n$ parallel minimizing representatives give the opposite inequality. Hence $x_\delta(na)=n x_\delta(a)$.

For subadditivity, put two minimizing representatives in general position. Eliminate inessential intersection circles and arcs by innermost/outermost compression and boundary surgery. The remaining intersections are essential in both surfaces. Their oriented double-curve sum preserves total Euler characteristic and marked intersection count. None of its zero-complexity components introduces a negative correction to the inequality. Thus $x_\delta(a+b)\le x_\delta(a)+x_\delta(b)$. Integer homogeneity and this inequality give convexity on rational classes; a bound on a homology basis gives the continuous extension if desired.

For fixed integral classes $a,b$, the integers

$$d_n=x_\delta(a+(n+1)b)-x_\delta(a+nb)$$

are nondecreasing by convexity and at most $x_\delta(b)$ by subadditivity. They are therefore eventually constant. Homogeneity shows that their eventual value is $x_\delta(b)$, by dividing $x_\delta(a+nb)$ by $n$ and using the two triangle bounds with $\pm a$. Consequently for some $m$,

$$x_\delta(a+(m+k)b)=x_\delta(a+mb)+k x_\delta(b),\qquad k\ge0.$$

This proves the eventual linearity used to choose the cut; it is not imported as an unexplained property of a named norm.

## Constructing a taut decomposing surface with prescribed boundary

Let $(M,\gamma)$ be taut, and let $y\ne0$ in $H_2(M,\partial M)$. Choose an oriented boundary representative $C$ of $\partial y$, in the complement of small collars of the boundary sutures. Let $R$ be the signed boundary surfaces, pushed slightly into $M$. Put $N=\nu(\partial R\cup C)$ in $\partial M$ and choose disjoint arcs $\delta$ in $N$ whose complement retracts to the individual boundary circles of $R$ and the closed components of $C$. Push those arcs slightly into $M$.

This choice has two concrete consequences. A representative of $[R]$ minimizing the marked norm can be made disjoint from $\delta$ and then has boundary exactly $\partial R$, by adding boundary annuli. Tautness of $R$ therefore shows that $R$ also minimizes the marked norm in $H_2(M,N)$. Also $R$ is incompressible relative to $N\setminus\delta$: an essential boundary compression would lower the marked norm except for an annulus; that annulus would connect two boundary circles in a single component of $N\setminus\delta$, excluded by construction. A disk exception cannot have an essential compressing arc.

Lift $y$ to $H_2(M,N)$ and choose $z=y+m[R]$ in the eventual linear range just proved. Choose a marked-norm-minimizing representative $S$. Oppositely oriented intersection circles in $R$ can be removed by cutting and regluing along their annulus. Innermost-circle and outermost-arc surgeries make all intersections with $R$ essential in both surfaces. Compress further away from $R$ to make $S$ incompressible; incompressibility of $R$ and irreducibility of $M$ allow those compressions without reintroducing inessential intersections. Its boundary outside $\nu\partial R$ is exactly $C$.

For any subcollection $R'$ of parallel copies of the components of $R$, choose a large parallel multiple $kR$ containing it. The inequalities

$$x_\delta(z)+k x_\delta(R)
=x_\delta(z+kR)
\le x_\delta(z+R')+x_\delta(kR-R')
\le x_\delta(z)+x_\delta(R')+x_\delta(kR-R')$$

have equal endpoints, since subcollections of a taut surface minimize their classes. Thus equality holds throughout. Essential double-curve summing gives an actual minimizing representative $S\mathbin{\#}R'$.

Its incompressibility needs the zero-norm case as well as the numerical equality. A compressible component of a minimizing sum must have zero norm. A disk or punctured sphere then compresses a piece of $S$ or $R'$, impossible. A compressible annulus contradicts essentiality of its boundary intersection circles. A compressible torus bounds a solid torus by irreducibility. An intersecting annular piece of $R'$ inside that solid torus has two oppositely oriented boundary circles in $R'$, exactly the antiparallel pair already eliminated. A torus lying wholly in one input is excluded by its incompressibility. These exhaust the zero-norm possibilities. Hence the sums are taut, not merely numerically minimizing.

Removing the auxiliary arcs does not destroy tautness: a candidate with lower unmarked norm can be made to have the same prescribed boundary, so its extra marked intersections are the same boundary contribution; compressing it cannot increase that contribution. It would then contradict the marked minimum. This is the only use of those arcs, which are not part of the eventual sutured manifold.

Cap opposite boundary curves in the annular suture collars by annuli, and discard closed separating components. Because $R$ is boundary-parallel, its class vanishes in $H_2(M,\partial M)$; thus the resulting surface still represents $y$. The new signed boundaries of the cut manifold are the actual oriented sums $R_+\mathbin{\#}S$ and $R_-\mathbin{\#}S$. They are taut by the construction. A reducing sphere in the cut manifold bounds a ball in $M$; incompressibility removes its intersections with $S$, so its ball stays in the cut manifold. This proves tautness after cutting.

## Keeping the cuts open and boundary coherent

For the balanced application, no closed boundary component is allowed to lose all sutures. If a nonterminal component has boundary of positive genus, the kernel of $H_1(\partial M;\mathbb Q)\to H_1(M;\mathbb Q)$ is a Lagrangian of half the boundary rank, by the long exact sequence and intersection duality. Choose $y$ with nonzero $\partial y$ in this kernel. Thus a representative has a proper component with nonzero relative class.

The boundary representative can be chosen with the needed parallel-curve condition on each signed region $V$. Represent its relative class by disjoint arcs and curves. If there is an arc, band each closed curve to an arc along a path in their complement; the band replaces the pair by a single arc and preserves the relative class. Repeat until no closed curve remains. If there are no arcs, the class modulo boundary circles is an element of the symplectic integral homology of $V$. Write it as a positive multiple of a primitive vector. Euclidean elementary changes of a handle basis, realized by twists and band sums, carry that primitive vector to one handle core. Pulling that core back gives a nonseparating simple closed curve; take the indicated number of oriented parallel copies. Boundary-parallel homology terms can be moved into the annular sutures. Thus the closed curves in $V$ may be chosen parallel, coherently oriented and nonseparating. The taut-cut construction above preserves this chosen boundary outside the suture collars.

The strong norm equalities also allow one to keep a proper component rather than all components of $S$. Write $S=S_0\sqcup T$. Each is minimizing, since they are component subcollections. The two triangle inequalities for $[S_0]+[R']+[T]$, together with equality for $S+R'$, force equality for $S_0+R'$. The essential-intersection and zero-norm incompressibility argument restricts to that subcollection. Thus its two signed boundary sums remain taut. Choose a proper $S_0$ whose boundary class is nonzero. It is connected, open, and has nonzero relative class. Positive boundary fingers, as constructed separately, make it good without changing the cut sutured manifold.

Cutting an open good surface preserves balance: every boundary circle alternates the signed boundary regions when passing through sutures. The numbers of boundary arcs glued into $R_+$ and $R_-$ are equal. Both new signed surfaces acquire the same $\chi(S_0)$ contribution and the same arc subtraction, so their Euler characteristics remain equal. Every new boundary component has an old or a new annular suture, because every side of the cut surface reaches its nonempty boundary. Closed pieces are not produced. This identifies the version needed by the sutured instanton consumer, rather than silently treating a closed cut as balanced.

## The finite complexity decrease, at empty marking

A boundary-compressing disk $D$ has index $I(D)=v(D)-2$, where $v(D)$ counts its passages through annular sutures. Tautness excludes negative-index essential disks. Index-zero disks are exactly product disks and can first be eliminated, preserving tautness by the literal signed-boundary cut-and-reglue argument.

Choose a maximal compression system $D_i$ cutting $M$ into boundary-irreducible pieces $M_k$, closed-surface products $P_\mu$, and handlebodies. Choose further meridian disks $E_j$ cutting each handlebody into balls meeting at most three disk faces. Write $d_k$ for the number of $D_i$ faces on $M_k$, and $d'_\mu$ for the number on $P_\mu$. The exact ordered complexity is

$$\left(\sum_k\ell(M_k),\ \sum_i I(D_i)^2,
\ \sum_k d_k,\ m+\sum_\mu(d'_\mu)^2,
\ \{I(D_i)>0\}\cup\{I(E_j)>0\}\right).$$

The last entry is a descending finite multiset, ordered lexicographically. Replace positive entries by positive proper parts only decreases it. For a precise well-order, encode a multiset by $\sum_n a_n\omega^n$, with coefficient $a_n$ its multiplicity. The first four entries are nonnegative integers. Minimize this tuple over disk systems, and then minimize it after eliminating product disks; this is the reduced complexity.

Here $\ell(M_k)$ must be a finite essential-Haken-length rank with strict decrease on an essential boundary-incompressible nondisk cut. Its exact foundational status is stated below; existence of a single finite hierarchy would not establish this maximum-length property.

Put a connected taut nonzero cut surface in minimal position with these disks. Innermost-circle isotopy removes intersection circles. At an outermost arc, a nonpositive-index disk performs a boundary compression or a product-disk cut after the surface cut; this preserves the resulting reduced complexity and tautness. Repeating leaves only positive outermost pieces. Under a disk cut the sum of the indices of all resulting disks equals its original index: the two new endpoints increase the total suture-passage count by two and the number of disks by one.

There are six exhaustive locations for the remaining surface. (1) An essential piece in $M_k$ strictly lowers $\ell(M_k)$, the first coordinate. (2) Intersection with some $D_i$ splits its positive index into at least two positive parts, so the sum of squares strictly drops. (3) A surface parallel into the boundary of $M_k$ either is parallel into the boundary of all of $M$, or cuts off at least one $D_i$ face and lowers $\sum d_k$. (4) In a product piece $P_\mu$, an essential cut partitions its $D_i$ faces between two nonempty pieces: a new product piece adds one, while $a^2+b^2\le(a+b)^2-2$ offsets that increase and strictly lowers the fourth coordinate. A proper boundary cut instead removes faces and also lowers it. (5) In a handlebody, intersection with $E_j$ splits its positive index into proper positive indices and decreases the final multiset. To retain ball pieces with at most three disk faces, take parallel levels of $E_j$ separating successive saddle heights of the surface; each complementary piece is a ball with at most three faces. (6) If the surface misses all those disks, it is parallel to one of them; remove that disk from the system and decrease the last multiset. The only exceptional nondecreasing case is a surface parallel into $\partial M$, whose relative class is zero and which our chosen cut excludes.

Thus the chosen nonzero component is replaced by finitely many components of strictly lower reduced complexity. Other components can be left in a work queue. The finite-tree descending-rank argument terminates: an infinite finitely branching cut tree would have an infinite branch, contradicting the well-order. Repeat the taut-cut construction only when $H_2(M,\partial M)\ne0$.

At termination, Poincaré–Lefschetz duality gives $b_1(M)=0$. The half-lives/half-dies boundary sequence then gives boundary genus zero. Irreducibility forces a connected component with spherical boundary to be a ball: push one boundary sphere slightly into its interior; the ball it bounds leaves only its boundary collar on the other side. Multiple boundary spheres would contradict that same assertion. On a ball, incompressible signed boundary regions must be disks, and their connected sutured partition has exactly one annular suture; any additional suture would enclose an annular signed region with a compressing disk. Thus each terminal component is a product disk times an interval. This supplies the actual terminal product topology at empty marking.

## Exact still-needed foundational extent

The norm construction, boundary choice, taut cut, numerical index conservation, six complexity comparisons and terminal-ball implication are authored above. To turn the conditional finite decrease into a supplied finite hierarchy operation, the $\ell(M_k)$ rank must actually be finite and strictly decreasing at the exact essential proper cuts in case(1). The existing finite closed-surface or torus-family bound is not this statement; neither is the existence of one finite unpared hierarchy. The source imports the finite Haken-length result from Jaco, Lecture Notes on 3-Manifold Topology, IV.13 (Scharlemann reference[9]; Hempel is reference[8]). The hyperbolization owner has been asked for its retained exact interface, without a reread or supplier check. Until that rank is supplied or locally constructed, this note retains that precise gap and does not assert a complete hierarchy theorem.


## Sequential-rank continuation

The actual Jaco IV.7–IV.13 proof is now authored in `sequential-haken-length-from-closed-compression-frontiers.md`. It constructs disjoint CLOSED incompressible compression frontiers for a finite hierarchy prefix and proves at most three per parallelity class, giving $\ell(M)\le3h(M)$ from the recorded closed-family bound at literal scope. It includes the disk-exchange operation disjoint from a proper boundary-incompressible cut. Thus the preceding rank hold is superseded by that new construction; no proper-family bound is substituted. The resulting finite taut hierarchy serves both instanton and sutured-Floer consumers, subject to their respective actual decomposition operations. The all-genus product operation for the instanton consumer remains separate.

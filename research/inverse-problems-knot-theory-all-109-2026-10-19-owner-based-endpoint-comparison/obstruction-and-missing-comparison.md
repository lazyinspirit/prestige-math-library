# Arbitrary prescribed based endpoints: obstruction and remaining supplier

Run: inverse-problems-knot-theory-all-109-2026-10-19.
Owner: /root/knot_lee_odd_localization.
This is a research diagnostic, not an admitted item or a supplier of the LEO theorem. The four original escalation sources and the five independently reviewed new algebra sources remain frozen. No native transition or global gate is claimed.

## Exact geometric obstruction

Call a protected planar Reidemeister sequence a finite sequence of orientation-preserving planar isotopies and oriented R1/R2/R3 moves, carrying a regular marked point continuously, whose closed move disks avoid a neighborhood of that point. The marked point never passes a projected crossing. A compatible long closure has its marked point on an exterior closing arc with one adjacent face equal to the unbounded face. There need not be a protected planar Reidemeister sequence from an arbitrary prescribed based diagram to such a closure.

Here is an explicit obstruction, including an embedded spatial realization. Identify the plane with the complex numbers and put

\[
 \gamma(t)=e^{it}+e^{2it},\qquad
 K(t)=(\Re\gamma(t),\Im\gamma(t),\epsilon\sin t),\qquad
 0\leq t\leq2\pi,
\]
where \(\epsilon>0\), and mark \(t=\pi\). At that point \(\gamma(\pi)=0\) and \(\gamma'(\pi)=i\). Thus the marked point is a regular point with upward tangent. Moreover \(\gamma'(t)=i e^{it}(1+2e^{it})\ne0\). For distinct unit numbers \(w_1,w_2\), equality \(w_1+w_1^2=w_2+w_2^2\) is equivalent to \(w_1+w_2=-1\). On the unit circle this gives exactly the unordered pair \(e^{2\pi i/3},e^{4\pi i/3}\): their real parts are both \(-1/2\), and their imaginary parts are opposite. Consequently the diagram has just one double point, at \(-1\). The two tangent vectors there are \((\sqrt3/2,-3/2)\) and \((-\sqrt3/2,-3/2)\), of determinant \(-3\sqrt3/2\ne0\). The spatial heights are respectively \(\epsilon\sqrt3/2\) and \(-\epsilon\sqrt3/2\). Hence \(K\) is an embedded smooth oriented knot and its marked projection is a regular knot diagram. No assertion about its knot type is needed for the obstruction.

For \(0<\delta<1/4\), the points \(-\delta\) and \(+\delta\) lie, respectively, to the left and right of the upward marked germ, and in its two adjacent faces. To check this last assertion without a drawing, choose a sufficiently small disk about zero: the only preimage of zero on the unit circle is \(-1\), and the local inverse function theorem makes its trace a single regular arc there. The real axis crosses that germ transversely at zero. Decreasing \(\delta\) if necessary puts the two test points in these adjacent faces.

Their winding indices are

\[
 n(\gamma,-\delta)=2,\qquad n(\gamma,+\delta)=1.
\]

Indeed write \(w=e^{it}\) and factor \(w^2+w-z=(w-r_1)(w-r_2)\). Logarithmic differentiation along the unit circle gives

\[
 \frac{1}{2\pi i}\int_{|w|=1}\frac{2w+1}{w^2+w-z}\,dw
 =\frac{1}{2\pi i}\int_{|w|=1}
 \left(\frac1{w-r_1}+\frac1{w-r_2}\right)dw.
\]

Each summand is 1 for \(|r_j|<1\), and 0 for \(|r_j|>1\). This can be checked directly: expand \(1/(w-r)\) in the uniformly convergent geometric series in \(r/w\) when \(|r|<1\), or in \(w/r\) when \(|r|>1\), and integrate \(w^k\,dw\) by the parametrization \(w=e^{it}\). For \(z=-\delta\), the roots \((-1\pm\sqrt{1-4\delta})/2\) both lie in \((-1,0)\). For \(z=+\delta\), the root \((-1+\sqrt{1+4\delta})/2\) lies in \((0,1)\), while the other is less than \(-1\). This proves the asserted indices by the defining winding integral, without invoking an unexamined argument-principle theorem.

The ordered pair of indices on the left and right of a regular oriented marked germ is preserved by a protected planar Reidemeister sequence. Here are the details needed for that claim. On a compact interval of planar isotopy, choose test points by transporting two sufficiently small normal offsets to the marked germ by the ambient isotopy. The curve never meets these points. The integral defining its winding number depends continuously on the isotopy parameter: use the transported parametrization and the positive minimum of the distance between the compact curve and each transported test point; the integrands and their denominators then vary uniformly. Each winding number is integer-valued, so is constant. Equivalently, subdivide into finitely many uniformly controlled smooth intervals. At a Reidemeister event the closed support disk misses the marked germ. Choose its two test points outside that disk. The usual immersed local homotopy realizing R1, R2 or R3 changes the curve only in the disk. It therefore avoids both test points, and the same continuity-and-integrality argument applies even at the singular frame. Corners in the concatenated local arcs may be rounded within the disk, which still misses the test points. Orientation-preserving planar isotopy preserves which offset is left. The values depend only on the adjacent faces, so the auxiliary offsets can be changed between successive intervals. A finite induction proves invariance for the entire sequence. This does not require the unmarked diagram to remain an immersion at the exceptional frame.

On an exterior closing arc one adjacent face is unbounded, and its winding number is zero. Our example has adjacent indices 2 and 1. Thus it cannot be connected to any exterior-closing-arc diagram by the protected planar sequences just defined. Allowing arbitrary orientation-reversing planar coordinates does not repair this mismatch: both indices change sign, while neither becomes zero.

This refutes the proposed pure protected planar endpoint-comparison lemma. It does not refute ordinary based knot invariance or the existence of an appropriate algebraic comparison. Those are different assertions.

## Exact remaining established prerequisite

The existing protected-movie geometric supplier produces freely chosen compatible long endpoint diagrams. The existing algebraic movie-map supplier takes a supplied protected planar movie. Neither supplies a comparison from an arbitrary prescribed planar based diagram to those long endpoint diagrams. Genericity alone cannot supply that comparison, by the obstruction above.

A sufficient additional supplier is the following existential comparison; it need not assert independence of all choices or functoriality of different movies.

Given an oriented regular based knot diagram \((D,p)\), and the compatible long endpoint diagram \((L,p_L)\) obtained from an orientation-preserving spatial coordinate identification of the same marked knot, construct grading-preserving maps in both directions between the integral odd complexes and between the integral Bar–Natan complexes. The odd maps must be linear for the specified right \(\mathbb Z[X]/(X^2)\)-actions; the Bar–Natan maps must be linear for the specified right \(\mathbb Z[h,X]/(X^2-hX)\)-actions. The two maps must have compatible reductions modulo 2 and \((2,h)\), respectively, under the statewise comparison, as required by LEO local maps. The localized Bar–Natan maps must be chain homotopy equivalences over the marked localized ring. Retain the original choice hypotheses; no full axiom of choice is introduced.

A local-generator proof could provide either a spherical point-at-infinity sweep comparison, with all chart transitions controlled, or mark-transport across a projected crossing, combined with planar protected moves. It must prove the actual integral module identities, signs, gradings, and common mod-two square; unbased Reidemeister invariance or a citation to basepoint independence is not enough. If a generator twists the marked variable by \(X\mapsto-X\) on the odd side or \(X\mapsto h-X\) on the Bar–Natan side, that twist must be explicitly converted into the specified module-linear maps, not silently treated as linearity.

I have not proved this additional algebraic comparison. In particular, merely relabelling spherical state circles does not establish compatibility with the fixed full odd zero-face prescription. A zero face has one inside and one outside surgery arc; changing the planar infinity can interchange those roles. In the stated arrow convention, making the old outside arrow the new inside arrow can change the prescribed zero-face sign. The fact that both unsigned composites vanish verifies the square-zero equation but does not, by itself, supply the required full-admissible sign comparison or marked module map.

This is a missing local proof of an established invariance prerequisite, not an open-problem classification. Full arbitrary based-endpoint LEO/concordance scope remains unresolved here. The five reviewed algebra prerequisites and the limited long-movie supplier keep precisely their existing statements.

## Actual source readings for this diagnostic

The owner fully read the current complete bodies of the protected geometric movie supplier and the based algebraic movie-map supplier, as well as the current odd face-sign prerequisite. For the index argument the owner read the complete current statements, facts, and proofs of the winding-number definition, integer-valuedness, local constancy, vanishing on the unbounded component, and the regular-arc jump lemma. The factorization calculation above is direct, not an unread argument-principle citation. The source bindings and frozen-source hashes are recorded in the adjacent JSON receipt. This research diagnostic has not undergone an independent mathematical review and is not an admission receipt.

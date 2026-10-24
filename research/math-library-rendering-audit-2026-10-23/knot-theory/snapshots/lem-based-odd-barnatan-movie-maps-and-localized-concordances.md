---
id: lem-based-odd-barnatan-movie-maps-and-localized-concordances
kind: lemma
title: Based odd and Bar–Natan movie maps and localized concordances
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-odd-khovanov-barnatan-and-leo-triple
  - lem-odd-cube-oriented-face-parity-and-sign-existence
  - lem-odd-marked-reidemeister-i-ii-contractions
  - lem-odd-marked-reidemeister-iii-common-complex
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Dunfield, Lipshitz and Schütz, Local equivalence and refinements of Rasmussen's s-invariant
      url: https://arxiv.org/pdf/2312.09114v3
      locator: Proposition 3.4, whose elementary-map and localization arguments are expanded here
    - title: Lipshitz and Sarkar, A mixed invariant of nonorientable surfaces in equivariant Khovanov homology
      url: https://arxiv.org/pdf/2109.09018v3
      locator: Proposition 2.1, localized enhanced-state decomposition
    - title: Ozsváth, Rasmussen and Szabó, Odd Khovanov homology
      url: https://arxiv.org/pdf/0710.4300
      locator: Sections 1–3
dependency_level: 4
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let a finite oriented link-cobordism movie carry a marked point continuously through its regular levels, with its trace disjoint from all elementary move disks, and with the marked component never dying. Use the odd cubes with the prescribed full face signs and the integral Bar–Natan cubes over $\mathbb R=\mathbb Z[h,X]/(X^2-hX)$. This movie admits an integral odd map, linear for the marked right $\mathbb A=\mathbb Z[X]/(X^2)$-action, and an integral marked $\mathbb R$-linear Bar–Natan map. They have cohomological degree zero and quantum degree the Euler characteristic of the movie, and their reductions modulo $2$ and $(2,h)$ agree under the statewise comparison. For a connected oriented concordance between knots the localized Bar–Natan map is a chain homotopy equivalence over $\mathbb R[h^{-1}]$. A localized knot complex retracts over that ring onto one free rank-one module in cohomological degree zero and odd quantum parity. All these statements concern the supplied movie; no independence from its presentation is asserted. The finite algebraic constructions use no choice axiom.

## Statement references

[[def-odd-khovanov-barnatan-and-leo-triple|Coefficient rings, gradings and comparison]]

[[lem-odd-cube-oriented-face-parity-and-sign-existence|Odd sign assignments]]

[[lem-odd-marked-reidemeister-iii-common-complex|Marked odd Reidemeister maps]]

[Dunfield–Lipshitz–Schütz, Proposition 3.4](https://arxiv.org/pdf/2312.09114v3)

[Lipshitz–Sarkar, Proposition 2.1](https://arxiv.org/pdf/2109.09018v3)

## Facts & Assumptions

**Given:** The finite movie and its continuous marked track, disjoint from all event disks.

[F1] The odd and Bar–Natan algebras, maps, state gradings and mod-two identification are those in [[def-odd-khovanov-barnatan-and-leo-triple]]. The Bar–Natan Frobenius identities and square-zero equation are proved there.

[F2] The full odd face prescription admits edge signs and marked vertex-sign comparisons ([[lem-odd-cube-oriented-face-parity-and-sign-existence]]).

[F3] Marked odd RI, RII and RIII have integer module-linear retractions and homotopies reducing to the even cancellation matrices ([[lem-odd-marked-reidemeister-i-ii-contractions]] and [[lem-odd-marked-reidemeister-iii-common-complex]]).

## Proof

**Given:** The hypotheses of the Statement. At a resolution $v$, set $\sigma(v)=(k(v)-k(0)+|v|)/2$; a merge leaves this integer fixed and a split increases it by one.

1.1 **An odd saddle as one more cube direction.** Replace its two local smoothings by an auxiliary crossing, ordered after the actual crossings. By [F2] its full cube has edge signs. The auxiliary edges form maps $g_v$ between its lower and upper faces; the mixed square equations say $d_1g+gd_0=0$, where $g$ preserves the actual resolution height. Put $F_v=(-1)^{|v|}g_v$. Since an actual edge increases $|v|$ by one, this identity becomes $d_1F=Fd_0$. The side-face restrictions are admissible assignments for the actual endpoint diagrams; use [F2]'s vertex-sign maps to identify them with any chosen admissible endpoint assignments. Every $g_v$ is an odd saddle, so commutes with the right marked action. The factor $(-1)^{|v|}$ and the vertex signs do too. Modulo two the construction is exactly the ordinary even saddle map. The auxiliary crossing is used only to choose coefficients, not included in the endpoint normalization. For a merge the circle count decreases by one at unchanged exterior degree; for a split it increases by one and exterior degree increases by one. Thus both maps have quantum degree $-1$ and cohomological degree zero. [F1, F2, algebra, construct]

1.2 **Odd birth and death signs.** A birth appends a generator $z$ for a small disjoint circle and uses the inclusion $\Lambda W\to\Lambda(W\oplus\mathbb Zz)$, without inserting $z$. External maps preserve this subalgebra, so the inclusion is a chain map with unchanged edge assignment. For a death use $(-1)^{\sigma(v)}\iota_z$, where $\iota_z$ is exterior contraction with the coefficient functional of $z$. It commutes with external merge quotients. For a split with difference $u$ not involving $z$, $\iota_z(u\wedge w)=-u\wedge\iota_z(w)$; the increase of $\sigma$ cancels that minus sign. Thus this is also a chain map. The mark is not $z$, and $\iota_z(w\wedge Z_p)=\iota_z(w)\wedge Z_p$, so both maps are marked right-module maps. A birth adds one circle and no exterior generator, giving quantum degree $+1$. A nonzero death removes a circle and one exterior generator, giving degree $-1+2=+1$. Modulo two these are the unit and counit of the even algebra. [F1, F2, algebra, construct]

1.3 **The deformed circle coordinates.** Work over $\mathbb Z[h]$, retaining the marked $\mathbb R$-action. Write a small circle first as $1\otimes w_1+X\otimes w_X$. If $x$ is the dot on the arc from which it splits, the split has coordinates $u\mapsto((x-h)u,u)$, since $\Delta(u)=1\otimes(X-h)u+X\otimes u$. A merge into an arc with dot $y$ is $(w_1,w_X)\mapsto w_1+yw_X$. Opposite saddles satisfy $ts=x+y-h$. For distinct circles the equation is $\Delta m(a\otimes b)=Xa\otimes b+a\otimes Xb-h a\otimes b$: substituting $1\otimes1,1\otimes X,X\otimes1,X\otimes X$ gives respectively $1\otimes X+X\otimes1-h1\otimes1$, $X\otimes X$, $X\otimes X$, $hX\otimes X$ on both sides. For a single circle it is $m\Delta(u)=(2X-h)u$. Dot operators commute with saddles by $m(Xa,b)=Xm(a,b)$ and $\Delta(Xa)=(X\otimes1)\Delta(a)=(1\otimes X)\Delta(a)$, verified on $1,X$. [F1, algebra]

2.1 **Deformed RI and RII.** A merge curl is $(u,v)\mapsto u+Xv$. Its survivor inclusion is $w\mapsto(-Xw,w)$, its projection is $(u,v)\mapsto v$, and its contraction on the target is $w\mapsto(w,0)$. A split curl is $w\mapsto((X-h)w,w)$; its survivor inclusion is $u\mapsto(u,0)$, its projection is $(u,v)\mapsto u-(X-h)v$, and its contraction is $(u,v)\mapsto v$. Substitution gives $pi=1$ and $1-ip=dh+hd$ in both cases. For RII use states $U,I,U\sqcup\mu,U$ at $00,01,10,11$ and the signed differential $d^0(u)=(su,(x-h)u,u)$, $d^1(v,w_1,w_X)=tv-w_1-yw_X$. Put $i(v)=(v,tv,0)$, $p(v,w_1,w_X)=v-sw_X$, $h^1(v,w_1,w_X)=w_X$, $h^2(z)=(0,-z,0)$. The equation $ts=x+y-h$ gives $d^2=0$, $di=pd=0$, $pi=1$. In local degree one, $dh+hd$ is $(v,w_1,w_X)\mapsto(sw_X,w_1-tv+(x+y-h)w_X,w_X)$, exactly $1-ip$; in local degrees zero and two it is the identity. These are actual inverse maps and homotopies. The RI and RII normalization checks are the same circle-height calculations in [F3], since $h$ has quantum degree $-2$. [F1, F3, step 1.3, algebra, construct]

2.2 **An $\mathbb R[h^{-1}]$-linear localized contraction.** Put $S=\mathbb Z[h,h^{-1}]$ and $A=X$, $B=h-X$. Direct substitution gives $A^2=hA$, $B^2=hB$, $AB=0$, $\Delta(A)=A\otimes A$, $\Delta(B)=-B\otimes B$. These are an $S$-basis of the localized circle algebra. Every enhanced state fixes a label on every original diagram segment. An edge is nonzero precisely when all its incident labels agree; its coefficient is then $h$ or $\pm1$, an $S$-unit. At an all-equal crossing both smoothings are compatible; at any other crossing admitting a compatible smoothing only that smoothing is allowed. Thus each connected enhanced-state summand is a Boolean cube on its free coordinates. Divide its edge coefficients by the standard cube signs. The square-zero equation says that the products along the two sides of every square agree. Rescale vertices by their path products, which are path-independent by swapping adjacent coordinates. This identifies the summand with a tensor product of copies of $S\xrightarrow{1}S$. A nonempty product contracts by the inverse on its first identity factor, with the tensor differential signs. Throughout a summand the marked label is fixed, so $X$ acts uniformly by $h$ or $0$; the rescaling and contraction commute with that action. This is therefore a contraction over $\mathbb R[h^{-1}]$, not just over $S$. [F1, step 1.3, algebra, construct]

3.1 **Deformed RIII with both pivots.** Use ports and matchings $I,E_1,E_2,P=E_1E_2,Q=E_2E_1$ as in [F3], and order the three local crossings in the word $121$. The states are $I$; $(E_1^a,E_2^b,E_1^c)$; $(P,E_1\sqcup\mu,Q)$; $E_1$. Let $u:E_1\to P$ insert $E_2$ below, $v:E_2\to P$ insert $E_1$ above, $w:E_1\to Q$ insert $E_2$ above, and $z:E_2\to Q$ insert $E_1$ below. With the small-circle coordinates first, $d^1(a,b,c)=(-ua+vb,-(x-h)a+(y-h)c,-a+c,wc-zb)$. Here $x,y$ are the dots on the bottom and top arcs from which $\mu$ splits. The outgoing $\mu$-merge has $w_1$ coefficient $-1$. Cancel that pivot using the identity of [F3]; only the circle $w_X$ coordinate remains in local height two. Next cancel its coefficient $+1$ from $c$; the coordinate equation is $c=a$. The residual maps are $I\xrightarrow{(s_1,s_2)}E_1\oplus E_2\xrightarrow{\left(\begin{smallmatrix}-u&v\\w&-z\end{smallmatrix}\right)}P\oplus Q$. The terms involving $h$ occurred only in the discarded $w_1$ coordinate. For $212$, interchange $1,2$ and reorder both residual pairs; one obtains exactly these six located saddles with exactly these signs. Their equality is an equality of tensor maps on labelled closed matchings, not an unlabelled dimension comparison. The two pivots have respectively the quantum shifts $+3$ and $+1$ on both source and target, so they preserve quantum grading. The contraction formula from [F3] supplies the maps, inverses and homotopies for these two cancellations and their composite. The other variants follow by rotations and the six braid identities used in [F3]. [F1, F3, step 1.3, step 2.1, algebra, construct]

3.2 **The singleton states and their grading.** Checkerboard-colour the diagram with its unbounded region white. A segment labelled $A$ is directed with black to the right, one labelled $B$ with black to the left. At a crossing number the ends cyclically $1,2,3,4$, with the two black sectors between $1,2$ and $3,4$. The patterns $AABB,ABBA,BBAA,BAAB$ are exactly those making the two opposite-end strand orientations coherent; each has one equal-label smoothing, the oriented smoothing. All-equal patterns have both smoothings and a free coordinate, and alternating or three-to-one patterns have no compatible smoothing. Consequently singleton states correspond bijectively to orientations of the link. For a knot there are two. Their marked labels are $A$ and $B$ and the marked actions are $XA=hA$, $XB=0$. The idempotents $e_A=X/h$, $e_B=1-X/h$ identify their span with one regular rank-one $\mathbb R[h^{-1}]$ module. Both states are oriented resolutions and have cohomological degree $|v|-n_-=0$. Their quantum parity is $|v|+n_+-2n_-+k(v)\equiv n+k_o\pmod2$, where $k_o$ is the oriented-resolution circle count. The finite Seifert disk-band construction has $k_o$ initial boundary circles and $n$ orientable bands; each band changes boundary-component parity by one. Its final boundary is the knot, so $n+k_o$ is odd. Localization makes all even quantum shifts invertible through powers of $h$, so this is one rank-one module in odd quantum parity, as asserted. [F1, step 2.2, algebra, construct]

4.1 **Exterior linearity and the common mod-two maps.** Each small circle above lies inside the move disk, while the mark and all exterior crossing disks lie outside. Coefficient projections for that circle commute with multiplication on every exterior circle. The dot and saddle identities in step 1.3 imply that the retraction matrices commute with unsigned exterior saddle maps. With local crossings first the total differential is $d_{\mathrm{loc}}+(-1)^r d_{\mathrm{ext}}$ on local height $r$; a local homotopy lowers $r$ by one, so its two exterior terms in $dh+hd$ cancel. Thus the retractions are marked $\mathbb R$-linear total-cube equivalences. Modulo $(2,h)$ the displayed circle coordinates, the two pivots and their projections are the even matrices. The odd constructions in [F3] use the same small-circle coordinate pivots, and changing from $\mu$ to $\mu-c$ is the same coefficient change modulo two. Their signs disappear. Hence choose the corresponding even cancellation equivalence as the common reduction of both theories; their inverses and homotopies reduce correspondingly. [F1, F3, step 2.1, step 3.1, algebra]

5.1 **All elementary movie squares.** In the Bar–Natan theory use $\eta$, $\epsilon$ and the statewise $m$ or $\Delta$ for Morse events. They commute with cube edges: disjoint-circle operations commute, two merges use associativity, two splits use coassociativity, and a mixed pair uses the Frobenius equations of [F1]. Birth and death use the unit and counit on their disjoint small circle. The marked action commutes by the dot identities in step 1.3. Their degrees are respectively $+1,+1,-1$, from the displayed homogeneous algebra formulas. The odd maps of steps 1.1–1.2 reduce to exactly the same operations. Step 4.1 supplies the Reidemeister squares. Compose the actual maps for the finite movie. The statewise comparison square therefore commutes, and the degrees add to $b-s+d=\chi(S)$. No relation between two different movies is invoked. [F1, F3, step 1.1, step 1.2, step 4.1, algebra, construct]

5.2 **Reidemeister transport of canonical lines.** For a link choose one temporary exterior marked point on each component outside the move disk. The maps and homotopies constructed above commute with all their $X$-actions. In the localized singleton basis these are simultaneous eigenlines with eigenvalues $h$ or $0$. Their label signs determine the component orientations, using the unchanged checkerboard convention outside the disk. Each line is therefore carried to its same-orientation line. The Reidemeister map is a chain homotopy equivalence, so its induced map on each such rank-one $S$-line is an isomorphism; its coefficient is an $S$-unit. This supplies the line transport for every exterior closure, with no omitted RIII orientation case. [step 4.1, step 2.2, step 3.2, algebra, construct]

6.1 **The connected composite is invertible.** In the diagonal basis the remaining Morse formulas are $\eta(1)=h^{-1}(A+B)$, $\epsilon(A)=1$, $\epsilon(B)=-1$. Together with step 2.2 all nonzero Morse coefficients are $S$-units. Start with one incoming orientation and sum over orientations of partial surface components extending it; components not yet meeting the incoming boundary have their two choices. Birth creates those choices. A saddle within a component extends its orientation uniquely; a saddle joining different components retains precisely the compatible pairs, with one predecessor for each resulting orientation. Hence retained coefficients never add or cancel. A death cannot make a partial surface component closed: such a closed component could never meet a later level and would be a closed component of the final connected surface with incoming boundary. Distinct permitted orientations therefore remain distinct on surviving boundary, and death multiplies by a unit. Step 5.2 treats Reidemeister events. For a connected concordance each incoming orientation has exactly one outgoing extension, with unit coefficient $u_A$ or $u_B$ on its marked eigensummand. On the regular rank-one localized modules the map is multiplication by $u_Ae_A+u_Be_B$, whose inverse is $u_A^{-1}e_A+u_B^{-1}e_B$. Compose this inverse with the source and target retractions of steps 2.2 and 3.2. The complementary Boolean summands have their explicit module-linear contractions, so this gives a chain homotopy inverse to the actual movie composite. A concordance has $\chi=0$, hence the map is grading-preserving. This proves the localized equivalence and every assertion of the Statement. [step 5.1, step 2.2, step 3.2, step 5.2, algebra, construct] ∎

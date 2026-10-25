---
id: lem-handles-of-equal-index-can-be-attached-on-one-level
kind: lemma
title: Handles of equal index can be attached on one level
status: published
origin: pipeline
dependency_level: 4
deps:
- def-handle-decomposition-relative-to-the-incoming-boundary
- thm-morse-functions-and-handle-decompositions-correspond
- lem-interior-slab-handle-attachment
- prop-simultaneous-attachment-at-a-morse-critical-value
- lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism
- def-attaching-a-smooth-handle-with-corner-rounding
- thm-collar-neighborhood-theorem
- lem-manifold-bump-for-a-compact-set-inside-an-open-set
- def-morse-function-adapted-to-a-cobordism
- def-countable-choice
- thm-smooth-inverse-function-theorem-on-manifolds
- thm-smooth-partitions-of-unity-exist-on-manifolds
- thm-compactly-supported-vector-fields-are-complete
- thm-fundamental-theorem-on-flows
forward_refs: []
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
  - title: C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4,
      printed pp. 129-148
    url: https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4,
      printed pp. 10-48
    url: https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
proof_strategy: simultaneous attachment plus isotopy invariance of the attaching data
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a compact triad and let $f$ be
an adapted Morse function whose critical points of index $k$ all lie at one
level $c\in(0,1)$, with no critical point of another index at $c$ and no other
critical value in a neighbourhood of $c$. Then the
sublevel just above $c$ is obtained from the sublevel just below $c$ by
attaching disjoint $k$-handles, one for each index-$k$ critical point.
Equivalently, handles of equal index attached at one level may be regarded as
attached simultaneously or successively in any order, the result being the same
up to diffeomorphism fixing the incoming face and respecting the lower sublevel up to homotopy of pairs. On the common attached-stage model, reordering disjoint attachments fixes its entire lower stage. Handles of equal index may
be reordered freely, and attaching embeddings may be changed by isotopy of the
attaching region.

## Facts & Assumptions

[F1] [[def-morse-function-adapted-to-a-cobordism]]: An adapted Morse function $f$ on a compact triad has $f^{-1}(0)=M_0$, $f^{-1}(1)=M_1$, is constant on the faces, has all critical points interior and nondegenerate, and has no critical point in a fixed collar of $\partial W$.

[F2] [[lem-interior-slab-handle-attachment]]: Assume $\mathrm{AC}_\omega$. Let $K=f^{-1}[a,b]$ be a compact interior band of an adapted pair with regular $0<a<b<1$. If $K$ contains exactly one critical point of index $k$, then $W^b$ is diffeomorphic to $W^a$ with one rounded $k$-handle attached. If $K$ contains finitely many critical points, all of index $k$ at one common value, the same conclusion holds with one disjoint handle per critical point and the order of attachment is immaterial; the original lower sublevel is respected up to homotopy of pairs.

[F3] [[prop-simultaneous-attachment-at-a-morse-critical-value]]: Assume $\mathrm{AC}_\omega$. If a compact closed band of a smooth function on a boundaryless manifold has regular endpoints and its finitely many nondegenerate critical points all lie at one value, then the upper sublevel is obtained from the lower one, up to diffeomorphism and corner rounding, by attaching disjoint handles of the individual indices.

[F4] [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]]: For fixed attaching and product-collar data, two compatible roundings of a handle attachment are diffeomorphic by an isotopy supported in the collar, the identity outside it.

[F5] [[def-attaching-a-smooth-handle-with-corner-rounding]]: Attaching a $k$-handle along an embedding $h:S^{k-1}\times D^{n-k}\to\partial X$ that extends over a neighbourhood of the disk factor forms the quotient of $X\sqcup(D^k\times D^{n-k})$ identifying the attaching region, with the seam smoothed and the corner rounded; the framing is part of the data.

[F10] [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]: Let $M$ be a smooth manifold, let $K\subseteq M$ be compact, and let $U\subseteq M$ be open with $K\subseteq U$. Then there is a smooth $\rho:M\to[0,1]$ with $\rho=1$ on a neighbourhood of $K$ and $\operatorname{supp}(\rho)\subseteq U$.

[F7] [[thm-collar-neighborhood-theorem]]: Assume $\mathrm{AC}_\omega$. Every smooth manifold with boundary has a smooth collar.

[F8] [[thm-morse-functions-and-handle-decompositions-correspond]] and [[def-handle-decomposition-relative-to-the-incoming-boundary]]: an adapted excellent Morse function determines a handle decomposition with one handle of the index of each critical point, and a decomposition is an ordered list of handles attached to the successive stages.

[F9] [[def-countable-choice]]: $\mathrm{AC}_\omega$: every at most countable family of nonempty sets has a choice function.

[F11] Smooth maps with invertible differential have smooth local inverses ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

[F12] Smooth partitions of unity exist under countable choice ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F13] A compactly supported smooth field is complete, its flow maps are smooth diffeomorphisms, and integral curves are unique ([[thm-compactly-supported-vector-fields-are-complete]], [[thm-fundamental-theorem-on-flows]]).


## Proof

**Given:** The adapted Morse function $f$ on the compact triad, the level $c$ carrying exactly the critical points $p_1,\dots,p_m$ of index $k$, and a neighbourhood of $c$ containing no other critical value.

1.1 Since $0<c<1$, choose regular $0<a<c<b<1$ sufficiently close to $c$ that the band contains only the critical points at $c$. The added hypothesis excludes all other indices there; compactness and nondegeneracy make these points a finite list $p_1,\dots,p_m$, all of index $k$. The band is compact and disjoint from $\partial W$, since the face values are zero and one. It need not avoid the whole fixed critical-point-free boundary collar; it avoids a sufficiently small boundary neighbourhood, which suffices for the local attachment construction. Write $W^a,W^b$ for its lower and upper stages. [F1, given, choose]

1.2 **Local extension of an arbitrary attaching-region isotopy.** Let $A=S^{k-1}\times D^{n-k}$ and let $F_s:A\to Y$, $Y=\partial N$, be a smooth isotopy of admissible attaching embeddings. If $A$ is empty the assertion is immediate. Otherwise $A$ is compact and has the full dimension of $Y$. The graph map $(s,x)\mapsto(s,F_s(x))$ is an embedding of the compact parameterized attaching region. In a source boundary or time-endpoint chart, joint smoothness means restriction of a smooth local extension to an open coordinate neighborhood; the graph map's derivative has block form $(1,0;\partial_sF_s,D_xF_s)$ and is invertible because $D_xF_s$ has full rank. F11 supplies a smooth inverse on that open neighborhood. There define the time-dependent velocity by $v(s,y)=\partial_sF_s(F_s^{-1}(y))$. It extends the actual velocity on the graph even at the attaching boundary. A finite cover of that graph, F12 and compactly supported bumps F10 patch these local extensions: every local value on the graph is the same prescribed velocity, so their weighted sum $V(s,y)$ agrees there. Choose the sum supported in a compact subset of $\mathbb R\times Y$. No tubular-neighborhood or later isotopy-extension theorem is used. [F10, F11, F12, construct]

1.3 **Changing the attaching embedding by a diffeotopy of the boundary.** Let $N$ be a smooth $n$-manifold with boundary, let $f:S^{k-1}\times D^{n-k}\to\partial N$ be an attaching embedding, and let $H_s$, $s\in[0,1]$, be a smooth isotopy of $\partial N$ with $H_0=\mathrm{id}$ whose every time-$s$ map is a diffeomorphism; write $f_s:=H_s\circ f$. Choose a collar $c:\partial N\times[0,1)\to N$ by [F7] and a smooth scalar cutoff $\beta:[0,1)\to[0,1]$ with $\beta=1$ on $[0,1/4]$ and $\beta=0$ on $[1/2,1)$, obtained by integrating and normalizing a positive bump on $(1/4,1/2)$ and taking the complementary integral, and define $\widetilde H_s:N\to N$ by $\widetilde H_s(c(p,t)):=c(H_{s\beta(t)}(p),t)$ on the collar image and $\widetilde H_s:=\mathrm{id}$ outside it. Each $\widetilde H_s$ is a diffeomorphism of $N$, with inverse $c(p,t)\mapsto c(H_{s\beta(t)}^{-1}(p),t)$, the map $(s,x)\mapsto\widetilde H_s(x)$ is smooth, and $\widetilde H_s$ is the identity outside $c(\partial N\times[0,1/2))$. Then $\Phi:=\widetilde H_1^{-1}$ on $N$ and the identity on the handle $h^k=D^k\times D^{n-k}$ is a diffeomorphism $N\cup_{f_1}h^k\to N\cup_{f_0}h^k$: it is well defined and bijective because $\widetilde H_1^{-1}(f_1(z))=\widetilde H_1^{-1}(H_1(f(z)))=f(z)=f_0(z)$ for every $z$ in the attaching region; it is smooth across the seam because near the boundary $\beta=1$, so in the product-collar charts of [F5] it acts on the boundary factor by $H_1^{-1}$, turning the $f_1$-identification into the $f_0$-identification while keeping the collar coordinate fixed, and that is the identity expressed in the two charts in which the attachments are glued; and it is the identity outside the collar image. The corner rounding changes both attachments by the collar-supported isotopy of [F4], with which $\Phi$ composes, so it does not affect the conclusion. Hence attachments along attaching embeddings related by a diffeotopy of the boundary are diffeomorphic relative to the complement of that collar neighbourhood. [F4, F5, F7, F10, construct]

2.1 **Ambient diffeotopy.** Choose smooth compactly supported cutoffs $\rho(s)$ and $\chi(y)$, with $\rho=1$ near $[0,1]$ and $\chi=1$ on a neighborhood of the projection of $\operatorname{supp}V$, and put $Z=\rho(s)\chi(y)\partial_s+V(s,y)$ on $\mathbb R\times Y$. This field is compactly supported and complete by F13. On $\{\chi=1\}$ during the relevant interval its time coordinate has derivative one; its space trajectory cannot leave that set, since $V$ vanishes on a neighborhood of its boundary. Outside that set the space component is stationary. Thus $H_s(y)=\operatorname{pr}_Y\operatorname{Fl}^Z_s(0,y)$ is a smooth diffeomorphism for $0\le s\le1$, with smooth inverse $y\mapsto\operatorname{pr}_Y\operatorname{Fl}^Z_{-s}(s,y)$, including points where the space component is stationary. The graph curve $(s,F_s(x))$ solves the same field for every $x$, so uniqueness gives $H_s(F_0(x))=F_s(x)$. This proves the required ambient boundary diffeotopy for arbitrary smooth attaching-region isotopies, with compact support. For finitely many disjoint attaching regions apply the same construction to their compact disjoint union. [F10, F13, step 1.2, construct]

2.2 Apply [F3] to $f|_{\operatorname{int}W}$ and this compact band. For its diffeomorphism comparison use the explicit interior-support construction in [F2], Proof (one-point and simultaneous cases): disjoint compact Morse-chart modifications, cutoff normalized flows on the regular bands, and collar-interval maps fixed at their inner edges. These operations require the Morse function on the interior band; the additional given field in [F2] is used to describe the attaching spheres and is unnecessary for the attachment diffeomorphism type here. All supports are in a compact subset of $\operatorname{int}W$, so the comparison extends by the identity near $M_0$. Thus $W^b$ is obtained from $W^a$ by one disjoint rounded $k$-handle per $p_j$, with the common pushed-in lower copy giving the homotopy-of-pairs comparison. If $m=0$, the same regular collar construction attaches no handles. [F2, F3, F9, step 1.1, construct, algebra]

3.1 Order does not matter. If the attaching regions of two handles in $\partial W^a$ are disjoint, then attaching them in either order gives the same result: the two quotient constructions coincide with the single quotient of $W^a\sqcup h_1\sqcup h_2$ by the two attaching identifications, and the gluings are supported in disjoint neighbourhoods. Hence successive attachment in any order produces a manifold diffeomorphic to the simultaneous attachment of step 2.2, relative to $W^a$. [F5, step 2.2, algebra]

4.1 Conclusion. The local graph extension, ambient flow and collar-gluing steps show that an arbitrary smooth isotopy of the attaching-region embeddings induces a boundary diffeotopy and a diffeomorphic attached stage, and step 3.1 shows that the attachments may be performed in any order with the same result; therefore handles of equal index at one level may be regarded as attached simultaneously or successively in any order, may be reordered freely, and their attaching embeddings may be changed by such isotopies of the attaching region, the reordering diffeomorphism is relative to the lower sublevel $W^a$, while an embedding isotopy moves the base only inside its boundary collar and fixes the complement of that collar. It need not fix every point of the lower sublevel when the attaching image itself moves. The corner rounding only changes the result by the collar-supported isotopy of [F4], so it does not affect this conclusion. Every step used the collar and handle suppliers with $\mathrm{AC}_\omega$, and no full choice principle. [F4, F8, step 2.1, step 1.3, step 3.1, algebra] ∎


## Remarks

The arbitrary attaching-region isotopy extension is proved locally for this compact full-dimensional attaching source. Reordering disjoint attachments is relative to the lower stage; changing an attaching image fixes the base away from its boundary collar. No later isotopy-extension theorem is a prerequisite.

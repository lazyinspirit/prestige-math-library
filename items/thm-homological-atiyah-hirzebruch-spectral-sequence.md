---
id: thm-homological-atiyah-hirzebruch-spectral-sequence
kind: theorem
title: Homological Atiyah–Hirzebruch spectral sequence
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-reduced-generalized-homology-theory", "def-coefficient-groups-of-a-generalized-homology-theory", "thm-an-exact-couple-generates-a-spectral-sequence", "def-exact-couple", "def-homological-spectral-sequence", "def-associated-graded-object-of-a-filtered-object", "prop-relative-cw-inclusions-are-cofibrations", "lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient", "lem-cw-quotients-and-collapse-of-a-contractible-subcomplex", "prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory", "def-incidence-number-of-two-cw-cells", "thm-cellular-boundary-is-the-incidence-degree-matrix", "thm-cellular-homology-computes-singular-homology"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Davis–Kirk, Lecture Notes in Algebraic Topology, Theorem 9.6, printed pp. 242–243"
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: "Theorem 9.6, printed pp. 242–243"
    - title: "Haynes Miller, MIT 18.906 Algebraic Topology II, Lecture 26, printed pp. 89–92"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 26, exact-couple filtration conventions, printed pp. 89–92"
verification:
  audited: 2026-09-22
---

## Statement

Let $X$ be a finite CW complex and $\widetilde h$ a reduced generalized homology
theory. Use the cofiber pair groups $h_n(B,A)=\widetilde h_n(C_{A_+\to B_+})$ and their natural connecting maps, with $h_n(B)=\widetilde h_n(B_+)$. Set $X^p=\varnothing$ for $p<0$. There is a homological spectral sequence with
$$E^1_{p,q}=h_{p+q}(X^p,X^{p-1}),\qquad E^2_{p,q}\cong H_p\bigl(X;h_q(*)\bigr),\qquad d^r:E^r_{p,q}\to E^r_{p-r,q+r-1},$$
and for each total degree $n$ the filtration $F_p h_n(X):=
\operatorname{im}\bigl(h_n(X^p)\to h_n(X)\bigr)$ satisfies
$$E^\infty_{p,q}\cong F_p h_{p+q}(X)\big/ F_{p-1}h_{p+q}(X).$$
The filtration is finite in each total degree: $F_p h_n(X)=0$ for $p<0$ and
$F_p h_n(X)=h_n(X)$ for $p\geq\dim X$ when $X\ne\varnothing$; for empty $X$ all groups and filtration stages are zero. The second-page isomorphism uses the required suspension-compatible cofiber boundary and boundary-normalized cellular coordinates; there is no independently specified connecting map.

## Facts & Assumptions

[F1] Reduced generalized homology has natural cofiber long exact sequences, homotopy invariance, the wedge axiom, and zero groups on a point; $h_q(*)=\widetilde h_q(S^0)$ and iterated suspension identifies the groups of spheres with these coefficients ([[def-reduced-generalized-homology-theory]], [[def-coefficient-groups-of-a-generalized-homology-theory]]).

[F2] An initial exact couple generates a spectral sequence starting at $E^1=E$ with differentials of bidegree $(-r,r-1)$ and with the subquotient description $E^r_{p,q}\cong N^r_{p,q}/B^r_{p,q}$, where $N^r_{p,q}=k^{-1}(\operatorname{im}(i^{r-1}:D_{p-r,q+r-1}\to D_{p-1,q}))$ and $B^r_{p,q}=j(\ker(i^{r-1}:D_{p,q}\to D_{p+r-1,q-r+1}))$ ([[thm-an-exact-couple-generates-a-spectral-sequence]], [[def-exact-couple]]).

[F3] A homological spectral sequence has square-zero differentials $d^r:E^r_{p,q}\to E^r_{p-r,q+r-1}$ and specified homology identifications $H(E^r,d^r)\cong E^{r+1}$ ([[def-homological-spectral-sequence]]).

[F4] The increasing associated graded consists of the quotients $F_p/F_{p-1}$ of an already given increasing filtration ([[def-associated-graded-object-of-a-filtered-object]]).

[F5] CW subcomplex inclusions are cofibrations, their cofibers are equivalent to their based quotients, and collapsing a nonempty CW subcomplex retains the remaining cells with one quotient vertex ([[prop-relative-cw-inclusions-are-cofibrations]], [[lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient]], [[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]]).

[F6] Based degree-$d$ maps of positive-dimensional spheres act by $d$ on reduced generalized homology. Cellular boundary coefficients are attaching incidence degrees in dimensions at least two and terminal-minus-initial endpoint coefficients in dimension one; cellular homology computes singular homology ([[prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory]], [[def-incidence-number-of-two-cw-cells]], [[thm-cellular-boundary-is-the-incidence-degree-matrix]], [[thm-cellular-homology-computes-singular-homology]]).

## Proof

**Proof technique:** direct.

**Given:** The finite CW complex, theory and cofiber pair convention of the statement.

1.1 If $X$ is empty, $X_+$ is a point and every group in question is zero by [F1], proving all assertions in that case. Otherwise put $N=\dim X$. Define $D_{p,q}=h_{p+q}(X^p)$ and $E_{p,q}=h_{p+q}(X^p,X^{p-1})$. Let $i$ be skeletal inclusion, $j$ the pair map and $k$ the pair boundary. The pair exact sequences give $\operatorname{im}i=\ker j$, $\operatorname{im}j=\ker k$ and $\operatorname{im}k=\ker i$ at their respective positions. Their bidegrees are $(1,-1),(0,0),(-1,0)$, so this is an initial exact couple and [F2] constructs the claimed pages and differentials. [F1, F2]

1.2 We verify the second page using the suspension-compatible cofiber boundary required by [F1]. Write $G=h_q(*)$. In column zero, $X^0_+$ is a finite wedge of $S^0$'s, so $E_{0,q}=\bigoplus_{e^0}G$. For $p\ge1$, [F5] identifies the skeletal quotient with the finite wedge of oriented $p$-cell spheres; [F1] initially gives coordinates $E_{p,q}=\bigoplus_{e^p}G$ using the specified suspension. For the standard oriented disk pair $(D^p,S^{p-1})$, its boundary is an isomorphism onto $K=\ker(h_{p+q-1}(S^{p-1})\to h_{p+q-1}(*))$. Indeed the inclusion of a chosen boundary point makes $h_m(S^{p-1})\to h_m(D^p)$ surjective in every degree, since the disk contracts to that point; the pair exact sequence proves the assertion. For $p\ge2$, quotienting the chosen boundary point identifies $K$ with $\widetilde h_{p+q-1}(S^{p-1})$: the split cofiber sequence $S^0\to(S^{p-1})_+\to(S^{p-1},s_0)$ proves this, without identifying $(S^{p-1})_+$ with a based wedge. Use an orientation-preserving identification of the boundary sphere and the specified suspension coordinates to view this disk boundary as an automorphism $a_{p,q}:G\to G$. For $p=1$, $K=\ker(G\oplus G\xrightarrow{+}G)$ and use the coordinate $g\mapsto(-g,g)$ in initial, terminal order to define the automorphism $a_{1,q}$. [F1, F5]

1.3 For fixed $(p,q)$ put $n=p+q$. Then $N^r_{p,q}=k^{-1}(\operatorname{im}(h_{n-1}(X^{p-r})\to h_{n-1}(X^{p-1})))$: for $r>p$ the source skeleton is empty, so the image is zero and $N^\infty_{p,q}=\ker k$. Likewise $B^r_{p,q}=j(\ker(h_n(X^p)\to h_n(X^{p+r-1})))$, and for $p+r-1\geq N$ this kernel is $\ker(h_n(X^p)\to h_n(X))$. [F1, F2]

2.1 Naturality for each characteristic disk pair computes $jk$ cell by cell. For $p\ge2$ its component at a $(p-1)$-cell is the attaching sphere followed by the quotient projection onto that cell. On the reduced kernel just used, this map acts by its degree, by [F6]. This also covers an attaching map that is not based: move its image of one chosen sphere point to the target sphere basepoint along a path and extend that homotopy by the point cofibration [F5]; homotopy invariance gives the same action on the kernel of collapse to a point. Its degree is the incidence number, unchanged by that homotopy. Thus the component is $[e^p:e^{p-1}]a_{p,q}$ in the initial coordinates. For $p=1$, naturality sends $(-a_{1,q}g,a_{1,q}g)$ to the initial and terminal vertices; when these coincide the sum is zero. The component is again the signed endpoint incidence times $a_{1,q}$. For $p=0$ the target is zero. Define $T_{0,q}=\mathrm{id}_G$ and $T_{p,q}=T_{p-1,q}a_{p,q}$ recursively, and change every coordinate in column $p$ by $T_{p,q}$. The new differential component is $T_{p-1,q}([e^p:e^{p-1}]a_{p,q})T_{p,q}^{-1}=[e^p:e^{p-1}]\mathrm{id}_G$, since group homomorphisms commute with integer multiplication. Hence the row complex is isomorphic to cellular chains with coefficients $G$. [F1, F5, F6, step 1.2]

3.1 Taking homology of that row gives $E^2_{p,q}\cong H_p(X;h_q(*))$ by [F3] and [F6]; negative columns are zero. Functoriality of the skeletal inclusions proves $F_p\subseteq F_{p+1}$ directly. For $p<0$ the source is zero by [F1], and for $p\ge N$ the map is the identity of $h_n(X)$. Thus these images really form a finite exhaustive filtration before [F4] is applied. [F1, F3, F4, F6, step 1.1, step 2.1]

4.1 By exactness, $\ker k=\operatorname{im}(j:D_{p,q}=h_n(X^p)\to E_{p,q})$. Define $\Phi:\ker k\to F_ph_n(X)/F_{p-1}h_n(X)$ by choosing $x\in h_n(X^p)$ with $j(x)=e$ and sending $e$ to the image of $x$ in $h_n(X)$ modulo $F_{p-1}$. This is well defined because two such lifts differ by $\ker j=\operatorname{im}(h_n(X^{p-1})\to h_n(X^p))$, and it is surjective by the definition of $F_p$. Its kernel is $j(\ker(h_n(X^p)\to h_n(X)))$: one inclusion is immediate, and if the image of $x$ lies in $F_{p-1}$, choose $y\in h_n(X^{p-1})$ with the same image in $h_n(X)$; then $x-i(y)$ maps to zero in $h_n(X)$ and $j(x)=j(x-i(y))$. Thus step 1.3 gives $E^\infty_{p,q}=\ker k/j(\ker(h_n(X^p)\to h_n(X)))\cong F_ph_n(X)/F_{p-1}h_n(X)$. [F1, F2, F4, step 3.1, step 1.3]

5.1 Steps 1.1, 3.1 and 4.1 give the asserted first and second pages, the bidegree of the differentials and the identification of the stable page with the associated graded of the finite filtration, which proves the theorem. [step 1.1, step 3.1, step 4.1] ∎

## Source notes

The cellular differential and finite convergence construction can also be compared with [Duke Lecture 13](https://services.math.duke.edu/~kgw/8803_Stable/L13_Atiyah_Hirzebruch_Spectral_sequence.pdf), proof of Theorem 1.1, pp. 1–3. That source treats spectrum homology. Steps 1.2 and 2.1 above spell out the cellular coordinates under the required suspension-compatible cofiber boundary and keep the orientation choices explicit.


Compare [Davis–Kirk](https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf), Theorem 9.6, printed pp. 242–243, for the bidegree $(-r,r-1)$ and the finite skeletal convergence statement, and [Miller](https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf), Lecture 26, printed pp. 89–92, for the exact-couple filtration conventions.

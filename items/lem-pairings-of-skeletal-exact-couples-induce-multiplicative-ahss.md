---
id: lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss
kind: lemma
title: Pairings of skeletal exact couples induce multiplicative AHSS
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cohomological-atiyah-hirzebruch-spectral-sequence, thm-cellular-approximation-for-maps-of-cw-pairs, def-exact-couple, def-skeletal-filtration-for-generalized-cohomology]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel Dugger, Multiplicative structures on homotopy spectral sequences II, §3.1, §3.3 and Theorem 3.4, printed pp. 4–5"
      url: https://pages.uoregon.edu/ddugger/multb.pdf
      locator: "§3.1 pairing of filtering towers, §3.3 first page, Theorem 3.4 diagonal case, printed pp. 4–5"
    - title: "Haynes Miller, MIT 18.906 Algebraic Topology II, Lecture 29, printed pp. 100–101"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 29, product structure, printed pp. 100–101"
    - title: "Caleb Ji, The Atiyah–Hirzebruch Spectral Sequence, §1.3, printed p. 4"
      url: https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf
      locator: "§1.3, printed p. 4: the AHSS as stated carries no information about multiplicative structure"
---

## Statement

Let $\widetilde h$ be a reduced generalized cohomology theory equipped with a
**coherent external product**: natural bilinear pairings
$$h^m(X,A)\times h^n(Y,B)\longrightarrow h^{m+n}\bigl(X\times Y,\,A\times Y\cup X\times B\bigr)$$
on CW pairs, a unit class in $h^0(\mathrm{pt})$, associativity and graded
commutativity $u\cdot v=(-1)^{mn}v\cdot u$ for $u\in h^m$, $v\in h^n$, compatible
with suspension and satisfying the two relative connecting-map Leibniz
identities in each variable.

Let $X$ be a finite CW complex with skeleta $X^p$, let
$$(X\times X)^n:=\bigcup_{i+j\le n}X^i\times X^j$$
be the skeletal filtration of the product cell structure, and let
$\Delta:X\to X\times X$ be a cellular approximation of the diagonal, so that
$\Delta(X^s)\subseteq(X\times X)^s$ ([[thm-cellular-approximation-for-maps-of-cw-pairs]]).
Write $E_1^{p,q}=h^{p+q}(X^p,X^{p-1})$ for the first page of the cohomological
Atiyah–Hirzebruch spectral sequence of
[[thm-cohomological-atiyah-hirzebruch-spectral-sequence]] and $F^\bullet$ for
the skeletal filtration of [[def-skeletal-filtration-for-generalized-cohomology]].

**(a) The pairing at $E_1$.** The relative products of skeletal pairs, the
collapse to the $(p,r)$-summand of the product filtration quotient, and
$\Delta$, give for all integers $p,q,r,s$ a bilinear pairing
$$\mu_1^{p,q;r,s}:E_1^{p,q}\times E_1^{r,s}\longrightarrow E_1^{p+r,q+s}$$
whose value on $x\in E_1^{p,q}=h^{p+q}(X^p,X^{p-1})$ and $y\in E_1^{r,s}$ is the
composite
$$h^{p+q}(X^p,X^{p-1})\times h^{r+s}(X^r,X^{r-1})\xrightarrow{\ \boxtimes\ }h^{p+q+r+s}\bigl(X^p/X^{p-1}\wedge X^r/X^{r-1}\bigr)$$
$$\xrightarrow{\ c^*\ }h^{p+q+r+s}\bigl((X\times X)^{p+r},(X\times X)^{p+r-1}\bigr)\xrightarrow{\ \Delta^*\ }h^{p+q+r+s}(X^{p+r},X^{p+r-1}),$$
where $\boxtimes$ is the external product and $c$ collapses the summands of
$(X\times X)^{p+r}/(X\times X)^{p+r-1}$ other than
$X^p/X^{p-1}\wedge X^r/X^{r-1}$. The same construction pairs the relative groups
$h^m(X,X^{p-1})$ and $h^n(X,X^{r-1})$ into $h^{m+n}(X,X^{p+r-1})$, so the
$W$-terms of the relative skeletal tower are paired with one another as well. The
construction is natural in morphisms of theories and under a cellular map
$g:X\to Y$ when the chosen filtered diagonals satisfy
$(g\times g)\Delta_X=\Delta_Yg$. No $E_1$ naturality is asserted for arbitrary
cellular maps equipped with independently chosen diagonal approximations. From
$E_2$ onward the product is the natural cup product. No associativity, graded
commutativity or unitality is asserted for $\mu_1$, and for a general admitted $\Delta$ each of
these properties can fail: step 7.2 records an explicit admissible cellular approximation whose
first-page pairing is not associative.

**(b) Leibniz rule and descent to $E_2$.** The pairing of the relative skeletal
tower and its cofiber terms is compatible with the tower structure maps and
relative connecting maps. Consequently
$$d_1\bigl(\mu_1(x,y)\bigr)=\mu_1(d_1x,y)+(-1)^{p+q}\mu_1(x,d_1y)\qquad(x\in E_1^{p,q},\ y\in E_1^{r,s}).$$
Consequently $\mu_1$ carries pairs of $d_1$-cycles to $d_1$-cycles and carries
the product of a $d_1$-cycle with a $d_1$-boundary into the $d_1$-boundaries, so
it induces a well-defined bilinear pairing
$$\mu_2^{p,q;r,s}:E_2^{p,q}\times E_2^{r,s}\longrightarrow E_2^{p+r,q+s}$$
on $E_2=H(E_1,d_1)$.

**(c) Bigraded rings from the second page on.** The pairing $\mu_2$ makes $E_2$ a
unital associative graded-commutative bigraded ring, and under the natural
isomorphism $E_2^{p,q}\cong H^p(X;h^q(*))$ of
[[thm-cohomological-atiyah-hirzebruch-spectral-sequence]] the product $\mu_2$
corresponds to the graded cup product; in particular the $E_2$ product does not
depend on the chosen cellular approximation of the diagonal. For every $r\ge2$
the induced product makes $E_r$ a unital associative graded-commutative bigraded
ring with
$$d_r\bigl(\mu_r(x,y)\bigr)=\mu_r(d_rx,y)+(-1)^{p+q}\mu_r(x,d_ry)\qquad(x\in E_r^{p,q},\ y\in E_r^{s,t}),$$
and $E_{r+1}\cong H(E_r,d_r)$ is an isomorphism of bigraded rings. The filtration
is multiplicative, $F^p\cdot F^q\subseteq F^{p+q}$, and the stable product makes
$E_\infty\cong\operatorname{gr}_Fh^*(X)$ an isomorphism of graded rings.

## Facts & Assumptions

**Given:** The finite CW complex $X$ with its skeleta, a cellular approximation $\Delta$ of the diagonal, and the coherent external product data of the statement: the natural bilinear relative pairings, the unit, associativity, graded commutativity, suspension compatibility and the two relative connecting-map Leibniz identities.

[F1] The cohomological AHSS of the finite CW complex $X$ has $E_1^{p,q}=h^{p+q}(X^p,X^{p-1})$, differentials $d_r:E_r^{p,q}\to E_r^{p+r,q-r+1}$, second page $E_2^{p,q}\cong H^p(X;h^q(*))$, and stable page $E_\infty^{p,q}\cong F^ph^{p+q}(X)/F^{p+1}h^{p+q}(X)$, where $F^p$ is the image of $h^{p+q}(X,X^{p-1})\to h^{p+q}(X)$ ([[thm-cohomological-atiyah-hirzebruch-spectral-sequence]], [[def-exact-couple]], [[def-skeletal-filtration-for-generalized-cohomology]]).

[F2] In the product CW structure the cells are the products of cells of $X$, with dimensions adding. Hence the $n$-skeleton is $(X\times X)^n=\bigcup_{i+j\le n}X^i\times X^j$ and its quotient by the previous skeleton is the wedge $\bigvee_{i+j=n}X^i/X^{i-1}\wedge X^j/X^{j-1}$. A cellular map $f:X\to X\times X$ satisfies $f(X^n)\subseteq(X\times X)^n$ for every $n$, and the cellular-approximation theorem supplies such an approximation $\Delta$ of the diagonal, so $\Delta$ induces a map of pairs $(X^{p+r},X^{p+r-1})\to((X\times X)^{p+r},(X\times X)^{p+r-1})$ ([[thm-cellular-approximation-for-maps-of-cw-pairs]]).

[F3] (Cited standard multiplicative structure of a pairing of filtering towers.) Dugger §3.1 uses the relative tower $W(A,E)_n=F(A/A_{n-1},E)$ and its cofiber terms $B(A,E)_n=F(A_n/A_{n-1},E)$, and obtains a pairing of spectral sequences from the compatible pairings
$$(A\times B)/(A\times B)_{q+t-1}\to A/A_{q-1}\wedge B/B_{t-1},\qquad (A\times B)_{q+t}/(A\times B)_{q+t-1}\to A_q/A_{q-1}\wedge B_t/B_{t-1}$$
built from a multiplication $E\wedge E\to E$. A pairing of spectral sequences is compatible with every page differential, with the Koszul sign, so on the first page $d_1$ obeys the Leibniz rule. Dugger's Theorem 3.4 proves that in the diagonal case there is a natural isomorphism of rings $\bigoplus_{p,q}E_2^{p,q}(A,E)\cong\bigoplus_{p,q}H^q(A;E_{-p-q})$ with the graded cup product on the right. Miller, MIT 18.906, Lecture 29, printed pp. 100–101, records the corresponding list of properties for a cohomological spectral sequence built from a CW filtration with a chosen skeletal approximation of the diagonal: each $E_r^{*,*}$ is a commutative bigraded algebra, $d_r(xy)=(d_rx)y+(-1)^{|x|}x(d_ry)$, the isomorphism $E_{r+1}\cong H(E_r)$ is one of bigraded algebras, $E_2^{*,*}=H^*(B;H^*(p^{-1}(-)))$ as bigraded algebras, $F^sH^n\cdot F^{s'}H^{n'}\subseteq F^{s+s'}H^{n+n'}$, and $E_\infty\cong\operatorname{gr}H^*$ as algebras. Applied to the pairing of the relative skeletal tower and its cofiber terms constructed in steps 1.1–3.1, this standard multiplicative structure gives the first-page Leibniz rule and, for every $r\ge2$, a unital associative graded-commutative bigraded ring whose differential is a derivation; it also identifies the $E_2$ product with the graded cup product (Dugger, *Multiplicative structures on homotopy spectral sequences II*, §3.1 with Theorem 3.4, printed pp. 4–5; Miller, MIT 18.906, Lecture 29, printed pp. 100–101).

## Proof

**Proof technique:** direct.

**Given:** A finite CW complex $X$ with its skeleta, a cellular approximation $\Delta$ of the diagonal, the skeletal exact couple of [F1], and the coherent external product data of the statement.

1.1 Let $x\in E_1^{p,q}=h^{p+q}(X^p,X^{p-1})$ and $y\in E_1^{r,s}$. The external product is a class $x\boxtimes y$ in the cohomology of the quotient $X^p/X^{p-1}\wedge X^r/X^{r-1}$ of the product of pairs $\bigl(X^p\times X^r,\,X^{p-1}\times X^r\cup X^p\times X^{r-1}\bigr)$. By [F2] the quotient $(X\times X)^{p+r}/(X\times X)^{p+r-1}$ is the wedge of the blocks $X^i/X^{i-1}\wedge X^j/X^{j-1}$ with $i+j=p+r$, so collapsing every block other than $(i,j)=(p,r)$ defines a map $c$ whose pullback carries a class on that block to a class on the pair $\bigl((X\times X)^{p+r},(X\times X)^{p+r-1}\bigr)$ restricting to the given one on the block. [F2, given]

2.1 By [F2] the cellular $\Delta$ satisfies $\Delta(X^{p+r})\subseteq(X\times X)^{p+r}$ and $\Delta(X^{p+r-1})\subseteq(X\times X)^{p+r-1}$, so it induces a map of these pairs and $\Delta^*c^*(x\boxtimes y)\in h^{p+q+r+s}(X^{p+r},X^{p+r-1})=E_1^{p+r,q+s}$; define $\mu_1(x,y)$ to be this element. Since $\boxtimes$ is bilinear and natural and $c^*$ and $\Delta^*$ are additive, $\mu_1$ is bilinear and natural in morphisms of theories. A cellular map $g:X\to Y$ intertwines the two first-page pairings when its chosen filtered diagonals obey $(g\times g)\Delta_X=\Delta_Yg$; with independently chosen approximations this square need not commute, so no stronger $E_1$ naturality is claimed. [F1, F2, step 1.1, given]

2.2 The same construction with the pairs $(X,X^{p-1})$ and $(X,X^{r-1})$ in place of $(X^p,X^{p-1})$ and $(X^r,X^{r-1})$ pairs $h^m(X,X^{p-1})\times h^n(X,X^{r-1})$ into $h^{m+n}(X,X^{p+r-1})$. The external product lies in the relative group for $\bigl(X\times X,\,X^{p-1}\times X\cup X\times X^{r-1}\bigr)$, and $\Delta$ is a map from $(X,X^{p+r-1})$ to this pair: for $z\in X^{p+r-1}$ the staircase condition puts $\Delta(z)$ in some $X^i\times X^j$ with $i+j\le p+r-1$, hence $i\le p-1$ or $j\le r-1$. Write $W_p^m=h^m(X,X^{p-1})$ and $\mu_W:W_p^m\times W_r^n\to W_{p+r}^{m+n}$ for these pairings. [F1, F2, step 1.1, given]

3.1 The maps $W_{p+1}^m\to W_p^m$ induced by the inclusions $X^{p-1}\subseteq X^p$, and the maps from the cofiber terms $h^m(X^p,X^{p-1})$ occurring in their long exact sequences, commute with the pairings of steps 2.1 and 2.2 by naturality of the external product and of $\Delta^*$. The connecting morphisms commute with these pairings by the two relative connecting-map Leibniz identities assumed in the statement. Thus $\mu_W$ and $\mu_1$ form the compatible pairing of the relative skeletal tower and its cofiber terms used in [F3]. [F2, F3, step 2.1, step 2.2, given]

3.2 The filtration is multiplicative. Let $u\in F^ph^m(X)$ and $v\in F^rh^n(X)$. By [F1] choose relative lifts $\tilde u\in W_p^m$ and $\tilde v\in W_r^n$. By step 2.2 the image of $\mu_W(\tilde u,\tilde v)\in W_{p+r}^{m+n}$ in $h^{m+n}(X)$ is $u\cdot v$, because both are obtained by pulling the external product back along $\Delta$. Hence $u\cdot v\in F^{p+r}h^{m+n}(X)$. [F1, step 2.2, given]

4.1 By step 3.1 the construction is a pairing of the relative skeletal towers and their cofiber terms. The pairing-of-spectral-sequences result in [F3] therefore applies from the first page, and compatibility with the first differential is precisely
$$d_1\bigl(\mu_1(x,y)\bigr)=\mu_1(d_1x,y)+(-1)^{p+q}\mu_1(x,d_1y).$$
The sign uses the total cohomological degree $p+q$ of $x$, as required by the connecting-map Leibniz identity. [F3, step 3.1, given]

4.2 The stable product is the associated-graded product. For the classes of step 3.2 the image of $\mu_W(\tilde u,\tilde v)$ in the quotient $F^{p+r}h^{m+n}(X)/F^{p+r+1}h^{m+n}(X)$ is exactly the class of $u\cdot v$. Under the identification $E_\infty^{p,q}\cong F^ph^{p+q}(X)/F^{p+1}h^{p+q}(X)$ of [F1], the pairing of the stable classes is therefore the associated-graded product of $h^*(X)$. [F1, step 3.2]

5.1 Consequently $\mu_1$ descends to the homology $E_2=H(E_1,d_1)$: if $x,y$ are $d_1$-cycles then step 4.1 gives $d_1\mu_1(x,y)=0$, so $\mu_1(x,y)$ is a cycle; if $x=d_1x'$ and $y$ is a cycle then step 4.1 gives $\mu_1(d_1x',y)=d_1\mu_1(x',y)$, and symmetrically for a boundary in the second variable, so $\mu_1$ kills $B\otimes Z+Z\otimes B$. A bilinear map vanishing on those subgroups induces a unique bilinear map on $Z/B\otimes Z/B$, which is the asserted pairing $\mu_2$ on $E_2$. [F1, step 4.1, algebra]

6.1 The pairing constructed in steps 1.1 to 3.1 is the pairing of the relative skeletal tower and its cofiber terms induced by the external product and $\Delta$, and step 5.1 gives its descent $\mu_2$. By [F3], for every $r\ge2$ the page $E_r$ is a unital associative graded-commutative bigraded ring, each $d_r$ is a derivation, the comparisons $E_{r+1}\cong H(E_r,d_r)$ are isomorphisms of bigraded rings, and the $E_2$ product corresponds to the graded cup product under $E_2^{p,q}\cong H^p(X;h^q(*))$. Since the latter product is intrinsic and natural in cellular maps, it is independent of the chosen cellular approximation and supplies the asserted natural multiplicative structure from $E_2$ onward. [F1, F3, step 5.1]

7.1 Steps 1.1 to 5.1 establish the first-page pairing of (a) and the Leibniz rule and descent of (b); steps 3.2, 4.2 and 6.1 establish the multiplicative filtration, the associated-graded stable product and the ring structure with derivations from the second page on of (c). All assertions hold for the fixed cellular approximation $\Delta$ and, from $E_2$ on, independently of it. [step 5.1, step 3.2, step 4.2, step 6.1]

7.2 The restriction in (a) is sharp: the first-page pairing is not associative in general, and the failure is visible in the simplest example. Take $X=[0,1]$ with vertices $v_0,v_1$ and oriented edge $e$, ordinary integral cohomology as $\widetilde h$, and in the square the cellular path $(0,0)\to(0,1)\to(1,1)\to(1,0)\to(0,0)\to(0,1)\to(1,1)$ parameterized linearly on its six segments; the path is cellular and homotopic to the diagonal relative to the endpoints, so it is an admitted $\Delta$, and its image on the oriented edge is $\Delta_*[e]=2(v_0\times e)+2(e\times v_1)-(v_1\times e)-(e\times v_0)$. By step 1.1 the extension by zero of the external product is supported on the single block whose two degrees match those of the factors, so for the product of a class in $E_1^{0,0}$ with one in $E_1^{1,0}$ that block is $X^0/X^{-1}\wedge X^1/X^0$, whose cells are $v_0\times e$ and $v_1\times e$: the terms $2(v_0\times e)$ and $-(v_1\times e)$ of $\Delta_*[e]$ contribute, and the term $-(e\times v_0)$ does not. Hence the class $a$ with $a(v_0)=1$, $a(v_1)=0$ and the class $z$ with $z(e)=1$ satisfy $\mu_1(a,a)=a$ and $\mu_1(a,z)=2z$ by step 2.1, so $\mu_1\bigl(\mu_1(a,a),z\bigr)=2z\neq4z=\mu_1\bigl(a,\mu_1(a,z)\bigr)$ in $E_1^{1,0}\cong\mathbb Z$. The first page therefore carries the pairing and Leibniz structure of (a) and (b) but is not a ring for this admissible $\Delta$. The failure does not descend to $E_2$: here the first differential is the cellular coboundary, so $z$ is a $d_1$-boundary and $a$ is not a $d_1$-cycle, while $d_1z=0$ because $E_1^{2,0}=h^2(X,X)=0$; hence $z$ and $\mu_1(a,z)=2z$ vanish in $E_2$, $E_2^{1,0}=H^1(X;\mathbb Z)=0$, and by step 6.1 the induced product on $E_2$ is still the cup product. [given, step 1.1, step 2.1, step 5.1, step 6.1]

8.1 Steps 1.1 to 7.2 prove, for a finite CW complex and a cellular approximation of the diagonal, the typed first-page pairing with its Leibniz rule, its descent to $E_2$, and the bigraded ring structure with derivations from the second page on, together with the multiplicative filtration and the associated-graded stable product; they also record that the first page itself is not a ring in general. [step 7.1, step 7.2] ∎

## Source notes

Compare [Dugger](https://pages.uoregon.edu/ddugger/multb.pdf), *Multiplicative structures on homotopy spectral sequences II*, §2.2, §3.1 and §3.3 with Theorem 3.4, printed pp. 2–5. His §3.1 pairs the filtering towers by the maps $(A\times B)/(A\times B)_{q+t-1}\to A/A_{q-1}\wedge B/B_{t-1}$ and $(A\times B)_{q+t}/(A\times B)_{q+t-1}\to A_q/A_{q-1}\wedge B_t/B_{t-1}$; the proof of Theorem 3.4 computes the pairing on the first page and finds that it differs from the product of coefficient-ring values by the Koszul sign $(-1)^{sq}$, the sign already used in defining the graded cup product of §2.2; and in the diagonal case, where he needs only a map $\Delta'$ homotopic to the diagonal that preserves the cellular filtration, the theorem itself states "there is a natural isomorphism of rings $\bigoplus_{p,q}E_2^{p,q}(A,E)\cong\bigoplus_{p,q}H^q(A;E_{-p-q})$", the right-hand side being the graded cup product. That is the identification used in [F3] and in step 6.1, and the first-page pairing compared in that proof, up to the Koszul sign, is the one reconstructed in steps 1.1–3.1, including the extension by zero on the individual blocks of the quotient by the previous product skeleton.

Compare [Miller](https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf), Lecture 29, printed pp. 100–101, for the list of properties carried by the pages from the second page on: each $E_r^{*,*}$ is a commutative bigraded algebra, $d_r(xy)=(d_rx)y+(-1)^{|x|}x(d_ry)$, $E_{r+1}\cong H(E_r)$ as bigraded algebras, $E_2^{*,*}=H^*(B;H^*(p^{-1}(-)))$ as bigraded algebras, $F^sH^n\cdot F^{s'}H^{n'}\subseteq F^{s+s'}H^{n+n'}$ and $E_\infty\cong\operatorname{gr}H^*$ as algebras. Miller states this list for the cohomological spectral sequence of a fibration, says that its construction from a CW filtration "requires us to choose a skeletal approximation of the diagonal", and then declines to justify the multiplicative behaviour further. Dugger's theorem is stated for the homotopy spectral sequence of a ring spectrum and Miller's list for the cohomological case; neither states the multiplicative structure of the cohomological AHSS of an abstract generalized cohomology theory with external-product data verbatim. That is why this item proves the first-page pairing, its Leibniz rule and its descent to $E_2$ directly from the stated hypotheses, and cites the standard multiplicative structure of a pairing of filtering towers, the common content of both sources, only for the ring structure of the pages from $E_2$ on.

The failure recorded in step 7.2 is the reason the earlier form of this item, which asserted a bigraded ring on every page including $E_1$, cannot be kept. It also shows why independently chosen filtered diagonals do not give a natural first-page product: homotopic diagonal approximations can induce different block multiplicities on $E_1$. On the interval the six-segment path traces the boundary square once and then the left and top edges from $(0,0)$ to $(1,1)$, so it is homotopic to the diagonal relative to the endpoints; the multiplicity $2$ on the block $\{v_0,v_1\}\times e$ is not homotopy invariant there, and the class $z$ that exhibits the failure does not survive to $E_2$: the first differential is the cellular coboundary, so $z$ is a $d_1$-boundary and $E_2^{1,0}=H^1(X;\mathbb Z)=0$. The pages from $E_2$ on are therefore unaffected, which is exactly the sense in which diagonal homotopies act trivially from the second page on. Compare [Ji](https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf), §1.3, printed p. 4, where it is stated that as given the Atiyah–Hirzebruch spectral sequence gives no information about the multiplicative structure of a generalized cohomology theory: a first-page ring is not available in the literature and is not asserted here.

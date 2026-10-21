---
id: lem-grid-filtered-destabilization-domain-map
kind: lemma
title: "The filtered destabilization-domain map and its cone target"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
  - lem-grid-alexander-grading-integral
  - lem-grid-rectangle-boundary-square-zero-and-filtration
  - lem-grid-rectangle-differential-squares-to-zero
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Definitions 13.3.7–13.3.10 and Lemmas 13.3.11–13.3.15; the eleven juxtaposition types and their cancellation scheme"
---

## Statement

Let $G'$ be an $X$ stabilization of type southwest of a knot grid $G$. In the four cells incident to the new crossing $c$, the northwest cell contains $X_1$, the northeast cell contains the new $O_1$, the southeast cell contains $X_2$, and the southwest cell is empty. Let $O_2$ be the old $O$ in the row of $X_2$. Write $I$ for states containing $c$, and identify such a state $\mathbf y$ with $e(\mathbf y)=\mathbf y\setminus\{c\}$ in $G$. Retain the independent variables of all markings.

An incoming left domain is either the zero domain or a nonnegative domain from $\mathbf x$ to $\mathbf y\in I$ with the following properties. At every state corner other than $c$, at least three adjacent cell multiplicities vanish; near $c$, three multiplicities equal $k$ and the southwest multiplicity is $k-1$; exactly $2k+1$ coordinates of $\mathbf y$ are absent from $\mathbf x$. For an incoming right domain, replace the southwest exception by southeast multiplicity $k+1$, and the number of absent coordinates by $2k+2$; the zero domain is not of right type. Denote these sets by $\pi^{iL},\pi^{iR}$. Define $D^{iL},D^{iR}$ by counting their targets $e(\mathbf y)$, with weight $\prod_{j\ne1}U_j^{O_j(p)}$, omitting the power of the new variable. Then
$$D=(D^{iL},D^{iR}):C^-(G')\longrightarrow\operatorname{Cone}(U_1+U_2:C^-(G)[U_1]\to C^-(G)[U_1])$$
is a finite polynomial-module chain map preserving Maslov degree and not increasing Alexander filtration. The first cone summand is shifted down by one in both degree and filtration. Its associated-graded map counts only domains avoiding $X_1,X_3,\ldots$; these have complexity at most two and give exactly the usual graded destabilization map: deletion of $c$ on $I$ in the first component, and rectangles through $X_2$ on the other states in the second component.

## Statement references

[[def-grid-diagram-for-an-oriented-knot]]

[[alg-grid-knot-floer-complex]]

[[lem-grid-alexander-grading-integral]]

[[lem-grid-rectangle-boundary-square-zero-and-filtration]]

[[lem-grid-rectangle-differential-squares-to-zero]]

[Ozsvath, Stipsicz and Szabo, *Grid Homology for Knots and Links*, §13.3.2](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** The stabilized grid, marking labels, domain multiplicity conditions, and weighted map in the statement. The complexity of a nonzero incoming domain is the number of horizontal segments of its boundary; the zero domain has complexity one.

[F1] [[lem-grid-alexander-grading-integral]] supplies both rectangle grading formulas.

[F2] [[lem-grid-rectangle-boundary-square-zero-and-filtration]] supplies the two decompositions of nonreturning empty rectangle pairs and their equal monomial weights.

[F3] [[lem-grid-rectangle-differential-squares-to-zero]] proves the rectangle differentials square to zero.

## Proof

1.1 Follow the alternating horizontal and vertical boundary segments of an incoming domain, starting at the component of $\mathbf x$ on the new vertical circle. At an ordinary corner, three zero adjacent coefficients force the next segment and its direction; there is no choice to add an annulus without violating this condition at a state corner. The first segment and the distinguished vertical circle cut off a unique empty rectangle. Removing it gives the next boundary segment; remove the next forced rectangle as well. These two removals reduce the complexity by two and the three common local multiplicities at $c$ by one. Continuing ends at the zero domain for left type or the southeast rectangle for right type. This proves by induction a factorization into $m-1$ empty rectangles for complexity $m$, unique among factorizations in which every rectangle has a side on the new vertical circle. It also proves that left type has odd complexity $2k+1$ and right type even complexity $2k+2$. Both are bounded by the number of state coordinates. Since the set of empty rectangles is finite, only finitely many such factorizations and incoming domains occur. [given, construct]

1.2 Let $d'$ be the differential of $G'$ and $d$ that of $G$. To compare $D d'$ with the cone differential followed by $D$, lift rectangles of $G$ to $G'$ using the deletion correspondence. There are five possible rectangle types: A avoids $c$ and is empty; B has $c$ at a corner and is empty; C has $c$ in the interior of a side and is empty; D contains the initial-state point $c$ in its interior and no other state point; E contains $c$ in its interior while its initial state does not contain $c$, and is empty. Rectangles in $G$ correspond to types A and D. Rectangles counted in $d'$ have types A, B, C, E. In the cone there are also invisible terms, from its first to second copy, with coefficient $U_1+U_2$. [given, construct]

2.1 Apply [F1] to these $m-1$ rectangles. For a domain $p$ ending at $\mathbf y$, omission of the $U_1$ power gives the changes $A(\mathbf x)-A(U^{O_{\ne1}(p)}\mathbf y)=n_X(p)-O_1(p)$ and $M(\mathbf x)-M(U^{O_{\ne1}(p)}\mathbf y)=m-1-2O_1(p)$. For left type, $O_1(p)=k$ and $X_2(p)=k$; for right type, $O_1(p)=k$ and $X_2(p)=k+1$. Deleting $c$ raises the degree and Alexander value of a state in $I$ by one: in the finite pair-count formula, the new state corner contributes a loss of one in $M_O$ and none in $M_X$, so the Alexander loss is one as well. Account also for the downward shift in the first cone summand. The weighted output then has the same Maslov degree as its input, and its filtration drop is exactly $X_1(p)+X_3(p)+\cdots$, a nonnegative integer. [F1, step 1.1, algebra]

2.2 Classify a composition of an incoming domain of complexity $m$ and a rectangle by the rectangle type and number of common moving corners. The possible types are (A-0), (A-1), (A-2), (A-3); (B-0), (B-3), (B-4); (C-1); (D-0), (D-1); and the invisible type I. Here (B-0) has $m=1$, (B-3) has $m=3$, (B-4) has $m=2$; (A-2) requires $m\ge4$, (A-3) requires $m\ge3$, and (C-1),(D-1) require $m\ge2$. These are exhaustive: at an ordinary corner the three zero coefficients force the outgoing rectangle edge; counting its endpoints leaves precisely the listed numbers of common corners. A rectangle of type E cannot be followed by an incoming domain: following the latter's forced boundary from the new vertical circle would put either an initial-state point inside that rectangle or a terminal-state point in the incoming domain. The only extra edge in a type-D composition is the state point $c$, giving (D-0) or (D-1). [step 1.1, step 1.2, construct]

3.1 Among (A-3) compositions, those wrapping through the horizontal row of $O_2$ are exceptional; those wrapping vertically through $O_1$ or horizontally through the row of $O_1$ are ordinary. Among (C-1) compositions, the exceptional case is a preceding rectangle containing both $X_1,O_1$ and an incoming domain of even complexity; the other two cases contain $X_1$ alone, or contain $X_2$ alone with odd complexity. Among (D-1) compositions, wrapping through the row of $O_2$ is exceptional; wrapping through $O_1$ is ordinary. Let $\delta$ be the incoming domain's innermost height for the cases involving $X_2$ or both $X_1,O_1$, and its innermost width for the case containing $X_1$ alone. Thus $\delta$ is a positive number of row or column strips. This specifies all subcases without imposing an $X$ exclusion. [step 2.2, construct]

3.2 Contributions of (A-0) cancel by commuting their disjoint boundary changes. Contributions of (A-1) cancel by cutting at the unique ordinary reflex corner in its two directions. The two resulting domain decompositions have the same total multiplicities, hence the same monomial. An (A-2) composition of incoming complexity $m+2$ cancels with (D-0) of complexity $m>1$: slide the cut through the two consecutive boundary segments next to $c$, thereby moving the state point $c$ from a counted incoming domain into the lifted rectangle's interior. The same slide for (D-0) of complexity one yields (B-3) of complexity three. These are inverse cut operations, so every contribution in these classes appears once in its indicated pair. [F2, step 1.1, step 2.2, construct]

4.1 The two (B-4) domains are the vertical thin annulus through $O_1,X_2$ and horizontal thin annulus through $O_2,X_2$. Their weights are respectively $U_1$ and $U_2$, since in this case the rectangle, rather than the incoming domain, carries that variable. Their sum cancels the invisible term applied to the zero incoming domain. A (B-0) rectangle ending at $c$ cancels with an ordinary (A-3) composition of complexity three: adjoin the row or column annulus through $O_1$ according as $c$ is the rectangle's upper-left or lower-right corner, and cut at the other two corners. This operation inserts two extra boundary segments and reverses when that annulus is removed. The added $O_1$ multiplicity lies in the incoming part, whose weight omits $U_1$, so the coefficients agree. [step 1.2, step 2.2, step 3.1, construct, algebra]

4.2 For an ordinary (C-1) composition $r*p$ containing $X_2$, adjoin the horizontal thin annulus through $O_1$; for the case containing $X_1$ alone, adjoin the vertical thin annulus through $O_1$. If $\delta=1$, the forced alternative cut is (D-1) of the same incoming complexity; if $\delta>1$, it is ordinary (A-3) with complexity greater by two. In both cases the alternative domain has exactly one contributing cut: its location is forced by the first state point in the added strip. Removing the strip recovers $r*p$, so these cancellations are bijections. Again the added annulus changes only the omitted $O_1$ exponent in the incoming part. Therefore each pair has equal coefficient. [step 1.1, step 3.1, construct, algebra]

5.1 For an exceptional (C-1) composition of even complexity $2k$, the composite itself is an incoming left domain of complexity $2k+1$ and gives an invisible contribution. Adjoin the horizontal thin annulus through $O_2$ and use the forced alternative cut. If $\delta=1$, that cut has type exceptional (D-1) and complexity $2k$; if $\delta>1$, it has type exceptional (A-3) and complexity $2k+2$. The (C-1) rectangle contributes an additional $U_1$ because it contains $O_1$; the annulus-added alternative contributes an additional $U_2$; the invisible term contributes $U_1+U_2$. The remaining monomial is common to all three, so their total vanishes. Removing the added strip or viewing the invisible incoming domain with its first cut recovers the same triple, with no duplication. This exhausts exceptional (D-1), exceptional (A-3) and invisible terms of complexity greater than one. Together with the preceding cancellation cases, every term in $D d'+d_{\mathrm{cone}}D$ has cancelled. Thus $D$ is a chain map. [step 1.2, step 2.2, step 3.1, step 3.2, step 4.1, step 4.2, algebra]

6.1 By step 2.1, the associated-graded map retains just domains avoiding $X_1,X_3,\ldots$. The northwest cell contains $X_1$ and has local multiplicity $k$ in either nontrivial type. Avoiding $X_1$ therefore forces $k=0$. Left type would then have southwest multiplicity $-1$, so its only surviving term is the separately allowed zero domain. Right type with $k=0$ has complexity two and the forced factorization has one rectangle. Thus the surviving domains have complexity one or two. The complexity-one term deletes $c$ from a state in $I$; complexity two is precisely an empty rectangle through $X_2$ ending in $I$, with no other $X$, weighted by its $O$-monomial. This is the stated associated-graded map. Finiteness and grading were proved above, and the full chain-map identity was proved in step 5.1. [F3, step 1.1, step 2.1, step 5.1, construct] ∎

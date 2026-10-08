---
id: lem-cg-affine-alcove-separation-and-facet-types
kind: lemma
title: "Alcove separation, facet reflections, panel types, and triviality of the fundamental alcove stabilizer"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 3
deps:
  - def-cg-affine-root-hyperplane-reflection-and-alcove
  - lem-cg-affine-reflection-identities-and-local-finiteness
  - lem-cg-highest-root-and-fundamental-alcove
  - lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces
  - lem-locally-convex-closures-and-finite-compact-convex-hulls
  - thm-locally-compact-normed-space-iff-finite-dimensional
  - lem-compact-closed-balls-in-a-locally-compact-metric-space
  - thm-cauchy-schwarz-in-an-inner-product-space
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "J. Morgan, Lie Groups Fall 2025, Lecture XII: The Affine Weyl Group (Columbia course notes)"
      url: "https://www.math.columbia.edu/~jmorgan/LieGroups2025/2025LGLecture12.pdf"
      locator: "§2.4, Proposition 2.4 states that the reflections in the walls of a fixed affine chamber generate the affine reflection group and act simply transitively on chambers. Its proof refers to a general argument in Lecture IX, §5.3 rather than giving the argument here; it is context only, and the local gallery and shortest-word arguments are proved in this item. §2.1, Lemma 2.1 gives local finiteness and convex open chambers. Corollary 2.2's asserted bound of at most 2r chambers for r walls is false in rank at least three (the A3 central arrangement has 6 walls and 24 chambers); no such bound is used."
    - title: "J. Morgan, Lie Groups Fall 2025, Lecture IX: Root Systems (Columbia course notes)"
      url: "https://www.math.columbia.edu/~jmorgan/LieGroups2025/2025LGLecture9.pdf"
      locator: "§5.3, PDF pp. 12–13: the complete finite-Weyl-chamber argument first obtains transitivity by a generic segment and then proves simple transitivity using repeated-wall deletion in a shortest word. This supports the proof pattern only; it treats a finite central root arrangement, while this item proves the local-finiteness and affine-wall details itself."
    - title: "P. Magyar, Schubert classes of a loop group (arXiv:0705.3826)"
      url: "https://arxiv.org/pdf/0705.3826"
      locator: "§1.4–1.5, PDF pp. 4–5: in the SL_n/type-A setting, the affine group uses Q∨ translations while the extended group uses P∨, and the subgroup stabilizing the fundamental alcove is identified with P∨/Q∨. This is a type-A comparison only, not a proof of the general stabilizer claim; the present proof is local and uses no lattice-quotient classification."
---

## Statement

Use the affine-wall notation of [[def-cg-affine-root-hyperplane-reflection-and-alcove]] and let $A$ be the componentwise fundamental alcove from [[lem-cg-highest-root-and-fundamental-alcove]]. Write $\Phi=\bigsqcup_{i\in I}\Phi_i$ for its nonempty irreducible components, $S_i$ for the simple-root indices in $\Phi_i$, and $\theta_i$ for the highest root of that component. Put
$$J:=\bigsqcup_{i\in I}\bigl(\{0_i\}\sqcup S_i\bigr).$$
For $a\in J$, let $F_{i,0_i}$ be the facet of $\overline A$ on $H_{\theta_i,1}$ and let $F_{i,s}$ be the facet on $H_{\alpha_s,0}$ for $s\in S_i$. Write $s_{i,0_i}:=r_{\theta_i,1}$ and $s_{i,s}:=r_{\alpha_s,0}$. If $\Phi=\varnothing$, take $I=J=\varnothing$ and $A=\{0\}$.

For these labels, write $H_{i,0_i}:=H_{\theta_i,1}$ and $H_{i,s}:=H_{\alpha_s,0}$. For any wall $H$, write $r_H$ for its Euclidean reflection; this is independent of the root-level representation by the uniqueness in [[lem-cg-affine-reflection-identities-and-local-finiteness]].

For alcoves $C,C'$, define $\operatorname{Sep}(C,C')$ to be the set of affine walls whose two open half-spaces contain the interiors of $C,C'$ on opposite sides.

**(1) Separation.** If $F$ is a facet of $\overline C$ on the wall $H$, then $r_H(C)$ is the other alcove adjacent to $C$ across $F$, and
$$\operatorname{Sep}(C,r_H(C))=\{H\}.$$
For any three alcoves $C,C',C''$,
$$\operatorname{Sep}(C,C')\mathbin{\triangle}\operatorname{Sep}(C,C'')=\operatorname{Sep}(C',C''),$$
where $\triangle$ is symmetric difference.

**(2) Fundamental stabilizer and types.** The stabilizer $\operatorname{Stab}_{W_a}(A)=\{g\in W_a:g(A)=A\}$ is trivial; the same holds for $U=\operatorname{int}(\overline A)=A$. For each alcove $C\in W_a\cdot A$ and each facet $F$ of $\overline C$, there are unique $g\in W_a$ and $a\in J$ such that $C=g(A)$ and $F=g(F_a)$. The index $a$ is the **type** of $F$.

**(3) Panel rules.** If adjacent alcoves $C,C'\in W_a\cdot A$ share a facet $F$, its type computed from either alcove is the same. Every alcove in $W_a\cdot A$ has exactly one facet of each type in $J$. The reflection in the wall of a facet of type $a$ of $g(A)$ is $g\,s_a\,g^{-1}$.

These statements include reducible systems: there is one affine label $0_i$ for each nonempty component, not one global highest-root wall. In dimension zero the statements reduce to the single alcove $\{0\}$ and the empty type set. No axiom of choice is used.

## Facts & Assumptions

**Given:** A finite-dimensional real inner-product space and a supplied reduced crystallographic root system spanning it, with the affine walls, reflections, alcoves, affine reflection group, and fundamental alcove defined above.

[F1] An alcove is a connected component of the complement of the affine-wall arrangement ([[def-cg-affine-root-hyperplane-reflection-and-alcove]]).

[F2] The affine reflection group $W_a$ is generated by the wall reflections ([[def-cg-affine-root-hyperplane-reflection-and-alcove]]).

[F3] Each component closure is a geometric simplex with the listed $|S_i|+1$ facets ([[lem-cg-highest-root-and-fundamental-alcove]]).

[F4] The full fundamental alcove is the finite product of these component alcoves; the item also treats the empty system and rank-one factors ([[lem-cg-highest-root-and-fundamental-alcove]]).

[F5] A finite-dimensional real vector space is not a finite union of proper linear subspaces ([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]).

[F6] The convex hull of a finite set of points is compact ([[lem-locally-convex-closures-and-finite-compact-convex-hulls]]).

[F7] Each wall reflection fixes its wall and is the unique Euclidean reflection there, reversing the normal direction ([[lem-cg-affine-reflection-identities-and-local-finiteness]]).

[F8] The affine reflection group permutes the walls and alcoves ([[lem-cg-affine-reflection-identities-and-local-finiteness]]).

[F9] Every compact set meets only finitely many walls, and every alcove is open and convex ([[lem-cg-affine-reflection-identities-and-local-finiteness]]).

[F10] A finite-dimensional normed space is locally compact ([[thm-locally-compact-normed-space-iff-finite-dimensional]]).

[F11] In a locally compact metric space, each point has arbitrarily small compact closed balls ([[lem-compact-closed-balls-in-a-locally-compact-metric-space]]).

[F12] The inner product satisfies $|B(u,v)|\le\|u\|\,\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

**Proof technique:** local finite-wall galleries and deletion in a shortest word.

**Given:** The notation above. Until step 9.1, assume $\Phi\ne\varnothing$, so $\dim E>0$.

1.1 Let $O$ be a nonempty open subset of a finite-dimensional real affine space of positive dimension, and let $L_1,\dots,L_m$ be finitely many proper affine subspaces. If $m=0$, any point of $O$ works. Otherwise let $V_j$ be the direction subspace of $L_j$; each is proper. By [F5] choose $v\notin\bigcup_jV_j$, so $v\ne0$. Choose $p\in O$; openness gives an interval $(-\varepsilon,\varepsilon)$ with $p+tv\in O$. The line $p+\mathbb Rv$ meets each $L_j$ in at most one point, since two intersections would imply $v\in V_j$. The interval is infinite and only finitely many parameters are excluded, so some $p+tv$ lies in $O\setminus\bigcup_jL_j$. In dimension zero every proper affine subspace is empty, so the same avoidance conclusion holds. [F5, algebra, choose]

1.2 Let $V_i$ be the finite vertex set of $\overline{A_i}$. The componentwise simplex descriptions imply $\overline A=\prod_i\overline{A_i}$, and this product is the convex hull of the finite product $V=\prod_iV_i$: write each component point in barycentric coordinates and multiply the finitely many coordinate weights to obtain a convex combination of product vertices. For any alcove $C$, choose $y\in C$ and set $K=\operatorname{co}(V\cup\{y\})$. By [F6], $K$ is compact; it contains $\overline A$, $y$, and every segment joining $y$ to a point of $A$. By [F9], only finitely many walls meet $K$. [F3, F4, F6, F9, algebra, choose]

2.1 Every connected alcove lies strictly on one side of each wall, because it is connected and avoids that wall. Let $F$ be a facet of $\overline C$ on $H$, and choose a nonempty relatively open set $O\subseteq H$ in the relative interior of $F$. Pick $p_0\in O$. By [F10] and [F11], choose $r>0$ so the closed ball $K=\overline B(p_0,r)$ is compact; its open ball meets $O$ in a nonempty relatively open subset of $H$. By [F9] only finitely many walls meet $K$. For each such wall $H'\ne H$, the intersection $H'\cap H$ is either empty or a proper affine subspace of $H$; step 1.1 therefore gives $p\in O\cap B(p_0,r)$ on no other wall. Since every wall through $p$ would meet $K$, the finite list contains all walls relevant near $p$. By [F12] and the affine equations of those finitely many walls, a smaller open ball about $p$, contained in $K$, misses every wall except $H$. Its two half-balls lie in the two adjacent alcoves, and reflection $r_H$ exchanges them; hence $r_H(C)$ is the other alcove adjacent across $F$. For any other wall $H'$, that ball misses $H'$, so the two adjacent alcoves lie on the same side of $H'$, while $H$ separates them. Thus $\operatorname{Sep}(C,r_H(C))=\{H\}$. [F1, F7, F8, F9, F10, F11, F12, step 1.1, algebra]

3.1 Among the finitely many walls meeting $K$ from step 1.2, consider each distinct intersecting pair $H,H'$ and put $P=H\cap H'$. Distinct affine hyperplanes that intersect have codimension-two intersection, so $\operatorname{aff}(\{y\}\cup P)$ is a proper affine subspace: $y$ lies on no wall because $y\in C$. By step 1.1 choose $z\in A$ outside the finite union of these subspaces. The segment $[z,y]$ lies in $K$ and meets finitely many walls; it cannot meet two distinct walls at the same point, since that would put $z$ in one of the excluded affine spans. Neither endpoint lies on a wall, and a segment not contained in a hyperplane crosses it at most once. Thus its crossings occur one at a time. At any crossing point $q$, the segment lies in a compact ball around $q$ by [F10] and [F11]. That ball meets finitely many walls by [F9], and $q$ lies on only the crossed wall. By [F12], shrink to a neighborhood inside the ball that misses all the other walls. The two local sides belong to adjacent alcoves, so the successive components along the segment form a finite gallery. [F1, F9, F10, F11, F12, step 1.1, step 1.2, step 2.1, algebra]

3.2 For each wall, an alcove has one fixed sign with respect to its defining affine functional, by connectedness. Comparing these two signs wall by wall shows that a wall separates $C$ from $C''$ exactly when it separates exactly one of the pairs $(C,C')$ and $(C',C'')$. This is the symmetric-difference identity. [F1, step 2.1, algebra]

4.1 Let $G=\langle s_a:a\in J\rangle\le W_a$. Start with $A$ and follow the gallery of step 3.1 to any alcove $C$. Inductively suppose the current alcove is $h(A)$ for $h\in G$. Each of its facets is $h(F_a)$ for a unique $a\in J$, since $h$ is an isometry and $\overline A$ has exactly these facets. If the next gallery step crosses the wall $h(H_a)$, reflection in it is $h s_a h^{-1}$; by step 2.1 the next alcove is $h s_a(A)\in G\cdot A$. Therefore $G$ acts transitively on all alcoves. [F2, F3, F7, F8, step 2.1, step 3.1, algebra]

5.1 Every affine wall $H$ is a facet wall of some alcove. Take $p_0\in H$ and, by [F10] and [F11], a compact closed ball $K$ around it; only finitely many walls meet $K$ by [F9]. The intersections with $H$ of the listed walls other than $H$ are finitely many proper affine subspaces of $H$. Applying step 1.1 to their union in the relatively open set $H\cap\operatorname{int}(K)$ gives $p\in H$ on no other wall. The finite list includes every wall through $p$. By [F12], a smaller ball about $p$ contained in $K$ misses all listed walls other than $H$, hence meets the arrangement only in $H$. The two local alcoves on its sides share a relatively open subset of $H$ in their closures, so $H$ is a facet wall. By step 4.1 one such alcove is $h(A)$ for some $h\in G$, so $H=h(H_a)$ for a facet label $a$. The uniqueness of the Euclidean reflection gives $r_H=h s_a h^{-1}$. Hence every generator of $W_a$ lies in $G$, while $G\le W_a$ by definition; thus $W_a=G$. [F2, F3, F7, F9, F10, F11, F12, step 1.1, step 4.1, choose, algebra]

6.1 Let $g\in W_a$ stabilize $A$, and write it as a word in the finite set of facet reflections with the least possible number $m$ of factors: $g=s_{a_1}\cdots s_{a_m}$. Put $h_0=1$, $h_k=s_{a_1}\cdots s_{a_k}$, and $H_k=h_{k-1}(H_{a_k})$. The gallery $h_0(A),\dots,h_m(A)$ crosses $H_k$ at step $k$, and step 2.1 gives $\operatorname{Sep}(h_{k-1}(A),h_k(A))=\{H_k\}$. If $H_p=H_q$ for $p<q$, equality of their reflections gives, with $s=s_{a_p}$, $t=s_{a_q}$ and $b=s_{a_{p+1}}\cdots s_{a_{q-1}}$, the relation $s=sbtb^{-1}s$, hence $sbt=b$. Deleting the factors at positions $p,q$ shortens the word for $g$, a contradiction. Thus the crossed walls are pairwise distinct. Repeated use of step 3.2 now gives $\operatorname{Sep}(A,g(A))=\{H_1,\dots,H_m\}$; since $g(A)=A$, this set is empty, so $m=0$ and $g=1$. Therefore $\operatorname{Stab}_{W_a}(A)=\{1\}$. [step 2.1, step 3.2, step 5.1, choose, algebra]

7.1 For $C\in W_a\cdot A$, existence of $g$ with $C=g(A)$ is the definition of the orbit. If also $C=g'(A)$, then $g^{-1}g'$ stabilizes $A$, so step 6.1 gives $g=g'$. The facets of $\overline A$ are precisely the $F_a$ for $a\in J$, each occurring once; applying $g$ gives a unique label for every facet of $\overline C$. Since $U=\operatorname{int}(\overline A)=A$, its stabilizer is the same trivial stabilizer. [F3, step 6.1, algebra]

8.1 If adjacent alcoves $C=g(A)$ and $C'=g'(A)$ share a facet $F=g(F_a)$ on $H=g(H_a)$, step 2.1 says $C'=r_H(C)=g s_a(A)$. Uniqueness from step 7.1 yields $g'=g s_a$. The reflection $s_a$ fixes $F_a$ pointwise, so $F=g s_a(F_a)$ also has type $a$ as computed from $C'$. Thus the panel type is independent of the side; every alcove has one facet for each $a\in J$ because $A$ does; and $r_H=g s_a g^{-1}$. [F7, step 2.1, step 7.1, algebra]

9.1 If $\Phi=\varnothing$, the spanning condition gives $E=0$, the wall arrangement is empty, $A=\{0\}$, and $W_a=\{1\}$; all separation and panel claims are then vacuous and the stabilizer claim holds. For a single rank-one component, distinct walls are disjoint points, so the bad-pair family in step 3.1 is empty and its fundamental alcoves are intervals with endpoint facets. In reducible products of rank-one components, the general affine-subspace avoidance in step 3.1 also handles intersections between walls from different factors. All other selections above are finite: the generic point avoids finitely many affine subspaces, the compact hull supplies finitely many walls, and shortest word length is a least natural number. No axiom of choice is used. [F1, F2, F4, step 1.1, step 3.1, step 6.1] ∎

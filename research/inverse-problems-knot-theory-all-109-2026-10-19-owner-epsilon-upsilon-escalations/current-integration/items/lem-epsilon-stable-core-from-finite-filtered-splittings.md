---
id: lem-epsilon-stable-core-from-finite-filtered-splittings
kind: lemma
title: "Finite filtered splittings preserve the epsilon maps under total-acyclic stabilization"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-epsilon-from-filtered-knot-floer-complex
  - def-knot-floer-filtration-and-tau
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Only the finite original complexes are decomposed. Their endomorphism matrices are finite over F_2; no choice axiom or finiteness assumption on the stabilizers is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "Theorem1 and Sections3.1–3.2; the finite splitting and cancellation proof is supplied locally"
---

## Statement

Work over $\Lambda=\mathbb F_2[U,U^{-1}]$. Let $C,D$ be finite-rank free Maslov-graded, integer-bifiltered complexes with homogeneous bifiltered bases, differential of degree $-1$ not increasing either coordinate, and $U$ of degree $(-2,-1,-1)$ in Maslov and the two filtration coordinates. Suppose $H(C)\cong H(D)\cong\Lambda$ with generator in Maslov degree zero and $H(C\{i=0\})\cong H(D\{i=0\})\cong\mathbb F_2$. If $C\oplus A$ and $D\oplus B$ are Maslov-graded bifiltered chain homotopy equivalent for arbitrary Maslov-graded bifiltered $\Lambda$-complexes $A,B$ with zero total homology, using $\Lambda$-linear maps and homotopies of the stated grading and filtration degrees, then $\tau(C)=\tau(D)$, and the homology maps $F_\tau,G_\tau$ in the epsilon definition have the same zero/nonzero patterns for $C,D$. Consequently their epsilon values agree whenever those three-case values are defined. No finite rank, freeness, vertical, horizontal, or associated-graded acyclicity of the added complexes $A,B$ is required, and epsilon is not being defined on the stabilized complexes.

## Statement references

[[def-epsilon-from-filtered-knot-floer-complex]]

[[def-knot-floer-filtration-and-tau]]

## Facts & Assumptions

**Given:** The finite graded bifiltered original complexes $C,D$, the arbitrary totally acyclic graded bifiltered stabilizers $A,B$, and the maps and homotopies specified in the Statement. The category used in steps 1.1–5.1 contains only finite-rank free original objects and their summands; no finite decomposition of $A$ or $B$ is asserted.

[F1] [[def-epsilon-from-filtered-knot-floer-complex]] specifies $F_s$ and $G_s$ by quotient and inclusion on the stated bifiltered subquotients. Both constructions commute with a Maslov-graded bifiltered chain map and its filtered homotopies.

[F2] [[def-knot-floer-filtration-and-tau]] defines the least vertical Alexander level mapping nontrivially to the one-dimensional total vertical homology.

## Proof

1.1 Consider the additive category of these finite complexes and Maslov-degree-zero bifiltered chain maps, and then identify maps differing by a bifiltered degree-$+1$ chain homotopy. Every homomorphism set in the resulting homotopy category is a finite-dimensional $\mathbb F_2$-space. Indeed translate each Laurent basis generator to Maslov degree zero or one. A degree-zero Laurent-linear matrix has only constant coefficients between generators of the same parity, and zero entries between different parities. Thus the set of actual degree-zero matrices is finite, and the chain-map and filtration conditions only restrict that set. Null-homotopic maps form an additive subgroup stable under composition on either side, by composing the displayed homotopies, so passing to homotopy classes preserves finiteness and the additive-category operations. [given, construct, algebra]

2.1 Every strict filtered chain idempotent $P$ splits inside this category with homogeneous bifiltered free image and kernel. To verify the basis assertion, use the Maslov-normalized basis from step 1.1 and group it, separately in each parity, by its filtration point $(i,j)$. An entry of $P$ can run only from a point to a coordinatewise smaller point. Its diagonal block at a fixed point is idempotent, since any path returning to that point stays there. Choose bases of the image and kernel of each finite diagonal block. For a diagonal-image vector $e$ replace it by $Pe$; for a diagonal-kernel vector replace it by $(1-P)e$. Each replacement has leading component $e$ at its old point and additional terms only at strictly smaller points. In lexicographic order of the finite point set this is a triangular change of basis with identity diagonal. Its inverse is a finite geometric sum of the strictly triangular part and also preserves both filtrations. In the resulting basis $P$ is diagonal with entries zero or one. Its image and kernel are therefore free on the corresponding bifiltered homogeneous basis subsets. They are subcomplexes, because $P$ is a chain map, and give a filtered direct sum. [step 1.1, given, construct, algebra]

3.1 An idempotent homotopy class also splits. Represent it by an actual filtered chain map $f$. Since its normalized matrix belongs to a finite monoid, some two powers agree, $f^{m+p}=f^m$ with $m,p\ge1$. Choose $N\ge m$ divisible by $p$. Then $f^{2N}=f^N$, so $P=f^N$ is a strict filtered chain idempotent. If $[f]^2=[f]$, then $[P]=[f]^N=[f]$, so step 2.1 splits the original homotopy idempotent. More generally the same power construction gives, for any endomorphism, a splitting on whose image $f^N=1$ and on whose kernel $f^N=0$. [step 1.1, step 2.1, given, construct, algebra]

4.1 Every object is a finite sum of objects indecomposable in the homotopy category, ignoring zero objects. Split any nontrivial homotopy idempotent by step 3.1 and repeat: the two nonzero summands have strictly smaller positive basis ranks and their ranks add, so the process terminates. On an indecomposable object, step 3.1 makes every endomorphism either invertible or nilpotent, since one of its power-image and power-kernel summands must be a zero object. Its finite endomorphism ring is local. Here is an explicit verification: in a finite ring a one-sided inverse is two-sided, by applying injectivity and surjectivity to multiplication on the finite set. Thus a product can be invertible only if both factors are invertible. If nonunits $a,b$ had invertible sum $u$, then $u^{-1}a$ would be a nonunit and hence nilpotent; the geometric-series inverse would make $1-u^{-1}a=u^{-1}b$ invertible, a contradiction. Nonunits are therefore closed under sums and multiplication by arbitrary ring elements and form the unique maximal ideal. [step 1.1, step 3.1, given, construct, algebra]

5.1 The indecomposable decomposition is unique up to isomorphism and permutation. Suppose two finite decompositions are related by an isomorphism $T$. For a summand $X$ on the first side, resolve its identity through $T$, all target projections, and $T^{-1}$. This expresses $1_X$ as a finite sum of composites $X\to Y_j\to X$. By the local-ring assertion in step 4.1, one such composite is a unit. Normalize the reverse map so its composite on $X$ is $1_X$. The opposite composite is a nonzero idempotent on the indecomposable $Y_j$ and is therefore $1_{Y_j}$, by step 3.1; thus the corresponding component $X\to Y_j$ of $T$ is invertible. Block Gaussian elimination with this invertible diagonal component reduces $T$ to the direct sum of that component and its Schur-complement isomorphism on the remaining summands. Induction on the finite number of summands proves uniqueness. All operations take place in the homotopy category and use its split idempotents, not an unproved cancellation law. [step 3.1, step 4.1, given, algebra]

5.2 A finite complex with total homology $\Lambda$ has precisely one non-acyclic indecomposable summand, denoted $E$. In a direct-sum decomposition its induced homology projections are mutually orthogonal idempotents of $\operatorname{End}_\Lambda(\Lambda)=\Lambda$. This domain has only idempotents zero and one, so exactly one projection is one and every other summand has zero homology. Write $C\simeq E_C\oplus L_C$ and $D\simeq E_D\oplus L_D$, with $L_C,L_D$ totally acyclic. To compare the cores, let $T:C\oplus A\to D\oplus B$ and $S$ be inverse maps in the homotopy category of all the stated complexes. Restrict $ST=1$ to $E_C$ and project back, resolving the middle object as $E_D\oplus L_D\oplus B$. This gives $1_{E_C}=a_D+a_L+a_B$, where the three endomorphisms factor through the respective middle summands. The endomorphism ring of $E_C$ in this larger category is the same finite ring as in step 1.1: actual maps and homotopies from $E_C$ to itself still have finite matrices. Since $a_L,a_B$ induce zero total homology, neither can be a unit. By step 4.1 their sum is a nonunit in the unique maximal ideal, so $a_D=1-(a_L+a_B)$ is a unit. Write $a_D=pi$ with $i:E_C\to E_D$ and $p:E_D\to E_C$, and replace $p$ by $a_D^{-1}p$. Then $pi=1_{E_C}$. The opposite composite $ip$ is an idempotent of $E_D$ inducing nonzero homology. Its splitting by step 3.1 and indecomposability of $E_D$ force $ip=1_{E_D}$. Thus $E_C\simeq E_D$. This argument never decomposes $A,B$ and imposes no rank, freeness, or filtered acyclicity assumption on them. [step 1.1, step 3.1, step 4.1, given, construct, algebra]

6.1 The vertical complex of any finite summand with homology $\Lambda$ has nonzero homology. To see this, normalize its Laurent basis to Maslov degrees zero and one. Its differential is given by finite binary matrices $A$ from degree one to zero and $UB$ in the other direction. The total-homology assumption says that the finite parity complex with matrices $A,B$ has even homology dimension one and odd homology dimension zero. Hence the number of even basis vectors minus the number of odd ones is one, by finite rank-nullity. Translating its basis to $i=0$ does not change these parities, so the vertical finite complex has Euler characteristic one and cannot have zero homology. Now take a filtered splitting $C\simeq E_C\oplus L_C$ from step 5.2. Taking $i=0$ preserves the homotopy equivalence, since all maps and homotopies preserve the subcomplexes $i\le0$ and $i<0$. Since the total vertical homology dimension of $C$ is one and that of $E_C$ is at least one, $H(E_C\{i=0\})$ has dimension one and $H(L_C\{i=0\})=0$. The same holds for $D$. This conclusion concerns the internal summands of the admissible original complexes, not the arbitrary stabilizing $A,B$. [step 1.1, step 2.1, step 5.2, given, algebra]

7.1 By the direct sum and [F2], the vertical threshold of $C$ equals that of $E_C$: every inclusion-induced homology map on the other vertical summand has zero target. Likewise the threshold of $D$ equals that of $E_D$, and their filtered homotopy equivalence in step 5.2 gives the same threshold. For $F_\tau$, its domain is the one-dimensional vertical homology, wholly in $E_C$, so its map into the direct-sum target is zero exactly when the $E_C$ map is zero. For $G_\tau$, the target is that vertical homology, and every contribution from $L_C$ has zero target; thus its map is zero exactly when the $E_C$ map is zero. The same argument applies to $D$. Naturality in [F1] identifies the two core maps under $E_C\simeq E_D$. Hence both zero patterns and the thresholds agree, proving the stated epsilon conclusion without assigning epsilon to either stabilized complex. [F1, F2, step 5.2, step 6.1, given, algebra] ∎

## Remarks

Total acyclicity alone does not imply vertical acyclicity. For example take two Laurent generators $a,b$ at $(i,j)=(0,0)$, with Maslov degrees $-1,0$ and $\partial a=Ub$, $\partial b=0$. This is totally acyclic because $U$ is a unit, but its vertical complex has zero differential and dimension two. Thus adding it to a rank-one-vertical knot complex prevents applying the epsilon definition directly to the stabilized object. The proof above permits such summands and compares only the finite non-acyclic cores through their local endomorphism rings; it does not assume them away or decompose the stabilizers.

---
id: lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties
kind: lemma
title: "Type-A nilpotent orbit closures are normal via chain varieties"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-nilpotent-endomorphism, thm-nilpotent-jordan-string-basis,
       def-classical-complex-matrix-lie-algebras,
       lem-orbit-map-fibres-and-stabilizer-dimension,
       thm-jacobian-criterion-affine-variety,
       thm-parameters-and-regular-sequences-in-cohen-macaulay-modules,
       thm-polynomial-extension-of-cohen-macaulay-rings,
       thm-regular-quotients-and-cohen-macaulayness, thm-krull-height-theorem,
       lem-serre-r-zero-s-one-characterises-reducedness,
       thm-serre-normality-criterion, thm-weyls-complete-reducibility-theorem,
       thm-schur-weyl-double-centralizer, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hanspeter Kraft and Claudio Procesi, Closures of conjugacy classes of matrices are normal, Inventiones Math. 53 (1979) 227-247"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0053/LOG_0017.pdf"
      locator: "Sections 1-5, printed pp. 227-245: the ab/ba-string dimension computations, the chain equations and their smooth open stratum, the stratum dimension estimates, the complete-intersection and Cohen-Macaulay argument, the invariant quotient by the product of GL(U_i), and the deduction of normality of the orbit closure. Section 6, printed pp. 245-246, supplies only the companion covariant-extension result. A second, mirror-quiver reading of the same construction is in the locally recorded reconstruction owner-category-o-batch17-vust-local-proof.md, Sections 2-4."
    - title: "W. Borho and H. Kraft, Ueber Bahnen und deren Deformationen bei linearen Aktionen reduktiver Gruppen, Comment. Math. Helv. 54 (1979) 61-104"
      url: "https://doi.org/10.1007/BF02566256"
      locator: "Section 3: dim O_mu = N^2 - sum_i (2i-1) mu_i for a nilpotent orbit of type mu and the parity of codimensions of nilpotent orbit closures; quoted here only in the form already carried by the published orbit-dimension item of the library."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $e$ be a nilpotent endomorphism of a
finite-dimensional complex vector space $V$ ([[def-nilpotent-endomorphism]]),
let $X=\overline{\mathrm{GL}(V)\cdot e}$ be the closure in
$\operatorname{End}_{\mathbb C}(V)$ of its conjugacy orbit
([[def-classical-complex-matrix-lie-algebras]]), and let
$\partial X=X\setminus\mathrm{GL}(V)\cdot e$. Then $\mathbb C[X]$ is a reduced
irreducible normal domain and $\operatorname{codim}_X\partial X\ge2$. This
holds for every Jordan type, not only the regular nilpotent cone.

The proof uses the *chain schemes*: if the Jordan partition of $e$ has column
lengths $q_1\ge\cdots\ge q_t>0$, put $n_i=q_t+\cdots+q_{t-i+1}$ and
$U_i=\mathbb C^{n_i}$ for $0\le i\le t$. Let $M=\prod_{i=1}^{t-1}\bigl(\operatorname{Hom}(U_i,U_{i+1})\times\operatorname{Hom}(U_{i+1},U_i)\bigr)$
with coordinates $(A_i,B_i)$ and let $Z\subseteq M$ be the closed subscheme
$B_1A_1=0$, $B_iA_i=A_{i-1}B_{i-1}$ $(2\le i<t)$. Then $Z$ is a complete
intersection, smooth outside a closed subset of codimension $\ge2$, reduced,
irreducible and normal, and the invariant ring $\mathbb C[Z]^H$ under
$H=\prod_{i<t}\mathrm{GL}(U_i)$ is the coordinate ring of $X$ via the end map
$\theta=A_{t-1}B_{t-1}$ when $t\ge2$. For the empty Jordan diagram ($V=0$,
$t=0$) and the single-column diagram ($e=0$, $t=1$), the chain has no
variables or equations: take $Z=\operatorname{Spec}\mathbb C$, $H$ trivial
and $\theta=0$; the equation list above is imposed only on existing links.
In these cases $X$ is a point, its boundary is empty, and its boundary
codimension is $+\infty$.

## Facts & Assumptions

**Given:** AC; a finite-dimensional complex vector space $V$ of dimension $N$, a nilpotent $e\in\operatorname{End}(V)$ of Jordan type $\eta$ with column lengths $q_1\ge\cdots\ge q_t>0$, $q_1+\cdots+q_t=N$, the spaces $U_i=\mathbb C^{n_i}$, $n_i=q_t+\cdots+q_{t-i+1}$, and the chain scheme $Z\subseteq M$ of the Statement.

[F1] Jordan strings: every nilpotent endomorphism has a Jordan-string basis; conjugacy classes in $\operatorname{End}(V)$ are $\mathrm{GL}(V)$-orbits, and nilpotent elements form a closed cone; the nilpotency index of a type-$\eta$ element is the largest part $\eta_1=t$ ([[thm-nilpotent-jordan-string-basis]], [[def-nilpotent-endomorphism]], [[def-classical-complex-matrix-lie-algebras]]).

[F2] Orbit dimension and boundary: $\dim G=\dim G_x+\dim O_x$ for the orbit of a closed point under a connected smooth group, and $\overline{O_x}\setminus O_x$ is a union of orbits of strictly smaller dimension; an orbit of a connected group is irreducible, so its closure is irreducible ([[lem-orbit-map-fibres-and-stabilizer-dimension]]).

[F3] Nilpotent type invariants: for a nilpotent $x$ of type $\mu$, $\operatorname{rank}x^k=\sum_i\max(\mu_i-k,0)=N-\sum_{j\le k}\mu'_j$; the conditions $\operatorname{rank}x^k\le\operatorname{rank}e^k$ for all $k$ are equivalent to $\mu\trianglelefteq\eta$ (dominance of partitions, equivalently $\mu'\trianglerighteq\eta'$); and $\dim O_\mu=N^2-\sum_i(2i-1)\mu_i=N^2-\sum_j(\mu'_j)^2$ ([[thm-nilpotent-jordan-string-basis]], [[lem-orbit-map-fibres-and-stabilizer-dimension]], [[def-nilpotent-endomorphism]]).

[F4] Jacobian criterion for $A=P/I$: at a closed point $\mathfrak m$, $A_{\mathfrak m}$ is regular iff $\operatorname{rank}J(\mathfrak m)=n-\dim A_{\mathfrak m}$. Krull's height theorem: every minimal prime over an ideal generated by $c$ elements has height at most $c$. Cohen-Macaulay: a quotient of a polynomial ring by a regular sequence is Cohen-Macaulay; a Cohen-Macaulay ring satisfies $(S_j)$ for all $j$; homogeneous localization detects injectivity of graded maps; and a finitely generated module over a local Cohen-Macaulay ring whose parameter system has length equal to the dimension satisfies the parameter theorem ([[thm-jacobian-criterion-affine-variety]], [[thm-krull-height-theorem]], [[thm-parameters-and-regular-sequences-in-cohen-macaulay-modules]], [[thm-polynomial-extension-of-cohen-macaulay-rings]], [[thm-regular-quotients-and-cohen-macaulayness]]).

[F5] Serre conditions: a Noetherian ring is reduced iff it satisfies $(R_0)$ and $(S_1)$, and normal iff it satisfies $(R_1)$ and $(S_2)$ ([[lem-serre-r-zero-s-one-characterises-reducedness]], [[thm-serre-normality-criterion]]).

[F6] Invariants: finite-dimensional rational $\mathrm{GL}_n(\mathbb C)$-modules are completely reducible, and the $\mathrm{GL}(U)$-invariants of tensor powers of $U$ and $U^*$ are the permutation contractions (Schur-Weyl double centralizer); invariant vectors of rational quotients lift to invariant vectors ([[thm-weyls-complete-reducibility-theorem]], [[thm-schur-weyl-double-centralizer]]).



## Proof

**Proof technique:** direct.

**Given:** AC, the nilpotent endomorphism $e$, its Jordan columns $q_1\ge\cdots\ge q_t>0$, and the chain scheme and end map of the Statement, including its empty-chain conventions.

1.1 **Empty chains.** If $V=0$, take $t=0$; if $e=0$ on a nonzero space, its Jordan diagram has a single column and $t=1$. In either case there are no chain variables or equations, $Z=\operatorname{Spec}\mathbb C$, $H$ is trivial and $\theta=0$. Its image is the point orbit closure, its coordinate ring is a normal domain, and the empty equation sequence is regular. The boundary is empty and has codimension $+\infty$. All conclusions follow in these cases. Henceforth $t\ge2$. [given, algebra]

1.2 **The open chain locus.** Put $c=\sum_{i<t}n_i^2$ and $D=2\sum_{i<t}n_in_{i+1}-c$. The differential of the chain equations is $Y_iA_i+B_iX_i-X_{i-1}B_{i-1}-A_{i-1}Y_{i-1}$, with the index-zero terms zero. If each $A_i$ is injective or $B_i$ is surjective, these equations can be solved successively for any prescribed right-hand sides: use a left inverse of $A_i$ to choose $Y_i$, or a right inverse of $B_i$ to choose $X_i$, after the preceding pair is fixed. Thus the open locus $Z^\circ$ with this condition is smooth of dimension $D$ by [F4]. It is nonempty: use $U_i=\operatorname{im}e^{t-i}$, inclusions $A_i$, and restrictions $B_i=e|_{U_{i+1}}$, transported to the fixed spaces. These maps satisfy the equations and have end map $e$. [F1, F3, F4, construct, algebra]

2.1 **Alternating strings and their stabilizers.** For a nilpotent pair $A:U\to W$, $B:W\to U$, the odd operator $T$ on $U\oplus W$ with these components has a homogeneous Jordan-string decomposition: kernels and images of its powers are graded, so the complements in the Jordan construction may be chosen homogeneous. Every string alternates letters $a$ from $U$ and $b$ from $W$. Removing all $b$ letters gives the Jordan rows of $BA$, and removing all $a$ letters gives those of $AB$. The ranks of alternating composites recover the numbers of strings of each length and starting letter, so a diagram determines one pair orbit and there are finitely many diagrams in fixed dimensions. The pair stabilizer is the unit group of its even endomorphism algebra, an open subset of a vector space and hence smooth and irreducible. On a string $A$ kills exactly a terminal $a$ and $B$ misses exactly an initial $a$; consequently $A$ is injective iff every string ends in $b$, and $B$ is surjective iff every string begins in $b$. [F1, F2, algebra, construct]

2.2 **The pair-orbit dimension.** Write $m=\dim U$, $n=\dim W$, and let $E,O$ be the dimensions of the even and odd centralizers of $T$. A homomorphism between Jordan strings of lengths $L,L'$ has $\min(L,L')$ possible shifts. Counting the parity of those shifts, odd strings of the same endpoint type contribute $+1$ to the even-minus-odd count, and odd strings of opposite type contribute $-1$; the two opposite Hom directions for an odd/even pair cancel, and even/even pairs contribute zero. Summing gives $E-O=(m-n)^2$, because the difference between the numbers of odd $a$-type and odd $b$-type strings is $m-n$. The pair orbit therefore has dimension $m^2+n^2-E=\tfrac12((m+n)^2-E-O)$, half the dimension of the ordinary orbit of $T$. If a string has $r_j$ letters $a$ and $s_j$ letters $b$, then $\min(r_j+s_j,r_k+s_k)=\min(r_j,r_k)+\min(s_j,s_k)$ except for equal odd lengths with opposite endpoint types, where the left side is larger by one. Let $a_l,b_l$ count the odd strings of length $l$ beginning with the two respective letters, and put $\Delta=\sum_{l\text{ odd}}a_lb_l$. The ordinary Jordan centralizer counts now give $\dim O_{(A,B)}=mn+\tfrac12(\dim C_{BA}+\dim C_{AB})-\Delta$. This is a dimension identity for the orbit, not for the full matrix space minus the pair orbit. [F1, F2, F3, step 2.1, algebra]

2.3 **Chain strata.** Stratify $Z$ by its compatible alternating-string diagrams at every link. Compatibility means that the $b$-diagram of one link equals the $a$-diagram of the next. These are finitely many locally closed strata. Pair-orbit projections to either ordinary Jordan orbit are smooth homogeneous fibrations: their fibers are quotients of the ordinary centralizer unit group by the pair stabilizer. Both groups are smooth connected open subsets of finite-dimensional endomorphism spaces, so these fibers are irreducible. Iterating these fibrations proves each nonempty chain stratum $Z_\delta$ smooth and irreducible. The dimension at each fiber-product step is the preceding dimension plus the pair-orbit dimension minus the shared Jordan-orbit dimension. The intermediate orbit dimensions cancel in the formula of step 2.2, giving $\dim Z_\delta=\sum_{i<t}n_in_{i+1}+\tfrac12\dim C_\sigma-\sum_{i<t}\Delta_i$, where $\sigma$ is the type of its final end map. [F2, step 2.1, step 2.2, algebra]

3.1 **Dominance and the top stratum.** The chain equations make $\theta^k$ factor through $U_{t-k}$, so $\operatorname{rank}\theta^k\le n_{t-k}$ and $\theta^t=0$. Thus its type $\sigma$ is dominated by $\eta$ by [F3]. For a $b$-diagram $\sigma$, every row must first be filled internally by alternating $a$ letters; this requires exactly $|\sigma|-\ell(\sigma)$ letters, the size of the diagram obtained by deleting its first column. Over the top diagram $\eta$, this equals $n_{t-1}$, leaving no extra letters: every string starts and ends in $b$ and the lower diagram is exactly the first-column deletion of $\eta$. Repeat down the chain. There is exactly one top stratum; it has both maximal-rank maps at every link, lies in $Z^\circ$, and has every $\Delta_i=0$. Finally, expanding $q_j=n_{t-j+1}-n_{t-j}$ gives $\tfrac12\dim C_\eta=\sum_{i<t}n_in_{i+1}-\sum_{i<t}n_i^2$, so its dimension is $D$. [F3, step 2.1, step 2.3, algebra]

3.2 **Even orbit drops.** Distinct dominated types have strictly smaller orbit dimension. One can move from a dominating partition to a dominated one by repeatedly moving a box from an earlier row to a later allowable row: choose an excess row and a subsequent deficit row, taking the last row of the source plateau and the first allowed destination to preserve the partition inequalities, and repeat until the target is reached. A move from row $i$ to row $j>i$ increases $\sum_r(2r-1)\mu_r$ by $2(j-i)$ and therefore decreases the orbit dimension by that positive even number. Each allowable unit move from row lengths $a,b$ with $a\ge b+2$ is realized by a one-parameter degeneration. On chains $u_1,\ldots,u_{a-1}$ and $v_1,\ldots,v_{b+1}$ of the destination type, keep the usual lowering maps except send $v_{b+1}$ to $v_b+z u_{a-1}$, with $v_0=0$. At $z=0$ the type is $(a-1,b+1)$; for $z\ne0$ the ranks of powers are those of $(a,b)$ (the chain generated by $v_{b+1}$ has length $a$, and the remaining chain has length $b$). Keeping other strings fixed proves that dominated types belong to the top orbit closure. Hence a drop of exactly two consists of one box moved to the next row; any other drop is at least four. Equivalently, parity also follows from $\sum_j(\mu'_j)^2\equiv\sum_j\mu'_j=N\pmod2$ for the total sum; individual summands in a difference of square sums need not be even. [F3, algebra]

4.1 **Drops of at least four.** By the stratum formula and the nonnegativity of all $\Delta_i$, a final orbit drop of at least four gives $\dim Z_\delta\le\sum n_in_{i+1}+\tfrac12(\dim C_\eta-4)=D-2$. Every non-top stratum has dimension at most $D-1$. This latter estimate establishes uniqueness of the dense top stratum but does not assert that every non-top stratum has codimension two: some are smooth divisors inside $Z^\circ$. [step 2.3, step 3.1, step 3.2, algebra]

4.2 **Drops of two and the nonsmooth-locus bound.** Suppose $\sigma$ is obtained from $\eta$ by moving a box to the next row. Let $\eta'$ and $\sigma'$ denote first-column deletions and let $m=|\eta'|$, $m'=|\sigma'|$. At the last link the available number of $a$ letters is $m$ and its $a$-diagram must be dominated by $\eta'$, since its powers factor through the shorter chain. If the receiving row was nonempty, $m=m'$: internal filling consumes every $a$, all strings begin and end in $b$, and the same next-row degeneration passes to the shorter chain. If a new singleton row is created, $m=m'+1$. After internal filling there is one extra $a$. It can be attached at either end of the shortened last row, at either end of the new singleton $b$ row, or placed in a new singleton $a$ row. No earlier row can receive it: its $a$-diagram would gain a box earlier than the removed last-row box and violate dominance by $\eta'$. In the first four placements one map is maximal rank; the lower diagram is either $\eta'$ or its next-row degeneration. In the fifth placement both maps fail maximal rank, and singleton strings of both types occur, giving $\Delta_i\ge1$. This remains valid when the shortened row is itself a singleton, when there can be more than one singleton $b$. Inducting through the shorter chain shows that either every link has a maximal-rank map and $Z_\delta\subseteq Z^\circ$, or some $\Delta_i\ge1$. In the latter case the dimension formula gives $\dim Z_\delta\le\sum n_in_{i+1}+\tfrac12(\dim C_\eta-2)-1=D-2$. Together with step 4.1, this proves $\dim(Z\setminus Z^\circ)\le D-2$. [step 2.1, step 2.3, step 3.1, step 3.2, step 4.1, algebra]

5.1 **Complete intersection and reducedness.** Every irreducible component of the scheme cut out by its $c$ equations has dimension at least $\dim M-c=D$ by [F4]. The top stratum has dimension $D$ and all other strata have smaller dimension by step 4.1, so every component has dimension $D$. Thus the equation ideal has height $c$. Its homogeneous generators form a regular sequence in the polynomial ring: at the homogeneous maximal ideal, every prefix of length $k$ has height at least $k$, since adjoining the remaining $c-k$ equations raises height by at most $c-k$; the opposite inequality is Krull's bound. Complete the generators to a system of parameters and apply the Cohen-Macaulay parameter theorem in [F4]. Homogeneous localization detects a kernel in a multiplication map, so regularity is global. The quotient is Cohen-Macaulay, hence satisfies $S_1$ and $S_2$. Every component meets the smooth open $Z^\circ$ by step 4.2, so it satisfies $R_0$; [F5] implies reducedness. [F4, F5, step 1.2, step 3.1, step 4.1, step 4.2, algebra]

5.2 **Irreducibility and normality of the chain.** The unique top stratum is irreducible. Its closure contains every component: otherwise a component of dimension $D$ would have a nonempty open subset outside that closure, contained in a finite union of strata of dimensions at most $D-1$, which is impossible. Thus the reduced chain ring is a domain. Its singular locus is contained in $Z\setminus Z^\circ$, of codimension at least two by step 4.2, so it satisfies $R_1$; it satisfies $S_2$ by step 5.1. Serre's criterion [F5] gives normality. [F5, step 2.3, step 3.1, step 4.1, step 4.2, step 5.1, algebra]

6.1 **The invariant quotient.** For one pair $A:U\to W$, $B:W\to U$, invariants under $\mathrm{GL}(U)$ are generated by entries of $AB$: the scalar matrices force equal polynomial degrees in $A,B$, polarization turns a bihomogeneous invariant into a mixed tensor invariant, and [F6] expresses it as permutation contractions. Each contraction is a product of entries of $AB$, with possible cyclic traces also polynomials in those entries. For rational finite-dimensional $\mathrm{GL}(U)$ modules, the central scalar torus splits the space into integer weight spaces. On each weight space apply the semisimple Lie algebra complete-reducibility theorem [F6] to $\mathfrak{sl}(U)$; an invariant complement then respects the center as well. It respects the group because elementary unipotents and diagonal matrices generate $\mathrm{GL}(U)$. Thus rational quotient invariants lift by complete reducibility in bounded polynomial degree, so the same description applies to a stable closed subscheme with its induced relations. Eliminate vertices in order. At the first vertex the invariant generators are $A_1B_1$ and the remaining variables; the chain equation replaces $A_1B_1$ by $B_2A_2$. The quotient is consequently the graph over the remaining variables with the induced rank and nilpotency relations, and eliminating the next vertex applies the same one-pair calculation. Repeating leaves precisely the entries of $\theta$. Thus $\mathbb C[Z]^H$ is generated by those entries, and is the coordinate ring of the closure of $\theta(Z)$. The rank bounds of step 3.1 put the image in the orbit closure of $e$, while the inclusion/restriction construction of step 1.2, applied to every conjugate of $e$, puts its full orbit in the image. Hence that closure is $X$ and $\mathbb C[Z]^H\cong\mathbb C[X]$. [F1, F3, F6, step 1.2, step 3.1, step 5.2, algebra]

6.2 **Normality and boundary of the orbit closure.** An element of $\operatorname{Frac}(\mathbb C[Z]^H)$ integral over $\mathbb C[Z]^H$ is also integral over the normal domain $\mathbb C[Z]$, hence belongs to it. Being a fraction of invariant elements it is fixed by $H$, so it belongs to $\mathbb C[Z]^H$; no equality between the full invariant fraction field and the fraction field of the invariant ring is needed. Therefore $\mathbb C[X]$ is a normal domain, reduced and irreducible. The finitely many boundary nilpotent orbits have positive even dimension drops by step 3.2, so their union has codimension at least two. The point cases and their empty boundary were proved in step 1.1. This proves all chain and orbit conclusions. [F2, F3, step 1.1, step 3.2, step 5.2, step 6.1, algebra] ∎

## Remarks

- The chain scheme $Z$ plays the role of a simultaneous resolution of all strata of the nilpotent cone: its smooth open part dominates the conjugacy orbit of $e$ through the end map $\theta$, and the invariant quotient collapses the chain data to the orbit closure. No rational-singularity or Hochster-Roberts input is used.

- The nonsmooth-locus estimate of step 4.2 is the ab-string computation of the source: the strata are read off from alternating letter strings, whose graded Hom dimension counts give the correction terms $\Delta_i$. Non-top strata may be smooth divisors; it is the complement of $Z^\circ$ that has codimension at least two. The singleton-string case is retained in the five-placement induction.

---
id: prop-root-systems-of-the-classical-complex-lie-algebras
kind: proposition
title: Root systems of the classical complex Lie algebras
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-classical-complex-matrix-lie-algebras, prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras, def-reduced-crystallographic-euclidean-root-system, def-positive-system-and-base-of-simple-roots, def-cartan-matrix-of-a-based-root-system, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention, def-cartan-subalgebra-of-a-lie-algebra, thm-existence-of-each-classified-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 20.3, Examples 20.12-20.14, printed pp. 110-111"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, (2.43) and (2.50) with §1, printed pp. 150 and 155"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Let $\mathfrak h$ be the diagonal Cartan subalgebra of one of
$\mathfrak{sl}_n(\mathbb C)$, $\mathfrak{sp}_{2n}(\mathbb C)$,
$\mathfrak{so}_{2n}(\mathbb C)$, $\mathfrak{so}_{2n+1}(\mathbb C)$
([[prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras]]), where
$n\ge2$ in the special-linear and even-orthogonal cases and $n\ge1$ in the
symplectic and odd-orthogonal cases, and let
$\varepsilon_1,\dots,\varepsilon_n\in\mathfrak h^{*}$ be the coordinate
functionals, $\varepsilon_i(H)=x_i$, where the $a$-block is
$\operatorname{diag}(x_1,\dots,x_n)$. Thus the full diagonal of $H$ is
$(x_1,\dots,x_n)$ in the special-linear case,
$(x_1,\dots,x_n,-x_1,\dots,-x_n)$ in the even cases, and
$(0,x_1,\dots,x_n,-x_1,\dots,-x_n)$ in the odd case.
Here a root means a nonzero simultaneous adjoint weight: its root space is
$\{X:[H,X]=\alpha(H)X\text{ for every }H\in\mathfrak h\}$.
Then the roots and root spaces are:
1. $\mathfrak{sl}_n(\mathbb C)$: the roots $\varepsilon_i-\varepsilon_j$,
   $i\ne j$, with root spaces $\mathbb CE_{ij}$;
2. $\mathfrak{sp}_{2n}(\mathbb C)$: the roots $\pm\varepsilon_i\pm\varepsilon_j$,
   $i<j$, with difference-root spaces from the $a$-block and
   sum-root spaces from the symmetric $b$- and $c$-blocks, as specified below, and the roots $\pm2\varepsilon_i$, with root spaces
   $\mathbb CE_{i,n+i}$ and $\mathbb CE_{n+i,i}$;
3. $\mathfrak{so}_{2n}(\mathbb C)$: the roots $\pm\varepsilon_i\pm\varepsilon_j$,
   $i<j$, with root spaces spanned by the corresponding block matrix units;
4. $\mathfrak{so}_{2n+1}(\mathbb C)$: the roots $\pm\varepsilon_i\pm\varepsilon_j$,
   $i<j$, together with the roots $\pm\varepsilon_i$, with root spaces spanned
   by the corresponding block matrix units.

In every case every root space is one-dimensional, and the listed root sets are
reduced crystallographic Euclidean root systems in their real spans, of types $A_{n-1}$, $C_n$,
$D_n$, $B_n$ respectively, with the low-rank identifications
$B_1=C_1=A_1$, $C_2=B_2$, $D_2=A_1\sqcup A_1$, and $D_3=A_3$.

## Remarks

The low-rank identifications are checked directly in step 5.1. The later
example collecting those coincidences is therefore explanatory rather than a
logical prerequisite, which breaks the former circular dependency.

## Facts & Assumptions

**Given:** One of the classical matrix Lie algebras $\mathfrak g$, its diagonal subalgebra $\mathfrak h$, the coordinate functionals $\varepsilon_i$, and the matrix units $E_{ab}$.

[L1] The algebras and their block decompositions are as in [[def-classical-complex-matrix-lie-algebras]]; for diagonal $H$ and matrix units $E_{ab}$ one has $[H,E_{ab}]=(H_{aa}-H_{bb})E_{ab}$, and the off-diagonal block units satisfy the symmetry conditions $b=b^{T}$ (symplectic), $b=-b^{T}$ (orthogonal), with the odd case adding the $u$ and $w$ blocks.

[L2] The diagonal $a$-block with the other blocks zero gives a Cartan subalgebra; for $\mathfrak{sl}_n$ its diagonal coordinates sum to zero ([[prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras]], [[def-cartan-subalgebra-of-a-lie-algebra]]). The simultaneous eigenbasis needed below is constructed explicitly, without a semisimplicity premise.

[L3] A regular vector determines a positive system whose indecomposable positive roots form its base; the Cartan matrix and Dynkin diagram of a base are computed from the simple-root inner products, and the classified type names have their indicated diagrams ([[def-positive-system-and-base-of-simple-roots]], [[def-cartan-matrix-of-a-based-root-system]], [[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]], [[thm-existence-of-each-classified-root-system]]).

[L4] A root system in the sense used here is a reduced crystallographic root system ([[def-reduced-crystallographic-euclidean-root-system]]).

## Proof

**Proof technique:** direct.

1.1 In $\mathfrak{sl}_n$, take the off-diagonal units $E_{ij}$ and a basis of the trace-zero diagonal space. The former have weights $\varepsilon_i-\varepsilon_j$ and the latter weight zero, because $[H,E_{ij}]=(x_i-x_j)E_{ij}$. These form a basis. Distinct differences remain distinct on the sum-zero hyperplane: a difference of their coefficient vectors has coordinate sum zero, and if it vanishes on that hyperplane it is a constant vector, hence zero. No such difference weight is zero for $n\ge2$. [L1, L2, algebra]

1.2 For the even cases, write $A_{ij}$ for the full block matrix with $a=E_{ij}$, $b=c=0$, hence lower diagonal block $-E_{ji}$. It has weight $\varepsilon_i-\varepsilon_j$; $A_{ii}$ has weight zero. In the symplectic case let $B_{ij}$ and $C_{ij}$ have respectively only $b=E_{ij}+E_{ji}$ or $c=E_{ij}+E_{ji}$ nonzero, for $i<j$. Their weights are $\varepsilon_i+\varepsilon_j$ and $-\varepsilon_i-\varepsilon_j$. Also allow $b=E_{ii}$ or $c=E_{ii}$, with weights $2\varepsilon_i$ and $-2\varepsilon_i$. In the even orthogonal case replace the plus sign in the off-diagonal block units by minus and omit the diagonal $b,c$ units. Each assertion follows entry by entry from $[H,X]_{rs}=(H_{rr}-H_{ss})X_{rs}$, since the paired entries have equal weights. These matrices are a basis by the independent $a,b,c$ block parameters in [L1]. [L1, L2, algebra]

2.1 In the odd orthogonal case embed the even orthogonal basis of step 1.2 in the last $2n$ rows and columns. Add $W_i$ with $w=e_i$, $u=0$, and $U_i$ with $u=e_i^T$, $w=0$, all $a,b,c$ zero, with their forced negative-transpose entries as in [L1]. The two nonzero entries of $W_i$ have weight $x_i$ and those of $U_i$ weight $-x_i$, because the first full diagonal entry of $H$ is zero. Together with the embedded even basis these form a basis of the odd algebra. [L1, L2, step 1.2, algebra]

3.1 The bases in steps 1.1–2.1 are simultaneous eigenbases. Their nonzero weights are exactly the lists in the statement and are pairwise distinct. For the non-special-linear cases this follows by comparing coefficient vectors in the independent $x_i$ coordinates; in the special-linear case it was checked in step 1.1. If a linear combination is an eigenvector of weight $\alpha$, comparison of each basis coefficient for every $H$ makes every nonzero coefficient have weight $\alpha$. Thus each listed nonzero weight space is exactly its displayed line, and there are no other nonzero weight spaces. The zero weight space is precisely the diagonal Cartan. This also treats $\mathfrak{sp}_2$ and $\mathfrak{so}_3$, where the $i<j$ lists are empty but the two single-coordinate root vectors remain. [step 1.1, step 1.2, step 2.1, algebra]

4.1 Give the real weight span the standard Euclidean realization: for type $A$, identify the difference functionals with $e_i-e_j$ in $\sum t_i=0\subseteq\mathbb R^n$; otherwise identify $\varepsilon_i$ with the orthonormal $e_i$ in $\mathbb R^n$. The lists are finite, omit zero and are reduced. They span: adjacent differences span the type $A$ hyperplane, the coordinate roots span types $B,C$, and $e_i-e_j,e_i+e_j$ span every coordinate direction in type $D$ for $n\ge2$. Reflection in $e_i-e_j$ exchanges coordinates $i,j$; reflection in $e_i+e_j$ exchanges and negates them; reflection in $e_i$ or $2e_i$ negates coordinate $i$. Each operation preserves the appropriate list. For denominator roots of squared length two, the Cartan integer is the integer dot product. For denominator $e_i$ it is $2\beta_i$ and for denominator $2e_i$ it is $\beta_i$, again integral. These computations verify every axiom of [L4], including the smallest allowed ranks. In particular, the squared norm four of a long type $C$ root is included in the denominator calculation. [L4, step 3.1, algebra]

5.1 The type labels can be verified from the displayed sets rather than imported from an existence interface. Choose positives $e_i-e_j$ and $e_i+e_j$ for $i<j$, together with $e_i$ in type $B$ or $2e_i$ in type $C$. The proposed bases are $\alpha_i=e_i-e_{i+1}$ for type $A$; the same $\alpha_i$ for $i<n$ followed by $\alpha_n=e_n$ for $B_n$ or $\alpha_n=2e_n$ for $C_n$; and $\alpha_i=e_i-e_{i+1}$ for $i<n$ followed by $\alpha_n=e_{n-1}+e_n$ for $D_n$. They are bases in the sense of [L3]: for example $e_i-e_j=\sum_{k=i}^{j-1}\alpha_k$; in type $B$, $e_i=\sum_{k=i}^{n}\alpha_k$ and $e_i+e_j=\sum_{k=i}^{j-1}\alpha_k+2\sum_{k=j}^{n}\alpha_k$; in type $C$, $2e_i=2\sum_{k=i}^{n-1}\alpha_k+\alpha_n$ and $e_i+e_j=\sum_{k=i}^{j-1}\alpha_k+2\sum_{k=j}^{n-1}\alpha_k+\alpha_n$. In type $D$, the same difference formula holds, while $e_i+e_j=\sum_{k=i}^{j-1}\alpha_k+2\sum_{k=j}^{n-2}\alpha_k+\alpha_{n-1}+\alpha_n$ for $j<n$, and $e_i+e_n=\sum_{k=i}^{n-2}\alpha_k+\alpha_n$; hence every positive root has nonnegative integral coordinates and each height-one $\alpha_i$ is indecomposable. All $A$ and $D$ simple roots have squared length two; their nonzero off-diagonal inner products are $-1$, giving the $A$ chain and, for $n\ge4$, the $D_n$ fork at $\alpha_{n-2}$. For $B_n$ the last pair has Cartan entries $a_{n-1,n}=-1$, $a_{n,n-1}=-2$, while for $C_n$ they are $-2,-1$; all other adjacent pairs give $-1,-1$. By [L3] these are exactly the stable-range diagrams $A_{n-1},B_n,C_n,D_n$, with the required double-edge directions, so no coordinate information is borrowed from [L3]'s supplier proof. For the small ranks, $B_1=\{\pm e_1\}$ and $C_1=\{\pm2e_1\}$ are $A_1$ up to scale. The map $e_1\mapsto e_1+e_2$, $e_2\mapsto e_1-e_2$ carries $B_2$ to $C_2$ and scales the inner product by two. The two orthogonal pairs $\pm(e_1-e_2),\pm(e_1+e_2)$ give $D_2=A_1\sqcup A_1$. For $D_3$, the orthogonal vectors $u_1=(1,1,-1,-1)/2$, $u_2=(1,-1,1,-1)/2$, $u_3=(1,-1,-1,1)/2$ form an orthonormal basis of the sum-zero hyperplane in $\mathbb R^4$. The isometry $e_i\mapsto u_i$ maps its twelve roots $\pm e_i\pm e_j$ onto the twelve differences of coordinate vectors in $\mathbb R^4$, which are $A_3$. Thus all stable and low-rank type identifications follow from explicit Cartan matrices and maps. [L3, step 3.1, step 4.1, algebra] ∎

---
id: lem-finite-cellular-cyclic-squares-cartan-and-basis-action
kind: lemma
title: Finite-cellular cyclic squares, Cartan formula, and cyclic-basis action
status: published
origin: pipeline
deps: ["lem-equivariant-p-fold-external-power-and-diagonal", "lem-free-cyclic-resolution-and-transfer-for-power-operations", "def-barycentric-subdivision-of-an-abstract-simplicial-complex", "thm-barycentric-subdivision-realizes-homeomorphically", "lem-real-projective-space-cellular-homology-and-pinch-map", "thm-cellular-homology-computes-singular-homology", "prop-cellular-maps-induce-cellular-chain-maps", "cor-cohomology-over-a-field-is-dual-to-homology-over-that-field", "def-singular-cup-product-on-cochains", "thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses", "prop-cup-product-is-natural-unital-and-associative", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: N. E. Steenrod and D. B. A. Epstein, Cohomology Operations
      url: https://web.archive.org/web/20230124163804if_/https://people.math.rochester.edu/faculty/doug/otherpapers/steenrod-epstein.pdf
      locator: Chapter VII Lemmas 4.4 and 4.7, printed pages 105--108; section 5 and Theorem 6.7, printed pages 108--114
---

## Statement

Assume AC and specialize the finite cellular cyclic-power construction to
$p=2$. For a finite oriented regular cell complex $K$ and
$x\in H^q_{\mathrm{cell}}(K;\mathbb F_2)$, write

$$d^*\mathcal P(x)=\sum_{r=0}^{2q}[w_r]\times D_r(x)$$

and define

$$Sq_{\mathrm{cyc}}^i(x)=D_{q-i}(x)\quad(0\leq i\leq q),\qquad Sq_{\mathrm{cyc}}^i(x)=0\quad(i<0\ \text{or}\ i>q).$$

These operations are additive and natural,

$$Sq_{\mathrm{cyc}}^0x=x,\qquad Sq_{\mathrm{cyc}}^q x=x\smile x,$$

and they satisfy the external and internal Cartan formulas

$$Sq_{\mathrm{cyc}}^k(x\times y)=\sum_{i+j=k}Sq_{\mathrm{cyc}}^i(x)\times Sq_{\mathrm{cyc}}^j(y),$$

$$Sq_{\mathrm{cyc}}^k(x\smile y)=\sum_{i+j=k}Sq_{\mathrm{cyc}}^i(x)\smile Sq_{\mathrm{cyc}}^j(y).$$

If $t=[w_1]$ is the degree-one generator of
$H^*(BC_2;\mathbb F_2)=\mathbb F_2[t]$, “computed on a finite skeleton”
means computed on the finite regular simplicial model $Q_N$ constructed in
step 5.1, not on the nonregular one-cell projective CW skeleton.  For every
$N>r+j$, restriction identifies $t^d$ with a cellular class $t_N^d$ for
$d\le r+j$, and

$$Sq_{\mathrm{cyc}}^j(t^r)=\binom rj t^{r+j}.$$

This finite-cellular lemma does not identify $Sq_{\mathrm{cyc}}$ with the
singular cup-$i$ squares.

## Facts & Assumptions

**Given:** AC, finite oriented regular cell complexes, the mod-two cyclic
resolution $W$, and the coefficient operations $D_r$ of the cyclic power.

[F1] The finite cellular cyclic-power class is natural on finite regular
complexes
([[lem-equivariant-p-fold-external-power-and-diagonal]]).

[F2] Its diagonal pullback has unique coefficients $D_r$
([[lem-equivariant-p-fold-external-power-and-diagonal]]).

[F3] Its restriction to a zero-cell fiber is the ordinary external power
([[lem-equivariant-p-fold-external-power-and-diagonal]]).

[F4] For $p=2$, the cyclic-resolution quotient has
$H^*(BC_2;\mathbb F_2)=\mathbb F_2[t]$ with $t=[w_1]$
([[lem-free-cyclic-resolution-and-transfer-for-power-operations]]).

[F5] At $p=2$, the explicit cyclic-resolution diagonal on an even cell has
every even--even and odd--odd split with coefficient one
([[lem-free-cyclic-resolution-and-transfer-for-power-operations]]).

[F6] AC supplies a choice function for every set-indexed family of nonempty
sets ([[def-axiom-of-choice]]).

[F7] The external power is independent of its cocycle and free-resolution
choices ([[lem-equivariant-p-fold-external-power-and-diagonal]]).

[F8] The explicit cyclic-resolution diagonal on an odd cell has every split
with coefficient one
([[lem-free-cyclic-resolution-and-transfer-for-power-operations]]).

[F9] Every cyclic-power coefficient $D_r$ is additive
([[lem-equivariant-p-fold-external-power-and-diagonal]]).

[F10] The vertices of $\operatorname{sd}L$ are the nonempty faces of $L$,
and its simplices are their strict chains
([[def-barycentric-subdivision-of-an-abstract-simplicial-complex]]).

[F11] Barycentric subdivision realizes homeomorphically, compatibly with
subcomplex inclusions
([[thm-barycentric-subdivision-realizes-homeomorphically]]).

[F12] The usual projective CW structure has one cell in every degree through
$N$, with integral boundary $2$ in positive even degree and $0$ in odd
degree ([[lem-real-projective-space-cellular-homology-and-pinch-map]]).

[F13] Cellular homology computes singular homology naturally for cellular
maps ([[thm-cellular-homology-computes-singular-homology]]), and a cellular
map induces the corresponding cellular chain map
([[prop-cellular-maps-induce-cellular-chain-maps]]).

[F14] Under AC, evaluation identifies cohomology over a field naturally with
the full dual of homology
([[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]]).

[F15] Singular cup product is the Alexander--Whitney diagonal evaluation
([[def-singular-cup-product-on-cochains]]), and Alexander--Whitney and shuffle
are augmentation-preserving natural chain-homotopy inverses
([[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]]).

[F16] Pullback in singular cohomology is a unital ring homomorphism
([[prop-cup-product-is-natural-unital-and-associative]]).

## Proof

**Proof technique:** compare powers across the cyclic-resolution diagonal,
determine the zero-square scalar on spheres, and apply the resulting total
square to the polynomial generator.

1.1 Define the finite-cellular operations. [given, F1, F2, F9]
The formula in the statement merely reindexes the unique coefficients from
[F2]. Additivity and naturality of every $Sq_{\mathrm{cyc}}^i$ follow from
those of $D_{q-i}$; the two outside-range clauses are definitions. All
operations here remain on the finite oriented regular cellular model.

1.2 Prove the external coefficient formula. [F2, F5, F7, F8]
Let $x\in H^q_{\mathrm{cell}}(K;\mathbb F_2)$ and
$y\in H^s_{\mathrm{cell}}(L;\mathbb F_2)$. Regrouping the four factors shows
on pure tensors that the external square of $x\times y$ is the product of the
external squares of $x$ and $y$. Compare the one cyclic resolution on the
left with two cyclic resolutions on the right through the explicit
equivariant diagonal of [F5] and [F8]. In characteristic two there is no
Koszul sign. The two quotient-diagonal formulas contain exactly one term
$e_a\otimes e_b$ for every $a+b=n$. After pulling back the space diagonals,
uniqueness of the coordinates from [F2] therefore gives

$$D_n(x\times y)=\sum_{a+b=n}D_a(x)\times D_b(y).$$

The sum is finite, and the pure-tensor equality also shows that no comparison
or Künneth splitting choice is hidden in this formula.

1.3 Reduce the coefficient $D_q$ and the unstable range to a sphere. [F1, F2, F9]
Restriction from $K$ to its $q$-skeleton is injective in cellular degree $q$:
if the restricted cocycle is the coboundary of a degree-$(q-1)$ cellular
cochain, the same cochain gives that coboundary on all of $K$. Thus naturality
in [F1] permits replacement of $K$ by its $q$-skeleton.

For a cellular cocycle $c$ on a $q$-dimensional complex, collapse the
$(q-1)$-skeleton and map each oriented $q$-cell to $S^q$ by the standard map
of mod-two degree $c(e)\in\{0,1\}$. The maps agree on the collapsed
boundaries, so they assemble to a specified cellular map
$f:K\to S^q$, and $f^*\iota_q=[c]$ for the fundamental cohomology class
$\iota_q$. Consequently $D_q(x)=a_qx$ for one scalar
$a_q\in\mathbb F_2$.

The same reduction proves $D_n(x)=0$ for $n>q$. For $q<n<2q$, its value on
$\iota_q$ lies in
$H^{2q-n}(S^q;\mathbb F_2)=0$. For $n=2q$ and $q>0$, restriction to a point
is an isomorphism in degree zero, while naturality and additivity give
$D_{2q}(0)=0$. For $n>2q$ the target degree is negative. When $q=0$, every
$n>q$ already has negative target degree.

2.1 Identify the top square. [F3, step 1.1]
The zero resolution coordinate is detected by restriction to a chosen
augmented zero-cell of $W$. By [F3] that restriction is $x\times x$.
Pulling it back along the diagonal of $K$ gives
$D_0(x)=x\smile x$. Since $Sq_{\mathrm{cyc}}^q=D_0$ by step 1.1, this proves
the top-square identity.

3.1 Compute the scalar $a_q$. [F7, step 1.2, step 1.3, step 2.1]
For $q=0$, step 2.1 gives $D_0(a)=a^2=a$, so $a_0=1$. For $q=1$, use the
regular circle with vertices $A,B$, oriented edges $J_1,J_2$ having the same
boundary, fundamental cycle $J_1-J_2$, and cocycle $u(J_1)=1,u(J_2)=0$.
Over $\mathbb F_2$, prescribe the relevant component of the carried
equivariant diagonal by

$$\Phi\bigl(e_1\otimes(J_1-J_2)\bigr)=J_1\otimes J_1+J_2\otimes J_2.$$

Its boundary is
$(A+B)\otimes(J_1+J_2)+(J_1+J_2)\otimes(A+B)$, exactly
$(1+T)\Phi(e_0\otimes(J_1-J_2))$ for the Alexander--Whitney diagonal.
Thus this is the required component of a carried comparison, and [F7] permits
its use. Evaluation by $u\otimes u$ gives
$(w_1\times D_1u)(e_1\times(J_1-J_2))=1$. Hence $D_1u=u$ and $a_1=1$.

For $q>1$, take fundamental classes
$u\in H^{q-1}(S^{q-1};\mathbb F_2)$ and
$v\in H^1(S^1;\mathbb F_2)$. Step 1.3 kills
$D_a(u)$ for $a>q-1$ and $D_b(v)$ for $b>1$. Hence the coefficient
$n=q$ in step 1.2 has only the split $(a,b)=(q-1,1)$:

$$a_q(u\times v)=D_q(u\times v)=D_{q-1}(u)\times D_1(v)=a_{q-1}a_1(u\times v).$$

The displayed cross product is nonzero, so $a_q=a_{q-1}a_1=1$ by induction.
Therefore $D_q(x)=x$, which is $Sq_{\mathrm{cyc}}^0x=x$.

4.1 Convert the coefficient formula to Cartan. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1]
Put $n=q+s-k$ in step 1.2 and set $i=q-a$, $j=s-b$. The vanishing from
step 1.3 removes precisely the terms with $i<0$ or $j<0$, and the definition in
step 1.1 removes those above the input degrees. The equation $a+b=q+s-k$ is
equivalent to $i+j=k$, so

$$Sq_{\mathrm{cyc}}^k(x\times y)=\sum_{i+j=k}Sq_{\mathrm{cyc}}^i(x)\times Sq_{\mathrm{cyc}}^j(y).$$

Pulling this equality back along the diagonal
$K\to K\times K$ gives the internal formula. Step 3.1 supplies the
$k=0$ endpoint, and step 2.1 supplies the two top endpoints.

5.1 Compute the cyclic-basis action on compatible finite regular projective models. [F1, F4, F10, F11, F12, F13, F14, F15, F16, step 1.3, step 2.1, step 3.1, step 4.1]
First construct the regular models needed to apply step 4.1.
For $N\ge0$, let $L_N$ be the boundary complex of the $(N+1)$-dimensional
cross-polytope. Its vertices are $\{\pm e_0,\ldots,\pm e_N\}$, and its
faces are exactly the subsets containing no antipodal pair. Radial projection
realizes $L_N$ as $S^N$, equivariantly for the antipodal actions. Put

$$Q_N=(\operatorname{sd}L_N)/(F\sim-F).$$

This orbit object is an abstract simplicial complex, not merely a cell
quotient. Indeed, a simplex of $\operatorname{sd}L_N$ is a strict chain of
nonempty faces by [F10]. If two such chains have the same vertex-orbits,
translate one chain so that their maximal faces agree. For a face $F$
contained in that common maximal face, at most one of $F$ and $-F$ is
contained there, since a face of $L_N$ contains no antipodal vertex pair.
Thus every lower face representative, and hence the whole chain, agrees.
In particular no simplex has two vertices identified, and two orbit simplices
with the same vertices are equal. The quotient therefore has the
closed-simplex face structure of a finite simplicial complex, so it is a
finite regular cell complex.

By [F11], $|\operatorname{sd}L_N|\cong|L_N|\cong S^N$, and the barycentric
homeomorphism commutes with the antipodal action because it sends the vertex
$F$ to the barycenter of $F$. Hence

$$|Q_N|\cong S^N/(x\sim-x)=\mathbb {RP}^N.$$

The coordinate inclusions $L_N\subset L_{N+1}$ commute with antipodes;
[F10] makes their subdivisions simplicial and gives compatible inclusions
$Q_N\subset Q_{N+1}$. Lexicographically ordering the signed coordinate
vertices and then the face chains specifies orientations of all simplices,
so this construction makes no choice from a family.

**Basis and product identification.**
The standard one-cell CW filtration of $\mathbb {RP}^{\infty}$ is the quotient
of the standard antipodal sphere filtration. With one lifted cell chosen in
each degree, its cellular complex over $\mathbb F_2[C_2]$ is the cyclic
resolution $W$: the two attaching hemispheres give alternately $T-1$ and
$1+T$, which are the two differentials of [F4] at $p=2$. Thus its quotient
cochain in degree $d$ is $w_d$, and [F4] identifies $t^d=[w_d]$.

By [F12], after passing to $\mathbb F_2$ the standard one-cell projective
complex has zero differential and one generator in each degree $0\le d\le N$.
The standard inclusion into the infinite filtration is the identity on every
cell already present. Consequently [F13] and natural field duality [F14]
show that

$$H^d(BC_2;\mathbb F_2)\longrightarrow H^d(\mathbb {RP}^N;\mathbb F_2)$$

is an isomorphism for $d\le N$. By [F16] it carries $t^d$ to the $d$th
power of the restricted class.

It remains to verify that this singular product is the cellular product used
by the operation on $Q_N$. Choose a cellular-to-singular chain map
$j:C_*^{\mathrm{cell}}(Q_N;\mathbb F_2)\to C_*(|Q_N|;\mathbb F_2)$ carried
by closed simplices. The relative carrier theorem in [F1] constructs it,
and [F13] identifies its homology map with the cellular--singular comparison;
[F14] therefore makes $j^*$ a cohomology isomorphism. The two maps

$$(j\otimes j)\Phi_C(e_0,-),\qquad \operatorname{AW}\,\Delta_\#j$$

from cellular chains of $Q_N$ to twofold singular chains are both
augmentation-preserving and carried by the product of each closed simplex
with itself. Such a carrier is augmented acyclic: each closed simplex is a
disk, its singular complex contracts to a vertex, and [F15] compares the
product complex with the tensor product. The carrier uniqueness clause of
[F1] therefore homotopes these two maps. Dual evaluation and [F15] show that
$j^*$ carries singular cup product to the cellular cup product appearing in
step 2.1. Transporting through the homeomorphism constructed above, write
$t_N=j^*(t|_{\mathbb {RP}^N})$. We have proved, for every $d\le N$,

$$t_N^d=j^*(t^d|_{\mathbb {RP}^N})=j^*([w_d]|_{\mathbb {RP}^N}).$$

The nonregular one-cell projective CW structure was used only for this
cohomology calculation; it was not supplied to $Sq_{\mathrm{cyc}}$.

**Basis-action calculation.**
Fix $r,j\ge0$ and choose $N>r+j$. On the finite regular complex $Q_N$,
steps 1.3, 3.1, and 2.1 give

$$Sq_{\mathrm{cyc}}(t_N)=Sq_{\mathrm{cyc}}^0(t_N)+Sq_{\mathrm{cyc}}^1(t_N)=t_N+t_N^2.$$

The internal Cartan formula in step 4.1 and the basis identification above
then give

$$Sq_{\mathrm{cyc}}(t_N^r)=(t_N+t_N^2)^r=\sum_{a=0}^r\binom ra t_N^{r+a}.$$

Comparing homogeneous degree $r+j$ proves
$Sq_{\mathrm{cyc}}^j(t_N^r)=\binom rj t_N^{r+j}$. This includes $r=0$,
$j=0$, and $j>r$. The compatible finite regular inclusions constructed above
and naturality from step 1.1 make the answer independent of every larger
$N$; the basis identification therefore permits the stable notation
$Sq_{\mathrm{cyc}}^j(t^r)=\binom rj t^{r+j}$.

6.1 The empty complex has zero cellular chains and all its cyclic-square coefficients vanish. [F1, F6, F14, step 1.1, step 1.3, step 2.1, step 3.1, step 4.1, step 5.1]
For an empty complex, a zero cellular complex, or the zero class, all
coordinates vanish. On a point only degree zero occurs, and
$Sq_{\mathrm{cyc}}^0(a)=a^2=a$. Negative and above-degree square indices are
zero by definition; the degree-zero, zero-square, and top-square endpoints
were calculated above. The formulas include zero factors and the unit
$t^0=t_N^0=1$. The model $Q_0$ is a point, while every basis computation
chooses $N>r+j$, so no requested output lies above its finite model.

The cyclic operation itself uses regular cellular chains and takes no
normalization quotient. The ordinary singular comparison in step 5.1 uses
the unnormalized complex of [F15], so degenerate singular simplices remain
present and cause no exceptional case. AC from [F6] is used in the
representative and filling choices in [F1]'s equivariant-carrier comparisons
and through the natural field duality [F14]. The sphere maps use the
prescribed degree-zero or degree-one map on each of finitely many cells; the
cross-polytope models, their orientations, every resolution diagonal and
every binomial sum are explicit and finite. The singular comparison concerns
only the ordinary cup product; no singular cup-$i$ comparison is asserted. ∎

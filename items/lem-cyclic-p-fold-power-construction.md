---
id: lem-cyclic-p-fold-power-construction
kind: lemma
title: Cyclic p-fold power construction
status: draft
origin: pipeline
deps: ["lem-free-cyclic-resolution-and-transfer-for-power-operations", "lem-equivariant-p-fold-external-power-and-diagonal", "lem-natural-singular-cohomology-identities-are-detected-on-finite-regular-complexes", "thm-cellular-homology-computes-singular-homology", "thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses", "thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology", "thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism", "def-bockstein-connecting-operation", "prop-the-mod-two-bockstein-is-a-derivation", "prop-bocksteins-are-natural-and-commute-with-suspension", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: N. E. Steenrod and D. B. A. Epstein, Cohomology Operations
      url: https://web.archive.org/web/20230124163804if_/https://people.math.rochester.edu/faculty/doug/otherpapers/steenrod-epstein.pdf
      locator: Chapter VII sections 2--5, printed pages 99--112, and Chapter VIII section 2, printed pages 122--124
---

## Statement

Assume AC and let $p$ be prime. For every $q\geq0$, every integer $j$, and
every space $X$, the cyclic construction gives a natural additive operation

$$
D_j:H^q(X;\mathbb F_p)\longrightarrow H^{pq-j}(X;\mathbb F_p),
$$

with $D_j=0$ for $j<0$ or $j>(p-1)q$. Its degree-zero coefficient is
$D_0(x)=x^p$. On a finite regular cell complex it agrees, under the
cellular--singular comparison, with the coefficient of $[w_j]$ in the
diagonal pullback of the equivariant external $p$th power.

For odd $p$, put $m=(p-1)/2$. If $q$ is even, $D_j$ can be nonzero only for
$j=2r(p-1)$ or $2r(p-1)-1$; if $q$ is odd, it can be nonzero only for
$j=(2r+1)(p-1)$ or $(2r+1)(p-1)-1$, where $r\geq0$. With the positive
mod-$p$ Bockstein used in this library,

$$
\beta D_{2r}=-D_{2r-1},\qquad \beta D_{2r-1}=0,
$$

where $D_{-1}=0$. If $x\in H^q(X;\mathbb F_p)$, then

$$
D_{(p-1)q}(x)=a_qx,\qquad a_q=(-1)^{mq(q+1)/2}(m!)^q\in\mathbb F_p^\times.
$$

For $p=2$ the same formula has $a_q=1$. Finally, for
$x\in H^r(X;\mathbb F_p)$ and $y\in H^s(Y;\mathbb F_p)$,

$$
D_{2k}(x\times y)=(-1)^{p(p-1)rs/2}\sum_{a+b=k}D_{2a}(x)\times D_{2b}(y)\quad(p\text{ odd}),
$$

and $D_k(x\times y)=\sum_{a+b=k}D_a(x)\times D_b(y)$ for $p=2$.

## Facts & Assumptions

**Given:** AC, the prime $p$, the standard cyclic resolution $W$, a degree
$q$ class, and the positive Bockstein convention.

[F1] On finite regular cell complexes the diagonal pullback of the
equivariant external power has unique coefficients, and every coefficient
operation is additive
([[lem-equivariant-p-fold-external-power-and-diagonal]]).

[F2] The relative equivariant carrier theorem gives existence and homotopy
uniqueness, relative to a prescribed subcomplex, for carried extensions
([[lem-equivariant-p-fold-external-power-and-diagonal]]).

[F3] The standard cyclic resolution has one basis class $[w_j]$ in each
degree; for odd $p$ its coefficient algebra has $v=[w_1]$,
$u=[w_2]=\beta v$, $[w_{2r}]=u^r$, and $[w_{2r+1}]=u^rv$
([[lem-free-cyclic-resolution-and-transfer-for-power-operations]]).

[F4] Transfer after restriction is multiplication by the subgroup index
([[lem-free-cyclic-resolution-and-transfer-for-power-operations]]).

[F5] A natural mod-$p$ identity that holds on all finite regular complexes
holds on every space
([[lem-natural-singular-cohomology-identities-are-detected-on-finite-regular-complexes]]).

[F6] Cellular homology agrees with singular homology
([[thm-cellular-homology-computes-singular-homology]]).

[F7] Alexander--Whitney and shuffle are natural augmentation-preserving chain
homotopy inverses
([[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]]).

[F8] Homotopy equivalences induce singular-homology isomorphisms
([[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]).

[F9] Under AC and the finite-free hypothesis, external product is an additive
cohomological Kunneth isomorphism
([[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[F10] The Bockstein construction begins by choosing a cochain lift of a
cocycle
([[def-bockstein-connecting-operation]]).

[F11] For the cyclic mod-$p$ sequence, least nonnegative residue
representatives give a canonical cochain lift without AC
([[def-bockstein-connecting-operation]]).

[F12] The mod-$p$ Bockstein satisfies the signed cup-product derivation rule
([[prop-the-mod-two-bockstein-is-a-derivation]]).

[F13] The Bockstein is natural in maps of spaces
([[prop-bocksteins-are-natural-and-commute-with-suspension]]).

[A1] [[def-axiom-of-choice]] supplies the carrier fillings, the dual
cellular--singular comparison, and the finite-detection complement used below.

## Proof

**Proof technique:** construct the equivariant diagonal on universal singular
simplices, compare it with the finite cellular construction, and perform the
normalizer, transfer, circle, and product calculations coefficient by
coefficient.

1.1 Construct an equivariant singular diagonal. [F2, F3, F7, F8, A1]
For the identity simplex $\iota_n:\Delta^n\to\Delta^n$, construct elements
$\Phi(e_j\otimes\iota_n)\in C_*(\Delta^n;\mathbb F_p)^{\otimes p}$ by
induction on $j+n$. The already defined boundary is a cycle because the
cyclic-resolution differential squares to zero. The affine contraction of
$\Delta^n$ to its first vertex, [F8], and the iterated chain equivalence [F7]
make its augmented $p$fold tensor complex acyclic, so a filling exists.
[A1] selects one filling for each nonempty extension problem. Define the
other $C_p$-translates equivariantly, fix degree zero to be the iterated
Alexander--Whitney diagonal, and put

$$
\Phi_X(e_j\otimes\sigma):=(\sigma_\#)^{\otimes p}\Phi(e_j\otimes\iota_n)
$$

for every singular $n$-simplex $\sigma$. The inductive boundary equation says
that $\Phi_X:W\otimes C_*(X)\to C_*(X)^{\otimes p}$ is a chain map.
The displayed formula makes it strictly natural in $X$, including when
$\sigma$ is degenerate. The relative carrier comparison in [F2] shows that
two systems so constructed are equivariantly chain-homotopic.

2.1 Define the singular coefficients and prove well-definedness. [F2, F3, step 1.1]
For a degree-$q$ cocycle $c$, define

$$
D_j(c)(z):=c^{\otimes p}\Phi_X(e_j\otimes z).
$$

The cyclic rotation fixes $c^{\otimes p}$: for odd $p$ its Koszul exponent is
$q^2(p-1)$, which is even, and for $p=2$ the sign is $1$ in the coefficient
field. Evaluating the chain-map equation therefore kills both $T-1$ and
$N=1+\cdots+T^{p-1}$ and proves that $D_j(c)$ is a cocycle. Evaluating a
comparison homotopy proves independence of $\Phi$.

If $c'=c+\delta b$, the chain map on $I\otimes C_*(X)$ with endpoint values
$c,c'$ and interval-edge value $b$ gives, after the equivariant interval
extension of [F2], a cochain homotopy between the two $p$fold evaluations.
Thus the class depends only on $x=[c]$. Strict naturality in step 1.1 proves
naturality of $D_j$.

3.1 Prove additivity and identify $D_0$. [F3, F4, F7, step 2.1]
For cocycles $c,d$, the mixed words in
$(c+d)^{\otimes p}-c^{\otimes p}-d^{\otimes p}$ form free $C_p$-orbits.
Taking the lexicographically least word in each finite orbit writes their sum
as $\operatorname{Tr}_1^{C_p}z$. The explicit contraction of $W$ after
forgetting its action, together with [F7], makes restriction from equivariant
to ordinary cohomology onto. Hence [F4]'s
$\operatorname{Tr}\operatorname{Res}=p=0$ shows that diagonal pullback kills
the mixed class. Uniqueness of the $[w_j]$ coordinates gives
$D_j(x+y)=D_j(x)+D_j(y)$.

At $j=0$, the fixed augmentation and the degree-zero diagonal in step 1.1
give the iterated Alexander--Whitney representative for the ordinary cup
power. Therefore $D_0(x)=x^p$.

3.2 Compare with finite cellular coefficients. [F1, F2, F6, F7, F8, A1, step 1.1, step 2.1]
For a finite regular $K$, barycentric subdivision of each closed cell defines
a cell-carried chain map
$\iota:C_*^{\mathrm{cell}}(K;\mathbb F_p)\to C_*^{\mathrm{sing}}(K;\mathbb F_p)$.
By [F6] it is a homology isomorphism. Its mapping cone is acyclic; [A1]
chooses complements to its boundary subspaces, whose inverse boundary maps
contract the cone. Dualizing proves that $\iota^*$ is a cohomology
isomorphism.

The cellular diagonal from [F1] followed by $\iota^{\otimes p}$ and the
singular diagonal from step 1.1 preceded by $1\otimes\iota$ lie in the same
closed-cell $p$fold carrier. Each closed cell is a disk, and [F7], [F8] make
that carrier augmented acyclic. The relative comparison in [F2] gives an
equivariant chain homotopy between the two maps. Evaluating it on
$c^{\otimes p}$ proves that every singular $D_j$ corresponds to the finite
cellular coefficient stated in [F1].

4.1 Establish the sharp range on finite regular complexes. [F1, step 3.2]
Restriction to the $q$-skeleton is injective on $H^q$ and an isomorphism in
lower degrees by the cellular cochain complex. Collapse its $(q-1)$-skeleton
and map each $q$-cell to $S^q$ with the integer degree representing the
chosen coefficient of a cellular cocycle. This gives a map $K^q\to S^q$
pulling the sphere generator back to the class. Naturality therefore reduces
$D_j$ for $j>(p-1)q$ to a class in
$H^{pq-j}(S^q;\mathbb F_p)$ below degree $q$. It is zero except possibly in
degree zero. In that last case $j=pq$ and $q>0$; restriction to a point sends
the sphere generator to zero, so additivity sends $D_{pq}$ to zero, while
$H^0(S^q)\to H^0(*)$ is injective. Thus $D_j=0$ throughout the stated range.

4.2 Apply the normalizer action at odd primes. [F3, F13, step 3.2]
For $a\in\mathbb F_p^\times$, multiplication by $a$ permutes the $p$ tensor
positions and conjugates $T$ to $T^a$. Its sign is computed from the
Vandermonde product:

$$
\operatorname{sgn}(i\mapsto ai)=a^{p(p-1)/2}=a^m\quad\text{in }\mathbb F_p.
$$

On $H^*(BC_p;\mathbb F_p)$ the induced map sends $v=[w_1]$ to $av$;
naturality of the positive Bockstein in [F13] sends $u=\beta v$ to $au$.
It therefore multiplies $[w_{2r}]$ by $a^r$ and $[w_{2r+1}]$ by
$a^{r+1}$. On the coefficient line of a degree-$q$ input, the position
permutation acts by $a^{mq}$. Coordinate uniqueness forces
$r\equiv mq\pmod{p-1}$ for $j=2r$, and
$r+1\equiv mq\pmod{p-1}$ for $j=2r+1$. Separating even and odd $q$ gives
exactly the four families in the Statement.

4.3 Derive the external product formula. [F1, F3, F7, step 1.1, step 3.2]
Take the tensor product of the two equivariant power cocycles and pull it
back along the diagonal $C_p\to C_p\times C_p$. The shuffle moving $p$
degree-$s$ factors past the degree-$r$ factors contributes
$(-1)^{p(p-1)rs/2}$. The cyclic diagonal in [F3] gives every split with
coefficient one when $p=2$; for odd $p$, its even coordinate has only the
even--even splits, since the odd--odd coefficient $p(p-1)/2$ is zero in
$\mathbb F_p$. Comparing the unique $w_k$ coordinates yields the two
displayed external formulas. The carrier comparison in step 1.1 makes this
chain calculation valid for arbitrary spaces, not only finite complexes.

4.4 Relate adjacent coefficients by the positive Bockstein. [F3, F4, F10, F11, F12, F13, step 2.1, step 3.1]
Lift $c$ by its canonical residues [F11]. Writing $\delta\widetilde c=p h$, the
coboundary of $\widetilde c^{\otimes p}$ divided by $p$ is the cyclic sum of
the $p$ words with one $h$ and $p-1$ copies of $c$. For odd $p$ this is a
transfer, so step 3.1's transfer argument makes the Bockstein of the pulled
back total class zero. By [F3] and [F10], our positive convention has
$\beta w_{2r}=0$ and $\beta w_{2r-1}=w_{2r}$. Applying the signed derivation
rule [F12] to $\sum_jw_j\times D_j(x)$ and comparing even and odd coordinates
gives

$$
\beta D_{2r}+D_{2r-1}=0,\qquad \beta D_{2r-1}=0.
$$

This explains the minus sign relative to sources using
$\beta w_{2r-1}=-w_{2r}$.

4.5 Compute the circle coefficient. [F1, F3, step 3.2]
Give $S^1$ two oriented edges $J_1,J_2$ with common boundary and let the
cocycle $z$ take values $1,0$ on them. Steenrod--Epstein's carried map is
obtained recursively from the interval contraction. At resolution degree
$p-1=2m$, its displayed finite sum has the single surviving multi-index
$\alpha_i=\beta_i=0$ and hence

$$
\Phi(e_{p-1}\otimes(J_1-J_2))=m!(J_1^p-J_2^p).
$$

Tensor evaluation of $z^{\otimes p}$ on $J_1^p$ contributes the Koszul sign
$(-1)^{p(p-1)/2}=(-1)^m$, while it vanishes on $J_2^p$. Therefore
$D_{p-1}(z)=(-1)^m m!z$, so $a_1=(-1)^m m!$. For $p=2$ the same two-edge
calculation has coefficient one.

5.1 Compute every top coefficient. [F9, step 4.1, step 4.3, step 4.5]
For $q\geq1$, let $u$ be the generator in degree $q-1$ on $S^{q-1}$ and let
$z$ be the circle class. [F9] makes $u\times z$ nonzero. The sharp range
already proved leaves only the two
top factors in step 4.3, so

$$
a_q=(-1)^{p(p-1)(q-1)/2}a_{q-1}a_1=(-1)^{mq}m!\,a_{q-1}.
$$

Starting with $a_0=1$ gives
$a_q=(-1)^{mq(q+1)/2}(m!)^q$. None of $1,\ldots,m$ is zero modulo $p$, so
$a_q$ is a unit. At $p=2$ the same recurrence keeps $a_q=1$.

6.1 Pass the finite identities to every space and check boundaries. [F5, A1, step 2.1, step 3.1, step 3.2, step 4.1, step 4.2, step 4.3, step 4.4, step 5.1]
For fixed $p,q,j$, each residual in steps 4.1, 4.2, and 5.1 is a natural
map between fixed singular cohomology degrees. It vanishes on finite regular
complexes by steps 3.2--5.1, so [F5] makes it vanish on every space. The
external and Bockstein formulas were already proved directly on singular
cochains.

For the empty space and the zero class every operation is zero. At $q=0$,
$D_0(a)=a^p=a$ and every positive $D_j$ is outside the sharp range; on a
point these are all cases. The indices $j=0,(p-1)q$ are included, and all
negative or oversized indices are declared zero. Step 4.2 treats both input
parities, while step 4.4 treats both adjacent coefficient parities and
$r=0$ via $D_{-1}=0$. Degenerate singular simplices occur explicitly in the
universal-simplex formula of step 1.1. Both external factors may be zero or a
point, and their finite sums include both endpoints. No biconditional is
asserted. AC is used exactly for the universal carrier fillings in step 1.1,
the dual comparison in step 3.2, and the detection complement in [F5]; every
transfer orbit, multi-index, product sum, and circle calculation is finite. ∎

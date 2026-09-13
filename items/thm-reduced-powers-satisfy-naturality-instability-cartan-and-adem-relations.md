---
id: thm-reduced-powers-satisfy-naturality-instability-cartan-and-adem-relations
kind: theorem
title: Reduced powers satisfy naturality, instability, Cartan, and Adem relations
status: draft
origin: pipeline
deps: ["def-mod-p-reduced-power-operations", "lem-cyclic-p-fold-power-construction", "lem-wreath-double-power-coefficient-symmetry", "lem-free-cyclic-resolution-and-transfer-for-power-operations", "def-bockstein-connecting-operation", "prop-bocksteins-are-natural-and-commute-with-suspension", "prop-the-mod-two-bockstein-is-a-derivation", "lem-natural-singular-cohomology-identities-are-detected-on-finite-regular-complexes", "thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism", "def-stable-natural-cohomology-operation", "thm-long-exact-sequence-of-a-pair-in-singular-cohomology", "thm-homotopic-maps-induce-equal-maps-in-singular-cohomology", "thm-excision-for-singular-cohomology", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: N. E. Steenrod and D. B. A. Epstein, Cohomology Operations
      url: https://web.archive.org/web/20230124163804if_/https://people.math.rochester.edu/faculty/doug/otherpapers/steenrod-epstein.pdf
      locator: Chapter VII sections 4--6 and Chapter VIII sections 1--2, printed pages 104--124
---

## Statement

Assume AC and let $p$ be an odd prime. The normalized operations $P^i$
and $\beta P^i$ are natural stable additive mod-$p$ cohomology
operations, of degrees $2i(p-1)$ and $2i(p-1)+1$, respectively. For
$x\in H^q(X;\mathbb F_p)$,

$$
P^0x=x,\qquad P^ix=0\ \text{if }2i>q,\qquad P^{q/2}x=x^p\ \text{if }q\text{ is even}.
$$

They satisfy the Cartan formula

$$
P^k(x\smile y)=\sum_{i+j=k}P^i(x)\smile P^j(y).
$$

For nonnegative integers $a,b$ with $a<pb$, the first odd-primary Adem
relation is

$$
P^aP^b=\sum_{t=0}^{\lfloor a/p\rfloor}(-1)^{a+t}\binom{(p-1)(b-t)-1}{a-pt}P^{a+b-t}P^t.
$$

For nonnegative integers $a,b$ with $a\leq pb$, the second is

$$
P^a\beta P^b=\sum_{t=0}^{\lfloor a/p\rfloor}(-1)^{a+t}\binom{(p-1)(b-t)}{a-pt}\beta P^{a+b-t}P^t+\sum_{t=0}^{\lfloor(a-1)/p\rfloor}(-1)^{a+t-1}\binom{(p-1)(b-t)-1}{a-pt-1}P^{a+b-t}\beta P^t.
$$

Every binomial coefficient is reduced modulo $p$ and is zero when its lower
index is negative or exceeds its nonnegative upper index. A sum with upper
bound below zero is empty. Operations with negative upper index are zero.

## Facts & Assumptions

**Given:** AC, an odd prime $p$, the normalization $m=(p-1)/2$, mod-$p$
classes, and nonnegative Adem indices $a,b$.

[F1] The operations $P^i$ and $\beta P^i$ are the normalized cyclic
coefficients, with negative indices zero
([[def-mod-p-reduced-power-operations]]).

[F2] The cyclic coefficients are natural and additive, vanish for
$j<0$ or $j>(p-1)q$, and satisfy $D_0(x)=x^p$
([[lem-cyclic-p-fold-power-construction]]).

[F3] The positive-Bockstein recurrence is
$\beta D_{2r}=-D_{2r-1}$ and $\beta D_{2r-1}=0$
([[lem-cyclic-p-fold-power-construction]]).

[F4] The cyclic coefficients satisfy the stated odd-primary external product
formula ([[lem-cyclic-p-fold-power-construction]]).

[F5] On finite regular complexes the two iterated cyclic powers have
coefficients satisfying
$D_{j,k}=(-1)^{jk+p(p-1)q/2}D_{k,j}$
([[lem-wreath-double-power-coefficient-symmetry]]).

[F6] For odd $p$, the cyclic coefficient algebra is
$H^*(C_p;\mathbb F_p)=\mathbb F_p[u]\otimes\Lambda(v)$, with
$|u|=2$, $|v|=1$, and $u=\beta v$
([[lem-free-cyclic-resolution-and-transfer-for-power-operations]]).

[F7] The Bockstein is natural and commutes with the signed reduced
cohomology suspension ([[prop-bocksteins-are-natural-and-commute-with-suspension]]).

[F8] The Bockstein is computed by lifting a cocycle and dividing its
coboundary through the coefficient injection
([[def-bockstein-connecting-operation]]).

[F9] The mod-$p$ Bockstein satisfies the signed product derivation rule
([[prop-the-mod-two-bockstein-is-a-derivation]]).

[F10] A natural mod-$p$ identity valid on every finite regular complex is
valid on every space
([[lem-natural-singular-cohomology-identities-are-detected-on-finite-regular-complexes]]).

[F11] Under AC, cross product with the circle generator is injective by the
cohomological Kunneth isomorphism
([[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[F12] Stability means commutation with the signed reduced cohomology
suspension ([[def-stable-natural-cohomology-operation]]).

[F13] For a well-pointed based space $(X,x_0)$, form the reduced cone
$CX=(X\times I)/(X\times\{1\}\cup\{x_0\}\times I)$ and its quotient by
the height-zero base, $\Sigma X=CX/X$.

[F14] The cone-pair connecting map sends a cocycle to the coboundary of
an extension
([[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]]).

[F15] Homotopic maps induce equal cohomology maps for every abelian
coefficient group
([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F16] Excision identifies relative cohomology after removing a closed
subset lying in the interior of the relative subspace
([[thm-excision-for-singular-cohomology]]).

[F17] The top cyclic coefficient is
$D_{(p-1)q}(x)=(-1)^{mq(q+1)/2}(m!)^qx$
([[lem-cyclic-p-fold-power-construction]]).

[A1] [[def-axiom-of-choice]] supplies exactly the choices already exposed by
[F1]--[F5], [F10], and the additive Kunneth isomorphism [F11].

## Proof

**Proof technique:** normalize the cyclic coefficients, calculate their
Cartan and top values, expand the two-stage cyclic power coefficient by
coefficient, apply the row--column symmetry and Lucas reduction, then descend
from cofinally many degrees with the circle generator.

1.1 Record the inherited elementary properties. [F1, F2, F7, F8, F17, A1]
The degree formulas and negative-index convention follow from [F1].
If $2i>q$, the cyclic index in [F1] is negative, so [F2] proves strict
instability. At $i=0$, substitution of [F17] in [F1] gives

$$P^0(x)=(-1)^{mq(q+1)}(m!)^{-q}(m!)^qx=x.$$

Naturality and additivity of $P^i$ follow from [F2]. For two cocycles, the
sum of chosen lifts is a lift of their sum and its coboundary is the sum of
their coboundaries, so [F8] makes the Bockstein additive; its naturality is
[F7]. Thus every $\beta P^i$ is natural and additive as well.

2.1 Prove the top-power axiom. [F1, F2, step 1.1]
Finite inverse-pairing in $\mathbb F_p^\times$ gives Wilson's identity:
every element other than $1,-1$ cancels with its distinct inverse, so
$(p-1)!=-1$. Pairing $k$ with $p-k$, $1\leq k\leq m$, also gives

$$
(p-1)!=(-1)^m(m!)^2,\qquad (m!)^2=(-1)^{m+1}.
$$

If $q=2i$, the cyclic index in [F1] is zero and [F2] gives $D_0(x)=x^p$.
The scalar multiplying it is

$$
(-1)^{i+m(4i^2+2i)/2}(m!)^{-2i}=(-1)^{i(m+1)}(-1)^{i(m+1)}=1.
$$

Hence $P^{q/2}(x)=x^p$. The case $q=0=i$ agrees with $P^0=\mathrm{id}$
because $a^p=a$ in $\mathbb F_p$.

2.2 Normalize the external Cartan formula. [F1, F4, step 1.1]
Let $x,y$ have degrees $r,s$. In the even cyclic coordinate
$(r+s-2k)(p-1)$, [F4] leaves precisely the splits
$(r-2i)(p-1)+(s-2j)(p-1)$ with $i+j=k$. Substitute the definition [F1]
into [F4]'s external formula. Factorials cancel. The total sign exponent
modulo two is

$$
k+i+j+m(r^2+r+s^2+s+rs)+pmrs.
$$

Here $i+j=k$, both $r^2+r$ and $s^2+s$ are even, and $p+1$ is even,
so this exponent is even. Therefore

$$
P^k(x\times y)=\sum_{i+j=k}P^i(x)\times P^j(y).
$$

Pullback along the diagonal gives the asserted internal Cartan formula. Every
sum is finite by instability.

3.1 Calculate the operations on the cyclic coefficient algebra. [F6, F8, F9, step 1.1, step 2.1, step 2.2]
By degree, instability, and the top-power axiom,
$P^0v=v$, $P^iv=0$ for $i>0$, $P^0u=u$,
$P^1u=u^p$, and $P^iu=0$ for $i>1$. Repeated Cartan expansion thus
gives, for $r,j\geq0$,

$$
P^j(u^r)=\binom rj u^{r+j(p-1)},\qquad P^j(vu^r)=\binom rj vu^{r+j(p-1)}.
$$

Also $\beta u=0$: if an integral lift of a cocycle for $v$ has
coboundary $ph$, then $h$ is itself a cocycle and is an integral lift of
$\beta v$, so its Bockstein is zero by [F8]. The derivation rule [F9] now
gives

$$
\beta P^j(u^r)=0,\qquad \beta P^j(vu^r)=\binom rj u^{r+1+j(p-1)}.
$$

These are exactly the four even/odd coefficient actions used in the double
power calculation, with a binomial declared zero outside $0\leq j\leq r$.

3.2 Verify stability. [F7, F11, F12, F13, F14, F15, F16, step 1.1, step 2.2]
Let $z$ generate $\widetilde H^1(S^1;\mathbb F_p)$. The cone-pair
quotient comparison needs proof. For a based CW $X$, radially subdivide
the one open cell containing the basepoint if needed, retaining the
higher attaching maps; this finite refinement makes it a vertex without
changing the based space. Each nonbasepoint $n$-cell produces an $(n+1)$-cell from
its product with the open cone-height interval, with the height-zero
cells forming $X$ and the height-one face and basepoint track
collapsed to one vertex. Product characteristic disks have finite
boundary-cell support, and their quotient map-out and weak-topology
tests assemble a CW structure on $CX$ with $X$ a closed subcomplex.
Its cellwise radial collar is an open neighborhood $V$ strongly
deformation retracting onto $X$, with the characteristic-disk flows
assembled by the CW weak topology. Since $V$ contains the entire
fibre $X$ collapsed by $q_C:CX\to\Sigma X$, it is saturated, so
$q_C(V)$ is open and retracts to the quotient vertex.
The pair sequences and [F15] make $H^*(V,X;\mathbb F_p)$ and
$H^*(q_C(V),\{*\};\mathbb F_p)$ vanish. The short exact cochain
sequences for the corresponding triples, surjective by zero
extension, replace $X$ by $V$ and the vertex by $q_C(V)$ in relative
cohomology. By [F16], excise $X$ and the quotient vertex. The
remaining pairs are homeomorphic under the quotient map, so
$q_C^*:H^*(\Sigma X,\{*\};\mathbb F_p)\to H^*(CX,X;\mathbb F_p)$ is an
isomorphism. The connector [F14] followed by its inverse is the
standard cohomology suspension.

Represent $x$ by a relative cocycle $a$ on $(X,\{x_0\})$, and let $v$
be the interval endpoint $0$-cochain whose coboundary represents the
oriented interval class. Extending $a$ across the cone by the
interval cutoff $v$, the positive coboundary and the signed external
product rule give $(-1)^{|x|}a\times\delta v$ as the cone-pair
connector representative [F11, F14]. Identifying the two-ended
interval quotient with $S^1$ and $\Sigma X$ with $X\wedge S^1$,
the stable convention $\sigma_n=(-1)^n(q_C^*)^{-1}\partial$
from [F7] cancels this coboundary sign. Thus the signed suspension obeys
$q_S^*(\sigma x)=x\times z$ for
$q_S:X\times S^1\to X\wedge S^1=\Sigma X$. The same cone-pair calculation
and [F11] show that $q_S^*$ is injective on reduced cohomology: under Kunneth,
its suspension summand is exactly cross product with $z$.

Instability gives $P^0z=z$ and $P^jz=0$ for $j>0$. Since $P^i$ is
$\mathbb F_p$-linear, the external Cartan formula yields
$q_S^*P^i(\sigma x)=q_S^*\sigma(P^ix)$; the suspension signs agree because
$P^i$ has even degree. Injectivity gives $P^i\sigma=\sigma P^i$.
Thus $P^i$ is stable in the sense of [F12], and [F7] makes the composite
$\beta P^i$ stable as well.

4.1 Expand the normalized double power. [F1, F3, F5, F6, step 3.1]
Put
$\lambda(q)=(-1)^{m(q^2+q)/2}(m!)^{-q}$. The definition and [F3]'s
positive-Bockstein identity rewrite the diagonal cyclic power of a degree
$q$ class as

$$
\lambda(q)d^*\mathcal P(x)=\sum_i(-1)^i\bigl(w_{(q-2i)2m}\times P^ix-w_{(q-2i)2m-1}\times\beta P^ix\bigr).
$$

Apply the same normalized expansion once more, use step 3.1 on each
$w$-coordinate, and use Cartan to expand the products. This produces four
finite coefficient rows: even--even, even--odd, odd--even, and odd--odd.
Interchanging the two resolution factors changes a coefficient by the exact
sign $(-1)^{jk+p(p-1)q/2}=(-1)^{jk+mq}$ in [F5], where the original
input has degree $q$. We use this row comparison below only when $q=Q$ is
even, so the global factor $(-1)^{mq}$ is $1$. The even--even and mixed
even--odd rows then have $jk$ even and transposition sign $1$; the
odd--odd row has sign $-1$ and is not used in either displayed relation.
In each mixed row, the minus sign in the positive-Bockstein expansion is
retained on both sides, giving the stated $\beta$-Adem coefficients after
normalization. Coordinate uniqueness in [F5] therefore reduces the two
relations, on even-degree inputs, to the binomial comparisons in the next
steps. No coefficient comparison for odd $q$ is claimed here; a later circle-descent argument
extends the resulting identities to odd degrees.

5.1 Prove the first relation in cofinally many degrees. [F5, step 3.1, step 4.1]
Fix $a<pb$ and choose $s$ with $p^s>a$. Set

$$
Q=2(1+p+\cdots+p^{s-1})+2b.
$$

In the even--even coefficient comparison of step 4.1, the binomial
$\binom{(Q-2i)m}{i-b}$ is zero unless $i=b$ and is one at $i=b$.
The transposed coefficient indexed by $t$ is

$$
\binom{(Q-2t)m}{a-pt}=\binom{p^s-1+(p-1)(b-t)}{a-pt}.
$$

Thus the row comparison is the actual identity

$$
P^aP^b(x)=\sum_{t=0}^{\lfloor a/p\rfloor}(-1)^{a+t}\binom{(Q-2t)m}{a-pt}P^{a+b-t}P^t(x).
$$

Only $0\leq t\leq\lfloor a/p\rfloor$ occur. Since $a<pb$, each such
$t<b$, and since $a-pt<p^s$, the base-$p$ binomial expansion (or
coefficient comparison in
$(1+T)^{p^s-1+N}=(1+T^{p^s})(1+T)^{N-1}$) gives

$$
\binom{p^s-1+(p-1)(b-t)}{a-pt}=\binom{(p-1)(b-t)-1}{a-pt}\quad\text{in }\mathbb F_p.
$$

The normalization and row--column sign in step 4.1 contribute
$(-1)^{a+t}$. Hence every degree-$Q$ class on a finite regular complex
satisfies the first displayed Adem relation.

5.2 Prove the second relation in cofinally many degrees. [F5, step 3.1, step 4.1]
Fix $a\leq pb$, choose $s$ with $p^s>a$, and now set
$Q=2p^s+2b$. The even--odd and odd--even coefficient rows of step 4.1
select the unique left-hand term $P^a\beta P^b$. On the transposed side
their two coefficients are

$$
\binom{(Q-2t)m}{a-pt}=\binom{(p-1)(p^s+b-t)}{a-pt}
$$

and

$$
\binom{(Q-2t)m-1}{a-pt-1}=\binom{(p-1)(p^s+b-t)-1}{a-pt-1}.
$$

Consequently the two mixed rows give, before reduction,

$$
P^a\beta P^b(x)=\sum_{t=0}^{\lfloor a/p\rfloor}(-1)^{a+t}\binom{(Q-2t)m}{a-pt}\beta P^{a+b-t}P^t(x)+\sum_{t=0}^{\lfloor(a-1)/p\rfloor}(-1)^{a+t-1}\binom{(Q-2t)m-1}{a-pt-1}P^{a+b-t}\beta P^t(x).
$$

Because both lower indices are below $p^s$, the same base-$p$ coefficient
comparison reduces these to
$\binom{(p-1)(b-t)}{a-pt}$ and
$\binom{(p-1)(b-t)-1}{a-pt-1}$, respectively. The first lower index is
nonnegative exactly through $t=\lfloor a/p\rfloor$; the second exactly
through $t=\lfloor(a-1)/p\rfloor$. Tracking the normalized odd row gives
the signs $(-1)^{a+t}$ and $(-1)^{a+t-1}$. Thus every degree-$Q$
class on a finite regular complex satisfies the second displayed relation.

6.1 Descend to every degree on finite regular complexes. [F7, F9, F11, step 2.2, step 5.1, step 5.2]
Let $R$ be the residual of either relation and suppose it vanishes on
degree-$r$ classes. For a degree-$(r-1)$ class $x$, form
$x\times z$, with $z$ the circle generator. Cartan and instability give
$P^j(x\times z)=P^jx\times z$. Moreover $\beta z=0$, since
$H^2(S^1;\mathbb F_p)=0$, so the derivation rule [F9] gives
$\beta P^j(x\times z)=\beta P^jx\times z$. Applying Cartan once again to
every composite in $R$ yields

$$
R(x\times z)=R(x)\times z.
$$

The left side is zero, while [F11] makes cross product with $z$ injective.
Thus $R(x)=0$. The degrees $Q$ in steps 5.1 and 5.2 are unbounded as
$s$ grows, so finite iteration descends to every nonnegative input degree.

7.1 Pass the Adem relations to arbitrary spaces. [F10, A1, step 6.1]
For fixed $p,a,b$, either residual is a natural additive map between fixed
singular cohomology degrees by step 1.1. Step 6.1 makes it zero on every
finite regular complex. The detector [F10] therefore makes it zero on every
space. This proves both Adem relations globally.

8.1 Every reduced power vanishes on the empty space, and the out-of-range index conventions cover the endpoints. [F1, F2, F7, F8, F10, F11, F12, A1, step 1.1, step 2.1, step 2.2, step 3.1, step 3.2, step 4.1, step 5.1, step 5.2, step 6.1, step 7.1]
The empty space and zero class give zero throughout. On a point, step 1.1
leaves $P^0=\mathrm{id}$ in degree zero and all positive operations zero;
step 2.1 includes both zero and one. The top endpoint $2i=q$, the strict
range $2i>q$, and negative operations are explicit.

For $a=0$, the first relation (when $b>0$) is $P^0P^b=P^bP^0$. In the
second relation the first sum has only $t=0$, while the second is empty;
at $a=b=0$ this reads $\beta=\beta$. At $a=pb$, included only in the
second relation, the stated zero-binomial convention controls both terminal
terms. Each finite sum includes both endpoints, and the hypotheses
$a<pb$ and $a\leq pb$ were used exactly in steps 5.1 and 5.2.

Degenerate singular simplices are already included by [F1] and [F2].
Step 3.2 treats reduced degree zero and the one-point based space. No
biconditional is asserted. AC is assumed and propagated exactly through the
cyclic and wreath carriers, the finite detector, and the additive Kunneth
isomorphism; the Wilson pairing, binomial coefficient extractions, circle
descent, and all sums are finite. ∎

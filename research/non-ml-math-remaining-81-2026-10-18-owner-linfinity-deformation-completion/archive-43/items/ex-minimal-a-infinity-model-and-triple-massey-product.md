---
id: ex-minimal-a-infinity-model-and-triple-massey-product
kind: example
title: "A minimal A∞-model whose ternary operation realizes a triple Massey product"
status: draft
dependency_level: 4
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-a-infinity-algebra
  - def-a-infinity-morphism
  - def-differential-graded-algebra
  - def-koszul-sign-rule-for-graded-tensors
  - def-minimal-a-infinity-model
  - def-triple-massey-product
  - lem-field-is-a-commutative-ring
  - prop-differential-graded-algebra-induces-an-a-infinity-structure
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
sources:
  references:
    - title: "Bernhard Keller, Introduction to A-infinity algebras and modules, §§3.3–3.4"
      url: "https://arxiv.org/pdf/math/9910179v2"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §§9.2.5 and 10.3"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Example

Let $k$ be a field. Define a cohomological DGA $A$ with

$$A^0=k\{1_A,x,y,z,a,b\},\qquad A^{-1}=k\{u,v,c\},\qquad A^j=0 \quad(j\ne0,-1).$$

The element $1_A$ is a unit. On nonunit basis elements, the only nonzero
products are $xy=a$, $yz=b$, and $xv=c$; all other such products are zero.
Set $d(u)=a$, $d(v)=b$, and $d=0$ on the other basis elements.

For the cohomology of $A$, the triple Massey product of $[x],[y],[z]$ is
$\{-[c]\}$. The graded space $H^*(A)$ has a minimal A∞-structure with
$m_3([x],[y],[z])=-[c]$ and all other higher products zero, and the explicit
A∞ quasi-isomorphism below exhibits it as a minimal model.

## Facts & Assumptions

**Given:** The field, basis, products, and differential specified in the
Example.

[F1] [[def-differential-graded-algebra]]: a cohomological DGA has an
associative degree-zero product, a degree-one square-zero differential, and
$d(ab)=d(a)b+(-1)^{|a|}a\,d(b)$ for homogeneous $a,b$.

[F2] [[lem-field-is-a-commutative-ring]]: the field $k$ is a commutative ring,
so the stated $k$-bilinear algebra is a DGA over an allowed base.

[F3] [[prop-differential-graded-algebra-induces-an-a-infinity-structure]]:
for a cohomological DGA, $m_1=d$, $m_2$ its product and $m_n=0$ for $n\ge3$
give an A∞-structure.

[F4] [[def-a-infinity-algebra]]: the operations have degree $2-n$ and satisfy
the displayed Stasheff identities with the fixed sign convention.

[F5] [[def-a-infinity-morphism]]: Taylor maps of degrees $1-n$ satisfy the
displayed all-arity morphism identity, with A∞ quasi-isomorphism detected by
the first map on cohomology.

[F6] [[def-minimal-a-infinity-model]]: a minimal model has $m_1=0$ and an
A∞ quasi-isomorphism to the given algebra.

[F7] [[def-triple-massey-product]]: in degree-zero inputs the representative
is $-av+uc$ when $du=ab$ and $dv=bc$, with all representative and
null-homotopy choices included.

[F8] [[def-koszul-sign-rule-for-graded-tensors]]: tensor maps use the graded
Koszul sign rule.

## Verification

1.1 The product is associative on triples involving the unit by the unit
axiom. On nonunit basis elements, every nonzero pair product is one of
$a,b,c$, each of which annihilates every nonunit. The only triple for which
both adjacent pair-products are nonzero is $(x,y,z)$; both
$(xy)z=az=0$ and $x(yz)=xb=0$. If just one adjacent pair-product is nonzero,
the iterated product is zero whichever pair is multiplied first. Hence the
bilinear product is associative. [given, F1, construct, algebra]

1.2 The differential has degree $+1$: it sends $u,v$ of degree $-1$ to
$a,b$ of degree zero and is zero on the other homogeneous basis elements.
Since $d(a)=d(b)=0$, $d^2(u)=d^2(v)=0$, and $d^2$ is zero on every other basis
element as well. [given, F1, algebra]

1.3 For the unit pairs, the signed Leibniz rule follows from $d(1_A)=0$.
For the three nonzero nonunit products, both sides agree:
$d(xy)=0=d(x)y+x\,d(y)$, $d(yz)=0=d(y)z+y\,d(z)$, and
$d(xv)=0=d(x)v+x\,d(v)=xb$. If a nonunit product is zero and one factor is
$u$ or $v$, its differential is $a$ or $b$, which annihilates every nonunit;
the remaining term is zero because the other differential is zero. If
neither factor is $u$ nor $v$, both differentials vanish. Thus the signed
Leibniz rule holds on basis pairs and hence, by bilinearity, on all
homogeneous elements. [given, F1, step 1.1, algebra]

1.4 By steps 1.1–1.3 the multiplication and differential satisfy every DGA
axiom in [F1], so $A$ is a cohomological DGA. Its associated A∞-structure is
the one of [F3]. [F1, F2, F3, step 1.1, step 1.2, step 1.3]

2.1 The map $d:A^{-1}\to A^0$ sends $u\mapsto a$, $v\mapsto b$, and
$c\mapsto0$. Its kernel is $kc$, its image is $k\{a,b\}$, and there is no
degree $-2$ term. Also $d$ vanishes on $A^0$. Therefore
$H^{-1}(A)=k[c]$, $H^0(A)=k[1_A]\oplus k[x]\oplus k[y]\oplus k[z]$, and all
other cohomology groups are zero. [given, step 1.2, algebra]

2.2 The DGA product descends to these cohomology classes: replacing a
degree-zero cycle by a boundary changes it by a multiple of $a$ or $b$,
which multiplies every nonunit cycle to zero and multiplies the unit to a
boundary; products involving $[c]$ and a nonunit cycle are zero. The unit
acts as $[1_A]$. The only nonzero products among the chosen nonunit
degree-zero representatives are $xy=a=du$ and $yz=b=dv$, so their classes
are zero. Thus every product in the reduced cohomology span
$k\{[x],[y],[z],[c]\}$ is zero. [F1, step 1.1, step 2.1, algebra]

2.3 The triple $(x,y,z;u,v)$ is valid Massey data because $xy=du=a$ and
$yz=dv=b$. The fixed expression of [F7] is $-xv+uz=-c+0=-c$. Every
representative of $[x]$, $[y]$, or $[z]$ differs from that basis vector by an
element of $k\{a,b\}$. Their adjacent products remain $a$ and $b$, since
$a,b$ annihilate nonunit basis elements. Every null-homotopy of $a$ is
$u+\lambda c$ and every null-homotopy of $b$ is $v+\mu c$ for scalars
$\lambda,\mu\in k$. All correction products involving $a,b,c$ in the
expression vanish, so every datum representing these three classes gives
$-c$. The triple Massey product is exactly $\{-[c]\}$. [F1, F7, step 1.1,
step 1.2, step 2.1, algebra]

3.1 On $H^*(A)$, take $m_1=0$ and let $m_2$ be the induced product. Define
$m_3([x],[y],[z])=-[c]$, let $m_3$ be zero on every other ordered triple of
the displayed basis, and set $m_n=0$ for $n\ge4$. The only nonzero value of
$m_3$ has degree $0+0+0-1=-1$, as required by [F4]. [given, F4, step 2.1,
step 2.2, construct]

3.2 For arities $n=1,2$, the Stasheff sums vanish because $m_1=0$. For $n=3$,
the identity is associativity of $m_2$: it holds on the unit by the unit
law, and on three nonunit basis elements because their pairwise products
are zero. Thus the identities hold through arity three. [F4, step 2.2,
step 3.1, algebra]

3.3 In arity four, the only terms are insertions of $m_2$ into $m_3$ and of
$m_3$ into $m_2$. On four nonunit basis inputs, the first terms vanish
because $m_2$ is zero on nonunit pairs; the second vanish because $m_3$
outputs a multiple of $[c]$ and $m_2([c],h)=m_2(h,[c])=0$ for nonunit $h$.
If a unit occurs but the other three inputs are not $[x],[y],[z]$ in that
order, every $m_3$ term is zero. For the four insertions of a unit into
$([x],[y],[z])$, the cancellations in the arity-four sum are respectively
$(-[c])+[c]$, $(-[c])+[c]$, $[c]-[c]$, and $(-[c])+[c]$: they come from
$m_3(m_2(1_A,x),y,z)$ paired with $-m_2(1_A,m_3(x,y,z))$,
$m_3(m_2(x,1_A),y,z)$ paired with $-m_3(x,m_2(1_A,y),z)$,
$-m_3(x,m_2(y,1_A),z)$ paired with $m_3(x,y,m_2(1_A,z))$, and
$m_3(x,y,m_2(z,1_A))$ paired with $-m_2(m_3(x,y,z),1_A)$. With two or more
units every term vanishes by the prescribed zero values of $m_3$. Hence the
arity-four sum is zero on every basis quadruple and therefore on all inputs.
[F4, step 3.1, step 3.2, algebra]

3.4 In arity five, the only possible nonzero composition is $m_3$ inserted
into $m_3$; its inner output is a multiple of $[c]$, on which the outer
$m_3$ is zero. For $n\ge6$, a nonzero summand would require both inner and
outer arities at most three, forcing $n$ to be at most five. Thus every
higher Stasheff sum vanishes, and $H^*(A)$ has the stated minimal
A∞-structure. [F4, step 3.1, algebra]

4.1 Define $f_1:H^*(A)\to A$ by the listed cocycle representatives, define
$f_2([x],[y])=-u$ and $f_2([y],[z])=-v$, and set $f_2=0$ on all other basis
pairs, in particular on pairs containing $[1_A]$. Put $f_n=0$ for $n\ge3$.
The degrees are $|f_1|=0$ and $|f_2|=-1$, as required by [F5]. [given, F5,
construct]

4.2 The arity-one morphism identity says $d f_1=f_1m_1$, and both sides are
zero because the chosen representatives are cycles. In arity two, the
identity is
$f_1m_2^H=d f_2+\mu(f_1\otimes f_1)$. On the pairs $([x],[y])$ and
$([y],[z])$, its right side is respectively $-a+a=0$ and $-b+b=0$; on all
other pairs of nonunit basis classes both terms are zero. If an input is
$[1_A]$, $f_2$ is zero and $f_1$ preserves the unit, so the equality holds
there too. [F1, F5, step 2.2, step 4.1, algebra]

4.3 In arity three, on $([x],[y],[z])$ the left side is $f_1m_3=-c$, and the
right side is
$\mu(f_1\otimes f_2)-\mu(f_2\otimes f_1)
=x(-v)-(-u)z=-c$. On every other triple of nonunit basis classes both sides
are zero: $m_3$ is zero there, and the only nonzero $f_2$ values have products
$uz=0$ or $xv=c$ in precisely the triple already checked. If one input is
the unit, the normalized condition $f_2(1_A,-)=f_2(-,1_A)=0$ makes the
identity reduce to the unit law. For $(1_A,a,b)$ both sides equal $f_2(a,b)$;
for $(a,1_A,b)$ both sides are zero; and for $(a,b,1_A)$ both sides equal
$-f_2(a,b)$. With at least two units every $f_2$ term is zero. [F5, F8, step 3.1,
step 4.1, step 4.2, algebra]

4.4 In arity four, the only possible left terms apply $f_2$ to an $m_3$
output, which is a multiple of $[c]$ and is sent to zero by $f_2$. The only
possible right term with nonzero Taylor maps is a product of two $f_2$
outputs; all products among $u,v$ are zero. For $n\ge5$, the left side
requires an input operation of arity at most three and an outer $f$ of arity
at most two, so $n\le4$; the right side requires a target operation of arity
at most two and each $f_i$ of arity at most two, again so $n\le4$. All
morphism identities in arities $n\ge4$ therefore hold. [F5, step 4.1,
step 4.3, algebra]

5.1 The map $f_1$ sends the basis $[1_A],[x],[y],[z],[c]$ of $H^*(A)$ to
representatives of the same cohomology basis computed in step 2.1. It
therefore induces an isomorphism on cohomology, so $f$ is an A∞
quasi-isomorphism. [F5, step 2.1, step 4.1]

5.2 By [F6], the A∞-algebra $H^*(A)$ with $m_1=0$ and the morphism $f$ is a
minimal A∞-model for $A$. Its value $m_3([x],[y],[z])=-[c]$ is the unique
triple Massey product computed in step 2.3. [F6, step 2.3, step 3.4,
step 5.1] ∎

---
id: thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group
kind: theorem
title: "Left and right divisibility extend to lattice orders on the braid group"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group,
       thm-positive-braids-have-left-and-right-gcds-and-lcms,
       lem-every-positive-braid-divides-a-power-of-delta-on-both-sides,
       lem-conjugation-by-delta-reverses-artin-generators,
       def-braid-group-by-the-artin-presentation,
       def-left-and-right-divisibility-for-positive-braids,
       lem-positive-artin-relations-preserve-homogeneous-length,
       lem-the-positive-braid-monoid-is-left-and-right-cancellative]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "J. Gonzalez-Meneses, Basic results on braid groups, Section 4, printed p. 28 (extension of the order to B_n)"
      url: "https://arxiv.org/abs/1010.0321"
    - title: "J. Gonzalez-Meneses, Basic results on braid groups, Section 4.1, printed pp. 29-30"
      url: "https://arxiv.org/abs/1010.0321"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $n\in\mathbb N$, let $B_n$ be the Artin braid group of
[[def-braid-group-by-the-artin-presentation]], identified with the group of
fractions of the positive braid monoid $B_n^{+}$ by
[[thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group]], so
that $B_n^{+}$ is a submonoid of $B_n$; let $\Delta$ be the half twist and let
$\preccurlyeq_L,\preccurlyeq_R$ be the monoid orders of
[[def-left-and-right-divisibility-for-positive-braids]]. Define, for
$x,y\in B_n$,
$$x\preccurlyeq_Ly:\Longleftrightarrow x^{-1}y\in B_n^{+},\qquad x\preccurlyeq_Ry:\Longleftrightarrow yx^{-1}\in B_n^{+}.$$
Then:

**(a) The left order.** $\preccurlyeq_L$ is a partial order on $B_n$; it is
invariant under left multiplication by every element of $B_n$
($zx\preccurlyeq_Lzy\iff x\preccurlyeq_Ly$); and it extends the monoid order:
for $a,b\in B_n^{+}$ one has $a\preccurlyeq_Lb\iff a\preccurlyeq_L^{mon}b$, and
likewise $a\preccurlyeq_Lb\iff b=a c$ for some $c\in B_n^{+}$.

**(b) The left order is a lattice.** Every pair $x,y\in B_n$ has a least upper
bound $x\vee_Ly$ and a greatest lower bound $x\wedge_Ly$ for
$\preccurlyeq_L$. Explicitly, if $K$ is such that both $\Delta^{2K}x$ and
$\Delta^{2K}y$ are positive, then
$$x\vee_Ly=\Delta^{-2K}\bigl((\Delta^{2K}x)\vee_L(\Delta^{2K}y)\bigr),\qquad x\wedge_Ly=\Delta^{-2K}\bigl((\Delta^{2K}x)\wedge_L(\Delta^{2K}y)\bigr),$$
where the inner joins and meets are those of
[[thm-positive-braids-have-left-and-right-gcds-and-lcms]], and the result is
independent of the choice of $K$. Moreover the left translations are lattice
automorphisms: $z(x\vee_Ly)=zx\vee_Lzy$ and $z(x\wedge_Ly)=zx\wedge_Lzy$ for
all $x,y,z\in B_n$. For positive $a,b$, both $a\vee_Lb$ and $a\wedge_Lb$ are
positive and coincide with the monoid join and meet.

**(c) The right order.** $\preccurlyeq_R$ is a partial order on $B_n$,
invariant under right multiplication, extending the monoid order
$\preccurlyeq_R$ on $B_n^{+}$, and related to the left order by inversion:
$x\preccurlyeq_Ry\iff y^{-1}\preccurlyeq_Lx^{-1}$. Consequently the right order
is also a lattice: $x\vee_Ry=(x^{-1}\wedge_Ly^{-1})^{-1}$ and
$x\wedge_Ry=(x^{-1}\vee_Ly^{-1})^{-1}$, and right translations are its lattice
automorphisms.

No choice principle is used; all shifts are by the central element
$\Delta^{2}$.

## Facts & Assumptions

**Given:** A natural number $n$, the braid group $B_n$ with its submonoid $B_n^{+}$ of positive braids, the half twist $\Delta$, and the two extensions of the divisibility orders defined above.

[F1] **Fractions and positivity.** By [[thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group]] every element of $B_n$ is $ab^{-1}$ with $a,b\in B_n^{+}$, once the positive monoid is regarded as a submonoid of $B_n$ through its embedding; from now on we use that identification and write $B_n^{+}\subseteq B_n$. The only invertible element of $B_n^{+}$ is $1$ ([[lem-positive-artin-relations-preserve-homogeneous-length]]).

[F2] **$\Delta$-powers and centrality.** For every $b\in B_n^{+}$ there is $m$ with $b\preccurlyeq_L\Delta^{m}$, and $\Delta^{2}$ is central in $B_n^{+}$, hence in $B_n$; for even exponents $2k$ the element $\Delta^{2k}$ is therefore central in $B_n$ ([[lem-every-positive-braid-divides-a-power-of-delta-on-both-sides]], [[lem-conjugation-by-delta-reverses-artin-generators]]).

[F3] **Monoid lattice.** For all $a,b\in B_n^{+}$ the monoid join $a\vee_Lb$ and monoid meet $a\wedge_Lb$ exist, are positive, and satisfy: $a\vee_Lb$ is the least common upper bound and $a\wedge_Lb$ the greatest common lower bound for $\preccurlyeq_L$ ([[thm-positive-braids-have-left-and-right-gcds-and-lcms]]).

[F4] **Monoid order.** For $a,b\in B_n^{+}$: $a\preccurlyeq_Lb\iff\exists c\in B_n^{+}\,(b=ac)$, and $a\preccurlyeq_Lb\Rightarrow\ell(a)\le\ell(b)$ ([[def-left-and-right-divisibility-for-positive-braids]]).

[F5] **Cancellation** ([[lem-the-positive-braid-monoid-is-left-and-right-cancellative]]): $xa=xb$ implies $a=b$, and $ax=bx$ implies $a=b$, for all $a,b,x\in B_n^{+}$.

## Proof

**Proof technique:** direct.

1.1 **Large even shifts make an element positive.** Let $x\in B_n$ and write $x=ab^{-1}$ with $a,b\in B_n^{+}$ by [F1]. By [F2] choose an even $2k$ with $b\preccurlyeq_L\Delta^{2k}$, say $\Delta^{2k}=bc$; then $b^{-1}=c\Delta^{-2k}$, so $x=(ac)\Delta^{-2k}$, and for every $K\ge k$, centrality of $\Delta^{2k}$ [F2] gives $\Delta^{2K}x=\Delta^{2K}(ac)\Delta^{-2k}=\Delta^{2(K-k)}\,(ac)\in B_n^{+}$. Hence there are arbitrarily large even powers of $\Delta$ multiplying $x$ into $B_n^{+}$. [F1, F2]

1.2 **The left order.** The relation $x\preccurlyeq_Ly\iff x^{-1}y\in B_n^{+}$ is reflexive since $x^{-1}x=1\in B_n^{+}$, transitive because $(x^{-1}y)(y^{-1}z)=x^{-1}z$ is a product of positive elements, and antisymmetric because if $x^{-1}y$ and $y^{-1}x$ are both positive then they are inverse to each other in $B_n$, and the only invertible positive element is $1$ [F1], so $x=y$. It is invariant under left multiplication: $(zx)^{-1}(zy)=x^{-1}y$. For $a,b\in B_n^{+}$ it agrees with the monoid order, since $a^{-1}b\in B_n^{+}$ holds if and only if $b=a(a^{-1}b)$ with $a^{-1}b$ positive by [F4], and conversely $b=ac$ with $c$ positive gives $a^{-1}b=c$. [F1, F4]

1.3 **Scaling a monoid meet by a positive element.** Let $D,A,B\in B_n^{+}$ and let $A\wedge_LB$ be the monoid meet of [F3]. Then

$$D(A\wedge_LB)=(DA)\wedge_L(DB).$$
Indeed $D(A\wedge_LB)$ is a common left divisor of $DA$ and $DB$: $A\wedge_LB\preccurlyeq_LA$ gives $DA=D(A\wedge_LB)c$ with $c\in B_n^{+}$, and symmetrically for $B$. Conversely let $d\preccurlyeq_LDA$ and $d\preccurlyeq_LDB$. The monoid join $d\vee_LD$ exists by [F3] and is a common upper bound of $d$ and of $D$, so $d\vee_LD$ is a common left divisor of the pair $DA,DB$ of upper bounds, hence $d\vee_LD\preccurlyeq_LDA$ and $d\vee_LD\preccurlyeq_LDB$ by leastness. Since $D\preccurlyeq_Ld\vee_LD$, write $d\vee_LD=Dq$ with $q\in B_n^{+}$ [F4]. Then $DA=(d\vee_LD)s=Dqs$ with $s\in B_n^{+}$, so left cancellation [F5] gives $A=qs$, that is, $q\preccurlyeq_LA$; the same argument gives $q\preccurlyeq_LB$, so $q\preccurlyeq_LA\wedge_LB$ by [F3]. Multiplying by $D$ on the left, $d\preccurlyeq_Ld\vee_LD=Dq\preccurlyeq_LD(A\wedge_LB)$. Hence $D(A\wedge_LB)$ is the greatest common left divisor of $DA$ and $DB$, as claimed. [F3, F4, F5, given]

2.1 **Joins.** Let $x,y\in B_n$ and choose $K$ with $X:=\Delta^{2K}x$ and $Y:=\Delta^{2K}y$ positive, as in step 1.1; put $u:=\Delta^{-2K}(X\vee_LY)$, where $X\vee_LY$ is the monoid join of [F3]. Then $u$ is an upper bound: $X\vee_LY=Xc$ with $c\in B_n^{+}$ by [F3], so $u=\Delta^{-2K}Xc=xc$ and $x\preccurlyeq_Lu$, and symmetrically $y\preccurlyeq_Lu$. It is the least one: if $x\preccurlyeq_Lz$ and $y\preccurlyeq_Lz$, say $z=xp=yq$ with $p,q\in B_n^{+}$, then $\Delta^{2K}z=Xp=Yq$ is a common upper bound of $X$ and $Y$ in the monoid order, so $X\vee_LY\preccurlyeq_L\Delta^{2K}z$, say $\Delta^{2K}z=(X\vee_LY)r$ with $r\in B_n^{+}$; hence $z=\Delta^{-2K}(X\vee_LY)r=ur$ and $u\preccurlyeq_Lz$. Thus $u=x\vee_Ly$ exists. [F1, F3, step 1.2]

3.1 **Meets.** With the notation of step 2.1, put $v:=\Delta^{-2K}(X\wedge_LY)$. Then $v$ is a lower bound: $X\wedge_LY\preccurlyeq_LX$, say $X=(X\wedge_LY)c$ with $c$ positive, so $x=\Delta^{-2K}X=\Delta^{-2K}(X\wedge_LY)c=vc$ and $v\preccurlyeq_Lx$, and symmetrically $v\preccurlyeq_Ly$. Let $w\preccurlyeq_Lx,y$ be any lower bound. By step 1.1 choose $K'\ge K$ with $W:=\Delta^{2K'}w$ positive. Then $x=wp$, $y=wq$ with $p,q$ positive, so $X':=\Delta^{2K'}x=Wp$ and $Y':=\Delta^{2K'}y=Wq$ are positive and $W$ is a common left divisor of $X'$ and $Y'$ in the monoid order; hence $W\preccurlyeq_LX'\wedge_LY'$ by [F3]. Put $D:=\Delta^{2(K'-K)}$; by the power rule $X'=DX$ and $Y'=DY$, and $D\in B_n^{+}$, so step 1.3 gives $X'\wedge_LY'=(DX)\wedge_L(DY)=D(X\wedge_LY)=\Delta^{2K'}\Delta^{-2K}(X\wedge_LY)=\Delta^{2K'}v$. Thus $W\preccurlyeq_L\Delta^{2K'}v$, say $\Delta^{2K'}v=Wr$ with $r\in B_n^{+}$. Multiplying on the left by $\Delta^{-2K'}$ and regrouping gives $v=(\Delta^{-2K'}W)r=wr$, because $\Delta^{-2K'}W=\Delta^{-2K'}\Delta^{2K'}w=w$; hence $w\preccurlyeq_Lv$. Therefore $v$ is the greatest lower bound of $x$ and $y$. [F1, F3, F4, step 1.1, step 2.1, step 1.3]

4.1 **Independence of the shift, and the lattice laws.** Let $D:=\Delta^{2(K'-K)}$ with $K'\ge K$ and $X,Y$ positive. Left multiplication by $D$ is a bijection of $B_n$ preserving and reflecting $\preccurlyeq_L$ by the computation of step 1.2, hence it is an order isomorphism and carries the least upper bound of $X,Y$ to that of $DX,DY$: $D(X\vee_LY)=(DX)\vee_L(DY)$, and dually $D(X\wedge_LY)=(DX)\wedge_L(DY)$. Applying this to step 2.1 and step 1.3 shows that the elements $u$ and $v$ defined there do not depend on $K$; and the same order-isomorphism property for an arbitrary $z\in B_n$ gives $z(x\vee_Ly)=zx\vee_Lzy$ and $z(x\wedge_Ly)=zx\wedge_Lzy$ because left multiplication by $z$ is an order isomorphism of $B_n$. [F1, step 1.2, step 2.1, step 1.3, step 3.1]

5.1 **Positive pairs and the right order.** If $a,b\in B_n^{+}$, then $a\vee_Lb$ as computed in step 2.1 with $K=0$ is the monoid join, hence positive, and by uniqueness of least upper bounds it coincides with the monoid join; the same holds for the meet, which is what the last sentence of (b) asserts. For the right order, note first that $x\preccurlyeq_Ry\iff yx^{-1}\in B_n^{+}\iff y^{-1}\preccurlyeq_Lx^{-1}$, because $(y^{-1})^{-1}x^{-1}=yx^{-1}$; inversion is an involution of $B_n$ exchanging the two sides, so it carries the partial order $\preccurlyeq_L$ to a partial order, and it is invariant under right multiplication because $x\preccurlyeq_Ry$ implies $xz\preccurlyeq_Ryz$ for every $z$, by $yzz^{-1}x^{-1}=yx^{-1}$. Since inversion reverses products, it turns joins into meets, so $x\vee_Ry=(x^{-1}\wedge_Ly^{-1})^{-1}$ and $x\wedge_Ry=(x^{-1}\vee_Ly^{-1})^{-1}$ exist by steps 2.1 and 3.1 and right translations are lattice automorphisms. On positives, $a\preccurlyeq_Rb\iff\rho(a)\preccurlyeq_L\rho(b)$ is the monoid right order by the definition of $\rho$ and of $\preccurlyeq_R$, which is the asserted extension. [F1, F3, step 2.1, step 3.1, step 4.1]

6.1 **Assembly.** Part (a) is step 1.2, part (b) is steps 2.1, 3.1 and 4.1 together with the first half of step 5.1, and part (c) is the second half of step 5.1. The only use of the half twist is through the large even shifts of step 1.1 and the centrality of its square, so no odd conjugation is used; the hypothesis $K\ge k$ in step 1.1 is exactly what makes the shifted elements positive. For $n\le1$ the group is trivial and all statements are vacuous. All constructions are explicit and no choice principle is used. ∎ [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1]

## Remarks

- **Why even shifts.** Step 1.1 needs $\Delta^{2k}$ central to move it across a
  positive element. The odd powers are not central for $n\ge3$: conjugation by
  $\Delta$ acts as the index reversal $\sigma_i\mapsto\sigma_{n-i}$
  ([[lem-conjugation-by-delta-reverses-artin-generators]]), so the even powers give central shifts for the fraction computation in step 1.1. Odd positive powers also preserve positivity on positive inputs; centrality, rather than positivity, is the reason for choosing even powers in the displayed lattice formula.
- **The meet is where the extra argument is needed.** For the join, step 2.1
  transports a common upper bound directly. For the meet, a lower bound $w$
  need not itself be positive, so step 3.1 first shifts it into $B_n^{+}$ by a
  larger even power, compares inside the monoid lattice using the scaling
  identity of step 1.3, and then shifts back; this is the place where the
  hypothesis that the shift is large enough for *three* elements (not just
  $x,y$) is used.
- **Comparison with GM.** GM write: "The above properties imply that the partial
  order $\preccurlyeq$ (respectively $\succcurlyeq$) can be extended to $B_n$ in
  the following way: $a\preccurlyeq b$ (resp. $b\succcurlyeq a$) if and only if
  $ac=b$ (resp. $b=ca$) for some $c\in B_n^{+}$. This gives a partial order
  which is invariant under left-multiplication (resp. right-multiplication), and
  which admits unique least common multiples and greatest common divisors."
  Steps 1.2--5.1 supply the details: the definition with $x^{-1}y$, the
  lattice operations via even shifts, and the dictionary with inversion for the
  right order.
- Nothing here uses a choice principle: the shift $K$ is not chosen but
  any sufficiently large one is used, and the formulas are proved independent
  of it.

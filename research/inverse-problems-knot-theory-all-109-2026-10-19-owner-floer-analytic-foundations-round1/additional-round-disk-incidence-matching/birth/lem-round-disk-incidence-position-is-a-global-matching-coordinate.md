---
id: lem-round-disk-incidence-position-is-a-global-matching-coordinate
kind: lemma
title: "Round disk incidence position is a global matching coordinate"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-proper-round-disk-component-boundary-degeneration-count-is-one, lem-nearly-symmetric-compact-bubble-domain-positivity-and-energy, lem-node-fixed-boundary-disk-sobolev-moduli-affine-slices-and-cover-index, thm-zero-order-factorization-holomorphic-function, thm-holomorphic-implicit-function-theorem]
dependency_level: 14
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks, link invariants and the multi-variable Alexander polynomial"
      url: "https://arxiv.org/abs/math/0512286"
      locator: "Theorem5.5 uses the disk-side incidence map as a diffeomorphism; the precise fixed-node disk-component matching statement is proved here"
---

## Statement

Assume Countable Choice. Use the proper round one-boundary-component disk $A$, node tuple $x$, and actual protected parameter family of the disk-component count theorem, restricted to its sufficiently small ball. Choose the protected component point $y\in A$, disjoint from the attaching curves, so that every structure equals the standard structure on a fixed neighborhood of $E_y=\{y\}+\operatorname{Sym}^{m-1}\Sigma$. Identify the marked source disk minus its node with the upper half-plane $\mathbb H$, with that node at infinity.

For every parameter $a$, let $\mathcal M_a$ be the actual smooth node-fixed holomorphic disks of domain $A$, before quotienting by positive affine automorphisms. Every such disk meets $E_y$ at exactly one interior source point, with intersection multiplicity one; write that point $\rho_a(u)\in\mathbb H$. Then
$$\rho_a:\mathcal M_a\longrightarrow\mathbb H$$
is a smooth diffeomorphism. The maps and their inverses depend smoothly on $a$ in the actual local solution charts, and
$$\rho_a(u\circ g)=g^{-1}\rho_a(u),\qquad g(z)=cz+d,\quad c>0.$$

At each disk, the actual augmented linearization consisting of its compact node-fixed operator and the derivative of this incidence position is a bounded isomorphism
$$(P_u,d\rho_u):H^3_{\partial L,\,p=0}\longrightarrow H^2\oplus\mathbb R^2.$$
The same assertion holds at higher integer realizations $H^{q+1}\to H^q$ for $q\ge2$, and for their actual weighted node-fixed realizations of weight $0<\delta<\pi$. Point evaluation on an ordinary $H^1$ domain is not asserted.

This is an actual disk-side incidence matching model for the one-boundary-component case. It does not supply the target-neck gluing or its exhaustion theorem, nor reduce a general attaching component to a disk.

## Statement references

[[thm-proper-round-disk-component-boundary-degeneration-count-is-one]]

## Facts & Assumptions

**Given:** The actual small protected family for the disk-component theorem, its fixed node, proper unit domain, protected interior point divisor and half-plane source coordinate.

[F1] [[thm-proper-round-disk-component-boundary-degeneration-count-is-one]] gives exactly one affine orbit for EVERY small parameter, actual regular node-fixed index two, a smooth local representative $u(a)$ after two compact-source phases, and kernel precisely the two affine directions. Its standard representative has a whole-image ordered product chart disjoint from the diagonal.

[F2] [[lem-nearly-symmetric-compact-bubble-domain-positivity-and-energy]] identifies the actual disk degree at $y$ with its unit component coefficient. Its local symmetric-product coordinates identify $E_y$ as one holomorphic constant-coefficient coordinate hyperplane. [[thm-zero-order-factorization-holomorphic-function]] makes a nontrivial scalar holomorphic intersection isolated with positive finite order, and [[thm-holomorphic-implicit-function-theorem]] gives its simple-root inverse.

[F3] [[lem-node-fixed-boundary-disk-sobolev-moduli-affine-slices-and-cover-index]] gives the actual $H^3$ charts, all higher regular realizations, common compact/weighted kernel and range quotients, and smooth affine actions on regular finite-dimensional solution families. Its actual compact-source Sobolev estimates bound interior point evaluation at every stated order.

## Proof

1.1 The divisor $E_y$ is disjoint from the boundary torus, since $y$ lies off every attaching circle. In its holomorphic support-cluster coordinates from [F2] it has a defining function $h$ with $dh\ne0$, even at repeated tuples. For a disk $u$ the composition $h\circ u$ is holomorphic near each inverse image, because the structure there is the fixed standard one. The set of source neighborhoods mapped wholly into $E_y$ is open and closed in the disk interior: at a limit point a defining coordinate and the zero factorization in [F2] force local vanishing if such neighborhoods accumulate. It cannot be the whole interior, since continuity would put the boundary in $E_y$. All intersections are therefore isolated, of positive finite order. They lie in a compact interior subset because the compact boundary image avoids the divisor; compactness makes their number finite. Their local orders compute the actual relative divisor degree, as in [F2], which is exactly one for domain $A$. Thus precisely one point occurs, its order is one, and $dh\,du$ there is an orientation-positive real isomorphism of its two-dimensional source tangent space with the complex normal line. This proves uniqueness and transversality. [F2, given, construct, algebra]

2.1 Incidence position transforms by the stated inverse-precomposition formula, simply by taking the inverse image of $E_y$. For fixed $a$ choose any representative $v_a$ from the one orbit in [F1], and put $r_a=\rho_a(v_a)$. For every $r\in\mathbb H$ there is exactly one positive affine $g$ with $g(r)=r_a$: explicitly $$c=\frac{\operatorname{Im}r_a}{\operatorname{Im}r},\qquad d=\operatorname{Re}r_a-c\operatorname{Re}r.$$ Hence $v_a\circ g$ is the unique solution with incidence position $r$, by [F1]'s free single-orbit assertion. This proves bijectivity and an explicit inverse. On the actual regular solution manifold, the unique transverse root in step1.1 depends smoothly on the map: its coordinate equation is $h(u(z))=0$, its derivative in $z$ is invertible, and [F3]'s higher solution charts allow every fixed number of source evaluation derivatives. The finite implicit theorem therefore applies at every derivative order. The explicit inverse is smooth by [F3]'s action on solution families. For joint dependence on $a$ use the actual representative $u(a)$ in [F1]. It is smooth in every higher topology: the phase-augmented compact derivative is invertible at all orders by [F3], its higher implicit solutions include into the $H^3$ one and agree by uniqueness. Thus the preceding root equation and explicit affine formulas are smooth jointly in $a,r$. No smooth evaluation map on a whole rough $H^3$ mapping space is assumed. [F1, F2, F3, step 1.1, construct, algebra]

3.1 At a fixed solution with $r=\rho_a(u)$, the incidence derivative extends to the entire actual node-fixed $H^3$ tangent domain as the bounded real linear functional $$L\xi=-(dh\,du|_r)^{-1}dh\,\xi(r).$$ The right side is intrinsic: changing the defining function multiplies both normal derivatives by the same nonzero complex factor. Point evaluation at the fixed interior $r$ is bounded at this order by [F3]. Implicit differentiation in step2.1 shows that $L$ agrees with $d\rho$ on the operator kernel. On the two affine kernel directions corresponding to $g(z)=(1+\lambda)z+\tau$, the inverse-precomposition identity gives $$L(du\,z)=-r,\qquad L(du)=-1.$$ These two real vectors span $\mathbb C$ because $\operatorname{Im}r>0$. Thus $L$ is an isomorphism from $\ker P$ onto $\mathbb R^2$. Since $P$ is onto by [F1], $(P,L)$ is a bounded isomorphism: first solve $P\xi=f$ with its actual bounded kernel-complement right inverse and then add the unique kernel element correcting $L\xi$ to the required position derivative. This construction gives an explicit bounded inverse. [F1, F3, step 1.1, step 2.1, construct, algebra]

4.1 In the higher and weighted realizations in the Statement, [F3] identifies the same smooth two-dimensional kernel, preserves onto-ness and gives bounded range inverses. Evaluation at the fixed interior incidence point is bounded for $q\ge2$; weights are smooth and bounded above and below on its compact source neighborhood. The same formula for $L$ therefore defines a bounded functional in each realization, and its restriction to the common kernel is unchanged. Repeat the bounded inverse construction of step3.1. This proves the asserted actual matching isomorphisms without requiring point evaluation on an $H^1$ domain. The divisor degree, unique actual orbit and transverse incidence point used throughout were proved or supplied for actual disks, not presumed from a formal matching problem. The target-neck construction and general-component reduction remain separate obligations. [F1, F3, step 3.1, construct, algebra] ∎

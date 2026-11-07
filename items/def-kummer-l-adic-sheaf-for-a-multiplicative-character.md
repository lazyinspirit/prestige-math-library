---
id: def-kummer-l-adic-sheaf-for-a-multiplicative-character
kind: definition
title: "Kummer l-adic sheaf attached to a multiplicative character"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-fkm-conductor-complexity-on-the-affine-line
  - def-constructible-l-adic-sheaf-on-a-scheme
  - lem-deligne-finite-torsor-character-line-construction
  - lem-deligne-kummer-uniformizer-extension-and-character-invariants
  - def-etale-morphism-schemes
  - def-finite-morphism-schemes
  - def-lisse-l-adic-sheaf-on-a-scheme
  - def-middle-extension-l-adic-sheaf-on-a-curve
  - def-swan-conductor-of-an-l-adic-inertia-representation
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "E. Fouvry, E. Kowalski, and Ph. Michel, Trace Functions over Finite Fields and Their Applications"
      url: https://people.math.ethz.ch/~kowalski/elements.pdf
      locator: §2.3 (Dec3,2014 draft), Kummer trace sheaves and trace functions
verification:
  precheck: pending
---

## Definition

Let $p$ be a prime, let $\ell\ne p$, let $d\ge 2$ divide $p-1$, and let $E$ be a finite extension of $\mathbb Q_\ell$ containing the $d$th roots of unity. Let $\eta:\mu_d(\mathbb F_p)\to E^\times$ be a character of exact order $d$. For the finite étale map $\pi_d:\mathbb G_{m,\mathbb F_p}\to\mathbb G_{m,\mathbb F_p}$, $y\mapsto y^d$, the **Kummer sheaf** $\mathcal K_\eta$ is the direct summand of $\pi_{d*}E$ on which each deck transformation $\zeta\in\mu_d(\mathbb F_p)$ acts by $\eta(\zeta)^{-1}$, where its action on fiber functions is $D_\zeta f(y)=f(\zeta^{-1}y)$. It is a rank-one lisse $E$-sheaf. For $x\in\mathbb F_p^\times$, its geometric Frobenius trace is $\eta\!\left(x^{(p-1)/d}\right)$. At every closed point, its geometric Frobenius eigenvalue is a root of unity, so it is pointwise pure of weight $0$ under every embedding of its coefficient field into $\mathbb C$. Its local inertia characters at $0$ and $\infty$ are nontrivial and tame; its middle extension to $\mathbb P^1$ has zero stalks at these two points and Fouvry–Kowalski–Michel conductor complexity $3$.

## Definition references

[[def-direct-image-sheaf]]

[[def-etale-morphism-schemes]]

[[def-lisse-l-adic-sheaf-on-a-scheme]]

[[def-middle-extension-l-adic-sheaf-on-a-curve]]

[[def-fkm-conductor-complexity-on-the-affine-line]]

[Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Their Applications*, §2.3 (Dec3,2014 draft)](https://people.math.ethz.ch/~kowalski/elements.pdf)

## Facts & Assumptions

**Given:** The prime $p$, $d\mid p-1$, coefficient field $E$, and exact-order character $\eta$ in the Definition. Put $O=\mathcal O_E$ and choose its uniformizer $\varpi$.

[F1] [[lem-deligne-finite-torsor-character-line-construction]] constructs compatible rank-one integral character lines on a finite étale torsor, their rational projectors, and their Frobenius eigenvalues.

[F2] [[lem-deligne-kummer-uniformizer-extension-and-character-invariants]] gives irreducibility of $Y^d-t$, its cyclic uniformizer extension, trivial first positive lower ramification group, and zero inverse-limit invariants of a nontrivial character.

[F3] [[def-middle-extension-l-adic-sheaf-on-a-curve]] defines the ordinary direct image by sections on the punctured étale neighborhood.

[F4] [[def-swan-conductor-of-an-l-adic-inertia-representation]] computes the Swan integral on the finite upper filtration for a representation of a fixed finite Galois quotient.

[F5] [[def-fkm-conductor-complexity-on-the-affine-line]] defines complexity as rank plus the number of geometric singularities plus their Swan terms.

[F6] [[def-etale-morphism-schemes]] gives the finite-presentation, flatness and geometrically regular zero-dimensional fiber criterion.

## Proof

1.1 Write $A=\mathbb F_p[x,x^{-1}]$. The algebra $A[y]/(y^d-x)$ is free over $A$ on $1,y,\ldots,y^{d-1}$, and $y$ is invertible. It is finitely presented and flat. Over every algebraically closed residue field the polynomial has $d$ distinct roots, since $dy^{d-1}$ is a unit; its geometric fibers are disjoint reduced points. Thus the map is finite étale by [F6]. On its self-pullback, $y_2/y_1$ is a $d$th root of unity, giving the explicit torsor isomorphism $(\zeta,y)\mapsto(y,\zeta y)$. [F6, given, construct, algebra]

2.1 Apply [F1] with $D=\mu_d(\mathbb F_p)$ and $\chi=\eta^{-1}$. On the torsor cover the equivariance condition $f(\zeta y)=\eta(\zeta)f(y)$ determines a function by one value, so the integral system is rank-one free and lisse, including when $\ell\mid d$. Rationally the projector onto this line is $d^{-1}\sum_\zeta\eta(\zeta)D_\zeta$. For $x\in\mathbb F_{p^h}^{\times}$, arithmetic Frobenius on a root is $y\mapsto y^{p^h}=ay$, where $a=x^{(p^h-1)/d}\in\mu_d$. Its inverse acts on fiber functions by $f(y)\mapsto f(ay)$, hence by $\eta(a)$. At $h=1$ this is precisely the original trace formula. All these eigenvalues are roots of unity. [F1, step 1.1, construct, algebra]

3.1 We compute the boundary sections directly. In a pointed étale neighborhood of $0$ on the geometric affine line, let $R$ be its local ring and $t=x$. The ring is Noetherian, $t$ is a nonzero divisor by flatness, and the local geometric fiber is a field by [F6], so its maximal ideal is $tR$. This already makes $R$ a DVR without any extra choice premise: the ideal $I=\bigcap_{a\ge0}t^aR$ is finitely generated, and cancellation of the nonzero divisor $t$ gives $I=tI$. On finite generators this equation gives a matrix $1-tC$ annihilating them; its determinant is a unit in the local ring, so $I=0$. Every nonzero element therefore has the form $t^a u$ with $u$ a unit, proving the DVR assertion. By [F2], $y^d=t$ is irreducible over its fraction field. After shrinking the neighborhood to its component through the point, its pulled-back punctured torsor is connected: its coordinate algebra embeds in this field extension. A locally constant equivariant function on that connected torsor is a constant $v$, and hence satisfies $(\eta(\zeta)-1)v=0$ for every $\zeta$. This computes the stalk of the direct image at every finite coefficient level as the nontrivial-character invariants, directly from the sections defining [F3]. At infinity use $t=x^{-1}$ and $w=y^{-1}$; the same proof applies, with inverse deck character. [F2, F3, F6, step 1.1, step 2.1, construct, algebra]

4.1 The inverse limit of these finite-level invariant modules is zero by [F2]; one must take this limit before rationalizing, rather than assert that every finite-level invariant module is zero. Thus the rational ordinary direct image has zero stalk at both ends. An explicit strict constructible integral model of that rational sheaf is extension by zero of the rank-one system from step 2.1: it has the common finite stratification $\{\mathbb G_m,0,\infty\}$, free rank one on the open stratum and zero at the other two, with the required quotient reductions. Its natural map to the rational direct image is an isomorphism on the open and on both boundary stalks, hence an isomorphism. This also proves that the specified ordinary middle extension is constructible. [F1, F2, F3, step 2.1, step 3.1, construct, algebra]

5.1 The actual local monodromy quotient is the cyclic group of the uniformizer extension in [F2]; exact order of $\eta$ makes its character faithful. Its inertia is the whole group, its first positive lower group is trivial, and its finite upper groups are therefore trivial for every positive index. Compute the Swan conductor in this specified finite quotient using [F4]: its integral is zero. This uses neither a larger quotient nor an independence assertion for arbitrary quotients. The two inertia characters are nontrivial, with inverse characters at $0$ and $\infty$, so both endpoints are singular and tame. On $\mathbb G_m$ the sheaf is lisse of rank one, so there are no other singularities. [F2, F4, step 2.1, step 3.1, algebra]

6.1 Step 2.1 gives absolute value one under every complex embedding at each closed point of the lisse locus. The zero boundary stalks have no eigenvalues, so the same pointwise purity assertion holds there vacuously. Finally [F5] gives complexity $1+2+0=3$. This proves every assertion of the original Definition with its original prime, order and coefficient-field ranges; no cohomological trace formula or Weil-II theorem is used. [F5, step 2.1, step 4.1, step 5.1, algebra] ∎

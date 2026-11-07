---
id: lem-global-unramified-torsors-extend-with-finite-prime-to-characteristic-bound
kind: lemma
title: Global unramified torsors extend and have a finite invertible-exponent bound
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - thm-regular-equals-smooth-over-perfect-field
  - thm-finite-integral-closure-in-a-finite-separable-extension
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - thm-completion-as-extension-of-scalars
  - lem-discriminant-detects-etaleness-of-finite-free-algebra
  - lem-complete-local-finite-etale-algebra-lifting
  - thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
  - thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form
  - lem-finiteness-of-unramified-h1-for-finite-etale-sheaves
  - thm-full-riemann-roch-divisor
  - thm-cartier-weil-divisors-curves-agree
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-global-functions-proper-integral-variety
sources:
  references:
    - title: Stacks Project, Fundamental Groups of Schemes, 58.11 and Lemma 58.13.4
      url: https://stacks.math.columbia.edu/tag/0BQJ
      locator: Full 58.11 proofs and the complete displayed proof of tag 0BTF read; normalization/descent motivation only, with the dimension-one completion argument supplied below.
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Lemma 6.1 is the preceding worker's local comparison source; global finiteness below uses local library suppliers, not an import from this book.
verification: {}
---

## Statement

Assume AC and DC. Let $U$ be either $\operatorname{Spec}\mathcal O_{K,S}$ for a number field $K$ and a finite set $S$ of finite places, or a nonempty open of a smooth proper geometrically integral curve $C$ over a finite field $k$, with $K=k(C)$. Let $\mathcal G/U$ be a finite étale commutative group scheme, with generic fibre $G$. For each closed point $v$ of $U$, let $K_v$ be the completion, choose a separable closure, and let $K_v^{\mathrm{nr}}$ be its maximal unramified extension. Then generic restriction is injective and has image
$$H^1_U(K,G):=\{\xi\in H^1(K,G):\xi|_{K_v^{\mathrm{nr}}}=0\text{ for every closed }v\in U\}.$$
Here $H^1$ means represented torsor classes, equivalently degree-one fppf cohomology. If $n\ge2$ is invertible on $U$ and $n\mathcal G=0$, this image is finite. Thus every subgroup of $H^1(K,G)$ satisfying these local conditions has cardinality at most $\#H^1_{\mathrm{\acute et}}(U,\mathcal G)<\infty$. Extension is unique up to isomorphism, and any specified generic equivariant isomorphism extends uniquely. There is no extension requirement at places outside $U$ and no finiteness assertion here for nonétale coefficients.

## Statement references

[[lem-finiteness-of-unramified-h1-for-finite-etale-sheaves]]

[[thm-full-riemann-roch-divisor]]

## Facts & Assumptions

**Given:** Exactly the data and conventions of the Statement.

[A1] AC and DC are retained through the geometric and divisor suppliers. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Integral closure in a finite separable field extension of a normal Noetherian domain is finite. Finite torsion-free modules over a DVR are free. Completion of a finite module is tensor product with the completed ring. Finite comaximal ideal quotients satisfy Chinese remainder. [[thm-finite-integral-closure-in-a-finite-separable-extension]] [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]] [[thm-completion-as-extension-of-scalars]] [[thm-chinese-remainder-theorem-for-comaximal-ideals]]

[F2] The trace determinant of a finite free algebra is a unit exactly when the algebra is étale. Reduction is an equivalence for finite étale algebras over a complete Noetherian local ring. [[lem-discriminant-detects-etaleness-of-finite-free-algebra]] [[lem-complete-local-finite-etale-algebra-lifting]]

[F3] Finite étale covers are finite continuous fundamental-group sets, and the equivalence is fully faithful. Finite abelian groups are products of cyclic groups. [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]] [[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]

[F4] On a number-ring open with $n$ invertible, the first étale cohomology of a finite étale commutative group killed by $n$ is finite. [[lem-finiteness-of-unramified-h1-for-finite-etale-sheaves]]

[F5] On a smooth proper geometrically integral curve, divisor classes are line bundles, every line bundle has a rational section, and $l(D)\ge\deg(D)+1-g$. Proper integral finite-type schemes over finite fields have finite global-function fields. [[thm-cartier-weil-divisors-curves-agree]] [[thm-line-bundle-rational-section-cartier-divisor]] [[thm-full-riemann-roch-divisor]] [[thm-global-functions-proper-integral-variety]]

[F6] Faithfully flat algebra descent is effective with all maps. Over a perfect field a regular finite-type scheme is smooth, and regularity persists under field extension. [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]] [[thm-regular-equals-smooth-over-perfect-field]]

## Proof

**Proof technique:** normalize a generic torsor, check étaleness by completed valuation rings, and bound the resulting integral torsors after a finite cover by units and divisor classes.

**Given:** [A1], [F1]–[F6]; all cohomology groups in the argument are torsor classes.

1.1 A torsor under a finite étale group is represented by a finite étale scheme: on a faithfully flat trivializing cover its algebra is the group's finite locally free algebra, and the finite module, multiplication, unit and action descend with their cocycle; finite presentation, flatness and the vanishing of relative differentials descend faithfully flat. In degree one there is consequently no topology-comparison issue. Over a separable closure choose a torsor point $x$ and write $\sigma x=x+z_\sigma$. Equivariance gives $z_{\sigma\tau}=z_\sigma+\sigma z_\tau$; changing $x$ changes $z$ by a coboundary. Conversely this formula defines a finite continuous action on the simply transitive geometric torsor set, which [F3] represents. [F3, F6, given, construct, algebra]

1.2 Impose now $n\mathcal G=0$ with $n$ invertible. For number fields [F4] proves the finite bound, so consider the curve case. By [F3], the intersection of the kernels of the finite monodromy actions on $\mathcal G$ and $\mu_n$ gives a connected finite étale Galois cover $V\to U$ trivializing both; write $Q$ for its finite deck group. Its group fibre is $M=\prod_i\mathbb Z/d_i$ with $d_i\mid n$ by [F3], so over $V$ it is isomorphic to $\prod_i\mu_{d_i}$. We next prove that the units of $V$ and its Picard group are finitely generated. [F3, F4, given, choose, construct]

2.1 Let $T/K$ represent $\xi\in H^1_U(K,G)$, with finite separable algebra $E=\prod_iL_i$. On an affine normal open $\operatorname{Spec}R\subset U$, take the product $B$ of the integral closures of $R$ in the $L_i$. It is finite by [F1]. Closure commutes with localization: clearing finitely many denominators in a monic equation over $R_f$ shows that a suitable power of $f$ times its root is integral over $R$. These algebras therefore glue to a finite normalization $\mathcal T\to U$ with generic fibre $T$. [F1, step 1.1, construct, algebra]

3.1 Here is the local calculation needed for this normalization. At a closed $v$ write $R=\mathcal O_{U,v}$ and let $B$ now denote its finite normalization algebra. Each local ring $B_w$ is a normal one-dimensional Noetherian local domain, hence a DVR: the usual ideal argument chooses $b\ne0$ in the maximal ideal, the least $r$ with $\mathfrak m^r\subset bB_w$, and $x\in\mathfrak m^{r-1}\setminus bB_w$; then $z=x/b$ satisfies $z\mathfrak m\subset B_w$. If $z\mathfrak m\subset\mathfrak m$, the determinant trick makes $z$ integral, a contradiction; otherwise $zy$ is a unit for some $y\in\mathfrak m$ and $\mathfrak m=yB_w$. The intersection of its powers is zero (its finite intersection ideal equals $y$ times itself, so Nakayama applies), proving the DVR assertion. If $t$ is a uniformizer of $R$, Chinese remainder for $B/t^aB$ and [F1] give $B\otimes_R\widehat R=\prod_{w\mid v}\widehat{B_w}$: the powers of $t$ and the maximal ideals on each local factor are cofinal. Completion of a DVR is again a DVR, by taking the least nonzero uniformizer coefficient; hence this product is normal. Inverting $t$ identifies its total fraction algebra with $E\otimes_KK_v$. It follows that this product is precisely the integral closure of $\widehat R$ in that algebra: an element integral over $\widehat R$ is also integral over the product, so belongs to it by normality. [F1, step 2.1, construct, algebra]

4.1 Because $\mathcal G$ is finite étale, its geometric local fibre $M$ has trivial inertia action: reduce its base change to $\widehat R$ and use [F2], then split the finite residue-field cover. Restriction of $\xi$ to inertia is a coboundary by hypothesis. Every inertia coboundary in $M$ is zero, so its cocycle is zero on inertia. The underlying torsor set therefore has trivial inertia action and is a finite continuous residue-Galois set. Lift its residue algebra by [F2]; this is a finite étale $\widehat R$-algebra with generic algebra $E\otimes_KK_v$. A finite étale algebra over this DVR is a product of unramified DVRs and is normal (a lifted simple residue root gives each factor its uniformizer $t$). It is therefore the integral closure just computed in step 3.1. Thus $B\otimes_R\widehat R$ is étale. Since $B$ is finite torsion-free over the DVR $R$, it is free by [F1]. Its trace determinant becomes a unit after completion; reduction modulo $t$ is unchanged by completion, so the determinant was a unit already. By [F2], $B$ is étale over $R$. At the generic point it was étale from the start; hence $\mathcal T$ is finite étale everywhere on $U$. [F1, F2, F3, step 1.1, step 3.1, given, algebra]

4.2 Normalize the supplied proper curve $C$ in $k(V)$. Finiteness follows on each affine chart by [F1], and gives a proper normal curve $D$ with $V$ as an open (the normalization agrees with the already normal finite étale cover over $U$). Its omitted points form a finite set $Z$. The same DVR argument as step 3.1 shows regularity. By [F6], it is smooth over the perfect field $k$. Its global-function field $k'$ is finite by [F5] and equals its exact constants: any algebraic constant in $k(V)$ is integral over $k$ and hence over every normal local ring of $D$, so extends everywhere. Regard $D$ over $k'$. It is still regular and finite type, hence smooth by [F6]. To check geometric integrality rather than assume it, compute global sections on a finite affine cover: separatedness makes its intersections affine, and the degree-zero Čech kernel commutes with flat field extension. Thus $H^0(D_{\bar k'},\mathcal O)=k'\otimes_{k'}\bar k'=\bar k'$. It has no nontrivial idempotent, so $D_{\bar k'}$ is connected. It is regular by [F6]; in a Noetherian regular scheme distinct irreducible components cannot meet, since local rings are domains. Its finitely many components are therefore open and closed, so connectedness makes it integral. Thus the curve hypotheses of [F5] apply to $D/k'$. [F1, F5, F6, step 3.1, step 1.2, construct, algebra]

5.1 Generic maps between finite étale schemes over normal $U$ extend uniquely. Affinely, their algebras are their generic integral closures: they are normal, being locally étale over DVRs or fields, and an element of the generic algebra integral over the base is integral over the finite algebra, so belongs to it. A generic algebra map preserves integrality and therefore preserves these algebras. Apply this to the generic action $G\times T\to T$, the torsor isomorphism $G\times T\to T\times T$ and its inverse. Products are still finite étale. All identities extend because their two sides agree generically. This makes $\mathcal T$ a $\mathcal G$-torsor, uniquely, and also extends every specified generic equivariant isomorphism. Conversely a finite étale integral torsor splits over the strict unramified local extension by [F2], so satisfies the displayed local conditions. This proves the restriction and image assertions, without any finiteness hypothesis on $n$. [F2, step 2.1, step 4.1, construct, algebra]

5.2 Choose a closed point $P$ of $D$ and an effective multiple $H$ of $P$ of degree $h\ge g(D)$ over $k'$. Every degree-zero line bundle, after tensoring with $\mathcal O(H)$, has a nonzero section by [F5], hence is represented by $E-H$ for an effective divisor $E$ of degree $h$. There are finitely many such $E$: a finite-type scheme over each finite extension $k'_a$ has finitely many rational points, by finitely many affine charts with finitely many algebra generators; every closed point of degree at most $h$ is seen over some $k'_a$ with $a\le h$. There are finitely many such points and finitely many multiplicity lists of weighted sum $h$. Consequently the kernel of degree on $\operatorname{Pic}(D)$ is finite. Its degree image is a subgroup of $\mathbb Z$, hence cyclic; lifting a generator shows that $\operatorname{Pic}(D)$ is finitely generated. Every line bundle on $V$ is a divisor bundle, by taking a rational section and its finitely many valuations; the same divisor on $D$ extends it. Thus $\operatorname{Pic}(V)$ is a quotient of $\operatorname{Pic}(D)$, and is finitely generated. [F5, step 4.2, choose, construct, algebra]

5.3 The divisor of a unit on $V$ is supported on $Z$. Its kernel is $\Gamma(D,\mathcal O_D)^\times=k'^\times$, finite by [F5]. Its image is a subgroup of $\mathbb Z^Z$, hence finitely generated: induction on $|Z|$, using the least positive generator of the last-coordinate image and the subgroup in the other coordinates, gives finite generators. Lifting these and adjoining the finite kernel shows that $\Gamma(V,\mathcal O_V)^\times$ is finitely generated. The argument also covers $Z=\varnothing$. [F5, step 4.2, construct, algebra]

6.1 For $d\mid n$, the sheaf map $u\mapsto u^d$ on $\mathbb G_m$ is étale locally onto: for a unit $u$, adjoining a root of $T^d-u$ is a finite étale surjective cover because $dT^{d-1}$ is a unit there. A $\mu_d$-torsor is equivalently a line bundle $L$ with a trivialization $L^{\otimes d}\simeq\mathcal O_V$: glue the local frames using its root-of-unity transition functions; conversely take frames whose $d$th power is the trivialization. The class maps onto $\operatorname{Pic}(V)[d]$. The fibre above the trivial line bundle is the units modulo $d$th powers, since changing its frame changes the trivialization by a $d$th power. Hence $H^1(V,\mu_d)$ has size $|\Gamma(V,\mathcal O_V)^\times/(\Gamma(V,\mathcal O_V)^\times)^d|\,|\operatorname{Pic}(V)[d]|$, finite by steps 5.2 and 5.3. Explicitly a group on $r$ generators has at most $d^r$ classes modulo $d$; for its $d$-torsion write it as $\mathbb Z^r/H$. The subgroup $H$ is finitely generated by the lattice induction of step 5.3, and $x+H\mapsto dx+dH$ injects its $d$-torsion into the finite group $H/dH$ (if $dx=dh$, torsion-freeness gives $x=h$). The product decomposition in step 1.2 now proves $H^1(V,\mathcal G)$ finite. [F3, step 1.2, step 5.2, step 5.3, construct, algebra]

7.1 Put $\Gamma=\pi_1(U)$ and $\Delta=\pi_1(V)$, a normal subgroup with quotient $Q$. By [F3], torsors are cocycles as in step 1.1. If two classes have the same restriction to $\Delta$, adjust one cocycle by a coboundary so their restrictions agree. Their difference vanishes on $\Delta$; the cocycle law and normality, with trivial $\Delta$-action on $M$, show it factors through $Q$. There are at most $|M|^{|Q|}$ such functions, so every restriction fibre has at most that many classes. Thus $|H^1(U,\mathcal G)|\le |M|^{|Q|}|H^1(V,\mathcal G)|<\infty$. Together with step 5.1 and the number-field bound in step 1.2 this proves the stated assertions. Invertibility was essential to step 6.1; no analogous bound for arbitrary finite flat coefficients has been proved here. [F3, step 1.1, step 5.1, step 1.2, step 6.1, algebra] ∎

## Source and scope notes

This is an uninstalled research draft, with no independent review. The local
normalization calculation expands the finite-module/Chinese-remainder argument
in the current function-curve normalization supplier, steps 3.1–4.1 and 6.1;
that supplier itself assumes algebraically closed constants and is not used as
an interface over finite fields. The preceding local Kummer draft is preserved
and is not reproved here. The number-field finite bound is reused verbatim as
an interface, not reauthored. The curve bound uses the displayed local
Riemann–Roch/divisor suppliers, with no global-duality input. This does not
prove the characteristic-dividing part of the parent Selmer statement.

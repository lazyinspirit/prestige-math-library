---
id: lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence
kind: lemma
title: General Thom isomorphism from the relative Serre spectral sequence
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-cohomological-serre-spectral-sequence, thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence, def-r-oriented-vector-bundle-and-orientation-local-system, def-thom-class-by-fiberwise-normalization, lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring, prop-relative-cup-products-are-natural-and-compatible-with-connectors, thm-numerable-fiber-bundles-are-hurewicz-fibrations, thm-numerable-vector-bundles-admit-bundle-metrics, def-pullback-vector-bundle-and-pullback-section, prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism, thm-homotopy-invariance-of-vector-bundle-pullback, def-axiom-of-choice, def-relative-cup-product, thm-the-cohomological-filtered-complex-construction, thm-cellular-cochains-compute-cohomology-with-local-coefficients, def-cup-and-cap-products-with-local-coefficient-pairings, lem-finite-and-complete-filtered-isomorphism-lifting]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 notes, Lectures 34–35"
      url: "https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "orientation and Proposition 35.2, printed pp.124–130"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Thom isomorphism and Serre proof, printed pp.194–196"
---

## Statement

Assume AC.  Let $\xi$ be an arbitrary numerable rank-$n$ vector bundle over a
CW complex, or over a paracompact Hausdorff base of CW type.  The relative
Serre spectral sequence of
$(D(\xi),S(\xi))\to B$ has
$$E_2^{p,q}=H^p\bigl(B;\mathcal H^q(D^n,S^{n-1};R)\bigr),$$
whose only nonzero row is $q=n$, equal to the orientation local system
$\mathcal O_R(\xi)$.  It collapses without extensions to the canonical
additive isomorphism
$$H^k(B;\mathcal O_R(\xi))\xrightarrow{\cong}H^{k+n}(D(\xi),S(\xi);R).$$
If an $R$-orientation $o$ is supplied, it trivializes $\mathcal O_R(\xi)$,
and the same edge yields the normalized Thom class $u_\xi$ with the oriented
Thom isomorphism
$$a\mapsto\pi^*a\smile u_\xi:H^k(B;R)\xrightarrow{\cong}H^{k+n}(D(\xi),S(\xi);R).$$

## Facts & Assumptions

**Given:** AC and the numerable rank-$n$ bundle; in the oriented clause a supplied $R$-orientation.

[F0] [[thm-numerable-vector-bundles-admit-bundle-metrics]] supplies a metric under AC.

[F1] [[thm-numerable-fiber-bundles-are-hurewicz-fibrations]] makes the disk and sphere bundles fibrations to which the Serre skeletal construction applies.

[F2] [[thm-cohomological-serre-spectral-sequence]] gives the absolute skeletal cochain construction, local-coefficient $E_2$ identification, and strong convergence; [[thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence]] identifies its products.

[F3] [[lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring]] and [[def-r-oriented-vector-bundle-and-orientation-local-system]] calculate the relative fiber row and identify its monodromy with the orientation system $\mathcal O_R(\xi)$, before any orientation is supplied.

[F4] [[prop-relative-cup-products-are-natural-and-compatible-with-connectors]] identifies the relative filtered product and its edge action.

[F5] [[def-thom-class-by-fiberwise-normalization]] defines normalization by a supplied orientation section.

[F6] [[def-pullback-vector-bundle-and-pullback-section]], [[prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism]], and [[thm-homotopy-invariance-of-vector-bundle-pullback]] transport bundles and their disk/sphere pairs along homotopy equivalences.

[F7] [[def-relative-cup-product]] fixes the relative cochain complex as the cochains vanishing on the subspace, the front/back cochain formula for the cup product with one relative factor and its Leibniz identity, and the descent of that formula to relative cohomology.

[F8] [[thm-the-cohomological-filtered-complex-construction]] gives the layers, pages and abutment of a filtered cochain complex, and [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]] identifies the cellular cochain complexes with local coefficients.

[F9] [[def-cup-and-cap-products-with-local-coefficient-pairings]] displays the local-coefficient front/back cup formula with its reverse transport on the back face and its Leibniz identity.

[F10] [[lem-finite-and-complete-filtered-isomorphism-lifting]] lifts a graded isomorphism to a filtered isomorphism for exhaustive, separated, complete filtrations.

[A1] [[def-axiom-of-choice]] is used in [F2] and [F6].

## Proof

**Proof technique:** run the Serre construction on relative cochains, then pair it with the base skeletal filtration.

1.1 Choose the metric from [F0].  Over a CW base, filter the relative cochain complex $C^*(D(\xi),S(\xi);R)$ by inverse images of the base skeleta.  In the cellwise calculation in [F2], quotient every disk-bundle chain group by its sphere-bundle subcomplex.  Subdivision and fibration lifting in [F1] preserve that subcomplex, so the identical exact-couple argument has fiber term $H^q(D^n,S^{n-1};R)$ and yields the displayed relative $E_2$ page with the same convergence bounds. [F0, F1, F2]

2.1 By [F3], those fiber groups vanish unless $q=n$, where they form the orientation local system $\mathcal O_R(\xi)$.  Hence every differential has a zero source or target, $E_2=E_\infty$, and in total degree $k+n$ there is exactly one filtration quotient, $E_\infty^{k,n}=H^k(B;\mathcal O_R(\xi))$.  The strong convergence in [F2] therefore identifies it with $H^{k+n}(D(\xi),S(\xi);R)$, giving the canonical additive isomorphism; there is no additive extension to split.  No orientation, Thom class, or oriented statement is used here. [F2, F3, step 1.1]

2.2 Set $D_a=\pi^{-1}(B^{(a)})$ for the metric skeleta of step 1.1 and write $S=S(\xi)$.  Give the relative cochain complex of [F7], namely the cochains vanishing on every singular simplex with image in $S$, the **relative disk/sphere filtration**
$$F^aC^m(D,S;R)=\{\varphi:\varphi(\sigma)=0\text{ for every singular simplex }\sigma\text{ with image in }D_{a-1}\},$$
and give the absolute cochain complex $C^*(B;R)$ the **base skeletal filtration**
$$F^aC^m(B;R)=\{\alpha:\alpha(\tau)=0\text{ for every singular simplex }\tau\text{ with image in }B^{(a-1)}\}.$$
For $\alpha\in C^p(B;R)$ and $\varphi\in C^q(D,S;R)$ put $\alpha\star\varphi=\pi^*\alpha\smile\varphi$, formed by the front/back formula of [F7].  If a simplex has image in $S$, then so does its back face, on which $\varphi$ vanishes; hence $\alpha\star\varphi$ vanishes on $C_*(S;R)$ and $\star$ takes values in $C^{p+q}(D,S;R)$.  If $\sigma$ has image in $D_{a-1}$ and $\alpha\in F^aC^p(B;R)$, then every face of $\sigma$ has image in $D_{a-1}$, so the front face projects into $B^{(a-1)}$ and $\alpha$ vanishes on it; therefore
$$\pi^*\bigl(F^aC^p(B;R)\bigr)\star C^q(D,S;R)\subseteq F^aC^{p+q}(D,S;R).$$
By the Leibniz identity of [F7], $\delta(\pi^*\alpha\smile\upsilon)=\pi^*\delta\alpha\smile\upsilon$ whenever $\delta\upsilon=0$.  Thus every cocycle $\upsilon\in C^n(D,S;R)$ makes $\Phi^\bullet_\upsilon(\alpha)=\pi^*\alpha\smile\upsilon$ a filtration-preserving cochain map $C^\bullet(B;R)\to C^{\bullet+n}(D,S;R)$, and the induced map $\Phi_\upsilon:H^m(B;R)\to H^{m+n}(D,S;R)$ sends $[\alpha]$ to the relative cup product of $[\alpha]$ and $[\upsilon]$, which is natural in the base and the bundle by the same cochain formula and [F4]. [F4, F7, step 1.1]

3.1 By [F8] the two filtrations of step 2.2 present these complexes with layers $E_0^{a,q}=\operatorname{gr}^a$ and pages $E_1^{a,q}\cong H^{a+q}(\operatorname{gr}^a)$, and a filtration-preserving cochain map induces a map of the layer complexes, hence maps $\Phi_r:E_r^{a,q}(B;R)\to E_r^{a,q+n}(D,S;R)$ commuting with the differentials; the map induced on the abutment is $\Phi_\upsilon$, whose associated graded map is the one induced by $\Phi_1$.  On the base side $E_1^{a,q}(B;R)=0$ for $q\ne0$, because $B^{(a)}/B^{(a-1)}$ is a wedge of $a$-spheres, and $E_1^{a,0}(B;R)$ is the cellular cochain group of the $a$-cells with $d_1$ the cellular coboundary, so $E_2^{a,0}(B;R)=H^a(B;R)$ and the base sequence has one row.  On the relative side, the cellwise exact-couple identification of step 1.1 identifies $E_1^{a,q}(D,S)$ with the $a$-cell cochains of $B$ with values in the fiber system $\mathcal H^q(D^n,S^{n-1};R)$, with $d_1$ its cellular coboundary and $E_2^{a,q}(D,S)=H^a(B;\mathcal H^q(D^n,S^{n-1};R))$; in particular $E_2^{a,n}(D,S)=H^a(B;\mathcal O_R(\xi))$ by [F3].  Evaluating $\pi^*\alpha\smile\upsilon$ on a simplex of $D$, the front/back formula returns the value of $\alpha$ on the front face over the base together with the value of $\upsilon$ on the back face, transported to the initial vertex; with the cellular identification this is exactly the local-coefficient cup formula of [F9] for the coefficient pairing $\mathcal H^0\otimes\mathcal H^n\to\mathcal H^n$ given by the fiber cup with the top class, and its sign is $(-1)^{bc}=1$ because the first factor has fiber degree $b=0$, matching the page-product convention of [F2].  Therefore, in the cell identifications, $\Phi_1$ is cellular local-coefficient cup product with the section $s_\upsilon$ of $\mathcal O_R(\xi)$ carried by the row-$n$ class of $\upsilon$: that class is closed, since it is the image of the cocycle class $[\upsilon]$ under the edge map into the row of [F8], so it defines $s_\upsilon\in H^0(B;\mathcal O_R(\xi))=E_2^{0,n}$ and $\Phi_2:H^a(B;R)\to H^a(B;\mathcal O_R(\xi))$ is cup product with $s_\upsilon$.  When $\upsilon$ represents the class normalized by a supplied orientation, $s_\upsilon$ is the orientation section itself, and $\Phi_2$ is the corresponding trivialization of the rank-one orientation local system, hence an isomorphism. [F2, F3, F8, F9, step 1.1, step 2.2]

4.1 Now suppose an $R$-orientation $o$ is supplied.  Its nowhere-zero section trivializes the rank-one local system $\mathcal O_R(\xi)$, so the orientation section $o\in H^0(B;\mathcal O_R(\xi))=E_2^{0,n}$ corresponds through the collapse of step 2.1 to a class $u\in H^n(D(\xi),S(\xi);R)$ whose fiber restriction is $o_b$ over every $b$, and [F5] makes $u$ the normalized Thom class.  Choose a cocycle representative $\upsilon$ of $u$ and apply steps 2.2 and 3.1: the map $\Phi(a)=\pi^*a\smile u$ has associated graded map $\Phi_2$, the trivialization $\alpha\mapsto\alpha\smile o$ of $\mathcal O_R(\xi)$.  The source filtration of $\Phi$ is concentrated on $\operatorname{gr}^aH^a(B;R)$ and, by the one-row collapse of step 2.1, the target filtration is concentrated on $\operatorname{gr}^aH^{a+n}(D,S;R)$, so $\operatorname{gr}^a\Phi$ is that isomorphism for every $a$ and the remaining graded pieces are maps between zero groups.  Both image filtrations are exhaustive, separated and complete, with $F^{n+1}H^n=0$, by [F2] and [F8], so [F10] makes $\Phi$ an isomorphism and its inverse preserves each filtration piece.  Let $\Psi$ be the composite of the trivialization $\alpha\mapsto\alpha\smile o$ of $\mathcal O_R(\xi)$ with the collapse isomorphism of step 2.1.  Both $\Phi$ and $\Psi$ induce the same map on associated graded objects, namely that trivialization on $E_2^{a,n}$: for $\Phi$ this is step 3.1 applied to a representative $\upsilon$ of the normalized class, and for $\Psi$ it is the definition of the associated graded together with the trivialization.  The edge map $H^{a+n}(D(\xi),S(\xi);R)\to E_\infty^{a,n}$ is injective, because its kernel is $F^{a+1}H^{a+n}(D(\xi),S(\xi);R)$, which vanishes: by the one-row collapse of step 2.1 every associated graded piece above degree $a$ is zero, and $F^{a+n+1}H^{a+n}=0$ by the finite image filtration of [F2].  Hence $\Phi=\Psi$, so the edge of step 2.1 is exactly $a\mapsto\pi^*a\smile u$, with $u$ the normalized Thom class. [F2, F3, F5, F8, F10, step 2.1, step 2.2, step 3.1]

5.1 Now let $B$ be paracompact Hausdorff of CW type and choose a homotopy equivalence $f:K\to B$ from a CW complex, part of the CW-type hypothesis.  Apply steps 1.1–4.1 to $f^*\xi$; a supplied orientation pulls back, and naturality carries the twisted row, the filtered module action and both isomorphisms.  A homotopy inverse and [F6] identify the iterated pullbacks with the original bundle; the induced radial bundle maps are homotopy inverse maps of disk/sphere pairs.  Ordinary and relative homotopy invariance therefore identify the two additive twisted isomorphisms and, when an orientation is supplied, transport the normalized class and the oriented cup-product isomorphism back to $B$. [F6, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1]

6.1 At rank zero, $D(\xi)=B$, $S(\xi)=\varnothing$, and every transition unit on $H^0$ is trivial, so $\mathcal O_R(\xi)$ is the constant system $R$ and the twisted isomorphism of step 2.1 is the identity identification $H^k(B;R)\cong H^k(B;R)$.  A supplied rank-zero orientation is the unit-valued class $o\in H^0(B;R)$; normalization gives $u=o$, and the oriented edge is multiplication by $o$, inverted by the componentwise inverse $o^{-1}$.  This is the identity exactly for the standard unit orientation $o=1$, while the reversed integral orientation on a point gives multiplication by $-1$.  In rank zero the relative complex of step 2.2 is the absolute complex of $B$, its relative filtration is the base filtration, and the module action of steps 2.2–4.1 reduces to cup product with the unit-valued class $o$, whose associated graded map is multiplication by the unit $1$.  Empty bases are handled componentwise by zero groups; disconnected bases use the componentwise construction and AC already assumed in [A1] for the cohomological comparison.  The zero ring, a point base, the first and last filtration pieces, identity pullback, and both homotopy-equivalence composites are included.  AC is used exactly through [F0], [F2], and [F6]; the one-row collapse, the filtered module action and the relative cell quotient add no choice. [F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, A1, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1] ∎

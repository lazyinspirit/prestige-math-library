---
id: lem-linking-pairing-on-rational-homology-sphere-is-nonsingular
kind: lemma
title: The torsion linking pairing of a rational homology sphere is nonsingular
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-bounding-chain-torsion-linking-pairing
  - thm-poincare-duality-for-oriented-topological-manifolds
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - thm-long-exact-sequence-in-cohomology
  - thm-cellular-homology-computes-singular-homology
  - thm-cellular-cochains-compute-cohomology-with-local-coefficients
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Charles Livingston and Swatee Naik, Introduction to Knot Concordance
      url: https://chuck-livingston.github.io/math/Concordance_Book.pdf
      locator: Chapter 7, §7.6, pp. 140–141; complete linking-form section read
    - title: Patrick Gilmer, Slice Knots in S3
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/gilmer3.pdf
      locator: §1, printed pp. 306–307; complete relevant linking-form and metabolizer discussion read
    - title: Matthias Aschenbrenner, Stefan Friedl and Henry Wilton, Decision problems for 3-manifolds and their fundamental groups
      url: https://msp.org/gtm/2015/19-1/gtm-v19-n1-p08-s.pdf
      locator: Theorem 3.1 (Moise), printed p. 211, with compact-manifold convention on p. 203; external finite triangulation input, not a local proof of Moise's theorem
    - title: Allen Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Section 3.3, printed pp. 232–233; dual-cell intersection model of Poincare duality. The chain/cochain linking calculation and its signs are derived below.
---

## Statement

Assume AC. If $Y$ is a closed connected oriented $3$-manifold with finite $H_1(Y;\mathbb Z)$, then the bounding-chain torsion linking pairing $\lambda_Y$ is symmetric and nonsingular: its adjoint $H_1(Y;\mathbb Z)\to\operatorname{Hom}(H_1(Y;\mathbb Z),\mathbb Q/\mathbb Z)$ is an isomorphism.

## Statement references

[[def-bounding-chain-torsion-linking-pairing|The signed bounding-chain formula]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, §7.6, pp. 140–141](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

[Patrick Gilmer, *Slice Knots in S3*, §1, pp. 306–307](https://www.maths.ed.ac.uk/~v1ranick/papers/gilmer3.pdf)

[[def-axiom-of-choice|Axiom of Choice]]

## Facts & Assumptions

**Given:** Full AC and a closed connected oriented $3$-manifold $Y$ with finite $H_1(Y;\mathbb Z)$.

[A1] Full AC is assumed wherever the cover and orientation conventions use the choice axiom. [[def-axiom-of-choice]]

[F1] Poincaré duality for closed oriented manifolds gives $H^2(Y;\mathbb Z)\cong H_1(Y;\mathbb Z)$ and $H^2(Y;\mathbb Q)\cong H_1(Y;\mathbb Q)$. [[thm-poincare-duality-for-oriented-topological-manifolds]]

[F2] The cohomology universal coefficient sequence over $\mathbb Z$ identifies $H^1(Y;\mathbb Q)$ with $\operatorname{Hom}(H_1(Y;\mathbb Z),\mathbb Q)$ and $H^1(Y;\mathbb Q/\mathbb Z)$ with $\operatorname{Hom}(H_1(Y;\mathbb Z),\mathbb Q/\mathbb Z)$, since $H_0(Y;\mathbb Z)=\mathbb Z$ is free. [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]

[F3] The coefficient sequence $0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$ gives the long exact cohomology sequence and its natural Bockstein map $\beta:H^1(Y;\mathbb Q/\mathbb Z)\to H^2(Y;\mathbb Z)$. [[thm-long-exact-sequence-in-cohomology]]

[F4] **External triangulation input.** A compact topological $3$-manifold admits a finite manifold triangulation (Moise's theorem, as stated in Aschenbrenner–Friedl–Wilton, Theorem 3.1, p. 211, under their compact-manifold convention, p. 203). We use its barycentric dual cells as a chain model, not as an additional smoothness hypothesis on $Y$. Orient a dual cell so that its oriented transverse intersection with the corresponding primal cell is positive. The dual-cell description of Poincaré duality is recalled in Hatcher, §3.3, pp. 232–233; the specific bounding-chain/Bockstein identity is proved below, rather than assumed.

[F5] Cellular homology computes singular homology for every CW complex and every abelian coefficient group. Under [A1], cellular cochains compute singular cohomology for CW pairs with local coefficients, naturally for coefficient morphisms. Apply these comparisons to the finite triangulation and its dual CW complex, the pair $(Y,\varnothing)$, and the trivial coefficient systems $\mathbb Z$, $\mathbb Q$ and $\mathbb Q/\mathbb Z$. Thus cellular cycles and bounding chains represent precisely the singular homology classes, and the cellular coefficient-sequence Bockstein and evaluation agree with their singular counterparts. [[thm-cellular-homology-computes-singular-homology]] [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]

## Proof

1.1 Since $H_1(Y;\mathbb Z)$ is finite, $H^1(Y;\mathbb Q)=0$ by [F2], and $H^2(Y;\mathbb Q)=0$ by [F1]. Exactness of [F3] therefore makes $\beta:H^1(Y;\mathbb Q/\mathbb Z)\to H^2(Y;\mathbb Z)$ an isomorphism. Write $\operatorname{PD}:H_1(Y;\mathbb Z)\to H^2(Y;\mathbb Z)$ for inverse cap duality. [F1, F2, F3, given, algebra, A1]

2.1 We first fix the intersection sign and verify independence directly. For transverse oriented $2$-chains $C,T$ in an oriented $3$-manifold, orient their intersection so that
$$\partial(C\cap T)=(\partial C)\cap T-C\cap(\partial T).$$
This sign follows by the outward-normal-first boundary convention in an oriented coordinate ball: taking a boundary in the second sheet passes its outward normal past the one normal direction of the first sheet. Consequently, the total signed endpoint count gives
$$C\cdot\partial T=(\partial C)\cdot T.$$
These identities extend linearly to chains; the terms on paired interior faces cancel. For a closed $2$-chain $E$ and torsion cycle $y$, choose $m>0$ and $\partial T=my$. Then $m(E\cdot y)=E\cdot\partial T=0$, so $E\cdot y=0$. Thus if $\partial C=nx$ and $\partial C'=n'x$, the closed chain $n'C-nC'$ has zero intersection with $y$, giving $(C\cdot y)/n=(C'\cdot y)/n'$. Replacing $x$ by $x+\partial S$ permits replacing $C$ by $C+nS$ and changes the quotient by the integer $S\cdot y$. Replacing $y$ by $y+\partial T$ changes it by $(C\cdot\partial T)/n=x\cdot T$, also an integer. A change of transverse position is a chain homotopy: its prism has the moved-chain difference as boundary, so these same boundary identities apply. Hence the expression defines a pairing on the stated homology classes, independent of all these choices modulo $\mathbb Z$. [given, construct, algebra]

2.2 To identify that pairing with the Bockstein, use [F4] and [F5] and represent $x$ by a primal cellular $1$-cycle $a$, and $y$ by a dual cellular $1$-cycle $b$. Since $n[a]=0$, there is an integral primal cellular $2$-chain $C$ with $\partial C=na$. The dual-cell pairing gives the rational cellular $1$-cochain
$$u(e)=\frac{C\cdot e}{n}$$
on every oriented dual edge $e$. Let $z_a$ be the integral cellular $2$-cochain on the dual complex defined by $z_a(\sigma)=a\cdot\sigma$. The sign convention in step 2.1 gives, for every dual $2$-cell $\sigma$,
$$(\delta u)(\sigma)=\frac{C\cdot\partial\sigma}{n} =\frac{(\partial C)\cdot\sigma}{n} =a\cdot\sigma=z_a(\sigma).$$
There is no extra minus sign: in an oriented chart with $a$ tangent to the first coordinate and its dual $2$-cell tangent to the second and third coordinates, $a\cdot\sigma=+1$. A primal $2$-cell followed by its positive transverse dual edge likewise has intersection $+1$. These are precisely the oriented dual-cell representatives of inverse cap duality, so $[z_a]=\operatorname{PD}(x)$. [F1, F4, F5, step 2.1, construct]

2.3 Reducing $u$ modulo $\mathbb Z$ gives a cocycle $\bar u$, because $\delta u=z_a$ is integral. Under the natural comparison [F5], the connecting map in [F3] is constructed by lifting this cocycle to a rational cochain and taking its coboundary; therefore
$$\beta[\bar u]=[\delta u]=\operatorname{PD}(x),\qquad \langle[\bar u],y\rangle=u(b)\bmod\mathbb Z =\frac{C\cdot b}{n}\bmod\mathbb Z.$$
By step 2.1 this is also the bounding-chain expression for any representatives and any bounding multiple in the definition. Cellular representatives cause no restriction by [F5]: cellular and singular chain models represent the same classes, and changes of representatives and transverse positions have already been accounted for. Thus the precise identity is
$$\lambda_Y(x,y)=\bigl\langle\beta^{-1}\operatorname{PD}(x),y\bigr\rangle.$$
The evaluation is on the homology class $y$, not on a cohomology class called its Poincaré dual; equivalently it is the corresponding degree-$3$ cup-product evaluation on $[Y]$. [F2, F3, F4, F5, step 1.1, step 2.1, step 2.2, construct]

3.1 Under [F2], evaluation identifies $H^1(Y;\mathbb Q/\mathbb Z)$ with the entire character group $\operatorname{Hom}(H_1(Y;\mathbb Z),\mathbb Q/\mathbb Z)$. The displayed identity in step 2.3 identifies the adjoint of the bounding-chain pairing with the composite of this isomorphism, $\beta^{-1}$, and $\operatorname{PD}$. All three are isomorphisms, so the pairing is nonsingular. In particular its bilinearity also follows from these homomorphisms and evaluation. [F1, F2, step 1.1, step 2.3, algebra]

4.1 For torsion classes $x,y$, choose transverse representatives and chains $C,D$ with $\partial C=nx$ and $\partial D=my$. The boundary identity of step 2.1 applied to $C\cap D$ gives $n(x\cdot D)=m(C\cdot y)$. Interchanging a $1$-cycle and a $2$-chain in an oriented $3$-manifold changes the intersection sign by $(-1)^{(3-1)(3-2)}=+1$, so $x\cdot D=D\cdot x$. Divide by $nm$ and reduce modulo $\mathbb Z$ to obtain $\lambda_Y(x,y)=\lambda_Y(y,x)$. This proves symmetry with the signed bounding-chain convention of the definition. [step 2.1, step 2.3, given, construct, algebra] ∎

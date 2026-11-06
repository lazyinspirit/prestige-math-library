---
id: lem-gts-nonprimitive-fano-anticanonical-k3-bridges
kind: lemma
title: Primitive anticanonical K3 bridges for the nonprimitive Fano cases
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-step3-fresh-2026-11-04
dependency_level: 8
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Feyzbakhsh, Koseki, Liu and Rekuski, Stability conditions on Calabi–Yau threefolds via Brill–Noether theory of curves
    url: https://arxiv.org/pdf/2509.24990v2
    locator: Sections 5.1 and 5.3 distinguish the maximal-index source cases. The nonprimitive bridges below are local deductions from the declared suppliers, not quotations of Theorems 5.2 or 5.7.
deps:
- def-axiom-of-choice
- lem-gts-picard-one-fano-index-divisor-is-integral-generator
- lem-gts-fano-fundamental-smooth-ladders-and-high-degree-embeddings
- lem-gts-k3-ample-linear-system-serre-instability-criterion
- lem-gts-canonical-curve-section-ring-lifting-on-k3-and-fano-ladders
- lem-gts-very-general-k3-sections-of-the-fano-ladder-have-picard-rank-one
- lem-gts-weighted-degree-one-del-pezzo-double-plane-k3-ladder
- lem-gts-ample-divisor-relative-handles-and-integral-restriction
- lem-gts-log-adjoint-vanishing-on-snc-pairs
- lem-gts-general-projective-threefold-gaga-by-finite-projection
- thm-dolbeault-lemma-polydisc
- thm-smooth-function-module-sheaves-are-acyclic
- thm-acyclic-resolution-theorem-for-right-derived-functors
- thm-first-chern-class-classifies-complex-line-bundles
- thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
- thm-riemann-roch-euler-characteristic-curve
- thm-serre-duality-curves-vector-bundles
- thm-grothendieck-riemann-roch-for-projective-morphisms
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- thm-bertini-smooth-hyperplane-section
- thm-proper-quasi-finite-is-finite
- lem-finite-birational-to-normal-is-isomorphism
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-gts-picard-one-fano-index-divisor-is-integral-generator: mathematical-premise
  lem-gts-fano-fundamental-smooth-ladders-and-high-degree-embeddings: mathematical-premise
  lem-gts-k3-ample-linear-system-serre-instability-criterion: mathematical-premise
  lem-gts-canonical-curve-section-ring-lifting-on-k3-and-fano-ladders: mathematical-premise
  lem-gts-very-general-k3-sections-of-the-fano-ladder-have-picard-rank-one: mathematical-premise
  lem-gts-weighted-degree-one-del-pezzo-double-plane-k3-ladder: mathematical-premise
  lem-gts-ample-divisor-relative-handles-and-integral-restriction: mathematical-premise
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  lem-gts-general-projective-threefold-gaga-by-finite-projection: mathematical-premise
  thm-dolbeault-lemma-polydisc: mathematical-premise
  thm-smooth-function-module-sheaves-are-acyclic: mathematical-premise
  thm-acyclic-resolution-theorem-for-right-derived-functors: mathematical-premise
  thm-first-chern-class-classifies-complex-line-bundles: mathematical-premise
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  thm-riemann-roch-euler-characteristic-curve: mathematical-premise
  thm-serre-duality-curves-vector-bundles: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  thm-bertini-smooth-hyperplane-section: mathematical-premise
  thm-proper-quasi-finite-is-finite: mathematical-premise
  lem-finite-birational-to-normal-is-isomorphism: mathematical-premise
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume AC and work over the complex numbers. If a smooth connected projective Fano n-fold has $-K=rA=IB$, where I is its maximal integral index and A,B are ample line bundles, then r divides I, $A=(I/r)B$ and $I\le n+1$.

If Y is a smooth Picard-number-one Fano threefold with maximal index $I\ge 2$, $Pic(Y)=ZB$ and $-K_{Y}=IB$, then |IB| is generated and a very general smooth T∈|IB| is K3 with $Pic(T)=ZB_{T}$, integrally, and $B_{T}²=I$ B³. For $I=2,B³=1$ the threefold has the weighted sextic normal form and the K3 system is the double-plane system; no very-ampleness of |2B| is asserted in that case. In all other cases |IB| is very ample.

If M is a smooth Picard-number-one Fano fourfold with $-K_{M}=2A$ and A nonprimitive, then $I=4$, $A=2B$ and (M,B) is the smooth quadric fourfold with its hyperplane polarization. A general Y∈|2B| is smooth, $Pic(Y)=ZB$, $-K_{Y}=2B$ and $B³=4$. A very general T∈|2B|Y| is K3 with $Pic(T)=ZB_{T}$ and $B_{T}²=8$. These choices can also satisfy any prescribed nonempty open transversality condition.

## Facts & Assumptions

**Given:** Exactly the smooth complex projective Fano varieties, Cartier decompositions and Picard-number hypotheses in the Statement.

[F1] [[lem-gts-picard-one-fano-index-divisor-is-integral-generator]] proves $Pic(Y)=ZB$ when the Picard number is one. Its proof of triviality of numerically trivial lines uses smooth adjoint vanishing and GRR and does not require Picard number one. [[lem-gts-fano-fundamental-smooth-ladders-and-high-degree-embeddings]] (Proof 1.15–1.18 and 1.21–1.29) applies only at the MAXIMAL index and supplies smooth fundamental ladders, generation of B for threefold index at least three or index two degree at least two, and the degree-one del-Pezzo smooth elliptic ladder.

[F2] [[lem-gts-k3-ample-linear-system-serre-instability-criterion]] says that an ample L with $L²\ge 6$ has at most one primitive nef elliptic pencil of L-degree at most two. Failure of generation or very ampleness produces such a pencil, except for $L²=8,L=2D,D²=2$. [[lem-gts-canonical-curve-section-ring-lifting-on-k3-and-fano-ladders]] includes the exact connected degree-zero quotient and the normal-generation/very-ampleness lift from an actual smooth canonical curve.

[F3] [[lem-gts-very-general-k3-sections-of-the-fano-ladder-have-picard-rank-one]] applies to the complete very ample anticanonical system on a smooth threefold with $Pic=ZB$ and $H^{2,0}=0$, retaining the primitive B, not the generally nonprimitive anticanonical class. Its separate degree-one weighted double-plane branch applies to the normal form constructed below. [[lem-gts-weighted-degree-one-del-pezzo-double-plane-k3-ladder]] supplies its complete |2B| and K3 geometry. [[lem-gts-ample-divisor-relative-handles-and-integral-restriction]] gives integral H² restriction for the complete intersections below.

[F4] [[lem-gts-log-adjoint-vanishing-on-snc-pairs]], [[thm-grothendieck-riemann-roch-for-projective-morphisms]], [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]], [[thm-riemann-roch-euler-characteristic-curve]], [[thm-serre-duality-curves-vector-bundles]] and [[thm-bertini-smooth-hyperplane-section]] have their exact declared interfaces. [[lem-gts-general-projective-threefold-gaga-by-finite-projection]], [[thm-dolbeault-lemma-polydisc]], [[thm-acyclic-resolution-theorem-for-right-derived-functors]], [[thm-smooth-function-module-sheaves-are-acyclic]] and [[thm-first-chern-class-classifies-complex-line-bundles]] allow the algebraic Picard injection used in step 6.1; no fourfold GAGA is invoked. [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]] turns $H²(O_{Y})=0$ into $H^{2,0}(Y)=0$.

[F5] [[thm-proper-quasi-finite-is-finite]] gives finiteness of the section morphism in step 2.3. [[lem-finite-birational-to-normal-is-isomorphism]] then identifies the quadric, after its normality is checked there. [[def-axiom-of-choice]] is the ambient premise throughout.

## Proof

1.1 Every numerically trivial line N on a smooth Fano has $χ(N)=χ(O)=1$ by GRR, and −K+N is ample because all intersection numbers are unchanged. Adjoint vanishing makes its positive cohomology zero. A nonzero section of N has no nonzero effective divisor, since such a divisor has positive degree against an ample power. It trivializes N. In particular Pic has no torsion. Let $g=\operatorname{gcd}(r,I)$, $m=r/g,q=I/g$. From $mA=qB$ and coprimality, choose u,v with $um+vq=1$; $C=uB+vA$ then satisfies $mC=B,qC=A$, using torsion-freeness. C is ample because $mC=B$ is ample. Thus $-K=ImC$; maximality of I forces $m=1$. This proves r|I and $A=(I/r)B$. For $P(t)=χ(O(tB))$, vanishing gives $P(0)=1$ and the distinct roots −1,…,−(I−1). Its degree is n, so $I\le n+1$. [given, F1, F4, algebra]

2.1 For the threefold, $Pic(Y)=ZB$ by F1, and I∈{2,3,4}. Write $w=B³$. If $I=3,4$, the Euler roots and Serre symmetry give $w=2,1$ respectively. If $I=2$, leave $w\ge 1$ unrestricted. For $I\ge 3$ or $I=2,w\ge 2$, F1 makes B generated, hence $L=IB$ generated. Bertini supplies a smooth T∈|L|; connectedness follows from the ample-divisor supplier. Adjunction gives $K_{T}=O$. The sequence $0\to K_{Y}\to O_{Y}\to O_{T}\to 0$, adjoint vanishing on Y and Serre duality give $H¹(O_{T})=0$, so T is K3. Moreover $d=(L|T)²=I³w$ is at least16 in these cases. [given, F1, F3, F4, step 1.1, construct, algebra]

2.2 It remains to justify all degree-one index-two threefolds, rather than assume they are weighted models. F1 supplies smooth D∈|B| with $-K_{D}=B_{D}$ and a smooth genus-one $C\\in  |B_{D}|$. Its line $b=B|C$ has degree one. A nonzero section x of b has divisor a single smooth point p. Curve RR gives $h⁰(nb)=n$ for $n\ge 1$. Choose y∈H⁰(2b) outside xH⁰(b), and z∈H⁰(3b) outside xH⁰(2b). As rational functions y/x²,z/x³ they have exact pole orders two and three at p. Their monomials with z-exponent zero or one have distinct pole orders, all nonnegative integers except one; RR therefore makes them a basis in every degree after multiplying by the appropriate power of x. In degree six their single relation has nonzero z² and y³ coefficients (both have exact pole order six). Completing the square and translating y removes the z-linear and y² terms, giving z²+y³+a4 x⁴y+a6 x⁶. The same pole-order basis proves there are no further relations: the Hilbert series is (1−t⁶)/((1−t)(1−t²)(1−t³)). [F1, F2, F4, step 1.1, construct, algebra]

2.3 For the fourfold, $Pic(M)=ZB$ by F1, so nonprimitivity of A and step 1.1 force $I=4,A=2B$. Euler roots and symmetry give $B⁴=2$ and $h⁰(M,B)=6$, as in the explicit index-four Euler calculation in F1. The maximal-index ladder makes B generated. Its morphism φ:M→P⁵ has finite fibres: a positive-dimensional projective fibre contains a curve, on which B would have degree zero, contrary to ampleness. It is proper, hence finite by F5. Its image W is an integral nondegenerate fourfold hypersurface, and $\operatorname{degree}(φ)\operatorname{deg}(W)=B⁴=2$ by counting a general complete linear section. Nondegeneracy excludes a linear hypersurface, so $\operatorname{deg}(W)=2$ and $\operatorname{deg}(φ)=1$. An integral quadric has rank at least three and is normal: on an affine chart meeting its singular locus its ring has form $R=C[u,v,z]/(uv+q(z))$ with $q\ne 0$. The localizations at u and v are polynomial Laurent rings, hence integrally closed (Gauss's factor argument). The pair u,v is regular, and so are its powers; cancelling successively modulo these powers proves $R_{u}\cap R_{v}=R$ inside Frac(R). Every integral fraction lies in both localizations and hence in R. Smooth charts are already regular. F5 now makes φ an isomorphism. Since M is smooth, W is the smooth quadric Q⁴. [F1, F4, F5, step 1.1, construct, algebra]

3.1 Here is the primitive Picard bridge before invoking Noether–Lefschetz. Put $V=H⁰(Y,L)$, $P=P(V)$ and $U=\{(y,[s]):s(y)=0\}$. Surjective evaluation has vector-bundle kernel M, and $U=P_{Y}(M)$. Its projective-space fibres have dimension at least two: the section morphism of an ample generated line has no positive-dimensional fibre, since any curve in one would have L-degree zero; hence its image has dimension three and $h⁰(L)\ge 4$. Taking fibre degree and then descending a degree-zero line by evaluation proves $Pic(U)=p*Pic(Y)+Zq*O_{P}(1)$. For $K=C(P)$, any line bundle on the regular generic fibre $T_{K}$ extends to U: take the closure of a Cartier divisor representing it, which is Cartier since U is smooth. Its geometric restriction is consequently an integer multiple of $B_{T}$. This conclusion concerns K-rational lines, not arbitrary geometric lines. [F1, F2, F4, step 2.1, construct, algebra]

3.2 Adjoint vanishing on Y and D gives $H¹(Y,nB)=H¹(D,nB_{D})=0$ for $n\ge 0$. The two smooth connected divisor sequences therefore identify their entire section rings, including degree zero, as successive quotients by regular degree-one sections. Lift x,y,z from C and add the two defining degree-one sections. Induction on degree using those quotients proves these five elements generate R(Y,B). Lift the elliptic degree-six relation and subtract the defining sections times lifted degree-five elements to make its image zero. Its quotient has exactly the Hilbert series of R(Y,B), so it is the only relation. Thus $R(Y,B)=C[x0,x1,x2,y,z]/(F6)$, with weights1,1,1,2,3 and nonzero coefficients of z²,y³. Since B is ample, a sufficiently high very ample Veronese identifies Y with Proj of this ring. Complete the square in z and translate y by a quadratic form in the $x_{i}$ to obtain the exact weighted normal form of F3. The weighted ladder and its double-plane NL branch now give generation of |2B| and a very general K3 T with $Pic(T)=ZB_{T}$ and $B_{T}²=2$. This proves the remaining threefold assertion without a del-Pezzo classification input. [F1, F2, F3, F4, step 2.2, construct, algebra]

4.1 We first justify the scalar-field use of F2 on $\Omega=\overline{\mathbb C(P)}$. Its actual Serre-extension proof works over any algebraically closed characteristic-zero field, as follows. For every finite configuration of surface, polarization, bundles, length-two obstruction, maps and trivializations occurring in that proof, choose a model over a field $k\subset\Omega$ finitely generated over $\mathbb Q$. Smooth projectivity, ampleness (choose a very ample power and its finite presentation), and the trivialization of the canonical line descend after enlarging $k$. Choose an embedding $k\hookrightarrow\mathbb C$; this is not required to fix the original constant field $\mathbb C$. Cohomology commutes with these field extensions: a finite affine cover of a separated projective scheme has affine intersections, and tensoring its Cech complex by a field extension is exact, so preserves cohomology and its finite dimensions. The same argument on the finite locally free resolutions computes the Ext groups and duality maps used in the Serre construction. Thus $H^1(O)=0$, the RR and Serre-duality identities, and ample-line vanishing transfer from the complex model. Intersection numbers are unchanged, since they are coefficients of the Euler polynomials of the finitely many line bundles and their tensor powers; hence every finite Hodge-index matrix inequality used in F2 transfers as well. The remaining extension, saturation, regular-local freeness, effectivity and pencil constructions in F2's Proof 1.1--11.1 are algebraic and are carried out over $\Omega$ itself. Eigenvalues exist because $\Omega$ is algebraically closed. This proves both the obstruction criterion and its uniqueness over $\Omega$; it does not attempt to lift an elliptic pencil from a single special complex fibre. Suppose $L_{T}$ is not very ample on the geometric generic K3. Since $d\ge 16$, F2 gives a unique primitive nef elliptic pencil E with $E²=0$ and $1\le L_{T}$ $E\le 2$; its degree-eight exception is absent. Define E over a finite extension K'/K. The finite-flat norm, $\operatorname{det}(f_*E)$ tensor $\operatorname{det}(f_*O)^{-1}$, has geometric class [K':K]E, because every conjugate is the same unique pencil. Step 3.1 makes that class $aB_{T}$ for an integer a. Squaring gives $a²B_{T}²=0$, hence $a=0$; intersecting with $L_{T}$ contradicts $L_{T}$ $E>0$. The projective-bundle extension and norm used here are the explicit constructions in the smooth-ladder supplier, Proof 22.1–29.1, with primitive B retained separately from $L=IB$; the scalar-field argument above supplies the criterion independently of a specialization-only assertion. Failure to separate a length-two scheme is detected by the universal evaluation map on the proper relative Hilbert scheme of length two. Therefore geometric-generic very ampleness yields a nonempty open set of smooth complex T with $L_{T}$ very ample. [F1, F2, F4, step 3.1, construct, algebra]

5.1 Choose such a T and a smooth curve $D\\in  |L_{T}|$. Its canonical line is $L_{T}|D$, and its complete canonical morphism is a closed immersion. F2's K3 ring lift gives normal generation of $L_{T}$. Adjoint vanishing gives $H¹(Y,O_{Y})=0$, so its ambient lift gives normal generation and very ampleness of L on Y. Now F3 applies to |L| with primitive ambient generator B and $H^{2,0}(Y)=0$. Thus very general T has $Pic(T)=ZB_{T}$, and $B_{T}²=I$ w by intersection. The exceptional sets are countably many proper closed loci; a nonempty transversality open can be imposed simultaneously by the Baire conclusion already included in F3. [F1, F2, F3, F4, step 4.1, construct, algebra]

6.1 Choose Y∈|2B| generally. It is the smooth complete intersection of two quadrics in P⁵, with $-K_{Y}=2B_{Y}$ and $B_{Y}³=4$. The relative-handle supplier along P⁵⊃Q⁴⊃Y gives $H²(Y;Z)=Zc1(B_{Y})$, since P⁵ has its usual one-cell-in-each-even-dimension filtration; it also gives $H₁(Y;Z)=0$. Adjoint vanishing makes $H¹(Y,O_{Y})=H²(Y,O_{Y})=0$. Threefold GAGA and the explicit Dolbeault/acyclic-resolution interfaces in F4 inject algebraic Pic(Y) into topological Pic(Y): for a topologically trivial line choose a smooth nonzero frame s, form its global closed (0,1)-form $α=s⁻¹$ dbar s, solve $α=dbar$ f by $H¹(O_{Y})=0$, and use $\operatorname{exp}(-f)s$ as a holomorphic frame; full faithfulness algebraizes it and its inverse. Topological line classification identifies the target with H²(Y;Z). Since $B_{Y}$ already maps to its generator, $Pic(Y)=ZB_{Y}$. Apply steps 2.1–5.1 to this index-two degree-four threefold. Its very general anticanonical K3 T has $Pic(T)=ZB_{T}$ and $B_{T}²=8$. All choices can meet the prescribed nonempty transversality open. This proves the fourfold bridge. [F1, F2, F3, F4, step 5.1, step 2.3, construct, algebra] ∎

---
id: thm-benard-florens-rodau-logarithmic-gauss-formula
kind: theorem
title: Bénard–Florens–Rodau logarithmic Gauss formula and ideal-point slope
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 13
deps:
  - thm-adjoint-logarithmic-gauss-slope-and-ideal-point
  - lem-adjoint-twisted-slope-is-rational-on-a-character-component
  - def-character-variety-logarithmic-slope-invariant
  - def-knot-a-polynomial
  - def-boundary-slope-of-an-incompressible-surface
  - lem-generic-adjoint-peripheral-kernel-is-the-logarithmic-conormal-line
  - lem-sl2-representation-variety-is-affine
  - lem-classical-affine-algebraic-set-finite-irreducible-components
  - thm-affine-domain-dimension-transcendence-degree
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Léo Bénard, Vincent Florens, and Adrien Rodau, A slope invariant and the
        A-polynomial of knots, Theorems 1.3, 1.5, 4.1 and 5.2
      url: https://arxiv.org/pdf/2103.14151
    - title: Allen Hatcher, Boundary slopes of incompressible surfaces
      url: https://www.math.unl.edu/~mbrittenham2/classwk/990s08/public/hatcher.bdyslopes.pdf
---

## Statement

Assume full AC. Let $K\subset S^3$ be a smooth oriented knot, and let $X$ be a one-dimensional irreducible component of its $SL_2(\mathbb C)$ character variety whose peripheral image is a curve in $(\mathbb C^*)^2$. With Bénard–Florens–Rodau's variable order $A_K(L,M)$ and their slope convention, on the admissible smooth locus where the displayed derivatives are nonzero,
$$s_K(\rho)=-\frac{M}{L}\frac{\partial_M A_K}{\partial_L A_K}.$$
At an ideal point of the curve, if the associated Culler-Shalen surface has boundary slope $r$ measured by $a[\lambda]+b[\mu]$ with $r=b/a$, the limiting Bénard–Florens–Rodau slope is $-r$.

## Statement references

[Bénard, Florens, and Rodau, Theorems 1.3, 1.5, 4.1 and 5.2](https://arxiv.org/pdf/2103.14151)

[Hatcher, *Boundary Slopes of Incompressible Surfaces*](https://www.math.unl.edu/~mbrittenham2/classwk/990s08/public/hatcher.bdyslopes.pdf)

## Facts & Assumptions

**Given:** Full AC and the ENTIRE original locus in the Statement. The rational extension and the actual specialized homology slope are distinguished; no smaller locus is silently substituted into that Statement.

[F1] The accepted local theorem proves the rational projective logarithmic Gauss identity, its finite affine values, and the conditional peripheral ideal-point limit for the actual stipulated Culler–Shalen construction. Its proof explicitly does not identify every exceptional specialized homology kernel with the rational extension. [[thm-adjoint-logarithmic-gauss-slope-and-ideal-point]]

[F2] The ordered boundary basis is $(v_\rho\otimes\lambda,v_\rho\otimes\mu)$, and a kernel generator $(a,b)$ has slope $-b/a$. Admissibility means the given basis exists and the inclusion kernel is a line; it does not impose dimension one on the exterior cohomology or reducedness of a relator scheme. The rational extension is projective-valued and is not defined to replace every actual admissible homology value. [[def-character-variety-logarithmic-slope-invariant]]

[F3] The actual generic adjoint calculation supplies a generic matrix representation, the rank-one boundary inclusion, all word-cocycle evaluations and common-eigenbasis correction, and specialization compatibility on a nonempty dense rank-chart open. Its field-linear rank and derivation operations are reproduced over the needed finitely generated field in step1.1 rather than assuming a tangent-space identification. [[lem-generic-adjoint-peripheral-kernel-is-the-logarithmic-conormal-line]]

[F4] Actual representation and common-eigenline incidence varieties are finite type and have finitely many components; affine-domain dimension is function-field transcendence degree. [[lem-sl2-representation-variety-is-affine]] [[lem-classical-affine-algebraic-set-finite-irreducible-components]] [[thm-affine-domain-dimension-transcendence-degree]]

[F5] The ordinary A-polynomial is the square-free Laurent equation for the union of one-dimensional eigenvalue-image components, and is defined up to a Laurent unit. Boundary class $a[\lambda]+b[\mu]$ has unoriented slope $b/a$, with $a=0$ interpreted projectively. [[def-knot-a-polynomial]] [[def-boundary-slope-of-an-incompressible-surface]]

[L1] **External input for the exceptional actual-point clause:** Bénard–Florens–Rodau, *A slope invariant and the A-polynomial of knots*, arXiv:2103.14151, Theorem 4.1 (p.15), states the displayed identity for ALL characters on an irreducible component with one-dimensional peripheral image; Remark 4.2 explicitly includes characters not scheme-reduced. Definitions 3.1–3.2 use exactly the actual homology inclusion kernel and slope $-b/a$. This theorem is imported at the admissible locus of the Statement, rather than inferred from generic rational equality. Theorem 5.2 (pp.16–17; introduction Theorem 1.5) supplies the ideal-point interpretation. These statements, definitions, Remark 3.7, Proposition 3.8 and the complete displayed §4–§5 arguments were consulted; their exceptional specialization assertion is used externally and is not represented as a new local proof.

## Proof

1.1 **The image curve is an actual A-component.** This instantiation requires excluding a larger peripheral image component. Take the actual generic matrices on an irreducible common-eigenline incidence chart of [F4], over its finitely generated function field $F$. A two-dimensional image would make $M,L$ algebraically independent and the meridian matrix nonparabolic. Over this field the trace form, cap boundary identity and pair exact sequence in [F3] give boundary dimension two and $2=\dim\ker i_*+\operatorname{rank}i_*=2\operatorname{rank}i_*$; hence its kernel is a line. Every $\mathbb C$-derivation $D$ of $F$ differentiates the actual relators to a cocycle. The explicit word/eigenbasis calculation in [F3] makes $(DL/L,DM/M)$ annihilate that SAME line. Extend $M,L$ to a finite transcendence basis and take its two coordinate derivations. Each extends through the finite algebraic extension to $F$ by $D\alpha=-(Dp)(\alpha)/p'(\alpha)$ at a minimal polynomial $p$; characteristic zero makes the denominator nonzero. Their two logarithmic pairs are independent, a contradiction. Generically reducible representations instead have $L=1$ by knot abelianization and cannot supply a two-dimensional image. Thus every peripheral-image component has dimension at most one. The closed irreducible nonconstant image curve $Y$ in the Statement is contained in their finite union, so it equals one of the one-dimensional components: a proper closed subset of an irreducible affine curve has dimension zero. Consequently [F5] supplies its defining Laurent factor $P$ in the full ordinary polynomial. No omitted two-dimensional component is presumed absent merely from the A-polynomial Definition. [F3, F4, F5, given, construct, algebra]

1.2 **Variable order and sign.** Keep $M$ the meridian eigenvalue and $L$ the longitude eigenvalue. Writing $A_{\mathrm{BFR}}(L,M)=A_{\mathrm{library}}(M,L)$ only changes the order in which the arguments are displayed. Differentiation with respect to the NAMED variables therefore gives the same meridian derivative and the same longitude derivative, not their reciprocal. In the basis [F2], the generic kernel of $(a,b)\mapsto a\,dL/L+b\,dM/M$ has generator $(-dM/M,dL/L)$, so its slope is $(dL/L)/(dM/M)$. This fixes both the sign and the order of the quotient. A common invariant-vector rescaling changes neither coordinate ratio. Swapping the common eigenline inverts $M,L$ and changes both logarithmic differentials by minus one, preserving the projective ratio; [F3] already proves model/conjugation independence. [F1, F2, F3, given, algebra]

2.1 **Full-polynomial versus component derivatives.** Write $A=uPB$, where $u$ is a Laurent unit and $B$ is the product of the other distinct factors. At a point of $Y$ with both full derivatives nonzero, $B$ cannot vanish: if another factor vanished, every term of either product derivative would contain a vanishing factor, giving zero. On $P=0$ one has $A_M=uB P_M$ and $A_L=uB P_L$. Thus the two component derivatives are nonzero there and the common nonzero factor $uB$ cancels from their quotient. Multiplication of the whole representative by any further Laurent unit has the same effect, since its differentiated unit term is multiplied by $A=0$. This also proves that the stated derivative locus is intrinsic and avoids intersections of distinct peripheral factors. It does not exclude an extra character component with CONSTANT peripheral image at the same point. [F5, step 1.1, algebra]

3.1 **The complete rational instantiation.** The component formula in [F1] is $s^{\mathrm{rat}}=[-MP_M:LP_L]$. Combining steps1.2 and2.1 gives exactly $s^{\mathrm{rat}}=-M A_M/(L A_L)$ in the native BFR variable order wherever the displayed derivatives are nonzero. In particular it is finite there, and the projective extension still retains zero/infinity away from that affine locus. This instantiates the proved component theorem with the FULL square-free ordinary polynomial without changing either convention. It is so far an identity of the rational extension, not a proof about all exceptional actual kernels. [F1, F2, step 1.2, step 2.1, algebra]

3.2 **The actual exceptional-point clause uses the external theorem.** A reducible representation has longitude eigenvalue $L=1$ because its diagonal characters factor through the knot abelianization. Since $A=(L-1)Q$, its meridian derivative is $A_M=(L-1)Q_M$ and vanishes at every such peripheral point. The stipulated nonzero-derivative locus therefore contains only irreducible characters. At every actual admissible smooth point of that locus, including points outside the local rank chart, apply the ALL-character formula of the external Theorem 4.1 in [L1], in the actual homology convention of its Definitions 3.1–3.2. Steps1.2 and2.1 identify the named variables, signs and full square-free representative. This proves the first clause at its entire original locus; the exceptional specialization is supplied externally, not by a density argument. [F2, F5, L1, step 1.2, step 2.1, algebra]

4.1 **Actual homology on the proved dense open.** Intersect the nonempty rank-chart open supplied by [F3] with the original smooth/derivative locus, whenever that latter locus is nonempty. The component is irreducible, so this intersection is dense and nonempty. At every point there, the finite homology specialization in [F3] identifies the rational line with the actual ordered peripheral inclusion kernel. Thus step3.1 proves the ACTUAL displayed formula on this open. This uses the direct generic/rank-chart construction, not an unverified extension of the separate rationality lemma beyond its stated dense scheme-smooth hypothesis. It does not assert that every smooth admissible point belongs to the chosen rank chart. [F2, F3, step 3.1, construct, algebra]

4.2 **The full stipulated ideal-point clause.** The curve in the preceding clause is the peripheral eigenvalue curve $Y$. Use its normalized smooth completion, exactly as in [F1], rather than replacing it by an arbitrary character ideal point with affine peripheral image. At its stipulated ideal point the actual local DVR has nonzero valuation pair $(v(L),v(M))$, and the finite representation-field valuation extends with one positive ramification factor. For a boundary circle $a[\lambda]+b[\mu]$ of the actual associated Culler–Shalen construction, [F1]'s inverse-image midpoint and boundary-preserving compression argument gives $a v(L)+b v(M)=0$. The logarithmic projective limit in [F1] is $[v(L):v(M)]=[-b:a]$. By [F2] this is $-b/a=-r$, including zero and infinity in the projective convention. This proves the ENTIRE conditional ideal-point clause: the construction/surface is stipulated by the original conditional, and no existence theorem for an arbitrary unrelated surface is imported or required. [F1, F2, F5, step 3.1, construct, algebra]

5.1 Steps 3.2 and 4.2 prove the two clauses on their full stated loci, using the all-character theorem in [L1] for exceptional admissible points and the stipulated surface construction for the ideal-point limit. This establishes the Statement without narrowing the admissible smooth locus or adding scheme-smoothness. [L1, step 4.2, step 3.2] ∎


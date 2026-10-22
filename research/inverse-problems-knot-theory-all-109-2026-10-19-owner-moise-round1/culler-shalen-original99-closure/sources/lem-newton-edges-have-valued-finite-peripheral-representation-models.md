---
id: lem-newton-edges-have-valued-finite-peripheral-representation-models
kind: lemma
title: "Newton edges have valued finite peripheral representation models"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-knot-a-polynomial
  - def-enhanced-a-polynomial
  - lem-knot-a-polynomial-boundary-elimination
  - lem-finite-affine-incidence-projection-and-curve-component-selection
  - lem-classical-affine-algebraic-set-finite-irreducible-components
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - thm-normalization-reduced-curve-exists-finite
  - thm-regular-equals-smooth-over-perfect-field
  - thm-lying-over
  - thm-proper-ideal-contained-in-maximal-ideal
  - cor-field-finite-type-over-a-field-is-a-finite-extension
  - lem-logarithmic-ideal-point-limits-and-lattice-fixed-peripheral-slopes
  - lem-irreducible-sl2-character-components-have-specializing-quadratic-models
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is used by finite normalization, lying over, closed points of a nonzero generic-fiber algebra, and the actual finite representation/character incidence suppliers. No Puiseux-series theorem or ideal-point essential-surface theorem is assumed."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Cooper, Culler, Gillet, Long and Shalen, Plane curves associated to character varieties of 3-manifolds"
      url: "https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf"
      locator: "Sections2.2 and3.1–3.3; actual finite representation field and Newton-face valuation are constructed below by a toric coordinate chart and normalization."
---

## Statement

Assume full AC. Let $K$ be a smooth knot and let $A(M,L)$ be either its ordinary or its enhanced A-polynomial. The exponent point $(a,b)$ denotes $L^aM^b$. For every one-dimensional edge of its Newton polygon there are an irreducible factor $P$ of $A$, its peripheral curve $Y\subset(\mathbb C^*)^2$, a local DVR $R$ of a normalized complex curve with fraction field $\mathbb C(Y)$, and a finite extension $E/\mathbb C(Y)$ with an extending normalized discrete valuation $w$, with the following properties.

There is an actual representation $\rho:\pi_1(E_K)\to SL_2(E)$ and a common peripheral eigenline whose eigenvalues are the coordinate functions $M,L$ of $Y$. If $(u,v)$ is a primitive integral normal to the specified edge, oriented so that this edge minimizes its scalar product with the exponent polygon, then
$$\bigl(w(L),w(M)\bigr)=d(u,v)\qquad(d\in\mathbb Z_{>0}).$$
The valuation is at a boundary branch of $Y$, since at least one coordinate has nonzero valuation; it is not an affine branch of $Y$. For the enhanced polynomial, the representation may be chosen absolutely irreducible. This additional clause uses the actual irreducible-character origin of its factors, and is not asserted for the ordinary abelian factor. No tree or essential surface is supplied by this lemma.

## Facts & Assumptions

**Given:** Full AC, the marked knot group, the selected polynomial, and one of its Newton edges with primitive minimum normal $(u,v)$.

[A1] Full AC. [[def-axiom-of-choice]]

[F1] The ordinary polynomial is the reduced equation of the selected one-dimensional peripheral eigenvalue-image components. Finite matrix determinant/relator equations and two eigenline charts give the exact incidence model. The enhanced polynomial uses peripheral images arising from irreducible characters; the ordinary polynomial also includes $L-1$. [[def-knot-a-polynomial]] [[def-enhanced-a-polynomial]] [[lem-knot-a-polynomial-boundary-elimination]]

[F2] Radical contraction gives the closure of a finite incidence projection; affine algebraic sets have finitely many irreducible components. [[lem-finite-affine-incidence-projection-and-curve-component-selection]] [[lem-classical-affine-algebraic-set-finite-irreducible-components]]

[F3] Finite-variable polynomial rings over fields are UFDs; irreducibles are prime. Localization keeps these assertions for Laurent polynomial rings. [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]

[F4] Normalization of a reduced finite-type complex curve is finite and its closed-point local rings are DVRs. The normalized curve is smooth because it is regular over the perfect field $\mathbb C$. Lying over gives a point above every given point in the original curve. [[thm-normalization-reduced-curve-exists-finite]] [[thm-regular-equals-smooth-over-perfect-field]] [[thm-lying-over]]

[F5] A nonzero commutative algebra has a maximal ideal under AC; a field of finite type over a field is a finite field extension. [[thm-proper-ideal-contained-in-maximal-ideal]] [[cor-field-finite-type-over-a-field-is-a-finite-extension]]

[F6] The local curve valuation extends to every finite field extension, with restriction multiplied by a positive integer and complex residue field. The proof constructs the extending DVR by finite integral closure and localization. [[lem-logarithmic-ideal-point-limits-and-lattice-fixed-peripheral-slopes]]

[F7] An irreducible character locus has an actual absolutely irreducible generic matrix model and a finite nonvanishing trace certificate; its construction works for arbitrary irreducible closed character subsets, not only curves. We use only this certificate/dominant-source construction when the character component has larger dimension; its function field is not silently assumed finite over the peripheral curve field. [[lem-irreducible-sl2-character-components-have-specializing-quadratic-models]], Proof1.1–1.2.

## Proof

1.1 Factor $A$ in the Laurent UFD [F3]. For a nonzero Laurent polynomial, its initial form for weight $(u,v)$ is the sum of terms of minimum weight $au+bv$. The initial form of a product is the product of the initial forms: the least weight is the sum of the least weights, and their product cannot vanish in a domain. Since the selected face is an edge, its initial form has at least two monomials. Some irreducible factor $P$ must therefore have an initial form with at least two monomials; otherwise their product would be a monomial. Choose such a factor. Its minimum face has the same supporting normal, hence is a segment parallel to the selected edge. In the enhanced case its curve arises from irreducible characters by [F1]; no inference is made merely by removing $L-1$ from a factorization. [F1, F3, given, construct, algebra]

1.2 We construct a finite representation field over $k=\mathbb C(Y)$, without assuming that a possibly higher-dimensional character component has a one-dimensional function field. Use the two finite incidence charts of [F1]: generator matrices satisfy determinant and relator equations, and the common eigenvector is either $(1,z)$ or $(z,1)$ with eigenvalues $M,L$. For an enhanced component retain only irreducible representations. This is still a finite affine-chart condition, as follows. For $q$ generator matrices, let $V_j$ span the identity and all positive words of length at most $j$. Then $V_{j+1}=V_j+\sum_iV_jA_i$; equality at one stage makes it the full generated matrix algebra. Its dimension is at most four, so the words of length at most three span that algebra. A representation over an algebraically closed field is irreducible exactly when this algebra is $M_2$. For the nontrivial direction, a nonscalar semisimple element gives its two diagonal projections; irreducibility supplies matrices with nonzero entries in both off-diagonal positions, and multiplication by the projections gives all four matrix units. If the chosen nonscalar element has only one eigenvalue, subtract it to get a nonzero square-zero matrix. Multiplying by a matrix not preserving its kernel gives a rank-one element with nonzero trace, hence distinct eigenvalues, reducing to the first case. Therefore irreducibility is certified by a nonzero determinant of four vectorized words of length at most three. There are finitely many such determinants $D$. Append the equation $tD=1$ to each appropriate eigenline chart. A nonzero certificate remains nonzero over every field extension, so the resulting generic representation will be absolutely irreducible. These finite charts describe precisely the irreducible representation incidence. Alternatively [F7]'s trace certificate supplies the same required nonempty open condition. [F1, F2, F7, construct, algebra]

2.1 Choose integers $r,s$ with $ru+sv=1$ and set $x=L^rM^s$, $y=L^{-v}M^u$. This is a unimodular Laurent change of coordinates, with inverse $L=x^u y^{-s}$, $M=x^v y^r$. Multiply the transformed $P$ by a power of $x$ and a Laurent unit in $y$ so that its lowest $x$ power is zero. It becomes an irreducible $Q\in\mathbb C[x,y^{\pm1}]$ not divisible by $x$, with $Q(0,y)$ having at least two terms. After removing its monomial factor in $y$, that face polynomial has positive degree and a nonzero constant term; it therefore has a root $c\in\mathbb C^*$. The ring $B=\mathbb C[x,y^{\pm1}]/(Q)$ is a domain by [F3]. Its fraction field is $\mathbb C(Y)$: inverting $x$ recovers exactly the Laurent coordinate ring of $Y$. It is a curve, since its one polynomial relation makes one of the two coordinates algebraic over the other, while it is not a point; equivalently its nonzero prime equation has height one in this two-dimensional Laurent chart. The point $(0,c)$ is a closed point of this curve. [F3, step 1.1, construct, algebra]

2.2 There is an irreducible incidence component $Z$ whose peripheral projection is dense in $Y$. For ordinary selected image components this follows from [F2]: the closures of the finitely many incidence components' images cover the image closure, and a maximal irreducible curve component must be one of them. For an enhanced component, restrict the incidence first to its defining character component. The dominant source in [F7] has irreducible generic character, so the certificate opens of step 1.2 are dense there; the closure of their peripheral image is the same $Y$. Choose a dominant irreducible component in their finite chart union by the same finite irreducibility argument. This construction also handles an enhanced factor $L-1$ that is contributed by irreducible characters. Let $C=\mathbb C[Z]$. Dominance embeds $\mathbb C[Y]$ into this finite-type domain. Localize at its nonzero elements to get the NONZERO finite-type $k$-algebra $C_k$. Choose a maximal ideal and let $E$ be its residue field. By [F5], $E/k$ is finite. The generator matrix and eigenvector coordinates descend to $E$ and satisfy all the actual equations, giving a representation and common eigenline with exactly the generic $M,L\in k^*$. In the enhanced charts $tD=1$ survives, proving absolute irreducibility. No formal generic character or unproved rational section has replaced these actual matrices. [A1, F1, F2, F5, F7, step 1.2, construct, algebra]

3.1 Normalize this curve by [F4] and choose a point above $(0,c)$ by lying over. Its local ring $R$ is a DVR with residue $\mathbb C$. The nonzero function $x$ is in its maximal ideal, so $v_R(x)=d_0>0$, while $y$ is a unit. The displayed inverse monomials give $(v_R(L),v_R(M))=d_0(u,v)$. The functions $L,M$ are units on the original affine torus curve, and at least one has nonzero valuation here. Thus this point is a boundary branch, not a point of the affine normalization of $Y$. If one uses a global completion, take the normalization of the projective closure and the same branch; nothing in the following construction requires a Puiseux expansion or a chosen analytic parameterization. [F4, step 2.1, construct, algebra]

4.1 Extend $v_R$ to $E$ by [F6], with $w|_k=e v_R$ and $e>0$. Then $(w(L),w(M))=e d_0(u,v)$ as asserted. The extended DVR is the local ring of a normalized complex curve in this finite function-field extension: normalize an affine chart of the curve in $E$ by finite integral closure and localize at the chosen prime, exactly as in [F6]'s extending-valuation construction. Thus it has the actual local model required for a further finite valuation extension or a lattice-tree construction. The selected edge direction $(\Delta a,\Delta b)$ satisfies $u\Delta a+v\Delta b=0$, so its slope $\Delta b/\Delta a$ is precisely the slope of the primitive class annihilated by $(w(L),w(M))$, including a vertical edge when $\Delta a=0$. Laurent units only translate the exponent polygon and do not change this calculation. All data claimed in the Statement have now been constructed; no essential surface has yet been inferred. [F6, step 1.1, step 3.1, step 2.2, construct, algebra] ∎

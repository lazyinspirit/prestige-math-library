---
id: cor-nontrivial-degree-zero-line-bundle-no-sections
kind: corollary
title: "Nontrivial degree-zero line bundles have no sections"
status: draft
origin: pipeline
deps:
  - cor-birational-smooth-proper-curves-isomorphic
  - cor-degree-zero-line-bundle-section-trivial
  - cor-degree-descends-picard-curve
  - cor-projective-plane-bezout-length-form
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-cartier-divisor
  - def-dependent-choice
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-residue-field-scheme-point
  - def-invertible-sheaf-of-cartier-divisor
  - def-genus-euler-characteristic-curve
  - def-invertible-sheaf
  - def-principal-weil-divisor-and-class-group
  - def-sheaf-cohomology-derived-global-sections
  - def-smooth-morphism-schemes
  - def-base-change-morphism-schemes
  - def-algebraically-closed-field
  - lem-closed-immersion-proper
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - lem-function-with-poles-defines-map-p1
  - lem-projective-hypersurface-affine-pieces
  - lem-proper-stable-composition
  - lem-cohomology-functoriality-sheaf-and-space
  - prop-functors-preserve-isomorphisms
  - lem-projective-line-divisors-classified-by-degree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-cartier-divisors-mod-principal-to-picard
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-projective-space-proper-over-base
  - thm-smooth-morphisms-stable-base-change-composition
  - thm-jacobian-criterion-smooth-morphism
  - thm-local-ring-smooth-curve-dvr
  - thm-regular-local-rings-are-normal
  - thm-cartier-weil-divisors-curves-agree
  - thm-plane-curve-arithmetic-genus
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 18.5 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the degree, Cartier-to-Weil,
smooth-base-change, weighted-Bezout and structure-sheaf cohomology suppliers.
It supplies the Dependent Choice premise of the Cartier-to-Weil route through
[[thm-choice-implies-dependent-implies-countable-choice]]. Let $k$ be a field,
let $C$ be a smooth proper geometrically integral curve over $k$
([[def-algebraic-curve-over-field]]) and let $\mathcal L$ be an invertible
sheaf on $C$ ([[def-invertible-sheaf]]) with $\deg_k\mathcal L=0$ which is not
isomorphic to $\mathcal O_C$. Then
$$H^0(C,\mathcal L)=0.$$

*The plane-cubic instance.* Moreover, let
$E=V_+(F)\subseteq\mathbb P^2_k$ be a plane cubic smooth over $k$ and of pure dimension one,
where $F$ is a nonzero homogeneous form of degree three, and let $P\ne Q$ be
$k$-rational points of $E$. The proof shows that this smooth plane cubic is
geometrically integral, so the arithmetic-genus computation of
[[thm-plane-curve-arithmetic-genus]] applies. Then the invertible sheaf
$\mathcal O_E(P-Q)$ has degree zero, is not trivial, and
$$H^0\bigl(E,\mathcal O_E(P-Q)\bigr)=0.$$
The triviality obstruction is the classical one: a trivialization would exhibit
a rational function with divisor $P-Q$, hence a degree-one morphism
$E\to\mathbb P^1_k$ and an isomorphism $E\cong\mathbb P^1_k$, contradicting
$g(E)=1$ and $g(\mathbb P^1_k)=0$. This discharges, without Serre duality, the
promise recorded by the preceding-pair counterexample item
cex-degree-zero-line-bundle-no-section (batch 6 of this run).

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the degree, Cartier-to-Weil, smooth-base-change, weighted-Bezout and structure-sheaf cohomology suppliers; a field $k$; a smooth proper geometrically integral curve $C$ over $k$; an invertible sheaf $\mathcal L$ on $C$ with $\deg_k\mathcal L=0$; and, for the instance, a plane cubic $E=V_+(F)\subseteq\mathbb P^2_k$ smooth over $k$ and of pure dimension one with $P\ne Q$ rational over $k$.

[F1] Contrapositive of the section-triviality corollary: if $\mathcal L$ is an invertible sheaf of degree zero on $C$ with $H^0(C,\mathcal L)\ne0$, then $\mathcal L\cong\mathcal O_C$; equivalently, an invertible sheaf of degree zero that is not trivial has no nonzero global section ([[cor-degree-zero-line-bundle-section-trivial]], [[def-sheaf-cohomology-derived-global-sections]]).

[F2] On a normal proper curve, the degree of the attached invertible sheaf satisfies $\deg_k\mathcal O_C(D)=\deg_kD$ for every divisor $D$ ([[cor-degree-descends-picard-curve]], [[def-invertible-sheaf-of-cartier-divisor]]). A divisor $D=\sum_xn_x[x]$ has degree $\deg_kD=\sum_xn_x[\kappa(x):k]$; in particular each $k$-rational point has residue degree one ([[def-degree-divisor-proper-curve]], [[def-divisor-smooth-proper-curve]], [[def-residue-field-scheme-point]]).

[F3] The Cartier-to-Weil/Picard dictionary on a smooth proper geometrically integral curve identifies the attached sheaf classes with divisor classes and preserves principal divisors ([[thm-cartier-weil-divisors-curves-agree]], [[thm-cartier-divisors-mod-principal-to-picard]], [[def-cartier-divisor]], [[def-principal-weil-divisor-and-class-group]]). The rational-section interface identifies the divisor of a nonzero rational section with its line bundle ([[thm-line-bundle-rational-section-cartier-divisor]]). Thus if $\mathcal O_E(P-Q)\cong\mathcal O_E$, then $P-Q$ is a principal divisor on $E$.

[F4] Every nonconstant rational function $f\in k(E)^\times$ on a smooth proper geometrically integral curve defines a finite locally free morphism $\varphi_f:E\to\mathbb P^1_k$ of degree $[k(E):k(f)]$, and its fiber over infinity is the pole divisor $(f)_\infty$ with that same degree ([[lem-function-with-poles-defines-map-p1]]). A birational morphism between smooth proper geometrically integral curves is an isomorphism ([[cor-birational-smooth-proper-curves-isomorphic]]).

[F5] If $X=V_+(F)\subseteq\mathbb P^2_k$ is an integral plane curve cut out by a homogeneous form of degree $d\ge1$, then $H^0(X,\mathcal O_X)=k$ and $p_a(X)=1-\chi(\mathcal O_X)=(d-1)(d-2)/2$ ([[thm-plane-curve-arithmetic-genus]]). For a smooth proper geometrically integral curve the arithmetic genus is its genus ([[def-genus-euler-characteristic-curve]]). Once [F7] and [F8] establish that $E$ is such a curve, this gives $g(E)=1$.

[F6] The projective line has genus zero by [[lem-projective-line-divisors-classified-by-degree]] and [[def-genus-euler-characteristic-curve]]. Genus is invariant under isomorphism because scheme isomorphisms induce isomorphisms on cohomology ([[lem-cohomology-functoriality-sheaf-and-space]], [[prop-functors-preserve-isomorphisms]]).

[F7] Smoothness is preserved under arbitrary base change ([[thm-smooth-morphisms-stable-base-change-composition]]). Over the algebraic closure $\bar k$, coprime positive-degree plane forms have a nonempty projective intersection by [[cor-projective-plane-bezout-length-form]]. On a standard affine chart the hypersurface is given by the dehomogenized equation ([[lem-projective-hypersurface-affine-pieces]]); if that equation lies in the square of a closed point's maximal ideal, all its partial derivatives vanish there, contradicting the smoothness criterion for a one-equation presentation ([[thm-jacobian-criterion-smooth-morphism]]). The polynomial ring over $\bar k$ is a UFD, so an irreducible equation generates a prime ideal ([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]).

[F8] Projective space over $k$ is proper, closed immersions are proper, and proper morphisms compose ([[thm-projective-space-proper-over-base]], [[lem-closed-immersion-proper]], [[lem-proper-stable-composition]]). Hence the closed plane subscheme $E$ is proper over $k$.

[F9] Every smooth proper geometrically integral curve considered here is normal: its local ring at a closed point is a DVR by [[thm-local-ring-smooth-curve-dvr]], and the generic local ring is a field; these are regular local domains and hence integrally closed by [[thm-regular-local-rings-are-normal]]. This supplies the normality hypothesis of the degree homomorphism in [F2].

[F10] The Axiom of Choice supplies the Dependent Choice premise of the Cartier-to-Weil route through [[thm-choice-implies-dependent-implies-countable-choice]]. The stated Choice assumption also covers the degree, smooth-base-change, weighted-Bezout, Jacobian, finite-morphism and cohomology suppliers used here ([[def-axiom-of-choice]], [[def-dependent-choice]]).

## Proof

**Proof technique:** prove the general statement as the contrapositive of the section-triviality corollary, show that a smooth pure-dimension-one plane cubic is geometrically integral, and then use the degree-one-map obstruction for the cubic instance.

1.1 The general statement. Let $\mathcal L$ be an invertible sheaf on $C$ with $\deg_k\mathcal L=0$ and $\mathcal L\not\cong\mathcal O_C$. If $H^0(C,\mathcal L)\ne0$, then [F1] gives $\mathcal L\cong\mathcal O_C$, contrary to the hypothesis. Hence $H^0(C,\mathcal L)=0$. [F1]

1.2 Base change and factorization. Write $F$ as a homogeneous cubic and pass to $\bar k$. By [F7], $E_{\bar k}=V_+(F)\subseteq\mathbb P^2_{\bar k}$ is smooth. We show that $F$ is irreducible and squarefree over $\bar k$. If an irreducible factor $G$ occurs with multiplicity at least two, then $2\deg G\le3$, so $G$ is linear. At least one coordinate linear form $L$ is not proportional to $G$; thus $G$ and $L$ are coprime. By weighted Bezout [F7], they meet at a closed point $z\in V_+(G,L)$. Choose a standard affine chart containing $z$. The dehomogenized equation $f$ of $E_{\bar k}$ is divisible by the square of the dehomogenized $G$, so $f\in\mathfrak m_z^2$ and every first partial derivative of $f$ vanishes at $z$. By [F7] the one-equation chart is not smooth at $z$, contradicting the smoothness of $E_{\bar k}$. If $F$ is squarefree but reducible, factor it as $F=GH$ with $G,H$ coprime homogeneous forms of positive degree. Weighted Bezout [F7] gives a closed point $z\in V_+(G,H)$. In a standard affine chart containing $z$, the dehomogenized equation is $f=gh\in\mathfrak m_z^2$, so all its first partial derivatives vanish at $z$. The same Jacobian criterion contradicts smoothness. Thus $F$ is irreducible and squarefree over $\bar k$. Since the polynomial ring is a UFD, $(F)$ is prime; consequently $E_{\bar k}$ is integral and $E$ is geometrically integral. The given pure dimension one then makes $E$ an integral plane curve. [F7]

2.1 The degree of $\mathcal O_E(P-Q)$. Since $P$ and $Q$ are $k$-rational, $[\kappa(P):k]=[\kappa(Q):k]=1$ by [F2]. Therefore $\deg_k(P-Q)=1-1=0$. The closed plane subscheme $E$ is proper by [F8], and its smoothness and geometric integrality from step 1.2 make it normal by [F9]. Hence [F2] applies and gives $\deg_k\mathcal O_E(P-Q)=0$. [F2, F8, F9, step 1.2]

2.2 Properness and genus. By [F8], $E$ is proper as a closed subscheme of projective space. It is smooth by hypothesis and geometrically integral by step 1.2, hence a smooth proper geometrically integral curve. Apply [F5] to the integral plane cubic $E$ to get arithmetic genus one; smoothness and properness identify this with its genus, so $g(E)=1$. [F5, F8, step 1.2]

3.1 Nontriviality of $\mathcal O_E(P-Q)$. Suppose $\mathcal O_E(P-Q)\cong\mathcal O_E$. By [F3], $P-Q$ is principal, so some $f\in k(E)^\times$ satisfies $\operatorname{div}(f)=P-Q$. Since $P\ne Q$, $f$ is nonconstant, and its pole divisor is $(f)_\infty=[Q]$, of degree one. By [F4], $f$ defines a finite morphism $\varphi_f:E\to\mathbb P^1_k$ whose degree is $[k(E):k(f)]=\deg_k(f)_\infty=1$. Thus the morphism is birational, and [F4] makes it an isomorphism. This contradicts $g(E)=1$ from step 2.2 and $g(\mathbb P^1_k)=0$ from [F6]. Hence $\mathcal O_E(P-Q)\not\cong\mathcal O_E$. [F3, F4, F6, step 2.2]

4.1 The vanishing for the cubic. By step 2.1 the invertible sheaf $\mathcal O_E(P-Q)$ has degree zero, and by step 3.1 it is not trivial. Step 1.1 applied to $C=E$ and $\mathcal L=\mathcal O_E(P-Q)$ gives $H^0(E,\mathcal O_E(P-Q))=0$. [F1, step 1.1, step 2.1, step 3.1]

5.1 Conclusion and Choice accounting. Step 1.1 proves the general statement: a nontrivial degree-zero invertible sheaf on a smooth proper geometrically integral curve has no nonzero global section, by the contrapositive of the section-triviality corollary and without Serre duality. Steps 1.2, 2.1, 2.2, and 3.1 show that every smooth pure-dimension-one plane cubic in the stated scope is a smooth proper geometrically integral genus-one curve and that $\mathcal O_E(P-Q)$ is degree zero and nontrivial; step 4.1 gives the promised vanishing. AC supplies DC through [F10], and the other inherited Choice uses are exactly those named there. No additional selection is made beyond the given data and the finite nonempty intersections in the Bezout argument. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1] ∎

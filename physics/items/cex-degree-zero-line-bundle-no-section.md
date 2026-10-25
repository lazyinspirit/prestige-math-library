---
id: cex-degree-zero-line-bundle-no-section
kind: counterexample
title: "A nontrivial degree-zero line bundle has no nonzero section"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-birational-smooth-proper-curves-isomorphic
  - cor-degree-descends-picard-curve
  - def-algebraic-curve-over-field
  - def-arithmetic-genus-proper-curve
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-invertible-sheaf-of-cartier-divisor
  - def-nonconstant-morphism-curves-degree
  - lem-degree-effective-divisor-nonnegative
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - lem-projective-hypersurface-dimension-drop
  - thm-projective-space-proper-over-base
  - lem-closed-immersion-proper
  - lem-proper-stable-composition
  - lem-effective-divisors-sections-mod-scalars
  - lem-function-with-poles-defines-map-p1
  - thm-cartier-weil-divisors-curves-agree
  - thm-curves-function-fields-equivalence
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-plane-curve-arithmetic-genus
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
verification:
  audited: 2026-10-02
---

## Counterexample

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
Cartier-Weil, genus, finite-map and function-field suppliers. Let $k$ be an algebraically closed field and
let $E=V_+(y^2z-x^3-axz^2-bz^3)\subseteq\mathbb P^2_k$ be a smooth plane
cubic, a curve of genus one
([[thm-plane-curve-arithmetic-genus]]), with distinct closed points
$P,Q\in E$. Then the invertible sheaf
$\mathcal L=\mathcal O_E(P-Q)$
([[def-invertible-sheaf-of-cartier-divisor]]) has degree zero,
$H^0(E,\mathcal L)=0$, and $\mathcal L$ is nontrivial: a nonzero section would
present $\mathcal L$ as $\mathcal O_E(D)$ with $D$ effective and $\deg D=0$,
forcing $D=0$ and $\mathcal L\cong\mathcal O_E$, while nontriviality holds
because $\mathcal O_E(P-Q)\cong\mathcal O_E$ would give a rational function of
divisor $P-Q$ and hence a degree-one map $E\to\mathbb P^1$, impossible for a
curve of genus one. So degree zero neither forces triviality nor produces
sections.


## Facts & Assumptions

**Given:** An algebraically closed field $k$, the smooth plane cubic $E=V_+(F)$ with $F=y^2z-x^3-axz^2-bz^3$, and distinct closed points $P,Q\in E$.

[F1] Let $X=V_+(G)\subseteq\mathbb P^2_k$ be cut out by a nonzero homogeneous form of degree $d\ge1$ and assume $X$ is a curve (integral of dimension one); then $H^0(X,\mathcal O_X)=k$ and $p_a(X)=1-\chi(\mathcal O_X)=\frac{(d-1)(d-2)}{2}$. In particular a smooth plane cubic is an integral proper curve with $p_a=1$, and a line has $p_a=0$. ([[thm-plane-curve-arithmetic-genus]])

[F2] A curve over $k$ is geometrically integral, separated, finite type of chain dimension one; a smooth proper curve is in particular integral and reduced, and the arithmetic genus $p_a(X)=1-\chi(\mathcal O_X)$ of an integral proper curve is an invariant of its isomorphism class, because the cohomology of the structure sheaf depends only on the scheme up to isomorphism. ([[def-algebraic-curve-over-field]], [[def-arithmetic-genus-proper-curve]])

[F3] On a smooth curve divisors are finite $\mathbb Z$-combinations of closed points, $\deg_k(\sum_xn_x[x])=\sum_xn_x[\kappa(x):k]$, and over an algebraically closed field every closed point has residue field $k$ and degree one. ([[def-divisor-smooth-proper-curve]], [[def-degree-divisor-proper-curve]])

[F4] For a smooth proper geometrically integral curve $C$: the group $\operatorname{Pic}(C)$ of isomorphism classes of invertible sheaves is identified with the divisor class group by $[D]\mapsto[\mathcal O_C(D)]$, the degree $\deg_k$ descends to a homomorphism $\operatorname{Pic}(C)\to\mathbb Z$ taking $\mathcal O_C(D)$ to $\deg_kD$, and $\mathcal O_C(D)\cong\mathcal O_C(D')$ if and only if $D$ and $D'$ are linearly equivalent; the sheaf $\mathcal O_C(D)$ is the invertible sheaf attached to the Cartier divisor $D$. ([[thm-cartier-weil-divisors-curves-agree]], [[cor-degree-descends-picard-curve]], [[def-invertible-sheaf-of-cartier-divisor]])

[F5] A nonzero rational section $s$ of an invertible sheaf $\mathcal M$ on a smooth curve $C$ determines a divisor $\operatorname{div}(s)$ with $\mathcal M\cong\mathcal O_C(\operatorname{div}(s))$ carrying the canonical section $1$ to $s$; consequently nonzero global sections of $\mathcal M$ correspond to effective divisors $D$ with $\mathcal O_C(D)\cong\mathcal M$. ([[thm-line-bundle-rational-section-cartier-divisor]], [[lem-effective-divisors-sections-mod-scalars]])

[F6] If $D$ is an effective divisor on a proper geometrically integral curve over $k$, then $\deg_kD\ge0$, and $\deg_kD=0$ if and only if $D=0$. ([[lem-degree-effective-divisor-nonnegative]])

[F7] A nonconstant rational function $f\in k(C)^\times$ on a smooth proper geometrically integral curve defines a finite morphism $\varphi_f:C\to\mathbb P^1_k$ whose degree is $[k(C):k(f)]$ and whose fibre over infinity is the pole divisor $(f)_\infty$, of the same degree. ([[lem-function-with-poles-defines-map-p1]], [[def-nonconstant-morphism-curves-degree]])

[F8] Under Choice the assignment $f\mapsto f^*$ is a bijection from dominant morphisms between smooth proper geometrically integral curves over $k$ onto injective $k$-algebra homomorphisms of function fields, and every birational rational map between smooth proper geometrically integral curves is represented by a $k$-isomorphism. ([[thm-curves-function-fields-equivalence]], [[cor-birational-smooth-proper-curves-isomorphic]])

[F9] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F10] Polynomial rings in finitely many variables over a field are UFDs; irreducibles are prime. A nonzero positive-degree plane hypersurface has pure dimension one. Closed immersions and projective-space structure maps are proper, and proper morphisms compose. ([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]], [[lem-projective-hypersurface-dimension-drop]], [[thm-projective-space-proper-over-base]], [[lem-closed-immersion-proper]], [[lem-proper-stable-composition]])

## Proof

**Proof technique:** direct; show the curve has $p_a=1$ while a trivial class would force a degree-one map to $\mathbb P^1$.

1.1 Integrality and genus. On $z=1$ the equation is $y^2-(x^3+ax+b)$. The cubic polynomial in $x$ is not a square in $k(x)$: its order at infinity is $-3$, while a square has even order. Hence the monic quadratic in $y$ is irreducible over $k(x)$ and, by clearing denominators in the UFD $k[x]$, over $k[x,y]$. Its homogenization $F$ is irreducible too: a nonconstant homogeneous factor becoming constant at $z=1$ would be a scalar power of $z$, but $z$ does not divide $F$. Thus [F10] makes the homogeneous quotient a domain; its nonempty projective charts are domains with common generic point, so $E$ is integral. It is of dimension one and proper by [F10]. Since $k$ is algebraically closed it is geometrically integral, and it is smooth by hypothesis, so [F1] applies with $d=3$ to give $H^0(E,\mathcal O_E)=k$ and $p_a(E)=1$. [F1, F2, F10, given, algebra]

1.2 The class has degree zero. The closed points $P,Q$ are $k$-rational, so $[\kappa(P):k]=[\kappa(Q):k]=1$ by [F3]; hence $\deg_k(P-Q)=\deg_k(P)-\deg_k(Q)=1-1=0$, and by [F4] the invertible sheaf $\mathcal L=\mathcal O_E(P-Q)$ has $\deg(\mathcal L)=\deg_k(P-Q)=0$. [F3, F4]

2.1 The class is nontrivial. Suppose $\mathcal O_E(P-Q)\cong\mathcal O_E$; by [F4] this means that $P-Q=\operatorname{div}(f)$ for a rational function $f\in k(E)^\times$, so the pole divisor $(f)_\infty$ of $f$ is the single point $Q$ with multiplicity one and the divisor of $f$ is nonzero; in particular $f$ is nonconstant, and by [F7] it defines a morphism $\varphi_f:E\to\mathbb P^1_k$ of degree $[k(E):k(f)]=\deg_k(f)_\infty=1$. Consequently $k(E)=k(f)$ is a degree-one extension of $k(f)$, so $\varphi_f$ is birational as a morphism of integral curves and [F8] represents it by a $k$-isomorphism $E\cong\mathbb P^1_k$. The arithmetic genus is an isomorphism invariant [F2], so $p_a(E)=p_a(\mathbb P^1_k)=0$ by [F1] applied to a line, contradicting $p_a(E)=1$ from step 1.1. Hence $\mathcal L$ is nontrivial. [F1, F2, F4, F7, F8, step 1.1]

3.1 Every nonzero section forces triviality. Suppose $s\in H^0(E,\mathcal L)$ is nonzero. By [F5] there is an effective divisor $D=\operatorname{div}(s)$ on $E$ with $\mathcal O_E(D)\cong\mathcal L$; by [F4] the degree of $\mathcal L$ is $\deg_kD$, which is $0$ by step 1.2. So $D$ is an effective divisor of degree zero, and [F6] forces $D=0$; then $\mathcal L\cong\mathcal O_E(D)\cong\mathcal O_E$, contradicting the nontriviality of $\mathcal L$ from step 2.1. Therefore $H^0(E,\mathcal L)=0$. [F4, F5, F6, step 1.2, step 2.1]

4.1 Conclusion. For distinct closed points $P,Q$ on the smooth plane cubic $E$ of genus one, the invertible sheaf $\mathcal L=\mathcal O_E(P-Q)$ has degree $\deg_k(P-Q)=0$ by steps 1.2, is nontrivial by step 2.1, and has no nonzero global section by step 3.1: degree zero neither forces a line bundle to be trivial nor guarantees that it has a section. The Axiom of Choice is inherited from the Cartier-Weil, genus, finite-map and function-field suppliers [F9] and no further choice is used. [F9, step 1.2, step 2.1, step 3.1] ∎

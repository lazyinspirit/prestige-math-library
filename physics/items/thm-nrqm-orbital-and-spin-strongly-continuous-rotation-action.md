---
id: thm-nrqm-orbital-and-spin-strongly-continuous-rotation-action
aliases: [nrqm-orbital-and-spin-strongly-continuous-rotation-action]
kind: theorem
domain: mathematics
title: "Strongly continuous rotation action"
status: published
origin: pipeline
dependency_level: 6
deps: [thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension, thm-nrqm-orbital-and-spin-sphere-onb, thm-nrqm-orbital-and-spin-associated-polynomial-normalization, lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, def-strongly-continuous-unitary-representation, def-linear-isometry-and-orthogonal-or-unitary-operator, cor-compact-domain-maps-are-uniformly-continuous, def-nonnegative-lebesgue-integral, def-laplacian-of-a-c2-function, def-directional-and-partial-derivatives, def-homogeneous-polynomial-and-homogeneous-ideal, def-monomials-multidegree-and-total-degree, thm-chain-rule-for-total-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-polar-surface-measure-on-the-unit-sphere, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-hilbert-space, def-inner-product-space, cor-inner-product-induces-a-norm, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-metric-continuity, def-linear-map, def-linear-subspace, def-countable-choice]
dependency_roles:
  thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  def-strongly-continuous-unitary-representation: mathematical-premise
  def-linear-isometry-and-orthogonal-or-unitary-operator: mathematical-premise
  cor-compact-domain-maps-are-uniformly-continuous: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-homogeneous-polynomial-and-homogeneous-ideal: mathematical-premise
  def-monomials-multidegree-and-total-degree: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-linear-map: mathematical-premise
  def-linear-subspace: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 4, §4.1.3 'The rotation operator' (the rotation operator is unitary with three Hermitian generators), printed pp. 62-63"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', §1.2 (rotation properties and Hermiticity of the angular-momentum operators) and §3 'Comments on spherical harmonics'"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $S^2:=\{x\in\mathbb R^3:|x|=1\}$, let
$\sigma$ be the polar surface measure on $S^2$ ([[def-polar-surface-measure-on-the-unit-sphere]]), a finite Borel
measure with $\sigma(S^2)=4\pi$ ([[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]]), and let
$L^2(S^2,\sigma)$ be the complex Hilbert space of equivalence classes of square-integrable functions with inner
product linear in the first argument ([[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-complex-lp-and-euclidean-test-function-conventions]], [[def-hilbert-space]],
[[def-inner-product-space]]). Let $(Y_{lm})_{l\ge0,\,-l\le m\le l}$ be the complete orthonormal family of
[[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] and
[[thm-nrqm-orbital-and-spin-sphere-onb]], put $V_l:=\operatorname{span}\{Y_{l,-l},\dots,Y_{ll}\}$ and let
$H$ be the algebraic span of all $Y_{lm}$. For $l\ge0$ let
$$H_l^{\mathrm{pol}}:=\{\,p:\mathbb R^3\to\mathbb C:\ p\ \text{is a homogeneous polynomial of degree } l \text{ with }\Delta p=0\,\}$$
be the complex vector space of harmonic homogeneous polynomials of degree $l$
([[def-homogeneous-polynomial-and-homogeneous-ideal]], [[def-monomials-multidegree-and-total-degree]],
[[def-laplacian-of-a-c2-function]]), let $\mathrm{res}_l:H_l^{\mathrm{pol}}\to L^2(S^2,\sigma)$ send $p$ to
the class of the restriction $p|_{S^2}$, and let $R\in SO(3)$ range over the special orthogonal group, a
subgroup of the general linear group with $R^{-1}=R^{\mathsf T}$ and unit operator norm, the set $M_3(\mathbb R)$
being identified with $\mathbb R^9$ and given the Euclidean metric ([[def-cm-special-orthogonal-group]],
[[lem-cm-so3-is-a-matrix-group]]). For $F\in L^2(S^2,\sigma)$ define $U(R)F$ to be the class of the function
$\Omega\mapsto\tilde F(R^{-1}\Omega)$, where $\tilde F$ is any representative of $F$. Then:

(a) $U(R)$ is a well-defined $\mathbb C$-linear isometry of $L^2(S^2,\sigma)$ onto itself with inverse
$U(R^{-1})$, hence a unitary operator ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]);
$U(I_3)=\mathrm{id}$ and $U(RS)=U(R)U(S)$ for all $R,S\in SO(3)$, so $R\mapsto U(R)$ is a group homomorphism
from $SO(3)$ into the group of unitary operators on $L^2(S^2,\sigma)$;

(b) for every $R\in SO(3)$ and $p\in H_l^{\mathrm{pol}}$ one has $p\circ R^{-1}\in H_l^{\mathrm{pol}}$; the map
$\rho(R):p\mapsto p\circ R^{-1}$ is a $\mathbb C$-linear automorphism of $H_l^{\mathrm{pol}}$ with inverse
$\rho(R^{-1})$, and $\mathrm{res}_l(\rho(R)p)=U(R)\,\mathrm{res}_l(p)$; consequently $U(R)V_l=V_l$ for every
$l\ge0$, and $U(R)H=H$;

(c) (strong continuity) for every $F\in L^2(S^2,\sigma)$ and every $R_0\in SO(3)$, for every $\varepsilon>0$
there is $\delta>0$ such that $\|R-R_0\|_F<\delta$ for the Euclidean (Frobenius) norm on $M_3(\mathbb R)$
implies $\|U(R)F-U(R_0)F\|_2<\varepsilon$; thus every orbit map $R\mapsto U(R)F$ is continuous
([[def-metric-continuity]]). More precisely, if $P_NF:=\sum_{l\le N}\sum_{m}\langle F,Y_{lm}\rangle Y_{lm}$
denotes the orthogonal truncation of $F$ to $\bigoplus_{l\le N}V_l$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]),
then for all $R$
$$\|U(R)F-F\|_2\le 2\,\|F-P_NF\|_2+\|U(R)P_NF-P_NF\|_2 .$$

All assertions are mathematical statements about the action of $SO(3)$ on $L^2(S^2,\sigma)$; no physical
interpretation of the rotation action is asserted.

## Facts & Assumptions

**Given:** the sphere $S^2$, the polar measure $\sigma$, the complete orthonormal family $(Y_{lm})$, the blocks $V_l$, the finite span $H$, the spaces $H_l^{\mathrm{pol}}$, the restriction maps $\mathrm{res}_l$, and the group $SO(3)$.

[F1] The polar surface measure equals the chart surface measure on $S^2$, is finite with $\sigma(S^2)=4\pi$, and is preserved by orthogonal transformations: $\sigma(OE)=\sigma(E)$ for every orthogonal $O$ and every Borel $E\subseteq S^2$ ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[def-polar-surface-measure-on-the-unit-sphere]], [[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]]).

[F2] $(Y_{lm})$ is a complete orthonormal family of $L^2(S^2,\sigma)$; each $V_l$ has the orthonormal basis $(Y_{l,-l},\dots,Y_{ll})$; $V_l\perp V_k$ for $l\ne k$; $H$ is dense; and the orthogonal truncations $P_NF$ converge to $F$ in norm (Parseval) ([[thm-nrqm-orbital-and-spin-sphere-onb]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[F3] Each $Y_{lm}$ has a continuous polynomial representative on $S^2$ by [F4] and [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]. For $0\le m\le l$, its chart formula is $Y_{lm}(\theta,\varphi)=b_{lm}w_{lm}(\cos\theta)e^{im\varphi}/\sqrt{2\pi}$; for $1\le m\le l$, $Y_{l,-m}=(-1)^m\overline{Y_{lm}}$. Thus the negative-index formula includes the factor $(-1)^m$, not the phase-free positive-index expression. Continuity at chart boundaries follows from the polynomial representative, and conjugation preserves it. Every $F\in H$ is consequently continuous on the whole sphere.

[F4] The restriction map $\mathrm{res}_l$ is a $\mathbb C$-linear isomorphism $H_l^{\mathrm{pol}}\to V_l$, so every $F\in V_l$ has a unique representative $p_F\in H_l^{\mathrm{pol}}$ with $\mathrm{res}_l(p_F)=F$ ([[thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension]] (b),(c)).

[F5] Polynomial maps on $\mathbb R^3$ are $C^\infty$; for a $C^2$ function $p$ and the linear map $L(x)=R^{-1}x$ the chain rule gives $J(p\circ L)(x)=Jp(Lx)\,R^{-1}$ and therefore $\Delta(p\circ L)(x)=\operatorname{tr}\bigl((R^{-1})^{\mathsf T}D^2p(Lx)R^{-1}\bigr)=\Delta p(Lx)$, because $R^{-1}(R^{-1})^{\mathsf T}=I_3$; the top-degree part of $p\circ L$ is the composition of the top-degree part of $p$ with $L$, so invertibility of $L$ preserves the degree of a nonzero polynomial and preserves homogeneity; sums and scalar multiples of harmonic homogeneous polynomials of one degree are again harmonic homogeneous of that degree ([[thm-chain-rule-for-total-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-laplacian-of-a-c2-function]], [[def-directional-and-partial-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-homogeneous-polynomial-and-homogeneous-ideal]], [[def-monomials-multidegree-and-total-degree]]).

[F6] Let $\Phi:S^2\to S^2$ be a measurable bijection with $\sigma(\Phi^{-1}E)=\sigma(E)$ for all Borel $E$; then for $F,G\in L^2(S^2,\sigma)$ the functions $F\circ\Phi$, $G\circ\Phi$ lie in $L^2(S^2,\sigma)$, with $\langle F\circ\Phi,G\circ\Phi\rangle=\langle F,G\rangle$ (substitution formula for the measure-preserving bijection), and $F=G$ $\sigma$-a.e. implies $F\circ\Phi=G\circ\Phi$ $\sigma$-a.e.; these identities are those of the change-of-variables formula applied to indicators and to nonnegative Borel functions and then to the four positive and negative parts ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F7] A continuous function on the compact metric space $S^2$ is uniformly continuous ([[cor-compact-domain-maps-are-uniformly-continuous]]); if $g:S^2\to\mathbb C$ is continuous and bounded then $\int_{S^2}|g|^2\,d\sigma\le 4\pi\,\|g\|_\infty^2$, because the nonnegative integral is monotone and $\sigma(S^2)=4\pi$ ([[def-nonnegative-lebesgue-integral]], [F1]).


[F8] Euclidean norms on $M_3(\mathbb R)\cong\mathbb R^9$ and on $\mathbb R^3$: for the Frobenius norm $\|A\|_F=(\sum_{i,j}A_{ij}^2)^{1/2}$, $|Ax|\le\|A\|_F|x|$ for all $x\in\mathbb R^3$ by the Cauchy-Schwarz inequality; for $R\in SO(3)$, $\|R\|_F=\sqrt3$ and $\|R\|=1$, and $R^{-1}-R_0^{-1}=R^{-1}(R_0-R)R_0^{-1}$ for $R,R_0\in SO(3)$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[lem-cm-so3-is-a-matrix-group]], [[def-cm-special-orthogonal-group]]).

[F9] $SO(3)$ is a subgroup of the general linear group with $R^{-1}=R^{\mathsf T}$, so $(RS)^{-1}=S^{-1}R^{-1}$ and $I_3^{-1}=I_3$ for all $R,S\in SO(3)$ ([[lem-cm-so3-is-a-matrix-group]], [[def-cm-special-orthogonal-group]]).



## Proof

1.1 [(a), substitution map] Let $R\in SO(3)$ and $\Phi:=R^{-1}$. Then $\Phi$ maps $S^2$ bijectively onto $S^2$, since $|R^{-1}y|=|y|$, and by [F1] with the orthogonal matrix $R$ one has $\sigma(\Phi^{-1}E)=\sigma(RE)=\sigma(E)$ for every Borel $E$. If $\tilde F=\tilde F'$ is any representative pair of a class $F\in L^2$, then $\{F\ne F'\}$ has $\sigma$-measure zero, hence so does $R\{F\ne F'\}$ by [F1], so all representatives produce the same class: $U(R)$ is well defined; and $U(R)F\in L^2$ with $\|U(R)F\|_2=\|F\|_2$, $\langle U(R)F,U(R)G\rangle=\langle F,G\rangle$, by [F6]. [F1, F6, algebra]

1.2 [(b), harmonicity] Let $p\in H_l^{\mathrm{pol}}$ and $R\in SO(3)$; by [F5] with $L(x)=R^{-1}x$, $p\circ R^{-1}$ is $C^\infty$ with $\Delta(p\circ R^{-1})(x)=\Delta p(R^{-1}x)=0$ for all $x$, and since $R^{-1}$ is an invertible linear substitution, $p\circ R^{-1}$ is a homogeneous polynomial of degree $l$ (for $p=0$ it is $0$); hence $p\circ R^{-1}\in H_l^{\mathrm{pol}}$. The assignment $\rho(R)$ is $\mathbb C$-linear because composition with a fixed map is linear, and $\rho(R)\rho(R^{-1})=\rho(R^{-1})\rho(R)=\mathrm{id}$ because $p\circ R^{-1}\circ R=p$ and $p\circ R\circ R^{-1}=p$; so $\rho(R)$ is a linear automorphism of $H_l^{\mathrm{pol}}$. [F5, algebra]

1.3 [(c), continuity on the finite span] Let $F\in H$ and $R_0\in SO(3)$. By [F3] $F$ is continuous on $S^2$, hence uniformly continuous by [F7]: given $\varepsilon$ there is $\eta>0$ with $|x-y|<\eta$, $x,y\in S^2$, implying $|F(x)-F(y)|<\varepsilon/(2\sqrt{4\pi})$. For $\Omega\in S^2$ and $R\in SO(3)$, $U(R)F(\Omega)-U(R_0)F(\Omega)=F(R^{-1}\Omega)-F(R_0^{-1}\Omega)$ and, by [F8], $|R^{-1}\Omega-R_0^{-1}\Omega|=|R^{-1}(R_0-R)R_0^{-1}\Omega|\le\|R^{-1}\|_{\mathrm{op}}\|R_0-R\|_F\|R_0^{-1}\Omega\|=\|R-R_0\|_F$. Choosing $\delta:=\eta$ one gets $\sup_{S^2}|U(R)F-U(R_0)F|\le\varepsilon/(2\sqrt{4\pi})$ whenever $\|R-R_0\|_F<\delta$, and then [F7] gives $\|U(R)F-U(R_0)F\|_2<\varepsilon/2<\varepsilon$. [F3, F7, F8, algebra]

2.1 [(a), group law and unitarity] For $F\in L^2$ and $\Omega\in S^2$, $(U(R^{-1})U(R)F)(\Omega)=(U(R)F)(R\Omega)=\tilde F(R^{-1}R\Omega)=\tilde F(\Omega)$ and symmetrically $U(R)U(R^{-1})=\mathrm{id}$, so $U(R)$ is a bijective linear isometry, i.e. unitary, with inverse $U(R^{-1})$ ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]); $U(I_3)=\mathrm{id}$ since $R^{-1}=R^{\mathsf T}=\Omega$-fixing for $R=I_3$; $(U(R)U(S)F)(\Omega)=(U(S)F)(R^{-1}\Omega)=\tilde F(S^{-1}R^{-1}\Omega)=\tilde F((RS)^{-1}\Omega)=(U(RS)F)(\Omega)$ by [F9] the inverse identity $(RS)^{-1}=S^{-1}R^{-1}$. [step 1.1, F9, algebra]

3.1 [(b), intertwining and blocks] Let $F\in V_l$ with representative $p=p_F\in H_l^{\mathrm{pol}}$ ([F4]) and let $R\in SO(3)$. For $\Omega\in S^2$, $U(R)F(\Omega)=\tilde F(R^{-1}\Omega)=p(R^{-1}\Omega)=(p\circ R^{-1})(\Omega)$: here $R^{-1}\Omega$ lies in $S^2$, so the identity of classes $\mathrm{res}_l(\rho(R)p)=U(R)\mathrm{res}_l(p)$ follows. Hence $U(R)V_l\subseteq V_l$ for every $l$ by step 1.2 and [F4], and applying $U(R^{-1})$ (step 2.1) gives equality; since $H$ is the span of the $V_l$ and $U(R)$ is linear, $U(R)H=H$. [step 2.1, step 1.2, F4, algebra]

4.1 [(c), the estimate and general $F$] For arbitrary $F\in L^2(S^2,\sigma)$ and any $R,R_0$, the unitarity of step 2.1 gives $\|U(R)F-U(R_0)F\|_2=\|U(R)(F-P_NF)+U(R)P_NF-U(R_0)P_NF+U(R_0)(P_NF-F)\|_2\le 2\|F-P_NF\|_2+\|U(R)P_NF-U(R_0)P_NF\|_2$, with $P_NF\in H$ by [F2]. Given $\varepsilon>0$, choose $N$ with $\|F-P_NF\|_2<\varepsilon/4$ by [F2], then by step 1.3 a $\delta>0$ with $\|U(R)P_NF-U(R_0)P_NF\|_2<\varepsilon/2$ when $\|R-R_0\|_F<\delta$; then $\|U(R)F-U(R_0)F\|_2<\varepsilon$. Taking $R_0=I_3$ and keeping the terms separately yields the displayed estimate $\|U(R)F-F\|_2\le2\|F-P_NF\|_2+\|U(R)P_NF-P_NF\|_2$. [step 2.1, step 1.3, F2, algebra] ∎



- The orbit continuity proved in (c) is the strong-continuity condition of the definition of a unitary representation ([[def-strongly-continuous-unitary-representation]]) for the group $SO(3)$ equipped with the Euclidean-metric topology inherited from $M_3(\mathbb R)\cong\mathbb R^9$; this identification of vocabulary is not used in the proof of the present batch, whose mathematical content is exactly clauses (a)-(c).
- Clause (b) is the statement that rotations permute the angular-momentum blocks $V_l$ and act on each of them by the finite-dimensional automorphism $\rho(R)$ transported by the restriction isomorphism $\mathrm{res}_l$; it is the algebraic input for the self-adjoint generators of the following item.

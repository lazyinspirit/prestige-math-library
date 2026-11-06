---
id: lem-cft-algebraic-graded-dual-of-admissible-module
kind: lemma
title: Algebraic graded dual of an admissible VOA module
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
deps:
  - def-conformal-vertex-algebra
  - def-admissible-vertex-algebra-module
  - def-vertex-algebra-module
  - lem-cft-locality-to-jacobi-residue-calculus
  - lem-module-jacobi-formal-delta-substitution-identity
  - def-axiom-of-choice
  - thm-every-independent-set-extends-to-a-basis
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-admissible-vertex-algebra-module: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
  lem-module-jacobi-formal-delta-substitution-identity: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-every-independent-set-extends-to-a-basis: mathematical-premise
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: voa-resonant-induction-and-projective-socles
physical_scope: Pure mathematics; no physical premises or physical claim.
axiom_base: ZFC
axiom_use: "AC is used for separation by algebraic dual functionals, exactness of full vector-space duals, and choice of bases when constructing linear retractions."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Yi-Zhi Huang, James Lepowsky, and Lin Zhang, Logarithmic Tensor Category Theory for Generalized Modules for a Conformal Vertex Algebra, I
      url: https://arxiv.org/pdf/1012.4193v7
      locator: "§2, opposite vertex operators, especially (2.59)–(2.62): (2.61) states the opposite Jacobi identity for a VOA and any V-module and attributes it to the proof of Frenkel–Huang–Lepowsky, Theorem 5.2.1. Used only for this identity on W before dualization; the finite-dimensional generalized-weight-space restrictions in Theorem 2.34 are not imported. The algebraic graded-dual extension is proved below for arbitrary admissible grades."
    - title: Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras
      url: https://arxiv.org/pdf/math/0607679v1
      locator: "§4, opening paragraph, states the invariant pairing formula for the contragredient of an admissible V-module and cites Frenkel–Huang–Lepowsky for its construction. It is retained as background; the unrestricted algebraic dual extension is established by the argument here."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the Axiom of Choice. Let $V$ be a conformal vertex algebra of CFT type and $W=\bigoplus_{n\ge0}W(n)$ an admissible $V$-module, with no finite-dimensionality or $L(0)$-semisimplicity assumption on $W(n)$. Define the algebraic graded dual $D(W)=\bigoplus_{n\ge0}W(n)^*$, where $W(n)^*=\operatorname{Hom}_{\mathbb C}(W(n),\mathbb C)$, and define its opposite-field action by
$$\langle Y_D(a,z)f,w\rangle=\langle f,Y_W(e^{zL(1)}(-z^{-2})^{L(0)}a,z^{-1})w\rangle .$$
For admissible $V$-modules $W$ and $X$ and a grading-preserving $V$-module homomorphism $g:W\to X$, define $D(g):D(X)\to D(W)$ gradewise by $D(g)(f)=f\circ g$. Then $D(W)$ is an admissible $V$-module. The gradewise evaluation map $j_W:W\to D^2(W)$ is an injective $V$-module map, and $D$ is an exact contravariant functor on admissible modules with grading-preserving morphisms. If every $W(n)$ is finite dimensional, $j_W$ is an isomorphism.

## Statement references

[[def-admissible-vertex-algebra-module]]

[[def-vertex-algebra-module]]

[[def-conformal-vertex-algebra]]

## Facts & Assumptions

**Given:** The non-super CFT-type VOA conventions and an admissible module with its specified $\mathbb N$-grading.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. The proof uses AC because full algebraic duals separate vectors and are exact in arbitrary-dimensional vector spaces.

[F1] [[def-conformal-vertex-algebra]]: $V=\bigoplus_{r\ge0}V_r$, each $V_r$ is finite dimensional, $L(0)$ is diagonal on states, and $L(-1)=T$. Thus $L(1)^j a=0$ for $j>\operatorname{wt}(a)$.

[F2] [[def-admissible-vertex-algebra-module]]: for homogeneous $a\in V_r$, $a_{(m)}W(n)\subseteq W(n+r-m-1)$, with negative grades zero. No finite-dimensionality of $W(n)$ is assumed.

[F3] [[def-vertex-algebra-module]]: the action has vectorwise lower truncation, vacuum, and the full module Jacobi identity.

[F4] [[lem-cft-locality-to-jacobi-residue-calculus]] supplies the mode commutator and iterate identities on every module, state-product weights, and translation in the actual ordinary non-super convention.

[F5] [[lem-module-jacobi-formal-delta-substitution-identity]] supplies the coefficientwise formal delta substitution identity; no analytic convergence is involved.

[F6] For a vertex operator algebra $V$ and any left $V$-module $W$, the opposite fields $Y_W^o(a,x):=Y_W(e^{xL(1)}(-x^{-2})^{L(0)}a,x^{-1})$ satisfy the opposite Jacobi identity
$$x_0^{-1}\delta\!\left(\frac{x_1-x_2}{x_0}\right)Y_W^o(b,x_2)Y_W^o(a,x_1)-x_0^{-1}\delta\!\left(\frac{x_2-x_1}{-x_0}\right)Y_W^o(a,x_1)Y_W^o(b,x_2)=x_2^{-1}\delta\!\left(\frac{x_1-x_0}{x_2}\right)Y_W^o(Y(a,x_0)b,x_2).$$
Huang, Lepowsky, and Zhang state this in §2, equation (2.61), and identify the proof with the argument for Frenkel–Huang–Lepowsky, Theorem 5.2.1. This is an identity on $W$ before any dual is taken and imposes no finite-dimensionality condition on its grades.

[F7] [[thm-every-independent-set-extends-to-a-basis]]: under AC, if $L\subseteq S\subseteq E$ is linearly independent and $S$ spans a vector space $E$, there is a basis $B$ with $L\subseteq B\subseteq S$. In particular, take $S=E$ and either $L=\varnothing$ or $L=\{w\}$ for $w\ne0$.

## Proof

1.1 For homogeneous $a\in V_r$, write $Y_W^o(a,z)=\sum_{m\in\mathbb Z}a_m^o z^{-m-1}$. Expanding the finite state exponential in the defining opposite field gives
$$a_m^o=(-1)^r\sum_{j=0}^{r}\frac{(L(1)^j a)^W_{(2r-j-m-2)}}{j!}.$$ Each summand shifts $W(n)$ by
$$(r-j)-(2r-j-m-2)-1=m+1-r.$$
Its transpose therefore sends $W(n)^*$ into $W(n+r-m-1)^*$, exactly the admissible shift. If this target grade is negative it is zero; for a finite-support vector of $D(W)$, all sufficiently large $m$ have negative target grade. This proves field truncation on $D(W)$. The vacuum coefficient transposes to the identity. [F1, F2, F3, algebra]

1.2 Since $V$ is a CFT-type conformal vertex algebra by [F1] and $W$ is a left $V$-module by [F3], [F6] applies to $Y_W^o$. Pair that opposite Jacobi identity with $f\in W(p)^*$ and $w\in W(q)$. Every opposite mode on a homogeneous state is a finite sum because $L(1)^ja=0$ for $j>\mathrm{wt}(a)$; admissibility [F2] gives the grade shift for each term, so every paired coefficient is defined without a dimension bound on any $W(n)$. The module residue identities [F4] and delta expansion convention [F5] make the resulting pairing coefficientwise formal; no analytic convergence is used. Thus the opposite Jacobi identity can be transposed coefficientwise without any finite-dimensionality assumption on $W(n)$. [F1, F2, F3, F4, F5, F6, algebra]

2.1 Pair the opposite Jacobi identity from step 1.2 with $f$ and transpose each product. Transposition reverses the order of the two operators, so the reversed-order identity becomes the ordinary module Jacobi identity for $Y_D$. Every coefficient pairing is finite: each mode has the grade shift of step 1.1 and $f$ has one grade of support. Therefore $D(W)$ is a left $V$-module, and step 1.1 gives its admissible grading. [F2, F3, step 1.1, step 1.2, algebra]

3.1 Evaluation $j_W(w)(f)=f(w)$ on each grade is injective because [F7], with $E=W(n)$, $L=\{w\}$ and $S=E$, extends every nonzero $w\in W(n)$ to a basis; the coordinate functional equal to $1$ on $w$ and $0$ on the other basis vectors separates it. Since $[L(0),L(1)]=-L(1)$ and $L(0)$ has integral eigenvalues on $V$, conjugation gives $(-x^2)^{L(0)}e^{xL(1)}(-x^2)^{-L(0)}=e^{-x^{-1}L(1)}$. Therefore
$$e^{x^{-1}L(1)}(-x^2)^{L(0)}e^{xL(1)}(-x^{-2})^{L(0)}=1.$$
Pairing twice gives $j_W(Y_W(a,z)w)=Y_{D^2(W)}(a,z)j_W(w)$, so evaluation is a module map. If each grade is finite dimensional, its gradewise evaluation map is bijective. [A1, F1, F7, step 2.1, algebra]

4.1 If $g:W\to X$ is a grading-preserving module homomorphism, then $gY_W^o(a,z)=Y_X^o(a,z)g$, so its gradewise transpose $D(g)$ is a module homomorphism by the defining pairings. Precomposition gives $D(\mathrm{id})=\mathrm{id}$ and $D(h\circ g)=D(g)\circ D(h)$. A grading-preserving short exact sequence of admissible modules is exact on each grade. For each inclusion $U\subset X$ of vector spaces, apply [F7] first with $E=S=U$, $L=\varnothing$, obtaining a basis $B_U$ (also for $U=0$), and then with $E=S=X$, $L=B_U$, obtaining a basis $B_X\supseteq B_U$. Extending a functional by zero on $B_X\setminus B_U$ proves that $X^*\to U^*$ is surjective. Its kernel consists exactly of the functionals factoring through $X/U$, and precomposition with $X\twoheadrightarrow X/U$ is injective. Thus algebraic duality is exact, and direct sums of these gradewise exact dual sequences remain exact with arrows reversed. Hence $D$ is an exact contravariant functor. [A1, F2, F7, step 2.1, algebra] ∎

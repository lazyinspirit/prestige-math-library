---
id: cor-knot-alexander-normalization-symmetry-and-genus-bound
kind: corollary
title: "Knot Alexander normalization, symmetry, and genus bound"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-oriented-seifert-surface
  - def-oriented-seifert-surface-and-knot-genus
  - def-one-variable-alexander-module-of-an-oriented-link
  - thm-seifert-matrix-presents-knot-alexander-module
  - lem-seifert-matrix-s-equivalence-under-isotopy
  - def-alexander-polynomial-from-the-first-elementary-ideal
  - def-the-laurent-polynomial-ring
  - lem-units-and-powers-of-the-laurent-polynomial-ring
  - thm-the-alexander-polynomial-is-an-oriented-link-invariant
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - lem-square-seifert-presentation-and-alexander-normalization
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "Chapter 8.C, printed pp. 206–211"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
      locator: "§6.2.3, Proposition 6.2.12, printed pp. 45–47"
---

## Statement

Assume the full Axiom of Choice and let $K\subset S^3$ be a smooth oriented knot. For a nonzero Laurent polynomial $f(t)=\sum_j c_jt^j$, define $\deg f=\max\{j:c_j\ne0\}-\min\{j:c_j\ne0\}$; this is its exponent width and is unchanged by multiplication by a unit $\pm t^k$. Let $g(K)$ be the minimum genus of a connected compact smooth oriented embedded surface in $S^3$ with oriented boundary $K$, and let $\Delta_K$ be any generator of the zeroth elementary ideal of its one-variable Alexander module. Then every such generator satisfies

$$\Delta_K(1)=\pm1,\qquad \Delta_K(t^{-1})\doteq\Delta_K(t),\qquad \deg\Delta_K\le 2g(K),$$

where $\doteq$ means equality up to a unit $\pm t^k$. Consequently, there is a unique associate $\Delta_K^\#(t)$ with $\Delta_K^\#(1)=1$ and $\Delta_K^\#(t^{-1})=\Delta_K^\#(t)$; its exponent support is centered in $[-g(K),g(K)]$. Under the existing convention the knot-normalized fraction $D_K(t)=\Delta_K(t)/(1-t)$ is distinct from the polynomial $\Delta_K$; because $\Delta_K(1)=\pm1$, it has a simple pole at $t=1$.

## Statement references

[[def-oriented-seifert-surface-and-knot-genus|The minimum genus $g(K)$]]

[[def-oriented-seifert-surface|The genus of an individual Seifert surface]]

[[def-knot-seifert-pairing-and-matrix|The Seifert matrix convention]]

[[def-alexander-polynomial-from-the-first-elementary-ideal|The polynomial $\Delta_K$ and knot-normalized fraction $D_K$]]

[[thm-seifert-determinant-is-the-knot-alexander-polynomial|The determinant formula]]

[[def-axiom-of-choice|The Axiom of Choice]]

## Facts & Assumptions

**Given:** Full AC and a smooth oriented knot $K\subset S^3$ with its one-variable Alexander module and Alexander polynomial.

[A1] Full AC is the choice-function axiom assumed by the Alexander-module and Seifert-matrix conventions. ([[def-axiom-of-choice]])

[F1] For every connected Seifert surface $F$ of genus $g(F)$ and every ordered basis, the positive-meridian Alexander module is presented by $V-tV^T$, and $\det(V-tV^T)\doteq\Delta_K(t)$. ([[thm-seifert-matrix-presents-knot-alexander-module]], [[thm-seifert-determinant-is-the-knot-alexander-polynomial]])

[F2] The one-variable Alexander module has zeroth elementary ideal $E_0(A_K)$, the square presentation gives $E_0(A_K)=(\det(V-tV^T))$, and $\det(V-V^T)=\pm1$. ([[def-one-variable-alexander-module-of-an-oriented-link]], [[lem-square-seifert-presentation-and-alexander-normalization]])

[F3] The entries of $V$ are the positive-push linking numbers $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. ([[def-knot-seifert-pairing-and-matrix]])

[F4] The smooth knot genus $g(K)$ is the least genus among all connected compact smooth oriented spanning surfaces; the minimum is attained by a surface in the defining set. ([[def-oriented-seifert-surface-and-knot-genus]])

[F5] For a knot surface, $\chi(F)=1-2g(F)$. ([[def-oriented-seifert-surface]])

[F6] The Laurent ring is a domain with units exactly $\pm t^k$, and distinct powers $t^m,t^n$ are unequal when $m\ne n$; $\Delta_K$ is a gcd generator of $E_0(A_K)$ and $D_K=\Delta_K/(1-t)$ is the separate one-component convention. ([[def-the-laurent-polynomial-ring]], [[lem-units-and-powers-of-the-laurent-polynomial-ring]], [[def-alexander-polynomial-from-the-first-elementary-ideal]])

[F7] An ambient isotopy transports the Seifert matrix by unimodular basis congruence and preserves the Alexander polynomial up to a unit. ([[lem-seifert-matrix-s-equivalence-under-isotopy]], [[thm-the-alexander-polynomial-is-an-oriented-link-invariant]])

[F8] Full AC implies the Axiom of Countable Choice, the hypothesis in the knot-genus definition and the Seifert-surface supplier. ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]])

## Proof

1.1 By [A1] and [F8], the countable-choice hypotheses of the surface and genus suppliers hold. Fix any connected Seifert surface $F$ for $K$, of genus $g(F)$, and put $n=2g(F)$ and $p(t)=\det(V-tV^T)$. By [F1] and [F2], $p(1)=\det(V-V^T)=\pm1$ and any generator $\Delta_K$ is a unit associate of $p$. Thus $\Delta_K(1)=\pm1$. [A1, F1, F2, F6, F8, given]

2.1 Set $M(t)=V-tV^T$. Directly, $M(t)^T=V^T-tV=-tM(t^{-1})$. Taking determinants and using $n=2g(F)$ even gives $p(t)=\det M(t)=\det M(t)^T=(-t)^n p(t^{-1})=t^n p(t^{-1})$. Therefore $t^{-g(F)}p(t)$ is invariant under $t\mapsto t^{-1}$. Since $\Delta_K$ is a unit associate of $p$, it is reciprocal up to a unit, and multiplying the centered representative by the sign of $p(1)$ makes its value at one equal to $1$. [F1, F3, F6, step 1.1, algebra]

3.1 Choose a surface $F$ attaining $g(F)=g(K)$ by [F4]; [A1] and [F8] discharge its countable-choice hypothesis. Set $n=2g(K)$, $M(t)=V-tV^T$, and $p(t)=\det M(t)$ for its matrix; [F3] gives the $n\times n$ size. Each entry of $M(t)$ is a polynomial of degree at most one with exponents in $\{0,1\}$. Every determinant term is a product of $n$ entries, so the exponents of $p$ lie between $0$ and $n$; hence $\deg p\le n=2g(K)$. By [F1], $p$ is a unit associate of $\Delta_K$, and [F6] makes degree invariant under that shift, so $\deg\Delta_K\le2g(K)$. Applying the centering calculation of step 2.1 to this minimum-genus surface gives a symmetric representative supported in $[-g(K),g(K)]$. [A1, F1, F3, F4, F5, F6, F8, step 2.1, choose, algebra]

3.2 Suppose two unit associates $q$ and $\widetilde q=\varepsilon t^kq$, with $\varepsilon\in\{\pm1\}$, both satisfy the exact equalities $q(t^{-1})=q(t)$ and $\widetilde q(t^{-1})=\widetilde q(t)$, and both have value $1$ at $t=1$. Their exact symmetry gives $\varepsilon t^{-k}q(t)=\varepsilon t^kq(t)$. Since $q\ne0$ and the Laurent ring is a domain, $t^{2k}=1$; distinct Laurent monomials are unequal, so $k=0$. Evaluation at one then gives $\varepsilon=1$. Thus the normalized symmetric representative is unique. Since $\Delta_K(1)\ne0$, the denominator $1-t$ has a simple zero at one that does not cancel, so $D_K$ is a proper fraction with a simple pole there. [F6, step 1.1, step 2.1, algebra]

4.1 The properties in the Statement are unchanged by a unit multiple: evaluation at one changes at most by sign, reciprocity is stated up to units, and exponent width is shift-invariant. By [F7], the Alexander polynomial and transported Seifert determinant class are unchanged up to units by orientation-preserving ambient isotopy. Hence the conclusions depend only on the oriented knot type. [F7, step 2.1, step 3.1, step 3.2, algebra] ∎

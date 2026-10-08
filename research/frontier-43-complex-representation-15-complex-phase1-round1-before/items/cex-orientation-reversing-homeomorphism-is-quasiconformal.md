---
id: cex-orientation-reversing-homeomorphism-is-quasiconformal
kind: counterexample
title: An orientation-reversing homeomorphism need not be quasiconformal
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 3
deps: [def-extremal-length-and-curve-family-modulus, def-arc-length-function, def-geometric-quasiconformal-homeomorphism, def-acl-sobolev-quasiconformal-homeomorphism, def-wirtinger-derivatives, thm-determinant-sign-detects-orientation-change, cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps, def-measurable-function-between-measurable-spaces, def-measure-preserving-transformation-and-system, thm-integrals-are-invariant-under-measure-preserving-maps, def-countable-choice, def-axiom-of-choice]
axiom_use: The counterexample calculations are choice-free; the Axiom of Choice is included because the analytic quasiconformality definition used to test nonmembership carries it, and Countable Choice enters the orthogonal Lebesgue-measure interface.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes, 146 pp.)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §2, printed pp. 51–52: the displayed geometric condition is modulus quasi-invariance for a homeomorphism; the text does not explicitly state an orientation clause there."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §12.5, printed p. 188: QC1–QC2 explicitly begin with an orientation-preserving homeomorphism and define QC2 by quasi-invariance of quadrilateral and annulus moduli."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. **Statement refuted.** *Every homeomorphism $f:\Omega\to\Omega'$ that preserves the moduli of all quadrilateral families up to factor $K$ is $K$-quasiconformal; no orientation hypothesis is needed.*

**Counterexample.** Take $\Omega=\Omega'=\mathbb C$ and $f(z)=\overline z$. This is an orientation-reversing Euclidean isometry. It preserves the extremal length and reciprocal curve-family modulus of every path family exactly, so it satisfies all quadrilateral modulus inequalities with $K=1$. But it violates the orientation clause of [[def-geometric-quasiconformal-homeomorphism]] and is not analytically $K$-quasiconformal for any finite $K$: $f_z=0$ and $f_{\bar z}=1$, contradicting $|f_{\bar z}|\le k|f_z|$ for every $k=(K-1)/(K+1)<1$ ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-wirtinger-derivatives]]).

## Facts & Assumptions

**Given:** Choice, the plane with its Borel area measure, and the extremal-length convention of [[def-extremal-length-and-curve-family-modulus]].

[F1] The reflection $T(x,y)=(x,-y)$ is continuous and hence measurable, and it is an orthogonal linear map. Since $T^{-1}=T$, orthogonal invariance of Lebesgue measure makes it a measure-preserving transformation of the plane ([[def-measurable-function-between-measurable-spaces]], [[cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps]], [[def-measure-preserving-transformation-and-system]]).

[F2] For every path $\gamma$, distances along $T\gamma$ equal those along $\gamma$, so their arc-length functions agree. Rectifiability is preserved, and nonrectifiable paths have infinite density length under both conventions ([[def-arc-length-function]], [[def-extremal-length-and-curve-family-modulus]]).

[F3] If $\sigma$ is a nonnegative Borel density on $T(\Omega)$ and $\rho=\sigma\circ T$, then $\rho$ is Borel and the measure-preserving integral theorem gives $A_\Omega(\rho)=A_{T(\Omega)}(\sigma)$, allowing infinite values ([[thm-integrals-are-invariant-under-measure-preserving-maps]], [F1]).

[F4] The real derivative of conjugation is $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, whose determinant is $-1$, so the local orientation sign is negative ([[thm-determinant-sign-detects-orientation-change]]). Its Wirtinger derivatives are $f_z=0$ and $f_{\bar z}=1$ ([[def-wirtinger-derivatives]]). The analytic definition requires the ACL/Sobolev and Wirtinger-inequality conditions ([[def-acl-sobolev-quasiconformal-homeomorphism]]).

[F5] The library's geometric definition requires orientation preservation in addition to the two-sided quadrilateral modulus inequalities ([[def-geometric-quasiconformal-homeomorphism]]).

## Proof

**Proof technique:** transport admissible densities by the reflection, then check orientation and the analytic inequality directly.

1.1 Let $T(z)=\bar z$, $\Omega'=T(\Omega)$, and $\Gamma'=T\Gamma$. Given any Borel density $\sigma$ on $\Omega'$, set $\rho=\sigma\circ T$ on $\Omega$. By [F2], each rectifiable path has the same density length before and after reflection, while nonrectifiable paths have infinite length on both sides. Thus $\ell_\rho(\Gamma)=\ell_\sigma(\Gamma')$. By [F3], the two densities also have equal area, with $0<A<\infty$ on one side exactly when it holds on the other. Since $T$ is an involution, this is a bijection of the admissible density classes; taking the defining supremum gives $\lambda(\Gamma')=\lambda(\Gamma)$ and hence $\mu(\Gamma')=\mu(\Gamma)$, including empty, zero, and infinite cases. [F1, F2, F3, given]

2.1 Every quadrilateral family and its reflected image therefore satisfy the two-sided modulus inequalities with constant $K=1$. But [F4] shows that $T$ reverses the local orientation, so it fails the orientation-preserving clause in the library's geometric definition.[F4, step 1.1, F5, given]

3.1 The map is smooth and belongs to $W^{1,2}_{\mathrm{loc}}$, but [F4] gives $|f_{\bar z}|=1$ and $|f_z|=0$. For every finite $K\ge1$, the analytic definition has $k=(K-1)/(K+1)<1$ and would require $1\le k\cdot0=0$, which is impossible. Thus the modulus bounds alone do not imply either orientation-preserving geometric or analytic quasiconformality.[F4, given] ∎

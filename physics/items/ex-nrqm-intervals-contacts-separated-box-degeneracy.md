---
id: ex-nrqm-intervals-contacts-separated-box-degeneracy
aliases: [nrqm-intervals-and-contacts-example-separated-box-degeneracy]
kind: example
domain: mathematics
title: "Separated-box degeneracy"
status: draft
origin: pipeline
dependency_level: 2
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, thm-nrqm-intervals-sine-on-completeness, lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-tonelli-and-fubini-for-completed-product-measures, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  thm-nrqm-intervals-sine-on-completeness: mathematical-premise
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 8.6 pp. 231-233 and Section 9.6 pp. 289-292 (separation of variables and eigenvalues of product domains)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.1 pp. 251-256 (multi-dimensional Dirichlet Laplacians and separation of variables)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Example

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $0<L<\infty$ and on $L^2((0,L)^2;\mathbb C)$
(Lebesgue measure on the square) define the product functions
$e_{nm}(x,y):=\frac2L\sin\!\Bigl(\frac{n\pi x}{L}\Bigr)
\sin\!\Bigl(\frac{m\pi y}{L}\Bigr),\qquad n,m\ge1 .$
Then:

(a) $(e_{nm})_{n,m\ge1}$ is a complete orthonormal family of
$L^2((0,L)^2;\mathbb C)$;

(b) the diagonal operator $\Delta_D$ with respect to this family and the
eigenvalues
$\mu_{nm}:=\frac{\pi^2}{L^2}(n^2+m^2)$
is a self-adjoint operator on $L^2((0,L)^2)$ with
$\Delta_De_{nm}=\mu_{nm}e_{nm}$;

(c) the eigenvalue $\mu=5\pi^2/L^2$ of $\Delta_D$ has exactly the
two-dimensional eigenspace
$\ker(\Delta_D-\mu)=\mathbb Ce_{12}\oplus\mathbb Ce_{21};$
explicitly $e_{12}(x,y)=\frac2L\sin(\pi x/L)\sin(2\pi y/L)$ and
$e_{21}(x,y)=\frac2L\sin(2\pi x/L)\sin(\pi y/L)$ are orthonormal
eigenvectors with the same eigenvalue. Thus a box built from two separated
one-dimensional intervals has degenerate levels, in contrast with the
simple spectrum of the one-dimensional separated Robin realisation.

## Verification

**Given:** $0<L<\infty$; the complete orthonormal family $(e_{nm})_{n,m\ge1}$ of $L^2((0,L)^2;\mathbb C)$; the diagonal operator $\Delta_D$ of part (b) with eigenvalues $\mu_{nm}=\pi^2(n^2+m^2)/L^2$.

**Proof technique:** direct computation with the one-dimensional sine basis and Fubini; the diagonal operator is supplied by the diagonal lemma.

[F1] $(e_n)_{n\ge1}$, $e_n(x)=\sqrt{2/L}\sin(n\pi x/L)$, is a complete orthonormal family of $L^2(0,L;\mathbb C)$ ([[thm-nrqm-intervals-sine-on-completeness]]); the product $e_{nm}=e_n\otimes e_m$ of two orthonormal bases is orthonormal and complete in the tensor product, identified with $L^2((0,L)^2)$ by the Fubini identification ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[F2] The diagonal operator lemma [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]]: for a complete orthonormal family and real numbers, the diagonal operator is self-adjoint with the displayed eigenvalue realisation, and a vector $x$ is an eigenvector with eigenvalue $\mu$ exactly when its coefficients vanish for all basis vectors with other eigenvalues (uniqueness of coefficients).

1.1 [Orthonormality and completeness] For $n,m,n',m'$, $\langle e_{nm},e_{n'm'}\rangle =\Bigl(\int_0^Le_n\overline{e_{n'}}\Bigr) \Bigl(\int_0^Le_m\overline{e_{m'}}\Bigr) =\delta_{nn'}\delta_{mm'}$ by [F1] and Fubini. If $g\in L^2((0,L)^2)$ is orthogonal to all $e_{nm}$, then for every $n$ the function $h_n(y):=\int_0^Lg(x,y)e_n(x)dx$ satisfies $\int_0^Lh_n\overline{e_m}=0$ for all $m$ by Fubini, so $h_n=0$ a.e. by the completeness of $(e_m)$; applying the completeness of $(e_n)$ for a.e. $y$ gives $g=0$. This is (a). [F1]

2.1 [Diagonal operator and eigenspace] By [F2] applied to the complete orthonormal family $(e_{nm})$ and the real numbers $(\mu_{nm})$ (indexed by $\mathbb N^2$, which is countable), the diagonal operator $\Delta_D$ is self-adjoint with $\Delta_De_{nm}=\mu_{nm}e_{nm}$; a vector $x=\sum_{n,m}c_{nm}e_{nm}\in D(\Delta_D)$ lies in $\ker(\Delta_D-\mu)$ exactly when $\sum_{n,m}(\mu_{nm}-\mu)c_{nm}e_{nm}=0$, which by uniqueness of coefficients forces $c_{nm}=0$ whenever $\mu_{nm}\ne\mu$. The equation $n^2+m^2=5$ with $n,m\ge1$ has exactly the solutions $(1,2)$ and $(2,1)$, so $\ker(\Delta_D-\mu)=\mathbb Ce_{12}\oplus\mathbb Ce_{21}$ is two-dimensional. This proves (b) and (c). [step 1.1, F2, algebra] ∎

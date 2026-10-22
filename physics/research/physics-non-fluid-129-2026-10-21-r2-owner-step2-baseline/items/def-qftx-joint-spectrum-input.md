---
id: def-qftx-joint-spectrum-input
kind: definition
title: Positive-energy joint spectral input
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-countable-choice
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-projection-valued-measure
  - thm-bounded-borel-pvm-integral
  - def-qft-poincare-test-action
dependency_roles:
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  def-qft-poincare-test-action: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, arXiv:1904.04051v2 (2019)"
      url: https://arxiv.org/pdf/1904.04051
      locator: "§5.1, printed p. 24: Definition 24 gives the strongly continuous translation representation, joint PVM, forward-cone support, and its holomorphic extension."
    - title: "Jens Mund, General Aspects of Relativistic Quantum Field Theory, incomplete lecture notes, DF-UFJF (2012)"
      url: https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf
      locator: "§1.3, PDF pp. 8–9, equations (19)–(24): joint momentum spectrum, PVM representation of translations, and the closed forward cone; §2.1, Theorem 2.6, PDF pp. 15–16, for the distinction between reconstructed matrix-coefficient spectrum and joint spectral input."
verification:
  precheck: pending
---

## Definition

Assume Countable Choice. Let $\mathcal H$ be a nonzero complex Hilbert space
with inner product $(\cdot,\cdot)$ linear in its first argument. Use
$p\cdot a:=p^0a^0-\mathbf p\cdot\mathbf a$ on $\mathbb R^4$, the convention
of the proper-orthochronous Poincaré supplier, and put
$$\overline V_+:=\{p=(p^0,\mathbf p)\in\mathbb R^4:p^0\ge|\mathbf p|\},\qquad V_+:=\{b=(b^0,\mathbf b)\in\mathbb R^4:b^0>|\mathbf b|\}.$$
For estimates only, write
$|p|_{\mathrm E}:=\sqrt{(p^0)^2+|\mathbf p|^2}$.

Let $E$ be a projection-valued measure on the Borel subsets of $\mathbb R^4$:
each $E(S)$ is an orthogonal projection, $E(\varnothing)=0$,
$E(\mathbb R^4)=I$, $E(S\cap T)=E(S)E(T)$, and for every disjoint sequence
$(S_n)$, $E(\bigcup_nS_n)\xi=\sum_nE(S_n)\xi$ in norm for each
$\xi\in\mathcal H$. For a bounded Borel function $g$, write
$\Phi_E(g):=\int g(p)\,dE(p)$ for its bounded spectral integral, defined by
uniform simple-function approximation. Let
$U:\mathbb R^4\to\mathcal B(\mathcal H)$ be a strongly continuous unitary
representation of translations: $U(0)=I$, $U(a+a')=U(a)U(a')$, every $U(a)$
is a surjective linear isometry, and $a\mapsto U(a)\xi$ is norm-continuous for
each $\xi\in\mathcal H$. The **positive-energy joint spectral input** is the
additional data and condition
$$U(a)=\Phi_E\bigl(p\mapsto e^{ip\cdot a}\bigr),\qquad E(\mathbb R^4\setminus\overline V_+)=0.$$

Fix a translation-invariant unit vector $\Omega\in\mathcal H$, so $U(a)\Omega=\Omega$ for every $a\in\mathbb R^4$, and a specified unital $*$-subalgebra
$\mathfrak A\subseteq\mathcal B(\mathcal H)$ such that
$\overline{\{A\Omega:A\in\mathfrak A\}}=\mathcal H$; this is the meaning of
cyclic vacuum here. If local bounded operators are used, their assignment
$O\mapsto\mathfrak A(O)\subseteq\mathfrak A$ for bounded open
$O\subseteq\mathbb R^4$ is separately specified. This input asserts no
locality, isotony, covariance, or field-domain property for that assignment.
The PVM and its joint support are input; separate generators or a
matrix-coefficient Fourier-support condition do not replace this additional
data.

## Definition references

[[def-qft-poincare-test-action]]

[[def-countable-choice]]

[[def-hilbert-space]]

[[def-real-and-complex-inner-product-space]]

[[def-projection-valued-measure]]

[[thm-bounded-borel-pvm-integral]]

[Fewster and Rejzner, §5.1](https://arxiv.org/pdf/1904.04051)

[Mund, §1.3 and §2.1](https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf)

## Remarks

The required [[qft-mc02]] reconstruction item proves a matrix-coefficient
Fourier-support condition only under its additional moment identities. Its
Statement explicitly does not assert joint self-adjoint translation generators
or their joint PVM. This definition therefore records a stronger, separate
input and does not infer it from that reconstruction result.

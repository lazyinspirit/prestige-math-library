---
id: def-qft-regular-formal-time-ordering
kind: definition
title: Regular time-ordered contraction coefficients
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - def-qft-regular-polynomial-functional-algebra
  - lem-qft-tensor-test-function-density
  - thm-tensor-product-distributions-and-iterated-pairings
  - lem-distribution-pairing-with-smooth-parameter-families
  - lem-qft-free-time-ordered-kernel
dependency_roles:
  def-qft-regular-polynomial-functional-algebra: mathematical-premise
  lem-qft-tensor-test-function-density: mathematical-premise
  thm-tensor-product-distributions-and-iterated-pairings: mathematical-premise
  lem-distribution-pairing-with-smooth-parameter-families: mathematical-premise
  lem-qft-free-time-ordered-kernel: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, complete lecture notes, sections 5–6
      url: https://arxiv.org/html/1208.1428
      locator: Complete 42-page notes, section 5, equations (56)–(64), and section 6, equations (71)–(83), on regular contraction products, time ordering and causal factorization.
    - title: David Tong, Quantum Field Theory, complete author-hosted Cambridge lecture notes, chapter 3
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
      locator: Complete HTML chapter 3, sections 3.1.1 and 3.3.1–3.3.2, equations (3.221)–(3.245), on time ordering, Dyson coefficients and Wick contractions.
---

## Definition

Fix \(\mu\ge0\) and the \((-+++)\), shell, Fourier, and coordinate conventions
of [[lem-qft-free-time-ordered-kernel]]. That current supplier states that
its relative-coordinate tempered distribution \(H_\mu\) is symmetric, agrees
with the ordered Wightman kernels on strictly ordered time supports and on
spacelike-separated supports, and has no prefactor \(i\) in its definition.
Its current carrier is a draft with a supplied conditional proof; the formula
below uses that exact interface.

For any relative-coordinate distribution \(K\in\mathcal S'(\mathbb R^4)\),
define its translation-invariant two-point bidistribution
\(\widetilde K\in\mathcal D'(\mathbb R^4\times\mathbb R^4)\) by
\[
\langle\widetilde K,\Psi\rangle
=\left\langle K,\ z\longmapsto\int_{\mathbb R^4}\Psi(y+z,y)\,dy\right\rangle,
\qquad \Psi\in\mathcal D(\mathbb R^4\times\mathbb R^4).
\]
The inner function is a test function: its support lies in the difference
of the two compact coordinate projections of \(\operatorname{supp}\Psi\);
each derivative in \(z\) is the integral of the corresponding first-variable
derivative of \(\Psi\) over the fixed compact second-variable projection.
The same derivative bounds show that \(\Psi\mapsto
\bigl(z\mapsto\int\Psi(y+z,y)\,dy\bigr)\) is continuous in the test topology.
Thus the displayed formula defines a distribution without multiplying
singular distributions. Write \(\mathsf H_\mu=\widetilde H_\mu\).

For \(F\in\mathcal P_{\mathrm{reg}}(\mathbb R^4)\), define its support as the
finite union of the coordinate projections of the supports of its nonconstant
symmetric coefficient kernels. This is a compact set and is presentation
independent by [[lem-qft-tensor-test-function-density]]. For compact
\(A,B\subset\mathbb R^4\), write \(A\succcurlyeq_{\mathrm{out}} B\) when
\[
x-y\notin C_-:=\{(t,\mathbf x)\in\mathbb R^4:t\le-|\mathbf x|\}
\quad\text{for every }x\in A,\ y\in B.
\]
This means the first support has no point in the closed causal past of the
second, using the supplier's fixed inertial chart.

For \(n\ge2\) and \(1\le i<j\le n\), let \(D_{\mathsf H}^{ij}\) contract one
functional derivative in slots \(i,j\) against \(\mathsf H_\mu\), pairing
independent variables. Define
\[
T_n^H(F_1,\ldots,F_n)(\phi)
=\left.m_n\exp\!\left(\eta\sum_{1\le i<j\le n}D_{\mathsf H}^{ij}\right)
\prod_{i=1}^nF_i(\phi_i)\right|_{\phi_1=\cdots=\phi_n=\phi},
\qquad T_0^H=1,\quad T_1^H(F)=F.
\]
Here \(m_n\) identifies the remaining field arguments after contraction,
\(\eta\) is a formal real bookkeeping parameter, and the exponential means
its finite sum on polynomial inputs. The dependencies
[[thm-tensor-product-distributions-and-iterated-pairings]] and
[[lem-distribution-pairing-with-smooth-parameter-families]] make every
contraction well defined and leave smooth compact kernels in the uncontracted
variables; no diagonal product occurs. Symmetry of \(\mathsf H_\mu\) makes
\(T_n^H\) symmetric in its inputs.

For a regular compactly supported interaction \(V\) and formal coupling \(z\),
define
\[
S_z^H(V)=\sum_{n=0}^{\infty}\frac{(iz/\eta)^n}{n!}\,T_n^H(V,\ldots,V)
\in\mathcal P_{\mathrm{reg}}(\mathbb R^4)[\eta,\eta^{-1}][[z]].
\]
This is a coefficientwise formal series; the definition asserts no
convergence in \(z\), no time-ordered product for singular local functionals,
and no continuum interacting field.

---
id: ex-nrqm-potentials-box-spectrum-and-nodes
aliases: [ nrqm-potentials-box-spectrum-and-nodes ]
kind: example
domain: physics
title: "The Dirichlet box: exact spectrum, nodes, constant shift and gaps"
status: draft
origin: session
dependency_level: 13
deps:
  - pthm-nrqm-potentials-interval-spectra-completeness-and-nodes
  - def-nrqm-potentials-interval-and-delta-models
  - def-nrqm-potentials-one-dimensional-line-model
  - def-nrqm-framework-quantities-and-units
  - thm-nrqm-intervals-sine-on-completeness
  - def-nrqm-intervals-hilbert-sobolev-spaces
  - def-countable-choice
  - def-axiom-of-choice
  - thm-sine-cosine-zero-sets-and-fundamental-period
dependency_roles:
  pthm-nrqm-potentials-interval-spectra-completeness-and-nodes: physical-result
  def-nrqm-potentials-interval-and-delta-models: formulation-prerequisite
  def-nrqm-potentials-one-dimensional-line-model: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  thm-nrqm-intervals-sine-on-completeness: mathematical-premise
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Finite checks in the declared Dirichlet interval model of the
  pair: the free box eigenpairs, their explicit nodal points, the exact spectrum
  under a constant potential shift, the attainment of the min-max bound and the
  eigenvalue gaps. The example is an exact conditional computation in the
  declared confined model; it asserts no material wall, no measured spectrum and
  no empirical result."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 2.1.2,
        printed pages 24-27 (PDF pages 27-30): the infinite potential well, its
        sine eigenfunctions, nodal structure and quantized energies"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 9.1, printed pages 181-187 (PDF pages 193-199): Sturm-Liouville
        problems on intervals, Dirichlet eigenvalues and nodal counts"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Example

Work in the declared Dirichlet interval model
[[def-nrqm-potentials-interval-and-delta-models]] clause (b) with
$0<L<\infty$, mass $m>0$, action constant $\hbar>0$, and energies in joules
under [[def-nrqm-framework-quantities-and-units]]. Then, as exact identities
in the model:

(i) *Free box.* For $V=0$ the eigenpairs of the assigned energy operator
$H_{D,0}$ are exactly
$$\Bigl(\mathcal E_{n},\,e_{n}\Bigr),\qquad \mathcal E_{n}=\frac{\hbar^{2}\pi^{2}n^{2}}{2mL^{2}},\qquad e_{n}(x)=\sqrt{\frac2L}\,\sin\!\Bigl(\frac{n\pi x}{L}\Bigr),\quad n\ge1,$$
the family $(e_{n})_{n\ge1}$ is a complete orthonormal family of
$L^{2}(0,L;\mathbb C)$, each eigenvalue is simple, and $e_{n}$ has exactly
$n-1$ zeros in $(0,L)$, namely the points $x_{k}=kL/n$, $k=1,\dots,n-1$.

(ii) *Constant shift.* If $V=c$ is the constant potential of value $c\in
\mathbb R$ (joules), then $H_{D,c}$ has exactly the same eigenfunctions
$e_{n}$ and the eigenvalues $\mathcal E_{n}+c$; consequently the min-max
complexity bound of the interval theorem is attained with equality,
$|\mathcal E_{n}+c-\mathcal E_{n}|=|c|=\|V\|_{\infty}$ for every $n$.

(iii) *Gaps.* $\mathcal E_{n+1}-\mathcal E_{n}
=\frac{\hbar^{2}\pi^{2}(2n+1)}{2mL^{2}}>0$, so the spectrum is strictly
increasing.

The example is an exact conditional computation in the declared box model
and asserts no measured transition energy.

## Verification

**Proof technique:** direct; read the free-box clause of the interval theorem,
evaluate the sine zeros explicitly, and shift the operator by a constant
multiple of the identity to verify the exact spectrum under a constant
potential.

**Given:** The declared Dirichlet interval model with $0<L<\infty$ and $m,\hbar>0$; the interval spectrum theorem [[pthm-nrqm-potentials-interval-spectra-completeness-and-nodes]]; a real constant potential value $c$.

[F1] **Dirichlet box conclusions.** For every $V\in C([0,L];\mathbb R)$ the assigned operator $H_{D,V}=(\hbar^{2}/2m)(A_{D}+M_{\tilde V})$ with $\tilde V=(2m/\hbar^{2})V$ is an assigned sharp observable, self-adjoint with compact resolvent and a complete orthonormal eigenfamily, with strictly increasing simple eigenvalues $\mathcal E_{n}$ and the nodal count: the eigenvector belonging to $\mathcal E_{n}$ has exactly $n-1$ zeros in $(0,L)$; the min-max comparison $|\mathcal E_{n}-\hbar^{2}\pi^{2}n^{2}/(2mL^{2})|\le\|V\|_{\infty}$ holds; and for $V=0$ the eigenpairs are exactly $(\hbar^{2}\pi^{2}n^{2}/(2mL^{2}),\,e_{n})$ with the displayed $e_{n}$, a complete orthonormal family ([[pthm-nrqm-potentials-interval-spectra-completeness-and-nodes]] clause (a)).

[F2] **Sine zeros.** For $n\ge1$ and $x\in(0,L)$, $\sin(n\pi x/L)=0$ if and only if $n\pi x/L=k\pi$ for an integer $k$, i.e. $x=kL/n$; among these only $k=1,\dots,n-1$ lie in $(0,L)$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

1.1 [Free eigenpairs and completeness] For $V=0$ the hypotheses of [F1] hold with $V=0$, and its free-box clause gives exactly the eigenpairs $(\mathcal E_{n},e_{n})$ with $\mathcal E_{n}=\hbar^{2}\pi^{2}n^{2}/(2mL^{2})$ and $e_{n}(x)=\sqrt{2/L}\sin(n\pi x/L)$, together with completeness of $(e_{n})$ and simplicity of the eigenvalues. [given, F1, algebra]

2.1 [Nodal points] By [F2] the zeros of $e_{n}$ in $(0,L)$ are exactly $x_{k}=kL/n$, $k=1,\dots,n-1$, so their number is $n-1$, in agreement with the nodal count of [F1]. [step 1.1, F1, F2, algebra]

2.2 [Constant shift] Let $c\in\mathbb R$ and $V=c$; then $\tilde V=2mc/\hbar^{2}$ is constant and $H_{D,c}=(\hbar^{2}/2m)(A_{D}+M_{\tilde V})=(\hbar^{2}/2m)A_{D}+cI$ on $D(A_{D})$, because multiplication by the constant $\tilde V$ is the scalar $\tilde V$ times the identity and $(\hbar^{2}/2m)(2mc/\hbar^{2})=c$. Applying this identity to an eigenvector $e_{n}$ of $A_{D}$ with eigenvalue $\lambda_{n}=(n\pi/L)^{2}$ gives $H_{D,c}e_{n}=(\hbar^{2}/2m)\lambda_{n}e_{n}+ce_{n}=(\mathcal E_{n}+c)e_{n}$; by [F1] the eigenfamily $(e_{n})$ is complete and the eigenvalues simple, so the spectrum of $H_{D,c}$ is exactly $\{\mathcal E_{n}+c:n\ge1\}$. [step 1.1, F1, algebra]

3.1 [Attainment of the min-max bound] For this constant potential the bound of [F1] reads $|\mathcal E_{n}+c-\mathcal E_{n}|=|c|$, and $\|V\|_{\infty}=|c|$; hence the inequality is an equality for every $n$. [step 2.2, F1, algebra]

4.1 [Gaps and reading] Since $(n+1)^{2}-n^{2}=2n+1$, the successive eigenvalue difference is $\mathcal E_{n+1}-\mathcal E_{n}=\hbar^{2}\pi^{2}(2n+1)/(2mL^{2})>0$, consistent with strictness and simplicity in [F1]; every displayed number is an exact function of the declared data $m,\hbar,L$ and the declared shift $c$, and no measured spectrum is asserted. [step 3.1, F1, algebra] ∎

## Remarks

- **Attainment is not generic.** The equality in (ii) is a property of the
  constant potential, for which the perturbation commutes with the free box
  operator. For a nonconstant $V$ the min-max bound is an inequality and its
  attainment is not claimed.
- **What is not asserted.** The example treats the free and constantly shifted
  Dirichlet box only. It does not treat Robin conditions, singular
  perturbations or a material wall, and it reports no data.

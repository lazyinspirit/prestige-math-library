---
id: def-qsmx-finite-boson-quadratic-form
kind: definition
title: Finite positive quadratic canonical operators and diagonalization data
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-nrqmx-finite-mode-symplectic-data
  - lem-nrqmx-finite-mode-fock-schr-identification
  - thm-nrqm-oscillator-hermite-recurrence
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-nrqmx-finite-mode-symplectic-data: mathematical-premise
  lem-nrqmx-finite-mode-fock-schr-identification: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Phan Thành Nam, Mathematical Quantum Mechanics II, §6.3"
      url: "https://www.math.lmu.de/~nam/LectureNotesMQM2020.pdf"
    - title: "Christian Weedbrook et al., Gaussian Quantum Information, §§II.A–II.C.1"
      url: "https://arxiv.org/pdf/1110.3234"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Assume the Axiom of Choice and Countable Choice. Fix an integer $r\geq1$,
an action scale $\hbar>0$ in joule-seconds, and
the finite-mode Fock-to-Schrödinger unitary
$\mathcal U:\mathcal F_s(\mathbb C^r)\to L^2(\mathbb R^r)$. In Schrödinger
coordinates, let $\mathcal S(\mathbb R^r)$ be the Schwartz space
$$\{f\in C^\infty(\mathbb R^r):\sup_{x\in\mathbb R^r}|x^\alpha\partial^\gamma f(x)|<\infty\text{ for every }\alpha,\gamma\in\mathbb N_0^r\}.$$
Here $\mathbb N_0$ denotes the nonnegative integers,
$x^\alpha=\prod_jx_j^{\alpha_j}$, and
$\partial^\gamma=\prod_j\partial_{x_j}^{\gamma_j}$.
Use the dense domain $\mathcal D:=\mathcal U^{-1}\mathcal S(\mathbb R^r)$ and
define on it the operators $Q_j$ and $P_j$ by transporting multiplication
by $\sqrt{\hbar}\,x_j$ and differentiation $-i\sqrt{\hbar}\,\partial_{x_j}$
through $\mathcal U$. Thus, for $f\in\mathcal S$,
$(Q_j\mathcal U^{-1}f)=\mathcal U^{-1}(\sqrt{\hbar}\,x_jf)$ and
$(P_j\mathcal U^{-1}f)=\mathcal U^{-1}(-i\sqrt{\hbar}\,\partial_{x_j}f)$.
Use the commutator convention $[A,B]=AB-BA$ on common invariant domains.
These quadratures satisfy $[Q_j,P_k]=i\hbar\delta_{jk}I$ on $\mathcal D$
and have units $\sqrt{\mathrm{joule}\cdot\mathrm{second}}$. Each product
Hermite function is a polynomial times a Gaussian; all its derivatives and
polynomial multiples remain a polynomial times that Gaussian and are bounded
on $\mathbb R^r$. Thus the complete product Hermite family lies in
$\mathcal S$, so $\mathcal D$ is dense. The finite-mode Fock-to-Schrödinger
supplier establishes completeness and the quadrature actions used here.
Reorder the quadrature column to grouped order
$R_g:=(Q_1,\ldots,Q_r,P_1,\ldots,P_r)^T$.

A finite positive quadratic canonical operator is specified by a real
symmetric matrix $G\in M_{2r}(\mathbb R)$ with
$x^TGx>0$ for every $x\neq0$, and a real constant $c$. The coefficient
$G$ has units of inverse seconds and $c$ has units of joules. On $\mathcal D$
define the symmetrically ordered operator
$$H_{G,c}^{(0)}:=\frac14\sum_{a,b=1}^{2r}G_{ab}(R_{g,a}R_{g,b}+R_{g,b}R_{g,a})+cI.$$
The real multiplication and derivative operators preserve Schwartz space,
so this finite sum maps $\mathcal D$ into $\mathcal F_s(\mathbb C^r)$.
Integration by parts makes each $Q_j,P_j$ symmetric on $\mathcal D$. For
$f,g\in\mathcal D$, symmetry and invariance of $\mathcal D$ give
$\langle R_{g,a}R_{g,b}f,g\rangle
=\langle R_{g,b}f,R_{g,a}g\rangle
=\langle f,R_{g,b}R_{g,a}g\rangle$; the same identity with $a,b$
interchanged proves that each symmetrized summand is symmetric. Since
$G_{ab}=G_{ba}\in\mathbb R$, the finite sum is symmetric. Its quadratic
coefficients are strictly positive in the stated matrix sense. The statement
does not yet assert that this symmetric operator is self-adjoint.

In grouped coordinates set
$$J_g:=\begin{pmatrix}0&I_r\\-I_r&0\end{pmatrix},\qquad D_\omega:=\operatorname{diag}(\omega_1,\ldots,\omega_r,\omega_1,\ldots,\omega_r).$$
A finite diagonalization certificate for $G$ consists of matrices
$U,V\in M_r(\mathbb C)$ and positive angular frequencies $\omega_j>0$ in
inverse seconds such that, with $^*$ denoting conjugate transpose and $^T$
transpose without conjugation,
$$UU^*-VV^*=I_r,\qquad UV^T=VU^T,$$
$$S_g:=\begin{pmatrix}\operatorname{Re}(U+V)&-\operatorname{Im}(U-V)\\\operatorname{Im}(U+V)&\operatorname{Re}(U-V)\end{pmatrix},\qquad S_g^TJ_gS_g=J_g,\qquad S_g^TGS_g=D_\omega.$$
This certificate is explicit finite-dimensional data. No claim is made here
that every positive $G$ has such a certificate; the theorem on this page
uses it as a stated hypothesis. Each term in $H_{G,c}^{(0)}$ has units of
joules because $Q_j$ and $P_j$ have units $\sqrt{\mathrm{joule}\cdot\mathrm{second}}$.

## Definition references

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-nrqmx-finite-mode-symplectic-data]]

[[lem-nrqmx-finite-mode-fock-schr-identification]]

[[thm-nrqm-oscillator-hermite-recurrence]]

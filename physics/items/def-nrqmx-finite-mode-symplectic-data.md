---
id: def-nrqmx-finite-mode-symplectic-data
kind: definition
domain: mathematics
title: Finite-mode quadratures and symplectic data
status: draft
origin: pipeline
dependency_level: 1
deps: [lem-nrqmx-finite-mode-fock-schr-identification, lem-nrqm-fock-and-equilibrium-creation-contraction-bounds, thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains, lem-schrodinger-weyl-system-is-regular-and-irreducible, thm-stone-von-neumann-for-finite-dimensional-weyl-systems, lem-nrqm-composites-density-and-scalar-spectral-probability, def-fourier-transform-on-l-one-of-rn, thm-plancherel, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, cor-c-one-change-of-variables-for-l-one-functions, def-inner-product-space, def-countable-choice, def-axiom-of-choice, def-schwartz-space-and-its-seminorms]
dependency_roles:
  def-schwartz-space-and-its-seminorms: mathematical-premise
  lem-nrqmx-finite-mode-fock-schr-identification: mathematical-premise
  lem-nrqm-fock-and-equilibrium-creation-contraction-bounds: mathematical-premise
  thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains: mathematical-premise
  lem-schrodinger-weyl-system-is-regular-and-irreducible: mathematical-premise
  thm-stone-von-neumann-for-finite-dimensional-weyl-systems: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  thm-plancherel: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Christian Weedbrook et al., Gaussian Quantum Information, §§II.A–II.C.1, pp. 4–9"
      url: "https://arxiv.org/pdf/1110.3234"
    - title: "Phan Thành Nam, Mathematical Quantum Mechanics II, §§5.1–5.4, pp. 114–131"
      url: "https://www.math.lmu.de/~nam/LectureNotesMQM2020.pdf"
---

## Definition

Assume the Axiom of Choice, an integer $r\ge1$, and an action scale
$\hbar>0$. Inner products are linear in the first argument. Use the specified Fock-to-Schrödinger unitary
$\mathcal U:\mathcal F_s(\mathbb C^r)\to L^2(\mathbb R^r)$ from the earlier finite-mode identification. In Schrödinger coordinates
define the self-adjoint quadratures
$$Q_j=\mathcal U^{-1}(\sqrt\hbar\,x_j)\mathcal U,\qquad P_j=\mathcal U^{-1}(-i\sqrt\hbar\,\partial_{x_j})\mathcal U,$$
where $x_j$ is the real multiplication operator on its maximal domain. Here
$\mathcal S(\mathbb R^r)$ consists of all $f\in C^\infty(\mathbb R^r;\mathbb C)$
with $\sup_x|x^\alpha\partial^\beta f(x)|<\infty$ for every pair of
multi-indices $\alpha,\beta\in\mathbb N_0^r$, identified with their $L^2$ classes.
The common Schwartz domain on Fock space means $\mathcal U^{-1}\mathcal S(\mathbb R^r)$. Fix the
angular-frequency Fourier unitary by
$$[\mathcal F_{\mathrm{ang}}f](k)=(2\pi)^{-r/2}\int_{\mathbb R^r}e^{-ik\cdot x}f(x)\,dx\quad(f\in\mathcal S(\mathbb R^r)),$$
and define $-i\partial_{x_j}:=\mathcal F_{\mathrm{ang}}^{-1}M_{k_j}\mathcal F_{\mathrm{ang}}$, where $M_{k_j}$ is multiplication by $k_j$ on its maximal domain. Their common Schwartz core satisfies
$$[Q_j,Q_k]=[P_j,P_k]=0,\qquad [Q_j,P_k]=i\hbar\delta_{jk}I.$$
Write $R=(Q_1,P_1,\ldots,Q_r,P_r)^T$ and
$J=\bigoplus_{j=1}^r\begin{pmatrix}0&1\\-1&0\end{pmatrix}$.
The Weyl unitary labelled by $z=(q_1,p_1,\ldots,q_r,p_r)$ is the unitary
whose grouped-coordinate formula, with $q=(q_1,\ldots,q_r)$ and
$p=(p_1,\ldots,p_r)$, is
$$[W(z)f](x)=e^{i\sqrt\hbar\,q\cdot(x+\sqrt\hbar p/2)}f(x+\sqrt\hbar p).$$
It obeys $W(z)W(z')=e^{-i\hbar z^TJz'/2}W(z+z')$ and is regular and
irreducible. By the finite-dimensional Stone–von Neumann theorem, every
nonzero irreducible regular Weyl system with this finite phase space and this
same nonzero central parameter is unitarily equivalent to it.

A density operator is a positive trace-class operator $\rho$ with
$\operatorname{tr}\rho=1$. Its quadrature second moments are finite when, for
one (equivalently every) spectral expansion
$\rho=\sum_n w_n|\psi_n\rangle\langle\psi_n|$ with $w_n>0$,
$\sum_nw_n\|R_j\psi_n\|^2<\infty$ for every $j$. For such a state define
$$d_j=\sum_nw_n\langle R_j\psi_n,\psi_n\rangle,\qquad V_{jk}=\operatorname{Re}\sum_nw_n \langle(R_j-d_jI)\psi_n,(R_k-d_kI)\psi_n\rangle.$$
These quantities are independent of the chosen orthonormal eigenbasis in
each eigenspace. The state is Gaussian when its Weyl characteristic function
has the form
$$\operatorname{tr}(\rho W(z))= \exp\!\left(i z^Td-\tfrac12z^TVz\right)\quad(z\in\mathbb R^{2r}),$$
with real $d$ and real symmetric $V$. Here $R_j$ has units
$\sqrt{\mathrm{action}}$, each Weyl label has units
$1/\sqrt{\mathrm{action}}$, and $V$ has units of action. No finite particle
number truncation is used.

## Definition references

[[def-inner-product-space]]

[[lem-nrqmx-finite-mode-fock-schr-identification]]

## Facts & Assumptions

**Given:** AC, $r\ge1$, $\hbar>0$, the finite-mode Fock space, and the
Fock-to-Schrödinger unitary.

[A1] AC supplies Countable Choice wherever invoked below and is the explicit
choice hypothesis of the finite-dimensional Stone–von Neumann theorem
([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] The unitary $\mathcal U$ maps the occupation basis to the product Hermite
basis and carries the finite-particle span to the finite Hermite span
([[lem-nrqmx-finite-mode-fock-schr-identification]]). The closed creation and
annihilation operators on Fock space are mutual adjoints with their stated
weighted domains ([[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]]);
on the finite-particle core they satisfy
$[a_j,a_k^*]=\delta_{jk}I$ and $[a_j,a_k]=[a_j^*,a_k^*]=0$
([[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]]).

[F2] The imported Fourier transform on $L^1$ uses the $2\pi$-frequency
convention $[\mathcal F_{2\pi}f](\xi)=\int e^{-2\pi i x\cdot\xi}f(x)\,dx$;
it extends to a unitary on $L^2$ by Plancherel and maps Schwartz space
topologically onto itself by the cited corollary
([[def-fourier-transform-on-l-one-of-rn]], [[thm-plancherel]],
[[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).
The $C^1$ change-of-variables formula applies to the real dilation below
([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F3] Schwartz space and its seminorms have the exact membership definition of
[[def-schwartz-space-and-its-seminorms]]. The multiplication operator $M_xf=xf$ on
$D(M_x)=\{f\in L^2:xf\in L^2\}$ is self-adjoint. The exact scaling relation is
$$[\mathcal F_{\mathrm{ang}}f](k)=(2\pi)^{-r/2}[\mathcal F_{2\pi}f](k/(2\pi)).$$
The dilation on the right is unitary on $L^2$ by change of variables. For
multi-indices $\alpha,\beta\in\mathbb N_0^r$, define the Schwartz seminorms
$p_{\alpha,\beta}(g):=\sup_x|x^\alpha\partial^\beta g(x)|$. The chain rule
gives
$$p_{\alpha,\beta}\!\left((2\pi)^{-r/2}g(\cdot/(2\pi))\right)=(2\pi)^{|\alpha|-|\beta|-r/2}p_{\alpha,\beta}(g),$$
and the inverse dilation has the corresponding finite reciprocal factors;
thus the dilation is a topological automorphism of Schwartz space. On Schwartz space,
$$\mathcal F_{\mathrm{ang}}(-i\partial_{x_j}f)(k)=k_j\mathcal F_{\mathrm{ang}}f(k);$$
this follows by integration by parts in the stated kernel, equivalently from
$$\mathcal F_{2\pi}(-i\partial_{x_j}f)(\xi)=2\pi\xi_j\mathcal F_{2\pi}f(\xi)$$
and the same dilation.

[F4] The root Schrödinger Weyl system is a nonzero, regular, irreducible
finite-dimensional Weyl system with central parameter $\lambda\ne0$
([[lem-schrodinger-weyl-system-is-regular-and-irreducible]]).

[F5] Under AC, every nonzero irreducible regular Weyl system on a real
symplectic vector space of dimension $2r$ with fixed nonzero central
parameter $\lambda$ is unitarily equivalent to the Schrödinger Weyl system
([[thm-stone-von-neumann-for-finite-dimensional-weyl-systems]]).

[F6] Every positive trace-class operator of trace one has a finite or
countable orthonormal eigen-expansion with nonnegative eigenvalues summing to
one, and each nonzero eigenspace is finite-dimensional
([[lem-nrqm-composites-density-and-scalar-spectral-probability]]).

[F7] Complex Hilbert-space inner products are linear in the first argument
and conjugate-linear in the second ([[def-inner-product-space]]).

## Proof

1.1 On $L^2(\mathbb R^r)$, multiplication by real $x_j$ is symmetric. If $g$
lies in its adjoint domain with adjoint value $h$, testing against compactly
supported functions on each box where $x_j$ is bounded gives $h=x_jg$ almost
everywhere there; the boxes exhaust $\mathbb R^r$, so $x_jg\in L^2$ and the
adjoint domain is exactly $D(M_{x_j})$. Thus $M_{x_j}$ is self-adjoint. Let
$Dg(k):=(2\pi)^{-r/2}g(k/(2\pi))$. The $L^1$ Fourier definition in [F2] gives,
for $f\in\mathcal S$, $\mathcal F_{\mathrm{ang}}f=D\mathcal F_{2\pi}f$ by
substitution in the defining integrals. For every $g\in L^2$, [F2] and the
change-of-variables formula in [F2] give
$$\|Dg\|_2^2=(2\pi)^{-r}\int|g(k/(2\pi))|^2\,dk=\int|g(\xi)|^2\,d\xi,$$
so $D$ is an isometry; its inverse is $D^{-1}h(\xi)=(2\pi)^{r/2}h(2\pi\xi)$,
so it is unitary. For Schwartz seminorms
$p_{\alpha,\beta}(g)=\sup_k|k^\alpha\partial^\beta g(k)|$,
$$p_{\alpha,\beta}(Dg)=(2\pi)^{|\alpha|-|\beta|-r/2}p_{\alpha,\beta}(g),$$
and the corresponding inverse formula has finite reciprocal factors. Hence
$D$ and $D^{-1}$ are continuous on Schwartz space. Together with [F2] this
proves that $\mathcal F_{\mathrm{ang}}$ is unitary on $L^2$ and a topological
automorphism of Schwartz space. Conjugating $M_{k_j}$ by it defines the
self-adjoint operator $-i\partial_{x_j}$; on Schwartz functions the kernel
formula and integration by parts give
$\mathcal F_{\mathrm{ang}}(-i\partial_{x_j}f)=k_j\mathcal F_{\mathrm{ang}}f$.
Schwartz functions are a core for multiplication: truncate by smooth compact
cutoffs and then mollify on the resulting bounded support; dominated
convergence controls $f$ and $x_jf$, and boundedness of $x_j$ on that support
controls the mollification error. Fourier invariance of Schwartz space gives
the same core assertion for the derivative. Conjugation by $\mathcal U$
therefore defines the stated self-adjoint quadratures and common core. [A1,
F1, F2, F3, algebra]

2.1 On that core, [F1] gives $Q_j=\sqrt{\hbar/2}(a_j+a_j^*)$ and
$P_j=-i\sqrt{\hbar/2}(a_j-a_j^*)$. The creation and annihilation CCR in
[F1] imply the displayed quadrature commutators by bilinearity; all products are defined on
the finite Hermite span. Direct multiplication of the formula for $W$ gives
the phase $e^{-i\hbar(q\cdot p'-p\cdot q')/2}$, which is
$e^{-i\hbar z^TJz'/2}$ in interleaved notation. Its strong continuity and
irreducibility follow from [F4] after the parameter-preserving change
$(q_0,p_0)=(-\sqrt\hbar p,q/\sqrt\hbar)$ in the root Schrödinger formula.
The real symplectic form is unchanged by that map and the central parameter
is $\hbar\ne0$. Applying [F5] proves the representation-equivalence clause
with precisely its hypotheses. [F1, F4, F5, step 1.1, algebra]

3.1 The positive trace-class spectral expansion in [F6] has weights summing
to one. For any eigenvalue $w>0$, changing the orthonormal basis of its
eigenspace changes the sum of squared norms $\sum\|R_j\psi\|^2$ by a unitary
finite-dimensional change of basis when the eigenspace is finite-dimensional;
positive trace-class compactness makes each nonzero eigenspace finite
dimensional. The same basis invariance holds for the sesquilinear cross sum
by polarization, and the zero eigenspace contributes nothing. Cauchy–Schwarz
then gives absolute convergence of each first-moment series and of each
cross-moment series under the stated second-moment bound. Thus the definitions
of $d,V$ are finite and basis independent; taking the real part makes
$V_{jk}=V_{kj}\in\mathbb R$. Finally, every finite-dimensional cutoff of
Fock space has finite matrix dimension, and for square matrices $A,B$,
$\operatorname{tr}(AB-BA)=0$ by expanding the diagonal entries, whereas the
identity has positive trace. Hence a finite cutoff cannot satisfy the exact
CCR $[Q_j,P_j]=i\hbar I$. [F6, F7, step 1.1, step 2.1, algebra] ∎

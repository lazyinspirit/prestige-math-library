---
id: thm-qftx-spectral-tube-holomorphy
kind: theorem
title: Positive spectrum gives bounded future-tube continuation
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-countable-choice
  - def-qftx-joint-spectrum-input
  - thm-bounded-borel-pvm-integral
  - def-cm-complex-phase-domains-and-holomorphic-maps
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-joint-spectrum-input: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  def-cm-complex-phase-domains-and-holomorphic-maps: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, arXiv:1904.04051v2 (2019)"
      url: https://arxiv.org/pdf/1904.04051
      locator: "§5.1, printed p. 24, Definition 24; printed p. 25, proof of Theorem 26: positive spectrum gives a holomorphic translation extension and bounded insertions give holomorphic matrix coefficients."
    - title: "Jens Mund, General Aspects of Relativistic Quantum Field Theory, incomplete lecture notes, DF-UFJF (2012)"
      url: https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf
      locator: "§2.1, Theorem 2.8 and discussion, PDF pp. 18–19: Fourier support in the forward cone gives tube holomorphy and distributional boundary values. The notes refer the theorem's proof to other sources; the complete bounded-operator argument is supplied locally here."
    - title: "Luis Álvarez-Gaumé and Miguel A. Vázquez-Mozo, General properties of noncommutative field theories, arXiv:hep-th/0305093 (2003)"
      url: https://arxiv.org/pdf/hep-th/0305093
      locator: "§4, PDF pp. 12–13: Wightman functions, tube continuation, and bounded-insertion CPT proof interface; cited only for the analytic route and its hypotheses, not as a standard scalar/spinor theorem."
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and the positive-energy joint spectral input of
[[def-qftx-joint-spectrum-input]] on $\mathcal H$. Put
$\mathcal T_+:=\{a+ib:a\in\mathbb R^4,\ b\in V_+\}$ and, for
$z=a+ib\in\mathcal T_+$, define
$$U(z):=\Phi_E\bigl(p\mapsto\mathbf1_{\overline V_+}(p)e^{ip\cdot z}\bigr), \qquad p\cdot z:=p^0z^0-\mathbf p\cdot\mathbf z.$$
Then $U(z)$ is a bounded operator with $\|U(z)\|\le1$; the same formula
extends it to a strongly continuous contraction-valued map on
$\mathbb R^4+i\overline V_+$ and agrees with the given $U(a)$ when $b=0$.
Holomorphic means complex differentiable as a map of the full complex
coordinate vector, with a complex-linear total derivative and remainder
$o(\|h\|)$.

For every integer $n\ge1$, every $B_1,\ldots,B_{n-1}\in\mathcal B(\mathcal H)$,
and every $\psi,\phi\in\mathcal H$, the matrix coefficient
$$F(z_1,\ldots,z_n):= \bigl(U(z_1)B_1U(z_2)\cdots B_{n-1}U(z_n)\psi,\phi\bigr)$$
is holomorphic on $\mathcal T_+^n$, where each
$\operatorname{Im}z_j\in V_+$. No locality assumption on the bounded
insertions is used. This result concerns bounded operators; it asserts no
domain, product, or holomorphy claim for unbounded Wightman fields.

## Statement references

[[def-qftx-joint-spectrum-input]]

[[thm-bounded-borel-pvm-integral]]

[[def-cm-complex-phase-domains-and-holomorphic-maps]]

[Fewster and Rejzner, §5.1](https://arxiv.org/pdf/1904.04051)

[Mund, §2.1, Theorem 2.8](https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf)

[Álvarez-Gaumé and Vázquez-Mozo, §4](https://arxiv.org/pdf/hep-th/0305093)

## Facts & Assumptions

**Given:** Countable Choice $\mathrm{AC}_\omega$, a nonzero complex Hilbert
space $\mathcal H$, its translation PVM $E$ with
$E(\mathbb R^4\setminus\overline V_+)=0$, the representation
$U(a)=\Phi_E(p\mapsto e^{ip\cdot a})$, bounded operators
$B_1,\ldots,B_{n-1}$, and vectors $\psi,\phi\in\mathcal H$.

[F1] [[def-qftx-joint-spectrum-input]]: $p\cdot a=p^0a^0-\mathbf
p\cdot\mathbf a$, $\overline V_+=\{p^0\ge|\mathbf p|\}$,
$V_+=\{b^0>|\mathbf b|\}$, and $E$ is a strongly countably additive
projection-valued measure supported in $\overline V_+$.

[F2] [[thm-bounded-borel-pvm-integral]]: under $\mathrm{AC}_\omega$, for
bounded Borel $g$, the spectral integral $\Phi_E(g)$ is well defined,
$\bigl(\Phi_E(g)\xi,\eta\bigr)=\int g\,dE_{\xi,\eta}$,
$\|\Phi_E(g)\|\le\|g\|_\infty$, and
$\|\Phi_E(g)\xi\|^2=\int|g|^2\,dE_\xi$ for each $\xi\in\mathcal H$.

[F3] [[def-cm-complex-phase-domains-and-holomorphic-maps]]: on an open subset
of $\mathbb C^m$, holomorphy means a complex-linear total derivative with
remainder $o(\|h\|)$ in the Euclidean norm.

[A1] Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]) is assumed for the bounded Borel PVM integral [F2].

[A2] The insertions $B_j$ are bounded linear operators on $\mathcal H$; no
locality or commutation relation is assumed.

## Proof

1.1 If $p\in\overline V_+$ and $b\in\overline V_+$, then
$p\cdot b\ge p^0(b^0-|\mathbf b|)\ge0$, because
$p^0\ge|\mathbf p|$ and $|\mathbf p\cdot\mathbf b|\le
|\mathbf p|\,|\mathbf b|$. Thus for $z=a+ib$ in the closed tube,
$|e^{ip\cdot z}|=e^{-p\cdot b}\le1$. [F1, algebra]

1.2 Let $K\subset V_+$ be compact and set
$\delta_K:=\min_{b\in K}(b^0-|\mathbf b|)>0$. If
$q\in\overline V_+$ and $|q|_{\mathrm E}=1$, then $q^0\ge1/\sqrt2$,
since $(q^0)^2+|\mathbf q|^2=1$ and $q^0\ge|\mathbf q|$. Hence
$q\cdot b\ge q^0(b^0-|\mathbf b|)\ge\delta_K/\sqrt2$ for every
$b\in K$. By homogeneity, $p\cdot b\ge c_K|p|_{\mathrm E}$ for all
$p\in\overline V_+$ and $b\in K$, with $c_K:=\delta_K/\sqrt2>0$.
[F1, algebra]

2.1 To use a bounded Borel multiplier on all of $\mathbb R^4$, set
$g_z(p):=\mathbf1_{\overline V_+}(p)e^{ip\cdot z}$. By step 1.1,
$\|g_z\|_\infty\le1$. Applying [F2] gives
$U(z):=\Phi_E(g_z)$ and $\|U(z)\|\le1$. Since
$E(\mathbb R^4\setminus\overline V_+)=0$, this is the spectral integral of
$e^{ip\cdot z}$ on the spectral support. For $b=0$, [F2] gives
$\|\Phi_E(g_a-e^{ip\cdot a})\xi\|^2=0$ for every $\xi$, because the
multiplier vanishes on the support of each $E_\xi$. Thus $\Phi_E(g_a)$ is
the given $U(a)$. [A1, F1, F2, step 1.1]

2.2 Fix $z=a+ib\in\mathcal T_+$. By step 1.2 applied to the singleton
$\{b\}$, $p\cdot b\ge c|p|_{\mathrm E}$ on the $E$-support for some
$c>0$. For sufficiently small $h\in\mathbb C^4$ with
$z+h\in\mathcal T_+$, define the bounded multiplier
$g_h(p):=\mathbf1_{\overline V_+}(p)i(p\cdot h)e^{ip\cdot z}$. It
satisfies $\|g_h\|_\infty\le |h|\sup_{r\ge0}re^{-cr}$ and is
complex-linear in $h$. The exponential power-series bound
$|e^w-1-w|\le\frac12|w|^2e^{|w|}$ then gives
$$\|U(z+h)-U(z)-\Phi_E(g_h)\| \le\frac12|h|^2\sup_{r\ge0}r^2e^{-(c-|h|)r}=O(|h|^2),$$
because the pairing identity and uniqueness in [F2] identify the difference
operator with the PVM integral of the bounded multiplier
$\mathbf1_{\overline V_+}(p)e^{ip\cdot z}
(e^{ip\cdot h}-1-ip\cdot h)$, and [F2] supplies the norm bound. Here
$|p\cdot h|\le|p|_{\mathrm E}|h|$. Applying the continuous linear
functional $T\mapsto(T\psi,\phi)$ proves that
$z\mapsto(U(z)\psi,\phi)$ has a complex-linear total derivative. Therefore
this scalar matrix coefficient is holomorphic in the sense of [F3].
[A1, F2, F3, step 1.2, algebra]

3.1 For $R>0$ put $E_R:=E(\{p:|p|_{\mathrm E}\le R\})$. Strong countable
additivity and $E(\mathbb R^4)=I$ imply $E_R\xi\to\xi$ for every
$\xi\in\mathcal H$ as $R\to\infty$, by writing the increasing balls as
disjoint annuli. By the pairing identity and uniqueness in [F2],
$U(z)-U(z_0)=\Phi_E(g_z-g_{z_0})$. The scalar measure
$E_{E_R\xi}(S):=(E(S)E_R\xi,E_R\xi)$ is supported in the compact ball
$\{|p|_{\mathrm E}\le R\}$ by the PVM product law, so the quadratic identity
in [F2] gives
$$\|(U(z)-U(z_0))E_R\xi\|^2 =\int|g_z-g_{z_0}|^2\,dE_{E_R\xi} \le\sup_{\substack{p\in\overline V_+\\|p|_{\mathrm E}\le R}} |e^{ip\cdot z}-e^{ip\cdot z_0}|^2\,\|E_R\xi\|^2.$$
The supremum tends to zero as $z\to z_0$ in the closed tube by uniform
continuity on the compact spectral ball. The remaining vector part has norm
at most $2\|\xi-E_R\xi\|$ by step 2.1, so first taking large $R$ and then
$z\to z_0$ proves strong continuity on the closed tube.
[A1, F1, F2, step 2.1, construct, algebra]

4.1 For $\mathbf z=(z_1,\ldots,z_n)$ in $\mathcal T_+^n$, apply step 2.2
to each factor:
$U(z_j+h_j)=U(z_j)+\Phi_E(g_{z_j,h_j})+R_j(h_j)$, with
$\|R_j(h_j)\|=O(|h_j|^2)$ and
$\|\Phi_E(g_{z_j,h_j})\|=O(|h_j|)$. Expanding the finite product defining
$F(\mathbf z+\mathbf h)$, the terms linear in $\mathbf h$ are the sum of
the products with exactly one factor replaced by
$\Phi_E(g_{z_j,h_j})$; this is a complex-linear function of $\mathbf h$.
Every remaining term contains either one $R_j(h_j)$ or at least two linear
increments, so its norm is $O(\|\mathbf h\|^2)$ because the other factors
$U(z_j)$ and $B_j$ are bounded. Pairing with $\psi,\phi$ preserves this
remainder estimate. Thus $F$ is complex differentiable on the full product
domain, hence holomorphic by [F3].
[A1, A2, F2, F3, step 2.1, step 2.2, algebra] ∎

## Remarks

The proof uses exponential damping only for imaginary displacements in the
open future cone. Boundary continuity is strong operator continuity, obtained
from bounded-energy spectral projections; no operator-norm continuity at the
real boundary is claimed.

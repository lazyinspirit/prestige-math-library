---
id: lem-qft-free-action-equations
kind: lemma
title: Classical free action variations and normalization
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qft-dirac-projections
  - def-qft-scalar-mass-shell
  - def-test-function-space-d-of-an-open-set
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
dependency_roles:
  def-qft-dirac-projections: mathematical-premise
  def-qft-scalar-mass-shell: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, author-hosted complete lecture notes, §1.1.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S1.html
      locator: Complete HTML Chapter 1, §1.1.1, equations 1.6–1.15.
    - title: David Tong, Quantum Field Theory, author-hosted complete lecture notes, §§4.2–4.3
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html
      locator: Complete HTML Chapter 4, Dirac adjoint and action (4.342–4.357), then independent spinor variations and Dirac equations (4.358–4.359). Tong uses the opposite metric signature to the fixed local convention.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft, §§3 and 36
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page draft; §3, equations 3.7–3.10, and §36, equations 36.1–36.11. The spinor discussion uses anticommuting fields; the argument here concerns commuting classical fields.
verification:
  precheck: pass
---

## Statement

Fix $\mu\ge0$, $\eta=\operatorname{diag}(-1,1,1,1)$, $\Box=\eta^{ab}\partial_a\partial_b$, and the Dirac matrices and adjoint of [[def-qft-dirac-projections]]; $\mu$ is the inverse-length mathematical shell parameter of [[def-qft-scalar-mass-shell]]. For a smooth real scalar field $\phi$ and smooth commuting complex spinor $\psi:\mathbb R^4\to\mathbb C^4$, use the normalized free Lagrangian densities
$$\mathcal L_\phi=-\frac12\left(\eta^{ab}\partial_a\phi\,\partial_b\phi+\mu^2\phi^2\right),\qquad \mathcal L_D=\bar\psi\left(i\gamma^a\partial_a-\mu\right)\psi,\qquad \bar\psi=\psi^\dagger\beta.$$
For compactly supported smooth real variations $h$ and compactly supported smooth complex spinor variations $\chi$, the action symbols are used only through the following finite, compactly supported first variations; no global integrability of the background fields is assumed:
$$\delta S_\phi(\phi;h)=\int_{\mathbb R^4}h(\Box-\mu^2)\phi\,d^4x,\qquad \delta S_D(\psi;\chi)=2\operatorname{Re}\int_{\mathbb R^4}\chi^\dagger\beta\left(i\gamma^a\partial_a-\mu\right)\psi\,d^4x.$$
Each field is stationary under all such variations if and only if its corresponding Euler–Lagrange equation holds pointwise:
$$(\Box-\mu^2)\phi=0,\qquad (i\gamma^a\partial_a-\mu)\psi=0.$$
The adjoint Dirac equation follows from the second equation because the fixed matrices satisfy $(\gamma^a)^\dagger\beta=\beta\gamma^a$. These are mathematical variation identities for commuting classical fields; they assert no quantization, Grassmann calculus, or physical measurement.

## Facts & Assumptions

**Given:** $\mu\ge0$, the fixed metric and shell conventions, the Dirac matrix representation, and the stated spaces of compactly supported smooth variations.

[A1] The parameter $\mu$ is a nonnegative inverse-length shell parameter and $\Box=-\partial_0^2+\Delta_{\mathbf x}$. [[def-qft-scalar-mass-shell]]

[F1] The Pauli matrices $\sigma_j$ are Hermitian. The fixed Dirac block representation is
$$\beta=\operatorname{diag}(I_2,-I_2),\qquad \alpha_j=\begin{pmatrix}0&\sigma_j\\\sigma_j&0\end{pmatrix},\qquad \gamma^0=\beta,\qquad \gamma^j=\beta\alpha_j,\qquad \bar z=z^\dagger\beta.$$
[[def-qft-dirac-projections]]

[F2] A variation belongs to $\mathcal D(\mathbb R^4)=C_c^\infty(\mathbb R^4;\mathbb C)$; real scalar variations are its real-valued members. [[def-test-function-space-d-of-an-open-set]]

[F3] Every open ball contains a nonnegative smooth compactly supported bump that is positive on a smaller concentric ball. [[lem-smooth-bump-between-concentric-euclidean-balls]]

[F4] The iterated integrals of the compactly supported smooth products below agree by Fubini's theorem. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

## Proof

**Given:** [A1] and [F1]–[F4].

1.1 For the scalar action, differentiating its density at $\phi+\varepsilon h$ gives
$$\delta S_\phi=-\int_{\mathbb R^4}\left(\eta^{ab}\partial_a\phi\,\partial_b h+\mu^2\phi h\right)d^4x.$$
For each coordinate, the product $\partial_a\phi\,h$ has compact support; one-dimensional integration by parts on that coordinate has zero boundary term, and Fubini [F4] permits integrating the remaining coordinates. Hence
$$\delta S_\phi=\int_{\mathbb R^4}h\left(\eta^{ab}\partial_a\partial_b\phi-\mu^2\phi\right)d^4x=\int_{\mathbb R^4}h(\Box-\mu^2)\phi\,d^4x.$$
[A1, F2, F4, given, algebra]

1.2 Put $R_D=(i\gamma^a\partial_a-\mu)\psi$. From [F1], $\beta^\dagger=\beta$ and $\beta^2=I_4$. Each $\sigma_j$ is Hermitian, so $\alpha_j^\dagger=\alpha_j$; the off-diagonal blocks give $\alpha_j\beta=-\beta\alpha_j$. Hence $\gamma^0=\beta$ is Hermitian and $(\gamma^j)^\dagger=(\beta\alpha_j)^\dagger=\alpha_j\beta=-\beta\alpha_j=-\gamma^j$, so $(\gamma^a)^\dagger\beta=\beta\gamma^a$ for every $a$. Varying $\psi$ and $\bar\psi=\psi^\dagger\beta$ together along a real parameter gives
$$\delta S_D=\int_{\mathbb R^4}\bar\chi R_D+\bar\psi(i\gamma^a\partial_a-\mu)\chi\,d^4x.$$
Integrating the second term by parts coordinatewise, with zero boundary terms since $\chi$ is compactly supported, yields
$$\delta S_D=\int_{\mathbb R^4}\bar\chi R_D+\left(-i\partial_a\bar\psi\,\gamma^a-\mu\bar\psi\right)\chi\,d^4x=2\operatorname{Re}\int_{\mathbb R^4}\chi^\dagger\beta R_D\,d^4x,$$
because $R_D^\dagger\beta=-i\partial_a\bar\psi\,\gamma^a-\mu\bar\psi$. [A1, F1, F2, F4, given, algebra]

2.1 If $(\Box-\mu^2)\phi=0$, step 1.1 makes every variation vanish. Conversely, if the smooth residual $R_\phi=(\Box-\mu^2)\phi$ is nonzero at a point, continuity gives a ball on which it has one strict sign; choosing the nonnegative bump from [F3] inside that ball gives $\int hR_\phi\ne0$. Thus scalar stationarity for all compactly supported real $h$ is equivalent to the Klein–Gordon equation. [F3, step 1.1, given]

3.1 If $R_D=0$, step 1.2 gives stationarity. Conversely, if $R_D(x_0)\ne0$, continuity gives a ball on which $|R_D|>0$. Choose a nonnegative bump $\rho$ supported there and positive on a smaller ball [F3], and take the admissible variation $\chi=\rho\,\beta R_D$. Then
$$\delta S_D=2\int_{\mathbb R^4}\rho\,|R_D|^2\,d^4x>0,$$
contradicting stationarity. Thus $R_D=0$ pointwise. Its adjoint is $-i\partial_a\bar\psi\,\gamma^a-\mu\bar\psi=0$, and conversely that adjoint equation implies $R_D=0$ since $\beta$ is invertible. [F1, F2, F3, step 1.2, given, algebra] ∎

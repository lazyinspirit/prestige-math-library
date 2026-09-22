---
id: ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map
kind: example
title: Circle rotation on complex n-space and its quadratic moment map
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-moment-map-and-component-hamiltonian, def-fundamental-vector-field-of-a-left-action, thm-the-canonical-cotangent-two-form-is-symplectic, def-poisson-bracket-on-a-symplectic-manifold, def-coadjoint-representation-of-a-lie-group, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 22, §22.3 preview of reduction, printed page 136; Homework 20, printed page 168
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Example 8.7, printed page 102
proof_strategy: direct
---

## Example

Identify $\mathbb C^n$ with $\mathbb R^{2n}$ by $z_j=x_j+iy_j$ and equip it
with the standard symplectic form
$\omega_0=\sum_{j=1}^n dx_j\wedge dy_j$; let the circle act by scalar
multiplication, $e^{i\theta}\mathbin{\cdot}z=e^{i\theta}z$. This action is
Hamiltonian, and with the library's fundamental-field convention
$\xi_M=\frac d{dt}\big|_0\exp(-t\xi)\mathbin{\cdot}p$ the moment map is the
**negative** quadratic function

$$\mu(z)=-\frac12|z|^2+c,\qquad c\in\mathbb R,$$

where the displayed real number denotes the corresponding covector under the
standard identification $(\mathfrak s^1)^*\cong\mathbb R$. The constant is a
normalization. The positive quadratic
$+\frac12|z|^2$ belongs to the opposite generator convention.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $\mathbb C^n=\mathbb R^{2n}$ with $\omega_0=\sum_jdx_j\wedge dy_j$, and the scalar circle action. Identify the Lie algebra $\mathfrak s^1=T_1S^1$ with $\mathbb R$ by $\iota(\xi)=\frac d{dt}|_0e^{it\xi}$ and its dual with $\mathbb R$ by $c\mapsto(\iota(\xi)\mapsto c\xi)$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interface.

[F1] For $\iota(\xi)\in\mathfrak s^1$ the fundamental field is $\iota(\xi)_M(z)=\left.\frac d{dt}\right|_0e^{-it\xi}z$ ([[def-fundamental-vector-field-of-a-left-action]]).

[F2] $\omega_0=\sum_jdx_j\wedge dy_j$ is symplectic and $\iota_{\partial_{x_j}}\omega_0=dy_j$, $\iota_{\partial_{y_j}}\omega_0=-dx_j$. [[thm-the-canonical-cotangent-two-form-is-symplectic]].

[F3] The component equation of the library convention is $d\mu^\xi=-\iota_{\xi_M}\omega_0$; the coadjoint action of the abelian group $S^1$ is trivial, so equivariance means invariance. [[def-moment-map-and-component-hamiltonian]], [[def-coadjoint-representation-of-a-lie-group]].



## Verification

**Proof technique:** direct.

1.1 For $\xi\in\mathbb R$ and $z_j=x_j+iy_j$, the curve $t\mapsto e^{-it\xi}z$ has velocity $$\iota(\xi)_M=\xi\sum_j(y_j\partial_{x_j}-x_j\partial_{y_j})$$ at $t=0$. [F1, given]

2.1 Contracting with $\omega_0$ using [F2] gives $$\iota_{\iota(\xi)_M}\omega_0 =\xi\sum_j\bigl(y_j\,dy_j+x_j\,dx_j\bigr) =d\Bigl(\frac{\xi}{2}|z|^2\Bigr).$$ [step 1.1, F2]

3.1 Under the dual identification in the Given block, the component of $\mu(z)=-\tfrac12|z|^2+c$ at $\iota(\xi)$ is $\mu^{\iota(\xi)}(z)=\xi(-\tfrac12|z|^2+c)$. Hence step 2.1 gives $d\mu^{\iota(\xi)}=-\iota_{\iota(\xi)_M}\omega_0$ for every $\xi$, so the displayed scalar formula defines a genuine $(\mathfrak s^1)^*$-valued moment map. [step 2.1, F3, given]

4.1 The map $\mu$ is invariant: $|e^{i\theta}z|=|z|$. Since the coadjoint action of $S^1$ is trivial, invariance is equivariance, so $\mu$ is an equivariant moment map. The opposite quadratic $+\frac12|z|^2$ has differential $+\iota_{\xi_M}\omega_0$ and therefore does not satisfy the library equation. [step 3.1, F3, A1] ∎

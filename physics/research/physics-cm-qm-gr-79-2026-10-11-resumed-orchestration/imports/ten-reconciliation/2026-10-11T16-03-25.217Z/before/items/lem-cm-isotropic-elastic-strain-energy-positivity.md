---
id: lem-cm-isotropic-elastic-strain-energy-positivity
kind: lemma
title: "The isotropic elastic strain energy is $\\mu|e_0|_F^2+(\\lambda/2+\\mu/3)(\\operatorname{tr}e)^2$, hence positive definite under $\\mu>0$, $\\lambda+2\\mu/3>0$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-linear-elastic-constitutive-law, def-matrix-space, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-trace-of-a-square-matrix, prop-trace-is-linear, thm-trace-of-ab-equals-trace-of-ba, def-euclidean-inner-product]
dependency_roles:
  def-cm-linear-elastic-constitutive-law: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-trace-of-a-square-matrix: mathematical-premise
  prop-trace-is-linear: mathematical-premise
  thm-trace-of-ab-equals-trace-of-ba: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 11.2 and Problem 11.5 (strain energy; positive definiteness of the elasticity tensor for an isotropic material)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 7.3 (the elastic potential energy density and the elastic moduli)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
---

## Statement

Let $e\in\operatorname{Sym}(3)$ with deviatoric part $e_0=e-\frac{\operatorname{tr}e}{3}I_3$ and Lamé parameters $\lambda,\mu\in\mathbb R$ with $\mu>0$ and $\lambda+\frac{2\mu}{3}>0$ ([[def-cm-linear-elastic-constitutive-law]]). Then

$$W(e)=\mu\,|e_0|_F^2+\Bigl(\frac{\lambda}{2}+\frac{\mu}{3}\Bigr)(\operatorname{tr}e)^2\ \ge\ 0,$$

and $W(e)=0$ if and only if $e=0$. Here $|A|_F^2=\operatorname{tr}(A^{\mathsf T}A)$ is the squared Frobenius norm ([[def-euclidean-inner-product]], [[def-trace-of-a-square-matrix]]).

## Facts & Assumptions

**Given:** A symmetric $3\times3$ matrix $e$ and Lamé parameters $\lambda,\mu$ with the stated inequalities.

[F1] Definitions: $W(e)=\frac{\lambda}{2}(\operatorname{tr}e)^2+\mu\operatorname{tr}(e^2)$, $e_0=e-\frac{\operatorname{tr}e}{3}I_3$, and $|A|_F^2=\operatorname{tr}(A^{\mathsf T}A)$ is the sum over the entries squared ([[def-cm-linear-elastic-constitutive-law]], [[def-trace-of-a-square-matrix]], [[def-matrix-space]]).

[F2] Trace identities: $\operatorname{tr}$ is linear, $\operatorname{tr}(XY)=\operatorname{tr}(YX)$ for square matrices of equal size, and $\operatorname{tr}(I_3)=3$; transposition satisfies $(A^{\mathsf T})^{\mathsf T}=A$ and $(A+B)^{\mathsf T}=A^{\mathsf T}+B^{\mathsf T}$ ([[prop-trace-is-linear]], [[thm-trace-of-ab-equals-trace-of-ba]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]]).

## Proof

**Proof technique:** direct; expand the Frobenius norm of the deviatoric part and compare with $W$.

1.1 Since $e$ is symmetric, $e^{\mathsf T}=e$ and $\operatorname{tr}(e^2)=\operatorname{tr}(e^{\mathsf T}e)=|e|_F^2$. Also $\operatorname{tr}(e_0)=0$ because $\operatorname{tr}$ is linear and $\operatorname{tr}I_3=3$. [F1, F2, algebra]

2.1 Expand $|e_0|_F^2=\operatorname{tr}\bigl((e-\tfrac{\operatorname{tr}e}{3}I_3)^2\bigr)=\operatorname{tr}(e^2)-2\tfrac{\operatorname{tr}e}{3}\operatorname{tr}(e)+\tfrac{(\operatorname{tr}e)^2}{9}\operatorname{tr}(I_3)=|e|_F^2-\tfrac{2}{3}(\operatorname{tr}e)^2+\tfrac{1}{3}(\operatorname{tr}e)^2=|e|_F^2-\tfrac{1}{3}(\operatorname{tr}e)^2$, using linearity of the trace and step 1.1. [F1, F2, step 1.1, algebra]

3.1 Substituting $\operatorname{tr}(e^2)=|e|_F^2=|e_0|_F^2+\tfrac13(\operatorname{tr}e)^2$ from the preceding steps into [F1] gives $$W(e)=\frac{\lambda}{2}(\operatorname{tr}e)^2+\mu\Bigl(|e_0|_F^2+\frac{1}{3}(\operatorname{tr}e)^2\Bigr)=\mu\,|e_0|_F^2+\Bigl(\frac{\lambda}{2}+\frac{\mu}{3}\Bigr)(\operatorname{tr}e)^2 .$$ [F1, step 1.1, step 2.1, algebra]

4.1 Both coefficients are positive: $\mu>0$, and $\frac{\lambda}{2}+\frac{\mu}{3}=\frac{3\lambda+2\mu}{6}=\frac{3}{6}\bigl(\lambda+\frac{2\mu}{3}\bigr)>0$ by hypothesis. Since both summands are nonnegative, $W(e)\ge0$. If $W(e)=0$, then $\mu|e_0|_F^2=0$ and $(\operatorname{tr}e)^2=0$; as $|e_0|_F^2$ is a sum of squares, $e_0=0$, and $\operatorname{tr}e=0$, so $e=e_0+\frac{\operatorname{tr}e}{3}I_3=0$. Conversely $W(0)=0$. [step 3.1, given, algebra] ∎

## Remarks

- The decomposition is the standard deviatoric/volumetric split: $W$ is the sum of a shear term controlled by $\mu$ and a volumetric term controlled by the bulk modulus $K=\lambda+\frac{2\mu}{3}$. The hypotheses are exactly the inequalities needed for both coefficients to be positive; they are strictly weaker than requiring $\lambda>0$.

- No stress-strain inversion, no bounds on the stress matrix, and no constitutive interpretation beyond the stated model are asserted. The lemma is a statement about symmetric matrices.

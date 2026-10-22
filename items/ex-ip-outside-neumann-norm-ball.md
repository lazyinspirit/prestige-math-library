---
id: ex-ip-outside-neumann-norm-ball
kind: example
title: A compactly supported contrast with volume-operator norm greater than two
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - cor-vector-valued-ftc-and-lipschitz-bound
  - def-countable-choice
  - def-euclidean-inner-product
  - def-ip-fixed-frequency-far-field-data
  - def-operator-norm
  - def-pi-via-first-positive-cosine-zero
  - def-volume-integral-scattering-model
  - lem-volume-integral-operator-well-defined-and-bounded
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
  - thm-lebesgue-measure-of-a-box-of-every-kind
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the volume model, box-measure theorem, and complex L2 operator theorem. The norm lower bound itself uses no full Axiom of Choice."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Fioralba Cakoni, David Colton, and Houssem Haddar, Inverse Scattering Theory and Transmission Eigenvalues, CBMS 88"
      url: "https://sites.math.rutgers.edu/~fc292/CCH-Book-Final.pdf"
      locator: "Chapter 1, §1.2, printed pp. 7–12: outgoing Helmholtz volume equation and contrast convention"
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, University of Vienna, Sommersemester 2015"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "Chapter 5, §5.2.6, printed pp. 79–82: inhomogeneous-medium volume equation"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

Assume Countable Choice. At wavenumber $k=1$, let $D=[0,1/4]^3$ and let the contrast be the constant $q(y)=512\pi$ on $D$, extended by zero outside. In the outgoing volume model, the associated operator satisfies $\|K_{q,1}\|_{L^2(D)\to L^2(D)}>2$. Thus this contrast lies outside the small-norm domain used for the Born linearization. This example makes no claim that the exact scattering equation has no solution or is nonunique.

## Example references

[[def-ip-fixed-frequency-far-field-data|The small-norm domain is $\rho_k(q)=\|K_{q,k}\|<1$.]]

[[def-volume-integral-scattering-model|The outgoing operator uses $G_k(z)=e^{ik|z|}/(4\pi|z|)$.]]

[[lem-volume-integral-operator-well-defined-and-bounded|The L2 operator is well-defined and bounded for bounded contrasts on finite-volume sets.]]


[[cor-vector-valued-ftc-and-lipschitz-bound|A vector-valued function with derivative norm at most $L$ is $L$-Lipschitz.]]


[[def-operator-norm|The operator norm is the supremum over the unit ball.]]

[[def-pi-via-first-positive-cosine-zero|The constant $\pi$ is positive.]]

## Facts & Assumptions

**Given:** Countable Choice, the cube $D=[0,1/4]^3$, $k=1$, $q=512\pi\,1_D$, and the volume operator $K_{q,1}$.

[F1] The volume model defines $K_{q,1}$ by the kernel $e^{i|x-y|}/(4\pi|x-y|)$ off the diagonal and uses the zero representative on the diagonal; the operator lemma identifies its L2 value with this a.e. kernel integral ([[def-volume-integral-scattering-model]], [[lem-volume-integral-operator-well-defined-and-bounded]]).

[F2] The closed box $D$ is Lebesgue measurable and has volume $(1/4)^3=1/64$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F3] The Euclidean norm on $\mathbb R^3$ is $\sqrt{x_1^2+x_2^2+x_3^2}$, so every $x,y\in D$ satisfy $|x-y|\le\sqrt3/4<1/2$ ([[def-euclidean-inner-product]]).

[F4] For real $t$, $|\exp(it)|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F5] For real $r\ge0$, the curve $s\mapsto \exp(irs)$ has derivative $ir\exp(irs)$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]); a differentiable curve with derivative norm bounded by $r$ is $r$-Lipschitz ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[F6] The constant function $1_D$ is a nonzero vector of $L^2(D)$ with norm $\sqrt{|D|}$, and the complex $L^2$ pairing obeys Cauchy–Schwarz ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F7] The operator norm is $\|T\|=\sup_{\|x\|\le1}\|Tx\|$ ([[def-operator-norm]]).

[F8] The number $\pi$ is positive ([[def-pi-via-first-positive-cosine-zero]]).

[F9] The small-norm domain is $\mathcal U_{D,k}=\{q:\|K_{q,k}\|<1\}$ ([[def-ip-fixed-frequency-far-field-data]]).



[A1] Countable Choice is assumed in the volume model and bounded-operator supplier ([[def-countable-choice]]).

## Verification

**Given:** The data above.

1.1 By [F2], $M=|D|=1/64$. By [F3], every distance in $D$ is at most $\sqrt3/4$, and opposite corners attain this value, so $d:=\operatorname{diam}(D)=\sqrt3/4<1/2$. The indicator $1_D$ is a nonzero $L^2$ class. [given, F2, F3]

2.1 For $0\le r\le d$, the curve $\gamma(s)=e^{irs}$ on $[0,1]$ has derivative $\gamma'(s)=ir e^{irs}$, whose modulus is $r$ by [F4]. Fact [F5] gives $|e^{ir}-1|\le r$, and hence $\operatorname{Re}(e^{ir})\ge1-r\ge1-d>1/2$. [F4, F5, step 1.1, algebra]

3.1 For almost every $x\in D$, the kernel integral in [F1] represents $K_{q,1}1_D(x)$. For such an $x$, almost every $y\in D$ has $r=|x-y|$ in $(0,d]$ by step 1.1, and [F1] gives $\operatorname{Re}G_1(x-y)=\frac{\operatorname{Re}(e^{ir})}{4\pi r}>\frac{1}{8\pi d}.$ The measurable function $y\mapsto\operatorname{Re}G_1(x-y)-1/(8\pi d)$ is positive almost everywhere on the positive-measure set $D$, so some set where it exceeds $1/n$ has positive measure and its integral is strictly positive. Integrating the pointwise lower bound against $q=512\pi>0$ therefore yields $\operatorname{Re}(K_{q,1}1_D)(x)>qM/(8\pi d)=1/d=4/\sqrt3>2$ for almost every $x\in D$; the last inequality follows by squaring the positive sides of $\sqrt3<2$. [A1, F1, F8, step 1.1, step 2.1, algebra]

4.1 By step 3.1, $g:=|K_{q,1}1_D|^2-4$ is positive almost everywhere on $D$; [F1] and [A1] put $K_{q,1}1_D$ in $L^2(D)$, so $g$ is integrable. Since $M>0$ by step 1.1, the sets $\{x\in D:g(x)>1/n\}$ cannot all be null, as their countable union contains the positive-measure set where $g>0$. Thus for some $n$, the set $\{x\in D:g(x)>1/n\}$ has positive measure, so $\int_D g\ge |\{g>1/n\}|/n>0$; hence $\|K_{q,1}1_D\|_2^2>4M=4\|1_D\|_2^2$. The unit-ball supremum in [F7] gives $\|K_{q,1}\|>2$. By [F9] the contrast lies outside $\mathcal U_{D,1}$, so the small-norm model branch does not apply; no nonexistence or nonuniqueness conclusion follows. [A1, F1, F6, F7, F9, step 1.1, step 3.1, algebra] ∎

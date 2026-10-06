---
id: "ex-nonsymmetric-coercive-elliptic-form"
kind: "example"
title: "A nonsymmetric coercive elliptic form"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 7
deps:
  - "cor-symmetric-lax-milgram-is-energy-minimisation"
  - "def-axiom-of-choice"
  - "def-complex-lp-and-euclidean-test-function-conventions"
  - "def-countable-choice"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-test-function-space-d-of-an-open-set"
  - "def-uniformly-elliptic-divergence-form-operator"
  - "def-weak-dirichlet-solution-for-a-divergence-form-operator"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-coercivity-of-the-principal-dirichlet-form"
  - "lem-elliptic-form-is-well-defined-and-bounded"
  - "lem-w-one-two-is-a-hilbert-space"
  - "def-the-standard-smooth-step-function"
  - "thm-chain-rule"
  - "lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands"
  - "rem-nonsymmetric-lax-milgram-is-not-a-scalar-minimisation-principle"
  - "thm-holder-inequality-for-integrals"
  - "thm-algebra-of-derivatives"
  - "thm-ftc-second-part"
  - "thm-lax-milgram"
  - "thm-tonelli-and-fubini-for-completed-product-measures"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§5.1, the nonsymmetric form $\\alpha(u,v)$ with the first-order term, printed p. 101"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.6, the general linear second-order elliptic operator with drift, printed pp. 101–103"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§9.5, nonsymmetric elliptic operators solved by Lax–Milgram, printed pp. 291–298"
---

## Example

Assume the Axiom of Choice and Countable Choice. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be nonempty, open and bounded in one direction, and let $C_P$ be its Poincar\'e constant for $W^{1,2}_0$. Set $b=e_1$ and define $$a(u,v):=\int_\Omega\nabla u\cdot\overline{\nabla v}\,dx+\int_\Omega\partial_1u\,\overline v\,dx\qquad(u,v\in H^1_0(\Omega)).$$ This is a bounded sesquilinear form with bound $2$ and is coercive with constant $1/(1+C_P^2)$. It is not symmetric: choose $x_0\in\Omega$ with $x_{0,2}\ne0$, a ball $B_r(x_0)\subset\Omega$, a nonzero real radial bump $\eta$ supported in that ball, and put $u=x_2\eta$, $v=x_1\eta$. Then $$a(u,v)-\overline{a(v,u)}=-\int_\Omega x_2\eta^2\,dx=-x_{0,2}\int_\Omega\eta^2\,dx\ne0.$$ Thus Lax--Milgram ([[thm-lax-milgram]]) applies to this weak Dirichlet problem for $Lu=-\Delta u+\partial_1u$, while the minimisation characterisation of [[cor-symmetric-lax-milgram-is-energy-minimisation]] does not apply. This is the companion example of [[rem-nonsymmetric-lax-milgram-is-not-a-scalar-minimisation-principle]] and of the drift term in [[cex-a-large-adverse-zero-order-term-destroys-dirichlet-coercivity]].

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; $n\ge2$; a nonempty open $\Omega\subseteq\mathbb R^n$ bounded in one direction; $b=e_1$; the form $a$ above; and the stated bump supported in a ball about $x_0$ with $x_{0,2}\ne0$.

[F1] Since $b=e_1$ has $\|b\|_{L^\infty}=1$, Cauchy--Schwarz gives $|a(u,v)|\le\|\nabla u\|_2\|\nabla v\|_2+\|\nabla u\|_2\|v\|_2\le2\|u\|_{H^1_0}\|v\|_{H^1_0}$; the form is bounded and sesquilinear ([[lem-elliptic-form-is-well-defined-and-bounded]], [[def-uniformly-elliptic-divergence-form-operator]], [[thm-holder-inequality-for-integrals]]).

[F2] Poincar\'e gives $\|u\|_{H^1_0}^2\le(1+C_P^2)\|\nabla u\|_2^2$, so the principal form has coercivity constant $1/(1+C_P^2)$ ([[lem-coercivity-of-the-principal-dirichlet-form]], [[lem-w-one-two-is-a-hilbert-space]], [[def-sobolev-space-wkp-and-its-norm]]).

[F3] For $\varphi\in C_c^\infty(\Omega)$, its zero extension is smooth and compactly supported in $\mathbb R^n$. Choose $R>0$ so that its support lies in $(-R,R)^n$. For each fixed $x'=(x_2,\ldots,x_n)$, the function $t\mapsto|\varphi(t,x')|^2$ has compact support in $(-R,R)$, so the one-dimensional fundamental theorem gives $\int_{-R}^R\partial_1|\varphi(t,x')|^2\,dt=0$. Fubini on the cube then gives $\int_\Omega\partial_1|\varphi|^2=0$, hence $\operatorname{Re}\int_\Omega\partial_1\varphi\,\overline\varphi=0$. Also $C_c^\infty(\Omega)$ is dense in $H^1_0(\Omega)$, and $u\mapsto\int_\Omega\partial_1u\,\overline u$ is continuous in the $H^1$ norm by Cauchy--Schwarz and [F1] ([[thm-ftc-second-part]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[def-test-function-space-d-of-an-open-set]], [[def-wkp-zero-as-a-sobolev-closure]], [[thm-holder-inequality-for-integrals]]).

[F4] The coordinate product rule gives $\partial_1(x_2\eta)=x_2\partial_1\eta$ and $\partial_1(x_1\eta)=\eta+x_1\partial_1\eta$ ([[thm-algebra-of-derivatives]]). For a radial bump about $x_0$, reflection $x_2\mapsto2x_{0,2}-x_2$ leaves $\eta^2$ unchanged and has absolute Jacobian $1$; applying [[lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands]] on $\mathbb R^n$ to $(x_2-x_{0,2})\eta^2$ shows its integral equals its negative, hence is zero.

[F5] The standard smooth step $\sigma$ is smooth, takes values in $[0,1]$, vanishes for $t\le0$ and equals $1$ for $t\ge1$ ([[def-the-standard-smooth-step-function]]). Repeated coordinate chain and product rules give smoothness of its composition with a polynomial ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[F6] The real or complex Hilbert space $H^1_0(\Omega)$ is complete, and Lax--Milgram applies to every bounded coercive sesquilinear form without symmetry; the energy-minimisation conclusion requires symmetry ([[lem-w-one-two-is-a-hilbert-space]], [[thm-lax-milgram]], [[cor-symmetric-lax-milgram-is-energy-minimisation]], [[rem-nonsymmetric-lax-milgram-is-not-a-scalar-minimisation-principle]], [[def-weak-dirichlet-solution-for-a-divergence-form-operator]]).

## Proof

**Given:** The Axiom of Choice and Countable Choice; the stated $\Omega$, $b=e_1$ and form; and the bump $\eta$.

1.1 Boundedness: by [F1] the form is bounded with $|a(u,v)|\le2\|u\|_{H^1_0}\|v\|_{H^1_0}$ and is linear in its first argument and conjugate-linear in its second. [F1]

1.2 The drift has zero real part: for $\varphi\in C_c^\infty(\Omega)$, [F3] gives $2\operatorname{Re}\int_\Omega\partial_1\varphi\,\overline\varphi=\int_\Omega\partial_1|\varphi|^2=0$. By continuity and density in [F3], this extends to every $u\in H^1_0(\Omega)$, so $\operatorname{Re}a(u,u)=\|\nabla u\|_2^2$. [F3]

1.3 Nonsymmetry: openness and nonemptiness of $\Omega$ give $x_0\in\Omega$ with $x_{0,2}\ne0$ and a ball $B_r(x_0)\subset\Omega$. Set $s=3r/4$ and $\eta(x)=\sigma((s^2-|x-x_0|^2)/(s^2-r^2/4))$. By [F5] this is a smooth real radial function, equals $1$ on $\overline B_{r/2}(x_0)$ and vanishes outside $B_s(x_0)$; hence its support is contained in $\overline B_s(x_0)\subset B_r(x_0)$ and $\int\eta^2>0$. Thus $u=x_2\eta$ and $v=x_1\eta$ are admissible smooth compactly supported tests. Their principal parts cancel, and [F4] gives $$a(u,v)-\overline{a(v,u)}=\int_\Omega(\partial_1u\,v-\partial_1v\,u)\,dx=-\int_\Omega x_2\eta^2\,dx=-x_{0,2}\int_\Omega\eta^2\,dx\ne0.$$ [F3, F4, F5, algebra, construct]

2.1 Coercivity and solvability: by [F2] and step 1.2, $\operatorname{Re}a(u,u)=\|\nabla u\|_2^2\ge(1+C_P^2)^{-1}\|u\|_{H^1_0}^2$, so the bounded form is coercive. Lax--Milgram gives the weak Dirichlet solution, while the minimisation result does not apply to this nonsymmetric form. [F1, F2, F6, step 1.2, step 1.3]

3.1 Conclusion: $b=e_1$ gives a concrete bounded, coercive, nonsymmetric form on every such nonempty open $\Omega$ in dimension $n\ge2$; the example demonstrates exactly why symmetry is required for the energy-minimisation characterization. [F6, step 2.1, step 1.3] ∎

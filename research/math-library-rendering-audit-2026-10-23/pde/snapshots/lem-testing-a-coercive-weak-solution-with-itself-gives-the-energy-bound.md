---
id: "lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound"
kind: "lemma"
title: "Testing a coercive weak solution with itself gives the energy bound"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 5
deps:
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-bounded-linear-operator"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-hilbert-space"
  - "def-operator-norm"
  - "def-weak-dirichlet-solution-for-a-divergence-form-operator"
  - "thm-lax-milgram"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.5, the energy estimate underlying Theorem 4.11, printed pp. 99–101"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, the coercivity estimate used to bound the solution operator, printed pp. 72–73"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§5.3, the estimate $|u|\\le|\\varphi|/\\alpha$ for the Lax–Milgram solution, printed p. 140"
---

## Statement

Let $H$ be a real or complex Hilbert space, $a$ a bounded coercive sesquilinear form with constant $\alpha>0$, $F$ a bounded conjugate-linear functional on $H$, and $u\in H$ a solution of $a(u,v)=F(v)$ for all $v\in H$. Then $$\alpha\|u\|^2\le\operatorname{Re}a(u,u)=\operatorname{Re}F(u)\le\|F\|\,\|u\|,\qquad\text{hence }\alpha\|u\|\le\|F\| .$$ The bound is a priori in the sense that it uses only the equation, coercivity and the norm of the datum, not the construction of $u$; it applies directly to homogeneous Dirichlet solutions $u\in H^1_0(\Omega)$ of [[def-weak-dirichlet-solution-for-a-divergence-form-operator]] after substituting their coercivity constants. For an inhomogeneous Dirichlet solution, first subtract a lifting to obtain a solution in $H^1_0(\Omega)$ and use its residual datum; the original solution need not itself be an admissible test.

## Facts & Assumptions

**Given:** A real or complex Hilbert space $H$; a bounded coercive sesquilinear form $a$ with coercivity constant $\alpha>0$; a bounded conjugate-linear functional $F$ with $\|F\|=\sup_{\|v\|\le1}|F(v)|$; and a vector $u\in H$ with $a(u,v)=F(v)$ for every $v\in H$.

[F1] Coercivity: $\operatorname{Re}a(u,u)\ge\alpha\|u\|^2$; and $\operatorname{Re}F(u)\le|F(u)|\le\|F\|\,\|u\|$, since $\operatorname{Re}z\le|z|$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[def-operator-norm]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[def-bounded-linear-operator]], [[def-hilbert-space]]).

[F2] The equation with the test $v=u$ reads $a(u,u)=F(u)$ ([[thm-lax-milgram]] gives existence and uniqueness if Countable Choice is additionally assumed; here the identity uses only the assumed equation).



## Proof

1.1 Testing with the solution: substitute $v=u$ in the assumed equation, obtaining $a(u,u)=F(u)$ and hence, taking real parts, $\operatorname{Re}a(u,u)=\operatorname{Re}F(u)$. [F2, given]

2.1 Two-sided bound: by coercivity, $\alpha\|u\|^2\le\operatorname{Re}a(u,u)=\operatorname{Re}F(u)\le|F(u)|\le\|F\|\,\|u\|$. If $u\ne0$, divide by $\|u\|$ to obtain $\alpha\|u\|\le\|F\|$; if $u=0$, the same inequality holds trivially. The estimate uses only the equation, coercivity and the datum norm, not any construction of $u$. [F1, step 1.1, algebra] ∎ 

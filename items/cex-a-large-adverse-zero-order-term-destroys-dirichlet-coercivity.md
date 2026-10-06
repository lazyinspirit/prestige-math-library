---
id: "cex-a-large-adverse-zero-order-term-destroys-dirichlet-coercivity"
kind: "counterexample"
title: "A large adverse zero-order term destroys Dirichlet coercivity"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 7
deps:
  - "cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives"
  - "def-axiom-of-choice"
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-countable-choice"
  - "def-integral-over-a-measurable-set"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-the-standard-smooth-step-function"
  - "def-uniformly-elliptic-divergence-form-operator"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-integral-elementary-bounds"
  - "lem-sharp-dirichlet-poincare-inequality-on-an-interval"
  - "lem-w-one-two-is-a-hilbert-space"
  - "thm-additivity-over-subintervals"
  - "thm-algebra-of-derivatives"
  - "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral"
  - "thm-chain-rule"
  - "thm-complex-holder-minkowski-and-the-quotient-norm"
  - "thm-continuous-implies-integrable"
  - "thm-extreme-value-r"
  - "thm-ftc-second-part"
  - "thm-holder-inequality-for-integrals"
  - "thm-lax-milgram"
  - "thm-lax-milgram-solvability-for-coercive-divergence-form-equations"
  - "thm-linearity-of-the-integral"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.5, Existence and failure: the discussion of $\\mu<0$ and the loss of solvability for the Dirichlet problem, printed pp. 99–101"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.7, the G\\r{a}rding shift and the role of the sign of $c$, printed pp. 103–105"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, strict coercivity is exactly what the Lax–Milgram application needs, printed pp. 72–75"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§5.1, the zero-eigenvalue hypothesis in Theorem 5.1 and its failure, printed pp. 101–104"
---

## Statement refuted

Assume the Axiom of Choice inherited through the cited general solvability theorem, together with Countable Choice. Let $I=(0,1)$, $c\ge0$ and
$$a_c(u,v)=\int_0^1u'\overline{v'}\,dx-c\int_0^1u\overline v\,dx\qquad(u,v\in H^1_0(I)).$$
The sharp constant is $C_P=1/\pi$ by [[lem-sharp-dirichlet-poincare-inequality-on-an-interval]]. For $0\le c<\pi^2$, the form is coercive with constant $(\pi^2-c)/(1+\pi^2)$ in the standard $H^1$ norm, and [[thm-lax-milgram]] gives a unique weak solution for every bounded conjugate-linear functional. For $c\ge\pi^2$, the nonzero test $\phi(x)=\sin(\pi x)$ gives $a_c(\phi,\phi)=(\pi^2-c)\|\phi\|_2^2\le0$, so the form is not coercive. At the endpoint $c=\pi^2$, the helper's weak identity gives $a_c(\phi,v)=0$ for every $v\in H^1_0(I)$: both $0$ and $\phi$ solve the homogeneous weak Dirichlet problem. The original polynomial witness also remains valid: $p(x)=x(1-x)\in H^1_0(I)$ satisfies $\|p'\|_2^2=1/3$ and $\|p\|_2^2=1/30$, hence $a_c(p,p)=1/3-c/30\le0$ for $c\ge10$.
Thus the lower-order sign/smallness mechanism in [[thm-lax-milgram-solvability-for-coercive-divergence-form-equations]] cannot be omitted. In this interval model its energy argument with the local sharp constant gives the exact coercivity condition $c<1/C_P^2=\pi^2$; the generic Poincare supplier itself is not claimed to provide that numerical constant.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the interval $I=(0,1)$; a real constant $c\ge0$; the form $a_c(u,v)=\int_0^1u'\overline{v'}\,dx-c\int_0^1u\overline v\,dx$ on $H^1_0(I)$; and the helper function $\phi(x)=\sin(\pi x)$.

[F1] Sharp interval inequality and witness: $\|u\|_{L^2}\le(1/\pi)\|u'\|_{L^2}$ for $u\in H^1_0(I)$; $\phi\in H^1_0(I)$ is nonzero, $\phi'\phi$-identities hold, and $\int_0^1\phi'\overline{v'}\,dx=\pi^2\int_0^1\phi\overline v\,dx$ for every $v\in H^1_0(I)$ ([[lem-sharp-dirichlet-poincare-inequality-on-an-interval]]).

[F2] Hilbert structure: $H^1_0(I)$ is a Hilbert space with $\|u\|_{H^1}^2=\|u\|_{L^2}^2+\|u'\|_{L^2}^2$, and bounded coercive forms on it have unique solutions for every bounded conjugate-linear datum ([[lem-w-one-two-is-a-hilbert-space]], [[thm-lax-milgram]], [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F3] Estimates: $|a_c(u,v)|\le\|u'\|_{L^2}\|v'\|_{L^2}+c\|u\|_{L^2}\|v\|_{L^2}\le(1+c)\|u\|_{H^1}\|v\|_{H^1}$ by H\"older; and $\|u\|_{H^1}^2\le(1+1/\pi^2)\|u'\|_{L^2}^2$ by [F1] ([[thm-holder-inequality-for-integrals]], [[thm-complex-holder-minkowski-and-the-quotient-norm]], [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F4] Cutoff construction on the interval: the standard smooth step $\sigma$ has $\sigma'\equiv0$ outside $(0,1)$ and $C_\sigma:=\sup|\sigma'|<\infty$; chain and product rules give derivatives of $\eta_m(x)=\sigma(mx-1)\sigma(m(1-x)-1)$; elementary interval bounds, additivity over subintervals, linearity of the integral, and the agreement of the Riemann and Lebesgue integrals for bounded Riemann integrable functions on a closed interval control the resulting $L^2$ norms ([[def-the-standard-smooth-step-function]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-extreme-value-r]], [[lem-integral-elementary-bounds]], [[thm-additivity-over-subintervals]], [[thm-linearity-of-the-integral]], [[thm-continuous-implies-integrable]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[F5] The fundamental theorem of calculus and the absolutely continuous representative of a one-dimensional Sobolev class control the polynomial integrals below ([[thm-ftc-second-part]], [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]], [[def-integral-over-a-measurable-set]], [[def-l-p-space-as-a-quotient-by-null-functions]]).





## Proof

1.1 Coercivity below the threshold: for $0\le c<\pi^2$ and $u\in H^1_0(I)$, $a_c(u,u)=\|u'\|_{L^2}^2-c\|u\|_{L^2}^2\ge(1-c/\pi^2)\|u'\|_{L^2}^2$ by [F1], and $\|u\|_{H^1}^2\le(1+1/\pi^2)\|u'\|_{L^2}^2$, so $a_c(u,u)\ge\frac{\pi^2-c}{1+\pi^2}\|u\|_{H^1}^2$: the form is coercive with constant $(\pi^2-c)/(1+\pi^2)$ and bounded by [F3]; Lax--Milgram gives a unique solution for every bounded conjugate-linear functional. [F1, F2, F3, algebra]

1.2 Failure at and above the threshold: the helper witness satisfies $\phi\in H^1_0(I)$, $\phi\ne0$, and $a_c(\phi,\phi)=\|\phi'\|_{L^2}^2-c\|\phi\|_{L^2}^2=(\pi^2-c)\|\phi\|_{L^2}^2$ by the weak identity of [F1] with $v=\phi$. For $c\ge\pi^2$ this is at most $0$ while $\phi\ne0$, so no $\alpha>0$ can satisfy $\operatorname{Re}a_c(u,u)\ge\alpha\|u\|^2$ for all $u$: coercivity fails. [F1, algebra]

1.3 Polynomial witness: let $p(x)=x(1-x)$. Then $p$ is smooth on $[0,1]$, $p(0)=p(1)=0$, $|p(x)|\le\min(x,1-x)$ and $|p'(x)|\le1$; for $m\ge4$ put $\eta_m(x)=\sigma(mx-1)\sigma(m(1-x)-1)$ and $p_m:=\eta_mp\in C_c^\infty(I)$. As in [F4], $|\eta_m'|\le2mC_\sigma$, $p_m=p$ on $[2/m,1-2/m]$, and on the two endpoint strips $|p_m-p|\le2/m$ and $|(p_m-p)'|\le4C_\sigma+1$; hence $\|p_m-p\|_{L^2}^2\le4/m^2$ and $\|(p_m-p)'\|_{L^2}^2\le(4C_\sigma+1)^2\cdot4/m$, so $p_m\to p$ in $H^1$ and $p\in H^1_0(I)$. The fundamental theorem and linearity give $\int_0^1p'^2=\int_0^1(1-2x)^2\,dx=1-2+\frac43=\frac13$ and $\int_0^1p^2=\int_0^1(x^2-2x^3+x^4)\,dx=\frac13-\frac12+\frac15=\frac1{30}$; hence $a_c(p,p)=\frac13-\frac c{30}\le0$ for $c\ge10$. [F4, F5, algebra]

2.1 Endpoint nonuniqueness: at $c=\pi^2$ the same weak identity gives $a_{\pi^2}(\phi,v)=0$ for every $v\in H^1_0(I)$; since $\phi\ne0$, both the zero function and $\phi$ solve the homogeneous weak Dirichlet problem, so uniqueness fails at the endpoint. No claim is made here about nonuniqueness for $c>\pi^2$. [F1, step 1.2]

3.1 Conclusion: for $0\le c<\pi^2$ the form is coercive with the explicit constant and Lax--Milgram applies; for $c\ge\pi^2$ the nonzero sine witness destroys coercivity with equality of the quadratic form on $\phi$ at the endpoint, where nonuniqueness is explicit; the polynomial witness independently witnesses failure for $c\ge10$. Therefore the sign/smallness mechanism of the general solvability theorem cannot be omitted, and in this interval model the exact threshold is $c<1/C_P^2=\pi^2$. [step 1.1, step 2.1, step 1.3] ∎

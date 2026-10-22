---
id: thm-nrqmx-free-laplacian-form-domain
kind: theorem
domain: mathematics
library: mathematics
title: Free Laplacian form domain and realization
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators
  - thm-nrqmx-closed-form-representation
  - def-nrqm-coulomb-closed-semibounded-forms
  - def-sobolev-space-wkp-and-its-norm
  - thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - thm-plancherel
  - thm-cauchy-schwarz-in-an-inner-product-space
  - lem-schwartz-space-is-dense-in-l-two
  - thm-locally-integrable-functions-embed-in-distributions
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-nrqmx-closed-form-representation: mathematical-premise
  def-nrqm-coulomb-closed-semibounded-forms: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  lem-schwartz-space-is-dense-in-l-two: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Phan Thanh Nam, Functional Analysis II, lecture notes, Winter 2020-2021,
        Ludwig-Maximilians-Universität München
      url: https://www.math.lmu.de/~nam/LectureNotesFA2021.pdf
      locator: "Chapter 2, §2.5, printed pp.25-27: the free Schrödinger operator on H²
        and its quadratic-form domain."
    - title: Marcello Porta, Mathematical Quantum Theory, University of Tübingen
        lecture notes (2019)
      url: https://www.math.uni-tuebingen.de/de/forschung/maphy/lehre/ss-2019/quantumtheory/dateien/notes.pdf
      locator: "Sections 3.1 and 3.6, printed pp.7-8 and 23-24: Fourier transform
        convention and unitary L² extension used in the free-operator
        calculation."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Choice and Countable Choice. On
$H=L^2(\mathbb R^3;\mathbb C)$ use the unitary Fourier transform
$\widehat u(\xi)=\int_{\mathbb R^3}e^{-2\pi i x\cdot\xi}u(x)\,dx$ on
$L^1\cap L^2$. Let $H_0=-\Delta$ be the self-adjoint multiplier
$\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$ with domain
$D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$. Put
$Q_0=W^{1,2}(\mathbb R^3;\mathbb C)$ and
$$q_0(u,v)=\sum_{j=1}^3\langle \partial_j u,\partial_j v\rangle_{L^2}\quad(u,v\in Q_0),$$
where $\partial_j$ are weak derivatives. Then $q_0$ is dense, symmetric,
nonnegative, and closed; its associated self-adjoint operator is exactly $H_0$,
with $Q(H_0)=D(H_0^{1/2})=Q_0$ and
$$q_0(u,v)=\langle H_0u,v\rangle\quad(u\in D(H_0),\ v\in Q_0).$$

## Statement references

[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]

[[def-sobolev-space-wkp-and-its-norm]]

[[thm-nrqmx-closed-form-representation]]

## Facts & Assumptions

**Given:** Choice and Countable Choice, $H=L^2(\mathbb R^3;\mathbb C)$,
$\mathcal F_2$ with the stated $2\pi$ convention, and weak-derivative spaces
$W^{1,2}$ and $W^{2,2}$.

[A1] Choice and Countable Choice are the hypotheses of the cited free
multiplier, Fourier-Sobolev and Plancherel suppliers
([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] The free operator is self-adjoint with
$H_0=\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$ and
$D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$; it is nonnegative
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]).

[F2] $\mathcal F_2$ is unitary, uses
$\widehat u(\xi)=\int e^{-2\pi ix\cdot\xi}u(x)\,dx$ on $L^1\cap L^2$, and
$\mathcal F_2(\partial_j u)=2\pi i\xi_j\mathcal F_2u$ for weak derivatives
([[thm-plancherel]], [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]]).

[F3] $W^{k,2}$ consists of $L^2$ classes whose weak derivatives through order
$k$ lie in $L^2$; the Fourier characterization identifies $W^{k,2}$ with the
corresponding weighted $L^2$ multiplier domain and makes its derivative norm
complete ([[def-sobolev-space-wkp-and-its-norm]],
[[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]]).

[F4] A symmetric form is closed when its shifted form norm is complete; a
self-adjoint operator represented by such a form is unique and has that form
domain equal to its square-root domain ([[def-nrqm-coulomb-closed-semibounded-forms]],
[[thm-nrqmx-closed-form-representation]]).

[F5] Schwartz functions are dense in $L^2(\mathbb R^3;\mathbb C)$ and belong
to every integer-order Sobolev space, and Fourier transformation maps Schwartz
space onto itself ([[lem-schwartz-space-is-dense-in-l-two]],
[[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]],
[[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).

[F6] The $L^2$ inner product satisfies Cauchy–Schwarz
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F7] The regular distribution map on locally integrable functions is
injective modulo almost-everywhere equality; its test functions include
$C_c^\infty(\mathbb R^3)$, which is contained in Schwartz space
([[thm-locally-integrable-functions-embed-in-distributions]]).

## Proof

**Given:** [A1] and the Hilbert space, Fourier transform, weak derivatives,
and free multiplier stated above.

1.1 Define $q_0$ on $Q_0=W^{1,2}$ by the displayed weak-derivative pairing. By [F2], for $u,v\in Q_0$, $$q_0(u,v)=\int_{\mathbb R^3}4\pi^2|\xi|^2\widehat u(\xi)\overline{\widehat v(\xi)}\,d\xi.$$ Thus $q_0$ is sesquilinear, symmetric and nonnegative. Moreover $q_0[u]+\|u\|_2^2=\|u\|_{W^{1,2}}^2$, which is complete by [F3], so $q_0$ is closed by [F4]. Since Schwartz functions lie in $Q_0$ and are dense in $L^2$ by [F5], $Q_0$ is dense. [A1, F2, F3, F4, F5, algebra]

1.2 If $u\in D(H_0)=W^{2,2}$ and $v\in Q_0$, Plancherel [F2] and Cauchy–Schwarz [F6] give $q_0(u,v)=\int4\pi^2|\xi|^2\widehat u\,\overline{\widehat v} =\langle H_0u,v\rangle$; both factors in this pairing are in $L^2$ by the $W^{2,2}$ and $W^{1,2}$ hypotheses. [F1, F2, F3, F6, given]

1.3 Conversely, suppose $u\in Q_0$ and $f\in H$ satisfy $q_0(u,v)=\langle f,v\rangle$ for every $v\in Q_0$. Testing with Schwartz $v$ and using Plancherel gives $\int(4\pi^2|\xi|^2\widehat u(\xi)-\widehat f(\xi))\overline{\widehat v(\xi)}\,d\xi=0$. The Fourier transform maps Schwartz space onto itself by [F5], and complex conjugation preserves Schwartz space, so the locally integrable function $4\pi^2|\xi|^2\widehat u-\widehat f$ pairs to zero with every compactly supported smooth test function. It is locally integrable because $\widehat u,\widehat f\in L^2$ and the polynomial weight is bounded on compact sets. Injectivity of the regular-distribution map [F7] gives $4\pi^2|\xi|^2\widehat u=\widehat f$ almost everywhere; hence $|\xi|^2\widehat u\in L^2$. By [F3], $u\in W^{2,2}=D(H_0)$, and [F1] then gives $H_0u=f$. Thus the form-associated operator domain and action are exactly those of $H_0$. [F1, F2, F3, F5, F7, given]

2.1 Steps 1.2-1.3 show that the nonnegative self-adjoint operator $H_0$ is the operator represented by the dense closed form $q_0$. Uniqueness in [F4] therefore gives $Q(H_0)=D(H_0^{1/2})=Q_0$, completing the Statement. [F1, F4, step 1.1, step 1.2, step 1.3] ∎

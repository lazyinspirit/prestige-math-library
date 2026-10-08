---
id: cex-the-complementary-form-loses-positivity-beyond-the-unitary-interval
kind: counterexample
title: The complementary form loses positivity beyond the unitary interval
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 9
deps:
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner
  - thm-unitarity-of-the-sl2-complementary-series
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: '§9.3, printed pp. 51–52: the invariant-form positivity criterion and the listed spherical complementary range; this is a range cross-check, not the explicit reducible-parameter witness at $\nu=3$'
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: '§2, unitarity list, printed p. 12: the spherical complementary range $0<|\lambda|<1$ is listed, and its construction is explicitly deferred; no outside-range coefficient witness is given'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement refuted

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For every real $\nu\ge1$, the normalized spherical invariant form $B_\nu$ on the full even K-finite principal-series module $I^K_{0,\nu}$ is positive definite.

## Facts & Assumptions

**Given:** AC, the spherical compact-picture principal series and its normalized invariant form, and the allowed even K-types $f_n(k_\theta)=e^{in\theta}$.

[F1] In spherical parity $a_0(\nu)=1$ and $(1+\nu)a_2(\nu)=(1-\nu)a_0(\nu)$ whenever the quotient is regular; $f_0,f_2$ are distinct nonzero K-type vectors ([[lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner]], [[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F2] For every real $\nu$ except negative odd integers, $B_\nu$ is a finite continuous G-invariant form with Fourier weights $a_0=1$ and $a_{\pm2j}=\prod_{l=1}^j(2l-1-\nu)/(2l-1+\nu)$. At $\nu=1$, every nonzero even weight vanishes ([[thm-unitarity-of-the-sl2-complementary-series]]).

[A1] AC is declared by the principal-series and invariant-form constructions and supplies the normalized Haar setup; the two coefficient evaluations here make no further choice ([[def-axiom-of-choice]]).

## Counterexample

Use the normalized spherical form from [F2]; the parameter $\nu=3$ is regular and the endpoint $\nu=1$ gives a separate degeneracy witness.

1.1 At $\nu=3$, the normalized weights are finite. By [F1], $a_0(3)=1$ and $4a_2(3)=-2a_0(3)$, so $a_2(3)=-1/2$. Thus $B_3(f_0,f_0)=1>0$ and $B_3(f_2,f_2)=-1/2<0$: this regular invariant form is indefinite and refutes positive definiteness. The parameter $3$ is a reducibility point, but regularity of the normalized form does not require irreducibility. [F1, F2, A1, algebra]

2.1 At $\nu=1$, [F2] gives $a_0=1$ and $a_2=0$. Hence $B_1(f_0,f_0)=1$, while $B_1(f_2,h)=0$ for every smooth $h$ by the Fourier-diagonal formula; $f_2\ne0$, so the endpoint form is nonzero and degenerate. This also contradicts the refuted claim at its boundary and confirms that the positive-definite range $|\nu|<1$ is strict. [F2, A1, step 1.1, algebra] ∎

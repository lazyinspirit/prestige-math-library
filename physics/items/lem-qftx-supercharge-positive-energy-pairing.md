---
id: lem-qftx-supercharge-positive-energy-pairing
kind: lemma
title: Positive-energy eigenspaces pair under an odd self-adjoint supercharge
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-countable-choice
  - def-complex-numbers-and-arithmetic
  - thm-complex-numbers-form-a-field
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-unbounded-linear-operator-domain-and-graph
  - def-densely-defined-closed-and-closable-operator
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - thm-of-square-roots
dependency_roles:
  def-countable-choice: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  thm-of-square-roots: mathematical-premise
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§7.1, printed p. 72, equations (7.1.1)–(7.1.2), positive-energy pairing context; the operator-domain proof is local."
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§8.4, supertrace and index context; the positive-energy eigenspace map is proved locally from the stated domains."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume Countable Choice. Let $\mathcal H=\mathcal H^+\oplus\mathcal H^-$ be a complex Hilbert space with grading operator $\Gamma=+I$ on $\mathcal H^+$ and $\Gamma=-I$ on $\mathcal H^-$. Let $Q$ be a densely defined self-adjoint operator with domain invariant under $\Gamma$ and $Q\Gamma\psi=-\Gamma Q\psi$ for every $\psi\in D(Q)$. Set $H=Q^2$ on the composition domain $D(H)=\{\psi\in D(Q):Q\psi\in D(Q)\}$. For each $\lambda>0$, let $E_\lambda=\{\psi\in D(H):H\psi=\lambda\psi\}$ be finite-dimensional, and put $E_\lambda^\pm=E_\lambda\cap\mathcal H^\pm$. Then $Q$ maps $E_\lambda$ into itself, and

$$U_\lambda:=(Q/\sqrt{\lambda})|_{E_\lambda^+}:E_\lambda^+\longrightarrow E_\lambda^-$$

is a unitary isomorphism, with inverse $(Q/\sqrt{\lambda})|_{E_\lambda^-}$. In particular $\dim E_\lambda^+=\dim E_\lambda^-$. Also $Q\psi=0$ for every zero-energy vector $\psi\in\ker H$. No discrete spectrum or finite-multiplicity assumption is made about energies other than the selected $\lambda$.

## Statement references

[Martin, §7.1](https://arxiv.org/pdf/hep-ph/9709356v7).

[Gates et al., §8.4](https://arxiv.org/pdf/hep-th/0108200).

Hilbert space: [[def-hilbert-space]].

Real and complex inner-product spaces and their induced length: [[def-real-and-complex-inner-product-space]].

Unbounded linear operators: domain, graph and extension: [[def-unbounded-linear-operator-domain-and-graph]].

Densely defined, closed and closable operators: [[def-densely-defined-closed-and-closable-operator]].

Adjoint of a densely defined operator: [[def-adjoint-of-a-densely-defined-unbounded-operator]].

Symmetric, self-adjoint and essentially self-adjoint operators: [[def-symmetric-self-adjoint-and-essentially-self-adjoint]].

Complex arithmetic: [[def-complex-numbers-and-arithmetic]].

Complex numbers form a field: [[thm-complex-numbers-form-a-field]].

Every nonnegative real number has a unique nonnegative square root: [[thm-of-square-roots]].

## Facts & Assumptions

**Given:** $\mathcal H$, $\Gamma$, $Q$, the composition operator $H=Q^2$, and a finite-dimensional positive-energy eigenspace $E_\lambda$ as in the Statement. Assume Countable Choice for the imported adjoint and self-adjoint definitions.

[A1] Countable Choice is used by the imported unbounded adjoint and self-adjoint operator definitions. [[def-countable-choice]]

[F1] [[def-real-and-complex-inner-product-space]]: the complex inner product is linear in its first argument, conjugate-linear in its second and positive definite.

[F2] [[def-hilbert-space]]: $\mathcal H$ is complete in the norm induced by its complex inner product.

[F3] [[def-unbounded-linear-operator-domain-and-graph]]: the domain of a composition $Q^2$ is $\{\psi\in D(Q):Q\psi\in D(Q)\}$.

[F4] [[def-adjoint-of-a-densely-defined-unbounded-operator]]: self-adjointness gives $\langle Qx,y\rangle=\langle x,Qy\rangle$ whenever $x,y\in D(Q)$.

[F5] [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]: a densely defined operator is self-adjoint when its domain agrees with the domain of its actual adjoint and the values agree.

[F6] [[thm-of-square-roots]]: every positive real $\lambda$ has a unique positive square root $\sqrt\lambda$.

[F7] [[thm-complex-numbers-form-a-field]]: the nonzero complex scalar $\sqrt\lambda$ has a multiplicative inverse and scalar multiplication is associative.

## Proof


**Given:** [A1], [F1]–[F7], and the domain, grading and anticommutation hypotheses in the Statement.

1.1 If $\psi\in E_\lambda$, then $\psi\in D(Q)$, $Q\psi\in D(Q)$ and $Q^2\psi=\lambda\psi$ by [F3]. Thus $Q\psi\in D(Q)$ and $Q(Q\psi)=\lambda\psi\in D(Q)$, so a second application of [F3] gives $Q\psi\in D(H)$. Moreover $H(Q\psi)=Q(Q^2\psi)=Q(\lambda\psi)=\lambda Q\psi$. Therefore $Q$ maps $E_\lambda$ into itself. [F2, F3, given, algebra]

2.1 The domain of $H$ is invariant under $\Gamma$: if $\psi\in D(H)$, then $\Gamma\psi\in D(Q)$ by hypothesis and $Q\Gamma\psi=-\Gamma Q\psi\in D(Q)$ because $Q\psi\in D(Q)$ and $D(Q)$ is $\Gamma$-invariant. Applying the anticommutation relation twice gives $H\Gamma\psi=\Gamma H\psi$. Hence $\Gamma E_\lambda=E_\lambda$, and $Q\Gamma=-\Gamma Q$ shows that $Q$ maps $E_\lambda^+$ to $E_\lambda^-$ and $E_\lambda^-$ to $E_\lambda^+$. [given, F3, step 1.1, algebra]

3.1 For $\psi,\varphi\in E_\lambda$, both vectors lie in $D(Q)$ and $Q\psi\in D(Q)$, by [F2], the adjoint is taken in the complete Hilbert space; self-adjointness in [F5] and the identity in [F4] give $\langle Q\psi,Q\varphi\rangle=\langle Q^2\psi,\varphi\rangle=\lambda\langle\psi,\varphi\rangle$. By [F6], and since $\sqrt\lambda$ is nonzero in the complex field by [F7], division by $\sqrt\lambda$ therefore makes $Q$ an isometry on $E_\lambda$. Also $(Q/\sqrt\lambda)^2\psi=Q^2\psi/\lambda=\psi$ there. Together with the parity exchange in step 2.1, this proves that the restriction $U_\lambda:E_\lambda^+\to E_\lambda^-$ is an isometry with inverse the restriction from $E_\lambda^-$ to $E_\lambda^+$; it is consequently unitary and the finite dimensions agree. [A1, F1, F2, F3, F4, F5, F6, F7, step 1.1, step 2.1, algebra]

4.1 If $\psi\in\ker H$, then $\psi\in D(Q^2)$, so $Q\psi\in D(Q)$. By [F2], [F5] and the adjoint identity [F4], $\|Q\psi\|^2=\langle Q\psi,Q\psi\rangle=\langle Q^2\psi,\psi\rangle=0$. Positive definiteness in [F1] forces $Q\psi=0$. [A1, F1, F2, F4, F5, given, algebra] ∎

---
id: thm-self-adjoint-norm-and-spectrum-extrema
kind: theorem
title: Self adjoint norm and spectrum extrema
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-spectrum-of-a-self-adjoint-operator-is-real, lem-bounded-hilbert-operators-form-a-c-star-algebra, thm-spectrum-is-nonempty-compact-and-norm-bounded, thm-compactness-under-continuous-maps, thm-continuous-functional-calculus-properties, lem-spectrum-of-a-positive-operator-is-nonnegative, def-axiom-of-choice, def-order-on-bounded-self-adjoint-operators, thm-continuous-functional-calculus-for-bounded-self-adjoint-operators, def-self-adjoint-positive-unitary-and-normal-operator, def-spectrum-and-resolvent-of-a-bounded-operator]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Lemma 5.49 and §5.4, printed pp.238–255"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, §4, pp.10–15"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume AC. If $T\in\mathcal B(H)$ is bounded and self-adjoint on a nonzero complex Hilbert space $H$, then $\min\sigma(T)\,I\le T\le\max\sigma(T)\,I$, these bounds are sharp, and $\|T\|=\max\{|\min\sigma(T)|,|\max\sigma(T)|\}$.

## Facts & Assumptions

[A1] For self-adjoint $T$ the calculus sends $z$ to $T$, and continuous composition and positivity hold: $f(T)$ is positive whenever $f\ge0$, and $\|f(T)\|=\|f\|_\infty$ ([[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]], [[thm-continuous-functional-calculus-properties]]).

[A2] $S\le R$ means $\langle(R-S)x,x\rangle\ge0$ for every $x$, an order on the real vector space of bounded self-adjoint operators; $S\ge0$ is positivity ([[def-order-on-bounded-self-adjoint-operators]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[A3] A bounded positive operator has spectrum in $[0,+\infty)$ ([[lem-spectrum-of-a-positive-operator-is-nonnegative]]).

[A4] The operator spectrum is the spectrum in the nonzero unital Banach algebra $\mathcal B(H)$, since invertibility there means exactly a bounded two-sided operator inverse. It is nonempty and compact, and is real for self-adjoint $T$ ([[def-spectrum-and-resolvent-of-a-bounded-operator]], [[lem-bounded-hilbert-operators-form-a-c-star-algebra]], [[thm-spectrum-is-nonempty-compact-and-norm-bounded]], [[lem-spectrum-of-a-self-adjoint-operator-is-real]]). The identity real function on this compact set attains its minimum and maximum ([[thm-compactness-under-continuous-maps]]).

[A5] Continuous functions on $\sigma(T)$ satisfy the pointwise identities used below: $z-m\ge0$ if $m\le\min\sigma(T)$, and $M-z\ge0$ if $M\ge\max\sigma(T)$ ([[def-self-adjoint-positive-unitary-and-normal-operator]] for the scalar-multiple convention used in the calculus).

[A6] AC is the hypothesis of the calculus and spectral suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and a bounded self-adjoint $T\in\mathcal B(H)$, with $m:=\min\sigma(T)$ and $M:=\max\sigma(T)$.

1.1 The spectrum is a nonempty compact subset of $\mathbb R$, so $m$ and $M$ exist and $\sigma(T)\subseteq[m,M]$. [A4]

1.2 The functions $z-m$ and $M-z$ are continuous and nonnegative on $\sigma(T)$, so $(z-m)(T)=T-mI$ and $(M-z)(T)=MI-T$ are positive operators. [A1, A5]

1.3 The norm identity: $\|T\|=\|z(T)\|=\|z\|_{\infty,\sigma(T)}=\max_{\lambda\in\sigma(T)}|\lambda|=\max(|m|,|M|)$, since $\sigma(T)\subseteq[m,M]$. [A1]

2.1 Consequently $mI\le T\le MI$ in the order of the definition, since the two differences are positive operators. [step 1.2, A2]

2.2 Sharpness of the lower bound: if $cI\le T$ for a real $c$, then $T-cI$ is positive, so its spectrum lies in $[0,+\infty)$; and $\sigma(T-cI)=\sigma(T)-c$, because $\lambda I-(T-cI)=(\lambda+c)I-T$ has exactly the same bounded-invertibility condition. This spectrum contains $m-c$, hence $m-c\ge0$ and $c\le m$. If $T\le dI$, then $dI-T$ is positive and $\sigma(dI-T)=d-\sigma(T)$: $\lambda I-(dI-T)=-((d-\lambda)I-T)$ is boundedly invertible exactly when $(d-\lambda)I-T$ is. Thus $d-M\ge0$. [step 1.1, A2, A3, A4, algebra]

3.1 Sharpness of both bounds: $mI\le T\le MI$ by step 2.1, and any lower bound is at most $m$ while any upper bound is at least $M$ by step 2.2, so $m$ and $M$ are the greatest lower bound and least upper bound of the quadratic form on unit vectors. [step 2.1, step 2.2]

4.1 Therefore $\min\sigma(T)\,I\le T\le\max\sigma(T)\,I$ with sharp bounds, and $\|T\|=\max\{|\min\sigma(T)|,|\max\sigma(T)|\}$. [step 1.3, step 3.1, A6] ∎

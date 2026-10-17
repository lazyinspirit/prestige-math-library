---
id: cex-csm-finite-range-attraction-collapse
kind: counterexample
title: Finite range alone does not imply stability
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-stable-superstable-continuum-interaction
  - lem-integer-part
dependency_roles:
  def-csm-stable-superstable-continuum-interaction: mathematical-premise
  lem-integer-part: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Sabine Jansen, Gibbsian Point Processes, complete author-hosted lecture notes"
      url: "https://www.math.lmu.de/~jansen/gibbspp.pdf"
      locator: "Sections 3.1–3.3, PDF pp.45–49: stability, finite-range interactions, and grand-canonical normalization."
    - title: "David Dereudre, Introduction to the theory of Gibbs point processes, complete author-hosted mini-course notes"
      url: "https://arxiv.org/pdf/1701.08105"
      locator: "Section 1.2, PDF pp.7–8: stable energy functions, finite-range pair potentials, and the failure of range alone to guarantee stability."
---

## Statement refuted

Every even Borel finite-range pair potential is stable.

## Facts & Assumptions

**Given:** An integer $d\geq1$, constants $\epsilon>0$ and $R>0$, and the stability convention in the current continuum-interaction definition.

[A1] The current draft [[def-csm-stable-superstable-continuum-interaction]] defines stability by the existence of a finite $B\geq0$ such that $U_N(X)\geq-BN$ for every finite position list $X=(x_1,\ldots,x_N)$. For simple configurations this is the same pair-energy bound after enumerating their points. The supplier is a definition; this counterexample uses its stated interface without a proof-status claim.

[F1] [[lem-integer-part]]: for every real $x$ there is an integer $m$ with $m\leq x<m+1$.

## Counterexample

1.1 Define $\phi(0)=0$, $\phi(x)=-\epsilon$ for $0<\|x\|_2\leq R$, and $\phi(x)=0$ for $\|x\|_2>R$. Since the norm is continuous, the defining sets are Borel; $\phi(-x)=\phi(x)$, and $\phi$ vanishes outside the radius-$R$ ball. Hence $\phi$ is an even Borel finite-range pair potential. [given, construct]

2.1 For any integer $N\geq2$, let $\delta=R/(2N)$ and take $x_j=j\delta e_1$ for $0\leq j<N$. They are distinct and every separation is less than $R$, so the pair energy is exactly $U_\phi=-\epsilon N(N-1)/2$. [given, step 1.1, construct]

3.1 If a finite stability constant $B$ existed, apply [F1] to $x=1+2B/\epsilon$ and let $m\leq x<m+1$ be its integer part. Set $N=m+2$, so $N>x$ and step 2.1 gives $U_\phi=-\epsilon N(N-1)/2<-BN$. This contradicts [A1], so the finite-range potential is not stable and the statement is false. [A1, F1, step 2.1, algebra] ∎

---
id: thm-gauge-fixed-simple-eigenvector-derivative-formula
kind: theorem
title: "In a fixed gauge, the derivative of a simple right eigenvector is obtained by applying the reduced resolvent to the perturbation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-reduced-resolvent-identities-for-a-simple-eigenvalue,
       thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x,
       thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. W. Stewart and Ji-guang Sun, Matrix Perturbation Theory"
      url: "https://djvu.online/file/j5uuUqxIKij6w"
---

## Statement

Let $A(t)$ be differentiable, let $\lambda(t)$ be a simple eigenvalue branch,
and let $x(t)$ be the right eigenvector branch chosen in the fixed gauge
$y_0^\ast x(t)=1$, where $y_0$ is the left eigenvector at $t=0$. If $S$ is the
reduced resolvent at $t=0$, then

$$x'(0)=-S A'(0)x(0).$$

## Facts & Assumptions

**Given:** A differentiable simple eigenpair branch in the fixed gauge
$y_0^\ast x(t)=1$ and the reduced resolvent $S$ at $t=0$.

[L1] The reduced resolvent satisfies
$S(A-\lambda I)=I-P$ and $Sx=0$
([[prop-reduced-resolvent-identities-for-a-simple-eigenvalue]]).

[L2] The eigenvalue derivative is $\lambda'(0)=y_0^\ast A'(0)x(0)$
([[thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x]]).

## Proof
**Proof technique:** direct.

1.1 Differentiate $(A-\lambda I)x=0$ at $t=0$: $$\bigl(A'(0)-\lambda'(0)I\bigr)x+(A-\lambda I)x'=0.$$ Apply $S$ and use [L1]: $$x'-Px'=-S\bigl(A'(0)-\lambda'(0)I\bigr)x.$$ Because the fixed gauge gives $y_0^\ast x'(0)=0$, the derivative $x'(0)$ lies in $\ker y_0^\ast$, so $Px'(0)=x(y_0^\ast x'(0))=0$. [L1, L2, given, algebra]

2.1 Step 1.1 therefore gives $x'(0)=-S(A'(0)-\lambda'(0)I)x(0)$. Since $Sx(0)=0$ by [L1], the $\lambda'(0)$ term disappears and $x'(0)=-SA'(0)x(0)$. [L1, step 1.1, algebra] ∎
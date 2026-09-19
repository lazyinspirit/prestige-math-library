---
id: lem-spectral-form-domain-and-core-of-a-semibounded-operator
kind: lemma
title: "Spectral form domain and core of a semibounded operator"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, lem-unbounded-pvm-integral-is-well-defined-and-closed, def-unbounded-integral-against-a-pvm, def-symmetric-self-adjoint-and-essentially-self-adjoint, thm-dominated-convergence, def-banach-valued-simple-function-and-integral, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 3.1, (3.52)-(3.53), and Section 4.4 form-domain discussion, pp.110 and 139-141"
---

## Statement

Assume the Axiom of Choice. Let $A$ be self-adjoint with $A\ge cI$ for some
real $c$. Put
$$Q(A):=D\bigl((A-cI)^{1/2}\bigr),\qquad q_A[x]:=c\|x\|^2+\bigl\|(A-cI)^{1/2}x\bigr\|^2\quad(x\in Q(A)).$$
Then $Q(A)$ and $q_A$ do not depend on the choice of the constant
$c\le\inf\sigma(A)$ (the form $q_A[x]=\int\lambda\,dE_x$ is itself unchanged,
while the summand $\|(A-cI)^{1/2}x\|^2$ changes by the constant
$(c-c')\|x\|^2$ when $c$ is replaced by $c'\le c$),
$q_A[x]=\int\lambda\,dE_x(\lambda)=\langle Ax,x\rangle$ for $x\in D(A)$, the
domain $D(A)$ is dense in $Q(A)$ for the norm
$\|x\|_Q=(\|x\|^2+\|(A-cI)^{1/2}x\|^2)^{1/2}$, and $q_A$ is a closed quadratic
form with $q_A[x]\ge c\|x\|^2$.

## Facts & Assumptions

[A1] $(A-cI)^{1/2}$ is the operator $\int(\lambda-c)^{1/2}dE(\lambda)$, self-adjoint with domain $\{x:\int(\lambda-c)dE_x<\infty\}$, and $\|(A-cI)^{1/2}x\|^2=\int(\lambda-c)dE_x$; its graph is closed ([[thm-unbounded-borel-functional-calculus]], [[lem-unbounded-pvm-integral-is-well-defined-and-closed]], [[def-unbounded-integral-against-a-pvm]]).

[A2] $\sigma(A)\subseteq[c,\infty)$ because $A\ge cI$, so $E$ is carried on $[c,\infty)$ and $\int\lambda\,dE_x\ge c\|x\|^2$ whenever the integral exists; for $x\in D(A)$ one has $\langle Ax,x\rangle=\int\lambda\,dE_x$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[A3] Scalar dominated convergence for the finite measures $E_x$ ([[thm-dominated-convergence]]).

## Proof

**Proof technique:** direct.

**Given:** A self-adjoint $A$ with $A\ge cI$, and $c'\le c$.

1.1 $Q(A)=D((A-cI)^{1/2})=\{x:\int(\lambda-c)dE_x<\infty\}$ and, for $x\in Q(A)$, $q_A[x]=c\|x\|^2+\int(\lambda-c)dE_x=\int\lambda\,dE_x$. [A1, A2]

2.1 Independence of $c$: since $\lambda-c'=(\lambda-c)+(c-c')$ on the spectrum, $x\in Q(A)$ if and only if $\int(\lambda-c')dE_x<\infty$, and then $q_A[x]=c'\|x\|^2+\int(\lambda-c')dE_x=\int\lambda\,dE_x=c\|x\|^2+\int(\lambda-c)dE_x$, so the form itself is $c$-independent while its square-root summand increases by $(c-c')\|x\|^2$ when $c$ is replaced by $c'\le c$; in particular $D(A)\subseteq Q(A)$. [A1, A2, step 1.1]

2.2 $q_A[x]=\langle Ax,x\rangle$ for $x\in D(A)$: for such $x$ one has $\int\lambda^2dE_x<\infty$, so $x\in Q(A)$ and $q_A[x]=\int\lambda\,dE_x=\langle Ax,x\rangle$. [A2, step 1.1]

2.3 $D(A)$ is dense in $Q(A)$: for $x\in Q(A)$ set $x_n=E([c,n])x$; then $x_n\in D(A)$ because $\int\lambda^2dE_{x_n}=\int_{[c,n]}\lambda^2dE_x\le n^2\|x\|^2$, and $q_A[x-x_n]=\int_{(n,\infty)}\lambda\,dE_x\to0$ by dominated convergence, because $E$ is carried on $[c,\infty)$ and $\int\lambda\,dE_x$ is finite, while $\|x-x_n\|_Q^2=\|x-x_n\|^2+q_A[x-x_n]\to0$. [A1, A2, A3, step 1.1]

2.4 Closedness: if $(x_n)$ is Cauchy for $\|x_n-x_m\|_Q^2=\|x_n-x_m\|^2+\|(A-cI)^{1/2}(x_n-x_m)\|^2$, then $x_n\to x$ in $H$ and the vectors $(A-cI)^{1/2}x_n$ converge to some $y$; the graph of the closed operator $(A-cI)^{1/2}$ contains $(x,y)$, so $x\in Q(A)$ and $q_A[x_n-x]\to0$. [A1, A3, step 1.1]

3.1 Steps 1.1-2.2 give the form identities and independence, step 2.3 the density of $D(A)$, step 2.4 closedness; $q_A[x]\ge c\|x\|^2$ is [A2]. ∎

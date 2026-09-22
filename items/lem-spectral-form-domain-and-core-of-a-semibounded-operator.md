---
id: lem-spectral-form-domain-and-core-of-a-semibounded-operator
kind: lemma
title: "Spectral form domain and core of a semibounded operator"
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, lem-unbounded-pvm-integral-is-well-defined-and-closed, def-unbounded-integral-against-a-pvm, def-symmetric-self-adjoint-and-essentially-self-adjoint, thm-dominated-convergence, def-axiom-of-choice, def-projection-valued-measure, def-hilbert-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 3.1, (3.52)-(3.53), and Section 4.4 form-domain discussion, pp.110 and 139-141"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $A$ be self-adjoint on a complex Hilbert space H, with $A\ge cI$ meaning $\langle Ax,x\rangle\ge c\|x\|^2$ for every $x\in D(A)$, for some
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

Here the square root is the Borel calculus of $\sqrt{\max(\lambda-c,0)}$; the proof shows that E is carried on $[c,\infty)$. A closed semibounded quadratic form means the diagonal of a Hermitian sesquilinear form on a dense linear domain, complete in the displayed shifted form norm. If H={0}, use the unique PVM and operator and the convention inf(empty spectrum)=+infinity.

## Facts & Assumptions

[A1] The spectral theorem gives $D(A)=\{x:\int\lambda^2dE_x<\infty\}$ and A as the coordinate integral on nonzero H. The unbounded integral is closed, has linear domain, squared norm integral, and real-function pairing $\langle f(E)x,x\rangle=\int f\,dE_x$. Real f gives a self-adjoint operator. The zero-space integral is defined directly. [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]] [[lem-unbounded-pvm-integral-is-well-defined-and-closed]] [[def-unbounded-integral-against-a-pvm]]

[A2] Projections multiply by intersection, and $E_x(B)=\|E(B)x\|^2$ is a finite measure of mass $\|x\|^2$. Consequently $E_{E(J)x}(B)=E_x(B\cap J)$, using $E(B)E(J)=E(B\cap J)$ and the norm formula; complementary projections give the analogous complementary restriction. The spectrum of A is the essential range of the coordinate function. [[def-projection-valued-measure]] [[thm-unbounded-borel-functional-calculus]]

[A3] Scalar dominated convergence applies to the finite measures E_x. [[thm-dominated-convergence]]

[A4] H is complete and its inner product is first-linear. Self-adjoint operators have dense linear domains. The assumed AC directly supplies every choice function required by the PVM, closed-integral and spectral-theorem interfaces. [[def-hilbert-space]] [[def-symmetric-self-adjoint-and-essentially-self-adjoint]] [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

**Given:** AC, self-adjoint A and its lower bound c.

1.1 If H={0}, every domain and form consists of zero, all norms vanish, and every assertion follows directly from the zero-space convention in [A1]. Otherwise obtain E from [A1], under the choice assumption in [A4]. For $J_m=[-m,c-1/m]$ (empty intervals allowed), a vector $v=E(J_m)x$ belongs to D(A) by [A2] and boundedness of lambda on J_m. If v were nonzero then $\langle Av,v\rangle=\int_{J_m}\lambda\,dE_v\le(c-1/m)\|v\|^2$, contradicting the lower bound. Thus E(J_m)=0 for all positive integers m. Their union is $(-\infty,c)$, whose scalar measures therefore vanish by countable subadditivity. The projection norm formula gives E((-infinity,c))=0. The essential-range description in [A2] implies $\sigma(A)\subseteq[c,\infty)$. [A1, A2, A4, given]

2.1 Put $B=\sqrt{\max(\lambda-c,0)}(E)$. It is closed and self-adjoint by [A1], and step 1.1 gives $D(B)=\{x:\int(\lambda-c)dE_x<\infty\}$ and $\|Bx\|^2=\int(\lambda-c)dE_x$. Integrals here and below can be restricted to [c,infinity). Since $|\lambda|\le(\lambda-c)+|c|$ there, lambda is absolutely integrable for x in Q(A). Hence $q_A[x]=c\|x\|^2+\|Bx\|^2=\int\lambda dE_x$ and $q_A[x]\ge c\|x\|^2$. [A1, A2, step 1.1]

3.1 For any other lower spectral bound c'<=c, $\lambda-c'=(\lambda-c)+(c-c')$ on the carrier. Since E_x has finite mass, the two domain integrals are finite simultaneously. Adding the appropriate constant times the mass gives the same q_A, while the square-root squared norm increases by $(c-c')\|x\|^2$. Two arbitrary admissible lower bounds can be compared in their numerical order, so this proves full independence. Their squared form norms differ by that same multiple of $\|x\|^2$, hence are equivalent since each dominates $\|x\|^2$. [A2, step 2.1]

3.2 If x belongs to D(A), then $\lambda-c\le1+\lambda^2+|c|$ on the carrier, so x belongs to Q(A). By [A1] and step 2.1, $q_A[x]=\int\lambda dE_x=\langle Ax,x\rangle$. [A1, A2, step 2.1]

3.3 For x in Q(A), set $x_n=E([-n,n])x$, n>=1. By [A2], $\int\lambda^2dE_{x_n}\le n^2\|x\|^2$, so x_n belongs to D(A). The same restriction identity gives $\|x-x_n\|_Q^2=\int_{|\lambda|>n}(1+\lambda-c)dE_x\to0$ by dominated convergence, with nonnegative integrable majorant $1+\lambda-c$ on the carrier. This is the asserted form-norm density, with the exact identity $\|z\|_Q^2=q_A[z]+(1-c)\|z\|^2$. [A1, A2, A3, step 2.1]

4.1 The form is the diagonal of $a(x,y)=c\langle x,y\rangle+\langle Bx,By\rangle$ on the linear domain D(B); this is Hermitian and sesquilinear by [A4]. Its domain is dense in H because it contains D(A) by step 3.2. For a Cauchy sequence in the form norm, both x_n and Bx_n are Cauchy in H. Completeness gives limits x and y. Closedness of B implies x in D(B) and Bx=y. Therefore $\|x_n-x\|_Q^2=\|x_n-x\|^2+\|Bx_n-Bx\|^2\to0$, proving completeness and closedness in the stated sense. [A1, A4, step 2.1, step 3.2]

5.1 Steps 2.1 and 3.1 establish the domain, integral identity, lower bound and independence; steps 3.2 and 3.3 give the operator-domain identity and core, and step 4.1 gives the closed quadratic form. Positive integer cutoffs are specified without choices. AC is inherited through [A4]; negative and zero lower bounds are allowed without taking a square root of q_A itself. The zero Hilbert space was handled in step 1.1. [A4, step 1.1, step 2.1, step 3.1, step 3.2, step 3.3, step 4.1] ∎

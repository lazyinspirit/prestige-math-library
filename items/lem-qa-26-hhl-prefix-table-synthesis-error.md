---
id: lem-qa-26-hhl-prefix-table-synthesis-error
kind: lemma
title: "Operator error for the finite sine-prefix rotation table"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps:
  - def-qc-controlled-unitary-access
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - cor-triangle-inequality-for-inner-product-norm
  - lem-qa-phase-estimation-sine-chord-bounds
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-sine-and-cosine-addition-formulas
  - def-qa-26-hhl-sine-window
  - lem-qa-26-hhl-sine-window-prefix-masses
  - thm-cofunction-supplementary-and-reflection-identities
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the bound is a finite product estimate."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 4 §4.3, printed p. 19, for phase-register rotations and their coherent control; the operator-error estimate is proved locally."
---

## Statement

Let $T=2^L\ge2$, and let $W_T(a,b)$ and $|\Psi_T\rangle$ be as in [[def-qa-26-hhl-sine-window]]. In the binary prefix tree, order the register bits from root to leaf. At level $\ell=0,\ldots,L-1$, each interval node $[a,b)$ has midpoint $m=(a+b)/2$ and split $r=W_T(a,m)/W_T(a,b)$. Apply $R_y(2\arcsin\sqrt r)$ to the next bit, controlled on the preceding prefix that names $[a,b)$, encoding bit $1$ as the left child and bit $0$ as the right child. Starting from $|0^L\rangle$, this ideal prefix circuit prepares $|\Psi_T\rangle$. If a finite state-preparation circuit contains $N$ controlled $Y$ rotations and each implemented rotation differs from its ideal rotation by operator norm at most $\delta$, the product unitary differs from the ideal product by operator norm at most $N\delta$. In the OP5 table variant let $\epsilon_\Psi>0$, $N=T-1$ and $\delta=\epsilon_\Psi/(100T)$, so the preparation error is less than $\epsilon_\Psi/100$; using the same bound for its inverse gives the stated unpreparation cost.

## Facts & Assumptions

**Given:** A finite list of controlled rotations and a per-rotation operator-error bound.

[F1] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: unitary operators preserve vector norm.

[F2] [[cor-triangle-inequality-for-inner-product-norm]]: the norm of a finite sum is at most the sum of the norms.

[F3] [[lem-qa-phase-estimation-sine-chord-bounds]]: $\sin x\le x$ for $x\ge0$, and $\sin x\ge2x/\pi$ for $0\le x\le\pi/2$.

[F4] [[cor-trigonometric-parity-and-pythagorean-identity]]: sine is odd and $\sin^2u+\cos^2u=1$.

[F5] [[thm-sine-and-cosine-addition-formulas]]: the sine and cosine addition formulas hold; substituting them into the displayed rotation matrices gives the corresponding angle-addition rule.

[F6] [[def-qa-26-hhl-sine-window]]: the leaf weights are $w_\tau=\sin^2(\pi(\tau+1/2)/T)$ and the target amplitudes are $\sqrt{2/T}\sin(\pi(\tau+1/2)/T)$.

[F7] [[lem-qa-26-hhl-sine-window-prefix-masses]]: $W_T(0,T)=T/2$, and every nonempty interval has positive mass.

[F8] [[thm-cofunction-supplementary-and-reflection-identities]]: $\sin(\pi-x)=\sin x$ for every real $x$.

## Proof


1.1 The real $Y$-rotation matrix is $R_y(\theta)=\begin{pmatrix}\cos(\theta/2)&-\sin(\theta/2)\\\sin(\theta/2)&\cos(\theta/2)\end{pmatrix}$. For any unit vector $x$, [F5] and [F4] give $$\|(R_y(\beta)-R_y(\alpha))x\|^2=\|(R_y(\beta-\alpha)-I)x\|^2=4\sin^2((\beta-\alpha)/4).$$ Taking the supremum over unit $x$ and using [F3] and [F4] yields $\|R_y(\beta)-R_y(\alpha)\|\le|\beta-\alpha|$. A controlled rotation is block diagonal with identity and this rotation on its control subspaces, so its operator error obeys the same bound. [given, F1, F3, F4, F5, algebra]

1.2 For each leaf $\tau$, put $x_\tau=\pi(\tau+1/2)/T\in(0,\pi)$. If $x_\tau\le\pi/2$, [F3] gives $\sin x_\tau\ge2x_\tau/\pi>0$; if $x_\tau>\pi/2$, [F8] reduces positivity to $\pi-x_\tau\in(0,\pi/2)$ and the same bound. Thus each leaf weight is positive, and [F7] makes every split ratio lie in $(0,1)$. The rotation sends $|0\rangle$ to $\sqrt{1-r}|0\rangle+\sqrt r|1\rangle$, so its branch amplitudes are exactly the square roots of the right- and left-child mass fractions. Induction from the root shows that leaf $\tau$ has amplitude $\sqrt{w_\tau/W_T(0,T)}=\sqrt{2/T}\sin x_\tau$, by [F6] and [F7]. With left encoded by $1$, interval leaf $\tau$ has computational label $T-1-\tau$. Its amplitude equals that of label $\tau$ because $x_{T-1-\tau}=\pi-x_\tau$ and [F8] gives $\sin x_{T-1-\tau}=\sin x_\tau$. Hence the ideal circuit prepares $|\Psi_T\rangle$. [given, F3, F6, F7, F8, algebra, induction]

2.1 For products $\widetilde U_N\cdots\widetilde U_1$ and $U_N\cdots U_1$, insert and subtract one factor at a time. This writes their difference as a sum of $N$ terms, each containing one $\widetilde U_j-U_j$ between unitary products. By [F1] the outer products preserve norm, and [F2] bounds the sum by $N\delta$. For $\epsilon_\Psi>0$, $N=T-1$ and $\delta=\epsilon_\Psi/(100T)$ this is less than $\epsilon_\Psi/100$. Applying the same estimate to the inverse rotation list, whose ideal angles are negated and whose synthesis uses the same per-angle tolerance, gives the same bound for inverse preparation. [F1, F2, step 1.1, step 1.2, algebra] ∎


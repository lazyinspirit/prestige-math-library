---
id: thm-numerical-radius-is-an-equivalent-operator-norm
kind: theorem
title: Numerical radius is an equivalent operator norm
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-numerical-range-and-numerical-radius, thm-jordan-von-neumann-polarization, cor-normal-operator-norm-equals-spectral-radius, def-axiom-of-choice, thm-cauchy-schwarz-in-an-inner-product-space, def-operator-norm, thm-hilbert-adjoint-properties, def-spectrum-and-resolvent-of-a-bounded-operator, lem-kernel-range-orthogonality-for-hilbert-adjoints, thm-orthogonal-decomposition-by-a-closed-subspace, def-complex-conjugate-real-imaginary-part-and-modulus, def-hilbert-space, def-self-adjoint-positive-unitary-and-normal-operator]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Joel H. Shapiro, Notes on the Numerical Range, §3–4, PDF pp.9–12"
      url: "https://www.joelshapiro.org/Pubvit/Downloads/NumRangeNotes/numrange_notes.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Corollary 4.11, pp.13–15"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume AC. On a complex Hilbert space, $w$ is a norm with $w(T)\le\|T\|\le2w(T)$ for every bounded $T$; if $T$ is normal, then $w(T)=\|T\|$.

## Facts & Assumptions

[A1] $W(T)=\{\langle Tx,x\rangle:\|x\|=1\}$ and $w(T)=\sup\{|z|:z\in W(T)\}$, with $0\le w(T)\le\|T\|$ and $W(\lambda T)=\lambda W(T)$ ([[def-numerical-range-and-numerical-radius]]).

[A2] $|\langle u,v\rangle|\le\|u\|\,\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A3] $\|Tx\|\le\|T\|\,\|x\|$ and $\|T\|=\sup\{\|Tx\|:\|x\|\le1\}$; in particular for $\|x\|=\|y\|=1$ one has $|\langle Tx,y\rangle|\le\|T\|$ ([[def-operator-norm]]).

[A4] $\langle S^*x,y\rangle=\langle x,Sy\rangle$, and $T-\lambda I$ is normal whenever $T$ is normal ([[thm-hilbert-adjoint-properties]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[A5] For a normal operator, $\|T\|=r(T)=\max\{|\lambda|:\lambda\in\sigma(T)\}$ ([[cor-normal-operator-norm-equals-spectral-radius]]).

[A6] $\lambda\in\sigma(T)$ exactly when $T-\lambda I$ is not bijective with bounded inverse ([[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[A7] $(\operatorname{ran}S)^\perp=\ker S^*$ and $\overline{\operatorname{ran}S}=(\ker S^*)^\perp$; a Hilbert space is complete, and $H=\ker S\oplus(\ker S)^\perp$ for the closed kernel ([[lem-kernel-range-orthogonality-for-hilbert-adjoints]], [[def-hilbert-space]], [[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[A8] Every $z\in\mathbb C$ has real and imaginary parts with $|z|\le|\operatorname{Re}z|+|\operatorname{Im}z|$ and $|\operatorname{Re}z|,|\operatorname{Im}z|\le|z|$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[thm-jordan-von-neumann-polarization]] for the polarization identities of a complex form).

[A9] AC is the choice hypothesis under which the spectral-radius and spectrum suppliers are stated ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and bounded operators $S,T\in\mathcal B(H)$.

1.1 For unit vectors $x,y$ the expansion of the complex sesquilinear form $B(x,y):=\langle Tx,y\rangle$ gives $4B(x,y)=B(x+y,x+y)-B(x-y,x-y)+iB(x+iy,x+iy)-iB(x-iy,x-iy)$. [A3, A8, algebra]

1.2 $\sup\{|\langle Tx,y\rangle|:\|x\|\le1,\|y\|\le1\}=\|T\|$: the upper bound is Cauchy–Schwarz and the operator-norm bound, and taking $y=Tx/\|Tx\|$ when $Tx\ne0$ recovers $\|Tx\|$. [A2, A3, algebra]

1.3 If $w(T)=0$ then $\langle Tx,x\rangle=0$ for every $x$, and applying the expansion of the form $(x,y)\mapsto\langle Tx,y\rangle$ to the zero diagonal values gives $\langle Tx,y\rangle=0$ for all $x,y$, hence $T=0$. [A1, A8, algebra]

1.4 If $S$ is normal, then $\|S^*x\|=\|Sx\|$ for every $x$, because $\|S^*x\|^2=\langle SS^*x,x\rangle=\langle S^*Sx,x\rangle=\|Sx\|^2$. [A4, algebra]

2.1 $w$ is a norm on $\mathcal B(H)$: homogeneity is $w(\lambda T)=|\lambda|w(T)$ from $W(\lambda T)=\lambda W(T)$, the triangle inequality follows from $|\langle(S+T)x,x\rangle|\le|\langle Sx,x\rangle|+|\langle Tx,x\rangle|\le w(S)+w(T)$ on unit vectors, and definiteness is step 1.3. [step 1.3, A1, algebra]

2.2 For unit vectors $x,y$ one has $|\langle Tx,y\rangle|\le2w(T)$: the expansion of step 1.1 writes $4\langle Tx,y\rangle$ as a signed sum of the four values $\langle Tz,z\rangle$ at $z=x+y,x-y,x+iy,x-iy$, so $4|\langle Tx,y\rangle|\le\sum_z|\langle Tz,z\rangle|\le w(T)\sum_z\|z\|^2$, and the four squared norms sum to $\|x+y\|^2+\|x-y\|^2+\|x+iy\|^2+\|x-iy\|^2=4(\|x\|^2+\|y\|^2)=8$, whence $4|\langle Tx,y\rangle|\le8w(T)$. [step 1.1, A1, A8, algebra]

2.3 If $T$ is normal and $\lambda\in\sigma(T)$, then $T-\lambda I$ is not bounded below: if it were, its range would be closed and its kernel would be zero, and normality gives $\ker(T-\lambda I)^*=\ker(T-\lambda I)=\{0\}$ by equality of the two kernel norms, so the range would be dense, hence all of $H$, making $T-\lambda I$ invertible with bounded inverse. [step 1.4, A4, A6, A7, algebra]

3.1 Hence $w(T)\le\|T\|$ and $\|T\|\le2w(T)$: the first is the definition, and the second follows by taking the supremum of $|\langle Tx,y\rangle|\le2w(T)$ over unit $x,y$ and using step 1.2, which identifies that supremum with $\|T\|$. [step 2.2, step 1.2, A1, A8]

3.2 If $T$ is normal then $\sigma(T)\subseteq\overline{W(T)}$: step 2.3 produces unit vectors $x_n$ with $\|(T-\lambda I)x_n\|<1/(n+1)$, and then $|\langle Tx_n,x_n\rangle-\lambda|=|\langle(T-\lambda I)x_n,x_n\rangle|\le\|(T-\lambda I)x_n\|\to0$, so $|\lambda|\le w(T)$ for every $\lambda\in\sigma(T)$ and $r(T)\le w(T)$. [step 2.3, A1, A2, A9]

4.1 Therefore $w$ is a norm with $w(T)\le\|T\|\le2w(T)$, and for normal $T$ the chain $\|T\|=r(T)\le w(T)\le\|T\|$ gives $w(T)=\|T\|$. [step 2.1, step 3.1, step 3.2, A5] ∎

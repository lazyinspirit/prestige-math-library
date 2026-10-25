---
id: thm-numerical-radius-is-an-equivalent-operator-norm
kind: theorem
title: Numerical radius is an equivalent operator norm
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-numerical-range-and-numerical-radius, cor-normal-operator-norm-equals-spectral-radius, def-axiom-of-choice, thm-cauchy-schwarz-in-an-inner-product-space, def-operator-norm, thm-hilbert-adjoint-properties, def-spectrum-and-resolvent-of-a-bounded-operator, lem-kernel-range-orthogonality-for-hilbert-adjoints, thm-orthogonal-decomposition-by-a-closed-subspace, def-complex-conjugate-real-imaginary-part-and-modulus, def-hilbert-space, def-self-adjoint-positive-unitary-and-normal-operator, def-inner-product-space, thm-parallelogram-law, def-hilbert-space-adjoint, cor-archimedean-reciprocal, lem-complex-conjugation-and-modulus-laws]
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
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. On a complex Hilbert space, $w$ is a norm with $w(T)\le\|T\|\le2w(T)$ for every bounded $T$; if $T$ is normal, then $w(T)=\|T\|$.

## Facts & Assumptions

[A1] On a nonzero space, $W(T)=\{\langle Tx,x\rangle:\|x\|=1\}$ and $w(T)=\sup\{|z|:z\in W(T)\}$, with $0\le w(T)\le\|T\|$ and $W(\lambda T)=\lambda W(T)$ ([[def-numerical-range-and-numerical-radius]]). On the zero space, $W(0)=\{0\}$ and $w(0)=0$ by the same convention. For every vector $z$, $|\langle Tz,z\rangle|\le w(T)\|z\|^2$: this is immediate for $z=0$, and otherwise follows by applying the unit-vector definition to $z/\|z\|$.

[A2] $|\langle u,v\rangle|\le\|u\|\,\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A3] $\|Tx\|\le\|T\|\,\|x\|$ and $\|T\|=\sup\{\|Tx\|:\|x\|\le1\}$; in particular for $\|x\|=\|y\|=1$ one has $|\langle Tx,y\rangle|\le\|T\|$ ([[def-operator-norm]]). On a nonzero domain the same supremum may be taken over $\|x\|=1$; on a zero domain the unit-ball supremum is $0$.

[A4] $\langle S^*x,y\rangle=\langle x,Sy\rangle$, and $T-\lambda I$ is normal whenever $T$ is normal ([[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]], [[def-self-adjoint-positive-unitary-and-normal-operator]]). Indeed the adjoint of $T-\lambda I$ is $T^*-\overline\lambda I$, and expanding the products in both orders shows their difference is $TT^*-T^*T$.

[A5] For a normal operator on a nonzero complex Hilbert space, $\|T\|=r(T)=\max\{|\lambda|:\lambda\in\sigma(T)\}$ ([[cor-normal-operator-norm-equals-spectral-radius]]).

[A6] $\lambda\in\sigma(T)$ exactly when $T-\lambda I$ is not bijective with bounded inverse ([[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[A7] $(\operatorname{ran}S)^\perp=\ker S^*$ and $\overline{\operatorname{ran}S}=(\ker S^*)^\perp$; a Hilbert space is complete, and $H=\ker S\oplus(\ker S)^\perp$ for the closed kernel ([[lem-kernel-range-orthogonality-for-hilbert-adjoints]], [[def-hilbert-space]], [[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[A8] The inner product is linear in the first and conjugate-linear in the second variable ([[def-inner-product-space]]). Its norm satisfies the parallelogram law ([[thm-parallelogram-law]]). Complex modulus satisfies the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]). Polarization of the possibly non-Hermitian form $\langle Tx,y\rangle$ below is proved by expansion, not by applying a theorem for inner products to that form.

[A9] AC supplies the spectral-radius hypothesis and all countable selections made here ([[def-axiom-of-choice]]). The reciprocal Archimedean property gives $1/(n+1)\to0$ ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a complex Hilbert space $H$ and bounded operators $S,T\in\mathcal B(H)$. Steps 1.1–3.2 treat $H\ne\{0\}$; the zero space is treated explicitly in step 4.1.

1.1 For arbitrary vectors $x,y$ the expansion of the complex sesquilinear form $B(x,y):=\langle Tx,y\rangle$ gives $4B(x,y)=B(x+y,x+y)-B(x-y,x-y)+iB(x+iy,x+iy)-iB(x-iy,x-iy)$. [A3, A8, algebra]

1.2 $\sup\{|\langle Tx,y\rangle|:\|x\|\le1,\|y\|\le1\}=\|T\|$: the upper bound is Cauchy–Schwarz and the operator-norm bound, and taking $y=Tx/\|Tx\|$ when $Tx\ne0$ recovers $\|Tx\|$. The same supremum over unit $x,y$ equals $\|T\|$: [A3] gives the unit-sphere formula for the operator norm on nonzero $H$, and the preceding choice of $y$ works whenever $Tx\ne0$; when $T=0$ all values are zero. [A2, A3, algebra]

1.3 If $w(T)=0$ then $\langle Tx,x\rangle=0$ for every $x$, and applying the expansion of the form $(x,y)\mapsto\langle Tx,y\rangle$ to the zero diagonal values gives $\langle Tx,y\rangle=0$ for all $x,y$, hence $T=0$. [A1, A8, algebra]

1.4 If $S$ is normal, then $\|S^*x\|=\|Sx\|$ for every $x$, because $\|S^*x\|^2=\langle SS^*x,x\rangle=\langle S^*Sx,x\rangle=\|Sx\|^2$. [A4, algebra]

2.1 $w$ is a norm on $\mathcal B(H)$: homogeneity is $w(\lambda T)=|\lambda|w(T)$ from $W(\lambda T)=\lambda W(T)$, the triangle inequality follows from $|\langle(S+T)x,x\rangle|\le|\langle Sx,x\rangle|+|\langle Tx,x\rangle|\le w(S)+w(T)$ on unit vectors, and definiteness is step 1.3. [step 1.3, A1, algebra]

2.2 For unit vectors $x,y$ one has $|\langle Tx,y\rangle|\le2w(T)$: the expansion of step 1.1 writes $4\langle Tx,y\rangle$ as a signed sum of the four values $\langle Tz,z\rangle$ at $z=x+y,x-y,x+iy,x-iy$, so $4|\langle Tx,y\rangle|\le\sum_z|\langle Tz,z\rangle|\le w(T)\sum_z\|z\|^2$, and the four squared norms sum to $\|x+y\|^2+\|x-y\|^2+\|x+iy\|^2+\|x-iy\|^2=4(\|x\|^2+\|y\|^2)=8$, whence $4|\langle Tx,y\rangle|\le8w(T)$. [step 1.1, A1, A8, algebra]

2.3 If $T$ is normal and $\lambda\in\sigma(T)$, then $T-\lambda I$ is not bounded below: if $\|(T-\lambda I)x\|\ge c\|x\|$ for some $c>0$, its kernel would be zero and its range would be closed. To see closedness, for any point $v$ in its range closure, AC chooses $u_n$ with $\|(T-\lambda I)u_n-v\|<1/(n+1)$. The lower bound makes $(u_n)$ Cauchy; completeness gives a limit $u$, and boundedness gives $(T-\lambda I)u=v$. Furthermore, normality gives $\ker(T-\lambda I)^*=\ker(T-\lambda I)=\{0\}$ by equality of the two kernel norms, so the range would be dense, hence all of $H$, making $T-\lambda I$ invertible with inverse bound $1/c$, contrary to $\lambda\in\sigma(T)$. [step 1.4, A4, A6, A7, A9, algebra]

3.1 Hence $w(T)\le\|T\|$ and $\|T\|\le2w(T)$: the first is the definition, and the second follows by taking the supremum of $|\langle Tx,y\rangle|\le2w(T)$ over unit $x,y$ and using step 1.2, which identifies that supremum with $\|T\|$. [step 2.2, step 1.2, A1, A8]

3.2 If $T$ is normal then $\sigma(T)\subseteq\overline{W(T)}$: for each $n$ the failure of a lower bound in step 2.3 gives a unit vector at tolerance $1/(n+1)$, and AC selects unit vectors $x_n$ with $\|(T-\lambda I)x_n\|<1/(n+1)$, and then $|\langle Tx_n,x_n\rangle-\lambda|=|\langle(T-\lambda I)x_n,x_n\rangle|\le\|(T-\lambda I)x_n\|\to0$, so $|\lambda|\le w(T)$ for every $\lambda\in\sigma(T)$ and $r(T)\le w(T)$. [step 2.3, A1, A2, A9]

4.1 If $H=\{0\}$, its operator space consists only of $0$; [A1] and [A3] give $w(0)=\|0\|=0$, which defines a norm on this zero vector space and proves both estimates and the normal equality there, without any spectral maximum. For $H\ne\{0\}$, therefore $w$ is a norm with $w(T)\le\|T\|\le2w(T)$, and for normal $T$ the chain $\|T\|=r(T)\le w(T)\le\|T\|$ gives $w(T)=\|T\|$. [step 2.1, step 3.1, step 3.2, A1, A3, A5] ∎

---
id: thm-self-adjoint-resolvent-estimate
kind: theorem
title: "Resolvent of a self-adjoint operator: nonreal resolvents and the estimate"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-symmetric-self-adjoint-and-essentially-self-adjoint, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, lem-unbounded-adjoint-is-well-defined-and-closed, thm-double-orthogonal-complement-is-closure, def-orthogonality-and-orthogonal-complement, def-real-and-complex-inner-product-space, def-bounded-linear-operator, def-operator-norm, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Theorem 7.34, estimate (7.6) and its proof, pp.35-36"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.4, p.83 and Theorem 2.16 area"
---

## Statement

Assume Countable Choice. Let $T$ be a self-adjoint operator on $H$. Then every nonreal number belongs to
$\rho(T)$: $\mathbb C\setminus\mathbb R\subseteq\rho(T)$. More precisely, for
$z=a+ib$ with $a,b\in\mathbb R$, $b\ne0$, and every $x\in D(T)$,
$$\|(T-z)x\|^2=\|(T-a)x\|^2+b^2\|x\|^2 ,$$
and consequently $\|R_T(z)\|\le 1/|\operatorname{Im}z|$. In particular
$\sigma(T)\subseteq\mathbb R$.

## Facts & Assumptions

[A1] $T=T^*$; thus $D(T)$ is dense, $T\subseteq T^*$, and $T$ is closed, $T^*$ being closed ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[lem-unbounded-adjoint-is-well-defined-and-closed]]).

[A2] For $x\in D(T)$ one has $\langle Tx,y\rangle=\langle x,Ty\rangle$ whenever $y\in D(T)$, and $\langle Tx,x\rangle$ is a real number: it equals $\langle x,Tx\rangle=\overline{\langle Tx,x\rangle}$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-real-and-complex-inner-product-space]]).

[A3] For $z\in\mathbb C$ the identity $\operatorname{ran}(T-z)^\perp=\ker(T^*-\overline z)=\ker(T-\overline z)$ holds ([[lem-unbounded-adjoint-is-well-defined-and-closed]], [A1]).

[A4] If $M$ is a linear subspace of a Hilbert space, then $M^{\perp\perp}=\overline M$ ([[thm-double-orthogonal-complement-is-closure]], [[def-orthogonality-and-orthogonal-complement]]).

[A5] $z\in\rho(T)$ means that $z-T$ is a bijection of $D(T)$ onto $H$ with bounded inverse, and then $\|R_T(z)\|$ is the operator norm of that inverse ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[def-operator-norm]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, a self-adjoint operator $T$ on $H$, and a number $z=a+ib$ with $b\ne0$.

1.1 For $x\in D(T)$, expanding $\|(T-z)x\|^2=\langle(T-z)x,(T-z)x\rangle$ gives $\|Tx\|^2-\overline z\langle Tx,x\rangle-z\langle x,Tx\rangle+|z|^2\|x\|^2$; by [A2] the two middle terms combine to $-2a\langle Tx,x\rangle$, so $\|(T-z)x\|^2=\|Tx\|^2-2a\langle Tx,x\rangle+|z|^2\|x\|^2$. [A2]

2.1 Adding and subtracting $a^2\|x\|^2$ and using $|z|^2-a^2=b^2$, step 1.1 becomes $\|(T-z)x\|^2=\|(T-a)x\|^2+b^2\|x\|^2$. [step 1.1, algebra]

3.1 By step 2.1, $\|(T-z)x\|\ge|b|\,\|x\|$ for every $x\in D(T)$; in particular $T-z$ is injective and its range is closed: if $(T-z)x_n\to y$, then $(x_n)$ is Cauchy, hence $x_n\to x$ for some $x\in H$ and $Tx_n\to zx+y$, and closedness of $T$ gives $x\in D(T)$ and $Tx=zx+y$, that is $y=(T-z)x$. [A1, step 2.1]

4.1 Also by [A3] applied to $z$, $\operatorname{ran}(T-z)^\perp=\ker(T-\overline z)$, and step 2.1 with $z$ replaced by $\overline z$ shows $T-\overline z$ is injective, so the kernel is $\{0\}$. Hence the closed range of step 3.1 satisfies $\operatorname{ran}(T-z)=\overline{\operatorname{ran}(T-z)}=(\operatorname{ran}(T-z)^\perp)^\perp=H$. [A3, A4, step 2.1, step 3.1]

5.1 By steps 3.1 and 4.1 the map $z-T:D(T)\to H$ is a bijection, and step 2.1 gives $\|(z-T)^{-1}y\|\le|b|^{-1}\|y\|$ for every $y\in H$: applying step 2.1 to $x=(z-T)^{-1}y$ yields $\|y\|^2=\|(T-a)x\|^2+b^2\|x\|^2\ge b^2\|x\|^2$. Thus $z\in\rho(T)$ and $\|R_T(z)\|\le1/|\operatorname{Im}z|$ by [A5]. [A5, step 2.1, step 3.1, step 4.1]

6.1 Since $z$ was an arbitrary nonreal number, $\mathbb C\setminus\mathbb R\subseteq\rho(T)$, that is, $\sigma(T)\subseteq\mathbb R$; the identity and the bound of the statement are steps 2.1 and 5.1. [step 2.1, step 5.1] ∎

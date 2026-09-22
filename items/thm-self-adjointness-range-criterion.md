---
id: thm-self-adjointness-range-criterion
kind: theorem
title: "Range criterion for self-adjointness"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-symmetric-self-adjoint-and-essentially-self-adjoint, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, lem-unbounded-adjoint-is-well-defined-and-closed, thm-self-adjoint-resolvent-estimate, def-adjoint-of-a-densely-defined-unbounded-operator, thm-double-orthogonal-complement-is-closure, def-orthogonality-and-orthogonal-complement, def-real-and-complex-inner-product-space, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Theorem 7.34 with complete proof, pp.35-37"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.2, pp.66-69"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Exercise 6.48 and Theorem 6.35 area, Sec. 6.3.2"
---

## Statement

Assume Countable Choice. Let $T$ be a densely defined symmetric operator on
$H$. Then the following are equivalent:

1. $T$ is self-adjoint;
2. $T$ is closed and $\ker(T^*-z)=\{0\}$ for every $z\in\mathbb C\setminus\mathbb R$;
3. $T$ is closed and $\ker(T^*-i)=\ker(T^*+i)=\{0\}$;
4. $\operatorname{ran}(T-z)=H$ for every $z\in\mathbb C\setminus\mathbb R$;
5. $\operatorname{ran}(T-i)=\operatorname{ran}(T+i)=H$;
6. $\sigma(T)\subseteq\mathbb R$.

In particular a closed symmetric operator is self-adjoint if and only if
$\operatorname{ran}(T\pm i)=H$, and the same criterion holds with $i$ replaced
by $i\lambda$ for any real $\lambda>0$.

## Facts & Assumptions

[A1] $T\subseteq T^*$, $D(T)$ is dense, and $T$ is self-adjoint exactly when $T=T^*$; a self-adjoint operator is closed, and for $x$ in the domain of a symmetric operator $S$ the number $\langle Sx,x\rangle$ is real ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[lem-unbounded-adjoint-is-well-defined-and-closed]], [[def-real-and-complex-inner-product-space]]).

[A2] $\operatorname{ran}(T-z)^\perp=\ker(T^*-\overline z)$ for every $z\in\mathbb C$ ([[lem-unbounded-adjoint-is-well-defined-and-closed]]).

[A3] For a linear subspace $M$ of a Hilbert space, $M^{\perp\perp}=\overline M$; in particular if $M$ is closed and $M^\perp=\{0\}$ then $M=H$ ([[def-orthogonality-and-orthogonal-complement]], [[thm-double-orthogonal-complement-is-closure]]).

[A4] For self-adjoint $T$ one has $\mathbb C\setminus\mathbb R\subseteq\rho(T)$, hence $\sigma(T)\subseteq\mathbb R$; conversely every $z\in\rho(T)$ gives that $z-T$ is a bijection $D(T)\to H$ ([[thm-self-adjoint-resolvent-estimate]], [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

[A5] If $\rho(T)\ne\varnothing$ then $T$ is closed ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

## Proof

**Proof technique:** direct.

**Given:** A densely defined symmetric operator $T$ on $H$.

1.1 Preparatory identity. Let $S$ be densely defined and symmetric, let $z=a+ib$ with $b\ne0$ and let $x\in D(S)$. Expanding $\|(S-z)x\|^2$ and using that $\langle Sx,x\rangle$ is real by [A1] gives, as in the proof of [[thm-self-adjoint-resolvent-estimate]], $$\|(S-z)x\|^2=\|(S-a)x\|^2+b^2\|x\|^2\ \ge\ b^2\|x\|^2 .$$ [A1]

1.2 (1) implies (2): if $T=T^*$ then $T$ is closed by [A1]. If $z$ is nonreal and $v\in\ker(T^*-z)$, then $v\in D(T^*)=D(T)$ and $z\|v\|^2=\langle Tv,v\rangle=\overline z\|v\|^2$ by [A1], so $v=0$. [A1]

1.3 (4) implies (5) is immediate, since $\pm i$ are nonreal. [given]

1.4 (5) implies (1): let $v\in D(T^*)$. Since $\operatorname{ran}(T-i)=H$, choose $w\in D(T)$ with $(T-i)w=(T^*-i)v$. Then $(T^*-i)(v-w)=0$, because $T^*w=Tw$ for $w\in D(T)$; and by [A2] with $z=-i$ the kernel of $T^*-i$ is $\operatorname{ran}(T+i)^\perp=\{0\}$. Hence $v=w\in D(T)$. So $D(T^*)\subseteq D(T)$, and with $T\subseteq T^*$ this gives $T=T^*$. [A1, A2]

1.5 (1) implies (6) by [A4]. Conversely (6) implies (4): if $\sigma(T)\subseteq\mathbb R$ then every nonreal $z$ lies in $\rho(T)$, so $z-T$ is surjective and $\operatorname{ran}(T-z)=H$. [A4]

2.1 Closed range for closed symmetric $S$. If in addition $S$ is closed, then $\operatorname{ran}(S-z)$ is closed for nonreal $z$: given $(S-z)x_n\to y$, step 1.1 makes $(x_n)$ Cauchy with limit $x$, so $Sx_n\to zx+y$, and closedness of $S$ gives $x\in D(S)$ with $Sx=zx+y$, that is $y=(S-z)x$. [A1, step 1.1]

2.2 (5) implies (3): by 1.1 with $S=T$ and $z=-i$ the map $T+i$ satisfies $\|(T+i)x\|\ge\|x\|$, so its inverse on its range is bounded by $1$; since the range is $H$ by (5), $-i\in\rho(T)$ because $-i-T=-(T+i)$, and $T$ is closed by [A5]. The two kernels vanish by [A2] and (5). [A2, A5, step 1.1]

3.1 (2) implies (4): for nonreal $z$, [A2] and (2) give $\operatorname{ran}(T-z)^\perp=\ker(T^*-\overline z)=\{0\}$, while (2) and step 2.1 show $\operatorname{ran}(T-z)$ is closed; hence the range is all of $H$ by [A3]. [A2, A3, step 2.1]

3.2 (3) implies (5): by [A2], $\operatorname{ran}(T\mp i)^\perp=\ker(T^*\pm i)=\{0\}$, and by step 2.1 applied to the closed $T$ with $z=\mp i$ the two ranges are closed; hence they equal $H$ by [A3]. So (3) and (5) are equivalent. [A2, A3, step 2.1]

4.1 Collecting: $(1)\Rightarrow(2)\Rightarrow(4)\Rightarrow(5)\Rightarrow(1)$ by steps 1.2, 3.1, 1.3 and 1.4; $(5)\Rightarrow(3)$ and $(3)\Rightarrow(5)$ by steps 2.2 and 3.2; and $(1)\Rightarrow(6)\Rightarrow(4)$ by step 1.5. Thus all six statements are equivalent. The final clause follows because only nonreality of the parameters was used, so $i\lambda$ with $\lambda>0$ may replace $i$. [step 1.2, step 3.1, step 1.3, step 1.4, step 2.2, step 3.2, step 1.5] ∎

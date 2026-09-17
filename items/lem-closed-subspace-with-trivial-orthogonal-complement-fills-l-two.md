---
id: lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two
kind: lemma
title: "A closed L2 subspace with trivial orthogonal complement fills L2"
status: draft
origin: pipeline
deps: [thm-riesz-fischer-completeness-of-l-p, thm-parallelogram-law-in-l-two, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, cor-cauchy-schwarz-inequality-for-l-two, def-complete-metric-space, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Aad van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Theorem 6.6 closed-range argument"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Assume the Axiom of Choice. Let $(X,\mathcal A,\mu)$ be a measure space, let
$\mathbb K$ be $\mathbb R$ or $\mathbb C$, let $L^2(\mu)$ be the quotient space
of $\mathbb K$-valued square-integrable functions modulo the almost-everywhere
null functions, with the norm of
[[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]] and
the inner product $\langle f,g\rangle=\int f\overline g\,d\mu$ (real part and
bilinear in the real case), and let $V\subseteq L^2(\mu)$ be a closed linear
subspace. If $V^\perp=\{0\}$, where
$V^\perp=\{u\in L^2(\mu):\langle u,v\rangle=0\text{ for all }v\in V\}$, then
$V=L^2(\mu)$.

## Facts & Assumptions

**Given:** AC, a measure space $(X,\mathcal A,\mu)$, a closed linear subspace $V\subseteq L^2(\mu)$ with $V^\perp=\{0\}$, and an element $x\in L^2(\mu)$.
 
[F1] **Completeness.** $L^2(\mu)$ with the quotient norm is complete, and a closed subset of a complete metric space is complete; norm convergence in $L^2$ is convergence in the metric induced by the norm. [[thm-riesz-fischer-completeness-of-l-p]] [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]] [[def-complete-metric-space]]
 
[F2] **Parallelogram law.** $\|u+v\|_2^2+\|u-v\|_2^2=2\|u\|_2^2+2\|v\|_2^2$ for $u,v\in L^2(\mu)$. [[thm-parallelogram-law-in-l-two]]
 
[F3] **Inner product bounds.** $|\langle u,w\rangle|\le\|u\|_2\|w\|_2$ and the norm is induced by the inner product, $\|z\|_2^2=\langle z,z\rangle$; for a closed subspace the distance $d:=\inf_{v\in V}\|x-v\|_2$ is a nonnegative real number. [[cor-cauchy-schwarz-inequality-for-l-two]] [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]
 
[F4] **Countable choice for a minimizing sequence.** For each $n$ the set $\{v\in V:\|x-v\|_2^2<d^2+1/n\}$ is nonempty by definition of the infimum; AC provides a sequence $(v_n)$ with $\|x-v_n\|_2^2\le d^2+1/n$. [[def-axiom-of-choice]]
 
[F5] **Linear structure.** $V$ is closed under finite linear combinations and under multiplication by real scalars; in the complex case also by $i$. [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]
 
 
 
 

## Proof

**Proof technique:** direct.
 
1.1 Choose a minimizing sequence $(v_n)\subseteq V$ with $\|x-v_n\|_2^2\le d^2+1/n$ by [F4], where $d=\inf_{v\in V}\|x-v\|_2$. [F3, F4]
 
2.1 The sequence is Cauchy: applying the parallelogram law [F2] to $u=x-v_n$ and $v=x-v_m$ gives $\|v_n-v_m\|_2^2=2\|x-v_n\|_2^2+2\|x-v_m\|_2^2-4\|x-(v_n+v_m)/2\|_2^2$, and $(v_n+v_m)/2\in V$ by convexity, so $\|x-(v_n+v_m)/2\|_2^2\ge d^2$; hence $\|v_n-v_m\|_2^2\le2(d^2+1/n)+2(d^2+1/m)-4d^2=2/n+2/m\to0$. [F2, F5, step 1.1]
 
3.1 The limit lies in $V$: by [F1] the complete space $L^2(\mu)$ contains a limit $v$ of $(v_n)$; since $V$ is closed, $v\in V$, and by continuity of the norm $\|x-v\|_2=d$. [F1, step 2.1]
 
4.1 Orthogonality by perturbation: for every $w\in V$ and every real $t$, $v+tw\in V$ by [F5], so $\|x-v\|_2^2\le\|x-v-tw\|_2^2=\|x-v\|_2^2-2t\operatorname{Re}\langle x-v,w\rangle+t^2\|w\|_2^2$; the quadratic in $t$ is nonnegative with value $0$ at $t=0$ only if its linear coefficient vanishes, so $\operatorname{Re}\langle x-v,w\rangle=0$. In the complex case apply the same argument with the real parameter $t$ to $iw$ (which lies in $V$ by [F5]) to get $\operatorname{Re}\langle x-v,iw\rangle=\operatorname{Im}\langle x-v,w\rangle=0$; hence $\langle x-v,w\rangle=0$ in both cases. [F3, F5, step 3.1]
 
5.1 Conclusion: step 4.1 shows $x-v\in V^\perp=\{0\}$, so $x=v\in V$; since $x\in L^2(\mu)$ was arbitrary, $L^2(\mu)\subseteq V$, and $V\subseteq L^2(\mu)$ by definition, so $V=L^2(\mu)$. [step 3.1, step 4.1, given]
 
6.1 Boundary and degenerate cases: if $x\in V$ then $d=0$ and the constant sequence $v_n=x$ is minimizing, so the argument returns $x$; if $V=\{0\}$ then $V^\perp=L^2(\mu)$ by [F3], so the hypothesis forces $L^2(\mu)=\{0\}$, which happens exactly when every measurable function is zero almost everywhere (the zero measure space), and the conclusion holds vacuously; the real and complex cases are both covered by step 4.1; the minimizing sequence is the only place choice enters, and it is a countable selection supplied by [F4]; no separability, no orthonormal basis and no projection theorem is used. [F3, F4, step 4.1] ∎

## Source notes

Van der Vaart, Theorem 6.6, uses this closed-subspace fact as the first step of the Brownian martingale representation theorem: if the range of the terminal Ito integral has trivial orthogonal complement, then it fills the mean-zero $L^2$ space. The proof above is the standard nearest-point argument through the parallelogram law and the perturbation characterization of orthogonality.

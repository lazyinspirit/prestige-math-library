---
id: lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two
kind: lemma
title: "A closed L2 subspace with trivial orthogonal complement fills L2"
status: published
origin: pipeline
deps: [lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, thm-infimum-property, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Aad van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Theorem 6.6 closed-range argument"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $(X,\mathcal A,\mu)$ be a measure space, let
$\mathbb K$ be $\mathbb R$ or $\mathbb C$, let $L^2(\mu)$ be the quotient space
of $\mathbb K$-valued square-integrable functions modulo the almost-everywhere
null functions, with the norm of
[[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]] and
the inner product $\langle f,g\rangle=\int f\overline g\,d\mu$ (bilinear in the real case,
linear in the first variable and conjugate-linear in the second in the complex case), and let $V\subseteq L^2(\mu)$ be a closed linear
subspace. If $V^\perp=\{0\}$, where
$V^\perp=\{u\in L^2(\mu):\langle u,v\rangle=0\text{ for all }v\in V\}$, then
$V=L^2(\mu)$.

## Facts & Assumptions

**Given:** AC, a measure space $(X,\mathcal A,\mu)$, a closed linear subspace $V\subseteq L^2(\mu)$ with $V^\perp=\{0\}$, and an element $x\in L^2(\mu)$.
 
[F1] **Hilbert structure and choice.** AC supplies Countable Choice, under which the integral pairing gives a complete real or complex Hilbert space with the quotient norm. [[def-axiom-of-choice]] [[lem-ac-supplies-sequential-choices-for-probability-constructions]] [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]

[F2] **Parallelogram identity from the pairing.** Expanding the pairing gives $\|u+v\|^2=\|u\|^2+2\operatorname{Re}\langle u,v\rangle+\|v\|^2$ and the analogous minus identity; their sum is $2\|u\|^2+2\|v\|^2$. This holds over both scalar fields. [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]

[F3] **Distance and continuity.** Since $0\in V$, the set of distances from x to V is nonempty, bounded below by zero and has finite infimum d. The reverse triangle inequality implies continuity of the norm. [[thm-infimum-property]] [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]

[F4] **Minimizing sequence.** For every integer n>=1, $\sqrt{d^2+1/n}>d$, so the infimum property gives some $v\in V$ with $\|x-v\|^2<d^2+1/n$. Countable Choice supplied by AC selects one such v_n for every n. [[thm-infimum-property]] [[def-axiom-of-choice]] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]

[F5] **Linear structure.** The given V is a linear subspace, hence closed under midpoints and real multiples, and under multiplication by i in the complex case. The quotient is a normed vector space. [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]

## Proof

**Proof technique:** direct.
 
1.1 Choose a minimizing sequence $(v_n)_{n\ge1}\subseteq V$ with $\|x-v_n\|_2^2\le d^2+1/n$ by [F4], where $d=\inf_{v\in V}\|x-v\|_2$. [F3, F4]
 
2.1 The sequence is Cauchy: applying the parallelogram law [F2] to $u=x-v_n$ and $v=x-v_m$ gives $\|v_n-v_m\|_2^2=2\|x-v_n\|_2^2+2\|x-v_m\|_2^2-4\|x-(v_n+v_m)/2\|_2^2$, and $(v_n+v_m)/2\in V$ by convexity, so $\|x-(v_n+v_m)/2\|_2^2\ge d^2$; hence $\|v_n-v_m\|_2^2\le2(d^2+1/n)+2(d^2+1/m)-4d^2=2/n+2/m\to0$. [F2, F5, step 1.1]
 
3.1 The limit lies in $V$: by [F1] the complete space $L^2(\mu)$ contains a limit $v$ of $(v_n)$; since $V$ is closed, $v\in V$, and by continuity of the norm $\|x-v\|_2=d$. [F1, step 2.1]
 
4.1 Orthogonality by perturbation: for every $w\in V$ and every real $t$, $v+tw\in V$ by [F5], so $\|x-v\|_2^2\le\|x-v-tw\|_2^2=\|x-v\|_2^2-2t\operatorname{Re}\langle x-v,w\rangle+t^2\|w\|_2^2$; the quadratic in $t$ is nonnegative with value $0$ at $t=0$ only if its linear coefficient vanishes, so $\operatorname{Re}\langle x-v,w\rangle=0$. In the complex case apply the same argument with the real parameter $t$ to $iw$ (which lies in $V$ by [F5]) to get $\operatorname{Re}\langle x-v,iw\rangle=\operatorname{Im}\langle x-v,w\rangle=0$; hence $\langle x-v,w\rangle=0$ in both cases. [F1, F2, F5, step 3.1]
 
5.1 Conclusion: step 4.1 shows $x-v\in V^\perp=\{0\}$, so $x=v\in V$; since $x\in L^2(\mu)$ was arbitrary, $L^2(\mu)\subseteq V$, and $V\subseteq L^2(\mu)$ by definition, so $V=L^2(\mu)$. [step 3.1, step 4.1, given]
 
6.1 If x belongs to V, the constant sequence v_n=x is minimizing. If V={0}, its orthogonal complement is the whole Hilbert space, so the hypothesis forces the Hilbert space to be zero and the conclusion follows. This does not force the underlying measure to vanish: on a singleton of measure infinity, the only square-integrable function is zero although the measure is nonzero. The argument needs neither separability nor an orthonormal basis nor a projection theorem. AC supplies both the Countable Choice inherited in completeness and the selection in [F4]; no choice of projections for a family of x is made. The complex sign in step 4.1 follows from conjugate-linearity in the second variable. [F1, F4, step 4.1, step 5.1] ∎

## Source notes

Van der Vaart, Theorem 6.6, uses this closed-subspace fact as the first step of the Brownian martingale representation theorem: if the range of the terminal Ito integral has trivial orthogonal complement, then it fills the mean-zero $L^2$ space. The proof above is the standard nearest-point argument through the parallelogram law and the perturbation characterization of orthogonality.

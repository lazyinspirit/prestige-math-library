---
id: ex-complex-k-ahss-for-spheres
kind: example
title: Complex K-AHSS for spheres
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-complex-k-theory-ahss, prop-ahss-collapse-determines-only-the-associated-graded-object, cor-complex-k-theory-of-spheres, thm-complex-bott-periodicity, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from complex K-theory."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Caleb Ji, The Atiyah–Hirzebruch Spectral Sequence, §3.2.1 and Theorem 3.1, printed pp. 9–11"
      url: https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf
      locator: "Theorem 3.1 and §3.2.1, printed pp. 9–11"
---

## Example

Assume AC. For $n>0$ the reduced complex $K$-groups of the sphere are
$$\widetilde K^0(S^n)\cong \begin{cases}\mathbb Z,&n\ \text{even},\\0,&n\ \text{odd},\end{cases} \qquad \widetilde K^1(S^n)\cong \begin{cases}0,&n\ \text{even},\\\mathbb Z,&n\ \text{odd},\end{cases}$$
and the sphere $K$-AHSS has no nonzero differential and no nontrivial extension.

## Facts & Assumptions

[A1] Assume AC. For a finite CW complex the $K$-AHSS has $E_2^{p,q}=H^p(X;\mathbb Z)$ for even $q$, zero for odd $q$, and $d_r:E_r^{p,q}\to E_r^{p+r,q-r+1}$ ([[cor-complex-k-theory-ahss]]).

[A2] The coefficient groups of complex $K$-theory are Bott-periodic: $K^{2k}(*)\cong\mathbb Z$ and $K^{2k+1}(*)=0$, with all $K^q(*)$ obtained by shifting $K^0(*)=\mathbb Z$ ([[thm-complex-bott-periodicity]], [[cor-complex-k-theory-ahss]]).

[A3] For $n>0$, $H^0(S^n;\mathbb Z)\cong H^n(S^n;\mathbb Z)\cong\mathbb Z$, and all other reduced cohomology groups of the sphere vanish; hence the $K$-AHSS of $S^n$ is supported in the two columns $p=0$ and $p=n$ ([[cor-complex-k-theory-of-spheres]] and the universal coefficient comparison of [[cor-complex-k-theory-ahss]]).

[A4] The published sphere computation gives $\widetilde K^0(S^{2m})\cong\mathbb Z$ and $\widetilde K^0(S^{2m+1})=0$, with $K^1$ of the opposite parity ([[cor-complex-k-theory-of-spheres]]).

[A5] Collapse determines only the associated graded and not the extensions ([[prop-ahss-collapse-determines-only-the-associated-graded-object]]).

## Verification

**Proof technique:** direct.

**Given:** Assume AC, $n>0$, and the $K$-AHSS of the sphere $S^n$ with its standard CW structure having one $0$-cell and one $n$-cell.

1.1 By [A3] the $E_2$ page has $E_2^{0,q}=K^q(*)$ and $E_2^{n,q}=K^q(*)$ for every even $q$, and vanishes in all other positions. [A1, A2, A3]

2.1 For $n$ even, consider a differential $d_r:E_r^{p,q}\to E_r^{p+r,q-r+1}$ with source in an even coefficient row $q$ at a nonzero column $p\in\{0,n\}$. If $r$ is even then the target row $q-r+1$ is odd, so the target lies in a vanishing coefficient row. If $r$ is odd then the target column $p+r$ is odd, hence is neither $0$ nor $n$ when $p=0$ (the number $n$ being even) and exceeds $n$ when $p=n$; in both cases the target column lies outside the support $\{0,n\}$ of $H^*(S^n;\mathbb Z)$, and the parity of the target row is irrelevant. In either case the target vanishes, so every differential is zero. [A1, A2, step 1.1]

2.2 Suppose $n$ is odd. If $n=1$, every differential has $r\geq2$ by [A1], so a source in column $0$ or $1$ has target column $p+r>1$; hence every target is zero. Now let $n\geq3$. The only possibly nonzero differentials are $d_n:E_n^{0,q}\to E_n^{n,q-n+1}$ on even rows $q$. There is no incoming differential at column $0$, so the surviving subgroup there is $\ker d_n$. On the other hand, the edge quotient $E_\infty^{0,q}=F^0K^q(S^n)/F^1K^q(S^n)$ identifies with the image of restriction to the basepoint. For even $q$, [A4] and Bott periodicity give $F^1=\widetilde K^q(S^n)=0$, while pullback along $S^n\to *$ splits restriction, so that image is all of $K^q(*)=\mathbb Z$. Thus $\ker d_n=\mathbb Z$ inside its source $\mathbb Z$, forcing $d_n=0$. [A1, A2, A4, step 1.1]

3.1 Steps 2.1 and 2.2 show that all differentials vanish and $E_2=E_\infty$. If $n$ is odd, each total-degree diagonal has only one nonzero term, so there is no extension problem. If $n$ is even, an even total degree $t$ has two graded pieces, at $p=0$ and $p=n$, and the filtration gives $0\to F^nK^t(S^n)\cong\mathbb Z\to K^t(S^n)\to K^t(*)\cong\mathbb Z\to0$. The quotient map is restriction to the basepoint and is split by pullback along $S^n\to *$, since the composite $*\to S^n\to *$ is the identity. Thus $K^t(S^n)\cong\mathbb Z\oplus\mathbb Z$ in even degree, with the reduced summand $F^n\cong\widetilde K^t(S^n)\cong\mathbb Z$ from [A4]; odd total degrees vanish. Hence the only two-piece extension is split, while the odd-dimensional cases have a single graded piece. [A4, A5, step 2.1, step 2.2]

4.1 Steps 2.1, 2.2 and 3.1 verify the displayed reduced groups and show that the sphere $K$-AHSS has no nonzero differential and no nontrivial extension. [step 3.1] ∎

## Source notes

Compare [Ji](https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf), Theorem 3.1 and §3.2.1, printed pp. 9–11, for the sphere coefficient computation and its placement in the $K$-AHSS.

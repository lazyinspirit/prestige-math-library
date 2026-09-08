---
id: ex-galois-descent-for-the-two-nontrivial-characters-of-c-three
kind: example
title: Descent of the two nontrivial characters of C₃
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Weizhe Zheng, Lectures on Algebra (10 January 2025)
      url: https://server.mcm.ac.cn/~zheng/algebra.pdf
      locator: Theorem 3.8.1, Example 3.8.2 and Proposition 4.3.2, specialized to the quadratic cyclotomic field
    - title: Gábor Wiese, Galois Representations
      url: https://math.uni.lu/wiese/notes/GalRep.pdf
      locator: Corollary 2.2.12, p.30 (specialization; matrices computed here)
status: published
origin: pipeline
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
deps: ["thm-galois-orbits-classify-simple-modules-after-splitting-base-change", "def-trace-of-an-endomorphism", "thm-group-ring-is-a-unital-algebra-with-basis-g"]
---

## Example

Let $F=\mathbb Q$, let $E=\mathbb Q(\zeta)$ where
$\zeta^2+\zeta+1=0$, and let $C_3=\langle g:g^3=1\rangle$.
Multiplication by $\zeta$ on the rational space $S=E$ has matrix
$$M=\begin{pmatrix}0&-1\\1&-1\end{pmatrix}$$
in the basis $(1,\zeta)$. This rational representation is simple. Its scalar
extension is the sum of the two one-dimensional representations
$g\mapsto\zeta$ and $g\mapsto\zeta^2$, each with multiplicity one. Their Galois
orbit has size two. The rational character takes values $2,-1,-1$ on $1,g,g^2$.
The corresponding rational central idempotent is $e=(2-g-g^2)/3$, and
$\mathbb Q[C_3]e\cong E$.

## Facts & Assumptions

[F1] Simple modules over a semisimple algebra correspond to Galois orbits after splitting base change, with one common positive multiplicity: [[thm-galois-orbits-classify-simple-modules-after-splitting-base-change]].

[F2] The trace of an endomorphism is the trace of its matrix in any basis: [[def-trace-of-an-endomorphism]].

[F3] The group algebra has the group basis, with multiplication $[g][h]=[gh]$: [[thm-group-ring-is-a-unital-algebra-with-basis-g]].

## Verification

**Given:** $p(X)=X^2+X+1$, $E=\mathbb Q(\zeta)$, and the displayed matrix $M$.

1.1 A rational root $r$ of $p$ would satisfy $(r+1/2)^2+3/4=0$, impossible in the ordered field $\mathbb Q$. A reducible quadratic over a field has a linear factor and thus a root, so $p$ is irreducible and $(1,\zeta)$ is a rational basis of $E$. We have $\zeta^3=1$ and $\zeta\ne1$; the two roots are $\zeta,\zeta^2$, and they are distinct since equality would force $\zeta=1$. Both lie in $E$. An embedding of this quadratic field is determined by a root, so the identity and $\zeta\mapsto\zeta^2$ are its two automorphisms. Equivalently it is a finite normal separable extension, hence Galois, with this two-element group. [given, algebra]

2.1 Multiplication sends $1\mapsto\zeta$ and $\zeta\mapsto-1-\zeta$, giving $M$. Direct multiplication gives $M^2=\begin{pmatrix}-1&1\\-1&0\end{pmatrix}$, $M^2+M+I=0$ and $M^3=I$. Thus it defines a $C_3$-action. For $0\ne x\in S$, the vectors $x,\zeta x$ are rationally independent, because $(a+b\zeta)x=0$ in the field implies $a=b=0$. Any nonzero invariant rational subspace contains such $x$ and $\zeta x$, and hence equals $S$. This proves simplicity. [step 1.1, algebra]

2.2 Put $t=1+g+g^2$. Since every group element occurs three times in its square, $t^2=3t$. Thus $e=1-t/3$ is central and $e^2=e$. Also $te=0$, whence $e+ge+g^2e=0$. The two coefficient vectors $e=(2-g-g^2)/3$ and $ge=(-1+2g-g^2)/3$ are independent: $ae+bge=0$ gives $2a-b=-a+2b=0$, so $a=b=0$. They span the ideal by the relation just found. Evaluation $g\mapsto\zeta$ sends $e\mapsto1$ and $ge\mapsto\zeta$, so restricts to an algebra isomorphism $\mathbb Q[C_3]e\to E$, preserving the block unit. The full evaluation map has kernel $\mathbb Qt$: if $a+b\zeta+c\zeta^2=0$, then $(a-c)+(b-c)\zeta=0$, so $a=b=c$. [F3, step 1.1, algebra]

3.1 For either $\lambda=\zeta$ or $\zeta^2$, set $v_\lambda=(1,-\lambda)^{\mathsf T}$. Then $Mv_\lambda=(\lambda,1+\lambda)^{\mathsf T}=\lambda v_\lambda$. The determinant of $(v_\zeta,v_{\zeta^2})$ is $\zeta-\zeta^2\ne0$, so these form an $E$-basis of $E\otimes_{\mathbb Q}S$. Consequently both eigenline modules occur exactly once. Conjugating coefficients interchanges the two eigenvectors and their distinct eigenvalues; the lines give nonisomorphic one-dimensional modules since an intertwiner between them would force $\zeta=\zeta^2$. [step 1.1, step 2.1, algebra]

4.1 To check the splitting hypothesis for the whole algebra, evaluation at $1,\zeta,\zeta^2$ gives $E[C_3]\to E^3$. Its inverse sends the $\lambda$th coordinate vector to $\ell_\lambda(g)$, where $\ell_\lambda(X)=\prod_{\mu\ne\lambda}(X-\mu)/(\lambda-\mu)$ and the product ranges over the other two roots. All denominators are nonzero, and $\ell_\lambda(\mu)=\delta_{\lambda\mu}$ proves the inverse identities on evaluations; a degree at most two polynomial vanishing at three distinct roots is zero, by successive division by $X-\mu$. Thus the algebra is split. The characteristic-zero specialization of F1 now identifies the orbit in step 3.1 with the simple rational module in step 2.1, with multiplicity $1$ as computed. [F3, F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 Finally $\operatorname{tr}(I)=2$, $\operatorname{tr}(M)=-1$ and $\operatorname{tr}(M^2)=-1$. On either eigenline the traces are its scalar values; adding gives $\zeta+\zeta^2=-1$ at $g$ and $\zeta^2+\zeta^4=-1$ at $g^2$. This checks the character and the identity value directly. [F2, step 1.1, step 2.1, step 3.1, algebra] QED

## Remarks

This is the quadratic cyclotomic specialization of Zheng, Example 3.8.2,
p.133, and Wiese, Corollary 2.2.12, p.30. Matrices, eigenvectors and the
rational block identification are computed above.

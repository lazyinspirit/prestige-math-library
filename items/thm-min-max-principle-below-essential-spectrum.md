---
id: thm-min-max-principle-below-essential-spectrum
kind: theorem
title: "Min-max principle below the essential spectrum"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, thm-weyl-criterion-for-essential-spectrum, lem-spectral-form-domain-and-core-of-a-semibounded-operator, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-orthogonality-and-orthogonal-complement, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 4.12 (max-min), Theorem 4.14 (min-max) and the preceding proof, pp.139-141; source trial-dimension typo corrected"
---

## Statement

Assume the Axiom of Choice. Let $A$ be self-adjoint and bounded below, with
form domain $Q(A)$ and form $q_A$
([[lem-spectral-form-domain-and-core-of-a-semibounded-operator]]), and put
$\Lambda:=\inf\sigma_{\mathrm{ess}}(A)$, where $\inf\varnothing=+\infty$. Let
$E_1\le E_2\le\dots$ be the eigenvalues of $A$ below $\Lambda$ counted with
multiplicity, with $E_n:=\Lambda$ once they are exhausted. Then for every
$n\ge1$
$$E_n=\inf\bigl\{\sup\{q_A[x]:x\in L,\ \|x\|=1\}:L\subseteq Q(A),\ \dim L=n\bigr\}$$
$$=\sup\bigl\{\inf\{q_A[x]:x\in Q(A)\cap F^\perp,\ \|x\|=1\}:F\subseteq Q(A),\ \dim F=n-1\bigr\},$$
where the infimum over an empty family is $+\infty$ and dimension means Hilbert
dimension. The infimum over $n$-dimensional $L$ may equally be taken over
$L\subseteq D(A)$, and both outer values are attained when $E_n<\Lambda$.

## Facts & Assumptions

[A1] $\Lambda=\inf\sigma_{\mathrm{ess}}(A)$ is a spectral threshold: $\operatorname{rank}E((\lambda-\varepsilon,\lambda+\varepsilon))<\infty$ for some $\varepsilon$ if and only if $\lambda<\Lambda$, and the eigenvalues of $A$ below $\Lambda$ are exactly the isolated eigenvalues of finite multiplicity there, counted by $\operatorname{rank}E((-\infty,\lambda])$; the spectral measures are carried by $\sigma(A)\subseteq[c,\infty)$ for a lower bound $c$ ([[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]], [[thm-weyl-criterion-for-essential-spectrum]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[A2] $q_A[x]=\int\lambda\,dE_x$ for $x\in Q(A)$; $q_A[x]\ge c\|x\|^2$; $D(A)$ is dense in $Q(A)$ for $\|x\|_Q$, and $q_A[x]=\int\lambda\,dE_x$ depends only on the measure $E_x$ ([[lem-spectral-form-domain-and-core-of-a-semibounded-operator]]).

[A3] For subspaces of a Hilbert space, $\dim(L\cap F^\perp)\ge\dim L-\dim F$, so an $n$-dimensional $L$ and an $(n-1)$-dimensional $F$ always meet orthogonally in a nonzero vector ([[def-orthogonality-and-orthogonal-complement]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A4] Eigenvectors of distinct eigenvalues of a self-adjoint operator are orthogonal, and for a unit vector $x$ orthogonal to the eigenspaces of the first $n-1$ eigenvalues the measure $E_x$ vanishes on the finitely many points $E_1,\dots,E_{n-1}$, hence is carried by the complement of those points; when $E_n<\Lambda$ that complement meets $\sigma(A)$ only in points $\ge E_n$, so $E_x$ is carried on $[E_n,\infty)$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-orthogonality-and-orthogonal-complement]], [[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]).

## Proof

**Proof technique:** direct.

**Given:** A self-adjoint $A\ge cI$ and the numbers $E_n$, $\Lambda$.

1.1 Reduction to nonnegative form: replacing $A$ by $A-cI$ shifts $\sigma(A)$ and $\sigma_{\mathrm{ess}}(A)$ by $-c$, hence shifts every $E_n$ by $-c$, and shifts $q_A$ by $-c\|x\|^2$ on unit vectors; since the two displayed variational quantities are built from $q_A$ on unit vectors, the identity is invariant under this shift and it suffices to prove it for forms with $q_A\ge0$. [A2, given]

1.2 The inequality $\text{inf-sup}\ge\text{sup-inf}$: for an $n$-dimensional $L\subseteq Q(A)$ and an $(n-1)$-dimensional $F\subseteq Q(A)$ there is a unit $x\in L\cap F^\perp$ by [A3], so $\sup\{q_A:L\}\ge q_A[x]\ge\inf\{q_A:Q(A)\cap F^\perp\}$; taking the infimum over $L$ and then the supremum over $F$ gives the inequality. [A3, given]

1.3 If $E_n<\Lambda$, then $E_1,\dots,E_n$ are eigenvalues and the span $L_0$ of orthonormal eigenvectors for them satisfies $\sup\{q_A[x]:x\in L_0,\|x\|=1\}=E_n$, so the infimum over $n$-dimensional subspaces is at most $E_n$; the same $L_0$ shows $\sup\{q_A:L\}=E_n$ is attained. [A1, A2]

1.4 The supremum of the inner infima is at least $E_n$. If $E_n<\Lambda$, let $F$ be the span of orthonormal eigenvectors $\varphi_1,\dots,\varphi_{n-1}$ for the first $n-1$ eigenvalues, with multiplicity. Every unit $x\in Q(A)\cap F^\perp$ has spectral measure carried on $[E_n,\infty)$ by [A4], so $q_A[x]\ge E_n$, with equality for $\varphi_n$. If $E_n=\Lambda$, there are at most $n-1$ eigenvalues below $\Lambda$, counting multiplicity; put all their eigenvectors in an $(n-1)$-dimensional space $F$, extending their span arbitrarily if necessary. Orthogonality to $F$ again removes every spectral point below $\Lambda$, so $q_A[x]\ge\Lambda=E_n$ for every unit $x\in Q(A)\cap F^\perp$. [A1, A2, A4]

2.1 If $E_n=\Lambda<\infty$, then for $\varepsilon>0$ let $F$ be the span of orthonormal eigenvectors for the eigenvalues below $\Lambda$ (at most $n-1$ of them) and pick $n-\dim F$ further orthonormal unit vectors in $\operatorname{ran}E((\Lambda-\varepsilon/2,\Lambda+\varepsilon))\cap F^\perp$, an infinite-dimensional space by [A1]. Their span $L$ is $n$-dimensional. Every unit $x\in L$ splits orthogonally as $x=x_F+x_y$; both spectral measures are carried below $\Lambda+\varepsilon$, so $q_A[x]=q_A[x_F]+q_A[x_y]\le(\Lambda+\varepsilon)\|x\|^2$. Thus the infimum over $n$-dimensional subspaces is at most $E_n$. [A1, A2, step 1.1]

2.2 Conversely the infimum is at least $E_n$: let $L\subseteq Q(A)$ have dimension $n$ and let $\lambda<E_n$. Then $\lambda$ is not an eigenvalue and $\operatorname{rank}E((-\infty,\lambda])<n$ by [A1], so the kernel of $L\to\operatorname{ran}E((-\infty,\lambda])$, $x\mapsto E((-\infty,\lambda])x$, is nonzero; a nonzero $x_0$ in that kernel is orthogonal to $\operatorname{ran}E((-\infty,\lambda])$, so $E_{x_0}$ is carried on $(\lambda,\infty)$ and $q_A[x_0]\ge\lambda\|x_0\|^2$, whence $\sup\{q_A:L\}\ge\lambda$. Letting $\lambda\uparrow E_n$ gives the bound. [A1, A2, step 1.1]

3.1 By steps 1.1, 1.2, 1.3, 1.4, 2.1 and 2.2 the two displayed quantities and $E_n$ coincide; the final clause about subspaces of $D(A)$ follows because $D(A)$ is dense in $Q(A)$ in the form norm, so every $n$-dimensional subspace of $Q(A)$ can be approximated by one of $D(A)$ and the values of $\sup\{q_A:L\}$ are unchanged in the limit. [A2, step 2.2, step 1.4] ∎

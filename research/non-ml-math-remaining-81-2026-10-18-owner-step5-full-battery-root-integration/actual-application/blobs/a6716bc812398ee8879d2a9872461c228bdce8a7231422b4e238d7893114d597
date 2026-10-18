---
id: lem-root-of-unity-rank-one-weight-symmetry
kind: lemma
title: "Full divided powers force root-of-unity weight reflection symmetry"
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-full-toral-weight-root-of-unity-module-category
  - lem-divided-power-and-toral-quantum-binomial-reordering-identities
  - lem-quantum-pascal-recurrence-and-gaussian-integrality
  - thm-quantized-sl-two-string-formulas
proof_strategy: direct
sources:
  references:
    - title: "George Lusztig, Introduction to Quantum Groups"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Section 3.1.9, printed p.24, full divided-power reordering; section 23.1.3, printed p.186, weightwise relations. The specialization and character argument are given locally."
---

## Statement

For $M\in\mathcal C_\zeta$ of [[def-full-toral-weight-root-of-unity-module-category]], $\dim M_\mu=\dim M_{s_i\mu}$ for every simple reflection $s_i$. Consequently its formal weight character is Weyl invariant. If a nonzero weight vector $v\in M_\lambda$ is killed by every $E_i^{(s)}$ for $s>0$, then $n_i=\langle\lambda,h_i\rangle\ge0$ and $F_i^{(r)}v=0$ for every $r>n_i$. These assertions concern the full divided-power action, including powers whose index is at least $\ell$.

## Facts & Assumptions

**Given:** The full toral-weight module and odd $\ell=\operatorname{ord}(\zeta^2)>1$.

[F1] The integral reordering and multiplication identities of [[lem-divided-power-and-toral-quantum-binomial-reordering-identities]] apply after specialization, including to arbitrary divided powers. On a rank-one highest vector of coroot label $n$ they give $E^{(s)}F^{(r)}v=\begin{bmatrix}n-r+s\\s\end{bmatrix}_\zeta F^{(r-s)}v$ for $s\le r$, and zero for $s>r$; the multiplication coefficient for $F^{(s)}F^{(r)}$ is $\begin{bmatrix}r+s\\s\end{bmatrix}_\zeta$.

[F2] Symmetric Gaussians are Laurent polynomials with the Pascal identities ([[lem-quantum-pascal-recurrence-and-gaussian-integrality]]). The generic rank-one strings of [[thm-quantized-sl-two-string-formulas]] have the divided basis with precisely the action in [F1]; their free $A$-span can therefore be specialized.

## Proof

1.1 Fix one root color, and first work in a single $P/\mathbb Z\alpha_i$ coset. Take a finite-dimensional simple graded module for the rank-one algebra, and choose a nonzero vector $v$ at its highest integer coroot label $n$. It is killed by every positive divided power. Reordering shows that the cyclic module is spanned by the distinct weight vectors $F^{(r)}v$, $r\ge0$, and simplicity makes this the whole module. If $n=-b<0$, put $r=2\ell k$. The negative-binomial identity gives $\begin{bmatrix}-b\\r\end{bmatrix}_\zeta=(-1)^r\begin{bmatrix}b+r-1\\r\end{bmatrix}_\zeta$. To see this is nonzero for arbitrarily large $k$, write $b-1=a\ell+s$, $0\le s<\ell$, and use $\prod_{j=0}^{N-1}(1+\zeta^{N-1-2j}z)=\sum_j\begin{bmatrix}N\\j\end{bmatrix}_\zeta z^j$ with $N=b+r-1$. Every block of length $\ell$ equals $1+\zeta^{\ell(N-1)}z^\ell$, because $\zeta^{-2}$ has odd order $\ell$; the residual block has degree $s<\ell$. The coefficient of $z^{2\ell k}$ is therefore $\binom{a+2k}{2k}$: the sign from $\zeta^{\ell(N-1)}=\pm1$ is raised to the even power $2k$. It is nonzero. But finite support makes $F^{(r)}v=0$ for large $r$, contradicting $E^{(r)}F^{(r)}v=\begin{bmatrix}n\\r\end{bmatrix}_\zeta v$. Hence $n\ge0$. [F1, F2, algebra]

2.1 For this simple cyclic module the span of $F^{(r)}v$, $r>n$, is stable. Positive divided powers landing at index $r-s\le n$ have coefficient $\begin{bmatrix}n-r+s\\s\end{bmatrix}_\zeta=0$, since the upper index is then a nonnegative integer smaller than $s$; all other terms remain in that span. Negative divided powers increase the index and toral operators act diagonally. This is a proper submodule, as it avoids the top weight, so it is zero. The module is thus a quotient of the specialized free rank-one string $W(n)$ with basis $u_0,\ldots,u_n$ and the actions in [F1]. On $W(n)$ the diagonal bilinear form $(u_r,u_r)=\begin{bmatrix}n\\r\end{bmatrix}_\zeta$, $(u_r,u_s)=0$ for $r\ne s$, is contravariant for $E^{(a)}\leftrightarrow F^{(a)}$ and fixes the torus. Indeed the required identity is $\begin{bmatrix}n\\r\end{bmatrix}_q\begin{bmatrix}r\\a\end{bmatrix}_q=\begin{bmatrix}n\\r-a\end{bmatrix}_q\begin{bmatrix}n-r+a\\a\end{bmatrix}_q$, valid as a Laurent-polynomial identity before specialization. Its radical is consequently stable. Every surviving weight line of the quotient by this radical can be raised to $u_0$ using $E^{(r)}$, since its coefficient is nonzero; the quotient is simple. Every proper graded submodule of $W(n)$ lies in the radical, since it cannot contain $u_0$ and the same raising test applies. Therefore the original simple module is this quotient. Its surviving indices are exactly those $r$ with $\begin{bmatrix}n\\r\end{bmatrix}_\zeta\ne0$, a set invariant under $r\mapsto n-r$ by Gaussian symmetry. Its character is reflected about coroot label zero. [F1, F2, step 1.1, algebra]

3.1 Every finite-dimensional graded rank-one module has a composition series in the graded module category: choose proper graded submodules of largest dimension and continue, so the process terminates. Its simple quotients have the symmetric characters proved in steps 1.1 and 2.1; character additivity proves symmetry for the original module. Coset by coset, the reflection sends $\mu$ to $\mu-\langle\mu,h_i\rangle\alpha_i$, so this is precisely $s_i$-invariance of $\operatorname{ch}M$. Applying this for each color gives Weyl invariance. [step 1.1, step 2.1, construct, algebra]

4.1 Now let $v$ be any nonzero rank-one highest vector, without simplicity. Its finite cyclic module is spanned by $F^{(r)}v$ and has support at $n-2r$, $r\ge0$. By step 3.1 this support is invariant under negation, forcing $n\ge0$. Its span of indices $r>n$ is a submodule by the calculation in step 2.1, and all its coroot labels are strictly negative. Applying step 3.1 to this finite submodule forces it to be zero. Thus every higher divided power $F^{(r)}v$ with $r>n$ vanishes. This proves the stated highest-vector assertion for every color. [step 2.1, step 3.1, algebra] ∎

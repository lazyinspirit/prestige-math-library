---
id: def-restriction-coproduct-on-the-graded-symmetric-group-character-ring
kind: definition
title: "The restriction coproduct on the graded symmetric-group character ring"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 1
deps:
  - def-graded-ordinary-representation-ring-of-symmetric-groups
  - def-sign-representation-and-restriction-of-a-representation
  - lem-character-ring-of-a-direct-product-is-the-tensor-product
  - def-virtual-character-and-character-ring-of-a-finite-group
  - def-external-direct-product-of-groups
  - def-tensor-product-of-modules-by-generators-and-relations
  - def-finite-symmetric-group-and-permutation-notation
  - def-subgroup
  - thm-external-direct-product-is-a-group
  - def-group-homomorphism
  - def-finite-dimensional-representation-of-a-group-over-a-field
  - def-character-of-a-complex-representation
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - thm-characters-of-direct-sums-tensor-products-and-duals
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, Example 26, printed p. 134: the comultiplication on the graded symmetric-group character ring defined by restriction to S_p×S_q"
---

## Definition

Let $R_S=\bigoplus_{n\ge0}R(S_n)$ be the graded abelian group of ordinary symmetric-group character rings ([[def-graded-ordinary-representation-ring-of-symmetric-groups]]). For $n\ge0$ and $a,b\ge0$ with $a+b=n$, regard $S_n$ as the permutations of $\{0,1,\ldots,n-1\}$ ([[def-finite-symmetric-group-and-permutation-notation]]) and set

$$A_{a,b}:=\{0,1,\ldots,a-1\},\qquad B_{a,b}:=\{a,a+1,\ldots,n-1\},$$

with an empty block when its size is zero. Define

$$\iota_{a,b}:S_a\times S_b\longrightarrow S_n,\qquad \iota_{a,b}(\sigma,\tau)(i):=\begin{cases}\sigma(i),&i\in A_{a,b},\\ a+\tau(i-a),&i\in B_{a,b}.\end{cases}$$

The map is injective and respects composition: it acts as $\sigma$ on the first block and as the translated permutation $\tau$ on the second. Its image

$$H_{a,b}:=\{g\in S_n:g(A_{a,b})=A_{a,b},\ g(B_{a,b})=B_{a,b}\}$$

is a subgroup ([[def-subgroup]]) identified with $S_a\times S_b$ by $\iota_{a,b}$; indeed the identity, products and inverses in the image are respectively $\iota_{a,b}(1,1)$, $\iota_{a,b}(\sigma\sigma',\tau\tau')$, and $\iota_{a,b}(\sigma^{-1},\tau^{-1})$ ([[def-external-direct-product-of-groups]], [[thm-external-direct-product-is-a-group]], [[def-group-homomorphism]]).

For $f\in R(S_n)$, restrict its virtual character to $H_{a,b}$ and pull it back along $\iota_{a,b}$. This is in $R(S_a\times S_b)$: write $f=\sum_j m_j\chi_{V_j}$ with $m_j\in\mathbb Z$ and $V_j$ finite-dimensional complex representations of $S_n$ ([[def-virtual-character-and-character-ring-of-a-finite-group]], [[def-finite-dimensional-representation-of-a-group-over-a-field]], [[def-character-of-a-complex-representation]]); each $V_j$ restricts to a representation of $H_{a,b}$ and, after pullback, of $S_a\times S_b$ ([[def-sign-representation-and-restriction-of-a-representation]]). By Maschke's theorem it is a finite direct sum of irreducible representations, and additivity of characters then puts its character in the integral span of irreducible characters, namely $R(S_a\times S_b)$ ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]], [[thm-characters-of-direct-sums-tensor-products-and-duals]]). Denote the resulting character by

$$f\circ\iota_{a,b}:S_a\times S_b\to\mathbb C,\qquad (f\circ\iota_{a,b})(\sigma,\tau)=f\bigl(\iota_{a,b}(\sigma,\tau)\bigr).$$

The external-product map

$$\Phi_{a,b}:R(S_a)\otimes_{\mathbb Z}R(S_b)\longrightarrow R(S_a\times S_b),\qquad \chi\otimes\psi\longmapsto\chi\boxtimes\psi,$$

is an isomorphism ([[lem-character-ring-of-a-direct-product-is-the-tensor-product]]). Define $\Delta_{a,b}(f)$ to be the unique element satisfying $\Phi_{a,b}(\Delta_{a,b}(f))=f\circ\iota_{a,b}$. The **restriction coproduct** is the $\mathbb Z$-linear map

$$\Delta:R_S\longrightarrow R_S\otimes_{\mathbb Z}R_S,\qquad \Delta(f):=\sum_{a=0}^{n}\Delta_{a,n-a}(f)\quad(f\in R(S_n)),$$

where the restriction and pullback maps and $\Phi_{a,b}^{-1}$ are $\mathbb Z$-linear, and each summand is included in the $(a,n-a)$ graded component. Extend this formula linearly to an arbitrary $f=\sum_n f_n\in R_S$; the sum is finite because $R_S$ is a direct sum. Thus $\Delta(R(S_n))\subseteq\bigoplus_{a+b=n}R(S_a)\otimes_{\mathbb Z}R(S_b)$, so $\Delta$ has degree zero and is a finite sum in each degree, with no completion ([[def-graded-ordinary-representation-ring-of-symmetric-groups]], [[def-tensor-product-of-modules-by-generators-and-relations]]). At the endpoints, $\Delta_{0,n}(f)=\mathbf1\otimes f$ and $\Delta_{n,0}(f)=f\otimes\mathbf1$; in particular $\Delta(c\mathbf1)=c(\mathbf1\otimes\mathbf1)$ in degree zero.

The coproduct is **cocommutative**. Let $\tau(x\otimes y)=y\otimes x$. The ordered block subgroups need not be equal: in $S_3$, the transposition $(0\,1)$ belongs to $H_{2,1}$ but not to $H_{1,2}$. They are conjugate by the block-swap permutation $\rho_{a,b}\in S_n$ given by $\rho_{a,b}(i)=b+i$ for $0\le i<a$ and $\rho_{a,b}(a+j)=j$ for $0\le j<b$. Directly from the block actions,

$$\rho_{a,b}\,\iota_{a,b}(\sigma,\tau)\,\rho_{a,b}^{-1}=\iota_{b,a}(\tau,\sigma).$$

Since every virtual character of $S_n$ is a class function, $f(g)=f(\rho_{a,b}g\rho_{a,b}^{-1})$; consequently the two restrictions, after exchanging factors, agree. Applying the injective maps $\Phi_{a,b}$ and $\Phi_{b,a}$ gives $\Delta_{b,a}(f)=\tau(\Delta_{a,b}(f))$. Summing over all $a+b=n$ proves $\tau\Delta(f)=\Delta(f)$. No form of the axiom of choice is used.

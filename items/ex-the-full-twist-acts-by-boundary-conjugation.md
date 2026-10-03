---
id: ex-the-full-twist-acts-by-boundary-conjugation
kind: example
title: "The full twist acts by boundary conjugation"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 6
deps: [def-artin-automorphisms-of-the-free-group, def-the-artin-representation-on-a-free-group, def-free-group, thm-reduced-words-form-the-free-group, lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians, def-standard-meridians-of-a-punctured-disk]
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 8-10 (x_1...x_n runs parallel to the boundary and is preserved; the full twist acts as conjugation)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, equations (14)-(15) and Theorem 15, printed pp. 112-114"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
---

## Example

Let $\Delta^2:=(\sigma_1\sigma_2\cdots\sigma_{n-1})^n\in B_n$ and
$\delta:=x_1x_2\cdots x_n\in F_n$. Then
$$\rho(\Delta^2)(x_i)=\delta\,x_i\,\delta^{-1}\qquad(1\le i\le n);$$
in particular the full twist acts by conjugation by the boundary word, which by
[[lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians]]
is the element $\delta$ represented by the positively oriented boundary loop
$\partial$.

## Facts & Assumptions

**Given:** the free group $F_n=\langle x_1,\dots,x_n\rangle$ with its reduced
words, the automorphisms $\rho(\sigma_i)$ of
[[def-artin-automorphisms-of-the-free-group]], the homomorphism
$\rho:B_n\to\operatorname{Aut}(F_n)$ of
[[def-the-artin-representation-on-a-free-group]], the braid
$\Gamma:=\sigma_1\sigma_2\cdots\sigma_{n-1}\in B_n$, and
$\delta_m:=x_1x_2\cdots x_m$ for $0\le m\le n$, with $\delta_0:=1$ and
$\delta_n=\delta$.

[F1] *The substitutions.*
$$\rho(\sigma_i)(x_i)=x_ix_{i+1}x_i^{-1},\quad \rho(\sigma_i)(x_{i+1})=x_i, \quad \rho(\sigma_i)(x_j)=x_j\ (j\notin\{i,i+1\}).$$
([[def-artin-automorphisms-of-the-free-group]].)

[F2] *The composite $U$. $\rho$ is a homomorphism, so*
$$U:=\rho(\Gamma)=\rho(\sigma_1)\rho(\sigma_2)\cdots\rho(\sigma_{n-1}) =\rho(\sigma_1)\circ\rho(\sigma_2)\circ\cdots\circ\rho(\sigma_{n-1})$$
as functions on $F_n$, and $\rho(\Delta^2)=\rho(\Gamma^n)=U^n$; two
endomorphisms of $F_n$ agree if they agree on the free basis
$x_1,\dots,x_n$. ([[def-the-artin-representation-on-a-free-group]],
[[def-free-group]].)

[F3] *The boundary word.* The class $[x_1]\cdots[x_n]$ corresponds to the
positively oriented boundary loop $\partial$ under the identification of
$\pi_1(D^2\setminus Q_n,d)$ with $F_n$ by the standard meridians
([[lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians]],
[[def-standard-meridians-of-a-punctured-disk]]).

## Proof

**Proof technique:** induction on $m$ for the formula
$$U^m(x_k)=\delta_m\,x_{k\oplus m}\,\delta_m^{-1}\qquad(0\le m\le n,\ 1\le k\le n),$$
where $k\oplus m$ denotes the index obtained by adding $m$ to $k$ modulo $n$ in
$\{1,\dots,n\}$.

1.1 *Base case $m=0$.* For $m=0$ the formula reads $x_k=\delta_0x_{k\oplus0}\delta_0^{-1}=x_k$, which holds since $U^0=\operatorname{id}$ and $\delta_0=1$. [F2, base]

1.2 *Induction hypothesis.* Assume that for some $m$ with $0\le m<n$ the formula $U^m(x_k)=\delta_mx_{k\oplus m}\delta_m^{-1}$ holds for every $k$. [ih]

1.3 *The action of $U$ on the generators and on $\delta_m$.* By [F1], applying the factors of $U$ from the right (that is, $\rho(\sigma_{n-1})$ first) to a basis letter gives $U(x_k)=x_1x_{k\oplus1}x_1^{-1}\qquad(1\le k\le n),$ with the wrap convention $x_{n\oplus1}=x_1$: for $k<n$ the factors $\rho(\sigma_{n-1}),\dots,\rho(\sigma_{k+1})$ fix $x_k$, the factor $\rho(\sigma_k)$ sends $x_k\mapsto x_kx_{k+1}x_k^{-1}$, and the factors $\rho(\sigma_{k-1}),\dots,\rho(\sigma_1)$ successively replace the left and right occurrences of $x_k$ by $x_{k-1},\dots,x_1$, leaving $x_1x_{k+1}x_1^{-1}$; for $k=n$ the factors send $x_n\mapsto x_{n-1}\mapsto\cdots\mapsto x_1$. Hence, multiplying the $m$ images and telescoping the inner conjugations, $U(\delta_m)=U(x_1)\cdots U(x_m) =(x_1x_2x_1^{-1})(x_1x_3x_1^{-1})\cdots(x_1x_{m+1}x_1^{-1}) =\delta_{m+1}x_1^{-1}.$ [F1, F2, algebra]

2.1 *The induction step.* By the induction hypothesis of step 1.2 and the fact that $U$ is an automorphism, $U^{m+1}(x_k)=U\bigl(\delta_mx_{k\oplus m}\delta_m^{-1}\bigr) =U(\delta_m)\,U(x_{k\oplus m})\,U(\delta_m)^{-1}.$ Substituting step 1.3 and using $(k\oplus m)\oplus1=k\oplus(m+1)$ gives $U^{m+1}(x_k)=\bigl(\delta_{m+1}x_1^{-1}\bigr) \bigl(x_1x_{k\oplus(m+1)}x_1^{-1}\bigr) \bigl(x_1\delta_{m+1}^{-1}\bigr) =\delta_{m+1}\,x_{k\oplus(m+1)}\,\delta_{m+1}^{-1}.$ [step 1.2, step 1.3, algebra]

3.1 *Discharge and conclusion.* Steps 1.1 and 2.1 establish the displayed formula for every $0\le m\le n$ by induction; at $m=n$ it reads $U^n(x_k)=\delta x_{k\oplus n}\delta^{-1}=\delta x_k\delta^{-1}$. By [F2] $\rho(\Delta^2)=U^n$, so $\rho(\Delta^2)(x_k)=\delta x_k\delta^{-1}$ for every $k$; by [F3] the element $\delta$ is the boundary word, so the full twist acts by conjugation by it. For $n=1$ there is no generator, $\Delta^2$ is the empty product, $U=\operatorname{id}$ and $\delta=x_1$, and the identity $\rho(1)(x_1)=x_1=\delta x_1\delta^{-1}$ holds; for $n=0$ the assertion is vacuous. All computations are finite substitutions in the free basis, and no choice principle is used. [F2, F3, step 1.1, step 2.1, discharge-induction] ∎

## Remarks

- The exponent convention is the frozen one of
  [[def-artin-automorphisms-of-the-free-group]]: the leftmost letter of a word
  is the outermost automorphism of the composite, so that $U$ applies
  $\rho(\sigma_{n-1})$ first. With the opposite (Artin's original) convention
  the same computation gives conjugation by $\delta^{-1}$, which is the
  displayed formula of the scaffold record.
- For $n=2$ the formula is $\rho(\sigma_1^2)(x_1)=x_1x_2x_1x_2^{-1}x_1^{-1}
=\delta x_1\delta^{-1}$ with $\delta=x_1x_2$, and
$\rho(\sigma_1^2)(x_2)=x_1x_2x_1^{-1}=\delta x_2\delta^{-1}$, which is the same statement
at rank two.

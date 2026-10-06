---
id: ex-specializing-burau-at-t-equals-one-recovers-permutation-data
kind: example
title: "Specializing Burau at t = 1 recovers permutation data"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
deps:
  - def-unreduced-burau-matrices
  - def-reduced-burau-homology-module
  - prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module
  - lem-the-invariant-vector-and-covector-of-the-unreduced-burau
  - lem-unreduced-burau-matrices-satisfy-the-artin-relations
  - thm-the-braid-group-surjects-onto-the-symmetric-group
  - thm-the-symmetric-group-has-the-coxeter-presentation
  - thm-von-dyck
  - def-finite-symmetric-group-and-permutation-notation
  - def-invertible-matrix-and-similarity-over-a-commutative-ring
  - def-the-laurent-polynomial-ring
  - lem-units-and-powers-of-the-laurent-polynomial-ring
  - def-ring-homomorphism
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey (background on Burau matrices, the cyclic cover and absolute homology)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, printed pp. 46-47; section 4.4, printed p. 52. Relative-module, basis and specialization calculations are supplied locally."
    - title: "Vasudha Bharathram, Joan S. Birman and Tara E. Brendle, The Burau representation is faithful for n = 4, arXiv:2607.05283v1 (6 July 2026), Introduction and section 2 (printed pp. 1-5), and section 4 (Theorem 4.1)"
      url: "https://arxiv.org/pdf/2607.05283v1"
      locator: "Introduction and section 2, printed pp. 1-5"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Let $n\ge2$. At $t=1$ the unreduced Burau matrices specialize to permutation matrices: the
block of [[def-unreduced-burau-matrices]] becomes
$\begin{pmatrix}0&1\\1&0\end{pmatrix}$, so
$\rho^{\mathrm{mat}}_n(1)(\sigma_i)$ is the permutation matrix of the
transposition $(i\,\,i+1)$ and the specialization factors through the
surjection $\pi_n:B_n\to S_n$ of
[[thm-the-braid-group-surjects-onto-the-symmetric-group]], giving the natural
permutation representation of $S_n$ on $\mathbb Z^n$. Under this specialization
the invariant vector $v=(1,\dots,1)^T$ spans a trivial submodule, and the short
exact sequence
$0\to\ker\sigma\to\Lambda_1^n\xrightarrow{(t-1)\sigma}(t-1)\Lambda_1\to0$ (the
image part of the exact sequence of
[[prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module]], used
here only through its choice-free exactness and connecting-map clauses; its
$B_n$-equivariance clause and the AC inherited there are not needed, and
$\sigma$ is the invariant covector) specializes at $t=1$ to
$$0\to\{x\in\mathbb Z^n:\textstyle\sum_i x_i=0\}\to\mathbb Z^n\xrightarrow{\ \sum\ }\mathbb Z\to0.$$
Over $\mathbb Q$ this splits as
$\mathbb Q^n=\mathbb Qv\oplus\{x:\sum_i x_i=0\}$, with $\mathbb Qv$ trivial and
the second summand the reduced permutation representation of $S_n$; over
$\mathbb Z$ the sum $\mathbb Zv+\{x:\sum_i x_i=0\}$ is only the proper
sublattice $\{x:\sum_i x_i\equiv0\pmod n\}$, so the rational splitting is not
an integral direct sum. The case $n=2$ gives the sign representation on the
reduced summand.

## Verification

**Given:** $n\ge2$, the ring $\Lambda_1=\mathbb Z[t^{\pm1}]$ with its
augmentation $\varepsilon:\Lambda_1\to\mathbb Z$, $t\mapsto1$ (kernel
$(t-1)$), the matrices $B_1,\dots,B_{n-1}$ and the homomorphism
$\rho^{\mathrm{mat}}_n:B_n\to\operatorname{GL}_n(\Lambda_1)$, the vectors
$v=(1,\dots,1)^T$ and $\sigma=(1,t,\dots,t^{n-1})$.

[A1] The matrices $B_i$, the homomorphism $\rho^{\mathrm{mat}}_n$, the invariant vector $v$ and covector $\sigma$ are as in [[def-unreduced-burau-matrices]], [[lem-unreduced-burau-matrices-satisfy-the-artin-relations]] and [[lem-the-invariant-vector-and-covector-of-the-unreduced-burau]].

[A2] The augmentation is a unital ring homomorphism with $\varepsilon(t^k)=1$ and $\ker\varepsilon=(t-1)$; the exact sequence $0\to\ker\sigma\to\Lambda_1^n\xrightarrow{(t-1)\sigma}(t-1)\Lambda_1\to0$ is the image part of [[prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module]], with $\sigma(x)=\sum_it^{i-1}x_i$ ([[def-the-laurent-polynomial-ring]], [[def-ring-homomorphism]]).

[A3] The braid group surjects onto the symmetric group by $\sigma_i\mapsto(i\,\,i+1)$, and $S_n$ has the Coxeter presentation with generators $s_i=(i\,\,i+1)$ and relations $s_i^2=1$, $s_is_{i+1}s_i=s_{i+1}s_is_{i+1}$, $s_is_j=s_js_i$ for $|i-j|>1$; von Dyck's theorem attaches a homomorphism to any generator assignment satisfying the relators ([[thm-the-braid-group-surjects-onto-the-symmetric-group]], [[thm-the-symmetric-group-has-the-coxeter-presentation]], [[thm-von-dyck]], [[def-finite-symmetric-group-and-permutation-notation]]).

[A4] Matrix arithmetic is entrywise over the commutative ring $\Lambda_1$ or $\mathbb Z$, and the matrix of a linear map in a fixed basis records the images of the basis vectors as columns ([[def-invertible-matrix-and-similarity-over-a-commutative-ring]]).

**Proof technique:** direct.

1.1 *Specialization of the generators.* Applying the augmentation $\varepsilon$ entrywise to $\rho^{\mathrm{mat}}_n$ gives the homomorphism $\Theta:=\varepsilon_*\circ\rho^{\mathrm{mat}}_n:B_n\to\operatorname{GL}_n(\mathbb Z)$, since $\varepsilon$ is a unital ring homomorphism [A2]. On the generator, $\varepsilon(1-t)=0$ and $\varepsilon(t)=1$, so the block of $B_i$ becomes $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and the identity entries stay $1$; hence $\Theta(\sigma_i)=E_i$, the permutation matrix of the transposition $(i\,\,i+1)$, namely the matrix swapping the $i$-th and $(i+1)$-st coordinates. [A1, A2, A4, algebra]

2.1 *Factorization through $\pi_n$.* The matrices $E_i$ satisfy $E_i^2=I$, $E_iE_{i+1}E_i=E_{i+1}E_iE_{i+1}$ and $E_iE_j=E_jE_i$ for $|i-j|>1$, because they are the matrices of the corresponding permutations of the coordinate basis. By the Coxeter presentation and von Dyck [A3] there is a homomorphism $\Phi:S_n\to\operatorname{GL}_n(\mathbb Z)$ with $\Phi(s_i)=E_i$, the natural permutation representation on $\mathbb Z^n$; then $\Phi\circ\pi_n$ and $\Theta$ are homomorphisms $B_n\to\operatorname{GL}_n(\mathbb Z)$ agreeing on the generators, hence equal. So the specialization factors through the surjection $\pi_n$ and is exactly the permutation representation. [A3, step 1.1]

3.1 *Invariant line and the specialized sequence.* Every permutation matrix fixes $v$, so $\mathbb Zv$ is a trivial submodule. Put $N=\ker\sigma$. Since $\sigma(e_1)=1$, every $x\in\Lambda_1^n$ has the unique decomposition $x=(x-\sigma(x)e_1)+\sigma(x)e_1$, giving $\Lambda_1^n=N\oplus\Lambda_1e_1$. Consequently $N\cap(t-1)\Lambda_1^n=(t-1)N$, and $N/(t-1)N$ injects into $\mathbb Z^n$. Its image is the sum-zero lattice: one inclusion follows by evaluating $\sigma(x)=0$ at $t=1$; conversely, if $\bar x\in\mathbb Z^n$ has sum zero, take its constant-coordinate lift $x$ and replace it by $x-\sigma(x)e_1$, which is in $N$ and still reduces to $\bar x$. Multiplication $a\mapsto(t-1)a$ is an isomorphism $\Lambda_1\to(t-1)\Lambda_1$, because $\Lambda_1$ is a domain and $t-1\ne0$ by [[lem-units-and-powers-of-the-laurent-polynomial-ring]]. Thus the specialized target is $(t-1)\Lambda_1/(t-1)^2\Lambda_1\cong\mathbb Z$, where the class of $(t-1)a$ maps to $\varepsilon(a)$; the map $(t-1)\sigma$ becomes the sum functional. This proves the asserted specialized exact sequence, without assuming that an arbitrary specialization preserves injectivity. [A1, A2, step 2.1, algebra]

4.1 *Rational splitting and integral failure.* Over $\mathbb Q$ every $x\in\mathbb Q^n$ is $(\sum_ix_i/n)v+(x-(\sum_ix_i/n)v)$ with the second summand of sum zero, and $\mathbb Qv\cap\{x:\sum_ix_i=0\}=0$ because $nav=0$ forces $a=0$; both summands are preserved by the permutation action, and $\mathbb Qv$ is trivial, so the second summand is the reduced permutation representation. Over $\mathbb Z$, an element of $\mathbb Zv+\{x:\sum_ix_i=0\}$ has coordinate sum $na$ for some $a\in\mathbb Z$, so the sum is contained in $\{x:\sum_ix_i\equiv0\bmod n\}$, and conversely $x$ with $n\mid\sum_ix_i$ is $av+y$ with $a=(\sum_ix_i)/n$ and $y$ of sum zero; the containment is proper because $(1,0,\dots,0)$ has sum $1$ and $n\ge2$. Hence the rational splitting is not an integral direct sum. [step 3.1, algebra]

5.1 *The case $n=2$.* For $n=2$ the sum-zero lattice is $\mathbb Z(1,-1)$, on which the transposition $(1\,\,2)$ acts by $x\mapsto-x$, the sign representation; this is the reduced summand of step 4.1. No choice principle is used. [step 4.1] ∎

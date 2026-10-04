---
id: lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word
kind: lemma
title: "Artin automorphisms permute meridian conjugacy classes and fix the boundary word"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 6
deps: [def-the-artin-representation-on-a-free-group, def-artin-automorphisms-of-the-free-group, def-free-group, thm-reduced-words-form-the-free-group, lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians, def-standard-meridians-of-a-punctured-disk]
justified_by: []
aliases: []
proof_strategy: direct
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
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 8-10 (each rho_beta(x_j) is a conjugate of a generator and rho_beta(x_1...x_n) = x_1...x_n)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, equation (13) and Theorem 15, printed pp. 112-113"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
---

## Statement

For every braid word $\beta$ in the generators
$\sigma_1^{\pm1},\dots,\sigma_{n-1}^{\pm1}$ and every $i$, the element
$\rho(\beta)(x_i)$ is conjugate in $F_n$ to one of the generators
$x_1,\dots,x_n$, and
$$\rho(\beta)(x_1x_2\cdots x_n)=x_1x_2\cdots x_n .$$
Here $x_1\cdots x_n$ is the boundary word, i.e. the element represented by the
positively oriented boundary loop $\partial$ by
[[lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians]].
No choice principle is used.

## Facts & Assumptions

**Given:** the free group $F_n=\langle x_1,\dots,x_n\rangle$ with its reduced
words, the generators $\rho(\sigma_i)^{\pm1}$ of
[[def-artin-automorphisms-of-the-free-group]], the homomorphism
$\rho:B_n\to\operatorname{Aut}(F_n)$ of
[[def-the-artin-representation-on-a-free-group]], an arbitrary braid word
$\beta$, and the boundary loop $\partial$ with its class of
[[lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians]].

[F1] *The generator substitutions.* For $1\le i\le n-1$,
$$\rho(\sigma_i)(x_i)=x_ix_{i+1}x_i^{-1},\qquad \rho(\sigma_i)(x_{i+1})=x_i, \qquad \rho(\sigma_i)(x_j)=x_j\ (j\notin\{i,i+1\}),$$
so $\rho(\sigma_i)$ sends $x_i$ to the conjugate $x_i\,x_{i+1}\,x_i^{-1}$ of
$x_{i+1}$, sends $x_{i+1}$ to the generator $x_i$, and fixes every other
generator; and
$$\rho(\sigma_i)(x_ix_{i+1})=(x_ix_{i+1}x_i^{-1})\,x_i=x_ix_{i+1},$$
so $\rho(\sigma_i)$ fixes the ordered product. The inverse
$\rho(\sigma_i)^{-1}$ has image formulas
$\rho(\sigma_i)^{-1}(x_i)=x_{i+1}$,
$\rho(\sigma_i)^{-1}(x_{i+1})=x_{i+1}^{-1}x_ix_{i+1}$ and fixes all other
generators, so it too carries every basis letter to a conjugate of a generator
and fixes the ordered product.
([[def-artin-automorphisms-of-the-free-group]].)

[F2] *The representation.* $\rho$ is a group homomorphism, so $\rho(\beta)$ is
the composite of the automorphisms attached to the letters of $\beta$, with the leftmost letter the outermost map (the rightmost map is evaluated
first), and $\rho$ of the empty word is the identity. Two endomorphisms
of $F_n$ agree as soon as they agree on the free basis
$x_1,\dots,x_n$, and equality of elements is decided by reduced words
([[def-the-artin-representation-on-a-free-group]], [[def-free-group]],
[[thm-reduced-words-form-the-free-group]]).

[F3] *The boundary word.* The class of the loop $x_1\cdots x_n$ is
$[x_1]\cdots[x_n]$, and under the identification of $\pi_1(D^2\setminus Q_n,d)$
with $F_n$ by the standard meridians it corresponds to the positively oriented
boundary loop $\partial$
([[lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians]],
[[def-standard-meridians-of-a-punctured-disk]]).

## Proof

**Proof technique:** direct, by generators and preservation under composition and
inversion.

1.1 *The generator substitutions have the two properties.* For each $i$ and each sign, $\rho(\sigma_i)^{\pm1}$ carries every basis letter $x_j$ to a conjugate of a generator: by [F1] the values are unchanged generators, $x_i x_{i+1} x_i^{-1}$, or $x_{i+1}^{-1}x_i x_{i+1}$, all of which are conjugates of generators (a generator is conjugate to itself via the empty word). Moreover $\rho(\sigma_i)^{\pm1}$ fixes the ordered product $\delta=x_1\cdots x_n$: for $\rho(\sigma_i)$ this is the last display of [F1], and for the inverse it follows by applying $\rho(\sigma_i)^{-1}$ to the equality $\rho(\sigma_i)(\delta)=\delta$ and using $\rho(\sigma_i)^{-1}\rho(\sigma_i)=\operatorname{id}$. [F1]

1.2 *The two properties are preserved by composition and inversion.* Let $A,B\in\operatorname{Aut}(F_n)$ satisfy: $A(x_j)$ and $B(x_j)$ are conjugate to generators for every $j$, and $A(\delta)=B(\delta)=\delta$. For the composite $(A\circ B)$, write $B(x_j)=Q^{-1}x_kQ$ with $Q\in F_n$; then $(A\circ B)(x_j)=A(Q)^{-1}\,A(x_k)\,A(Q),$ a conjugate of $A(x_k)$, which is a conjugate of a generator; and $(A\circ B)(\delta)=A(B(\delta))=A(\delta)=\delta$. For the inverse, abelianisation sends each basis vector $e_k$ to some $e_{\pi(k)}$; since the induced map is invertible, $\pi$ is a permutation. Thus for every $j$ there is a $k$ with $A(x_k)=Q^{-1}x_jQ$; applying $A^{-1}$ and rearranging gives $A^{-1}(x_j)=A^{-1}(Q)\,x_k\,A^{-1}(Q)^{-1},$ a conjugate of a generator, and $A^{-1}(\delta)=\delta$ because $A(\delta)=\delta$. [F1, algebra]

2.1 *Induction on the letters of the word.* Let $\beta$ be a braid word $\beta_1\beta_2\cdots\beta_m$ with letters $\beta_k\in\{\sigma_1^{\pm1},\dots,\sigma_{n-1}^{\pm1}\}$. If $m=0$, then $\beta$ is the empty word and $\rho(\beta)=\operatorname{id}$, for which $\rho(\beta)(x_j)=x_j$ is a conjugate of a generator and $\rho(\beta)(\delta)=\delta$. If $m\ge1$, write $\beta=\beta_1\beta'$; by [F2] $\rho(\beta)=\rho(\beta_1)\circ\rho(\beta')$, where $\rho(\beta_1)^{\pm1}$ is one of the automorphisms of step 1.1 and, by induction on $m$, $\rho(\beta')$ carries every basis letter to a conjugate of a generator and fixes $\delta$. Step 1.2 applied to $A=\rho(\beta_1)$ and $B=\rho(\beta')$ then gives both properties for $\rho(\beta)$. [F2, step 1.1, step 1.2]

3.1 *Conclusion.* Steps 1.1, 1.2 and 2.1 show that every braid word $\beta$ induces an automorphism carrying each $x_i$ to a conjugate of a generator and fixing $\delta=x_1\cdots x_n$; by [F3] this element is the one represented by the boundary loop $\partial$, which proves the statement. Every verification above was a finite computation with the displayed substitutions, so no choice principle is used. [F3, step 2.1] ∎

## Remarks

- The two properties are exactly the necessary conditions of Artin's
  characterization of the braid subgroup of $\operatorname{Aut}(F_n)$: see
  `thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n`.
- Only the direction from the word to the automorphism is asserted here; the
  converse, that every automorphism with the two properties comes from a braid
  word, is
  `thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism`.

---
id: ex-a-noninvolutive-one-dimensional-yang-baxter-operator
kind: example
title: "A non-involutive one-dimensional Yang–Baxter operator"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps: [thm-a-yang-baxter-operator-gives-braid-group-representations, prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group, def-exponent-sum-and-writhe-of-a-braid, def-yang-baxter-operator-on-an-object]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.2 Remark 8.2.5 (the representation attached to an object of a braided category), printed p. 198; §8.1 Definition 8.1.12, printed p. 197"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Over $k=\mathbb Q$, let $X=\mathbb Q e$ be one-dimensional and put
$R(e\otimes e)=2\,e\otimes e$. Then $R$ is invertible, with inverse
multiplication by $\tfrac12$, and satisfies the Yang–Baxter equation: both
sides act on the single basis vector $e\otimes e\otimes e$ of
$X^{\otimes3}$ by multiplication by $8$. The representation of
[[thm-a-yang-baxter-operator-gives-braid-group-representations]] on
$X^{\otimes n}$ is therefore one-dimensional, with
$\rho_n(\sigma_i)=2$ for every $i$, so $\rho_n(\beta)=2^{w(\beta)}$ with $w$
the exponent sum ([[def-exponent-sum-and-writhe-of-a-braid]]). Since $R^2=4$,
the operator is not involutive: by
[[prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group]]
the two-strand action does not factor through $S_2$, and in fact no
$\rho_n$ with $n\ge2$ factors through $S_n$, because a factorization would force
$\rho_n(\sigma_i)^2=1$ while $\rho_n(\sigma_i)^2=4$. The character
$B_n\to\mathbb Q^{\times}$, $\beta\mapsto 2^{w(\beta)}$, is a genuine
non-involutive braid character, and for $n\ge2$ it fails symmetric-group factorization; its one-strand action is trivial. It separates the two Markov
stabilizations since $w$ shifts by $\pm1$ there.

## Facts & Assumptions

**Given:** the field $k=\mathbb Q$, the one-dimensional vector space $X=\mathbb Q e$, and the endomorphism $R$ of $X\otimes X$ with $R(e\otimes e)=2\,e\otimes e$.

[L1] A Yang–Baxter operator on $X$ is an invertible $R\colon X\otimes X\to X\otimes X$ satisfying the cubic equation ([[def-yang-baxter-operator-on-an-object]]); it yields homomorphisms $\rho_n\colon B_n\to\operatorname{Aut}(X^{\otimes n})$ sending $\sigma_i$ to the local operator at position $i$ ([[thm-a-yang-baxter-operator-gives-braid-group-representations]]).

[L2] If $\rho_2$ factors through $\pi_2\colon B_2\to S_2$, then $R^2=1_{X\otimes X}$; more generally, if $\rho_n$ factors through $\pi_n$ for some $n\ge2$, then $R_i^2=1_{X^{\otimes n}}$ for every $i$ ([[prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group]]).

[F1] The exponent sum $w\colon B_n\to\mathbb Z$ is additive on Artin words and $w(\sigma_i^{\pm1})=\pm1$ ([[def-exponent-sum-and-writhe-of-a-braid]]); in particular $\rho_n(\beta)=2^{w(\beta)}$ for a one-dimensional representation with $\rho_n(\sigma_i)=2$.

## Verification

1.1 **Invertibility and the cubic equation.** Multiplication by $2$ on the one-dimensional space $X\otimes X\cong\mathbb Q$ is invertible with inverse multiplication by $\tfrac12$. Both the left- and the right-hand side of the cubic equation are, on the single basis vector $e\otimes e\otimes e$ of the one-dimensional space $X^{\otimes3}$, multiplication by $2\cdot2\cdot2=8$; hence they agree, and $R$ is a Yang–Baxter operator on $X$ in the sense of [L1]. [L1, given, algebra]

2.1 **The one-dimensional braid character.** Since $X^{\otimes n}$ is one-dimensional, each local operator $R_i$ is multiplication by $2$, so [L1] gives $\rho_n(\sigma_i)=2$ for every $i$, and additivity of the exponent sum [F1] on Artin words gives $\rho_n(\beta)=2^{w(\beta)}$ for every $\beta\in B_n$. [L1, F1, step 1.1]

3.1 **Non-involutivity and failure of factorization.** From $R^2(e\otimes e)=4\,e\otimes e$ we get $R^2=4\cdot1_{X\otimes X}\ne1_{X\otimes X}$. By [L2] the two-strand action $\rho_2$ does not factor through $\pi_2$. For any $n\ge2$, if $\rho_n$ factored through $\pi_n$ then [L2] would give $R_i^2=1_{X^{\otimes n}}$; but $R_i^2$ is multiplication by $4$ on the one-dimensional space $X^{\otimes n}$, so $R_i^2\ne1$. Hence no $\rho_n$ with $n\ge2$ factors through $S_n$; for $n=1$ the braid and symmetric groups are trivial and the action factors through them, and the character of step 2.1 is a genuine non-involutive braid character. Finally, since $w(\iota_n(\beta)\sigma_n^{\pm1})=w(\beta)\pm1$, the values $2^{w}$ on the two stabilizations of a braid differ by a factor $4$, so the character separates them. [L2, F1, step 2.1, algebra]

4.1 **Conclusion.** The one-dimensional operator $R=2\cdot\operatorname{id}$ is an invertible, non-involutive solution of the Yang–Baxter equation, and its braid actions are the one-dimensional characters $2^{w}$ that, for $n\ge2$, do not factor through the symmetric groups. All computations are finite and use no choice principle. [step 1.1, step 2.1, step 3.1] ∎ 
---
dependency_level: 14
id: lem-trivial-ray-hecke-character-has-a-positive-simple-pole
kind: lemma
title: The trivial ray Hecke function has a positive simple pole
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-ray-hecke-unit-domain-mellin-identity
- lem-ray-hecke-theta-tail-and-meromorphic-mellin
- lem-ray-hecke-signed-gaussian-theta-transformation
- lem-imprimitive-ray-class-hecke-finite-euler-correction
- thm-finiteness-of-the-number-field-class-group
- def-euler-gamma-function
- thm-gamma-meromorphic-continuation
- cor-gamma-function-has-no-zeros
- thm-finite-order-hecke-l-euler-product
- thm-dedekind-zeta-euler-product
- def-axiom-of-choice
- def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: Assume AC and Countable Choice. Choice is inherited from the actual number-field, unit, lattice
  and integration suppliers; no cited external theorem is imported.
sources:
  references:
  - title: Jürgen Neukirch, Algebraic Number Theory, Chapter VII
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: §5 and §8 Mellin pole mechanism; locally proved zero-term specialization; full local finite-order
      specialization below.
---

## Statement

Assume AC and Countable Choice. For every modulus $\mathfrak m$ the trivial ray-character L-function is meromorphic on $\operatorname{Re}s>0$, with a simple pole at $s=1$ of positive residue and no other pole there. It equals
$$L(s,1_{\mathfrak m})=\zeta_K(s)\prod_{\mathfrak p\mid\mathfrak m_0}(1-(N\mathfrak p)^{-s}).$$
In particular $L(s,1_{\mathfrak m})\to+\infty$ along real $s\downarrow1$, and the series $\sum_{(\mathfrak a,\mathfrak m_0)=1}(N\mathfrak a)^{-1}$ diverges. This proof derives the pole from the local Mellin zero terms rather than assuming a class-number formula.

## Facts & Assumptions

**Given:** The modulus and choice branch in the Statement.

[F1] The exact unit-domain Mellin formula and two-constant continuation hold, with $a_C=\chi(C)\operatorname{vol}(F)/|\mu_K|$ for an unramified even character and $W_1=1$. [[lem-ray-hecke-unit-domain-mellin-identity]] [[lem-ray-hecke-theta-tail-and-meromorphic-mellin]] [[lem-ray-hecke-signed-gaussian-theta-transformation]]

[F2] The ordinary class group is finite and nonempty. [[thm-finiteness-of-the-number-field-class-group]]

[F3] Gamma is holomorphic and nonzero on the right half-plane and positive at positive real arguments by its Euler integral. [[def-euler-gamma-function]] [[thm-gamma-meromorphic-continuation]] [[cor-gamma-function-has-no-zeros]]

[F4] The Hecke and zeta Euler products agree with their ideal series on $\operatorname{Re}s>1$, and the primitive inducing correction deletes exactly the extra finite prime factors. [[lem-imprimitive-ray-class-hecke-finite-euler-correction]] [[thm-finite-order-hecke-l-euler-product]] [[thm-dedekind-zeta-euler-product]]

[A1] AC/CC are retained through [F1]–[F4]. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 Apply [F1] with trivial finite and real modulus and the trivial character. Then $e=0$, $z=s/2$, $\kappa=1/2$ and both zero constants are $a_0=\operatorname{vol}(F)/|\mu_K|>0$. Positivity and finiteness of this volume follow from its full-dimensional parallelepiped in logarithmic coordinates; if its dimension is zero its normalized measure is $1$. The Mellin formula has rational part $-a_0/z+a_0/(z-1/2)$. Thus every completed partial function has residue $2a_0$ at $s=1$. Summing the finitely many classes gives a positive residue $2h_Ka_0$, with no possible poles other than $0,1$. [F1, F2, algebra]

2.1 On $\operatorname{Re}s>0$ division by $|d_K|^{s/2}\Gamma_{\mathbb R}(s)^{r_1}\Gamma_{\mathbb C}(s)^{r_2}$ is legitimate by [F3]. By [F4] the quotient is $\zeta_K(s)$ on its initial half-plane. Hence it supplies a meromorphic continuation on the right half-plane, with its sole pole at $1$ simple and with positive residue. The finite corrections in [F4] give the displayed trivial-ray formula. Each has positive value $1-(N\mathfrak p)^{-1}$ at $1$, preserving the positive simple pole. [F3, F4, step 1.1, algebra]

3.1 The pole with positive residue makes the real values tend to $+\infty$. If the nonnegative ideal series at exponent $1$ were finite, it would bound the series at every larger real exponent and therefore bound these same Euler-product values by [F4], a contradiction. This proves divergence without using any class-field theorem. [F4, step 2.1, algebra] ∎ 
---
id: lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity
kind: lemma
title: Kernel of the unit logarithm is the roots of unity
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-archimedean-embeddings-and-number-field-signature
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-integral-element-and-algebraic-integer
  - def-logarithmic-unit-embedding
  - def-ring-of-integers-of-a-number-field
  - def-roots-of-unity-in-a-field
  - lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one
  - lem-complex-conjugation-and-modulus-laws
  - lem-roots-of-unity-in-a-number-field-are-finite
  - prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group
  - thm-kronecker-root-of-unity-criterion
  - thm-natural-logarithm-laws
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 Prop. 5.8 p.87: the kernel of L on U is mu(K)."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§8.1 Lemmas 8.1.7-8.1.8 p.90."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "proof of Prop. 15.11(1) pp.6-7: ker(Log) = mu(K)."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

$\ker\bigl(\lambda|_{\mathcal O_K^\times}\bigr)=\mu(K)$, the group of roots of
unity contained in $K$; in particular the kernel is finite and is the torsion
subgroup of $\mathcal O_K^\times$.

## Facts & Assumptions

**Given:** A number field $K$ with embeddings $\sigma_1,\dots,\sigma_{r_1}$ and
$\tau_1,\dots,\tau_{r_2}$ as in the definition of the logarithmic embedding
$\lambda$ ([[def-logarithmic-unit-embedding]],
[[def-archimedean-embeddings-and-number-field-signature]]).

[F1] For $x\in K^{\times}$,
$\lambda(x)=(\log|\sigma_1x|,\dots,\log|\sigma_{r_1}x|,2\log|\tau_1x|,\dots,2\log|\tau_{r_2}x|)$,
the $\sigma_i$ and $\tau_j$ being the real and chosen complex embeddings of $K$
([[def-logarithmic-unit-embedding]]).

[F2] $\mu(K)$ is the set of $\zeta\in K$ with $\zeta^{N}=1$ for some $N\ge1$;
for fixed $N$ the set $\mu_N(K)$ is a finite cyclic subgroup of $K^{\times}$,
and an element of a field is a root of unity exactly when it has finite order
in the multiplicative group ([[def-roots-of-unity-in-a-field]],
[[prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group]]).

[F3] If $\zeta\in K$ satisfies $\zeta^{N}=1$, then $\zeta$ is a root of the
monic polynomial $X^{N}-1\in\mathbb Z[X]$, hence is integral over $\mathbb Z$
and lies in $\mathcal O_K$; its inverse $\zeta^{N-1}$ lies in $\mathcal O_K$ as
well, so $\zeta\in\mathcal O_K^\times$
([[def-integral-element-and-algebraic-integer]],
[[def-ring-of-integers-of-a-number-field]]).

[F4] Modulus is multiplicative, and $|\overline z|=|z|$: writing $z=a+bi$,
the coordinate definition gives $|\overline z|=\sqrt{a^2+(-b)^2}
=\sqrt{a^2+b^2}=|z|$. Thus, for an embedding $\psi:K\to\mathbb C$ and
$\zeta\in K$ with $\zeta^N=1$, $\psi(\zeta)^N=1$ implies
$|\psi(\zeta)|^N=|\psi(\zeta)^N|=1$ and $|\psi(\zeta)|=1$
([[def-complex-conjugate-real-imaginary-part-and-modulus]],
[[lem-complex-conjugation-and-modulus-laws]]).

[F5] The natural logarithm satisfies $\log1=0$ and is strictly increasing on
$(0,\infty)$ ([[thm-natural-logarithm-laws]]); hence $\log a=0$ for $a>0$
forces $a=1$.

[F6] If $0\ne\alpha\in\mathcal O_K$ has all its complex conjugates of modulus
at most $1$, then $\alpha$ is a root of unity
([[thm-kronecker-root-of-unity-criterion]]).

[F7] The group $\mu(K)$ of roots of unity in the number field $K$ is finite
([[lem-roots-of-unity-in-a-number-field-are-finite]]).

[F8] A unit $u$ of $\mathcal O_K$ satisfies $N_{K/\mathbb Q}(u)=\pm1$, so in
particular $u\ne0$
([[lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one]]).

## Proof

**Proof technique:** compare the kernel of $\lambda$ with $\mu(K)$ in both
directions, the forward direction by Kronecker's criterion and the reverse by
the multiplicativity of the embeddings.

1.1 Every root of unity $\zeta\in\mu(K)$ lies in $\mathcal O_K^\times$, and $\mu(K)$ is a subgroup of $\mathcal O_K^\times$: each $\zeta$ lies in $\mathcal O_K$ with inverse $\zeta^{N-1}$ for $\zeta^{N}=1$; the product of roots of unity of orders $m$ and $k$ is a root of unity of order dividing $mk$, and the inverse of a root of unity is a root of unity. [F2, F3]

1.2 Let $\zeta\in\mu(K)$ with $\zeta^{N}=1$. For every real embedding $\sigma$ and every chosen complex embedding $\tau$ one has $\sigma(\zeta)^{N}=1=\tau(\zeta)^{N}$, so $|\sigma(\zeta)|=|\tau(\zeta)|=1$ by [F4]; therefore $\log|\sigma(\zeta)|=\log1=0$ and $2\log|\tau(\zeta)|=0$ by [F5], and $\lambda(\zeta)=0$. Hence $\mu(K)\subseteq\ker(\lambda|_{\mathcal O_K^\times})$. [F1, F4, F5]

1.3 Conversely let $u\in\mathcal O_K^\times$ with $\lambda(u)=0$. Every coordinate of $\lambda(u)$ vanishes: $\log|\sigma_i u|=0$ for every real embedding and $2\log|\tau_j u|=0$ for every chosen complex embedding; by [F5] this gives $|\sigma_i u|=|\tau_j u|=1$. Every complex conjugate of $u$ is a real embedding value, a chosen value $\tau_j(u)$, or its conjugate $\overline{\tau_j(u)}$; by [F4], the latter also has modulus $1$. Thus all conjugates have modulus at most $1$. The unit $u$ is a nonzero algebraic integer by [F8], so Kronecker's criterion [F6] makes it a root of unity, that is, $u\in\mu(K)$. Hence $\ker(\lambda|_{\mathcal O_K^\times})\subseteq\mu(K)$. [F1, F4, F5, F6, F8]

2.1 Steps 1.2 and 1.3 give $\ker(\lambda|_{\mathcal O_K^\times})=\mu(K)$; this kernel is finite by [F7]. Moreover an element $u\in\mathcal O_K^\times$ has finite order in the group $\mathcal O_K^\times$ exactly when $u^{N}=1$ for some $N\ge1$, that is, exactly when $u$ is a root of unity in $K$, by [F2]; hence $\mu(K)$ is the torsion subgroup of $\mathcal O_K^\times$, and the kernel is both finite and the torsion subgroup. [F2, F7, step 1.2, step 1.3] ∎

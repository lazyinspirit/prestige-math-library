---
id: def-abelian-chebotarev-weighted-prime-ideal-sum
kind: definition
title: "Weighted prime-ideal sum for an abelian Frobenius class"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps:
  - def-finite-order-ray-class-hecke-character-and-l-function
  - thm-abelian-artin-l-series-equals-hecke-l-series
  - def-prime-above-and-residue-degree
  - def-arithmetic-frobenius-coset
  - def-absolute-norm-of-an-ideal
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - lem-finitely-many-number-field-ideals-of-bounded-norm
  - lem-character-orthogonality-for-finite-abelian-groups
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
verification:
  precheck: pass
axiom_use: >-
  The finite ray-class and Artin interpretation is supplied under AC, Countable
  Choice, and DC. The finite-support and character-orthogonality verifications
  add no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. C. Lagarias and A. M. Odlyzko, Effective Versions of the Chebotarev Density Theorem, §§6–7"
      url: "https://aareyanmanzoor.github.io/assets/articles/lagarias-odlyzko.pdf"
      locator: "Printed pp.432–439: Hecke L-functions, prime-power sums, and contour shifts in the proof of effective Chebotarev."
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §10, Theorem 10.6"
      url: "https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf"
      locator: "Printed pp.525–526: comparison of one-dimensional Artin factors and ray-class Hecke values at unramified primes."
    - title: "Sourabhashis Das, MSc thesis, §3.5.1 Lemma 3.14 and §3.5.2 Proposition 3.16"
      url: "https://opus.uleth.ca/server/api/core/bitstreams/e36dbba6-c698-43cb-a9aa-5b32083c282b/content"
      locator: "Printed pp.89–96: a smoothed prime-ideal sum, ray-class character expansion, and the main pole contribution."
---

## Definition

Assume AC, Countable Choice, and Dependent Choice. Let $K$ be a number field,
and let $\mathfrak m=(\mathfrak m_0,S_\infty)$ be a modulus, where
$\mathfrak m_0$ is a nonzero integral ideal and $S_\infty$ is a finite set
of real embeddings of $K$. Let
$G=\operatorname{Cl}_{\mathfrak m}(K)$ be its finite abelian ray class group.
Write $\widehat G=\operatorname{Hom}(G,\mathbb C^\times)$ for its character
group. Let $C\in G$, $X>0$, and let
$W\in C_c^\infty((0,\infty),\mathbb C)$, meaning that $W$ is a smooth
complex-valued function on $(0,\infty)$ whose support is compact and contained
in $(0,\infty)$. For $s\in\mathbb C$, set
$$\widetilde W(s)=\int_0^\infty W(u)u^{s-1}\,du.$$
All logarithms are natural, and powers of positive real numbers use the real
logarithm.
The **smoothed prime-power sum in the ray class $C$** is
$$\Psi_C(X;W)=\sum_{\substack{\mathfrak p\nmid\mathfrak m_0}} \sum_{\substack{k\ge1,\;[\mathfrak p]^k=C}} (\log N\mathfrak p)W\!\left(\frac{(N\mathfrak p)^k}{X}\right),$$
where $\mathfrak p$ ranges over nonzero prime ideals of $\mathcal O_K$,
$\mathfrak p\nmid\mathfrak m_0$ means it does not divide the integral ideal
$\mathfrak m_0$, $[\mathfrak p]$ is its ray class, and $N\mathfrak p$ is its
absolute norm.
For $\chi\in\widehat G$, set
$$\Psi_\chi(X;W)=\sum_{\mathfrak p\nmid\mathfrak m_0}\sum_{k\ge1} \chi([\mathfrak p])^k(\log N\mathfrak p) W\!\left(\frac{(N\mathfrak p)^k}{X}\right).$$
When $L/K$ is the ray class field, the ray-class Artin map sends
$[\mathfrak p]$ to the arithmetic Frobenius at every
$\mathfrak p\nmid\mathfrak m_0$; thus $C$ is equivalently an abelian
Frobenius class. These sums are finite, and
$$\Psi_C(X;W)=\frac1{|G|}\sum_{\chi\in\widehat G} \overline{\chi(C)}\,\Psi_\chi(X;W).$$

## Definition references

[[def-finite-order-ray-class-hecke-character-and-l-function]]

[[thm-abelian-artin-l-series-equals-hecke-l-series]]

[[def-prime-above-and-residue-degree]]

[[def-arithmetic-frobenius-coset]]

[[def-absolute-norm-of-an-ideal]]

[[lem-finitely-many-number-field-ideals-of-bounded-norm]]

[[lem-character-orthogonality-for-finite-abelian-groups]]

## Facts & Assumptions

**Given:** AC, Countable Choice, and DC; a number field $K$, modulus $\mathfrak m$,
its ray class group $G$, a class $C\in G$, $X>0$, and
$W\in C_c^\infty((0,\infty),\mathbb C)$.

[A1] The Axiom of Choice, Countable Choice, and Dependent Choice are the
explicit assumptions for the ray-class and Artin interpretation in this
definition; the finite support and character calculations add no choice.
[[def-axiom-of-choice]]
[[def-countable-choice]]
[[def-dependent-choice]]

[F1] A finite-order ray-class Hecke character is a homomorphism on the finite
ray class group, extended by zero to ideals divisible by $\mathfrak m_0$;
the ray-class interpretation and its finite Artin group use AC, Countable
Choice, and DC. [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F2] For $\mathfrak p\nmid\mathfrak m_0$, the ray-class Artin map sends
$[\mathfrak p]$ to the arithmetic Frobenius coset, whose convention is the
residue-field map $x\mapsto x^{N\mathfrak p}$; the Artin and Hecke character
values agree at these unramified primes.
[[thm-abelian-artin-l-series-equals-hecke-l-series]]
[[def-arithmetic-frobenius-coset]]

[F3] A nonzero integral ideal has absolute norm
$N\mathfrak a=|\mathcal O_K/\mathfrak a|$; for a nonzero prime ideal the
quotient is a finite field and therefore has at least two elements.
[[def-absolute-norm-of-an-ideal]]
[[lem-nonzero-number-field-ideal-has-finite-quotient]]

[F4] Only finitely many nonzero integral ideals have norm at most any fixed
real bound $B\ge1$.
[[lem-finitely-many-number-field-ideals-of-bounded-norm]]

[F5] For a finite abelian group, the sum over its complex characters is
$|G|$ on the identity and $0$ on any other element.
[[lem-character-orthogonality-for-finite-abelian-groups]]

[F6] For a finite extension $L/K$, a prime $\mathfrak P$ lies above
$\mathfrak p$ when its contraction to $\mathcal O_K$ is $\mathfrak p$;
residue degree is the degree of the corresponding residue-field extension.
[[def-prime-above-and-residue-degree]]

## Verification

**Given:** The data in the Definition.

1.1 Choose $0<a<b<\infty$ with $\operatorname{supp}(W)\subseteq[a,b]$. Every nonzero summand has $(N\mathfrak p)^k\le bX$. If $bX<1$ there are no such summands; otherwise [F4] gives finitely many prime ideals of norm at most $bX$, and for each one the inequality $(N\mathfrak p)^k\le bX$ permits only finitely many $k$ because [F3] gives $N\mathfrak p\ge2$. Hence both displayed sums are finite. [F3, F4, given, algebra]

2.1 For each prime power, put $g=[\mathfrak p]^k\in G$. By [F5], $|G|^{-1}\sum_{\chi\in\widehat G}\overline{\chi(C)}\chi(g)$ equals $1$ when $g=C$ and $0$ otherwise. Multiplying by its weight and summing over the finite set from step 1.1 gives the character expansion in the Definition. The Frobenius interpretation follows from [F1], [F2], and the prime-above convention [F6]. [A1, F1, F2, F5, F6, step 1.1, algebra] ∎


---
id: cor-negative-degree-no-sections-rr
kind: corollary
title: "No sections in negative degree"
status: published
origin: pipeline
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-little-l-divisor
  - def-riemann-roch-space-of-divisor
  - lem-degree-effective-divisor-nonnegative
  - lem-effective-divisors-sections-mod-scalars
  - thm-principal-divisor-degree-zero-proper-curve
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the divisor and degree
suppliers. Let $k$ be a field, let $C$ be a smooth proper geometrically
integral curve over $k$ ([[def-algebraic-curve-over-field]]) and let $D$ be a
divisor on $C$ ([[def-divisor-smooth-proper-curve]]). If
$\deg_k(D)<0$ then $L(D)=0$ and $l(D)=0$
([[def-riemann-roch-space-of-divisor]], [[def-little-l-divisor]]). The proof
given is the effective-divisor argument: a nonzero $f\in L(D)$ would exhibit
the effective divisor $\operatorname{div}(f)+D$ linearly equivalent to $D$,
whose degree is therefore $\deg_k(D)$, contradicting the nonnegativity of the
degree of an effective divisor. It does not appeal to the Riemann inequality,
which for negative degree would only give the vacuous bound
$l(D)\ge\deg_k(D)+1-g$ with a nonpositive right-hand side; it cannot ensure a nonzero section.


## Facts & Assumptions

**Given:** a field $k$, a smooth proper geometrically integral curve $C$ over $k$, a divisor $D$ on $C$ with $\deg_k(D)<0$, and an element $f\in L(D)$.

[F1] The Riemann-Roch space: $L(D)=\{f\in k(C)^\times:\operatorname{div}(f)+D\ge0\}\cup\{0\}$ is the $k$-subspace of functions whose poles are no worse than $-D$ allows, membership being read coefficientwise as $\operatorname{ord}_x(f)+n_x\ge0$ at every closed point $x$, and $\operatorname{div}(f)=\sum_x\operatorname{ord}_x(f)[x]$ ([[def-riemann-roch-space-of-divisor]]).

[F2] The dimension: $l(D)=\dim_kL(D)$ is the dimension of the Riemann-Roch space, so $L(D)=0$ exactly when $l(D)=0$ ([[def-little-l-divisor]]).

[F3] Divisors and degree: a divisor on $C$ is a finite formal $\mathbb Z$-linear combination of closed points, the $k$-degree is $\deg_k(D)=\sum_xn_x[\kappa(x):k]$, and $\deg_k$ is a group homomorphism on the divisor group ([[def-divisor-smooth-proper-curve]], [[def-degree-divisor-proper-curve]]).

[F4] Effective divisors: if $D=\sum_xn_x[x]$ is effective then $\deg_k(D)\ge0$, and $\deg_k(D)=0$ only for $D=0$; conversely an effective divisor of negative degree cannot exist ([[lem-degree-effective-divisor-nonnegative]]).

[F5] Sections versus effective divisors: for every nonzero $f\in L(D)$ the divisor $\operatorname{div}(f)+D$ is an effective divisor on $C$ linearly equivalent to $D$; in particular $L(D)=0$ if and only if no effective divisor is linearly equivalent to $D$ ([[lem-effective-divisors-sections-mod-scalars]]).

[F6] The current [[thm-principal-divisor-degree-zero-proper-curve]] states that a principal divisor $\operatorname{div}(f)$ of a nonzero rational function on a normal proper curve has degree $0$, equivalently that linearly equivalent divisors have equal degree. The smooth curve $C$ is normal by the local-ring and normality clause of [[def-divisor-smooth-proper-curve]], so this theorem applies at step 2.1.

[F7] The Axiom of Choice is available and is inherited only through the suppliers named above, in particular the principal-divisor degree theorem of [F6]; the proof below makes no selection ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct contradiction; a nonzero section would produce an effective divisor of the same negative degree, and effective divisors have nonnegative degree.

1.1 A nonzero section and its effective divisor. Suppose $f\in L(D)$ with $f\ne0$. By [F1] membership means $\operatorname{div}(f)+D\ge0$ coefficientwise, so $E:=\operatorname{div}(f)+D$ is an effective divisor on $C$; by [F5] the divisor $E$ is linearly equivalent to $D$, the difference being the principal divisor $\operatorname{div}(f)$. [F1, F5]

2.1 Its degree. By [F3] the degree is additive on the divisor group, so $\deg_k(E)=\deg_k(\operatorname{div}(f))+\deg_k(D)$, and by the principal-divisor degree theorem [F6] the principal divisor $\operatorname{div}(f)$ has degree $0$; hence $\deg_k(E)=\deg_k(D)$, which is negative by hypothesis. [F3, F6, step 1.1]

3.1 Contradiction and vanishing. By [F4] the effective divisor $E$ of step 1.1 has $\deg_k(E)\ge0$, contradicting $\deg_k(E)=\deg_k(D)<0$ from step 2.1. Hence $L(D)$ contains no nonzero element, that is $L(D)=0$, and then $l(D)=\dim_kL(D)=0$ by [F2]. [F2, F4, step 1.1, step 2.1]

4.1 Conclusion and choice accounting. Steps 1.1 through 3.1 show that $\deg_k(D)<0$ forces $L(D)=0$ and $l(D)=0$ by the effective-divisor argument; the Riemann inequality is not used, and indeed for negative degree it would only bound $l(D)$ from below by the nonpositive number $\deg_k(D)+1-g$. The principal-divisor degree theorem [F6], used at step 2.1, expresses that degree is well defined on linear-equivalence classes; the Axiom of Choice is inherited from that theorem and the divisor suppliers, and no further selection is made, since the contradiction argument chooses nothing beyond the given $f$. [F3, F6, F7, step 2.1, step 3.1] ∎

---
id: thm-platt-bounded-grh-for-primitive-dirichlet-l-functions
kind: theorem
title: "GRH verification for primitive Dirichlet L-functions up to the Platt conductor-height bounds"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-dirichlet-l-function
  - def-primitive-dirichlet-character-and-conductor
  - def-induced-dirichlet-character
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-primitive-dirichlet-l-functional-equation
  - thm-identity-theorem-holomorphic-functions
proof_strategy: direct
sources:
  references:
    - title: "David J. Platt, Numerical Computations Concerning the GRH, arXiv:1305.3087v1"
      url: "https://arxiv.org/pdf/1305.3087v1"
      locator: "§7, Theorem 7.1, printed p. 14"
---

## Statement

For each integer $q$ with $1\le q\le400{,}000$, let $\chi$ be a primitive Dirichlet character modulo $q$, and define
$$T_q=\begin{cases}\max(10^8/q,\;7.5\cdot10^7/q+200),&q\text{ even},\\\max(10^8/q,\;3.75\cdot10^7/q+200),&q\text{ odd}.\end{cases}$$
Every zero $\rho$ of the analytic continuation of $L(s,\chi)$ with $0<\operatorname{Re}\rho<1$ and $|\operatorname{Im}\rho|\le T_q$ satisfies $\operatorname{Re}\rho=\tfrac12$. The parity in the two height formulas is the parity of the modulus $q$, not the character parity.

## Statement references

[David J. Platt, *Numerical Computations Concerning the GRH*, arXiv:1305.3087v1, §7 Theorem 7.1](https://arxiv.org/pdf/1305.3087v1)

## Facts & Assumptions

**Given:** An integer $q$ with $1\le q\le400{,}000$, a primitive Dirichlet character $\chi$ modulo $q$, and the analytic continuation of $L(s,\chi)$.

[F1] The exact owner-authorized imported finite computation is Platt’s §7 Theorem 7.1, printed p. 14 ([complete arXiv v1 article](https://arxiv.org/pdf/1305.3087v1)): for primitive characters with modulus $q\le400{,}000$, GRH holds to the displayed even-modulus and odd-modulus heights. The complete 15-page article was read; no production replay or per-character certificate package is claimed.

[F2] The owner authorization for run number-theory-all-141-2026-10-25 names the input platt-bounded-zero-verification and permits this exact imported computation. It supplies no local replay or numerical-code acceptance.

[F3] [[def-primitive-dirichlet-character-and-conductor]]: a primitive character modulo $q$ has conductor $q$.

[F4] [[def-induced-dirichlet-character]]: an induced character is the pullback from a divisor on units, extended by zero off units.

[F5] [[def-dirichlet-l-function]]: for $\operatorname{Re}s>1$, $L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}$.

[F6] [[thm-primitive-dirichlet-l-analytic-continuation]]: the primitive $L$-function has its stated analytic continuation, including the principal modulus-one case.

[F7] [[thm-identity-theorem-holomorphic-functions]]: equality on a nonempty open subset extends across a connected holomorphic domain.

[F8] [[thm-primitive-dirichlet-l-functional-equation]]: the completion and root-number convention used in the finite Turing calculation are fixed for primitive $\chi$.

## Proof

1.1 For $\operatorname{Im}\rho\ge0$, the hypotheses of [F1] hold because $q$ is in range, $\chi$ is primitive of modulus $q$, and $T_q$ uses the parity of the modulus. Platt’s imported conclusion gives $\operatorname{Re}\rho=\tfrac12$ through the stated height. [given, F1, F3, F8]

2.1 If $\operatorname{Im}\rho<0$, the Dirichlet series [F5] gives $L(\overline{s},\overline\chi)=\overline{L(s,\chi)}$ for $\operatorname{Re}s>1$. The character $\overline\chi$ is primitive: otherwise conjugating its inducing character in [F4] would induce $\chi$ from the same proper divisor, contradicting [F3]. If $q>1$, both $L(s,\overline\chi)$ and the reflected function $\overline{L(\overline s,\chi)}$ are holomorphic on $\mathbb C$ by [F6]; if $q=1$, they are holomorphic on the connected domain $\{s:\operatorname{Re}s>0\}\setminus\{1\}$ by [F6], with the reflected function holomorphic because conjugating a local Taylor series preserves holomorphy. The identity theorem [F7] extends the equality from $\operatorname{Re}s>1$ throughout the relevant domain. Hence $\overline\rho$ is a zero of the primitive character $\overline\chi$ with the same modulus and positive ordinate at most $T_q$, so [F1] gives $\operatorname{Re}\overline\rho=\tfrac12$. Since $\operatorname{Re}\rho=\operatorname{Re}\overline\rho$, the conclusion follows; height zero is included in step 1.1. [given, F1, F3, F4, F5, F6, F7, step 1.1] ∎

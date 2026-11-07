---
id: thm-iwasawa-class-number-growth-in-zp-extensions
kind: theorem
title: 'Iwasawa class-number growth in a cyclotomic $\mathbb Z_p$-extension'
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-cyclotomic-iwasawa-class-group-module
  - lem-cyclotomic-class-field-tower-realizes-inertia-trace-kernels
  - thm-cyclotomic-class-group-iwasawa-module-finitely-generated-torsion
  - lem-iwasawa-trace-quotient-growth-for-torsion-modules
  - lem-p-adic-power-series-noetherianity-and-coprime-finite-errors
  - thm-iwasawa-module-structure-for-finitely-generated-modules
  - def-iwasawa-invariants-of-finitely-generated-torsion-lambda-module
justified_by: []
axiom_use: >-
  The original AC, CC and DC branch is inherited through the supplied arithmetic trace-kernel and class-field module construction. The finite-error and trace-quotient calculations add no choice principle.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. Sharifi, Iwasawa Theory lecture notes"
      url: "https://www.math.ucla.edu/~sharifi/iwasawa.pdf"
      locator: "Lemma3.2.13 and Theorem3.2.14, printed pp.81–82, read in full; the abstract trace-quotient calculation is supplied by the existing local lemma"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC through the class-group control supplier. Let $K$ be a totally real number field and $p$ any prime. For odd $p$, let $\mathbb Q_{\mathrm{cyc},p}$ be the unique $\mathbb Z_p$ subextension of $\mathbb Q(\mu_{p^\infty})/\mathbb Q$; for $p=2$, let it be $\bigcup_{m\ge0}\mathbb Q(\mu_{2^{m+2}})^+$, with $+$ denoting the fixed field of complex conjugation. Put $K_\infty=K\mathbb Q_{\mathrm{cyc},p}$ with degree-$p^n$ layers $K_n$. Put $h_n^{(p)}=|\operatorname{Cl}(\mathcal O_{K_n})[p^\infty]|$. There are integers $\mu,\lambda\ge0$ and $\nu\in\mathbb Z$ such that for all sufficiently large $n$,
$$h_n^{(p)}=p^{\mu p^n+\lambda n+\nu}.$$
The exponents use $\mu=\mu(X_{K,p})$ and $\lambda=\lambda(X_{K,p})$, defined by the pseudo-isomorphism decomposition of this finitely generated torsion module.

## Statement references

[R. Sharifi, *Iwasawa Theory*, Lemma3.2.13 and Theorem3.2.14, pp.81–82](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** The original AC, Countable Choice and DC hypotheses, the cyclotomic tower of the totally real number field $K$, and its finite $p$-primary class groups $A_n$, as in the unchanged Statement.

[F1] The arithmetic class-field tower supplies a level $m$ and surjections $X\to A_n$ for $n\ge m$, with closed kernels $Y_n=\omega_nX+\sum_i\mathbb Z_p\nu_{n,m}g_i$, where $\omega_n=(1+T)^{p^n}-1$ and $\nu_{n,m}=\omega_n/\omega_m$ ([[lem-cyclotomic-class-field-tower-realizes-inertia-trace-kernels]], [[def-cyclotomic-iwasawa-class-group-module]]).

[F2] The module $X$ is finitely generated torsion over $\Lambda=\mathbb Z_p\lbrack\!\lbrack T\rbrack\!\rbrack$. This ring is Noetherian and every submodule of a finitely generated module is finitely generated ([[thm-cyclotomic-class-group-iwasawa-module-finitely-generated-torsion]], [[lem-p-adic-power-series-noetherianity-and-coprime-finite-errors]]).

[F3] If a finitely generated torsion module $M$ has finite $M/\nu_{n,m}M$ for all sufficiently large $n$, then $\log_p|M/\nu_{n,m}M|=\mu(M)p^n+\lambda(M)n+c$ eventually for one integer $c$. This trace-quotient theorem does not require finite ordinary $M/\omega_nM$ ([[lem-iwasawa-trace-quotient-growth-for-torsion-modules]]).

[F4] A finitely generated torsion module admits a map with finite kernel and cokernel to its elementary decomposition; its $\mu$ and $\lambda$ are the sums of the prime-power exponents and distinguished degrees in that decomposition ([[thm-iwasawa-module-structure-for-finitely-generated-modules]], [[def-iwasawa-invariants-of-finitely-generated-torsion-lambda-module]]).

[A1] AC, CC and DC are exactly the original public assumptions used in [F1]–[F2] ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]).

## Proof

**Proof technique:** the exact arithmetic trace kernels and the supplied trace-quotient growth theorem, without ordinary-coinvariant control or an unstabilized bounded error.

1.1 At $n=m$, [F1] gives $Y_m=\omega_mX+\sum_i\mathbb Z_pg_i$ and $X/Y_m=A_m$. Since $\nu_{n,m}\omega_m=\omega_n$, multiplying the displayed finite sum by $\nu_{n,m}$ shows exactly $Y_n=\nu_{n,m}Y_m$ for every $n\ge m$. The finite class group $A_m$ makes $Y_m$ finite-index in $X$. By [F2] it is finitely generated and torsion. The inclusion $Y_m\to X$ has zero kernel and finite cokernel. Composing it with the elementary-decomposition map for $X$ in [F4] still has finite kernel and cokernel: its kernel lies in the previous finite kernel, and its cokernel is an extension of the previous finite cokernel by a quotient of $X/Y_m$. Thus the same elementary module is a pseudo-isomorphic model for $Y_m$, giving $\mu(Y_m)=\mu(X)$ and $\lambda(Y_m)=\lambda(X)$. [F1, F2, F4, A1, given, algebra]

2.1 The exact chain $\nu_{n,m}Y_m=Y_n\subseteq Y_m\subseteq X$ gives $|A_n|=|A_m|\,|Y_m/\nu_{n,m}Y_m|$. In particular every trace quotient on the right is finite, since $A_n$ is finite. Apply [F3] to the actual finitely generated torsion module $Y_m$. For all sufficiently large $n$, $\log_p|Y_m/\nu_{n,m}Y_m|=\mu(Y_m)p^n+\lambda(Y_m)n+c$ with a fixed integer $c$. [F1, F3, step 1.1, algebra]

3.1 Put $\nu=c+\log_p|A_m|$, an integer because $A_m$ is a finite $p$-group. Substituting the invariant equalities from step 1.1 in step 2.1 yields $\log_p h_n^{(p)}=\mu(X)p^n+\lambda(X)n+\nu$ eventually, with $\mu(X),\lambda(X)\ge0$ by [F4]. Exponentiation proves the full original formula at the prescribed invariant values, including $p=2$ and the zero-module case. The constant is one fixed integer because it comes from the exact trace-quotient formula and the fixed finite index $|A_m|$; no bounded-error stabilization or stronger ordinary-coinvariant assertion is assumed. [F4, step 1.1, step 2.1, algebra] ∎

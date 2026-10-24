---
id: thm-pvm-integral-is-a-star-homomorphism
kind: theorem
title: Pvm integral is a star homomorphism
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-integral-of-a-simple-function-against-a-pvm, thm-bounded-borel-pvm-integral, thm-dominated-convergence, def-countable-choice, lem-simple-pvm-integral-is-representation-independent, lem-scalar-and-complex-measures-from-a-pvm, def-integration-against-a-signed-or-complex-measure, def-measurable-function-between-measurable-spaces, def-complex-simple-function, thm-hilbert-adjoint-properties, lem-composition-operator-norm-inequality, def-projection-valued-measure]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 5.73, printed pp.279–285"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Proposition 5.3, pp.17–18"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume Countable Choice. Let $(X,\Sigma)$ be a measurable space, let $H$ be a
nonzero complex Hilbert space, let $E$ be a projection valued measure on
$(X,\Sigma)$, and for a bounded measurable $f$ write $\Phi_E(f)=\int f\,dE$ for
the operator of [[thm-bounded-borel-pvm-integral]]. Then:

1. $\Phi_E$ is linear and unital: $\Phi_E(\mathbf 1_X)=I$ and
   $\Phi_E(af+bg)=a\Phi_E(f)+b\Phi_E(g)$ for bounded measurable $f,g$ and
   $a,b\in\mathbb C$;
2. $\Phi_E$ is multiplicative: $\Phi_E(fg)=\Phi_E(f)\Phi_E(g)$;
3. $\Phi_E$ preserves conjugation: $\Phi_E(\overline f)=\Phi_E(f)^*$;
4. if $(f_n)$ are bounded measurable with $\sup_n\|f_n\|_\infty<\infty$, $f$
   is bounded measurable, and $f_n\to f$ pointwise $E$-almost everywhere,
   meaning $E_x$-almost everywhere for every $x\in H$, then
   $\Phi_E(f_n)\to\Phi_E(f)$ in the strong operator topology.

## Facts & Assumptions

[A1] $\Phi_E(g)$ is the unique operator with $\langle\Phi_E(g)x,y\rangle=\int g\,dE_{x,y}$ for all $x,y$, it satisfies $\|\Phi_E(g)\|\le\|g\|_\infty$ and $\|\Phi_E(g)x\|^2=\int|g|^2\,dE_x$, and it is the norm limit of $\int s_n\,dE$ for any complex simple $s_n\to g$ uniformly ([[thm-bounded-borel-pvm-integral]]).

[A2] The simple integral of $s=\sum_jc_j\mathbf 1_{D_j}$ over a disjoint measurable cover is $\sum_jc_jE(D_j)$ ([[def-integral-of-a-simple-function-against-a-pvm]]), independently of the presentation; it has the scalar pairing and quadratic identities ([[lem-simple-pvm-integral-is-representation-independent]]). Complex simple functions have finite measurable range ([[def-complex-simple-function]]).

[A3] $E_{y,x}=\overline{E_{x,y}}$, $E_x$ is a positive measure of mass $\|x\|^2$, and $E_x(B)=\langle E(B)x,x\rangle$ ([[lem-scalar-and-complex-measures-from-a-pvm]]).

[A4] Each $E(B)$ is self-adjoint and idempotent, $E(\varnothing)=0$, $E(X)=I$ and $E(B\cap C)=E(B)E(C)$ ([[def-projection-valued-measure]]).

[A5] Dominated convergence: if $g_n\to g$ pointwise almost everywhere and $|g_n|\le C$ for an integrable constant $C$, then $\int g_n\,d\mu\to\int g\,d\mu$ ([[thm-dominated-convergence]]).

[A6] The adjoint is conjugate-linear on operator sums and norm-preserving, $\|S^*\|=\|S\|$, and operator multiplication is norm-continuous, $\|ST\|\le\|S\|\,\|T\|$ ([[thm-hilbert-adjoint-properties]], [[lem-composition-operator-norm-inequality]]).

[A7] Countable Choice is the declared standing hypothesis of this block of the page ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A measurable space $(X,\Sigma)$, a nonzero complex Hilbert space $H$, a projection valued measure $E$, bounded measurable functions $f,g$ with uniformly approximating complex simple functions $s_n\to f$, $t_n\to g$, and scalars $a,b$.

1.1 Unitality: $\mathbf 1_X$ is simple, and $\Phi_E(\mathbf 1_X)=E(X)=I$ by the definition of the simple integral and $E(X)=I$. [A1, A2, A4]

1.2 Linearity on simple functions: presenting $s$ and $t$ over a common refinement of their disjoint normal forms, $\int(as+bt)\,dE=a\int s\,dE+b\int t\,dE$ because both sides are the corresponding coefficient-weighted sum of the same projection values. [A2]

1.3 Multiplicativity on simple functions: over a common disjoint normal form $s=\sum_jc_j\mathbf 1_{D_j}$, $t=\sum_jd_j\mathbf 1_{D_j}$ one has $st=\sum_jc_jd_j\mathbf 1_{D_j}$ and $\bigl(\int s\,dE\bigr)\bigl(\int t\,dE\bigr)=\sum_{j,k}c_jd_kE(D_j)E(D_k)=\sum_jc_jd_jE(D_j)=\int st\,dE$, because $E(D_j)E(D_k)=E(D_j\cap D_k)$ vanishes for $j\ne k$ and equals $E(D_j)$ for $j=k$. [A2, A4]

1.4 Conjugation on simple functions: self-adjointness of the projection values and conjugate-linearity of the adjoint give $(\int s\,dE)^*=(\sum_jc_jE(D_j))^*=\sum_j\overline{c_j}E(D_j)=\int\overline s\,dE$. The bounded integral agrees with the simple integral by taking a constant approximating sequence. [A1, A2, A4, A6]

2.1 Linearity, multiplicativity and conjugation pass to uniform limits: if $s_n\to f$ and $t_n\to g$ uniformly then $as_n+bt_n\to af+bg$, $s_nt_n\to fg$ and $\overline{s_n}\to\overline f$ uniformly, and A1 gives convergence of the simple integrals to the integrals of each of these limits, so $\Phi_E(af+bg)=a\Phi_E(f)+b\Phi_E(g)$, $\Phi_E(fg)=\Phi_E(f)\Phi_E(g)$ and $\Phi_E(\overline f)=\Phi_E(f)^*$ by taking norm limits and using norm continuity of the adjoint. [A1, A6, step 1.2, step 1.3, step 1.4]

3.1 Strong convergence: if $\sup_n\|f_n\|_\infty\le C<\infty$ and $f_n\to f$ $E$-almost everywhere, then for each $x$ the functions $|f_n-f|^2$ converge to $0$ $E_x$-almost everywhere and are dominated by the constant $(C+\|f\|_\infty)^2$, which is integrable for the finite measure $E_x$; hence $\|\Phi_E(f_n)x-\Phi_E(f)x\|^2=\int|f_n-f|^2\,dE_x\to0$. [step 2.1, A1, A3, A5]

4.1 $\Phi_E$ is a unital star homomorphism on the bounded measurable functions, and bounded pointwise $E$-almost everywhere convergence with a uniform bound implies strong convergence of the operators. [step 1.1, step 2.1, step 3.1, A7] ∎

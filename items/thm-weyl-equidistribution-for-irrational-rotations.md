---
id: thm-weyl-equidistribution-for-irrational-rotations
kind: theorem
title: Weyl equidistribution for irrational rotations
status: published
origin: pipeline
landmark: true
deps: [def-equidistribution-mod-one, thm-irrational-circle-rotations-are-uniquely-ergodic, thm-unique-ergodicity-is-equivalent-to-uniform-ergodic-averages, thm-lebesgue-measure-of-a-box-of-every-kind, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§8.6, printed pp. 80–81; local proof uses continuous sandwiches rather than Fourier's Weyl criterion"
proof_strategy: direct
---

## Statement

Assume the Axiom of Countable Choice.  If $\alpha$ is irrational, then the
sequence $({n\alpha})_{n\geq0}$ is equidistributed modulo one.

## Facts & Assumptions

**Given:** Countable choice, an irrational $\alpha$, and a half-open interval $I=[a,c)\subseteq[0,1)$.

[F1] Irrational rotation by $\alpha$ is uniquely ergodic with Lebesgue probability ([[thm-irrational-circle-rotations-are-uniquely-ergodic]]).

[F2] Unique ergodicity gives uniform convergence of continuous-function averages to their Lebesgue integrals ([[thm-unique-ergodicity-is-equivalent-to-uniform-ergodic-averages]]).

[F3] Every interval convention between its open and closed versions has Lebesgue measure equal to its length ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F4] Equidistribution modulo one is defined by the limiting frequencies of all half-open intervals ([[def-equidistribution-mod-one]]).

[F5] Nonnegative integration is monotone, and the integral is linear on integrable functions ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** direct continuous upper and lower sandwiches.

1.1 If $a=c$, use the zero function; if $(a,c)=(0,1)$, use the constant-one function.  Otherwise, for every sufficiently small $\delta>0$, circular distance gives continuous functions $0\leq\ell_\delta\leq\mathbf1_I\leq u_\delta\leq1$ as follows: $\ell_\delta$ is zero on the closed complementary arc and rises linearly to one within distance $\delta$ inside $I$, while $u_\delta$ is one on the closed arc $[a,c]$ and falls linearly to zero within distance $\delta$ outside it.  Thus they differ from $\mathbf1_I$ only in the two boundary arcs of total length at most $4\delta$. [F3, construct]

2.1 Monotonicity, linearity, and [F3] give $$c-a-2\delta\leq\int\ell_\delta\,d\lambda\leq c-a\leq\int u_\delta\,d\lambda\leq c-a+2\delta,$$ after decreasing $\delta$ if necessary; estimates truncated at $0$ and $1$ give the same conclusion near a degenerate complementary arc. [F3, F5, step 1.1]

3.1 Since $R_\alpha^k(0)=\{k\alpha\}$, the visit frequency to $I$ is $A_n\mathbf1_I(0)$.  The pointwise sandwiches and [F2] yield $$\int\ell_\delta\,d\lambda\leq\liminf_nA_n\mathbf1_I(0)\leq\limsup_nA_n\mathbf1_I(0)\leq\int u_\delta\,d\lambda.$$ Letting $\delta\downarrow0$ and using step 2.1 proves that the limit is $c-a$. [F1, F2, step 2.1]

4.1 The interval $I$ was arbitrary, so the definition of equidistribution applies.  Countable choice is inherited from [F1]; the two approximants for a fixed interval and $\delta$ are explicit.  This proof does not use Fourier's Weyl criterion. [F4, step 3.1] ∎

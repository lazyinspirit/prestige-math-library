---
id: rem-qft-local-wick-diagonal-obligation
kind: remark
title: Local Wick diagonal products need additional prerequisites
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 7
deps:
  - def-qft-regular-polynomial-functional-algebra
  - thm-qft-regular-wick-star-associativity
  - def-qft-regular-formal-time-ordering
  - lem-qft-tensor-test-function-density
  - thm-qft-diagonal-delta-distribution
  - def-test-function-space-d-of-an-open-set
  - def-test-function-topology
  - def-support-of-a-distribution
  - lem-test-function-cutoffs-and-euclidean-localization
dependency_roles:
  def-qft-regular-polynomial-functional-algebra: mathematical-premise
  thm-qft-regular-wick-star-associativity: mathematical-premise
  def-qft-regular-formal-time-ordering: mathematical-premise
  lem-qft-tensor-test-function-density: mathematical-premise
  thm-qft-diagonal-delta-distribution: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-test-function-topology: mathematical-premise
  def-support-of-a-distribution: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, complete lecture notes, sections 4–5
      url: https://arxiv.org/html/1208.1428
      locator: Complete 42-page notes, section 4, equations (23)–(25), distinguishing regular from local functionals; section 5, Example 5.2, the Wick-square extension discussion.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Remarks

For a nonzero real $g\in\mathcal D(\mathbb R^4)$, the local quartic
functional $L_g(\phi)=\int g(x)\phi(x)^4\,dx$ is not in the regular
polynomial class of [[def-qft-regular-polynomial-functional-algebra]]. Write
$\delta(x-y)$ for the distribution
$\delta_{\Delta_X}$ defined in
[[thm-qft-diagonal-delta-distribution]], and define the diagonal kernel
$K_g$ by
$$ \langle K_g,\Psi\rangle =12\int_{\mathbb R^4}g(x)\Psi(x,x)\,d^4x. $$
The local quartic's second derivative at $\phi\equiv1$ has this kernel.
The verification below shows it is nonzero and cannot be a smooth compact
coefficient kernel, so no other regular presentation can represent $L_g$.
The regular star product in
[[thm-qft-regular-wick-star-associativity]] and the formal time-ordering
construction in [[def-qft-regular-formal-time-ordering]] take regular polynomial
functionals as inputs. Since $L_g$ is not in that class, neither construction
applies to it. Extending either operation across the diagonal requires a
separately stated and proved construction; no such extension or general
causal-renormalization theorem is asserted on this page.

The nonzero hypothesis matters: if $g=0$, then $L_g=0$ is the regular
constant family with all coefficient kernels zero.

## Facts & Assumptions

**Given:** [A1] and [F1]–[F9].

[A1] $g\in\mathcal D(\mathbb R^4)$ is real and nonzero.

[F1] A regular polynomial functional has smooth compactly supported symmetric
coefficient kernels, with the displayed functional derivative kernels
([[def-qft-regular-polynomial-functional-algebra]]).

[F2] Symmetric coefficient representations are unique, and elementary
product tests are dense in the test-function topology
([[lem-qft-tensor-test-function-density]]).

[F3] $\delta(x-y)=\delta_{\Delta_X}$ is a continuous distribution
supported on $\{x=y\}$, pairing with $\Psi$ as
$\int\Psi(x,x)\,d^4x$; no nonzero smooth function is supported on this
diagonal
([[thm-qft-diagonal-delta-distribution]]).

[F4] Tests are smooth compactly supported functions
([[def-test-function-space-d-of-an-open-set]]).

[F5] A compact set has a smooth compact cutoff equal to one near it
([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F6] The support of a distribution is the complement of its largest open
vanishing set ([[def-support-of-a-distribution]]).

[F7] The LF topology is characterized by seminorms whose restrictions to each
fixed-support test space are continuous ([[def-test-function-topology]]).

[F8] The regular contraction star product is defined for two elements of
$\mathcal P_{\mathrm{reg}}(X)$ and a continuous bidistribution
([[thm-qft-regular-wick-star-associativity]]).

[F9] Each $T_n^H$ and the resulting formal series are defined on regular
polynomial inputs ([[def-qft-regular-formal-time-ordering]]).

## Verification

**Given:** [A1] and [F1]–[F9].

1.1 For real test directions $h,k$, the coefficient of $st$ in $L_g(1+s h+t k)$ is $12\int g(x)h(x)k(x)\,d^4x$, by expanding $(1+s h+t k)^4$. By [F3], this is exactly the pairing of $K_g$ with the product test $h\otimes k$. Thus $K_g$ represents the second derivative on product tests. [A1, F3, algebra]

2.1 For every nonempty fixed compact $K\subseteq X\times X$, choose a compact rectangle $R$ containing its first-coordinate projection. Then $$ |\langle K_g,\Psi\rangle| \le 12\|g\|_\infty\operatorname{vol}(R)\|\Psi\|_\infty \qquad(\operatorname{supp}\Psi\subseteq K), $$ so $K_g$ is continuous on each fixed-support test space and hence on the LF test topology by [F7]. It vanishes on every test supported off the diagonal, so its support is contained there by [F6]. Choose $\rho\in\mathcal D(\mathbb R^4)$ with $\rho(0)=1$ using [F5], and set $\Psi(x,y)=g(x)\rho(x-y)$. This is a test function: its support has $x\in\operatorname{supp}g$ and $x-y\in\operatorname{supp}\rho$, so both coordinate projections are compact. Then $$ \langle K_g,\Psi\rangle=12\int_{\mathbb R^4}g(x)^2\,d^4x>0, $$ because a nonzero continuous real function is bounded away from zero on a small ball. Thus $K_g\ne0$. [A1, F3, F4, F5, F6, F7, step 1.1, algebra]

3.1 Suppose $L_g$ had a regular presentation. By [F1], its second derivative at $1$ would have a smooth compactly supported kernel. Its pairings with product tests agree with those of $K_g$ by step 1.1; complex linearity extends agreement to complex product tests, and density [F2] extends it to all tests. Hence the smooth kernel would equal $K_g$ as a distribution. Its support would be contained in the diagonal by step 2.1. [F1, F2, step 1.1, step 2.1, algebra]

4.1 The diagonal has empty interior. A continuous function supported there must vanish: any nonzero value would persist on an open neighborhood not contained in the diagonal. This contradicts $K_g\ne0$ from step 2.1. Therefore $L_g$ has no regular presentation. [step 2.1, step 3.1, algebra]

5.1 By step 4.1, $L_g\notin\mathcal P_{\mathrm{reg}}$. Fact [F8] defines $\star_W$ only on pairs of regular polynomial functionals, and [F9] defines each $T_n^H$ on regular polynomial inputs. Neither operation therefore applies to $L_g$. Any extension across the diagonal is a separate construction and is not proved here. [F8, F9, step 4.1, algebra] ∎

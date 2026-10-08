---
id: lem-a-measurable-direct-integral-of-unitary-representations-is-strongly-continuous
kind: lemma
title: A measurable direct integral of unitary representations is strongly continuous
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-direct-integral-of-unitary-representations
  - def-direct-integral-of-a-measurable-hilbert-field
  - thm-measurable-essentially-bounded-operator-fields-act-decomposably
  - cor-triangle-inequality-for-inner-product-norm
  - def-measurable-and-decomposable-operator-fields
  - lem-measurable-sections-have-measurable-pointwise-inner-products
  - def-strong-and-weak-operator-topologies
  - def-strongly-continuous-unitary-representation
  - def-sequence-convergence-top
  - def-second-countable-space
  - thm-second-countable-implies-first-countable
  - thm-first-countable-sequences-suffice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-dominated-convergence
  - def-axiom-of-choice
justified_by: []
aliases: []
dependency_level: 1
proof_strategy: direct
axiom_use: "AC is inherited from the direct-integral and operator-field interfaces. It also implies Countable Choice, which is used with second countability (through first countability) to pass from sequential continuity of each orbit map to continuity. The dominated-convergence calculation makes no selections; the converse, continuity implying sequential continuity, is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.G, paragraph 'Direct integrals of representations' following Definition 1.G.4, printed p. 61 (PDF p. 60): the field-integrated action is stated to be strongly continuous, with its proof referred to Dixmier–von Neumann, Proposition 18.7.4. The dominated-convergence proof below is local."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Let $G$ be a second-countable locally compact Hausdorff group, let $(X,\mathcal B,\mu)$ be a sigma-finite standard-Borel measure space, let $(H_x,e_n(x))_{x\in X}$ be a measurable complex Hilbert field with countable fundamental family and direct integral $\mathcal H=\int_X^\oplus H_x\,d\mu(x)$, and let $(\pi_x)_{x\in X}$ be a measurable field of strongly continuous unitary representations of $G$ in the sense of [[def-direct-integral-of-unitary-representations]], with direct integral $\pi=\int_X^\oplus\pi_x\,d\mu(x)$. Then $g\mapsto\pi(g)$ is strongly continuous: whenever $g_k\to g$ in $G$, $\pi(g_k)\to\pi(g)$ in the strong operator topology. Equivalently, $\pi$ is a strongly continuous unitary representation of $G$ on $\mathcal H$ ([[def-strongly-continuous-unitary-representation]]).

## Facts & Assumptions

[F1] For each fixed $g\in G$, the field $x\mapsto\pi_x(g)$ is weakly measurable and induces the unitary operator $\pi(g)$ on $\mathcal H$ ([[def-direct-integral-of-unitary-representations]], [[def-measurable-and-decomposable-operator-fields]], [[thm-measurable-essentially-bounded-operator-fields-act-decomposably]]).

[F2] Each $\pi_x(g)$ is unitary. Thus $\|\pi_x(g)v\|=\|v\|$ on every nonzero fibre, and on a zero fibre both sides are zero ([[def-direct-integral-of-unitary-representations]], [[def-strongly-continuous-unitary-representation]]).

[F3] A weakly measurable essentially bounded operator field sends every measurable section to a measurable section under its pointwise action ([[thm-measurable-essentially-bounded-operator-fields-act-decomposably]]).

[F4] The direct-integral norm is $\|[\eta]\|_{\mathcal H}^{2}=\int_X\|\eta(x)\|_{H_x}^{2}\,d\mu(x)$ ([[def-direct-integral-of-a-measurable-hilbert-field]]).

[F5] For every $x$, $g\mapsto\pi_x(g)$ is a strongly continuous representation ([[def-direct-integral-of-unitary-representations]], [[def-strongly-continuous-unitary-representation]]).

[F6] If measurable functions converge pointwise almost everywhere and are dominated by one integrable function, their integrals converge ([[thm-dominated-convergence]]).

[F7] Second countability means having an at most countable basis ([[def-second-countable-space]]), and every second-countable space is first countable ([[thm-second-countable-implies-first-countable]]).

[F8] AC ([[def-axiom-of-choice]]) implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]). Assuming Countable Choice, sequential continuity at a point is equivalent to continuity at that point on a first-countable domain ([[thm-first-countable-sequences-suffice]], [[def-sequence-convergence-top]]).

[F9] The fibre norm satisfies the triangle inequality ([[cor-triangle-inequality-for-inner-product-norm]]).

[F10] A sequence of operators converges in the strong operator topology exactly when it converges in norm on every fixed vector ([[def-strong-and-weak-operator-topologies]]).

[F11] Measurable sections are closed under pointwise linear combinations and have measurable pointwise norms ([[lem-measurable-sections-have-measurable-pointwise-inner-products]]).

## Proof

**Proof technique:** dominated convergence on each orbit vector, followed by the first-countable sequential-continuity criterion.

**Given:** The field, its direct integral, and the hypotheses in the statement.

1.1 Fix $\xi\in\mathcal H$, choose a measurable square-integrable representative $x\mapsto\xi(x)$, and let $g_k\to g$ in $G$. For each $k$, the weakly measurable fields $x\mapsto\pi_x(g_k)$ and $x\mapsto\pi_x(g)$ have norms at most $1$ by [F1,F2], so [F3] makes $\eta_k(x):=\pi_x(g_k)\xi(x)$ and $\eta(x):=\pi_x(g)\xi(x)$ measurable sections. By [F11], $\eta_k-\eta$ is measurable and its squared norm is measurable. For every $x$, strong continuity of the fibre representation gives $\|\eta_k(x)-\eta(x)\|\to0$ by [F5]. Thus these measurable functions converge pointwise to zero. [F1,F2,F3,F5,F11]

2.1 Unitarity [F2] and the fibre norm triangle inequality [F9] give $0\le\|\eta_k(x)-\eta(x)\|^2\le4\|\xi(x)\|^2$ for every $x$, including zero fibres. The majorant is integrable because $\xi\in\mathcal H$ and [F4] gives $\int_X\|\xi(x)\|^2\,d\mu(x)=\|\xi\|_{\mathcal H}^2<\infty$. Applying dominated convergence [F6] and then the direct-integral norm formula [F4] yields $\|\pi(g_k)\xi-\pi(g)\xi\|_{\mathcal H}^2=\int_X\|\eta_k(x)-\eta(x)\|^2\,d\mu(x)\to0$. Thus every orbit map is sequentially continuous. [F2,F4,F6,F9,F11,step 1.1]

3.1 The group $G$ is first countable by [F7]. The stated AC hypothesis gives Countable Choice by [F8], so the first-countable criterion in [F8] turns sequential continuity of each orbit map into continuity. Hence $g\mapsto\pi(g)\xi$ is continuous for every $\xi\in\mathcal H$, which is strong continuity of $\pi$. Conversely, continuity of each orbit map implies its sequential continuity, also by [F8]; by [F10], this is equivalent to $\pi(g_k)\to\pi(g)$ in the strong operator topology. This proves the stated equivalence. [F7,F8,F10,step 2.1] ∎

## Boundary cases

If $X=\varnothing$, if $\mu(X)=0$, or if every fibre is zero, then $\mathcal H=\{0\}$ and the unique integrated representation is strongly continuous; the proof above also applies with $\xi=0$. A one-point measure base and a trivial group are covered by the same calculation, and constant sequences $g_k=g$ give zero difference. There is no endpoint parameter in the assertion. The statement's sequential-continuity/continuity equivalence has both directions proved in step 3.1; the direction from continuity to sequential continuity uses no choice, while the reverse direction uses AC only through Countable Choice. No additional Choice is used in the dominated-convergence estimate.

## Source qualifications

Bekka–de la Harpe, Chapter 1 §1.G, printed p. 61 (PDF p. 60), states that the direct-integral homomorphism is strongly continuous and cites Dixmier–von Neumann, Proposition 18.7.4, for that assertion. The passage does not provide the proof. The measurable-section action and direct-integral norm convention are laid out immediately before it in Definitions 1.G.3–1.G.4, printed pp. 60–61. This item supplies its own proof from fibrewise strong continuity, the integrable bound $4\|\xi(x)\|^2$, dominated convergence, and the explicitly choice-dependent first-countable criterion; the citation is context, not a substitute for that argument.

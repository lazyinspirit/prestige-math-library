---
id: def-direct-integral-of-unitary-representations
kind: definition
title: Direct integrals of unitary representations
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-measurable-and-decomposable-operator-fields
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-direct-integral-of-a-measurable-hilbert-field
  - thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces
  - thm-measurable-essentially-bounded-operator-fields-act-decomposably
  - def-strongly-continuous-unitary-representation
  - def-standard-borel-space
  - def-finite-sigma-finite-and-semifinite-measures
  - def-axiom-of-choice
justified_by: []
aliases: []
dependency_level: 0
axiom_use: "AC is inherited through the direct-integral Hilbert-space supplier for completeness and through the decomposable-operator supplier for Hilbert adjoints. This definition makes no arbitrary field or conull-set choices."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.G, Definitions 1.G.3–1.G.4 and the paragraph on direct integrals of representations, printed pp. 60–61; the paragraph assumes a second-countable locally compact group for its separate strong-continuity result"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be a locally compact Hausdorff group, let $(X,\mathcal B,\mu)$ be a sigma-finite standard-Borel measure space ([[def-standard-borel-space]], [[def-finite-sigma-finite-and-semifinite-measures]]), and let $(H_x,e_n(x))_{x\in X}$ be a measurable complex Hilbert field with a countable fundamental family ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]]). Write $\mathcal H=\int_X^\oplus H_x\,d\mu(x)$ for its direct-integral Hilbert space ([[def-direct-integral-of-a-measurable-hilbert-field]], [[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]]). A **measurable field of unitary representations of $G$** over this field is a family $(\pi_x)_{x\in X}$ such that each $\pi_x:G\to U(H_x)$ is strongly continuous ([[def-strongly-continuous-unitary-representation]]) and, for each fixed $g\in G$, the operator field $x\mapsto\pi_x(g)$ is weakly measurable ([[def-measurable-and-decomposable-operator-fields]]). The identities $\pi_x(gh)=\pi_x(g)\pi_x(h)$ and $\pi_x(e)=I_{H_x}$ are required for every $x\in X$ and all $g,h\in G$. For each $g\in G$ define
$$\pi(g)=\int_X^\oplus\pi_x(g)\,d\mu(x)\in\mathcal B(\mathcal H).$$
By [[thm-measurable-essentially-bounded-operator-fields-act-decomposably]], these operators define a group homomorphism $G\to U(\mathcal H)$. This operator family is called the **direct integral** of the field and written $\pi=\int_X^\oplus\pi_x\,d\mu(x)$. The homomorphism and unitarity are proved below; strong continuity is not asserted by this definition. Changing the field on a $\mu$-null set does not change any induced operator $\pi(g)$.

## Facts & Assumptions

**Given:** AC; a locally compact Hausdorff group $G$; a sigma-finite standard-Borel measure space $(X,\mathcal B,\mu)$; a measurable complex Hilbert field with countable fundamental family; and the representation field from the Definition.

[F1] For a weakly measurable operator field, the norm function is measurable, and coefficient measurability is equivalent to measurability against all pairs of measurable sections ([[def-measurable-and-decomposable-operator-fields]]).

[F2] A weakly measurable essentially bounded operator field induces a bounded decomposable operator, and induced products and adjoints agree with their pointwise field products and adjoints ([[thm-measurable-essentially-bounded-operator-fields-act-decomposably]]).

[F3] Under AC, the direct integral of the given measurable Hilbert field is a Hilbert space ([[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]]).

[F4] Each fibre map is a group homomorphism into its unitary group, so it preserves products and inverses and satisfies $\pi_x(g)^*=\pi_x(g^{-1})$ ([[def-strongly-continuous-unitary-representation]]).

[F5] Direct-integral vectors are measurable square-integrable sections modulo equality off measurable $\mu$-null sets ([[def-direct-integral-of-a-measurable-hilbert-field]]).

[F6] Operator fields equal off a measurable $\mu$-null set are identified ([[def-measurable-and-decomposable-operator-fields]]).

## Proof

**Proof technique:** direct.

1.1 Fix $g\in G$ and set $T_x=\pi_x(g)$. Its fundamental matrix coefficients are measurable by the fixed-$g$ hypothesis, so $T$ is weakly measurable by [F1]. On a nonzero fibre $\|T_x\|=1$, and on a zero fibre $\|T_x\|=0$; hence $\|T_x\|\le1$ for every $x$. Thus $T$ is essentially bounded, and [F2] gives a bounded decomposable operator $P_g=\int_X^\oplus\pi_x(g)\,d\mu(x)$ on the Hilbert space $\mathcal H$ of [F3]. [F1, F2, F3, given]

2.1 For $g,h\in G$, [F2] and the pointwise identities [F4] give $P_gP_h=\int_X^\oplus\pi_x(g)\pi_x(h)\,d\mu(x)=P_{gh}$, $P_e=I_{\mathcal H}$, and $P_g^*=\int_X^\oplus\pi_x(g)^*\,d\mu(x)=P_{g^{-1}}$. Therefore $P_gP_g^*=P_g^*P_g=I_{\mathcal H}$, so every $P_g$ is unitary and $g\mapsto P_g$ is a group homomorphism into $U(\mathcal H)$. These identities use the stipulated pointwise group laws for every $x$, so no group-element-dependent conull sets are intersected. Strong continuity is not established by this definition. [F2, F3, F4, step 1.1]

3.1 If the field is changed only on a measurable $\mu$-null set, then for each fixed $g$ the corresponding operator fields agree off that set by [F6]. Their pointwise actions on every measurable section therefore define the same class in the quotient [F5], so every induced operator $P_g$ is unchanged. [F5, F6, step 1.1] ∎

## Remarks

The measurable field is required to be weakly measurable in each fixed group coordinate; no joint measurability in $(x,g)$ is asserted. The locally compact Hausdorff scope supports the algebraic homomorphism and unitary operators proved above. Strong continuity is a separate assertion, not a consequence claimed here.

Bekka and de la Harpe state the representation construction for second-countable locally compact groups and refer to a separate strong-continuity result. The proof above uses only their fixed-coordinate operator-field construction and the local decomposable-operator theorem, so its algebraic conclusion holds on the stated locally compact Hausdorff scope.

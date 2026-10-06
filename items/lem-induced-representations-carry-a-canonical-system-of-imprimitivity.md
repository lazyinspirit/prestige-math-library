---
id: lem-induced-representations-carry-a-canonical-system-of-imprimitivity
kind: lemma
title: An induced representation carries a canonical system of imprimitivity on $G/H$
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
proof_strategy: direct
deps:
  - def-system-of-imprimitivity
  - def-transitive-system-of-imprimitivity
  - def-covariant-function-model-of-unitary-induction
  - lem-the-induced-action-is-unitary
  - thm-unitary-induction-from-a-closed-subgroup
  - lem-the-induced-inner-product-is-independent-of-coset-representatives
  - lem-compactly-supported-covariant-generators-are-dense
  - def-quasi-invariant-measure-on-a-homogeneous-space
  - thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h
  - lem-radon-nikodym-cocycle-of-a-homogeneous-measure
  - def-projection-valued-measure
  - thm-bounded-borel-pvm-integral
  - lem-second-countable-lch-spaces-are-standard-borel
  - def-strongly-continuous-unitary-representation
  - def-axiom-of-choice
  - lem-borel-cross-sections-for-closed-subgroups
  - def-coset
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
    - title: "G. Misra, E. K. Narayanan and C. Varughese, Mackey Imprimitivity and commuting tuples of homogeneous normal operators, arXiv:2402.15737"
      url: "https://arxiv.org/pdf/2402.15737"
---

## Statement

Assume AC. Let $G$ be a second-countable locally compact Hausdorff topological
group, $H\le G$ closed, and $\sigma:H\to U(V)$ a strongly continuous unitary
representation on a separable Hilbert space $V$. Let
$\Pi_\sigma=\operatorname{Ind}_H^G\sigma$ be the induced representation on the
covariant completion $\mathcal H_\sigma$ with rho-measure $\mu_\rho$. For a
Borel set $E\subseteq G/H$ define $P(E)$ on the covariant model by
$(P(E)F)(x)=\mathbf 1_E(xH)F(x)$. Then $P$ is a projection-valued measure on
$G/H$, $P(E)$ is well defined on the completed space of measurable covariant
sections, $\Pi_\sigma(g)P(E)\Pi_\sigma(g)^{-1}=P(gE)$ for all $g\in G$ and
Borel $E$, and $(\Pi_\sigma,P)$ is a system of imprimitivity on $G/H$ with
$P(G/H)=I$. If $H=G$ the base is one point and $P(\{G\})=I$; if $H=\{e\}$ one
may normalize so that the system is the multiplication system on $L^2(G;V)$
with the left regular action $F\mapsto F(g^{-1}\,\cdot)$.

## Facts & Assumptions

**Given:** AC, the second-countable LCH group $G$, closed $H\le G$, a strongly continuous unitary $\sigma:H\to U(V)$ on separable $V$, and the induced representation $\Pi_\sigma$ on the covariant completion with rho-measure $\mu_\rho$.

[F1] The covariant model consists of (classes of) functions $F:G\to V$ with $F(xh)=\sigma(h)^{-1}F(x)$, compactly supported modulo $H$, with the norm obtained by integrating the descended pointwise norm against $\mu_\rho$; the dense subspace of continuous covariant sections with compact support modulo $H$ generates the completion, and continuous compactly supported covariant generators are dense ([[def-covariant-function-model-of-unitary-induction]], [[lem-compactly-supported-covariant-generators-are-dense]], [[lem-the-induced-inner-product-is-independent-of-coset-representatives]]).

[F2] The induced action is $(\Pi_\rho(g)F)(x)=D_g(xH)^{1/2}F(g^{-1}x)$ with $D_g(xH)=\rho(g^{-1}x)/\rho(x)$; it preserves the inner product, satisfies $\Pi_\rho(g_1)\Pi_\rho(g_2)=\Pi_\rho(g_1g_2)$, and extends to a unitary on the completion ([[lem-the-induced-action-is-unitary]], [[thm-unitary-induction-from-a-closed-subgroup]], [[lem-radon-nikodym-cocycle-of-a-homogeneous-measure]]).

[F3] $\mu_\rho$ is a full-support strongly quasi-invariant Radon measure, so the descended norm integral is a genuine $L^2$ integral over the standard Borel $G$-space $G/H$; multiplication by the indicator of a Borel set of finite $\mu_\rho$-measure is a bounded self-adjoint idempotent on the completed space, and dominated convergence gives strong countable additivity ([[thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h]], [[def-quasi-invariant-measure-on-a-homogeneous-space]], [[lem-second-countable-lch-spaces-are-standard-borel]], [[thm-bounded-borel-pvm-integral]]).

[F4] The induced representation is strongly continuous and the system of imprimitivity axioms require the covariance identity $U_gP(E)U_g^{-1}=P(gE)$ ([[def-strongly-continuous-unitary-representation]], [[def-system-of-imprimitivity]]).

[F5] For $H=G$ the quotient is a point and the covariant model is $V$ with the action $\sigma$; for $H=\{e\}$ the rho-measure may be taken to be Haar measure, covariant functions are unconstrained, and the induced space is $L^2(G;V)$ with action $F\mapsto F(g^{-1}\,\cdot)$ ([[def-coset]], [[thm-unitary-induction-from-a-closed-subgroup]], [[lem-borel-cross-sections-for-closed-subgroups]]).

[F6] AC is the standing hypothesis, inherited through the rho-measure and induction suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the group, subgroup, representation $\sigma$ and the induced model of [F1].

1.1 Identify the covariant completion with the square-integrable measurable covariant sections using the density of the continuous covariant generators in [F1]. Thus a Borel-indicator multiple of a section remains in the completed model. On this measurable model, $(P(E)F)(x)=\mathbf 1_E(xH)F(x)$ is covariant: $(P(E)F)(xh)=\mathbf 1_E(xH)F(xh)=\sigma(h)^{-1}(P(E)F)(x)$, since $xhH=xH$. It is idempotent and self-adjoint for the induced inner product because $\mathbf 1_E^2=\mathbf 1_E=\overline{\mathbf 1_E}$ pointwise, and it is a contraction: the pointwise norm of $P(E)F$ is at most that of $F$ everywhere. Hence $P(E)$ extends uniquely to a bounded self-adjoint idempotent on $\mathcal H_\sigma$. [F1, F2, F3]

2.1 $P(\varnothing)=0$, $P(G/H)=I$, and $P(E)P(F)=P(E\cap F)$ follow pointwise from the same identities for indicators, hence hold on the completion by density; strong countable additivity holds because for a disjoint union $E=\bigsqcup E_n$ the partial sums converge pointwise to $\mathbf 1_E$ and are bounded, so dominated convergence in the $L^2$-integral gives $P(\bigcup_{n\le N}E_n)\xi\to P(E)\xi$ for every $\xi$. Thus $P$ is a projection-valued measure on the Borel $\sigma$-algebra of $G/H$. [F1, F3, step 1.1]

2.2 Covariance: by [F2], $(\Pi(g)P(E)\Pi(g)^{-1}F)(x)=D_g(x)^{1/2}(P(E)\Pi(g)^{-1}F)(g^{-1}x)=D_g(x)^{1/2}\mathbf 1_E(g^{-1}x)(\Pi(g)^{-1}F)(g^{-1}x)=\mathbf 1_E(g^{-1}x)F(x)=\mathbf 1_{gE}(x)F(x)$, so $\Pi(g)P(E)\Pi(g)^{-1}=P(gE)$ for all $g$ and Borel $E$, first on the dense model and then everywhere by continuity. [F2, step 1.1]

3.1 Consequently $(\Pi_\sigma,P)$ is a system of imprimitivity: $P$ is a PVM by [step 2.1], $\Pi_\sigma$ is a strongly continuous unitary representation, and the covariance identity is [step 2.2], with $P(G/H)=I$. [F4, step 2.1, step 2.2]

3.2 Boundary cases of the statement: if $H=G$ then $G/H$ is a singleton and the only Borel sets are $\varnothing$ and the point, so $P(\{G\})=P(G/H)=I$ and the system is the given representation with the trivial base. If $H=\{e\}$ then $G/H=G$, covariant functions are arbitrary, and with the Haar normalization $\rho\equiv1$ the induced action is $F\mapsto F(g^{-1}\cdot)$ on $L^2(G;V)$ while $P(E)$ is pointwise multiplication by $\mathbf 1_E$; this is the multiplication system of the statement. [F5, step 2.1, step 2.2]

4.1 Steps 2.1, 3.1 and 3.2 prove that $P$ is a well-defined projection-valued measure on the completed space, that the pair $(\Pi_\sigma,P)$ is a system of imprimitivity on $G/H$, and the two boundary identifications. [step 2.1, step 2.2, step 3.1, step 3.2, F6] ∎ 
---
id: lem-projection-formula-in-algebraic-k-theory
kind: lemma
title: "Projection formula for higher direct images and K-theory pushforward"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-free-sheaf-finite-rank
  - def-proper-morphism
  - def-pushforward-in-algebraic-k-theory
  - lem-internal-hom-fp-qc
  - lem-tensor-qc-modules-quasi-coherent
justified_by: []
landmark: false
proof_strategy: direct
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
    - title: "The Stacks Project, Cohomology of Schemes, Section 30.6 (projection formula)"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
      locator: "Chapter 30, Section 30.6: the projection formula for higher direct images"
    - title: "Borel and Serre, Le theoreme de Riemann-Roch (1958), §5 (c)"
      url: "https://www.numdam.org/item/?id=BSMF_1958__86__97_0"
      locator: "Section 5(c): projection isomorphisms for the direct image functor"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f:X\to Y$ be a proper
morphism of schemes of finite type over a field $k$ ([[def-proper-morphism]],
[[def-locally-finite-type-and-finite-type-morphism]]). Let $\mathcal E$ be a
finite locally free $\mathcal O_Y$-module
([[def-locally-free-sheaf-finite-rank]]) and let $\mathcal F$ be a coherent
$\mathcal O_X$-module ([[def-coherent-module-scheme]]). Then for every $q\ge0$
there is a canonical isomorphism of coherent $\mathcal O_Y$-modules
$$R^qf_*\bigl(f^*\mathcal E\otimes_{\mathcal O_X}\mathcal F\bigr)\;\cong\;\mathcal E\otimes_{\mathcal O_Y}R^qf_*\mathcal F,$$
and consequently, in $K_0(Y)$
([[def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme]]),
$$f_!\bigl(f^*[\mathcal E]\cdot[\mathcal F]\bigr)=[\mathcal E]\cdot f_![\mathcal F],$$
where $f_!$ is the pushforward of
[[def-pushforward-in-algebraic-k-theory]] and the products are the $K$-theory
module products.

## Facts & Assumptions

**Given:** the Axiom of Choice; a proper morphism $f:X\to Y$ of finite type $k$-schemes; a finite locally free $\mathcal O_Y$-module $\mathcal E$; a coherent $\mathcal O_X$-module $\mathcal F$.

[F1] The higher direct images $R^qf_*\mathcal F$ are coherent and vanish for $q>\dim X$; hence the alternating sum $f_![\mathcal F]$ is a well-defined element of $K_0(Y)$ ([[def-pushforward-in-algebraic-k-theory]], [[def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme]]).

[F2] Pullback of quasi-coherent sheaves is quasi-coherent, tensor products of quasi-coherent sheaves are quasi-coherent, and pullback of a finite locally free sheaf is finite locally free ([[lem-tensor-qc-modules-quasi-coherent]], [[def-locally-free-sheaf-finite-rank]]).

[F3] For a finitely presented quasi-coherent sheaf $\mathcal E$ and a quasi-coherent sheaf $\mathcal G$ on $Y$, the internal Hom is quasi-coherent and its affine description is the sheaf associated to the module of linear maps; these descriptions agree on overlaps ([[lem-internal-hom-fp-qc]]). The higher-cohomology comparison below is constructed directly from the tensor maps attached to sections of $\mathcal E$.

## Proof

**Proof technique:** direct; reduce to the structure sheaf on a trivializing affine cover, then telescope over the finite algebraic local trivializations.

1.1 Canonical map and the locally free case. For an open $U\subseteq Y$ and a section $e$ of $\mathcal E|_U$, the morphism $\mathcal F|_{f^{-1}U}\to(f^*\mathcal E\otimes\mathcal F)|_{f^{-1}U}$ sending $s$ to $f^*e\otimes s$ induces a map on every higher direct image. This construction is additive in $e$, linear over $\mathcal O_Y(U)$, and compatible with restriction. Tensoring and sheafifying therefore defines the canonical comparison $\mathcal E\otimes R^qf_*\mathcal F\to R^qf_*(f^*\mathcal E\otimes\mathcal F)$. Suppose first that $\mathcal E=\mathcal O_Y^d$ is free. Then $f^*\mathcal E=\mathcal O_X^d$, tensoring with it commutes with the direct image and with cohomology, and the map is the identity componentwise; so the comparison map is an isomorphism in this case. [F2, F3, given, algebra]

2.1 Local trivialization and additivity. Since $\mathcal E$ is finite locally free, $Y$ is covered by affine opens $U$ on which $\mathcal E$ is free, and on each such $U$ the restriction of the comparison map is an isomorphism by step 1.1, using that the restrictions of $f$, $\mathcal E$ and $\mathcal F$ compute the restricted higher direct images. Two maps of quasi-coherent sheaves that agree on an open cover agree, so the comparison map is an isomorphism for every finite locally free $\mathcal E$: the argument is local on $Y$ and the local triviality makes the free case available, so no further additivity over direct summands is needed. [F2, step 1.1, algebra]

3.1 The K-theory identity. Tensoring a coherent sheaf with a finite locally free sheaf is exact, so on $K_0$ the class $[\mathcal E]$ acts by $[\mathcal G]\mapsto[\mathcal E\otimes\mathcal G]$, and $f^*[\mathcal E]$ is a finite locally free class by [F2]. Summing the isomorphisms of step 2.1 with alternating signs gives $f_!(f^*[\mathcal E]\cdot[\mathcal F])=\sum_q(-1)^q[\mathcal E\otimes R^qf_*\mathcal F]$ in $K_0(Y)$ by [F1], and $\sum_q(-1)^q[\mathcal E\otimes R^qf_*\mathcal F]=[\mathcal E]\cdot\sum_q(-1)^q[R^qf_*\mathcal F]=[\mathcal E]\cdot f_![\mathcal F]$ because the action of $[\mathcal E]$ is additive. That is the projection formula in $K_0(Y)$. [F1, F2, step 2.1, algebra] ∎ 
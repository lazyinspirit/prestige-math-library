---
id: lem-author-0bac6b264f4a-motivic-dim-prime-field-vanishing
kind: lemma
title: Combining the actual motivic and cdh outer-term bounds
status: published
domain: mathematics
deps:
  - lem-author-0bac6b264f4a-motivic-dim-general-interface
  - lem-author-0bac6b264f4a-motivic-dim-fiber-bound
  - lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing
  - thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-scheme-over-base
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - lem-adjudicate-7110d94407d7-noetherian-schemes-qcqs
dependency_roles:
  lem-author-0bac6b264f4a-motivic-dim-general-interface: mathematical-premise
  lem-author-0bac6b264f4a-motivic-dim-fiber-bound: mathematical-premise
  lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing: mathematical-premise
  thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  lem-adjudicate-7110d94407d7-noetherian-schemes-qcqs: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 12
formulation_deps:
  - lem-author-0bac6b264f4a-motivic-dim-general-interface
  - thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-scheme-over-base
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - lem-author-0bac6b264f4a-motivic-dim-general-interface
  - lem-author-0bac6b264f4a-motivic-dim-fiber-bound
  - lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing
  - thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-scheme-over-base
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - lem-adjudicate-7110d94407d7-noetherian-schemes-qcqs
---

## Statement
Assume the Axiom of Choice and fix Grothendieck universes $U\in V\in W$ with $\omega\in U$, with all field and scheme data in $U$. Existence of these universes is a separate size assumption. Use the actual motivic-to-cdh comparison in the supplied stable derived enhancement of unbounded cochain complexes of $V$-small abelian groups, considered in $W$, and its ordinary derived homotopy category $D(\mathbb Z)$.

For a prime field $F=\mathbb Q$ or $F=\mathbb F_p$ with $p$ prime, a nonempty Noetherian $F$-scheme $X$ of finite Krull dimension $d$ and $j\in\mathbb Z_{\geq0}$, the complex $M_{j,F}(X)$ is supported in degrees $\leq j+d$. Moreover the actual comparison $M_{j,F}(X)\to C_{j,F}(X)$ induces a surjection in degree $j+d$ and isomorphisms in every larger integer degree. An $F$-scheme has a specified structure morphism $X\to\operatorname{Spec}F$. Here $d$ is the supremum of the lengths $s$ of strict chains $Z_0\subsetneq\cdots\subsetneq Z_s$ of nonempty irreducible closed subsets of $X$; irreducible means not the union of two proper closed subsets. Supported in degrees $\leq n$ means $H^i=0$ for every integer $i>n$, with $H^i$ the cochain cohomology functor on $D(\mathbb Z)$. At the empty scheme all three complexes $F_{j,F}(X)$, $M_{j,F}(X)$ and $C_{j,F}(X)$ vanish, so every integer-degree comparison is an isomorphism; no endpoint at a noninteger empty-space dimension is needed.

## Statement references
[[lem-author-0bac6b264f4a-motivic-dim-general-interface]]

[[lem-author-0bac6b264f4a-motivic-dim-fiber-bound]]

[[lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing]]

[[thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input]]

[[math:def-locally-noetherian-and-noetherian-scheme]]

[[math:def-scheme-over-base]]

[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

## Facts & Assumptions
**Given:** The stated Choice and universe assumptions, $F,X,j$ as stated, and finite integer $d=\dim X$ when $X$ is nonempty.

**Goal:** Combine the two specific outer-term bounds and retain the actual comparison maps.

[A1] [[math:def-axiom-of-choice]] and [[math:def-grothendieck-universe-closure-convention]] specify the foundational assumptions. Choice is inherited through the derived enhancement and the site constructions used by the actual comparison and outer-bound suppliers below. Universe existence is assumed separately. Choice also discharges the inherited assumptions of the Noetherian-to-qcqs bridge in [F5]. This application makes no further selection of representatives or cones.

[F1] [[lem-author-0bac6b264f4a-motivic-dim-general-interface]] supplies the actual fiber sequence $F_{j,F}(X)\to M_{j,F}(X)\to C_{j,F}(X)$ and the vanishing of all three complexes at the empty scheme.

[F2] [[lem-author-0bac6b264f4a-motivic-dim-fiber-bound]] gives the first outer bound $\leq j+d$. [[thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input]] supplies the second outer bound on exactly the Noetherian finite-dimensional prime-field scheme $X$, with the Krull-dimension and cohomology conventions in the Statement.

[F3] [[lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing]] is the derived long-exact-sequence calculation, including the cochain cohomology functors and the meaning of upper support.

[F4] [[math:def-locally-noetherian-and-noetherian-scheme]] defines Noetherian schemes, and [[math:def-scheme-over-base]] defines a scheme with the specified structure morphism to its base.

[F5] [[lem-adjudicate-7110d94407d7-noetherian-schemes-qcqs]] shows that every Noetherian scheme is quasi-compact and quasi-separated (qcqs), including the empty scheme. Its Choice hypothesis is included in [A1]. The assumed scheme data in $U$ therefore put $X$ in the qcqs $F$-scheme domain of [F1], so evaluation of the actual comparison and fiber sequence at $X$ is defined.

## Proof
1.1 Under [A1], [F5] places $X$ in the qcqs domain of [F1], including when $X$ is empty, so the actual comparison and its fiber sequence can be evaluated at $X$. If $X$ is empty, [F1] gives the asserted zero complexes and all the integer-degree comparison isomorphisms. Otherwise $d$ and $j$ are integers. Apply [F3] to the actual sequence in [F1] with $N=j+d$, using the fiber bound from [F2]. It gives the surjection at degree $j+d$ and comparison isomorphisms for every $i>j+d$. These are maps induced by the actual natural transformation, not merely abstract group isomorphisms. [A1, F1, F2, F3, F4, F5, given]

2.1 For nonempty $X$, the cdh outer bound in [F2] makes the target of each high-degree comparison zero, so step 1.1 gives $H^i(M_{j,F}(X))=0$ for $i>j+d$. Both source-side dimension inputs were applied with their full Noetherian and finite-dimensional hypotheses; $j=0$ is included. Together with the empty case of step 1.1, this proves all the claims. [F1, F2, F3, step 1.1] ∎

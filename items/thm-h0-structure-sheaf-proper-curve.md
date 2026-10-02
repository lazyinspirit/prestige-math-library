---
id: thm-h0-structure-sheaf-proper-curve
kind: theorem
title: "Functions on a proper curve"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-connected-projective-variety-h0-o
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-geometrically-reduced-integral-connected-fibre
  - def-proper-morphism
  - def-sheaf-cohomology-derived-global-sections
  - thm-global-functions-proper-integral-variety
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Statement

Assume the Axiom of Choice. Let $C$ be a proper curve over a field $k$ that is
geometrically connected and geometrically reduced; for instance $C$ may be any
smooth proper curve. Then the canonical map $k\to H^0(C,\mathcal O_C)$,
$c\mapsto c\cdot1$, is an isomorphism. More generally, for a proper integral
curve over $k$ the $k$-algebra $H^0(C,\mathcal O_C)$ is a finite field
extension of $k$; it equals $k$ whenever $C$ is geometrically connected and
geometrically reduced, and hence for every proper curve over $k$, which is
geometrically integral by definition.

## Facts & Assumptions

**Given:** A field $k$ and a curve $C$ over $k$ whose structure morphism is proper; possibly also that $C$ is smooth over $k$.

[F1] A curve over $k$ is nonempty, geometrically integral, separated over $k$, of finite type over $k$, and of chain dimension one; a smooth curve is additionally smooth over $k$. ([[def-algebraic-curve-over-field]])

[F2] Geometric integrality of $X\to S$ means that the chosen algebraic-closure fibre is integral; an integral scheme is reduced and irreducible, and an irreducible space is connected. ([[def-geometrically-reduced-integral-connected-fibre]])

[F3] Under Choice, if $X$ is a nonempty scheme proper over $k$ whose algebraic-closure fibre is connected and reduced, then the unit map $k\to H^0(X,\mathcal O_X)$ is an isomorphism of $k$-algebras. ([[cor-connected-projective-variety-h0-o]])

[F4] Under Choice, if $X$ is a nonempty proper integral finite-type $k$-scheme with function field $K=k(X)$, then $\Gamma(X,\mathcal O_X)$ is a finite field extension of $k$ contained in $K$; if $X$ is moreover geometrically integral over the chosen algebraic closure, then $\Gamma(X,\mathcal O_X)=k$. ([[thm-global-functions-proper-integral-variety]])

[F5] A morphism is proper if and only if it is separated, of finite type and universally closed; in particular a proper $k$-scheme is of finite type over $k$. ([[def-proper-morphism]])

[F6] The degree-zero sheaf cohomology of $\mathcal O_X$ is the group of global sections: $H^0(X,\mathcal O_X)=\Gamma(X,\mathcal O_X)$, with its $k$-algebra structure. ([[def-sheaf-cohomology-derived-global-sections]])

[F7] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; separate the geometric hypotheses from the bare integrality of the curve and invoke the two published global-functions results.

1.1 Let $C$ be a proper curve over $k$. By [F1] the scheme $C$ is nonempty, reduced, irreducible, separated and of finite type over $k$, and has chain dimension one; by [F5] it is proper and finite type over $k$, hence a nonempty proper integral finite-type $k$-scheme. Moreover $H^0(C,\mathcal O_C)=\Gamma(C,\mathcal O_C)$ as $k$-algebras [F6]. [F1, F5, F6, given]

1.2 If $C$ is a smooth curve, then it is in particular a curve, hence geometrically integral by [F1], so that its algebraic-closure fibre is integral by [F2], and an integral fibre is reduced and (being irreducible) connected. Thus the hypotheses of [F3] are satisfied for every smooth proper curve, and likewise for every proper curve, since curves are geometrically integral by definition. [F1, F2, given]

1.3 If $C$ is a proper integral curve over $k$, then it is a nonempty proper integral finite-type $k$-scheme by [F5], with function field $k(C)$; so [F4] applies to it. [F4, F5, given]

2.1 Under Choice [F7], [F3] together with the geometric hypotheses verified in step 1.2 shows that the unit map $k\to H^0(C,\mathcal O_C)$ is an isomorphism for every proper curve that is geometrically connected and geometrically reduced; this covers in particular every smooth proper curve and every proper curve. [F3, F7, step 1.2]

2.2 Under Choice [F7], [F4] with step 1.3 shows that for a proper integral curve $C$ the $k$-algebra $\Gamma(C,\mathcal O_C)=H^0(C,\mathcal O_C)$ is a finite field extension of $k$ contained in $k(C)$, and that it equals $k$ as soon as $C$ is geometrically integral; since every curve is geometrically integral by [F1], this gives $H^0(C,\mathcal O_C)\cong k$ for every proper curve over $k$. [F1, F4, F6, F7, step 1.3]

3.1 The first sentence of the statement is step 2.1 with the smooth case supplied by step 1.2; the general assertion about proper integral curves is the first clause of step 2.2; the clause on geometrically connected and geometrically reduced curves is step 2.1, and the final clause on every proper curve is the geometric integrality of curves used in steps 1.2 and 2.2. The Axiom of Choice is used exactly through [F3] and [F4], both of which assume it. [F1, F3, F4, step 2.1, step 2.2] ∎

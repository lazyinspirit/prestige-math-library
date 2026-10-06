---
id: ex-degree-as-intersection-with-a-regular-value
kind: example
title: "Degree as an intersection with a regular value"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-oriented-intersection-number, lem-preimage-orientation-agrees-with-the-local-intersection-sign, prop-two-map-intersection-as-a-diagonal-preimage, def-degree-of-a-proper-smooth-map-by-compact-support-cohomology, thm-regular-value-formula-for-degree, def-local-orientation-sign-of-a-regular-preimage, prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold, def-product-orientation]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-12.md"
      - "research/frontier-38-owner-30-alpha-batch-12-5a.md"
      - "research/frontier-38-owner-30-step5-hash-12-post.json"
    reviewed_raw_sha256: "ff9614481fd9a706784bdd6457d5e88a4c21ca4ede8039660584151afc4bf0e4"
    content_sha256: "7fe47e212eda7339f78f840745db74ac1a6802bc2a0d90bd9a9e021233880401"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 3 §3, printed pp. 108–109 (degree as $I(f,\\{y\\})$ and the regular-value computation)"
    - title: "Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lecture 15, Corollary 143, pp. 49–50 (degree $=\\sum_{x\\in f^{-1}(p)}\\operatorname{sign}(x)$)"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§5, printed pp. 26–27 (definition of $\\deg(f;y)$ as the signed sum)"
---

## Example

Let $F:M^n\to N^n$ be a proper smooth map between nonempty connected oriented boundaryless manifolds, and let $y\in N$ be a regular value, with $\{y\}$ given the positive point orientation. The degree satisfies
$$\deg(F)=\sum_{p\in F^{-1}(y)}\operatorname{sgn}(dF_p),$$
the finite transverse signed intersection count against $\{y\}$. If $M$ is compact this is $I(F,\{y\})$ in [[def-oriented-intersection-number]]; for noncompact $M$ the displayed finite count is the proper-map regular-value formula, without asserting the compact-source definition applies. If $M$ is compact, orient $\Gamma_F$ by its parametrization $p\mapsto(p,F(p))$ and $M\times\{y\}$ by $M$ and the positive point; then
$$\deg(F)=I(M\times\{y\},\Gamma_F),\qquad I(\Gamma_F,M\times\{y\})=(-1)^n\deg(F).$$
The fibre precedes the graph, in the product-oriented $M\times N$.

## Facts & Assumptions

**Given:** Proper $F:M^n\to N^n$ as above, a regular value $y$ with positive point orientation, and compact $M$ for the intersection-number and graph clauses.

[F1] The regular fibre is finite and $\deg(F)=\sum\operatorname{sgn}(dF_p)$, including dimension zero ([[thm-regular-value-formula-for-degree]], [[def-local-orientation-sign-of-a-regular-preimage]], [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]]).

[F2] For a compact source the intersection number is the sum of local signs; against a positive point the signs agree with regular-preimage signs ([[def-oriented-intersection-number]], [[lem-preimage-orientation-agrees-with-the-local-intersection-sign]]).

[F3] The graph is embedded and the ambient product orientation lists $M$ before $N$ ([[prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold]], [[def-product-orientation]]).

[F4] The diagonal comparison for transverse maps is $I(f,g)=(-1)^{\dim Z}I(f\times g,\Delta)$ ([[prop-two-map-intersection-as-a-diagonal-preimage]]).

## Verification

1.1 Regularity makes $F$ transverse to $\{y\}$. Its finite signed count is the sum in [F1], since the local intersection signs against the positive point equal $\operatorname{sgn}(dF_p)$ by [F2]. The sum is $\deg(F)$; with compact $M$ the definition in [F2] names it $I(F,\{y\})$. Properness supplies finiteness even when $M$ is noncompact, but it does not enlarge that compact-source definition. [F1, F2, given, algebra]

2.1 Assume $M$ compact. At $(p,y)$ a fibre tangent vector is $(u,0)$ and a graph tangent vector is $(v,dF_pv)$. The ordered derivative matrix for fibre first, graph second is $\begin{pmatrix}I&I\\0&dF_p\end{pmatrix}$, whose determinant has sign $\operatorname{sgn}(dF_p)$ in the induced orientations. The determinant-line calculation also handles $n=0$: the two source point signs from $M$ cancel, leaving the ambient point sign of $M\times N$, equal to $\operatorname{sgn}(dF_p)$. The transverse intersection is exactly the finite regular fibre, so summing gives $I(M\times\{y\},\Gamma_F)=\deg(F)$. Reversing the two $n$-blocks multiplies each sign by $(-1)^{n^2}=(-1)^n$. [F1, F2, F3, step 1.1, algebra]

3.1 Write $s(p)=(p,F(p))$ and let $i$ include $M\times\{y\}$. Their oriented parametrizations identify $I(s,i)$ with the graph-first count, so [F4] gives $I(s,i)=(-1)^nI(s\times i,\Delta_{M\times N})$. This agrees with the opposite-order graph sign in 2.1, establishing compatibility of the degree and diagonal conventions. [F4, step 2.1, algebra] ∎

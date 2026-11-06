---
id: lem-cft-pointed-worldsheet-family-stable-under-restriction-and-base-change
kind: lemma
title: Stability of pointed analytic worldsheets under restriction and base change
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
deps:
  - def-cft-pointed-analytic-worldsheet
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - thm-euclidean-inverse-function-theorem
  - thm-cauchy-riemann-characterization-in-several-complex-variables
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-cauchy-riemann-characterization-in-several-complex-variables: mathematical-premise
axiom_use: "The pointed-worldsheet definition also names the imported genus convention, which assumes AC; this lemma uses only its analytic-family clauses and no AC."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras I: Propagation and Dual Fusion Products"
      url: https://arxiv.org/pdf/2305.10180v4
      locator: "§1.5–1.7 for proper holomorphic families, sections, and vertical coordinates; the stability argument is reconstructed locally below."
    - title: "J. Lebl, Basic Analysis II"
      url: https://www.jirka.org/ra/html/sec_svinvfuncthm.html
      locator: "Theorem 8.5.1, the Euclidean inverse function theorem used to produce the local product coordinates."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $(\pi:\mathcal C\to B;\sigma_i,z_i)_{i=1}^N$ be an analytic family of pointed compact worldsheets with the conventions of the Definition above. If $B_0\subseteq B$ is a nonempty open subset, the restricted family over $B_0$ is again an analytic family. If $f:B'\to B$ is holomorphic between complex manifolds, then the fiber product $\mathcal C_f:=\{(c,b')\in\mathcal C\times B':\pi(c)=f(b')\}$, with projection $\pi_f(c,b')=b'$, is a complex manifold and an analytic family of pointed compact worldsheets. Its sections are $\sigma_i'(b')=(\sigma_i(f(b')),b')$, and its vertical coordinate germs are the pullbacks of $z_i$.

## Statement references

[[def-cft-pointed-analytic-worldsheet]]

## Facts & Assumptions

**Given:** A proper holomorphic submersion $\pi:\mathcal C\to B$ with compact one-dimensional fibers, holomorphic disjoint sections and vertical coordinate germs, an open subset $B_0\subseteq B$, and a holomorphic map $f:B'\to B$.

[F1] [[def-cft-pointed-analytic-worldsheet]]: an analytic family has a proper holomorphic submersion of complex manifolds, compact one-dimensional fibers, holomorphic disjoint sections, and product-type vertical coordinate germs along those sections.

[F2] [[def-complex-manifolds-and-holomorphic-vector-bundles]]: holomorphic maps have complex-linear differentials, and their coordinate expressions are smooth maps between Euclidean open sets.

[F3] [[thm-euclidean-inverse-function-theorem]]: a $C^1$ map between open subsets of $\mathbb R^n$ with invertible differential at a point has a local $C^1$ inverse, whose differential is the inverse matrix.

[F4] [[thm-cauchy-riemann-characterization-in-several-complex-variables]]: a $C^1$ scalar map on an open subset of $\mathbb C^m$ is holomorphic when its real derivative is $\mathbb C$-linear at every point; apply this criterion componentwise to vector-valued maps.

## Proof

1.1 Restricting $\pi$ to $\pi^{-1}(B_0)$ preserves holomorphicity, surjectivity of its differential, the marked sections, and all local coordinate germs. For compact $K\subseteq B_0$, $K$ is compact in $B$, so $\pi^{-1}(K)$ is compact by properness of $\pi$; hence the restriction is proper. Its fibers and connected components are unchanged at points of $B_0$. [given, F1, algebra]

1.2 Fix $c\in\mathcal C$ with $\pi(c)=b$. In local holomorphic charts, write the base coordinates as $t_1,\ldots,t_m$ and the total-space coordinates as $u_1,\ldots,u_{m+1}$, since $\pi$ is a submersion with one-dimensional fibers. Surjectivity of $d\pi_c$ says at least one of the finitely many $m\times m$ minors of the complex Jacobian of $(t_1\circ\pi,\ldots,t_m\circ\pi)$ is nonzero. Choose the lexicographically first such minor and reorder the total-space coordinates so its columns are $u_1,\ldots,u_m$, with the omitted coordinate named $u_{m+1}$. The holomorphic map $\Phi(u)=(t_1\circ\pi(u),\ldots,t_m\circ\pi(u),u_{m+1})$ then has invertible complex differential. Viewed as a real map, its differential is invertible, so [F3] gives a local $C^1$ inverse. The inverse differential is the inverse of a complex-linear map and is therefore complex-linear at every point. Applying [F4] componentwise shows that this inverse is holomorphic. Thus these coordinates identify $\pi$ locally with projection $B\times D\to B$ for a disk $D\subset\mathbb C$. In these local product charts, $\mathcal C_f$ has coordinates $(b',u_{m+1})$ and projection $\pi_f$ is the projection to $b'$. The transition maps are holomorphic restrictions of the original maps and of $f$, so $\mathcal C_f$ is a complex manifold and $\pi_f$ is a holomorphic submersion. [given, F1, F2, F3, F4, choose, algebra]

2.1 Let $K\subseteq B'$ be compact. The fiber product is closed in $\mathcal C\times B'$ because $B$ is Hausdorff and the diagonal in $B\times B$ is closed. The inverse image $\pi_f^{-1}(K)$ is therefore closed in the compact set $\pi^{-1}(f(K))\times K$, since $f(K)$ is compact and $\pi$ is proper. Hence $\pi_f^{-1}(K)$ is compact, so $\pi_f$ is proper. The pulled-back sections are holomorphic and disjoint because the original sections are, and the coordinate maps $(z_i\circ\operatorname{pr}_{\mathcal C},\pi_f)$ are the pulled-back product charts. Each fiber is canonically the corresponding original fiber, so compactness and the marked-component condition are preserved. [given, F1, F2, step 1.2, algebra] ∎

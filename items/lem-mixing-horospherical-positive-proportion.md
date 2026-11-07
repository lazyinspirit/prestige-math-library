---
dependency_level: 1
id: lem-mixing-horospherical-positive-proportion
kind: lemma
title: "Transverse thickening gives horospherical positive proportion"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-semisimple-horospherical-local-product-and-tiles
  - lem-mixing-uniformity-for-compact-quotient-families
  - def-countable-choice
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock, Badly approximable systems of affine forms"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "Proposition 2.4; the mixing error is scaled by transverse volume before division"
---

## Statement

Assume Countable Choice and the semisimple horospherical setting $G,\Gamma,\Omega,a_t,H$ with invariant probability $\bar\mu$ and mixing. Let $Q\subset\Omega$ be compact, and let $K\subset\Omega$ be compact with $\bar\mu(\partial K)=0$. For every sufficiently small identity-centred coordinate box $V\subset H$ with compact closure, and every $\varepsilon>0$, all sufficiently large $t$ satisfy, uniformly for $x\in Q$,
$$\nu_H\{h\in V:a_thx\in K\}\ge\nu_H(V)\bar\mu(K)-\varepsilon.$$
Here “sufficiently small” ensures that a transverse product neighbourhood of $\overline V$ projects injectively at every point of $Q$. Such boxes exist at arbitrarily small scales. The waiting time may depend on $V,K,Q,\varepsilon$; no mixing rate is claimed.

## Statement references

[Kleinbock, Proposition 2.4](https://arxiv.org/pdf/math/9808057v2) — thickening a bounded horospherical set in nonexpanding directions.

## Facts & Assumptions

**Given:** Countable Choice and the groups, flow, sets and probability in the Statement.

[F1] A small product chart $U=\exp(S)V$ has normalized group measure $m(U)=\nu_{\mathfrak s}(S)\nu_H(V)$. Transverse displacements after $a_t$ have distance at most $C_0\|s\|$, uniformly in the base point and $t\ge0$. [[lem-semisimple-horospherical-local-product-and-tiles]]

[F2] The quotient measure is smooth, and mixing is uniform on compact base-point families for fixed relatively compact boundary-null group sets that project injectively at those points. [[lem-mixing-uniformity-for-compact-quotient-families]]

[A1] Countable Choice is assumed for the conditional Lie, integration, measure or dimension suppliers actually invoked below. No stronger Choice axiom is adopted. [[def-countable-choice]]

## Proof

**Proof technique:** transverse thickening with the correct scaled error.

1.1 A uniform injectivity neighbourhood exists over any compact base-point set. At one point choose an identity neighbourhood whose pairwise quotients avoid its discrete stabilizer. The same exclusion persists for nearby base points, represented by small group translates, by continuity of conjugation. A finite cover of $Q$ and intersection of the finitely many resulting identity neighbourhoods give a common one. Intersect it with the product chart in F1 and choose $V$ with compact closure sufficiently small inside it. If $\nu_H(V)\bar\mu(K)\le\varepsilon$, the assertion is immediate, so suppose otherwise. [given, F1, F2, construct, A1]

2.1 There is a compact $K'\subset\operatorname{int}K$ with $\bar\mu(K')\ge\bar\mu(K)-\varepsilon/(2\nu_H(V))$. Indeed $K\setminus\operatorname{int}K$ is null, and countably many compact rational coordinate boxes contained in $\operatorname{int}K$ exhaust that interior; finite unions approximate its measure by countable additivity. Smooth density in F2 makes their coordinate boundaries null. Compactness gives a positive distance from $K'$ to the complement of $K$. Choose a transverse box $S$ of positive $\nu_{\mathfrak s}$ measure so small that $C_0\|s\|$ is less than this distance and $U=\exp(S)V$ stays in the common injectivity neighbourhood. Its boundary is null by the product chart and the box boundaries. If the transverse space has dimension zero use its singleton with its positive zero-dimensional density. [F1, F2, step 1.1, construct]

3.1 Put $V'_x=\{h\in V:a_thx\in K\}$. If $a_t\exp(s)hx\in K'$, the uniform displacement estimate in F1 forces $a_thx\in K$. Thus $Ux\cap a_{-t}K'\subset\exp(S)V'_xx$. Injectivity, measure preservation and the exact product density give $\bar\mu(a_tUx\cap K')\le\nu_{\mathfrak s}(S)\nu_H(V'_x)$. By F2 choose the mixing waiting time using error $\varepsilon\nu_{\mathfrak s}(S)/2$, rather than an unscaled error. Uniformly for $x\in Q$ it gives $\bar\mu(a_tUx\cap K')\ge\nu_{\mathfrak s}(S)\nu_H(V)\bar\mu(K')-\varepsilon\nu_{\mathfrak s}(S)/2$. [F1, F2, step 2.1, algebra]

4.1 Divide by the positive transverse volume. The result is $\nu_H(V'_x)\ge\nu_H(V)\bar\mu(K')-\varepsilon/2\ge\nu_H(V)\bar\mu(K)-\varepsilon$, by step 2.1. Every choice except the final waiting time was independent of $x$, so the conclusion is uniform over $Q$ as asserted. [step 2.1, step 3.1, algebra] ∎


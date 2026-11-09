---
id: lem-author-9b6cb358ddc9-actual-second-fiber
kind: lemma
title: Actual second-stage comparison on every qcqs field-scheme
status: draft
domain: mathematics
deps:
  - lem-author-9b6cb358ddc9-local-chains
  - lem-author-9b6cb358ddc9-actual-cartan
  - lem-author-ec13f1db88a5-global-picard-projection
  - lem-author-ec13f1db88a5-rank-zero-stage
  - prop-motivic-weight-one
  - def-motivic-filtration
  - prop-filtration-product-projection
  - lem-flag-tower-line-quotients
  - lem-adjudicate-6cf37231df39-arbitrary-field-flag-detection
  - thm-author-3cde9692a7e9-universal-grass-input
  - prop-first-chern-determinant
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-9b6cb358ddc9-local-chains: mathematical-premise
  lem-author-9b6cb358ddc9-actual-cartan: mathematical-premise
  lem-author-ec13f1db88a5-global-picard-projection: mathematical-premise
  lem-author-ec13f1db88a5-rank-zero-stage: mathematical-premise
  prop-motivic-weight-one: mathematical-premise
  def-motivic-filtration: mathematical-premise
  prop-filtration-product-projection: mathematical-premise
  lem-flag-tower-line-quotients: mathematical-premise
  lem-adjudicate-6cf37231df39-arbitrary-field-flag-detection: mathematical-premise
  thm-author-3cde9692a7e9-universal-grass-input: mathematical-premise
  prop-first-chern-determinant: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 24
---

## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the supplied constructions. For every qcqs field-scheme, put $S=\Omega^\infty\operatorname{Fil}^1K$, $B=\Omega^\infty\operatorname{gr}^1K\simeq B\mathbb G_m$ and $T=\Omega^\infty\operatorname{Fil}^2K$. The actual second-layer map and second Chern map satisfy
$$Q_2\simeq-C_2i_K:T\longrightarrow A_2$$
as derived sheaf maps on the small Zariski site. This is a new full-scope statement proved below; no enlargement of a completed finite-type projection contract is implicit.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and the stated size bounds. Choice and the fixed size bounds are inherited from [F1]–[F3] in steps 1.1–3.1, including perfect Cartan in step 2.1 and the actual coefficient and derived-chain detection constructions in step 3.1.

[F1] [[lem-author-ec13f1db88a5-global-picard-projection]], [[lem-author-ec13f1db88a5-rank-zero-stage]] and [[prop-motivic-weight-one]] identify the actual rank fiber, determinant $d:S\to B$, and pointed section $\kappa(L)=[L]-1$, with an actual homotopy $d\kappa\simeq\mathrm{id}$ on all qcqs schemes.

[F2] [[def-motivic-filtration]] makes $T$ the actual homotopy fiber. [[prop-filtration-product-projection]] supplies the stage product/projection square on all qcqs schemes. [[prop-first-chern-determinant]] fixes the actual positive first-Chern convention.

[F3] [[lem-flag-tower-line-quotients]] and [[lem-adjudicate-6cf37231df39-arbitrary-field-flag-detection]] give line-quotient filtrations and integral motivic cohomology detection over every qcqs field-scheme. The latter uses prime-field restriction, the printed projective-bundle formula applied to dual bundles, and finite-clopen descent. [[thm-author-3cde9692a7e9-universal-grass-input]] supplies actual universal detection and bounded-weight stabilization. [[lem-author-9b6cb358ddc9-local-chains]] and [[lem-author-9b6cb358ddc9-actual-cartan]] supply full-scope derived-chain detection and perfect Cartan under [A1].

## Proof
**Given:** The actual maps on the qcqs site and their restrictions to any $X$.

**Goal:** Identify operations on the genuine determinant-trivial homotopy fiber, including all descent data.

1.1 The map $T\times B\to S$, $(t,b)\mapsto i(t)+\kappa(b)$, is an equivalence over $B$: translation by $\kappa(b)$ identifies the zero fiber with the fiber over each generalized point $b$, using the specified homotopy $d\kappa\simeq\mathrm{id}$. Its inverse gives a natural pointed retraction $r:S\to T$, underlying $s\mapsto s-\kappa(d(s))$ with that nullhomotopy; $ri\simeq\mathrm{id}$. No additivity of $\kappa$ is required. The section makes $\pi_1S(Y)\to\pi_1B(Y)$ surjective on every qcqs $Y$, so $\pi_0T(Y)\to\pi_0S(Y)$ is injective. The discrete rank target also makes $\pi_0S(Y)\to K_0(Y)$ injective. [A1, F1, F2]

1.2 For a rank-$n$ bundle $V$, $r([V]-n)$ has underlying class $\delta(V)=[V]-[\det V]-(n-1)$. Pull back to a detecting flag tower and let its line quotients be $L_s$. Put $D_s=\bigotimes_{i\leq s}L_i$ and $R_s=\sum_{i\leq s}[L_i]-[D_s]-(s-1)$. Exact flag sequences give this equality without splitting, and
$$R_1=0,\qquad R_s=R_{s-1}-([L_s]-1)([D_{s-1}]-1).$$
The latter product is the augmentation of the actual stage product of the line lifts $\kappa(L_s),\kappa(D_{s-1})$. Injectivity in step 1.1 identifies these equal K-classes with their unique second-stage classes. The actual product square in [F2] and induction give
$$Q_2r([V]-n)=-\sum_{i<s}c_1(L_i)c_1(L_s)=-c_2(V).$$
Rank zero/one give zero, and finite clopen decomposition handles varying ranks. Detection in [F3] descends the identity. [A1, F1, F2, F3, step 1.1]

2.1 Put $a=c_1(V)=c_1(\det V)$. Full-scope Cartan in [F3] gives $c_t(\delta(V))=c_t(V)(1+at)^{-1}$ through degree two. Its second coefficient is $c_2(V)-a^2+a^2=c_2(V)$. Thus $(Q_2+C_2i_K)r$ vanishes on every actual universal bundle on finite Grassmannians over $X$. [A1, F3, step 1.2]

3.1 The particular difference $(Q_2+C_2i_K)r$ is built from the natural actual stage maps, Chern operations, determinant and line-class section of [F1]–[F3]. Form these same constructions first on the smooth big Zariski site over $X$, where the universal-operation and coefficient constructions in [F3] are defined. This gives a specific big-site difference map; it is not an extension of an arbitrary small-site map. Apply the actual coefficient adjunction and Grass/Vect detection there, then stabilize to $BGL$. In weight two the actual negative-coefficient vanishing supplied in [F3] eliminates every coefficient of monomial weight greater than two in all degrees. Therefore both mapping $\pi_0$ and $\pi_1$ stabilize at rank at least two, and $\lim^1\pi_1=0$. The resulting big-site homotopy restricts along the open immersions to the small Zariski site and shows that the difference vanishes after its actual rank-zero free-class map $j_0:BGL\to S$. By the first helper's derived-chain detection it vanishes on $S$. Restrict along $i$ and use $ri\simeq\mathrm{id}$ to prove the displayed map identity on $T$. This extends the comparison by a retraction before using plus detection; it never asserts preservation of an arbitrary homotopy fiber by a homology equivalence. [A1, F3, step 1.1, step 1.2, step 2.1] ∎

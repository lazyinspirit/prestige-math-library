---
id: lem-gts-deligne-exact-sequences
kind: lemma
title: Exact sequence for smooth Deligne cohomology
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 4
proof_strategy: direct
axiom_strength: ZF + full AC where the sheaf comparison requires it
deps:
  - def-gts-smooth-deligne-cohomology-model
  - def-cech-cohomology-open-cover
  - thm-cech-to-sheaf-cohomology-comparison
  - thm-de-rham-theorem
  - def-axiom-of-choice
  - thm-the-cone-long-exact-sequence
  - def-gts-good-cover-singular-cech-comparison-input
  - lem-acyclic-rows-and-columns-of-cech-double-complex
dependency_roles:
  def-gts-smooth-deligne-cohomology-model: mathematical-premise
  def-cech-cohomology-open-cover: mathematical-premise
  thm-cech-to-sheaf-cohomology-comparison: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-the-cone-long-exact-sequence: mathematical-premise
  def-gts-good-cover-singular-cech-comparison-input: mathematical-premise
  lem-acyclic-rows-and-columns-of-cech-double-complex: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.2, exact sequence (20), PDF pp. 36–39.
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.5, Deligne-to-character exact-sequence comparison, PDF pp. 67–68.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume full AC, fix a good cover as in [[def-gts-smooth-deligne-cohomology-model]], and assume the comparison input of [[def-gts-good-cover-singular-cech-comparison-input]]. For every $k\ge1$, the Deligne hypercohomology group has natural maps $a$, $I$, and $R$, and the sequence
$$H^{k-1}(M;\mathbb Z)\longrightarrow H^{k-1}_{\mathrm{dR}}(M;\mathbb R)\xrightarrow{a}\widehat H^k_{\mathrm{Del}}(M;\mathbb Z)\xrightarrow{(I,R)}H^k(M;\mathbb Z)\times_{H^k(M;\mathbb R)}\Omega^k_{\mathrm{cl}}(M)\longrightarrow0$$
is exact. The fiber product consists of pairs $(c,\omega)$ satisfying $c_{\mathbb R}=[\omega]_{\mathrm{dR}}$; every such $\omega$ has integral periods, so the last factor may equivalently be written $\Omega^k_{\mathbb Z}(M)$.

## Statement references

[[def-gts-smooth-deligne-cohomology-model]]

[[thm-de-rham-theorem]]

## Facts & Assumptions

**Given:** Full AC, a finite-dimensional Hausdorff second-countable smooth manifold without boundary, a good cover and its subordinate partition of unity, and the comparison input of [[def-gts-good-cover-singular-cech-comparison-input]].

[F1] [[def-gts-smooth-deligne-cohomology-model]] defines the Deligne complex as the shifted cone of $\mathbb Z\oplus\sigma_{\ge k}\Omega^\bullet\to\Omega^\bullet$, $(z,\alpha)\mapsto z-\alpha$, equivalently the truncated complex $\mathbb Z\to\Omega^0\to\cdots\to\Omega^{k-1}$.

[F2] [[def-gts-good-cover-singular-cech-comparison-input]] supplies acyclicity on each nonempty finite intersection for the constant integer sheaf and every smooth-form sheaf. The acyclic-cover clause of [[lem-acyclic-rows-and-columns-of-cech-double-complex]] makes both augmentations of the Cech–Godement double complex quasi-isomorphisms; composing one with the inverse of the other gives the natural comparison of [[thm-cech-to-sheaf-cohomology-comparison]]. Applying this termwise and eliminating the acyclic mapping-cone rows on each finite total diagonal identifies the Cech total complex with derived global sections of the bounded Deligne complex; the alternating fixed-cover total differential is the one defined in [[def-cech-cohomology-open-cover]].

[F3] [[thm-de-rham-theorem]] identifies real de Rham cohomology with real singular cohomology under $\mathrm{AC}_\omega$, implied by full AC.

[F4] [[thm-the-cone-long-exact-sequence]] gives the long exact cohomology sequence of the shifted cone triangle, after cochain complexes are reindexed as chain complexes.

[F5] [[def-gts-good-cover-singular-cech-comparison-input]] identifies the constant-integer Cech groups appearing in the cone sequence with ordinary singular cohomology, naturally under the stated refinements.

## Proof

1.1 Put $\mathcal D_k=\operatorname{Cone}(f)[-1]$, where $f:\mathbb Z\oplus\sigma_{\ge k}\Omega^\bullet\to\Omega^\bullet$ sends $(z,\alpha)$ to $z-\alpha$, as in [F1]. The cone long exact sequence [F4], applied after the Cech-to-sheaf comparison [F2], gives a long exact hypercohomology sequence. Its relevant terms are $\mathbb H^{k-1}(\mathbb Z\oplus\sigma_{\ge k}\Omega^\bullet)\to\mathbb H^{k-1}(\Omega^\bullet)\to H^k(\mathcal D_k)\to\mathbb H^k(\mathbb Z\oplus\sigma_{\ge k}\Omega^\bullet)\to\mathbb H^k(\Omega^\bullet)$. [F1, F2, F4, given]

1.2 For each form degree $j$, the Cech row $\check C^\bullet(\mathcal U,\Omega^j)$ has contraction in positive Cech degrees $$(hc)_{i_0\ldots i_{p-1}}=\sum_i\rho_i c_{i i_0\ldots i_{p-1}},$$ where $(\rho_i)$ is the subordinate partition of unity in [F1]. Local finiteness makes the sum smooth and the support condition lets each summand extend by zero; the alternating Cech formula gives $\delta h+h\delta=1$ for $p>0$. Consequently the Cech total complex for the full $\Omega^\bullet$ has the same cohomology as its global-section de Rham complex, namely $H^*_{\mathrm{dR}}(M;\mathbb R)$. For $\sigma_{\ge k}\Omega^\bullet$, all total terms below degree $k$ vanish; in degree $k$ the only term is $\check C^0(\mathcal U,\Omega^k)$, whose cocycles are global closed $k$-forms and which has no degree-$(k-1)$ boundaries. Its hypercohomology is therefore $\Omega^k_{\mathrm{cl}}(M)$ in degree $k$ and zero below. [F1, F2, algebra]

2.1 The comparison input [F5] identifies the constant-integer Cech groups in step 1.1 with ordinary singular cohomology; [F3] identifies the form-complex groups with real singular cohomology. The map $H^{k-1}(M;\mathbb Z)\to H^{k-1}_{\mathrm{dR}}(M;\mathbb R)$ is coefficient inclusion followed by de Rham, and the final map sends $(c,\omega)$ to $c_{\mathbb R}-[\omega]$. Thus the long exact sequence becomes $$H^{k-1}(M;\mathbb Z)\to H^{k-1}_{\mathrm{dR}}(M;\mathbb R)\xrightarrow{a}\widehat H^k_{\mathrm{Del}}(M;\mathbb Z)\xrightarrow{(I,R)}H^k(M;\mathbb Z)\oplus\Omega^k_{\mathrm{cl}}(M)\xrightarrow{(c,\omega)\mapsto c_{\mathbb R}-[\omega]}H^k(M;\mathbb R).$$ The middle maps are induced by the cone projections, with the sign convention of [F1]. Exactness at every displayed term follows from the long exact sequence. [F1, F2, F3, F5, step 1.1, step 1.2]

3.1 The kernel at $(I,R)$ in step 2.1 is exactly the fiber product in the Statement; exactness of that long exact sequence makes $(I,R)$ surjective onto it. If $(c,\omega)$ lies in the fiber product, then $[\omega]=c_{\mathbb R}$; for every smooth integral $k$-cycle $z$, de Rham evaluation gives $\int_z\omega=\langle c,z\rangle\in\mathbb Z$. Hence $\omega\in\Omega^k_{\mathbb Z}(M)$, so the fiber product is unchanged when the last factor is written with integral-period forms. Exactness at the earlier terms, including the kernel of $a$, was already established in step 2.1. [F3, step 2.1] ∎

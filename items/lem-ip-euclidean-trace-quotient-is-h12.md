---
id: lem-ip-euclidean-trace-quotient-is-h12
kind: lemma
title: The Euclidean trace quotient is the fixed-atlas H1/2 boundary space
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-sobolev-spaces-on-compact-riemannian-domain
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - def-fractional-sobolev-space-on-a-compact-c-one-boundary
  - lem-fractional-boundary-norm-is-independent-of-atlas
  - lem-c-k-boundary-flattening-preserves-wkp-locally
  - lem-weak-leibniz-rule-with-a-smooth-factor
  - thm-smooth-up-to-the-boundary-density-on-smooth-domains
  - thm-sobolev-spaces-are-banach-spaces
  - lem-half-space-trace-has-the-fractional-slobodeckij-bound
  - thm-lp-trace-operator-on-a-bounded-c-one-domain
  - thm-kernel-of-the-trace-is-w-one-p-zero
  - thm-bounded-right-inverse-for-the-sobolev-trace
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in n variabili (1957)"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "No. 1, Theorem [1.I] and its proof, printed pp. 286–290 (PDF pp. 3–7): trace-space characterization, local boundary norms, and equivalence between the trace norm and quotient norm."
    - title: "Maria Kampanou, Trace Theorems for Sobolev Spaces (2018)"
      url: "https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf"
      locator: "Chapter 3, Theorems 3.4–3.5 and their proofs, printed pp. 28–31 (PDF pp. 28–31): trace range on a smooth boundary and a bounded extension from the fractional boundary space."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $n\ge2$, let $\Omega\subset\mathbb R^n$ be a bounded connected domain with smooth nonempty boundary, and regard $\overline\Omega$ as a compact smooth manifold with the Euclidean metric. Write $H^1_{\rm E}(\Omega)=W^{1,2}(\Omega;\mathbb R)$ and let $H^1_{0,\rm E}(\Omega)$ be the closure of $C_c^\infty(\Omega;\mathbb R)$ in that norm; put $\mathcal B_{\rm E}:=H^1_{\rm E}(\Omega)/H^1_{0,\rm E}(\Omega)$. Let $H^1_{\rm fix}(\overline\Omega)$ and $H^1_{0,\rm fix}(\overline\Omega)$ be the fixed-atlas spaces on $\overline\Omega$ and let $H^{1/2}_{\rm fix}(\partial\Omega)$ be the fixed-atlas boundary space using localized Euclidean $W^{1/2,2}$ norms. The identity on smooth functions extends to bounded linear isomorphisms between $H^1_{\rm E}(\Omega)$ and $H^1_{\rm fix}(\overline\Omega)$, and between their zero-boundary subspaces. Classical boundary restriction extends to a bounded linear trace $T:H^1_{\rm fix}(\overline\Omega)\to H^{1/2}_{\rm fix}(\partial\Omega)$ with kernel $H^1_{0,\rm fix}(\overline\Omega)$. The induced quotient map is a bounded linear isomorphism

$$H^1_{\rm E}(\Omega)/H^1_{0,\rm E}(\Omega)\;\cong\;H^1_{\rm fix}(\overline\Omega)/H^1_{0,\rm fix}(\overline\Omega)\;\cong\;H^{1/2}_{\rm fix}(\partial\Omega).$$

Thus the Euclidean trace quotient and the fixed-atlas $H^{1/2}$ boundary space are canonically equivalent.

## Statement references

[[def-ip-sobolev-spaces-on-compact-riemannian-domain|Fixed-atlas Sobolev and trace spaces]]

[[def-fractional-sobolev-space-on-a-compact-c-one-boundary|Fractional Sobolev space on a compact boundary]]

[[lem-half-space-trace-has-the-fractional-slobodeckij-bound|Half-space trace estimate into the fractional boundary space]]

[[thm-bounded-right-inverse-for-the-sobolev-trace|Bounded right inverse for the Sobolev trace]]

[Gagliardo, Theorem 1.I and proof, pp. 286–290](https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf)

[Kampanou, Theorems 3.4–3.5 and proofs, pp. 28–31](https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the bounded connected smooth Euclidean domain and fixed-atlas conventions in the statement.

[A1] The Axiom of Choice. ([[def-axiom-of-choice]])

[A2] Countable Choice. ([[def-countable-choice]])

[F1] $H^1_{\rm fix}$ is the completion of smooth functions in the fixed finite chartwise $W^{1,2}$ norm; $H^1_{0,\rm fix}$ is the closure of interior compactly supported smooth functions; $H^{1/2}_{\rm fix}$ is the fixed finite sum of localized Euclidean $W^{1/2,2}$ boundary norms. ([[def-ip-sobolev-spaces-on-compact-riemannian-domain]])

[F2] The compact-boundary fractional space consists of $L^2$ classes with finite chartwise Slobodeckij norm, and different finite atlases and subordinate partitions give equivalent norms. ([[def-fractional-sobolev-space-on-a-compact-c-one-boundary]], [[lem-fractional-boundary-norm-is-independent-of-atlas]])

[F3] Smooth flattening-chart compositions and multiplication by the fixed smooth cutoffs are bounded in $W^{1,2}$; restrictions of ambient smooth functions are dense in Euclidean $W^{1,2}(\Omega)$, which is complete. ([[lem-c-k-boundary-flattening-preserves-wkp-locally]], [[lem-weak-leibniz-rule-with-a-smooth-factor]], [[thm-smooth-up-to-the-boundary-density-on-smooth-domains]], [[thm-sobolev-spaces-are-banach-spaces]])

[F4] For $p=2$, the half-space trace extends classical restriction to a bounded map $W^{1,2}(\mathbb R^n_+)\to W^{1/2,2}(\mathbb R^{n-1})$. ([[lem-half-space-trace-has-the-fractional-slobodeckij-bound]])

[F5] The usual trace from Euclidean $H^1(\Omega)$ to $L^2(\partial\Omega)$ is bounded and agrees with classical restriction on continuous Sobolev functions. ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]])

[F6] The kernel of that $L^2$ trace is exactly the Euclidean $H^1$-closure of $C_c^\infty(\Omega)$, namely $H^1_{0,\rm E}(\Omega)$. ([[thm-kernel-of-the-trace-is-w-one-p-zero]], [[def-wkp-zero-as-a-sobolev-closure]])

[F7] For a bounded smooth Euclidean domain, the $L^2$ trace has a bounded right inverse from the compact-boundary $W^{1/2,2}$ space to Euclidean $H^1(\Omega)$. ([[thm-bounded-right-inverse-for-the-sobolev-trace]])

## Proof

1.1 On the common smooth core, the identity between the fixed-atlas and Euclidean $W^{1,2}$ norms is bounded in both directions. Indeed, each fixed chart representative is obtained by multiplying by a fixed smooth cutoff and composing with a smooth flattening chart, so [F3] bounds the finite fixed-atlas sum by the Euclidean norm. Conversely, the finite partition of unity writes $u$ as the sum of its localized chart pieces; pull each piece back and use [F3] to bound the Euclidean $W^{1,2}$ norm by the fixed-atlas sum. The constants are finite because the atlas and partition are finite. By the density and completeness in [F3], the identity extends to bounded inverse maps on the completions. Since the two norms are equivalent on $C_c^\infty(\Omega)$, their closures give the same zero-boundary subspace. [A1, A2, F1, F3, construct]

2.1 For $u\in H^1_{\rm fix}$, take its localized boundary-chart representatives in the fixed-atlas definition. Apply [F4] to each representative (reflecting $t<0$ to $t>0$ when required), and sum the finitely many resulting local traces. The fixed-atlas norm [F1] gives a bounded map $T:H^1_{\rm fix}\to H^{1/2}_{\rm fix}$. For smooth $u$ this sum is the classical boundary restriction because the partition equals one near the boundary and the half-space traces agree with classical restriction. As an $L^2$-valued map, this trace agrees with the Euclidean trace [F5]: the maps are bounded into $L^2$ by [F2] and [F5], and the Euclidean and fixed $H^1$ norms are equivalent by step 1.1, so equality on the dense smooth core extends to all of $H^1$. [A1, A2, F1, F2, F4, F5, step 1.1, construct]

3.1 If $Tu=0$ in $H^{1/2}_{\rm fix}$, it is zero as an $L^2$ class by [F2]; the $L^2$ trace agreement of step 2.1 and [F6] imply $u\in H^1_{0,\rm E}$. Step 1.1 identifies this with $H^1_{0,\rm fix}$. Conversely, if $u\in H^1_{0,\rm fix}$, approximate it in the fixed $H^1$ norm by interior compactly supported smooth functions. Each has zero classical trace, so continuity of $T$ gives $Tu=0$. Therefore $\ker T=H^1_{0,\rm fix}$. [A1, A2, F1, F2, F6, step 1.1, step 2.1, given]

4.1 By [F7] and the boundary-norm equivalence [F2], the Euclidean $L^2$ trace has a bounded right inverse $R:H^{1/2}_{\rm fix}(\partial\Omega)\to H^1_{\rm E}(\Omega)$. The norm equivalence of step 1.1 makes $R$ bounded into $H^1_{\rm fix}$ as well. For every boundary class $f$, the Euclidean trace of $Rf$ is $f$; by step 2.1 the fixed trace agrees with it in $L^2$, hence as an $H^{1/2}_{\rm fix}$ class. So $T$ is onto. The kernel identity of step 3.1 induces a bounded bijection $\bar T:H^1_{\rm fix}/H^1_{0,\rm fix}\to H^{1/2}_{\rm fix}$. For any representative $u+v$ with $v\in H^1_{0,\rm fix}$, step 2.1 gives $\|Tu\|_{H^{1/2}}\le C\|u+v\|_{H^1_{\rm fix}}$; taking the infimum shows $\bar T$ is bounded. Also $\|\bar T^{-1}f\|\le\|Rf\|_{H^1_{\rm fix}}\le C_R\|f\|_{H^{1/2}}$, so its inverse is bounded. Composing with the quotient identity isomorphism of step 1.1 proves the asserted Euclidean quotient identification. [A1, A2, F1, F2, F7, step 1.1, step 2.1, step 3.1, construct] ∎


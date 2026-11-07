---
id: lem-local-invariant-restriction-scaling
kind: lemma
title: Restriction scales the unramified local invariant by the extension degree
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
- lem-local-unramified-degree-two-cohomology-and-inflation
- thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
- thm-finite-unramified-local-extensions-classified-by-residue-extensions
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
justified_by: []
proof_strategy: direct
axiom_use: AC is assumed throughout; it covers the finite-dimensional and compactness
  choices. DC and supplied resolutions are used only where cohomology is invoked.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03; locally adapted intermediate
      lemma
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter III §1, restriction diagram, and Theorem 2.1; the valuation/Bockstein/Frobenius
      diagram is reconstructed, without the downstream norm-index theorem.
verification: {}
---

## Statement

Assume AC and DC with the supplied cohomology conventions. For each finite-residue complete discretely valued field $L$, define $i_L:H^2_{\mathrm{cts}}(G_L,L_s^\times)\to\mathbb Q/\mathbb Z$ by inverse unramified inflation, valuation, inverse connecting map, and evaluation at arithmetic Frobenius. For every finite separable extension $M/L$, inside a common separable closure,
$$i_M(\operatorname{Res}_{G_M}^{G_L}\alpha)=[M:L]\,i_L(\alpha).$$

## Statement references

[[lem-local-unramified-degree-two-cohomology-and-inflation]]

[[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

## Facts & Assumptions

**Given:** AC and the objects in the Statement.

[F1] Unramified inflation, valuation and the connecting map are isomorphisms with arithmetic Frobenius coordinates. [[lem-local-unramified-degree-two-cohomology-and-inflation]]

[F2] A finite local extension has degree $ef$, and normalized valuations restrict by $v_M|_L=e v_L$. [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]

[F3] Unramified extensions correspond to residue extensions, and arithmetic Frobenius acts by residue-cardinality powering. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[F4] Continuous normalized cochains give the restriction and coefficient maps. [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 Let $e=e(M/L)$ and $f=[k_M:k_L]$. Unramified base change and [F3] place $L^{\mathrm{ur}}$ inside $M^{\mathrm{ur}}$: a separable residue polynomial for a finite unramified level splits into separable residue factors after extending the residue field, and Hensel lifting gives the corresponding unramified extensions over $M$. The restriction map $j:\Gamma_M\to\Gamma_L$ sends $\varphi_M$ to $\varphi_L^f$, since both act on the common algebraic residue closure by $x\mapsto x^{|k_M|}$. [F3, given, construct]

1.2 On each element of $L^{\mathrm{ur}}$, the normalized valuation on $M^{\mathrm{ur}}$ is $e$ times that on $L^{\mathrm{ur}}$. Both extensions are unramified over their respective bases, so this is [F2]'s formula at each finite compositum. Pulling back cochains by $j$ and including coefficients commutes with absolute restriction after inflation, simply by substituting the same group elements into a cochain. Applying valuations therefore sends a class $\beta$ to $e\,j^*\beta$. [F2, F4, step 1.1, algebra]

2.1 Connecting maps commute with pullback and with multiplication by $e$: lift a character to a rational cochain and take its coboundary, obtaining the same expression in either order. Thus if $\chi=\delta_L^{-1}(v_L^*(\operatorname{Inf}_L^{-1}\alpha))$, the character defining $i_M(\operatorname{Res}\alpha)$ is $e\,\chi\circ j$ by [F1] and step 1.2. Its value on $\varphi_M$ is $e\chi(\varphi_L^f)=ef\chi(\varphi_L)$. By [F2] this is $[M:L]i_L(\alpha)$. The identity extension and zero class satisfy the same computation. [F1, F2, step 1.1, step 1.2, algebra] ∎

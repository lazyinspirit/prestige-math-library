---
id: ex-qftx-n1-su2-fundamental-matter-covariant-derivative
kind: example
title: Fundamental SU(2) chiral matter and its covariant derivative
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 6
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-n1-superspace-and-actions-examples
deps:
  - post-qftx-n1-gauge-matter-model
  - def-qftx-n1-vector-superfield
  - def-qftx-nonabelian-gauge-data
  - post-qftx-nonabelian-yang-mills-model
dependency_roles:
  post-qftx-n1-gauge-matter-model: physical-assumption
  def-qftx-n1-vector-superfield: formulation-prerequisite
  def-qftx-nonabelian-gauge-data: formulation-prerequisite
  post-qftx-nonabelian-yang-mills-model: physical-assumption
proof_strategy: direct
physical_scope: "A local classical example of the fundamental SU(2) representation and its covariant scalar kinetic term in the adopted N=1 gauge-matter model. It is not a claim that fundamental SU(2) matter occurs in nature."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§4.9, printed pp. 46–48: chiral matter in a finite-dimensional representation and its non-Abelian superspace coupling."
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§5.2, printed pp. 30–31, equations (5.19)–(5.25): representation-valued chiral fields and covariant derivatives."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Choose the fundamental representation $R_{\mathrm f}:SU(2)\to U(\mathbb C^2)$ defined by $R_{\mathrm f}(h)w=hw$ for $h\in SU(2)\subset M_2(\mathbb C)$ and $w\in\mathbb C^2$, with the standard Hermitian form $w^\dagger z$ on $\mathbb C^2$. Its differential is $\rho_{\mathrm f*}(X)=X$ for $X\in\mathfrak{su}(2)$, and its Hermitian generators are $t_a=\sigma_a/2$. In a local trivialization write a scalar matter component as $\phi=(u,v)^T$ and the Hermitian vector potential as $B_\mu=B_\mu^at_a$, so the supplied connection is $A_\mu=-ig_{\mathrm{YM}}B_\mu$. The fundamental covariant derivative $D_\mu\phi=\partial_\mu\phi+\rho_{\mathrm f*}(A_\mu)\phi$ has components

$$D_\mu u=\partial_\mu u-\frac{i g_{\mathrm{YM}}}{2}\left(B_\mu^3u+(B_\mu^1-iB_\mu^2)v\right),\qquad D_\mu v=\partial_\mu v-\frac{i g_{\mathrm{YM}}}{2}\left((B_\mu^1+iB_\mu^2)u-B_\mu^3v\right).$$

On an overlap with transition $h(x)\in SU(2)$, the associated-bundle component is $\phi'=h^{-1}\phi$ and the right-connection local form is $A_\mu'=h^{-1}A_\mu h+h^{-1}\partial_\mu h$. Consequently $D_\mu'\phi'=h^{-1}D_\mu\phi$, so the scalar kinetic density $-(D_\mu\phi)^\dagger D^\mu\phi$ agrees in both local frames.

## Example references

[Stephen P. Martin, *A Supersymmetry Primer*, §4.9](https://arxiv.org/pdf/hep-ph/9709356v7).

[Adel Bilal, *Introduction to Supersymmetry*, §5.2](https://arxiv.org/pdf/hep-th/0101055).

[[post-qftx-n1-gauge-matter-model]]

[[def-qftx-n1-vector-superfield]]

[[def-qftx-nonabelian-gauge-data]]

[[post-qftx-nonabelian-yang-mills-model]]

## Facts & Assumptions

**Given:** The fundamental representation and local connection convention in the Example.

[A1] [[post-qftx-nonabelian-yang-mills-model]]: in local sections the right-connection transition law is $A_j=\operatorname{Ad}_{h^{-1}}A_i+h^{-1}dh$ and the gauge group is $SU(2)$.

[F1] [[def-qftx-nonabelian-gauge-data]]: a matter representation is a smooth finite-dimensional unitary group homomorphism $R:SU(2)\to U(V_R)$, and the associated vector bundle uses the relation $[ph,v]=[p,R(h)v]$.

[F2] [[def-qftx-n1-vector-superfield]]: the Hermitian generators are $t_a=\sigma_a/2$, $A_\mu=-ig_{\mathrm{YM}}B_\mu$, and $D_\mu=\partial_\mu+\rho_{R*}(A_\mu)$.

[F3] [[post-qftx-n1-gauge-matter-model]]: the scalar kinetic term in the matter D-term is $-(D_\mu\phi)^\dagger D^\mu\phi$.

## Verification
**Given:** [A1]–[F3] and a smooth local transition $h:U_i\cap U_j\to SU(2)$.

1.1 The fundamental matrices are $t_1=\tfrac12\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $t_2=\tfrac12\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, and $t_3=\tfrac12\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. Substituting $A_\mu=-ig_{\mathrm{YM}}\sum_aB_\mu^at_a$ into [F2] and multiplying by $(u,v)^T$ gives the two component expressions in the Example. [F2, algebra]

1.2 Write $R=R_{\mathrm f}(h)$. By [A1] and the differential of the smooth representation in [F1], $\rho_{\mathrm f*}(A_\mu')=R^{-1}\rho_{\mathrm f*}(A_\mu)R+R^{-1}\partial_\mu R$. Since differentiating $RR^{-1}=I$ gives $\partial_\mu(R^{-1})=-R^{-1}(\partial_\mu R)R^{-1}$, expand the transformed covariant derivative to obtain $D_\mu'\phi'=\partial_\mu(R^{-1}\phi)+\rho_{\mathrm f*}(A_\mu')R^{-1}\phi=R^{-1}(\partial_\mu\phi+\rho_{\mathrm f*}(A_\mu)\phi)=R^{-1}D_\mu\phi$. [A1, F1, F2, algebra]

2.1 Unitarity gives $(R^{-1}D_\mu\phi)^\dagger(R^{-1}D^\mu\phi)=(D_\mu\phi)^\dagger RR^{-1}D^\mu\phi=(D_\mu\phi)^\dagger D^\mu\phi$. Thus the scalar kinetic density in [F3] is independent of the chosen local frame. [F1, F3, step 1.2, algebra] ∎

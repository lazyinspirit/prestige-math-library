---
id: "ex-de-rham-cohomology-of-the-circle-from-mayer-vietoris"
kind: "example"
title: "De rham cohomology of the circle from mayer vietoris"
deps: ["thm-mayer-vietoris-sequence-in-de-rham-cohomology", "thm-zero-th-de-rham-cohomology-is-locally-constant-functions", "thm-de-rham-cohomology-of-a-contractible-smooth-manifold"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Under countable choice, $H^0(S^1)=H^1(S^1)=\mathbb R$ and all other de Rham groups vanish.

## Facts & Assumptions

**Given:** Assume countable choice. The unit circle covered by the complements $U,V$ of two opposite points.

[F1] [[thm-mayer-vietoris-sequence-in-de-rham-cohomology]]: Under countable choice the de Rham Mayer–Vietoris sequence is exact: $\cdots\to H^k(M)\xrightarrow{r^*}H^k(U)\oplus H^k(V)\xrightarrow{s^*}H^k(U\cap V)\xrightarrow\delta H^{k+1}(M)\to\cdots$, beginning with $0\to H^0(M)$.

[F2] [[thm-zero-th-de-rham-cohomology-is-locally-constant-functions]]: $H^0_{\mathrm{dR}}(M)$ is the algebra of locally constant real functions. For nonempty connected $M$ it is canonically $\mathbb R$.

[F3] [[thm-de-rham-cohomology-of-a-contractible-smooth-manifold]]: Under countable choice, a nonempty contractible smooth manifold has $H^0_{\mathrm{dR}}\cong\mathbb R$ and vanishing positive-degree de Rham cohomology.

## Verification

**Proof technique:** direct.

1.1 Stereographic projection from the omitted point makes each of $U,V$ diffeomorphic to $\mathbb R$. Their overlap has two open-arc components $W_0,W_1$, each diffeomorphic to an open interval and hence contractible by linear contraction in that coordinate. F3 makes their positive-degree groups vanish, while F2 identifies their degree-zero groups with constants on components. Thus the initial Mayer–Vietoris segment is $0\to H^0(S^1)\to\mathbb R^2\xrightarrow{s}\mathbb R^2\to H^1(S^1)\to0$, where $s(a,b)=(b-a,b-a)$. [F1, F2, F3, given]

2.1 The kernel is $\{(a,a)\}$ and the image is the diagonal. The functional $(c,d)\mapsto d-c$ has exactly that kernel and is onto, so the cokernel is $\mathbb R$. Exactness computes both groups. Degrees above one and negative degrees have zero form spaces. [step 1.1, algebra] ∎

## Source locator

Lee, Theorems 17.20–17.21, pp.449–451; the two-component overlap map is calculated explicitly.

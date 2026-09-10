---
id: "ex-an-explicit-mayer-vietoris-connecting-form-on-the-circle"
kind: "example"
title: "An explicit mayer vietoris connecting form on the circle"
deps: ["prop-explicit-de-rham-mayer-vietoris-connecting-class", "thm-zero-th-de-rham-cohomology-is-locally-constant-functions", "thm-mayer-vietoris-sequence-in-de-rham-cohomology"]
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

Under countable choice the circle Mayer–Vietoris connector has a nonzero representative obtained from a locally constant overlap function.

## Facts & Assumptions

**Given:** Assume countable choice. Let $U,V$ be complements of opposite circle points, let $U\cap V=W_0\sqcup W_1$, and let $\omega$ equal $0$ on $W_0$ and $1$ on $W_1$.

[F1] [[prop-explicit-de-rham-mayer-vietoris-connecting-class]]: Under countable choice, for a closed $k$-form $\omega$ on $U\cap V$, $\delta[\omega]=[\eta]$, where $\eta|_U=d(-\rho_V\omega)$ and $\eta|_V=d(\rho_U\omega)$, with products smoothly extended by zero as in the lift construction. This class is independent of partition, lift and representative.

[F2] [[thm-zero-th-de-rham-cohomology-is-locally-constant-functions]]: $H^0_{\mathrm{dR}}(M)$ is the algebra of locally constant real functions. For nonempty connected $M$ it is canonically $\mathbb R$.

[F3] [[thm-mayer-vietoris-sequence-in-de-rham-cohomology]]: Under countable choice the de Rham Mayer–Vietoris sequence is exact: $\cdots\to H^k(M)\xrightarrow{r^*}H^k(U)\oplus H^k(V)\xrightarrow{s^*}H^k(U\cap V)\xrightarrow\delta H^{k+1}(M)\to\cdots$, beginning with $0\to H^0(M)$.

## Verification

**Proof technique:** direct.

1.1 Take a subordinate partition $\rho_U+\rho_V=1$. The local forms $\eta|_U=d(-\rho_V\omega)$ and $\eta|_V=d(\rho_U\omega)$ glue by the connector formula. Explicitly $\eta=0$ on $W_0$ and $\eta=d\rho_U=-d\rho_V$ on $W_1$, with the prescribed smooth zero extensions at the removed points. Thus $[\eta]=\delta[(0,1)]$. [F1, given]

2.1 The degree-zero groups on $U,V$ are constants, whose difference on the two overlap components is $(b-a,b-a)$. The vector $(0,1)$ is not diagonal, since equality to $(c,c)$ would require $c=0$ and $c=1$. Exactness of the Mayer–Vietoris sequence defining this connector therefore gives $\delta[(0,1)]\ne0$. [F2, F3, step 1.1] ∎

## Source locator

Lee, Theorem 17.20, pp.449–450, proof pp.462–463; the sign here is second restriction minus first, and the connecting representative is calculated with that convention.

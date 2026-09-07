---
id: "ex-derived-tensor-of-two-cyclic-abelian-groups"
kind: "example"
deps: ["def-derived-tensor-product-in-the-bounded-above-setting", "prop-homology-of-the-derived-tensor-product-is-tor"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.6.1–10.6.4 and Exercise 10.6.1, p. 395; elementary finite-diagonal replacement for spectral sequence proof"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

For $m,n>0$, $\mathbb Z/m\otimes_{\mathbb Z}^{\mathbf L}\mathbb Z/n$ is represented by $(\mathbb Z/n\xrightarrow m\mathbb Z/n)$ in degrees $-1,0$. Both $H^{-1}$ and $H^0$ are isomorphic to $\mathbb Z/\gcd(m,n)$, and all other cohomology vanishes.

## Facts & Assumptions

**Given:** For $m,n>0$, $\mathbb Z/m\otimes_{\mathbb Z}^{\mathbf L}\mathbb Z/n$ is represented by $(\mathbb Z/n\xrightarrow m\mathbb Z/n)$ in degrees $-1,0$. Both $H^{-1}$ and $H^0$ are isomorphic to $\mathbb Z/\gcd(m,n)$, and all other cohomology vanishes.

[F1] A supplied projective replacement represents the bounded derived tensor ([[def-derived-tensor-product-in-the-bounded-above-setting]]).

[F2] The degree-$-i$ cohomology of the module derived tensor is Tor$_i$ ([[prop-homology-of-the-derived-tensor-product-is-tor]]).

## Verification

1.1 Use the free resolution $(\mathbb Z\xrightarrow m\mathbb Z)\to\mathbb Z/m$ and tensor with $\mathbb Z/n$. This gives exactly the displayed two-term complex; since $m>0$ the resolution is exact at its left endpoint. Its cohomology is its kernel at $-1$ and cokernel at zero. [F1, algebra]

2.1 Put $g=\gcd(m,n)$. The cokernel is $\mathbb Z/(m\mathbb Z+n\mathbb Z)=\mathbb Z/g$. The kernel consists of the multiples of $n/g$ modulo $n$, and $\mathbb Z/g\to\ker(m)$, $\bar k\mapsto\overline{k n/g}$, is an isomorphism: $n\mid mk$ iff $n/g\mid k$. The kernel in degree $-1$ is $\operatorname{Tor}_1$, and the cokernel in degree zero is $\operatorname{Tor}_0$. If either modulus is one both groups are zero; all other degrees have zero terms. [F2, step 1.1, algebra] ∎

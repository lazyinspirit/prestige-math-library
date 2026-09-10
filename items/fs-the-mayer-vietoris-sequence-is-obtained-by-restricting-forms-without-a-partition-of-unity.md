---
id: "fs-the-mayer-vietoris-sequence-is-obtained-by-restricting-forms-without-a-partition-of-unity"
kind: "false-statement"
title: "The mayer vietoris sequence is obtained by restricting forms without a partition of unity"
deps: ["def-two-open-set-de-rham-mayer-vietoris-cochain-maps", "lem-the-de-rham-mayer-vietoris-difference-map-is-surjective"]
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

## Statement

Assume countable choice. Invalid proposed proof: restrictions alone establish full Mayer–Vietoris exactness, without a proof that the overlap difference map is surjective. In particular, extending an arbitrary overlap form unchanged to a prescribed cover member is not a valid general lift construction.

## Facts & Assumptions

**Given:** Assume countable choice. $M=\mathbb R$, $U=(-\infty,1)$, $V=(0,\infty)$, and the smooth overlap function $\omega(x)=1/x$ on $(0,1)$.

[F1] [[def-two-open-set-de-rham-mayer-vietoris-cochain-maps]]: For an open cover $M=U\cup V$, put $W=U\cap V$. The two-open-set de Rham maps are $r:\Omega^\bullet(M)\to\Omega^\bullet(U)\oplus\Omega^\bullet(V)$, $r\omega=(\omega|_U,\omega|_V)$, and $s:\Omega^\bullet(U)\oplus\Omega^\bullet(V)\to\Omega^\bullet(W)$, $s(\alpha,\beta)=\beta|_W-\alpha|_W$. The complexes are def-de-rham-cochain-complex. Restrictions are pullbacks along open inclusions, so prop-pullback-is-a-morphism-of-de-rham-complexes gives $dr=rd$ and $ds=sd$. Both maps are real linear. The middle differential acts componentwise. Empty opens have zero form spaces. The order **second minus first** fixes the sign of every connecting map below.

[F2] [[lem-the-de-rham-mayer-vietoris-difference-map-is-surjective]]: Assume countable choice. The difference map $s:\Omega^k(U)\oplus\Omega^k(V)\to\Omega^k(U\cap V)$ is surjective in every degree.

## Refutation

**Proof technique:** direct.

1.1 If $\omega$ extended unchanged to a smooth function on $U$, that extension would be continuous at $0$. But $\omega(1/n)=n$ for all integers $n>1$, while $1/n\to0$, so no continuous extension exists. Thus the naive unchanged extension recipe fails for an explicit smooth overlap form. [given, algebra]

2.1 The map $s$ requires a difference of two restricted forms, not either unchanged extension alone. The cutoff construction produces such a pair for this form (and every other form) under countable choice. Hence the actual sequence is exact, but the proposed recipe omits its essential lifting argument. This refutes that recipe, not the existence of other proofs of Mayer–Vietoris. [F1, F2, step 1.1] ∎

## Source locator

Lee, proof of Theorem 17.20, p.463, where the cutoff lift is constructed explicitly.

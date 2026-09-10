---
id: "lem-the-de-rham-mayer-vietoris-sequence-is-exact-at-the-first-two-terms"
kind: "lemma"
title: "The de rham mayer vietoris sequence is exact at the first two terms"
deps: ["def-two-open-set-de-rham-mayer-vietoris-cochain-maps", "def-smooth-differential-k-form"]
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

The sequence $0\to\Omega^k(M)\xrightarrow{r}\Omega^k(U)\oplus\Omega^k(V)\xrightarrow{s}\Omega^k(U\cap V)$ is exact at the first two nonzero terms.

## Facts & Assumptions

**Given:** An open cover $M=U\cup V$ and the maps $r,s$ just defined.

[F1] [[def-two-open-set-de-rham-mayer-vietoris-cochain-maps]]: For an open cover $M=U\cup V$, put $W=U\cap V$. The two-open-set de Rham maps are $r:\Omega^\bullet(M)\to\Omega^\bullet(U)\oplus\Omega^\bullet(V)$, $r\omega=(\omega|_U,\omega|_V)$, and $s:\Omega^\bullet(U)\oplus\Omega^\bullet(V)\to\Omega^\bullet(W)$, $s(\alpha,\beta)=\beta|_W-\alpha|_W$. The complexes are def-de-rham-cochain-complex. Restrictions are pullbacks along open inclusions, so prop-pullback-is-a-morphism-of-de-rham-complexes gives $dr=rd$ and $ds=sd$. Both maps are real linear. The middle differential acts componentwise. Empty opens have zero form spaces. The order **second minus first** fixes the sign of every connecting map below.

[F2] [[def-smooth-differential-k-form]]: Let $M$ be a smooth manifold and $k\ge 0$. A **smooth differential $k$-form** on $M$ is a smooth section of $\bigwedge^kT^*M\to M$. The space of such forms is denoted $\Omega^k(M)$, and $\Omega^0(M)=C^\infty(M)$.

## Proof

**Proof technique:** direct.

1.1 If $r\omega=0$, the form vanishes at each point because every point lies in $U$ or $V$. Thus $r$ is injective. Also $sr\omega=\omega|_{U\cap V}-\omega|_{U\cap V}=0$, so $\operatorname{im}r\subseteq\ker s$. [F1, given]

2.1 If $s(\alpha,\beta)=0$, the two forms agree on the overlap. Define $\omega_p=\alpha_p$ for $p\in U$ and $\omega_p=\beta_p$ for $p\in V$. Agreement makes this unambiguous, and near every point it equals a smooth section, so it is smooth. Then $r\omega=(\alpha,\beta)$, proving the reverse inclusion and exactness. The same definitions work for empty opens, including empty $M$. [F1, F2, step 1.1] ∎

## Source locator

Lee, Theorem 17.20, pp.449–450, and its full proof pp.462–463. This page reverses Lee’s difference convention consistently: $s(\alpha,\beta)=\beta-\alpha$.

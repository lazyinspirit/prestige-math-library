---
id: "prop-explicit-de-rham-mayer-vietoris-connecting-class"
kind: "proposition"
title: "Explicit de rham mayer vietoris connecting class"
deps: ["thm-mayer-vietoris-sequence-in-de-rham-cohomology", "lem-the-de-rham-mayer-vietoris-difference-map-is-surjective", "thm-short-exact-mayer-vietoris-sequence-of-de-rham-complexes", "prop-elementwise-formula-for-the-connecting-map-in-module-categories"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Under countable choice, let $\delta$ be the Mayer–Vietoris connecting homomorphism obtained from the short exact cochain sequence in F3 by reindexing $C_n=C^{-n}$ and using the connector convention in F4. For a closed $k$-form $\omega$ on $U\cap V$, $\delta[\omega]=[\eta]$, where $\eta|_U=d(-\rho_V\omega)$ and $\eta|_V=d(\rho_U\omega)$, with products smoothly extended by zero as in the lift construction. This class is independent of partition, lift and representative.

## Facts & Assumptions

**Given:** Assume countable choice. A closed overlap form $\omega$ and the partition lift $(\alpha,\beta)=(-\rho_V\omega,\rho_U\omega)$.

[F1] [[thm-mayer-vietoris-sequence-in-de-rham-cohomology]]: Under countable choice the de Rham Mayer–Vietoris sequence is exact: $\cdots\to H^k(M)\xrightarrow{r^*}H^k(U)\oplus H^k(V)\xrightarrow{s^*}H^k(U\cap V)\xrightarrow\delta H^{k+1}(M)\to\cdots$, beginning with $0\to H^0(M)$. Its proof obtains this $\delta$ by applying the long exact sequence theorem to the short exact de Rham cochain sequence in F3, with no additional differential sign.

[F2] [[lem-the-de-rham-mayer-vietoris-difference-map-is-surjective]]: Assume countable choice. The difference map $s:\Omega^k(U)\oplus\Omega^k(V)\to\Omega^k(U\cap V)$ is surjective in every degree.

[F3] [[thm-short-exact-mayer-vietoris-sequence-of-de-rham-complexes]]: Under countable choice, $0\to\Omega^\bullet(M)\xrightarrow r\Omega^\bullet(U)\oplus\Omega^\bullet(V)\xrightarrow s\Omega^\bullet(U\cap V)\to0$ is short exact as a sequence of real cochain complexes, with $s(\alpha,\beta)=\beta-\alpha$.

[F4] [[prop-elementwise-formula-for-the-connecting-map-in-module-categories]]: Let $R$ be a ring and let $$0\to A_\bullet\xrightarrow{i}B_\bullet\xrightarrow{p}C_\bullet\to0$$ be a short exact sequence of chain complexes of left $R$-modules. If $[c]\in H_n(C)$ is represented by a cycle $c\in C_n$, choose a lift $b\in B_n$ with $p_n(b)=c$, and let $a\in A_{n-1}$ be the unique element satisfying $$i_{n-1}(a)=d_n^B(b).$$ Then $$\partial_n([c])=[a]\in H_{n-1}(A).$$ This class is independent of the chosen lift $b$ and of the chosen cycle representative $c$.

## Proof

**Proof technique:** direct.

1.1 On the overlap, $d\beta-d\alpha=d(\beta-\alpha)=d\omega=0$. Thus the two smooth forms $d\alpha,d\beta$ glue to $\eta$. On each open $d\eta=d^2\alpha$ or $d^2\beta$, hence is zero. The graded product rule also gives $\eta|_{U\cap V}=d\rho_U\wedge\omega=-d\rho_V\wedge\omega$, fixing the sign. [F2, F3, given]

2.1 Reindex the short exact sequence F3 as chain complexes with $C_n=C^{-n}$. By F1 its connecting homomorphism is the displayed $\delta$, with no added sign. The lift $(\alpha,\beta)$ in degree $-k$ has differential $r\eta$ in degree $-k-1$, so F4 gives $\delta[\omega]=[\eta]$ in $H^{k+1}(M)$. Its independence of lift and cycle representative applies over the ring $\mathbb R$; any other partition supplies another lift, so partition independence follows too. [F1, F3, F4, step 1.1] ∎

## Source locator

Lee, Theorem 17.20, pp.449–450, and its full proof pp.462–463. This page reverses Lee’s difference convention consistently: $s(\alpha,\beta)=\beta-\alpha$.

---
id: "lem-the-de-rham-mayer-vietoris-difference-map-is-surjective"
kind: "lemma"
title: "The de rham mayer vietoris difference map is surjective"
deps: ["def-two-open-set-de-rham-mayer-vietoris-cochain-maps", "thm-smooth-partitions-of-unity-exist-on-manifolds", "def-countable-choice"]
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

Assume countable choice. The difference map $s:\Omega^k(U)\oplus\Omega^k(V)\to\Omega^k(U\cap V)$ is surjective in every degree.

## Facts & Assumptions

**Given:** An open cover $M=U\cup V$, a smooth form $\omega$ on $U\cap V$, and countable choice.

[F1] [[def-two-open-set-de-rham-mayer-vietoris-cochain-maps]]: For an open cover $M=U\cup V$, put $W=U\cap V$. The two-open-set de Rham maps are $r:\Omega^\bullet(M)\to\Omega^\bullet(U)\oplus\Omega^\bullet(V)$, $r\omega=(\omega|_U,\omega|_V)$, and $s:\Omega^\bullet(U)\oplus\Omega^\bullet(V)\to\Omega^\bullet(W)$, $s(\alpha,\beta)=\beta|_W-\alpha|_W$. The complexes are def-de-rham-cochain-complex. Restrictions are pullbacks along open inclusions, so prop-pullback-is-a-morphism-of-de-rham-complexes gives $dr=rd$ and $ds=sd$. Both maps are real linear. The middle differential acts componentwise. Empty opens have zero form spaces. The order **second minus first** fixes the sign of every connecting map below.

[F2] [[thm-smooth-partitions-of-unity-exist-on-manifolds]]: Every open cover of a smooth manifold admits a smooth partition of unity subordinate to it.

[F3] [[def-countable-choice]]: The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by > $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that > $f(n) \in X_n$ for every $n \in \mathbb{N}$. Equivalently, in the vocabulary of def-choice-function: every at most countable family of nonempty sets (def-countable) has a choice function.

## Proof

**Proof technique:** direct.

1.1 The partition construction supplies a locally finite family $(\phi_i)$ with nonnegative smooth terms summing to one and each closed support contained in $U$ or $V$. Its countable-choice implementation uses all admissible coordinate-ball tuples; a fixed countable basis and countable choice select covering tuple representatives. For unions $H_r$ of their first $r$ compact closures, take least larger indices giving $H_r\subseteq\operatorname{int}H_{r\prime}$. For the resulting exhaustion $K_m$, the compact annulus $K_m\setminus\operatorname{int}K_{m-1}$ has a finite covering list of nested chart pairs inside selected balls and inside $\operatorname{int}K_{m+1}\setminus K_{m-2}$. Countable choice selects these finite lists and their countably many bumps. The annulus separation makes their supports locally finite, and division by their positive smooth sum gives $(\phi_i)$. All eligible tuples are formed before selection; least-index recursion uses no dependent choice. [F2, F3, given]

2.1 Assign $i$ to $U$ if $\operatorname{supp}\phi_i\subseteq U$, and to $V$ otherwise. Set $\rho_U=\sum_{i\text{ assigned to }U}\phi_i$ and $\rho_V=\sum_{i\text{ assigned to }V}\phi_i$. Locally these are finite smooth sums and they sum to one. Each grouped union of closed supports is closed by local finiteness and lies in its assigned open, so $\operatorname{supp}\rho_U\subseteq U$ and $\operatorname{supp}\rho_V\subseteq V$. [step 1.1]

3.1 Define $\alpha=-\rho_V\omega$ on $U\cap V$ and zero on $U\setminus\operatorname{supp}\rho_V$. These two open sets cover $U$, and the expressions agree where they overlap; hence $\alpha$ is a smooth form on $U$. Similarly $\beta=\rho_U\omega$ on the overlap and zero on $V\setminus\operatorname{supp}\rho_U$ is smooth on $V$. On the overlap, $\beta-\alpha=(\rho_U+\rho_V)\omega=\omega$, proving surjectivity. Empty overlap or out-of-range degree has only $\omega=0$, lifted by $(0,0)$; empty $M$ uses the empty family. [F1, step 2.1] ∎

## Source locator

Lee, Theorem 17.20, pp.449–450, and its full proof pp.462–463. This page reverses Lee’s difference convention consistently: $s(\alpha,\beta)=\beta-\alpha$.

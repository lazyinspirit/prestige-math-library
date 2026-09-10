---
id: thm-pcf-aleph-omega-plus-one-scale
kind: theorem
title: An aleph omega plus one scale on an infinite set of successor alephs
status: draft
origin: pipeline
deps: [lem-eventual-products-below-aleph-omega-have-a-continuous-long-chain, lem-strong-increase-gives-bounding-projections, lem-bounding-projections-give-exact-upper-bounds, def-reduced-ordinal-products-and-scales, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Abraham and Magidor, Cardinal Arithmetic, Lemma 2.3 pp. 12–13 and Exercise 2.25/Theorem 2.26 p. 25"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. There is an infinite $B\subseteq\omega\setminus\{0,1\}$ and a sequence $(s_\alpha)_{\alpha<\aleph_{\omega+1}}$ in $\prod_{n\in B}\aleph_n$ which is strictly increasing and cofinal modulo finite sets. In particular the true cofinality of this reduced product is $\aleph_{\omega+1}$. The assertion chooses an infinite coordinate subset; it does not assert the same cofinality on the full sequence of successor alephs.

## Facts & Assumptions

**Given:** AC. Put $N=\omega\setminus\{0,1\}$, $\mu=\aleph_\omega$ and $\lambda=\aleph_{\omega+1}$.

[F1] There is a strict eventual $\lambda$-chain in $\prod_{n\in N}\aleph_n$ satisfying $(*)_\kappa$ for every uncountable regular $\kappa<\mu$ ([[lem-eventual-products-below-aleph-omega-have-a-continuous-long-chain]]).

[F2] On countably many coordinates, $(*)_\kappa$ for uncountable regular $\kappa$ gives the $\kappa$ bounding-projection property ([[lem-strong-increase-gives-bounding-projections]]).

[F3] The $\aleph_1$ projection property and regular length greater than $\aleph_1$ give an exact least bound with positive limit values. Additional projection properties force corresponding eventual lower bounds on coordinate cofinalities; exactness restricts to positive supports ([[lem-bounding-projections-give-exact-upper-bounds]]).

[F4] Cofinality of a limit ordinal is regular and has an increasing cofinal enumeration; fewer than a regular cardinal's many ordinals below it are bounded ([[thm-cofinality-basics]], (c)–(d)).

[F5] Successor alephs are regular under AC, including $\lambda$, and the infinite cardinals below $\aleph_\omega$ are the finite-index alephs ([[thm-regularity-of-the-alephs]]).

[F6] A specified transfinite recursion determines its sequence ([[thm-transfinite-recursion]]).

[F7] A scale is a strict cofinal chain of regular length under the ideal comparisons ([[def-reduced-ordinal-products-and-scales]]).

[A1] AC supplies simultaneous cofinal enumerations and choices of witnesses in set-sized products ([[def-axiom-of-choice]]).

## Proof

1.1 We first give the cofinal-suborder transfer used below. Suppose an eventual-comparison product $P$ has a strict cofinal regular $\lambda$-chain $(p_\xi)_{\xi<\lambda}$, and $j:Q\to P$ preserves and reflects weak and strict comparisons and has a cofinal image. Every family of fewer than $\lambda$ elements in $P$ has a strict bound: choose for each member a weakly dominating chain term, bound these indices below $\lambda$ by F4 and take a later term. To build a chain in $j[Q]$, recurse through $\eta<\lambda$, strictly bounding all earlier chosen image elements together with $p_\eta$ by this rule, then choosing an image element weakly above that strict bound. A1 fixes a choice function on the nonempty witness subsets before the F6 recursion. The new image element strictly exceeds every predecessor and $p_\eta$; hence the image chain is strict and cofinal in $P$, and reflection makes its preimage a strict cofinal chain in $Q$. No cofinal family of size less than $\lambda$ exists in either order: in $P$ the strict bound just constructed contradicts cofinality, and a cofinal family in $Q$ would map to one in $P$. Thus this procedure transfers precisely the regular true cofinality $\lambda$. It uses no assertion that a ceiling map preserves strict inequalities. [F4, F6, F7, A1]

1.2 Take the chain $f$ from F1. F2 gives all its uncountable regular projection properties below $\mu$, in particular at $\aleph_1$. By F5, $\lambda$ is regular and greater than $\aleph_1$, so F3 gives an exact least bound $v$ with positive limit values. The function $a(n)=\aleph_n$ is a pointwise bound; leastness gives $v\le^*a$. Set $h(n)=\min\{v(n),a(n)\}$, so $h=^*v$ and $h$ remains positive and limit-valued everywhere. Exactness and all eventual coordinate-cofinality conclusions are unchanged. Apply the $\aleph_2$ conclusion and discard its finite exceptional set, leaving infinite $N'\subseteq N$, with $c(n)=\operatorname{cf}(h(n))\ge\aleph_2>\aleph_1$ for every $n\in N'$. For all these coordinates $c(n)\le\aleph_n<\mu$: a cofinal subset of $h(n)\le\aleph_n$ has size at most $\aleph_n$. Further, for each finite $k$, the $\aleph_{k+1}$ cofinality bound holds outside a finite set (using $\aleph_1$ when $k=0$). Hence $c(n)>\aleph_k$ eventually. In particular $c$ tends to $\mu$ in the sense of eventually exceeding every smaller cardinal. Restriction to $N'$ preserves exactness by F3. [F1, F2, F3, F4, F5]

2.1 Every $f_\xi<^*h$, since $f_\xi<^*f_{\xi+1}\le^*h$. After restriction to $N'$, reset its finitely many failure coordinates to zero to obtain $\tilde f_\xi\in\prod_{n\in N'}h(n)$. These resets preserve strict comparisons. Given $g$ in that product, exactness gives $g<^*f_\xi=^*\tilde f_\xi$ for some $\xi$, so the reset chain is cofinal. By F4 and A1 choose increasing cofinal maps $e_n:c(n)\to h(n)$. The map $E(t)(n)=e_n(t(n))$ from $\prod c(n)$ into $\prod h(n)$ preserves and reflects pointwise comparisons at every coordinate, hence also eventual weak and strict comparisons. Its image is cofinal: for each $g$ take the least $\gamma_n<c(n)$ with $g(n)\le e_n(\gamma_n)$, which exists by cofinality. Apply step 1.1 to obtain true cofinality $\lambda$ on $\prod c(n)$ modulo finite sets. [step 1.1, step 1.2, F4, F7, A1]

2.2 Put $D=\operatorname{ran}(c\restriction N')$. Each $d\in D$ is a regular cardinal by F4, at least $\aleph_2$ and less than $\mu$. Each fiber $\{n:c(n)=d\}$ is finite: choose finite $k$ with $d\le\aleph_k$; step 1.2 gives $c(n)>\aleph_k$ outside a finite set. Consequently the preimage of a finite subset of $D$ is finite. Conversely if $E\subseteq D$ is infinite, its preimage is infinite, because the image of a finite set cannot be infinite and $c$ is onto $D$. For $u\in\prod_{d\in D}d$, define $R(u)(n)=u(c(n))$. Its comparison failure sets are exactly the preimages of those on $D$; thus $R$ preserves and reflects eventual weak and strict comparisons. Its image is cofinal: for $t\in\prod c(n)$ put

$$T(d)=\sup\{t(n)+1:n\in N',\ c(n)=d\}.$$

Every fiber is nonempty and finite, and its values are below the infinite cardinal $d$, so $T(d)<d$ and $t(n)<T(c(n))$ at each coordinate. Thus $T\in\prod D$ and $t<R(T)$ pointwise. Finally $D$ is unbounded in $\mu$ by step 1.2, so it is infinite. [step 1.2, F4, F5]

3.1 Apply the transfer of step 1.1 to the cofinal embedding $R$ of step 2.2 and the strict cofinal chain of step 2.1. This gives a scale of length $\lambda$ on $\prod D$ modulo finite sets, with no shorter cofinal family. Each $d\in D$ is a unique $\aleph_k$ with finite $k\ge2$, by F5 and the bound $\aleph_2\le d<\mu$. Set $B=\{k\ge2:\aleph_k\in D\}$. The bijection $k\mapsto\aleph_k$ from infinite $B$ to $D$ carries finite sets to finite sets in both directions and carries product functions to product functions. Reindexing the scale therefore preserves its strict comparisons and cofinality, giving the stated sequence $(s_\alpha)_{\alpha<\aleph_{\omega+1}}$ on $B$. This proves the assertion, including its true cofinality claim. QED. [step 1.1, step 1.2, step 2.1, step 2.2, F5, F7]

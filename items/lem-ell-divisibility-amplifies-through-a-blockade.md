---
id: lem-ell-divisibility-amplifies-through-a-blockade
kind: lemma
title: "Ell divisibility amplifies through a blockade"
status: draft
origin: pipeline
deps: [lem-special-copy-trichotomy-produces-a-restricted-blockade, def-subreciprocal-function-and-ell-divisibility, lem-subreciprocal-functions-close-under-the-density-recursion, def-qid-finite-density-recursion-profile, lem-qid-bipartite-density-trimming, lem-qid-fixed-size-density-selection, thm-two-element-subsets-count, def-induced-copy-number, lem-integer-part]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "5.2 claim (1)"
proof_strategy: direct
---

## Statement

Let $\ell$ be subreciprocal and let the nonempty finite graph $H$ be $\ell$-divisive with witnesses $0<c<1/2$, $d>1$. Write $h=|H|$. Put $z=\ell(c)^{-1/2}$, $b=2-\log_2(1-z)$, and for $0<\epsilon<c$ put $x=2^{1-b}\epsilon$, $p=z\ell(x)$, $\eta=x^d/4$, $t=-\lfloor-2\log_2(1/\epsilon)/\log_2p\rfloor$ and $\delta=2^{-20bd\log_2(1/\epsilon)^2/\log_2\ell(\epsilon)}$. Fix a nonempty finite $G$ with $n=|G|$, $\operatorname{ind}_H(G)\leq(\delta n)^h$ and $\delta n>1$. Let $\beta_r$ be its finite density profile with parameter $\eta$. For $1\leq s\leq t$ and $u,v\geq\epsilon$,
$$\beta_{s-1}(u,v)\geq\eta\min\{\beta_s(pu,v),\beta_s(u,pv)\}.$$

## Facts & Assumptions

**Given:** All parameters and the fixed host $G$ as in the statement, including $\delta|G|>1$, the non-strict copy bound, $1\leq s\leq t$, and $u,v\geq\epsilon$.

[F1] For the stated $\ell,c,d,\epsilon$, the parameters satisfy $0<x<\epsilon<c$, $0<\eta<1$, $p>1$, $p^2\geq\ell(x)$, and $\delta<x^d\eta^t$; $t$ is the least natural with $p^t\geq\epsilon^{-2}$. ([[lem-subreciprocal-functions-close-under-the-density-recursion]]).

[F2] From [[def-subreciprocal-function-and-ell-divisibility]]: A nonempty finite graph $H$ is $\ell$-divisive if there are witnesses $0<c<1/2$ and $d>1$ such that for every $0<x<c$ and every nonempty finite graph $G$, the inequality $\operatorname{ind}_H(G)\leq x^d|G|^{|H|}$ implies a QID block sequence of length at least $\ell(x)$, width at least $\lfloor x^d|G|\rfloor$, uniformly $x$-sparse in one of $G,\overline G$.

[F3] From [[def-qid-finite-density-recursion-profile]]: Every qualifying induced $F$ therefore has a nonempty $T$ with $|T|\geq\beta_s(a,b)|F|$ and $e(F[T])\leq a\binom{|T|}{2}$ or $e(\overline F[T])\leq b\binom{|T|}{2}$: choose a maximizing set for $\rho_F$.

[F4] From [[lem-qid-bipartite-density-trimming]]: If $e_G(A,B)\leq c|A||B|$, then some $A^{\prime}\subseteq A$ with $|A^{\prime}|\geq|A|/2$ has $|N_G(v)\cap B|\leq2c|B|$ for every $v\in A^{\prime}$.

[F5] From [[lem-qid-fixed-size-density-selection]]: Independently, if $2\leq m\leq N$, some $m$-subset $C\subseteq A$ satisfies $e(G[C])/\binom m2\leq e(G[A])/\binom N2$. For $m=1$ the internal edge count is zero.

[F6] For every real $y$, its unique integer part satisfies $\lfloor y\rfloor\leq y<\lfloor y\rfloor+1$. ([[lem-integer-part]]).

[F7] For every natural $n$, $\binom n2=n(n-1)/2$ when the natural numbers are viewed in the real field. ([[thm-two-element-subsets-count]]).

## Proof

1.1 Set $\gamma_1=\beta_s(pu,v)$, $\gamma_2=\beta_s(u,pv)$ and $\gamma=\min(\gamma_1,\gamma_2)>0$. Take any induced $F$ with $N=|F|\geq\eta^{s-1}n$. From [F1] and $\delta n>1$ we have $n>\delta^{-1}>\eta^{-t}$, so $N>\eta^{s-1-t}\geq\eta^{-1}$. Embeddings in $F$ inject into those in $G$ by inclusion. Hence $\operatorname{ind}_H(F)\leq(\delta n)^h\leq(\delta\eta^{-(s-1)}N)^h\leq(x^dN)^h\leq x^dN^h$, using $\delta<x^d\eta^t$, $s\leq t$, $h\geq1$, and $0<x<1$. [F1, given]

2.1 Now $0<x<c$, so [F2] gives a uniform sequence $(B_1,\ldots,B_k)$ in $F$ or $\overline F$ with $k\geq\ell(x)$ and $|B_i|\geq\lfloor x^dN\rfloor=\lfloor4\eta N\rfloor\geq2\eta N$. For the last bound, [F6] gives $\lfloor4\eta N\rfloor>4\eta N-1\geq2\eta N$ since $\eta N>1$. All blocks are therefore nonempty. [F2, F6, step 1.1]

3.1 First suppose the sequence is $x$-sparse in $F$. Set $m=-\lfloor-\eta\gamma_1 N\rfloor$. By [F6], $\eta\gamma_1N\leq m<\eta\gamma_1N+1$ and $m\geq1$. Process blocks from $k$ down to $1$. At step $i$, let $D_i$ be the union of the already selected, pairwise disjoint $m$-sets $C_j$ with $j>i$. Because $D_i$ is $x$-sparse to $B_i$, $e_F(B_i,D_i)\leq x|B_i||D_i|$. Applying [F4] in the direction from $B_i$ to $D_i$ gives $B_i^{\prime}\subseteq B_i$ with $|B_i^{\prime}|\geq|B_i|/2\geq\eta N\geq\eta^s n$ and degrees into $D_i$ at most $2x|D_i|$. If the tail is empty, take $B_i^{\prime}=B_i$, so the construction starts. [F4, F6, step 2.1]

4.1 Apply [F3] inside $F[B_i^{\prime}]$ with thresholds $(pu,v)$. It yields a nonempty $E_i$ of size at least $\gamma_1|B_i^{\prime}|\geq\eta\gamma_1N$. If $e(\overline F[E_i])\leq v\binom{|E_i|}{2}$, take $T=E_i$: its size is already at least $\eta\gamma N$. Otherwise $e(F[E_i])\leq pu\binom{|E_i|}{2}$. The integer $|E_i|$ is at least the least integer $m$ above $\eta\gamma_1N$, so [F5] gives an exact $m$-subset $C_i$ with $e(F[C_i])\leq pu\binom m2$. For $m=1$ use its zero edge count. As $C_i\subseteq B_i^{\prime}$, the degree bound into the already fixed tail is preserved. [F3, F5, step 3.1]

5.1 If the construction finishes without a complementary-density set, put $T=\bigcup_i C_i$. Then $|T|=km\geq\eta\gamma N$. The internal edges total at most $kpu\binom m2$. Each edge between blocks has a unique earlier endpoint block; summing $e(C_i,D_i)\leq2x m^2(k-i)$ gives at most $2xm^2\binom k2$ cross edges. Since $p/k\leq z$ and $2x=(1-z)\epsilon\leq(1-z)u$, the total is at most $u[z k^2\binom m2+(1-z)m^2\binom k2]$. [step 2.1, step 4.1, algebra]

6.1 By [F7], $\binom{km}{2}-k^2\binom m2=km(k-1)/2\geq0$ and $\binom{km}{2}-m^2\binom k2=km(m-1)/2\geq0$. Taking their convex combination with weights $z,1-z$ proves $e(F[T])\leq u\binom{|T|}{2}$. These identities are valid at $m=1$ too, so no density quotient by zero was used. [F7, step 5.1, algebra]

7.1 If the sequence supplied in step 2.1 is sparse in $\overline F$, run the same selection with degrees counted in $\overline F$, using $\gamma_2$ and $m=-\lfloor-\eta\gamma_2N\rfloor$. Apply [F3] with the original thresholds $(u,pv)$ in each $F[B_i^{\prime}]$. A low-density set in $F$ finishes immediately; otherwise the chosen set has complementary edge bound $pv$, to which [F5] in $\overline F$ applies. The calculation of steps 5.1 and 6.1, with $v$ replacing $u$, bounds complementary edges by $v\binom{|T|}{2}$. This uses the already obtained sequence; it never assumes $\overline F$ is $H$-free or satisfies an $H$-copy bound. [F3, F5, F6, step 2.1, step 3.1, step 6.1]

8.1 Thus every induced $F$ at cutoff $\eta^{s-1}n$ has a nonempty qualifying $T$ of relative size at least $\eta\gamma$. Taking the minimum of $\rho_F(u,v)$ over that family, as in [F3], gives $\beta_{s-1}(u,v)\geq\eta\gamma$, the asserted recurrence. [F3, step 4.1, step 6.1, step 7.1] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 5.2 claim (1).

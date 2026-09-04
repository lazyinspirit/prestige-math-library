---
id: thm-sheaves-as-local-homeomorphisms
kind: theorem
title: "Sheaves of sets are equivalent to local homeomorphisms over the base space"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-etale-space-of-sheaf-of-sets, def-sheaf-on-topological-space, def-morphism-of-presheaves]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Sections 17 and 21"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 3"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
---

## Statement

Let $X$ be a topological space.
A continuous map $q:E\to X$ is called a **local homeomorphism** if every
point $e\in E$ has an open neighbourhood $W$ such that $q(W)$ is open in $X$
and $q|_W:W\to q(W)$ is a homeomorphism.

1. For every sheaf of sets $\mathcal F$ on $X$, the projection
   $p:E(\mathcal F)\to X$ of [[def-etale-space-of-sheaf-of-sets]] is a local
   homeomorphism.
2. For every local homeomorphism $q:E\to X$, the assignment
   $$U\longmapsto\{\,\sigma:U\to E\text{ continuous} : q\circ\sigma=\operatorname{id}_U\,\}$$
   is a sheaf of sets on $X$.
3. These two constructions are inverse up to natural isomorphism, so they give
   an equivalence between sheaves of sets on $X$ and spaces over $X$ whose
   structure map is a local homeomorphism.

## Facts & Assumptions

**Given:** A sheaf $\mathcal F$ on $X$, or a local homeomorphism $q:E\to X$.

[F1] The etale space $E(\mathcal F)$ is the disjoint union of the stalks with basic open sets $[s,U]$, and $p:[s,U]\to U$ is a bijection ([[def-etale-space-of-sheaf-of-sets]]).

[L1] A sheaf is glued uniquely from compatible local sections on any open cover ([[def-sheaf-on-topological-space]]).

[F2] Morphisms of presheaves are given by restriction-compatible component maps ([[def-morphism-of-presheaves]]).

## Proof

**Proof technique:** direct.

1.1 For a sheaf $\mathcal F$, let $p:E(\mathcal F)\to X$ be as in [F1]. If $\xi=s_x\in E(\mathcal F)$, then $\xi\in[s,U]$ for some section $s\in\mathcal F(U)$. By construction $p:[s,U]\to U$ is bijective. Its inverse $x'\mapsto s_{x'}$ is continuous because for any smaller basic open $[t,V]\subseteq[s,U]$, the preimage is the open set $\{x'\in U\cap V:s_{x'}=t_{x'}\}$, which is open by the sheaf locality encoded in [L1]. Hence $p|_{[s,U]}$ is a homeomorphism onto the open set $U$. Since every point of $E(\mathcal F)$ lies in some $[s,U]$, $p$ is a local homeomorphism. [F1, L1]

1.2 Let $q:E\to X$ be a local homeomorphism, and let $\operatorname{Sec}_q(U)$ denote its continuous sections over an open set $U$. Restriction of a section is again a section, so $\operatorname{Sec}_q$ is a presheaf. If two sections of $\operatorname{Sec}_q(U)$ agree on an open cover, they are equal pointwise, so locality holds. If $\sigma_i\in\operatorname{Sec}_q(U_i)$ are compatible on an open cover $U=\bigcup_iU_i$, define $\sigma(x)=\sigma_i(x)$ for $x\in U_i$. Compatibility makes this well defined, and continuity is local on the cover because each $\sigma_i$ is continuous. Thus [L1] holds, so $\operatorname{Sec}_q$ is a sheaf. [L1, given]

1.3 A sheaf morphism $\varphi:\mathcal F\to\mathcal G$ induces a map over $X$ $$E(\varphi):E(\mathcal F)\longrightarrow E(\mathcal G),\qquad s_x\longmapsto(\varphi_U(s))_x.$$ This is well defined by restriction compatibility. It is continuous: if $E(\varphi)(s_x)$ lies in a basic open $[t,V]$, equality of the two germs lets us shrink to an open $W\subseteq U\cap V$ on which $\varphi_U(s)|_W=t|_W$; then $[s|_W,W]$ is a neighbourhood of $s_x$ mapped into $[t,V]$. Identities and compositions are preserved. Conversely, a map $f:E\to E'$ over $X$ between local homeomorphisms sends a section $\sigma$ to $f\circ\sigma$, naturally in the open set, and hence induces a sheaf morphism $\operatorname{Sec}(f)$. [F1, F2, given]

2.1 For a sheaf $\mathcal F$ and an open set $U$, send $s\in\mathcal F(U)$ to the section $$\theta_U(s):U\longrightarrow E(\mathcal F),\qquad \theta_U(s)(x)=s_x.$$ By step 1.1 this is continuous. If $\theta_U(s)=\theta_U(t)$, then $s_x=t_x$ for all $x\in U$, so [L1] gives $s=t$. Conversely, let $\sigma:U\to E(\mathcal F)$ be a continuous section. For each $x\in U$, choose a basic open $[s_x,V_x]$ containing $\sigma(x)$. Continuity makes $$W_x:=U\cap V_x\cap\sigma^{-1}([s_x,V_x])$$ an open neighbourhood of $x$. Since $p$ is injective on $[s_x,V_x]$ and $p\circ\sigma=\operatorname{id}_U$, the restriction $\sigma|_{W_x}$ equals $y\mapsto(s_x)_y$. These local sections agree on overlaps because they induce the same map $\sigma$. By [L1], they glue to a unique $s\in\mathcal F(U)$ with $\theta_U(s)=\sigma$. Thus $\theta_U$ is a bijection, natural in $U$. [F1, L1, step 1.1]

3.1 For a local homeomorphism $q:E\to X$, define $$\eta:E\longrightarrow E(\operatorname{Sec}_q)$$ by sending $e\in E$ to the germ at $x=q(e)$ of any local section through $e$. Such a local section exists because $q$ is a local homeomorphism, and two choices have the same germ because on a smaller common chart they are both the inverse of $q$. On a chart $W\xrightarrow{\sim}q(W)$, the map $\eta$ is a homeomorphism from $W$ onto the basic open defined by the inverse section. Hence $\eta$ is an isomorphism over $X$. The formula $E(\varphi)(s_x)=(\varphi_U(s))_x$ makes the bijections $\theta$ of step 2.1 natural in $\mathcal F$, while the formula $\eta(f(e))=(f\circ\sigma)_x$ makes $\eta$ natural in $E$. Thus the two functors constructed in steps 1.2 and 1.3 are quasi-inverse equivalences. [step 1.1, step 1.2, step 2.1, step 1.3] ∎

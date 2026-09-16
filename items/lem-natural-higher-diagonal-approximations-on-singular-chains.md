---
id: lem-natural-higher-diagonal-approximations-on-singular-chains
kind: lemma
title: Natural higher diagonal approximations
status: published
origin: pipeline
deps: ["def-alexander-whitney-diagonal-approximation", "thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Mosher and Tangora, Cohomology Operations and Applications
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/moshtang.pdf
      locator: Chapter 2, Acyclic Carrier Theorem and cup-i construction, printed pages 14--16
---

## Statement

Work over $\mathbb F_2$. For every space $X$ there are natural maps of degree
$i$

$$
D_i^X\colon C_n(X)\longrightarrow (C_*(X)\otimes C_*(X))_{n+i}\qquad(i\geq0)
$$

such that $D_0$ is the Alexander--Whitney diagonal, and, with
$T(a\otimes b)=b\otimes a$ and $D_{-1}=0$,

$$
dD_i+D_i d=(1+T)D_{i-1}.
$$

If $A\subseteq X$, then $D_i(C_*(A))\subseteq C_*(A)\otimes C_*(A)$.
Moreover, two such carried systems with the same $D_0$ are coherently
homotopic: there are natural degree-$(i+1)$ maps $K_i$, with $K_{-1}=0$, for
which

$$
D_i-D_i'=dK_i+K_i d+(1+T)K_{i-1}.
$$

## Facts & Assumptions

**Given:** Ordinary unnormalized singular chains over $\mathbb F_2$.

[F1] The Alexander--Whitney diagonal is a natural chain map, is finite on each generator, and requires no chosen filling ([[def-alexander-whitney-diagonal-approximation]]).

[F2] Alexander--Whitney and the signed shuffle are natural augmentation- preserving chain-homotopy inverses, without AC ([[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]]).

## Proof

**Proof technique:** induction on the resolution degree and simplex dimension.

1.1 Fix an explicit contraction on every standard diagonal carrier. The straight-line contraction of $\Delta^n\times\Delta^n$ to $(v_0,v_0)$ has the standard finite singular-prism chain homotopy $s_n$. Transport $s_n$ through the specified shuffle and Alexander--Whitney maps and add the specified homotopy from their composite to the identity. This gives a fixed map $h_n$ on $C_*(\Delta^n)\otimes C_*(\Delta^n)$ satisfying [F2]

$$ dh_n+h_nd=1-\eta\epsilon, $$

where $\eta\epsilon$ projects to the tensor of the distinguished vertex. Every map in this formula is an explicit finite sum, so choosing all $h_n$ uses no choice principle.

2.1 Construct $D_i$ recursively. Let $W$ be the free $\mathbb F_2[C_2]$-resolution with one generator $e_i$ in each degree and $de_i=(1+T)e_{i-1}$ for $i>0$. Put $D_0=\operatorname{AW}\Delta_{\#}$ as in [F1]. Suppose lexicographically that $D_i$ is known on lower-dimensional simplices and that $D_{i-1}$ is known. For the identity simplex $\iota_n$ set [F1, step 1.1]

$$ z_{i,n}:=D_i(d\iota_n)+(1+T)D_{i-1}(\iota_n). $$

The earlier recursion gives $dz_{i,n}=0$: the two copies of $(1+T)D_{i-1}(d\iota_n)$ cancel and $(1+T)^2=0$ over $\mathbb F_2$. Its positive-degree augmentation is zero, so step 1.1 gives $d(h_nz_{i,n})=z_{i,n}$. Define $D_i(\iota_n)=h_nz_{i,n}$ and, for a singular simplex $\sigma\colon\Delta^n\to X$, define $D_i^X(\sigma)=(\sigma_{\#}\otimes\sigma_{\#})D_i(\iota_n)$. The equation $dD_i+D_id=(1+T)D_{i-1}$ now holds on each generator and hence on all chains.

3.1 The construction is natural and preserves subspaces. Postcomposition sends the formula for a simplex $\sigma$ to the formula for $f\sigma$, proving naturality. If the image of $\sigma$ lies in $A$, both tensor factors in step 2.1 lie in $C_*(A)$, proving the carrier assertion. This also includes degenerate singular simplices; none was quotiented out. [step 2.1]

4.1 The same induction one degree higher proves coherent uniqueness. For two systems, subtract their recursive equations and suppose that $K_{i-1}$ is known while $K_i$ is already defined on every chain below the current dimension. On the identity simplex $\iota_n$ put $$ \omega=(D_i-D_i')(\iota_n)+(1+T)K_{i-1}(\iota_n)+K_i(d\iota_n). $$ The recursion $d(D_i-D_i')+(D_i-D_i')d=(1+T)(D_{i-1}-D_{i-1}')$ for the two systems, the induction hypothesis for $K_{i-1}$, and the induction hypothesis for $K_i$ on the lower-dimensional chain $d\iota_n$ give $d\omega=0$: the two copies of $(1+T)dK_{i-1}(\iota_n)$ cancel, while $(D_i-D_i')(d\iota_n)+(1+T)K_{i-1}(d\iota_n)$ and the explicit $dK_i(d\iota_n)$ agree by that second induction hypothesis. The element $\omega$ is therefore a cycle in the same standard carrier, and it has positive degree, so applying $h_n$ fills it and defines $K_i(\iota_n)$; postcomposition extends it naturally. Taking the boundary of that defining filling gives exactly $D_i-D_i'=dK_i+K_id+(1+T)K_{i-1}$. [step 1.1, step 2.1, step 3.1] ∎
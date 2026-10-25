---
id: cex-borel-fixed-point-needs-completeness
kind: counterexample
title: "The fixed point theorem fails without completeness: the additive group acts on the affine line by translations"
dependency_level: 8
deps:
  - def-affine-scheme
  - def-algebraic-group-action-and-scheme-theoretic-stabilizer
  - def-complete-variety
  - def-group-scheme-over-a-field
  - def-polynomial-ring-over-a-commutative-ring
  - def-proper-morphism
  - def-unipotent-algebraic-group
  - ex-upper-triangular-unipotent-groups
  - thm-borel-fixed-point-for-complete-schemes
  - def-upper-unitriangular-group-scheme
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Corollary 17.3 and Theorem 17.4, printed p. 353; the affine-line translation witness is verified locally
---
## Statement refuted

Over an algebraically closed field $k$, every nonempty finite-type $k$-scheme with an action of a smooth connected solvable affine algebraic group $G$ has a $k$-point fixed by $G(k)$. In other words, the completeness hypothesis in the Borel fixed point theorem ([[thm-borel-fixed-point-for-complete-schemes]]) can be dropped.

The witness is the following. Let $k$ be a field and let $X=\mathbf A^1_k=\operatorname{Spec}k[x]$ ([[def-polynomial-ring-over-a-commutative-ring]], [[def-affine-scheme]]), with the action of $\mathbf G_a$ on $X$ given on $R$-points by $a\cdot z=z+a$ (translation). Then $X$ is nonempty of finite type over $k$ with an action of the smooth connected unipotent group $\mathbf G_a$ ([[def-unipotent-algebraic-group]], [[ex-upper-triangular-unipotent-groups]]), so $G=\mathbf G_a$ is smooth connected solvable, but $X$ is not complete and the action has no fixed point: for every $z\in X(k)$ and every $a\ne0$ in $k$, $a\cdot z\ne z$. Hence the completeness hypothesis cannot be dropped, even for the smallest positive-dimensional smooth connected solvable group.

## Facts & Assumptions
**Given:** A field $k$, the additive group $\mathbf G_a=\operatorname{Spec}k[t]$ with $\Delta(t)=t\otimes1+1\otimes t$, and $X=\operatorname{Spec}k[x]=\mathbf A^1_k$.

[F1] $\mathbf G_a$ is the group scheme with $\mathbf G_a(R)=(R,+)$ for every $k$-algebra $R$, and it is a smooth connected unipotent group; the map $a\mapsto\left(\begin{smallmatrix}1&a\\0&1\end{smallmatrix}\right)$ identifies it with $U_2$. ([[def-upper-unitriangular-group-scheme]], [[ex-upper-triangular-unipotent-groups]], [[def-unipotent-algebraic-group]])

[F2] An action of a group scheme $G$ on a scheme $X$ is a morphism $\alpha:G\times_kX\to X$ satisfying the usual identities; on $R$-points it gives an action of the abstract group $G(R)$ on $X(R)$. ([[def-algebraic-group-action-and-scheme-theoretic-stabilizer]])

[F3] $X=\mathbf A^1_k$ is not complete. After base change to $\mathbf A^1_t$, its projection has the closed subset $Z=V(tx-1)\subseteq\operatorname{Spec}k[t,x]$. Its image is exactly $D(t)\subseteq\operatorname{Spec}k[t]$: the quotient ring is $k[t,t^{-1}]$, and a prime lifts precisely when it does not contain $t$. This image contains the generic prime $(0)$ and excludes the closed prime $(t)$, so is not closed. The structure morphism is therefore not universally closed and hence not proper or complete. ([[def-proper-morphism]], [[def-complete-variety]])

[F4] The fixed point theorem is cited only as the contrast with the present computation; the verification below is a direct computation over $k$ and uses no choice principle, so no assumption of the Axiom of Choice is made in this counterexample. ([[thm-borel-fixed-point-for-complete-schemes]])

## Proof

**Given:** A field $k$, $G=\mathbf G_a$, and $X=\operatorname{Spec}k[x]$.

1.1 The morphism $\alpha:\mathbf G_a\times_kX\to X=\operatorname{Spec}k[x]$, dual to $k[x]\to k[t]\otimes_kk[x]=k[t,x]$, $x\mapsto x+t$, defines an action: on $R$-points it is $(a,z)\mapsto z+a$, and the identities $0\cdot z=z$ and $a\cdot(b\cdot z)=z+b+a=(a+b)\cdot z$ hold in every $k$-algebra $R$. Hence $\mathbf G_a$ acts on $X$ by translation, algebraically. [F1, F2]

1.2 The group $\mathbf G_a$ is smooth connected unipotent by [F1], and is commutative since addition commutes on every algebra-valued point; its commutator is the identity, so its derived series terminates after one step and it is solvable. The scheme $X$ is nonempty of finite type over $k$, and it is not complete by [F3]. [F1, F3]

2.1 The action has no fixed point: for $z\in X(k)=k$ and $a\in k$, the equation $a\cdot z=z$ reads $z+a=z$, i.e. $a=0$. Hence for every $z\in X(k)$ and every $a\ne0$ the translate differs from $z$, and $X(k)$ contains no point fixed by all of $\mathbf G_a(k)$. [step 1.1]

3.1 Therefore the statement refuted is false: the action of the smooth connected solvable group $\mathbf G_a$ on the nonempty finite-type scheme $\mathbf A^1_k$ has no fixed point, so the completeness hypothesis in the Borel fixed point theorem is indispensable even in this minimal example, in contrast with [F4]. [F4, step 1.2, step 2.1] ∎ 
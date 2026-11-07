---
id: def-bloch-kato-motivic-pair-and-tamagawa-measure
kind: definition
title: "Bloch–Kato Motivic Pair, Local Point Groups, and Tamagawa Measure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-number-field
  - def-p-adic-period-rings
  - def-local-inertia-subgroup-of-absolute-galois-group
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: not-applicable
sources:
  references:
    - title: "S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives"
      url: "https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf"
      locator: "§§5.5–5.16 and §6, including Definitions 5.5 and 5.9, Conjecture 5.15, Conjecture 6.2 and Theorem 6.1."
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§2.6–2.20, 2.36–2.56, 4.14–4.15, 5.4–5.9; definitions, conjectures, and Theorems 5.24, 5.29, 5.37 and 5.42."
---

## Definition

A Bloch–Kato motivic pair over $\mathbb Q$ is a pair $(V,D)$ of finite-dimensional $\mathbb Q$-vector spaces with the following structure. For each prime $\ell$, $V_\ell=V\otimes\mathbb Q_\ell$ has a continuous Galois action, and $V\otimes\mathbb A_f$ has a stable real structure. The space $D$ has a decreasing filtration $D^i$ with $D^i=0$ for $i\ge0$ and $D^i=D$ for $i\ll0$. There are filtration-preserving comparison isomorphisms $\theta_p:D_p\cong D_{\mathrm{dR}}(V_p)$ for finite $p$ and $\theta_\infty:D_\infty\cong(V_\infty\otimes\mathbb C)^+$. These data satisfy: (P1) there is a nonempty open $U\subset\operatorname{Spec}\mathbb Z$ such that for $p\in U$, $V_\ell$ is unramified at $p$ for $\ell\ne p$ and $V_p$ is crystalline; (P2) for every $\mathbb Z$-lattice $M\subset V$ and $L\subset D$, outside a finite set of primes containing $\infty$, $V_p$ is crystalline, the filtration satisfies the source admissibility condition, $L\otimes\mathbb Z_p$ is strongly divisible in $D_p$, and $M\otimes\mathbb Z_p$ is the corresponding Galois-stable lattice; (P3) the Frobenius polynomials $P_p(V_\ell,u)$ have rational coefficients and are independent of $\ell$; and (P4) there is a stable $\mathbb Z_\ell$-lattice $M$ such that $H^0(\mathbb Q_p^{\mathrm{nr}},M\otimes\mathbb Q_\ell/\mathbb Z_\ell)$ is divisible for almost all $\ell$. The pair has weights at most $w$ if every inverse Frobenius root $\alpha$ satisfies $|\alpha|\le p^{w/2}$ and $D^i\cap V_\infty^+=0$ for $i>w/2$. For finite $S$ containing $\infty$, define
$$L_S(V,s)=\prod_{p\notin S}P_p(V,p^{-s})^{-1};$$
this product converges absolutely for $\operatorname{Re}s>w/2+1$. For a finite prime $p$ and coefficient prime $\ell\ne p$, define $H_f^1(\mathbb Q_p,V_\ell)$ as the kernel of restriction to inertia cohomology; for $\ell=p$, define $H_f^1(\mathbb Q_p,V_p)$ as the kernel of the map to $H^1(\mathbb Q_p,V_p\otimes B_{\mathrm{cris}})$, using the crystalline period ring. For a stable $\mathbb Z$-lattice $M\subset V$, set $H_f^1(\mathbb Q_p,M\otimes\widehat{\mathbb Z})=\prod_\ell H_f^1(\mathbb Q_p,M\otimes\mathbb Z_\ell)$. Define
$$A(\mathbb Q_p)=H_f^1(\mathbb Q_p,M\otimes\widehat{\mathbb Z})\quad(p<\infty),\qquad A(\mathbb R)=\left((D_\infty\otimes_\mathbb R\mathbb C)/(D_\infty^0\otimes_\mathbb R\mathbb C+M)\right)^+.$$
The exponential maps $\exp_p:D_p/D_p^0\to A(\mathbb Q_p)$ are the source local isomorphisms near zero; at $p=\infty$ use the canonical quotient map. If the weights are at most $-3$, a nonzero determinant vector $w\in\det_\mathbb R(D_\infty/D_\infty^0)$ induces local Haar measures $\mu_{p,w}$ via these maps, with $\mu_{p,w}(A(\mathbb Q_p))=P_p(V,1)$ for all but finitely many $p$. Their product is the Tamagawa measure. If the weights are only at most $-1$ and $L_S(V,s)$ continues to a neighborhood of $0$, the source instead uses its regularized product with $r=\operatorname{ord}_{s=0}L_S(V,s)$. Replacing $w$ by $a w$ for $a\in\mathbb Q^\times$ scales $\mu_{p,w}$ by $|a|_p$, so the product formula makes the global measure independent of $w$.

## Definition references

[S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives](https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf)

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

## Facts & Assumptions

**Given:** A finite-dimensional Galois representation, filtered de Rham data, comparison maps, a stable lattice, and the source local conditions.

[F1] [[def-number-field]]: $\mathbb Q$ is a number field and its finite and infinite places determine the local fields used in the pair.

[F2] [[def-p-adic-period-rings]]: $B_{\mathrm{cris}}$ is Fontaine’s crystalline period ring with its continuous local Galois action.

[F3] [[def-local-inertia-subgroup-of-absolute-galois-group]]: inertia is the kernel of the action on the algebraic closure of the residue field, used in the unramified local condition.

## Authoring status

The pair axioms and local groups follow Bloch–Kato Definitions 5.5 and 5.9, with finite local conditions made explicit from §4. The p-adic exponential and measure construction depend on the source §4 p-adic Hodge theory and are not reconstructed locally. The current p-adic-period-ring supplier itself records held construction and well-definedness obligations. This item remains escalated and the finite local conditions are not treated as proved.

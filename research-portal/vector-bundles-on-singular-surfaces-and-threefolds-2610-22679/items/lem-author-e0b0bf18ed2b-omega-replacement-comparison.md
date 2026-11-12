---
id: lem-author-e0b0bf18ed2b-omega-replacement-comparison
kind: lemma
title: Omega replacement preserves sequential stable groups
status: published
domain: mathematics
deps:
  - lem-author-e0b0bf18ed2b-spectra-tail-invariance
  - thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input
  - lem-adjudicate-fcabf63fbedd-finite-kan-ordered-loops
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-e0b0bf18ed2b-spectra-tail-invariance: mathematical-premise
  thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input: mathematical-premise
  lem-adjudicate-fcabf63fbedd-finite-kan-ordered-loops: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 2
---

## Statement
Let $X$ be a level-Kan sequential pointed simplicial prespectrum with sphere-first structure maps $K\wedge X_n\to X_{n+1}$, $K=\Delta^1/\partial\Delta^1$. For the replacement $QX$ of the simplicial Omega replacement input, the natural map $G_k(X)\to G_k(QX)$ is an isomorphism for every integer $k$. More precisely, for $i+k\geq2$ there is a natural isomorphism $\pi_{i+k}((QX)_i)\cong G_k(X)$, compatible with advancement in $i$.

## Statement references

[[thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input]]

[[lem-author-e0b0bf18ed2b-spectra-tail-invariance]]

## Facts & Assumptions
**Given:** $X$, $k$ and $i$ as in the Statement, in the ZFC setting of [F1]. Write $s_n:K\wedge X_n\to X_{n+1}$ for its structure maps and $\iota_n:X_n\to\Omega X_{n+1}$ for their adjoints. All homotopy groups have the realization/Kan comparison and sphere-first convention of [F2].

**Goal:** Compute the stable groups of the imported Omega replacement.

[F1] [[thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input]] gives $(QX)_i=\operatorname{colim}_m\Omega^mX_{i+m}$, the transition $\Omega^m\iota_{i+m}$, the inherited structure maps, and $\iota_{RX}=R\iota_X$ for $R=s\Omega$.

[F2] [[lem-author-e0b0bf18ed2b-spectra-tail-invariance]] supplies the pointed simplicial prespectrum and $G_k$ conventions and identifies a sequential colimit with any cofinal finite tail.

[F3] [[lem-adjudicate-fcabf63fbedd-finite-kan-ordered-loops]] supplies finite Kan representatives, commutation of homotopy groups with sequential Kan colimits, and natural iterated loop isomorphisms $D_{r,m}$ with the left-coordinate transition identity.

[F4] [[math:def-axiom-of-choice]] is allowed in the imported model-structure existence arguments underlying [F1]. The calculation below uses only its explicit level formula, transitions and inherited structure maps; it makes no simultaneous choices of fillers and does not use the imported stable-equivalence assertion.

## Proof
1.1 Put $r=i+k\geq2$. By [F3], the levels $\Omega^mX_{i+m}$ are Kan and $\pi_r((QX)_i)\cong\operatorname{colim}_m\pi_r(\Omega^mX_{i+m})$. Apply $D_{r,m}$ to obtain $\operatorname{colim}_m\pi_{r+m}(X_{i+m})$. The transition identity of [F3], with $u=\iota_{i+m}$ and $v=s_{i+m}$, identifies its bonding map with suspension by a new leftmost $K$ followed by $s_{i+m}$. These are exactly the sphere-first bonding maps of [F2]. Cofinal tail invariance therefore gives the natural isomorphism $\phi_i:\pi_{i+k}((QX)_i)\xrightarrow{\sim}G_k(X)$. In particular, the map $X_i\to(QX)_i$ inserts the $m=0$ term, so its composite with $\phi_i$ is the defining map from stage $i$ into $G_k(X)$. [F1, F2, F3, F4, given]

2.1 For advancement in $i$, [F1] identifies the adjoint structure map at the $m$th stage with $\Omega^m\iota_{i+m}$, using $\iota_{RX}=R\iota_X$. For $m\geq1$, label the loop variables of a representative $f:T_r\to\Omega^mX_{i+m}$ by $t_1,\ldots,t_m$, outermost first, and write $z$ for its sphere coordinates. Its fully uncurried form is $\widehat f(t_m,\ldots,t_1,z)$; below, the list $t_m,\ldots,t_2$ is empty when $m=1$. Taking the adjoint of $\Omega^m\iota_{i+m}$ extracts the outermost loop as the new sphere coordinate, say $s=t_1$, leaving target loop variables $t_2,\ldots,t_m,t_{m+1}$. Fully uncurrying the target therefore gives $s_{i+m}(t_{m+1},\widehat f(t_m,\ldots,t_2,s,z))$, on the ordered sphere coordinates $(t_{m+1},t_m,\ldots,t_2,s,z)$. This is exactly the sphere-first stable bonding of $\widehat f$: the new circle is $t_{m+1}$ and the old sphere coordinates are $(t_m,\ldots,t_2,s,z)$. No circle factors are interchanged. For $m=0$, adjunction directly gives $s_i(s,f(z))$, the same bonding formula. Thus, if $b_i^Q$ is the stable bonding map for $QX$, $\phi_{i+1}b_i^Q=\phi_i$. Consequently the $\phi_i$ induce an isomorphism $G_k(QX)\to G_k(X)$ by [F2]. Its composite with the natural map from $G_k(X)$ fixes every stage representative by the last assertion of step 1.1, and is the identity. This proves both the stable-group isomorphism and the asserted advancement compatibility. [F1, F2, F3, step 1.1] ∎

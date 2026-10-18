---
id: thm-temperley-lieb-root-interstandard-hom-spaces
kind: theorem
title: "All Hom spaces between complex Temperley–Lieb standards"
status: draft
dependency_level: 11
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [lem-temperley-lieb-root-noncritical-radicals-and-simple-heads, lem-temperley-lieb-annular-central-element-and-reflection-maps, lem-temperley-lieb-link-state-gram-form-is-invariant, thm-schurs-lemma-for-modules, thm-temperley-lieb-link-state-dimension-formula]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ridout–Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley–Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§7 Theorem 7.5, including the exceptional reverse map at (n,p,p′,δ)=(2,1,0,0)."
---

## Statement

Let $q\in\mathbb C^\times$, $\delta=q+q^{-1}$ and $V_{n,p}=W_{n,n-2p}(\mathbb C,\delta)$. For allowed arc labels $p,p'$, the space $\operatorname{Hom}_{\mathrm{TL}_n}(V_{n,p},V_{n,p'})$ has dimension one exactly in the following cases:

- $p=p'$;
- $p<p'$ and $(n,p),(n,p')$ form an adjacent reflected pair: $\kappa=\operatorname{ord}(q^2)\ge2$, $1\le r<\kappa$, $n-2p'+1=k\kappa+r$, and $p=p'+r-\kappa$;
- $n=2$, $\delta=0$, $p=1$, $p'=0$.

In every other case the dimension is zero. In the second case a nonzero map has kernel $R_{n,p}$ and image $R_{n,p'}\cong L_{n,p}$, using the ordinary form-radical notation even when the target is the zero-loop perfect-matching module. In the third case the map is an isomorphism between two one-dimensional modules. These assertions include $\kappa=1,2,3,\infty$, rank zero, and absent reflected labels.

## Facts & Assumptions

**Given:** The complex standards, their arc labels, and ordinary form radicals $R_{n,p}$.

[F1] Each nonexceptional standard has unique simple head $L_{n,p}$ and zero or simple radical; a nonzero radical is the head at its adjacent reflected label. These nonzero heads are pairwise distinct. At $\delta=0,n=2m>0$, $V_{2m,m}=R_{2m,m}\cong L_{2m,m-1}$ is simple and $L_{2m,m}=0$ ([[lem-temperley-lieb-root-noncritical-radicals-and-simple-heads]]).

[F2] Adjacent-reflection maps exist, and the central element is scalar on each standard ([[lem-temperley-lieb-annular-central-element-and-reflection-maps]]).

[F3] The form is computed by capping, with lower-propagating terms zero in the standard quotient ([[lem-temperley-lieb-link-state-gram-form-is-invariant]]).

[F4] Every nonzero endomorphism of a simple module is invertible ([[thm-schurs-lemma-for-modules]]); the link-state dimension is the ballot number ([[thm-temperley-lieb-link-state-dimension-formula]]).

## Proof

**Proof technique:** Use the complete submodule lists and the rank-one operators.

1.1 Stacking a state $z$ against the diagram with halves $y,x$ caps $z$ with $y$, giving $z\cdot C_{y,x}=\phi(y,z)x$; when propagation drops, both sides vanish in the standard quotient. If the form of $V_{n,p}$ is nonzero, choose $y,z$ with $\phi(y,z)=1$. For an endomorphism $h$, [F3] gives $h(x)=h(z\cdot C_{y,x})=h(z)\cdot C_{y,x}=\phi(y,h(z))x$ for every $x$. Thus $h$ is scalar. In the exceptional zero-form case the module itself is simple by [F1], so every endomorphism is scalar: it has a complex eigenvalue $\lambda$, and the endomorphism $h-\lambda1$ has a nonzero kernel and must therefore be zero by [F4]. This proves every diagonal dimension is one. [F1, F3, F4, given, choose, algebra]

1.2 It remains to include $Z=V_{2m,m}$ at $\delta=0$. Here $Z\cong L_{2m,m-1}$ is simple by [F1]. For a nonexceptional source $V_{2m,p}$, a map to $Z$ has simple image; if nonzero it is a simple quotient of the source, hence its head $L_{2m,p}$. Distinctness of the labels forces $p=m-1$, in which case [F2] supplies a map and [F4] gives uniqueness. This is exactly the adjacent-reflection case. [F1, F2, F4, algebra]

2.1 Suppose both source and target have nonzero forms and $p>p'$. The rank-one operators for the source have $n-2p<n-2p'$ propagating strands and kill the target. Choosing $y,z$ as in step 1.1, a proposed homomorphism $h$ therefore satisfies $h(x)=h(z\cdot C_{y,x})=h(z)\cdot C_{y,x}=0$. Hence the Hom space is zero. [F3, step 1.1, algebra]

3.1 Suppose both forms are nonzero and $p<p'$. A nonzero map cannot be surjective: its inverse quotient isomorphism would contradict step 2.1, whose proof also applies to quotients of the target. Thus its image lies in the simple radical $R_{n,p'}$. The kernel is a proper submodule of the source and hence is $0$ or $R_{n,p}$. If it is zero, the source is simple because it embeds into the simple radical. In either case the image is isomorphic to the source head $L_{n,p}$. By [F1] and distinction of simple labels this is possible exactly when $p$ is the adjacent reflected label of $p'$. Such a map exists by [F2]; it factors as the head quotient followed by an isomorphism $L_{n,p}\cong R_{n,p'}$ and the radical inclusion. Schur's lemma makes this factorization unique up to scalar, so its Hom space has dimension one and the stated kernel and image. If the target radical is zero there is no such map. [F1, F2, F4, step 2.1, algebra]

4.1 A nonzero map from $Z$ to $V_{2m,p'}$, $p'<m$, is injective. If its image is the radical, [F1] makes it $L_{2m,p'-1}$; this cannot equal $L_{2m,m-1}$ because $p'-1<m-1$. Otherwise its image is the entire target by the submodule list in [F1], so the target is simple. At $\kappa=2$ every $1\le p'<m$ has a present reflected label $p'-1$ with a nonzero head, hence is reducible; thus $p'=0$. That standard is one-dimensional. The exceptional module has dimension $\frac1{m+1}\binom{2m}{m}$ by [F4], which is greater than one for $m\ge2$: there are at least the distinct matchings with initial arcs $(1,2)$ and $(1,2m)$. Equality therefore occurs only at $m=1$. In that case both $V_{2,1}$ and $V_{2,0}$ are one-dimensional, and $d_1$ acts by zero on each, giving the stated isomorphism and one-dimensional Hom. These cases exhaust all labels, including rank zero. [F1, F4, step 1.1, step 2.1, step 3.1, step 1.2, algebra] ∎

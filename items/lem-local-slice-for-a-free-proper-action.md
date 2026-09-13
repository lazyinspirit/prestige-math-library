---
id: lem-local-slice-for-a-free-proper-action
kind: lemma
title: Local slice for a free proper action
status: published
origin: pipeline
deps: [def-free-and-proper-lie-group-actions, thm-smooth-inverse-function-theorem-on-manifolds, thm-compactness-under-continuous-maps, thm-constant-rank-theorem-for-manifolds, prop-topological-manifolds-are-locally-compact-and-locally-path-connected, cor-a-linear-subspace-has-a-complement, thm-closed-subspace-of-a-compact-space-is-compact]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Proposition 21.5 and proof, printed pages 543–544; slice construction in Theorem 21.10, printed pages 545–547
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Let a Lie group $G$ act smoothly, freely, and properly on a smooth manifold
$M$. For every $x\in M$ there is an embedded submanifold $S\subseteq M$
through $x$ such that

$$A:G\times S\longrightarrow G\cdot S,\qquad A(g,s)=g\cdot s,$$

is a diffeomorphism onto an open saturated neighborhood of $x$. In
particular, its restriction near $(e,x)$ is a diffeomorphism onto a
neighborhood of $x$, and $gS\cap S\ne\varnothing$ implies $g=e$.

## Facts & Assumptions

**Given:** A smooth free proper left action of $G$ on $M$ and a point $x\in M$.

[F1] Properness means that the action-graph map
$\Theta(g,y)=(g\cdot y,y)$ has compact inverse images of compact subsets.
[[def-free-and-proper-lie-group-actions]].

[F2] The constant-rank theorem gives local normal forms for constant-rank
maps, and a smooth map with invertible differential is locally a
diffeomorphism. [[thm-constant-rank-theorem-for-manifolds]],
[[thm-smooth-inverse-function-theorem-on-manifolds]].

[F3] A finite-dimensional linear subspace has a complement.
[[cor-a-linear-subspace-has-a-complement]].

[F4] Manifolds are locally compact; continuous images of compact sets are
compact; closed subsets of compact spaces are compact.
[[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]],
[[thm-compactness-under-continuous-maps]],
[[thm-closed-subspace-of-a-compact-space-is-compact]].

## Proof

**Proof technique:** construct a transverse submanifold and use properness to
exclude returns.

1.1 Let $\Phi_x:G\to M$ be the orbit map. From $\Phi_x\circ L_g=(y\mapsto g\cdot y)\circ\Phi_x$ and the fact that both outside maps are diffeomorphisms, $\Phi_x$ has constant rank. Its fibre over $x$ is the stabilizer $G_x=\{e\}$ by freeness. If $d(\Phi_x)_e$ had a nonzero kernel, the constant-rank normal form [F2] would make the local fibre through $e$ positive-dimensional, contradicting that it is a singleton. Thus $d(\Phi_x)_e$ is injective. [given, F2, algebra]

2.1 By [F3], choose a complement $N$ to $d(\Phi_x)_e(T_eG)$ in $T_xM$. In a chart at $x$, the inverse image of the coordinate subspace corresponding to $N$ is, after shrinking, an embedded submanifold $S_0$ through $x$ with $T_xS_0=N$. The differential of $A_0:G\times S_0\to M$, $A_0(g,s)=g\cdot s$, at $(e,x)$ is $(X,v)\mapsto d(\Phi_x)_eX+v$, hence is an isomorphism. By [F2], there are an identity neighborhood $V\subseteq G$ and a neighborhood of $x$ in $S_0$, again denoted $S_0$, on which $A_0|_{V\times S_0}$ is a diffeomorphism onto an open neighborhood of $x$. [F2, F3, step 1.1, construct]

3.1 Choose a compact neighborhood $C$ of $x$ and shrink $S_0$ into its interior. Properness makes $P=\Theta^{-1}(C\times C)$ compact. Its projection to $G$ is therefore the compact transporter $$K=\{g\in G:gC\cap C\ne\varnothing\}.$$ The set $K\setminus V$ is compact by [F4]. [F1, F4, step 2.1]

4.1 For every $g\in K\setminus V$, freeness gives $g\cdot x\ne x$. Choose disjoint neighborhoods of these two points. Continuity of the action then supplies neighborhoods $O_g$ of $g$ and $N_g$ of $x$ such that $g'N_g\cap N_g=\varnothing$ for all $g'\in O_g$. The $O_g$ cover the compact set $K\setminus V$, so finitely many suffice. Intersect their corresponding $N_g$ and shrink $S_0$ to a submanifold neighborhood $S$ of $x$ inside that finite intersection and inside $C$. Then $gS\cap S=\varnothing$ for $g\in K\setminus V$; it is also empty for $g\notin K$ because $S\subseteq C$. [given, F4, step 3.1, construct]

5.1 If $gS\cap S\ne\varnothing$, step 4.1 gives $g\in V$. For $s,t\in S$ with $g\cdot s=t$, the two points $(g,s)$ and $(e,t)$ of $V\times S_0$ have the same image under the injective local map from step 2.1, so $g=e$ and $s=t$. Consequently $A:G\times S\to G\cdot S$ is bijective. [step 2.1, step 4.1]

6.1 The differential of $A$ is invertible at every $(g,s)$: at $(e,s)$ this follows after the preceding shrinking from the local diffeomorphism in step 2.1, and arbitrary $g$ follows by translation in the source and the action diffeomorphism in the target. Thus $A$ is a bijective local diffeomorphism, hence a diffeomorphism onto its open image. Its image is saturated by definition and contains $x$. The construction uses only a finite subcover in step 4.1 and no choice principle. [F2, step 2.1, step 5.1] ∎

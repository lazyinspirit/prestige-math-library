---
id: lem-nonaffine-rational-action-composition-domain
kind: lemma
title: "Composition at points in the domain of a rational group action"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, cor-weak-nullstellensatz-algebraically-closed-coordinate-form, def-abelian-variety-over-a-field, def-rational-map-integral-schemes]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Brion–Samuel–Uma, Lectures on the structure of algebraic groups, Lemma 2.3.3, p.29"
      url: https://www-fourier.univ-grenoble-alpes.fr/~mbrion/chennai.pdf
---

## Statement

Assume the Axiom of Choice. Let $k$ be algebraically closed, $G$ a smooth connected algebraic group, and $X$ an integral separated variety. A rational action means a rational map $\alpha:G\times X\dashrightarrow X$ satisfying the action identities as rational maps, whose induced maps $\alpha_g$ are birational automorphisms for every $g\in G(k)$. Write $g\cdot x$ only when the total map $\alpha$ is defined at $(g,x)$. If $h\cdot x$ and $g\cdot(h\cdot x)$ are defined, then $gh\cdot x$ is defined and equals $g\cdot(h\cdot x)$.

## Facts & Assumptions

[F1] Rational maps to separated schemes agree wherever both representatives are defined; their representatives glue to a maximal open domain. The graph of a morphism to a separated scheme is closed. ([[def-rational-map-integral-schemes]])

[F2] Group multiplication and inverse are morphisms. ([[def-abelian-variety-over-a-field]])

[F3] Closed rational points are dense in every reduced finite-type scheme over an algebraically closed field. ([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]])

## Proof

**Given:** $G$, $X$, $\alpha$, and the two defined values in the statement.

1.1 Products here are integral: for affine integral coordinate rings $A,B$, write two alleged zero-divisor factors in $A\otimes_k B$ using finite linearly independent coefficients in $B$. Specializing at each closed point of $\operatorname{Spec}A$ makes one factor zero because $B$ is a domain. The two vanishing loci are closed and cover the irreducible $\operatorname{Spec}A$ by [F3], so one factor is zero. This proves $A\otimes_k B$ is a domain. Put $T=G\times G\times X$, $a(u,v,z)=\alpha(v,z)$, and $b(u,v,z)=\alpha(u,a(u,v,z))$. The simultaneous domain $N$ of $a$ and $b$ is open and contains $(g,h,x)$. The rational map $c(u,v,z)=\alpha(uv,z)$ equals $b$ by the action identity. The closure of the graph of $(a,b,c)$ is contained in the closed locus where its last two coordinates coincide. Over $N$ it is exactly the graph of $(a,b,b)$: the latter is closed by [F1], contains the dense generic graph there, and that graph is dense in it because $N$ is integral. Consequently $c$ has the regular representative $b$ on $N$. [F1, F2, F3, given, construct]

2.1 The morphism $s:G\times X\to T$ given by $s(t,z)=(th^{-1},h,z)$ is a section of $(u,v,z)\mapsto(uv,z)$. Its inverse image of $N$ is an open neighbourhood of $(gh,x)$. On that neighbourhood $b\circ s$ is a morphism. It agrees with $\alpha$ on the dense open where $\alpha$ itself is defined, since there $c\circ s=\alpha$; this dense open intersects the neighbourhood because $G\times X$ is integral. Thus it represents $\alpha$ and extends its domain to $(gh,x)$. Its value is $b(g,h,x)=g\cdot(h\cdot x)$, as claimed. [F1, F2, step 1.1, construct] ∎

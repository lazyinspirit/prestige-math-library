---
id: thm-unipotent-group-triangular-criterion
kind: theorem
title: Unipotent groups are exactly the subgroups of some U_n, equivalently the groups with coconnected coordinate Hopf algebra
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-affine-scheme
  - def-coconnected-hopf-algebra
  - def-group-scheme-over-a-field
  - def-unipotent-algebraic-group
  - def-upper-unitriangular-group-scheme
  - lem-coconnected-comodules-have-fixed-vectors
  - lem-nonaffine-affine-group-faithful-representation
  - lem-nonaffine-group-monomorphism-closed-immersion
  - lem-unipotent-representation-criterion
  - lem-upper-unitriangular-coordinate-ring-is-coconnected
  - thm-closed-subgroup-schemes-correspond-to-hopf-ideals
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
      locator: Theorem 14.5, Proposition 14.3 and Corollary 14.6, printed pp. 280-282
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Proposition 39 and Corollary 40, printed pp. 19-20 (smooth classical specialization; no Hopf-coconnectedness claim)
---
## Statement

Let $k$ be a field and let $G$ be an affine algebraic group over $k$ (an affine group scheme of finite type over $k$, [[def-affine-scheme]], [[def-group-scheme-over-a-field]]). Consider the following conditions:

(a) $G$ is unipotent ([[def-unipotent-algebraic-group]]);

(b) $G$ is isomorphic to a closed subgroup scheme of the upper unitriangular group scheme $U_n$ for some $n\ge1$ ([[def-upper-unitriangular-group-scheme]]);

(c) the coordinate Hopf algebra $O(G)$ is coconnected ([[def-coconnected-hopf-algebra]]).

Without a choice assumption, (c) implies (a); more generally a surjective Hopf-algebra quotient of $O(U_n)$ is coconnected and therefore defines a unipotent group. Assuming the Axiom of Choice ([[def-axiom-of-choice]]), (a) implies (b), and the geometric closed-subgroup conversion in (b) implies (c), so all three conditions are equivalent; the same assumption makes them equivalent to existence of a faithful finite-dimensional unipotent rational representation. The exact uses of AC are the faithful-representation/closed-immersion suppliers constructing the triangular embedding in (a) implies (b), and the closed-subgroup/quotient-ring supplier in geometric (b) implies (c). The Hopf-quotient filtration argument and (c) implies (a) use no choice. No smoothness, connectedness or perfectness is assumed; in positive characteristic the infinitesimal group $\alpha_p$ and the constant group $(\mathbb Z/p\mathbb Z)_k$ are unipotent groups that are non-smooth, respectively non-connected.

## Facts & Assumptions

**Given:** A field $k$ and an affine algebraic group $G$ over $k$; AC is assumed only for geometric (a) implies (b), geometric (b) implies (c), and the faithful-existence reformulation.

[F1] $G$ is unipotent when every nonzero rational representation of $G$ has a nonzero fixed vector, equivalently every simple rational representation is one-dimensional with trivial action; it suffices to test finite-dimensional representations, and every finite-dimensional representation of a unipotent group is unipotent. ([[def-unipotent-algebraic-group]], [[lem-unipotent-representation-criterion]])

[F2] Assume AC. For every affine finite-type group scheme over $k$ there is a faithful finite-dimensional rational representation, i.e. a monomorphism $G\to\mathrm{GL}_n$; every monomorphism of finite-type group schemes over a field is a closed immersion. ([[lem-nonaffine-affine-group-faithful-representation]], [[lem-nonaffine-group-monomorphism-closed-immersion]])

[F3] $U_n$ is the closed subgroup scheme of $\mathrm{GL}_n$ of upper unitriangular matrices; its coordinate ring $O(U_n)=k[X_{ij}:i<j]$ is coconnected, A surjective Hopf-algebra quotient of $O(U_n)$ is coconnected, without choice. Assuming AC, the coordinate ring of a geometric closed subgroup scheme of $U_n$ is such a quotient. ([[def-upper-unitriangular-group-scheme]], [[lem-upper-unitriangular-coordinate-ring-is-coconnected]], [[thm-closed-subgroup-schemes-correspond-to-hopf-ideals]])

[F4] If $A$ is a coconnected commutative Hopf algebra over $k$ and $V\ne0$ is an $A$-comodule, then $V$ has a nonzero vector fixed by the comodule structure; for $A=O(G)$ this says that every nonzero rational representation of $G$ has a nonzero $G$-fixed vector. ([[lem-coconnected-comodules-have-fixed-vectors]])

## Proof

**Given:** A field $k$ and an affine algebraic group $G$ over $k$; AC is assumed only for geometric (a) implies (b), geometric (b) implies (c), and the faithful-existence reformulation.

1.1 Assume (a) and the Axiom of Choice. By [F2] choose a faithful finite-dimensional representation $G\hookrightarrow\mathrm{GL}(V)$, adjoining a trivial line if needed to ensure $\dim V\ge1$. Since $G$ is unipotent, [F1] makes this representation unipotent, so there is a basis of $V$ in which every element of $G$ acts by an upper unitriangular matrix; therefore the closed immersion $G\hookrightarrow\mathrm{GL}(V)$ factors through the closed subgroup scheme $U_n$ of $\mathrm{GL}_n$ for $n=\dim V$. Hence (b) holds. [F1, F2]

1.2 Assume (b) and AC for the geometric quotient-ring conversion: $G$ is a closed subgroup scheme of some $U_n$. By [F3] the coordinate ring of a closed subgroup scheme of $U_n$ is a quotient of the coconnected Hopf algebra $O(U_n)$ by a Hopf ideal, hence coconnected. Hence (c) holds. [F3]

1.3 Assume (c). Let $V\ne0$ be a nonzero rational representation of $G$. Since $O(G)$ is coconnected, [F4] provides a nonzero vector $v\in V$ with $v$ fixed by $G$. Thus every nonzero rational representation of $G$ has a nonzero fixed vector, so $G$ is unipotent by [F1]. Hence (a) holds. [F1, F4]

2.1 Step 1.3 gives the choice-free implication (c) implies (a), and the algebraic Hopf-quotient filtration in [F3] is also choice-free. Under AC, steps 1.1 and 1.2 give (a) implies (b) implies (c), yielding the full equivalence. Under that same assumption, for the final reformulation: a faithful unipotent finite-dimensional representation produces a closed immersion into some $U_n$ by the argument of [step 1.1], and conversely a closed immersion $G\hookrightarrow U_n$ followed by the inclusion $U_n\subseteq\mathrm{GL}_n$ is a faithful unipotent representation; so the existence of such a representation is equivalent to (b). [step 1.1, step 1.2, step 1.3] ∎ 
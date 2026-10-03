---
id: lem-fundamental-class-of-a-boundary-pushes-forward-to-zero
kind: lemma
title: The fundamental class of a boundary pushes forward to zero
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-relative-fundamental-class-and-boundary-orientation
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - def-fundamental-class-of-a-compact-oriented-manifold
  - prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise
  - thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold
  - thm-closed-subspace-of-a-compact-space-is-compact
  - def-kronecker-evaluation-pairing
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Proof of Theorem 4.9: the natural map sends $\\mu_B\\in H_{n+1}(B,M)$ to $\\mu_M$, printed pp.52-53"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, 2016)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf
      locator: "Section 8.2, boundary-structure conventions, printed p.246"
---

## Statement

Let $W$ be a compact $R$-oriented smooth $(n+1)$-manifold with boundary
$M=\partial W$, where $R$ is a commutative unital ring
([[def-relative-fundamental-class-and-boundary-orientation]]). The manifold $M$
carries the induced boundary orientation, and for $R=\mathbb F_2$ the canonical
mod-two orientation may be used, so that the statement applies to every compact
smooth manifold ([[prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise]]).
Let $i:M\hookrightarrow W$ be the inclusion, a closed embedding of a smooth
$n$-manifold, and let $[M]\in H_n(M;R)$ be the fundamental class of the induced
orientation ([[def-fundamental-class-of-a-compact-oriented-manifold]]).

Then $i_*[M]=0$ in $H_n(W;R)$, and consequently
$$\langle i^*\alpha,[M]\rangle=0 \qquad\text{for every } \alpha\in H^n(W;R).$$
Empty boundary, dimension zero, disconnected manifolds and the empty manifold
are included, and no choice principle is used.

## Facts & Assumptions

**Given:** A compact $R$-oriented smooth $(n+1)$-manifold $W$ with boundary $M=\partial W$, the inclusion $i:M\to W$, the induced boundary orientation on $M$, and the fundamental class $[M]\in H_n(M;R)$.

[F1] The relative fundamental class $[W,M]\in H_{n+1}(W,M;R)$ is the unique class restricting to the prescribed local generators at interior points, the induced boundary orientation on $M$ is the one whose local generator at $x$ is the restriction of the connector $\partial[W,M]$, and consequently $\partial[W,M]=[M]$ in $H_n(M;R)$; the construction handles closed components, dimension zero and the empty case, and uses no AC ([[def-relative-fundamental-class-and-boundary-orientation]], [[def-fundamental-class-of-a-compact-oriented-manifold]]).

[F2] The singular homology of the pair $(W,M)$ is naturally long exact: $\cdots\to H_{n+1}(W,M;R)\xrightarrow{\partial}H_n(M;R)\xrightarrow{i_*}H_n(W;R)\xrightarrow{j_*}H_n(W,M;R)\to\cdots$, so at $H_n(M;R)$ the image of $\partial$ equals the kernel of $i_*$ ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[F3] The Kronecker pairing $\langle\cdot,\cdot\rangle:H^n(W;R)\times H_n(W;R)\to R$ descends through cocycle and cycle representatives, is additive in each variable, and satisfies $\langle f^*\alpha,z\rangle=\langle\alpha,f_*z\rangle$ for every continuous $f$ ([[def-kronecker-evaluation-pairing]], [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]]).

[F4] For $R=\mathbb F_2$ every topological manifold carries a canonical $\mathbb F_2$-orientation, and this construction is choice-free ([[prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise]]).

[F5] If $W$ is compact then its boundary $M$, being a closed embedded submanifold and hence a closed subset of the compact space $W$, is compact ([[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]], [[thm-closed-subspace-of-a-compact-space-is-compact]]).

## Proof

1.1 ($\partial[W,M]=[M]$.) By the definition of the relative fundamental class and of the induced boundary orientation, the connector sends the relative fundamental class to the fundamental class of the boundary in that orientation: $\partial[W,M]=[M]$. [F1]

2.1 ($i_*[M]=0$.) The long exact homology sequence of the pair $(W,M)$ is exact at $H_n(M;R)$, so the image of $\partial:H_{n+1}(W,M;R)\to H_n(M;R)$ equals the kernel of $i_*:H_n(M;R)\to H_n(W;R)$. By step 1.1 the class $[M]$ lies in that image, hence $i_*[M]=0$. [F2, step 1.1]

3.1 (Vanishing of all evaluations.) Let $\alpha\in H^n(W;R)$. Naturality of the Kronecker pairing gives $\langle i^*\alpha,[M]\rangle=\langle\alpha,i_*[M]\rangle=\langle\alpha,0\rangle=0$ by step 2.1 and additivity of the pairing. [F3, step 2.1]

4.1 (Degenerate cases and assembly.) If $\partial W=\varnothing$ then $M=\varnothing$, the fundamental class $[M]$ is the zero class of $H_n(\varnothing;R)=0$, and both assertions hold. If $n=0$ the formula of step 2.1 is the statement that the signed count of the boundary points of a compact oriented one-manifold is zero in $H_0(W;R)$, which is exactly $\partial[W,M]=[M]$ followed by exactness; the earlier steps cover this case without change, as they make no positive-dimensional hypothesis. Disconnected $W$ reduces to the connected case: the finitely many components $W_\lambda$ of $W$ are compact $R$-oriented manifolds with boundary $\partial W_\lambda$, the induced boundary orientation of each is the one induced by $W$, and by the componentwise description of the relative and absolute fundamental classes the boundary class $[M]$ is the finite sum of the images of the classes $[\partial W_\lambda]$ under the inclusions; hence the vanishing proved on each component, together with additivity of $i_*$ and of the pairing, gives the assertion for $M$. For $R=\mathbb F_2$ the induced boundary orientation of the canonical mod-two orientation is the canonical mod-two orientation of $M$, since over $\mathbb F_2$ each component carries a unique orientation; [F4] and [F5] record the choice-freeness and compactness facts used for this case. No step used a choice principle: the relative fundamental class is unique, exactness and naturality are algebraic, and $M$ is already given as the boundary of $W$. [F1, F4, F5, step 3.1] ∎

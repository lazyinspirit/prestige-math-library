---
id: ex-gts-explicit-degree-two-sphere-bubbling
kind: example
title: Explicit degree-two sphere bubbling on the fixed sphere
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-gts-symplectic-and-almost-complex-curve-data
  - def-gts-stable-map-and-gromov-convergence
  - lem-gts-tame-j-holomorphic-area-is-dirichlet-energy
  - thm-change-of-variables-for-oriented-manifold-diffeomorphisms
dependency_roles:
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-gts-stable-map-and-gromov-convergence: mathematical-premise
  lem-gts-tame-j-holomorphic-area-is-dirichlet-energy: mathematical-premise
  thm-change-of-variables-for-oriented-manifold-diffeomorphisms: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Aleksey Zinger, Notes on J-Holomorphic Maps, arXiv:1706.00331v1
      url: https://arxiv.org/pdf/1706.00331v1
      locator: Definition 1.1, printed pp. 3–4, fixed-source Gromov convergence convention
    - title: Urs Frauenfelder and Kai Zehmisch, Gromov compactness for holomorphic discs with totally real boundary conditions
      url: https://arxiv.org/pdf/1403.6139v2
      locator: §§1.3–1.5, printed pp. 3–4, stable component-tree and node conventions
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Let $X=\mathbb{CP}^1$ with its standard complex structure and normalized Fubini–Study form
$$\omega_{FS}=\frac{i}{2\pi}\frac{dz\wedge d\bar z}{(1+|z|^2)^2},\qquad \int_{\mathbb{CP}^1}\omega_{FS}=1.$$
For every integer $n\ge1$, the rational map
$$u_n(z)=z+\frac{1}{nz}=\frac{nz^2+1}{nz}$$
extends holomorphically as a degree-two map $\mathbb{CP}^1\to\mathbb{CP}^1$. Away from $z=0$ it converges to the identity map. Under the rescaling $z=w/n$ it converges to the bubble map $w\mapsto1/w$, attached to the identity component at $z=0$ and $w=\infty$. The two node values are both $0$.

## Example references

[[def-gts-stable-map-and-gromov-convergence]]

## Facts & Assumptions

**Given:** The standard complex structure on $\mathbb{CP}^1$, the displayed normalized area form, and the rational maps $u_n$.

[F1] A $J$-holomorphic map and its symplectic area use the curve-data convention. [[def-gts-symplectic-and-almost-complex-curve-data]]

[F2] A stable map is a nodal curve with holomorphic component maps, matched node values, and finite automorphism group; Gromov convergence includes rescaled component convergence and no neck-energy loss. [[def-gts-stable-map-and-gromov-convergence]]

[F3] An orientation-preserving diffeomorphism preserves the integral of a compactly supported top form. [[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]]

[F4] For the Fubini–Study compatible target metric and the standard conformal sphere metric on each domain component, the energy of each holomorphic component equals its symplectic area. [[lem-gts-tame-j-holomorphic-area-is-dirichlet-energy]]

## Verification

**Given:** The example data above and [F1]–[F3].

1.1 In the affine coordinate, $u_n=(nz^2+1)/(nz)$ has no cancellation because its numerator is $1$ at $z=0$; its rational degree is therefore two. For all target values outside the finite branch-value set, the equation $nz^2-nyz+1=0$ has two distinct roots. On the complement of the branch values, the map is a two-sheeted orientation-preserving covering. Applying [F3] on local inverse sheets and exhausting away from the finite branch set gives $\int_{\mathbb{CP}^1}u_n^*\omega_{FS}=2\int_{\mathbb{CP}^1}\omega_{FS}=2$; the omitted branch points have measure zero. [F3, given, algebra]

2.1 On every compact subset of $\mathbb{CP}^1\setminus\{0\}$, $u_n(z)=z+(nz)^{-1}$ converges with all derivatives to $u_0(z)=z$. In the rescaled coordinate $z=w/n$, $u_n(w/n)=w/n+1/w$ converges as a sphere-valued holomorphic map on compact subsets of $\mathbb{CP}^1\setminus\{\infty\}$ to $u_1(w)=1/w$. These are degree-one maps, so each has area one by the same change-of-variables calculation as step 1.1. Their node values agree: $u_0(0)=0=u_1(\infty)$. [F1, F2, step 1.1, algebra]

3.1 The two nonconstant components have trivial map-preserving automorphism groups, so the nodal map is stable. The total sequence energy equals its area $2$ by [F4], while the two component energies sum to their areas $1+1=2$. Since all remaining concentration or neck energy is nonnegative, equality leaves no energy for any additional bubble or neck; hence this rescaling is the full stable Gromov limit. [F2, F4, step 1.1, step 2.1, algebra] ∎

## Bubble-tree diagram

The edge denotes the matched node, not a map between components.

```tikz
\begin{tikzpicture}[every node/.style={draw,rounded corners,align=center}]
  \node (main) at (0,0) {\(\mathbb{CP}^1\)\\\(z\mapsto z\)};
  \node (bubble) at (3,0) {\(\mathbb{CP}^1\)\\\(w\mapsto1/w\)};
  \draw (main) -- node[above,draw=none] {\(z=0\sim w=\infty\)} (bubble);
\end{tikzpicture}
```

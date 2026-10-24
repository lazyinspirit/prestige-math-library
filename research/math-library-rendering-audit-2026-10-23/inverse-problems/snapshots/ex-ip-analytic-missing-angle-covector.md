---
id: ex-ip-analytic-missing-angle-covector
kind: example
title: "A missing-angle covector has no data-side canonical pair"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-2d-radon-transform
  - def-ip-visible-covector-for-limited-angle-data
  - def-ip-distributions-conormal-kernels-and-cotangent-relation
  - def-ip-analytic-double-fibration-transform
  - lem-ip-double-fibration-conormal-kernel
  - thm-real-analytic-inverse-and-implicit-function-theorems
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "§2.2, Theorem 2.2 proof, printed pp. 13–15; §5.1, pp. 27–29."
    - title: "Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography"
      url: "https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf"
      locator: "§1.5.1, printed pp. 34–35, visible directions for restricted Radon data."
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Let $\Theta\subset S^1$ be a nonempty proper open set of line normals, invariant under $\theta\mapsto-\theta$, and suppose $S^1\setminus\overline{\Theta}$ contains an open arc. Restrict the Euclidean Radon incidence relation to
$$
Z_\Theta=\{(\theta,s,x)\in(\Theta\times\mathbb R)\times\mathbb R^2:s=x\cdot\theta\}.
$$
Give $Z_\Theta$ the standard nowhere vanishing analytic total density $|d\theta\,ds\,dt|$, with $x=s\theta+t\theta^\perp$, and constant weight $1$. This is a properly supported analytic double fibration.
For any $x_0\in\mathbb R^2$ and any nonzero covector $\xi_0\in T^*_{x_0}\mathbb R^2$ with $\xi_0/|\xi_0|\notin\Theta$, there are no $(\theta,s)\in\Theta\times\mathbb R$ and no data covector $\eta$ such that $(\theta,s,\eta;x_0,\xi_0)\in C_{Z_\Theta}$. In particular, this object covector has no data-side canonical pair for the restricted-angle transform.

## Example references

[[def-ip-2d-radon-transform|Euclidean Radon line and normal convention]]

[[def-ip-visible-covector-for-limited-angle-data|Measured angular set and visibility]]

[[def-ip-distributions-conormal-kernels-and-cotangent-relation|Incidence cotangent relation]]

[[def-ip-analytic-double-fibration-transform|Analytic double-fibration transform]]

[[lem-ip-double-fibration-conormal-kernel|Local incidence conormal formula]]

## Facts & Assumptions

**Given:** The open antipodally symmetric set $\Theta$, the incidence submanifold $Z_\Theta$, and the invisible covector $(x_0,\xi_0)$.

[F1] [[def-ip-2d-radon-transform]]: the line with normal $\theta$ and signed offset $s$ is given by $s=x\cdot\theta$.

[F2] [[def-ip-visible-covector-for-limited-angle-data]]: a nonzero plane covector is visible exactly when its unit direction lies in $\Theta$; $\Theta$ is antipodally symmetric.

[F3] [[def-ip-distributions-conormal-kernels-and-cotangent-relation]]: $(\theta,s,\eta;x,\xi)$ belongs to the incidence relation exactly when $(\theta,s,x;\eta,-\xi)$ is a nonzero conormal to $Z_\Theta$.

[F4] [[lem-ip-double-fibration-conormal-kernel]]: if $F(\theta,s,x)=0$ defines the incidence hypersurface, its conormal covectors are scalar multiples of $dF$.

[F5] [[def-ip-analytic-double-fibration-transform]]: both incidence projections must be analytic submersions and the support condition is properness over compact object supports.

[F6] [[thm-real-analytic-inverse-and-implicit-function-theorems]]: a regular zero of a real-analytic scalar function is locally an analytic hypersurface.

## Proof

**Given:** The data in the example.

1.1 The defining function $F(\theta,s,x)=s-x\cdot\theta$ is real analytic and has $\partial_sF=1$. Thus $dF$ is surjective at every point of $Z_\Theta$, and [F6] makes $Z_\Theta$ an analytic hypersurface of dimension $3$. [F1, F6, given, algebra]

1.2 Use a local angular coordinate $\alpha$ on $S^1$, so $\partial_\alpha\theta=\theta^\perp$. The defining function $F(\theta,s,x)=s-x\cdot\theta$ has differential $ dF=ds-(x\cdot\theta^\perp)d\alpha-\theta\cdot dx. $ By [F4], a conormal covector is $\tau dF$ for a nonzero scalar $\tau$. Matching its data components and object component with the sign convention [F3] gives $ \eta_s=\tau,\qquad \eta_\alpha=-\tau x\cdot\theta^\perp,\qquad \xi=\tau\theta. $ Thus any object covector in the relation is parallel to the measured normal $\theta$. [F1, F3, F4, algebra]

2.1 A tangent vector satisfies $\dot s-\dot x\cdot\theta-x\cdot\dot\theta=0$. Given any data tangent pair $(\dot\theta,\dot s)$, choose $\dot x=(\dot s-x\cdot\dot\theta)\theta$; then $\pi_G$ has a tangent lift and is a submersion. Given any object tangent vector $\dot x$, choose $\dot\theta=0$, $\dot s=\dot x\cdot\theta$; hence $\pi_X$ is a submersion. Both maps are analytic restrictions of product projections and $4>3>2\ge2$. The displayed analytic total density is nowhere zero in these incidence coordinates. For compact $K\subset\mathbb R^2$ and compact $L\subset\Theta\times\mathbb R$, the preimage of $L$ under $\pi_G|_{\pi_X^{-1}(K)}$ is closed in $\operatorname{pr}_1(L)\times K$, which is compact because $\operatorname{pr}_1(L)\Subset\Theta$. Thus the restricted projection is proper and [F5] applies. [F5, step 1.1, algebra, choose]

3.1 If $(\theta,s,\eta;x_0,\xi_0)\in C_{Z_\Theta}$, step 1.2 implies $\xi_0/|\xi_0|=\theta$ or $-\theta$. Since $\Theta=-\Theta$, this would place $\xi_0/|\xi_0|$ in $\Theta$, contradicting the hypothesis. No such data covector exists. [F2, step 1.2, given] ∎

## Geometric diagram

The diagram chooses $\Theta$ to be two small antipodal arcs around the horizontal normals. The vertical covector $\xi_0$ lies in the open missing arc, so it cannot be parallel to a measured normal. The proof uses the conormal equation above, not the drawing.

```tikz
\begin{tikzpicture}[scale=1.1]
  \draw[->] (-1.8,0) -- (1.8,0) node[right] {$\xi_1$};
  \draw[->] (0,-1.8) -- (0,1.8) node[above] {$\xi_2$};
  \draw (0,0) circle (1.25);
  \draw[blue,very thick] (-10:1.25) arc[start angle=-10,end angle=10,radius=1.25];
  \draw[blue,very thick] (170:1.25) arc[start angle=170,end angle=190,radius=1.25];
  \draw[blue,very thick,->] (0,0) -- (0:1.25);
  \draw[blue,very thick,->] (0,0) -- (180:1.25);
  \draw[red,dashed,very thick,->] (0,0) -- (90:1.25);
  \draw[red,dashed,very thick,->] (0,0) -- (270:1.25);
  \node[blue] at (0.9,0.12) {$\Theta$};
  \node[red,right] at (0,1.27) {$\xi_0/|\xi_0|$};
  \node at (0,-1.55) {unmeasured normal direction};
\end{tikzpicture}
```

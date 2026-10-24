---
id: ex-zero-discrete-neb-residual-does-not-fix-a-continuum-path
kind: example
title: "Zero discrete force does not select a unique continuum path"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-regular-minimum-energy-path-in-a-collision-free-tube
  - alg-finite-image-string-method
  - alg-improved-tangent-climbing-neb
  - thm-gauge-fixed-stable-discrete-path-comparison
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, String method for the study of rare events"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/string.pdf"
      locator: "§II, equations (2)–(6): the MEP equation and equal-arc reparameterization"
    - title: "Xuanyu Liu, Huajie Chen, and Christoph Ortner, Convergence of the Discrete Minimum Energy Path"
      url: "https://arxiv.org/pdf/2204.07467"
      locator: "§2.1–2.3: discrete convergence requires stability and a specified discretization"
---

## Example

Prescribe $C_{\rm bad}=\varnothing$, and let $U=\mathbb R^2$ and $V\equiv0$. Every regular path from $A=(0,0)$ to $B=(1,0)$ satisfies the MEP equation, so there are infinitely many distinct continuum MEPs. For a finite string with $M=2$, both chains

$$R_1^{(0)}=(1/2,0),\qquad R_1^{(1)}=(1/2,1)$$

have equal adjacent segment lengths and zero projected force. The improved-tangent NEB ordinary force also vanishes for both. Thus their discrete residuals are exactly zero, although their interior images differ.

## Facts & Assumptions

**Given:** The zero potential, fixed endpoints $A,B$, two finite chains, and the definitions of the string, NEB, and stable path comparison.

[F1] [[def-regular-minimum-energy-path-in-a-collision-free-tube]]: a regular path is an MEP when the normal gradient vanishes; fixed endpoints are part of the path data.

[F2] [[alg-finite-image-string-method]]: the string stops when the projected-force and equal-spacing residuals are both within tolerance.

[F3] [[alg-improved-tangent-climbing-neb]]: the ordinary NEB force is projected gradient plus a tangential spring term.

[F4] [[thm-gauge-fixed-stable-discrete-path-comparison]]: a local path error conclusion requires an invertible residual Jacobian with a uniform inverse bound and other stated consistency/stability hypotheses.

## Proof

**Given:** The potential, endpoints, and finite chains in the Example.

1.1 For each $c\in\mathbb R$, $R_c(t)=(t,c\sin(\pi t))$ on $[0,1]$ is regular because its first coordinate derivative is $1$, and it has endpoints $A,B$. Since $\nabla V=0$, every normal gradient component is zero, so [F1] makes every $R_c$ an MEP. Distinct $c$ give distinct paths. [F1, given, algebra]

1.2 For $M=2$, each listed interior point is equidistant from $A$ and $B$: the two distances are $1/2$ when $R_1=(1/2,0)$ and both $\sqrt{5}/2$ when $R_1=(1/2,1)$. Thus the adjacent lengths agree. Since the gradient is zero, the string projected force is zero by [F2], and the ordinary NEB spring term is also zero by [F3]. Both chains therefore have exactly zero force and spacing residuals. [F2, F3, given, algebra]

2.1 The two chains differ in their interior image, and the continuum family in step 1.1 is nonunique. In this example the string residual map has no locally invertible Jacobian that can isolate a path: its force components vanish identically and its spacing equation alone cannot determine the two coordinates of the interior image. Thus the inverse/stability premise [F4] is absent. Independently of that missing premise, the two distinct MEPs and two zero-residual chains explicitly prove nonuniqueness. Each chain's midpoint lies on its corresponding exact MEP $R_c$, so this is not an assertion of inaccuracy relative to every MEP. Relative to the prescribed reference $R_0([0,1])$, however, the second chain's midpoint has Euclidean distance $1$ while its residual is zero. Therefore residual alone cannot select a unique continuum MEP or bound distance to that reference by an error bound that vanishes with the residual. [F4, step 1.1, step 1.2, algebra] ∎


## Remarks

The two polygonal chains below share endpoints and have equal adjacent lengths within each chain. The orange chain lies on the prescribed reference $R_0([0,1])$; the cyan chain's interior image is at distance $1$ from that reference. Both have zero projected-force, ordinary NEB-force, and spacing residuals, as computed in step 1.2. The polygonal edges illustrate the discrete chains, not the smooth continuum paths $R_c$. The proof above is independent of the picture.

```tikz
\begin{tikzpicture}[scale=3.4]
\draw[thick,cyan] (0,0)--(0.5,1)--(1,0);
\draw[thick,orange] (0,0)--(0.5,0)--(1,0);
\draw[dashed] (0.5,0.06)--(0.5,0.94);
\node[right] at (0.5,0.5) {$1$};
\node[left] at (0.23,0.5) {$\sqrt{5}/2$};
\node[right] at (0.77,0.5) {$\sqrt{5}/2$};
\node[below] at (0.25,0) {$1/2$};
\node[below] at (0.75,0) {$1/2$};
\fill (0,0) circle (1pt);
\fill (1,0) circle (1pt);
\fill[orange] (0.5,0) circle (1pt);
\fill[cyan] (0.5,1) circle (1pt);
\node[below left] at (0,0) {$A=(0,0)$};
\node[below right] at (1,0) {$B=(1,0)$};
\node[below] at (0.5,-0.16) {$R_1^{(0)}=(1/2,0)$};
\node[above] at (0.5,1) {$R_1^{(1)}=(1/2,1)$};
\end{tikzpicture}
```

---
id: ex-qftx-two-insertion-monodromy
kind: example
title: "Two-insertion KZ monodromy is a Casimir exponential"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - thm-qftx-kz-flatness
  - def-qftx-kz-connection
  - def-killing-form-of-a-semisimple-lie-algebra
dependency_roles:
  thm-qftx-kz-flatness: mathematical-premise
  def-qftx-kz-connection: mathematical-premise
  def-killing-form-of-a-semisimple-lie-algebra: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Toshitake Kohno, Monodromy representations of braid groups and Yang-Baxter equations"
      url: "https://www.numdam.org/item/10.5802/aif.1114.pdf"
      locator: "§1.1, printed pp. 141–142, for the two-point Casimir differential equation and its pure-braid monodromy convention."
    - title: "Pavel I. Etingof, Igor B. Frenkel, and Alexander A. Kirillov Jr., Lectures on Representation Theory and Knizhnik-Zamolodchikov Equations"
      url: "https://djvu.online/file/elCdJNnaapAuA"
      locator: "Lecture 8, §8.1, printed pp. 113–115, for holonomy as analytic continuation and the distinction between pure and full braid monodromy."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Let $\mathfrak g=\mathfrak{sl}_2(\mathbb C)$, let $V=\mathbb C^2$ be its standard representation with its standard Hermitian inner product, and use the Killing-form Casimir tensor $\Omega_{12}$ on $V\otimes V$. For two insertions set $w=z_1-z_2\ne0$. At the basepoint $w_*=1$, take $z_2=0$ and $z_1=w$; along a chosen logarithm branch, a horizontal section with value $v_*$ at $w_*$ is $s(w)=\exp((\Omega_{12}/\kappa)\log(w/w_*))v_*$. The positive loop $w(t)=w_*e^{2\pi i t}$, equivalently $z_1(t)=e^{2\pi i t}$ and $z_2(t)=0$, has horizontal transport

$$P_\gamma=\exp(2\pi i\Omega_{12}/\kappa).$$

For the library's first-then-second fundamental-group product, the associated left monodromy representation uses $P_\gamma^{-1}$; equivalently, $P_\gamma$ is the right monodromy action by horizontal transport. This transport need not be unitary: with $\kappa=i$, it has eigenvalue $e^{\pi/4}$.

## Example references

[[thm-qftx-kz-flatness]]

[[def-qftx-kz-connection]]

[[def-killing-form-of-a-semisimple-lie-algebra]]

## Diagram and convention

The diagram uses $w=z_1-z_2$ as the relative coordinate; the arrow indicates increasing $t$ in $w(t)=w_*e^{2\pi i t}$, and the removed origin is the collision $z_1=z_2$. It records the positive loop only; the proof below derives transport from the differential equation and does not rely on the picture.

```tikz
\begin{tikzpicture}[>=stealth,thick]
  \draw[->] (-1.35,0) -- (1.45,0) node[right] {$\operatorname{Re}w$};
  \draw[->] (0,-1.35) -- (0,1.45) node[above] {$\operatorname{Im}w$};
  \draw (0,0) circle (1);
  \fill (0,0) circle (0.045) node[below right] {$0$};
  \fill (1,0) circle (0.045) node[below right] {$w_*$};
  \draw[->] (0.707,0.707) arc[start angle=45,end angle=90,radius=1];
  \node at (-0.25,1.12) {$w(t)$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** Two insertions, $\mathfrak g=\mathfrak{sl}_2(\mathbb C)$, the standard two-dimensional representation and Hermitian inner product, $w_*=z_1-z_2\ne0$, a selected logarithm branch near $w_*$, and $\kappa\ne0$.

[F1] [[def-qftx-kz-connection]]: for two insertions, the connection is $\nabla=d-\kappa^{-1}\Omega_{12}\,dw/w$ on $\mathbb C^\times$.

[F2] [[thm-qftx-kz-flatness]]: this connection is flat; horizontal transport is the local-system monodromy, with the left-representation convention obtained by inverting path transport when loops multiply first-then-second.

[F3] [[def-killing-form-of-a-semisimple-lie-algebra]]: the form is $B(x,y)=\operatorname{tr}(\operatorname{ad}_x\operatorname{ad}_y)$.

## Verification

**Given:** [F1]–[F3] and the specified $\mathfrak{sl}_2$ representation.

1.1 The horizontal-section equation $\nabla s=0$ is $ds/dw=(\Omega_{12}/(\kappa w))s$. On a simply connected branch domain, differentiate the matrix exponential $s(w)=\exp((\Omega_{12}/\kappa)\log(w/w_*))v_*$; because its exponent is a scalar multiple of the fixed matrix $\Omega_{12}$, differentiation gives $s'(w)=\Omega_{12}s(w)/(\kappa w)$ and $s(w_*)=v_*$. [F1, given, algebra]

1.2 In the defining two-dimensional representation take $H=\mathrm{diag}(1,-1)$, $E=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, and $F=\begin{pmatrix}0&0\\1&0\end{pmatrix}$. Their brackets are $[H,E]=2E$, $[H,F]=-2F$, and $[E,F]=H$. Computing the traces in [F3] gives $B(H,H)=8$, $B(E,F)=B(F,E)=4$, and all other pairings among these basis elements zero; hence the dual basis is $H/8,F/4,E/4$. [F3, given, algebra]

2.1 The loop $w(t)=w_*e^{2\pi i t}$ changes the continued logarithm by $2\pi i$. Substitution into the solution from step 1.1 gives $P_\gamma=\exp(2\pi i\Omega_{12}/\kappa)$. [F1, step 1.1, algebra]

3.1 With the first-then-second group product, uniqueness of horizontal transport gives $P_{\alpha*\beta}=P_\beta P_\alpha$. Therefore $\rho([\gamma]):=P_\gamma^{-1}$ satisfies $\rho([\alpha][\beta])=(P_\beta P_\alpha)^{-1}=P_\alpha^{-1}P_\beta^{-1}$, so the left representation convention agrees with [F2] while the right action uses $P_\gamma$. [F2, step 2.1, algebra]

4.1 Thus $\Omega_{12}=\tfrac18H\otimes H+\tfrac14(E\otimes F+F\otimes E)$. On $e_1\otimes e_1$ it acts as $\tfrac18(e_1\otimes e_1)$, so for $\kappa=i$ the positive-loop transport in step 2.1 has eigenvalue $\exp(2\pi i(1/8)/i)=e^{\pi/4}$. A unitary operator on a finite-dimensional Hermitian space has every eigenvalue of modulus one, whereas $|e^{\pi/4}|>1$; thus this KZ monodromy is not unitary. Its inverse has eigenvalue $e^{-\pi/4}$ and is also nonunitary. [F1, step 2.1, step 1.2, algebra] ∎

---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-pe05-hydrostatic-hll-scheme.json
  precheck: n/a
id: def-pe05-hydrostatic-hll-scheme
kind: definition
title: Hydrostatic reconstruction with a dry-safe HLL flux and one-sided pressure corrections
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-pe05-shallow-water-balance-law]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "E. Audusse, F. Bouchut, M.-O. Bristeau, R. Klein, and B. Perthame, A Fast and Stable Well-Balanced Scheme with Hydrostatic Reconstruction for Shallow Water Flows"
      url: "https://publications.imp.fu-berlin.de/478/1/file_2004_siam.pdf"
      locator: "Complete 16-page paper; §2.1, equations (2.1)–(2.16), printed pp. 2051–2054."
    - title: "F. Bouchut, III. Shallow water problem – Hydrostatic reconstruction scheme"
      url: "https://www.lestudium-ias.com/sites/default/files/07_-_bouchut.pdf"
      locator: "Complete 20-page lecture; §III, equations (19)–(24), PDF pp. 8–10."
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions, Chapter 12"
      url: "https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html"
      locator: "Complete chapter; §HLL solver, middle-state conservation formula and implementation, lines 365–426."
---

## Definition

Let $\Delta x>0$ be a uniform cell width, let $i$ range over a finite chain or a periodic or bi-infinite mesh, and let $b_i$ be the bed value in cell $i$. At time level $n$, the cell state is $U_i^n=(h_i^n,m_i^n)\in K$ from [[def-pe05-shallow-water-balance-law]], with velocity $u_i^n$ and free surface $\eta_i^n=h_i^n+b_i$.

For a finite chain $i=1,\ldots,N$ with $N\ge1$, supply at each time level two ghost states $U_0^n,U_{N+1}^n\in K$ and bed values $b_0,b_{N+1}\in\mathbb R$. These are boundary inputs, used only to evaluate the faces $1/2$ and $N+1/2$; only cells $1,\ldots,N$ are updated. On a periodic mesh, identify neighboring indices periodically.

At face $i+1/2$, set
$$b_{i+1/2}^*=\max(b_i,b_{i+1}),\qquad h_{i+1/2,L}^*=\max(0,\eta_i^n-b_{i+1/2}^*),\qquad h_{i+1/2,R}^*=\max(0,\eta_{i+1}^n-b_{i+1/2}^*).$$
For $s=L,R$, set $u_{i+1/2,s}^*=u_i^n$ or $u_{i+1}^n$, respectively, when $h_{i+1/2,s}^*>0$, and set it to zero when $h_{i+1/2,s}^*=0$. Define $U_{i+1/2,s}^*=(h_{i+1/2,s}^*,h_{i+1/2,s}^*u_{i+1/2,s}^*)$ and $c_{i+1/2,s}^*=\sqrt{g h_{i+1/2,s}^*}$. The face speeds are
$$a_{L,i+1/2}=\min(0,u_{i+1/2,L}^*-c_{i+1/2,L}^*,u_{i+1/2,R}^*-c_{i+1/2,R}^*),\qquad a_{R,i+1/2}=\max(0,u_{i+1/2,L}^*+c_{i+1/2,L}^*,u_{i+1/2,R}^*+c_{i+1/2,R}^*).$$
They satisfy $a_L\le0\le a_R$. Write $F_s^*=F(U_{i+1/2,s}^*)$. The common HLL face flux is
$$\widehat F_{i+1/2}^n=\begin{cases}F_L^*,&a_{L,i+1/2}\ge0,\\F_R^*,&a_{R,i+1/2}\le0,\\\dfrac{a_{R,i+1/2}F_L^*-a_{L,i+1/2}F_R^*+a_{L,i+1/2}a_{R,i+1/2}(U_{i+1/2,R}^*-U_{i+1/2,L}^*)}{a_{R,i+1/2}-a_{L,i+1/2}},&a_{L,i+1/2}<0<a_{R,i+1/2}.\end{cases}$$
If both speeds are zero, both reconstructed states are dry and the first branch returns $(0,0)$; the middle denominator is never used in that case.

The one-sided corrected fluxes, where $L$ is the side of cell $i$ and $R$ the side of cell $i+1$, are
$$G_{i+1/2,L}^n=\widehat F_{i+1/2}^n+\left(0,\frac g2\big((h_i^n)^2-(h_{i+1/2,L}^*)^2\big)\right),\qquad G_{i+1/2,R}^n=\widehat F_{i+1/2}^n+\left(0,\frac g2\big((h_{i+1}^n)^2-(h_{i+1/2,R}^*)^2\big)\right).$$
For $\Delta t>0$, put $\lambda=\Delta t/\Delta x$ and update
$$U_i^{n+1}=U_i^n-\lambda\big(G_{i+1/2,L}^n-G_{i-1/2,R}^n\big).$$
Equivalently, with $h_{i,+}^*=h_{i+1/2,L}^*$, $h_{i,-}^*=h_{i-1/2,R}^*$, and $\widehat F$ the shared face flux,
$$U_i^{n+1}=U_i^n-\lambda(\widehat F_{i+1/2}^n-\widehat F_{i-1/2}^n)+\Delta t\,S_i^n,\qquad S_i^n=\left(0,\frac{g}{2\Delta x}\big((h_{i,+}^*)^2-(h_{i,-}^*)^2\big)\right).$$
The face-specific depth CFL condition is
$$\lambda\big(a_{R,i+1/2}-a_{L,i-1/2}\big)\le1\quad\text{for every cell }i.$$

The diagram is a wet/wet face with $b_i<b_{i+1}$ and a common rest level $\eta_0$. The dotted line marks the free surface, the solid step is the bed, and both reconstructed depths are measured from $b^*=\max(b_i,b_{i+1})$. The displayed equations specify every state and orientation used in proofs.

```tikz
\begin{tikzpicture}[x=1.1cm,y=1cm]
  \draw[->] (0,0) -- (4.5,0) node[right] {$x$};
  \draw[thick] (0,0.35) -- (2,0.35) -- (2,1.0) -- (4,1.0);
  \draw[dotted,thick] (0,1.8) -- (4,1.8) node[right] {$\eta_0$};
  \draw[dashed] (2,1.0) -- (4,1.0);
  \draw[<->] (1,1.0) -- (1,1.8) node[midway,left] {$h_L^*$};
  \draw[<->] (3,1.0) -- (3,1.8) node[midway,right] {$h_R^*$};
  \draw (2,0.1) -- (2,1.95);
  \node at (1,0.12) {$b_i$};
  \node at (3,0.75) {$b_{i+1}=b^*$};
  \node at (2,2.08) {$i+\frac{1}{2}$};
\end{tikzpicture}
```

## Remarks

The scheme uses only the cell bed values, so its discrete fluxes are defined for bed steps. A continuum source or weak-limit statement across a discontinuous bed requires a separately specified path product and is not supplied here. No entropy inequality or stiff-relaxation/asymptotic-preserving claim is part of this definition.

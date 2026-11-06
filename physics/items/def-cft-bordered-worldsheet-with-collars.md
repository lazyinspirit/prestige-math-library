---
id: def-cft-bordered-worldsheet-with-collars
kind: definition
title: Bordered analytic worldsheet with marked collars
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps:
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-smooth-collar-of-a-manifold-boundary
  - def-double-of-a-smooth-manifold-with-boundary
  - def-riemann-surface-and-holomorphic-atlas
dependency_roles:
  def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary: mathematical-premise
  def-smooth-collar-of-a-manifold-boundary: mathematical-premise
  def-double-of-a-smooth-manifold-with-boundary: mathematical-premise
  def-riemann-surface-and-holomorphic-atlas: mathematical-premise
justified_by:
  - lem-cft-reflected-boundary-charts-form-double-atlas
domain: mathematics
library: mathematics
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John Cardy, Boundary Conformal Field Theory, arXiv:hep-th/0411189v2"
      url: https://arxiv.org/pdf/hep-th/0411189v2
      locator: "§2, PDF pp. 8–9: straightened analytic boundary chart and stress-tensor gluing."
    - title: "David Tong, String Theory, University of Cambridge Part III lecture notes"
      url: https://www.damtp.cam.ac.uk/user/tong/string/string.pdf
      locator: "§4.7, printed pp. 108–109: boundary gluing and the doubling convention."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

A **bordered analytic worldsheet with marked collars** consists of a compact, not necessarily connected, oriented smooth real two-manifold $\Sigma$ with nonempty boundary $\partial\Sigma\ne\emptyset$, together with an inward smooth collar embedding $c:\partial\Sigma\times[0,\epsilon)\to\Sigma$ for some $\epsilon>0$, an interior conformal atlas, an analytic half-disk boundary atlas compatible with it, a finite ordered list $P=(p_1,\ldots,p_m)$ of distinct boundary marks, and a finite ordered family of parametrized boundary arcs. The collar satisfies $c(p,0)=p$ and $c(\partial\Sigma\times(0,\epsilon))\subset\operatorname{int}\Sigma$. An orientation is a continuous choice of orientations on tangent planes; the boundary orientation is the one for which an outward normal followed by a positive boundary tangent gives the surface orientation.

The interior charts cover $\operatorname{int}\Sigma$, and the boundary charts cover $\partial\Sigma$. An interior chart is an orientation-preserving coordinate map from an open subset of $\operatorname{int}\Sigma$ to an open subset of $\mathbb C$; transitions between interior charts are biholomorphic. A boundary chart is a homeomorphism $\psi:U\to V$ from a relatively open subset $U\subseteq\Sigma$ to a relatively open subset $V$ of $\overline{\mathbb H}=\{z:\operatorname{Im}z\geq0\}$, with $\psi(U\cap\partial\Sigma)=V\cap\mathbb R$ and $\psi(U\cap\operatorname{int}\Sigma)=V\cap\mathbb H$. On the interior, every transition between an interior chart and the restriction of a boundary chart is holomorphic and orientation-preserving. For any two boundary charts, each transition on the upper-half-plane overlap has a specified holomorphic extension to a neighborhood of every seam point in that overlap; this extension maps the real interval to the real axis, has nonzero complex derivative there, and maps the designated upper side to the upper side. These clauses are the analytic boundary compatibility data; they do not follow from the existence of a smooth collar.

Each parametrized arc is a $C^\infty$ embedding $\gamma:[0,1]\to\partial\Sigma$ with nonzero derivative (one-sided at the endpoints), with both endpoints in $P$ and with orientation given by increasing parameter. The family order is part of the data; no disjointness between distinct arcs is assumed unless separately declared.

The **labelled double** is the quotient topological space $D\Sigma=(\Sigma_+\sqcup\Sigma_-)/\sim$, where $(p,+)\sim(p,-)$ exactly when $p\in\partial\Sigma$, with the quotient topology. This is the quotient supplied by [[def-double-of-a-smooth-manifold-with-boundary]]; that supplier does not supply a smooth structure for the present analytic charts. For each interior chart $\phi:U\to W\subset\mathbb C$, use the chart $[p,+]\mapsto\phi(p)$ on the plus copy and the conjugate chart $[p,-]\mapsto\overline{\phi(p)}$ on the minus copy. For each boundary chart $\psi:U\to V$, use the signed chart
$$\widehat\psi([p,+])=\psi(p),\qquad \widehat\psi([p,-])=\overline{\psi(p)}$$
on the reflected pair of chart domains. The two values agree at the seam because $\psi(p)\in\mathbb R$ for $p\in\partial\Sigma$. Its image is $V\cup\overline V$, an open subset of $\mathbb C$. These interior and signed charts are the candidate double charts. [[lem-cft-reflected-boundary-charts-form-double-atlas]] proves that they form a holomorphic atlas and therefore define the smooth structure on $D\Sigma$. The involution $\rho:D\Sigma\to D\Sigma$ exchanges the two copy labels; in every plus/minus interior chart pair and every signed chart it is $z\mapsto\bar z$.

Boundary conditions, stress tensors, boundary-changing fields, and defect data are not part of this surface definition. The item specifies geometric data and asserts no CFT or path-integral existence.

## Definition references

[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]

[[def-smooth-collar-of-a-manifold-boundary]]

[[def-double-of-a-smooth-manifold-with-boundary]]

[[def-riemann-surface-and-holomorphic-atlas]]

## Remarks

The smooth atlas, collar embedding, and labelled quotient use the exact imported definitions above. The imported smooth-double item is used only for the labelled quotient and its topology; the analytic signed and conjugated interior charts, rather than that item, define the double's smooth structure after the adjacent lemma proves their compatibility. The global collar is smooth and is not required to be analytic or to agree with a signed analytic chart. The arcs have specified compact domains, regularity, endpoints, and orientation.

The two cited CFT treatments support the half-disk and doubling conventions. They do not prove the existence of a CFT boundary condition or a convergent functional measure.

```tikz
\begin{tikzpicture}[scale=0.85]
  \fill[blue!12] (0,0) rectangle (3,1.5);
  \fill[red!12] (0,-1.5) rectangle (3,0);
  \draw[thick] (0,0) -- (3,0);
  \draw[thick] (0,0) rectangle (3,1.5);
  \draw[thick] (0,-1.5) rectangle (3,0);
  \node at (1.5,0.8) {$\Sigma_+\ (t\geq0)$};
  \node at (1.5,-0.8) {$\Sigma_-\ (t\leq0)$};
  \node[anchor=west] at (3.15,0) {$\partial\Sigma\ (t=0)$};
  \draw[->] (3.8,1.0) -- (3.8,-1.0) node[midway,right] {$\rho$};
\end{tikzpicture}
```

The diagram depicts the two labelled copies, their signed normal coordinate, the common seam, and copy exchange. The definition and proof of seam compatibility are the signed charts and transition conditions, not the picture.

---
id: def-it-finite-multiterminal-lossy-code
kind: definition
title: "Finite-alphabet multiterminal lossy source code"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-it-finite-iid-multisource
  - def-it-information-units-and-logarithm-base
  - def-it-single-letter-distortion-and-block-distortion
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; encoders and decoder are functions on finite sets."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, author lecture notes"
      url: "https://arxiv.org/pdf/1001.3404v3"
      locator: "Lecture 13, distributed lossy source coding model and Berger-Tung inner bound, pp. 1–4."
    - title: "João Barros, Reachback Communication in Wireless Sensor Networks, doctoral dissertation"
      url: "https://mediatum.ub.tum.de/doc/601579/601579.pdf"
      locator: "Chapter 4, §4.2.1, printed pp. 66–68, finite multiterminal source model and code."
---

## Definition

Fix $k\ge2$ and a finite IID source vector $(X_{1,t},\ldots,X_{k,t})_{t\ge1}$ with law $P_{X_1\cdots X_k}$, as in [[def-it-finite-iid-multisource]]. For each $i$, let $\widehat{\mathcal X}_i$ be a finite nonempty reproduction alphabet and let $d_i:\mathcal X_i\times\widehat{\mathcal X}_i\to[0,d_{i,\max}]$ be finite and bounded.

A length-$n$ fixed-length multiterminal lossy code consists of separate deterministic encoders
$$f_{i,n}:\mathcal X_i^n\to[M_i]\quad (1\le i\le k)$$
and one deterministic common decoder
$$g_n:\prod_{i=1}^k[M_i]\to\prod_{i=1}^k\widehat{\mathcal X}_i^n.$$
Write $\widehat X_i^n$ for the $i$th reconstruction and define its expected per-letter distortion by $\Delta_{i,n}:=\mathbb E[n^{-1}\sum_{t=1}^n d_i(X_{i,t},\widehat X_{i,t})]$. Encoder $i$ has rate $n^{-1}\ln M_i$ nats per source symbol. A vector $(R_1,\ldots,R_k)$ is achievable at distortions $(D_1,\ldots,D_k)$ when there is an increasing sequence of blocklengths with each rate limsup at most $R_i$ and each distortion limsup at most $D_i$. The operational rate-distortion region is the closure of these achievable vectors.

## Remarks

No encoder observes another encoder's source block. The common decoder receives all message indices and outputs one reconstruction sequence for each source.

The diagram shows the first and last encoder branches; when $k>2$, the intermediate branches have the same form. Each wire into the common decoder carries $m_i=f_{i,n}(X_i^n)\in[M_i]$, where $[M_i]$ is a message alphabet of cardinality $M_i$. The decoder acts on the full tuple $(m_1,\ldots,m_k)$ and returns $(\widehat X_1^n,\ldots,\widehat X_k^n)$.

```tikz
\begin{tikzpicture}[>=stealth]
\node (x1) at (0,1.2) {$X_1^n$};
\node (xk) at (0,-1.2) {$X_k^n$};
\node[draw,minimum width=1.3cm,minimum height=0.8cm] (f1) at (2,1.2) {$f_{1,n}$};
\node[draw,minimum width=1.3cm,minimum height=0.8cm] (fk) at (2,-1.2) {$f_{k,n}$};
\node at (0,0) {$\vdots$};
\node at (2,0) {$\vdots$};
\node[draw,minimum width=1.3cm,minimum height=3.4cm] (g) at (6,0) {$g_n$};
\draw[->] (x1) -- (f1);
\draw[->] (xk) -- (fk);
\draw[->] (f1.east) -- node[above] {$m_1\in[M_1]$} (5.35,1.2);
\draw[->] (fk.east) -- node[above] {$m_k\in[M_k]$} (5.35,-1.2);
\node at (4,0) {$\vdots$};
\draw[->] (g.east) -- (8,0);
\node[right] at (8,0) {$(\widehat X_1^n,\ldots,\widehat X_k^n)$};
\end{tikzpicture}
```

Here $X_i^n\in\mathcal X_i^n$, and the decoder output lies in $\prod_{i=1}^k\widehat{\mathcal X}_i^n$. The wires depict data flow, with no source access between encoder branches; the source blocks may still be correlated under the given joint law.

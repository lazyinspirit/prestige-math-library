---
id: def-string-plumbing-propagator-and-long-tube
kind: definition
title: String channel propagator on a plumbing collar
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 8
domain: physics
physical_scope: "Local closed or open channel factor on one plumbing collar with declared matter Virasoro/intercept convention; no complete propagator sum or global compactification is asserted."
deps:
  - def-string-vertex-operator-and-covariant-insertion
  - def-string-punctured-moduli-amplitude-form
  - def-cft-plumbing-and-sewing-parameter
dependency_roles:
  def-string-vertex-operator-and-covariant-insertion: formulation-prerequisite
  def-string-punctured-moduli-amplitude-form: formulation-prerequisite
  def-cft-plumbing-and-sewing-parameter: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Edward Witten, Superstring Perturbation Theory via Super Riemann Surfaces: An Overview"
      url: "https://arxiv.org/pdf/1304.2832v4"
      locator: "§§3.2.1–3.2.2, PDF pp. 31–35, q-powers, state insertions, long tubes, and physical poles."
    - title: "Edward Witten, Notes on Super Riemann Surfaces and Their Moduli"
      url: "https://arxiv.org/pdf/1209.2459v5"
      locator: "§6.1–6.2, PDF pp. 58–70, NS/R degeneration channels and boundary limitations."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Use the CFT plumbing relation $zw=q$ and a specified nondegenerate state pairing. In a closed bosonic channel, let $L_0^m,\bar L_0^m$ denote matter conformal weights and fix intercepts $a,\bar a$ (equal to $1$ in the critical bosonic convention). Define the local collar contribution for a state pair by
$$\frac{d^2q}{|q|^2}\,q^{L_0^m-a}\bar q^{\bar L_0^m-\bar a},\qquad d^2q=d(\operatorname{Re}q)d(\operatorname{Im}q),$$
with a branch of $\log q$ fixed on the collar chart. For an open channel use a real plumbing parameter $0<q<\epsilon$ and $dq/q\,q^{L_0^m-a}$. The full local channel is the state-pairing sum of these terms only when that sum is declared complete and converges as required by the chosen sewing input. Set $t=-\log|q|$; this is the logarithmic long-tube coordinate. For an RNS sector, the chosen state/picture convention must supply its own $L_0$ and intercept; the bosonic value is not silently reused.

The following schematic records only the two local coordinate disks and their collar identification; it does not depict or assert a global compactified moduli space.

```tikz
\begin{tikzpicture}[>=stealth,scale=1]
  \draw[thick] (-2,0) circle (0.85);
  \draw[thick] (2,0) circle (0.85);
  \draw[fill=white] (-1.15,0) circle (0.25);
  \draw[fill=white] (1.15,0) circle (0.25);
  \draw[<->,thick] (-0.9,0) -- (0.9,0) node[midway,above] {$zw=q$};
  \node at (-2,-1.2) {component $L$};
  \node at (2,-1.2) {component $R$};
  \node at (-1.15,0) [above left] {$z$};
  \node at (1.15,0) [above right] {$w$};
\end{tikzpicture}
```

The circles indicate punctured components with small coordinate disks removed; the double arrow labels the annular collar identification from Plumbing family for punctured Riemann surfaces. No amplitude proof below relies on this schematic.

## Definition references

[[def-cft-plumbing-and-sewing-parameter]]

## Facts & Assumptions

**Given:** A single node neighborhood, the plumbing coordinate and its branch, a declared matter $L_0$ and intercept, the complete sector/pairing when a state sum is used, and the local amplitude form.

[F1] [[def-cft-plumbing-and-sewing-parameter]]: near the node, the local analytic family is $zw=q$; its geometric parameter is $q$, while powers/logarithms require a separately declared branch.

[F2] [[def-string-punctured-moduli-amplitude-form]] is chartwise and requires the correlator, vertex, ghost, and gauge-fixing inputs to be declared.

[F3] [[def-string-vertex-operator-and-covariant-insertion]] fixes the local conformal weights of the state insertions.

## Proof

1.1 The cylinder coordinate is $t=-\log r$ for $q=re^{i\theta}$, so $r=e^{-t}$ and $dr/r=-dt$. Writing $q^{\Delta}\bar q^{\bar\Delta}=r^{\Delta+\bar\Delta}e^{i\theta(\Delta-\bar\Delta)}$, where $\Delta=L_0^m-a$ and $\bar\Delta=\bar L_0^m-\bar a$, the positive collar measure becomes $dt\,d\theta\,e^{-t(\Delta+\bar\Delta)}e^{i\theta(\Delta-\bar\Delta)}$ with bounds reversed from $r\in(0,\epsilon)$ to $t\in(-\log\epsilon,\infty)$. [given, F1, algebra]

2.1 Write $d=\Delta-\bar\Delta$. On the angular branch $0\le\theta<2\pi$, the angular integral is $2\pi$ if $d=0$, and $(e^{2\pi i d}-1)/(id)$ if $d\ne0$. Thus it projects onto the level-matched sector $d=0$ only when every state's shifted spin difference $d$ is an integer, as required for a single-valued closed-channel factor. On a general branched channel allowed by the Definition no such projection is asserted; for example $d=1/2$ gives $4i$. In the integer-spin case the surviving long-cylinder factor is $e^{-t(\Delta+\bar\Delta)}$. For an open real collar the same substitution gives $dq/q=-dt$, so its factor is $dt\,e^{-t(L_0^m-a)}$. The state sum, analytic continuation, and Feynman $+i0$ prescription remain instance-specific inputs, not consequences of this coordinate change. [given, F1, F2, F3, step 1.1, algebra] ∎

## Remarks

The CFT plumbing carrier is draft, and its global analytic sewing consequences are not used as established facts here. In the bosonic massless channel $L_0^m=\bar L_0^m=1$ with $a=\bar a=1$, so the radial collar measure is $d^2q/|q|^2$; convergence then depends on the state coefficient and regulator.

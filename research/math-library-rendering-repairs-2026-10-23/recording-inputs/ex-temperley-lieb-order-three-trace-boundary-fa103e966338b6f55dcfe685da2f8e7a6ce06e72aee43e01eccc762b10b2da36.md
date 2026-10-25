---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-temperley-lieb-order-three-trace-boundary.json
  precheck: pass
id: ex-temperley-lieb-order-three-trace-boundary
kind: example
title: "At q squared of order three, TL2 is semisimple with a degenerate Jones trace"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - def-temperley-lieb-diagram-category
  - def-temperley-lieb-normalized-markov-trace-by-closure
  - lem-temperley-lieb-closure-trace-is-cyclic-and-markov
  - lem-temperley-lieb-generators-satisfy-local-relations
  - thm-temperley-lieb-diagram-category-laws
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§2, printed pp. 2–3: the degenerate trace at n=ℓ−1 although TL_{ℓ−1} is semisimple."
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§4, Corollary 4.8 and the TL2 exceptional example, PDF pp. 20–21."
---

## Example

Take $q=e^{i\pi/3}$, so $q^2$ has order $\ell=3$, $\delta=q+q^{-1}=1$, and $n=2=\ell-1$. The algebra $\mathrm{TL}_2(\mathbb C,1)$ is semisimple, but its normalized closure trace form is degenerate.

## Diagram

In the left panel the solid top cap and bottom cup are the basis diagram $u=d_1$. The right panel adds the exterior closure arcs in dashed blue; each joins top point $i$ to bottom point $i$. Thus the four arcs form one closed component, so $c(u)=1$ in the closure-trace definition. The drawing records the matching graph only; the algebra and trace calculations below prove the claims independently.

```tikz
\begin{tikzpicture}[x=1.3cm,y=1.3cm,font=\large,line width=0.8pt,baseline=(current bounding box.center)]
  \fill (0,1) circle (1.5pt); \fill (1,1) circle (1.5pt);
  \fill (0,-1) circle (1.5pt); \fill (1,-1) circle (1.5pt);
  \draw (0,1) to[out=90,in=90] (1,1);
  \draw (0,-1) to[out=-90,in=-90] (1,-1);
  \node at (0.5,0) {$u$};
  \node at (0.5,-1.65) {basis diagram};

  \fill (5,1) circle (1.5pt); \fill (6,1) circle (1.5pt);
  \fill (5,-1) circle (1.5pt); \fill (6,-1) circle (1.5pt);
  \draw (5,1) to[out=90,in=90] (6,1);
  \draw (5,-1) to[out=-90,in=-90] (6,-1);
  \draw[dashed,blue] (5,1) to[out=180,in=180] (5,-1);
  \draw[dashed,blue] (6,1) to[out=0,in=0] (6,-1);
  \node at (5.5,-1.65) {closed graph: one component};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The rank-two diagram algebra with generator $u=d_1$ and loop parameter $\delta=1$.

[F1] The diagram basis of $\mathrm{TL}_2$ is $\{1,u\}$; stacking gives $u^2=\delta u$, and the closure trace is normalized by $\tau_2(1)=1$ ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-category-laws]], [[lem-temperley-lieb-generators-satisfy-local-relations]], [[def-temperley-lieb-normalized-markov-trace-by-closure]]).

[F2] The closure trace satisfies $\tau_2(u)=\delta^{-1}\tau_1(1)$ ([[lem-temperley-lieb-closure-trace-is-cyclic-and-markov]]).

## Verification

**Given:** $q=e^{i\pi/3}$, $\delta=1$, and the basis $\{1,u\}$.

1.1 The elements $u$ and $1-u$ are nonzero idempotents: $u^2=u$, $(1-u)^2=1-u$, and $u(1-u)=(1-u)u=0$ by [F1]. They sum to $1$ and are linearly independent, so the two-dimensional algebra is $\mathbb C u\oplus\mathbb C(1-u)\cong\mathbb C\times\mathbb C$, hence semisimple. [F1, given, algebra]

2.1 By [F2], $\tau_2(u)=1$, while $\tau_2(1)=1$. The trace-pairing matrix in the basis $\{1,u\}$ is therefore $$\begin{pmatrix}\tau_2(1)&\tau_2(u)\\ \tau_2(u)&\tau_2(u^2)\end{pmatrix} =\begin{pmatrix}1&1\\1&1\end{pmatrix},$$ whose nonzero vector $1-u$ pairs to zero with both basis vectors. Thus the trace form is degenerate although the algebra is semisimple. [F1, F2, step 1.1, algebra] ∎

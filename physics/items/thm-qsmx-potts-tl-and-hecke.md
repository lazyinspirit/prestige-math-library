---
id: thm-qsmx-potts-tl-and-hecke
kind: theorem
domain: mathematics
library: physics
title: "Potts local algebra and braid quotient"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - def-qsmx-quantum-potts-hamiltonian
  - def-potts-open-chain-clock-shift-representation
  - lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb
  - def-temperley-lieb-generator-presentation
  - def-normalized-type-a-hecke-algebra-and-its-bar-involution
  - thm-the-symmetric-group-has-the-coxeter-presentation
dependency_roles:
  def-qsmx-quantum-potts-hamiltonian: mathematical-premise
  def-potts-open-chain-clock-shift-representation: mathematical-premise
  lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb: mathematical-premise
  def-temperley-lieb-generator-presentation: mathematical-premise
  def-normalized-type-a-hecke-algebra-and-its-bar-involution: mathematical-premise
  thm-the-symmetric-group-has-the-coxeter-presentation: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "A. Nichols, The Temperley-Lieb algebra and its generalizations in the Potts and XXZ models, §2.1.2–2.1.4"
      url: https://arxiv.org/pdf/hep-th/0509069
      locator: "§2.1.2–2.1.4, equations (2.1), (2.4), (2.6)–(2.10), PDF pp. 3–6: loop normalization and Potts matrix representations."
    - title: "D. Penneys, Exercises in Quantum Algebra, Chapter 2 §§2.1.1–2.1.3"
      url: https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf
      locator: "Chapter 2, §§2.1.1–2.1.3, PDF pp. 5–8: algebraic and diagrammatic Temperley–Lieb normalizations, loop factor, and generator correspondence."
    - title: "Jan de Gier and Pavel Pyatov, Factorised solutions of Temperley-Lieb qKZ equations on a segment, §2.1"
      url: https://webdoc.sub.gwdg.de/ebook/serien/e/mpi_mathematik/2008/5.pdf
      locator: "§2.1, Definition 1, PDF pp. 3–4, equation (2.1): type-A Hecke quadratic, braid and distant relations for nonzero q; q=1 specialization."
---

## Statement

Let $Q\in\{2,3,4\}$, $L\geq1$, $\delta:=\sqrt Q$, and let $q\in\mathbb C\setminus\{0\}$ satisfy $q+q^{-1}=\delta$. Use the $2L-1$ open-chain operators $e_i$ defined for this Potts-clock chain, and put $g_i:=qI-e_i$ for $1\leq i\leq2L-1$. Then $u_i\mapsto e_i$ represents the rank-$2L$ Temperley-Lieb algebra $P_{2L}(\mathbb C,\delta)$, and
$$(g_i-qI)(g_i+q^{-1}I)=0,\qquad g_ig_{i+1}g_i=g_{i+1}g_ig_{i+1},\qquad g_ig_j=g_jg_i\quad(|i-j|>1).$$
These are the type-A Hecke relations in the normalized generator convention after the coefficient specialization $v\mapsto q^{-1}$. The specified clock-shift model selects $q=e^{i\pi/4},e^{i\pi/6},1$ for $Q=2,3,4$, respectively. At $Q=4$, $q=1$ and the same operators $g_i=I-e_i$ satisfy the symmetric-group Coxeter relations, so they define an action of $S_{2L}$. No faithfulness, semisimplicity, or unitarity is asserted.

## Statement references

[[def-qsmx-quantum-potts-hamiltonian]]

[[def-potts-open-chain-clock-shift-representation]]

[[def-temperley-lieb-generator-presentation]]

[[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]

[[thm-the-symmetric-group-has-the-coxeter-presentation]]

## Facts & Assumptions

**Given:** $Q\in\{2,3,4\}$, integer $L\geq1$, $\delta=\sqrt Q$, and $q\in\mathbb C\setminus\{0\}$ with $q+q^{-1}=\delta$.

[A1] The parameter and chain-length hypotheses are exactly those in the Statement.

[F1] [[def-qsmx-quantum-potts-hamiltonian]] and [[def-potts-open-chain-clock-shift-representation]]: the space is $\mathcal H_{Q,L}=(\mathbb C^Q)^{\otimes L}$; the local operators are $e_{2j-1}=\sqrt Q\,P_j$ and $e_{2j}=\sqrt Q\,D_{j,j+1}$, equivalently the cyclic clock-shift sums; the open endpoints have $2L-1$ generators, and the selected $q$ values are $e^{i\pi/4},e^{i\pi/6},1$ for $Q=2,3,4$.

[F2] [[lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb]]: for each $Q\in\{2,3,4\}$, $e_i^2=\sqrt Q\,e_i$, $e_ie_{i+1}e_i=e_i=e_{i+1}e_ie_{i+1}$, and $e_ie_j=e_je_i$ when $|i-j|>1$; its chosen $q$ values satisfy $\sqrt Q=q+q^{-1}$.

[F3] [[def-temperley-lieb-generator-presentation]]: $P_{2L}(\mathbb C,\delta)$ has generators $u_1,\ldots,u_{2L-1}$ with exactly the quadratic, adjacent triple-product, and distant-commutation relations in [F2].

[F4] [[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]: over $\mathbb Z[v^{\pm1}]$, its generator satisfies $H_i^2=1+(v^{-1}-v)H_i$ and the braid and distant-commutation relations; after the coefficient map $v\mapsto q^{-1}$ this quadratic is $(H_i-q)(H_i+q^{-1})=0$.

[F5] [[thm-the-symmetric-group-has-the-coxeter-presentation]]: the adjacent transpositions of $S_{2L}$ have relations $s_i^2=1$, $s_is_{i+1}s_i=s_{i+1}s_is_{i+1}$, and distant commutation, and these relations present $S_{2L}$.

## Proof

1.1 By [F2], every defining relation of $P_{2L}(\mathbb C,\delta)$ is satisfied by the operators $e_i$; the quotient presentation in [F3] therefore gives the stated Temperley-Lieb representation. [A1, F2, F3, algebra]

1.2 For each $i$, $g_i-qI=-e_i$ and $g_i+q^{-1}I=\delta I-e_i$. Hence $$(g_i-qI)(g_i+q^{-1}I)=-e_i(\delta I-e_i)=e_i^2-\delta e_i=0$$ by [F2] and $\delta=q+q^{-1}$. This is the Hecke quadratic relation in [F4]'s normalization. [A1, F2, F4, algebra]

1.3 For adjacent $i,i+1$, expand with $e=e_i$ and $f=e_{i+1}$. Using $e^2=\delta e$, $f^2=\delta f$, $efe=e$, and $fef=f$ from [F2], direct multiplication gives $$g_ig_{i+1}g_i-g_{i+1}g_ig_{i+1}=(-q^2+q\delta-1)(e_i-e_{i+1}).$$ Since [A1] gives $q\delta=q(q+q^{-1})=q^2+1$, this difference is zero. [A1, F2, algebra]

1.4 If $|i-j|>1$, [F2] gives $e_ie_j=e_je_i$, so their affine combinations $g_i=qI-e_i$ and $g_j=qI-e_j$ commute. [F2, algebra]

2.1 When $Q=4$, [F1] selects $q=1$ and $\delta=2$. Then $g_i=I-e_i$ and $$g_i^2=(I-e_i)^2=I-2e_i+e_i^2=I$$ by [F2]. Steps 1.3–1.4 give the adjacent braid and distant-commutation relations. These are exactly [F5]'s Coxeter presentation, so the assignment of adjacent transpositions of $S_{2L}$ to the $g_i$ defines a group action. This does not assert that the action is faithful. [F1, F2, F5, step 1.3, step 1.4, algebra] ∎

## Remarks

The local matrices $e_i$ are Hermitian projectors scaled by $\sqrt Q$, but this does not make $g_i=qI-e_i$ a star representation when $q$ is non-real. The $Q=2,3$ braid and Hecke relations above are algebraic statements only; no semisimplicity, faithfulness, integrability, or unitary deformation follows from them. The $Q=4$ symmetric-group action is a separate finite representation, not a claim about the dimension or equivalence of any other Potts or spin representation.

The first diagram uses the Temperley-Lieb rectangle convention: boundary points are read left to right, composition stacks bottom to top, and each closed loop is assigned the scalar $\delta$. The second diagram reads braid words bottom to top. At each crossing, the right-to-left strand is the over-strand: its white underlay opens a gap in the other strand, then its black centerline is drawn across that gap. Both diagrams illustrate conventions only; the proofs above are algebraic.

```tikz
\begin{tikzpicture}[baseline=-.5ex,scale=.75]
  \draw (0,1.5) .. controls (0,.85) and (1,.85) .. (1,1.5);
  \draw (0,0) .. controls (0,.65) and (1,.65) .. (1,0);
  \fill (0,0) circle (2pt);
  \fill (1,0) circle (2pt);
  \fill (0,1.5) circle (2pt);
  \fill (1,1.5) circle (2pt);
  \node at (.5,-.45) {$e_i$};
  \node[above] at (.5,1.5) {two adjacent boundary points};
\end{tikzpicture}
```

```tikz
\begin{tikzpicture}[baseline=-.5ex,x=.55cm,y=.48cm]
  \draw[thick] (0,0)--(1,1)--(2,2)--(2,3);
  \draw[thick] (1,0)--(0,1)--(0,2)--(1,3);
  \draw[thick] (2,0)--(2,1)--(1,2)--(0,3);
  \draw[white,line width=3pt] (.65,.35)--(.35,.65);
  \draw[thick] (.65,.35)--(.35,.65);
  \draw[white,line width=3pt] (1.65,1.35)--(1.35,1.65);
  \draw[thick] (1.65,1.35)--(1.35,1.65);
  \draw[white,line width=3pt] (.65,2.35)--(.35,2.65);
  \draw[thick] (.65,2.35)--(.35,2.65);
  \node at (1,-.45) {$g_i g_{i+1}g_i$};
  \begin{scope}[xshift=2.4cm]
    \draw[thick] (0,0)--(0,1)--(1,2)--(2,3);
    \draw[thick] (1,0)--(2,1)--(2,2)--(1,3);
    \draw[thick] (2,0)--(1,1)--(0,2)--(0,3);
    \draw[white,line width=3pt] (1.65,.35)--(1.35,.65);
    \draw[thick] (1.65,.35)--(1.35,.65);
    \draw[white,line width=3pt] (.65,1.35)--(.35,1.65);
    \draw[thick] (.65,1.35)--(.35,1.65);
    \draw[white,line width=3pt] (1.65,2.35)--(1.35,2.65);
    \draw[thick] (1.65,2.35)--(1.35,2.65);
    \node at (1,-.45) {$g_{i+1}g_i g_{i+1}$};
  \end{scope}
\end{tikzpicture}
```

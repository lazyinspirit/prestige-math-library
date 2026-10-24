---
id: ex-b2-unequal-parameter-kl-basis-and-cell-edges
kind: example
title: A B2 unequal-parameter KL basis and four left-cell transitions
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-arbitrary-rank-coxeter-system-and-bruhat-order, def-unequal-parameter-weight-function-and-coefficient-order, thm-arbitrary-rank-finite-parabolics-and-bruhat-subword, lem-simple-generator-weights-extend-to-a-weight-function, def-unequal-parameter-coxeter-hecke-algebra, lem-unequal-parameter-hecke-standard-basis-and-bar-triangularity, thm-unequal-parameter-kazhdan-lusztig-basis, def-unequal-parameter-cells-and-cell-quotients]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "None; all calculations are in the finite dihedral group I2(4)."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters, revised arXiv text (2014)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§§3.1, 5.1–5.2, 7.4–7.6 and 8.8, PDF pp. 22 and 27–29, 32–38: weighted rank-two KL conventions and cell transitions."
    - title: "Anders Björner and Francesco Brenti, Combinatorics of Coxeter Groups, GTM 231 (2005)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "§§1.4–1.5 and 2.1–2.2, printed pp. 17–20 and 27–35: the dihedral reduced words and Bruhat subword intervals."
---

## Example

Let $W=I_2(4)=\langle s,t\mid s^2=t^2=1,\ (st)^4=1\rangle$, and put $L(s)=1$, $L(t)=2$. In $H_A(W,L)$, with $A=\mathbb Z[v,v^{-1}]$, set
$$C_s=T_s+v^{-1},\qquad C_t=T_t+v^{-2}.$$
Then
$$C_{st}=C_sC_t=T_{st}+v^{-2}T_s+v^{-1}T_t+v^{-3},\qquad C_{ts}=C_tC_s=T_{ts}+v^{-1}T_t+v^{-2}T_s+v^{-3},\qquad C_s^2=(v+v^{-1})C_s,\qquad C_t^2=(v^2+v^{-2})C_t.$$
The cell convention is that $x\leftarrow_L y$ when $C_x$ has nonzero coefficient in $C_rC_y$ for some $r\in\{s,t\}$; the diagram below uses a directed edge $y\to x$ for this transition. It records the four transitions $1\to s$, $1\to t$, $s\to ts$, and $t\to st$. It does not assert a complete classification of the $I_2(4)$ cells.

```tikz
\begin{tikzpicture}[>=stealth, node distance=1.65cm]
  \node[circle,draw,inner sep=2.5pt] (s) at (0,0) {$s$};
  \node[circle,draw,inner sep=2.5pt] (t) at (2,0) {$t$};
  \draw (s) -- node[above] {$m(s,t)=4$} (t);

  \node[circle,draw,inner sep=2.5pt] (e) at (0,-1.7) {$1$};
  \node[circle,draw,inner sep=2.5pt] (a) at (2,-1.7) {$s$};
  \node[circle,draw,inner sep=2.5pt] (b) at (4,-1.7) {$ts$};
  \node[circle,draw,inner sep=2.5pt] (c) at (0,-3.3) {$t$};
  \node[circle,draw,inner sep=2.5pt] (d) at (2,-3.3) {$st$};
  \draw[->] (e) -- node[above] {$C_s\cdot$} (a);
  \draw[->] (a) -- node[above] {$C_t\cdot$} (b);
  \draw[->] (e) -- node[left] {$C_t\cdot$} (c);
  \draw[->] (c) -- node[above] {$C_s\cdot$} (d);
\end{tikzpicture}
```

The top edge is the Coxeter graph, labelled by its braid length. In the lower directed graph, an edge labelled $C_r\cdot$ means left multiplication by $C_r$; the source is $y$, the target is $x$, and $C_x$ has coefficient $1$ in the product $C_rC_y$. The equations in the proof establish each edge directly, so the diagram is only a summary.

## Facts & Assumptions

**Given:** The Coxeter system $I_2(4)$, the weights $L(s)=1,L(t)=2$, and the weighted KL and cell conventions in the Statement.

[F1] [[def-arbitrary-rank-coxeter-system-and-bruhat-order]], [[thm-arbitrary-rank-finite-parabolics-and-bruhat-subword]], and [[lem-simple-generator-weights-extend-to-a-weight-function]]: the Coxeter presentation defines length and Bruhat order; finite-generator parabolics preserve lengths and Bruhat order has the reduced-subword description; simple labels extend exactly when finite odd edges have equal labels.

[F2] [[def-unequal-parameter-coxeter-hecke-algebra]] and [[lem-unequal-parameter-hecke-standard-basis-and-bar-triangularity]]: the quadratic relation is $T_r^2=(v^{L(r)}-v^{-L(r)})T_r+1$, and the standard elements form a basis.

[F3] [[thm-unequal-parameter-kazhdan-lusztig-basis]]: the KL basis is the unique bar-invariant basis triangular below Bruhat order, with negative-exponent lower coefficients and the stated positive-weight simple-generator normalization.

[F4] [[def-unequal-parameter-cells-and-cell-quotients]]: $x\leftarrow_L y$ exactly when the coefficient of $C_x$ in $C_rC_y$ is nonzero for a simple generator $r$.

## Verification

**Given:** The data in the Statement.

1.1 Since $m(s,t)=4$ is even, the weight extension criterion [F1] permits $L(s)=1,L(t)=2$. Put $r=st$. The presentation gives $t=sr$ and $srs=ts=r^{-1}$. Hence every word is $r^j$ or $r^js$ for some $j\in\{0,1,2,3\}$, so $|W|\le8$. Map $s$ to reflection across the horizontal axis and $t$ to reflection across the diagonal $y=x$. Their product is a rotation by $90$ degrees, so these transformations generate all eight symmetries of the square and define a surjection from $W$ onto that group. Thus $W$ is that dihedral group. In particular $1,s,t,st,ts$ are distinct; $s,t$ have length one and $st,ts$ length two. The reduced-subword theorem [F1] then gives the lower intervals below $st$ and $ts$ as $\{1,s,t,st\}$ and $\{1,s,t,ts\}$. [F1, algebra]

2.1 By [F3], $C_s=T_s+v^{-1}$ and $C_t=T_t+v^{-2}$. Expanding in the standard basis [F2] gives $C_sC_t=T_{st}+v^{-2}T_s+v^{-1}T_t+v^{-3}$. Each lower term is indexed by a strict Bruhat subword from step 1.1 and has negative exponent. Since $C_s,C_t$ are bar invariant, their product is bar invariant; uniqueness in [F3] identifies it with $C_{st}$. Reversing the product gives $C_tC_s=T_{ts}+v^{-1}T_t+v^{-2}T_s+v^{-3}=C_{ts}$. [F1, F2, F3, step 1.1, algebra]

3.1 The quadratic relation gives $C_s^2=T_s^2+2v^{-1}T_s+v^{-2}=(v+v^{-1})T_s+1+v^{-2}=(v+v^{-1})C_s$. Using $L(t)=2$ gives $C_t^2=(v^2+v^{-2})C_t$. Also $C_sC_1=C_s$, $C_tC_1=C_t$, $C_tC_s=C_{ts}$, and $C_sC_t=C_{st}$. By [F4], these products give the four directed transitions displayed in the Statement and diagram. The proof establishes only these edges and makes no claim that the list is exhaustive. [F2, F3, F4, step 2.1, algebra] ∎

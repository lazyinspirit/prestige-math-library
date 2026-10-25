---
id: ex-residue-translation-on-small-parabolic-o-standards
kind: example
title: "Residue translation on small parabolic category-O standards"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 27
deps:
  - thm-residue-translation-functors-give-the-integrable-fock-space-action
  - def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks
  - def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality
  - def-higher-level-wedge-tensor-fock-module
  - thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis
  - thm-bgg-reciprocity
  - def-verma-flag-and-its-multiplicities
  - def-axiom-of-choice
  - def-crystal-graph-epsilon-phi-and-weight
  - lem-finite-type-a-full-tensor-source-upper-charts-and-string-leading-terms
  - lem-residue-casimir-operators-give-local-affine-hecke-actions
  - lem-the-local-affine-hecke-socle-argument-for-residue-translations
  - thm-root-sl-two-triple
  - thm-parabolic-category-o-is-a-highest-weight-category
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Lemma 4.3 and Theorem 4.5 (printed pp. 19-21): the multiplicity-free parabolic Verma flag computation for $f_i,e_i$ and the crystal action on irreducibles, specialized here to the smallest two-factor case; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.1, (3.6) and Theorem 3.1(iii)-(iv) (printed pp. 21-22): the functor definition, the Chevalley action and the socle/head statement; complete passage read."
---

## Example

Take $I=\{0\}$ and $\Lambda=2\Lambda_0$ in the conventions of
[[def-higher-level-wedge-tensor-fock-module]], so $F=V\otimes V$ has the four
monomials $M_{00},M_{01},M_{10},M_{11}$ and there is only the residue $0$.

On these four basis vectors the residue functors of
[[def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks]] act by
$$f_0M_{00}=M_{01}+M_{10},\qquad f_0M_{01}=f_0M_{10}=M_{11},\qquad f_0M_{11}=0,$$
$$e_0M_{11}=M_{01}+M_{10},\qquad e_0M_{01}=e_0M_{10}=M_{00},\qquad e_0M_{00}=0 .$$
In the ordered basis $(M_{00},M_{01},M_{10},M_{11})$ the commutator is
$$[e_0,f_0]=\operatorname{diag}(2,0,0,-2).$$
The source crystal has the component $00\to01\to11$ and the isolated label
$10$; the categorical residue translates of the simples have the corresponding
unique heads and socles. Outside the allowed alphabet the moves vanish. The
calculation uses generalized standards and exact functors, not labels alone.

## Facts & Assumptions

**Given:** Assume inherited AC ([[def-axiom-of-choice]]) for the cited source upper chart and highest-weight suppliers; the finite computations below use no additional choice. The rank-one Fock model $I^+=\{0,1\}$, $\Lambda=2\Lambda_0$, its four monomials, the residue functors $f_0,e_0$ of [[def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks]], the source upper crystal of [[lem-finite-type-a-full-tensor-source-upper-charts-and-string-leading-terms]] and its data of [[def-crystal-graph-epsilon-phi-and-weight]].

[F1] Flag action ([[lem-residue-casimir-operators-give-local-affine-hecke-actions]]): multiplicity-free generalized-standard flags given by the valid single-entry moves, the standard-class isomorphism.

[F2] Source upper crystal ([[lem-finite-type-a-full-tensor-source-upper-charts-and-string-leading-terms]], proof step 3.1): read columns left to right, mark an $i$-only column $+$ and an $i+1$-only column $-$, cancel $-+$, and use the rightmost surviving $+$ for lowering and the leftmost surviving $-$ for raising. This gives the components and isolated labels used below.

[F3] Rank-one and highest-weight structure ([[thm-root-sl-two-triple]], [[thm-parabolic-category-o-is-a-highest-weight-category]]): the root relations $[e,f]=h$, $[h,f]=-2f$, finite-length Verma modules and their simple heads, projective covers, BGG reciprocity and simple-preserving restricted duality. The residue functors preserve projectives and injectives and commute with duality by [[def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks]].

## Verification

**Proof technique:** direct.

1.1 **The moves.** Apply the Levi tensor decomposition to each one-box column and add the two valid positions: tensoring with the natural module moves an entry $0$ to $1$ in either position, giving $f_0M_{00}=M_{01}+M_{10}$; there is no entry $0$ in $M_{11}$, giving $f_0M_{11}=0$; and the unique entry $0$ in either mixed monomial changes to $1$, giving $f_0M_{01}=f_0M_{10}=M_{11}$. The dual functor $e_0$ is computed verbatim with the dual natural module and gives the displayed reverse moves. [F1, algebra]

1.2 **The commutator.** In the ordered basis $(M_{00},M_{01},M_{10},M_{11})$ the matrices of $f_0$ and $e_0$ are
$$f_0=\begin{pmatrix}0&0&0&0\\1&0&0&0\\1&0&0&0\\0&1&1&0\end{pmatrix},\qquad e_0=\begin{pmatrix}0&1&1&0\\0&0&0&1\\0&0&0&1\\0&0&0&0\end{pmatrix},$$
and direct multiplication gives $[e_0,f_0]=\operatorname{diag}(2,0,0,-2)$, the $\mathfrak{sl}_2$-Cartan action on the Fock basis. [F1, step 1.1, algebra]

1.3 **The actual simple classes.** Here $\mathfrak g=\mathfrak{gl}_2$ and the parabolic is the Borel. The tuple formula gives highest weights $(0,1),(0,2),(1,1),(1,2)$ for $00,01,10,11$, with root highest weights $-1,-2,0,-1$. On a Verma vector of root highest weight $m$, induction using [F3] gives $ef^kv=k(m-k+1)f^{k-1}v$. For $m=-1,-2$ every coefficient for $k>0$ is nonzero, so a nonzero weight submodule contains $v$ and the Verma is simple. For $m=0$, the span of $f^kv$, $k\ge1$, is the simple Verma of highest weight $(0,2)$, and the quotient is the one-dimensional simple of weight $(1,1)$. Thus $L_{00}=M_{00}$, $L_{01}=M_{01}$, $[L_{10}]=[M_{10}]-[M_{01}]$ and $L_{11}=M_{11}$. Both singular endpoint blocks have one label, so BGG reciprocity makes $L_{00}=P_{00}$ and $L_{11}=P_{11}$ projective-injective. In the mixed block reciprocity gives $[P_{01}]=[M_{01}]+[M_{10}]$ and $[P_{10}]=[M_{10}]$. [F1, F3, algebra]

2.1 **Crystal and head/socle comparison.** The moves in step 1.1 give $[f_0P_{00}]=[e_0P_{11}]=[P_{01}]$; these objects are projective, so finite decomposition into projective covers and independence of their classes identify both with $P_{01}$. They are self-dual because the endpoint simples are self-dual and the residue functors commute with duality. Hence they have simple head and socle $L_{01}$ and class $2[L_{01}]+[L_{10}]$. Also $f_0L_{01}=L_{11}$ and $e_0L_{01}=L_{00}$ by the standard moves, while exactness gives $[f_0L_{10}]=[e_0L_{10}]=0$, so these two translates vanish. The endpoint outward translates vanish as well. Independently, the source signature cancels $-+$ pairs, leaving the component $00\to01\to11$ and isolated $10$. These direct rank-one categorical computations establish precisely its head, socle and vanishing labels without using a general tensor-to-simple crystal identification. [F1, F2, F3, step 1.1, step 1.3, algebra]

3.1 **Conclusion.** On the four standard monomials the residue functors act by the displayed moves, their commutator is $\operatorname{diag}(2,0,0,-2)$, the source crystal is $00\to01\to11$ with isolated $10$, and the categorical translates have the corresponding unique heads and socles; all computations use the actual generalized standards and exact functors. [step 1.1, step 1.2, step 2.1] ∎

## Remarks

The left panel records coefficients in the standard monomial basis: each solid
arrow contributes one target term to $f_0$ of its source, and each dashed arrow
contributes one target term to $e_0$ of its source. These are linear-action
coefficients, rather than morphisms between the displayed basis vectors. The
right panel records the source crystal: arrows are $\tilde f_0$, with
$\tilde e_0$ reversing them. The label $10$ is isolated there, although
$M_{10}$ participates in the standard-basis action. Vanishing moves are omitted.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node at (0,3.1) {Standard-basis action};
\node (a) at (0,2.3) {$M_{00}$};
\node (b) at (-1.25,1.1) {$M_{01}$};
\node (c) at (1.25,1.1) {$M_{10}$};
\node (d) at (0,-0.1) {$M_{11}$};
\draw[->] (a) to[bend right=13] (b);
\draw[->] (a) to[bend right=13] (c);
\draw[->] (b) to[bend right=13] (d);
\draw[->] (c) to[bend right=13] (d);
\draw[->,dashed] (b) to[bend right=13] (a);
\draw[->,dashed] (c) to[bend right=13] (a);
\draw[->,dashed] (d) to[bend right=13] (b);
\draw[->,dashed] (d) to[bend right=13] (c);
\draw[->] (-1.3,-0.85) -- (-0.7,-0.85);
\node[anchor=west] at (-0.6,-0.85) {$f_0$};
\draw[->,dashed] (0.35,-0.85) -- (0.95,-0.85);
\node[anchor=west] at (1.05,-0.85) {$e_0$};
\node at (5,3.1) {Source crystal};
\node (x) at (3.4,1.8) {$00$};
\node (y) at (5,1.8) {$01$};
\node (z) at (6.6,1.8) {$11$};
\draw[->] (x) -- node[above] {$\tilde f_0$} (y);
\draw[->] (y) -- node[above] {$\tilde f_0$} (z);
\node at (5,0.35) {$10$};
\node at (5,-0.2) {isolated};
\end{tikzpicture}
```

The two panels reproduce the moves of step 1.1 and the signature calculation
of step 2.1. The diamond encodes sums of basis vectors; it asserts no
commutative-square relation. The verification above is independent of the figure.

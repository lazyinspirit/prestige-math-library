---
id: lem-nrqm-composites-countable-kraus-isometric-dilation
aliases: [nrqm-composites-countable-kraus-isometric-dilation]
kind: lemma
domain: mathematics
title: "Countable Kraus isometric dilation and partial-trace recovery"
status: published
origin: pipeline
dependency_level: 3
deps: [lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-finite-effects-and-instruments, lem-nrqm-composites-countable-kraus-normalization, lem-nrqm-composites-separable-partial-trace, lem-nrqm-composites-nuclear-bounded-cyclicity, thm-parseval-equivalences-for-a-complete-orthonormal-family, lem-weak-and-strong-additivity-of-orthogonal-projections, def-hilbert-orthogonal-projection, def-hilbert-space, def-countable-choice, lem-nrqm-composites-rank-one-operator-calculus]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-finite-effects-and-instruments: mathematical-premise
  lem-nrqm-composites-countable-kraus-normalization: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  lem-weak-and-strong-additivity-of-orthogonal-projections: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Topics in Real and Functional Analysis (2017), §3.6 pp. 93-96 (trace-class dilation computations)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products' (ancilla constructions)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a nonzero complex Hilbert space ([[def-hilbert-space]]) and let $(M_{a,r})_{a,r\ge1}$ be bounded operators on $H$ with

$$\sum_{a\le A,\,r\le R}M_{a,r}^*M_{a,r}\longrightarrow I\qquad\text{strongly as }A,R\to\infty .$$

Let $(e_{a,r})_{a,r\ge1}$ be the standard orthonormal basis of $\ell^2$ and form $H\widehat\otimes\ell^2$ ([[lem-nrqm-composites-hilbert-tensor-construction]]). Then

$$W:H\to H\widehat\otimes\ell^2,\qquad W\psi:=\sum_{a,r\ge1}M_{a,r}\psi\otimes e_{a,r}$$

is a linear isometry; for each outcome label $a$ the strong limit $P_a:=\sum_{r\ge1}I_H\otimes T_{e_{a,r},e_{a,r}}$ is an orthogonal projection ([[def-hilbert-orthogonal-projection]]), the family $(P_a)_{a\ge1}$ consists of pairwise orthogonal projections with $\sum_aP_a=I$ strongly, and

$$W^*P_aW=\sum_{r\ge1}M_{a,r}^*M_{a,r}=:F_a ;$$

moreover the partial trace of the dilated state over $\ell^2$ recovers the Kraus instrument: for every trace-class $\rho$ on $H$,

$$\operatorname{Tr}_{\ell^2}\bigl(W\rho W^*\bigr)=\sum_{a,r\ge1}M_{a,r}\rho M_{a,r}^* ,$$

the series converging in trace norm and the right side being the map of [[lem-nrqm-composites-countable-kraus-normalization]]. This realizes the specified family; it is not a classification of all channels.

## Facts & Assumptions

**Given:** $H$; the family $(M_{a,r})$ with the stated strong completeness; the orthonormal basis $(e_{a,r})$ of $\ell^2$.

[F1] For $\psi\in H$, the nonnegative double series $\sum_{a,r}\|M_{a,r}\psi\|^2$ has value $\|\psi\|^2$, and $\|W\psi\|^2=\sum_{a,r}\|M_{a,r}\psi\|^2$ whenever the partial sums converge ([[lem-nrqm-composites-countable-kraus-normalization]], [[lem-nrqm-composites-hilbert-tensor-construction]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[F2] The operators $T_{e_{a,r},e_{a,r}}$ are orthogonal projections onto $\mathbb Ce_{a,r}$, pairwise orthogonal, with $\sum_{a,r}T_{e_{a,r},e_{a,r}}=I$ strongly; a strong sum of pairwise orthogonal projections is the orthogonal projection onto the closed span of their ranges, and telescoping strong sums behave additively ([[lem-weak-and-strong-additivity-of-orthogonal-projections]], [[def-hilbert-orthogonal-projection]], [[lem-nrqm-composites-finite-effects-and-instruments]]).

[F3] $\operatorname{Tr}_{\ell^2}$ is the trace-norm continuous linear map with defining identity $\operatorname{tr}((\operatorname{Tr}_{\ell^2}T)A)=\operatorname{tr}(T(A\otimes I))$ for bounded $A$, and on rank-one operators $\operatorname{Tr}_{\ell^2}T_{u\otimes e,u'\otimes e'}=\langle e,e'\rangle T_{u,u'}$ ([[lem-nrqm-composites-separable-partial-trace]]).

[F4] $\operatorname{tr}(T_{x,z})=\langle x,z\rangle$, and for bounded $B$, $T_{x,z}B=T_{x,B^*z}$ ([[lem-nrqm-composites-rank-one-operator-calculus]], [[lem-nrqm-composites-nuclear-bounded-cyclicity]]).

## Proof

1.1 [The dilation is an isometry] The series defining $W\psi$ converges: the partial sums $\sum_{a\le A,r\le R}M_{a,r}\psi\otimes e_{a,r}$ are Cauchy because for $A'\ge A$, $R'\ge R$ the squared norm of the difference is the corresponding nonnegative subsum, which is bounded by the tail of the summable series $\sum_{a,r}\|M_{a,r}\psi\|^2$; by [F1] the limit $W\psi$ has $\|W\psi\|^2=\sum_{a,r}\|M_{a,r}\psi\|^2=\|\psi\|^2$, so $W$ is linear and isometric. [given, F1, algebra]

2.1 [Outcome projections] By [F2] each $P_a=\sum_rI\otimes T_{e_{a,r},e_{a,r}}$ is the orthogonal projection onto $H\widehat\otimes\overline{\operatorname{span}}\{e_{a,r}:r\ge1\}$, the strong sums over $a$ telescope to $I$, and $P_aP_b=\delta_{ab}P_a$. [step 1.1, F2, algebra]

3.1 [Compression] As in the finite case, $W^*(\xi\otimes e_{a,r})=M_{a,r}^*\xi$ because $W$ is an isometry with the displayed action, so $W^*P_aW\psi=\sum_rM_{a,r}^*M_{a,r}\psi$ for every $\psi$, the strong limit defining $F_a$. [step 2.1, F1, algebra]

4.1 [Partial-trace recovery by truncations] For $x,y\in H$ and a finite rectangle $D$ of index pairs put $w_D:=\sum_{(a,r)\in D}M_{a,r}x\otimes e_{a,r}$ and $z_D:=\sum_{(a,r)\in D}M_{a,r}y\otimes e_{a,r}$. Then $w_D\to Wx$, $z_D\to Wy$ by step 1.1, and rank-one trace-norm continuity gives $T_{w_D,z_D}\to T_{Wx,Wy}=WT_{x,y}W^*$. For each finite rectangle the elementary formula [F3] gives $\operatorname{Tr}_{\ell^2}T_{w_D,z_D}=\sum_{(a,r)\in D}T_{M_{a,r}x,M_{a,r}y}$; Cauchy–Schwarz and [F1] give $\sum_{a,r}\|M_{a,r}x\|\|M_{a,r}y\|\le\|x\|\|y\|$, so these diagonal terms converge absolutely in trace norm. Taking limits using [F3] proves the Kraus formula on rank-one inputs. Both sides are bounded linear maps on trace class: the left side by the two-sided ideal bound for $W,W^*$ and [F3], and the right side by nuclear expansion and the preceding rank-one bound. Finite rank-one sums are trace-norm dense by the nuclear characterization in [[lem-nrqm-composites-nuclear-bounded-cyclicity]], so the identity extends to every trace-class input and equals the map of [[lem-nrqm-composites-countable-kraus-normalization]]. [step 1.1, step 3.1, F1, F3, F4, algebra] ∎

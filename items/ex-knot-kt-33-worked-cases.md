---
id: ex-knot-kt-33-worked-cases
kind: example
title: "Flip-category colored unlink and braid evaluations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-the-categorical-trace-of-a-morphism-into-the-double-dual
  - def-braid-group-by-the-artin-presentation
  - def-symmetric-group
  - thm-von-dyck
  - def-permutation-support-disjoint-cycles-and-cycle-type
  - thm-disjoint-cycle-decomposition
  - thm-a-braided-rigid-category-has-a-drinfeld-morphism
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds, Chapter I, §§1.5 and 2.5"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
---

## Example

Let $k$ be a field and let $V$ be a $d$-dimensional finite-dimensional vector space with the ribbon structure of finite-dimensional vector spaces, ordinary flip braiding, standard duality, and trivial twist. For each $n\ge1$ and $\beta\in B_n$, put $W=V^{\otimes n}$, let $\rho(\beta)$ be the braid action, and let $j_W:W\to W^{\vee\vee}$ be the ribbon-induced pivotal comparison. Define the finite blackboard-framed braid-closure value by the categorical trace $t_n^V(\beta)=\operatorname{Tr}_L(j_W\rho(\beta))$. Then
$$t_n^V(\beta)=d^{c(\pi(\beta))},$$
where $\pi:B_n\to\operatorname{Sym}(\{1,\ldots,n\})$ is the homomorphism $\pi(\sigma_i)=(i\ i+1)$ and $c(\pi(\beta))$ is the number of cycles in its disjoint-cycle decomposition, including fixed points as one-cycles. Thus the one-component unknot has value $d$, the two-component unlink has value $d^2$, and the closure of the positive generator $\sigma_1\in B_2$ has value $d$.

The two-strand positive generator used in the last calculation is shown schematically below; its endpoint permutation is the transposition $(1\ 2)$.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),scale=.8]
  \draw[->] (1,1) -- (.56,.08);
  \draw[->] (.44,-.08) -- (0,-1);
  \draw[->] (0,1) .. controls (.28,.5) and (.72,-.5) .. (1,-1);
  \node at (-.2,1) {$1$};
  \node at (1.2,1) {$2$};
\end{tikzpicture}
```

## Example references

[[def-colored-framed-knot-evaluation-from-ribbon-category|Colored framed-link evaluation]]

[[alg-ribbon-evaluation-from-colored-braid-word|Colored-braid matrix procedure]]

[[thm-ribbon-evaluation-from-colored-braid-word-procedure-properties|Procedure correctness]]

[[def-symmetric-group|Permutations of the strand labels]]

[[def-braid-group-by-the-artin-presentation|Artin braid group generators and relations]]

[[thm-von-dyck|Extension from a group presentation]]

[[def-permutation-support-disjoint-cycles-and-cycle-type|Disjoint cycles, including fixed points]]

[[thm-disjoint-cycle-decomposition|Existence and uniqueness of disjoint-cycle decompositions]]

[[thm-a-braided-rigid-category-has-a-drinfeld-morphism|Drinfeld morphism]]

[Turaev, *Quantum Invariants of Knots and 3-Manifolds*, Chapter I, §§1.5 and 2.5](https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf)

## Facts & Assumptions

**Given:** The vector space $V$, the flip ribbon structure, $n\ge1$, and a braid $\beta\in B_n$.

[F1] The left categorical trace of a morphism into the double dual is the coevaluation–morphism–evaluation composite ([[def-the-categorical-trace-of-a-morphism-into-the-double-dual]]).

[F2] The Drinfeld morphism in a braided rigid category is given by the evaluation–braiding–coevaluation composite ([[thm-a-braided-rigid-category-has-a-drinfeld-morphism]]).

[F3] Every permutation of a finite set has a disjoint-cycle decomposition, unique up to reordering and cyclic rotation, and fixed points are counted as one-cycles ([[thm-disjoint-cycle-decomposition]], [[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F4] In the specified vector-space ribbon structure, each positive and negative braid generator acts by the ordinary flip of the adjacent factors, and the twist is identity.

[F5] A generator assignment on $B_n$ that sends every Artin relator to the identity extends to a homomorphism ([[def-braid-group-by-the-artin-presentation]], [[thm-von-dyck]]).

## Proof

**Proof technique:** direct.

**Given:** The data in the Example and [F1]–[F5].

1.1 If $n=1$, the braid group is trivial and $\pi$ is its unique homomorphism. If $n\ge2$, put $s_i=(i\ i+1)$. For $|i-j|>1$, $s_i$ and $s_j$ commute because they have disjoint supports; for adjacent indices, both $s_i s_{i+1}s_i$ and $s_{i+1}s_i s_{i+1}$ equal $(i\ i+2)$. These are the Artin relators, so [F5] gives the homomorphism $\pi$. By [F4], each positive or negative braid generator swaps its two adjacent tensor factors, so the action on $W=V^{\otimes n}$ is the factor permutation given by $\pi(\beta)$. The twist is identity. Let $w_1,\ldots,w_{d^n}$ be the tensor basis of $W$ and $w_1^*,\ldots,w_{d^n}^*$ its ordinary dual basis. Substitution in [F2]'s formula gives $u_W(w_r)(w_s^*)=1$ when $r=s$ and $0$ otherwise, so the pivotal comparison is the canonical double-dual identification. The categorical trace formula [F1] is therefore the ordinary matrix trace of that permutation operator. [F1, F2, F4, F5, given, construct]

2.1 Fix a basis $e_1,\ldots,e_d$ of $V$. A basis tensor $e_{i_1}\otimes\cdots\otimes e_{i_n}$ is fixed by the factor permutation exactly when its indices are constant on each orbit of $\pi(\beta)$; by [F3], these orbits are exactly the cycles counted by $c(\pi(\beta))$, including fixed points. There are $d$ independent choices for each cycle, hence exactly $d^{c(\pi(\beta))}$ fixed basis tensors. A permutation matrix has trace equal to its number of fixed basis vectors, proving the formula. [F3, step 1.1, algebra]

3.1 The identity in $B_1$ has one permutation cycle, the identity in $B_2$ has two, and $\sigma_1$ has the transposition permutation with one cycle. Substitution into the formula gives $d$, $d^2$, and $d$, respectively; the latter closure is a single component because its endpoint permutation has one cycle. These calculations include $d=0$ because every listed cycle count is positive. [step 2.1, given, algebra] ∎

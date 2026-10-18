---
id: def-relative-open-closed-surface-normal-form
kind: definition
title: "The marked boundary-relative open-closed normal word"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-frobenius-object-and-knowledgeable-sewing-data, def-oriented-open-closed-surface-category, lem-frobenius-sewing-derived-moves, lem-relative-surface-collars-and-elementary-decomposition]
justified_by: [lem-boundary-relative-two-dimensional-surface-normal-form]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "No new axiom. The underlying category and derived pairing moves inherit ACω only through face-relative collar and decomposition results."
sources:
  references:
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "§3.6, PDF pp. 26–31, especially Definitions 3.18–3.20; the colored word and its choice-independence are proved locally in the dependent normal-form lemma."
    - title: "Gregory W. Moore and Graeme Segal, D-branes and K-theory in 2D topological field theory, arXiv:hep-th/0609042v1"
      url: "https://arxiv.org/pdf/hep-th/0609042v1"
      locator: "§2.3–2.4, PDF pp. 8–12, for labeled open-boundary cycles and surface invariants."
    - title: "Joachim Kock, Frobenius algebras and 2D topological quantum field theories, complete minicourse notes"
      url: "https://mat.uab.cat/~kock/TQFT/FS.pdf"
      locator: "§3.1.12–3.1.13, PDF pp. 34–36, for the closed genus/window normal-word convention."
---

## Definition

The normal word is first a **formal composite** of the ten typed surface generators, with $C$ the circle symbol and $A_{ab}$ the interval symbol $I_{ab}$. Tensor, associators, unitors and flips are those of their symmetric monoidal presentation with the elementary sewing relations. The formulas below also specify its evaluation in $\mathrm{Vect}_{\mathrm{fd}}(k)$ after choosing knowledgeable data. Equality of such vector-space evaluations is not used to infer equality of formal words or surfaces; that distinction is essential before the normal-form theorem.

Let $M$ be a connected morphism in $\mathsf{Cob}^{\mathrm{oc}}_2(S)$, with the marked incoming and outgoing black boundary parameterizations of [[def-oriented-open-closed-surface-category]]. The **marked data** of $M$ are:

1. the partition of its marked black boundary components into connected components of $M$;
2. the genus $g\ge0$ of each connected component;
3. for each color $s\in S$, the number $w_s\ge0$ of free-boundary circles (windows) of color $s$ on that component;
4. the cyclically ordered open-boundary cycles, each recorded as the ordered list of its marked interval slots together with the full endpoint-color sequence along those intervals and free edges.

An open-boundary cycle is obtained by following the oriented boundary of $M$ through alternating black interval collars and the intervening free-boundary interval faces. Its successive black slots are distinct within the cycle and each slot appears in exactly one cycle. For the multiplication word after bending all open slots to inputs, traverse this cycle in the direction opposite to the induced surface-boundary orientation. If its slots in this reverse traversal are $j_1,\ldots,j_q$, write their endpoint labels in their incoming object orientations as
$$
I_{a_0a_1}, I_{a_1a_2},\ldots,I_{a_{q-1}a_q},\qquad a_q=a_0.
$$
Each incoming interval is oppositely oriented to its surface-boundary segment, so this reverse traversal follows its object orientation. The color at each join agrees because the free face has a single label. In particular, an induced-boundary cycle through incoming $I_{ab},I_{ca},I_{bc}$ has multiplication order $I_{ab},I_{bc},I_{ca}$ after starting at the first slot; no factor is replaced by its opposite-colored space. Distinct cycles may have different endpoint-color sequences even when their lengths agree.

Use the snakes of [[lem-frobenius-sewing-derived-moves]] to bend every outgoing interval to an incoming interval of reversed endpoint order and every incoming circle to an outgoing circle. Thus a connected component is reduced to a typed word with $m$ incoming intervals, $n$ outgoing circles, and the same marked open-boundary cycles. Let $c_1,\ldots,c_r$ be those cycles, ordered by their least marked interval slot; within each cycle start at its least slot and use the reverse-boundary multiplication order just specified. For cycle $c_j$, let its slots be $j_{j,1},\ldots,j_{j,q_j}$ and its cyclic endpoint colors be $a_{j,0},\ldots,a_{j,q_j}=a_{j,0}$. Define
$$
T_j:=i_{a_{j,0}}^*\circ\mu^{(q_j)}_{a_{j,0},a_{j,1},\ldots,a_{j,q_j}}: \bigotimes_{\ell=1}^{q_j} A_{a_{j,\ell-1}a_{j,\ell}}\longrightarrow C.
$$
Let $P$ be the symmetry isomorphism that permutes the $m$ interval factors into this listed cycle order, preserving each factor and its endpoint colors. Set
$$
T_M:=(T_1\otimes\cdots\otimes T_r)\circ P.
$$
For $r=0$, set $T_M=1_k:k\to k$, the identity on the empty tensor. Let $\mu_C^{[r]}:C^{\otimes r}\to C$ be the iterated closed multiplication for $r\ge2$, with $\mu_C^{[1]}=1_C$ and $\mu_C^{[0]}=\eta_C$. Let $\Delta_C^{[n]}:C\to C^{\otimes n}$ be the iterated closed comultiplication for $n\ge2$, with $\Delta_C^{[1]}=1_C$ and $\Delta_C^{[0]}=\epsilon_C$. The ordered product of window operators is
$$
W_M:=\mathop{\prod}_{s\in S,\;w_s>0} W_s^{\,w_s}:C\to C, \qquad W_s=i_s^*i_s,
$$
where the product is a finite composite: compactness gives only finitely many windows on $M$. Its order is immaterial by the $C$-linearity of the $W_s$; if there are no windows, $W_M=1_C$. Let $H=\mu_C\Delta_C$ and define the **candidate normal word**
$$
N(M):=\Delta_C^{[n]}\circ H^g\circ W_M\circ\mu_C^{[r]}\circ T_M,
$$
with the canonical associators, unitors, and symmetry maps inserted. This formula is the word for the bent surface; for the original marked source and target, apply the inverse bends and restore their slot permutations to define $N(M)$. The identity on each marked closed output slot is retained by the final output permutation. If $n=0$, the final map is $\epsilon_C$; if $r=0$, the initial closed input is $\eta_C$. In particular a component with no black boundary has the scalar word $\epsilon_C H^g W_M\eta_C$ and keeps every colored window count.

For a disconnected morphism, define its candidate normal word as the ordered tensor product of its connected candidate words, preceded and followed by the symmetry maps that restore the original marked source and target slot orders. No assertion that $N(M)$ is independent of a surface decomposition is part of this definition; that assertion is the claim of [[lem-boundary-relative-two-dimensional-surface-normal-form]].

## Normal-word diagram

For $r,n\ge1$ the candidate map factors through the open boundary cycles, their cozipper images in $C$, and the closed multiplication/window/handle/comultiplication word. The displayed arrows have exactly the domains specified above; when $r=0$ or $n=0$, replace the corresponding map using the stated unit or counit convention.

~~~tikzcd
\bigotimes_{\ell=1}^{m} A_{a_\ell b_\ell}
  \arrow[r, "P"]
& \bigotimes_{j=1}^{r}\bigotimes_{\ell=1}^{q_j} A_{a_{j,\ell-1}a_{j,\ell}}
  \arrow[r, "\bigotimes_j(i_{a_{j,0}}^*\mu^{(q_j)}_{a_{j,0},\ldots,a_{j,q_j}})"]
& C^{\otimes r} \arrow[r, "\mu_C^{[r]}"]
& C \arrow[r, "W_M"]
& C \arrow[r, "H^g"]
& C \arrow[r, "\Delta_C^{[n]}"]
& C^{\otimes n}
~~~

## Facts & Assumptions

**Given:** A compact oriented collared $S$-colored surface with its black parameterizations, the formal pairing moves and face-relative decomposition of the linked items, and, for a vector-space evaluation, finite-dimensional S-colored knowledgeable data.

[F1] The black interval and circle objects, free-boundary colors, corners, and relative diffeomorphism convention are those of [[def-oriented-open-closed-surface-category]].

[F2] The typed products, zippers, cozipper maps, and closed Frobenius structure have the indicated source and target spaces ([[def-frobenius-object-and-knowledgeable-sewing-data]]).

[F3] The pairing snakes, cyclic cozipper rotation, and commutativity/cocommutativity of the closed Frobenius pairing and copairing are proved in [[lem-frobenius-sewing-derived-moves]].

[F4] Every compact surface has a finite decomposition into the ten typed elementary cobordisms, and its connected-component genus and boundary features are finite ([[lem-relative-surface-collars-and-elementary-decomposition]]).

## Proof

1.1 An orientation-preserving diffeomorphism in [F1] preserves connected components, genus, the number and colors of free-boundary circles, the marked black boundary components, and the cyclic order in which boundary segments are encountered. It therefore preserves the marked data in the definition. Compactness gives finitely many boundary components and corners, so only finitely many open cycles and nonzero window counts occur; hence each tensor product and the composite defining $N(M)$ is finite. Every iterated product $T_j$ is well-typed because the reverse-boundary traversal follows each incoming object orientation, so consecutive endpoint colors match and $a_{j,q_j}=a_{j,0}$ makes its output $A_{a_{j,0}a_{j,0}}$, the domain of $i_{a_{j,0}}^*$. [given, F1, F2, F4, construct]

2.1 Changing the starting slot of a cycle cyclically rotates its indexed product and changes the basepoint color to the new first endpoint. The cyclic cozipper identity of [F3] equates the resulting maps to $C$. Reordering the cycles only permutes the $C$ factors before $\mu_C^{[r]}$; commutativity and the symmetry of the closed pairing show that the composite is unchanged. Reordering colored window factors does not change $W_M$ because every $W_s$ is multiplication by an element of the commutative algebra $C$, and each window contributes exactly its own color operator. The target circle order is restored by the explicitly retained symmetry permutation. Thus the candidate word does not depend on the auxiliary choice of cycle starting points or the order of cycles and windows. The independence from choices of cutting or decomposition is deliberately deferred to the linked normal-form lemma. [F2, F3, step 1.1, algebra]

3.1 The bending maps in the definition are inverse to bending back because the two snakes of [F3] cancel each paired evaluation/coevaluation. Hence they preserve the relative surface class and all marked slots. The empty-input and empty-output conventions are well-defined maps by the unit and counit types of [F2]; when a connected component has no open cycle its closed input is the unit, and when it has no outgoing circle its final closed map is the counit. For zero black boundary the formula therefore reduces to the stated scalar and still records its genus and colored windows. [F1, F2, F3, step 1.1, step 2.1] ∎


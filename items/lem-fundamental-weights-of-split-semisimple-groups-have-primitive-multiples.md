---
id: lem-fundamental-weights-of-split-semisimple-groups-have-primitive-multiples
kind: lemma
title: "Multiples of the fundamental weights are primitive weights in the semisimple case"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 32
deps: [def-abstract-root-datum-and-its-weyl-group, def-axiom-of-choice, def-root-datum-of-a-split-reductive-group, def-weight-and-dominant-weight-of-a-rational-representation, lem-primitive-vectors-from-standard-maximal-parabolics, lem-reductive-center-radical-and-semisimple-quotient, lem-root-datum-combinatorics]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22 (22.9) and (22.24), printed pp. 466 and 470; Appendix C.35"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, Theorem 39(e) second proof and the paragraph after Example (a)"
---
## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $(G,T)$ be a
split semisimple group over $k$ with base $\Delta$, fundamental weights
$\omega_i$, and let $i\in\Delta$
([[def-root-datum-of-a-split-reductive-group]],
[[def-weight-and-dominant-weight-of-a-rational-representation]]). Then there
exists $d>0$ such that $d\omega_i\in X(T)$ and $d\omega_i$ is the weight of a
primitive vector of some finite-dimensional rational representation of $G$
([[lem-primitive-vectors-from-standard-maximal-parabolics]],
[[def-abstract-root-datum-and-its-weyl-group]]).

## Facts & Assumptions

**Given:** AC; a split semisimple group $(G,T)$ with base $\Delta$, an index $i\in\Delta$, and a split Borel $B\supseteq T$.

[F1] *Primitive vectors with prescribed coroot pairings.* For every index $j$ there exist a finite-dimensional rational representation $V_j$ of $G$ and a primitive vector $v_j\in V_j$ whose weight $\lambda_j$ satisfies $\langle\lambda_j,\alpha_k^\vee\rangle=0$ for $k\ne j$ and $\langle\lambda_j,\alpha_j^\vee\rangle>0$; when the root datum is semisimple, $\lambda_j=\langle\lambda_j,\alpha_j^\vee\rangle\omega_j$ ([[lem-primitive-vectors-from-standard-maximal-parabolics]]).

[F2] *Fundamental weights.* The fundamental weights $\omega_j\in X(T)\otimes_{\mathbb Z}\mathbb Q$ are dual to the simple coroots, $\langle\omega_j,\alpha_k^\vee\rangle=\delta_{jk}$, and every $x\in X(T)\otimes\mathbb Q$ decomposes as $x=\sum_j\langle x,\alpha_j^\vee\rangle\omega_j+x_0$ with $\langle x_0,\alpha_j^\vee\rangle=0$ for all $j$ ([[def-weight-and-dominant-weight-of-a-rational-representation]]).

[F3] *Semisimple case.* $G$ is semisimple if and only if $Z\Phi$ has finite index in $X(T)$ ([[def-root-datum-of-a-split-reductive-group]], [[lem-reductive-center-radical-and-semisimple-quotient]]); in that case $\Phi$ spans $X(T)\otimes\mathbb Q$ ([[lem-root-datum-combinatorics]]), so the annihilator $X_0=\{x\in X(T):\langle x,\alpha^\vee\rangle=0\text{ for all }\alpha\in\Phi\}$ is zero, as is its rational counterpart (Milne 22.9).

## Proof

**Given:** AC; a split semisimple group $(G,T)$ with base $\Delta$, an index $i\in\Delta$, and a split Borel $B\supseteq T$.

**Proof technique:** direct.

1.1 Since $G$ is semisimple, its root datum is semisimple and the annihilator $X_0$ is zero by [F3]. [F3]

2.1 Apply [F1] with $j=i$: there exist a finite-dimensional rational representation $V_i$ and a primitive vector $v_i\in V_i$ of weight $\lambda_i$ with $d:=\langle\lambda_i,\alpha_i^\vee\rangle$ a positive integer. In the semisimple case [F1] gives $\lambda_i=d\omega_i$, with $\omega_i$ as defined in [F2]. [F1, F2, step 1.1]

3.1 Therefore $d>0$, $d\omega_i=\lambda_i\in X(T)$, and $d\omega_i$ is the weight of the primitive vector $v_i$ in the finite-dimensional rational representation $V_i$ of $G$. [step 2.1] ∎

## Remarks

- The proof is Milne's second proof of Theorem 22.20 in the semisimple case: the Mostow argument (Lemma 22.24) produces a primitive vector whose weight pairs trivially with all simple coroots but one, and semisimplicity of the root datum forces that weight to be a positive multiple of the corresponding fundamental weight.
- For a general reductive root datum the coroot annihilator can be nonzero, so the weight produced by the parabolic construction need not be a multiple of $\omega_i$; only its pairings are controlled, which is why the reductive case is handled separately through the product $Z(G)_t\times G_{\mathrm{der}}$.

---
id: lem-canonical-elementary-crystal-extraction-and-highest-weight-survivors
kind: lemma
title: "Canonical elementary crystal extraction and highest-weight survivors"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 16
deps: [def-axiom-of-choice,
       lem-klr-one-step-simple-restriction-induction-and-first-dot-index,
       lem-klr-two-color-jump-formula-and-strict-elementary-embeddings,
       lem-finite-support-regularization-of-quantum-label-weight-modules,
       def-kashiwara-skew-derivations-on-the-negative-quantum-half,
       lem-divided-power-half-has-integral-skew-string-coefficients,
       thm-the-i-string-decomposition-of-the-negative-half,
       thm-crystal-basis-of-the-negative-half,
       lem-crystal-operators-commute-with-highest-weight-projection-modulo-q,
       lem-highest-weight-tensor-maps-and-their-adjunction,
       thm-grand-loop-existence-of-highest-weight-crystal-bases,
       thm-crystal-basis-tensor-product-rule,
       lem-negative-half-reversal-preserves-integral-and-crystal-lattices,
       lem-string-ideal-decomposition-of-the-integral-lattices,
       lem-string-ideal-triples-are-balanced,
       thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module,
       thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 6: the identification of the simple-module crystal with B(infinity) and with B(Lambda) after the cyclotomic quotient."
    - title: "Aaron D. Lauda and Monica Vazirani, Crystals from categorified quantum groups, Advances in Math. 228 (2011) 803-861, arXiv:0909.1810v2"
      url: "https://arxiv.org/pdf/0909.1810v2"
      locator: "Sections 2.5-2.6 and 6: the socle/head crystal operators, the survival condition epsilon_i(M)<=lambda_i, and Theorems 6.10-6.11."
---

## Statement

For every real symmetrizable Cartan datum, the canonical negative-half crystal
has strict elementary embeddings
$\Psi_i(b)=\bar b\otimes b_i(-c_i(b))$, where $c_i(b)=\epsilon_i(*b)$,
$\bar b=(e_i^*)^{c_i(b)}b$, $c_i(\bar b)=0$, and every nonvacuum vertex has
positive extraction for some $i$. The negative-half reversal $*$ permutes
$B(\infty)$ without signs; this unsigned conclusion is proved from the existing
signed lattice theorem and positive highest-weight tensor residues, not
assumed. The survivors of $\pi_\lambda$ are exactly $c_i(b)\le\lambda_i$ for
all $i$; with weight $\lambda+\operatorname{wt}(b)$, inherited raising and
surviving lowering, and $\epsilon/\varphi$, they are $B(\lambda)$. Any two
lowering-generated, everywhere-lowerable negative crystals with strict
nonpositive elementary extractions and positive extraction at every nonvacuum
vertex are uniquely isomorphic by their lowering words; the proof uses finite
color cycles and terminates after a height bound. Consequently for any field
and any general homogeneous nondegenerate $Q$ of the first two lemmas, the
shift-orbit simple-module crystal is canonically $B(\infty)$, its first-strand
cyclotomic simple graph is $B(\lambda)$, and the graph labeled by
indecomposable projective COVERS $P(S)$ is the same graph under the unscaled
cover--simple pairing. Projective crystal operators here mean operators
transported on cover labels; no arbitrary $\#$-dual-of-simple identification,
generic global-basis theorem, or independent linear Kashiwara action on the
projective class is used.

## Facts & Assumptions

**Given:** A real symmetrizable Cartan datum, its negative quantum half and the
canonical external data listed in the dependencies.

[F1] The signed lattice theorems and the negative-half string machinery:
[[def-kashiwara-skew-derivations-on-the-negative-quantum-half]],
[[thm-the-i-string-decomposition-of-the-negative-half]],
[[thm-crystal-basis-of-the-negative-half]],
[[lem-divided-power-half-has-integral-skew-string-coefficients]],
[[lem-negative-half-reversal-preserves-integral-and-crystal-lattices]],
[[lem-string-ideal-decomposition-of-the-integral-lattices]] and
[[lem-string-ideal-triples-are-balanced]].

[F2] The highest-weight projection and crystal-comparison inputs:
[[lem-crystal-operators-commute-with-highest-weight-projection-modulo-q]],
[[lem-highest-weight-tensor-maps-and-their-adjunction]],
[[thm-grand-loop-existence-of-highest-weight-crystal-bases]],
[[thm-crystal-basis-tensor-product-rule]],
[[thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module]]
and [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]].

[F3] The categorified simplicity inputs
([[lem-klr-one-step-simple-restriction-induction-and-first-dot-index]],
[[lem-klr-two-color-jump-formula-and-strict-elementary-embeddings]],
[[lem-finite-support-regularization-of-quantum-label-weight-modules]]): the
shift-orbit simple-module crystal with its socle/head operators, the survival
criterion and the strict embeddings.

## Proof

**Proof technique:** lift the right-string decomposition of the negative half
to lattice components, read the strict elementary embeddings off the top
residue, identify the survivors of the highest-weight projection, and use the
lattice comparison to identify the categorified simple graph.

1.1 Right strings and the component decomposition. Define the right string operators by $*$-conjugating the left normalized Kashiwara operators; since $*$ is an isometry of the crystal lattice and the signed crystal set, every positive crystal residue $b$ lies in exactly one right-string position $c_i(b)\ge0$. If $u=\sum_{n\ge0}F_i^{(n)}v_n$ is a lattice element with $v_n\in\ker(*e_i'*)$ and $T_n=\tilde e_i^nu$, then $v_n=T_n-\tilde f_iT_{n+1}$ lies in the lattice; induction on the largest nonzero position, using the residue partial inverse, shows a basis residue has exactly one nonzero component and that its top residue is positive. Root height makes the tails finite, so this half-version is proved directly and does not apply an integrable-module-only statement to $U^-$; conjugating through the signed lattice theorem gives the asserted signed right version, without assuming unsigned $*$. [F1]

2.1 Strict elementary embeddings. Combining the component decomposition of step 1.1 with the top-residue computation: for a positive crystal residue $b$ with $c_i(b)=0$ the string position is $0$ and the top component is $b$ itself; for general $b$ the top component is $\bar b=(e_i^*)^{c_i(b)}b$ with $c_i(\bar b)=0$ and $\epsilon_i(*b)=c_i(b)$. Hence $\Psi_i(b)=\bar b\otimes b_i(-c_i(b))$ is a strict elementary embedding, every nonvacuum vertex has positive extraction at some color (otherwise all $\epsilon_i(*b)=0$ forces $b$ to be the vacuum), and the negative-half reversal $*$ permutes $B(\infty)$ without signs, the unsigned conclusion following from the signed lattice theorem and positive highest-weight tensor residues rather than being assumed. [step 1.1, F1, F2]

3.1 Survivors of the highest-weight projection. The projection $\pi_\lambda$ kills exactly the negative-half crystal vertices with $c_i(b)>\lambda_i$ for some $i$: the string ideal decomposition of [F1] identifies the relevant ideal with the direct sum of right-string positions $n\ge\lambda_i+1$, and the crystal-lattice comparison of [F2] makes the projection commute with the crystal operators modulo $q$. The survivors therefore carry weight $\lambda+\operatorname{wt}(b)$ with inherited raising and surviving lowering operators and the induced $\epsilon/\varphi$; the grand-loop and tensor-product theorems of [F2] identify the resulting crystal with $B(\lambda)$. [step 2.1, F1, F2]

3.2 Uniqueness by lowering words. Let $C,C'$ be two lowering-generated, everywhere-lowerable negative crystals with strict nonpositive elementary extractions and positive extraction at every nonvacuum vertex. Match their vacuums and extend along lowering words: strictness of the elementary extractions makes each one-step extension unique, and the positive-extraction hypothesis ensures every nonvacuum vertex is reached by a finite lowering word. The comparison runs over finite color cycles and terminates after the height bound forced by the vertex's weight, so the isomorphism is well defined, unique and independent of the chosen lowering words. [step 2.1, F1]

4.1 The categorified graph. For any field and any general homogeneous nondegenerate $Q$ satisfying the hypotheses of the two one-step lemmas of [F3], the shift-orbit simple-module graph is lowering-generated with strict elementary extractions by [F3]; step 3.2 identifies it canonically with $B(\infty)$. In a first-strand cyclotomic quotient the surviving simple graph is exactly the survivor set of step 3.1, hence is $B(\lambda)$; the graph labeled by indecomposable projective covers $P(S)$ is the same graph under the unscaled cover--simple pairing of the cover-descent lemma, since the pairing matches each cover label with its simple head without rescaling. Operators on cover labels are transported from the simple graph; no arbitrary $\#$-dual-of-simple identification and no general global-basis theorem is used. [step 3.1, step 3.2, F3]

5.1 Choice bookkeeping. The argument is a chain of the inherited suppliers [F1] and [F2]; the Axiom of Choice is inherited exactly through the grand-loop crystal-basis and highest-weight projection contracts used in step 3.1 (partial inverses and survivor bijections), and through no other step. No further infinite choice is made in steps 1.1, 2.1 and 4.1, which are finite string, height and word computations. [step 1.1, step 3.1, F1, F2] ∎

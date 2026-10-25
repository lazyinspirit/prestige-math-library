---
id: lem-qftx-twistor-line-section-direct-image
kind: lemma
title: Smooth framed bundle of sections over real twistor lines
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 4
axiom_base: "ZF + full AC and DC for the cited proper cohomology-and-base-change theorem."
deps:
  - def-qftx-zero-fi-regular-adhm-and-twistor-data
  - thm-qftx-projective-gaga-for-monad-data
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-cohomology-and-base-change
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-grassmannian-standard-affine-charts
  - def-projective-bundle-scheme
  - thm-projective-bundle-represents-line-quotients
  - thm-projective-morphism-proper
  - lem-proper-flat-fp-cohomology-perfect-complex
  - lem-higher-direct-image-affine-localization
  - thm-nakayama-lemma
dependency_roles:
  def-qftx-zero-fi-regular-adhm-and-twistor-data: mathematical-premise
  thm-qftx-projective-gaga-for-monad-data: mathematical-premise
  thm-cohomology-projective-space-twisting-sheaves: mathematical-premise
  thm-cohomology-and-base-change: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  lem-grassmannian-standard-affine-charts: mathematical-premise
  def-projective-bundle-scheme: mathematical-premise
  thm-projective-bundle-represents-line-quotients: mathematical-premise
  thm-projective-morphism-proper: mathematical-premise
  lem-proper-flat-fp-cohomology-perfect-complex: mathematical-premise
  lem-higher-direct-image-affine-localization: mathematical-premise
  thm-nakayama-lemma: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§3, printed pp. 4–5: bundle of holomorphic sections over twistor lines and first-neighbourhood extension."
verification:
  precheck: pass
---

## Statement

Assume full AC and DC. Let $Z=\mathbb C\mathbb P^3$, let $G=\operatorname{Gr}(2,4)$ be the complex Grassmannian of projective lines in $Z$, and let $p:\mathscr L\to G$ be the universal line family with evaluation map $e:\mathscr L\to Z$. Let $\mathcal E\to Z$ be a holomorphic rank-$N$ bundle, $N\geq2$, with a positive Hermitian real structure and a unitary framing on the twistor line at $\infty$. Assume its restriction to every real twistor line $L_x$ is holomorphically and unitarily trivial. The degree-zero base-change maps at every real line are isomorphisms. Then $(p_*e^*\mathcal E)|_{S^4}$ is a smooth Hermitian rank-$N$ vector bundle, its fibre at $x$ is $H^0(L_x,\mathcal E|_{L_x})$, and the evaluation morphism identifies its pullback to the real incidence family with $e^*\mathcal E$. More precisely, for every real line, there is a complex-open neighbourhood in $G$ on whose entire universal-line family the evaluation morphism is an isomorphism. The framing on $L_\infty$ induces a unitary framing of this bundle at $\infty$.

## Statement references

[[thm-qftx-projective-gaga-for-monad-data]]

[[thm-cohomology-and-base-change]]

[[thm-cohomology-projective-space-twisting-sheaves]]

## Facts & Assumptions

**Given:** Full AC and DC, the holomorphic bundle and its linewise triviality, the exact positive Ward pairing and framing. The argument uses absolute projective GAGA; it does not require its restricted relative-family clause or a general Grauert theorem.

[A1] Absolute projective GAGA on P³ supplies an exact tensor equivalence and cohomology comparison. [[thm-qftx-projective-gaga-for-monad-data]]

[F1] The Grassmannian graph charts and projective bundle of line quotients construct the universal proper flat projective-line family. [[lem-grassmannian-standard-affine-charts]], [[def-projective-bundle-scheme]], [[thm-projective-bundle-represents-line-quotients]], [[thm-projective-morphism-proper]]

[F2] Proper finite-presentation cohomology/base change applies to a coherent base-flat sheaf; the finite projective cohomology complex computes every fiber and its cohomology is finite over the Noetherian affine base. Nakayama detects a zero finite stalk from a zero residue fiber. [[thm-cohomology-and-base-change]], [[lem-proper-flat-fp-cohomology-perfect-complex]], [[lem-higher-direct-image-affine-localization]], [[thm-nakayama-lemma]]

[F3] The cohomology of a trivial bundle on P¹ is C^N in degree zero and zero in positive degree. [[thm-cohomology-projective-space-twisting-sheaves]]

[F4] The real lines, positive reality pairing and framing have the exact incidence convention. [[def-qftx-zero-fi-regular-adhm-and-twistor-data]], [[def-axiom-of-choice]], [[def-dependent-choice]]

## Proof

**Given:** The data and the absolute comparison interface [A1].

1.1 Algebraize the holomorphic bundle using [A1]. Its algebraic sheaf is locally free: the holomorphic bundle is dualizable, the exact tensor equivalence transports its evaluation and coevaluation and reflects their triangle identities, and those identities give a finite dual basis on each local algebraic chart, hence a finite projective module. In a splitting C⁴=A⊕B into two-planes, a graph chart of G consists of X:A→B and the incidence is (X,[λ])↦[λ,Xλ], with p a product with P(A). In the library quotient convention it is the projective bundle of the dual of the tautological subbundle. Thus [F1] gives properness, finite presentation and flatness, and e*E is a coherent locally free sheaf flat over G. [A1, F1, construct]

2.1 At a real line L, absolute P³ GAGA applied to the coherent algebraic sheaf i*(E|L), for the closed immersion i:L→P³, identifies its cohomology with that of the trivial analytic restriction. This uses no GAGA on the Grassmannian: closed-immersion direct image is exact, and its analytification is the same local quotient-module tensor construction. Hence the algebraic fiber cohomology is C^N in degree zero and zero above by [F3]. Its degree-one base-change map has zero target, so is surjective. By [F2] that map is an isomorphism; the finite stalk of R¹p*e*E has zero residue fiber, and Nakayama kills it on a neighborhood. The degree-one local-freeness criterion of cohomology/base change now gives surjectivity in degree zero. Its degree-zero case makes H=p*e*E a finite locally free rank-N bundle with all degree-zero base-change maps isomorphisms near L. [A1, F2, F3, step 1.1, algebra]

3.1 Evaluation p*H→e*E is a map of rank-N bundles and is invertible on L, since on its analytification it evaluates all constant sections of the trivial bundle. Its determinant-zero locus is closed. Properness of p makes the image closed in the parameter neighborhood; remove that image to obtain an entire neighboring family on which evaluation is an isomorphism. This is a local neighborhood of every real line, not a claim about all complex lines. [F1, F2, F3, step 2.1, algebra]

4.1 Analytify this actual evaluation isomorphism. On every local product V×P¹, a holomorphic function is constant on each P¹ fiber by the maximum principle, and its remaining function on V is holomorphic by evaluation at a fixed point. Thus p_an*O=O. Trivializing H locally gives p_an*p_an*H_an=H_an, where the inner star denotes pullback and the outer star denotes direct image. Consequently the analytic direct image of e_an*E is H_an, its evaluation is the analytified evaluation, and all degree-zero analytic fiber maps are isomorphisms. The same product calculation after any base change identifies the base-change maps. No circular assumption of analytic base-change surjectivity or broad Grauert theorem is used. [A1, F3, step 3.1, algebra]

5.1 The quaternionic involution on G sends a graph X to j_B X j_A^{-1}; its fixed graph matrices form the real four-dimensional quaternionic subspace, whose complexification is the entire graph space. These charts embed HP¹ smoothly and totally really into G. On its incidence family evaluation is a diffeomorphism onto Z: the inverse sends [v] to (span_C(v,jv),[v]), smoothly in projective charts, and j²=-1 excludes dependence of v,jv. Restrict H_an to this real locus to obtain the smooth rank-N bundle with the claimed fibers and evaluation. The positive pairing induces its Hermitian matrix by evaluating local section frames at a smoothly chosen point on each line; this proves smoothness and positivity, independently of parallelness. At infinity the given unitary frame induces the section-bundle frame. All arguments use only the stated local absolute comparison. [A1, F4, step 3.1, step 4.1, algebra] ∎

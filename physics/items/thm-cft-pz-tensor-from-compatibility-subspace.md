---
id: thm-cft-pz-tensor-from-compatibility-subspace
kind: theorem
title: "Compatibility subspace yields the P(z)-tensor product"
status: published
origin: pipeline
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-cft-pz-tensor-product
  - def-cft-pz-compatibility-subspace
  - thm-cft-strongly-graded-contragredient-duality
  - def-cft-pz-intertwining-map
dependency_roles:
  "def-cft-pz-tensor-product": mathematical-premise
  "def-cft-pz-compatibility-subspace": mathematical-premise
  "thm-cft-strongly-graded-contragredient-duality": mathematical-premise
  "def-cft-pz-intertwining-map": mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part IV"
      url: "https://arxiv.org/pdf/1012.4198v2"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 4
---

## Statement

Let C be a full category of grading-restricted generalized V-modules and W1,W2∈C. If $S=W1$ P(z) W2 with its induced P(z)-dual module action and its contragredient S' are both objects of C, then its contragredient (W1 P(z) W2)' together with the dual of the natural inclusion W1 P(z) W2↪(W1⊗W2)* is the P(z)-tensor product of W1,W2 in C.

## Facts & Assumptions

**Given:** Work over C with the formal-variable, grading, and branch conventions in the linked definitions.

[F1] [[def-cft-pz-tensor-product]]: For a strongly A-graded Möbius or conformal vertex algebra V, an abelian group Ã containing A, z∈C×, and a specified full category C of strongly Ã-graded generalized V-modules with grading-preserving Möbius-module morphisms, a P(z)-tensor product of W1,W2∈C is an object T∈C and a P(z)-intertwining map ι:W1⊗W2→T̄ such that for every X∈C, composition with ι gives a natural bijection $Hom_C(T,X)\to M[P(z)]_X^{W1,W2}$. Existence is an additional theorem or hypothesis, not part of the definition.

[F2] [[def-cft-pz-compatibility-subspace]] defines the transported field $Y'_{P(z)}$ by the displayed residue formula and defines $\mathrm{COMP}_{P(z)}$ by lower truncation of this field together with the transported compatibility identity. Its P(z)-local grading restriction requires λ to be a finite sum of generalized $L'_{P(z)}(0)$-eigenvectors, each homogeneous for $\widetilde A$; the generated doubly graded subspace must have finite-dimensional $(\beta)_{[h]}$ components and be lower truncated in each fixed integer weight string. For each P(z)-map $I$ with target $W\in\mathcal C$, the transpose $I'(w')(w_1\otimes w_2)=\langle w',I(w_1\otimes w_2)\rangle$ defines an image; the definition of $W_1\,P(z)\,W_2$ sums these images and states that transposed Jacobi and grading put each one in the stated subspace.

[F3] [[thm-cft-strongly-graded-contragredient-duality]] proves the opposite-field restricted dual, componentwise evaluation $M\cong M''$, and functorial restricted transposition for strongly graded generalized modules over strongly graded Möbius or conformal V, preserving the auxiliary and generalized-weight gradings and all three Möbius operators. It imposes no CFT-type hypothesis. Use the ambient strong gradings and morphisms stipulated in F1 and F2. Each global generalized-weight space here is finite dimensional, so only finitely many auxiliary degrees occur at a fixed weight; the doubly restricted dual therefore agrees with $\bigoplus_h(M_{[h]})^*$ used below. Its weight support and global grading restriction are the same as those of M.

[F4] [[def-cft-pz-intertwining-map]]: Let V be strongly A-graded Möbius or conformal, let Ã contain A, and let W1,W2,W3 be strongly Ã-graded generalized V-modules; fix z∈C×. Retain the ambient strong gradings from F1 and F2. The morphisms preserve those gradings and commute with the three Möbius operators; no conformal vector, CFT-type condition or trivial auxiliary-group specialization is required. A P(z)-intertwining map of type (W3;W1,W2) is a linear map $I:W1\otimes W2\to W̄3=\prod _{h\in C}W3_[h]$ whose Ã-degrees add, for which $π_{h-m}I(w1\otimes w2)=0$ for all sufficiently large integers m for each fixed h,w1,w2, and which satisfies the P(z)-Jacobi identity and, for $j=-1,0,1$, $L(j)I(w1\otimes w2)=I(w1\otimes L(j)w2)+\sum_{i=0}^{j+1}\binom(j+1,i)z^i$ I((L(j-i)w1)⊗w2). There is no L(-1)-derivative axiom for I. Formal variables x0,x1 are independent; z is a fixed complex number.

## Proof

1.1 Write $S=W_1\,P(z)\,W_2$ and $T=S'$. For $w_1,w_2$ define $\iota(w_1\otimes w_2)$ in $\overline T=\prod_h(S_{[h]})^*$ by evaluation on each finite-dimensional $S_{[h]}$: its pairing with $s\in S$ is $s(w_1\otimes w_2)$. The value generally belongs to the completion, not to $T$. Each $s$ is a finite sum of vectors in images $I_j'(X_j')$ by the definition of $S$. Grading compatibility follows from the grading of each $I_j$. Lower truncation follows uniformly because $T$ is grading restricted: if its real weights are bounded below by $B$, then $T_{[h-m]}=0$ for every integer $m>\mathrm{Re}(h)-B$, independently of the vector used to test the component. The compatibility identity for $s$ is exactly the transpose of P(z)-Jacobi for $\iota$, and the transported $L(j)$ identities transpose to its three required bracket identities. Thus $\iota$ is a P(z)-map. The assumption $T\in C$ is needed here; fullness alone does not imply it. [given, F1, F2, F3, F4, algebra]

2.1 For a P(z)-map $I:W_1\otimes W_2\to\overline X$ with $X\in C$, the map $I':X'\to S$, $I'(x')(w_1\otimes w_2)=\langle x',I(w_1\otimes w_2)\rangle$, has image in $S$ by its defining sum. Transposed P(z)-Jacobi makes it a module homomorphism for the induced action on $S$. The transposed three Möbius identities also make it intertwine the transported Möbius operators, and the degree-addition condition preserves auxiliary degree; in particular it preserves generalized weights. Its restricted transpose is therefore a grading-preserving Möbius-module map $S'\to X''$ by F3. Identify $X''$ with $X$ using F3; since $C$ is full and $S',X\in C$, the resulting map $\eta:T\to X$ is a morphism of $C$. Evaluation of pairings gives $I=\overline\eta\circ\iota$. [given, F1, F2, F3, F4, step 1.1, algebra]

3.1 Conversely, if $\eta:T\to X$ has this property, transpose it and use the evaluation identifications $T'=S''\cong S$, $X''\cong X$. For every $x'\in X'$, its transpose must be the vector in $S$ with values $\langle x',I(w_1\otimes w_2)\rangle$ for all $w_1,w_2$. The inclusion $S\hookrightarrow(W_1\otimes W_2)^*$ is injective, so this vector is uniquely $I'(x')$. Thus $\eta$ is unique. The pairing formula commutes with postcomposition, which gives naturality and the representing property. [F1, F2, F3, step 2.1, algebra] ∎

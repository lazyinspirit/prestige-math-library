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
dependency_level: 8
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
    - title: "Jean-Pierre Serre, Géométrie algébrique et géométrie analytique, Annales de l’Institut Fourier 6 (1956), 1–42"
      url: https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf
      locator: "Projective GAGA, Theorems 1–3 and proofs in §§12–17, printed pp. 19–27; local algebraic–analytic comparison and flat-pair result in §2, no. 6, and the Appendix."
verification:
  precheck: pass
---

## Statement

Assume full AC and DC. Let $Z=\mathbb C\mathbb P^3$, let $G=\operatorname{Gr}(2,4)$ be the complex Grassmannian of projective lines in $Z$, and let
$$\mathscr L=\{(g,z)\in G\times Z:z\in g\},\qquad p(g,z)=g,\qquad e(g,z)=z$$
be the universal line family and its projections. Let $\mathcal E\to Z$ be a holomorphic rank-$N$ bundle, $N\geq2$, with the positive Ward reality datum from the preceding “Zero-FI regular ADHM and framed twistor data” definition: a holomorphic nondegenerate pairing $b:\mathcal E\otimes\sigma^*\overline{\mathcal E}\to\mathcal O_Z$, linear in its first argument and conjugate-linear in its second, satisfying $b_{\sigma z}(v,u)=\overline{b_z(u,v)}$. Here $\sigma$ is the fixed antiholomorphic involution on $Z$. For each real line $L_x=\pi^{-1}(x)\cong\mathbb C\mathbb P^1$, where $\pi:Z\to S^4$ is the twistor projection fixed in that definition, the pairing defines $h_x(s,t)=b_z(s(z),t(\sigma z))$ on $H^0(L_x,\mathcal E|_{L_x})$, independent of $z\in L_x$; assume $h_x$ is positive definite and $\mathcal E|_{L_x}$ is holomorphically trivial. Equip its fibers with the metric transported from $h_x$ by evaluation, as in that definition. Let $L_\infty=\pi^{-1}(\infty)$ and fix a unitary trivialization $\mathcal E|_{L_\infty}\cong\mathcal O_{L_\infty}^{\oplus N}$ for this metric. Write $p^{\mathrm{an}}$ and $e^{\mathrm{an}}$ for the induced analytic maps. Identify $S^4$ with its real-line locus in $G$, write $g_x\in G$ for the line parameter corresponding to $x\in S^4$, and put $\mathcal H=(p^{\mathrm{an}})_*(e^{\mathrm{an}})^*\mathcal E$.

Let $\operatorname{ev}:(p^{\mathrm{an}})^*\mathcal H\to(e^{\mathrm{an}})^*\mathcal E$ be the canonical evaluation morphism, which evaluates a family of holomorphic sections at the point of its line.

Then, for every real line $L_x$, the canonical degree-zero analytic base-change map
$$\beta^0_{g_x}:\mathcal H_{g_x}\otimes_{\mathcal O_{G^{\mathrm{an}},g_x}}\mathbb C(g_x)\longrightarrow H^0(L_x,\mathcal E|_{L_x})$$
is an isomorphism, where $\mathbb C(g_x)=\mathcal O_{G^{\mathrm{an}},g_x}/\mathfrak m_{g_x}\cong\mathbb C$ is the residue field. The restriction $\mathcal H|_{S^4}$ is a smooth Hermitian rank-$N$ vector bundle with fibre $H^0(L_x,\mathcal E|_{L_x})$ at $x$, and evaluation identifies its pullback to the real incidence family with $(e^{\mathrm{an}})^*\mathcal E$. More precisely, for every real line there is a complex-open neighbourhood in $G$ on whose entire universal-line family the evaluation morphism is an isomorphism. The framing on $L_\infty$ induces a unitary framing of this bundle at $\infty$.

## Statement references

[[thm-qftx-projective-gaga-for-monad-data]]

[[thm-cohomology-and-base-change]]

[[thm-cohomology-projective-space-twisting-sheaves]]

[Serre, Theorems 1–3 and proofs in §§12–17, pp. 19–27; local comparison in §2, no. 6 and the Appendix](https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf)

## Facts & Assumptions

**Given:** Full AC and DC, the holomorphic bundle and its linewise triviality, the exact positive Ward pairing and framing. The argument uses absolute projective GAGA; it does not require its restricted relative-family clause or a general Grauert theorem.

[A1] Under full AC, the absolute clause of [[thm-qftx-projective-gaga-for-monad-data]] applies to $Z=\mathbb P^3_{\mathbb C}$: analytification is an exact tensor equivalence from coherent algebraic sheaves to coherent analytic sheaves, and its natural cohomology comparison is an isomorphism in every degree. We use its local absolute proof (steps 1.1–9.1), supplied by the local Oka-coherence, faithful-flatness, compact-coherent-finiteness and scalar-cohomology theorems listed there. This algebraizes $\mathcal E$ and compares the cohomology of closed-line restrictions. The theorem and its suppliers are draft proof carriers; their format and workflow stamps do not assert publication or independent proof acceptance. The premise here is their local mathematical derivation. Serre's article records the source of the theorem, while the local argument supplies the proof used here. No relative-family clause or external GAGA premise is used.

[F1] The Grassmannian graph charts and projective bundle of line quotients construct the universal proper flat projective-line family. [[lem-grassmannian-standard-affine-charts]], [[def-projective-bundle-scheme]], [[thm-projective-bundle-represents-line-quotients]], [[thm-projective-morphism-proper]]

[F2] Proper finite-presentation cohomology/base change applies to a coherent base-flat sheaf; the finite projective cohomology complex computes every fiber and its cohomology is finite over the Noetherian affine base. Nakayama detects a zero finite stalk from a zero residue fiber. [[thm-cohomology-and-base-change]], [[lem-proper-flat-fp-cohomology-perfect-complex]], [[lem-higher-direct-image-affine-localization]], [[thm-nakayama-lemma]]

[F3] Algebraically, the cohomology of a trivial rank-$N$ bundle on $\mathbb P^1$ is $\mathbb C^N$ in degree zero and zero in positive degree. Applying [A1] on $\mathbb P^3$ to the closed-line direct image of $\mathcal O_{\mathbb P^1}$ gives the same scalar analytic values, hence also the values for any analytically trivial rank-$N$ bundle. [[thm-cohomology-projective-space-twisting-sheaves]]

[F4] The real lines, positive reality pairing and framing have the exact incidence convention. [[def-qftx-zero-fi-regular-adhm-and-twistor-data]], [[def-axiom-of-choice]], [[def-dependent-choice]]

## Proof

**Given:** The data and the absolute comparison interface [A1].

1.1 Algebraize the holomorphic bundle using [A1]. Its algebraic sheaf is locally free: the holomorphic bundle is dualizable, the exact tensor equivalence transports its evaluation and coevaluation and reflects their triangle identities, and those identities give a finite dual basis on each local algebraic chart, hence a finite projective module. In a splitting C⁴=A⊕B into two-planes, a graph chart of G consists of X:A→B and the incidence is (X,[λ])↦[λ,Xλ], with p a product with P(A). In the library quotient convention it is the projective bundle of the dual of the tautological subbundle. Thus [F1] gives properness, finite presentation and flatness, and e*E is a coherent locally free sheaf flat over G. [A1, F1, construct]

2.1 Algebraize $\mathcal E$ by [A1], obtaining a locally free algebraic sheaf $\mathcal E_{\mathrm{alg}}$ on $Z$, and put $\mathcal H_{\mathrm{alg}}:=p_*e^*\mathcal E_{\mathrm{alg}}$. For a real line $L$, apply absolute projective GAGA to the coherent algebraic sheaf $i_*(\mathcal E_{\mathrm{alg}}|_L)$, where $i:L\hookrightarrow\mathbb P^3$ is the closed immersion. Exactness of closed-immersion direct image and the local tensor definition of analytification identify its analytic sheaf with $i^{\mathrm{an}}_*(\mathcal E|_L)$, so its cohomology is that of the trivial analytic restriction. Thus the algebraic fibre cohomology is $\mathbb C^N$ in degree zero and zero above by [F3]. The degree-one base-change map has zero target, hence is surjective. By [F2](a),(c) it is an isomorphism; the finite stalk of $R^1p_*e^*\mathcal E_{\mathrm{alg}}$ has zero residue fibre, and Nakayama kills it on a neighbourhood. The degree-one local-freeness criterion [F2](b) then gives surjectivity in degree zero. Applying [F2](a)–(c) in degree zero makes $\mathcal H_{\mathrm{alg}}$ finite locally free of rank $N$ near $L$, with degree-zero base-change isomorphisms there. [A1, F2, F3, step 1.1, algebra]

3.1 The algebraic evaluation morphism $p^*\mathcal H_{\mathrm{alg}}\to e^*\mathcal E_{\mathrm{alg}}$ is a map of rank-$N$ bundles and is invertible on $L$, since its restriction evaluates all constant sections of the trivial bundle. Its determinant-zero locus is closed. Properness of $p$ makes the image closed in the parameter neighborhood; remove that image to obtain an entire neighboring family on which evaluation is an isomorphism. This is a local neighborhood of every real line, not a claim about all complex lines. [F1, F2, F3, step 2.1, algebra]

4.1 Analytify the evaluation isomorphism from step 3.1. On every local product $V\times\mathbb P^1$, a holomorphic function is constant on each $\mathbb P^1$ fibre by the analytic degree-zero scalar assertion in [F3], and its remaining function on $V$ is holomorphic by evaluation at a fixed point. Thus $(p^{\mathrm{an}})_*\mathcal O_{\mathscr L^{\mathrm{an}}}=\mathcal O_{G^{\mathrm{an}}}$ locally. Trivializing $\mathcal H_{\mathrm{alg}}^{\mathrm{an}}$ over $V$ then gives $(p^{\mathrm{an}})_*(p^{\mathrm{an}})^*\mathcal H_{\mathrm{alg}}^{\mathrm{an}}\cong\mathcal H_{\mathrm{alg}}^{\mathrm{an}}$. Pushing forward the analytic evaluation isomorphism therefore identifies $\mathcal H_{\mathrm{alg}}^{\mathrm{an}}$ with $\mathcal H=(p^{\mathrm{an}})_*(e^{\mathrm{an}})^*\mathcal E$ on this neighbourhood, and identifies their evaluation morphisms. Hence the algebraic degree-zero base-change isomorphisms of step 2.1 give the analytic maps $\beta^0_{g_x}$ in the Statement. The same product calculation after any base change identifies the corresponding maps. No circular assumption of analytic base-change surjectivity or broad Grauert theorem is used. [A1, F3, step 3.1, algebra]

5.1 The quaternionic involution on $G$ sends a graph $X$ to $j_BXj_A^{-1}$; its fixed graph matrices form the real four-dimensional quaternionic subspace, whose complexification is the entire graph space. These charts embed $\mathbb H\mathbb P^1$ smoothly and totally really into $G$. On its incidence family evaluation is a diffeomorphism onto $Z$: the inverse sends $[v]$ to $(\operatorname{span}_{\mathbb C}(v,jv),[v])$, smoothly in projective charts, and $j^2=-1$ excludes dependence of $v,jv$. Restrict $\mathcal H$ to this real locus to obtain the smooth rank-$N$ bundle with the claimed fibres and evaluation. The positive pairing induces its Hermitian matrix by evaluating local section frames at a smoothly chosen point on each line; this proves smoothness and positivity, independently of parallelness. At infinity the given unitary frame induces the section-bundle frame. The only use of projective GAGA is the absolute comparison [A1]; all family base-change conclusions are established through [F2]. [A1, F4, step 3.1, step 4.1, algebra] ∎

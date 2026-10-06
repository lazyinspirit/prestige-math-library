---
id: lem-projection-formula-invertible-twist
kind: lemma
title: "Projection formula for invertible twists"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-proper-morphism
  - cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian
  - def-euler-characteristic-coherent-sheaf
  - def-higher-direct-image-sheaf
  - def-invertible-sheaf
  - def-locally-free-sheaf-finite-rank
  - lem-acyclic-direct-image-cohomology-comparison
  - cor-projective-cohomology-finite-dimensional-field
  - thm-pullback-pushforward-module-adjunction
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Section 31.33, applications to blowups"
    - title: "The Stacks Project, Cohomology of Sheaves, Section 20.54, Projection formula"
      url: "https://stacks.math.columbia.edu/tag/01E6"
      locator: "Lemmas 20.54.1 and 20.54.2: preservation of injectives by finite locally free tensor and projection formula"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Chapter 24 cohomology and base change, pp. 514-518 (used as an interface check)"
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered cumulative historical verification: original independent Step5 whole-item claim/body/proof reading for lem-projection-formula-invertible-twist, completed Step5 repairs/dispositions, and later exact Step7 local correction reasoning. Later correction evidence is local author repair/self-review, not an independent fresh audit. Every substantive preguard-to-current delta is covered by the recorded repair reason; no new review or historical audit stamp is claimed. Supplier/source coverage is limited to actual recorded passages/interfaces, excluding recursive foundational closure/all bibliography.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader and Step7 repair dispatch","content_sha256":"0e35afe3d3b62b4764eb540d44386f86ad5067efe756c998a9efe5b7fbcd9a85","evidence":["research/frontier-38-owner-30-reader-2.md","research/frontier-38-owner-30-reader-findings-2.json","research/frontier-38-owner-30-dispatch/reader-reader-2.result.json","research/frontier-38-owner-30-alpha-batch-2-5a-decisions.json","research/frontier-38-owner-30-step5-closure.json","research/frontier-38-owner-30-step7-auditor-baseline.json","research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u2.json","research/frontier-38-owner-30-dispatch/alpha-adjudicate-step7-v2-initial-r1-u2.result.json"],"historical_binding":{"preguard_raw_sha256":"d34a27e6abd46690575a4b34c8637013987c3b455cc2e29be27ddb3578ed374f","preguard_content_sha256":"66c3b38373e43575e52e2a3a4e770310d6c65fc3c4be4376f733d6fe15f71ec2","captured_carrier":{"path":"research/frontier-38-owner-30-dispatch/alpha-adjudicate-step7-v2-initial-r1-u2.attempt-1.log","line":6891},"postguard_content_sha256":"d2ba597d3c90438d399f3d20a9e83b573c0115ddb49177a59933965ef9e95234","final_carrier":"git d90f26208:items/lem-projection-formula-invertible-twist.md","publication_transformation":"status draft to published; verification excluded; remaining mathematics/source bytes match exact postguard carrier","original_read_completed_at":"2026-10-03T08:50:20.136Z","local_repair_completed_at":"2026-10-03T16:07:30.510Z","local_repair_reason":"F7 incorrectly attributed coherence to the Euler-characteristic definition. Separated that assertion into F9 with the actual coherent-module definition and the proper/finite-type Noetherian suppliers. Checked exact invertible tensor preserves injectives, the natural degree-zero projection map, resolution comparison, and the k-linear acyclic-image comparison; no extra assumptions on f are needed.","local_repair_qualification":"Local author repair/self-review; cumulative with original independent full item reading"}}
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $f\colon X\to Y$ be a morphism of schemes, let
$\mathcal F$ be a quasi-coherent $\mathcal O_X$-module and let $\mathcal L$
be an invertible $\mathcal O_Y$-module. Then the natural map

$$R^qf_*(\mathcal F)\otimes_{\mathcal O_Y}\mathcal L\longrightarrow R^qf_*\bigl(\mathcal F\otimes_{\mathcal O_X}f^*\mathcal L\bigr)$$

is an isomorphism for every $q\ge0$. In particular, if $f$ is a $k$-morphism, $X$ and $Y$ are proper
over a field $k$ and $\mathcal F$ is coherent, then the Euler characteristics
satisfy $\chi(X,f^*\mathcal L)=\chi(Y,\mathcal L)$ whenever
$f_*\mathcal O_X=\mathcal O_Y$ and $R^qf_*\mathcal O_X=0$ for $q>0$.

## Facts & Assumptions

**Given:** A morphism $f\colon X\to Y$ of schemes, a quasi-coherent $\mathcal O_X$-module $\mathcal F$ and an invertible $\mathcal O_Y$-module $\mathcal L$; the Axiom of Choice is inherited from the cohomology and adjunction suppliers cited below ([[def-axiom-of-choice]]).

[F1] [[def-higher-direct-image-sheaf]]: For a morphism of ringed spaces $f$ and an $\mathcal O_X$-module $\mathcal G$, the higher direct images are $R^qf_*\mathcal G=H^q(f_*I(\mathcal G)_{\mathrm{del}})$ for a fixed functorial injective resolution datum, with $R^0f_*\mathcal G=f_*\mathcal G$ canonically and $R^qf_*=0$ for $q<0$; the functor $f_*$ is left exact and additive.

[F2] [[thm-pullback-pushforward-module-adjunction]]: For a morphism of ringed spaces $f$, the inverse image functor $f^*$ on modules is left adjoint to the direct image functor $f_*$, with unit $\eta\colon\mathrm{id}\to f_*f^*$ and counit $\varepsilon\colon f^*f_*\to\mathrm{id}$.

[F3] [[def-invertible-sheaf]] and [[def-locally-free-sheaf-finite-rank]]: An invertible sheaf is locally free of rank one; its dual is an inverse for tensor product, and its pullback is invertible.

[F5] [[lem-acyclic-direct-image-cohomology-comparison]]: If the higher direct images of a module vanish, its cohomology equals the cohomology of its degree-zero direct image, naturally in every degree.

[F7] [[def-euler-characteristic-coherent-sheaf]]: For a scheme proper over a field $k$ and a coherent module, the Euler characteristic is the finite alternating sum of the $k$-dimensions of the cohomology groups.

[F8] [[cor-projective-cohomology-finite-dimensional-field]]: For a scheme $X$ proper over a field $k$ and a coherent $\mathcal O_X$-module $\mathcal F$, each $H^q(X,\mathcal F)$ is finite-dimensional over $k$ and only finitely many of the groups are nonzero.

[F9] [[def-coherent-module-scheme]]: On a locally Noetherian scheme, a finite-type quasi-coherent module is coherent. Schemes proper over a field are of finite type by [[def-proper-morphism]], and their affine coordinate rings are Noetherian by [[cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian]] (a field is a principal ideal domain).

## Proof

1.1 Tensoring with an invertible sheaf $L$ is an exact autoequivalence, with inverse tensoring with $L^\vee$: exactness is checked in local trivializations. It preserves injectives, since $\operatorname{Hom}(M,I\otimes L)\cong\operatorname{Hom}(M\otimes L^\vee,I)$ is exact in $M$ when $I$ is injective. The same statements hold on $X$ for $f^*L$. [F3]

1.2 For any module $G$ on $X$, adjunction gives the natural map $\nu_G:f_*G\otimes L\to f_*(G\otimes f^*L)$, adjoint to the counit map $f^*(f_*G)\otimes f^*L\to G\otimes f^*L$. On every open trivializing $L$ this is the identity under the trivializations, hence it is an isomorphism. This ordinary direct-image argument requires no quasi-compactness or separatedness of $f$. [F2, F3]

2.1 Take an injective resolution $I^\bullet$ of $\mathcal F$. By step 1.1, $I^\bullet\otimes f^*L$ is an injective resolution of $\mathcal F\otimes f^*L$. Naturality of $\nu$ gives an isomorphism of complexes $f_*I^\bullet\otimes L\cong f_*(I^\bullet\otimes f^*L)$. Exact tensor with $L$ commutes with taking cohomology, so the resulting isomorphism is precisely $R^qf_*\mathcal F\otimes L\cong R^qf_*(\mathcal F\otimes f^*L)$ for every $q$. [F1, step 1.1, step 1.2]

3.1 If $f_*\mathcal O_X=\mathcal O_Y$ and the higher direct images of $\mathcal O_X$ vanish, applying step 2.1 to $\mathcal O_X$ gives $f_*f^*L=L$ and $R^qf_*f^*L=0$ for $q>0$. For the $k$-morphism in the final assertion, the vanishing-direct-image comparison gives $k$-linear isomorphisms $H^n(X,f^*L)\cong H^n(Y,L)$. The proper schemes of the final assertion are locally Noetherian by [F9]; the line bundles are finite-type quasi-coherent modules by [F3], hence coherent by [F9], and their cohomology is finite-dimensional and vanishes in sufficiently high degree. Taking the finite alternating sums proves the Euler-characteristic identity. [F3, F5, F7, F8, F9, step 2.1] ∎

## Remarks

The formula uses invertibility to obtain an exact tensor autoequivalence. The Euler-characteristic clause uses the specified direct-image vanishing and requires no flatness of $f$.

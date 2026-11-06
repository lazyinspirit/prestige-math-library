---
id: def-cft-root-data-for-principal-w-levels
kind: definition
title: Root normalization and dual data for principal W levels
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
deps:
  - def-cft-finite-dimensional-simple-lie-algebra
  - lem-cft-root-system-of-simple-lie-algebra-is-irreducible
  - def-finite-weyl-root-system-lattice-and-chamber-conventions
  - lem-finite-weyl-positive-roots-and-simple-reflections
  - lem-finite-semisimple-cartan-root-and-string-structure
  - lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root
  - def-coroot-of-a-lie-algebra-root
  - def-coroot-and-dual-root-system
  - thm-rank-two-root-system-classification
  - def-dual-coxeter-number-for-normalized-form
  - lem-qftx-basic-form-scale
  - thm-serre-presentation-theorem
  - def-axiom-of-choice
dependency_roles:
  def-cft-finite-dimensional-simple-lie-algebra: mathematical-premise
  lem-cft-root-system-of-simple-lie-algebra-is-irreducible: mathematical-premise
  def-finite-weyl-root-system-lattice-and-chamber-conventions: mathematical-premise
  lem-finite-weyl-positive-roots-and-simple-reflections: mathematical-premise
  lem-finite-semisimple-cartan-root-and-string-structure: mathematical-premise
  lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root: mathematical-premise
  def-coroot-of-a-lie-algebra-root: mathematical-premise
  def-coroot-and-dual-root-system: mathematical-premise
  thm-rank-two-root-system-classification: mathematical-premise
  def-dual-coxeter-number-for-normalized-form: mathematical-premise
  lem-qftx-basic-form-scale: mathematical-premise
  thm-serre-presentation-theorem: mathematical-premise
  def-axiom-of-choice: mathematical-premise
domain: mathematics
library: mathematics
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: Appendix D.3 and the normalized invariant-form convention.
    - title: "Tomoyuki Arakawa, Rationality of W-algebras: principal nilpotent cases"
      url: https://arxiv.org/pdf/1211.7124v3
      locator: Theorem 10.2 and the principal-admissible level conventions.
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix a finite-dimensional complex simple Lie algebra $\mathfrak g$, Cartan subalgebra $\mathfrak h$, positive roots $\Phi^+$, and its unique highest root $\theta$ from lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root. Let $\Delta=\{\alpha_1,\ldots,\alpha_r\}$ be the simple roots and $\rho=\frac12\sum_{\alpha\in\Phi^+}\alpha$. Normalize the invariant form so long roots have squared length $2$. The Coxeter number is $h_{\mathfrak g}=1+\operatorname{ht}(\theta)$, where $\operatorname{ht}(\sum_i n_i\alpha_i)=\sum_i n_i$. The dual Coxeter number is $h^\vee_{\mathfrak g}=1+\rho(\theta^\vee)$, with the normalized-form identification supplied by lem-qftx-basic-form-scale.

For $i\ne j$, put $a_{ij}=\alpha_j(\alpha_i^\vee)$. Define the lacing number
$$r^\vee=\max\bigl(\{1\}\cup\{|a_{ij}|:i\ne j\}\bigr).$$
This agrees with the maximal edge multiplicity in the Dynkin diagram: by thm-rank-two-root-system-classification, every nonzero off-diagonal pair has absolute Cartan integers $(1,1)$, $(1,2)$, or $(1,3)$.

The dual root datum is $\Phi^\vee=\{\alpha^\vee:\alpha\in\Phi\}$ with positive roots $(\Phi^+)^\vee$ and transposed Cartan matrix. When a finite-dimensional simple Lie algebra $\widetilde{\mathfrak g}$ realizing that dual datum is supplied, use its normalized form to define $h^\vee_{\widetilde{\mathfrak g}}$ by def-dual-coxeter-number-for-normalized-form. No existence or uniqueness proof for this realization is included in this definition.

## Definition references


[[thm-rank-two-root-system-classification]]

[[def-dual-coxeter-number-for-normalized-form]]

[[lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root]]

[[lem-qftx-basic-form-scale]]

## Facts & Assumptions

**Given:** The simple Lie algebra, chosen Cartan and positive system, invariant form, and—when the second lacing branch is used—a simple Lie algebra $\widetilde{\mathfrak g}$ realizing the dual root datum.

[F1] [[lem-finite-semisimple-cartan-root-and-string-structure]]: the Cartan root set is finite and crystallographic, its root inner product is positive definite, and its coroots are defined.

[F2] [[lem-finite-weyl-positive-roots-and-simple-reflections]]: simple roots form a basis, every root has integral coordinates of one sign, and simple coroots form the coroot basis.

[F3] [[lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root]]: the finite root system has a unique highest root $\theta$, which is long.

[F4] [[lem-qftx-basic-form-scale]]: if $K$ is the Killing form and $B_0$ is the positive invariant form normalized so every long root has squared length $2$, then $K=2h^\vee_{\rm root}B_0$, where $h^\vee_{\rm root}:=1+\rho(\theta^\vee)$. [[def-dual-coxeter-number-for-normalized-form]] (Definition and Proof step 1.2): for a positive invariant form $B$ with this same long-root normalization, its adjoint Casimir $\Omega_B$ satisfies $B(\Omega_Bx,y)=K(x,y)$; it defines $h^\vee_B=\gamma_B/2$ when $\Omega_B=\gamma_B I$.

[F5] [[thm-rank-two-root-system-classification]]: for two nonorthogonal simple roots the nonzero Cartan integers have absolute values $1$ and $1$, $1$ and $2$, or $1$ and $3$.

[F6] [[thm-serre-presentation-theorem]]: assuming Choice, the Serre algebra of a based finite reduced crystallographic root system is finite dimensional semisimple, is simple for an irreducible system, and realizes that exact Cartan/root datum. Its converse identifies any realization with that Serre algebra.

[A1] [[def-axiom-of-choice]] is used only for the optional unconditional construction of the dual realizing algebra through F6. The Definition itself remains conditional on supplied dual data and needs no such construction when those data are already supplied.

## Proof

1.1 The finite root datum and the unique highest long root make the displayed heights and $h^\vee_{\rm root}:=1+\rho(\theta^\vee)$ well-defined. Let $K$ be the Killing form and $B_0$ the positive invariant form normalized so every long root has squared length $2$. The form $B$ in [[def-dual-coxeter-number-for-normalized-form]] is exactly $B_0$: both are positive scalar multiples of $K$ and impose the same normalization, which uniquely fixes that scalar. Write $h^\vee_{B_0}:=\gamma_{B_0}/2$ for the normalized-form dual Coxeter number. [given, F1, F4, algebra]

1.2 The crystallographic Cartan integers and F5 give $r^\vee\in\{1,2,3\}$, with the rank-one convention1, and identify it with the maximal edge multiplicity. [F1, F2, F5, algebra]

1.3 The dual set is itself finite reduced crystallographic: $s_\alpha(\beta^\vee)=(s_\alpha\beta)^\vee$ proves reflection closure, and the Cartan integers transpose. Its simple coroot basis and positive signs follow from F2. The underlying connected diagram is unchanged, hence it is irreducible. Under A1, F6 therefore constructs a finite-dimensional SIMPLE algebra realizing precisely this dual datum. Any other supplied realization is isomorphic to that Serre algebra by the converse part of F6. [F1, F2, F6, A1, algebra]

2.1 By F4, $B_0(\Omega_{B_0}x,y)=K(x,y)=2h^\vee_{\rm root}B_0(x,y)$ for every $x,y\in\mathfrak g$. Since $B_0$ is nondegenerate, $B_0((\Omega_{B_0}-2h^\vee_{\rm root}I)x,y)=0$ for every $y$ implies $\Omega_{B_0}=2h^\vee_{\rm root}I$. Hence $\gamma_{B_0}=2h^\vee_{\rm root}$ and $h^\vee_{B_0}=\gamma_{B_0}/2=h^\vee_{\rm root}$, which establishes the claimed identification of the root expression with the normalized-form dual Coxeter number. For a supplied dual realization $\widetilde{\mathfrak g}$, [[def-dual-coxeter-number-for-normalized-form]] defines $h^\vee_{\widetilde{\mathfrak g}}$ from its own normalized adjoint Casimir; isomorphisms of realizations preserve that normalized form and Casimir, so this value is independent of the realization. Thus all supplied-data expressions are well-defined, and under Choice the optional realizing algebra is available. [F4, F6, A1, step 1.3, algebra] ∎

## Proof status

The Definition is well-defined for its supplied data. Under the explicitly recorded Choice assumption, the published Serre realization theorem also supplies the dual simple algebra; no missing existence or normalization premise remains.

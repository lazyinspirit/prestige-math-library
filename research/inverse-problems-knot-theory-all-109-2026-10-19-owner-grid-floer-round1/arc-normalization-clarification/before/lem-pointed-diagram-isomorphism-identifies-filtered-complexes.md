---
id: lem-pointed-diagram-isomorphism-identifies-filtered-complexes
kind: lemma
title: "A pointed diagram isomorphism identifies the actual filtered count complexes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-admissible-pointed-heegaard-floer-data
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and knot invariants"
      url: "https://arxiv.org/pdf/math/0209056"
      locator: "Pointed constructions and diagram comparison in3.1–3.3; explicit transported-data count identification is proved locally"
    - title: "Manolescu, Ozsvath and Sarkar, A combinatorial description of knot Floer homology"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Section2 definitions; generator/disk/weight transport under a diagram isomorphism"
---

## Statement

Assume countable choice. Let $f$ be an orientation-preserving isomorphism of two embedded multipointed diagrams in the sense of the admissible pointed-diagram definition, with $k$ ordered pairs and $m=h+k-1$. Transport the complex structure $j$, area form, protected neighborhoods and almost complex path $J_t$ by its surface restriction and the induced symmetric-product map $\Psi=\operatorname{Sym}^m(f|_\Sigma)$.

Then $\Psi$ bijects generators and Whitney classes, preserves every $w_i,z_i$ multiplicity and their region coefficients, and gives translation-equivariant bijections of the actual holomorphic-strip spaces. Their linearizations are conjugate by the transported bundle maps and connections, so Fredholmness, actual real index and surjectivity are equivalent. Finite quotient counts and the finiteness conditions in the Definition hold on one side exactly when they hold on the other. Whenever the count differential is defined, its operator is conjugated by the $\mathbb F_2[U_1,\ldots,U_k]$-linear generator bijection
$$f_\#(\mathbf x)=\Psi(\mathbf x).$$
In particular if one side is a chain complex then so is the other and $f_\#$ is an actual chain isomorphism with inverse $(f^{-1})_\#$.

This isomorphism preserves the relative Maslov and Alexander formulas, and preserves the assigned gradings and filtration when the same normalization data are transported. It commutes with restriction to any single chosen variable action, every ordinary coefficient quotient and passage to the Alexander-associated-graded complexes. Transport of a chosen gradient vector field, its critical-ball modifications, plane-field extensions and Seifert surface preserves their first-Chern pairing normalization whenever those data are supplied. These assertions construct the isomorphism; they do not assert that an ambient isotopy induces the identity on generators or homology, or that two independently chosen almost complex paths have already been compared by continuation.

## Statement references

[[def-countable-choice]]

[[def-admissible-pointed-heegaard-floer-data]]

## Facts & Assumptions

**Given:** The actual orientation-preserving diagram isomorphism and the explicitly transported geometric and grading data in the Statement.

[F1] [[def-admissible-pointed-heegaard-floer-data]] supplies the generator tori, Whitney classes, intersection multiplicities, actual strip equation, Fredholm-index convention, count differential, relative grading formulas and diagram-isomorphism convention. Existence of the count operators is used only where the Statement explicitly presumes it.

## Proof

1.1 Put $\varphi=f|_\Sigma$ and define $j'=d\varphi\,j\,d\varphi^{-1}$, $\eta'=(\varphi^{-1})^*\eta$. The map $\varphi:(\Sigma,j)\to(\Sigma',j')$ is biholomorphic by this definition. Near any tuple, choose disjoint small surface disks about its distinct support points; their holomorphic coordinates and their transported coordinates give the same elementary symmetric coordinates on the corresponding symmetric powers. Thus $\Psi$ is a smooth diffeomorphism, including at repeated tuples, with inverse induced by $\varphi^{-1}$. It carries the diagonal, each point-divisor and each product torus to its stated counterpart; reordering attaching factors does not change their unordered symmetric-product image. Transporting $J_t$ by $J'_t=d\Psi J_t d\Psi^{-1}$ preserves its integrable protected neighborhoods, constant endpoint collars and tameness of the transported descended area form. These are actual allowed data on the second diagram. [F1, given, construct, algebra]

2.1 Postcomposition by $\Psi$ sends a disk representative and a disk homotopy to the corresponding representative and homotopy with the transported boundary and endpoints. Postcomposition by $\Psi^{-1}$ reverses it, so this bijects Whitney classes and generators. The surface region orientation and the divisor coorientation are transported without sign change. Consequently every local intersection multiplicity and every region coefficient is unchanged, in particular all $n_{w_i},n_{z_i}$. A periodic domain is carried to a periodic domain with the same coefficients; admissibility is equivalent. For $m=0$ both symmetric products are points and all these statements are the corresponding identity. [F1, step 1.1, construct, algebra]

3.1 The chain rule gives the exact nonlinear identity $$\partial_s(\Psi u)+J'_t(\Psi u)\partial_t(\Psi u)=d\Psi_u\bigl(u_s+J_t(u)u_t\bigr).$$ Thus $u$ solves the first strip equation exactly when $\Psi u$ solves the second. Boundaries and uniform ends are carried to the right ones, and longitudinal translation commutes with this composition. For finite-energy statements use the transported metric on the target symmetric product; the energy is exactly the same. Any other smooth metric on this compact target is uniformly equivalent, so energy finiteness is unchanged. This gives the claimed actual bijections and their inverses, not just matching formal domain counts. Composition and its inverse are continuous on smooth compact-source convergence, so they also preserve convergence of the actual strips where that topology is needed. [F1, step 1.1, step 2.1, construct, algebra]

4.1 Choose a connection and metric on the first tangent bundle and transport both by $\Psi$. Along a representative the map $d\Psi$ is an isometry of the pulled-back bundles and commutes with their covariant derivatives. It is therefore an isometry on the geometric $H^1$ domain and $L^2$ target norms, carrying the tangent boundary subbundles to their counterparts. Differentiating the identity in step 3.1 at a solution gives $$P_{\Psi u}\,d\Psi=d\Psi\,P_u.$$ The term differentiating $d\Psi$ times the nonlinear section is zero there. Equivalently covariantly differentiating with the transported connection is natural even before setting that section to zero. Hence kernels, ranges and cokernels correspond by these bounded invertible maps. Fredholmness, real index and surjectivity are equivalent, so every class index used in the count and relative grading formulas is preserved. This argument does not presume norm bounds on arbitrary untranslated coordinate frames: it uses the exact transported metric and connection. [F1, step 3.1, construct, algebra]

5.1 At index one the translation-equivariant bijection in step 3.1 descends to the quotient set, with inverse. It preserves finiteness and its parity. The complete list of pairs $(\mathbf y,\phi)$ with nonempty moduli, prescribed index and nonnegative marked multiplicities is carried bijectively by steps2.1–4.1, so the sum-finiteness requirement is equivalent too. Each summand has the same polynomial monomial because the ordered marks have the same multiplicities. Therefore $f_\#\partial=\partial' f_\#$ as actual polynomial operators whenever the count sums are defined. The inverse generator map satisfies the reverse identity. If $\partial^2=0$, conjugation gives $(\partial')^2=0$ and proves the asserted chain isomorphism. No moduli-existence or compactness assertion is being inferred from the transport alone. [F1, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 The relative differences $\mu-2\sum n_w$ and $\sum n_z-\sum n_w$ in [F1] are unchanged. Give corresponding generators the same normalization constants. The coefficient actions lower these gradings by the same amounts, so $f_\#$ and its inverse preserve the resulting gradings and Alexander filtration. Being linear over the full labeled polynomial ring, they remain inverse maps after restriction to $U\mapsto U_i$ or any ordinary quotient, and their filtered inverses pass to associated-graded maps. This uses inverse maps, not any unjustified assertion that tensoring commutes with homology. For a supplied vector-field normalization, transport its metric and Morse function as well: if $H'=H\circ f^{-1}$ and $g'=f_*g$, then $\nabla_{g'}H'=df(\nabla_gH)$ by the defining gradient pairing. Critical balls, chosen modifications, orthogonal plane fields and their extensions are carried exactly. Their oriented complex line bundles are isomorphic by $df$; local transition functions for the transported bundle are the same functions in transported charts. Thus the first-Chern cocycle and its evaluation on the transported oriented capped surface are unchanged. The boundary longitude and meridian disk are also carried by the induced tubular-neighborhood and filling identification. This proves the claimed normalization transport whenever those actual data are provided, without constructing the still separate grading theory. The explicit inverse and every construction above remain valid even when $f$ is an isotopy endpoint, but no identity action is thereby asserted. [F1, step 2.1, step 4.1, step 5.1, construct, algebra] ∎

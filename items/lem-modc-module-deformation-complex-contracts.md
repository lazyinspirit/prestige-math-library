---
id: lem-modc-module-deformation-complex-contracts
kind: lemma
title: Categorical separability contracts the module deformation complex
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-finite-semisimple-module-category-over-fusion-category
  - def-fusion-and-multifusion-category
  - lem-canonical-fusion-category-algebra-is-separable
  - lem-separability-contracts-normalized-categorical-hochschild-complex
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Sections 7.22 and 9.1
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
---

## Statement

Let $\mathcal C$ be a fusion category over an algebraically closed field of characteristic zero. For finite semisimple $\mathcal C$-module categories, the normalized deformation complexes of a fixed module action and of a fixed module functor, defined below, admit an explicit homotopy satisfying $dh+hd=\mathrm{id}$ in every positive degree. In particular their degree-two cohomology vanishes.

Use left actions initially, writing $M_X$ and $N_X$ for the action functors on $\mathcal M$ and $\mathcal N$. For a module functor $T:\mathcal M\to\mathcal N$, use its comparisons $\gamma_X:N_XT\to TM_X$. Set
$$C_T^n=\operatorname{Nat}\bigl((X_1,\ldots,X_n)\mapsto N_{X_1}\cdots N_{X_n}T,\ (X_1,\ldots,X_n)\mapsto TM_{X_1}\cdots M_{X_n}\bigr).$$
Here $C_T^0=\operatorname{Nat}(T,T)$. The zeroth coface is $(\gamma_{X_1}M_{X_2}\cdots M_{X_{n+1}})(N_{X_1}f_{X_2,\ldots,X_{n+1}})$; the last coface is $(f_{X_1,\ldots,X_n}M_{X_{n+1}})(N_{X_1}\cdots N_{X_n}\gamma_{X_{n+1}})$. The $j$th interior coface merges $X_j,X_{j+1}$ and transports $f$ by the specified module associators. Their alternating sum, with signs $(-1)^j$ for $0\leq j\leq n+1$, is $d$. Normalization means zero whenever any $X_j=\mathbf1$, using the given unit comparisons. For $T=\mathrm{id}_{\mathcal M}$ these are the module-action deformation cochains. For a fixed general $T$ they are the module-functor deformation cochains.

For the right-action convention of [[def-finite-semisimple-module-category-over-fusion-category]], apply this definition to $\mathcal C^{\mathrm{rev}}$ and reverse the variable list: $M_X(m)=m\odot X$, and the action comparison is $M_YM_X\to M_{X\otimes Y}$. In particular degree two is the space of natural endomorphisms of $(X,Y)\mapsto M_YM_X$, after transporting through the fixed action comparisons.

## Facts & Assumptions

[F1] The canonical algebra $K=\bigoplus_i i\boxtimes i^*$ in $\mathcal C\boxtimes\mathcal C^{\mathrm{rev}}$ has a separability element $e:\mathbf1\to K\otimes K$, by [[lem-canonical-fusion-category-algebra-is-separable]]. Here $\operatorname{ev}_i:i\otimes i^*\to\mathbf1$ fixes the duality convention. For split matrix units $q_a^r:r\to i\otimes j$ and $p_a^r:i\otimes j\to r$, its multiplication has components $\sum_a p_a^r\boxtimes(q_a^r)^*$.

[F2] The formula $h_nf=\lambda_B(\mathrm{id}\otimes f)(e\otimes\mathrm{id})$ contracts the positive-degree normalized Hochschild complex of a separable algebra with arbitrary bimodule coefficients, by [[lem-separability-contracts-normalized-categorical-hochschild-complex]].

## Proof

**Given:** The categories, actions, functor, comparisons, and cochain complex in the statement. All natural transformations are natural in both the objects of $\mathcal C$ and the module-category variable.

1.1 Put $\mathcal E=\operatorname{Fun}_k(\mathcal M,\mathcal N)$ and $\mathcal Q=\operatorname{End}_k(\mathcal N)\boxtimes\operatorname{End}_k(\mathcal M)^{\mathrm{rev}}$. The action $(U\boxtimes V)\cdot S=USV$ makes $\mathcal E$ a $\mathcal Q$-module category. These underlying categories are finite semisimple: after choosing their finitely many simple objects, linear functors and transformations are finite matrices of vector spaces and linear maps. The two action functors give a tensor functor $\mathcal C\boxtimes\mathcal C^{\mathrm{rev}}\to\mathcal Q$. Let $A$ be the image of $K$ and $e_A$ the image of $e$; tensor functors preserve the two separability identities. The comparisons $\gamma$ give an action $\rho_T:A\cdot T\to T$: on a simple summand it is the adjoint of $\gamma_i:N_iT\to TM_i$, namely $N_iTM_{i^*}\to T$. The product and unit equations for this action are exactly the module-functor equations, as one sees by inserting $\sum q_a^rp_a^r=\mathrm{id}_{i\otimes j}$ in the displayed multiplication of $K$. [given, F1, construct, algebra]

2.1 The object $B_T=\underline{\operatorname{End}}_{\mathcal Q}(T)$ represents $W\mapsto\operatorname{Hom}_{\mathcal E}(W\cdot T,T)$: explicitly, sum each simple object of $\mathcal Q$ with the multiplicity of the corresponding finite-dimensional Hom space. Composition of evaluations makes $B_T$ an algebra, and $\rho_T$ corresponds to an algebra map $A\to B_T$. In particular $B_T$ is an $A$-bimodule. Internal-Hom adjunction and duality give isomorphisms $$\operatorname{Hom}_{\mathcal Q}(A^{\otimes n},B_T)\cong\operatorname{Hom}_{\mathcal E}(A^{\otimes n}\cdot T,T)\cong C_T^n.$$ For the last map, the summand indexed by $(i_1,\ldots,i_n)$ is the adjunction $$\operatorname{Hom}_{\mathcal E}(N_{i_1\otimes\cdots\otimes i_n}TM_{(i_1\otimes\cdots\otimes i_n)^*},T)\cong\operatorname{Hom}_{\mathcal E}(N_{i_1\otimes\cdots\otimes i_n}T,TM_{i_1\otimes\cdots\otimes i_n}).$$ The module associators identify tensor-word actions with the iterated actions in the statement. Values on simple tuples extend uniquely to natural transformations because every object is a finite direct sum of simples. Thus these maps are isomorphisms, not just injections into the cochain spaces. [step 1.1, construct, algebra]

3.1 Under these isomorphisms the two outer Hochschild faces compose with $\rho_T$ on the two sides; taking their adjoints gives precisely the zeroth and last cofaces displayed in the statement. For an interior face, the component $\sum_a p_a^r\boxtimes(q_a^r)^*$ of multiplication inserts $\sum_{r,a}q_a^rp_a^r=\mathrm{id}$ in the adjacent tensor factors; its adjoint is the merge coface, transported by the module associators. The unit of $A$ is the image of the unit summand of $K$, so the normalized conditions also agree. Consequently the maps in the preceding step identify the stated normalized complex with the normalized Hochschild complex of $A$ with coefficients $B_T$. This also proves $d^2=0$ for the stated differential. [F1, step 1.1, step 2.1, algebra]

4.1 Denote this complex isomorphism by $\Phi_n:C_T^n\to\operatorname{Hom}_{\mathcal Q}(A^{\otimes n},B_T)$. For $n\geq1$ define the required homotopy by $$h_n(f)=\Phi_{n-1}^{-1}\bigl(\lambda_{B_T}(\mathrm{id}_A\otimes\Phi_n(f))(e_A\otimes\mathrm{id}_{A^{\otimes(n-1)}})\bigr).$$ All maps in this formula have been specified in the preceding steps. Fact [F2] and the complex isomorphism give $d h_n+h_{n+1}d=\mathrm{id}_{C_T^n}$ and preservation of normalization. The same proof with $T=\mathrm{id}_{\mathcal M}$ gives the action complex; replacing $\mathcal C$ by its tensor reversal gives the prescribed right-action convention. Thus every positive-degree cocycle is a coboundary, in particular every degree-two cocycle. [F2, step 3.1, construct, algebra] ∎
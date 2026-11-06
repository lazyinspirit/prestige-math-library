---
id: thm-cft-dual-fusion-product-sewing-factorization
kind: theorem
title: Fixed-surface dual-fusion sewing factorization
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
deps:
- thm-cft-dual-fusion-product-existence
- thm-cft-segal-sewing-convergence
- lem-cft-plumbing-proper-analytic-family
- def-cft-voa-conformal-block-and-dual-fusion-product
- def-cft-plumbing-and-sewing-parameter
- lem-cft-plumbing-local-smoothing-node
- def-cft-contragredient-generalized-module
- thm-cft-contragredient-generalized-module
- def-c2-cofinite-vertex-algebra
- def-grading-restricted-generalized-vertex-module
- def-axiom-of-choice
- lem-cft-cylinder-sewing-coefficient-inverse
- lem-cft-fixed-curve-partial-coinvariants-finite
- lem-cft-fixed-curve-strong-residue-and-vacuum-propagation
- thm-cft-contragredient-double-dual-isomorphism
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  thm-cft-dual-fusion-product-existence: mathematical-premise
  thm-cft-segal-sewing-convergence: mathematical-premise
  lem-cft-plumbing-proper-analytic-family: mathematical-premise
  def-cft-voa-conformal-block-and-dual-fusion-product: mathematical-premise
  def-cft-plumbing-and-sewing-parameter: mathematical-premise
  lem-cft-plumbing-local-smoothing-node: mathematical-premise
  def-cft-contragredient-generalized-module: mathematical-premise
  thm-cft-contragredient-generalized-module: mathematical-premise
  def-c2-cofinite-vertex-algebra: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-cft-cylinder-sewing-coefficient-inverse: mathematical-premise
  lem-cft-fixed-curve-partial-coinvariants-finite: mathematical-premise
  lem-cft-fixed-curve-strong-residue-and-vacuum-propagation: mathematical-premise
  thm-cft-contragredient-double-dual-isomorphism: mathematical-premise
axiom_use: Full AC is inherited from the compact-curve and analytic sewing suppliers;
  no additional physical assumption is made.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
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
sources:
  references:
  - title: 'Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex
      Operator Algebras III: The Sewing-Factorization Theorems'
    url: https://arxiv.org/pdf/2503.23995v4
    locator: Theorem 3.5 and proof, §§3.1.2–3.1.3, PDF pp. 53–54; Theorem 3.4 supplies
      the stronger component-meets-incoming case.
proof_strategy: direct
---

## Statement

Let $V$ be C2-cofinite and of CFT type. Let $F$ and $G$ be compact pointed Riemann surfaces. Give $F$ finitely many incoming points carrying a grading-restricted generalized $V^{\otimes N}$-module $W$ and $R$ outgoing points with disjoint local coordinates. Give $G$ finitely many incoming points carrying a grading-restricted generalized $V^{\otimes K}$-module $X$ and $R$ outgoing points with paired local coordinates. Assume each component of $F$ contains an incoming point, and each component of $G$ contains an incoming point or one of the paired outgoing points. Let $D_F(W)$ be the dual fusion product of $W$ along $F$, and place its contragredient module at the paired outgoing points of $G$. For nonzero sewing parameters $q_1,\ldots,q_R$ in the allowed polydisk, with their arguments fixed, the convergent sewing map
$$
\mathrm{Sew}_{\mathbf q}:\mathrm{CB}_G(X\otimes D_F(W)')\longrightarrow\mathrm{CB}_{F\#_{\mathbf q}G}(W\otimes X)
$$
is a linear isomorphism. The result requires neither rationality nor self-duality; it does not replace a later coend over modules by a direct sum over simple modules.

## Statement references

[[thm-cft-dual-fusion-product-existence]]

[[thm-cft-segal-sewing-convergence]]

[[lem-cft-plumbing-proper-analytic-family]]

[[def-cft-voa-conformal-block-and-dual-fusion-product]]

[[def-cft-contragredient-generalized-module]]

## Facts & Assumptions

**Given:** Exactly the full fixed-surface data and component hypotheses in the Statement.

[F1] [[thm-cft-dual-fusion-product-existence]] supplies the actual partial-block representing objects and their universal evaluation. [[lem-cft-fixed-curve-partial-coinvariants-finite]] supplies finite-dimensional partial quotients.

[F2] [[lem-cft-cylinder-sewing-coefficient-inverse]] supplies the explicit cylinder sewing inverse and its equivalent vacuum-sphere insertion form, for arbitrary joint incoming modules.

[F3] [[thm-cft-segal-sewing-convergence]] supplies absolute locally uniform ordinary sewing with finite logarithmic bounds and actual Ward annihilation.

[F4] [[lem-cft-fixed-curve-strong-residue-and-vacuum-propagation]] supplies fixed-curve vacuum propagation. [[thm-cft-contragredient-generalized-module]] and [[thm-cft-contragredient-double-dual-isomorphism]] supply restricted transpose, natural double duality and component actions.

## Proof

1.1 First suppose every component of G meets an incoming mark. The dual fusion product of the disjoint union with incoming module $W\otimes X$ is $D_F(W)\otimes D_G(X)$, including against joint test modules that do not factor. Here is a proof from the actual construction, without assuming a tensor-category decomposition. At outgoing cutoffs a,b its incoming Ward subspace is $J_{F,a}\otimes X+W\otimes J_{G,b}$, since a global differential on a disjoint union is a pair of differentials. Thus the partial quotient is $(W/J_{F,a})\otimes(X/J_{G,b})$. Both factors are finite dimensional by F1, so its dual is exactly their tensor dual. Taking the directed union over a,b gives $D_F(W)\otimes D_G(X)$ as a subspace of $(W\otimes X)^*$. The outgoing actions are factorwise by the defining propagation residues in F1. Hence its evaluation is the product of the two universal evaluations and its representing property follows from F1 on the disjoint union. The same proof applies to any finite number of components and to the auxiliary three-point spheres below. [F1, algebra]

2.1 Let Q be the three-point sphere of F2, let $H=D_Q(V)$, and let $\omega=\gamma_Q(\mathbf1,-)\in\mathrm{CB}_N(H)$ on the two-point sphere N. Fix a factorization $q_j=p_j^+p_j^-$ inside the respective coordinate radii, with logarithms adding. Regard H' at each remaining pair of outgoing marks as one joint incoming label. Iterating the cylinder insertion isomorphism of F2 over j gives an isomorphism $$\mathrm{CB}_{F\sqcup G}(W\otimes X\otimes(H')^{\otimes R})\longrightarrow\mathrm{CB}_{F\#_{\mathbf q}G}(W\otimes X).$$ Each step sews one copy of N using its block omega. Every intermediate component retains an original incoming mark, so F2's component condition holds throughout. Eliminating its two sphere coordinates gives the original plumbing equation with parameter $p_j^+p_j^-$; disjoint fixtures commute. This constructs an inverse for the iterated map, rather than comparing dimensions. [F2, step 1.1, construct]

3.1 Step 1.1 and the representing property identify the source of step 2.1 with $\operatorname{Hom}((H')^{\otimes R},D_F(W)\otimes D_G(X))$. Restricted transposition identifies it with $\operatorname{Hom}(D_F(W)'\otimes D_G(X)',H^{\otimes R})$; the restricted dual of the displayed external tensor product is the tensor of the restricted duals because every joint weight block is a finite tensor product. The universal property for the disjoint union $Q^{\sqcup R}$ and vacuum propagation at its R incoming V labels then identify the last Hom space with $$\mathrm{CB}_{N^{\sqcup R}}(D_F(W)'\otimes D_G(X)').$$ The composed map is restriction of the universal blocks at the vacua, exactly $\omega^{\otimes R}$ after the module map; it is not an assumed factorization formula. [F1, F4, step 1.1, step 2.1, algebra]

4.1 A block tau in that last space is the same as a module map $T:D_G(X)'\to D_F(W)$, through $\tau(a',b')=\langle a',Tb'\rangle$. To prove that this is an actual algebraic module map, first view the pairing as a map into the completion of $D_F(W)$. The two-point Ward identity in each sphere says $\tau(Y_j^o(u,z)a',b')=\tau(a',Y_j(u,z)b')$. For $u=\omega$ this intertwines all component $L_j(0)$, so the image of a vector in one joint generalized-weight block has that same weight. That block of $D_F(W)$ is finite dimensional; the image therefore lies in the algebraic module. The remaining modes give the module-map identity by the same separating pairing. Conversely every such module map gives those Ward identities. Restricted transposition and the representing property on G identify these maps in turn with $\mathrm{CB}_G(X\otimes D_F(W)')$. [F1, F4, step 3.1, algebra]

5.1 Under these identifications, the isomorphism of step 2.1 is the sewing map in the Statement. Check this on finite joint-weight blocks: insert tau's pairing $\langle a',Tb'\rangle$ and contract each finite coevaluation. The two sphere sewings contribute $(p_j^+)^{L_j(0)}(p_j^-)^{L_j(0)}=q_j^{L_j(0)}$, with their finite nilpotent logarithmic exponentials; the two universal blocks give exactly the representing block on F and the chosen block on G. This is an equality of formal generalized-power-log coefficients. F3's absolute locally uniform convergence for all these sewings permits the finite-block contractions and their regrouping analytically at the chosen parameters. Thus the original sewing map is the composite of the explicit isomorphisms above. This proves both surjectivity and injectivity in the strengthened component case. [F2, F3, step 2.1, step 3.1, step 4.1, algebra]

6.1 Under the original weaker hypothesis on G, add one vacuum incoming point on each component of G lacking an incoming mark. Every component of the enlarged G meets an incoming point, so the preceding argument applies. F4 identifies its source block space with the original source by vacuum evaluation. After sewing, every component meets an original incoming point: a component of G lacking one has a paired point and is thereby joined to a component of F, which has one. Thus F4 also identifies the enlarged sewn target with the original target. Finite coefficient contraction commutes with vacuum evaluation, so these two identifications form a commuting square with the two sewing maps. The upper map is an isomorphism by step 5.1, and both vertical maps are isomorphisms by F4; hence the original map is an isomorphism. All modules and their joint actions retain the unchanged generalized conventions, with no rationality or self-duality assumption. [given, F3, F4, step 5.1, algebra] ∎

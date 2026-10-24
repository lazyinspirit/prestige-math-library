---
id: ex-fubini-verified-on-a-two-object-index
kind: example
title: "Fubini checked by hand on a product of two walking arrows"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  truth_risk: "All three ends must come out with the same four elements, and the canonical isomorphisms must be the identity under the stated identifications."
  counterexample_search: "The cone conditions were written out at each of the three non-identity morphisms of the product index category, including the diagonal one, and checked for consistency; the inner end was computed at both values of the surviving parameter, and the two orders of iteration were computed separately rather than one asserted from the other."
deps: [thm-fubini-for-ends, prop-the-end-of-a-functor-mute-in-its-first-variable-is-the-limit-of-that-functor, def-parametrised-end-and-parametrised-coend, def-end-and-coend, def-product-category, def-limit-and-colimit-of-a-diagram, prop-sets-and-functions-form-category-set]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $\mathcal C$ and $\mathcal D$ both be the walking arrow, with objects $0$
and $1$ and one non-identity morphism $u:0\to1$
([[def-product-category]]). Let $F:\mathcal C\to\mathbf{Set}$ be given by
$F(0)=\{a,b\}$, $F(1)=\{\ast\}$ and $F(u)$ the only function between them
([[prop-sets-and-functions-form-category-set]]), and let

$$T(c_1,d_1,c_2,d_2):=F(c_2)\times F(d_2),$$

an integrand on
$(\mathcal C\times\mathcal D)^{\mathrm{op}}\times(\mathcal C\times\mathcal D)$
that ignores both of its contravariant variables. All three objects named by
[[thm-fubini-for-ends]] are computed here by hand and each has four elements:

$$\int_{(c,d)}T(c,d,c,d)\;=\;\int_{c}\int_{d}T(c,d,c,d)\;=\;\int_{d}\int_{c}T(c,d,c,d)\;=\;F(0)\times F(0).$$

## Facts & Assumptions

**Given:** The two walking arrows, the functor $F$ and the integrand $T$ displayed above.

[F5] Sets as objects and functions as morphisms form a large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[F3] The product category has objects the pairs, componentwise identities, and componentwise composition $(f',g')\circ(f,g)=(f'\circ f,g'\circ g)$ ([[def-product-category]]).

[F2] A limit of a diagram is a terminal cone: explicitly, for every cone $(X,\xi)$ there exists a unique morphism $u:X\to L$ such that $\lambda_j u=\xi_j$ for every $j$ ([[def-limit-and-colimit-of-a-diagram]]).

[F1] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

[F4] A parametrised end is a choice, for every object of the parameter category, of an end taken in the two dinatural variables with the remaining variables held fixed ([[def-parametrised-end-and-parametrised-coend]]).

[L2] For $G:\mathcal K\to\mathcal M$ and $G'(k_1,k_2):=G(k_2)$, the end of a functor made mute in its contravariant variable is the ordinary limit of that functor ([[prop-the-end-of-a-functor-mute-in-its-first-variable-is-the-limit-of-that-functor]]).

[L1] Under a chosen family of inner ends in each order, an end over a product index category and the two iterated ends exist together and agree, any two being joined by the unique isomorphism commuting with every component ([[thm-fubini-for-ends]]).

## Verification

**Proof technique:** direct.

1.1 Since $T$ ignores its two contravariant variables, [L2] applies with $\mathcal K=\mathcal C\times\mathcal D$ and $G(c,d)=F(c)\times F(d)$: the end over the product index category is the ordinary limit of $G$. A limit of a diagram on the walking arrow is the value at $0$, since a cone $(\lambda_0,\lambda_1)$ over $A\to B$ satisfies $\lambda_1=h\lambda_0$ and is therefore determined by $\lambda_0$. [F1, F3, F5, L2]

2.1 The limit of $G$ is $F(0)\times F(0)$, with four elements. Writing a cone with apex $X$ as $\lambda_{(c,d)}=(\mu_{(c,d)},\nu_{(c,d)})$, the cone condition at $(1_c,u)$ gives $\mu_{(c,1)}=\mu_{(c,0)}$ and $\nu_{(c,1)}=F(u)\nu_{(c,0)}$, the condition at $(u,1_d)$ gives $\nu_{(1,d)}=\nu_{(0,d)}$ and $\mu_{(1,d)}=F(u)\mu_{(0,d)}$, and the condition at $(u,u)$ then holds automatically, both sides being $(F(u)\mu_{(0,0)},F(u)\nu_{(0,0)})$. So a cone is exactly a pair of functions $X\to F(0)$, and by [F2] the terminal one has apex $F(0)\times F(0)$. [F2, F3, step 1.1]

3.1 The iterated ends give the same object. Holding the two $\mathcal C$-variables fixed at $(c_1,c_2)$ leaves the integrand $(d_1,d_2)\mapsto F(c_2)\times F(d_2)$, again mute in its contravariant variable, so by [L2] the inner end is the limit over the walking arrow of $d\mapsto F(c_2)\times F(d)$, which by step 1.1 is the value at $0$, namely $F(c_2)\times F(0)$. That chosen family is itself mute in $c_1$, so the outer end is the limit of $c\mapsto F(c)\times F(0)$, which is $F(0)\times F(0)$. Exchanging the roles of $\mathcal C$ and $\mathcal D$ runs the same two computations in the other order and gives $F(0)\times F(0)$ again, since the integrand is symmetric in the two pairs of variables. [F4, L2, step 1.1, step 2.1]

4.1 The three objects therefore agree elementwise, and the identification is the identity of $F(0)\times F(0)$: an element $(z,w)$ has wedge component at $(c,d)$ equal to $(F_{0\to c}(z),F_{0\to d}(w))$, where $F_{0\to 0}$ is the identity and $F_{0\to 1}=F(u)$, and the same pair names the corresponding element of each iterated end. This is the conclusion [L1] predicts, computed here rather than quoted. [F1, L1, step 2.1, step 3.1] ∎

## Remarks

The integrand is deliberately mute in its contravariant variables, which is what makes every end here an ordinary limit and lets all three objects be listed by hand. The example therefore exhibits the three objects and the isomorphisms between them; it does not exercise the part of the Fubini argument that handles a genuinely two-sided integrand.

The condition at the diagonal morphism $(u,u)$ is checked rather than skipped. It is implied by the other two, and seeing that it is implied is the point: the separate-variable conditions really do generate the joint one on this index category.

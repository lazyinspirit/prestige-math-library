---
id: thm-fubini-for-ends
kind: theorem
title: "Fubini: an end over a product index category and the two iterated ends exist together and agree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-a-wedge-on-a-product-index-category-is-dinatural-in-each-variable-separately, thm-a-chosen-family-of-ends-assembles-into-a-functor-of-the-parameters, thm-a-family-natural-in-the-parameter-factors-through-the-parametrised-end, def-parametrised-end-and-parametrised-coend, def-end-and-coend, def-wedge-and-cowedge, def-product-category, def-opposite-category, def-functor-and-contravariant-functor, thm-ends-and-coends-are-unique-up-to-unique-isomorphism]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Theorem 1.3.1"
      url: "https://arxiv.org/pdf/1501.02503"
    - title: "B. Richter, From Categories to Homotopy Theory (author's draft), Proposition 4.6.3"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (2.8)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Statement

Let $T:(\mathcal C\times\mathcal D)^{\mathrm{op}}\times(\mathcal C\times\mathcal D)\to\mathcal E$
be a functor, reindexed as a functor
$T(c_1,d_1,c_2,d_2)$ on
$\mathcal C^{\mathrm{op}}\times\mathcal D^{\mathrm{op}}\times\mathcal C\times\mathcal D$
([[def-product-category]], [[def-opposite-category]]).

Assume a chosen family of inner ends in each of the two orders
([[def-parametrised-end-and-parametrised-coend]]): an end
$S(c_1,c_2)=\int_{d}T(c_1,d,c_2,d)$ for every pair of objects of $\mathcal C$,
and an end $S'(d_1,d_2)=\int_{c}T(c,d_1,c,d_2)$ for every pair of objects of
$\mathcal D$, each carrying the functor structure of
[[thm-a-chosen-family-of-ends-assembles-into-a-functor-of-the-parameters]].

Then an end over a product index category and the two iterated ends exist
together and agree: the three objects

$$\int_{(c,d)}T(c,d,c,d),\qquad \int_{c}\int_{d}T(c,d,c,d),\qquad \int_{d}\int_{c}T(c,d,c,d)$$

are such that if any one exists then all three do, and any two of them are
joined by the unique isomorphism compatible with every component
([[thm-ends-and-coends-are-unique-up-to-unique-isomorphism]]).

The same statement holds for coends, with a chosen family of inner coends in
each order and initial cowedges throughout.

No smallness hypothesis on $\mathcal C$ or $\mathcal D$ is used or claimed.

## Facts & Assumptions

**Given:** A functor $T$ as displayed, together with a chosen family of inner ends in each of the two orders and their functor structures.

[F1] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge, and every wedge factors through a terminal one by exactly one morphism ([[def-end-and-coend]]).

[F2] A wedge from $d$ to $T$ is a dinatural transformation from a constant functor to $T$: a family $\omega_c:d\to T(c,c)$ with $T(1_c,f)\circ\omega_c=T(f,1_{c'})\circ\omega_{c'}$; a morphism of wedges is a morphism of the vertices commuting with every component; dually for cowedges ([[def-wedge-and-cowedge]]).

[F7] A parametrised end of $T$ is a choice, for every object $p$ of the parameter category, of an end taken in the two dinatural variables with the remaining variables held fixed ([[def-parametrised-end-and-parametrised-coend]]).

[F5] The product category has objects the pairs, componentwise identities, and componentwise composition $(f',g')\circ(f,g)=(f'\circ f,g'\circ g)$ ([[def-product-category]]).

[F6] The opposite category has the same objects and reverses every morphism: $\mathcal C^{\mathrm{op}}(A,B)=\mathcal C(B,A)$, and $(\mathcal C^{\mathrm{op}})^{\mathrm{op}}=\mathcal C$ strictly ([[def-opposite-category]]).

[F8] A functor satisfies $F(1_A)=1_{FA},\qquad F(g\circ f)=Fg\circ Ff$ ([[def-functor-and-contravariant-functor]]).

[L1] A family indexed by the objects of $\mathcal C\times\mathcal D$ is a wedge on a product index category is exactly a family dinatural in each variable separately, the two conditions being the wedge equation at $(f,1_d)$ and at $(1_c,g)$ ([[lem-a-wedge-on-a-product-index-category-is-dinatural-in-each-variable-separately]]).

[L2] A chosen parametrised end carries exactly one functor structure making every counit component natural in the parameter, characterised by $\omega^{p'}_c\circ E(u)=T(u,1_c,1_c)\circ\omega^{p}_c$ ([[thm-a-chosen-family-of-ends-assembles-into-a-functor-of-the-parameters]]).

[L3] For a parameter category $\mathcal Q^{\mathrm{op}}\times\mathcal Q$, a family into a parametrised end is natural, or dinatural, in the parameter exactly when its composite with the counit is: a family $\psi_q:Y\to E(q,q)$ is a wedge over $E$ if and only if every $\omega^{(q,q)}_c\circ\psi_q$ is a wedge over the integrand with the dinatural variables held at $c$ ([[thm-a-family-natural-in-the-parameter-factors-through-the-parametrised-end]]).

[L4] Two ends of one functor are joined by exactly one isomorphism commuting with every component, and dually for coends; so an end and a coend are unique up to a unique isomorphism compatible with every component ([[thm-ends-and-coends-are-unique-up-to-unique-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Under the reindexing, $T$ is a functor of four slots, contravariant in the first two and covariant in the last two, and holding the two $\mathcal C$-slots fixed at a pair $(c_1,c_2)$ leaves a functor of the two $\mathcal D$-slots whose chosen end is $S(c_1,c_2)$, with counit $\theta^{(c_1,c_2)}_d$ natural in the parameter $(c_1,c_2)$ by [L2]. Symmetrically for $S'$ with the roles of $\mathcal C$ and $\mathcal D$ exchanged. [F2, F5, F6, F7, L2, given]

2.1 Fix an object $X$ of $\mathcal E$. Given a wedge $\omega$ from $X$ to $T$, [L1] makes it dinatural in each variable separately; dinaturality in $d$ at fixed $c$ is exactly the wedge equation for the family $(\omega_{(c,d)})_d$ over the integrand with the $\mathcal C$-slots held at $(c,c)$, so by [F1] there is exactly one $\psi_c:X\to S(c,c)$ with $\theta^{(c,c)}_d\psi_c=\omega_{(c,d)}$ for every $d$. By [L3], applied with parameter category $\mathcal C^{\mathrm{op}}\times\mathcal C$, that family $\psi$ is a wedge over $S$ if and only if every $\theta^{(c,c)}_d\psi_c$, which is $\omega_{(c,d)}$, is dinatural in $c$ at fixed $d$ — which is the other half of [L1]. Conversely a wedge $\psi$ over $S$ produces $\omega_{(c,d)}:=\theta^{(c,c)}_d\psi_c$, dinatural in $d$ because $\theta^{(c,c)}$ is a wedge precomposed with $\psi_c$, and dinatural in $c$ by [L3] again, hence a wedge over $T$ by [L1]. [F1, F2, F7, L1, L3, step 1.1]

3.1 The two assignments of step 2.1 are mutually inverse, since each $\psi$ is the unique factorisation of the $\omega$ it produces, and $\omega$ is recovered from $\psi$ by the defining equation. A morphism $h:X\to X'$ satisfies $\omega'_{(c,d)}h=\omega_{(c,d)}$ for every $(c,d)$ exactly when it satisfies $\psi'_ch=\psi_c$ for every $c$: one direction is composition with $\theta^{(c,c)}_d$, and the other is the uniqueness in [F1]. So the wedge category of $T$ and the wedge category of $S$ are isomorphic over the identity on vertices, terminal objects correspond, and $\int_{(c,d)}T(c,d,c,d)$ exists exactly when $\int_cS(c,c)$ does, with the same vertex. [F1, F2, step 2.1]

4.1 The same argument with the roles of $\mathcal C$ and $\mathcal D$ exchanged, applied to the chosen family $S'$, gives that $\int_{(c,d)}T(c,d,c,d)$ exists exactly when $\int_d S'(d,d)$ does, again with the same vertex. Hence any one of the three objects exists exactly when the others do, and by [L4] any two choices of them are joined by exactly one isomorphism commuting with every component. [F1, L4, step 3.1]

5.1 For the coend clause, let $U(x_1,x_2):=T(x_2,x_1)$ on objects and $U(g,h):=T(h,g)$ on morphisms, read as a functor $(\mathcal C\times\mathcal D)^{\mathrm{op}}\times(\mathcal C\times\mathcal D)\to\mathcal E^{\mathrm{op}}$; it satisfies the functor laws by [F8] and [F6], since reversing both the pair of slots and the direction of the target twice returns the composition order of $T$. Its diagonal values are those of $T$, and by [F2] a wedge from $X$ to $U$ in $\mathcal E^{\mathrm{op}}$ is precisely a cowedge from $T$ to $X$ in $\mathcal E$, a morphism of wedges being a morphism of cowedges reversed; so a terminal wedge over $U$ is an initial cowedge under $T$, that is a coend of $T$. Applying steps 3.1 and 4.1 to $U$ in $\mathcal E^{\mathrm{op}}$, with the chosen family of inner coends of $T$ as the chosen family of inner ends of $U$, gives the coend clause in full. [F1, F2, F6, F8, step 3.1, step 4.1] ∎

## Remarks

The route is through the universal property and not through a formula. In particular the target $\mathcal E$ is not assumed to have copowers, products or any other structure, and neither index category is assumed small: what is assumed is exactly that the inner ends have been chosen, which is what the statement of the theorem says.

The reindexing in step 1.1 is part of the content and not bookkeeping. A wedge over $T$ is indexed by the objects of $\mathcal C\times\mathcal D$ and constrained by its morphisms, and it is only after the source is written as $\mathcal C^{\mathrm{op}}\times\mathcal D^{\mathrm{op}}\times\mathcal C\times\mathcal D$ that the two one-variable conditions can be separated at all.

---
id: lem-canonical-fusion-category-algebra-is-frobenius
kind: lemma
title: The canonical algebra of a fusion category is Frobenius
status: published
dependency_level: 0
origin: session
deps:
  - def-fusion-and-multifusion-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Sections 7.20–7.21
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
---

## Statement

Let $\mathcal C$ be a fusion category over an algebraically closed field. Write $\mathcal D=\mathcal C\boxtimes\mathcal C^{\mathrm{rev}}$, acting on $\mathcal C$ by $(X\boxtimes Y)\cdot V=X\otimes V\otimes Y$. Choose duals with $\operatorname{ev}_i:i\otimes i^*\to\mathbf1$ and $\operatorname{coev}_i:\mathbf1\to i^*\otimes i$. The canonical algebra $K=\underline{\operatorname{End}}_{\mathcal D}(\mathbf1)$ is $\bigoplus_i i\boxtimes i^*$, with multiplication induced by composition of evaluations and unit the inclusion of the unit summand. Projection $\lambda:K\to\mathbf1\boxtimes\mathbf1$ to that summand makes $\beta=\lambda\mu$ a nondegenerate pairing. Its inverse $c:\mathbf1\to K\otimes K$ defines a Frobenius comultiplication
$$\Delta=(\mu\otimes\mathrm{id})(\mathrm{id}\otimes c)=(\mathrm{id}\otimes\mu)(c\otimes\mathrm{id}).$$
This comultiplication is coassociative, is a $K$-bimodule morphism, and has counit $\lambda$, with $\lambda\eta=1$. No nonvanishing dimension or pivotal structure is assumed.

## Proof

**Given:** The action, duality convention, and field hypotheses in the statement. Associators and unitors are suppressed using coherence.

1.1 The direct sum $K$ represents $(X,Y)\mapsto\operatorname{Hom}_{\mathcal C}(X\otimes Y,\mathbf1)$ by semisimplicity and duality. Evaluation $K\cdot\mathbf1\to\mathbf1$ therefore induces a unit and multiplication by composition. To specify multiplication without an implicit diagram, choose split matrix units $q_a^r:r\to i\otimes j$ and $p_a^r:i\otimes j\to r$ with $p_a^rq_b^s=\delta_{rs}\delta_{ab}\mathrm{id}_r$ and $\sum_{r,a}q_a^rp_a^r=\mathrm{id}_{i\otimes j}$. The $(i,j)$-to-$r$ component of $\mu$ is $\sum_a p_a^r\boxtimes(q_a^r)^*$. This expression is independent of matrix units. In either iterated triple multiplication the inserted sums of matrix units are identities, so both products are composition of the same three evaluations. This proves associativity; the unit is inclusion of the unit summand. [given, construct, algebra]

2.1 The pairing $\beta=\lambda\mu$ has no component between the $i$ and $j$ summands unless $j$ is dual to $i$. For a dual pair, the displayed multiplication shows its component is the tensor product of a nonzero projection $i\otimes j\to\mathbf1$ with the dual of its splitting $\mathbf1\to i\otimes j$. These are perfect evaluation pairings between dual simple objects, by rigidity. Hence every simple block of the induced map from $K$ to its dual is invertible, proving nondegeneracy. Let $c:\mathbf1\to K\otimes K$ be its inverse pairing, so $(\beta\otimes\mathrm{id})(\mathrm{id}\otimes c)=\mathrm{id}_K=(\mathrm{id}\otimes\beta)(c\otimes\mathrm{id})$. Associativity gives $\beta(\mu\otimes\mathrm{id})=\beta(\mathrm{id}\otimes\mu)$, and taking its mates gives $\Delta=(\mu\otimes\mathrm{id})(\mathrm{id}\otimes c)=(\mathrm{id}\otimes\mu)(c\otimes\mathrm{id})$. Taking mates once more gives $(\mu\otimes\mathrm{id})(\mathrm{id}\otimes\Delta)=\Delta\mu=(\mathrm{id}\otimes\mu)(\Delta\otimes\mathrm{id})$ and coassociativity; the inverse-pairing equations and $\beta=\lambda\mu$ give $(\lambda\otimes\mathrm{id})\Delta=\mathrm{id}=(\mathrm{id}\otimes\lambda)\Delta$. These mate calculations are justified by composing with the perfect pairing; each resulting equality is respectively the associative triple product or one of the two inverse-pairing identities. [step 1.1, construct, algebra] ∎

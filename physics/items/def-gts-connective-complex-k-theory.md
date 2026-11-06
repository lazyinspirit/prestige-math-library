---
id: def-gts-connective-complex-k-theory
kind: definition
title: Connective complex K-theory spectrum
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
axiom_strength: ZF + full AC inherited from the complex K-theory spectrum supplier.
deps:
  - thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory
  - def-stable-homotopy-groups-of-a-sequential-prespectrum
  - def-sequential-prespectrum-spectrum-and-adjoint-structure-maps
  - thm-complex-bott-periodicity
  - def-axiom-of-choice
justified_by: []
dependency_roles:
  thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory: mathematical-premise
  def-stable-homotopy-groups-of-a-sequential-prespectrum: mathematical-premise
  def-sequential-prespectrum-spectrum-and-adjoint-structure-maps: mathematical-premise
  thm-complex-bott-periodicity: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Daniel Grady, On the differential K-theory of moduli stacks
      url: https://arxiv.org/pdf/2501.03108v2
      locator: Section 5, connective complex K-theory spectrum k and its Chern character map.
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 24, Section 2, printed pp. 207–208, Bott maps and the KU Omega-prespectrum.
    - title: Mark Hovey, Brooke Shipley and Jeff Smith, Symmetric spectra
      url: https://www.math.uic.edu/~bshipley/symmetric.pdf
      locator: Definitions 1.2.2, 2.1.1, 2.1.3, 2.2.3, 3.1.1 and 3.1.3, and Proposition 2.2.1; symmetric spectra, symmetric sequences, smash product, S-module description and stable equivalences.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

For multiplicative data use **simplicial symmetric spectra**, with the following conventions. A pointed simplicial set is a functor from the opposite of the category of finite nonempty linearly ordered sets and order-preserving maps to pointed sets. Write $\Delta[d]_m=\operatorname{Hom}_{\mathrm{ord}}([m],[d])$, with $[d]=\{0,\ldots,d\}$, and let $\partial\Delta[d]$ be its union of proper faces. Put $S^1=\Delta[1]/\partial\Delta[1]$ and $S^n=(S^1)^{\wedge n}$, with $S^0$ the two-point unit; $\wedge$ is the pointed product modulo the wedge. A symmetric sequence $E$ consists of pointed simplicial sets $E_n$, $n\ge0$, with basepoint-preserving actions of the permutation groups $\Sigma_n$. Its tensor product is
$$(E\otimes F)_n=\bigvee_{p+q=n}(\Sigma_n)_+\wedge_{\Sigma_p\times\Sigma_q}(E_p\wedge F_q).$$
Here the subscript means the orbit quotient for the block-permutation action, and $+$ adjoins a disjoint basepoint. The symmetry exchanges the two factors and their coordinate blocks. The sphere sequence $S=(S^n)_{n\ge0}$ has multiplication by concatenation of sphere coordinates. A symmetric spectrum is a unital associative left $S$-module: a symmetric sequence with equivariant maps $S^p\wedge E_q\to E_{p+q}$ satisfying the unit and iterated-action identities. Its structure maps are the cases $p=1$; morphisms preserve the actions. Define
$$E\wedge_S F=\operatorname{coeq}(E\otimes S\otimes F\rightrightarrows E\otimes F),$$
using the two $S$-actions, with the right action on $E$ obtained by the symmetry. A **ring spectrum** here is such an $R$ with morphisms $\eta:S\to R$ and $\mu:R\wedge_S R\to R$ satisfying $\mu(\mu\wedge_S1)=\mu(1\wedge_S\mu)$ and $\mu(\eta\wedge_S1)=1=\mu(1\wedge_S\eta)$, with the canonical associativity and unit identifications. A map of ring spectra preserves both $\eta$ and $\mu$.

Specify also the category in which stable brackets are taken. A weak equivalence of simplicial sets means that geometric realization induces a bijection of path components and isomorphisms of all homotopy groups at every basepoint. A level equivalence of symmetric spectra is a weak equivalence at every level. A symmetric Omega-spectrum has Kan levels (each map from the union of all but one face of $\Delta[d]$ extends over $\Delta[d]$, for $d\ge1$) and weak-equivalence adjoints $E_n\to\operatorname{Map}_*(S^1,E_{n+1})$. Call $T$ injective if every map $A\to T$ extends over each levelwise injective level equivalence $A\to B$. Put $\operatorname{Map}(E,T)_d=\operatorname{Hom}(E\wedge\Delta[d]_+,T)$, where the tensor with a pointed simplicial set is levelwise. A **stable equivalence** $f:E\to F$ means that $\pi_0\operatorname{Map}(F,T)\to\pi_0\operatorname{Map}(E,T)$ is bijective for every injective symmetric Omega-spectrum $T$. Define $\mathrm{SH}=\mathrm{Sp}^{\Sigma}[W^{-1}]$, where $W$ is this class: formally adjoin inverses to its maps and impose the category and inverse relations. Brackets $[E,F]$ mean $\operatorname{Hom}_{\mathrm{SH}}(E,F)$. In particular, the equivalences used in these brackets are specified, rather than inferred from naive stable groups of arbitrary symmetric spectra.

For a based CW space $X$, its suspension spectrum is the symmetric spectrum $(\Sigma^\infty X)_n=S^n\wedge\operatorname{Sing}_*X$, where pointed singular simplices are based at the constant basepoint simplex. Write $\Sigma^qE$ for the stable suspension shift: for $q\ge0$ it is $S^q\wedge E$ levelwise, and for $q=-a<0$ use levelwise $\operatorname{Map}_*(S^a,E^{\Omega})$, with the induced structure maps, where a functorial stable-equivalence replacement $E\to E^{\Omega}$ with Omega-spectrum target is fixed as part of the model data. For these data compute $\pi_j(E)$ from the underlying realized sequential Omega-prespectrum $|E^{\Omega}|$ by $\operatorname{colim}_{n}\pi_{n+j}(|E^{\Omega}_n|)$, starting with $n+j\ge2$. Thus the earlier sequential-prespectrum definitions specify the stable-group calculation; the symmetric structure supplies the multiplication and stable mapping convention.

Fix the periodic complex $K$-theory ring spectrum $KU$, together with its Bott underlying Omega-prespectrum model $KU_{2r}=\mathbb Z\times BU$ and $KU_{2r+1}=U$ for $r\ge0$. Here $U=\operatorname{colim}_sU(s)$ under $a\mapsto\operatorname{diag}(a,1)$ and $BU=\operatorname{colim}_s\operatorname{Gr}_s(\mathbb C^{2s})$ under addition of a fixed complex line; take well-pointed CW models, based at the identity and the zero virtual bundle. The adjoint structure maps are the bundle-clutching equivalence $U\to\Omega(\mathbb Z\times BU)$ and the Bott equivalence $\mathbb Z\times BU\to\Omega U$, normalized by the Bott generator. These displayed spaces specify an underlying Omega-model, rather than extra permutation actions on those very spaces. The chosen ring multiplication induces stable-bundle tensor product. The representing convention is $KU^q(Y,B)=[\Sigma^\infty(Y/B),\Sigma^q KU]$ for a finite CW pair, identified with its complex $K^q(Y,B)$, with $Y/\varnothing=Y_+$.

A **connective cover datum** for $KU$ is a map $i:k\to KU$ of ring spectra, with the above choices of underlying Omega-models, such that $\pi_j(k)=0$ for $j<0$ and $\pi_j(i)$ is an isomorphism for $j\ge0$. Fix the standard connective cover used in the source model, together with its complexified Chern character $c:k\to H\mathbb C[u]$, where $\mathbb C[u]$ has zero differential and $u$ has homological degree $2$, and $H$ denotes its multiplicative Eilenberg–Mac Lane spectrum. For any CW space $Y$ and $q\in\mathbb Z$, put $k^q(Y)=[\Sigma^\infty Y_+,\Sigma^q k]$. These are topological spectrum data, prior to any differential refinement.

## Definition references

[[thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory]]

[[def-stable-homotopy-groups-of-a-sequential-prespectrum]]

[[def-sequential-prespectrum-spectrum-and-adjoint-structure-maps]]

[[thm-complex-bott-periodicity]]


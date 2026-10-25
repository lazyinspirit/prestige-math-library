---
id: def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types
kind: definition
title: "Affine, almost simple, diagonal, product action, and twisted wreath types"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-imprimitive-wreath-product-of-permutation-groups, def-regular-actions, def-almost-simple-finite-group, prop-unique-abelian-minimal-normal-subgroup-gives-affine-type, def-external-semidirect-product, thm-external-semidirect-product-is-a-group]
verification:
  precheck: n/a
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local TW definition and construction audit; source and actual algebra interfaces read; no independent judgment or classification-proof certification."
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
    - title: "M. W. Liebeck, C. E. Praeger, and J. Saxl, On the O'Nan-Scott Theorem for Finite Primitive Permutation Groups"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/9286080793AA683DFB749077A44F9305/S144678870003216Xa.pdf/div-class-title-on-the-o-nan-scott-theorem-for-finite-primitive-permutation-groups-div.pdf"
---

## Definition

For a finite primitive permutation group $G \le \operatorname{Sym}(\Omega)$,
the five coarse O'Nan-Scott types used on this page are:

- **Affine type:** the socle is the unique minimal normal subgroup, it is
  abelian and regular, and [[prop-unique-abelian-minimal-normal-subgroup-gives-affine-type]]
  identifies it with a finite vector space.
- **Almost simple type:** the socle is a nonabelian simple group and the whole
  group lies between that socle and its full automorphism group in the sense of
  [[def-almost-simple-finite-group]].
- **Diagonal type:** the socle is a direct product $T^k$, with $k\ge2$, of isomorphic
  nonabelian simple groups, and the action is the standard diagonal action on a
  coset space of a diagonal subgroup.
- **Product action type:** after identifying $\Omega$ with $\Delta^\ell$ for
  some $\ell\ge2$, there is a primitive group $H$ on $\Delta$ of almost simple
  or diagonal type, with $N=\operatorname{Soc}(H)$, such that
  $$N^\ell=\operatorname{Soc}(G)\le G\le H\wr K,$$
  where $K\le S_\ell$ is the transitive group induced by $G$ on the
  coordinates and the wreath product has its product action. If
  $(h_1,\ldots,h_\ell;k)\in H^\ell\rtimes K$, its product action is
  $$(\delta_1,\ldots,\delta_\ell)\longmapsto(\delta_{k^{-1}(1)}h_{k^{-1}(1)},\ldots,\delta_{k^{-1}(\ell)}h_{k^{-1}(\ell)}).$$
- **Twisted wreath type:** $G$ is permutation equivalent to the following
  group on $B$, and this action is primitive. Take a finite nonabelian simple
  group $T$, a faithful transitive permutation group $P\le S_k$, $k\ge2$,
  its point stabilizer $Q=P_1$, and a homomorphism
  $\varphi:Q\to\operatorname{Aut}(T)$ whose image contains
  $\operatorname{Inn}(T)$. With automorphisms composed as left operators, set
  $$B=\{f:P\to T: f(xq)=\varphi(q)^{-1}(f(x))\text{ for every }x\in P,q\in Q\}.$$
  Multiplication in $B$ is pointwise. Define
  $$\alpha_p(f)(x)=f(p^{-1}x).$$
  The twisted wreath product is $B\rtimes_\alpha P$, with the convention of
  [[def-external-semidirect-product]], acting on $B$ by
  $$(b,p)\cdot c=b\alpha_p(c).$$
  Its socle is the unique minimal normal subgroup $B\cong T^k$, acting
  regularly; its degree is $|T|^k$. Primitivity is a required condition on
  these data, not a consequence of transitivity of $P$ alone.

The function construction is well defined: specifying values on one
representative of each of the $k$ cosets $xQ$ determines a unique function,
because $\varphi(q_1q_2)^{-1}=\varphi(q_2)^{-1}\varphi(q_1)^{-1}$.
Evaluation there identifies the pointwise group with $T^k$. The maps
$\alpha_p$ preserve its defining condition and satisfy
$\alpha_p\alpha_r=\alpha_{pr}$, so
[[thm-external-semidirect-product-is-a-group]] applies and the displayed
permutation formula respects multiplication. These are finite choices.

For the socle assertion, the normal subgroups of $T^k$ are products of its
factors: commutating an element of a normal subgroup with one factor isolates
that coordinate, and simplicity and the trivial centre of $T$ then give the
entire factor whenever its projection is nontrivial. The transitive action
of $P$ on the factors makes $B$ minimal normal. If an element $(b,p)$
centralizes $B$, then $\alpha_p$ is an inner automorphism of $B$ and hence
fixes every factor. Faithfulness of $P$ forces $p=1$, and then $b$ is central
in $B$, so $b=1$. Any distinct minimal normal subgroup would centralize $B$
(their commutator lies in their trivial intersection). Therefore no such
subgroup exists.

These conventions implement LPS Section 1, type III(c), using left actions.
Defining these types does not prove that every finite primitive group belongs
to one of them, nor that a proof of that classification avoids CFSG.

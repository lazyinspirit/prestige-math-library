---
id: lem-principal-parts-cech-h1-presentation
kind: lemma
title: "H^1 of a line bundle on a curve as principal parts modulo meromorphic and regular sections"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-derived-long-exact-sequence
  - def-axiom-of-choice
  - def-invertible-sheaf
  - def-principal-parts-sheaf-line-bundle-curve
  - def-sheaf-cohomology-derived-global-sections
  - lem-constant-sheaf-on-irreducible-space-is-flasque
  - thm-exactness-of-sheaves-stalkwise
  - thm-flasque-sheaves-acyclic
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the flasque-acyclicity
supplier. Let $k$ be a field, let $C$ be a smooth proper geometrically
integral curve over $k$, and let $\mathcal L$ be an invertible
$\mathcal O_C$-module. Let $\mathcal L_\eta$ be the constant sheaf of meromorphic
sections of $\mathcal L$ and $\mathcal P(\mathcal L)=\mathcal L_\eta/\mathcal L$
its sheaf of principal parts, with stalks
$\mathcal P(\mathcal L)_p=\mathcal L_\eta/\mathcal L_p$ at the closed points
$p$. Then there is a canonical $k$-linear isomorphism
$$H^1(C,\mathcal L)\;\cong\;\operatorname{coker}\Bigl(\mathcal L_\eta\longrightarrow\textstyle\bigoplus_p \mathcal L_\eta/\mathcal L_p\Bigr),$$
that is, $H^1(C,\mathcal L)$ is the $k$-vector space of finite-support families
of local principal parts modulo the principal parts of global meromorphic
sections of $\mathcal L$. Equivalently, it is the cokernel of the map
$H^0(C,\mathcal L_\eta)\to H^0(C,\mathcal P(\mathcal L))$ induced by the short
exact sequence $0\to\mathcal L\to\mathcal L_\eta\to\mathcal P(\mathcal L)\to0$.
The classes of global meromorphic sections are the coboundaries. A global
regular section has zero principal part at every closed point, so a class is
represented by finitely many local principal parts modulo global meromorphic
principal parts.

## Facts & Assumptions

**Given:** a field $k$, a smooth proper geometrically integral curve $C$ over
$k$, an invertible $\mathcal O_C$-module $\mathcal L$, the constant sheaf
$\mathcal L_\eta$ of meromorphic sections, and the principal-parts sheaf
$\mathcal P(\mathcal L)=\mathcal L_\eta/\mathcal L$.

[F1] The sheaf $\mathcal L_\eta$ is the constant sheaf with value the
one-dimensional $K$-vector space $\mathcal L_\eta$ ($K=k(C)$ the function
field), the natural map $\mathcal L\to\mathcal L_\eta$ is injective, and the
quotient $\mathcal P(\mathcal L)=\mathcal L_\eta/\mathcal L$ is a torsion
$\mathcal O_C$-module with generic stalk $0$ and stalks
$\mathcal P(\mathcal L)_p=\mathcal L_\eta/\mathcal L_p$ at closed points $p$;
it is the direct sum of the skyscraper sheaves with values
$\mathcal L_\eta/\mathcal L_p$, so
$H^0(C,\mathcal P(\mathcal L))=\bigoplus_p\mathcal L_\eta/\mathcal L_p$ and
the map $\mathcal L_\eta\to H^0(C,\mathcal P(\mathcal L))$ is the diagonal
$s\mapsto(s+\mathcal L_p)_p$, whose image consists of the finite-support
families arising as principal parts of global meromorphic sections
([[def-principal-parts-sheaf-line-bundle-curve]], [[def-invertible-sheaf]]).

[F2] The curve $C$ is irreducible, so the constant sheaf $\mathcal L_\eta$ is
flasque, and every flasque sheaf on $C$ has vanishing cohomology in positive
degrees ([[lem-constant-sheaf-on-irreducible-space-is-flasque]],
[[thm-flasque-sheaves-acyclic]]).

[F3] Sheaf cohomology $H^q(C,-)$ is the right derived functor of the global
sections functor on sheaves of abelian groups, and a short exact sequence of
sheaves induces a natural long exact sequence of cohomology groups
([[def-sheaf-cohomology-derived-global-sections]],
[[cor-derived-long-exact-sequence]]).

[F4] The Axiom of Choice is [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct; take the long exact cohomology sequence of the
principal-parts sequence and use that the constant sheaf on an irreducible
curve is flasque.

1.1 The fundamental sequence is exact. By [F1] the map $\mathcal L\to\mathcal L_\eta$ is injective and $\mathcal P(\mathcal L)$ is its quotient, so $0\to\mathcal L\to\mathcal L_\eta\to\mathcal P(\mathcal L)\to0$ is exact. The stalk at the generic point is $0\to\mathcal L_\eta\xrightarrow{\mathrm{id}}\mathcal L_\eta\to0\to0$, and at each closed point $p$ it is $0\to\mathcal L_p\to\mathcal L_\eta\to\mathcal L_\eta/\mathcal L_p\to0$. These are exact; the curve has no other points, so the published stalkwise exactness criterion [[thm-exactness-of-sheaves-stalkwise]] gives exactness of the sheaf sequence. [F1, given]

1.2 The middle sheaf is acyclic. Since $C$ is irreducible [F2], the constant sheaf $\mathcal L_\eta$ is flasque, so by [F2] its cohomology vanishes in positive degrees and $H^0(C,\mathcal L_\eta)=\mathcal L_\eta$ is the space of global meromorphic sections; the Axiom of Choice [F4] is inherited through the cited suppliers. [F2, F4]

2.1 Take the long exact cohomology sequence. By [F3], step 1.1 and the vanishing of step 1.2 give the exact sequence $0\to H^0(C,\mathcal L)\to \mathcal L_\eta\to H^0(C,\mathcal P(\mathcal L))\to H^1(C,\mathcal L)\to H^1(C,\mathcal L_\eta)=0$, so $H^1(C,\mathcal L)$ is canonically isomorphic to the cokernel of the middle map $\mathcal L_\eta\to H^0(C,\mathcal P(\mathcal L))$. [F3, step 1.1, step 1.2]

3.1 Identify the two terms concretely. By [F1] the sheaf $\mathcal P(\mathcal L)$ is the direct sum of the skyscraper sheaves with values $\mathcal L_\eta/\mathcal L_p$, so $H^0(C,\mathcal P(\mathcal L))=\bigoplus_p\mathcal L_\eta/\mathcal L_p$ is the space of finite-support families of local principal parts, and the map of step 2.1 becomes the diagonal $s\mapsto(s+\mathcal L_p)_p$ whose image is the family of principal parts of the global meromorphic sections; the subgroup $H^0(C,\mathcal L)$ maps to $0$ in $H^0(C,\mathcal P(\mathcal L))$ because it is the image of the subsheaf $\mathcal L$ inside $\mathcal L_\eta$. [F1, step 1.1, step 2.1]

4.1 Conclude. Combining steps 2.1 and 3.1, $H^1(C,\mathcal L)$ is the cokernel of the diagonal map $\mathcal L_\eta\to\bigoplus_p\mathcal L_\eta/\mathcal L_p$, i.e. the space of finite-support families of local principal parts modulo the principal parts of global meromorphic sections of $\mathcal L$. The classes of global meromorphic sections are exactly the coboundaries of the long exact sequence. Each family whose entries are regular germs maps componentwise to zero in $\bigoplus_p\mathcal L_\eta/\mathcal L_p$; this requires no claim that an arbitrary family of germs comes from one global section. This proves the statement for every invertible sheaf $\mathcal L$ on $C$. [F1, F2, F3, step 2.1, step 3.1] ∎

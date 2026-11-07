---
id: thm-greenberg-wiles-selmer-dimension-formula
kind: theorem
title: "Greenberg–Wiles dimension relation for dual Selmer conditions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 36
deps:
  - def-global-selmer-deformation-condition
  - thm-poitou-tate-exact-sequence-for-finite-modules
  - thm-global-euler-poincare-characteristic-for-finite-galois-modules
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC and Countable Choice are inherited through the finite-module Poitou–Tate
  supplier; DC is inherited through continuous-cohomology resolution data.
  The finite-dimensional linear algebra in the proof uses none of them. The proof uses the finite-module Poitou–Tate and global Euler–Poincaré suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $F$
be a number field, $p$ a prime, and fix a separable closure $F_s$; write
$G_F=\operatorname{Gal}(F_s/F)$. Let $M$ be a finite-dimensional
$\mathbb F_p$-vector space with continuous $G_F$-action, annihilated by $p$.
For a place $v$, write $F_v$ for the completion and $G_{F_v}$ for its
absolute Galois group. Let $S$ be a finite set of places containing all
archimedean places, all places above $p$, all places where $M$ is
ramified, and every place where the selected local condition below differs
from the unramified condition. Write $G_{F,S}$ for the Galois group of the
maximal extension of $F$ unramified outside $S$. Let $\mu_p\subseteq F_s^\times$
be the group of $p$-th roots of unity, viewed as an $\mathbb F_p$-vector
space by exponentiation, and put
$M^*=\operatorname{Hom}_{\mathbb F_p}(M,\mu_p)$, with the induced Galois action. For
each place $v$, let $L_v$ be an $\mathbb F_p$-linear subspace of
$H^1_{\mathrm{cts}}(G_{F_v},M)$; require $L_v$ to equal the unramified
subgroup for all but finitely many $v$. Here the unramified subgroup is the
kernel of restriction to the inertia subgroup, the kernel of the action of
$G_{F_v}$ on the residue separable closure. Let $L_v^\perp$ be the annihilator of
$L_v$ under the local Tate pairing of $H^1(G_{F_v},M)$ with
$H^1(G_{F_v},M^*)$, with the standard Tate convention at archimedean
places. Define $H^1_{\mathcal L}(F,M)$ to consist of the classes in
$H^1_{\mathrm{cts}}(G_{F,S},M)$ whose localization belongs to $L_v$ for
every $v\in S$; define $H^1_{\mathcal L^\perp}(F,M^*)$ analogously using
$L_v^\perp$. Then both Selmer groups are finite and
$$\frac{\#H^1_{\mathcal L}(F,M)} {\#H^1_{\mathcal L^\perp}(F,M^*)} = \frac{\#H^0(G_{F,S},M)} {\#H^0(G_{F,S},M^*)} \prod_{v\in S} \frac{\#L_v}{\#H^0(G_{F_v},M)}.$$
Equivalently, because the groups are finite-dimensional $\mathbb F_p$-vector spaces,
$$\dim_{\mathbb F_p} H^1_{\mathcal L}(F,M)-\dim_{\mathbb F_p} H^1_{\mathcal L^\perp}(F,M^*) = \dim_{\mathbb F_p} H^0(G_{F,S},M)-\dim_{\mathbb F_p} H^0(G_{F,S},M^*) +\sum_{v\in S}\bigl(\dim_{\mathbb F_p} L_v-\dim_{\mathbb F_p} H^0(G_{F_v},M)\bigr).$$

## Statement references

[[def-global-selmer-deformation-condition]]

[[thm-poitou-tate-exact-sequence-for-finite-modules]]

[[thm-global-euler-poincare-characteristic-for-finite-galois-modules]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

[Frank Calegari, “Motives and L-functions,” §2.2, Theorem 2.2.2](https://archive.intlpress.com/site/pub/files/_fulltext/journals/cdm/2018/2018/0001/CDM-2018-2018-0001-a002.pdf)

[Andrew Wiles, “Modular Elliptic Curves and Fermat’s Last Theorem,” Chapter 1, Proposition 1.6 and proof](https://sites.math.rutgers.edu/~zeilberg/EM22/AW1995.pdf)

[J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter I §§2 and 5](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Facts & Assumptions

**Given:** The global field, finite module, local subspaces, dual module, and Selmer groups in the Statement.

[F1] The global Selmer group is the kernel of localization to the direct sum of local cohomology quotients by the specified subspaces. [[def-global-selmer-deformation-condition]]

[L1] The finite-module Poitou–Tate theorem supplies an exact sequence whose map $P_S^1(F,M)\to H^1(G_{F,S},M^*)^\vee$ is the transpose of localization for $M^*$ under the local Tate pairings. [[thm-poitou-tate-exact-sequence-for-finite-modules]]

[F3] The Poitou–Tate statement defines the Cartier dual by $M^D=\operatorname{Hom}_{\mathbb Z}(M,F_s^\times)$ and uses it in the local cup-product pairings. [[thm-poitou-tate-exact-sequence-for-finite-modules]]

[L2] For the finite module $M^*$, the global Euler–Poincaré formula is $h^0(M^*)-h^1(M^*)+h^2(M^*)=\sum_{v\mid\infty}(h^0(F_v,M^*)-[F_v:\mathbb R]\dim_{\mathbb F_p}M)$, and the global groups in degrees zero through two are finite. [[thm-global-euler-poincare-characteristic-for-finite-galois-modules]]

[F2] AC and Countable Choice enter through the finite-module idelic class-formation suppliers; DC enters through continuous cohomology and Ext resolutions. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** combine Poitou–Tate exactness, the global Euler formula and finite-dimensional orthogonal complements.

**Given:** The data and explicit choice assumptions in the Statement.


1.1 Since $pM=0$, every homomorphism $M\to F_s^\times$ has image in $\mu_p$: for $m\in M$, $f(m)^p=f(pm)=1$. Conversely, every $\mathbb F_p$-linear map $M\to\mu_p$ is a homomorphism of abelian groups. This isomorphism is Galois-equivariant, so $M^D\cong M^*$ in the Poitou–Tate statement. [F3, algebra]

1.2 Let $V=P_S^1(F,M)$, $V^*=P_S^1(F,M^*)$, $U\subseteq V$ and $U^*\subseteq V^*$ be the images of the two global localization maps. By exactness in [L1], $U$ is the kernel of the transpose map $V\to H^1(G_{F,S},M^*)^\vee$. Under the perfect local pairings this transpose has kernel $(U^*)^\perp$; hence $U=(U^*)^\perp$, and symmetrically $U^*=U^\perp$. [L1, F3, given, algebra]

1.3 Write $h^i(M)$ for the global dimensions and $U$ for the image of localization on $H^1(G_{F,S},M)$. The exact Poitou–Tate segment in [L1] gives $h^1(M)-\dim U=h^2(M^*)-\dim P_S^0(F,M)+h^0(M).$ At a finite place $P^0$ uses ordinary invariants. At a complex place its Tate group is zero, whereas both ordinary $H^0(F_v,M)$ and $H^0(F_v,M^*)$ have dimension $d=\dim M$. At a real place with involution $c$, its Tate degree-zero group has dimension $\dim M^c-\operatorname{rank}(1+c)$; the Cartier dual action is $-c^*$, so $h^0(F_v,M^*)=d-\operatorname{rank}(1+c)$. Thus [L2] is exactly $h^0(M^*)-h^1(M^*)+h^2(M^*)=\dim P_S^0(F,M)-\sum_{v\in S}h^0(F_v,M).$ Combining the two equalities gives the precise global comparison formerly left as an extra obligation: $h^1(M)-h^1(M^*)=h^0(M)-h^0(M^*)+\dim U-\sum_{v\in S}h^0(F_v,M).$ This argument works also for $p=2$ because it uses the actual Tate norm $1+c$, not semisimplicity. [L1, L2, given, algebra]

2.1 Let $L=\prod_{v\in S}L_v\subseteq V$. For finite-dimensional $V,V^*$ in perfect duality, $(U+L)^\perp=U^\perp\cap L^\perp$ and $\dim (U+L)^\perp=\dim V-\dim(U+L)$. Also $\dim(U\cap L)=\dim U+\dim L-\dim(U+L)$. Since $U^*=U^\perp$ by step 1.2, subtraction gives $\dim(U\cap L)-\dim(U^*\cap L^\perp)=\dim U+\dim L-\dim V$. [step 1.2, algebra]

3.1 Localization gives exact sequences $0\to\ker(\mathrm{loc})\to H^1_{\mathcal L}(F,M)\to U\cap L\to0$ and the dual sequence with $U^*\cap L^\perp$, where $L=\prod_{v\in S}L_v$. By step 2.1, $\#(U\cap L)/\#(U^*\cap L^\perp)=\#U\,\#L/\#V=\#L/\#U^*$, since perfect duality gives $\#U^*=\#V/\#U$. Also $\#H^1(G_{F,S},M)/\#H^1(G_{F,S},M^*)=(\#\ker(\mathrm{loc})/\#\ker(\mathrm{loc})^*)(\#U/\#U^*)$. Combining these identities with the two exact sequences yields $\frac{\#H^1_{\mathcal L}(F,M)}{\#H^1_{\mathcal L^\perp}(F,M^*)} = \frac{\#H^1(G_{F,S},M)}{\#H^1(G_{F,S},M^*)} \frac{\#L}{\#U}.$ [F1, step 2.1, algebra]

4.1 Substitute the equality in step 1.3 into the equality in step 3.1 and use $\#L=\prod_{v\in S}\#L_v$. The factors $\#U$ cancel, giving the cardinality formula in the Statement. Taking logarithms to base $p$ gives the dimension formula because each group is a finite $\mathbb F_p$-vector space. For $v\notin S$, $M$ is unramified and the residue characteristic is not $p$; then $H^1_{\mathrm{ur}}(G_{F_v},M)\cong M/(\mathrm{Frob}_v-1)M$, while $H^0(G_{F_v},M)=\ker(\mathrm{Frob}_v-1)$. Rank–nullity for the endomorphism $\mathrm{Frob}_v-1$ gives equal dimensions, so each omitted local factor is $1$. [L1, L2, step 3.1, step 1.3, algebra] ∎


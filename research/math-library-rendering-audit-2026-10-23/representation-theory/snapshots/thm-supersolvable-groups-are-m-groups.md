---
id: thm-supersolvable-groups-are-m-groups
kind: theorem
title: "Finite supersolvable groups are M-groups"
status: published
origin: pipeline
deps: [def-monomial-representation-and-m-group, def-supersolvable-groups-and-monomial-characters, lem-nonabelian-supersolvable-group-has-the-required-abelian-normal-subgroup, lem-faithful-irrep-with-a-noncentral-abelian-normal-subgroup-is-properly-induced, lem-induction-commutes-with-inflation, thm-transitivity-of-induction-for-finite-groups, thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional, cor-cyclotomic-field-splits-a-finite-group, prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient, def-induced-r-linear-g-module-by-h-covariant-functions, def-intertwiner-equivalent-and-faithful-representations, thm-first-isomorphism-theorem-groups]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — Theorem 4.3.1 with Lemmas 4.3.3–4.3.4, printed pp. 57–58"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Wen-Wei Li, Yanqi Lake Lectures on Algebra I — Theorem 12.5.6 and its proof, printed pp. 146–148"
      url: "https://www.wwli.asia/downloads/YAlg1.pdf"
---

## Statement

Let $G$ be a finite group together with a series
$$1=G_0\triangleleft G_1\triangleleft\cdots\triangleleft G_r=G$$
whose terms are normal in $G$ and whose factors $G_i/G_{i-1}$ have prime order;
this is the supersolvable convention of
([[def-supersolvable-groups-and-monomial-characters]]). Then $G$ is an
$M$-group: every irreducible finite-dimensional complex representation of $G$
is isomorphic to $\operatorname{Ind}_H^G\lambda$ for some subgroup $H\le G$ and
some linear character $\lambda$ of $H$.

## Facts & Assumptions

**Given:** A finite group $G$ with a series $1=G_0\triangleleft G_1\triangleleft\cdots\triangleleft G_r=G$ of subgroups $G_i\trianglelefteq G$ with $G_i/G_{i-1}$ of prime order for $1\le i\le r$, and an irreducible finite-dimensional complex representation $\rho:G\to\operatorname{GL}(V)$ with kernel $K=\ker\rho$.

[F1] $G$ is an $M$-group when every irreducible complex representation is monomial, that is isomorphic to $\operatorname{Ind}_H^G L$ for a subgroup $H\le G$ and a one-dimensional $H$-module $L$; characters of induced modules are induced characters. ([[def-monomial-representation-and-m-group]]).

[F2] The hypothesis is exactly the supersolvable convention: a normal series in $G$ with prime-order factors. ([[def-supersolvable-groups-and-monomial-characters]]).

[F3] A group with a series whose terms are normal in the whole group and whose factors have prime order has an abelian normal subgroup not contained in its center whenever it is nonabelian, and the same holds for its nonabelian quotients. ([[lem-nonabelian-supersolvable-group-has-the-required-abelian-normal-subgroup]]).

[F4] If $A\trianglelefteq G$ is abelian with $A\nsubseteq Z(G)$ and $V$ is a faithful irreducible complex $G$-representation, then for every constituent $\lambda$ of the restriction of $V$ to $A$ the inertia group $I_G(\lambda)$ is proper in $G$ and $V\cong\operatorname{Ind}_{I_G(\lambda)}^G W$ for an irreducible $I_G(\lambda)$-module $W$ lying over $\lambda$. ([[lem-faithful-irrep-with-a-noncentral-abelian-normal-subgroup-is-properly-induced]]).

[F5] If $K\trianglelefteq G$, $K\le H\le G$ and $W$ is a finite-dimensional complex $H/K$-module, then $\operatorname{Infl}_{G/K}^G(\operatorname{Ind}_{H/K}^{G/K}W)\cong\operatorname{Ind}_H^G(\operatorname{Infl}_{H/K}^HW)$; in particular the inflation of a monomial irreducible is monomial, and it is irreducible. ([[lem-induction-commutes-with-inflation]]).

[F6] Induction is transitive: $\operatorname{Ind}_H^G(\operatorname{Ind}_L^HW)\cong\operatorname{Ind}_L^GW$ for $L\le H\le G$. ([[thm-transitivity-of-induction-for-finite-groups]]).

[F7] Every irreducible representation of a finite abelian group over a splitting field has degree one, and $\mathbb C$ is a splitting field for every finite group. ([[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]], [[cor-cyclotomic-field-splits-a-finite-group]]).

[F8] A representation with kernel containing a normal subgroup $N$ factors through $G/N$, and irreducibility is preserved in both directions. ([[prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient]]).

[F9] $\operatorname{Ind}_H^GW=\{\,f:G\to W:f(gh)=h^{-1}\cdot f(g)\ \text{for all }g\in G,h\in H\,\}$ with $(x\cdot f)(g)=f(x^{-1}g)$; in particular, for $H=G$ every $f$ is determined by $f(1)$, and the map $L\to\operatorname{Ind}_G^GL$, $w\mapsto(g\mapsto g^{-1}\cdot w)$, is a $G$-isomorphism. ([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F10] $\rho$ is faithful exactly when $K=1$. ([[def-intertwiner-equivalent-and-faithful-representations]]).

[F11] For a homomorphism of groups the induced map on the quotient by its kernel is an isomorphism onto the image. ([[thm-first-isomorphism-theorem-groups]]).

## Proof

**Proof technique:** induction.

1.1 We prove the assertion by induction on $|G|$. If $|G|=1$ then $V$ is the one-dimensional trivial representation, and [F9] with $H=G=1$ shows that $V$ is induced from a linear character of the subgroup $G$ itself, so $V$ is monomial; this is the base case. In the remaining cases $G$ is nontrivial, $V$ is a fixed irreducible complex $G$-representation, and $K=\ker\rho$ is its kernel. [F1, F9, given, base]

1.2 Induction hypothesis: every finite group $H$ with $|H|<|G|$ that is supersolvable in the sense of [F2], that is, possesses a series with terms normal in $H$ and prime-order factors, has the property that each of its irreducible complex representations is induced from a linear character of a subgroup. [F2, ih]

1.3 Suppose next that $K=1$ and that $G$ is abelian. By [F7] the irreducible representation $V$ over the splitting field $\mathbb C$ is one-dimensional, so its representing map is a linear character of $G$; by [F9] with $H=G$ the module $V$ is isomorphic to $\operatorname{Ind}_G^GV$, hence is induced from a linear character of the subgroup $G$. So $V$ is monomial in this case as well. [F1, F7, F9, given]

2.1 Suppose first that $K\ne1$. Then $K$ acts trivially on $V$, so by [F8] the representation descends to an irreducible representation $\bar\rho$ of $\bar G=G/K$ on $V$, that is $V=\operatorname{Infl}_{\bar G}^G\bar V$ for the irreducible $\bar G$-module $\bar V$ affording $\bar\rho$. The images $\bar G_i:=G_iK/K$ form a chain of subgroups normal in $\bar G$ with $\bar G_0=1$ and $\bar G_r=\bar G$, and each $\bar G_i/\bar G_{i-1}$ is a quotient of the prime-order group $G_i/G_{i-1}$: the map $gK\mapsto gG_{i-1}K$ from $G_iK/K$ onto $G_iK/G_{i-1}K$ has kernel $G_{i-1}K/K$ and is surjective, so by [F11] $\bar G_i/\bar G_{i-1}\cong G_iK/G_{i-1}K$, and the latter is a quotient of $G_i/G_{i-1}$ since the natural map $G_i\to G_iK/G_{i-1}K$ is onto with $G_{i-1}$ in its kernel. Hence $\bar G$ satisfies the hypothesis of the theorem with $|\bar G|<|G|$, and by step 1.2 there are $\bar H\le\bar G$ and a one-dimensional $\bar H$-module $\bar L$ with $\bar V\cong\operatorname{Ind}_{\bar H}^{\bar G}\bar L$. Writing $H=\pi^{-1}(\bar H)$ for the quotient map $\pi:G\to\bar G$, the final clause of [F5] gives $V=\operatorname{Infl}_{\bar G}^G\bar V\cong\operatorname{Ind}_H^G(\operatorname{Infl}_{\bar H}^H\bar L)$ with $\operatorname{Infl}_{\bar H}^H\bar L$ one-dimensional. So $V$ is monomial in this case. [F5, F8, F11, step 1.2, given]

2.2 There remains the case $K=1$ with $G$ nonabelian, which by step 1.3 exhausts the remaining possibilities. Then $\rho$ is faithful by [F10], so [F3] applied to $G$ gives an abelian normal subgroup $A\trianglelefteq G$ with $A\nsubseteq Z(G)$. Restricting $V$ to the abelian group $A$ and using [F7], the module $V|_A$ has a constituent $\lambda$, which is a linear character of $A$; applying [F4] to $A$ and $V$ shows that $I:=I_G(\lambda)$ is a proper subgroup of $G$ and that $V\cong\operatorname{Ind}_I^GW$ for an irreducible $I$-module $W$ lying over $\lambda$. In particular $|I|<|G|$. [F3, F4, F7, F10, step 1.3, given]

3.1 The intersection $I_j:=I\cap G_j$ is normal in $I$ for each $j$, since $G_j\trianglelefteq G$, and the map $I\cap G_j\to G_j/G_{j-1}$, $x\mapsto xG_{j-1}$, has kernel $I_{j-1}$, so $I_j/I_{j-1}$ is isomorphic to a subgroup of the prime-order group $G_j/G_{j-1}$ and therefore has order $1$ or prime; deleting repeated terms gives a series for $I$ whose terms are normal in $I$ and whose factors have prime order. Since $|I|<|G|$ by step 2.2, the induction hypothesis of step 1.2 applied to $I$ gives $W\cong\operatorname{Ind}_L^I\mu$ for some subgroup $L\le I$ and some linear character $\mu$ of $L$. [F11, step 1.2, step 2.2, given]

4.1 Combining steps 2.2 and 3.1 with transitivity of induction [F6], $V\cong\operatorname{Ind}_I^G\operatorname{Ind}_L^I\mu\cong\operatorname{Ind}_L^G\mu$ with $\mu$ a linear character of $L$, so $V$ is monomial. The cases $|G|=1$ (step 1.1), $K\ne1$ (step 2.1), $K=1$ with $G$ abelian (step 1.3) and $K=1$ with $G$ nonabelian (steps 2.2 and 3.1) are exhaustive, so every irreducible complex representation of $G$ is induced from a linear character of a subgroup and $G$ is an $M$-group by [F1]. [F1, F6, step 1.1, step 2.1, step 1.3, step 2.2, step 3.1, discharge-induction: step 1.2] ∎

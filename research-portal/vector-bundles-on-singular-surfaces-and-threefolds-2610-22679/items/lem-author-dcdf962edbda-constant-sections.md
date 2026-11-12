---
id: lem-author-dcdf962edbda-constant-sections
kind: lemma
title: Constant integer coefficients and exact derived evaluation
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-dcdf962edbda-qcqs-site
  - def-derived-sections-on-sites
  - def-scheme-sites-and-sheafification
  - math:def-group
  - math:thm-int-comm-ring
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  math:def-group: mathematical-premise
  math:thm-int-comm-ring: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 11
formulation_deps:
  - math:def-axiom-of-choice
  - lem-author-dcdf962edbda-qcqs-site
  - def-derived-sections-on-sites
  - def-scheme-sites-and-sheafification
  - math:def-group
  - math:thm-int-comm-ring
argument_deps:
  - math:def-axiom-of-choice
  - lem-author-dcdf962edbda-qcqs-site
  - def-derived-sections-on-sites
  - def-scheme-sites-and-sheafification
  - math:def-group
  - math:thm-int-comm-ring
---

## Statement
Assume the Axiom of Choice and fixed compatible ambient universe bounds for sheaves and derived constructions. Let $F=\mathbb Q$ or $F=\mathbb F_p$ for a prime $p$. Fix Grothendieck universes $U\in V$ with $\omega\in U$ and $F\in U$, and the $V$-small qcqs $F$-scheme cdh site $\mathcal C_F$ and representative functor $r$ of the source qcqs-site construction. Fix any qcqs $F$-scheme $X$ whose defining data lie in $U$; evaluation at $X$ means evaluation at its chosen representative $rX\in\mathcal C_F$. For a qcqs $k$-scheme $X$ in this size bound, with $k\in U$ and its prime subfield identified with $F$, use the underlying $F$-scheme $X_F$ and the representative $rX_F$ instead.

Let $P$ be the constant presheaf of abelian groups on this site: $P(T)=\mathbb Z$ for every object $T$, and every restriction map is the identity. Let $\underline{\mathbb Z}_{\mathrm{cdh}}=a_{\mathrm{cdh}}P$ be its ordinary abelian sheafification, placed in degree zero. Define $R\Gamma^F_{\mathrm{cdh}}(X,\mathbb Z)$ to be derived evaluation of this sheaf at the specified representative of $X$ on this site, and write $H^i_{\mathrm{cdh},F}(X,\mathbb Z)=H^i(R\Gamma^F_{\mathrm{cdh}}(X,\mathbb Z))$. This uses sheafification before derived evaluation, rather than evaluating the raw constant presheaf. All negative cohomology groups of this derived value are zero.

## Statement references

[[lem-author-dcdf962edbda-qcqs-site]]

[[def-scheme-sites-and-sheafification]]

[[math:def-group]]

[[math:thm-int-comm-ring]]

[[def-derived-sections-on-sites]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The field, site, representative convention, Choice and compatible size bounds in the statement.

**Goal:** Construct the ordinary constant abelian sheaf, define its derived evaluation and prove negative-degree vanishing.

[A1] The Axiom of Choice is assumed as in [[math:def-axiom-of-choice]]. It is retained for the chosen skeleton and representatives in [F1] and for the K-injective and injective-resolution constructions in [F4]; all their ambient universe bounds are retained.

[F1] [[lem-author-dcdf962edbda-qcqs-site]] supplies the prime-field site $\mathcal C_F$, its cdh topology and size conventions, and the functorial representative convention $X\mapsto rX$, including $rX_F$ for qcqs schemes over $k$. No separated finite-type restriction is imposed.

[F2] [[def-scheme-sites-and-sheafification]] supplies covering sieves, matching families, restriction by pullback, and the set-valued plus construction: classes of matching families modulo agreement on a common covering subsieve. Applying plus twice gives the underlying sheafification, with its universal map to sheaves of sets.

[F3] Abelian groups have the associative, commutative addition, zero and inverse laws of [[math:def-group]]. The additive group $(\mathbb Z,+,0)$ has these laws by [[math:thm-int-comm-ring]]. An additive map here means a map preserving addition and zero; presheaves of abelian groups have additive restriction maps.

[F4] Under [A1], [[def-derived-sections-on-sites]] defines abelian sheaves and their degree-zero complexes, K-injective derived evaluation at a specified site object and its cohomology, independently of resolution choices. For an ordinary abelian sheaf its supplied nonnegative injective resolution computes the same derived value.

## Proof
1.1 For a presheaf $A$ of abelian groups, equip its set-valued plus construction with group operations as follows. If $[R,s]$ and $[S,t]$ are matching-family classes over an object, define their sum by the componentwise sums on $R\cap S$; use componentwise negatives for inverses and the zero family on the maximal sieve for zero. The intersection covers: for each arrow $f$ of $R$, its pullback of $R$ is maximal, so $f^*(R\cap S)=f^*S$ covers, and transitivity applied to $R$ proves the claim. Repeating this argument gives common covering intersections for any finite number of sieves. Additive restrictions make the sums and negatives matching families. If representatives are replaced by equivalent ones, intersect their witnessing covering subsieves; on that cover the componentwise sums or negatives agree, proving independence of representatives. Associativity, commutativity, zero and inverse identities hold after restricting all representatives to one common covering sieve, by the corresponding laws in $A$; equality of those families gives equality of classes. Pullback restrictions and the unit $A\to A^+$ preserve these operations. Repeat for $A^+$ to give $A^{++}$ its abelian-group operations. By [F2] its underlying presheaf is a sheaf, hence it is an abelian sheaf in the sense of [F4]. For any additive natural map $A\to B$ to an abelian sheaf, send a matching family to the unique glued section of its images in $B$. Agreement on a common cover makes this well defined; pullback and uniqueness give naturality. Gluing componentwise sums on a common cover shows additivity. Applying this extension twice gives an additive map $A^{++}\to B$ extending the original map. Uniqueness follows from the underlying set-valued sheafification universal property. This proves the abelian sheafification universal property, not merely the set-valued one. Apply it to the presheaf $P$ of [F3], whose identity restrictions satisfy the presheaf laws, to obtain $\underline{\mathbb Z}_{\mathrm{cdh}}$. [F1, F2, F3, F4, construct]

2.1 Place the resulting abelian sheaf in degree zero. The site and representative in [F1] make evaluation at $rX$ (or $rX_F$) meaningful. Under [A1], apply [F4] to this complex: a K-injective replacement defines its choice-independent derived evaluation, which is the value denoted $R\Gamma^F_{\mathrm{cdh}}(X,\mathbb Z)$. The same supplier computes it by a nonnegative injective resolution $I^\bullet$ of the ordinary sheaf. Evaluating at the specified representative leaves zero terms in every negative degree. For $i<0$ the kernel of its degree-$i$ differential and the image of its degree-$(i-1)$ differential are therefore both zero, so its $i$th cohomology is zero. These are precisely the groups $H^i_{\mathrm{cdh},F}(X,\mathbb Z)$ defined in the statement. Thus the argument uses a resolved sheaf rather than the raw constant presheaf, and requires no comparison of sites. [A1, F1, F4, step 1.1] ∎

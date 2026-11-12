---
id: lem-author-e71ff76fe904-prime-field-coefficients
kind: lemma
title: Prime-field restriction and the intrinsic étale coefficient complex
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - def-motivic-cohomology
  - def-etale-tate-coefficients
  - def-derived-sections-on-sites
  - def-article-conventions
  - math:def-prime-subfield
  - math:thm-prime-subfield-classification
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - math:thm-affine-scheme-ring-anti-equivalence
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  def-etale-tate-coefficients: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  def-article-conventions: mathematical-premise
  math:def-prime-subfield: mathematical-premise
  math:thm-prime-subfield-classification: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  math:thm-affine-scheme-ring-anti-equivalence: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 11
sources:
  references:
    - title: The Stacks Project, Functoriality of small étale topos
      url: https://stacks.math.columbia.edu/tag/04I0
      locator: Section 59.34, equation (59.34.0.1) and the following three properties
        and morphism-of-sites conclusion
      statement: "For every scheme morphism f: X -> Y, base change V -> X times_Y V
        gives a morphism of small étale sites, preserving the final object,
        fibre products and covers."
      hypotheses: An arbitrary morphism of schemes; compatible small-site choices
        admit the indicated base changes. No finite-type, smoothness or
        properness hypothesis is imposed.
      reading_limits: Read the complete mathematical text of Section 59.34 in the
        Stacks HTML during this assignment. Import the site morphism and its
        listed properties; the cited general site theory is not reconstructed.
        No cohomological base-change equivalence is asserted.
    - title: The Stacks Project, Direct images on small étale sites
      url: https://stacks.math.columbia.edu/tag/03PW
      locator: Definition 59.35.1, formula for the small étale direct image
      statement: The direct image of a presheaf C on X_et is defined on V/Y by C(X
        times_Y V/X).
      hypotheses: "A scheme morphism f: X -> Y and a presheaf on the small étale site
        of X; apply to abelian coefficient sheaves. Cover preservation makes
        this direct image a sheaf."
      reading_limits: Read Definition 59.35.1 and the adjacent Remark 59.35.2 (tag
        03PX) in the Stacks HTML. Import the direct-image formula only. Sheaf
        preservation also follows immediately from the cover-preservation
        premise in reference 0. No higher-direct-image computation is imported.
    - title: The Stacks Project, Derived global sections and direct image
      url: https://stacks.math.columbia.edu/tag/08J6
      locator: Remark 21.14.4, displayed derived-composition identity and its
        explanation
      statement: For a morphism of ringed topoi and a sheaf C of modules on its
        source, RΓ on the target applied to Rf_* C identifies with RΓ on the
        source of C.
      hypotheses: A morphism of ringed topoi and a sheaf of modules, regarded as a
        degree-zero complex. Here use the small étale topoi with constant
        integer ring sheaves and the ordinary abelian sheaf C = μ_n tensor j.
      reading_limits: Read the whole remark in the Stacks HTML, including its
        injective/acyclic justification. Import this derived-composition
        identity for sheaves, not an unbounded-complex extension or a
        base-change isomorphism. The upstream general derived-functor results
        are not reconstructed.
---

## Statement
Assume the Axiom of Choice and compatible fixed universe size bounds for the small sites and derived categories used below. Let $k$ have prime subfield $F$, let $X/k$ be qcqs, $j\geq0$, and let $n\geq1$ be invertible in $k$. Then $X$ is a qcqs $F$-scheme, $n$ is invertible in $F$, and the completed motivic complex at $X$ is the actual source value $M_j(X)=\mathbb Z(j)_{\mathrm{mot},F}(X)$. Put $B_j(X)=R\Gamma_{\mathrm{et}}(X,\mu_n^{\otimes j})$, using the intrinsic small étale site of $X$ and the specified tensor powers over $\mathbb Z/n$. Forgetting the k-structure changes neither this site nor its coefficient sheaf or derived evaluation. Thus the source complex $B_j(X)$ is exactly the completed local étale target, with its pullbacks.

## Statement references
[[math:def-axiom-of-choice]]

[[def-motivic-cohomology]]

[[def-etale-tate-coefficients]]

[[def-derived-sections-on-sites]]

[[def-article-conventions]]

[[math:def-prime-subfield]]

[[math:thm-prime-subfield-classification]]

[[lem-author-b747b28c359f-elmanto-morrow-complexes]]

[[math:thm-affine-scheme-ring-anti-equivalence]]

[[math:def-grothendieck-universe-closure-convention]]

## External input
References 0 and 1 supply the small étale site morphism induced by a scheme morphism and its direct-image formula. Reference 2 supplies the derived-composition identity for a degree-zero abelian sheaf, using constant integer ring sheaves. These established premises are imported with the hypotheses and reading limits recorded above. The prime-field restriction and the comparison of the same constructions before and after forgetting the base are proved locally below; no motivic-to-étale comparison theorem is imported here.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Identify the motivic value and intrinsic étale target, including their pullbacks, after forgetting the base field.

[A1] Retain Choice and compatible size bounds for both the motivic supplier and K-injective derived evaluation. In particular use the motivic supplier's fixed Grothendieck universes $U\in V\in W$ with $\omega\in U$, containing the field and scheme data; their existence is part of the standing size assumption. Choose the small étale sites compatibly with the base changes of the morphisms under consideration. [[math:def-axiom-of-choice]] [[math:def-grothendieck-universe-closure-convention]]

[F1] [[def-motivic-cohomology]] fixes the standing motivic notation. [[lem-author-b747b28c359f-elmanto-morrow-complexes]] supplies the prime-field functor and its restriction by precomposition under [A1]. [[def-etale-tate-coefficients]] fixes the intrinsic small étale site, roots of unity, constant ring sheaf and sheafified tensor powers, with their universal properties.

[F2] Under [A1], [[def-derived-sections-on-sites]] computes derived evaluation by a K-injective resolution on the chosen small site, independently of the resolution. An ordinary coefficient sheaf is regarded as a complex in degree zero.

[F3] [[math:def-prime-subfield]] defines $F$ as the smallest subfield of $k$. [[math:thm-prime-subfield-classification]] supplies the unital identifications $F\cong\mathbb F_p$ when $\operatorname{char}k=p>0$ and $F\cong\mathbb Q$ when $\operatorname{char}k=0$. Invertibility of the integer $n$ means invertibility of its scalar $n\cdot1$ in the indicated field.

[F4] [[def-article-conventions]] supplies schemes over a field, their morphisms, the qcqs conditions and the contravariant-functor convention. Here the field is arbitrary and the scheme need not be of finite type. [[math:thm-affine-scheme-ring-anti-equivalence]] turns the unital inclusion $F\hookrightarrow k$ into $\operatorname{Spec}k\to\operatorname{Spec}F$.

[F5] Reference 0 supplies the site morphism for $f:X\to Y$; reference 1 defines its direct image by $(f_*C)(V)=C(X\times_Y V)$. Write $Rf_*$ for its right derived functor on abelian sheaves. Reference 2 identifies $R\Gamma(Y,Rf_*C)$ with $R\Gamma(X,C)$ for a sheaf $C$ in degree zero. Thus a coefficient-sheaf map $C_Y\to f_*C_X$, followed by $f_*C_X\to Rf_*C_X$, induces a derived-sections map $R\Gamma(Y,C_Y)\to R\Gamma(X,C_X)$.

## Proof
1.1 Compose the structure map $X\to\operatorname{Spec}k$ with $\operatorname{Spec}k\to\operatorname{Spec}F$ from [F4]. Quasi-compactness and quasi-separatedness depend only on the underlying scheme, so this gives a qcqs $F$-scheme $uX$. Every $k$-morphism remains an $F$-morphism, with the same identities and composites. Under the unital identifications of [F3], if $\operatorname{char}k=p>0$, invertibility of $n$ means $p\nmid n$, so its image in $F\cong\mathbb F_p$ is nonzero and hence invertible; in characteristic zero, $n\geq1$ is nonzero and invertible in $F\cong\mathbb Q$. Equivalently, the inclusion $F\hookrightarrow k$ preserves $n\cdot1$, so nonvanishing in $k$ implies nonvanishing in the subfield $F$. By the precomposition assertion of the Elmanto–Morrow supplier in [F1], $M_j(X)=M_{j,F}(uX)=\mathbb Z(j)_{\mathrm{mot},F}(uX)$, where writing $X$ in place of $uX$ gives the statement's notation. The pullbacks are the same functor maps on the unchanged underlying arrows. [A1, F1, F3, F4]

2.1 Objects, morphisms and covers of the small étale site are specified over $X$, independent of its presentation over $k$ or $F$. Retain the identical site and size bounds. The ring of regular functions on each object, the equation $u^n=1$, sheafification and the tensor-sheaf universal properties in [F1] are therefore unchanged, including the zeroth twist, the constant ring sheaf $\mathbb Z/n$. Under [A1], the derived-evaluation interface [F2] applied to that same sheaf gives the same derived-category value $B_j(X)$. For a $k$-morphism $f:X\to Y$, put $C_Z=\mu_{n,Z}^{\otimes j}$ for $Z=X,Y$. Pullback of regular functions along $X\times_Y V\to V$ preserves units and $n$th roots; for $j=0$ use the map on constant ring sheaves. The sheafification and tensor universal properties in [F1] extend these maps uniquely to $C_Y\to f_*C_X$. Apply [F5] to obtain $B_j(Y)\to B_j(X)$. Identities and composition follow from those of base change and regular-function pullback and the natural derived-functor comparison. Forgetting the base changes none of these constructions or maps. Thus the identification holds with pullbacks, not just on abstract cohomology groups. [A1, F1, F2, F5, step 1.1] ∎

---
id: lem-adjudicate-28f1411ede08-derived-one-space-descent
kind: lemma
title: Coherent descent for shifted derived abelian sections
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - def-author-cf6ede58b450-site-plus-data
  - lem-author-a44f2061570d-site-derived-input
  - math:thm-dold-kan-equivalence-for-simplicial-modules
  - thm-author-80e2d7bee57f-eilenberg-maclane-input
  - lem-eilenberg-maclane-shift-index
  - def-stable-spectra-interface
formulation_deps:
  - math:def-axiom-of-choice
  - def-author-cf6ede58b450-site-plus-data
  - lem-author-a44f2061570d-site-derived-input
  - math:thm-dold-kan-equivalence-for-simplicial-modules
  - thm-author-80e2d7bee57f-eilenberg-maclane-input
  - lem-eilenberg-maclane-shift-index
  - def-stable-spectra-interface
argument_deps:
  - math:def-axiom-of-choice
  - def-author-cf6ede58b450-site-plus-data
  - lem-author-a44f2061570d-site-derived-input
  - math:thm-dold-kan-equivalence-for-simplicial-modules
  - thm-author-80e2d7bee57f-eilenberg-maclane-input
  - lem-eilenberg-maclane-shift-index
  - def-stable-spectra-interface
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-author-cf6ede58b450-site-plus-data: mathematical-premise
  lem-author-a44f2061570d-site-derived-input: mathematical-premise
  math:thm-dold-kan-equivalence-for-simplicial-modules: mathematical-premise
  thm-author-80e2d7bee57f-eilenberg-maclane-input: mathematical-premise
  lem-eilenberg-maclane-shift-index: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 9
sources:
  references:
    - title: Daniel Dugger, Sharon Hollander and Daniel C. Isaksen, Hypercovers and
        simplicial presheaves (2004)
      url: https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/DHI.pdf
      locator: Definitions 4.2–4.3 and the Čech-family paragraph, printed p.16;
        Corollary 7.1 and proof, p.27; §7.5, pp.31–32 (PDF pages 8,19,23–24)
      statement: The Dold–Kan model obtained by truncating an injective sheaf
        resolution at weight n has hypercover descent; use n=1, hence covering
        Čech descent.
      hypotheses: A Grothendieck site, an abelian presheaf and an injective resolution
        of its sheafification; apply to the already sheaf-valued A on the fixed
        bounded site.
      reading_limits: Read the named definitions, Čech paragraph, corollary with proof
        and all of §7.5 in primary PDF text. Import the descent theorem and its
        cited Illusie/model-category foundations; no reconstruction. Screenshot
        requests failed. The degree-zero boundary is the sheaf image in the
        exact resolution, equal to its cycle sheaf, not the image after
        evaluation.
    - title: Stefan Schwede and Brooke Shipley, Stable model categories are categories
        of modules
      url: https://homepages.math.uic.edu/~bshipley/classTopFinal.pdf
      locator: Appendix B.1, W construction and normalized-connective-cover paragraph,
        printed pp.38–39; level formula and (B.1.9), p.39; Theorem B.1.11
        opening proof, p.40 (PDF pages 38–40)
      statement: For an unbounded chain complex B, the zeroth space of its specified H
        Omega spectrum is W(B); W is Dold–Kan after connective truncation,
        naturally in chain maps.
      hypotheses: The one-object ringoid Z and unbounded complexes of abelian groups;
        use the naive underlying Omega spectrum, as in the declared
        Eilenberg–Mac Lane supplier, not a different symmetric model.
      reading_limits: Read the W definition, connective-cover paragraph, level
        formula, (B.1.9), Remark B.1.10 and opening proof of B.1.11 in the
        author-hosted PDF text. Import their realization facts; no
        reconstruction of the full Quillen-equivalence or Alexander–Whitney
        foundations.
---

## Statement
Assume the Axiom of Choice and fixed compatible Grothendieck universe bounds, including enlarged bounds for spaces and sheaf categories; universe existence is a separate assumption. Let $\mathcal C$ be a small site presented by covering families, with the iterated fibre products of their members in $\mathcal C$. Let $A$ be an abelian sheaf on this site, and fix one nonnegative injective resolution $0\to A\to I^0\xrightarrow{d^0}I^1\xrightarrow{d^1}I^2\to\cdots$ in abelian sheaves on $\mathcal C$.

Use cochain shifts $C[1]^q=C^{q+1}$ with differential $-d_C^{q+1}$, and the specified Eilenberg–Mac Lane realization $HC$, with $\pi_n(HC)=H^{-n}(C)$. Set $D_I(X)=\Omega^\infty H(I^\bullet(X)[1])$, where $\Omega^\infty$ is the zeroth space. Restrictions of this single complex of sheaves give a simultaneous pointed space-valued presheaf. It is a sheaf of spaces and computes $\Omega^\infty H(R\Gamma(X,A)[1])$ using derived evaluation on this same site. Its loop sheaf is canonically the discrete abelian sheaf $A$.

Here a sheaf of spaces means homotopy descent: for every specified cover $\{U_i\to X\}$, its value at $X$ is equivalent to the homotopy limit of the cosimplicial diagram whose degree $r$ is $\prod_{i_0,\ldots,i_r}D_I(U_{i_0}\times_X\cdots\times_X U_{i_r})$, with maps induced by the projections and diagonals. Limits are coherent limits of spaces. The construction and comparison are pointed and additive, natural in $X$ and in maps of the chosen sheaf resolutions. The loop identification uses $A\hookrightarrow I^0$ without negating $A$.

## Statement references
[[math:def-axiom-of-choice]]

[[def-author-cf6ede58b450-site-plus-data]]

[[lem-author-a44f2061570d-site-derived-input]]

[[math:thm-dold-kan-equivalence-for-simplicial-modules]]

[[thm-author-80e2d7bee57f-eilenberg-maclane-input]]

[[lem-eilenberg-maclane-shift-index]]

[[def-stable-spectra-interface]]

## Facts & Assumptions
**Given:** The fixed site, compatible universe bounds, abelian sheaf $A$ and single resolution $I^\bullet$ in the Statement.

**Goal:** Supply coherent restriction maps and descent for the space-valued realization, including its loop normalization.

[A1] Choice is assumed as in [[math:def-axiom-of-choice]] for the resolution and homotopical inputs. Keep the fixed compatible bounds throughout; no universe existence follows from Choice.

[F1] [[def-author-cf6ede58b450-site-plus-data]] supplies small sites, sheaves, restriction functors and the relative universe bounds. A covering-family presentation means that isomorphisms cover, composites of covering families cover, and pullbacks of covering families exist and cover; take the topology generated by these families.

[F2] [[lem-author-a44f2061570d-site-derived-input]] supplies the abelian category of sheaves, existence of the stated resolution, and the fact that $I^\bullet(X)$ computes right-derived evaluation. The injective resolution is an exact coaugmented sheaf complex; its kernels are computed sectionwise.

[F3] [[thm-author-80e2d7bee57f-eilenberg-maclane-input]] fixes the underlying Omega spectrum used for $H$. [[lem-eilenberg-maclane-shift-index]] fixes cochain-to-chain reindexing, the shift differential and the natural homotopy-group formula. [[def-stable-spectra-interface]] supplies the coherent spectrum associated to this Omega tower, its zeroth space and coherent limits of spaces.

[F4] [[math:thm-dold-kan-equivalence-for-simplicial-modules]] supplies normalization and its inverse on nonnegative chain complexes, here for the constant ring $\mathbb Z$. Write $\operatorname{DK}$ for that inverse. Apply it sectionwise to a presheaf of complexes; functoriality gives all restrictions and their compositions.

[F5] Source reference 0 supplies covering Čech descent for $E_I=\operatorname{DK}(T_I)$, where $T_I$ is the chain complex of sheaves with $T_{I,1}=I^0$, $T_{I,0}=Z^1I=\ker(d^1:I^1\to I^2)$, boundary $d^0$, and zero other terms. In the exact sheaf resolution, $Z^1I$ is the sheaf image of $d^0$. Its sections need not be the image of $d^0(X)$.

[F6] Source reference 1 supplies the natural zeroth-space model $\Omega^\infty HB\simeq W(B)\cong\operatorname{DK}(\tau_{\geq0}B)$ for a chain complex $B$. Here $HB$ denotes the chain-indexed version of [F3]. The smart truncation $\tau_{\geq0}B$ has $B_n$ for $n>0$, $\ker(B_0\to B_{-1})$ for $n=0$, zero for $n<0$, and the induced differential.

## External input
Reference 0 imports the descent fact [F5], using the $n=1$ case of its injective-resolution construction. Reference 1 imports the zeroth-space construction [F6] for the same underlying Omega-spectrum realization as [F3]. Their proofs and foundations remain imported within the recorded reading limits. The signed comparison and its application to the chosen derived evaluation below are local.

## Proof
1.1 By [F1]–[F2], the resolution and its sheaf kernel $Z^1I$ are defined on one fixed site. Form the two-term chain complex $T_I$ in [F5] and evaluate it at each $X$. Since $d^1d^0=0$, its boundary lands in $Z^1I(X)$; the next boundary is zero. All restrictions commute with this boundary. Apply [F4] to obtain the pointed additive simplicial presheaf $E_I(X)=\operatorname{DK}(T_I(X))$, with compatible restrictions. Its degree-zero term uses sections of the sheaf kernel, exactly as in [F5]. Under [A1], that imported fact gives the covering Čech descent in the Statement, so $E_I$ is a sheaf of spaces. The site is small in the fixed bounds, $A$ is already a sheaf, and $I^\bullet$ is its nonnegative injective sheaf resolution, which checks every hypothesis of this application. [A1, F1, F2, F4, F5, construct]

2.1 Reindex the shifted cochain complex $I^\bullet(X)[1]$ as the chain complex $B(X)_n=I^{1-n}(X)$ with boundary $-d^{1-n}$, using [F3]. Its smart truncation in [F6] has $I^0(X)$ in degree one and $Z^1I(X)$ in degree zero, with boundary $-d^0$. The map from $T_I(X)$ to this truncation which is the identity in degree one and minus the identity in degree zero is a chain isomorphism: both boundary composites equal $-d^0$. It commutes with every restriction and is additive. Apply [F4] and [F6] to get a natural pointed additive equivalence $E_I(X)\simeq D_I(X)$. Thus the coherent presheaf $D_I$ has the descent established in step 1.1, and [F2] identifies its evaluated complex with $R\Gamma(X,A)[1]$. By [F3], $\pi_nD_I(X)=H^{1-n}(I^\bullet(X))$ for $n\geq0$; these vanish for $n\geq2$ since $I^\bullet$ is nonnegative. Its loop space is therefore discrete with group $\ker d^0(X)=A(X)$, using exactness at $I^0$ and sectionwise kernels in [F2]. The chain comparison is the identity on that degree-one kernel, so the loop identification is the identity on $A$, as claimed. This also proves naturality in maps of the fixed resolutions, since kernels, truncation, the sign map and both realization functors commute with those maps. [A1, F2, F3, F4, F6, step 1.1] ∎

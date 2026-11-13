---
id: prop-author-5f10a31d9e26-chamber-flop-nccr-dictionary
kind: proposition
title: Chambers label smooth minimal models and their NCCR categories
status: published
domain: mathematics
origin: pipeline
deps:
  - def-author-5f10a31d9e26-complete-local-flop-setting
  - prop-author-5f10a31d9e26-slice-restriction-contract
  - math:def-derived-category-of-an-abelian-category
  - math:def-exact-functor-between-triangulated-categories
  - math:def-natural-isomorphism
dependency_roles:
  def-author-5f10a31d9e26-complete-local-flop-setting: mathematical-premise
  prop-author-5f10a31d9e26-slice-restriction-contract: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:def-exact-functor-between-triangulated-categories: mathematical-premise
  math:def-natural-isomorphism: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Hirano–Wemyss, Faithful actions from hyperplane arrangements
      url: https://www.maths.gla.ac.uk/~mwemyss/Faithful_ArXiv3.pdf
      locator: §1.3, printed p.3; Setup 4.1, printed pp.8–9; §4.1, Notation 4.3 and
        Remark 4.4, printed p.9
      statement: CM R consists of finite maximal Cohen–Macaulay modules, and add M
        consists of summands of finite sums of M. Cluster-tilting means both
        Ext-one orthogonals equal add M; mutation uniquely replaces one
        indecomposable summand by a different one while preserving
        cluster-tilting. Chambers index basic cluster-tilting modules and simple
        walls give mutation. Setup 4.1 uses the globally generated tilting
        bundle V and M=f_*V. Notation 4.3 defines T_CD=Hom_R(M_C,M_D) and
        t_CD=RHom_{Lambda_C}(T_CD,-) for right modules. Remark 4.4 identifies
        this simple-wall mutation functor with the inverse single-curve flop
        functor under the geometric tilting equivalences of Setup 4.1. This
        supplies the comparison in the globally generated convention used here.
      hypotheses: Complete-local threefold flopping contraction with nonsingular
        source over an algebraically closed characteristic-zero field, using the
        basic globally generated Van den Bergh bundle, its pushdown and right
        endomorphism-ring modules. Here R is isolated complex cDV, every
        corresponding minimal model is nonsingular, and only nonfree summands
        and their single-curve flops are used.
      reading_limits: In this adjudication read §1.3, Setup 4.1 and §4.1 through
        Notation 4.3 and Remark 4.4 in the online PDF text. Remark 4.4 is used
        as the published comparison in its own globally generated convention,
        with the geometric equivalences in Setup 4.1; its reliance on Wemyss 4.2
        is not reconstructed. No independent proof of the bundle,
        Auslander–McKay or comparison results, or PDF image inspection, is
        claimed.
    - title: Wemyss, A lockdown survey on cDV singularities
      url: https://www.maths.gla.ac.uk/~mwemyss/Survey200223.pdf
      locator: §1.3, printed p.3; §4.1, printed p.16; Theorem 4.3 and following
        paragraph, printed p.17
      statement: Minimal models correspond to maximal modifying generators; nonfree
        summands correspond to exceptional curves and mutation to flops. For
        isolated cDV R this graph covers every finite-arrangement chamber. If
        one minimal model is nonsingular then all are; if an NCCR exists then
        all associated maximal modification algebras are NCCRs.
      hypotheses: Complete-local complex cDV singularity; the whole-arrangement
        conclusion uses isolatedness and the smooth/NCCR conclusions use
        existence of a smooth crepant resolution/NCCR.
      reading_limits: Read §1.3, §4.1 and Theorem 4.3 with its following paragraph in
        the online PDF text for this proposal. Import the stated correspondence
        and smooth/NCCR consequences, without reconstructing their proofs.
    - title: Wemyss, Flops and clusters in the homological minimal model programme
      url: https://www.maths.gla.ac.uk/~mwemyss/HomMMP4.pdf
      locator: §1.6, printed p.9; Setup 2.9, equations (2.A)–(2.B), and Notation 2.10,
        printed p.12; Lemma 2.12, printed p.13; Theorem 4.2(1)–(2), printed p.21
      statement: Notation 2.10 defines V_X using the duals of the extension bundles in
        (2.B), with N=H^0(V_X); (2.A) and Lemma 2.12 give its tilting
        equivalence and endomorphism identification. In this dual-bundle
        convention, Theorem 4.2 identifies nu_I N with H^0(V_X+) and gives the
        naturally commutative mutation/inverse-Bridgeland–Chen-flop square. The
        globally generated-bundle comparison used in this item is imported
        separately from Hirano–Wemyss Remark 4.4, not obtained by identifying
        these two bundles.
      hypotheses: Over C, with complete-local bases that are completions of finitely
        generated C-algebras at maximal ideals (§1.6); projective crepant
        birational morphism to a normal Gorenstein base of dimension three,
        fibres of dimension at most one, terminal Gorenstein source, and a
        floppable subset I (equivalently dim_C Lambda_I finite). Theorem 4.2
        uses V_X of Notation 2.10, the dual-bundle choice. The slice supplier
        Statement supplies the completion description of the common R. No direct
        application of this theorem with the globally generated V_C substituted
        for V_X is made.
      reading_limits: In this adjudication read §1.6, Setup 2.9, (2.A), (2.B),
        Notation 2.10, Lemma 2.12 and the statement of Theorem 4.2 in the online
        PDF text. Checked the setting definition for its explicit V versus
        T=V-dual convention and read the slice supplier Statement and proof,
        including the existing completion argument in step 1.2. No
        reconstruction of the geometric comparison, bundle proofs or
        finite-determinacy theorem, and no image inspection, is claimed.
    - title: Donovan–Wemyss, Noncommutative deformations and flops
      url: https://www.maths.gla.ac.uk/~mwemyss/NDF5.pdf
      locator: §1.4, printed p.5, first paragraph and displayed flop-equivalence pair
      statement: For a flop pair X and X-prime over X_con, both Bridgeland–Chen
        directions use the structure sheaf of X times_{X_con} X-prime as
        Fourier–Mukai kernel. This specifies the geometric flop-functor
        convention used here.
      hypotheses: The cited passage states the kernel convention for a flopping
        contraction of projective terminal Gorenstein threefolds. Only that
        convention is imported here; the complete-local comparison is supplied
        by Hirano–Wemyss Setup 4.1 and Remark 4.4, rather than inferred from
        global projectivity.
      reading_limits: In this adjudication read the first paragraph and displayed
        equivalence pair of §1.4 in the online PDF text. Use only the
        structure-sheaf kernel convention, without importing the twist or
        flop–flop results or reconstructing a complete-local equivalence proof.
dependency_level: 2
formulation_deps:
  - def-author-5f10a31d9e26-complete-local-flop-setting
  - prop-author-5f10a31d9e26-slice-restriction-contract
  - math:def-derived-category-of-an-abelian-category
  - math:def-exact-functor-between-triangulated-categories
  - math:def-natural-isomorphism
argument_deps:
  - def-author-5f10a31d9e26-complete-local-flop-setting
  - prop-author-5f10a31d9e26-slice-restriction-contract
---

## Statement

Use the complete-local isolated complex cDV smooth flopping setting and the finite arrangement $\mathcal H_\Lambda$ of the cited local interfaces. Let $\operatorname{CM}R$ consist of the zero module and the finite $R$-modules of depth three, with $R$-linear maps. Write $\operatorname{add}M$ for summands of finite direct sums of $M$. A generator has $R\in\operatorname{add}M$; basic means a finite sum of pairwise nonisomorphic indecomposable modules. A cluster-tilting object $M\in\operatorname{CM}R$ satisfies
$$\operatorname{add}M=\{L\in\operatorname{CM}R:\operatorname{Ext}^1_R(L,M)=0\}=\{L\in\operatorname{CM}R:\operatorname{Ext}^1_R(M,L)=0\}.$$
For a basic cluster-tilting generator $M=M_i\oplus\widehat M$ with $M_i$ nonfree indecomposable, its mutation $\nu_iM=M_i'\oplus\widehat M$ replaces $M_i$ by the unique other indecomposable complement, up to isomorphism, that leaves the module cluster-tilting.

Every chamber $C$ labels a minimal model $f_C:X_C\to\operatorname{Spec}R$ and a basic cluster-tilting generator $M_C$, with NCCR $\Lambda_C=\operatorname{End}_R M_C$. All these models are nonsingular projective crepant resolutions. Choose the compatible basic globally generated Van den Bergh vector bundles $V_C$ (finite locally free sheaves) in the convention of Hirano–Wemyss Setup 4.1, using the setting's fixed $\mathcal V$ at the initial chamber, with $H^0(X_C,V_C)=M_C$ and $\operatorname{End}_{X_C}V_C\cong\Lambda_C$. Their tilting equivalences are
$$E_C:=\mathbf R\operatorname{Hom}_{X_C}(V_C,-):D^b(\operatorname{coh}X_C)\xrightarrow{\sim}D^b(\operatorname{mod}\Lambda_C).$$
Use bounded derived categories, finite right modules and exact functors with the conventions of the cited definitions. Here $\mathbf R\operatorname{Hom}$ is total right-derived Hom; the existence of these bundles and equivalences is imported.

For an oriented adjacent pair $C\to D$, a single exceptional curve flops and $M_D\cong\nu_iM_C$ at its corresponding nonfree summand. Fix this isomorphism and the induced endomorphism-ring identifications. Put $T_{CD}=\operatorname{Hom}_R(M_C,M_D)$, a left $\Lambda_D$, right $\Lambda_C$ bimodule via postcomposition and precomposition. The mutation equivalence is
$$t_{CD}:=\mathbf R\operatorname{Hom}_{\Lambda_C}(T_{CD},-):D^b(\operatorname{mod}\Lambda_C)\xrightarrow{\sim}D^b(\operatorname{mod}\Lambda_D).$$

Let $X_C\to Y_i\leftarrow X_D$ be the common contraction of that curve and its flop. For the ordinary fibre product $Z_i=X_C\times_{Y_i}X_D$, write $p_C:Z_i\to X_C$ and $p_D:Z_i\to X_D$ for the projections. Choose the Bridgeland–Chen functor in the direction
$$B_{DC}:=\mathbf R(p_C)_*\mathbf Lp_D^*:D^b(\operatorname{coh}X_D)\xrightarrow{\sim}D^b(\operatorname{coh}X_C).$$
This is the Fourier–Mukai functor with structure-sheaf kernel $\mathcal O_{Z_i}$; $\mathbf Lp_D^*$ and $\mathbf R(p_C)_*$ denote derived pullback and pushforward. With the compatible choices above, the precise comparison is the natural isomorphism
$$t_{CD}\circ E_C\cong E_D\circ B_{DC}^{-1}:D^b(\operatorname{coh}X_C)\longrightarrow D^b(\operatorname{mod}\Lambda_D).$$
The inverse denotes a quasi-inverse equivalence. In particular, after transport, $E_D^{-1}\circ t_{CD}\circ E_C\cong B_{DC}^{-1}$.

## Statement references

[[def-author-5f10a31d9e26-complete-local-flop-setting]]

[[prop-author-5f10a31d9e26-slice-restriction-contract]]

[[math:def-derived-category-of-an-abelian-category]]

[[math:def-exact-functor-between-triangulated-categories]]

[[math:def-natural-isomorphism]]

## External input

Hirano–Wemyss §1.3 and §4.1 supply the module definitions, mutation and chamber dictionary. Wemyss survey §4.1 and Theorem 4.3 supply the minimal-model correspondence and the smooth/NCCR conclusions under the stated hypotheses. The initial smooth resolution supplies an NCCR; isolatedness makes the finite chamber graph exhaustive.

Hirano–Wemyss Setup 4.1 uses the globally generated bundle and its pushdown, matching the setting's $\mathcal V$ and $M$; §1.3 uses right modules. With these geometric tilting identifications, Notation 4.3 defines exactly $T_{CD}$ and $t_{CD}$ above, and Remark 4.4 supplies their natural identification with the inverse single-curve flop. This published comparison in the globally generated convention is the input for the displayed square. Donovan–Wemyss §1.4 specifies its structure-sheaf kernel convention. These comparison and equivalence statements are imported, without reconstructing their proofs.

Wemyss (2.A), Notation 2.10 and Lemma 2.12 instead use the dual extension bundle: his $V_X$ is the setting's $\mathcal T=\mathcal V^\vee$, rather than $\mathcal V$. Theorem 4.2 states the comparison in that convention. The comparison for the globally generated $V_C$ is supplied by Hirano–Wemyss Remark 4.4 in its Setup 4.1; no identification of $V_C$ with Wemyss's $V_X$, or deduction of a derived-functor square from the slice supplier's stability-wall duality, is used.

Wemyss's §1.6 requires each complete-local base to be the completion of a finitely generated $\mathbb C$-algebra at a maximal ideal. The Statement of [[prop-author-5f10a31d9e26-slice-restriction-contract]] supplies exactly this conclusion for the common base: $R\cong\widehat{B_{\mathfrak n}}$ as complete-local $\mathbb C$-algebras, for a finitely generated $\mathbb C$-algebra $B$ and maximal ideal $\mathfrak n$. Every model $X_C$ here is over this same $R$, so this completion requirement in the Wemyss theorem cited by Hirano–Wemyss Remark 4.4 is satisfied. The globally generated-bundle comparison itself is imported from that remark in its stated convention.

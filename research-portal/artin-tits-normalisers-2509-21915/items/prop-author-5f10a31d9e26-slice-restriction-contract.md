---
id: prop-author-5f10a31d9e26-slice-restriction-contract
kind: proposition
title: Generic slicing identifies flop stability walls with restricted ADE walls
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-author-5f10a31d9e26-complete-local-flop-setting
  - math:def-finite-weyl-root-system-lattice-and-chamber-conventions
dependency_roles:
  def-author-5f10a31d9e26-complete-local-flop-setting: mathematical-premise
  math:def-finite-weyl-root-system-lattice-and-chamber-conventions: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Wemyss, Flops and clusters in the homological minimal model programme
      url: https://www.maths.gla.ac.uk/~mwemyss/HomMMP4.pdf
      locator: §1.6, printed p.9; Setup 2.9, p.12; Theorem 5.24(1)--(3), pp.39--40;
        Corollary 5.25(1)--(3), p.41
      statement: For the specified basic bundle on a partial ADE surface resolution,
        the rank-vector stability walls are proper restrictions of the full
        surface walls to the surviving curve coordinates. The rank-vector
        chamber structure of the specified threefold bundle algebra equals that
        of its sufficiently generic slice.
      hypotheses: Over C; all complete-local commutative base rings are completions of
        finitely generated C-algebras at maximal ideals (§1.6). The d=3 crepant
        setup of §2.9 requires projective birational f, normal Gorenstein
        complete-local base, fibres of dimension at most one, and Gorenstein
        terminal source. Corollary 5.25 further requires a minimal model or a
        flopping contraction, the bundle V_X of §2.2, and its rank dimension
        vector. Here f is the fixed isolated-cDV smooth flop; step 1.2 verifies
        the completion hypothesis.
      reading_limits: In this adjudication read the online PDF text of §1.6, Setup
        2.9, and the statements and displayed proofs of Theorem 5.24 and
        Corollary 5.25. Import the geometric wall results; their underlying
        moduli and surface arguments are not reconstructed. The
        base-algebraicity and bundle/module/coordinate applications are checked
        locally.
    - title: Wemyss, A lockdown survey on cDV singularities
      url: https://www.maths.gla.ac.uk/~mwemyss/Survey200223.pdf
      locator: §3.1, printed pp.13--14; §3.3, printed p.15
      statement: The arrangement is obtained by intersecting the finite ADE reflection
        arrangement with Theta_J, where J is the curves contracted in the
        generic partial surface resolution.
      hypotheses: Complex complete-local cDV singularity with a chosen minimal model
        and generic slice.
      reading_limits: In this adjudication read the online PDF text of §3.1 (printed
        pp.13--14) and §3.3 (p.15). Import the finite ADE dual-coordinate
        restriction and curve labels only; the root-system terminology is
        supplied separately by the declared mathematical definition. No
        arbitrary Coxeter-type extension is imported.
    - title: Hirano–Wemyss, Faithful actions from hyperplane arrangements
      url: https://www.maths.gla.ac.uk/~mwemyss/Faithful_ArXiv3.pdf
      locator: §1.3, printed p.3; Setup 4.1, pp.8--9; §4.1, p.9, before Example 4.2
      statement: For the basic pushdown of the globally generated tilting bundle in
        Setup 4.1, H_Lambda is the associated simplicial arrangement described
        by Wemyss 5.24 and 5.25.
      hypotheses: Complete-local threefold flopping contraction with smooth source;
        right modules, basic M=f_*V and Lambda=End_R(M).
      reading_limits: In this adjudication read the online PDF text of §1.3, Setup 4.1
        and §4.1 through the definition of H_Lambda before Example 4.2. Import
        the identification of the associated arrangement and its simpliciality;
        no Auslander--McKay or faithfulness proof is reconstructed.
    - title: Greuel–Pham, Finite determinacy of matrices and ideals
      url: https://arxiv.org/pdf/1708.02442v3
      locator: Definition 4.1, printed p.11; Theorem 4.6(2)(i),(iii), printed p.12
        (PDF pages 11--12)
      statement: For a proper ideal I in K[[z_1,...,z_s]], if K is infinite and
        dim(K[[z]]/I)>0, then I is finitely contact determined if and only if
        K[[z]]/I is an isolated complete intersection singularity. Contact
        k-determinacy means that replacing a minimal generating list by one with
        the same k-jets gives an isomorphic local K-algebra quotient.
      hypotheses: K infinite, finitely many formal variables, I proper, and positive
        quotient dimension. Applied with K=C, s=4, I=(F) and the isolated
        three-dimensional hypersurface from the setting.
      reading_limits: For this interface repair, read Definition 4.1, Proposition 4.3,
        Remark 4.5 and Theorem 4.6 with its displayed proof in the online v3 PDF
        text. Import finite contact determinacy; its proof is not reconstructed
        and no deformation bound is used. Checked the existing local
        polynomial-truncation argument in step 1.2, which proves the completion
        assertion now exposed in the Statement.
proof_strategy: direct
dependency_level: 1
formulation_deps:
  - def-author-5f10a31d9e26-complete-local-flop-setting
  - math:def-finite-weyl-root-system-lattice-and-chamber-conventions
argument_deps:
  - def-author-5f10a31d9e26-complete-local-flop-setting
  - math:def-finite-weyl-root-system-lattice-and-chamber-conventions
---

## Statement

Use the complete-local smooth flop, the basic globally generated bundle $\mathcal V$, its algebra $\Lambda=\operatorname{End}_R H^0(X,\mathcal V)$ and rank vector $r=(1,(r_i)_{i\in I})$ fixed in the setting definition, with $I=\Delta\setminus J$. Let $\Phi_\Delta\subset E$ be the finite reduced crystallographic ADE root system with simple-root basis $(\alpha_i)_{i\in\Delta}$ labelled by the same vertices as the exceptional curves $E_i$ of the minimal surface resolution. Normalize $(\alpha_i,\alpha_i)=2$, with $(\alpha_i,\alpha_k)=-1$ for adjacent distinct vertices and $0$ for nonadjacent distinct vertices. Identify $\mathbb R^\Delta$ with $E^*$ by the evaluation coordinates $\vartheta_i=\vartheta(\alpha_i)$. The real stability space $\Theta_r(\Lambda)$, for right modules of this dimension vector and the stated submodule inequality, identifies by the surviving-curve coordinates with
$$L=\{\vartheta\in\mathbb R^{\Delta}:\vartheta_j=0\ (j\in J)\},\qquad\vartheta_i=\theta_i\ (i\in I).$$
Its chamber walls are exactly the distinct proper intersections $L\cap\alpha^\perp$ for roots $\alpha\in\Phi_\Delta$ with $L\not\subseteq\alpha^\perp$. Here, in simple-root dual coordinates, $\alpha=\sum_i c_i\alpha_i$ has $\alpha^\perp=\{\vartheta:\sum_i c_i\vartheta_i=0\}$. This finite simplicial arrangement is the geometric arrangement $\mathcal H_\Lambda$ used for flop and mutation functors. It is an intersection arrangement, not in general a Coxeter arrangement.

In addition, the common base $R$ is isomorphic as a complete-local $\mathbb C$-algebra to $\widehat{B_{\mathfrak n}}$ for some finitely generated $\mathbb C$-algebra $B$ and maximal ideal $\mathfrak n$.

## Statement references

[[def-author-5f10a31d9e26-complete-local-flop-setting]]

[[math:def-finite-weyl-root-system-lattice-and-chamber-conventions]]

## Facts & Assumptions

[F1] The bundle choices $\mathcal V$, $\mathcal T=\mathcal V^\vee$, their basic algebras $\Lambda$ and $A$, and rank-vector stability spaces are fixed in [[def-author-5f10a31d9e26-complete-local-flop-setting]].

[F2] Wemyss Theorem 5.24 and Corollary 5.25 give the proper-restriction chamber arrangement for the algebra of $\mathcal T$ in his conventions, subject to Setup 2.9 and the completion-of-a-finite-type-algebra convention in §1.6. His §1.6 uses left modules with order-of-application endomorphism multiplication; these are right $A$-modules with usual composition.

[F3] Wemyss survey §3.1 and §3.3 identify the full surface walls with finite ADE root hyperplanes and the subspace with the surviving-curve coordinates. Hirano--Wemyss Setup 4.1 and §4.1 identify the geometric finite simplicial arrangement $\mathcal H_\Lambda$ for the globally generated basic bundle with this restriction arrangement.

[F4] Greuel--Pham Theorem 4.6(2)(iii)$\Rightarrow$(i), with contact determinacy defined in Definition 4.1, gives finite contact determinacy for an isolated positive-dimensional formal complete intersection over an infinite field. For a hypersurface this means that all sufficiently high polynomial truncations define isomorphic complete-local algebras.

[F5] Finite reduced crystallographic root systems and their simple-root and dual-space conventions have the meaning in [[math:def-finite-weyl-root-system-lattice-and-chamber-conventions]]. Here use the labelled ADE simple-root basis and normalization in the Statement; a weight $\vartheta\in E^*$ has coordinate $\vartheta_i=\vartheta(\alpha_i)$, so it evaluates $\alpha=\sum_i c_i\alpha_i$ as $\sum_i c_i\vartheta_i$.

## External input

The geometric wall theorem in [F2] is imported from Wemyss Theorem 5.24(1)--(3), printed pp.39--40, and Corollary 5.25(1)--(3), p.41, for the specified bundle algebra and rank dimension vector. The ADE coordinate and geometric-arrangement identifications in [F3] are imported from the survey §3.1, pp.13--14, §3.3, p.15, and Hirano--Wemyss Setup 4.1 and §4.1, pp.8--9. Their geometric proofs are not reconstructed. The following argument only checks applicability and the bundle, module-side and real-coordinate normalizations.

Greuel--Pham Definition 4.1 and Theorem 4.6(2)(iii)$\Rightarrow$(i), printed pp.11--12, supply the finite-contact-determinacy premise [F4]. Step 1.2 applies it to the isolated hypersurface in the setting to verify Wemyss §1.6; that application preserves the stated formal scope.

## Proof

**Given:** The data, bundle choice and stability convention in the Statement.

**Goal:** Prove the stated completion description of $R$ and identify the real stability walls with the proper restricted ADE root hyperplanes and the geometric arrangement stated above.

1.1 Since $r_0=1$, any independent curve coordinates $(\theta_i)_{i\in I}$ determine the unique weight $\theta_0=-\sum_{i\in I}r_i\theta_i$. Extending these coordinates by zero on $J$ gives a linear bijection $\Theta_r(\Lambda)\to L$, with inverse given by restriction to $I$ and that formula for $\theta_0$. The same construction applies to $A$ because taking the bundle dual preserves each summand rank. The evaluation convention in [F5] identifies these coordinates with the specified subspace of $E^*$. [given, F1, F5, construct]

1.2 Write $S=\mathbb C\llbracket z_1,z_2,z_3,z_4\rrbracket$, $\mathfrak m=(z_1,z_2,z_3,z_4)$ and $R=S/(F)$ as in the setting. This is an isolated complete intersection of dimension three over the infinite field $\mathbb C$, so [F4] applies to the proper principal ideal $(F)$. Choose a determinacy order $k$ at least the order of $F$, and let $P$ be its degree-$k$ polynomial truncation. Then $F-P\in\mathfrak m^{k+1}$ and $P\ne0$, so contact determinacy gives $R\cong S/(P)$ as complete-local $\mathbb C$-algebras. For the finitely generated algebra $B=\mathbb C[z_1,z_2,z_3,z_4]/(P)$ and its origin maximal ideal $\mathfrak n$, the finite jets of $B_{\mathfrak n}$ are $S/((P)+\mathfrak m^q)$; their inverse limit is $S/(P)$. Thus $R\cong\widehat{B_{\mathfrak n}}$. The ADE slice also has a polynomial presentation by its stated Du Val normal form. Transporting the fixed morphism, slice and bundles along these complete-base isomorphisms preserves their properties and rank-vector stability. Hence the completion convention of Wemyss §1.6 holds for the required bases, with no restriction on the formal series originally chosen. [F1, F4, construct]

2.1 Bundle duality sends an endomorphism $a$ of $\mathcal T$ to $a^\vee$ on $\mathcal V$, with $(ab)^\vee=b^\vee a^\vee$, and double duality is its inverse. Thus $\Lambda\cong A^{\mathrm{op}}$, preserving each labelled summand projection. For a finite-dimensional right $A$-module $Q$, its vector-space dual $DQ=\operatorname{Hom}_{\mathbb C}(Q,\mathbb C)$ is a right $\Lambda$-module of the same dimension vector. Submodules $U\subseteq DQ$ correspond by annihilators to quotients $Q/N$, and $\dim U=\dim(Q/N)$ vertex by vertex. If $\dim Q=r$ and $\theta(r)=0$, then $(-\theta)(U)=\theta(N)$. Nonzero proper submodules correspond on the two sides. Hence $Q$ is $\theta$-semistable, respectively stable, exactly when $DQ$ is $(-\theta)$-semistable, respectively stable. Applying double vector-space duality gives the converse and transports the chamber and wall structures by $\theta\mapsto-\theta$. [F1, step 1.1, algebra]

2.2 The fixed morphism has smooth source and is a complete-local crepant flopping contraction, and $A$ is exactly the algebra of the basic bundle $\mathcal T$ in [F2] after translating its module and multiplication conventions. Step 1.2 verifies the additional completion hypothesis in [F2]. Apply the imported slice and surface wall theorems to this algebra with its rank vector. By [F3] and the root-system conventions [F5], they give precisely the proper restricted ADE root hyperplanes in the evaluation coordinates of step 1.1. Although the GIT source uses rational weights, for fixed $r$ there are only finitely many possible submodule dimension vectors $\beta$, with $0\leq\beta_i\leq r_i$. The signs and zeros of the finitely many integral forms $\theta\cdot\beta$ therefore determine semistability and stability of every such module. Every nonempty real sign stratum contains rational points: its equalities define a rational linear subspace, and rational points in it approximate any point satisfying its finitely many strict inequalities. Thus the rational chamber description extends to the real stability space without additional walls. [F1, F2, F3, F5, step 1.1, step 1.2]

3.1 Negation fixes $L$ and every central restricted root hyperplane as a set, so the duality comparison in step 2.1 leaves the wall collection from step 2.2 unchanged. This gives the stated walls for $\Lambda$ in the chosen surviving-curve coordinates. The identification and simpliciality in [F3] now match this arrangement with $\mathcal H_\Lambda$ for flop and mutation functors. Since the imported construction is a restriction arrangement, it supplies no general assertion that this arrangement is Coxeter. The completion description of $R$ is proved in step 1.2. [F3, step 1.2, step 2.1, step 2.2] ∎

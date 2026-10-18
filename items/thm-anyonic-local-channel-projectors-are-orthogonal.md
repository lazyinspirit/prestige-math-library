---
id: thm-anyonic-local-channel-projectors-are-orthogonal
kind: theorem
title: "Local channel projections are orthogonal idempotents"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [ def-anyonic-local-channel-projector, def-qc-tqc-unitary-fusion-category ]
justified_by: []
proof_strategy: direct
axiom_use: None; the proof is finite-dimensional linear algebra.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§§3.2–3.5, PDF pp. 4–16: unitary associators and orthonormal F-matrices."
    - title: "Shu-Heng Shao, What’s Done Cannot Be Undone: TASI Lectures on Non-Invertible Symmetries"
      url: "https://arxiv.org/pdf/2308.00747"
      locator: "§3.4.1, PDF pp. 34–35, equations (3.68)–(3.70): F-move channel operators."
verification:
  precheck: pass
---

## Statement

Let $b,c,a_1,\ldots,a_n$ be simple objects of a unitary fusion category, with $n\ge2$, and let $T_{\mathrm{fixed}}$ be a fixed parenthesization of $b\otimes a_1\otimes\cdots\otimes a_n$. Equip $H=\operatorname{Hom}(c,T_{\mathrm{fixed}})$ with the split Hom inner product $g^\dagger h=\langle h,g\rangle\operatorname{id}_c$ and choose orthonormal split vertex bases in the trees below. Fix $1\le i<n$. Let $A_i:T_{\mathrm{fixed}}\to T_{\mathrm{pair}}$ be a composite of associators and inverses to a tree fusing $a_i,a_{i+1}$ first, without permuting inputs. Let $F_i$ be the matrix of $h\mapsto A_i\circ h$, with target rows and source columns, and let $\Pi_s$ project onto all pair-first coordinates of simple pair output $s$, retaining every multiplicity index. Define $P_{i,s}:=F_i^{-1}\Pi_sF_i$, extending the repeated-charge construction of [[def-anyonic-local-channel-projector]] to these arbitrary simple site charges. Then $(P_{i,s})_s$ is pairwise orthogonal, self-adjoint, and idempotent, and its sum over all simple outputs of $a_i\otimes a_{i+1}$ is the identity on $H$.

## Facts & Assumptions

**Given:** The unitary fusion category, finite ordered simple inputs, split Hom space, orthonormal vertex bases, and adjacent pair specified in the Statement.

[F1] [[def-anyonic-local-channel-projector]] defines the repeated-charge case by $P_{i,s}=F_i^{-1}\Pi_sF_i$, with $F_i$ the split-tree postcomposition matrix and $\Pi_s$ retaining all coordinates of pair output $s$. The Statement explicitly uses this same construction for arbitrary simple site charges.

[F2] [[def-qc-tqc-unitary-fusion-category]]: the associator is unitary and tensor product preserves daggers.

## Proof

**Given:** The category, pair, tree bases, and operators specified in the Statement.

1.1 Orthogonal simple summand inclusions satisfy $v_\mu^\dagger v_\nu=\delta_{\mu\nu}\operatorname{id}$ and $\sum_\mu v_\mu v_\mu^\dagger=\operatorname{id}$, with zero cross-composites for distinct simple labels. Tensoring and composing these identities up a finite tree proves that its split composites form an orthonormal basis, for the arbitrary simple inputs in the Statement. Each associator and its inverse is unitary, so $A_i$ is unitary and $(A_i g)^\dagger(A_i h)=g^\dagger h$; hence $F_i^{-1}=F_i^\dagger$. In the pair-first basis the coordinates are partitioned by pair output. Thus $\Pi_s^\dagger=\Pi_s$, $\Pi_s^2=\Pi_s$, $\Pi_s\Pi_t=0$ for $s\ne t$, and $\sum_s\Pi_s=I$, including every multiplicity coordinate. The same identities hold on a zero-dimensional block with its unique empty maps. [F1, F2, given, algebra]

2.1 By step 1.1, $P_{i,s}=F_i^\dagger\Pi_sF_i$, so $P_{i,s}^\dagger=P_{i,s}$ and $P_{i,s}^2=F_i^\dagger\Pi_s^2F_i=P_{i,s}$. For $s\ne t$, $P_{i,s}P_{i,t}=F_i^\dagger\Pi_s\Pi_tF_i=0$, and $\sum_sP_{i,s}=F_i^\dagger I F_i=I$. When all site charges coincide this is exactly [F1]'s family. [F1, step 1.1, algebra] ∎

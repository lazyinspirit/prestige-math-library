---
id: thm-anyonic-path-space-is-hilbert-under-unitarity
kind: theorem
title: "Unitary fusion paths form an orthonormal Hilbert basis"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-anyonic-fusion-path-space, def-qc-tqc-fusion-multiplicity-space, def-qc-tqc-unitary-fusion-category, lem-anyonic-fusion-path-basis, thm-qc-tqc-fusion-multiplicity-space-is-hilbert]
justified_by: []
proof_strategy: induction
axiom_use: None; the proof uses only finite-dimensional spaces and finite orthogonal direct sums.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§§3.2–3.5, PDF pp. 4–16: dagger, orthogonal direct sums, multiplicity inner products, and tree bases."
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§4.1, Definition 4.1.1, printed p. 65: finite semisimple rigid tensor categories."
verification:
  precheck: pass
---

## Statement

Let $\mathcal C$ be a unitary fusion category, and use orthonormal bases in each split space $W_{x,a}^y=\operatorname{Hom}(y,x\otimes a)$, equivalently the adjoints of orthonormal bases of $V_{x a}^y=\operatorname{Hom}(x\otimes a,y)$. Give $H_{a,n;b,c}=\operatorname{Hom}(c,T_n)$ the Hom-space inner product linear in the first variable, determined by $g^\dagger f=\langle f,g\rangle\operatorname{id}_c$. For $n=0$ use the unitary empty-path isomorphism specified in [[def-anyonic-fusion-path-space]]. Then the path composites of [[def-anyonic-fusion-path-space]] are an orthonormal basis of $H_{a,n;b,c}$.

## Facts & Assumptions

**Given:** A unitary fusion category, simple labels $a,b,c$, fixed $n\ge0$, and orthonormal vertex bases.

[F1] [[def-anyonic-fusion-path-space]]: $H_{a,n;b,c}=\operatorname{Hom}(c,T_n)$ and every path composite is formed from the inclusions $i_j:x_j\to x_{j-1}\otimes a$ by tensoring with identities and composition.

[F2] [[def-qc-tqc-unitary-fusion-category]]: dagger is conjugate-linear and reverses composition; $v^\dagger v$ is positive and is zero only for $v=0$; tensor product preserves daggers; finite semisimple decompositions may be chosen orthogonally; associators and unitors are unitary.

[F3] [[def-qc-tqc-fusion-multiplicity-space]] and [[thm-qc-tqc-fusion-multiplicity-space-is-hilbert]]: for simple output $y$, the pairing on $V_{x a}^y=\operatorname{Hom}(x\otimes a,y)$ is positive definite and the chosen vertex maps are orthonormal.

[F4] [[lem-anyonic-fusion-path-basis]]: the path composites are already a basis of $H_{a,n;b,c}$.

## Proof

**Given:** The unitary category, the path space, and the vertex bases described above.

1.1 For $n=0$, $T_0=b$. If $b\not\cong c$, simplicity gives $\operatorname{Hom}(c,b)=0$ and there are no paths. If $b\cong c$, the only empty-path vector is the chosen unitary isomorphism $u_{c,b}:c\to b$, and $u_{c,b}^\dagger u_{c,b}=\operatorname{id}_c$ shows it has norm one. Such a choice exists: for any isomorphism $v:c\to b$, [F2] and [F3] give $v^\dagger v=\lambda\operatorname{id}_c$ with $\lambda>0$, so $u_{c,b}=\lambda^{-1/2}v$ is a unitary isomorphism. Thus the length-zero path family is orthonormal. For $n=1$, the path family is the given orthonormal split vertex basis $B_{b,a}^{c}$ itself, so the positive-length base case holds independently of the empty-path choice. [F1, F2, F3, given, base]

1.2 Fix $n\ge1$ and assume that all length-$n$ path composites, for every simple endpoint, are orthonormal in their Hom spaces. [F1, F2, given, ih]

1.3 If $f_\mu:x\otimes a\to y$ are the chosen orthonormal vertex maps, their adjoints $i_\mu=f_\mu^\dagger:y\to x\otimes a$ satisfy $i_\mu^\dagger i_\nu=f_\mu f_\nu^\dagger=\delta_{\mu\nu}\operatorname{id}_y$ by [F3]. Distinct simple outputs are orthogonal, and the orthogonal semisimple decomposition has projections $i_\mu i_\mu^\dagger$ summing to the identity. [F2, F3, algebra]

2.1 Tensoring the orthonormal length-$n$ path inclusions by $\operatorname{id}_a$ preserves their adjoint products because $(f\otimes\operatorname{id}_a)^\dagger=f^\dagger\otimes\operatorname{id}_a$ by [F2]. Composing with the isometric inclusions of step 1.3 therefore gives orthonormal path inclusions at length $n+1$. Induction from step 1.1 proves orthonormality for every finite $n$. [F1, F2, step 1.2, step 1.3, ih, induction]

3.1 By induction, every path composite is orthonormal. The basis lemma [F4] says the same finite family spans $H_{a,n;b,c}$; if there are no admissible paths, that space is zero and the empty family is its basis. Thus the path composites are an orthonormal basis for each $n$, completing induction from step 1.1. [F4, step 1.1, step 2.1, induction, discharge-induction: step 1.1] ∎

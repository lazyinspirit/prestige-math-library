---
id: thm-hh-split-deformation-labels-and-exceptional-parameters
kind: theorem
title: "Split formal deformations preserve simple-block labels; the trace determinant bounds exceptional parameters"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 3
deps: [def-field, def-free-module-on-a-set-and-standard-basis, def-hh-specialization-and-regular-trace-determinant, def-left-and-right-modules, def-simple-module, lem-hh-formal-deformation-matrix-unit-lifting, lem-hh-one-parameter-formal-series-local-ring, lem-hh-universal-presentations-and-base-change, thm-hh-generic-finite-hecke-semisimplicity]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras, EPFL course notes"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "§4.1 and Theorems 4.2–4.4, PDF pp. 15–16: generic split semisimplicity and Tits-style simple-character correspondence under explicit hypotheses."
    - title: "Pavel Etingof, Structure of Finite Dimensional Algebras, MIT OpenCourseWare 18.712, Chapter 7"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/70961c084499052681efb7485af37858_MIT18_712F10_ch7.pdf"
      locator: "§7.2–7.3, PDF pp. 1–2: orthogonal idempotent lifting and matrix-block organization of simple modules; the local proof establishes the complete formal-series case."
axiom_use: "No arbitrary Choice. The matrix factors and their simple modules are indexed by a finite set."
---

## Statement

Let $k$ be a field, $R:=k\llbracket h\rrbracket$, and $A$ a finite free unital $R$-algebra with

$$A/hA\cong\prod_{\lambda\in\Lambda}\operatorname{Mat}_{d_\lambda}(k)$$

for a finite set $\Lambda$ and positive integers $d_\lambda$. Put $K:=\operatorname{Frac}(R)$; the local-series lemma below verifies that this is a field and that $R$ embeds in it. Then the simple modules of the special fiber $A/hA$ and the generic fiber $K\otimes_R A$ are both indexed by $\Lambda$, and the $\lambda$-label has dimension $d_\lambda$ in each fiber.

Separately, for a finite Coxeter Hecke algebra in characteristic zero with regular-trace determinant $D_W$ from [[def-hh-specialization-and-regular-trace-determinant]], every field specialization with $D_W\ne0$ is semisimple. The zero set $D_W=0$ is the exceptional set for this trace certificate; it is not asserted to be exactly the nonsemisimple locus. No splitness or simple-label claim is made for an arbitrary Hecke specialization from determinant nonvanishing alone.

## Facts & Assumptions

**Given:** The formal split algebra $A$ and the finite Hecke family described in the statement.

[F1] Under the formal hypotheses, $A$ is isomorphic to $\prod_{\lambda\in\Lambda}\operatorname{Mat}_{d_\lambda}(R)$ by lifts of the reduction's matrix units ([[lem-hh-formal-deformation-matrix-unit-lifting]]).

[F2] For a field specialization $\phi:R_k\to K'$, if $\phi(D_W)\ne0$, then $H_\phi$ is semisimple; this gives no claim when the determinant vanishes ([[thm-hh-generic-finite-hecke-semisimplicity]]).

[F3] The regular-trace determinant is defined by the Gram matrix $(\operatorname{Tr}(L_{T_xT_y}))_{x,y\in W}$, and every field specialization sends the generic determinant to its specialized determinant ([[def-hh-specialization-and-regular-trace-determinant]]).

[F4] For $R=k\llbracket h\rrbracket$, the quotient $R/hR$ is canonically $k$, $R$ is a domain, and $K=\operatorname{Frac}(R)$ is a field containing $R$ ([[lem-hh-one-parameter-formal-series-local-ring]]).

[F5] A simple left module is nonzero and has no proper nonzero submodule ([[def-simple-module]]).

[F6] A left module is an abelian group with a unital scalar action satisfying the module laws ([[def-left-and-right-modules]]).

[F7] The standard basis of a finite free module gives unique finite coordinates ([[def-free-module-on-a-set-and-standard-basis]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $A\cong\prod_{\lambda\in\Lambda}\operatorname{Mat}_{d_\lambda}(R)$. Reducing this isomorphism modulo $h$ and using $R/hR\cong k$ from [F4] gives the stated product for the special fiber. Tensoring the matrix-unit basis with the field $K$ gives $K\otimes_R A\cong\prod_{\lambda\in\Lambda}\operatorname{Mat}_{d_\lambda}(K)$. The lifted block identities $p_\lambda=\sum_{a=1}^{d_\lambda}E_{\lambda,aa}$ reduce to the specified block identities and extend to the generic fiber. [F1, F4, given, algebra]

1.2 Let $L$ be any field and $d\ge1$. If $v\in L^d$ is nonzero, choose a nonzero coordinate $v_j$; for each $i$, the matrix unit $E_{ij}$ sends $v$ to $v_je_i$, and scalar multiplication by $v_j^{-1}$ produces $e_i$. Thus the natural left module $L^d$ is simple. Conversely, let $S$ be a simple left $\operatorname{Mat}_d(L)$-module. Since $1=\sum_iE_{ii}$ and $S\ne0$, choose $i$ and $s\in S$ with $E_{ii}s\ne0$. Define the $L$-linear map $L^d\to S$ by $e_j\mapsto E_{ji}s$. It intertwines the action of each matrix unit because $E_{pq}E_{ji}=\delta_{qj}E_{pi}$; since matrix units form an $L$-basis of the algebra, it is a module homomorphism. It is nonzero, so its image is all of $S$ by simplicity; its kernel is a submodule of the simple natural module and is not the whole module, so it is zero. Hence every simple module for one matrix factor is its natural module and is unique up to isomorphism. [F3, F5, F6, F7, given, algebra, choose]

2.1 In a finite product of matrix algebras, the central block identities are pairwise orthogonal and sum to $1$. On a nonzero simple module their images are submodules whose sum is direct and equals the module. At least one image is nonzero; if two were nonzero, each would be a proper nonzero submodule, contradicting simplicity. Therefore exactly one block identity has nonzero image, that identity acts as the identity, and all others act as zero. Step 1.2 classifies the simple module for the unique acting factor. The same lifted $p_\lambda$ labels the corresponding factors in the special and generic fibers, and each natural module has dimension $d_\lambda$. [step 1.1, step 1.2, F5, F6, algebra]

3.1 For any finite Hecke specialization with $D_W\ne0$, [F3] says its regular-trace Gram determinant is nonzero, so its regular-trace pairing is nondegenerate; [F2] then gives semisimplicity. If $D_W=0$, [F2] gives no conclusion. This proves the stated scope of the exceptional parameter set and does not infer labels or splitness for these general fibers. [F2, F3, algebra] ∎

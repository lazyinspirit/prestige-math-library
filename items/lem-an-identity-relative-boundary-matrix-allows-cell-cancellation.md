---
id: lem-an-identity-relative-boundary-matrix-allows-cell-cancellation
kind: lemma
title: "An identity relative homotopy matrix permits cell cancellation"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases, lem-cell-slides-and-stabilizations-realize-elementary-group-ring-matrices, prop-relative-cw-inclusions-are-cofibrations, lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts, thm-long-exact-sequence-of-relative-homotopy-groups, def-elementary-expansion-and-collapse-of-finite-cw-complexes]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cohen, §8.2, printed p.30"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§8.2, printed p.30"
    - title: "Casson, proof of Theorem 4.7, printed pp.33–34"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassonsimp.pdf"
      locator: "Theorem 4.7 proof, printed pp.33–34"
---
## Statement

Let $L\subset K$ be a connected finite CW pair with only relative cells in
degrees $n,n+1$, where $n\ge3$. If the triple boundary in the chosen free
$\mathbb Z[\pi_1L]$ homotopy bases is an identity matrix, then a finite sequence
of elementary expansions and collapses relative to $L$ carries $(K,L)$ to
$(L,L)$. Equality of cellular incidence numbers is used through the relative
homotopy boundary, never directly as a free-face condition.

## Facts & Assumptions

**Given:** The two-layer pair and identity matrix in the statement.

[F1] The two relative homotopy groups have free group-ring bases on the cells and the triple boundary is represented by the relative cellular matrix ([[lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases]]).

[F2] Relative CW inclusions are cofibrations, so attaching-map homotopies extend over subsequently attached cells ([[prop-relative-cw-inclusions-are-cofibrations]]).

[F3] An elementary expansion adds, and a collapse removes, a cell pair with a genuine specified free face ([[def-elementary-expansion-and-collapse-of-finite-cw-complexes]]).

[F4] The long exact homotopy sequence of a pair identifies the kernel of $\pi_n(K_n)\to\pi_n(K_n,L)$ as the image of $\pi_n(L)$ and sends each relative characteristic disk to its attaching-sphere class in $\pi_{n-1}(L)$ ([[thm-long-exact-sequence-of-relative-homotopy-groups]]).

## Proof

**Proof technique:** direct.

1.1 Write $K_n=L\cup\{e_1^n,\ldots,e_a^n\}$. For each lower characteristic class $b_j\in\pi_n(K_n,L)$, the identity matrix supplies an upper class $u_j\in\pi_{n+1}(K,K_n)$ with triple boundary $\delta u_j=b_j$. The composite $\pi_{n+1}(K,K_n)\xrightarrow{\delta}\pi_n(K_n,L)\xrightarrow{\partial}\pi_{n-1}(L)$ is zero by exactness of the triple/pair boundary construction. Thus $\partial b_j=0$: the attaching sphere of each lower cell is null-homotopic in $L$. [F1, F4]

2.1 Apply the finite homotopy-of-attaching-map collar of Cohen’s attaching-map comparison, printed p.23, to trivialize each lower attaching map, pushing upper maps along the induced deformation. This uses [F2] and [F3], and is the simplification established in [[lem-cell-slides-and-stabilizations-realize-elementary-group-ring-matrices]]. The resulting lower skeleton has the form $K_n=L\vee\bigvee_{j=1}^aS^n_j$, and the relative homotopy matrix is still the identity after transporting its characteristic bases. [F2, F3, step 1.1]

3.1 The relative inclusion of the wedge $L\vee\bigvee S^n_j$ has, in degree $n$, a split exact sequence $\pi_n(L)\to\pi_n(K_n)\to\pi_n(K_n,L)\to0$: retraction $K_n\to L$ splits the first map, and the constant lower attaching maps make the last boundary zero. A relative basis vector $b_j$ therefore has a spherical representative $\sigma_j:S^n\to K_n$ that maps a chosen $n$-disk homeomorphically through the characteristic disk of $e_j^n$ and sends its complement to the basepoint in $L$. More generally, a class with zero $j$th relative coordinate has a representative avoiding the interior of $e_j^n$, since its $R$-linear sphere terms use only the other wedge summands and its residual term lies in $\pi_n(L)$. [F1, F4, step 2.1]

4.1 Let $\varphi_j:S^n\to K_n$ be the attaching map of the $j$th upper cell. Its relative image is $b_j$ by the identity-matrix hypothesis, while $\sigma_j$ has the same image. Exactness in step 3.1 gives $[\varphi_j]-[\sigma_j]\in\operatorname{im}\pi_n(L)$; represent this difference by a based sphere $\alpha_j$ in $L$ and pinch it into the complementary disk of $\sigma_j$. The resulting map $\sigma_j+\alpha_j$ is homotopic to $\varphi_j$ through maps to $K_n$ and still maps one prescribed disk homeomorphically onto the lower $j$th cell with every other point outside that cell. This is the homotopy-level correction in Cohen’s identity-matrix cancellation, printed p.30. [F4, step 3.1]

5.1 For $i\ne j$, the identity matrix gives zero $j$th relative coordinate to $\varphi_i$. By the last clause of step 3.1, homotope $\varphi_i$ to an attaching map missing the interior of $e_j^n$. Replace the upper attaching maps by these homotopic representatives, one at a time, via finite collar expansions and collapses relative to $K_n$; [F2] transports subsequent attachments. Afterward $e_j^n$ occurs in the boundary of exactly the corrected upper cell $e_j^{n+1}$, and the corrected $\varphi_j$ meets it on one disk by a homeomorphism. It is now a **genuine free face** and [F3] removes the pair. [F2, F3, step 3.1, step 4.1]

6.1 The remaining pair still has only $n$- and $(n+1)$-cells, and its triple boundary in the remaining transported bases is the identity with row and column $j$ deleted: the other corrected upper maps have no $e_j^n$ term and the first upper map is gone. Induct on the finite common number $a$; for $a=0$ the pair already equals $L$, while step 5.1 reduces $a$ by one. The finite concatenation of relative elementary moves proves the claim. ∎ [F1, step 5.1]

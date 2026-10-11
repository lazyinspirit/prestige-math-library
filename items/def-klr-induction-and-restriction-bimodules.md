---
id: def-klr-induction-and-restriction-bimodules
kind: definition
title: "Induction and restriction bimodules for KLR algebras"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum, def-klr-grading-and-diagrammatic-composition, def-graded-balanced-tensor-product-and-homogeneous-hom, def-graded-ring-module-bimodule-and-internal-shift, lem-graded-balanced-tensor-and-shift-isomorphisms, def-finitely-generated-graded-projective-module, thm-klr-pbw-basis-theorem]
justified_by: []
aliases: []
landmark: false
dependency_level: 4
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2'
      url: 'https://arxiv.org/pdf/0803.4121'
      locator: '§2.6, printed pp. 31-34: the embedding $R(\nu)\otimes R(\nu'')\hookrightarrow R(\nu+\nu'')$, the idempotent $1_{\nu,\nu''}$, and the functors $\mathrm{Ind}_{\nu,\nu''}$, $\mathrm{Res}_{\nu,\nu''}$.'
    - title: 'Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4 (42 pages)'
      url: 'https://arxiv.org/pdf/1102.4677'
      locator: '§3, (3.9)-(3.11), printed pp. 12-13: $M\circ N=R(m+n)\otimes_{R(m)\otimes R(n)}(M\otimes N)$ and $E_i(N)=e(\beta,i)N$, $F_i(M)=R(\beta+\alpha_i)e(\beta,i)\otimes_{R(\beta)}M$.'
    - title: 'Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, Bulletin of the AMS 47 (2010) 419-481 (survey), arXiv:0909.4844'
      url: 'https://arxiv.org/pdf/0909.4844'
      locator: '§2.11, printed pp. 21-23: the embeddings $R(\beta_1)\otimes\cdots\otimes R(\beta_m)\hookrightarrow R(\beta_1+\cdots+\beta_m)$ and the induced/restricted functors.'
---

## Definition

Let $Q$ be a KLR datum as in [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]. For $\beta,\gamma\in Q_+$ put $e(\beta,\gamma):=\sum_{\nu\in I^{\beta},\nu'\in I^{\gamma}}e(\nu\ast\nu')\in R(\beta+\gamma)$, where $\nu\ast\nu'$ is concatenation; this is an idempotent. The block inclusions $R(\beta)\hookrightarrow R(\beta+\gamma)$, $r\mapsto r\otimes1$ and $R(\gamma)\hookrightarrow R(\beta+\gamma)$, $s\mapsto1\otimes s$ combine into an injective $k$-algebra map $R(\beta)\otimes_kR(\gamma)\to R(\beta+\gamma)$ whose image is the separated-block subalgebra of the corner $e(\beta,\gamma)R(\beta+\gamma)e(\beta,\gamma)$; the inclusion generally is proper; in the diagram calculus it is horizontal concatenation of diagrams. **Induction** and **restriction** are the functors on graded left modules
$$\mathrm{Ind}_{\beta,\gamma}(M\boxtimes N):=R(\beta+\gamma)e(\beta,\gamma)\otimes_{R(\beta)\otimes_kR(\gamma)}(M\otimes_kN),\qquad \mathrm{Res}_{\beta,\gamma}L:=e(\beta,\gamma)L,$$
where $\otimes_{R(\beta)\otimes_kR(\gamma)}$ is the graded balanced tensor product of [[def-graded-balanced-tensor-product-and-homogeneous-hom]] (total-degree grading) and $M\otimes_kN$ carries the graded tensor product structure; $\mathrm{Ind}$ is a functor on graded modules over the graded algebra $R(\beta)\otimes_kR(\gamma)$ (through the tensor product of the two graded modules) and, since $R(\beta+\gamma)e(\beta,\gamma)$ is a graded $(R(\beta+\gamma),R(\beta)\otimes_kR(\gamma))$-bimodule and $e(\beta,\gamma)R(\beta+\gamma)$ is its right-module counterpart, the two tensor functors are of the two sidedness types of [[thm-graded-bimodule-tensor-hom-adjunction]]. Both functors are additive and degree-zero on degree-zero maps and extend to the direct sums over weights. Shifts satisfy $\mathrm{Ind}_{\beta,\gamma}(M\{r\}\boxtimes N\{s\})\cong\mathrm{Ind}_{\beta,\gamma}(M\boxtimes N)\{r+s\}$ and $\mathrm{Res}_{\beta,\gamma}(L\{r\})\cong(\mathrm{Res}_{\beta,\gamma}L)\{r\}$ ([[lem-graded-balanced-tensor-and-shift-isomorphisms]]). For a partial flag $\beta=\beta_1+\cdots+\beta_r$ the iterated functors are defined by iteration, and the parenthesization-independent identification is the one consumed below.

## Remarks

**Well-definedness.** Concatenation sends the two tensor-factor identities to $e(\beta,\gamma)$ and respects the relations of each block, so $r\otimes s\mapsto r\cdot(\text{image of }s)$ is a unital algebra homomorphism from $R(\beta)\otimes_kR(\gamma)$ onto the separated-block subalgebra of the corner; note that it is unital into the corner, not into all of $R(\beta+\gamma)$, and the two block images commute because separated generators commute by relations (3), (5) and (6) with $|a-b|>1$. Injectivity is read off the PBW basis of [[thm-klr-pbw-basis-theorem]]: the monomials whose permutation word lies in the parabolic subgroup $S_{|\beta|}\times S_{|\gamma|}$ (in the appropriate block positions) and whose dot exponents are arbitrary are exactly the images of the tensor products of the two PBW bases, hence are linearly independent. The image can be strictly smaller than the corner: for $\beta=\gamma=\alpha_i$ the corner is the nil-Hecke algebra $R(2\alpha_i)\cong NH_2$, while the image is $k[x_1,x_2]e(ii)$ (with $x_1,x_2$ acting blockwise), which does not contain $\tau_1$.

**Functoriality and shifts.** The balanced tensor product of a right and a left module over the graded algebra $R(\beta)\otimes_kR(\gamma)$ is defined by the universal property with respect to balanced bilinear maps of degree $0$, and both balance relations and the outer $R(\beta+\gamma)$-action preserve degrees; moving an internal shift through the total-degree tensor grading gives the two displayed shift isomorphisms. For an iterated flag, the maps $a\otimes(b\otimes m)\mapsto ab\otimes m$ identify the balanced tensors of the different parenthesizations, so the iteration is defined up to canonical degree-zero isomorphism; the classes in the Grothendieck groups below are unaffected. The construction is choice-free: no representatives or auxiliary data are selected.

## Sources

Source comparison: Khovanov–Lauda I §2.6 (the embedding, the idempotent $1_{\nu,\nu'}$ and the functors); Kang–Kashiwara §3 (3.9)-(3.11) (the $R(m)\otimes R(n)$-balanced form used here); Kleshchev §2.11 (multi-factor embeddings and the induced/restricted functors).

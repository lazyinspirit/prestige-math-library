---
id: rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges
kind: remark
title: "The degenerate and nondegenerate Ariki theorems have distinct parameter ranges"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 42
deps: [thm-degenerate-ariki-categorification,
       def-degenerate-cyclotomic-hecke-algebra,
       def-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, Invent. Math. 178 (2009) 451-484 (complete 32-page arXiv v4 article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Section 1 (printed pp. 3-4), Corollary 2 and the following paragraph: generic $q$ isomorphic to the rational degeneration, the remark on Ariki's generic theorem, the grading of Corollary 1 and the Main Theorem's type $A^{(1)}_{e-1}$ quiver for $e>0$; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Introduction (printed pp. 1-3): the nondegenerate setting at a primitive $e$-th root of unity with $\\hat{\\mathfrak{sl}}_e$ and the generic setting with $\\mathfrak{gl}_\\infty$, as distinct from the degenerate setting used here; complete passage read."
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations (complete 74-page lecture notes)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
      locator: "Section 11.2-11.3, Definition 11.3 (printed p. 46): the generic Hecke algebra presentation $T_s^2=(q_s-1)T_s+q_s$ used for the $v=-1$ specialization; passage read."
verification:
  precheck: n/a
---

## Statement

The theorem of this page is the *degenerate* Ariki categorification theorem
([[thm-degenerate-ariki-categorification]]): it concerns the tower
$H^\Lambda$ over $\mathbb C$ built from the degenerate cyclotomic Hecke algebras
at an integral multicharge $m_1\ge\cdots\ge m_l$
([[def-degenerate-cyclotomic-hecke-algebra]]), and it identifies the two
Grothendieck groups at parameter one with the type-$A$ Fock/highest weight data
of $\mathfrak{gl}_{I^+}$.

It neither states nor implies the categorification theorem for the
nondegenerate cyclotomic Hecke algebras $H^\Lambda_{\xi,d}$ at a Hecke
parameter $\xi$: the only bridge recorded here is the isomorphism
$H^\Lambda_d\cong H^\Lambda_{\xi,d}$ for $\xi$ *not* a root of unity (generic
$\xi$), which is not available at roots of unity. At a root of unity of order
$e$ the nondegenerate theory is a different theorem, stated for the affine type
$A^{(1)}_{e-1}$ Fock space with residues modulo $e$ and graded
(canonical-basis) coefficients, supplied by the cyclotomic KLR algebras and the
Hecke-KLR isomorphism, not by this page. In particular the ungraded coefficients computed
here do not supply the extra grading or the root-of-unity categorification theorem, and the
congruence $H^\Lambda_d\cong H^\Lambda_{\xi,d}$ at generic $\xi$ must not be
specialized. The generic parameter dictionary is $(T_r-\xi)(T_r+1)=0$ with
cyclotomic roots $Q_j=\xi^{m_j}$ on the nondegenerate side and roots $m_j$ on
the degenerate side; the algebra isomorphism is not literal equality of $x_r$
and $X_r$. The Hecke parameter $\xi$ is distinct from the Fock source parameter
$s$ and its reciprocal library parameter $t=s^{-1}$. The claimed failure is of universal root-parameter transport:
particular accidental root-parameter isomorphisms do not supply it.

## Remarks

**(a) Orientation and the genuine bridge.** In the generic presentation of
[[def-generic-type-a-hecke-algebra]] the generators satisfy
$(T_r-\xi)(T_r+1)=0$, so the cyclotomic parameters of the nondegenerate algebra
are the powers $Q_j=\xi^{m_j}$ of the Hecke parameter, while the degenerate
algebra [[def-degenerate-cyclotomic-hecke-algebra]] uses the integral roots
$m_j$ themselves. The source's Corollary 2 supplies an isomorphism over a
characteristic-zero field between the cyclotomic Hecke algebra at $q$ not a
root of unity and the rational degeneration $q=1$, and the same passage notes
that Ariki's theorem for generic $q$ is thereby *equivalent* to the degenerate
theorem; that equivalence is exactly the extent of the bridge and is the reason
the two statements are compared here. In degree two at level one it is verified directly by $T\mapsto((\xi+1)u+(\xi-1))/2$ in $\mathbb C[u]/(u^2-1)$, with inverse $u\mapsto(2T-(\xi-1))/(\xi+1)$ whenever $\xi\ne-1$. This local formula does not itself prove the all-rank bridge.

**(b) The root-of-unity regime is a different theorem.** At a primitive $e$-th
root of unity the source's main theorem replaces the rational degeneration by
the sign-modified cyclotomic KLR algebra of type $A_\infty$ for $e=0$ and type
$A^{(1)}_{e-1}$ for $e>0$, and the accompanying grading is extra structure not
present in the degenerate data. The graded decomposition-number theorems are
therefore separate results of the KLR/Hecke track, and the degenerate
coefficient data of this page, which is ungraded and lives at parameter one,
does not supply a proof of them through the claimed generic isomorphism.

**(c) The level-one witness against universal transport.** Take level one and
degree two. The generic type-$A$ Hecke algebra of
[[def-generic-type-a-hecke-algebra]] has the relation $T^2=(\xi-1)T+\xi$, so at
$\xi=-1$ over $\mathbb C$ its specialization is
$\mathbb C[T]/((T+1)^2)$, a two-dimensional algebra with a nonzero nilpotent
$T+1$ and a single simple module; it is not semisimple. The degenerate
level-one tower at charge $0$ is $H_2(0)=\mathbb C[S_2]=\mathbb C\oplus\mathbb C$,
which is semisimple with two simples, by the level-one presentation
$H_d(a)=\mathbb C[S_d]$ of [[def-degenerate-cyclotomic-hecke-algebra]]. The two
algebras are therefore not isomorphic at that parameter, so the degenerate
decomposition data, all of which is trivial at level one, cannot be transported to that root parameter by the asserted algebra
isomorphism. This computation is the small model of the
failure; a genuine comparison of the two theories at a root of unity would
have to go through the cyclotomic KLR presentation and its grading, which this
page does not supply.

**(d) Finite residue intervals.** For $I\ne\mathbb Z$ the theorem of this page
concerns the supported central cuts $H^\Lambda_\alpha$ of the tower, not an
unqualified identity $H^\Lambda_d=H_d(m)$; the parameter-range separation
recorded here is stated for the same supported cuts and inherits that scope.

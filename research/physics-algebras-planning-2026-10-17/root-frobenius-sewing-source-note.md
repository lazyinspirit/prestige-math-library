# Frobenius algebras and 2D sewing: reuse and recovered source

Root assistance,2026-10-17. This bounded branch supplements the categorical/TQFT route; it does not duplicate the existing general Frobenius definition or assert a completed classification proof.

Root fully read published `items/def-hh-frobenius-functional-and-associative-pairing.md` and `items/prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra.md`. The first already defines a Frobenius functional λ on any finite-dimensional unital algebra by nondegeneracy of β(a,b)=λ(ab). The second proves the coefficient-of-identity form on k[G] is associative, symmetric and nondegenerate for **any** field and finite group, despite its narrower title. Auditor independently checked `thm-hh-finite-hopf-algebras-are-frobenius` as another reusable example/theorem. Preserve these IDs and hypotheses.

The missing interface is the compatible coalgebra/Frobenius-object formulation, commutative/symmetric specialization, and oriented 2D cobordism sewing, distinguished from modular 3D TQFT and physical CFT. In strict tensor notation a Frobenius algebra object has multiplication/unit μ,η and comultiplication/counit Δ,ε, ordinary algebra and coalgebra axioms, and

$$\Delta\mu=(\mu\otimes1)(1\otimes\Delta)=(1\otimes\mu)(\Delta\otimes1).$$

Symmetry means ε μ=ε μ τ; commutativity means μ=μτ. In nonstrict notation insert the specified associators/unitors. In finite-dimensional vector spaces a comparison with the existing nondegenerate-functional definition needs an actual dual-basis/adjoint-coproduct proof, not a redefinition that silently asserts equivalence.

A concrete nonsemisimple example is A=k[x]/(x²) with ε(1)=0,ε(x)=1. The pairing in the basis1,x has matrix [[0,1],[1,0]], hence is nondegenerate over any field. Set Δ(1)=1⊗x+x⊗1 and Δ(x)=x⊗x. Direct checks on1,x establish coassociativity/counitality and the Frobenius relation; commutativity makes it symmetric. The nilpotent ideal kx is nonzero and square-zero, so the algebra is not semisimple. Frobenius does not imply semisimple, and the 2D route must not inherit semisimple fusion assumptions without justification.

## Actual source recovery and selected reading

Retrieved Aaron D. Lauda and Hendryk Pfeiffer, *Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras*, https://arxiv.org/pdf/math/0510664, actual **v3,6January2008**,47PDF pages. Local PDF/text are `sources/00-root/lauda-pfeiffer-open-closed-math0510664.{pdf,txt}`. Root read the abstract on PDFp.1 and PDFpp.4–10, including §2.1 Definitions2.1–2.5, knowledgeable-Frobenius conditions, and the initial generator/presentation discussion. Root did not read or verify the entire topological normal-form proof or the complete47-page paper. A guessed Kock author-notes URL returned404 and is not a read source.

The paper's knowledgeable Frobenius data are a symmetric Frobenius algebra A, commutative Frobenius algebra C, an algebra map i:C→A, and its pairing dual i*:A→C. It requires central image i(C), pairing duality and the Cardy condition:

$$\varepsilon_C\mu_C(1_C\otimes i^*)=\varepsilon_A\mu_A(i\otimes1_A),\qquad\mu_A\tau_{A,A}\Delta_A=i\,i^*.$$

These are typed equations on C⊗A and A respectively. It is not required that C=Z(A); the paper explicitly says examples need not have that equality. An open-sector symmetric algebra alone therefore does not specify every closed-sector datum.

The claimed equivalence is for the paper's precisely defined oriented open-closed cobordisms with corners/global structure and boundary labels, valued in a stated symmetric monoidal target. The word “extended” in this paper is not permission to claim arbitrary fully extended point-level TQFT classification. Its sufficiency argument needs topological normal forms, handle slides/cancellations and full relations; reading the definition pages does not discharge that proof. A sewing theorem or closed2D classification remains a future complete local proof obligation. General conformal-field-theory correlation functions and physical realisation require further data and assumptions.

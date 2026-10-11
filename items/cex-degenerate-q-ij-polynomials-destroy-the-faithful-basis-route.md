---
id: cex-degenerate-q-ij-polynomials-destroy-the-faithful-basis-route
kind: counterexample
title: "Degenerate parameters $Q_{ij}$ destroy the faithful polynomial-representation route"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations, def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum, def-klr-grading-and-diagrammatic-composition, thm-polynomial-representation-of-a-klr-algebra, thm-klr-pbw-basis-theorem, ex-the-two-vertex-klr-polynomial-representation]
justified_by: []
aliases: []
landmark: false
dependency_level: 9
proof_strategy: counterexample
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3 (66 pages)'
      url: 'https://arxiv.org/pdf/0812.5023'
      locator: '§3.2.1, Theorem 3.7 and its proof, printed pp. 23-27: the equivalence "PBW iff the spanning set is a basis iff $Q_{ij}(u,v)=Q_{ji}(v,u)$" and the explicit dependence on the factorization in Proposition 3.12.'
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2'
      url: 'https://arxiv.org/pdf/0803.4121'
      locator: '§2.3, Proposition 2.3 and its proof, printed pp. 15-22: the polynomial action is constructed from the node polynomials and fails when their defining coefficients vanish; §2.2 for the two-strand specializations.'
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups II, Transactions of the AMS 363 (2011) 2685-2700, arXiv:0804.2080v1'
      url: 'https://arxiv.org/pdf/0804.2080'
      locator: '§1-§2, printed pp. 1-4: the quadratic relation with the $d_{ij}$-dot sums and the nonvanishing of the extremal (top-degree) coefficients in the standard normalization.'
---

## Statement refuted

 the faithful polynomial-representation route to the PBW basis and the Grothendieck-ring comparison of [[thm-polynomial-representation-of-a-klr-algebra]] needs only the hermitian symmetry (Q2) and the degree condition (Q3); the nonvanishing conditions (Q1) and (Q4) can be dropped.

## Facts & Assumptions
**Given:** The two-vertex datum $I=\{i,j\}$, $a_{ij}=a_{ji}=-1$, $d_i=d_j=1$, the degenerate pair $Q_{ij}=Q_{ji}=0$ satisfying (Q2) and (Q3) of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] but not (Q1), and the non-hermitian pair $Q_{ij}(u,v)=u+2v$, $Q_{ji}(u,v)=u+v$ satisfying (Q1), (Q3) and (Q4) but not (Q2), over a field of characteristic $\ne2$.

[F1] Relation list (4) and (6) of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]: $\tau_1^2e(\nu)=Q_{\nu_1\nu_2}(x_1,x_2)e(\nu)$, and $\tau_1x_b=x_{s_1(b)}\tau_1$ when $\nu_1\ne\nu_2$.

[F2] Spanning ([[thm-klr-pbw-basis-theorem]], whose reduction argument uses only the relations): the family $\{x_1^ax_2^b\tau_1^\varepsilon e(\nu)\}$ spans $R(\alpha_i+\alpha_j)$ for every two-vertex parameter pair, hermitian or not.

[F3] Faithful-route hypotheses ([[thm-polynomial-representation-of-a-klr-algebra]]): the constructed action requires a factorization $Q_{ij}=P_{ij}(u,v)P_{ji}(v,u)$ with both $P_{ij}$ and $P_{ji}$ nonzero, and its faithfulness is proved only under that hypothesis.

## Counterexample
**Counterexample (two vertices).** Let $I=\{i,j\}$, $a_{ij}=a_{ji}=-1$, $d_i=d_j=1$, and take the degenerate parameters $Q_{ij}=Q_{ji}=0$, which satisfy (Q2) and (Q3) but not (Q1). Then: (a) The algebra $R(\alpha_i+\alpha_j)$ has the PBW basis displayed below even for $Q=0$. Indeed dots slide past crossings and crossing squares vanish, so those monomials span; independence follows from the algebra of the two-idempotent polynomial skew quiver with both length-two crossing paths zero. There is no factorization with both factors nonzero, since $k[u,v]$ is a domain. (b) Taking $P_{ij}=0$ and $P_{ji}=1$ gives a well-defined polynomial action: $\tau_1$ kills the $ij$ summand and swaps the $ji$ summand into $ij$. Hence it kills the NONZERO element $\tau_1e(ij)$, so is not faithful; it need not kill both crossings. For any polynomial-factor action with $Q=0$ at least one crossing factor vanishes, giving the same nonfaithfulness conclusion in that corner. (c) Dropping the hermitian symmetry (Q2) while keeping (Q1), (Q3) and (Q4) also destroys the basis route: over a field of characteristic different from $2$, for $a_{ij}=-1$ and the non-hermitian pair $Q_{ij}(u,v)=u+2v$, $Q_{ji}(u,v)=u+v$ (both homogeneous of degree $2$ with nonzero extremal coefficients, but $Q_{ji}(v,u)=v+u\ne u+2v$), associativity together with relation (4) on the two corners $(i,j)$ and $(j,i)$ and the dot slides of (6) for the pair of distinct residues gives the identity $\bigl(Q_{ji}(x_1,x_2)-Q_{ij}(x_2,x_1)\bigr)\tau_1e(ij)=-x_1\tau_1e(ij)=0$, hence $\tau_1x_2e(ij)=0$; the spanning monomial $\tau_1x_2e(ij)$ of Rouquier's family $\{x_1^ax_2^b\tau_1^\varepsilon e(\nu)\}$ therefore vanishes, so that family is not linearly independent and the graded PBW statement fails. Equivalently, Rouquier's Theorem 3.7 shows that PBW is equivalent to $Q_{ij}(u,v)=Q_{ji}(v,u)$, the identity violated here. (On $(i,j,i)$ the braid relation reads $\bigl(\tau_2\tau_1\tau_2-\tau_1\tau_2\tau_1\bigr)e(i,j,i)=-e(i,j,i)$: both sides have degree $0$, so the failure is a linear dependence, not a degree mismatch.) Thus (Q1) is necessary for this factorized faithful-action route, and (Q2) is necessary for the PBW family. This example does not establish an independent need for (Q4) in polynomial faithfulness: for any nonzero hermitian $Q$, the factorization $P_{ij}=Q_{ij}$, $P_{ji}=1$ already has nonzero factors. The extremal-coefficient condition is used separately in the categorical Serre contraction of [[thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]], step 2.1; the example does not claim that the KLR algebra with $Q_{ij}=0$ fails to be free (PBW independence has its own source proof), only that the faithful polynomial-representation route used in this library collapses.

1.1 (a) Define a $k$-algebra $E$ with $k$-basis $\{x_1^ax_2^be(ij),x_1^ax_2^be(ji),x_1^ax_2^b\tau e(ij),x_1^ax_2^b\tau e(ji)\}_{a,b\ge0}$ and multiplication determined by: $x_1,x_2$ commuting with each other and with the idempotents; $\tau e(ij)=e(ji)\tau$, $\tau e(ji)=e(ij)\tau$; $\tau^2=0$; and moving a dot across a crossing permutes the two variables. Associativity holds because the dot permutation is an algebra automorphism of $k[x_1,x_2]$, the idempotents are orthogonal, and every product containing two consecutive crossings or an idempotent mismatch is zero. The presentation of $R(\alpha_i+\alpha_j)$ with $Q=0$ is satisfied by this model, so the universal property gives a surjection $R(\alpha_i+\alpha_j)\twoheadrightarrow E$, while the same Coxeter/dot reduction that proves spanning [F2] shows the model basis spans $R(\alpha_i+\alpha_j)$; a linear dependence among those spanning elements in $R$ would map to a dependence among basis elements of $E$, hence they are independent and the PBW basis of the statement holds for $Q=0$. This proves (a) without applying the nondegenerate PBW theorem outside its hypotheses. [given, F1, F2, algebra]

2.1 (b) A product $P_{ij}(u,v)P_{ji}(v,u)=0$ in the domain $k[u,v]$ forces one factor to be zero, so no factorization has both factors nonzero; taking $P_{ij}=0$, $P_{ji}=1$ and applying the formula of [[thm-polynomial-representation-of-a-klr-algebra]] defines a legitimate action: on the $ij$ summand the crossing operator vanishes, on the $ji$ summand it is the swap. It kills the element $\tau_1e(ij)$, which is nonzero by the basis of step 1.1, so this action (and by the same argument every factorized action, since at least one corner factor vanishes) is not faithful; this is exactly the failure of the faithfulness hypothesis [F3]. [step 1.1, F3, algebra]

3.1 (c) For the non-hermitian pair, associativity of the word $\tau_1\tau_1\tau_1$ on $e(ij)$ computed in the two groupings gives, using relation (4) on the $ij$ corner for the right grouping and on the $ji$ corner after passing through $\tau_1$ for the left grouping, $\bigl(Q_{ij}(x_2,x_1)-Q_{ji}(x_1,x_2)\bigr)\tau_1e(ij)=0$; the dot slides for distinct colours are used to move dots across the crossings in the outer factors. Substituting $Q_{ij}(u,v)=u+2v$ and $Q_{ji}(u,v)=u+v$ gives $(x_2+2x_1)-(x_1+x_2)=x_1$, so $x_1\tau_1e(ij)=0$; applying the dot slide $\tau_1x_2=x_1\tau_1$ on the $ij$ corner gives $\tau_1x_2e(ij)=x_1\tau_1e(ij)=0$. The element $x_1\tau_1e(ij)$ belongs to the spanning family $\{x_1^ax_2^b\tau_1^\varepsilon e(\nu)\}$ and is nonzero in the free algebra of the presentation, so that spanning family is not linearly independent and the graded PBW claim fails; equivalently, Rouquier’s PBW criterion shows that PBW is equivalent to the hermitian symmetry $Q_{ij}(u,v)=Q_{ji}(v,u)$, which the pair violates, and the failure is a linear dependence rather than a degree mismatch. [step 1.1, F1, F2, algebra] ∎

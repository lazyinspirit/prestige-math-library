<!-- new lines at canonical 9 -->
  proof: ai-altered


<!-- new lines at canonical 13 -->
proof_strategy: direct


<!-- new lines at canonical 25 -->
      url: https://arxiv.org/pdf/2012.03086v1


<!-- new lines at canonical 32 -->
Here $L_+$ and $L_-$ are identical oriented links outside a ball and have respectively a positive and negative crossing inside it, while $L_0$ is obtained in that ball by the orientation-preserving smoothing. For each integer $k\ge0$, the $k$th Conway coefficient is $c_k(L):=[z^k]\nabla_L(z)$. This carrier records the conventional skein interface; existence and uniqueness of the invariant are a separate well-definedness obligation. The skein characterization is on nonempty oriented links. If the link domain also includes the empty link, extend the invariant by the separate conventional value $\nabla_{\varnothing}(z)=0$; this empty-link value is not determined by the nonempty skein axioms.


<!-- new lines at canonical 44 -->
[Garaev, “Elementary proof of existence of the Alexander-Conway polynomial,” §§1–4, PDF pp. 1–9](https://arxiv.org/pdf/2012.03086v1)


<!-- new lines at canonical 46 -->


## Facts & Assumptions

**Given:** Finite diagrams of nonempty oriented links, with no ordering of their components, the declared positive/negative crossing convention and oriented smoothing. The link isotopy and diagram conventions are those of the Definition.

[F1] **External input — existence of the Conway coefficient invariants.** T. Garaev, *Elementary proof of existence of the Alexander-Conway polynomial*, arXiv:2012.03086v1 (5 December 2020), Section1, Theorem1, PDF p.2, with the equivalence and skein charts on p.1, supplies a sequence $c_{-1}=0,c_0,c_1,\ldots$ of invariants of oriented link diagrams with unordered components. They are invariant under all oriented Reidemeister moves and planar isotopies, have $c_0(U)=1$ and $c_j(U)=0$ for $j>0$, and satisfy
$$c_j(L_+)-c_j(L_-)=c_{j-1}(L_0),\qquad j\ge0.$$
This is an imported established coefficient-existence result, not a claim to reconstruct its Reidemeister-III argument. The source's crossing sign agrees with the declared convention: it is positive when the ordered over/under tangent pair has positive planar determinant. Its Figure2 is the oriented smoothing in this Definition. Polynomial finiteness, integrality and uniqueness are earned below rather than falsely attributed to the coefficient-sequence statement alone.

[F2] **External input — ambient-link interpretation and conventional normalization.** Chmutov–Duzhin–Mostovoy, *Introduction to Vassiliev Knot Invariants*, §1.2.1, printed p.11/PDF19, gives the Reidemeister diagram criterion with its oriented extension; §2.3.1, printed pp.35–36/PDF43–44, states the Conway invariant of ORIENTED LINKS with values in $\mathbb Z[t]$, normalized to one on the unknot and satisfying its displayed positive-minus-negative skein relation. It uses links with unnumbered components. These are the ambient-link interpretation and the standard skein convention of [F1]; the letter $t$ is renamed $z$. The book's §2.3.2 expressly notes that existence is nontrivial. Here existence is EXTERNALLY supplied, not inferred from that observation or from a formal definition. The empty link, if included in the ambient link domain, is assigned the separate conventional zero value in the Definition; the imported skein characterization is only for nonempty links.

Actual reading limits: the complete Garaev v1 Section1/Theorem1 statement and crossing-sign definitions on PDF pp.1–2, including visual inspection of Figures1–3; the coefficient-extension setup on p.3; CDM's complete §1.2.1 text and its oriented extension on printed p.11, and the complete §2.3.1 definition and displayed skein normalization plus the opening §2.3.2 text on printed pp.35–36. No full Garaev proof, Reidemeister-III reconstruction or full book reading is claimed. These exact established external inputs are used under the run-specific external-source permission.

## Proof

1.1 Form the coefficientwise formal expression $C_D(z)=\sum_{j\ge0}c_j(D)z^j$ from [F1]. It is a diagram invariant, has value $1$ on an unknot, and satisfies $C_{D_+}-C_{D_-}=zC_{D_0}$ coefficientwise. A local positive and negative curl on any component of the $r$-component unlink are both that unlink; the oriented smoothing is the $(r+1)$-component unlink. Thus $c_j(U_r)-c_j(U_r)=c_{j-1}(U_{r+1})$ for every $j\ge1$. All coefficients of $U_{r+1}$ vanish. Therefore the unlink values of the formal expression are $1$ for one component and $0$ for more than one. This is also the forced unlink value for ANY polynomial-valued invariant satisfying the Definition. [F1, F2, given, algebra]

1.2 Here is the finite argument that the expression is actually in $\mathbb Z[z]$. In a diagram choose finitely many component basepoints and an order. Call a crossing bad when its first encounter in this traversal is the underpass. If none is bad, the first component passes over every later component and has a descending self-diagram. Pull its successive arcs above everything they first encounter to isolate a round circle; repeat for the remaining components. Thus a descending diagram is an unlink. At a bad crossing the skein relation writes its value as the value of the switched diagram, plus or minus $z$ times its oriented smoothing. The switched diagram has one fewer bad crossing and the same number $N$ of crossings; the smoothing has $N-1$ crossings. Reset the finite component data on a smoothing if necessary. The nonnegative integer $N(N+1)/2+b$, with $b$ the number of bad crossings, decreases in each branch. Hence this is a FINITE resolution tree. Its leaves have values $0$ or $1$ by step1.1. Working back through the tree uses only integer addition/subtraction and multiplication by $z$, so $C_D\in\mathbb Z[z]$. In fact every branch has at most $N$ smoothing operations, giving degree at most $N$. This proves finiteness and integrality without assuming an integer-valued formal sequence theorem or making an infinite selection. [F1, F2, step 1.1, construct, algebra]

2.1 Apply the SAME finite tree to any two polynomial-valued invariants satisfying the stated normalization and skein relation. Their unlink leaves agree by step1.1, and each internal skein relation then forces agreement. Their values agree on every diagram. Existence follows from [F1], step1.2 and the ambient-link interpretation [F2], and this argument proves uniqueness. The separately fixed empty-link extension is unique as well, since its prescribed value is zero. Consequently the separate existence/uniqueness obligation mentioned in the Definition is now discharged: the resulting actual link invariant is exactly $\nabla$, and its coefficient $[z^k]\nabla_L$ is well-defined for every $k$. The finite local arguments use no choice axiom; the external constructive coefficient/diagram inputs are explicitly distinguished from them. [F1, F2, step 1.1, step 1.2, algebra] ∎
